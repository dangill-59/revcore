webpackJsonp([6],{

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formEditor_css__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__formEditor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formSurface__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_splitPoint__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_toggle_button__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workspace_reducer__ = __webpack_require__(13);










var showCurrentPageLabel = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'showcurrenttooltip' }, "Show OCR results on current page instead of Form reference page") },
    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-sticky-note-o', style: { margin: 'auto' } })));
var ScriptEditor = function (_a) {
    var listDocsHelper = _a.listDocsHelper;
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_base_splitPoint__["a" /* default */], { childProps: { listDocsHelper: listDocsHelper }, prompt: 'Loading scripts module...', loader: function (resolve) {
            __webpack_require__.e/* require.ensure */(5).then((function (require) {
                resolve(__webpack_require__(670).default);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        } }));
};
var FormEditor = function (_a) {
    var automationId = _a.id, dispatch = _a.dispatch, name = _a.name, activeTab = _a.activeTab, usingReferenceImage = _a.usingReferenceImage, sliderValue = _a.sliderValue, activePage = _a.activePage, listDocsHelper = _a.listDocsHelper, hasBarcodeFeature = _a.hasBarcodeFeature;
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"], { dialogClassName: 'model-full', show: true, onHide: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().editScript(null)); }, backdrop: 'static' },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Header, null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ButtonToolbar"], { style: { float: 'right' } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'primary', disabled: !(name && name.length >= 4), onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().saveCurrent(listDocsHelper, activePage)); } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'saveformtooltip' }, "Save changes to this automation") },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-check-square fa-2x' }))),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().editScript(null)); }, bsStyle: 'link' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'closeformtooltip' },
                            "Close automation editor ",
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("br", null),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", null, "unsaved changes will be lost")) },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-times fa-2x text-danger' })))),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], { controlId: 'formnameFormControl', validationState: (name && name.length) > 3 ? 'success' : 'warning', style: { float: 'left', maxWidth: 400 } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["InputGroup"], null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["InputGroup"].Addon, null,
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'regextooltip' },
                                "Automation name ",
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", null, "4 characters +")) },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-retweet', style: { margin: 'auto' } }))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], { type: 'text', placeholder: 'Automation name...', value: name || '', onChange: function (e) {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateAutomationProp(activePage, 'name', e.target.value));
                        } })),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"].Feedback, null)),
            (!activeTab || activeTab == 'form') && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { float: 'left', padding: '0px 10px' } },
                sliderValue < 1500 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'inctooltip' }, "Increase image size") },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: '0px', marginLeft: '5px' }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().zoom()); } },
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-search-plus fa-2x text-primary' })))),
                sliderValue > 60 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'dectooltip' }, "Decrease image size") },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: '0px' }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().zoom(true)); } },
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-search-minus  fa-2x text-primary' })))))),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { float: 'left', paddingRight: '5px', paddingTop: 8 } }, !activeTab || activeTab == 'form' ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_toggle_button___default.a, { thumbIcon: showCurrentPageLabel, value: !usingReferenceImage, onToggle: function (_) {
                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateAutomationProp(activePage, 'usingReferenceImage', !usingReferenceImage));
                }, colors: {
                    activeThumb: {
                        base: '#f37029',
                    },
                    inactiveThumb: {
                        base: '#f37029',
                    },
                } })) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'searchScriptTemplatestooltip' }, "Create Script from template") },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { style: { padding: '0px', marginLeft: '5px' }, href: 'http://scanningrevolution.com/rev-script-templates/', target: '_blank' },
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-newspaper-o text-primary' }))))),
            automationId && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { float: 'left', paddingRight: '5px', paddingTop: 8 } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'danger', bsSize: 'xs', style: { opacity: 0.8 }, onClick: function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().removeAutomation(automationId));
                    } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'formtooltip' }, "Remove automated task") },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, "delete this")))))),
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Body, null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'popupColors', style: { textAlign: 'center', padding: '5px' } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tabs"], { activeKey: activeTab, onSelect: function (key) {
                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateAutomationProp(activePage, 'activeTab', key));
                    }, className: 'rightTabs', mountOnEnter: true, id: 'automationTabs' },
                    hasBarcodeFeature && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tab"], { eventKey: 'form', title: 'Automated recognition' }, activePage ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__formSurface__["a" /* default */], { width: sliderValue, formImage: activePage })) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h3", { className: 'text-danger' }, "No image for the form"),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", null, "Please close this editor and upload an image in the new document view to configure automated recognition"))))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tab"], { eventKey: 'script', title: 'Script' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ScriptEditor, { listDocsHelper: listDocsHelper })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(function (state, ownprops) {
    var pagesState = ownprops.listPagesHelper.getmyState(state);
    var formsState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().getCurrentState(state);
    var docListState = ownprops.listDocsHelper.getmyState(state);
    var referenceImage = formsState &&
        formsState.currentlyEditing &&
        formsState.currentlyEditing.pages &&
        formsState.currentlyEditing.pages.length > 0 &&
        formsState.currentlyEditing.pages[0];
    var activePage = formsState &&
        formsState.currentlyEditing &&
        formsState.currentlyEditing.usingReferenceImage &&
        referenceImage;
    if (!activePage)
        activePage = pagesState && pagesState.activePage;
    if (!activePage &&
        docListState &&
        docListState.activeDoc &&
        docListState.activeDoc.pages &&
        docListState.activeDoc.pages.length > 0)
        activePage = docListState.activeDoc.pages[0];
    if (!activePage && referenceImage)
        activePage = referenceImage;
    var barCodeFeature = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__workspace_reducer__["a" /* default */])().getFeature('barcode', state);
    return __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, formsState && formsState.currentlyEditing, {
        activePage: activePage,
        sliderValue: (formsState && formsState.imageWidth) || 520,
        hasBarcodeFeature: !!barCodeFeature,
    }, 
    //if no forms recognition force activeTabtobe always script
    !!barCodeFeature ? {} : { activeTab: 'script' });
})(FormEditor));


