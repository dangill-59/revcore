import * as React from 'react';
import * as _ from 'lodash';

import { Button, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import ensureProjects, { IProjectsState } from '../projects/reducer';
import ensureWorkspace, { IWorkSpaceState } from './reducer';

import { ProjectModel } from '../../generated/ProjectModel';
import { WorkspaceAccessModel } from '../../generated/WorkspaceAccessModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const ProjectsLoader = createLoaderView<{ [key: string]: ProjectModel }>();

const WorkspacesLoader = createLoaderView<WorkspaceAccessModel[]>();

type EnsureViewProps = IProjectsState & IWorkSpaceState & RouteComponentProps<any> & { dispatch };

class _EnsureProjects extends React.Component<EnsureViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureWorkspace().Initialize());
  }
  public render() {
    const { projectListAsync, location, myWorkspacesAsync, dispatch } = this.props;

    return myWorkspacesAsync && !myWorkspacesAsync.isLoaded ? (
      <WorkspacesLoader asyncResult={myWorkspacesAsync} prompt='loading workspaces'>
        {myWorkspacesAsync && myWorkspacesAsync.result && (
          <div className='mainInfo text-center container'>
            <h3 className='color-orange'>Welcome to REV </h3>

            <strong>Initializing your workspace </strong>
          </div>
        )}
      </WorkspacesLoader>
    ) : projectListAsync ? (
      <ProjectsLoader asyncResult={projectListAsync} prompt='loading projects'>
        {projectListAsync.result && (
          <div>
            {_.keys(projectListAsync.result).length == 0 &&
            location.pathname != '/manageprojects' ? (
              <Redirect to='/manageprojects' />
            ) : (
              this.props.children
            )}
          </div>
        )}
      </ProjectsLoader>
    ) : null;
  }
}

export default withRouter(
  connect((state) => {
    return _.assign(
      {},
      ensureProjects().getCurrentState(state),
      ensureWorkspace().getCurrentState(state),
    );
  })(_EnsureProjects) as any,
);
