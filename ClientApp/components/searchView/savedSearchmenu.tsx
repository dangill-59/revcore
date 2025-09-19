import * as React from 'react';

import {
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { SavedSearchModel } from '../../generated/SavedSearchModel';
import { WorkFlowConfigModel } from '../../generated/WorkFlowConfigModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureSearch from './reducer';
import { push } from 'react-router-redux';

const SSLoader = createLoaderView<SavedSearchModel[]>();

const TasksLoader = createLoaderView<WorkFlowConfigModel[]>();

type ComponentProps = {};

type ConnectedProps = {
  readonly savedSearchesAsync: IAsyncResult<SavedSearchModel[]>;
  readonly uiWorkflowsAsync: IAsyncResult<WorkFlowConfigModel[]>;
};

//We are ReUsing this menu Item to contain other workflow related items as well
class SavedSearchMenu extends React.PureComponent<
  ConnectedProps & ComponentProps & { dispatch },
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureSearch().loadTasks());
  }

  render() {
    const { savedSearchesAsync, uiWorkflowsAsync, dispatch } = this.props;

    if (savedSearchesAsync && (savedSearchesAsync.isLoading || savedSearchesAsync.error)) {
      return (
        <SSLoader asyncResult={savedSearchesAsync} prompt='loading Tasks'>
          <span />
        </SSLoader>
      );
    }

    if (uiWorkflowsAsync && (uiWorkflowsAsync.isLoading || uiWorkflowsAsync.error)) {
      return (
        <TasksLoader asyncResult={uiWorkflowsAsync} prompt='loading Workflows'>
          <span />
        </TasksLoader>
      );
    }

    return (savedSearchesAsync &&
      savedSearchesAsync.result &&
      savedSearchesAsync.result.length > 0) ||
      (uiWorkflowsAsync && uiWorkflowsAsync.result && uiWorkflowsAsync.result.length > 0) ? (
      <OverlayTrigger placement='left' overlay={<Tooltip id='savedprinttip'>My Tasks</Tooltip>}>
        <NavDropdown
          id='savedSearchMenu'
          title={
            (
              <span style={{ position: 'relative' }}>
                <i className='fa fa-shopping-basket fa-2x' aria-hidden='true'></i>
              </span>
            ) as any
          }
        >
          {savedSearchesAsync.result.map((saved, i) => (
            <MenuItem
              key={`saved-${i}`}
              onClick={(e) => {
                e.preventDefault();
                dispatch(ensureSearch().prepareSavedSearch(saved));
                dispatch(push('/search/list'));
              }}
            >
              <span className='text-success' style={{ fontSize: 'large' }}>
                <i className='fa fa-external-link'></i> {saved.id}
              </span>
            </MenuItem>
          ))}

          {uiWorkflowsAsync.result.map((saved, i) => (
            <MenuItem
              key={`ui-${i}`}
              onClick={(e) => {
                e.preventDefault();
                dispatch(ensureSearch().runWorkflow(saved.name));
              }}
            >
              <span className='text-success' style={{ fontSize: 'large' }}>
                <i className='fa fa-external-link'></i> {saved.name}
              </span>
            </MenuItem>
          ))}
        </NavDropdown>
      </OverlayTrigger>
    ) : null;
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state) => {
  const { savedSearchesAsync, uiWorkflowsAsync } = ensureSearch().getCurrentState(state);
  return { savedSearchesAsync, uiWorkflowsAsync };
})(SavedSearchMenu);
