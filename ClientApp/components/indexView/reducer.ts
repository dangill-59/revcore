import * as _ from 'lodash';

import { IListDocumentsState, ListDocsHelper } from '../listDocuments/reducerHelper';
import { IListPagesState, ListDocumentPagesHelper } from '../listPages/reducerHelper';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PageImageModel } from '../../generated/PageImageModel';
import ReducerBase from 'base/baseReducer';
import { ScanBatchModel } from '../../generated/ScanBatchModel';
import { checkFetchError } from '../../../reactWebUtils/base/asyncLoader';
import ensureCarts from '../carts/reducer';
import ensureProjects from '../projects/reducer';
import { handleAction } from 'redux-actions';

export interface INewDocumentsState {
  readonly newPageListState: IListPagesState;
  readonly newDocsListState: IListDocumentsState;
}

type myActions = {
  newPageListActions;
  newDocumentActions;
};

class newDocReducer extends ReducerBase<INewDocumentsState, myActions> {
  readonly newDocsList = new ListDocsHelper(() => [this.getMyNameinStore(), 'newDocsListState'], {
    restURL: '/api/document',
    persistanceKey: 'batchCapture',
  });

  readonly newPagesList = new ListDocumentPagesHelper(
    () => [this.getMyNameinStore(), 'newPageListState'],
    this.newDocsList,
    {
      allowDelete: true,
    },
  );

  createActionList() {
    return {
      newPageListActions: this.newPagesList.createActionList(),
      newDocumentActions: this.newDocsList.createActionList(),
    };
  }

  reducers() {
    return {
      newPageListState: this.newPagesList.getReducers(this._myActions.newPageListActions),
      newDocsListState: this.newDocsList.getReducers(this._myActions.newDocumentActions),
    };
  }

  initializeWithNewDoc(clearCurrentList?: boolean) {
    return (dispatch, getState) => {
      const _mine = this;

      return Promise.resolve(dispatch(ensureProjects().loadProjects())).then(() => {
        const { activeDoc, docsAsync } = _mine.newDocsList.getmyState(getState());

        if (!clearCurrentList && activeDoc) return activeDoc;
        dispatch(ensureCarts().initializeCarts(true));
        const hasDocList =
          !clearCurrentList && docsAsync && docsAsync.result && docsAsync.result.length > 0;
        return Promise.resolve(hasDocList || dispatch(_mine.newDocsList.initialize()))
          .then(() => new Promise((r) => setTimeout(r, 100)))
          .then(() => dispatch(_mine.newDocsList.ensureActiveDoc(false, true)));
      });
    };
  }

  createDuplicate() {
    return (dispatch, getState) => {
      const { activeDoc } = this.newDocsList.getmyState(getState());
      if (!activeDoc || !activeDoc.pages || activeDoc.pages.length == 0) {
        console.error('no active doc or pages to duplicate');
        return;
      }

      dispatch(this.newDocsList.createNewDoc(null, _.clone(activeDoc.pages)));
    };
  }

  splitDoc() {
    return (dispatch, getState) => {
      const { activePage } = this.newPagesList.getmyState(getState());
      if (!activePage) {
        console.error('no active page');
        return;
      }

      const { activeDoc } = this.newDocsList.getmyState(getState());
      if (!activeDoc || !activeDoc.pages || activeDoc.pages.length < 2) {
        console.error('no active doc or pages to split');
        return;
      }

      const activePageIndex = _.findIndex(activeDoc.pages, (p) => p.id == activePage.id);
      if (activePageIndex < 1) {
        console.error('activePageIndex = ' + activePageIndex + ' nothing to split');
        return;
      }

      const remainingPages = _.take(activeDoc.pages, activePageIndex);
      const newDocPages = _.drop(activeDoc.pages, activePageIndex);

      const _mine = this;

      return dispatch(this.newDocsList.updateActiveDocumentPages(Promise.resolve(remainingPages)))
        .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
        .then(() => dispatch(_mine.newDocsList.createNewDoc(null, newDocPages)));
    };
  }
}

export default () => newDocReducer.getInstance(newDocReducer, 'indexView');
