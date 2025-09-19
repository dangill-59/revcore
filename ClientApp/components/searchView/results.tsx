import './highlights.less';

import * as React from 'react';
import * as _ from 'lodash';

import ensureSearch, { ISearchViewState } from './reducer';

import { Button } from 'react-bootstrap';
import CompactDocList from '../listDocuments/compactDocListView';
import DocListTableView from '../listDocuments/docListTableView';
import { DocumentModel } from 'ClientApp/generated/DocumentModel';
import { EditableDocument } from '../listDocuments/reducerHelper';
import { HotKeys } from 'react-hotkeys';
import { ProjectModel } from '../../generated/ProjectModel';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';
import { navigationKeyMap } from '../mainNav/reducer';
import { push } from 'react-router-redux';

type componentProps = {
  searchFormUrl: string;
  searchPagesUrl: string;
};

type ConnectedProps = ISearchViewState & {
  selectedProjectList?: ProjectModel[];
};

type ViewProps = ConnectedProps & componentProps & { dispatch };

class SearchResults extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    localStorage.removeItem('selectedSearchDocIds');
    localStorage.removeItem('selectedSearchDocIndexNames');
    localStorage.removeItem('selectedSearchDocIndexNamesSelected');

    dispatch(ensureSearch().initializeSettings())
      .then(() => dispatch(ensureSearch().resultsDocsList.initializeSettings()))
      .then(() => dispatch(ensureProjects().loadProjects()))
      .then(() => dispatch(ensureProjects().ensureSelectedProject()))
      .then(() => {
        if (this._ToSetFocus) {
          if (this._ToSetFocus.focus) this._ToSetFocus.focus();
          else console.error('focus() not found on _ToSetFocus');
        }
      })
      .then(() => {
        console.log('Scrolling to top');
        window.scrollTo(0, 0);
      });
  }

  _ToSetFocus: any = null;

  componentDidUpdate(prevProps) {
    const { searchRequest, dispatch } = this.props;
    if (prevProps.searchRequest != searchRequest) {
    }
  }

  render() {
    const {
      dispatch,
      searchFormUrl,
      selectedProjectList,
      searchPagesUrl,
      searchRequest,
      ocrHighLightsInDocListAsync,
    } = this.props;

    //console.log(`results render ${searchResultPageSize}, ${}`);

    return (
      <HotKeys
        className='container-fluid '
        style={{ paddingBottom: '2px' }}
        keyMap={navigationKeyMap}
        handlers={{
          backAction: () => dispatch(push(searchFormUrl)),
        }}
      >
        {selectedProjectList && (
          <span className='text-primary'>
            <i className='fa fa-briefcase text-primary' style={{ marginRight: 2 }} />
            {selectedProjectList.map((p) => p.name).join(', ')}
          </span>
        )}

        <div style={{ textAlign: 'right', float: 'right', paddingRight: 10 }}>
          <Button bsStyle='primary' bsSize='large' onClick={() => dispatch(push(searchFormUrl))}>
            Update search
          </Button>
        </div>

        <div style={{ clear: 'both', marginBottom: 5 }} />

        <div className='searchResults'>
          <DocListTableView
            focusabelRef={(ref) => (this._ToSetFocus = ref)}
            listDocsHelper={ensureSearch().resultsDocsList}
            listofPagesHelper={ensureSearch().docPagesList}
            onSortChange={(e, v) => dispatch(ensureSearch().updateSortField(e, v))}
            sortedColumn={searchRequest && searchRequest.sortBy}
            RowDetailsComponent={
              searchRequest &&
              searchRequest.fullTextOCRTerm &&
              ((props: { doc: EditableDocument }) => {
                const rowHighlights =
                  props &&
                  props.doc &&
                  ocrHighLightsInDocListAsync &&
                  ocrHighLightsInDocListAsync.result &&
                  ocrHighLightsInDocListAsync.result[props.doc.id];

                return rowHighlights ? (
                  <div className='ocrHighlights'>
                    {' '}
                    {rowHighlights.highlights &&
                      rowHighlights.highlights.map((t, i) => (
                        <span key={i} dangerouslySetInnerHTML={{ __html: t }} />
                      ))}{' '}
                  </div>
                ) : null;
              })
            }
            onImageClicked={(doc) => {
              dispatch(ensureSearch().resultsDocsList.setActiveDoc(doc));
              new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
                dispatch(push(`${searchPagesUrl}/${doc.id}`)),
              );
            }}
            onPagesNeeded={(page, pageSize) => {
              //console.log(`onPagesNeeded called page:${page}, pageSize:${pageSize}`);

              dispatch(ensureSearch().loadResults(page, pageSize)).then((dl: DocumentModel[]) => {
                if (dl && dl.length == 1) {
                  //if we push right now we get issues with doclist count so
                  setTimeout(() => dispatch(push(`${searchPagesUrl}/${dl[0].id}`)), 100);
                }
              });
            }}
          />
        </div>
      </HotKeys>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, componentProps>((state) => {
  const { selectedProjectList } = ensureProjects().getCurrentState(state);
  const searchState = ensureSearch().getCurrentState(state);

  return _.assign({}, searchState, {
    selectedProjectList,
  });
})(SearchResults);
