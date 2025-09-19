import * as React from 'react';

import {
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensurePrintApp, { PrintableProps } from './reducer';

import MailEditor from './mailEditor';
import { connect } from 'react-redux';

type ComponentProps = {
  //bad hack. The printable menu should be completly in litsofpages, lets rtefractor this later
  OtherPrintableMenusComponent?: any;

  MenubadgeComponent?: string;
};

type ConnectedProps = {
  printableState?: PrintableProps;
};

const DistributeMenu: React.StatelessComponent<ConnectedProps & ComponentProps & { dispatch }> = ({
  printableState,
  OtherPrintableMenusComponent,
  MenubadgeComponent,
  dispatch,
}) => {
  return printableState && !printableState.isInSearch ? (
    <OverlayTrigger placement='left' overlay={<Tooltip id='printtip'>Distribute</Tooltip>}>
      <NavDropdown
        id='distMenu'
        title={
          (
            <span style={{ position: 'relative' }}>
              <i className='fa fa-send fa-2x' aria-hidden='true'></i>
              {MenubadgeComponent && <MenubadgeComponent />}
            </span>
          ) as any
        }
      >
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            dispatch(ensurePrintApp().downloadOriginals());
          }}
        >
          <span className='text-success' style={{ fontSize: 'large' }}>
            <i className='fa fa-download'></i> Download originals
          </span>
        </MenuItem>

        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            dispatch(ensurePrintApp().downloadPdf());
          }}
        >
          <span className='text-success' style={{ fontSize: 'large' }}>
            <i className='fa fa-file-pdf-o'></i> Printable pdf
          </span>
        </MenuItem>

        <MenuItem onClick={(_) => dispatch(ensurePrintApp().prepareMail())}>
          <span className='text-success' style={{ fontSize: 'large' }}>
            <i className='fa fa-envelope-square'></i> Email
          </span>
        </MenuItem>
        <MailEditor />

        {/*<MenuItem
                onClick={_ => dispatch(ensurePrintApp().addToCart())}
            >
                <span className="text-success" style={{ fontSize: 'large' }}><i className="fa fa-cart-plus"></i> Add to cart</span>

            </MenuItem>*/}

        {OtherPrintableMenusComponent && <OtherPrintableMenusComponent />}

        {printableState.extraMenu}
      </NavDropdown>
    </OverlayTrigger>
  ) : null;
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state) => {
  const { printableState } = ensurePrintApp().getCurrentState(state);
  return { printableState };
})(DistributeMenu);
