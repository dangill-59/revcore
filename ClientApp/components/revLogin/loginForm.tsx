import * as React from 'react';
import * as _ from 'lodash';

import { Button, Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import ensureLogin, { IRevLoginState } from './reducer';

import LicLockView from './licLocks';
import Spinner from 'spinner';
import { createSaverView } from 'base//asyncLoader';

type ViewProps = IRevLoginState & { dispatch };

const LoginLoader = createSaverView<string>();

class LoginForm extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(ensureLogin().checkLoginPreReqs());
  }

  public render() {
    const {
      dispatch,
      loginAsync,
      dataBaseStatusAsync,
      forgotPassword,
      passwordResetAsync,
      licLockData,
      licLockDataVisible,
    } = this.props;

    let UserName;
    let Pwd;
    let resetPin;
    let twoFactorCode;
    let forgotpasswordPin;

    let ToDOPrompt = null;
    let resetPrompt = null;

    let readonlyCreds = false;

    const openIdProviders =
      (dataBaseStatusAsync &&
        dataBaseStatusAsync.result &&
        dataBaseStatusAsync.result.openIdProviders &&
        _.keys(dataBaseStatusAsync.result.openIdProviders)) ||
      [];

    if (loginAsync && !loginAsync.isLoading) {
      ToDOPrompt = (
        <div>
          <p>
            <Button
              type='submit'
              bsStyle='primary'
              bsSize='large'
              style={{ width: 300, height: 50 }}
            >
              Sign-in
            </Button>
          </p>

          {/*["", ...openIdProviders].map(k => <p key={k}>
                
            </p>)
            */}
        </div>
      );
    }

    if (loginAsync && loginAsync.error) {
      switch (loginAsync.error.Reason) {
        case 'reset pin required':
          resetPrompt = (
            <FormGroup controlId='userNameField'>
              <ControlLabel srOnly={true}>Reset Pin</ControlLabel>
              <FormControl
                type='text'
                inputRef={(node) => {
                  resetPin = node;
                }}
                placeholder='Password reset pin'
                required
              ></FormControl>
            </FormGroup>
          );
          break;
        case '2factor code required':
          readonlyCreds = true;
          resetPrompt = (
            <FormGroup controlId='twofactorField'>
              <ControlLabel srOnly={true}>Authorization code</ControlLabel>
              <FormControl
                type='text'
                inputRef={(node) => {
                  twoFactorCode = node;
                }}
                placeholder='Authorization code'
                required
              ></FormControl>
              <div style={{ textAlign: 'right' }}>
                <Button
                  bsStyle='link'
                  onClick={() => {
                    dispatch(
                      ensureLogin().doLogin({
                        UserName: (UserName || {}).value,
                        Pwd: (Pwd || {}).value,
                      }),
                    );
                  }}
                >
                  re send sms
                </Button>
              </div>
            </FormGroup>
          );
          break;
      }
    }

    if (!resetPrompt && forgotPassword && !(passwordResetAsync && passwordResetAsync.isLoading)) {
      resetPrompt = (
        <div>
          {forgotPassword.prompt && (
            <h3 className={forgotPassword.isError ? 'text-danger' : 'text-info'}>
              {forgotPassword.prompt}
            </h3>
          )}
          {forgotPassword.showResetPin && (
            <FormGroup controlId='twofactorField'>
              <ControlLabel srOnly={true}>Authorization code</ControlLabel>
              <FormControl
                type='text'
                inputRef={(node) => {
                  forgotpasswordPin = node;
                }}
                placeholder='Authorization code'
                required
              ></FormControl>
            </FormGroup>
          )}
        </div>
      );
    }

    return (
      <div>
        <h3
          className='color-orange'
          style={{ paddingTop: 7, fontSize: 25, textDecoration: 'underline' }}
        >
          Welcome to REV
        </h3>

        <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
          {openIdProviders.length > 0 && (
            <Col
              md={6}
              style={{
                borderRight: 'solid #ccc 1px',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 50,
              }}
            >
              {openIdProviders.map((openIdProvider) => (
                <p key={openIdProvider}>
                  <Button
                    bsStyle='primary'
                    bsSize='large'
                    style={{ width: 300, height: 50 }}
                    onClick={() => dispatch(ensureLogin().doLogin({ openIdProvider }))}
                  >
                    Sign-in with {openIdProvider}
                  </Button>
                </p>
              ))}
            </Col>
          )}

          <Col md={openIdProviders.length > 0 ? 6 : 12}>
            <form
              style={{ padding: '20px 0px', maxWidth: 600, margin: 'auto' }}
              onSubmit={(e) => {
                e.preventDefault();

                let lpgParams: any = { UserName: (UserName || {}).value, Pwd: (Pwd || {}).value };

                if (resetPin && resetPin.value) lpgParams.changePin = resetPin.value;

                if (twoFactorCode && twoFactorCode.value) {
                  lpgParams.twoFactorCode = twoFactorCode.value;
                }

                if (forgotpasswordPin && forgotpasswordPin.value) {
                  lpgParams.forgotpasswordPin = forgotpasswordPin.value;
                }

                dispatch(ensureLogin().doLogin(lpgParams));
              }}
            >
              <div style={{ maxWidth: 400, margin: 'auto' }}>
                <FormGroup controlId='userNameField'>
                  <ControlLabel srOnly={true}>User name</ControlLabel>
                  <FormControl
                    type='text'
                    readOnly={readonlyCreds}
                    inputRef={(node) => {
                      UserName = node;
                    }}
                    placeholder='email address'
                    required
                    autoFocus
                  ></FormControl>
                </FormGroup>

                <FormGroup controlId='pwdField'>
                  <ControlLabel srOnly={true}>Password</ControlLabel>
                  <FormControl
                    type='password'
                    readOnly={readonlyCreds}
                    inputRef={(node) => {
                      Pwd = node;
                    }}
                    placeholder='Password'
                    required
                  ></FormControl>
                </FormGroup>

                <div style={{ textAlign: 'right' }}>
                  <Button
                    bsStyle='link'
                    tabIndex={-1}
                    onClick={() => {
                      dispatch(ensureLogin().forgotPassword((UserName || {}).value));
                    }}
                  >
                    {forgotPassword && forgotPassword.showResetPin
                      ? 'Resend reset pin'
                      : 'Forgot password?'}
                  </Button>
                </div>

                {licLockData && !licLockDataVisible && (
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      bsStyle='link'
                      tabIndex={-1}
                      onClick={() => {
                        dispatch(ensureLogin().showLicLockData(true));
                      }}
                    >
                      <span className='text-warning'>Force release Licenses</span>
                    </Button>
                  </div>
                )}
              </div>

              {licLockData && licLockDataVisible && <LicLockView />}

              <FormGroup>
                {loginAsync && (
                  <LoginLoader prompt='Signing in ...' asyncResult={loginAsync}>
                    &nbsp;
                  </LoginLoader>
                )}
                {passwordResetAsync && (
                  <LoginLoader prompt='sending ...' asyncResult={passwordResetAsync}>
                    &nbsp;
                  </LoginLoader>
                )}
              </FormGroup>

              {resetPrompt}

              {ToDOPrompt}
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginForm;
