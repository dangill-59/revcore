import * as _ from 'lodash';

import { combineActions, createActions, handleAction, handleActions } from 'redux-actions';

import ReducerBase from 'base/baseReducer';
import { combineReducers } from 'redux';

export interface IVideoUrl {
  thumbnail: string;
  playURL: string;
  order?: number;
}

export interface IOrderedFile extends File {
  order?: number;
  preview?: string;
}

export function isOrderedFile(arg: any): arg is IOrderedFile {
  return arg.size !== undefined;
}

export function isVideoUrl(arg: any): arg is IVideoUrl {
  return arg.playURL !== undefined;
}

interface IGalleryState {
  newFiles: IOrderedFile[];
  lightBoxOpen: boolean;
  currentImageDetailsForEdit?: {};
  currentSelectedImageIndex: number;
}

export interface IImageEditor {
  updatePath: string;
  image: any;
}

class GalleryReducers extends ReducerBase<IGalleryState> {
  createActionList() {
    return {
      addFiles: (files: IOrderedFile[], order: number) => {
        if (files) {
          _.each(files, (f) => {
            f.order = order++;
          });
        }

        return files;
      },

      //if called with null clears all files
      clearFile: (droppedImagePath) => droppedImagePath,

      updateFileList: (req) => req,

      showLightBox: (open) => open,

      navigate: (goNext, totalImages) => ({ goNext: goNext, totalImages: totalImages }),

      selectImage: (index) => index,

      showImageEditor: (forImage: any) => forImage,
    };
  }

  addFiles = (files: IOrderedFile[], order: number) => this._myActions.addFiles(files, order);

  updateFileList = (files: File[]): any => this._myActions.updateFileList(files);

  clearFile = (droppedImagePath?: string) => this._myActions.clearFile(droppedImagePath);

  showLightBox = (open: boolean) => this._myActions.showLightBox(open);
  navigate = (goNext: boolean, totalImages: number) =>
    this._myActions.navigate(goNext, totalImages);
  selectImage = (index: number) => this._myActions.selectImage(index);

  showImageEditor = (forImage: IImageEditor) => this._myActions.showImageEditor(forImage);

  reducers() {
    let fileHandlers = {};
    fileHandlers[this._myActions.addFiles.toString()] = (state, action) =>
      _.concat(state, action.payload);

    fileHandlers[this._myActions.updateFileList.toString()] = (state, action) => action.payload;

    fileHandlers[this._myActions.clearFile.toString()] = (state, action) => {
      const droppedImagePath = action.payload;

      if (typeof droppedImagePath !== 'undefined') {
        const index = _.findIndex(state, (image) => (image as any).imagePath == droppedImagePath);

        if (-1 == index) return state;

        let ret = _.clone(state);
        window.URL.revokeObjectURL(ret[index].preview);
        ret.splice(index, 1);
        return ret;
      } else {
        _.each(state, (file) => window.URL.revokeObjectURL(file.preview));
        return [];
      }
    };

    let navigationHandlers = {};

    navigationHandlers[this._myActions.selectImage.toString()] = (state, action) => action.payload;

    navigationHandlers[this._myActions.navigate.toString()] = (state, action) => {
      const { goNext, totalImages } = action.payload;

      if (goNext) {
        if (state + 1 < totalImages) return state + 1;
      } else {
        if (state > 0) return state - 1;
      }

      return state;
    };

    return {
      newFiles: handleActions(fileHandlers, []),
      lightBoxOpen: handleAction(
        this._myActions.showLightBox,
        (state, action) => !!action.payload,
        false,
      ),
      currentSelectedImageIndex: handleActions(navigationHandlers, 0),

      currentImageDetailsForEdit: handleAction(
        this._myActions.showImageEditor,
        (state, action) => action.payload,
        null,
      ),
    };
  }
}

export default () => GalleryReducers.getInstance(GalleryReducers, 'gallery');
