import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import LauncNative from './components/launchNative';
import Layout from './Layout';
import SplitPoint from 'base/splitPoint';
import UserSettings from './components/userSettings';

const BadRoute = () => <h2 className='text-danger text-center'>nothing found</h2>;

const BillingView = () => (
  <SplitPoint
    prompt='Loading billing module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/billing') as any).default);
        },
        'billing',
      );
    }}
  />
);

const CartView = () => (
  <SplitPoint
    prompt='Loading carts...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/carts') as any).default);
        },
        'carts',
      );
    }}
  />
);

const ManageProjects = () => (
  <SplitPoint
    prompt='Loading management module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/projects/manage') as any).default);
        },
        'manage',
      );
    }}
  />
);

const ManageWorkspace = () => (
  <SplitPoint
    prompt='Loading management module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/workspace/manage') as any).default);
        },
        'manage',
      );
    }}
  />
);

const IndexView = () => (
  <SplitPoint
    prompt='Loading new document module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/indexView') as any).default);
        },
        'newdoc',
      );
    }}
  />
);

const SearchView = () => (
  <SplitPoint
    prompt='Loading search module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/searchView') as any).default);
        },
        'search',
      );
    }}
  />
);

const DocView = () => (
  <SplitPoint
    prompt='Loading search module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/searchView/pagesView') as any).default);
        },
        'search',
      );
    }}
  />
);

const AccessTknView = () => (
  <SplitPoint
    prompt='Loading workspace module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/workspace/accessToken') as any).default);
        },
        'manage',
      );
    }}
  />
);

const AuditReportsView = () => (
  <SplitPoint
    prompt='Loading audit reports...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./components/audit/AuditReports') as any).default);
        },
        'audit',
      );
    }}
  />
);

export const routes = (
  <Layout>
    <LauncNative />
    <UserSettings />
    <CartView />

    <Switch>
      <Route path='/view/:id' component={DocView} />
      <Route path='/search' component={SearchView} />
      <Route path='/new' component={IndexView} />
      <Route path='/manageprojects' component={ManageProjects} />
      <Route path='/manageworkspace/:tab?' component={ManageWorkspace} />
      <Route path='/accesstoken' component={AccessTknView} />
      <Route path='/myAccount' component={BillingView} />

      <Redirect exact from='/' to='/search' />

      <Route component={BadRoute} />
    </Switch>
  </Layout>
);
