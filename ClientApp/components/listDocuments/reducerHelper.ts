import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { DiagnosticCategory } from 'typescript';
import { DocumentModel } from '../../generated/DocumentModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PageHolderModel } from '../../generated/PageHolderModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import { UpdateDocResultModel } from '../../generated/UpdateDocResultModel';
import { checkFetchError } from 'base/asyncLoader';
import ensureCarts from '../carts/reducer';
import ensureConfirmBox from '../confirmation/reducer';
import ensurePageLayouts from '../pageLayouts/reducer';
import ensurePrintApp from '../printApp/reducer';
import ensureProjects from '../projects/reducer';
import ensureWaitBox from '../waitBox/reducer';
import ensureWorkSpace from '../workspace/reducer';
import { getAuthTokens } from '../external/auth';
import { reduce } from 'lodash';
import { reducerHelperBase } from 'base/baseReducer';

export type FieldValidation = {
  validationState?: 'success' | 'warning' | 'error';
  help: string;
};

///This persist thru out the app hence not a member
//is used to Number new documents so that can be found
let _TotalNewDocsCreated = 0;

export interface IPageHolderEditProps {
  isSelected?: boolean;
  fieldValidations?: { [key: string]: FieldValidation };

  //has indexes changed
  isChanged?: boolean;

  //we are using not selected so that by default the doc is always selected unless
  //we specifically deselect it
  notSelected?: boolean;

  //new documents donot have id, so we use this to identify them for operations
  newdocId?: string;
}

export type EditablePageHolder = IPageHolderEditProps & PageHolderModel;

export interface IListPageHoldersState<T extends EditablePageHolder> {
  //list of all document that this holder has
  readonly docsAsync: IAsyncResult<T[]>;

  readonly activeDoc?: T;

  readonly saveStatusAsync: IAsyncResult<boolean>;

  //used for pagination
  readonly paginationNumberofRows: number;
  readonly totalDocsInAllPages?: number;
  readonly paginationCurrentPage: number;

  //Keeps track of the ;ast field that was updated in UI
  //we use it to set focus back on the field that was indexed if doc was changed or something
  readonly lastFieldUpdatedName?: string;

  ///used for operations on multiple dcoments. This may or may not include activeDoc
  readonly selectedDocIds?: string[];
  readonly multiIndexerVisible?: boolean;
  readonly isCkecked?: { [key: string]: boolean };
  readonly isSelectAll?: boolean;
}

export type PageHolderActions<T extends EditablePageHolder> = {
  loadDocs: (loadPromise: PromiseLike<T[]>) => T[];
  updateDocAtIndex: (index: number, value: T) => T[];
  setActiveDoc: (value?: T) => void;
  updateSaveStatus: (savePromise: PromiseLike<boolean>) => void;

  updatePaginationNumberofRows: (value: number) => number;
  updateTotalDocsInAllPages: (value: number) => number;
  updatepaginationCurrentPage: (value: number) => number;

  setLastFieldUpdated: (displayName: string) => string;

  setSelectedDocIds: (docIds?: string[]) => string[];
  showMultiIndexer: (value: boolean) => boolean;
  setIsCkecked: (value?: { [key: string]: boolean }) => { [key: string]: boolean };
  setIsSelectAll: (value?: boolean) => boolean;
};

type DocListOptions = {
  restURL?: string; //the URL for get, post, delete opertaions

  //used to save docList in localstore
  persistanceKey?: string;
};

export class ListPageHoldersHelper<T extends EditablePageHolder> extends reducerHelperBase<
  IListPageHoldersState<T>,
  PageHolderActions<T>
