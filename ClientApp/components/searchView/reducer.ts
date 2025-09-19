import * as _ from 'lodash';

import {
  EditableDocument,
  IListDocumentsState,
  ListDocsHelper,
} from '../listDocuments/reducerHelper';
import { IListPagesState, ListDocumentPagesHelper, pageNav } from '../listPages/reducerHelper';
import { checkFetchError, getResponce, getResponceString } from 'base/asyncLoader';
import { handleAction, handleActions } from 'redux-actions';

import { FullTextHighLightsReqModel } from '../../generated/FullTextHighLightsReqModel';
import { HighLightsInDocumentsModel } from '../../generated/HighLightsInDocumentsModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PageImageModel } from '../../generated/PageImageModel';
import ReducerBase from 'base/baseReducer';
import { SavedSearchModel } from '../../generated/SavedSearchModel';
import { SearchReqSortModel } from '../../generated/SearchReqSortModel';
import { SearchRequestModel } from '../../generated/SearchRequestModel';
import { SearchResultsModel } from '../../generated/SearchResultsModel';
import { TextinPagesRequestModel } from '../../generated/TextinPagesRequestModel';
import { TextinPagesResponceModel } from '../../generated/TextinPagesResponceModel';
import { WorkFlowConfigModel } from '../../generated/WorkFlowConfigModel';
import ensureProjects from '../projects/reducer';
import ensureWorkSpace from '../workspace/reducer';

export type TextinPagesProps = {
  docId: string;
  pageMap: { [pageId: string]: TextinPagesResponceModel[] };

  //if present this contains an ordered list of pageIds that has the macthing OCR term
  pageIdsWithOCRText: string[];
};

export interface ISearchViewState {
  readonly searchRequest?: SearchRequestModel;

  readonly resultsListState: IListDocumentsState;
  readonly docPageListState: IListPagesState;

  //show indexes while displaying ONE document
  readonly showIndexes: boolean;

  //Stores that text in Pages for a perticular doc Id
  readonly textInPagesAsync: IAsyncResult<TextinPagesProps>;

  readonly savedSearchesAsync: IAsyncResult<SavedSearchModel[]>;

  //my ui trigerredWorkflows
  readonly uiWorkflowsAsync: IAsyncResult<WorkFlowConfigModel[]>;

  readonly showOcrTextforPageId: string;

  //contains OCR hightlighst for search results
  readonly ocrHighLightsInDocListAsync: IAsyncResult<{
    [docId: string]: HighLightsInDocumentsModel;
  }>;
}

type myActions = {
  resultsDocumentActions;
  docPageListActions;

  loadTextinPages: (loadPromise: PromiseLike<TextinPagesProps>) => PromiseLike<TextinPagesProps>;

  loadSavedSearches: (
    loadPromise: PromiseLike<SavedSearchModel[]>,
  ) => PromiseLike<SavedSearchModel[]>;
  loadUiWorkflows: (
    loadPromise: PromiseLike<WorkFlowConfigModel[]>,
  ) => PromiseLike<WorkFlowConfigModel[]>;

  updateIndexesVisible: (value: boolean) => boolean;

  updateSelectedProjects: (value: string[]) => string[];

  updatefullTextTerm: (value?: string) => string;

  updateFieldValue: (
    fieldName: string,
    value?: string,
    valueIndex?: number,
  ) => { fieldName: string; value?: string; valueIndex?: number };

  updateEntireSearch: (value?: { [key: string]: string[] }) => { [key: string]: string[] };

  updateSortField: (
    displayName: string,
    value?: SearchReqSortModel,
  ) => { displayName: string; value?: SearchReqSortModel };

  setshowOcrTextforPageId: (pageId?: string) => string;

  setOcrHighLightsInDocList: (
    loadPromise: PromiseLike<{ [docId: string]: HighLightsInDocumentsModel }>,
  ) => PromiseLike<{ [docId: string]: HighLightsInDocumentsModel }>;
};

class searchReducer extends ReducerBase<ISearchViewState, myActions> {
  readonly resultsDocsList = new ListDocsHelper(
    () => [this.getMyNameinStore(), 'resultsListState'],
    {
      restURL: '/api/document',
    },
  );

