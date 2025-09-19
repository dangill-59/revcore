import * as React from 'react';

import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import Form from './form';
import Results from './results';
import SingleOrNew from './singleornew';

const BadRoute = () => <h2 className='text-danger text-center'>nothing found</h2>;

const SearchRoutes: React.StatelessComponent<RouteComponentProps<any>> = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/list`}
        component={() => <Results searchFormUrl={`${match.url}/form`} searchPagesUrl='/view' />}
      />

      <Route
        path={`${match.url}/singleornew`}
        component={() => (
          <SingleOrNew
            newDocUrl='/new'
            searchPagesUrl='/view'
            searchResultUrl={`${match.url}/list`}
          />
        )}
      />

      <Route
        path={`${match.url}/form`}
        component={() => <Form searchResultUrl={`${match.url}/list`} />}
      />

      <Redirect exact from={`${match.url}/`} to={`${match.url}/form`} />

      <Route component={BadRoute} />
    </Switch>
  );
};

export default withRouter(SearchRoutes);