> {
  protected readonly _options: DocListOptions;
  constructor(storeKeys: () => string[], options?: DocListOptions) {
    super(storeKeys);
    this._options = options || {};
  }

  createActionList() {
    return {
      loadDocs: [
        (loadPromise: PromiseLike<T[]>) => loadPromise,
        (loadPromise: PromiseLike<T[]>) => ({ Async: !!loadPromise }),
      ],

      updateDocAtIndex: (index: number, value: T) => ({ index, value }),

      setActiveDoc: (value?: T) => value,
      updateSaveStatus: [
        (savePromise: PromiseLike<boolean>) => savePromise,
        (_) => ({ Async: true }),
      ],
      updatePaginationNumberofRows: (value: number) => value,
      updateTotalDocsInAllPages: (value: number) => value,
      updatepaginationCurrentPage: (value: number) => value,

      setLastFieldUpdated: (displayName: string) => displayName,

      setSelectedDocIds: (ids?: string[]) => ids,
      showMultiIndexer: (value: boolean) => value,
      setIsCkecked: (value?: { [key: string]: boolean }) => value,
      setIsSelectAll: (value?: boolean) => value,
    };
  }

  protected getInitialvalue() {
    if (!this._options.persistanceKey) return null;
    const ret = (this.getPersistedData(this._options.persistanceKey) || null) as IAsyncResult<T[]>;

    //if we don't have any documents saved, return null so that things can initialize
    if (!ret || !ret.result || ret.result.length <= 1) return null;

    return ret;
  }

  protected persistDocList(value) {
    if (!this._options.persistanceKey) return value;

    this.persistData(this._options.persistanceKey, value);

    return value;
  }

  protected reducers() {
    const _mine = this;

    let docListHandlers = {};

    docListHandlers[this._myActions.loadDocs.toString()] = (state, action) => {
      return this.persistDocList(action.payload || null);
    };

    docListHandlers[this._myActions.updateDocAtIndex.toString()] = (state, action) => {
      var currentDocListAsync = state as IAsyncResult<T[]>;

      var payload = action.payload as { index: number; value: T };

      if (
        payload &&
        typeof payload.index !== 'undefined' &&
        payload.value &&
        currentDocListAsync &&
        currentDocListAsync.result
      ) {
        /*if (!payload.value.isChanged) {
                    //dee: 4/22/2020 isChanged will be false when the changes are just the pages. So we always update the docs if this reducer has been called
                    console.debug('isChanged set to false. No need to update');
                } else*/ if (payload.index >= currentDocListAsync.result.length) {
          console.error(
            `changed index ${payload.index} mus be less then doc length ${currentDocListAsync.result.length}`,
          );
        } else {
          // YES we are mutating the currentDocListAsync.result
          // I think this doesn't break redux principals
          currentDocListAsync.result.splice(payload.index, 1, _.clone(payload.value));
        }
      } else {
        console.error('failed to update document at index');
      }

      return this.persistDocList(state);
    };

    let activeDochandlers = {};
    activeDochandlers[this._myActions.setActiveDoc.toString()] = (state, action) => {
      return action.payload || null;
    };

    //if we are updateing the activedoc, update the state as well
    activeDochandlers[this._myActions.updateDocAtIndex.toString()] = (state, action) => {
      var payload = action.payload as { index: number; value: T };

      var currentActiveDoc = state as T;

      if (
        currentActiveDoc &&
        payload &&
        payload.value &&
        (currentActiveDoc.id == payload.value.id ||
          currentActiveDoc.newdocId == payload.value.newdocId)
      ) {
        return payload.value;
      }

      return state;
    };

    return {
      docsAsync: handleActions(docListHandlers, _mine.getInitialvalue()),

      activeDoc: handleActions(activeDochandlers, null),

      saveStatusAsync: handleAction(
        this._myActions.updateSaveStatus,
        (state, action) => action.payload || null,
        null,
      ),

      paginationCurrentPage: handleAction(
        this._myActions.updatepaginationCurrentPage,
        (state, action) => action.payload || null,
        null,
      ),
      totalDocsInAllPages: handleAction(
        this._myActions.updateTotalDocsInAllPages,
        (state, action) => action.payload || null,
        null,
      ),
      paginationNumberofRows: handleAction(
        this._myActions.updatePaginationNumberofRows,
        (state, action) => {
          _mine.persistData('paginationNumberofRows', action.payload);
          return action.payload || null;
        },
        null,
      ),

      lastFieldUpdatedName: handleAction(
        this._myActions.setLastFieldUpdated,
        (state, action) => {
          console.debug(`setLastFieldUpdated: ${action && action.payload} `);

          return action.payload;
        },
        null,
      ),

      selectedDocIds: handleAction(
        this._myActions.setSelectedDocIds,
        (state, action) => action.payload,
        null,
      ),
      multiIndexerVisible: handleAction(
        this._myActions.showMultiIndexer,
        (state, action) => action.payload,
        false,
      ),
      isCkecked: handleAction(this._myActions.setIsCkecked, (state, action) => action.payload, {}),
      isSelectAll: handleAction(
        this._myActions.setIsSelectAll,
        (state, action) => action.payload,
        false,
      ),
    };
  }

  _authCloseDelegate: () => any = null;

  //used in docEditForm.tsx:50:33 NOT sure what's it about
  cancelPendingOps() {
    return (dispatch, getState) => {
      this._authCloseDelegate && this._authCloseDelegate();
    };
  }
  saveDocuments() {}

  showMutiIndexDocuments(closeOptions?: { saveData?: boolean }) {}

  _lastDocIdSelected?: string;

  resetSelectedDocs() {
    return (dispatch, getState) => {
      this._lastDocIdSelected = null;
      dispatch(this._myActions.setSelectedDocIds(null));
      //dispatch(this._myActions.setIsCheckedDoc(null));
    };
  }

  selectAll() {
    return (dispatch, getState) => {
      const _mine = this;
      const { docsAsync, selectedDocIds, isCkecked } = _mine.getCurrentState(getState);
      let currentCheckedIds = selectedDocIds || [];
      let currentCheckedStatus = isCkecked;
      if (selectedDocIds != null) {
        localStorage.setItem('selectedSearchDocIds', JSON.stringify({}));
        dispatch(_mine._myActions.setSelectedDocIds(null));
        dispatch(_mine._myActions.setIsCkecked({}));
        dispatch(_mine._myActions.setIsSelectAll(false));
      } else {
        currentCheckedIds = _.concat(
          currentCheckedIds,
          _.map(docsAsync.result, (i) => i.id),
        );
        console.log('Selected document IDs:', currentCheckedIds);
        const selectedSearchDocIds = {};
        for (const docId of currentCheckedIds) {
          selectedSearchDocIds[docId] = true;
        }
        localStorage.setItem('selectedSearchDocIds', JSON.stringify(selectedSearchDocIds));
        _.map(docsAsync.result, (i) => (currentCheckedStatus[i.id] = true));
        dispatch(_mine._myActions.setSelectedDocIds(_.uniq(currentCheckedIds)));
        dispatch(_mine._myActions.setIsCkecked(currentCheckedStatus));
        dispatch(_mine._myActions.setIsSelectAll(true));
      }
    };
  }
  /*addToCkeckedDocs(docId: string, index?: number) {
        return (dispatch, getState) => {
            const _mine = this;
            const { docsAsync, activeDoc, isCheckedDoc,isCkecked } = _mine.getCurrentState(getState);
            if (!docId) {
                console.warn('addToSelectedDoc null docId');
                return;
            }

            if (!(docsAsync && docsAsync.result && activeDoc && activeDoc.id)) {
                console.warn('docsAsync.result or active doc not set');
                return;
            }
            let currentCheckedIds = isCheckedDoc || [];
            let currentCheckedStatus = isCkecked ;
            
            if (_.includes(currentCheckedIds, docId)) {
                currentCheckedIds = _.filter(currentCheckedIds, id => id != docId);
                
                currentCheckedStatus[docId] = false;
            }
            else {
                currentCheckedIds = _.concat(currentCheckedIds, [docId]);
                currentCheckedStatus[docId] = true;
            }
            //always have the active doc selected
            dispatch(_mine._myActions.setIsCkecked(currentCheckedStatus));
            dispatch(_mine._myActions.setIsCheckedDoc(_.uniq(currentCheckedIds)));
            dispatch(_mine._myActions.setSelectedDocIds(_.uniq(currentCheckedIds)));
        };
    }*/

  downloadSeparatePdf(docIds?: string[]) {
    return async (dispatch, getState) => {
      const _mine = this;
      const { docsAsync, selectedDocIds } = _mine.getCurrentState(getState);
      if (!docIds || docIds.length == 0) throw 'No docs to print';
      const selectedDocs =
        docsAsync &&
        docsAsync.result &&
        _.filter(docsAsync.result, (d) => _.includes(selectedDocIds, d.id));
      selectedDocs.forEach((id) => {
        dispatch(ensurePrintApp().downloadPdf(id.pages));
      });
    };
  }

  /*
everythingInBetween :true implies we are using the shift key to multiselect docs
if it's false we have control key behaviour
*/
  addToSelectedDoc(docId: string, everythingInBetween?: boolean) {
    return (dispatch, getState) => {
      const _mine = this;
      const { docsAsync, activeDoc, selectedDocIds, isCkecked } = _mine.getCurrentState(getState);

      if (!docId) {
        console.warn('addToSelectedDoc null docId');
        return;
      }

      if (!(docsAsync && docsAsync.result && activeDoc && activeDoc.id)) {
        console.warn('docsAsync.result or active doc not set');
        return;
      }

      let currentSelectedIds = selectedDocIds || [];
      let currentCheckedStatus = isCkecked;

      const selectedSearchDocIds = JSON.parse(localStorage.getItem('selectedSearchDocIds') || '{}');

      if (!everythingInBetween) {
        if (_.includes(currentSelectedIds, docId)) {
          currentSelectedIds = _.filter(currentSelectedIds, (id) => id != docId);
          currentCheckedStatus[docId] = false;

          delete selectedSearchDocIds[docId];

          localStorage.setItem('selectedSearchDocIds', JSON.stringify(selectedSearchDocIds));
        } else {
          currentSelectedIds = _.concat(currentSelectedIds, [docId]);
          _mine._lastDocIdSelected = docId;
          currentCheckedStatus[docId] = true;
          selectedSearchDocIds[docId] = true;
          localStorage.setItem('selectedSearchDocIds', JSON.stringify(selectedSearchDocIds));
        }
      } else {
        if (
          _mine._lastDocIdSelected &&
          !_.find(docsAsync.result, (d) => d.id == _mine._lastDocIdSelected)
        ) {
          _mine._lastDocIdSelected = null;
        }

        if (!_mine._lastDocIdSelected) {
          _mine._lastDocIdSelected = activeDoc.id;
        }

        const newDocIndex = _.findIndex(docsAsync.result, (d) => d.id == docId);
        if (-1 == newDocIndex) {
          console.error('docId not found in list', docId);
          return;
        }

        const lastSelectedIndex = _.findIndex(
          docsAsync.result,
          (d) => d.id == _mine._lastDocIdSelected,
        );
        if (-1 == lastSelectedIndex) {
          console.error('lastSelectedIndex not found in list', _mine._lastDocIdSelected);
          return;
        }

        const lowEnd = Math.min(newDocIndex, lastSelectedIndex);
        const highEnd = Math.max(newDocIndex, lastSelectedIndex);

        const indexesToSelect = _.range(lowEnd, highEnd + 1);

        currentSelectedIds = _.concat(
          currentSelectedIds,
          _.map(indexesToSelect, (i) => docsAsync.result[i].id),
        );
        _.map(indexesToSelect, (i) => (currentCheckedStatus[docsAsync.result[i].id] = true));
        _mine._lastDocIdSelected = docId;
      }
      //always have the active doc selected
      //currentSelectedIds = _.concat(currentSelectedIds, [activeDoc.id]);

      dispatch(_mine._myActions.setSelectedDocIds(_.uniq(currentSelectedIds)));
      dispatch(_mine._myActions.setIsCkecked(currentCheckedStatus));
    };
  }

  deleteDocument() {
    return (dispatch, getState) => {
      const _mine = this;
      const { docsAsync, activeDoc, selectedDocIds } = _mine.getCurrentState(getState);

      if (!(docsAsync && docsAsync.result && activeDoc && activeDoc.id && selectedDocIds)) {
        console.warn('docsAsync.result or active doc not set');
        return;
      }

      return dispatch(ensureConfirmBox().ask('Permanently delete the selected document')).then(
        () => {
          let currentdocs = _.clone(docsAsync.result);
          const selectedDocs =
            docsAsync &&
            docsAsync.result &&
            _.filter(docsAsync.result, (d) => _.includes(selectedDocIds, d.id));
          selectedDocs.forEach((doc) => {
            fetch(`api/document/${doc.id}`, {
              method: 'delete',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => checkFetchError(response))
              .then((response) => response.text() as Promise<string>)
              .then((deletedId) => {
                const deletedIndex = _.findIndex(currentdocs, (d) => d.id == deletedId);

                currentdocs = _.filter(currentdocs, (d) => d.id != deletedId);

                let nextDocId =
                  -1 != deletedIndex &&
                  currentdocs.length > deletedIndex &&
                  currentdocs[deletedIndex];

                return dispatch(_mine.initialize(currentdocs))
                  .then(() => new Promise((r) => setTimeout(r, 100)))
                  .then(() => {
                    if (nextDocId) dispatch(_mine.setActiveDoc(nextDocId));
                  });
              });
          });

          dispatch(_mine._myActions.setSelectedDocIds(null));
          dispatch(_mine._myActions.setIsCkecked({}));
          dispatch(_mine._myActions.setIsSelectAll(false));
        },
      );
    };
  }

  /*
    donotCreateNew: unless explicity set, we create new active doc if there are no docs in the list
    verifyPagesStillExists : if set to TRUE, we are loading documents from cache, just make sure pages still exists in cart
    */
  ensureActiveDoc(donotCreateNew?: boolean, verifyPagesStillExists?: boolean) {
    return (dispatch, getState) => {
      const _mine = this;
      const { docsAsync, activeDoc } = _mine.getCurrentState(getState);

      if (!(docsAsync && docsAsync.result)) {
        console.warn('docsAsync.result not set');
        return null;
      }

      if (docsAsync.result.length == 0) {
        return donotCreateNew ? null : dispatch(_mine.createNewDoc());
      } else {
        if (verifyPagesStillExists) {
          dispatch(_mine.verifypagesWithPrimaryCart());
        }

        if (!activeDoc || !_.find(docsAsync.result, (d) => d === activeDoc)) {
          //if we failed to find the activeDoc in list, lets try to serach it using ID again
          const activeDocbyId = activeDoc && _mine.findDocumentInDocsAsync(docsAsync, activeDoc);
          return dispatch(_mine._myActions.setActiveDoc(activeDocbyId || docsAsync.result[0]));
        }
      }
    };
  }

  updateTotalDocsInAllPages = (value: number) => this._myActions.updateTotalDocsInAllPages(value);
  updatepaginationCurrentPage = (value: number) =>
    this._myActions.updatepaginationCurrentPage(value);

  navigate(forward: boolean) {
    return (dispatch, getState) => {
      const { docsAsync, activeDoc } = this.getCurrentState(getState);
      if (!(docsAsync && docsAsync.result && docsAsync.result.length > 0))
        throw 'setActiveDoc failed: docsAsync.result not set';

      if (!activeDoc) {
        console.warn('no active doc set. setting it now');
        return dispatch(this.ensureActiveDoc(true));
      }

      const foundActiveDoc = this.findDocumentInDocsAsync(docsAsync, activeDoc);
      if (null == foundActiveDoc) {
        throw 'document not found in the document list';
      }

      const activeIndex = _.indexOf(docsAsync.result, foundActiveDoc);
      if (-1 == activeIndex) {
        throw 'active document not found in the document list';
      }

      if (forward) {
        if (activeIndex < docsAsync.result.length - 1)
          dispatch(this.setActiveDoc(docsAsync.result[activeIndex + 1]));
      } else {
        if (activeIndex > 0) dispatch(this.setActiveDoc(docsAsync.result[activeIndex - 1]));
      }
    };
  }

  //look at all ways to find a document. Doesn't change state
  //accepts a id, newId or the document
  findDocumentInList(value?: string | T) {
    return (dispatch, getState) => {
      const { docsAsync } = this.getCurrentState(getState);

      return this.findDocumentInDocsAsync(docsAsync, value);
    };
  }

  private findDocumentInDocsAsync(docsAsync: IAsyncResult<T[]>, value?: string | T) {
    if (!(docsAsync && docsAsync.result && docsAsync.result.length > 0)) {
      console.warn('findDocumentInList called before docsAsync.result is set');
      return null;
    }

    if (typeof value === 'undefined') {
      console.error('findDocumentInList called with  undefined value');
      return null;
    }

    const toSearch =
      typeof value === 'string'
        ? { id: value, newdocId: value }
        : { id: value.id, newdocId: value.newdocId };

    if (!toSearch.id && !toSearch.newdocId) {
      console.debug('no doc to search');
      return null;
    }

    const found = _.find(
      docsAsync.result,
      (p) => (!!p.id && p.id == toSearch.id) || (!!p.newdocId && p.newdocId == toSearch.newdocId),
    );

    if (!found) {
      console.warn(`findDocumentInList: doc not found for ${value}`);
    }

    return found;
  }

  setActiveDoc(value?: string | T) {
    return (dispatch, getState) => {
      return Promise.resolve(dispatch(this.findDocumentInList(value))).then((found: T) => {
        if (found) dispatch(this._myActions.setActiveDoc(found));
      });
    };
  }

  updatePaginationNumberofRows = (value: number) =>
    this._myActions.updatePaginationNumberofRows(value);

  initializeSettings() {
    return (dispatch, getState) => {
      dispatch(
        this.updatePaginationNumberofRows(this.getPersistedData('paginationNumberofRows') || 10),
      );
      return Promise.resolve();
    };
  }

  initialize(docs?: PromiseLike<T[]> | T[]) {
    return (dispatch, getState) => {
      return dispatch(this._myActions.loadDocs(Promise.resolve(docs || [])));
    };
  }

  //marks the document as selected. THIS is not the same as setActive
  selectDocument(value: string | T, selected: boolean) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve(dispatch(this.findDocumentInList(value))).then((found: T) => {
        if (!found) throw 'document not found';

        const { docsAsync } = this.getCurrentState(getState);
        if (!(docsAsync && docsAsync.result)) throw 'documents not initialized';

        const currentDocs = _.clone(docsAsync.result);
        const effectedIndex = _.indexOf(currentDocs, found);
        if (-1 == effectedIndex) throw "couldn't find document with pages effected";

        currentDocs.splice(
          effectedIndex,
          1,
          _.assign({}, currentDocs[effectedIndex], { notSelected: !selected }),
        );

        return dispatch(_mine._myActions.loadDocs(Promise.resolve(currentDocs)));
      });
    };
  }

  //replace the entire page list with new pages
  updatePages(value: string | T, newPages: PageImageModel[]) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve(dispatch(this.findDocumentInList(value))).then((found: T) => {
        if (!found) throw 'document not found';

        const { docsAsync } = this.getCurrentState(getState);
        if (!(docsAsync && docsAsync.result)) throw 'documents not initialized';

        const currentDocs = _.clone(docsAsync.result);
        const effectedIndex = _.indexOf(currentDocs, found);
        if (-1 == effectedIndex) throw "couldn't find document with pages effected";

        currentDocs.splice(
          effectedIndex,
          1,
          _.assign({}, currentDocs[effectedIndex], { pages: newPages, isChanged: true }),
        );

        return dispatch(_mine._myActions.loadDocs(Promise.resolve(currentDocs)))
          .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
          .then(() => dispatch(_mine.ensureActiveDoc()));
      });
    };
  }

  updateActiveDocumentPages(valuePromise: PromiseLike<PageImageModel[]>) {
    return this.updateActiveDocumentInternal(valuePromise, 'pages');
  }

  /*
    updateActiveDocumentIntegration(integrationName: string, newValue: string) {
        return this.updateActiveDocumentInternal<any>(Promise.resolve(true), null, (activeDoc) => {
            const integrations = _.clone(activeDoc.integrations) || {};
            const integrationChanged = _.clone(activeDoc.integrationChanged) || [];
            integrations[integrationName] = newValue;

            if (!_.includes(integrationChanged, integrationName))
                integrationChanged.push(integrationName);


            return { integrations, integrationChanged };

        });
    }
    */
  updateActiveDocumentIndex(field: ProjectFieldModel, newValue: string) {}

  updateActiveDocumentProjectId(newProjectId: string) {
    return this.updateActiveDocumentInternal<any>(Promise.resolve(true), null, (activeDoc) => {
      if (activeDoc.id) throw 'cannot change project id of saved documents';
      return {
        projectId: newProjectId,
      };
    });
  }

  protected updateActiveDocumentInternal<TI>(
    valuePromise: PromiseLike<TI>,
    key?: string,
    updateDocCallback?: (doc: T, getState?: () => {}) => any,
  ) {
    return (dispatch, getState) => {
      const { docsAsync, activeDoc } = this.getCurrentState(getState);

      if (!(docsAsync && docsAsync.result)) {
        console.warn('updateActiveDocumentPages called with null docsAsync');
        return;
      }

      if (!activeDoc) {
        console.warn('updateActiveDocumentPages called with null activeDoc');
        return;
      }

      const _mine = this;
      return Promise.all([valuePromise, dispatch(this.findDocumentInList(activeDoc))]).then(
        ([newValue, foundActiveADoc]) => {
          const currentDocs = docsAsync.result;
          const activeIndex = _.indexOf(currentDocs, foundActiveADoc);
          if (-1 == activeIndex) {
            //todo: why is this happening often
            console.warn('activeDoc not found in currentDocs');
            //throw 'activeDoc not found in currentDocs';
            return;
          }

          let newProp = {};

          if (key && valuePromise) newProp[key] = newValue;

          if (updateDocCallback) newProp = updateDocCallback(activeDoc, getState);

          //we don't want to make the document changed if only the pages property changed
          const keysChanged = _.filter(_.keys(newProp), (k) => k != 'pages');

          const newActiveDoc = _.assign({}, activeDoc, newProp, {
            isChanged: activeDoc.isChanged || keysChanged.length > 0,
          });
          //currentDocs.splice(activeIndex, 1, newActiveDoc);

          return dispatch(_mine._myActions.updateDocAtIndex(activeIndex, newActiveDoc));
        },
      );
    };
  }

  createNewDoc(project?: ProjectModel, pages?: PageImageModel[]) {}

  verifypagesWithPrimaryCart() {}
}

