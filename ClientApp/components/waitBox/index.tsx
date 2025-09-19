import * as React from 'react';
import * as _ from 'lodash';

import { Button, Modal, ProgressBar } from 'react-bootstrap';
import ensureWaitBox, { IWaitBoxState } from './reducer';

import { connect } from 'react-redux';
import { createSaverView } from 'base/asyncLoader';

const UploadStatusView = createSaverView<boolean>();

type ViewProps = IWaitBoxState & { dispatch };
const WaitBox: React.StatelessComponent<ViewProps> = ({ dispatch, currentWaits }) => {
  return (
    <div>
      {currentWaits &&
        _.keys(currentWaits).map((key) => {
          const wait = currentWaits[key];

          if (!wait) return '';

          return (
            <Modal
              className='waitBox'
              backdropClassName='waitBoxBackDrop'
              key={key}
              show={true}
              onHide={() => dispatch(ensureWaitBox().closeWait(key))}
            >
              <Modal.Header>
                <Modal.Title>
                  {wait.waitStatusAsync.error ? (
                    <span className='text-danger'>Failed</span>
                  ) : (
                    'Please wait ... '
                  )}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <UploadStatusView
                  asyncResult={wait.waitStatusAsync}
                  prompt={wait.description}
                ></UploadStatusView>
                {wait.waitProgress && (
                  <ProgressBar
                    active
                    striped
                    bsStyle='info'
                    now={wait.waitProgress.percent || 0}
                    label={wait.waitProgress.status || ''}
                  />
                )}
              </Modal.Body>
              {/*
                <Modal.Footer>
                <Button bsStyle="warning" disabled={!wait.waitStatusAsync.error} 
                onClick={() => dispatch(ensureWaitBox().closeWait(key))}
                    >
                        Close
                    </Button>
                </Modal.Footer>
               */}
            </Modal>
          );
        })}
    </div>
  );
};

export default connect((state) => {
  return ensureWaitBox().getCurrentState(state) || {};
})(WaitBox);
