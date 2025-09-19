// To include the default styles
import 'react-rangeslider/lib/index.css';

import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import APage, { DnDProps, DropTargetCreator, IdropTargetProps } from './page';
import {
  Button,
  Checkbox,
  DropdownButton,
  FormControl,
  MenuItem,
  Modal,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { DRAGTYPE_PAGE, IListPagesState, pageNav } from './reducerHelper';
import { createLoaderView, createSaverView } from 'base/asyncLoader';
import ensureMainNav, { INavMenuState } from '../mainNav/reducer';

import AnnoMenu from '../annotations/annoMenu';
import AnnoOverlayView from '../annotations/overlay';
import AttachMenu from './attachMenu';
import CopyPasteMenu from './copyPasteMenu';
import DeleteMenu from './deleteMenu';
import OcrMenu from '../searchView/ocrMenu';
import { PageHolderModel } from '../../generated/PageHolderModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { PageImageTypeModel } from '../../generated/PageImageTypeModel';
import ScanMenu from './scanMenu';
import ScannerSelectMenu from './scannerSelectMenu';
import Slider from 'react-rangeslider';
import _PageLightBox from './lightBox.clientOnly';
import { connect } from 'react-redux';
import ensureAnnotations from '../annotations/reducer';
import ensurePrintApp from '../printApp/reducer';

const UploadStatusView = createSaverView<boolean>();

type ComponentProps = IdropTargetProps & {
  //react element to show on the active page
  ActivePageToolBar?: any;

  //react element to show as list tool bar
  ToolButtons?: any;

  //if true we fix NAV button on TOP
  hasInfiniteScroll?: boolean;

  //The styles applied to the acuall div with images
  imageListStyle?: any;

  //Thibs height if they have not been respositioned
  defaultThumbsHeight?: number;

  //an overlay that is drawn on to of the page
  PageOverlayView?: React.ComponentType<any>;
};

type ConnectedProp = IListPagesState & {
  pagesArray: PageImageModel[];
  annoToolSelected: boolean;
};

const AnnoOCRMenu = () => {
  return (
    <React.Fragment>
      <AnnoMenu />
    </React.Fragment>
  );
};

const PageLightBox = _PageLightBox as any;

class ListPagesView extends React.Component<ComponentProps & ConnectedProp & DnDProps, {}> {
  componentDidMount() {
    const { dispatch, listofPagesHelper } = this.props;

    if (listofPagesHelper) {
      if (listofPagesHelper.addAllowed()) {
        const TheMenu = () => (
          <AttachMenu onFileAttached={() => this._fileInputRef && this._fileInputRef.click()} />
        );

        this.props.dispatch(ensureMainNav().addMenu('main', 'attach', TheMenu));

        if (navigator) {
          console.info(`detected navigator.platform : ${navigator.platform}`);
        } else {
          console.error('empty navigator: cannot detect platform');
        }

        if (navigator && navigator.platform == 'Win32') {
          const TheScanMenu = () => (
            <ScanMenu onScan={() => dispatch(listofPagesHelper.scanPages())} />
          );
          this.props.dispatch(ensureMainNav().addMenu('main', 'scan', TheScanMenu));
          dispatch(ensureMainNav().addMenu('settings', 'selectScanner', ScannerSelectMenu));

          dispatch(
            ensureMainNav().addMenu('distribueExtra', 'Re-Process', () => (
              <MenuItem
                onClick={(_) => {
                  dispatch(listofPagesHelper.fixNonwebPage());
                }}
              >
                <span className='text-success' style={{ fontSize: 'large' }}>
                  <i className='fa fa-refresh'></i> Re-render images
                </span>
              </MenuItem>
            )),
          );

          //dispatch(ensureMainNav().addMenu('distribueExtra', 'copyPaste', () => <CopyPasteMenu listofPagesHelper={listofPagesHelper}/>));
        }
      }
      if (listofPagesHelper.deleteAllowed()) {
        const MyDeleteMenu = () => <DeleteMenu listofPagesHelper={listofPagesHelper} />;
        this.props.dispatch(ensureMainNav().addMenu('main', 'delete', MyDeleteMenu));
      }

      dispatch(
        ensurePrintApp().setPrintable({
          pagesGetter: listofPagesHelper.getToPrintPages.bind(listofPagesHelper),
          extraMenu: <AnnoOCRMenu />,
        }),
      );
    }
  }
  componentWillUnmount() {
    const { dispatch, listofPagesHelper } = this.props;

    if (listofPagesHelper) {
      if (listofPagesHelper.addAllowed()) {
        dispatch(ensureMainNav().deleteMenu('main', 'attach'));

        if (navigator && navigator.platform == 'Win32') {
          dispatch(ensureMainNav().deleteMenu('main', 'scan'));
          dispatch(ensureMainNav().deleteMenu('settings', 'selectScanner'));
          //dispatch(ensureMainNav().deleteMenu('distribueExtra', 'copyPaste'));
        }
      }

      if (listofPagesHelper.deleteAllowed()) dispatch(ensureMainNav().deleteMenu('main', 'delete'));

      dispatch(ensurePrintApp().setPrintable(null));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { dispatch, activePage, pagesArray } = this.props;
    const prevActivePage = prevProps.activePage;

    if (pagesArray && pagesArray.length > 0) {
      //we always want a active page
      if (!activePage || !_.find(pagesArray, (p) => p.id == activePage.id)) {
        console.log('setting active page to top image');
        const { listofPagesHelper } = this.props;
        dispatch(listofPagesHelper.setActivePage(pagesArray[0].id));
        return;
      }
    }

    if (!activePage || activePage.id == (prevActivePage || {}).id) return;

    //active page has changed lets make sure it's visible

    if (!this._pageRefs[activePage.id]) {
      console.warn('active page id is not in _pageRefs');
      return;
    }

    const { offsetTop, offsetHeight } = this._pageRefs[activePage.id];

    //accounting for margins . the magic number we found by trial and error , we will have to change if we change margins and stuff
    const MAGICMARGINNUMBER = 20; //23;
    const pageBottomPosition = offsetTop + offsetHeight;

    const { scrollTop, clientHeight, scrollHeight } = this._pagelistRef;
    const visibleBottomPosition = scrollTop + clientHeight;

    let newScrollTop = scrollTop;

    const viewHasNonLimitedHeight = scrollHeight == clientHeight;

    //check if activePage bottom is visible
    if (viewHasNonLimitedHeight) {
      newScrollTop = offsetTop - MAGICMARGINNUMBER;
    } else if (pageBottomPosition > visibleBottomPosition) {
      newScrollTop = pageBottomPosition - clientHeight - MAGICMARGINNUMBER;
    }

    //check if activePage Top is visible, override scroll to make bottom visible
    if (offsetTop < newScrollTop - MAGICMARGINNUMBER) newScrollTop = offsetTop - MAGICMARGINNUMBER;

    //let newScrollTop = this.PagelistRef.scrollTop+((backword?-1:1)* (this.props.sliderValue + 14));
    if (newScrollTop < 0) {
      newScrollTop = 0;
    } else if (
      !viewHasNonLimitedHeight &&
      newScrollTop > this._pagelistRef.scrollHeight - this._pagelistRef.clientHeight
    ) {
      newScrollTop = this._pagelistRef.scrollHeight - this._pagelistRef.clientHeight;
    }

    if (viewHasNonLimitedHeight) {
      window && window.scrollTo && window.scrollTo(0, newScrollTop);
    } else {
      if (newScrollTop === scrollTop) return;
      this._pagelistRef.scrollTop = newScrollTop;
    }

    /*
        let scrollStep = (newScrollTop - scrollTop) / 10;
        const backword = scrollStep < 0;

        let me = this;
        function doStep() {
            let newPos = me._pagelistRef.scrollTop + scrollStep;

            let done = false;
            if ((backword && newPos <= newScrollTop) || (!backword && newPos >= newScrollTop)) {
                newPos = newScrollTop;
                done = true;
            }

            me._pagelistRef.scrollTop = newPos;

            if (!done)
                _.delay(doStep, 5);
        }

        doStep();
        */
  }

  private _pagelistRef?: HTMLDivElement;

  private _pageRefs: { [key: string]: HTMLDivElement } = {};

  private onScrolled() {
    if (!this._pagelistRef) return;

    const { pagesArray, activePage, listofPagesHelper, dispatch } = this.props;
    if (!(pagesArray && pagesArray.length > 0)) return;

    const activePageId = activePage ? activePage.id : pagesArray[0].id;
    if (!activePageId) return;

    const { scrollTop, clientHeight } = this._pagelistRef;
    const visibleBottomPosition = scrollTop + clientHeight;

    if (!this._pageRefs[activePageId]) return;

    const { offsetTop, offsetHeight } = this._pageRefs[activePageId];
    const pageBottomPosition = offsetTop + offsetHeight;

    const visibityShim = offsetHeight * 0.3;

    //check if the active page is not visible
    if (
      offsetTop + visibityShim > visibleBottomPosition ||
      pageBottomPosition - visibityShim < scrollTop
    ) {
      const newActivePage = _.find(
        _.keys(this._pageRefs),
        (id) => this._pageRefs[id] && this._pageRefs[id].offsetTop >= scrollTop,
      );

      if (newActivePage) {
        dispatch(listofPagesHelper.setActivePage(newActivePage));
      } else {
        console.warn('no active page found at scroll location', scrollTop);
      }
    }
  }

  private onScrolleddebounced = _.debounce(this.onScrolled, 1000);
  private _fileInputRef = null;

  private _fileRenderId = 0;

  render() {
    const {
      pagesArray,
      pageDropTarget,
      listofPagesHelper,
      thumbsHeight,
      defaultThumbsHeight,
      activePage,
      ActivePageToolBar,
      selectedPages,
      imageListStyle,
      ToolButtons,
      hasInfiniteScroll,
      lightBoxVisible,
      PageOverlayView,
      correctedDimentions,
      annoToolSelected,
      dispatch,
    } = this.props;

    let listprompt = '';

    if (pagesArray.length > 0)
      listprompt = 'Showing ' + pagesArray.length + ' image' + (pagesArray.length > 1 ? 's' : '');

    this._pageRefs = {};

    const fixedNavStyle = {
      padding: 5,
      height: 56,
      position: 'fixed',
      top: 62,
      backgroundColor: '#bdd2e4e6',
      zIndex: 5,
      width: '100%',
    };

    const navStyle = { textAlign: 'left' };

    return (
      <div style={{ height: '100%', position: 'relative' }}>
        {PageLightBox && lightBoxVisible && (
          <PageLightBox listofPagesHelper={listofPagesHelper} pagesArray={pagesArray || []} />
        )}

        <FormControl
          inputRef={(ref) => {
            this._fileInputRef = ref;
          }}
          type='file'
          multiple
          id={`myinputfile_${this._fileRenderId++}`}
          style={{ height: 0, width: 0, opacity: 0, display: 'contents' }}
          onChange={(e: any) => {
            e.preventDefault();
            //const files = [...e.nativeEvent.target.files];
            console.log('logging testing');
            console.log('file', e.nativeEvent.target.files);
            dispatch(listofPagesHelper.addPages(e.nativeEvent.target.files));
          }}
        />

        <div
          className='container-fluid'
          style={hasInfiniteScroll ? ({ ...fixedNavStyle, ...navStyle } as any) : navStyle}
        >
          <span className='text-primary withPopupBg'>
            {listprompt}

            <DropdownButton
              bsStyle='link'
              title={
                <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip id='inctooltip'>change image size</Tooltip>}
                >
                  <span>
                    <i className='fa fa-search-plus' />
                    <i className='fa fa-search-minus' />
                  </span>
                </OverlayTrigger>
              }
              id='sliderDropDown'
            >
              <Slider
                style={{ margin: 10, height: 5 }}
                min={60}
                max={1500}
                step={10}
                value={thumbsHeight || defaultThumbsHeight || 100}
                onChange={(e) => dispatch(listofPagesHelper.zoomTo(e))}
              />
            </DropdownButton>
          </span>

          {ToolButtons && <ToolButtons />}

          <div
            style={{ textAlign: 'right', float: 'right', display: 'flex', height: 46 }}
            className='text-primary'
          >
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Tooltip id='prevtooltip'>
                  Scroll to previous page
                  <br />
                  <small>
                    Shortcut: <kbd>alt+u</kbd> OR <kbd>pageup</kbd>
                  </small>
                </Tooltip>
              }
            >
              <Button
                bsStyle={'link'}
                style={{ padding: '0px', marginLeft: '5px' }}
                onClick={() => dispatch(listofPagesHelper.setActivePage(pageNav.prev))}
              >
                {' '}
                <i className='fa fa-backward' style={{ fontSize: 'x-large' }}></i>
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Tooltip id='nexttooltip'>
                  Scroll to next page
                  <br />
                  <small>
                    Shortcut: <kbd>alt+d</kbd> OR <kbd>pagedown</kbd>
                  </small>
                </Tooltip>
              }
            >
              <Button
                bsStyle={'link'}
                style={{ padding: '0px', marginLeft: '5px' }}
                onClick={() => dispatch(listofPagesHelper.setActivePage(pageNav.next))}
              >
                {' '}
                <i className='fa fa-forward' style={{ fontSize: 'x-large' }}></i>
              </Button>
            </OverlayTrigger>
          </div>

          <div style={{ height: '0px' }}>&nbsp;</div>
        </div>

        {pageDropTarget(
          <div
            className='imagelist-background'
            onScroll={() => this.onScrolleddebounced()}
            ref={(ref) => (this._pagelistRef = ref)}
            style={hasInfiniteScroll ? { ...imageListStyle, marginTop: 56 } : imageListStyle}
          >
            <div style={{ width: '100%' /*, height: '100%'*/ }}>
              <div>
                <div className='text-center'>
                  {pagesArray.length == 0 ? (
                    <h3>
                      {listofPagesHelper.addAllowed() ? (
                        <>
                          <div style={{ marginTop: 25 }}>
                            Drop images here
                            <p style={{ marginTop: 5 }}>
                              OR{' '}
                              <Button
                                bsStyle='info'
                                onClick={() => this._fileInputRef && this._fileInputRef.click()}
                              >
                                browse to files
                              </Button>
                            </p>
                          </div>
                        </>
                      ) : (
                        <span className='text-muted'>No images found </span>
                      )}
                    </h3>
                  ) : (
                    pagesArray.map((editablePage, i) => {
                      const showAnoTools =
                        annoToolSelected && activePage && activePage.id == editablePage.id;

                      return (
                        <div
                          key={i}
                          style={{
                            position: 'relative',
                            display: 'inline-block',
                            overflow: 'hidden',
                          }}
                          ref={(ref) => (this._pageRefs[editablePage.id] = ref)}
                        >
                          {pageDropTarget(
                            <div style={{ position: 'relative' }}>
                              <APage
                                dispatch={dispatch}
                                correctedDimentions={correctedDimentions}
                                PageOverlayView={showAnoTools ? AnnoOverlayView : PageOverlayView}
                                desiredHeight={thumbsHeight || defaultThumbsHeight || 100}
                                listofPagesHelper={listofPagesHelper}
                                {...editablePage}
                              />

                              {activePage &&
                                activePage.id == editablePage.id &&
                                !!ActivePageToolBar && (
                                  <div
                                    style={{
                                      position: 'absolute',
                                      top: 3,
                                      right: 3,
                                    }}
                                  >
                                    <ActivePageToolBar
                                      dispatch={dispatch}
                                      {...editablePage}
                                      index={i}
                                    />
                                  </div>
                                )}

                              <div style={{ position: 'absolute', top: 0, left: 5 }}>
                                {showAnoTools ? (
                                  <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='annodone'>Annotations completed</Tooltip>}
                                  >
                                    <Button
                                      bsStyle={'link'}
                                      style={{ padding: 0, marginTop: -5 }}
                                      onClick={() => dispatch(ensureAnnotations().selectTool(null))}
                                    >
                                      <i className='fa fa-check color-orange'></i>
                                    </Button>
                                  </OverlayTrigger>
                                ) : (
                                  <React.Fragment>
                                    <input
                                      type='checkbox'
                                      checked={!!(selectedPages && selectedPages[editablePage.id])}
                                      onChange={() => {}} //need onchanged for warnings to be happy
                                      style={{ margin: 0 }}
                                      onClick={(e) =>
                                        dispatch(
                                          listofPagesHelper.togglePageSelection(
                                            editablePage.id,
                                            e.ctrlKey,
                                            e.shiftKey,
                                          ),
                                        )
                                      }
                                    />

                                    <OverlayTrigger
                                      placement='bottom'
                                      overlay={
                                        <Tooltip id='lightnoxtooltip'>
                                          Show image in full screen
                                        </Tooltip>
                                      }
                                    >
                                      <Button
                                        bsStyle={'link'}
                                        style={{ padding: 0, marginTop: -5 }}
                                        onClick={() =>
                                          dispatch(listofPagesHelper.showLightBox(editablePage.id))
                                        }
                                      >
                                        <i className='fa fa-window-maximize color-orange'></i>
                                      </Button>
                                    </OverlayTrigger>
                                  </React.Fragment>
                                )}

                                <DropdownButton
                                  bsStyle='link'
                                  className='pageConvertedMenuDropDown'
                                  title={<i className='fa fa-cog' />}
                                  id={`pagedropdown-${editablePage.id}`}
                                >
                                  {editablePage.originalId && (
                                    <MenuItem
                                      eventKey='1'
                                      onClick={() =>
                                        dispatch(
                                          listofPagesHelper.downloadOriginal(
                                            editablePage.originalId,
                                          ),
                                        )
                                      }
                                    >
                                      <i className='fa fa-cloud-download' /> Download original
                                    </MenuItem>
                                  )}
                                  {editablePage.pageType == PageImageTypeModel.nonweb && (
                                    <MenuItem
                                      eventKey='1'
                                      onClick={() => dispatch(listofPagesHelper.fixNonwebPage())}
                                    >
                                      <i className='fa fa-refresh' /> Re-render image
                                    </MenuItem>
                                  )}

                                  <i
                                    style={{
                                      position: 'absolute',
                                      bottom: 4,
                                      fontSize: 8,
                                      color: 'black',
                                    }}
                                  >
                                    created {moment(editablePage.created).format('lll')}
                                  </i>
                                  <OcrMenu pageId={editablePage.id} />
                                </DropdownButton>
                              </div>
                            </div>,
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>,
        )}
      </div>
    );
  }
}

export default connect<ConnectedProp, { dispatch }, ComponentProps>((state, ownprops) => {
  const { listofPagesHelper } = ownprops;
  const pagesState = listofPagesHelper && listofPagesHelper.getmyState(state);
  const { activeDoc } =
    listofPagesHelper.myDocsHelper && listofPagesHelper.myDocsHelper.getmyState(state);

  const { selectedTool } = ensureAnnotations().getCurrentState(state);

  return _.assign(
    {
      pagesArray: (activeDoc && activeDoc.pages) || [],
      annoToolSelected: !!selectedTool,
    },
    pagesState,
  );
})(DropTargetCreator(ListPagesView));
