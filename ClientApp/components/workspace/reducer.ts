import * as _ from 'lodash';
import * as moment from 'moment';

import ensureProjects, { IProjectsState } from '../projects/reducer';
import { handleAction, handleActions } from 'redux-actions';

import { ChunkUploadModel } from '../../generated/ChunkUploadModel';
import { ExternalUseTokenReqModel } from '../../generated/ExternalUseTokenReqModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { MessageToShowModel } from '../../generated/MessageToShowModel';
import { MyRolesModel } from '../../generated/MyRolesModel';
import ReducerBase from 'base/baseReducer';
import { WorkspaceAccessModel } from '../../generated/WorkspaceAccessModel';
import { WorkspaceForEditModel } from '../../generated/WorkspaceForEditModel';
import { WorkspaceModel } from 'ClientApp/generated/WorkspaceModel';
import { checkFetchError } from 'base//asyncLoader';
import ensureBilling from '../billing/reducer';
import ensureConfirmBox from '../confirmation/reducer';
import ensureLogin from '../revLogin/reducer';
import ensureWaitBox from '../waitBox/reducer';
import qs from 'qs';

export type TokenEditor = ExternalUseTokenReqModel & {
  token?: string;
  validityDays: number;
};

export type WorkspaceEdit = WorkspaceForEditModel & {
  nameValidation: string;
  isModified?: boolean;
};

type MessageToShowState = MessageToShowModel & { isVisible?: boolean };

export type MessageList = { [key: string]: MessageToShowState };

export const AUTHPROVIDEROPENID = 'OpenId Connect';

export interface IWorkSpaceState {
  //if this is not null, the display is stuck on selecting workspaces
  readonly myWorkspacesAsync?: IAsyncResult<WorkspaceAccessModel[]>;

  //the workspace under edit
  readonly workspaceEditAsync: IAsyncResult<WorkspaceEdit>;

  //The workspace used for this session
  readonly currentWorkSpace: string;

  //we are creating a access token to be used by external scripts
  readonly createingServerToken?: TokenEditor;

  //object passed in via the query string when the app was loaded
  readonly creationObject: any;

  //messages for this workspace
  readonly globalMessagesAsync?: IAsyncResult<{ [key: string]: MessageList }>;

  readonly chunkUpLoadOptionsAsync: IAsyncResult<ChunkUploadModel>;

  readonly myRolesAsync: IAsyncResult<MyRolesModel>;
}

type myActions = {
  loadWorkSpaces: (reset?: boolean) => PromiseLike<string[]>;
  setcurrentWorkSpace: (value: string) => string;

  loadMyRoles: () => PromiseLike<MyRolesModel>;

  loadMessages: () => PromiseLike<{ [key: string]: MessageList }>;
  showMessage: (
    messageType: string,
    messageId: string,
    hide: boolean,
  ) => { messageType: string; messageId: string; hide: boolean };

  updateWorkSpaceProp: (field: string, value: any) => { field: string; value: any };

  //success here also proves admin rights
  loadWorkSpaceforEdit: () => PromiseLike<WorkspaceEdit>;

  //updates the entire wokspace edit , used after saving the worspace
  updateWorkSpaceforEdit: (value: WorkspaceEdit) => void;

  updateServerTokenProp: (prop?: { field: string; value: any }) => { field: string; value: any };

  setCreationObject: (valu: any) => void;

  loadChunkUploadOptions: () => PromiseLike<ChunkUploadModel>;
};

class WorkspaceReducer extends ReducerBase<IWorkSpaceState, myActions> {
  createActionList() {
    return {
      loadChunkUploadOptions: [
        () =>
          fetch('/api/Pages/uploadOptions')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<ChunkUploadModel>),

        () => ({ Async: true }),
      ],

      loadMessages: [
        () =>
          fetch('/api/Workspaces/messages')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<{ [key: string]: MessageList }>)
            .then((response) => {
              _.each(['warning', 'error'], (type) => {
                const messages = response[type];
                if (messages) {
                  _.each(messages, (m) => (m.isVisible = true));
                }
              });

              return response;
            }),
        () => ({ Async: true }),
      ],

      showMessage: (messageType: string, messageId: string, hide: boolean) => ({
        messageType,
        messageId,
        hide,
      }),

