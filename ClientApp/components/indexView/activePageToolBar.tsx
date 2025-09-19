import * as React from 'react';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { PageImageModel } from '../../generated/PageImageModel';
import ensureNewDocuments from './reducer';

export const ActivePageToolBar: React.StatelessComponent<PageImageModel & { dispatch; index }> = ({
  dispatch,
  orderNumber,
  index,
  originalPageName,
}) => (
  <Button
    bsStyle='info'
    bsSize='xsmall'
    disabled={orderNumber == 0}
    onClick={() => dispatch(ensureNewDocuments().splitDoc())}
  >
    <OverlayTrigger
      placement='bottom'
      overlay={
        <Tooltip id='splittooltip'>
          {originalPageName && <u>{originalPageName}: </u>}
          Create a new document starting with this page <br />
          <small>
            Shortcut: <kbd>alt+s</kbd> OR <kbd>ins</kbd>
          </small>
        </Tooltip>
      }
    >
      <span>
        {index + 1}{' '}
        {index != orderNumber && <span className='text-muted'> ({orderNumber + 1})</span>}{' '}
        <i className='fa fa-files-o' aria-hidden='true'></i>{' '}
      </span>
    </OverlayTrigger>
  </Button>
);
