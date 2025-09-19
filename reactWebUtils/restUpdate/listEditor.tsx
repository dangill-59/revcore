import 'react-select/dist/react-select.css';

import * as React from 'react';
import * as _ from 'lodash';

import { IResthelperState, RestHelper } from 'restUpdate/reducerHelpers';
import WorkEditor, { IEditorProps } from './editor';

import { Button } from 'react-bootstrap';
import { Dispatch } from 'redux';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import Select from 'react-select';

export interface IhasIdandName {
  id?: string;
  name?: string;
}

export interface IListEditorProps<T extends IhasIdandName> extends IEditorProps {
  listofWorksAsync: IAsyncResult<T[]>;
  valueFormat?: (value: T) => string;
  onUpdate?: () => void;
}

class ListEditor<T extends IhasIdandName> extends React.Component<IListEditorProps<T>> {
  public componentDidMount() {
    const { currentProduct, listofWorksAsync, restHelper } = this.props;

    const currentID = _.get(currentProduct, 'editObjectAsync.result.id', null);
    if (!currentID) {
      if (listofWorksAsync && listofWorksAsync.result && listofWorksAsync.result.length > 0) {
        let idToEdit = listofWorksAsync.result[0].id;
        if (currentProduct.savingAsync && currentProduct.savingAsync.result) {
          //we might have just saved a product, if the id is in the list select that instead
          if (_.find(listofWorksAsync.result, (w) => w.id == currentProduct.savingAsync.result))
            idToEdit = currentProduct.savingAsync.result;
        }

        this.updateProduct(idToEdit);
      } else this.updateProduct('new');
    }
  }

  protected updateProduct(product: any) {
    const { dispatch, restHelper, onUpdate } = this.props;
    dispatch(restHelper.updateProduct(product)).then(() => {
      if (onUpdate) onUpdate();
    });
  }

  render() {
    const {
      listofWorksAsync,
      currentProduct,
      restHelper,
      schema,
      editorOptions,
      valueFormat,
      dispatch,
    } = this.props;

    const options = _.concat(
      _.map(listofWorksAsync.result, (w) => ({
        value: w.id,
        label: valueFormat ? valueFormat(w) : w.name,
      })),
      [{ value: 'new', label: 'create new' }],
    );

    return (
      <div className='container'>
        <Select
          onChange={(e) => {
            this.updateProduct(e.value);
          }}
          options={options}
          value={_.get(currentProduct, 'editObjectAsync.result.id', 'new')}
          searchable={true}
          clearable={false}
        />

        <hr />

        {currentProduct && (
          <div>
            {restHelper.options.allowsDelete && (
              <div>
                <Button bsStyle='danger' onClick={(_) => dispatch(restHelper.deleteProductAsync())}>
                  <span>Delete this</span>
                </Button>
              </div>
            )}

            <WorkEditor
              schema={schema}
              restHelper={restHelper}
              dispatch={dispatch}
              currentProduct={currentProduct}
              editorOptions={editorOptions}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ListEditor;
