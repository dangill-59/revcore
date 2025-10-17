webpackJsonp([4],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listPages__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rnd__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var CartsLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__["d" /* createLoaderView */])();
var staticStyle = {
    position: 'fixed',
    border: 'solid black 1px',
    top: 238,
    left: 400,
    background: 'red',
    zIndex: 100,
};
var CartView = /** @class */ (function (_super) {
    __extends(CartView, _super);
    function CartView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartView.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().initializeCarts());
    };
    CartView.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, cartVisible = _a.cartVisible, cartPosition = _a.cartPosition;
        var cartPositiontoUse = __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"]({ height: 300, width: 300, x: 400, y: 238 }, cartPosition);
        return cartVisible ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_rnd__["a" /* default */], { className: 'modal-content', size: { height: cartPositiontoUse.height, width: cartPositiontoUse.width }, position: { x: cartPositiontoUse.x, y: cartPositiontoUse.y }, style: {
                zIndex: 100,
            }, minWidth: 400, minHeight: 150, dragHandleClassName: '.cartDragHandle', onDragStop: function (e, ui) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateCartLocation(ui.x, ui.y));
            }, onResizeStop: function (e, dir, ref, delta, position) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateCartSize(ref.offsetHeight, ref.offsetWidth));
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: 'relative', height: '100%' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-title', style: {
                        borderBottom: 'solid 1px rgba(255, 255, 255, 0.38823529411764707)',
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'carttooltip' }, "Drag here to re-position cart") },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'cartDragHandle', style: { cursor: 'move' } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-arrows', "aria-hidden": 'true' }),
                            " Image cart")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { className: 'pull-right', bsStyle: 'link', bsSize: 'sm', style: { padding: 0, marginTop: -2, marginRight: 3 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().showCart(false)); } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-times text-danger', "aria-hidden": 'true' }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: 'absolute', left: 0, right: 0, bottom: 0, top: 25 } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__listPages__["a" /* default */], { listofPagesHelper: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().pagesList, 
                    /*loadPagesCallback={p => {
                                p.then(pagesToAdd=>
                                dispatch(ensureCarts().addPages(pagesToAdd)));
                            }}*/
                    //ToolButtons={PageListTools}
                    hasInfiniteScroll: true, defaultThumbsHeight: 200, imageListStyle: {
                        right: 0,
                        overflow: 'auto',
                        position: 'absolute',
                        top: 25,
                        bottom: 0,
                        left: 0,
                    } }))))) : null;
    };
    return CartView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().getCurrentState(state);
})(CartView));


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(542);

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnnoTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_baseReducer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var AnnoTools;
(function (AnnoTools) {
    AnnoTools[AnnoTools["annotate"] = 1] = "annotate";
    AnnoTools[AnnoTools["highlight"] = 2] = "highlight";
    AnnoTools[AnnoTools["redact"] = 3] = "redact";
    AnnoTools[AnnoTools["clear"] = 4] = "clear";
    AnnoTools[AnnoTools["showOriginal"] = 5] = "showOriginal";
    AnnoTools[AnnoTools["rotateRight"] = 6] = "rotateRight";
    AnnoTools[AnnoTools["rotateLeft"] = 7] = "rotateLeft";
})(AnnoTools || (AnnoTools = {}));
var annotateReducer = /** @class */ (function (_super) {
    __extends(annotateReducer, _super);
    function annotateReducer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    annotateReducer.prototype.createActionList = function () {
        return {
            selectTool: function (value) { return value; },
            setAnnoText: function (value) { return value; },
            updateAnnoData: [
                function (pageId, value) { return value; },
                function (pageId, value) { return ({
                    Async: true,
                    annoPageId: pageId,
                }); },
            ],
        };
    };
    annotateReducer.prototype.reducers = function () {
        return {
            selectedTool: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["handleAction"])(this._myActions.selectTool, function (state, action) {
                return action.payload;
            }, null),
            annoDataAsync: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["handleAction"])(this._myActions.updateAnnoData, function (state, action) {
                return action.payload;
            }, null),
            annoPageId: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["handleAction"])(this._myActions.updateAnnoData, function (state, action) {
                var annoPageId = action.meta.annoPageId;
                return annoPageId;
            }, null),
            annoText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["handleAction"])(this._myActions.setAnnoText, function (state, action) {
                return action.payload;
            }, null),
        };
    };
    annotateReducer.prototype.checkIfUnMounted = function (pageId) {
        var _mine = this;
        return function (dispatch, getState) {
            //if the last page that we mounted ann view is dismounted unselect the tool
            //this is needed
            setTimeout(function () {
                var annoPageId = _mine.getCurrentState(getState()).annoPageId;
                if (annoPageId == pageId)
                    dispatch(_mine.selectTool(null));
            }, 1000);
        };
    };
    annotateReducer.prototype.selectTool = function (value) {
        var _mine = this;
        return function (dispatch, getState) {
            dispatch(_mine._myActions.setAnnoText(null));
            dispatch(_mine._myActions.selectTool(value));
        };
    };
    annotateReducer.prototype.rotateImage = function (pageId, left) {
        var _mine = this;
        return function (dispatch, getState) {
            //need to run a render pass first
            setTimeout(function () {
                var saveP = fetch("/api/annotations/rotate/" + encodeURIComponent(pageId) + "?left=" + left)
                    .then(function (response) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__["a" /* checkFetchError */])(response); })
                    .then(function () {
                    dispatch(_mine.selectTool(null));
                    return null;
                });
                dispatch(_mine._myActions.updateAnnoData(pageId, saveP));
            }, 1000);
        };
    };
    annotateReducer.prototype.loadAnnotations = function (pageId) {
        var saveP = fetch("/api/annotations/annotate/" + encodeURIComponent(pageId))
            .then(function (response) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__["a" /* checkFetchError */])(response); })
            .then(function (response) { return response.json(); });
        return this._myActions.updateAnnoData(pageId, saveP);
    };
    annotateReducer.prototype.updateAnnoText = function (text) {
        var _this = this;
        var _mine = this;
        return function (dispatch, getState) {
            var annoText = _this.getCurrentState(getState()).annoText;
            if (!annoText)
                return;
            return dispatch(_mine._myActions.setAnnoText(__WEBPACK_IMPORTED_MODULE_0_lodash__["assign"]({}, annoText, { text: text })));
        };
    };
    annotateReducer.prototype.initAnnoText = function (position) {
        var _mine = this;
        return function (dispatch, getState) {
            return dispatch(_mine._myActions.setAnnoText({ text: '', position: position }));
        };
    };
    annotateReducer.prototype.saveAnnotations = function (pageId, dataUrl) {
        var _mine = this;
        return function (dispatch, getState) {
            //Before we save the canvas clear any annoText box
            dispatch(_mine._myActions.setAnnoText(null));
            var annoModel = {
                dataUrl: dataUrl,
            };
            var saveP = fetch("/api/annotations/annotate/" + encodeURIComponent(pageId), {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(annoModel),
            })
                .then(function (response) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__["a" /* checkFetchError */])(response); })
                .then(function (response) { return response.json(); });
            dispatch(_mine._myActions.updateAnnoData(pageId, saveP));
        };
    };
    return annotateReducer;
}(__WEBPACK_IMPORTED_MODULE_2_base_baseReducer__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (function () { return annotateReducer.getInstance(annotateReducer, 'annotations'); });


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(194);

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducerHelper__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__annotations_annoMenu__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__annotations_overlay__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attachMenu__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deleteMenu__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchView_ocrMenu__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generated_PageImageTypeModel__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scanMenu__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__scannerSelectMenu__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lightBox_clientOnly__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__annotations_reducer__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__printApp_reducer__ = __webpack_require__(37);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// To include the default styles






















var UploadStatusView = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__["e" /* createSaverView */])();
var AnnoOCRMenu = function () {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null,
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__annotations_annoMenu__["a" /* default */], null)));
};
var PageLightBox = __WEBPACK_IMPORTED_MODULE_18__lightBox_clientOnly__["a" /* default */];
var ListPagesView = /** @class */ (function (_super) {
    __extends(ListPagesView, _super);
    function ListPagesView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pageRefs = {};
        _this.onScrolleddebounced = __WEBPACK_IMPORTED_MODULE_2_lodash__["debounce"](_this.onScrolled, 1000);
        _this._fileInputRef = null;
        _this._fileRenderId = 0;
        return _this;
    }
    ListPagesView.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, dispatch = _a.dispatch, listofPagesHelper = _a.listofPagesHelper;
        if (listofPagesHelper) {
            if (listofPagesHelper.addAllowed()) {
                var TheMenu = function () { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__attachMenu__["a" /* default */], { onFileAttached: function () { return _this._fileInputRef && _this._fileInputRef.click(); } })); };
                this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().addMenu('main', 'attach', TheMenu));
                if (navigator) {
                    console.info("detected navigator.platform : " + navigator.platform);
                }
                else {
                    console.error('empty navigator: cannot detect platform');
                }
                if (navigator && navigator.platform == 'Win32') {
                    var TheScanMenu = function () { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_15__scanMenu__["a" /* default */], { onScan: function () { return dispatch(listofPagesHelper.scanPages()); } })); };
                    this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().addMenu('main', 'scan', TheScanMenu));
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().addMenu('settings', 'selectScanner', __WEBPACK_IMPORTED_MODULE_16__scannerSelectMenu__["a" /* default */]));
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().addMenu('distribueExtra', 'Re-Process', function () { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["MenuItem"], { onClick: function (_) {
                            dispatch(listofPagesHelper.fixNonwebPage());
                        } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'text-success', style: { fontSize: 'large' } },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-refresh' }),
                            " Re-render images"))); }));
                    //dispatch(ensureMainNav().addMenu('distribueExtra', 'copyPaste', () => <CopyPasteMenu listofPagesHelper={listofPagesHelper}/>));
                }
            }
            if (listofPagesHelper.deleteAllowed()) {
                var MyDeleteMenu = function () { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__deleteMenu__["a" /* default */], { listofPagesHelper: listofPagesHelper }); };
                this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().addMenu('main', 'delete', MyDeleteMenu));
            }
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__printApp_reducer__["a" /* default */])().setPrintable({
                pagesGetter: listofPagesHelper.getToPrintPages.bind(listofPagesHelper),
                extraMenu: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](AnnoOCRMenu, null),
            }));
        }
    };
    ListPagesView.prototype.componentWillUnmount = function () {
        var _a = this.props, dispatch = _a.dispatch, listofPagesHelper = _a.listofPagesHelper;
        if (listofPagesHelper) {
            if (listofPagesHelper.addAllowed()) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().deleteMenu('main', 'attach'));
                if (navigator && navigator.platform == 'Win32') {
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().deleteMenu('main', 'scan'));
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().deleteMenu('settings', 'selectScanner'));
                    //dispatch(ensureMainNav().deleteMenu('distribueExtra', 'copyPaste'));
                }
            }
            if (listofPagesHelper.deleteAllowed())
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__["b" /* default */])().deleteMenu('main', 'delete'));
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__printApp_reducer__["a" /* default */])().setPrintable(null));
        }
    };
    ListPagesView.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.props, dispatch = _a.dispatch, activePage = _a.activePage, pagesArray = _a.pagesArray;
        var prevActivePage = prevProps.activePage;
        if (pagesArray && pagesArray.length > 0) {
            //we always want a active page
            if (!activePage || !__WEBPACK_IMPORTED_MODULE_2_lodash__["find"](pagesArray, function (p) { return p.id == activePage.id; })) {
                console.log('setting active page to top image');
                var listofPagesHelper = this.props.listofPagesHelper;
                dispatch(listofPagesHelper.setActivePage(pagesArray[0].id));
                return;
            }
        }
        if (!activePage || activePage.id == (prevActivePage || {}).id)
            return;
        //active page has changed lets make sure it's visible
        if (!this._pageRefs[activePage.id]) {
            console.warn('active page id is not in _pageRefs');
            return;
        }
        var _b = this._pageRefs[activePage.id], offsetTop = _b.offsetTop, offsetHeight = _b.offsetHeight;
        //accounting for margins . the magic number we found by trial and error , we will have to change if we change margins and stuff
        var MAGICMARGINNUMBER = 20; //23;
        var pageBottomPosition = offsetTop + offsetHeight;
        var _c = this._pagelistRef, scrollTop = _c.scrollTop, clientHeight = _c.clientHeight, scrollHeight = _c.scrollHeight;
        var visibleBottomPosition = scrollTop + clientHeight;
        var newScrollTop = scrollTop;
        var viewHasNonLimitedHeight = scrollHeight == clientHeight;
        //check if activePage bottom is visible
        if (viewHasNonLimitedHeight) {
            newScrollTop = offsetTop - MAGICMARGINNUMBER;
        }
        else if (pageBottomPosition > visibleBottomPosition) {
            newScrollTop = pageBottomPosition - clientHeight - MAGICMARGINNUMBER;
        }
        //check if activePage Top is visible, override scroll to make bottom visible
        if (offsetTop < newScrollTop - MAGICMARGINNUMBER)
            newScrollTop = offsetTop - MAGICMARGINNUMBER;
        //let newScrollTop = this.PagelistRef.scrollTop+((backword?-1:1)* (this.props.sliderValue + 14));
        if (newScrollTop < 0) {
            newScrollTop = 0;
        }
        else if (!viewHasNonLimitedHeight &&
            newScrollTop > this._pagelistRef.scrollHeight - this._pagelistRef.clientHeight) {
            newScrollTop = this._pagelistRef.scrollHeight - this._pagelistRef.clientHeight;
        }
        if (viewHasNonLimitedHeight) {
            window && window.scrollTo && window.scrollTo(0, newScrollTop);
        }
        else {
            if (newScrollTop === scrollTop)
                return;
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
    };
    ListPagesView.prototype.onScrolled = function () {
        var _this = this;
        if (!this._pagelistRef)
            return;
        var _a = this.props, pagesArray = _a.pagesArray, activePage = _a.activePage, listofPagesHelper = _a.listofPagesHelper, dispatch = _a.dispatch;
        if (!(pagesArray && pagesArray.length > 0))
            return;
        var activePageId = activePage ? activePage.id : pagesArray[0].id;
        if (!activePageId)
            return;
        var _b = this._pagelistRef, scrollTop = _b.scrollTop, clientHeight = _b.clientHeight;
        var visibleBottomPosition = scrollTop + clientHeight;
        if (!this._pageRefs[activePageId])
            return;
        var _c = this._pageRefs[activePageId], offsetTop = _c.offsetTop, offsetHeight = _c.offsetHeight;
        var pageBottomPosition = offsetTop + offsetHeight;
        var visibityShim = offsetHeight * 0.3;
        //check if the active page is not visible
        if (offsetTop + visibityShim > visibleBottomPosition ||
            pageBottomPosition - visibityShim < scrollTop) {
            var newActivePage = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](__WEBPACK_IMPORTED_MODULE_2_lodash__["keys"](this._pageRefs), function (id) { return _this._pageRefs[id] && _this._pageRefs[id].offsetTop >= scrollTop; });
            if (newActivePage) {
                dispatch(listofPagesHelper.setActivePage(newActivePage));
            }
            else {
                console.warn('no active page found at scroll location', scrollTop);
            }
        }
    };
    ListPagesView.prototype.render = function () {
        var _this = this;
        var _a = this.props, pagesArray = _a.pagesArray, pageDropTarget = _a.pageDropTarget, listofPagesHelper = _a.listofPagesHelper, thumbsHeight = _a.thumbsHeight, defaultThumbsHeight = _a.defaultThumbsHeight, activePage = _a.activePage, ActivePageToolBar = _a.ActivePageToolBar, selectedPages = _a.selectedPages, imageListStyle = _a.imageListStyle, ToolButtons = _a.ToolButtons, hasInfiniteScroll = _a.hasInfiniteScroll, lightBoxVisible = _a.lightBoxVisible, PageOverlayView = _a.PageOverlayView, correctedDimentions = _a.correctedDimentions, annoToolSelected = _a.annoToolSelected, dispatch = _a.dispatch;
        var listprompt = '';
        if (pagesArray.length > 0)
            listprompt = 'Showing ' + pagesArray.length + ' image' + (pagesArray.length > 1 ? 's' : '');
        this._pageRefs = {};
        var fixedNavStyle = {
            padding: 5,
            height: 56,
            position: 'fixed',
            top: 62,
            backgroundColor: '#bdd2e4e6',
            zIndex: 5,
            width: '100%',
        };
        var navStyle = { textAlign: 'left' };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { height: '100%', position: 'relative' } },
            PageLightBox && lightBoxVisible && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](PageLightBox, { listofPagesHelper: listofPagesHelper, pagesArray: pagesArray || [] })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"], { inputRef: function (ref) {
                    _this._fileInputRef = ref;
                }, type: 'file', multiple: true, id: "myinputfile_" + this._fileRenderId++, style: { height: 0, width: 0, opacity: 0, display: 'contents' }, onChange: function (e) {
                    e.preventDefault();
                    //const files = [...e.nativeEvent.target.files];
                    console.log('logging testing');
                    console.log('file', e.nativeEvent.target.files);
                    dispatch(listofPagesHelper.addPages(e.nativeEvent.target.files));
                } }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'container-fluid', style: hasInfiniteScroll ? __assign({}, fixedNavStyle, navStyle) : navStyle },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'text-primary withPopupBg' },
                    listprompt,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["DropdownButton"], { bsStyle: 'link', title: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Tooltip"], { id: 'inctooltip' }, "change image size") },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-search-plus' }),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-search-minus' }))), id: 'sliderDropDown' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_17_react_rangeslider___default.a, { style: { margin: 10, height: 5 }, min: 60, max: 1500, step: 10, value: thumbsHeight || defaultThumbsHeight || 100, onChange: function (e) { return dispatch(listofPagesHelper.zoomTo(e)); } }))),
                ToolButtons && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ToolButtons, null),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { textAlign: 'right', float: 'right', display: 'flex', height: 46 }, className: 'text-primary' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Tooltip"], { id: 'prevtooltip' },
                            "Scroll to previous page",
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("br", null),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", null,
                                "Shortcut: ",
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("kbd", null, "alt+u"),
                                " OR ",
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("kbd", null, "pageup"))) },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: '0px', marginLeft: '5px' }, onClick: function () { return dispatch(listofPagesHelper.setActivePage(__WEBPACK_IMPORTED_MODULE_6__reducerHelper__["a" /* pageNav */].prev)); } },
                            ' ',
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-backward', style: { fontSize: 'x-large' } }))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Tooltip"], { id: 'nexttooltip' },
                            "Scroll to next page",
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("br", null),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", null,
                                "Shortcut: ",
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("kbd", null, "alt+d"),
                                " OR ",
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("kbd", null, "pagedown"))) },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: '0px', marginLeft: '5px' }, onClick: function () { return dispatch(listofPagesHelper.setActivePage(__WEBPACK_IMPORTED_MODULE_6__reducerHelper__["a" /* pageNav */].next)); } },
                            ' ',
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-forward', style: { fontSize: 'x-large' } })))),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { height: '0px' } }, "\u00A0")),
            pageDropTarget(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'imagelist-background', onScroll: function () { return _this.onScrolleddebounced(); }, ref: function (ref) { return (_this._pagelistRef = ref); }, style: hasInfiniteScroll ? __assign({}, imageListStyle, { marginTop: 56 }) : imageListStyle },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { width: '100%' /*, height: '100%'*/ } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-center' }, pagesArray.length == 0 ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h3", null, listofPagesHelper.addAllowed() ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null,
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { marginTop: 25 } },
                                "Drop images here",
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", { style: { marginTop: 5 } },
                                    "OR",
                                    ' ',
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'info', onClick: function () { return _this._fileInputRef && _this._fileInputRef.click(); } }, "browse to files"))))) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'text-muted' }, "No images found ")))) : (pagesArray.map(function (editablePage, i) {
                            var showAnoTools = annoToolSelected && activePage && activePage.id == editablePage.id;
                            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: i, style: {
                                    position: 'relative',
                                    display: 'inline-block',
                                    overflow: 'hidden',
                                }, ref: function (ref) { return (_this._pageRefs[editablePage.id] = ref); } }, pageDropTarget(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { position: 'relative' } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__page__["a" /* default */], __assign({ dispatch: dispatch, correctedDimentions: correctedDimentions, PageOverlayView: showAnoTools ? __WEBPACK_IMPORTED_MODULE_10__annotations_overlay__["a" /* default */] : PageOverlayView, desiredHeight: thumbsHeight || defaultThumbsHeight || 100, listofPagesHelper: listofPagesHelper }, editablePage)),
                                activePage &&
                                    activePage.id == editablePage.id &&
                                    !!ActivePageToolBar && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: {
                                        position: 'absolute',
                                        top: 3,
                                        right: 3,
                                    } },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ActivePageToolBar, __assign({ dispatch: dispatch }, editablePage, { index: i })))),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { position: 'absolute', top: 0, left: 5 } },
                                    showAnoTools ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Tooltip"], { id: 'annodone' }, "Annotations completed") },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: 0, marginTop: -5 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__annotations_reducer__["a" /* default */])().selectTool(null)); } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-check color-orange' })))) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: 'checkbox', checked: !!(selectedPages && selectedPages[editablePage.id]), onChange: function () { }, style: { margin: 0 }, onClick: function (e) {
                                                return dispatch(listofPagesHelper.togglePageSelection(editablePage.id, e.ctrlKey, e.shiftKey));
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Tooltip"], { id: 'lightnoxtooltip' }, "Show image in full screen") },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: 0, marginTop: -5 }, onClick: function () {
                                                    return dispatch(listofPagesHelper.showLightBox(editablePage.id));
                                                } },
                                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-window-maximize color-orange' }))))),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["DropdownButton"], { bsStyle: 'link', className: 'pageConvertedMenuDropDown', title: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-cog' }), id: "pagedropdown-" + editablePage.id },
                                        editablePage.originalId && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["MenuItem"], { eventKey: '1', onClick: function () {
                                                return dispatch(listofPagesHelper.downloadOriginal(editablePage.originalId));
                                            } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-cloud-download' }),
                                            " Download original")),
                                        editablePage.pageType == __WEBPACK_IMPORTED_MODULE_14__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].nonweb && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["MenuItem"], { eventKey: '1', onClick: function () { return dispatch(listofPagesHelper.fixNonwebPage()); } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-refresh' }),
                                            " Re-render image")),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { style: {
                                                position: 'absolute',
                                                bottom: 4,
                                                fontSize: 8,
                                                color: 'black',
                                            } },
                                            "created ",
                                            __WEBPACK_IMPORTED_MODULE_3_moment__(editablePage.created).format('lll')),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__searchView_ocrMenu__["a" /* default */], { pageId: editablePage.id })))))));
                        })))))))));
    };
    return ListPagesView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19_react_redux__["connect"])(function (state, ownprops) {
    var listofPagesHelper = ownprops.listofPagesHelper;
    var pagesState = listofPagesHelper && listofPagesHelper.getmyState(state);
    var activeDoc = (listofPagesHelper.myDocsHelper && listofPagesHelper.myDocsHelper.getmyState(state)).activeDoc;
    var selectedTool = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__annotations_reducer__["a" /* default */])().getCurrentState(state).selectedTool;
    return __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({
        pagesArray: (activeDoc && activeDoc.pages) || [],
        annoToolSelected: !!selectedTool,
    }, pagesState);
})(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__page__["b" /* DropTargetCreator */])(ListPagesView)));


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_reducer__ = __webpack_require__(40);





