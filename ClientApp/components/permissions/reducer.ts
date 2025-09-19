import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import { UserEditModel } from '../../generated/UserEditModel';
import { WorkspaceUserModel } from '../../generated/WorkspaceUserModel';
import { checkFetchError } from 'base//asyncLoader';
import { delay } from 'lodash';
import ensureConfirmBox from '../confirmation/reducer';
import ensureWaitBox from '../waitBox/reducer';

type WorkspaceUserModelEdit = UserEditModel & {
  isModified?: boolean;
  isNew?: boolean;
};

export type UserPrefProps = {
  sendMeACopy: boolean;
  validUser: boolean;
};

export interface IPermissionsState {
  //if this is not null, the display is stuck on selecting workspaces
  readonly allUsersAsync: IAsyncResult<WorkspaceUserModelEdit[]>;

  readonly userIdUnderEdit: string;

  readonly rolePermissionUnderEdit: string;

  //collection of switches for User interaction
  readonly prefProps: UserPrefProps;
}

type myActions = {
  loadAllUsers: (loadPromise: PromiseLike<UserEditModel[]>) => PromiseLike<UserEditModel[]>;

  selectUserIdForEdit: (userId: string) => string;

  updatePrefProp: (
    prop: keyof UserPrefProps,
    value: any,
  ) => { prop: keyof UserPrefProps; value: any };

  //markUserModified: (userId: string) => string;

  markAsAdmin: (userId: string, isAdmin: boolean) => { userId: string; isAdmin: boolean };

  updateUserEditProp: (
    userId: string,
    prop: keyof UserEditModel,
    value?: any,
  ) => { userId: string; prop: keyof UserEditModel; value?: any };

  updateWorkspaceUserProp: (
    userId: string,
    prop: keyof WorkspaceUserModel,
    value?: any,
  ) => { userId: string; prop: keyof WorkspaceUserModel; value?: any };

  addNewUser: (username: string) => string;

  addRoleToUser: (
    userId: string,
    role: string,
    add: boolean,
  ) => { userId: string; role: string; add: boolean };

  selectRoleToView: (value: string) => string;

  reSendInvitation: (userId: string) => string;
};

class PermissionsReducer extends ReducerBase<IPermissionsState, myActions> {
  createActionList() {
    return {
      selectUserIdForEdit: (userId: string) => userId,

      updatePrefProp: (prop: keyof UserPrefProps, value: any) => ({ prop, value }),

      //markCurrentUserModified: () => { },

      markAsAdmin: (userId: string, isAdmin: boolean) => ({ userId, isAdmin }),

      reSendInvitation: (userId: string) => userId,

      updateUserEditProp: (userId: string, prop: keyof UserEditModel, value?: any) => ({
        userId,
        prop,
        value,
      }),

      updateWorkspaceUserProp: (userId: string, prop: keyof WorkspaceUserModel, value?: any) => ({
        userId,
        prop,
        value,
      }),

      addNewUser: (username: string) => username,

      addRoleToUser: (userId: string, role: string, add: boolean) => ({ userId, role, add }),

      selectRoleToView: (value: string) => value,

      loadAllUsers: [
        (loadPromise: PromiseLike<UserEditModel[]>) => loadPromise,

        () => ({ Async: true }),
      ],
    };
  }

