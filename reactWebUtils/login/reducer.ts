import * as Models from '../../ClientApp/generated/UserInfoModel';
import * as _ from 'lodash';
import * as _clientOnly from './modules.clientOnly';

import ReducerBase from 'base/baseReducer';
import { handleAction } from 'redux-actions';
import jwt_decode from 'jwt-decode';

const clientOnly = _clientOnly as any;

export interface ILoginState {
  ///The actual JWT string
  JWT: string;

  JWTDecoded: any;

  profile: Models.UserInfoModel;
}

let initialState = {
  jwt: null,
  profile: null,
};

if (typeof localStorage === 'undefined') console.warn('no local storage found');
else {
  let jwt = localStorage.getItem('persisted-jwt');
  if (jwt) initialState.jwt = jwt;

  initialState.profile = JSON.parse(localStorage.getItem('persisted-profile') || '{}');
}

export const InitialState = initialState;

export type loginActions = {
  updateJwt: (newState: string) => string;
  updateProfile: (newState: string) => string;
};

export abstract class loginReducerT<
  TS extends ILoginState,
  TA extends loginActions,
> extends ReducerBase<TS, TA> {
  protected createActionListT() {
    return {
      updateJwt: (text) => {
        return text;
      },
      updateProfile: (text) => text,
    };
  }

  protected reducersT() {
    return {
      JWT: handleAction(
        this._myActions.updateJwt,
        (state, action) => {
          if (typeof localStorage !== 'undefined')
            localStorage.setItem('persisted-jwt', action.payload || '');

          return action.payload;
        },
        initialState.jwt,
      ),

      JWTDecoded: handleAction(
        this._myActions.updateJwt,
        (state, action) => {
          if (!action.payload) return null;

          const decoded = jwt_decode(action.payload);

          return decoded;
        },
        null,
      ),

      profile: handleAction(
        this._myActions.updateProfile,
        (state, action) => {
          if (typeof localStorage !== 'undefined')
            localStorage.setItem('persisted-profile', JSON.stringify(action.payload || {}));

          return action.payload;
        },
        initialState.profile || {},
      ),
    } as any;
  }

  _myLock = null;
  _fetchIntUnregister = null;

  //override this in derived classes for additional fetch headers
  protected getAdditionalHeaders(getState: () => any): { [key: string]: string } {
    return {};
  }

  public abstract doLogin(params?: { UserName?: string; Pwd?: string }): any;

  //override in derived classes
  protected extendSession() {}

  //we only want one of this to exist at any time
  private _refreshIfNeededPromise: Promise<any> = null;

  registerFetchHook() {
    return (dispatch, getState) => {
      if (!this._fetchIntUnregister) {
        const me = this;

        //since we are injecting reducers, initialstate is not populated. So we need to fire these
        if (initialState.jwt) dispatch(me._myActions.updateJwt(initialState.jwt));

        if (initialState.profile) dispatch(me._myActions.updateProfile(initialState.profile));

        if (clientOnly.register) {
          this._fetchIntUnregister = clientOnly.register({
            request: function (url, initialConfig) {
              return Promise.resolve(initialConfig)
                .then((config) => {
                  if (!!(config || {}).noAuth) {
                    return config;
                  }

                  const { JWTDecoded } = me.getCurrentState(getState());

                  if (!JWTDecoded) {
                    return config;
                  }

                  if (!me._refreshIfNeededPromise) {
                    //if this is not null, we already have refreshed this
                    me._refreshIfNeededPromise = Promise.resolve();

                    /* we are having a hard time with silent refresh will figure this out later.

                                        if (typeof JWTDecoded.exp !== 'undefined' && JWTDecoded.exp < (Date.now().valueOf() / 1000)){
                                            
                                    
                                            me._refreshIfNeededPromise = Promise.resolve()
                                                    .then(()=>new Promise(r=>setTimeout(r,100)))
                                                    .then(()=>dispatch(me.extendSession()))
                                                    .then(()=>new Promise(r=>setTimeout(r,100)));
                                        }
                                        */
                  }

                  return me._refreshIfNeededPromise
                    .then(() => {
                      const { JWT } = me.getCurrentState(getState());

                      if (!JWT) return config;

                      config = config || {};
                      config.headers = config.headers || {};
                      config.headers['Authorization'] = 'Bearer ' + JWT;

                      config.headers = _.assign(config.headers, me.getAdditionalHeaders(getState));

                      me._refreshIfNeededPromise = null;
                      return config;
                    })
                    .catch((err) => {
                      me._refreshIfNeededPromise = null;
                      throw err;
                    });
                })

                .then((config) => Promise.resolve([url, config]));
            },

            response: function (response) {
              if (401 == response.status) {
                const { JWT } = me.getCurrentState(getState());

                if (JWT) {
                  dispatch(me._myActions.updateJwt(null));
                }
              }
              return response;
            },
          });
        }
      }

      return this._fetchIntUnregister;
    };
  }

  updateJwt = (jwt: string) => this._myActions.updateJwt(jwt);
}

class loginReducer extends loginReducerT<ILoginState, loginActions> {
  createActionList() {
    return this.createActionListT();
  }
  reducers() {
    return this.reducersT();
  }
  public doLogin(params?: { UserName?: string; Pwd?: string }) {
    console.error('dologin NOT implemented');
  }
}

export default () => loginReducer.getInstance(loginReducer, 'login');