  readonly docPagesList = new ListDocumentPagesHelper(
    () => [this.getMyNameinStore(), 'docPageListState'],
    this.resultsDocsList,
    {
      allowDelete: true,
      getNextNavigatablePage: this.getNextNavigatablePage.bind(this),
    },
  );

  createActionList() {
    return {
      docPageListActions: this.docPagesList.createActionList(),
      resultsDocumentActions: this.resultsDocsList.createActionList(),
      updateSelectedProjects: (value: string[]) => value,
      updatefullTextTerm: (value?: string) => value,
      updateIndexesVisible: (value: boolean) => value,

      updateSavedSearches: (savedSearches: SavedSearchModel[]) => savedSearches,
      loadTextinPages: [
        (loadPromise: PromiseLike<TextinPagesProps>) => loadPromise,
        () => ({ Async: true }),
      ],

      loadSavedSearches: [
        (loadPromise: PromiseLike<SavedSearchModel[]>) => loadPromise,
        () => ({ Async: true }),
      ],

      loadUiWorkflows: [
        (loadPromise: PromiseLike<WorkFlowConfigModel[]>) => loadPromise,
        () => ({ Async: true }),
      ],

      setOcrHighLightsInDocList: [
        (loadPromise: PromiseLike<{ [docId: string]: HighLightsInDocumentsModel }>) => loadPromise,
        () => ({ Async: true }),
      ],

      updateFieldValue: (fieldName: string, value?: string, valueIndex?: number) => ({
        fieldName,
        value,
        valueIndex,
      }),

      updateEntireSearch: (value?: { [key: string]: string[] }) => value,

      updateSortField: (displayName: string, value?: SearchReqSortModel) => ({
        displayName,
        value,
      }),

      setshowOcrTextforPageId: (pageId?: string) => pageId,
    };
  }

  private cloneSearchReq(state) {
    const searchReq = _.clone(state || {}) as SearchRequestModel;
    if (null == searchReq.sortBy) {
      searchReq.sortBy = this.getPersistedData('searchSortsBy') || {};
    }
    return searchReq;
  }

  reducers() {
    let searchRequestHandlers = {};

    searchRequestHandlers[this._myActions.updateSortField.toString()] = (state, action) => {
      const newState = this.cloneSearchReq(state || {}) as SearchRequestModel;

      const payload = action.payload as { displayName: string; value?: SearchReqSortModel };

      if (!action.payload) {
        //we must be just initializing
        return state;
      }

      if (!newState.sortBy) newState.sortBy = {};

      if (!!payload.value) newState.sortBy[payload.displayName] = payload.value;
      else delete newState.sortBy[payload.displayName];

      this.persistData('searchSortsBy', newState.sortBy);

      return newState;
    };

    searchRequestHandlers[this._myActions.updatefullTextTerm.toString()] = (state, action) => {
      const newState = this.cloneSearchReq(state);
      newState.fullTextOCRTerm = action.payload;
      return newState;
    };

    searchRequestHandlers[this._myActions.updateSelectedProjects.toString()] = (state, action) => {
      const newState = this.cloneSearchReq(state);
      newState.selectedProjects = action.payload;
      return newState;
    };

    searchRequestHandlers[this._myActions.updateEntireSearch.toString()] = (state, action) => {
      const currState = _.clone((state || {}) as SearchRequestModel);
      const payload = action.payload as { [key: string]: string[] };
      currState.fields = payload || {};
      currState.fullTextOCRTerm = null;

      return currState;
    };

    searchRequestHandlers[this._myActions.updateFieldValue.toString()] = (state, action) => {
      const payload = action.payload as { fieldName: string; value?: string; valueIndex?: number };
      const currState = this.cloneSearchReq(state);

      const fields = _.clone(currState.fields || {});

      let newValue = [payload.value];
      if (typeof payload.valueIndex !== 'undefined') {
        newValue = fields[payload.fieldName] || [];

        newValue[payload.valueIndex] = payload.value;
      }

      fields[payload.fieldName] = newValue;

      currState.fields = fields;

      return currState;
    };

    const me = this;
    return {
      searchRequest: handleActions(searchRequestHandlers, null),
      docPageListState: this.docPagesList.getReducers(this._myActions.docPageListActions),
      resultsListState: this.resultsDocsList.getReducers(this._myActions.resultsDocumentActions),

      savedSearchesAsync: handleAction(
        this._myActions.loadSavedSearches,
        (state, action) => action.payload,
        null,
      ),
      uiWorkflowsAsync: handleAction(
        this._myActions.loadUiWorkflows,
        (state, action) => action.payload,
        null,
      ),

      ocrHighLightsInDocListAsync: handleAction(
        this._myActions.setOcrHighLightsInDocList,
        (state, action) => action.payload,
        null,
      ),

      textInPagesAsync: handleAction(
        this._myActions.loadTextinPages,
        (state, action) => action.payload,
        null,
      ),

      showOcrTextforPageId: handleAction(
        this._myActions.setshowOcrTextforPageId,
        (state, action) => action.payload,
        false,
      ),

      showIndexes: handleAction(
        this._myActions.updateIndexesVisible,
        (state, action) => {
          me.persistData('showIndexes', action.payload);
          return action.payload;
        },
        null,
      ),
    };
  }

