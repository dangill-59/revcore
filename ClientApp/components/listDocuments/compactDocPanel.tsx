import * as React from 'react';
import * as _ from 'lodash';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { DRAGTYPE_PAGE, ListDocumentPagesHelper } from '../listPages/reducerHelper';
import { EditableDocument, ListDocsHelper } from './reducerHelper';
import ensureDocSettings, { IDocSettings } from './settings.reducer';

import { Badge } from 'react-bootstrap';
import { DnDProps } from '../listPages/page';
import { DropTarget } from 'react-dnd';
import PageCountIcon from './pageCountIcon';

type ComponentProps = EditableDocument & {
  listDocsHelper: ListDocsHelper;
  compactViewHiddenFields: { [key: string]: boolean };
};

export const DropTargetCreator = DropTarget(
  [DRAGTYPE_PAGE],
  {
    drop(props, monitor) {
      const type = monitor.getItemType();
      const item = monitor.getItem();

      var myProps = props as { dispatch } & ComponentProps;
      const { dispatch, listDocsHelper, pages, id, newdocId } = myProps;

      if (typeof listDocsHelper === 'undefined') {
        console.error('listDocsHelper not set for page drop target');
        return;
      }

      switch (type) {
        /*case NativeTypes.FILE :
                    dispatch(listofPagesHelper.addPages(item.files, orderNumber));
                    break;
                */

        case DRAGTYPE_PAGE:
          if (_.find(pages || [], (p) => p.id === item.id)) {
            console.warn('dropped page exists in doc pages. nothing to do');
            return;
          }

          return {
            movedToList: dispatch(
              listDocsHelper.updatePages(id || newdocId, _.concat(pages || [], [item])),
            ),
          };
      }

      return { done: false };
    },
  },

  (connecter, monitor) => ({
    pageDropTarget: connecter.dropTarget(),
    //isDragOverMe: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
);

const DocCompactPanel: React.StatelessComponent<ComponentProps & DnDProps> = ({
  dispatch,
  listDocsHelper,
  id,
  newdocId,
  indexes,
  compactViewHiddenFields,
  pages,
  fieldValidations,
  notSelected,
  isChanged,
  pageDropTarget,
  isOverCurrent,
}) => {
  let valueStr = '';
  if (indexes) {
    _.each(_.keys(indexes), (k) => {
      if (indexes[k] && !(compactViewHiddenFields || {})[k]) {
        valueStr += (valueStr ? '\n' : '') + indexes[k].toString().substring(0, 10);
      }
    });
  }

  let bgStyle = notSelected || !valueStr ? 'bg-danger' : '';
  if (!!id) bgStyle = isChanged ? 'bg-warning' : 'text-muted';

  return pageDropTarget(
    <div
      style={{ position: 'relative', textAlign: 'left' }}
      className={
        (isOverCurrent
          ? 'bg-info'
          : fieldValidations && _.keys(fieldValidations).length > 0
            ? 'bg-danger'
            : '') + bgStyle
      }
    >
      <Button
        style={{ padding: 0 }}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(listDocsHelper.selectDocument(id || newdocId, !!notSelected));
        }}
        bsStyle='link'
      >
        <OverlayTrigger
          placement='bottom'
          overlay={
            <Tooltip id='selectdoctooltip'> {!notSelected && 'un-'}select the document </Tooltip>
          }
        >
          <i
            className={`fa fa-folder-o text-${notSelected ? 'muted' : 'primary'}`}
            style={{ margin: '0px 5px' }}
          />
        </OverlayTrigger>
      </Button>

      {indexes && <small>{valueStr}</small>}
      <PageCountIcon
        className='text-primary'
        style={{ position: 'absolute', top: '1px', right: '2px' }}
        count={(pages || []).length}
      />
    </div>,
  );
};

export default DropTargetCreator(DocCompactPanel);
