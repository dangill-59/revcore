import * as fetchIntercept from 'fetch-intercept';

import { getCurrentState } from './commonDefinations';

let _fetchIntUnregister = null;

export function registerFetchHook(jwtLocation: string[]) {
  return (dispatch, getState) => {
    if (!_fetchIntUnregister) {
      _fetchIntUnregister = fetchIntercept.register({
        request: function (url, config) {
          if (!(config || {}).noAuth) {
            const currentJWT = getCurrentState<string>(getState, jwtLocation);
            if (currentJWT) {
              config = config || {};
              config.headers = config.headers || {};
              config.headers['Authorization'] = 'Bearer ' + currentJWT;
            }
          }

          return [url, config];
        },
      });
    }

    return _fetchIntUnregister;
  };
}
