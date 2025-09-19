import * as React from 'react';

import SplitPoint from 'base/splitPoint';
import { connect } from 'react-redux';
import ensureUserSettings from './reducer';

//delay load of setting forms
const SettingsTabs = () => (
  <SplitPoint
    prompt='Loading management module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./settings') as any).default);
        },
        'manage',
      );
    }}
  />
);

type ConnectedProps = {
  settingsVisible: boolean;
};

const UserSettings: React.StatelessComponent<ConnectedProps & { dispatch }> = ({
  dispatch,
  settingsVisible,
}) => {
  return settingsVisible ? <SettingsTabs /> : null;
};

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { settingsVisible } = ensureUserSettings().getCurrentState(state);
  return { settingsVisible };
})(UserSettings);
