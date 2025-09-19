import * as React from 'react';
import * as _ from 'lodash';

import { Button, OverlayTrigger, Tooltip, Well } from 'react-bootstrap';
import ensureWorkspace, { MessageList } from './reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const MessagesLoader = createLoaderView<{ [key: string]: MessageList }>();

type ConnectedProps = {
  readonly globalMessagesAsync?: IAsyncResult<{ [key: string]: MessageList }>;
};

class MessagesView extends React.PureComponent<ConnectedProps & { dispatch }, {}> {
  render() {
    const { dispatch, globalMessagesAsync } = this.props;

    return globalMessagesAsync ? (
      <MessagesLoader asyncResult={globalMessagesAsync} prompt='Loading messages'>
        {globalMessagesAsync.result &&
          _.keys(globalMessagesAsync.result).map((mtype) => (
            <div key={mtype}>
              {_.keys(globalMessagesAsync.result[mtype]).map((mid) =>
                globalMessagesAsync.result[mtype][mid].isVisible ? (
                  <Well key={mid} style={{ padding: 0, margin: 10, textAlign: 'center' }}>
                    <div className={`bg-${mtype} text-${mtype}`} style={{ position: 'relative' }}>
                      {globalMessagesAsync.result[mtype][mid].details}

                      <Button
                        bsStyle='link'
                        style={{ position: 'absolute', right: -10, top: -11 }}
                        onClick={() => dispatch(ensureWorkspace().showMessage(mtype, mid, true))}
                      >
                        <OverlayTrigger
                          placement='left'
                          overlay={<Tooltip id='closewarntooltip'>!!! GOT IT</Tooltip>}
                        >
                          <i className='fa fa-times text-danger' aria-hidden='true'></i>
                        </OverlayTrigger>
                      </Button>
                    </div>
                  </Well>
                ) : null,
              )}
            </div>
          ))}
      </MessagesLoader>
    ) : null;
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { globalMessagesAsync } = ensureWorkspace().getCurrentState(state);

  return { globalMessagesAsync };
})(MessagesView);
