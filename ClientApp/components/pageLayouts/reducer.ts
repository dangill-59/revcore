import * as _ from 'lodash';

import { EditableDocument, ListDocsHelper } from '../listDocuments/reducerHelper';

import { IMoveableState } from '../moveable/interfaces';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
/// <reference path="doclistcompacteditor.tsx" />
import ReducerBase from 'base/baseReducer';
import { handleAction } from 'redux-actions';
import moveAbleHelper from '../moveable/reducerHelper';

export type LayoutSelectorProps = {
  listDocsHelper: ListDocsHelper;
  listPagesHelper: ListDocumentPagesHelper;

  //toolbar to show on active page
  ActivePageToolBar?: any;

  //tool bar to show after save button on indexes form
  ExtraSaveButtons?: any;

  //tools bar to show on the right side of pages list
  PageListTools?: any;

  //tool bar to to show next to project select, used for forms processing for now
  ExtraIndexButtons?: any;

  //an overlay that is drawn on to of the page
  PageOverlayView?: React.ComponentType<any>;
};

export interface IPageLayoutsettings {
  readonly moveableImageListState: IMoveableState;
  readonly moveableIndexesState: IMoveableState;

  readonly fieldsWithAutoCarry: { [fieldName: string]: boolean };
  readonly batchModeIndexFieldSize: number;
}

type myActions = {
  moveableImageListActions;
  moveableIndexesActions;
  setAutoCarry: (fieldName: string, setIt: boolean) => { fieldName: string; setIt: boolean };
  updatebatchModeIndexFieldSize: (size: number) => number;
};

class pageLayoutsReducer extends ReducerBase<IPageLayoutsettings, myActions> {
  readonly moveablImageList = new moveAbleHelper(() => [
    this.getMyNameinStore(),
    'moveableImageListState',
  ]);
  readonly moveableIndexes = new moveAbleHelper(() => [
    this.getMyNameinStore(),
    'moveableIndexesState',
  ]);

  createActionList() {
    return {
      moveableImageListActions: this.moveablImageList.createActionList(),
      moveableIndexesActions: this.moveableIndexes.createActionList(),
      setAutoCarry: (fieldName: string, setIt: boolean) => ({ fieldName, setIt }),
      updatebatchModeIndexFieldSize: (size: number) => size,
    };
  }

  reducers() {
    return {
      moveableImageListState: this.moveablImageList.getReducers(
        this._myActions.moveableImageListActions,
      ),
      moveableIndexesState: this.moveableIndexes.getReducers(
        this._myActions.moveableIndexesActions,
      ),

      batchModeIndexFieldSize: handleAction(
        this._myActions.updatebatchModeIndexFieldSize,
        (state, action) => {
          this.persistData('batchModeIndexFieldSize', action.payload);
          return action.payload;
        },
        parseInt(this.getPersistedData('batchModeIndexFieldSize') || 100),
      ),

      fieldsWithAutoCarry: handleAction(
        this._myActions.setAutoCarry,
        (state, action) => {
          const newState = _.clone(state || this.getPersistedData('fieldsWithAutoCarry') || {}) as {
            [fieldName: string]: boolean;
          };

          const payload = action.payload as { fieldName: string; setIt: boolean };
          if (payload.setIt) {
            newState[payload.fieldName] = true;
          } else {
            delete newState[payload.fieldName];
          }

          this.persistData('fieldsWithAutoCarry', newState);
          return newState;
        },
        this.getPersistedData('fieldsWithAutoCarry'),
      ),
    };
  }

  setAutoCarry = (fieldName: string, setIt: boolean) =>
    this._myActions.setAutoCarry(fieldName, setIt);

  updatebatchModeIndexFieldSize = (size: number) =>
    this._myActions.updatebatchModeIndexFieldSize(size);
}

export default () => pageLayoutsReducer.getInstance(pageLayoutsReducer, 'pageLayouts');
