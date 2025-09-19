import * as React from 'react';

import { IListDocumentsState, ListDocsHelper } from './reducerHelper';
import { NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { connect } from 'react-redux';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
};

type ConnectedProps = IListDocumentsState;

const DeleteMenu: React.StatelessComponent<ComponentProps & ConnectedProps & { dispatch }> = ({
  dispatch,
  activeDoc,
  listDocsHelper,
}) => (
  <NavItem
    disabled={!(activeDoc && activeDoc.id)}
    onClick={() => dispatch(listDocsHelper.deleteDocument())}
  >
    <OverlayTrigger
      placement='bottom'
      overlay={<Tooltip id='deletemenutooltip'>Delete the selected document</Tooltip>}
    >
      <i className='fa fa-times fa-2x' aria-hidden='true' />
    </OverlayTrigger>
  </NavItem>
);

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  return ownprops.listDocsHelper && ownprops.listDocsHelper.getmyState(state);
})(DeleteMenu);
