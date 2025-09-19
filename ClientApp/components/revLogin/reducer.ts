import * as _ from 'lodash';

import { ILoginState, InitialState, loginActions, loginReducerT } from 'login/reducer';
import { checkFetchError, getResponce, getResponceString } from 'base/asyncLoader';

import { Auth0SettingsModel } from '../../generated/Auth0SettingsModel';
import { AuthPopup } from 'react-oauth-popup/src';
import Base64Encode from './b64';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { LicenseLocksModel } from '../../generated/LicenseLocksModel';
import ReducerBase from 'base/baseReducer';
import { StatusMessageModel } from '../../generated/StatusMessageModel';
import ensureWaitBox from '../waitBox/reducer';
import ensureWorkSpace from '../workspace/reducer';
import ensureWorkspaces from '../workspace/reducer';
import { handleAction } from 'redux-actions';
import qs from 'qs';
var md5 = require('md5');

type ForgotPasswordProps = {
  prompt?: string;
  isError?: boolean;
  showResetPin?: boolean;
};

export interface IRevLoginState extends ILoginState {
  readonly dataBaseStatusAsync: IAsyncResult<StatusMessageModel>;

  //Not really sure what this state has
  readonly loginAsync: IAsyncResult<string>;

  //when true we have an expired token and the Refresh Token IFRAME should be mounted
  readonly rehreshingToken: boolean;

  readonly forgotPassword: ForgotPasswordProps;
  readonly passwordResetAsync: IAsyncResult<string>;

  readonly licLockData: { [key: string]: LicenseLocksModel };
  readonly licLockDataVisible: boolean;
}

let _preLoginChecked = false;

type myActions = loginActions & {
  fetchDbState: (value: PromiseLike<StatusMessageModel>) => PromiseLike<StatusMessageModel>;
  validateCreds: (credsPromise: PromiseLike<string>) => IAsyncResult<string>;
  showRefreshingToken: (value: boolean) => boolean;

  updateForgotpassword: (
    key?: keyof ForgotPasswordProps,
    value?: any,
  ) => { key?: keyof ForgotPasswordProps; value?: any };
  createForgotPin: (credsPromise: PromiseLike<string>) => IAsyncResult<string>;

  setLicLockData: (value?: { [key: string]: LicenseLocksModel }) => {
    [key: string]: LicenseLocksModel;
  };
  showLicLockData: (value: boolean) => boolean;
};

//let _initialStateLoaded = false;

class revLoginReducer extends loginReducerT<IRevLoginState, myActions> {
  createActionList() {
    return _.assign(this.createActionListT(), {
      fetchDbState: [(value: PromiseLike<StatusMessageModel>) => value, (_) => ({ Async: true })],

      validateCreds: [
        (credsPromise: PromiseLike<Response>) => {
          const task = credsPromise.then((response) => {
            return response;
          });
          /*.then(response => response.text() as Promise<string>)*/
          return task;
        },
        (_) => ({ Async: true }),
      ],

      createForgotPin: [
        (credsPromise: PromiseLike<Response>) => credsPromise,
        (_) => ({ Async: true }),
      ],

      showRefreshingToken: (value: boolean) => value,

      updateForgotpassword: (key?: keyof ForgotPasswordProps, value?: any) => ({ key, value }),

      setLicLockData: (value?: { [key: string]: LicenseLocksModel }) => value,
      showLicLockData: (value: boolean) => value,
    });
  }

  reducers() {
    return _.assign(this.reducersT(), {
      dataBaseStatusAsync: handleAction(
        this._myActions.fetchDbState,
        (state, action) => {
          return action.payload;
        },
        null,
      ),

      loginAsync: handleAction(
        this._myActions.validateCreds,
        (state, action) => action.payload,
        {},
      ),
      passwordResetAsync: handleAction(
        this._myActions.createForgotPin,
        (state, action) => action.payload,
        {},
      ),

      rehreshingToken: handleAction(
        this._myActions.showRefreshingToken,
        (state, action) => action.payload,
        false,
      ),

      forgotPassword: handleAction(
        this._myActions.updateForgotpassword,
        (state, action) => {
          const payload = action.payload as { key?: keyof ForgotPasswordProps; value?: any };

          if (null == payload.key) return null;

          const newmember: any = {};

          newmember[payload.key] = payload.value;

          return _.assign({}, state || {}, newmember);
        },
        false,
      ),

      licLockData: handleAction(
        this._myActions.setLicLockData,
        (state, action) => action.payload || null,
        null,
      ),
      licLockDataVisible: handleAction(
        this._myActions.showLicLockData,
        (state, action) => action.payload,
        false,
      ),
    });
  }

