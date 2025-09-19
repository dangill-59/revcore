import * as React from 'react';

import { Button, Modal } from 'react-bootstrap';
import ensureNatve, { ILaunchNativeState } from './reducer';

import Spinner from 'spinner';
import { connect } from 'react-redux';

type ConnectedProps = ILaunchNativeState & {};

const PromptArray = {
  checking: 'Initializing native application',
  fetched: 'Native task in progress',
  inprogress: 'Native task in progress',
};

const NativeModal: React.StatelessComponent<ConnectedProps & { dispatch }> = ({
  currentJob,
  dispatch,
}) => {
  function close() {
    dispatch(ensureNatve().cancelCurrentJob());
  }

  const installerUrl = 'api/nativeInstaller/' + (currentJob && currentJob.jobCode);

  return (
    <Modal show={!!currentJob} onHide={(_) => close()} backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>Native Task</Modal.Title>
      </Modal.Header>

      {currentJob && (
        <Modal.Body>
          {currentJob.error ? (
            <h3 className='text-danger'>{currentJob.error}</h3>
          ) : (
            <Spinner
              isLoading={currentJob.status != 'created'}
              prompt={PromptArray[currentJob.status]}
            >
              <div>
                If the native application did not start. Please{' '}
                <a href={installerUrl}>click here</a> to install the native application on your
                system.
              </div>
            </Spinner>
          )}
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button onClick={(_) => close()} bsStyle='warning'>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  return ensureNatve().getCurrentState(state);
})(NativeModal);