  updateIndexesVisible = (value: boolean) => this._myActions.updateIndexesVisible(value);

  initializeSettings() {
    return (dispatch, getState) => {
      dispatch(this.updateIndexesVisible(!!this.getPersistedData('showIndexes')));

      //loads it from localstorage
      dispatch(this.updateSortField(null));

      /*
            //{field_displayname : pinned_value}}
            used to pin an index value ex: http://localhost:56395/search/form?pinIndex[category]=lion
            */

      const { creationObject } = ensureWorkSpace().getCurrentState(getState());
      const pinIndexes: { [key: string]: string } = creationObject && creationObject.pinIndexes;

      if (pinIndexes) {
        _.each(_.keys(pinIndexes), (k) => {
          const indexVal = pinIndexes[k];
          if (indexVal && Array.isArray(indexVal)) {
            for (let i = 0; i < indexVal.length; i++) {
              dispatch(this.updateFieldValue(k, indexVal[i], i));
            }
          } else {
            dispatch(this.updateFieldValue(k, indexVal));
          }
        });
      }

      return Promise.resolve();
    };
  }

  loadTasks() {
    return (dispatch, getState) => {
      dispatch(
        this._myActions.loadUiWorkflows(
          (async () => {
            //let it cycle thru so that rest of UI can load
            await new Promise((r) => setTimeout(r, 100));
            const response = await getResponce<WorkFlowConfigModel[]>(fetch('/api/workflow/list'));
            return response;
          })(),
        ),
      );

      dispatch(
        this._myActions.loadSavedSearches(
          (async () => {
            await new Promise((r) => setTimeout(r, 100));
            const response = await getResponce<SavedSearchModel[]>(fetch('/api/savedsearches'));
            return response;
          })(),
        ),
      );
    };
  }

  prepareSavedSearch(req: SavedSearchModel) {
    return (dispatch, getState) => {
      dispatch(this.updateSelectedProjects(req.searchReq.selectedProjects));
      dispatch(this.updateEntireSearch(req.searchReq.fields));
    };
  }

