import * as React from 'react';
import * as _ from 'lodash';

import { MenuItem, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import Select from 'react-select';
import { WorkspaceAccessModel } from '../../generated/WorkspaceAccessModel';
import { connect } from 'react-redux';
import ensureWorkspace from './reducer';

type ConnectedProps = {
  readonly myWorkspacesAsync?: IAsyncResult<WorkspaceAccessModel[]>;
  readonly currentWorkSpace: string;
};

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 25,
    minHeight: 25,
  }),
};

const SwitchWokspaceMenu: React.SFC<ConnectedProps & { dispatch }> = ({
  dispatch,
  myWorkspacesAsync,
  currentWorkSpace,
}) => {
  const selected = _.find(
    (myWorkspacesAsync && myWorkspacesAsync.result) || [],
    (w) => w.name == currentWorkSpace,
  );

  if (!myWorkspacesAsync || !myWorkspacesAsync.result) return null;

  // const hasOwnedWorkSpace = _.find(myWorkspacesAsync.result, w => w.isOwner);

  if (/*hasOwnedWorkSpace &&*/ myWorkspacesAsync.result.length <= 1) {
    //we just have one workspace no point showing any menu
    return null;
  }

  return (
    <div>
      <MenuItem divider />

      {/* we are no longer creating new workspaces on the fly
            !hasOwnedWorkSpace && <MenuItem className="text-center" onClick={() => dispatch(ensureWorkspace().createNewWorkspace(true))} >
            <h4>Create my own workspace</h4>
            </MenuItem>
        */}

      <span className='text-primary' style={{ textAlign: 'left', marginLeft: 5 }}>
        Workspace:
      </span>
      <Select
        styles={colourStyles}
        value={selected}
        options={myWorkspacesAsync.result}
        getOptionValue={(w) => w.name}
        getOptionLabel={(w) => (w.isOwner ? 'my primary workspace' : w.name)}
        onChange={(selected) => {
          dispatch(ensureWorkspace().switchWorkSpace(selected.name));
        }}
      />
    </div>
  );
};

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { myWorkspacesAsync, currentWorkSpace } = ensureWorkspace().getCurrentState(state);

  return { myWorkspacesAsync, currentWorkSpace };
})(SwitchWokspaceMenu);