      loadMyRoles: [
        () =>
          fetch('/api/permissions/myRoles')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<MyRolesModel>),
        () => ({ Async: true }),
      ],

      loadWorkSpaces: [
        (reset?: boolean) =>
          reset
            ? null
            : fetch('/api/Workspaces')
                .then((response) => checkFetchError(response))
                .then((response) => response.json() as Promise<WorkspaceAccessModel[]>),
        (reset?: boolean) => ({ Async: !reset }),
      ],
      setcurrentWorkSpace: (value: string) => value,

      loadWorkSpaceforEdit: [
        () =>
          fetch('/api/Workspaces/AdminDetails')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<WorkspaceEdit>),
        () => ({ Async: true }),
      ],
      updateWorkSpaceProp: (field: string, value: any) => ({ field, value }),
      updateWorkSpaceforEdit: (value: WorkspaceEdit) => value,

      updateServerTokenProp: (prop?: { field: string; value: any }) => prop,

      setCreationObject: (value: any) => value,
    };
  }

  reducers() {
    const me = this;

    let workSpaceEditHandlers = {};

    workSpaceEditHandlers[this._myActions.loadWorkSpaceforEdit.toString()] = (state, action) => {
      const payload = action.payload as IAsyncResult<WorkspaceEdit>;

      return payload;
    };

    workSpaceEditHandlers[this._myActions.updateWorkSpaceforEdit.toString()] = (state, action) => {
      const currentState = _.clone((state || {}) as IAsyncResult<WorkspaceEdit>);
      if (!currentState.result) {
        console.error('updateWorkSpaceforEdit called with workspace not loaded');
        return state;
      }

      currentState.result = action.payload;
      return currentState;
    };

    workSpaceEditHandlers[this._myActions.updateWorkSpaceProp.toString()] = (state, action) => {
      const currentState = _.clone((state || {}) as IAsyncResult<WorkspaceEdit>);

      if (!currentState.result) {
        console.error('updateWorkSpaceProp called with workspace not loaded');
        return state;
      }

      const payload = action.payload as { field: string; value: any };

      switch (payload.field) {
        case 'name':
          currentState.result.workSpace.name = (payload.value || '')
            .toLowerCase()
            .replace(/[^a-z0-9\-_]/gi, '');
          currentState.result.nameValidation =
            currentState.result.workSpace.name.length >= 4 ? 'success' : null;
          break;

        /*
                case 'useOpenId':
                    currentState.result.workSpace[payload.field] = payload.value;
                    if (!payload.value) {
                        currentState.result.workSpace.openConnectAuthority = null;
                        currentState.result.workSpace.openConnectClientId = null;
                    }
                    break;
                */

        default:
          currentState.result.workSpace[payload.field] = payload.value;
      }

      currentState.result.isModified = true;

      return currentState;
    };

    let messagingHandlers = {};

    messagingHandlers[this._myActions.loadMessages.toString()] = (state, action) => action.payload;

    messagingHandlers[this._myActions.showMessage.toString()] = (state, action) => {
      const newState = _.clone(state || {}) as { [key: string]: MessageList };
      const payload = action.payload as { messageType: string; messageId: string; hide: boolean };

      if (!newState.result || !newState.result[payload.messageType]) return state;
      const list = _.clone(newState.result[payload.messageType]);
      if (!list[payload.messageId]) return state;
      newState.result[payload.messageType] = list;

      list[payload.messageId] = _.assign({}, list[payload.messageId], { isVisible: !payload.hide });

      return newState;
    };

    let chunkUpLoadOptionsHandlers = {};

    chunkUpLoadOptionsHandlers[this._myActions.loadChunkUploadOptions.toString()] = (
      state,
      action,
    ) => action.payload;

    //if workspace changes clear out the chunksUploadOPtiosn
    chunkUpLoadOptionsHandlers[this._myActions.setcurrentWorkSpace.toString()] = (state, action) =>
      null;

    return {
      myWorkspacesAsync: handleAction(
        this._myActions.loadWorkSpaces,
        (state, action) => action.payload,
        null,
      ),

      myRolesAsync: handleAction(
        this._myActions.loadMyRoles,
        (state, action) => action.payload,
        null,
      ),

      globalMessagesAsync: handleActions(messagingHandlers, null),

      chunkUpLoadOptionsAsync: handleActions(chunkUpLoadOptionsHandlers, null),

      currentWorkSpace: handleAction(
        this._myActions.setcurrentWorkSpace,
        (state, action) => action.payload,
        null,
      ),

      creationObject: handleAction(
        this._myActions.setCreationObject,
        (state, action) => action.payload,
        null,
      ),

      workspaceEditAsync: handleActions(workSpaceEditHandlers, null),

      createingServerToken: handleAction(
        this._myActions.updateServerTokenProp,
        (state, action) => {
          if (!action.payload) return null;

          const newState = _.clone(state || {});

          const payload = action.payload as { field: string; value; any };
          newState[payload.field] = payload.value;

          return newState;
        },
        null,
      ),
    };
  }

  showMessage = (messageType: string, messageId: string, hide?: boolean) =>
    this._myActions.showMessage(messageType, messageId, !!hide);

  updateWorkSpaceProp = (field: keyof WorkspaceModel, value: any) =>
    this._myActions.updateWorkSpaceProp(field, value);
  loadWorkSpaceforEdit = () => this._myActions.loadWorkSpaceforEdit();

  updateServerTokenProp = (field?: string, value?: any) =>
    this._myActions.updateServerTokenProp(field ? { field, value } : null);

  deleteWorkspace() {
    return (dispatch, getState) => {
      return dispatch(
        ensureConfirmBox().ask(
          'We are sorry to see you go. Please contact customer service to obtain a confirmation code',
          'Delete my workspace',
          true,
        ),
      ).then((code) => {
        const delPromise = fetch(`api/workspaces/${code}`, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => checkFetchError(response))
          .then(() => {
            dispatch(ensureLogin().logOut());
            return true;
          });

        return dispatch(ensureWaitBox().doWait('deleting workspace', delPromise));
      });
    };
  }

  loadChunkUploadOptions() {
    return (dispatch, getState) => {
      const { chunkUpLoadOptionsAsync } = this.getCurrentState(getState());

      if (!chunkUpLoadOptionsAsync || chunkUpLoadOptionsAsync.error) {
        return dispatch(this._myActions.loadChunkUploadOptions());
      } else {
        console.info('loading options already initialized');
      }
    };
  }

  createNewWorkSpaceToken() {
    return (dispatch, getState) => {
      const _mine = this;

      const { createingServerToken } = this.getCurrentState(getState());
      if (!createingServerToken) throw 'not creating server token';

      createingServerToken.tokenExpirationTime = moment()
        .add(createingServerToken.validityDays, 'd')
        .toDate();

      const savePromise = Promise.resolve()
        .then(() =>
          fetch('/api/Workspaces/createAccessToken', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(createingServerToken),
          }),
        )
        .then((response) => checkFetchError(response))
        .then((response) => response.text() as string)
        .then((response) => {
          dispatch(_mine.updateServerTokenProp('token', response));

          return true;
        });
      return dispatch(ensureWaitBox().doWait('creating access token', savePromise));
    };
  }

  //return the feature for a Workspace
  getFeature(name: string, state) {
    const { currentWorkSpace, myWorkspacesAsync } = this.getCurrentState(state);

    const workspace =
      currentWorkSpace &&
      myWorkspacesAsync &&
      myWorkspacesAsync.result &&
      _.find(myWorkspacesAsync.result, (w) => w.name == currentWorkSpace);

    if (!workspace) return null;

    return workspace && workspace.features && workspace.features[name];
  }

  switchWorkSpace(value: string) {
    return (dispatch, getState) => {
      const _mine = this;
      Promise.resolve(dispatch(_mine.updatecurrentWorkSpace(value))).then(() =>
        window.location.reload(),
      );
      /*
                .then(() => new Promise((resolve) => setTimeout(resolve, 10)))
                .then(() => dispatch(ensureProjects().loadProjects(true)))
                */
    };
  }

  private updatecurrentWorkSpace(value?: string) {
    return (dispatch, getState) => {
      const _mine = this;
      const { JWTDecoded } = ensureLogin().getCurrentState(getState());
      if (!JWTDecoded) throw 'JWTDecoded is null';

      if (null == value) {
        //we are here to initialize from localstorage
        value = this.getPersistedData('selectedWorkspace');
        const savedForUser = this.getPersistedData('workspaceUser');

        if (savedForUser != JWTDecoded.sub) return;
      } else {
        //we are saving a new workspace
        this.persistData('workspaceUser', JWTDecoded.sub);
        this.persistData('selectedWorkspace', value);
      }

      setTimeout(() => {
        dispatch(this._myActions.loadMessages()).then(() => {
          if (!!value) {
            return dispatch(ensureBilling().EnsureSubscription());
          }
        });
      }, 10);

      return dispatch(this._myActions.setcurrentWorkSpace(value));
    };
  }

  saveWorkSpace() {
    return (dispatch, getState) => {
      const _mine = this;
      const { workspaceEditAsync, currentWorkSpace } = this.getCurrentState(getState());

      const savePromise = Promise.resolve()
        .then(() =>
          fetch('/api/Workspaces', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(workspaceEditAsync.result),
          }),
        )
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<WorkspaceEdit>)
        .then((workspace) => {
          dispatch(_mine._myActions.updateWorkSpaceforEdit(workspace));
          return true;
        });
      return dispatch(ensureWaitBox().doWait('saving workspace', savePromise));
    };
  }

  createNewWorkspace(reload?: boolean) {
    return (dispatch, getState) => {
      const _mine = this;

      const { dataBaseStatusAsync } = ensureLogin().getCurrentState(getState());

      if (!dataBaseStatusAsync.result) {
        throw 'database status not initialized';
      }

      return dispatch(ensureConfirmBox().ask('Please enter authorization code', 'Authcode', true))
        .then((response) => {
          const savePromise = fetch(
            '/api/Workspaces/createNew' +
              (response ? `?authCode=${encodeURIComponent(response)}` : ''),
          )
            .then((response) => checkFetchError(response))
            .then((response) => response.text() as Promise<string>)
            .then((workspace) => {
              dispatch(_mine.updatecurrentWorkSpace(workspace));

              if (reload) window.location.reload();

              return true;
            });
          return dispatch(ensureWaitBox().doWait('saving workspace', savePromise));
        })
        .catch(() => {
          dispatch(ensureLogin().logOut());
        });
    };
  }

  updateCreateTionObject = (value: any) => this._myActions.setCreationObject(value);

  loadCreationObject() {
    return (dispatch, getState) => {
      const myquerystring = window.location.search;
      const qsObject = myquerystring ? qs.parse(myquerystring.substr(1)) : {};
      dispatch(this._myActions.setCreationObject(qsObject));
      return qsObject;
    };
  }

  //The first method called after we are authenticated
  Initialize() {
    return (dispatch, getState) => {
      const _mine = this;

      const { creationObject } = this.getCurrentState(getState());

      //see if we neeed to call any init method;
      let initMethodsPromise: PromiseLike<string> = Promise.resolve(null);
      if (creationObject.initcontext) {
        switch (creationObject.initcontext) {
          case 'joinworkspace':
            initMethodsPromise = fetch('/api/workspaces/join', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(creationObject),
            })
              .then((response) => checkFetchError(response))
              .then((response) => response.text());
            break;
        }
      }

      return dispatch(
        ensureWaitBox().doWait(
          'Initializing workspace',
          initMethodsPromise.then((workspace) => {
            dispatch(_mine.updatecurrentWorkSpace(workspace));
            return true;
          }),
        ),
      )
        .then((response) => {
          if (response.error) throw response.payload.error;
          return new Promise((resolve) => setTimeout(resolve, 10));
        })
        .then(() => {
          const { currentWorkSpace } = _mine.getCurrentState(getState());

          return dispatch(_mine._myActions.loadWorkSpaces())
            .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
            .then(() => {
              const { myWorkspacesAsync } = _mine.getCurrentState(getState());

              if (!(myWorkspacesAsync && myWorkspacesAsync.result))
                throw 'failed to get workspaces';

              if (myWorkspacesAsync.result.length > 0) {
                //todo: need to be able to select workspace
                const workspaceNames = _.map(myWorkspacesAsync.result, (w) => w.name);

                if (_.includes(workspaceNames, currentWorkSpace)) return true;

                return dispatch(_mine.updatecurrentWorkSpace(workspaceNames[0]));
              } else {
                //this will create a new workspace
                return dispatch(_mine.createNewWorkspace());
              }
            })
            .then(() => new Promise((resolve) => setTimeout(resolve, 10)));
        })
        .then(() => {
          return dispatch(_mine._myActions.loadMyRoles());
        })
        .then(() => {
          return dispatch(ensureProjects().loadProjects(true));
        })

        .catch((err) => {
          if (err && err.Reason == 'selectWorkSpace') {
          }
        });
    };
  }
}

export default () => WorkspaceReducer.getInstance(WorkspaceReducer, 'workspace');
