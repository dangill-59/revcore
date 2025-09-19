import * as _ from 'lodash';

import { IMoveableHelper, IMoveableState, rndPosition, rndSize } from './interfaces';
import { handleAction, handleActions } from 'redux-actions';

import { reducerHelperBase } from 'base/baseReducer';

class MoveableReducerHelper
  extends reducerHelperBase<IMoveableState, IMoveableHelper>
  implements IMoveableHelper
{
  constructor(storeKeys: () => string[]) {
    super(storeKeys);
  }

  createActionList() {
    return {
      updatePosition: (position: rndPosition) => position,
      updateSize: (size: rndSize) => size,
    };
  }

  protected reducers() {
    const me = this;
    return {
      position: handleAction(
        this._myActions.updatePosition,
        (state, action) => {
          me.persistData('position', action.payload);
          return action.payload;
        },
        {},
      ),
      size: handleAction(
        this._myActions.updateSize,
        (state, action) => {
          me.persistData('size', action.payload);
          return action.payload;
        },
        {},
      ),
    };
  }

  updatePosition = (position: rndPosition) => this._myActions.updatePosition(position);
  updateSize = (size: rndSize) => this._myActions.updateSize(size);

  loadInitialPosition() {
    return (dispatch, getState) => {
      dispatch(this.updatePosition(this.getPersistedData('position')));
      dispatch(this.updateSize(this.getPersistedData('size')));
    };
  }
}

export default MoveableReducerHelper;
