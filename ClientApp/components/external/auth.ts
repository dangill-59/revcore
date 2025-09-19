import { AuthPopup } from 'react-oauth-popup/src';
import { checkFetchError } from 'base/asyncLoader';

let _myAuths: { [key: string]: boolean } = {};

export function getAuthTokens<T>(
  integrationsChanged: string[],
  context: T,
  cancelPromise?: PromiseLike<any>,
  recursiveEntry?: boolean,
): PromiseLike<T> {
  if (!integrationsChanged || integrationsChanged.length == 0) return Promise.resolve(context);

  if (!recursiveEntry) _myAuths = {};

  for (let i = 0; i < integrationsChanged.length; i++) {
    if (!_myAuths[integrationsChanged[i]]) {
      //we need to open the browser right now, as after the fetch popup will be blocked
      //HARDCODED:XERO: other integrations might need different tokens to get
      const authDlg = AuthPopup(
        //'http://api.xero.com/oauth/Authorize?oauth_token=G7EFECULLDUGVWKDQTQAN1DGIVROYV&scope=&redirectOnError=False'
        '/home/authredirect',
        ['oauth_token', 'oauth_verifier'],
      );
      if (cancelPromise) cancelPromise.then(() => authDlg.close());

      return fetch(`/api/external/url/${integrationsChanged[i]}`)
        .then((response) => checkFetchError(response))
        .then((response) => response.text() as Promise<string>)
        .then((url) => {
          if (!url) {
            console.log('we already have access token so continue');
            authDlg.close();
            return Promise.resolve(context);
          }

          authDlg.navigate(url);

          //http://localhost:56393/authredirect?oauth_token=BOM5ZURZTFW1O4NKVOATN0GZVE0OB4&oauth_verifier=5808559&org=bpX-DE7eLa-oAinSzUX3Om
          return authDlg.codePromise.then((code) => {
            return fetch(`/api/external/tokens/${integrationsChanged[i]}`, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(code),
            })
              .then((response) => checkFetchError(response))
              .then(() => {
                return context;
              });
          });
        })
        .then((context) => {
          //recirsive so that we get auths for any and all integrations
          _myAuths[integrationsChanged[i]] = true;
          return getAuthTokens(integrationsChanged, context, cancelPromise, true);
        });
    }
  }

  return Promise.resolve(context);
}
