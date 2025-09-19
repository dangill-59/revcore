import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import { TypeaheadResultsModel } from '../../generated/TypeaheadResultsModel';
import { checkFetchError } from 'base/asyncLoader';

export function optionKey(lookupType: string, lookupParameter: string) {
  return `${lookupType}_${lookupParameter}`;
}

export interface ILookupState {
  //map of lookup params and lookupstates
  readonly lookupOptions: { [key: string]: IAsyncResult<TypeaheadResultsModel> };
}

type myActions = {
  doLookup: (
    lookupType: string,
    lookupParameter: string,
    pattern: string,
  ) => IAsyncResult<TypeaheadResultsModel>;
};

class lookupReducer extends ReducerBase<ILookupState, myActions> {
  createActionList() {
    return {
      doLookup: [
        (lookupType: string, lookupParameter: string, pattern: string) => {
          if (!pattern) return Promise.resolve([]);
          return fetch(
            `/api/lookup/${lookupType}/${encodeURIComponent(lookupParameter)}?req=${encodeURIComponent(pattern)}`,
          )
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as PromiseLike<TypeaheadResultsModel>);
        },
        (lookupType: string, lookupParameter: string, pattern: string) => ({
          Async: true,
          key: optionKey(lookupType, lookupParameter),
        }),
      ],
    };
  }

  reducers() {
    return {
      lookupOptions: handleAction(
        this._myActions.doLookup,
        (state, action) => {
          const newState = _.clone(state || {}) as {
            [key: string]: PromiseLike<TypeaheadResultsModel>;
          };
          const meta = action.meta as { key: string };
          newState[meta.key] = action.payload;

          return newState;
        },
        null,
      ),
    };
  }

  doLookup = (lookupType: string, lookupParameter: string, pattern: string) =>
    this._myActions.doLookup(lookupType, lookupParameter, pattern);
}

export default () => lookupReducer.getInstance(lookupReducer, 'lookup');
