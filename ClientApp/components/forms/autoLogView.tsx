import * as React from 'react';

import { Modal, Well } from 'react-bootstrap';
import ensureAutomations, { AutomationRunProps, LogLevel } from './reducer';

import { connect } from 'react-redux';

type ConnectedProps = {
  readonly lastAutomationRun: AutomationRunProps;
};

const AutoLogView: React.StatelessComponent<ConnectedProps & { dispatch }> = ({
  lastAutomationRun,
  dispatch,
}) => {
  return (
    <Modal
      bsSize='lg'
      show={true}
      onHide={() => dispatch(ensureAutomations().showAutomationLogs(false))}
    >
      <Modal.Header closeButton>
        {lastAutomationRun && <Modal.Title>Logs for {lastAutomationRun.name} </Modal.Title>}
      </Modal.Header>

      <Modal.Body>
        {lastAutomationRun && lastAutomationRun.logs && (
          <Well style={{ maxHeight: 400, overflow: 'auto' }}>
            {lastAutomationRun.logs.map((log, i) => {
              let logClass = '';
              switch (log.LogLevel) {
                case LogLevel.warn:
                  logClass = 'text-warning';
                  break;
                case LogLevel.error:
                  logClass = 'text-danger';
                  break;
              }

              return (
                <div key={i} className={logClass}>
                  {log.message}
                </div>
              );
            })}
          </Well>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default connect<ConnectedProps, { dispatch }, {}>((state, ownprops) => {
  const { lastAutomationRun } = ensureAutomations().getCurrentState(state);

  return {
    lastAutomationRun,
  };
})(AutoLogView);
