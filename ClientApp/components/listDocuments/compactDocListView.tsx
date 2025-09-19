import * as React from 'react';
import * as _ from 'lodash';

import { Button, Panel } from 'react-bootstrap';
import { EditableDocument, IListDocumentsState, ListDocsHelper } from './reducerHelper';
import ensureDocSettings, { IDocSettings } from './settings.reducer';

import DocPanel from './compactDocPanel';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
  listofPagesHelper: ListDocumentPagesHelper;
};

type ConnectedProps = IListDocumentsState & IDocSettings;

const DocsLoader = createLoaderView<EditableDocument[]>();

const DocCompactView: React.StatelessComponent<ComponentProps & ConnectedProps & { dispatch }> = ({
  dispatch,
  docsAsync,
  listofPagesHelper,
  listDocsHelper,
  compactViewHiddenFields,
  activeDoc,
}) => (
  <div className='docsCompact' tabIndex={0} onKeyUp={(e) => {}}>
    <ul>
      {docsAsync && (
        <DocsLoader asyncResult={docsAsync} prompt='loading documents'>
          {docsAsync.result &&
            docsAsync.result.map((doc, i) => {
              return (
                <li key={i}>
                  <Panel
                    bsStyle={doc === activeDoc ? 'primary' : 'success'}
                    onClick={() => dispatch(listDocsHelper.setActiveDoc(doc))}
                  >
                    <DocPanel
                      dispatch={dispatch}
                      listDocsHelper={listDocsHelper}
                      compactViewHiddenFields={compactViewHiddenFields}
                      {...doc}
                    />
                  </Panel>
                </li>
              );
            })}
        </DocsLoader>
      )}
    </ul>
  </div>
);

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  return _.assign(
    {},
    ownprops.listDocsHelper && ownprops.listDocsHelper.getmyState(state),
    ensureDocSettings().getCurrentState(state),
  );
})(DocCompactView);
