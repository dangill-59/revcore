exports.ids = [4];
exports.modules = {

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listPages__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rnd__ = __webpack_require__(660);
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

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(14);

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(541);

/***/ }),

/***/ 321:
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(195);

/***/ }),

/***/ 325:
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducerHelper__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__annotations_annoMenu__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__annotations_overlay__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attachMenu__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deleteMenu__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchView_ocrMenu__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generated_PageImageTypeModel__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scanMenu__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__scannerSelectMenu__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lightBox_clientOnly__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__annotations_reducer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__printApp_reducer__ = __webpack_require__(25);
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

/***/ 337:
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

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(321);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(321);
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

/***/ 341:
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

/***/ 342:
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

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropTargetCreator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_filesize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducerHelper__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_lazy_load__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__printApp_reducer__ = __webpack_require__(25);
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

/***/ 344:
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainNav_reducer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button__ = __webpack_require__(320);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_reducer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchView_reducer__ = __webpack_require__(124);





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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});


/***/ }),

/***/ 352:
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

/***/ 353:
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

/***/ 360:
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

/***/ 362:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(371);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(316);

var _eventlistener = __webpack_require__(352);

var _lodash = __webpack_require__(337);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(360);

var _lodash4 = _interopRequireDefault(_lodash3);

var _parentScroll = __webpack_require__(367);

var _parentScroll2 = _interopRequireDefault(_parentScroll);

var _inViewport = __webpack_require__(366);

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

/***/ 365:
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewport;

var _getElementPosition = __webpack_require__(365);

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

/***/ 367:
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

/***/ 368:
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
  var ReactPropTypesSecret = __webpack_require__(325);
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(325);

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

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(314);
var assign = __webpack_require__(315);

var ReactPropTypesSecret = __webpack_require__(325);
var checkPropTypes = __webpack_require__(368);

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

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(314);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(370)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(369)();
}


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(319);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(322);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(375);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = __webpack_require__(374);

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

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rangeslider = __webpack_require__(372);

var _Rangeslider2 = _interopRequireDefault(_Rangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Rangeslider2.default;

/***/ }),

/***/ 374:
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

/***/ 375:
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

/***/ 622:
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

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(316), __webpack_require__(2)) :
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

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(2);
var reactDom = __webpack_require__(316);
var Draggable = _interopDefault(__webpack_require__(636));
var Resizable = _interopDefault(__webpack_require__(622));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9jYXJ0cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/MDc3YioqKiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yP2Q3NDUqKioiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yP2FjNmQqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/MDFiNioqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9nZ2xlLWJ1dHRvbi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yPzJiZTgqKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzPzQyOTgqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3I/ZjQ0ZioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcz8wNjE5KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvaW5kZXgudHN4PzE0MDMqIiwid2VicGFjazovLy8uL34vbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzPzNiZGMqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL2Fubm9NZW51LnRzeD9hNzE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9vdmVybGF5LnRzeD85MTY1KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvYXR0YWNoTWVudS50c3g/NWZkYSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2RlbGV0ZU1lbnUudHN4P2EwMjcqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9wYWdlLnRzeD8xYWZhKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbk1lbnUudHN4PzRkOTYqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FubmVyU2VsZWN0TWVudS50c3g/ZDBhZSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2VhcmNoVmlldy9vY3JNZW51LnRzeD9kODE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvbGlnaHRCb3guY2xpZW50T25seS50c3g/Mzg5ZioiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudGxpc3RlbmVyL2V2ZW50bGlzdGVuZXIuanM/ZTcwNSoiLCJ3ZWJwYWNrOi8vLy4vfi9maWxlc2l6ZS9saWIvZmlsZXNpemUuanM/YWUzMyoiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanM/ZTFjZSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzPzczMGEqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi9MYXp5TG9hZC5qcz9hZThmKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvZ2V0RWxlbWVudFBvc2l0aW9uLmpzPzFkMTcqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9pblZpZXdwb3J0LmpzPzVmNGMqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9wYXJlbnRTY3JvbGwuanM/OWI0ZioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzPzIzYzUqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanM/ODkyYSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzPzNlNTUqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9pbmRleC5qcz81OGM1KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9SYW5nZXNsaWRlci5qcz84YmFjKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5qcz8yNmQ4KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi91dGlscy5qcz80MjdmKiIsIndlYnBhY2s6Ly8vLi9+L3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmpzPzIzMmIqIiwid2VicGFjazovLy8uL34vcmUtcmVzaXphYmxlL2xpYi9pbmRleC5lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kcmFnZ2FibGUvZGlzdC9yZWFjdC1kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ybmQvbGliL2luZGV4LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQzVOQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQjs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUgsRUFBRTs7O0FBRzllO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQixP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QUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDQUFDOzs7Ozs7Ozs7QUN2NkJEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0NBQWdDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQSxNQUFNO0FBQ04sc0NBQXNDOztBQUV0QztBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQmFkZ2UsIEJ1dHRvbiwgTW9kYWwsIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBlbnN1cmVDYXJ0cywgeyBJQ2FydHNTdGF0ZSwgSUxpc3RTY2FuYmF0Y2hlc1N0YXRlIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgUGFnZUltYWdlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUltYWdlTW9kZWwnO1xuaW1wb3J0IFBhZ2VMaXN0VmlldyBmcm9tICcuLi9saXN0UGFnZXMnO1xuaW1wb3J0IFJuZCBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgU2NhbkJhdGNoTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvU2NhbkJhdGNoTW9kZWwnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUxvYWRlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcblxuY29uc3QgQ2FydHNMb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PFNjYW5CYXRjaE1vZGVsW10+KCk7XG5cbnR5cGUgQ29ubmVjdGVkUHJvcHMgPSBJQ2FydHNTdGF0ZSAmIHt9O1xudHlwZSBWaWV3UHJvcHMgPSBDb25uZWN0ZWRQcm9wcyAmIHsgZGlzcGF0Y2ggfTtcblxuY29uc3Qgc3RhdGljU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBib3JkZXI6ICdzb2xpZCBibGFjayAxcHgnLFxuICB0b3A6IDIzOCxcbiAgbGVmdDogNDAwLFxuICBiYWNrZ3JvdW5kOiAncmVkJyxcbiAgekluZGV4OiAxMDAsXG59O1xuXG5jbGFzcyBDYXJ0VmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Vmlld1Byb3BzLCB7fT4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGVuc3VyZUNhcnRzKCkuaW5pdGlhbGl6ZUNhcnRzKCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGNhcnRWaXNpYmxlLCBjYXJ0UG9zaXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjYXJ0UG9zaXRpb250b1VzZSA9IF8uYXNzaWduKHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHg6IDQwMCwgeTogMjM4IH0sIGNhcnRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gY2FydFZpc2libGUgPyAoXG4gICAgICA8Um5kXG4gICAgICAgIGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCdcbiAgICAgICAgc2l6ZT17eyBoZWlnaHQ6IGNhcnRQb3NpdGlvbnRvVXNlLmhlaWdodCwgd2lkdGg6IGNhcnRQb3NpdGlvbnRvVXNlLndpZHRoIH19XG4gICAgICAgIHBvc2l0aW9uPXt7IHg6IGNhcnRQb3NpdGlvbnRvVXNlLngsIHk6IGNhcnRQb3NpdGlvbnRvVXNlLnkgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgfX1cbiAgICAgICAgbWluV2lkdGg9ezQwMH1cbiAgICAgICAgbWluSGVpZ2h0PXsxNTB9XG4gICAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9Jy5jYXJ0RHJhZ0hhbmRsZSdcbiAgICAgICAgb25EcmFnU3RvcD17KGUsIHVpKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS51cGRhdGVDYXJ0TG9jYXRpb24odWkueCwgdWkueSkpO1xuICAgICAgICB9fVxuICAgICAgICBvblJlc2l6ZVN0b3A9eyhlLCBkaXIsIHJlZiwgZGVsdGEsIHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS51cGRhdGVDYXJ0U2l6ZShyZWYub2Zmc2V0SGVpZ2h0LCByZWYub2Zmc2V0V2lkdGgpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtb2RhbC10aXRsZSdcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzg4MjM1Mjk0MTE3NjQ3MDcpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0nY2FydHRvb2x0aXAnPkRyYWcgaGVyZSB0byByZS1wb3NpdGlvbiBjYXJ0PC9Ub29sdGlwPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0RHJhZ0hhbmRsZScgc3R5bGU9e3sgY3Vyc29yOiAnbW92ZScgfX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1hcnJvd3MnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+IEltYWdlIGNhcnRcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cblxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B1bGwtcmlnaHQnXG4gICAgICAgICAgICAgIGJzU3R5bGU9J2xpbmsnXG4gICAgICAgICAgICAgIGJzU2l6ZT0nc20nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAsIG1hcmdpblRvcDogLTIsIG1hcmdpblJpZ2h0OiAzIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUNhcnRzKCkuc2hvd0NhcnQoZmFsc2UpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS10aW1lcyB0ZXh0LWRhbmdlcicgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgdG9wOiAyNSB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgPFBhZ2VMaXN0Vmlld1xuICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyPXtlbnN1cmVDYXJ0cygpLnBhZ2VzTGlzdH1cbiAgICAgICAgICAgICAgICAvKmxvYWRQYWdlc0NhbGxiYWNrPXtwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnRoZW4ocGFnZXNUb0FkZD0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZW5zdXJlQ2FydHMoKS5hZGRQYWdlcyhwYWdlc1RvQWRkKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0qL1xuXG4gICAgICAgICAgICAgICAgLy9Ub29sQnV0dG9ucz17UGFnZUxpc3RUb29sc31cbiAgICAgICAgICAgICAgICBoYXNJbmZpbml0ZVNjcm9sbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VGh1bWJzSGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgaW1hZ2VMaXN0U3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgdG9wOiAyNSxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JuZD5cbiAgICApIDogbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIHt9Pigoc3RhdGUpID0+IHtcbiAgcmV0dXJuIGVuc3VyZUNhcnRzKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcbn0pKENhcnRWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2NhcnRzL2luZGV4LnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDMxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNTQxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9nZ2xlLWJ1dHRvbi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBoYW5kbGVBY3Rpb24sIGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuaW1wb3J0IHsgQW5ub0RhdGFNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9Bbm5vRGF0YU1vZGVsJztcbmltcG9ydCB7IElBc3luY1Jlc3VsdCB9IGZyb20gJ2Jhc2UvYXN5bmNTdGF0ZU1pZGRsZXdhcmUnO1xuaW1wb3J0IFJlZHVjZXJCYXNlIGZyb20gJ2Jhc2UvYmFzZVJlZHVjZXInO1xuaW1wb3J0IHsgY2hlY2tGZXRjaEVycm9yIH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmV4cG9ydCBlbnVtIEFubm9Ub29scyB7XG4gIGFubm90YXRlID0gMSxcbiAgaGlnaGxpZ2h0LFxuICByZWRhY3QsXG4gIGNsZWFyLFxuICBzaG93T3JpZ2luYWwsXG4gIHJvdGF0ZVJpZ2h0LFxuICByb3RhdGVMZWZ0LFxufVxuXG50eXBlIEFubm9UZXh0UG9zUHJvcHMgPSB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyIH07XG50eXBlIEFubm9UZXh0UHJvcHMgPSB7IHRleHQ6IHN0cmluZzsgcG9zaXRpb246IEFubm9UZXh0UG9zUHJvcHMgfTtcblxuZXhwb3J0IGludGVyZmFjZSBJQW5ub3RhdGVTdGF0ZSB7XG4gIHJlYWRvbmx5IHNlbGVjdGVkVG9vbDogQW5ub1Rvb2xzO1xuICByZWFkb25seSBhbm5vRGF0YUFzeW5jOiBJQXN5bmNSZXN1bHQ8QW5ub0RhdGFNb2RlbD47XG5cbiAgcmVhZG9ubHkgYW5ub1RleHQ6IEFubm9UZXh0UHJvcHM7XG5cbiAgLy9UaGUgcGFnZSBmb3Igd2hpaGMgd2UgYXJlIGRvaW5nIGFubm90YXRpb25zXG4gIHJlYWRvbmx5IGFubm9QYWdlSWQ6IHN0cmluZztcbn1cblxudHlwZSBteUFjdGlvbnMgPSB7XG4gIHNlbGVjdFRvb2w6ICh2YWx1ZT86IEFubm9Ub29scykgPT4gQW5ub1Rvb2xzO1xuICB1cGRhdGVBbm5vRGF0YTogKHBhZ2VJZDogc3RyaW5nLCB2YWx1ZTogUHJvbWlzZUxpa2U8QW5ub0RhdGFNb2RlbD4pID0+IFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+O1xuXG4gIHNldEFubm9UZXh0OiAodmFsdWU/OiBBbm5vVGV4dFByb3BzKSA9PiBBbm5vVGV4dFByb3BzO1xufTtcblxuY2xhc3MgYW5ub3RhdGVSZWR1Y2VyIGV4dGVuZHMgUmVkdWNlckJhc2U8SUFubm90YXRlU3RhdGUsIG15QWN0aW9ucz4ge1xuICBjcmVhdGVBY3Rpb25MaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RUb29sOiAodmFsdWU/OiBBbm5vVG9vbHMpID0+IHZhbHVlLFxuICAgICAgc2V0QW5ub1RleHQ6ICh2YWx1ZT86IEFubm9UZXh0UHJvcHMpID0+IHZhbHVlLFxuICAgICAgdXBkYXRlQW5ub0RhdGE6IFtcbiAgICAgICAgKHBhZ2VJZDogc3RyaW5nLCB2YWx1ZTogUHJvbWlzZUxpa2U8QW5ub0RhdGFNb2RlbD4pID0+IHZhbHVlLFxuICAgICAgICAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gKHtcbiAgICAgICAgICBBc3luYzogdHJ1ZSxcbiAgICAgICAgICBhbm5vUGFnZUlkOiBwYWdlSWQsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcmVkdWNlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkVG9vbDogaGFuZGxlQWN0aW9uKFxuICAgICAgICB0aGlzLl9teUFjdGlvbnMuc2VsZWN0VG9vbCxcbiAgICAgICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIG51bGwsXG4gICAgICApLFxuXG4gICAgICBhbm5vRGF0YUFzeW5jOiBoYW5kbGVBY3Rpb24oXG4gICAgICAgIHRoaXMuX215QWN0aW9ucy51cGRhdGVBbm5vRGF0YSxcbiAgICAgICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIG51bGwsXG4gICAgICApLFxuXG4gICAgICBhbm5vUGFnZUlkOiBoYW5kbGVBY3Rpb24oXG4gICAgICAgIHRoaXMuX215QWN0aW9ucy51cGRhdGVBbm5vRGF0YSxcbiAgICAgICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGFubm9QYWdlSWQgfSA9IGFjdGlvbi5tZXRhO1xuICAgICAgICAgIHJldHVybiBhbm5vUGFnZUlkO1xuICAgICAgICB9LFxuICAgICAgICBudWxsLFxuICAgICAgKSxcblxuICAgICAgYW5ub1RleHQ6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnNldEFubm9UZXh0LFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrSWZVbk1vdW50ZWQocGFnZUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vaWYgdGhlIGxhc3QgcGFnZSB0aGF0IHdlIG1vdW50ZWQgYW5uIHZpZXcgaXMgZGlzbW91bnRlZCB1bnNlbGVjdCB0aGUgdG9vbFxuICAgICAgLy90aGlzIGlzIG5lZWRlZFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYW5ub1BhZ2VJZCB9ID0gX21pbmUuZ2V0Q3VycmVudFN0YXRlKGdldFN0YXRlKCkpO1xuICAgICAgICBpZiAoYW5ub1BhZ2VJZCA9PSBwYWdlSWQpIGRpc3BhdGNoKF9taW5lLnNlbGVjdFRvb2wobnVsbCkpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdFRvb2wodmFsdWU/OiBBbm5vVG9vbHMpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKF9taW5lLl9teUFjdGlvbnMuc2V0QW5ub1RleHQobnVsbCkpO1xuICAgICAgZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZWxlY3RUb29sKHZhbHVlKSk7XG4gICAgfTtcbiAgfVxuXG4gIHJvdGF0ZUltYWdlKHBhZ2VJZDogc3RyaW5nLCBsZWZ0OiBib29sZWFuKSB7XG4gICAgY29uc3QgX21pbmUgPSB0aGlzO1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAvL25lZWQgdG8gcnVuIGEgcmVuZGVyIHBhc3MgZmlyc3RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzYXZlUCA9IGZldGNoKGAvYXBpL2Fubm90YXRpb25zL3JvdGF0ZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYWdlSWQpfT9sZWZ0PSR7bGVmdH1gKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY2hlY2tGZXRjaEVycm9yKHJlc3BvbnNlKSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChfbWluZS5zZWxlY3RUb29sKG51bGwpKTtcblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy51cGRhdGVBbm5vRGF0YShwYWdlSWQsIHNhdmVQKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9O1xuICB9XG5cbiAgbG9hZEFubm90YXRpb25zKHBhZ2VJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2F2ZVAgPSBmZXRjaChgL2FwaS9hbm5vdGF0aW9ucy9hbm5vdGF0ZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYWdlSWQpfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGNoZWNrRmV0Y2hFcnJvcihyZXNwb25zZSkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPik7XG5cbiAgICByZXR1cm4gdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhKHBhZ2VJZCwgc2F2ZVApO1xuICB9XG5cbiAgdXBkYXRlQW5ub1RleHQodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgX21pbmUgPSB0aGlzO1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCB7IGFubm9UZXh0IH0gPSB0aGlzLmdldEN1cnJlbnRTdGF0ZShnZXRTdGF0ZSgpKTtcbiAgICAgIGlmICghYW5ub1RleHQpIHJldHVybjtcblxuICAgICAgcmV0dXJuIGRpc3BhdGNoKF9taW5lLl9teUFjdGlvbnMuc2V0QW5ub1RleHQoXy5hc3NpZ24oe30sIGFubm9UZXh0LCB7IHRleHQgfSkpKTtcbiAgICB9O1xuICB9XG5cbiAgaW5pdEFubm9UZXh0KHBvc2l0aW9uOiBBbm5vVGV4dFBvc1Byb3BzKSB7XG4gICAgY29uc3QgX21pbmUgPSB0aGlzO1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dCh7IHRleHQ6ICcnLCBwb3NpdGlvbiB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIHNhdmVBbm5vdGF0aW9ucyhwYWdlSWQ6IHN0cmluZywgZGF0YVVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgX21pbmUgPSB0aGlzO1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAvL0JlZm9yZSB3ZSBzYXZlIHRoZSBjYW52YXMgY2xlYXIgYW55IGFubm9UZXh0IGJveFxuICAgICAgZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChudWxsKSk7XG5cbiAgICAgIGNvbnN0IGFubm9Nb2RlbDogQW5ub0RhdGFNb2RlbCA9IHtcbiAgICAgICAgZGF0YVVybCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNhdmVQID0gZmV0Y2goYC9hcGkvYW5ub3RhdGlvbnMvYW5ub3RhdGUvJHtlbmNvZGVVUklDb21wb25lbnQocGFnZUlkKX1gLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYW5ub01vZGVsKSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY2hlY2tGZXRjaEVycm9yKHJlc3BvbnNlKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZUxpa2U8QW5ub0RhdGFNb2RlbD4pO1xuXG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhKHBhZ2VJZCwgc2F2ZVApKTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGFubm90YXRlUmVkdWNlci5nZXRJbnN0YW5jZShhbm5vdGF0ZVJlZHVjZXIsICdhbm5vdGF0aW9ucycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYW5ub3RhdGlvbnMvcmVkdWNlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE5NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8vIFRvIGluY2x1ZGUgdGhlIGRlZmF1bHQgc3R5bGVzXG5pbXBvcnQgJ3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IEFQYWdlLCB7IERuRFByb3BzLCBEcm9wVGFyZ2V0Q3JlYXRvciwgSWRyb3BUYXJnZXRQcm9wcyB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENoZWNrYm94LFxuICBEcm9wZG93bkJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIE1lbnVJdGVtLFxuICBNb2RhbCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBEUkFHVFlQRV9QQUdFLCBJTGlzdFBhZ2VzU3RhdGUsIHBhZ2VOYXYgfSBmcm9tICcuL3JlZHVjZXJIZWxwZXInO1xuaW1wb3J0IHsgY3JlYXRlTG9hZGVyVmlldywgY3JlYXRlU2F2ZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5pbXBvcnQgZW5zdXJlTWFpbk5hdiwgeyBJTmF2TWVudVN0YXRlIH0gZnJvbSAnLi4vbWFpbk5hdi9yZWR1Y2VyJztcblxuaW1wb3J0IEFubm9NZW51IGZyb20gJy4uL2Fubm90YXRpb25zL2Fubm9NZW51JztcbmltcG9ydCBBbm5vT3ZlcmxheVZpZXcgZnJvbSAnLi4vYW5ub3RhdGlvbnMvb3ZlcmxheSc7XG5pbXBvcnQgQXR0YWNoTWVudSBmcm9tICcuL2F0dGFjaE1lbnUnO1xuaW1wb3J0IENvcHlQYXN0ZU1lbnUgZnJvbSAnLi9jb3B5UGFzdGVNZW51JztcbmltcG9ydCBEZWxldGVNZW51IGZyb20gJy4vZGVsZXRlTWVudSc7XG5pbXBvcnQgT2NyTWVudSBmcm9tICcuLi9zZWFyY2hWaWV3L29jck1lbnUnO1xuaW1wb3J0IHsgUGFnZUhvbGRlck1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VIb2xkZXJNb2RlbCc7XG5pbXBvcnQgeyBQYWdlSW1hZ2VNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VNb2RlbCc7XG5pbXBvcnQgeyBQYWdlSW1hZ2VUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUltYWdlVHlwZU1vZGVsJztcbmltcG9ydCBTY2FuTWVudSBmcm9tICcuL3NjYW5NZW51JztcbmltcG9ydCBTY2FubmVyU2VsZWN0TWVudSBmcm9tICcuL3NjYW5uZXJTZWxlY3RNZW51JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3QtcmFuZ2VzbGlkZXInO1xuaW1wb3J0IF9QYWdlTGlnaHRCb3ggZnJvbSAnLi9saWdodEJveC5jbGllbnRPbmx5JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZW5zdXJlQW5ub3RhdGlvbnMgZnJvbSAnLi4vYW5ub3RhdGlvbnMvcmVkdWNlcic7XG5pbXBvcnQgZW5zdXJlUHJpbnRBcHAgZnJvbSAnLi4vcHJpbnRBcHAvcmVkdWNlcic7XG5cbmNvbnN0IFVwbG9hZFN0YXR1c1ZpZXcgPSBjcmVhdGVTYXZlclZpZXc8Ym9vbGVhbj4oKTtcblxudHlwZSBDb21wb25lbnRQcm9wcyA9IElkcm9wVGFyZ2V0UHJvcHMgJiB7XG4gIC8vcmVhY3QgZWxlbWVudCB0byBzaG93IG9uIHRoZSBhY3RpdmUgcGFnZVxuICBBY3RpdmVQYWdlVG9vbEJhcj86IGFueTtcblxuICAvL3JlYWN0IGVsZW1lbnQgdG8gc2hvdyBhcyBsaXN0IHRvb2wgYmFyXG4gIFRvb2xCdXR0b25zPzogYW55O1xuXG4gIC8vaWYgdHJ1ZSB3ZSBmaXggTkFWIGJ1dHRvbiBvbiBUT1BcbiAgaGFzSW5maW5pdGVTY3JvbGw/OiBib29sZWFuO1xuXG4gIC8vVGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBhY3VhbGwgZGl2IHdpdGggaW1hZ2VzXG4gIGltYWdlTGlzdFN0eWxlPzogYW55O1xuXG4gIC8vVGhpYnMgaGVpZ2h0IGlmIHRoZXkgaGF2ZSBub3QgYmVlbiByZXNwb3NpdGlvbmVkXG4gIGRlZmF1bHRUaHVtYnNIZWlnaHQ/OiBudW1iZXI7XG5cbiAgLy9hbiBvdmVybGF5IHRoYXQgaXMgZHJhd24gb24gdG8gb2YgdGhlIHBhZ2VcbiAgUGFnZU92ZXJsYXlWaWV3PzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xufTtcblxudHlwZSBDb25uZWN0ZWRQcm9wID0gSUxpc3RQYWdlc1N0YXRlICYge1xuICBwYWdlc0FycmF5OiBQYWdlSW1hZ2VNb2RlbFtdO1xuICBhbm5vVG9vbFNlbGVjdGVkOiBib29sZWFuO1xufTtcblxuY29uc3QgQW5ub09DUk1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEFubm9NZW51IC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2VMaWdodEJveCA9IF9QYWdlTGlnaHRCb3ggYXMgYW55O1xuXG5jbGFzcyBMaXN0UGFnZXNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbXBvbmVudFByb3BzICYgQ29ubmVjdGVkUHJvcCAmIERuRFByb3BzLCB7fT4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlcikge1xuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyLmFkZEFsbG93ZWQoKSkge1xuICAgICAgICBjb25zdCBUaGVNZW51ID0gKCkgPT4gKFxuICAgICAgICAgIDxBdHRhY2hNZW51IG9uRmlsZUF0dGFjaGVkPXsoKSA9PiB0aGlzLl9maWxlSW5wdXRSZWYgJiYgdGhpcy5fZmlsZUlucHV0UmVmLmNsaWNrKCl9IC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuYWRkTWVudSgnbWFpbicsICdhdHRhY2gnLCBUaGVNZW51KSk7XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvcikge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbyhgZGV0ZWN0ZWQgbmF2aWdhdG9yLnBsYXRmb3JtIDogJHtuYXZpZ2F0b3IucGxhdGZvcm19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignZW1wdHkgbmF2aWdhdG9yOiBjYW5ub3QgZGV0ZWN0IHBsYXRmb3JtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5wbGF0Zm9ybSA9PSAnV2luMzInKSB7XG4gICAgICAgICAgY29uc3QgVGhlU2Nhbk1lbnUgPSAoKSA9PiAoXG4gICAgICAgICAgICA8U2Nhbk1lbnUgb25TY2FuPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zY2FuUGFnZXMoKSl9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdtYWluJywgJ3NjYW4nLCBUaGVTY2FuTWVudSkpO1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdzZXR0aW5ncycsICdzZWxlY3RTY2FubmVyJywgU2Nhbm5lclNlbGVjdE1lbnUpKTtcblxuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ2Rpc3RyaWJ1ZUV4dHJhJywgJ1JlLVByb2Nlc3MnLCAoKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhfKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5maXhOb253ZWJQYWdlKCkpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc3VjY2Vzcycgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXJlZnJlc2gnPjwvaT4gUmUtcmVuZGVyIGltYWdlc1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvL2Rpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdkaXN0cmlidWVFeHRyYScsICdjb3B5UGFzdGUnLCAoKSA9PiA8Q29weVBhc3RlTWVudSBsaXN0b2ZQYWdlc0hlbHBlcj17bGlzdG9mUGFnZXNIZWxwZXJ9Lz4pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyLmRlbGV0ZUFsbG93ZWQoKSkge1xuICAgICAgICBjb25zdCBNeURlbGV0ZU1lbnUgPSAoKSA9PiA8RGVsZXRlTWVudSBsaXN0b2ZQYWdlc0hlbHBlcj17bGlzdG9mUGFnZXNIZWxwZXJ9IC8+O1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdtYWluJywgJ2RlbGV0ZScsIE15RGVsZXRlTWVudSkpO1xuICAgICAgfVxuXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgZW5zdXJlUHJpbnRBcHAoKS5zZXRQcmludGFibGUoe1xuICAgICAgICAgIHBhZ2VzR2V0dGVyOiBsaXN0b2ZQYWdlc0hlbHBlci5nZXRUb1ByaW50UGFnZXMuYmluZChsaXN0b2ZQYWdlc0hlbHBlciksXG4gICAgICAgICAgZXh0cmFNZW51OiA8QW5ub09DUk1lbnUgLz4sXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgbGlzdG9mUGFnZXNIZWxwZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIpIHtcbiAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlci5hZGRBbGxvd2VkKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmRlbGV0ZU1lbnUoJ21haW4nLCAnYXR0YWNoJykpO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtID09ICdXaW4zMicpIHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnbWFpbicsICdzY2FuJykpO1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdzZXR0aW5ncycsICdzZWxlY3RTY2FubmVyJykpO1xuICAgICAgICAgIC8vZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmRlbGV0ZU1lbnUoJ2Rpc3RyaWJ1ZUV4dHJhJywgJ2NvcHlQYXN0ZScpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuZGVsZXRlQWxsb3dlZCgpKSBkaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnbWFpbicsICdkZWxldGUnKSk7XG5cbiAgICAgIGRpc3BhdGNoKGVuc3VyZVByaW50QXBwKCkuc2V0UHJpbnRhYmxlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBhY3RpdmVQYWdlLCBwYWdlc0FycmF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZBY3RpdmVQYWdlID0gcHJldlByb3BzLmFjdGl2ZVBhZ2U7XG5cbiAgICBpZiAocGFnZXNBcnJheSAmJiBwYWdlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vd2UgYWx3YXlzIHdhbnQgYSBhY3RpdmUgcGFnZVxuICAgICAgaWYgKCFhY3RpdmVQYWdlIHx8ICFfLmZpbmQocGFnZXNBcnJheSwgKHApID0+IHAuaWQgPT0gYWN0aXZlUGFnZS5pZCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgYWN0aXZlIHBhZ2UgdG8gdG9wIGltYWdlJyk7XG4gICAgICAgIGNvbnN0IHsgbGlzdG9mUGFnZXNIZWxwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNldEFjdGl2ZVBhZ2UocGFnZXNBcnJheVswXS5pZCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVQYWdlIHx8IGFjdGl2ZVBhZ2UuaWQgPT0gKHByZXZBY3RpdmVQYWdlIHx8IHt9KS5pZCkgcmV0dXJuO1xuXG4gICAgLy9hY3RpdmUgcGFnZSBoYXMgY2hhbmdlZCBsZXRzIG1ha2Ugc3VyZSBpdCdzIHZpc2libGVcblxuICAgIGlmICghdGhpcy5fcGFnZVJlZnNbYWN0aXZlUGFnZS5pZF0pIHtcbiAgICAgIGNvbnNvbGUud2FybignYWN0aXZlIHBhZ2UgaWQgaXMgbm90IGluIF9wYWdlUmVmcycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgb2Zmc2V0VG9wLCBvZmZzZXRIZWlnaHQgfSA9IHRoaXMuX3BhZ2VSZWZzW2FjdGl2ZVBhZ2UuaWRdO1xuXG4gICAgLy9hY2NvdW50aW5nIGZvciBtYXJnaW5zIC4gdGhlIG1hZ2ljIG51bWJlciB3ZSBmb3VuZCBieSB0cmlhbCBhbmQgZXJyb3IgLCB3ZSB3aWxsIGhhdmUgdG8gY2hhbmdlIGlmIHdlIGNoYW5nZSBtYXJnaW5zIGFuZCBzdHVmZlxuICAgIGNvbnN0IE1BR0lDTUFSR0lOTlVNQkVSID0gMjA7IC8vMjM7XG4gICAgY29uc3QgcGFnZUJvdHRvbVBvc2l0aW9uID0gb2Zmc2V0VG9wICsgb2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0aGlzLl9wYWdlbGlzdFJlZjtcbiAgICBjb25zdCB2aXNpYmxlQm90dG9tUG9zaXRpb24gPSBzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQ7XG5cbiAgICBsZXQgbmV3U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXG4gICAgY29uc3Qgdmlld0hhc05vbkxpbWl0ZWRIZWlnaHQgPSBzY3JvbGxIZWlnaHQgPT0gY2xpZW50SGVpZ2h0O1xuXG4gICAgLy9jaGVjayBpZiBhY3RpdmVQYWdlIGJvdHRvbSBpcyB2aXNpYmxlXG4gICAgaWYgKHZpZXdIYXNOb25MaW1pdGVkSGVpZ2h0KSB7XG4gICAgICBuZXdTY3JvbGxUb3AgPSBvZmZzZXRUb3AgLSBNQUdJQ01BUkdJTk5VTUJFUjtcbiAgICB9IGVsc2UgaWYgKHBhZ2VCb3R0b21Qb3NpdGlvbiA+IHZpc2libGVCb3R0b21Qb3NpdGlvbikge1xuICAgICAgbmV3U2Nyb2xsVG9wID0gcGFnZUJvdHRvbVBvc2l0aW9uIC0gY2xpZW50SGVpZ2h0IC0gTUFHSUNNQVJHSU5OVU1CRVI7XG4gICAgfVxuXG4gICAgLy9jaGVjayBpZiBhY3RpdmVQYWdlIFRvcCBpcyB2aXNpYmxlLCBvdmVycmlkZSBzY3JvbGwgdG8gbWFrZSBib3R0b20gdmlzaWJsZVxuICAgIGlmIChvZmZzZXRUb3AgPCBuZXdTY3JvbGxUb3AgLSBNQUdJQ01BUkdJTk5VTUJFUikgbmV3U2Nyb2xsVG9wID0gb2Zmc2V0VG9wIC0gTUFHSUNNQVJHSU5OVU1CRVI7XG5cbiAgICAvL2xldCBuZXdTY3JvbGxUb3AgPSB0aGlzLlBhZ2VsaXN0UmVmLnNjcm9sbFRvcCsoKGJhY2t3b3JkPy0xOjEpKiAodGhpcy5wcm9wcy5zbGlkZXJWYWx1ZSArIDE0KSk7XG4gICAgaWYgKG5ld1Njcm9sbFRvcCA8IDApIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IDA7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICF2aWV3SGFzTm9uTGltaXRlZEhlaWdodCAmJlxuICAgICAgbmV3U2Nyb2xsVG9wID4gdGhpcy5fcGFnZWxpc3RSZWYuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGFnZWxpc3RSZWYuY2xpZW50SGVpZ2h0XG4gICAgKSB7XG4gICAgICBuZXdTY3JvbGxUb3AgPSB0aGlzLl9wYWdlbGlzdFJlZi5zY3JvbGxIZWlnaHQgLSB0aGlzLl9wYWdlbGlzdFJlZi5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHZpZXdIYXNOb25MaW1pdGVkSGVpZ2h0KSB7XG4gICAgICB3aW5kb3cgJiYgd2luZG93LnNjcm9sbFRvICYmIHdpbmRvdy5zY3JvbGxUbygwLCBuZXdTY3JvbGxUb3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3U2Nyb2xsVG9wID09PSBzY3JvbGxUb3ApIHJldHVybjtcbiAgICAgIHRoaXMuX3BhZ2VsaXN0UmVmLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBsZXQgc2Nyb2xsU3RlcCA9IChuZXdTY3JvbGxUb3AgLSBzY3JvbGxUb3ApIC8gMTA7XG4gICAgICAgIGNvbnN0IGJhY2t3b3JkID0gc2Nyb2xsU3RlcCA8IDA7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gZG9TdGVwKCkge1xuICAgICAgICAgICAgbGV0IG5ld1BvcyA9IG1lLl9wYWdlbGlzdFJlZi5zY3JvbGxUb3AgKyBzY3JvbGxTdGVwO1xuXG4gICAgICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKChiYWNrd29yZCAmJiBuZXdQb3MgPD0gbmV3U2Nyb2xsVG9wKSB8fCAoIWJhY2t3b3JkICYmIG5ld1BvcyA+PSBuZXdTY3JvbGxUb3ApKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gbmV3U2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5fcGFnZWxpc3RSZWYuc2Nyb2xsVG9wID0gbmV3UG9zO1xuXG4gICAgICAgICAgICBpZiAoIWRvbmUpXG4gICAgICAgICAgICAgICAgXy5kZWxheShkb1N0ZXAsIDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9TdGVwKCk7XG4gICAgICAgICovXG4gIH1cblxuICBwcml2YXRlIF9wYWdlbGlzdFJlZj86IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByaXZhdGUgX3BhZ2VSZWZzOiB7IFtrZXk6IHN0cmluZ106IEhUTUxEaXZFbGVtZW50IH0gPSB7fTtcblxuICBwcml2YXRlIG9uU2Nyb2xsZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9wYWdlbGlzdFJlZikgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBwYWdlc0FycmF5LCBhY3RpdmVQYWdlLCBsaXN0b2ZQYWdlc0hlbHBlciwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCEocGFnZXNBcnJheSAmJiBwYWdlc0FycmF5Lmxlbmd0aCA+IDApKSByZXR1cm47XG5cbiAgICBjb25zdCBhY3RpdmVQYWdlSWQgPSBhY3RpdmVQYWdlID8gYWN0aXZlUGFnZS5pZCA6IHBhZ2VzQXJyYXlbMF0uaWQ7XG4gICAgaWYgKCFhY3RpdmVQYWdlSWQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuX3BhZ2VsaXN0UmVmO1xuICAgIGNvbnN0IHZpc2libGVCb3R0b21Qb3NpdGlvbiA9IHNjcm9sbFRvcCArIGNsaWVudEhlaWdodDtcblxuICAgIGlmICghdGhpcy5fcGFnZVJlZnNbYWN0aXZlUGFnZUlkXSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldEhlaWdodCB9ID0gdGhpcy5fcGFnZVJlZnNbYWN0aXZlUGFnZUlkXTtcbiAgICBjb25zdCBwYWdlQm90dG9tUG9zaXRpb24gPSBvZmZzZXRUb3AgKyBvZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB2aXNpYml0eVNoaW0gPSBvZmZzZXRIZWlnaHQgKiAwLjM7XG5cbiAgICAvL2NoZWNrIGlmIHRoZSBhY3RpdmUgcGFnZSBpcyBub3QgdmlzaWJsZVxuICAgIGlmIChcbiAgICAgIG9mZnNldFRvcCArIHZpc2liaXR5U2hpbSA+IHZpc2libGVCb3R0b21Qb3NpdGlvbiB8fFxuICAgICAgcGFnZUJvdHRvbVBvc2l0aW9uIC0gdmlzaWJpdHlTaGltIDwgc2Nyb2xsVG9wXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdBY3RpdmVQYWdlID0gXy5maW5kKFxuICAgICAgICBfLmtleXModGhpcy5fcGFnZVJlZnMpLFxuICAgICAgICAoaWQpID0+IHRoaXMuX3BhZ2VSZWZzW2lkXSAmJiB0aGlzLl9wYWdlUmVmc1tpZF0ub2Zmc2V0VG9wID49IHNjcm9sbFRvcCxcbiAgICAgICk7XG5cbiAgICAgIGlmIChuZXdBY3RpdmVQYWdlKSB7XG4gICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNldEFjdGl2ZVBhZ2UobmV3QWN0aXZlUGFnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdubyBhY3RpdmUgcGFnZSBmb3VuZCBhdCBzY3JvbGwgbG9jYXRpb24nLCBzY3JvbGxUb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25TY3JvbGxlZGRlYm91bmNlZCA9IF8uZGVib3VuY2UodGhpcy5vblNjcm9sbGVkLCAxMDAwKTtcbiAgcHJpdmF0ZSBfZmlsZUlucHV0UmVmID0gbnVsbDtcblxuICBwcml2YXRlIF9maWxlUmVuZGVySWQgPSAwO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlc0FycmF5LFxuICAgICAgcGFnZURyb3BUYXJnZXQsXG4gICAgICBsaXN0b2ZQYWdlc0hlbHBlcixcbiAgICAgIHRodW1ic0hlaWdodCxcbiAgICAgIGRlZmF1bHRUaHVtYnNIZWlnaHQsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgICAgQWN0aXZlUGFnZVRvb2xCYXIsXG4gICAgICBzZWxlY3RlZFBhZ2VzLFxuICAgICAgaW1hZ2VMaXN0U3R5bGUsXG4gICAgICBUb29sQnV0dG9ucyxcbiAgICAgIGhhc0luZmluaXRlU2Nyb2xsLFxuICAgICAgbGlnaHRCb3hWaXNpYmxlLFxuICAgICAgUGFnZU92ZXJsYXlWaWV3LFxuICAgICAgY29ycmVjdGVkRGltZW50aW9ucyxcbiAgICAgIGFubm9Ub29sU2VsZWN0ZWQsXG4gICAgICBkaXNwYXRjaCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBsaXN0cHJvbXB0ID0gJyc7XG5cbiAgICBpZiAocGFnZXNBcnJheS5sZW5ndGggPiAwKVxuICAgICAgbGlzdHByb21wdCA9ICdTaG93aW5nICcgKyBwYWdlc0FycmF5Lmxlbmd0aCArICcgaW1hZ2UnICsgKHBhZ2VzQXJyYXkubGVuZ3RoID4gMSA/ICdzJyA6ICcnKTtcblxuICAgIHRoaXMuX3BhZ2VSZWZzID0ge307XG5cbiAgICBjb25zdCBmaXhlZE5hdlN0eWxlID0ge1xuICAgICAgcGFkZGluZzogNSxcbiAgICAgIGhlaWdodDogNTYsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogNjIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmRkMmU0ZTYnLFxuICAgICAgekluZGV4OiA1LFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbmF2U3R5bGUgPSB7IHRleHRBbGlnbjogJ2xlZnQnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIHtQYWdlTGlnaHRCb3ggJiYgbGlnaHRCb3hWaXNpYmxlICYmIChcbiAgICAgICAgICA8UGFnZUxpZ2h0Qm94IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0gcGFnZXNBcnJheT17cGFnZXNBcnJheSB8fCBbXX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICBpbnB1dFJlZj17KHJlZikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZmlsZUlucHV0UmVmID0gcmVmO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgIGlkPXtgbXlpbnB1dGZpbGVfJHt0aGlzLl9maWxlUmVuZGVySWQrK31gfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMCwgd2lkdGg6IDAsIG9wYWNpdHk6IDAsIGRpc3BsYXk6ICdjb250ZW50cycgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy9jb25zdCBmaWxlcyA9IFsuLi5lLm5hdGl2ZUV2ZW50LnRhcmdldC5maWxlc107XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyB0ZXN0aW5nJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsZScsIGUubmF0aXZlRXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmFkZFBhZ2VzKGUubmF0aXZlRXZlbnQudGFyZ2V0LmZpbGVzKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnXG4gICAgICAgICAgc3R5bGU9e2hhc0luZmluaXRlU2Nyb2xsID8gKHsgLi4uZml4ZWROYXZTdHlsZSwgLi4ubmF2U3R5bGUgfSBhcyBhbnkpIDogbmF2U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSB3aXRoUG9wdXBCZyc+XG4gICAgICAgICAgICB7bGlzdHByb21wdH1cblxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgIGJzU3R5bGU9J2xpbmsnXG4gICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2luY3Rvb2x0aXAnPmNoYW5nZSBpbWFnZSBzaXplPC9Ub29sdGlwPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gtcGx1cycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gtbWludXMnIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZD0nc2xpZGVyRHJvcERvd24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEwLCBoZWlnaHQ6IDUgfX1cbiAgICAgICAgICAgICAgICBtaW49ezYwfVxuICAgICAgICAgICAgICAgIG1heD17MTUwMH1cbiAgICAgICAgICAgICAgICBzdGVwPXsxMH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGh1bWJzSGVpZ2h0IHx8IGRlZmF1bHRUaHVtYnNIZWlnaHQgfHwgMTAwfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuem9vbVRvKGUpKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAge1Rvb2xCdXR0b25zICYmIDxUb29sQnV0dG9ucyAvPn1cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgZmxvYXQ6ICdyaWdodCcsIGRpc3BsYXk6ICdmbGV4JywgaGVpZ2h0OiA0NiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD0ncHJldnRvb2x0aXAnPlxuICAgICAgICAgICAgICAgICAgU2Nyb2xsIHRvIHByZXZpb3VzIHBhZ2VcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICBTaG9ydGN1dDogPGtiZD5hbHQrdTwva2JkPiBPUiA8a2JkPnBhZ2V1cDwva2JkPlxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJzU3R5bGU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JywgbWFyZ2luTGVmdDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zZXRBY3RpdmVQYWdlKHBhZ2VOYXYucHJldikpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhY2t3YXJkJyBzdHlsZT17eyBmb250U2l6ZTogJ3gtbGFyZ2UnIH19PjwvaT5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD0nbmV4dHRvb2x0aXAnPlxuICAgICAgICAgICAgICAgICAgU2Nyb2xsIHRvIG5leHQgcGFnZVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIFNob3J0Y3V0OiA8a2JkPmFsdCtkPC9rYmQ+IE9SIDxrYmQ+cGFnZWRvd248L2tiZD5cbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBic1N0eWxlPXsnbGluayd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzBweCcsIG1hcmdpbkxlZnQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShwYWdlTmF2Lm5leHQpKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mb3J3YXJkJyBzdHlsZT17eyBmb250U2l6ZTogJ3gtbGFyZ2UnIH19PjwvaT5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcwcHgnIH19PiZuYnNwOzwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7cGFnZURyb3BUYXJnZXQoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWFnZWxpc3QtYmFja2dyb3VuZCdcbiAgICAgICAgICAgIG9uU2Nyb2xsPXsoKSA9PiB0aGlzLm9uU2Nyb2xsZWRkZWJvdW5jZWQoKX1cbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4gKHRoaXMuX3BhZ2VsaXN0UmVmID0gcmVmKX1cbiAgICAgICAgICAgIHN0eWxlPXtoYXNJbmZpbml0ZVNjcm9sbCA/IHsgLi4uaW1hZ2VMaXN0U3R5bGUsIG1hcmdpblRvcDogNTYgfSA6IGltYWdlTGlzdFN0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyAvKiwgaGVpZ2h0OiAnMTAwJScqLyB9fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAge3BhZ2VzQXJyYXkubGVuZ3RoID09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICB7bGlzdG9mUGFnZXNIZWxwZXIuYWRkQWxsb3dlZCgpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDI1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3AgaW1hZ2VzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPUnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2luZm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2ZpbGVJbnB1dFJlZiAmJiB0aGlzLl9maWxlSW5wdXRSZWYuY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlIHRvIGZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Tm8gaW1hZ2VzIGZvdW5kIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgcGFnZXNBcnJheS5tYXAoKGVkaXRhYmxlUGFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dBbm9Ub29scyA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vVG9vbFNlbGVjdGVkICYmIGFjdGl2ZVBhZ2UgJiYgYWN0aXZlUGFnZS5pZCA9PSBlZGl0YWJsZVBhZ2UuaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhyZWYpID0+ICh0aGlzLl9wYWdlUmVmc1tlZGl0YWJsZVBhZ2UuaWRdID0gcmVmKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2VEcm9wVGFyZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QVBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0ZWREaW1lbnRpb25zPXtjb3JyZWN0ZWREaW1lbnRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlT3ZlcmxheVZpZXc9e3Nob3dBbm9Ub29scyA/IEFubm9PdmVybGF5VmlldyA6IFBhZ2VPdmVybGF5Vmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzaXJlZEhlaWdodD17dGh1bWJzSGVpZ2h0IHx8IGRlZmF1bHRUaHVtYnNIZWlnaHQgfHwgMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0b2ZQYWdlc0hlbHBlcj17bGlzdG9mUGFnZXNIZWxwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5lZGl0YWJsZVBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlUGFnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlLmlkID09IGVkaXRhYmxlUGFnZS5pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIUFjdGl2ZVBhZ2VUb29sQmFyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZVBhZ2VUb29sQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVkaXRhYmxlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIGxlZnQ6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QW5vVG9vbHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdhbm5vZG9uZSc+QW5ub3RhdGlvbnMgY29tcGxldGVkPC9Ub29sdGlwPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luVG9wOiAtNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLnNlbGVjdFRvb2wobnVsbCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZWNrIGNvbG9yLW9yYW5nZSc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyEhKHNlbGVjdGVkUGFnZXMgJiYgc2VsZWN0ZWRQYWdlc1tlZGl0YWJsZVBhZ2UuaWRdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fSAvL25lZWQgb25jaGFuZ2VkIGZvciB3YXJuaW5ncyB0byBiZSBoYXBweVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0b2ZQYWdlc0hlbHBlci50b2dnbGVQYWdlU2VsZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZVBhZ2UuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSdsaWdodG5veHRvb2x0aXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBpbWFnZSBpbiBmdWxsIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAsIG1hcmdpblRvcDogLTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2hvd0xpZ2h0Qm94KGVkaXRhYmxlUGFnZS5pZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS13aW5kb3ctbWF4aW1pemUgY29sb3Itb3JhbmdlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwYWdlQ29udmVydGVkTWVudURyb3BEb3duJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8aSBjbGFzc05hbWU9J2ZhIGZhLWNvZycgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwYWdlZHJvcGRvd24tJHtlZGl0YWJsZVBhZ2UuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0YWJsZVBhZ2Uub3JpZ2luYWxJZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9JzEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0b2ZQYWdlc0hlbHBlci5kb3dubG9hZE9yaWdpbmFsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZVBhZ2Uub3JpZ2luYWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2xvdWQtZG93bmxvYWQnIC8+IERvd25sb2FkIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRhYmxlUGFnZS5wYWdlVHlwZSA9PSBQYWdlSW1hZ2VUeXBlTW9kZWwubm9ud2ViICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT0nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuZml4Tm9ud2ViUGFnZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1yZWZyZXNoJyAvPiBSZS1yZW5kZXIgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQge21vbWVudChlZGl0YWJsZVBhZ2UuY3JlYXRlZCkuZm9ybWF0KCdsbGwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9jck1lbnUgcGFnZUlkPXtlZGl0YWJsZVBhZ2UuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcCwgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlLCBvd25wcm9wcykgPT4ge1xuICBjb25zdCB7IGxpc3RvZlBhZ2VzSGVscGVyIH0gPSBvd25wcm9wcztcbiAgY29uc3QgcGFnZXNTdGF0ZSA9IGxpc3RvZlBhZ2VzSGVscGVyICYmIGxpc3RvZlBhZ2VzSGVscGVyLmdldG15U3RhdGUoc3RhdGUpO1xuICBjb25zdCB7IGFjdGl2ZURvYyB9ID1cbiAgICBsaXN0b2ZQYWdlc0hlbHBlci5teURvY3NIZWxwZXIgJiYgbGlzdG9mUGFnZXNIZWxwZXIubXlEb2NzSGVscGVyLmdldG15U3RhdGUoc3RhdGUpO1xuXG4gIGNvbnN0IHsgc2VsZWN0ZWRUb29sIH0gPSBlbnN1cmVBbm5vdGF0aW9ucygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG5cbiAgcmV0dXJuIF8uYXNzaWduKFxuICAgIHtcbiAgICAgIHBhZ2VzQXJyYXk6IChhY3RpdmVEb2MgJiYgYWN0aXZlRG9jLnBhZ2VzKSB8fCBbXSxcbiAgICAgIGFubm9Ub29sU2VsZWN0ZWQ6ICEhc2VsZWN0ZWRUb29sLFxuICAgIH0sXG4gICAgcGFnZXNTdGF0ZSxcbiAgKTtcbn0pKERyb3BUYXJnZXRDcmVhdG9yKExpc3RQYWdlc1ZpZXcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9pbmRleC50c3giLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGVuc3VyZUFubm90YXRpb25zLCB7IEFubm9Ub29scyB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZW5zdXJlUHJvamVjdHMgZnJvbSAnLi4vcHJvamVjdHMvcmVkdWNlcic7XG5cbnR5cGUgQ29ubmVjdGVkUHJvcHMgPSB7XG4gIHNlbGVjdGVkVG9vbDogQW5ub1Rvb2xzO1xuICBhbm5vdGF0aW9uc0FsbG93ZWQ6IGJvb2xlYW47XG59O1xuXG5jb25zdCB0aGVUb29scyA9IFtcbiAgeyB0b29sOiBBbm5vVG9vbHMuYW5ub3RhdGUsIGljb246ICdmYS1jb21tZW50JywgdGV4dDogJ0Fubm90YXRlJyB9LFxuICB7IHRvb2w6IEFubm9Ub29scy5oaWdobGlnaHQsIGljb246ICdmYS1lZGl0JywgdGV4dDogJ0hpZ2hsaWdodCcgfSxcbiAgeyB0b29sOiBBbm5vVG9vbHMucmVkYWN0LCBpY29uOiAnZmEtbWludXMtc3F1YXJlJywgdGV4dDogJ1JlZGFjdCcgfSxcbiAgeyB0b29sOiBBbm5vVG9vbHMuY2xlYXIsIGljb246ICdmYS1zcXVhcmUnLCB0ZXh0OiAnY2xlYXInIH0sXG4gIHsgdG9vbDogQW5ub1Rvb2xzLnNob3dPcmlnaW5hbCwgaWNvbjogJ2ZhLWV5ZScsIHRleHQ6ICdTaG93IG9yaWdpbmFsJyB9LFxuXTtcblxuY29uc3QgQW5ub01lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxDb25uZWN0ZWRQcm9wcyAmIHsgZGlzcGF0Y2ggfT4gPSAoe1xuICBzZWxlY3RlZFRvb2wsXG4gIGFubm90YXRpb25zQWxsb3dlZCxcbiAgZGlzcGF0Y2gsXG59KSA9PiB7XG4gIGlmICghYW5ub3RhdGlvbnNBbGxvd2VkKSByZXR1cm4gPGRpdj48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuXG4gICAgICB7dGhlVG9vbHMubWFwKCh0b29sKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gISFzZWxlY3RlZFRvb2wgJiYgc2VsZWN0ZWRUb29sICE9IHRvb2wudG9vbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAga2V5PXtgdG9vbF8ke3Rvb2wudG9vbH1gfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgZW5zdXJlQW5ub3RhdGlvbnMoKS5zZWxlY3RUb29sKHNlbGVjdGVkVG9vbCAhPSB0b29sLnRvb2wgPyB0b29sLnRvb2wgOiBudWxsKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkaXNhYmxlZCA/ICd0ZXh0LW11dGVkJyA6ICd0ZXh0LXN1Y2Nlc3MnfVxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSAke3Rvb2wuaWNvbn1gfT48L2k+IHt0b29sLnRleHR9XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFRvb2wgPT0gdG9vbC50b29sICYmIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hlY2sgY29sb3Itb3JhbmdlJz48L2k+fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cblxuICAgICAgPE1lbnVJdGVtXG4gICAgICAgIGRpc2FibGVkPXshIXNlbGVjdGVkVG9vbH1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLnNlbGVjdFRvb2woQW5ub1Rvb2xzLnJvdGF0ZUxlZnQpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkVG9vbCA/ICd0ZXh0LW11dGVkJyA6ICd0ZXh0LXN1Y2Nlc3MnfVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVuZG8nPjwvaT4gUm90YXRlIGxlZnRcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgPE1lbnVJdGVtXG4gICAgICAgIGRpc2FibGVkPXshIXNlbGVjdGVkVG9vbH1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLnNlbGVjdFRvb2woQW5ub1Rvb2xzLnJvdGF0ZVJpZ2h0KSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZFRvb2wgPyAndGV4dC1tdXRlZCcgOiAndGV4dC1zdWNjZXNzJ31cbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11bmRvIGZhLWZsaXAtaG9yaXpvbnRhbCc+PC9pPiBSb3RhdGUgcmlnaHRcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9NZW51SXRlbT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCB7fT4oKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRQcm9qZWN0IH0gPSBlbnN1cmVQcm9qZWN0cygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG5cbiAgbGV0IGFubm90YXRpb25zQWxsb3dlZCA9ICEhc2VsZWN0ZWRQcm9qZWN0O1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LnBlcm1pc3Npb25zICYmIHNlbGVjdGVkUHJvamVjdC5wZXJtaXNzaW9uc1snc2VsZiddKSB7XG4gICAgYW5ub3RhdGlvbnNBbGxvd2VkID0gc2VsZWN0ZWRQcm9qZWN0LnBlcm1pc3Npb25zWydzZWxmJ10uY2FuRWRpdDtcbiAgfVxuXG4gIGNvbnN0IHsgc2VsZWN0ZWRUb29sIH0gPSBlbnN1cmVBbm5vdGF0aW9ucygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiB7IHNlbGVjdGVkVG9vbCwgYW5ub3RhdGlvbnNBbGxvd2VkIH07XG59KShBbm5vTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9hbm5vTWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgZW5zdXJlQW5ub3RhdGlvbnMsIHsgQW5ub1Rvb2xzLCBJQW5ub3RhdGVTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmltcG9ydCB7IEFubm9EYXRhTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvQW5ub0RhdGFNb2RlbCc7XG5pbXBvcnQgeyBQYWdlSW1hZ2VNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VNb2RlbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlTG9hZGVyVmlldyB9IGZyb20gJ2Jhc2UvYXN5bmNMb2FkZXInO1xuXG5jb25zdCBBbm5vTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxBbm5vRGF0YU1vZGVsPigpO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0gUGFnZUltYWdlTW9kZWwgJiB7XG4gIHNjYWxlOiBudW1iZXI7XG4gIG9uQW5ub3RhdGlvbnNEb25lPzogKCkgPT4gdm9pZDtcbn07XG5cbnR5cGUgQ29ubmVjdGVkUHJvcHMgPSBJQW5ub3RhdGVTdGF0ZSAmIHt9O1xuXG50eXBlIERQb2ludHMgPSB7IFg6IG51bWJlcjsgWTogbnVtYmVyIH07XG5cbnR5cGUgRENvb3JkaW5hdGVzID0ge1xuICBzdGFydFBvaW50OiBEUG9pbnRzO1xuICBjdXJyZW50PzogRFBvaW50cztcbiAgbGFzdERyYXdQb2ludD86IERQb2ludHM7XG59O1xuXG50eXBlIFN0YXRlUHJvcHMgPSB7XG4gIGNhbnZhcz86IGFueTtcbiAgY29udGV4dD86IGFueTtcbiAgZGltZW50aW9ucz86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgY29vcmRpbmF0ZXM/OiBEQ29vcmRpbmF0ZXM7XG4gIGRyYXdpbmc/OiBib29sZWFuO1xuICBsYXN0WD86IG51bWJlcjtcbiAgbGFzdFk/OiBudW1iZXI7XG59O1xuXG50eXBlIFZpZXdQcm9wcyA9IENvbm5lY3RlZFByb3BzICYgQ29tcG9uZW50UHJvcHMgJiB7IGRpc3BhdGNoIH07XG5cbmNsYXNzIEFubm9udGF0aW9uT3ZlcmxheVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Vmlld1Byb3BzLCBTdGF0ZVByb3BzPiB7XG4gIENhbnZhc1JlZjogYW55ID0gbnVsbDtcbiAgaGFzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgc3RhdGU6IFN0YXRlUHJvcHMgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGlkOiBwYWdlSWQsIGRpc3BhdGNoLCBzZWxlY3RlZFRvb2wgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjYW52YXM6IGFueSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuQ2FudmFzUmVmKTtcblxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2FudmFzLFxuICAgICAgY29udGV4dCxcbiAgICAgIGRpbWVudGlvbnM6IHsgdzogY2FudmFzLndpZHRoLCBoOiBjYW52YXMuaGVpZ2h0IH0sXG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkVG9vbCkge1xuICAgICAgY2FzZSBBbm5vVG9vbHMucm90YXRlUmlnaHQ6XG4gICAgICBjYXNlIEFubm9Ub29scy5yb3RhdGVMZWZ0OlxuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLnJvdGF0ZUltYWdlKHBhZ2VJZCwgQW5ub1Rvb2xzLnJvdGF0ZUxlZnQgPT0gc2VsZWN0ZWRUb29sKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS5sb2FkQW5ub3RhdGlvbnMocGFnZUlkKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF9hbm5vdGFpb25lZExvYWRlZCA9IGZhbHNlO1xuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IGFubm9EYXRhQXN5bmMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy9jb25zdCB7IGFubm9EYXRhQXN5bmM6IHByZXZBbm5vRGF0YUFzeW5jIH0gPSBwcmV2UHJvcHM7XG5cbiAgICBjb25zdCB7IGNvbnRleHQsIGRpbWVudGlvbnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5fYW5ub3RhaW9uZWRMb2FkZWQgJiZcbiAgICAgIGFubm9EYXRhQXN5bmMgJiZcbiAgICAgIGFubm9EYXRhQXN5bmMucmVzdWx0ICYmXG4gICAgICBhbm5vRGF0YUFzeW5jLnJlc3VsdC5kYXRhVXJsXG4gICAgKSB7XG4gICAgICBjb25zdCBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLCAwLCAwLCBkaW1lbnRpb25zLncsIGRpbWVudGlvbnMuaCk7XG4gICAgICB9O1xuXG4gICAgICBpbWFnZU9iai5zcmMgPSBhbm5vRGF0YUFzeW5jLnJlc3VsdC5kYXRhVXJsO1xuXG4gICAgICB0aGlzLl9hbm5vdGFpb25lZExvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBpZDogcGFnZUlkLCBkaXNwYXRjaCwgb25Bbm5vdGF0aW9uc0RvbmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkICYmIG9uQW5ub3RhdGlvbnNEb25lKSBvbkFubm90YXRpb25zRG9uZSgpO1xuXG4gICAgZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS5jaGVja0lmVW5Nb3VudGVkKHBhZ2VJZCkpO1xuICB9XG5cbiAgc3RhdGljIGlzTW9iaWxlKCkge1xuICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICk7XG4gIH1cblxuICBoYW5kbGVPbk1vdXNlRG93bihlKSB7XG4gICAgaWYgKCF0aGlzLmFubm9BY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc3RhdGUuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc3RhdGUuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBpZiAoQW5ub250YXRpb25PdmVybGF5Vmlldy5pc01vYmlsZSgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICBzdGFydFBvaW50OiB7XG4gICAgICAgICAgICBYOiBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICBZOiBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb29yZGluYXRlczoge1xuICAgICAgICAgIHN0YXJ0UG9pbnQ6IHtcbiAgICAgICAgICAgIFg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgICAgIFk6IGUuY2xpZW50WSAtIHJlY3QudG9wLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYXdpbmc6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVPbk1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLmFubm9BY3RpdmUoKSkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgeyBkcmF3aW5nLCBsYXN0WCwgbGFzdFksIGNhbnZhcywgY29vcmRpbmF0ZXMsIGRpbWVudGlvbnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZHJhd2luZykge1xuICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxldCBjdXJyZW50WDtcbiAgICAgIGxldCBjdXJyZW50WTtcblxuICAgICAgaWYgKEFubm9udGF0aW9uT3ZlcmxheVZpZXcuaXNNb2JpbGUoKSkge1xuICAgICAgICBjb29yZGluYXRlcy5jdXJyZW50ID0ge1xuICAgICAgICAgIFg6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdCxcbiAgICAgICAgICBZOiBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSB7XG4gICAgICAgICAgWDogZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIFk6IGUuY2xpZW50WSAtIHJlY3QudG9wLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY2FsZSA9IGRpbWVudGlvbnMuaCAvIGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHRoaXMuZHJhdyhjb29yZGluYXRlcywgc2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIGFubm9BY3RpdmUoKSB7XG4gICAgY29uc3QgeyBhbm5vRGF0YUFzeW5jLCBzZWxlY3RlZFRvb2wsIGFubm9UZXh0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHNlbGVjdGVkVG9vbCA9PSBBbm5vVG9vbHMuc2hvd09yaWdpbmFsIHx8IChhbm5vRGF0YUFzeW5jICYmIGFubm9EYXRhQXN5bmMuaXNMb2FkaW5nKSlcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIC8qXG4gICAgICAgIGlmICghIWFubm9UZXh0KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAqL1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYW5kbGVvbk1vdXNlVXAoZSkge1xuICAgIGlmICghdGhpcy5hbm5vQWN0aXZlKCkpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzLCBkaW1lbnRpb25zLCBjYW52YXMsIGNvbnRleHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGN1cnJlbnQsIGxhc3REcmF3UG9pbnQgfSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgY29uc3QgeyBzZWxlY3RlZFRvb2wsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHN0YXJ0UG9pbnQgJiYgY3VycmVudCkge1xuICAgICAgaWYgKEFubm9Ub29scy5hbm5vdGF0ZSA9PSBzZWxlY3RlZFRvb2wpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBkaW1lbnRpb25zLmggLyBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChsYXN0RHJhd1BvaW50KSB7XG4gICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoXG4gICAgICAgICAgICAoc3RhcnRQb2ludC5YIC0gMikgKiBzY2FsZSxcbiAgICAgICAgICAgIChzdGFydFBvaW50LlkgLSAyKSAqIHNjYWxlLFxuICAgICAgICAgICAgKGxhc3REcmF3UG9pbnQuWCAtIHN0YXJ0UG9pbnQuWCArIDQpICogc2NhbGUsXG4gICAgICAgICAgICAobGFzdERyYXdQb2ludC5ZIC0gc3RhcnRQb2ludC5ZICsgNCkgKiBzY2FsZSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgZW5zdXJlQW5ub3RhdGlvbnMoKS5pbml0QW5ub1RleHQoe1xuICAgICAgICAgICAgbGVmdDogc3RhcnRQb2ludC5YICogc2NhbGUsXG4gICAgICAgICAgICB0b3A6IHN0YXJ0UG9pbnQuWSAqIHNjYWxlLFxuICAgICAgICAgICAgd2lkdGg6IChjdXJyZW50LlggLSBzdGFydFBvaW50LlgpICogc2NhbGUsXG4gICAgICAgICAgICBoZWlnaHQ6IChjdXJyZW50LlkgLSBzdGFydFBvaW50LlkpICogc2NhbGUsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNhdmVDYW52YXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2luZzogZmFsc2UgfSk7XG4gIH1cblxuICBkcmF3KGNvb3JkaW5hdGVzOiBEQ29vcmRpbmF0ZXMsIHNjYWxlOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzdGFydFBvaW50LCBsYXN0RHJhd1BvaW50LCBjdXJyZW50IH0gPSBjb29yZGluYXRlcztcblxuICAgIGlmICghdGhpcy5oYXNEcmF3aW5nKSB7XG4gICAgICBpZiAoY3VycmVudC5YIC0gc3RhcnRQb2ludC5YIDwgMTAgJiYgY3VycmVudC5ZIC0gc3RhcnRQb2ludC5ZIDwgMTApIHtcbiAgICAgICAgLy9iYXJlbHkgYW55IG1vdXNlIG1vdmUgbWF5IGJlIHRoZSBwZXJzb24gZG9lcyBhY3R1YWxseSB3YW50IHRvIGRyYXdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsYXN0RHJhd1BvaW50KSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdChcbiAgICAgICAgKHN0YXJ0UG9pbnQuWCAtIDIpICogc2NhbGUsXG4gICAgICAgIChzdGFydFBvaW50LlkgLSAyKSAqIHNjYWxlLFxuICAgICAgICAobGFzdERyYXdQb2ludC5YIC0gc3RhcnRQb2ludC5YICsgNCkgKiBzY2FsZSxcbiAgICAgICAgKGxhc3REcmF3UG9pbnQuWSAtIHN0YXJ0UG9pbnQuWSArIDQpICogc2NhbGUsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc2VsZWN0ZWRUb29sIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgc3dpdGNoIChzZWxlY3RlZFRvb2wpIHtcbiAgICAgIGNhc2UgQW5ub1Rvb2xzLmNsZWFyOlxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdChcbiAgICAgICAgICBzdGFydFBvaW50LlggKiBzY2FsZSxcbiAgICAgICAgICBzdGFydFBvaW50LlkgKiBzY2FsZSxcbiAgICAgICAgICAoY3VycmVudC5YIC0gc3RhcnRQb2ludC5YKSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlkgLSBzdGFydFBvaW50LlkpICogc2NhbGUsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEFubm9Ub29scy5hbm5vdGF0ZTpcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC40KSc7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdChcbiAgICAgICAgICBzdGFydFBvaW50LlggKiBzY2FsZSxcbiAgICAgICAgICBzdGFydFBvaW50LlkgKiBzY2FsZSxcbiAgICAgICAgICAoY3VycmVudC5YIC0gc3RhcnRQb2ludC5YKSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlkgLSBzdGFydFBvaW50LlkpICogc2NhbGUsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEFubm9Ub29scy5yZWRhY3Q6XG4gICAgICBjYXNlIEFubm9Ub29scy5oaWdobGlnaHQ6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDA7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID1cbiAgICAgICAgICBzZWxlY3RlZFRvb2wgPT0gQW5ub1Rvb2xzLnJlZGFjdCA/ICdyZ2JhKDAsIDAsIDAsIDEuMCknIDogJ3JnYmEoMjU1LCAyNTUsIDAsIDAuNDUpJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgICAgICBzdGFydFBvaW50LlggKiBzY2FsZSxcbiAgICAgICAgICBzdGFydFBvaW50LlkgKiBzY2FsZSxcbiAgICAgICAgICAoY3VycmVudC5YIC0gc3RhcnRQb2ludC5YKSAqIHNjYWxlLFxuICAgICAgICAgIChjdXJyZW50LlkgLSBzdGFydFBvaW50LlkpICogc2NhbGUsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuaGFzRHJhd2luZyA9IHRydWU7XG4gICAgY29vcmRpbmF0ZXMubGFzdERyYXdQb2ludCA9IGNvb3JkaW5hdGVzLmN1cnJlbnQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyB9KTtcbiAgfVxuXG4gIGhhbmRsZVRleHRFbnRlcigpIHtcbiAgICBjb25zdCB7IGFubm9UZXh0LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRleHQgPSBhbm5vVGV4dCAmJiBhbm5vVGV4dC50ZXh0O1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGZvbnRTaXplUHggPSAyMDtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMS4wKSc7XG4gICAgY29udGV4dC5mb250ID0gYCR7Zm9udFNpemVQeH1weCBDYWxpYnJpYDtcblxuICAgIGNvbnN0IG1heFdpZHRoID0gYW5ub1RleHQucG9zaXRpb24ud2lkdGggLSA0O1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBmb250U2l6ZVB4ICsgNDtcbiAgICBjb25zdCB4ID0gYW5ub1RleHQucG9zaXRpb24ubGVmdCArIDI7XG4gICAgbGV0IHkgPSBhbm5vVGV4dC5wb3NpdGlvbi50b3AgKyBmb250U2l6ZVB4O1xuXG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyk7XG4gICAgbGV0IGxpbmUgPSAnJztcblxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgd29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcgJztcbiAgICAgIHZhciBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0TGluZSk7XG4gICAgICB2YXIgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgIGlmICh0ZXN0V2lkdGggPiBtYXhXaWR0aCAmJiBuID4gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgICBsaW5lID0gd29yZHNbbl0gKyAnICc7XG4gICAgICAgIHkgKz0gbGluZUhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcblxuICAgIGNvbnRleHQubGluZVdpZHRoID0gMDtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1KSc7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIGFubm9UZXh0LnBvc2l0aW9uLmxlZnQsXG4gICAgICBhbm5vVGV4dC5wb3NpdGlvbi50b3AsXG4gICAgICBhbm5vVGV4dC5wb3NpdGlvbi53aWR0aCxcbiAgICAgIGFubm9UZXh0LnBvc2l0aW9uLmhlaWdodCxcbiAgICApO1xuXG4gICAgdGhpcy5zYXZlQ2FudmFzKCk7XG4gIH1cblxuICBwcml2YXRlIHNhdmVDYW52YXMoKSB7XG4gICAgY29uc3QgeyBpZDogcGFnZUlkLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdGhpcy5DYW52YXNSZWYpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhcyBSZWYgaXMgZW1wdHknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5DYW52YXNSZWYudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLnNhdmVBbm5vdGF0aW9ucyhwYWdlSWQsIGRhdGEpKTtcblxuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheVN0eWxlOiBhbnkgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGN1cnNvcjogJ2Nyb3NzaGFpcicsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgYW5ub0RhdGFBc3luYywgc2VsZWN0ZWRUb29sLCBhbm5vVGV4dCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvKlxuICAgICAgICBpZiAoIWFubm9UZXh0KSB7XG4gICAgICAgICAgICBkaXNwbGF5U3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcidcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgY29uc3QgY2FudmFzU3R5bGUgPVxuICAgICAgQW5ub1Rvb2xzLnNob3dPcmlnaW5hbCA9PSBzZWxlY3RlZFRvb2xcbiAgICAgICAgPyB7IHZpc2liaWxpdHk6ICdoaWRkZW4nLCAuLi5kaXNwbGF5U3R5bGUgfVxuICAgICAgICA6IGRpc3BsYXlTdHlsZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHthbm5vRGF0YUFzeW5jICYmIGFubm9EYXRhQXN5bmMucmVzdWx0ICYmIGFubm9EYXRhQXN5bmMucmVzdWx0LmltYWdlRGF0YVVybCAmJiAoXG4gICAgICAgICAgPGltZyBzcmM9e2Fubm9EYXRhQXN5bmMucmVzdWx0LmltYWdlRGF0YVVybH0gc3R5bGU9e2Rpc3BsYXlTdHlsZX0gY2xhc3NOYW1lPSdhbm5vSW1nJyAvPlxuICAgICAgICApfVxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgc3R5bGU9e2NhbnZhc1N0eWxlfVxuICAgICAgICAgIGNsYXNzTmFtZT0nYW5ub092ZXJsYXknXG4gICAgICAgICAgcmVmPXsocmVmKSA9PiAodGhpcy5DYW52YXNSZWYgPSByZWYpfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU9uTW91c2VEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZU9uTW91c2VEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlT25Nb3VzZU1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVPbk1vdXNlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVvbk1vdXNlVXAuYmluZCh0aGlzKX1cbiAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZW9uTW91c2VVcC5iaW5kKHRoaXMpfVxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICAgIHthbm5vVGV4dCAmJiAoXG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgY29sb3I6ICdibGFjaycsIC4uLmFubm9UZXh0LnBvc2l0aW9uIH19XG4gICAgICAgICAgICB2YWx1ZT17YW5ub1RleHQudGV4dCB8fCAnJ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0J1xuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChlbnN1cmVBbm5vdGF0aW9ucygpLnVwZGF0ZUFubm9UZXh0KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzICYmIGUuc2hpZnRLZXkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUZXh0RW50ZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YW5ub0RhdGFBc3luYyAmJiAoXG4gICAgICAgICAgPEFubm9Mb2FkZXIgYXN5bmNSZXN1bHQ9e2Fubm9EYXRhQXN5bmN9IHByb21wdD0nbG9hZGluZyBhbm5vdGF0aW9ucyc+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8L0Fubm9Mb2FkZXI+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlLCBvd25wcm9wcykgPT4ge1xuICBjb25zdCBhbm5vU3RhdGUgPSBlbnN1cmVBbm5vdGF0aW9ucygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG5cbiAgcmV0dXJuIGFubm9TdGF0ZTtcbn0pKEFubm9udGF0aW9uT3ZlcmxheVZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYW5ub3RhdGlvbnMvb3ZlcmxheS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkl0ZW0sIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxudHlwZSBWaWV3UHJvcHMgPSB7IG9uRmlsZUF0dGFjaGVkOiAoKSA9PiB2b2lkIH07XG5cbmNvbnN0IEF0dGFjaE1lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxWaWV3UHJvcHM+ID0gKHsgb25GaWxlQXR0YWNoZWQgfSkgPT4ge1xuICBsZXQgYXR0YWNoSWNvbiA9ICdmYSBmYS1maWxlLWltYWdlLW8gZmEtMngnO1xuICBsZXQgYXR0YWNoUHJvbXB0ID0gJ0F0dGFjaCBpbWFnZXMnO1xuXG4gIGlmICghbmF2aWdhdG9yIHx8IG5hdmlnYXRvci5wbGF0Zm9ybSAhPSAnV2luMzInKSB7XG4gICAgYXR0YWNoSWNvbiA9ICdmYSBmYS1jYW1lcmEgZmEtMngnO1xuICB9XG5cbiAgbGV0IGZpbGVJbnB1dCA9IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2SXRlbVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvbkZpbGVBdHRhY2hlZCAmJiBvbkZpbGVBdHRhY2hlZCgpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdBdHRhY2hNZW51dG9vbHRpcCc+e2F0dGFjaFByb21wdH08L1Rvb2x0aXA+fVxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9e2F0dGFjaEljb259IGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICA8L05hdkl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRhY2hNZW51O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2F0dGFjaE1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBJTGlzdFBhZ2VzU3RhdGUsIExpc3RQYWdlc0hlbHBlciB9IGZyb20gJy4vcmVkdWNlckhlbHBlcic7XG5pbXBvcnQgeyBOYXZJdGVtLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFBhZ2VIb2xkZXJNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSG9sZGVyTW9kZWwnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxudHlwZSBDb21wb25lbnRQcm9wcyA9IHtcbiAgbGlzdG9mUGFnZXNIZWxwZXI6IExpc3RQYWdlc0hlbHBlcjxQYWdlSG9sZGVyTW9kZWw+O1xufTtcblxudHlwZSBWaWV3UHJvcHMgPSBDb21wb25lbnRQcm9wcyAmIElMaXN0UGFnZXNTdGF0ZSAmIHsgZGlzcGF0Y2ggfTtcblxuY29uc3QgRGVsZXRlTWVudTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PFZpZXdQcm9wcz4gPSAoe1xuICBkaXNwYXRjaCxcbiAgc2VsZWN0ZWRQYWdlcyxcbiAgbGlzdG9mUGFnZXNIZWxwZXIsXG59KSA9PiB7XG4gIC8vVGhlcmUgaXMgYXQgbGVhc3Qgb25lIHNlbGVjdGVkIHBhZ2VcbiAgY29uc3QgZW5hYmxlZCA9XG4gICAgbGlzdG9mUGFnZXNIZWxwZXIgJiYgc2VsZWN0ZWRQYWdlcyAmJiBfLmZpbmQoXy5rZXlzKHNlbGVjdGVkUGFnZXMpLCAocCkgPT4gISFzZWxlY3RlZFBhZ2VzW3BdKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZJdGVtXG4gICAgICBkaXNhYmxlZD17IWVuYWJsZWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBsaXN0b2ZQYWdlc0hlbHBlciAmJiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5kZWxldGVQYWdlcygpKX1cbiAgICA+XG4gICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdkZWxldGVtZW51dG9vbHRpcCc+RGVsZXRlIEltYWdlczwvVG9vbHRpcD59XG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdGltZXMgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICA8L05hdkl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIHJldHVybiBvd25wcm9wcy5saXN0b2ZQYWdlc0hlbHBlciA/IG93bnByb3BzLmxpc3RvZlBhZ2VzSGVscGVyLmdldG15U3RhdGUoc3RhdGUpIDoge307XG59KShEZWxldGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9kZWxldGVNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIGZpbGVzaXplIGZyb20gJ2ZpbGVzaXplJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQge1xuICBDb3JyZWN0ZWREaW1lbnRpb25Qcm9wcyxcbiAgRFJBR1RZUEVfUEFHRSxcbiAgSUxpc3RQYWdlc1N0YXRlLFxuICBMaXN0UGFnZXNIZWxwZXIsXG59IGZyb20gJy4vcmVkdWNlckhlbHBlcic7XG5pbXBvcnQgeyBEcmFnU291cmNlLCBEcm9wVGFyZ2V0IH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5LWxvYWQnO1xuaW1wb3J0IHsgTmF0aXZlVHlwZXMgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgeyBQYWdlSG9sZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUhvbGRlck1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZVR5cGVNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VUeXBlTW9kZWwnO1xuaW1wb3J0IGVuc3VyZVByaW50QXBwIGZyb20gJy4uL3ByaW50QXBwL3JlZHVjZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElkcm9wVGFyZ2V0UHJvcHMge1xuICBsaXN0b2ZQYWdlc0hlbHBlcjogTGlzdFBhZ2VzSGVscGVyPFBhZ2VIb2xkZXJNb2RlbD47XG59XG5cbmV4cG9ydCB0eXBlIERuRFByb3BzID0ge1xuICBkaXNwYXRjaDtcbiAgcGFnZURyb3BUYXJnZXQ6IChhbnkpID0+IGFueTtcbiAgLy9pc0RyYWdPdmVyTWU6IGJvb2xlYW4sXG4gIGlzT3ZlckN1cnJlbnQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgRHJvcFRhcmdldENyZWF0b3IgPSBEcm9wVGFyZ2V0KFxuICBbRFJBR1RZUEVfUEFHRSwgTmF0aXZlVHlwZXMuRklMRV0sXG4gIHtcbiAgICBkcm9wKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IGhhc0Ryb3BwZWRPbkNoaWxkID0gbW9uaXRvci5kaWREcm9wKCk7XG4gICAgICBpZiAoaGFzRHJvcHBlZE9uQ2hpbGQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0eXBlID0gbW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuICAgICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuXG4gICAgICB2YXIgbXlQcm9wcyA9IHByb3BzIGFzIHsgZGlzcGF0Y2ggfSAmIElkcm9wVGFyZ2V0UHJvcHM7XG4gICAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gbXlQcm9wcztcblxuICAgICAgLy9pZiAocGFnZXNBcnJheSApXG5cbiAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpc3RvZlBhZ2VzSGVscGVyIG5vdCBzZXQgZm9yIHBhZ2UgZHJvcCB0YXJnZXQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBOYXRpdmVUeXBlcy5GSUxFIC8qJ19fTkFUSVZFX0ZJTEVfXycqLzpcbiAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5hZGRQYWdlcyhpdGVtLmZpbGVzLCBwcm9wcyAmJiBwcm9wcy5vcmRlck51bWJlcikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERSQUdUWVBFX1BBR0U6XG4gICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIub25FeGlzdGluZ1BhZ2VkRHJvcHBlZDEoaXRlbSwgcHJvcHMgJiYgcHJvcHMuaWQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgIH0sXG4gIH0sXG5cbiAgKGNvbm5lY3RlciwgbW9uaXRvcikgPT4gKHtcbiAgICBwYWdlRHJvcFRhcmdldDogY29ubmVjdGVyLmRyb3BUYXJnZXQoKSxcbiAgICAvL2lzRHJhZ092ZXJNZTogbW9uaXRvci5pc092ZXIoKSxcbiAgICBpc092ZXJDdXJyZW50OiBtb25pdG9yLmlzT3Zlcih7IHNoYWxsb3c6IHRydWUgfSksXG4gIH0pLFxuKTtcblxudHlwZSBTdGF0ZVByb3BzID0ge1xuICBzY2FsZT86IG51bWJlcjtcbn07XG5cbnR5cGUgVmlld1Byb3BzID0gUGFnZUltYWdlTW9kZWwgJlxuICBEbkRQcm9wcyAmXG4gIElkcm9wVGFyZ2V0UHJvcHMgJiB7IFBhZ2VPdmVybGF5Vmlldz86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PiB9ICYge1xuICAgIGNvbm5lY3REcmFnU291cmNlOiAoYW55KSA9PiBhbnk7XG4gICAgaXNEcmFnZ2luZzogYm9vbGVhbjtcbiAgfSAmIHsgZGVzaXJlZEhlaWdodDogbnVtYmVyOyBjb3JyZWN0ZWREaW1lbnRpb25zOiBDb3JyZWN0ZWREaW1lbnRpb25Qcm9wcyB9O1xuXG5jbGFzcyBMYXp5TG9hZGVkSW1hZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFZpZXdQcm9wcywgU3RhdGVQcm9wcz4ge1xuICBzdGF0ZTogU3RhdGVQcm9wcyA9IHt9O1xuICBfaW1nUmVmOiBhbnkgPSBudWxsO1xuXG4gIF9jaGVja1Byb2Nlc3Npbmc6IGFueSA9IG51bGw7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2NoZWNrUHJvY2Vzc2luZykgY2xlYXJJbnRlcnZhbCh0aGlzLl9jaGVja1Byb2Nlc3NpbmcpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHBhZ2VUeXBlLCBsaXN0b2ZQYWdlc0hlbHBlciwgaWQsIG9yaWdpbmFsSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYWdlVHlwZTogcHJldlBhZ2VUeXBlIH0gPSBwcmV2UHJvcHM7XG5cbiAgICAvL2lmICh0aGlzLl9jaGVja1Byb2Nlc3NpbmcpXG4gICAgLy8gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9jaGVja1Byb2Nlc3NpbmcpO1xuXG4gICAgaWYgKHBhZ2VUeXBlICE9IHByZXZQYWdlVHlwZSkge1xuICAgICAgaWYgKCFwYWdlVHlwZSB8fCBQYWdlSW1hZ2VUeXBlTW9kZWwubm9ud2ViID09IHBhZ2VUeXBlKSB7XG4gICAgICAgIC8vaW1hZ2UgaXMgZG9uZSBwcm9jZXNzaW5nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5wcm9jZXNzUGFnZShpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHBhZ2VUeXBlLCBsaXN0b2ZQYWdlc0hlbHBlciwgaWQsIG9yaWdpbmFsSWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhZ2VUeXBlIHx8IFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWIgPT0gcGFnZVR5cGUpIHtcbiAgICAgIC8vaW1hZ2UgaXMgZG9uZSBwcm9jZXNzaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnByb2Nlc3NQYWdlKGlkKSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJbWFnZVByb3BzKCkge1xuICAgIGlmICghdGhpcy5faW1nUmVmKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2ltYWdlIHJlZiBpcyBudWxsJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkaXNwYXRjaCwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQsIGhlaWdodDogZGlzcGxheUhlaWdodCB9ID0gdGhpcy5faW1nUmVmO1xuXG4gICAgaWYgKHdpZHRoICE9IG5hdHVyYWxXaWR0aCB8fCBoZWlnaHQgIT0gbmF0dXJhbEhlaWdodCkge1xuICAgICAgY29uc29sZS5sb2coJ2NvcnJlY3RpbmcgaW1hZ2UgZGltZW50aW9ucycsIGlkKTtcbiAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmFkZENvcnJlY3RlZERpbWVudGlvbnMoaWQsIG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCkpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2NhbGU6IGRpc3BsYXlIZWlnaHQgLyBuYXR1cmFsSGVpZ2h0IH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uSW1hZ2VMb2FkRmFpbGVkKCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5oYW5kbGVGYWlsZWRJbWFnZUxvYWQoaWQpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlVHlwZSxcbiAgICAgIGRlc2lyZWRIZWlnaHQsXG4gICAgICBwYXRoLFxuICAgICAgc2l6ZSxcbiAgICAgIGNyZWF0ZWQsXG4gICAgICBvcmlnaW5hbFBhZ2VOYW1lLFxuICAgICAgaWQsXG4gICAgICBQYWdlT3ZlcmxheVZpZXcsXG4gICAgICBvcmlnaW5hbElkLFxuICAgICAgbGlzdG9mUGFnZXNIZWxwZXIsXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIG9mZkxpbmVQcm9jZXNzaW5nT25seSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB3YWl0VGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjY2NjJyxcbiAgICAgIC8vZm9udFNpemU6ICdsYXJnZScsXG4gICAgICAvL21hcmdpblRvcDogMTBcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICB9O1xuXG4gICAgY29uc3Qgd2FpdEJnU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IGRlc2lyZWRIZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGNvbG9yOiAnIzk5OScsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCB3YWl0RmlsZUluZm9TdHlsZSA9IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3QgZXh0ID0gaWQuc3Vic3RyKGlkLmxhc3RJbmRleE9mKCcuJykgKyAxKTtcblxuICAgIC8vd2hlbiBwYWdldHlwZSBpcyBudWxsIGl0IG1lbmFzIGl0J3MgcmVhZHkgZm9yIHdlYiBkaXNwbGF5XG4gICAgaWYgKFxuICAgICAgIXBhZ2VUeXBlIHx8XG4gICAgICAoUGFnZUltYWdlVHlwZU1vZGVsLnByb2Nlc3NpbmcgIT0gcGFnZVR5cGUgJiZcbiAgICAgICAgZXh0ICYmXG4gICAgICAgIF8uaW5jbHVkZXMoWydwbmcnLCAnanBnJywgJ2pwZWcnXSwgZXh0LnRvTG93ZXJDYXNlKCkpKVxuICAgICkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+ICh0aGlzLl9pbWdSZWYgPSByZWYpfVxuICAgICAgICAgICAgb25Mb2FkPXsoZSkgPT4gdGhpcy5jaGVja0ltYWdlUHJvcHMoKX1cbiAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB0aGlzLm9uSW1hZ2VMb2FkRmFpbGVkKCl9XG4gICAgICAgICAgICBzcmM9e3BhdGh9XG4gICAgICAgICAgICBhbHQ9J2RvY3VtZW50IGltYWdlJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdkb2NQYWdlSW1hZ2UnXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGRlc2lyZWRIZWlnaHQgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge1BhZ2VPdmVybGF5VmlldyAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAgfX0+XG4gICAgICAgICAgICAgIDxQYWdlT3ZlcmxheVZpZXdcbiAgICAgICAgICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgb25Bbm5vdGF0aW9uc0RvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnJlbG9hZEFjdGl2ZURvY1BhZ2VzKFtpZF0pKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshIXBhZ2VUeXBlICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiA1LCBib3R0b206IDUsIC4uLndhaXRUZXh0U3R5bGUgfX0+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIGFuYWx5emluZyA8aSBjbGFzc05hbWU9J2ZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS1mdyc+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgQ2hlY2tPZmZsaW5lUHJvY2Vzc2luZyA9ICh7IGNoaWxkcmVuIH0pID0+XG4gICAgICBvZmZMaW5lUHJvY2Vzc2luZ09ubHkgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLy9oZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogJzJyZW0nLFxuICAgICAgICAgICAgZm9udFNpemU6ICdzbWFsbCcsXG4gICAgICAgICAgICBjb2xvcjogJyM4MTgxODEnLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlRoaXMge2V4dH0gZG9jdW1lbnQgc2l6ZSBleGNlZWRzIHRoZSBsaW1pdCBmb3IgcmVhbCB0aW1lIHByb2Nlc3Npbmc8L3A+XG4gICAgICAgICAgPHA+SXQgaXMgYmVpbmcgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5IC4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e2NoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuXG4gICAgY29uc3QgZmlsZUljbyA9IGV4dCAmJiBleHQudG9Mb3dlckNhc2UoKSA9PSAncGRmJyA/ICdmYS1maWxlLXBkZi1vJyA6ICdmYS1maWxlLWltYWdlLW8nO1xuICAgIGNvbnN0IEZpbGVJbmZvVmlldyA9ICgpID0+IChcbiAgICAgIDxkaXYgc3R5bGU9e3dhaXRGaWxlSW5mb1N0eWxlfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXsnZmEgJyArIGZpbGVJY299IHN0eWxlPXt7IGZvbnRTaXplOiBkZXNpcmVkSGVpZ2h0IC8gMywgbWFyZ2luOiAnMTBweCcgfX0+PC9pPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtvcmlnaW5hbFBhZ2VOYW1lICYmIDxpPiBcIntvcmlnaW5hbFBhZ2VOYW1lfVwiIDwvaT59XG4gICAgICAgICAgeyEhc2l6ZSAmJiA8c3Ryb25nPiB7ZmlsZXNpemUoc2l6ZSl9IDwvc3Ryb25nPn1cbiAgICAgICAgICB7Y3JlYXRlZCAmJiA8aSBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsJyB9fT5jcmVhdGVkIHttb21lbnQoY3JlYXRlZCkuZm9ybWF0KCdsbGwnKX08L2k+fVxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZVByaW50QXBwKCkuZG93bmxvYWRPcmlnaW5hbHMoW29yaWdpbmFsSWQgfHwgaWRdKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtc3VjY2Vzcycgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZG93bmxvYWQnPjwvaT4gRG93bmxvYWRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBzd2l0Y2ggKHBhZ2VUeXBlKSB7XG4gICAgICBjYXNlIFBhZ2VJbWFnZVR5cGVNb2RlbC51bnByb2Nlc3NlZDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0QmdTdHlsZX0+XG4gICAgICAgICAgICA8RmlsZUluZm9WaWV3IC8+XG5cbiAgICAgICAgICAgIDxDaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0VGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIGFuYWx5emluZyA8aSBjbGFzc05hbWU9J2ZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS1mdyc+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgUGFnZUltYWdlVHlwZU1vZGVsLmlkZW50aWZ5aW5nOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRCZ1N0eWxlfT5cbiAgICAgICAgICAgIDxGaWxlSW5mb1ZpZXcgLz5cblxuICAgICAgICAgICAgPENoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRUZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgaWRlbnRpZnlpbmcgPGkgY2xhc3NOYW1lPSdmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtZncnPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFBhZ2VJbWFnZVR5cGVNb2RlbC5wcm9jZXNzaW5nOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRCZ1N0eWxlfT5cbiAgICAgICAgICAgIDxGaWxlSW5mb1ZpZXcgLz5cblxuICAgICAgICAgICAgPENoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRUZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgcmVuZGVyaW5nIDxpIGNsYXNzTmFtZT0nZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLWZ3Jz48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBQYWdlSW1hZ2VUeXBlTW9kZWwubm9ud2ViOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0QmdTdHlsZX0+XG4gICAgICAgICAgICA8RmlsZUluZm9WaWV3IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFBhZ2VWaWV3OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Vmlld1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZGlzcGF0Y2gsXG4gICAgcGFnZVR5cGUsXG4gICAgaWQsXG4gICAgZGVzaXJlZEhlaWdodCxcbiAgICBwYXRoLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zLFxuICAgIHBhZ2VEcm9wVGFyZ2V0LFxuICAgIGlzT3ZlckN1cnJlbnQsXG4gICAgY29ubmVjdERyYWdTb3VyY2UsXG4gICAgaXNEcmFnZ2luZyxcbiAgfSA9IHByb3BzO1xuXG4gIGxldCBjb3JyZWN0ZWRXaWR0aCA9IHdpZHRoO1xuICBsZXQgY29ycmVjdGVkaGVpZ2h0ID0gaGVpZ2h0O1xuICBpZiAoXG4gICAgY29ycmVjdGVkRGltZW50aW9ucyAmJlxuICAgIGNvcnJlY3RlZERpbWVudGlvbnNbaWRdICYmXG4gICAgY29ycmVjdGVkRGltZW50aW9uc1tpZF0ud2lkdGggJiZcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS5oZWlnaHRcbiAgKSB7XG4gICAgY29ycmVjdGVkV2lkdGggPSBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS53aWR0aDtcbiAgICBjb3JyZWN0ZWRoZWlnaHQgPSBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBkZXNpcmVkV2lkdGggPVxuICAgIGRlc2lyZWRIZWlnaHQgKiAoY29ycmVjdGVkV2lkdGggJiYgY29ycmVjdGVkaGVpZ2h0ID8gY29ycmVjdGVkV2lkdGggLyBjb3JyZWN0ZWRoZWlnaHQgOiAwLjc3Mik7XG5cbiAgcmV0dXJuIHBhZ2VEcm9wVGFyZ2V0KFxuICAgIGNvbm5lY3REcmFnU291cmNlKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J3JldlBhZ2UnXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogMixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3ZlckN1cnJlbnQgPyAnIzY5M2IyMmExJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAuNSA6IDEsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9e2Rlc2lyZWRIZWlnaHR9IHdpZHRoPXtkZXNpcmVkV2lkdGh9IG9mZnNldFZlcnRpY2FsPXszMDB9PlxuICAgICAgICAgIDxMYXp5TG9hZGVkSW1hZ2Ugey4uLnByb3BzfSAvPlxuICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgPC9kaXY+LFxuICAgICksXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnU291cmNlKFxuICBEUkFHVFlQRV9QQUdFLFxuICB7XG4gICAgYmVnaW5EcmFnKHByb3BzOiBQYWdlSW1hZ2VNb2RlbCkge1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgIGNhbkRyYWcocHJvcHMsIG1vbml0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgKi9cblxuICAgIGVuZERyYWcocHJvcHMsIG1vbml0b3IpIHtcbiAgICAgIGlmIChtb25pdG9yLmRpZERyb3AoKSkge1xuICAgICAgICBjb25zdCBkcm9wcGVkUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG5cbiAgICAgICAgaWYgKGRyb3BwZWRSZXN1bHQgJiYgZHJvcHBlZFJlc3VsdC5tb3ZlZFRvTGlzdCkge1xuICAgICAgICAgIHZhciBteVByb3BzID0gcHJvcHMgYXMgeyBkaXNwYXRjaCB9ICYgSWRyb3BUYXJnZXRQcm9wcyAmIFBhZ2VJbWFnZU1vZGVsO1xuICAgICAgICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCB9ID0gbXlQcm9wcztcblxuICAgICAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaXN0b2ZQYWdlc0hlbHBlciBub3Qgc2V0IGZvciBwYWdlIGRyb3Agc291cmNlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnBhZ2VNb3ZlZChpZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgKGNvbm5lY3RlciwgbW9uaXRvcikgPT4gKHtcbiAgICBjb25uZWN0RHJhZ1NvdXJjZTogY29ubmVjdGVyLmRyYWdTb3VyY2UoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgfSksXG4pKERyb3BUYXJnZXRDcmVhdG9yKFBhZ2VWaWV3KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvcGFnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkl0ZW0sIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVXb3Jrc3BhY2UgZnJvbSAnLi4vd29ya3NwYWNlL3JlZHVjZXInO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBvblNjYW46ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3AgPSB7IGNyZWF0aW9uT2JqZWN0OiBhbnkgfTtcblxuY29uc3QgU2Nhbk1lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxDb21wb25lbnRQcm9wcyAmIENvbm5lY3RlZFByb3A+ID0gKHtcbiAgb25TY2FuLFxuICBjcmVhdGlvbk9iamVjdCxcbn0pID0+IHtcbiAgY29uc3QgaGFzUmV2UHJpbnRlZERhdGEgPSAhIShcbiAgICBjcmVhdGlvbk9iamVjdCAmJlxuICAgIGNyZWF0aW9uT2JqZWN0LmluaXRjb250ZXh0ID09ICdwcmludHRvcmV2JyAmJlxuICAgIGNyZWF0aW9uT2JqZWN0LmRhdGFcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZJdGVtXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uU2NhbiAmJiBvblNjYW4oKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICA8VG9vbHRpcCBpZD0nc2Nhbk1lbnV0b29sdGlwJz5cbiAgICAgICAgICAgIHtoYXNSZXZQcmludGVkRGF0YSA/ICdJbXBvcnQgcHJpbnRlZCBpbWFnZXMnIDogJ1NjYW4gaW1hZ2VzJ31cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2hhc1JldlByaW50ZWREYXRhID8gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1wcmludCBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhIGZhLWNpcmNsZS1vLW5vdGNoIGZhLTN4IGZhLXNwaW4nXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IC03LFxuICAgICAgICAgICAgICAgIHRvcDogLTE4LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2NjYycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWVyYXNlciBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICl9XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgIDwvTmF2SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcCwgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlLCBvd25wcm9wcykgPT4ge1xuICBjb25zdCB7IGNyZWF0aW9uT2JqZWN0IH0gPSBlbnN1cmVXb3Jrc3BhY2UoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiB7IGNyZWF0aW9uT2JqZWN0IH07XG59KShTY2FuTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgZW5zdXJlTWFpbk5hdiwgeyBJTmF2TWVudVN0YXRlIH0gZnJvbSAnLi4vbWFpbk5hdi9yZWR1Y2VyJztcblxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdyZWFjdC10b2dnbGUtYnV0dG9uJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbnR5cGUgVmlld1Byb3BzID0gSU5hdk1lbnVTdGF0ZSAmIHsgZGlzcGF0Y2ggfTtcblxuY29uc3QgYm9yZGVyUmFkaXVzU3R5bGUgPSB7IGJvcmRlclJhZGl1czogMiB9O1xuY29uc3QgdG9vbHRpcCA9IDxUb29sdGlwIGlkPSd0b29sdGlwJz5TZWxlY3Qgc2Nhbm5lciBiZWZvcmUgc2Nhbm5pbmc8L1Rvb2x0aXA+O1xuY29uc3QgbGFiZWwgPSAoXG4gIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9J2JvdHRvbScgb3ZlcmxheT17dG9vbHRpcH0+XG4gICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1lcmFzZXInIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nIH19IC8+XG4gIDwvT3ZlcmxheVRyaWdnZXI+XG4pO1xuXG5jb25zdCBNb3ZlYWJsZVNldHRpbmc6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxWaWV3UHJvcHM+ID0gKHsgZGlzcGF0Y2gsIHNlbGVjdGFibGVTZXR0aW5ncyB9KSA9PiAoXG4gIDxsaT5cbiAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIHBhZGRpbmdSaWdodDogJzVweCcgfX0+XG4gICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgIHRodW1iSWNvbj17bGFiZWx9XG4gICAgICAgIGFjdGl2ZUxhYmVsPSdPTidcbiAgICAgICAgaW5hY3RpdmVMYWJlbD0nT0ZGJ1xuICAgICAgICBjb2xvcnM9e3tcbiAgICAgICAgICBhY3RpdmVUaHVtYjoge1xuICAgICAgICAgICAgYmFzZTogJyNmMzcwMjknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5hY3RpdmVUaHVtYjoge1xuICAgICAgICAgICAgYmFzZTogJyNmMzcwMjknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXshIXNlbGVjdGFibGVTZXR0aW5nc1snc2VsZWN0U2Nhbm5lciddfVxuICAgICAgICB0aHVtYlN0eWxlPXtib3JkZXJSYWRpdXNTdHlsZX1cbiAgICAgICAgdHJhY2tTdHlsZT17Ym9yZGVyUmFkaXVzU3R5bGV9XG4gICAgICAgIG9uVG9nZ2xlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAvL3JlbWViZXIgdG8gYWRkIHRvIG1haW5uYXYvcmVkdWNlci50ID1zIDpzZXR0aW5nc1RvUGVyc2lzdCBpZiB5b3Ugd2FudCBzZXR0aW5nIHRvIHBlcnNpc3RcblxuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS51cGRhdGVTZXR0aW5nKCdzZWxlY3RTY2FubmVyJywgIXZhbHVlKSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuPlNlbGVjdCBzY2FubmVyPC9zcGFuPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHtcbiAgcmV0dXJuIGVuc3VyZU1haW5OYXYoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpIHx8IHt9O1xufSkoTW92ZWFibGVTZXR0aW5nKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FubmVyU2VsZWN0TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZW5zdXJlUHJvamVjdHMgZnJvbSAnLi4vcHJvamVjdHMvcmVkdWNlcic7XG5pbXBvcnQgZW5zdXJlU2VhcmNoIGZyb20gJy4uL3NlYXJjaFZpZXcvcmVkdWNlcic7XG5cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSB7XG4gIHBhZ2VJZDogc3RyaW5nO1xufTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgcmVhZG9ubHkgc2hvd09jclRleHRmb3JQYWdlSWQ6IHN0cmluZztcbiAgcmVhZG9ubHkgT0NSRW5hYmxlZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IE9DUk1lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxDb25uZWN0ZWRQcm9wcyAmIENvbXBvbmVudFByb3BzICYgeyBkaXNwYXRjaCB9PiA9ICh7XG4gIHNob3dPY3JUZXh0Zm9yUGFnZUlkLFxuICBPQ1JFbmFibGVkLFxuICBwYWdlSWQsXG4gIGRpc3BhdGNoLFxufSkgPT4ge1xuICBpZiAoIU9DUkVuYWJsZWQpIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+Jm5ic3A7PC9SZWFjdC5GcmFnbWVudD47XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuXG4gICAgICA8TWVudUl0ZW1cbiAgICAgICAga2V5PSdvY3JfZGF0YSdcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVTZWFyY2goKS5Ub2dnbGVPY3JUZXh0KHBhZ2VJZCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fSovfVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBTaG93IE9DUiBEYXRhXG4gICAgICAgICAge3Nob3dPY3JUZXh0Zm9yUGFnZUlkID09IHBhZ2VJZCAmJiA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZWNrIGNvbG9yLW9yYW5nZSc+PC9pPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9NZW51SXRlbT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRQcm9qZWN0IH0gPSBlbnN1cmVQcm9qZWN0cygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG4gIGNvbnN0IHsgc2hvd09jclRleHRmb3JQYWdlSWQgfSA9IGVuc3VyZVNlYXJjaCgpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBPQ1JFbmFibGVkOiAhIShzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LmZ1bGxUZXh0T2NyKSxcbiAgICBzaG93T2NyVGV4dGZvclBhZ2VJZCxcbiAgfTtcbn0pKE9DUk1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2VhcmNoVmlldy9vY3JNZW51LnRzeCIsImV4cG9ydCBkZWZhdWx0IHt9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXIvZGlzdC9lbnRyeS5qcyEuL3JlYWN0V2ViVXRpbHMvYmFzZS9uby1sb2FkZXIuanMhLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvbGlnaHRCb3guY2xpZW50T25seS50c3giLCIoZnVuY3Rpb24ocm9vdCxmYWN0b3J5KXtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LmV2ZW50TGlzdGVuZXIgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiB3cmFwKHN0YW5kYXJkLCBmYWxsYmFjaykge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoZWwsIGV2dE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG5cdFx0XHRpZiAoZWxbc3RhbmRhcmRdKSB7XG5cdFx0XHRcdGVsW3N0YW5kYXJkXShldnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGVsW2ZhbGxiYWNrXSkge1xuXHRcdFx0XHRlbFtmYWxsYmFja10oJ29uJyArIGV2dE5hbWUsIGxpc3RlbmVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuICAgIHJldHVybiB7XG5cdFx0YWRkOiB3cmFwKCdhZGRFdmVudExpc3RlbmVyJywgJ2F0dGFjaEV2ZW50JyksXG5cdFx0cmVtb3ZlOiB3cmFwKCdyZW1vdmVFdmVudExpc3RlbmVyJywgJ2RldGFjaEV2ZW50Jylcblx0fTtcbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXZlbnRsaXN0ZW5lci9ldmVudGxpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogZmlsZXNpemVcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgSmFzb24gTXVsbGlnYW4gPGphc29uLm11bGxpZ2FuQGF2b2lkd29yay5jb20+XG4gKiBAbGljZW5zZSBCU0QtMy1DbGF1c2VcbiAqIEB2ZXJzaW9uIDYuNC4wXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmZpbGVzaXplID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cdHZhciBiID0gL14oYnxCKSQvLFxuXHQgICAgc3ltYm9sID0ge1xuXHQgIGllYzoge1xuXHQgICAgYml0czogW1wiYlwiLCBcIktpYlwiLCBcIk1pYlwiLCBcIkdpYlwiLCBcIlRpYlwiLCBcIlBpYlwiLCBcIkVpYlwiLCBcIlppYlwiLCBcIllpYlwiXSxcblx0ICAgIGJ5dGVzOiBbXCJCXCIsIFwiS2lCXCIsIFwiTWlCXCIsIFwiR2lCXCIsIFwiVGlCXCIsIFwiUGlCXCIsIFwiRWlCXCIsIFwiWmlCXCIsIFwiWWlCXCJdXG5cdCAgfSxcblx0ICBqZWRlYzoge1xuXHQgICAgYml0czogW1wiYlwiLCBcIktiXCIsIFwiTWJcIiwgXCJHYlwiLCBcIlRiXCIsIFwiUGJcIiwgXCJFYlwiLCBcIlpiXCIsIFwiWWJcIl0sXG5cdCAgICBieXRlczogW1wiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiLCBcIlRCXCIsIFwiUEJcIiwgXCJFQlwiLCBcIlpCXCIsIFwiWUJcIl1cblx0ICB9XG5cdH0sXG5cdCAgICBmdWxsZm9ybSA9IHtcblx0ICBpZWM6IFtcIlwiLCBcImtpYmlcIiwgXCJtZWJpXCIsIFwiZ2liaVwiLCBcInRlYmlcIiwgXCJwZWJpXCIsIFwiZXhiaVwiLCBcInplYmlcIiwgXCJ5b2JpXCJdLFxuXHQgIGplZGVjOiBbXCJcIiwgXCJraWxvXCIsIFwibWVnYVwiLCBcImdpZ2FcIiwgXCJ0ZXJhXCIsIFwicGV0YVwiLCBcImV4YVwiLCBcInpldHRhXCIsIFwieW90dGFcIl1cblx0fSxcblx0ICAgIHJvdW5kaW5nRnVuY3MgPSB7XG5cdCAgZmxvb3I6IE1hdGguZmxvb3IsXG5cdCAgY2VpbDogTWF0aC5jZWlsXG5cdH07XG5cdC8qKlxuXHQgKiBmaWxlc2l6ZVxuXHQgKlxuXHQgKiBAbWV0aG9kIGZpbGVzaXplXG5cdCAqIEBwYXJhbSAge01peGVkfSAgIGFyZyAgICAgICAgU3RyaW5nLCBJbnQgb3IgRmxvYXQgdG8gdHJhbnNmb3JtXG5cdCAqIEBwYXJhbSAge09iamVjdH0gIGRlc2NyaXB0b3IgW09wdGlvbmFsXSBGbGFnc1xuXHQgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgIFJlYWRhYmxlIGZpbGUgc2l6ZSBTdHJpbmdcblx0ICovXG5cblx0ZnVuY3Rpb24gZmlsZXNpemUoYXJnKSB7XG5cdCAgdmFyIGRlc2NyaXB0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXHQgIHZhciByZXN1bHQgPSBbXSxcblx0ICAgICAgdmFsID0gMCxcblx0ICAgICAgZSxcblx0ICAgICAgYmFzZSxcblx0ICAgICAgYml0cyxcblx0ICAgICAgY2VpbCxcblx0ICAgICAgZnVsbCxcblx0ICAgICAgZnVsbGZvcm1zLFxuXHQgICAgICBsb2NhbGUsXG5cdCAgICAgIGxvY2FsZU9wdGlvbnMsXG5cdCAgICAgIG5lZyxcblx0ICAgICAgbnVtLFxuXHQgICAgICBvdXRwdXQsXG5cdCAgICAgIHBhZCxcblx0ICAgICAgcm91bmQsXG5cdCAgICAgIHUsXG5cdCAgICAgIHVuaXgsXG5cdCAgICAgIHNlcGFyYXRvcixcblx0ICAgICAgc3BhY2VyLFxuXHQgICAgICBzdGFuZGFyZCxcblx0ICAgICAgc3ltYm9scyxcblx0ICAgICAgcm91bmRpbmdGdW5jLFxuXHQgICAgICBwcmVjaXNpb247XG5cblx0ICBpZiAoaXNOYU4oYXJnKSkge1xuXHQgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgbnVtYmVyXCIpO1xuXHQgIH1cblxuXHQgIGJpdHMgPSBkZXNjcmlwdG9yLmJpdHMgPT09IHRydWU7XG5cdCAgdW5peCA9IGRlc2NyaXB0b3IudW5peCA9PT0gdHJ1ZTtcblx0ICBwYWQgPSBkZXNjcmlwdG9yLnBhZCA9PT0gdHJ1ZTtcblx0ICBiYXNlID0gZGVzY3JpcHRvci5iYXNlIHx8IDI7XG5cdCAgcm91bmQgPSBkZXNjcmlwdG9yLnJvdW5kICE9PSB2b2lkIDAgPyBkZXNjcmlwdG9yLnJvdW5kIDogdW5peCA/IDEgOiAyO1xuXHQgIGxvY2FsZSA9IGRlc2NyaXB0b3IubG9jYWxlICE9PSB2b2lkIDAgPyBkZXNjcmlwdG9yLmxvY2FsZSA6IFwiXCI7XG5cdCAgbG9jYWxlT3B0aW9ucyA9IGRlc2NyaXB0b3IubG9jYWxlT3B0aW9ucyB8fCB7fTtcblx0ICBzZXBhcmF0b3IgPSBkZXNjcmlwdG9yLnNlcGFyYXRvciAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5zZXBhcmF0b3IgOiBcIlwiO1xuXHQgIHNwYWNlciA9IGRlc2NyaXB0b3Iuc3BhY2VyICE9PSB2b2lkIDAgPyBkZXNjcmlwdG9yLnNwYWNlciA6IHVuaXggPyBcIlwiIDogXCIgXCI7XG5cdCAgc3ltYm9scyA9IGRlc2NyaXB0b3Iuc3ltYm9scyB8fCB7fTtcblx0ICBzdGFuZGFyZCA9IGJhc2UgPT09IDIgPyBkZXNjcmlwdG9yLnN0YW5kYXJkIHx8IFwiamVkZWNcIiA6IFwiamVkZWNcIjtcblx0ICBvdXRwdXQgPSBkZXNjcmlwdG9yLm91dHB1dCB8fCBcInN0cmluZ1wiO1xuXHQgIGZ1bGwgPSBkZXNjcmlwdG9yLmZ1bGxmb3JtID09PSB0cnVlO1xuXHQgIGZ1bGxmb3JtcyA9IGRlc2NyaXB0b3IuZnVsbGZvcm1zIGluc3RhbmNlb2YgQXJyYXkgPyBkZXNjcmlwdG9yLmZ1bGxmb3JtcyA6IFtdO1xuXHQgIGUgPSBkZXNjcmlwdG9yLmV4cG9uZW50ICE9PSB2b2lkIDAgPyBkZXNjcmlwdG9yLmV4cG9uZW50IDogLTE7XG5cdCAgcm91bmRpbmdGdW5jID0gcm91bmRpbmdGdW5jc1tkZXNjcmlwdG9yLnJvdW5kaW5nTWV0aG9kXSB8fCBNYXRoLnJvdW5kO1xuXHQgIG51bSA9IE51bWJlcihhcmcpO1xuXHQgIG5lZyA9IG51bSA8IDA7XG5cdCAgY2VpbCA9IGJhc2UgPiAyID8gMTAwMCA6IDEwMjQ7XG5cdCAgcHJlY2lzaW9uID0gaXNOYU4oZGVzY3JpcHRvci5wcmVjaXNpb24pID09PSBmYWxzZSA/IHBhcnNlSW50KGRlc2NyaXB0b3IucHJlY2lzaW9uLCAxMCkgOiAwOyAvLyBGbGlwcGluZyBhIG5lZ2F0aXZlIG51bWJlciB0byBkZXRlcm1pbmUgdGhlIHNpemVcblxuXHQgIGlmIChuZWcpIHtcblx0ICAgIG51bSA9IC1udW07XG5cdCAgfSAvLyBEZXRlcm1pbmluZyB0aGUgZXhwb25lbnRcblxuXG5cdCAgaWYgKGUgPT09IC0xIHx8IGlzTmFOKGUpKSB7XG5cdCAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyhudW0pIC8gTWF0aC5sb2coY2VpbCkpO1xuXG5cdCAgICBpZiAoZSA8IDApIHtcblx0ICAgICAgZSA9IDA7XG5cdCAgICB9XG5cdCAgfSAvLyBFeGNlZWRpbmcgc3VwcG9ydGVkIGxlbmd0aCwgdGltZSB0byByZWR1Y2UgJiBtdWx0aXBseVxuXG5cblx0ICBpZiAoZSA+IDgpIHtcblx0ICAgIGlmIChwcmVjaXNpb24gPiAwKSB7XG5cdCAgICAgIHByZWNpc2lvbiArPSA4IC0gZTtcblx0ICAgIH1cblxuXHQgICAgZSA9IDg7XG5cdCAgfVxuXG5cdCAgaWYgKG91dHB1dCA9PT0gXCJleHBvbmVudFwiKSB7XG5cdCAgICByZXR1cm4gZTtcblx0ICB9IC8vIFplcm8gaXMgbm93IGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgYnl0ZXMgZGl2aWRlIGJ5IDFcblxuXG5cdCAgaWYgKG51bSA9PT0gMCkge1xuXHQgICAgcmVzdWx0WzBdID0gMDtcblx0ICAgIHUgPSByZXN1bHRbMV0gPSB1bml4ID8gXCJcIiA6IHN5bWJvbFtzdGFuZGFyZF1bYml0cyA/IFwiYml0c1wiIDogXCJieXRlc1wiXVtlXTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdmFsID0gbnVtIC8gKGJhc2UgPT09IDIgPyBNYXRoLnBvdygyLCBlICogMTApIDogTWF0aC5wb3coMTAwMCwgZSkpO1xuXG5cdCAgICBpZiAoYml0cykge1xuXHQgICAgICB2YWwgPSB2YWwgKiA4O1xuXG5cdCAgICAgIGlmICh2YWwgPj0gY2VpbCAmJiBlIDwgOCkge1xuXHQgICAgICAgIHZhbCA9IHZhbCAvIGNlaWw7XG5cdCAgICAgICAgZSsrO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBwID0gTWF0aC5wb3coMTAsIGUgPiAwID8gcm91bmQgOiAwKTtcblx0ICAgIHJlc3VsdFswXSA9IHJvdW5kaW5nRnVuYyh2YWwgKiBwKSAvIHA7XG5cblx0ICAgIGlmIChyZXN1bHRbMF0gPT09IGNlaWwgJiYgZSA8IDggJiYgZGVzY3JpcHRvci5leHBvbmVudCA9PT0gdm9pZCAwKSB7XG5cdCAgICAgIHJlc3VsdFswXSA9IDE7XG5cdCAgICAgIGUrKztcblx0ICAgIH1cblxuXHQgICAgdSA9IHJlc3VsdFsxXSA9IGJhc2UgPT09IDEwICYmIGUgPT09IDEgPyBiaXRzID8gXCJrYlwiIDogXCJrQlwiIDogc3ltYm9sW3N0YW5kYXJkXVtiaXRzID8gXCJiaXRzXCIgOiBcImJ5dGVzXCJdW2VdO1xuXG5cdCAgICBpZiAodW5peCkge1xuXHQgICAgICByZXN1bHRbMV0gPSBzdGFuZGFyZCA9PT0gXCJqZWRlY1wiID8gcmVzdWx0WzFdLmNoYXJBdCgwKSA6IGUgPiAwID8gcmVzdWx0WzFdLnJlcGxhY2UoL0IkLywgXCJcIikgOiByZXN1bHRbMV07XG5cblx0ICAgICAgaWYgKGIudGVzdChyZXN1bHRbMV0pKSB7XG5cdCAgICAgICAgcmVzdWx0WzBdID0gTWF0aC5mbG9vcihyZXN1bHRbMF0pO1xuXHQgICAgICAgIHJlc3VsdFsxXSA9IFwiXCI7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9IC8vIERlY29yYXRpbmcgYSAnZGlmZidcblxuXG5cdCAgaWYgKG5lZykge1xuXHQgICAgcmVzdWx0WzBdID0gLXJlc3VsdFswXTtcblx0ICB9IC8vIFNldHRpbmcgb3B0aW9uYWwgcHJlY2lzaW9uXG5cblxuXHQgIGlmIChwcmVjaXNpb24gPiAwKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9QcmVjaXNpb24ocHJlY2lzaW9uKTtcblx0ICB9IC8vIEFwcGx5aW5nIGN1c3RvbSBzeW1ib2xcblxuXG5cdCAgcmVzdWx0WzFdID0gc3ltYm9sc1tyZXN1bHRbMV1dIHx8IHJlc3VsdFsxXTtcblxuXHQgIGlmIChsb2NhbGUgPT09IHRydWUpIHtcblx0ICAgIHJlc3VsdFswXSA9IHJlc3VsdFswXS50b0xvY2FsZVN0cmluZygpO1xuXHQgIH0gZWxzZSBpZiAobG9jYWxlLmxlbmd0aCA+IDApIHtcblx0ICAgIHJlc3VsdFswXSA9IHJlc3VsdFswXS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIGxvY2FsZU9wdGlvbnMpO1xuXHQgIH0gZWxzZSBpZiAoc2VwYXJhdG9yLmxlbmd0aCA+IDApIHtcblx0ICAgIHJlc3VsdFswXSA9IHJlc3VsdFswXS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIHNlcGFyYXRvcik7XG5cdCAgfVxuXG5cdCAgaWYgKHBhZCAmJiBOdW1iZXIuaXNJbnRlZ2VyKHJlc3VsdFswXSkgPT09IGZhbHNlICYmIHJvdW5kID4gMCkge1xuXHQgICAgdmFyIHggPSBzZXBhcmF0b3IgfHwgXCIuXCIsXG5cdCAgICAgICAgdG1wID0gcmVzdWx0WzBdLnRvU3RyaW5nKCkuc3BsaXQoeCksXG5cdCAgICAgICAgcyA9IHRtcFsxXSB8fCBcIlwiLFxuXHQgICAgICAgIGwgPSBzLmxlbmd0aCxcblx0ICAgICAgICBuID0gcm91bmQgLSBsO1xuXHQgICAgcmVzdWx0WzBdID0gXCJcIi5jb25jYXQodG1wWzBdKS5jb25jYXQoeCkuY29uY2F0KHMucGFkRW5kKGwgKyBuLCBcIjBcIikpO1xuXHQgIH1cblxuXHQgIGlmIChmdWxsKSB7XG5cdCAgICByZXN1bHRbMV0gPSBmdWxsZm9ybXNbZV0gPyBmdWxsZm9ybXNbZV0gOiBmdWxsZm9ybVtzdGFuZGFyZF1bZV0gKyAoYml0cyA/IFwiYml0XCIgOiBcImJ5dGVcIikgKyAocmVzdWx0WzBdID09PSAxID8gXCJcIiA6IFwic1wiKTtcblx0ICB9IC8vIFJldHVybmluZyBBcnJheSwgT2JqZWN0LCBvciBTdHJpbmcgKGRlZmF1bHQpXG5cblxuXHQgIHJldHVybiBvdXRwdXQgPT09IFwiYXJyYXlcIiA/IHJlc3VsdCA6IG91dHB1dCA9PT0gXCJvYmplY3RcIiA/IHtcblx0ICAgIHZhbHVlOiByZXN1bHRbMF0sXG5cdCAgICBzeW1ib2w6IHJlc3VsdFsxXSxcblx0ICAgIGV4cG9uZW50OiBlLFxuXHQgICAgdW5pdDogdVxuXHQgIH0gOiByZXN1bHQuam9pbihzcGFjZXIpO1xuXHR9IC8vIFBhcnRpYWwgYXBwbGljYXRpb24gZm9yIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmdcblxuXG5cdGZpbGVzaXplLnBhcnRpYWwgPSBmdW5jdGlvbiAob3B0KSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcblx0ICAgIHJldHVybiBmaWxlc2l6ZShhcmcsIG9wdCk7XG5cdCAgfTtcblx0fTtcblxuXHRyZXR1cm4gZmlsZXNpemU7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZXNpemUvbGliL2ZpbGVzaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLy8gZW1wdHkgKG51bGwtbG9hZGVyKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX2V2ZW50bGlzdGVuZXIgPSByZXF1aXJlKCdldmVudGxpc3RlbmVyJyk7XG5cbnZhciBfbG9kYXNoID0gcmVxdWlyZSgnbG9kYXNoLmRlYm91bmNlJyk7XG5cbnZhciBfbG9kYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaCk7XG5cbnZhciBfbG9kYXNoMyA9IHJlcXVpcmUoJ2xvZGFzaC50aHJvdHRsZScpO1xuXG52YXIgX2xvZGFzaDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2gzKTtcblxudmFyIF9wYXJlbnRTY3JvbGwgPSByZXF1aXJlKCcuL3V0aWxzL3BhcmVudFNjcm9sbCcpO1xuXG52YXIgX3BhcmVudFNjcm9sbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJlbnRTY3JvbGwpO1xuXG52YXIgX2luVmlld3BvcnQgPSByZXF1aXJlKCcuL3V0aWxzL2luVmlld3BvcnQnKTtcblxudmFyIF9pblZpZXdwb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luVmlld3BvcnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBMYXp5TG9hZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMYXp5TG9hZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGF6eUxvYWQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eUxvYWQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExhenlMb2FkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGF6eUxvYWQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5sYXp5TG9hZEhhbmRsZXIgPSBfdGhpcy5sYXp5TG9hZEhhbmRsZXIuYmluZChfdGhpcyk7XG5cbiAgICBpZiAocHJvcHMudGhyb3R0bGUgPiAwKSB7XG4gICAgICBpZiAocHJvcHMuZGVib3VuY2UpIHtcbiAgICAgICAgX3RoaXMubGF6eUxvYWRIYW5kbGVyID0gKDAsIF9sb2Rhc2gyLmRlZmF1bHQpKF90aGlzLmxhenlMb2FkSGFuZGxlciwgcHJvcHMudGhyb3R0bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMubGF6eUxvYWRIYW5kbGVyID0gKDAsIF9sb2Rhc2g0LmRlZmF1bHQpKF90aGlzLmxhenlMb2FkSGFuZGxlciwgcHJvcHMudGhyb3R0bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0geyB2aXNpYmxlOiBmYWxzZSB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMYXp5TG9hZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fbW91bnRlZCA9IHRydWU7XG4gICAgICB2YXIgZXZlbnROb2RlID0gdGhpcy5nZXRFdmVudE5vZGUoKTtcblxuICAgICAgdGhpcy5sYXp5TG9hZEhhbmRsZXIoKTtcblxuICAgICAgaWYgKHRoaXMubGF6eUxvYWRIYW5kbGVyLmZsdXNoKSB7XG4gICAgICAgIHRoaXMubGF6eUxvYWRIYW5kbGVyLmZsdXNoKCk7XG4gICAgICB9XG5cbiAgICAgICgwLCBfZXZlbnRsaXN0ZW5lci5hZGQpKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMubGF6eUxvYWRIYW5kbGVyKTtcbiAgICAgICgwLCBfZXZlbnRsaXN0ZW5lci5hZGQpKGV2ZW50Tm9kZSwgJ3Njcm9sbCcsIHRoaXMubGF6eUxvYWRIYW5kbGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMubGF6eUxvYWRIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKF9uZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuIG5leHRTdGF0ZS52aXNpYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9tb3VudGVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5sYXp5TG9hZEhhbmRsZXIuY2FuY2VsKSB7XG4gICAgICAgIHRoaXMubGF6eUxvYWRIYW5kbGVyLmNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRldGFjaExpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEV2ZW50Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50Tm9kZSgpIHtcbiAgICAgIHJldHVybiAoMCwgX3BhcmVudFNjcm9sbDIuZGVmYXVsdCkoKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9mZnNldCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9mZnNldCA9IF9wcm9wcy5vZmZzZXQsXG4gICAgICAgICAgb2Zmc2V0VmVydGljYWwgPSBfcHJvcHMub2Zmc2V0VmVydGljYWwsXG4gICAgICAgICAgb2Zmc2V0SG9yaXpvbnRhbCA9IF9wcm9wcy5vZmZzZXRIb3Jpem9udGFsLFxuICAgICAgICAgIG9mZnNldFRvcCA9IF9wcm9wcy5vZmZzZXRUb3AsXG4gICAgICAgICAgb2Zmc2V0Qm90dG9tID0gX3Byb3BzLm9mZnNldEJvdHRvbSxcbiAgICAgICAgICBvZmZzZXRMZWZ0ID0gX3Byb3BzLm9mZnNldExlZnQsXG4gICAgICAgICAgb2Zmc2V0UmlnaHQgPSBfcHJvcHMub2Zmc2V0UmlnaHQsXG4gICAgICAgICAgdGhyZXNob2xkID0gX3Byb3BzLnRocmVzaG9sZDtcblxuXG4gICAgICB2YXIgX29mZnNldEFsbCA9IHRocmVzaG9sZCB8fCBvZmZzZXQ7XG4gICAgICB2YXIgX29mZnNldFZlcnRpY2FsID0gb2Zmc2V0VmVydGljYWwgfHwgX29mZnNldEFsbDtcbiAgICAgIHZhciBfb2Zmc2V0SG9yaXpvbnRhbCA9IG9mZnNldEhvcml6b250YWwgfHwgX29mZnNldEFsbDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBvZmZzZXRUb3AgfHwgX29mZnNldFZlcnRpY2FsLFxuICAgICAgICBib3R0b206IG9mZnNldEJvdHRvbSB8fCBfb2Zmc2V0VmVydGljYWwsXG4gICAgICAgIGxlZnQ6IG9mZnNldExlZnQgfHwgX29mZnNldEhvcml6b250YWwsXG4gICAgICAgIHJpZ2h0OiBvZmZzZXRSaWdodCB8fCBfb2Zmc2V0SG9yaXpvbnRhbFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsYXp5TG9hZEhhbmRsZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXp5TG9hZEhhbmRsZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuX21vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KCk7XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuICAgICAgdmFyIGV2ZW50Tm9kZSA9IHRoaXMuZ2V0RXZlbnROb2RlKCk7XG5cbiAgICAgIGlmICgoMCwgX2luVmlld3BvcnQyLmRlZmF1bHQpKG5vZGUsIGV2ZW50Tm9kZSwgb2Zmc2V0KSkge1xuICAgICAgICB2YXIgb25Db250ZW50VmlzaWJsZSA9IHRoaXMucHJvcHMub25Db250ZW50VmlzaWJsZTtcblxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiB0cnVlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAob25Db250ZW50VmlzaWJsZSkge1xuICAgICAgICAgICAgb25Db250ZW50VmlzaWJsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGV0YWNoTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoTGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGV2ZW50Tm9kZSA9IHRoaXMuZ2V0RXZlbnROb2RlKCk7XG5cbiAgICAgICgwLCBfZXZlbnRsaXN0ZW5lci5yZW1vdmUpKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMubGF6eUxvYWRIYW5kbGVyKTtcbiAgICAgICgwLCBfZXZlbnRsaXN0ZW5lci5yZW1vdmUpKGV2ZW50Tm9kZSwgJ3Njcm9sbCcsIHRoaXMubGF6eUxvYWRIYW5kbGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGhlaWdodCA9IF9wcm9wczIuaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoID0gX3Byb3BzMi53aWR0aDtcbiAgICAgIHZhciB2aXNpYmxlID0gdGhpcy5zdGF0ZS52aXNpYmxlO1xuXG5cbiAgICAgIHZhciBlbFN0eWxlcyA9IHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCB9O1xuICAgICAgdmFyIGVsQ2xhc3NlcyA9ICdMYXp5TG9hZCcgKyAodmlzaWJsZSA/ICcgaXMtdmlzaWJsZScgOiAnJykgKyAoY2xhc3NOYW1lID8gJyAnICsgY2xhc3NOYW1lIDogJycpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5lbGVtZW50VHlwZSwge1xuICAgICAgICBjbGFzc05hbWU6IGVsQ2xhc3NlcyxcbiAgICAgICAgc3R5bGU6IGVsU3R5bGVzXG4gICAgICB9LCB2aXNpYmxlICYmIF9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExhenlMb2FkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGF6eUxvYWQ7XG5cblxuTGF6eUxvYWQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGRlYm91bmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGVsZW1lbnRUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIG9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldEJvdHRvbTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldEhvcml6b250YWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRMZWZ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0UmlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRUb3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRWZXJ0aWNhbDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHRocmVzaG9sZDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHRocm90dGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgb25Db250ZW50VmlzaWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5MYXp5TG9hZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVsZW1lbnRUeXBlOiAnZGl2JyxcbiAgZGVib3VuY2U6IHRydWUsXG4gIG9mZnNldDogMCxcbiAgb2Zmc2V0Qm90dG9tOiAwLFxuICBvZmZzZXRIb3Jpem9udGFsOiAwLFxuICBvZmZzZXRMZWZ0OiAwLFxuICBvZmZzZXRSaWdodDogMCxcbiAgb2Zmc2V0VG9wOiAwLFxuICBvZmZzZXRWZXJ0aWNhbDogMCxcbiAgdGhyb3R0bGU6IDI1MFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL2xpYi9MYXp5TG9hZC5qc1xuLy8gbW9kdWxlIGlkID0gMzY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEVsZW1lbnRQb3NpdGlvbjtcbi8qXG4qIEZpbmRzIGVsZW1lbnQncyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgd2hvbGUgZG9jdW1lbnQsXG4qIHJhdGhlciB0aGFuIHRvIHRoZSB2aWV3cG9ydCBhcyBpdCBpcyB0aGUgY2FzZSB3aXRoIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5cbiovXG5mdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvbGliL3V0aWxzL2dldEVsZW1lbnRQb3NpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpblZpZXdwb3J0O1xuXG52YXIgX2dldEVsZW1lbnRQb3NpdGlvbiA9IHJlcXVpcmUoJy4vZ2V0RWxlbWVudFBvc2l0aW9uJyk7XG5cbnZhciBfZ2V0RWxlbWVudFBvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEVsZW1lbnRQb3NpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xufTtcblxuZnVuY3Rpb24gaW5WaWV3cG9ydChlbGVtZW50LCBjb250YWluZXIsIGN1c3RvbU9mZnNldCkge1xuICBpZiAoaXNIaWRkZW4oZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdG9wID0gdm9pZCAwO1xuICB2YXIgYm90dG9tID0gdm9pZCAwO1xuICB2YXIgbGVmdCA9IHZvaWQgMDtcbiAgdmFyIHJpZ2h0ID0gdm9pZCAwO1xuXG4gIGlmICh0eXBlb2YgY29udGFpbmVyID09PSAndW5kZWZpbmVkJyB8fCBjb250YWluZXIgPT09IHdpbmRvdykge1xuICAgIHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGJvdHRvbSA9IHRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICByaWdodCA9IGxlZnQgKyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY29udGFpbmVyUG9zaXRpb24gPSAoMCwgX2dldEVsZW1lbnRQb3NpdGlvbjIuZGVmYXVsdCkoY29udGFpbmVyKTtcblxuICAgIHRvcCA9IGNvbnRhaW5lclBvc2l0aW9uLnRvcDtcbiAgICBsZWZ0ID0gY29udGFpbmVyUG9zaXRpb24ubGVmdDtcbiAgICBib3R0b20gPSB0b3AgKyBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHJpZ2h0ID0gbGVmdCArIGNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHZhciBlbGVtZW50UG9zaXRpb24gPSAoMCwgX2dldEVsZW1lbnRQb3NpdGlvbjIuZGVmYXVsdCkoZWxlbWVudCk7XG5cbiAgcmV0dXJuIHRvcCA8PSBlbGVtZW50UG9zaXRpb24udG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBjdXN0b21PZmZzZXQudG9wICYmIGJvdHRvbSA+PSBlbGVtZW50UG9zaXRpb24udG9wIC0gY3VzdG9tT2Zmc2V0LmJvdHRvbSAmJiBsZWZ0IDw9IGVsZW1lbnRQb3NpdGlvbi5sZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aCArIGN1c3RvbU9mZnNldC5sZWZ0ICYmIHJpZ2h0ID49IGVsZW1lbnRQb3NpdGlvbi5sZWZ0IC0gY3VzdG9tT2Zmc2V0LnJpZ2h0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvbGliL3V0aWxzL2luVmlld3BvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDM2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHN0eWxlID0gZnVuY3Rpb24gc3R5bGUoZWxlbWVudCwgcHJvcCkge1xuICByZXR1cm4gdHlwZW9mIGdldENvbXB1dGVkU3R5bGUgIT09ICd1bmRlZmluZWQnID8gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApIDogZWxlbWVudC5zdHlsZVtwcm9wXTtcbn07XG5cbnZhciBvdmVyZmxvdyA9IGZ1bmN0aW9uIG92ZXJmbG93KGVsZW1lbnQpIHtcbiAgcmV0dXJuIHN0eWxlKGVsZW1lbnQsICdvdmVyZmxvdycpICsgc3R5bGUoZWxlbWVudCwgJ292ZXJmbG93LXknKSArIHN0eWxlKGVsZW1lbnQsICdvdmVyZmxvdy14Jyk7XG59O1xuXG52YXIgc2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gc2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICB2YXIgcGFyZW50ID0gZWxlbWVudDtcblxuICB3aGlsZSAocGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSB8fCBwYXJlbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKC8oc2Nyb2xsfGF1dG8pLy50ZXN0KG92ZXJmbG93KHBhcmVudCkpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNjcm9sbFBhcmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9wYXJlbnRTY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDM2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMzcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGF6eS1sb2FkL34vcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwgPSByZXF1aXJlKCdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnKTtcblxudmFyIF9yZXNpemVPYnNlcnZlclBvbHlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qIGVzbGludCBuby1kZWJ1Z2dlcjogXCJ3YXJuXCIgKi9cblxuXG4vKipcbiAqIFByZWRlZmluZWQgY29uc3RhbnRzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgY29uc3RhbnRzID0ge1xuICBvcmllbnRhdGlvbjoge1xuICAgIGhvcml6b250YWw6IHtcbiAgICAgIGRpbWVuc2lvbjogJ3dpZHRoJyxcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGNvb3JkaW5hdGU6ICd4J1xuICAgIH0sXG4gICAgdmVydGljYWw6IHtcbiAgICAgIGRpbWVuc2lvbjogJ2hlaWdodCcsXG4gICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogJ2JvdHRvbScsXG4gICAgICBjb29yZGluYXRlOiAneSdcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTbGlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTbGlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTbGlkZXIpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVGb3JtYXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBmb3JtYXQgPSBfdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIHJldHVybiBmb3JtYXQgPyBmb3JtYXQodmFsdWUpIDogdmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuc2xpZGVyKSB7XG4gICAgICAgIC8vIGZvciBzaGFsbG93IHJlbmRlcmluZ1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3JpZW50YXRpb24gPSBfdGhpcy5wcm9wcy5vcmllbnRhdGlvbjtcblxuICAgICAgdmFyIGRpbWVuc2lvbiA9ICgwLCBfdXRpbHMuY2FwaXRhbGl6ZSkoY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5kaW1lbnNpb24pO1xuICAgICAgdmFyIHNsaWRlclBvcyA9IF90aGlzLnNsaWRlclsnb2Zmc2V0JyArIGRpbWVuc2lvbl07XG4gICAgICB2YXIgaGFuZGxlUG9zID0gX3RoaXMuaGFuZGxlWydvZmZzZXQnICsgZGltZW5zaW9uXTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaW1pdDogc2xpZGVyUG9zIC0gaGFuZGxlUG9zLFxuICAgICAgICBncmFiOiBoYW5kbGVQb3MgLyAyXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlU3RhcnQgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZVN0YXJ0O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVFbmQpO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25DaGFuZ2VTdGFydCAmJiBvbkNoYW5nZVN0YXJ0KGUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZURyYWcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgdmFyIF9lJHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9lJHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NMaXN0ID0gX2UkdGFyZ2V0LmNsYXNzTGlzdCxcbiAgICAgICAgICBkYXRhc2V0ID0gX2UkdGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICAgIGlmICghb25DaGFuZ2UgfHwgY2xhc3NOYW1lID09PSAncmFuZ2VzbGlkZXJfX2xhYmVscycpIHJldHVybjtcblxuICAgICAgdmFyIHZhbHVlID0gX3RoaXMucG9zaXRpb24oZSk7XG5cbiAgICAgIGlmIChjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnRhaW5zKCdyYW5nZXNsaWRlcl9fbGFiZWwtaXRlbScpICYmIGRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KGRhdGFzZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSh2YWx1ZSwgZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DaGFuZ2VDb21wbGV0ZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlQ29tcGxldGU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkNoYW5nZUNvbXBsZXRlICYmIG9uQ2hhbmdlQ29tcGxldGUoZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLmhhbmRsZURyYWcpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLmhhbmRsZUVuZCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wcy5tYXgsXG4gICAgICAgICAgc3RlcCA9IF90aGlzJHByb3BzLnN0ZXAsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZTtcblxuICAgICAgdmFyIHNsaWRlclZhbHVlID0gdm9pZCAwO1xuXG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBzbGlkZXJWYWx1ZSA9IHZhbHVlICsgc3RlcCA+IG1heCA/IG1heCA6IHZhbHVlICsgc3RlcDtcbiAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShzbGlkZXJWYWx1ZSwgZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgc2xpZGVyVmFsdWUgPSB2YWx1ZSAtIHN0ZXAgPCBtaW4gPyBtaW4gOiB2YWx1ZSAtIHN0ZXA7XG4gICAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2Uoc2xpZGVyVmFsdWUsIGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGxpbWl0ID0gX3RoaXMuc3RhdGUubGltaXQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMyLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczIubWF4O1xuXG4gICAgICB2YXIgZGlmZk1heE1pbiA9IG1heCAtIG1pbjtcbiAgICAgIHZhciBkaWZmVmFsTWluID0gdmFsdWUgLSBtaW47XG4gICAgICB2YXIgcGVyY2VudGFnZSA9IGRpZmZWYWxNaW4gLyBkaWZmTWF4TWluO1xuICAgICAgdmFyIHBvcyA9IE1hdGgucm91bmQocGVyY2VudGFnZSAqIGxpbWl0KTtcblxuICAgICAgcmV0dXJuIHBvcztcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VmFsdWVGcm9tUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgbGltaXQgPSBfdGhpcy5zdGF0ZS5saW1pdDtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IF90aGlzJHByb3BzMy5vcmllbnRhdGlvbixcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzMy5tYXgsXG4gICAgICAgICAgc3RlcCA9IF90aGlzJHByb3BzMy5zdGVwO1xuXG4gICAgICB2YXIgcGVyY2VudGFnZSA9ICgwLCBfdXRpbHMuY2xhbXApKHBvcywgMCwgbGltaXQpIC8gKGxpbWl0IHx8IDEpO1xuICAgICAgdmFyIGJhc2VWYWwgPSBzdGVwICogTWF0aC5yb3VuZChwZXJjZW50YWdlICogKG1heCAtIG1pbikgLyBzdGVwKTtcbiAgICAgIHZhciB2YWx1ZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBiYXNlVmFsICsgbWluIDogbWF4IC0gYmFzZVZhbDtcblxuICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY2xhbXApKHZhbHVlLCBtaW4sIG1heCk7XG4gICAgfTtcblxuICAgIF90aGlzLnBvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBncmFiID0gX3RoaXMuc3RhdGUuZ3JhYjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IF90aGlzJHByb3BzNC5vcmllbnRhdGlvbixcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHM0LnJldmVyc2U7XG5cblxuICAgICAgdmFyIG5vZGUgPSBfdGhpcy5zbGlkZXI7XG4gICAgICB2YXIgY29vcmRpbmF0ZVN0eWxlID0gY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5jb29yZGluYXRlO1xuICAgICAgdmFyIGRpcmVjdGlvblN0eWxlID0gcmV2ZXJzZSA/IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0ucmV2ZXJzZURpcmVjdGlvbiA6IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uZGlyZWN0aW9uO1xuICAgICAgdmFyIGNsaWVudENvb3JkaW5hdGVTdHlsZSA9ICdjbGllbnQnICsgKDAsIF91dGlscy5jYXBpdGFsaXplKShjb29yZGluYXRlU3R5bGUpO1xuICAgICAgdmFyIGNvb3JkaW5hdGUgPSAhZS50b3VjaGVzID8gZVtjbGllbnRDb29yZGluYXRlU3R5bGVdIDogZS50b3VjaGVzWzBdW2NsaWVudENvb3JkaW5hdGVTdHlsZV07XG4gICAgICB2YXIgZGlyZWN0aW9uID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaXJlY3Rpb25TdHlsZV07XG4gICAgICB2YXIgcG9zID0gcmV2ZXJzZSA/IGRpcmVjdGlvbiAtIGNvb3JkaW5hdGUgLSBncmFiIDogY29vcmRpbmF0ZSAtIGRpcmVjdGlvbiAtIGdyYWI7XG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUZyb21Qb3NpdGlvbihwb3MpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLmNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgbGltaXQgPSBfdGhpcyRzdGF0ZS5saW1pdCxcbiAgICAgICAgICBncmFiID0gX3RoaXMkc3RhdGUuZ3JhYjtcbiAgICAgIHZhciBvcmllbnRhdGlvbiA9IF90aGlzLnByb3BzLm9yaWVudGF0aW9uO1xuXG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUZyb21Qb3NpdGlvbihwb3MpO1xuICAgICAgdmFyIHBvc2l0aW9uID0gX3RoaXMuZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWUpO1xuICAgICAgdmFyIGhhbmRsZVBvcyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBwb3NpdGlvbiArIGdyYWIgOiBwb3NpdGlvbjtcbiAgICAgIHZhciBmaWxsUG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGhhbmRsZVBvcyA6IGxpbWl0IC0gaGFuZGxlUG9zO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxsOiBmaWxsUG9zLFxuICAgICAgICBoYW5kbGU6IGhhbmRsZVBvcyxcbiAgICAgICAgbGFiZWw6IGhhbmRsZVBvc1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTGFiZWxzID0gZnVuY3Rpb24gKGxhYmVscykge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndWwnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoc2wpIHtcbiAgICAgICAgICAgIF90aGlzLmxhYmVscyA9IHNsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdyYW5nZXNsaWRlcl9fbGFiZWxzJylcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBsaW1pdDogMCxcbiAgICAgIGdyYWI6IDBcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbGlkZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaGFuZGxlVXBkYXRlKCk7XG4gICAgICB2YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwyLmRlZmF1bHQodGhpcy5oYW5kbGVVcGRhdGUpO1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNsaWRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IGxhYmVsL3Rvb2x0aXAgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IC0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtGb3JtYXR0ZWQgTnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgc2xpZGVyIHN0YXRlIG9uIGNoYW5nZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gbW91c2Vtb3ZlL21vdXNldXAgZXZlbnRzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGRyYWcvbW91c2Vtb3ZlIGV2ZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBtb3VzZW1vdmUvbW91c2V1cCBldmVudHNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBrZXkgZXZlbnRzIG9uIHRoZSBzbGlkZXIgaGFuZGxlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBvc2l0aW9uIG9mIHNsaWRlciBiYXNlZCBvbiBpdHMgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIC0gQ3VycmVudCB2YWx1ZSBvZiBzbGlkZXJcbiAgICAgKiBAcmV0dXJuIHtwb3NpdGlvbn0gcG9zIC0gQ2FsY3VsYXRlZCBwb3NpdGlvbiBvZiBzbGlkZXIgYmFzZWQgb24gdmFsdWVcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIHBvc2l0aW9uIG9mIHNsaWRlciB0byBzbGlkZXIgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHBvcyAtIEN1cnJlbnQgcG9zaXRpb24vY29vcmRpbmF0ZXMgb2Ygc2xpZGVyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB2YWx1ZSAtIFNsaWRlciB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gb2Ygc2xpZGVyIGJhc2VkIG9uIHZhbHVlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7bnVtYmVyfSB2YWx1ZSAtIFNsaWRlciB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBHcmFiIGNvb3JkaW5hdGVzIG9mIHNsaWRlclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcG9zIC0gUG9zaXRpb24gb2JqZWN0XG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIFNsaWRlciBmaWxsL2hhbmRsZSBjb29yZGluYXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgb3JpZW50YXRpb24gPSBfcHJvcHMub3JpZW50YXRpb24sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICB0b29sdGlwID0gX3Byb3BzLnRvb2x0aXAsXG4gICAgICAgICAgcmV2ZXJzZSA9IF9wcm9wcy5yZXZlcnNlLFxuICAgICAgICAgIGxhYmVscyA9IF9wcm9wcy5sYWJlbHMsXG4gICAgICAgICAgbWluID0gX3Byb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfcHJvcHMubWF4LFxuICAgICAgICAgIGhhbmRsZUxhYmVsID0gX3Byb3BzLmhhbmRsZUxhYmVsO1xuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuc3RhdGUuYWN0aXZlO1xuXG4gICAgICB2YXIgZGltZW5zaW9uID0gY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5kaW1lbnNpb247XG4gICAgICB2YXIgZGlyZWN0aW9uID0gcmV2ZXJzZSA/IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0ucmV2ZXJzZURpcmVjdGlvbiA6IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uZGlyZWN0aW9uO1xuICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgY29vcmRzID0gdGhpcy5jb29yZGluYXRlcyhwb3NpdGlvbik7XG4gICAgICB2YXIgZmlsbFN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBkaW1lbnNpb24sIGNvb3Jkcy5maWxsICsgJ3B4Jyk7XG4gICAgICB2YXIgaGFuZGxlU3R5bGUgPSBfZGVmaW5lUHJvcGVydHkoe30sIGRpcmVjdGlvbiwgY29vcmRzLmhhbmRsZSArICdweCcpO1xuICAgICAgdmFyIHNob3dUb29sdGlwID0gdG9vbHRpcCAmJiBhY3RpdmU7XG5cbiAgICAgIHZhciBsYWJlbEl0ZW1zID0gW107XG4gICAgICB2YXIgbGFiZWxLZXlzID0gT2JqZWN0LmtleXMobGFiZWxzKTtcblxuICAgICAgaWYgKGxhYmVsS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxhYmVsS2V5cyA9IGxhYmVsS2V5cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyBhIC0gYiA6IGIgLSBhO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBsYWJlbEtleXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBsYWJlbFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZShrZXkpO1xuICAgICAgICAgICAgdmFyIGxhYmVsQ29vcmRzID0gdGhpcy5jb29yZGluYXRlcyhsYWJlbFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHZhciBsYWJlbFN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIGxhYmVsQ29vcmRzLmxhYmVsICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgIGxhYmVsSXRlbXMucHVzaChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgncmFuZ2VzbGlkZXJfX2xhYmVsLWl0ZW0nKSxcbiAgICAgICAgICAgICAgICAnZGF0YS12YWx1ZSc6IGtleSxcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVEcmFnLFxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVTdGFydCxcbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgICAgICAgICBzdHlsZTogbGFiZWxTdHlsZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYmVsc1trZXldXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihzKSB7XG4gICAgICAgICAgICBfdGhpczIuc2xpZGVyID0gcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgncmFuZ2VzbGlkZXInLCAncmFuZ2VzbGlkZXItJyArIG9yaWVudGF0aW9uLCB7ICdyYW5nZXNsaWRlci1yZXZlcnNlJzogcmV2ZXJzZSB9LCBjbGFzc05hbWUpLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZURyYWcsXG4gICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVFbmQsXG4gICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBtaW4sXG4gICAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBtYXgsXG4gICAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB2YWx1ZSxcbiAgICAgICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19maWxsJywgc3R5bGU6IGZpbGxTdHlsZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoc2gpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLmhhbmRsZSA9IHNoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19oYW5kbGUnLFxuICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlU3RhcnQsXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVEcmFnLFxuICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVFbmQsXG4gICAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgIHN0eWxlOiBoYW5kbGVTdHlsZSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93VG9vbHRpcCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnRvb2x0aXAgPSBzdDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncmFuZ2VzbGlkZXJfX2hhbmRsZS10b29sdGlwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRm9ybWF0KHZhbHVlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19oYW5kbGUtbGFiZWwnIH0sXG4gICAgICAgICAgICBoYW5kbGVMYWJlbFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgbGFiZWxzID8gdGhpcy5yZW5kZXJMYWJlbHMobGFiZWxJdGVtcykgOiBudWxsXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTbGlkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TbGlkZXIucHJvcFR5cGVzID0ge1xuICBtaW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtYXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzdGVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvcmllbnRhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvb2x0aXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcmV2ZXJzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsYWJlbHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBoYW5kbGVMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZvcm1hdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZVN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlQ29tcGxldGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxMDAsXG4gIHN0ZXA6IDEsXG4gIHZhbHVlOiAwLFxuICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICB0b29sdGlwOiB0cnVlLFxuICByZXZlcnNlOiBmYWxzZSxcbiAgbGFiZWxzOiB7fSxcbiAgaGFuZGxlTGFiZWw6ICcnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2xpZGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvUmFuZ2VzbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1Jhbmdlc2xpZGVyID0gcmVxdWlyZSgnLi9SYW5nZXNsaWRlcicpO1xuXG52YXIgX1Jhbmdlc2xpZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jhbmdlc2xpZGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1Jhbmdlc2xpZGVyMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuZXhwb3J0cy5jbGFtcCA9IGNsYW1wO1xuLyoqXG4gKiBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBzdHJpbmdcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IC0gU3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gU3RyaW5nIHdpdGggZmlyc3QgbGV0dGVyIGNhcGl0YWxpemVkXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpO1xufVxuXG4vKipcbiAqIENsYW1wIHBvc2l0aW9uIGJldHdlZW4gYSByYW5nZVxuICogQHBhcmFtICB7bnVtYmVyfSAtIFZhbHVlIHRvIGJlIGNsYW1wZWRcbiAqIEBwYXJhbSAge251bWJlcn0gLSBNaW5pbXVtIHZhbHVlIGluIHJhbmdlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IC0gTWF4aW11bSB2YWx1ZSBpbiByYW5nZVxuICogQHJldHVybiB7bnVtYmVyfSAtIENsYW1wZWQgdmFsdWVcbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmFuZ2VzbGlkZXIvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbC5SZXNpemVPYnNlcnZlciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxyXG4gICAgICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBUaGVzZSBpbXBsZW1lbnRhdGlvbnMgYXJlIG5vdCBtZWFudCB0byBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIFJlc2l6ZU9ic2VydmVyXHJcbiAgICAgKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gICAgICovXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jLCB2YWxpZC1qc2RvYyAqL1xyXG4gICAgdmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIGluZGV4IGluIHByb3ZpZGVkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGtleS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhcnJcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SW5kZXgoYXJyLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnlbMF0gPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzFdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX19baW5kZXhdWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZW50cmllcywga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBbY3R4PW51bGxdXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4ID09PSB2b2lkIDApIHsgY3R4ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBlbnRyeVsxXSwgZW50cnlbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgfSkoKTtcblxuICAgIC8qKlxyXG4gICAgICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAgICAgKi9cclxuICAgIHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA9PT0gZG9jdW1lbnQ7XG5cbiAgICAvLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gICAgdmFyIGdsb2JhbCQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgICAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxuICAgIH0pKCk7XG5cbiAgICAvKipcclxuICAgICAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAgICAgKiBmaXJzdCBvbmUgaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICAgICAqL1xyXG4gICAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvLyBJdCdzIHJlcXVpcmVkIHRvIHVzZSBhIGJvdW5kZWQgZnVuY3Rpb24gYmVjYXVzZSBJRSBzb21ldGltZXMgdGhyb3dzXHJcbiAgICAgICAgICAgIC8vIGFuIFwiSW52YWxpZCBjYWxsaW5nIG9iamVjdFwiIGVycm9yIGlmIHJBRiBpcyBpbnZva2VkIHdpdGhvdXQgdGhlIGdsb2JhbFxyXG4gICAgICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQoZ2xvYmFsJDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG4gICAgfSkoKTtcblxuICAgIC8vIERlZmluZXMgbWluaW11bSB0aW1lb3V0IGJlZm9yZSBhZGRpbmcgYSB0cmFpbGluZyBjYWxsLlxyXG4gICAgdmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGVuc3VyZXMgdGhhdCBwcm92aWRlZCBjYWxsYmFjayB3aWxsIGJlXHJcbiAgICAgKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBkZWxheSBwZXJpb2QuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgICAgICB2YXIgbGVhZGluZ0NhbGwgPSBmYWxzZSwgdHJhaWxpbmdDYWxsID0gZmFsc2UsIGxhc3RDYWxsVGltZSA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICAgICAqIHRoZSBcInByb3h5XCIgd2FzIGNhbGxlZCBkdXJpbmcgY3VycmVudCByZXF1ZXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVBlbmRpbmcoKSB7XHJcbiAgICAgICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgcHJveHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICAgICAqIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGRlbGVnYXRpbmcgaXQgdG8gdGhlXHJcbiAgICAgICAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMShyZXNvbHZlUGVuZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNjaGVkdWxlcyBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5KCkge1xyXG4gICAgICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWplY3QgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGNhbGxzLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzbyB0aGVyZSBpcyBhIGNoYW5jZSB0aGF0IHdlIG1pZ2h0IG1pc3Mgb25lIGlmIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm94eTtcclxuICAgIH1cblxuICAgIC8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgdmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcclxuICAgIC8vIEEgbGlzdCBvZiBzdWJzdHJpbmdzIG9mIENTUyBwcm9wZXJ0aWVzIHVzZWQgdG8gZmluZCB0cmFuc2l0aW9uIGV2ZW50cyB0aGF0XHJcbiAgICAvLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxuICAgIHZhciB0cmFuc2l0aW9uS2V5cyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdzaXplJywgJ3dlaWdodCddO1xyXG4gICAgLy8gQ2hlY2sgaWYgTXV0YXRpb25PYnNlcnZlciBpcyBhdmFpbGFibGUuXHJcbiAgICB2YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuICAgIC8qKlxyXG4gICAgICogU2luZ2xldG9uIGNvbnRyb2xsZXIgY2xhc3Mgd2hpY2ggaGFuZGxlcyB1cGRhdGVzIG9mIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlcy5cclxuICAgICAqL1xyXG4gICAgdmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtNdXRhdGlvbk9ic2VydmVyfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZlclNQST59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmRfID0gdGhpcy5vblRyYW5zaXRpb25FbmRfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgYWRkZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdF8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSByZW1vdmVkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2JzZXJ2ZXIgaWYgaXQncyBwcmVzZW50IGluIHJlZ2lzdHJ5LlxyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdF8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICAgICAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAvLyBDb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYXMgdGhlcmUgbWlnaHRcclxuICAgICAgICAgICAgLy8gYmUgZnV0dXJlIG9uZXMgY2F1c2VkIGJ5IENTUyB0cmFuc2l0aW9ucy5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgZXZlcnkgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdCBhbmQgbm90aWZpZXMgdGhlbSBvZiBxdWV1ZWRcclxuICAgICAgICAgKiBlbnRyaWVzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIENvbGxlY3Qgb2JzZXJ2ZXJzIHRoYXQgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlT2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfLmZpbHRlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBEZWxpdmVyIG5vdGlmaWNhdGlvbnMgaW4gYSBzZXBhcmF0ZSBjeWNsZSBpbiBvcmRlciB0byBhdm9pZCBhbnlcclxuICAgICAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgICAgICAvLyBSZXNpemVPYnNlcnZlciBhcmUgdHJhY2tpbmcgdGhlIHNhbWUgZWxlbWVudCBhbmQgdGhlIGNhbGxiYWNrIG9mIG9uZVxyXG4gICAgICAgICAgICAvLyBvZiB0aGVtIGNoYW5nZXMgY29udGVudCBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCB0YXJnZXQuIFNvbWV0aW1lc1xyXG4gICAgICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgIGFjdGl2ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuYnJvYWRjYXN0QWN0aXZlKCk7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlT2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWFsaXplcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN1YnNjcmlwdGlvbiB0byB0aGUgXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaXMgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yXHJcbiAgICAgICAgICAgIC8vIGRlbGF5ZWQgdHJhbnNpdGlvbnMuIFRoaXMgd2F5IGl0J3MgcG9zc2libGUgdG8gY2FwdHVyZSBhdCBsZWFzdCB0aGVcclxuICAgICAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8ub2JzZXJ2ZShkb2N1bWVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IHJlbW92ZWQuXHJcbiAgICAgICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0aW9uc09ic2VydmVyXykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbkV2ZW50fSBldmVudFxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kXyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgX2IgPSBfYS5wcm9wZXJ0eU5hbWUsIHByb3BlcnR5TmFtZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iO1xyXG4gICAgICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhfnByb3BlcnR5TmFtZS5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaXNSZWZsb3dQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VfKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZV87XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIncyBpbnN0YW5jZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcclxuICAgIH0oKSk7XG5cbiAgICAvKipcclxuICAgICAqIERlZmluZXMgbm9uLXdyaXRhYmxlL2VudW1lcmFibGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0IG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZC5cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRhcmdldCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHZhciBkZWZpbmVDb25maWd1cmFibGUgPSAoZnVuY3Rpb24gKHRhcmdldCwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJvcHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wc1trZXldLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9KTtcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICB2YXIgZ2V0V2luZG93T2YgPSAoZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIE5vZGUsIHdoaWNoIG1lYW5zIHRoYXQgaXRcclxuICAgICAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGdsb2JhbCBvYmplY3QuXHJcbiAgICAgICAgdmFyIG93bmVyR2xvYmFsID0gdGFyZ2V0ICYmIHRhcmdldC5vd25lckRvY3VtZW50ICYmIHRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAgICAgLy8gcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAgICByZXR1cm4gb3duZXJHbG9iYWwgfHwgZ2xvYmFsJDE7XHJcbiAgICB9KTtcblxuICAgIC8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIGVtcHR5UmVjdCA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBwcm92aWRlZCBzdHJpbmcgdG8gYSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0cyBib3JkZXJzIHNpemUgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICAgICAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwb3NpdGlvbnMgLSBCb3JkZXJzIHBvc2l0aW9ucyAodG9wLCByaWdodCwgLi4uKVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpemUgKyB0b0Zsb2F0KHZhbHVlKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFkZGluZ3Moc3R5bGVzKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICAgICAgdmFyIHBhZGRpbmdzID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwb3NpdGlvbnNfMSA9IHBvc2l0aW9uczsgX2kgPCBwb3NpdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ3BhZGRpbmctJyArIHBvc2l0aW9uXTtcclxuICAgICAgICAgICAgcGFkZGluZ3NbcG9zaXRpb25dID0gdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYWRkaW5ncztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBTVkcgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gICAgICogICAgICB0byBiZSBjYWxjdWxhdGVkLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgYmJveCA9IHRhcmdldC5nZXRCQm94KCk7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGZvciB3aGljaCB0byBjYWxjdWxhdGUgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAgICAgLy8gdXNlZCBleGNsdXNpdmVseSBhcyB0aGV5IHByb3ZpZGUgcm91bmRlZCB2YWx1ZXMuXHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gdGFyZ2V0LmNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcclxuICAgICAgICAvLyB0aGFuIDAuNSB3aWxsIGJlIGRpc2NhcmRlZCBhcyB3ZWxsLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXHJcbiAgICAgICAgLy8gdGhvc2UgY2FzZXMgYW5kIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBlcmZvcm0gYSBwcmVjaXNlIGFuZCBwZXJmb3JtYW5jZVxyXG4gICAgICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cclxuICAgICAgICBpZiAoIWNsaWVudFdpZHRoICYmICFjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IGdldFdpbmRvd09mKHRhcmdldCkuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xyXG4gICAgICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICAgICAgdmFyIGhvcml6UGFkID0gcGFkZGluZ3MubGVmdCArIHBhZGRpbmdzLnJpZ2h0O1xyXG4gICAgICAgIHZhciB2ZXJ0UGFkID0gcGFkZGluZ3MudG9wICsgcGFkZGluZ3MuYm90dG9tO1xyXG4gICAgICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgICAgIC8vIG9ubHkgZGltZW5zaW9ucyBhdmFpbGFibGUgdG8gSlMgdGhhdCBjb250YWluIG5vbi1yb3VuZGVkIHZhbHVlcy4gSXQgY291bGRcclxuICAgICAgICAvLyBiZSBwb3NzaWJsZSB0byB1dGlsaXplIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaWYgb25seSBpdCdzIGRhdGEgd2Fzbid0XHJcbiAgICAgICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoc3R5bGVzLndpZHRoKSwgaGVpZ2h0ID0gdG9GbG9hdChzdHlsZXMuaGVpZ2h0KTtcclxuICAgICAgICAvLyBXaWR0aCAmIGhlaWdodCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHdoZW4gdGhlICdib3JkZXItYm94JyBib3hcclxuICAgICAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgICAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcbiAgICAgICAgICAgIC8vIEZvbGxvd2luZyBjb25kaXRpb25zIGFyZSByZXF1aXJlZCB0byBoYW5kbGUgSW50ZXJuZXQgRXhwbG9yZXIgd2hpY2hcclxuICAgICAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXZSBjYW4gc2F5IHRoYXQgaWYgQ1NTIGRpbWVuc2lvbnMgKyBwYWRkaW5ncyBhcmUgZXF1YWwgdG8gdGhlIFwiY2xpZW50XCJcclxuICAgICAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpICE9PSBjbGllbnRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgIT09IGNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgICAgIC8vIGNsaWVudFtXaWR0aC9IZWlnaHRdIHByb3BlcnRpZXMgcmVwcmVzZW50IHZpZXdwb3J0IGFyZWEgb2YgdGhlIHdpbmRvdy5cclxuICAgICAgICAvLyBCZXNpZGVzLCBpdCdzIGFzIHdlbGwgbm90IG5lY2Vzc2FyeSBhcyB0aGUgPGh0bWw+IGl0c2VsZiBuZWl0aGVyIGhhc1xyXG4gICAgICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgICAgICBpZiAoIWlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgLy8gSW4gc29tZSBicm93c2VycyAob25seSBpbiBGaXJlZm94LCBhY3R1YWxseSkgQ1NTIHdpZHRoICYgaGVpZ2h0XHJcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgICAgIC8vIGJhcnMgYXJlIHRoZSBvbmx5IGRpZmZlcmVuY2UgYmV0d2VlbiByb3VuZGVkIGRpbWVuc2lvbnMgKyBwYWRkaW5nc1xyXG4gICAgICAgICAgICAvLyBhbmQgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLCB0aG91Z2ggdGhhdCBpcyBub3QgYWx3YXlzIHRydWUgaW4gQ2hyb21lLlxyXG4gICAgICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGhvcml6U2Nyb2xsYmFyID0gTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAtIGNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgLy8gQ2hyb21lIGhhcyBhIHJhdGhlciB3ZWlyZCByb3VuZGluZyBvZiBcImNsaWVudFwiIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxyXG4gICAgICAgICAgICAvLyAzMTRweC4gQW5kIGl0IGRvZXNuJ3QgaGFwcGVuIGFsbCB0aGUgdGltZS4gU28ganVzdCBpZ25vcmUgdGhpcyBkZWx0YVxyXG4gICAgICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSB2ZXJ0U2Nyb2xsYmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhob3JpelNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQocGFkZGluZ3MubGVmdCwgcGFkZGluZ3MudG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHZhciBpc1NWR0dyYXBoaWNzRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU29tZSBicm93c2VycywgbmFtZWx5IElFIGFuZCBFZGdlLCBkb24ndCBoYXZlIHRoZSBTVkdHcmFwaGljc0VsZW1lbnRcclxuICAgICAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0dyYXBoaWNzRWxlbWVudDsgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXHJcbiAgICAgICAgLy8gU1ZHRWxlbWVudCBhbmQgdGhhdCBpdCBoYXMgdGhlIFwiZ2V0QkJveFwiIG1ldGhvZC5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRhcmdldC5nZXRCQm94ID09PSAnZnVuY3Rpb24nKTsgfTtcclxuICAgIH0pKCk7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYSBkb2N1bWVudCBlbGVtZW50ICg8aHRtbD4pLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPT09IGdldFdpbmRvd09mKHRhcmdldCkuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGFuIGFwcHJvcHJpYXRlIGNvbnRlbnQgcmVjdGFuZ2xlIGZvciBwcm92aWRlZCBodG1sIG9yIHN2ZyBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTVkdHcmFwaGljc0VsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyByZWN0YW5nbGUgd2l0aCBhbiBpbnRlcmZhY2Ugb2YgdGhlIERPTVJlY3RSZWFkT25seS5cclxuICAgICAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIE9iamVjdCB3aXRoIHJlY3RhbmdsZSdzIHgveSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlYWRPbmx5UmVjdChfYSkge1xyXG4gICAgICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgICAgICAvLyBJZiBET01SZWN0UmVhZE9ubHkgaXMgYXZhaWxhYmxlIHVzZSBpdCBhcyBhIHByb3RvdHlwZSBmb3IgdGhlIHJlY3RhbmdsZS5cclxuICAgICAgICB2YXIgQ29uc3RyID0gdHlwZW9mIERPTVJlY3RSZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcgPyBET01SZWN0UmVhZE9ubHkgOiBPYmplY3Q7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgICAgIC8vIFJlY3RhbmdsZSdzIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUuXHJcbiAgICAgICAgZGVmaW5lQ29uZmlndXJhYmxlKHJlY3QsIHtcclxuICAgICAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgICAgICByaWdodDogeCArIHdpZHRoLFxyXG4gICAgICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgICAgIGxlZnQ6IHhcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBSZWN0YW5nbGUncyB3aWR0aC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICAgICAqIHByb3ZpZGVkIERPTSBlbGVtZW50IGFuZCBmb3Iga2VlcGluZyB0cmFjayBvZiBpdCdzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIHZhciBSZXNpemVPYnNlcnZhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge0RPTVJlY3RJbml0fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgY29udGVudCByZWN0YW5nbGUgYW5kIHRlbGxzIHdoZXRoZXIgaXQncyB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllc1xyXG4gICAgICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZ2V0Q29udGVudFJlY3QodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVjdC53aWR0aCAhPT0gdGhpcy5icm9hZGNhc3RXaWR0aCB8fFxyXG4gICAgICAgICAgICAgICAgcmVjdC5oZWlnaHQgIT09IHRoaXMuYnJvYWRjYXN0SGVpZ2h0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgJ2Jyb2FkY2FzdFdpZHRoJyBhbmQgJ2Jyb2FkY2FzdEhlaWdodCcgcHJvcGVydGllcyB3aXRoIGEgZGF0YVxyXG4gICAgICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH0gTGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmNvbnRlbnRSZWN0XztcclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xyXG4gICAgfSgpKTtcblxuICAgIHZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0aGF0IGlzIGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgICAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gRGF0YSBvZiB0aGUgZWxlbWVudCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0LCByZWN0SW5pdCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFJlY3QgPSBjcmVhdGVSZWFkT25seVJlY3QocmVjdEluaXQpO1xyXG4gICAgICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgICAgICAvLyBhbmQgYXJlIGFsc28gbm90IGVudW1lcmFibGUgaW4gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgICAgICAvLyBwcml2YXRlIFdlYWtNYXAgc3RvcmFnZSB3aGljaCBtYXkgY2F1c2UgbWVtb3J5IGxlYWtzIGluIGJyb3dzZXJzIHRoYXRcclxuICAgICAgICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgY29sbGVjdGlvbnMuXHJcbiAgICAgICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xyXG4gICAgfSgpKTtcblxuICAgIHZhciBSZXNpemVPYnNlcnZlclNQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZFxyXG4gICAgICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBDb250cm9sbGVyIGluc3RhbmNlIHdoaWNoXHJcbiAgICAgICAgICogICAgICBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHVwZGF0ZXMgb2Ygb2JzZXJ2ZXIuXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICAgICAqICAgICAgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb2xsZWN0aW9uIG9mIHJlc2l6ZSBvYnNlcnZhdGlvbnMgdGhhdCBoYXZlIGRldGVjdGVkIGNoYW5nZXMgaW4gZGltZW5zaW9uc1xyXG4gICAgICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge01hcDxFbGVtZW50LCBSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18gPSBuZXcgTWFwU2hpbSgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2YXRpb25zLnNldCh0YXJnZXQsIG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5hZGRPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVmcmVzaCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2xsZWN0cyBvYnNlcnZhdGlvbiBpbnN0YW5jZXMgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiB3aGljaCBoYXMgY2hhbmdlZFxyXG4gICAgICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmF0aW9uLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZXMgaW5pdGlhbCBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgbGlzdCBvZiBSZXNpemVPYnNlcnZlckVudHJ5XHJcbiAgICAgICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmJyb2FkY2FzdEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBvYnNlcnZlciBkb2Vzbid0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgUmVzaXplT2JzZXJ2ZXJFbnRyeSBpbnN0YW5jZSBmb3IgZXZlcnkgYWN0aXZlIG9ic2VydmF0aW9uLlxyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5tYXAoZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja18uY2FsbChjdHgsIGVudHJpZXMsIGN0eCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmNsZWFyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgd2hldGhlciBvYnNlcnZlciBoYXMgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxuICAgIH0oKSk7XG5cbiAgICAvLyBSZWdpc3RyeSBvZiBpbnRlcm5hbCBvYnNlcnZlcnMuIElmIFdlYWtNYXAgaXMgbm90IGF2YWlsYWJsZSB1c2UgY3VycmVudCBzaGltXHJcbiAgICAvLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbiAgICAvLyBjYW4ndCBiZSBmdWxseSBwb2x5ZmlsbGVkIGFueXdheS5cclxuICAgIHZhciBvYnNlcnZlcnMgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgV2Vha01hcCgpIDogbmV3IE1hcFNoaW0oKTtcclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogZXhwb3Npbmcgb25seSB0aG9zZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHNwZWMuXHJcbiAgICAgKi9cclxuICAgIHZhciBSZXNpemVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuXHJcbiAgICAgICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgdGhpcyk7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zZXQodGhpcywgb2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9KCkpO1xyXG4gICAgLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgW1xyXG4gICAgICAgICdvYnNlcnZlJyxcclxuICAgICAgICAndW5vYnNlcnZlJyxcclxuICAgICAgICAnZGlzY29ubmVjdCdcclxuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIChfYSA9IG9ic2VydmVycy5nZXQodGhpcykpW21ldGhvZF0uYXBwbHkoX2EsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xuXG4gICAgdmFyIGluZGV4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfSkoKTtcblxuICAgIHJldHVybiBpbmRleDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5qc1xuLy8gbW9kdWxlIGlkID0gMzc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIHN0eWxlcyA9IHtcbiAgYmFzZToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBNc1VzZXJTZWxlY3Q6ICdub25lJ1xuICB9LFxuICB0b3A6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIHRvcDogJy01cHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGN1cnNvcjogJ3Jvdy1yZXNpemUnXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIHJpZ2h0OiAnLTVweCcsXG4gICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICBib3R0b206ICctNXB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBjdXJzb3I6ICdyb3ctcmVzaXplJ1xuICB9LFxuICBsZWZ0OiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGxlZnQ6ICctNXB4JyxcbiAgICBjdXJzb3I6ICdjb2wtcmVzaXplJ1xuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcmlnaHQ6ICctMTBweCcsXG4gICAgdG9wOiAnLTEwcHgnLFxuICAgIGN1cnNvcjogJ25lLXJlc2l6ZSdcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAnLTEwcHgnLFxuICAgIGJvdHRvbTogJy0xMHB4JyxcbiAgICBjdXJzb3I6ICdzZS1yZXNpemUnXG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICctMTBweCcsXG4gICAgYm90dG9tOiAnLTEwcHgnLFxuICAgIGN1cnNvcjogJ3N3LXJlc2l6ZSdcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJy0xMHB4JyxcbiAgICB0b3A6ICctMTBweCcsXG4gICAgY3Vyc29yOiAnbnctcmVzaXplJ1xuICB9XG59O1xuXG52YXIgUmVzaXplciA9IChmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlcy5iYXNlLCBzdHlsZXNbcHJvcHMuZGlyZWN0aW9uXSwgcHJvcHMucmVwbGFjZVN0eWxlcyB8fCB7fSksXG4gICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICBwcm9wcy5vblJlc2l6ZVN0YXJ0KGUsIHByb3BzLmRpcmVjdGlvbik7XG4gICAgICB9LFxuICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICBwcm9wcy5vblJlc2l6ZVN0YXJ0KGUsIHByb3BzLmRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9wcy5jaGlsZHJlblxuICApO1xufSk7XG5cbnZhciB1c2VyU2VsZWN0Tm9uZSA9IHtcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBNb3pVc2VyU2VsZWN0OiAnbm9uZScsXG4gIFdlYmtpdFVzZXJTZWxlY3Q6ICdub25lJyxcbiAgTXNVc2VyU2VsZWN0OiAnbm9uZSdcbn07XG5cbnZhciB1c2VyU2VsZWN0QXV0byA9IHtcbiAgdXNlclNlbGVjdDogJ2F1dG8nLFxuICBNb3pVc2VyU2VsZWN0OiAnYXV0bycsXG4gIFdlYmtpdFVzZXJTZWxlY3Q6ICdhdXRvJyxcbiAgTXNVc2VyU2VsZWN0OiAnYXV0bydcbn07XG5cbnZhciBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG4sIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihuLCBtYXgpLCBtaW4pO1xufTtcbnZhciBzbmFwID0gZnVuY3Rpb24gc25hcChuLCBzaXplKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG4gLyBzaXplKSAqIHNpemU7XG59O1xuXG52YXIgZmluZENsb3Nlc3RTbmFwID0gZnVuY3Rpb24gZmluZENsb3Nlc3RTbmFwKG4sIHNuYXBBcnJheSkge1xuICByZXR1cm4gc25hcEFycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgIHJldHVybiBNYXRoLmFicyhjdXJyIC0gbikgPCBNYXRoLmFicyhwcmV2IC0gbikgPyBjdXJyIDogcHJldjtcbiAgfSk7XG59O1xuXG52YXIgZW5kc1dpdGggPSBmdW5jdGlvbiBlbmRzV2l0aChzdHIsIHNlYXJjaFN0cikge1xuICByZXR1cm4gc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gc2VhcmNoU3RyLmxlbmd0aCwgc2VhcmNoU3RyLmxlbmd0aCkgPT09IHNlYXJjaFN0cjtcbn07XG5cbnZhciBnZXRTdHJpbmdTaXplID0gZnVuY3Rpb24gZ2V0U3RyaW5nU2l6ZShuKSB7XG4gIGlmIChuLnRvU3RyaW5nKCkgPT09ICdhdXRvJykgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJ3B4JykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICclJykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICd2aCcpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAndncnKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJ3ZtYXgnKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJ3ZtaW4nKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgcmV0dXJuIG4gKyAncHgnO1xufTtcblxudmFyIGRlZmluZWRQcm9wcyA9IFsnc3R5bGUnLCAnY2xhc3NOYW1lJywgJ2dyaWQnLCAnc25hcCcsICdib3VuZHMnLCAnc2l6ZScsICdkZWZhdWx0U2l6ZScsICdtaW5XaWR0aCcsICdtaW5IZWlnaHQnLCAnbWF4V2lkdGgnLCAnbWF4SGVpZ2h0JywgJ2xvY2tBc3BlY3RSYXRpbycsICdsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoJywgJ2xvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0JywgJ2VuYWJsZScsICdoYW5kbGVTdHlsZXMnLCAnaGFuZGxlQ2xhc3NlcycsICdoYW5kbGVXcmFwcGVyU3R5bGUnLCAnaGFuZGxlV3JhcHBlckNsYXNzJywgJ2NoaWxkcmVuJywgJ29uUmVzaXplU3RhcnQnLCAnb25SZXNpemUnLCAnb25SZXNpemVTdG9wJywgJ2hhbmRsZUNvbXBvbmVudCcsICdzY2FsZScsICdyZXNpemVSYXRpbyddO1xuXG52YXIgYmFzZUNsYXNzTmFtZSA9ICdfX3Jlc2l6YWJsZV9iYXNlX18nO1xuXG52YXIgUmVzaXphYmxlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoUmVzaXphYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXNpemFibGUocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNpemFibGUpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVzaXphYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVzaXphYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Jlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHJlc2l6ZUN1cnNvcjogJ2F1dG8nLFxuICAgICAgd2lkdGg6IHR5cGVvZiAoX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS53aWR0aCkgPT09ICd1bmRlZmluZWQnID8gJ2F1dG8nIDogX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS53aWR0aCxcbiAgICAgIGhlaWdodDogdHlwZW9mIChfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLmhlaWdodCkgPT09ICd1bmRlZmluZWQnID8gJ2F1dG8nIDogX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS5oZWlnaHQsXG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICBvcmlnaW5hbDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZUV4dGVuZHNQcm9wcyhwcm9wcyk7XG4gICAgX3RoaXMub25SZXNpemVTdGFydCA9IF90aGlzLm9uUmVzaXplU3RhcnQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Nb3VzZU1vdmUgPSBfdGhpcy5vbk1vdXNlTW92ZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbk1vdXNlVXAgPSBfdGhpcy5vbk1vdXNlVXAuYmluZChfdGhpcyk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMub25Nb3VzZVVwKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF90aGlzLm9uTW91c2VVcCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgX3RoaXMub25Nb3VzZVVwKTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUmVzaXphYmxlLCBbe1xuICAgIGtleTogJ3VwZGF0ZUV4dGVuZHNQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUV4dGVuZHNQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5leHRlbmRzUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBpZiAoZGVmaW5lZFByb3BzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHJldHVybiBhY2M7XG4gICAgICAgIGFjY1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQYXJlbnRTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGFyZW50U2l6ZSgpIHtcbiAgICAgIHZhciBiYXNlID0gdGhpcy5iYXNlO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybiB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfTtcbiAgICAgIC8vIElORk86IFRvIGNhbGN1bGF0ZSBwYXJlbnQgd2lkdGggd2l0aCBmbGV4IGxheW91dFxuICAgICAgdmFyIHdyYXBDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB2YXIgd3JhcCA9IHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcDtcbiAgICAgIHZhciBtaW5XaWR0aCA9IGJhc2Uuc3R5bGUubWluV2lkdGg7XG4gICAgICBpZiAod3JhcCAhPT0gJ3dyYXAnKSB7XG4gICAgICAgIHdyYXBDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xuICAgICAgICAvLyBIQUNLOiBVc2UgcmVsYXRpdmUgdG8gZ2V0IHBhcmVudCBwYWRkaW5nIHNpemVcbiAgICAgIH1cbiAgICAgIGJhc2Uuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgYmFzZS5zdHlsZS5taW5XaWR0aCA9ICcxMDAlJztcbiAgICAgIHZhciBzaXplID0ge1xuICAgICAgICB3aWR0aDogYmFzZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBiYXNlLm9mZnNldEhlaWdodFxuICAgICAgfTtcbiAgICAgIGJhc2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgaWYgKHdyYXBDaGFuZ2VkKSB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXAgPSB3cmFwO1xuICAgICAgYmFzZS5zdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGggfHwgc2l6ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB8fCBzaXplLmhlaWdodFxuICAgICAgfSk7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgaWYgKCEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5iYXNlKSByZXR1cm47XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLCAwKSc7XG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICBlbGVtZW50LnN0eWxlLmZsZXggPSAnMCc7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYmFzZUNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0KSB7XG4gICAgICB0aGlzLnVwZGF0ZUV4dGVuZHNQcm9wcyhuZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIGJhc2UgPSB0aGlzLmJhc2U7XG5cbiAgICAgICAgaWYgKCFiYXNlIHx8ICFwYXJlbnQpIHJldHVybjtcbiAgICAgICAgaWYgKCEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICEoYmFzZSBpbnN0YW5jZW9mIE5vZGUpKSByZXR1cm47XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChiYXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxjdWxhdGVOZXdTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlTmV3U2l6ZShuZXdTaXplLCBraW5kKSB7XG4gICAgICB2YXIgcHJvcHNTaXplID0gdGhpcy5wcm9wc1NpemUgJiYgdGhpcy5wcm9wc1NpemVba2luZF07XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZVtraW5kXSA9PT0gJ2F1dG8nICYmIHRoaXMuc3RhdGUub3JpZ2luYWxba2luZF0gPT09IG5ld1NpemUgJiYgKHR5cGVvZiBwcm9wc1NpemUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzU2l6ZSA9PT0gJ2F1dG8nKSA/ICdhdXRvJyA6IG5ld1NpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemVTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoZXZlbnQsIGRpcmVjdGlvbikge1xuICAgICAgdmFyIGNsaWVudFggPSAwO1xuICAgICAgdmFyIGNsaWVudFkgPSAwO1xuICAgICAgaWYgKGV2ZW50Lm5hdGl2ZUV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICBjbGllbnRYID0gZXZlbnQubmF0aXZlRXZlbnQuY2xpZW50WDtcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50Lm5hdGl2ZUV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgLy8gV2hlbiB1c2VyIGNsaWNrIHdpdGggcmlnaHQgYnV0dG9uIHRoZSByZXNpemUgaXMgc3R1Y2sgaW4gcmVzaXppbmcgbW9kZVxuICAgICAgICAvLyB1bnRpbCB1c2VycyBjbGlja3MgYWdhaW4sIGRvbnQgY29udGludWUgaWYgcmlnaHQgY2xpY2sgaXMgdXNlZC5cbiAgICAgICAgLy8gSEFDSzogTW91c2VFdmVudCBkb2VzIG5vdCBoYXZlIGB3aGljaGAgZnJvbSBmbG93LWJpbiB2MC42OC5cbiAgICAgICAgaWYgKGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50Lm5hdGl2ZUV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICBjbGllbnRYID0gZXZlbnQubmF0aXZlRXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjbGllbnRZID0gZXZlbnQubmF0aXZlRXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVTdGFydCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQoZXZlbnQsIGRpcmVjdGlvbiwgdGhpcy5yZXNpemFibGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXggIzE2OFxuICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogdGhpcy5wcm9wcy5zaXplLmhlaWdodCB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc2l6ZS53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5zaXplLndpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB0aGlzLnByb3BzLnNpemUud2lkdGggfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgeDogY2xpZW50WCxcbiAgICAgICAgICB5OiBjbGllbnRZLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnNpemUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgIGlzUmVzaXppbmc6IHRydWUsXG4gICAgICAgIHJlc2l6ZUN1cnNvcjogd2luZG93LmdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3IsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNSZXNpemluZykgcmV0dXJuO1xuICAgICAgdmFyIGNsaWVudFggPSBldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgdmFyIGNsaWVudFkgPSBldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3N0YXRlLmRpcmVjdGlvbixcbiAgICAgICAgICBvcmlnaW5hbCA9IF9zdGF0ZS5vcmlnaW5hbCxcbiAgICAgICAgICB3aWR0aCA9IF9zdGF0ZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfc3RhdGUuaGVpZ2h0O1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvID0gX3Byb3BzLmxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgICBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCA9IF9wcm9wcy5sb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCxcbiAgICAgICAgICBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoID0gX3Byb3BzLmxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG5cbiAgICAgIHZhciBzY2FsZSA9IHRoaXMucHJvcHMuc2NhbGUgfHwgMTtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBtYXhXaWR0aCA9IF9wcm9wczIubWF4V2lkdGgsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3Byb3BzMi5tYXhIZWlnaHQsXG4gICAgICAgICAgbWluV2lkdGggPSBfcHJvcHMyLm1pbldpZHRoLFxuICAgICAgICAgIG1pbkhlaWdodCA9IF9wcm9wczIubWluSGVpZ2h0O1xuXG4gICAgICB2YXIgcmVzaXplUmF0aW8gPSB0aGlzLnByb3BzLnJlc2l6ZVJhdGlvIHx8IDE7XG5cbiAgICAgIC8vIFRPRE86IHJlZmFjdG9yXG4gICAgICB2YXIgcGFyZW50U2l6ZSA9IHRoaXMuZ2V0UGFyZW50U2l6ZSgpO1xuICAgICAgaWYgKG1heFdpZHRoICYmIHR5cGVvZiBtYXhXaWR0aCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgobWF4V2lkdGgsICclJykpIHtcbiAgICAgICAgdmFyIF9yYXRpbyA9IE51bWJlcihtYXhXaWR0aC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgbWF4V2lkdGggPSBwYXJlbnRTaXplLndpZHRoICogX3JhdGlvO1xuICAgICAgfVxuICAgICAgaWYgKG1heEhlaWdodCAmJiB0eXBlb2YgbWF4SGVpZ2h0ID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aChtYXhIZWlnaHQsICclJykpIHtcbiAgICAgICAgdmFyIF9yYXRpbzIgPSBOdW1iZXIobWF4SGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICBtYXhIZWlnaHQgPSBwYXJlbnRTaXplLmhlaWdodCAqIF9yYXRpbzI7XG4gICAgICB9XG4gICAgICBpZiAobWluV2lkdGggJiYgdHlwZW9mIG1pbldpZHRoID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aChtaW5XaWR0aCwgJyUnKSkge1xuICAgICAgICB2YXIgX3JhdGlvMyA9IE51bWJlcihtaW5XaWR0aC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgbWluV2lkdGggPSBwYXJlbnRTaXplLndpZHRoICogX3JhdGlvMztcbiAgICAgIH1cbiAgICAgIGlmIChtaW5IZWlnaHQgJiYgdHlwZW9mIG1pbkhlaWdodCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgobWluSGVpZ2h0LCAnJScpKSB7XG4gICAgICAgIHZhciBfcmF0aW80ID0gTnVtYmVyKG1pbkhlaWdodC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgbWluSGVpZ2h0ID0gcGFyZW50U2l6ZS5oZWlnaHQgKiBfcmF0aW80O1xuICAgICAgfVxuICAgICAgbWF4V2lkdGggPSB0eXBlb2YgbWF4V2lkdGggPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1heFdpZHRoKTtcbiAgICAgIG1heEhlaWdodCA9IHR5cGVvZiBtYXhIZWlnaHQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1heEhlaWdodCk7XG4gICAgICBtaW5XaWR0aCA9IHR5cGVvZiBtaW5XaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWluV2lkdGgpO1xuICAgICAgbWluSGVpZ2h0ID0gdHlwZW9mIG1pbkhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWluSGVpZ2h0KTtcblxuICAgICAgdmFyIHJhdGlvID0gdHlwZW9mIGxvY2tBc3BlY3RSYXRpbyA9PT0gJ251bWJlcicgPyBsb2NrQXNwZWN0UmF0aW8gOiBvcmlnaW5hbC53aWR0aCAvIG9yaWdpbmFsLmhlaWdodDtcbiAgICAgIHZhciBuZXdXaWR0aCA9IG9yaWdpbmFsLndpZHRoO1xuICAgICAgdmFyIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodDtcbiAgICAgIGlmICgvcmlnaHQvaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aCArIChjbGllbnRYIC0gb3JpZ2luYWwueCkgKiByZXNpemVSYXRpbyAvIHNjYWxlO1xuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSBuZXdIZWlnaHQgPSAobmV3V2lkdGggLSBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoKSAvIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAoL2xlZnQvaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aCAtIChjbGllbnRYIC0gb3JpZ2luYWwueCkgKiByZXNpemVSYXRpbyAvIHNjYWxlO1xuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSBuZXdIZWlnaHQgPSAobmV3V2lkdGggLSBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoKSAvIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAoL2JvdHRvbS9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQgKyAoY2xpZW50WSAtIG9yaWdpbmFsLnkpICogcmVzaXplUmF0aW8gLyBzY2FsZTtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykgbmV3V2lkdGggPSAobmV3SGVpZ2h0IC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQpICogcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuICAgICAgfVxuICAgICAgaWYgKC90b3AvaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0IC0gKGNsaWVudFkgLSBvcmlnaW5hbC55KSAqIHJlc2l6ZVJhdGlvIC8gc2NhbGU7XG4gICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIG5ld1dpZHRoID0gKG5ld0hlaWdodCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0KSAqIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgcGFyZW50TGVmdCA9IHBhcmVudFJlY3QubGVmdDtcbiAgICAgICAgICB2YXIgcGFyZW50VG9wID0gcGFyZW50UmVjdC50b3A7XG5cbiAgICAgICAgICB2YXIgX3Jlc2l6YWJsZSRnZXRCb3VuZGluID0gdGhpcy5yZXNpemFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgIF9sZWZ0ID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluLmxlZnQsXG4gICAgICAgICAgICAgIF90b3AgPSBfcmVzaXphYmxlJGdldEJvdW5kaW4udG9wO1xuXG4gICAgICAgICAgdmFyIGJvdW5kV2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGggKyAocGFyZW50TGVmdCAtIF9sZWZ0KTtcbiAgICAgICAgICB2YXIgYm91bmRIZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0ICsgKHBhcmVudFRvcCAtIF90b3ApO1xuICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBib3VuZFdpZHRoID8gbWF4V2lkdGggOiBib3VuZFdpZHRoO1xuICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBib3VuZEhlaWdodCA/IG1heEhlaWdodCA6IGJvdW5kSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYm91bmRzID09PSAnd2luZG93Jykge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgX3Jlc2l6YWJsZSRnZXRCb3VuZGluMiA9IHRoaXMucmVzaXphYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICBfbGVmdDIgPSBfcmVzaXphYmxlJGdldEJvdW5kaW4yLmxlZnQsXG4gICAgICAgICAgICAgIF90b3AyID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluMi50b3A7XG5cbiAgICAgICAgICB2YXIgX2JvdW5kV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIF9sZWZ0MjtcbiAgICAgICAgICB2YXIgX2JvdW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gX3RvcDI7XG4gICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCAmJiBtYXhXaWR0aCA8IF9ib3VuZFdpZHRoID8gbWF4V2lkdGggOiBfYm91bmRXaWR0aDtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgX2JvdW5kSGVpZ2h0ID8gbWF4SGVpZ2h0IDogX2JvdW5kSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYm91bmRzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldFJlY3QgPSB0aGlzLnByb3BzLmJvdW5kcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQ7XG4gICAgICAgIHZhciB0YXJnZXRUb3AgPSB0YXJnZXRSZWN0LnRvcDtcblxuICAgICAgICB2YXIgX3Jlc2l6YWJsZSRnZXRCb3VuZGluMyA9IHRoaXMucmVzaXphYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgX2xlZnQzID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluMy5sZWZ0LFxuICAgICAgICAgICAgX3RvcDMgPSBfcmVzaXphYmxlJGdldEJvdW5kaW4zLnRvcDtcblxuICAgICAgICBpZiAoISh0aGlzLnByb3BzLmJvdW5kcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgICB2YXIgX2JvdW5kV2lkdGgyID0gdGhpcy5wcm9wcy5ib3VuZHMub2Zmc2V0V2lkdGggKyAodGFyZ2V0TGVmdCAtIF9sZWZ0Myk7XG4gICAgICAgIHZhciBfYm91bmRIZWlnaHQyID0gdGhpcy5wcm9wcy5ib3VuZHMub2Zmc2V0SGVpZ2h0ICsgKHRhcmdldFRvcCAtIF90b3AzKTtcbiAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCAmJiBtYXhXaWR0aCA8IF9ib3VuZFdpZHRoMiA/IG1heFdpZHRoIDogX2JvdW5kV2lkdGgyO1xuICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgX2JvdW5kSGVpZ2h0MiA/IG1heEhlaWdodCA6IF9ib3VuZEhlaWdodDI7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wdXRlZE1pbldpZHRoID0gdHlwZW9mIG1pbldpZHRoID09PSAndW5kZWZpbmVkJyA/IDEwIDogbWluV2lkdGg7XG4gICAgICB2YXIgY29tcHV0ZWRNYXhXaWR0aCA9IHR5cGVvZiBtYXhXaWR0aCA9PT0gJ3VuZGVmaW5lZCcgfHwgbWF4V2lkdGggPCAwID8gbmV3V2lkdGggOiBtYXhXaWR0aDtcbiAgICAgIHZhciBjb21wdXRlZE1pbkhlaWdodCA9IHR5cGVvZiBtaW5IZWlnaHQgPT09ICd1bmRlZmluZWQnID8gMTAgOiBtaW5IZWlnaHQ7XG4gICAgICB2YXIgY29tcHV0ZWRNYXhIZWlnaHQgPSB0eXBlb2YgbWF4SGVpZ2h0ID09PSAndW5kZWZpbmVkJyB8fCBtYXhIZWlnaHQgPCAwID8gbmV3SGVpZ2h0IDogbWF4SGVpZ2h0O1xuXG4gICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICAgIHZhciBleHRyYU1pbldpZHRoID0gKGNvbXB1dGVkTWluSGVpZ2h0IC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQpICogcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuICAgICAgICB2YXIgZXh0cmFNYXhXaWR0aCA9IChjb21wdXRlZE1heEhlaWdodCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0KSAqIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgICAgdmFyIGV4dHJhTWluSGVpZ2h0ID0gKGNvbXB1dGVkTWluV2lkdGggLSBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoKSAvIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ7XG4gICAgICAgIHZhciBleHRyYU1heEhlaWdodCA9IChjb21wdXRlZE1heFdpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgICB2YXIgbG9ja2VkTWluV2lkdGggPSBNYXRoLm1heChjb21wdXRlZE1pbldpZHRoLCBleHRyYU1pbldpZHRoKTtcbiAgICAgICAgdmFyIGxvY2tlZE1heFdpZHRoID0gTWF0aC5taW4oY29tcHV0ZWRNYXhXaWR0aCwgZXh0cmFNYXhXaWR0aCk7XG4gICAgICAgIHZhciBsb2NrZWRNaW5IZWlnaHQgPSBNYXRoLm1heChjb21wdXRlZE1pbkhlaWdodCwgZXh0cmFNaW5IZWlnaHQpO1xuICAgICAgICB2YXIgbG9ja2VkTWF4SGVpZ2h0ID0gTWF0aC5taW4oY29tcHV0ZWRNYXhIZWlnaHQsIGV4dHJhTWF4SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChuZXdXaWR0aCwgbG9ja2VkTWluV2lkdGgsIGxvY2tlZE1heFdpZHRoKTtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobmV3SGVpZ2h0LCBsb2NrZWRNaW5IZWlnaHQsIGxvY2tlZE1heEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG5ld1dpZHRoLCBjb21wdXRlZE1pbldpZHRoLCBjb21wdXRlZE1heFdpZHRoKTtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobmV3SGVpZ2h0LCBjb21wdXRlZE1pbkhlaWdodCwgY29tcHV0ZWRNYXhIZWlnaHQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuZ3JpZCkge1xuICAgICAgICBuZXdXaWR0aCA9IHNuYXAobmV3V2lkdGgsIHRoaXMucHJvcHMuZ3JpZFswXSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5ncmlkKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IHNuYXAobmV3SGVpZ2h0LCB0aGlzLnByb3BzLmdyaWRbMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zbmFwICYmIHRoaXMucHJvcHMuc25hcC54KSB7XG4gICAgICAgIG5ld1dpZHRoID0gZmluZENsb3Nlc3RTbmFwKG5ld1dpZHRoLCB0aGlzLnByb3BzLnNuYXAueCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5zbmFwICYmIHRoaXMucHJvcHMuc25hcC55KSB7XG4gICAgICAgIG5ld0hlaWdodCA9IGZpbmRDbG9zZXN0U25hcChuZXdIZWlnaHQsIHRoaXMucHJvcHMuc25hcC55KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbHRhID0ge1xuICAgICAgICB3aWR0aDogbmV3V2lkdGggLSBvcmlnaW5hbC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQgLSBvcmlnaW5hbC5oZWlnaHRcbiAgICAgIH07XG5cbiAgICAgIGlmICh3aWR0aCAmJiB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKHdpZHRoLCAnJScpKSB7XG4gICAgICAgIHZhciBwZXJjZW50ID0gbmV3V2lkdGggLyBwYXJlbnRTaXplLndpZHRoICogMTAwO1xuICAgICAgICBuZXdXaWR0aCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWlnaHQgJiYgdHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgoaGVpZ2h0LCAnJScpKSB7XG4gICAgICAgIHZhciBfcGVyY2VudCA9IG5ld0hlaWdodCAvIHBhcmVudFNpemUuaGVpZ2h0ICogMTAwO1xuICAgICAgICBuZXdIZWlnaHQgPSBfcGVyY2VudCArICclJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZU5ld1NpemUobmV3V2lkdGgsICd3aWR0aCcpLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY3VsYXRlTmV3U2l6ZShuZXdIZWlnaHQsICdoZWlnaHQnKVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemUoZXZlbnQsIGRpcmVjdGlvbiwgdGhpcy5yZXNpemFibGUsIGRlbHRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdXNlVXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBpc1Jlc2l6aW5nID0gX3N0YXRlMi5pc1Jlc2l6aW5nLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF9zdGF0ZTIuZGlyZWN0aW9uLFxuICAgICAgICAgIG9yaWdpbmFsID0gX3N0YXRlMi5vcmlnaW5hbDtcblxuICAgICAgaWYgKCFpc1Jlc2l6aW5nKSByZXR1cm47XG4gICAgICB2YXIgZGVsdGEgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnNpemUud2lkdGggLSBvcmlnaW5hbC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0IC0gb3JpZ2luYWwuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVTdG9wKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemVTdG9wKGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlLCBkZWx0YSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5wcm9wcy5zaXplKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Jlc2l6aW5nOiBmYWxzZSwgcmVzaXplQ3Vyc29yOiAnYXV0bycgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNpemUoc2l6ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0IH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclJlc2l6ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZXNpemVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbmFibGUgPSBfcHJvcHMzLmVuYWJsZSxcbiAgICAgICAgICBoYW5kbGVTdHlsZXMgPSBfcHJvcHMzLmhhbmRsZVN0eWxlcyxcbiAgICAgICAgICBoYW5kbGVDbGFzc2VzID0gX3Byb3BzMy5oYW5kbGVDbGFzc2VzLFxuICAgICAgICAgIGhhbmRsZVdyYXBwZXJTdHlsZSA9IF9wcm9wczMuaGFuZGxlV3JhcHBlclN0eWxlLFxuICAgICAgICAgIGhhbmRsZVdyYXBwZXJDbGFzcyA9IF9wcm9wczMuaGFuZGxlV3JhcHBlckNsYXNzLFxuICAgICAgICAgIGhhbmRsZUNvbXBvbmVudCA9IF9wcm9wczMuaGFuZGxlQ29tcG9uZW50O1xuXG4gICAgICBpZiAoIWVuYWJsZSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgcmVzaXplcnMgPSBPYmplY3Qua2V5cyhlbmFibGUpLm1hcChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgIGlmIChlbmFibGVbZGlyXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFJlc2l6ZXIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogZGlyLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgICAgICAgICAgb25SZXNpemVTdGFydDogX3RoaXMyLm9uUmVzaXplU3RhcnQsXG4gICAgICAgICAgICAgIHJlcGxhY2VTdHlsZXM6IGhhbmRsZVN0eWxlcyAmJiBoYW5kbGVTdHlsZXNbZGlyXSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBoYW5kbGVDbGFzc2VzICYmIGhhbmRsZUNsYXNzZXNbZGlyXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNvbXBvbmVudCAmJiBoYW5kbGVDb21wb25lbnRbZGlyXSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaGFuZGxlQ29tcG9uZW50W2Rpcl0pIDogbnVsbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KTtcbiAgICAgIC8vICM5MyBXcmFwIHRoZSByZXNpemUgYm94IGluIHNwYW4gKHdpbGwgbm90IGJyZWFrIDEwMCUgd2lkdGgvaGVpZ2h0KVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGhhbmRsZVdyYXBwZXJDbGFzcywgc3R5bGU6IGhhbmRsZVdyYXBwZXJTdHlsZSB9LFxuICAgICAgICByZXNpemVyc1xuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHVzZXJTZWxlY3QgPSB0aGlzLnN0YXRlLmlzUmVzaXppbmcgPyB1c2VyU2VsZWN0Tm9uZSA6IHVzZXJTZWxlY3RBdXRvO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnJlc2l6YWJsZSA9IGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICB9LCB1c2VyU2VsZWN0LCB0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnNpemVTdHlsZSwge1xuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMucHJvcHMubWF4SGVpZ2h0LFxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGgsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0LFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgIH0sIHRoaXMuZXh0ZW5kc1Byb3BzKSxcbiAgICAgICAgdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICAgICAgICBjdXJzb3I6ICcnICsgKHRoaXMuc3RhdGUucmVzaXplQ3Vyc29yIHx8ICdhdXRvJyksXG4gICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogJzk5OTknLFxuICAgICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCdcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICB0aGlzLnJlbmRlclJlc2l6ZXIoKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXJlbnROb2RlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc2l6YWJsZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Byb3BzU2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zaXplIHx8IHRoaXMucHJvcHMuZGVmYXVsdFNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmFzZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgaWYgKCFwYXJlbnQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBuID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmIChuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAobi5jbGFzc0xpc3QuY29udGFpbnMoYmFzZUNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaXplJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHZhciB3aWR0aCA9IDA7XG4gICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgb3JnV2lkdGggPSB0aGlzLnJlc2l6YWJsZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIG9yZ0hlaWdodCA9IHRoaXMucmVzaXphYmxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgLy8gSEFDSzogU2V0IHBvc2l0aW9uIGByZWxhdGl2ZWAgdG8gZ2V0IHBhcmVudCBzaXplLlxuICAgICAgICAvLyAgICAgICBUaGlzIGlzIGJlY2F1c2Ugd2hlbiByZS1yZXNpemFibGUgc2V0IGBhYnNvbHV0ZWAsIEkgY2FuIG5vdCBnZXQgYmFzZSB3aWR0aCBjb3JyZWN0bHkuXG4gICAgICAgIHZhciBvcmdQb3NpdGlvbiA9IHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uO1xuICAgICAgICBpZiAob3JnUG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSU5GTzogVXNlIG9yaWdpbmFsIHdpZHRoIG9yIGhlaWdodCBpZiBzZXQgYXV0by5cbiAgICAgICAgd2lkdGggPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS53aWR0aCAhPT0gJ2F1dG8nID8gdGhpcy5yZXNpemFibGUub2Zmc2V0V2lkdGggOiBvcmdXaWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5yZXNpemFibGUuc3R5bGUuaGVpZ2h0ICE9PSAnYXV0bycgPyB0aGlzLnJlc2l6YWJsZS5vZmZzZXRIZWlnaHQgOiBvcmdIZWlnaHQ7XG4gICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb24gPSBvcmdQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaXplU3R5bGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuXG4gICAgICB2YXIgZ2V0U2l6ZSA9IGZ1bmN0aW9uIGdldFNpemUoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXM0LnN0YXRlW2tleV0gPT09ICd1bmRlZmluZWQnIHx8IF90aGlzNC5zdGF0ZVtrZXldID09PSAnYXV0bycpIHJldHVybiAnYXV0byc7XG4gICAgICAgIGlmIChfdGhpczQucHJvcHNTaXplICYmIF90aGlzNC5wcm9wc1NpemVba2V5XSAmJiBlbmRzV2l0aChfdGhpczQucHJvcHNTaXplW2tleV0udG9TdHJpbmcoKSwgJyUnKSkge1xuICAgICAgICAgIGlmIChlbmRzV2l0aChfdGhpczQuc3RhdGVba2V5XS50b1N0cmluZygpLCAnJScpKSByZXR1cm4gX3RoaXM0LnN0YXRlW2tleV0udG9TdHJpbmcoKTtcbiAgICAgICAgICB2YXIgcGFyZW50U2l6ZSA9IF90aGlzNC5nZXRQYXJlbnRTaXplKCk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gTnVtYmVyKF90aGlzNC5zdGF0ZVtrZXldLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgIHZhciBwZXJjZW50ID0gdmFsdWUgLyBwYXJlbnRTaXplW2tleV0gKiAxMDA7XG4gICAgICAgICAgcmV0dXJuIHBlcmNlbnQgKyAnJSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFN0cmluZ1NpemUoX3RoaXM0LnN0YXRlW2tleV0pO1xuICAgICAgfTtcbiAgICAgIHZhciB3aWR0aCA9IHNpemUgJiYgdHlwZW9mIHNpemUud2lkdGggIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnN0YXRlLmlzUmVzaXppbmcgPyBnZXRTdHJpbmdTaXplKHNpemUud2lkdGgpIDogZ2V0U2l6ZSgnd2lkdGgnKTtcbiAgICAgIHZhciBoZWlnaHQgPSBzaXplICYmIHR5cGVvZiBzaXplLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuc3RhdGUuaXNSZXNpemluZyA/IGdldFN0cmluZ1NpemUoc2l6ZS5oZWlnaHQpIDogZ2V0U2l6ZSgnaGVpZ2h0Jyk7XG4gICAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSZXNpemFibGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJlc2l6YWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUmVzaXplU3RhcnQ6IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoKSB7fSxcbiAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge30sXG4gIG9uUmVzaXplU3RvcDogZnVuY3Rpb24gb25SZXNpemVTdG9wKCkge30sXG4gIGVuYWJsZToge1xuICAgIHRvcDogdHJ1ZSxcbiAgICByaWdodDogdHJ1ZSxcbiAgICBib3R0b206IHRydWUsXG4gICAgbGVmdDogdHJ1ZSxcbiAgICB0b3BSaWdodDogdHJ1ZSxcbiAgICBib3R0b21SaWdodDogdHJ1ZSxcbiAgICBib3R0b21MZWZ0OiB0cnVlLFxuICAgIHRvcExlZnQ6IHRydWVcbiAgfSxcbiAgc3R5bGU6IHt9LFxuICBncmlkOiBbMSwgMV0sXG4gIGxvY2tBc3BlY3RSYXRpbzogZmFsc2UsXG4gIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg6IDAsXG4gIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0OiAwLFxuICBzY2FsZTogMSxcbiAgcmVzaXplUmF0aW86IDFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzaXphYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlLXJlc2l6YWJsZS9saWIvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA2MjJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3JlYWN0LWRvbScpLCByZXF1aXJlKCdyZWFjdCcpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ3JlYWN0LWRvbScsICdyZWFjdCddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwuUmVhY3REcmFnZ2FibGUgPSBmYWN0b3J5KGdsb2JhbC5SZWFjdERPTSxnbG9iYWwuUmVhY3QpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChSZWFjdERPTSxSZWFjdCkgeyAndXNlIHN0cmljdCc7XG5cblx0UmVhY3RET00gPSBSZWFjdERPTSAmJiBSZWFjdERPTS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUmVhY3RET01bJ2RlZmF1bHQnXSA6IFJlYWN0RE9NO1xuXHRSZWFjdCA9IFJlYWN0ICYmIFJlYWN0Lmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBSZWFjdFsnZGVmYXVsdCddIDogUmVhY3Q7XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICpcblx0ICogXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gYXJnO1xuXHQgIH07XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcblx0ICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcblx0ICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cblx0ICovXG5cdHZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gdGhpcztcblx0fTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuXHQgIHJldHVybiBhcmc7XG5cdH07XG5cblx0dmFyIGVtcHR5RnVuY3Rpb25fMSA9IGVtcHR5RnVuY3Rpb247XG5cblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKlxuXHQgKi9cblxuXHQvKipcblx0ICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuXHQgKlxuXHQgKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuXHQgKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcblx0ICogZXhwZWN0aW5nLlxuXHQgKlxuXHQgKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuXHQgKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG5cdCAqL1xuXG5cdHZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cblx0e1xuXHQgIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG5cdCAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcblx0ICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG5cdCAgaWYgKCFjb25kaXRpb24pIHtcblx0ICAgIHZhciBlcnJvcjtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG5cdCAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICAgIH0pKTtcblx0ICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcblx0ICAgIH1cblxuXHQgICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuXHQgICAgdGhyb3cgZXJyb3I7XG5cdCAgfVxuXHR9XG5cblx0dmFyIGludmFyaWFudF8xID0gaW52YXJpYW50O1xuXG5cdC8qKlxuXHQgKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG5cdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcblx0ICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcblx0ICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG5cdCAqL1xuXG5cdHZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbl8xO1xuXG5cdHtcblx0ICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuXHQgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgYXJnSW5kZXggPSAwO1xuXHQgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuXHQgICAgfSk7XG5cdCAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG5cdCAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuXHQgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuXHQgICAgfSBjYXRjaCAoeCkge31cblx0ICB9O1xuXG5cdCAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG5cdCAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cblx0ICAgIH1cblxuXHQgICAgaWYgKCFjb25kaXRpb24pIHtcblx0ICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuXHQgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG5cdCAgICAgIH1cblxuXHQgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblxuXHR2YXIgd2FybmluZ18xID0gd2FybmluZztcblxuXHQvKlxuXHRvYmplY3QtYXNzaWduXG5cdChjKSBTaW5kcmUgU29yaHVzXG5cdEBsaWNlbnNlIE1JVFxuXHQqL1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHR2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblx0dmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cdGZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRcdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdCh2YWwpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHRcdH1cblx0XHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QzID0ge307XG5cdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHR2YXIgb2JqZWN0QXNzaWduID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdFx0dmFyIGZyb207XG5cdFx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0XHR2YXIgc3ltYm9scztcblxuXHRcdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0bztcblx0fTtcblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXG5cdHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXHR7XG5cdCAgdmFyIGludmFyaWFudCQxID0gaW52YXJpYW50XzE7XG5cdCAgdmFyIHdhcm5pbmckMSA9IHdhcm5pbmdfMTtcblx0ICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQkMSA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0XzE7XG5cdCAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cblx0ICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG5cdCAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG5cdCAge1xuXHQgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuXHQgICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcblx0ICAgICAgICB2YXIgZXJyb3I7XG5cdCAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cblx0ICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG5cdCAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcblx0ICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cblx0ICAgICAgICAgIGludmFyaWFudCQxKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcblx0ICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCQxKTtcblx0ICAgICAgICB9IGNhdGNoIChleCkge1xuXHQgICAgICAgICAgZXJyb3IgPSBleDtcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2FybmluZyQxKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuXHQgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG5cdCAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcblx0ICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG5cdCAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG5cdCAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuXHQgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fVxuXG5cdHZhciBjaGVja1Byb3BUeXBlc18xID0gY2hlY2tQcm9wVHlwZXM7XG5cblx0dmFyIGZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcblx0ICAvKiBnbG9iYWwgU3ltYm9sICovXG5cdCAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuXHQgIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuXHQgICAqXG5cdCAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG5cdCAgICpcblx0ICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuXHQgICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuXHQgICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcblx0ICAgKiAgICAgICAuLi5cblx0ICAgKiAgICAgfVxuXHQgICAqXG5cdCAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG5cdCAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuXHQgICAqL1xuXHQgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuXHQgICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcblx0ICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXR1cm4gaXRlcmF0b3JGbjtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvKipcblx0ICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuXHQgICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG5cdCAgICpcblx0ICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG5cdCAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICBwcm9wVHlwZXM6IHtcblx0ICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG5cdCAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcblx0ICAgKlxuXHQgICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cblx0ICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG5cdCAgICpcblx0ICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cblx0ICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG5cdCAgICogICAgIH0sXG5cdCAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG5cdCAgICogICB9KTtcblx0ICAgKlxuXHQgICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcblx0ICAgKlxuXHQgICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuXHQgICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuXHQgICAqXG5cdCAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuXHQgICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcblx0ICAgKlxuXHQgICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgIHByb3BUeXBlczoge1xuXHQgICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuXHQgICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG5cdCAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuXHQgICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG5cdCAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcblx0ICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG5cdCAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG5cdCAgICogICAgICAgICAgKTtcblx0ICAgKiAgICAgICAgfVxuXHQgICAqICAgICAgfVxuXHQgICAqICAgIH0sXG5cdCAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG5cdCAgICogIH0pO1xuXHQgICAqXG5cdCAgICogQGludGVybmFsXG5cdCAgICovXG5cblx0ICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG5cdCAgLy8gSW1wb3J0YW50IVxuXHQgIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cblx0ICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG5cdCAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG5cdCAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuXHQgICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG5cdCAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcblx0ICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuXHQgICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG5cdCAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuXHQgICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuXHQgICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuXHQgICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG5cdCAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuXHQgICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcblx0ICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuXHQgICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcblx0ICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcblx0ICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuXHQgICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG5cdCAgfTtcblxuXHQgIC8qKlxuXHQgICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cblx0ICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcblx0ICAgKi9cblx0ICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cdCAgZnVuY3Rpb24gaXMoeCwgeSkge1xuXHQgICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuXHQgICAgaWYgKHggPT09IHkpIHtcblx0ICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG5cdCAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG5cdCAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG5cdCAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG5cdCAgLyoqXG5cdCAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuXHQgICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG5cdCAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuXHQgICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcblx0ICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG5cdCAgICovXG5cdCAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG5cdCAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHQgICAgdGhpcy5zdGFjayA9ICcnO1xuXHQgIH1cblx0ICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG5cdCAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuXHQgICAge1xuXHQgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcblx0ICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG5cdCAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuXHQgICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldF8xKSB7XG5cdCAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcblx0ICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuXHQgICAgICAgICAgaW52YXJpYW50XzEoXG5cdCAgICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuXHQgICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcblx0ICAgICAgICAgICk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuXHQgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuXHQgICAgICAgICAgaWYgKFxuXHQgICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG5cdCAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcblx0ICAgICAgICAgICkge1xuXHQgICAgICAgICAgICB3YXJuaW5nXzEoXG5cdCAgICAgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuXHQgICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG5cdCAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcblx0ICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcblx0ICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcblx0ICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG5cdCAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuXHQgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcblx0ICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuXHQgICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG5cdCAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuXHQgICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuXHQgICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuXHQgICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuXHQgICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cblx0ICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uXzEudGhhdFJldHVybnNOdWxsKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuXHQgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSk7XG5cdCAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG5cdCAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcblx0ICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcblx0ICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcblx0ICAgICAgd2FybmluZ18xKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJyk7XG5cdCAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uXzEudGhhdFJldHVybnNOdWxsO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuXHQgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcblx0ICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcblx0ICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKTtcblx0ICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuXHQgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG5cdCAgICAgIHdhcm5pbmdfMShmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKTtcblx0ICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25fMS50aGF0UmV0dXJuc051bGw7XG5cdCAgICB9XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG5cdCAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHdhcm5pbmdfMShcblx0ICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcblx0ICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuXHQgICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuXHQgICAgICAgICAgaVxuXHQgICAgICAgICk7XG5cdCAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25fMS50aGF0UmV0dXJuc051bGw7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpID09IG51bGwpIHtcblx0ICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cdCAgICAgICAgaWYgKCFjaGVja2VyKSB7XG5cdCAgICAgICAgICBjb250aW51ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSk7XG5cdCAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG5cdCAgICAgIC8vIHByb3BzLlxuXHQgICAgICB2YXIgYWxsS2V5cyA9IG9iamVjdEFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcblx0ICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcblx0ICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblx0ICAgICAgICBpZiAoIWNoZWNrZXIpIHtcblx0ICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcblx0ICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuXHQgICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuXHQgICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcblx0ICAgICAgICAgICk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpO1xuXHQgICAgICAgIGlmIChlcnJvcikge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG5cdCAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcblx0ICAgICAgY2FzZSAnbnVtYmVyJzpcblx0ICAgICAgY2FzZSAnc3RyaW5nJzpcblx0ICAgICAgY2FzZSAndW5kZWZpbmVkJzpcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgY2FzZSAnYm9vbGVhbic6XG5cdCAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG5cdCAgICAgIGNhc2UgJ29iamVjdCc6XG5cdCAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuXHQgICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG5cdCAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcblx0ICAgICAgICAgIHZhciBzdGVwO1xuXHQgICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG5cdCAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcblx0ICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG5cdCAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcblx0ICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG5cdCAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICBkZWZhdWx0OlxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG5cdCAgICAvLyBOYXRpdmUgU3ltYm9sLlxuXHQgICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblxuXHQgICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcblx0ICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cblx0ICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblxuXHQgIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cblx0ICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcblx0ICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG5cdCAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgIHJldHVybiAnYXJyYXknO1xuXHQgICAgfVxuXHQgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHQgICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG5cdCAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuXHQgICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cblx0ICAgICAgcmV0dXJuICdvYmplY3QnO1xuXHQgICAgfVxuXHQgICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG5cdCAgICAgIHJldHVybiAnc3ltYm9sJztcblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVHlwZTtcblx0ICB9XG5cblx0ICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG5cdCAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG5cdCAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG5cdCAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcblx0ICAgIH1cblx0ICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG5cdCAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdCAgICAgICAgcmV0dXJuICdkYXRlJztcblx0ICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0ICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVHlwZTtcblx0ICB9XG5cblx0ICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG5cdCAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcblx0ICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcblx0ICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuXHQgICAgc3dpdGNoICh0eXBlKSB7XG5cdCAgICAgIGNhc2UgJ2FycmF5Jzpcblx0ICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuXHQgICAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgY2FzZSAnZGF0ZSc6XG5cdCAgICAgIGNhc2UgJ3JlZ2V4cCc6XG5cdCAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuXHQgICAgICBkZWZhdWx0OlxuXHQgICAgICAgIHJldHVybiB0eXBlO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG5cdCAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuXHQgICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG5cdCAgICAgIHJldHVybiBBTk9OWU1PVVM7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdCAgfVxuXG5cdCAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlc18xO1xuXHQgIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG5cdCAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xuXHR9O1xuXG5cdHZhciBwcm9wVHlwZXMgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cblx0e1xuXHQgIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHQgICAgU3ltYm9sLmZvciAmJlxuXHQgICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuXHQgICAgMHhlYWM3O1xuXG5cdCAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0ICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG5cdCAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuXHQgIH07XG5cblx0ICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cblx0ICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG5cdCAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuXHQgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xuXHR9XG5cdH0pO1xuXG5cdHZhciBjbGFzc25hbWVzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuXHQvKiFcblx0ICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cblx0ICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHQgIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcblx0Ki9cblx0LyogZ2xvYmFsIGRlZmluZSAqL1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0XHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCdvYmplY3QnICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdW5kZWZpbmVkLmFtZCA9PT0gJ29iamVjdCcgJiYgdW5kZWZpbmVkLmFtZCkge1xuXHRcdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdFx0dW5kZWZpbmVkKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHRcdH1cblx0fSgpKTtcblx0fSk7XG5cblx0Ly8gQGNyZWRpdHMgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcm9nb3pobmlrb2ZmL2E0M2NmZWQyN2M0MWU0ZTY4Y2RjXG5cdGZ1bmN0aW9uIGZpbmRJbkFycmF5KGFycmF5IC8qOiBBcnJheTxhbnk+IHwgVG91Y2hMaXN0Ki8sIGNhbGxiYWNrIC8qOiBGdW5jdGlvbiovKSAvKjogYW55Ki8ge1xuXHQgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBbYXJyYXlbaV0sIGksIGFycmF5XSkpIHJldHVybiBhcnJheVtpXTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMgLyo6IGFueSovKSAvKjogYm9vbGVhbiovIHtcblx0ICByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNOdW0obnVtIC8qOiBhbnkqLykgLyo6IGJvb2xlYW4qLyB7XG5cdCAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmICFpc05hTihudW0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW50KGEgLyo6IHN0cmluZyovKSAvKjogbnVtYmVyKi8ge1xuXHQgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkb250U2V0TWUocHJvcHMgLyo6IE9iamVjdCovLCBwcm9wTmFtZSAvKjogc3RyaW5nKi8sIGNvbXBvbmVudE5hbWUgLyo6IHN0cmluZyovKSB7XG5cdCAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuXHQgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wICcgKyBwcm9wTmFtZSArICcgcGFzc2VkIHRvICcgKyBjb21wb25lbnROYW1lICsgJyAtIGRvIG5vdCBzZXQgdGhpcywgc2V0IGl0IG9uIHRoZSBjaGlsZC4nKTtcblx0ICB9XG5cdH1cblxuXHR2YXIgcHJlZml4ZXMgPSBbJ01veicsICdXZWJraXQnLCAnTycsICdtcyddO1xuXHRmdW5jdGlvbiBnZXRQcmVmaXgoKSAvKjogc3RyaW5nKi8ge1xuXHQgIHZhciBwcm9wIC8qOiBzdHJpbmcqLyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3RyYW5zZm9ybSc7XG5cblx0ICAvLyBDaGVja2luZyBzcGVjaWZpY2FsbHkgZm9yICd3aW5kb3cuZG9jdW1lbnQnIGlzIGZvciBwc2V1ZG8tYnJvd3NlciBzZXJ2ZXItc2lkZVxuXHQgIC8vIGVudmlyb25tZW50cyB0aGF0IGRlZmluZSAnd2luZG93JyBhcyB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdCAgLy8gRS5nLiBSZWFjdC1yYWlscyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJhaWxzL3B1bGwvODQpXG5cdCAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7XG5cblx0ICB2YXIgc3R5bGUgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5cdCAgaWYgKHByb3AgaW4gc3R5bGUpIHJldHVybiAnJztcblxuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgIGlmIChicm93c2VyUHJlZml4VG9LZXkocHJvcCwgcHJlZml4ZXNbaV0pIGluIHN0eWxlKSByZXR1cm4gcHJlZml4ZXNbaV07XG5cdCAgfVxuXG5cdCAgcmV0dXJuICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnJvd3NlclByZWZpeFRvS2V5KHByb3AgLyo6IHN0cmluZyovLCBwcmVmaXggLyo6IHN0cmluZyovKSAvKjogc3RyaW5nKi8ge1xuXHQgIHJldHVybiBwcmVmaXggPyAnJyArIHByZWZpeCArIGtlYmFiVG9UaXRsZUNhc2UocHJvcCkgOiBwcm9wO1xuXHR9XG5cblx0ZnVuY3Rpb24ga2ViYWJUb1RpdGxlQ2FzZShzdHIgLyo6IHN0cmluZyovKSAvKjogc3RyaW5nKi8ge1xuXHQgIHZhciBvdXQgPSAnJztcblx0ICB2YXIgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0ICAgIGlmIChzaG91bGRDYXBpdGFsaXplKSB7XG5cdCAgICAgIG91dCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcblx0ICAgICAgc2hvdWxkQ2FwaXRhbGl6ZSA9IGZhbHNlO1xuXHQgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICctJykge1xuXHQgICAgICBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIG91dCArPSBzdHJbaV07XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiBvdXQ7XG5cdH1cblxuXHQvLyBEZWZhdWx0IGV4cG9ydCBpcyB0aGUgcHJlZml4IGl0c2VsZiwgbGlrZSAnTW96JywgJ1dlYmtpdCcsIGV0Y1xuXHQvLyBOb3RlIHRoYXQgeW91IG1heSBoYXZlIHRvIHJlLXRlc3QgZm9yIGNlcnRhaW4gdGhpbmdzOyBmb3IgaW5zdGFuY2UsIENocm9tZSA1MFxuXHQvLyBjYW4gaGFuZGxlIHVucHJlZml4ZWQgYHRyYW5zZm9ybWAsIGJ1dCBub3QgdW5wcmVmaXhlZCBgdXNlci1zZWxlY3RgXG5cdHZhciBicm93c2VyUHJlZml4ID0gZ2V0UHJlZml4KCk7XG5cblx0dmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuXHQgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG5cdCAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcblx0ICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuXHQgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXHQgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcblx0ICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cdCAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcblx0ICAgIHJldHVybiBDb25zdHJ1Y3Rvcjtcblx0ICB9O1xuXHR9KCk7XG5cblx0dmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuXHQgIGlmIChrZXkgaW4gb2JqKSB7XG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcblx0ICAgICAgdmFsdWU6IHZhbHVlLFxuXHQgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICAgIHdyaXRhYmxlOiB0cnVlXG5cdCAgICB9KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgb2JqW2tleV0gPSB2YWx1ZTtcblx0ICB9XG5cblx0ICByZXR1cm4gb2JqO1xuXHR9O1xuXG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuXHQgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdCAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG5cdCAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiB0YXJnZXQ7XG5cdH07XG5cblx0dmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG5cdCAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuXHQgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG5cdCAgfVxuXG5cdCAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG5cdCAgICBjb25zdHJ1Y3Rvcjoge1xuXHQgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG5cdCAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuXHQgICAgICB3cml0YWJsZTogdHJ1ZSxcblx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuXHR9O1xuXG5cdHZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcblx0ICBpZiAoIXNlbGYpIHtcblx0ICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcblx0ICB9XG5cblx0ICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcblx0fTtcblxuXHR2YXIgc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuXHQgICAgdmFyIF9hcnIgPSBbXTtcblx0ICAgIHZhciBfbiA9IHRydWU7XG5cdCAgICB2YXIgX2QgPSBmYWxzZTtcblx0ICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuXHQgICAgdHJ5IHtcblx0ICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuXHQgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cblx0ICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG5cdCAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICBfZCA9IHRydWU7XG5cdCAgICAgIF9lID0gZXJyO1xuXHQgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuXHQgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIF9hcnI7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcblx0ICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcblx0ICAgICAgcmV0dXJuIGFycjtcblx0ICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG5cdCAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcblx0ICAgIH1cblx0ICB9O1xuXHR9KCk7XG5cblx0Lyo6OiBpbXBvcnQgdHlwZSB7Q29udHJvbFBvc2l0aW9uLCBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbiwgTW91c2VUb3VjaEV2ZW50fSBmcm9tICcuL3R5cGVzJzsqL1xuXG5cblx0dmFyIG1hdGNoZXNTZWxlY3RvckZ1bmMgPSAnJztcblx0ZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsIC8qOiBOb2RlKi8sIHNlbGVjdG9yIC8qOiBzdHJpbmcqLykgLyo6IGJvb2xlYW4qLyB7XG5cdCAgaWYgKCFtYXRjaGVzU2VsZWN0b3JGdW5jKSB7XG5cdCAgICBtYXRjaGVzU2VsZWN0b3JGdW5jID0gZmluZEluQXJyYXkoWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtb3pNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InLCAnb01hdGNoZXNTZWxlY3RvciddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG5cdCAgICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcblx0ICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZWxbbWV0aG9kXSk7XG5cdCAgICB9KTtcblx0ICB9XG5cblx0ICAvLyBNaWdodCBub3QgYmUgZm91bmQgZW50aXJlbHkgKG5vdCBhbiBFbGVtZW50PykgLSBpbiB0aGF0IGNhc2UsIGJhaWxcblx0ICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cdCAgaWYgKCFpc0Z1bmN0aW9uKGVsW21hdGNoZXNTZWxlY3RvckZ1bmNdKSkgcmV0dXJuIGZhbHNlO1xuXG5cdCAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgIHJldHVybiBlbFttYXRjaGVzU2VsZWN0b3JGdW5jXShzZWxlY3Rvcik7XG5cdH1cblxuXHQvLyBXb3JrcyB1cCB0aGUgdHJlZSB0byB0aGUgZHJhZ2dhYmxlIGl0c2VsZiBhdHRlbXB0aW5nIHRvIG1hdGNoIHNlbGVjdG9yLlxuXHRmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8oZWwgLyo6IE5vZGUqLywgc2VsZWN0b3IgLyo6IHN0cmluZyovLCBiYXNlTm9kZSAvKjogTm9kZSovKSAvKjogYm9vbGVhbiovIHtcblx0ICB2YXIgbm9kZSA9IGVsO1xuXHQgIGRvIHtcblx0ICAgIGlmIChtYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcblx0ICAgIGlmIChub2RlID09PSBiYXNlTm9kZSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0ICB9IHdoaWxlIChub2RlKTtcblxuXHQgIHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEV2ZW50KGVsIC8qOiA/Tm9kZSovLCBldmVudCAvKjogc3RyaW5nKi8sIGhhbmRsZXIgLyo6IEZ1bmN0aW9uKi8pIC8qOiB2b2lkKi8ge1xuXHQgIGlmICghZWwpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG5cdCAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGhhbmRsZXIpO1xuXHQgIH0gZWxzZSBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHQgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcblx0ICAgIGVsWydvbicgKyBldmVudF0gPSBoYW5kbGVyO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsIC8qOiA/Tm9kZSovLCBldmVudCAvKjogc3RyaW5nKi8sIGhhbmRsZXIgLyo6IEZ1bmN0aW9uKi8pIC8qOiB2b2lkKi8ge1xuXHQgIGlmICghZWwpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgaWYgKGVsLmRldGFjaEV2ZW50KSB7XG5cdCAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGhhbmRsZXIpO1xuXHQgIH0gZWxzZSBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHQgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcblx0ICAgIGVsWydvbicgKyBldmVudF0gPSBudWxsO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIG91dGVySGVpZ2h0KG5vZGUgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBudW1iZXIqLyB7XG5cdCAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXG5cdCAgLy8gb2Zmc2V0VG9wIHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG5cdCAgdmFyIGhlaWdodCA9IG5vZGUuY2xpZW50SGVpZ2h0O1xuXHQgIHZhciBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdCAgaGVpZ2h0ICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlclRvcFdpZHRoKTtcblx0ICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuXHQgIHJldHVybiBoZWlnaHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBvdXRlcldpZHRoKG5vZGUgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBudW1iZXIqLyB7XG5cdCAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXG5cdCAgLy8gb2Zmc2V0TGVmdCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuXHQgIHZhciB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG5cdCAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICB3aWR0aCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpO1xuXHQgIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuXHQgIHJldHVybiB3aWR0aDtcblx0fVxuXHRmdW5jdGlvbiBpbm5lckhlaWdodChub2RlIC8qOiBIVE1MRWxlbWVudCovKSAvKjogbnVtYmVyKi8ge1xuXHQgIHZhciBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcblx0ICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHQgIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wKTtcblx0ICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG5cdCAgcmV0dXJuIGhlaWdodDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlubmVyV2lkdGgobm9kZSAvKjogSFRNTEVsZW1lbnQqLykgLyo6IG51bWJlciovIHtcblx0ICB2YXIgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuXHQgIHZhciBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdCAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0xlZnQpO1xuXHQgIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG5cdCAgcmV0dXJuIHdpZHRoO1xuXHR9XG5cblx0Ly8gR2V0IGZyb20gb2Zmc2V0UGFyZW50XG5cdGZ1bmN0aW9uIG9mZnNldFhZRnJvbVBhcmVudChldnQgLyo6IHtjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcn0qLywgb2Zmc2V0UGFyZW50IC8qOiBIVE1MRWxlbWVudCovKSAvKjogQ29udHJvbFBvc2l0aW9uKi8ge1xuXHQgIHZhciBpc0JvZHkgPSBvZmZzZXRQYXJlbnQgPT09IG9mZnNldFBhcmVudC5vd25lckRvY3VtZW50LmJvZHk7XG5cdCAgdmFyIG9mZnNldFBhcmVudFJlY3QgPSBpc0JvZHkgPyB7IGxlZnQ6IDAsIHRvcDogMCB9IDogb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdCAgdmFyIHggPSBldnQuY2xpZW50WCArIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0IC0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0O1xuXHQgIHZhciB5ID0gZXZ0LmNsaWVudFkgKyBvZmZzZXRQYXJlbnQuc2Nyb2xsVG9wIC0gb2Zmc2V0UGFyZW50UmVjdC50b3A7XG5cblx0ICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDU1NUcmFuc2Zvcm0oY29udHJvbFBvcyAvKjogQ29udHJvbFBvc2l0aW9uKi8sIHBvc2l0aW9uT2Zmc2V0IC8qOiBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbiovKSAvKjogT2JqZWN0Ki8ge1xuXHQgIHZhciB0cmFuc2xhdGlvbiA9IGdldFRyYW5zbGF0aW9uKGNvbnRyb2xQb3MsIHBvc2l0aW9uT2Zmc2V0LCAncHgnKTtcblx0ICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIGJyb3dzZXJQcmVmaXhUb0tleSgndHJhbnNmb3JtJywgYnJvd3NlclByZWZpeCksIHRyYW5zbGF0aW9uKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVNWR1RyYW5zZm9ybShjb250cm9sUG9zIC8qOiBDb250cm9sUG9zaXRpb24qLywgcG9zaXRpb25PZmZzZXQgLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi8pIC8qOiBzdHJpbmcqLyB7XG5cdCAgdmFyIHRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb24oY29udHJvbFBvcywgcG9zaXRpb25PZmZzZXQsICcnKTtcblx0ICByZXR1cm4gdHJhbnNsYXRpb247XG5cdH1cblx0ZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24oX3JlZjIsIHBvc2l0aW9uT2Zmc2V0IC8qOiBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbiovLCB1bml0U3VmZml4IC8qOiBzdHJpbmcqLykgLyo6IHN0cmluZyovIHtcblx0ICB2YXIgeCA9IF9yZWYyLngsXG5cdCAgICAgIHkgPSBfcmVmMi55O1xuXG5cdCAgdmFyIHRyYW5zbGF0aW9uID0gJ3RyYW5zbGF0ZSgnICsgeCArIHVuaXRTdWZmaXggKyAnLCcgKyB5ICsgdW5pdFN1ZmZpeCArICcpJztcblx0ICBpZiAocG9zaXRpb25PZmZzZXQpIHtcblx0ICAgIHZhciBkZWZhdWx0WCA9ICcnICsgKHR5cGVvZiBwb3NpdGlvbk9mZnNldC54ID09PSAnc3RyaW5nJyA/IHBvc2l0aW9uT2Zmc2V0LnggOiBwb3NpdGlvbk9mZnNldC54ICsgdW5pdFN1ZmZpeCk7XG5cdCAgICB2YXIgZGVmYXVsdFkgPSAnJyArICh0eXBlb2YgcG9zaXRpb25PZmZzZXQueSA9PT0gJ3N0cmluZycgPyBwb3NpdGlvbk9mZnNldC55IDogcG9zaXRpb25PZmZzZXQueSArIHVuaXRTdWZmaXgpO1xuXHQgICAgdHJhbnNsYXRpb24gPSAndHJhbnNsYXRlKCcgKyBkZWZhdWx0WCArICcsICcgKyBkZWZhdWx0WSArICcpJyArIHRyYW5zbGF0aW9uO1xuXHQgIH1cblx0ICByZXR1cm4gdHJhbnNsYXRpb247XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUb3VjaChlIC8qOiBNb3VzZVRvdWNoRXZlbnQqLywgaWRlbnRpZmllciAvKjogbnVtYmVyKi8pIC8qOiA/e2NsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyfSovIHtcblx0ICByZXR1cm4gZS50YXJnZXRUb3VjaGVzICYmIGZpbmRJbkFycmF5KGUudGFyZ2V0VG91Y2hlcywgZnVuY3Rpb24gKHQpIHtcblx0ICAgIHJldHVybiBpZGVudGlmaWVyID09PSB0LmlkZW50aWZpZXI7XG5cdCAgfSkgfHwgZS5jaGFuZ2VkVG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodCkge1xuXHQgICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcjtcblx0ICB9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRvdWNoSWRlbnRpZmllcihlIC8qOiBNb3VzZVRvdWNoRXZlbnQqLykgLyo6ID9udW1iZXIqLyB7XG5cdCAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXNbMF0pIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcblx0ICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyO1xuXHR9XG5cblx0Ly8gVXNlci1zZWxlY3QgSGFja3M6XG5cdC8vXG5cdC8vIFVzZWZ1bCBmb3IgcHJldmVudGluZyBibHVlIGhpZ2hsaWdodHMgYWxsIG92ZXIgZXZlcnl0aGluZyB3aGVuIGRyYWdnaW5nLlxuXG5cdC8vIE5vdGUgd2UncmUgcGFzc2luZyBgZG9jdW1lbnRgIGIvYyB3ZSBjb3VsZCBiZSBpZnJhbWVkXG5cdGZ1bmN0aW9uIGFkZFVzZXJTZWxlY3RTdHlsZXMoZG9jIC8qOiA/RG9jdW1lbnQqLykge1xuXHQgIGlmICghZG9jKSByZXR1cm47XG5cdCAgdmFyIHN0eWxlRWwgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWRyYWdnYWJsZS1zdHlsZS1lbCcpO1xuXHQgIGlmICghc3R5bGVFbCkge1xuXHQgICAgc3R5bGVFbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcblx0ICAgIHN0eWxlRWwuaWQgPSAncmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsJztcblx0ICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6Oi1tb3otc2VsZWN0aW9uIHthbGw6IGluaGVyaXQ7fVxcbic7XG5cdCAgICBzdHlsZUVsLmlubmVySFRNTCArPSAnLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6c2VsZWN0aW9uIHthbGw6IGluaGVyaXQ7fVxcbic7XG5cdCAgICBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblx0ICB9XG5cdCAgaWYgKGRvYy5ib2R5KSBhZGRDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKGRvYyAvKjogP0RvY3VtZW50Ki8pIHtcblx0ICB0cnkge1xuXHQgICAgaWYgKGRvYyAmJiBkb2MuYm9keSkgcmVtb3ZlQ2xhc3NOYW1lKGRvYy5ib2R5LCAncmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbicpO1xuXHQgICAgLy8gJEZsb3dJZ25vcmU6IElFXG5cdCAgICBpZiAoZG9jLnNlbGVjdGlvbikge1xuXHQgICAgICAvLyAkRmxvd0lnbm9yZTogSUVcblx0ICAgICAgZG9jLnNlbGVjdGlvbi5lbXB0eSgpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpOyAvLyByZW1vdmUgc2VsZWN0aW9uIGNhdXNlZCBieSBzY3JvbGxcblx0ICAgIH1cblx0ICB9IGNhdGNoIChlKSB7XG5cdCAgICAvLyBwcm9iYWJseSBJRVxuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0eWxlSGFja3MoKSAvKjogT2JqZWN0Ki8ge1xuXHQgIHZhciBjaGlsZFN0eWxlIC8qOiBPYmplY3QqLyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cblx0ICAvLyBXb3JrYXJvdW5kIElFIHBvaW50ZXIgZXZlbnRzOyBzZWUgIzUxXG5cdCAgLy8gaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL2lzc3Vlcy81MSNpc3N1ZWNvbW1lbnQtMTAzNDg4Mjc4XG5cdCAgcmV0dXJuIF9leHRlbmRzKHtcblx0ICAgIHRvdWNoQWN0aW9uOiAnbm9uZSdcblx0ICB9LCBjaGlsZFN0eWxlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZENsYXNzTmFtZShlbCAvKjogSFRNTEVsZW1lbnQqLywgY2xhc3NOYW1lIC8qOiBzdHJpbmcqLykge1xuXHQgIGlmIChlbC5jbGFzc0xpc3QpIHtcblx0ICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgaWYgKCFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKD86XnxcXFxccyknICsgY2xhc3NOYW1lICsgJyg/IVxcXFxTKScpKSkge1xuXHQgICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuXHQgICAgfVxuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUNsYXNzTmFtZShlbCAvKjogSFRNTEVsZW1lbnQqLywgY2xhc3NOYW1lIC8qOiBzdHJpbmcqLykge1xuXHQgIGlmIChlbC5jbGFzc0xpc3QpIHtcblx0ICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKD86XnxcXFxccyknICsgY2xhc3NOYW1lICsgJyg/IVxcXFxTKScsICdnJyksICcnKTtcblx0ICB9XG5cdH1cblxuXHQvKjo6IGltcG9ydCB0eXBlIERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUnOyovXG5cdC8qOjogaW1wb3J0IHR5cGUge0JvdW5kcywgQ29udHJvbFBvc2l0aW9uLCBEcmFnZ2FibGVEYXRhLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdHlwZXMnOyovXG5cdC8qOjogaW1wb3J0IHR5cGUgRHJhZ2dhYmxlQ29yZSBmcm9tICcuLi9EcmFnZ2FibGVDb3JlJzsqL1xuXG5cblx0ZnVuY3Rpb24gZ2V0Qm91bmRQb3NpdGlvbihkcmFnZ2FibGUgLyo6IERyYWdnYWJsZSovLCB4IC8qOiBudW1iZXIqLywgeSAvKjogbnVtYmVyKi8pIC8qOiBbbnVtYmVyLCBudW1iZXJdKi8ge1xuXHQgIC8vIElmIG5vIGJvdW5kcywgc2hvcnQtY2lyY3VpdCBhbmQgbW92ZSBvblxuXHQgIGlmICghZHJhZ2dhYmxlLnByb3BzLmJvdW5kcykgcmV0dXJuIFt4LCB5XTtcblxuXHQgIC8vIENsb25lIG5ldyBib3VuZHNcblx0ICB2YXIgYm91bmRzID0gZHJhZ2dhYmxlLnByb3BzLmJvdW5kcztcblxuXHQgIGJvdW5kcyA9IHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnID8gYm91bmRzIDogY2xvbmVCb3VuZHMoYm91bmRzKTtcblx0ICB2YXIgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cblx0ICBpZiAodHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycpIHtcblx0ICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuXG5cdCAgICB2YXIgb3duZXJXaW5kb3cgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHQgICAgdmFyIGJvdW5kTm9kZSA9IHZvaWQgMDtcblx0ICAgIGlmIChib3VuZHMgPT09ICdwYXJlbnQnKSB7XG5cdCAgICAgIGJvdW5kTm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGJvdW5kTm9kZSA9IG93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib3VuZHMpO1xuXHQgICAgfVxuXHQgICAgaWYgKCEoYm91bmROb2RlIGluc3RhbmNlb2Ygb3duZXJXaW5kb3cuSFRNTEVsZW1lbnQpKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignQm91bmRzIHNlbGVjdG9yIFwiJyArIGJvdW5kcyArICdcIiBjb3VsZCBub3QgZmluZCBhbiBlbGVtZW50LicpO1xuXHQgICAgfVxuXHQgICAgdmFyIG5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdCAgICB2YXIgYm91bmROb2RlU3R5bGUgPSBvd25lcldpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvdW5kTm9kZSk7XG5cdCAgICAvLyBDb21wdXRlIGJvdW5kcy4gVGhpcyBpcyBhIHBhaW4gd2l0aCBwYWRkaW5nIGFuZCBvZmZzZXRzIGJ1dCB0aGlzIGdldHMgaXQgZXhhY3RseSByaWdodC5cblx0ICAgIGJvdW5kcyA9IHtcblx0ICAgICAgbGVmdDogLW5vZGUub2Zmc2V0TGVmdCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nTGVmdCkgKyBpbnQobm9kZVN0eWxlLm1hcmdpbkxlZnQpLFxuXHQgICAgICB0b3A6IC1ub2RlLm9mZnNldFRvcCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nVG9wKSArIGludChub2RlU3R5bGUubWFyZ2luVG9wKSxcblx0ICAgICAgcmlnaHQ6IGlubmVyV2lkdGgoYm91bmROb2RlKSAtIG91dGVyV2lkdGgobm9kZSkgLSBub2RlLm9mZnNldExlZnQgKyBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ1JpZ2h0KSAtIGludChub2RlU3R5bGUubWFyZ2luUmlnaHQpLFxuXHQgICAgICBib3R0b206IGlubmVySGVpZ2h0KGJvdW5kTm9kZSkgLSBvdXRlckhlaWdodChub2RlKSAtIG5vZGUub2Zmc2V0VG9wICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdCb3R0b20pIC0gaW50KG5vZGVTdHlsZS5tYXJnaW5Cb3R0b20pXG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIC8vIEtlZXAgeCBhbmQgeSBiZWxvdyByaWdodCBhbmQgYm90dG9tIGxpbWl0cy4uLlxuXHQgIGlmIChpc051bShib3VuZHMucmlnaHQpKSB4ID0gTWF0aC5taW4oeCwgYm91bmRzLnJpZ2h0KTtcblx0ICBpZiAoaXNOdW0oYm91bmRzLmJvdHRvbSkpIHkgPSBNYXRoLm1pbih5LCBib3VuZHMuYm90dG9tKTtcblxuXHQgIC8vIEJ1dCBhYm92ZSBsZWZ0IGFuZCB0b3AgbGltaXRzLlxuXHQgIGlmIChpc051bShib3VuZHMubGVmdCkpIHggPSBNYXRoLm1heCh4LCBib3VuZHMubGVmdCk7XG5cdCAgaWYgKGlzTnVtKGJvdW5kcy50b3ApKSB5ID0gTWF0aC5tYXgoeSwgYm91bmRzLnRvcCk7XG5cblx0ICByZXR1cm4gW3gsIHldO1xuXHR9XG5cblx0ZnVuY3Rpb24gc25hcFRvR3JpZChncmlkIC8qOiBbbnVtYmVyLCBudW1iZXJdKi8sIHBlbmRpbmdYIC8qOiBudW1iZXIqLywgcGVuZGluZ1kgLyo6IG51bWJlciovKSAvKjogW251bWJlciwgbnVtYmVyXSovIHtcblx0ICB2YXIgeCA9IE1hdGgucm91bmQocGVuZGluZ1ggLyBncmlkWzBdKSAqIGdyaWRbMF07XG5cdCAgdmFyIHkgPSBNYXRoLnJvdW5kKHBlbmRpbmdZIC8gZ3JpZFsxXSkgKiBncmlkWzFdO1xuXHQgIHJldHVybiBbeCwgeV07XG5cdH1cblxuXHRmdW5jdGlvbiBjYW5EcmFnWChkcmFnZ2FibGUgLyo6IERyYWdnYWJsZSovKSAvKjogYm9vbGVhbiovIHtcblx0ICByZXR1cm4gZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICdib3RoJyB8fCBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ3gnO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FuRHJhZ1koZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGUqLykgLyo6IGJvb2xlYW4qLyB7XG5cdCAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd5Jztcblx0fVxuXG5cdC8vIEdldCB7eCwgeX0gcG9zaXRpb25zIGZyb20gZXZlbnQuXG5cdGZ1bmN0aW9uIGdldENvbnRyb2xQb3NpdGlvbihlIC8qOiBNb3VzZVRvdWNoRXZlbnQqLywgdG91Y2hJZGVudGlmaWVyIC8qOiA/bnVtYmVyKi8sIGRyYWdnYWJsZUNvcmUgLyo6IERyYWdnYWJsZUNvcmUqLykgLyo6ID9Db250cm9sUG9zaXRpb24qLyB7XG5cdCAgdmFyIHRvdWNoT2JqID0gdHlwZW9mIHRvdWNoSWRlbnRpZmllciA9PT0gJ251bWJlcicgPyBnZXRUb3VjaChlLCB0b3VjaElkZW50aWZpZXIpIDogbnVsbDtcblx0ICBpZiAodHlwZW9mIHRvdWNoSWRlbnRpZmllciA9PT0gJ251bWJlcicgJiYgIXRvdWNoT2JqKSByZXR1cm4gbnVsbDsgLy8gbm90IHRoZSByaWdodCB0b3VjaFxuXHQgIHZhciBub2RlID0gZmluZERPTU5vZGUoZHJhZ2dhYmxlQ29yZSk7XG5cdCAgLy8gVXNlciBjYW4gcHJvdmlkZSBhbiBvZmZzZXRQYXJlbnQgaWYgZGVzaXJlZC5cblx0ICB2YXIgb2Zmc2V0UGFyZW50ID0gZHJhZ2dhYmxlQ29yZS5wcm9wcy5vZmZzZXRQYXJlbnQgfHwgbm9kZS5vZmZzZXRQYXJlbnQgfHwgbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG5cdCAgcmV0dXJuIG9mZnNldFhZRnJvbVBhcmVudCh0b3VjaE9iaiB8fCBlLCBvZmZzZXRQYXJlbnQpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIGRhdGEgb2JqZWN0IGV4cG9zZWQgYnkgPERyYWdnYWJsZUNvcmU+J3MgZXZlbnRzXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvcmVEYXRhKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlQ29yZSovLCB4IC8qOiBudW1iZXIqLywgeSAvKjogbnVtYmVyKi8pIC8qOiBEcmFnZ2FibGVEYXRhKi8ge1xuXHQgIHZhciBzdGF0ZSA9IGRyYWdnYWJsZS5zdGF0ZTtcblx0ICB2YXIgaXNTdGFydCA9ICFpc051bShzdGF0ZS5sYXN0WCk7XG5cdCAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGUpO1xuXG5cdCAgaWYgKGlzU3RhcnQpIHtcblx0ICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IG1vdmUsIHVzZSB0aGUgeCBhbmQgeSBhcyBsYXN0IGNvb3Jkcy5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIG5vZGU6IG5vZGUsXG5cdCAgICAgIGRlbHRhWDogMCwgZGVsdGFZOiAwLFxuXHQgICAgICBsYXN0WDogeCwgbGFzdFk6IHksXG5cdCAgICAgIHg6IHgsIHk6IHlcblx0ICAgIH07XG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vIE90aGVyd2lzZSBjYWxjdWxhdGUgcHJvcGVyIHZhbHVlcy5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIG5vZGU6IG5vZGUsXG5cdCAgICAgIGRlbHRhWDogeCAtIHN0YXRlLmxhc3RYLCBkZWx0YVk6IHkgLSBzdGF0ZS5sYXN0WSxcblx0ICAgICAgbGFzdFg6IHN0YXRlLmxhc3RYLCBsYXN0WTogc3RhdGUubGFzdFksXG5cdCAgICAgIHg6IHgsIHk6IHlcblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIGRhdGEgZXhwb3NlZCBieSA8RHJhZ2dhYmxlPidzIGV2ZW50c1xuXHRmdW5jdGlvbiBjcmVhdGVEcmFnZ2FibGVEYXRhKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlKi8sIGNvcmVEYXRhIC8qOiBEcmFnZ2FibGVEYXRhKi8pIC8qOiBEcmFnZ2FibGVEYXRhKi8ge1xuXHQgIHZhciBzY2FsZSA9IGRyYWdnYWJsZS5wcm9wcy5zY2FsZTtcblx0ICByZXR1cm4ge1xuXHQgICAgbm9kZTogY29yZURhdGEubm9kZSxcblx0ICAgIHg6IGRyYWdnYWJsZS5zdGF0ZS54ICsgY29yZURhdGEuZGVsdGFYIC8gc2NhbGUsXG5cdCAgICB5OiBkcmFnZ2FibGUuc3RhdGUueSArIGNvcmVEYXRhLmRlbHRhWSAvIHNjYWxlLFxuXHQgICAgZGVsdGFYOiBjb3JlRGF0YS5kZWx0YVggLyBzY2FsZSxcblx0ICAgIGRlbHRhWTogY29yZURhdGEuZGVsdGFZIC8gc2NhbGUsXG5cdCAgICBsYXN0WDogZHJhZ2dhYmxlLnN0YXRlLngsXG5cdCAgICBsYXN0WTogZHJhZ2dhYmxlLnN0YXRlLnlcblx0ICB9O1xuXHR9XG5cblx0Ly8gQSBsb3QgZmFzdGVyIHRoYW4gc3RyaW5naWZ5L3BhcnNlXG5cdGZ1bmN0aW9uIGNsb25lQm91bmRzKGJvdW5kcyAvKjogQm91bmRzKi8pIC8qOiBCb3VuZHMqLyB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIGxlZnQ6IGJvdW5kcy5sZWZ0LFxuXHQgICAgdG9wOiBib3VuZHMudG9wLFxuXHQgICAgcmlnaHQ6IGJvdW5kcy5yaWdodCxcblx0ICAgIGJvdHRvbTogYm91bmRzLmJvdHRvbVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBmaW5kRE9NTm9kZShkcmFnZ2FibGUgLyo6IERyYWdnYWJsZSB8IERyYWdnYWJsZUNvcmUqLykgLyo6IEhUTUxFbGVtZW50Ki8ge1xuXHQgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcblx0ICBpZiAoIW5vZGUpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignPERyYWdnYWJsZUNvcmU+OiBVbm1vdW50ZWQgZHVyaW5nIGV2ZW50IScpO1xuXHQgIH1cblx0ICAvLyAkRmxvd0lnbm9yZSB3ZSBjYW4ndCBhc3NlcnQgb24gSFRNTEVsZW1lbnQgZHVlIHRvIHRlc3RzLi4uIEZJWE1FXG5cdCAgcmV0dXJuIG5vZGU7XG5cdH1cblxuXHQvKmVzbGludCBuby1jb25zb2xlOjAqL1xuXHRmdW5jdGlvbiBsb2coKSB7XG5cdH1cblxuXHQvKjo6IGltcG9ydCB0eXBlIHtFdmVudEhhbmRsZXIsIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi91dGlscy90eXBlcyc7Ki9cblxuXG5cdC8vIFNpbXBsZSBhYnN0cmFjdGlvbiBmb3IgZHJhZ2dpbmcgZXZlbnRzIG5hbWVzLlxuXHQvKjo6IGltcG9ydCB0eXBlIHtFbGVtZW50IGFzIFJlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnOyovXG5cdHZhciBldmVudHNGb3IgPSB7XG5cdCAgdG91Y2g6IHtcblx0ICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG5cdCAgICBtb3ZlOiAndG91Y2htb3ZlJyxcblx0ICAgIHN0b3A6ICd0b3VjaGVuZCdcblx0ICB9LFxuXHQgIG1vdXNlOiB7XG5cdCAgICBzdGFydDogJ21vdXNlZG93bicsXG5cdCAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcblx0ICAgIHN0b3A6ICdtb3VzZXVwJ1xuXHQgIH1cblx0fTtcblxuXHQvLyBEZWZhdWx0IHRvIG1vdXNlIGV2ZW50cy5cblx0dmFyIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcblxuXHQvKjo6IHR5cGUgRHJhZ2dhYmxlQ29yZVN0YXRlID0ge1xuXHQgIGRyYWdnaW5nOiBib29sZWFuLFxuXHQgIGxhc3RYOiBudW1iZXIsXG5cdCAgbGFzdFk6IG51bWJlcixcblx0ICB0b3VjaElkZW50aWZpZXI6ID9udW1iZXJcblx0fTsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZUJvdW5kcyA9IHtcblx0ICBsZWZ0OiBudW1iZXIsXG5cdCAgcmlnaHQ6IG51bWJlcixcblx0ICB0b3A6IG51bWJlcixcblx0ICBib3R0b206IG51bWJlcixcblx0fTsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZURhdGEgPSB7XG5cdCAgbm9kZTogSFRNTEVsZW1lbnQsXG5cdCAgeDogbnVtYmVyLCB5OiBudW1iZXIsXG5cdCAgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyLFxuXHQgIGxhc3RYOiBudW1iZXIsIGxhc3RZOiBudW1iZXIsXG5cdH07Ki9cblx0Lyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4gdm9pZDsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIENvbnRyb2xQb3NpdGlvbiA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn07Ki9cblx0Lyo6OiBleHBvcnQgdHlwZSBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbiA9IHt4OiBudW1iZXJ8c3RyaW5nLCB5OiBudW1iZXJ8c3RyaW5nfTsqL1xuXG5cblx0Ly9cblx0Ly8gRGVmaW5lIDxEcmFnZ2FibGVDb3JlPi5cblx0Ly9cblx0Ly8gPERyYWdnYWJsZUNvcmU+IGlzIGZvciBhZHZhbmNlZCB1c2FnZSBvZiA8RHJhZ2dhYmxlPi4gSXQgbWFpbnRhaW5zIG1pbmltYWwgaW50ZXJuYWwgc3RhdGUgc28gaXQgY2FuXG5cdC8vIHdvcmsgd2VsbCB3aXRoIGxpYnJhcmllcyB0aGF0IHJlcXVpcmUgbW9yZSBjb250cm9sIG92ZXIgdGhlIGVsZW1lbnQuXG5cdC8vXG5cblx0Lyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVDb3JlUHJvcHMgPSB7XG5cdCAgYWxsb3dBbnlDbGljazogYm9vbGVhbixcblx0ICBjYW5jZWw6IHN0cmluZyxcblx0ICBjaGlsZHJlbjogUmVhY3RFbGVtZW50PGFueT4sXG5cdCAgZGlzYWJsZWQ6IGJvb2xlYW4sXG5cdCAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IGJvb2xlYW4sXG5cdCAgb2Zmc2V0UGFyZW50OiBIVE1MRWxlbWVudCxcblx0ICBncmlkOiBbbnVtYmVyLCBudW1iZXJdLFxuXHQgIGhhbmRsZTogc3RyaW5nLFxuXHQgIG9uU3RhcnQ6IERyYWdnYWJsZUV2ZW50SGFuZGxlcixcblx0ICBvbkRyYWc6IERyYWdnYWJsZUV2ZW50SGFuZGxlcixcblx0ICBvblN0b3A6IERyYWdnYWJsZUV2ZW50SGFuZGxlcixcblx0ICBvbk1vdXNlRG93bjogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQsXG5cdH07Ki9cblxuXHR2YXIgRHJhZ2dhYmxlQ29yZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgaW5oZXJpdHMoRHJhZ2dhYmxlQ29yZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ICBmdW5jdGlvbiBEcmFnZ2FibGVDb3JlKCkge1xuXHQgICAgdmFyIF9yZWY7XG5cblx0ICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cblx0ICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdnYWJsZUNvcmUpO1xuXG5cdCAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBEcmFnZ2FibGVDb3JlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJhZ2dhYmxlQ29yZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuXHQgICAgICBkcmFnZ2luZzogZmFsc2UsXG5cdCAgICAgIC8vIFVzZWQgd2hpbGUgZHJhZ2dpbmcgdG8gZGV0ZXJtaW5lIGRlbHRhcy5cblx0ICAgICAgbGFzdFg6IE5hTiwgbGFzdFk6IE5hTixcblx0ICAgICAgdG91Y2hJZGVudGlmaWVyOiBudWxsXG5cdCAgICB9LCBfdGhpcy5oYW5kbGVEcmFnU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIGF0dGFjaCBldmVudCBoYW5kbGVycyBvbiB0b3Agb2YgdGhpcyBvbmUuXG5cdCAgICAgIF90aGlzLnByb3BzLm9uTW91c2VEb3duKGUpO1xuXG5cdCAgICAgIC8vIE9ubHkgYWNjZXB0IGxlZnQtY2xpY2tzLlxuXHQgICAgICBpZiAoIV90aGlzLnByb3BzLmFsbG93QW55Q2xpY2sgJiYgdHlwZW9mIGUuYnV0dG9uID09PSAnbnVtYmVyJyAmJiBlLmJ1dHRvbiAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIC8vIEdldCBub2Rlcy4gQmUgc3VyZSB0byBncmFiIHJlbGF0aXZlIGRvY3VtZW50IChjb3VsZCBiZSBpZnJhbWVkKVxuXHQgICAgICB2YXIgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG5cdCAgICAgIGlmICghdGhpc05vZGUgfHwgIXRoaXNOb2RlLm93bmVyRG9jdW1lbnQgfHwgIXRoaXNOb2RlLm93bmVyRG9jdW1lbnQuYm9keSkge1xuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignPERyYWdnYWJsZUNvcmU+IG5vdCBtb3VudGVkIG9uIERyYWdTdGFydCEnKTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXNOb2RlLm93bmVyRG9jdW1lbnQ7XG5cblx0ICAgICAgLy8gU2hvcnQgY2lyY3VpdCBpZiBoYW5kbGUgb3IgY2FuY2VsIHByb3Agd2FzIHByb3ZpZGVkIGFuZCBzZWxlY3RvciBkb2Vzbid0IG1hdGNoLlxuXG5cdCAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhKGUudGFyZ2V0IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5Ob2RlKSB8fCBfdGhpcy5wcm9wcy5oYW5kbGUgJiYgIW1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlLnRhcmdldCwgX3RoaXMucHJvcHMuaGFuZGxlLCB0aGlzTm9kZSkgfHwgX3RoaXMucHJvcHMuY2FuY2VsICYmIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlLnRhcmdldCwgX3RoaXMucHJvcHMuY2FuY2VsLCB0aGlzTm9kZSkpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBTZXQgdG91Y2ggaWRlbnRpZmllciBpbiBjb21wb25lbnQgc3RhdGUgaWYgdGhpcyBpcyBhIHRvdWNoIGV2ZW50LiBUaGlzIGFsbG93cyB1cyB0b1xuXHQgICAgICAvLyBkaXN0aW5ndWlzaCBiZXR3ZWVuIGluZGl2aWR1YWwgdG91Y2hlcyBvbiBtdWx0aXRvdWNoIHNjcmVlbnMgYnkgaWRlbnRpZnlpbmcgd2hpY2hcblx0ICAgICAgLy8gdG91Y2hwb2ludCB3YXMgc2V0IHRvIHRoaXMgZWxlbWVudC5cblx0ICAgICAgdmFyIHRvdWNoSWRlbnRpZmllciA9IGdldFRvdWNoSWRlbnRpZmllcihlKTtcblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0b3VjaElkZW50aWZpZXI6IHRvdWNoSWRlbnRpZmllciB9KTtcblxuXHQgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZHJhZyBwb2ludCBmcm9tIHRoZSBldmVudC4gVGhpcyBpcyB1c2VkIGFzIHRoZSBvZmZzZXQuXG5cdCAgICAgIHZhciBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0b3VjaElkZW50aWZpZXIsIF90aGlzKTtcblx0ICAgICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjsgLy8gbm90IHBvc3NpYmxlIGJ1dCBzYXRpc2ZpZXMgZmxvd1xuXHQgICAgICB2YXIgeCA9IHBvc2l0aW9uLngsXG5cdCAgICAgICAgICB5ID0gcG9zaXRpb24ueTtcblxuXHQgICAgICAvLyBDcmVhdGUgYW4gZXZlbnQgb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHBhcmVudHMgbmVlZCB0byBtYWtlIGEgZGVjaXNpb24gaGVyZS5cblxuXHQgICAgICB2YXIgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEoX3RoaXMsIHgsIHkpO1xuXG5cdCAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlci4gSWYgaXQgcmV0dXJucyBleHBsaWNpdCBmYWxzZSwgY2FuY2VsLlxuXHQgICAgICBsb2coJ2NhbGxpbmcnLCBfdGhpcy5wcm9wcy5vblN0YXJ0KTtcblx0ICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uU3RhcnQoZSwgY29yZUV2ZW50KTtcblx0ICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHJldHVybjtcblxuXHQgICAgICAvLyBBZGQgYSBzdHlsZSB0byB0aGUgYm9keSB0byBkaXNhYmxlIHVzZXItc2VsZWN0LiBUaGlzIHByZXZlbnRzIHRleHQgZnJvbVxuXHQgICAgICAvLyBiZWluZyBzZWxlY3RlZCBhbGwgb3ZlciB0aGUgcGFnZS5cblx0ICAgICAgaWYgKF90aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSBhZGRVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQpO1xuXG5cdCAgICAgIC8vIEluaXRpYXRlIGRyYWdnaW5nLiBTZXQgdGhlIGN1cnJlbnQgeCBhbmQgeSBhcyBvZmZzZXRzXG5cdCAgICAgIC8vIHNvIHdlIGtub3cgaG93IG11Y2ggd2UndmUgbW92ZWQgZHVyaW5nIHRoZSBkcmFnLiBUaGlzIGFsbG93cyB1c1xuXHQgICAgICAvLyB0byBkcmFnIGVsZW1lbnRzIGFyb3VuZCBldmVuIGlmIHRoZXkgaGF2ZSBiZWVuIG1vdmVkLCB3aXRob3V0IGlzc3VlLlxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgZHJhZ2dpbmc6IHRydWUsXG5cblx0ICAgICAgICBsYXN0WDogeCxcblx0ICAgICAgICBsYXN0WTogeVxuXHQgICAgICB9KTtcblxuXHQgICAgICAvLyBBZGQgZXZlbnRzIHRvIHRoZSBkb2N1bWVudCBkaXJlY3RseSBzbyB3ZSBjYXRjaCB3aGVuIHRoZSB1c2VyJ3MgbW91c2UvdG91Y2ggbW92ZXMgb3V0c2lkZSBvZlxuXHQgICAgICAvLyB0aGlzIGVsZW1lbnQuIFdlIHVzZSBkaWZmZXJlbnQgZXZlbnRzIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGRldGVjdGVkIHRoYXQgdGhpc1xuXHQgICAgICAvLyBpcyBhIHRvdWNoLWNhcGFibGUgZGV2aWNlLlxuXHQgICAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgX3RoaXMuaGFuZGxlRHJhZyk7XG5cdCAgICAgIGFkZEV2ZW50KG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5zdG9wLCBfdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG5cdCAgICB9LCBfdGhpcy5oYW5kbGVEcmFnID0gZnVuY3Rpb24gKGUpIHtcblxuXHQgICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb2JpbGUgZGV2aWNlcywgbGlrZSBpcGFkL2lwaG9uZS5cblx0ICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIGUucHJldmVudERlZmF1bHQoKTtcblxuXHQgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZHJhZyBwb2ludCBmcm9tIHRoZSBldmVudC4gVGhpcyBpcyB1c2VkIGFzIHRoZSBvZmZzZXQuXG5cdCAgICAgIHZhciBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCBfdGhpcy5zdGF0ZS50b3VjaElkZW50aWZpZXIsIF90aGlzKTtcblx0ICAgICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcblx0ICAgICAgdmFyIHggPSBwb3NpdGlvbi54LFxuXHQgICAgICAgICAgeSA9IHBvc2l0aW9uLnk7XG5cblx0ICAgICAgLy8gU25hcCB0byBncmlkIGlmIHByb3AgaGFzIGJlZW4gcHJvdmlkZWRcblxuXHQgICAgICBpZiAoQXJyYXkuaXNBcnJheShfdGhpcy5wcm9wcy5ncmlkKSkge1xuXHQgICAgICAgIHZhciBfZGVsdGFYID0geCAtIF90aGlzLnN0YXRlLmxhc3RYLFxuXHQgICAgICAgICAgICBfZGVsdGFZID0geSAtIF90aGlzLnN0YXRlLmxhc3RZO1xuXG5cdCAgICAgICAgdmFyIF9zbmFwVG9HcmlkID0gc25hcFRvR3JpZChfdGhpcy5wcm9wcy5ncmlkLCBfZGVsdGFYLCBfZGVsdGFZKTtcblxuXHQgICAgICAgIHZhciBfc25hcFRvR3JpZDIgPSBzbGljZWRUb0FycmF5KF9zbmFwVG9HcmlkLCAyKTtcblxuXHQgICAgICAgIF9kZWx0YVggPSBfc25hcFRvR3JpZDJbMF07XG5cdCAgICAgICAgX2RlbHRhWSA9IF9zbmFwVG9HcmlkMlsxXTtcblxuXHQgICAgICAgIGlmICghX2RlbHRhWCAmJiAhX2RlbHRhWSkgcmV0dXJuOyAvLyBza2lwIHVzZWxlc3MgZHJhZ1xuXHQgICAgICAgIHggPSBfdGhpcy5zdGF0ZS5sYXN0WCArIF9kZWx0YVgsIHkgPSBfdGhpcy5zdGF0ZS5sYXN0WSArIF9kZWx0YVk7XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEoX3RoaXMsIHgsIHkpO1xuXG5cdCAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlci4gSWYgaXQgcmV0dXJucyBleHBsaWNpdCBmYWxzZSwgdHJpZ2dlciBlbmQuXG5cdCAgICAgIHZhciBzaG91bGRVcGRhdGUgPSBfdGhpcy5wcm9wcy5vbkRyYWcoZSwgY29yZUV2ZW50KTtcblx0ICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgLy8gJEZsb3dJZ25vcmVcblx0ICAgICAgICAgIF90aGlzLmhhbmRsZURyYWdTdG9wKG5ldyBNb3VzZUV2ZW50KCdtb3VzZXVwJykpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgLy8gT2xkIGJyb3dzZXJzXG5cdCAgICAgICAgICB2YXIgZXZlbnQgPSAoKGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpIC8qOiBhbnkqLykgLyo6IE1vdXNlVG91Y2hFdmVudCovKTtcblx0ICAgICAgICAgIC8vIEkgc2VlIHdoeSB0aGlzIGluc2FuaXR5IHdhcyBkZXByZWNhdGVkXG5cdCAgICAgICAgICAvLyAkRmxvd0lnbm9yZVxuXHQgICAgICAgICAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoJ21vdXNldXAnLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcblx0ICAgICAgICAgIF90aGlzLmhhbmRsZURyYWdTdG9wKGV2ZW50KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGxhc3RYOiB4LFxuXHQgICAgICAgIGxhc3RZOiB5XG5cdCAgICAgIH0pO1xuXHQgICAgfSwgX3RoaXMuaGFuZGxlRHJhZ1N0b3AgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm47XG5cblx0ICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIF90aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgX3RoaXMpO1xuXHQgICAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuO1xuXHQgICAgICB2YXIgeCA9IHBvc2l0aW9uLngsXG5cdCAgICAgICAgICB5ID0gcG9zaXRpb24ueTtcblxuXHQgICAgICB2YXIgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEoX3RoaXMsIHgsIHkpO1xuXG5cdCAgICAgIHZhciB0aGlzTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblx0ICAgICAgaWYgKHRoaXNOb2RlKSB7XG5cdCAgICAgICAgLy8gUmVtb3ZlIHVzZXItc2VsZWN0IGhhY2tcblx0ICAgICAgICBpZiAoX3RoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXModGhpc05vZGUub3duZXJEb2N1bWVudCk7XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBSZXNldCB0aGUgZWwuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG5cdCAgICAgICAgbGFzdFg6IE5hTixcblx0ICAgICAgICBsYXN0WTogTmFOXG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlclxuXHQgICAgICBfdGhpcy5wcm9wcy5vblN0b3AoZSwgY29yZUV2ZW50KTtcblxuXHQgICAgICBpZiAodGhpc05vZGUpIHtcblx0ICAgICAgICByZW1vdmVFdmVudCh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgX3RoaXMuaGFuZGxlRHJhZyk7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQodGhpc05vZGUub3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIF90aGlzLmhhbmRsZURyYWdTdG9wKTtcblx0ICAgICAgfVxuXHQgICAgfSwgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7IC8vIG9uIHRvdWNoc2NyZWVuIGxhcHRvcHMgd2UgY291bGQgc3dpdGNoIGJhY2sgdG8gbW91c2VcblxuXHQgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuXHQgICAgfSwgX3RoaXMub25Nb3VzZVVwID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlO1xuXG5cdCAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcblx0ICAgIH0sIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuXHQgICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IudG91Y2g7XG5cblx0ICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdGFydChlKTtcblx0ICAgIH0sIF90aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAvLyBXZSdyZSBvbiBhIHRvdWNoIGRldmljZSBub3csIHNvIGNoYW5nZSB0aGUgZXZlbnQgaGFuZGxlcnNcblx0ICAgICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG5cdCAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcblx0ICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG5cdCAgfVxuXG5cdCAgY3JlYXRlQ2xhc3MoRHJhZ2dhYmxlQ29yZSwgW3tcblx0ICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0ICAgICAgLy8gUmVtb3ZlIGFueSBsZWZ0b3ZlciBldmVudCBoYW5kbGVycy4gUmVtb3ZlIGJvdGggdG91Y2ggYW5kIG1vdXNlIGhhbmRsZXJzIGluIGNhc2Vcblx0ICAgICAgLy8gc29tZSBicm93c2VyIHF1aXJrIGNhdXNlZCBhIHRvdWNoIGV2ZW50IHRvIGZpcmUgZHVyaW5nIGEgbW91c2UgbW92ZSwgb3IgdmljZSB2ZXJzYS5cblx0ICAgICAgdmFyIHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzTm9kZSkge1xuXHQgICAgICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpc05vZGUub3duZXJEb2N1bWVudDtcblxuXHQgICAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcblx0ICAgICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IudG91Y2guc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG5cdCAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMob3duZXJEb2N1bWVudCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gU2FtZSBhcyBvbk1vdXNlRG93biAoc3RhcnQgZHJhZyksIGJ1dCBub3cgY29uc2lkZXIgdGhpcyBhIHRvdWNoIGRldmljZS5cblxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICAvLyBSZXVzZSB0aGUgY2hpbGQgcHJvdmlkZWRcblx0ICAgICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0Yylcblx0ICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG5cdCAgICAgICAgc3R5bGU6IHN0eWxlSGFja3ModGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5zdHlsZSksXG5cblx0ICAgICAgICAvLyBOb3RlOiBtb3VzZU1vdmUgaGFuZGxlciBpcyBhdHRhY2hlZCB0byBkb2N1bWVudCBzbyBpdCB3aWxsIHN0aWxsIGZ1bmN0aW9uXG5cdCAgICAgICAgLy8gd2hlbiB0aGUgdXNlciBkcmFncyBxdWlja2x5IGFuZCBsZWF2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cblx0ICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbk1vdXNlRG93bixcblx0ICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMub25Ub3VjaFN0YXJ0LFxuXHQgICAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXG5cdCAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vblRvdWNoRW5kXG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0ICByZXR1cm4gRHJhZ2dhYmxlQ29yZTtcblx0fShSZWFjdC5Db21wb25lbnQpO1xuXG5cdERyYWdnYWJsZUNvcmUuZGlzcGxheU5hbWUgPSAnRHJhZ2dhYmxlQ29yZSc7XG5cdERyYWdnYWJsZUNvcmUucHJvcFR5cGVzID0ge1xuXHQgIC8qKlxuXHQgICAqIGBhbGxvd0FueUNsaWNrYCBhbGxvd3MgZHJhZ2dpbmcgdXNpbmcgYW55IG1vdXNlIGJ1dHRvbi5cblx0ICAgKiBCeSBkZWZhdWx0LCB3ZSBvbmx5IGFjY2VwdCB0aGUgbGVmdCBidXR0b24uXG5cdCAgICpcblx0ICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuXHQgICAqL1xuXHQgIGFsbG93QW55Q2xpY2s6IHByb3BUeXBlcy5ib29sLFxuXG5cdCAgLyoqXG5cdCAgICogYGRpc2FibGVkYCwgaWYgdHJ1ZSwgc3RvcHMgdGhlIDxEcmFnZ2FibGU+IGZyb20gZHJhZ2dpbmcuIEFsbCBoYW5kbGVycyxcblx0ICAgKiB3aXRoIHRoZSBleGNlcHRpb24gb2YgYG9uTW91c2VEb3duYCwgd2lsbCBub3QgZmlyZS5cblx0ICAgKi9cblx0ICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXG5cblx0ICAvKipcblx0ICAgKiBCeSBkZWZhdWx0LCB3ZSBhZGQgJ3VzZXItc2VsZWN0Om5vbmUnIGF0dHJpYnV0ZXMgdG8gdGhlIGRvY3VtZW50IGJvZHlcblx0ICAgKiB0byBwcmV2ZW50IHVnbHkgdGV4dCBzZWxlY3Rpb24gZHVyaW5nIGRyYWcuIElmIHRoaXMgaXMgY2F1c2luZyBwcm9ibGVtc1xuXHQgICAqIGZvciB5b3VyIGFwcCwgc2V0IHRoaXMgdG8gYGZhbHNlYC5cblx0ICAgKi9cblx0ICBlbmFibGVVc2VyU2VsZWN0SGFjazogcHJvcFR5cGVzLmJvb2wsXG5cblx0ICAvKipcblx0ICAgKiBgb2Zmc2V0UGFyZW50YCwgaWYgc2V0LCB1c2VzIHRoZSBwYXNzZWQgRE9NIG5vZGUgdG8gY29tcHV0ZSBkcmFnIG9mZnNldHNcblx0ICAgKiBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBwYXJlbnQgbm9kZS5cblx0ICAgKi9cblx0ICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uIG9mZnNldFBhcmVudChwcm9wcyAvKjogRHJhZ2dhYmxlQ29yZVByb3BzKi8sIHByb3BOYW1lIC8qOiAkS2V5czxEcmFnZ2FibGVDb3JlUHJvcHM+Ki8pIHtcblx0ICAgIGlmIChwcm9wc1twcm9wTmFtZV0gJiYgcHJvcHNbcHJvcE5hbWVdLm5vZGVUeXBlICE9PSAxKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlXFwncyBvZmZzZXRQYXJlbnQgbXVzdCBiZSBhIERPTSBOb2RlLicpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvKipcblx0ICAgKiBgZ3JpZGAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgZHJhZ2dpbmcgc2hvdWxkIHNuYXAgdG8uXG5cdCAgICovXG5cdCAgZ3JpZDogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLm51bWJlciksXG5cblx0ICAvKipcblx0ICAgKiBgc2NhbGVgIHNwZWNpZmllcyB0aGUgc2NhbGUgb2YgdGhlIGFyZWEgeW91IGFyZSBkcmFnZ2luZyBpbnNpZGUgb2YuIEl0IGFsbG93c1xuXHQgICAqIHRoZSBkcmFnIGRlbHRhcyB0byBzY2FsZSBjb3JyZWN0bHkgd2l0aCBob3cgZmFyIHpvb21lZCBpbi9vdXQgeW91IGFyZS5cblx0ICAgKi9cblx0ICBzY2FsZTogcHJvcFR5cGVzLm51bWJlcixcblxuXHQgIC8qKlxuXHQgICAqIGBoYW5kbGVgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgYXMgdGhlIGhhbmRsZSB0aGF0IGluaXRpYXRlcyBkcmFnLlxuXHQgICAqXG5cdCAgICogRXhhbXBsZTpcblx0ICAgKlxuXHQgICAqIGBgYGpzeFxuXHQgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0ICAgKiAgICAgICAgIHJldHVybiAoXG5cdCAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGhhbmRsZT1cIi5oYW5kbGVcIj5cblx0ICAgKiAgICAgICAgICAgICAgPGRpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCI+Q2xpY2sgbWUgdG8gZHJhZzwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGlzIHNvbWUgb3RoZXIgY29udGVudDwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG5cdCAgICogICAgICAgICApO1xuXHQgICAqICAgICAgIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqIGBgYFxuXHQgICAqL1xuXHQgIGhhbmRsZTogcHJvcFR5cGVzLnN0cmluZyxcblxuXHQgIC8qKlxuXHQgICAqIGBjYW5jZWxgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgdG8gcHJldmVudCBkcmFnIGluaXRpYWxpemF0aW9uLlxuXHQgICAqXG5cdCAgICogRXhhbXBsZTpcblx0ICAgKlxuXHQgICAqIGBgYGpzeFxuXHQgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0ICAgKiAgICAgICAgICAgcmV0dXJuKFxuXHQgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSBjYW5jZWw9XCIuY2FuY2VsXCI+XG5cdCAgICogICAgICAgICAgICAgICAgICAgPGRpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+WW91IGNhbid0IGRyYWcgZnJvbSBoZXJlPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2PkRyYWdnaW5nIGhlcmUgd29ya3MgZmluZTwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG5cdCAgICogICAgICAgICAgICk7XG5cdCAgICogICAgICAgfVxuXHQgICAqICAgfSk7XG5cdCAgICogYGBgXG5cdCAgICovXG5cdCAgY2FuY2VsOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG5cdCAgLyoqXG5cdCAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RhcnRzLlxuXHQgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cblx0ICAgKi9cblx0ICBvblN0YXJ0OiBwcm9wVHlwZXMuZnVuYyxcblxuXHQgIC8qKlxuXHQgICAqIENhbGxlZCB3aGlsZSBkcmFnZ2luZy5cblx0ICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG5cdCAgICovXG5cdCAgb25EcmFnOiBwcm9wVHlwZXMuZnVuYyxcblxuXHQgIC8qKlxuXHQgICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIHN0b3BzLlxuXHQgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgdGhlIGRyYWcgd2lsbCByZW1haW4gYWN0aXZlLlxuXHQgICAqL1xuXHQgIG9uU3RvcDogcHJvcFR5cGVzLmZ1bmMsXG5cblx0ICAvKipcblx0ICAgKiBBIHdvcmthcm91bmQgb3B0aW9uIHdoaWNoIGNhbiBiZSBwYXNzZWQgaWYgb25Nb3VzZURvd24gbmVlZHMgdG8gYmUgYWNjZXNzZWQsXG5cdCAgICogc2luY2UgaXQnbGwgYWx3YXlzIGJlIGJsb2NrZWQgKGFzIHRoZXJlIGlzIGludGVybmFsIHVzZSBvZiBvbk1vdXNlRG93bilcblx0ICAgKi9cblx0ICBvbk1vdXNlRG93bjogcHJvcFR5cGVzLmZ1bmMsXG5cblx0ICAvKipcblx0ICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG5cdCAgICovXG5cdCAgY2xhc3NOYW1lOiBkb250U2V0TWUsXG5cdCAgc3R5bGU6IGRvbnRTZXRNZSxcblx0ICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxuXHR9O1xuXHREcmFnZ2FibGVDb3JlLmRlZmF1bHRQcm9wcyA9IHtcblx0ICBhbGxvd0FueUNsaWNrOiBmYWxzZSwgLy8gYnkgZGVmYXVsdCBvbmx5IGFjY2VwdCBsZWZ0IGNsaWNrXG5cdCAgY2FuY2VsOiBudWxsLFxuXHQgIGRpc2FibGVkOiBmYWxzZSxcblx0ICBlbmFibGVVc2VyU2VsZWN0SGFjazogdHJ1ZSxcblx0ICBvZmZzZXRQYXJlbnQ6IG51bGwsXG5cdCAgaGFuZGxlOiBudWxsLFxuXHQgIGdyaWQ6IG51bGwsXG5cdCAgdHJhbnNmb3JtOiBudWxsLFxuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7fSxcblx0ICBvbkRyYWc6IGZ1bmN0aW9uIG9uRHJhZygpIHt9LFxuXHQgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKCkge30sXG5cdCAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKCkge31cblx0fTtcblxuXHQvKjo6IGltcG9ydCB0eXBlIHtEcmFnZ2FibGVFdmVudEhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvdHlwZXMnOyovXG5cdC8qOjogaW1wb3J0IHR5cGUge0VsZW1lbnQgYXMgUmVhY3RFbGVtZW50fSBmcm9tICdyZWFjdCc7Ki9cblx0Lyo6OiB0eXBlIERyYWdnYWJsZVN0YXRlID0ge1xuXHQgIGRyYWdnaW5nOiBib29sZWFuLFxuXHQgIGRyYWdnZWQ6IGJvb2xlYW4sXG5cdCAgeDogbnVtYmVyLCB5OiBudW1iZXIsXG5cdCAgc2xhY2tYOiBudW1iZXIsIHNsYWNrWTogbnVtYmVyLFxuXHQgIGlzRWxlbWVudFNWRzogYm9vbGVhblxuXHR9OyovXG5cblxuXHQvL1xuXHQvLyBEZWZpbmUgPERyYWdnYWJsZT5cblx0Ly9cblxuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZVByb3BzID0ge1xuXHQgIC4uLiRFeGFjdDxEcmFnZ2FibGVDb3JlUHJvcHM+LFxuXHQgIGF4aXM6ICdib3RoJyB8ICd4JyB8ICd5JyB8ICdub25lJyxcblx0ICBib3VuZHM6IERyYWdnYWJsZUJvdW5kcyB8IHN0cmluZyB8IGZhbHNlLFxuXHQgIGRlZmF1bHRDbGFzc05hbWU6IHN0cmluZyxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6IHN0cmluZyxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogc3RyaW5nLFxuXHQgIGRlZmF1bHRQb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uLFxuXHQgIHBvc2l0aW9uT2Zmc2V0OiBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbixcblx0ICBwb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uLFxuXHQgIHNjYWxlOiBudW1iZXJcblx0fTsqL1xuXG5cdHZhciBEcmFnZ2FibGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHQgIGluaGVyaXRzKERyYWdnYWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ICBmdW5jdGlvbiBEcmFnZ2FibGUocHJvcHMgLyo6IERyYWdnYWJsZVByb3BzKi8pIHtcblx0ICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdnYWJsZSk7XG5cblx0ICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyYWdnYWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyYWdnYWJsZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHQgICAgX3RoaXMub25EcmFnU3RhcnQgPSBmdW5jdGlvbiAoZSwgY29yZURhdGEpIHtcblxuXHQgICAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG5cdCAgICAgIHZhciBzaG91bGRTdGFydCA9IF90aGlzLnByb3BzLm9uU3RhcnQoZSwgY3JlYXRlRHJhZ2dhYmxlRGF0YShfdGhpcywgY29yZURhdGEpKTtcblx0ICAgICAgLy8gS2lsbHMgc3RhcnQgZXZlbnQgb24gY29yZSBhcyB3ZWxsLCBzbyBtb3ZlIGhhbmRsZXJzIGFyZSBuZXZlciBib3VuZC5cblx0ICAgICAgaWYgKHNob3VsZFN0YXJ0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKHsgZHJhZ2dpbmc6IHRydWUsIGRyYWdnZWQ6IHRydWUgfSk7XG5cdCAgICB9O1xuXG5cdCAgICBfdGhpcy5vbkRyYWcgPSBmdW5jdGlvbiAoZSwgY29yZURhdGEpIHtcblx0ICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIHZhciB1aURhdGEgPSBjcmVhdGVEcmFnZ2FibGVEYXRhKF90aGlzLCBjb3JlRGF0YSk7XG5cblx0ICAgICAgdmFyIG5ld1N0YXRlIC8qOiAkU2hhcGU8RHJhZ2dhYmxlU3RhdGU+Ki8gPSB7XG5cdCAgICAgICAgeDogdWlEYXRhLngsXG5cdCAgICAgICAgeTogdWlEYXRhLnlcblx0ICAgICAgfTtcblxuXHQgICAgICAvLyBLZWVwIHdpdGhpbiBib3VuZHMuXG5cdCAgICAgIGlmIChfdGhpcy5wcm9wcy5ib3VuZHMpIHtcblx0ICAgICAgICAvLyBTYXZlIG9yaWdpbmFsIHggYW5kIHkuXG5cdCAgICAgICAgdmFyIF94ID0gbmV3U3RhdGUueCxcblx0ICAgICAgICAgICAgX3kgPSBuZXdTdGF0ZS55O1xuXG5cdCAgICAgICAgLy8gQWRkIHNsYWNrIHRvIHRoZSB2YWx1ZXMgdXNlZCB0byBjYWxjdWxhdGUgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBpZlxuXHQgICAgICAgIC8vIHdlIHN0YXJ0IHJlbW92aW5nIHNsYWNrLCB0aGUgZWxlbWVudCB3b24ndCByZWFjdCB0byBpdCByaWdodCBhd2F5IHVudGlsIGl0J3MgYmVlblxuXHQgICAgICAgIC8vIGNvbXBsZXRlbHkgcmVtb3ZlZC5cblxuXHQgICAgICAgIG5ld1N0YXRlLnggKz0gX3RoaXMuc3RhdGUuc2xhY2tYO1xuXHQgICAgICAgIG5ld1N0YXRlLnkgKz0gX3RoaXMuc3RhdGUuc2xhY2tZO1xuXG5cdCAgICAgICAgLy8gR2V0IGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgY2VpbC9mbG9vciB0aGUgeCBhbmQgeSB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuXG5cblx0ICAgICAgICB2YXIgX2dldEJvdW5kUG9zaXRpb24gPSBnZXRCb3VuZFBvc2l0aW9uKF90aGlzLCBuZXdTdGF0ZS54LCBuZXdTdGF0ZS55KSxcblx0ICAgICAgICAgICAgX2dldEJvdW5kUG9zaXRpb24yID0gc2xpY2VkVG9BcnJheShfZ2V0Qm91bmRQb3NpdGlvbiwgMiksXG5cdCAgICAgICAgICAgIG5ld1N0YXRlWCA9IF9nZXRCb3VuZFBvc2l0aW9uMlswXSxcblx0ICAgICAgICAgICAgbmV3U3RhdGVZID0gX2dldEJvdW5kUG9zaXRpb24yWzFdO1xuXG5cdCAgICAgICAgbmV3U3RhdGUueCA9IG5ld1N0YXRlWDtcblx0ICAgICAgICBuZXdTdGF0ZS55ID0gbmV3U3RhdGVZO1xuXG5cdCAgICAgICAgLy8gUmVjYWxjdWxhdGUgc2xhY2sgYnkgbm90aW5nIGhvdyBtdWNoIHdhcyBzaGF2ZWQgYnkgdGhlIGJvdW5kUG9zaXRpb24gaGFuZGxlci5cblx0ICAgICAgICBuZXdTdGF0ZS5zbGFja1ggPSBfdGhpcy5zdGF0ZS5zbGFja1ggKyAoX3ggLSBuZXdTdGF0ZS54KTtcblx0ICAgICAgICBuZXdTdGF0ZS5zbGFja1kgPSBfdGhpcy5zdGF0ZS5zbGFja1kgKyAoX3kgLSBuZXdTdGF0ZS55KTtcblxuXHQgICAgICAgIC8vIFVwZGF0ZSB0aGUgZXZlbnQgd2UgZmlyZSB0byByZWZsZWN0IHdoYXQgcmVhbGx5IGhhcHBlbmVkIGFmdGVyIGJvdW5kcyB0b29rIGVmZmVjdC5cblx0ICAgICAgICB1aURhdGEueCA9IG5ld1N0YXRlLng7XG5cdCAgICAgICAgdWlEYXRhLnkgPSBuZXdTdGF0ZS55O1xuXHQgICAgICAgIHVpRGF0YS5kZWx0YVggPSBuZXdTdGF0ZS54IC0gX3RoaXMuc3RhdGUueDtcblx0ICAgICAgICB1aURhdGEuZGVsdGFZID0gbmV3U3RhdGUueSAtIF90aGlzLnN0YXRlLnk7XG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG5cdCAgICAgIHZhciBzaG91bGRVcGRhdGUgPSBfdGhpcy5wcm9wcy5vbkRyYWcoZSwgdWlEYXRhKTtcblx0ICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdCAgICB9O1xuXG5cdCAgICBfdGhpcy5vbkRyYWdTdG9wID0gZnVuY3Rpb24gKGUsIGNvcmVEYXRhKSB7XG5cdCAgICAgIGlmICghX3RoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuXHQgICAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG5cdCAgICAgIHZhciBzaG91bGRTdG9wID0gX3RoaXMucHJvcHMub25TdG9wKGUsIGNyZWF0ZURyYWdnYWJsZURhdGEoX3RoaXMsIGNvcmVEYXRhKSk7XG5cdCAgICAgIGlmIChzaG91bGRTdG9wID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIHZhciBuZXdTdGF0ZSAvKjogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiovID0ge1xuXHQgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblx0ICAgICAgICBzbGFja1g6IDAsXG5cdCAgICAgICAgc2xhY2tZOiAwXG5cdCAgICAgIH07XG5cblx0ICAgICAgLy8gSWYgdGhpcyBpcyBhIGNvbnRyb2xsZWQgY29tcG9uZW50LCB0aGUgcmVzdWx0IG9mIHRoaXMgb3BlcmF0aW9uIHdpbGwgYmUgdG9cblx0ICAgICAgLy8gcmV2ZXJ0IGJhY2sgdG8gdGhlIG9sZCBwb3NpdGlvbi4gV2UgZXhwZWN0IGEgaGFuZGxlciBvbiBgb25EcmFnU3RvcGAsIGF0IHRoZSBsZWFzdC5cblx0ICAgICAgdmFyIGNvbnRyb2xsZWQgPSBCb29sZWFuKF90aGlzLnByb3BzLnBvc2l0aW9uKTtcblx0ICAgICAgaWYgKGNvbnRyb2xsZWQpIHtcblx0ICAgICAgICB2YXIgX3RoaXMkcHJvcHMkcG9zaXRpb24gPSBfdGhpcy5wcm9wcy5wb3NpdGlvbixcblx0ICAgICAgICAgICAgX3gyID0gX3RoaXMkcHJvcHMkcG9zaXRpb24ueCxcblx0ICAgICAgICAgICAgX3kyID0gX3RoaXMkcHJvcHMkcG9zaXRpb24ueTtcblxuXHQgICAgICAgIG5ld1N0YXRlLnggPSBfeDI7XG5cdCAgICAgICAgbmV3U3RhdGUueSA9IF95Mjtcblx0ICAgICAgfVxuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0ICAgIH07XG5cblx0ICAgIF90aGlzLnN0YXRlID0ge1xuXHQgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgY3VycmVudGx5IGRyYWdnaW5nLlxuXHQgICAgICBkcmFnZ2luZzogZmFsc2UsXG5cblx0ICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgaGF2ZSBiZWVuIGRyYWdnZWQgYmVmb3JlLlxuXHQgICAgICBkcmFnZ2VkOiBmYWxzZSxcblxuXHQgICAgICAvLyBDdXJyZW50IHRyYW5zZm9ybSB4IGFuZCB5LlxuXHQgICAgICB4OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnggOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueCxcblx0ICAgICAgeTogcHJvcHMucG9zaXRpb24gPyBwcm9wcy5wb3NpdGlvbi55IDogcHJvcHMuZGVmYXVsdFBvc2l0aW9uLnksXG5cblx0ICAgICAgLy8gVXNlZCBmb3IgY29tcGVuc2F0aW5nIGZvciBvdXQtb2YtYm91bmRzIGRyYWdzXG5cdCAgICAgIHNsYWNrWDogMCwgc2xhY2tZOiAwLFxuXG5cdCAgICAgIC8vIENhbiBvbmx5IGRldGVybWluZSBpZiBTVkcgYWZ0ZXIgbW91bnRpbmdcblx0ICAgICAgaXNFbGVtZW50U1ZHOiBmYWxzZVxuXHQgICAgfTtcblxuXHQgICAgaWYgKHByb3BzLnBvc2l0aW9uICYmICEocHJvcHMub25EcmFnIHx8IHByb3BzLm9uU3RvcCkpIHtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0ICAgICAgY29uc29sZS53YXJuKCdBIGBwb3NpdGlvbmAgd2FzIGFwcGxpZWQgdG8gdGhpcyA8RHJhZ2dhYmxlPiwgd2l0aG91dCBkcmFnIGhhbmRsZXJzLiBUaGlzIHdpbGwgbWFrZSB0aGlzICcgKyAnY29tcG9uZW50IGVmZmVjdGl2ZWx5IHVuZHJhZ2dhYmxlLiBQbGVhc2UgYXR0YWNoIGBvbkRyYWdgIG9yIGBvblN0b3BgIGhhbmRsZXJzIHNvIHlvdSBjYW4gYWRqdXN0IHRoZSAnICsgJ2Bwb3NpdGlvbmAgb2YgdGhpcyBlbGVtZW50LicpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIF90aGlzO1xuXHQgIH1cblxuXHQgIGNyZWF0ZUNsYXNzKERyYWdnYWJsZSwgW3tcblx0ICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0ICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpcyBhbiBpbnN0YW5jZW9mIFNWR0VsZW1lbnRcblx0ICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuU1ZHRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCkge1xuXHQgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VsZW1lbnRTVkc6IHRydWUgfSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyAvKjogT2JqZWN0Ki8pIHtcblx0ICAgICAgLy8gU2V0IHgveSBpZiBwb3NpdGlvbiBoYXMgY2hhbmdlZFxuXHQgICAgICBpZiAobmV4dFByb3BzLnBvc2l0aW9uICYmICghdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCBuZXh0UHJvcHMucG9zaXRpb24ueCAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbi54IHx8IG5leHRQcm9wcy5wb3NpdGlvbi55ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnkpKSB7XG5cdCAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHg6IG5leHRQcm9wcy5wb3NpdGlvbi54LCB5OiBuZXh0UHJvcHMucG9zaXRpb24ueSB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYWdnaW5nOiBmYWxzZSB9KTsgLy8gcHJldmVudHMgaW52YXJpYW50IGlmIHVubW91bnRlZCB3aGlsZSBkcmFnZ2luZ1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkgLyo6IFJlYWN0RWxlbWVudDxhbnk+Ki8ge1xuXHQgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cblx0ICAgICAgdmFyIHN0eWxlID0ge30sXG5cdCAgICAgICAgICBzdmdUcmFuc2Zvcm0gPSBudWxsO1xuXG5cdCAgICAgIC8vIElmIHRoaXMgaXMgY29udHJvbGxlZCwgd2UgZG9uJ3Qgd2FudCB0byBtb3ZlIGl0IC0gdW5sZXNzIGl0J3MgZHJhZ2dpbmcuXG5cdCAgICAgIHZhciBjb250cm9sbGVkID0gQm9vbGVhbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcblx0ICAgICAgdmFyIGRyYWdnYWJsZSA9ICFjb250cm9sbGVkIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmc7XG5cblx0ICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCB0aGlzLnByb3BzLmRlZmF1bHRQb3NpdGlvbjtcblx0ICAgICAgdmFyIHRyYW5zZm9ybU9wdHMgPSB7XG5cdCAgICAgICAgLy8gU2V0IGxlZnQgaWYgaG9yaXpvbnRhbCBkcmFnIGlzIGVuYWJsZWRcblx0ICAgICAgICB4OiBjYW5EcmFnWCh0aGlzKSAmJiBkcmFnZ2FibGUgPyB0aGlzLnN0YXRlLnggOiBwb3NpdGlvbi54LFxuXG5cdCAgICAgICAgLy8gU2V0IHRvcCBpZiB2ZXJ0aWNhbCBkcmFnIGlzIGVuYWJsZWRcblx0ICAgICAgICB5OiBjYW5EcmFnWSh0aGlzKSAmJiBkcmFnZ2FibGUgPyB0aGlzLnN0YXRlLnkgOiBwb3NpdGlvbi55XG5cdCAgICAgIH07XG5cblx0ICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IHdhcyBTVkcsIHdlIHVzZSB0aGUgYHRyYW5zZm9ybWAgYXR0cmlidXRlLlxuXHQgICAgICBpZiAodGhpcy5zdGF0ZS5pc0VsZW1lbnRTVkcpIHtcblx0ICAgICAgICBzdmdUcmFuc2Zvcm0gPSBjcmVhdGVTVkdUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cywgdGhpcy5wcm9wcy5wb3NpdGlvbk9mZnNldCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgLy8gQWRkIGEgQ1NTIHRyYW5zZm9ybSB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZC4gVGhpcyBhbGxvd3MgdXMgdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmRcblx0ICAgICAgICAvLyB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlbGF0aXZlbHkgb3IgYWJzb2x1dGVseSBwb3NpdGlvbmVkLlxuXHQgICAgICAgIC8vIElmIHRoZSBpdGVtIHlvdSBhcmUgZHJhZ2dpbmcgYWxyZWFkeSBoYXMgYSB0cmFuc2Zvcm0gc2V0LCB3cmFwIGl0IGluIGEgPHNwYW4+IHNvIDxEcmFnZ2FibGU+XG5cdCAgICAgICAgLy8gaGFzIGEgY2xlYW4gc2xhdGUuXG5cdCAgICAgICAgc3R5bGUgPSBjcmVhdGVDU1NUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cywgdGhpcy5wcm9wcy5wb3NpdGlvbk9mZnNldCk7XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0ICAgICAgICAgIGRlZmF1bHRDbGFzc05hbWUgPSBfcHJvcHMuZGVmYXVsdENsYXNzTmFtZSxcblx0ICAgICAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyA9IF9wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmcsXG5cdCAgICAgICAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCA9IF9wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDtcblxuXG5cdCAgICAgIHZhciBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cblx0ICAgICAgLy8gTWFyayB3aXRoIGNsYXNzIHdoaWxlIGRyYWdnaW5nXG5cdCAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc25hbWVzKGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJywgZGVmYXVsdENsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIGRlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmcsIHRoaXMuc3RhdGUuZHJhZ2dpbmcpLCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQsIHRoaXMuc3RhdGUuZHJhZ2dlZCksIF9jbGFzc05hbWVzKSk7XG5cblx0ICAgICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG5cdCAgICAgIC8vIFRoaXMgbWFrZXMgaXQgZmxleGlibGUgdG8gdXNlIHdoYXRldmVyIGVsZW1lbnQgaXMgd2FudGVkIChkaXYsIHVsLCBldGMpXG5cdCAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgIERyYWdnYWJsZUNvcmUsXG5cdCAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgb25TdGFydDogdGhpcy5vbkRyYWdTdGFydCwgb25EcmFnOiB0aGlzLm9uRHJhZywgb25TdG9wOiB0aGlzLm9uRHJhZ1N0b3AgfSksXG5cdCAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG5cdCAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0ICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUsIHN0eWxlKSxcblx0ICAgICAgICAgIHRyYW5zZm9ybTogc3ZnVHJhbnNmb3JtXG5cdCAgICAgICAgfSlcblx0ICAgICAgKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdCAgcmV0dXJuIERyYWdnYWJsZTtcblx0fShSZWFjdC5Db21wb25lbnQpO1xuXG5cdERyYWdnYWJsZS5kaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGUnO1xuXHREcmFnZ2FibGUucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIERyYWdnYWJsZUNvcmUucHJvcFR5cGVzLCB7XG5cblx0ICAvKipcblx0ICAgKiBgYXhpc2AgZGV0ZXJtaW5lcyB3aGljaCBheGlzIHRoZSBkcmFnZ2FibGUgY2FuIG1vdmUuXG5cdCAgICpcblx0ICAgKiAgTm90ZSB0aGF0IGFsbCBjYWxsYmFja3Mgd2lsbCBzdGlsbCByZXR1cm4gZGF0YSBhcyBub3JtYWwuIFRoaXMgb25seVxuXHQgICAqICBjb250cm9scyBmbHVzaGluZyB0byB0aGUgRE9NLlxuXHQgICAqXG5cdCAgICogJ2JvdGgnIGFsbG93cyBtb3ZlbWVudCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkuXG5cdCAgICogJ3gnIGxpbWl0cyBtb3ZlbWVudCB0byBob3Jpem9udGFsIGF4aXMuXG5cdCAgICogJ3knIGxpbWl0cyBtb3ZlbWVudCB0byB2ZXJ0aWNhbCBheGlzLlxuXHQgICAqICdub25lJyBsaW1pdHMgYWxsIG1vdmVtZW50LlxuXHQgICAqXG5cdCAgICogRGVmYXVsdHMgdG8gJ2JvdGgnLlxuXHQgICAqL1xuXHQgIGF4aXM6IHByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAneCcsICd5JywgJ25vbmUnXSksXG5cblx0ICAvKipcblx0ICAgKiBgYm91bmRzYCBkZXRlcm1pbmVzIHRoZSByYW5nZSBvZiBtb3ZlbWVudCBhdmFpbGFibGUgdG8gdGhlIGVsZW1lbnQuXG5cdCAgICogQXZhaWxhYmxlIHZhbHVlcyBhcmU6XG5cdCAgICpcblx0ICAgKiAncGFyZW50JyByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSBEcmFnZ2FibGUncyBwYXJlbnQgbm9kZS5cblx0ICAgKlxuXHQgICAqIEFsdGVybmF0aXZlbHksIHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzLCBhbGwgb2Ygd2hpY2ggYXJlIG9wdGlvbmFsOlxuXHQgICAqXG5cdCAgICoge2xlZnQ6IExFRlRfQk9VTkQsIHJpZ2h0OiBSSUdIVF9CT1VORCwgYm90dG9tOiBCT1RUT01fQk9VTkQsIHRvcDogVE9QX0JPVU5EfVxuXHQgICAqXG5cdCAgICogQWxsIHZhbHVlcyBhcmUgaW4gcHguXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgcmV0dXJuIChcblx0ICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgYm91bmRzPXt7cmlnaHQ6IDMwMCwgYm90dG9tOiAzMDB9fT5cblx0ICAgKiAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XG5cdCAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuXHQgICAqICAgICAgICAgKTtcblx0ICAgKiAgICAgICB9XG5cdCAgICogICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBib3VuZHM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zaGFwZSh7XG5cdCAgICBsZWZ0OiBwcm9wVHlwZXMubnVtYmVyLFxuXHQgICAgcmlnaHQ6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICB0b3A6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICBib3R0b206IHByb3BUeXBlcy5udW1iZXJcblx0ICB9KSwgcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXSksXG5cblx0ICBkZWZhdWx0Q2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogcHJvcFR5cGVzLnN0cmluZyxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogcHJvcFR5cGVzLnN0cmluZyxcblxuXHQgIC8qKlxuXHQgICAqIGBkZWZhdWx0UG9zaXRpb25gIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IHRoZSBkcmFnZ2VkIGl0ZW0gc2hvdWxkIHN0YXJ0IGF0XG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICAgICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgICAgICByZXR1cm4gKFxuXHQgICAqICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBkZWZhdWx0UG9zaXRpb249e3t4OiAyNSwgeTogMjV9fT5cblx0ICAgKiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkkgc3RhcnQgd2l0aCB0cmFuc2Zvcm1YOiAyNXB4IGFuZCB0cmFuc2Zvcm1ZOiAyNXB4OzwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG5cdCAgICogICAgICAgICAgICAgICk7XG5cdCAgICogICAgICAgICAgfVxuXHQgICAqICAgICAgfSk7XG5cdCAgICogYGBgXG5cdCAgICovXG5cdCAgZGVmYXVsdFBvc2l0aW9uOiBwcm9wVHlwZXMuc2hhcGUoe1xuXHQgICAgeDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHk6IHByb3BUeXBlcy5udW1iZXJcblx0ICB9KSxcblx0ICBwb3NpdGlvbk9mZnNldDogcHJvcFR5cGVzLnNoYXBlKHtcblx0ICAgIHg6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5udW1iZXIsIHByb3BUeXBlcy5zdHJpbmddKSxcblx0ICAgIHk6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5udW1iZXIsIHByb3BUeXBlcy5zdHJpbmddKVxuXHQgIH0pLFxuXG5cdCAgLyoqXG5cdCAgICogYHBvc2l0aW9uYCwgaWYgcHJlc2VudCwgZGVmaW5lcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudC5cblx0ICAgKlxuXHQgICAqICBUaGlzIGlzIHNpbWlsYXIgdG8gaG93IGZvcm0gZWxlbWVudHMgaW4gUmVhY3Qgd29yayAtIGlmIG5vIGBwb3NpdGlvbmAgaXMgc3VwcGxpZWQsIHRoZSBjb21wb25lbnRcblx0ICAgKiAgaXMgdW5jb250cm9sbGVkLlxuXHQgICAqXG5cdCAgICogRXhhbXBsZTpcblx0ICAgKlxuXHQgICAqIGBgYGpzeFxuXHQgICAqICAgICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0ICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcblx0ICAgKiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgcG9zaXRpb249e3t4OiAyNSwgeTogMjV9fT5cblx0ICAgKiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkkgc3RhcnQgd2l0aCB0cmFuc2Zvcm1YOiAyNXB4IGFuZCB0cmFuc2Zvcm1ZOiAyNXB4OzwvZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG5cdCAgICogICAgICAgICAgICAgICk7XG5cdCAgICogICAgICAgICAgfVxuXHQgICAqICAgICAgfSk7XG5cdCAgICogYGBgXG5cdCAgICovXG5cdCAgcG9zaXRpb246IHByb3BUeXBlcy5zaGFwZSh7XG5cdCAgICB4OiBwcm9wVHlwZXMubnVtYmVyLFxuXHQgICAgeTogcHJvcFR5cGVzLm51bWJlclxuXHQgIH0pLFxuXG5cdCAgLyoqXG5cdCAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxuXHQgICAqL1xuXHQgIGNsYXNzTmFtZTogZG9udFNldE1lLFxuXHQgIHN0eWxlOiBkb250U2V0TWUsXG5cdCAgdHJhbnNmb3JtOiBkb250U2V0TWVcblx0fSk7XG5cdERyYWdnYWJsZS5kZWZhdWx0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgRHJhZ2dhYmxlQ29yZS5kZWZhdWx0UHJvcHMsIHtcblx0ICBheGlzOiAnYm90aCcsXG5cdCAgYm91bmRzOiBmYWxzZSxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lOiAncmVhY3QtZHJhZ2dhYmxlJyxcblx0ICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6ICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dpbmcnLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnZWQnLFxuXHQgIGRlZmF1bHRQb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG5cdCAgcG9zaXRpb246IG51bGwsXG5cdCAgc2NhbGU6IDFcblx0fSk7XG5cblx0Ly8gUHJldmlvdXMgdmVyc2lvbnMgb2YgdGhpcyBsaWIgZXhwb3J0ZWQgPERyYWdnYWJsZT4gYXMgdGhlIHJvb3QgZXhwb3J0LiBBcyB0byBub3QgYnJlYWtcblx0Ly8gdGhlbSwgb3IgVHlwZVNjcmlwdCwgd2UgZXhwb3J0ICpib3RoKiBhcyB0aGUgcm9vdCBhbmQgYXMgJ2RlZmF1bHQnLlxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL3B1bGwvMjU0XG5cdC8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzI2NlxuXHREcmFnZ2FibGUuZGVmYXVsdCA9IERyYWdnYWJsZTtcblx0RHJhZ2dhYmxlLkRyYWdnYWJsZUNvcmUgPSBEcmFnZ2FibGVDb3JlO1xuXG5cdHJldHVybiBEcmFnZ2FibGU7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1kcmFnZ2FibGUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZHJhZ2dhYmxlL2Rpc3QvcmVhY3QtZHJhZ2dhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciByZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIERyYWdnYWJsZSA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdyZWFjdC1kcmFnZ2FibGUnKSk7XG52YXIgUmVzaXphYmxlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3JlLXJlc2l6YWJsZScpKTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgcmVzaXphYmxlU3R5bGUgPSB7XG4gIHdpZHRoOiAnYXV0bycsXG4gIGhlaWdodDogJ2F1dG8nLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogMCxcbiAgbGVmdDogMFxufTtcblxudmFyIFJuZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFJuZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm5kKHByb3BzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUm5kKTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJuZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJuZCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgejogcHJvcHMueixcbiAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICBib3VuZHM6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuICAgICAgbWF4V2lkdGg6IHByb3BzLm1heFdpZHRoLFxuICAgICAgbWF4SGVpZ2h0OiBwcm9wcy5tYXhIZWlnaHQsXG4gICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5vblJlc2l6ZVN0YXJ0ID0gX3RoaXMub25SZXNpemVTdGFydC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vblJlc2l6ZSA9IF90aGlzLm9uUmVzaXplLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uUmVzaXplU3RvcCA9IF90aGlzLm9uUmVzaXplU3RvcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdTdGFydCA9IF90aGlzLm9uRHJhZ1N0YXJ0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZyA9IF90aGlzLm9uRHJhZy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdTdG9wID0gX3RoaXMub25EcmFnU3RvcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5nZXRNYXhTaXplc0Zyb21Qcm9wcyA9IF90aGlzLmdldE1heFNpemVzRnJvbVByb3BzLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJuZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnogIT09IG5leHRQcm9wcy56KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB6OiBuZXh0UHJvcHMueiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRQYXJlbnRQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcmVudFNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXJlbnRTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzaXphYmxlLmdldFBhcmVudFNpemUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNYXhTaXplc0Zyb21Qcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1heFNpemVzRnJvbVByb3BzKCkge1xuICAgICAgdmFyIG1heFdpZHRoID0gdHlwZW9mIHRoaXMucHJvcHMubWF4V2lkdGggPT09ICd1bmRlZmluZWQnID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiB0aGlzLnByb3BzLm1heFdpZHRoO1xuICAgICAgdmFyIG1heEhlaWdodCA9IHR5cGVvZiB0aGlzLnByb3BzLm1heEhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IHRoaXMucHJvcHMubWF4SGVpZ2h0O1xuICAgICAgcmV0dXJuIHsgbWF4V2lkdGg6IG1heFdpZHRoLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlbGZFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZkVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIHJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFBhcmVudFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGFyZW50UG9zaXRpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0U2VsZkVsZW1lbnQoKTtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoIXBhcmVudCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBpZiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNb3VudGVkOiB0cnVlIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNb3VudGVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZ1N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnU3RhcnQoZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnU3RhcnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdTdGFydChlLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5wcm9wcy5ib3VuZHMpIHJldHVybjtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnJlc2l6YWJsZSAmJiB0aGlzLnJlc2l6YWJsZS5wYXJlbnROb2RlO1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50JyA/IHBhcmVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wcm9wcy5ib3VuZHMpO1xuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQ7XG4gICAgICB2YXIgdGFyZ2V0VG9wID0gdGFyZ2V0UmVjdC50b3A7XG4gICAgICB2YXIgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBwYXJlbnRMZWZ0ID0gcGFyZW50UmVjdC5sZWZ0O1xuICAgICAgdmFyIHBhcmVudFRvcCA9IHBhcmVudFJlY3QudG9wO1xuICAgICAgdmFyIGxlZnQgPSB0YXJnZXRMZWZ0IC0gcGFyZW50TGVmdDtcbiAgICAgIHZhciB0b3AgPSB0YXJnZXRUb3AgLSBwYXJlbnRUb3A7XG4gICAgICBpZiAoIXRoaXMucmVzaXphYmxlKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYm91bmRzOiB7XG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgcmlnaHQ6IGxlZnQgKyAodGFyZ2V0Lm9mZnNldFdpZHRoIC0gdGhpcy5yZXNpemFibGUuc2l6ZS53aWR0aCksXG4gICAgICAgICAgYm90dG9tOiB0aGlzLnByb3BzLl9mcmVlQm90dG9tQm91bmRzIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICA/IDIxNDc0ODM2NDcgOiB0b3AgKyAodGFyZ2V0Lm9mZnNldEhlaWdodCAtIHRoaXMucmVzaXphYmxlLnNpemUuaGVpZ2h0KSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZyhlLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWcoZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnU3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0b3AoZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnU3RvcCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0b3AoZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemVTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoZSwgZGlyLCByZWZUb0VsZW1lbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3JpZ2luYWw6IHsgeDogdGhpcy5kcmFnZ2FibGUuc3RhdGUueCwgeTogdGhpcy5kcmFnZ2FibGUuc3RhdGUueSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcykge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5yZXNpemFibGUgJiYgdGhpcy5yZXNpemFibGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50JyA/IHBhcmVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wcm9wcy5ib3VuZHMpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMuZ2V0U2VsZkVsZW1lbnQoKTtcbiAgICAgICAgaWYgKHNlbGYgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIF9nZXRNYXhTaXplc0Zyb21Qcm9wcyA9IHRoaXMuZ2V0TWF4U2l6ZXNGcm9tUHJvcHMoKSxcbiAgICAgICAgICAgICAgX21heFdpZHRoID0gX2dldE1heFNpemVzRnJvbVByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgICBfbWF4SGVpZ2h0ID0gX2dldE1heFNpemVzRnJvbVByb3BzLm1heEhlaWdodDtcblxuICAgICAgICAgIHZhciBwYXJlbnRTaXplID0gdGhpcy5nZXRQYXJlbnRTaXplKCk7XG4gICAgICAgICAgaWYgKF9tYXhXaWR0aCAmJiB0eXBlb2YgX21heFdpZHRoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKF9tYXhXaWR0aC5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgICAgICAgIHZhciByYXRpbyA9IE51bWJlcihfbWF4V2lkdGgucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgICAgICAgIF9tYXhXaWR0aCA9IHBhcmVudFNpemUud2lkdGggKiByYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heFdpZHRoLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICAgIF9tYXhXaWR0aCA9IE51bWJlcihfbWF4V2lkdGgucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX21heEhlaWdodCAmJiB0eXBlb2YgX21heEhlaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChfbWF4SGVpZ2h0LmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgICAgICAgdmFyIF9yYXRpbyA9IE51bWJlcihfbWF4SGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgICBfbWF4SGVpZ2h0ID0gcGFyZW50U2l6ZS53aWR0aCAqIF9yYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heEhlaWdodC5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICAgICAgICBfbWF4SGVpZ2h0ID0gTnVtYmVyKF9tYXhIZWlnaHQucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2VsZlJlY3QgPSBzZWxmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciBzZWxmTGVmdCA9IHNlbGZSZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHNlbGZUb3AgPSBzZWxmUmVjdC50b3A7XG4gICAgICAgICAgdmFyIHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldFJlY3QudG9wO1xuICAgICAgICAgIGlmICgvbGVmdC9pLnRlc3QoZGlyKSAmJiB0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgdmFyIG1heCA9IHNlbGZMZWZ0IC0gdGFyZ2V0TGVmdCArIHRoaXMucmVzaXphYmxlLnNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF4V2lkdGg6IG1heCA+IE51bWJlcihfbWF4V2lkdGgpID8gX21heFdpZHRoIDogbWF4IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL3JpZ2h0L2kudGVzdChkaXIpKSB7XG4gICAgICAgICAgICB2YXIgX21heCA9IHRhcmdldC5vZmZzZXRXaWR0aCArICh0YXJnZXRMZWZ0IC0gc2VsZkxlZnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1heFdpZHRoOiBfbWF4ID4gTnVtYmVyKF9tYXhXaWR0aCkgPyBfbWF4V2lkdGggOiBfbWF4IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL3RvcC9pLnRlc3QoZGlyKSAmJiB0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgdmFyIF9tYXgyID0gc2VsZlRvcCAtIHRhcmdldFRvcCArIHRoaXMucmVzaXphYmxlLnNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1heEhlaWdodDogX21heDIgPiBOdW1iZXIoX21heEhlaWdodCkgPyBfbWF4SGVpZ2h0IDogX21heDJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL2JvdHRvbS9pLnRlc3QoZGlyKSkge1xuICAgICAgICAgICAgdmFyIF9tYXgzID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArICh0YXJnZXRUb3AgLSBzZWxmVG9wKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF9tYXgzID4gTnVtYmVyKF9tYXhIZWlnaHQpID8gX21heEhlaWdodCA6IF9tYXgzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgIG1heEhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemVTdGFydChlLCBkaXIsIHJlZlRvRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZShlLCBkaXJlY3Rpb24sIHJlZlRvUmVzaXphYmxlRWxlbWVudCwgZGVsdGEpIHtcbiAgICAgIHZhciB4ID0gdm9pZCAwO1xuICAgICAgdmFyIHkgPSB2b2lkIDA7XG4gICAgICBpZiAoL2xlZnQvaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhdGUub3JpZ2luYWwueCAtIGRlbHRhLndpZHRoO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZS5zZXRTdGF0ZSh7IHg6IHggfSk7XG4gICAgICB9XG4gICAgICBpZiAoL3RvcC9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICB5ID0gdGhpcy5zdGF0ZS5vcmlnaW5hbC55IC0gZGVsdGEuaGVpZ2h0O1xuICAgICAgICB0aGlzLmRyYWdnYWJsZS5zZXRTdGF0ZSh7IHk6IHkgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplKGUsIGRpcmVjdGlvbiwgcmVmVG9SZXNpemFibGVFbGVtZW50LCBkZWx0YSwge1xuICAgICAgICAgIHg6IHggfHwgdGhpcy5kcmFnZ2FibGUuc3RhdGUueCxcbiAgICAgICAgICB5OiB5IHx8IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemVTdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVTdG9wKGUsIGRpcmVjdGlvbiwgcmVmVG9SZXNpemFibGVFbGVtZW50LCBkZWx0YSkge1xuICAgICAgdmFyIF9nZXRNYXhTaXplc0Zyb21Qcm9wczIgPSB0aGlzLmdldE1heFNpemVzRnJvbVByb3BzKCksXG4gICAgICAgICAgbWF4V2lkdGggPSBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMyLm1heFdpZHRoLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9nZXRNYXhTaXplc0Zyb21Qcm9wczIubWF4SGVpZ2h0O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWF4V2lkdGg6IG1heFdpZHRoLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RvcCkge1xuICAgICAgICB2YXIgX3Bvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLngsXG4gICAgICAgICAgeTogdGhpcy5kcmFnZ2FibGUuc3RhdGUueVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RvcChlLCBkaXJlY3Rpb24sIHJlZlRvUmVzaXphYmxlRWxlbWVudCwgZGVsdGEsIF9wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNpemUoc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLnJlc2l6YWJsZSkgcmV0dXJuO1xuICAgICAgdGhpcy5yZXNpemFibGUudXBkYXRlU2l6ZSh7IHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0IH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnNldFN0YXRlKHBvc2l0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVaSW5kZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVaSW5kZXgoeikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHo6IHogfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjdXJzb3JTdHlsZSA9IHRoaXMucHJvcHMuZGlzYWJsZURyYWdnaW5nIHx8IHRoaXMucHJvcHMuZHJhZ0hhbmRsZUNsYXNzTmFtZSA/IHsgY3Vyc29yOiAnbm9ybWFsJyB9IDogeyBjdXJzb3I6ICdtb3ZlJyB9O1xuICAgICAgdmFyIGlubmVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgcmVzaXphYmxlU3R5bGUsIHtcbiAgICAgICAgekluZGV4OiB0aGlzLnN0YXRlLnpcbiAgICAgIH0sIGN1cnNvclN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcbiAgICAgIC8vIEhBQ0s6IFdhaXQgZm9yIHNldHRpbmcgcmVsYXRpdmUgdG8gcGFyZW50IGVsZW1lbnQuXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNNb3VudGVkKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCk7XG4gICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5fZnJlZUJvdHRvbUJvdW5kcyA/IDIxNDc0ODM2NDcgOiB0aGlzLnN0YXRlLm1heEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIERyYWdnYWJsZSxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICAgIF90aGlzMi5kcmFnZ2FibGUgPSBjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlOiB0aGlzLnByb3BzLmRyYWdIYW5kbGVDbGFzc05hbWUsXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uOiB0aGlzLnByb3BzLmRlZmF1bHQsXG4gICAgICAgICAgb25TdGFydDogdGhpcy5vbkRyYWdTdGFydCxcbiAgICAgICAgICBvbkRyYWc6IHRoaXMub25EcmFnLFxuICAgICAgICAgIG9uU3RvcDogdGhpcy5vbkRyYWdTdG9wLFxuICAgICAgICAgIGF4aXM6IHRoaXMucHJvcHMuZHJhZ0F4aXMsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZURyYWdnaW5nLFxuICAgICAgICAgIGdyaWQ6IHRoaXMucHJvcHMuZHJhZ0dyaWQsXG4gICAgICAgICAgYm91bmRzOiB0aGlzLnByb3BzLmJvdW5kcyA/IHRoaXMuc3RhdGUuYm91bmRzIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnByb3BzLnBvc2l0aW9uLFxuICAgICAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiB0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrLFxuICAgICAgICAgIGNhbmNlbDogdGhpcy5wcm9wcy5jYW5jZWxcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBSZXNpemFibGUsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuZXh0ZW5kc1Byb3BzLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgICBfdGhpczIucmVzaXphYmxlID0gYztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0U2l6ZTogdGhpcy5wcm9wcy5kZWZhdWx0LFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy5zaXplLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLnByb3BzLmVuYWJsZVJlc2l6aW5nLFxuICAgICAgICAgICAgb25SZXNpemVTdGFydDogdGhpcy5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICAgICAgb25SZXNpemU6IHRoaXMub25SZXNpemUsXG4gICAgICAgICAgICBvblJlc2l6ZVN0b3A6IHRoaXMub25SZXNpemVTdG9wLFxuICAgICAgICAgICAgc3R5bGU6IGlubmVyU3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5wcm9wcy5taW5XaWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQsXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5zdGF0ZS5tYXhXaWR0aCxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgICAgICAgZ3JpZDogdGhpcy5wcm9wcy5yZXNpemVHcmlkLFxuICAgICAgICAgICAgaGFuZGxlV3JhcHBlckNsYXNzOiB0aGlzLnByb3BzLnJlc2l6ZUhhbmRsZVdyYXBwZXJDbGFzcyxcbiAgICAgICAgICAgIGhhbmRsZVdyYXBwZXJTdHlsZTogdGhpcy5wcm9wcy5yZXNpemVIYW5kbGVXcmFwcGVyU3R5bGUsXG4gICAgICAgICAgICBsb2NrQXNwZWN0UmF0aW86IHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDogdGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ6IHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQsXG4gICAgICAgICAgICBoYW5kbGVTdHlsZXM6IHRoaXMucHJvcHMucmVzaXplSGFuZGxlU3R5bGVzLFxuICAgICAgICAgICAgaGFuZGxlQ2xhc3NlczogdGhpcy5wcm9wcy5yZXNpemVIYW5kbGVDbGFzc2VzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUm5kO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SbmQuZGVmYXVsdFByb3BzID0ge1xuICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gIG1heEhlaWdodDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gIG9uUmVzaXplU3RhcnQ6IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoKSB7fSxcbiAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge30sXG4gIG9uUmVzaXplU3RvcDogZnVuY3Rpb24gb25SZXNpemVTdG9wKCkge30sXG4gIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydCgpIHt9LFxuICBvbkRyYWc6IGZ1bmN0aW9uIG9uRHJhZygpIHt9LFxuICBvbkRyYWdTdG9wOiBmdW5jdGlvbiBvbkRyYWdTdG9wKCkge31cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJuZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzNS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ybmQvbGliL2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=