var theTools = [
    { tool: __WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].annotate, icon: 'fa-comment', text: 'Annotate' },
    { tool: __WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].highlight, icon: 'fa-edit', text: 'Highlight' },
    { tool: __WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].redact, icon: 'fa-minus-square', text: 'Redact' },
    { tool: __WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].clear, icon: 'fa-square', text: 'clear' },
    { tool: __WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].showOriginal, icon: 'fa-eye', text: 'Show original' },
];
var AnnoMenu = function (_a) {
    var selectedTool = _a.selectedTool, annotationsAllowed = _a.annotationsAllowed, dispatch = _a.dispatch;
    if (!annotationsAllowed)
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { divider: true }),
        theTools.map(function (tool) {
            var disabled = !!selectedTool && selectedTool != tool.tool;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { key: "tool_" + tool.tool, disabled: disabled, onClick: function (e) {
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */])().selectTool(selectedTool != tool.tool ? tool.tool : null));
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: disabled ? 'text-muted' : 'text-success', style: { fontSize: 'large' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa " + tool.icon }),
                    " ",
                    tool.text,
                    selectedTool == tool.tool && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-check color-orange' }))));
        }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { divider: true }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { disabled: !!selectedTool, onClick: function (e) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */])().selectTool(__WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].rotateLeft));
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: selectedTool ? 'text-muted' : 'text-success', style: { fontSize: 'large' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-undo' }),
                " Rotate left")),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { disabled: !!selectedTool, onClick: function (e) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */])().selectTool(__WEBPACK_IMPORTED_MODULE_1__reducer__["b" /* AnnoTools */].rotateRight));
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: selectedTool ? 'text-muted' : 'text-success', style: { fontSize: 'large' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-undo fa-flip-horizontal' }),
                " Rotate right"))));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state) {
    var selectedProject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__projects_reducer__["a" /* default */])().getCurrentState(state).selectedProject;
    var annotationsAllowed = !!selectedProject;
    if (selectedProject && selectedProject.permissions && selectedProject.permissions['self']) {
        annotationsAllowed = selectedProject.permissions['self'].canEdit;
    }
    var selectedTool = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */])().getCurrentState(state).selectedTool;
    return { selectedTool: selectedTool, annotationsAllowed: annotationsAllowed };
})(AnnoMenu));


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var AnnoLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__["d" /* createLoaderView */])();
var AnnontationOverlayView = /** @class */ (function (_super) {
    __extends(AnnontationOverlayView, _super);
    function AnnontationOverlayView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CanvasRef = null;
        _this.hasDrawing = false;
        _this.hasChanged = false;
        _this.state = {};
        _this._annotaionedLoaded = false;
        return _this;
    }
    AnnontationOverlayView.prototype.componentDidMount = function () {
        var _a = this.props, pageId = _a.id, dispatch = _a.dispatch, selectedTool = _a.selectedTool;
        var canvas = __WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"](this.CanvasRef);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        var context = canvas.getContext('2d');
        this.setState({
            canvas: canvas,
            context: context,
            dimentions: { w: canvas.width, h: canvas.height },
        });
        switch (selectedTool) {
            case __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].rotateRight:
            case __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].rotateLeft:
                this.hasChanged = true;
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().rotateImage(pageId, __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].rotateLeft == selectedTool));
                break;
            default:
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().loadAnnotations(pageId));
                break;
        }
    };
    AnnontationOverlayView.prototype.componentDidUpdate = function (prevProps) {
        var annoDataAsync = this.props.annoDataAsync;
        //const { annoDataAsync: prevAnnoDataAsync } = prevProps;
        var _a = this.state, context = _a.context, dimentions = _a.dimentions;
        if (!this._annotaionedLoaded &&
            annoDataAsync &&
            annoDataAsync.result &&
            annoDataAsync.result.dataUrl) {
            var imageObj = new Image();
            imageObj.onload = function () {
                context.drawImage(this, 0, 0, dimentions.w, dimentions.h);
            };
            imageObj.src = annoDataAsync.result.dataUrl;
            this._annotaionedLoaded = true;
        }
    };
    AnnontationOverlayView.prototype.componentWillUnmount = function () {
        var _a = this.props, pageId = _a.id, dispatch = _a.dispatch, onAnnotationsDone = _a.onAnnotationsDone;
        if (this.hasChanged && onAnnotationsDone)
            onAnnotationsDone();
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().checkIfUnMounted(pageId));
    };
    AnnontationOverlayView.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    AnnontationOverlayView.prototype.handleOnMouseDown = function (e) {
        if (!this.annoActive())
            return;
        var rect = this.state.canvas.getBoundingClientRect();
        this.state.context.beginPath();
        if (AnnontationOverlayView.isMobile()) {
            this.setState({
                coordinates: {
                    startPoint: {
                        X: e.targetTouches[0].pageX - rect.left,
                        Y: e.targetTouches[0].pageY - rect.top,
                    },
                },
            });
        }
        else {
            this.setState({
                coordinates: {
                    startPoint: {
                        X: e.clientX - rect.left,
                        Y: e.clientY - rect.top,
                    },
                },
            });
        }
        this.setState({
            drawing: true,
        });
    };
    AnnontationOverlayView.prototype.handleOnMouseMove = function (e) {
        if (!this.annoActive())
            return;
        e.preventDefault();
        var _a = this.state, drawing = _a.drawing, lastX = _a.lastX, lastY = _a.lastY, canvas = _a.canvas, coordinates = _a.coordinates, dimentions = _a.dimentions;
        if (drawing) {
            var rect = canvas.getBoundingClientRect();
            var currentX = void 0;
            var currentY = void 0;
            if (AnnontationOverlayView.isMobile()) {
                coordinates.current = {
                    X: e.targetTouches[0].pageX - rect.left,
                    Y: e.targetTouches[0].pageY - rect.top,
                };
            }
            else {
                coordinates.current = {
                    X: e.clientX - rect.left,
                    Y: e.clientY - rect.top,
                };
            }
            var scale = dimentions.h / canvas.offsetHeight;
            this.draw(coordinates, scale);
        }
    };
    AnnontationOverlayView.prototype.annoActive = function () {
        var _a = this.props, annoDataAsync = _a.annoDataAsync, selectedTool = _a.selectedTool, annoText = _a.annoText;
        if (selectedTool == __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].showOriginal || (annoDataAsync && annoDataAsync.isLoading))
            return false;
        /*
            if (!!annoText)
                return false;
            */
        return true;
    };
    AnnontationOverlayView.prototype.handleonMouseUp = function (e) {
        if (!this.annoActive())
            return;
        e.preventDefault();
        var _a = this.state, coordinates = _a.coordinates, dimentions = _a.dimentions, canvas = _a.canvas, context = _a.context;
        var startPoint = coordinates.startPoint, current = coordinates.current, lastDrawPoint = coordinates.lastDrawPoint;
        var _b = this.props, selectedTool = _b.selectedTool, dispatch = _b.dispatch;
        if (startPoint && current) {
            if (__WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].annotate == selectedTool) {
                var scale = dimentions.h / canvas.offsetHeight;
                if (lastDrawPoint) {
                    context.clearRect((startPoint.X - 2) * scale, (startPoint.Y - 2) * scale, (lastDrawPoint.X - startPoint.X + 4) * scale, (lastDrawPoint.Y - startPoint.Y + 4) * scale);
                }
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().initAnnoText({
                    left: startPoint.X * scale,
                    top: startPoint.Y * scale,
                    width: (current.X - startPoint.X) * scale,
                    height: (current.Y - startPoint.Y) * scale,
                }));
            }
            else {
                this.saveCanvas();
            }
        }
        this.setState({ drawing: false });
    };
    AnnontationOverlayView.prototype.draw = function (coordinates, scale) {
        var context = this.state.context;
        var startPoint = coordinates.startPoint, lastDrawPoint = coordinates.lastDrawPoint, current = coordinates.current;
        if (!this.hasDrawing) {
            if (current.X - startPoint.X < 10 && current.Y - startPoint.Y < 10) {
                //barely any mouse move may be the person does actually want to draw
                return;
            }
        }
        if (lastDrawPoint) {
            context.clearRect((startPoint.X - 2) * scale, (startPoint.Y - 2) * scale, (lastDrawPoint.X - startPoint.X + 4) * scale, (lastDrawPoint.Y - startPoint.Y + 4) * scale);
        }
        var selectedTool = this.props.selectedTool;
        switch (selectedTool) {
            case __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].clear:
                context.clearRect(startPoint.X * scale, startPoint.Y * scale, (current.X - startPoint.X) * scale, (current.Y - startPoint.Y) * scale);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].annotate:
                context.lineWidth = 1;
                context.strokeStyle = 'rgba(0, 0, 0, 0.4)';
                context.strokeRect(startPoint.X * scale, startPoint.Y * scale, (current.X - startPoint.X) * scale, (current.Y - startPoint.Y) * scale);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].redact:
            case __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].highlight:
            default:
                context.lineWidth = 0;
                context.fillStyle =
                    selectedTool == __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].redact ? 'rgba(0, 0, 0, 1.0)' : 'rgba(255, 255, 0, 0.45)';
                context.fillRect(startPoint.X * scale, startPoint.Y * scale, (current.X - startPoint.X) * scale, (current.Y - startPoint.Y) * scale);
                break;
        }
        this.hasDrawing = true;
        coordinates.lastDrawPoint = coordinates.current;
        this.setState({ coordinates: coordinates });
    };
    AnnontationOverlayView.prototype.handleTextEnter = function () {
        var _a = this.props, annoText = _a.annoText, dispatch = _a.dispatch;
        var text = annoText && annoText.text;
        if (!text) {
            return;
        }
        var context = this.state.context;
        var fontSizePx = 20;
        context.fillStyle = 'rgba(0, 0, 0, 1.0)';
        context.font = fontSizePx + "px Calibri";
        var maxWidth = annoText.position.width - 4;
        var lineHeight = fontSizePx + 4;
        var x = annoText.position.left + 2;
        var y = annoText.position.top + fontSizePx;
        var words = text.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        context.lineWidth = 0;
        context.fillStyle = 'rgba(255, 255, 0, 0.45)';
        context.fillRect(annoText.position.left, annoText.position.top, annoText.position.width, annoText.position.height);
        this.saveCanvas();
    };
    AnnontationOverlayView.prototype.saveCanvas = function () {
        var _a = this.props, pageId = _a.id, dispatch = _a.dispatch;
        if (!this.CanvasRef) {
            console.error('Canvas Ref is empty');
            return;
        }
        var data = this.CanvasRef.toDataURL('image/png');
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().saveAnnotations(pageId, data));
        this.hasChanged = true;
    };
    AnnontationOverlayView.prototype.render = function () {
        var _this = this;
        var displayStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '100%',
            height: '100%',
            cursor: 'crosshair',
        };
        var _a = this.props, annoDataAsync = _a.annoDataAsync, selectedTool = _a.selectedTool, annoText = _a.annoText, dispatch = _a.dispatch;
        /*
            if (!annoText) {
                displayStyle.cursor = 'crosshair'
            }
            */
        var canvasStyle = __WEBPACK_IMPORTED_MODULE_2__reducer__["b" /* AnnoTools */].showOriginal == selectedTool
            ? __assign({ visibility: 'hidden' }, displayStyle) : displayStyle;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            annoDataAsync && annoDataAsync.result && annoDataAsync.result.imageDataUrl && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: annoDataAsync.result.imageDataUrl, style: displayStyle, className: 'annoImg' })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("canvas", { style: canvasStyle, className: 'annoOverlay', ref: function (ref) { return (_this.CanvasRef = ref); }, onMouseDown: this.handleOnMouseDown.bind(this), onTouchStart: this.handleOnMouseDown.bind(this), onMouseMove: this.handleOnMouseMove.bind(this), onTouchMove: this.handleOnMouseMove.bind(this), onMouseUp: this.handleonMouseUp.bind(this), onTouchEnd: this.handleonMouseUp.bind(this) }),
            annoText && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { style: __assign({ position: 'absolute', color: 'black' }, annoText.position), value: annoText.text || '', placeholder: 'Enter text', onChange: function (e) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateAnnoText(e.target.value)); }, onKeyUp: function (e) {
                    if (e.keyCode == 13 && e.shiftKey == false) {
                        e.preventDefault();
                        _this.handleTextEnter();
                    }
                } })),
            annoDataAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](AnnoLoader, { asyncResult: annoDataAsync, prompt: 'loading annotations' }, "\u00A0"))));
    };
    return AnnontationOverlayView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state, ownprops) {
    var annoState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().getCurrentState(state);
    return annoState;
})(AnnontationOverlayView));


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);