export type EditableDocument = IPageHolderEditProps &
  DocumentModel & {
    //integrations whose value changed
    integrationChanged?: string[];

    //if present then this document was created as part of OCT Text search result
    ocrTextPagesSearchTerm?: string;
  };

export type IListDocumentsState = IListPageHoldersState<EditableDocument>;

export class ListDocsHelper extends ListPageHoldersHelper<EditableDocument> {
  constructor(storeKeys: () => string[], options?: DocListOptions) {
    super(storeKeys, options);
  }

  updateActiveDocumentIndex(field: ProjectFieldModel, newValue: string) {
    return (dispatch, getState) => {
      dispatch(this._myActions.setLastFieldUpdated(field.displayName));
      return dispatch(this.updateActiveDocumentIndexRaw(field, newValue));
    };
  }

  private updateActiveDocumentIndexRaw(field: ProjectFieldModel, newValue: string) {
    return this.updateActiveDocumentInternal<any>(
      Promise.resolve(true),
      null,
      (activeDoc: EditableDocument) => {
        const currentIndexes = _.clone(activeDoc.indexes || {});
        const currentValidations = _.clone(activeDoc.fieldValidations || {});
        const integrationChanged = _.clone(activeDoc.integrationChanged) || [];

        currentIndexes[field.displayName] = newValue;
        if (currentValidations[field.displayName]) delete currentValidations[field.displayName];

        if (newValue) {
          switch (field.fieldType) {
            case ProjectFieldTypeModel.number:
              if (!/^\d+$/.test(newValue)) {
                currentIndexes[field.displayName] = '';
                currentValidations[field.displayName] = {
                  validationState: 'error',
                  help: 'Can only contain number',
                };
              }
              break;
            case ProjectFieldTypeModel.externalIntegration:
              if (!_.includes(integrationChanged, field.displayName))
                integrationChanged.push(field.displayName);

              break;
          }
        } else if (field.required) {
          currentValidations[field.displayName] = {
            validationState: 'error',
            help: 'This is required',
          };
        }

        return {
          indexes: currentIndexes,
          fieldValidations: currentValidations,
          integrationChanged,
        };
      },
    );
  }