  reducers() {
    const allUserHandlers = {};
    allUserHandlers[this._myActions.updateUserEditProp.toString()] = (state, action) => {
      const payload = action.payload as { userId: string; prop: keyof UserEditModel; value?: any };
      const newState = _.clone(state || {}) as IAsyncResult<WorkspaceUserModelEdit[]>;

      if (!(newState && newState.result)) return state;

      const selectedUserIndex = _.findIndex(
        newState.result,
        (u) => u.workspaceUser.id == payload.userId,
      );
      if (-1 == selectedUserIndex) return state;

      const changed: any = { isModified: true };
      changed[payload.prop] = payload.value;

      newState.result[selectedUserIndex] = _.assign(
        {},
        newState.result[selectedUserIndex],
        changed,
      );

      return newState;
    };

    allUserHandlers[this._myActions.updateWorkspaceUserProp.toString()] = (state, action) => {
      const payload = action.payload as {
        userId: string;
        prop: keyof WorkspaceUserModel;
        value?: any;
      };
      const newState = _.clone(state || {}) as IAsyncResult<WorkspaceUserModelEdit[]>;

      if (!(newState && newState.result)) return state;

      const selectedUserIndex = _.findIndex(
        newState.result,
        (u) => u.workspaceUser.id == payload.userId,
      );
      if (-1 == selectedUserIndex) return state;

      const changed: any = { isModified: true };
      changed.workspaceUser = _.clone(newState.result[selectedUserIndex].workspaceUser);

      if (!changed.workspaceUser) changed.workspaceUser = {};

      changed.workspaceUser[payload.prop] = payload.value;

      newState.result[selectedUserIndex] = _.assign(
        {},
        newState.result[selectedUserIndex],
        changed,
      );

      return newState;
    };

    allUserHandlers[this._myActions.reSendInvitation.toString()] = (state, action) => {
      const userId = action.payload as string;
      const newState = _.clone(state || {}) as IAsyncResult<WorkspaceUserModelEdit[]>;

      if (!(newState && newState.result)) return state;

      const selectedUserIndex = _.findIndex(newState.result, (u) => u.workspaceUser.id == userId);
      if (-1 == selectedUserIndex) return state;

      newState.result[selectedUserIndex] = _.assign({}, newState.result[selectedUserIndex], {
        inviteToJoin: true,
        isModified: true,
      });

      return newState;
    };

    allUserHandlers[this._myActions.markAsAdmin.toString()] = (state, action) => {
      const payload = action.payload as { userId: string; isAdmin: boolean };
      const newState = _.clone(state || {}) as IAsyncResult<WorkspaceUserModelEdit[]>;

      if (!(newState && newState.result)) return state;

      const selectedUserIndex = _.findIndex(
        newState.result,
        (u) => u.workspaceUser.id == payload.userId,
      );
      if (-1 == selectedUserIndex) return state;

      newState.result[selectedUserIndex] = _.assign({}, newState.result[selectedUserIndex], {
        isAdmin: payload.isAdmin,
        isModified: true,
      });

      return newState;
    };

    allUserHandlers[this._myActions.addNewUser.toString()] = (state, action) => {
      const payload = action.payload as string;

      const newState = _.clone(state || {}) as IAsyncResult<WorkspaceUserModelEdit[]>;

      if (!(newState && newState.result)) return state;
      const newUser: WorkspaceUserModelEdit = {
        workspaceUser: {
          id: payload,
          isVaccant: true,
          phoneNumber: null,
          fullName: null,
        },

        isNew: true,
        isModified: true,
        email: null,

        inviteToJoin: true,
      };

      newState.result = _.concat(newState.result, newUser);

      return newState;
    };

    allUserHandlers[this._myActions.addRoleToUser.toString()] = (state, action) => {
      const payload = action.payload as { userId: string; role: string; add: boolean };
      const newState = _.clone(state || {}) as IAsyncResult<WorkspaceUserModelEdit[]>;

      if (!(newState && newState.result)) return state;

      const index = _.findIndex(newState.result, (u) => u.workspaceUser.id == payload.userId);
      if (-1 == index) return state;

      const changedUser = (newState.result[index] = _.assign({}, newState.result[index], {
        isModified: true,
      }));

      if (!changedUser.workspaceUser.roles) changedUser.workspaceUser.roles = [];

      if (payload.add) changedUser.workspaceUser.roles.push(payload.role);
      else {
        changedUser.workspaceUser.roles = _.filter(
          changedUser.workspaceUser.roles,
          (r) => r != payload.role,
        );
      }

      return newState;
    };

    allUserHandlers[this._myActions.loadAllUsers.toString()] = (state, action) => {
      return action.payload;
    };

    return {
      userIdUnderEdit: handleAction(
        this._myActions.selectUserIdForEdit,
        (state, action) => action.payload,
        null,
      ),

      rolePermissionUnderEdit: handleAction(
        this._myActions.selectRoleToView,
        (state, action) => action.payload,
        null,
      ),

      prefProps: handleAction(
        this._myActions.updatePrefProp,
        (state, action) => {
          const newState = _.clone(state || {}) as UserPrefProps;
          const payload = action.payload as { prop: keyof UserPrefProps; value: any };

          newState[payload.prop] = payload.value;

          return newState;
        },
        null,
      ),

      allUsersAsync: handleActions(allUserHandlers, {}),
    };
  }

  DeleteUser(id: string) {
    return (dispatch, getState) => {
      const _mine = this;
      dispatch(ensureConfirmBox().ask(`Remove user ${id} from this workspace`)).then(() => {
        const deletePromise = fetch(`/api/permissions/user/${encodeURIComponent(id)}`, {
          method: 'delete',
        })
          .then((response) => checkFetchError(response))
          .then(() => dispatch(_mine.loadAllUsers(true)))
          .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
          .then(() => {
            //dispatch(_mine.showUserRolesDialog(false));
            return true;
          });
        return dispatch(ensureWaitBox().doWait('deleting user', deletePromise));
      });
    };
  }