/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zoneList__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_reducer__ = __webpack_require__(40);
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







var FormSurface = /** @class */ (function (_super) {
    __extends(FormSurface, _super);
    function FormSurface() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CanvasRef = null;
        _this.state = {};
        _this.hasDrawing = false;
        return _this;
    }
    FormSurface.prototype.componentDidMount = function () {
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
    };
    FormSurface.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    FormSurface.prototype.handleOnMouseDown = function (e) {
        var activeZone = this.props.activeZone;
        if (activeZone) {
            return;
        }
        var rect = this.state.canvas.getBoundingClientRect();
        this.state.context.beginPath();
        if (FormSurface.isMobile()) {
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
    FormSurface.prototype.handleOnMouseMove = function (e) {
        var activeZone = this.props.activeZone;
        if (activeZone) {
            return;
        }
        e.preventDefault();
        var _a = this.state, drawing = _a.drawing, lastX = _a.lastX, lastY = _a.lastY, canvas = _a.canvas, coordinates = _a.coordinates, dimentions = _a.dimentions;
        if (drawing) {
            var rect = canvas.getBoundingClientRect();
            var currentX = void 0;
            var currentY = void 0;
            if (FormSurface.isMobile()) {
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
    FormSurface.prototype.handleonMouseUp = function (e) {
        var _a = this.props, activeZone = _a.activeZone, formImage = _a.formImage, width = _a.width, dispatch = _a.dispatch;
        if (activeZone) {
            return;
        }
        //e.preventDefault();
        var _b = this.state, canvas = _b.canvas, dimentions = _b.dimentions, coordinates = _b.coordinates, context = _b.context;
        //const scale = dimentions.h/canvas.offsetHeight;
        //const imageScale = formImage.height/canvas.offsetHeight;
        var imageScale = formImage.width / width;
        var startPoint = coordinates.startPoint, current = coordinates.current;
        var newState = { drawing: false };
        if (startPoint && current) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().addZone(formImage, startPoint.X * imageScale, startPoint.Y * imageScale, current.X * imageScale, current.Y * imageScale));
        }
        /*newState.myPos = {
                start:{X:startPoint.X*imageScale,Y:startPoint.Y*imageScale},
                end:{X:current.X*imageScale,Y:current.Y*imageScale}
            };*/
        this.setState(newState);
        if (canvas && context)
            context.clearRect(0, 0, canvas.width, canvas.height);
    };
    FormSurface.prototype.draw = function (coordinates, scale) {
        var brushColor = this.props.brushColor;
        var _a = this.state, context = _a.context, canvas = _a.canvas, dimentions = _a.dimentions;
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
        context.lineWidth = 0;
        context.fillStyle = brushColor || 'rgba(255, 255, 0, 0.45)';
        context.fillRect(startPoint.X * scale, startPoint.Y * scale, (current.X - startPoint.X) * scale, (current.Y - startPoint.Y) * scale);
        this.hasDrawing = true;
        coordinates.lastDrawPoint = coordinates.current;
        this.setState({ coordinates: coordinates });
    };
    FormSurface.prototype.render = function () {
        var _this = this;
        var _a = this.props, formImage = _a.formImage, width = _a.width, zones = _a.zones, activeZone = _a.activeZone, availableFields = _a.availableFields, detectedArray = _a.detectedArray, dispatch = _a.dispatch;
        //const { canvas, context } = this.state;
        console.log('zones', zones);
        var imgWidth = width + 'px';
        var imgHeight = formImage.height * (width / formImage.width) + 'px';
        var imageScale = formImage.width / width;
        var canvasStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '100%',
            height: '100%',
        };
        if (activeZone)
            canvasStyle.cursor = 'crosshair';
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
                width: imgWidth,
                height: imgHeight,
                position: 'relative',
                margin: 'auto',
                cursor: 'crosshair',
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: formImage.path, style: { position: 'absolute', top: '0px', right: '0px', width: '100%', height: '100%' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("canvas", { style: canvasStyle, ref: function (ref) { return (_this.CanvasRef = ref); }, onMouseDown: this.handleOnMouseDown.bind(this), onTouchStart: this.handleOnMouseDown.bind(this), onMouseMove: this.handleOnMouseMove.bind(this), onTouchMove: this.handleOnMouseMove.bind(this), onMouseUp: this.handleonMouseUp.bind(this), onTouchEnd: this.handleonMouseUp.bind(this) }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__zoneList__["a" /* default */], { formImage: formImage, zones: zones, activeZone: activeZone, detectedArray: detectedArray, imageScale: imageScale, availableFields: availableFields, dispatch: dispatch })));
    };
    return FormSurface;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(function (state, ownprops) {
    var formsState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().getCurrentState(state);
    var projectState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__projects_reducer__["a" /* default */])().getCurrentState(state);
    var availableFields = [];
    var takenFields = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"]((formsState && formsState.currentlyEditing && formsState.currentlyEditing.zones) || [], function (zone) { return zone.id; });
    if (projectState && projectState.selectedProject) {
        availableFields = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](projectState.selectedProject.fields, function (f) { return !__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](takenFields, f.displayName); });
    }
    return __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({ availableFields: availableFields }, formsState && formsState.currentlyEditing);
})(FormSurface));


