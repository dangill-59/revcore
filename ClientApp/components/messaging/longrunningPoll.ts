//temporary class to handle long running polling loop. We will integrate this with singlR soonsish

import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import ensureMessaging from './reducer';

type ThunkResult<R, S> = ThunkAction<R, S, any>;

type HandlerType<S> = (dispatch: Dispatch<S>, getState: () => S, isRetry: boolean) => Promise<void>;

///This method will keep looping till 'Gateway Time-out' == err || err.Reason == 'resource_locked' || err.Reason == 'still_processing')
export function processLongPoll<S, T = undefined>(
  handler: HandlerType<S>,
  notificationSubject?: string,
  notificationHandler?: (effectedPages: T, dispatch: Dispatch<S>, getState: () => S) => boolean,
): ThunkResult<Promise<void>, S> {
  return async (dispatch, getState) => {
    if (!notificationSubject) {
      await dispatch(processPoolLoop(false, handler));
      return;
    } else {
      await Promise.race([
        dispatch(processPoolLoop(false, handler)),

        dispatch(
          ensureMessaging().WaitFor<T, boolean>(notificationSubject, (effectedPages) =>
            notificationHandler(effectedPages, dispatch, getState),
          ),
        ),
      ]);
    }
  };
}

function processPoolLoop<S>(
  isRetry: boolean,
  handler: HandlerType<S>,
): ThunkResult<Promise<void>, S> {
  return async (dispatch, getState) => {
    try {
      await handler(dispatch, getState, isRetry);
    } catch (err) {
      if (
        err &&
        ('Gateway Time-out' == err ||
          err.Reason == 'resource_locked' ||
          err.Reason == 'still_processing')
      ) {
        //we can keep polling now as REV will keep timing out till the image is ready
        await new Promise((r) => setTimeout(r, 1));
        console.warn(`processPage -> try again`);
        await dispatch(processPoolLoop(true, handler));
      } else {
        console.error('failed', err);
        throw err;
      }
    }
  };
}
