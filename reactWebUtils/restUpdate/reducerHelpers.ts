//describes functionality to update a object using REST controller
import * as _ from 'lodash';

import ensureGallery, {
  IOrderedFile,
  IVideoUrl,
  isOrderedFile,
  isVideoUrl,
} from 'gallery/gallery.reducers';
import { handleAction, handleActions } from 'redux-actions';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { combineReducers } from 'redux';
import { reducerHelperBase } from 'base/baseReducer';

export interface IVideoUrl {
  thumbnail: string;
  playURL: string;
  order: number;
}

export interface IOrderedFile extends File {
  order: number;
}

export interface IRestHelper {
  updateProduct(product: any): any;
  updateProductDetails(key: string, value: any): any;
  submitProductAsync(): (dispatch: any, getState: any) => Promise<string>;
  uploadImages(objectId: string, files: File[]): Promise<any>;
  deleteImages(objectId: string, imagePaths: string[]): Promise<any>;
  addVideo(video: IVideoUrl): any;
  deleteProductAsync();
  options: IRestHelperOptions<any>;
}

export interface IRestHelperOptions<T> {
  prepareProductForUpdateDelegate?: (input: T) => T;
  beforeSubmitDelegate?: (input: T) => Promise<T>;
  hasImages?: boolean;
  hasVideos?: boolean;
  allowsDelete?: boolean;
}

export interface IResthelperState<T> {
  editObjectAsync: IAsyncResult<T>;
  savingAsync: IAsyncResult<string>;

  //if this is null means images not supported
  uploadingImagesAsync?: IAsyncResult<any>;
}