/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_select__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toggle_button__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generated_ZoneTypeModel__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(5);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var RecognizedLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__["d" /* createLoaderView */])();
var ZoneDetails = function (_a) {
    var dispatch = _a.dispatch, availableFields = _a.availableFields, zone = _a.zone, recognizedAsync = _a.recognizedAsync, formImage = _a.formImage;
    var prOptions = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](availableFields, function (field) {
        return { value: field.displayName, label: field.displayName };
    });
    if (zone.id && 'forms_recognizerField' != zone.id)
        prOptions = __WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](prOptions, { value: zone.id, label: zone.id });
    prOptions = __WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](prOptions, {
        value: 'forms_recognizerField',
        label: (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'recognizertooltip' }, "This options marks this zone to be used to determine if the page is to be processed by this form") },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Form recognizer"))),
    });
    var selectedOption = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](prOptions, function (o) { return zone && zone.id == o.label; });
    var OcrToggletooltip = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'ocrtooltip' },
        "Using ",
        zone.type);
    var OcrToggleLabelClass = 'fa fa-' + (__WEBPACK_IMPORTED_MODULE_6__generated_ZoneTypeModel__["a" /* ZoneTypeModel */].barcode == zone.type ? 'barcode' : 'font');
    var OcrToggleLabel = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: OcrToggletooltip },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: OcrToggleLabelClass, style: { margin: 'auto' } })));
    var OcrActiveLable = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'tobarcodetooltip' }, "Switch to OCR") },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-font', style: { margin: 'auto' } })));
    var BarActiveLable = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'tobarcodetooltip' }, "Switch to Barcode") },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-barcode', style: { margin: 'auto' } })));
    var regexValidtionState = null;
    var colourStyles = {
        control: function (styles) { return (__assign({}, styles, { backgroundColor: 'white', borderRadius: 0 })); },
        option: function (styles, _a) {
            var data = _a.data, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected;
            return (__assign({}, styles, { 
                //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
                backgroundColor: isFocused ? '#ffa50045' : 'white', color: 'black' }));
        },
    };
    if (recognizedAsync && recognizedAsync.result) {
        if (recognizedAsync.result.regExError)
            regexValidtionState = 'error';
        if (recognizedAsync.result.computed)
            regexValidtionState = 'success';
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { minWidth: 300, margin: 5, textAlign: 'center' } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: 55 } }, recognizedAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RecognizedLoader, { asyncResult: recognizedAsync, prompt: 'detecting' }, recognizedAsync.result && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { readOnly: true, style: { width: '100%' }, value: recognizedAsync.result.text || '' }))))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { float: 'left', paddingRight: '5px', paddingTop: 8 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_toggle_button___default.a, { thumbIcon: OcrToggleLabel, value: __WEBPACK_IMPORTED_MODULE_6__generated_ZoneTypeModel__["a" /* ZoneTypeModel */].barcode == zone.type, activeLabel: OcrActiveLable, inactiveLabel: BarActiveLable, onToggle: function () {
                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateZonePropRecalculate(formImage, zone, 'type', __WEBPACK_IMPORTED_MODULE_6__generated_ZoneTypeModel__["a" /* ZoneTypeModel */].barcode == zone.type ? __WEBPACK_IMPORTED_MODULE_6__generated_ZoneTypeModel__["a" /* ZoneTypeModel */].ocr : __WEBPACK_IMPORTED_MODULE_6__generated_ZoneTypeModel__["a" /* ZoneTypeModel */].barcode));
                    }, disabled: true, colors: {
                        activeThumb: {
                            base: '#f37029',
                        },
                        inactiveThumb: {
                            base: '#f37029',
                        },
                        active: {
                            base: '#286090db',
                        },
                        inactive: {
                            base: '#286090db',
                        },
                    } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { style: { marginLeft: 55, marginBottom: 0 }, controlId: 'formValidationSuccess2', validationState: zone.id ? 'success' : 'error', bsSize: 'sm' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'input-group', style: { zIndex: 50 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'input-group-addon' }, "@"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_select__["default"], { value: selectedOption, placeholder: 'Select field...', onChange: function (selected) {
                            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateZoneProp(zone, 'id', (selected || {}).value));
                        }, options: prOptions, searchable: true, clearable: true, getOptionValue: function (f) {
                            return 'forms_recognizerField' == f.value ? 'Forms recognizer' : f.label;
                        } })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"].Feedback, null))),
        zone.id && 'forms_recognizerField' == zone.id ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { margin: 5 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'sm' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], { style: { maxWidth: 150, float: 'right' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'accuracytooltip' },
                                "Tolerance of the match (between 0 to 10) ",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                " 0 being a perfect match",
                                ' ') },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Tolerance"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'number', value: zone.ocrTolerance || 3, onChange: function (e) {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateZoneProp(zone, 'ocrTolerance', e.target.value));
                        } }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { clear: 'both' } }))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { style: { textAlign: 'right' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Checkbox"], { inline: true, checked: zone.isBreakField, onClick: function (_) {
                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateZoneProp(zone, 'isBreakField', !zone.isBreakField));
                }, onChange: function () { } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'breakFieldtooltip' }, "This field when diffenet starts a new document") },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, " Is break field"))))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { controlId: 'regexFormControl', validationState: regexValidtionState },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'regextooltip' }, "Regular expression to parse recognized value") },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-puzzle-piece', style: { margin: 'auto' } }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'text', placeholder: 'Regular expression...', value: zone.regex || '', onChange: function (e) {
                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateZonePropRecalculate(formImage, zone, 'regex', e.target.value));
                    } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"].Feedback, null)),
        zone.regex && recognizedAsync && recognizedAsync.result && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, recognizedAsync.result.regExError ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: 'text-danger' },
            "Invalid Regex: ",
            recognizedAsync.result.regExError)) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null, "Computed value"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { readOnly: true, style: { width: '100%' }, value: recognizedAsync.result.computed || '' }))))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ButtonToolbar"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'success', bsSize: 'small', style: { float: 'right' }, disabled: !(zone.id && !zone.id.startsWith('newzone_')), onClick: function (_) {
                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateAutomationProp(formImage, 'activeZone', null));
                } }, "Done"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'danger', bsSize: 'small', style: { float: 'right' }, onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().removeZone(zone)); } }, "Remove zone"))));
};
/* harmony default export */ __webpack_exports__["a"] = (ZoneDetails);


