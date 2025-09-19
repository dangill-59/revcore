import * as React from 'react';

import { Badge, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureCarts, { ICartsState } from './reducer';

import { PageImageModel } from '../../generated/PageImageModel';
import { connect } from 'react-redux';

type ConnectedProps = { pages: PageImageModel[] };

class CartMenu extends React.PureComponent<ConnectedProps & { dispatch }, {}> {
  render() {
    const { dispatch, pages } = this.props;

    return (
      <NavItem onClick={() => dispatch(ensureCarts().showCart(true))}>
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='searchtooltip'>Show image cart</Tooltip>}
        >
          <span style={{ position: 'relative' }}>
            <i className='fa fa-shopping-cart fa-2x' aria-hidden='true'></i>
            {pages.length > 0 && (
              <Badge className='badge-info' style={{ position: 'absolute', right: -9, top: -20 }}>
                {pages.length}
              </Badge>
            )}
          </span>
        </OverlayTrigger>
      </NavItem>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { activeDoc } = ensureCarts().allCartsList.getmyState(state);

  return { pages: (activeDoc && activeDoc.pages) || [] };
})(CartMenu);
