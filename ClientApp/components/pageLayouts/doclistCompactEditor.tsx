import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DocEditForm, { IndexOptionMenuItem } from '../listDocuments/docEditForm';
import { EditableDocument, ListDocsHelper } from '../listDocuments/reducerHelper';

import DocsCompact from '../listDocuments/compactDocListView';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import { PageImageModel } from '../../generated/PageImageModel';
import { ProjectModel } from '../../generated/ProjectModel';
import ProjectSelector from '../projects/select';
import SplitPane from 'react-split-pane';
import { connect } from 'react-redux';
import { createSaverView } from 'base/asyncLoader';
import ensurePageLayouts from './reducer';
import ensureProjects from '../projects/reducer';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
  listofPagesHelper: ListDocumentPagesHelper;

  //the buttons to show after the save button in the form
  ExtraSaveButtons?: any;

  //extra index buttons Used to show forms processing for now
  ExtraIndexButtons?: any;

  //the menu to show on side of indexes
  indexOptionsMenuItems?: IndexOptionMenuItem;
};

type ConnectedProps = {
  selectedProject: ProjectModel;
  docsAsync: IAsyncResult<EditableDocument[]>;
  saveStatusAsync: IAsyncResult<boolean>;
  activePage?: PageImageModel;
  activeDocId?: string;
  batchModeIndexFieldSize: number;
  activeDoc: EditableDocument;
};

const ProjectSaver = createSaverView<boolean>();

type ListProps = ComponentProps & ConnectedProps & { dispatch };

const DoclistCompact: React.StatelessComponent<ListProps> = ({
  dispatch,
  selectedProject,
  docsAsync,
  listDocsHelper,
  listofPagesHelper,
  ExtraSaveButtons,
  ExtraIndexButtons,
  activeDoc,
  batchModeIndexFieldSize,
  indexOptionsMenuItems,
  saveStatusAsync,
  activePage,
  activeDocId,
}) => {
  const changedCount =
    (docsAsync &&
      docsAsync.result &&
      _.filter(docsAsync.result, (d) => !d.id || d.isChanged).length) ||
    0;

  const selectedCount =
    (docsAsync &&
      docsAsync.result &&
      _.filter(docsAsync.result, (d) => !d.notSelected && (!d.id || d.isChanged)).length) ||
    0;

  const batchMode = changedCount > 1;

  return (
    <SplitPane
      defaultSize={batchMode ? batchModeIndexFieldSize || 100 : 1}
      primary='second'
      split='vertical'
      style={{ padding: 10 }}
      allowResize={!!batchMode}
      onChange={(size) => dispatch(ensurePageLayouts().updatebatchModeIndexFieldSize(size))}
    >
      <div
        style={{
          paddingRight: 5,
          overflow: 'auto',
          height: '100%',
        }}
      >
        <div>
          {ExtraIndexButtons && (
            <div style={{ float: 'right' }}>
              <ExtraIndexButtons />
            </div>
          )}

          {batchMode || activeDocId ? (
            selectedProject && (
              <h4 className='text-primary' style={{ textAlign: 'left', marginLeft: '10px' }}>
                <i className='fa fa-briefcase fa-2xtext-primary' style={{ marginRight: '5px' }}></i>
                {selectedProject.name}
              </h4>
            )
          ) : (
            <ProjectSelector />
          )}
          <div style={{ clear: 'both' }}></div>
        </div>

        {docsAsync && docsAsync.result && (
          <form
            style={{ marginTop: '10px' }}
            id='indexForm'
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(listDocsHelper.saveDocuments());
            }}
          >
            <DocEditForm
              listDocsHelper={listDocsHelper}
              indexOptionsMenuItems={indexOptionsMenuItems}
            />

            <ProjectSaver asyncResult={saveStatusAsync} prompt='Saving'>
              <div>
                <Button
                  type='submit'
                  bsStyle='primary'
                  bsSize='large'
                  style={{ margin: 5 }}
                  disabled={selectedCount == 0}
                >
                  Save {selectedCount > 1 && <span> {selectedCount} documents </span>}
                </Button>

                {ExtraSaveButtons && <ExtraSaveButtons dispatch={dispatch} {...activePage} />}
              </div>
            </ProjectSaver>
          </form>
        )}
        {activeDoc && activeDocId && (
          <div style={{ position: 'absolute', bottom: 4, fontSize: 8 }}>
            <i>Created at: {moment(activeDoc.created).format('lll')} </i>
          </div>
        )}
        {/*
                    
                                FormsRunStatusAsync.error && <small className="text-danger">{(FormsRunStatusAsync.error || {}).toString()}</small>


                                <Indexes documentId={newDocument.docId} listName="newDocuments"
                                indexOptionsMenuItems={IndexFieldDecorations}
                                submitStyle={batchMode ? (hasPageSelection ? 'success' : 'disabled') : 'primary'}
                                onCommit={(batchMode || hasPageSelection) ? () => dispatch(newDocumentActions.NewDocAdded()) : null}
                                submitPrompt="Create"
                            />
                            */}
      </div>

      <div style={{ overflow: 'auto', height: '100%' }}>
        {batchMode && (
          <div style={{ paddingLeft: 5, marginRight: 8 }}>
            <DocsCompact listDocsHelper={listDocsHelper} listofPagesHelper={listofPagesHelper} />
          </div>
        )}
      </div>
    </SplitPane>
  );
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { docsAsync, saveStatusAsync, activeDoc } =
    ownprops.listDocsHelper && ownprops.listDocsHelper.getmyState(state);
  const { activePage } = ownprops.listofPagesHelper && ownprops.listofPagesHelper.getmyState(state);

  const { projectListAsync, selectedProject } = ensureProjects().getCurrentState(state);
  let currProject = selectedProject;

  if (
    activeDoc &&
    selectedProject &&
    activeDoc.id &&
    activeDoc.projectId &&
    activeDoc.projectId != selectedProject.id
  ) {
    currProject = null;

    if (projectListAsync && projectListAsync.result) {
      currProject = projectListAsync.result[activeDoc.projectId];
    }
  }

  const { batchModeIndexFieldSize } = ensurePageLayouts().getCurrentState(state);

  return {
    selectedProject: currProject,
    docsAsync,
    saveStatusAsync,
    activePage,
    activeDocId: activeDoc && activeDoc.id,
    projectListAsync,
    batchModeIndexFieldSize,
    activeDoc,
  };
})(DoclistCompact);
