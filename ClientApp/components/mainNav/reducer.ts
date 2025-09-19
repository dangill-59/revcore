import * as React from 'react';
import * as _ from 'lodash';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import { SupportTopicsModel } from '../../generated/SupportTopicsModel';
import { checkFetchError } from 'base/asyncLoader';
import { handleAction } from 'redux-actions';

export const navigationKeyMap = {
  scrollToPrevPage: ['alt+u', 'pageup'],
  scrollToNextPage: ['alt+d', 'pagedown'],
  splitHere: ['alt+s', 'ins'],
  scrollToPrev: ['up'],
  scrollToNext: ['down'],
  scrollToPrevDocument: ['alt+up'],
  scrollToNextDocument: ['alt+down'],
  defaultAction: ['enter'],
  backAction: ['esc'],
  selectAll: ['command+a', 'ctrl+a'],
  duplicate: ['alt+ins', 'ctrl+s'],
  deleteActivePage: ['alt+del'],
};

//compoments add menus to this map so that they are displayed (and removed) from main navigation
interface IMenuMap {
  [key: string]: {
    [key: string]: {
      refCount: number;
      node: any;
    };
  };
}

// user options that can be toggled or set
export interface ISeletableSettings {
  [key: string]: any;
}

const settingsToPersist = [
  'multiProjectSearch',
  'advancedIndexingButtons',
  'selectScanner',
  'multiPrintPdf',
];

export interface INavMenuState {
  //menu name - meny key- the actual node
  menuMap: IMenuMap;
  selectableSettings: ISeletableSettings;

  helpTopicAsync: IAsyncResult<SupportTopicsModel>;
}

type updateMenuProps = { menu: string; key: string; node?: any };
type selectableSettingsProps = { key: string; value?: any };

type myActions = {
  updateMenu: (props: updateMenuProps) => void;
  updateSetting: (props: selectableSettingsProps) => void;
  loadHelpTopics: () => PromiseLike<SupportTopicsModel>;
};

class NavMenuReducer extends ReducerBase<INavMenuState, myActions> {
  createActionList() {
    return {
      updateMenu: (props: updateMenuProps) => props,
      updateSetting: (props: selectableSettingsProps) => props,

      loadHelpTopics: [
        () =>
          fetch('/api/help')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<SupportTopicsModel>),
        (_) => ({ Async: true }),
      ],
    };
  }

  reducers() {
    return {
      helpTopicAsync: handleAction(
        this._myActions.loadHelpTopics,
        (state, action) => action.payload,
        {},
      ),

      selectableSettings: handleAction(
        this._myActions.updateSetting,
        (state, action) => {
          const newState = _.assign(
            {},
            state || this.getPersistedData('selectableSettings') || {},
          ) as ISeletableSettings;
          const props = action.payload as selectableSettingsProps;

          if (!props) return newState;

          newState[props.key] = props.value;

          const persistingSettings: ISeletableSettings = {};
          _.each(settingsToPersist, (s) => {
            persistingSettings[s] = newState[s];
          });

          this.persistData('selectableSettings', persistingSettings);

          return newState;
        },
        null,
      ),
      menuMap: handleAction(
        this._myActions.updateMenu,
        (state, action) => {
          const newState = _.assign({}, state || {}) as IMenuMap;
          const props = action.payload as updateMenuProps;

          if (props.node) {
            if (!newState[props.menu]) newState[props.menu] = {};

            if (newState[props.menu][props.key]) {
              const refCount = newState[props.menu][props.key].refCount || 0;
              newState[props.menu][props.key].refCount = refCount + 1;
            } else {
              newState[props.menu][props.key] = { node: props.node, refCount: 0 };
            }
          } else {
            if (newState[props.menu]) {
              if (newState[props.menu][props.key] && newState[props.menu][props.key].refCount) {
                newState[props.menu][props.key].refCount--;
              } else {
                delete newState[props.menu][props.key];
              }

              if (_.keys(newState[props.menu]).length == 0) delete newState[props.menu];
            }
          }

          return newState;
        },
        null,
      ),
    };
  }

  addMenu = (menu: string, key: string, node: React.ReactNode) =>
    this._myActions.updateMenu({ menu, key, node });
  deleteMenu = (menu: string, key: string) => this._myActions.updateMenu({ menu, key });
  updateSetting = (key: string, value: any) => this._myActions.updateSetting({ key, value });

  initSettings() {
    const _mine = this;
    return (dispatch, getState) => {
      dispatch(this._myActions.updateSetting(null));
      dispatch(this._myActions.loadHelpTopics());
    };
  }
}

export default () => NavMenuReducer.getInstance(NavMenuReducer, 'mainNav');
