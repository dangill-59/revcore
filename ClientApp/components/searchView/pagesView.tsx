import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import ensureAnnotations, { AnnoTools } from '../annotations/reducer';
import ensureSearch, { ISearchViewState } from './reducer';

import { Badge } from 'react-bootstrap';
import { EditableDocument } from '../listDocuments/reducerHelper';
import FullTExtView from './fullTextResultView';
import { HotKeys } from 'react-hotkeys';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import PagesLayout from '../pageLayouts';
import PagesViewToolBox from './pagesViewToolBox';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';
import { navigationKeyMap } from '../mainNav/reducer';
import { push } from 'react-router-redux';

type ComponentProps = RouteComponentProps<{ id: string }> & {};

type ConnectedProps = {
  activeDoc: EditableDocument;
  docsAsync: IAsyncResult<EditableDocument[]>;
  showIndexes: boolean;

  readonly showOcrTextforPageId: string;

  //if TRUE then full text OCR results are NOT Shown
  hideFullTextResults: boolean;
};

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

class PagesView extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch, activeDoc, docsAsync } = this.props;

    dispatch(ensureSearch().initializeSettings())
      .then(() => dispatch(ensureProjects().loadProjects()))
      .then(() => dispatch(ensureProjects().ensureSelectedProject()))
      .then(() => {
        this.ensureCurrentDoc();
      });

    if (activeDoc) {
      dispatch(ensureSearch().ensuretextMatchInPages(activeDoc));
    }
  }

  componentWillReceiveProps(nextProps: ViewProps) {
    const { dispatch, activeDoc } = this.props;

    const currentActiveId = activeDoc && activeDoc.id;
    const nextActiveId = nextProps.activeDoc && nextProps.activeDoc.id;

    if (currentActiveId != nextActiveId) {
      dispatch(ensureSearch().ensuretextMatchInPages(nextProps.activeDoc));
    }
  }

  ensureCurrentDoc() {
    const { dispatch, activeDoc, match } = this.props;

    const activeDocId = activeDoc && activeDoc.id;

    if (match.params && activeDocId != match.params.id) {
      console.log('doc not found in current results: adding');
      dispatch(ensureSearch().loadDocument(match.params.id));
    }
  }

  render() {
    const { showIndexes, dispatch, activeDoc, hideFullTextResults, showOcrTextforPageId } =
      this.props;

    let pageOverlay: React.ComponentType<any> = null;

    if (activeDoc && !hideFullTextResults) {
      if (!!showOcrTextforPageId) {
        pageOverlay = FullTExtView;
      } else if (activeDoc.ocrTextPagesSearchTerm) {
        pageOverlay = FullTExtView;
      }
    }

    return (
      <HotKeys
        keyMap={navigationKeyMap}
        handlers={{
          backAction: () => dispatch(push('/search/list')),
          scrollToPrevDocument: () => dispatch(ensureSearch().resultsDocsList.navigate(false)),
          scrollToNextDocument: () => dispatch(ensureSearch().resultsDocsList.navigate(true)),
        }}
      >
        <PagesLayout
          layoutName={showIndexes ? 'indexandpages' : 'simplypages'}
          PageOverlayView={pageOverlay}
          ActivePageToolBar={({ index }) => <Badge className='activePageBadge'>{index + 1}</Badge>}
          PageListTools={() => <PagesViewToolBox />}
          listDocsHelper={ensureSearch().resultsDocsList}
          listPagesHelper={ensureSearch().docPagesList}
        />
      </HotKeys>
    );
  }
}

export default withRouter(
  connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
    const { resultsListState, showIndexes, showOcrTextforPageId } =
      ensureSearch().getCurrentState(state);
    let activeDoc = resultsListState && resultsListState.activeDoc;

    const docsAsync = resultsListState && resultsListState.docsAsync;

    const annoState = ensureAnnotations().getCurrentState(state);

    return {
      showOcrTextforPageId,
      activeDoc,
      docsAsync: docsAsync,
      showIndexes: showIndexes,
      hideFullTextResults: annoState && AnnoTools.showOriginal == annoState.selectedTool,
    };
  })(PagesView),
);
