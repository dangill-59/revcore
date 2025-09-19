import * as React from 'react';
import * as _ from 'lodash';

import {
  Badge,
  Button,
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { SupportTopicsModel } from '../../generated/SupportTopicsModel';
import { connect } from 'react-redux';
import ensureNav from './reducer';

const HelpItem: React.StatelessComponent<{ category?: string }> = ({ category }) => (
  <NavItem href={`https://www.scanrev.com/section/main/support/${category || ''}`} target='_blank'>
    <OverlayTrigger
      placement='bottom'
      overlay={<Tooltip id='helptooltip'>Show help topics</Tooltip>}
    >
      <i className='fa fa-question-circle-o fa-2x' aria-hidden='true'></i>
    </OverlayTrigger>
  </NavItem>
);

type ConnectedProps = {
  helpTopicAsync: IAsyncResult<SupportTopicsModel>;
};

const HelpRoutes: React.StatelessComponent<
  ConnectedProps & { dispatch } & RouteComponentProps<any>
> = ({ helpTopicAsync, match }) => {
  if (!(helpTopicAsync && helpTopicAsync.result && helpTopicAsync.result.routeTopics))
    return <Route component={() => <HelpItem />} />;

  const topics = helpTopicAsync.result.routeTopics;

  return (
    <Switch>
      {_.keys(topics || {}).map((key) => {
        return (
          <Route key={key} path={`/${key}`} component={() => <HelpItem category={topics[key]} />} />
        );
      })}

      <Route component={() => <HelpItem />} />
    </Switch>
  );
};

export default withRouter(
  connect<ConnectedProps, { dispatch }, {}>((state) => {
    const { helpTopicAsync } = ensureNav().getCurrentState(state);

    return { helpTopicAsync };
  })(HelpRoutes) as any,
);
