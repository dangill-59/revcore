import * as _ from 'lodash';
import { handleActions, handleAction } from 'redux-actions';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { checkFetchError, getResponce } from 'base/asyncLoader';

import { PageImageModel } from '../../generated/PageImageModel';
import { PageHolderModel } from '../../generated/PageHolderModel';
import { NewPageDirectModel } from '../../generated/NewPageDirectModel';
import { PageImageTypeModel } from '../../generated/PageImageTypeModel';

import ensureWaitBox from '../waitBox/reducer';
import ensureConfirmBox, { ExtraCheckBoxProp } from '../confirmation/reducer';
import ensureWorkpace from '../workspace/reducer';
import ensureLogin from '../revLogin/reducer';
import ensureLaunchNative from '../launchNative/reducer';
import { JobTypeModel } from '../../generated/JobTypeModel';

import { PrintPagesProps } from '../printApp/reducer';

import ensureMainNav from '../mainNav/reducer';

import * as moment from 'moment';

import contentDisposition from 'content-disposition';

import download from 'downloadjs';

export const DRAGTYPE_PAGE = 'APAGE';

import * as Evaporate from 'evaporateJS/evaporate';
import * as sparkMD5 from 'spark-md5';
import * as sha256 from 'js-sha256';
import { PagesEffectedModel } from '../../generated/PagesEffectedModel';

import {
  ListPageHoldersHelper,
  EditablePageHolder,
  EditableDocument,
  ListDocsHelper,
} from '../listDocuments/reducerHelper';

import ensureMessaging from '../messaging/reducer';

import { processLongPoll } from '../messaging/longrunningPoll';
import ensureCarts, { ICartsState, IListScanbatchesState } from '../carts/reducer';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';

_.mixin({
  memoizeDebounce: function (func, wait = 0, options = {}) {
    var mem = _.memoize(function () {
      return _.debounce(func, wait, options);
    }, options.resolver);
    return function () {
      mem.apply(this, arguments).apply(this, arguments);
    };
  },
});

export type CorrectedDimentionProps = {
  [key: string]: { width: number; height: number };
};

export interface IListPagesState {
  readonly thumbsHeight?: number;
  readonly activePage?: PageImageModel;

  readonly previousSelectIndex?: number;

  //contains pages that are selected
  readonly selectedPages: { [key: string]: boolean };

  readonly lightBoxVisible: boolean;

  //some images might have incorrect dimentiions while processing, we store the corrected dimentions here
  readonly correctedDimentions: CorrectedDimentionProps;
}

type myActions = {
  zoom: (value?: number) => number;
  setActivePage: (value?: PageImageModel) => void;

  setPreviousSelectIndex: (value?: number) => void;
  updateSelectedItens: (value: { [key: string]: boolean }) => void;

  showLightBox: (show: boolean) => boolean;

  addCorrectedDimentions: (
    pageId: string,
    width: number,
    height: number,
  ) => { pageId: string; width: number; height: number };
};

type PageListOptions = {
  allowDelete?: boolean;

  //If present this override a default page navigation
  getNextNavigatablePage?: (getState: any, activePage: PageImageModel, navDir: pageNav) => string;
};

export enum pageNav {
  next,
  prev,
}

let _toKeppTrack = 0;
function incKeepTrack() {
  console.debug(`effectedtracked incKeepTrack :${++_toKeppTrack}`);
  return _toKeppTrack;
}

function readableBytes(bytes: number) {
  if (!bytes) return '0 KB';

  const i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const r = (bytes / Math.pow(1024, i)).toFixed(2);

  return r + ' ' + sizes[i];
}

import { reducerHelperBase } from 'base/baseReducer';
export class ListPagesHelper<T extends EditablePageHolder> extends reducerHelperBase<
  IListPagesState,
  myActions
