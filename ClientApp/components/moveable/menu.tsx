import * as React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureMainNav, { INavMenuState } from '../mainNav/reducer';

import ToggleButton from 'react-toggle-button';
import { connect } from 'react-redux';

type ViewProps = INavMenuState & { dispatch };

const borderRadiusStyle = { borderRadius: 2 };
const tooltip = <Tooltip id='tooltip'>Rearrange components</Tooltip>;
const label = (
  <OverlayTrigger placement='bottom' overlay={tooltip}>
    <i className='fa fa-object-group' style={{ margin: 'auto' }} />
  </OverlayTrigger>
);

const MoveableSetting: React.StatelessComponent<ViewProps> = ({ dispatch, selectableSettings }) => (
  <li>
    <div style={{ float: 'left', paddingRight: '5px' }}>
      <ToggleButton
        thumbIcon={label}
        activeLabel='Done'
        inactiveLabel='OFF'
        colors={{
          activeThumb: {
            base: '#f37029',
          },
          inactiveThumb: {
            base: '#f37029',
          },
        }}
        value={!!selectableSettings['movableRepositioning']}
        thumbStyle={borderRadiusStyle}
        trackStyle={borderRadiusStyle}
        onToggle={(value) => {
          dispatch(ensureMainNav().updateSetting('movableRepositioning', !value));
        }}
      />
    </div>
    <span>Re arrange layout</span>
  </li>
);

export default connect((state) => {
  return ensureMainNav().getCurrentState(state) || {};
})(MoveableSetting);