  verifypagesWithPrimaryCart() {
    console.debug('verifypagesWithPrimaryCart');

    return (dispatch, getState) => {
      const _mine = this;

      return dispatch(ensureCarts().initializeCarts())
        .then((response) => {
          new Promise((r) => setTimeout(r, 100));
        })
        .then(() => {
          const { docsAsync: cartsListAsync } = ensureCarts().allCartsList.getmyState(getState());

          if (!cartsListAsync || !cartsListAsync.result) {
            throw 'Scan batches failed to initialize';
          }

          const primary = _.find(cartsListAsync.result, (cart) => cart.isPrimary);

          if (!primary) {
            console.debug('no primary cart');
            return;
          }

          const primaryPages = primary.pages;
          if (!primaryPages || primaryPages.length == 0) {
            console.debug('no primary cart pages');
            return;
          }

          const { docsAsync } = this.getCurrentState(getState);

          if (!docsAsync || !docsAsync.result || docsAsync.result.length == 0) {
            console.debug('no documents to fix');
            return;
          }

          //now we will update all the pageobjects
          const docList = docsAsync.result;
          _.each(docList, (doc) => {
            if (!doc.pages) return;

            //lets replace doc pages with the one found in primary cart
            doc.pages = _.map(doc.pages, (p) => _.find(primaryPages, (pp) => p.id == pp.id));

            //remove any that were not found
            doc.pages = _.filter(doc.pages, (p) => !!p);
          });

          return dispatch(this._myActions.loadDocs(Promise.resolve(docList)));
        });
    };
  }

