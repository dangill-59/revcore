import * as React from 'react';
import * as _ from 'lodash';

import { IListPagesState, ListPagesHelper } from './reducerHelper';
import { NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { PageHolderModel } from '../../generated/PageHolderModel';
import { connect } from 'react-redux';

type ComponentProps = {
  listofPagesHelper: ListPagesHelper<PageHolderModel>;
};

type ViewProps = ComponentProps & IListPagesState & { dispatch };

const DeleteMenu: React.StatelessComponent<ViewProps> = ({
  dispatch,
  selectedPages,
  listofPagesHelper,
}) => {
  //There is at least one selected page
  const enabled =
    listofPagesHelper && selectedPages && _.find(_.keys(selectedPages), (p) => !!selectedPages[p]);

  return (
    <NavItem
      disabled={!enabled}
      onClick={() => listofPagesHelper && dispatch(listofPagesHelper.deletePages())}
    >
      <OverlayTrigger
        placement='bottom'
        overlay={<Tooltip id='deletemenutooltip'>Delete Images</Tooltip>}
      >
        <i className='fa fa-times fa-2x' aria-hidden='true' />
      </OverlayTrigger>
    </NavItem>
  );
};

export default connect<{}, { dispatch }, ComponentProps>((state, ownprops) => {
  return ownprops.listofPagesHelper ? ownprops.listofPagesHelper.getmyState(state) : {};
})(DeleteMenu);
