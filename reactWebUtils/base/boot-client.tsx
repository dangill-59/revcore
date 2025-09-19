import '../../ClientApp/clientStyle';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RoutesModule from '../../ClientApp/routes';

import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';

let routes = RoutesModule.routes;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as any;
const store = configureStore(history, initialState);

function renderApp() {
  // This code starts up the React app when it runs in a browser. It sets up the routing configuration
  // and injects the app into a DOM element.
  //hydrate is not in types so have to do this to avoid compilation error
  (ReactDOM as any).hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-app'),
  );
}

renderApp();

/*
// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
*/
