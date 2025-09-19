import * as React from 'react';

import ensureMainNav, { INavMenuState } from '../mainNav/reducer';

import { Button } from 'react-bootstrap';
import { IRndComponentProps } from './interfaces';
import { connect } from 'react-redux';

type ViewProps = INavMenuState & IRndComponentProps & { dispatch };

const RndBody: React.StatelessComponent<ViewProps> = ({
  dispatch,
  selectableSettings,
  children,
  className,
  overflow,
}) => {
  const isRepositioing = selectableSettings && selectableSettings['movableRepositioning'];
  const myClass = className || 'movable_class';
  return (
    <div
      className={className}
      style={{ overflow: overflow ? overflow : 'auto', width: '100%', height: '100%' }}
    >
      {children}
      {isRepositioing && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            color: 'rgba(0, 0, 0, 0.33)',
            zIndex: 100,
            backgroundColor: 'rgba(255, 192, 203, 0.58)',
            fontSize: 'x-large',
          }}
        >
          <div
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              position: 'relative',
            }}
          >
            <div>Drag to resposition and resize</div>
            <Button
              onClick={() => {
                dispatch(ensureMainNav().updateSetting('movableRepositioning', false));
              }}
              bsStyle='info'
            >
              Done repositioning
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect<INavMenuState, { dispatch }, IRndComponentProps>((state, ownprops) => {
  return ensureMainNav().getCurrentState(state) || ({} as any);
})(RndBody);
