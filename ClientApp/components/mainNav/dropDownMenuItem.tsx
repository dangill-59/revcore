import * as React from 'react';

import {
  Badge,
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

type ComponentProps = {
  bsSize?: 'large';
  toolTip: string;
  faIcon: string;
  helpText?: string;
};

const DDMenuItem: React.StatelessComponent<ComponentProps> = ({
  toolTip,
  faIcon,
  helpText,
  bsSize,
}) => (
  <OverlayTrigger
    placement='bottom'
    overlay={<Tooltip id={toolTip}>{helpText || toolTip}</Tooltip>}
  >
    <div
      style={{
        display: 'table',
      }}
    >
      <i
        className={`fa ${faIcon} ${'large' == bsSize ? 'fa-2x' : ''} color-orange`}
        aria-hidden='true'
      ></i>
      <span
        style={{
          fontSize: bsSize || 'inherit',
          paddingLeft: 10,
          color: 'black',
          display: 'table-cell',
          verticalAlign: 'middle',
        }}
      >
        {toolTip}
      </span>
      <span className='sr-only'>{helpText || toolTip}</span>
    </div>
  </OverlayTrigger>
);

export default DDMenuItem;
