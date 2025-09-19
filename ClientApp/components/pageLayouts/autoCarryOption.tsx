import * as React from 'react';

import { MenuItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensurePageLayouts, { IPageLayoutsettings } from './reducer';

import ToggleButton from 'react-toggle-button';
import { connect } from 'react-redux';

type ConnectedProps = {
  readonly fieldsWithAutoCarry: { [fieldName: string]: boolean };
};

type ComponentProps = {
  readonly fieldName: string;
};

const borderRadiusStyle = { borderRadius: 2 };
const tooltip = <Tooltip id='tooltip'>Auto carry this index field to new documents</Tooltip>;
const label = (
  <OverlayTrigger placement='bottom' overlay={tooltip}>
    <i className='fa fa-thumb-tack' style={{ margin: 'auto' }} />
  </OverlayTrigger>
);

const AutoCarryMenu: React.SFC<ConnectedProps & ComponentProps & { dispatch }> = ({
  fieldsWithAutoCarry,
  fieldName,
  dispatch,
}) => (
  <MenuItem>
    <div style={{ float: 'left', paddingRight: '5px' }}>
      <ToggleButton
        thumbIcon={label}
        activeLabel='ON'
        inactiveLabel='OFF'
        colors={{
          activeThumb: {
            base: '#f37029',
          },
          inactiveThumb: {
            base: '#f37029',
          },
        }}
        value={!!(fieldsWithAutoCarry && fieldsWithAutoCarry[fieldName])}
        thumbStyle={borderRadiusStyle}
        trackStyle={borderRadiusStyle}
        onToggle={(value) => {
          //remeber to add to mainnav/reducer.t =s :settingsToPersist if you want setting to persist

          dispatch(
            ensurePageLayouts().setAutoCarry(
              fieldName,
              !(fieldsWithAutoCarry && fieldsWithAutoCarry[fieldName]),
            ),
          );
        }}
      />
    </div>
    <span className='text-muted'>
      <small>auto carry</small>
    </span>
  </MenuItem>
);

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { fieldsWithAutoCarry } = ensurePageLayouts().getCurrentState(state);

  return {
    fieldsWithAutoCarry,
  };
})(AutoCarryMenu);
