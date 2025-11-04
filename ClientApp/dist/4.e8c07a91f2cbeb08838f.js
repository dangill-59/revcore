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

module.exports = (__webpack_require__(0))(540);

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

module.exports = (__webpack_require__(0))(117);

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
                // Optimized for fast in-process backend: poll frequently for first 10s, then back off
                var attempts_1 = this.state.pollAttempts || 0;
                var delay = attempts_1 < 5 ? 1000 : Math.min(3000 * Math.pow(1.5, attempts_1 - 5), 15000);
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
            // Start with initial delay of 1 second for fast backend
            this._checkProcessing = setTimeout(function () {
                dispatch(listofPagesHelper.processPage(id));
                _this.setState({ pollAttempts: 1 });
            }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9jYXJ0cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/MDc3YioqKiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yP2Q3NDUqKioiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yP2FjNmQqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/MDFiNioqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9nZ2xlLWJ1dHRvbi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yPzVlODgqKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzPzQyOTgqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/OWRhMSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcz8wNjE5KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvaW5kZXgudHN4PzE0MDMqIiwid2VicGFjazovLy8uL34vbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzPzNiZGMqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL2Fubm9NZW51LnRzeD9hNzE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9vdmVybGF5LnRzeD85MTY1KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvYXR0YWNoTWVudS50c3g/NWZkYSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2RlbGV0ZU1lbnUudHN4P2EwMjcqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9wYWdlLnRzeD8xYWZhKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbk1lbnUudHN4PzRkOTYqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FubmVyU2VsZWN0TWVudS50c3g/ZDBhZSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2VhcmNoVmlldy9vY3JNZW51LnRzeD9kODE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvbGlnaHRCb3guY2xpZW50T25seS50c3g/Mzg5ZioiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudGxpc3RlbmVyL2V2ZW50bGlzdGVuZXIuanM/ZTcwNSoiLCJ3ZWJwYWNrOi8vLy4vfi9maWxlc2l6ZS9saWIvZmlsZXNpemUuanM/YWUzMyoiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanM/ZTFjZSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzPzczMGEqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi9MYXp5TG9hZC5qcz9hZThmKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvZ2V0RWxlbWVudFBvc2l0aW9uLmpzPzFkMTcqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9pblZpZXdwb3J0LmpzPzVmNGMqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9wYXJlbnRTY3JvbGwuanM/OWI0ZioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzPzIzYzUqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanM/ODkyYSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzPzNlNTUqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9pbmRleC5qcz81OGM1KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9SYW5nZXNsaWRlci5qcz84YmFjKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5qcz8yNmQ4KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi91dGlscy5qcz80MjdmKiIsIndlYnBhY2s6Ly8vLi9+L3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmpzPzIzMmIqIiwid2VicGFjazovLy8uL34vcmUtcmVzaXphYmxlL2xpYi9pbmRleC5lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kcmFnZ2FibGUvZGlzdC9yZWFjdC1kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ybmQvbGliL2luZGV4LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDNU5BOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SCxFQUFFOzs7QUFHOWU7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FB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RTtBQUN6RjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7QUFDWDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDtBQUNBO0FBQ0EseUJBQXlCLCtCQUErQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIseUNBQXlDO0FBQzlEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkRBQTJEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9FQUFvRSxhQUFhO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7O0FBRTFEO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQ0FBc0M7O0FBRXRDO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0I7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QUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUNBQXlDO0FBQzFFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsd0ZBQXdGLG1CQUFtQixJQUFJO0FBQy9HLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsa0NBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyx3Q0FBd0M7QUFDeEMsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiI0LmU4YzA3YTkxZjJjYmViMDg4MzhmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCYWRnZSwgQnV0dG9uLCBNb2RhbCwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGVuc3VyZUNhcnRzLCB7IElDYXJ0c1N0YXRlLCBJTGlzdFNjYW5iYXRjaGVzU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBQYWdlSW1hZ2VNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VNb2RlbCc7XG5pbXBvcnQgUGFnZUxpc3RWaWV3IGZyb20gJy4uL2xpc3RQYWdlcyc7XG5pbXBvcnQgUm5kIGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBTY2FuQmF0Y2hNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9TY2FuQmF0Y2hNb2RlbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlTG9hZGVyVmlldyB9IGZyb20gJ2Jhc2UvYXN5bmNMb2FkZXInO1xuXG5jb25zdCBDYXJ0c0xvYWRlciA9IGNyZWF0ZUxvYWRlclZpZXc8U2NhbkJhdGNoTW9kZWxbXT4oKTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IElDYXJ0c1N0YXRlICYge307XG50eXBlIFZpZXdQcm9wcyA9IENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9O1xuXG5jb25zdCBzdGF0aWNTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIGJvcmRlcjogJ3NvbGlkIGJsYWNrIDFweCcsXG4gIHRvcDogMjM4LFxuICBsZWZ0OiA0MDAsXG4gIGJhY2tncm91bmQ6ICdyZWQnLFxuICB6SW5kZXg6IDEwMCxcbn07XG5cbmNsYXNzIENhcnRWaWV3IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxWaWV3UHJvcHMsIHt9PiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS5pbml0aWFsaXplQ2FydHMoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgY2FydFZpc2libGUsIGNhcnRQb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNhcnRQb3NpdGlvbnRvVXNlID0gXy5hc3NpZ24oeyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgeDogNDAwLCB5OiAyMzggfSwgY2FydFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBjYXJ0VmlzaWJsZSA/IChcbiAgICAgIDxSbmRcbiAgICAgICAgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50J1xuICAgICAgICBzaXplPXt7IGhlaWdodDogY2FydFBvc2l0aW9udG9Vc2UuaGVpZ2h0LCB3aWR0aDogY2FydFBvc2l0aW9udG9Vc2Uud2lkdGggfX1cbiAgICAgICAgcG9zaXRpb249e3sgeDogY2FydFBvc2l0aW9udG9Vc2UueCwgeTogY2FydFBvc2l0aW9udG9Vc2UueSB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHpJbmRleDogMTAwLFxuICAgICAgICB9fVxuICAgICAgICBtaW5XaWR0aD17NDAwfVxuICAgICAgICBtaW5IZWlnaHQ9ezE1MH1cbiAgICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT0nLmNhcnREcmFnSGFuZGxlJ1xuICAgICAgICBvbkRyYWdTdG9wPXsoZSwgdWkpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLnVwZGF0ZUNhcnRMb2NhdGlvbih1aS54LCB1aS55KSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uUmVzaXplU3RvcD17KGUsIGRpciwgcmVmLCBkZWx0YSwgcG9zaXRpb24pID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLnVwZGF0ZUNhcnRTaXplKHJlZi5vZmZzZXRIZWlnaHQsIHJlZi5vZmZzZXRXaWR0aCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J21vZGFsLXRpdGxlJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zODgyMzUyOTQxMTc2NDcwNyknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdjYXJ0dG9vbHRpcCc+RHJhZyBoZXJlIHRvIHJlLXBvc2l0aW9uIGNhcnQ8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnREcmFnSGFuZGxlJyBzdHlsZT17eyBjdXJzb3I6ICdtb3ZlJyB9fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWFycm93cycgYXJpYS1oaWRkZW49J3RydWUnPjwvaT4gSW1hZ2UgY2FydFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHVsbC1yaWdodCdcbiAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgYnNTaXplPSdzbSdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luVG9wOiAtMiwgbWFyZ2luUmlnaHQ6IDMgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS5zaG93Q2FydChmYWxzZSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzIHRleHQtZGFuZ2VyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLCB0b3A6IDI1IH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICA8UGFnZUxpc3RWaWV3XG4gICAgICAgICAgICAgICAgbGlzdG9mUGFnZXNIZWxwZXI9e2Vuc3VyZUNhcnRzKCkucGFnZXNMaXN0fVxuICAgICAgICAgICAgICAgIC8qbG9hZFBhZ2VzQ2FsbGJhY2s9e3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudGhlbihwYWdlc1RvQWRkPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLmFkZFBhZ2VzKHBhZ2VzVG9BZGQpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSovXG5cbiAgICAgICAgICAgICAgICAvL1Rvb2xCdXR0b25zPXtQYWdlTGlzdFRvb2xzfVxuICAgICAgICAgICAgICAgIGhhc0luZmluaXRlU2Nyb2xsPXt0cnVlfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaHVtYnNIZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICBpbWFnZUxpc3RTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICB0b3A6IDI1LFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm5kPlxuICAgICkgOiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwge30+KChzdGF0ZSkgPT4ge1xuICByZXR1cm4gZW5zdXJlQ2FydHMoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xufSkoQ2FydFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvY2FydHMvaW5kZXgudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMzU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg1NDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC10b2dnbGUtYnV0dG9uL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGhhbmRsZUFjdGlvbiwgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5pbXBvcnQgeyBBbm5vRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0Fubm9EYXRhTW9kZWwnO1xuaW1wb3J0IHsgSUFzeW5jUmVzdWx0IH0gZnJvbSAnYmFzZS9hc3luY1N0YXRlTWlkZGxld2FyZSc7XG5pbXBvcnQgUmVkdWNlckJhc2UgZnJvbSAnYmFzZS9iYXNlUmVkdWNlcic7XG5pbXBvcnQgeyBjaGVja0ZldGNoRXJyb3IgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcblxuZXhwb3J0IGVudW0gQW5ub1Rvb2xzIHtcbiAgYW5ub3RhdGUgPSAxLFxuICBoaWdobGlnaHQsXG4gIHJlZGFjdCxcbiAgY2xlYXIsXG4gIHNob3dPcmlnaW5hbCxcbiAgcm90YXRlUmlnaHQsXG4gIHJvdGF0ZUxlZnQsXG59XG5cbnR5cGUgQW5ub1RleHRQb3NQcm9wcyA9IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfTtcbnR5cGUgQW5ub1RleHRQcm9wcyA9IHsgdGV4dDogc3RyaW5nOyBwb3NpdGlvbjogQW5ub1RleHRQb3NQcm9wcyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIElBbm5vdGF0ZVN0YXRlIHtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRUb29sOiBBbm5vVG9vbHM7XG4gIHJlYWRvbmx5IGFubm9EYXRhQXN5bmM6IElBc3luY1Jlc3VsdDxBbm5vRGF0YU1vZGVsPjtcblxuICByZWFkb25seSBhbm5vVGV4dDogQW5ub1RleHRQcm9wcztcblxuICAvL1RoZSBwYWdlIGZvciB3aGloYyB3ZSBhcmUgZG9pbmcgYW5ub3RhdGlvbnNcbiAgcmVhZG9ubHkgYW5ub1BhZ2VJZDogc3RyaW5nO1xufVxuXG50eXBlIG15QWN0aW9ucyA9IHtcbiAgc2VsZWN0VG9vbDogKHZhbHVlPzogQW5ub1Rvb2xzKSA9PiBBbm5vVG9vbHM7XG4gIHVwZGF0ZUFubm9EYXRhOiAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gUHJvbWlzZUxpa2U8QW5ub0RhdGFNb2RlbD47XG5cbiAgc2V0QW5ub1RleHQ6ICh2YWx1ZT86IEFubm9UZXh0UHJvcHMpID0+IEFubm9UZXh0UHJvcHM7XG59O1xuXG5jbGFzcyBhbm5vdGF0ZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyQmFzZTxJQW5ub3RhdGVTdGF0ZSwgbXlBY3Rpb25zPiB7XG4gIGNyZWF0ZUFjdGlvbkxpc3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdFRvb2w6ICh2YWx1ZT86IEFubm9Ub29scykgPT4gdmFsdWUsXG4gICAgICBzZXRBbm5vVGV4dDogKHZhbHVlPzogQW5ub1RleHRQcm9wcykgPT4gdmFsdWUsXG4gICAgICB1cGRhdGVBbm5vRGF0YTogW1xuICAgICAgICAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gdmFsdWUsXG4gICAgICAgIChwYWdlSWQ6IHN0cmluZywgdmFsdWU6IFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+KSA9PiAoe1xuICAgICAgICAgIEFzeW5jOiB0cnVlLFxuICAgICAgICAgIGFubm9QYWdlSWQ6IHBhZ2VJZCxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICByZWR1Y2VycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRUb29sOiBoYW5kbGVBY3Rpb24oXG4gICAgICAgIHRoaXMuX215QWN0aW9ucy5zZWxlY3RUb29sLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG5cbiAgICAgIGFubm9EYXRhQXN5bmM6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG5cbiAgICAgIGFubm9QYWdlSWQ6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgYW5ub1BhZ2VJZCB9ID0gYWN0aW9uLm1ldGE7XG4gICAgICAgICAgcmV0dXJuIGFubm9QYWdlSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIG51bGwsXG4gICAgICApLFxuXG4gICAgICBhbm5vVGV4dDogaGFuZGxlQWN0aW9uKFxuICAgICAgICB0aGlzLl9teUFjdGlvbnMuc2V0QW5ub1RleHQsXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBudWxsLFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tJZlVuTW91bnRlZChwYWdlSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IF9taW5lID0gdGhpcztcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy9pZiB0aGUgbGFzdCBwYWdlIHRoYXQgd2UgbW91bnRlZCBhbm4gdmlldyBpcyBkaXNtb3VudGVkIHVuc2VsZWN0IHRoZSB0b29sXG4gICAgICAvL3RoaXMgaXMgbmVlZGVkXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhbm5vUGFnZUlkIH0gPSBfbWluZS5nZXRDdXJyZW50U3RhdGUoZ2V0U3RhdGUoKSk7XG4gICAgICAgIGlmIChhbm5vUGFnZUlkID09IHBhZ2VJZCkgZGlzcGF0Y2goX21pbmUuc2VsZWN0VG9vbChudWxsKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0VG9vbCh2YWx1ZT86IEFubm9Ub29scykge1xuICAgIGNvbnN0IF9taW5lID0gdGhpcztcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChudWxsKSk7XG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNlbGVjdFRvb2wodmFsdWUpKTtcbiAgICB9O1xuICB9XG5cbiAgcm90YXRlSW1hZ2UocGFnZUlkOiBzdHJpbmcsIGxlZnQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vbmVlZCB0byBydW4gYSByZW5kZXIgcGFzcyBmaXJzdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVQID0gZmV0Y2goYC9hcGkvYW5ub3RhdGlvbnMvcm90YXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VJZCl9P2xlZnQ9JHtsZWZ0fWApXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjaGVja0ZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKF9taW5lLnNlbGVjdFRvb2wobnVsbCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhKHBhZ2VJZCwgc2F2ZVApKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH07XG4gIH1cblxuICBsb2FkQW5ub3RhdGlvbnMocGFnZUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzYXZlUCA9IGZldGNoKGAvYXBpL2Fubm90YXRpb25zL2Fubm90YXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VJZCl9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY2hlY2tGZXRjaEVycm9yKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+KTtcblxuICAgIHJldHVybiB0aGlzLl9teUFjdGlvbnMudXBkYXRlQW5ub0RhdGEocGFnZUlkLCBzYXZlUCk7XG4gIH1cblxuICB1cGRhdGVBbm5vVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYW5ub1RleHQgfSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKGdldFN0YXRlKCkpO1xuICAgICAgaWYgKCFhbm5vVGV4dCkgcmV0dXJuO1xuXG4gICAgICByZXR1cm4gZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChfLmFzc2lnbih7fSwgYW5ub1RleHQsIHsgdGV4dCB9KSkpO1xuICAgIH07XG4gIH1cblxuICBpbml0QW5ub1RleHQocG9zaXRpb246IEFubm9UZXh0UG9zUHJvcHMpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNldEFubm9UZXh0KHsgdGV4dDogJycsIHBvc2l0aW9uIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgc2F2ZUFubm90YXRpb25zKHBhZ2VJZDogc3RyaW5nLCBkYXRhVXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vQmVmb3JlIHdlIHNhdmUgdGhlIGNhbnZhcyBjbGVhciBhbnkgYW5ub1RleHQgYm94XG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNldEFubm9UZXh0KG51bGwpKTtcblxuICAgICAgY29uc3QgYW5ub01vZGVsOiBBbm5vRGF0YU1vZGVsID0ge1xuICAgICAgICBkYXRhVXJsLFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2F2ZVAgPSBmZXRjaChgL2FwaS9hbm5vdGF0aW9ucy9hbm5vdGF0ZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYWdlSWQpfWAsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhbm5vTW9kZWwpLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjaGVja0ZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPik7XG5cbiAgICAgIGRpc3BhdGNoKF9taW5lLl9teUFjdGlvbnMudXBkYXRlQW5ub0RhdGEocGFnZUlkLCBzYXZlUCkpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gYW5ub3RhdGVSZWR1Y2VyLmdldEluc3RhbmNlKGFubm90YXRlUmVkdWNlciwgJ2Fubm90YXRpb25zJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTE3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDM2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLy8gVG8gaW5jbHVkZSB0aGUgZGVmYXVsdCBzdHlsZXNcbmltcG9ydCAncmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzcyc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgQVBhZ2UsIHsgRG5EUHJvcHMsIERyb3BUYXJnZXRDcmVhdG9yLCBJZHJvcFRhcmdldFByb3BzIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hlY2tib3gsXG4gIERyb3Bkb3duQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgTWVudUl0ZW0sXG4gIE1vZGFsLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IERSQUdUWVBFX1BBR0UsIElMaXN0UGFnZXNTdGF0ZSwgcGFnZU5hdiB9IGZyb20gJy4vcmVkdWNlckhlbHBlcic7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3LCBjcmVhdGVTYXZlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcbmltcG9ydCBlbnN1cmVNYWluTmF2LCB7IElOYXZNZW51U3RhdGUgfSBmcm9tICcuLi9tYWluTmF2L3JlZHVjZXInO1xuXG5pbXBvcnQgQW5ub01lbnUgZnJvbSAnLi4vYW5ub3RhdGlvbnMvYW5ub01lbnUnO1xuaW1wb3J0IEFubm9PdmVybGF5VmlldyBmcm9tICcuLi9hbm5vdGF0aW9ucy9vdmVybGF5JztcbmltcG9ydCBBdHRhY2hNZW51IGZyb20gJy4vYXR0YWNoTWVudSc7XG5pbXBvcnQgQ29weVBhc3RlTWVudSBmcm9tICcuL2NvcHlQYXN0ZU1lbnUnO1xuaW1wb3J0IERlbGV0ZU1lbnUgZnJvbSAnLi9kZWxldGVNZW51JztcbmltcG9ydCBPY3JNZW51IGZyb20gJy4uL3NlYXJjaFZpZXcvb2NyTWVudSc7XG5pbXBvcnQgeyBQYWdlSG9sZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUhvbGRlck1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZVR5cGVNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VUeXBlTW9kZWwnO1xuaW1wb3J0IFNjYW5NZW51IGZyb20gJy4vc2Nhbk1lbnUnO1xuaW1wb3J0IFNjYW5uZXJTZWxlY3RNZW51IGZyb20gJy4vc2Nhbm5lclNlbGVjdE1lbnUnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1yYW5nZXNsaWRlcic7XG5pbXBvcnQgX1BhZ2VMaWdodEJveCBmcm9tICcuL2xpZ2h0Qm94LmNsaWVudE9ubHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVBbm5vdGF0aW9ucyBmcm9tICcuLi9hbm5vdGF0aW9ucy9yZWR1Y2VyJztcbmltcG9ydCBlbnN1cmVQcmludEFwcCBmcm9tICcuLi9wcmludEFwcC9yZWR1Y2VyJztcblxuY29uc3QgVXBsb2FkU3RhdHVzVmlldyA9IGNyZWF0ZVNhdmVyVmlldzxib29sZWFuPigpO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0gSWRyb3BUYXJnZXRQcm9wcyAmIHtcbiAgLy9yZWFjdCBlbGVtZW50IHRvIHNob3cgb24gdGhlIGFjdGl2ZSBwYWdlXG4gIEFjdGl2ZVBhZ2VUb29sQmFyPzogYW55O1xuXG4gIC8vcmVhY3QgZWxlbWVudCB0byBzaG93IGFzIGxpc3QgdG9vbCBiYXJcbiAgVG9vbEJ1dHRvbnM/OiBhbnk7XG5cbiAgLy9pZiB0cnVlIHdlIGZpeCBOQVYgYnV0dG9uIG9uIFRPUFxuICBoYXNJbmZpbml0ZVNjcm9sbD86IGJvb2xlYW47XG5cbiAgLy9UaGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFjdWFsbCBkaXYgd2l0aCBpbWFnZXNcbiAgaW1hZ2VMaXN0U3R5bGU/OiBhbnk7XG5cbiAgLy9UaGlicyBoZWlnaHQgaWYgdGhleSBoYXZlIG5vdCBiZWVuIHJlc3Bvc2l0aW9uZWRcbiAgZGVmYXVsdFRodW1ic0hlaWdodD86IG51bWJlcjtcblxuICAvL2FuIG92ZXJsYXkgdGhhdCBpcyBkcmF3biBvbiB0byBvZiB0aGUgcGFnZVxuICBQYWdlT3ZlcmxheVZpZXc/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3AgPSBJTGlzdFBhZ2VzU3RhdGUgJiB7XG4gIHBhZ2VzQXJyYXk6IFBhZ2VJbWFnZU1vZGVsW107XG4gIGFubm9Ub29sU2VsZWN0ZWQ6IGJvb2xlYW47XG59O1xuXG5jb25zdCBBbm5vT0NSTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QW5ub01lbnUgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuY29uc3QgUGFnZUxpZ2h0Qm94ID0gX1BhZ2VMaWdodEJveCBhcyBhbnk7XG5cbmNsYXNzIExpc3RQYWdlc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tcG9uZW50UHJvcHMgJiBDb25uZWN0ZWRQcm9wICYgRG5EUHJvcHMsIHt9PiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyKSB7XG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuYWRkQWxsb3dlZCgpKSB7XG4gICAgICAgIGNvbnN0IFRoZU1lbnUgPSAoKSA9PiAoXG4gICAgICAgICAgPEF0dGFjaE1lbnUgb25GaWxlQXR0YWNoZWQ9eygpID0+IHRoaXMuX2ZpbGVJbnB1dFJlZiAmJiB0aGlzLl9maWxlSW5wdXRSZWYuY2xpY2soKX0gLz5cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdtYWluJywgJ2F0dGFjaCcsIFRoZU1lbnUpKTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGBkZXRlY3RlZCBuYXZpZ2F0b3IucGxhdGZvcm0gOiAke25hdmlnYXRvci5wbGF0Zm9ybX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdlbXB0eSBuYXZpZ2F0b3I6IGNhbm5vdCBkZXRlY3QgcGxhdGZvcm0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtID09ICdXaW4zMicpIHtcbiAgICAgICAgICBjb25zdCBUaGVTY2FuTWVudSA9ICgpID0+IChcbiAgICAgICAgICAgIDxTY2FuTWVudSBvblNjYW49eygpID0+IGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNjYW5QYWdlcygpKX0gLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ21haW4nLCAnc2NhbicsIFRoZVNjYW5NZW51KSk7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ3NldHRpbmdzJywgJ3NlbGVjdFNjYW5uZXInLCBTY2FubmVyU2VsZWN0TWVudSkpO1xuXG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBlbnN1cmVNYWluTmF2KCkuYWRkTWVudSgnZGlzdHJpYnVlRXh0cmEnLCAnUmUtUHJvY2VzcycsICgpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmZpeE5vbndlYlBhZ2UoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJyBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCc+PC9pPiBSZS1yZW5kZXIgaW1hZ2VzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ2Rpc3RyaWJ1ZUV4dHJhJywgJ2NvcHlQYXN0ZScsICgpID0+IDxDb3B5UGFzdGVNZW51IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0vPikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuZGVsZXRlQWxsb3dlZCgpKSB7XG4gICAgICAgIGNvbnN0IE15RGVsZXRlTWVudSA9ICgpID0+IDxEZWxldGVNZW51IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0gLz47XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ21haW4nLCAnZGVsZXRlJywgTXlEZWxldGVNZW51KSk7XG4gICAgICB9XG5cbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBlbnN1cmVQcmludEFwcCgpLnNldFByaW50YWJsZSh7XG4gICAgICAgICAgcGFnZXNHZXR0ZXI6IGxpc3RvZlBhZ2VzSGVscGVyLmdldFRvUHJpbnRQYWdlcy5iaW5kKGxpc3RvZlBhZ2VzSGVscGVyKSxcbiAgICAgICAgICBleHRyYU1lbnU6IDxBbm5vT0NSTWVudSAvPixcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlcikge1xuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyLmFkZEFsbG93ZWQoKSkge1xuICAgICAgICBkaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnbWFpbicsICdhdHRhY2gnKSk7XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0gPT0gJ1dpbjMyJykge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdtYWluJywgJ3NjYW4nKSk7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmRlbGV0ZU1lbnUoJ3NldHRpbmdzJywgJ3NlbGVjdFNjYW5uZXInKSk7XG4gICAgICAgICAgLy9kaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnZGlzdHJpYnVlRXh0cmEnLCAnY29weVBhc3RlJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlci5kZWxldGVBbGxvd2VkKCkpIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdtYWluJywgJ2RlbGV0ZScpKTtcblxuICAgICAgZGlzcGF0Y2goZW5zdXJlUHJpbnRBcHAoKS5zZXRQcmludGFibGUobnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGFjdGl2ZVBhZ2UsIHBhZ2VzQXJyYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldkFjdGl2ZVBhZ2UgPSBwcmV2UHJvcHMuYWN0aXZlUGFnZTtcblxuICAgIGlmIChwYWdlc0FycmF5ICYmIHBhZ2VzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy93ZSBhbHdheXMgd2FudCBhIGFjdGl2ZSBwYWdlXG4gICAgICBpZiAoIWFjdGl2ZVBhZ2UgfHwgIV8uZmluZChwYWdlc0FycmF5LCAocCkgPT4gcC5pZCA9PSBhY3RpdmVQYWdlLmlkKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBhY3RpdmUgcGFnZSB0byB0b3AgaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgeyBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShwYWdlc0FycmF5WzBdLmlkKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZVBhZ2UgfHwgYWN0aXZlUGFnZS5pZCA9PSAocHJldkFjdGl2ZVBhZ2UgfHwge30pLmlkKSByZXR1cm47XG5cbiAgICAvL2FjdGl2ZSBwYWdlIGhhcyBjaGFuZ2VkIGxldHMgbWFrZSBzdXJlIGl0J3MgdmlzaWJsZVxuXG4gICAgaWYgKCF0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlLmlkXSkge1xuICAgICAgY29uc29sZS53YXJuKCdhY3RpdmUgcGFnZSBpZCBpcyBub3QgaW4gX3BhZ2VSZWZzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldEhlaWdodCB9ID0gdGhpcy5fcGFnZVJlZnNbYWN0aXZlUGFnZS5pZF07XG5cbiAgICAvL2FjY291bnRpbmcgZm9yIG1hcmdpbnMgLiB0aGUgbWFnaWMgbnVtYmVyIHdlIGZvdW5kIGJ5IHRyaWFsIGFuZCBlcnJvciAsIHdlIHdpbGwgaGF2ZSB0byBjaGFuZ2UgaWYgd2UgY2hhbmdlIG1hcmdpbnMgYW5kIHN0dWZmXG4gICAgY29uc3QgTUFHSUNNQVJHSU5OVU1CRVIgPSAyMDsgLy8yMztcbiAgICBjb25zdCBwYWdlQm90dG9tUG9zaXRpb24gPSBvZmZzZXRUb3AgKyBvZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB7IHNjcm9sbFRvcCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IHRoaXMuX3BhZ2VsaXN0UmVmO1xuICAgIGNvbnN0IHZpc2libGVCb3R0b21Qb3NpdGlvbiA9IHNjcm9sbFRvcCArIGNsaWVudEhlaWdodDtcblxuICAgIGxldCBuZXdTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cbiAgICBjb25zdCB2aWV3SGFzTm9uTGltaXRlZEhlaWdodCA9IHNjcm9sbEhlaWdodCA9PSBjbGllbnRIZWlnaHQ7XG5cbiAgICAvL2NoZWNrIGlmIGFjdGl2ZVBhZ2UgYm90dG9tIGlzIHZpc2libGVcbiAgICBpZiAodmlld0hhc05vbkxpbWl0ZWRIZWlnaHQpIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IG9mZnNldFRvcCAtIE1BR0lDTUFSR0lOTlVNQkVSO1xuICAgIH0gZWxzZSBpZiAocGFnZUJvdHRvbVBvc2l0aW9uID4gdmlzaWJsZUJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICBuZXdTY3JvbGxUb3AgPSBwYWdlQm90dG9tUG9zaXRpb24gLSBjbGllbnRIZWlnaHQgLSBNQUdJQ01BUkdJTk5VTUJFUjtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGlmIGFjdGl2ZVBhZ2UgVG9wIGlzIHZpc2libGUsIG92ZXJyaWRlIHNjcm9sbCB0byBtYWtlIGJvdHRvbSB2aXNpYmxlXG4gICAgaWYgKG9mZnNldFRvcCA8IG5ld1Njcm9sbFRvcCAtIE1BR0lDTUFSR0lOTlVNQkVSKSBuZXdTY3JvbGxUb3AgPSBvZmZzZXRUb3AgLSBNQUdJQ01BUkdJTk5VTUJFUjtcblxuICAgIC8vbGV0IG5ld1Njcm9sbFRvcCA9IHRoaXMuUGFnZWxpc3RSZWYuc2Nyb2xsVG9wKygoYmFja3dvcmQ/LTE6MSkqICh0aGlzLnByb3BzLnNsaWRlclZhbHVlICsgMTQpKTtcbiAgICBpZiAobmV3U2Nyb2xsVG9wIDwgMCkge1xuICAgICAgbmV3U2Nyb2xsVG9wID0gMDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXZpZXdIYXNOb25MaW1pdGVkSGVpZ2h0ICYmXG4gICAgICBuZXdTY3JvbGxUb3AgPiB0aGlzLl9wYWdlbGlzdFJlZi5zY3JvbGxIZWlnaHQgLSB0aGlzLl9wYWdlbGlzdFJlZi5jbGllbnRIZWlnaHRcbiAgICApIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IHRoaXMuX3BhZ2VsaXN0UmVmLnNjcm9sbEhlaWdodCAtIHRoaXMuX3BhZ2VsaXN0UmVmLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodmlld0hhc05vbkxpbWl0ZWRIZWlnaHQpIHtcbiAgICAgIHdpbmRvdyAmJiB3aW5kb3cuc2Nyb2xsVG8gJiYgd2luZG93LnNjcm9sbFRvKDAsIG5ld1Njcm9sbFRvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdTY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkgcmV0dXJuO1xuICAgICAgdGhpcy5fcGFnZWxpc3RSZWYuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIGxldCBzY3JvbGxTdGVwID0gKG5ld1Njcm9sbFRvcCAtIHNjcm9sbFRvcCkgLyAxMDtcbiAgICAgICAgY29uc3QgYmFja3dvcmQgPSBzY3JvbGxTdGVwIDwgMDtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBkb1N0ZXAoKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zID0gbWUuX3BhZ2VsaXN0UmVmLnNjcm9sbFRvcCArIHNjcm9sbFN0ZXA7XG5cbiAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoKGJhY2t3b3JkICYmIG5ld1BvcyA8PSBuZXdTY3JvbGxUb3ApIHx8ICghYmFja3dvcmQgJiYgbmV3UG9zID49IG5ld1Njcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBuZXdTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLl9wYWdlbGlzdFJlZi5zY3JvbGxUb3AgPSBuZXdQb3M7XG5cbiAgICAgICAgICAgIGlmICghZG9uZSlcbiAgICAgICAgICAgICAgICBfLmRlbGF5KGRvU3RlcCwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb1N0ZXAoKTtcbiAgICAgICAgKi9cbiAgfVxuXG4gIHByaXZhdGUgX3BhZ2VsaXN0UmVmPzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBfcGFnZVJlZnM6IHsgW2tleTogc3RyaW5nXTogSFRNTERpdkVsZW1lbnQgfSA9IHt9O1xuXG4gIHByaXZhdGUgb25TY3JvbGxlZCgpIHtcbiAgICBpZiAoIXRoaXMuX3BhZ2VsaXN0UmVmKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHBhZ2VzQXJyYXksIGFjdGl2ZVBhZ2UsIGxpc3RvZlBhZ2VzSGVscGVyLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIShwYWdlc0FycmF5ICYmIHBhZ2VzQXJyYXkubGVuZ3RoID4gMCkpIHJldHVybjtcblxuICAgIGNvbnN0IGFjdGl2ZVBhZ2VJZCA9IGFjdGl2ZVBhZ2UgPyBhY3RpdmVQYWdlLmlkIDogcGFnZXNBcnJheVswXS5pZDtcbiAgICBpZiAoIWFjdGl2ZVBhZ2VJZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5fcGFnZWxpc3RSZWY7XG4gICAgY29uc3QgdmlzaWJsZUJvdHRvbVBvc2l0aW9uID0gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlSWRdKSByZXR1cm47XG5cbiAgICBjb25zdCB7IG9mZnNldFRvcCwgb2Zmc2V0SGVpZ2h0IH0gPSB0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlSWRdO1xuICAgIGNvbnN0IHBhZ2VCb3R0b21Qb3NpdGlvbiA9IG9mZnNldFRvcCArIG9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHZpc2liaXR5U2hpbSA9IG9mZnNldEhlaWdodCAqIDAuMztcblxuICAgIC8vY2hlY2sgaWYgdGhlIGFjdGl2ZSBwYWdlIGlzIG5vdCB2aXNpYmxlXG4gICAgaWYgKFxuICAgICAgb2Zmc2V0VG9wICsgdmlzaWJpdHlTaGltID4gdmlzaWJsZUJvdHRvbVBvc2l0aW9uIHx8XG4gICAgICBwYWdlQm90dG9tUG9zaXRpb24gLSB2aXNpYml0eVNoaW0gPCBzY3JvbGxUb3BcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVBhZ2UgPSBfLmZpbmQoXG4gICAgICAgIF8ua2V5cyh0aGlzLl9wYWdlUmVmcyksXG4gICAgICAgIChpZCkgPT4gdGhpcy5fcGFnZVJlZnNbaWRdICYmIHRoaXMuX3BhZ2VSZWZzW2lkXS5vZmZzZXRUb3AgPj0gc2Nyb2xsVG9wLFxuICAgICAgKTtcblxuICAgICAgaWYgKG5ld0FjdGl2ZVBhZ2UpIHtcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShuZXdBY3RpdmVQYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25vIGFjdGl2ZSBwYWdlIGZvdW5kIGF0IHNjcm9sbCBsb2NhdGlvbicsIHNjcm9sbFRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblNjcm9sbGVkZGVib3VuY2VkID0gXy5kZWJvdW5jZSh0aGlzLm9uU2Nyb2xsZWQsIDEwMDApO1xuICBwcml2YXRlIF9maWxlSW5wdXRSZWYgPSBudWxsO1xuXG4gIHByaXZhdGUgX2ZpbGVSZW5kZXJJZCA9IDA7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VzQXJyYXksXG4gICAgICBwYWdlRHJvcFRhcmdldCxcbiAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLFxuICAgICAgdGh1bWJzSGVpZ2h0LFxuICAgICAgZGVmYXVsdFRodW1ic0hlaWdodCxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBBY3RpdmVQYWdlVG9vbEJhcixcbiAgICAgIHNlbGVjdGVkUGFnZXMsXG4gICAgICBpbWFnZUxpc3RTdHlsZSxcbiAgICAgIFRvb2xCdXR0b25zLFxuICAgICAgaGFzSW5maW5pdGVTY3JvbGwsXG4gICAgICBsaWdodEJveFZpc2libGUsXG4gICAgICBQYWdlT3ZlcmxheVZpZXcsXG4gICAgICBjb3JyZWN0ZWREaW1lbnRpb25zLFxuICAgICAgYW5ub1Rvb2xTZWxlY3RlZCxcbiAgICAgIGRpc3BhdGNoLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGxpc3Rwcm9tcHQgPSAnJztcblxuICAgIGlmIChwYWdlc0FycmF5Lmxlbmd0aCA+IDApXG4gICAgICBsaXN0cHJvbXB0ID0gJ1Nob3dpbmcgJyArIHBhZ2VzQXJyYXkubGVuZ3RoICsgJyBpbWFnZScgKyAocGFnZXNBcnJheS5sZW5ndGggPiAxID8gJ3MnIDogJycpO1xuXG4gICAgdGhpcy5fcGFnZVJlZnMgPSB7fTtcblxuICAgIGNvbnN0IGZpeGVkTmF2U3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiA1LFxuICAgICAgaGVpZ2h0OiA1NixcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiA2MixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZGQyZTRlNicsXG4gICAgICB6SW5kZXg6IDUsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH07XG5cbiAgICBjb25zdCBuYXZTdHlsZSA9IHsgdGV4dEFsaWduOiAnbGVmdCcgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAge1BhZ2VMaWdodEJveCAmJiBsaWdodEJveFZpc2libGUgJiYgKFxuICAgICAgICAgIDxQYWdlTGlnaHRCb3ggbGlzdG9mUGFnZXNIZWxwZXI9e2xpc3RvZlBhZ2VzSGVscGVyfSBwYWdlc0FycmF5PXtwYWdlc0FycmF5IHx8IFtdfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIGlucHV0UmVmPXsocmVmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9maWxlSW5wdXRSZWYgPSByZWY7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgaWQ9e2BteWlucHV0ZmlsZV8ke3RoaXMuX2ZpbGVSZW5kZXJJZCsrfWB9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAwLCB3aWR0aDogMCwgb3BhY2l0eTogMCwgZGlzcGxheTogJ2NvbnRlbnRzJyB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvL2NvbnN0IGZpbGVzID0gWy4uLmUubmF0aXZlRXZlbnQudGFyZ2V0LmZpbGVzXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHRlc3RpbmcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxlJywgZS5uYXRpdmVFdmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuYWRkUGFnZXMoZS5uYXRpdmVFdmVudC50YXJnZXQuZmlsZXMpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCdcbiAgICAgICAgICBzdHlsZT17aGFzSW5maW5pdGVTY3JvbGwgPyAoeyAuLi5maXhlZE5hdlN0eWxlLCAuLi5uYXZTdHlsZSB9IGFzIGFueSkgOiBuYXZTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5IHdpdGhQb3B1cEJnJz5cbiAgICAgICAgICAgIHtsaXN0cHJvbXB0fVxuXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0naW5jdG9vbHRpcCc+Y2hhbmdlIGltYWdlIHNpemU8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaC1wbHVzJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaC1taW51cycgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlkPSdzbGlkZXJEcm9wRG93bidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAsIGhlaWdodDogNSB9fVxuICAgICAgICAgICAgICAgIG1pbj17NjB9XG4gICAgICAgICAgICAgICAgbWF4PXsxNTAwfVxuICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aHVtYnNIZWlnaHQgfHwgZGVmYXVsdFRodW1ic0hlaWdodCB8fCAxMDB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci56b29tVG8oZSkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7VG9vbEJ1dHRvbnMgJiYgPFRvb2xCdXR0b25zIC8+fVxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBmbG9hdDogJ3JpZ2h0JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6IDQ2IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSdwcmV2dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICBTY3JvbGwgdG8gcHJldmlvdXMgcGFnZVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIFNob3J0Y3V0OiA8a2JkPmFsdCt1PC9rYmQ+IE9SIDxrYmQ+cGFnZXVwPC9rYmQ+XG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnLCBtYXJnaW5MZWZ0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNldEFjdGl2ZVBhZ2UocGFnZU5hdi5wcmV2KSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFja3dhcmQnIHN0eWxlPXt7IGZvbnRTaXplOiAneC1sYXJnZScgfX0+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSduZXh0dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICBTY3JvbGwgdG8gbmV4dCBwYWdlXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgU2hvcnRjdXQ6IDxrYmQ+YWx0K2Q8L2tiZD4gT1IgPGtiZD5wYWdlZG93bjwva2JkPlxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJzU3R5bGU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JywgbWFyZ2luTGVmdDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zZXRBY3RpdmVQYWdlKHBhZ2VOYXYubmV4dCkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZvcndhcmQnIHN0eWxlPXt7IGZvbnRTaXplOiAneC1sYXJnZScgfX0+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzBweCcgfX0+Jm5ic3A7PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtwYWdlRHJvcFRhcmdldChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ltYWdlbGlzdC1iYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgb25TY3JvbGw9eygpID0+IHRoaXMub25TY3JvbGxlZGRlYm91bmNlZCgpfVxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiAodGhpcy5fcGFnZWxpc3RSZWYgPSByZWYpfVxuICAgICAgICAgICAgc3R5bGU9e2hhc0luZmluaXRlU2Nyb2xsID8geyAuLi5pbWFnZUxpc3RTdHlsZSwgbWFyZ2luVG9wOiA1NiB9IDogaW1hZ2VMaXN0U3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIC8qLCBoZWlnaHQ6ICcxMDAlJyovIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICB7cGFnZXNBcnJheS5sZW5ndGggPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaXN0b2ZQYWdlc0hlbHBlci5hZGRBbGxvd2VkKCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcCBpbWFnZXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9SeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0naW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fZmlsZUlucHV0UmVmICYmIHRoaXMuX2ZpbGVJbnB1dFJlZi5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm93c2UgdG8gZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5ObyBpbWFnZXMgZm91bmQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBwYWdlc0FycmF5Lm1hcCgoZWRpdGFibGVQYWdlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd0Fub1Rvb2xzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm9Ub29sU2VsZWN0ZWQgJiYgYWN0aXZlUGFnZSAmJiBhY3RpdmVQYWdlLmlkID09IGVkaXRhYmxlUGFnZS5pZDtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4gKHRoaXMuX3BhZ2VSZWZzW2VkaXRhYmxlUGFnZS5pZF0gPSByZWYpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZURyb3BUYXJnZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBUGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RlZERpbWVudGlvbnM9e2NvcnJlY3RlZERpbWVudGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VPdmVybGF5Vmlldz17c2hvd0Fub1Rvb2xzID8gQW5ub092ZXJsYXlWaWV3IDogUGFnZU92ZXJsYXlWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNpcmVkSGVpZ2h0PXt0aHVtYnNIZWlnaHQgfHwgZGVmYXVsdFRodW1ic0hlaWdodCB8fCAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVkaXRhYmxlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVQYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuaWQgPT0gZWRpdGFibGVQYWdlLmlkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhQWN0aXZlUGFnZVRvb2xCYXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlUGFnZVRvb2xCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZWRpdGFibGVQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbm9Ub29scyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2Fubm9kb25lJz5Bbm5vdGF0aW9ucyBjb21wbGV0ZWQ8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW5Ub3A6IC01IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChudWxsKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hlY2sgY29sb3Itb3JhbmdlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISEoc2VsZWN0ZWRQYWdlcyAmJiBzZWxlY3RlZFBhZ2VzW2VkaXRhYmxlUGFnZS5pZF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319IC8vbmVlZCBvbmNoYW5nZWQgZm9yIHdhcm5pbmdzIHRvIGJlIGhhcHB5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLnRvZ2dsZVBhZ2VTZWxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlUGFnZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9J2xpZ2h0bm94dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPXsnbGluayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luVG9wOiAtNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zaG93TGlnaHRCb3goZWRpdGFibGVQYWdlLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXdpbmRvdy1tYXhpbWl6ZSBjb2xvci1vcmFuZ2UnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BhZ2VDb252ZXJ0ZWRNZW51RHJvcERvd24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxpIGNsYXNzTmFtZT0nZmEgZmEtY29nJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHBhZ2Vkcm9wZG93bi0ke2VkaXRhYmxlUGFnZS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRhYmxlUGFnZS5vcmlnaW5hbElkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT0nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLmRvd25sb2FkT3JpZ2luYWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlUGFnZS5vcmlnaW5hbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jbG91ZC1kb3dubG9hZCcgLz4gRG93bmxvYWQgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWRpdGFibGVQYWdlLnBhZ2VUeXBlID09IFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5maXhOb253ZWJQYWdlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXJlZnJlc2gnIC8+IFJlLXJlbmRlciBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZCB7bW9tZW50KGVkaXRhYmxlUGFnZS5jcmVhdGVkKS5mb3JtYXQoJ2xsbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2NyTWVudSBwYWdlSWQ9e2VkaXRhYmxlUGFnZS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGlzdG9mUGFnZXNIZWxwZXIgfSA9IG93bnByb3BzO1xuICBjb25zdCBwYWdlc1N0YXRlID0gbGlzdG9mUGFnZXNIZWxwZXIgJiYgbGlzdG9mUGFnZXNIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSk7XG4gIGNvbnN0IHsgYWN0aXZlRG9jIH0gPVxuICAgIGxpc3RvZlBhZ2VzSGVscGVyLm15RG9jc0hlbHBlciAmJiBsaXN0b2ZQYWdlc0hlbHBlci5teURvY3NIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSk7XG5cbiAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4gXy5hc3NpZ24oXG4gICAge1xuICAgICAgcGFnZXNBcnJheTogKGFjdGl2ZURvYyAmJiBhY3RpdmVEb2MucGFnZXMpIHx8IFtdLFxuICAgICAgYW5ub1Rvb2xTZWxlY3RlZDogISFzZWxlY3RlZFRvb2wsXG4gICAgfSxcbiAgICBwYWdlc1N0YXRlLFxuICApO1xufSkoRHJvcFRhcmdldENyZWF0b3IoTGlzdFBhZ2VzVmlldykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2luZGV4LnRzeCIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2guZGVib3VuY2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZW5zdXJlQW5ub3RhdGlvbnMsIHsgQW5ub1Rvb2xzIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVQcm9qZWN0cyBmcm9tICcuLi9wcm9qZWN0cy9yZWR1Y2VyJztcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgc2VsZWN0ZWRUb29sOiBBbm5vVG9vbHM7XG4gIGFubm90YXRpb25zQWxsb3dlZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHRoZVRvb2xzID0gW1xuICB7IHRvb2w6IEFubm9Ub29scy5hbm5vdGF0ZSwgaWNvbjogJ2ZhLWNvbW1lbnQnLCB0ZXh0OiAnQW5ub3RhdGUnIH0sXG4gIHsgdG9vbDogQW5ub1Rvb2xzLmhpZ2hsaWdodCwgaWNvbjogJ2ZhLWVkaXQnLCB0ZXh0OiAnSGlnaGxpZ2h0JyB9LFxuICB7IHRvb2w6IEFubm9Ub29scy5yZWRhY3QsIGljb246ICdmYS1taW51cy1zcXVhcmUnLCB0ZXh0OiAnUmVkYWN0JyB9LFxuICB7IHRvb2w6IEFubm9Ub29scy5jbGVhciwgaWNvbjogJ2ZhLXNxdWFyZScsIHRleHQ6ICdjbGVhcicgfSxcbiAgeyB0b29sOiBBbm5vVG9vbHMuc2hvd09yaWdpbmFsLCBpY29uOiAnZmEtZXllJywgdGV4dDogJ1Nob3cgb3JpZ2luYWwnIH0sXG5dO1xuXG5jb25zdCBBbm5vTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9PiA9ICh7XG4gIHNlbGVjdGVkVG9vbCxcbiAgYW5ub3RhdGlvbnNBbGxvd2VkLFxuICBkaXNwYXRjaCxcbn0pID0+IHtcbiAgaWYgKCFhbm5vdGF0aW9uc0FsbG93ZWQpIHJldHVybiA8ZGl2PjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG5cbiAgICAgIHt0aGVUb29scy5tYXAoKHRvb2wpID0+IHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhIXNlbGVjdGVkVG9vbCAmJiBzZWxlY3RlZFRvb2wgIT0gdG9vbC50b29sO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9e2B0b29sXyR7dG9vbC50b29sfWB9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICBlbnN1cmVBbm5vdGF0aW9ucygpLnNlbGVjdFRvb2woc2VsZWN0ZWRUb29sICE9IHRvb2wudG9vbCA/IHRvb2wudG9vbCA6IG51bGwpLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Rpc2FibGVkID8gJ3RleHQtbXV0ZWQnIDogJ3RleHQtc3VjY2Vzcyd9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhICR7dG9vbC5pY29ufWB9PjwvaT4ge3Rvb2wudGV4dH1cbiAgICAgICAgICAgICAge3NlbGVjdGVkVG9vbCA9PSB0b29sLnRvb2wgJiYgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGVjayBjb2xvci1vcmFuZ2UnPjwvaT59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuXG4gICAgICA8TWVudUl0ZW1cbiAgICAgICAgZGlzYWJsZWQ9eyEhc2VsZWN0ZWRUb29sfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChBbm5vVG9vbHMucm90YXRlTGVmdCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWRUb29sID8gJ3RleHQtbXV0ZWQnIDogJ3RleHQtc3VjY2Vzcyd9XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdW5kbyc+PC9pPiBSb3RhdGUgbGVmdFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L01lbnVJdGVtPlxuXG4gICAgICA8TWVudUl0ZW1cbiAgICAgICAgZGlzYWJsZWQ9eyEhc2VsZWN0ZWRUb29sfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChBbm5vVG9vbHMucm90YXRlUmlnaHQpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkVG9vbCA/ICd0ZXh0LW11dGVkJyA6ICd0ZXh0LXN1Y2Nlc3MnfVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVuZG8gZmEtZmxpcC1ob3Jpem9udGFsJz48L2k+IFJvdGF0ZSByaWdodFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L01lbnVJdGVtPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIHt9Pigoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZFByb2plY3QgfSA9IGVuc3VyZVByb2plY3RzKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICBsZXQgYW5ub3RhdGlvbnNBbGxvd2VkID0gISFzZWxlY3RlZFByb2plY3Q7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QucGVybWlzc2lvbnMgJiYgc2VsZWN0ZWRQcm9qZWN0LnBlcm1pc3Npb25zWydzZWxmJ10pIHtcbiAgICBhbm5vdGF0aW9uc0FsbG93ZWQgPSBzZWxlY3RlZFByb2plY3QucGVybWlzc2lvbnNbJ3NlbGYnXS5jYW5FZGl0O1xuICB9XG5cbiAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHsgc2VsZWN0ZWRUb29sLCBhbm5vdGF0aW9uc0FsbG93ZWQgfTtcbn0pKEFubm9NZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL2Fubm9NZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBlbnN1cmVBbm5vdGF0aW9ucywgeyBBbm5vVG9vbHMsIElBbm5vdGF0ZVN0YXRlIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgQW5ub0RhdGFNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9Bbm5vRGF0YU1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmNvbnN0IEFubm9Mb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PEFubm9EYXRhTW9kZWw+KCk7XG5cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSBQYWdlSW1hZ2VNb2RlbCAmIHtcbiAgc2NhbGU6IG51bWJlcjtcbiAgb25Bbm5vdGF0aW9uc0RvbmU/OiAoKSA9PiB2b2lkO1xufTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IElBbm5vdGF0ZVN0YXRlICYge307XG5cbnR5cGUgRFBvaW50cyA9IHsgWDogbnVtYmVyOyBZOiBudW1iZXIgfTtcblxudHlwZSBEQ29vcmRpbmF0ZXMgPSB7XG4gIHN0YXJ0UG9pbnQ6IERQb2ludHM7XG4gIGN1cnJlbnQ/OiBEUG9pbnRzO1xuICBsYXN0RHJhd1BvaW50PzogRFBvaW50cztcbn07XG5cbnR5cGUgU3RhdGVQcm9wcyA9IHtcbiAgY2FudmFzPzogYW55O1xuICBjb250ZXh0PzogYW55O1xuICBkaW1lbnRpb25zPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xuICBjb29yZGluYXRlcz86IERDb29yZGluYXRlcztcbiAgZHJhd2luZz86IGJvb2xlYW47XG4gIGxhc3RYPzogbnVtYmVyO1xuICBsYXN0WT86IG51bWJlcjtcbn07XG5cbnR5cGUgVmlld1Byb3BzID0gQ29ubmVjdGVkUHJvcHMgJiBDb21wb25lbnRQcm9wcyAmIHsgZGlzcGF0Y2ggfTtcblxuY2xhc3MgQW5ub250YXRpb25PdmVybGF5VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxWaWV3UHJvcHMsIFN0YXRlUHJvcHM+IHtcbiAgQ2FudmFzUmVmOiBhbnkgPSBudWxsO1xuICBoYXNEcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGhhc0NoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzdGF0ZTogU3RhdGVQcm9wcyA9IHt9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaWQ6IHBhZ2VJZCwgZGlzcGF0Y2gsIHNlbGVjdGVkVG9vbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNhbnZhczogYW55ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5DYW52YXNSZWYpO1xuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjYW52YXMsXG4gICAgICBjb250ZXh0LFxuICAgICAgZGltZW50aW9uczogeyB3OiBjYW52YXMud2lkdGgsIGg6IGNhbnZhcy5oZWlnaHQgfSxcbiAgICB9KTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUb29sKSB7XG4gICAgICBjYXNlIEFubm9Ub29scy5yb3RhdGVSaWdodDpcbiAgICAgIGNhc2UgQW5ub1Rvb2xzLnJvdGF0ZUxlZnQ6XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkucm90YXRlSW1hZ2UocGFnZUlkLCBBbm5vVG9vbHMucm90YXRlTGVmdCA9PSBzZWxlY3RlZFRvb2wpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLmxvYWRBbm5vdGF0aW9ucyhwYWdlSWQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX2Fubm90YWlvbmVkTG9hZGVkID0gZmFsc2U7XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgYW5ub0RhdGFBc3luYyB9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NvbnN0IHsgYW5ub0RhdGFBc3luYzogcHJldkFubm9EYXRhQXN5bmMgfSA9IHByZXZQcm9wcztcblxuICAgIGNvbnN0IHsgY29udGV4dCwgZGltZW50aW9ucyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLl9hbm5vdGFpb25lZExvYWRlZCAmJlxuICAgICAgYW5ub0RhdGFBc3luYyAmJlxuICAgICAgYW5ub0RhdGFBc3luYy5yZXN1bHQgJiZcbiAgICAgIGFubm9EYXRhQXN5bmMucmVzdWx0LmRhdGFVcmxcbiAgICApIHtcbiAgICAgIGNvbnN0IGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMsIDAsIDAsIGRpbWVudGlvbnMudywgZGltZW50aW9ucy5oKTtcbiAgICAgIH07XG5cbiAgICAgIGltYWdlT2JqLnNyYyA9IGFubm9EYXRhQXN5bmMucmVzdWx0LmRhdGFVcmw7XG5cbiAgICAgIHRoaXMuX2Fubm90YWlvbmVkTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGlkOiBwYWdlSWQsIGRpc3BhdGNoLCBvbkFubm90YXRpb25zRG9uZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQgJiYgb25Bbm5vdGF0aW9uc0RvbmUpIG9uQW5ub3RhdGlvbnNEb25lKCk7XG5cbiAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLmNoZWNrSWZVbk1vdW50ZWQocGFnZUlkKSk7XG4gIH1cblxuICBzdGF0aWMgaXNNb2JpbGUoKSB7XG4gICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZU9uTW91c2VEb3duKGUpIHtcbiAgICBpZiAoIXRoaXMuYW5ub0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zdGF0ZS5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zdGF0ZS5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGlmIChBbm5vbnRhdGlvbk92ZXJsYXlWaWV3LmlzTW9iaWxlKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb29yZGluYXRlczoge1xuICAgICAgICAgIHN0YXJ0UG9pbnQ6IHtcbiAgICAgICAgICAgIFg6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdCxcbiAgICAgICAgICAgIFk6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgICAgc3RhcnRQb2ludDoge1xuICAgICAgICAgICAgWDogZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgICAgWTogZS5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhd2luZzogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU9uTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuYW5ub0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IGRyYXdpbmcsIGxhc3RYLCBsYXN0WSwgY2FudmFzLCBjb29yZGluYXRlcywgZGltZW50aW9ucyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChkcmF3aW5nKSB7XG4gICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IGN1cnJlbnRYO1xuICAgICAgbGV0IGN1cnJlbnRZO1xuXG4gICAgICBpZiAoQW5ub250YXRpb25PdmVybGF5Vmlldy5pc01vYmlsZSgpKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSB7XG4gICAgICAgICAgWDogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIFk6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuY3VycmVudCA9IHtcbiAgICAgICAgICBYOiBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgWTogZS5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gZGltZW50aW9ucy5oIC8gY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy5kcmF3KGNvb3JkaW5hdGVzLCBzY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgYW5ub0FjdGl2ZSgpIHtcbiAgICBjb25zdCB7IGFubm9EYXRhQXN5bmMsIHNlbGVjdGVkVG9vbCwgYW5ub1RleHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc2VsZWN0ZWRUb29sID09IEFubm9Ub29scy5zaG93T3JpZ2luYWwgfHwgKGFubm9EYXRhQXN5bmMgJiYgYW5ub0RhdGFBc3luYy5pc0xvYWRpbmcpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgLypcbiAgICAgICAgaWYgKCEhYW5ub1RleHQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICovXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGhhbmRsZW9uTW91c2VVcChlKSB7XG4gICAgaWYgKCF0aGlzLmFubm9BY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGRpbWVudGlvbnMsIGNhbnZhcywgY29udGV4dCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY3VycmVudCwgbGFzdERyYXdQb2ludCB9ID0gY29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdCB7IHNlbGVjdGVkVG9vbCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc3RhcnRQb2ludCAmJiBjdXJyZW50KSB7XG4gICAgICBpZiAoQW5ub1Rvb2xzLmFubm90YXRlID09IHNlbGVjdGVkVG9vbCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IGRpbWVudGlvbnMuaCAvIGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGxhc3REcmF3UG9pbnQpIHtcbiAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdChcbiAgICAgICAgICAgIChzdGFydFBvaW50LlggLSAyKSAqIHNjYWxlLFxuICAgICAgICAgICAgKHN0YXJ0UG9pbnQuWSAtIDIpICogc2NhbGUsXG4gICAgICAgICAgICAobGFzdERyYXdQb2ludC5YIC0gc3RhcnRQb2ludC5YICsgNCkgKiBzY2FsZSxcbiAgICAgICAgICAgIChsYXN0RHJhd1BvaW50LlkgLSBzdGFydFBvaW50LlkgKyA0KSAqIHNjYWxlLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICBlbnN1cmVBbm5vdGF0aW9ucygpLmluaXRBbm5vVGV4dCh7XG4gICAgICAgICAgICBsZWZ0OiBzdGFydFBvaW50LlggKiBzY2FsZSxcbiAgICAgICAgICAgIHRvcDogc3RhcnRQb2ludC5ZICogc2NhbGUsXG4gICAgICAgICAgICB3aWR0aDogKGN1cnJlbnQuWCAtIHN0YXJ0UG9pbnQuWCkgKiBzY2FsZSxcbiAgICAgICAgICAgIGhlaWdodDogKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZUNhbnZhcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3aW5nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGRyYXcoY29vcmRpbmF0ZXM6IERDb29yZGluYXRlcywgc2NhbGU6IG51bWJlcikge1xuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGxhc3REcmF3UG9pbnQsIGN1cnJlbnQgfSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKCF0aGlzLmhhc0RyYXdpbmcpIHtcbiAgICAgIGlmIChjdXJyZW50LlggLSBzdGFydFBvaW50LlggPCAxMCAmJiBjdXJyZW50LlkgLSBzdGFydFBvaW50LlkgPCAxMCkge1xuICAgICAgICAvL2JhcmVseSBhbnkgbW91c2UgbW92ZSBtYXkgYmUgdGhlIHBlcnNvbiBkb2VzIGFjdHVhbGx5IHdhbnQgdG8gZHJhd1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxhc3REcmF3UG9pbnQpIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KFxuICAgICAgICAoc3RhcnRQb2ludC5YIC0gMikgKiBzY2FsZSxcbiAgICAgICAgKHN0YXJ0UG9pbnQuWSAtIDIpICogc2NhbGUsXG4gICAgICAgIChsYXN0RHJhd1BvaW50LlggLSBzdGFydFBvaW50LlggKyA0KSAqIHNjYWxlLFxuICAgICAgICAobGFzdERyYXdQb2ludC5ZIC0gc3RhcnRQb2ludC5ZICsgNCkgKiBzY2FsZSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkVG9vbCkge1xuICAgICAgY2FzZSBBbm5vVG9vbHMuY2xlYXI6XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQW5ub1Rvb2xzLmFubm90YXRlOlxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgICAgICAgY29udGV4dC5zdHJva2VSZWN0KFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQW5ub1Rvb2xzLnJlZGFjdDpcbiAgICAgIGNhc2UgQW5ub1Rvb2xzLmhpZ2hsaWdodDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMDtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPVxuICAgICAgICAgIHNlbGVjdGVkVG9vbCA9PSBBbm5vVG9vbHMucmVkYWN0ID8gJ3JnYmEoMCwgMCwgMCwgMS4wKScgOiAncmdiYSgyNTUsIDI1NSwgMCwgMC40NSknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgIHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSkgKiBzY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNEcmF3aW5nID0gdHJ1ZTtcbiAgICBjb29yZGluYXRlcy5sYXN0RHJhd1BvaW50ID0gY29vcmRpbmF0ZXMuY3VycmVudDtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzIH0pO1xuICB9XG5cbiAgaGFuZGxlVGV4dEVudGVyKCkge1xuICAgIGNvbnN0IHsgYW5ub1RleHQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGV4dCA9IGFubm9UZXh0ICYmIGFubm9UZXh0LnRleHQ7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZm9udFNpemVQeCA9IDIwO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAxLjApJztcbiAgICBjb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZVB4fXB4IENhbGlicmlgO1xuXG4gICAgY29uc3QgbWF4V2lkdGggPSBhbm5vVGV4dC5wb3NpdGlvbi53aWR0aCAtIDQ7XG4gICAgY29uc3QgbGluZUhlaWdodCA9IGZvbnRTaXplUHggKyA0O1xuICAgIGNvbnN0IHggPSBhbm5vVGV4dC5wb3NpdGlvbi5sZWZ0ICsgMjtcbiAgICBsZXQgeSA9IGFubm9UZXh0LnBvc2l0aW9uLnRvcCArIGZvbnRTaXplUHg7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcbiAgICBsZXQgbGluZSA9ICcnO1xuXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCB3b3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyAnO1xuICAgICAgdmFyIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgIHZhciB0ZXN0V2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgaWYgKHRlc3RXaWR0aCA+IG1heFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuXG4gICAgY29udGV4dC5saW5lV2lkdGggPSAwO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDAsIDAuNDUpJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgYW5ub1RleHQucG9zaXRpb24ubGVmdCxcbiAgICAgIGFubm9UZXh0LnBvc2l0aW9uLnRvcCxcbiAgICAgIGFubm9UZXh0LnBvc2l0aW9uLndpZHRoLFxuICAgICAgYW5ub1RleHQucG9zaXRpb24uaGVpZ2h0LFxuICAgICk7XG5cbiAgICB0aGlzLnNhdmVDYW52YXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUNhbnZhcygpIHtcbiAgICBjb25zdCB7IGlkOiBwYWdlSWQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF0aGlzLkNhbnZhc1JlZikge1xuICAgICAgY29uc29sZS5lcnJvcignQ2FudmFzIFJlZiBpcyBlbXB0eScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLkNhbnZhc1JlZi50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2F2ZUFubm90YXRpb25zKHBhZ2VJZCwgZGF0YSkpO1xuXG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXNwbGF5U3R5bGU6IGFueSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcwcHgnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBhbm5vRGF0YUFzeW5jLCBzZWxlY3RlZFRvb2wsIGFubm9UZXh0LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8qXG4gICAgICAgIGlmICghYW5ub1RleHQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlTdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJ1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICBjb25zdCBjYW52YXNTdHlsZSA9XG4gICAgICBBbm5vVG9vbHMuc2hvd09yaWdpbmFsID09IHNlbGVjdGVkVG9vbFxuICAgICAgICA/IHsgdmlzaWJpbGl0eTogJ2hpZGRlbicsIC4uLmRpc3BsYXlTdHlsZSB9XG4gICAgICAgIDogZGlzcGxheVN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge2Fubm9EYXRhQXN5bmMgJiYgYW5ub0RhdGFBc3luYy5yZXN1bHQgJiYgYW5ub0RhdGFBc3luYy5yZXN1bHQuaW1hZ2VEYXRhVXJsICYmIChcbiAgICAgICAgICA8aW1nIHNyYz17YW5ub0RhdGFBc3luYy5yZXN1bHQuaW1hZ2VEYXRhVXJsfSBzdHlsZT17ZGlzcGxheVN0eWxlfSBjbGFzc05hbWU9J2Fubm9JbWcnIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17Y2FudmFzU3R5bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdhbm5vT3ZlcmxheSdcbiAgICAgICAgICByZWY9eyhyZWYpID0+ICh0aGlzLkNhbnZhc1JlZiA9IHJlZil9XG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25Nb3VzZURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlT25Nb3VzZURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVPbk1vdXNlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZU9uTW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZW9uTW91c2VVcC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlb25Nb3VzZVVwLmJpbmQodGhpcyl9XG4gICAgICAgID48L2NhbnZhcz5cbiAgICAgICAge2Fubm9UZXh0ICYmIChcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBjb2xvcjogJ2JsYWNrJywgLi4uYW5ub1RleHQucG9zaXRpb24gfX1cbiAgICAgICAgICAgIHZhbHVlPXthbm5vVGV4dC50ZXh0IHx8ICcnfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkudXBkYXRlQW5ub1RleHQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMgJiYgZS5zaGlmdEtleSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRFbnRlcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthbm5vRGF0YUFzeW5jICYmIChcbiAgICAgICAgICA8QW5ub0xvYWRlciBhc3luY1Jlc3VsdD17YW5ub0RhdGFBc3luY30gcHJvbXB0PSdsb2FkaW5nIGFubm90YXRpb25zJz5cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDwvQW5ub0xvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIGNvbnN0IGFubm9TdGF0ZSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4gYW5ub1N0YXRlO1xufSkoQW5ub250YXRpb25PdmVybGF5Vmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9vdmVybGF5LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2SXRlbSwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG50eXBlIFZpZXdQcm9wcyA9IHsgb25GaWxlQXR0YWNoZWQ6ICgpID0+IHZvaWQgfTtcblxuY29uc3QgQXR0YWNoTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PFZpZXdQcm9wcz4gPSAoeyBvbkZpbGVBdHRhY2hlZCB9KSA9PiB7XG4gIGxldCBhdHRhY2hJY29uID0gJ2ZhIGZhLWZpbGUtaW1hZ2UtbyBmYS0yeCc7XG4gIGxldCBhdHRhY2hQcm9tcHQgPSAnQXR0YWNoIGltYWdlcyc7XG5cbiAgaWYgKCFuYXZpZ2F0b3IgfHwgbmF2aWdhdG9yLnBsYXRmb3JtICE9ICdXaW4zMicpIHtcbiAgICBhdHRhY2hJY29uID0gJ2ZhIGZhLWNhbWVyYSBmYS0yeCc7XG4gIH1cblxuICBsZXQgZmlsZUlucHV0ID0gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxOYXZJdGVtXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uRmlsZUF0dGFjaGVkICYmIG9uRmlsZUF0dGFjaGVkKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J0F0dGFjaE1lbnV0b29sdGlwJz57YXR0YWNoUHJvbXB0fTwvVG9vbHRpcD59XG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17YXR0YWNoSWNvbn0gYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgIDwvTmF2SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaE1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvYXR0YWNoTWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IElMaXN0UGFnZXNTdGF0ZSwgTGlzdFBhZ2VzSGVscGVyIH0gZnJvbSAnLi9yZWR1Y2VySGVscGVyJztcbmltcG9ydCB7IE5hdkl0ZW0sIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgUGFnZUhvbGRlck1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VIb2xkZXJNb2RlbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBsaXN0b2ZQYWdlc0hlbHBlcjogTGlzdFBhZ2VzSGVscGVyPFBhZ2VIb2xkZXJNb2RlbD47XG59O1xuXG50eXBlIFZpZXdQcm9wcyA9IENvbXBvbmVudFByb3BzICYgSUxpc3RQYWdlc1N0YXRlICYgeyBkaXNwYXRjaCB9O1xuXG5jb25zdCBEZWxldGVNZW51OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Vmlld1Byb3BzPiA9ICh7XG4gIGRpc3BhdGNoLFxuICBzZWxlY3RlZFBhZ2VzLFxuICBsaXN0b2ZQYWdlc0hlbHBlcixcbn0pID0+IHtcbiAgLy9UaGVyZSBpcyBhdCBsZWFzdCBvbmUgc2VsZWN0ZWQgcGFnZVxuICBjb25zdCBlbmFibGVkID1cbiAgICBsaXN0b2ZQYWdlc0hlbHBlciAmJiBzZWxlY3RlZFBhZ2VzICYmIF8uZmluZChfLmtleXMoc2VsZWN0ZWRQYWdlcyksIChwKSA9PiAhIXNlbGVjdGVkUGFnZXNbcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkl0ZW1cbiAgICAgIGRpc2FibGVkPXshZW5hYmxlZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IGxpc3RvZlBhZ2VzSGVscGVyICYmIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmRlbGV0ZVBhZ2VzKCkpfVxuICAgID5cbiAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2RlbGV0ZW1lbnV0b29sdGlwJz5EZWxldGUgSW1hZ2VzPC9Ub29sdGlwPn1cbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS10aW1lcyBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgIDwvTmF2SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHsgZGlzcGF0Y2ggfSwgQ29tcG9uZW50UHJvcHM+KChzdGF0ZSwgb3ducHJvcHMpID0+IHtcbiAgcmV0dXJuIG93bnByb3BzLmxpc3RvZlBhZ2VzSGVscGVyID8gb3ducHJvcHMubGlzdG9mUGFnZXNIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSkgOiB7fTtcbn0pKERlbGV0ZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2RlbGV0ZU1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgZmlsZXNpemUgZnJvbSAnZmlsZXNpemUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7XG4gIENvcnJlY3RlZERpbWVudGlvblByb3BzLFxuICBEUkFHVFlQRV9QQUdFLFxuICBJTGlzdFBhZ2VzU3RhdGUsXG4gIExpc3RQYWdlc0hlbHBlcixcbn0gZnJvbSAnLi9yZWR1Y2VySGVscGVyJztcbmltcG9ydCB7IERyYWdTb3VyY2UsIERyb3BUYXJnZXQgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenktbG9hZCc7XG5pbXBvcnQgeyBOYXRpdmVUeXBlcyB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCB7IFBhZ2VIb2xkZXJNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSG9sZGVyTW9kZWwnO1xuaW1wb3J0IHsgUGFnZUltYWdlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUltYWdlTW9kZWwnO1xuaW1wb3J0IHsgUGFnZUltYWdlVHlwZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZVR5cGVNb2RlbCc7XG5pbXBvcnQgZW5zdXJlUHJpbnRBcHAgZnJvbSAnLi4vcHJpbnRBcHAvcmVkdWNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWRyb3BUYXJnZXRQcm9wcyB7XG4gIGxpc3RvZlBhZ2VzSGVscGVyOiBMaXN0UGFnZXNIZWxwZXI8UGFnZUhvbGRlck1vZGVsPjtcbn1cblxuZXhwb3J0IHR5cGUgRG5EUHJvcHMgPSB7XG4gIGRpc3BhdGNoO1xuICBwYWdlRHJvcFRhcmdldDogKGFueSkgPT4gYW55O1xuICAvL2lzRHJhZ092ZXJNZTogYm9vbGVhbixcbiAgaXNPdmVyQ3VycmVudDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBEcm9wVGFyZ2V0Q3JlYXRvciA9IERyb3BUYXJnZXQoXG4gIFtEUkFHVFlQRV9QQUdFLCBOYXRpdmVUeXBlcy5GSUxFXSxcbiAge1xuICAgIGRyb3AocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCkge1xuICAgICAgY29uc3QgaGFzRHJvcHBlZE9uQ2hpbGQgPSBtb25pdG9yLmRpZERyb3AoKTtcbiAgICAgIGlmIChoYXNEcm9wcGVkT25DaGlsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBtb25pdG9yLmdldEl0ZW1UeXBlKCk7XG4gICAgICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG5cbiAgICAgIHZhciBteVByb3BzID0gcHJvcHMgYXMgeyBkaXNwYXRjaCB9ICYgSWRyb3BUYXJnZXRQcm9wcztcbiAgICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyIH0gPSBteVByb3BzO1xuXG4gICAgICAvL2lmIChwYWdlc0FycmF5IClcblxuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbGlzdG9mUGFnZXNIZWxwZXIgbm90IHNldCBmb3IgcGFnZSBkcm9wIHRhcmdldCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIE5hdGl2ZVR5cGVzLkZJTEUgLyonX19OQVRJVkVfRklMRV9fJyovOlxuICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmFkZFBhZ2VzKGl0ZW0uZmlsZXMsIHByb3BzICYmIHByb3BzLm9yZGVyTnVtYmVyKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRFJBR1RZUEVfUEFHRTpcbiAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5vbkV4aXN0aW5nUGFnZWREcm9wcGVkMShpdGVtLCBwcm9wcyAmJiBwcm9wcy5pZCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgfSxcbiAgfSxcblxuICAoY29ubmVjdGVyLCBtb25pdG9yKSA9PiAoe1xuICAgIHBhZ2VEcm9wVGFyZ2V0OiBjb25uZWN0ZXIuZHJvcFRhcmdldCgpLFxuICAgIC8vaXNEcmFnT3Zlck1lOiBtb25pdG9yLmlzT3ZlcigpLFxuICAgIGlzT3ZlckN1cnJlbnQ6IG1vbml0b3IuaXNPdmVyKHsgc2hhbGxvdzogdHJ1ZSB9KSxcbiAgfSksXG4pO1xuXG50eXBlIFN0YXRlUHJvcHMgPSB7XG4gIHNjYWxlPzogbnVtYmVyO1xuICBwb2xsQXR0ZW1wdHM/OiBudW1iZXI7XG59O1xuXG50eXBlIFZpZXdQcm9wcyA9IFBhZ2VJbWFnZU1vZGVsICZcbiAgRG5EUHJvcHMgJlxuICBJZHJvcFRhcmdldFByb3BzICYgeyBQYWdlT3ZlcmxheVZpZXc/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT4gfSAmIHtcbiAgICBjb25uZWN0RHJhZ1NvdXJjZTogKGFueSkgPT4gYW55O1xuICAgIGlzRHJhZ2dpbmc6IGJvb2xlYW47XG4gIH0gJiB7IGRlc2lyZWRIZWlnaHQ6IG51bWJlcjsgY29ycmVjdGVkRGltZW50aW9uczogQ29ycmVjdGVkRGltZW50aW9uUHJvcHMgfTtcblxuY2xhc3MgTGF6eUxvYWRlZEltYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxWaWV3UHJvcHMsIFN0YXRlUHJvcHM+IHtcbiAgc3RhdGU6IFN0YXRlUHJvcHMgPSB7XG4gICAgcG9sbEF0dGVtcHRzOiAwLFxuICB9O1xuICBfaW1nUmVmOiBhbnkgPSBudWxsO1xuXG4gIF9jaGVja1Byb2Nlc3Npbmc6IGFueSA9IG51bGw7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2NoZWNrUHJvY2Vzc2luZykgY2xlYXJUaW1lb3V0KHRoaXMuX2NoZWNrUHJvY2Vzc2luZyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgcGFnZVR5cGUsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCwgb3JpZ2luYWxJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhZ2VUeXBlOiBwcmV2UGFnZVR5cGUgfSA9IHByZXZQcm9wcztcblxuICAgIC8vaWYgKHRoaXMuX2NoZWNrUHJvY2Vzc2luZylcbiAgICAvLyAgICBjbGVhckludGVydmFsKHRoaXMuX2NoZWNrUHJvY2Vzc2luZyk7XG5cbiAgICBpZiAocGFnZVR5cGUgIT0gcHJldlBhZ2VUeXBlKSB7XG4gICAgICBpZiAoIXBhZ2VUeXBlIHx8IFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWIgPT0gcGFnZVR5cGUpIHtcbiAgICAgICAgLy9pbWFnZSBpcyBkb25lIHByb2Nlc3NpbmdcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvbGxBdHRlbXB0czogMCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9wdGltaXplZCBmb3IgZmFzdCBpbi1wcm9jZXNzIGJhY2tlbmQ6IHBvbGwgZnJlcXVlbnRseSBmb3IgZmlyc3QgMTBzLCB0aGVuIGJhY2sgb2ZmXG4gICAgICAgIGNvbnN0IGF0dGVtcHRzID0gdGhpcy5zdGF0ZS5wb2xsQXR0ZW1wdHMgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBhdHRlbXB0cyA8IDUgPyAxMDAwIDogTWF0aC5taW4oMzAwMCAqIE1hdGgucG93KDEuNSwgYXR0ZW1wdHMgLSA1KSwgMTUwMDApO1xuXG4gICAgICAgIHRoaXMuX2NoZWNrUHJvY2Vzc2luZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnByb2Nlc3NQYWdlKGlkKSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvbGxBdHRlbXB0czogYXR0ZW1wdHMgKyAxIH0pO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgcGFnZVR5cGUsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCwgb3JpZ2luYWxJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFnZVR5cGUgfHwgUGFnZUltYWdlVHlwZU1vZGVsLm5vbndlYiA9PSBwYWdlVHlwZSkge1xuICAgICAgLy9pbWFnZSBpcyBkb25lIHByb2Nlc3NpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RhcnQgd2l0aCBpbml0aWFsIGRlbGF5IG9mIDEgc2Vjb25kIGZvciBmYXN0IGJhY2tlbmRcbiAgICAgIHRoaXMuX2NoZWNrUHJvY2Vzc2luZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5wcm9jZXNzUGFnZShpZCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9sbEF0dGVtcHRzOiAxIH0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJbWFnZVByb3BzKCkge1xuICAgIGlmICghdGhpcy5faW1nUmVmKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2ltYWdlIHJlZiBpcyBudWxsJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkaXNwYXRjaCwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQsIGhlaWdodDogZGlzcGxheUhlaWdodCB9ID0gdGhpcy5faW1nUmVmO1xuXG4gICAgaWYgKHdpZHRoICE9IG5hdHVyYWxXaWR0aCB8fCBoZWlnaHQgIT0gbmF0dXJhbEhlaWdodCkge1xuICAgICAgY29uc29sZS5sb2coJ2NvcnJlY3RpbmcgaW1hZ2UgZGltZW50aW9ucycsIGlkKTtcbiAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmFkZENvcnJlY3RlZERpbWVudGlvbnMoaWQsIG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCkpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2NhbGU6IGRpc3BsYXlIZWlnaHQgLyBuYXR1cmFsSGVpZ2h0IH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uSW1hZ2VMb2FkRmFpbGVkKCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5oYW5kbGVGYWlsZWRJbWFnZUxvYWQoaWQpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlVHlwZSxcbiAgICAgIGRlc2lyZWRIZWlnaHQsXG4gICAgICBwYXRoLFxuICAgICAgc2l6ZSxcbiAgICAgIGNyZWF0ZWQsXG4gICAgICBvcmlnaW5hbFBhZ2VOYW1lLFxuICAgICAgaWQsXG4gICAgICBQYWdlT3ZlcmxheVZpZXcsXG4gICAgICBvcmlnaW5hbElkLFxuICAgICAgbGlzdG9mUGFnZXNIZWxwZXIsXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIG9mZkxpbmVQcm9jZXNzaW5nT25seSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB3YWl0VGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjY2NjJyxcbiAgICAgIC8vZm9udFNpemU6ICdsYXJnZScsXG4gICAgICAvL21hcmdpblRvcDogMTBcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICB9O1xuXG4gICAgY29uc3Qgd2FpdEJnU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IGRlc2lyZWRIZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgY29sb3I6ICcjOTk5JyxcbiAgICAgIGJvcmRlcjogJzJweCBkYXNoZWQgI2RlZTJlNicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3Qgd2FpdEZpbGVJbmZvU3R5bGUgPSB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9IGFzIGFueTtcblxuICAgIGNvbnN0IHByb2Nlc3NpbmdPdmVybGF5U3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHBhZGRpbmc6ICcxMnB4IDE2cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KScsXG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2RlZTJlNicsXG4gICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNHB4KScsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiAnNnB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlOWVjZWYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhclN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGQ2ZWZkIDAlLCAjMGRjYWYwIDEwMCUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICBhbmltYXRpb246ICdwcm9ncmVzcy1hbmltYXRpb24gMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUnLFxuICAgICAgd2lkdGg6ICc2MCUnLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3Qgc3RhdHVzVGV4dFN0eWxlID0ge1xuICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgIGNvbG9yOiAnIzQ5NTA1NycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCBleHQgPSBpZC5zdWJzdHIoaWQubGFzdEluZGV4T2YoJy4nKSArIDEpO1xuXG4gICAgLy8gSGVscGVyIGNvbXBvbmVudCBmb3IgcHJvY2Vzc2luZyBzdGF0dXMgb3ZlcmxheVxuICAgIGNvbnN0IFByb2Nlc3NpbmdTdGF0dXNPdmVybGF5ID0gKHsgc3RhdHVzLCBpY29uIH06IHsgc3RhdHVzOiBzdHJpbmc7IGljb246IHN0cmluZyB9KSA9PiAoXG4gICAgICA8PlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLWFuaW1hdGlvbiB7XG4gICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbiAgICAgICAgICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxuICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17cHJvY2Vzc2luZ092ZXJsYXlTdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cHJvZ3Jlc3NCYXJDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtwcm9ncmVzc0JhclN0eWxlfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdGF0dXNUZXh0U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhICR7aWNvbn0gZmEtc3BpbmB9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fT48L2k+XG4gICAgICAgICAgICAgIHtzdGF0dXN9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzExcHgnLCBjb2xvcjogJyM2Yzc1N2QnIH19PlxuICAgICAgICAgICAgICBUaGlzIHVzdWFsbHkgdGFrZXMgNS0xMCBzZWNvbmRzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcblxuICAgIC8vd2hlbiBwYWdldHlwZSBpcyBudWxsIGl0IG1lbmFzIGl0J3MgcmVhZHkgZm9yIHdlYiBkaXNwbGF5XG4gICAgaWYgKFxuICAgICAgIXBhZ2VUeXBlIHx8XG4gICAgICAoUGFnZUltYWdlVHlwZU1vZGVsLnByb2Nlc3NpbmcgIT0gcGFnZVR5cGUgJiZcbiAgICAgICAgZXh0ICYmXG4gICAgICAgIF8uaW5jbHVkZXMoWydwbmcnLCAnanBnJywgJ2pwZWcnXSwgZXh0LnRvTG93ZXJDYXNlKCkpKVxuICAgICkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+ICh0aGlzLl9pbWdSZWYgPSByZWYpfVxuICAgICAgICAgICAgb25Mb2FkPXsoZSkgPT4gdGhpcy5jaGVja0ltYWdlUHJvcHMoKX1cbiAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLm9uSW1hZ2VMb2FkRmFpbGVkKCl9XG4gICAgICAgICAgICBzcmM9e3BhdGh9XG4gICAgICAgICAgICBhbHQ9J2RvY3VtZW50IGltYWdlJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdkb2NQYWdlSW1hZ2UnXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGRlc2lyZWRIZWlnaHQgfX1cbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge1BhZ2VPdmVybGF5VmlldyAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAgfX0+XG4gICAgICAgICAgICAgIDxQYWdlT3ZlcmxheVZpZXdcbiAgICAgICAgICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgb25Bbm5vdGF0aW9uc0RvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnJlbG9hZEFjdGl2ZURvY1BhZ2VzKFtpZF0pKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshIXBhZ2VUeXBlICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiA1LCBib3R0b206IDUsIC4uLndhaXRUZXh0U3R5bGUgfX0+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIGFuYWx5emluZyA8aSBjbGFzc05hbWU9J2ZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS1mdyc+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgQ2hlY2tPZmZsaW5lUHJvY2Vzc2luZyA9ICh7IGNoaWxkcmVuIH0pID0+XG4gICAgICBvZmZMaW5lUHJvY2Vzc2luZ09ubHkgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLy9oZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogJzJyZW0nLFxuICAgICAgICAgICAgZm9udFNpemU6ICdzbWFsbCcsXG4gICAgICAgICAgICBjb2xvcjogJyM4MTgxODEnLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlRoaXMge2V4dH0gZG9jdW1lbnQgc2l6ZSBleGNlZWRzIHRoZSBsaW1pdCBmb3IgcmVhbCB0aW1lIHByb2Nlc3Npbmc8L3A+XG4gICAgICAgICAgPHA+SXQgaXMgYmVpbmcgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5IC4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e2NoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuXG4gICAgY29uc3QgZmlsZUljbyA9IGV4dCAmJiBleHQudG9Mb3dlckNhc2UoKSA9PSAncGRmJyA/ICdmYS1maWxlLXBkZi1vJyA6ICdmYS1maWxlLWltYWdlLW8nO1xuICAgIGNvbnN0IEZpbGVJbmZvVmlldyA9ICgpID0+IChcbiAgICAgIDxkaXYgc3R5bGU9e3dhaXRGaWxlSW5mb1N0eWxlfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXsnZmEgJyArIGZpbGVJY299IHN0eWxlPXt7IGZvbnRTaXplOiBkZXNpcmVkSGVpZ2h0IC8gMywgbWFyZ2luOiAnMTBweCcgfX0+PC9pPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtvcmlnaW5hbFBhZ2VOYW1lICYmIDxpPiBcIntvcmlnaW5hbFBhZ2VOYW1lfVwiIDwvaT59XG4gICAgICAgICAgeyEhc2l6ZSAmJiA8c3Ryb25nPiB7ZmlsZXNpemUoc2l6ZSl9IDwvc3Ryb25nPn1cbiAgICAgICAgICB7Y3JlYXRlZCAmJiA8aSBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsJyB9fT5jcmVhdGVkIHttb21lbnQoY3JlYXRlZCkuZm9ybWF0KCdsbGwnKX08L2k+fVxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZVByaW50QXBwKCkuZG93bmxvYWRPcmlnaW5hbHMoW29yaWdpbmFsSWQgfHwgaWRdKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtc3VjY2Vzcycgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZG93bmxvYWQnPjwvaT4gRG93bmxvYWRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBzd2l0Y2ggKHBhZ2VUeXBlKSB7XG4gICAgICBjYXNlIFBhZ2VJbWFnZVR5cGVNb2RlbC51bnByb2Nlc3NlZDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0QmdTdHlsZX0+XG4gICAgICAgICAgICA8RmlsZUluZm9WaWV3IC8+XG4gICAgICAgICAgICA8Q2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICAgICAgPFByb2Nlc3NpbmdTdGF0dXNPdmVybGF5XG4gICAgICAgICAgICAgICAgc3RhdHVzPVwiQW5hbHl6aW5nIGRvY3VtZW50Li4uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZmEtc2VhcmNoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBQYWdlSW1hZ2VUeXBlTW9kZWwuaWRlbnRpZnlpbmc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17d2FpdEJnU3R5bGV9PlxuICAgICAgICAgICAgPEZpbGVJbmZvVmlldyAvPlxuICAgICAgICAgICAgPENoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgICAgIDxQcm9jZXNzaW5nU3RhdHVzT3ZlcmxheVxuICAgICAgICAgICAgICAgIHN0YXR1cz1cIklkZW50aWZ5aW5nIGRvY3VtZW50IHR5cGUuLi5cIlxuICAgICAgICAgICAgICAgIGljb249XCJmYS1maWxlLXRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFBhZ2VJbWFnZVR5cGVNb2RlbC5wcm9jZXNzaW5nOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRCZ1N0eWxlfT5cbiAgICAgICAgICAgIDxGaWxlSW5mb1ZpZXcgLz5cbiAgICAgICAgICAgIDxDaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgICAgICA8UHJvY2Vzc2luZ1N0YXR1c092ZXJsYXlcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJDb252ZXJ0aW5nIHRvIGltYWdlcy4uLlwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImZhLWltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBQYWdlSW1hZ2VUeXBlTW9kZWwubm9ud2ViOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0QmdTdHlsZX0+XG4gICAgICAgICAgICA8RmlsZUluZm9WaWV3IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFBhZ2VWaWV3OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Vmlld1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZGlzcGF0Y2gsXG4gICAgcGFnZVR5cGUsXG4gICAgaWQsXG4gICAgZGVzaXJlZEhlaWdodCxcbiAgICBwYXRoLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zLFxuICAgIHBhZ2VEcm9wVGFyZ2V0LFxuICAgIGlzT3ZlckN1cnJlbnQsXG4gICAgY29ubmVjdERyYWdTb3VyY2UsXG4gICAgaXNEcmFnZ2luZyxcbiAgfSA9IHByb3BzO1xuXG4gIGxldCBjb3JyZWN0ZWRXaWR0aCA9IHdpZHRoO1xuICBsZXQgY29ycmVjdGVkaGVpZ2h0ID0gaGVpZ2h0O1xuICBpZiAoXG4gICAgY29ycmVjdGVkRGltZW50aW9ucyAmJlxuICAgIGNvcnJlY3RlZERpbWVudGlvbnNbaWRdICYmXG4gICAgY29ycmVjdGVkRGltZW50aW9uc1tpZF0ud2lkdGggJiZcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS5oZWlnaHRcbiAgKSB7XG4gICAgY29ycmVjdGVkV2lkdGggPSBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS53aWR0aDtcbiAgICBjb3JyZWN0ZWRoZWlnaHQgPSBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBkZXNpcmVkV2lkdGggPVxuICAgIGRlc2lyZWRIZWlnaHQgKiAoY29ycmVjdGVkV2lkdGggJiYgY29ycmVjdGVkaGVpZ2h0ID8gY29ycmVjdGVkV2lkdGggLyBjb3JyZWN0ZWRoZWlnaHQgOiAwLjc3Mik7XG5cbiAgcmV0dXJuIHBhZ2VEcm9wVGFyZ2V0KFxuICAgIGNvbm5lY3REcmFnU291cmNlKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J3JldlBhZ2UnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogMixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3ZlckN1cnJlbnQgPyAnIzY5M2IyMmExJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAuNSA6IDEsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9e2Rlc2lyZWRIZWlnaHR9IHdpZHRoPXtkZXNpcmVkV2lkdGh9IG9mZnNldFZlcnRpY2FsPXsxMDAwfT5cbiAgICAgICAgICA8TGF6eUxvYWRlZEltYWdlIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgIDwvZGl2PixcbiAgICApLFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ1NvdXJjZShcbiAgRFJBR1RZUEVfUEFHRSxcbiAge1xuICAgIGJlZ2luRHJhZyhwcm9wczogUGFnZUltYWdlTW9kZWwpIHtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9LFxuXG4gICAgLypcbiAgICBjYW5EcmFnKHByb3BzLCBtb25pdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICovXG5cbiAgICBlbmREcmFnKHByb3BzLCBtb25pdG9yKSB7XG4gICAgICBpZiAobW9uaXRvci5kaWREcm9wKCkpIHtcbiAgICAgICAgY29uc3QgZHJvcHBlZFJlc3VsdCA9IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuXG4gICAgICAgIGlmIChkcm9wcGVkUmVzdWx0ICYmIGRyb3BwZWRSZXN1bHQubW92ZWRUb0xpc3QpIHtcbiAgICAgICAgICB2YXIgbXlQcm9wcyA9IHByb3BzIGFzIHsgZGlzcGF0Y2ggfSAmIElkcm9wVGFyZ2V0UHJvcHMgJiBQYWdlSW1hZ2VNb2RlbDtcbiAgICAgICAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciwgaWQgfSA9IG15UHJvcHM7XG5cbiAgICAgICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignbGlzdG9mUGFnZXNIZWxwZXIgbm90IHNldCBmb3IgcGFnZSBkcm9wIHNvdXJjZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5wYWdlTW92ZWQoaWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIChjb25uZWN0ZXIsIG1vbml0b3IpID0+ICh7XG4gICAgY29ubmVjdERyYWdTb3VyY2U6IGNvbm5lY3Rlci5kcmFnU291cmNlKCksXG4gICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gIH0pLFxuKShEcm9wVGFyZ2V0Q3JlYXRvcihQYWdlVmlldykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL3BhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBOYXZJdGVtLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZW5zdXJlV29ya3NwYWNlIGZyb20gJy4uL3dvcmtzcGFjZS9yZWR1Y2VyJztcblxudHlwZSBDb21wb25lbnRQcm9wcyA9IHtcbiAgb25TY2FuOiAoKSA9PiB2b2lkO1xufTtcblxudHlwZSBDb25uZWN0ZWRQcm9wID0geyBjcmVhdGlvbk9iamVjdDogYW55IH07XG5cbmNvbnN0IFNjYW5NZW51OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Q29tcG9uZW50UHJvcHMgJiBDb25uZWN0ZWRQcm9wPiA9ICh7XG4gIG9uU2NhbixcbiAgY3JlYXRpb25PYmplY3QsXG59KSA9PiB7XG4gIGNvbnN0IGhhc1JldlByaW50ZWREYXRhID0gISEoXG4gICAgY3JlYXRpb25PYmplY3QgJiZcbiAgICBjcmVhdGlvbk9iamVjdC5pbml0Y29udGV4dCA9PSAncHJpbnR0b3JldicgJiZcbiAgICBjcmVhdGlvbk9iamVjdC5kYXRhXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2SXRlbVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvblNjYW4gJiYgb25TY2FuKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgPFRvb2x0aXAgaWQ9J3NjYW5NZW51dG9vbHRpcCc+XG4gICAgICAgICAgICB7aGFzUmV2UHJpbnRlZERhdGEgPyAnSW1wb3J0IHByaW50ZWQgaW1hZ2VzJyA6ICdTY2FuIGltYWdlcyd9XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtoYXNSZXZQcmludGVkRGF0YSA/IChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcHJpbnQgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jaXJjbGUtby1ub3RjaCBmYS0zeCBmYS1zcGluJ1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNyxcbiAgICAgICAgICAgICAgICB0b3A6IC0xOCxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNjY2MnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1lcmFzZXIgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICApfVxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICA8L05hdkl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3AsIHsgZGlzcGF0Y2ggfSwgQ29tcG9uZW50UHJvcHM+KChzdGF0ZSwgb3ducHJvcHMpID0+IHtcbiAgY29uc3QgeyBjcmVhdGlvbk9iamVjdCB9ID0gZW5zdXJlV29ya3NwYWNlKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4geyBjcmVhdGlvbk9iamVjdCB9O1xufSkoU2Nhbk1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL3NjYW5NZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGVuc3VyZU1haW5OYXYsIHsgSU5hdk1lbnVTdGF0ZSB9IGZyb20gJy4uL21haW5OYXYvcmVkdWNlcic7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAncmVhY3QtdG9nZ2xlLWJ1dHRvbic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG50eXBlIFZpZXdQcm9wcyA9IElOYXZNZW51U3RhdGUgJiB7IGRpc3BhdGNoIH07XG5cbmNvbnN0IGJvcmRlclJhZGl1c1N0eWxlID0geyBib3JkZXJSYWRpdXM6IDIgfTtcbmNvbnN0IHRvb2x0aXAgPSA8VG9vbHRpcCBpZD0ndG9vbHRpcCc+U2VsZWN0IHNjYW5uZXIgYmVmb3JlIHNjYW5uaW5nPC9Ub29sdGlwPjtcbmNvbnN0IGxhYmVsID0gKFxuICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PSdib3R0b20nIG92ZXJsYXk9e3Rvb2x0aXB9PlxuICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZXJhc2VyJyBzdHlsZT17eyBtYXJnaW46ICdhdXRvJyB9fSAvPlxuICA8L092ZXJsYXlUcmlnZ2VyPlxuKTtcblxuY29uc3QgTW92ZWFibGVTZXR0aW5nOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Vmlld1Byb3BzPiA9ICh7IGRpc3BhdGNoLCBzZWxlY3RhYmxlU2V0dGluZ3MgfSkgPT4gKFxuICA8bGk+XG4gICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBwYWRkaW5nUmlnaHQ6ICc1cHgnIH19PlxuICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICB0aHVtYkljb249e2xhYmVsfVxuICAgICAgICBhY3RpdmVMYWJlbD0nT04nXG4gICAgICAgIGluYWN0aXZlTGFiZWw9J09GRidcbiAgICAgICAgY29sb3JzPXt7XG4gICAgICAgICAgYWN0aXZlVGh1bWI6IHtcbiAgICAgICAgICAgIGJhc2U6ICcjZjM3MDI5JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluYWN0aXZlVGh1bWI6IHtcbiAgICAgICAgICAgIGJhc2U6ICcjZjM3MDI5JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17ISFzZWxlY3RhYmxlU2V0dGluZ3NbJ3NlbGVjdFNjYW5uZXInXX1cbiAgICAgICAgdGh1bWJTdHlsZT17Ym9yZGVyUmFkaXVzU3R5bGV9XG4gICAgICAgIHRyYWNrU3R5bGU9e2JvcmRlclJhZGl1c1N0eWxlfVxuICAgICAgICBvblRvZ2dsZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgLy9yZW1lYmVyIHRvIGFkZCB0byBtYWlubmF2L3JlZHVjZXIudCA9cyA6c2V0dGluZ3NUb1BlcnNpc3QgaWYgeW91IHdhbnQgc2V0dGluZyB0byBwZXJzaXN0XG5cbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVNYWluTmF2KCkudXBkYXRlU2V0dGluZygnc2VsZWN0U2Nhbm5lcicsICF2YWx1ZSkpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3Bhbj5TZWxlY3Qgc2Nhbm5lcjwvc3Bhbj5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiB7XG4gIHJldHVybiBlbnN1cmVNYWluTmF2KCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKSB8fCB7fTtcbn0pKE1vdmVhYmxlU2V0dGluZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbm5lclNlbGVjdE1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGVuc3VyZVByb2plY3RzIGZyb20gJy4uL3Byb2plY3RzL3JlZHVjZXInO1xuaW1wb3J0IGVuc3VyZVNlYXJjaCBmcm9tICcuLi9zZWFyY2hWaWV3L3JlZHVjZXInO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBwYWdlSWQ6IHN0cmluZztcbn07XG5cbnR5cGUgQ29ubmVjdGVkUHJvcHMgPSB7XG4gIHJlYWRvbmx5IHNob3dPY3JUZXh0Zm9yUGFnZUlkOiBzdHJpbmc7XG4gIHJlYWRvbmx5IE9DUkVuYWJsZWQ6IGJvb2xlYW47XG59O1xuXG5jb25zdCBPQ1JNZW51OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Q29ubmVjdGVkUHJvcHMgJiBDb21wb25lbnRQcm9wcyAmIHsgZGlzcGF0Y2ggfT4gPSAoe1xuICBzaG93T2NyVGV4dGZvclBhZ2VJZCxcbiAgT0NSRW5hYmxlZCxcbiAgcGFnZUlkLFxuICBkaXNwYXRjaCxcbn0pID0+IHtcbiAgaWYgKCFPQ1JFbmFibGVkKSByZXR1cm4gPFJlYWN0LkZyYWdtZW50PiZuYnNwOzwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cblxuICAgICAgPE1lbnVJdGVtXG4gICAgICAgIGtleT0nb2NyX2RhdGEnXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlU2VhcmNoKCkuVG9nZ2xlT2NyVGV4dChwYWdlSWQpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCIgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX0qL31cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgU2hvdyBPQ1IgRGF0YVxuICAgICAgICAgIHtzaG93T2NyVGV4dGZvclBhZ2VJZCA9PSBwYWdlSWQgJiYgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGVjayBjb2xvci1vcmFuZ2UnPjwvaT59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwgQ29tcG9uZW50UHJvcHM+KChzdGF0ZSkgPT4ge1xuICBjb25zdCB7IHNlbGVjdGVkUHJvamVjdCB9ID0gZW5zdXJlUHJvamVjdHMoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuICBjb25zdCB7IHNob3dPY3JUZXh0Zm9yUGFnZUlkIH0gPSBlbnN1cmVTZWFyY2goKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiB7XG4gICAgT0NSRW5hYmxlZDogISEoc2VsZWN0ZWRQcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdC5mdWxsVGV4dE9jciksXG4gICAgc2hvd09jclRleHRmb3JQYWdlSWQsXG4gIH07XG59KShPQ1JNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3NlYXJjaFZpZXcvb2NyTWVudS50c3giLCJleHBvcnQgZGVmYXVsdCB7fTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyL2Rpc3QvZW50cnkuanMhLi9yZWFjdFdlYlV0aWxzL2Jhc2Uvbm8tbG9hZGVyLmpzIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2xpZ2h0Qm94LmNsaWVudE9ubHkudHN4IiwiKGZ1bmN0aW9uKHJvb3QsZmFjdG9yeSl7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5ldmVudExpc3RlbmVyID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gd3JhcChzdGFuZGFyZCwgZmFsbGJhY2spIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKGVsLCBldnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuXHRcdFx0aWYgKGVsW3N0YW5kYXJkXSkge1xuXHRcdFx0XHRlbFtzdGFuZGFyZF0oZXZ0TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuXHRcdFx0fSBlbHNlIGlmIChlbFtmYWxsYmFja10pIHtcblx0XHRcdFx0ZWxbZmFsbGJhY2tdKCdvbicgKyBldnROYW1lLCBsaXN0ZW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbiAgICByZXR1cm4ge1xuXHRcdGFkZDogd3JhcCgnYWRkRXZlbnRMaXN0ZW5lcicsICdhdHRhY2hFdmVudCcpLFxuXHRcdHJlbW92ZTogd3JhcCgncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdkZXRhY2hFdmVudCcpXG5cdH07XG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50bGlzdGVuZXIvZXZlbnRsaXN0ZW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIGZpbGVzaXplXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIEphc29uIE11bGxpZ2FuIDxqYXNvbi5tdWxsaWdhbkBhdm9pZHdvcmsuY29tPlxuICogQGxpY2Vuc2UgQlNELTMtQ2xhdXNlXG4gKiBAdmVyc2lvbiA2LjQuMFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5maWxlc2l6ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuXHR2YXIgYiA9IC9eKGJ8QikkLyxcblx0ICAgIHN5bWJvbCA9IHtcblx0ICBpZWM6IHtcblx0ICAgIGJpdHM6IFtcImJcIiwgXCJLaWJcIiwgXCJNaWJcIiwgXCJHaWJcIiwgXCJUaWJcIiwgXCJQaWJcIiwgXCJFaWJcIiwgXCJaaWJcIiwgXCJZaWJcIl0sXG5cdCAgICBieXRlczogW1wiQlwiLCBcIktpQlwiLCBcIk1pQlwiLCBcIkdpQlwiLCBcIlRpQlwiLCBcIlBpQlwiLCBcIkVpQlwiLCBcIlppQlwiLCBcIllpQlwiXVxuXHQgIH0sXG5cdCAgamVkZWM6IHtcblx0ICAgIGJpdHM6IFtcImJcIiwgXCJLYlwiLCBcIk1iXCIsIFwiR2JcIiwgXCJUYlwiLCBcIlBiXCIsIFwiRWJcIiwgXCJaYlwiLCBcIlliXCJdLFxuXHQgICAgYnl0ZXM6IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCIsIFwiRUJcIiwgXCJaQlwiLCBcIllCXCJdXG5cdCAgfVxuXHR9LFxuXHQgICAgZnVsbGZvcm0gPSB7XG5cdCAgaWVjOiBbXCJcIiwgXCJraWJpXCIsIFwibWViaVwiLCBcImdpYmlcIiwgXCJ0ZWJpXCIsIFwicGViaVwiLCBcImV4YmlcIiwgXCJ6ZWJpXCIsIFwieW9iaVwiXSxcblx0ICBqZWRlYzogW1wiXCIsIFwia2lsb1wiLCBcIm1lZ2FcIiwgXCJnaWdhXCIsIFwidGVyYVwiLCBcInBldGFcIiwgXCJleGFcIiwgXCJ6ZXR0YVwiLCBcInlvdHRhXCJdXG5cdH0sXG5cdCAgICByb3VuZGluZ0Z1bmNzID0ge1xuXHQgIGZsb29yOiBNYXRoLmZsb29yLFxuXHQgIGNlaWw6IE1hdGguY2VpbFxuXHR9O1xuXHQvKipcblx0ICogZmlsZXNpemVcblx0ICpcblx0ICogQG1ldGhvZCBmaWxlc2l6ZVxuXHQgKiBAcGFyYW0gIHtNaXhlZH0gICBhcmcgICAgICAgIFN0cmluZywgSW50IG9yIEZsb2F0IHRvIHRyYW5zZm9ybVxuXHQgKiBAcGFyYW0gIHtPYmplY3R9ICBkZXNjcmlwdG9yIFtPcHRpb25hbF0gRmxhZ3Ncblx0ICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICBSZWFkYWJsZSBmaWxlIHNpemUgU3RyaW5nXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIGZpbGVzaXplKGFyZykge1xuXHQgIHZhciBkZXNjcmlwdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblx0ICB2YXIgcmVzdWx0ID0gW10sXG5cdCAgICAgIHZhbCA9IDAsXG5cdCAgICAgIGUsXG5cdCAgICAgIGJhc2UsXG5cdCAgICAgIGJpdHMsXG5cdCAgICAgIGNlaWwsXG5cdCAgICAgIGZ1bGwsXG5cdCAgICAgIGZ1bGxmb3Jtcyxcblx0ICAgICAgbG9jYWxlLFxuXHQgICAgICBsb2NhbGVPcHRpb25zLFxuXHQgICAgICBuZWcsXG5cdCAgICAgIG51bSxcblx0ICAgICAgb3V0cHV0LFxuXHQgICAgICBwYWQsXG5cdCAgICAgIHJvdW5kLFxuXHQgICAgICB1LFxuXHQgICAgICB1bml4LFxuXHQgICAgICBzZXBhcmF0b3IsXG5cdCAgICAgIHNwYWNlcixcblx0ICAgICAgc3RhbmRhcmQsXG5cdCAgICAgIHN5bWJvbHMsXG5cdCAgICAgIHJvdW5kaW5nRnVuYyxcblx0ICAgICAgcHJlY2lzaW9uO1xuXG5cdCAgaWYgKGlzTmFOKGFyZykpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIG51bWJlclwiKTtcblx0ICB9XG5cblx0ICBiaXRzID0gZGVzY3JpcHRvci5iaXRzID09PSB0cnVlO1xuXHQgIHVuaXggPSBkZXNjcmlwdG9yLnVuaXggPT09IHRydWU7XG5cdCAgcGFkID0gZGVzY3JpcHRvci5wYWQgPT09IHRydWU7XG5cdCAgYmFzZSA9IGRlc2NyaXB0b3IuYmFzZSB8fCAyO1xuXHQgIHJvdW5kID0gZGVzY3JpcHRvci5yb3VuZCAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5yb3VuZCA6IHVuaXggPyAxIDogMjtcblx0ICBsb2NhbGUgPSBkZXNjcmlwdG9yLmxvY2FsZSAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5sb2NhbGUgOiBcIlwiO1xuXHQgIGxvY2FsZU9wdGlvbnMgPSBkZXNjcmlwdG9yLmxvY2FsZU9wdGlvbnMgfHwge307XG5cdCAgc2VwYXJhdG9yID0gZGVzY3JpcHRvci5zZXBhcmF0b3IgIT09IHZvaWQgMCA/IGRlc2NyaXB0b3Iuc2VwYXJhdG9yIDogXCJcIjtcblx0ICBzcGFjZXIgPSBkZXNjcmlwdG9yLnNwYWNlciAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5zcGFjZXIgOiB1bml4ID8gXCJcIiA6IFwiIFwiO1xuXHQgIHN5bWJvbHMgPSBkZXNjcmlwdG9yLnN5bWJvbHMgfHwge307XG5cdCAgc3RhbmRhcmQgPSBiYXNlID09PSAyID8gZGVzY3JpcHRvci5zdGFuZGFyZCB8fCBcImplZGVjXCIgOiBcImplZGVjXCI7XG5cdCAgb3V0cHV0ID0gZGVzY3JpcHRvci5vdXRwdXQgfHwgXCJzdHJpbmdcIjtcblx0ICBmdWxsID0gZGVzY3JpcHRvci5mdWxsZm9ybSA9PT0gdHJ1ZTtcblx0ICBmdWxsZm9ybXMgPSBkZXNjcmlwdG9yLmZ1bGxmb3JtcyBpbnN0YW5jZW9mIEFycmF5ID8gZGVzY3JpcHRvci5mdWxsZm9ybXMgOiBbXTtcblx0ICBlID0gZGVzY3JpcHRvci5leHBvbmVudCAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5leHBvbmVudCA6IC0xO1xuXHQgIHJvdW5kaW5nRnVuYyA9IHJvdW5kaW5nRnVuY3NbZGVzY3JpcHRvci5yb3VuZGluZ01ldGhvZF0gfHwgTWF0aC5yb3VuZDtcblx0ICBudW0gPSBOdW1iZXIoYXJnKTtcblx0ICBuZWcgPSBudW0gPCAwO1xuXHQgIGNlaWwgPSBiYXNlID4gMiA/IDEwMDAgOiAxMDI0O1xuXHQgIHByZWNpc2lvbiA9IGlzTmFOKGRlc2NyaXB0b3IucHJlY2lzaW9uKSA9PT0gZmFsc2UgPyBwYXJzZUludChkZXNjcmlwdG9yLnByZWNpc2lvbiwgMTApIDogMDsgLy8gRmxpcHBpbmcgYSBuZWdhdGl2ZSBudW1iZXIgdG8gZGV0ZXJtaW5lIHRoZSBzaXplXG5cblx0ICBpZiAobmVnKSB7XG5cdCAgICBudW0gPSAtbnVtO1xuXHQgIH0gLy8gRGV0ZXJtaW5pbmcgdGhlIGV4cG9uZW50XG5cblxuXHQgIGlmIChlID09PSAtMSB8fCBpc05hTihlKSkge1xuXHQgICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cobnVtKSAvIE1hdGgubG9nKGNlaWwpKTtcblxuXHQgICAgaWYgKGUgPCAwKSB7XG5cdCAgICAgIGUgPSAwO1xuXHQgICAgfVxuXHQgIH0gLy8gRXhjZWVkaW5nIHN1cHBvcnRlZCBsZW5ndGgsIHRpbWUgdG8gcmVkdWNlICYgbXVsdGlwbHlcblxuXG5cdCAgaWYgKGUgPiA4KSB7XG5cdCAgICBpZiAocHJlY2lzaW9uID4gMCkge1xuXHQgICAgICBwcmVjaXNpb24gKz0gOCAtIGU7XG5cdCAgICB9XG5cblx0ICAgIGUgPSA4O1xuXHQgIH1cblxuXHQgIGlmIChvdXRwdXQgPT09IFwiZXhwb25lbnRcIikge1xuXHQgICAgcmV0dXJuIGU7XG5cdCAgfSAvLyBaZXJvIGlzIG5vdyBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIGJ5dGVzIGRpdmlkZSBieSAxXG5cblxuXHQgIGlmIChudW0gPT09IDApIHtcblx0ICAgIHJlc3VsdFswXSA9IDA7XG5cdCAgICB1ID0gcmVzdWx0WzFdID0gdW5peCA/IFwiXCIgOiBzeW1ib2xbc3RhbmRhcmRdW2JpdHMgPyBcImJpdHNcIiA6IFwiYnl0ZXNcIl1bZV07XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhbCA9IG51bSAvIChiYXNlID09PSAyID8gTWF0aC5wb3coMiwgZSAqIDEwKSA6IE1hdGgucG93KDEwMDAsIGUpKTtcblxuXHQgICAgaWYgKGJpdHMpIHtcblx0ICAgICAgdmFsID0gdmFsICogODtcblxuXHQgICAgICBpZiAodmFsID49IGNlaWwgJiYgZSA8IDgpIHtcblx0ICAgICAgICB2YWwgPSB2YWwgLyBjZWlsO1xuXHQgICAgICAgIGUrKztcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcCA9IE1hdGgucG93KDEwLCBlID4gMCA/IHJvdW5kIDogMCk7XG5cdCAgICByZXN1bHRbMF0gPSByb3VuZGluZ0Z1bmModmFsICogcCkgLyBwO1xuXG5cdCAgICBpZiAocmVzdWx0WzBdID09PSBjZWlsICYmIGUgPCA4ICYmIGRlc2NyaXB0b3IuZXhwb25lbnQgPT09IHZvaWQgMCkge1xuXHQgICAgICByZXN1bHRbMF0gPSAxO1xuXHQgICAgICBlKys7XG5cdCAgICB9XG5cblx0ICAgIHUgPSByZXN1bHRbMV0gPSBiYXNlID09PSAxMCAmJiBlID09PSAxID8gYml0cyA/IFwia2JcIiA6IFwia0JcIiA6IHN5bWJvbFtzdGFuZGFyZF1bYml0cyA/IFwiYml0c1wiIDogXCJieXRlc1wiXVtlXTtcblxuXHQgICAgaWYgKHVuaXgpIHtcblx0ICAgICAgcmVzdWx0WzFdID0gc3RhbmRhcmQgPT09IFwiamVkZWNcIiA/IHJlc3VsdFsxXS5jaGFyQXQoMCkgOiBlID4gMCA/IHJlc3VsdFsxXS5yZXBsYWNlKC9CJC8sIFwiXCIpIDogcmVzdWx0WzFdO1xuXG5cdCAgICAgIGlmIChiLnRlc3QocmVzdWx0WzFdKSkge1xuXHQgICAgICAgIHJlc3VsdFswXSA9IE1hdGguZmxvb3IocmVzdWx0WzBdKTtcblx0ICAgICAgICByZXN1bHRbMV0gPSBcIlwiO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSAvLyBEZWNvcmF0aW5nIGEgJ2RpZmYnXG5cblxuXHQgIGlmIChuZWcpIHtcblx0ICAgIHJlc3VsdFswXSA9IC1yZXN1bHRbMF07XG5cdCAgfSAvLyBTZXR0aW5nIG9wdGlvbmFsIHByZWNpc2lvblxuXG5cblx0ICBpZiAocHJlY2lzaW9uID4gMCkge1xuXHQgICAgcmVzdWx0WzBdID0gcmVzdWx0WzBdLnRvUHJlY2lzaW9uKHByZWNpc2lvbik7XG5cdCAgfSAvLyBBcHBseWluZyBjdXN0b20gc3ltYm9sXG5cblxuXHQgIHJlc3VsdFsxXSA9IHN5bWJvbHNbcmVzdWx0WzFdXSB8fCByZXN1bHRbMV07XG5cblx0ICBpZiAobG9jYWxlID09PSB0cnVlKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9Mb2NhbGVTdHJpbmcoKTtcblx0ICB9IGVsc2UgaWYgKGxvY2FsZS5sZW5ndGggPiAwKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBsb2NhbGVPcHRpb25zKTtcblx0ICB9IGVsc2UgaWYgKHNlcGFyYXRvci5sZW5ndGggPiAwKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBzZXBhcmF0b3IpO1xuXHQgIH1cblxuXHQgIGlmIChwYWQgJiYgTnVtYmVyLmlzSW50ZWdlcihyZXN1bHRbMF0pID09PSBmYWxzZSAmJiByb3VuZCA+IDApIHtcblx0ICAgIHZhciB4ID0gc2VwYXJhdG9yIHx8IFwiLlwiLFxuXHQgICAgICAgIHRtcCA9IHJlc3VsdFswXS50b1N0cmluZygpLnNwbGl0KHgpLFxuXHQgICAgICAgIHMgPSB0bXBbMV0gfHwgXCJcIixcblx0ICAgICAgICBsID0gcy5sZW5ndGgsXG5cdCAgICAgICAgbiA9IHJvdW5kIC0gbDtcblx0ICAgIHJlc3VsdFswXSA9IFwiXCIuY29uY2F0KHRtcFswXSkuY29uY2F0KHgpLmNvbmNhdChzLnBhZEVuZChsICsgbiwgXCIwXCIpKTtcblx0ICB9XG5cblx0ICBpZiAoZnVsbCkge1xuXHQgICAgcmVzdWx0WzFdID0gZnVsbGZvcm1zW2VdID8gZnVsbGZvcm1zW2VdIDogZnVsbGZvcm1bc3RhbmRhcmRdW2VdICsgKGJpdHMgPyBcImJpdFwiIDogXCJieXRlXCIpICsgKHJlc3VsdFswXSA9PT0gMSA/IFwiXCIgOiBcInNcIik7XG5cdCAgfSAvLyBSZXR1cm5pbmcgQXJyYXksIE9iamVjdCwgb3IgU3RyaW5nIChkZWZhdWx0KVxuXG5cblx0ICByZXR1cm4gb3V0cHV0ID09PSBcImFycmF5XCIgPyByZXN1bHQgOiBvdXRwdXQgPT09IFwib2JqZWN0XCIgPyB7XG5cdCAgICB2YWx1ZTogcmVzdWx0WzBdLFxuXHQgICAgc3ltYm9sOiByZXN1bHRbMV0sXG5cdCAgICBleHBvbmVudDogZSxcblx0ICAgIHVuaXQ6IHVcblx0ICB9IDogcmVzdWx0LmpvaW4oc3BhY2VyKTtcblx0fSAvLyBQYXJ0aWFsIGFwcGxpY2F0aW9uIGZvciBmdW5jdGlvbmFsIHByb2dyYW1taW5nXG5cblxuXHRmaWxlc2l6ZS5wYXJ0aWFsID0gZnVuY3Rpb24gKG9wdCkge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG5cdCAgICByZXR1cm4gZmlsZXNpemUoYXJnLCBvcHQpO1xuXHQgIH07XG5cdH07XG5cblx0cmV0dXJuIGZpbGVzaXplO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGVzaXplL2xpYi9maWxlc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoLnRocm90dGxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8vIGVtcHR5IChudWxsLWxvYWRlcilcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gNTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9ldmVudGxpc3RlbmVyID0gcmVxdWlyZSgnZXZlbnRsaXN0ZW5lcicpO1xuXG52YXIgX2xvZGFzaCA9IHJlcXVpcmUoJ2xvZGFzaC5kZWJvdW5jZScpO1xuXG52YXIgX2xvZGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2gpO1xuXG52YXIgX2xvZGFzaDMgPSByZXF1aXJlKCdsb2Rhc2gudGhyb3R0bGUnKTtcblxudmFyIF9sb2Rhc2g0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoMyk7XG5cbnZhciBfcGFyZW50U2Nyb2xsID0gcmVxdWlyZSgnLi91dGlscy9wYXJlbnRTY3JvbGwnKTtcblxudmFyIF9wYXJlbnRTY3JvbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyZW50U2Nyb2xsKTtcblxudmFyIF9pblZpZXdwb3J0ID0gcmVxdWlyZSgnLi91dGlscy9pblZpZXdwb3J0Jyk7XG5cbnZhciBfaW5WaWV3cG9ydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pblZpZXdwb3J0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTGF6eUxvYWQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGF6eUxvYWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExhenlMb2FkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhenlMb2FkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMYXp5TG9hZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExhenlMb2FkKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMubGF6eUxvYWRIYW5kbGVyID0gX3RoaXMubGF6eUxvYWRIYW5kbGVyLmJpbmQoX3RoaXMpO1xuXG4gICAgaWYgKHByb3BzLnRocm90dGxlID4gMCkge1xuICAgICAgaWYgKHByb3BzLmRlYm91bmNlKSB7XG4gICAgICAgIF90aGlzLmxhenlMb2FkSGFuZGxlciA9ICgwLCBfbG9kYXNoMi5kZWZhdWx0KShfdGhpcy5sYXp5TG9hZEhhbmRsZXIsIHByb3BzLnRocm90dGxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmxhenlMb2FkSGFuZGxlciA9ICgwLCBfbG9kYXNoNC5kZWZhdWx0KShfdGhpcy5sYXp5TG9hZEhhbmRsZXIsIHByb3BzLnRocm90dGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgdmlzaWJsZTogZmFsc2UgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGF6eUxvYWQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX21vdW50ZWQgPSB0cnVlO1xuICAgICAgdmFyIGV2ZW50Tm9kZSA9IHRoaXMuZ2V0RXZlbnROb2RlKCk7XG5cbiAgICAgIHRoaXMubGF6eUxvYWRIYW5kbGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLmxhenlMb2FkSGFuZGxlci5mbHVzaCkge1xuICAgICAgICB0aGlzLmxhenlMb2FkSGFuZGxlci5mbHVzaCgpO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIuYWRkKSh3aW5kb3csICdyZXNpemUnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIuYWRkKShldmVudE5vZGUsICdzY3JvbGwnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmxhenlMb2FkSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShfbmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIHJldHVybiBuZXh0U3RhdGUudmlzaWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fbW91bnRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMubGF6eUxvYWRIYW5kbGVyLmNhbmNlbCkge1xuICAgICAgICB0aGlzLmxhenlMb2FkSGFuZGxlci5jYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXRhY2hMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRFdmVudE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFdmVudE5vZGUoKSB7XG4gICAgICByZXR1cm4gKDAsIF9wYXJlbnRTY3JvbGwyLmRlZmF1bHQpKCgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvZmZzZXQgPSBfcHJvcHMub2Zmc2V0LFxuICAgICAgICAgIG9mZnNldFZlcnRpY2FsID0gX3Byb3BzLm9mZnNldFZlcnRpY2FsLFxuICAgICAgICAgIG9mZnNldEhvcml6b250YWwgPSBfcHJvcHMub2Zmc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgICBvZmZzZXRUb3AgPSBfcHJvcHMub2Zmc2V0VG9wLFxuICAgICAgICAgIG9mZnNldEJvdHRvbSA9IF9wcm9wcy5vZmZzZXRCb3R0b20sXG4gICAgICAgICAgb2Zmc2V0TGVmdCA9IF9wcm9wcy5vZmZzZXRMZWZ0LFxuICAgICAgICAgIG9mZnNldFJpZ2h0ID0gX3Byb3BzLm9mZnNldFJpZ2h0LFxuICAgICAgICAgIHRocmVzaG9sZCA9IF9wcm9wcy50aHJlc2hvbGQ7XG5cblxuICAgICAgdmFyIF9vZmZzZXRBbGwgPSB0aHJlc2hvbGQgfHwgb2Zmc2V0O1xuICAgICAgdmFyIF9vZmZzZXRWZXJ0aWNhbCA9IG9mZnNldFZlcnRpY2FsIHx8IF9vZmZzZXRBbGw7XG4gICAgICB2YXIgX29mZnNldEhvcml6b250YWwgPSBvZmZzZXRIb3Jpem9udGFsIHx8IF9vZmZzZXRBbGw7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogb2Zmc2V0VG9wIHx8IF9vZmZzZXRWZXJ0aWNhbCxcbiAgICAgICAgYm90dG9tOiBvZmZzZXRCb3R0b20gfHwgX29mZnNldFZlcnRpY2FsLFxuICAgICAgICBsZWZ0OiBvZmZzZXRMZWZ0IHx8IF9vZmZzZXRIb3Jpem9udGFsLFxuICAgICAgICByaWdodDogb2Zmc2V0UmlnaHQgfHwgX29mZnNldEhvcml6b250YWxcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGF6eUxvYWRIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGF6eUxvYWRIYW5kbGVyKCkge1xuICAgICAgaWYgKCF0aGlzLl9tb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldE9mZnNldCgpO1xuICAgICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcbiAgICAgIHZhciBldmVudE5vZGUgPSB0aGlzLmdldEV2ZW50Tm9kZSgpO1xuXG4gICAgICBpZiAoKDAsIF9pblZpZXdwb3J0Mi5kZWZhdWx0KShub2RlLCBldmVudE5vZGUsIG9mZnNldCkpIHtcbiAgICAgICAgdmFyIG9uQ29udGVudFZpc2libGUgPSB0aGlzLnByb3BzLm9uQ29udGVudFZpc2libGU7XG5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG9uQ29udGVudFZpc2libGUpIHtcbiAgICAgICAgICAgIG9uQ29udGVudFZpc2libGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRldGFjaExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBldmVudE5vZGUgPSB0aGlzLmdldEV2ZW50Tm9kZSgpO1xuXG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIucmVtb3ZlKSh3aW5kb3csICdyZXNpemUnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIucmVtb3ZlKShldmVudE5vZGUsICdzY3JvbGwnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBoZWlnaHQgPSBfcHJvcHMyLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9wcm9wczIud2lkdGg7XG4gICAgICB2YXIgdmlzaWJsZSA9IHRoaXMuc3RhdGUudmlzaWJsZTtcblxuXG4gICAgICB2YXIgZWxTdHlsZXMgPSB7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfTtcbiAgICAgIHZhciBlbENsYXNzZXMgPSAnTGF6eUxvYWQnICsgKHZpc2libGUgPyAnIGlzLXZpc2libGUnIDogJycpICsgKGNsYXNzTmFtZSA/ICcgJyArIGNsYXNzTmFtZSA6ICcnKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuZWxlbWVudFR5cGUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbENsYXNzZXMsXG4gICAgICAgIHN0eWxlOiBlbFN0eWxlc1xuICAgICAgfSwgdmlzaWJsZSAmJiBfcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMYXp5TG9hZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExhenlMb2FkO1xuXG5cbkxhenlMb2FkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBkZWJvdW5jZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBlbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBvZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRCb3R0b206IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRIb3Jpem9udGFsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0TGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldFJpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0VG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0VmVydGljYWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0aHJlc2hvbGQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0aHJvdHRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIG9uQ29udGVudFZpc2libGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuTGF6eUxvYWQuZGVmYXVsdFByb3BzID0ge1xuICBlbGVtZW50VHlwZTogJ2RpdicsXG4gIGRlYm91bmNlOiB0cnVlLFxuICBvZmZzZXQ6IDAsXG4gIG9mZnNldEJvdHRvbTogMCxcbiAgb2Zmc2V0SG9yaXpvbnRhbDogMCxcbiAgb2Zmc2V0TGVmdDogMCxcbiAgb2Zmc2V0UmlnaHQ6IDAsXG4gIG9mZnNldFRvcDogMCxcbiAgb2Zmc2V0VmVydGljYWw6IDAsXG4gIHRocm90dGxlOiAyNTBcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvTGF6eUxvYWQuanNcbi8vIG1vZHVsZSBpZCA9IDU0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRFbGVtZW50UG9zaXRpb247XG4vKlxuKiBGaW5kcyBlbGVtZW50J3MgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHdob2xlIGRvY3VtZW50LFxuKiByYXRoZXIgdGhhbiB0byB0aGUgdmlld3BvcnQgYXMgaXQgaXMgdGhlIGNhc2Ugd2l0aCAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuXG4qL1xuZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9nZXRFbGVtZW50UG9zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW5WaWV3cG9ydDtcblxudmFyIF9nZXRFbGVtZW50UG9zaXRpb24gPSByZXF1aXJlKCcuL2dldEVsZW1lbnRQb3NpdGlvbicpO1xuXG52YXIgX2dldEVsZW1lbnRQb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRFbGVtZW50UG9zaXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGluVmlld3BvcnQoZWxlbWVudCwgY29udGFpbmVyLCBjdXN0b21PZmZzZXQpIHtcbiAgaWYgKGlzSGlkZGVuKGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHRvcCA9IHZvaWQgMDtcbiAgdmFyIGJvdHRvbSA9IHZvaWQgMDtcbiAgdmFyIGxlZnQgPSB2b2lkIDA7XG4gIHZhciByaWdodCA9IHZvaWQgMDtcblxuICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PT0gJ3VuZGVmaW5lZCcgfHwgY29udGFpbmVyID09PSB3aW5kb3cpIHtcbiAgICB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICBib3R0b20gPSB0b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSBsZWZ0ICsgd2luZG93LmlubmVyV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvbnRhaW5lclBvc2l0aW9uID0gKDAsIF9nZXRFbGVtZW50UG9zaXRpb24yLmRlZmF1bHQpKGNvbnRhaW5lcik7XG5cbiAgICB0b3AgPSBjb250YWluZXJQb3NpdGlvbi50b3A7XG4gICAgbGVmdCA9IGNvbnRhaW5lclBvc2l0aW9uLmxlZnQ7XG4gICAgYm90dG9tID0gdG9wICsgY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICByaWdodCA9IGxlZnQgKyBjb250YWluZXIub2Zmc2V0V2lkdGg7XG4gIH1cblxuICB2YXIgZWxlbWVudFBvc2l0aW9uID0gKDAsIF9nZXRFbGVtZW50UG9zaXRpb24yLmRlZmF1bHQpKGVsZW1lbnQpO1xuXG4gIHJldHVybiB0b3AgPD0gZWxlbWVudFBvc2l0aW9uLnRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgY3VzdG9tT2Zmc2V0LnRvcCAmJiBib3R0b20gPj0gZWxlbWVudFBvc2l0aW9uLnRvcCAtIGN1c3RvbU9mZnNldC5ib3R0b20gJiYgbGVmdCA8PSBlbGVtZW50UG9zaXRpb24ubGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggKyBjdXN0b21PZmZzZXQubGVmdCAmJiByaWdodCA+PSBlbGVtZW50UG9zaXRpb24ubGVmdCAtIGN1c3RvbU9mZnNldC5yaWdodDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9pblZpZXdwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdHlsZSA9IGZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQsIHByb3ApIHtcbiAgcmV0dXJuIHR5cGVvZiBnZXRDb21wdXRlZFN0eWxlICE9PSAndW5kZWZpbmVkJyA/IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSA6IGVsZW1lbnQuc3R5bGVbcHJvcF07XG59O1xuXG52YXIgb3ZlcmZsb3cgPSBmdW5jdGlvbiBvdmVyZmxvdyhlbGVtZW50KSB7XG4gIHJldHVybiBzdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cnKSArIHN0eWxlKGVsZW1lbnQsICdvdmVyZmxvdy15JykgKyBzdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cteCcpO1xufTtcblxudmFyIHNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uIHNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgdmFyIHBhcmVudCA9IGVsZW1lbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgcGFyZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICgvKHNjcm9sbHxhdXRvKS8udGVzdChvdmVyZmxvdyhwYXJlbnQpKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3c7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzY3JvbGxQYXJlbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvcGFyZW50U2Nyb2xsLmpzXG4vLyBtb2R1bGUgaWQgPSA1NDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gNTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZXNpemVPYnNlcnZlclBvbHlmaWxsID0gcmVxdWlyZSgncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJyk7XG5cbnZhciBfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNpemVPYnNlcnZlclBvbHlmaWxsKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKiBlc2xpbnQgbm8tZGVidWdnZXI6IFwid2FyblwiICovXG5cblxuLyoqXG4gKiBQcmVkZWZpbmVkIGNvbnN0YW50c1xuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGNvbnN0YW50cyA9IHtcbiAgb3JpZW50YXRpb246IHtcbiAgICBob3Jpem9udGFsOiB7XG4gICAgICBkaW1lbnNpb246ICd3aWR0aCcsXG4gICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgIHJldmVyc2VEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICBjb29yZGluYXRlOiAneCdcbiAgICB9LFxuICAgIHZlcnRpY2FsOiB7XG4gICAgICBkaW1lbnNpb246ICdoZWlnaHQnLFxuICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgIHJldmVyc2VEaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgY29vcmRpbmF0ZTogJ3knXG4gICAgfVxuICB9XG59O1xuXG52YXIgU2xpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNsaWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2xpZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNsaWRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2xpZGVyKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlRm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gX3RoaXMucHJvcHMuZm9ybWF0O1xuXG4gICAgICByZXR1cm4gZm9ybWF0ID8gZm9ybWF0KHZhbHVlKSA6IHZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnNsaWRlcikge1xuICAgICAgICAvLyBmb3Igc2hhbGxvdyByZW5kZXJpbmdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9yaWVudGF0aW9uID0gX3RoaXMucHJvcHMub3JpZW50YXRpb247XG5cbiAgICAgIHZhciBkaW1lbnNpb24gPSAoMCwgX3V0aWxzLmNhcGl0YWxpemUpKGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uZGltZW5zaW9uKTtcbiAgICAgIHZhciBzbGlkZXJQb3MgPSBfdGhpcy5zbGlkZXJbJ29mZnNldCcgKyBkaW1lbnNpb25dO1xuICAgICAgdmFyIGhhbmRsZVBvcyA9IF90aGlzLmhhbmRsZVsnb2Zmc2V0JyArIGRpbWVuc2lvbl07XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGltaXQ6IHNsaWRlclBvcyAtIGhhbmRsZVBvcyxcbiAgICAgICAgZ3JhYjogaGFuZGxlUG9zIC8gMlxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkNoYW5nZVN0YXJ0ID0gX3RoaXMucHJvcHMub25DaGFuZ2VTdGFydDtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMuaGFuZGxlRHJhZyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMuaGFuZGxlRW5kKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQ2hhbmdlU3RhcnQgJiYgb25DaGFuZ2VTdGFydChlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVEcmFnID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgIHZhciBfZSR0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfZSR0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTGlzdCA9IF9lJHRhcmdldC5jbGFzc0xpc3QsXG4gICAgICAgICAgZGF0YXNldCA9IF9lJHRhcmdldC5kYXRhc2V0O1xuXG4gICAgICBpZiAoIW9uQ2hhbmdlIHx8IGNsYXNzTmFtZSA9PT0gJ3Jhbmdlc2xpZGVyX19sYWJlbHMnKSByZXR1cm47XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnBvc2l0aW9uKGUpO1xuXG4gICAgICBpZiAoY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb250YWlucygncmFuZ2VzbGlkZXJfX2xhYmVsLWl0ZW0nKSAmJiBkYXRhc2V0LnZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdChkYXRhc2V0LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUsIGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlQ29tcGxldGUgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZUNvbXBsZXRlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25DaGFuZ2VDb21wbGV0ZSAmJiBvbkNoYW5nZUNvbXBsZXRlKGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVFbmQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMubWF4LFxuICAgICAgICAgIHN0ZXAgPSBfdGhpcyRwcm9wcy5zdGVwLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIHZhciBzbGlkZXJWYWx1ZSA9IHZvaWQgMDtcblxuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgc2xpZGVyVmFsdWUgPSB2YWx1ZSArIHN0ZXAgPiBtYXggPyBtYXggOiB2YWx1ZSArIHN0ZXA7XG4gICAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2Uoc2xpZGVyVmFsdWUsIGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIHNsaWRlclZhbHVlID0gdmFsdWUgLSBzdGVwIDwgbWluID8gbWluIDogdmFsdWUgLSBzdGVwO1xuICAgICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHNsaWRlclZhbHVlLCBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UG9zaXRpb25Gcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBsaW1pdCA9IF90aGlzLnN0YXRlLmxpbWl0O1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzMi5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMyLm1heDtcblxuICAgICAgdmFyIGRpZmZNYXhNaW4gPSBtYXggLSBtaW47XG4gICAgICB2YXIgZGlmZlZhbE1pbiA9IHZhbHVlIC0gbWluO1xuICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBkaWZmVmFsTWluIC8gZGlmZk1heE1pbjtcbiAgICAgIHZhciBwb3MgPSBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgKiBsaW1pdCk7XG5cbiAgICAgIHJldHVybiBwb3M7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFZhbHVlRnJvbVBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgdmFyIGxpbWl0ID0gX3RoaXMuc3RhdGUubGltaXQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb3JpZW50YXRpb24gPSBfdGhpcyRwcm9wczMub3JpZW50YXRpb24sXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczMubWF4LFxuICAgICAgICAgIHN0ZXAgPSBfdGhpcyRwcm9wczMuc3RlcDtcblxuICAgICAgdmFyIHBlcmNlbnRhZ2UgPSAoMCwgX3V0aWxzLmNsYW1wKShwb3MsIDAsIGxpbWl0KSAvIChsaW1pdCB8fCAxKTtcbiAgICAgIHZhciBiYXNlVmFsID0gc3RlcCAqIE1hdGgucm91bmQocGVyY2VudGFnZSAqIChtYXggLSBtaW4pIC8gc3RlcCk7XG4gICAgICB2YXIgdmFsdWUgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gYmFzZVZhbCArIG1pbiA6IG1heCAtIGJhc2VWYWw7XG5cbiAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNsYW1wKSh2YWx1ZSwgbWluLCBtYXgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5wb3NpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZ3JhYiA9IF90aGlzLnN0YXRlLmdyYWI7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb3JpZW50YXRpb24gPSBfdGhpcyRwcm9wczQub3JpZW50YXRpb24sXG4gICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzNC5yZXZlcnNlO1xuXG5cbiAgICAgIHZhciBub2RlID0gX3RoaXMuc2xpZGVyO1xuICAgICAgdmFyIGNvb3JkaW5hdGVTdHlsZSA9IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uY29vcmRpbmF0ZTtcbiAgICAgIHZhciBkaXJlY3Rpb25TdHlsZSA9IHJldmVyc2UgPyBjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLnJldmVyc2VEaXJlY3Rpb24gOiBjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLmRpcmVjdGlvbjtcbiAgICAgIHZhciBjbGllbnRDb29yZGluYXRlU3R5bGUgPSAnY2xpZW50JyArICgwLCBfdXRpbHMuY2FwaXRhbGl6ZSkoY29vcmRpbmF0ZVN0eWxlKTtcbiAgICAgIHZhciBjb29yZGluYXRlID0gIWUudG91Y2hlcyA/IGVbY2xpZW50Q29vcmRpbmF0ZVN0eWxlXSA6IGUudG91Y2hlc1swXVtjbGllbnRDb29yZGluYXRlU3R5bGVdO1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGlyZWN0aW9uU3R5bGVdO1xuICAgICAgdmFyIHBvcyA9IHJldmVyc2UgPyBkaXJlY3Rpb24gLSBjb29yZGluYXRlIC0gZ3JhYiA6IGNvb3JkaW5hdGUgLSBkaXJlY3Rpb24gLSBncmFiO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zKTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb29yZGluYXRlcyA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGxpbWl0ID0gX3RoaXMkc3RhdGUubGltaXQsXG4gICAgICAgICAgZ3JhYiA9IF90aGlzJHN0YXRlLmdyYWI7XG4gICAgICB2YXIgb3JpZW50YXRpb24gPSBfdGhpcy5wcm9wcy5vcmllbnRhdGlvbjtcblxuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zKTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IF90aGlzLmdldFBvc2l0aW9uRnJvbVZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciBoYW5kbGVQb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gcG9zaXRpb24gKyBncmFiIDogcG9zaXRpb247XG4gICAgICB2YXIgZmlsbFBvcyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBoYW5kbGVQb3MgOiBsaW1pdCAtIGhhbmRsZVBvcztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsbDogZmlsbFBvcyxcbiAgICAgICAgaGFuZGxlOiBoYW5kbGVQb3MsXG4gICAgICAgIGxhYmVsOiBoYW5kbGVQb3NcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckxhYmVscyA9IGZ1bmN0aW9uIChsYWJlbHMpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHNsKSB7XG4gICAgICAgICAgICBfdGhpcy5sYWJlbHMgPSBzbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgncmFuZ2VzbGlkZXJfX2xhYmVscycpXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsc1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgbGltaXQ6IDAsXG4gICAgICBncmFiOiAwXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2xpZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmhhbmRsZVVwZGF0ZSgpO1xuICAgICAgdmFyIHJlc2l6ZU9ic2VydmVyID0gbmV3IF9yZXNpemVPYnNlcnZlclBvbHlmaWxsMi5kZWZhdWx0KHRoaXMuaGFuZGxlVXBkYXRlKTtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5zbGlkZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCBsYWJlbC90b29sdGlwIHZhbHVlXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAtIHZhbHVlXG4gICAgICogQHJldHVybiB7Rm9ybWF0dGVkIE51bWJlcn1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNsaWRlciBzdGF0ZSBvbiBjaGFuZ2VcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG1vdXNlbW92ZS9tb3VzZXVwIGV2ZW50c1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBkcmFnL21vdXNlbW92ZSBldmVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZSAtIEV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIERldGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gbW91c2Vtb3ZlL21vdXNldXAgZXZlbnRzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3Iga2V5IGV2ZW50cyBvbiB0aGUgc2xpZGVyIGhhbmRsZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZSAtIEV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwb3NpdGlvbiBvZiBzbGlkZXIgYmFzZWQgb24gaXRzIHZhbHVlXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZSAtIEN1cnJlbnQgdmFsdWUgb2Ygc2xpZGVyXG4gICAgICogQHJldHVybiB7cG9zaXRpb259IHBvcyAtIENhbGN1bGF0ZWQgcG9zaXRpb24gb2Ygc2xpZGVyIGJhc2VkIG9uIHZhbHVlXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZSBwb3NpdGlvbiBvZiBzbGlkZXIgdG8gc2xpZGVyIHZhbHVlXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBwb3MgLSBDdXJyZW50IHBvc2l0aW9uL2Nvb3JkaW5hdGVzIG9mIHNsaWRlclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdmFsdWUgLSBTbGlkZXIgdmFsdWVcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBvc2l0aW9uIG9mIHNsaWRlciBiYXNlZCBvbiB2YWx1ZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZSAtIEV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdmFsdWUgLSBTbGlkZXIgdmFsdWVcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogR3JhYiBjb29yZGluYXRlcyBvZiBzbGlkZXJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHBvcyAtIFBvc2l0aW9uIG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gLSBTbGlkZXIgZmlsbC9oYW5kbGUgY29vcmRpbmF0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIG9yaWVudGF0aW9uID0gX3Byb3BzLm9yaWVudGF0aW9uLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgdG9vbHRpcCA9IF9wcm9wcy50b29sdGlwLFxuICAgICAgICAgIHJldmVyc2UgPSBfcHJvcHMucmV2ZXJzZSxcbiAgICAgICAgICBsYWJlbHMgPSBfcHJvcHMubGFiZWxzLFxuICAgICAgICAgIG1pbiA9IF9wcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzLm1heCxcbiAgICAgICAgICBoYW5kbGVMYWJlbCA9IF9wcm9wcy5oYW5kbGVMYWJlbDtcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLnN0YXRlLmFjdGl2ZTtcblxuICAgICAgdmFyIGRpbWVuc2lvbiA9IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uZGltZW5zaW9uO1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHJldmVyc2UgPyBjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLnJldmVyc2VEaXJlY3Rpb24gOiBjb25zdGFudHMub3JpZW50YXRpb25bb3JpZW50YXRpb25dLmRpcmVjdGlvbjtcbiAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWUpO1xuICAgICAgdmFyIGNvb3JkcyA9IHRoaXMuY29vcmRpbmF0ZXMocG9zaXRpb24pO1xuICAgICAgdmFyIGZpbGxTdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGltZW5zaW9uLCBjb29yZHMuZmlsbCArICdweCcpO1xuICAgICAgdmFyIGhhbmRsZVN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIGNvb3Jkcy5oYW5kbGUgKyAncHgnKTtcbiAgICAgIHZhciBzaG93VG9vbHRpcCA9IHRvb2x0aXAgJiYgYWN0aXZlO1xuXG4gICAgICB2YXIgbGFiZWxJdGVtcyA9IFtdO1xuICAgICAgdmFyIGxhYmVsS2V5cyA9IE9iamVjdC5rZXlzKGxhYmVscyk7XG5cbiAgICAgIGlmIChsYWJlbEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBsYWJlbEtleXMgPSBsYWJlbEtleXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gYSAtIGIgOiBiIC0gYTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gbGFiZWxLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgbGFiZWxQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25Gcm9tVmFsdWUoa2V5KTtcbiAgICAgICAgICAgIHZhciBsYWJlbENvb3JkcyA9IHRoaXMuY29vcmRpbmF0ZXMobGFiZWxQb3NpdGlvbik7XG4gICAgICAgICAgICB2YXIgbGFiZWxTdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCBsYWJlbENvb3Jkcy5sYWJlbCArICdweCcpO1xuXG4gICAgICAgICAgICBsYWJlbEl0ZW1zLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Jhbmdlc2xpZGVyX19sYWJlbC1pdGVtJyksXG4gICAgICAgICAgICAgICAgJ2RhdGEtdmFsdWUnOiBrZXksXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlRHJhZyxcbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlU3RhcnQsXG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVFbmQsXG4gICAgICAgICAgICAgICAgc3R5bGU6IGxhYmVsU3R5bGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJlbHNba2V5XVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocykge1xuICAgICAgICAgICAgX3RoaXMyLnNsaWRlciA9IHM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Jhbmdlc2xpZGVyJywgJ3Jhbmdlc2xpZGVyLScgKyBvcmllbnRhdGlvbiwgeyAncmFuZ2VzbGlkZXItcmV2ZXJzZSc6IHJldmVyc2UgfSwgY2xhc3NOYW1lKSxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVEcmFnLFxuICAgICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVFbmQsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVN0YXJ0LFxuICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlRW5kLFxuICAgICAgICAgICdhcmlhLXZhbHVlbWluJzogbWluLFxuICAgICAgICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICAgICAgICdhcmlhLXZhbHVlbm93JzogdmFsdWUsXG4gICAgICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvblxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdyYW5nZXNsaWRlcl9fZmlsbCcsIHN0eWxlOiBmaWxsU3R5bGUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHNoKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5oYW5kbGUgPSBzaDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyYW5nZXNsaWRlcl9faGFuZGxlJyxcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZVN0YXJ0LFxuICAgICAgICAgICAgb25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlRHJhZyxcbiAgICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlRW5kLFxuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICBzdHlsZTogaGFuZGxlU3R5bGUsXG4gICAgICAgICAgICB0YWJJbmRleDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd1Rvb2x0aXAgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihzdCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi50b29sdGlwID0gc3Q7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19oYW5kbGUtdG9vbHRpcCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZvcm1hdCh2YWx1ZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyYW5nZXNsaWRlcl9faGFuZGxlLWxhYmVsJyB9LFxuICAgICAgICAgICAgaGFuZGxlTGFiZWxcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGxhYmVscyA/IHRoaXMucmVuZGVyTGFiZWxzKGxhYmVsSXRlbXMpIDogbnVsbFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU2xpZGVyLnByb3BUeXBlcyA9IHtcbiAgbWluOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc3RlcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb3JpZW50YXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0b29sdGlwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHJldmVyc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbGFiZWxzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgaGFuZGxlTGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBmb3JtYXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGFuZ2VTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZUNvbXBsZXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBzdGVwOiAxLFxuICB2YWx1ZTogMCxcbiAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgdG9vbHRpcDogdHJ1ZSxcbiAgcmV2ZXJzZTogZmFsc2UsXG4gIGxhYmVsczoge30sXG4gIGhhbmRsZUxhYmVsOiAnJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNsaWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmFuZ2VzbGlkZXIvbGliL1Jhbmdlc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9SYW5nZXNsaWRlciA9IHJlcXVpcmUoJy4vUmFuZ2VzbGlkZXInKTtcblxudmFyIF9SYW5nZXNsaWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SYW5nZXNsaWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYW5nZXNsaWRlcjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbmV4cG9ydHMuY2xhbXAgPSBjbGFtcDtcbi8qKlxuICogQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgb2Ygc3RyaW5nXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSAtIFN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSAtIFN0cmluZyB3aXRoIGZpcnN0IGxldHRlciBjYXBpdGFsaXplZFxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKTtcbn1cblxuLyoqXG4gKiBDbGFtcCBwb3NpdGlvbiBiZXR3ZWVuIGEgcmFuZ2VcbiAqIEBwYXJhbSAge251bWJlcn0gLSBWYWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0gIHtudW1iZXJ9IC0gTWluaW11bSB2YWx1ZSBpbiByYW5nZVxuICogQHBhcmFtICB7bnVtYmVyfSAtIE1heGltdW0gdmFsdWUgaW4gcmFuZ2VcbiAqIEByZXR1cm4ge251bWJlcn0gLSBDbGFtcGVkIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwuUmVzaXplT2JzZXJ2ZXIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvKipcclxuICAgICAqIEEgY29sbGVjdGlvbiBvZiBzaGltcyB0aGF0IHByb3ZpZGUgbWluaW1hbCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBFUzYgY29sbGVjdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gICAgICogbW9kdWxlcyBhcyB0aGV5IGNvdmVyIG9ubHkgYSBsaW1pdGVkIHJhbmdlIG9mIHVzZSBjYXNlcy5cclxuICAgICAqL1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxuICAgIHZhciBNYXBTaGltID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYXJyXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAtMTtcclxuICAgICAgICAgICAgYXJyLnNvbWUoZnVuY3Rpb24gKGVudHJ5LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19lbnRyaWVzX18ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9fZW50cmllc19fW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVsxXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fX2VudHJpZXNfXztcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISF+Z2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0gW2N0eD1udWxsXVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGN0eCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9fZW50cmllc19fOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICAgICAgfSgpKTtcclxuICAgIH0pKCk7XG5cbiAgICAvKipcclxuICAgICAqIERldGVjdHMgd2hldGhlciB3aW5kb3cgYW5kIGRvY3VtZW50IG9iamVjdHMgYXJlIGF2YWlsYWJsZSBpbiBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4gICAgLy8gUmV0dXJucyBnbG9iYWwgb2JqZWN0IG9mIGEgY3VycmVudCBlbnZpcm9ubWVudC5cclxuICAgIHZhciBnbG9iYWwkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcbiAgICB9KSgpO1xuXG4gICAgLyoqXHJcbiAgICAgKiBBIHNoaW0gZm9yIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggZmFsbHMgYmFjayB0byB0aGUgc2V0VGltZW91dCBpZlxyXG4gICAgICogZmlyc3Qgb25lIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gUmVxdWVzdHMnIGlkZW50aWZpZXIuXHJcbiAgICAgKi9cclxuICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLy8gSXQncyByZXF1aXJlZCB0byB1c2UgYSBib3VuZGVkIGZ1bmN0aW9uIGJlY2F1c2UgSUUgc29tZXRpbWVzIHRocm93c1xyXG4gICAgICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAgICAgLy8gb2JqZWN0IG9uIHRoZSBsZWZ0IGhhbmQgc2lkZS5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKGdsb2JhbCQxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjayhEYXRlLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcclxuICAgIH0pKCk7XG5cbiAgICAvLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxuICAgIHZhciB0cmFpbGluZ1RpbWVvdXQgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gICAgICogaW52b2tlZCBvbmx5IG9uY2UgZHVyaW5nIHRoZSBzcGVjaWZpZWQgZGVsYXkgcGVyaW9kLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgYWZ0ZXIgd2hpY2ggdG8gaW52b2tlIGNhbGxiYWNrLlxyXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0aHJvdHRsZSAoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgICAgICAgdmFyIGxlYWRpbmdDYWxsID0gZmFsc2UsIHRyYWlsaW5nQ2FsbCA9IGZhbHNlLCBsYXN0Q2FsbFRpbWUgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZXMgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGFuZCBzY2hlZHVsZXMgbmV3IGludm9jYXRpb24gaWZcclxuICAgICAgICAgKiB0aGUgXCJwcm94eVwiIHdhcyBjYWxsZWQgZHVyaW5nIGN1cnJlbnQgcmVxdWVzdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0cmFpbGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGJhY2sgaW52b2tlZCBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5LiBJdCB3aWxsIGZ1cnRoZXIgcG9zdHBvbmVcclxuICAgICAgICAgKiBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBkZWxlZ2F0aW5nIGl0IHRvIHRoZVxyXG4gICAgICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEocmVzb2x2ZVBlbmRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTY2hlZHVsZXMgaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0Q2FsbFRpbWUgPCB0cmFpbGluZ1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXcgY2FsbCB0byBiZSBpbiBpbnZva2VkIHdoZW4gdGhlIHBlbmRpbmcgb25lIGlzIHJlc29sdmVkLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIFwidHJhbnNpdGlvbnNcIiB3aGljaCBuZXZlciBhY3R1YWxseSBzdGFydFxyXG4gICAgICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIC8vIGhhcHBlbnMgYW1pZHMgdGhlIHBlbmRpbmcgaW52b2NhdGlvbi5cclxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCBkZWxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJveHk7XHJcbiAgICB9XG5cbiAgICAvLyBNaW5pbXVtIGRlbGF5IGJlZm9yZSBpbnZva2luZyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy5cclxuICAgIHZhciBSRUZSRVNIX0RFTEFZID0gMjA7XHJcbiAgICAvLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4gICAgLy8gbWlnaHQgYWZmZWN0IGRpbWVuc2lvbnMgb2Ygb2JzZXJ2ZWQgZWxlbWVudHMuXHJcbiAgICB2YXIgdHJhbnNpdGlvbktleXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCcsICd3aWR0aCcsICdoZWlnaHQnLCAnc2l6ZScsICd3ZWlnaHQnXTtcclxuICAgIC8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG4gICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAvKipcclxuICAgICAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAgICAgKi9cclxuICAgIHZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIERPTSBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGVsbHMgdGhhdCBjb250cm9sbGVyIGhhcyBzdWJzY3JpYmVkIGZvciBNdXRhdGlvbiBFdmVudHMuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogS2VlcHMgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgbGlzdCBvZiBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aHJvdHRsZSh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgUkVGUkVTSF9ERUxBWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCF+dGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyc18ucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWRkIGxpc3RlbmVycyBpZiB0aGV5IGhhdmVuJ3QgYmVlbiBhZGRlZCB5ZXQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZXMgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IG9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVycyBpZiBjb250cm9sbGVyIGhhcyBubyBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmVycy5sZW5ndGggJiYgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZXMgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuIEl0IHdpbGwgY29udGludWUgcnVubmluZyB1cGRhdGVzIGluc29mYXJcclxuICAgICAgICAgKiBpdCBkZXRlY3RzIGNoYW5nZXMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLnVwZGF0ZU9ic2VydmVyc18oKTtcclxuICAgICAgICAgICAgLy8gQ29udGludWUgcnVubmluZyB1cGRhdGVzIGlmIGNoYW5nZXMgaGF2ZSBiZWVuIGRldGVjdGVkIGFzIHRoZXJlIG1pZ2h0XHJcbiAgICAgICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgICAgICogZW50cmllcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgXCJ0cnVlXCIgaWYgYW55IG9ic2VydmVyIGhhcyBkZXRlY3RlZCBjaGFuZ2VzIGluXHJcbiAgICAgICAgICogICAgICBkaW1lbnNpb25zIG9mIGl0J3MgZWxlbWVudHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVPYnNlcnZlcnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBDb2xsZWN0IG9ic2VydmVycyB0aGF0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2F0aGVyQWN0aXZlKCksIG9ic2VydmVyLmhhc0FjdGl2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbnMgYmV0d2VlbiBvYnNlcnZlcnMsIGUuZy4gd2hlbiBtdWx0aXBsZSBpbnN0YW5jZXMgb2ZcclxuICAgICAgICAgICAgLy8gUmVzaXplT2JzZXJ2ZXIgYXJlIHRyYWNraW5nIHRoZSBzYW1lIGVsZW1lbnQgYW5kIHRoZSBjYWxsYmFjayBvZiBvbmVcclxuICAgICAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAgICAgLy8gdGhpcyBtYXkgcmVzdWx0IGluIG5vdGlmaWNhdGlvbnMgYmVpbmcgYmxvY2tlZCBmb3IgdGhlIHJlc3Qgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAgICBhY3RpdmVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmVyLmJyb2FkY2FzdEFjdGl2ZSgpOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5jb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IGFkZGVkLlxyXG4gICAgICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTdWJzY3JpcHRpb24gdG8gdGhlIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGlzIHVzZWQgYXMgYSB3b3JrYXJvdW5kIGZvclxyXG4gICAgICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgICAgIC8vIGZpbmFsIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuZGlzY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCAhdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBoYW5kbGVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcGFyYW0ge1RyYW5zaXRpb25FdmVudH0gZXZlbnRcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZF8gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgdHJhbnNpdGlvbiBtYXkgYWZmZWN0IGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICAgICAgdmFyIGlzUmVmbG93UHJvcGVydHkgPSB0cmFuc2l0aW9uS2V5cy5zb21lKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGlzUmVmbG93UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIGluc3RhbmNlIG9mIHRoZSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5pbnN0YW5jZV8gPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XHJcbiAgICB9KCkpO1xuXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIG5vbi13cml0YWJsZS9lbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgdGhlIHByb3ZpZGVkIHRhcmdldCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIE9iamVjdCBmb3Igd2hpY2ggdG8gZGVmaW5lIHByb3BlcnRpZXMuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRvIGJlIGRlZmluZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB2YXIgZGVmaW5lQ29uZmlndXJhYmxlID0gKGZ1bmN0aW9uICh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfSk7XG5cbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgdmFyIGdldFdpbmRvd09mID0gKGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAgICAgLy8gaGFzIHRoZSBcIm93bmVyRG9jdW1lbnRcIiBwcm9wZXJ0eSBmcm9tIHdoaWNoIHdlIGNhbiByZXRyaWV2ZSBhXHJcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyBnbG9iYWwgb2JqZWN0LlxyXG4gICAgICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgICAgICAvLyBSZXR1cm4gdGhlIGxvY2FsIGdsb2JhbCBvYmplY3QgaWYgaXQncyBub3QgcG9zc2libGUgZXh0cmFjdCBvbmUgZnJvbVxyXG4gICAgICAgIC8vIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG4gICAgfSk7XG5cbiAgICAvLyBQbGFjZWhvbGRlciBvZiBhbiBlbXB0eSBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgIHZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgcHJvdmlkZWQgc3RyaW5nIHRvIGEgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdHMgYm9yZGVycyBzaXplIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAgICAgKiBAcGFyYW0gey4uLnN0cmluZ30gcG9zaXRpb25zIC0gQm9yZGVycyBwb3NpdGlvbnMgKHRvcCwgcmlnaHQsIC4uLilcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcykge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwb3NpdGlvbnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChzaXplLCBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ2JvcmRlci0nICsgcG9zaXRpb24gKyAnLXdpZHRoJ107XHJcbiAgICAgICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3RzIHBhZGRpbmdzIHNpemVzIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBQYWRkaW5ncyBib3guXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG4gICAgICAgIHZhciBwYWRkaW5ncyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc18xW19pXTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydwYWRkaW5nLScgKyBwb3NpdGlvbl07XHJcbiAgICAgICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFkZGluZ3M7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgU1ZHIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTVkdHcmFwaGljc0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHNcclxuICAgICAqICAgICAgdG8gYmUgY2FsY3VsYXRlZC5cclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdCgwLCAwLCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgSFRNTEVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgICAgICAvLyBDbGllbnQgd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBjYW4ndCBiZVxyXG4gICAgICAgIC8vIHVzZWQgZXhjbHVzaXZlbHkgYXMgdGhleSBwcm92aWRlIHJvdW5kZWQgdmFsdWVzLlxyXG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgICAgICAvLyBCeSB0aGlzIGNvbmRpdGlvbiB3ZSBjYW4gY2F0Y2ggYWxsIG5vbi1yZXBsYWNlZCBpbmxpbmUsIGhpZGRlbiBhbmRcclxuICAgICAgICAvLyBkZXRhY2hlZCBlbGVtZW50cy4gVGhvdWdoIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBsZXNzXHJcbiAgICAgICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdpdGhvdXQgaXQgd2Ugd291bGQgbmVlZCB0byBpbXBsZW1lbnQgc2VwYXJhdGUgbWV0aG9kcyBmb3IgZWFjaCBvZlxyXG4gICAgICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgICAgICAvLyBlZmZlY3RpdmUgdGVzdCBmb3IgaGlkZGVuIGVsZW1lbnRzLiBFLmcuIGV2ZW4galF1ZXJ5J3MgJzp2aXNpYmxlJyBmaWx0ZXJcclxuICAgICAgICAvLyBnaXZlcyB3cm9uZyByZXN1bHRzIGZvciBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IGxlc3MgdGhhbiAwLjUuXHJcbiAgICAgICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgICAgICB2YXIgcGFkZGluZ3MgPSBnZXRQYWRkaW5ncyhzdHlsZXMpO1xyXG4gICAgICAgIHZhciBob3JpelBhZCA9IHBhZGRpbmdzLmxlZnQgKyBwYWRkaW5ncy5yaWdodDtcclxuICAgICAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgICAgICAvLyBDb21wdXRlZCBzdHlsZXMgb2Ygd2lkdGggJiBoZWlnaHQgYXJlIGJlaW5nIHVzZWQgYmVjYXVzZSB0aGV5IGFyZSB0aGVcclxuICAgICAgICAvLyBvbmx5IGRpbWVuc2lvbnMgYXZhaWxhYmxlIHRvIEpTIHRoYXQgY29udGFpbiBub24tcm91bmRlZCB2YWx1ZXMuIEl0IGNvdWxkXHJcbiAgICAgICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgICAgIC8vIGFmZmVjdGVkIGJ5IENTUyB0cmFuc2Zvcm1hdGlvbnMgbGV0IGFsb25lIHBhZGRpbmdzLCBib3JkZXJzIGFuZCBzY3JvbGwgYmFycy5cclxuICAgICAgICB2YXIgd2lkdGggPSB0b0Zsb2F0KHN0eWxlcy53aWR0aCksIGhlaWdodCA9IHRvRmxvYXQoc3R5bGVzLmhlaWdodCk7XHJcbiAgICAgICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAgICAgLy8gbW9kZWwgaXMgYXBwbGllZCAoZXhjZXB0IGZvciBJRSkuXHJcbiAgICAgICAgaWYgKHN0eWxlcy5ib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xyXG4gICAgICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgICAgIC8vIGRvZXNuJ3QgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB0byBjb21wdXRlZCBDU1MgZGltZW5zaW9ucy5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgdGhlbiBpdCdzIGVpdGhlciBJRSwgYW5kIHRodXMgd2UgZG9uJ3QgbmVlZCB0byBzdWJ0cmFjdFxyXG4gICAgICAgICAgICAvLyBhbnl0aGluZywgb3IgYW4gZWxlbWVudCBtZXJlbHkgZG9lc24ndCBoYXZlIHBhZGRpbmdzL2JvcmRlcnMgc3R5bGVzLlxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ2xlZnQnLCAncmlnaHQnKSArIGhvcml6UGFkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd0b3AnLCAnYm90dG9tJykgKyB2ZXJ0UGFkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZvbGxvd2luZyBzdGVwcyBjYW4ndCBiZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCdzIHJvb3QgZWxlbWVudCBhcyBpdHNcclxuICAgICAgICAvLyBjbGllbnRbV2lkdGgvSGVpZ2h0XSBwcm9wZXJ0aWVzIHJlcHJlc2VudCB2aWV3cG9ydCBhcmVhIG9mIHRoZSB3aW5kb3cuXHJcbiAgICAgICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgICAgICAvLyByZW5kZXJlZCBzY3JvbGwgYmFycyBub3IgaXQgY2FuIGJlIGNsaXBwZWQuXHJcbiAgICAgICAgaWYgKCFpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgICAgICAvLyBpbmNsdWRlIHNjcm9sbCBiYXJzIHNpemUgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYXQgdGhpcyBzdGVwIGFzIHNjcm9sbFxyXG4gICAgICAgICAgICAvLyBiYXJzIGFyZSB0aGUgb25seSBkaWZmZXJlbmNlIGJldHdlZW4gcm91bmRlZCBkaW1lbnNpb25zICsgcGFkZGluZ3NcclxuICAgICAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICAgICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpIC0gY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBob3JpelNjcm9sbGJhciA9IE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgLSBjbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAvLyBFLmcuIGZvciBhbiBlbGVtZW50IHdpdGggY29udGVudCB3aWR0aCBvZiAzMTQuMnB4IGl0IHNvbWV0aW1lcyBnaXZlc1xyXG4gICAgICAgICAgICAvLyB0aGUgY2xpZW50IHdpZHRoIG9mIDMxNXB4IGFuZCBmb3IgdGhlIHdpZHRoIG9mIDMxNC43cHggaXQgbWF5IGdpdmVcclxuICAgICAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAgICAgLy8gYXMgYSBub24tcmVsZXZhbnQuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2ZXJ0U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaG9yaXpTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB2YXIgaXNTVkdHcmFwaGljc0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAgICAgLy8gaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGl0J3Mgc28sIHRoZW4gY2hlY2sgdGhhdCBlbGVtZW50IGlzIGF0IGxlYXN0IGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gICAgICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXBhcmVuc1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdFbGVtZW50ICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbiAgICB9KSgpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHMgdG8gYmUgY2FsY3VsYXRlZC5cclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAgICAgKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZG9tcmVjdHJlYWRvbmx5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdFJlYWRPbmx5fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgICAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gSWYgRE9NUmVjdFJlYWRPbmx5IGlzIGF2YWlsYWJsZSB1c2UgaXQgYXMgYSBwcm90b3R5cGUgZm9yIHRoZSByZWN0YW5nbGUuXHJcbiAgICAgICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgICAgIHZhciByZWN0ID0gT2JqZWN0LmNyZWF0ZShDb25zdHIucHJvdG90eXBlKTtcclxuICAgICAgICAvLyBSZWN0YW5nbGUncyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGUgYW5kIG5vbi1lbnVtZXJhYmxlLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgICAgIHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogeSxcclxuICAgICAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICAgICAgYm90dG9tOiBoZWlnaHQgKyB5LFxyXG4gICAgICAgICAgICBsZWZ0OiB4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgRE9NUmVjdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkaW1lbnNpb25zIGFuZCB0aGUgeC95IGNvb3JkaW5hdGVzLlxyXG4gICAgICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RpY3RkZWYtZG9tcmVjdGluaXRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gUmVjdGFuZ2xlJ3MgaGVpZ2h0LlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSZWN0SW5pdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xyXG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDbGFzcyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBjb21wdXRhdGlvbnMgb2YgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlIG9mXHJcbiAgICAgKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICB2YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZhdGlvbi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEJyb2FkY2FzdGVkIHdpZHRoIG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBCcm9hZGNhc3RlZCBoZWlnaHQgb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAgICAgKiBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYnJvYWRjYXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSByZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlY3Qud2lkdGggIT09IHRoaXMuYnJvYWRjYXN0V2lkdGggfHxcclxuICAgICAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAgICAgKiBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgb2YgdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmJyb2FkY2FzdFJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZhdGlvbjtcclxuICAgIH0oKSk7XG5cbiAgICB2YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdGhhdCBpcyBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCwgcmVjdEluaXQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGVcclxuICAgICAgICAgICAgLy8gYW5kIGFyZSBhbHNvIG5vdCBlbnVtZXJhYmxlIGluIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFByb3BlcnR5IGFjY2Vzc29ycyBhcmUgbm90IGJlaW5nIHVzZWQgYXMgdGhleSdkIHJlcXVpcmUgdG8gZGVmaW5lIGFcclxuICAgICAgICAgICAgLy8gcHJpdmF0ZSBXZWFrTWFwIHN0b3JhZ2Ugd2hpY2ggbWF5IGNhdXNlIG1lbW9yeSBsZWFrcyBpbiBicm93c2VycyB0aGF0XHJcbiAgICAgICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgICAgICBkZWZpbmVDb25maWd1cmFibGUodGhpcywgeyB0YXJnZXQ6IHRhcmdldCwgY29udGVudFJlY3Q6IGNvbnRlbnRSZWN0IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxuICAgIH0oKSk7XG5cbiAgICB2YXIgUmVzaXplT2JzZXJ2ZXJTUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAgICAgKiAgICAgIHdoZW4gb25lIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2VzIGl0J3MgY29udGVudCBkaW1lbnNpb25zLlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfSBjb250cm9sbGVyIC0gQ29udHJvbGxlciBpbnN0YW5jZSB3aGljaFxyXG4gICAgICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJ9IGNhbGxiYWNrQ3R4IC0gUmVmZXJlbmNlIHRvIHRoZSBwdWJsaWNcclxuICAgICAgICAgKiAgICAgIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCBjYWxsYmFja0N0eCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgICAgICogb2YgZWxlbWVudHMuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18gPSBbXTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJlZ2lzdHJ5IG9mIHRoZSBSZXNpemVPYnNlcnZhdGlvbiBpbnN0YW5jZXMuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfID0gbmV3IE1hcFNoaW0oKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8gPSBjb250cm9sbGVyO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrQ3R4XyA9IGNhbGxiYWNrQ3R4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICAgICAgaWYgKG9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9ucy5zZXQodGFyZ2V0LCBuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlZnJlc2goKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3BzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIHN0b3Agb2JzZXJ2aW5nLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgbm90IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9ucy5kZWxldGUodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcHMgb2JzZXJ2aW5nIGFsbCBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAgICAgKiBpdCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmdhdGhlckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5wdXNoKG9ic2VydmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICAgICAqIGluc3RhbmNlcyBjb2xsZWN0ZWQgZnJvbSBhY3RpdmUgcmVzaXplIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5icm9hZGNhc3RBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLmNhbGxiYWNrQ3R4XztcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIFJlc2l6ZU9ic2VydmVyRW50cnkgaW5zdGFuY2UgZm9yIGV2ZXJ5IGFjdGl2ZSBvYnNlcnZhdGlvbi5cclxuICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG9ic2VydmF0aW9uLnRhcmdldCwgb2JzZXJ2YXRpb24uYnJvYWRjYXN0UmVjdCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDbGVhcnMgdGhlIGNvbGxlY3Rpb24gb2YgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5jbGVhckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuaGFzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTUEk7XHJcbiAgICB9KCkpO1xuXG4gICAgLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4gICAgLy8gZm9yIHRoZSBNYXAgY29sbGVjdGlvbiBhcyBpdCBoYXMgYWxsIHJlcXVpcmVkIG1ldGhvZHMgYW5kIGJlY2F1c2UgV2Vha01hcFxyXG4gICAgLy8gY2FuJ3QgYmUgZnVsbHkgcG9seWZpbGxlZCBhbnl3YXkuXHJcbiAgICB2YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZU9ic2VydmVyIEFQSS4gRW5jYXBzdWxhdGVzIHRoZSBSZXNpemVPYnNlcnZlciBTUEkgaW1wbGVtZW50YXRpb25cclxuICAgICAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gICAgICovXHJcbiAgICB2YXIgUmVzaXplT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICAgICAqICAgICAgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNpemVPYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlciA9IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIHRoaXMpO1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfSgpKTtcclxuICAgIC8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcyBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgIFtcclxuICAgICAgICAnb2JzZXJ2ZScsXHJcbiAgICAgICAgJ3Vub2JzZXJ2ZScsXHJcbiAgICAgICAgJ2Rpc2Nvbm5lY3QnXHJcbiAgICBdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcblxuICAgIHZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRXhwb3J0IGV4aXN0aW5nIGltcGxlbWVudGF0aW9uIGlmIGF2YWlsYWJsZS5cclxuICAgICAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVzaXplLW9ic2VydmVyLXBvbHlmaWxsL2Rpc3QvUmVzaXplT2JzZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJhc2U6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgTXNVc2VyU2VsZWN0OiAnbm9uZSdcbiAgfSxcbiAgdG9wOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICB0b3A6ICctNXB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBjdXJzb3I6ICdyb3ctcmVzaXplJ1xuICB9LFxuICByaWdodDoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICByaWdodDogJy01cHgnLFxuICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgYm90dG9tOiAnLTVweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgY3Vyc29yOiAncm93LXJlc2l6ZSdcbiAgfSxcbiAgbGVmdDoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBsZWZ0OiAnLTVweCcsXG4gICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAnLTEwcHgnLFxuICAgIHRvcDogJy0xMHB4JyxcbiAgICBjdXJzb3I6ICduZS1yZXNpemUnXG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogJy0xMHB4JyxcbiAgICBib3R0b206ICctMTBweCcsXG4gICAgY3Vyc29yOiAnc2UtcmVzaXplJ1xuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnLTEwcHgnLFxuICAgIGJvdHRvbTogJy0xMHB4JyxcbiAgICBjdXJzb3I6ICdzdy1yZXNpemUnXG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICctMTBweCcsXG4gICAgdG9wOiAnLTEwcHgnLFxuICAgIGN1cnNvcjogJ253LXJlc2l6ZSdcbiAgfVxufTtcblxudmFyIFJlc2l6ZXIgPSAoZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMuYmFzZSwgc3R5bGVzW3Byb3BzLmRpcmVjdGlvbl0sIHByb3BzLnJlcGxhY2VTdHlsZXMgfHwge30pLFxuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgcHJvcHMub25SZXNpemVTdGFydChlLCBwcm9wcy5kaXJlY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgcHJvcHMub25SZXNpemVTdGFydChlLCBwcm9wcy5kaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHMuY2hpbGRyZW5cbiAgKTtcbn0pO1xuXG52YXIgdXNlclNlbGVjdE5vbmUgPSB7XG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgTW96VXNlclNlbGVjdDogJ25vbmUnLFxuICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXG4gIE1zVXNlclNlbGVjdDogJ25vbmUnXG59O1xuXG52YXIgdXNlclNlbGVjdEF1dG8gPSB7XG4gIHVzZXJTZWxlY3Q6ICdhdXRvJyxcbiAgTW96VXNlclNlbGVjdDogJ2F1dG8nLFxuICBXZWJraXRVc2VyU2VsZWN0OiAnYXV0bycsXG4gIE1zVXNlclNlbGVjdDogJ2F1dG8nXG59O1xuXG52YXIgY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChuLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obiwgbWF4KSwgbWluKTtcbn07XG52YXIgc25hcCA9IGZ1bmN0aW9uIHNuYXAobiwgc2l6ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZChuIC8gc2l6ZSkgKiBzaXplO1xufTtcblxudmFyIGZpbmRDbG9zZXN0U25hcCA9IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U25hcChuLCBzbmFwQXJyYXkpIHtcbiAgcmV0dXJuIHNuYXBBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoY3VyciAtIG4pIDwgTWF0aC5hYnMocHJldiAtIG4pID8gY3VyciA6IHByZXY7XG4gIH0pO1xufTtcblxudmFyIGVuZHNXaXRoID0gZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzZWFyY2hTdHIpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIHNlYXJjaFN0ci5sZW5ndGgsIHNlYXJjaFN0ci5sZW5ndGgpID09PSBzZWFyY2hTdHI7XG59O1xuXG52YXIgZ2V0U3RyaW5nU2l6ZSA9IGZ1bmN0aW9uIGdldFN0cmluZ1NpemUobikge1xuICBpZiAobi50b1N0cmluZygpID09PSAnYXV0bycpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICdweCcpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAnJScpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAndmgnKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJ3Z3JykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICd2bWF4JykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICd2bWluJykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIHJldHVybiBuICsgJ3B4Jztcbn07XG5cbnZhciBkZWZpbmVkUHJvcHMgPSBbJ3N0eWxlJywgJ2NsYXNzTmFtZScsICdncmlkJywgJ3NuYXAnLCAnYm91bmRzJywgJ3NpemUnLCAnZGVmYXVsdFNpemUnLCAnbWluV2lkdGgnLCAnbWluSGVpZ2h0JywgJ21heFdpZHRoJywgJ21heEhlaWdodCcsICdsb2NrQXNwZWN0UmF0aW8nLCAnbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCcsICdsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCcsICdlbmFibGUnLCAnaGFuZGxlU3R5bGVzJywgJ2hhbmRsZUNsYXNzZXMnLCAnaGFuZGxlV3JhcHBlclN0eWxlJywgJ2hhbmRsZVdyYXBwZXJDbGFzcycsICdjaGlsZHJlbicsICdvblJlc2l6ZVN0YXJ0JywgJ29uUmVzaXplJywgJ29uUmVzaXplU3RvcCcsICdoYW5kbGVDb21wb25lbnQnLCAnc2NhbGUnLCAncmVzaXplUmF0aW8nXTtcblxudmFyIGJhc2VDbGFzc05hbWUgPSAnX19yZXNpemFibGVfYmFzZV9fJztcblxudmFyIFJlc2l6YWJsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFJlc2l6YWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVzaXphYmxlKHByb3BzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzaXphYmxlKTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlc2l6YWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlc2l6YWJsZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNSZXNpemluZzogZmFsc2UsXG4gICAgICByZXNpemVDdXJzb3I6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiB0eXBlb2YgKF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUud2lkdGgpID09PSAndW5kZWZpbmVkJyA/ICdhdXRvJyA6IF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHR5cGVvZiAoX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS5oZWlnaHQpID09PSAndW5kZWZpbmVkJyA/ICdhdXRvJyA6IF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUuaGVpZ2h0LFxuICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVFeHRlbmRzUHJvcHMocHJvcHMpO1xuICAgIF90aGlzLm9uUmVzaXplU3RhcnQgPSBfdGhpcy5vblJlc2l6ZVN0YXJ0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uTW91c2VNb3ZlID0gX3RoaXMub25Nb3VzZU1vdmUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLm9uTW91c2VVcCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfdGhpcy5vbk1vdXNlVXApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF90aGlzLm9uTW91c2VVcCk7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJlc2l6YWJsZSwgW3tcbiAgICBrZXk6ICd1cGRhdGVFeHRlbmRzUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVFeHRlbmRzUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMuZXh0ZW5kc1Byb3BzID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgaWYgKGRlZmluZWRQcm9wcy5pbmRleE9mKGtleSkgIT09IC0xKSByZXR1cm4gYWNjO1xuICAgICAgICBhY2Nba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UGFyZW50U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcmVudFNpemUoKSB7XG4gICAgICB2YXIgYmFzZSA9IHRoaXMuYmFzZTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICAvLyBJTkZPOiBUbyBjYWxjdWxhdGUgcGFyZW50IHdpZHRoIHdpdGggZmxleCBsYXlvdXRcbiAgICAgIHZhciB3cmFwQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIHdyYXAgPSB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXA7XG4gICAgICB2YXIgbWluV2lkdGggPSBiYXNlLnN0eWxlLm1pbldpZHRoO1xuICAgICAgaWYgKHdyYXAgIT09ICd3cmFwJykge1xuICAgICAgICB3cmFwQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgICAgICAgLy8gSEFDSzogVXNlIHJlbGF0aXZlIHRvIGdldCBwYXJlbnQgcGFkZGluZyBzaXplXG4gICAgICB9XG4gICAgICBiYXNlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIGJhc2Uuc3R5bGUubWluV2lkdGggPSAnMTAwJSc7XG4gICAgICB2YXIgc2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IGJhc2Uub2Zmc2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogYmFzZS5vZmZzZXRIZWlnaHRcbiAgICAgIH07XG4gICAgICBiYXNlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGlmICh3cmFwQ2hhbmdlZCkgdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwID0gd3JhcDtcbiAgICAgIGJhc2Uuc3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoIHx8IHNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfHwgc2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCwgMCknO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgZWxlbWVudC5zdHlsZS5mbGV4ID0gJzAnO1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGJhc2VDbGFzc05hbWU7XG4gICAgICB9XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuICAgICAgdGhpcy51cGRhdGVFeHRlbmRzUHJvcHMobmV4dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5iYXNlO1xuXG4gICAgICAgIGlmICghYmFzZSB8fCAhcGFyZW50KSByZXR1cm47XG4gICAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKGJhc2UgaW5zdGFuY2VvZiBOb2RlKSkgcmV0dXJuO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoYmFzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsY3VsYXRlTmV3U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZU5ld1NpemUobmV3U2l6ZSwga2luZCkge1xuICAgICAgdmFyIHByb3BzU2l6ZSA9IHRoaXMucHJvcHNTaXplICYmIHRoaXMucHJvcHNTaXplW2tpbmRdO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2luZF0gPT09ICdhdXRvJyAmJiB0aGlzLnN0YXRlLm9yaWdpbmFsW2tpbmRdID09PSBuZXdTaXplICYmICh0eXBlb2YgcHJvcHNTaXplID09PSAndW5kZWZpbmVkJyB8fCBwcm9wc1NpemUgPT09ICdhdXRvJykgPyAnYXV0bycgOiBuZXdTaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uUmVzaXplU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KGV2ZW50LCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBjbGllbnRYID0gMDtcbiAgICAgIHZhciBjbGllbnRZID0gMDtcbiAgICAgIGlmIChldmVudC5uYXRpdmVFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY2xpZW50WCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgIGNsaWVudFkgPSBldmVudC5uYXRpdmVFdmVudC5jbGllbnRZO1xuXG4gICAgICAgIC8vIFdoZW4gdXNlciBjbGljayB3aXRoIHJpZ2h0IGJ1dHRvbiB0aGUgcmVzaXplIGlzIHN0dWNrIGluIHJlc2l6aW5nIG1vZGVcbiAgICAgICAgLy8gdW50aWwgdXNlcnMgY2xpY2tzIGFnYWluLCBkb250IGNvbnRpbnVlIGlmIHJpZ2h0IGNsaWNrIGlzIHVzZWQuXG4gICAgICAgIC8vIEhBQ0s6IE1vdXNlRXZlbnQgZG9lcyBub3QgaGF2ZSBgd2hpY2hgIGZyb20gZmxvdy1iaW4gdjAuNjguXG4gICAgICAgIGlmIChldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5uYXRpdmVFdmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgY2xpZW50WCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRml4ICMxNjhcbiAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNpemUud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2l6ZS53aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5wcm9wcy5zaXplLndpZHRoIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgIHg6IGNsaWVudFgsXG4gICAgICAgICAgeTogY2xpZW50WSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBpc1Jlc2l6aW5nOiB0cnVlLFxuICAgICAgICByZXNpemVDdXJzb3I6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzUmVzaXppbmcpIHJldHVybjtcbiAgICAgIHZhciBjbGllbnRYID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIHZhciBjbGllbnRZID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF9zdGF0ZS5kaXJlY3Rpb24sXG4gICAgICAgICAgb3JpZ2luYWwgPSBfc3RhdGUub3JpZ2luYWwsXG4gICAgICAgICAgd2lkdGggPSBfc3RhdGUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3N0YXRlLmhlaWdodDtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbyA9IF9wcm9wcy5sb2NrQXNwZWN0UmF0aW8sXG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQgPSBfcHJvcHMubG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQsXG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCA9IF9wcm9wcy5sb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuXG4gICAgICB2YXIgc2NhbGUgPSB0aGlzLnByb3BzLnNjYWxlIHx8IDE7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWF4V2lkdGggPSBfcHJvcHMyLm1heFdpZHRoLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wczIubWF4SGVpZ2h0LFxuICAgICAgICAgIG1pbldpZHRoID0gX3Byb3BzMi5taW5XaWR0aCxcbiAgICAgICAgICBtaW5IZWlnaHQgPSBfcHJvcHMyLm1pbkhlaWdodDtcblxuICAgICAgdmFyIHJlc2l6ZVJhdGlvID0gdGhpcy5wcm9wcy5yZXNpemVSYXRpbyB8fCAxO1xuXG4gICAgICAvLyBUT0RPOiByZWZhY3RvclxuICAgICAgdmFyIHBhcmVudFNpemUgPSB0aGlzLmdldFBhcmVudFNpemUoKTtcbiAgICAgIGlmIChtYXhXaWR0aCAmJiB0eXBlb2YgbWF4V2lkdGggPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKG1heFdpZHRoLCAnJScpKSB7XG4gICAgICAgIHZhciBfcmF0aW8gPSBOdW1iZXIobWF4V2lkdGgucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1heFdpZHRoID0gcGFyZW50U2l6ZS53aWR0aCAqIF9yYXRpbztcbiAgICAgIH1cbiAgICAgIGlmIChtYXhIZWlnaHQgJiYgdHlwZW9mIG1heEhlaWdodCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgobWF4SGVpZ2h0LCAnJScpKSB7XG4gICAgICAgIHZhciBfcmF0aW8yID0gTnVtYmVyKG1heEhlaWdodC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGFyZW50U2l6ZS5oZWlnaHQgKiBfcmF0aW8yO1xuICAgICAgfVxuICAgICAgaWYgKG1pbldpZHRoICYmIHR5cGVvZiBtaW5XaWR0aCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgobWluV2lkdGgsICclJykpIHtcbiAgICAgICAgdmFyIF9yYXRpbzMgPSBOdW1iZXIobWluV2lkdGgucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1pbldpZHRoID0gcGFyZW50U2l6ZS53aWR0aCAqIF9yYXRpbzM7XG4gICAgICB9XG4gICAgICBpZiAobWluSGVpZ2h0ICYmIHR5cGVvZiBtaW5IZWlnaHQgPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKG1pbkhlaWdodCwgJyUnKSkge1xuICAgICAgICB2YXIgX3JhdGlvNCA9IE51bWJlcihtaW5IZWlnaHQucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1pbkhlaWdodCA9IHBhcmVudFNpemUuaGVpZ2h0ICogX3JhdGlvNDtcbiAgICAgIH1cbiAgICAgIG1heFdpZHRoID0gdHlwZW9mIG1heFdpZHRoID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtYXhXaWR0aCk7XG4gICAgICBtYXhIZWlnaHQgPSB0eXBlb2YgbWF4SGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtYXhIZWlnaHQpO1xuICAgICAgbWluV2lkdGggPSB0eXBlb2YgbWluV2lkdGggPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1pbldpZHRoKTtcbiAgICAgIG1pbkhlaWdodCA9IHR5cGVvZiBtaW5IZWlnaHQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1pbkhlaWdodCk7XG5cbiAgICAgIHZhciByYXRpbyA9IHR5cGVvZiBsb2NrQXNwZWN0UmF0aW8gPT09ICdudW1iZXInID8gbG9ja0FzcGVjdFJhdGlvIDogb3JpZ2luYWwud2lkdGggLyBvcmlnaW5hbC5oZWlnaHQ7XG4gICAgICB2YXIgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aDtcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQ7XG4gICAgICBpZiAoL3JpZ2h0L2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGggKyAoY2xpZW50WCAtIG9yaWdpbmFsLngpICogcmVzaXplUmF0aW8gLyBzY2FsZTtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykgbmV3SGVpZ2h0ID0gKG5ld1dpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKC9sZWZ0L2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGggLSAoY2xpZW50WCAtIG9yaWdpbmFsLngpICogcmVzaXplUmF0aW8gLyBzY2FsZTtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykgbmV3SGVpZ2h0ID0gKG5ld1dpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKC9ib3R0b20vaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0ICsgKGNsaWVudFkgLSBvcmlnaW5hbC55KSAqIHJlc2l6ZVJhdGlvIC8gc2NhbGU7XG4gICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIG5ld1dpZHRoID0gKG5ld0hlaWdodCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0KSAqIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgIH1cbiAgICAgIGlmICgvdG9wL2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodCAtIChjbGllbnRZIC0gb3JpZ2luYWwueSkgKiByZXNpemVSYXRpbyAvIHNjYWxlO1xuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSBuZXdXaWR0aCA9IChuZXdIZWlnaHQgLSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCkgKiByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHBhcmVudExlZnQgPSBwYXJlbnRSZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHBhcmVudFRvcCA9IHBhcmVudFJlY3QudG9wO1xuXG4gICAgICAgICAgdmFyIF9yZXNpemFibGUkZ2V0Qm91bmRpbiA9IHRoaXMucmVzaXphYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICBfbGVmdCA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbi5sZWZ0LFxuICAgICAgICAgICAgICBfdG9wID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluLnRvcDtcblxuICAgICAgICAgIHZhciBib3VuZFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoICsgKHBhcmVudExlZnQgLSBfbGVmdCk7XG4gICAgICAgICAgdmFyIGJvdW5kSGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCArIChwYXJlbnRUb3AgLSBfdG9wKTtcbiAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgYm91bmRXaWR0aCA/IG1heFdpZHRoIDogYm91bmRXaWR0aDtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgYm91bmRIZWlnaHQgPyBtYXhIZWlnaHQgOiBib3VuZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIF9yZXNpemFibGUkZ2V0Qm91bmRpbjIgPSB0aGlzLnJlc2l6YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgX2xlZnQyID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluMi5sZWZ0LFxuICAgICAgICAgICAgICBfdG9wMiA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbjIudG9wO1xuXG4gICAgICAgICAgdmFyIF9ib3VuZFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBfbGVmdDI7XG4gICAgICAgICAgdmFyIF9ib3VuZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIF90b3AyO1xuICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBfYm91bmRXaWR0aCA/IG1heFdpZHRoIDogX2JvdW5kV2lkdGg7XG4gICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IF9ib3VuZEhlaWdodCA/IG1heEhlaWdodCA6IF9ib3VuZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJvdW5kcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5wcm9wcy5ib3VuZHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0O1xuICAgICAgICB2YXIgdGFyZ2V0VG9wID0gdGFyZ2V0UmVjdC50b3A7XG5cbiAgICAgICAgdmFyIF9yZXNpemFibGUkZ2V0Qm91bmRpbjMgPSB0aGlzLnJlc2l6YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIF9sZWZ0MyA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbjMubGVmdCxcbiAgICAgICAgICAgIF90b3AzID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluMy50b3A7XG5cbiAgICAgICAgaWYgKCEodGhpcy5wcm9wcy5ib3VuZHMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgICAgdmFyIF9ib3VuZFdpZHRoMiA9IHRoaXMucHJvcHMuYm91bmRzLm9mZnNldFdpZHRoICsgKHRhcmdldExlZnQgLSBfbGVmdDMpO1xuICAgICAgICB2YXIgX2JvdW5kSGVpZ2h0MiA9IHRoaXMucHJvcHMuYm91bmRzLm9mZnNldEhlaWdodCArICh0YXJnZXRUb3AgLSBfdG9wMyk7XG4gICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBfYm91bmRXaWR0aDIgPyBtYXhXaWR0aCA6IF9ib3VuZFdpZHRoMjtcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IF9ib3VuZEhlaWdodDIgPyBtYXhIZWlnaHQgOiBfYm91bmRIZWlnaHQyO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29tcHV0ZWRNaW5XaWR0aCA9IHR5cGVvZiBtaW5XaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyAxMCA6IG1pbldpZHRoO1xuICAgICAgdmFyIGNvbXB1dGVkTWF4V2lkdGggPSB0eXBlb2YgbWF4V2lkdGggPT09ICd1bmRlZmluZWQnIHx8IG1heFdpZHRoIDwgMCA/IG5ld1dpZHRoIDogbWF4V2lkdGg7XG4gICAgICB2YXIgY29tcHV0ZWRNaW5IZWlnaHQgPSB0eXBlb2YgbWluSGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IDEwIDogbWluSGVpZ2h0O1xuICAgICAgdmFyIGNvbXB1dGVkTWF4SGVpZ2h0ID0gdHlwZW9mIG1heEhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgfHwgbWF4SGVpZ2h0IDwgMCA/IG5ld0hlaWdodCA6IG1heEhlaWdodDtcblxuICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICB2YXIgZXh0cmFNaW5XaWR0aCA9IChjb21wdXRlZE1pbkhlaWdodCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0KSAqIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgICAgdmFyIGV4dHJhTWF4V2lkdGggPSAoY29tcHV0ZWRNYXhIZWlnaHQgLSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCkgKiByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICAgIHZhciBleHRyYU1pbkhlaWdodCA9IChjb21wdXRlZE1pbldpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgICB2YXIgZXh0cmFNYXhIZWlnaHQgPSAoY29tcHV0ZWRNYXhXaWR0aCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgpIC8gcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDtcbiAgICAgICAgdmFyIGxvY2tlZE1pbldpZHRoID0gTWF0aC5tYXgoY29tcHV0ZWRNaW5XaWR0aCwgZXh0cmFNaW5XaWR0aCk7XG4gICAgICAgIHZhciBsb2NrZWRNYXhXaWR0aCA9IE1hdGgubWluKGNvbXB1dGVkTWF4V2lkdGgsIGV4dHJhTWF4V2lkdGgpO1xuICAgICAgICB2YXIgbG9ja2VkTWluSGVpZ2h0ID0gTWF0aC5tYXgoY29tcHV0ZWRNaW5IZWlnaHQsIGV4dHJhTWluSGVpZ2h0KTtcbiAgICAgICAgdmFyIGxvY2tlZE1heEhlaWdodCA9IE1hdGgubWluKGNvbXB1dGVkTWF4SGVpZ2h0LCBleHRyYU1heEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobmV3V2lkdGgsIGxvY2tlZE1pbldpZHRoLCBsb2NrZWRNYXhXaWR0aCk7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgbG9ja2VkTWluSGVpZ2h0LCBsb2NrZWRNYXhIZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChuZXdXaWR0aCwgY29tcHV0ZWRNaW5XaWR0aCwgY29tcHV0ZWRNYXhXaWR0aCk7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgY29tcHV0ZWRNaW5IZWlnaHQsIGNvbXB1dGVkTWF4SGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmdyaWQpIHtcbiAgICAgICAgbmV3V2lkdGggPSBzbmFwKG5ld1dpZHRoLCB0aGlzLnByb3BzLmdyaWRbMF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuZ3JpZCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBzbmFwKG5ld0hlaWdodCwgdGhpcy5wcm9wcy5ncmlkWzFdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuc25hcCAmJiB0aGlzLnByb3BzLnNuYXAueCkge1xuICAgICAgICBuZXdXaWR0aCA9IGZpbmRDbG9zZXN0U25hcChuZXdXaWR0aCwgdGhpcy5wcm9wcy5zbmFwLngpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuc25hcCAmJiB0aGlzLnByb3BzLnNuYXAueSkge1xuICAgICAgICBuZXdIZWlnaHQgPSBmaW5kQ2xvc2VzdFNuYXAobmV3SGVpZ2h0LCB0aGlzLnByb3BzLnNuYXAueSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWx0YSA9IHtcbiAgICAgICAgd2lkdGg6IG5ld1dpZHRoIC0gb3JpZ2luYWwud2lkdGgsXG4gICAgICAgIGhlaWdodDogbmV3SGVpZ2h0IC0gb3JpZ2luYWwuaGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBpZiAod2lkdGggJiYgdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aCh3aWR0aCwgJyUnKSkge1xuICAgICAgICB2YXIgcGVyY2VudCA9IG5ld1dpZHRoIC8gcGFyZW50U2l6ZS53aWR0aCAqIDEwMDtcbiAgICAgICAgbmV3V2lkdGggPSBwZXJjZW50ICsgJyUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVpZ2h0ICYmIHR5cGVvZiBoZWlnaHQgPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKGhlaWdodCwgJyUnKSkge1xuICAgICAgICB2YXIgX3BlcmNlbnQgPSBuZXdIZWlnaHQgLyBwYXJlbnRTaXplLmhlaWdodCAqIDEwMDtcbiAgICAgICAgbmV3SGVpZ2h0ID0gX3BlcmNlbnQgKyAnJSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWR0aDogdGhpcy5jYWxjdWxhdGVOZXdTaXplKG5ld1dpZHRoLCAnd2lkdGgnKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbGN1bGF0ZU5ld1NpemUobmV3SGVpZ2h0LCAnaGVpZ2h0JylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplKGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlLCBkZWx0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNSZXNpemluZyA9IF9zdGF0ZTIuaXNSZXNpemluZyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfc3RhdGUyLmRpcmVjdGlvbixcbiAgICAgICAgICBvcmlnaW5hbCA9IF9zdGF0ZTIub3JpZ2luYWw7XG5cbiAgICAgIGlmICghaXNSZXNpemluZykgcmV0dXJuO1xuICAgICAgdmFyIGRlbHRhID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoIC0gb3JpZ2luYWwud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCAtIG9yaWdpbmFsLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RvcCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RvcChldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSwgZGVsdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMucHJvcHMuc2l6ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZXNpemluZzogZmFsc2UsIHJlc2l6ZUN1cnNvcjogJ2F1dG8nIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTaXplKHNpemUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJSZXNpemVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVzaXplcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZW5hYmxlID0gX3Byb3BzMy5lbmFibGUsXG4gICAgICAgICAgaGFuZGxlU3R5bGVzID0gX3Byb3BzMy5oYW5kbGVTdHlsZXMsXG4gICAgICAgICAgaGFuZGxlQ2xhc3NlcyA9IF9wcm9wczMuaGFuZGxlQ2xhc3NlcyxcbiAgICAgICAgICBoYW5kbGVXcmFwcGVyU3R5bGUgPSBfcHJvcHMzLmhhbmRsZVdyYXBwZXJTdHlsZSxcbiAgICAgICAgICBoYW5kbGVXcmFwcGVyQ2xhc3MgPSBfcHJvcHMzLmhhbmRsZVdyYXBwZXJDbGFzcyxcbiAgICAgICAgICBoYW5kbGVDb21wb25lbnQgPSBfcHJvcHMzLmhhbmRsZUNvbXBvbmVudDtcblxuICAgICAgaWYgKCFlbmFibGUpIHJldHVybiBudWxsO1xuICAgICAgdmFyIHJlc2l6ZXJzID0gT2JqZWN0LmtleXMoZW5hYmxlKS5tYXAoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICBpZiAoZW5hYmxlW2Rpcl0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBSZXNpemVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGRpcixcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXIsXG4gICAgICAgICAgICAgIG9uUmVzaXplU3RhcnQ6IF90aGlzMi5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICAgICAgICByZXBsYWNlU3R5bGVzOiBoYW5kbGVTdHlsZXMgJiYgaGFuZGxlU3R5bGVzW2Rpcl0sXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogaGFuZGxlQ2xhc3NlcyAmJiBoYW5kbGVDbGFzc2VzW2Rpcl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVDb21wb25lbnQgJiYgaGFuZGxlQ29tcG9uZW50W2Rpcl0gPyBSZWFjdC5jcmVhdGVFbGVtZW50KGhhbmRsZUNvbXBvbmVudFtkaXJdKSA6IG51bGxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgICAvLyAjOTMgV3JhcCB0aGUgcmVzaXplIGJveCBpbiBzcGFuICh3aWxsIG5vdCBicmVhayAxMDAlIHdpZHRoL2hlaWdodClcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBoYW5kbGVXcmFwcGVyQ2xhc3MsIHN0eWxlOiBoYW5kbGVXcmFwcGVyU3R5bGUgfSxcbiAgICAgICAgcmVzaXplcnNcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciB1c2VyU2VsZWN0ID0gdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nID8gdXNlclNlbGVjdE5vbmUgOiB1c2VyU2VsZWN0QXV0bztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5yZXNpemFibGUgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgfSwgdXNlclNlbGVjdCwgdGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zaXplU3R5bGUsIHtcbiAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLnByb3BzLm1heEhlaWdodCxcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnByb3BzLm1pbldpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICB9LCB0aGlzLmV4dGVuZHNQcm9wcyksXG4gICAgICAgIHRoaXMuc3RhdGUuaXNSZXNpemluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICAgICAgY3Vyc29yOiAnJyArICh0aGlzLnN0YXRlLnJlc2l6ZUN1cnNvciB8fCAnYXV0bycpLFxuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB6SW5kZXg6ICc5OTk5JyxcbiAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICByaWdodDogJzAnXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdGhpcy5yZW5kZXJSZXNpemVyKClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGFyZW50Tm9kZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNpemFibGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwcm9wc1NpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2l6ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRTaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Jhc2UnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIGlmICghcGFyZW50KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgbiA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKGJhc2VDbGFzc05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICB2YXIgd2lkdGggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIG9yZ1dpZHRoID0gdGhpcy5yZXNpemFibGUub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBvcmdIZWlnaHQgPSB0aGlzLnJlc2l6YWJsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIC8vIEhBQ0s6IFNldCBwb3NpdGlvbiBgcmVsYXRpdmVgIHRvIGdldCBwYXJlbnQgc2l6ZS5cbiAgICAgICAgLy8gICAgICAgVGhpcyBpcyBiZWNhdXNlIHdoZW4gcmUtcmVzaXphYmxlIHNldCBgYWJzb2x1dGVgLCBJIGNhbiBub3QgZ2V0IGJhc2Ugd2lkdGggY29ycmVjdGx5LlxuICAgICAgICB2YXIgb3JnUG9zaXRpb24gPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbjtcbiAgICAgICAgaWYgKG9yZ1Bvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIElORk86IFVzZSBvcmlnaW5hbCB3aWR0aCBvciBoZWlnaHQgaWYgc2V0IGF1dG8uXG4gICAgICAgIHdpZHRoID0gdGhpcy5yZXNpemFibGUuc3R5bGUud2lkdGggIT09ICdhdXRvJyA/IHRoaXMucmVzaXphYmxlLm9mZnNldFdpZHRoIDogb3JnV2lkdGg7XG4gICAgICAgIGhlaWdodCA9IHRoaXMucmVzaXphYmxlLnN0eWxlLmhlaWdodCAhPT0gJ2F1dG8nID8gdGhpcy5yZXNpemFibGUub2Zmc2V0SGVpZ2h0IDogb3JnSGVpZ2h0O1xuICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uID0gb3JnUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZVN0eWxlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZTtcblxuICAgICAgdmFyIGdldFNpemUgPSBmdW5jdGlvbiBnZXRTaXplKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzNC5zdGF0ZVtrZXldID09PSAndW5kZWZpbmVkJyB8fCBfdGhpczQuc3RhdGVba2V5XSA9PT0gJ2F1dG8nKSByZXR1cm4gJ2F1dG8nO1xuICAgICAgICBpZiAoX3RoaXM0LnByb3BzU2l6ZSAmJiBfdGhpczQucHJvcHNTaXplW2tleV0gJiYgZW5kc1dpdGgoX3RoaXM0LnByb3BzU2l6ZVtrZXldLnRvU3RyaW5nKCksICclJykpIHtcbiAgICAgICAgICBpZiAoZW5kc1dpdGgoX3RoaXM0LnN0YXRlW2tleV0udG9TdHJpbmcoKSwgJyUnKSkgcmV0dXJuIF90aGlzNC5zdGF0ZVtrZXldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdmFyIHBhcmVudFNpemUgPSBfdGhpczQuZ2V0UGFyZW50U2l6ZSgpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IE51bWJlcihfdGhpczQuc3RhdGVba2V5XS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgICB2YXIgcGVyY2VudCA9IHZhbHVlIC8gcGFyZW50U2l6ZVtrZXldICogMTAwO1xuICAgICAgICAgIHJldHVybiBwZXJjZW50ICsgJyUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdTaXplKF90aGlzNC5zdGF0ZVtrZXldKTtcbiAgICAgIH07XG4gICAgICB2YXIgd2lkdGggPSBzaXplICYmIHR5cGVvZiBzaXplLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nID8gZ2V0U3RyaW5nU2l6ZShzaXplLndpZHRoKSA6IGdldFNpemUoJ3dpZHRoJyk7XG4gICAgICB2YXIgaGVpZ2h0ID0gc2l6ZSAmJiB0eXBlb2Ygc2l6ZS5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnN0YXRlLmlzUmVzaXppbmcgPyBnZXRTdHJpbmdTaXplKHNpemUuaGVpZ2h0KSA6IGdldFNpemUoJ2hlaWdodCcpO1xuICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmVzaXphYmxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZXNpemFibGUuZGVmYXVsdFByb3BzID0ge1xuICBvblJlc2l6ZVN0YXJ0OiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KCkge30sXG4gIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZSgpIHt9LFxuICBvblJlc2l6ZVN0b3A6IGZ1bmN0aW9uIG9uUmVzaXplU3RvcCgpIHt9LFxuICBlbmFibGU6IHtcbiAgICB0b3A6IHRydWUsXG4gICAgcmlnaHQ6IHRydWUsXG4gICAgYm90dG9tOiB0cnVlLFxuICAgIGxlZnQ6IHRydWUsXG4gICAgdG9wUmlnaHQ6IHRydWUsXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcbiAgICB0b3BMZWZ0OiB0cnVlXG4gIH0sXG4gIHN0eWxlOiB7fSxcbiAgZ3JpZDogWzEsIDFdLFxuICBsb2NrQXNwZWN0UmF0aW86IGZhbHNlLFxuICBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoOiAwLFxuICBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDogMCxcbiAgc2NhbGU6IDEsXG4gIHJlc2l6ZVJhdGlvOiAxXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc2l6YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZS1yZXNpemFibGUvbGliL2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gODE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdyZWFjdC1kb20nKSwgcmVxdWlyZSgncmVhY3QnKSkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydyZWFjdC1kb20nLCAncmVhY3QnXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlJlYWN0RHJhZ2dhYmxlID0gZmFjdG9yeShnbG9iYWwuUmVhY3RET00sZ2xvYmFsLlJlYWN0KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoUmVhY3RET00sUmVhY3QpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cdFJlYWN0RE9NID0gUmVhY3RET00gJiYgUmVhY3RET00uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFJlYWN0RE9NWydkZWZhdWx0J10gOiBSZWFjdERPTTtcblx0UmVhY3QgPSBSZWFjdCAmJiBSZWFjdC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUmVhY3RbJ2RlZmF1bHQnXSA6IFJlYWN0O1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0XHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG5cdH1cblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqXG5cdCAqIFxuXHQgKi9cblxuXHRmdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIGFyZztcblx0ICB9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG5cdCAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG5cdCAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG5cdCAqL1xuXHR2YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIHRoaXM7XG5cdH07XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcblx0ICByZXR1cm4gYXJnO1xuXHR9O1xuXG5cdHZhciBlbXB0eUZ1bmN0aW9uXzEgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICpcblx0ICovXG5cblx0LyoqXG5cdCAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cblx0ICpcblx0ICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcblx0ICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG5cdCAqIGV4cGVjdGluZy5cblx0ICpcblx0ICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcblx0ICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuXHQgKi9cblxuXHR2YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5cdHtcblx0ICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG5cdCAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuXHQgIGlmICghY29uZGl0aW9uKSB7XG5cdCAgICB2YXIgZXJyb3I7XG5cdCAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuXHQgICAgICB2YXIgYXJnSW5kZXggPSAwO1xuXHQgICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuXHQgICAgICB9KSk7XG5cdCAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG5cdCAgICB9XG5cblx0ICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcblx0ICAgIHRocm93IGVycm9yO1xuXHQgIH1cblx0fVxuXG5cdHZhciBpbnZhcmlhbnRfMSA9IGludmFyaWFudDtcblxuXHQvKipcblx0ICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuXHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG5cdCAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG5cdCAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuXHQgKi9cblxuXHR2YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb25fMTtcblxuXHR7XG5cdCAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcblx0ICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcblx0ICAgIH0pO1xuXHQgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuXHQgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcblx0ICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG5cdCAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0ICAgIH0gY2F0Y2ggKHgpIHt9XG5cdCAgfTtcblxuXHQgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG5cdCAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuXHQgICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG5cdCAgICB9XG5cblx0ICAgIGlmICghY29uZGl0aW9uKSB7XG5cdCAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcblx0ICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuXHQgICAgICB9XG5cblx0ICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cblx0dmFyIHdhcm5pbmdfMSA9IHdhcm5pbmc7XG5cblx0Lypcblx0b2JqZWN0LWFzc2lnblxuXHQoYykgU2luZHJlIFNvcmh1c1xuXHRAbGljZW5zZSBNSVRcblx0Ki9cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblx0dmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXHRmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0XHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3QodmFsKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0XHR9KTtcblx0XHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG9iamVjdEFzc2lnbiA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHRcdHZhciBmcm9tO1xuXHRcdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdFx0dmFyIHN5bWJvbHM7XG5cblx0XHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdG87XG5cdH07XG5cblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblxuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5cdHZhciBSZWFjdFByb3BUeXBlc1NlY3JldF8xID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblx0e1xuXHQgIHZhciBpbnZhcmlhbnQkMSA9IGludmFyaWFudF8xO1xuXHQgIHZhciB3YXJuaW5nJDEgPSB3YXJuaW5nXzE7XG5cdCAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0JDEgPSBSZWFjdFByb3BUeXBlc1NlY3JldF8xO1xuXHQgIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG5cdCAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuXHQgKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuXHQgIHtcblx0ICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcblx0ICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG5cdCAgICAgICAgdmFyIGVycm9yO1xuXHQgICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG5cdCAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuXHQgICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG5cdCAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG5cdCAgICAgICAgICBpbnZhcmlhbnQkMSh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG5cdCAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQkMSk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgICAgIGVycm9yID0gZXg7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdhcm5pbmckMSghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcblx0ICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuXHQgICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG5cdCAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuXHQgICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuXHQgICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cblx0ICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH1cblxuXHR2YXIgY2hlY2tQcm9wVHlwZXNfMSA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cdHZhciBmYWN0b3J5V2l0aFR5cGVDaGVja2VycyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG5cdCAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuXHQgIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcblx0ICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuXHQgIC8qKlxuXHQgICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cblx0ICAgKlxuXHQgICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuXHQgICAqXG5cdCAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcblx0ICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcblx0ICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG5cdCAgICogICAgICAgLi4uXG5cdCAgICogICAgIH1cblx0ICAgKlxuXHQgICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuXHQgICAqIEByZXR1cm4gez9mdW5jdGlvbn1cblx0ICAgKi9cblx0ICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcblx0ICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG5cdCAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLyoqXG5cdCAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcblx0ICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuXHQgICAqXG5cdCAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuXHQgICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgcHJvcFR5cGVzOiB7XG5cdCAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuXHQgICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG5cdCAgICpcblx0ICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG5cdCAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuXHQgICAqXG5cdCAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG5cdCAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuXHQgICAqICAgICB9LFxuXHQgICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuXHQgICAqICAgfSk7XG5cdCAgICpcblx0ICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG5cdCAgICpcblx0ICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcblx0ICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cblx0ICAgKlxuXHQgICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcblx0ICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICBwcm9wVHlwZXM6IHtcblx0ICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cblx0ICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuXHQgICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcblx0ICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuXHQgICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG5cdCAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuXHQgICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuXHQgICAqICAgICAgICAgICk7XG5cdCAgICogICAgICAgIH1cblx0ICAgKiAgICAgIH1cblx0ICAgKiAgICB9LFxuXHQgICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuXHQgICAqICB9KTtcblx0ICAgKlxuXHQgICAqIEBpbnRlcm5hbFxuXHQgICAqL1xuXG5cdCAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuXHQgIC8vIEltcG9ydGFudCFcblx0ICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG5cdCAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuXHQgICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuXHQgICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcblx0ICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuXHQgICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG5cdCAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcblx0ICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuXHQgICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cblx0ICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcblx0ICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcblx0ICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuXHQgICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcblx0ICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG5cdCAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcblx0ICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG5cdCAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG5cdCAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcblx0ICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuXHQgIH07XG5cblx0ICAvKipcblx0ICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG5cdCAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5cdCAgICovXG5cdCAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXHQgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcblx0ICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cblx0ICAgIGlmICh4ID09PSB5KSB7XG5cdCAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuXHQgICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuXHQgICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuXHQgICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuXHQgIC8qKlxuXHQgICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcblx0ICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuXHQgICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cblx0ICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG5cdCAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuXHQgICAqL1xuXHQgIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuXHQgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0ICAgIHRoaXMuc3RhY2sgPSAnJztcblx0ICB9XG5cdCAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuXHQgIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG5cdCAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcblx0ICAgIHtcblx0ICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG5cdCAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG5cdCAgICB9XG5cdCAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcblx0ICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuXHQgICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cblx0ICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSkge1xuXHQgICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG5cdCAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2Vcblx0ICAgICAgICAgIGludmFyaWFudF8xKFxuXHQgICAgICAgICAgICBmYWxzZSxcblx0ICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuXHQgICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcblx0ICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG5cdCAgICAgICAgICApO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcblx0ICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcblx0ICAgICAgICAgIGlmIChcblx0ICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuXHQgICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG5cdCAgICAgICAgICApIHtcblx0ICAgICAgICAgICAgd2FybmluZ18xKFxuXHQgICAgICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcblx0ICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuXHQgICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG5cdCAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG5cdCAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuXHQgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG5cdCAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcblx0ICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuXHQgICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cblx0ICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcblx0ICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcblx0ICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cblx0ICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG5cdCAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zTnVsbCk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpO1xuXHQgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuXHQgICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG5cdCAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG5cdCAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG5cdCAgICAgIHdhcm5pbmdfMShmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpO1xuXHQgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zTnVsbDtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcblx0ICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG5cdCAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG5cdCAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdCAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSk7XG5cdCAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcblx0ICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuXHQgICAgICB3YXJuaW5nXzEoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJyk7XG5cdCAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uXzEudGhhdFJldHVybnNOdWxsO1xuXHQgICAgfVxuXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuXHQgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICB3YXJuaW5nXzEoXG5cdCAgICAgICAgICBmYWxzZSxcblx0ICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG5cdCAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcblx0ICAgICAgICAgIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSxcblx0ICAgICAgICAgIGlcblx0ICAgICAgICApO1xuXHQgICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uXzEudGhhdFJldHVybnNOdWxsO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG5cdCAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKSA9PSBudWxsKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXHQgICAgICAgIGlmICghY2hlY2tlcikge1xuXHQgICAgICAgICAgY29udGludWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpO1xuXHQgICAgICAgIGlmIChlcnJvcikge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuXHQgICAgICAvLyBwcm9wcy5cblx0ICAgICAgdmFyIGFsbEtleXMgPSBvYmplY3RBc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cdCAgICAgICAgaWYgKCFjaGVja2VyKSB7XG5cdCAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG5cdCAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcblx0ICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcblx0ICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG5cdCAgICAgICAgICApO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuXHQgICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG5cdCAgICAgIGNhc2UgJ251bWJlcic6XG5cdCAgICAgIGNhc2UgJ3N0cmluZyc6XG5cdCAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuXHQgICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuXHQgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcblx0ICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuXHQgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgICB2YXIgc3RlcDtcblx0ICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuXHQgICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG5cdCAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuXHQgICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG5cdCAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcblx0ICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuXHQgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgZGVmYXVsdDpcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuXHQgICAgLy8gTmF0aXZlIFN5bWJvbC5cblx0ICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cblx0ICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG5cdCAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG5cdCAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cblx0ICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG5cdCAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG5cdCAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuXHQgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuXHQgICAgICByZXR1cm4gJ2FycmF5Jztcblx0ICAgIH1cblx0ICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0ICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuXHQgICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cblx0ICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG5cdCAgICAgIHJldHVybiAnb2JqZWN0Jztcblx0ICAgIH1cblx0ICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuXHQgICAgICByZXR1cm4gJ3N5bWJvbCc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcHJvcFR5cGU7XG5cdCAgfVxuXG5cdCAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuXHQgIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuXHQgIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG5cdCAgICB9XG5cdCAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHQgICAgICAgIHJldHVybiAnZGF0ZSc7XG5cdCAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcHJvcFR5cGU7XG5cdCAgfVxuXG5cdCAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuXHQgIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG5cdCAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG5cdCAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcblx0ICAgIHN3aXRjaCAodHlwZSkge1xuXHQgICAgICBjYXNlICdhcnJheSc6XG5cdCAgICAgIGNhc2UgJ29iamVjdCc6XG5cdCAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcblx0ICAgICAgY2FzZSAnYm9vbGVhbic6XG5cdCAgICAgIGNhc2UgJ2RhdGUnOlxuXHQgICAgICBjYXNlICdyZWdleHAnOlxuXHQgICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcblx0ICAgICAgZGVmYXVsdDpcblx0ICAgICAgICByZXR1cm4gdHlwZTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuXHQgIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcblx0ICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuXHQgICAgICByZXR1cm4gQU5PTllNT1VTO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHQgIH1cblxuXHQgIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXNfMTtcblx0ICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuXHQgIHJldHVybiBSZWFjdFByb3BUeXBlcztcblx0fTtcblxuXHR2YXIgcHJvcFR5cGVzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXG5cdHtcblx0ICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcblx0ICAgIFN5bWJvbC5mb3IgJiZcblx0ICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcblx0ICAgIDB4ZWFjNztcblxuXHQgIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG5cdCAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuXHQgICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcblx0ICB9O1xuXG5cdCAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG5cdCAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuXHQgIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcblx0ICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcblx0fVxuXHR9KTtcblxuXHR2YXIgY2xhc3NuYW1lcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcblx0LyohXG5cdCAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG5cdCAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0ICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG5cdCovXG5cdC8qIGdsb2JhbCBkZWZpbmUgKi9cblxuXHQoZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdFx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHRcdH1cblxuXHRcdGlmICgnb2JqZWN0JyAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHVuZGVmaW5lZC5hbWQgPT09ICdvYmplY3QnICYmIHVuZGVmaW5lZC5hbWQpIHtcblx0XHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRcdHVuZGVmaW5lZCgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0XHR9XG5cdH0oKSk7XG5cdH0pO1xuXG5cdC8vIEBjcmVkaXRzIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JvZ296aG5pa29mZi9hNDNjZmVkMjdjNDFlNGU2OGNkY1xuXHRmdW5jdGlvbiBmaW5kSW5BcnJheShhcnJheSAvKjogQXJyYXk8YW55PiB8IFRvdWNoTGlzdCovLCBjYWxsYmFjayAvKjogRnVuY3Rpb24qLykgLyo6IGFueSovIHtcblx0ICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgIGlmIChjYWxsYmFjay5hcHBseShjYWxsYmFjaywgW2FycmF5W2ldLCBpLCBhcnJheV0pKSByZXR1cm4gYXJyYXlbaV07XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jIC8qOiBhbnkqLykgLyo6IGJvb2xlYW4qLyB7XG5cdCAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXG5cdGZ1bmN0aW9uIGlzTnVtKG51bSAvKjogYW55Ki8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obnVtKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGludChhIC8qOiBzdHJpbmcqLykgLyo6IG51bWJlciovIHtcblx0ICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZG9udFNldE1lKHByb3BzIC8qOiBPYmplY3QqLywgcHJvcE5hbWUgLyo6IHN0cmluZyovLCBjb21wb25lbnROYW1lIC8qOiBzdHJpbmcqLykge1xuXHQgIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcblx0ICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCAnICsgcHJvcE5hbWUgKyAnIHBhc3NlZCB0byAnICsgY29tcG9uZW50TmFtZSArICcgLSBkbyBub3Qgc2V0IHRoaXMsIHNldCBpdCBvbiB0aGUgY2hpbGQuJyk7XG5cdCAgfVxuXHR9XG5cblx0dmFyIHByZWZpeGVzID0gWydNb3onLCAnV2Via2l0JywgJ08nLCAnbXMnXTtcblx0ZnVuY3Rpb24gZ2V0UHJlZml4KCkgLyo6IHN0cmluZyovIHtcblx0ICB2YXIgcHJvcCAvKjogc3RyaW5nKi8gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICd0cmFuc2Zvcm0nO1xuXG5cdCAgLy8gQ2hlY2tpbmcgc3BlY2lmaWNhbGx5IGZvciAnd2luZG93LmRvY3VtZW50JyBpcyBmb3IgcHNldWRvLWJyb3dzZXIgc2VydmVyLXNpZGVcblx0ICAvLyBlbnZpcm9ubWVudHMgdGhhdCBkZWZpbmUgJ3dpbmRvdycgYXMgdGhlIGdsb2JhbCBjb250ZXh0LlxuXHQgIC8vIEUuZy4gUmVhY3QtcmFpbHMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yYWlscy9wdWxsLzg0KVxuXHQgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuXG5cdCAgdmFyIHN0eWxlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuXHQgIGlmIChwcm9wIGluIHN0eWxlKSByZXR1cm4gJyc7XG5cblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBpZiAoYnJvd3NlclByZWZpeFRvS2V5KHByb3AsIHByZWZpeGVzW2ldKSBpbiBzdHlsZSkgcmV0dXJuIHByZWZpeGVzW2ldO1xuXHQgIH1cblxuXHQgIHJldHVybiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIGJyb3dzZXJQcmVmaXhUb0tleShwcm9wIC8qOiBzdHJpbmcqLywgcHJlZml4IC8qOiBzdHJpbmcqLykgLyo6IHN0cmluZyovIHtcblx0ICByZXR1cm4gcHJlZml4ID8gJycgKyBwcmVmaXggKyBrZWJhYlRvVGl0bGVDYXNlKHByb3ApIDogcHJvcDtcblx0fVxuXG5cdGZ1bmN0aW9uIGtlYmFiVG9UaXRsZUNhc2Uoc3RyIC8qOiBzdHJpbmcqLykgLyo6IHN0cmluZyovIHtcblx0ICB2YXIgb3V0ID0gJyc7XG5cdCAgdmFyIHNob3VsZENhcGl0YWxpemUgPSB0cnVlO1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBpZiAoc2hvdWxkQ2FwaXRhbGl6ZSkge1xuXHQgICAgICBvdXQgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG5cdCAgICAgIHNob3VsZENhcGl0YWxpemUgPSBmYWxzZTtcblx0ICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnLScpIHtcblx0ICAgICAgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBvdXQgKz0gc3RyW2ldO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gb3V0O1xuXHR9XG5cblx0Ly8gRGVmYXVsdCBleHBvcnQgaXMgdGhlIHByZWZpeCBpdHNlbGYsIGxpa2UgJ01veicsICdXZWJraXQnLCBldGNcblx0Ly8gTm90ZSB0aGF0IHlvdSBtYXkgaGF2ZSB0byByZS10ZXN0IGZvciBjZXJ0YWluIHRoaW5nczsgZm9yIGluc3RhbmNlLCBDaHJvbWUgNTBcblx0Ly8gY2FuIGhhbmRsZSB1bnByZWZpeGVkIGB0cmFuc2Zvcm1gLCBidXQgbm90IHVucHJlZml4ZWQgYHVzZXItc2VsZWN0YFxuXHR2YXIgYnJvd3NlclByZWZpeCA9IGdldFByZWZpeCgpO1xuXG5cdHZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcblx0ICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuXHQgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcblx0ICB9XG5cdH07XG5cblx0dmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuXHQgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG5cdCAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcblx0ICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblx0ICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG5cdCAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXHQgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG5cdCAgICByZXR1cm4gQ29uc3RydWN0b3I7XG5cdCAgfTtcblx0fSgpO1xuXG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcblx0ICBpZiAoa2V5IGluIG9iaikge1xuXHQgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG5cdCAgICAgIHZhbHVlOiB2YWx1ZSxcblx0ICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgICB3cml0YWJsZTogdHJ1ZVxuXHQgICAgfSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIG9ialtrZXldID0gdmFsdWU7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG9iajtcblx0fTtcblxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0ICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuXHQgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuXHQgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gdGFyZ2V0O1xuXHR9O1xuXG5cdHZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuXHQgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuXHQgIH1cblxuXHQgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuXHQgICAgY29uc3RydWN0b3I6IHtcblx0ICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuXHQgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcblx0ICAgICAgd3JpdGFibGU6IHRydWUsXG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHQgICAgfVxuXHQgIH0pO1xuXHQgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcblx0fTtcblxuXHR2YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG5cdCAgaWYgKCFzZWxmKSB7XG5cdCAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG5cdH07XG5cblx0dmFyIHNsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcblx0ICAgIHZhciBfYXJyID0gW107XG5cdCAgICB2YXIgX24gPSB0cnVlO1xuXHQgICAgdmFyIF9kID0gZmFsc2U7XG5cdCAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cblx0ICAgIHRyeSB7XG5cdCAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcblx0ICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG5cdCAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuXHQgICAgICB9XG5cdCAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgX2QgPSB0cnVlO1xuXHQgICAgICBfZSA9IGVycjtcblx0ICAgIH0gZmluYWxseSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcblx0ICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBfYXJyO1xuXHQgIH1cblxuXHQgIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG5cdCAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdCAgICAgIHJldHVybiBhcnI7XG5cdCAgICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuXHQgICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG5cdCAgICB9XG5cdCAgfTtcblx0fSgpO1xuXG5cdC8qOjogaW1wb3J0IHR5cGUge0NvbnRyb2xQb3NpdGlvbiwgUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24sIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi90eXBlcyc7Ki9cblxuXG5cdHZhciBtYXRjaGVzU2VsZWN0b3JGdW5jID0gJyc7XG5cdGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvcihlbCAvKjogTm9kZSovLCBzZWxlY3RvciAvKjogc3RyaW5nKi8pIC8qOiBib29sZWFuKi8ge1xuXHQgIGlmICghbWF0Y2hlc1NlbGVjdG9yRnVuYykge1xuXHQgICAgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9IGZpbmRJbkFycmF5KFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbW96TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJywgJ29NYXRjaGVzU2VsZWN0b3InXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuXHQgICAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cdCAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGVsW21ldGhvZF0pO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgLy8gTWlnaHQgbm90IGJlIGZvdW5kIGVudGlyZWx5IChub3QgYW4gRWxlbWVudD8pIC0gaW4gdGhhdCBjYXNlLCBiYWlsXG5cdCAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgIGlmICghaXNGdW5jdGlvbihlbFttYXRjaGVzU2VsZWN0b3JGdW5jXSkpIHJldHVybiBmYWxzZTtcblxuXHQgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcblx0ICByZXR1cm4gZWxbbWF0Y2hlc1NlbGVjdG9yRnVuY10oc2VsZWN0b3IpO1xuXHR9XG5cblx0Ly8gV29ya3MgdXAgdGhlIHRyZWUgdG8gdGhlIGRyYWdnYWJsZSBpdHNlbGYgYXR0ZW1wdGluZyB0byBtYXRjaCBzZWxlY3Rvci5cblx0ZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGVsIC8qOiBOb2RlKi8sIHNlbGVjdG9yIC8qOiBzdHJpbmcqLywgYmFzZU5vZGUgLyo6IE5vZGUqLykgLyo6IGJvb2xlYW4qLyB7XG5cdCAgdmFyIG5vZGUgPSBlbDtcblx0ICBkbyB7XG5cdCAgICBpZiAobWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG5cdCAgICBpZiAobm9kZSA9PT0gYmFzZU5vZGUpIHJldHVybiBmYWxzZTtcblx0ICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdCAgfSB3aGlsZSAobm9kZSk7XG5cblx0ICByZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRFdmVudChlbCAvKjogP05vZGUqLywgZXZlbnQgLyo6IHN0cmluZyovLCBoYW5kbGVyIC8qOiBGdW5jdGlvbiovKSAvKjogdm9pZCovIHtcblx0ICBpZiAoIWVsKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHQgIGlmIChlbC5hdHRhY2hFdmVudCkge1xuXHQgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcblx0ICB9IGVsc2UgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0ICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cdCAgICBlbFsnb24nICsgZXZlbnRdID0gaGFuZGxlcjtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVFdmVudChlbCAvKjogP05vZGUqLywgZXZlbnQgLyo6IHN0cmluZyovLCBoYW5kbGVyIC8qOiBGdW5jdGlvbiovKSAvKjogdm9pZCovIHtcblx0ICBpZiAoIWVsKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHQgIGlmIChlbC5kZXRhY2hFdmVudCkge1xuXHQgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcblx0ICB9IGVsc2UgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcblx0ICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cdCAgICBlbFsnb24nICsgZXZlbnRdID0gbnVsbDtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBvdXRlckhlaWdodChub2RlIC8qOiBIVE1MRWxlbWVudCovKSAvKjogbnVtYmVyKi8ge1xuXHQgIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xuXHQgIC8vIG9mZnNldFRvcCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuXHQgIHZhciBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcblx0ICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHQgIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG5cdCAgaGVpZ2h0ICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcblx0ICByZXR1cm4gaGVpZ2h0O1xuXHR9XG5cblx0ZnVuY3Rpb24gb3V0ZXJXaWR0aChub2RlIC8qOiBIVE1MRWxlbWVudCovKSAvKjogbnVtYmVyKi8ge1xuXHQgIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xuXHQgIC8vIG9mZnNldExlZnQgd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cblx0ICB2YXIgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuXHQgIHZhciBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdCAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyTGVmdFdpZHRoKTtcblx0ICB3aWR0aCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcblx0ICByZXR1cm4gd2lkdGg7XG5cdH1cblx0ZnVuY3Rpb24gaW5uZXJIZWlnaHQobm9kZSAvKjogSFRNTEVsZW1lbnQqLykgLyo6IG51bWJlciovIHtcblx0ICB2YXIgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG5cdCAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCk7XG5cdCAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xuXHQgIHJldHVybiBoZWlnaHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBpbm5lcldpZHRoKG5vZGUgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBudW1iZXIqLyB7XG5cdCAgdmFyIHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcblx0ICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHQgIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0KTtcblx0ICB3aWR0aCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nUmlnaHQpO1xuXHQgIHJldHVybiB3aWR0aDtcblx0fVxuXG5cdC8vIEdldCBmcm9tIG9mZnNldFBhcmVudFxuXHRmdW5jdGlvbiBvZmZzZXRYWUZyb21QYXJlbnQoZXZ0IC8qOiB7Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9Ki8sIG9mZnNldFBhcmVudCAvKjogSFRNTEVsZW1lbnQqLykgLyo6IENvbnRyb2xQb3NpdGlvbiovIHtcblx0ICB2YXIgaXNCb2R5ID0gb2Zmc2V0UGFyZW50ID09PSBvZmZzZXRQYXJlbnQub3duZXJEb2N1bWVudC5ib2R5O1xuXHQgIHZhciBvZmZzZXRQYXJlbnRSZWN0ID0gaXNCb2R5ID8geyBsZWZ0OiAwLCB0b3A6IDAgfSA6IG9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHQgIHZhciB4ID0gZXZ0LmNsaWVudFggKyBvZmZzZXRQYXJlbnQuc2Nyb2xsTGVmdCAtIG9mZnNldFBhcmVudFJlY3QubGVmdDtcblx0ICB2YXIgeSA9IGV2dC5jbGllbnRZICsgb2Zmc2V0UGFyZW50LnNjcm9sbFRvcCAtIG9mZnNldFBhcmVudFJlY3QudG9wO1xuXG5cdCAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ1NTVHJhbnNmb3JtKGNvbnRyb2xQb3MgLyo6IENvbnRyb2xQb3NpdGlvbiovLCBwb3NpdGlvbk9mZnNldCAvKjogUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24qLykgLyo6IE9iamVjdCovIHtcblx0ICB2YXIgdHJhbnNsYXRpb24gPSBnZXRUcmFuc2xhdGlvbihjb250cm9sUG9zLCBwb3NpdGlvbk9mZnNldCwgJ3B4Jyk7XG5cdCAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBicm93c2VyUHJlZml4VG9LZXkoJ3RyYW5zZm9ybScsIGJyb3dzZXJQcmVmaXgpLCB0cmFuc2xhdGlvbik7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVTVkdUcmFuc2Zvcm0oY29udHJvbFBvcyAvKjogQ29udHJvbFBvc2l0aW9uKi8sIHBvc2l0aW9uT2Zmc2V0IC8qOiBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbiovKSAvKjogc3RyaW5nKi8ge1xuXHQgIHZhciB0cmFuc2xhdGlvbiA9IGdldFRyYW5zbGF0aW9uKGNvbnRyb2xQb3MsIHBvc2l0aW9uT2Zmc2V0LCAnJyk7XG5cdCAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuXHR9XG5cdGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKF9yZWYyLCBwb3NpdGlvbk9mZnNldCAvKjogUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24qLywgdW5pdFN1ZmZpeCAvKjogc3RyaW5nKi8pIC8qOiBzdHJpbmcqLyB7XG5cdCAgdmFyIHggPSBfcmVmMi54LFxuXHQgICAgICB5ID0gX3JlZjIueTtcblxuXHQgIHZhciB0cmFuc2xhdGlvbiA9ICd0cmFuc2xhdGUoJyArIHggKyB1bml0U3VmZml4ICsgJywnICsgeSArIHVuaXRTdWZmaXggKyAnKSc7XG5cdCAgaWYgKHBvc2l0aW9uT2Zmc2V0KSB7XG5cdCAgICB2YXIgZGVmYXVsdFggPSAnJyArICh0eXBlb2YgcG9zaXRpb25PZmZzZXQueCA9PT0gJ3N0cmluZycgPyBwb3NpdGlvbk9mZnNldC54IDogcG9zaXRpb25PZmZzZXQueCArIHVuaXRTdWZmaXgpO1xuXHQgICAgdmFyIGRlZmF1bHRZID0gJycgKyAodHlwZW9mIHBvc2l0aW9uT2Zmc2V0LnkgPT09ICdzdHJpbmcnID8gcG9zaXRpb25PZmZzZXQueSA6IHBvc2l0aW9uT2Zmc2V0LnkgKyB1bml0U3VmZml4KTtcblx0ICAgIHRyYW5zbGF0aW9uID0gJ3RyYW5zbGF0ZSgnICsgZGVmYXVsdFggKyAnLCAnICsgZGVmYXVsdFkgKyAnKScgKyB0cmFuc2xhdGlvbjtcblx0ICB9XG5cdCAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VG91Y2goZSAvKjogTW91c2VUb3VjaEV2ZW50Ki8sIGlkZW50aWZpZXIgLyo6IG51bWJlciovKSAvKjogP3tjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcn0qLyB7XG5cdCAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLnRhcmdldFRvdWNoZXMsIGZ1bmN0aW9uICh0KSB7XG5cdCAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gdC5pZGVudGlmaWVyO1xuXHQgIH0pIHx8IGUuY2hhbmdlZFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHQpIHtcblx0ICAgIHJldHVybiBpZGVudGlmaWVyID09PSB0LmlkZW50aWZpZXI7XG5cdCAgfSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUb3VjaElkZW50aWZpZXIoZSAvKjogTW91c2VUb3VjaEV2ZW50Ki8pIC8qOiA/bnVtYmVyKi8ge1xuXHQgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzWzBdKSByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XG5cdCAgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSkgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcblx0fVxuXG5cdC8vIFVzZXItc2VsZWN0IEhhY2tzOlxuXHQvL1xuXHQvLyBVc2VmdWwgZm9yIHByZXZlbnRpbmcgYmx1ZSBoaWdobGlnaHRzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcgd2hlbiBkcmFnZ2luZy5cblxuXHQvLyBOb3RlIHdlJ3JlIHBhc3NpbmcgYGRvY3VtZW50YCBiL2Mgd2UgY291bGQgYmUgaWZyYW1lZFxuXHRmdW5jdGlvbiBhZGRVc2VyU2VsZWN0U3R5bGVzKGRvYyAvKjogP0RvY3VtZW50Ki8pIHtcblx0ICBpZiAoIWRvYykgcmV0dXJuO1xuXHQgIHZhciBzdHlsZUVsID0gZG9jLmdldEVsZW1lbnRCeUlkKCdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnKTtcblx0ICBpZiAoIXN0eWxlRWwpIHtcblx0ICAgIHN0eWxlRWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0ICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICBzdHlsZUVsLmlkID0gJ3JlYWN0LWRyYWdnYWJsZS1zdHlsZS1lbCc7XG5cdCAgICBzdHlsZUVsLmlubmVySFRNTCA9ICcucmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbiAqOjotbW96LXNlbGVjdGlvbiB7YWxsOiBpbmhlcml0O31cXG4nO1xuXHQgICAgc3R5bGVFbC5pbm5lckhUTUwgKz0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6OnNlbGVjdGlvbiB7YWxsOiBpbmhlcml0O31cXG4nO1xuXHQgICAgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG5cdCAgfVxuXHQgIGlmIChkb2MuYm9keSkgYWRkQ2xhc3NOYW1lKGRvYy5ib2R5LCAncmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbicpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyhkb2MgLyo6ID9Eb2N1bWVudCovKSB7XG5cdCAgdHJ5IHtcblx0ICAgIGlmIChkb2MgJiYgZG9jLmJvZHkpIHJlbW92ZUNsYXNzTmFtZShkb2MuYm9keSwgJ3JlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24nKTtcblx0ICAgIC8vICRGbG93SWdub3JlOiBJRVxuXHQgICAgaWYgKGRvYy5zZWxlY3Rpb24pIHtcblx0ICAgICAgLy8gJEZsb3dJZ25vcmU6IElFXG5cdCAgICAgIGRvYy5zZWxlY3Rpb24uZW1wdHkoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTsgLy8gcmVtb3ZlIHNlbGVjdGlvbiBjYXVzZWQgYnkgc2Nyb2xsXG5cdCAgICB9XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgLy8gcHJvYmFibHkgSUVcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBzdHlsZUhhY2tzKCkgLyo6IE9iamVjdCovIHtcblx0ICB2YXIgY2hpbGRTdHlsZSAvKjogT2JqZWN0Ki8gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG5cdCAgLy8gV29ya2Fyb3VuZCBJRSBwb2ludGVyIGV2ZW50czsgc2VlICM1MVxuXHQgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9pc3N1ZXMvNTEjaXNzdWVjb21tZW50LTEwMzQ4ODI3OFxuXHQgIHJldHVybiBfZXh0ZW5kcyh7XG5cdCAgICB0b3VjaEFjdGlvbjogJ25vbmUnXG5cdCAgfSwgY2hpbGRTdHlsZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRDbGFzc05hbWUoZWwgLyo6IEhUTUxFbGVtZW50Ki8sIGNsYXNzTmFtZSAvKjogc3RyaW5nKi8pIHtcblx0ICBpZiAoZWwuY2xhc3NMaXN0KSB7XG5cdCAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGlmICghZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPyFcXFxcUyknKSkpIHtcblx0ICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWwgLyo6IEhUTUxFbGVtZW50Ki8sIGNsYXNzTmFtZSAvKjogc3RyaW5nKi8pIHtcblx0ICBpZiAoZWwuY2xhc3NMaXN0KSB7XG5cdCAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPyFcXFxcUyknLCAnZycpLCAnJyk7XG5cdCAgfVxuXHR9XG5cblx0Lyo6OiBpbXBvcnQgdHlwZSBEcmFnZ2FibGUgZnJvbSAnLi4vRHJhZ2dhYmxlJzsqL1xuXHQvKjo6IGltcG9ydCB0eXBlIHtCb3VuZHMsIENvbnRyb2xQb3NpdGlvbiwgRHJhZ2dhYmxlRGF0YSwgTW91c2VUb3VjaEV2ZW50fSBmcm9tICcuL3R5cGVzJzsqL1xuXHQvKjo6IGltcG9ydCB0eXBlIERyYWdnYWJsZUNvcmUgZnJvbSAnLi4vRHJhZ2dhYmxlQ29yZSc7Ki9cblxuXG5cdGZ1bmN0aW9uIGdldEJvdW5kUG9zaXRpb24oZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGUqLywgeCAvKjogbnVtYmVyKi8sIHkgLyo6IG51bWJlciovKSAvKjogW251bWJlciwgbnVtYmVyXSovIHtcblx0ICAvLyBJZiBubyBib3VuZHMsIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb25cblx0ICBpZiAoIWRyYWdnYWJsZS5wcm9wcy5ib3VuZHMpIHJldHVybiBbeCwgeV07XG5cblx0ICAvLyBDbG9uZSBuZXcgYm91bmRzXG5cdCAgdmFyIGJvdW5kcyA9IGRyYWdnYWJsZS5wcm9wcy5ib3VuZHM7XG5cblx0ICBib3VuZHMgPSB0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJyA/IGJvdW5kcyA6IGNsb25lQm91bmRzKGJvdW5kcyk7XG5cdCAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGUpO1xuXG5cdCAgaWYgKHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnKSB7XG5cdCAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcblxuXHQgICAgdmFyIG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldztcblx0ICAgIHZhciBib3VuZE5vZGUgPSB2b2lkIDA7XG5cdCAgICBpZiAoYm91bmRzID09PSAncGFyZW50Jykge1xuXHQgICAgICBib3VuZE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBib3VuZE5vZGUgPSBvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm91bmRzKTtcblx0ICAgIH1cblx0ICAgIGlmICghKGJvdW5kTm9kZSBpbnN0YW5jZW9mIG93bmVyV2luZG93LkhUTUxFbGVtZW50KSkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBzZWxlY3RvciBcIicgKyBib3VuZHMgKyAnXCIgY291bGQgbm90IGZpbmQgYW4gZWxlbWVudC4nKTtcblx0ICAgIH1cblx0ICAgIHZhciBub2RlU3R5bGUgPSBvd25lcldpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHQgICAgdmFyIGJvdW5kTm9kZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3VuZE5vZGUpO1xuXHQgICAgLy8gQ29tcHV0ZSBib3VuZHMuIFRoaXMgaXMgYSBwYWluIHdpdGggcGFkZGluZyBhbmQgb2Zmc2V0cyBidXQgdGhpcyBnZXRzIGl0IGV4YWN0bHkgcmlnaHQuXG5cdCAgICBib3VuZHMgPSB7XG5cdCAgICAgIGxlZnQ6IC1ub2RlLm9mZnNldExlZnQgKyBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ0xlZnQpICsgaW50KG5vZGVTdHlsZS5tYXJnaW5MZWZ0KSxcblx0ICAgICAgdG9wOiAtbm9kZS5vZmZzZXRUb3AgKyBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ1RvcCkgKyBpbnQobm9kZVN0eWxlLm1hcmdpblRvcCksXG5cdCAgICAgIHJpZ2h0OiBpbm5lcldpZHRoKGJvdW5kTm9kZSkgLSBvdXRlcldpZHRoKG5vZGUpIC0gbm9kZS5vZmZzZXRMZWZ0ICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdSaWdodCkgLSBpbnQobm9kZVN0eWxlLm1hcmdpblJpZ2h0KSxcblx0ICAgICAgYm90dG9tOiBpbm5lckhlaWdodChib3VuZE5vZGUpIC0gb3V0ZXJIZWlnaHQobm9kZSkgLSBub2RlLm9mZnNldFRvcCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nQm90dG9tKSAtIGludChub2RlU3R5bGUubWFyZ2luQm90dG9tKVxuXHQgICAgfTtcblx0ICB9XG5cblx0ICAvLyBLZWVwIHggYW5kIHkgYmVsb3cgcmlnaHQgYW5kIGJvdHRvbSBsaW1pdHMuLi5cblx0ICBpZiAoaXNOdW0oYm91bmRzLnJpZ2h0KSkgeCA9IE1hdGgubWluKHgsIGJvdW5kcy5yaWdodCk7XG5cdCAgaWYgKGlzTnVtKGJvdW5kcy5ib3R0b20pKSB5ID0gTWF0aC5taW4oeSwgYm91bmRzLmJvdHRvbSk7XG5cblx0ICAvLyBCdXQgYWJvdmUgbGVmdCBhbmQgdG9wIGxpbWl0cy5cblx0ICBpZiAoaXNOdW0oYm91bmRzLmxlZnQpKSB4ID0gTWF0aC5tYXgoeCwgYm91bmRzLmxlZnQpO1xuXHQgIGlmIChpc051bShib3VuZHMudG9wKSkgeSA9IE1hdGgubWF4KHksIGJvdW5kcy50b3ApO1xuXG5cdCAgcmV0dXJuIFt4LCB5XTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNuYXBUb0dyaWQoZ3JpZCAvKjogW251bWJlciwgbnVtYmVyXSovLCBwZW5kaW5nWCAvKjogbnVtYmVyKi8sIHBlbmRpbmdZIC8qOiBudW1iZXIqLykgLyo6IFtudW1iZXIsIG51bWJlcl0qLyB7XG5cdCAgdmFyIHggPSBNYXRoLnJvdW5kKHBlbmRpbmdYIC8gZ3JpZFswXSkgKiBncmlkWzBdO1xuXHQgIHZhciB5ID0gTWF0aC5yb3VuZChwZW5kaW5nWSAvIGdyaWRbMV0pICogZ3JpZFsxXTtcblx0ICByZXR1cm4gW3gsIHldO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FuRHJhZ1goZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGUqLykgLyo6IGJvb2xlYW4qLyB7XG5cdCAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd4Jztcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbkRyYWdZKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlKi8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneSc7XG5cdH1cblxuXHQvLyBHZXQge3gsIHl9IHBvc2l0aW9ucyBmcm9tIGV2ZW50LlxuXHRmdW5jdGlvbiBnZXRDb250cm9sUG9zaXRpb24oZSAvKjogTW91c2VUb3VjaEV2ZW50Ki8sIHRvdWNoSWRlbnRpZmllciAvKjogP251bWJlciovLCBkcmFnZ2FibGVDb3JlIC8qOiBEcmFnZ2FibGVDb3JlKi8pIC8qOiA/Q29udHJvbFBvc2l0aW9uKi8ge1xuXHQgIHZhciB0b3VjaE9iaiA9IHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInID8gZ2V0VG91Y2goZSwgdG91Y2hJZGVudGlmaWVyKSA6IG51bGw7XG5cdCAgaWYgKHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInICYmICF0b3VjaE9iaikgcmV0dXJuIG51bGw7IC8vIG5vdCB0aGUgcmlnaHQgdG91Y2hcblx0ICB2YXIgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZUNvcmUpO1xuXHQgIC8vIFVzZXIgY2FuIHByb3ZpZGUgYW4gb2Zmc2V0UGFyZW50IGlmIGRlc2lyZWQuXG5cdCAgdmFyIG9mZnNldFBhcmVudCA9IGRyYWdnYWJsZUNvcmUucHJvcHMub2Zmc2V0UGFyZW50IHx8IG5vZGUub2Zmc2V0UGFyZW50IHx8IG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuXHQgIHJldHVybiBvZmZzZXRYWUZyb21QYXJlbnQodG91Y2hPYmogfHwgZSwgb2Zmc2V0UGFyZW50KTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhbiBkYXRhIG9iamVjdCBleHBvc2VkIGJ5IDxEcmFnZ2FibGVDb3JlPidzIGV2ZW50c1xuXHRmdW5jdGlvbiBjcmVhdGVDb3JlRGF0YShkcmFnZ2FibGUgLyo6IERyYWdnYWJsZUNvcmUqLywgeCAvKjogbnVtYmVyKi8sIHkgLyo6IG51bWJlciovKSAvKjogRHJhZ2dhYmxlRGF0YSovIHtcblx0ICB2YXIgc3RhdGUgPSBkcmFnZ2FibGUuc3RhdGU7XG5cdCAgdmFyIGlzU3RhcnQgPSAhaXNOdW0oc3RhdGUubGFzdFgpO1xuXHQgIHZhciBub2RlID0gZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcblxuXHQgIGlmIChpc1N0YXJ0KSB7XG5cdCAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBtb3ZlLCB1c2UgdGhlIHggYW5kIHkgYXMgbGFzdCBjb29yZHMuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBub2RlOiBub2RlLFxuXHQgICAgICBkZWx0YVg6IDAsIGRlbHRhWTogMCxcblx0ICAgICAgbGFzdFg6IHgsIGxhc3RZOiB5LFxuXHQgICAgICB4OiB4LCB5OiB5XG5cdCAgICB9O1xuXHQgIH0gZWxzZSB7XG5cdCAgICAvLyBPdGhlcndpc2UgY2FsY3VsYXRlIHByb3BlciB2YWx1ZXMuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBub2RlOiBub2RlLFxuXHQgICAgICBkZWx0YVg6IHggLSBzdGF0ZS5sYXN0WCwgZGVsdGFZOiB5IC0gc3RhdGUubGFzdFksXG5cdCAgICAgIGxhc3RYOiBzdGF0ZS5sYXN0WCwgbGFzdFk6IHN0YXRlLmxhc3RZLFxuXHQgICAgICB4OiB4LCB5OiB5XG5cdCAgICB9O1xuXHQgIH1cblx0fVxuXG5cdC8vIENyZWF0ZSBhbiBkYXRhIGV4cG9zZWQgYnkgPERyYWdnYWJsZT4ncyBldmVudHNcblx0ZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlRGF0YShkcmFnZ2FibGUgLyo6IERyYWdnYWJsZSovLCBjb3JlRGF0YSAvKjogRHJhZ2dhYmxlRGF0YSovKSAvKjogRHJhZ2dhYmxlRGF0YSovIHtcblx0ICB2YXIgc2NhbGUgPSBkcmFnZ2FibGUucHJvcHMuc2NhbGU7XG5cdCAgcmV0dXJuIHtcblx0ICAgIG5vZGU6IGNvcmVEYXRhLm5vZGUsXG5cdCAgICB4OiBkcmFnZ2FibGUuc3RhdGUueCArIGNvcmVEYXRhLmRlbHRhWCAvIHNjYWxlLFxuXHQgICAgeTogZHJhZ2dhYmxlLnN0YXRlLnkgKyBjb3JlRGF0YS5kZWx0YVkgLyBzY2FsZSxcblx0ICAgIGRlbHRhWDogY29yZURhdGEuZGVsdGFYIC8gc2NhbGUsXG5cdCAgICBkZWx0YVk6IGNvcmVEYXRhLmRlbHRhWSAvIHNjYWxlLFxuXHQgICAgbGFzdFg6IGRyYWdnYWJsZS5zdGF0ZS54LFxuXHQgICAgbGFzdFk6IGRyYWdnYWJsZS5zdGF0ZS55XG5cdCAgfTtcblx0fVxuXG5cdC8vIEEgbG90IGZhc3RlciB0aGFuIHN0cmluZ2lmeS9wYXJzZVxuXHRmdW5jdGlvbiBjbG9uZUJvdW5kcyhib3VuZHMgLyo6IEJvdW5kcyovKSAvKjogQm91bmRzKi8ge1xuXHQgIHJldHVybiB7XG5cdCAgICBsZWZ0OiBib3VuZHMubGVmdCxcblx0ICAgIHRvcDogYm91bmRzLnRvcCxcblx0ICAgIHJpZ2h0OiBib3VuZHMucmlnaHQsXG5cdCAgICBib3R0b206IGJvdW5kcy5ib3R0b21cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZmluZERPTU5vZGUoZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGUgfCBEcmFnZ2FibGVDb3JlKi8pIC8qOiBIVE1MRWxlbWVudCovIHtcblx0ICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cdCAgaWYgKCFub2RlKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJzxEcmFnZ2FibGVDb3JlPjogVW5tb3VudGVkIGR1cmluZyBldmVudCEnKTtcblx0ICB9XG5cdCAgLy8gJEZsb3dJZ25vcmUgd2UgY2FuJ3QgYXNzZXJ0IG9uIEhUTUxFbGVtZW50IGR1ZSB0byB0ZXN0cy4uLiBGSVhNRVxuXHQgIHJldHVybiBub2RlO1xuXHR9XG5cblx0Lyplc2xpbnQgbm8tY29uc29sZTowKi9cblx0ZnVuY3Rpb24gbG9nKCkge1xuXHR9XG5cblx0Lyo6OiBpbXBvcnQgdHlwZSB7RXZlbnRIYW5kbGVyLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdXRpbHMvdHlwZXMnOyovXG5cblxuXHQvLyBTaW1wbGUgYWJzdHJhY3Rpb24gZm9yIGRyYWdnaW5nIGV2ZW50cyBuYW1lcy5cblx0Lyo6OiBpbXBvcnQgdHlwZSB7RWxlbWVudCBhcyBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0JzsqL1xuXHR2YXIgZXZlbnRzRm9yID0ge1xuXHQgIHRvdWNoOiB7XG5cdCAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuXHQgICAgbW92ZTogJ3RvdWNobW92ZScsXG5cdCAgICBzdG9wOiAndG91Y2hlbmQnXG5cdCAgfSxcblx0ICBtb3VzZToge1xuXHQgICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuXHQgICAgbW92ZTogJ21vdXNlbW92ZScsXG5cdCAgICBzdG9wOiAnbW91c2V1cCdcblx0ICB9XG5cdH07XG5cblx0Ly8gRGVmYXVsdCB0byBtb3VzZSBldmVudHMuXG5cdHZhciBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7XG5cblx0Lyo6OiB0eXBlIERyYWdnYWJsZUNvcmVTdGF0ZSA9IHtcblx0ICBkcmFnZ2luZzogYm9vbGVhbixcblx0ICBsYXN0WDogbnVtYmVyLFxuXHQgIGxhc3RZOiBudW1iZXIsXG5cdCAgdG91Y2hJZGVudGlmaWVyOiA/bnVtYmVyXG5cdH07Ki9cblx0Lyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVCb3VuZHMgPSB7XG5cdCAgbGVmdDogbnVtYmVyLFxuXHQgIHJpZ2h0OiBudW1iZXIsXG5cdCAgdG9wOiBudW1iZXIsXG5cdCAgYm90dG9tOiBudW1iZXIsXG5cdH07Ki9cblx0Lyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVEYXRhID0ge1xuXHQgIG5vZGU6IEhUTUxFbGVtZW50LFxuXHQgIHg6IG51bWJlciwgeTogbnVtYmVyLFxuXHQgIGRlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcixcblx0ICBsYXN0WDogbnVtYmVyLCBsYXN0WTogbnVtYmVyLFxuXHR9OyovXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHZvaWQ7Ki9cblx0Lyo6OiBleHBvcnQgdHlwZSBDb250cm9sUG9zaXRpb24gPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9OyovXG5cdC8qOjogZXhwb3J0IHR5cGUgUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24gPSB7eDogbnVtYmVyfHN0cmluZywgeTogbnVtYmVyfHN0cmluZ307Ki9cblxuXG5cdC8vXG5cdC8vIERlZmluZSA8RHJhZ2dhYmxlQ29yZT4uXG5cdC8vXG5cdC8vIDxEcmFnZ2FibGVDb3JlPiBpcyBmb3IgYWR2YW5jZWQgdXNhZ2Ugb2YgPERyYWdnYWJsZT4uIEl0IG1haW50YWlucyBtaW5pbWFsIGludGVybmFsIHN0YXRlIHNvIGl0IGNhblxuXHQvLyB3b3JrIHdlbGwgd2l0aCBsaWJyYXJpZXMgdGhhdCByZXF1aXJlIG1vcmUgY29udHJvbCBvdmVyIHRoZSBlbGVtZW50LlxuXHQvL1xuXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlQ29yZVByb3BzID0ge1xuXHQgIGFsbG93QW55Q2xpY2s6IGJvb2xlYW4sXG5cdCAgY2FuY2VsOiBzdHJpbmcsXG5cdCAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDxhbnk+LFxuXHQgIGRpc2FibGVkOiBib29sZWFuLFxuXHQgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBib29sZWFuLFxuXHQgIG9mZnNldFBhcmVudDogSFRNTEVsZW1lbnQsXG5cdCAgZ3JpZDogW251bWJlciwgbnVtYmVyXSxcblx0ICBoYW5kbGU6IHN0cmluZyxcblx0ICBvblN0YXJ0OiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXG5cdCAgb25EcmFnOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXG5cdCAgb25TdG9wOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXG5cdCAgb25Nb3VzZURvd246IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkLFxuXHR9OyovXG5cblx0dmFyIERyYWdnYWJsZUNvcmUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHQgIGluaGVyaXRzKERyYWdnYWJsZUNvcmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdCAgZnVuY3Rpb24gRHJhZ2dhYmxlQ29yZSgpIHtcblx0ICAgIHZhciBfcmVmO1xuXG5cdCAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG5cdCAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnZ2FibGVDb3JlKTtcblxuXHQgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gRHJhZ2dhYmxlQ29yZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyYWdnYWJsZUNvcmUpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcblx0ICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuXHQgICAgICAvLyBVc2VkIHdoaWxlIGRyYWdnaW5nIHRvIGRldGVybWluZSBkZWx0YXMuXG5cdCAgICAgIGxhc3RYOiBOYU4sIGxhc3RZOiBOYU4sXG5cdCAgICAgIHRvdWNoSWRlbnRpZmllcjogbnVsbFxuXHQgICAgfSwgX3RoaXMuaGFuZGxlRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgLy8gTWFrZSBpdCBwb3NzaWJsZSB0byBhdHRhY2ggZXZlbnQgaGFuZGxlcnMgb24gdG9wIG9mIHRoaXMgb25lLlxuXHQgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihlKTtcblxuXHQgICAgICAvLyBPbmx5IGFjY2VwdCBsZWZ0LWNsaWNrcy5cblx0ICAgICAgaWYgKCFfdGhpcy5wcm9wcy5hbGxvd0FueUNsaWNrICYmIHR5cGVvZiBlLmJ1dHRvbiA9PT0gJ251bWJlcicgJiYgZS5idXR0b24gIT09IDApIHJldHVybiBmYWxzZTtcblxuXHQgICAgICAvLyBHZXQgbm9kZXMuIEJlIHN1cmUgdG8gZ3JhYiByZWxhdGl2ZSBkb2N1bWVudCAoY291bGQgYmUgaWZyYW1lZClcblx0ICAgICAgdmFyIHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHQgICAgICBpZiAoIXRoaXNOb2RlIHx8ICF0aGlzTm9kZS5vd25lckRvY3VtZW50IHx8ICF0aGlzTm9kZS5vd25lckRvY3VtZW50LmJvZHkpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxEcmFnZ2FibGVDb3JlPiBub3QgbW91bnRlZCBvbiBEcmFnU3RhcnQhJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzTm9kZS5vd25lckRvY3VtZW50O1xuXG5cdCAgICAgIC8vIFNob3J0IGNpcmN1aXQgaWYgaGFuZGxlIG9yIGNhbmNlbCBwcm9wIHdhcyBwcm92aWRlZCBhbmQgc2VsZWN0b3IgZG9lc24ndCBtYXRjaC5cblxuXHQgICAgICBpZiAoX3RoaXMucHJvcHMuZGlzYWJsZWQgfHwgIShlLnRhcmdldCBpbnN0YW5jZW9mIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuTm9kZSkgfHwgX3RoaXMucHJvcHMuaGFuZGxlICYmICFtYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8oZS50YXJnZXQsIF90aGlzLnByb3BzLmhhbmRsZSwgdGhpc05vZGUpIHx8IF90aGlzLnByb3BzLmNhbmNlbCAmJiBtYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8oZS50YXJnZXQsIF90aGlzLnByb3BzLmNhbmNlbCwgdGhpc05vZGUpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gU2V0IHRvdWNoIGlkZW50aWZpZXIgaW4gY29tcG9uZW50IHN0YXRlIGlmIHRoaXMgaXMgYSB0b3VjaCBldmVudC4gVGhpcyBhbGxvd3MgdXMgdG9cblx0ICAgICAgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBpbmRpdmlkdWFsIHRvdWNoZXMgb24gbXVsdGl0b3VjaCBzY3JlZW5zIGJ5IGlkZW50aWZ5aW5nIHdoaWNoXG5cdCAgICAgIC8vIHRvdWNocG9pbnQgd2FzIHNldCB0byB0aGlzIGVsZW1lbnQuXG5cdCAgICAgIHZhciB0b3VjaElkZW50aWZpZXIgPSBnZXRUb3VjaElkZW50aWZpZXIoZSk7XG5cdCAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2hJZGVudGlmaWVyOiB0b3VjaElkZW50aWZpZXIgfSk7XG5cblx0ICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGRyYWcgcG9pbnQgZnJvbSB0aGUgZXZlbnQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgb2Zmc2V0LlxuXHQgICAgICB2YXIgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgdG91Y2hJZGVudGlmaWVyLCBfdGhpcyk7XG5cdCAgICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSByZXR1cm47IC8vIG5vdCBwb3NzaWJsZSBidXQgc2F0aXNmaWVzIGZsb3dcblx0ICAgICAgdmFyIHggPSBwb3NpdGlvbi54LFxuXHQgICAgICAgICAgeSA9IHBvc2l0aW9uLnk7XG5cblx0ICAgICAgLy8gQ3JlYXRlIGFuIGV2ZW50IG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSBwYXJlbnRzIG5lZWQgdG8gbWFrZSBhIGRlY2lzaW9uIGhlcmUuXG5cblx0ICAgICAgdmFyIGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVEYXRhKF90aGlzLCB4LCB5KTtcblxuXHQgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIGNhbmNlbC5cblx0ICAgICAgbG9nKCdjYWxsaW5nJywgX3RoaXMucHJvcHMub25TdGFydCk7XG5cdCAgICAgIHZhciBzaG91bGRVcGRhdGUgPSBfdGhpcy5wcm9wcy5vblN0YXJ0KGUsIGNvcmVFdmVudCk7XG5cdCAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cblx0ICAgICAgLy8gQWRkIGEgc3R5bGUgdG8gdGhlIGJvZHkgdG8gZGlzYWJsZSB1c2VyLXNlbGVjdC4gVGhpcyBwcmV2ZW50cyB0ZXh0IGZyb21cblx0ICAgICAgLy8gYmVpbmcgc2VsZWN0ZWQgYWxsIG92ZXIgdGhlIHBhZ2UuXG5cdCAgICAgIGlmIChfdGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgYWRkVXNlclNlbGVjdFN0eWxlcyhvd25lckRvY3VtZW50KTtcblxuXHQgICAgICAvLyBJbml0aWF0ZSBkcmFnZ2luZy4gU2V0IHRoZSBjdXJyZW50IHggYW5kIHkgYXMgb2Zmc2V0c1xuXHQgICAgICAvLyBzbyB3ZSBrbm93IGhvdyBtdWNoIHdlJ3ZlIG1vdmVkIGR1cmluZyB0aGUgZHJhZy4gVGhpcyBhbGxvd3MgdXNcblx0ICAgICAgLy8gdG8gZHJhZyBlbGVtZW50cyBhcm91bmQgZXZlbiBpZiB0aGV5IGhhdmUgYmVlbiBtb3ZlZCwgd2l0aG91dCBpc3N1ZS5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGRyYWdnaW5nOiB0cnVlLFxuXG5cdCAgICAgICAgbGFzdFg6IHgsXG5cdCAgICAgICAgbGFzdFk6IHlcblx0ICAgICAgfSk7XG5cblx0ICAgICAgLy8gQWRkIGV2ZW50cyB0byB0aGUgZG9jdW1lbnQgZGlyZWN0bHkgc28gd2UgY2F0Y2ggd2hlbiB0aGUgdXNlcidzIG1vdXNlL3RvdWNoIG1vdmVzIG91dHNpZGUgb2Zcblx0ICAgICAgLy8gdGhpcyBlbGVtZW50LiBXZSB1c2UgZGlmZmVyZW50IGV2ZW50cyBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3Qgd2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHRoaXNcblx0ICAgICAgLy8gaXMgYSB0b3VjaC1jYXBhYmxlIGRldmljZS5cblx0ICAgICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIF90aGlzLmhhbmRsZURyYWcpO1xuXHQgICAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgX3RoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuXHQgICAgfSwgX3RoaXMuaGFuZGxlRHJhZyA9IGZ1bmN0aW9uIChlKSB7XG5cblx0ICAgICAgLy8gUHJldmVudCBzY3JvbGxpbmcgb24gbW9iaWxlIGRldmljZXMsIGxpa2UgaXBhZC9pcGhvbmUuXG5cdCAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSBlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0ICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGRyYWcgcG9pbnQgZnJvbSB0aGUgZXZlbnQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgb2Zmc2V0LlxuXHQgICAgICB2YXIgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgX3RoaXMuc3RhdGUudG91Y2hJZGVudGlmaWVyLCBfdGhpcyk7XG5cdCAgICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSByZXR1cm47XG5cdCAgICAgIHZhciB4ID0gcG9zaXRpb24ueCxcblx0ICAgICAgICAgIHkgPSBwb3NpdGlvbi55O1xuXG5cdCAgICAgIC8vIFNuYXAgdG8gZ3JpZCBpZiBwcm9wIGhhcyBiZWVuIHByb3ZpZGVkXG5cblx0ICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMucHJvcHMuZ3JpZCkpIHtcblx0ICAgICAgICB2YXIgX2RlbHRhWCA9IHggLSBfdGhpcy5zdGF0ZS5sYXN0WCxcblx0ICAgICAgICAgICAgX2RlbHRhWSA9IHkgLSBfdGhpcy5zdGF0ZS5sYXN0WTtcblxuXHQgICAgICAgIHZhciBfc25hcFRvR3JpZCA9IHNuYXBUb0dyaWQoX3RoaXMucHJvcHMuZ3JpZCwgX2RlbHRhWCwgX2RlbHRhWSk7XG5cblx0ICAgICAgICB2YXIgX3NuYXBUb0dyaWQyID0gc2xpY2VkVG9BcnJheShfc25hcFRvR3JpZCwgMik7XG5cblx0ICAgICAgICBfZGVsdGFYID0gX3NuYXBUb0dyaWQyWzBdO1xuXHQgICAgICAgIF9kZWx0YVkgPSBfc25hcFRvR3JpZDJbMV07XG5cblx0ICAgICAgICBpZiAoIV9kZWx0YVggJiYgIV9kZWx0YVkpIHJldHVybjsgLy8gc2tpcCB1c2VsZXNzIGRyYWdcblx0ICAgICAgICB4ID0gX3RoaXMuc3RhdGUubGFzdFggKyBfZGVsdGFYLCB5ID0gX3RoaXMuc3RhdGUubGFzdFkgKyBfZGVsdGFZO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVEYXRhKF90aGlzLCB4LCB5KTtcblxuXHQgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIHRyaWdnZXIgZW5kLlxuXHQgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gX3RoaXMucHJvcHMub25EcmFnKGUsIGNvcmVFdmVudCk7XG5cdCAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIC8vICRGbG93SWdub3JlXG5cdCAgICAgICAgICBfdGhpcy5oYW5kbGVEcmFnU3RvcChuZXcgTW91c2VFdmVudCgnbW91c2V1cCcpKTtcblx0ICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgIC8vIE9sZCBicm93c2Vyc1xuXHQgICAgICAgICAgdmFyIGV2ZW50ID0gKChkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKSAvKjogYW55Ki8pIC8qOiBNb3VzZVRvdWNoRXZlbnQqLyk7XG5cdCAgICAgICAgICAvLyBJIHNlZSB3aHkgdGhpcyBpbnNhbml0eSB3YXMgZGVwcmVjYXRlZFxuXHQgICAgICAgICAgLy8gJEZsb3dJZ25vcmVcblx0ICAgICAgICAgIGV2ZW50LmluaXRNb3VzZUV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdCAgICAgICAgICBfdGhpcy5oYW5kbGVEcmFnU3RvcChldmVudCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBsYXN0WDogeCxcblx0ICAgICAgICBsYXN0WTogeVxuXHQgICAgICB9KTtcblx0ICAgIH0sIF90aGlzLmhhbmRsZURyYWdTdG9wID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdCAgICAgIHZhciBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCBfdGhpcy5zdGF0ZS50b3VjaElkZW50aWZpZXIsIF90aGlzKTtcblx0ICAgICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcblx0ICAgICAgdmFyIHggPSBwb3NpdGlvbi54LFxuXHQgICAgICAgICAgeSA9IHBvc2l0aW9uLnk7XG5cblx0ICAgICAgdmFyIGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVEYXRhKF90aGlzLCB4LCB5KTtcblxuXHQgICAgICB2YXIgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG5cdCAgICAgIGlmICh0aGlzTm9kZSkge1xuXHQgICAgICAgIC8vIFJlbW92ZSB1c2VyLXNlbGVjdCBoYWNrXG5cdCAgICAgICAgaWYgKF90aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKHRoaXNOb2RlLm93bmVyRG9jdW1lbnQpO1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gUmVzZXQgdGhlIGVsLlxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuXHQgICAgICAgIGxhc3RYOiBOYU4sXG5cdCAgICAgICAgbGFzdFk6IE5hTlxuXHQgICAgICB9KTtcblxuXHQgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXJcblx0ICAgICAgX3RoaXMucHJvcHMub25TdG9wKGUsIGNvcmVFdmVudCk7XG5cblx0ICAgICAgaWYgKHRoaXNOb2RlKSB7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQodGhpc05vZGUub3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIF90aGlzLmhhbmRsZURyYWcpO1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KHRoaXNOb2RlLm93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5zdG9wLCBfdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG5cdCAgICAgIH1cblx0ICAgIH0sIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlOyAvLyBvbiB0b3VjaHNjcmVlbiBsYXB0b3BzIHdlIGNvdWxkIHN3aXRjaCBiYWNrIHRvIG1vdXNlXG5cblx0ICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdGFydChlKTtcblx0ICAgIH0sIF90aGlzLm9uTW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcblxuXHQgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRHJhZ1N0b3AoZSk7XG5cdCAgICB9LCBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAvLyBXZSdyZSBvbiBhIHRvdWNoIGRldmljZSBub3csIHNvIGNoYW5nZSB0aGUgZXZlbnQgaGFuZGxlcnNcblx0ICAgICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG5cdCAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSk7XG5cdCAgICB9LCBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG5cdCAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuXHQgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRHJhZ1N0b3AoZSk7XG5cdCAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuXHQgIH1cblxuXHQgIGNyZWF0ZUNsYXNzKERyYWdnYWJsZUNvcmUsIFt7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdCAgICAgIC8vIFJlbW92ZSBhbnkgbGVmdG92ZXIgZXZlbnQgaGFuZGxlcnMuIFJlbW92ZSBib3RoIHRvdWNoIGFuZCBtb3VzZSBoYW5kbGVycyBpbiBjYXNlXG5cdCAgICAgIC8vIHNvbWUgYnJvd3NlciBxdWlyayBjYXVzZWQgYSB0b3VjaCBldmVudCB0byBmaXJlIGR1cmluZyBhIG1vdXNlIG1vdmUsIG9yIHZpY2UgdmVyc2EuXG5cdCAgICAgIHZhciB0aGlzTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHQgICAgICBpZiAodGhpc05vZGUpIHtcblx0ICAgICAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXNOb2RlLm93bmVyRG9jdW1lbnQ7XG5cblx0ICAgICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IubW91c2UubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcblx0ICAgICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IudG91Y2gubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcblx0ICAgICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IubW91c2Uuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuXHQgICAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIFNhbWUgYXMgb25Nb3VzZURvd24gKHN0YXJ0IGRyYWcpLCBidXQgbm93IGNvbnNpZGVyIHRoaXMgYSB0b3VjaCBkZXZpY2UuXG5cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG5cdCAgICAgIC8vIFRoaXMgbWFrZXMgaXQgZmxleGlibGUgdG8gdXNlIHdoYXRldmVyIGVsZW1lbnQgaXMgd2FudGVkIChkaXYsIHVsLCBldGMpXG5cdCAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuXHQgICAgICAgIHN0eWxlOiBzdHlsZUhhY2tzKHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuXG5cdCAgICAgICAgLy8gTm90ZTogbW91c2VNb3ZlIGhhbmRsZXIgaXMgYXR0YWNoZWQgdG8gZG9jdW1lbnQgc28gaXQgd2lsbCBzdGlsbCBmdW5jdGlvblxuXHQgICAgICAgIC8vIHdoZW4gdGhlIHVzZXIgZHJhZ3MgcXVpY2tseSBhbmQgbGVhdmVzIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG5cdCAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG5cdCAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydCxcblx0ICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuXHQgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ub3VjaEVuZFxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdCAgcmV0dXJuIERyYWdnYWJsZUNvcmU7XG5cdH0oUmVhY3QuQ29tcG9uZW50KTtcblxuXHREcmFnZ2FibGVDb3JlLmRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZUNvcmUnO1xuXHREcmFnZ2FibGVDb3JlLnByb3BUeXBlcyA9IHtcblx0ICAvKipcblx0ICAgKiBgYWxsb3dBbnlDbGlja2AgYWxsb3dzIGRyYWdnaW5nIHVzaW5nIGFueSBtb3VzZSBidXR0b24uXG5cdCAgICogQnkgZGVmYXVsdCwgd2Ugb25seSBhY2NlcHQgdGhlIGxlZnQgYnV0dG9uLlxuXHQgICAqXG5cdCAgICogRGVmYXVsdHMgdG8gYGZhbHNlYC5cblx0ICAgKi9cblx0ICBhbGxvd0FueUNsaWNrOiBwcm9wVHlwZXMuYm9vbCxcblxuXHQgIC8qKlxuXHQgICAqIGBkaXNhYmxlZGAsIGlmIHRydWUsIHN0b3BzIHRoZSA8RHJhZ2dhYmxlPiBmcm9tIGRyYWdnaW5nLiBBbGwgaGFuZGxlcnMsXG5cdCAgICogd2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBvbk1vdXNlRG93bmAsIHdpbGwgbm90IGZpcmUuXG5cdCAgICovXG5cdCAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXG5cdCAgLyoqXG5cdCAgICogQnkgZGVmYXVsdCwgd2UgYWRkICd1c2VyLXNlbGVjdDpub25lJyBhdHRyaWJ1dGVzIHRvIHRoZSBkb2N1bWVudCBib2R5XG5cdCAgICogdG8gcHJldmVudCB1Z2x5IHRleHQgc2VsZWN0aW9uIGR1cmluZyBkcmFnLiBJZiB0aGlzIGlzIGNhdXNpbmcgcHJvYmxlbXNcblx0ICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXG5cdCAgICovXG5cdCAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHByb3BUeXBlcy5ib29sLFxuXG5cdCAgLyoqXG5cdCAgICogYG9mZnNldFBhcmVudGAsIGlmIHNldCwgdXNlcyB0aGUgcGFzc2VkIERPTSBub2RlIHRvIGNvbXB1dGUgZHJhZyBvZmZzZXRzXG5cdCAgICogaW5zdGVhZCBvZiB1c2luZyB0aGUgcGFyZW50IG5vZGUuXG5cdCAgICovXG5cdCAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbiBvZmZzZXRQYXJlbnQocHJvcHMgLyo6IERyYWdnYWJsZUNvcmVQcm9wcyovLCBwcm9wTmFtZSAvKjogJEtleXM8RHJhZ2dhYmxlQ29yZVByb3BzPiovKSB7XG5cdCAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmIHByb3BzW3Byb3BOYW1lXS5ub2RlVHlwZSAhPT0gMSkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RyYWdnYWJsZVxcJ3Mgb2Zmc2V0UGFyZW50IG11c3QgYmUgYSBET00gTm9kZS4nKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLyoqXG5cdCAgICogYGdyaWRgIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IGRyYWdnaW5nIHNob3VsZCBzbmFwIHRvLlxuXHQgICAqL1xuXHQgIGdyaWQ6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5udW1iZXIpLFxuXG5cdCAgLyoqXG5cdCAgICogYHNjYWxlYCBzcGVjaWZpZXMgdGhlIHNjYWxlIG9mIHRoZSBhcmVhIHlvdSBhcmUgZHJhZ2dpbmcgaW5zaWRlIG9mLiBJdCBhbGxvd3Ncblx0ICAgKiB0aGUgZHJhZyBkZWx0YXMgdG8gc2NhbGUgY29ycmVjdGx5IHdpdGggaG93IGZhciB6b29tZWQgaW4vb3V0IHlvdSBhcmUuXG5cdCAgICovXG5cdCAgc2NhbGU6IHByb3BUeXBlcy5udW1iZXIsXG5cblx0ICAvKipcblx0ICAgKiBgaGFuZGxlYCBzcGVjaWZpZXMgYSBzZWxlY3RvciB0byBiZSB1c2VkIGFzIHRoZSBoYW5kbGUgdGhhdCBpbml0aWF0ZXMgZHJhZy5cblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICByZXR1cm4gKFxuXHQgICAqICAgICAgICAgICAgPERyYWdnYWJsZSBoYW5kbGU9XCIuaGFuZGxlXCI+XG5cdCAgICogICAgICAgICAgICAgIDxkaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZVwiPkNsaWNrIG1lIHRvIGRyYWc8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBpcyBzb21lIG90aGVyIGNvbnRlbnQ8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuXHQgICAqICAgICAgICAgKTtcblx0ICAgKiAgICAgICB9XG5cdCAgICogICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBoYW5kbGU6IHByb3BUeXBlcy5zdHJpbmcsXG5cblx0ICAvKipcblx0ICAgKiBgY2FuY2VsYCBzcGVjaWZpZXMgYSBzZWxlY3RvciB0byBiZSB1c2VkIHRvIHByZXZlbnQgZHJhZyBpbml0aWFsaXphdGlvbi5cblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICAgIHJldHVybihcblx0ICAgKiAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgY2FuY2VsPVwiLmNhbmNlbFwiPlxuXHQgICAqICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFwiPllvdSBjYW4ndCBkcmFnIGZyb20gaGVyZTwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdj5EcmFnZ2luZyBoZXJlIHdvcmtzIGZpbmU8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuXHQgICAqICAgICAgICAgICApO1xuXHQgICAqICAgICAgIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqIGBgYFxuXHQgICAqL1xuXHQgIGNhbmNlbDogcHJvcFR5cGVzLnN0cmluZyxcblxuXHQgIC8qKlxuXHQgICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIHN0YXJ0cy5cblx0ICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG5cdCAgICovXG5cdCAgb25TdGFydDogcHJvcFR5cGVzLmZ1bmMsXG5cblx0ICAvKipcblx0ICAgKiBDYWxsZWQgd2hpbGUgZHJhZ2dpbmcuXG5cdCAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxuXHQgICAqL1xuXHQgIG9uRHJhZzogcHJvcFR5cGVzLmZ1bmMsXG5cblx0ICAvKipcblx0ICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdG9wcy5cblx0ICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIHRoZSBkcmFnIHdpbGwgcmVtYWluIGFjdGl2ZS5cblx0ICAgKi9cblx0ICBvblN0b3A6IHByb3BUeXBlcy5mdW5jLFxuXG5cdCAgLyoqXG5cdCAgICogQSB3b3JrYXJvdW5kIG9wdGlvbiB3aGljaCBjYW4gYmUgcGFzc2VkIGlmIG9uTW91c2VEb3duIG5lZWRzIHRvIGJlIGFjY2Vzc2VkLFxuXHQgICAqIHNpbmNlIGl0J2xsIGFsd2F5cyBiZSBibG9ja2VkIChhcyB0aGVyZSBpcyBpbnRlcm5hbCB1c2Ugb2Ygb25Nb3VzZURvd24pXG5cdCAgICovXG5cdCAgb25Nb3VzZURvd246IHByb3BUeXBlcy5mdW5jLFxuXG5cdCAgLyoqXG5cdCAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxuXHQgICAqL1xuXHQgIGNsYXNzTmFtZTogZG9udFNldE1lLFxuXHQgIHN0eWxlOiBkb250U2V0TWUsXG5cdCAgdHJhbnNmb3JtOiBkb250U2V0TWVcblx0fTtcblx0RHJhZ2dhYmxlQ29yZS5kZWZhdWx0UHJvcHMgPSB7XG5cdCAgYWxsb3dBbnlDbGljazogZmFsc2UsIC8vIGJ5IGRlZmF1bHQgb25seSBhY2NlcHQgbGVmdCBjbGlja1xuXHQgIGNhbmNlbDogbnVsbCxcblx0ICBkaXNhYmxlZDogZmFsc2UsXG5cdCAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHRydWUsXG5cdCAgb2Zmc2V0UGFyZW50OiBudWxsLFxuXHQgIGhhbmRsZTogbnVsbCxcblx0ICBncmlkOiBudWxsLFxuXHQgIHRyYW5zZm9ybTogbnVsbCxcblx0ICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KCkge30sXG5cdCAgb25EcmFnOiBmdW5jdGlvbiBvbkRyYWcoKSB7fSxcblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcCgpIHt9LFxuXHQgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bigpIHt9XG5cdH07XG5cblx0Lyo6OiBpbXBvcnQgdHlwZSB7RHJhZ2dhYmxlRXZlbnRIYW5kbGVyfSBmcm9tICcuL3V0aWxzL3R5cGVzJzsqL1xuXHQvKjo6IGltcG9ydCB0eXBlIHtFbGVtZW50IGFzIFJlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnOyovXG5cdC8qOjogdHlwZSBEcmFnZ2FibGVTdGF0ZSA9IHtcblx0ICBkcmFnZ2luZzogYm9vbGVhbixcblx0ICBkcmFnZ2VkOiBib29sZWFuLFxuXHQgIHg6IG51bWJlciwgeTogbnVtYmVyLFxuXHQgIHNsYWNrWDogbnVtYmVyLCBzbGFja1k6IG51bWJlcixcblx0ICBpc0VsZW1lbnRTVkc6IGJvb2xlYW5cblx0fTsqL1xuXG5cblx0Ly9cblx0Ly8gRGVmaW5lIDxEcmFnZ2FibGU+XG5cdC8vXG5cblx0Lyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVQcm9wcyA9IHtcblx0ICAuLi4kRXhhY3Q8RHJhZ2dhYmxlQ29yZVByb3BzPixcblx0ICBheGlzOiAnYm90aCcgfCAneCcgfCAneScgfCAnbm9uZScsXG5cdCAgYm91bmRzOiBEcmFnZ2FibGVCb3VuZHMgfCBzdHJpbmcgfCBmYWxzZSxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lOiBzdHJpbmcsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBzdHJpbmcsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6IHN0cmluZyxcblx0ICBkZWZhdWx0UG9zaXRpb246IENvbnRyb2xQb3NpdGlvbixcblx0ICBwb3NpdGlvbk9mZnNldDogUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24sXG5cdCAgcG9zaXRpb246IENvbnRyb2xQb3NpdGlvbixcblx0ICBzY2FsZTogbnVtYmVyXG5cdH07Ki9cblxuXHR2YXIgRHJhZ2dhYmxlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0ICBpbmhlcml0cyhEcmFnZ2FibGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdCAgZnVuY3Rpb24gRHJhZ2dhYmxlKHByb3BzIC8qOiBEcmFnZ2FibGVQcm9wcyovKSB7XG5cdCAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnZ2FibGUpO1xuXG5cdCAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcmFnZ2FibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnZ2FibGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0ICAgIF90aGlzLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGUsIGNvcmVEYXRhKSB7XG5cblx0ICAgICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuXHQgICAgICB2YXIgc2hvdWxkU3RhcnQgPSBfdGhpcy5wcm9wcy5vblN0YXJ0KGUsIGNyZWF0ZURyYWdnYWJsZURhdGEoX3RoaXMsIGNvcmVEYXRhKSk7XG5cdCAgICAgIC8vIEtpbGxzIHN0YXJ0IGV2ZW50IG9uIGNvcmUgYXMgd2VsbCwgc28gbW92ZSBoYW5kbGVycyBhcmUgbmV2ZXIgYm91bmQuXG5cdCAgICAgIGlmIChzaG91bGRTdGFydCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGRyYWdnaW5nOiB0cnVlLCBkcmFnZ2VkOiB0cnVlIH0pO1xuXHQgICAgfTtcblxuXHQgICAgX3RoaXMub25EcmFnID0gZnVuY3Rpb24gKGUsIGNvcmVEYXRhKSB7XG5cdCAgICAgIGlmICghX3RoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuXHQgICAgICB2YXIgdWlEYXRhID0gY3JlYXRlRHJhZ2dhYmxlRGF0YShfdGhpcywgY29yZURhdGEpO1xuXG5cdCAgICAgIHZhciBuZXdTdGF0ZSAvKjogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiovID0ge1xuXHQgICAgICAgIHg6IHVpRGF0YS54LFxuXHQgICAgICAgIHk6IHVpRGF0YS55XG5cdCAgICAgIH07XG5cblx0ICAgICAgLy8gS2VlcCB3aXRoaW4gYm91bmRzLlxuXHQgICAgICBpZiAoX3RoaXMucHJvcHMuYm91bmRzKSB7XG5cdCAgICAgICAgLy8gU2F2ZSBvcmlnaW5hbCB4IGFuZCB5LlxuXHQgICAgICAgIHZhciBfeCA9IG5ld1N0YXRlLngsXG5cdCAgICAgICAgICAgIF95ID0gbmV3U3RhdGUueTtcblxuXHQgICAgICAgIC8vIEFkZCBzbGFjayB0byB0aGUgdmFsdWVzIHVzZWQgdG8gY2FsY3VsYXRlIGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgaWZcblx0ICAgICAgICAvLyB3ZSBzdGFydCByZW1vdmluZyBzbGFjaywgdGhlIGVsZW1lbnQgd29uJ3QgcmVhY3QgdG8gaXQgcmlnaHQgYXdheSB1bnRpbCBpdCdzIGJlZW5cblx0ICAgICAgICAvLyBjb21wbGV0ZWx5IHJlbW92ZWQuXG5cblx0ICAgICAgICBuZXdTdGF0ZS54ICs9IF90aGlzLnN0YXRlLnNsYWNrWDtcblx0ICAgICAgICBuZXdTdGF0ZS55ICs9IF90aGlzLnN0YXRlLnNsYWNrWTtcblxuXHQgICAgICAgIC8vIEdldCBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGNlaWwvZmxvb3IgdGhlIHggYW5kIHkgd2l0aGluIHRoZSBib3VuZGFyaWVzLlxuXG5cdCAgICAgICAgdmFyIF9nZXRCb3VuZFBvc2l0aW9uID0gZ2V0Qm91bmRQb3NpdGlvbihfdGhpcywgbmV3U3RhdGUueCwgbmV3U3RhdGUueSksXG5cdCAgICAgICAgICAgIF9nZXRCb3VuZFBvc2l0aW9uMiA9IHNsaWNlZFRvQXJyYXkoX2dldEJvdW5kUG9zaXRpb24sIDIpLFxuXHQgICAgICAgICAgICBuZXdTdGF0ZVggPSBfZ2V0Qm91bmRQb3NpdGlvbjJbMF0sXG5cdCAgICAgICAgICAgIG5ld1N0YXRlWSA9IF9nZXRCb3VuZFBvc2l0aW9uMlsxXTtcblxuXHQgICAgICAgIG5ld1N0YXRlLnggPSBuZXdTdGF0ZVg7XG5cdCAgICAgICAgbmV3U3RhdGUueSA9IG5ld1N0YXRlWTtcblxuXHQgICAgICAgIC8vIFJlY2FsY3VsYXRlIHNsYWNrIGJ5IG5vdGluZyBob3cgbXVjaCB3YXMgc2hhdmVkIGJ5IHRoZSBib3VuZFBvc2l0aW9uIGhhbmRsZXIuXG5cdCAgICAgICAgbmV3U3RhdGUuc2xhY2tYID0gX3RoaXMuc3RhdGUuc2xhY2tYICsgKF94IC0gbmV3U3RhdGUueCk7XG5cdCAgICAgICAgbmV3U3RhdGUuc2xhY2tZID0gX3RoaXMuc3RhdGUuc2xhY2tZICsgKF95IC0gbmV3U3RhdGUueSk7XG5cblx0ICAgICAgICAvLyBVcGRhdGUgdGhlIGV2ZW50IHdlIGZpcmUgdG8gcmVmbGVjdCB3aGF0IHJlYWxseSBoYXBwZW5lZCBhZnRlciBib3VuZHMgdG9vayBlZmZlY3QuXG5cdCAgICAgICAgdWlEYXRhLnggPSBuZXdTdGF0ZS54O1xuXHQgICAgICAgIHVpRGF0YS55ID0gbmV3U3RhdGUueTtcblx0ICAgICAgICB1aURhdGEuZGVsdGFYID0gbmV3U3RhdGUueCAtIF90aGlzLnN0YXRlLng7XG5cdCAgICAgICAgdWlEYXRhLmRlbHRhWSA9IG5ld1N0YXRlLnkgLSBfdGhpcy5zdGF0ZS55O1xuXHQgICAgICB9XG5cblx0ICAgICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuXHQgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gX3RoaXMucHJvcHMub25EcmFnKGUsIHVpRGF0YSk7XG5cdCAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHQgICAgfTtcblxuXHQgICAgX3RoaXMub25EcmFnU3RvcCA9IGZ1bmN0aW9uIChlLCBjb3JlRGF0YSkge1xuXHQgICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuXHQgICAgICB2YXIgc2hvdWxkU3RvcCA9IF90aGlzLnByb3BzLm9uU3RvcChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKF90aGlzLCBjb3JlRGF0YSkpO1xuXHQgICAgICBpZiAoc2hvdWxkU3RvcCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuXHQgICAgICB2YXIgbmV3U3RhdGUgLyo6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4qLyA9IHtcblx0ICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG5cdCAgICAgICAgc2xhY2tYOiAwLFxuXHQgICAgICAgIHNsYWNrWTogMFxuXHQgICAgICB9O1xuXG5cdCAgICAgIC8vIElmIHRoaXMgaXMgYSBjb250cm9sbGVkIGNvbXBvbmVudCwgdGhlIHJlc3VsdCBvZiB0aGlzIG9wZXJhdGlvbiB3aWxsIGJlIHRvXG5cdCAgICAgIC8vIHJldmVydCBiYWNrIHRvIHRoZSBvbGQgcG9zaXRpb24uIFdlIGV4cGVjdCBhIGhhbmRsZXIgb24gYG9uRHJhZ1N0b3BgLCBhdCB0aGUgbGVhc3QuXG5cdCAgICAgIHZhciBjb250cm9sbGVkID0gQm9vbGVhbihfdGhpcy5wcm9wcy5wb3NpdGlvbik7XG5cdCAgICAgIGlmIChjb250cm9sbGVkKSB7XG5cdCAgICAgICAgdmFyIF90aGlzJHByb3BzJHBvc2l0aW9uID0gX3RoaXMucHJvcHMucG9zaXRpb24sXG5cdCAgICAgICAgICAgIF94MiA9IF90aGlzJHByb3BzJHBvc2l0aW9uLngsXG5cdCAgICAgICAgICAgIF95MiA9IF90aGlzJHByb3BzJHBvc2l0aW9uLnk7XG5cblx0ICAgICAgICBuZXdTdGF0ZS54ID0gX3gyO1xuXHQgICAgICAgIG5ld1N0YXRlLnkgPSBfeTI7XG5cdCAgICAgIH1cblxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdCAgICB9O1xuXG5cdCAgICBfdGhpcy5zdGF0ZSA9IHtcblx0ICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgYXJlIGN1cnJlbnRseSBkcmFnZ2luZy5cblx0ICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuXG5cdCAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGhhdmUgYmVlbiBkcmFnZ2VkIGJlZm9yZS5cblx0ICAgICAgZHJhZ2dlZDogZmFsc2UsXG5cblx0ICAgICAgLy8gQ3VycmVudCB0cmFuc2Zvcm0geCBhbmQgeS5cblx0ICAgICAgeDogcHJvcHMucG9zaXRpb24gPyBwcm9wcy5wb3NpdGlvbi54IDogcHJvcHMuZGVmYXVsdFBvc2l0aW9uLngsXG5cdCAgICAgIHk6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueSA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi55LFxuXG5cdCAgICAgIC8vIFVzZWQgZm9yIGNvbXBlbnNhdGluZyBmb3Igb3V0LW9mLWJvdW5kcyBkcmFnc1xuXHQgICAgICBzbGFja1g6IDAsIHNsYWNrWTogMCxcblxuXHQgICAgICAvLyBDYW4gb25seSBkZXRlcm1pbmUgaWYgU1ZHIGFmdGVyIG1vdW50aW5nXG5cdCAgICAgIGlzRWxlbWVudFNWRzogZmFsc2Vcblx0ICAgIH07XG5cblx0ICAgIGlmIChwcm9wcy5wb3NpdGlvbiAmJiAhKHByb3BzLm9uRHJhZyB8fCBwcm9wcy5vblN0b3ApKSB7XG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdCAgICAgIGNvbnNvbGUud2FybignQSBgcG9zaXRpb25gIHdhcyBhcHBsaWVkIHRvIHRoaXMgPERyYWdnYWJsZT4sIHdpdGhvdXQgZHJhZyBoYW5kbGVycy4gVGhpcyB3aWxsIG1ha2UgdGhpcyAnICsgJ2NvbXBvbmVudCBlZmZlY3RpdmVseSB1bmRyYWdnYWJsZS4gUGxlYXNlIGF0dGFjaCBgb25EcmFnYCBvciBgb25TdG9wYCBoYW5kbGVycyBzbyB5b3UgY2FuIGFkanVzdCB0aGUgJyArICdgcG9zaXRpb25gIG9mIHRoaXMgZWxlbWVudC4nKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBfdGhpcztcblx0ICB9XG5cblx0ICBjcmVhdGVDbGFzcyhEcmFnZ2FibGUsIFt7XG5cdCAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdCAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaXMgYW4gaW5zdGFuY2VvZiBTVkdFbGVtZW50XG5cdCAgICAgIGlmICh0eXBlb2Ygd2luZG93LlNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpIHtcblx0ICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNFbGVtZW50U1ZHOiB0cnVlIH0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMgLyo6IE9iamVjdCovKSB7XG5cdCAgICAgIC8vIFNldCB4L3kgaWYgcG9zaXRpb24gaGFzIGNoYW5nZWRcblx0ICAgICAgaWYgKG5leHRQcm9wcy5wb3NpdGlvbiAmJiAoIXRoaXMucHJvcHMucG9zaXRpb24gfHwgbmV4dFByb3BzLnBvc2l0aW9uLnggIT09IHRoaXMucHJvcHMucG9zaXRpb24ueCB8fCBuZXh0UHJvcHMucG9zaXRpb24ueSAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbi55KSkge1xuXHQgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB4OiBuZXh0UHJvcHMucG9zaXRpb24ueCwgeTogbmV4dFByb3BzLnBvc2l0aW9uLnkgfSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnZ2luZzogZmFsc2UgfSk7IC8vIHByZXZlbnRzIGludmFyaWFudCBpZiB1bm1vdW50ZWQgd2hpbGUgZHJhZ2dpbmdcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIC8qOiBSZWFjdEVsZW1lbnQ8YW55PiovIHtcblx0ICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG5cdCAgICAgIHZhciBzdHlsZSA9IHt9LFxuXHQgICAgICAgICAgc3ZnVHJhbnNmb3JtID0gbnVsbDtcblxuXHQgICAgICAvLyBJZiB0aGlzIGlzIGNvbnRyb2xsZWQsIHdlIGRvbid0IHdhbnQgdG8gbW92ZSBpdCAtIHVubGVzcyBpdCdzIGRyYWdnaW5nLlxuXHQgICAgICB2YXIgY29udHJvbGxlZCA9IEJvb2xlYW4odGhpcy5wcm9wcy5wb3NpdGlvbik7XG5cdCAgICAgIHZhciBkcmFnZ2FibGUgPSAhY29udHJvbGxlZCB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nO1xuXG5cdCAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb24gfHwgdGhpcy5wcm9wcy5kZWZhdWx0UG9zaXRpb247XG5cdCAgICAgIHZhciB0cmFuc2Zvcm1PcHRzID0ge1xuXHQgICAgICAgIC8vIFNldCBsZWZ0IGlmIGhvcml6b250YWwgZHJhZyBpcyBlbmFibGVkXG5cdCAgICAgICAgeDogY2FuRHJhZ1godGhpcykgJiYgZHJhZ2dhYmxlID8gdGhpcy5zdGF0ZS54IDogcG9zaXRpb24ueCxcblxuXHQgICAgICAgIC8vIFNldCB0b3AgaWYgdmVydGljYWwgZHJhZyBpcyBlbmFibGVkXG5cdCAgICAgICAgeTogY2FuRHJhZ1kodGhpcykgJiYgZHJhZ2dhYmxlID8gdGhpcy5zdGF0ZS55IDogcG9zaXRpb24ueVxuXHQgICAgICB9O1xuXG5cdCAgICAgIC8vIElmIHRoaXMgZWxlbWVudCB3YXMgU1ZHLCB3ZSB1c2UgdGhlIGB0cmFuc2Zvcm1gIGF0dHJpYnV0ZS5cblx0ICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFbGVtZW50U1ZHKSB7XG5cdCAgICAgICAgc3ZnVHJhbnNmb3JtID0gY3JlYXRlU1ZHVHJhbnNmb3JtKHRyYW5zZm9ybU9wdHMsIHRoaXMucHJvcHMucG9zaXRpb25PZmZzZXQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8vIEFkZCBhIENTUyB0cmFuc2Zvcm0gdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmQuIFRoaXMgYWxsb3dzIHVzIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kXG5cdCAgICAgICAgLy8gd2l0aG91dCB3b3JyeWluZyBhYm91dCB3aGV0aGVyIG9yIG5vdCBpdCBpcyByZWxhdGl2ZWx5IG9yIGFic29sdXRlbHkgcG9zaXRpb25lZC5cblx0ICAgICAgICAvLyBJZiB0aGUgaXRlbSB5b3UgYXJlIGRyYWdnaW5nIGFscmVhZHkgaGFzIGEgdHJhbnNmb3JtIHNldCwgd3JhcCBpdCBpbiBhIDxzcGFuPiBzbyA8RHJhZ2dhYmxlPlxuXHQgICAgICAgIC8vIGhhcyBhIGNsZWFuIHNsYXRlLlxuXHQgICAgICAgIHN0eWxlID0gY3JlYXRlQ1NTVHJhbnNmb3JtKHRyYW5zZm9ybU9wdHMsIHRoaXMucHJvcHMucG9zaXRpb25PZmZzZXQpO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdCAgICAgICAgICBkZWZhdWx0Q2xhc3NOYW1lID0gX3Byb3BzLmRlZmF1bHRDbGFzc05hbWUsXG5cdCAgICAgICAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmcgPSBfcHJvcHMuZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nLFxuXHQgICAgICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQgPSBfcHJvcHMuZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ7XG5cblxuXHQgICAgICB2YXIgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG5cdCAgICAgIC8vIE1hcmsgd2l0aCBjbGFzcyB3aGlsZSBkcmFnZ2luZ1xuXHQgICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJycsIGRlZmF1bHRDbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nLCB0aGlzLnN0YXRlLmRyYWdnaW5nKSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkLCB0aGlzLnN0YXRlLmRyYWdnZWQpLCBfY2xhc3NOYW1lcykpO1xuXG5cdCAgICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxuXHQgICAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxuXHQgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICBEcmFnZ2FibGVDb3JlLFxuXHQgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IG9uU3RhcnQ6IHRoaXMub25EcmFnU3RhcnQsIG9uRHJhZzogdGhpcy5vbkRyYWcsIG9uU3RvcDogdGhpcy5vbkRyYWdTdG9wIH0pLFxuXHQgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuXHQgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdCAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNoaWxkcmVuLnByb3BzLnN0eWxlLCBzdHlsZSksXG5cdCAgICAgICAgICB0cmFuc2Zvcm06IHN2Z1RyYW5zZm9ybVxuXHQgICAgICAgIH0pXG5cdCAgICAgICk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHQgIHJldHVybiBEcmFnZ2FibGU7XG5cdH0oUmVhY3QuQ29tcG9uZW50KTtcblxuXHREcmFnZ2FibGUuZGlzcGxheU5hbWUgPSAnRHJhZ2dhYmxlJztcblx0RHJhZ2dhYmxlLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBEcmFnZ2FibGVDb3JlLnByb3BUeXBlcywge1xuXG5cdCAgLyoqXG5cdCAgICogYGF4aXNgIGRldGVybWluZXMgd2hpY2ggYXhpcyB0aGUgZHJhZ2dhYmxlIGNhbiBtb3ZlLlxuXHQgICAqXG5cdCAgICogIE5vdGUgdGhhdCBhbGwgY2FsbGJhY2tzIHdpbGwgc3RpbGwgcmV0dXJuIGRhdGEgYXMgbm9ybWFsLiBUaGlzIG9ubHlcblx0ICAgKiAgY29udHJvbHMgZmx1c2hpbmcgdG8gdGhlIERPTS5cblx0ICAgKlxuXHQgICAqICdib3RoJyBhbGxvd3MgbW92ZW1lbnQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LlxuXHQgICAqICd4JyBsaW1pdHMgbW92ZW1lbnQgdG8gaG9yaXpvbnRhbCBheGlzLlxuXHQgICAqICd5JyBsaW1pdHMgbW92ZW1lbnQgdG8gdmVydGljYWwgYXhpcy5cblx0ICAgKiAnbm9uZScgbGltaXRzIGFsbCBtb3ZlbWVudC5cblx0ICAgKlxuXHQgICAqIERlZmF1bHRzIHRvICdib3RoJy5cblx0ICAgKi9cblx0ICBheGlzOiBwcm9wVHlwZXMub25lT2YoWydib3RoJywgJ3gnLCAneScsICdub25lJ10pLFxuXG5cdCAgLyoqXG5cdCAgICogYGJvdW5kc2AgZGV0ZXJtaW5lcyB0aGUgcmFuZ2Ugb2YgbW92ZW1lbnQgYXZhaWxhYmxlIHRvIHRoZSBlbGVtZW50LlxuXHQgICAqIEF2YWlsYWJsZSB2YWx1ZXMgYXJlOlxuXHQgICAqXG5cdCAgICogJ3BhcmVudCcgcmVzdHJpY3RzIG1vdmVtZW50IHdpdGhpbiB0aGUgRHJhZ2dhYmxlJ3MgcGFyZW50IG5vZGUuXG5cdCAgICpcblx0ICAgKiBBbHRlcm5hdGl2ZWx5LCBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcywgYWxsIG9mIHdoaWNoIGFyZSBvcHRpb25hbDpcblx0ICAgKlxuXHQgICAqIHtsZWZ0OiBMRUZUX0JPVU5ELCByaWdodDogUklHSFRfQk9VTkQsIGJvdHRvbTogQk9UVE9NX0JPVU5ELCB0b3A6IFRPUF9CT1VORH1cblx0ICAgKlxuXHQgICAqIEFsbCB2YWx1ZXMgYXJlIGluIHB4LlxuXHQgICAqXG5cdCAgICogRXhhbXBsZTpcblx0ICAgKlxuXHQgICAqIGBgYGpzeFxuXHQgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0ICAgKiAgICAgICAgIHJldHVybiAoXG5cdCAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGJvdW5kcz17e3JpZ2h0OiAzMDAsIGJvdHRvbTogMzAwfX0+XG5cdCAgICogICAgICAgICAgICAgIDxkaXY+Q29udGVudDwvZGl2PlxuXHQgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICk7XG5cdCAgICogICAgICAgfVxuXHQgICAqICAgfSk7XG5cdCAgICogYGBgXG5cdCAgICovXG5cdCAgYm91bmRzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc2hhcGUoe1xuXHQgICAgbGVmdDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHJpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxuXHQgICAgdG9wOiBwcm9wVHlwZXMubnVtYmVyLFxuXHQgICAgYm90dG9tOiBwcm9wVHlwZXMubnVtYmVyXG5cdCAgfSksIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vbmVPZihbZmFsc2VdKV0pLFxuXG5cdCAgZGVmYXVsdENsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6IHByb3BUeXBlcy5zdHJpbmcsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cblx0ICAvKipcblx0ICAgKiBgZGVmYXVsdFBvc2l0aW9uYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCB0aGUgZHJhZ2dlZCBpdGVtIHNob3VsZCBzdGFydCBhdFxuXHQgICAqXG5cdCAgICogRXhhbXBsZTpcblx0ICAgKlxuXHQgICAqIGBgYGpzeFxuXHQgICAqICAgICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0ICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcblx0ICAgKiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgZGVmYXVsdFBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XG5cdCAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuXHQgICAqICAgICAgICAgICAgICApO1xuXHQgICAqICAgICAgICAgIH1cblx0ICAgKiAgICAgIH0pO1xuXHQgICAqIGBgYFxuXHQgICAqL1xuXHQgIGRlZmF1bHRQb3NpdGlvbjogcHJvcFR5cGVzLnNoYXBlKHtcblx0ICAgIHg6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICB5OiBwcm9wVHlwZXMubnVtYmVyXG5cdCAgfSksXG5cdCAgcG9zaXRpb25PZmZzZXQ6IHByb3BUeXBlcy5zaGFwZSh7XG5cdCAgICB4OiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMubnVtYmVyLCBwcm9wVHlwZXMuc3RyaW5nXSksXG5cdCAgICB5OiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMubnVtYmVyLCBwcm9wVHlwZXMuc3RyaW5nXSlcblx0ICB9KSxcblxuXHQgIC8qKlxuXHQgICAqIGBwb3NpdGlvbmAsIGlmIHByZXNlbnQsIGRlZmluZXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQuXG5cdCAgICpcblx0ICAgKiAgVGhpcyBpcyBzaW1pbGFyIHRvIGhvdyBmb3JtIGVsZW1lbnRzIGluIFJlYWN0IHdvcmsgLSBpZiBubyBgcG9zaXRpb25gIGlzIHN1cHBsaWVkLCB0aGUgY29tcG9uZW50XG5cdCAgICogIGlzIHVuY29udHJvbGxlZC5cblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICAgICAgIHJldHVybiAoXG5cdCAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIHBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XG5cdCAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuXHQgICAqICAgICAgICAgICAgICApO1xuXHQgICAqICAgICAgICAgIH1cblx0ICAgKiAgICAgIH0pO1xuXHQgICAqIGBgYFxuXHQgICAqL1xuXHQgIHBvc2l0aW9uOiBwcm9wVHlwZXMuc2hhcGUoe1xuXHQgICAgeDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHk6IHByb3BUeXBlcy5udW1iZXJcblx0ICB9KSxcblxuXHQgIC8qKlxuXHQgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cblx0ICAgKi9cblx0ICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcblx0ICBzdHlsZTogZG9udFNldE1lLFxuXHQgIHRyYW5zZm9ybTogZG9udFNldE1lXG5cdH0pO1xuXHREcmFnZ2FibGUuZGVmYXVsdFByb3BzID0gX2V4dGVuZHMoe30sIERyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzLCB7XG5cdCAgYXhpczogJ2JvdGgnLFxuXHQgIGJvdW5kczogZmFsc2UsXG5cdCAgZGVmYXVsdENsYXNzTmFtZTogJ3JlYWN0LWRyYWdnYWJsZScsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nJyxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2VkJyxcblx0ICBkZWZhdWx0UG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxuXHQgIHBvc2l0aW9uOiBudWxsLFxuXHQgIHNjYWxlOiAxXG5cdH0pO1xuXG5cdC8vIFByZXZpb3VzIHZlcnNpb25zIG9mIHRoaXMgbGliIGV4cG9ydGVkIDxEcmFnZ2FibGU+IGFzIHRoZSByb290IGV4cG9ydC4gQXMgdG8gbm90IGJyZWFrXG5cdC8vIHRoZW0sIG9yIFR5cGVTY3JpcHQsIHdlIGV4cG9ydCAqYm90aCogYXMgdGhlIHJvb3QgYW5kIGFzICdkZWZhdWx0Jy5cblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9wdWxsLzI1NFxuXHQvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL2lzc3Vlcy8yNjZcblx0RHJhZ2dhYmxlLmRlZmF1bHQgPSBEcmFnZ2FibGU7XG5cdERyYWdnYWJsZS5EcmFnZ2FibGVDb3JlID0gRHJhZ2dhYmxlQ29yZTtcblxuXHRyZXR1cm4gRHJhZ2dhYmxlO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtZHJhZ2dhYmxlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRyYWdnYWJsZS9kaXN0L3JlYWN0LWRyYWdnYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODMzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBEcmFnZ2FibGUgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncmVhY3QtZHJhZ2dhYmxlJykpO1xudmFyIFJlc2l6YWJsZSA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdyZS1yZXNpemFibGUnKSk7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIHJlc2l6YWJsZVN0eWxlID0ge1xuICB3aWR0aDogJ2F1dG8nLFxuICBoZWlnaHQ6ICdhdXRvJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDBcbn07XG5cbnZhciBSbmQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBpbmhlcml0cyhSbmQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJuZChwcm9wcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFJuZCk7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSbmQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSbmQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHo6IHByb3BzLnosXG4gICAgICBvcmlnaW5hbDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgYm91bmRzOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcbiAgICAgIG1heFdpZHRoOiBwcm9wcy5tYXhXaWR0aCxcbiAgICAgIG1heEhlaWdodDogcHJvcHMubWF4SGVpZ2h0LFxuICAgICAgaXNNb3VudGVkOiBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMub25SZXNpemVTdGFydCA9IF90aGlzLm9uUmVzaXplU3RhcnQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25SZXNpemUgPSBfdGhpcy5vblJlc2l6ZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vblJlc2l6ZVN0b3AgPSBfdGhpcy5vblJlc2l6ZVN0b3AuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnU3RhcnQgPSBfdGhpcy5vbkRyYWdTdGFydC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWcgPSBfdGhpcy5vbkRyYWcuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnU3RvcCA9IF90aGlzLm9uRHJhZ1N0b3AuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuZ2V0TWF4U2l6ZXNGcm9tUHJvcHMgPSBfdGhpcy5nZXRNYXhTaXplc0Zyb21Qcm9wcy5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhSbmQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy56ICE9PSBuZXh0UHJvcHMueikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgejogbmV4dFByb3BzLnogfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0UGFyZW50UG9zaXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQYXJlbnRTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGFyZW50U2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc2l6YWJsZS5nZXRQYXJlbnRTaXplKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TWF4U2l6ZXNGcm9tUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYXhTaXplc0Zyb21Qcm9wcygpIHtcbiAgICAgIHZhciBtYXhXaWR0aCA9IHR5cGVvZiB0aGlzLnByb3BzLm1heFdpZHRoID09PSAndW5kZWZpbmVkJyA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogdGhpcy5wcm9wcy5tYXhXaWR0aDtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSB0eXBlb2YgdGhpcy5wcm9wcy5tYXhIZWlnaHQgPT09ICd1bmRlZmluZWQnID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiB0aGlzLnByb3BzLm1heEhlaWdodDtcbiAgICAgIHJldHVybiB7IG1heFdpZHRoOiBtYXhXaWR0aCwgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxmRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGZFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiByZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQYXJlbnRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhcmVudFBvc2l0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldFNlbGZFbGVtZW50KCk7XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgaWYgKCEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTW91bnRlZDogdHJ1ZSB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTW91bnRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUsIGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnU3RhcnQoZSwgZGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucHJvcHMuYm91bmRzKSByZXR1cm47XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5yZXNpemFibGUgJiYgdGhpcy5yZXNpemFibGUucGFyZW50Tm9kZTtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3BhcmVudCcgPyBwYXJlbnQgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucHJvcHMuYm91bmRzKTtcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0O1xuICAgICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldFJlY3QudG9wO1xuICAgICAgdmFyIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcGFyZW50TGVmdCA9IHBhcmVudFJlY3QubGVmdDtcbiAgICAgIHZhciBwYXJlbnRUb3AgPSBwYXJlbnRSZWN0LnRvcDtcbiAgICAgIHZhciBsZWZ0ID0gdGFyZ2V0TGVmdCAtIHBhcmVudExlZnQ7XG4gICAgICB2YXIgdG9wID0gdGFyZ2V0VG9wIC0gcGFyZW50VG9wO1xuICAgICAgaWYgKCF0aGlzLnJlc2l6YWJsZSkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvdW5kczoge1xuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIHJpZ2h0OiBsZWZ0ICsgKHRhcmdldC5vZmZzZXRXaWR0aCAtIHRoaXMucmVzaXphYmxlLnNpemUud2lkdGgpLFxuICAgICAgICAgIGJvdHRvbTogdGhpcy5wcm9wcy5fZnJlZUJvdHRvbUJvdW5kcyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgPyAyMTQ3NDgzNjQ3IDogdG9wICsgKHRhcmdldC5vZmZzZXRIZWlnaHQgLSB0aGlzLnJlc2l6YWJsZS5zaXplLmhlaWdodCksXG4gICAgICAgICAgbGVmdDogbGVmdFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWcoZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnKGUsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZ1N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdG9wKGUsIGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0b3ApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdTdG9wKGUsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uUmVzaXplU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KGUsIGRpciwgcmVmVG9FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9yaWdpbmFsOiB7IHg6IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLngsIHk6IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLnkgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucmVzaXphYmxlICYmIHRoaXMucmVzaXphYmxlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3BhcmVudCcgPyBwYXJlbnQgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucHJvcHMuYm91bmRzKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLmdldFNlbGZFbGVtZW50KCk7XG4gICAgICAgIGlmIChzZWxmIGluc3RhbmNlb2YgRWxlbWVudCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHZhciBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMgPSB0aGlzLmdldE1heFNpemVzRnJvbVByb3BzKCksXG4gICAgICAgICAgICAgIF9tYXhXaWR0aCA9IF9nZXRNYXhTaXplc0Zyb21Qcm9wcy5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgX21heEhlaWdodCA9IF9nZXRNYXhTaXplc0Zyb21Qcm9wcy5tYXhIZWlnaHQ7XG5cbiAgICAgICAgICB2YXIgcGFyZW50U2l6ZSA9IHRoaXMuZ2V0UGFyZW50U2l6ZSgpO1xuICAgICAgICAgIGlmIChfbWF4V2lkdGggJiYgdHlwZW9mIF9tYXhXaWR0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChfbWF4V2lkdGguZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgICB2YXIgcmF0aW8gPSBOdW1iZXIoX21heFdpZHRoLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgICBfbWF4V2lkdGggPSBwYXJlbnRTaXplLndpZHRoICogcmF0aW87XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9tYXhXaWR0aC5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICAgICAgICBfbWF4V2lkdGggPSBOdW1iZXIoX21heFdpZHRoLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9tYXhIZWlnaHQgJiYgdHlwZW9mIF9tYXhIZWlnaHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoX21heEhlaWdodC5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgICAgICAgIHZhciBfcmF0aW8gPSBOdW1iZXIoX21heEhlaWdodC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgICAgX21heEhlaWdodCA9IHBhcmVudFNpemUud2lkdGggKiBfcmF0aW87XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9tYXhIZWlnaHQuZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgICAgICAgX21heEhlaWdodCA9IE51bWJlcihfbWF4SGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHNlbGZSZWN0ID0gc2VsZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgc2VsZkxlZnQgPSBzZWxmUmVjdC5sZWZ0O1xuICAgICAgICAgIHZhciBzZWxmVG9wID0gc2VsZlJlY3QudG9wO1xuICAgICAgICAgIHZhciB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0O1xuICAgICAgICAgIHZhciB0YXJnZXRUb3AgPSB0YXJnZXRSZWN0LnRvcDtcbiAgICAgICAgICBpZiAoL2xlZnQvaS50ZXN0KGRpcikgJiYgdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHZhciBtYXggPSBzZWxmTGVmdCAtIHRhcmdldExlZnQgKyB0aGlzLnJlc2l6YWJsZS5zaXplLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1heFdpZHRoOiBtYXggPiBOdW1iZXIoX21heFdpZHRoKSA/IF9tYXhXaWR0aCA6IG1heCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKC9yaWdodC9pLnRlc3QoZGlyKSkge1xuICAgICAgICAgICAgdmFyIF9tYXggPSB0YXJnZXQub2Zmc2V0V2lkdGggKyAodGFyZ2V0TGVmdCAtIHNlbGZMZWZ0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXhXaWR0aDogX21heCA+IE51bWJlcihfbWF4V2lkdGgpID8gX21heFdpZHRoIDogX21heCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKC90b3AvaS50ZXN0KGRpcikgJiYgdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHZhciBfbWF4MiA9IHNlbGZUb3AgLSB0YXJnZXRUb3AgKyB0aGlzLnJlc2l6YWJsZS5zaXplLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF9tYXgyID4gTnVtYmVyKF9tYXhIZWlnaHQpID8gX21heEhlaWdodCA6IF9tYXgyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKC9ib3R0b20vaS50ZXN0KGRpcikpIHtcbiAgICAgICAgICAgIHZhciBfbWF4MyA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAodGFyZ2V0VG9wIC0gc2VsZlRvcCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBfbWF4MyA+IE51bWJlcihfbWF4SGVpZ2h0KSA/IF9tYXhIZWlnaHQgOiBfbWF4M1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMucHJvcHMubWF4SGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVTdGFydCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQoZSwgZGlyLCByZWZUb0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uUmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemUoZSwgZGlyZWN0aW9uLCByZWZUb1Jlc2l6YWJsZUVsZW1lbnQsIGRlbHRhKSB7XG4gICAgICB2YXIgeCA9IHZvaWQgMDtcbiAgICAgIHZhciB5ID0gdm9pZCAwO1xuICAgICAgaWYgKC9sZWZ0L2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXRlLm9yaWdpbmFsLnggLSBkZWx0YS53aWR0aDtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuc2V0U3RhdGUoeyB4OiB4IH0pO1xuICAgICAgfVxuICAgICAgaWYgKC90b3AvaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgeSA9IHRoaXMuc3RhdGUub3JpZ2luYWwueSAtIGRlbHRhLmhlaWdodDtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuc2V0U3RhdGUoeyB5OiB5IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZShlLCBkaXJlY3Rpb24sIHJlZlRvUmVzaXphYmxlRWxlbWVudCwgZGVsdGEsIHtcbiAgICAgICAgICB4OiB4IHx8IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLngsXG4gICAgICAgICAgeTogeSB8fCB0aGlzLmRyYWdnYWJsZS5zdGF0ZS55XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uUmVzaXplU3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplU3RvcChlLCBkaXJlY3Rpb24sIHJlZlRvUmVzaXphYmxlRWxlbWVudCwgZGVsdGEpIHtcbiAgICAgIHZhciBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMyID0gdGhpcy5nZXRNYXhTaXplc0Zyb21Qcm9wcygpLFxuICAgICAgICAgIG1heFdpZHRoID0gX2dldE1heFNpemVzRnJvbVByb3BzMi5tYXhXaWR0aCxcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMyLm1heEhlaWdodDtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1heFdpZHRoOiBtYXhXaWR0aCwgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0b3ApIHtcbiAgICAgICAgdmFyIF9wb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiB0aGlzLmRyYWdnYWJsZS5zdGF0ZS54LFxuICAgICAgICAgIHk6IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLnlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0b3AoZSwgZGlyZWN0aW9uLCByZWZUb1Jlc2l6YWJsZUVsZW1lbnQsIGRlbHRhLCBfcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTaXplKHNpemUpIHtcbiAgICAgIGlmICghdGhpcy5yZXNpemFibGUpIHJldHVybjtcbiAgICAgIHRoaXMucmVzaXphYmxlLnVwZGF0ZVNpemUoeyB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZS5zZXRTdGF0ZShwb3NpdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlWkluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlWkluZGV4KHopIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB6OiB6IH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY3Vyc29yU3R5bGUgPSB0aGlzLnByb3BzLmRpc2FibGVEcmFnZ2luZyB8fCB0aGlzLnByb3BzLmRyYWdIYW5kbGVDbGFzc05hbWUgPyB7IGN1cnNvcjogJ25vcm1hbCcgfSA6IHsgY3Vyc29yOiAnbW92ZScgfTtcbiAgICAgIHZhciBpbm5lclN0eWxlID0gX2V4dGVuZHMoe30sIHJlc2l6YWJsZVN0eWxlLCB7XG4gICAgICAgIHpJbmRleDogdGhpcy5zdGF0ZS56XG4gICAgICB9LCBjdXJzb3JTdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XG4gICAgICAvLyBIQUNLOiBXYWl0IGZvciBzZXR0aW5nIHJlbGF0aXZlIHRvIHBhcmVudCBlbGVtZW50LlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzTW91bnRlZCkgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpO1xuICAgICAgdmFyIG1heEhlaWdodCA9IHRoaXMucHJvcHMuX2ZyZWVCb3R0b21Cb3VuZHMgPyAyMTQ3NDgzNjQ3IDogdGhpcy5zdGF0ZS5tYXhIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBEcmFnZ2FibGUsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgICBfdGhpczIuZHJhZ2dhYmxlID0gYztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhbmRsZTogdGhpcy5wcm9wcy5kcmFnSGFuZGxlQ2xhc3NOYW1lLFxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbjogdGhpcy5wcm9wcy5kZWZhdWx0LFxuICAgICAgICAgIG9uU3RhcnQ6IHRoaXMub25EcmFnU3RhcnQsXG4gICAgICAgICAgb25EcmFnOiB0aGlzLm9uRHJhZyxcbiAgICAgICAgICBvblN0b3A6IHRoaXMub25EcmFnU3RvcCxcbiAgICAgICAgICBheGlzOiB0aGlzLnByb3BzLmRyYWdBeGlzLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVEcmFnZ2luZyxcbiAgICAgICAgICBncmlkOiB0aGlzLnByb3BzLmRyYWdHcmlkLFxuICAgICAgICAgIGJvdW5kczogdGhpcy5wcm9wcy5ib3VuZHMgPyB0aGlzLnN0YXRlLmJvdW5kcyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvbixcbiAgICAgICAgICBlbmFibGVVc2VyU2VsZWN0SGFjazogdGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjayxcbiAgICAgICAgICBjYW5jZWw6IHRoaXMucHJvcHMuY2FuY2VsXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUmVzaXphYmxlLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmV4dGVuZHNQcm9wcywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLnJlc2l6YWJsZSA9IGM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdFNpemU6IHRoaXMucHJvcHMuZGVmYXVsdCxcbiAgICAgICAgICAgIHNpemU6IHRoaXMucHJvcHMuc2l6ZSxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5wcm9wcy5lbmFibGVSZXNpemluZyxcbiAgICAgICAgICAgIG9uUmVzaXplU3RhcnQ6IHRoaXMub25SZXNpemVTdGFydCxcbiAgICAgICAgICAgIG9uUmVzaXplOiB0aGlzLm9uUmVzaXplLFxuICAgICAgICAgICAgb25SZXNpemVTdG9wOiB0aGlzLm9uUmVzaXplU3RvcCxcbiAgICAgICAgICAgIHN0eWxlOiBpbm5lclN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGgsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0LFxuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMuc3RhdGUubWF4V2lkdGgsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgICAgIGdyaWQ6IHRoaXMucHJvcHMucmVzaXplR3JpZCxcbiAgICAgICAgICAgIGhhbmRsZVdyYXBwZXJDbGFzczogdGhpcy5wcm9wcy5yZXNpemVIYW5kbGVXcmFwcGVyQ2xhc3MsXG4gICAgICAgICAgICBoYW5kbGVXcmFwcGVyU3R5bGU6IHRoaXMucHJvcHMucmVzaXplSGFuZGxlV3JhcHBlclN0eWxlLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvOiB0aGlzLnByb3BzLmxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg6IHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCxcbiAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0OiB0aGlzLnByb3BzLmxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0LFxuICAgICAgICAgICAgaGFuZGxlU3R5bGVzOiB0aGlzLnByb3BzLnJlc2l6ZUhhbmRsZVN0eWxlcyxcbiAgICAgICAgICAgIGhhbmRsZUNsYXNzZXM6IHRoaXMucHJvcHMucmVzaXplSGFuZGxlQ2xhc3Nlc1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJuZDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUm5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWF4V2lkdGg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICBtYXhIZWlnaHQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICBvblJlc2l6ZVN0YXJ0OiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KCkge30sXG4gIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZSgpIHt9LFxuICBvblJlc2l6ZVN0b3A6IGZ1bmN0aW9uIG9uUmVzaXplU3RvcCgpIHt9LFxuICBvbkRyYWdTdGFydDogZnVuY3Rpb24gb25EcmFnU3RhcnQoKSB7fSxcbiAgb25EcmFnOiBmdW5jdGlvbiBvbkRyYWcoKSB7fSxcbiAgb25EcmFnU3RvcDogZnVuY3Rpb24gb25EcmFnU3RvcCgpIHt9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSbmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lczUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm5kL2xpYi9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDg1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9