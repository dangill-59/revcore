import * as React from 'react';

import { Col, Grid, Row } from 'react-bootstrap';
import ensureLogin, { IRevLoginState } from './reducer';

import LoginForm from './loginForm';
import { StatusMessageModel } from '../../generated/StatusMessageModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base//asyncLoader';

const Banner1 = require('./banner1.jpg');
const Banbg = require('./banbg.jpg');

const banbg = {
  backgroundImage: 'url(' + Banbg + ')',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'left top',
  position: 'relative',
  backgroundColor: '#F16E28',
} as any;

const bannerback = {
  fontSize: 'medium',
  backgroundColor: 'transparent',
  minHeight: '390px',
  backgroundImage: 'url(' + Banner1 + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
};

type ViewProps = IRevLoginState & { dispatch };

const LoginLoader = createLoaderView<StatusMessageModel>();

class RefreshFrame extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureLogin().doLogin({ loadinFrame: this._iframe.contentWindow }));
  }
  _iframe: HTMLIFrameElement;
  public render() {
    const { dataBaseStatusAsync } = this.props;
    return <div></div>;
  }
}

class EntryView extends React.Component<ViewProps, {}> {
  public render() {
    const { dataBaseStatusAsync, JWT, rehreshingToken } = this.props;

    return JWT ? (
      rehreshingToken && dataBaseStatusAsync && dataBaseStatusAsync.result ? (
        <RefreshFrame {...this.props} />
      ) : null
    ) : (
      <div>
        <div
          className='text-center'
          style={{
            backgroundColor: 'white',
            minHeight: 300,
            width: '90%',
            maxWidth: 61000,
            padding: 11,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {dataBaseStatusAsync && (
            <LoginLoader prompt='Getting ready ...' asyncResult={dataBaseStatusAsync}>
              <LoginForm {...this.props} />

              {dataBaseStatusAsync.result && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 5,
                    right: 4,
                    fontStyle: 'italic',
                    fontSize: 'small',
                  }}
                  className='text-muted'
                >
                  <span>Version: </span>
                  <span>{dataBaseStatusAsync.result.version}</span>
                </div>
              )}
            </LoginLoader>
          )}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return ensureLogin().getCurrentState(state) || {};
})(EntryView);
