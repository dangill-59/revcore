import 'react-phone-number-input/style.css';

import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  InputGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { createLoaderView, createSaverView } from 'base/asyncLoader';
import ensureUserSettings, { UpdatetabelSetting, settingsType } from './reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import PhoneInput from 'react-phone-number-input';
import Settingfield from './settingField';
import { UserUpdateReqModel } from '../../generated/UserUpdateReqModel';
import { connect } from 'react-redux';

type ConnectedProps = {
  settingAsync: IAsyncResult<UpdatetabelSetting<UserUpdateReqModel>>;
  savingAsync?: IAsyncResult<boolean>;
  readonly settingsChanged: boolean;
};

const ProfileLoader = createLoaderView<UpdatetabelSetting<UserUpdateReqModel>>();
const ProfileSaver = createSaverView<boolean>();

class ProfileSetting extends React.Component<ConnectedProps & { dispatch }, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureUserSettings().loadProfile());
  }

  render() {
    const { dispatch, settingAsync, savingAsync, settingsChanged } = this.props;

    return (
      <Modal show={true} onHide={() => dispatch(ensureUserSettings().showSettings(false))}>
        <Modal.Header closeButton>
          <h4 className='text-primary'>My profile {settingsChanged && ' *'}</h4>
        </Modal.Header>

        {settingAsync && (
          <ProfileLoader asyncResult={settingAsync} prompt='loading profile'>
            {settingAsync.result && (
              <form
                className='static-modal'
                style={{ padding: 10 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(ensureUserSettings().saveProfile());
                  dispatch(ensureUserSettings().showSettings(false));
                  console.log('Profile gets saved');
                }}
              >
                <fieldset disabled={savingAsync && !!savingAsync.isLoading}>
                  <Settingfield
                    myKey='emailaddress'
                    autoFocus={true}
                    label='email address'
                    dispatch={dispatch}
                    setting={settingAsync.result}
                  />

                  <Settingfield
                    myKey='preferredName'
                    label='Name'
                    dispatch={dispatch}
                    setting={settingAsync.result}
                  />

                  <Settingfield
                    myKey='fullName'
                    label='Fullname'
                    dispatch={dispatch}
                    setting={settingAsync.result}
                  />

                  <PhoneInput
                    required
                    defaultCountry='US'
                    placeholder='contact phone number'
                    value={settingAsync.result['phoneNumber'] || ''}
                    onChange={(e: any) =>
                      dispatch(ensureUserSettings().updateProfile('phoneNumber', e))
                    }
                  />
                </fieldset>

                <Modal.Footer>
                  <ProfileSaver asyncResult={savingAsync} prompt='Saving profile'>
                    <Button
                      bsStyle='warning'
                      onClick={() => dispatch(ensureUserSettings().showSettings(false))}
                    >
                      Close
                    </Button>

                    <Button bsStyle='info' type='submit' disabled={!settingsChanged}>
                      Save
                    </Button>
                  </ProfileSaver>
                </Modal.Footer>
              </form>
            )}
          </ProfileLoader>
        )}
      </Modal>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { settings, settingsChanged } = ensureUserSettings().getCurrentState(state);

  return _.assign(
    {},
    { settingsChanged },
    ((settings && settings[settingsType.profile]) || {}) as any,
  );
})(ProfileSetting);