var AttachMenu = function (_a) {
    var onFileAttached = _a.onFileAttached;
    var attachIcon = 'fa fa-file-image-o fa-2x';
    var attachPrompt = 'Attach images';
    if (!navigator || navigator.platform != 'Win32') {
        attachIcon = 'fa fa-camera fa-2x';
    }
    var fileInput = null;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], { onClick: function (e) {
            e.preventDefault();
            e.stopPropagation();
            onFileAttached && onFileAttached();
        } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Tooltip"], { id: 'AttachMenutooltip' }, attachPrompt) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: attachIcon, "aria-hidden": 'true' }))));
};
/* harmony default export */ __webpack_exports__["a"] = (AttachMenu);


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);




var DeleteMenu = function (_a) {
    var dispatch = _a.dispatch, selectedPages = _a.selectedPages, listofPagesHelper = _a.listofPagesHelper;
    //There is at least one selected page
    var enabled = listofPagesHelper && selectedPages && __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](__WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](selectedPages), function (p) { return !!selectedPages[p]; });
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"], { disabled: !enabled, onClick: function () { return listofPagesHelper && dispatch(listofPagesHelper.deletePages()); } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'deletemenutooltip' }, "Delete Images") },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-times fa-2x', "aria-hidden": 'true' }))));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state, ownprops) {
    return ownprops.listofPagesHelper ? ownprops.listofPagesHelper.getmyState(state) : {};
})(DeleteMenu));


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_image_lightbox_style_css__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_image_lightbox_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_image_lightbox_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_image_lightbox__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_image_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_image_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(7);






var LightBox = function (_a) {
    var dispatch = _a.dispatch, activePage = _a.activePage, pagesArray = _a.pagesArray, listofPagesHelper = _a.listofPagesHelper, selectedPages = _a.selectedPages;
    var selectedIndex = __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](pagesArray, activePage);
    if (-1 == selectedIndex)
        throw 'lightbox error, activepage not found in pages array';
    var nextImage = pagesArray.length > 1 ? pagesArray[(selectedIndex + 1) % pagesArray.length] : null;
    var prevImage = pagesArray.length > 1
        ? pagesArray[(selectedIndex + pagesArray.length - 1) % pagesArray.length]
        : null;
    var Prompt = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { color: 'white' } },
        "Image ",
        selectedIndex + 1,
        " of ",
        pagesArray.length));
    var SelectButton = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'lightnoxtooltipselect' }, "Select this image") },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: 'checkbox', checked: !!(selectedPages && selectedPages[activePage.id]), onChange: function () { }, style: { margin: 5 }, onClick: function (e) {
                return dispatch(listofPagesHelper.togglePageSelection(activePage.id, false, false));
            } })));
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_image_lightbox___default.a, { mainSrc: activePage.path, nextSrc: nextImage && nextImage.path, prevSrc: prevImage && prevImage.path, onCloseRequest: function () { return dispatch(listofPagesHelper.showLightBox(null)); }, onMovePrevRequest: function () { return prevImage && dispatch(listofPagesHelper.setActivePage(prevImage.id)); }, onMoveNextRequest: function () { return nextImage && dispatch(listofPagesHelper.setActivePage(nextImage.id)); }, toolbarButtons: [SelectButton, Prompt] }));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(function (state, ownprops) {
    var _a = ownprops.listofPagesHelper.getmyState(state), activePage = _a.activePage, selectedPages = _a.selectedPages;
    return { activePage: activePage, selectedPages: selectedPages };
})(LightBox));


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropTargetCreator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_filesize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducerHelper__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_lazy_load__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__printApp_reducer__ = __webpack_require__(37);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};











var DropTargetCreator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_dnd__["DropTarget"])([__WEBPACK_IMPORTED_MODULE_4__reducerHelper__["b" /* DRAGTYPE_PAGE */], __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__["NativeTypes"].FILE], {
    drop: function (props, monitor, component) {
        var hasDroppedOnChild = monitor.didDrop();
        if (hasDroppedOnChild) {
            return;
        }
        var type = monitor.getItemType();
        var item = monitor.getItem();
        var myProps = props;
        var dispatch = myProps.dispatch, listofPagesHelper = myProps.listofPagesHelper;
        //if (pagesArray )
        if (listofPagesHelper === undefined) {
            console.error('listofPagesHelper not set for page drop target');
            return;
        }
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__["NativeTypes"].FILE /*'__NATIVE_FILE__'*/:
                dispatch(listofPagesHelper.addPages(item.files, props && props.orderNumber));
                break;
            case __WEBPACK_IMPORTED_MODULE_4__reducerHelper__["b" /* DRAGTYPE_PAGE */]:
                dispatch(listofPagesHelper.onExistingPagedDropped1(item, props && props.id));
                break;
        }
        return { done: true };
    },
}, function (connecter, monitor) { return ({
    pageDropTarget: connecter.dropTarget(),
    //isDragOverMe: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
}); });
var LazyLoadedImage = /** @class */ (function (_super) {
    __extends(LazyLoadedImage, _super);
    function LazyLoadedImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this._imgRef = null;
        _this._checkProcessing = null;
        return _this;
    }
    LazyLoadedImage.prototype.componentWillUnmount = function () {
        if (this._checkProcessing)
            clearInterval(this._checkProcessing);
    };
    LazyLoadedImage.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, dispatch = _a.dispatch, pageType = _a.pageType, listofPagesHelper = _a.listofPagesHelper, id = _a.id, originalId = _a.originalId;
        var prevPageType = prevProps.pageType;
        //if (this._checkProcessing)
        //    clearInterval(this._checkProcessing);
        if (pageType != prevPageType) {
            if (!pageType || __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].nonweb == pageType) {
                //image is done processing
            }
            else {
                dispatch(listofPagesHelper.processPage(id));
            }
        }
    };
    LazyLoadedImage.prototype.componentDidMount = function () {
        var _a = this.props, dispatch = _a.dispatch, pageType = _a.pageType, listofPagesHelper = _a.listofPagesHelper, id = _a.id, originalId = _a.originalId;
        if (!pageType || __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].nonweb == pageType) {
            //image is done processing
        }
        else {
            dispatch(listofPagesHelper.processPage(id));
        }
    };
    LazyLoadedImage.prototype.checkImageProps = function () {
        if (!this._imgRef) {
            console.warn('image ref is null');
            return;
        }
        var _a = this.props, width = _a.width, height = _a.height, dispatch = _a.dispatch, listofPagesHelper = _a.listofPagesHelper, id = _a.id;
        var _b = this._imgRef, naturalWidth = _b.naturalWidth, naturalHeight = _b.naturalHeight, displayHeight = _b.height;
        if (width != naturalWidth || height != naturalHeight) {
            console.log('correcting image dimentions', id);
            dispatch(listofPagesHelper.addCorrectedDimentions(id, naturalWidth, naturalHeight));
            this.setState({ scale: displayHeight / naturalHeight });
        }
    };
    LazyLoadedImage.prototype.onImageLoadFailed = function () {
        var _a = this.props, dispatch = _a.dispatch, listofPagesHelper = _a.listofPagesHelper, id = _a.id;
        // dispatch(listofPagesHelper.handleFailedImageLoad(id));
    };
    LazyLoadedImage.prototype.render = function () {
        var _this = this;
        var _a = this.props, pageType = _a.pageType, desiredHeight = _a.desiredHeight, path = _a.path, size = _a.size, created = _a.created, originalPageName = _a.originalPageName, id = _a.id, PageOverlayView = _a.PageOverlayView, originalId = _a.originalId, listofPagesHelper = _a.listofPagesHelper, dispatch = _a.dispatch, offLineProcessingOnly = _a.offLineProcessingOnly;
        var scale = this.state.scale;
        var waitTextStyle = {
            color: '#ccc',
            //fontSize: 'large',
            //marginTop: 10
            textAlign: 'right',
        };
        var waitBgStyle = {
            height: desiredHeight,
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            color: '#999',
        };
        var waitFileInfoStyle = {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
        };
        var ext = id.substr(id.lastIndexOf('.') + 1);
        //when pagetype is null it menas it's ready for web display
        if (!pageType ||
            (__WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].processing != pageType &&
                ext &&
                __WEBPACK_IMPORTED_MODULE_1_lodash__["includes"](['png', 'jpg', 'jpeg'], ext.toLowerCase()))) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: 'relative' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { ref: function (ref) { return (_this._imgRef = ref); }, onLoad: function (e) { return _this.checkImageProps(); }, onError: function (e) { return _this.onImageLoadFailed(); }, src: path, alt: 'document image', className: 'docPageImage', style: { height: desiredHeight } }),
                PageOverlayView && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](PageOverlayView, __assign({ scale: scale }, this.props, { onAnnotationsDone: function () {
                            dispatch(listofPagesHelper.reloadActiveDocPages([id]));
                        } })))),
                !!pageType && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: __assign({ position: 'absolute', right: 5, bottom: 5 }, waitTextStyle) },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                        "analyzing ",
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-spinner fa-spin fa-fw' }))))));
        }
        var CheckOfflineProcessing = function (_a) {
            var children = _a.children;
            return offLineProcessingOnly ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
                    //height: '100%', display: 'flex', flexDirection: 'column',
                    // justifyContent: 'center', padding: '2rem',
                    fontSize: 'small',
                    color: '#818181',
                    padding: 10,
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                    "This ",
                    ext,
                    " document size exceeds the limit for real time processing"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "It is being processed asynchronously ..."))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, children));
        };
        var fileIco = ext && ext.toLowerCase() == 'pdf' ? 'fa-file-pdf-o' : 'fa-file-image-o';
        var FileInfoView = function () { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitFileInfoStyle },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa ' + fileIco, style: { fontSize: desiredHeight / 3, margin: '10px' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                originalPageName && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", null,
                    " \"",
                    originalPageName,
                    "\" "),
                !!size && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null,
                    " ",
                    __WEBPACK_IMPORTED_MODULE_2_filesize__(size),
                    " "),
                created && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { style: { fontSize: 'small' } },
                    "created ",
                    __WEBPACK_IMPORTED_MODULE_3_moment__(created).format('lll')),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"], { bsStyle: 'link', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__printApp_reducer__["a" /* default */])().downloadOriginals([originalId || id])); } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text-success', style: { fontSize: 'large' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-download' }),
                        " Download"))))); };
        switch (pageType) {
            case __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].unprocessed:
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitBgStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FileInfoView, null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckOfflineProcessing, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitTextStyle },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                                "analyzing ",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-spinner fa-spin fa-fw' }))))));
            case __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].identifying:
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitBgStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FileInfoView, null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckOfflineProcessing, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitTextStyle },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                                "identifying ",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-spinner fa-spin fa-fw' }))))));
            case __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].processing:
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitBgStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FileInfoView, null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckOfflineProcessing, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitTextStyle },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                                "rendering ",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-spinner fa-spin fa-fw' }))))));
            case __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].nonweb:
            default:
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitBgStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FileInfoView, null)));
        }
    };
    return LazyLoadedImage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
var PageView = function (props) {
    var dispatch = props.dispatch, pageType = props.pageType, id = props.id, desiredHeight = props.desiredHeight, path = props.path, width = props.width, height = props.height, correctedDimentions = props.correctedDimentions, pageDropTarget = props.pageDropTarget, isOverCurrent = props.isOverCurrent, connectDragSource = props.connectDragSource, isDragging = props.isDragging;
    var correctedWidth = width;
    var correctedheight = height;
    if (correctedDimentions &&
        correctedDimentions[id] &&
        correctedDimentions[id].width &&
        correctedDimentions[id].height) {
        correctedWidth = correctedDimentions[id].width;
        correctedheight = correctedDimentions[id].height;
    }
    var desiredWidth = desiredHeight * (correctedWidth && correctedheight ? correctedWidth / correctedheight : 0.772);
    return pageDropTarget(connectDragSource(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'revPage', style: {
            padding: 2,
            backgroundColor: isOverCurrent ? '#693b22a1' : 'transparent',
            opacity: isDragging ? 0.5 : 1,
        } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_lazy_load___default.a, { height: desiredHeight, width: desiredWidth, offsetVertical: 300 },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](LazyLoadedImage, __assign({}, props))))));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_dnd__["DragSource"])(__WEBPACK_IMPORTED_MODULE_4__reducerHelper__["b" /* DRAGTYPE_PAGE */], {
    beginDrag: function (props) {
        return props;
    },
    /*
    canDrag(props, monitor) {
        return false;
    },
    */
    endDrag: function (props, monitor) {
        if (monitor.didDrop()) {
            var droppedResult = monitor.getDropResult();
            if (droppedResult && droppedResult.movedToList) {
                var myProps = props;
                var dispatch = myProps.dispatch, listofPagesHelper = myProps.listofPagesHelper, id = myProps.id;
                if (listofPagesHelper === undefined) {
                    console.error('listofPagesHelper not set for page drop source');
                    return;
                }
                return dispatch(listofPagesHelper.pageMoved(id));
            }
        }
    },
}, function (connecter, monitor) { return ({
    connectDragSource: connecter.dragSource(),
    isDragging: monitor.isDragging(),
}); })(DropTargetCreator(PageView)));


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workspace_reducer__ = __webpack_require__(13);