  public forgotPassword(userName: string) {
    return (dispatch, getState) => {
      if (!userName) {
        dispatch(
          this._myActions.updateForgotpassword(
            'prompt',
            'Please enter your email address. If you do not know your email address contact customer support.',
          ),
        );
        dispatch(this._myActions.updateForgotpassword('isError', true));
      } else {
        //clear out login errors
        dispatch(this._myActions.validateCreds(Promise.resolve('')));

        dispatch(
          this._myActions.createForgotPin(
            (async () => {
              const response = await getResponceString(
                fetch(`/api/auth/forgotpassword/${encodeURIComponent(userName)}`),
              );

              dispatch(
                this._myActions.updateForgotpassword(
                  'prompt',
                  'Please check your email and enter the code we sent you',
                ),
              );
              dispatch(this._myActions.updateForgotpassword('isError', false));
              dispatch(this._myActions.updateForgotpassword('showResetPin', true));

              return response;
            })(),
          ),
        );
      }
    };
  }

  //overridden
  protected getAdditionalHeaders(getState: () => any): { [key: string]: string } {
    const { currentWorkSpace } = ensureWorkspaces().getCurrentState(getState());
    return currentWorkSpace ? { workspace: currentWorkSpace } : {};
  }

  public logOut(noRefresh?: boolean) {
    return async (dispatch, getState) => {
      const { dataBaseStatusAsync } = this.getCurrentState(getState());

      const response = await getResponceString(fetch('/api/auth/logoff'));

      _preLoginChecked = true;
      dispatch(this._myActions.updateJwt(null));

      if (!noRefresh) {
        if (
          dataBaseStatusAsync &&
          dataBaseStatusAsync.result &&
          dataBaseStatusAsync.result.signOutUrl
        ) {
          window.location.href = dataBaseStatusAsync.result.signOutUrl;
        } else {
          let currentUrl = window.location.href;

          if (currentUrl.indexOf('?') > 0) {
            currentUrl = currentUrl.substring(0, currentUrl.indexOf('?'));
          }

          const { creationObject } = ensureWorkSpace().getCurrentState(getState());

          if (!!creationObject) {
            currentUrl += '?' + qs.stringify(creationObject);
          }

          window.location.href = currentUrl;
        }
      }
    };
  }

  protected extendSession(calledFromLoop?: boolean) {
    return (dispatch, getState) => {
      const { rehreshingToken } = this.getCurrentState(getState());
      const _mine = this;

      if (!rehreshingToken) {
        if (calledFromLoop) {
          console.debug('extendSession :calledfromloop and not rehreshingToken. We are done');
          return true;
        }

        dispatch(this._myActions.showRefreshingToken(true));
      }

      return new Promise((r) => setTimeout(r, 1000)).then(() => {
        return dispatch(_mine.extendSession(true));
      });
    };
  }

  public showLicLockData = (value: boolean) => this._myActions.showLicLockData(value);

  public releaseLock(key: string) {
    return (dispatch, getState) => {
      if (!key) {
        console.error('key cannot be null');
        return;
      }

      dispatch(
        ensureWaitBox().doWaitAsync('releasing locks ...', async () => {
          const response = await getResponce<{ [key: string]: LicenseLocksModel }>(
            fetch(`/api/auth/releaseLock/${encodeURIComponent(key)}`),
          );

          dispatch(this._myActions.setLicLockData(response));

          return true;
        }),
      );
    };
  }

  //invoked by login form to check if we need to do anything before we show the login form
  public checkLoginPreReqs() {
    return (dispatch, getState) => {
      const { creationObject } = ensureWorkSpace().getCurrentState(getState());
      const openIdProvider: string = creationObject && creationObject.authProvider;

      if (_preLoginChecked) {
        console.debug('PreLogin has already been checked');
        return;
      }

      //we only want to do this on Initial load
      _preLoginChecked = true;

      if (!!openIdProvider) {
        console.debug(`Pinned loging with auth provider ${openIdProvider}`);

        dispatch(this.doLogin({ openIdProvider }));
      }
    };
  }

