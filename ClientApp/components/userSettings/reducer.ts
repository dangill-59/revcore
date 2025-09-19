import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import { UserUpdateReqModel } from '../../generated/UserUpdateReqModel';
import { checkFetchError } from 'base/asyncLoader';
import { validateEmail } from '../printApp/reducer';

export type UpdatetabelSetting<T> = T & {
  validations?: { [key: string]: string };
};

export type SettingsGroup<T> = {
  settingAsync: IAsyncResult<UpdatetabelSetting<T>>;
  savingAsync?: IAsyncResult<boolean>;
};

export enum settingsType {
  profile = 'profile',
}

export interface IUserSettingsState {
  readonly settingsVisible: boolean;
  readonly settings: { [key: string]: SettingsGroup<any> };
  readonly settingsChanged: boolean;
}

type myActions = {
  showSettings: (value: boolean) => boolean;
  updateSetting: (group: settingsType, key: string, value?: any, validation?: string) => void;
  loadSetting: (group: settingsType, loadPromise: PromiseLike<any>) => void;
  saveSetting: (group: settingsType, loadPromise: PromiseLike<boolean>) => void;

  setSettingsChanged: (value: boolean) => boolean;
};

class SettingsReducer extends ReducerBase<IUserSettingsState, myActions> {
  createActionList() {
    return {
      showSettings: (value: boolean) => value,

      setSettingsChanged: (value: boolean) => value,

      updateSetting: (group: settingsType, key: string, value?: any, validation?: string) => ({
        group,
        key,
        value,
        validation,
      }),
      loadSetting: [
        (group: settingsType, loadPromise: PromiseLike<any>) => loadPromise,
        (group: settingsType, loadPromise: PromiseLike<any>) => ({ Async: true, group: group }),
      ],
      saveSetting: [
        (group: settingsType, savePromise: PromiseLike<boolean>) => savePromise,
        (group: settingsType, loadPromise: PromiseLike<boolean>) => ({ Async: true, group: group }),
      ],
    };
  }

  reducers() {
    const me = this;

    let settingsHandlers = {};

    settingsHandlers[this._myActions.saveSetting.toString()] = (state, action) => {
      const currentState = _.clone((state || {}) as { [key: string]: SettingsGroup<any> });
      const { group } = action.meta;

      if (!currentState[group]) {
        console.error(`settings group ${group} not yet loaded`);
        return currentState;
      }

      currentState[group] = _.clone(currentState[group]);

      currentState[group].savingAsync = action.payload;
      return currentState;
    };

    settingsHandlers[this._myActions.loadSetting.toString()] = (state, action) => {
      const currentState = _.clone((state || {}) as { [key: string]: SettingsGroup<any> });
      const { group } = action.meta;
      currentState[group] = {
        settingAsync: action.payload,
      };

      return currentState;
    };

    settingsHandlers[this._myActions.updateSetting.toString()] = (state, action) => {
      const currentState = _.clone((state || {}) as { [key: string]: SettingsGroup<any> });
      const payload = action.payload as {
        group: settingsType;
        key: string;
        value?: any;
        validation?: string;
      };

      if (
        !(
          currentState[payload.group] &&
          currentState[payload.group].settingAsync &&
          currentState[payload.group].settingAsync.result
        )
      ) {
        console.error(`settings group ${payload.group} not yet loaded`);
        return currentState;
      }

      currentState[payload.group] = _.clone(currentState[payload.group]);

      const newSetting = _.clone(currentState[payload.group].settingAsync);

      if (typeof payload.value !== 'undefined') newSetting.result[payload.key] = payload.value;

      if (typeof payload.validation !== 'undefined') {
        if (!newSetting.result.validations) newSetting.result.validations = {};
        newSetting.result.validations[payload.key] = payload.validation;
      }

      currentState[payload.group].settingAsync = newSetting;

      return currentState;
    };

    return {
      settingsVisible: handleAction(
        this._myActions.showSettings,
        (state, action) => action.payload,
        null,
      ),
      settingsChanged: handleAction(
        this._myActions.setSettingsChanged,
        (state, action) => action.payload,
        false,
      ),
      settings: handleActions(settingsHandlers, null),
    };
  }

  showSettings = (value: boolean) => this._myActions.showSettings(value);

  updateProfile(key: string, value?: string) {
    return (dispatch, getState) => {
      dispatch(this._myActions.updateSetting(settingsType.profile, key, value));
      dispatch(this._myActions.setSettingsChanged(true));
    };
  }

  loadProfile = () =>
    this._myActions.loadSetting(
      settingsType.profile,
      fetch('/api/user')
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as PromiseLike<UserUpdateReqModel>),
    );

  saveProfile() {
    return (dispatch, getState) => {
      const group = settingsType.profile;
      const { settings } = this.getCurrentState(getState());
      if (
        !(
          settings &&
          settings[group] &&
          settings[group].settingAsync &&
          settings[group].settingAsync.result
        )
      )
        throw 'profile not initialized';

      const profile = settings[group].settingAsync.result as UpdatetabelSetting<UserUpdateReqModel>;
      profile.validations = {};

      profile.validations.emailaddress =
        profile.emailaddress && validateEmail([profile.emailaddress], false);

      const _mine = this;

      const savePromise = Promise.resolve()
        .then(() => {
          if (_.find(_.keys(profile.validations), (k) => !!profile.validations[k]))
            throw 'please correct the errors';

          return fetch('/api/user', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
          });
        })
        .then((response) => checkFetchError(response))
        .then(() => {
          dispatch(this._myActions.setSettingsChanged(false));
          return true;
        });
      return dispatch(_mine._myActions.saveSetting(group, savePromise));
    };
  }
}

export default () => SettingsReducer.getInstance(SettingsReducer, 'userSettings');
