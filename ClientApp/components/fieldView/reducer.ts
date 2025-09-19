import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import { checkFetchError } from 'base/asyncLoader';
import ensureWorkSpace from '../workspace/reducer';

export const FIELD_HOC_DRAG_TYPE = 'FIELD_HOC_DRAG';

//This state maintains View preference for index field. and is organized by key

export interface IFieldViewState {
  ///hidden fields FORMAT {Key: {displayName: isHidden}}
  hiddenFields: { [key: string]: { [key: string]: boolean } };

  //field sort order, tells us in whihc order to show the fields.
  //FORMAT {Key:{displayName:sortOrder}}
  sortOrder: { [key: string]: { [key: string]: number } };

  //sizes for fields
  //FORMAT {Key:{displayName:fieldSize}}
  fieldSizes: { [key: string]: { [key: string]: number } };

  //we are reordering fields
  isDragging?: boolean;
}

type myActions = {
  hideField: (
    key: string,
    displayName: string,
    show: boolean,
  ) => { key: string; displayName: string; show: boolean };
  setFieldPositionBefore: (
    key: string,
    setfield: string,
    beforeField?: string,
  ) => { key: string; setfield: string; beforeField?: string };
  initSortFields: (
    key: string,
    alldisplayNames: string[],
  ) => { key: string; alldisplayNames: string[] };

  setFieldSize: (
    key: string,
    displayName: string,
    newSize: number,
  ) => { key: string; displayName: string; newSize: number };

  setDragging: (value: boolean) => boolean;
};

class fieldViewReducer extends ReducerBase<IFieldViewState, myActions> {
  createActionList() {
    return {
      hideField: (key: string, displayName: string, show: boolean) => ({ key, displayName, show }),
      setFieldPositionBefore: (key: string, setfield: string, beforeField?: string) => ({
        key,
        setfield,
        beforeField,
      }),
      initSortFields: (key: string, alldisplayNames: string[]) => ({ key, alldisplayNames }),
      setDragging: (value: boolean) => value,
      setFieldSize: (key: string, displayName: string, newSize: number) => ({
        key,
        displayName,
        newSize,
      }),
    };
  }

  reducers() {
    let sortRequestHandlers = {};

    sortRequestHandlers[this._myActions.initSortFields.toString()] = (state, action) => {
      const payload = action.payload as { key: string; alldisplayNames: string[] };

      const newStateList = _.clone(state || this.getPersistedData('sortfields') || {}) as {
        [key: string]: { [key: string]: number };
      };

      if (!newStateList[payload.key]) newStateList[payload.key] = {};

      const newState = newStateList[payload.key];

      _.each(payload.alldisplayNames, (k) => {
        if (typeof newState[k] == 'undefined') newState[k] = _.keys(newState).length;
      });

      return newStateList;
    };

    sortRequestHandlers[this._myActions.setFieldPositionBefore.toString()] = (state, action) => {
      const payload = action.payload as { key: string; setfield: string; beforeField?: string };
      const newStateList = _.clone(state || {}) as { [key: string]: { [key: string]: number } };

      if (!payload.key) {
        console.error(
          'setFieldPositionBefore called with undefined key. Positions changes will not work',
        );
        return newStateList;
      }

      if (!newStateList[payload.key]) newStateList[payload.key] = {};

      const newState = newStateList[payload.key];
      const keys = _.keys(newState);
      const newPosition =
        payload.beforeField && typeof newState[payload.beforeField] != 'undefined'
          ? newState[payload.beforeField]
          : keys.length;
      newState[payload.setfield] = newPosition;

      const laterItems = _.filter(keys, (k) => k != payload.setfield && newState[k] >= newPosition);
      _.each(laterItems, (k) => (newState[k] = newState[k] + 1));

      this.persistData('sortfields', newStateList);

      return newStateList;
    };

    return {
      isDragging: handleAction(
        this._myActions.setDragging,
        (state, action) => action.payload,
        null,
      ),

      fieldSizes: handleAction(
        this._myActions.setFieldSize,
        (state, action) => {
          const payload = action.payload as { key: string; displayName: string; newSize: number };
          const newState = _.clone(state || this.getPersistedData('fieldSizes') || {}) as {
            [key: string]: { [key: string]: number };
          };

          if (!payload.key)
            //we must be just initializing
            return newState;

          if (!newState[payload.key]) newState[payload.key] = {};

          newState[payload.key][payload.displayName] = payload.newSize;

          this.persistData('fieldSizes', newState);

          return newState;
        },
        null,
      ),

      hiddenFields: handleAction(
        this._myActions.hideField,
        (state, action) => {
          const payload = action.payload as { key: string; displayName: string; show: boolean };
          const newState = _.clone(state || this.getPersistedData('hiddenfields') || {}) as {
            [key: string]: { [key: string]: boolean };
          };

          if (!payload.key) {
            if (!!state) console.warn('hideField called without key');

            //else we must be initializing
            return newState;
          }

          if (!newState[payload.key]) newState[payload.key] = {};

          if (payload.show) {
            if (!payload.displayName) {
              console.debug('showing all hidden fields');
              newState[payload.key] = {};
            } else {
              if (newState[payload.key][payload.displayName]) {
                delete newState[payload.key][payload.displayName];
              }
            }
          } else {
            if (!newState[payload.key][payload.displayName]) {
              newState[payload.key][payload.displayName] = true;
            }
          }

          this.persistData('hiddenfields', newState);

          return newState;
        },
        null,
      ),

      sortOrder: handleActions(sortRequestHandlers, null),
    };
  }

  hideField = (key: string, displayName: string, show?: boolean) =>
    this._myActions.hideField(key, displayName, !!show);
  showAllFields = (key: string) => this._myActions.hideField(key, null, true);

  setFieldPositionBefore = (key: string, setfield: string, beforeField?: string) =>
    this._myActions.setFieldPositionBefore(key, setfield, beforeField);

  initializeMovable(key: string, alldisplayNames: string[]) {
    return (dispatch, getState) => {
      const { hiddenFields, sortOrder, fieldSizes } = this.getCurrentState(getState());

      //the following methods load values from local storage
      if (!hiddenFields) {
        dispatch(this._myActions.hideField(null, null, false));

        /* NOT sure if we want to hide by default. lets decide later
                const { creationObject } = ensureWorkSpace().getCurrentState(getState());
                const pinIndexes: { [key: string]: string } = creationObject && creationObject.pinIndexes;

                if (pinIndexes) {
                    _.each(_.keys(pinIndexes), k => dispatch(this.hideField(key, k,false)));
                }
                */
      }
      if (!sortOrder) dispatch(this._myActions.initSortFields(key, alldisplayNames));
      if (!fieldSizes) dispatch(this._myActions.setFieldSize(null, null, null));
    };
  }

  setDragging = (value: boolean) => this._myActions.setDragging(value);

  setFieldSize = (key: string, displayName: string, newSize: number) =>
    this._myActions.setFieldSize(key, displayName, newSize);
}

export default () => fieldViewReducer.getInstance(fieldViewReducer, 'fieldView');
