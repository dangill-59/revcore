import * as React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureMainNav, { INavMenuState } from '../mainNav/reducer';

import ToggleButton from 'react-toggle-button';
import { connect } from 'react-redux';

type ViewProps = INavMenuState & { dispatch };

const borderRadiusStyle = { borderRadius: 2 };
const tooltip = <Tooltip id='tooltip'>Search multiple repositories</Tooltip>;
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
        value={!!selectableSettings['multiProjectSearch']}
        thumbStyle={borderRadiusStyle}
        trackStyle={borderRadiusStyle}
        onToggle={(value) => {
          //remeber to add to mainnav/reducer.t =s :settingsToPersist if you want setting to persist
          dispatch(ensureMainNav().updateSetting('multiProjectSearch', !value));
        }}
      />
    </div>
    <span>Multi repo</span>
  </li>
);

export default connect((state) => {
  return ensureMainNav().getCurrentState(state) || {};
})(MoveableSetting);
