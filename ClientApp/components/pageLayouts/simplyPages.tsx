import * as React from 'react';
import * as _ from 'lodash';

import ensurePageLayouts, { IPageLayoutsettings, LayoutSelectorProps } from './reducer';

import { EditableDocument } from '../listDocuments/reducerHelper';
import { HotKeys } from 'react-hotkeys';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PageImageModel } from '../../generated/PageImageModel';
import PageListView from '../listPages';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureProjects from '../projects/reducer';
import { navigationKeyMap } from '../mainNav/reducer';
import { pageNav } from '../listPages/reducerHelper';

const DocsLoader = createLoaderView<EditableDocument[]>();

type ConnectedProps = {
  activeDocId?: string;
  docsAsync: IAsyncResult<EditableDocument[]>;
};

type ViewProps = ConnectedProps & LayoutSelectorProps & { dispatch };

class PagesView extends React.Component<ViewProps, {}> {
  render() {
    const {
      docsAsync,
      activeDocId,
      listDocsHelper,
      listPagesHelper,
      PageListTools,
      PageOverlayView,
      ActivePageToolBar,
      dispatch,
    } = this.props;

    if (!docsAsync) return null;

    return (
      <HotKeys
        keyMap={navigationKeyMap}
        handlers={{
          scrollToPrevPage: () => listPagesHelper.setActivePageDebouced(dispatch, pageNav.prev),
          scrollToNextPage: () => listPagesHelper.setActivePageDebouced(dispatch, pageNav.next),
          scrollToPrevDocument: () => dispatch(listDocsHelper.navigate(false)),
          scrollToNextDocument: () => dispatch(listDocsHelper.navigate(true)),
          selectAll: (e) => {
            e.preventDefault();
            return dispatch(listPagesHelper.selectAllPages());
          },
          deleteActivePage: () => dispatch(listPagesHelper.deleteActivepage()),
        }}
        style={{ outline: 'none' }}
      >
        <DocsLoader asyncResult={docsAsync} prompt='loading document'>
          {docsAsync.result && activeDocId && (
            <PageListView
              PageOverlayView={PageOverlayView}
              listofPagesHelper={listPagesHelper}
              ActivePageToolBar={ActivePageToolBar}
              imageListStyle={{ textAlign: 'center', marginTop: 18 }}
              ToolButtons={PageListTools}
              hasInfiniteScroll={true}
              defaultThumbsHeight={400}
            />
          )}
        </DocsLoader>
      </HotKeys>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, LayoutSelectorProps>((state, ownprops) => {
  const { listDocsHelper } = ownprops;
  const listDocsState = listDocsHelper && listDocsHelper.getmyState(state);

  let activeDoc = listDocsState && listDocsState.activeDoc;
  const docsAsync = listDocsState && listDocsState.docsAsync;

  return {
    activeDocId: activeDoc && activeDoc.id,
    docsAsync: docsAsync,
  };
})(PagesView);