var ScanMenu = function (_a) {
    var onScan = _a.onScan, creationObject = _a.creationObject;
    var hasRevPrintedData = !!(creationObject &&
        creationObject.initcontext == 'printtorev' &&
        creationObject.data);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], { onClick: function (e) {
            e.preventDefault();
            e.stopPropagation();
            onScan && onScan();
        } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Tooltip"], { id: 'scanMenutooltip' }, hasRevPrintedData ? 'Import printed images' : 'Scan images') }, hasRevPrintedData ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: {
                position: 'relative',
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-print fa-2x', "aria-hidden": 'true' }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-circle-o-notch fa-3x fa-spin', "aria-hidden": 'true', style: {
                    position: 'absolute',
                    left: -7,
                    top: -18,
                    color: '#ccc',
                } }))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-eraser fa-2x', "aria-hidden": 'true' })))));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state, ownprops) {
    var creationObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__workspace_reducer__["a" /* default */])().getCurrentState(state).creationObject;
    return { creationObject: creationObject };
})(ScanMenu));


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainNav_reducer__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(7);





var borderRadiusStyle = { borderRadius: 2 };
var tooltip = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Tooltip"], { id: 'tooltip' }, "Select scanner before scanning");
var label = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: tooltip },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-eraser', style: { margin: 'auto' } })));
var MoveableSetting = function (_a) {
    var dispatch = _a.dispatch, selectableSettings = _a.selectableSettings;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { float: 'left', paddingRight: '5px' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_toggle_button___default.a, { thumbIcon: label, activeLabel: 'ON', inactiveLabel: 'OFF', colors: {
                    activeThumb: {
                        base: '#f37029',
                    },
                    inactiveThumb: {
                        base: '#f37029',
                    },
                }, value: !!selectableSettings['selectScanner'], thumbStyle: borderRadiusStyle, trackStyle: borderRadiusStyle, onToggle: function (value) {
                    //remeber to add to mainnav/reducer.t =s :settingsToPersist if you want setting to persist
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mainNav_reducer__["b" /* default */])().updateSetting('selectScanner', !value));
                } })),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Select scanner")));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mainNav_reducer__["b" /* default */])().getCurrentState(state) || {};
})(MoveableSetting));


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchView_reducer__ = __webpack_require__(158);





var OCRMenu = function (_a) {
    var showOcrTextforPageId = _a.showOcrTextforPageId, OCREnabled = _a.OCREnabled, pageId = _a.pageId, dispatch = _a.dispatch;
    if (!OCREnabled)
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, "\u00A0");
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"], { divider: true }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["MenuItem"], { key: 'ocr_data', onClick: function (e) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__searchView_reducer__["a" /* default */])().ToggleOcrText(pageId));
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                "Show OCR Data",
                showOcrTextforPageId == pageId && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-check color-orange' })))));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    var selectedProject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__projects_reducer__["a" /* default */])().getCurrentState(state).selectedProject;
    var showOcrTextforPageId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__searchView_reducer__["a" /* default */])().getCurrentState(state).showOcrTextforPageId;
    return {
        OCREnabled: !!(selectedProject && selectedProject.fullTextOcr),
        showOcrTextforPageId: showOcrTextforPageId,
    };
})(OCRMenu));


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root,factory){
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.eventListener = factory();
  }
}(this, function () {
	function wrap(standard, fallback) {
		return function (el, evtName, listener, useCapture) {
			if (el[standard]) {
				el[standard](evtName, listener, useCapture);
			} else if (el[fallback]) {
				el[fallback]('on' + evtName, listener);
			}
		}
	}

    return {
		add: wrap('addEventListener', 'attachEvent'),
		remove: wrap('removeEventListener', 'detachEvent')
	};
}));

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

/*!
 2020 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 6.4.0
*/
!function(e,i){ true?module.exports=i():"function"==typeof define&&define.amd?define(i):(e="undefined"!=typeof globalThis?globalThis:e||self).filesize=i()}(this,(function(){"use strict";var e=/^(b|B)$/,i={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},t={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},o={floor:Math.floor,ceil:Math.ceil};function n(n){var r,a,b,l,s,c,d,f,p,u,B,h,g,y,M,m,v,x,N,j,T,E=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},w=[],P=0;if(isNaN(n))throw new TypeError("Invalid number");if(b=!0===E.bits,M=!0===E.unix,h=!0===E.pad,a=E.base||2,g=void 0!==E.round?E.round:M?1:2,d=void 0!==E.locale?E.locale:"",f=E.localeOptions||{},m=void 0!==E.separator?E.separator:"",v=void 0!==E.spacer?E.spacer:M?"":" ",N=E.symbols||{},x=2===a&&E.standard||"jedec",B=E.output||"string",s=!0===E.fullform,c=E.fullforms instanceof Array?E.fullforms:[],r=void 0!==E.exponent?E.exponent:-1,j=o[E.roundingMethod]||Math.round,p=(u=Number(n))<0,l=a>2?1e3:1024,T=!1===isNaN(E.precision)?parseInt(E.precision,10):0,p&&(u=-u),(-1===r||isNaN(r))&&(r=Math.floor(Math.log(u)/Math.log(l)))<0&&(r=0),r>8&&(T>0&&(T+=8-r),r=8),"exponent"===B)return r;if(0===u)w[0]=0,y=w[1]=M?"":i[x][b?"bits":"bytes"][r];else{P=u/(2===a?Math.pow(2,10*r):Math.pow(1e3,r)),b&&(P*=8)>=l&&r<8&&(P/=l,r++);var k=Math.pow(10,r>0?g:0);w[0]=j(P*k)/k,w[0]===l&&r<8&&void 0===E.exponent&&(w[0]=1,r++),y=w[1]=10===a&&1===r?b?"kb":"kB":i[x][b?"bits":"bytes"][r],M&&(w[1]="jedec"===x?w[1].charAt(0):r>0?w[1].replace(/B$/,""):w[1],e.test(w[1])&&(w[0]=Math.floor(w[0]),w[1]=""))}if(p&&(w[0]=-w[0]),T>0&&(w[0]=w[0].toPrecision(T)),w[1]=N[w[1]]||w[1],!0===d?w[0]=w[0].toLocaleString():d.length>0?w[0]=w[0].toLocaleString(d,f):m.length>0&&(w[0]=w[0].toString().replace(".",m)),h&&!1===Number.isInteger(w[0])&&g>0){var G=m||".",K=w[0].toString().split(G),S=K[1]||"",Y=S.length,Z=g-Y;w[0]="".concat(K[0]).concat(G).concat(S.padEnd(Y+Z,"0"))}return s&&(w[1]=c[r]?c[r]:t[x][r]+(b?"bit":"byte")+(1===w[0]?"":"s")),"array"===B?w:"object"===B?{value:w[0],symbol:w[1],exponent:r,unit:y}:w.join(v)}return n.partial=function(e){return function(i){return n(i,e)}},n}));
//# sourceMappingURL=filesize.min.js.map


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var styles = {
  base: {
    position: 'absolute',
    userSelect: 'none',
    MsUserSelect: 'none'
  },
  top: {
    width: '100%',
    height: '10px',
    top: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  right: {
    width: '10px',
    height: '100%',
    top: '0px',
    right: '-5px',
    cursor: 'col-resize'
  },
  bottom: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  left: {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '-5px',
    cursor: 'col-resize'
  },
  topRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    cursor: 'ne-resize'
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'se-resize'
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    bottom: '-10px',
    cursor: 'sw-resize'
  },
  topLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    cursor: 'nw-resize'
  }
};

var Resizer = (function (props) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
    'div',
    {
      className: props.className,
      style: _extends({}, styles.base, styles[props.direction], props.replaceStyles || {}),
      onMouseDown: function onMouseDown(e) {
        props.onResizeStart(e, props.direction);
      },
      onTouchStart: function onTouchStart(e) {
        props.onResizeStart(e, props.direction);
      }
    },
    props.children
  );
});

var userSelectNone = {
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  MsUserSelect: 'none'
};

var userSelectAuto = {
  userSelect: 'auto',
  MozUserSelect: 'auto',
  WebkitUserSelect: 'auto',
  MsUserSelect: 'auto'
};

var clamp = function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
};
var snap = function snap(n, size) {
  return Math.round(n / size) * size;
};

var findClosestSnap = function findClosestSnap(n, snapArray) {
  return snapArray.reduce(function (prev, curr) {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev;
  });
};

var endsWith = function endsWith(str, searchStr) {
  return str.substr(str.length - searchStr.length, searchStr.length) === searchStr;
};

var getStringSize = function getStringSize(n) {
  if (n.toString() === 'auto') return n.toString();
  if (endsWith(n.toString(), 'px')) return n.toString();
  if (endsWith(n.toString(), '%')) return n.toString();
  if (endsWith(n.toString(), 'vh')) return n.toString();
  if (endsWith(n.toString(), 'vw')) return n.toString();
  if (endsWith(n.toString(), 'vmax')) return n.toString();
  if (endsWith(n.toString(), 'vmin')) return n.toString();
  return n + 'px';
};

var definedProps = ['style', 'className', 'grid', 'snap', 'bounds', 'size', 'defaultSize', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'lockAspectRatio', 'lockAspectRatioExtraWidth', 'lockAspectRatioExtraHeight', 'enable', 'handleStyles', 'handleClasses', 'handleWrapperStyle', 'handleWrapperClass', 'children', 'onResizeStart', 'onResize', 'onResizeStop', 'handleComponent', 'scale', 'resizeRatio'];

var baseClassName = '__resizable_base__';