  //this method is called for all kinds of login, so don't assume username passwords exists
  public doLogin(params?: {
    UserName?: string;
    Pwd?: string;
    openIdProvider?: string;
    loadinFrame?: Window;
  }) {
    return (dispatch, getState) => {
      //we want to clear  any liclock data
      dispatch(this._myActions.setLicLockData());

      const { dataBaseStatusAsync } = this.getCurrentState(getState());

      if (!dataBaseStatusAsync || !dataBaseStatusAsync.result) {
        if (!dataBaseStatusAsync || dataBaseStatusAsync.isLoading) {
          console.log('database status is loading try again ');
          return new Promise((r) =>
            setTimeout(() => {
              r();
            }, 1000),
          ).then(() => dispatch(this.doLogin(params)));
        }

        throw 'revLogin not yet initialized';
      }

      if (!params) {
        console.error('loging called with null params');
        return;
      }

      if (!!params.openIdProvider) {
        const validatePromise = async () => {
          if (!window) {
            throw 'window object not defined';
          }

          const redirectUrl =
            dataBaseStatusAsync.result.openIdProviders &&
            dataBaseStatusAsync.result.openIdProviders[params.openIdProvider];
          if (!redirectUrl) throw 'redirect URL not defined';

          window.location = redirectUrl as any;
          await new Promise((r) => setTimeout(r, 10 * 1000));
          throw 'failed to redirect to openId authority';
        };

        return dispatch(this._myActions.validateCreds(validatePromise()));
      } else {
        const { UserName: login, Pwd, ...restOfParams } = params;

        if (!login || !login.trim() || !Pwd || !Pwd.trim()) {
          return;
        }
        var t1 = md5(params.Pwd);
        var pwdDigest = Base64Encode(t1);

        var validatePromise = fetch('/api/auth', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            _.assign(
              {
                login,
                pwdDigest,
                sessionId:
                  dataBaseStatusAsync &&
                  dataBaseStatusAsync.result &&
                  dataBaseStatusAsync.result.sessionId,
              },
              restOfParams,
            ),
          ),
        })
          .then((response) => {
            return checkFetchError(response);
          })
          .then((response) => response.text() as Promise<string>)
          .then((jwt) => {
            dispatch(this._myActions.updateJwt(jwt));
            return jwt;
          })
          .catch((err) => {
            console.error('failed to login :' + err);

            if (err && err.Reason == 'ALL_LICENSE_INUSE' && !!err.additionalInformation) {
              console.log('setting license lock data');
              const licData: { [key: string]: string } = err.additionalInformation;
              const licDataMap = _.reduce(
                _.keys(licData),
                (acc, k) => {
                  acc[k] = JSON.parse(licData[k]) as LicenseLocksModel;
                  return acc;
                },
                {} as { [key: string]: LicenseLocksModel },
              );
              dispatch(this._myActions.setLicLockData(licDataMap));
            }

            throw err;
          });
        return dispatch(this._myActions.validateCreds(validatePromise));
      }
    };
  }

  //1st thing invoked when Rev Starts
  public checkDatabase() {
    return (dispatch, getState) => {
      {
        const { dataBaseStatusAsync } = this.getCurrentState(getState());
        if (dataBaseStatusAsync) return dataBaseStatusAsync;
      }

      const creationObject = dispatch(ensureWorkSpace().loadCreationObject());

      dispatch(this.registerFetchHook());

      const fetchDb = async () => {
        const response = await getResponce<StatusMessageModel>(
          fetch(`/api/auth?context=${encodeURIComponent(window && (window.location as any))}`, {
            noAuth: true,
          } as any),
        );

        if (response && response.jwt && !(creationObject && creationObject.noAutoSignin)) {
          setTimeout(() => {
            dispatch(this._myActions.updateJwt(response.jwt));
          }, 100);
        }

        return response;
      };

      return dispatch(this._myActions.fetchDbState(fetchDb()));
    };
  }
}

export default () => revLoginReducer.getInstance(revLoginReducer, 'login');
