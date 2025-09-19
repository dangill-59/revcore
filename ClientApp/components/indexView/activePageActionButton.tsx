import * as React from 'react';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureMainNav, { ISeletableSettings } from '../mainNav/reducer';

import { PageImageModel } from '../../generated/PageImageModel';
import { connect } from 'react-redux';
import ensureNewDocuments from './reducer';

type ComponentProps = PageImageModel;
type ConnectedProps = { selectableSettings: ISeletableSettings };

const ActivePageButtonBar: React.StatelessComponent<
  ComponentProps & ConnectedProps & { dispatch }
> = ({ dispatch, orderNumber, selectableSettings }) => (
  <div style={{ display: 'inline-block' }}>
    {(!!orderNumber || (selectableSettings && selectableSettings['advancedIndexingButtons'])) && (
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip id='splittooltip'>
            Create a new document starting with page {orderNumber + 1} <br />
            <small>
              Shortcut: <kbd>alt+s</kbd> OR <kbd>ins</kbd>
            </small>
          </Tooltip>
        }
      >
        <Button
          disabled={!orderNumber}
          bsStyle='info'
          style={{ margin: 5 }}
          onClick={() => dispatch(ensureNewDocuments().splitDoc())}
        >
          create new
        </Button>
      </OverlayTrigger>
    )}

    {selectableSettings && selectableSettings['advancedIndexingButtons'] && (
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip id='duplicatetooltip'>
            Duplicate this document
            <br />
            <small>
              Shortcut: <kbd>alt+ins OR ctrl+s</kbd>
            </small>
          </Tooltip>
        }
      >
        <Button
          bsStyle='warning'
          style={{ margin: 5 }}
          onClick={() => dispatch(ensureNewDocuments().createDuplicate())}
        >
          duplicate
        </Button>
      </OverlayTrigger>
    )}
  </div>
);

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state) => {
  const { selectableSettings } = ensureMainNav().getCurrentState(state);

  return { selectableSettings };
})(ActivePageButtonBar);
