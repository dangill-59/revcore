import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureAutomations, { AutomationRunProps } from './reducer';

import AutoLogView from './autoLogView';
import { AutomationTaskModel } from '../../generated/AutomationTaskModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { ListDocsHelper } from '../listDocuments/reducerHelper';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import { ProjectModel } from '../../generated/ProjectModel';
import SplitPoint from 'base/splitPoint';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureProjects from '../projects/reducer';
import ensureWorkspaces from '../workspace/reducer';

const AutomationsLoader = createLoaderView<AutomationTaskModel[]>();

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
  listPagesHelper: ListDocumentPagesHelper;
};

type ConnectedProps = {
  readonly selectedProject: ProjectModel;
  readonly showFormEditor: boolean;
  readonly listAutomationsAsync: IAsyncResult<AutomationTaskModel[]>;
  readonly lastAutomationRun: AutomationRunProps;
  readonly isAdmin: boolean;
};

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

const FormsTitle = (
  <OverlayTrigger
    placement='bottom'
    overlay={<Tooltip id='formtooltip'>Select automation task to execute</Tooltip>}
  >
    <i className='fa fa-retweet' style={{ marginRight: '5px' }}></i>
  </OverlayTrigger>
);

class FormsToolBar extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(ensureAutomations().initializeForms());
  }

  render() {
    const {
      listAutomationsAsync,
      selectedProject,
      showFormEditor,
      listDocsHelper,
      listPagesHelper,
      lastAutomationRun,
      isAdmin,
      dispatch,
    } = this.props;

    let availableAutomations: AutomationTaskModel[] = [];
    if (listAutomationsAsync && listAutomationsAsync.result && selectedProject)
      availableAutomations = _.filter(
        listAutomationsAsync.result,
        (a) => a.projectId == selectedProject.id && a.name && a.name.trim().length > 0,
      );

    const editorProps = { listDocsHelper: listDocsHelper, listPagesHelper: listPagesHelper };

    const FromEditor = () => (
      <SplitPoint
        prompt='Loading automations module...'
        loader={(resolve) => {
          require.ensure(
            [],
            function (require) {
              resolve((require('./Editor') as any).default);
            },
            'forms',
          );
        }}
        childProps={editorProps}
      />
    );

    return (
      <React.Fragment>
        {showFormEditor && <FromEditor />}

        {lastAutomationRun && lastAutomationRun.showLogs && <AutoLogView />}

        <MenuItem divider />

        <strong style={{ marginRight: 10 }}>Automations</strong>

        {listAutomationsAsync && (
          <AutomationsLoader
            asyncResult={listAutomationsAsync}
            prompt='loading available automations'
          >
            &nbsp;
          </AutomationsLoader>
        )}

        {listAutomationsAsync && listAutomationsAsync.result && (
          <React.Fragment>
            {availableAutomations.map((automation, i) => (
              <MenuItem
                key={i}
                onClick={() =>
                  dispatch(ensureAutomations().runAutomation(automation, listDocsHelper))
                }
              >
                <span>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='formtooltip'>Execute the automated task</Tooltip>}
                  >
                    <span className='text-info'>{automation.name}</span>
                  </OverlayTrigger>

                  {isAdmin && (
                    <Button
                      bsStyle='link'
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(ensureAutomations().editScript(automation));
                      }}
                    >
                      <OverlayTrigger
                        placement='bottom'
                        overlay={<Tooltip id='formtooltip'>edit this automated task</Tooltip>}
                      >
                        <i className='fa fa-pencil text-warning' style={{ marginRight: '5px' }}></i>
                      </OverlayTrigger>
                    </Button>
                  )}

                  {lastAutomationRun && lastAutomationRun.name == automation.name && (
                    <Button
                      bsStyle='link'
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(ensureAutomations().showAutomationLogs());
                      }}
                    >
                      <OverlayTrigger
                        placement='bottom'
                        overlay={
                          <Tooltip id='formresultstooltip'>Show last automation run logs</Tooltip>
                        }
                      >
                        <i className='fa fa-history' />
                      </OverlayTrigger>
                    </Button>
                  )}
                </span>
              </MenuItem>
            ))}

            {isAdmin && (
              <MenuItem
                onClick={() => {
                  dispatch(ensureAutomations().editScript('new'));
                }}
              >
                <span className='text-warning'>Create new automated task</span>
              </MenuItem>
            )}

            <MenuItem divider />

            <MenuItem
              onClick={() =>
                dispatch(ensureAutomations().runAllAutomations(selectedProject.id, listDocsHelper))
              }
            >
              <span className='text'>Run all automations</span>
            </MenuItem>

            {/*<MenuItem onClick={() => {

                    dispatch(ensureAutomations().interrogateImage(listPagesHelper));
                }}>
                    <span className='text-warning'>Recognize current page</span>
                </MenuItem>
                */}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { selectedProject } = ensureProjects().getCurrentState(state);
  const { listAutomationsAsync, currentlyEditing, lastAutomationRun } =
    ensureAutomations().getCurrentState(state);

  const { myRolesAsync } = ensureWorkspaces().getCurrentState(state);

  return {
    selectedProject,
    showFormEditor: !!currentlyEditing,
    listAutomationsAsync,
    lastAutomationRun,
    isAdmin: myRolesAsync && myRolesAsync.result && myRolesAsync.result.isAdmin,
  };
})(FormsToolBar);
