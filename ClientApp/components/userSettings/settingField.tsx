import * as React from 'react';

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
import ensureUserSettings, { UpdatetabelSetting } from './reducer';

import { UserUpdateReqModel } from '../../generated/UserUpdateReqModel';

type ComponentProps = {
  dispatch;
  setting: UpdatetabelSetting<UserUpdateReqModel>;
  label: string;
  myKey: string;
  autoFocus?: boolean;
};

const Settingfield: React.StatelessComponent<ComponentProps> = ({
  dispatch,
  setting,
  label,
  myKey,
  autoFocus,
}) => {
  return (
    <FormGroup
      controlId={myKey}
      validationState={setting.validations && setting.validations[myKey] ? 'error' : null}
    >
      <InputGroup>
        <InputGroup.Addon>
          <OverlayTrigger
            placement='bottom'
            overlay={<Tooltip id='emailaddresstooltip'>{label}</Tooltip>}
          >
            <span>{label}</span>
          </OverlayTrigger>
        </InputGroup.Addon>
        <FormControl
          autoFocus={autoFocus}
          type='text'
          value={setting[myKey] || ''}
          placeholder={`enter ${label} ...`}
          onChange={(e: any) => dispatch(ensureUserSettings().updateProfile(myKey, e.target.value))}
        />
      </InputGroup>
      <FormControl.Feedback />
      {setting.validations && setting.validations[myKey] && (
        <HelpBlock>{setting.validations[myKey]}</HelpBlock>
      )}
    </FormGroup>
  );
};

export default Settingfield;
