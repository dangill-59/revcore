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
import ensureWorkspace, { TokenEditor } from './reducer';

import { connect } from 'react-redux';

type ConnectedProps = {
  createingServerToken?: TokenEditor;
};

type ViewProps = ConnectedProps & { dispatch };

const CreateTokenView: React.StatelessComponent<ViewProps> = ({
  dispatch,
  createingServerToken,
}) =>
  createingServerToken ? (
    <Modal show={true} onHide={() => dispatch(ensureWorkspace().updateServerTokenProp())}>
      <Modal.Header closeButton>
        <h4 className='text-primary'>Create server access Token</h4>
      </Modal.Header>

      <form
        className='static-modal'
        style={{ padding: 10 }}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ensureWorkspace().createNewWorkSpaceToken());
        }}
      >
        <Modal.Body>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='tokenname'>
                      a name for this token <small>4 characters +</small>
                    </Tooltip>
                  }
                >
                  <span>Token name</span>
                </OverlayTrigger>
              </InputGroup.Addon>

              <FormControl
                type='text'
                placeholder='A name that we can recognize this token by...'
                value={createingServerToken.name || ''}
                required
                onChange={(e: any) =>
                  dispatch(ensureWorkspace().updateServerTokenProp('name', e.target.value))
                }
              />
            </InputGroup>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <span>Valid for days :</span>
              </InputGroup.Addon>

              <FormControl
                type='number'
                placeholder='How many days this token is valid for'
                value={createingServerToken.validityDays || ''}
                required
                onChange={(e: any) =>
                  dispatch(ensureWorkspace().updateServerTokenProp('validityDays', e.target.value))
                }
              />
            </InputGroup>
            <FormControl.Feedback />
          </FormGroup>

          {createingServerToken.token && (
            <FormGroup controlId='formControlsTextarea'>
              <ControlLabel>Access Token</ControlLabel>
              <FormControl componentClass='textarea' readOnly value={createingServerToken.token} />
            </FormGroup>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle='info'
            onClick={() => dispatch(ensureWorkspace().updateServerTokenProp())}
          >
            {createingServerToken.token ? 'Close' : 'Cancel'}
          </Button>

          {!createingServerToken.token && (
            <Button bsStyle='danger' type='submit'>
              Create new token
            </Button>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  ) : (
    <div />
  );

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { createingServerToken } = ensureWorkspace().getCurrentState(state);

  return { createingServerToken };
})(CreateTokenView);