var Resizable = function (_React$Component) {
  inherits(Resizable, _React$Component);

  function Resizable(props) {
    classCallCheck(this, Resizable);

    var _this = possibleConstructorReturn(this, (Resizable.__proto__ || Object.getPrototypeOf(Resizable)).call(this, props));

    _this.state = {
      isResizing: false,
      resizeCursor: 'auto',
      width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.width,
      height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.height,
      direction: 'right',
      original: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    };

    _this.updateExtendsProps(props);
    _this.onResizeStart = _this.onResizeStart.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);

    if (typeof window !== 'undefined') {
      window.addEventListener('mouseup', _this.onMouseUp);
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseleave', _this.onMouseUp);
      window.addEventListener('touchmove', _this.onMouseMove);
      window.addEventListener('touchend', _this.onMouseUp);
    }
    return _this;
  }

  createClass(Resizable, [{
    key: 'updateExtendsProps',
    value: function updateExtendsProps(props) {
      this.extendsProps = Object.keys(props).reduce(function (acc, key) {
        if (definedProps.indexOf(key) !== -1) return acc;
        acc[key] = props[key];
        return acc;
      }, {});
    }
  }, {
    key: 'getParentSize',
    value: function getParentSize() {
      var base = this.base;

      if (!base) return { width: window.innerWidth, height: window.innerHeight };
      // INFO: To calculate parent width with flex layout
      var wrapChanged = false;
      var wrap = this.parentNode.style.flexWrap;
      var minWidth = base.style.minWidth;
      if (wrap !== 'wrap') {
        wrapChanged = true;
        this.parentNode.style.flexWrap = 'wrap';
        // HACK: Use relative to get parent padding size
      }
      base.style.position = 'relative';
      base.style.minWidth = '100%';
      var size = {
        width: base.offsetWidth,
        height: base.offsetHeight
      };
      base.style.position = 'absolute';
      if (wrapChanged) this.parentNode.style.flexWrap = wrap;
      base.style.minWidth = minWidth;
      return size;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var size = this.size;

      this.setState({
        width: this.state.width || size.width,
        height: this.state.height || size.height
      });
      var parent = this.parentNode;
      if (!(parent instanceof HTMLElement)) return;
      if (this.base) return;
      var element = document.createElement('div');
      element.style.width = '100%';
      element.style.height = '100%';
      element.style.position = 'absolute';
      element.style.transform = 'scale(0, 0)';
      element.style.left = '0';
      element.style.flex = '0';
      if (element.classList) {
        element.classList.add(baseClassName);
      } else {
        element.className += baseClassName;
      }
      parent.appendChild(element);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.updateExtendsProps(next);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseleave', this.onMouseUp);
        window.removeEventListener('touchmove', this.onMouseMove);
        window.removeEventListener('touchend', this.onMouseUp);
        var parent = this.parentNode;
        var base = this.base;

        if (!base || !parent) return;
        if (!(parent instanceof HTMLElement) || !(base instanceof Node)) return;
        parent.removeChild(base);
      }
    }
  }, {
    key: 'calculateNewSize',
    value: function calculateNewSize(newSize, kind) {
      var propsSize = this.propsSize && this.propsSize[kind];
      return this.state[kind] === 'auto' && this.state.original[kind] === newSize && (typeof propsSize === 'undefined' || propsSize === 'auto') ? 'auto' : newSize;
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(event, direction) {
      var clientX = 0;
      var clientY = 0;
      if (event.nativeEvent instanceof MouseEvent) {
        clientX = event.nativeEvent.clientX;
        clientY = event.nativeEvent.clientY;

        // When user click with right button the resize is stuck in resizing mode
        // until users clicks again, dont continue if right click is used.
        // HACK: MouseEvent does not have `which` from flow-bin v0.68.
        if (event.nativeEvent.which === 3) {
          return;
        }
      } else if (event.nativeEvent instanceof TouchEvent) {
        clientX = event.nativeEvent.touches[0].clientX;
        clientY = event.nativeEvent.touches[0].clientY;
      }
      if (this.props.onResizeStart) {
        this.props.onResizeStart(event, direction, this.resizable);
      }

      // Fix #168
      if (this.props.size) {
        if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
          this.setState({ height: this.props.size.height });
        }
        if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
          this.setState({ width: this.props.size.width });
        }
      }

      this.setState({
        original: {
          x: clientX,
          y: clientY,
          width: this.size.width,
          height: this.size.height
        },
        isResizing: true,
        resizeCursor: window.getComputedStyle(event.target).cursor,
        direction: direction
      });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      if (!this.state.isResizing) return;
      var clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      var clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      var _state = this.state,
          direction = _state.direction,
          original = _state.original,
          width = _state.width,
          height = _state.height;
      var _props = this.props,
          lockAspectRatio = _props.lockAspectRatio,
          lockAspectRatioExtraHeight = _props.lockAspectRatioExtraHeight,
          lockAspectRatioExtraWidth = _props.lockAspectRatioExtraWidth;

      var scale = this.props.scale || 1;
      var _props2 = this.props,
          maxWidth = _props2.maxWidth,
          maxHeight = _props2.maxHeight,
          minWidth = _props2.minWidth,
          minHeight = _props2.minHeight;

      var resizeRatio = this.props.resizeRatio || 1;

      // TODO: refactor
      var parentSize = this.getParentSize();
      if (maxWidth && typeof maxWidth === 'string' && endsWith(maxWidth, '%')) {
        var _ratio = Number(maxWidth.replace('%', '')) / 100;
        maxWidth = parentSize.width * _ratio;
      }
      if (maxHeight && typeof maxHeight === 'string' && endsWith(maxHeight, '%')) {
        var _ratio2 = Number(maxHeight.replace('%', '')) / 100;
        maxHeight = parentSize.height * _ratio2;
      }
      if (minWidth && typeof minWidth === 'string' && endsWith(minWidth, '%')) {
        var _ratio3 = Number(minWidth.replace('%', '')) / 100;
        minWidth = parentSize.width * _ratio3;
      }
      if (minHeight && typeof minHeight === 'string' && endsWith(minHeight, '%')) {
        var _ratio4 = Number(minHeight.replace('%', '')) / 100;
        minHeight = parentSize.height * _ratio4;
      }
      maxWidth = typeof maxWidth === 'undefined' ? undefined : Number(maxWidth);
      maxHeight = typeof maxHeight === 'undefined' ? undefined : Number(maxHeight);
      minWidth = typeof minWidth === 'undefined' ? undefined : Number(minWidth);
      minHeight = typeof minHeight === 'undefined' ? undefined : Number(minHeight);

      var ratio = typeof lockAspectRatio === 'number' ? lockAspectRatio : original.width / original.height;
      var newWidth = original.width;
      var newHeight = original.height;
      if (/right/i.test(direction)) {
        newWidth = original.width + (clientX - original.x) * resizeRatio / scale;
        if (lockAspectRatio) newHeight = (newWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
      }
      if (/left/i.test(direction)) {
        newWidth = original.width - (clientX - original.x) * resizeRatio / scale;
        if (lockAspectRatio) newHeight = (newWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
      }
      if (/bottom/i.test(direction)) {
        newHeight = original.height + (clientY - original.y) * resizeRatio / scale;
        if (lockAspectRatio) newWidth = (newHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
      }
      if (/top/i.test(direction)) {
        newHeight = original.height - (clientY - original.y) * resizeRatio / scale;
        if (lockAspectRatio) newWidth = (newHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
      }

      if (this.props.bounds === 'parent') {
        var parent = this.parentNode;
        if (parent instanceof HTMLElement) {
          var parentRect = parent.getBoundingClientRect();
          var parentLeft = parentRect.left;
          var parentTop = parentRect.top;

          var _resizable$getBoundin = this.resizable.getBoundingClientRect(),
              _left = _resizable$getBoundin.left,
              _top = _resizable$getBoundin.top;

          var boundWidth = parent.offsetWidth + (parentLeft - _left);
          var boundHeight = parent.offsetHeight + (parentTop - _top);
          maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
          maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
      } else if (this.props.bounds === 'window') {
        if (typeof window !== 'undefined') {
          var _resizable$getBoundin2 = this.resizable.getBoundingClientRect(),
              _left2 = _resizable$getBoundin2.left,
              _top2 = _resizable$getBoundin2.top;

          var _boundWidth = window.innerWidth - _left2;
          var _boundHeight = window.innerHeight - _top2;
          maxWidth = maxWidth && maxWidth < _boundWidth ? maxWidth : _boundWidth;
          maxHeight = maxHeight && maxHeight < _boundHeight ? maxHeight : _boundHeight;
        }
      } else if (this.props.bounds instanceof HTMLElement) {
        var targetRect = this.props.bounds.getBoundingClientRect();
        var targetLeft = targetRect.left;
        var targetTop = targetRect.top;

        var _resizable$getBoundin3 = this.resizable.getBoundingClientRect(),
            _left3 = _resizable$getBoundin3.left,
            _top3 = _resizable$getBoundin3.top;

        if (!(this.props.bounds instanceof HTMLElement)) return;
        var _boundWidth2 = this.props.bounds.offsetWidth + (targetLeft - _left3);
        var _boundHeight2 = this.props.bounds.offsetHeight + (targetTop - _top3);
        maxWidth = maxWidth && maxWidth < _boundWidth2 ? maxWidth : _boundWidth2;
        maxHeight = maxHeight && maxHeight < _boundHeight2 ? maxHeight : _boundHeight2;
      }

      var computedMinWidth = typeof minWidth === 'undefined' ? 10 : minWidth;
      var computedMaxWidth = typeof maxWidth === 'undefined' || maxWidth < 0 ? newWidth : maxWidth;
      var computedMinHeight = typeof minHeight === 'undefined' ? 10 : minHeight;
      var computedMaxHeight = typeof maxHeight === 'undefined' || maxHeight < 0 ? newHeight : maxHeight;

      if (lockAspectRatio) {
        var extraMinWidth = (computedMinHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
        var extraMaxWidth = (computedMaxHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
        var extraMinHeight = (computedMinWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
        var extraMaxHeight = (computedMaxWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
        var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
        var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
        var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
        var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
        newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
        newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
      } else {
        newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
        newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
      }
      if (this.props.grid) {
        newWidth = snap(newWidth, this.props.grid[0]);
      }
      if (this.props.grid) {
        newHeight = snap(newHeight, this.props.grid[1]);
      }

      if (this.props.snap && this.props.snap.x) {
        newWidth = findClosestSnap(newWidth, this.props.snap.x);
      }
      if (this.props.snap && this.props.snap.y) {
        newHeight = findClosestSnap(newHeight, this.props.snap.y);
      }

      var delta = {
        width: newWidth - original.width,
        height: newHeight - original.height
      };

      if (width && typeof width === 'string' && endsWith(width, '%')) {
        var percent = newWidth / parentSize.width * 100;
        newWidth = percent + '%';
      }

      if (height && typeof height === 'string' && endsWith(height, '%')) {
        var _percent = newHeight / parentSize.height * 100;
        newHeight = _percent + '%';
      }

      this.setState({
        width: this.calculateNewSize(newWidth, 'width'),
        height: this.calculateNewSize(newHeight, 'height')
      });

      if (this.props.onResize) {
        this.props.onResize(event, direction, this.resizable, delta);
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      var _state2 = this.state,
          isResizing = _state2.isResizing,
          direction = _state2.direction,
          original = _state2.original;

      if (!isResizing) return;
      var delta = {
        width: this.size.width - original.width,
        height: this.size.height - original.height
      };
      if (this.props.onResizeStop) {
        this.props.onResizeStop(event, direction, this.resizable, delta);
      }
      if (this.props.size) {
        this.setState(this.props.size);
      }
      this.setState({ isResizing: false, resizeCursor: 'auto' });
    }
  }, {
    key: 'updateSize',
    value: function updateSize(size) {
      this.setState({ width: size.width, height: size.height });
    }
  }, {
    key: 'renderResizer',
    value: function renderResizer() {
      var _this2 = this;

      var _props3 = this.props,
          enable = _props3.enable,
          handleStyles = _props3.handleStyles,
          handleClasses = _props3.handleClasses,
          handleWrapperStyle = _props3.handleWrapperStyle,
          handleWrapperClass = _props3.handleWrapperClass,
          handleComponent = _props3.handleComponent;

      if (!enable) return null;
      var resizers = Object.keys(enable).map(function (dir) {
        if (enable[dir] !== false) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
            Resizer,
            {
              key: dir,
              direction: dir,
              onResizeStart: _this2.onResizeStart,
              replaceStyles: handleStyles && handleStyles[dir],
              className: handleClasses && handleClasses[dir]
            },
            handleComponent && handleComponent[dir] ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(handleComponent[dir]) : null
          );
        }
        return null;
      });
      // #93 Wrap the resize box in span (will not break 100% width/height)
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        'span',
        { className: handleWrapperClass, style: handleWrapperStyle },
        resizers
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var userSelect = this.state.isResizing ? userSelectNone : userSelectAuto;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        'div',
        _extends({
          ref: function ref(c) {
            if (c) {
              _this3.resizable = c;
            }
          },
          style: _extends({
            position: 'relative'
          }, userSelect, this.props.style, this.sizeStyle, {
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            boxSizing: 'border-box'
          }),
          className: this.props.className
        }, this.extendsProps),
        this.state.isResizing && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', {
          style: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            cursor: '' + (this.state.resizeCursor || 'auto'),
            opacity: '0',
            position: 'fixed',
            zIndex: '9999',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0'
          }
        }),
        this.props.children,
        this.renderResizer()
      );
    }
  }, {
    key: 'parentNode',
    get: function get$$1() {
      return this.resizable.parentNode;
    }
  }, {
    key: 'propsSize',
    get: function get$$1() {
      return this.props.size || this.props.defaultSize;
    }
  }, {
    key: 'base',
    get: function get$$1() {
      var parent = this.parentNode;
      if (!parent) return undefined;
      var children = [].slice.call(parent.children);
      for (var i = 0; i < children.length; i += 1) {
        var n = children[i];
        if (n instanceof HTMLElement) {
          if (n.classList.contains(baseClassName)) {
            return n;
          }
        }
      }
      return undefined;
    }
  }, {
    key: 'size',
    get: function get$$1() {
      var width = 0;
      var height = 0;
      if (typeof window !== 'undefined') {
        var orgWidth = this.resizable.offsetWidth;
        var orgHeight = this.resizable.offsetHeight;
        // HACK: Set position `relative` to get parent size.
        //       This is because when re-resizable set `absolute`, I can not get base width correctly.
        var orgPosition = this.resizable.style.position;
        if (orgPosition !== 'relative') {
          this.resizable.style.position = 'relative';
        }
        // INFO: Use original width or height if set auto.
        width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
        height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
        // Restore original position
        this.resizable.style.position = orgPosition;
      }
      return { width: width, height: height };
    }
  }, {
    key: 'sizeStyle',
    get: function get$$1() {
      var _this4 = this;

      var size = this.props.size;

      var getSize = function getSize(key) {
        if (typeof _this4.state[key] === 'undefined' || _this4.state[key] === 'auto') return 'auto';
        if (_this4.propsSize && _this4.propsSize[key] && endsWith(_this4.propsSize[key].toString(), '%')) {
          if (endsWith(_this4.state[key].toString(), '%')) return _this4.state[key].toString();
          var parentSize = _this4.getParentSize();
          var value = Number(_this4.state[key].toString().replace('px', ''));
          var percent = value / parentSize[key] * 100;
          return percent + '%';
        }
        return getStringSize(_this4.state[key]);
      };
      var width = size && typeof size.width !== 'undefined' && !this.state.isResizing ? getStringSize(size.width) : getSize('width');
      var height = size && typeof size.height !== 'undefined' && !this.state.isResizing ? getStringSize(size.height) : getSize('height');
      return { width: width, height: height };
    }
  }]);
  return Resizable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Resizable.defaultProps = {
  onResizeStart: function onResizeStart() {},
  onResize: function onResize() {},
  onResizeStop: function onResizeStop() {},
  enable: {
    top: true,
    right: true,
    bottom: true,
    left: true,
    topRight: true,
    bottomRight: true,
    bottomLeft: true,
    topLeft: true
  },
  style: {},
  grid: [1, 1],
  lockAspectRatio: false,
  lockAspectRatioExtraWidth: 0,
  lockAspectRatioExtraHeight: 0,
  scale: 1,
  resizeRatio: 1
};

/* harmony default export */ __webpack_exports__["a"] = (Resizable);


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(76), __webpack_require__(3)) :
	typeof define === 'function' && define.amd ? define(['react-dom', 'react'], factory) :
	(global.ReactDraggable = factory(global.ReactDOM,global.React));
}(this, (function (ReactDOM,React) { 'use strict';

	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	{
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction_1;

	{
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	{
	  var invariant$1 = invariant_1;
	  var warning$1 = warning_1;
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant_1(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if ("development" !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning_1(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
	      return emptyFunction_1.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunction_1.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning_1(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction_1.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	}
	});

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if ('object' !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (false) {
			// register as 'classnames', consistent with npm package name
			undefined('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	}());
	});

	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}

	function isFunction(func /*: any*/) /*: boolean*/ {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}

	function isNum(num /*: any*/) /*: boolean*/ {
	  return typeof num === 'number' && !isNaN(num);
	}

	function int(a /*: string*/) /*: number*/ {
	  return parseInt(a, 10);
	}

	function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
	  if (props[propName]) {
	    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
	  }
	}

	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	function getPrefix() /*: string*/ {
	  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

	  // Checking specifically for 'window.document' is for pseudo-browser server-side
	  // environments that define 'window' as the global context.
	  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
	  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

	  var style = window.document.documentElement.style;

	  if (prop in style) return '';

	  for (var i = 0; i < prefixes.length; i++) {
	    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
	  }

	  return '';
	}

	function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
	}

	function kebabToTitleCase(str /*: string*/) /*: string*/ {
	  var out = '';
	  var shouldCapitalize = true;
	  for (var i = 0; i < str.length; i++) {
	    if (shouldCapitalize) {
	      out += str[i].toUpperCase();
	      shouldCapitalize = false;
	    } else if (str[i] === '-') {
	      shouldCapitalize = true;
	    } else {
	      out += str[i];
	    }
	  }
	  return out;
	}

	// Default export is the prefix itself, like 'Moz', 'Webkit', etc
	// Note that you may have to re-test for certain things; for instance, Chrome 50
	// can handle unprefixed `transform`, but not unprefixed `user-select`
	var browserPrefix = getPrefix();

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	/*:: import type {ControlPosition, PositionOffsetControlPosition, MouseTouchEvent} from './types';*/


	var matchesSelectorFunc = '';
	function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
	  if (!matchesSelectorFunc) {
	    matchesSelectorFunc = findInArray(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	      // $FlowIgnore: Doesn't think elements are indexable
	      return isFunction(el[method]);
	    });
	  }

	  // Might not be found entirely (not an Element?) - in that case, bail
	  // $FlowIgnore: Doesn't think elements are indexable
	  if (!isFunction(el[matchesSelectorFunc])) return false;

	  // $FlowIgnore: Doesn't think elements are indexable
	  return el[matchesSelectorFunc](selector);
	}

	// Works up the tree to the draggable itself attempting to match selector.
	function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
	  var node = el;
	  do {
	    if (matchesSelector(node, selector)) return true;
	    if (node === baseNode) return false;
	    node = node.parentNode;
	  } while (node);

	  return false;
	}

	function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = handler;
	  }
	}

	function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = null;
	  }
	}

	function outerHeight(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height += int(computedStyle.borderTopWidth);
	  height += int(computedStyle.borderBottomWidth);
	  return height;
	}

	function outerWidth(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width += int(computedStyle.borderLeftWidth);
	  width += int(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node /*: HTMLElement*/) /*: number*/ {
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height -= int(computedStyle.paddingTop);
	  height -= int(computedStyle.paddingBottom);
	  return height;
	}

	function innerWidth(node /*: HTMLElement*/) /*: number*/ {
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width -= int(computedStyle.paddingLeft);
	  width -= int(computedStyle.paddingRight);
	  return width;
	}

	// Get from offsetParent
	function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
	  var isBody = offsetParent === offsetParent.ownerDocument.body;
	  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

	  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

	  return { x: x, y: y };
	}

	function createCSSTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: Object*/ {
	  var translation = getTranslation(controlPos, positionOffset, 'px');
	  return defineProperty({}, browserPrefixToKey('transform', browserPrefix), translation);
	}

	function createSVGTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: string*/ {
	  var translation = getTranslation(controlPos, positionOffset, '');
	  return translation;
	}
	function getTranslation(_ref2, positionOffset /*: PositionOffsetControlPosition*/, unitSuffix /*: string*/) /*: string*/ {
	  var x = _ref2.x,
	      y = _ref2.y;

	  var translation = 'translate(' + x + unitSuffix + ',' + y + unitSuffix + ')';
	  if (positionOffset) {
	    var defaultX = '' + (typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
	    var defaultY = '' + (typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
	    translation = 'translate(' + defaultX + ', ' + defaultY + ')' + translation;
	  }
	  return translation;
	}

	function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
	  return e.targetTouches && findInArray(e.targetTouches, function (t) {
	    return identifier === t.identifier;
	  }) || e.changedTouches && findInArray(e.changedTouches, function (t) {
	    return identifier === t.identifier;
	  });
	}

	function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
	  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}

	// User-select Hacks:
	//
	// Useful for preventing blue highlights all over everything when dragging.

	// Note we're passing `document` b/c we could be iframed
	function addUserSelectStyles(doc /*: ?Document*/) {
	  if (!doc) return;
	  var styleEl = doc.getElementById('react-draggable-style-el');
	  if (!styleEl) {
	    styleEl = doc.createElement('style');
	    styleEl.type = 'text/css';
	    styleEl.id = 'react-draggable-style-el';
	    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
	    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
	    doc.getElementsByTagName('head')[0].appendChild(styleEl);
	  }
	  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
	}

	function removeUserSelectStyles(doc /*: ?Document*/) {
	  try {
	    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
	    // $FlowIgnore: IE
	    if (doc.selection) {
	      // $FlowIgnore: IE
	      doc.selection.empty();
	    } else {
	      window.getSelection().removeAllRanges(); // remove selection caused by scroll
	    }
	  } catch (e) {
	    // probably IE
	  }
	}

	function styleHacks() /*: Object*/ {
	  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Workaround IE pointer events; see #51
	  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	  return _extends({
	    touchAction: 'none'
	  }, childStyle);
	}

	function addClassName(el /*: HTMLElement*/, className /*: string*/) {
	  if (el.classList) {
	    el.classList.add(className);
	  } else {
	    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
	      el.className += ' ' + className;
	    }
	  }
	}

	function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
	  if (el.classList) {
	    el.classList.remove(className);
	  } else {
	    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
	  }
	}

	/*:: import type Draggable from '../Draggable';*/
	/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
	/*:: import type DraggableCore from '../DraggableCore';*/


	function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
	  // If no bounds, short-circuit and move on
	  if (!draggable.props.bounds) return [x, y];

	  // Clone new bounds
	  var bounds = draggable.props.bounds;

	  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
	  var node = findDOMNode(draggable);

	  if (typeof bounds === 'string') {
	    var ownerDocument = node.ownerDocument;

	    var ownerWindow = ownerDocument.defaultView;
	    var boundNode = void 0;
	    if (bounds === 'parent') {
	      boundNode = node.parentNode;
	    } else {
	      boundNode = ownerDocument.querySelector(bounds);
	    }
	    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
	      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
	    }
	    var nodeStyle = ownerWindow.getComputedStyle(node);
	    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + int(boundNodeStyle.paddingLeft) + int(nodeStyle.marginLeft),
	      top: -node.offsetTop + int(boundNodeStyle.paddingTop) + int(nodeStyle.marginTop),
	      right: innerWidth(boundNode) - outerWidth(node) - node.offsetLeft + int(boundNodeStyle.paddingRight) - int(nodeStyle.marginRight),
	      bottom: innerHeight(boundNode) - outerHeight(node) - node.offsetTop + int(boundNodeStyle.paddingBottom) - int(nodeStyle.marginBottom)
	    };
	  }

	  // Keep x and y below right and bottom limits...
	  if (isNum(bounds.right)) x = Math.min(x, bounds.right);
	  if (isNum(bounds.bottom)) y = Math.min(y, bounds.bottom);

	  // But above left and top limits.
	  if (isNum(bounds.left)) x = Math.max(x, bounds.left);
	  if (isNum(bounds.top)) y = Math.max(y, bounds.top);

	  return [x, y];
	}

	function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}

	function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	}

	function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	}

	// Get {x, y} positions from event.
	function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
	  var touchObj = typeof touchIdentifier === 'number' ? getTouch(e, touchIdentifier) : null;
	  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
	  var node = findDOMNode(draggableCore);
	  // User can provide an offsetParent if desired.
	  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
	  return offsetXYFromParent(touchObj || e, offsetParent);
	}

	// Create an data object exposed by <DraggableCore>'s events
	function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
	  var state = draggable.state;
	  var isStart = !isNum(state.lastX);
	  var node = findDOMNode(draggable);

	  if (isStart) {
	    // If this is our first move, use the x and y as last coords.
	    return {
	      node: node,
	      deltaX: 0, deltaY: 0,
	      lastX: x, lastY: y,
	      x: x, y: y
	    };
	  } else {
	    // Otherwise calculate proper values.
	    return {
	      node: node,
	      deltaX: x - state.lastX, deltaY: y - state.lastY,
	      lastX: state.lastX, lastY: state.lastY,
	      x: x, y: y
	    };
	  }
	}

	// Create an data exposed by <Draggable>'s events
	function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
	  var scale = draggable.props.scale;
	  return {
	    node: coreData.node,
	    x: draggable.state.x + coreData.deltaX / scale,
	    y: draggable.state.y + coreData.deltaY / scale,
	    deltaX: coreData.deltaX / scale,
	    deltaY: coreData.deltaY / scale,
	    lastX: draggable.state.x,
	    lastY: draggable.state.y
	  };
	}

	// A lot faster than stringify/parse
	function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
	  return {
	    left: bounds.left,
	    top: bounds.top,
	    right: bounds.right,
	    bottom: bounds.bottom
	  };
	}

	function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
	  var node = ReactDOM.findDOMNode(draggable);
	  if (!node) {
	    throw new Error('<DraggableCore>: Unmounted during event!');
	  }
	  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
	  return node;
	}

	/*eslint no-console:0*/
	function log() {
	}

	/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


	// Simple abstraction for dragging events names.
	/*:: import type {Element as ReactElement} from 'react';*/
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    stop: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    stop: 'mouseup'
	  }
	};

	// Default to mouse events.
	var dragEventFor = eventsFor.mouse;

	/*:: type DraggableCoreState = {
	  dragging: boolean,
	  lastX: number,
	  lastY: number,
	  touchIdentifier: ?number
	};*/
	/*:: export type DraggableBounds = {
	  left: number,
	  right: number,
	  top: number,
	  bottom: number,
	};*/
	/*:: export type DraggableData = {
	  node: HTMLElement,
	  x: number, y: number,
	  deltaX: number, deltaY: number,
	  lastX: number, lastY: number,
	};*/
	/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
	/*:: export type ControlPosition = {x: number, y: number};*/
	/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/


	//
	// Define <DraggableCore>.
	//
	// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
	// work well with libraries that require more control over the element.
	//

	/*:: export type DraggableCoreProps = {
	  allowAnyClick: boolean,
	  cancel: string,
	  children: ReactElement<any>,
	  disabled: boolean,
	  enableUserSelectHack: boolean,
	  offsetParent: HTMLElement,
	  grid: [number, number],
	  handle: string,
	  onStart: DraggableEventHandler,
	  onDrag: DraggableEventHandler,
	  onStop: DraggableEventHandler,
	  onMouseDown: (e: MouseEvent) => void,
	};*/

	var DraggableCore = function (_React$Component) {
	  inherits(DraggableCore, _React$Component);

	  function DraggableCore() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, DraggableCore);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dragging: false,
	      // Used while dragging to determine deltas.
	      lastX: NaN, lastY: NaN,
	      touchIdentifier: null
	    }, _this.handleDragStart = function (e) {
	      // Make it possible to attach event handlers on top of this one.
	      _this.props.onMouseDown(e);

	      // Only accept left-clicks.
	      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

	      // Get nodes. Be sure to grab relative document (could be iframed)
	      var thisNode = ReactDOM.findDOMNode(_this);
	      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
	        throw new Error('<DraggableCore> not mounted on DragStart!');
	      }
	      var ownerDocument = thisNode.ownerDocument;

	      // Short circuit if handle or cancel prop was provided and selector doesn't match.

	      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !matchesSelectorAndParentsTo(e.target, _this.props.handle, thisNode) || _this.props.cancel && matchesSelectorAndParentsTo(e.target, _this.props.cancel, thisNode)) {
	        return;
	      }

	      // Set touch identifier in component state if this is a touch event. This allows us to
	      // distinguish between individual touches on multitouch screens by identifying which
	      // touchpoint was set to this element.
	      var touchIdentifier = getTouchIdentifier(e);
	      _this.setState({ touchIdentifier: touchIdentifier });

	      // Get the current drag point from the event. This is used as the offset.
	      var position = getControlPosition(e, touchIdentifier, _this);
	      if (position == null) return; // not possible but satisfies flow
	      var x = position.x,
	          y = position.y;

	      // Create an event object with all the data parents need to make a decision here.

	      var coreEvent = createCoreData(_this, x, y);

	      // Call event handler. If it returns explicit false, cancel.
	      log('calling', _this.props.onStart);
	      var shouldUpdate = _this.props.onStart(e, coreEvent);
	      if (shouldUpdate === false) return;

	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      if (_this.props.enableUserSelectHack) addUserSelectStyles(ownerDocument);

	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,

	        lastX: x,
	        lastY: y
	      });

	      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
	      // this element. We use different events depending on whether or not we have detected that this
	      // is a touch-capable device.
	      addEvent(ownerDocument, dragEventFor.move, _this.handleDrag);
	      addEvent(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleDrag = function (e) {

	      // Prevent scrolling on mobile devices, like ipad/iphone.
	      if (e.type === 'touchmove') e.preventDefault();

	      // Get the current drag point from the event. This is used as the offset.
	      var position = getControlPosition(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;

	      // Snap to grid if prop has been provided

	      if (Array.isArray(_this.props.grid)) {
	        var _deltaX = x - _this.state.lastX,
	            _deltaY = y - _this.state.lastY;

	        var _snapToGrid = snapToGrid(_this.props.grid, _deltaX, _deltaY);

	        var _snapToGrid2 = slicedToArray(_snapToGrid, 2);

	        _deltaX = _snapToGrid2[0];
	        _deltaY = _snapToGrid2[1];

	        if (!_deltaX && !_deltaY) return; // skip useless drag
	        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
	      }

	      var coreEvent = createCoreData(_this, x, y);

	      // Call event handler. If it returns explicit false, trigger end.
	      var shouldUpdate = _this.props.onDrag(e, coreEvent);
	      if (shouldUpdate === false) {
	        try {
	          // $FlowIgnore
	          _this.handleDragStop(new MouseEvent('mouseup'));
	        } catch (err) {
	          // Old browsers
	          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
	          // I see why this insanity was deprecated
	          // $FlowIgnore
	          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	          _this.handleDragStop(event);
	        }
	        return;
	      }

	      _this.setState({
	        lastX: x,
	        lastY: y
	      });
	    }, _this.handleDragStop = function (e) {
	      if (!_this.state.dragging) return;

	      var position = getControlPosition(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;

	      var coreEvent = createCoreData(_this, x, y);

	      var thisNode = ReactDOM.findDOMNode(_this);
	      if (thisNode) {
	        // Remove user-select hack
	        if (_this.props.enableUserSelectHack) removeUserSelectStyles(thisNode.ownerDocument);
	      }

	      // Reset the el.
	      _this.setState({
	        dragging: false,
	        lastX: NaN,
	        lastY: NaN
	      });

	      // Call event handler
	      _this.props.onStop(e, coreEvent);

	      if (thisNode) {
	        removeEvent(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
	        removeEvent(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
	      }
	    }, _this.onMouseDown = function (e) {
	      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

	      return _this.handleDragStart(e);
	    }, _this.onMouseUp = function (e) {
	      dragEventFor = eventsFor.mouse;

	      return _this.handleDragStop(e);
	    }, _this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;

	      return _this.handleDragStart(e);
	    }, _this.onTouchEnd = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;

	      return _this.handleDragStop(e);
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(DraggableCore, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
	      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
	      var thisNode = ReactDOM.findDOMNode(this);
	      if (thisNode) {
	        var ownerDocument = thisNode.ownerDocument;

	        removeEvent(ownerDocument, eventsFor.mouse.move, this.handleDrag);
	        removeEvent(ownerDocument, eventsFor.touch.move, this.handleDrag);
	        removeEvent(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
	        removeEvent(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
	        if (this.props.enableUserSelectHack) removeUserSelectStyles(ownerDocument);
	      }
	    }

	    // Same as onMouseDown (start drag), but now consider this a touch device.

	  }, {
	    key: 'render',
	    value: function render() {
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return React.cloneElement(React.Children.only(this.props.children), {
	        style: styleHacks(this.props.children.props.style),

	        // Note: mouseMove handler is attached to document so it will still function
	        // when the user drags quickly and leaves the bounds of the element.
	        onMouseDown: this.onMouseDown,
	        onTouchStart: this.onTouchStart,
	        onMouseUp: this.onMouseUp,
	        onTouchEnd: this.onTouchEnd
	      });
	    }
	  }]);
	  return DraggableCore;
	}(React.Component);

	DraggableCore.displayName = 'DraggableCore';
	DraggableCore.propTypes = {
	  /**
	   * `allowAnyClick` allows dragging using any mouse button.
	   * By default, we only accept the left button.
	   *
	   * Defaults to `false`.
	   */
	  allowAnyClick: propTypes.bool,

	  /**
	   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
	   * with the exception of `onMouseDown`, will not fire.
	   */
	  disabled: propTypes.bool,

	  /**
	   * By default, we add 'user-select:none' attributes to the document body
	   * to prevent ugly text selection during drag. If this is causing problems
	   * for your app, set this to `false`.
	   */
	  enableUserSelectHack: propTypes.bool,

	  /**
	   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
	   * instead of using the parent node.
	   */
	  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
	    if (props[propName] && props[propName].nodeType !== 1) {
	      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
	    }
	  },

	  /**
	   * `grid` specifies the x and y that dragging should snap to.
	   */
	  grid: propTypes.arrayOf(propTypes.number),

	  /**
	   * `scale` specifies the scale of the area you are dragging inside of. It allows
	   * the drag deltas to scale correctly with how far zoomed in/out you are.
	   */
	  scale: propTypes.number,

	  /**
	   * `handle` specifies a selector to be used as the handle that initiates drag.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable handle=".handle">
	   *              <div>
	   *                  <div className="handle">Click me to drag</div>
	   *                  <div>This is some other content</div>
	   *              </div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  handle: propTypes.string,

	  /**
	   * `cancel` specifies a selector to be used to prevent drag initialization.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return(
	   *               <Draggable cancel=".cancel">
	   *                   <div>
	   *                     <div className="cancel">You can't drag from here</div>
	   *                     <div>Dragging here works fine</div>
	   *                   </div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  cancel: propTypes.string,

	  /**
	   * Called when dragging starts.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onStart: propTypes.func,

	  /**
	   * Called while dragging.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onDrag: propTypes.func,

	  /**
	   * Called when dragging stops.
	   * If this function returns the boolean false, the drag will remain active.
	   */
	  onStop: propTypes.func,

	  /**
	   * A workaround option which can be passed if onMouseDown needs to be accessed,
	   * since it'll always be blocked (as there is internal use of onMouseDown)
	   */
	  onMouseDown: propTypes.func,

	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: dontSetMe,
	  style: dontSetMe,
	  transform: dontSetMe
	};
	DraggableCore.defaultProps = {
	  allowAnyClick: false, // by default only accept left click
	  cancel: null,
	  disabled: false,
	  enableUserSelectHack: true,
	  offsetParent: null,
	  handle: null,
	  grid: null,
	  transform: null,
	  onStart: function onStart() {},
	  onDrag: function onDrag() {},
	  onStop: function onStop() {},
	  onMouseDown: function onMouseDown() {}
	};

	/*:: import type {DraggableEventHandler} from './utils/types';*/
	/*:: import type {Element as ReactElement} from 'react';*/
	/*:: type DraggableState = {
	  dragging: boolean,
	  dragged: boolean,
	  x: number, y: number,
	  slackX: number, slackY: number,
	  isElementSVG: boolean
	};*/


	//
	// Define <Draggable>
	//

	/*:: export type DraggableProps = {
	  ...$Exact<DraggableCoreProps>,
	  axis: 'both' | 'x' | 'y' | 'none',
	  bounds: DraggableBounds | string | false,
	  defaultClassName: string,
	  defaultClassNameDragging: string,
	  defaultClassNameDragged: string,
	  defaultPosition: ControlPosition,
	  positionOffset: PositionOffsetControlPosition,
	  position: ControlPosition,
	  scale: number
	};*/

	var Draggable = function (_React$Component) {
	  inherits(Draggable, _React$Component);

	  function Draggable(props /*: DraggableProps*/) {
	    classCallCheck(this, Draggable);

	    var _this = possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

	    _this.onDragStart = function (e, coreData) {

	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, createDraggableData(_this, coreData));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;

	      _this.setState({ dragging: true, dragged: true });
	    };

	    _this.onDrag = function (e, coreData) {
	      if (!_this.state.dragging) return false;

	      var uiData = createDraggableData(_this, coreData);

	      var newState /*: $Shape<DraggableState>*/ = {
	        x: uiData.x,
	        y: uiData.y
	      };

	      // Keep within bounds.
	      if (_this.props.bounds) {
	        // Save original x and y.
	        var _x = newState.x,
	            _y = newState.y;

	        // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.

	        newState.x += _this.state.slackX;
	        newState.y += _this.state.slackY;

	        // Get bound position. This will ceil/floor the x and y within the boundaries.

	        var _getBoundPosition = getBoundPosition(_this, newState.x, newState.y),
	            _getBoundPosition2 = slicedToArray(_getBoundPosition, 2),
	            newStateX = _getBoundPosition2[0],
	            newStateY = _getBoundPosition2[1];

	        newState.x = newStateX;
	        newState.y = newStateY;

	        // Recalculate slack by noting how much was shaved by the boundPosition handler.
	        newState.slackX = _this.state.slackX + (_x - newState.x);
	        newState.slackY = _this.state.slackY + (_y - newState.y);

	        // Update the event we fire to reflect what really happened after bounds took effect.
	        uiData.x = newState.x;
	        uiData.y = newState.y;
	        uiData.deltaX = newState.x - _this.state.x;
	        uiData.deltaY = newState.y - _this.state.y;
	      }

	      // Short-circuit if user's callback killed it.
	      var shouldUpdate = _this.props.onDrag(e, uiData);
	      if (shouldUpdate === false) return false;

	      _this.setState(newState);
	    };

	    _this.onDragStop = function (e, coreData) {
	      if (!_this.state.dragging) return false;

	      // Short-circuit if user's callback killed it.
	      var shouldStop = _this.props.onStop(e, createDraggableData(_this, coreData));
	      if (shouldStop === false) return false;

	      var newState /*: $Shape<DraggableState>*/ = {
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      };

	      // If this is a controlled component, the result of this operation will be to
	      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
	      var controlled = Boolean(_this.props.position);
	      if (controlled) {
	        var _this$props$position = _this.props.position,
	            _x2 = _this$props$position.x,
	            _y2 = _this$props$position.y;

	        newState.x = _x2;
	        newState.y = _y2;
	      }

	      _this.setState(newState);
	    };

	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,

	      // Whether or not we have been dragged before.
	      dragged: false,

	      // Current transform x and y.
	      x: props.position ? props.position.x : props.defaultPosition.x,
	      y: props.position ? props.position.y : props.defaultPosition.y,

	      // Used for compensating for out-of-bounds drags
	      slackX: 0, slackY: 0,

	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };

	    if (props.position && !(props.onDrag || props.onStop)) {
	      // eslint-disable-next-line no-console
	      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
	    }
	    return _this;
	  }

	  createClass(Draggable, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (typeof window.SVGElement !== 'undefined' && ReactDOM.findDOMNode(this) instanceof window.SVGElement) {
	        this.setState({ isElementSVG: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps /*: Object*/) {
	      // Set x/y if position has changed
	      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
	        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
	    }
	  }, {
	    key: 'render',
	    value: function render() /*: ReactElement<any>*/ {
	      var _classNames;

	      var style = {},
	          svgTransform = null;

	      // If this is controlled, we don't want to move it - unless it's dragging.
	      var controlled = Boolean(this.props.position);
	      var draggable = !controlled || this.state.dragging;

	      var position = this.props.position || this.props.defaultPosition;
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: canDragX(this) && draggable ? this.state.x : position.x,

	        // Set top if vertical drag is enabled
	        y: canDragY(this) && draggable ? this.state.y : position.y
	      };

	      // If this element was SVG, we use the `transform` attribute.
	      if (this.state.isElementSVG) {
	        svgTransform = createSVGTransform(transformOpts, this.props.positionOffset);
	      } else {
	        // Add a CSS transform to move the element around. This allows us to move the element around
	        // without worrying about whether or not it is relatively or absolutely positioned.
	        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	        // has a clean slate.
	        style = createCSSTransform(transformOpts, this.props.positionOffset);
	      }

	      var _props = this.props,
	          defaultClassName = _props.defaultClassName,
	          defaultClassNameDragging = _props.defaultClassNameDragging,
	          defaultClassNameDragged = _props.defaultClassNameDragged;


	      var children = React.Children.only(this.props.children);

	      // Mark with class while dragging
	      var className = classnames(children.props.className || '', defaultClassName, (_classNames = {}, defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return React.createElement(
	        DraggableCore,
	        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
	        React.cloneElement(children, {
	          className: className,
	          style: _extends({}, children.props.style, style),
	          transform: svgTransform
	        })
	      );
	    }
	  }]);
	  return Draggable;
	}(React.Component);

	Draggable.displayName = 'Draggable';
	Draggable.propTypes = _extends({}, DraggableCore.propTypes, {

	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: propTypes.oneOf(['both', 'x', 'y', 'none']),

	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: propTypes.oneOfType([propTypes.shape({
	    left: propTypes.number,
	    right: propTypes.number,
	    top: propTypes.number,
	    bottom: propTypes.number
	  }), propTypes.string, propTypes.oneOf([false])]),

	  defaultClassName: propTypes.string,
	  defaultClassNameDragging: propTypes.string,
	  defaultClassNameDragged: propTypes.string,

	  /**
	   * `defaultPosition` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  defaultPosition: propTypes.shape({
	    x: propTypes.number,
	    y: propTypes.number
	  }),
	  positionOffset: propTypes.shape({
	    x: propTypes.oneOfType([propTypes.number, propTypes.string]),
	    y: propTypes.oneOfType([propTypes.number, propTypes.string])
	  }),

	  /**
	   * `position`, if present, defines the current position of the element.
	   *
	   *  This is similar to how form elements in React work - if no `position` is supplied, the component
	   *  is uncontrolled.
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable position={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  position: propTypes.shape({
	    x: propTypes.number,
	    y: propTypes.number
	  }),

	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: dontSetMe,
	  style: dontSetMe,
	  transform: dontSetMe
	});
	Draggable.defaultProps = _extends({}, DraggableCore.defaultProps, {
	  axis: 'both',
	  bounds: false,
	  defaultClassName: 'react-draggable',
	  defaultClassNameDragging: 'react-draggable-dragging',
	  defaultClassNameDragged: 'react-draggable-dragged',
	  defaultPosition: { x: 0, y: 0 },
	  position: null,
	  scale: 1
	});

	// Previous versions of this lib exported <Draggable> as the root export. As to not break
	// them, or TypeScript, we export *both* as the root and as 'default'.
	// See https://github.com/mzabriskie/react-draggable/pull/254
	// and https://github.com/mzabriskie/react-draggable/issues/266
	Draggable.default = Draggable;
	Draggable.DraggableCore = DraggableCore;

	return Draggable;

})));
//# sourceMappingURL=react-draggable.js.map


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(469);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(76);

var _eventlistener = __webpack_require__(448);

var _lodash = __webpack_require__(433);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(458);

var _lodash4 = _interopRequireDefault(_lodash3);

var _parentScroll = __webpack_require__(466);

var _parentScroll2 = _interopRequireDefault(_parentScroll);

var _inViewport = __webpack_require__(465);

var _inViewport2 = _interopRequireDefault(_inViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.lazyLoadHandler = _this.lazyLoadHandler.bind(_this);

    if (props.throttle > 0) {
      if (props.debounce) {
        _this.lazyLoadHandler = (0, _lodash2.default)(_this.lazyLoadHandler, props.throttle);
      } else {
        _this.lazyLoadHandler = (0, _lodash4.default)(_this.lazyLoadHandler, props.throttle);
      }
    }

    _this.state = { visible: false };
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
      var eventNode = this.getEventNode();

      this.lazyLoadHandler();

      if (this.lazyLoadHandler.flush) {
        this.lazyLoadHandler.flush();
      }

      (0, _eventlistener.add)(window, 'resize', this.lazyLoadHandler);
      (0, _eventlistener.add)(eventNode, 'scroll', this.lazyLoadHandler);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (!this.state.visible) {
        this.lazyLoadHandler();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_nextProps, nextState) {
      return nextState.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      if (this.lazyLoadHandler.cancel) {
        this.lazyLoadHandler.cancel();
      }

      this.detachListeners();
    }
  }, {
    key: 'getEventNode',
    value: function getEventNode() {
      return (0, _parentScroll2.default)((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var _props = this.props,
          offset = _props.offset,
          offsetVertical = _props.offsetVertical,
          offsetHorizontal = _props.offsetHorizontal,
          offsetTop = _props.offsetTop,
          offsetBottom = _props.offsetBottom,
          offsetLeft = _props.offsetLeft,
          offsetRight = _props.offsetRight,
          threshold = _props.threshold;


      var _offsetAll = threshold || offset;
      var _offsetVertical = offsetVertical || _offsetAll;
      var _offsetHorizontal = offsetHorizontal || _offsetAll;

      return {
        top: offsetTop || _offsetVertical,
        bottom: offsetBottom || _offsetVertical,
        left: offsetLeft || _offsetHorizontal,
        right: offsetRight || _offsetHorizontal
      };
    }
  }, {
    key: 'lazyLoadHandler',
    value: function lazyLoadHandler() {
      if (!this._mounted) {
        return;
      }
      var offset = this.getOffset();
      var node = (0, _reactDom.findDOMNode)(this);
      var eventNode = this.getEventNode();

      if ((0, _inViewport2.default)(node, eventNode, offset)) {
        var onContentVisible = this.props.onContentVisible;


        this.setState({ visible: true }, function () {
          if (onContentVisible) {
            onContentVisible();
          }
        });
        this.detachListeners();
      }
    }
  }, {
    key: 'detachListeners',
    value: function detachListeners() {
      var eventNode = this.getEventNode();

      (0, _eventlistener.remove)(window, 'resize', this.lazyLoadHandler);
      (0, _eventlistener.remove)(eventNode, 'scroll', this.lazyLoadHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          height = _props2.height,
          width = _props2.width;
      var visible = this.state.visible;


      var elStyles = { height: height, width: width };
      var elClasses = 'LazyLoad' + (visible ? ' is-visible' : '') + (className ? ' ' + className : '');

      return _react2.default.createElement(this.props.elementType, {
        className: elClasses,
        style: elStyles
      }, visible && _react.Children.only(children));
    }
  }]);

  return LazyLoad;
}(_react.Component);

exports.default = LazyLoad;


LazyLoad.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  debounce: _propTypes2.default.bool,
  elementType: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  offset: _propTypes2.default.number,
  offsetBottom: _propTypes2.default.number,
  offsetHorizontal: _propTypes2.default.number,
  offsetLeft: _propTypes2.default.number,
  offsetRight: _propTypes2.default.number,
  offsetTop: _propTypes2.default.number,
  offsetVertical: _propTypes2.default.number,
  threshold: _propTypes2.default.number,
  throttle: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onContentVisible: _propTypes2.default.func
};

LazyLoad.defaultProps = {
  elementType: 'div',
  debounce: true,
  offset: 0,
  offsetBottom: 0,
  offsetHorizontal: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetTop: 0,
  offsetVertical: 0,
  throttle: 250
};

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getElementPosition;
/*
* Finds element's position relative to the whole document,
* rather than to the viewport as it is the case with .getBoundingClientRect().
*/
function getElementPosition(element) {
  var rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewport;

var _getElementPosition = __webpack_require__(464);

var _getElementPosition2 = _interopRequireDefault(_getElementPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isHidden = function isHidden(element) {
  return element.offsetParent === null;
};

function inViewport(element, container, customOffset) {
  if (isHidden(element)) {
    return false;
  }

  var top = void 0;
  var bottom = void 0;
  var left = void 0;
  var right = void 0;

  if (typeof container === 'undefined' || container === window) {
    top = window.pageYOffset;
    left = window.pageXOffset;
    bottom = top + window.innerHeight;
    right = left + window.innerWidth;
  } else {
    var containerPosition = (0, _getElementPosition2.default)(container);

    top = containerPosition.top;
    left = containerPosition.left;
    bottom = top + container.offsetHeight;
    right = left + container.offsetWidth;
  }

  var elementPosition = (0, _getElementPosition2.default)(element);

  return top <= elementPosition.top + element.offsetHeight + customOffset.top && bottom >= elementPosition.top - customOffset.bottom && left <= elementPosition.left + element.offsetWidth + customOffset.left && right >= elementPosition.left - customOffset.right;
}

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var style = function style(element, prop) {
  return typeof getComputedStyle !== 'undefined' ? getComputedStyle(element, null).getPropertyValue(prop) : element.style[prop];
};

var overflow = function overflow(element) {
  return style(element, 'overflow') + style(element, 'overflow-y') + style(element, 'overflow-x');
};

var scrollParent = function scrollParent(element) {
  if (!(element instanceof HTMLElement)) {
    return window;
  }

  var parent = element;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }

    if (!parent.parentNode) {
      break;
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};

exports.default = scrollParent;

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(427);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(404);
var assign = __webpack_require__(410);

var ReactPropTypesSecret = __webpack_require__(427);
var checkPropTypes = __webpack_require__(467);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(404);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(468)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(403);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(419);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(476);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = __webpack_require__(472);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-debugger: "warn" */


/**
 * Predefined constants
 * @type {Object}
 */
var constants = {
  orientation: {
    horizontal: {
      dimension: 'width',
      direction: 'left',
      reverseDirection: 'right',
      coordinate: 'x'
    },
    vertical: {
      dimension: 'height',
      direction: 'top',
      reverseDirection: 'bottom',
      coordinate: 'y'
    }
  }
};

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props, context) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

    _this.handleFormat = function (value) {
      var format = _this.props.format;

      return format ? format(value) : value;
    };

    _this.handleUpdate = function () {
      if (!_this.slider) {
        // for shallow rendering
        return;
      }
      var orientation = _this.props.orientation;

      var dimension = (0, _utils.capitalize)(constants.orientation[orientation].dimension);
      var sliderPos = _this.slider['offset' + dimension];
      var handlePos = _this.handle['offset' + dimension];

      _this.setState({
        limit: sliderPos - handlePos,
        grab: handlePos / 2
      });
    };

    _this.handleStart = function (e) {
      var onChangeStart = _this.props.onChangeStart;

      document.addEventListener('mousemove', _this.handleDrag);
      document.addEventListener('mouseup', _this.handleEnd);
      _this.setState({
        active: true
      }, function () {
        onChangeStart && onChangeStart(e);
      });
    };

    _this.handleDrag = function (e) {
      e.stopPropagation();
      var onChange = _this.props.onChange;
      var _e$target = e.target,
          className = _e$target.className,
          classList = _e$target.classList,
          dataset = _e$target.dataset;

      if (!onChange || className === 'rangeslider__labels') return;

      var value = _this.position(e);

      if (classList && classList.contains('rangeslider__label-item') && dataset.value) {
        value = parseFloat(dataset.value);
      }

      onChange && onChange(value, e);
    };

    _this.handleEnd = function (e) {
      var onChangeComplete = _this.props.onChangeComplete;

      _this.setState({
        active: false
      }, function () {
        onChangeComplete && onChangeComplete(e);
      });
      document.removeEventListener('mousemove', _this.handleDrag);
      document.removeEventListener('mouseup', _this.handleEnd);
    };

    _this.handleKeyDown = function (e) {
      e.preventDefault();
      var keyCode = e.keyCode;
      var _this$props = _this.props,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          onChange = _this$props.onChange;

      var sliderValue = void 0;

      switch (keyCode) {
        case 38:
        case 39:
          sliderValue = value + step > max ? max : value + step;
          onChange && onChange(sliderValue, e);
          break;
        case 37:
        case 40:
          sliderValue = value - step < min ? min : value - step;
          onChange && onChange(sliderValue, e);
          break;
      }
    };

    _this.getPositionFromValue = function (value) {
      var limit = _this.state.limit;
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max;

      var diffMaxMin = max - min;
      var diffValMin = value - min;
      var percentage = diffValMin / diffMaxMin;
      var pos = Math.round(percentage * limit);

      return pos;
    };

    _this.getValueFromPosition = function (pos) {
      var limit = _this.state.limit;
      var _this$props3 = _this.props,
          orientation = _this$props3.orientation,
          min = _this$props3.min,
          max = _this$props3.max,
          step = _this$props3.step;

      var percentage = (0, _utils.clamp)(pos, 0, limit) / (limit || 1);
      var baseVal = step * Math.round(percentage * (max - min) / step);
      var value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

      return (0, _utils.clamp)(value, min, max);
    };

    _this.position = function (e) {
      var grab = _this.state.grab;
      var _this$props4 = _this.props,
          orientation = _this$props4.orientation,
          reverse = _this$props4.reverse;


      var node = _this.slider;
      var coordinateStyle = constants.orientation[orientation].coordinate;
      var directionStyle = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var clientCoordinateStyle = 'client' + (0, _utils.capitalize)(coordinateStyle);
      var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
      var direction = node.getBoundingClientRect()[directionStyle];
      var pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;
      var value = _this.getValueFromPosition(pos);

      return value;
    };

    _this.coordinates = function (pos) {
      var _this$state = _this.state,
          limit = _this$state.limit,
          grab = _this$state.grab;
      var orientation = _this.props.orientation;

      var value = _this.getValueFromPosition(pos);
      var position = _this.getPositionFromValue(value);
      var handlePos = orientation === 'horizontal' ? position + grab : position;
      var fillPos = orientation === 'horizontal' ? handlePos : limit - handlePos;

      return {
        fill: fillPos,
        handle: handlePos,
        label: handlePos
      };
    };

    _this.renderLabels = function (labels) {
      return _react2.default.createElement(
        'ul',
        {
          ref: function ref(sl) {
            _this.labels = sl;
          },
          className: (0, _classnames2.default)('rangeslider__labels')
        },
        labels
      );
    };

    _this.state = {
      active: false,
      limit: 0,
      grab: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleUpdate();
      var resizeObserver = new _resizeObserverPolyfill2.default(this.handleUpdate);
      resizeObserver.observe(this.slider);
    }

    /**
     * Format label/tooltip value
     * @param  {Number} - value
     * @return {Formatted Number}
     */


    /**
     * Update slider state on change
     * @return {void}
     */


    /**
     * Attach event listeners to mousemove/mouseup events
     * @return {void}
     */


    /**
     * Handle drag/mousemove event
     * @param  {Object} e - Event object
     * @return {void}
     */


    /**
     * Detach event listeners to mousemove/mouseup events
     * @return {void}
     */


    /**
     * Support for key events on the slider handle
     * @param  {Object} e - Event object
     * @return {void}
     */


    /**
     * Calculate position of slider based on its value
     * @param  {number} value - Current value of slider
     * @return {position} pos - Calculated position of slider based on value
     */


    /**
     * Translate position of slider to slider value
     * @param  {number} pos - Current position/coordinates of slider
     * @return {number} value - Slider value
     */


    /**
     * Calculate position of slider based on value
     * @param  {Object} e - Event object
     * @return {number} value - Slider value
     */


    /**
     * Grab coordinates of slider
     * @param  {Object} pos - Position object
     * @return {Object} - Slider fill/handle coordinates
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          orientation = _props.orientation,
          className = _props.className,
          tooltip = _props.tooltip,
          reverse = _props.reverse,
          labels = _props.labels,
          min = _props.min,
          max = _props.max,
          handleLabel = _props.handleLabel;
      var active = this.state.active;

      var dimension = constants.orientation[orientation].dimension;
      var direction = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var position = this.getPositionFromValue(value);
      var coords = this.coordinates(position);
      var fillStyle = _defineProperty({}, dimension, coords.fill + 'px');
      var handleStyle = _defineProperty({}, direction, coords.handle + 'px');
      var showTooltip = tooltip && active;

      var labelItems = [];
      var labelKeys = Object.keys(labels);

      if (labelKeys.length > 0) {
        labelKeys = labelKeys.sort(function (a, b) {
          return reverse ? a - b : b - a;
        });

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = labelKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var labelPosition = this.getPositionFromValue(key);
            var labelCoords = this.coordinates(labelPosition);
            var labelStyle = _defineProperty({}, direction, labelCoords.label + 'px');

            labelItems.push(_react2.default.createElement(
              'li',
              {
                key: key,
                className: (0, _classnames2.default)('rangeslider__label-item'),
                'data-value': key,
                onMouseDown: this.handleDrag,
                onTouchStart: this.handleStart,
                onTouchEnd: this.handleEnd,
                style: labelStyle
              },
              this.props.labels[key]
            ));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(s) {
            _this2.slider = s;
          },
          className: (0, _classnames2.default)('rangeslider', 'rangeslider-' + orientation, { 'rangeslider-reverse': reverse }, className),
          onMouseDown: this.handleDrag,
          onMouseUp: this.handleEnd,
          onTouchStart: this.handleStart,
          onTouchEnd: this.handleEnd,
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-orientation': orientation
        },
        _react2.default.createElement('div', { className: 'rangeslider__fill', style: fillStyle }),
        _react2.default.createElement(
          'div',
          {
            ref: function ref(sh) {
              _this2.handle = sh;
            },
            className: 'rangeslider__handle',
            onMouseDown: this.handleStart,
            onTouchMove: this.handleDrag,
            onTouchEnd: this.handleEnd,
            onKeyDown: this.handleKeyDown,
            style: handleStyle,
            tabIndex: 0
          },
          showTooltip ? _react2.default.createElement(
            'div',
            {
              ref: function ref(st) {
                _this2.tooltip = st;
              },
              className: 'rangeslider__handle-tooltip'
            },
            _react2.default.createElement(
              'span',
              null,
              this.handleFormat(value)
            )
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'rangeslider__handle-label' },
            handleLabel
          )
        ),
        labels ? this.renderLabels(labelItems) : null
      );
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  value: _propTypes2.default.number,
  orientation: _propTypes2.default.string,
  tooltip: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  labels: _propTypes2.default.object,
  handleLabel: _propTypes2.default.string,
  format: _propTypes2.default.func,
  onChangeStart: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChangeComplete: _propTypes2.default.func
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: 'horizontal',
  tooltip: true,
  reverse: false,
  labels: {},
  handleLabel: ''
};
exports.default = Slider;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rangeslider = __webpack_require__(470);

var _Rangeslider2 = _interopRequireDefault(_Rangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Rangeslider2.default;

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.clamp = clamp;
/**
 * Capitalize first letter of string
 * @private
 * @param  {string} - String
 * @return {string} - String with first letter capitalized
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

/**
 * Clamp position between a range
 * @param  {number} - Value to be clamped
 * @param  {number} - Minimum value in range
 * @param  {number} - Maximum value in range
 * @return {number} - Clamped value
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_re_resizable__ = __webpack_require__(459);





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var resizableStyle = {
  width: 'auto',
  height: 'auto',
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  left: 0
};

var Rnd = function (_React$Component) {
  inherits(Rnd, _React$Component);

  function Rnd(props) {
    classCallCheck(this, Rnd);

    var _this = possibleConstructorReturn(this, (Rnd.__proto__ || Object.getPrototypeOf(Rnd)).call(this, props));

    _this.state = {
      z: props.z,
      original: {
        x: 0,
        y: 0
      },
      bounds: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      maxWidth: props.maxWidth,
      maxHeight: props.maxHeight,
      isMounted: false
    };
    _this.onResizeStart = _this.onResizeStart.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.onResizeStop = _this.onResizeStop.bind(_this);
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDrag = _this.onDrag.bind(_this);
    _this.onDragStop = _this.onDragStop.bind(_this);
    _this.getMaxSizesFromProps = _this.getMaxSizesFromProps.bind(_this);
    return _this;
  }

  createClass(Rnd, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.z !== nextProps.z) {
        this.setState({ z: nextProps.z });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setParentPosition();
    }
  }, {
    key: 'getParentSize',
    value: function getParentSize() {
      return this.resizable.getParentSize();
    }
  }, {
    key: 'getMaxSizesFromProps',
    value: function getMaxSizesFromProps() {
      var maxWidth = typeof this.props.maxWidth === 'undefined' ? Number.MAX_SAFE_INTEGER : this.props.maxWidth;
      var maxHeight = typeof this.props.maxHeight === 'undefined' ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: maxWidth, maxHeight: maxHeight };
    }
  }, {
    key: 'getSelfElement',
    value: function getSelfElement() {
      if (!this) return null;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
    }
  }, {
    key: 'setParentPosition',
    value: function setParentPosition() {
      var element = this.getSelfElement();
      if (element instanceof Element) {
        var parent = element.parentNode;
        if (!parent || typeof window === 'undefined') return;
        if (!(parent instanceof HTMLElement)) return;
        if (getComputedStyle(parent).position !== 'static') {
          this.setState({ isMounted: true });
          return;
        }
        parent.style.position = 'relative';
        this.setState({ isMounted: true });
      }
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(e, data) {
      if (this.props.onDragStart) {
        this.props.onDragStart(e, data);
      }
      if (!this.props.bounds) return;
      var parent = this.resizable && this.resizable.parentNode;
      var target = this.props.bounds === 'parent' ? parent : document.querySelector(this.props.bounds);
      if (!(target instanceof HTMLElement) || !(parent instanceof HTMLElement)) {
        return;
      }
      var targetRect = target.getBoundingClientRect();
      var targetLeft = targetRect.left;
      var targetTop = targetRect.top;
      var parentRect = parent.getBoundingClientRect();
      var parentLeft = parentRect.left;
      var parentTop = parentRect.top;
      var left = targetLeft - parentLeft;
      var top = targetTop - parentTop;
      if (!this.resizable) return;
      this.setState({
        bounds: {
          top: top,
          right: left + (target.offsetWidth - this.resizable.size.width),
          bottom: this.props._freeBottomBounds // eslint-disable-line
          ? 2147483647 : top + (target.offsetHeight - this.resizable.size.height),
          left: left
        }
      });
    }
  }, {
    key: 'onDrag',
    value: function onDrag(e, data) {
      if (this.props.onDrag) {
        this.props.onDrag(e, data);
      }
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(e, data) {
      if (this.props.onDragStop) {
        this.props.onDragStop(e, data);
      }
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(e, dir, refToElement) {
      e.stopPropagation();
      this.setState({
        original: { x: this.draggable.state.x, y: this.draggable.state.y }
      });
      if (this.props.bounds) {
        var parent = this.resizable && this.resizable.parentNode;
        var target = this.props.bounds === 'parent' ? parent : document.querySelector(this.props.bounds);
        var self = this.getSelfElement();
        if (self instanceof Element && target instanceof HTMLElement && parent instanceof HTMLElement) {
          var _getMaxSizesFromProps = this.getMaxSizesFromProps(),
              _maxWidth = _getMaxSizesFromProps.maxWidth,
              _maxHeight = _getMaxSizesFromProps.maxHeight;

          var parentSize = this.getParentSize();
          if (_maxWidth && typeof _maxWidth === 'string') {
            if (_maxWidth.endsWith('%')) {
              var ratio = Number(_maxWidth.replace('%', '')) / 100;
              _maxWidth = parentSize.width * ratio;
            } else if (_maxWidth.endsWith('px')) {
              _maxWidth = Number(_maxWidth.replace('px', ''));
            }
          }
          if (_maxHeight && typeof _maxHeight === 'string') {
            if (_maxHeight.endsWith('%')) {
              var _ratio = Number(_maxHeight.replace('%', '')) / 100;
              _maxHeight = parentSize.width * _ratio;
            } else if (_maxHeight.endsWith('px')) {
              _maxHeight = Number(_maxHeight.replace('px', ''));
            }
          }
          var selfRect = self.getBoundingClientRect();
          var selfLeft = selfRect.left;
          var selfTop = selfRect.top;
          var targetRect = target.getBoundingClientRect();
          var targetLeft = targetRect.left;
          var targetTop = targetRect.top;
          if (/left/i.test(dir) && this.resizable) {
            var max = selfLeft - targetLeft + this.resizable.size.width;
            this.setState({ maxWidth: max > Number(_maxWidth) ? _maxWidth : max });
          }
          if (/right/i.test(dir)) {
            var _max = target.offsetWidth + (targetLeft - selfLeft);
            this.setState({ maxWidth: _max > Number(_maxWidth) ? _maxWidth : _max });
          }
          if (/top/i.test(dir) && this.resizable) {
            var _max2 = selfTop - targetTop + this.resizable.size.height;
            this.setState({
              maxHeight: _max2 > Number(_maxHeight) ? _maxHeight : _max2
            });
          }
          if (/bottom/i.test(dir)) {
            var _max3 = target.offsetHeight + (targetTop - selfTop);
            this.setState({
              maxHeight: _max3 > Number(_maxHeight) ? _maxHeight : _max3
            });
          }
        }
      } else {
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      }
      if (this.props.onResizeStart) {
        this.props.onResizeStart(e, dir, refToElement);
      }
    }
  }, {
    key: 'onResize',
    value: function onResize(e, direction, refToResizableElement, delta) {
      var x = void 0;
      var y = void 0;
      if (/left/i.test(direction)) {
        x = this.state.original.x - delta.width;
        this.draggable.setState({ x: x });
      }
      if (/top/i.test(direction)) {
        y = this.state.original.y - delta.height;
        this.draggable.setState({ y: y });
      }
      if (this.props.onResize) {
        this.props.onResize(e, direction, refToResizableElement, delta, {
          x: x || this.draggable.state.x,
          y: y || this.draggable.state.y
        });
      }
    }
  }, {
    key: 'onResizeStop',
    value: function onResizeStop(e, direction, refToResizableElement, delta) {
      var _getMaxSizesFromProps2 = this.getMaxSizesFromProps(),
          maxWidth = _getMaxSizesFromProps2.maxWidth,
          maxHeight = _getMaxSizesFromProps2.maxHeight;

      this.setState({ maxWidth: maxWidth, maxHeight: maxHeight });
      if (this.props.onResizeStop) {
        var _position = {
          x: this.draggable.state.x,
          y: this.draggable.state.y
        };
        this.props.onResizeStop(e, direction, refToResizableElement, delta, _position);
      }
    }
  }, {
    key: 'updateSize',
    value: function updateSize(size) {
      if (!this.resizable) return;
      this.resizable.updateSize({ width: size.width, height: size.height });
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition(position) {
      this.draggable.setState(position);
    }
  }, {
    key: 'updateZIndex',
    value: function updateZIndex(z) {
      this.setState({ z: z });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cursorStyle = this.props.disableDragging || this.props.dragHandleClassName ? { cursor: 'normal' } : { cursor: 'move' };
      var innerStyle = _extends({}, resizableStyle, {
        zIndex: this.state.z
      }, cursorStyle, this.props.style);
      // HACK: Wait for setting relative to parent element.
      if (!this.state.isMounted) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', null);
      var maxHeight = this.props._freeBottomBounds ? 2147483647 : this.state.maxHeight; // eslint-disable-line
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2_react_draggable___default.a,
        {
          ref: function ref(c) {
            _this2.draggable = c;
          },
          handle: this.props.dragHandleClassName,
          defaultPosition: this.props.default,
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
          axis: this.props.dragAxis,
          disabled: this.props.disableDragging,
          grid: this.props.dragGrid,
          bounds: this.props.bounds ? this.state.bounds : undefined,
          position: this.props.position,
          enableUserSelectHack: this.props.enableUserSelectHack,
          cancel: this.props.cancel
        },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_3_re_resizable__["a" /* default */],
          _extends({}, this.props.extendsProps, {
            className: this.props.className,
            ref: function ref(c) {
              _this2.resizable = c;
            },
            defaultSize: this.props.default,
            size: this.props.size,
            enable: this.props.enableResizing,
            onResizeStart: this.onResizeStart,
            onResize: this.onResize,
            onResizeStop: this.onResizeStop,
            style: innerStyle,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            maxWidth: this.state.maxWidth,
            maxHeight: maxHeight,
            grid: this.props.resizeGrid,
            handleWrapperClass: this.props.resizeHandleWrapperClass,
            handleWrapperStyle: this.props.resizeHandleWrapperStyle,
            lockAspectRatio: this.props.lockAspectRatio,
            lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
            lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
            handleStyles: this.props.resizeHandleStyles,
            handleClasses: this.props.resizeHandleClasses
          }),
          this.props.children
        )
      );
    }
  }]);
  return Rnd;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Rnd.defaultProps = {
  maxWidth: Number.MAX_SAFE_INTEGER,
  maxHeight: Number.MAX_SAFE_INTEGER,
  onResizeStart: function onResizeStart() {},
  onResize: function onResize() {},
  onResizeStop: function onResizeStop() {},
  onDragStart: function onDragStart() {},
  onDrag: function onDrag() {},
  onDragStop: function onDragStop() {}
};

/* harmony default export */ __webpack_exports__["a"] = (Rnd);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(54)))

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(533);

/***/ })

});
//# sourceMappingURL=4.25971f96ea2c447824fa.js.map