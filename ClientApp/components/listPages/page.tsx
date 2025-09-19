import * as React from 'react';
import * as _ from 'lodash';
import * as filesize from 'filesize';
import * as moment from 'moment';

import {
  CorrectedDimentionProps,
  DRAGTYPE_PAGE,
  IListPagesState,
  ListPagesHelper,
} from './reducerHelper';
import { DragSource, DropTarget } from 'react-dnd';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { NativeTypes } from 'react-dnd-html5-backend';
import { PageHolderModel } from '../../generated/PageHolderModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { PageImageTypeModel } from '../../generated/PageImageTypeModel';
import ensurePrintApp from '../printApp/reducer';

export interface IdropTargetProps {
  listofPagesHelper: ListPagesHelper<PageHolderModel>;
}

export type DnDProps = {
  dispatch;
  pageDropTarget: (any) => any;
  //isDragOverMe: boolean,
  isOverCurrent: boolean;
};

export const DropTargetCreator = DropTarget(
  [DRAGTYPE_PAGE, NativeTypes.FILE],
  {
    drop(props, monitor, component) {
      const hasDroppedOnChild = monitor.didDrop();
      if (hasDroppedOnChild) {
        return;
      }

      const type = monitor.getItemType();
      const item = monitor.getItem();

      var myProps = props as { dispatch } & IdropTargetProps;
      const { dispatch, listofPagesHelper } = myProps;

      //if (pagesArray )

      if (listofPagesHelper === undefined) {
        console.error('listofPagesHelper not set for page drop target');
        return;
      }

      switch (type) {
        case NativeTypes.FILE /*'__NATIVE_FILE__'*/:
          dispatch(listofPagesHelper.addPages(item.files, props && props.orderNumber));
          break;
        case DRAGTYPE_PAGE:
          dispatch(listofPagesHelper.onExistingPagedDropped1(item, props && props.id));
          break;
      }

      return { done: true };
    },
  },

  (connecter, monitor) => ({
    pageDropTarget: connecter.dropTarget(),
    //isDragOverMe: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
);

type StateProps = {
  scale?: number;
};

type ViewProps = PageImageModel &
  DnDProps &
  IdropTargetProps & { PageOverlayView?: React.ComponentType<any> } & {
    connectDragSource: (any) => any;
    isDragging: boolean;
  } & { desiredHeight: number; correctedDimentions: CorrectedDimentionProps };

class LazyLoadedImage extends React.PureComponent<ViewProps, StateProps> {
  state: StateProps = {};
  _imgRef: any = null;

  _checkProcessing: any = null;

  componentWillUnmount() {
    if (this._checkProcessing) clearInterval(this._checkProcessing);
  }

  componentDidUpdate(prevProps) {
    const { dispatch, pageType, listofPagesHelper, id, originalId } = this.props;
    const { pageType: prevPageType } = prevProps;

    //if (this._checkProcessing)
    //    clearInterval(this._checkProcessing);

    if (pageType != prevPageType) {
      if (!pageType || PageImageTypeModel.nonweb == pageType) {
        //image is done processing
      } else {
        dispatch(listofPagesHelper.processPage(id));
      }
    }
  }

  componentDidMount() {
    const { dispatch, pageType, listofPagesHelper, id, originalId } = this.props;

    if (!pageType || PageImageTypeModel.nonweb == pageType) {
      //image is done processing
    } else {
      dispatch(listofPagesHelper.processPage(id));
    }
  }

  checkImageProps() {
    if (!this._imgRef) {
      console.warn('image ref is null');
      return;
    }

    const { width, height, dispatch, listofPagesHelper, id } = this.props;

    const { naturalWidth, naturalHeight, height: displayHeight } = this._imgRef;

    if (width != naturalWidth || height != naturalHeight) {
      console.log('correcting image dimentions', id);
      dispatch(listofPagesHelper.addCorrectedDimentions(id, naturalWidth, naturalHeight));

      this.setState({ scale: displayHeight / naturalHeight });
    }
  }

  onImageLoadFailed() {
    const { dispatch, listofPagesHelper, id } = this.props;
    // dispatch(listofPagesHelper.handleFailedImageLoad(id));
  }

  render() {
    const {
      pageType,
      desiredHeight,
      path,
      size,
      created,
      originalPageName,
      id,
      PageOverlayView,
      originalId,
      listofPagesHelper,
      dispatch,
      offLineProcessingOnly,
    } = this.props;

    const { scale } = this.state;

    const waitTextStyle = {
      color: '#ccc',
      //fontSize: 'large',
      //marginTop: 10
      textAlign: 'right',
    };

    const waitBgStyle = {
      height: desiredHeight,
      width: '100%',
      backgroundColor: 'white',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      color: '#999',
    } as any;

    const waitFileInfoStyle = {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    } as any;

    const ext = id.substr(id.lastIndexOf('.') + 1);

    //when pagetype is null it menas it's ready for web display
    if (
      !pageType ||
      (PageImageTypeModel.processing != pageType &&
        ext &&
        _.includes(['png', 'jpg', 'jpeg'], ext.toLowerCase()))
    ) {
      return (
        <div style={{ position: 'relative' }}>
          <img
            ref={(ref) => (this._imgRef = ref)}
            onLoad={(e) => this.checkImageProps()}
            onError={(e) => this.onImageLoadFailed()}
            src={path}
            alt='document image'
            className='docPageImage'
            style={{ height: desiredHeight }}
          />

          {PageOverlayView && (
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
              <PageOverlayView
                scale={scale}
                {...this.props}
                onAnnotationsDone={() => {
                  dispatch(listofPagesHelper.reloadActiveDocPages([id]));
                }}
              />
            </div>
          )}

          {!!pageType && (
            <div style={{ position: 'absolute', right: 5, bottom: 5, ...waitTextStyle }}>
              <span>
                analyzing <i className='fa fa-spinner fa-spin fa-fw'></i>
              </span>
            </div>
          )}
        </div>
      );
    }

    const CheckOfflineProcessing = ({ children }) =>
      offLineProcessingOnly ? (
        <div
          style={{
            //height: '100%', display: 'flex', flexDirection: 'column',
            // justifyContent: 'center', padding: '2rem',
            fontSize: 'small',
            color: '#818181',
            padding: 10,
          }}
        >
          <p>This {ext} document size exceeds the limit for real time processing</p>
          <p>It is being processed asynchronously ...</p>
        </div>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      );

    const fileIco = ext && ext.toLowerCase() == 'pdf' ? 'fa-file-pdf-o' : 'fa-file-image-o';
    const FileInfoView = () => (
      <div style={waitFileInfoStyle}>
        <i className={'fa ' + fileIco} style={{ fontSize: desiredHeight / 3, margin: '10px' }}></i>
        <div>
          {originalPageName && <i> "{originalPageName}" </i>}
          {!!size && <strong> {filesize(size)} </strong>}
          {created && <i style={{ fontSize: 'small' }}>created {moment(created).format('lll')}</i>}

          <Button
            bsStyle='link'
            onClick={() => dispatch(ensurePrintApp().downloadOriginals([originalId || id]))}
          >
            <div className='text-success' style={{ fontSize: 'large' }}>
              <i className='fa fa-download'></i> Download
            </div>
          </Button>
        </div>
      </div>
    );

    switch (pageType) {
      case PageImageTypeModel.unprocessed:
        return (
          <div style={waitBgStyle}>
            <FileInfoView />

            <CheckOfflineProcessing>
              <div style={waitTextStyle}>
                <span>
                  analyzing <i className='fa fa-spinner fa-spin fa-fw'></i>
                </span>
              </div>
            </CheckOfflineProcessing>
          </div>
        );

      case PageImageTypeModel.identifying:
        return (
          <div style={waitBgStyle}>
            <FileInfoView />

            <CheckOfflineProcessing>
              <div style={waitTextStyle}>
                <span>
                  identifying <i className='fa fa-spinner fa-spin fa-fw'></i>
                </span>
              </div>
            </CheckOfflineProcessing>
          </div>
        );

      case PageImageTypeModel.processing:
        return (
          <div style={waitBgStyle}>
            <FileInfoView />

            <CheckOfflineProcessing>
              <div style={waitTextStyle}>
                <span>
                  rendering <i className='fa fa-spinner fa-spin fa-fw'></i>
                </span>
              </div>
            </CheckOfflineProcessing>
          </div>
        );

      case PageImageTypeModel.nonweb:
      default:
        return (
          <div style={waitBgStyle}>
            <FileInfoView />
          </div>
        );
    }
  }
}

const PageView: React.StatelessComponent<ViewProps> = (props) => {
  const {
    dispatch,
    pageType,
    id,
    desiredHeight,
    path,
    width,
    height,
    correctedDimentions,
    pageDropTarget,
    isOverCurrent,
    connectDragSource,
    isDragging,
  } = props;

  let correctedWidth = width;
  let correctedheight = height;
  if (
    correctedDimentions &&
    correctedDimentions[id] &&
    correctedDimentions[id].width &&
    correctedDimentions[id].height
  ) {
    correctedWidth = correctedDimentions[id].width;
    correctedheight = correctedDimentions[id].height;
  }

  const desiredWidth =
    desiredHeight * (correctedWidth && correctedheight ? correctedWidth / correctedheight : 0.772);

  return pageDropTarget(
    connectDragSource(
      <div
        className='revPage'
        style={{
          padding: 2,
          backgroundColor: isOverCurrent ? '#693b22a1' : 'transparent',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <LazyLoad height={desiredHeight} width={desiredWidth} offsetVertical={300}>
          <LazyLoadedImage {...props} />
        </LazyLoad>
      </div>,
    ),
  );
};

export default DragSource(
  DRAGTYPE_PAGE,
  {
    beginDrag(props: PageImageModel) {
      return props;
    },

    /*
    canDrag(props, monitor) {
        return false;
    },
    */

    endDrag(props, monitor) {
      if (monitor.didDrop()) {
        const droppedResult = monitor.getDropResult();

        if (droppedResult && droppedResult.movedToList) {
          var myProps = props as { dispatch } & IdropTargetProps & PageImageModel;
          const { dispatch, listofPagesHelper, id } = myProps;

          if (listofPagesHelper === undefined) {
            console.error('listofPagesHelper not set for page drop source');
            return;
          }

          return dispatch(listofPagesHelper.pageMoved(id));
        }
      }
    },
  },
  (connecter, monitor) => ({
    connectDragSource: connecter.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(DropTargetCreator(PageView));
