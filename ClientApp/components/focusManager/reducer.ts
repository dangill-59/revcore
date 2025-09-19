import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';

interface IConfirmation {
  readonly title: string;
  readonly description: string;
  readonly donePromise: { resolve: (value?: any) => any; reject: (value?: any) => any };
}

export interface IConfirmBoxState {
  readonly currentWaits: { [key: string]: IConfirmation };
}

type myActions = {
  cancelWait: (key: string, answeredYes: boolean) => { key: string; answeredYes: boolean };
  executeWait: (
    waitId: string,
    confirm: IConfirmation,
  ) => { waitId: string; confirm: IConfirmation };
};

class FocusManager extends ReducerBase<IConfirmBoxState, myActions> {
  createActionList() {
    return {
      cancelWait: (key: string, answeredYes: boolean) => ({ key, answeredYes }),
      executeWait: (waitId: string, confirm: IConfirmation) => ({ waitId, confirm }),
    };
  }

  reducers() {
    let waitListHandlers = {};

    waitListHandlers[this._myActions.executeWait.toString()] = (state, action) => {
      let currentState = _.clone((state || {}) as { [key: string]: IConfirmation });
      const payload = action.payload as { waitId: string; confirm: IConfirmation };

      currentState[payload.waitId] = payload.confirm;

      return currentState;
    };

    waitListHandlers[this._myActions.cancelWait.toString()] = (state, action) => {
      let currentState = _.clone((state || {}) as { [key: string]: IConfirmation });
      const payload = action.payload as { key: string; answeredYes: boolean };

      if (!currentState[payload.key]) return state;

      if (payload.answeredYes) currentState[payload.key].donePromise.resolve();
      else currentState[payload.key].donePromise.reject();

      delete currentState[payload.key];

      return currentState;
    };

    return {
      currentWaits: handleActions(waitListHandlers, []),
    };
  }

  ask(description: string, title?: string) {
    return (dispatch, getState) => {};
  }
}

export default () => FocusManager.getInstance(FocusManager, 'focusmanager');
