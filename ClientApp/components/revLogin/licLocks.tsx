import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import ensureLogin, { IRevLoginState } from './reducer';

import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

type ViewProps = IRevLoginState & { dispatch };

const LicLockView: React.StatelessComponent<ViewProps> = ({
  dispatch,
  licLockData,
  licLockDataVisible,
}) => {
  return (
    <div style={{ border: 'solid 1px #ccc' }}>
      <h4 className='text-center'>current locks</h4>

      <table style={{ width: '100%' }}>
        <tbody>
          {licLockData &&
            _.keys(licLockData).map((k) => {
              const { userId, created } = licLockData[k];

              return (
                <tr key={`liclock_${k}`}>
                  <td>{userId}</td>
                  <td>logged in since {moment(created).fromNow(true)}</td>
                  <td style={{ textAlign: 'right' }}>
                    <Button
                      bsStyle='link'
                      tabIndex={-1}
                      onClick={() => {
                        dispatch(ensureLogin().releaseLock(k));
                      }}
                    >
                      <span className='text-danger'>Force release</span>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default connect((state) => {
  return ensureLogin().getCurrentState(state) || {};
})(LicLockView);
