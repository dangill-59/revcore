//sets propses promise state values
import { isFSA } from 'flux-standard-action';

function isPromise(val: any) {
  return val && typeof val.then === 'function';
}

function isFunction(val: any) {
  return val && typeof val === 'function';
}

export interface IAsyncResult<T> {
  isLoading: boolean;
  isLoaded: boolean;
  error: any;
  result: T;
}

export const asyncStateResult = (store: any) => (next: any) => (action: any) => {
  if (!action.meta || !action.meta.Async || !isFSA(action) || isFunction(action.payload)) {
    return next(action);
  }

  //we are adding the isLoaded param so that spinners can just watch that
  if (((action.payload || {}) as any).isLoading) {
    action.payload = { isLoading: true, isLoaded: false };
  } else {
    if (action.error) {
      console.debug('action error ' + action.error);
    }
    action.payload = action.error ? { error: action.payload } : { result: action.payload };
    (action.payload as any).isLoaded = true;
  }

  return next(action);
};

export function asyncStateCreater({ dispatch }) {
  return (next) => (action) => {
    if (!action.meta || !action.meta.Async || !isPromise(action.payload)) {
      return next(action);
    }

    //we are adding the isLoaded param so that spinners can just watch that
    let loadingAction = Object.assign({}, action);
    loadingAction.payload = { isLoading: true, isLoaded: false };
    dispatch(loadingAction);

    return next(action);
  };
}