  saveUserRoles() {
    return (dispatch, getState) => {
      const { allUsersAsync, prefProps } = this.getCurrentState(getState());

      const userList = allUsersAsync && allUsersAsync.result;

      if (!userList) {
        console.error('user lits not initialzed');
        return;
      }

      const modifiedUsers = _.filter(userList, (p) => p.isModified);

      const _mine = this;
      const savePromise = Promise.resolve()
        .then(() => {
          const missingEmail = _.find(modifiedUsers, (m) => m.inviteToJoin && !m.email);
          if (!!missingEmail) {
            dispatch(_mine.selectUser(missingEmail.workspaceUser.id));
            throw `Email address is missing for user ${missingEmail.workspaceUser.id}`;
          }
        })

        .then(() => {
          const url =
            '/api/permissions/user' +
            (prefProps && prefProps.sendMeACopy ? '?sendMeaCopy=true' : '');
          return fetch(url, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifiedUsers),
          });
        })
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<UserEditModel[]>)
        .then((updatesUserList) => {
          dispatch(_mine._myActions.loadAllUsers(Promise.resolve(updatesUserList)));
          return true;
        });
      return dispatch(ensureWaitBox().doWait('saving users and role', savePromise));
    };
  }

  addRole(newrole: string) {
    return (dispatch, getState) => {
      const { userIdUnderEdit } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.addRoleToUser(userIdUnderEdit, newrole, true));
    };
  }

  removeRole(newrole: string) {
    return (dispatch, getState) => {
      const { userIdUnderEdit } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.addRoleToUser(userIdUnderEdit, newrole, false));
    };
  }

  selectRoleToView = (value: string) => this._myActions.selectRoleToView(value);

  selectUser(userId: string) {
    return (dispatch, getState) => {
      const { allUsersAsync, prefProps } = this.getCurrentState(getState());
      if (!allUsersAsync.result) throw 'users not initialized';
      if (prefProps && prefProps.validUser) {
        dispatch(this._myActions.updatePrefProp('validUser', !(prefProps && prefProps.validUser)));
      }
      return dispatch(this._myActions.selectUserIdForEdit(userId));
    };
  }

  addNewUser(username: string) {
    return async (dispatch, getState, prefProps) => {
      var emailRegex = new RegExp(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      );
      if (!emailRegex.test(username)) {
        dispatch(this._myActions.updatePrefProp('validUser', username));
        await new Promise((r) => setTimeout(r, 5000));
        //throw 'invalid username';
      } else {
        dispatch(this._myActions.updatePrefProp('validUser', prefProps && prefProps.validUser));
        dispatch(this._myActions.addNewUser(username));
        dispatch(this._myActions.selectUserIdForEdit(username));
      }

      await new Promise((r) => setTimeout(r, 100));

      dispatch(this._myActions.updateUserEditProp(username, 'email', username));
    };
  }

  updateEmail(value?: string) {
    return (dispatch, getState) => {
      const { userIdUnderEdit } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.updateUserEditProp(userIdUnderEdit, 'email', value));
    };
  }

  updatephoneNumer(value?: string) {
    return (dispatch, getState) => {
      const { userIdUnderEdit, allUsersAsync } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.updateWorkspaceUserProp(userIdUnderEdit, 'phoneNumber', value));
    };
  }

  updatefullName(value?: string) {
    return (dispatch, getState) => {
      const { userIdUnderEdit } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.updateWorkspaceUserProp(userIdUnderEdit, 'fullName', value));
    };
  }

  toggleSendMeaCopy() {
    return (dispatch, getState) => {
      const { prefProps } = this.getCurrentState(getState());
      dispatch(
        this._myActions.updatePrefProp('sendMeACopy', !(prefProps && prefProps.sendMeACopy)),
      );
    };
  }

  reSendInvitation() {
    return (dispatch, getState) => {
      const { userIdUnderEdit } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.reSendInvitation(userIdUnderEdit));
    };
  }

  markAsAdmin(isAdmin: boolean) {
    return (dispatch, getState) => {
      const { userIdUnderEdit } = this.getCurrentState(getState());
      if (!userIdUnderEdit) {
        console.error('no user selected');
        return;
      }

      dispatch(this._myActions.markAsAdmin(userIdUnderEdit, isAdmin));
    };
  }

  loadAllUsers(reset?: boolean) {
    const _mine = this;
    return (dispatch, getState) => {
      {
        const { allUsersAsync } = this.getCurrentState(getState());
        if (!reset && allUsersAsync && (allUsersAsync.result || allUsersAsync.isLoading))
          return allUsersAsync;
      }

      dispatch(
        _mine._myActions.loadAllUsers(
          fetch('/api/permissions/users')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<UserEditModel[]>),
        ),
      )
        .then(() => new Promise((r) => setTimeout(r, 100)))
        .then(() => {
          const { allUsersAsync, userIdUnderEdit } = this.getCurrentState(getState());
          if (allUsersAsync && allUsersAsync.result && allUsersAsync.result.length > 0) {
            const found =
              userIdUnderEdit &&
              _.find(allUsersAsync.result, (u) => u.workspaceUser.id == userIdUnderEdit);
            if (!found) {
              dispatch(_mine.selectUser(allUsersAsync.result[0].workspaceUser.id));
            }
          }
        });
    };
  }
}

export default () => PermissionsReducer.getInstance(PermissionsReducer, 'permissions');