export class RestHelper<T>
  extends reducerHelperBase<IResthelperState<T>, any>
  implements IRestHelper
{
  public readonly options: IRestHelperOptions<T>;

  private readonly _restEndPoint: string;

  constructor(restEndPoint: string, storeKeys: () => string[], options?: IRestHelperOptions<T>) {
    super(storeKeys);
    this.options = options || {};
    this._restEndPoint = restEndPoint;
  }

  createActionList() {
    return {
      updateProduct: [
        (productPromise?: Promise<any>) => {
          if (!productPromise) return null;

          return productPromise;
        },
        (productPromise) => ({ Async: !!productPromise }),
      ],

      //updating a key (like name/description) of the currentProduct
      updateProductDetails: (key: string, value: any) => ({ key: key, value: value }),

      submitProduct: [(submitPromise) => submitPromise, (_) => ({ Async: true })],

      uploadImages: [
        (objectId: string, files: any[]): Promise<boolean> => {
          const order = files && files.length > 0 ? files[0].order : 65000;

          var data = new FormData();
          _.each(files, (f) => data.append('file', f));

          return fetch(this._restEndPoint + '/images/' + objectId + '?order=' + order.toString(), {
            method: 'post',
            body: data,
          }).then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return true;
          });
        },
        (_) => ({ Async: true }),
      ],
    };
  }

  private _currentUpdatePromiseResolver: () => any = null;
  /**
   * @param product send "new" for new object
   */
  updateProduct = (id?: string) => {
    const me = this;
    return (dispatch, getState): Promise<T> => {
      if (!id) return dispatch(me._myActions.updateProduct(null));

      const productPromise =
        'new' == id
          ? Promise.resolve({})
          : fetch(me._restEndPoint + '/' + id).then(function (response) {
              if (!response.ok) {
                throw Error(response.statusText);
              }
              return response.json();
            });
      dispatch(
        me._myActions.updateProduct(
          productPromise.then((product) => {
            return _.assign(
              {},
              product,
              me.options.prepareProductForUpdateDelegate
                ? me.options.prepareProductForUpdateDelegate(product)
                : {},
            );
          }),
        ),
      );

      return new Promise((resolve) => {
        me._currentUpdatePromiseResolver = resolve;
      });
    };
  };

  updateProductDetails = (key: string, value: any) =>
    this._myActions.updateProductDetails(key, value);

  addVideo = (video: IVideoUrl) => {
    return (dispatch, getState) => {
      if (!this.options.hasVideos || !this.options.hasImages) {
        console.warn('does not support images or video');
        return false;
      }

      const toSaveAsync = this.getCurrentState(getState).editObjectAsync;
      if (!toSaveAsync || !toSaveAsync.result) {
        console.error('no object to save');
        throw 'no object to save';
      }
      const currentImages = ((toSaveAsync.result || {}) as any).images;

      if (!currentImages) {
        console.warn('images not initialized');
        return false;
      }

      const newImages = _.clone(currentImages);
      newImages.push({
        isVideo: true,
        imagePath: video.thumbnail,
        videoURL: video.playURL,
        order: video.order,
      });

      return dispatch(this.updateProductDetails('images', newImages));
    };
  };

  deleteProductAsync = () => {
    return (dispatch, getState) => {
      const toSaveAsync = this.getCurrentState(getState).editObjectAsync;
      if (!toSaveAsync || !toSaveAsync.result) {
        console.error('no object to save');
        throw 'no object to save';
      }
      const toSave = toSaveAsync.result as any;

      if (confirm('Are you sure you want to delete this ?')) {
        fetch(this._restEndPoint + '/' + toSave.id, {
          method: 'delete',
        }).then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          location.reload();
        });
      }
    };
  };

  submitProductAsync = () => {
    return (dispatch, getState): Promise<string> => {
      const toSaveAsync = this.getCurrentState(getState).editObjectAsync;
      if (!toSaveAsync || !toSaveAsync.result) {
        console.error('no object to save');
        throw 'no object to save';
      }
      const toSave = toSaveAsync.result as any;

      const { newFiles } = ensureGallery().getCurrentState(getState());

      //ensure image order
      if (toSave.images) {
      }

      const preparePromise = this.options.beforeSubmitDelegate
        ? this.options.beforeSubmitDelegate(toSave)
        : Promise.resolve(toSave);

      const submitPromise = preparePromise
        .then((product) => {
          const totalFilesSize = newFiles ? _.sumBy(newFiles, (f) => f.size) : 0;
          if (totalFilesSize > 29 * 1024 * 1024)
            throw (
              'Please limit new files to 29 MB. Current size is ' +
              ((totalFilesSize * 1.0) / (1024 * 1024)).toFixed(2) +
              ' MB'
            );

          return product;
        })
        .then((product) =>
          fetch(this._restEndPoint, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          }),
        )
        .then(function (response) {
          if (!response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
              return response.json().then((err) => {
                throw Error(response.statusText + ' :' + (err || {}).Message);
              });
            } else {
              throw Error(response.statusText);
            }
          }
          return response.text();
        });
      const me = this;

      return dispatch(this._myActions.submitProduct(submitPromise))
        .then((response) => {
          if (response.error) throw response.error;

          if (me.options.hasImages) {
            const productId = response.payload.result;

            //todo: catch upload errors

            return (
              (newFiles || []).length == 0
                ? Promise.resolve()
                : dispatch(me._myActions.uploadImages(productId, newFiles))
            ).finally((_) => {
              //dispatch(storeActions.updateProduct(null));
              //dispatch(storeActions.showProduct(productId));
            });
          }

          return response;
        })
        .then((_) => {
          dispatch(me._myActions.updateProduct(null));
          if (me._currentUpdatePromiseResolver) me._currentUpdatePromiseResolver();
        }) as Promise<any>;
    };
  };

  uploadImages = (objectId: string, files: File[]): Promise<any> =>
    this._myActions.uploadImages(objectId, files);

  deleteImages = (objectId: string, imagePaths: string[]): any => {
    const me = this;
    return (dispatch, getState): Promise<any> => {
      return fetch(this._restEndPoint + '/images/' + objectId, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imagePaths),
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          return response.json();
        })
        .then((images) => {
          return dispatch(me.updateProductDetails('images', images));
        });
    };
  };

  protected reducers() {
    let editProductHandlers = {};

    editProductHandlers[this._myActions.updateProductDetails.toString()] = (state, action) => {
      if (!state.result) return state;

      let ret = _.assign({}, state);

      const { key, value } = action.payload;

      //we need to clone the result so tha update will fire
      ret.result = _.clone(_.set(ret.result, key, value));
      return ret;
    };

    editProductHandlers[this._myActions.updateProduct.toString()] = (state, action) =>
      action.payload;

    return {
      editObjectAsync: handleActions(editProductHandlers, null),
      savingAsync: handleAction(
        this._myActions.submitProduct,
        (state, action) => action.payload,
        {},
      ),

      uploadingImagesAsync: handleAction(
        this._myActions.uploadImages,
        (state, action) => (!!this.options.hasImages ? action.payload : null),
        !!this.options.hasImages ? {} : null,
      ),
    };
  }
}
