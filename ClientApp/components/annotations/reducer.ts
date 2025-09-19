import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { AnnoDataModel } from '../../generated/AnnoDataModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import ReducerBase from 'base/baseReducer';
import { checkFetchError } from 'base/asyncLoader';

export enum AnnoTools {
  annotate = 1,
  highlight,
  redact,
  clear,
  showOriginal,
  rotateRight,
  rotateLeft,
}

type AnnoTextPosProps = { top: number; left: number; height: number; width: number };
type AnnoTextProps = { text: string; position: AnnoTextPosProps };

export interface IAnnotateState {
  readonly selectedTool: AnnoTools;
  readonly annoDataAsync: IAsyncResult<AnnoDataModel>;

  readonly annoText: AnnoTextProps;

  //The page for whihc we are doing annotations
  readonly annoPageId: string;
}

type myActions = {
  selectTool: (value?: AnnoTools) => AnnoTools;
  updateAnnoData: (pageId: string, value: PromiseLike<AnnoDataModel>) => PromiseLike<AnnoDataModel>;

  setAnnoText: (value?: AnnoTextProps) => AnnoTextProps;
};

class annotateReducer extends ReducerBase<IAnnotateState, myActions> {
  createActionList() {
    return {
      selectTool: (value?: AnnoTools) => value,
      setAnnoText: (value?: AnnoTextProps) => value,
      updateAnnoData: [
        (pageId: string, value: PromiseLike<AnnoDataModel>) => value,
        (pageId: string, value: PromiseLike<AnnoDataModel>) => ({
          Async: true,
          annoPageId: pageId,
        }),
      ],
    };
  }

  reducers() {
    return {
      selectedTool: handleAction(
        this._myActions.selectTool,
        (state, action) => {
          return action.payload;
        },
        null,
      ),

      annoDataAsync: handleAction(
        this._myActions.updateAnnoData,
        (state, action) => {
          return action.payload;
        },
        null,
      ),

      annoPageId: handleAction(
        this._myActions.updateAnnoData,
        (state, action) => {
          const { annoPageId } = action.meta;
          return annoPageId;
        },
        null,
      ),

      annoText: handleAction(
        this._myActions.setAnnoText,
        (state, action) => {
          return action.payload;
        },
        null,
      ),
    };
  }

  checkIfUnMounted(pageId: string) {
    const _mine = this;
    return (dispatch, getState) => {
      //if the last page that we mounted ann view is dismounted unselect the tool
      //this is needed
      setTimeout(() => {
        const { annoPageId } = _mine.getCurrentState(getState());
        if (annoPageId == pageId) dispatch(_mine.selectTool(null));
      }, 1000);
    };
  }

  selectTool(value?: AnnoTools) {
    const _mine = this;
    return (dispatch, getState) => {
      dispatch(_mine._myActions.setAnnoText(null));
      dispatch(_mine._myActions.selectTool(value));
    };
  }

  rotateImage(pageId: string, left: boolean) {
    const _mine = this;
    return (dispatch, getState) => {
      //need to run a render pass first
      setTimeout(() => {
        const saveP = fetch(`/api/annotations/rotate/${encodeURIComponent(pageId)}?left=${left}`)
          .then((response) => checkFetchError(response))
          .then(() => {
            dispatch(_mine.selectTool(null));

            return null;
          });

        dispatch(_mine._myActions.updateAnnoData(pageId, saveP));
      }, 1000);
    };
  }

  loadAnnotations(pageId: string) {
    const saveP = fetch(`/api/annotations/annotate/${encodeURIComponent(pageId)}`)
      .then((response) => checkFetchError(response))
      .then((response) => response.json() as PromiseLike<AnnoDataModel>);

    return this._myActions.updateAnnoData(pageId, saveP);
  }

  updateAnnoText(text: string) {
    const _mine = this;
    return (dispatch, getState) => {
      const { annoText } = this.getCurrentState(getState());
      if (!annoText) return;

      return dispatch(_mine._myActions.setAnnoText(_.assign({}, annoText, { text })));
    };
  }

  initAnnoText(position: AnnoTextPosProps) {
    const _mine = this;
    return (dispatch, getState) => {
      return dispatch(_mine._myActions.setAnnoText({ text: '', position }));
    };
  }

  saveAnnotations(pageId: string, dataUrl: string) {
    const _mine = this;
    return (dispatch, getState) => {
      //Before we save the canvas clear any annoText box
      dispatch(_mine._myActions.setAnnoText(null));

      const annoModel: AnnoDataModel = {
        dataUrl,
      };

      const saveP = fetch(`/api/annotations/annotate/${encodeURIComponent(pageId)}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(annoModel),
      })
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as PromiseLike<AnnoDataModel>);

      dispatch(_mine._myActions.updateAnnoData(pageId, saveP));
    };
  }
}

export default () => annotateReducer.getInstance(annotateReducer, 'annotations');