  runWorkflow(workflowName: string) {
    return async (dispatch, getState) => {
      const currenState = JSON.stringify(getState());

      const response = await getResponceString(
        fetch(`/api/workflow/run/${encodeURIComponent(workflowName)}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(currenState),
        }),
      );
    };
  }

  //add this document to the current search result
  loadDocument(docId: string) {
    return (dispatch, getState) => {
      const { resultsListState } = this.getCurrentState(getState());
      if (resultsListState.docsAsync && resultsListState.docsAsync.isLoading)
        throw 'results are loading. not a right time to load another document';

      const currentDocs =
        (resultsListState && resultsListState.docsAsync && resultsListState.docsAsync.result) || [];

      const loadPromise = fetch(`/api/search/${docId}`)
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<EditableDocument>)
        .then((response) => _.concat(currentDocs, [response]));
      return dispatch(this.resultsDocsList.initialize(loadPromise))
        .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
        .then(() => dispatch(this.resultsDocsList.setActiveDoc(docId)));
    };
  }

  private _curentLoadResultReq: {
    searchString?: string;
    fetchUrl?: string;
    promise?: PromiseLike<EditableDocument[]>;
    failed?: any;
  } = {};

  searchExecuted() {
    return (dispatch, getState) => {
      //not much to do but reset cache
      this._curentLoadResultReq = {};
    };
  }

  ToggleOcrText(pageId: string) {
    return (dispatch, getState) => {
      const { textInPagesAsync, showOcrTextforPageId } = this.getCurrentState(getState());

      if (showOcrTextforPageId == pageId) {
        dispatch(this._myActions.setshowOcrTextforPageId(null));
        return;
      }

      if (textInPagesAsync && textInPagesAsync.isLoading) {
        console.warn('textInPages loading');
        return;
      }

      dispatch(this._myActions.setshowOcrTextforPageId(pageId));

      //we want to make sure we load all not just for the doc

      if (
        textInPagesAsync &&
        textInPagesAsync.result &&
        !textInPagesAsync.result.docId &&
        textInPagesAsync.result.pageMap &&
        textInPagesAsync.result.pageMap[pageId]
      ) {
        console.log('already has data');
        return;
      }

      dispatch(
        this._myActions.loadTextinPages(
          (async () => {
            //await new Promise(r => setTimeout(r, 1000));

            const pageMap: { [pageId: string]: TextinPagesResponceModel[] } = {};

            pageMap[pageId] = await getResponce<TextinPagesResponceModel[]>(
              fetch(`/api/pages/ocrText/${encodeURIComponent(pageId)}`),
            );

            const ret: TextinPagesProps = {
              docId: null,
              pageMap,
              pageIdsWithOCRText: [pageId],
            };
            return ret;
          })(),
        ),
      );
    };
  }

  ensuretextMatchInPages(doc: EditableDocument) {
    return async (dispatch, getState) => {
      if (!doc || !doc.ocrTextPagesSearchTerm) return;

      const req: TextinPagesRequestModel = {
        docId: doc.id,
        ocrTextTerm: doc.ocrTextPagesSearchTerm,
      };

      const loadPromise = fetch('/api/search/textinpages', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      })
        .then((response) => checkFetchError(response))
        .then(
          (response) =>
            response.json() as Promise<{ [pageId: string]: TextinPagesResponceModel[] }>,
        )
        .then((pageMap) => {
          const pageIdsWithOCR = _.keys(pageMap || {});
          const orderedpagesWithOCR = _.filter(doc.pages || [], (p) =>
            _.includes(pageIdsWithOCR, p.id),
          );

          const ret: TextinPagesProps = {
            docId: doc.id,
            pageMap,
            pageIdsWithOCRText: _.map(orderedpagesWithOCR, (p) => p.id),
          };
          return ret;
        });

      dispatch(this._myActions.loadTextinPages(loadPromise));

      const textInPages = await loadPromise;

      console.debug('text in pages loaded');

      if (!(textInPages && textInPages.pageIdsWithOCRText)) {
        return;
      }

      //let UI load
      await new Promise((r) => setTimeout(r, 100));

      if (textInPages.pageIdsWithOCRText.length > 0) {
        dispatch(this.docPagesList.setActivePage(textInPages.pageIdsWithOCRText[0]));
      }
    };
  }

  getNextNavigatablePage(getState: any, activePage: PageImageModel, navDir: pageNav) {
    const { textInPagesAsync } = this.getCurrentState(getState());

    if (!activePage) return undefined;

    if (
      !(textInPagesAsync && textInPagesAsync.result && textInPagesAsync.result.pageIdsWithOCRText)
    ) {
      return undefined;
    }

    const pagesArray = textInPagesAsync.result.pageIdsWithOCRText;

    let currentIndex = _.findIndex(pagesArray, (p) => p == activePage.id);
    if (navDir == pageNav.next) {
      if (++currentIndex < textInPagesAsync.result.pageIdsWithOCRText.length)
        return pagesArray[currentIndex];
      else return pagesArray[0];
    } else {
      //navDir == pageNav.prev

      if (currentIndex > 0) return pagesArray[currentIndex - 1];
      else return pagesArray[pagesArray.length - 1];
    }
  }

  //page is 0 based
  loadResults(page: number, pageSize: number) {
    return (dispatch, getState) => {
      //we need to delay loading pages so that counts and all can stabilize
      //as we might be wanting to load pages just after  is trying to set

      const _mine = this;

      return new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
        const { searchRequest } = this.getCurrentState(getState());

        pageSize = pageSize || 10;
        page = page || 0;

        let selectedProjects = (searchRequest && searchRequest.selectedProjects) || [];
        if (selectedProjects.length == 0) {
          const { selectedProjectList } = ensureProjects().getCurrentState(getState());
          if (!selectedProjectList || selectedProjectList.length == 0)
            throw 'no project selected for search';

          selectedProjects = _.map(selectedProjectList, (p) => p.id);
        }

        const searchString = JSON.stringify(
          _.assign({}, searchRequest, { selectedProjects: selectedProjects }),
        );
        if (0 != page && searchString != _mine._curentLoadResultReq.searchString) {
          dispatch(_mine.resultsDocsList.updatepaginationCurrentPage(0));
          page = 0;
        }

        const fetchURL = `/api/search?page=${page}&pagesize=${pageSize}`;

        if (
          searchString == _mine._curentLoadResultReq.searchString &&
          fetchURL == _mine._curentLoadResultReq.fetchUrl &&
          _mine._curentLoadResultReq.promise &&
          !_mine._curentLoadResultReq.failed
        ) {
          return _mine._curentLoadResultReq.promise;
        }

        _mine._curentLoadResultReq = {
          fetchUrl: fetchURL,
          searchString: searchString,
        };

        _mine._curentLoadResultReq.promise = fetch(fetchURL, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: searchString,
        })
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as Promise<SearchResultsModel>)
          .then((response) => {
            dispatch(_mine.resultsDocsList.updateTotalDocsInAllPages(response.totalCount));

            if (searchRequest && searchRequest.fullTextOCRTerm) {
              //lets load the dockList high lights as well

              const highlightsReq: FullTextHighLightsReqModel = {
                docIds: _.map(response.documents, (d) => d.id),
                fullTextTerm: searchRequest.fullTextOCRTerm,
              };

              dispatch(
                this._myActions.setOcrHighLightsInDocList(
                  (async () => {
                    //let it cycle thru so that rest of UI can load
                    await new Promise((r) => setTimeout(r, 100));
                    const response = await getResponce<{
                      [docId: string]: HighLightsInDocumentsModel;
                    }>(
                      fetch('/api/search/textinDocList', {
                        method: 'post',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(highlightsReq),
                      }),
                    );
                    return response;
                  })(),
                ),
              );
            } else {
              dispatch(this._myActions.setOcrHighLightsInDocList(Promise.resolve({})));
            }

            //here we have obtained the serach  result document list
            //we add the OCR term to each so that we can high light them in the results page
            return _.map(response.documents, (d) => {
              const ed: EditableDocument = d;
              ed.ocrTextPagesSearchTerm = searchRequest && searchRequest.fullTextOCRTerm;
              return ed;
            });
          })
          .catch((err) => {
            //we also want to mark this promise as rejected
            if (_mine._curentLoadResultReq && err == 'Unauthorized')
              _mine._curentLoadResultReq.failed = err;

            throw err;
          });

        dispatch(_mine.resultsDocsList.initialize(_mine._curentLoadResultReq.promise))
          .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
          .then(() => dispatch(_mine.resultsDocsList.ensureActiveDoc(true)));

        return _mine._curentLoadResultReq.promise;
      });
    };
  }

  updateSelectedProjects = (value: string[]) => this._myActions.updateSelectedProjects(value);
  updatefullTextTerm = (value?: string) => this._myActions.updatefullTextTerm(value);

  //valueIndex is 0 and 1 for range search and 0 for everything else
  updateFieldValue = (fieldName: string, value?: string, valueIndex?: number) =>
    this._myActions.updateFieldValue(fieldName, value, valueIndex);

  updateEntireSearch = (value?: { [key: string]: string[] }) =>
    this._myActions.updateEntireSearch(value);

  updateSortField = (displayName: string, value?: SearchReqSortModel) =>
    this._myActions.updateSortField(displayName, value);
}

export default () => searchReducer.getInstance(searchReducer, 'searchView');
