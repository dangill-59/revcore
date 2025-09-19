import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';

export type ExtraCheckBoxProp = { [key: string]: boolean };

interface IConfirmation {
  readonly title: string;
  readonly description: string;
  readonly donePromise: { resolve: (value?: any) => any; reject: (value?: any) => any };
  readonly needsCode?: boolean;

  //conformation code is used for conrfirmations that needs to be confirmed by customer service
  readonly code?: string;

  readonly extraCheckBoxes?: ExtraCheckBoxProp;
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
  updateCode: (waitId: string, code: string) => { waitId: string; code: string };
  toggleCheck: (waitId: string, key: string) => { waitId: string; key: string };
};

class ConfirmReducer extends ReducerBase<IConfirmBoxState, myActions> {
  createActionList() {
    return {
      cancelWait: (key: string, answeredYes: boolean) => ({ key, answeredYes }),
      executeWait: (waitId: string, confirm: IConfirmation) => ({ waitId, confirm }),
      updateCode: (waitId: string, code: string) => ({ waitId, code }),
      toggleCheck: (waitId: string, key: string) => ({ waitId, key }),
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

    waitListHandlers[this._myActions.updateCode.toString()] = (state, action) => {
      let currentState = _.clone((state || {}) as { [key: string]: IConfirmation });
      const payload = action.payload as { waitId: string; code: string };

      currentState[payload.waitId] = _.assign({}, currentState[payload.waitId], {
        code: payload.code,
      });

      return currentState;
    };

    waitListHandlers[this._myActions.toggleCheck.toString()] = (state, action) => {
      let currentState = _.clone((state || {}) as { [key: string]: IConfirmation });
      const payload = action.payload as { waitId: string; key: string };

      if (currentState[payload.waitId].extraCheckBoxes)
        currentState[payload.waitId].extraCheckBoxes[payload.key] =
          !currentState[payload.waitId].extraCheckBoxes[payload.key];

      return currentState;
    };

    waitListHandlers[this._myActions.cancelWait.toString()] = (state, action) => {
      let currentState = _.clone((state || {}) as { [key: string]: IConfirmation });
      const payload = action.payload as { key: string; answeredYes: boolean };

      if (!currentState[payload.key]) return state;

      if (payload.answeredYes) {
        const { donePromise, code, needsCode, extraCheckBoxes } = currentState[payload.key];
        if (needsCode && !code) return currentState;

        donePromise.resolve(needsCode ? code : extraCheckBoxes);
      } else currentState[payload.key].donePromise.reject();

      delete currentState[payload.key];

      return currentState;
    };

    return {
      currentWaits: handleActions(waitListHandlers, []),
    };
  }

  private _lastWaitNumber: number = 0;

  answer = (key: string, answeredYes: boolean) => this._myActions.cancelWait(key, answeredYes);

  updateCode = (waitId: string, code: string) => this._myActions.updateCode(waitId, code);

  toggleCheck = (waitId: string, key: string) => this._myActions.toggleCheck(waitId, key);

  ask(
    description: string,
    title?: string,
    needsCode?: boolean,
    extraCheckBoxes?: ExtraCheckBoxProp,
  ) {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) =>
        dispatch(
          this._myActions.executeWait((++this._lastWaitNumber).toString(), {
            description,
            title: title || 'Please confirm',
            needsCode: needsCode,
            donePromise: { resolve, reject },
            extraCheckBoxes: extraCheckBoxes,
          }),
        ),
      );
    };
  }
}

export default () => ConfirmReducer.getInstance(ConfirmReducer, 'confirmation');
