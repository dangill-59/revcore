import * as React from 'react';
import * as _ from 'lodash';

import { Button, FormControl, FormGroup, InputGroup, Modal } from 'react-bootstrap';
import ensureConfirmBox, { IConfirmBoxState } from './reducer';

import { connect } from 'react-redux';

type ViewProps = IConfirmBoxState & { dispatch };
const WaitBox: React.StatelessComponent<ViewProps> = ({ dispatch, currentWaits }) => {
  return (
    <div>
      {currentWaits &&
        _.keys(currentWaits).map((key) => {
          const wait = currentWaits[key];

          if (!wait) return '';

          return (
            <Modal
              className='confirmationBox'
              backdropClassName='confirmationBoxBackDrop'
              key={key}
              show={true}
              onHide={() => dispatch(ensureConfirmBox().answer(key, false))}
            >
              <Modal.Header closeButton>
                <Modal.Title>{wait.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <h3 className='text-primary text-center'>
                  <i
                    className='fa fa-question-circle fa-3x text-danger'
                    aria-hidden='true'
                    style={{ float: 'left' }}
                  ></i>
                  <div style={{ marginLeft: 5 }}>{wait.description} ?</div>
                  <div style={{ clear: 'both' }}>&nbsp;</div>
                </h3>

                {wait.needsCode && (
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>Confirmation code</InputGroup.Addon>
                      <FormControl
                        type='text'
                        value={wait.code || ''}
                        placeholder='confirmation code'
                        required
                        onChange={(e: any) =>
                          dispatch(ensureConfirmBox().updateCode(key, e.target.value))
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                )}

                {wait.extraCheckBoxes && (
                  <div className='text-right'>
                    {_.keys(wait.extraCheckBoxes).map((extraKey) => (
                      <div key={extraKey}>
                        <input
                          type='checkbox'
                          checked={!!wait.extraCheckBoxes[extraKey]}
                          style={{ transform: 'scale(1.5)' }}
                          onClick={() => dispatch(ensureConfirmBox().toggleCheck(key, extraKey))}
                        />{' '}
                        <span>{extraKey}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Modal.Body>

              <Modal.Footer>
                <Button
                  bsStyle='danger'
                  disabled={wait.needsCode && !wait.code}
                  onClick={() => dispatch(ensureConfirmBox().answer(key, true))}
                >
                  Yes
                </Button>
                <Button
                  bsStyle='info'
                  onClick={() => dispatch(ensureConfirmBox().answer(key, false))}
                >
                  No
                </Button>
              </Modal.Footer>
            </Modal>
          );
        })}
    </div>
  );
};

export default connect((state) => {
  return ensureConfirmBox().getCurrentState(state) || {};
})(WaitBox);
