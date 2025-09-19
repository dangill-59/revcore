import * as _ from 'lodash';

import { IListPageHoldersState, ListPageHoldersHelper } from '../listDocuments/reducerHelper';
import { IListPagesState, ListPagesHelper } from '../listPages/reducerHelper';
import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PageImageModel } from '../../generated/PageImageModel';
import ReducerBase from 'base/baseReducer';
import { ScanBatchModel } from '../../generated/ScanBatchModel';
import { checkFetchError } from 'base/asyncLoader';

type CartPositionSpec = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type IListScanbatchesState = IListPageHoldersState<ScanBatchModel>;

export interface ICartsState {
  readonly pageListState: IListPagesState;
  readonly cartListState: IListScanbatchesState;

  //is the carts Model visible
  readonly cartVisible: boolean;

  //physical location and dimention of the cart Model
  readonly cartPosition: CartPositionSpec;
}

type myActions = {
  pageListActions;
  cartListActions;

  showCart: (show: boolean) => boolean;
  updatePosition: (value: CartPositionSpec) => CartPositionSpec;
};

class cartsReducer extends ReducerBase<ICartsState, myActions> {
  readonly allCartsList = new ListPageHoldersHelper<ScanBatchModel>(() => [
    this.getMyNameinStore(),
    'cartListState',
  ]);

  readonly pagesList = new ListPagesHelper<ScanBatchModel>(
    () => [this.getMyNameinStore(), 'pageListState'],
    this.allCartsList,
    {
      allowDelete: true,
    },
  );

  createActionList() {
    return {
      pageListActions: this.pagesList.createActionList(),
      cartListActions: this.allCartsList.createActionList(),

      showCart: (show: boolean) => show,

      updatePosition: (value: CartPositionSpec) => value,
    };
  }

  reducers() {
    const _mine = this;

    return {
      cartPosition: handleAction(
        this._myActions.updatePosition,
        (state, action) => {
          if (!action.payload) return this.getPersistedData('cartPosition');

          this.persistData('cartPosition', action.payload);
          return action.payload;
        },
        null,
      ),

      cartVisible: handleAction(this._myActions.showCart, (state, action) => action.payload, null),

      cartListState: this.allCartsList.getReducers(this._myActions.cartListActions),

      pageListState: this.pagesList.getReducers(this._myActions.pageListActions),
    };
  }

  showCart = (show: boolean) => this._myActions.showCart(show);

  updateCartSize(height: number, width: number) {
    return (dispatch, getState) => {
      const { cartPosition } = this.getCurrentState(getState());

      dispatch(this._myActions.updatePosition(_.assign({}, cartPosition, { width, height })));
    };
  }

  updateCartLocation(x: number, y: number) {
    return (dispatch, getState) => {
      const { cartPosition } = this.getCurrentState(getState());

      dispatch(this._myActions.updatePosition(_.assign({}, cartPosition, { x, y })));
    };
  }

  _cartsLoadingPromie: Promise<ScanBatchModel[]> = null;
  initializeCarts(reset?: boolean) {
    return (dispatch, getState) => {
      const _mine = this;
      const { docsAsync } = this.allCartsList.getmyState(getState());

      if (reset || !this._cartsLoadingPromie || (docsAsync && docsAsync.error)) {
        //init position
        dispatch(this._myActions.updatePosition(null));

        //The activecart doesn't need to be saved is just a new cart
        const activeCart = { name: 'temporary' } as ScanBatchModel;

        _mine._cartsLoadingPromie = fetch('/api/carts')
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as PromiseLike<ScanBatchModel[]>)
          .then((response) => _.concat(response, [activeCart]));

        dispatch(this.allCartsList.initialize(this._cartsLoadingPromie))
          .then(() => new Promise((r) => setTimeout(r, 100)))
          .then(() => {
            dispatch(_mine.allCartsList.setActiveDoc(activeCart));
          });
      }

      return Promise.resolve(_mine._cartsLoadingPromie);
    };
  }

  addPages(pages: PageImageModel[]) {
    return (dispatch, getState) => {
      const _mine = this;
      Promise.resolve().then(() => {
        const { activeDoc } = _mine.allCartsList.getmyState(getState());
        if (!activeDoc) throw 'no default cart selected';

        const existingpageIds = _.map(activeDoc.pages || [], (p) => p.id);
        const pagesToAdd = _.filter(pages, (p) => !_.includes(existingpageIds, p.id));

        const newPages = _.concat(activeDoc.pages || [], pagesToAdd);

        dispatch(_mine.allCartsList.updateActiveDocumentPages(Promise.resolve(newPages)));
      });
    };
  }
}

export default () => cartsReducer.getInstance(cartsReducer, 'carts');
