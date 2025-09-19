import 'react-select/dist/react-select.css';

import * as React from 'react';
import * as _ from 'lodash';
import * as _myQuill from './myQuill.clientOnly';

import { Button, FormControl, FormGroup, Modal } from 'react-bootstrap';
import GalleryEditor, { IEditorOptions } from 'gallery/galleryEditor';
import { IRestHelper, IResthelperState } from './reducerHelpers';

import { Dispatch } from 'redux';
import Select from 'react-select';
import Spinner from 'spinner';
import { createLoaderView } from 'base/asyncLoader';

const myQuill = _myQuill as any;
const ReactQuill = myQuill.ReactQuill;

export interface IEditorProps {
  schema: {
    properties: any;
    required?: string[];
  };

  restHelper: IRestHelper;

  dispatch: any;

  currentProduct: IResthelperState<any>;

  editorOptions?: IEditorOptions;
}

const EditorForm: React.StatelessComponent<IEditorProps> = ({
  schema,
  restHelper,
  dispatch,
  editorOptions,
  currentProduct,
}) => {
  const editObject = currentProduct.editObjectAsync.result || {};

  let isLoading = !!currentProduct.savingAsync.isLoading;
  let loadingPrompt = 'Saving ...';

  if (currentProduct.uploadingImagesAsync) {
    if (!!currentProduct.uploadingImagesAsync.isLoading) {
      isLoading = true;
      loadingPrompt = 'Uploading images ...';
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(restHelper.submitProductAsync());
      }}
    >
      {editorOptions && editorOptions.PreImageComponent && (
        <div>{editorOptions.PreImageComponent}</div>
      )}

      {currentProduct.uploadingImagesAsync && (
        <div style={{ margin: 5 }}>
          <GalleryEditor
            images={editObject.images}
            onImageDelete={
              editObject.id
                ? (images) => dispatch(restHelper.deleteImages(editObject.id, images))
                : null
            }
            onImageReorder={
              editObject.id
                ? (newImages) => dispatch(restHelper.updateProductDetails('images', newImages))
                : null
            }
            onVideoDropped={(video, order) =>
              dispatch(restHelper.addVideo(_.assign({}, video, { order: order })))
            }
            editorOptions={editorOptions}
          />
        </div>
      )}

      {_.keys(schema.properties || {}).map((key, i) => {
        const property = _.assign({ type: 'string', maxLength: 49 }, schema.properties[key]);
        const required = _.includes(schema.required || [], key);
        const myLabel = schema.properties[key].label || key;

        let ControlChildren = null;

        if (property.type == 'html') {
          return (
            <div key={i} style={{ marginBottom: 20 }}>
              {ReactQuill && (
                <ReactQuill
                  value={editObject[key] || ''}
                  placeholder={'enter ' + myLabel}
                  onChange={(value) => dispatch(restHelper.updateProductDetails(key, value))}
                />
              )}
            </div>
          );
        } else if (property.enum) {
          /*
                    if (!editObject[key] && (property.enum || []).length > 0) {
                        dispatch(restHelper.updateProductDetails(key, property.enum[0].id))
                    }
                    */

          return (
            <FormGroup key={i}>
              <Select
                placeholder={'enter ' + myLabel}
                onChange={(e) => {
                  dispatch(restHelper.updateProductDetails(key, e.value));
                }}
                options={(property.enum || []).map((e) => ({ value: e.id, label: e.name }))}
                value={editObject[key] || ''}
                searchable={true}
                clearable={!required}
              />
            </FormGroup>
          );
        } else {
          let compClass = 'input';
          let compType = 'text';

          if (property.type == 'number') {
            compType = 'number';
          } else if (property.maxLength && property.maxLength >= 50) {
            compClass = 'textarea';
          }

          return (
            <FormGroup key={i}>
              <FormControl
                value={editObject[key] || ''}
                onChange={(e: any) => {
                  const g1 = e.target.value;

                  dispatch(restHelper.updateProductDetails(key, g1));
                }}
                placeholder={'enter ' + myLabel}
                required={required}
                componentClass={compClass}
                type={compType}
              >
                {ControlChildren && ControlChildren}
              </FormControl>
            </FormGroup>
          );
        }
      })}

      {editorOptions && editorOptions.PostImageComponent && (
        <div>{editorOptions.PostImageComponent}</div>
      )}

      <div className='text-center buttonBar' style={{ margin: 10 }}>
        <Spinner isLoading={isLoading} prompt={loadingPrompt}>
          {currentProduct.savingAsync.error && (
            <h4 className='text-danger'>{currentProduct.savingAsync.error.toString()}</h4>
          )}

          <Button type='submit' bsStyle='primary'>
            Save
          </Button>
        </Spinner>
      </div>
    </form>
  );
};

const WorksView = createLoaderView<any>();

const Editor: React.StatelessComponent<IEditorProps> = (props) => {
  const { currentProduct } = props;
  return (
    <div>
      {currentProduct.editObjectAsync ? (
        <WorksView asyncResult={currentProduct.editObjectAsync} prompt='Loading ...'>
          <EditorForm {...props} />
        </WorksView>
      ) : (
        <div>Nothing to edit </div>
      )}
    </div>
  );
};

export const ModalEditor: React.StatelessComponent<IEditorProps> = (props) => (
  <Modal
    show={!!(props.restHelper && props.currentProduct && props.currentProduct.editObjectAsync)}
    onHide={() => props.dispatch(props.restHelper.updateProduct(null))}
  >
    <Modal.Header closeButton>
      <Modal.Title>
        {props.currentProduct &&
        props.currentProduct.editObjectAsync &&
        props.currentProduct.editObjectAsync.result &&
        props.currentProduct.editObjectAsync.result.id
          ? 'Update :'
          : 'Create new'}{' '}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>{props.currentProduct && <Editor {...props} />}</Modal.Body>
  </Modal>
);

export default Editor;
