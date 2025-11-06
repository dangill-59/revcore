import * as React from 'react';

import {
  Button,
  FormControl,
  FormGroup,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger,
  TabContent,
  Tooltip,
} from 'react-bootstrap';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import ensurePermissions, { IPermissionsState } from '../permissions/reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import RepositoryView from '../projects/manage';
import { UserEditModel } from '../../generated/UserEditModel';
import UserRoleView from '../permissions/userRoles';
import WorkSpaceConfig from './configurations';
import AuditReports from '../audit/AuditReports';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureProjets from '../projects/reducer';
import ensureWorkspace from './reducer';
import { push } from 'react-router-redux';

const UsersLoader = createLoaderView<UserEditModel[]>();

const BadRoute = () => <h2 className='text-danger text-center'>nothing found</h2>;

type ViewProps = IPermissionsState & RouteComponentProps<{ tab: string }> & { dispatch };

class ManageWorkspace extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensurePermissions().loadAllUsers());
  }
  public render() {
    const { allUsersAsync, match, dispatch } = this.props;

    const selectedtab = (match.params && match.params.tab) || 'repositories';

    const rootPath = match.path.replace('/:tab?', '');

    return allUsersAsync ? (
      <div>
        <UsersLoader asyncResult={allUsersAsync} prompt='loading users'>
          <Tabs
            id='manageWorskapce'
            activeKey={selectedtab}
            mountOnEnter={true}
            onSelect={(key) => dispatch(push(`${rootPath}/${key}`))}
            style={{ marginTop: 10, marginBottom: 20 }}
            className='container'
          >
            <Tab eventKey='repositories' title='Image repositories'>
              <RepositoryView />
            </Tab>

            <Tab eventKey='configurations' title='Configurations'>
              <WorkSpaceConfig />
            </Tab>

            <Tab eventKey='users' title='Team'>
              <UserRoleView />
            </Tab>

            <Tab eventKey='audit' title='Audit Reports'>
              <AuditReports />
            </Tab>

            {/*<button onClick={() => dispatch(ensureProjets().templateSearchChanged(''))}>Repo button</button>*/}
          </Tabs>
        </UsersLoader>
      </div>
    ) : null;
  }
}

export default withRouter(
  connect((state) => {
    return ensurePermissions().getCurrentState(state);
  })(ManageWorkspace) as any,
);