> {
  protected readonly _options: PageListOptions;
  public readonly myDocsHelper: ListPageHoldersHelper<T>;

  addAllowed() {
    return true;
  }
  deleteAllowed() {
    return this._options.allowDelete;
  }

  //dee: This is a bad design we tried to emulate react context and this became a mess
  //for now we are adding a back reference but need to creal this up soober tnen later
  constructor(
    storeKeys: () => string[],
    listDocsHelper: ListPageHoldersHelper<T>,
    options?: PageListOptions,
  ) {
    super(storeKeys);
    this._options = options || {};
    this.myDocsHelper = listDocsHelper;
  }

  createActionList() {
    return {
      zoom: (value?: number) => value,
      setActivePage: (value?: PageImageModel) => value,

      setPreviousSelectIndex: (value?: number) => value,

      updateSelectedItens: (value: { [key: string]: boolean }) => value,

      showLightBox: (show: boolean) => show,

      addCorrectedDimentions: (pageId: string, width: number, height: number) => ({
        pageId,
        width,
        height,
      }),
    };
  }

  protected reducers() {
    const me = this;
    return {
      lightBoxVisible: handleAction(
        this._myActions.showLightBox,
        (state, action) => action.payload || null,
        null,
      ),

      previousSelectIndex: handleAction(
        this._myActions.setPreviousSelectIndex,
        (state, action) => {
          return 'undefined' === action.payload ? null : action.payload;
        },
        null,
      ),

      activePage: handleAction(
        this._myActions.setActivePage,
        (state, action) => action.payload || null,
        null,
      ),

      selectedPages: handleAction(
        this._myActions.updateSelectedItens,
        (state, action) => action.payload || null,
        null,
      ),

      thumbsHeight: handleAction(
        this._myActions.zoom,
        (state, action) => {
          return me.persistData('thumbsHeight', action.payload || null);
        },
        this.getPersistedData('thumbsHeight'),
      ),

      correctedDimentions: handleAction(
        this._myActions.addCorrectedDimentions,
        (state, action) => {
          const newState = _.clone(state || {}) as CorrectedDimentionProps;

          const { pageId, width, height } = action.payload;

          newState[pageId] = { width, height };

          return newState;
        },
        {},
      ),
    };
  }

  addCorrectedDimentions = (pageId: string, width: number, height: number) => {
    fetch(
      `/api/pages/updateDimention/${encodeURIComponent(pageId)}?width=${width}&height=${height}`,
    )
      .then((response) => checkFetchError(response))
      .catch((err) => {
        console.error('failed to update dimentions', err);
      });

    return this._myActions.addCorrectedDimentions(pageId, width, height);
  };

  zoomTo(newzoom: number) {
    return (dispatch, getState) => {
      if (newzoom <= 1500 && newzoom >= 60) {
        dispatch(this._myActions.zoom(newzoom));
      }
    };
  }

  zoom(out?: boolean, defaultZoom?: number) {
    return (dispatch, getState) => {
      const { thumbsHeight } = this.getCurrentState(getState);

      const currZoom = thumbsHeight || defaultZoom || 100;

      if (currZoom < 1500 || currZoom > 60) {
        dispatch(this._myActions.zoom(currZoom + (!!out ? -1 : 1) * 10));
      }
    };
  }

  selectAllPages() {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        const currentSelectedPages = _.reduce(
          pagesArray,
          (res, p) => {
            res[p.id] = true;
            return res;
          },
          {} as { [key: string]: boolean },
        );

        return dispatch(_mine._myActions.updateSelectedItens(currentSelectedPages));
      });
    };
  }

  togglePageSelection(id: string, ctrlKey: boolean, shiftKey: boolean) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        const { activePage } = _mine.getCurrentState(getState);
        if (activePage && activePage.id != id) {
          setTimeout(
            (newId) => {
              dispatch(_mine.setActivePage(newId));
            },
            500,
            id,
          );
        }

        const { previousSelectIndex, selectedPages } = _mine.getCurrentState(getState);

        if (!(pagesArray && pagesArray.length > 0)) throw 'no pages found';

        let selectedIndex = _.findIndex(pagesArray, (p) => p.id == id);
        if (-1 == selectedIndex) {
          console.warn('selectedIndex index not found');
          return;
        }

        let currentSelectedPages = _.clone(selectedPages || {});

        const currentPageIds = _.map(pagesArray, (p) => p.id);

        _.each(_.keys(currentSelectedPages), (id) => {
          if (!_.includes(currentPageIds, id)) delete currentSelectedPages[id];
        });

        const selStatus = !currentSelectedPages[id];

        let pagesEffected: { [key: string]: boolean } = {};

        pagesEffected[id] = selStatus;

        if (shiftKey && typeof previousSelectIndex !== 'undefined') {
          let beginIndex = selectedIndex;
          let endIndex = previousSelectIndex;
          if (beginIndex > endIndex) {
            let t = beginIndex;
            beginIndex = endIndex;
            endIndex = t;
          }
          pagesEffected = {};
          for (let i = beginIndex; i <= endIndex; i++) {
            pagesEffected[pagesArray[i].id] = selStatus;
          }
        }

        currentSelectedPages = _.assign(currentSelectedPages, pagesEffected);

        dispatch(_mine._myActions.setPreviousSelectIndex(selectedIndex));

        return dispatch(_mine._myActions.updateSelectedItens(currentSelectedPages));
      });
    };
  }

  fixNonwebPage() {
    return (dispatch, getState) => {
      const { activeDoc } = this.myDocsHelper.getmyState(getState());

      // Trigger processPage for all unprocessed pages in the document
      if (activeDoc && activeDoc.pages) {
        const unprocessedPages = activeDoc.pages.filter(p =>
          p.pageType === 'unprocessed' || !p.pageType
        );

        unprocessedPages.forEach(page => {
          dispatch(this.processPage(page.id));
        });
      }
    };
  }

  downloadOriginal(pageId: string) {
    return (dispatch, getState) => {
      const downloadPromise = fetch(`/api/pages/original/${encodeURIComponent(pageId)}`)
        .then((response) => checkFetchError(response))
        .then((response) => {
          //"attachment; filename=original.TIF; filename*=UTF-8''original.TIF"
          const g = contentDisposition.parse(response.headers.get('content-disposition'));

          if (!(g && g.parameters && g.parameters.filename)) throw 'invalid original filename';

          const fileExt = g.parameters.filename.split('.').pop();
          return Promise.all([fileExt, response.blob()]);
        })
        .then(([fileExt, blob]) => {
          const timeStr = new Date().toISOString().replace(/z|t/gi, ' ');
          download(blob, `revOriginal ${timeStr}.${fileExt}`, 'application/octet-stream');
        })
        .then(() => true);
      return dispatch(ensureWaitBox().doWait('loading original ...', downloadPromise));
    };
  }

  showLightBox(pageId: string) {
    return (dispatch, getState) => {
      if (!pageId) return dispatch(this._myActions.showLightBox(false));

      const _mine = this;
      dispatch(this.setActivePage(pageId));
      return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
        dispatch(_mine._myActions.showLightBox(true)),
      );
    };
  }

  setActivePageDebouced = _.debounce((dispatch, value?: string | PageImageModel | pageNav) => {
    dispatch(this.setActivePage(value));
  }, 50);

  setActivePage(value?: string | PageImageModel | pageNav) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        let newActivepage: PageImageModel = null;
        if (typeof value !== 'undefined') {
          if (typeof value === 'string') {
            //value is pageId

            if (!(pagesArray && pagesArray.length > 0)) return;

            newActivepage = _.find(pagesArray, (p) => p.id == value);
          } else if ((<PageImageModel>value).id) {
            newActivepage = value as PageImageModel;
          } else {
            //it's page nav
            const { activePage } = _mine.getCurrentState(getState);

            if (!(pagesArray && pagesArray.length > 0)) return;

            const navDir = value as pageNav;

            if (this._options.getNextNavigatablePage) {
              const newActivepageId = this._options.getNextNavigatablePage(
                getState,
                activePage,
                navDir,
              );

              if (newActivepageId) {
                dispatch(_mine.setActivePage(newActivepageId));

                //navigation handeled by thye method
                return;
              }

              //else continue the prev way
            }

            newActivepage = activePage || pagesArray[0];

            let currentIndex = _.findIndex(pagesArray, (p) => p.id == newActivepage.id);
            if (navDir == pageNav.next) {
              if (++currentIndex < pagesArray.length) newActivepage = pagesArray[currentIndex];
              else newActivepage = pagesArray[0];
            } else {
              //navDir == pageNav.prev

              if (currentIndex > 0) newActivepage = pagesArray[currentIndex - 1];
              else newActivepage = pagesArray[pagesArray.length - 1];
            }
          }
        }

        return dispatch(_mine._myActions.setActivePage(newActivepage));
      });
    };
  }

  //invoked when a page has been dragged some where else
  pageMoved(pageId: string) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        if (!(pagesArray && pagesArray.length > 0)) throw 'no pages found';

        dispatch(
          _mine.myDocsHelper.updateActiveDocumentPages(
            Promise.resolve(_.filter(pagesArray, (p) => p.id != pageId)),
          ),
        );
      });
    };
  }

  onExistingPagedDropped1(
    droppedItem: PageImageModel & { listofPagesHelper: ListPagesHelper<T> },
    targetPageId?: string,
  ) {
    return (dispatch, getState) => {
      const _mine = this;

      if (this !== droppedItem.listofPagesHelper) {
        //we are copying pages from one list to another

        let pagesToCopy: PageImageModel[] = [droppedItem];

        const { selectedPages } = droppedItem.listofPagesHelper.getCurrentState(getState);

        const { activeDoc: droppedList_activedoc } =
          droppedItem.listofPagesHelper.myDocsHelper.getmyState(getState());
        const droppedList_Allpages = droppedList_activedoc.pages || [];

        //check if there are any keys that are selected
        const hasSelections = _.find(_.keys(selectedPages || {}), (k) => !!selectedPages[k]);

        if (hasSelections && droppedList_Allpages) {
          pagesToCopy = _.filter(droppedList_Allpages, (p) => !!selectedPages[p.id]);
        }

        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());

        const existingpageIds = _.map(activeDoc.pages || [], (p) => p.id);
        const pagesToAdd = _.filter(pagesToCopy, (p) => !_.includes(existingpageIds, p.id));

        const currentpages = _.concat(activeDoc.pages || [], pagesToAdd);

        return dispatch(
          _mine.myDocsHelper.updateActiveDocumentPages(
            Promise.resolve(_.sortBy(currentpages, (p) => p.orderNumber)),
          ),
        );
      }

      //if we didn't drop a page on a page there's nothing to do
      if (targetPageId === undefined) return;

      const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
      if (!activeDoc) throw 'no active document';

      fetch(`/api/pages/reorder/${activeDoc.id}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          droppedImageId: droppedItem.id,
          targetImageId: targetPageId,
        }),
      })
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<{ [key: string]: number }>)
        .then((response) => {
          const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
          const pagesArray = activeDoc && activeDoc.pages;
          if (!pagesArray || pagesArray.length == 0) throw 'no active document or pages';

          var currentpages = _.clone(pagesArray);

          _.each(currentpages, (p) => {
            if (typeof response[p.id] !== 'undefined') p.orderNumber = response[p.id];
          });

          return dispatch(
            _mine.myDocsHelper.updateActiveDocumentPages(
              Promise.resolve(_.sortBy(currentpages, (p) => p.orderNumber)),
            ),
          );
        });
    };
  }

  deleteActivepage() {
    const _mine = this;
    return (dispatch, getState) => {
      const { activePage } = _mine.getCurrentState(getState);
      if (activePage && activePage.id) return dispatch(_mine.deletePages([activePage.id]));
    };
  }

  //called to reload after annotations have been updated
  reloadActiveDocPages(pageIds: string[]) {
    return (dispatch, getState) => {
      const _mine = this;
      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        if (!(pagesArray && pagesArray.length > 0)) return;

        const newPages = _.map(pagesArray, (p) => {
          if (_.includes(pageIds, p.id))
            return _.assign({}, p, {
              path: p.path + '&noCache=' + new Date().getTime(),
            });

          return p;
        });

        dispatch(_mine.myDocsHelper.updateActiveDocumentPages(Promise.resolve(newPages)));
      });
    };
  }

  //keeps that about whihc doc right now doesnt need page delete conformation
  private _confirmationSkipDocId: string = null;

  deletePages(ids?: string[]) {
    if (!this._options.allowDelete) return;

    return (dispatch, getState) => {
      const _mine = this;

      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        if (!(pagesArray && pagesArray.length > 0)) return;

        const { selectedPages } = _mine.getCurrentState(getState);

        const toDelete = _.filter(pagesArray, (p) => !!(selectedPages && selectedPages[p.id]));
        const toDeleteIds = ids || _.map(toDelete, (p) => p.id);

        console.log('Page to delete', activeDoc.id);
        const notDeletekey = "Don't ask again for this document";
        const extraInput: ExtraCheckBoxProp = {};
        extraInput[notDeletekey] = this._confirmationSkipDocId == activeDoc.id;

        const confirmationprompt =
          this._confirmationSkipDocId == activeDoc.id
            ? Promise.resolve(extraInput)
            : dispatch(
                ensureConfirmBox().ask(
                  'Permanently delete ' +
                    toDeleteIds.length +
                    ' page' +
                    (toDeleteIds.length > 1 ? 's' : ''),
                  null,
                  false,
                  extraInput,
                ),
              );

        confirmationprompt.then((extraProps: ExtraCheckBoxProp) => {
          this._confirmationSkipDocId = null;
          if (extraProps && extraProps[notDeletekey]) {
            this._confirmationSkipDocId = activeDoc.id;
          }

          const delPromise = fetch('api/pages' + '/' + activeDoc.id, {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(toDeleteIds),
          })
            .then((response) => checkFetchError(response))
            .then(() => {
              const newPages = _.filter(pagesArray, (p) => !_.includes(toDeleteIds, p.id));

              // Clear evaporate.js upload cache for deleted pages
              // This prevents deleted pages from reappearing due to localStorage cache
              try {
                const awsUploads = localStorage.getItem('awsUploads');
                if (awsUploads) {
                  const uploads = JSON.parse(awsUploads);
                  toDeleteIds.forEach((pageId) => {
                    delete uploads[pageId];
                  });
                  localStorage.setItem('awsUploads', JSON.stringify(uploads));
                  console.log(`Cleared ${toDeleteIds.length} pages from awsUploads localStorage`);
                }
              } catch (e) {
                console.warn('Failed to clear awsUploads from localStorage:', e);
              }

              dispatch(_mine.myDocsHelper.updateActiveDocumentPages(Promise.resolve(newPages)));
              return true;
            });

          return dispatch(ensureWaitBox().doWait('deleting images', delPromise));
        });
      });
    };
  }

  getToPrintPages(options?: PrintPagesProps) {
    return (dispatch, getState) => {
      const _mine = this;

      return Promise.resolve().then(() => {
        const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
        const pagesArray = activeDoc && activeDoc.pages;
        if (!pagesArray) throw 'no active document';

        const { selectedPages } = _mine.getCurrentState(getState);

        const currentPageIds = _.map(pagesArray, (p) => p.id);
        const selectedIds = _.filter(
          _.keys(selectedPages || {}),
          (id) => _.includes(currentPageIds, id) && !!selectedPages[id],
        );

        const pagesToPrint = _.filter(pagesArray || [], (p) => {
          return selectedIds.length == 0 || _.includes(selectedIds, p.id);
        });

        if (!(options && options.includeUnprocessed)) {
          const anythingUnprocesseds = _.filter(
            pagesToPrint,
            (p) => !(!p.pageType || PageImageTypeModel.nonweb == p.pageType),
          );
          if (anythingUnprocesseds.length > 0) {
            _.each(anythingUnprocesseds, (unP) => dispatch(_mine.processPage(unP.id)));
            throw 'Some images are still rendering please try later';
          }
        }

        return pagesToPrint;
      });
    };
  }

  onNewPagesAdded(newPagesHolderPromise: PromiseLike<string[]>, order?: number) {
    //called from scanMenu
  }

  scanPages() {
    const _mine = this;
    return (dispatch, getState) => {
      const { currentWorkSpace, creationObject } = ensureWorkpace().getCurrentState(getState());

      const { selectableSettings } = ensureMainNav().getCurrentState(getState());

      const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
      if (!activeDoc) throw 'no active document';

      const jobInput: any = {
        docId: activeDoc.id,
        workspace: currentWorkSpace,
        selectScanner: !!selectableSettings['selectScanner'],
      };

      const hasRevPrintedData = !!(
        creationObject &&
        creationObject.initcontext == 'printtorev' &&
        creationObject.data
      );

      if (hasRevPrintedData) jobInput.path = creationObject && creationObject.data;

      //`api/pages/finalize?docId=${encodeURIComponent(activeDoc.id || '')}`
      return dispatch(
        ensureLaunchNative().launch<PagesEffectedModel>(
          {
            jobType: hasRevPrintedData ? JobTypeModel.importPrinted : JobTypeModel.scan,
            resultURL: null,
            permissions: [
              'api/Pages/newpageid/jpg',
              'api/Pages/newpageid/png',
              'api/Pages/newpageid/pdf',
              'api/pages/finalizeWithOriginal',
            ],
            jobInput: JSON.stringify(jobInput),
          },
          (pagesEffected) => {
            dispatch(_mine.handleReceivedPagesEffectedModel(pagesEffected, false, incKeepTrack()));
          },
        ),
      ).then((pagesEffected: PagesEffectedModel) => {
        if (creationObject && creationObject.initcontext == 'printtorev' && creationObject.data) {
          dispatch(
            ensureWorkpace().updateCreateTionObject(_.assign({}, creationObject, { data: null })),
          );
        }

        dispatch(_mine.handleReceivedPagesEffectedModel(pagesEffected, true, incKeepTrack()));
      });
    };
  }

  addPages(filesUnOrdered: File[], order?: number) {
    return async (dispatch, getState) => {
      console.log('addPages has been called');
      await dispatch(ensureWorkpace().loadChunkUploadOptions());
      const { chunkUpLoadOptionsAsync } = ensureWorkpace().getCurrentState(getState());
      if (!(chunkUpLoadOptionsAsync && chunkUpLoadOptionsAsync.result)) {
        throw 'upload options not initialized';
      }

      if (chunkUpLoadOptionsAsync.result.usings3) {
        console.log('Redirecting to addPagesS3');
        dispatch(this.addPagesS3(filesUnOrdered, order));
      } else {
        console.log('Redirecting to addPagesAzure');
        dispatch(this.addPagesAzure(filesUnOrdered, order));
      }
    };
  }

  addPagesS3(filesUnOrdered: File[], order?: number) {
    return (dispatch, getState) => {
      const _mine = this;

      let uploadWaitBox: string = null;

      const uploadNewPagesPromise = Promise.resolve(
        dispatch(ensureWorkpace().loadChunkUploadOptions()),
      )
        .then(() => new Promise((r) => setTimeout(r, 100)))
        .then(() => {
          const { chunkUpLoadOptionsAsync } = ensureWorkpace().getCurrentState(getState());

          if (!(chunkUpLoadOptionsAsync && chunkUpLoadOptionsAsync.result)) {
            throw 'upload options not initialized';
          }

          const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
          if (!activeDoc) throw 'no active document';

          if (typeof order === 'undefined') {
            order = (activeDoc.pages || []).length;
          }

          return Promise.all([
            activeDoc.id,
            chunkUpLoadOptionsAsync.result,
            chunkUpLoadOptionsAsync.result.usings3 &&
              Evaporate.create(
                _.assign(chunkUpLoadOptionsAsync.result, {
                  customAuthMethod: (
                    signParams,
                    signHeaders,
                    stringToSign,
                    signatureDateTime,
                    canonicalRequest,
                  ) => {
                    return Promise.all([
                      /*
                                        fetch(`http://localhost:8091/sign_auth?to_sign=${encodeURIComponent(stringToSign)}`
                                            + `&datetime=${encodeURIComponent(signatureDateTime)}`
                                            + `&canonicalRequest=${encodeURIComponent(canonicalRequest)}`, {noAuth:true} as any
                                        )
                                        .then(response => checkFetchError(response))
                                        .then(response => response.text() as Promise<string>),
                                        */

                      fetch(
                        `/api/Pages/uploadSignature?to_sign=${stringToSign}` +
                          `&datetime=${signatureDateTime}` +
                          `&canonical_request=${encodeURIComponent(canonicalRequest)}`,
                      )
                        .then((response) => checkFetchError(response))
                        .then((response) => response.text() as Promise<string>),
                    ]).then(([/*mine, */ nodetest]) => {
                      /*
                                            if (mine != nodetest) {
                                                throw 'big problem';
                                            }
                                            */

                      return nodetest;
                    });
                  },

                  /*
                                //signerUrl:'http://localhost:8091/sign_auth',
                                signerUrl: '/api/Pages/uploadSignature',
    
                                sendCanonicalRequestToSignerUrl: true,
    
                                signHeaders: {
                                    Authorization: 'Bearer ' + JWT,
                                    workspace: currentWorkSpace
                                },
                                */

                  cloudfront: false,
                  logging: false,
                  computeContentMd5: true,
                  cryptoMd5Method: (d) => btoa(sparkMD5.ArrayBuffer.hash(d, true)),
                  cryptoHexEncodedHash256: sha256,
                }),
              ),
          ]);
        })
        .then(([pageHolderId, uploadOptions, uploader]) => {
          //we want files promises to be resolved sequentially so that page ordering is correct
          // so can't run everything in parallel rather
          //a) setup all the pages to upload to s3
          //b) then SEQUENTIALLY call finalize on each page

          //Promise.all(_.map(files, (file, addFileOrder) =>

          const files = _.sortBy(filesUnOrdered, (f) => f.name);

          const filesWithOrder = _.map(files, (file, addFileOrder) => {
            console.log(' Fiel', file);
            const ext = file.name && file.name.split('.').pop();
            if (!ext) throw 'cannot upload file without extension';

            let totalUploaded: Number = undefined;

            const upLoadPromise: PromiseLike<{
              pageId: string;
              totalUploaded: Number;
            }> = fetch(`/api/Pages/newpageid/${encodeURIComponent(ext)}`)
              .then((response) => checkFetchError(response))
              .then((response) => response.json() as Promise<NewPageDirectModel>)
              .then((newpageReq) => {
                return uploader
                  .add({
                    file: file,
                    name: newpageReq.keyForDirectUpload,
                    progress: (percent, stats) => {
                      //console.log('Progress', percent, stats);
                      if (uploadWaitBox) {
                        setTimeout(
                          () =>
                            dispatch(
                              ensureWaitBox().setProgress(uploadWaitBox, {
                                status:
                                  stats &&
                                  `${readableBytes(stats.totalUploaded)} of ${readableBytes(stats.fileSize)} @ ${stats.readableSpeed}/s)`,
                                percent: (percent || 0) * 100,
                              }),
                            ),
                          10,
                        );
                      }
                    },
                    complete: (xhr, awsObjectKey, stats) => {
                      totalUploaded = stats && stats.totalUploaded;
                      console.log(
                        `fileUpload s3 Complete! ${file.name} ->${totalUploaded} bytes -> ${newpageReq.keyForDirectUpload}`,
                      );
                    },
                    error: (mssg) => {
                      console.error('Error', mssg);
                    },
                    paused: () => console.log('s3 upload Paused'),
                    pausing: () => console.log('s3 upload Pausing'),
                    resumed: () => console.log('s3 upload Resumed'),
                    cancelled: () => console.log('s3 upload Cancelled'),
                    started: (fileKey) => console.log('fileUpload s3 Started', file.name, fileKey),
                    uploadInitiated: (s3Id) => console.log('Upload Initiated', s3Id),
                    warn: (mssg) => {
                      console.log('Warning', mssg);
                      uploader.cancel(`${uploadOptions.bucket}/${newpageReq.keyForDirectUpload}`);
                    },
                  })
                  .then((anydata) => {
                    return {
                      pageId: newpageReq.id,
                      totalUploaded,
                    };
                  });
              });

            return { upLoadPromise, file, addFileOrder };
          });

          // Parallel uploads: process all files simultaneously instead of sequentially
          return Promise.all(
            filesWithOrder.map((fileAndOrder) => {
              const { upLoadPromise, file, addFileOrder } = fileAndOrder;

              return upLoadPromise
                .then(({ pageId, totalUploaded }) => {
                  console.log(`fileUpload finalize ${file.name} -> ${totalUploaded} bytes `);

                  return fetch(
                    `api/pages/finalizeWithOriginal?docId=${encodeURIComponent(pageHolderId || '')}` +
                      `&order=${order + addFileOrder}` +
                      `&uploadSize=${totalUploaded}`,
                    {
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify([{ pageId, originalPageName: file.name }]),
                    },
                  );
                })
                .then((response) => checkFetchError(response))
                .then((response) => response.json() as PromiseLike<PagesEffectedModel>)
                .then((response) => {
                  console.log(`Done fileUpload finalize ${file.name} `);

                  if (response.effectedPageIds.length != 1) {
                  }

                  //assuming there will be only one effeccted page
                  response.effectedPageIds[0] &&
                    setTimeout(() => dispatch(_mine.processPage(response.effectedPageIds[0])));

                  //this is debounced so don't send it
                  dispatch(
                    _mine.handleReceivedPagesEffectedModel(response, true, incKeepTrack()),
                  );

                  return true;
                });
            }),
          ).then(() => true);
        })
        .then(() => {
          return true;
        });

      const waitPromise = dispatch(
        ensureWaitBox().InitWait('uploading data', uploadNewPagesPromise),
      );
      uploadWaitBox = waitPromise.waitId;
    };
  }

  addPagesAzure(filesUnOrdered: File[], order?: number) {
    return async (dispatch, getState) => {
      const _mine = this;

      let uploadWaitBox: string = null;

      await dispatch(ensureWorkpace().loadChunkUploadOptions());

      await new Promise((r) => setTimeout(r, 100));

      const { chunkUpLoadOptionsAsync } = ensureWorkpace().getCurrentState(getState());

      if (!(chunkUpLoadOptionsAsync && chunkUpLoadOptionsAsync.result)) {
        throw 'upload options not initialized';
      }

      const { activeDoc } = _mine.myDocsHelper.getmyState(getState());
      if (!activeDoc) throw 'no active document';

      if (typeof order === 'undefined') {
        order = (activeDoc.pages || []).length;
      }

      const files = _.sortBy(filesUnOrdered, (f) => f.name);

      let addFileOrder = -1;
      console.log(`Starting to upload ${files.length} files`);
      for (const file of files) {
        addFileOrder++;
        const ext = file.name && file.name.split('.').pop();
        if (!ext) throw 'cannot upload file without extension';
        console.log(
          `Current file number to upload is ${addFileOrder} which is the file ${file.name}`,
        );

        var newPageResponse;
        newPageResponse = await fetch(`/api/Pages/newpageid/${encodeURIComponent(ext)}`);
        await checkFetchError(newPageResponse);
        newPageResponse = (await newPageResponse.json()) as NewPageDirectModel;
        const pageId = newPageResponse.id;
        console.log(`Got the new page id ${pageId} for the file ${file.name}`);

        var sasUrl;
        sasUrl = await fetch(
          `/api/Pages/getSasUrl?blobName=${encodeURIComponent(newPageResponse.keyForDirectUpload)}`,
        );
        sasUrl = await sasUrl.text();
        console.log(`Got the sas url ${sasUrl} for the file ${file.name}`);

        const blockBlobClient = new BlockBlobClient(sasUrl);
        const uploadNewPagesPromise = blockBlobClient
          .uploadData(file, {
            blockSize: 4 * 1024 * 1024, // 4MB blocks
            concurrency: 20, // Optional. Default value is 5
            onProgress: (progress) => {
              const percent = progress.loadedBytes / file.size;
              const readableSpeed = `${(progress.loadedBytes / 1024 / 1024).toFixed(2)} MB/s`;

              const statusMessage = `${readableBytes(progress.loadedBytes)} of ${readableBytes(file.size)} @ ${readableSpeed}`;
              const percentComplete = (percent || 0) * 100;

              console.log(`Status: ${statusMessage}, Percent Complete: ${percentComplete}%`);

              if (uploadWaitBox) {
                setTimeout(
                  () =>
                    dispatch(
                      ensureWaitBox().setProgress(uploadWaitBox, {
                        status: statusMessage,
                        percent: percentComplete,
                      }),
                    ),
                  10,
                );
              }
            },
          })
          .then(
            (response) => {
              console.log(
                `Uploaded the file ${file.name} to the blob ${newPageResponse.keyForDirectUpload}`,
              );
              console.log(`The returned etag was: ${response.etag}`);
              return true; // Indicate that the upload was successful
            },
            (error) => {
              console.error(
                `Error uploading the file ${file.name} to the blob ${newPageResponse.keyForDirectUpload}`,
                error,
              );
              return false; // Indicate that the upload failed
            },
          );

        const waitPromise = dispatch(
          ensureWaitBox().InitWait('uploading data', uploadNewPagesPromise),
        );
        uploadWaitBox = waitPromise.waitId;

        const uploadBlobResponse = await uploadNewPagesPromise;

        let finalizeResponse;
        finalizeResponse = await fetch(
          `api/pages/finalizeWithOriginal?docId=${encodeURIComponent(activeDoc.id || '')}` +
            `&order=${order + addFileOrder}` +
            `&uploadSize=${file.size.toString()}`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([{ pageId, originalPageName: file.name }]),
          },
        );
        await checkFetchError(finalizeResponse);
        finalizeResponse = (await finalizeResponse.json()) as PagesEffectedModel;
        console.log(`Finilized successfully the file ${file.name}`);
        console.log(`Received response: ${finalizeResponse}`);

        //assuming there will be only one effeccted page
        finalizeResponse.effectedPageIds[0] &&
          setTimeout(() => dispatch(_mine.processPage(finalizeResponse.effectedPageIds[0])));

        //this is debounced so don't send it
        dispatch(_mine.handleReceivedPagesEffectedModel(finalizeResponse, true, incKeepTrack()));
      }
    };
  }

  //need to debouce as when we are scanining we dont want too many updates
  private deboucedPageUpdates(
    model: PagesEffectedModel,
    setActivepage?: boolean,
    keeptrack?: number,
  ) {
    const thunk: any = (dispatch, getState) => {
      if (typeof keeptrack !== 'undefined') {
        console.debug(`deboucedPageUpdates effectedtracked :${keeptrack}`);
      }

      if (model.effectedPageIds.length == 0) throw 'failed to add pages';

      const _mine = this;
      const { activeDoc, docsAsync } = _mine.myDocsHelper.getmyState(getState());
      if (!activeDoc) throw 'no active document';

      if (!docsAsync || !docsAsync.result) throw 'no doc list';

      let existingPages = activeDoc.pages || [];

      let newPagesList = _.clone(model.pageHolder.pages);

      if (activeDoc.id != model.pageHolder.id) {
        //we are in batch processing mode and the newPagelist contains all the pages in the current batch.

        //so from all newDocuments remove any page that doesnot exist in the new list
        const newPageListIds = _.map(newPagesList, (p) => p.id);

        _.each(docsAsync.result, (doc) => {
          if (doc.pages) {
            doc.pages = _.filter(doc.pages, (page) => _.includes(newPageListIds, page.id));
          }
        });

        //remove from the newPageList any page that is included in the NON active document
        const nonActiveDocs = _.filter(
          docsAsync.result,
          (doc) => doc.newdocId != activeDoc.newdocId,
        );
        const pagesIdsAlreadyAccountedFor = _.flatMap(nonActiveDocs, (doc) =>
          _.map(doc.pages || [], (page) => page.id),
        );

        newPagesList = _.filter(
          newPagesList,
          (page) => !_.includes(pagesIdsAlreadyAccountedFor, page.id),
        );
      }

      //if page id has not changed Don't bother changing the paths, so that the pages don't redraw
      _.each(newPagesList, (p) => {
        const existing = _.find(existingPages, (exp) => exp.id == p.id);
        if (existing && p.pageType == existing.pageType) p.path = existing.path;
      });

      const done = Promise.resolve(
        dispatch(this.myDocsHelper.updateActiveDocumentPages(Promise.resolve(newPagesList))),
      );

      return setActivepage
        ? done
            .then(() => new Promise((r) => setTimeout(r, 100)))
            .then(() => dispatch(_mine.setActivePage(model.effectedPageIds[0])))
        : done;
    };

    /*
        thunk.meta = {
            debounce: {
                time: 500,
                key: 'UPDATE_EFFECTIVE_PAGES'
            }
        };
        */
    return thunk;
  }

  _lastModifiedTimeForDoc: {
    docId: string;
    modified: moment.Moment;
  } = null;

  private handleReceivedPagesEffectedModel(
    model: PagesEffectedModel,
    setActivepage?: boolean,
    keeptrack?: number,
  ) {
    return (dispatch, getState) => {
      if (typeof keeptrack !== 'undefined') {
        console.debug(`handleReceivedPagesEffectedModel effectedtracked :${keeptrack}`);
      }

      if (!model.effectedPageIds || model.effectedPageIds.length == 0) {
        console.debug('no pages effected');
        return;
      }

      const _mine = this;

      const newDocModified = moment(model.pageHolder.modified);

      if (
        _mine._lastModifiedTimeForDoc &&
        _mine._lastModifiedTimeForDoc.docId == model.pageHolder.id &&
        newDocModified < _mine._lastModifiedTimeForDoc.modified
      ) {
        console.debug(
          `IGNORING OLDER effectivepages:${newDocModified} <  ${_mine._lastModifiedTimeForDoc}   `,
        );
        return Promise.resolve();
      }

      _mine._lastModifiedTimeForDoc = {
        docId: model.pageHolder.id,
        modified: newDocModified,
      };

      return dispatch(_mine.deboucedPageUpdates(model, setActivepage, keeptrack));
    };
  }

  //this is normally called when image is expired
  handleFailedImageLoad(pageId: string) {
    console.log(`handleFailedImageLoad: ${pageId}`);
    return (dispatch, getState) => {
      const { activeDoc } = this.myDocsHelper.getmyState(getState());
      if (!activeDoc) throw 'no active document';

      const _mine = this;

      const pageThatFailed = _.find(
        activeDoc.pages || [],
        (p) => p.id == pageId && p.pageType == null,
      );

      if (!pageThatFailed) {
        console.debug(`no displayable page ${pageId}`);
        return Promise.resolve();
      }

      return fetch(
        `/api/pages/refreshExpiration/${encodeURIComponent(pageId)}?docid=${encodeURIComponent(activeDoc.id)}&path=${encodeURIComponent(pageThatFailed.path)}`,
      )
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<PagesEffectedModel>)
        .then((response) => {
          return dispatch(_mine.handleReceivedPagesEffectedModel(response, false, incKeepTrack()));
        });
    };
  }

  processPage(pageId: string) {
    return processLongPoll<IListPagesState, PagesEffectedModel>(
      async (dispatch, getState) => {
        console.log(`processPage called for ${pageId}`);
        const { activeDoc } = this.myDocsHelper.getmyState(getState());
        if (!activeDoc) throw 'no active document';

        const unProcessedPage = _.find(
          activeDoc.pages || [],
          (p) => p.id == pageId && !!p.pageType && p.pageType != PageImageTypeModel.nonweb,
        );

        if (!unProcessedPage) {
          console.debug(`processPage page ${pageId} no longer needs processing`);
          return;
        }

        const response = await getResponce<PagesEffectedModel>(
          fetch(
            `/api/pages/process/${activeDoc.id}${activeDoc.id ? '/' : ''}${encodeURIComponent(pageId)}`,
          ),
        );
        dispatch(this.handleReceivedPagesEffectedModel(response, false, incKeepTrack()));
        await new Promise((r) => setTimeout(r, 100));

        const pageInQuestion =
          response &&
          response.pageHolder &&
          response.pageHolder.pages &&
          _.find(response.pageHolder.pages, (p) => p.id == pageId || p.originalId == pageId);
        if (pageInQuestion) {
          //if (pageInQuestion.pageType == PageImageTypeModel.unprocessed || pageInQuestion.pageType == PageImageTypeModel.processing)
          if (!pageInQuestion.pageType || PageImageTypeModel.nonweb == pageInQuestion.pageType) {
            console.log(`processPage completed processing ${pageId}`);
          } else if (pageInQuestion.offLineProcessingOnly) {
            console.log(`processPage marked for off line processing ${pageId}`);
          } else {
            throw { Reason: 'still_processing' };
          }
        } else {
          throw `processPage page ${pageId} no longer found`;
        }
      } /* Dee: commenting out the messaging part  , 'pagesUpdated', (effectedPages, dispatch, getState) => {
                console.log('processPage messaging received', pageId);

                const { activeDoc } = this.myDocsHelper.getmyState(getState());

                dispatch(this.handleReceivedPagesEffectedModel(effectedPages, false, incKeepTrack()));

                if (!(activeDoc && activeDoc.pages && _.find(activeDoc.pages, p => p.id == pageId))) {
                    throw 'page no longer exists';
                }

                const pageInQuestion = effectedPages && effectedPages.pageHolder && effectedPages.pageHolder.pages
                    && _.find(effectedPages.pageHolder.pages, p => p.id == pageId);

                if (pageInQuestion)
                    console.log('processPage messaging pageType', pageId, pageInQuestion.pageType);
                else
                    console.log('processPage messaging no pageinQuestion', pageId);


                if (null == pageInQuestion || !(null == pageInQuestion.pageType || pageInQuestion.pageType == PageImageTypeModel.nonweb)) {
                    console.log('processPage page not yet rendered', pageId);
                    throw { continueWatch: true };
                }


                return true;
            }*/,
    );
  }
}

export class ListDocumentPagesHelper extends ListPagesHelper<EditableDocument> {
  constructor(
    storeKeys: () => string[],
    listDocsHelper: ListDocsHelper,
    options?: PageListOptions,
  ) {
    super(storeKeys, listDocsHelper, options);
  }
}
