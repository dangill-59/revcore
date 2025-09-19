import * as React from 'react';
import * as _ from 'lodash';

import { MenuItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { EditablePageHolder } from '../listDocuments/reducerHelper';
import { ListPagesHelper } from './reducerHelper';
import { PageHolderModel } from '../../generated/PageHolderModel';
import { connect } from 'react-redux';

type ComponentProps = {
  listofPagesHelper: ListPagesHelper<PageHolderModel>;
};

type ConnectedProp = {
  readonly selectedPages: { [key: string]: boolean };
  readonly activeDoc?: EditablePageHolder;
};

const CopyPasteMenu: React.StatelessComponent<ComponentProps & ConnectedProp & { dispatch }> = ({
  listofPagesHelper,
  activeDoc,
  selectedPages,
  dispatch,
}) => {
  const pagesArray = activeDoc && activeDoc.pages;

  const currentPageIds = _.map(pagesArray || [], (p) => p.id);
  const selectedIds = _.filter(
    _.keys(selectedPages || {}),
    (id) => _.includes(currentPageIds, id) && !!selectedPages[id],
  );

  return (
    <div style={{ textAlign: 'center', fontSize: 'large' }}>
      <MenuItem divider />

      <MenuItem
        className='disabled'
        onClick={() => {
          /*dispatch(listofPagesHelper.cutOrCopy(_.filter(pagesArray||[],p=>_.includes(selectedIds,p.Id))))}*/
        }}
      >
        <span className={selectedIds.length ? '' : 'text-muted'}>
          Copy images{' '}
          <small>
            <kbd>ctrl+c</kbd>
          </small>
        </span>
      </MenuItem>
    </div>
  );
};

export default connect<ConnectedProp, { dispatch }, ComponentProps>((state, ownprops) => {
  const { listofPagesHelper } = ownprops;
  const { selectedPages } = listofPagesHelper && listofPagesHelper.getmyState(state);

  const { activeDoc } =
    listofPagesHelper.myDocsHelper && listofPagesHelper.myDocsHelper.getmyState(state);

  return { activeDoc, selectedPages };
})(CopyPasteMenu);
