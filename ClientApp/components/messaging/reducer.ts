import * as _ from 'lodash';
import * as signalR from '@aspnet/signalr';

import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import ensureLogin from '../revLogin/reducer';

export interface IConfirmBoxState {
  readonly currentWaits: { [key: string]: string };
}

type myActions = {
  cancelWait: (key: string, answeredYes: boolean) => { key: string; answeredYes: boolean };
  //    executeWait: (waitId: string, confirm: IConfirmation) => { waitId: string, confirm: IConfirmation }
};

class MessagingReducer extends ReducerBase<IConfirmBoxState, myActions> {
  createActionList() {
    return {
      cancelWait: (key: string, answeredYes: boolean) => ({ key, answeredYes }),
      //          executeWait: (waitId: string, confirm: IConfirmation) => ({ waitId, confirm})
    };
  }

  reducers() {
    let waitListHandlers = {};

    /*    waitListHandlers[this._myActions.executeWait.toString()] = (state, action) => {
            
            return  action.payload;
        }
        */
    return {
      currentWaits: handleActions(waitListHandlers, []),
    };
  }

  _connection: any = null;

  ensureInitalized() {
    return (dispatch, getState) => {
      if (!this._connection) {
        this._connection = new signalR.HubConnectionBuilder()
          .withUrl('/messaging?wokspace=boto', {
            accessTokenFactory: () => {
              const { JWT } = ensureLogin().getCurrentState(getState());
              if (!JWT) {
                throw 'NO JWT so far. Cannot subscribe';
              }

              return JWT;
            },
          })
          .build();

        this._connection.onclose((err) => {
          this._connection = null;
          console.error('SignalIR connection closed', err);
        });

        this._connection.start().catch((err) => {
          this._connection = null;
          console.error(`SignalIR error : ${err}`);
        });

        console.log('SignalIR started');
      }

      return Promise.resolve();
    };
  }

  ///Wait for SignrIR event
  // when we get the event execute the Job action
  //TStatus : IR message Body
  //TResult : how the promise result should look like

  WaitFor<TStatus, TResult>(
    event: string,
    onStatusUpdated: (job: TStatus) => TResult,
  ) /*:PromiseLike<TResult>*/ {
    return (dispatch, getState) => {
      const _mine = this;
      return dispatch(_mine.ensureInitalized()).then(
        () =>
          new Promise((resolve, reject) => {
            const callback = (props: TStatus) => {
              try {
                console.debug('SignalIR received ', props);

                const res = onStatusUpdated(props);
                if (res) {
                  resolve(res);
                }

                console.debug('SignalIR OFF event ', event);
                _mine._connection.off(event, callback);
              } catch (err) {
                if (err && err.continueWatch) {
                  console.log('SignalIR continue watch');
                } else {
                  console.warn('SignalIR callback ERROR terminating', err);
                  reject(err);
                  _mine._connection.off(event, callback);
                }
              }
            };

            _mine._connection.on(event, callback);
            console.debug('SignalIR ON event ', event);
          }),
      );
    };
  }
}

export default () => MessagingReducer.getInstance(MessagingReducer, 'messaging');
