import * as React from 'react';

import { NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

type ViewProps = { onFileAttached: () => void };

const AttachMenu: React.StatelessComponent<ViewProps> = ({ onFileAttached }) => {
  let attachIcon = 'fa fa-file-image-o fa-2x';
  let attachPrompt = 'Attach images';

  if (!navigator || navigator.platform != 'Win32') {
    attachIcon = 'fa fa-camera fa-2x';
  }

  let fileInput = null;

  return (
    <NavItem
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onFileAttached && onFileAttached();
      }}
    >
      <OverlayTrigger
        placement='bottom'
        overlay={<Tooltip id='AttachMenutooltip'>{attachPrompt}</Tooltip>}
      >
        <i className={attachIcon} aria-hidden='true' />
      </OverlayTrigger>
    </NavItem>
  );
};

export default AttachMenu;
