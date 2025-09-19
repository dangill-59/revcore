import * as React from 'react';
import * as _ from 'lodash';

import { Badge, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureCarts, { ICartsState, IListScanbatchesState } from './reducer';

import { PageImageModel } from '../../generated/PageImageModel';
import PageListView from '../listPages';
import Rnd from 'react-rnd';
import { ScanBatchModel } from '../../generated/ScanBatchModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const CartsLoader = createLoaderView<ScanBatchModel[]>();

type ConnectedProps = ICartsState & {};
type ViewProps = ConnectedProps & { dispatch };

const staticStyle = {
  position: 'fixed',
  border: 'solid black 1px',
  top: 238,
  left: 400,
  background: 'red',
  zIndex: 100,
};

class CartView extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureCarts().initializeCarts());
  }

  render() {
    const { dispatch, cartVisible, cartPosition } = this.props;

    const cartPositiontoUse = _.assign({ height: 300, width: 300, x: 400, y: 238 }, cartPosition);

    return cartVisible ? (
      <Rnd
        className='modal-content'
        size={{ height: cartPositiontoUse.height, width: cartPositiontoUse.width }}
        position={{ x: cartPositiontoUse.x, y: cartPositiontoUse.y }}
        style={{
          zIndex: 100,
        }}
        minWidth={400}
        minHeight={150}
        dragHandleClassName='.cartDragHandle'
        onDragStop={(e, ui) => {
          dispatch(ensureCarts().updateCartLocation(ui.x, ui.y));
        }}
        onResizeStop={(e, dir, ref, delta, position) => {
          dispatch(ensureCarts().updateCartSize(ref.offsetHeight, ref.offsetWidth));
        }}
      >
        <div style={{ position: 'relative', height: '100%' }}>
          <div
            className='modal-title'
            style={{
              borderBottom: 'solid 1px rgba(255, 255, 255, 0.38823529411764707)',
            }}
          >
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='carttooltip'>Drag here to re-position cart</Tooltip>}
            >
              <span className='cartDragHandle' style={{ cursor: 'move' }}>
                <i className='fa fa-arrows' aria-hidden='true'></i> Image cart
              </span>
            </OverlayTrigger>

            <Button
              className='pull-right'
              bsStyle='link'
              bsSize='sm'
              style={{ padding: 0, marginTop: -2, marginRight: 3 }}
              onClick={() => dispatch(ensureCarts().showCart(false))}
            >
              <i className='fa fa-times text-danger' aria-hidden='true'></i>
            </Button>
          </div>

          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 25 }}>
            {
              <PageListView
                listofPagesHelper={ensureCarts().pagesList}
                /*loadPagesCallback={p => {
                            p.then(pagesToAdd=>
                            dispatch(ensureCarts().addPages(pagesToAdd)));
                        }}*/

                //ToolButtons={PageListTools}
                hasInfiniteScroll={true}
                defaultThumbsHeight={200}
                imageListStyle={{
                  right: 0,
                  overflow: 'auto',
                  position: 'absolute',
                  top: 25,
                  bottom: 0,
                  left: 0,
                }}
              />
            }
          </div>
        </div>
      </Rnd>
    ) : null;
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  return ensureCarts().getCurrentState(state);
})(CartView);
