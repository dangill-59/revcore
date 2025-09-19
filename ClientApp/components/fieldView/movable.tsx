import * as React from 'react';
import * as _ from 'lodash';

import {
  ConnectDragPreview,
  ConnectDragSource,
  ConnectDropTarget,
  DragSource,
  DragSourceSpec,
  DropTarget,
  DropTargetCollector,
  DropTargetSpec,
} from 'react-dnd';
import ensureFieldReducer, { FIELD_HOC_DRAG_TYPE, IFieldViewState } from './reducer';

import { Button } from 'react-bootstrap';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { connect } from 'react-redux';

type ComponentProps = {
  field: ProjectFieldModel;
  fieldsHolder?: FieldsHolder;
  dispatch;
};

type DNDDropProps = {
  connectDropTarget?: ConnectDropTarget;
  isOverCurrent?: boolean;
  isOver?: boolean;
};

type DNDProps = DNDDropProps & {
  connectDragPreview: ConnectDragPreview;
  connectDragSource?: ConnectDragSource;

  isDragging?: boolean;
};

const dropTarget: DropTargetSpec<DNDProps & WithMovabelFieldsProps> = {
  drop(props: DNDProps & ComponentProps, monitor) {
    const hasDroppedOnChild = monitor.didDrop();
    if (hasDroppedOnChild) {
      return;
    }

    const droppedField: ProjectFieldModel = monitor.getItem();

    const { fieldsHolder, field, dispatch } = props;

    if (droppedField.displayName != field.displayName)
      dispatch(
        ensureFieldReducer().setFieldPositionBefore(
          fieldsHolder.settingsKey,
          droppedField.displayName,
          field.displayName,
        ),
      );

    return { done: true };
  },
};

const dropConnector = (connecter, monitor) => ({
  connectDropTarget: connecter.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
});

const DropTargetCreator = DropTarget([FIELD_HOC_DRAG_TYPE], dropTarget, dropConnector);

const dragSource: DragSourceSpec<DNDProps & ComponentProps> = {
  beginDrag(props: ComponentProps) {
    const { field, dispatch } = props;

    //this triggers a redrwa rightaway causing issues
    //dispatch(ensureFieldReducer().setDragging(true));
    setTimeout(() => dispatch(ensureFieldReducer().setDragging(true)), 100);

    return field;
  },
  endDrag(props: ComponentProps) {
    const { dispatch } = props;
    //dispatch(ensureFieldReducer().setDragging(false));
    setTimeout(() => dispatch(ensureFieldReducer().setDragging(false)), 100);
  },
};

const DragSourceCreator = DragSource(FIELD_HOC_DRAG_TYPE, dragSource, (connecter, monitor) => ({
  connectDragSource: connecter.dragSource(),
  connectDragPreview: connecter.dragPreview(),
  isDragging: monitor.isDragging(),
}));

const envelopStyle = {
  border: 'dotted #777 1px',
  lineHeight: '40px',
};

type HideTargetProp = {
  settingsKey: string;
  dispatch;
};

const _HideTarget: React.SFC<DNDDropProps & HideTargetProp> = ({ isOver, connectDropTarget }) =>
  connectDropTarget(
    <div className='text-danger text-center' style={envelopStyle}>
      <i className={`fa fa-eye-slash ${isOver ? 'fa-2x' : ''}`} style={{ height: 25 }}></i> Hide
    </div>,
  );

const HideTarget = DropTarget(
  [FIELD_HOC_DRAG_TYPE],
  {
    drop(props: DNDProps & HideTargetProp, monitor) {
      const droppedField: ProjectFieldModel = monitor.getItem();
      const { dispatch, settingsKey } = props;

      dispatch(ensureFieldReducer().hideField(settingsKey, droppedField.displayName));

      return { done: true };
    },
  },
  dropConnector,
)(_HideTarget);

export interface WithMovabelFieldsProps {
  //the settings key in global state
  settingsKey: string;

  //complete list of fields that are available to be shown
  allFields: ProjectFieldModel[];

  //set by the HOC

  //wrapper so that field can be moved
  fieldsHolder?: FieldsHolder;

  //connected state, with fields to display in correct order
  fieldsToShow?: ProjectFieldModel[];

  moveDisabled?: boolean;
}

type ConnectedProps = {
  myHiddenFields: { [key: string]: boolean };
  mySortOder: { [key: string]: number };
  isDragging?: boolean;
};

type MovedState = { fieldsHolder: FieldsHolder };

