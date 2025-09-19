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
import ensurePrintApp, { EditMailReqModel } from './reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { connect } from 'react-redux';
import { createSaverView } from 'base/asyncLoader';

const EmailSendSaver = createSaverView<boolean>();

type ConnectedProps = {
  mailRequest?: EditMailReqModel;
  mailsendStatusAsync: IAsyncResult<boolean>;
};

const MailEditor: React.StatelessComponent<ConnectedProps & { dispatch }> = ({
  dispatch,
  mailRequest,
  mailsendStatusAsync,
}) => {
  return mailRequest ? (
    <Modal show={true} onHide={() => dispatch(ensurePrintApp().prepareMail({ hideEditor: true }))}>
      <Modal.Header closeButton>
        <h4 className='text-primary'>Sending email</h4>
      </Modal.Header>

      <form
        className='static-modal'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ensurePrintApp().sendMail());
        }}
      >
        <Modal.Body>
          <fieldset disabled={mailsendStatusAsync && !!mailsendStatusAsync.isLoading}>
            <FormGroup
              controlId='mailTo'
              validationState={
                mailRequest.validations && mailRequest.validations['mailTo'] ? 'error' : null
              }
            >
              <InputGroup>
                <InputGroup.Addon>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='mailtotooltip'>Email address</Tooltip>}
                  >
                    <span>@</span>
                  </OverlayTrigger>
                </InputGroup.Addon>
                <FormControl
                  autoFocus
                  type='text'
                  value={mailRequest.mailTo || ''}
                  placeholder='email address ...'
                  onChange={(e: any) =>
                    dispatch(ensurePrintApp().updateMailReq('mailTo', e.target.value))
                  }
                />
              </InputGroup>
              <FormControl.Feedback />
              {mailRequest.validations && mailRequest.validations['mailTo'] && (
                <HelpBlock>{mailRequest.validations['mailTo']}</HelpBlock>
              )}

              {!mailRequest.showCC && (
                <Button
                  bsStyle='link'
                  style={{ fontSize: 'smaller' }}
                  onClick={() => dispatch(ensurePrintApp().updateMailReq('showCC', true))}
                >
                  Add CC
                </Button>
              )}
            </FormGroup>

            {mailRequest.showCC && (
              <FormGroup
                controlId='ccTo'
                validationState={
                  mailRequest.validations && mailRequest.validations['ccTo'] ? 'error' : null
                }
              >
                <InputGroup>
                  <InputGroup.Addon>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={<Tooltip id='cctooltip'>Email address</Tooltip>}
                    >
                      <span>CC</span>
                    </OverlayTrigger>
                  </InputGroup.Addon>
                  <FormControl
                    type='text'
                    value={mailRequest.ccTo || ''}
                    placeholder='CC address ...'
                    onChange={(e: any) =>
                      dispatch(ensurePrintApp().updateMailReq('ccTo', e.target.value))
                    }
                  />
                </InputGroup>
                <FormControl.Feedback />
                {mailRequest.validations && mailRequest.validations['ccTo'] && (
                  <HelpBlock>{mailRequest.validations['ccTo']}</HelpBlock>
                )}
              </FormGroup>
            )}

            <FormGroup controlId='subject'>
              <InputGroup>
                <InputGroup.Addon>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='subjecttooltip'>Email subject</Tooltip>}
                  >
                    <i className='fa fa-telegram' style={{ margin: 'auto' }} />
                  </OverlayTrigger>
                </InputGroup.Addon>
                <FormControl
                  type='text'
                  value={mailRequest.subject || ''}
                  placeholder='email subject ...'
                  onChange={(e: any) =>
                    dispatch(ensurePrintApp().updateMailReq('subject', e.target.value))
                  }
                />
              </InputGroup>
            </FormGroup>

            <FormGroup controlId='msgTextarea'>
              <ControlLabel>Message:</ControlLabel>
              <FormControl
                componentClass='textarea'
                placeholder='Email message ...'
                style={{ height: 250 }}
                value={mailRequest.message || ''}
                onChange={(e: any) =>
                  dispatch(ensurePrintApp().updateMailReq('message', e.target.value))
                }
              />
            </FormGroup>

            <FormGroup controlId='attachmentName'>
              <InputGroup>
                <InputGroup.Addon>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='attachmenttooltip'>Images attachment name</Tooltip>}
                  >
                    <i className='fa fa-paperclip' style={{ margin: 'auto' }} />
                  </OverlayTrigger>
                </InputGroup.Addon>

                <FormControl
                  type='text'
                  value={mailRequest.attachmentName || ''}
                  placeholder='attachment name ...'
                  onChange={(e: any) =>
                    dispatch(ensurePrintApp().updateMailReq('attachmentName', e.target.value))
                  }
                />
              </InputGroup>

              <HelpBlock>
                <em>Sending {mailRequest.images.length} image(s)</em>
              </HelpBlock>
            </FormGroup>
          </fieldset>
        </Modal.Body>

        <Modal.Footer>
          <EmailSendSaver asyncResult={mailsendStatusAsync} prompt='Sending email'>
            {mailsendStatusAsync && mailsendStatusAsync.result && (
              <h4 className='text-info'>Your email has been sent </h4>
            )}

            <Button
              bsStyle={mailsendStatusAsync && mailsendStatusAsync.error ? 'danger' : 'warning'}
              onClick={() => dispatch(ensurePrintApp().prepareMail({ hideEditor: true }))}
            >
              {mailsendStatusAsync && mailsendStatusAsync.result ? 'Close' : 'Cancel'}
            </Button>

            {!(mailsendStatusAsync && mailsendStatusAsync.result) && (
              <Button bsStyle='info' type='submit'>
                Send mail
              </Button>
            )}
          </EmailSendSaver>
        </Modal.Footer>
      </form>
    </Modal>
  ) : null;
};

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { mailRequest, mailsendStatusAsync } = ensurePrintApp().getCurrentState(state);
  return { mailRequest, mailsendStatusAsync };
})(MailEditor);