  createNewDoc(project?: ProjectModel, pages?: PageImageModel[]) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.all([
        project || ensureProjects().getCurrentState(getState()).selectedProject,
        pages
          ? ({ pages } as PageHolderModel)
          : dispatch(ensureCarts().initializeCarts())
              .then((response) => {
                new Promise((r) => setTimeout(r, 100));
              })
              .then(() => {
                const { docsAsync: cartsListAsync } = ensureCarts().allCartsList.getmyState(
                  getState(),
                );

                if (!cartsListAsync || !cartsListAsync.result) {
                  throw 'Scan batches failed to initialize';
                }

                const primary = _.find(cartsListAsync.result, (cart) => cart.isPrimary);

                return primary || ({} as PageHolderModel);
              }),
      ]).then(([selectedProject, newPageHolder]) => {
        if (!selectedProject) throw 'no repository selected';

        const { docsAsync, activeDoc } = this.getCurrentState(getState);
        if (!(docsAsync && docsAsync.result)) {
          console.warn('document list not yet initialized');
          return;
        }

        /*
                    //{field_displayname : pinned_value}}
                    used to pin an index value ex: http://localhost:56395/search/form?pinIndex[category]=lion
                    */

        const { creationObject } = ensureWorkSpace().getCurrentState(getState());
        const pinIndexes: { [key: string]: string } = creationObject && creationObject.pinIndexes;

        const newDoc = _.assign({}, newPageHolder, {
          newdocId: _mine.gettTmpIdForNewDoc(),
          id: '',
          projectId: selectedProject.id,
          indexes: pinIndexes || {},
        }) as EditableDocument;

        const { fieldsWithAutoCarry } = ensurePageLayouts().getCurrentState(getState());
        if (fieldsWithAutoCarry && activeDoc && activeDoc.indexes) {
          _.each(_.keys(fieldsWithAutoCarry), (autocarryField) => {
            if (activeDoc.indexes[autocarryField])
              newDoc.indexes[autocarryField] = activeDoc.indexes[autocarryField];
          });
        }

        if (_.keys(newDoc.indexes).length > 0) newDoc.isChanged = true;

        /*
                    const newDoc: EditableDocument = {
                        id: '',
                        projectId: selectedProject.id,
                        pages: pagesToUse,
                        indexes: pinIndexes || {},
                        created: null,
                        modified: null,
                        integrations: {},
                        catalogued: false,
                        nonWebPages: [] as any,
                        hasUnprocessedpages: false,
                        unProcessedPages: [],
                        isPlaceHolder: false,
                        pageProcessingStartedAt: null,
                        
                    };
                    */

        const updatedDocList = _.clone(docsAsync.result);
        updatedDocList.unshift(newDoc);

        return dispatch(this._myActions.loadDocs(Promise.resolve(updatedDocList)))
          .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
          .then(() => dispatch(this.setActiveDoc(newDoc)));
      });
    };
  }

  //When creating new docs in the client we give them a tmp Id so that we can find them in lists
  gettTmpIdForNewDoc() {
    return `newDocument_${++_TotalNewDocsCreated}`;
  }

  showMutiIndexDocuments(closeOptions?: { saveData?: boolean }) {
    const _mine = this;
    return (dispatch, getState) => {
      /*
                We create a temporray active doc, that is not part of any list
                we need to remove this when the dialog is closed.
                we need to call the raw action and NOT the other one as that doesn't let non list active docs
            */

      const { activeDoc, docsAsync, selectedDocIds } = _mine.getCurrentState(getState);

      return Promise.resolve()
        .then(() => {
          if (closeOptions) {
            return Promise.resolve()
              .then(() => {
                if (!closeOptions.saveData) return;

                if (
                  !(
                    activeDoc &&
                    docsAsync &&
                    activeDoc.indexes &&
                    docsAsync.result &&
                    selectedDocIds &&
                    selectedDocIds.length > 0
                  )
                ) {
                  console.warn('no active doc or selected doc');
                  return;
                }

                const indexesToSave = _.clone(activeDoc.indexes);

                _.each(_.keys(indexesToSave), (k) => {
                  if (!indexesToSave[k]) delete indexesToSave[k];
                });

                if ((_.keys(indexesToSave).length = 0)) {
                  console.warn('no indexes to save');
                  return;
                }

                const docsTochange = _.filter(docsAsync.result, (doc) =>
                  _.includes(selectedDocIds, doc.id),
                );

                if (docsTochange.length == 0) {
                  console.warn('no docs to save');
                  return;
                }

                const changedDocs = _.map(docsTochange, (doc) => {
                  const newIndexes = _.assign({}, doc.indexes || {}, indexesToSave);

                  return _.assign({}, doc, { indexes: newIndexes });
                });

                const UpdatePromise = fetch(_mine._options.restURL, {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(changedDocs),
                })
                  .then((response) => checkFetchError(response))
                  .then((response) => response.json() as Promise<UpdateDocResultModel[]>)
                  .then((updateResults) => {
                    let err = '';

                    const newDocList = _.map(docsAsync.result, (doc) => {
                      const updatedDocResult = _.find(
                        updateResults,
                        (ur) => ur.document.id == doc.id,
                      );
                      if (!updatedDocResult) return doc;

                      if (updatedDocResult.error) {
                        err += '\n' + updatedDocResult.error;
                        return doc;
                      }

                      return updatedDocResult.document;
                    });

                    dispatch(_mine._myActions.loadDocs(Promise.resolve(newDocList)));

                    if (err) {
                      throw 'failed to update few documents \n' + err;
                    }
                  })
                  .then(() => true);

                return Promise.resolve(
                  dispatch(ensureWaitBox().doWait('saving documents ...', UpdatePromise)),
                ).catch((err) => {
                  console.warn('not everything saved', err);
                });
              })
              .catch((err) => {
                console.error('failed saving mutidocs', err);
              })
              .then(() => new Promise((r) => setTimeout(r, 100)))
              .then(() => {
                //remove the dummy document
                const { docsAsync: updatedDocsAsync } = _mine.getCurrentState(getState);

                if (!(updatedDocsAsync && updatedDocsAsync.result)) {
                  console.warn('no docs');
                  return;
                }

                const recoverDOcsList = _.filter(
                  updatedDocsAsync.result,
                  (doc) => doc.newdocId != 'forMultiUpdate',
                );
                return dispatch(_mine._myActions.loadDocs(Promise.resolve(recoverDOcsList)));
              })
              .then(() => new Promise((r) => setTimeout(r, 100)))
              .then(() => {
                dispatch(_mine.resetSelectedDocs());
                dispatch(_mine.ensureActiveDoc());
              });
          } else {
            if (!(activeDoc && activeDoc.id && activeDoc.projectId)) throw 'active doc not set';

            const newDoc: EditableDocument = {
              projectId: activeDoc.projectId,
              newdocId: 'forMultiUpdate',
            } as any;

            const newDocList = _.concat(docsAsync.result, [newDoc]);

            dispatch(_mine._myActions.loadDocs(Promise.resolve(newDocList)));

            return new Promise((r) => setTimeout(r, 100)).then(() =>
              dispatch(_mine._myActions.setActiveDoc(newDoc)),
            );
          }
        })
        .catch((err) => {
          console.error('error showMutiIndexDocuments', err);
        })
        .then(() => new Promise((r) => setTimeout(r, 100)))
        .then(() => dispatch(this._myActions.showMultiIndexer(!closeOptions)));
    };
  }

  saveDocuments() {
    return (dispatch, getState) => {
      const _mine = this;

      const savePromise = Promise.resolve()
        .then(() => {
          const { docsAsync } = this.getCurrentState(getState);

          if (!(docsAsync && docsAsync.result)) throw 'documents not initialized';

          //lets ensure required fields.
          const { projectListAsync } = ensureProjects().getCurrentState(getState());
          if (!(projectListAsync || projectListAsync.result)) throw 'projects not loaded';

          //find docs with atleast one value
          let validationUpdated = false;
          const docsWithValue = _.filter(docsAsync.result, (doc) => {
            if (!!doc.notSelected) return false;

            if (!(doc.isChanged || (doc.integrationChanged && doc.integrationChanged.length > 0)))
              return false;

            if (!_.find(_.keys(doc.indexes || {}), (field) => !!doc.indexes[field])) return false;

            const requiredFields = _.filter(
              projectListAsync.result[doc.projectId].fields,
              (f) => f.required && !f.systemDefined,
            );

            let required = true;
            _.each(requiredFields, (f) => {
              if (!doc.indexes[f.displayName]) {
                required = false;
                validationUpdated = true;
                if (!doc.fieldValidations) doc.fieldValidations = {};
                doc.fieldValidations[f.displayName] = {
                  help: 'This is required',
                  validationState: 'error',
                };
              }
            });

            return required;
          });

          if (validationUpdated)
            dispatch(_mine._myActions.loadDocs(Promise.resolve(docsAsync.result)));
          if (!docsWithValue || docsWithValue.length == 0) throw 'no indexes entered';

          return docsWithValue;

          /*
                    //we need to get auths
                    const integrationsChanged = _.uniqBy(_.flatMap(docsWithValue, d => d.integrationChanged || []), i => i);
                    //we will see about clinet side Auths later

                    return getAuthTokens<EditableDocument[]>(integrationsChanged, docsWithValue,
                        new Promise((resolve, reject) => _mine._authCloseDelegate = resolve));
                    */
        })
        .then((docsWithValue) => {
          //we are ready to save the doc

          if (!_mine._options.restURL) throw 'save options not set';

          return Promise.all([
            Promise.resolve(docsWithValue),
            fetch(_mine._options.restURL, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(docsWithValue),
            })
              .then((response) => checkFetchError(response))
              .then((response) => response.json() as Promise<UpdateDocResultModel[]>),
          ]);
        })
        .then((response) => {
          //the doc is saved

          const docsWithValue = response[0];
          const saveResult = response[1];

          const { docsAsync } = _mine.getCurrentState(getState);

          //remove new documents that were saved from the list
          //we will also use the filter loop to actually update doc state
          const docsSavedAndTobeRemovedFromList = _.filter(docsWithValue, (doc, i) => {
            //!doc.id && !saveResult[i].error
            let tobeRemoved = true;

            if (!doc.fieldValidations) doc.fieldValidations = {};

            if (saveResult[i].error) {
              doc.fieldValidations['global'] = {
                help: saveResult[i].error,
                validationState: 'error',
              };
              tobeRemoved = false;
            } else {
              doc.isChanged = false;
              doc.integrationChanged = [];
              doc.indexes = saveResult[i].document.indexes;

              if (!doc.id) doc.id = saveResult[i].document.id;
              else tobeRemoved = false;
            }

            return tobeRemoved;
          });

          const docsUnsaved = _.filter(docsWithValue, (doc, i) => !!saveResult[i].error);

          const docsLeft = _.filter(
            docsAsync.result,
            (doc) => !_.includes(docsSavedAndTobeRemovedFromList, doc),
          );

          _.each(docsLeft, (d) => {
            if (d.notSelected) d.notSelected = false;
          });

          return dispatch(_mine._myActions.loadDocs(Promise.resolve(docsLeft)));
        })

        //lets rest the carts we most liley save stuff frm default carts and may from other carts
        .then(() => dispatch(ensureCarts().initializeCarts(true)))

        .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
        .then(() => dispatch(_mine.ensureActiveDoc()))
        .then(() => true);

      dispatch(this._myActions.updateSaveStatus(savePromise));
    };
  }
}
