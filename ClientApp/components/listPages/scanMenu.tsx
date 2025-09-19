import * as React from 'react';

import { NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { connect } from 'react-redux';
import ensureWorkspace from '../workspace/reducer';

type ComponentProps = {
  onScan: () => void;
};

type ConnectedProp = { creationObject: any };

const ScanMenu: React.StatelessComponent<ComponentProps & ConnectedProp> = ({
  onScan,
  creationObject,
}) => {
  const hasRevPrintedData = !!(
    creationObject &&
    creationObject.initcontext == 'printtorev' &&
    creationObject.data
  );

  return (
    <NavItem
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onScan && onScan();
      }}
    >
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip id='scanMenutooltip'>
            {hasRevPrintedData ? 'Import printed images' : 'Scan images'}
          </Tooltip>
        }
      >
        {hasRevPrintedData ? (
          <span
            style={{
              position: 'relative',
            }}
          >
            <i className='fa fa-print fa-2x' aria-hidden='true' />
            <i
              className='fa fa-circle-o-notch fa-3x fa-spin'
              aria-hidden='true'
              style={{
                position: 'absolute',
                left: -7,
                top: -18,
                color: '#ccc',
              }}
            />
          </span>
        ) : (
          <i className='fa fa-eraser fa-2x' aria-hidden='true' />
        )}
      </OverlayTrigger>
    </NavItem>
  );
};

export default connect<ConnectedProp, { dispatch }, ComponentProps>((state, ownprops) => {
  const { creationObject } = ensureWorkspace().getCurrentState(state);

  return { creationObject };
})(ScanMenu);
