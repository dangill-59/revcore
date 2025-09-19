import * as React from 'react';
import * as _ from 'lodash';

import {
  IMovableComponentProps,
  IMoveableState,
  IRndComponentProps,
  MovablePlacement,
} from './interfaces';
import ensureMainNav, { INavMenuState } from '../mainNav/reducer';

import MovableMenu from './menu';
import MoveableReducerHelper from './reducerHelper';
import Rnd from 'react-rnd';
import RndConneted from './rndBody';
import { connect } from 'react-redux';

const RNDResizable = {
  top: true,
  right: true,
  bottom: true,
  left: true,
  topRight: true,
  bottomRight: true,
  bottomLeft: true,
  topLeft: true,
};

type ViewProps = IMovableComponentProps & { dispatch } & INavMenuState & IMoveableState;

class Moveable extends React.Component<ViewProps, {}> {
  componentDidMount() {
    this.props.dispatch(ensureMainNav().addMenu('settings', 'movable', MovableMenu));
  }
  componentWillUnmount() {
    this.props.dispatch(ensureMainNav().deleteMenu('settings', 'movable'));
  }

  render() {
    const {
      children,
      selectableSettings,
      overflow,
      className,
      moveableHelper,
      position,
      size,
      initialPosition,
      dispatch,
    } = this.props;

    const myPosition = position;
    const mySize = size;
    const initialPlacement: MovablePlacement = initialPosition || {};

    const width =
      mySize && mySize.width
        ? mySize.width
        : Math.min(initialPlacement.width || 2000, window.innerWidth - 40);
    const height =
      mySize && mySize.height
        ? mySize.height
        : Math.min(initialPlacement.height || 1500, window.innerHeight - 120);

    const x =
      myPosition && myPosition.left
        ? myPosition.left
        : initialPlacement.left || (window.innerWidth - width) / 2 - 20;
    const y = myPosition && myPosition.top ? myPosition.top : initialPlacement.top || 10; //window.innerHeight / 2 - 80,

    let RndStyle = {
      textAlign: 'center',
      //padding: '1px',

      borderRadius: '5px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'inherit',

      border: '',
    };

    const isRepositioing = selectableSettings && selectableSettings['movableRepositioning'];

    if (isRepositioing) {
      RndStyle.border = 'solid 5px #fff';
      RndStyle.cursor = 'move';
    }

    return (
      <Rnd
        size={{ width, height }}
        position={{ x, y }}
        enableResizing={isRepositioing ? RNDResizable : {}}
        disableDragging={!isRepositioing}
        style={RndStyle}
        minWidth={100}
        minHeight={100}
        onDragStop={(e, ui) => {
          dispatch(moveableHelper.updatePosition({ left: ui.x, top: ui.y }));
        }}
        onResizeStop={(e, dir, ref, delta, position) => {
          dispatch(moveableHelper.updateSize({ width: ref.offsetWidth, height: ref.offsetHeight }));
        }}
      >
        <RndConneted className={className} overflow={overflow || 'hidden'}>
          {children}
        </RndConneted>
      </Rnd>
    );
  }
}

export default connect<INavMenuState, { dispatch }, IMovableComponentProps>((state, ownprops) => {
  const helper = ownprops.moveableHelper as MoveableReducerHelper;

  return _.assign(
    {},
    ensureMainNav().getCurrentState(state) || {},
    helper ? helper.getmyState(state) : {},
  ) as any;
})(Moveable);
