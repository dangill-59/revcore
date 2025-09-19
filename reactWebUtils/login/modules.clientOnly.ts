import auth0 from 'auth0-js';
import fetchIntercept from 'fetch-intercept';

export function register(...args) {
  return fetchIntercept.register(...args);
}

require('font-awesome-webpack2');
//import 'font-awesome/less/font-awesome.less';

/*
 * REFERNCE docs https://auth0.com/docs/libraries/auth0js/v9
 */

export function newAuto0(...args) {
  return new auth0.WebAuth(...args);
}