export function withMoveFields<P extends WithMovabelFieldsProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  options?: MoveFieldOptions,
): React.ComponentClass<P> {
  const _options = _.assign({ allowHide: true }, options || {});

  class WrappedComponent extends React.Component<
    P & ConnectedProps & { dispatch?: ({}) => void },
    MovedState
  > {
    state = { fieldsHolder: null };

    public componentDidMount() {
      const { dispatch, allFields, settingsKey, moveDisabled } = this.props;
      dispatch(
        ensureFieldReducer().initializeMovable(
          settingsKey,
          _.map(allFields, (f) => f.displayName),
        ),
      );

      this.setState({
        fieldsHolder: new FieldsHolder(settingsKey, moveDisabled),
      });
    }

    public render() {
      const {
        settingsKey,
        myHiddenFields: hiddenFields,
        mySortOder,
        allFields,
        isDragging,
        dispatch,
        moveDisabled,
      } = this.props;

      const { fieldsHolder } = this.state;

      const myHiddenFields = moveDisabled ? {} : hiddenFields;

      let fieldsToShow = _.filter(allFields, (f) => !myHiddenFields[f.displayName]);

      if (!moveDisabled) {
        fieldsToShow = _.sortBy(fieldsToShow, (f) => mySortOder[f.displayName] || 0);
      }

      const newProps = _.assign({}, this.props, { fieldsHolder, fieldsToShow });

      const hiddenCount = (myHiddenFields && _.keys(myHiddenFields).length) || 0;

      return (
        <div>
          <Comp {...newProps} />

          {isDragging && _options.allowHide && (
            <HideTarget settingsKey={settingsKey} dispatch={dispatch} />
          )}

          {hiddenCount > 0 && (
            <div className='text-right' style={{ magrin: 5 }}>
              <Button
                bsStyle='link'
                tabIndex={-1}
                onClick={() => dispatch(ensureFieldReducer().showAllFields(settingsKey))}
              >
                <span>
                  <i className='fa fa-eye'></i> Show hidden indexes{' '}
                </span>
              </Button>
            </div>
          )}
        </div>
      );
    }
  }

  const mapStateToProps = (state, props: WithMovabelFieldsProps) => {
    const { settingsKey, allFields } = props;

    const { hiddenFields, sortOrder, isDragging } = ensureFieldReducer().getCurrentState(state);

    const myHiddenFields = (hiddenFields && hiddenFields[settingsKey]) || {};
    const mySortOder = (sortOrder && sortOrder[settingsKey]) || {};

    return {
      ...props,
      myHiddenFields,
      mySortOder,
      isDragging,
    } as P & ConnectedProps;
  };

  return connect<P & ConnectedProps, { dispatch }, any>(mapStateToProps)(WrappedComponent);
}

export interface MovabelFieldProps {
  connectDragSource?: ConnectDragSource;
  fieldsHolder?: FieldsHolder;
}

class FieldsHolder {
  public readonly settingsKey: string;
  public readonly allowMove: boolean;

  constructor(settingsKey: string, disableMove?: boolean) {
    this.settingsKey = settingsKey;
    this.allowMove = !disableMove;
  }
}

export type MoveFieldOptions = { allowHide?: boolean };

export function moveField<P extends MovabelFieldProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  options?: MoveFieldOptions,
): React.ComponentClass<P> {
  const _mine = this;

  const _options = _.assign({ allowHide: true }, options || {});

  class WrappedComponent extends React.Component<P & DNDProps & { dispatch?: ({}) => void }, {}> {
    public render() {
      const {
        connectDragSource,
        isDragging,
        connectDragPreview,
        connectDropTarget,
        isOverCurrent,
        isOver,
        dispatch,
        fieldsHolder,
      } = this.props;

      const newProps = _.assign({}, this.props, {
        connectDragSource: fieldsHolder && fieldsHolder.allowMove ? connectDragSource : null,
      });

      if (!fieldsHolder) {
        console.warn("fieldshoder not defined. Won't drag field");
        return <Comp {...newProps} />;
      }

      return connectDragPreview(
        connectDropTarget(
          <div style={(fieldsHolder && fieldsHolder.allowMove && { cursor: 'move' }) || {}}>
            {isOver && (
              <div>
                {_options.allowHide && (
                  <div style={{ float: 'left', width: 100 }}>
                    <HideTarget settingsKey={fieldsHolder.settingsKey} dispatch={dispatch} />
                  </div>
                )}
                <div
                  className={`${isOverCurrent ? '' : 'text-muted'} text-center`}
                  style={{ ...envelopStyle, margin: 10, marginLeft: 110 }}
                >
                  ---- move here ----
                </div>
                <div style={{ clear: 'both' }}></div>
              </div>
            )}
            <Comp {...newProps} />
          </div>,
        ),
      );
    }
  }

  //return WrappedComponent;

  const dndConneted = DragSourceCreator(DropTargetCreator(WrappedComponent));

  return connect<{}, { dispatch }, P>((state) => ({}))(dndConneted);
}
