import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';

import * as CodeMirror from 'react-codemirror';
import * as React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { EditableDocument } from '../listDocuments/reducerHelper';
import { ListDocsHelper } from '../listDocuments/reducerHelper';
import ReactJson from 'react-json-view';
import SplitPane from 'react-split-pane';
import { connect } from 'react-redux';
import ensureAutomations from './reducer';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
};

type ConnectedProps = {
  docList: EditableDocument[];
  scriptCode: string;
};

class ScriptEditor extends React.PureComponent<ComponentProps & ConnectedProps & { dispatch }, {}> {
  render() {
    const { scriptCode, docList, dispatch } = this.props;

    return (
      <div style={{ textAlign: 'left', height: 500 }} className='scriptEditor'>
        <SplitPane defaultSize='75%' pane2Style={{ overflow: 'auto' }}>
          <div
            style={{
              paddingTop: 10,
              height: '100%',
            }}
          >
            <CodeMirror
              value={scriptCode || '#Automated script'}
              onChange={(newCode) =>
                dispatch(ensureAutomations().updateAutomationProp(null, 'scriptCode', newCode))
              }
              options={{
                mode: 'python',
                lineNumbers: true,
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: 'white',
              height: '100%',
            }}
          >
            <h4 className='text-center color-orange'>
              <OverlayTrigger
                placement='bottom'
                overlay={
                  <Tooltip id='schematooltip'>Displays the current scriptInput Object</Tooltip>
                }
              >
                <span>
                  scriptInput <small className='text-muted'> :object</small>
                </span>
              </OverlayTrigger>
            </h4>

            <div>
              <ReactJson
                src={docList}
                displayDataTypes={false}
                displayObjectSize={false}
                enableClipboard={false}
                collapsed={2}
              />
            </div>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { currentlyEditing } = ensureAutomations().getCurrentState(state);

  const { docsAsync } = ownprops.listDocsHelper.getmyState(state);

  return {
    scriptCode: (currentlyEditing && currentlyEditing.scriptCode) || '',
    docList: (docsAsync && docsAsync.result) || [],
  };
})(ScriptEditor);