/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zoneDetails__ = __webpack_require__(671);




var ZoneList = function (_a) {
    var zones = _a.zones, activeZone = _a.activeZone, detectedArray = _a.detectedArray, availableFields = _a.availableFields, imageScale = _a.imageScale, formImage = _a.formImage, dispatch = _a.dispatch;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, (zones || []).map(function (zone, zoneI) {
        var fieldBG = '#2860906e';
        if (zone.isBreakField)
            fieldBG = 'rgba(0, 255, 0, 0.45)';
        else if (zone.id == 'forms_recognizerField')
            fieldBG = '#f8d51e73';
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: zoneI, style: {
                position: 'absolute',
                backgroundColor: fieldBG,
                textAlign: 'left',
                top: zone.y / imageScale,
                left: zone.x / imageScale,
                height: zone.height / imageScale,
                width: zone.width / imageScale,
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"], { id: 'zoneDrop' + zoneI, className: 'transparentDropDown', open: activeZone && zone.clientReference == activeZone.clientReference, onToggle: function () {
                    if (zone === activeZone)
                        return;
                    if (activeZone)
                        return;
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */])().updateAutomationProp(formImage, 'activeZone', zone));
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"].Toggle, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-crosshairs' })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"].Menu, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__zoneDetails__["a" /* default */], { formImage: formImage, availableFields: availableFields, zone: zone, recognizedAsync: detectedArray && detectedArray[zone.clientReference], dispatch: dispatch })))));
    })));
};
/* harmony default export */ __webpack_exports__["a"] = (ZoneList);


/***/ }),

/***/ 705:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=6.1a3d7a3b645725752b72.js.map