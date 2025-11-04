exports.ids = [4];
exports.modules = {

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listPages__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rnd__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_rnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(4);
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
        return cartVisible ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_rnd___default.a, { className: 'modal-content', size: { height: cartPositiontoUse.height, width: cartPositiontoUse.width }, position: { x: cartPositiontoUse.x, y: cartPositiontoUse.y }, style: {
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(14);

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(541);

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnnoTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_baseReducer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__ = __webpack_require__(4);
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
}(__WEBPACK_IMPORTED_MODULE_2_base_baseReducer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (function () { return annotateReducer.getInstance(annotateReducer, 'annotations'); });


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(195);

/***/ }),

/***/ 363:
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducerHelper__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__annotations_annoMenu__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__annotations_overlay__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attachMenu__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deleteMenu__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchView_ocrMenu__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generated_PageImageTypeModel__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scanMenu__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__scannerSelectMenu__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lightBox_clientOnly__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__annotations_reducer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__printApp_reducer__ = __webpack_require__(26);
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

/***/ 377:
/***/ (function(module, exports) {

/**
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


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_reducer__ = __webpack_require__(27);





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

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__ = __webpack_require__(4);
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

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);


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

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);




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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropTargetCreator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_filesize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducerHelper__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_lazy_load__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__printApp_reducer__ = __webpack_require__(26);
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
        _this.state = {
            pollAttempts: 0,
        };
        _this._imgRef = null;
        _this._checkProcessing = null;
        return _this;
    }
    LazyLoadedImage.prototype.componentWillUnmount = function () {
        if (this._checkProcessing)
            clearTimeout(this._checkProcessing);
    };
    LazyLoadedImage.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a = this.props, dispatch = _a.dispatch, pageType = _a.pageType, listofPagesHelper = _a.listofPagesHelper, id = _a.id, originalId = _a.originalId;
        var prevPageType = prevProps.pageType;
        //if (this._checkProcessing)
        //    clearInterval(this._checkProcessing);
        if (pageType != prevPageType) {
            if (!pageType || __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].nonweb == pageType) {
                //image is done processing
                this.setState({ pollAttempts: 0 });
            }
            else {
                // Use exponential backoff for polling (2s, 4s, 8s, 16s, max 30s)
                var attempts_1 = this.state.pollAttempts || 0;
                var delay = Math.min(2000 * Math.pow(2, attempts_1), 30000);
                this._checkProcessing = setTimeout(function () {
                    dispatch(listofPagesHelper.processPage(id));
                    _this.setState({ pollAttempts: attempts_1 + 1 });
                }, delay);
            }
        }
    };
    LazyLoadedImage.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, dispatch = _a.dispatch, pageType = _a.pageType, listofPagesHelper = _a.listofPagesHelper, id = _a.id, originalId = _a.originalId;
        if (!pageType || __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].nonweb == pageType) {
            //image is done processing
        }
        else {
            // Start with initial delay of 2 seconds
            this._checkProcessing = setTimeout(function () {
                dispatch(listofPagesHelper.processPage(id));
                _this.setState({ pollAttempts: 1 });
            }, 2000);
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
            backgroundColor: '#f8f9fa',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            color: '#999',
            border: '2px dashed #dee2e6',
            borderRadius: '8px',
        };
        var waitFileInfoStyle = {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
        };
        var processingOverlayStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderTop: '1px solid #dee2e6',
            backdropFilter: 'blur(4px)',
        };
        var progressBarContainerStyle = {
            height: '6px',
            backgroundColor: '#e9ecef',
            borderRadius: '3px',
            overflow: 'hidden',
            marginBottom: '8px',
        };
        var progressBarStyle = {
            height: '100%',
            background: 'linear-gradient(90deg, #0d6efd 0%, #0dcaf0 100%)',
            borderRadius: '3px',
            animation: 'progress-animation 2s ease-in-out infinite',
            width: '60%',
        };
        var statusTextStyle = {
            fontSize: '13px',
            color: '#495057',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        };
        var ext = id.substr(id.lastIndexOf('.') + 1);
        // Helper component for processing status overlay
        var ProcessingStatusOverlay = function (_a) {
            var status = _a.status, icon = _a.icon;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("style", null, "\n          @keyframes progress-animation {\n            0% { transform: translateX(-100%); }\n            50% { transform: translateX(100%); }\n            100% { transform: translateX(-100%); }\n          }\n        "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: processingOverlayStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: progressBarContainerStyle },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: progressBarStyle })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: statusTextStyle },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa " + icon + " fa-spin", style: { marginRight: '8px' } }),
                            status),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { fontSize: '11px', color: '#6c757d' } }, "This usually takes 5-10 seconds")))));
        };
        //when pagetype is null it menas it's ready for web display
        if (!pageType ||
            (__WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].processing != pageType &&
                ext &&
                __WEBPACK_IMPORTED_MODULE_1_lodash__["includes"](['png', 'jpg', 'jpeg'], ext.toLowerCase()))) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { position: 'relative' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { ref: function (ref) { return (_this._imgRef = ref); }, onLoad: function (e) { return _this.checkImageProps(); }, onError: function (e) { return _this.onImageLoadFailed(); }, src: path, alt: 'document image', className: 'docPageImage', style: { height: desiredHeight }, loading: "lazy" }),
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
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ProcessingStatusOverlay, { status: "Analyzing document...", icon: "fa-search" }))));
            case __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].identifying:
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitBgStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FileInfoView, null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckOfflineProcessing, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ProcessingStatusOverlay, { status: "Identifying document type...", icon: "fa-file-text" }))));
            case __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__["a" /* PageImageTypeModel */].processing:
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: waitBgStyle },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FileInfoView, null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckOfflineProcessing, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ProcessingStatusOverlay, { status: "Converting to images...", icon: "fa-image" }))));
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
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_lazy_load___default.a, { height: desiredHeight, width: desiredWidth, offsetVertical: 1000 },
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

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workspace_reducer__ = __webpack_require__(10);




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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainNav_reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);





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

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_reducer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchView_reducer__ = __webpack_require__(134);





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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});


/***/ }),

/***/ 392:
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

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

/**
 * filesize
 *
 * @copyright 2021 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 6.4.0
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.filesize = factory());
}(this, (function () { 'use strict';

	var b = /^(b|B)$/,
	    symbol = {
	  iec: {
	    bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
	    bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
	  },
	  jedec: {
	    bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
	    bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
	  }
	},
	    fullform = {
	  iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
	  jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
	},
	    roundingFuncs = {
	  floor: Math.floor,
	  ceil: Math.ceil
	};
	/**
	 * filesize
	 *
	 * @method filesize
	 * @param  {Mixed}   arg        String, Int or Float to transform
	 * @param  {Object}  descriptor [Optional] Flags
	 * @return {String}             Readable file size String
	 */

	function filesize(arg) {
	  var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var result = [],
	      val = 0,
	      e,
	      base,
	      bits,
	      ceil,
	      full,
	      fullforms,
	      locale,
	      localeOptions,
	      neg,
	      num,
	      output,
	      pad,
	      round,
	      u,
	      unix,
	      separator,
	      spacer,
	      standard,
	      symbols,
	      roundingFunc,
	      precision;

	  if (isNaN(arg)) {
	    throw new TypeError("Invalid number");
	  }

	  bits = descriptor.bits === true;
	  unix = descriptor.unix === true;
	  pad = descriptor.pad === true;
	  base = descriptor.base || 2;
	  round = descriptor.round !== void 0 ? descriptor.round : unix ? 1 : 2;
	  locale = descriptor.locale !== void 0 ? descriptor.locale : "";
	  localeOptions = descriptor.localeOptions || {};
	  separator = descriptor.separator !== void 0 ? descriptor.separator : "";
	  spacer = descriptor.spacer !== void 0 ? descriptor.spacer : unix ? "" : " ";
	  symbols = descriptor.symbols || {};
	  standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
	  output = descriptor.output || "string";
	  full = descriptor.fullform === true;
	  fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
	  e = descriptor.exponent !== void 0 ? descriptor.exponent : -1;
	  roundingFunc = roundingFuncs[descriptor.roundingMethod] || Math.round;
	  num = Number(arg);
	  neg = num < 0;
	  ceil = base > 2 ? 1000 : 1024;
	  precision = isNaN(descriptor.precision) === false ? parseInt(descriptor.precision, 10) : 0; // Flipping a negative number to determine the size

	  if (neg) {
	    num = -num;
	  } // Determining the exponent


	  if (e === -1 || isNaN(e)) {
	    e = Math.floor(Math.log(num) / Math.log(ceil));

	    if (e < 0) {
	      e = 0;
	    }
	  } // Exceeding supported length, time to reduce & multiply


	  if (e > 8) {
	    if (precision > 0) {
	      precision += 8 - e;
	    }

	    e = 8;
	  }

	  if (output === "exponent") {
	    return e;
	  } // Zero is now a special case because bytes divide by 1


	  if (num === 0) {
	    result[0] = 0;
	    u = result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
	  } else {
	    val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

	    if (bits) {
	      val = val * 8;

	      if (val >= ceil && e < 8) {
	        val = val / ceil;
	        e++;
	      }
	    }

	    var p = Math.pow(10, e > 0 ? round : 0);
	    result[0] = roundingFunc(val * p) / p;

	    if (result[0] === ceil && e < 8 && descriptor.exponent === void 0) {
	      result[0] = 1;
	      e++;
	    }

	    u = result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

	    if (unix) {
	      result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

	      if (b.test(result[1])) {
	        result[0] = Math.floor(result[0]);
	        result[1] = "";
	      }
	    }
	  } // Decorating a 'diff'


	  if (neg) {
	    result[0] = -result[0];
	  } // Setting optional precision


	  if (precision > 0) {
	    result[0] = result[0].toPrecision(precision);
	  } // Applying custom symbol


	  result[1] = symbols[result[1]] || result[1];

	  if (locale === true) {
	    result[0] = result[0].toLocaleString();
	  } else if (locale.length > 0) {
	    result[0] = result[0].toLocaleString(locale, localeOptions);
	  } else if (separator.length > 0) {
	    result[0] = result[0].toString().replace(".", separator);
	  }

	  if (pad && Number.isInteger(result[0]) === false && round > 0) {
	    var x = separator || ".",
	        tmp = result[0].toString().split(x),
	        s = tmp[1] || "",
	        l = s.length,
	        n = round - l;
	    result[0] = "".concat(tmp[0]).concat(x).concat(s.padEnd(l + n, "0"));
	  }

	  if (full) {
	    result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
	  } // Returning Array, Object, or String (default)


	  return output === "array" ? result : output === "object" ? {
	    value: result[0],
	    symbol: result[1],
	    exponent: e,
	    unit: u
	  } : result.join(spacer);
	} // Partial application for functional programming


	filesize.partial = function (opt) {
	  return function (arg) {
	    return filesize(arg, opt);
	  };
	};

	return filesize;

})));


/***/ }),

/***/ 401:
/***/ (function(module, exports) {

/**
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


/***/ }),

/***/ 540:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(549);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(354);

var _eventlistener = __webpack_require__(392);

var _lodash = __webpack_require__(377);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(401);

var _lodash4 = _interopRequireDefault(_lodash3);

var _parentScroll = __webpack_require__(545);

var _parentScroll2 = _interopRequireDefault(_parentScroll);

var _inViewport = __webpack_require__(544);

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

/***/ 543:
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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewport;

var _getElementPosition = __webpack_require__(543);

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

/***/ 545:
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

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(363);
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
  if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(363);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(351);
var assign = __webpack_require__(353);

var ReactPropTypesSecret = __webpack_require__(363);
var checkPropTypes = __webpack_require__(546);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
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
    if (process.env.NODE_ENV !== 'production') {
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
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
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
      if (process.env.NODE_ENV !== 'production') {
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
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(351);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(548)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(547)();
}


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(356);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(359);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(553);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = __webpack_require__(552);

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

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rangeslider = __webpack_require__(550);

var _Rangeslider2 = _interopRequireDefault(_Rangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Rangeslider2.default;

/***/ }),

/***/ 552:
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

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ResizeObserver = factory());
}(this, (function () { 'use strict';

    /**
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

    return index;

})));


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);

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
  return React.createElement(
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
          return React.createElement(
            Resizer,
            {
              key: dir,
              direction: dir,
              onResizeStart: _this2.onResizeStart,
              replaceStyles: handleStyles && handleStyles[dir],
              className: handleClasses && handleClasses[dir]
            },
            handleComponent && handleComponent[dir] ? React.createElement(handleComponent[dir]) : null
          );
        }
        return null;
      });
      // #93 Wrap the resize box in span (will not break 100% width/height)
      return React.createElement(
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
      return React.createElement(
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
        this.state.isResizing && React.createElement('div', {
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
}(React.Component);

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

module.exports = Resizable;


/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(354), __webpack_require__(2)) :
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

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(2);
var reactDom = __webpack_require__(354);
var Draggable = _interopDefault(__webpack_require__(833));
var Resizable = _interopDefault(__webpack_require__(819));

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
      return reactDom.findDOMNode(this);
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
      if (!this.state.isMounted) return React.createElement('div', null);
      var maxHeight = this.props._freeBottomBounds ? 2147483647 : this.state.maxHeight; // eslint-disable-line
      return React.createElement(
        Draggable,
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
        React.createElement(
          Resizable,
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
}(React.Component);

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

exports.default = Rnd;
//# sourceMappingURL=index.es5.js.map


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9jYXJ0cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/MDc3YioqKiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yP2Q3NDUqKioiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yP2FjNmQqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/MDFiNioqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9nZ2xlLWJ1dHRvbi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yPzJiZTgqKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzPzQyOTgqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/ZjQ0ZioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcz8wNjE5KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvaW5kZXgudHN4PzE0MDMqIiwid2VicGFjazovLy8uL34vbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzPzNiZGMqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL2Fubm9NZW51LnRzeD9hNzE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9vdmVybGF5LnRzeD85MTY1KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvYXR0YWNoTWVudS50c3g/NWZkYSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2RlbGV0ZU1lbnUudHN4P2EwMjcqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9wYWdlLnRzeD8xYWZhKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbk1lbnUudHN4PzRkOTYqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FubmVyU2VsZWN0TWVudS50c3g/ZDBhZSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2VhcmNoVmlldy9vY3JNZW51LnRzeD9kODE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvbGlnaHRCb3guY2xpZW50T25seS50c3g/Mzg5ZioiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudGxpc3RlbmVyL2V2ZW50bGlzdGVuZXIuanM/ZTcwNSoiLCJ3ZWJwYWNrOi8vLy4vfi9maWxlc2l6ZS9saWIvZmlsZXNpemUuanM/YWUzMyoiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanM/ZTFjZSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzPzczMGEqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi9MYXp5TG9hZC5qcz9hZThmKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvZ2V0RWxlbWVudFBvc2l0aW9uLmpzPzFkMTcqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9pblZpZXdwb3J0LmpzPzVmNGMqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9wYXJlbnRTY3JvbGwuanM/OWI0ZioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzPzIzYzUqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanM/ODkyYSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzPzNlNTUqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9pbmRleC5qcz81OGM1KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9SYW5nZXNsaWRlci5qcz84YmFjKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5qcz8yNmQ4KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi91dGlscy5qcz80MjdmKiIsIndlYnBhY2s6Ly8vLi9+L3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmpzPzIzMmIqIiwid2VicGFjazovLy8uL34vcmUtcmVzaXphYmxlL2xpYi9pbmRleC5lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kcmFnZ2FibGUvZGlzdC9yZWFjdC1kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ybmQvbGliL2luZGV4LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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bEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SCxFQUFFOzs7QUFHOWU7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2Qjs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FLGdFQUFnRTtBQUNuSTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCw2RkFBNkYsaUNBQWlDO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOENBQThDLG1EQUFtRDtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUNBQXlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLHlCOzs7Ozs7OztBQy9kQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysd0M7Ozs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDLG1CQUFtQixFQUFFO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCLHVCQUF1QixFQUFFO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQyx1QkFBdUIsRUFBRTtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELHVEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDLDZCQUE2QixFQUFFLGFBQWE7QUFDaEgsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG1DQUFtQyxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxlQUFlLFVBQVU7QUFDekIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHlCQUF5QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUVBQWlFO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGtEQUFrRDtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQ0FBMkM7QUFDakY7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLENBQUM7Ozs7Ozs7OztBQ3Y2QkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFpRTtBQUN6RjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7QUFDWDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDtBQUNBO0FBQ0EseUJBQXlCLCtCQUErQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUU7O0FBRUY7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCwrQkFBK0I7QUFDL0U7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsbUJBQW1CLGdFQUFnRSxnQkFBZ0I7OztBQUduRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxpQ0FBaUM7QUFDdkU7QUFDQSxvQ0FBb0Msa0JBQWtCOztBQUV0RDtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkVBQTJFLGlDQUFpQztBQUM1RztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLGNBQWM7QUFDbEcsZ0ZBQWdGLGNBQWM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sK0NBQStDO0FBQy9DO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQsbUJBQW1CLHdEQUF3RCxnQkFBZ0I7QUFDM0Ysd0RBQXdEOzs7QUFHeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsOEJBQThCLHNCQUFzQjs7O0FBR3ZFO0FBQ0EsbUJBQW1CLHdCQUF3QixjQUFjO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUZBQXVGO0FBQ3ZGLHFDQUFxQyxzQkFBc0I7QUFDM0QsbURBQW1ELG9DQUFvQzs7O0FBR3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9FQUFvRSxhQUFhO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7O0FBRTFEO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQ0FBc0M7O0FBRXRDO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCLHNCQUFzQjtBQUMvRCxtQkFBbUIsd0JBQXdCLGNBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQW1EO0FBQzNFO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0IsRUFBRTtBQUMxQztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSxxR0FBcUc7O0FBRXJHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWUsMEVBQTBFO0FBQzdHO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUJBQXlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEUsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0QsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7QUNycUVBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RCwrQkFBK0IsaUZBQWlGOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFzRDtBQUNqRjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQXdEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUNBQXlDO0FBQzFFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsd0ZBQXdGLG1CQUFtQixJQUFJO0FBQy9HLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsa0NBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyx3Q0FBd0M7QUFDeEMsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiI0LjkwNzcyMzMyNWY0NTFjY2E0Mzg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCYWRnZSwgQnV0dG9uLCBNb2RhbCwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGVuc3VyZUNhcnRzLCB7IElDYXJ0c1N0YXRlLCBJTGlzdFNjYW5iYXRjaGVzU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBQYWdlSW1hZ2VNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VNb2RlbCc7XG5pbXBvcnQgUGFnZUxpc3RWaWV3IGZyb20gJy4uL2xpc3RQYWdlcyc7XG5pbXBvcnQgUm5kIGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBTY2FuQmF0Y2hNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9TY2FuQmF0Y2hNb2RlbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlTG9hZGVyVmlldyB9IGZyb20gJ2Jhc2UvYXN5bmNMb2FkZXInO1xuXG5jb25zdCBDYXJ0c0xvYWRlciA9IGNyZWF0ZUxvYWRlclZpZXc8U2NhbkJhdGNoTW9kZWxbXT4oKTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IElDYXJ0c1N0YXRlICYge307XG50eXBlIFZpZXdQcm9wcyA9IENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9O1xuXG5jb25zdCBzdGF0aWNTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIGJvcmRlcjogJ3NvbGlkIGJsYWNrIDFweCcsXG4gIHRvcDogMjM4LFxuICBsZWZ0OiA0MDAsXG4gIGJhY2tncm91bmQ6ICdyZWQnLFxuICB6SW5kZXg6IDEwMCxcbn07XG5cbmNsYXNzIENhcnRWaWV3IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxWaWV3UHJvcHMsIHt9PiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS5pbml0aWFsaXplQ2FydHMoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgY2FydFZpc2libGUsIGNhcnRQb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNhcnRQb3NpdGlvbnRvVXNlID0gXy5hc3NpZ24oeyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgeDogNDAwLCB5OiAyMzggfSwgY2FydFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBjYXJ0VmlzaWJsZSA/IChcbiAgICAgIDxSbmRcbiAgICAgICAgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50J1xuICAgICAgICBzaXplPXt7IGhlaWdodDogY2FydFBvc2l0aW9udG9Vc2UuaGVpZ2h0LCB3aWR0aDogY2FydFBvc2l0aW9udG9Vc2Uud2lkdGggfX1cbiAgICAgICAgcG9zaXRpb249e3sgeDogY2FydFBvc2l0aW9udG9Vc2UueCwgeTogY2FydFBvc2l0aW9udG9Vc2UueSB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHpJbmRleDogMTAwLFxuICAgICAgICB9fVxuICAgICAgICBtaW5XaWR0aD17NDAwfVxuICAgICAgICBtaW5IZWlnaHQ9ezE1MH1cbiAgICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT0nLmNhcnREcmFnSGFuZGxlJ1xuICAgICAgICBvbkRyYWdTdG9wPXsoZSwgdWkpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLnVwZGF0ZUNhcnRMb2NhdGlvbih1aS54LCB1aS55KSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uUmVzaXplU3RvcD17KGUsIGRpciwgcmVmLCBkZWx0YSwgcG9zaXRpb24pID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLnVwZGF0ZUNhcnRTaXplKHJlZi5vZmZzZXRIZWlnaHQsIHJlZi5vZmZzZXRXaWR0aCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J21vZGFsLXRpdGxlJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zODgyMzUyOTQxMTc2NDcwNyknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdjYXJ0dG9vbHRpcCc+RHJhZyBoZXJlIHRvIHJlLXBvc2l0aW9uIGNhcnQ8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnREcmFnSGFuZGxlJyBzdHlsZT17eyBjdXJzb3I6ICdtb3ZlJyB9fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWFycm93cycgYXJpYS1oaWRkZW49J3RydWUnPjwvaT4gSW1hZ2UgY2FydFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHVsbC1yaWdodCdcbiAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgYnNTaXplPSdzbSdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luVG9wOiAtMiwgbWFyZ2luUmlnaHQ6IDMgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS5zaG93Q2FydChmYWxzZSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzIHRleHQtZGFuZ2VyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLCB0b3A6IDI1IH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICA8UGFnZUxpc3RWaWV3XG4gICAgICAgICAgICAgICAgbGlzdG9mUGFnZXNIZWxwZXI9e2Vuc3VyZUNhcnRzKCkucGFnZXNMaXN0fVxuICAgICAgICAgICAgICAgIC8qbG9hZFBhZ2VzQ2FsbGJhY2s9e3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudGhlbihwYWdlc1RvQWRkPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLmFkZFBhZ2VzKHBhZ2VzVG9BZGQpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSovXG5cbiAgICAgICAgICAgICAgICAvL1Rvb2xCdXR0b25zPXtQYWdlTGlzdFRvb2xzfVxuICAgICAgICAgICAgICAgIGhhc0luZmluaXRlU2Nyb2xsPXt0cnVlfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaHVtYnNIZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICBpbWFnZUxpc3RTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICB0b3A6IDI1LFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm5kPlxuICAgICkgOiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwge30+KChzdGF0ZSkgPT4ge1xuICByZXR1cm4gZW5zdXJlQ2FydHMoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xufSkoQ2FydFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvY2FydHMvaW5kZXgudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMzU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg1NDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC10b2dnbGUtYnV0dG9uL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGhhbmRsZUFjdGlvbiwgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5pbXBvcnQgeyBBbm5vRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0Fubm9EYXRhTW9kZWwnO1xuaW1wb3J0IHsgSUFzeW5jUmVzdWx0IH0gZnJvbSAnYmFzZS9hc3luY1N0YXRlTWlkZGxld2FyZSc7XG5pbXBvcnQgUmVkdWNlckJhc2UgZnJvbSAnYmFzZS9iYXNlUmVkdWNlcic7XG5pbXBvcnQgeyBjaGVja0ZldGNoRXJyb3IgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcblxuZXhwb3J0IGVudW0gQW5ub1Rvb2xzIHtcbiAgYW5ub3RhdGUgPSAxLFxuICBoaWdobGlnaHQsXG4gIHJlZGFjdCxcbiAgY2xlYXIsXG4gIHNob3dPcmlnaW5hbCxcbiAgcm90YXRlUmlnaHQsXG4gIHJvdGF0ZUxlZnQsXG59XG5cbnR5cGUgQW5ub1RleHRQb3NQcm9wcyA9IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfTtcbnR5cGUgQW5ub1RleHRQcm9wcyA9IHsgdGV4dDogc3RyaW5nOyBwb3NpdGlvbjogQW5ub1RleHRQb3NQcm9wcyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIElBbm5vdGF0ZVN0YXRlIHtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRUb29sOiBBbm5vVG9vbHM7XG4gIHJlYWRvbmx5IGFubm9EYXRhQXN5bmM6IElBc3luY1Jlc3VsdDxBbm5vRGF0YU1vZGVsPjtcblxuICByZWFkb25seSBhbm5vVGV4dDogQW5ub1RleHRQcm9wcztcblxuICAvL1RoZSBwYWdlIGZvciB3aGloYyB3ZSBhcmUgZG9pbmcgYW5ub3RhdGlvbnNcbiAgcmVhZG9ubHkgYW5ub1BhZ2VJZDogc3RyaW5nO1xufVxuXG50eXBlIG15QWN0aW9ucyA9IHtcbiAgc2VsZWN0VG9vbDogKHZhbHVlPzogQW5ub1Rvb2xzKSA9PiBBbm5vVG9vbHM7XG4gIHVwZGF0ZUFubm9EYXRhOiAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gUHJvbWlzZUxpa2U8QW5ub0RhdGFNb2RlbD47XG5cbiAgc2V0QW5ub1RleHQ6ICh2YWx1ZT86IEFubm9UZXh0UHJvcHMpID0+IEFubm9UZXh0UHJvcHM7XG59O1xuXG5jbGFzcyBhbm5vdGF0ZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyQmFzZTxJQW5ub3RhdGVTdGF0ZSwgbXlBY3Rpb25zPiB7XG4gIGNyZWF0ZUFjdGlvbkxpc3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdFRvb2w6ICh2YWx1ZT86IEFubm9Ub29scykgPT4gdmFsdWUsXG4gICAgICBzZXRBbm5vVGV4dDogKHZhbHVlPzogQW5ub1RleHRQcm9wcykgPT4gdmFsdWUsXG4gICAgICB1cGRhdGVBbm5vRGF0YTogW1xuICAgICAgICAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gdmFsdWUsXG4gICAgICAgIChwYWdlSWQ6IHN0cmluZywgdmFsdWU6IFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+KSA9PiAoe1xuICAgICAgICAgIEFzeW5jOiB0cnVlLFxuICAgICAgICAgIGFubm9QYWdlSWQ6IHBhZ2VJZCxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICByZWR1Y2VycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRUb29sOiBoYW5kbGVBY3Rpb24oXG4gICAgICAgIHRoaXMuX215QWN0aW9ucy5zZWxlY3RUb29sLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG5cbiAgICAgIGFubm9EYXRhQXN5bmM6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG5cbiAgICAgIGFubm9QYWdlSWQ6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgYW5ub1BhZ2VJZCB9ID0gYWN0aW9uLm1ldGE7XG4gICAgICAgICAgcmV0dXJuIGFubm9QYWdlSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIG51bGwsXG4gICAgICApLFxuXG4gICAgICBhbm5vVGV4dDogaGFuZGxlQWN0aW9uKFxuICAgICAgICB0aGlzLl9teUFjdGlvbnMuc2V0QW5ub1RleHQsXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBudWxsLFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tJZlVuTW91bnRlZChwYWdlSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IF9taW5lID0gdGhpcztcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy9pZiB0aGUgbGFzdCBwYWdlIHRoYXQgd2UgbW91bnRlZCBhbm4gdmlldyBpcyBkaXNtb3VudGVkIHVuc2VsZWN0IHRoZSB0b29sXG4gICAgICAvL3RoaXMgaXMgbmVlZGVkXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhbm5vUGFnZUlkIH0gPSBfbWluZS5nZXRDdXJyZW50U3RhdGUoZ2V0U3RhdGUoKSk7XG4gICAgICAgIGlmIChhbm5vUGFnZUlkID09IHBhZ2VJZCkgZGlzcGF0Y2goX21pbmUuc2VsZWN0VG9vbChudWxsKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0VG9vbCh2YWx1ZT86IEFubm9Ub29scykge1xuICAgIGNvbnN0IF9taW5lID0gdGhpcztcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChudWxsKSk7XG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNlbGVjdFRvb2wodmFsdWUpKTtcbiAgICB9O1xuICB9XG5cbiAgcm90YXRlSW1hZ2UocGFnZUlkOiBzdHJpbmcsIGxlZnQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vbmVlZCB0byBydW4gYSByZW5kZXIgcGFzcyBmaXJzdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVQID0gZmV0Y2goYC9hcGkvYW5ub3RhdGlvbnMvcm90YXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VJZCl9P2xlZnQ9JHtsZWZ0fWApXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjaGVja0ZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKF9taW5lLnNlbGVjdFRvb2wobnVsbCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhKHBhZ2VJZCwgc2F2ZVApKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH07XG4gIH1cblxuICBsb2FkQW5ub3RhdGlvbnMocGFnZUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzYXZlUCA9IGZldGNoKGAvYXBpL2Fubm90YXRpb25zL2Fubm90YXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VJZCl9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY2hlY2tGZXRjaEVycm9yKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+KTtcblxuICAgIHJldHVybiB0aGlzLl9teUFjdGlvbnMudXBkYXRlQW5ub0RhdGEocGFnZUlkLCBzYXZlUCk7XG4gIH1cblxuICB1cGRhdGVBbm5vVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYW5ub1RleHQgfSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKGdldFN0YXRlKCkpO1xuICAgICAgaWYgKCFhbm5vVGV4dCkgcmV0dXJuO1xuXG4gICAgICByZXR1cm4gZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChfLmFzc2lnbih7fSwgYW5ub1RleHQsIHsgdGV4dCB9KSkpO1xuICAgIH07XG4gIH1cblxuICBpbml0QW5ub1RleHQocG9zaXRpb246IEFubm9UZXh0UG9zUHJvcHMpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNldEFubm9UZXh0KHsgdGV4dDogJycsIHBvc2l0aW9uIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgc2F2ZUFubm90YXRpb25zKHBhZ2VJZDogc3RyaW5nLCBkYXRhVXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vQmVmb3JlIHdlIHNhdmUgdGhlIGNhbnZhcyBjbGVhciBhbnkgYW5ub1RleHQgYm94XG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNldEFubm9UZXh0KG51bGwpKTtcblxuICAgICAgY29uc3QgYW5ub01vZGVsOiBBbm5vRGF0YU1vZGVsID0ge1xuICAgICAgICBkYXRhVXJsLFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2F2ZVAgPSBmZXRjaChgL2FwaS9hbm5vdGF0aW9ucy9hbm5vdGF0ZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYWdlSWQpfWAsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhbm5vTW9kZWwpLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjaGVja0ZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPik7XG5cbiAgICAgIGRpc3BhdGNoKF9taW5lLl9teUFjdGlvbnMudXBkYXRlQW5ub0RhdGEocGFnZUlkLCBzYXZlUCkpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gYW5ub3RhdGVSZWR1Y2VyLmdldEluc3RhbmNlKGFubm90YXRlUmVkdWNlciwgJ2Fubm90YXRpb25zJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTk1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDM2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLy8gVG8gaW5jbHVkZSB0aGUgZGVmYXVsdCBzdHlsZXNcbmltcG9ydCAncmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzcyc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgQVBhZ2UsIHsgRG5EUHJvcHMsIERyb3BUYXJnZXRDcmVhdG9yLCBJZHJvcFRhcmdldFByb3BzIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hlY2tib3gsXG4gIERyb3Bkb3duQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgTWVudUl0ZW0sXG4gIE1vZGFsLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IERSQUdUWVBFX1BBR0UsIElMaXN0UGFnZXNTdGF0ZSwgcGFnZU5hdiB9IGZyb20gJy4vcmVkdWNlckhlbHBlcic7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3LCBjcmVhdGVTYXZlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcbmltcG9ydCBlbnN1cmVNYWluTmF2LCB7IElOYXZNZW51U3RhdGUgfSBmcm9tICcuLi9tYWluTmF2L3JlZHVjZXInO1xuXG5pbXBvcnQgQW5ub01lbnUgZnJvbSAnLi4vYW5ub3RhdGlvbnMvYW5ub01lbnUnO1xuaW1wb3J0IEFubm9PdmVybGF5VmlldyBmcm9tICcuLi9hbm5vdGF0aW9ucy9vdmVybGF5JztcbmltcG9ydCBBdHRhY2hNZW51IGZyb20gJy4vYXR0YWNoTWVudSc7XG5pbXBvcnQgQ29weVBhc3RlTWVudSBmcm9tICcuL2NvcHlQYXN0ZU1lbnUnO1xuaW1wb3J0IERlbGV0ZU1lbnUgZnJvbSAnLi9kZWxldGVNZW51JztcbmltcG9ydCBPY3JNZW51IGZyb20gJy4uL3NlYXJjaFZpZXcvb2NyTWVudSc7XG5pbXBvcnQgeyBQYWdlSG9sZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUhvbGRlck1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZVR5cGVNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VUeXBlTW9kZWwnO1xuaW1wb3J0IFNjYW5NZW51IGZyb20gJy4vc2Nhbk1lbnUnO1xuaW1wb3J0IFNjYW5uZXJTZWxlY3RNZW51IGZyb20gJy4vc2Nhbm5lclNlbGVjdE1lbnUnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1yYW5nZXNsaWRlcic7XG5pbXBvcnQgX1BhZ2VMaWdodEJveCBmcm9tICcuL2xpZ2h0Qm94LmNsaWVudE9ubHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVBbm5vdGF0aW9ucyBmcm9tICcuLi9hbm5vdGF0aW9ucy9yZWR1Y2VyJztcbmltcG9ydCBlbnN1cmVQcmludEFwcCBmcm9tICcuLi9wcmludEFwcC9yZWR1Y2VyJztcblxuY29uc3QgVXBsb2FkU3RhdHVzVmlldyA9IGNyZWF0ZVNhdmVyVmlldzxib29sZWFuPigpO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0gSWRyb3BUYXJnZXRQcm9wcyAmIHtcbiAgLy9yZWFjdCBlbGVtZW50IHRvIHNob3cgb24gdGhlIGFjdGl2ZSBwYWdlXG4gIEFjdGl2ZVBhZ2VUb29sQmFyPzogYW55O1xuXG4gIC8vcmVhY3QgZWxlbWVudCB0byBzaG93IGFzIGxpc3QgdG9vbCBiYXJcbiAgVG9vbEJ1dHRvbnM/OiBhbnk7XG5cbiAgLy9pZiB0cnVlIHdlIGZpeCBOQVYgYnV0dG9uIG9uIFRPUFxuICBoYXNJbmZpbml0ZVNjcm9sbD86IGJvb2xlYW47XG5cbiAgLy9UaGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFjdWFsbCBkaXYgd2l0aCBpbWFnZXNcbiAgaW1hZ2VMaXN0U3R5bGU/OiBhbnk7XG5cbiAgLy9UaGlicyBoZWlnaHQgaWYgdGhleSBoYXZlIG5vdCBiZWVuIHJlc3Bvc2l0aW9uZWRcbiAgZGVmYXVsdFRodW1ic0hlaWdodD86IG51bWJlcjtcblxuICAvL2FuIG92ZXJsYXkgdGhhdCBpcyBkcmF3biBvbiB0byBvZiB0aGUgcGFnZVxuICBQYWdlT3ZlcmxheVZpZXc/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3AgPSBJTGlzdFBhZ2VzU3RhdGUgJiB7XG4gIHBhZ2VzQXJyYXk6IFBhZ2VJbWFnZU1vZGVsW107XG4gIGFubm9Ub29sU2VsZWN0ZWQ6IGJvb2xlYW47XG59O1xuXG5jb25zdCBBbm5vT0NSTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QW5ub01lbnUgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuY29uc3QgUGFnZUxpZ2h0Qm94ID0gX1BhZ2VMaWdodEJveCBhcyBhbnk7XG5cbmNsYXNzIExpc3RQYWdlc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tcG9uZW50UHJvcHMgJiBDb25uZWN0ZWRQcm9wICYgRG5EUHJvcHMsIHt9PiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyKSB7XG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuYWRkQWxsb3dlZCgpKSB7XG4gICAgICAgIGNvbnN0IFRoZU1lbnUgPSAoKSA9PiAoXG4gICAgICAgICAgPEF0dGFjaE1lbnUgb25GaWxlQXR0YWNoZWQ9eygpID0+IHRoaXMuX2ZpbGVJbnB1dFJlZiAmJiB0aGlzLl9maWxlSW5wdXRSZWYuY2xpY2soKX0gLz5cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdtYWluJywgJ2F0dGFjaCcsIFRoZU1lbnUpKTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGBkZXRlY3RlZCBuYXZpZ2F0b3IucGxhdGZvcm0gOiAke25hdmlnYXRvci5wbGF0Zm9ybX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdlbXB0eSBuYXZpZ2F0b3I6IGNhbm5vdCBkZXRlY3QgcGxhdGZvcm0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtID09ICdXaW4zMicpIHtcbiAgICAgICAgICBjb25zdCBUaGVTY2FuTWVudSA9ICgpID0+IChcbiAgICAgICAgICAgIDxTY2FuTWVudSBvblNjYW49eygpID0+IGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNjYW5QYWdlcygpKX0gLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ21haW4nLCAnc2NhbicsIFRoZVNjYW5NZW51KSk7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ3NldHRpbmdzJywgJ3NlbGVjdFNjYW5uZXInLCBTY2FubmVyU2VsZWN0TWVudSkpO1xuXG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBlbnN1cmVNYWluTmF2KCkuYWRkTWVudSgnZGlzdHJpYnVlRXh0cmEnLCAnUmUtUHJvY2VzcycsICgpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmZpeE5vbndlYlBhZ2UoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJyBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCc+PC9pPiBSZS1yZW5kZXIgaW1hZ2VzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ2Rpc3RyaWJ1ZUV4dHJhJywgJ2NvcHlQYXN0ZScsICgpID0+IDxDb3B5UGFzdGVNZW51IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0vPikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuZGVsZXRlQWxsb3dlZCgpKSB7XG4gICAgICAgIGNvbnN0IE15RGVsZXRlTWVudSA9ICgpID0+IDxEZWxldGVNZW51IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0gLz47XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ21haW4nLCAnZGVsZXRlJywgTXlEZWxldGVNZW51KSk7XG4gICAgICB9XG5cbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBlbnN1cmVQcmludEFwcCgpLnNldFByaW50YWJsZSh7XG4gICAgICAgICAgcGFnZXNHZXR0ZXI6IGxpc3RvZlBhZ2VzSGVscGVyLmdldFRvUHJpbnRQYWdlcy5iaW5kKGxpc3RvZlBhZ2VzSGVscGVyKSxcbiAgICAgICAgICBleHRyYU1lbnU6IDxBbm5vT0NSTWVudSAvPixcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlcikge1xuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyLmFkZEFsbG93ZWQoKSkge1xuICAgICAgICBkaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnbWFpbicsICdhdHRhY2gnKSk7XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0gPT0gJ1dpbjMyJykge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdtYWluJywgJ3NjYW4nKSk7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmRlbGV0ZU1lbnUoJ3NldHRpbmdzJywgJ3NlbGVjdFNjYW5uZXInKSk7XG4gICAgICAgICAgLy9kaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnZGlzdHJpYnVlRXh0cmEnLCAnY29weVBhc3RlJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlci5kZWxldGVBbGxvd2VkKCkpIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdtYWluJywgJ2RlbGV0ZScpKTtcblxuICAgICAgZGlzcGF0Y2goZW5zdXJlUHJpbnRBcHAoKS5zZXRQcmludGFibGUobnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGFjdGl2ZVBhZ2UsIHBhZ2VzQXJyYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldkFjdGl2ZVBhZ2UgPSBwcmV2UHJvcHMuYWN0aXZlUGFnZTtcblxuICAgIGlmIChwYWdlc0FycmF5ICYmIHBhZ2VzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy93ZSBhbHdheXMgd2FudCBhIGFjdGl2ZSBwYWdlXG4gICAgICBpZiAoIWFjdGl2ZVBhZ2UgfHwgIV8uZmluZChwYWdlc0FycmF5LCAocCkgPT4gcC5pZCA9PSBhY3RpdmVQYWdlLmlkKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBhY3RpdmUgcGFnZSB0byB0b3AgaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgeyBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShwYWdlc0FycmF5WzBdLmlkKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZVBhZ2UgfHwgYWN0aXZlUGFnZS5pZCA9PSAocHJldkFjdGl2ZVBhZ2UgfHwge30pLmlkKSByZXR1cm47XG5cbiAgICAvL2FjdGl2ZSBwYWdlIGhhcyBjaGFuZ2VkIGxldHMgbWFrZSBzdXJlIGl0J3MgdmlzaWJsZVxuXG4gICAgaWYgKCF0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlLmlkXSkge1xuICAgICAgY29uc29sZS53YXJuKCdhY3RpdmUgcGFnZSBpZCBpcyBub3QgaW4gX3BhZ2VSZWZzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldEhlaWdodCB9ID0gdGhpcy5fcGFnZVJlZnNbYWN0aXZlUGFnZS5pZF07XG5cbiAgICAvL2FjY291bnRpbmcgZm9yIG1hcmdpbnMgLiB0aGUgbWFnaWMgbnVtYmVyIHdlIGZvdW5kIGJ5IHRyaWFsIGFuZCBlcnJvciAsIHdlIHdpbGwgaGF2ZSB0byBjaGFuZ2UgaWYgd2UgY2hhbmdlIG1hcmdpbnMgYW5kIHN0dWZmXG4gICAgY29uc3QgTUFHSUNNQVJHSU5OVU1CRVIgPSAyMDsgLy8yMztcbiAgICBjb25zdCBwYWdlQm90dG9tUG9zaXRpb24gPSBvZmZzZXRUb3AgKyBvZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB7IHNjcm9sbFRvcCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IHRoaXMuX3BhZ2VsaXN0UmVmO1xuICAgIGNvbnN0IHZpc2libGVCb3R0b21Qb3NpdGlvbiA9IHNjcm9sbFRvcCArIGNsaWVudEhlaWdodDtcblxuICAgIGxldCBuZXdTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cbiAgICBjb25zdCB2aWV3SGFzTm9uTGltaXRlZEhlaWdodCA9IHNjcm9sbEhlaWdodCA9PSBjbGllbnRIZWlnaHQ7XG5cbiAgICAvL2NoZWNrIGlmIGFjdGl2ZVBhZ2UgYm90dG9tIGlzIHZpc2libGVcbiAgICBpZiAodmlld0hhc05vbkxpbWl0ZWRIZWlnaHQpIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IG9mZnNldFRvcCAtIE1BR0lDTUFSR0lOTlVNQkVSO1xuICAgIH0gZWxzZSBpZiAocGFnZUJvdHRvbVBvc2l0aW9uID4gdmlzaWJsZUJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICBuZXdTY3JvbGxUb3AgPSBwYWdlQm90dG9tUG9zaXRpb24gLSBjbGllbnRIZWlnaHQgLSBNQUdJQ01BUkdJTk5VTUJFUjtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGlmIGFjdGl2ZVBhZ2UgVG9wIGlzIHZpc2libGUsIG92ZXJyaWRlIHNjcm9sbCB0byBtYWtlIGJvdHRvbSB2aXNpYmxlXG4gICAgaWYgKG9mZnNldFRvcCA8IG5ld1Njcm9sbFRvcCAtIE1BR0lDTUFSR0lOTlVNQkVSKSBuZXdTY3JvbGxUb3AgPSBvZmZzZXRUb3AgLSBNQUdJQ01BUkdJTk5VTUJFUjtcblxuICAgIC8vbGV0IG5ld1Njcm9sbFRvcCA9IHRoaXMuUGFnZWxpc3RSZWYuc2Nyb2xsVG9wKygoYmFja3dvcmQ/LTE6MSkqICh0aGlzLnByb3BzLnNsaWRlclZhbHVlICsgMTQpKTtcbiAgICBpZiAobmV3U2Nyb2xsVG9wIDwgMCkge1xuICAgICAgbmV3U2Nyb2xsVG9wID0gMDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXZpZXdIYXNOb25MaW1pdGVkSGVpZ2h0ICYmXG4gICAgICBuZXdTY3JvbGxUb3AgPiB0aGlzLl9wYWdlbGlzdFJlZi5zY3JvbGxIZWlnaHQgLSB0aGlzLl9wYWdlbGlzdFJlZi5jbGllbnRIZWlnaHRcbiAgICApIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IHRoaXMuX3BhZ2VsaXN0UmVmLnNjcm9sbEhlaWdodCAtIHRoaXMuX3BhZ2VsaXN0UmVmLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodmlld0hhc05vbkxpbWl0ZWRIZWlnaHQpIHtcbiAgICAgIHdpbmRvdyAmJiB3aW5kb3cuc2Nyb2xsVG8gJiYgd2luZG93LnNjcm9sbFRvKDAsIG5ld1Njcm9sbFRvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdTY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkgcmV0dXJuO1xuICAgICAgdGhpcy5fcGFnZWxpc3RSZWYuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIGxldCBzY3JvbGxTdGVwID0gKG5ld1Njcm9sbFRvcCAtIHNjcm9sbFRvcCkgLyAxMDtcbiAgICAgICAgY29uc3QgYmFja3dvcmQgPSBzY3JvbGxTdGVwIDwgMDtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBkb1N0ZXAoKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zID0gbWUuX3BhZ2VsaXN0UmVmLnNjcm9sbFRvcCArIHNjcm9sbFN0ZXA7XG5cbiAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoKGJhY2t3b3JkICYmIG5ld1BvcyA8PSBuZXdTY3JvbGxUb3ApIHx8ICghYmFja3dvcmQgJiYgbmV3UG9zID49IG5ld1Njcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBuZXdTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLl9wYWdlbGlzdFJlZi5zY3JvbGxUb3AgPSBuZXdQb3M7XG5cbiAgICAgICAgICAgIGlmICghZG9uZSlcbiAgICAgICAgICAgICAgICBfLmRlbGF5KGRvU3RlcCwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb1N0ZXAoKTtcbiAgICAgICAgKi9cbiAgfVxuXG4gIHByaXZhdGUgX3BhZ2VsaXN0UmVmPzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBfcGFnZVJlZnM6IHsgW2tleTogc3RyaW5nXTogSFRNTERpdkVsZW1lbnQgfSA9IHt9O1xuXG4gIHByaXZhdGUgb25TY3JvbGxlZCgpIHtcbiAgICBpZiAoIXRoaXMuX3BhZ2VsaXN0UmVmKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHBhZ2VzQXJyYXksIGFjdGl2ZVBhZ2UsIGxpc3RvZlBhZ2VzSGVscGVyLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIShwYWdlc0FycmF5ICYmIHBhZ2VzQXJyYXkubGVuZ3RoID4gMCkpIHJldHVybjtcblxuICAgIGNvbnN0IGFjdGl2ZVBhZ2VJZCA9IGFjdGl2ZVBhZ2UgPyBhY3RpdmVQYWdlLmlkIDogcGFnZXNBcnJheVswXS5pZDtcbiAgICBpZiAoIWFjdGl2ZVBhZ2VJZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5fcGFnZWxpc3RSZWY7XG4gICAgY29uc3QgdmlzaWJsZUJvdHRvbVBvc2l0aW9uID0gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlSWRdKSByZXR1cm47XG5cbiAgICBjb25zdCB7IG9mZnNldFRvcCwgb2Zmc2V0SGVpZ2h0IH0gPSB0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlSWRdO1xuICAgIGNvbnN0IHBhZ2VCb3R0b21Qb3NpdGlvbiA9IG9mZnNldFRvcCArIG9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHZpc2liaXR5U2hpbSA9IG9mZnNldEhlaWdodCAqIDAuMztcblxuICAgIC8vY2hlY2sgaWYgdGhlIGFjdGl2ZSBwYWdlIGlzIG5vdCB2aXNpYmxlXG4gICAgaWYgKFxuICAgICAgb2Zmc2V0VG9wICsgdmlzaWJpdHlTaGltID4gdmlzaWJsZUJvdHRvbVBvc2l0aW9uIHx8XG4gICAgICBwYWdlQm90dG9tUG9zaXRpb24gLSB2aXNpYml0eVNoaW0gPCBzY3JvbGxUb3BcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVBhZ2UgPSBfLmZpbmQoXG4gICAgICAgIF8ua2V5cyh0aGlzLl9wYWdlUmVmcyksXG4gICAgICAgIChpZCkgPT4gdGhpcy5fcGFnZVJlZnNbaWRdICYmIHRoaXMuX3BhZ2VSZWZzW2lkXS5vZmZzZXRUb3AgPj0gc2Nyb2xsVG9wLFxuICAgICAgKTtcblxuICAgICAgaWYgKG5ld0FjdGl2ZVBhZ2UpIHtcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShuZXdBY3RpdmVQYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25vIGFjdGl2ZSBwYWdlIGZvdW5kIGF0IHNjcm9sbCBsb2NhdGlvbicsIHNjcm9sbFRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblNjcm9sbGVkZGVib3VuY2VkID0gXy5kZWJvdW5jZSh0aGlzLm9uU2Nyb2xsZWQsIDEwMDApO1xuICBwcml2YXRlIF9maWxlSW5wdXRSZWYgPSBudWxsO1xuXG4gIHByaXZhdGUgX2ZpbGVSZW5kZXJJZCA9IDA7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VzQXJyYXksXG4gICAgICBwYWdlRHJvcFRhcmdldCxcbiAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLFxuICAgICAgdGh1bWJzSGVpZ2h0LFxuICAgICAgZGVmYXVsdFRodW1ic0hlaWdodCxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBBY3RpdmVQYWdlVG9vbEJhcixcbiAgICAgIHNlbGVjdGVkUGFnZXMsXG4gICAgICBpbWFnZUxpc3RTdHlsZSxcbiAgICAgIFRvb2xCdXR0b25zLFxuICAgICAgaGFzSW5maW5pdGVTY3JvbGwsXG4gICAgICBsaWdodEJveFZpc2libGUsXG4gICAgICBQYWdlT3ZlcmxheVZpZXcsXG4gICAgICBjb3JyZWN0ZWREaW1lbnRpb25zLFxuICAgICAgYW5ub1Rvb2xTZWxlY3RlZCxcbiAgICAgIGRpc3BhdGNoLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGxpc3Rwcm9tcHQgPSAnJztcblxuICAgIGlmIChwYWdlc0FycmF5Lmxlbmd0aCA+IDApXG4gICAgICBsaXN0cHJvbXB0ID0gJ1Nob3dpbmcgJyArIHBhZ2VzQXJyYXkubGVuZ3RoICsgJyBpbWFnZScgKyAocGFnZXNBcnJheS5sZW5ndGggPiAxID8gJ3MnIDogJycpO1xuXG4gICAgdGhpcy5fcGFnZVJlZnMgPSB7fTtcblxuICAgIGNvbnN0IGZpeGVkTmF2U3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiA1LFxuICAgICAgaGVpZ2h0OiA1NixcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiA2MixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZGQyZTRlNicsXG4gICAgICB6SW5kZXg6IDUsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH07XG5cbiAgICBjb25zdCBuYXZTdHlsZSA9IHsgdGV4dEFsaWduOiAnbGVmdCcgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAge1BhZ2VMaWdodEJveCAmJiBsaWdodEJveFZpc2libGUgJiYgKFxuICAgICAgICAgIDxQYWdlTGlnaHRCb3ggbGlzdG9mUGFnZXNIZWxwZXI9e2xpc3RvZlBhZ2VzSGVscGVyfSBwYWdlc0FycmF5PXtwYWdlc0FycmF5IHx8IFtdfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIGlucHV0UmVmPXsocmVmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9maWxlSW5wdXRSZWYgPSByZWY7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgaWQ9e2BteWlucHV0ZmlsZV8ke3RoaXMuX2ZpbGVSZW5kZXJJZCsrfWB9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAwLCB3aWR0aDogMCwgb3BhY2l0eTogMCwgZGlzcGxheTogJ2NvbnRlbnRzJyB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvL2NvbnN0IGZpbGVzID0gWy4uLmUubmF0aXZlRXZlbnQudGFyZ2V0LmZpbGVzXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHRlc3RpbmcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxlJywgZS5uYXRpdmVFdmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuYWRkUGFnZXMoZS5uYXRpdmVFdmVudC50YXJnZXQuZmlsZXMpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCdcbiAgICAgICAgICBzdHlsZT17aGFzSW5maW5pdGVTY3JvbGwgPyAoeyAuLi5maXhlZE5hdlN0eWxlLCAuLi5uYXZTdHlsZSB9IGFzIGFueSkgOiBuYXZTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5IHdpdGhQb3B1cEJnJz5cbiAgICAgICAgICAgIHtsaXN0cHJvbXB0fVxuXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0naW5jdG9vbHRpcCc+Y2hhbmdlIGltYWdlIHNpemU8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaC1wbHVzJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaC1taW51cycgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlkPSdzbGlkZXJEcm9wRG93bidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAsIGhlaWdodDogNSB9fVxuICAgICAgICAgICAgICAgIG1pbj17NjB9XG4gICAgICAgICAgICAgICAgbWF4PXsxNTAwfVxuICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aHVtYnNIZWlnaHQgfHwgZGVmYXVsdFRodW1ic0hlaWdodCB8fCAxMDB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci56b29tVG8oZSkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7VG9vbEJ1dHRvbnMgJiYgPFRvb2xCdXR0b25zIC8+fVxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBmbG9hdDogJ3JpZ2h0JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6IDQ2IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSdwcmV2dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICBTY3JvbGwgdG8gcHJldmlvdXMgcGFnZVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIFNob3J0Y3V0OiA8a2JkPmFsdCt1PC9rYmQ+IE9SIDxrYmQ+cGFnZXVwPC9rYmQ+XG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnLCBtYXJnaW5MZWZ0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNldEFjdGl2ZVBhZ2UocGFnZU5hdi5wcmV2KSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFja3dhcmQnIHN0eWxlPXt7IGZvbnRTaXplOiAneC1sYXJnZScgfX0+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSduZXh0dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICBTY3JvbGwgdG8gbmV4dCBwYWdlXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgU2hvcnRjdXQ6IDxrYmQ+YWx0K2Q8L2tiZD4gT1IgPGtiZD5wYWdlZG93bjwva2JkPlxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJzU3R5bGU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JywgbWFyZ2luTGVmdDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zZXRBY3RpdmVQYWdlKHBhZ2VOYXYubmV4dCkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZvcndhcmQnIHN0eWxlPXt7IGZvbnRTaXplOiAneC1sYXJnZScgfX0+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzBweCcgfX0+Jm5ic3A7PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtwYWdlRHJvcFRhcmdldChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ltYWdlbGlzdC1iYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgb25TY3JvbGw9eygpID0+IHRoaXMub25TY3JvbGxlZGRlYm91bmNlZCgpfVxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiAodGhpcy5fcGFnZWxpc3RSZWYgPSByZWYpfVxuICAgICAgICAgICAgc3R5bGU9e2hhc0luZmluaXRlU2Nyb2xsID8geyAuLi5pbWFnZUxpc3RTdHlsZSwgbWFyZ2luVG9wOiA1NiB9IDogaW1hZ2VMaXN0U3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIC8qLCBoZWlnaHQ6ICcxMDAlJyovIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICB7cGFnZXNBcnJheS5sZW5ndGggPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaXN0b2ZQYWdlc0hlbHBlci5hZGRBbGxvd2VkKCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcCBpbWFnZXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9SeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0naW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fZmlsZUlucHV0UmVmICYmIHRoaXMuX2ZpbGVJbnB1dFJlZi5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm93c2UgdG8gZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5ObyBpbWFnZXMgZm91bmQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBwYWdlc0FycmF5Lm1hcCgoZWRpdGFibGVQYWdlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd0Fub1Rvb2xzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm9Ub29sU2VsZWN0ZWQgJiYgYWN0aXZlUGFnZSAmJiBhY3RpdmVQYWdlLmlkID09IGVkaXRhYmxlUGFnZS5pZDtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4gKHRoaXMuX3BhZ2VSZWZzW2VkaXRhYmxlUGFnZS5pZF0gPSByZWYpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZURyb3BUYXJnZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBUGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RlZERpbWVudGlvbnM9e2NvcnJlY3RlZERpbWVudGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VPdmVybGF5Vmlldz17c2hvd0Fub1Rvb2xzID8gQW5ub092ZXJsYXlWaWV3IDogUGFnZU92ZXJsYXlWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNpcmVkSGVpZ2h0PXt0aHVtYnNIZWlnaHQgfHwgZGVmYXVsdFRodW1ic0hlaWdodCB8fCAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVkaXRhYmxlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVQYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuaWQgPT0gZWRpdGFibGVQYWdlLmlkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhQWN0aXZlUGFnZVRvb2xCYXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlUGFnZVRvb2xCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZWRpdGFibGVQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbm9Ub29scyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2Fubm9kb25lJz5Bbm5vdGF0aW9ucyBjb21wbGV0ZWQ8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW5Ub3A6IC01IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChudWxsKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hlY2sgY29sb3Itb3JhbmdlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISEoc2VsZWN0ZWRQYWdlcyAmJiBzZWxlY3RlZFBhZ2VzW2VkaXRhYmxlUGFnZS5pZF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319IC8vbmVlZCBvbmNoYW5nZWQgZm9yIHdhcm5pbmdzIHRvIGJlIGhhcHB5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLnRvZ2dsZVBhZ2VTZWxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlUGFnZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9J2xpZ2h0bm94dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPXsnbGluayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luVG9wOiAtNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zaG93TGlnaHRCb3goZWRpdGFibGVQYWdlLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXdpbmRvdy1tYXhpbWl6ZSBjb2xvci1vcmFuZ2UnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BhZ2VDb252ZXJ0ZWRNZW51RHJvcERvd24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxpIGNsYXNzTmFtZT0nZmEgZmEtY29nJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHBhZ2Vkcm9wZG93bi0ke2VkaXRhYmxlUGFnZS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRhYmxlUGFnZS5vcmlnaW5hbElkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT0nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLmRvd25sb2FkT3JpZ2luYWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlUGFnZS5vcmlnaW5hbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jbG91ZC1kb3dubG9hZCcgLz4gRG93bmxvYWQgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWRpdGFibGVQYWdlLnBhZ2VUeXBlID09IFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5maXhOb253ZWJQYWdlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXJlZnJlc2gnIC8+IFJlLXJlbmRlciBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZCB7bW9tZW50KGVkaXRhYmxlUGFnZS5jcmVhdGVkKS5mb3JtYXQoJ2xsbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2NyTWVudSBwYWdlSWQ9e2VkaXRhYmxlUGFnZS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGlzdG9mUGFnZXNIZWxwZXIgfSA9IG93bnByb3BzO1xuICBjb25zdCBwYWdlc1N0YXRlID0gbGlzdG9mUGFnZXNIZWxwZXIgJiYgbGlzdG9mUGFnZXNIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSk7XG4gIGNvbnN0IHsgYWN0aXZlRG9jIH0gPVxuICAgIGxpc3RvZlBhZ2VzSGVscGVyLm15RG9jc0hlbHBlciAmJiBsaXN0b2ZQYWdlc0hlbHBlci5teURvY3NIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSk7XG5cbiAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4gXy5hc3NpZ24oXG4gICAge1xuICAgICAgcGFnZXNBcnJheTogKGFjdGl2ZURvYyAmJiBhY3RpdmVEb2MucGFnZXMpIHx8IFtdLFxuICAgICAgYW5ub1Rvb2xTZWxlY3RlZDogISFzZWxlY3RlZFRvb2wsXG4gICAgfSxcbiAgICBwYWdlc1N0YXRlLFxuICApO1xufSkoRHJvcFRhcmdldENyZWF0b3IoTGlzdFBhZ2VzVmlldykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2luZGV4LnRzeCIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2guZGVib3VuY2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZW5zdXJlQW5ub3RhdGlvbnMsIHsgQW5ub1Rvb2xzIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVQcm9qZWN0cyBmcm9tICcuLi9wcm9qZWN0cy9yZWR1Y2VyJztcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgc2VsZWN0ZWRUb29sOiBBbm5vVG9vbHM7XG4gIGFubm90YXRpb25zQWxsb3dlZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHRoZVRvb2xzID0gW1xuICB7IHRvb2w6IEFubm9Ub29scy5hbm5vdGF0ZSwgaWNvbjogJ2ZhLWNvbW1lbnQnLCB0ZXh0OiAnQW5ub3RhdGUnIH0sXG4gIHsgdG9vbDogQW5ub1Rvb2xzLmhpZ2hsaWdodCwgaWNvbjogJ2ZhLWVkaXQnLCB0ZXh0OiAnSGlnaGxpZ2h0JyB9LFxuICB7IHRvb2w6IEFubm9Ub29scy5yZWRhY3QsIGljb246ICdmYS1taW51cy1zcXVhcmUnLCB0ZXh0OiAnUmVkYWN0JyB9LFxuICB7IHRvb2w6IEFubm9Ub29scy5jbGVhciwgaWNvbjogJ2ZhLXNxdWFyZScsIHRleHQ6ICdjbGVhcicgfSxcbiAgeyB0b29sOiBBbm5vVG9vbHMuc2hvd09yaWdpbmFsLCBpY29uOiAnZmEtZXllJywgdGV4dDogJ1Nob3cgb3JpZ2luYWwnIH0sXG5dO1xuXG5jb25zdCBBbm5vTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9PiA9ICh7XG4gIHNlbGVjdGVkVG9vbCxcbiAgYW5ub3RhdGlvbnNBbGxvd2VkLFxuICBkaXNwYXRjaCxcbn0pID0+IHtcbiAgaWYgKCFhbm5vdGF0aW9uc0FsbG93ZWQpIHJldHVybiA8ZGl2PjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG5cbiAgICAgIHt0aGVUb29scy5tYXAoKHRvb2wpID0+IHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhIXNlbGVjdGVkVG9vbCAmJiBzZWxlY3RlZFRvb2wgIT0gdG9vbC50b29sO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9e2B0b29sXyR7dG9vbC50b29sfWB9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICBlbnN1cmVBbm5vdGF0aW9ucygpLnNlbGVjdFRvb2woc2VsZWN0ZWRUb29sICE9IHRvb2wudG9vbCA/IHRvb2wudG9vbCA6IG51bGwpLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Rpc2FibGVkID8gJ3RleHQtbXV0ZWQnIDogJ3RleHQtc3VjY2Vzcyd9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhICR7dG9vbC5pY29ufWB9PjwvaT4ge3Rvb2wudGV4dH1cbiAgICAgICAgICAgICAge3NlbGVjdGVkVG9vbCA9PSB0b29sLnRvb2wgJiYgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGVjayBjb2xvci1vcmFuZ2UnPjwvaT59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuXG4gICAgICA8TWVudUl0ZW1cbiAgICAgICAgZGlzYWJsZWQ9eyEhc2VsZWN0ZWRUb29sfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChBbm5vVG9vbHMucm90YXRlTGVmdCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWRUb29sID8gJ3RleHQtbXV0ZWQnIDogJ3RleHQtc3VjY2Vzcyd9XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdW5kbyc+PC9pPiBSb3RhdGUgbGVmdFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L01lbnVJdGVtPlxuXG4gICAgICA8TWVudUl0ZW1cbiAgICAgICAgZGlzYWJsZWQ9eyEhc2VsZWN0ZWRUb29sfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChBbm5vVG9vbHMucm90YXRlUmlnaHQpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkVG9vbCA/ICd0ZXh0LW11dGVkJyA6ICd0ZXh0LXN1Y2Nlc3MnfVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVuZG8gZmEtZmxpcC1ob3Jpem9udGFsJz48L2k+IFJvdGF0ZSByaWdodFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L01lbnVJdGVtPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIHt9Pigoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZFByb2plY3QgfSA9IGVuc3VyZVByb2plY3RzKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICBsZXQgYW5ub3RhdGlvbnNBbGxvd2VkID0gISFzZWxlY3RlZFByb2plY3Q7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QucGVybWlzc2lvbnMgJiYgc2VsZWN0ZWRQcm9qZWN0LnBlcm1pc3Npb25zWydzZWxmJ10pIHtcbiAgICBhbm5vdGF0aW9uc0FsbG93ZWQgPSBzZWxlY3RlZFByb2plY3QucGVybWlzc2lvbnNbJ3NlbGYnXS5jYW5FZGl0O1xuICB9XG5cbiAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHsgc2VsZWN0ZWRUb29sLCBhbm5vdGF0aW9uc0FsbG93ZWQgfTtcbn0pKEFubm9NZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL2Fubm9NZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBlbnN1cmVBbm5vdGF0aW9ucywgeyBBbm5vVG9vbHMsIElBbm5vdGF0ZVN0YXRlIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgQW5ub0RhdGFNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9Bbm5vRGF0YU1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmNvbnN0IEFubm9Mb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PEFubm9EYXRhTW9kZWw+KCk7XG5cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSBQYWdlSW1hZ2VNb2RlbCAmIHtcbiAgc2NhbGU6IG51bWJlcjtcbiAgb25Bbm5vdGF0aW9uc0RvbmU/OiAoKSA9PiB2b2lkO1xufTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IElBbm5vdGF0ZVN0YXRlICYge307XG5cbnR5cGUgRFBvaW50cyA9IHsgWDogbnVtYmVyOyBZOiBudW1iZXIgfTtcblxudHlwZSBEQ29vcmRpbmF0ZXMgPSB7XG4gIHN0YXJ0UG9pbnQ6IERQb2ludHM7XG4gIGN1cnJlbnQ/OiBEUG9pbnRzO1xuICBsYXN0RHJhd1BvaW50PzogRFBvaW50cztcbn07XG5cbnR5cGUgU3RhdGVQcm9wcyA9IHtcbiAgY2FudmFzPzogYW55O1xuICBjb250ZXh0PzogYW55O1xuICBkaW1lbnRpb25zPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xuICBjb29yZGluYXRlcz86IERDb29yZGluYXRlcztcbiAgZHJhd2luZz86IGJvb2xlYW47XG4gIGxhc3RYPzogbnVtYmVyO1xuICBsYXN0WT86IG51bWJlcjtcbn07XG5cbnR5cGUgVmlld1Byb3BzID0gQ29ubmVjdGVkUHJvcHMgJiBDb21wb25lbnRQcm9wcyAmIHsgZGlzcGF0Y2ggfTtcblxuY2xhc3MgQW5ub250YXRpb25PdmVybGF5VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxWaWV3UHJvcHMsIFN0YXRlUHJvcHM+IHtcbiAgQ2FudmFzUmVmOiBhbnkgPSBudWxsO1xuICBoYXNEcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGhhc0NoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzdGF0ZTogU3RhdGVQcm9wcyA9IHt9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaWQ6IHBhZ2VJZCwgZGlzcGF0Y2gsIHNlbGVjdGVkVG9vbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNhbnZhczogYW55ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5DYW52YXNSZWYpO1xuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjYW52YXMsXG4gICAgICBjb250ZXh0LFxuICAgICAgZGltZW50aW9uczogeyB3OiBjYW52YXMud2lkdGgsIGg6IGNhbnZhcy5oZWlnaHQgfSxcbiAgICB9KTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUb29sKSB7XG4gICAgICBjYXNlIEFubm9Ub29scy5yb3RhdGVSaWdodDpcbiAgICAgIGNhc2UgQW5ub1Rvb2xzLnJvdGF0ZUxlZnQ6XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkucm90YXRlSW1hZ2UocGFnZUlkLCBBbm5vVG9vbHMucm90YXRlTGVmdCA9PSBzZWxlY3RlZFRvb2wpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLmxvYWRBbm5vdGF0aW9ucyhwYWdlSWQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX2Fubm90YWlvbmVkTG9hZGVkID0gZmFsc2U7XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgYW5ub0RhdGFBc3luYyB9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NvbnN0IHsgYW5ub0RhdGFBc3luYzogcHJldkFubm9EYXRhQXN5bmMgfSA9IHByZXZQcm9wcztcblxuICAgIGNvbnN0IHsgY29udGV4dCwgZGltZW50aW9ucyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLl9hbm5vdGFpb25lZExvYWRlZCAmJlxuICAgICAgYW5ub0RhdGFBc3luYyAmJlxuICAgICAgYW5ub0RhdGFBc3luYy5yZXN1bHQgJiZcbiAgICAgIGFubm9EYXRhQXN5bmMucmVzdWx0LmRhdGFVcmxcbiAgICApIHtcbiAgICAgIGNvbnN0IGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMsIDAsIDAsIGRpbWVudGlvbnMudywgZGltZW50aW9ucy5oKTtcbiAgICAgIH07XG5cbiAgICAgIGltYWdlT2JqLnNyYyA9IGFubm9EYXRhQXN5bmMucmVzdWx0LmRhdGFVcmw7XG5cbiAgICAgIHRoaXMuX2Fubm90YWlvbmVkTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGlkOiBwYWdlSWQsIGRpc3BhdGNoLCBvbkFubm90YXRpb25zRG9uZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQgJiYgb25Bbm5vdGF0aW9uc0RvbmUpIG9uQW5ub3RhdGlvbnNEb25lKCk7XG5cbiAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLmNoZWNrSWZVbk1vdW50ZWQocGFnZUlkKSk7XG4gIH1cblxuICBzdGF0aWMgaXNNb2JpbGUoKSB7XG4gICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZU9uTW91c2VEb3duKGUpIHtcbiAgICBpZiAoIXRoaXMuYW5ub0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zdGF0ZS5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zdGF0ZS5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGlmIChBbm5vbnRhdGlvbk92ZXJsYXlWaWV3LmlzTW9iaWxlKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb29yZGluYXRlczoge1xuICAgICAgICAgIHN0YXJ0UG9pbnQ6IHtcbiAgICAgICAgICAgIFg6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdCxcbiAgICAgICAgICAgIFk6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgICAgc3RhcnRQb2ludDoge1xuICAgICAgICAgICAgWDogZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgICAgWTogZS5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhd2luZzogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU9uTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuYW5ub0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IGRyYXdpbmcsIGxhc3RYLCBsYXN0WSwgY2FudmFzLCBjb29yZGluYXRlcywgZGltZW50aW9ucyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChkcmF3aW5nKSB7XG4gICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IGN1cnJlbnRYO1xuICAgICAgbGV0IGN1cnJlbnRZO1xuXG4gICAgICBpZiAoQW5ub250YXRpb25PdmVybGF5Vmlldy5pc01vYmlsZSgpKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSB7XG4gICAgICAgICAgWDogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIFk6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuY3VycmVudCA9IHtcbiAgICAgICAgICBYOiBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgWTogZS5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gZGltZW50aW9ucy5oIC8gY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy5kcmF3KGNvb3JkaW5hdGVzLCBzY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgYW5ub0FjdGl2ZSgpIHtcbiAgICBjb25zdCB7IGFubm9EYXRhQXN5bmMsIHNlbGVjdGVkVG9vbCwgYW5ub1RleHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc2VsZWN0ZWRUb29sID09IEFubm9Ub29scy5zaG93T3JpZ2luYWwgfHwgKGFubm9EYXRhQXN5bmMgJiYgYW5ub0RhdGFBc3luYy5pc0xvYWRpbmcpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgLypcbiAgICAgICAgaWYgKCEhYW5ub1RleHQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICovXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGhhbmRsZW9uTW91c2VVcChlKSB7XG4gICAgaWYgKCF0aGlzLmFubm9BY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGRpbWVudGlvbnMsIGNhbnZhcywgY29udGV4dCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY3VycmVudCwgbGFzdERyYXdQb2ludCB9ID0gY29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdCB7IHNlbGVjdGVkVG9vbCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc3RhcnRQb2ludCAmJiBjdXJyZW50KSB7XG4gICAgICBpZiAoQW5ub1Rvb2xzLmFubm90YXRlID09IHNlbGVjdGVkVG9vbCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IGRpbWVudGlvbnMuaCAvIGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGxhc3REcmF3UG9pbnQpIHtcbiAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdChcbiAgICAgICAgICAgIChzdGFydFBvaW50LlggLSAyKSAqIHNjYWxlLFxuICAgICAgICAgICAgKHN0YXJ0UG9pbnQuWSAtIDIpICogc2NhbGUsXG4gICAgICAgICAgICAobGFzdERyYXdQb2ludC5YIC0gc3RhcnRQb2ludC5YICsgNCkgKiBzY2FsZSxcbiAgICAgICAgICAgIChsYXN0RHJhd1BvaW50LlkgLSBzdGFydFBvaW50LlkgKyA0KSAqIHNjYWxlLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBlbnN1cmVBbm5vdGF0aW9ucygpLmluaXRBbm5vVGV4dCh7XG4gICAgICAgICAgICBsZWZ0OiBzdGFydFBvaW50LlggKiBzY2FsZSxcbiAgICAgICAgICAgIHRvcDogc3RhcnRQb2ludC5ZICogc2NhbGUsXG4gICAgICAgICAgICB3aWR0aDogKGN1cnJlbnQuWCAtIHN0YXJ0UG9pbnQuWCkgKiBzY2FsZSxcbiAgICAgICAgICAgIGhlaWdodDogKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZUNhbnZhcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3aW5nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGRyYXcoY29vcmRpbmF0ZXM6IERDb29yZGluYXRlcywgc2NhbGU6IG51bWJlcikge1xuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGxhc3REcmF3UG9pbnQsIGN1cnJlbnQgfSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKCF0aGlzLmhhc0RyYXdpbmcpIHtcbiAgICAgIGlmIChjdXJyZW50LlggLSBzdGFydFBvaW50LlggPCAxMCAmJiBjdXJyZW50LlkgLSBzdGFydFBvaW50LlkgPCAxMCkge1xuICAgICAgICAvL2JhcmVseSBhbnkgbW91c2UgbW92ZSBtYXkgYmUgdGhlIHBlcnNvbiBkb2VzIGFjdHVhbGx5IHdhbnQgdG8gZHJhd1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxhc3REcmF3UG9pbnQpIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KFxuICAgICAgICAoc3RhcnRQb2ludC5YIC0gMikgKiBzY2FsZSxcbiAgICAgICAgKHN0YXJ0UG9pbnQuWSAtIDIpICogc2NhbGUsXG4gICAgICAgIChsYXN0RHJhd1BvaW50LlggLSBzdGFydFBvaW50LlggKyA0KSAqIHNjYWxlLFxuICAgICAgICAobGFzdERyYXdQb2ludC5ZIC0gc3RhcnRQb2ludC5ZICsgNCkgKiBzY2FsZSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkVG9vbCkge1xuICAgICAgY2FzZSBBbm5vVG9vbHMuY2xlYXI6XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQW5ub1Rvb2xzLmFubm90YXRlOlxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgICAgICAgY29udGV4dC5zdHJva2VSZWN0KFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQW5ub1Rvb2xzLnJlZGFjdDpcbiAgICAgIGNhc2UgQW5ub1Rvb2xzLmhpZ2hsaWdodDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMDtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPVxuICAgICAgICAgIHNlbGVjdGVkVG9vbCA9PSBBbm5vVG9vbHMucmVkYWN0ID8gJ3JnYmEoMCwgMCwgMCwgMS4wKScgOiAncmdiYSgyNTUsIDI1NSwgMCwgMC40NSknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNEcmF3aW5nID0gdHJ1ZTtcbiAgICBjb29yZGluYXRlcy5sYXN0RHJhd1BvaW50ID0gY29vcmRpbmF0ZXMuY3VycmVudDtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzIH0pO1xuICB9XG5cbiAgaGFuZGxlVGV4dEVudGVyKCkge1xuICAgIGNvbnN0IHsgYW5ub1RleHQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGV4dCA9IGFubm9UZXh0ICYmIGFubm9UZXh0LnRleHQ7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZm9udFNpemVQeCA9IDIwO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAxLjApJztcbiAgICBjb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZVB4fXB4IENhbGlicmlgO1xuXG4gICAgY29uc3QgbWF4V2lkdGggPSBhbm5vVGV4dC5wb3NpdGlvbi53aWR0aCAtIDQ7XG4gICAgY29uc3QgbGluZUhlaWdodCA9IGZvbnRTaXplUHggKyA0O1xuICAgIGNvbnN0IHggPSBhbm5vVGV4dC5wb3NpdGlvbi5sZWZ0ICsgMjtcbiAgICBsZXQgeSA9IGFubm9UZXh0LnBvc2l0aW9uLnRvcCArIGZvbnRTaXplUHg7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcbiAgICBsZXQgbGluZSA9ICcnO1xuXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCB3b3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyAnO1xuICAgICAgdmFyIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgIHZhciB0ZXN0V2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgaWYgKHRlc3RXaWR0aCA+IG1heFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuXG4gICAgY29udGV4dC5saW5lV2lkdGggPSAwO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDAsIDAuNDUpJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgYW5ub1RleHQucG9zaXRpb24ubGVmdCxcbiAgICAgIGFubm9UZXh0LnBvc2l0aW9uLnRvcCxcbiAgICAgIGFubm9UZXh0LnBvc2l0aW9uLndpZHRoLFxuICAgICAgYW5ub1RleHQucG9zaXRpb24uaGVpZ2h0LFxuICAgICk7XG5cbiAgICB0aGlzLnNhdmVDYW52YXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUNhbnZhcygpIHtcbiAgICBjb25zdCB7IGlkOiBwYWdlSWQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF0aGlzLkNhbnZhc1JlZikge1xuICAgICAgY29uc29sZS5lcnJvcignQ2FudmFzIFJlZiBpcyBlbXB0eScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLkNhbnZhc1JlZi50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2F2ZUFubm90YXRpb25zKHBhZ2VJZCwgZGF0YSkpO1xuXG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXNwbGF5U3R5bGU6IGFueSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcwcHgnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBhbm5vRGF0YUFzeW5jLCBzZWxlY3RlZFRvb2wsIGFubm9UZXh0LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8qXG4gICAgICAgIGlmICghYW5ub1RleHQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlTdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJ1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICBjb25zdCBjYW52YXNTdHlsZSA9XG4gICAgICBBbm5vVG9vbHMuc2hvd09yaWdpbmFsID09IHNlbGVjdGVkVG9vbFxuICAgICAgICA/IHsgdmlzaWJpbGl0eTogJ2hpZGRlbicsIC4uLmRpc3BsYXlTdHlsZSB9XG4gICAgICAgIDogZGlzcGxheVN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge2Fubm9EYXRhQXN5bmMgJiYgYW5ub0RhdGFBc3luYy5yZXN1bHQgJiYgYW5ub0RhdGFBc3luYy5yZXN1bHQuaW1hZ2VEYXRhVXJsICYmIChcbiAgICAgICAgICA8aW1nIHNyYz17YW5ub0RhdGFBc3luYy5yZXN1bHQuaW1hZ2VEYXRhVXJsfSBzdHlsZT17ZGlzcGxheVN0eWxlfSBjbGFzc05hbWU9J2Fubm9JbWcnIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17Y2FudmFzU3R5bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdhbm5vT3ZlcmxheSdcbiAgICAgICAgICByZWY9eyhyZWYpID0+ICh0aGlzLkNhbnZhc1JlZiA9IHJlZil9XG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25Nb3VzZURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlT25Nb3VzZURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVPbk1vdXNlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZU9uTW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZW9uTW91c2VVcC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlb25Nb3VzZVVwLmJpbmQodGhpcyl9XG4gICAgICAgID48L2NhbnZhcz5cbiAgICAgICAge2Fubm9UZXh0ICYmIChcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBjb2xvcjogJ2JsYWNrJywgLi4uYW5ub1RleHQucG9zaXRpb24gfX1cbiAgICAgICAgICAgIHZhbHVlPXthbm5vVGV4dC50ZXh0IHx8ICcnfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkudXBkYXRlQW5ub1RleHQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMgJiYgZS5zaGlmdEtleSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRFbnRlcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthbm5vRGF0YUFzeW5jICYmIChcbiAgICAgICAgICA8QW5ub0xvYWRlciBhc3luY1Jlc3VsdD17YW5ub0RhdGFBc3luY30gcHJvbXB0PSdsb2FkaW5nIGFubm90YXRpb25zJz5cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDwvQW5ub0xvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIGNvbnN0IGFubm9TdGF0ZSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4gYW5ub1N0YXRlO1xufSkoQW5ub250YXRpb25PdmVybGF5Vmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9vdmVybGF5LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2SXRlbSwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG50eXBlIFZpZXdQcm9wcyA9IHsgb25GaWxlQXR0YWNoZWQ6ICgpID0+IHZvaWQgfTtcblxuY29uc3QgQXR0YWNoTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PFZpZXdQcm9wcz4gPSAoeyBvbkZpbGVBdHRhY2hlZCB9KSA9PiB7XG4gIGxldCBhdHRhY2hJY29uID0gJ2ZhIGZhLWZpbGUtaW1hZ2UtbyBmYS0yeCc7XG4gIGxldCBhdHRhY2hQcm9tcHQgPSAnQXR0YWNoIGltYWdlcyc7XG5cbiAgaWYgKCFuYXZpZ2F0b3IgfHwgbmF2aWdhdG9yLnBsYXRmb3JtICE9ICdXaW4zMicpIHtcbiAgICBhdHRhY2hJY29uID0gJ2ZhIGZhLWNhbWVyYSBmYS0yeCc7XG4gIH1cblxuICBsZXQgZmlsZUlucHV0ID0gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxOYXZJdGVtXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uRmlsZUF0dGFjaGVkICYmIG9uRmlsZUF0dGFjaGVkKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J0F0dGFjaE1lbnV0b29sdGlwJz57YXR0YWNoUHJvbXB0fTwvVG9vbHRpcD59XG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17YXR0YWNoSWNvbn0gYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgIDwvTmF2SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaE1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvYXR0YWNoTWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IElMaXN0UGFnZXNTdGF0ZSwgTGlzdFBhZ2VzSGVscGVyIH0gZnJvbSAnLi9yZWR1Y2VySGVscGVyJztcbmltcG9ydCB7IE5hdkl0ZW0sIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgUGFnZUhvbGRlck1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VIb2xkZXJNb2RlbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBsaXN0b2ZQYWdlc0hlbHBlcjogTGlzdFBhZ2VzSGVscGVyPFBhZ2VIb2xkZXJNb2RlbD47XG59O1xuXG50eXBlIFZpZXdQcm9wcyA9IENvbXBvbmVudFByb3BzICYgSUxpc3RQYWdlc1N0YXRlICYgeyBkaXNwYXRjaCB9O1xuXG5jb25zdCBEZWxldGVNZW51OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Vmlld1Byb3BzPiA9ICh7XG4gIGRpc3BhdGNoLFxuICBzZWxlY3RlZFBhZ2VzLFxuICBsaXN0b2ZQYWdlc0hlbHBlcixcbn0pID0+IHtcbiAgLy9UaGVyZSBpcyBhdCBsZWFzdCBvbmUgc2VsZWN0ZWQgcGFnZVxuICBjb25zdCBlbmFibGVkID1cbiAgICBsaXN0b2ZQYWdlc0hlbHBlciAmJiBzZWxlY3RlZFBhZ2VzICYmIF8uZmluZChfLmtleXMoc2VsZWN0ZWRQYWdlcyksIChwKSA9PiAhIXNlbGVjdGVkUGFnZXNbcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkl0ZW1cbiAgICAgIGRpc2FibGVkPXshZW5hYmxlZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IGxpc3RvZlBhZ2VzSGVscGVyICYmIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmRlbGV0ZVBhZ2VzKCkpfVxuICAgID5cbiAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2RlbGV0ZW1lbnV0b29sdGlwJz5EZWxldGUgSW1hZ2VzPC9Ub29sdGlwPn1cbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS10aW1lcyBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgIDwvTmF2SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHsgZGlzcGF0Y2ggfSwgQ29tcG9uZW50UHJvcHM+KChzdGF0ZSwgb3ducHJvcHMpID0+IHtcbiAgcmV0dXJuIG93bnByb3BzLmxpc3RvZlBhZ2VzSGVscGVyID8gb3ducHJvcHMubGlzdG9mUGFnZXNIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSkgOiB7fTtcbn0pKERlbGV0ZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2RlbGV0ZU1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgZmlsZXNpemUgZnJvbSAnZmlsZXNpemUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7XG4gIENvcnJlY3RlZERpbWVudGlvblByb3BzLFxuICBEUkFHVFlQRV9QQUdFLFxuICBJTGlzdFBhZ2VzU3RhdGUsXG4gIExpc3RQYWdlc0hlbHBlcixcbn0gZnJvbSAnLi9yZWR1Y2VySGVscGVyJztcbmltcG9ydCB7IERyYWdTb3VyY2UsIERyb3BUYXJnZXQgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenktbG9hZCc7XG5pbXBvcnQgeyBOYXRpdmVUeXBlcyB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCB7IFBhZ2VIb2xkZXJNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSG9sZGVyTW9kZWwnO1xuaW1wb3J0IHsgUGFnZUltYWdlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUltYWdlTW9kZWwnO1xuaW1wb3J0IHsgUGFnZUltYWdlVHlwZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZVR5cGVNb2RlbCc7XG5pbXBvcnQgZW5zdXJlUHJpbnRBcHAgZnJvbSAnLi4vcHJpbnRBcHAvcmVkdWNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWRyb3BUYXJnZXRQcm9wcyB7XG4gIGxpc3RvZlBhZ2VzSGVscGVyOiBMaXN0UGFnZXNIZWxwZXI8UGFnZUhvbGRlck1vZGVsPjtcbn1cblxuZXhwb3J0IHR5cGUgRG5EUHJvcHMgPSB7XG4gIGRpc3BhdGNoO1xuICBwYWdlRHJvcFRhcmdldDogKGFueSkgPT4gYW55O1xuICAvL2lzRHJhZ092ZXJNZTogYm9vbGVhbixcbiAgaXNPdmVyQ3VycmVudDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBEcm9wVGFyZ2V0Q3JlYXRvciA9IERyb3BUYXJnZXQoXG4gIFtEUkFHVFlQRV9QQUdFLCBOYXRpdmVUeXBlcy5GSUxFXSxcbiAge1xuICAgIGRyb3AocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCkge1xuICAgICAgY29uc3QgaGFzRHJvcHBlZE9uQ2hpbGQgPSBtb25pdG9yLmRpZERyb3AoKTtcbiAgICAgIGlmIChoYXNEcm9wcGVkT25DaGlsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBtb25pdG9yLmdldEl0ZW1UeXBlKCk7XG4gICAgICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG5cbiAgICAgIHZhciBteVByb3BzID0gcHJvcHMgYXMgeyBkaXNwYXRjaCB9ICYgSWRyb3BUYXJnZXRQcm9wcztcbiAgICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyIH0gPSBteVByb3BzO1xuXG4gICAgICAvL2lmIChwYWdlc0FycmF5IClcblxuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbGlzdG9mUGFnZXNIZWxwZXIgbm90IHNldCBmb3IgcGFnZSBkcm9wIHRhcmdldCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIE5hdGl2ZVR5cGVzLkZJTEUgLyonX19OQVRJVkVfRklMRV9fJyovOlxuICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmFkZFBhZ2VzKGl0ZW0uZmlsZXMsIHByb3BzICYmIHByb3BzLm9yZGVyTnVtYmVyKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRFJBR1RZUEVfUEFHRTpcbiAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5vbkV4aXN0aW5nUGFnZWREcm9wcGVkMShpdGVtLCBwcm9wcyAmJiBwcm9wcy5pZCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgfSxcbiAgfSxcblxuICAoY29ubmVjdGVyLCBtb25pdG9yKSA9PiAoe1xuICAgIHBhZ2VEcm9wVGFyZ2V0OiBjb25uZWN0ZXIuZHJvcFRhcmdldCgpLFxuICAgIC8vaXNEcmFnT3Zlck1lOiBtb25pdG9yLmlzT3ZlcigpLFxuICAgIGlzT3ZlckN1cnJlbnQ6IG1vbml0b3IuaXNPdmVyKHsgc2hhbGxvdzogdHJ1ZSB9KSxcbiAgfSksXG4pO1xuXG50eXBlIFN0YXRlUHJvcHMgPSB7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBwb2xsQXR0ZW1wdHM/OiBudW1iZXI7XG59O1xuXG50eXBlIFZpZXdQcm9wcyA9IFBhZ2VJbWFnZU1vZGVsICZcbiAgRG5EUHJvcHMgJlxuICBJZHJvcFRhcmdldFByb3BzICYgeyBQYWdlT3ZlcmxheVZpZXc/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT4gfSAmIHtcbiAgICBjb25uZWN0RHJhZ1NvdXJjZTogKGFueSkgPT4gYW55O1xuICAgIGlzRHJhZ2dpbmc6IGJvb2xlYW47XG4gIH0gJiB7IGRlc2lyZWRIZWlnaHQ6IG51bWJlcjsgY29ycmVjdGVkRGltZW50aW9uczogQ29ycmVjdGVkRGltZW50aW9uUHJvcHMgfTtcblxuY2xhc3MgTGF6eUxvYWRlZEltYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxWaWV3UHJvcHMsIFN0YXRlUHJvcHM+IHtcbiAgc3RhdGU6IFN0YXRlUHJvcHMgPSB7XG4gICAgcG9sbEF0dGVtcHRzOiAwLFxuICB9O1xuICBfaW1nUmVmOiBhbnkgPSBudWxsO1xuXG4gIF9jaGVja1Byb2Nlc3Npbmc6IGFueSA9IG51bGw7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2NoZWNrUHJvY2Vzc2luZykgY2xlYXJUaW1lb3V0KHRoaXMuX2NoZWNrUHJvY2Vzc2luZyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgcGFnZVR5cGUsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCwgb3JpZ2luYWxJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhZ2VUeXBlOiBwcmV2UGFnZVR5cGUgfSA9IHByZXZQcm9wcztcblxuICAgIC8vaWYgKHRoaXMuX2NoZWNrUHJvY2Vzc2luZylcbiAgICAvLyAgICBjbGVhckludGVydmFsKHRoaXMuX2NoZWNrUHJvY2Vzc2luZyk7XG5cbiAgICBpZiAocGFnZVR5cGUgIT0gcHJldlBhZ2VUeXBlKSB7XG4gICAgICBpZiAoIXBhZ2VUeXBlIHx8IFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWIgPT0gcGFnZVR5cGUpIHtcbiAgICAgICAgLy9pbWFnZSBpcyBkb25lIHByb2Nlc3NpbmdcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvbGxBdHRlbXB0czogMCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSBleHBvbmVudGlhbCBiYWNrb2ZmIGZvciBwb2xsaW5nICgycywgNHMsIDhzLCAxNnMsIG1heCAzMHMpXG4gICAgICAgIGNvbnN0IGF0dGVtcHRzID0gdGhpcy5zdGF0ZS5wb2xsQXR0ZW1wdHMgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLm1pbigyMDAwICogTWF0aC5wb3coMiwgYXR0ZW1wdHMpLCAzMDAwMCk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tQcm9jZXNzaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIucHJvY2Vzc1BhZ2UoaWQpKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9sbEF0dGVtcHRzOiBhdHRlbXB0cyArIDEgfSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBwYWdlVHlwZSwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkLCBvcmlnaW5hbElkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYWdlVHlwZSB8fCBQYWdlSW1hZ2VUeXBlTW9kZWwubm9ud2ViID09IHBhZ2VUeXBlKSB7XG4gICAgICAvL2ltYWdlIGlzIGRvbmUgcHJvY2Vzc2luZ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGFydCB3aXRoIGluaXRpYWwgZGVsYXkgb2YgMiBzZWNvbmRzXG4gICAgICB0aGlzLl9jaGVja1Byb2Nlc3NpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIucHJvY2Vzc1BhZ2UoaWQpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvbGxBdHRlbXB0czogMSB9KTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSW1hZ2VQcm9wcygpIHtcbiAgICBpZiAoIXRoaXMuX2ltZ1JlZikge1xuICAgICAgY29uc29sZS53YXJuKCdpbWFnZSByZWYgaXMgbnVsbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0LCBoZWlnaHQ6IGRpc3BsYXlIZWlnaHQgfSA9IHRoaXMuX2ltZ1JlZjtcblxuICAgIGlmICh3aWR0aCAhPSBuYXR1cmFsV2lkdGggfHwgaGVpZ2h0ICE9IG5hdHVyYWxIZWlnaHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb3JyZWN0aW5nIGltYWdlIGRpbWVudGlvbnMnLCBpZCk7XG4gICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5hZGRDb3JyZWN0ZWREaW1lbnRpb25zKGlkLCBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQpKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjYWxlOiBkaXNwbGF5SGVpZ2h0IC8gbmF0dXJhbEhlaWdodCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkltYWdlTG9hZEZhaWxlZCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuaGFuZGxlRmFpbGVkSW1hZ2VMb2FkKGlkKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVR5cGUsXG4gICAgICBkZXNpcmVkSGVpZ2h0LFxuICAgICAgcGF0aCxcbiAgICAgIHNpemUsXG4gICAgICBjcmVhdGVkLFxuICAgICAgb3JpZ2luYWxQYWdlTmFtZSxcbiAgICAgIGlkLFxuICAgICAgUGFnZU92ZXJsYXlWaWV3LFxuICAgICAgb3JpZ2luYWxJZCxcbiAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICBvZmZMaW5lUHJvY2Vzc2luZ09ubHksXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgd2FpdFRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiAnI2NjYycsXG4gICAgICAvL2ZvbnRTaXplOiAnbGFyZ2UnLFxuICAgICAgLy9tYXJnaW5Ub3A6IDEwXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRCZ1N0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBkZXNpcmVkSGVpZ2h0LFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGNvbG9yOiAnIzk5OScsXG4gICAgICBib3JkZXI6ICcycHggZGFzaGVkICNkZWUyZTYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICB9IGFzIGFueTtcblxuICAgIGNvbnN0IHdhaXRGaWxlSW5mb1N0eWxlID0ge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCBwcm9jZXNzaW5nT3ZlcmxheVN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBwYWRkaW5nOiAnMTJweCAxNnB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSknLFxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNkZWUyZTYnLFxuICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDRweCknLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXJTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogJzZweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTllY2VmJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgIzBkNmVmZCAwJSwgIzBkY2FmMCAxMDAlKScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgYW5pbWF0aW9uOiAncHJvZ3Jlc3MtYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlJyxcbiAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICB9IGFzIGFueTtcblxuICAgIGNvbnN0IHN0YXR1c1RleHRTdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICBjb2xvcjogJyM0OTUwNTcnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3QgZXh0ID0gaWQuc3Vic3RyKGlkLmxhc3RJbmRleE9mKCcuJykgKyAxKTtcblxuICAgIC8vIEhlbHBlciBjb21wb25lbnQgZm9yIHByb2Nlc3Npbmcgc3RhdHVzIG92ZXJsYXlcbiAgICBjb25zdCBQcm9jZXNzaW5nU3RhdHVzT3ZlcmxheSA9ICh7IHN0YXR1cywgaWNvbiB9OiB7IHN0YXR1czogc3RyaW5nOyBpY29uOiBzdHJpbmcgfSkgPT4gKFxuICAgICAgPD5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgQGtleWZyYW1lcyBwcm9ncmVzcy1hbmltYXRpb24ge1xuICAgICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG4gICAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3Byb2Nlc3NpbmdPdmVybGF5U3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Byb2dyZXNzQmFyQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cHJvZ3Jlc3NCYXJTdHlsZX0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3RhdHVzVGV4dFN0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSAke2ljb259IGZhLXNwaW5gfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0+PC9pPlxuICAgICAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMXB4JywgY29sb3I6ICcjNmM3NTdkJyB9fT5cbiAgICAgICAgICAgICAgVGhpcyB1c3VhbGx5IHRha2VzIDUtMTAgc2Vjb25kc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgICAvL3doZW4gcGFnZXR5cGUgaXMgbnVsbCBpdCBtZW5hcyBpdCdzIHJlYWR5IGZvciB3ZWIgZGlzcGxheVxuICAgIGlmIChcbiAgICAgICFwYWdlVHlwZSB8fFxuICAgICAgKFBhZ2VJbWFnZVR5cGVNb2RlbC5wcm9jZXNzaW5nICE9IHBhZ2VUeXBlICYmXG4gICAgICAgIGV4dCAmJlxuICAgICAgICBfLmluY2x1ZGVzKFsncG5nJywgJ2pwZycsICdqcGVnJ10sIGV4dC50b0xvd2VyQ2FzZSgpKSlcbiAgICApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiAodGhpcy5faW1nUmVmID0gcmVmKX1cbiAgICAgICAgICAgIG9uTG9hZD17KGUpID0+IHRoaXMuY2hlY2tJbWFnZVByb3BzKCl9XG4gICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gdGhpcy5vbkltYWdlTG9hZEZhaWxlZCgpfVxuICAgICAgICAgICAgc3JjPXtwYXRofVxuICAgICAgICAgICAgYWx0PSdkb2N1bWVudCBpbWFnZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZG9jUGFnZUltYWdlJ1xuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBkZXNpcmVkSGVpZ2h0IH19XG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHtQYWdlT3ZlcmxheVZpZXcgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH19PlxuICAgICAgICAgICAgICA8UGFnZU92ZXJsYXlWaWV3XG4gICAgICAgICAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIG9uQW5ub3RhdGlvbnNEb25lPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5yZWxvYWRBY3RpdmVEb2NQYWdlcyhbaWRdKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7ISFwYWdlVHlwZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogNSwgYm90dG9tOiA1LCAuLi53YWl0VGV4dFN0eWxlIH19PlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBhbmFseXppbmcgPGkgY2xhc3NOYW1lPSdmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtZncnPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IENoZWNrT2ZmbGluZVByb2Nlc3NpbmcgPSAoeyBjaGlsZHJlbiB9KSA9PlxuICAgICAgb2ZmTGluZVByb2Nlc3NpbmdPbmx5ID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC8vaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmc6ICcycmVtJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnc21hbGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjODE4MTgxJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5UaGlzIHtleHR9IGRvY3VtZW50IHNpemUgZXhjZWVkcyB0aGUgbGltaXQgZm9yIHJlYWwgdGltZSBwcm9jZXNzaW5nPC9wPlxuICAgICAgICAgIDxwPkl0IGlzIGJlaW5nIHByb2Nlc3NlZCBhc3luY2hyb25vdXNseSAuLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PntjaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcblxuICAgIGNvbnN0IGZpbGVJY28gPSBleHQgJiYgZXh0LnRvTG93ZXJDYXNlKCkgPT0gJ3BkZicgPyAnZmEtZmlsZS1wZGYtbycgOiAnZmEtZmlsZS1pbWFnZS1vJztcbiAgICBjb25zdCBGaWxlSW5mb1ZpZXcgPSAoKSA9PiAoXG4gICAgICA8ZGl2IHN0eWxlPXt3YWl0RmlsZUluZm9TdHlsZX0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17J2ZhICcgKyBmaWxlSWNvfSBzdHlsZT17eyBmb250U2l6ZTogZGVzaXJlZEhlaWdodCAvIDMsIG1hcmdpbjogJzEwcHgnIH19PjwvaT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7b3JpZ2luYWxQYWdlTmFtZSAmJiA8aT4gXCJ7b3JpZ2luYWxQYWdlTmFtZX1cIiA8L2k+fVxuICAgICAgICAgIHshIXNpemUgJiYgPHN0cm9uZz4ge2ZpbGVzaXplKHNpemUpfSA8L3N0cm9uZz59XG4gICAgICAgICAge2NyZWF0ZWQgJiYgPGkgc3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbCcgfX0+Y3JlYXRlZCB7bW9tZW50KGNyZWF0ZWQpLmZvcm1hdCgnbGxsJyl9PC9pPn1cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJzU3R5bGU9J2xpbmsnXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVQcmludEFwcCgpLmRvd25sb2FkT3JpZ2luYWxzKFtvcmlnaW5hbElkIHx8IGlkXSkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXN1Y2Nlc3MnIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWRvd25sb2FkJz48L2k+IERvd25sb2FkXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgc3dpdGNoIChwYWdlVHlwZSkge1xuICAgICAgY2FzZSBQYWdlSW1hZ2VUeXBlTW9kZWwudW5wcm9jZXNzZWQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17d2FpdEJnU3R5bGV9PlxuICAgICAgICAgICAgPEZpbGVJbmZvVmlldyAvPlxuICAgICAgICAgICAgPENoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgICAgIDxQcm9jZXNzaW5nU3RhdHVzT3ZlcmxheVxuICAgICAgICAgICAgICAgIHN0YXR1cz1cIkFuYWx5emluZyBkb2N1bWVudC4uLlwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImZhLXNlYXJjaFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgUGFnZUltYWdlVHlwZU1vZGVsLmlkZW50aWZ5aW5nOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRCZ1N0eWxlfT5cbiAgICAgICAgICAgIDxGaWxlSW5mb1ZpZXcgLz5cbiAgICAgICAgICAgIDxDaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgICAgICA8UHJvY2Vzc2luZ1N0YXR1c092ZXJsYXlcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJJZGVudGlmeWluZyBkb2N1bWVudCB0eXBlLi4uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZmEtZmlsZS10ZXh0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBQYWdlSW1hZ2VUeXBlTW9kZWwucHJvY2Vzc2luZzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0QmdTdHlsZX0+XG4gICAgICAgICAgICA8RmlsZUluZm9WaWV3IC8+XG4gICAgICAgICAgICA8Q2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICAgICAgPFByb2Nlc3NpbmdTdGF0dXNPdmVybGF5XG4gICAgICAgICAgICAgICAgc3RhdHVzPVwiQ29udmVydGluZyB0byBpbWFnZXMuLi5cIlxuICAgICAgICAgICAgICAgIGljb249XCJmYS1pbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgUGFnZUltYWdlVHlwZU1vZGVsLm5vbndlYjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17d2FpdEJnU3R5bGV9PlxuICAgICAgICAgICAgPEZpbGVJbmZvVmlldyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBQYWdlVmlldzogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PFZpZXdQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc3BhdGNoLFxuICAgIHBhZ2VUeXBlLFxuICAgIGlkLFxuICAgIGRlc2lyZWRIZWlnaHQsXG4gICAgcGF0aCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgY29ycmVjdGVkRGltZW50aW9ucyxcbiAgICBwYWdlRHJvcFRhcmdldCxcbiAgICBpc092ZXJDdXJyZW50LFxuICAgIGNvbm5lY3REcmFnU291cmNlLFxuICAgIGlzRHJhZ2dpbmcsXG4gIH0gPSBwcm9wcztcblxuICBsZXQgY29ycmVjdGVkV2lkdGggPSB3aWR0aDtcbiAgbGV0IGNvcnJlY3RlZGhlaWdodCA9IGhlaWdodDtcbiAgaWYgKFxuICAgIGNvcnJlY3RlZERpbWVudGlvbnMgJiZcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXSAmJlxuICAgIGNvcnJlY3RlZERpbWVudGlvbnNbaWRdLndpZHRoICYmXG4gICAgY29ycmVjdGVkRGltZW50aW9uc1tpZF0uaGVpZ2h0XG4gICkge1xuICAgIGNvcnJlY3RlZFdpZHRoID0gY29ycmVjdGVkRGltZW50aW9uc1tpZF0ud2lkdGg7XG4gICAgY29ycmVjdGVkaGVpZ2h0ID0gY29ycmVjdGVkRGltZW50aW9uc1tpZF0uaGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgZGVzaXJlZFdpZHRoID1cbiAgICBkZXNpcmVkSGVpZ2h0ICogKGNvcnJlY3RlZFdpZHRoICYmIGNvcnJlY3RlZGhlaWdodCA/IGNvcnJlY3RlZFdpZHRoIC8gY29ycmVjdGVkaGVpZ2h0IDogMC43NzIpO1xuXG4gIHJldHVybiBwYWdlRHJvcFRhcmdldChcbiAgICBjb25uZWN0RHJhZ1NvdXJjZShcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdyZXZQYWdlJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc092ZXJDdXJyZW50ID8gJyM2OTNiMjJhMScgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwLjUgOiAxLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXtkZXNpcmVkSGVpZ2h0fSB3aWR0aD17ZGVzaXJlZFdpZHRofSBvZmZzZXRWZXJ0aWNhbD17MTAwMH0+XG4gICAgICAgICAgPExhenlMb2FkZWRJbWFnZSB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICA8L2Rpdj4sXG4gICAgKSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdTb3VyY2UoXG4gIERSQUdUWVBFX1BBR0UsXG4gIHtcbiAgICBiZWdpbkRyYWcocHJvcHM6IFBhZ2VJbWFnZU1vZGVsKSB7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgY2FuRHJhZyhwcm9wcywgbW9uaXRvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAqL1xuXG4gICAgZW5kRHJhZyhwcm9wcywgbW9uaXRvcikge1xuICAgICAgaWYgKG1vbml0b3IuZGlkRHJvcCgpKSB7XG4gICAgICAgIGNvbnN0IGRyb3BwZWRSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcblxuICAgICAgICBpZiAoZHJvcHBlZFJlc3VsdCAmJiBkcm9wcGVkUmVzdWx0Lm1vdmVkVG9MaXN0KSB7XG4gICAgICAgICAgdmFyIG15UHJvcHMgPSBwcm9wcyBhcyB7IGRpc3BhdGNoIH0gJiBJZHJvcFRhcmdldFByb3BzICYgUGFnZUltYWdlTW9kZWw7XG4gICAgICAgICAgY29uc3QgeyBkaXNwYXRjaCwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkIH0gPSBteVByb3BzO1xuXG4gICAgICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpc3RvZlBhZ2VzSGVscGVyIG5vdCBzZXQgZm9yIHBhZ2UgZHJvcCBzb3VyY2UnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIucGFnZU1vdmVkKGlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICAoY29ubmVjdGVyLCBtb25pdG9yKSA9PiAoe1xuICAgIGNvbm5lY3REcmFnU291cmNlOiBjb25uZWN0ZXIuZHJhZ1NvdXJjZSgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSxcbikoRHJvcFRhcmdldENyZWF0b3IoUGFnZVZpZXcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9wYWdlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2SXRlbSwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGVuc3VyZVdvcmtzcGFjZSBmcm9tICcuLi93b3Jrc3BhY2UvcmVkdWNlcic7XG5cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSB7XG4gIG9uU2NhbjogKCkgPT4gdm9pZDtcbn07XG5cbnR5cGUgQ29ubmVjdGVkUHJvcCA9IHsgY3JlYXRpb25PYmplY3Q6IGFueSB9O1xuXG5jb25zdCBTY2FuTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PENvbXBvbmVudFByb3BzICYgQ29ubmVjdGVkUHJvcD4gPSAoe1xuICBvblNjYW4sXG4gIGNyZWF0aW9uT2JqZWN0LFxufSkgPT4ge1xuICBjb25zdCBoYXNSZXZQcmludGVkRGF0YSA9ICEhKFxuICAgIGNyZWF0aW9uT2JqZWN0ICYmXG4gICAgY3JlYXRpb25PYmplY3QuaW5pdGNvbnRleHQgPT0gJ3ByaW50dG9yZXYnICYmXG4gICAgY3JlYXRpb25PYmplY3QuZGF0YVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkl0ZW1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25TY2FuICYmIG9uU2NhbigpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgIDxUb29sdGlwIGlkPSdzY2FuTWVudXRvb2x0aXAnPlxuICAgICAgICAgICAge2hhc1JldlByaW50ZWREYXRhID8gJ0ltcG9ydCBwcmludGVkIGltYWdlcycgOiAnU2NhbiBpbWFnZXMnfVxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7aGFzUmV2UHJpbnRlZERhdGEgPyAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXByaW50IGZhLTJ4JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtY2lyY2xlLW8tbm90Y2ggZmEtM3ggZmEtc3BpbidcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogLTcsXG4gICAgICAgICAgICAgICAgdG9wOiAtMTgsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjY2NjJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZXJhc2VyIGZhLTJ4JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgPC9OYXZJdGVtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRpb25PYmplY3QgfSA9IGVuc3VyZVdvcmtzcGFjZSgpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG5cbiAgcmV0dXJuIHsgY3JlYXRpb25PYmplY3QgfTtcbn0pKFNjYW5NZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FuTWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBlbnN1cmVNYWluTmF2LCB7IElOYXZNZW51U3RhdGUgfSBmcm9tICcuLi9tYWluTmF2L3JlZHVjZXInO1xuXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJ3JlYWN0LXRvZ2dsZS1idXR0b24nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxudHlwZSBWaWV3UHJvcHMgPSBJTmF2TWVudVN0YXRlICYgeyBkaXNwYXRjaCB9O1xuXG5jb25zdCBib3JkZXJSYWRpdXNTdHlsZSA9IHsgYm9yZGVyUmFkaXVzOiAyIH07XG5jb25zdCB0b29sdGlwID0gPFRvb2x0aXAgaWQ9J3Rvb2x0aXAnPlNlbGVjdCBzY2FubmVyIGJlZm9yZSBzY2FubmluZzwvVG9vbHRpcD47XG5jb25zdCBsYWJlbCA9IChcbiAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD0nYm90dG9tJyBvdmVybGF5PXt0b29sdGlwfT5cbiAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWVyYXNlcicgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycgfX0gLz5cbiAgPC9PdmVybGF5VHJpZ2dlcj5cbik7XG5cbmNvbnN0IE1vdmVhYmxlU2V0dGluZzogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PFZpZXdQcm9wcz4gPSAoeyBkaXNwYXRjaCwgc2VsZWN0YWJsZVNldHRpbmdzIH0pID0+IChcbiAgPGxpPlxuICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgcGFkZGluZ1JpZ2h0OiAnNXB4JyB9fT5cbiAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgdGh1bWJJY29uPXtsYWJlbH1cbiAgICAgICAgYWN0aXZlTGFiZWw9J09OJ1xuICAgICAgICBpbmFjdGl2ZUxhYmVsPSdPRkYnXG4gICAgICAgIGNvbG9ycz17e1xuICAgICAgICAgIGFjdGl2ZVRodW1iOiB7XG4gICAgICAgICAgICBiYXNlOiAnI2YzNzAyOScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbmFjdGl2ZVRodW1iOiB7XG4gICAgICAgICAgICBiYXNlOiAnI2YzNzAyOScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9eyEhc2VsZWN0YWJsZVNldHRpbmdzWydzZWxlY3RTY2FubmVyJ119XG4gICAgICAgIHRodW1iU3R5bGU9e2JvcmRlclJhZGl1c1N0eWxlfVxuICAgICAgICB0cmFja1N0eWxlPXtib3JkZXJSYWRpdXNTdHlsZX1cbiAgICAgICAgb25Ub2dnbGU9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIC8vcmVtZWJlciB0byBhZGQgdG8gbWFpbm5hdi9yZWR1Y2VyLnQgPXMgOnNldHRpbmdzVG9QZXJzaXN0IGlmIHlvdSB3YW50IHNldHRpbmcgdG8gcGVyc2lzdFxuXG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLnVwZGF0ZVNldHRpbmcoJ3NlbGVjdFNjYW5uZXInLCAhdmFsdWUpKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4+U2VsZWN0IHNjYW5uZXI8L3NwYW4+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4ge1xuICByZXR1cm4gZW5zdXJlTWFpbk5hdigpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSkgfHwge307XG59KShNb3ZlYWJsZVNldHRpbmcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL3NjYW5uZXJTZWxlY3RNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVQcm9qZWN0cyBmcm9tICcuLi9wcm9qZWN0cy9yZWR1Y2VyJztcbmltcG9ydCBlbnN1cmVTZWFyY2ggZnJvbSAnLi4vc2VhcmNoVmlldy9yZWR1Y2VyJztcblxudHlwZSBDb21wb25lbnRQcm9wcyA9IHtcbiAgcGFnZUlkOiBzdHJpbmc7XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3BzID0ge1xuICByZWFkb25seSBzaG93T2NyVGV4dGZvclBhZ2VJZDogc3RyaW5nO1xuICByZWFkb25seSBPQ1JFbmFibGVkOiBib29sZWFuO1xufTtcblxuY29uc3QgT0NSTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgQ29tcG9uZW50UHJvcHMgJiB7IGRpc3BhdGNoIH0+ID0gKHtcbiAgc2hvd09jclRleHRmb3JQYWdlSWQsXG4gIE9DUkVuYWJsZWQsXG4gIHBhZ2VJZCxcbiAgZGlzcGF0Y2gsXG59KSA9PiB7XG4gIGlmICghT0NSRW5hYmxlZCkgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD4mbmJzcDs8L1JlYWN0LkZyYWdtZW50PjtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG5cbiAgICAgIDxNZW51SXRlbVxuICAgICAgICBrZXk9J29jcl9kYXRhJ1xuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZVNlYXJjaCgpLlRvZ2dsZU9jclRleHQocGFnZUlkKSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19Ki99XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFNob3cgT0NSIERhdGFcbiAgICAgICAgICB7c2hvd09jclRleHRmb3JQYWdlSWQgPT0gcGFnZUlkICYmIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hlY2sgY29sb3Itb3JhbmdlJz48L2k+fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L01lbnVJdGVtPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZFByb2plY3QgfSA9IGVuc3VyZVByb2plY3RzKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcbiAgY29uc3QgeyBzaG93T2NyVGV4dGZvclBhZ2VJZCB9ID0gZW5zdXJlU2VhcmNoKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4ge1xuICAgIE9DUkVuYWJsZWQ6ICEhKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QuZnVsbFRleHRPY3IpLFxuICAgIHNob3dPY3JUZXh0Zm9yUGFnZUlkLFxuICB9O1xufSkoT0NSTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9zZWFyY2hWaWV3L29jck1lbnUudHN4IiwiZXhwb3J0IGRlZmF1bHQge307XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlci9kaXN0L2VudHJ5LmpzIS4vcmVhY3RXZWJVdGlscy9iYXNlL25vLWxvYWRlci5qcyEuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9saWdodEJveC5jbGllbnRPbmx5LnRzeCIsIihmdW5jdGlvbihyb290LGZhY3Rvcnkpe1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuZXZlbnRMaXN0ZW5lciA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIHdyYXAoc3RhbmRhcmQsIGZhbGxiYWNrKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChlbCwgZXZ0TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcblx0XHRcdGlmIChlbFtzdGFuZGFyZF0pIHtcblx0XHRcdFx0ZWxbc3RhbmRhcmRdKGV2dE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcblx0XHRcdH0gZWxzZSBpZiAoZWxbZmFsbGJhY2tdKSB7XG5cdFx0XHRcdGVsW2ZhbGxiYWNrXSgnb24nICsgZXZ0TmFtZSwgbGlzdGVuZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG4gICAgcmV0dXJuIHtcblx0XHRhZGQ6IHdyYXAoJ2FkZEV2ZW50TGlzdGVuZXInLCAnYXR0YWNoRXZlbnQnKSxcblx0XHRyZW1vdmU6IHdyYXAoJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnZGV0YWNoRXZlbnQnKVxuXHR9O1xufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ldmVudGxpc3RlbmVyL2V2ZW50bGlzdGVuZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBmaWxlc2l6ZVxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBKYXNvbiBNdWxsaWdhbiA8amFzb24ubXVsbGlnYW5AYXZvaWR3b3JrLmNvbT5cbiAqIEBsaWNlbnNlIEJTRC0zLUNsYXVzZVxuICogQHZlcnNpb24gNi40LjBcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuZmlsZXNpemUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cblx0dmFyIGIgPSAvXihifEIpJC8sXG5cdCAgICBzeW1ib2wgPSB7XG5cdCAgaWVjOiB7XG5cdCAgICBiaXRzOiBbXCJiXCIsIFwiS2liXCIsIFwiTWliXCIsIFwiR2liXCIsIFwiVGliXCIsIFwiUGliXCIsIFwiRWliXCIsIFwiWmliXCIsIFwiWWliXCJdLFxuXHQgICAgYnl0ZXM6IFtcIkJcIiwgXCJLaUJcIiwgXCJNaUJcIiwgXCJHaUJcIiwgXCJUaUJcIiwgXCJQaUJcIiwgXCJFaUJcIiwgXCJaaUJcIiwgXCJZaUJcIl1cblx0ICB9LFxuXHQgIGplZGVjOiB7XG5cdCAgICBiaXRzOiBbXCJiXCIsIFwiS2JcIiwgXCJNYlwiLCBcIkdiXCIsIFwiVGJcIiwgXCJQYlwiLCBcIkViXCIsIFwiWmJcIiwgXCJZYlwiXSxcblx0ICAgIGJ5dGVzOiBbXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIsIFwiVEJcIiwgXCJQQlwiLCBcIkVCXCIsIFwiWkJcIiwgXCJZQlwiXVxuXHQgIH1cblx0fSxcblx0ICAgIGZ1bGxmb3JtID0ge1xuXHQgIGllYzogW1wiXCIsIFwia2liaVwiLCBcIm1lYmlcIiwgXCJnaWJpXCIsIFwidGViaVwiLCBcInBlYmlcIiwgXCJleGJpXCIsIFwiemViaVwiLCBcInlvYmlcIl0sXG5cdCAgamVkZWM6IFtcIlwiLCBcImtpbG9cIiwgXCJtZWdhXCIsIFwiZ2lnYVwiLCBcInRlcmFcIiwgXCJwZXRhXCIsIFwiZXhhXCIsIFwiemV0dGFcIiwgXCJ5b3R0YVwiXVxuXHR9LFxuXHQgICAgcm91bmRpbmdGdW5jcyA9IHtcblx0ICBmbG9vcjogTWF0aC5mbG9vcixcblx0ICBjZWlsOiBNYXRoLmNlaWxcblx0fTtcblx0LyoqXG5cdCAqIGZpbGVzaXplXG5cdCAqXG5cdCAqIEBtZXRob2QgZmlsZXNpemVcblx0ICogQHBhcmFtICB7TWl4ZWR9ICAgYXJnICAgICAgICBTdHJpbmcsIEludCBvciBGbG9hdCB0byB0cmFuc2Zvcm1cblx0ICogQHBhcmFtICB7T2JqZWN0fSAgZGVzY3JpcHRvciBbT3B0aW9uYWxdIEZsYWdzXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICAgUmVhZGFibGUgZmlsZSBzaXplIFN0cmluZ1xuXHQgKi9cblxuXHRmdW5jdGlvbiBmaWxlc2l6ZShhcmcpIHtcblx0ICB2YXIgZGVzY3JpcHRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cdCAgdmFyIHJlc3VsdCA9IFtdLFxuXHQgICAgICB2YWwgPSAwLFxuXHQgICAgICBlLFxuXHQgICAgICBiYXNlLFxuXHQgICAgICBiaXRzLFxuXHQgICAgICBjZWlsLFxuXHQgICAgICBmdWxsLFxuXHQgICAgICBmdWxsZm9ybXMsXG5cdCAgICAgIGxvY2FsZSxcblx0ICAgICAgbG9jYWxlT3B0aW9ucyxcblx0ICAgICAgbmVnLFxuXHQgICAgICBudW0sXG5cdCAgICAgIG91dHB1dCxcblx0ICAgICAgcGFkLFxuXHQgICAgICByb3VuZCxcblx0ICAgICAgdSxcblx0ICAgICAgdW5peCxcblx0ICAgICAgc2VwYXJhdG9yLFxuXHQgICAgICBzcGFjZXIsXG5cdCAgICAgIHN0YW5kYXJkLFxuXHQgICAgICBzeW1ib2xzLFxuXHQgICAgICByb3VuZGluZ0Z1bmMsXG5cdCAgICAgIHByZWNpc2lvbjtcblxuXHQgIGlmIChpc05hTihhcmcpKSB7XG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBudW1iZXJcIik7XG5cdCAgfVxuXG5cdCAgYml0cyA9IGRlc2NyaXB0b3IuYml0cyA9PT0gdHJ1ZTtcblx0ICB1bml4ID0gZGVzY3JpcHRvci51bml4ID09PSB0cnVlO1xuXHQgIHBhZCA9IGRlc2NyaXB0b3IucGFkID09PSB0cnVlO1xuXHQgIGJhc2UgPSBkZXNjcmlwdG9yLmJhc2UgfHwgMjtcblx0ICByb3VuZCA9IGRlc2NyaXB0b3Iucm91bmQgIT09IHZvaWQgMCA/IGRlc2NyaXB0b3Iucm91bmQgOiB1bml4ID8gMSA6IDI7XG5cdCAgbG9jYWxlID0gZGVzY3JpcHRvci5sb2NhbGUgIT09IHZvaWQgMCA/IGRlc2NyaXB0b3IubG9jYWxlIDogXCJcIjtcblx0ICBsb2NhbGVPcHRpb25zID0gZGVzY3JpcHRvci5sb2NhbGVPcHRpb25zIHx8IHt9O1xuXHQgIHNlcGFyYXRvciA9IGRlc2NyaXB0b3Iuc2VwYXJhdG9yICE9PSB2b2lkIDAgPyBkZXNjcmlwdG9yLnNlcGFyYXRvciA6IFwiXCI7XG5cdCAgc3BhY2VyID0gZGVzY3JpcHRvci5zcGFjZXIgIT09IHZvaWQgMCA/IGRlc2NyaXB0b3Iuc3BhY2VyIDogdW5peCA/IFwiXCIgOiBcIiBcIjtcblx0ICBzeW1ib2xzID0gZGVzY3JpcHRvci5zeW1ib2xzIHx8IHt9O1xuXHQgIHN0YW5kYXJkID0gYmFzZSA9PT0gMiA/IGRlc2NyaXB0b3Iuc3RhbmRhcmQgfHwgXCJqZWRlY1wiIDogXCJqZWRlY1wiO1xuXHQgIG91dHB1dCA9IGRlc2NyaXB0b3Iub3V0cHV0IHx8IFwic3RyaW5nXCI7XG5cdCAgZnVsbCA9IGRlc2NyaXB0b3IuZnVsbGZvcm0gPT09IHRydWU7XG5cdCAgZnVsbGZvcm1zID0gZGVzY3JpcHRvci5mdWxsZm9ybXMgaW5zdGFuY2VvZiBBcnJheSA/IGRlc2NyaXB0b3IuZnVsbGZvcm1zIDogW107XG5cdCAgZSA9IGRlc2NyaXB0b3IuZXhwb25lbnQgIT09IHZvaWQgMCA/IGRlc2NyaXB0b3IuZXhwb25lbnQgOiAtMTtcblx0ICByb3VuZGluZ0Z1bmMgPSByb3VuZGluZ0Z1bmNzW2Rlc2NyaXB0b3Iucm91bmRpbmdNZXRob2RdIHx8IE1hdGgucm91bmQ7XG5cdCAgbnVtID0gTnVtYmVyKGFyZyk7XG5cdCAgbmVnID0gbnVtIDwgMDtcblx0ICBjZWlsID0gYmFzZSA+IDIgPyAxMDAwIDogMTAyNDtcblx0ICBwcmVjaXNpb24gPSBpc05hTihkZXNjcmlwdG9yLnByZWNpc2lvbikgPT09IGZhbHNlID8gcGFyc2VJbnQoZGVzY3JpcHRvci5wcmVjaXNpb24sIDEwKSA6IDA7IC8vIEZsaXBwaW5nIGEgbmVnYXRpdmUgbnVtYmVyIHRvIGRldGVybWluZSB0aGUgc2l6ZVxuXG5cdCAgaWYgKG5lZykge1xuXHQgICAgbnVtID0gLW51bTtcblx0ICB9IC8vIERldGVybWluaW5nIHRoZSBleHBvbmVudFxuXG5cblx0ICBpZiAoZSA9PT0gLTEgfHwgaXNOYU4oZSkpIHtcblx0ICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKG51bSkgLyBNYXRoLmxvZyhjZWlsKSk7XG5cblx0ICAgIGlmIChlIDwgMCkge1xuXHQgICAgICBlID0gMDtcblx0ICAgIH1cblx0ICB9IC8vIEV4Y2VlZGluZyBzdXBwb3J0ZWQgbGVuZ3RoLCB0aW1lIHRvIHJlZHVjZSAmIG11bHRpcGx5XG5cblxuXHQgIGlmIChlID4gOCkge1xuXHQgICAgaWYgKHByZWNpc2lvbiA+IDApIHtcblx0ICAgICAgcHJlY2lzaW9uICs9IDggLSBlO1xuXHQgICAgfVxuXG5cdCAgICBlID0gODtcblx0ICB9XG5cblx0ICBpZiAob3V0cHV0ID09PSBcImV4cG9uZW50XCIpIHtcblx0ICAgIHJldHVybiBlO1xuXHQgIH0gLy8gWmVybyBpcyBub3cgYSBzcGVjaWFsIGNhc2UgYmVjYXVzZSBieXRlcyBkaXZpZGUgYnkgMVxuXG5cblx0ICBpZiAobnVtID09PSAwKSB7XG5cdCAgICByZXN1bHRbMF0gPSAwO1xuXHQgICAgdSA9IHJlc3VsdFsxXSA9IHVuaXggPyBcIlwiIDogc3ltYm9sW3N0YW5kYXJkXVtiaXRzID8gXCJiaXRzXCIgOiBcImJ5dGVzXCJdW2VdO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB2YWwgPSBudW0gLyAoYmFzZSA9PT0gMiA/IE1hdGgucG93KDIsIGUgKiAxMCkgOiBNYXRoLnBvdygxMDAwLCBlKSk7XG5cblx0ICAgIGlmIChiaXRzKSB7XG5cdCAgICAgIHZhbCA9IHZhbCAqIDg7XG5cblx0ICAgICAgaWYgKHZhbCA+PSBjZWlsICYmIGUgPCA4KSB7XG5cdCAgICAgICAgdmFsID0gdmFsIC8gY2VpbDtcblx0ICAgICAgICBlKys7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIHAgPSBNYXRoLnBvdygxMCwgZSA+IDAgPyByb3VuZCA6IDApO1xuXHQgICAgcmVzdWx0WzBdID0gcm91bmRpbmdGdW5jKHZhbCAqIHApIC8gcDtcblxuXHQgICAgaWYgKHJlc3VsdFswXSA9PT0gY2VpbCAmJiBlIDwgOCAmJiBkZXNjcmlwdG9yLmV4cG9uZW50ID09PSB2b2lkIDApIHtcblx0ICAgICAgcmVzdWx0WzBdID0gMTtcblx0ICAgICAgZSsrO1xuXHQgICAgfVxuXG5cdCAgICB1ID0gcmVzdWx0WzFdID0gYmFzZSA9PT0gMTAgJiYgZSA9PT0gMSA/IGJpdHMgPyBcImtiXCIgOiBcImtCXCIgOiBzeW1ib2xbc3RhbmRhcmRdW2JpdHMgPyBcImJpdHNcIiA6IFwiYnl0ZXNcIl1bZV07XG5cblx0ICAgIGlmICh1bml4KSB7XG5cdCAgICAgIHJlc3VsdFsxXSA9IHN0YW5kYXJkID09PSBcImplZGVjXCIgPyByZXN1bHRbMV0uY2hhckF0KDApIDogZSA+IDAgPyByZXN1bHRbMV0ucmVwbGFjZSgvQiQvLCBcIlwiKSA6IHJlc3VsdFsxXTtcblxuXHQgICAgICBpZiAoYi50ZXN0KHJlc3VsdFsxXSkpIHtcblx0ICAgICAgICByZXN1bHRbMF0gPSBNYXRoLmZsb29yKHJlc3VsdFswXSk7XG5cdCAgICAgICAgcmVzdWx0WzFdID0gXCJcIjtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0gLy8gRGVjb3JhdGluZyBhICdkaWZmJ1xuXG5cblx0ICBpZiAobmVnKSB7XG5cdCAgICByZXN1bHRbMF0gPSAtcmVzdWx0WzBdO1xuXHQgIH0gLy8gU2V0dGluZyBvcHRpb25hbCBwcmVjaXNpb25cblxuXG5cdCAgaWYgKHByZWNpc2lvbiA+IDApIHtcblx0ICAgIHJlc3VsdFswXSA9IHJlc3VsdFswXS50b1ByZWNpc2lvbihwcmVjaXNpb24pO1xuXHQgIH0gLy8gQXBwbHlpbmcgY3VzdG9tIHN5bWJvbFxuXG5cblx0ICByZXN1bHRbMV0gPSBzeW1ib2xzW3Jlc3VsdFsxXV0gfHwgcmVzdWx0WzFdO1xuXG5cdCAgaWYgKGxvY2FsZSA9PT0gdHJ1ZSkge1xuXHQgICAgcmVzdWx0WzBdID0gcmVzdWx0WzBdLnRvTG9jYWxlU3RyaW5nKCk7XG5cdCAgfSBlbHNlIGlmIChsb2NhbGUubGVuZ3RoID4gMCkge1xuXHQgICAgcmVzdWx0WzBdID0gcmVzdWx0WzBdLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgbG9jYWxlT3B0aW9ucyk7XG5cdCAgfSBlbHNlIGlmIChzZXBhcmF0b3IubGVuZ3RoID4gMCkge1xuXHQgICAgcmVzdWx0WzBdID0gcmVzdWx0WzBdLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgc2VwYXJhdG9yKTtcblx0ICB9XG5cblx0ICBpZiAocGFkICYmIE51bWJlci5pc0ludGVnZXIocmVzdWx0WzBdKSA9PT0gZmFsc2UgJiYgcm91bmQgPiAwKSB7XG5cdCAgICB2YXIgeCA9IHNlcGFyYXRvciB8fCBcIi5cIixcblx0ICAgICAgICB0bXAgPSByZXN1bHRbMF0udG9TdHJpbmcoKS5zcGxpdCh4KSxcblx0ICAgICAgICBzID0gdG1wWzFdIHx8IFwiXCIsXG5cdCAgICAgICAgbCA9IHMubGVuZ3RoLFxuXHQgICAgICAgIG4gPSByb3VuZCAtIGw7XG5cdCAgICByZXN1bHRbMF0gPSBcIlwiLmNvbmNhdCh0bXBbMF0pLmNvbmNhdCh4KS5jb25jYXQocy5wYWRFbmQobCArIG4sIFwiMFwiKSk7XG5cdCAgfVxuXG5cdCAgaWYgKGZ1bGwpIHtcblx0ICAgIHJlc3VsdFsxXSA9IGZ1bGxmb3Jtc1tlXSA/IGZ1bGxmb3Jtc1tlXSA6IGZ1bGxmb3JtW3N0YW5kYXJkXVtlXSArIChiaXRzID8gXCJiaXRcIiA6IFwiYnl0ZVwiKSArIChyZXN1bHRbMF0gPT09IDEgPyBcIlwiIDogXCJzXCIpO1xuXHQgIH0gLy8gUmV0dXJuaW5nIEFycmF5LCBPYmplY3QsIG9yIFN0cmluZyAoZGVmYXVsdClcblxuXG5cdCAgcmV0dXJuIG91dHB1dCA9PT0gXCJhcnJheVwiID8gcmVzdWx0IDogb3V0cHV0ID09PSBcIm9iamVjdFwiID8ge1xuXHQgICAgdmFsdWU6IHJlc3VsdFswXSxcblx0ICAgIHN5bWJvbDogcmVzdWx0WzFdLFxuXHQgICAgZXhwb25lbnQ6IGUsXG5cdCAgICB1bml0OiB1XG5cdCAgfSA6IHJlc3VsdC5qb2luKHNwYWNlcik7XG5cdH0gLy8gUGFydGlhbCBhcHBsaWNhdGlvbiBmb3IgZnVuY3Rpb25hbCBwcm9ncmFtbWluZ1xuXG5cblx0ZmlsZXNpemUucGFydGlhbCA9IGZ1bmN0aW9uIChvcHQpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuXHQgICAgcmV0dXJuIGZpbGVzaXplKGFyZywgb3B0KTtcblx0ICB9O1xuXHR9O1xuXG5cdHJldHVybiBmaWxlc2l6ZTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlc2l6ZS9saWIvZmlsZXNpemUuanNcbi8vIG1vZHVsZSBpZCA9IDM5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC50aHJvdHRsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvLyBlbXB0eSAobnVsbC1sb2FkZXIpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfZXZlbnRsaXN0ZW5lciA9IHJlcXVpcmUoJ2V2ZW50bGlzdGVuZXInKTtcblxudmFyIF9sb2Rhc2ggPSByZXF1aXJlKCdsb2Rhc2guZGVib3VuY2UnKTtcblxudmFyIF9sb2Rhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoKTtcblxudmFyIF9sb2Rhc2gzID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJyk7XG5cbnZhciBfbG9kYXNoNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaDMpO1xuXG52YXIgX3BhcmVudFNjcm9sbCA9IHJlcXVpcmUoJy4vdXRpbHMvcGFyZW50U2Nyb2xsJyk7XG5cbnZhciBfcGFyZW50U2Nyb2xsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmVudFNjcm9sbCk7XG5cbnZhciBfaW5WaWV3cG9ydCA9IHJlcXVpcmUoJy4vdXRpbHMvaW5WaWV3cG9ydCcpO1xuXG52YXIgX2luVmlld3BvcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5WaWV3cG9ydCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIExhenlMb2FkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExhenlMb2FkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMYXp5TG9hZChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXp5TG9hZCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGF6eUxvYWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMYXp5TG9hZCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLmxhenlMb2FkSGFuZGxlciA9IF90aGlzLmxhenlMb2FkSGFuZGxlci5iaW5kKF90aGlzKTtcblxuICAgIGlmIChwcm9wcy50aHJvdHRsZSA+IDApIHtcbiAgICAgIGlmIChwcm9wcy5kZWJvdW5jZSkge1xuICAgICAgICBfdGhpcy5sYXp5TG9hZEhhbmRsZXIgPSAoMCwgX2xvZGFzaDIuZGVmYXVsdCkoX3RoaXMubGF6eUxvYWRIYW5kbGVyLCBwcm9wcy50aHJvdHRsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5sYXp5TG9hZEhhbmRsZXIgPSAoMCwgX2xvZGFzaDQuZGVmYXVsdCkoX3RoaXMubGF6eUxvYWRIYW5kbGVyLCBwcm9wcy50aHJvdHRsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7IHZpc2libGU6IGZhbHNlIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExhenlMb2FkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9tb3VudGVkID0gdHJ1ZTtcbiAgICAgIHZhciBldmVudE5vZGUgPSB0aGlzLmdldEV2ZW50Tm9kZSgpO1xuXG4gICAgICB0aGlzLmxhenlMb2FkSGFuZGxlcigpO1xuXG4gICAgICBpZiAodGhpcy5sYXp5TG9hZEhhbmRsZXIuZmx1c2gpIHtcbiAgICAgICAgdGhpcy5sYXp5TG9hZEhhbmRsZXIuZmx1c2goKTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9ldmVudGxpc3RlbmVyLmFkZCkod2luZG93LCAncmVzaXplJywgdGhpcy5sYXp5TG9hZEhhbmRsZXIpO1xuICAgICAgKDAsIF9ldmVudGxpc3RlbmVyLmFkZCkoZXZlbnROb2RlLCAnc2Nyb2xsJywgdGhpcy5sYXp5TG9hZEhhbmRsZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5sYXp5TG9hZEhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoX25leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gbmV4dFN0YXRlLnZpc2libGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX21vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmxhenlMb2FkSGFuZGxlci5jYW5jZWwpIHtcbiAgICAgICAgdGhpcy5sYXp5TG9hZEhhbmRsZXIuY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGV0YWNoTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RXZlbnROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXZlbnROb2RlKCkge1xuICAgICAgcmV0dXJuICgwLCBfcGFyZW50U2Nyb2xsMi5kZWZhdWx0KSgoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T2Zmc2V0KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb2Zmc2V0ID0gX3Byb3BzLm9mZnNldCxcbiAgICAgICAgICBvZmZzZXRWZXJ0aWNhbCA9IF9wcm9wcy5vZmZzZXRWZXJ0aWNhbCxcbiAgICAgICAgICBvZmZzZXRIb3Jpem9udGFsID0gX3Byb3BzLm9mZnNldEhvcml6b250YWwsXG4gICAgICAgICAgb2Zmc2V0VG9wID0gX3Byb3BzLm9mZnNldFRvcCxcbiAgICAgICAgICBvZmZzZXRCb3R0b20gPSBfcHJvcHMub2Zmc2V0Qm90dG9tLFxuICAgICAgICAgIG9mZnNldExlZnQgPSBfcHJvcHMub2Zmc2V0TGVmdCxcbiAgICAgICAgICBvZmZzZXRSaWdodCA9IF9wcm9wcy5vZmZzZXRSaWdodCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBfcHJvcHMudGhyZXNob2xkO1xuXG5cbiAgICAgIHZhciBfb2Zmc2V0QWxsID0gdGhyZXNob2xkIHx8IG9mZnNldDtcbiAgICAgIHZhciBfb2Zmc2V0VmVydGljYWwgPSBvZmZzZXRWZXJ0aWNhbCB8fCBfb2Zmc2V0QWxsO1xuICAgICAgdmFyIF9vZmZzZXRIb3Jpem9udGFsID0gb2Zmc2V0SG9yaXpvbnRhbCB8fCBfb2Zmc2V0QWxsO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IG9mZnNldFRvcCB8fCBfb2Zmc2V0VmVydGljYWwsXG4gICAgICAgIGJvdHRvbTogb2Zmc2V0Qm90dG9tIHx8IF9vZmZzZXRWZXJ0aWNhbCxcbiAgICAgICAgbGVmdDogb2Zmc2V0TGVmdCB8fCBfb2Zmc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgcmlnaHQ6IG9mZnNldFJpZ2h0IHx8IF9vZmZzZXRIb3Jpem9udGFsXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xhenlMb2FkSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxhenlMb2FkSGFuZGxlcigpIHtcbiAgICAgIGlmICghdGhpcy5fbW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoKTtcbiAgICAgIHZhciBub2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcyk7XG4gICAgICB2YXIgZXZlbnROb2RlID0gdGhpcy5nZXRFdmVudE5vZGUoKTtcblxuICAgICAgaWYgKCgwLCBfaW5WaWV3cG9ydDIuZGVmYXVsdCkobm9kZSwgZXZlbnROb2RlLCBvZmZzZXQpKSB7XG4gICAgICAgIHZhciBvbkNvbnRlbnRWaXNpYmxlID0gdGhpcy5wcm9wcy5vbkNvbnRlbnRWaXNpYmxlO1xuXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IHRydWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvbkNvbnRlbnRWaXNpYmxlKSB7XG4gICAgICAgICAgICBvbkNvbnRlbnRWaXNpYmxlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZXRhY2hMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2hMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgZXZlbnROb2RlID0gdGhpcy5nZXRFdmVudE5vZGUoKTtcblxuICAgICAgKDAsIF9ldmVudGxpc3RlbmVyLnJlbW92ZSkod2luZG93LCAncmVzaXplJywgdGhpcy5sYXp5TG9hZEhhbmRsZXIpO1xuICAgICAgKDAsIF9ldmVudGxpc3RlbmVyLnJlbW92ZSkoZXZlbnROb2RlLCAnc2Nyb2xsJywgdGhpcy5sYXp5TG9hZEhhbmRsZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgaGVpZ2h0ID0gX3Byb3BzMi5oZWlnaHQsXG4gICAgICAgICAgd2lkdGggPSBfcHJvcHMyLndpZHRoO1xuICAgICAgdmFyIHZpc2libGUgPSB0aGlzLnN0YXRlLnZpc2libGU7XG5cblxuICAgICAgdmFyIGVsU3R5bGVzID0geyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoIH07XG4gICAgICB2YXIgZWxDbGFzc2VzID0gJ0xhenlMb2FkJyArICh2aXNpYmxlID8gJyBpcy12aXNpYmxlJyA6ICcnKSArIChjbGFzc05hbWUgPyAnICcgKyBjbGFzc05hbWUgOiAnJyk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmVsZW1lbnRUeXBlLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZWxDbGFzc2VzLFxuICAgICAgICBzdHlsZTogZWxTdHlsZXNcbiAgICAgIH0sIHZpc2libGUgJiYgX3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGF6eUxvYWQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMYXp5TG9hZDtcblxuXG5MYXp5TG9hZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZGVib3VuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZWxlbWVudFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgb2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0Qm90dG9tOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0SG9yaXpvbnRhbDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldExlZnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRSaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldFRvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldFZlcnRpY2FsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdGhyZXNob2xkOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdGhyb3R0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBvbkNvbnRlbnRWaXNpYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbkxhenlMb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZWxlbWVudFR5cGU6ICdkaXYnLFxuICBkZWJvdW5jZTogdHJ1ZSxcbiAgb2Zmc2V0OiAwLFxuICBvZmZzZXRCb3R0b206IDAsXG4gIG9mZnNldEhvcml6b250YWw6IDAsXG4gIG9mZnNldExlZnQ6IDAsXG4gIG9mZnNldFJpZ2h0OiAwLFxuICBvZmZzZXRUb3A6IDAsXG4gIG9mZnNldFZlcnRpY2FsOiAwLFxuICB0aHJvdHRsZTogMjUwXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvbGliL0xhenlMb2FkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RWxlbWVudFBvc2l0aW9uO1xuLypcbiogRmluZHMgZWxlbWVudCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB3aG9sZSBkb2N1bWVudCxcbiogcmF0aGVyIHRoYW4gdG8gdGhlIHZpZXdwb3J0IGFzIGl0IGlzIHRoZSBjYXNlIHdpdGggLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLlxuKi9cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvZ2V0RWxlbWVudFBvc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGluVmlld3BvcnQ7XG5cbnZhciBfZ2V0RWxlbWVudFBvc2l0aW9uID0gcmVxdWlyZSgnLi9nZXRFbGVtZW50UG9zaXRpb24nKTtcblxudmFyIF9nZXRFbGVtZW50UG9zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RWxlbWVudFBvc2l0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQgPT09IG51bGw7XG59O1xuXG5mdW5jdGlvbiBpblZpZXdwb3J0KGVsZW1lbnQsIGNvbnRhaW5lciwgY3VzdG9tT2Zmc2V0KSB7XG4gIGlmIChpc0hpZGRlbihlbGVtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0b3AgPSB2b2lkIDA7XG4gIHZhciBib3R0b20gPSB2b2lkIDA7XG4gIHZhciBsZWZ0ID0gdm9pZCAwO1xuICB2YXIgcmlnaHQgPSB2b2lkIDA7XG5cbiAgaWYgKHR5cGVvZiBjb250YWluZXIgPT09ICd1bmRlZmluZWQnIHx8IGNvbnRhaW5lciA9PT0gd2luZG93KSB7XG4gICAgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgYm90dG9tID0gdG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHJpZ2h0ID0gbGVmdCArIHdpbmRvdy5pbm5lcldpZHRoO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb250YWluZXJQb3NpdGlvbiA9ICgwLCBfZ2V0RWxlbWVudFBvc2l0aW9uMi5kZWZhdWx0KShjb250YWluZXIpO1xuXG4gICAgdG9wID0gY29udGFpbmVyUG9zaXRpb24udG9wO1xuICAgIGxlZnQgPSBjb250YWluZXJQb3NpdGlvbi5sZWZ0O1xuICAgIGJvdHRvbSA9IHRvcCArIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgcmlnaHQgPSBsZWZ0ICsgY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRQb3NpdGlvbiA9ICgwLCBfZ2V0RWxlbWVudFBvc2l0aW9uMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICByZXR1cm4gdG9wIDw9IGVsZW1lbnRQb3NpdGlvbi50b3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCArIGN1c3RvbU9mZnNldC50b3AgJiYgYm90dG9tID49IGVsZW1lbnRQb3NpdGlvbi50b3AgLSBjdXN0b21PZmZzZXQuYm90dG9tICYmIGxlZnQgPD0gZWxlbWVudFBvc2l0aW9uLmxlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoICsgY3VzdG9tT2Zmc2V0LmxlZnQgJiYgcmlnaHQgPj0gZWxlbWVudFBvc2l0aW9uLmxlZnQgLSBjdXN0b21PZmZzZXQucmlnaHQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvaW5WaWV3cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gNTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3R5bGUgPSBmdW5jdGlvbiBzdHlsZShlbGVtZW50LCBwcm9wKSB7XG4gIHJldHVybiB0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSAhPT0gJ3VuZGVmaW5lZCcgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCkgOiBlbGVtZW50LnN0eWxlW3Byb3BdO1xufTtcblxudmFyIG92ZXJmbG93ID0gZnVuY3Rpb24gb3ZlcmZsb3coZWxlbWVudCkge1xuICByZXR1cm4gc3R5bGUoZWxlbWVudCwgJ292ZXJmbG93JykgKyBzdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cteScpICsgc3R5bGUoZWxlbWVudCwgJ292ZXJmbG93LXgnKTtcbn07XG5cbnZhciBzY3JvbGxQYXJlbnQgPSBmdW5jdGlvbiBzY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHZhciBwYXJlbnQgPSBlbGVtZW50O1xuXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IHBhcmVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIXBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoLyhzY3JvbGx8YXV0bykvLnRlc3Qob3ZlcmZsb3cocGFyZW50KSkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gd2luZG93O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2Nyb2xsUGFyZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvbGliL3V0aWxzL3BhcmVudFNjcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gNTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDU0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbCA9IHJlcXVpcmUoJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCcpO1xuXG52YXIgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyogZXNsaW50IG5vLWRlYnVnZ2VyOiBcIndhcm5cIiAqL1xuXG5cbi8qKlxuICogUHJlZGVmaW5lZCBjb25zdGFudHNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBjb25zdGFudHMgPSB7XG4gIG9yaWVudGF0aW9uOiB7XG4gICAgaG9yaXpvbnRhbDoge1xuICAgICAgZGltZW5zaW9uOiAnd2lkdGgnLFxuICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICByZXZlcnNlRGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgY29vcmRpbmF0ZTogJ3gnXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgZGltZW5zaW9uOiAnaGVpZ2h0JyxcbiAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICByZXZlcnNlRGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgIGNvb3JkaW5hdGU6ICd5J1xuICAgIH1cbiAgfVxufTtcblxudmFyIFNsaWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbGlkZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNsaWRlcihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbGlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNsaWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNsaWRlcikpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZUZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGZvcm1hdCA9IF90aGlzLnByb3BzLmZvcm1hdDtcblxuICAgICAgcmV0dXJuIGZvcm1hdCA/IGZvcm1hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5zbGlkZXIpIHtcbiAgICAgICAgLy8gZm9yIHNoYWxsb3cgcmVuZGVyaW5nXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvcmllbnRhdGlvbiA9IF90aGlzLnByb3BzLm9yaWVudGF0aW9uO1xuXG4gICAgICB2YXIgZGltZW5zaW9uID0gKDAsIF91dGlscy5jYXBpdGFsaXplKShjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLmRpbWVuc2lvbik7XG4gICAgICB2YXIgc2xpZGVyUG9zID0gX3RoaXMuc2xpZGVyWydvZmZzZXQnICsgZGltZW5zaW9uXTtcbiAgICAgIHZhciBoYW5kbGVQb3MgPSBfdGhpcy5oYW5kbGVbJ29mZnNldCcgKyBkaW1lbnNpb25dO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpbWl0OiBzbGlkZXJQb3MgLSBoYW5kbGVQb3MsXG4gICAgICAgIGdyYWI6IGhhbmRsZVBvcyAvIDJcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DaGFuZ2VTdGFydCA9IF90aGlzLnByb3BzLm9uQ2hhbmdlU3RhcnQ7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLmhhbmRsZURyYWcpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLmhhbmRsZUVuZCk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkNoYW5nZVN0YXJ0ICYmIG9uQ2hhbmdlU3RhcnQoZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRHJhZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG4gICAgICB2YXIgX2UkdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2UkdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgICBjbGFzc0xpc3QgPSBfZSR0YXJnZXQuY2xhc3NMaXN0LFxuICAgICAgICAgIGRhdGFzZXQgPSBfZSR0YXJnZXQuZGF0YXNldDtcblxuICAgICAgaWYgKCFvbkNoYW5nZSB8fCBjbGFzc05hbWUgPT09ICdyYW5nZXNsaWRlcl9fbGFiZWxzJykgcmV0dXJuO1xuXG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5wb3NpdGlvbihlKTtcblxuICAgICAgaWYgKGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29udGFpbnMoJ3Jhbmdlc2xpZGVyX19sYWJlbC1pdGVtJykgJiYgZGF0YXNldC52YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQoZGF0YXNldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlLCBlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkNoYW5nZUNvbXBsZXRlID0gX3RoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQ2hhbmdlQ29tcGxldGUgJiYgb25DaGFuZ2VDb21wbGV0ZShlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMuaGFuZGxlRHJhZyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMuaGFuZGxlRW5kKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWUsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzLm1heCxcbiAgICAgICAgICBzdGVwID0gX3RoaXMkcHJvcHMuc3RlcCxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgICB2YXIgc2xpZGVyVmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIHNsaWRlclZhbHVlID0gdmFsdWUgKyBzdGVwID4gbWF4ID8gbWF4IDogdmFsdWUgKyBzdGVwO1xuICAgICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHNsaWRlclZhbHVlLCBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBzbGlkZXJWYWx1ZSA9IHZhbHVlIC0gc3RlcCA8IG1pbiA/IG1pbiA6IHZhbHVlIC0gc3RlcDtcbiAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShzbGlkZXJWYWx1ZSwgZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldFBvc2l0aW9uRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbGltaXQgPSBfdGhpcy5zdGF0ZS5saW1pdDtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczIubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzMi5tYXg7XG5cbiAgICAgIHZhciBkaWZmTWF4TWluID0gbWF4IC0gbWluO1xuICAgICAgdmFyIGRpZmZWYWxNaW4gPSB2YWx1ZSAtIG1pbjtcbiAgICAgIHZhciBwZXJjZW50YWdlID0gZGlmZlZhbE1pbiAvIGRpZmZNYXhNaW47XG4gICAgICB2YXIgcG9zID0gTWF0aC5yb3VuZChwZXJjZW50YWdlICogbGltaXQpO1xuXG4gICAgICByZXR1cm4gcG9zO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWYWx1ZUZyb21Qb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBsaW1pdCA9IF90aGlzLnN0YXRlLmxpbWl0O1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9yaWVudGF0aW9uID0gX3RoaXMkcHJvcHMzLm9yaWVudGF0aW9uLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzMy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMzLm1heCxcbiAgICAgICAgICBzdGVwID0gX3RoaXMkcHJvcHMzLnN0ZXA7XG5cbiAgICAgIHZhciBwZXJjZW50YWdlID0gKDAsIF91dGlscy5jbGFtcCkocG9zLCAwLCBsaW1pdCkgLyAobGltaXQgfHwgMSk7XG4gICAgICB2YXIgYmFzZVZhbCA9IHN0ZXAgKiBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgKiAobWF4IC0gbWluKSAvIHN0ZXApO1xuICAgICAgdmFyIHZhbHVlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGJhc2VWYWwgKyBtaW4gOiBtYXggLSBiYXNlVmFsO1xuXG4gICAgICByZXR1cm4gKDAsIF91dGlscy5jbGFtcCkodmFsdWUsIG1pbiwgbWF4KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9zaXRpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGdyYWIgPSBfdGhpcy5zdGF0ZS5ncmFiO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9yaWVudGF0aW9uID0gX3RoaXMkcHJvcHM0Lm9yaWVudGF0aW9uLFxuICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczQucmV2ZXJzZTtcblxuXG4gICAgICB2YXIgbm9kZSA9IF90aGlzLnNsaWRlcjtcbiAgICAgIHZhciBjb29yZGluYXRlU3R5bGUgPSBjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLmNvb3JkaW5hdGU7XG4gICAgICB2YXIgZGlyZWN0aW9uU3R5bGUgPSByZXZlcnNlID8gY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5yZXZlcnNlRGlyZWN0aW9uIDogY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5kaXJlY3Rpb247XG4gICAgICB2YXIgY2xpZW50Q29vcmRpbmF0ZVN0eWxlID0gJ2NsaWVudCcgKyAoMCwgX3V0aWxzLmNhcGl0YWxpemUpKGNvb3JkaW5hdGVTdHlsZSk7XG4gICAgICB2YXIgY29vcmRpbmF0ZSA9ICFlLnRvdWNoZXMgPyBlW2NsaWVudENvb3JkaW5hdGVTdHlsZV0gOiBlLnRvdWNoZXNbMF1bY2xpZW50Q29vcmRpbmF0ZVN0eWxlXTtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpcmVjdGlvblN0eWxlXTtcbiAgICAgIHZhciBwb3MgPSByZXZlcnNlID8gZGlyZWN0aW9uIC0gY29vcmRpbmF0ZSAtIGdyYWIgOiBjb29yZGluYXRlIC0gZGlyZWN0aW9uIC0gZ3JhYjtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmdldFZhbHVlRnJvbVBvc2l0aW9uKHBvcyk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBsaW1pdCA9IF90aGlzJHN0YXRlLmxpbWl0LFxuICAgICAgICAgIGdyYWIgPSBfdGhpcyRzdGF0ZS5ncmFiO1xuICAgICAgdmFyIG9yaWVudGF0aW9uID0gX3RoaXMucHJvcHMub3JpZW50YXRpb247XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmdldFZhbHVlRnJvbVBvc2l0aW9uKHBvcyk7XG4gICAgICB2YXIgcG9zaXRpb24gPSBfdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgaGFuZGxlUG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHBvc2l0aW9uICsgZ3JhYiA6IHBvc2l0aW9uO1xuICAgICAgdmFyIGZpbGxQb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gaGFuZGxlUG9zIDogbGltaXQgLSBoYW5kbGVQb3M7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbGw6IGZpbGxQb3MsXG4gICAgICAgIGhhbmRsZTogaGFuZGxlUG9zLFxuICAgICAgICBsYWJlbDogaGFuZGxlUG9zXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJMYWJlbHMgPSBmdW5jdGlvbiAobGFiZWxzKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihzbCkge1xuICAgICAgICAgICAgX3RoaXMubGFiZWxzID0gc2w7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Jhbmdlc2xpZGVyX19sYWJlbHMnKVxuICAgICAgICB9LFxuICAgICAgICBsYWJlbHNcbiAgICAgICk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGxpbWl0OiAwLFxuICAgICAgZ3JhYjogMFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNsaWRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5oYW5kbGVVcGRhdGUoKTtcbiAgICAgIHZhciByZXNpemVPYnNlcnZlciA9IG5ldyBfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbDIuZGVmYXVsdCh0aGlzLmhhbmRsZVVwZGF0ZSk7XG4gICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuc2xpZGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgbGFiZWwvdG9vbHRpcCB2YWx1ZVxuICAgICAqIEBwYXJhbSAge051bWJlcn0gLSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge0Zvcm1hdHRlZCBOdW1iZXJ9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzbGlkZXIgc3RhdGUgb24gY2hhbmdlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBtb3VzZW1vdmUvbW91c2V1cCBldmVudHNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgZHJhZy9tb3VzZW1vdmUgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgLSBFdmVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG1vdXNlbW92ZS9tb3VzZXVwIGV2ZW50c1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgZm9yIGtleSBldmVudHMgb24gdGhlIHNsaWRlciBoYW5kbGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgLSBFdmVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gb2Ygc2xpZGVyIGJhc2VkIG9uIGl0cyB2YWx1ZVxuICAgICAqIEBwYXJhbSAge251bWJlcn0gdmFsdWUgLSBDdXJyZW50IHZhbHVlIG9mIHNsaWRlclxuICAgICAqIEByZXR1cm4ge3Bvc2l0aW9ufSBwb3MgLSBDYWxjdWxhdGVkIHBvc2l0aW9uIG9mIHNsaWRlciBiYXNlZCBvbiB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGUgcG9zaXRpb24gb2Ygc2xpZGVyIHRvIHNsaWRlciB2YWx1ZVxuICAgICAqIEBwYXJhbSAge251bWJlcn0gcG9zIC0gQ3VycmVudCBwb3NpdGlvbi9jb29yZGluYXRlcyBvZiBzbGlkZXJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHZhbHVlIC0gU2xpZGVyIHZhbHVlXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwb3NpdGlvbiBvZiBzbGlkZXIgYmFzZWQgb24gdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGUgLSBFdmVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHZhbHVlIC0gU2xpZGVyIHZhbHVlXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIEdyYWIgY29vcmRpbmF0ZXMgb2Ygc2xpZGVyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBwb3MgLSBQb3NpdGlvbiBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gU2xpZGVyIGZpbGwvaGFuZGxlIGNvb3JkaW5hdGVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IF9wcm9wcy5vcmllbnRhdGlvbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHRvb2x0aXAgPSBfcHJvcHMudG9vbHRpcCxcbiAgICAgICAgICByZXZlcnNlID0gX3Byb3BzLnJldmVyc2UsXG4gICAgICAgICAgbGFiZWxzID0gX3Byb3BzLmxhYmVscyxcbiAgICAgICAgICBtaW4gPSBfcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF9wcm9wcy5tYXgsXG4gICAgICAgICAgaGFuZGxlTGFiZWwgPSBfcHJvcHMuaGFuZGxlTGFiZWw7XG4gICAgICB2YXIgYWN0aXZlID0gdGhpcy5zdGF0ZS5hY3RpdmU7XG5cbiAgICAgIHZhciBkaW1lbnNpb24gPSBjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLmRpbWVuc2lvbjtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSByZXZlcnNlID8gY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5yZXZlcnNlRGlyZWN0aW9uIDogY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5kaXJlY3Rpb247XG4gICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uRnJvbVZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciBjb29yZHMgPSB0aGlzLmNvb3JkaW5hdGVzKHBvc2l0aW9uKTtcbiAgICAgIHZhciBmaWxsU3R5bGUgPSBfZGVmaW5lUHJvcGVydHkoe30sIGRpbWVuc2lvbiwgY29vcmRzLmZpbGwgKyAncHgnKTtcbiAgICAgIHZhciBoYW5kbGVTdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCBjb29yZHMuaGFuZGxlICsgJ3B4Jyk7XG4gICAgICB2YXIgc2hvd1Rvb2x0aXAgPSB0b29sdGlwICYmIGFjdGl2ZTtcblxuICAgICAgdmFyIGxhYmVsSXRlbXMgPSBbXTtcbiAgICAgIHZhciBsYWJlbEtleXMgPSBPYmplY3Qua2V5cyhsYWJlbHMpO1xuXG4gICAgICBpZiAobGFiZWxLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGFiZWxLZXlzID0gbGFiZWxLZXlzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IGEgLSBiIDogYiAtIGE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGxhYmVsS2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGxhYmVsUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uRnJvbVZhbHVlKGtleSk7XG4gICAgICAgICAgICB2YXIgbGFiZWxDb29yZHMgPSB0aGlzLmNvb3JkaW5hdGVzKGxhYmVsUG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIGxhYmVsU3R5bGUgPSBfZGVmaW5lUHJvcGVydHkoe30sIGRpcmVjdGlvbiwgbGFiZWxDb29yZHMubGFiZWwgKyAncHgnKTtcblxuICAgICAgICAgICAgbGFiZWxJdGVtcy5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdyYW5nZXNsaWRlcl9fbGFiZWwtaXRlbScpLFxuICAgICAgICAgICAgICAgICdkYXRhLXZhbHVlJzoga2V5LFxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZURyYWcsXG4gICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVN0YXJ0LFxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlRW5kLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBsYWJlbFN0eWxlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiZWxzW2tleV1cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHMpIHtcbiAgICAgICAgICAgIF90aGlzMi5zbGlkZXIgPSBzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdyYW5nZXNsaWRlcicsICdyYW5nZXNsaWRlci0nICsgb3JpZW50YXRpb24sIHsgJ3Jhbmdlc2xpZGVyLXJldmVyc2UnOiByZXZlcnNlIH0sIGNsYXNzTmFtZSksXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlRHJhZyxcbiAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlRW5kLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVTdGFydCxcbiAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgICAnYXJpYS12YWx1ZW1pbic6IG1pbixcbiAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6IG1heCxcbiAgICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICAgICAgICdhcmlhLW9yaWVudGF0aW9uJzogb3JpZW50YXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAncmFuZ2VzbGlkZXJfX2ZpbGwnLCBzdHlsZTogZmlsbFN0eWxlIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihzaCkge1xuICAgICAgICAgICAgICBfdGhpczIuaGFuZGxlID0gc2g7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmFuZ2VzbGlkZXJfX2hhbmRsZScsXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVTdGFydCxcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZURyYWcsXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgc3R5bGU6IGhhbmRsZVN0eWxlLFxuICAgICAgICAgICAgdGFiSW5kZXg6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dUb29sdGlwID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoc3QpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIudG9vbHRpcCA9IHN0O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdyYW5nZXNsaWRlcl9faGFuZGxlLXRvb2x0aXAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVGb3JtYXQodmFsdWUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncmFuZ2VzbGlkZXJfX2hhbmRsZS1sYWJlbCcgfSxcbiAgICAgICAgICAgIGhhbmRsZUxhYmVsXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBsYWJlbHMgPyB0aGlzLnJlbmRlckxhYmVscyhsYWJlbEl0ZW1zKSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNsaWRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNsaWRlci5wcm9wVHlwZXMgPSB7XG4gIG1pbjogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1heDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0ZXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9yaWVudGF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdG9vbHRpcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICByZXZlcnNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGxhYmVsczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGhhbmRsZUxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZm9ybWF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGFuZ2VDb21wbGV0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDEwMCxcbiAgc3RlcDogMSxcbiAgdmFsdWU6IDAsXG4gIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIHRvb2x0aXA6IHRydWUsXG4gIHJldmVyc2U6IGZhbHNlLFxuICBsYWJlbHM6IHt9LFxuICBoYW5kbGVMYWJlbDogJydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTbGlkZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9SYW5nZXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUmFuZ2VzbGlkZXIgPSByZXF1aXJlKCcuL1Jhbmdlc2xpZGVyJyk7XG5cbnZhciBfUmFuZ2VzbGlkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFuZ2VzbGlkZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUmFuZ2VzbGlkZXIyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5leHBvcnRzLmNsYW1wID0gY2xhbXA7XG4vKipcbiAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIHN0cmluZ1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gLSBTdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBTdHJpbmcgd2l0aCBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWRcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSk7XG59XG5cbi8qKlxuICogQ2xhbXAgcG9zaXRpb24gYmV0d2VlbiBhIHJhbmdlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IC0gVmFsdWUgdG8gYmUgY2xhbXBlZFxuICogQHBhcmFtICB7bnVtYmVyfSAtIE1pbmltdW0gdmFsdWUgaW4gcmFuZ2VcbiAqIEBwYXJhbSAge251bWJlcn0gLSBNYXhpbXVtIHZhbHVlIGluIHJhbmdlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ2xhbXBlZCB2YWx1ZVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDU1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsLlJlc2l6ZU9ic2VydmVyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXHJcbiAgICAgKiBBIGNvbGxlY3Rpb24gb2Ygc2hpbXMgdGhhdCBwcm92aWRlIG1pbmltYWwgZnVuY3Rpb25hbGl0eSBvZiB0aGUgRVM2IGNvbGxlY3Rpb25zLlxyXG4gICAgICpcclxuICAgICAqIFRoZXNlIGltcGxlbWVudGF0aW9ucyBhcmUgbm90IG1lYW50IHRvIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJcclxuICAgICAqIG1vZHVsZXMgYXMgdGhleSBjb3ZlciBvbmx5IGEgbGltaXRlZCByYW5nZSBvZiB1c2UgY2FzZXMuXHJcbiAgICAgKi9cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MsIHZhbGlkLWpzZG9jICovXHJcbiAgICB2YXIgTWFwU2hpbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgaW5kZXggaW4gcHJvdmlkZWQgYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQga2V5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRJbmRleChhcnIsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgICAgICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeVswXSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fX2VudHJpZXNfX1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfX1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18ucHVzaChba2V5LCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleChlbnRyaWVzLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhfmdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdHggPT09IHZvaWQgMCkgeyBjdHggPSBudWxsOyB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fX2VudHJpZXNfXzsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVudHJ5WzFdLCBlbnRyeVswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICB9KSgpO1xuXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlY3RzIHdoZXRoZXIgd2luZG93IGFuZCBkb2N1bWVudCBvYmplY3RzIGFyZSBhdmFpbGFibGUgaW4gY3VycmVudCBlbnZpcm9ubWVudC5cclxuICAgICAqL1xyXG4gICAgdmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID09PSBkb2N1bWVudDtcblxuICAgIC8vIFJldHVybnMgZ2xvYmFsIG9iamVjdCBvZiBhIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAgICB2YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xyXG4gICAgICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xyXG4gICAgfSkoKTtcblxuICAgIC8qKlxyXG4gICAgICogQSBzaGltIGZvciB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdoaWNoIGZhbGxzIGJhY2sgdG8gdGhlIHNldFRpbWVvdXQgaWZcclxuICAgICAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFJlcXVlc3RzJyBpZGVudGlmaWVyLlxyXG4gICAgICovXHJcbiAgICB2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAgICAgLy8gYW4gXCJJbnZhbGlkIGNhbGxpbmcgb2JqZWN0XCIgZXJyb3IgaWYgckFGIGlzIGludm9rZWQgd2l0aG91dCB0aGUgZ2xvYmFsXHJcbiAgICAgICAgICAgIC8vIG9iamVjdCBvbiB0aGUgbGVmdCBoYW5kIHNpZGUuXHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2soRGF0ZS5ub3coKSk7IH0sIDEwMDAgLyA2MCk7IH07XHJcbiAgICB9KSgpO1xuXG4gICAgLy8gRGVmaW5lcyBtaW5pbXVtIHRpbWVvdXQgYmVmb3JlIGFkZGluZyBhIHRyYWlsaW5nIGNhbGwuXHJcbiAgICB2YXIgdHJhaWxpbmdUaW1lb3V0ID0gMjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggZW5zdXJlcyB0aGF0IHByb3ZpZGVkIGNhbGxiYWNrIHdpbGwgYmVcclxuICAgICAqIGludm9rZWQgb25seSBvbmNlIGR1cmluZyB0aGUgc3BlY2lmaWVkIGRlbGF5IHBlcmlvZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGRlbGF5IHBlcmlvZC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGFmdGVyIHdoaWNoIHRvIGludm9rZSBjYWxsYmFjay5cclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGhyb3R0bGUgKGNhbGxiYWNrLCBkZWxheSkge1xyXG4gICAgICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBhbmQgc2NoZWR1bGVzIG5ldyBpbnZvY2F0aW9uIGlmXHJcbiAgICAgICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlUGVuZGluZygpIHtcclxuICAgICAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwcm94eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheS4gSXQgd2lsbCBmdXJ0aGVyIHBvc3Rwb25lXHJcbiAgICAgICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAgICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0aW1lb3V0Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcHJveHkoKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlamVjdCBpbW1lZGlhdGVseSBmb2xsb3dpbmcgY2FsbHMuXHJcbiAgICAgICAgICAgICAgICBpZiAodGltZVN0YW1wIC0gbGFzdENhbGxUaW1lIDwgdHJhaWxpbmdUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gU2NoZWR1bGUgbmV3IGNhbGwgdG8gYmUgaW4gaW52b2tlZCB3aGVuIHRoZSBwZW5kaW5nIG9uZSBpcyByZXNvbHZlZC5cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHNvIHRoZXJlIGlzIGEgY2hhbmNlIHRoYXQgd2UgbWlnaHQgbWlzcyBvbmUgaWYgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICAvLyBoYXBwZW5zIGFtaWRzIHRoZSBwZW5kaW5nIGludm9jYXRpb24uXHJcbiAgICAgICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgZGVsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RDYWxsVGltZSA9IHRpbWVTdGFtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3h5O1xyXG4gICAgfVxuXG4gICAgLy8gTWluaW11bSBkZWxheSBiZWZvcmUgaW52b2tpbmcgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuXHJcbiAgICB2YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4gICAgLy8gQSBsaXN0IG9mIHN1YnN0cmluZ3Mgb2YgQ1NTIHByb3BlcnRpZXMgdXNlZCB0byBmaW5kIHRyYW5zaXRpb24gZXZlbnRzIHRoYXRcclxuICAgIC8vIG1pZ2h0IGFmZmVjdCBkaW1lbnNpb25zIG9mIG9ic2VydmVkIGVsZW1lbnRzLlxyXG4gICAgdmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbiAgICAvLyBDaGVjayBpZiBNdXRhdGlvbk9ic2VydmVyIGlzIGF2YWlsYWJsZS5cclxuICAgIHZhciBtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkID0gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaW5nbGV0b24gY29udHJvbGxlciBjbGFzcyB3aGljaCBoYW5kbGVzIHVwZGF0ZXMgb2YgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gICAgICovXHJcbiAgICB2YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBET00gbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRlbGxzIHRoYXQgY29udHJvbGxlciBoYXMgc3Vic2NyaWJlZCBmb3IgTXV0YXRpb24gRXZlbnRzLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEtlZXBzIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgTXV0YXRpb25PYnNlcnZlci5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge011dGF0aW9uT2JzZXJ2ZXJ9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIGxpc3Qgb2YgY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmVyU1BJPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZF8gPSB0aGlzLm9uVHJhbnNpdGlvbkVuZF8uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoID0gdGhyb3R0bGUodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIFJFRlJFU0hfREVMQVkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIG9ic2VydmVyIHRvIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSBhZGRlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghfnRoaXMub2JzZXJ2ZXJzXy5pbmRleE9mKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFkZCBsaXN0ZW5lcnMgaWYgdGhleSBoYXZlbid0IGJlZW4gYWRkZWQgeWV0LlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0XygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmVzIG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvYnNlcnZlciBpZiBpdCdzIHByZXNlbnQgaW4gcmVnaXN0cnkuXHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgaWYgY29udHJvbGxlciBoYXMgbm8gY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0XygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VzIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLiBJdCB3aWxsIGNvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpbnNvZmFyXHJcbiAgICAgICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlc0RldGVjdGVkID0gdGhpcy51cGRhdGVPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgICAgICAvLyBiZSBmdXR1cmUgb25lcyBjYXVzZWQgYnkgQ1NTIHRyYW5zaXRpb25zLlxyXG4gICAgICAgICAgICBpZiAoY2hhbmdlc0RldGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyBldmVyeSBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0IGFuZCBub3RpZmllcyB0aGVtIG9mIHF1ZXVlZFxyXG4gICAgICAgICAqIGVudHJpZXMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIFwidHJ1ZVwiIGlmIGFueSBvYnNlcnZlciBoYXMgZGV0ZWN0ZWQgY2hhbmdlcyBpblxyXG4gICAgICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlT2JzZXJ2ZXJzXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVPYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc18uZmlsdGVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmdhdGhlckFjdGl2ZSgpLCBvYnNlcnZlci5oYXNBY3RpdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIERlbGl2ZXIgbm90aWZpY2F0aW9ucyBpbiBhIHNlcGFyYXRlIGN5Y2xlIGluIG9yZGVyIHRvIGF2b2lkIGFueVxyXG4gICAgICAgICAgICAvLyBjb2xsaXNpb25zIGJldHdlZW4gb2JzZXJ2ZXJzLCBlLmcuIHdoZW4gbXVsdGlwbGUgaW5zdGFuY2VzIG9mXHJcbiAgICAgICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgICAgIC8vIG9mIHRoZW0gY2hhbmdlcyBjb250ZW50IGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIHRhcmdldC4gU29tZXRpbWVzXHJcbiAgICAgICAgICAgIC8vIHRoaXMgbWF5IHJlc3VsdCBpbiBub3RpZmljYXRpb25zIGJlaW5nIGJsb2NrZWQgZm9yIHRoZSByZXN0IG9mIG9ic2VydmVycy5cclxuICAgICAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVPYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluaXRpYWxpemVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSBhZGRlZC5cclxuICAgICAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAgICAgLy8gZGVsYXllZCB0cmFuc2l0aW9ucy4gVGhpcyB3YXkgaXQncyBwb3NzaWJsZSB0byBjYXB0dXJlIGF0IGxlYXN0IHRoZVxyXG4gICAgICAgICAgICAvLyBmaW5hbCBzdGF0ZSBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5vYnNlcnZlKGRvY3VtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgcmVtb3ZlZC5cclxuICAgICAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8pIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9hLnByb3BlcnR5TmFtZSwgcHJvcGVydHlOYW1lID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XHJcbiAgICAgICAgICAgIC8vIERldGVjdCB3aGV0aGVyIHRyYW5zaXRpb24gbWF5IGFmZmVjdCBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISF+cHJvcGVydHlOYW1lLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyBpbnN0YW5jZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnN0YW5jZV8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VfID0gbmV3IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXztcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhvbGRzIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlcidzIGluc3RhbmNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuaW5zdGFuY2VfID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG4gICAgfSgpKTtcblxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBPYmplY3QgZm9yIHdoaWNoIHRvIGRlZmluZSBwcm9wZXJ0aWVzLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGFyZ2V0IG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgdmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzW2tleV0sXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH0pO1xuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBnbG9iYWwgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxyXG4gICAgICAgIC8vIGhhcyB0aGUgXCJvd25lckRvY3VtZW50XCIgcHJvcGVydHkgZnJvbSB3aGljaCB3ZSBjYW4gcmV0cmlldmUgYVxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgICAgICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBsb2NhbCBnbG9iYWwgb2JqZWN0IGlmIGl0J3Mgbm90IHBvc3NpYmxlIGV4dHJhY3Qgb25lIGZyb21cclxuICAgICAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICAgIHJldHVybiBvd25lckdsb2JhbCB8fCBnbG9iYWwkMTtcclxuICAgIH0pO1xuXG4gICAgLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICB2YXIgZW1wdHlSZWN0ID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gICAgICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb25zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zaXRpb25zLnJlZHVjZShmdW5jdGlvbiAoc2l6ZSwgcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgICAgICByZXR1cm4gc2l6ZSArIHRvRmxvYXQodmFsdWUpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0cyBwYWRkaW5ncyBzaXplcyBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gICAgICogQHJldHVybnMge09iamVjdH0gUGFkZGluZ3MgYm94LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRQYWRkaW5ncyhzdHlsZXMpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb25zID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuICAgICAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHBvc2l0aW9uc18xID0gcG9zaXRpb25zOyBfaSA8IHBvc2l0aW9uc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgICAgICBwYWRkaW5nc1twb3NpdGlvbl0gPSB0b0Zsb2F0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZGRpbmdzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U1ZHR3JhcGhpY3NFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzXHJcbiAgICAgKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgICAgIHZhciBiYm94ID0gdGFyZ2V0LmdldEJCb3goKTtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQoMCwgMCwgYmJveC53aWR0aCwgYmJveC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIEhUTUxFbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gQ2xpZW50IHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgY2FuJ3QgYmVcclxuICAgICAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgICAgICB2YXIgY2xpZW50V2lkdGggPSB0YXJnZXQuY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgLy8gQnkgdGhpcyBjb25kaXRpb24gd2UgY2FuIGNhdGNoIGFsbCBub24tcmVwbGFjZWQgaW5saW5lLCBoaWRkZW4gYW5kXHJcbiAgICAgICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgICAgIC8vIHRoYW4gMC41IHdpbGwgYmUgZGlzY2FyZGVkIGFzIHdlbGwuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgICAgICAvLyB0aG9zZSBjYXNlcyBhbmQgaXQncyBub3QgcG9zc2libGUgdG8gcGVyZm9ybSBhIHByZWNpc2UgYW5kIHBlcmZvcm1hbmNlXHJcbiAgICAgICAgLy8gZWZmZWN0aXZlIHRlc3QgZm9yIGhpZGRlbiBlbGVtZW50cy4gRS5nLiBldmVuIGpRdWVyeSdzICc6dmlzaWJsZScgZmlsdGVyXHJcbiAgICAgICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgICAgIGlmICghY2xpZW50V2lkdGggJiYgIWNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3R5bGVzID0gZ2V0V2luZG93T2YodGFyZ2V0KS5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XHJcbiAgICAgICAgdmFyIHBhZGRpbmdzID0gZ2V0UGFkZGluZ3Moc3R5bGVzKTtcclxuICAgICAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICAgICAgdmFyIHZlcnRQYWQgPSBwYWRkaW5ncy50b3AgKyBwYWRkaW5ncy5ib3R0b207XHJcbiAgICAgICAgLy8gQ29tcHV0ZWQgc3R5bGVzIG9mIHdpZHRoICYgaGVpZ2h0IGFyZSBiZWluZyB1c2VkIGJlY2F1c2UgdGhleSBhcmUgdGhlXHJcbiAgICAgICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgICAgIC8vIGJlIHBvc3NpYmxlIHRvIHV0aWxpemUgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpZiBvbmx5IGl0J3MgZGF0YSB3YXNuJ3RcclxuICAgICAgICAvLyBhZmZlY3RlZCBieSBDU1MgdHJhbnNmb3JtYXRpb25zIGxldCBhbG9uZSBwYWRkaW5ncywgYm9yZGVycyBhbmQgc2Nyb2xsIGJhcnMuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIFdpZHRoICYgaGVpZ2h0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgd2hlbiB0aGUgJ2JvcmRlci1ib3gnIGJveFxyXG4gICAgICAgIC8vIG1vZGVsIGlzIGFwcGxpZWQgKGV4Y2VwdCBmb3IgSUUpLlxyXG4gICAgICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAgICAgLy8gRm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIHJlcXVpcmVkIHRvIGhhbmRsZSBJbnRlcm5ldCBFeHBsb3JlciB3aGljaFxyXG4gICAgICAgICAgICAvLyBkb2Vzbid0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgdG8gY29tcHV0ZWQgQ1NTIGRpbWVuc2lvbnMuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFdlIGNhbiBzYXkgdGhhdCBpZiBDU1MgZGltZW5zaW9ucyArIHBhZGRpbmdzIGFyZSBlcXVhbCB0byB0aGUgXCJjbGllbnRcIlxyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIHRoZW4gaXQncyBlaXRoZXIgSUUsIGFuZCB0aHVzIHdlIGRvbid0IG5lZWQgdG8gc3VidHJhY3RcclxuICAgICAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgIT09IGNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICdsZWZ0JywgJ3JpZ2h0JykgKyBob3JpelBhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAhPT0gY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAndG9wJywgJ2JvdHRvbScpICsgdmVydFBhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGb2xsb3dpbmcgc3RlcHMgY2FuJ3QgYmUgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQncyByb290IGVsZW1lbnQgYXMgaXRzXHJcbiAgICAgICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgICAgIC8vIEJlc2lkZXMsIGl0J3MgYXMgd2VsbCBub3QgbmVjZXNzYXJ5IGFzIHRoZSA8aHRtbD4gaXRzZWxmIG5laXRoZXIgaGFzXHJcbiAgICAgICAgLy8gcmVuZGVyZWQgc2Nyb2xsIGJhcnMgbm9yIGl0IGNhbiBiZSBjbGlwcGVkLlxyXG4gICAgICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChvbmx5IGluIEZpcmVmb3gsIGFjdHVhbGx5KSBDU1Mgd2lkdGggJiBoZWlnaHRcclxuICAgICAgICAgICAgLy8gaW5jbHVkZSBzY3JvbGwgYmFycyBzaXplIHdoaWNoIGNhbiBiZSByZW1vdmVkIGF0IHRoaXMgc3RlcCBhcyBzY3JvbGxcclxuICAgICAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgICAgIC8vIGFuZCBcImNsaWVudFwiIHByb3BlcnRpZXMsIHRob3VnaCB0aGF0IGlzIG5vdCBhbHdheXMgdHJ1ZSBpbiBDaHJvbWUuXHJcbiAgICAgICAgICAgIHZhciB2ZXJ0U2Nyb2xsYmFyID0gTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAtIGNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBDaHJvbWUgaGFzIGEgcmF0aGVyIHdlaXJkIHJvdW5kaW5nIG9mIFwiY2xpZW50XCIgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgLy8gRS5nLiBmb3IgYW4gZWxlbWVudCB3aXRoIGNvbnRlbnQgd2lkdGggb2YgMzE0LjJweCBpdCBzb21ldGltZXMgZ2l2ZXNcclxuICAgICAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgICAgIC8vIDMxNHB4LiBBbmQgaXQgZG9lc24ndCBoYXBwZW4gYWxsIHRoZSB0aW1lLiBTbyBqdXN0IGlnbm9yZSB0aGlzIGRlbHRhXHJcbiAgICAgICAgICAgIC8vIGFzIGEgbm9uLXJlbGV2YW50LlxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIC09IHZlcnRTY3JvbGxiYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IGhvcml6U2Nyb2xsYmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdChwYWRkaW5ncy5sZWZ0LCBwYWRkaW5ncy50b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBTVkdHcmFwaGljc0VsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTb21lIGJyb3dzZXJzLCBuYW1lbHkgSUUgYW5kIEVkZ2UsIGRvbid0IGhhdmUgdGhlIFNWR0dyYXBoaWNzRWxlbWVudFxyXG4gICAgICAgIC8vIGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHR3JhcGhpY3NFbGVtZW50OyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgICAgICAvLyBTVkdFbGVtZW50IGFuZCB0aGF0IGl0IGhhcyB0aGUgXCJnZXRCQm94XCIgbWV0aG9kLlxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1wYXJlbnNcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdGFyZ2V0LmdldEJCb3ggPT09ICdmdW5jdGlvbicpOyB9O1xyXG4gICAgfSkoKTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGRvY3VtZW50IGVsZW1lbnQgKDxodG1sPikuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gZ2V0V2luZG93T2YodGFyZ2V0KS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgYW4gYXBwcm9wcmlhdGUgY29udGVudCByZWN0YW5nbGUgZm9yIHByb3ZpZGVkIGh0bWwgb3Igc3ZnIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgICAgIGlmICghaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NWR0dyYXBoaWNzRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHJlY3RhbmdsZSB3aXRoIGFuIGludGVyZmFjZSBvZiB0aGUgRE9NUmVjdFJlYWRPbmx5LlxyXG4gICAgICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RvbXJlY3RyZWFkb25seVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gT2JqZWN0IHdpdGggcmVjdGFuZ2xlJ3MgeC95IGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RSZWFkT25seX1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVhZE9ubHlSZWN0KF9hKSB7XHJcbiAgICAgICAgdmFyIHggPSBfYS54LCB5ID0gX2EueSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgICAgIHZhciBDb25zdHIgPSB0eXBlb2YgRE9NUmVjdFJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJyA/IERPTVJlY3RSZWFkT25seSA6IE9iamVjdDtcclxuICAgICAgICB2YXIgcmVjdCA9IE9iamVjdC5jcmVhdGUoQ29uc3RyLnByb3RvdHlwZSk7XHJcbiAgICAgICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgICAgICBkZWZpbmVDb25maWd1cmFibGUocmVjdCwge1xyXG4gICAgICAgICAgICB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgICAgIHJpZ2h0OiB4ICsgd2lkdGgsXHJcbiAgICAgICAgICAgIGJvdHRvbTogaGVpZ2h0ICsgeSxcclxuICAgICAgICAgICAgbGVmdDogeFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIERPTVJlY3RJbml0IG9iamVjdCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgZGltZW5zaW9ucyBhbmQgdGhlIHgveSBjb29yZGluYXRlcy5cclxuICAgICAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBYIGNvb3JkaW5hdGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFJlY3RhbmdsZSdzIHdpZHRoLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFJlY3RhbmdsZSdzIGhlaWdodC5cclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVjdEluaXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gICAgICogcHJvdmlkZWQgRE9NIGVsZW1lbnQgYW5kIGZvciBrZWVwaW5nIHRyYWNrIG9mIGl0J3MgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgdmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2YXRpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBCcm9hZGNhc3RlZCB3aWR0aCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQnJvYWRjYXN0ZWQgaGVpZ2h0IG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7RE9NUmVjdEluaXR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyBjb250ZW50IHJlY3RhbmdsZSBhbmQgdGVsbHMgd2hldGhlciBpdCdzIHdpZHRoIG9yIGhlaWdodCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICogaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGJyb2FkY2FzdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBnZXRDb250ZW50UmVjdCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gcmVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgICAgICByZWN0LmhlaWdodCAhPT0gdGhpcy5icm9hZGNhc3RIZWlnaHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyAnYnJvYWRjYXN0V2lkdGgnIGFuZCAnYnJvYWRjYXN0SGVpZ2h0JyBwcm9wZXJ0aWVzIHdpdGggYSBkYXRhXHJcbiAgICAgICAgICogZnJvbSB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzIG9mIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fSBMYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY29udGVudFJlY3RfO1xyXG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbiAgICB9KCkpO1xuXG4gICAgdmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckVudHJ5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBEYXRhIG9mIHRoZSBlbGVtZW50J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50UmVjdCA9IGNyZWF0ZVJlYWRPbmx5UmVjdChyZWN0SW5pdCk7XHJcbiAgICAgICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlXHJcbiAgICAgICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBQcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIG5vdCBiZWluZyB1c2VkIGFzIHRoZXknZCByZXF1aXJlIHRvIGRlZmluZSBhXHJcbiAgICAgICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgICAgICAvLyBkb24ndCBzdXBwb3J0IHRoaXMgdHlwZSBvZiBjb2xsZWN0aW9ucy5cclxuICAgICAgICAgICAgZGVmaW5lQ29uZmlndXJhYmxlKHRoaXMsIHsgdGFyZ2V0OiB0YXJnZXQsIGNvbnRlbnRSZWN0OiBjb250ZW50UmVjdCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XHJcbiAgICB9KCkpO1xuXG4gICAgdmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkXHJcbiAgICAgICAgICogICAgICB3aGVuIG9uZSBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlcyBpdCdzIGNvbnRlbnQgZGltZW5zaW9ucy5cclxuICAgICAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAgICAgKiAgICAgIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgdXBkYXRlcyBvZiBvYnNlcnZlci5cclxuICAgICAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyfSBjYWxsYmFja0N0eCAtIFJlZmVyZW5jZSB0byB0aGUgcHVibGljXHJcbiAgICAgICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgY2FsbGJhY2tDdHgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbGxlY3Rpb24gb2YgcmVzaXplIG9ic2VydmF0aW9ucyB0aGF0IGhhdmUgZGV0ZWN0ZWQgY2hhbmdlcyBpbiBkaW1lbnNpb25zXHJcbiAgICAgICAgICAgICAqIG9mIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZWdpc3RyeSBvZiB0aGUgUmVzaXplT2JzZXJ2YXRpb24gaW5zdGFuY2VzLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7TWFwPEVsZW1lbnQsIFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfID0gY29udHJvbGxlcjtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLmFkZE9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyBGb3JjZSB0aGUgdXBkYXRlIG9mIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBzdG9wIG9ic2VydmluZy5cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIG5vdCBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YXRpb25zLnNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbGxlY3RzIG9ic2VydmF0aW9uIGluc3RhbmNlcyB0aGUgYXNzb2NpYXRlZCBlbGVtZW50IG9mIHdoaWNoIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgICogaXQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2YXRpb24uaXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ucHVzaChvYnNlcnZhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlcyBpbml0aWFsIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYSBsaXN0IG9mIFJlc2l6ZU9ic2VydmVyRW50cnlcclxuICAgICAgICAgKiBpbnN0YW5jZXMgY29sbGVjdGVkIGZyb20gYWN0aXZlIHJlc2l6ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIG9ic2VydmVyIGRvZXNuJ3QgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYWxsYmFja0N0eF87XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLm1hcChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvYnNlcnZhdGlvbi50YXJnZXQsIG9ic2VydmF0aW9uLmJyb2FkY2FzdFJlY3QoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrXy5jYWxsKGN0eCwgZW50cmllcywgY3R4KTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2xlYXJzIHRoZSBjb2xsZWN0aW9uIG9mIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5zcGxpY2UoMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB3aGV0aGVyIG9ic2VydmVyIGhhcyBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmhhc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU1BJO1xyXG4gICAgfSgpKTtcblxuICAgIC8vIFJlZ2lzdHJ5IG9mIGludGVybmFsIG9ic2VydmVycy4gSWYgV2Vha01hcCBpcyBub3QgYXZhaWxhYmxlIHVzZSBjdXJyZW50IHNoaW1cclxuICAgIC8vIGZvciB0aGUgTWFwIGNvbGxlY3Rpb24gYXMgaXQgaGFzIGFsbCByZXF1aXJlZCBtZXRob2RzIGFuZCBiZWNhdXNlIFdlYWtNYXBcclxuICAgIC8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG4gICAgdmFyIG9ic2VydmVycyA9IHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgTWFwU2hpbSgpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiBleHBvc2luZyBvbmx5IHRob3NlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgc3BlYy5cclxuICAgICAqL1xyXG4gICAgdmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW5cclxuICAgICAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzaXplT2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLnNldCh0aGlzLCBvYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxuICAgIH0oKSk7XHJcbiAgICAvLyBFeHBvc2UgcHVibGljIG1ldGhvZHMgb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICBbXHJcbiAgICAgICAgJ29ic2VydmUnLFxyXG4gICAgICAgICd1bm9ic2VydmUnLFxyXG4gICAgICAgICdkaXNjb25uZWN0J1xyXG4gICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgICAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gKF9hID0gb2JzZXJ2ZXJzLmdldCh0aGlzKSlbbWV0aG9kXS5hcHBseShfYSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XG5cbiAgICB2YXIgaW5kZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEV4cG9ydCBleGlzdGluZyBpbXBsZW1lbnRhdGlvbiBpZiBhdmFpbGFibGUuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgc3R5bGVzID0ge1xuICBiYXNlOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIE1zVXNlclNlbGVjdDogJ25vbmUnXG4gIH0sXG4gIHRvcDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgdG9wOiAnLTVweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgY3Vyc29yOiAncm93LXJlc2l6ZSdcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgcmlnaHQ6ICctNXB4JyxcbiAgICBjdXJzb3I6ICdjb2wtcmVzaXplJ1xuICB9LFxuICBib3R0b206IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIGJvdHRvbTogJy01cHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGN1cnNvcjogJ3Jvdy1yZXNpemUnXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgbGVmdDogJy01cHgnLFxuICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogJy0xMHB4JyxcbiAgICB0b3A6ICctMTBweCcsXG4gICAgY3Vyc29yOiAnbmUtcmVzaXplJ1xuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcmlnaHQ6ICctMTBweCcsXG4gICAgYm90dG9tOiAnLTEwcHgnLFxuICAgIGN1cnNvcjogJ3NlLXJlc2l6ZSdcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJy0xMHB4JyxcbiAgICBib3R0b206ICctMTBweCcsXG4gICAgY3Vyc29yOiAnc3ctcmVzaXplJ1xuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnLTEwcHgnLFxuICAgIHRvcDogJy0xMHB4JyxcbiAgICBjdXJzb3I6ICdudy1yZXNpemUnXG4gIH1cbn07XG5cbnZhciBSZXNpemVyID0gKGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgc3R5bGVzLmJhc2UsIHN0eWxlc1twcm9wcy5kaXJlY3Rpb25dLCBwcm9wcy5yZXBsYWNlU3R5bGVzIHx8IHt9KSxcbiAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIHByb3BzLm9uUmVzaXplU3RhcnQoZSwgcHJvcHMuZGlyZWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHByb3BzLm9uUmVzaXplU3RhcnQoZSwgcHJvcHMuZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG59KTtcblxudmFyIHVzZXJTZWxlY3ROb25lID0ge1xuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIE1velVzZXJTZWxlY3Q6ICdub25lJyxcbiAgV2Via2l0VXNlclNlbGVjdDogJ25vbmUnLFxuICBNc1VzZXJTZWxlY3Q6ICdub25lJ1xufTtcblxudmFyIHVzZXJTZWxlY3RBdXRvID0ge1xuICB1c2VyU2VsZWN0OiAnYXV0bycsXG4gIE1velVzZXJTZWxlY3Q6ICdhdXRvJyxcbiAgV2Via2l0VXNlclNlbGVjdDogJ2F1dG8nLFxuICBNc1VzZXJTZWxlY3Q6ICdhdXRvJ1xufTtcblxudmFyIGNsYW1wID0gZnVuY3Rpb24gY2xhbXAobiwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG4sIG1heCksIG1pbik7XG59O1xudmFyIHNuYXAgPSBmdW5jdGlvbiBzbmFwKG4sIHNpemUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAvIHNpemUpICogc2l6ZTtcbn07XG5cbnZhciBmaW5kQ2xvc2VzdFNuYXAgPSBmdW5jdGlvbiBmaW5kQ2xvc2VzdFNuYXAobiwgc25hcEFycmF5KSB7XG4gIHJldHVybiBzbmFwQXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGN1cnIgLSBuKSA8IE1hdGguYWJzKHByZXYgLSBuKSA/IGN1cnIgOiBwcmV2O1xuICB9KTtcbn07XG5cbnZhciBlbmRzV2l0aCA9IGZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc2VhcmNoU3RyKSB7XG4gIHJldHVybiBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSBzZWFyY2hTdHIubGVuZ3RoLCBzZWFyY2hTdHIubGVuZ3RoKSA9PT0gc2VhcmNoU3RyO1xufTtcblxudmFyIGdldFN0cmluZ1NpemUgPSBmdW5jdGlvbiBnZXRTdHJpbmdTaXplKG4pIHtcbiAgaWYgKG4udG9TdHJpbmcoKSA9PT0gJ2F1dG8nKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAncHgnKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJyUnKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJ3ZoJykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICd2dycpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAndm1heCcpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAndm1pbicpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICByZXR1cm4gbiArICdweCc7XG59O1xuXG52YXIgZGVmaW5lZFByb3BzID0gWydzdHlsZScsICdjbGFzc05hbWUnLCAnZ3JpZCcsICdzbmFwJywgJ2JvdW5kcycsICdzaXplJywgJ2RlZmF1bHRTaXplJywgJ21pbldpZHRoJywgJ21pbkhlaWdodCcsICdtYXhXaWR0aCcsICdtYXhIZWlnaHQnLCAnbG9ja0FzcGVjdFJhdGlvJywgJ2xvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgnLCAnbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQnLCAnZW5hYmxlJywgJ2hhbmRsZVN0eWxlcycsICdoYW5kbGVDbGFzc2VzJywgJ2hhbmRsZVdyYXBwZXJTdHlsZScsICdoYW5kbGVXcmFwcGVyQ2xhc3MnLCAnY2hpbGRyZW4nLCAnb25SZXNpemVTdGFydCcsICdvblJlc2l6ZScsICdvblJlc2l6ZVN0b3AnLCAnaGFuZGxlQ29tcG9uZW50JywgJ3NjYWxlJywgJ3Jlc2l6ZVJhdGlvJ107XG5cbnZhciBiYXNlQ2xhc3NOYW1lID0gJ19fcmVzaXphYmxlX2Jhc2VfXyc7XG5cbnZhciBSZXNpemFibGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBpbmhlcml0cyhSZXNpemFibGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlc2l6YWJsZShwcm9wcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc2l6YWJsZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZXNpemFibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZXNpemFibGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzUmVzaXppbmc6IGZhbHNlLFxuICAgICAgcmVzaXplQ3Vyc29yOiAnYXV0bycsXG4gICAgICB3aWR0aDogdHlwZW9mIChfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLndpZHRoKSA9PT0gJ3VuZGVmaW5lZCcgPyAnYXV0bycgOiBfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0eXBlb2YgKF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUuaGVpZ2h0KSA9PT0gJ3VuZGVmaW5lZCcgPyAnYXV0bycgOiBfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLmhlaWdodCxcbiAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudXBkYXRlRXh0ZW5kc1Byb3BzKHByb3BzKTtcbiAgICBfdGhpcy5vblJlc2l6ZVN0YXJ0ID0gX3RoaXMub25SZXNpemVTdGFydC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IF90aGlzLm9uTW91c2VNb3ZlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF90aGlzKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5vbk1vdXNlVXApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX3RoaXMub25Nb3VzZVVwKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBfdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5vbk1vdXNlVXApO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhSZXNpemFibGUsIFt7XG4gICAga2V5OiAndXBkYXRlRXh0ZW5kc1Byb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRXh0ZW5kc1Byb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLmV4dGVuZHNQcm9wcyA9IE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGlmIChkZWZpbmVkUHJvcHMuaW5kZXhPZihrZXkpICE9PSAtMSkgcmV0dXJuIGFjYztcbiAgICAgICAgYWNjW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcmVudFNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXJlbnRTaXplKCkge1xuICAgICAgdmFyIGJhc2UgPSB0aGlzLmJhc2U7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuIHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9O1xuICAgICAgLy8gSU5GTzogVG8gY2FsY3VsYXRlIHBhcmVudCB3aWR0aCB3aXRoIGZsZXggbGF5b3V0XG4gICAgICB2YXIgd3JhcENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHZhciB3cmFwID0gdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwO1xuICAgICAgdmFyIG1pbldpZHRoID0gYmFzZS5zdHlsZS5taW5XaWR0aDtcbiAgICAgIGlmICh3cmFwICE9PSAnd3JhcCcpIHtcbiAgICAgICAgd3JhcENoYW5nZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgICAgIC8vIEhBQ0s6IFVzZSByZWxhdGl2ZSB0byBnZXQgcGFyZW50IHBhZGRpbmcgc2l6ZVxuICAgICAgfVxuICAgICAgYmFzZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBiYXNlLnN0eWxlLm1pbldpZHRoID0gJzEwMCUnO1xuICAgICAgdmFyIHNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBiYXNlLm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJhc2Uub2Zmc2V0SGVpZ2h0XG4gICAgICB9O1xuICAgICAgYmFzZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBpZiAod3JhcENoYW5nZWQpIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcCA9IHdyYXA7XG4gICAgICBiYXNlLnN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCB8fCBzaXplLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0IHx8IHNpemUuaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICBpZiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLmJhc2UpIHJldHVybjtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAsIDApJztcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgIGVsZW1lbnQuc3R5bGUuZmxleCA9ICcwJztcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBiYXNlQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHQpIHtcbiAgICAgIHRoaXMudXBkYXRlRXh0ZW5kc1Byb3BzKG5leHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgYmFzZSA9IHRoaXMuYmFzZTtcblxuICAgICAgICBpZiAoIWJhc2UgfHwgIXBhcmVudCkgcmV0dXJuO1xuICAgICAgICBpZiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShiYXNlIGluc3RhbmNlb2YgTm9kZSkpIHJldHVybjtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGJhc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbGN1bGF0ZU5ld1NpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjdWxhdGVOZXdTaXplKG5ld1NpemUsIGtpbmQpIHtcbiAgICAgIHZhciBwcm9wc1NpemUgPSB0aGlzLnByb3BzU2l6ZSAmJiB0aGlzLnByb3BzU2l6ZVtraW5kXTtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tpbmRdID09PSAnYXV0bycgJiYgdGhpcy5zdGF0ZS5vcmlnaW5hbFtraW5kXSA9PT0gbmV3U2l6ZSAmJiAodHlwZW9mIHByb3BzU2l6ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHNTaXplID09PSAnYXV0bycpID8gJ2F1dG8nIDogbmV3U2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvblJlc2l6ZVN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVTdGFydChldmVudCwgZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IDA7XG4gICAgICB2YXIgY2xpZW50WSA9IDA7XG4gICAgICBpZiAoZXZlbnQubmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNsaWVudFggPSBldmVudC5uYXRpdmVFdmVudC5jbGllbnRYO1xuICAgICAgICBjbGllbnRZID0gZXZlbnQubmF0aXZlRXZlbnQuY2xpZW50WTtcblxuICAgICAgICAvLyBXaGVuIHVzZXIgY2xpY2sgd2l0aCByaWdodCBidXR0b24gdGhlIHJlc2l6ZSBpcyBzdHVjayBpbiByZXNpemluZyBtb2RlXG4gICAgICAgIC8vIHVudGlsIHVzZXJzIGNsaWNrcyBhZ2FpbiwgZG9udCBjb250aW51ZSBpZiByaWdodCBjbGljayBpcyB1c2VkLlxuICAgICAgICAvLyBIQUNLOiBNb3VzZUV2ZW50IGRvZXMgbm90IGhhdmUgYHdoaWNoYCBmcm9tIGZsb3ctYmluIHYwLjY4LlxuICAgICAgICBpZiAoZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQubmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgIGNsaWVudFggPSBldmVudC5uYXRpdmVFdmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNsaWVudFkgPSBldmVudC5uYXRpdmVFdmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemVTdGFydChldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpeCAjMTY4XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zaXplLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5zaXplLmhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zaXplLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnNpemUud2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHRoaXMucHJvcHMuc2l6ZS53aWR0aCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICB4OiBjbGllbnRYLFxuICAgICAgICAgIHk6IGNsaWVudFksXG4gICAgICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZS5oZWlnaHRcbiAgICAgICAgfSxcbiAgICAgICAgaXNSZXNpemluZzogdHJ1ZSxcbiAgICAgICAgcmVzaXplQ3Vyc29yOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcixcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VNb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nKSByZXR1cm47XG4gICAgICB2YXIgY2xpZW50WCA9IGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB2YXIgY2xpZW50WSA9IGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfc3RhdGUuZGlyZWN0aW9uLFxuICAgICAgICAgIG9yaWdpbmFsID0gX3N0YXRlLm9yaWdpbmFsLFxuICAgICAgICAgIHdpZHRoID0gX3N0YXRlLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF9zdGF0ZS5oZWlnaHQ7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBsb2NrQXNwZWN0UmF0aW8gPSBfcHJvcHMubG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0ID0gX3Byb3BzLmxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0LFxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGggPSBfcHJvcHMubG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcblxuICAgICAgdmFyIHNjYWxlID0gdGhpcy5wcm9wcy5zY2FsZSB8fCAxO1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG1heFdpZHRoID0gX3Byb3BzMi5tYXhXaWR0aCxcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcHJvcHMyLm1heEhlaWdodCxcbiAgICAgICAgICBtaW5XaWR0aCA9IF9wcm9wczIubWluV2lkdGgsXG4gICAgICAgICAgbWluSGVpZ2h0ID0gX3Byb3BzMi5taW5IZWlnaHQ7XG5cbiAgICAgIHZhciByZXNpemVSYXRpbyA9IHRoaXMucHJvcHMucmVzaXplUmF0aW8gfHwgMTtcblxuICAgICAgLy8gVE9ETzogcmVmYWN0b3JcbiAgICAgIHZhciBwYXJlbnRTaXplID0gdGhpcy5nZXRQYXJlbnRTaXplKCk7XG4gICAgICBpZiAobWF4V2lkdGggJiYgdHlwZW9mIG1heFdpZHRoID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aChtYXhXaWR0aCwgJyUnKSkge1xuICAgICAgICB2YXIgX3JhdGlvID0gTnVtYmVyKG1heFdpZHRoLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICBtYXhXaWR0aCA9IHBhcmVudFNpemUud2lkdGggKiBfcmF0aW87XG4gICAgICB9XG4gICAgICBpZiAobWF4SGVpZ2h0ICYmIHR5cGVvZiBtYXhIZWlnaHQgPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKG1heEhlaWdodCwgJyUnKSkge1xuICAgICAgICB2YXIgX3JhdGlvMiA9IE51bWJlcihtYXhIZWlnaHQucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1heEhlaWdodCA9IHBhcmVudFNpemUuaGVpZ2h0ICogX3JhdGlvMjtcbiAgICAgIH1cbiAgICAgIGlmIChtaW5XaWR0aCAmJiB0eXBlb2YgbWluV2lkdGggPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKG1pbldpZHRoLCAnJScpKSB7XG4gICAgICAgIHZhciBfcmF0aW8zID0gTnVtYmVyKG1pbldpZHRoLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICBtaW5XaWR0aCA9IHBhcmVudFNpemUud2lkdGggKiBfcmF0aW8zO1xuICAgICAgfVxuICAgICAgaWYgKG1pbkhlaWdodCAmJiB0eXBlb2YgbWluSGVpZ2h0ID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aChtaW5IZWlnaHQsICclJykpIHtcbiAgICAgICAgdmFyIF9yYXRpbzQgPSBOdW1iZXIobWluSGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICBtaW5IZWlnaHQgPSBwYXJlbnRTaXplLmhlaWdodCAqIF9yYXRpbzQ7XG4gICAgICB9XG4gICAgICBtYXhXaWR0aCA9IHR5cGVvZiBtYXhXaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWF4V2lkdGgpO1xuICAgICAgbWF4SGVpZ2h0ID0gdHlwZW9mIG1heEhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWF4SGVpZ2h0KTtcbiAgICAgIG1pbldpZHRoID0gdHlwZW9mIG1pbldpZHRoID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtaW5XaWR0aCk7XG4gICAgICBtaW5IZWlnaHQgPSB0eXBlb2YgbWluSGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtaW5IZWlnaHQpO1xuXG4gICAgICB2YXIgcmF0aW8gPSB0eXBlb2YgbG9ja0FzcGVjdFJhdGlvID09PSAnbnVtYmVyJyA/IGxvY2tBc3BlY3RSYXRpbyA6IG9yaWdpbmFsLndpZHRoIC8gb3JpZ2luYWwuaGVpZ2h0O1xuICAgICAgdmFyIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGg7XG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0O1xuICAgICAgaWYgKC9yaWdodC9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICBuZXdXaWR0aCA9IG9yaWdpbmFsLndpZHRoICsgKGNsaWVudFggLSBvcmlnaW5hbC54KSAqIHJlc2l6ZVJhdGlvIC8gc2NhbGU7XG4gICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIG5ld0hlaWdodCA9IChuZXdXaWR0aCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgpIC8gcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmICgvbGVmdC9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICBuZXdXaWR0aCA9IG9yaWdpbmFsLndpZHRoIC0gKGNsaWVudFggLSBvcmlnaW5hbC54KSAqIHJlc2l6ZVJhdGlvIC8gc2NhbGU7XG4gICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIG5ld0hlaWdodCA9IChuZXdXaWR0aCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgpIC8gcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmICgvYm90dG9tL2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodCArIChjbGllbnRZIC0gb3JpZ2luYWwueSkgKiByZXNpemVSYXRpbyAvIHNjYWxlO1xuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSBuZXdXaWR0aCA9IChuZXdIZWlnaHQgLSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCkgKiByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoL3RvcC9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQgLSAoY2xpZW50WSAtIG9yaWdpbmFsLnkpICogcmVzaXplUmF0aW8gLyBzY2FsZTtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykgbmV3V2lkdGggPSAobmV3SGVpZ2h0IC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQpICogcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHZhciBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciBwYXJlbnRMZWZ0ID0gcGFyZW50UmVjdC5sZWZ0O1xuICAgICAgICAgIHZhciBwYXJlbnRUb3AgPSBwYXJlbnRSZWN0LnRvcDtcblxuICAgICAgICAgIHZhciBfcmVzaXphYmxlJGdldEJvdW5kaW4gPSB0aGlzLnJlc2l6YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgX2xlZnQgPSBfcmVzaXphYmxlJGdldEJvdW5kaW4ubGVmdCxcbiAgICAgICAgICAgICAgX3RvcCA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbi50b3A7XG5cbiAgICAgICAgICB2YXIgYm91bmRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCArIChwYXJlbnRMZWZ0IC0gX2xlZnQpO1xuICAgICAgICAgIHZhciBib3VuZEhlaWdodCA9IHBhcmVudC5vZmZzZXRIZWlnaHQgKyAocGFyZW50VG9wIC0gX3RvcCk7XG4gICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCAmJiBtYXhXaWR0aCA8IGJvdW5kV2lkdGggPyBtYXhXaWR0aCA6IGJvdW5kV2lkdGg7XG4gICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IGJvdW5kSGVpZ2h0ID8gbWF4SGVpZ2h0IDogYm91bmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ib3VuZHMgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhciBfcmVzaXphYmxlJGdldEJvdW5kaW4yID0gdGhpcy5yZXNpemFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgIF9sZWZ0MiA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbjIubGVmdCxcbiAgICAgICAgICAgICAgX3RvcDIgPSBfcmVzaXphYmxlJGdldEJvdW5kaW4yLnRvcDtcblxuICAgICAgICAgIHZhciBfYm91bmRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gX2xlZnQyO1xuICAgICAgICAgIHZhciBfYm91bmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBfdG9wMjtcbiAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgX2JvdW5kV2lkdGggPyBtYXhXaWR0aCA6IF9ib3VuZFdpZHRoO1xuICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBfYm91bmRIZWlnaHQgPyBtYXhIZWlnaHQgOiBfYm91bmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ib3VuZHMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0UmVjdCA9IHRoaXMucHJvcHMuYm91bmRzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgdGFyZ2V0TGVmdCA9IHRhcmdldFJlY3QubGVmdDtcbiAgICAgICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldFJlY3QudG9wO1xuXG4gICAgICAgIHZhciBfcmVzaXphYmxlJGdldEJvdW5kaW4zID0gdGhpcy5yZXNpemFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBfbGVmdDMgPSBfcmVzaXphYmxlJGdldEJvdW5kaW4zLmxlZnQsXG4gICAgICAgICAgICBfdG9wMyA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbjMudG9wO1xuXG4gICAgICAgIGlmICghKHRoaXMucHJvcHMuYm91bmRzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICAgIHZhciBfYm91bmRXaWR0aDIgPSB0aGlzLnByb3BzLmJvdW5kcy5vZmZzZXRXaWR0aCArICh0YXJnZXRMZWZ0IC0gX2xlZnQzKTtcbiAgICAgICAgdmFyIF9ib3VuZEhlaWdodDIgPSB0aGlzLnByb3BzLmJvdW5kcy5vZmZzZXRIZWlnaHQgKyAodGFyZ2V0VG9wIC0gX3RvcDMpO1xuICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgX2JvdW5kV2lkdGgyID8gbWF4V2lkdGggOiBfYm91bmRXaWR0aDI7XG4gICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBfYm91bmRIZWlnaHQyID8gbWF4SGVpZ2h0IDogX2JvdW5kSGVpZ2h0MjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXB1dGVkTWluV2lkdGggPSB0eXBlb2YgbWluV2lkdGggPT09ICd1bmRlZmluZWQnID8gMTAgOiBtaW5XaWR0aDtcbiAgICAgIHZhciBjb21wdXRlZE1heFdpZHRoID0gdHlwZW9mIG1heFdpZHRoID09PSAndW5kZWZpbmVkJyB8fCBtYXhXaWR0aCA8IDAgPyBuZXdXaWR0aCA6IG1heFdpZHRoO1xuICAgICAgdmFyIGNvbXB1dGVkTWluSGVpZ2h0ID0gdHlwZW9mIG1pbkhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyAxMCA6IG1pbkhlaWdodDtcbiAgICAgIHZhciBjb21wdXRlZE1heEhlaWdodCA9IHR5cGVvZiBtYXhIZWlnaHQgPT09ICd1bmRlZmluZWQnIHx8IG1heEhlaWdodCA8IDAgPyBuZXdIZWlnaHQgOiBtYXhIZWlnaHQ7XG5cbiAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgdmFyIGV4dHJhTWluV2lkdGggPSAoY29tcHV0ZWRNaW5IZWlnaHQgLSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCkgKiByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICAgIHZhciBleHRyYU1heFdpZHRoID0gKGNvbXB1dGVkTWF4SGVpZ2h0IC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQpICogcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuICAgICAgICB2YXIgZXh0cmFNaW5IZWlnaHQgPSAoY29tcHV0ZWRNaW5XaWR0aCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgpIC8gcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDtcbiAgICAgICAgdmFyIGV4dHJhTWF4SGVpZ2h0ID0gKGNvbXB1dGVkTWF4V2lkdGggLSBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoKSAvIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ7XG4gICAgICAgIHZhciBsb2NrZWRNaW5XaWR0aCA9IE1hdGgubWF4KGNvbXB1dGVkTWluV2lkdGgsIGV4dHJhTWluV2lkdGgpO1xuICAgICAgICB2YXIgbG9ja2VkTWF4V2lkdGggPSBNYXRoLm1pbihjb21wdXRlZE1heFdpZHRoLCBleHRyYU1heFdpZHRoKTtcbiAgICAgICAgdmFyIGxvY2tlZE1pbkhlaWdodCA9IE1hdGgubWF4KGNvbXB1dGVkTWluSGVpZ2h0LCBleHRyYU1pbkhlaWdodCk7XG4gICAgICAgIHZhciBsb2NrZWRNYXhIZWlnaHQgPSBNYXRoLm1pbihjb21wdXRlZE1heEhlaWdodCwgZXh0cmFNYXhIZWlnaHQpO1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG5ld1dpZHRoLCBsb2NrZWRNaW5XaWR0aCwgbG9ja2VkTWF4V2lkdGgpO1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChuZXdIZWlnaHQsIGxvY2tlZE1pbkhlaWdodCwgbG9ja2VkTWF4SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobmV3V2lkdGgsIGNvbXB1dGVkTWluV2lkdGgsIGNvbXB1dGVkTWF4V2lkdGgpO1xuICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChuZXdIZWlnaHQsIGNvbXB1dGVkTWluSGVpZ2h0LCBjb21wdXRlZE1heEhlaWdodCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5ncmlkKSB7XG4gICAgICAgIG5ld1dpZHRoID0gc25hcChuZXdXaWR0aCwgdGhpcy5wcm9wcy5ncmlkWzBdKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmdyaWQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gc25hcChuZXdIZWlnaHQsIHRoaXMucHJvcHMuZ3JpZFsxXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNuYXAgJiYgdGhpcy5wcm9wcy5zbmFwLngpIHtcbiAgICAgICAgbmV3V2lkdGggPSBmaW5kQ2xvc2VzdFNuYXAobmV3V2lkdGgsIHRoaXMucHJvcHMuc25hcC54KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLnNuYXAgJiYgdGhpcy5wcm9wcy5zbmFwLnkpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gZmluZENsb3Nlc3RTbmFwKG5ld0hlaWdodCwgdGhpcy5wcm9wcy5zbmFwLnkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGEgPSB7XG4gICAgICAgIHdpZHRoOiBuZXdXaWR0aCAtIG9yaWdpbmFsLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodCAtIG9yaWdpbmFsLmhlaWdodFxuICAgICAgfTtcblxuICAgICAgaWYgKHdpZHRoICYmIHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgod2lkdGgsICclJykpIHtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBuZXdXaWR0aCAvIHBhcmVudFNpemUud2lkdGggKiAxMDA7XG4gICAgICAgIG5ld1dpZHRoID0gcGVyY2VudCArICclJztcbiAgICAgIH1cblxuICAgICAgaWYgKGhlaWdodCAmJiB0eXBlb2YgaGVpZ2h0ID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aChoZWlnaHQsICclJykpIHtcbiAgICAgICAgdmFyIF9wZXJjZW50ID0gbmV3SGVpZ2h0IC8gcGFyZW50U2l6ZS5oZWlnaHQgKiAxMDA7XG4gICAgICAgIG5ld0hlaWdodCA9IF9wZXJjZW50ICsgJyUnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY2FsY3VsYXRlTmV3U2l6ZShuZXdXaWR0aCwgJ3dpZHRoJyksXG4gICAgICAgIGhlaWdodDogdGhpcy5jYWxjdWxhdGVOZXdTaXplKG5ld0hlaWdodCwgJ2hlaWdodCcpXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZShldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSwgZGVsdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VVcChldmVudCkge1xuICAgICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGlzUmVzaXppbmcgPSBfc3RhdGUyLmlzUmVzaXppbmcsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3N0YXRlMi5kaXJlY3Rpb24sXG4gICAgICAgICAgb3JpZ2luYWwgPSBfc3RhdGUyLm9yaWdpbmFsO1xuXG4gICAgICBpZiAoIWlzUmVzaXppbmcpIHJldHVybjtcbiAgICAgIHZhciBkZWx0YSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCAtIG9yaWdpbmFsLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZS5oZWlnaHQgLSBvcmlnaW5hbC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0b3ApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0b3AoZXZlbnQsIGRpcmVjdGlvbiwgdGhpcy5yZXNpemFibGUsIGRlbHRhKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnByb3BzLnNpemUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUmVzaXppbmc6IGZhbHNlLCByZXNpemVDdXJzb3I6ICdhdXRvJyB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZShzaXplKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyUmVzaXplcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJlc2l6ZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGVuYWJsZSA9IF9wcm9wczMuZW5hYmxlLFxuICAgICAgICAgIGhhbmRsZVN0eWxlcyA9IF9wcm9wczMuaGFuZGxlU3R5bGVzLFxuICAgICAgICAgIGhhbmRsZUNsYXNzZXMgPSBfcHJvcHMzLmhhbmRsZUNsYXNzZXMsXG4gICAgICAgICAgaGFuZGxlV3JhcHBlclN0eWxlID0gX3Byb3BzMy5oYW5kbGVXcmFwcGVyU3R5bGUsXG4gICAgICAgICAgaGFuZGxlV3JhcHBlckNsYXNzID0gX3Byb3BzMy5oYW5kbGVXcmFwcGVyQ2xhc3MsXG4gICAgICAgICAgaGFuZGxlQ29tcG9uZW50ID0gX3Byb3BzMy5oYW5kbGVDb21wb25lbnQ7XG5cbiAgICAgIGlmICghZW5hYmxlKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciByZXNpemVycyA9IE9iamVjdC5rZXlzKGVuYWJsZSkubWFwKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgaWYgKGVuYWJsZVtkaXJdICE9PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgUmVzaXplcixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBkaXIsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgICAgICAgICBvblJlc2l6ZVN0YXJ0OiBfdGhpczIub25SZXNpemVTdGFydCxcbiAgICAgICAgICAgICAgcmVwbGFjZVN0eWxlczogaGFuZGxlU3R5bGVzICYmIGhhbmRsZVN0eWxlc1tkaXJdLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGhhbmRsZUNsYXNzZXMgJiYgaGFuZGxlQ2xhc3Nlc1tkaXJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlQ29tcG9uZW50ICYmIGhhbmRsZUNvbXBvbmVudFtkaXJdID8gUmVhY3QuY3JlYXRlRWxlbWVudChoYW5kbGVDb21wb25lbnRbZGlyXSkgOiBudWxsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgLy8gIzkzIFdyYXAgdGhlIHJlc2l6ZSBib3ggaW4gc3BhbiAod2lsbCBub3QgYnJlYWsgMTAwJSB3aWR0aC9oZWlnaHQpXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogaGFuZGxlV3JhcHBlckNsYXNzLCBzdHlsZTogaGFuZGxlV3JhcHBlclN0eWxlIH0sXG4gICAgICAgIHJlc2l6ZXJzXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgdXNlclNlbGVjdCA9IHRoaXMuc3RhdGUuaXNSZXNpemluZyA/IHVzZXJTZWxlY3ROb25lIDogdXNlclNlbGVjdEF1dG87XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICBfdGhpczMucmVzaXphYmxlID0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgIH0sIHVzZXJTZWxlY3QsIHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc2l6ZVN0eWxlLCB7XG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCxcbiAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5wcm9wcy5taW5XaWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgfSwgdGhpcy5leHRlbmRzUHJvcHMpLFxuICAgICAgICB0aGlzLnN0YXRlLmlzUmVzaXppbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgICAgICAgIGN1cnNvcjogJycgKyAodGhpcy5zdGF0ZS5yZXNpemVDdXJzb3IgfHwgJ2F1dG8nKSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgekluZGV4OiAnOTk5OScsXG4gICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHRoaXMucmVuZGVyUmVzaXplcigpXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhcmVudE5vZGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzaXphYmxlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJvcHNTaXplJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNpemUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdiYXNlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICBpZiAoIXBhcmVudCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIG4gPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGlmIChuLmNsYXNzTGlzdC5jb250YWlucyhiYXNlQ2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgdmFyIHdpZHRoID0gMDtcbiAgICAgIHZhciBoZWlnaHQgPSAwO1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBvcmdXaWR0aCA9IHRoaXMucmVzaXphYmxlLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgb3JnSGVpZ2h0ID0gdGhpcy5yZXNpemFibGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAvLyBIQUNLOiBTZXQgcG9zaXRpb24gYHJlbGF0aXZlYCB0byBnZXQgcGFyZW50IHNpemUuXG4gICAgICAgIC8vICAgICAgIFRoaXMgaXMgYmVjYXVzZSB3aGVuIHJlLXJlc2l6YWJsZSBzZXQgYGFic29sdXRlYCwgSSBjYW4gbm90IGdldCBiYXNlIHdpZHRoIGNvcnJlY3RseS5cbiAgICAgICAgdmFyIG9yZ1Bvc2l0aW9uID0gdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb247XG4gICAgICAgIGlmIChvcmdQb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgIHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgfVxuICAgICAgICAvLyBJTkZPOiBVc2Ugb3JpZ2luYWwgd2lkdGggb3IgaGVpZ2h0IGlmIHNldCBhdXRvLlxuICAgICAgICB3aWR0aCA9IHRoaXMucmVzaXphYmxlLnN0eWxlLndpZHRoICE9PSAnYXV0bycgPyB0aGlzLnJlc2l6YWJsZS5vZmZzZXRXaWR0aCA6IG9yZ1dpZHRoO1xuICAgICAgICBoZWlnaHQgPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS5oZWlnaHQgIT09ICdhdXRvJyA/IHRoaXMucmVzaXphYmxlLm9mZnNldEhlaWdodCA6IG9yZ0hlaWdodDtcbiAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbiA9IG9yZ1Bvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpemVTdHlsZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIHNpemUgPSB0aGlzLnByb3BzLnNpemU7XG5cbiAgICAgIHZhciBnZXRTaXplID0gZnVuY3Rpb24gZ2V0U2l6ZShrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczQuc3RhdGVba2V5XSA9PT0gJ3VuZGVmaW5lZCcgfHwgX3RoaXM0LnN0YXRlW2tleV0gPT09ICdhdXRvJykgcmV0dXJuICdhdXRvJztcbiAgICAgICAgaWYgKF90aGlzNC5wcm9wc1NpemUgJiYgX3RoaXM0LnByb3BzU2l6ZVtrZXldICYmIGVuZHNXaXRoKF90aGlzNC5wcm9wc1NpemVba2V5XS50b1N0cmluZygpLCAnJScpKSB7XG4gICAgICAgICAgaWYgKGVuZHNXaXRoKF90aGlzNC5zdGF0ZVtrZXldLnRvU3RyaW5nKCksICclJykpIHJldHVybiBfdGhpczQuc3RhdGVba2V5XS50b1N0cmluZygpO1xuICAgICAgICAgIHZhciBwYXJlbnRTaXplID0gX3RoaXM0LmdldFBhcmVudFNpemUoKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBOdW1iZXIoX3RoaXM0LnN0YXRlW2tleV0udG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgICAgdmFyIHBlcmNlbnQgPSB2YWx1ZSAvIHBhcmVudFNpemVba2V5XSAqIDEwMDtcbiAgICAgICAgICByZXR1cm4gcGVyY2VudCArICclJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nU2l6ZShfdGhpczQuc3RhdGVba2V5XSk7XG4gICAgICB9O1xuICAgICAgdmFyIHdpZHRoID0gc2l6ZSAmJiB0eXBlb2Ygc2l6ZS53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuc3RhdGUuaXNSZXNpemluZyA/IGdldFN0cmluZ1NpemUoc2l6ZS53aWR0aCkgOiBnZXRTaXplKCd3aWR0aCcpO1xuICAgICAgdmFyIGhlaWdodCA9IHNpemUgJiYgdHlwZW9mIHNpemUuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nID8gZ2V0U3RyaW5nU2l6ZShzaXplLmhlaWdodCkgOiBnZXRTaXplKCdoZWlnaHQnKTtcbiAgICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJlc2l6YWJsZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVzaXphYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25SZXNpemVTdGFydDogZnVuY3Rpb24gb25SZXNpemVTdGFydCgpIHt9LFxuICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoKSB7fSxcbiAgb25SZXNpemVTdG9wOiBmdW5jdGlvbiBvblJlc2l6ZVN0b3AoKSB7fSxcbiAgZW5hYmxlOiB7XG4gICAgdG9wOiB0cnVlLFxuICAgIHJpZ2h0OiB0cnVlLFxuICAgIGJvdHRvbTogdHJ1ZSxcbiAgICBsZWZ0OiB0cnVlLFxuICAgIHRvcFJpZ2h0OiB0cnVlLFxuICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxuICAgIGJvdHRvbUxlZnQ6IHRydWUsXG4gICAgdG9wTGVmdDogdHJ1ZVxuICB9LFxuICBzdHlsZToge30sXG4gIGdyaWQ6IFsxLCAxXSxcbiAgbG9ja0FzcGVjdFJhdGlvOiBmYWxzZSxcbiAgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDogMCxcbiAgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ6IDAsXG4gIHNjYWxlOiAxLFxuICByZXNpemVSYXRpbzogMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNpemFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmUtcmVzaXphYmxlL2xpYi9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDgxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgncmVhY3QtZG9tJyksIHJlcXVpcmUoJ3JlYWN0JykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsncmVhY3QtZG9tJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcblx0KGdsb2JhbC5SZWFjdERyYWdnYWJsZSA9IGZhY3RvcnkoZ2xvYmFsLlJlYWN0RE9NLGdsb2JhbC5SZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKFJlYWN0RE9NLFJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuXHRSZWFjdERPTSA9IFJlYWN0RE9NICYmIFJlYWN0RE9NLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBSZWFjdERPTVsnZGVmYXVsdCddIDogUmVhY3RET007XG5cdFJlYWN0ID0gUmVhY3QgJiYgUmVhY3QuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFJlYWN0WydkZWZhdWx0J10gOiBSZWFjdDtcblxuXHRmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdFx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKlxuXHQgKiBcblx0ICovXG5cblx0ZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBhcmc7XG5cdCAgfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuXHQgKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuXHQgKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuXHQgKi9cblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG5cdCAgcmV0dXJuIGFyZztcblx0fTtcblxuXHR2YXIgZW1wdHlGdW5jdGlvbl8xID0gZW1wdHlGdW5jdGlvbjtcblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG5cdCAqXG5cdCAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG5cdCAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuXHQgKiBleHBlY3RpbmcuXG5cdCAqXG5cdCAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG5cdCAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cblx0ICovXG5cblx0dmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuXHR7XG5cdCAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuXHQgIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cblx0ICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgdmFyIGVycm9yO1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcblx0ICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcblx0ICAgICAgfSkpO1xuXHQgICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuXHQgICAgfVxuXG5cdCAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG5cdCAgICB0aHJvdyBlcnJvcjtcblx0ICB9XG5cdH1cblxuXHR2YXIgaW52YXJpYW50XzEgPSBpbnZhcmlhbnQ7XG5cblx0LyoqXG5cdCAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cblx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuXHQgKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuXHQgKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cblx0ICovXG5cblx0dmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uXzE7XG5cblx0e1xuXHQgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG5cdCAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICB9XG5cblx0ICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICB9KTtcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cblx0ICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG5cdCAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdCAgICB9IGNhdGNoICh4KSB7fVxuXHQgIH07XG5cblx0ICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcblx0ICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuXHQgICAgfVxuXG5cdCAgICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG5cdCAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdHZhciB3YXJuaW5nXzEgPSB3YXJuaW5nO1xuXG5cdC8qXG5cdG9iamVjdC1hc3NpZ25cblx0KGMpIFNpbmRyZSBTb3JodXNcblx0QGxpY2Vuc2UgTUlUXG5cdCovXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cdHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblx0ZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdFx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gT2JqZWN0KHZhbCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QyID0ge307XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHZhciBvYmplY3RBc3NpZ24gPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0XHR2YXIgZnJvbTtcblx0XHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHRcdHZhciBzeW1ib2xzO1xuXG5cdFx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cdHtcblx0ICB2YXIgaW52YXJpYW50JDEgPSBpbnZhcmlhbnRfMTtcblx0ICB2YXIgd2FybmluZyQxID0gd2FybmluZ18xO1xuXHQgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCQxID0gUmVhY3RQcm9wVHlwZXNTZWNyZXRfMTtcblx0ICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuXHQgKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcblx0ICB7XG5cdCAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG5cdCAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuXHQgICAgICAgIHZhciBlcnJvcjtcblx0ICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuXHQgICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cblx0ICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuXHQgICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuXHQgICAgICAgICAgaW52YXJpYW50JDEodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuXHQgICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0JDEpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG5cdCAgICAgICAgICBlcnJvciA9IGV4O1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3YXJuaW5nJDEoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG5cdCAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcblx0ICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuXHQgICAgICAgICAgLy8gc2FtZSBlcnJvci5cblx0ICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cblx0ICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG5cdCAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0dmFyIGNoZWNrUHJvcFR5cGVzXzEgPSBjaGVja1Byb3BUeXBlcztcblxuXHR2YXIgZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuXHQgIC8qIGdsb2JhbCBTeW1ib2wgKi9cblx0ICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG5cdCAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cblx0ICAvKipcblx0ICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG5cdCAgICpcblx0ICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcblx0ICAgKlxuXHQgICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG5cdCAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG5cdCAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuXHQgICAqICAgICAgIC4uLlxuXHQgICAqICAgICB9XG5cdCAgICpcblx0ICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcblx0ICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG5cdCAgICovXG5cdCAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG5cdCAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuXHQgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8qKlxuXHQgICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG5cdCAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcblx0ICAgKlxuXHQgICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcblx0ICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgIHByb3BUeXBlczoge1xuXHQgICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cblx0ICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuXHQgICAqXG5cdCAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuXHQgICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcblx0ICAgKlxuXHQgICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuXHQgICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcblx0ICAgKiAgICAgfSxcblx0ICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqXG5cdCAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuXHQgICAqXG5cdCAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG5cdCAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG5cdCAgICpcblx0ICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG5cdCAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuXHQgICAqXG5cdCAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgcHJvcFR5cGVzOiB7XG5cdCAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG5cdCAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcblx0ICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG5cdCAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcblx0ICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuXHQgICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcblx0ICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgKiAgICAgICAgICApO1xuXHQgICAqICAgICAgICB9XG5cdCAgICogICAgICB9XG5cdCAgICogICAgfSxcblx0ICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cblx0ICAgKiAgfSk7XG5cdCAgICpcblx0ICAgKiBAaW50ZXJuYWxcblx0ICAgKi9cblxuXHQgIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cblx0ICAvLyBJbXBvcnRhbnQhXG5cdCAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuXHQgIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcblx0ICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcblx0ICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG5cdCAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcblx0ICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuXHQgICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG5cdCAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcblx0ICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG5cdCAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG5cdCAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG5cdCAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcblx0ICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG5cdCAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuXHQgICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG5cdCAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuXHQgICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuXHQgICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG5cdCAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcblx0ICB9O1xuXG5cdCAgLyoqXG5cdCAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuXHQgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuXHQgICAqL1xuXHQgIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cblx0ICBmdW5jdGlvbiBpcyh4LCB5KSB7XG5cdCAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG5cdCAgICBpZiAoeCA9PT0geSkge1xuXHQgICAgICAvLyBTdGVwcyAxLTUsIDctMTBcblx0ICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcblx0ICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cblx0ICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cblx0ICAvKipcblx0ICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG5cdCAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcblx0ICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG5cdCAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuXHQgICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cblx0ICAgKi9cblx0ICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcblx0ICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdCAgICB0aGlzLnN0YWNrID0gJyc7XG5cdCAgfVxuXHQgIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cblx0ICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG5cdCAgICB7XG5cdCAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuXHQgICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG5cdCAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcblx0ICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG5cdCAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpIHtcblx0ICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuXHQgICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG5cdCAgICAgICAgICBpbnZhcmlhbnRfMShcblx0ICAgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcblx0ICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG5cdCAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuXHQgICAgICAgICAgKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG5cdCAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG5cdCAgICAgICAgICBpZiAoXG5cdCAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcblx0ICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuXHQgICAgICAgICAgKSB7XG5cdCAgICAgICAgICAgIHdhcm5pbmdfMShcblx0ICAgICAgICAgICAgICBmYWxzZSxcblx0ICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG5cdCAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcblx0ICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuXHQgICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuXHQgICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuXHQgICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcblx0ICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG5cdCAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuXHQgICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG5cdCAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcblx0ICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG5cdCAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG5cdCAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG5cdCAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG5cdCAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuXHQgICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25fMS50aGF0UmV0dXJuc051bGwpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKTtcblx0ICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcblx0ICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuXHQgICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuXHQgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuXHQgICAgICB3YXJuaW5nXzEoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKTtcblx0ICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25fMS50aGF0UmV0dXJuc051bGw7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuXHQgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuXHQgICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpO1xuXHQgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG5cdCAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcblx0ICAgICAgd2FybmluZ18xKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpO1xuXHQgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zTnVsbDtcblx0ICAgIH1cblxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgd2FybmluZ18xKFxuXHQgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuXHQgICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG5cdCAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG5cdCAgICAgICAgICBpXG5cdCAgICAgICAgKTtcblx0ICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zTnVsbDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuXHQgICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSkgPT0gbnVsbCkge1xuXHQgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcblx0ICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblx0ICAgICAgICBpZiAoIWNoZWNrZXIpIHtcblx0ICAgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cblx0ICAgICAgLy8gcHJvcHMuXG5cdCAgICAgIHZhciBhbGxLZXlzID0gb2JqZWN0QXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXHQgICAgICAgIGlmICghY2hlY2tlcikge1xuXHQgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuXHQgICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG5cdCAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG5cdCAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuXHQgICAgICAgICAgKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSk7XG5cdCAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcblx0ICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuXHQgICAgICBjYXNlICdudW1iZXInOlxuXHQgICAgICBjYXNlICdzdHJpbmcnOlxuXHQgICAgICBjYXNlICd1bmRlZmluZWQnOlxuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcblx0ICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcblx0ICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuXHQgICAgICAgICAgdmFyIHN0ZXA7XG5cdCAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcblx0ICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcblx0ICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG5cdCAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXG5cdCAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuXHQgICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblxuXHQgICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuXHQgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuXHQgIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcblx0ICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdhcnJheSc7XG5cdCAgICB9XG5cdCAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cblx0ICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG5cdCAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuXHQgICAgICByZXR1cm4gJ29iamVjdCc7XG5cdCAgICB9XG5cdCAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdzeW1ib2wnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BUeXBlO1xuXHQgIH1cblxuXHQgIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cblx0ICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cblx0ICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcblx0ICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuXHQgICAgfVxuXHQgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0ICAgICAgICByZXR1cm4gJ2RhdGUnO1xuXHQgICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHQgICAgICAgIHJldHVybiAncmVnZXhwJztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BUeXBlO1xuXHQgIH1cblxuXHQgIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cblx0ICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuXHQgIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuXHQgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG5cdCAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgY2FzZSAnYXJyYXknOlxuXHQgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG5cdCAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuXHQgICAgICBjYXNlICdkYXRlJzpcblx0ICAgICAgY2FzZSAncmVnZXhwJzpcblx0ICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG5cdCAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgcmV0dXJuIHR5cGU7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cblx0ICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG5cdCAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcblx0ICAgICAgcmV0dXJuIEFOT05ZTU9VUztcblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcblx0ICB9XG5cblx0ICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzXzE7XG5cdCAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cblx0ICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG5cdH07XG5cblx0dmFyIHByb3BUeXBlcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblxuXHR7XG5cdCAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG5cdCAgICBTeW1ib2wuZm9yICYmXG5cdCAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG5cdCAgICAweGVhYzc7XG5cblx0ICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0ICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuXHQgICAgICBvYmplY3QgIT09IG51bGwgJiZcblx0ICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cdCAgfTtcblxuXHQgIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuXHQgIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2Rcblx0ICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG5cdCAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5V2l0aFR5cGVDaGVja2Vycyhpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG5cdH1cblx0fSk7XG5cblx0dmFyIGNsYXNzbmFtZXMgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5cdC8qIVxuXHQgIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuXHQgIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdCAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuXHQqL1xuXHQvKiBnbG9iYWwgZGVmaW5lICovXG5cblx0KGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRcdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0XHR9XG5cblx0XHRpZiAoJ29iamVjdCcgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB1bmRlZmluZWQuYW1kID09PSAnb2JqZWN0JyAmJiB1bmRlZmluZWQuYW1kKSB7XG5cdFx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0XHR1bmRlZmluZWQoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdFx0fVxuXHR9KCkpO1xuXHR9KTtcblxuXHQvLyBAY3JlZGl0cyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yb2dvemhuaWtvZmYvYTQzY2ZlZDI3YzQxZTRlNjhjZGNcblx0ZnVuY3Rpb24gZmluZEluQXJyYXkoYXJyYXkgLyo6IEFycmF5PGFueT4gfCBUb3VjaExpc3QqLywgY2FsbGJhY2sgLyo6IEZ1bmN0aW9uKi8pIC8qOiBhbnkqLyB7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICBpZiAoY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIFthcnJheVtpXSwgaSwgYXJyYXldKSkgcmV0dXJuIGFycmF5W2ldO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYyAvKjogYW55Ki8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblxuXHRmdW5jdGlvbiBpc051bShudW0gLyo6IGFueSovKSAvKjogYm9vbGVhbiovIHtcblx0ICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bSk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbnQoYSAvKjogc3RyaW5nKi8pIC8qOiBudW1iZXIqLyB7XG5cdCAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRvbnRTZXRNZShwcm9wcyAvKjogT2JqZWN0Ki8sIHByb3BOYW1lIC8qOiBzdHJpbmcqLywgY29tcG9uZW50TmFtZSAvKjogc3RyaW5nKi8pIHtcblx0ICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG5cdCAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgJyArIHByb3BOYW1lICsgJyBwYXNzZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnIC0gZG8gbm90IHNldCB0aGlzLCBzZXQgaXQgb24gdGhlIGNoaWxkLicpO1xuXHQgIH1cblx0fVxuXG5cdHZhciBwcmVmaXhlcyA9IFsnTW96JywgJ1dlYmtpdCcsICdPJywgJ21zJ107XG5cdGZ1bmN0aW9uIGdldFByZWZpeCgpIC8qOiBzdHJpbmcqLyB7XG5cdCAgdmFyIHByb3AgLyo6IHN0cmluZyovID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuXHQgIC8vIENoZWNraW5nIHNwZWNpZmljYWxseSBmb3IgJ3dpbmRvdy5kb2N1bWVudCcgaXMgZm9yIHBzZXVkby1icm93c2VyIHNlcnZlci1zaWRlXG5cdCAgLy8gZW52aXJvbm1lbnRzIHRoYXQgZGVmaW5lICd3aW5kb3cnIGFzIHRoZSBnbG9iYWwgY29udGV4dC5cblx0ICAvLyBFLmcuIFJlYWN0LXJhaWxzIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtcmFpbHMvcHVsbC84NClcblx0ICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcblxuXHQgIHZhciBzdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cblx0ICBpZiAocHJvcCBpbiBzdHlsZSkgcmV0dXJuICcnO1xuXG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKGJyb3dzZXJQcmVmaXhUb0tleShwcm9wLCBwcmVmaXhlc1tpXSkgaW4gc3R5bGUpIHJldHVybiBwcmVmaXhlc1tpXTtcblx0ICB9XG5cblx0ICByZXR1cm4gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBicm93c2VyUHJlZml4VG9LZXkocHJvcCAvKjogc3RyaW5nKi8sIHByZWZpeCAvKjogc3RyaW5nKi8pIC8qOiBzdHJpbmcqLyB7XG5cdCAgcmV0dXJuIHByZWZpeCA/ICcnICsgcHJlZml4ICsga2ViYWJUb1RpdGxlQ2FzZShwcm9wKSA6IHByb3A7XG5cdH1cblxuXHRmdW5jdGlvbiBrZWJhYlRvVGl0bGVDYXNlKHN0ciAvKjogc3RyaW5nKi8pIC8qOiBzdHJpbmcqLyB7XG5cdCAgdmFyIG91dCA9ICcnO1xuXHQgIHZhciBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKHNob3VsZENhcGl0YWxpemUpIHtcblx0ICAgICAgb3V0ICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuXHQgICAgICBzaG91bGRDYXBpdGFsaXplID0gZmFsc2U7XG5cdCAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJy0nKSB7XG5cdCAgICAgIHNob3VsZENhcGl0YWxpemUgPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgb3V0ICs9IHN0cltpXTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIG91dDtcblx0fVxuXG5cdC8vIERlZmF1bHQgZXhwb3J0IGlzIHRoZSBwcmVmaXggaXRzZWxmLCBsaWtlICdNb3onLCAnV2Via2l0JywgZXRjXG5cdC8vIE5vdGUgdGhhdCB5b3UgbWF5IGhhdmUgdG8gcmUtdGVzdCBmb3IgY2VydGFpbiB0aGluZ3M7IGZvciBpbnN0YW5jZSwgQ2hyb21lIDUwXG5cdC8vIGNhbiBoYW5kbGUgdW5wcmVmaXhlZCBgdHJhbnNmb3JtYCwgYnV0IG5vdCB1bnByZWZpeGVkIGB1c2VyLXNlbGVjdGBcblx0dmFyIGJyb3dzZXJQcmVmaXggPSBnZXRQcmVmaXgoKTtcblxuXHR2YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG5cdCAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcblx0ICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuXHQgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdCAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHQgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblx0ICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuXHQgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuXHQgIH07XG5cdH0oKTtcblxuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG5cdCAgaWYgKGtleSBpbiBvYmopIHtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuXHQgICAgICB2YWx1ZTogdmFsdWUsXG5cdCAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgICAgd3JpdGFibGU6IHRydWVcblx0ICAgIH0pO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBvYmpba2V5XSA9IHZhbHVlO1xuXHQgIH1cblxuXHQgIHJldHVybiBvYmo7XG5cdH07XG5cblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdCAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cblx0ICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcblx0ICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHRhcmdldDtcblx0fTtcblxuXHR2YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcblx0ICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcblx0ICB9XG5cblx0ICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcblx0ICAgIGNvbnN0cnVjdG9yOiB7XG5cdCAgICAgIHZhbHVlOiBzdWJDbGFzcyxcblx0ICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG5cdCAgICAgIHdyaXRhYmxlOiB0cnVlLFxuXHQgICAgICBjb25maWd1cmFibGU6IHRydWVcblx0ICAgIH1cblx0ICB9KTtcblx0ICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG5cdH07XG5cblx0dmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuXHQgIGlmICghc2VsZikge1xuXHQgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuXHQgIH1cblxuXHQgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuXHR9O1xuXG5cdHZhciBzbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG5cdCAgICB2YXIgX2FyciA9IFtdO1xuXHQgICAgdmFyIF9uID0gdHJ1ZTtcblx0ICAgIHZhciBfZCA9IGZhbHNlO1xuXHQgICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG5cdCAgICB0cnkge1xuXHQgICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG5cdCAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuXHQgICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgIF9kID0gdHJ1ZTtcblx0ICAgICAgX2UgPSBlcnI7XG5cdCAgICB9IGZpbmFsbHkge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG5cdCAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gX2Fycjtcblx0ICB9XG5cblx0ICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuXHQgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHQgICAgICByZXR1cm4gYXJyO1xuXHQgICAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcblx0ICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuXHQgICAgfVxuXHQgIH07XG5cdH0oKTtcblxuXHQvKjo6IGltcG9ydCB0eXBlIHtDb250cm9sUG9zaXRpb24sIFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdHlwZXMnOyovXG5cblxuXHR2YXIgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9ICcnO1xuXHRmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWwgLyo6IE5vZGUqLywgc2VsZWN0b3IgLyo6IHN0cmluZyovKSAvKjogYm9vbGVhbiovIHtcblx0ICBpZiAoIW1hdGNoZXNTZWxlY3RvckZ1bmMpIHtcblx0ICAgIG1hdGNoZXNTZWxlY3RvckZ1bmMgPSBmaW5kSW5BcnJheShbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21vek1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvcicsICdvTWF0Y2hlc1NlbGVjdG9yJ10sIGZ1bmN0aW9uIChtZXRob2QpIHtcblx0ICAgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgICAgICByZXR1cm4gaXNGdW5jdGlvbihlbFttZXRob2RdKTtcblx0ICAgIH0pO1xuXHQgIH1cblxuXHQgIC8vIE1pZ2h0IG5vdCBiZSBmb3VuZCBlbnRpcmVseSAobm90IGFuIEVsZW1lbnQ/KSAtIGluIHRoYXQgY2FzZSwgYmFpbFxuXHQgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcblx0ICBpZiAoIWlzRnVuY3Rpb24oZWxbbWF0Y2hlc1NlbGVjdG9yRnVuY10pKSByZXR1cm4gZmFsc2U7XG5cblx0ICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cdCAgcmV0dXJuIGVsW21hdGNoZXNTZWxlY3RvckZ1bmNdKHNlbGVjdG9yKTtcblx0fVxuXG5cdC8vIFdvcmtzIHVwIHRoZSB0cmVlIHRvIHRoZSBkcmFnZ2FibGUgaXRzZWxmIGF0dGVtcHRpbmcgdG8gbWF0Y2ggc2VsZWN0b3IuXG5cdGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlbCAvKjogTm9kZSovLCBzZWxlY3RvciAvKjogc3RyaW5nKi8sIGJhc2VOb2RlIC8qOiBOb2RlKi8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHZhciBub2RlID0gZWw7XG5cdCAgZG8ge1xuXHQgICAgaWYgKG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHJldHVybiB0cnVlO1xuXHQgICAgaWYgKG5vZGUgPT09IGJhc2VOb2RlKSByZXR1cm4gZmFsc2U7XG5cdCAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHQgIH0gd2hpbGUgKG5vZGUpO1xuXG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkRXZlbnQoZWwgLyo6ID9Ob2RlKi8sIGV2ZW50IC8qOiBzdHJpbmcqLywgaGFuZGxlciAvKjogRnVuY3Rpb24qLykgLyo6IHZvaWQqLyB7XG5cdCAgaWYgKCFlbCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcblx0ICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG5cdCAgfSBlbHNlIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdCAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgICAgZWxbJ29uJyArIGV2ZW50XSA9IGhhbmRsZXI7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWwgLyo6ID9Ob2RlKi8sIGV2ZW50IC8qOiBzdHJpbmcqLywgaGFuZGxlciAvKjogRnVuY3Rpb24qLykgLyo6IHZvaWQqLyB7XG5cdCAgaWYgKCFlbCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcblx0ICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG5cdCAgfSBlbHNlIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG5cdCAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgICAgZWxbJ29uJyArIGV2ZW50XSA9IG51bGw7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gb3V0ZXJIZWlnaHQobm9kZSAvKjogSFRNTEVsZW1lbnQqLykgLyo6IG51bWJlciovIHtcblx0ICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcblx0ICAvLyBvZmZzZXRUb3Agd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cblx0ICB2YXIgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG5cdCAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuXHQgIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG5cdCAgcmV0dXJuIGhlaWdodDtcblx0fVxuXG5cdGZ1bmN0aW9uIG91dGVyV2lkdGgobm9kZSAvKjogSFRNTEVsZW1lbnQqLykgLyo6IG51bWJlciovIHtcblx0ICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcblx0ICAvLyBvZmZzZXRMZWZ0IHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG5cdCAgdmFyIHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcblx0ICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHQgIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCk7XG5cdCAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cdCAgcmV0dXJuIHdpZHRoO1xuXHR9XG5cdGZ1bmN0aW9uIGlubmVySGVpZ2h0KG5vZGUgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBudW1iZXIqLyB7XG5cdCAgdmFyIGhlaWdodCA9IG5vZGUuY2xpZW50SGVpZ2h0O1xuXHQgIHZhciBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdCAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApO1xuXHQgIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcblx0ICByZXR1cm4gaGVpZ2h0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5uZXJXaWR0aChub2RlIC8qOiBIVE1MRWxlbWVudCovKSAvKjogbnVtYmVyKi8ge1xuXHQgIHZhciB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG5cdCAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICB3aWR0aCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nTGVmdCk7XG5cdCAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0KTtcblx0ICByZXR1cm4gd2lkdGg7XG5cdH1cblxuXHQvLyBHZXQgZnJvbSBvZmZzZXRQYXJlbnRcblx0ZnVuY3Rpb24gb2Zmc2V0WFlGcm9tUGFyZW50KGV2dCAvKjoge2NsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyfSovLCBvZmZzZXRQYXJlbnQgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBDb250cm9sUG9zaXRpb24qLyB7XG5cdCAgdmFyIGlzQm9keSA9IG9mZnNldFBhcmVudCA9PT0gb2Zmc2V0UGFyZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcblx0ICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGlzQm9keSA/IHsgbGVmdDogMCwgdG9wOiAwIH0gOiBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0ICB2YXIgeCA9IGV2dC5jbGllbnRYICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQgLSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQ7XG5cdCAgdmFyIHkgPSBldnQuY2xpZW50WSArIG9mZnNldFBhcmVudC5zY3JvbGxUb3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcDtcblxuXHQgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNTU1RyYW5zZm9ybShjb250cm9sUG9zIC8qOiBDb250cm9sUG9zaXRpb24qLywgcG9zaXRpb25PZmZzZXQgLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi8pIC8qOiBPYmplY3QqLyB7XG5cdCAgdmFyIHRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb24oY29udHJvbFBvcywgcG9zaXRpb25PZmZzZXQsICdweCcpO1xuXHQgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgYnJvd3NlclByZWZpeFRvS2V5KCd0cmFuc2Zvcm0nLCBicm93c2VyUHJlZml4KSwgdHJhbnNsYXRpb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlU1ZHVHJhbnNmb3JtKGNvbnRyb2xQb3MgLyo6IENvbnRyb2xQb3NpdGlvbiovLCBwb3NpdGlvbk9mZnNldCAvKjogUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24qLykgLyo6IHN0cmluZyovIHtcblx0ICB2YXIgdHJhbnNsYXRpb24gPSBnZXRUcmFuc2xhdGlvbihjb250cm9sUG9zLCBwb3NpdGlvbk9mZnNldCwgJycpO1xuXHQgIHJldHVybiB0cmFuc2xhdGlvbjtcblx0fVxuXHRmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihfcmVmMiwgcG9zaXRpb25PZmZzZXQgLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi8sIHVuaXRTdWZmaXggLyo6IHN0cmluZyovKSAvKjogc3RyaW5nKi8ge1xuXHQgIHZhciB4ID0gX3JlZjIueCxcblx0ICAgICAgeSA9IF9yZWYyLnk7XG5cblx0ICB2YXIgdHJhbnNsYXRpb24gPSAndHJhbnNsYXRlKCcgKyB4ICsgdW5pdFN1ZmZpeCArICcsJyArIHkgKyB1bml0U3VmZml4ICsgJyknO1xuXHQgIGlmIChwb3NpdGlvbk9mZnNldCkge1xuXHQgICAgdmFyIGRlZmF1bHRYID0gJycgKyAodHlwZW9mIHBvc2l0aW9uT2Zmc2V0LnggPT09ICdzdHJpbmcnID8gcG9zaXRpb25PZmZzZXQueCA6IHBvc2l0aW9uT2Zmc2V0LnggKyB1bml0U3VmZml4KTtcblx0ICAgIHZhciBkZWZhdWx0WSA9ICcnICsgKHR5cGVvZiBwb3NpdGlvbk9mZnNldC55ID09PSAnc3RyaW5nJyA/IHBvc2l0aW9uT2Zmc2V0LnkgOiBwb3NpdGlvbk9mZnNldC55ICsgdW5pdFN1ZmZpeCk7XG5cdCAgICB0cmFuc2xhdGlvbiA9ICd0cmFuc2xhdGUoJyArIGRlZmF1bHRYICsgJywgJyArIGRlZmF1bHRZICsgJyknICsgdHJhbnNsYXRpb247XG5cdCAgfVxuXHQgIHJldHVybiB0cmFuc2xhdGlvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRvdWNoKGUgLyo6IE1vdXNlVG91Y2hFdmVudCovLCBpZGVudGlmaWVyIC8qOiBudW1iZXIqLykgLyo6ID97Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9Ki8ge1xuXHQgIHJldHVybiBlLnRhcmdldFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS50YXJnZXRUb3VjaGVzLCBmdW5jdGlvbiAodCkge1xuXHQgICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcjtcblx0ICB9KSB8fCBlLmNoYW5nZWRUb3VjaGVzICYmIGZpbmRJbkFycmF5KGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0KSB7XG5cdCAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gdC5pZGVudGlmaWVyO1xuXHQgIH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VG91Y2hJZGVudGlmaWVyKGUgLyo6IE1vdXNlVG91Y2hFdmVudCovKSAvKjogP251bWJlciovIHtcblx0ICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlc1swXSkgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuXHQgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHJldHVybiBlLmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XG5cdH1cblxuXHQvLyBVc2VyLXNlbGVjdCBIYWNrczpcblx0Ly9cblx0Ly8gVXNlZnVsIGZvciBwcmV2ZW50aW5nIGJsdWUgaGlnaGxpZ2h0cyBhbGwgb3ZlciBldmVyeXRoaW5nIHdoZW4gZHJhZ2dpbmcuXG5cblx0Ly8gTm90ZSB3ZSdyZSBwYXNzaW5nIGBkb2N1bWVudGAgYi9jIHdlIGNvdWxkIGJlIGlmcmFtZWRcblx0ZnVuY3Rpb24gYWRkVXNlclNlbGVjdFN0eWxlcyhkb2MgLyo6ID9Eb2N1bWVudCovKSB7XG5cdCAgaWYgKCFkb2MpIHJldHVybjtcblx0ICB2YXIgc3R5bGVFbCA9IGRvYy5nZXRFbGVtZW50QnlJZCgncmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsJyk7XG5cdCAgaWYgKCFzdHlsZUVsKSB7XG5cdCAgICBzdHlsZUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xuXHQgICAgc3R5bGVFbC5pZCA9ICdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnO1xuXHQgICAgc3R5bGVFbC5pbm5lckhUTUwgPSAnLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6LW1vei1zZWxlY3Rpb24ge2FsbDogaW5oZXJpdDt9XFxuJztcblx0ICAgIHN0eWxlRWwuaW5uZXJIVE1MICs9ICcucmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbiAqOjpzZWxlY3Rpb24ge2FsbDogaW5oZXJpdDt9XFxuJztcblx0ICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuXHQgIH1cblx0ICBpZiAoZG9jLmJvZHkpIGFkZENsYXNzTmFtZShkb2MuYm9keSwgJ3JlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24nKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoZG9jIC8qOiA/RG9jdW1lbnQqLykge1xuXHQgIHRyeSB7XG5cdCAgICBpZiAoZG9jICYmIGRvYy5ib2R5KSByZW1vdmVDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XG5cdCAgICAvLyAkRmxvd0lnbm9yZTogSUVcblx0ICAgIGlmIChkb2Muc2VsZWN0aW9uKSB7XG5cdCAgICAgIC8vICRGbG93SWdub3JlOiBJRVxuXHQgICAgICBkb2Muc2VsZWN0aW9uLmVtcHR5KCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7IC8vIHJlbW92ZSBzZWxlY3Rpb24gY2F1c2VkIGJ5IHNjcm9sbFxuXHQgICAgfVxuXHQgIH0gY2F0Y2ggKGUpIHtcblx0ICAgIC8vIHByb2JhYmx5IElFXG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gc3R5bGVIYWNrcygpIC8qOiBPYmplY3QqLyB7XG5cdCAgdmFyIGNoaWxkU3R5bGUgLyo6IE9iamVjdCovID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuXHQgIC8vIFdvcmthcm91bmQgSUUgcG9pbnRlciBldmVudHM7IHNlZSAjNTFcblx0ICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzUxI2lzc3VlY29tbWVudC0xMDM0ODgyNzhcblx0ICByZXR1cm4gX2V4dGVuZHMoe1xuXHQgICAgdG91Y2hBY3Rpb246ICdub25lJ1xuXHQgIH0sIGNoaWxkU3R5bGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGVsIC8qOiBIVE1MRWxlbWVudCovLCBjbGFzc05hbWUgLyo6IHN0cmluZyovKSB7XG5cdCAgaWYgKGVsLmNsYXNzTGlzdCkge1xuXHQgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpZiAoIWVsLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKD8hXFxcXFMpJykpKSB7XG5cdCAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ2xhc3NOYW1lKGVsIC8qOiBIVE1MRWxlbWVudCovLCBjbGFzc05hbWUgLyo6IHN0cmluZyovKSB7XG5cdCAgaWYgKGVsLmNsYXNzTGlzdCkge1xuXHQgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKD8hXFxcXFMpJywgJ2cnKSwgJycpO1xuXHQgIH1cblx0fVxuXG5cdC8qOjogaW1wb3J0IHR5cGUgRHJhZ2dhYmxlIGZyb20gJy4uL0RyYWdnYWJsZSc7Ki9cblx0Lyo6OiBpbXBvcnQgdHlwZSB7Qm91bmRzLCBDb250cm9sUG9zaXRpb24sIERyYWdnYWJsZURhdGEsIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi90eXBlcyc7Ki9cblx0Lyo6OiBpbXBvcnQgdHlwZSBEcmFnZ2FibGVDb3JlIGZyb20gJy4uL0RyYWdnYWJsZUNvcmUnOyovXG5cblxuXHRmdW5jdGlvbiBnZXRCb3VuZFBvc2l0aW9uKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlKi8sIHggLyo6IG51bWJlciovLCB5IC8qOiBudW1iZXIqLykgLyo6IFtudW1iZXIsIG51bWJlcl0qLyB7XG5cdCAgLy8gSWYgbm8gYm91bmRzLCBzaG9ydC1jaXJjdWl0IGFuZCBtb3ZlIG9uXG5cdCAgaWYgKCFkcmFnZ2FibGUucHJvcHMuYm91bmRzKSByZXR1cm4gW3gsIHldO1xuXG5cdCAgLy8gQ2xvbmUgbmV3IGJvdW5kc1xuXHQgIHZhciBib3VuZHMgPSBkcmFnZ2FibGUucHJvcHMuYm91bmRzO1xuXG5cdCAgYm91bmRzID0gdHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycgPyBib3VuZHMgOiBjbG9uZUJvdW5kcyhib3VuZHMpO1xuXHQgIHZhciBub2RlID0gZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcblxuXHQgIGlmICh0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJykge1xuXHQgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG5cblx0ICAgIHZhciBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdCAgICB2YXIgYm91bmROb2RlID0gdm9pZCAwO1xuXHQgICAgaWYgKGJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcblx0ICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgYm91bmROb2RlID0gb3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvdW5kcyk7XG5cdCAgICB9XG5cdCAgICBpZiAoIShib3VuZE5vZGUgaW5zdGFuY2VvZiBvd25lcldpbmRvdy5IVE1MRWxlbWVudCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3VuZHMgc2VsZWN0b3IgXCInICsgYm91bmRzICsgJ1wiIGNvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQuJyk7XG5cdCAgICB9XG5cdCAgICB2YXIgbm9kZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICAgIHZhciBib3VuZE5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUoYm91bmROb2RlKTtcblx0ICAgIC8vIENvbXB1dGUgYm91bmRzLiBUaGlzIGlzIGEgcGFpbiB3aXRoIHBhZGRpbmcgYW5kIG9mZnNldHMgYnV0IHRoaXMgZ2V0cyBpdCBleGFjdGx5IHJpZ2h0LlxuXHQgICAgYm91bmRzID0ge1xuXHQgICAgICBsZWZ0OiAtbm9kZS5vZmZzZXRMZWZ0ICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdMZWZ0KSArIGludChub2RlU3R5bGUubWFyZ2luTGVmdCksXG5cdCAgICAgIHRvcDogLW5vZGUub2Zmc2V0VG9wICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdUb3ApICsgaW50KG5vZGVTdHlsZS5tYXJnaW5Ub3ApLFxuXHQgICAgICByaWdodDogaW5uZXJXaWR0aChib3VuZE5vZGUpIC0gb3V0ZXJXaWR0aChub2RlKSAtIG5vZGUub2Zmc2V0TGVmdCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nUmlnaHQpIC0gaW50KG5vZGVTdHlsZS5tYXJnaW5SaWdodCksXG5cdCAgICAgIGJvdHRvbTogaW5uZXJIZWlnaHQoYm91bmROb2RlKSAtIG91dGVySGVpZ2h0KG5vZGUpIC0gbm9kZS5vZmZzZXRUb3AgKyBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ0JvdHRvbSkgLSBpbnQobm9kZVN0eWxlLm1hcmdpbkJvdHRvbSlcblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgLy8gS2VlcCB4IGFuZCB5IGJlbG93IHJpZ2h0IGFuZCBib3R0b20gbGltaXRzLi4uXG5cdCAgaWYgKGlzTnVtKGJvdW5kcy5yaWdodCkpIHggPSBNYXRoLm1pbih4LCBib3VuZHMucmlnaHQpO1xuXHQgIGlmIChpc051bShib3VuZHMuYm90dG9tKSkgeSA9IE1hdGgubWluKHksIGJvdW5kcy5ib3R0b20pO1xuXG5cdCAgLy8gQnV0IGFib3ZlIGxlZnQgYW5kIHRvcCBsaW1pdHMuXG5cdCAgaWYgKGlzTnVtKGJvdW5kcy5sZWZ0KSkgeCA9IE1hdGgubWF4KHgsIGJvdW5kcy5sZWZ0KTtcblx0ICBpZiAoaXNOdW0oYm91bmRzLnRvcCkpIHkgPSBNYXRoLm1heCh5LCBib3VuZHMudG9wKTtcblxuXHQgIHJldHVybiBbeCwgeV07XG5cdH1cblxuXHRmdW5jdGlvbiBzbmFwVG9HcmlkKGdyaWQgLyo6IFtudW1iZXIsIG51bWJlcl0qLywgcGVuZGluZ1ggLyo6IG51bWJlciovLCBwZW5kaW5nWSAvKjogbnVtYmVyKi8pIC8qOiBbbnVtYmVyLCBudW1iZXJdKi8ge1xuXHQgIHZhciB4ID0gTWF0aC5yb3VuZChwZW5kaW5nWCAvIGdyaWRbMF0pICogZ3JpZFswXTtcblx0ICB2YXIgeSA9IE1hdGgucm91bmQocGVuZGluZ1kgLyBncmlkWzFdKSAqIGdyaWRbMV07XG5cdCAgcmV0dXJuIFt4LCB5XTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbkRyYWdYKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlKi8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneCc7XG5cdH1cblxuXHRmdW5jdGlvbiBjYW5EcmFnWShkcmFnZ2FibGUgLyo6IERyYWdnYWJsZSovKSAvKjogYm9vbGVhbiovIHtcblx0ICByZXR1cm4gZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICdib3RoJyB8fCBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ3knO1xuXHR9XG5cblx0Ly8gR2V0IHt4LCB5fSBwb3NpdGlvbnMgZnJvbSBldmVudC5cblx0ZnVuY3Rpb24gZ2V0Q29udHJvbFBvc2l0aW9uKGUgLyo6IE1vdXNlVG91Y2hFdmVudCovLCB0b3VjaElkZW50aWZpZXIgLyo6ID9udW1iZXIqLywgZHJhZ2dhYmxlQ29yZSAvKjogRHJhZ2dhYmxlQ29yZSovKSAvKjogP0NvbnRyb2xQb3NpdGlvbiovIHtcblx0ICB2YXIgdG91Y2hPYmogPSB0eXBlb2YgdG91Y2hJZGVudGlmaWVyID09PSAnbnVtYmVyJyA/IGdldFRvdWNoKGUsIHRvdWNoSWRlbnRpZmllcikgOiBudWxsO1xuXHQgIGlmICh0eXBlb2YgdG91Y2hJZGVudGlmaWVyID09PSAnbnVtYmVyJyAmJiAhdG91Y2hPYmopIHJldHVybiBudWxsOyAvLyBub3QgdGhlIHJpZ2h0IHRvdWNoXG5cdCAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGVDb3JlKTtcblx0ICAvLyBVc2VyIGNhbiBwcm92aWRlIGFuIG9mZnNldFBhcmVudCBpZiBkZXNpcmVkLlxuXHQgIHZhciBvZmZzZXRQYXJlbnQgPSBkcmFnZ2FibGVDb3JlLnByb3BzLm9mZnNldFBhcmVudCB8fCBub2RlLm9mZnNldFBhcmVudCB8fCBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcblx0ICByZXR1cm4gb2Zmc2V0WFlGcm9tUGFyZW50KHRvdWNoT2JqIHx8IGUsIG9mZnNldFBhcmVudCk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYW4gZGF0YSBvYmplY3QgZXhwb3NlZCBieSA8RHJhZ2dhYmxlQ29yZT4ncyBldmVudHNcblx0ZnVuY3Rpb24gY3JlYXRlQ29yZURhdGEoZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGVDb3JlKi8sIHggLyo6IG51bWJlciovLCB5IC8qOiBudW1iZXIqLykgLyo6IERyYWdnYWJsZURhdGEqLyB7XG5cdCAgdmFyIHN0YXRlID0gZHJhZ2dhYmxlLnN0YXRlO1xuXHQgIHZhciBpc1N0YXJ0ID0gIWlzTnVtKHN0YXRlLmxhc3RYKTtcblx0ICB2YXIgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cblx0ICBpZiAoaXNTdGFydCkge1xuXHQgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgbW92ZSwgdXNlIHRoZSB4IGFuZCB5IGFzIGxhc3QgY29vcmRzLlxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgbm9kZTogbm9kZSxcblx0ICAgICAgZGVsdGFYOiAwLCBkZWx0YVk6IDAsXG5cdCAgICAgIGxhc3RYOiB4LCBsYXN0WTogeSxcblx0ICAgICAgeDogeCwgeTogeVxuXHQgICAgfTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gT3RoZXJ3aXNlIGNhbGN1bGF0ZSBwcm9wZXIgdmFsdWVzLlxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgbm9kZTogbm9kZSxcblx0ICAgICAgZGVsdGFYOiB4IC0gc3RhdGUubGFzdFgsIGRlbHRhWTogeSAtIHN0YXRlLmxhc3RZLFxuXHQgICAgICBsYXN0WDogc3RhdGUubGFzdFgsIGxhc3RZOiBzdGF0ZS5sYXN0WSxcblx0ICAgICAgeDogeCwgeTogeVxuXHQgICAgfTtcblx0ICB9XG5cdH1cblxuXHQvLyBDcmVhdGUgYW4gZGF0YSBleHBvc2VkIGJ5IDxEcmFnZ2FibGU+J3MgZXZlbnRzXG5cdGZ1bmN0aW9uIGNyZWF0ZURyYWdnYWJsZURhdGEoZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGUqLywgY29yZURhdGEgLyo6IERyYWdnYWJsZURhdGEqLykgLyo6IERyYWdnYWJsZURhdGEqLyB7XG5cdCAgdmFyIHNjYWxlID0gZHJhZ2dhYmxlLnByb3BzLnNjYWxlO1xuXHQgIHJldHVybiB7XG5cdCAgICBub2RlOiBjb3JlRGF0YS5ub2RlLFxuXHQgICAgeDogZHJhZ2dhYmxlLnN0YXRlLnggKyBjb3JlRGF0YS5kZWx0YVggLyBzY2FsZSxcblx0ICAgIHk6IGRyYWdnYWJsZS5zdGF0ZS55ICsgY29yZURhdGEuZGVsdGFZIC8gc2NhbGUsXG5cdCAgICBkZWx0YVg6IGNvcmVEYXRhLmRlbHRhWCAvIHNjYWxlLFxuXHQgICAgZGVsdGFZOiBjb3JlRGF0YS5kZWx0YVkgLyBzY2FsZSxcblx0ICAgIGxhc3RYOiBkcmFnZ2FibGUuc3RhdGUueCxcblx0ICAgIGxhc3RZOiBkcmFnZ2FibGUuc3RhdGUueVxuXHQgIH07XG5cdH1cblxuXHQvLyBBIGxvdCBmYXN0ZXIgdGhhbiBzdHJpbmdpZnkvcGFyc2Vcblx0ZnVuY3Rpb24gY2xvbmVCb3VuZHMoYm91bmRzIC8qOiBCb3VuZHMqLykgLyo6IEJvdW5kcyovIHtcblx0ICByZXR1cm4ge1xuXHQgICAgbGVmdDogYm91bmRzLmxlZnQsXG5cdCAgICB0b3A6IGJvdW5kcy50b3AsXG5cdCAgICByaWdodDogYm91bmRzLnJpZ2h0LFxuXHQgICAgYm90dG9tOiBib3VuZHMuYm90dG9tXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpbmRET01Ob2RlKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlIHwgRHJhZ2dhYmxlQ29yZSovKSAvKjogSFRNTEVsZW1lbnQqLyB7XG5cdCAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpO1xuXHQgIGlmICghbm9kZSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT46IFVubW91bnRlZCBkdXJpbmcgZXZlbnQhJyk7XG5cdCAgfVxuXHQgIC8vICRGbG93SWdub3JlIHdlIGNhbid0IGFzc2VydCBvbiBIVE1MRWxlbWVudCBkdWUgdG8gdGVzdHMuLi4gRklYTUVcblx0ICByZXR1cm4gbm9kZTtcblx0fVxuXG5cdC8qZXNsaW50IG5vLWNvbnNvbGU6MCovXG5cdGZ1bmN0aW9uIGxvZygpIHtcblx0fVxuXG5cdC8qOjogaW1wb3J0IHR5cGUge0V2ZW50SGFuZGxlciwgTW91c2VUb3VjaEV2ZW50fSBmcm9tICcuL3V0aWxzL3R5cGVzJzsqL1xuXG5cblx0Ly8gU2ltcGxlIGFic3RyYWN0aW9uIGZvciBkcmFnZ2luZyBldmVudHMgbmFtZXMuXG5cdC8qOjogaW1wb3J0IHR5cGUge0VsZW1lbnQgYXMgUmVhY3RFbGVtZW50fSBmcm9tICdyZWFjdCc7Ki9cblx0dmFyIGV2ZW50c0ZvciA9IHtcblx0ICB0b3VjaDoge1xuXHQgICAgc3RhcnQ6ICd0b3VjaHN0YXJ0Jyxcblx0ICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuXHQgICAgc3RvcDogJ3RvdWNoZW5kJ1xuXHQgIH0sXG5cdCAgbW91c2U6IHtcblx0ICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcblx0ICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuXHQgICAgc3RvcDogJ21vdXNldXAnXG5cdCAgfVxuXHR9O1xuXG5cdC8vIERlZmF1bHQgdG8gbW91c2UgZXZlbnRzLlxuXHR2YXIgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlO1xuXG5cdC8qOjogdHlwZSBEcmFnZ2FibGVDb3JlU3RhdGUgPSB7XG5cdCAgZHJhZ2dpbmc6IGJvb2xlYW4sXG5cdCAgbGFzdFg6IG51bWJlcixcblx0ICBsYXN0WTogbnVtYmVyLFxuXHQgIHRvdWNoSWRlbnRpZmllcjogP251bWJlclxuXHR9OyovXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlQm91bmRzID0ge1xuXHQgIGxlZnQ6IG51bWJlcixcblx0ICByaWdodDogbnVtYmVyLFxuXHQgIHRvcDogbnVtYmVyLFxuXHQgIGJvdHRvbTogbnVtYmVyLFxuXHR9OyovXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlRGF0YSA9IHtcblx0ICBub2RlOiBIVE1MRWxlbWVudCxcblx0ICB4OiBudW1iZXIsIHk6IG51bWJlcixcblx0ICBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXIsXG5cdCAgbGFzdFg6IG51bWJlciwgbGFzdFk6IG51bWJlcixcblx0fTsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB2b2lkOyovXG5cdC8qOjogZXhwb3J0IHR5cGUgQ29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlciwgeTogbnVtYmVyfTsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlcnxzdHJpbmcsIHk6IG51bWJlcnxzdHJpbmd9OyovXG5cblxuXHQvL1xuXHQvLyBEZWZpbmUgPERyYWdnYWJsZUNvcmU+LlxuXHQvL1xuXHQvLyA8RHJhZ2dhYmxlQ29yZT4gaXMgZm9yIGFkdmFuY2VkIHVzYWdlIG9mIDxEcmFnZ2FibGU+LiBJdCBtYWludGFpbnMgbWluaW1hbCBpbnRlcm5hbCBzdGF0ZSBzbyBpdCBjYW5cblx0Ly8gd29yayB3ZWxsIHdpdGggbGlicmFyaWVzIHRoYXQgcmVxdWlyZSBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgZWxlbWVudC5cblx0Ly9cblxuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZUNvcmVQcm9wcyA9IHtcblx0ICBhbGxvd0FueUNsaWNrOiBib29sZWFuLFxuXHQgIGNhbmNlbDogc3RyaW5nLFxuXHQgIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ8YW55Pixcblx0ICBkaXNhYmxlZDogYm9vbGVhbixcblx0ICBlbmFibGVVc2VyU2VsZWN0SGFjazogYm9vbGVhbixcblx0ICBvZmZzZXRQYXJlbnQ6IEhUTUxFbGVtZW50LFxuXHQgIGdyaWQ6IFtudW1iZXIsIG51bWJlcl0sXG5cdCAgaGFuZGxlOiBzdHJpbmcsXG5cdCAgb25TdGFydDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuXHQgIG9uRHJhZzogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuXHQgIG9uU3RvcDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuXHQgIG9uTW91c2VEb3duOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCxcblx0fTsqL1xuXG5cdHZhciBEcmFnZ2FibGVDb3JlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0ICBpbmhlcml0cyhEcmFnZ2FibGVDb3JlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQgIGZ1bmN0aW9uIERyYWdnYWJsZUNvcmUoKSB7XG5cdCAgICB2YXIgX3JlZjtcblxuXHQgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuXHQgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ2dhYmxlQ29yZSk7XG5cblx0ICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IERyYWdnYWJsZUNvcmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnZ2FibGVDb3JlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG5cdCAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblx0ICAgICAgLy8gVXNlZCB3aGlsZSBkcmFnZ2luZyB0byBkZXRlcm1pbmUgZGVsdGFzLlxuXHQgICAgICBsYXN0WDogTmFOLCBsYXN0WTogTmFOLFxuXHQgICAgICB0b3VjaElkZW50aWZpZXI6IG51bGxcblx0ICAgIH0sIF90aGlzLmhhbmRsZURyYWdTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gYXR0YWNoIGV2ZW50IGhhbmRsZXJzIG9uIHRvcCBvZiB0aGlzIG9uZS5cblx0ICAgICAgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZSk7XG5cblx0ICAgICAgLy8gT25seSBhY2NlcHQgbGVmdC1jbGlja3MuXG5cdCAgICAgIGlmICghX3RoaXMucHJvcHMuYWxsb3dBbnlDbGljayAmJiB0eXBlb2YgZS5idXR0b24gPT09ICdudW1iZXInICYmIGUuYnV0dG9uICE9PSAwKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgLy8gR2V0IG5vZGVzLiBCZSBzdXJlIHRvIGdyYWIgcmVsYXRpdmUgZG9jdW1lbnQgKGNvdWxkIGJlIGlmcmFtZWQpXG5cdCAgICAgIHZhciB0aGlzTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblx0ICAgICAgaWYgKCF0aGlzTm9kZSB8fCAhdGhpc05vZGUub3duZXJEb2N1bWVudCB8fCAhdGhpc05vZGUub3duZXJEb2N1bWVudC5ib2R5KSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT4gbm90IG1vdW50ZWQgb24gRHJhZ1N0YXJ0IScpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpc05vZGUub3duZXJEb2N1bWVudDtcblxuXHQgICAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXG5cblx0ICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkIHx8ICEoZS50YXJnZXQgaW5zdGFuY2VvZiBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lk5vZGUpIHx8IF90aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCBfdGhpcy5wcm9wcy5oYW5kbGUsIHRoaXNOb2RlKSB8fCBfdGhpcy5wcm9wcy5jYW5jZWwgJiYgbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCBfdGhpcy5wcm9wcy5jYW5jZWwsIHRoaXNOb2RlKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFNldCB0b3VjaCBpZGVudGlmaWVyIGluIGNvbXBvbmVudCBzdGF0ZSBpZiB0aGlzIGlzIGEgdG91Y2ggZXZlbnQuIFRoaXMgYWxsb3dzIHVzIHRvXG5cdCAgICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxuXHQgICAgICAvLyB0b3VjaHBvaW50IHdhcyBzZXQgdG8gdGhpcyBlbGVtZW50LlxuXHQgICAgICB2YXIgdG91Y2hJZGVudGlmaWVyID0gZ2V0VG91Y2hJZGVudGlmaWVyKGUpO1xuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoSWRlbnRpZmllcjogdG91Y2hJZGVudGlmaWVyIH0pO1xuXG5cdCAgICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cblx0ICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIHRvdWNoSWRlbnRpZmllciwgX3RoaXMpO1xuXHQgICAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuOyAvLyBub3QgcG9zc2libGUgYnV0IHNhdGlzZmllcyBmbG93XG5cdCAgICAgIHZhciB4ID0gcG9zaXRpb24ueCxcblx0ICAgICAgICAgIHkgPSBwb3NpdGlvbi55O1xuXG5cdCAgICAgIC8vIENyZWF0ZSBhbiBldmVudCBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgcGFyZW50cyBuZWVkIHRvIG1ha2UgYSBkZWNpc2lvbiBoZXJlLlxuXG5cdCAgICAgIHZhciBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YShfdGhpcywgeCwgeSk7XG5cblx0ICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCBjYW5jZWwuXG5cdCAgICAgIGxvZygnY2FsbGluZycsIF90aGlzLnByb3BzLm9uU3RhcnQpO1xuXHQgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gX3RoaXMucHJvcHMub25TdGFydChlLCBjb3JlRXZlbnQpO1xuXHQgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdCAgICAgIC8vIEFkZCBhIHN0eWxlIHRvIHRoZSBib2R5IHRvIGRpc2FibGUgdXNlci1zZWxlY3QuIFRoaXMgcHJldmVudHMgdGV4dCBmcm9tXG5cdCAgICAgIC8vIGJlaW5nIHNlbGVjdGVkIGFsbCBvdmVyIHRoZSBwYWdlLlxuXHQgICAgICBpZiAoX3RoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIGFkZFVzZXJTZWxlY3RTdHlsZXMob3duZXJEb2N1bWVudCk7XG5cblx0ICAgICAgLy8gSW5pdGlhdGUgZHJhZ2dpbmcuIFNldCB0aGUgY3VycmVudCB4IGFuZCB5IGFzIG9mZnNldHNcblx0ICAgICAgLy8gc28gd2Uga25vdyBob3cgbXVjaCB3ZSd2ZSBtb3ZlZCBkdXJpbmcgdGhlIGRyYWcuIFRoaXMgYWxsb3dzIHVzXG5cdCAgICAgIC8vIHRvIGRyYWcgZWxlbWVudHMgYXJvdW5kIGV2ZW4gaWYgdGhleSBoYXZlIGJlZW4gbW92ZWQsIHdpdGhvdXQgaXNzdWUuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcblxuXHQgICAgICAgIGxhc3RYOiB4LFxuXHQgICAgICAgIGxhc3RZOiB5XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIC8vIEFkZCBldmVudHMgdG8gdGhlIGRvY3VtZW50IGRpcmVjdGx5IHNvIHdlIGNhdGNoIHdoZW4gdGhlIHVzZXIncyBtb3VzZS90b3VjaCBtb3ZlcyBvdXRzaWRlIG9mXG5cdCAgICAgIC8vIHRoaXMgZWxlbWVudC4gV2UgdXNlIGRpZmZlcmVudCBldmVudHMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgZGV0ZWN0ZWQgdGhhdCB0aGlzXG5cdCAgICAgIC8vIGlzIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UuXG5cdCAgICAgIGFkZEV2ZW50KG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCBfdGhpcy5oYW5kbGVEcmFnKTtcblx0ICAgICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIF90aGlzLmhhbmRsZURyYWdTdG9wKTtcblx0ICAgIH0sIF90aGlzLmhhbmRsZURyYWcgPSBmdW5jdGlvbiAoZSkge1xuXG5cdCAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIG1vYmlsZSBkZXZpY2VzLCBsaWtlIGlwYWQvaXBob25lLlxuXHQgICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdCAgICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cblx0ICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIF90aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgX3RoaXMpO1xuXHQgICAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuO1xuXHQgICAgICB2YXIgeCA9IHBvc2l0aW9uLngsXG5cdCAgICAgICAgICB5ID0gcG9zaXRpb24ueTtcblxuXHQgICAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxuXG5cdCAgICAgIGlmIChBcnJheS5pc0FycmF5KF90aGlzLnByb3BzLmdyaWQpKSB7XG5cdCAgICAgICAgdmFyIF9kZWx0YVggPSB4IC0gX3RoaXMuc3RhdGUubGFzdFgsXG5cdCAgICAgICAgICAgIF9kZWx0YVkgPSB5IC0gX3RoaXMuc3RhdGUubGFzdFk7XG5cblx0ICAgICAgICB2YXIgX3NuYXBUb0dyaWQgPSBzbmFwVG9HcmlkKF90aGlzLnByb3BzLmdyaWQsIF9kZWx0YVgsIF9kZWx0YVkpO1xuXG5cdCAgICAgICAgdmFyIF9zbmFwVG9HcmlkMiA9IHNsaWNlZFRvQXJyYXkoX3NuYXBUb0dyaWQsIDIpO1xuXG5cdCAgICAgICAgX2RlbHRhWCA9IF9zbmFwVG9HcmlkMlswXTtcblx0ICAgICAgICBfZGVsdGFZID0gX3NuYXBUb0dyaWQyWzFdO1xuXG5cdCAgICAgICAgaWYgKCFfZGVsdGFYICYmICFfZGVsdGFZKSByZXR1cm47IC8vIHNraXAgdXNlbGVzcyBkcmFnXG5cdCAgICAgICAgeCA9IF90aGlzLnN0YXRlLmxhc3RYICsgX2RlbHRhWCwgeSA9IF90aGlzLnN0YXRlLmxhc3RZICsgX2RlbHRhWTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YShfdGhpcywgeCwgeSk7XG5cblx0ICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cblx0ICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuXHQgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAvLyAkRmxvd0lnbm9yZVxuXHQgICAgICAgICAgX3RoaXMuaGFuZGxlRHJhZ1N0b3AobmV3IE1vdXNlRXZlbnQoJ21vdXNldXAnKSk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAvLyBPbGQgYnJvd3NlcnNcblx0ICAgICAgICAgIHZhciBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJykgLyo6IGFueSovKSAvKjogTW91c2VUb3VjaEV2ZW50Ki8pO1xuXHQgICAgICAgICAgLy8gSSBzZWUgd2h5IHRoaXMgaW5zYW5pdHkgd2FzIGRlcHJlY2F0ZWRcblx0ICAgICAgICAgIC8vICRGbG93SWdub3JlXG5cdCAgICAgICAgICBldmVudC5pbml0TW91c2VFdmVudCgnbW91c2V1cCcsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHQgICAgICAgICAgX3RoaXMuaGFuZGxlRHJhZ1N0b3AoZXZlbnQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgbGFzdFg6IHgsXG5cdCAgICAgICAgbGFzdFk6IHlcblx0ICAgICAgfSk7XG5cdCAgICB9LCBfdGhpcy5oYW5kbGVEcmFnU3RvcCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGlmICghX3RoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybjtcblxuXHQgICAgICB2YXIgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgX3RoaXMuc3RhdGUudG91Y2hJZGVudGlmaWVyLCBfdGhpcyk7XG5cdCAgICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSByZXR1cm47XG5cdCAgICAgIHZhciB4ID0gcG9zaXRpb24ueCxcblx0ICAgICAgICAgIHkgPSBwb3NpdGlvbi55O1xuXG5cdCAgICAgIHZhciBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YShfdGhpcywgeCwgeSk7XG5cblx0ICAgICAgdmFyIHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHQgICAgICBpZiAodGhpc05vZGUpIHtcblx0ICAgICAgICAvLyBSZW1vdmUgdXNlci1zZWxlY3QgaGFja1xuXHQgICAgICAgIGlmIChfdGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyh0aGlzTm9kZS5vd25lckRvY3VtZW50KTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFJlc2V0IHRoZSBlbC5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblx0ICAgICAgICBsYXN0WDogTmFOLFxuXHQgICAgICAgIGxhc3RZOiBOYU5cblx0ICAgICAgfSk7XG5cblx0ICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyXG5cdCAgICAgIF90aGlzLnByb3BzLm9uU3RvcChlLCBjb3JlRXZlbnQpO1xuXG5cdCAgICAgIGlmICh0aGlzTm9kZSkge1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KHRoaXNOb2RlLm93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCBfdGhpcy5oYW5kbGVEcmFnKTtcblx0ICAgICAgICByZW1vdmVFdmVudCh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgX3RoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuXHQgICAgICB9XG5cdCAgICB9LCBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTsgLy8gb24gdG91Y2hzY3JlZW4gbGFwdG9wcyB3ZSBjb3VsZCBzd2l0Y2ggYmFjayB0byBtb3VzZVxuXG5cdCAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSk7XG5cdCAgICB9LCBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7XG5cblx0ICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuXHQgICAgfSwgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG5cdCAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuXHQgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuXHQgICAgfSwgX3RoaXMub25Ub3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuXHQgICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IudG91Y2g7XG5cblx0ICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuXHQgICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcblx0ICB9XG5cblx0ICBjcmVhdGVDbGFzcyhEcmFnZ2FibGVDb3JlLCBbe1xuXHQgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHQgICAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxuXHQgICAgICAvLyBzb21lIGJyb3dzZXIgcXVpcmsgY2F1c2VkIGEgdG91Y2ggZXZlbnQgdG8gZmlyZSBkdXJpbmcgYSBtb3VzZSBtb3ZlLCBvciB2aWNlIHZlcnNhLlxuXHQgICAgICB2YXIgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXNOb2RlKSB7XG5cdCAgICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzTm9kZS5vd25lckRvY3VtZW50O1xuXG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcblx0ICAgICAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyhvd25lckRvY3VtZW50KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBTYW1lIGFzIG9uTW91c2VEb3duIChzdGFydCBkcmFnKSwgYnV0IG5vdyBjb25zaWRlciB0aGlzIGEgdG91Y2ggZGV2aWNlLlxuXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxuXHQgICAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxuXHQgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcblx0ICAgICAgICBzdHlsZTogc3R5bGVIYWNrcyh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlKSxcblxuXHQgICAgICAgIC8vIE5vdGU6IG1vdXNlTW92ZSBoYW5kbGVyIGlzIGF0dGFjaGVkIHRvIGRvY3VtZW50IHNvIGl0IHdpbGwgc3RpbGwgZnVuY3Rpb25cblx0ICAgICAgICAvLyB3aGVuIHRoZSB1c2VyIGRyYWdzIHF1aWNrbHkgYW5kIGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuXHQgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuXHQgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQsXG5cdCAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcblx0ICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uVG91Y2hFbmRcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHQgIHJldHVybiBEcmFnZ2FibGVDb3JlO1xuXHR9KFJlYWN0LkNvbXBvbmVudCk7XG5cblx0RHJhZ2dhYmxlQ29yZS5kaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGVDb3JlJztcblx0RHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMgPSB7XG5cdCAgLyoqXG5cdCAgICogYGFsbG93QW55Q2xpY2tgIGFsbG93cyBkcmFnZ2luZyB1c2luZyBhbnkgbW91c2UgYnV0dG9uLlxuXHQgICAqIEJ5IGRlZmF1bHQsIHdlIG9ubHkgYWNjZXB0IHRoZSBsZWZ0IGJ1dHRvbi5cblx0ICAgKlxuXHQgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXG5cdCAgICovXG5cdCAgYWxsb3dBbnlDbGljazogcHJvcFR5cGVzLmJvb2wsXG5cblx0ICAvKipcblx0ICAgKiBgZGlzYWJsZWRgLCBpZiB0cnVlLCBzdG9wcyB0aGUgPERyYWdnYWJsZT4gZnJvbSBkcmFnZ2luZy4gQWxsIGhhbmRsZXJzLFxuXHQgICAqIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgb25Nb3VzZURvd25gLCB3aWxsIG5vdCBmaXJlLlxuXHQgICAqL1xuXHQgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcblxuXHQgIC8qKlxuXHQgICAqIEJ5IGRlZmF1bHQsIHdlIGFkZCAndXNlci1zZWxlY3Q6bm9uZScgYXR0cmlidXRlcyB0byB0aGUgZG9jdW1lbnQgYm9keVxuXHQgICAqIHRvIHByZXZlbnQgdWdseSB0ZXh0IHNlbGVjdGlvbiBkdXJpbmcgZHJhZy4gSWYgdGhpcyBpcyBjYXVzaW5nIHByb2JsZW1zXG5cdCAgICogZm9yIHlvdXIgYXBwLCBzZXQgdGhpcyB0byBgZmFsc2VgLlxuXHQgICAqL1xuXHQgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBwcm9wVHlwZXMuYm9vbCxcblxuXHQgIC8qKlxuXHQgICAqIGBvZmZzZXRQYXJlbnRgLCBpZiBzZXQsIHVzZXMgdGhlIHBhc3NlZCBET00gbm9kZSB0byBjb21wdXRlIGRyYWcgb2Zmc2V0c1xuXHQgICAqIGluc3RlYWQgb2YgdXNpbmcgdGhlIHBhcmVudCBub2RlLlxuXHQgICAqL1xuXHQgIG9mZnNldFBhcmVudDogZnVuY3Rpb24gb2Zmc2V0UGFyZW50KHByb3BzIC8qOiBEcmFnZ2FibGVDb3JlUHJvcHMqLywgcHJvcE5hbWUgLyo6ICRLZXlzPERyYWdnYWJsZUNvcmVQcm9wcz4qLykge1xuXHQgICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGVcXCdzIG9mZnNldFBhcmVudCBtdXN0IGJlIGEgRE9NIE5vZGUuJyk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8qKlxuXHQgICAqIGBncmlkYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCBkcmFnZ2luZyBzaG91bGQgc25hcCB0by5cblx0ICAgKi9cblx0ICBncmlkOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMubnVtYmVyKSxcblxuXHQgIC8qKlxuXHQgICAqIGBzY2FsZWAgc3BlY2lmaWVzIHRoZSBzY2FsZSBvZiB0aGUgYXJlYSB5b3UgYXJlIGRyYWdnaW5nIGluc2lkZSBvZi4gSXQgYWxsb3dzXG5cdCAgICogdGhlIGRyYWcgZGVsdGFzIHRvIHNjYWxlIGNvcnJlY3RseSB3aXRoIGhvdyBmYXIgem9vbWVkIGluL291dCB5b3UgYXJlLlxuXHQgICAqL1xuXHQgIHNjYWxlOiBwcm9wVHlwZXMubnVtYmVyLFxuXG5cdCAgLyoqXG5cdCAgICogYGhhbmRsZWAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCBhcyB0aGUgaGFuZGxlIHRoYXQgaW5pdGlhdGVzIGRyYWcuXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgcmV0dXJuIChcblx0ICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmhhbmRsZVwiPlxuXHQgICAqICAgICAgICAgICAgICA8ZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVcIj5DbGljayBtZSB0byBkcmFnPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXMgc29tZSBvdGhlciBjb250ZW50PC9kaXY+XG5cdCAgICogICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICk7XG5cdCAgICogICAgICAgfVxuXHQgICAqICAgfSk7XG5cdCAgICogYGBgXG5cdCAgICovXG5cdCAgaGFuZGxlOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG5cdCAgLyoqXG5cdCAgICogYGNhbmNlbGAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCB0byBwcmV2ZW50IGRyYWcgaW5pdGlhbGl6YXRpb24uXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgICByZXR1cm4oXG5cdCAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGNhbmNlbD1cIi5jYW5jZWxcIj5cblx0ICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5Zb3UgY2FuJ3QgZHJhZyBmcm9tIGhlcmU8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXY+RHJhZ2dpbmcgaGVyZSB3b3JrcyBmaW5lPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICAgKTtcblx0ICAgKiAgICAgICB9XG5cdCAgICogICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBjYW5jZWw6IHByb3BUeXBlcy5zdHJpbmcsXG5cblx0ICAvKipcblx0ICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdGFydHMuXG5cdCAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IHByb3BUeXBlcy5mdW5jLFxuXG5cdCAgLyoqXG5cdCAgICogQ2FsbGVkIHdoaWxlIGRyYWdnaW5nLlxuXHQgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cblx0ICAgKi9cblx0ICBvbkRyYWc6IHByb3BUeXBlcy5mdW5jLFxuXG5cdCAgLyoqXG5cdCAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RvcHMuXG5cdCAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCB0aGUgZHJhZyB3aWxsIHJlbWFpbiBhY3RpdmUuXG5cdCAgICovXG5cdCAgb25TdG9wOiBwcm9wVHlwZXMuZnVuYyxcblxuXHQgIC8qKlxuXHQgICAqIEEgd29ya2Fyb3VuZCBvcHRpb24gd2hpY2ggY2FuIGJlIHBhc3NlZCBpZiBvbk1vdXNlRG93biBuZWVkcyB0byBiZSBhY2Nlc3NlZCxcblx0ICAgKiBzaW5jZSBpdCdsbCBhbHdheXMgYmUgYmxvY2tlZCAoYXMgdGhlcmUgaXMgaW50ZXJuYWwgdXNlIG9mIG9uTW91c2VEb3duKVxuXHQgICAqL1xuXHQgIG9uTW91c2VEb3duOiBwcm9wVHlwZXMuZnVuYyxcblxuXHQgIC8qKlxuXHQgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cblx0ICAgKi9cblx0ICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcblx0ICBzdHlsZTogZG9udFNldE1lLFxuXHQgIHRyYW5zZm9ybTogZG9udFNldE1lXG5cdH07XG5cdERyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzID0ge1xuXHQgIGFsbG93QW55Q2xpY2s6IGZhbHNlLCAvLyBieSBkZWZhdWx0IG9ubHkgYWNjZXB0IGxlZnQgY2xpY2tcblx0ICBjYW5jZWw6IG51bGwsXG5cdCAgZGlzYWJsZWQ6IGZhbHNlLFxuXHQgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiB0cnVlLFxuXHQgIG9mZnNldFBhcmVudDogbnVsbCxcblx0ICBoYW5kbGU6IG51bGwsXG5cdCAgZ3JpZDogbnVsbCxcblx0ICB0cmFuc2Zvcm06IG51bGwsXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHt9LFxuXHQgIG9uRHJhZzogZnVuY3Rpb24gb25EcmFnKCkge30sXG5cdCAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7fSxcblx0ICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oKSB7fVxuXHR9O1xuXG5cdC8qOjogaW1wb3J0IHR5cGUge0RyYWdnYWJsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi91dGlscy90eXBlcyc7Ki9cblx0Lyo6OiBpbXBvcnQgdHlwZSB7RWxlbWVudCBhcyBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0JzsqL1xuXHQvKjo6IHR5cGUgRHJhZ2dhYmxlU3RhdGUgPSB7XG5cdCAgZHJhZ2dpbmc6IGJvb2xlYW4sXG5cdCAgZHJhZ2dlZDogYm9vbGVhbixcblx0ICB4OiBudW1iZXIsIHk6IG51bWJlcixcblx0ICBzbGFja1g6IG51bWJlciwgc2xhY2tZOiBudW1iZXIsXG5cdCAgaXNFbGVtZW50U1ZHOiBib29sZWFuXG5cdH07Ki9cblxuXG5cdC8vXG5cdC8vIERlZmluZSA8RHJhZ2dhYmxlPlxuXHQvL1xuXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG5cdCAgLi4uJEV4YWN0PERyYWdnYWJsZUNvcmVQcm9wcz4sXG5cdCAgYXhpczogJ2JvdGgnIHwgJ3gnIHwgJ3knIHwgJ25vbmUnLFxuXHQgIGJvdW5kczogRHJhZ2dhYmxlQm91bmRzIHwgc3RyaW5nIHwgZmFsc2UsXG5cdCAgZGVmYXVsdENsYXNzTmFtZTogc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBzdHJpbmcsXG5cdCAgZGVmYXVsdFBvc2l0aW9uOiBDb250cm9sUG9zaXRpb24sXG5cdCAgcG9zaXRpb25PZmZzZXQ6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uLFxuXHQgIHBvc2l0aW9uOiBDb250cm9sUG9zaXRpb24sXG5cdCAgc2NhbGU6IG51bWJlclxuXHR9OyovXG5cblx0dmFyIERyYWdnYWJsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgaW5oZXJpdHMoRHJhZ2dhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQgIGZ1bmN0aW9uIERyYWdnYWJsZShwcm9wcyAvKjogRHJhZ2dhYmxlUHJvcHMqLykge1xuXHQgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ2dhYmxlKTtcblxuXHQgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJhZ2dhYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJhZ2dhYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdCAgICBfdGhpcy5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uIChlLCBjb3JlRGF0YSkge1xuXG5cdCAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblx0ICAgICAgdmFyIHNob3VsZFN0YXJ0ID0gX3RoaXMucHJvcHMub25TdGFydChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKF90aGlzLCBjb3JlRGF0YSkpO1xuXHQgICAgICAvLyBLaWxscyBzdGFydCBldmVudCBvbiBjb3JlIGFzIHdlbGwsIHNvIG1vdmUgaGFuZGxlcnMgYXJlIG5ldmVyIGJvdW5kLlxuXHQgICAgICBpZiAoc2hvdWxkU3RhcnQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoeyBkcmFnZ2luZzogdHJ1ZSwgZHJhZ2dlZDogdHJ1ZSB9KTtcblx0ICAgIH07XG5cblx0ICAgIF90aGlzLm9uRHJhZyA9IGZ1bmN0aW9uIChlLCBjb3JlRGF0YSkge1xuXHQgICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgdmFyIHVpRGF0YSA9IGNyZWF0ZURyYWdnYWJsZURhdGEoX3RoaXMsIGNvcmVEYXRhKTtcblxuXHQgICAgICB2YXIgbmV3U3RhdGUgLyo6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4qLyA9IHtcblx0ICAgICAgICB4OiB1aURhdGEueCxcblx0ICAgICAgICB5OiB1aURhdGEueVxuXHQgICAgICB9O1xuXG5cdCAgICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kcy5cblx0ICAgICAgaWYgKF90aGlzLnByb3BzLmJvdW5kcykge1xuXHQgICAgICAgIC8vIFNhdmUgb3JpZ2luYWwgeCBhbmQgeS5cblx0ICAgICAgICB2YXIgX3ggPSBuZXdTdGF0ZS54LFxuXHQgICAgICAgICAgICBfeSA9IG5ld1N0YXRlLnk7XG5cblx0ICAgICAgICAvLyBBZGQgc2xhY2sgdG8gdGhlIHZhbHVlcyB1c2VkIHRvIGNhbGN1bGF0ZSBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGlmXG5cdCAgICAgICAgLy8gd2Ugc3RhcnQgcmVtb3Zpbmcgc2xhY2ssIHRoZSBlbGVtZW50IHdvbid0IHJlYWN0IHRvIGl0IHJpZ2h0IGF3YXkgdW50aWwgaXQncyBiZWVuXG5cdCAgICAgICAgLy8gY29tcGxldGVseSByZW1vdmVkLlxuXG5cdCAgICAgICAgbmV3U3RhdGUueCArPSBfdGhpcy5zdGF0ZS5zbGFja1g7XG5cdCAgICAgICAgbmV3U3RhdGUueSArPSBfdGhpcy5zdGF0ZS5zbGFja1k7XG5cblx0ICAgICAgICAvLyBHZXQgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBjZWlsL2Zsb29yIHRoZSB4IGFuZCB5IHdpdGhpbiB0aGUgYm91bmRhcmllcy5cblxuXHQgICAgICAgIHZhciBfZ2V0Qm91bmRQb3NpdGlvbiA9IGdldEJvdW5kUG9zaXRpb24oX3RoaXMsIG5ld1N0YXRlLngsIG5ld1N0YXRlLnkpLFxuXHQgICAgICAgICAgICBfZ2V0Qm91bmRQb3NpdGlvbjIgPSBzbGljZWRUb0FycmF5KF9nZXRCb3VuZFBvc2l0aW9uLCAyKSxcblx0ICAgICAgICAgICAgbmV3U3RhdGVYID0gX2dldEJvdW5kUG9zaXRpb24yWzBdLFxuXHQgICAgICAgICAgICBuZXdTdGF0ZVkgPSBfZ2V0Qm91bmRQb3NpdGlvbjJbMV07XG5cblx0ICAgICAgICBuZXdTdGF0ZS54ID0gbmV3U3RhdGVYO1xuXHQgICAgICAgIG5ld1N0YXRlLnkgPSBuZXdTdGF0ZVk7XG5cblx0ICAgICAgICAvLyBSZWNhbGN1bGF0ZSBzbGFjayBieSBub3RpbmcgaG93IG11Y2ggd2FzIHNoYXZlZCBieSB0aGUgYm91bmRQb3NpdGlvbiBoYW5kbGVyLlxuXHQgICAgICAgIG5ld1N0YXRlLnNsYWNrWCA9IF90aGlzLnN0YXRlLnNsYWNrWCArIChfeCAtIG5ld1N0YXRlLngpO1xuXHQgICAgICAgIG5ld1N0YXRlLnNsYWNrWSA9IF90aGlzLnN0YXRlLnNsYWNrWSArIChfeSAtIG5ld1N0YXRlLnkpO1xuXG5cdCAgICAgICAgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxuXHQgICAgICAgIHVpRGF0YS54ID0gbmV3U3RhdGUueDtcblx0ICAgICAgICB1aURhdGEueSA9IG5ld1N0YXRlLnk7XG5cdCAgICAgICAgdWlEYXRhLmRlbHRhWCA9IG5ld1N0YXRlLnggLSBfdGhpcy5zdGF0ZS54O1xuXHQgICAgICAgIHVpRGF0YS5kZWx0YVkgPSBuZXdTdGF0ZS55IC0gX3RoaXMuc3RhdGUueTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblx0ICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uRHJhZyhlLCB1aURhdGEpO1xuXHQgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0ICAgIH07XG5cblx0ICAgIF90aGlzLm9uRHJhZ1N0b3AgPSBmdW5jdGlvbiAoZSwgY29yZURhdGEpIHtcblx0ICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblx0ICAgICAgdmFyIHNob3VsZFN0b3AgPSBfdGhpcy5wcm9wcy5vblN0b3AoZSwgY3JlYXRlRHJhZ2dhYmxlRGF0YShfdGhpcywgY29yZURhdGEpKTtcblx0ICAgICAgaWYgKHNob3VsZFN0b3AgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgdmFyIG5ld1N0YXRlIC8qOiAkU2hhcGU8RHJhZ2dhYmxlU3RhdGU+Ki8gPSB7XG5cdCAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuXHQgICAgICAgIHNsYWNrWDogMCxcblx0ICAgICAgICBzbGFja1k6IDBcblx0ICAgICAgfTtcblxuXHQgICAgICAvLyBJZiB0aGlzIGlzIGEgY29udHJvbGxlZCBjb21wb25lbnQsIHRoZSByZXN1bHQgb2YgdGhpcyBvcGVyYXRpb24gd2lsbCBiZSB0b1xuXHQgICAgICAvLyByZXZlcnQgYmFjayB0byB0aGUgb2xkIHBvc2l0aW9uLiBXZSBleHBlY3QgYSBoYW5kbGVyIG9uIGBvbkRyYWdTdG9wYCwgYXQgdGhlIGxlYXN0LlxuXHQgICAgICB2YXIgY29udHJvbGxlZCA9IEJvb2xlYW4oX3RoaXMucHJvcHMucG9zaXRpb24pO1xuXHQgICAgICBpZiAoY29udHJvbGxlZCkge1xuXHQgICAgICAgIHZhciBfdGhpcyRwcm9wcyRwb3NpdGlvbiA9IF90aGlzLnByb3BzLnBvc2l0aW9uLFxuXHQgICAgICAgICAgICBfeDIgPSBfdGhpcyRwcm9wcyRwb3NpdGlvbi54LFxuXHQgICAgICAgICAgICBfeTIgPSBfdGhpcyRwcm9wcyRwb3NpdGlvbi55O1xuXG5cdCAgICAgICAgbmV3U3RhdGUueCA9IF94Mjtcblx0ICAgICAgICBuZXdTdGF0ZS55ID0gX3kyO1xuXHQgICAgICB9XG5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHQgICAgfTtcblxuXHQgICAgX3RoaXMuc3RhdGUgPSB7XG5cdCAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBjdXJyZW50bHkgZHJhZ2dpbmcuXG5cdCAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblxuXHQgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGJlZW4gZHJhZ2dlZCBiZWZvcmUuXG5cdCAgICAgIGRyYWdnZWQ6IGZhbHNlLFxuXG5cdCAgICAgIC8vIEN1cnJlbnQgdHJhbnNmb3JtIHggYW5kIHkuXG5cdCAgICAgIHg6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueCA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi54LFxuXHQgICAgICB5OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnkgOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueSxcblxuXHQgICAgICAvLyBVc2VkIGZvciBjb21wZW5zYXRpbmcgZm9yIG91dC1vZi1ib3VuZHMgZHJhZ3Ncblx0ICAgICAgc2xhY2tYOiAwLCBzbGFja1k6IDAsXG5cblx0ICAgICAgLy8gQ2FuIG9ubHkgZGV0ZXJtaW5lIGlmIFNWRyBhZnRlciBtb3VudGluZ1xuXHQgICAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXG5cdCAgICB9O1xuXG5cdCAgICBpZiAocHJvcHMucG9zaXRpb24gJiYgIShwcm9wcy5vbkRyYWcgfHwgcHJvcHMub25TdG9wKSkge1xuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHQgICAgICBjb25zb2xlLndhcm4oJ0EgYHBvc2l0aW9uYCB3YXMgYXBwbGllZCB0byB0aGlzIDxEcmFnZ2FibGU+LCB3aXRob3V0IGRyYWcgaGFuZGxlcnMuIFRoaXMgd2lsbCBtYWtlIHRoaXMgJyArICdjb21wb25lbnQgZWZmZWN0aXZlbHkgdW5kcmFnZ2FibGUuIFBsZWFzZSBhdHRhY2ggYG9uRHJhZ2Agb3IgYG9uU3RvcGAgaGFuZGxlcnMgc28geW91IGNhbiBhZGp1c3QgdGhlICcgKyAnYHBvc2l0aW9uYCBvZiB0aGlzIGVsZW1lbnQuJyk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gX3RoaXM7XG5cdCAgfVxuXG5cdCAgY3JlYXRlQ2xhc3MoRHJhZ2dhYmxlLCBbe1xuXHQgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHQgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGVsZW1lbnQgcGFzc2VkIGlzIGFuIGluc3RhbmNlb2YgU1ZHRWxlbWVudFxuXHQgICAgICBpZiAodHlwZW9mIHdpbmRvdy5TVkdFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KSB7XG5cdCAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWxlbWVudFNWRzogdHJ1ZSB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzIC8qOiBPYmplY3QqLykge1xuXHQgICAgICAvLyBTZXQgeC95IGlmIHBvc2l0aW9uIGhhcyBjaGFuZ2VkXG5cdCAgICAgIGlmIChuZXh0UHJvcHMucG9zaXRpb24gJiYgKCF0aGlzLnByb3BzLnBvc2l0aW9uIHx8IG5leHRQcm9wcy5wb3NpdGlvbi54ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnggfHwgbmV4dFByb3BzLnBvc2l0aW9uLnkgIT09IHRoaXMucHJvcHMucG9zaXRpb24ueSkpIHtcblx0ICAgICAgICB0aGlzLnNldFN0YXRlKHsgeDogbmV4dFByb3BzLnBvc2l0aW9uLngsIHk6IG5leHRQcm9wcy5wb3NpdGlvbi55IH0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHQgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dpbmc6IGZhbHNlIH0pOyAvLyBwcmV2ZW50cyBpbnZhcmlhbnQgaWYgdW5tb3VudGVkIHdoaWxlIGRyYWdnaW5nXG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSAvKjogUmVhY3RFbGVtZW50PGFueT4qLyB7XG5cdCAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuXHQgICAgICB2YXIgc3R5bGUgPSB7fSxcblx0ICAgICAgICAgIHN2Z1RyYW5zZm9ybSA9IG51bGw7XG5cblx0ICAgICAgLy8gSWYgdGhpcyBpcyBjb250cm9sbGVkLCB3ZSBkb24ndCB3YW50IHRvIG1vdmUgaXQgLSB1bmxlc3MgaXQncyBkcmFnZ2luZy5cblx0ICAgICAgdmFyIGNvbnRyb2xsZWQgPSBCb29sZWFuKHRoaXMucHJvcHMucG9zaXRpb24pO1xuXHQgICAgICB2YXIgZHJhZ2dhYmxlID0gIWNvbnRyb2xsZWQgfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZztcblxuXHQgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnByb3BzLnBvc2l0aW9uIHx8IHRoaXMucHJvcHMuZGVmYXVsdFBvc2l0aW9uO1xuXHQgICAgICB2YXIgdHJhbnNmb3JtT3B0cyA9IHtcblx0ICAgICAgICAvLyBTZXQgbGVmdCBpZiBob3Jpem9udGFsIGRyYWcgaXMgZW5hYmxlZFxuXHQgICAgICAgIHg6IGNhbkRyYWdYKHRoaXMpICYmIGRyYWdnYWJsZSA/IHRoaXMuc3RhdGUueCA6IHBvc2l0aW9uLngsXG5cblx0ICAgICAgICAvLyBTZXQgdG9wIGlmIHZlcnRpY2FsIGRyYWcgaXMgZW5hYmxlZFxuXHQgICAgICAgIHk6IGNhbkRyYWdZKHRoaXMpICYmIGRyYWdnYWJsZSA/IHRoaXMuc3RhdGUueSA6IHBvc2l0aW9uLnlcblx0ICAgICAgfTtcblxuXHQgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgd2FzIFNWRywgd2UgdXNlIHRoZSBgdHJhbnNmb3JtYCBhdHRyaWJ1dGUuXG5cdCAgICAgIGlmICh0aGlzLnN0YXRlLmlzRWxlbWVudFNWRykge1xuXHQgICAgICAgIHN2Z1RyYW5zZm9ybSA9IGNyZWF0ZVNWR1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzLCB0aGlzLnByb3BzLnBvc2l0aW9uT2Zmc2V0KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvLyBBZGQgYSBDU1MgdHJhbnNmb3JtIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kLiBUaGlzIGFsbG93cyB1cyB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZFxuXHQgICAgICAgIC8vIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgd2hldGhlciBvciBub3QgaXQgaXMgcmVsYXRpdmVseSBvciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuXG5cdCAgICAgICAgLy8gSWYgdGhlIGl0ZW0geW91IGFyZSBkcmFnZ2luZyBhbHJlYWR5IGhhcyBhIHRyYW5zZm9ybSBzZXQsIHdyYXAgaXQgaW4gYSA8c3Bhbj4gc28gPERyYWdnYWJsZT5cblx0ICAgICAgICAvLyBoYXMgYSBjbGVhbiBzbGF0ZS5cblx0ICAgICAgICBzdHlsZSA9IGNyZWF0ZUNTU1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzLCB0aGlzLnByb3BzLnBvc2l0aW9uT2Zmc2V0KTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHQgICAgICAgICAgZGVmYXVsdENsYXNzTmFtZSA9IF9wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lLFxuXHQgICAgICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nID0gX3Byb3BzLmRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyxcblx0ICAgICAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkID0gX3Byb3BzLmRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkO1xuXG5cblx0ICAgICAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuXHQgICAgICAvLyBNYXJrIHdpdGggY2xhc3Mgd2hpbGUgZHJhZ2dpbmdcblx0ICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoY2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lIHx8ICcnLCBkZWZhdWx0Q2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZywgdGhpcy5zdGF0ZS5kcmFnZ2luZyksIGRlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCwgdGhpcy5zdGF0ZS5kcmFnZ2VkKSwgX2NsYXNzTmFtZXMpKTtcblxuXHQgICAgICAvLyBSZXVzZSB0aGUgY2hpbGQgcHJvdmlkZWRcblx0ICAgICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0Yylcblx0ICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgRHJhZ2dhYmxlQ29yZSxcblx0ICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBvblN0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LCBvbkRyYWc6IHRoaXMub25EcmFnLCBvblN0b3A6IHRoaXMub25EcmFnU3RvcCB9KSxcblx0ICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcblx0ICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHQgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjaGlsZHJlbi5wcm9wcy5zdHlsZSwgc3R5bGUpLFxuXHQgICAgICAgICAgdHJhbnNmb3JtOiBzdmdUcmFuc2Zvcm1cblx0ICAgICAgICB9KVxuXHQgICAgICApO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0ICByZXR1cm4gRHJhZ2dhYmxlO1xuXHR9KFJlYWN0LkNvbXBvbmVudCk7XG5cblx0RHJhZ2dhYmxlLmRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZSc7XG5cdERyYWdnYWJsZS5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgRHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMsIHtcblxuXHQgIC8qKlxuXHQgICAqIGBheGlzYCBkZXRlcm1pbmVzIHdoaWNoIGF4aXMgdGhlIGRyYWdnYWJsZSBjYW4gbW92ZS5cblx0ICAgKlxuXHQgICAqICBOb3RlIHRoYXQgYWxsIGNhbGxiYWNrcyB3aWxsIHN0aWxsIHJldHVybiBkYXRhIGFzIG5vcm1hbC4gVGhpcyBvbmx5XG5cdCAgICogIGNvbnRyb2xzIGZsdXNoaW5nIHRvIHRoZSBET00uXG5cdCAgICpcblx0ICAgKiAnYm90aCcgYWxsb3dzIG1vdmVtZW50IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS5cblx0ICAgKiAneCcgbGltaXRzIG1vdmVtZW50IHRvIGhvcml6b250YWwgYXhpcy5cblx0ICAgKiAneScgbGltaXRzIG1vdmVtZW50IHRvIHZlcnRpY2FsIGF4aXMuXG5cdCAgICogJ25vbmUnIGxpbWl0cyBhbGwgbW92ZW1lbnQuXG5cdCAgICpcblx0ICAgKiBEZWZhdWx0cyB0byAnYm90aCcuXG5cdCAgICovXG5cdCAgYXhpczogcHJvcFR5cGVzLm9uZU9mKFsnYm90aCcsICd4JywgJ3knLCAnbm9uZSddKSxcblxuXHQgIC8qKlxuXHQgICAqIGBib3VuZHNgIGRldGVybWluZXMgdGhlIHJhbmdlIG9mIG1vdmVtZW50IGF2YWlsYWJsZSB0byB0aGUgZWxlbWVudC5cblx0ICAgKiBBdmFpbGFibGUgdmFsdWVzIGFyZTpcblx0ICAgKlxuXHQgICAqICdwYXJlbnQnIHJlc3RyaWN0cyBtb3ZlbWVudCB3aXRoaW4gdGhlIERyYWdnYWJsZSdzIHBhcmVudCBub2RlLlxuXHQgICAqXG5cdCAgICogQWx0ZXJuYXRpdmVseSwgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMsIGFsbCBvZiB3aGljaCBhcmUgb3B0aW9uYWw6XG5cdCAgICpcblx0ICAgKiB7bGVmdDogTEVGVF9CT1VORCwgcmlnaHQ6IFJJR0hUX0JPVU5ELCBib3R0b206IEJPVFRPTV9CT1VORCwgdG9wOiBUT1BfQk9VTkR9XG5cdCAgICpcblx0ICAgKiBBbGwgdmFsdWVzIGFyZSBpbiBweC5cblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICByZXR1cm4gKFxuXHQgICAqICAgICAgICAgICAgPERyYWdnYWJsZSBib3VuZHM9e3tyaWdodDogMzAwLCBib3R0b206IDMwMH19PlxuXHQgICAqICAgICAgICAgICAgICA8ZGl2PkNvbnRlbnQ8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG5cdCAgICogICAgICAgICApO1xuXHQgICAqICAgICAgIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqIGBgYFxuXHQgICAqL1xuXHQgIGJvdW5kczogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnNoYXBlKHtcblx0ICAgIGxlZnQ6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICByaWdodDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHRvcDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIGJvdHRvbTogcHJvcFR5cGVzLm51bWJlclxuXHQgIH0pLCBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub25lT2YoW2ZhbHNlXSldKSxcblxuXHQgIGRlZmF1bHRDbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG5cdCAgLyoqXG5cdCAgICogYGRlZmF1bHRQb3NpdGlvbmAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgdGhlIGRyYWdnZWQgaXRlbSBzaG91bGQgc3RhcnQgYXRcblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICAgICAgIHJldHVybiAoXG5cdCAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGRlZmF1bHRQb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICAgICAgKTtcblx0ICAgKiAgICAgICAgICB9XG5cdCAgICogICAgICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBkZWZhdWx0UG9zaXRpb246IHByb3BUeXBlcy5zaGFwZSh7XG5cdCAgICB4OiBwcm9wVHlwZXMubnVtYmVyLFxuXHQgICAgeTogcHJvcFR5cGVzLm51bWJlclxuXHQgIH0pLFxuXHQgIHBvc2l0aW9uT2Zmc2V0OiBwcm9wVHlwZXMuc2hhcGUoe1xuXHQgICAgeDogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZ10pLFxuXHQgICAgeTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZ10pXG5cdCAgfSksXG5cblx0ICAvKipcblx0ICAgKiBgcG9zaXRpb25gLCBpZiBwcmVzZW50LCBkZWZpbmVzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LlxuXHQgICAqXG5cdCAgICogIFRoaXMgaXMgc2ltaWxhciB0byBob3cgZm9ybSBlbGVtZW50cyBpbiBSZWFjdCB3b3JrIC0gaWYgbm8gYHBvc2l0aW9uYCBpcyBzdXBwbGllZCwgdGhlIGNvbXBvbmVudFxuXHQgICAqICBpcyB1bmNvbnRyb2xsZWQuXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICAgICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgICAgICByZXR1cm4gKFxuXHQgICAqICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBwb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICAgICAgKTtcblx0ICAgKiAgICAgICAgICB9XG5cdCAgICogICAgICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBwb3NpdGlvbjogcHJvcFR5cGVzLnNoYXBlKHtcblx0ICAgIHg6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICB5OiBwcm9wVHlwZXMubnVtYmVyXG5cdCAgfSksXG5cblx0ICAvKipcblx0ICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG5cdCAgICovXG5cdCAgY2xhc3NOYW1lOiBkb250U2V0TWUsXG5cdCAgc3R5bGU6IGRvbnRTZXRNZSxcblx0ICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxuXHR9KTtcblx0RHJhZ2dhYmxlLmRlZmF1bHRQcm9wcyA9IF9leHRlbmRzKHt9LCBEcmFnZ2FibGVDb3JlLmRlZmF1bHRQcm9wcywge1xuXHQgIGF4aXM6ICdib3RoJyxcblx0ICBib3VuZHM6IGZhbHNlLFxuXHQgIGRlZmF1bHRDbGFzc05hbWU6ICdyZWFjdC1kcmFnZ2FibGUnLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZycsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6ICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dlZCcsXG5cdCAgZGVmYXVsdFBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcblx0ICBwb3NpdGlvbjogbnVsbCxcblx0ICBzY2FsZTogMVxuXHR9KTtcblxuXHQvLyBQcmV2aW91cyB2ZXJzaW9ucyBvZiB0aGlzIGxpYiBleHBvcnRlZCA8RHJhZ2dhYmxlPiBhcyB0aGUgcm9vdCBleHBvcnQuIEFzIHRvIG5vdCBicmVha1xuXHQvLyB0aGVtLCBvciBUeXBlU2NyaXB0LCB3ZSBleHBvcnQgKmJvdGgqIGFzIHRoZSByb290IGFuZCBhcyAnZGVmYXVsdCcuXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvcHVsbC8yNTRcblx0Ly8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9pc3N1ZXMvMjY2XG5cdERyYWdnYWJsZS5kZWZhdWx0ID0gRHJhZ2dhYmxlO1xuXHREcmFnZ2FibGUuRHJhZ2dhYmxlQ29yZSA9IERyYWdnYWJsZUNvcmU7XG5cblx0cmV0dXJuIERyYWdnYWJsZTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LWRyYWdnYWJsZS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kcmFnZ2FibGUvZGlzdC9yZWFjdC1kcmFnZ2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDgzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHJlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRHJhZ2dhYmxlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3JlYWN0LWRyYWdnYWJsZScpKTtcbnZhciBSZXNpemFibGUgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncmUtcmVzaXphYmxlJykpO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciByZXNpemFibGVTdHlsZSA9IHtcbiAgd2lkdGg6ICdhdXRvJyxcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwXG59O1xuXG52YXIgUm5kID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoUm5kLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSbmQocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBSbmQpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUm5kLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUm5kKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB6OiBwcm9wcy56LFxuICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIGJvdW5kczoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG4gICAgICBtYXhXaWR0aDogcHJvcHMubWF4V2lkdGgsXG4gICAgICBtYXhIZWlnaHQ6IHByb3BzLm1heEhlaWdodCxcbiAgICAgIGlzTW91bnRlZDogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uUmVzaXplU3RhcnQgPSBfdGhpcy5vblJlc2l6ZVN0YXJ0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uUmVzaXplID0gX3RoaXMub25SZXNpemUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25SZXNpemVTdG9wID0gX3RoaXMub25SZXNpemVTdG9wLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZ1N0YXJ0ID0gX3RoaXMub25EcmFnU3RhcnQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnID0gX3RoaXMub25EcmFnLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZ1N0b3AgPSBfdGhpcy5vbkRyYWdTdG9wLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmdldE1heFNpemVzRnJvbVByb3BzID0gX3RoaXMuZ2V0TWF4U2l6ZXNGcm9tUHJvcHMuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUm5kLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMueiAhPT0gbmV4dFByb3BzLnopIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHo6IG5leHRQcm9wcy56IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFBhcmVudFBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UGFyZW50U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcmVudFNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNpemFibGUuZ2V0UGFyZW50U2l6ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1heFNpemVzRnJvbVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWF4U2l6ZXNGcm9tUHJvcHMoKSB7XG4gICAgICB2YXIgbWF4V2lkdGggPSB0eXBlb2YgdGhpcy5wcm9wcy5tYXhXaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IHRoaXMucHJvcHMubWF4V2lkdGg7XG4gICAgICB2YXIgbWF4SGVpZ2h0ID0gdHlwZW9mIHRoaXMucHJvcHMubWF4SGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG4gICAgICByZXR1cm4geyBtYXhXaWR0aDogbWF4V2lkdGgsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2VsZkVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxmRWxlbWVudCgpIHtcbiAgICAgIGlmICghdGhpcykgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gcmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UGFyZW50UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXJlbnRQb3NpdGlvbigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRTZWxmRWxlbWVudCgpO1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGlmICghcGFyZW50IHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vdW50ZWQ6IHRydWUgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vdW50ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdGFydChlLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdTdGFydCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KGUsIGRhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnByb3BzLmJvdW5kcykgcmV0dXJuO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucmVzaXphYmxlICYmIHRoaXMucmVzaXphYmxlLnBhcmVudE5vZGU7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy5ib3VuZHMgPT09ICdwYXJlbnQnID8gcGFyZW50IDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnByb3BzLmJvdW5kcyk7XG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgdGFyZ2V0TGVmdCA9IHRhcmdldFJlY3QubGVmdDtcbiAgICAgIHZhciB0YXJnZXRUb3AgPSB0YXJnZXRSZWN0LnRvcDtcbiAgICAgIHZhciBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHBhcmVudExlZnQgPSBwYXJlbnRSZWN0LmxlZnQ7XG4gICAgICB2YXIgcGFyZW50VG9wID0gcGFyZW50UmVjdC50b3A7XG4gICAgICB2YXIgbGVmdCA9IHRhcmdldExlZnQgLSBwYXJlbnRMZWZ0O1xuICAgICAgdmFyIHRvcCA9IHRhcmdldFRvcCAtIHBhcmVudFRvcDtcbiAgICAgIGlmICghdGhpcy5yZXNpemFibGUpIHJldHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBib3VuZHM6IHtcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICByaWdodDogbGVmdCArICh0YXJnZXQub2Zmc2V0V2lkdGggLSB0aGlzLnJlc2l6YWJsZS5zaXplLndpZHRoKSxcbiAgICAgICAgICBib3R0b206IHRoaXMucHJvcHMuX2ZyZWVCb3R0b21Cb3VuZHMgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgID8gMjE0NzQ4MzY0NyA6IHRvcCArICh0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdGhpcy5yZXNpemFibGUuc2l6ZS5oZWlnaHQpLFxuICAgICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnKGUsIGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZykge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZyhlLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdTdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnU3RvcChlLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdTdG9wKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnU3RvcChlLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvblJlc2l6ZVN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVTdGFydChlLCBkaXIsIHJlZlRvRWxlbWVudCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcmlnaW5hbDogeyB4OiB0aGlzLmRyYWdnYWJsZS5zdGF0ZS54LCB5OiB0aGlzLmRyYWdnYWJsZS5zdGF0ZS55IH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMuYm91bmRzKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnJlc2l6YWJsZSAmJiB0aGlzLnJlc2l6YWJsZS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy5ib3VuZHMgPT09ICdwYXJlbnQnID8gcGFyZW50IDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnByb3BzLmJvdW5kcyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcy5nZXRTZWxmRWxlbWVudCgpO1xuICAgICAgICBpZiAoc2VsZiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgX2dldE1heFNpemVzRnJvbVByb3BzID0gdGhpcy5nZXRNYXhTaXplc0Zyb21Qcm9wcygpLFxuICAgICAgICAgICAgICBfbWF4V2lkdGggPSBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgIF9tYXhIZWlnaHQgPSBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMubWF4SGVpZ2h0O1xuXG4gICAgICAgICAgdmFyIHBhcmVudFNpemUgPSB0aGlzLmdldFBhcmVudFNpemUoKTtcbiAgICAgICAgICBpZiAoX21heFdpZHRoICYmIHR5cGVvZiBfbWF4V2lkdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoX21heFdpZHRoLmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgICAgICAgdmFyIHJhdGlvID0gTnVtYmVyKF9tYXhXaWR0aC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgICAgX21heFdpZHRoID0gcGFyZW50U2l6ZS53aWR0aCAqIHJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4V2lkdGguZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgICAgICAgX21heFdpZHRoID0gTnVtYmVyKF9tYXhXaWR0aC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfbWF4SGVpZ2h0ICYmIHR5cGVvZiBfbWF4SGVpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKF9tYXhIZWlnaHQuZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgICB2YXIgX3JhdGlvID0gTnVtYmVyKF9tYXhIZWlnaHQucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgICAgICAgIF9tYXhIZWlnaHQgPSBwYXJlbnRTaXplLndpZHRoICogX3JhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4SGVpZ2h0LmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICAgIF9tYXhIZWlnaHQgPSBOdW1iZXIoX21heEhlaWdodC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzZWxmUmVjdCA9IHNlbGYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHNlbGZMZWZ0ID0gc2VsZlJlY3QubGVmdDtcbiAgICAgICAgICB2YXIgc2VsZlRvcCA9IHNlbGZSZWN0LnRvcDtcbiAgICAgICAgICB2YXIgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgdGFyZ2V0TGVmdCA9IHRhcmdldFJlY3QubGVmdDtcbiAgICAgICAgICB2YXIgdGFyZ2V0VG9wID0gdGFyZ2V0UmVjdC50b3A7XG4gICAgICAgICAgaWYgKC9sZWZ0L2kudGVzdChkaXIpICYmIHRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICB2YXIgbWF4ID0gc2VsZkxlZnQgLSB0YXJnZXRMZWZ0ICsgdGhpcy5yZXNpemFibGUuc2l6ZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXhXaWR0aDogbWF4ID4gTnVtYmVyKF9tYXhXaWR0aCkgPyBfbWF4V2lkdGggOiBtYXggfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgvcmlnaHQvaS50ZXN0KGRpcikpIHtcbiAgICAgICAgICAgIHZhciBfbWF4ID0gdGFyZ2V0Lm9mZnNldFdpZHRoICsgKHRhcmdldExlZnQgLSBzZWxmTGVmdCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF4V2lkdGg6IF9tYXggPiBOdW1iZXIoX21heFdpZHRoKSA/IF9tYXhXaWR0aCA6IF9tYXggfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgvdG9wL2kudGVzdChkaXIpICYmIHRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICB2YXIgX21heDIgPSBzZWxmVG9wIC0gdGFyZ2V0VG9wICsgdGhpcy5yZXNpemFibGUuc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBfbWF4MiA+IE51bWJlcihfbWF4SGVpZ2h0KSA/IF9tYXhIZWlnaHQgOiBfbWF4MlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgvYm90dG9tL2kudGVzdChkaXIpKSB7XG4gICAgICAgICAgICB2YXIgX21heDMgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0ICsgKHRhcmdldFRvcCAtIHNlbGZUb3ApO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1heEhlaWdodDogX21heDMgPiBOdW1iZXIoX21heEhlaWdodCkgPyBfbWF4SGVpZ2h0IDogX21heDNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLnByb3BzLm1heEhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGUsIGRpciwgcmVmVG9FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvblJlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplKGUsIGRpcmVjdGlvbiwgcmVmVG9SZXNpemFibGVFbGVtZW50LCBkZWx0YSkge1xuICAgICAgdmFyIHggPSB2b2lkIDA7XG4gICAgICB2YXIgeSA9IHZvaWQgMDtcbiAgICAgIGlmICgvbGVmdC9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICB4ID0gdGhpcy5zdGF0ZS5vcmlnaW5hbC54IC0gZGVsdGEud2lkdGg7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLnNldFN0YXRlKHsgeDogeCB9KTtcbiAgICAgIH1cbiAgICAgIGlmICgvdG9wL2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIHkgPSB0aGlzLnN0YXRlLm9yaWdpbmFsLnkgLSBkZWx0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLnNldFN0YXRlKHsgeTogeSB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemUoZSwgZGlyZWN0aW9uLCByZWZUb1Jlc2l6YWJsZUVsZW1lbnQsIGRlbHRhLCB7XG4gICAgICAgICAgeDogeCB8fCB0aGlzLmRyYWdnYWJsZS5zdGF0ZS54LFxuICAgICAgICAgIHk6IHkgfHwgdGhpcy5kcmFnZ2FibGUuc3RhdGUueVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvblJlc2l6ZVN0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZVN0b3AoZSwgZGlyZWN0aW9uLCByZWZUb1Jlc2l6YWJsZUVsZW1lbnQsIGRlbHRhKSB7XG4gICAgICB2YXIgX2dldE1heFNpemVzRnJvbVByb3BzMiA9IHRoaXMuZ2V0TWF4U2l6ZXNGcm9tUHJvcHMoKSxcbiAgICAgICAgICBtYXhXaWR0aCA9IF9nZXRNYXhTaXplc0Zyb21Qcm9wczIubWF4V2lkdGgsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX2dldE1heFNpemVzRnJvbVByb3BzMi5tYXhIZWlnaHQ7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXhXaWR0aDogbWF4V2lkdGgsIG1heEhlaWdodDogbWF4SGVpZ2h0IH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVTdG9wKSB7XG4gICAgICAgIHZhciBfcG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogdGhpcy5kcmFnZ2FibGUuc3RhdGUueCxcbiAgICAgICAgICB5OiB0aGlzLmRyYWdnYWJsZS5zdGF0ZS55XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemVTdG9wKGUsIGRpcmVjdGlvbiwgcmVmVG9SZXNpemFibGVFbGVtZW50LCBkZWx0YSwgX3Bvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZShzaXplKSB7XG4gICAgICBpZiAoIXRoaXMucmVzaXphYmxlKSByZXR1cm47XG4gICAgICB0aGlzLnJlc2l6YWJsZS51cGRhdGVTaXplKHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgdGhpcy5kcmFnZ2FibGUuc2V0U3RhdGUocG9zaXRpb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVpJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVpJbmRleCh6KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgejogeiB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGN1cnNvclN0eWxlID0gdGhpcy5wcm9wcy5kaXNhYmxlRHJhZ2dpbmcgfHwgdGhpcy5wcm9wcy5kcmFnSGFuZGxlQ2xhc3NOYW1lID8geyBjdXJzb3I6ICdub3JtYWwnIH0gOiB7IGN1cnNvcjogJ21vdmUnIH07XG4gICAgICB2YXIgaW5uZXJTdHlsZSA9IF9leHRlbmRzKHt9LCByZXNpemFibGVTdHlsZSwge1xuICAgICAgICB6SW5kZXg6IHRoaXMuc3RhdGUuelxuICAgICAgfSwgY3Vyc29yU3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xuICAgICAgLy8gSEFDSzogV2FpdCBmb3Igc2V0dGluZyByZWxhdGl2ZSB0byBwYXJlbnQgZWxlbWVudC5cbiAgICAgIGlmICghdGhpcy5zdGF0ZS5pc01vdW50ZWQpIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKTtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSB0aGlzLnByb3BzLl9mcmVlQm90dG9tQm91bmRzID8gMjE0NzQ4MzY0NyA6IHRoaXMuc3RhdGUubWF4SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRHJhZ2dhYmxlLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgX3RoaXMyLmRyYWdnYWJsZSA9IGM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoYW5kbGU6IHRoaXMucHJvcHMuZHJhZ0hhbmRsZUNsYXNzTmFtZSxcbiAgICAgICAgICBkZWZhdWx0UG9zaXRpb246IHRoaXMucHJvcHMuZGVmYXVsdCxcbiAgICAgICAgICBvblN0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICAgIG9uRHJhZzogdGhpcy5vbkRyYWcsXG4gICAgICAgICAgb25TdG9wOiB0aGlzLm9uRHJhZ1N0b3AsXG4gICAgICAgICAgYXhpczogdGhpcy5wcm9wcy5kcmFnQXhpcyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlRHJhZ2dpbmcsXG4gICAgICAgICAgZ3JpZDogdGhpcy5wcm9wcy5kcmFnR3JpZCxcbiAgICAgICAgICBib3VuZHM6IHRoaXMucHJvcHMuYm91bmRzID8gdGhpcy5zdGF0ZS5ib3VuZHMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcG9zaXRpb246IHRoaXMucHJvcHMucG9zaXRpb24sXG4gICAgICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2ssXG4gICAgICAgICAgY2FuY2VsOiB0aGlzLnByb3BzLmNhbmNlbFxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFJlc2l6YWJsZSxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5leHRlbmRzUHJvcHMsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5yZXNpemFibGUgPSBjO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRTaXplOiB0aGlzLnByb3BzLmRlZmF1bHQsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLnNpemUsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMucHJvcHMuZW5hYmxlUmVzaXppbmcsXG4gICAgICAgICAgICBvblJlc2l6ZVN0YXJ0OiB0aGlzLm9uUmVzaXplU3RhcnQsXG4gICAgICAgICAgICBvblJlc2l6ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgICAgICAgIG9uUmVzaXplU3RvcDogdGhpcy5vblJlc2l6ZVN0b3AsXG4gICAgICAgICAgICBzdHlsZTogaW5uZXJTdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnByb3BzLm1pbldpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCxcbiAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnN0YXRlLm1heFdpZHRoLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICBncmlkOiB0aGlzLnByb3BzLnJlc2l6ZUdyaWQsXG4gICAgICAgICAgICBoYW5kbGVXcmFwcGVyQ2xhc3M6IHRoaXMucHJvcHMucmVzaXplSGFuZGxlV3JhcHBlckNsYXNzLFxuICAgICAgICAgICAgaGFuZGxlV3JhcHBlclN0eWxlOiB0aGlzLnByb3BzLnJlc2l6ZUhhbmRsZVdyYXBwZXJTdHlsZSxcbiAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbzogdGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW8sXG4gICAgICAgICAgICBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoOiB0aGlzLnByb3BzLmxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgsXG4gICAgICAgICAgICBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDogdGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCxcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlczogdGhpcy5wcm9wcy5yZXNpemVIYW5kbGVTdHlsZXMsXG4gICAgICAgICAgICBoYW5kbGVDbGFzc2VzOiB0aGlzLnByb3BzLnJlc2l6ZUhhbmRsZUNsYXNzZXNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSbmQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJuZC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1heFdpZHRoOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgbWF4SGVpZ2h0OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgb25SZXNpemVTdGFydDogZnVuY3Rpb24gb25SZXNpemVTdGFydCgpIHt9LFxuICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoKSB7fSxcbiAgb25SZXNpemVTdG9wOiBmdW5jdGlvbiBvblJlc2l6ZVN0b3AoKSB7fSxcbiAgb25EcmFnU3RhcnQ6IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KCkge30sXG4gIG9uRHJhZzogZnVuY3Rpb24gb25EcmFnKCkge30sXG4gIG9uRHJhZ1N0b3A6IGZ1bmN0aW9uIG9uRHJhZ1N0b3AoKSB7fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUm5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXM1LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJuZC9saWIvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA4NTdcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==