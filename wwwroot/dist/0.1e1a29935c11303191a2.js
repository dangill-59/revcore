webpackJsonp([0],{

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onBoarding__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projectEdit__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generated_ProjectFieldTypeModel__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_base_asyncLoader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__permissions_reducer__ = __webpack_require__(162);
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










var ProjectsLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_base_asyncLoader__["d" /* createLoaderView */])();
var UsersLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_base_asyncLoader__["d" /* createLoaderView */])();
var EntryView = /** @class */ (function (_super) {
    __extends(EntryView, _super);
    function EntryView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntryView.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().loadProjects()).then(function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().initTemplates()); });
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__permissions_reducer__["a" /* default */])().loadAllUsers());
    };
    EntryView.prototype.render = function () {
        var _a = this.props, templatesAsync = _a.templatesAsync, templateSearchPattern = _a.templateSearchPattern, projectListAsync = _a.projectListAsync, availableIntegrationsAsync = _a.availableIntegrationsAsync, currentEditing = _a.currentEditing, saveProjectResultAsync = _a.saveProjectResultAsync, allUsersAsync = _a.allUsersAsync, dispatch = _a.dispatch, allroles = _a.allroles, projectNameSearch = _a.projectNameSearch;
        var projectList = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](__WEBPACK_IMPORTED_MODULE_1_lodash__["map"]((projectListAsync && __WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](projectListAsync.result)) || [], function (k) { return projectListAsync.result[k]; }), function (p) { return p.name; });
        if (!!projectNameSearch) {
            projectList = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](projectList, function (p) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["includes"](p.name.toLowerCase(), projectNameSearch.toLowerCase());
            });
        }
        return allUsersAsync ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](UsersLoader, { asyncResult: allUsersAsync, prompt: 'loading users' },
            templatesAsync &&
                templatesAsync.result &&
                projectListAsync &&
                projectListAsync.result &&
                allUsersAsync &&
                allUsersAsync.result &&
                (__WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](projectListAsync.result).length == 0 ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__onBoarding__["a" /* default */], null)) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__projectEdit__["a" /* default */], __assign({}, this.props)))),
            projectListAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ProjectsLoader, { asyncResult: projectListAsync, prompt: 'loading projects...' }, projectListAsync.result && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: 'text-center text-primary' }, "Image repositories"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small', validationState: 'success', style: { maxWidth: '400px', margin: 'auto', marginBottom: 5, magrinTop: 20 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'text', value: projectNameSearch || '', placeholder: 'Search for repository', onChange: function (e) {
                                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().projectNameSearchChanged(e.target.value));
                                } }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'searchTooltip' }, "Search for repository templates") },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-search', "aria-hidden": 'true' })))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text-center', style: {
                        marginTop: 20,
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'info', bsSize: 'xs', block: true, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().templateSearchChanged('')); } }, "Create another repository")),
                projectList.map(function (project) {
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: project.id, className: 'mainInfo', style: {
                            marginTop: 20,
                        } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { float: 'left', width: 200 } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { style: { width: '100%' }, src: project.templateImage })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { marginLeft: 210 } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: 'text-muted' }, "repository :"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'text-primary' },
                                        " ",
                                        project.name),
                                    availableIntegrationsAsync &&
                                        availableIntegrationsAsync.result &&
                                        __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](project.fields, function (f) { return f.fieldType == __WEBPACK_IMPORTED_MODULE_6__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].externalIntegration; }).map(function (field) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { key: field.displayName, src: "/plugins/" + (availableIntegrationsAsync.result[field.integrationOptions['lookupType']] || {}).icon, style: { height: '40px' } })); })),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: 'text-muted' }, "Full text OCR :"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                                        project.fullTextOcr ? 'ON' : 'OFF',
                                        " ")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'text-muted' }, "Index fields:"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](project.fields, function (f) { return f.fieldType != __WEBPACK_IMPORTED_MODULE_6__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].externalIntegration; }).map(function (field) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: field.id, style: { display: 'inline-block', margin: 10 } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, field.displayName),
                                    " :",
                                    ' ',
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { fontSize: 'smaller' } },
                                        field.unique && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "unique "),
                                        field.required && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "required "),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, field.fieldType)))); })),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text-center' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'primary', bsSize: 'sm', style: { minWidth: 100 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().editExistingProject(project)); } }, "edit"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'primary', bsSize: 'sm', style: { minWidth: 100, marginLeft: 20 }, onClick: function () {
                                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().editExistingProject(project, true));
                                        } }, "clone"))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { clear: 'both' } }),
                            "\u00A0")));
                }))))))) : null;
    };
    return EntryView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(function (state) {
    var allUsersAsync = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__permissions_reducer__["a" /* default */])().getCurrentState(state).allUsersAsync;
    var allroles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().getAllRolesFromState_helper(state);
    return __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"]({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().getCurrentState(state), { allUsersAsync: allUsersAsync, allroles: allroles });
})(EntryView));


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_phone_number_input_style_css__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_phone_number_input_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_phone_number_input_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_phone_number_input__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settingField__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(7);
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









var ProfileLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__["d" /* createLoaderView */])();
var ProfileSaver = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__["e" /* createSaverView */])();
var ProfileSetting = /** @class */ (function (_super) {
    __extends(ProfileSetting, _super);
    function ProfileSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileSetting.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().loadProfile());
    };
    ProfileSetting.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, settingAsync = _a.settingAsync, savingAsync = _a.savingAsync, settingsChanged = _a.settingsChanged;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"], { show: true, onHide: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().showSettings(false)); } },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Header, { closeButton: true },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h4", { className: 'text-primary' },
                    "My profile ",
                    settingsChanged && ' *')),
            settingAsync && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ProfileLoader, { asyncResult: settingAsync, prompt: 'loading profile' }, settingAsync.result && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("form", { className: 'static-modal', style: { padding: 10 }, onSubmit: function (e) {
                    e.preventDefault();
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().saveProfile());
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().showSettings(false));
                    console.log('Profile gets saved');
                } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("fieldset", { disabled: savingAsync && !!savingAsync.isLoading },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__settingField__["a" /* default */], { myKey: 'emailaddress', autoFocus: true, label: 'email address', dispatch: dispatch, setting: settingAsync.result }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__settingField__["a" /* default */], { myKey: 'preferredName', label: 'Name', dispatch: dispatch, setting: settingAsync.result }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__settingField__["a" /* default */], { myKey: 'fullName', label: 'Fullname', dispatch: dispatch, setting: settingAsync.result }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_phone_number_input__["a" /* default */], { required: true, defaultCountry: 'US', placeholder: 'contact phone number', value: settingAsync.result['phoneNumber'] || '', onChange: function (e) {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateProfile('phoneNumber', e));
                        } })),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Modal"].Footer, null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ProfileSaver, { asyncResult: savingAsync, prompt: 'Saving profile' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'warning', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().showSettings(false)); } }, "Close"),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'info', type: 'submit', disabled: !settingsChanged }, "Save")))))))));
    };
    return ProfileSetting;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(function (state) {
    var _a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().getCurrentState(state), settings = _a.settings, settingsChanged = _a.settingsChanged;
    return __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, { settingsChanged: settingsChanged }, ((settings && settings[__WEBPACK_IMPORTED_MODULE_5__reducer__["b" /* settingsType */].profile]) || {}));
})(ProfileSetting));


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createToken__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(7);
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





var AccessToken = /** @class */ (function (_super) {
    __extends(AccessToken, _super);
    function AccessToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessToken.prototype.componentDidMount = function () {
        var _a = this.props, dispatch = _a.dispatch, creationObject = _a.creationObject;
        var tokenParameters = __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"]({ valid: 1 }, creationObject && creationObject.token);
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateServerTokenProp('validityDays', tokenParameters.valid));
        if (tokenParameters.name)
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateServerTokenProp('name', tokenParameters.name));
    };
    AccessToken.prototype.render = function () {
        var dispatch = this.props.dispatch;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__createToken__["a" /* default */], null);
    };
    return AccessToken;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().getCurrentState(state);
})(AccessToken));


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permissions_reducer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_manage__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permissions_userRoles__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configurations__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_base_asyncLoader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_redux__ = __webpack_require__(24);
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










var UsersLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_base_asyncLoader__["d" /* createLoaderView */])();
var BadRoute = function () { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: 'text-danger text-center' }, "nothing found"); };
var ManageWorkspace = /** @class */ (function (_super) {
    __extends(ManageWorkspace, _super);
    function ManageWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManageWorkspace.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__permissions_reducer__["a" /* default */])().loadAllUsers());
    };
    ManageWorkspace.prototype.render = function () {
        var _a = this.props, allUsersAsync = _a.allUsersAsync, match = _a.match, dispatch = _a.dispatch;
        var selectedtab = (match.params && match.params.tab) || 'repositories';
        var rootPath = match.path.replace('/:tab?', '');
        return allUsersAsync ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](UsersLoader, { asyncResult: allUsersAsync, prompt: 'loading users' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tabs"], { id: 'manageWorskapce', activeKey: selectedtab, mountOnEnter: true, onSelect: function (key) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_router_redux__["push"])(rootPath + "/" + key)); }, style: { marginTop: 10, marginBottom: 20 }, className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tab"], { eventKey: 'repositories', title: 'Image repositories' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__projects_manage__["default"], null)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tab"], { eventKey: 'configurations', title: 'Configurations' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__configurations__["a" /* default */], null)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tab"], { eventKey: 'users', title: 'Team' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__permissions_userRoles__["a" /* default */], null)))))) : null;
    };
    return ManageWorkspace;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__permissions_reducer__["a" /* default */])().getCurrentState(state);
})(ManageWorkspace)));


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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Metadata; });
/* unused harmony export validateMetadata */
/* harmony export (immutable) */ __webpack_exports__["c"] = getExtPrefix;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCountryCallingCode;
/* harmony export (immutable) */ __webpack_exports__["a"] = isSupportedCountry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_semver_compare__ = __webpack_require__(742);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Added "possibleLengths" and renamed
// "country_phone_code_to_countries" to "country_calling_codes".

var V2 = '1.0.18'; // Added "idd_prefix" and "default_idd_prefix".

var V3 = '1.2.0'; // Moved `001` country code to "nonGeographic" section of metadata.

var V4 = '1.7.35';
var DEFAULT_EXT_PREFIX = ' ext. ';
/**
 * See: https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md
 */

var Metadata =
/*#__PURE__*/
function () {
  function Metadata(metadata) {
    _classCallCheck(this, Metadata);

    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }

  _createClass(Metadata, [{
    key: "getCountries",
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter(function (_) {
        return _ !== '001';
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return; // `nonGeographical` was a typo.
      // It's present in metadata generated from `1.7.35` to `1.7.37`.

      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== undefined;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }

      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    } // Deprecated.

  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      if (countryCode && countryCode !== '001') {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }

        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }

        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = undefined;
      }

      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];

      if (countryCodes) {
        // Metadata before V4 included "non-geographic entity" calling codes
        // inside `country_calling_codes` (for example, `"881":["001"]`).
        // Now the semantics of `country_calling_codes` has changed:
        // it's specifically for "countries" now.
        // Older versions of custom metadata will simply skip parsing
        // "non-geographic entity" phone numbers with new versions
        // of this library: it's not considered a bug,
        // because such numbers are extremely rare,
        // and developers extremely rarely use custom metadata.
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }

        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);

      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);

      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }

      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];

        if (metadata) {
          return metadata;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return this.metadata.countries['001'];
        }
      }
    } // Deprecated.

  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    } // Deprecated.

  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    } // Deprecated.

  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    } // Deprecated.

  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    } // Deprecated.

  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    } // Deprecated.

  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    } // Deprecated.

  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    } // Deprecated.

  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    } // Deprecated.

  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    } // Deprecated.

  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    } // Deprecated.

  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    } // Deprecated.

  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    } // Deprecated.

  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      this.selectNumberingPlan(null, callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== undefined;
    }
  }]);

  return Metadata;
}();



var NumberingPlan =
/*#__PURE__*/
function () {
  function NumberingPlan(metadata, globalMetadataObject) {
    _classCallCheck(this, NumberingPlan);

    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }

  _createClass(NumberingPlan, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    } // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.

  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    } // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "formats",
    value: function formats() {
      var _this = this;

      var formats = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats.map(function (_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    } // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      // If `national_prefix_for_parsing` is not set explicitly,
      // then infer it from `national_prefix` (if any)
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    } // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      // Versions 1.2.0 - 1.2.4: can be `[]`.

      /* istanbul ignore next */
      if (this.types() && this.types().length === 0) {
        return false;
      } // Versions <= 1.2.4: can be `undefined`.
      // Version >= 1.2.5: can be `0`.


      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);

  return NumberingPlan;
}();

var Format =
/*#__PURE__*/
function () {
  function Format(format, metadata) {
    _classCallCheck(this, Format);

    this._format = format;
    this.metadata = metadata;
  }

  _createClass(Format, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      // National prefix is omitted if there's no national prefix formatting rule
      // set for this country, or when the national prefix formatting rule
      // contains no national prefix itself, or when this rule is set but
      // national prefix is optional for this phone number format
      // (and it is not enforced explicitly)
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    } // Checks whether national prefix formatting rule contains national prefix.

  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()); // Previously, `FIRST_GROUP_ONLY_PREFIX_PATTERN` check was instead done via:
      // // Check that national prefix formatting rule is not a "dummy" one.
      // this.nationalPrefixFormattingRule() !== '$1' &&
      // // Check that national prefix formatting rule actually has national prefix digit(s).
      // // Filters out cases like "($1)".
      // // Is used in place of `libphonenumber`'s `FIRST_GROUP_ONLY_PREFIX_PATTERN_` regexp.
      // /\d/.test(this.nationalPrefixFormattingRule().replace('$1', ''))
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);

  return Format;
}();
/**
 * A pattern that is used to determine if the national prefix formatting rule
 * has the first group only, i.e., does not start with the national prefix.
 * Note that the pattern explicitly allows for unbalanced parentheses.
 */


var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;

var Type =
/*#__PURE__*/
function () {
  function Type(type, metadata) {
    _classCallCheck(this, Type);

    this.type = type;
    this.metadata = metadata;
  }

  _createClass(Type, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);

  return Type;
}();

function getType(types, type) {
  switch (type) {
    case 'FIXED_LINE':
      return types[0];

    case 'MOBILE':
      return types[1];

    case 'TOLL_FREE':
      return types[2];

    case 'PREMIUM_RATE':
      return types[3];

    case 'PERSONAL_NUMBER':
      return types[4];

    case 'VOICEMAIL':
      return types[5];

    case 'UAN':
      return types[6];

    case 'PAGER':
      return types[7];

    case 'VOIP':
      return types[8];

    case 'SHARED_COST':
      return types[9];
  }
}

function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  } // `country_phone_code_to_countries` was renamed to
  // `country_calling_codes` in `1.0.18`.


  if (!is_object(metadata) || !is_object(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(is_object(metadata) ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }' : 'a ' + type_of(metadata) + ': ' + metadata, "."));
  }
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var is_object = function is_object(_) {
  return _typeof(_) === 'object';
}; // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var type_of = function type_of(_) {
  return _typeof(_);
};
/**
 * Returns extension prefix for a country.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string?}
 * @example
 * // Returns " ext. "
 * getExtPrefix("US")
 */


function getExtPrefix(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).ext();
  }

  return DEFAULT_EXT_PREFIX;
}
/**
 * Returns "country calling code" for a country.
 * Throws an error if the country doesn't exist or isn't supported by this library.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string}
 * @example
 * // Returns "44"
 * getCountryCallingCode("GB")
 */

function getCountryCallingCode(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).countryCallingCode();
  }

  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadata) {
  // metadata = new Metadata(metadata)
  // return metadata.hasCountry(country)
  return metadata.countries[country] !== undefined;
}

function setVersion(metadata) {
  this.v1 = !metadata.version;
  this.v2 = metadata.version !== undefined && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tools_semver_compare__["a" /* default */])(metadata.version, V3) === -1;
  this.v3 = metadata.version !== undefined && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tools_semver_compare__["a" /* default */])(metadata.version, V4) === -1;
  this.v4 = metadata.version !== undefined; // && compare(metadata.version, V5) === -1
} // const ISO_COUNTRY_CODE = /^[A-Z]{2}$/
// function isCountryCode(countryCode) {
// 	return ISO_COUNTRY_CODE.test(countryCodeOrCountryCallingCode)
// }
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(653);

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__es6_ParseError__ = __webpack_require__(560);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ParseError", function() { return __WEBPACK_IMPORTED_MODULE_0__es6_ParseError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__es6_parsePhoneNumber__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parsePhoneNumber", function() { return __WEBPACK_IMPORTED_MODULE_1__es6_parsePhoneNumber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__es6_parsePhoneNumberFromString__ = __webpack_require__(739);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parsePhoneNumberFromString", function() { return __WEBPACK_IMPORTED_MODULE_2__es6_parsePhoneNumberFromString__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__es6_findNumbers__ = __webpack_require__(628);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findNumbers", function() { return __WEBPACK_IMPORTED_MODULE_3__es6_findNumbers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__es6_searchNumbers__ = __webpack_require__(636);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "searchNumbers", function() { return __WEBPACK_IMPORTED_MODULE_4__es6_searchNumbers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__es6_findPhoneNumbersInText__ = __webpack_require__(630);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findPhoneNumbersInText", function() { return __WEBPACK_IMPORTED_MODULE_5__es6_findPhoneNumbersInText__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__es6_searchPhoneNumbersInText__ = __webpack_require__(741);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "searchPhoneNumbersInText", function() { return __WEBPACK_IMPORTED_MODULE_6__es6_searchPhoneNumbersInText__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__es6_PhoneNumberMatcher__ = __webpack_require__(561);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberMatcher", function() { return __WEBPACK_IMPORTED_MODULE_7__es6_PhoneNumberMatcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__es6_AsYouType__ = __webpack_require__(627);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AsYouType", function() { return __WEBPACK_IMPORTED_MODULE_8__es6_AsYouType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__es6_getCountries__ = __webpack_require__(735);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return __WEBPACK_IMPORTED_MODULE_9__es6_getCountries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__es6_metadata__ = __webpack_require__(415);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Metadata", function() { return __WEBPACK_IMPORTED_MODULE_10__es6_metadata__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isSupportedCountry", function() { return __WEBPACK_IMPORTED_MODULE_10__es6_metadata__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryCallingCode", function() { return __WEBPACK_IMPORTED_MODULE_10__es6_metadata__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getExtPrefix", function() { return __WEBPACK_IMPORTED_MODULE_10__es6_metadata__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__es6_getExampleNumber__ = __webpack_require__(737);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getExampleNumber", function() { return __WEBPACK_IMPORTED_MODULE_11__es6_getExampleNumber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__es6_formatIncompletePhoneNumber__ = __webpack_require__(734);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatIncompletePhoneNumber", function() { return __WEBPACK_IMPORTED_MODULE_12__es6_formatIncompletePhoneNumber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__es6_parseIncompletePhoneNumber__ = __webpack_require__(634);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseIncompletePhoneNumber", function() { return __WEBPACK_IMPORTED_MODULE_13__es6_parseIncompletePhoneNumber__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parsePhoneNumberCharacter", function() { return __WEBPACK_IMPORTED_MODULE_13__es6_parseIncompletePhoneNumber__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__es6_parseDigits__ = __webpack_require__(489);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseDigits", function() { return __WEBPACK_IMPORTED_MODULE_14__es6_parseDigits__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__es6_RFC3966__ = __webpack_require__(562);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseRFC3966", function() { return __WEBPACK_IMPORTED_MODULE_15__es6_RFC3966__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatRFC3966", function() { return __WEBPACK_IMPORTED_MODULE_15__es6_RFC3966__["a"]; });























/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var borderRadius = exports.borderRadius = 4;

var colors = exports.colors = {
  text: '#222',
  textLight: '#444',
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',

  neutral0: 'hsl(0, 0%, 100%)',
  neutral1: 'hsl(0, 0%, 99%)',
  neutral2: 'hsl(0, 0%, 98%)',
  neutral3: 'hsl(0, 0%, 97%)',
  neutral4: 'hsl(0, 0%, 96%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)',
  neutral100: 'hsl(0, 0%, 0%)',

  neutral1a: 'hsla(0, 0%, 0%, 0.01)',
  neutral2a: 'hsla(0, 0%, 0%, 0.02)',
  neutral3a: 'hsla(0, 0%, 0%, 0.03)',
  neutral4a: 'hsla(0, 0%, 0%, 0.04)',
  neutral5a: 'hsla(0, 0%, 0%, 0.05)',
  neutral10a: 'hsla(0, 0%, 0%, 0.1)',
  neutral20a: 'hsla(0, 0%, 0%, 0.2)',
  neutral30a: 'hsla(0, 0%, 0%, 0.3)',
  neutral40a: 'hsla(0, 0%, 0%, 0.4)',
  neutral50a: 'hsla(0, 0%, 0%, 0.5)',
  neutral60a: 'hsla(0, 0%, 0%, 0.6)',
  neutral70a: 'hsla(0, 0%, 0%, 0.7)',
  neutral80a: 'hsla(0, 0%, 0%, 0.8)',
  neutral90a: 'hsla(0, 0%, 0%, 0.9)'
};

var baseUnit = 4;

var spacing = exports.spacing = {
  /* Used to calculate consistent margin/padding on elements */
  baseUnit: baseUnit,
  /* The minimum height of the control */
  controlHeight: 38,
  /* The amount of space between the control and menu */
  menuGutter: baseUnit * 2
};

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MIN_LENGTH_FOR_NSN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_LENGTH_FOR_NSN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MAX_LENGTH_COUNTRY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VALID_DIGITS; });
/* unused harmony export WHITESPACE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VALID_PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PLUS_CHARS; });
// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2; // The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.

var MAX_LENGTH_FOR_NSN = 17; // The maximum length of the country calling code.

var MAX_LENGTH_COUNTRY_CODE = 3; // Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).

var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9"; // `DASHES` will be right after the opening square bracket of the "character class"

var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]"; // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['

var TILDES = "~\u2053\u223C\uFF5E"; // Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.

var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B"; // const LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+')
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 431:
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
  module.exports = __webpack_require__(782)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = {
	"version": "1.7.53",
	"country_calling_codes": {
		"1": [
			"US",
			"AG",
			"AI",
			"AS",
			"BB",
			"BM",
			"BS",
			"CA",
			"DM",
			"DO",
			"GD",
			"GU",
			"JM",
			"KN",
			"KY",
			"LC",
			"MP",
			"MS",
			"PR",
			"SX",
			"TC",
			"TT",
			"VC",
			"VG",
			"VI"
		],
		"7": [
			"RU",
			"KZ"
		],
		"20": [
			"EG"
		],
		"27": [
			"ZA"
		],
		"30": [
			"GR"
		],
		"31": [
			"NL"
		],
		"32": [
			"BE"
		],
		"33": [
			"FR"
		],
		"34": [
			"ES"
		],
		"36": [
			"HU"
		],
		"39": [
			"IT",
			"VA"
		],
		"40": [
			"RO"
		],
		"41": [
			"CH"
		],
		"43": [
			"AT"
		],
		"44": [
			"GB",
			"GG",
			"IM",
			"JE"
		],
		"45": [
			"DK"
		],
		"46": [
			"SE"
		],
		"47": [
			"NO",
			"SJ"
		],
		"48": [
			"PL"
		],
		"49": [
			"DE"
		],
		"51": [
			"PE"
		],
		"52": [
			"MX"
		],
		"53": [
			"CU"
		],
		"54": [
			"AR"
		],
		"55": [
			"BR"
		],
		"56": [
			"CL"
		],
		"57": [
			"CO"
		],
		"58": [
			"VE"
		],
		"60": [
			"MY"
		],
		"61": [
			"AU",
			"CC",
			"CX"
		],
		"62": [
			"ID"
		],
		"63": [
			"PH"
		],
		"64": [
			"NZ"
		],
		"65": [
			"SG"
		],
		"66": [
			"TH"
		],
		"81": [
			"JP"
		],
		"82": [
			"KR"
		],
		"84": [
			"VN"
		],
		"86": [
			"CN"
		],
		"90": [
			"TR"
		],
		"91": [
			"IN"
		],
		"92": [
			"PK"
		],
		"93": [
			"AF"
		],
		"94": [
			"LK"
		],
		"95": [
			"MM"
		],
		"98": [
			"IR"
		],
		"211": [
			"SS"
		],
		"212": [
			"MA",
			"EH"
		],
		"213": [
			"DZ"
		],
		"216": [
			"TN"
		],
		"218": [
			"LY"
		],
		"220": [
			"GM"
		],
		"221": [
			"SN"
		],
		"222": [
			"MR"
		],
		"223": [
			"ML"
		],
		"224": [
			"GN"
		],
		"225": [
			"CI"
		],
		"226": [
			"BF"
		],
		"227": [
			"NE"
		],
		"228": [
			"TG"
		],
		"229": [
			"BJ"
		],
		"230": [
			"MU"
		],
		"231": [
			"LR"
		],
		"232": [
			"SL"
		],
		"233": [
			"GH"
		],
		"234": [
			"NG"
		],
		"235": [
			"TD"
		],
		"236": [
			"CF"
		],
		"237": [
			"CM"
		],
		"238": [
			"CV"
		],
		"239": [
			"ST"
		],
		"240": [
			"GQ"
		],
		"241": [
			"GA"
		],
		"242": [
			"CG"
		],
		"243": [
			"CD"
		],
		"244": [
			"AO"
		],
		"245": [
			"GW"
		],
		"246": [
			"IO"
		],
		"247": [
			"AC"
		],
		"248": [
			"SC"
		],
		"249": [
			"SD"
		],
		"250": [
			"RW"
		],
		"251": [
			"ET"
		],
		"252": [
			"SO"
		],
		"253": [
			"DJ"
		],
		"254": [
			"KE"
		],
		"255": [
			"TZ"
		],
		"256": [
			"UG"
		],
		"257": [
			"BI"
		],
		"258": [
			"MZ"
		],
		"260": [
			"ZM"
		],
		"261": [
			"MG"
		],
		"262": [
			"RE",
			"YT"
		],
		"263": [
			"ZW"
		],
		"264": [
			"NA"
		],
		"265": [
			"MW"
		],
		"266": [
			"LS"
		],
		"267": [
			"BW"
		],
		"268": [
			"SZ"
		],
		"269": [
			"KM"
		],
		"290": [
			"SH",
			"TA"
		],
		"291": [
			"ER"
		],
		"297": [
			"AW"
		],
		"298": [
			"FO"
		],
		"299": [
			"GL"
		],
		"350": [
			"GI"
		],
		"351": [
			"PT"
		],
		"352": [
			"LU"
		],
		"353": [
			"IE"
		],
		"354": [
			"IS"
		],
		"355": [
			"AL"
		],
		"356": [
			"MT"
		],
		"357": [
			"CY"
		],
		"358": [
			"FI",
			"AX"
		],
		"359": [
			"BG"
		],
		"370": [
			"LT"
		],
		"371": [
			"LV"
		],
		"372": [
			"EE"
		],
		"373": [
			"MD"
		],
		"374": [
			"AM"
		],
		"375": [
			"BY"
		],
		"376": [
			"AD"
		],
		"377": [
			"MC"
		],
		"378": [
			"SM"
		],
		"380": [
			"UA"
		],
		"381": [
			"RS"
		],
		"382": [
			"ME"
		],
		"383": [
			"XK"
		],
		"385": [
			"HR"
		],
		"386": [
			"SI"
		],
		"387": [
			"BA"
		],
		"389": [
			"MK"
		],
		"420": [
			"CZ"
		],
		"421": [
			"SK"
		],
		"423": [
			"LI"
		],
		"500": [
			"FK"
		],
		"501": [
			"BZ"
		],
		"502": [
			"GT"
		],
		"503": [
			"SV"
		],
		"504": [
			"HN"
		],
		"505": [
			"NI"
		],
		"506": [
			"CR"
		],
		"507": [
			"PA"
		],
		"508": [
			"PM"
		],
		"509": [
			"HT"
		],
		"590": [
			"GP",
			"BL",
			"MF"
		],
		"591": [
			"BO"
		],
		"592": [
			"GY"
		],
		"593": [
			"EC"
		],
		"594": [
			"GF"
		],
		"595": [
			"PY"
		],
		"596": [
			"MQ"
		],
		"597": [
			"SR"
		],
		"598": [
			"UY"
		],
		"599": [
			"CW",
			"BQ"
		],
		"670": [
			"TL"
		],
		"672": [
			"NF"
		],
		"673": [
			"BN"
		],
		"674": [
			"NR"
		],
		"675": [
			"PG"
		],
		"676": [
			"TO"
		],
		"677": [
			"SB"
		],
		"678": [
			"VU"
		],
		"679": [
			"FJ"
		],
		"680": [
			"PW"
		],
		"681": [
			"WF"
		],
		"682": [
			"CK"
		],
		"683": [
			"NU"
		],
		"685": [
			"WS"
		],
		"686": [
			"KI"
		],
		"687": [
			"NC"
		],
		"688": [
			"TV"
		],
		"689": [
			"PF"
		],
		"690": [
			"TK"
		],
		"691": [
			"FM"
		],
		"692": [
			"MH"
		],
		"850": [
			"KP"
		],
		"852": [
			"HK"
		],
		"853": [
			"MO"
		],
		"855": [
			"KH"
		],
		"856": [
			"LA"
		],
		"880": [
			"BD"
		],
		"886": [
			"TW"
		],
		"960": [
			"MV"
		],
		"961": [
			"LB"
		],
		"962": [
			"JO"
		],
		"963": [
			"SY"
		],
		"964": [
			"IQ"
		],
		"965": [
			"KW"
		],
		"966": [
			"SA"
		],
		"967": [
			"YE"
		],
		"968": [
			"OM"
		],
		"970": [
			"PS"
		],
		"971": [
			"AE"
		],
		"972": [
			"IL"
		],
		"973": [
			"BH"
		],
		"974": [
			"QA"
		],
		"975": [
			"BT"
		],
		"976": [
			"MN"
		],
		"977": [
			"NP"
		],
		"992": [
			"TJ"
		],
		"993": [
			"TM"
		],
		"994": [
			"AZ"
		],
		"995": [
			"GE"
		],
		"996": [
			"KG"
		],
		"998": [
			"UZ"
		]
	},
	"countries": {
		"AC": [
			"247",
			"00",
			"(?:[01589]\\d|[46])\\d{4}",
			[
				5,
				6
			]
		],
		"AD": [
			"376",
			"00",
			"(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
			[
				6,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"[135-9]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6"
					]
				]
			]
		],
		"AE": [
			"971",
			"00",
			"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{2,9})",
					"$1 $2",
					[
						"60|8"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[236]|[479][2-8]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{5})",
					"$1 $2 $3",
					[
						"[479]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"5"
					],
					"0$1"
				]
			],
			"0"
		],
		"AF": [
			"93",
			"00",
			"[2-7]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2-7]"
					],
					"0$1"
				]
			],
			"0"
		],
		"AG": [
			"1",
			"011",
			"(?:268|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([457]\\d{6})$",
			"268$1",
			0,
			"268"
		],
		"AI": [
			"1",
			"011",
			"(?:264|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2457]\\d{6})$",
			"264$1",
			0,
			"264"
		],
		"AL": [
			"355",
			"00",
			"(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3,4})",
					"$1 $2",
					[
						"80|9"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"4[2-6]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2358][2-5]|4"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[23578]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"6"
					],
					"0$1"
				]
			],
			"0"
		],
		"AM": [
			"374",
			"00",
			"(?:[1-489]\\d|55|60|77)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[89]0"
					],
					"0 $1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"2|3[12]"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"1|47"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"[3-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"AO": [
			"244",
			"00",
			"[29]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[29]"
					]
				]
			]
		],
		"AR": [
			"54",
			"00",
			"11\\d{8}|(?:[2368]|9\\d)\\d{9}",
			[
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2-$3",
					[
						"2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
						"2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
						"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
						"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
					],
					"0$1",
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					[
						"1"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[68]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2-$3",
					[
						"[23]"
					],
					"0$1",
					1
				],
				[
					"(\\d)(\\d{4})(\\d{2})(\\d{4})",
					"$2 15-$3-$4",
					[
						"9(?:2[2-469]|3[3-578])",
						"9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
						"9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
						"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
						"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
					],
					"0$1",
					0,
					"$1 $2 $3-$4"
				],
				[
					"(\\d)(\\d{2})(\\d{4})(\\d{4})",
					"$2 15-$3-$4",
					[
						"91"
					],
					"0$1",
					0,
					"$1 $2 $3-$4"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{4})",
					"$2 15-$3-$4",
					[
						"9"
					],
					"0$1",
					0,
					"$1 $2 $3-$4"
				]
			],
			"0",
			0,
			"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
			"9$1"
		],
		"AS": [
			"1",
			"011",
			"(?:[58]\\d\\d|684|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([267]\\d{6})$",
			"684$1",
			0,
			"684"
		],
		"AT": [
			"43",
			"00",
			"1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{3,12})",
					"$1 $2",
					[
						"1(?:11|[2-9])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})",
					"$1 $2",
					[
						"517"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,5})",
					"$1 $2",
					[
						"5[079]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,10})",
					"$1 $2",
					[
						"(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,9})",
					"$1 $2",
					[
						"[2-467]|5[2-6]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"5"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4,7})",
					"$1 $2 $3",
					[
						"5"
					],
					"0$1"
				]
			],
			"0"
		],
		"AU": [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					[
						"16"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					[
						"16"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"14|4"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[2378]"
					],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:30|[89])"
					]
				]
			],
			"0",
			0,
			"0|(183[12])",
			0,
			0,
			0,
			[
				[
					"8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-7]|3[2-4]|[4-6]\\d))|91(?:[0-57-9]\\d|6[0135-9])\\d)\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:6[0-8]|[78]\\d|9[02-9]))\\d{6}",
					[
						9
					]
				],
				[
					"4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",
					[
						9
					]
				],
				[
					"180(?:0\\d{3}|2)\\d{3}",
					[
						7,
						10
					]
				],
				[
					"190[0-26]\\d{6}",
					[
						10
					]
				],
				0,
				0,
				0,
				[
					"163\\d{2,6}",
					[
						5,
						6,
						7,
						8,
						9
					]
				],
				[
					"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
					[
						9
					]
				],
				[
					"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",
					[
						6,
						8,
						10
					]
				]
			],
			"0011"
		],
		"AW": [
			"297",
			"00",
			"(?:[25-79]\\d\\d|800)\\d{4}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[25-9]"
					]
				]
			]
		],
		"AX": [
			"358",
			"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
			"2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			"18",
			0,
			"00"
		],
		"AZ": [
			"994",
			"00",
			"365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"90"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"1[28]|2|365|46",
						"1[28]|2|365|46",
						"1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[13-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"BA": [
			"387",
			"00",
			"6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6[1-3]|[7-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2-$3",
					[
						"[3-5]|6[56]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"6"
					],
					"0$1"
				]
			],
			"0"
		],
		"BB": [
			"1",
			"011",
			"(?:246|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-9]\\d{6})$",
			"246$1",
			0,
			"246"
		],
		"BD": [
			"880",
			"00",
			"1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1-$2",
					[
						"31[5-8]|[459]1"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1-$2",
					[
						"3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,6})",
					"$1-$2",
					[
						"[13-9]"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{7,8})",
					"$1-$2",
					[
						"2"
					],
					"0$1"
				]
			],
			"0"
		],
		"BE": [
			"32",
			"00",
			"4\\d{8}|[1-9]\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"(?:80|9)0"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[239]|4[23]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[15-8]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"4"
					],
					"0$1"
				]
			],
			"0"
		],
		"BF": [
			"226",
			"00",
			"[025-7]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[025-7]"
					]
				]
			]
		],
		"BG": [
			"359",
			"00",
			"[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d)(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"43[1-6]|70[1-9]"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					[
						"[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"(?:70|8)0"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3",
					[
						"43[1-7]|7"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[48]|9[08]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				]
			],
			"0"
		],
		"BH": [
			"973",
			"00",
			"[136-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[13679]|8[047]"
					]
				]
			]
		],
		"BI": [
			"257",
			"00",
			"(?:[267]\\d|31)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2367]"
					]
				]
			]
		],
		"BJ": [
			"229",
			"00",
			"(?:[2689]\\d|51)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[25689]"
					]
				]
			]
		],
		"BL": [
			"590",
			"00",
			"(?:590|69\\d|976)\\d{6}",
			[
				9
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"590(?:2[7-9]|5[12]|87)\\d{4}"
				],
				[
					"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"
				],
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"976[01]\\d{5}"
				]
			]
		],
		"BM": [
			"1",
			"011",
			"(?:441|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-8]\\d{6})$",
			"441$1",
			0,
			"441"
		],
		"BN": [
			"673",
			"00",
			"[2-578]\\d{6}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-578]"
					]
				]
			]
		],
		"BO": [
			"591",
			"00(?:1\\d)?",
			"(?:[2-467]\\d\\d|8001)\\d{5}",
			[
				8,
				9
			],
			[
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"[23]|4[46]"
					]
				],
				[
					"(\\d{8})",
					"$1",
					[
						"[67]"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			],
			"0",
			0,
			"0(1\\d)?"
		],
		"BQ": [
			"599",
			"00",
			"(?:[34]1|7\\d)\\d{5}",
			[
				7
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"[347]"
		],
		"BR": [
			"55",
			"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
			"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
			[
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"300|4(?:0[02]|37)",
						"4(?:02|37)0|[34]00"
					]
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{4})",
					"$1 $2 $3",
					[
						"(?:[358]|90)0"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					[
						"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"
					],
					"($1)"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1 $2-$3",
					[
						"[16][1-9]|[2-57-9]"
					],
					"($1)"
				]
			],
			"0",
			0,
			"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
			"$2"
		],
		"BS": [
			"1",
			"011",
			"(?:242|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([3-8]\\d{6})$",
			"242$1",
			0,
			"242"
		],
		"BT": [
			"975",
			"00",
			"[17]\\d{7}|[2-8]\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-68]|7[246]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"1[67]|7"
					]
				]
			]
		],
		"BW": [
			"267",
			"00",
			"90\\d{5}|(?:[2-6]|7\\d)\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"90"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-6]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"7"
					]
				]
			]
		],
		"BY": [
			"375",
			"810",
			"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"800"
					],
					"8 $1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,4})",
					"$1 $2 $3",
					[
						"800"
					],
					"8 $1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{3})",
					"$1 $2-$3",
					[
						"1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
						"1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"
					],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"1(?:[56]|7[467])|2[1-3]"
					],
					"8 0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"[1-4]"
					],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					],
					"8 $1"
				]
			],
			"8",
			0,
			"0|80?",
			0,
			0,
			0,
			0,
			"8~10"
		],
		"BZ": [
			"501",
			"00",
			"(?:0800\\d|[2-8])\\d{6}",
			[
				7,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[2-8]"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{4})(\\d{3})",
					"$1-$2-$3-$4",
					[
						"0"
					]
				]
			]
		],
		"CA": [
			"1",
			"011",
			"(?:[2-8]\\d|90)\\d{8}",
			[
				10
			],
			0,
			"1",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"
				],
				[
					""
				],
				[
					"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
				],
				[
					"900[2-9]\\d{6}"
				],
				[
					"52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"
				],
				0,
				0,
				0,
				[
					"600[2-9]\\d{6}"
				]
			]
		],
		"CC": [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",
			[
				6,
				7,
				8,
				9,
				10
			],
			0,
			"0",
			0,
			"0|([59]\\d{7})$",
			"8$1",
			0,
			0,
			[
				[
					"8(?:51(?:0(?:02|31|60|89)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
					[
						9
					]
				],
				[
					"4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",
					[
						9
					]
				],
				[
					"180(?:0\\d{3}|2)\\d{3}",
					[
						7,
						10
					]
				],
				[
					"190[0-26]\\d{6}",
					[
						10
					]
				],
				0,
				0,
				0,
				0,
				[
					"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
					[
						9
					]
				],
				[
					"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",
					[
						6,
						8,
						10
					]
				]
			],
			"0011"
		],
		"CD": [
			"243",
			"00",
			"[189]\\d{8}|[1-68]\\d{6}",
			[
				7,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"88"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"[1-6]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[89]"
					],
					"0$1"
				]
			],
			"0"
		],
		"CF": [
			"236",
			"00",
			"(?:[27]\\d{3}|8776)\\d{4}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[278]"
					]
				]
			]
		],
		"CG": [
			"242",
			"00",
			"222\\d{6}|(?:0\\d|80)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"801"
					]
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"8"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[02]"
					]
				]
			]
		],
		"CH": [
			"41",
			"00",
			"8\\d{11}|[2-9]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8[047]|90"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2-79]|81"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"CI": [
			"225",
			"00",
			"[02-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[02-9]"
					]
				]
			]
		],
		"CK": [
			"682",
			"00",
			"[2-578]\\d{4}",
			[
				5
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					[
						"[2-578]"
					]
				]
			]
		],
		"CL": [
			"56",
			"(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
			"12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
			[
				9,
				10,
				11
			],
			[
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					[
						"219",
						"2196"
					],
					"($1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"44"
					]
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2[1-3]"
					],
					"($1)"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"9[2-9]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"
					],
					"($1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"60|8"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"60"
					]
				]
			]
		],
		"CM": [
			"237",
			"00",
			"(?:[26]\\d\\d|88)\\d{6}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"88"
					]
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"[26]"
					]
				]
			]
		],
		"CN": [
			"86",
			"00|1(?:[12]\\d|79)\\d\\d00",
			"1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{5,6})",
					"$1 $2",
					[
						"(?:10|2[0-57-9])[19]",
						"(?:10|2[0-57-9])(?:10|9[56])",
						"(?:10|2[0-57-9])(?:100|9[56])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
						"(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
						"85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
						"85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"(?:4|80)0"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"10|2(?:[02-57-9]|1[1-9])",
						"10|2(?:[02-57-9]|1[1-9])",
						"10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					[
						"9"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[3-578]"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"1[3-9]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					[
						"[12]"
					],
					"0$1",
					1
				]
			],
			"0",
			0,
			"0|(1(?:[12]\\d|79)\\d\\d)",
			0,
			0,
			0,
			0,
			"00"
		],
		"CO": [
			"57",
			"00(?:4(?:[14]4|56)|[579])",
			"(?:1\\d|3)\\d{9}|[124-8]\\d{7}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"[14][2-9]|[25-8]"
					],
					"($1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					[
						"3"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{7})",
					"$1-$2-$3",
					[
						"1"
					],
					"0$1",
					0,
					"$1 $2 $3"
				]
			],
			"0",
			0,
			"0([3579]|4(?:[14]4|56))?"
		],
		"CR": [
			"506",
			"00",
			"(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
			[
				8,
				10
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2-7]|8[3-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[89]"
					]
				]
			],
			0,
			0,
			"(19(?:0[0-2468]|1[09]|20|66|77|99))"
		],
		"CU": [
			"53",
			"119",
			"[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",
			[
				6,
				7,
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					[
						"2[1-4]|[34]"
					],
					"(0$1)"
				],
				[
					"(\\d)(\\d{6,7})",
					"$1 $2",
					[
						"7"
					],
					"(0$1)"
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"5"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"CV": [
			"238",
			"0",
			"(?:[2-59]\\d\\d|800)\\d{4}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[2-589]"
					]
				]
			]
		],
		"CW": [
			"599",
			"00",
			"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[3467]"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"9[4-8]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			"[69]"
		],
		"CX": [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",
			[
				6,
				7,
				8,
				9,
				10
			],
			0,
			"0",
			0,
			"0|([59]\\d{7})$",
			"8$1",
			0,
			0,
			[
				[
					"8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|235)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
					[
						9
					]
				],
				[
					"4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",
					[
						9
					]
				],
				[
					"180(?:0\\d{3}|2)\\d{3}",
					[
						7,
						10
					]
				],
				[
					"190[0-26]\\d{6}",
					[
						10
					]
				],
				0,
				0,
				0,
				0,
				[
					"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
					[
						9
					]
				],
				[
					"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",
					[
						6,
						8,
						10
					]
				]
			],
			"0011"
		],
		"CY": [
			"357",
			"00",
			"(?:[279]\\d|[58]0)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"[257-9]"
					]
				]
			]
		],
		"CZ": [
			"420",
			"00",
			"(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-8]|9[015-7]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"9"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"9"
					]
				]
			]
		],
		"DE": [
			"49",
			"00",
			"[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15
			],
			[
				[
					"(\\d{2})(\\d{3,13})",
					"$1 $2",
					[
						"3[02]|40|[68]9"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,12})",
					"$1 $2",
					[
						"2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
						"2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2,11})",
					"$1 $2",
					[
						"[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
						"[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"138"
					],
					"0$1"
				],
				[
					"(\\d{5})(\\d{2,10})",
					"$1 $2",
					[
						"3"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,11})",
					"$1 $2",
					[
						"181"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{4,10})",
					"$1 $2 $3",
					[
						"1(?:3|80)|9"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					[
						"1[67]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7,12})",
					"$1 $2",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d{5})(\\d{6})",
					"$1 $2",
					[
						"185",
						"1850",
						"18500"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{7})",
					"$1 $2",
					[
						"18[68]"
					],
					"0$1"
				],
				[
					"(\\d{5})(\\d{6})",
					"$1 $2",
					[
						"15[0568]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{7})",
					"$1 $2",
					[
						"15[1279]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{8})",
					"$1 $2",
					[
						"18"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{7,8})",
					"$1 $2 $3",
					[
						"1(?:6[023]|7)"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{7})",
					"$1 $2 $3",
					[
						"15[279]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{8})",
					"$1 $2 $3",
					[
						"15"
					],
					"0$1"
				]
			],
			"0"
		],
		"DJ": [
			"253",
			"00",
			"(?:2\\d|77)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[27]"
					]
				]
			]
		],
		"DK": [
			"45",
			"00",
			"[2-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2-9]"
					]
				]
			]
		],
		"DM": [
			"1",
			"011",
			"(?:[58]\\d\\d|767|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-7]\\d{6})$",
			"767$1",
			0,
			"767"
		],
		"DO": [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			0,
			0,
			0,
			"8[024]9"
		],
		"DZ": [
			"213",
			"00",
			"(?:[1-4]|[5-79]\\d|80)\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[1-4]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"9"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[5-8]"
					],
					"0$1"
				]
			],
			"0"
		],
		"EC": [
			"593",
			"00",
			"1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
			[
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2-$3",
					[
						"[2-7]"
					],
					"(0$1)",
					0,
					"$1-$2-$3"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			],
			"0"
		],
		"EE": [
			"372",
			"00",
			"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
						"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"
					]
				],
				[
					"(\\d{4})(\\d{3,4})",
					"$1 $2",
					[
						"[45]|8(?:00|[1-49])",
						"[45]|8(?:00[1-9]|[1-49])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			]
		],
		"EG": [
			"20",
			"00",
			"[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{7,8})",
					"$1 $2",
					[
						"[23]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6,7})",
					"$1 $2",
					[
						"1[35]|[4-6]|8[2468]|9[235-7]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[189]"
					],
					"0$1"
				]
			],
			"0"
		],
		"EH": [
			"212",
			"00",
			"[5-8]\\d{8}",
			[
				9
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			"528[89]"
		],
		"ER": [
			"291",
			"00",
			"[178]\\d{6}",
			[
				7
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[178]"
					],
					"0$1"
				]
			],
			"0"
		],
		"ES": [
			"34",
			"00",
			"[5-9]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[89]00"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[5-9]"
					]
				]
			]
		],
		"ET": [
			"251",
			"00",
			"(?:11|[2-59]\\d)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-59]"
					],
					"0$1"
				]
			],
			"0"
		],
		"FI": [
			"358",
			"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
			"[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d)(\\d{4,9})",
					"$1 $2",
					[
						"[2568][1-8]|3(?:0[1-9]|[1-9])|9"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					[
						"[12]00|[368]|70[07-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4,8})",
					"$1 $2",
					[
						"[1245]|7[135]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6,10})",
					"$1 $2",
					[
						"7"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			"1[03-79]|[2-9]",
			0,
			"00"
		],
		"FJ": [
			"679",
			"0(?:0|52)",
			"45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
			[
				7,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[235-9]|45"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"0"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"FK": [
			"500",
			"00",
			"[2-7]\\d{4}",
			[
				5
			]
		],
		"FM": [
			"691",
			"00",
			"(?:[39]\\d\\d|820)\\d{4}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[389]"
					]
				]
			]
		],
		"FO": [
			"298",
			"00",
			"(?:[2-8]\\d|90)\\d{4}",
			[
				6
			],
			[
				[
					"(\\d{6})",
					"$1",
					[
						"[2-9]"
					]
				]
			],
			0,
			0,
			"(10(?:01|[12]0|88))"
		],
		"FR": [
			"33",
			"00",
			"[1-9]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"8"
					],
					"0 $1"
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"[1-79]"
					],
					"0$1"
				]
			],
			"0"
		],
		"GA": [
			"241",
			"00",
			"(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2-7]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"11|[67]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"0"
					]
				]
			],
			0,
			0,
			"0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})",
			"$1"
		],
		"GB": [
			"44",
			"00",
			"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
			[
				7,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"800"
					],
					"0$1"
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:(?:38|69)7|5(?:24|39)|768|946)",
						"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5,6})",
					"$1 $2",
					[
						"1(?:[2-69][02-9]|[78])"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[25]|7(?:0|6[02-9])",
						"[25]|7(?:0|6(?:[03-9]|2[356]))"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					[
						"7"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[1389]"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|(?:4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:0\\d|20)))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
					[
						9,
						10
					]
				],
				[
					"7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
					[
						10
					]
				],
				[
					"80[08]\\d{7}|800\\d{6}|8001111"
				],
				[
					"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
					[
						7,
						10
					]
				],
				[
					"70\\d{8}",
					[
						10
					]
				],
				0,
				[
					"(?:3[0347]|55)\\d{8}",
					[
						10
					]
				],
				[
					"76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",
					[
						10
					]
				],
				[
					"56\\d{8}",
					[
						10
					]
				]
			],
			0,
			" x"
		],
		"GD": [
			"1",
			"011",
			"(?:473|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-9]\\d{6})$",
			"473$1",
			0,
			"473"
		],
		"GE": [
			"995",
			"00",
			"(?:[3-57]\\d\\d|800)\\d{6}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"70"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"32"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[57]"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[348]"
					],
					"0$1"
				]
			],
			"0"
		],
		"GF": [
			"594",
			"00",
			"(?:[56]94|976)\\d{6}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[569]"
					],
					"0$1"
				]
			],
			"0"
		],
		"GG": [
			"44",
			"00",
			"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
			[
				7,
				9,
				10
			],
			0,
			"0",
			0,
			"0|([25-9]\\d{5})$",
			"1481$1",
			0,
			0,
			[
				[
					"1481[25-9]\\d{5}",
					[
						10
					]
				],
				[
					"7(?:(?:781|839)\\d|911[17])\\d{5}",
					[
						10
					]
				],
				[
					"80[08]\\d{7}|800\\d{6}|8001111"
				],
				[
					"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",
					[
						7,
						10
					]
				],
				[
					"70\\d{8}",
					[
						10
					]
				],
				0,
				[
					"(?:3[0347]|55)\\d{8}",
					[
						10
					]
				],
				[
					"76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",
					[
						10
					]
				],
				[
					"56\\d{8}",
					[
						10
					]
				]
			]
		],
		"GH": [
			"233",
			"00",
			"(?:[235]\\d{3}|800)\\d{5}",
			[
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[235]"
					],
					"0$1"
				]
			],
			"0"
		],
		"GI": [
			"350",
			"00",
			"[256]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"2"
					]
				]
			]
		],
		"GL": [
			"299",
			"00",
			"(?:19|[2-689]\\d)\\d{4}",
			[
				6
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"19|[2-689]"
					]
				]
			]
		],
		"GM": [
			"220",
			"00",
			"[2-9]\\d{6}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-9]"
					]
				]
			]
		],
		"GN": [
			"224",
			"00",
			"722\\d{6}|(?:3|6\\d)\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"3"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[67]"
					]
				]
			]
		],
		"GP": [
			"590",
			"00",
			"(?:590|69\\d|976)\\d{6}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[569]"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"
				],
				[
					"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"
				],
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"976[01]\\d{5}"
				]
			]
		],
		"GQ": [
			"240",
			"00",
			"222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[235]"
					]
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"[89]"
					]
				]
			]
		],
		"GR": [
			"30",
			"00",
			"5005000\\d{3}|(?:[2689]\\d|70)\\d{8}",
			[
				10
			],
			[
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"21|7"
					]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					[
						"2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2689]"
					]
				]
			]
		],
		"GT": [
			"502",
			"00",
			"(?:1\\d{3}|[2-7])\\d{7}",
			[
				8,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2-7]"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			]
		],
		"GU": [
			"1",
			"011",
			"(?:[58]\\d\\d|671|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([3-9]\\d{6})$",
			"671$1",
			0,
			"671"
		],
		"GW": [
			"245",
			"00",
			"[49]\\d{8}|4\\d{6}",
			[
				7,
				9
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"40"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[49]"
					]
				]
			]
		],
		"GY": [
			"592",
			"001",
			"(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-46-9]"
					]
				]
			]
		],
		"HK": [
			"852",
			"00(?:30|5[09]|[126-9]?)",
			"8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",
			[
				5,
				6,
				7,
				8,
				9,
				11
			],
			[
				[
					"(\\d{3})(\\d{2,5})",
					"$1 $2",
					[
						"900",
						"9003"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"9"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"HN": [
			"504",
			"00",
			"8\\d{10}|[237-9]\\d{7}",
			[
				8,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"[237-9]"
					]
				]
			]
		],
		"HR": [
			"385",
			"00",
			"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"6[01]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[67]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-5]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"HT": [
			"509",
			"00",
			"[2-489]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[2-489]"
					]
				]
			]
		],
		"HU": [
			"36",
			"00",
			"[2357]\\d{8}|[1-9]\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"(06 $1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"
					],
					"(06 $1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-57-9]"
					],
					"06 $1"
				]
			],
			"06"
		],
		"ID": [
			"62",
			"00[189]",
			"(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"15"
					]
				],
				[
					"(\\d{2})(\\d{5,9})",
					"$1 $2",
					[
						"2[124]|[36]1"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,7})",
					"$1 $2",
					[
						"800"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,8})",
					"$1 $2",
					[
						"[2-79]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{3})",
					"$1-$2-$3",
					[
						"8[1-35-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6,8})",
					"$1 $2",
					[
						"1"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"804"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"80"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1-$2-$3",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"IE": [
			"353",
			"00",
			"(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"2[24-9]|47|58|6[237-9]|9[35-9]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[45]0"
					],
					"(0$1)"
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2569]|4[1-69]|7[14]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"70"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"81"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[78]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"4"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"IL": [
			"972",
			"0(?:0|1[2-9])",
			"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{4})(\\d{3})",
					"$1-$2",
					[
						"125"
					]
				],
				[
					"(\\d{4})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					[
						"121"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[2-489]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[57]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					[
						"12"
					]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1-$2",
					[
						"159"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3-$4",
					[
						"1[7-9]"
					]
				],
				[
					"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
					"$1-$2 $3-$4",
					[
						"15"
					]
				]
			],
			"0"
		],
		"IM": [
			"44",
			"00",
			"1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
			[
				10
			],
			0,
			"0",
			0,
			"0|([5-8]\\d{5})$",
			"1624$1",
			0,
			"74576|(?:16|7[56])24"
		],
		"IN": [
			"91",
			"00",
			"(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
			[
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d{8})",
					"$1",
					[
						"5(?:0|2[23]|3[03]|[67]1|88)",
						"5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
						"5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"
					],
					0,
					1
				],
				[
					"(\\d{4})(\\d{4,5})",
					"$1 $2",
					[
						"180",
						"1800"
					],
					0,
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"140"
					],
					0,
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"11|2[02]|33|4[04]|79[1-7]|80[2-46]",
						"11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
						"11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
						"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
						"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
					],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
						"1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
						"1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
					],
					"0$1",
					1
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					[
						"[6-9]"
					],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{2,4})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:6|8[06])",
						"1(?:6|8[06]0)"
					],
					0,
					1
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"18"
					],
					0,
					1
				]
			],
			"0"
		],
		"IO": [
			"246",
			"00",
			"3\\d{6}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"3"
					]
				]
			]
		],
		"IQ": [
			"964",
			"00",
			"(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-6]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				]
			],
			"0"
		],
		"IR": [
			"98",
			"00",
			"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
			[
				4,
				5,
				6,
				7,
				10
			],
			[
				[
					"(\\d{4,5})",
					"$1",
					[
						"96"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4,5})",
					"$1 $2",
					[
						"(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-8]"
					],
					"0$1"
				]
			],
			"0"
		],
		"IS": [
			"354",
			"00|1(?:0(?:01|[12]0)|100)",
			"(?:38\\d|[4-9])\\d{6}",
			[
				7,
				9
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[4-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"3"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"IT": [
			"39",
			"00",
			"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					[
						"0[26]"
					]
				],
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					[
						"0[13-57-9][0159]|8(?:03|4[17]|9[245])",
						"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"
					]
				],
				[
					"(\\d{4})(\\d{2,6})",
					"$1 $2",
					[
						"0(?:[13-579][2-46-8]|8[236-8])"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"894"
					]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"0[26]|5"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"1[4679]|[38]"
					]
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"0[13-57-9][0159]"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{5})",
					"$1 $2 $3",
					[
						"0[26]"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"0"
					]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					[
						"3"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				[
					"0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"
				],
				[
					"3[1-9]\\d{8}|3[2-9]\\d{7}",
					[
						9,
						10
					]
				],
				[
					"80(?:0\\d{3}|3)\\d{3}",
					[
						6,
						9
					]
				],
				[
					"(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",
					[
						6,
						8,
						9,
						10
					]
				],
				[
					"1(?:78\\d|99)\\d{6}",
					[
						9,
						10
					]
				],
				0,
				0,
				0,
				[
					"55\\d{8}",
					[
						10
					]
				],
				[
					"84(?:[08]\\d{3}|[17])\\d{3}",
					[
						6,
						9
					]
				]
			]
		],
		"JE": [
			"44",
			"00",
			"1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
			[
				10
			],
			0,
			"0",
			0,
			"0|([0-24-8]\\d{5})$",
			"1534$1",
			0,
			0,
			[
				[
					"1534[0-24-8]\\d{5}"
				],
				[
					"7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"
				],
				[
					"80(?:07(?:35|81)|8901)\\d{4}"
				],
				[
					"(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"
				],
				[
					"701511\\d{4}"
				],
				0,
				[
					"(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"
				],
				[
					"76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}"
				],
				[
					"56\\d{8}"
				]
			]
		],
		"JM": [
			"1",
			"011",
			"(?:[58]\\d\\d|658|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			0,
			0,
			0,
			"658|876"
		],
		"JO": [
			"962",
			"00",
			"(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
			[
				8,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2356]|87"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"[89]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					[
						"70"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				]
			],
			"0"
		],
		"JP": [
			"81",
			"010",
			"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
			[
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					[
						"(?:12|57|99)0"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])",
						"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]",
						"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"60"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2-$3",
					[
						"[36]|4(?:2[09]|7[01])",
						"[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3",
					[
						"[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])",
						"[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"800"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					[
						"[2579]|80"
					],
					"0$1"
				]
			],
			"0"
		],
		"KE": [
			"254",
			"000",
			"(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					[
						"[24-6]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"[17]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[89]"
					],
					"0$1"
				]
			],
			"0"
		],
		"KG": [
			"996",
			"00",
			"8\\d{9}|(?:[235-8]\\d|99)\\d{7}",
			[
				9,
				10
			],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					[
						"3(?:1[346]|[24-79])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[235-79]|88"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d)(\\d{2,3})",
					"$1 $2 $3 $4",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"KH": [
			"855",
			"00[14-9]",
			"1\\d{9}|[1-9]\\d{7,8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[1-9]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			],
			"0"
		],
		"KI": [
			"686",
			"00",
			"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
			[
				5,
				8
			],
			0,
			"0"
		],
		"KM": [
			"269",
			"00",
			"[3478]\\d{6}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[3478]"
					]
				]
			]
		],
		"KN": [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-7]\\d{6})$",
			"869$1",
			0,
			"869"
		],
		"KP": [
			"850",
			"00|99",
			"85\\d{6}|(?:19\\d|[2-7])\\d{7}",
			[
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2-7]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"0$1"
				]
			],
			"0"
		],
		"KR": [
			"82",
			"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
			"00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
			[
				5,
				6,
				8,
				9,
				10,
				11,
				12,
				13,
				14
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1-$2",
					[
						"(?:3[1-3]|[46][1-4]|5[1-5])1"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"1"
					]
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"60|8"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					[
						"[1346]|5[1-5]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					[
						"[57]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1-$2-$3",
					[
						"5"
					],
					"0$1"
				]
			],
			"0",
			0,
			"0(8(?:[1-46-8]|5\\d\\d))?"
		],
		"KW": [
			"965",
			"00",
			"(?:18|[2569]\\d\\d)\\d{5}",
			[
				7,
				8
			],
			[
				[
					"(\\d{4})(\\d{3,4})",
					"$1 $2",
					[
						"[169]|2(?:[235]|4[1-35-9])|52"
					]
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[25]"
					]
				]
			]
		],
		"KY": [
			"1",
			"011",
			"(?:345|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-9]\\d{6})$",
			"345$1",
			0,
			"345"
		],
		"KZ": [
			"7",
			"810",
			"33622\\d{5}|(?:7\\d|80)\\d{8}",
			[
				10
			],
			0,
			"8",
			0,
			0,
			0,
			0,
			"33|7",
			0,
			"8~10"
		],
		"LA": [
			"856",
			"00",
			"[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2[13]|3[14]|[4-8]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"30[013-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"[23]"
					],
					"0$1"
				]
			],
			"0"
		],
		"LB": [
			"961",
			"00",
			"[7-9]\\d{7}|[13-9]\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[7-9]"
					]
				]
			],
			"0"
		],
		"LC": [
			"1",
			"011",
			"(?:[58]\\d\\d|758|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-8]\\d{6})$",
			"758$1",
			0,
			"758"
		],
		"LI": [
			"423",
			"00",
			"90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",
			[
				7,
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[237-9]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"69"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6"
					]
				]
			],
			"0",
			0,
			"0|(1001)"
		],
		"LK": [
			"94",
			"00",
			"[1-9]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[1-689]"
					],
					"0$1"
				]
			],
			"0"
		],
		"LR": [
			"231",
			"00",
			"(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[4-6]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[3578]"
					],
					"0$1"
				]
			],
			"0"
		],
		"LS": [
			"266",
			"00",
			"(?:[256]\\d\\d|800)\\d{5}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2568]"
					]
				]
			]
		],
		"LT": [
			"370",
			"00",
			"(?:[3469]\\d|52|[78]0)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"52[0-7]"
					],
					"(8-$1)",
					1
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[7-9]"
					],
					"8 $1",
					1
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"37|4(?:[15]|6[1-8])"
					],
					"(8-$1)",
					1
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[3-6]"
					],
					"(8-$1)",
					1
				]
			],
			"8",
			0,
			"[08]"
		],
		"LU": [
			"352",
			"00",
			"35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					[
						"2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"20[2-689]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4",
					[
						"2(?:[0367]|4[3-8])"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"80[01]|90[015]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"20"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4 $5",
					[
						"2(?:[0367]|4[3-8])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
					"$1 $2 $3 $4",
					[
						"[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"
					]
				]
			],
			0,
			0,
			"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
		],
		"LV": [
			"371",
			"00",
			"(?:[268]\\d|90)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[269]|8[01]"
					]
				]
			]
		],
		"LY": [
			"218",
			"00",
			"[2-9]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{7})",
					"$1-$2",
					[
						"[2-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"MA": [
			"212",
			"00",
			"[5-8]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{5})(\\d{4})",
					"$1-$2",
					[
						"5(?:29|38)",
						"5(?:29|38)[89]",
						"5(?:29|38)[89]0"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"5[45]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1-$2",
					[
						"5(?:2[2-489]|3[5-9]|9)|892",
						"5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1-$2",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1-$2",
					[
						"[5-7]"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"
				],
				[
					"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}"
				],
				[
					"80\\d{7}"
				],
				[
					"89\\d{7}"
				],
				0,
				0,
				0,
				0,
				[
					"592(?:4[0-2]|93)\\d{4}"
				]
			]
		],
		"MC": [
			"377",
			"00",
			"870\\d{5}|(?:[349]|6\\d)\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"4"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[39]"
					]
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"6"
					],
					"0$1"
				]
			],
			"0"
		],
		"MD": [
			"373",
			"00",
			"(?:[235-7]\\d|[89]0)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[89]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"22|3"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[25-7]"
					],
					"0$1"
				]
			],
			"0"
		],
		"ME": [
			"382",
			"00",
			"(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"MF": [
			"590",
			"00",
			"(?:590|69\\d|976)\\d{6}",
			[
				9
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"
				],
				[
					"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"
				],
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"976[01]\\d{5}"
				]
			]
		],
		"MG": [
			"261",
			"00",
			"[23]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[23]"
					],
					"0$1"
				]
			],
			"0",
			0,
			"0|([24-9]\\d{6})$",
			"20$1"
		],
		"MH": [
			"692",
			"011",
			"329\\d{4}|(?:[256]\\d|45)\\d{5}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[2-6]"
					]
				]
			],
			"1"
		],
		"MK": [
			"389",
			"00",
			"[2-578]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[347]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[58]"
					],
					"0$1"
				]
			],
			"0"
		],
		"ML": [
			"223",
			"00",
			"[24-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[24-9]"
					]
				]
			]
		],
		"MM": [
			"95",
			"00",
			"1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"16|2"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[12]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[4-7]|8[1-35]"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4,6})",
					"$1 $2 $3",
					[
						"9(?:2[0-4]|[35-9]|4[137-9])"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"92"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{5})(\\d{4})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				]
			],
			"0"
		],
		"MN": [
			"976",
			"001",
			"[12]\\d{7,9}|[57-9]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[12]1"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[57-9]"
					]
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"[12]2[1-3]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5,6})",
					"$1 $2",
					[
						"[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
						"[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"
					],
					"0$1"
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"[12]"
					],
					"0$1"
				]
			],
			"0"
		],
		"MO": [
			"853",
			"00",
			"(?:28|[68]\\d)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[268]"
					]
				]
			]
		],
		"MP": [
			"1",
			"011",
			"[58]\\d{9}|(?:67|90)0\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-9]\\d{6})$",
			"670$1",
			0,
			"670"
		],
		"MQ": [
			"596",
			"00",
			"69\\d{7}|(?:59|97)6\\d{6}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[569]"
					],
					"0$1"
				]
			],
			"0"
		],
		"MR": [
			"222",
			"00",
			"(?:[2-4]\\d\\d|800)\\d{5}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2-48]"
					]
				]
			]
		],
		"MS": [
			"1",
			"011",
			"(?:[58]\\d\\d|664|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([34]\\d{6})$",
			"664$1",
			0,
			"664"
		],
		"MT": [
			"356",
			"00",
			"3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2357-9]"
					]
				]
			]
		],
		"MU": [
			"230",
			"0(?:0|[24-7]0|3[03])",
			"(?:[2-468]|5\\d)\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-46]|8[013]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"5"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"020"
		],
		"MV": [
			"960",
			"0(?:0|19)",
			"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
			[
				7,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[3467]|9[13-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"MW": [
			"265",
			"00",
			"1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",
			[
				7,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1[2-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[137-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"MX": [
			"52",
			"0[09]",
			"(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",
			[
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"33|5[56]|81"
					],
					0,
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2-9]"
					],
					0,
					1
				],
				[
					"(\\d)(\\d{2})(\\d{4})(\\d{4})",
					"$2 $3 $4",
					[
						"1(?:33|5[56]|81)"
					],
					0,
					1
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{4})",
					"$2 $3 $4",
					[
						"1"
					],
					0,
					1
				]
			],
			"01",
			0,
			"0(?:[12]|4[45])|1",
			0,
			0,
			0,
			0,
			"00"
		],
		"MY": [
			"60",
			"00",
			"1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2 $3",
					[
						"[4-79]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1-$2 $3",
					[
						"1(?:[02469]|[378][1-9])|8"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2 $3",
					[
						"3"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3-$4",
					[
						"1[36-8]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2 $3",
					[
						"15"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2 $3",
					[
						"1"
					],
					"0$1"
				]
			],
			"0"
		],
		"MZ": [
			"258",
			"00",
			"(?:2|8\\d)\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2|8[2-79]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			]
		],
		"NA": [
			"264",
			"00",
			"[68]\\d{7,8}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"88"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"6"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"87"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8"
					],
					"0$1"
				]
			],
			"0"
		],
		"NC": [
			"687",
			"00",
			"[2-57-9]\\d{5}",
			[
				6
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1.$2.$3",
					[
						"[2-57-9]"
					]
				]
			]
		],
		"NE": [
			"227",
			"00",
			"[0289]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"08"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[089]|2[013]"
					]
				]
			]
		],
		"NF": [
			"672",
			"00",
			"[13]\\d{5}",
			[
				6
			],
			[
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"1[0-3]"
					]
				],
				[
					"(\\d)(\\d{5})",
					"$1 $2",
					[
						"[13]"
					]
				]
			],
			0,
			0,
			"([0-258]\\d{4})$",
			"3$1"
		],
		"NG": [
			"234",
			"009",
			"(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",
			[
				7,
				8,
				10,
				11,
				12,
				13,
				14
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"78"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[12]|9(?:0[3-9]|[1-9])"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					[
						"[3-7]|8[2-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[7-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					[
						"[78]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})(\\d{5,6})",
					"$1 $2 $3",
					[
						"[78]"
					],
					"0$1"
				]
			],
			"0"
		],
		"NI": [
			"505",
			"00",
			"(?:1800|[25-8]\\d{3})\\d{4}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[125-8]"
					]
				]
			]
		],
		"NL": [
			"31",
			"00",
			"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{4,7})",
					"$1 $2",
					[
						"[89]0"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					[
						"66"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{8})",
					"$1 $2",
					[
						"6"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-57-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"NO": [
			"47",
			"00",
			"(?:0|[2-9]\\d{3})\\d{4}",
			[
				5,
				8
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[489]|5[89]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[235-7]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			"[02-689]|7[0-8]"
		],
		"NP": [
			"977",
			"00",
			"9\\d{9}|[1-9]\\d{7}",
			[
				8,
				10
			],
			[
				[
					"(\\d)(\\d{7})",
					"$1-$2",
					[
						"1[2-6]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1-$2",
					[
						"[1-8]|9(?:[1-579]|6[2-6])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1-$2",
					[
						"9"
					]
				]
			],
			"0"
		],
		"NR": [
			"674",
			"00",
			"(?:444|(?:55|8\\d)\\d|666)\\d{4}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[4-68]"
					]
				]
			]
		],
		"NU": [
			"683",
			"00",
			"(?:[47]|888\\d)\\d{3}",
			[
				4,
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"8"
					]
				]
			]
		],
		"NZ": [
			"64",
			"0(?:0|161)",
			"[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3,8})",
					"$1 $2",
					[
						"83"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"50[0367]|[89]0"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2 $3",
					[
						"24|[346]|7[2-57-9]|9[2-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2(?:10|74)|[59]|80"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"1|2[028]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,5})",
					"$1 $2 $3",
					[
						"2(?:[169]|7[0-35-9])|7|86"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"OM": [
			"968",
			"00",
			"(?:1505|[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{4,6})",
					"$1 $2",
					[
						"[58]"
					]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"2"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[179]"
					]
				]
			]
		],
		"PA": [
			"507",
			"00",
			"(?:[1-57-9]|6\\d)\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[1-57-9]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"6"
					]
				]
			]
		],
		"PE": [
			"51",
			"19(?:1[124]|77|90)00",
			"(?:[14-8]|9\\d)\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"80"
					],
					"(0$1)"
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"1"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"[4-8]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9"
					]
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			" Anexo "
		],
		"PF": [
			"689",
			"00",
			"[48]\\d{7}|4\\d{5}",
			[
				6,
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"44"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[48]"
					]
				]
			]
		],
		"PG": [
			"675",
			"00|140[1-3]",
			"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"18|[2-69]|85"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[78]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"PH": [
			"63",
			"00",
			"1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",
			[
				6,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{5})",
					"$1 $2",
					[
						"2"
					],
					"(0$1)"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					[
						"3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
						"3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"
					],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					[
						"346|4(?:27|9[35])|883",
						"3469|4(?:279|9(?:30|56))|8834"
					],
					"(0$1)"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[3-7]|8[2-8]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					[
						"1"
					]
				]
			],
			"0"
		],
		"PK": [
			"92",
			"00",
			"122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3",
					[
						"[89]0"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(\\d{3})(\\d{6,7})",
					"$1 $2",
					[
						"2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
						"9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{7,8})",
					"$1 $2",
					[
						"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"
					],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					[
						"58"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					[
						"3"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"[24-9]"
					],
					"(0$1)"
				]
			],
			"0"
		],
		"PL": [
			"48",
			"00",
			"6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{5})",
					"$1",
					[
						"19"
					]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"11|64"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
						"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"64"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"1[2-8]|[2-7]|8[1-79]|9[145]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			]
		],
		"PM": [
			"508",
			"00",
			"[45]\\d{5}",
			[
				6
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[45]"
					],
					"0$1"
				]
			],
			"0"
		],
		"PR": [
			"1",
			"011",
			"(?:[589]\\d\\d|787)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			0,
			0,
			0,
			"787|939"
		],
		"PS": [
			"970",
			"00",
			"[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2489]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"5"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			],
			"0"
		],
		"PT": [
			"351",
			"00",
			"(?:[26-9]\\d|30)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2[12]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[236-9]"
					]
				]
			]
		],
		"PW": [
			"680",
			"01[12]",
			"(?:[24-8]\\d\\d|345|900)\\d{4}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-9]"
					]
				]
			]
		],
		"PY": [
			"595",
			"00",
			"59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					[
						"[2-9]0"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{4,5})",
					"$1 $2",
					[
						"2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"87"
					]
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"9"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-8]"
					],
					"0$1"
				]
			],
			"0"
		],
		"QA": [
			"974",
			"00",
			"[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"2[126]|8"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2-7]"
					]
				]
			]
		],
		"RE": [
			"262",
			"00",
			"9769\\d{5}|(?:26|[68]\\d)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2689]"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			"26[23]|69|[89]"
		],
		"RO": [
			"40",
			"00",
			"(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",
			[
				6,
				9
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"2[3-6]",
						"2[3-6]\\d9"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"219|31"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[23]1"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[237-9]"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			" int "
		],
		"RS": [
			"381",
			"00",
			"38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3,9})",
					"$1 $2",
					[
						"(?:2[389]|39)0|[7-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5,10})",
					"$1 $2",
					[
						"[1-36]"
					],
					"0$1"
				]
			],
			"0"
		],
		"RU": [
			"7",
			"810",
			"[347-9]\\d{9}",
			[
				10
			],
			[
				[
					"(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"7(?:1[0-8]|2[1-9])",
						"7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))",
						"7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{5})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"7(?:1[0-68]|2[1-9])",
						"7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
						"7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"[3489]"
					],
					"8 ($1)",
					1
				]
			],
			"8",
			0,
			0,
			0,
			0,
			"3[04-689]|[489]",
			0,
			"8~10"
		],
		"RW": [
			"250",
			"00",
			"(?:06|[27]\\d\\d|[89]00)\\d{6}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"0"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[7-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					]
				]
			],
			"0"
		],
		"SA": [
			"966",
			"00",
			"92\\d{7}|(?:[15]|8\\d)\\d{8}",
			[
				9,
				10
			],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					[
						"9"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"5"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"81"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			],
			"0"
		],
		"SB": [
			"677",
			"0[01]",
			"(?:[1-6]|[7-9]\\d\\d)\\d{4}",
			[
				5,
				7
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"7|8[4-9]|9(?:[1-8]|9[0-8])"
					]
				]
			]
		],
		"SC": [
			"248",
			"010|0[0-2]",
			"8000\\d{3}|(?:[249]\\d|64)\\d{5}",
			[
				7
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[246]|9[57]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"SD": [
			"249",
			"00",
			"[19]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[19]"
					],
					"0$1"
				]
			],
			"0"
		],
		"SE": [
			"46",
			"00",
			"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					[
						"20"
					],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"9(?:00|39|44)"
					],
					"0$1",
					0,
					"$1 $2"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})",
					"$1-$2 $3",
					[
						"[12][136]|3[356]|4[0246]|6[03]|90[1-9]"
					],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"8"
					],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					[
						"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
					],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{3})",
					"$1-$2 $3",
					[
						"9(?:00|39|44)"
					],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"
					],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"10|7"
					],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"8"
					],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
					],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
					"$1-$2 $3 $4",
					[
						"9"
					],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4 $5",
					[
						"[26]"
					],
					"0$1",
					0,
					"$1 $2 $3 $4 $5"
				]
			],
			"0"
		],
		"SG": [
			"65",
			"0[0-3]\\d",
			"(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[369]|8(?:01|[1-9])"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8"
					]
				],
				[
					"(\\d{4})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"7"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			]
		],
		"SH": [
			"290",
			"00",
			"(?:[256]\\d|8)\\d{3}",
			[
				4,
				5
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"[256]"
		],
		"SI": [
			"386",
			"00|10(?:22|66|88|99)",
			"[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
			[
				5,
				6,
				7,
				8
			],
			[
				[
					"(\\d{2})(\\d{3,6})",
					"$1 $2",
					[
						"8[09]|9"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"59|8"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[37][01]|4[0139]|51|6"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[1-57]"
					],
					"(0$1)"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"SJ": [
			"47",
			"00",
			"0\\d{4}|(?:[4589]\\d|79)\\d{6}",
			[
				5,
				8
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"79"
		],
		"SK": [
			"421",
			"00",
			"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
			[
				6,
				7,
				9
			],
			[
				[
					"(\\d)(\\d{2})(\\d{3,4})",
					"$1 $2 $3",
					[
						"21"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"[3-5][1-8]1",
						"[3-5][1-8]1[67]"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{2})",
					"$1/$2 $3 $4",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[689]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1/$2 $3 $4",
					[
						"[3-5]"
					],
					"0$1"
				]
			],
			"0"
		],
		"SL": [
			"232",
			"00",
			"(?:[2378]\\d|66|99)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"[236-9]"
					],
					"(0$1)"
				]
			],
			"0"
		],
		"SM": [
			"378",
			"00",
			"(?:0549|[5-7]\\d)\\d{6}",
			[
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[5-7]"
					]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					[
						"0"
					]
				]
			],
			0,
			0,
			"([89]\\d{5})$",
			"0549$1"
		],
		"SN": [
			"221",
			"00",
			"(?:[378]\\d{4}|93330)\\d{4}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"8"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[379]"
					]
				]
			]
		],
		"SO": [
			"252",
			"00",
			"[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"8[125]"
					]
				],
				[
					"(\\d{6})",
					"$1",
					[
						"[134]"
					]
				],
				[
					"(\\d)(\\d{6})",
					"$1 $2",
					[
						"[15]|2[0-79]|3[0-46-8]|4[0-7]"
					]
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"24|[67]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[3478]|64|90"
					]
				],
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					[
						"1|28|6[1-35-9]|9[2-9]"
					]
				]
			],
			"0"
		],
		"SR": [
			"597",
			"00",
			"(?:[2-5]|68|[78]\\d)\\d{5}",
			[
				6,
				7
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					[
						"56"
					]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1-$2",
					[
						"[2-5]"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[6-8]"
					]
				]
			]
		],
		"SS": [
			"211",
			"00",
			"[19]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[19]"
					],
					"0$1"
				]
			],
			"0"
		],
		"ST": [
			"239",
			"00",
			"(?:22|9\\d)\\d{5}",
			[
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[29]"
					]
				]
			]
		],
		"SV": [
			"503",
			"00",
			"[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",
			[
				7,
				8,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[89]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[267]"
					]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					]
				]
			]
		],
		"SX": [
			"1",
			"011",
			"7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|(5\\d{6})$",
			"721$1",
			0,
			"721"
		],
		"SY": [
			"963",
			"00",
			"[1-39]\\d{8}|[1-5]\\d{7}",
			[
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[1-5]"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1",
					1
				]
			],
			"0"
		],
		"SZ": [
			"268",
			"00",
			"0800\\d{4}|(?:[237]\\d|900)\\d{6}",
			[
				8,
				9
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[0237]"
					]
				],
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					[
						"9"
					]
				]
			]
		],
		"TA": [
			"290",
			"00",
			"8\\d{3}",
			[
				4
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"8"
		],
		"TC": [
			"1",
			"011",
			"(?:[58]\\d\\d|649|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-479]\\d{6})$",
			"649$1",
			0,
			"649"
		],
		"TD": [
			"235",
			"00|16",
			"(?:22|[69]\\d|77)\\d{6}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2679]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		"TG": [
			"228",
			"00",
			"[279]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[279]"
					]
				]
			]
		],
		"TH": [
			"66",
			"00[1-9]",
			"1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[13-9]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			],
			"0"
		],
		"TJ": [
			"992",
			"810",
			"(?:00|11|[3-57-9]\\d)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{6})(\\d)(\\d{2})",
					"$1 $2 $3",
					[
						"331",
						"3317"
					],
					0,
					1
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[34]7|91[78]"
					],
					0,
					1
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1 $2 $3",
					[
						"3"
					],
					0,
					1
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[0457-9]|11"
					],
					0,
					1
				]
			],
			"8",
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		"TK": [
			"690",
			"00",
			"[2-47]\\d{3,6}",
			[
				4,
				5,
				6,
				7
			]
		],
		"TL": [
			"670",
			"00",
			"7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-489]|70"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"7"
					]
				]
			]
		],
		"TM": [
			"993",
			"810",
			"[1-6]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"12"
					],
					"(8 $1)"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"[1-5]"
					],
					"(8 $1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"6"
					],
					"8 $1"
				]
			],
			"8",
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		"TN": [
			"216",
			"00",
			"[2-57-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-57-9]"
					]
				]
			]
		],
		"TO": [
			"676",
			"00",
			"(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}",
			[
				5,
				7
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1-$2",
					[
						"[2-4]|50|6[09]|7[0-24-69]|8[05]"
					]
				],
				[
					"(\\d{4})(\\d{3})",
					"$1 $2",
					[
						"0"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[5-8]"
					]
				]
			]
		],
		"TR": [
			"90",
			"00",
			"(?:4|8\\d{5})\\d{6}|(?:[2-58]\\d\\d|900)\\d{7}",
			[
				7,
				10,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"512|8[0589]|90"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"5(?:[0-59]|61)",
						"5(?:[0-59]|616)",
						"5(?:[0-59]|6161)"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[24][1-8]|3[1-9]"
					],
					"(0$1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{6})",
					"$1 $2 $3",
					[
						"80"
					],
					"0$1",
					1
				]
			],
			"0"
		],
		"TT": [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-46-8]\\d{6})$",
			"868$1",
			0,
			"868"
		],
		"TV": [
			"688",
			"00",
			"(?:2|7\\d\\d|90)\\d{4}",
			[
				5,
				6,
				7
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					[
						"2"
					]
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"90"
					]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"7"
					]
				]
			]
		],
		"TW": [
			"886",
			"0(?:0[25-79]|19)",
			"[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
			[
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d)(\\d{4})",
					"$1 $2 $3",
					[
						"202"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[258]0"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
						"[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[49]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"#"
		],
		"TZ": [
			"255",
			"00[056]",
			"(?:[26-8]\\d|41|90)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[24]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[67]"
					],
					"0$1"
				]
			],
			"0"
		],
		"UA": [
			"380",
			"00",
			"[89]\\d{9}|[3-9]\\d{8}",
			[
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
						"6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]",
						"4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					[
						"[3-6]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[89]"
					],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"0~0"
		],
		"UG": [
			"256",
			"00[057]",
			"800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					[
						"202",
						"2024"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"[27-9]|4(?:6[45]|[7-9])"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					[
						"[34]"
					],
					"0$1"
				]
			],
			"0"
		],
		"US": [
			"1",
			"011",
			"[2-9]\\d{9}",
			[
				10
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					[
						"[2-9]"
					],
					0,
					1,
					"$1-$2-$3"
				]
			],
			"1",
			0,
			0,
			0,
			0,
			0,
			[
				[
					"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"
				],
				[
					""
				],
				[
					"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
				],
				[
					"900[2-9]\\d{6}"
				],
				[
					"52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
				]
			]
		],
		"UY": [
			"598",
			"0(?:0|1[3-9]\\d)",
			"(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",
			[
				7,
				8
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"8|90"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[24]"
					]
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00",
			" int. "
		],
		"UZ": [
			"998",
			"810",
			"55501\\d{4}|(?:[679]\\d|88)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[5-9]"
					],
					"8 $1"
				]
			],
			"8",
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		"VA": [
			"39",
			"00",
			"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"06698"
		],
		"VC": [
			"1",
			"011",
			"(?:[58]\\d\\d|784|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-7]\\d{6})$",
			"784$1",
			0,
			"784"
		],
		"VE": [
			"58",
			"00",
			"[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
			[
				10
			],
			[
				[
					"(\\d{3})(\\d{7})",
					"$1-$2",
					[
						"[24-689]"
					],
					"0$1"
				]
			],
			"0"
		],
		"VG": [
			"1",
			"011",
			"(?:284|[58]\\d\\d|900)\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-578]\\d{6})$",
			"284$1",
			0,
			"284"
		],
		"VI": [
			"1",
			"011",
			"[58]\\d{9}|(?:34|90)0\\d{7}",
			[
				10
			],
			0,
			"1",
			0,
			"1|([2-9]\\d{6})$",
			"340$1",
			0,
			"340"
		],
		"VN": [
			"84",
			"00",
			"[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"80"
					],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					[
						"1"
					],
					0,
					1
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[69]"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[3578]"
					],
					"0$1",
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2[48]"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					],
					"0$1",
					1
				]
			],
			"0"
		],
		"VU": [
			"678",
			"00",
			"(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}",
			[
				5,
				7
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[579]"
					]
				]
			]
		],
		"WF": [
			"681",
			"00",
			"(?:[45]0|68|72|8\\d)\\d{4}",
			[
				6
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[4-8]"
					]
				]
			]
		],
		"WS": [
			"685",
			"0",
			"(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
			[
				5,
				6,
				7,
				10
			],
			[
				[
					"(\\d{5})",
					"$1",
					[
						"[2-5]|6[1-9]"
					]
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					[
						"[68]"
					]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"7"
					]
				]
			]
		],
		"XK": [
			"383",
			"00",
			"[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",
			[
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[89]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-4]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[23]"
					],
					"0$1"
				]
			],
			"0"
		],
		"YE": [
			"967",
			"00",
			"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[1-6]|7[24-68]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				]
			],
			"0"
		],
		"YT": [
			"262",
			"00",
			"80\\d{7}|(?:26|63)9\\d{6}",
			[
				9
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			"269|63"
		],
		"ZA": [
			"27",
			"00",
			"[1-9]\\d{8}|8\\d{4,7}",
			[
				5,
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					[
						"8[1-4]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					[
						"8[1-4]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"860"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"ZM": [
			"260",
			"00",
			"(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[28]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					[
						"[79]"
					],
					"0$1"
				]
			],
			"0"
		],
		"ZW": [
			"263",
			"00",
			"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{3,5})",
					"$1 $2",
					[
						"2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"
					],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					[
						"[49]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"80"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					[
						"24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
						"2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
						"2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					[
						"8"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,5})",
					"$1 $2",
					[
						"1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"29[013-9]|39|54"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,5})",
					"$1 $2",
					[
						"(?:25|54)8",
						"258|5483"
					],
					"0$1"
				]
			],
			"0"
		]
	},
	"nonGeographic": {
		"800": [
			"800",
			0,
			"[1-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[1-9]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				[
					"[1-9]\\d{7}"
				]
			]
		],
		"808": [
			"808",
			0,
			"[1-9]\\d{7}",
			[
				8
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[1-9]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"[1-9]\\d{7}"
				]
			]
		],
		"870": [
			"870",
			0,
			"[35-7]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[35-7]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				[
					"(?:[356]\\d|7[6-8])\\d{7}"
				]
			]
		],
		"878": [
			"878",
			0,
			"10\\d{10}",
			[
				12
			],
			[
				[
					"(\\d{2})(\\d{5})(\\d{5})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"10\\d{10}"
				]
			]
		],
		"881": [
			"881",
			0,
			"[0-36-9]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{5})",
					"$1 $2 $3",
					[
						"[0-36-9]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				[
					"[0-36-9]\\d{8}"
				]
			]
		],
		"882": [
			"882",
			0,
			"[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|[19]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"16|342"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[19]"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"3[23]"
					]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"34[57]"
					]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"34"
					]
				],
				[
					"(\\d{2})(\\d{4,5})(\\d{5})",
					"$1 $2 $3",
					[
						"[1-3]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				[
					"3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}",
					[
						7,
						9,
						10,
						12
					]
				],
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"
				]
			]
		],
		"883": [
			"883",
			0,
			"51\\d{7}(?:\\d{3})?",
			[
				9,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"510"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"510"
					]
				],
				[
					"(\\d{4})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"5"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"51[013]0\\d{8}|5100\\d{5}"
				]
			]
		],
		"888": [
			"888",
			0,
			"\\d{11}",
			[
				11
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{5})",
					"$1 $2 $3"
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				[
					"\\d{11}"
				]
			]
		],
		"979": [
			"979",
			0,
			"[1359]\\d{8}",
			[
				9
			],
			[
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[1359]"
					]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				[
					"[1359]\\d{8}"
				]
			]
		]
	}
};

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNumberType;
/* unused harmony export is_of_type */
/* harmony export (immutable) */ __webpack_exports__["b"] = checkNumberLengthForType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(457);


var NON_FIXED_LINE_PHONE_TYPES = ['MOBILE', 'PREMIUM_RATE', 'TOLL_FREE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL']; // Finds out national phone number type (fixed line, mobile, etc)

function getNumberType(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {}; // When `parse()` returned `{}`
  // meaning that the phone number is not a valid one.

  if (!input.country) {
    return;
  }

  metadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // The following is copy-pasted from the original function:
  // https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835
  // Is this national number even valid for this country

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  } // Is it fixed line number


  if (is_of_type(nationalNumber, 'FIXED_LINE', metadata)) {
    // Because duplicate regular expressions are removed
    // to reduce metadata size, if "mobile" pattern is ""
    // then it means it was removed due to being a duplicate of the fixed-line pattern.
    //
    if (metadata.type('MOBILE') && metadata.type('MOBILE').pattern() === '') {
      return 'FIXED_LINE_OR_MOBILE';
    } // v1 metadata.
    // Legacy.
    // Deprecated.


    if (!metadata.type('MOBILE')) {
      return 'FIXED_LINE_OR_MOBILE';
    } // Check if the number happens to qualify as both fixed line and mobile.
    // (no such country in the minimal metadata set)

    /* istanbul ignore if */


    if (is_of_type(nationalNumber, 'MOBILE', metadata)) {
      return 'FIXED_LINE_OR_MOBILE';
    }

    return 'FIXED_LINE';
  }

  for (var _i = 0, _NON_FIXED_LINE_PHONE = NON_FIXED_LINE_PHONE_TYPES; _i < _NON_FIXED_LINE_PHONE.length; _i++) {
    var _type = _NON_FIXED_LINE_PHONE[_i];

    if (is_of_type(nationalNumber, _type, metadata)) {
      return _type;
    }
  }
}
function is_of_type(nationalNumber, type, metadata) {
  type = metadata.type(type);

  if (!type || !type.pattern()) {
    return false;
  } // Check if any possible number lengths are present;
  // if so, we use them to avoid checking
  // the validation pattern if they don't match.
  // If they are absent, this means they match
  // the general description, which we have
  // already checked before a specific number type.


  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(nationalNumber, type.pattern());
} // Should only be called for the "new" metadata which has "possible lengths".

function checkNumberLengthForType(nationalNumber, type, metadata) {
  var type_info = metadata.type(type); // There should always be "<possiblePengths/>" set for every type element.
  // This is declared in the XML schema.
  // For size efficiency, where a sub-description (e.g. fixed-line)
  // has the same "<possiblePengths/>" as the "general description", this is missing,
  // so we fall back to the "general description". Where no numbers of the type
  // exist at all, there is one possible length (-1) which is guaranteed
  // not to match the length of any real phone number.

  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths(); // let local_lengths    = type_info && type.possibleLengthsLocal() || metadata.possibleLengthsLocal()
  // Metadata before version `1.0.18` didn't contain `possible_lengths`.

  if (!possible_lengths) {
    return 'IS_POSSIBLE';
  }

  if (type === 'FIXED_LINE_OR_MOBILE') {
    // No such country in metadata.

    /* istanbul ignore next */
    if (!metadata.type('FIXED_LINE')) {
      // The rare case has been encountered where no fixedLine data is available
      // (true for some non-geographic entities), so we just check mobile.
      return checkNumberLengthForType(nationalNumber, 'MOBILE', metadata);
    }

    var mobile_type = metadata.type('MOBILE');

    if (mobile_type) {
      // Merge the mobile data in if there was any. "Concat" creates a new
      // array, it doesn't edit possible_lengths in place, so we don't need a copy.
      // Note that when adding the possible lengths from mobile, we have
      // to again check they aren't empty since if they are this indicates
      // they are the same as the general desc and should be obtained from there.
      possible_lengths = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* mergeArrays */])(possible_lengths, mobile_type.possibleLengths()); // The current list is sorted; we need to merge in the new list and
      // re-sort (duplicates are okay). Sorting isn't so expensive because
      // the lists are very small.
      // if (local_lengths)
      // {
      // 	local_lengths = mergeArrays(local_lengths, mobile_type.possibleLengthsLocal())
      // }
      // else
      // {
      // 	local_lengths = mobile_type.possibleLengthsLocal()
      // }
    }
  } // If the type doesn't exist then return 'INVALID_LENGTH'.
  else if (type && !type_info) {
      return 'INVALID_LENGTH';
    }

  var actual_length = nationalNumber.length; // In `libphonenumber-js` all "local-only" formats are dropped for simplicity.
  // // This is safe because there is never an overlap beween the possible lengths
  // // and the local-only lengths; this is checked at build time.
  // if (local_lengths && local_lengths.indexOf(nationalNumber.length) >= 0)
  // {
  // 	return 'IS_POSSIBLE_LOCAL_ONLY'
  // }

  var minimum_length = possible_lengths[0];

  if (minimum_length === actual_length) {
    return 'IS_POSSIBLE';
  }

  if (minimum_length > actual_length) {
    return 'TOO_SHORT';
  }

  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return 'TOO_LONG';
  } // We skip the first element since we've already checked it.


  return possible_lengths.indexOf(actual_length, 1) >= 0 ? 'IS_POSSIBLE' : 'INVALID_LENGTH';
}
//# sourceMappingURL=getNumberType_.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchesEntirely;
/* harmony export (immutable) */ __webpack_exports__["b"] = mergeArrays;
/**
 * Checks whether the entire input sequence can be matched
 * against the regular expression.
 * @return {boolean}
 */
function matchesEntirely(text, regular_expression) {
  // If assigning the `''` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  text = text || '';
  return new RegExp('^(?:' + regular_expression + ')$').test(text);
}
/**
 * Merges two arrays.
 * @param  {*} a
 * @param  {*} b
 * @return {*}
 */

function mergeArrays(a, b) {
  var merged = a.slice();

  for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var element = _ref;

    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }

  return merged.sort(function (a, b) {
    return a - b;
  }); // ES6 version, requires Set polyfill.
  // let merged = new Set(a)
  // for (const element of b)
  // {
  // 	merged.add(i)
  // }
  // return Array.from(merged).sort((a, b) => a - b)
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(528);

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPossibleNumber___ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate___ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isValidNumberForRegion___ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getNumberType___ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format___ = __webpack_require__(631);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var PhoneNumber =
/*#__PURE__*/
function () {
  function PhoneNumber(countryCallingCode, nationalNumber, metadata) {
    _classCallCheck(this, PhoneNumber);

    if (!countryCallingCode) {
      throw new TypeError('`country` or `countryCallingCode` not passed');
    }

    if (!nationalNumber) {
      throw new TypeError('`nationalNumber` not passed');
    }

    var _metadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata); // If country code is passed then derive `countryCallingCode` from it.
    // Also store the country code as `.country`.


    if (isCountryCode(countryCallingCode)) {
      this.country = countryCallingCode;

      _metadata.country(countryCallingCode);

      countryCallingCode = _metadata.countryCallingCode();
    } else {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (_metadata.isNonGeographicCallingCode(countryCallingCode)) {
          this.country = '001';
        }
      }
    }

    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = '+' + this.countryCallingCode + this.nationalNumber;
    this.metadata = metadata;
  }

  _createClass(PhoneNumber, [{
    key: "isPossible",
    value: function isPossible() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPossibleNumber___["a" /* default */])(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__validate___["a" /* default */])(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](this.metadata);
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    } // // Is just an alias for `this.isValid() && this.country === country`.
    // // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
    // isValidForRegion(country) {
    // 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
    // }

  }, {
    key: "getType",
    value: function getType() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__getNumberType___["a" /* default */])(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__format___["a" /* default */])(this, _format, options ? _objectSpread({}, options, {
        v2: true
      }) : {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format('NATIONAL', options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format('INTERNATIONAL', options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format('RFC3966', options);
    }
  }]);

  return PhoneNumber;
}();



var isCountryCode = function isCountryCode(value) {
  return /^[A-Z]{2}$/.test(value);
};
//# sourceMappingURL=PhoneNumber.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = limit;
/* harmony export (immutable) */ __webpack_exports__["b"] = trimAfterFirstMatch;
/* harmony export (immutable) */ __webpack_exports__["d"] = startsWith;
/* harmony export (immutable) */ __webpack_exports__["c"] = endsWith;
/** Returns a regular expression quantifier with an upper and lower limit. */
function limit(lower, upper) {
  if (lower < 0 || upper <= 0 || upper < lower) {
    throw new TypeError();
  }

  return "{".concat(lower, ",").concat(upper, "}");
}
/**
 * Trims away any characters after the first match of {@code pattern} in {@code candidate},
 * returning the trimmed version.
 */

function trimAfterFirstMatch(regexp, string) {
  var index = string.search(regexp);

  if (index >= 0) {
    return string.slice(0, index);
  }

  return string;
}
function startsWith(string, substring) {
  return string.indexOf(substring) === 0;
}
function endsWith(string, substring) {
  return string.indexOf(substring, string.length - substring.length) === string.length - substring.length;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DIGITS */
/* harmony export (immutable) */ __webpack_exports__["a"] = parseDigit;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseDigits;
// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
var DIGITS = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  "\uFF10": '0',
  // Fullwidth digit 0
  "\uFF11": '1',
  // Fullwidth digit 1
  "\uFF12": '2',
  // Fullwidth digit 2
  "\uFF13": '3',
  // Fullwidth digit 3
  "\uFF14": '4',
  // Fullwidth digit 4
  "\uFF15": '5',
  // Fullwidth digit 5
  "\uFF16": '6',
  // Fullwidth digit 6
  "\uFF17": '7',
  // Fullwidth digit 7
  "\uFF18": '8',
  // Fullwidth digit 8
  "\uFF19": '9',
  // Fullwidth digit 9
  "\u0660": '0',
  // Arabic-indic digit 0
  "\u0661": '1',
  // Arabic-indic digit 1
  "\u0662": '2',
  // Arabic-indic digit 2
  "\u0663": '3',
  // Arabic-indic digit 3
  "\u0664": '4',
  // Arabic-indic digit 4
  "\u0665": '5',
  // Arabic-indic digit 5
  "\u0666": '6',
  // Arabic-indic digit 6
  "\u0667": '7',
  // Arabic-indic digit 7
  "\u0668": '8',
  // Arabic-indic digit 8
  "\u0669": '9',
  // Arabic-indic digit 9
  "\u06F0": '0',
  // Eastern-Arabic digit 0
  "\u06F1": '1',
  // Eastern-Arabic digit 1
  "\u06F2": '2',
  // Eastern-Arabic digit 2
  "\u06F3": '3',
  // Eastern-Arabic digit 3
  "\u06F4": '4',
  // Eastern-Arabic digit 4
  "\u06F5": '5',
  // Eastern-Arabic digit 5
  "\u06F6": '6',
  // Eastern-Arabic digit 6
  "\u06F7": '7',
  // Eastern-Arabic digit 7
  "\u06F8": '8',
  // Eastern-Arabic digit 8
  "\u06F9": '9' // Eastern-Arabic digit 9

};
function parseDigit(character) {
  return DIGITS[character];
}
/**
 * Parses phone number digits from a string.
 * Drops all punctuation leaving only digits.
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * parseDigits('8 (800) 555')
 * // Outputs '8800555'.
 * ```
 */

function parseDigits(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;
    var digit = parseDigit(character);

    if (digit) {
      result += digit;
    }
  }

  return result;
}
//# sourceMappingURL=parseDigits.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parsePhoneNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = normalizeArguments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber___ = __webpack_require__(635);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function parsePhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber___["a" /* default */])(text, options, metadata);
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
      _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4),
      arg_1 = _Array$prototype$slic2[0],
      arg_2 = _Array$prototype$slic2[1],
      arg_3 = _Array$prototype$slic2[2],
      arg_4 = _Array$prototype$slic2[3];

  var text;
  var options;
  var metadata; // If the phone number is passed as a string.
  // `parsePhoneNumber('88005553535', ...)`.

  if (typeof arg_1 === 'string') {
    text = arg_1;
  } else throw new TypeError('A text for parsing must be a string.'); // If "default country" argument is being passed then move it to `options`.
  // `parsePhoneNumber('88005553535', 'RU', [options], metadata)`.


  if (!arg_2 || typeof arg_2 === 'string') {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = undefined;
      metadata = arg_3;
    }

    if (arg_2) {
      options = _objectSpread({
        defaultCountry: arg_2
      }, options);
    }
  } // `defaultCountry` is not passed.
  // Example: `parsePhoneNumber('+78005553535', [options], metadata)`.
  else if (isObject(arg_2)) {
      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }
    } else throw new Error("Invalid second argument: ".concat(arg_2));

  return {
    text: text,
    options: options,
    metadata: metadata
  };
} // Otherwise istanbul would show this as "branch not covered".

/* istanbul ignore next */

var isObject = function isObject(_) {
  return _typeof(_) === 'object';
};
//# sourceMappingURL=parsePhoneNumber.js.map

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.count_occurences = count_occurences;
// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;
	// Using `.split('')` here instead of normal `for ... of`
	// because the importing application doesn't neccessarily include an ES6 polyfill.
	// The `.split('')` approach discards "exotic" UTF-8 characters
	// (the ones consisting of four bytes)
	// but template placeholder characters don't fall into that range
	// so skipping such miscellaneous "exotic" characters
	// won't matter here for just counting placeholder character occurrences.
	for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var character = _ref;

		if (character === symbol) {
			count++;
		}
	}
	return count;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parse;
// Parses the `text`.
//
// Returns `{ value, caret }` where `caret` is
// the caret position inside `value`
// corresponding to the `caret_position` inside `text`.
//
// The `text` is parsed by feeding each character sequentially to
// `parse_character(character, value)` function
// and appending the result (if it's not `undefined`) to `value`.
//
// Example:
//
// `text` is `8 (800) 555-35-35`,
// `caret_position` is `4` (before the first `0`).
// `parse_character` is `(character, value) =>
//   if (character >= '0' && character <= '9') { return character }`.
//
// then `parse()` outputs `{ value: '88005553535', caret: 2 }`.
//
function parse(text, caret_position, parse_character) {
	var value = '';

	var focused_input_character_index = 0;

	var index = 0;
	while (index < text.length) {
		var character = parse_character(text[index], value);

		if (character !== undefined) {
			value += character;

			if (caret_position !== undefined) {
				if (caret_position === index) {
					focused_input_character_index = value.length - 1;
				} else if (caret_position > index) {
					focused_input_character_index = value.length;
				}
			}
		}

		index++;
	}

	// If caret position wasn't specified
	if (caret_position === undefined) {
		// Then set caret position to "after the last input character"
		focused_input_character_index = value.length;
	}

	var result = {
		value: value,
		caret: focused_input_character_index
	};

	return result;
}
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getIDDPrefix;
/* harmony export (immutable) */ __webpack_exports__["b"] = stripIDDPrefix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(426);


var CAPTURING_DIGIT_PATTERN = new RegExp('([' + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* VALID_DIGITS */] + '])');
/**
 * Pattern that makes it easy to distinguish whether a region has a single
 * international dialing prefix or not. If a region has a single international
 * prefix (e.g. 011 in USA), it will be represented as a string that contains
 * a sequence of ASCII digits, and possibly a tilde, which signals waiting for
 * the tone. If there are multiple available international prefixes in a
 * region, they will be represented as a regex string that always contains one
 * or more characters that are not ASCII digits or a tilde.
 */

var SINGLE_IDD_PREFIX = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/; // For regions that have multiple IDD prefixes
// a preferred IDD prefix is returned.

function getIDDPrefix(country, callingCode, metadata) {
  var countryMetadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);

  if (SINGLE_IDD_PREFIX.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }

  return countryMetadata.defaultIDDPrefix();
}
function stripIDDPrefix(number, country, callingCode, metadata) {
  if (!country) {
    return;
  } // Check if the number is IDD-prefixed.


  var countryMetadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());

  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  } // Strip IDD prefix.


  number = number.slice(number.match(IDDPrefixPattern)[0].length); // Some kind of a weird edge case.
  // No explanation from Google given.

  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  /* istanbul ignore next */

  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === '0') {
      return;
    }
  }

  return number;
}
//# sourceMappingURL=IDD.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://stackoverflow.com/a/46971044/970769
var ParseError = function ParseError(code) {
  _classCallCheck(this, ParseError);

  this.name = this.constructor.name;
  this.message = code;
  this.stack = new Error(code).stack;
};


ParseError.prototype = Object.create(Error.prototype);
ParseError.prototype.constructor = ParseError;
//# sourceMappingURL=ParseError.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberMatcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhoneNumber__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extension__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findNumbers_RegExpCache__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__findNumbers_util__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__findNumbers_Leniency__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__findNumbers_parsePreCandidate__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__findNumbers_isValidPreCandidate__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__findNumbers_isValidCandidate__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__parse___ = __webpack_require__(564);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A port of Google's `PhoneNumberMatcher.java`.
 * https://github.com/googlei18n/libphonenumber/blob/master/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberMatcher.java
 * Date: 08.03.2018.
 */












/**
 * Patterns used to extract phone numbers from a larger phone-number-like pattern. These are
 * ordered according to specificity. For example, white-space is last since that is frequently
 * used in numbers, not just to separate two numbers. We have separate patterns since we don't
 * want to break up the phone-number-like text on more than one different kind of symbol at one
 * time, although symbols of the same type (e.g. space) can be safely grouped together.
 *
 * Note that if there is a match, we will always check any text found up to the first match as
 * well.
 */

var INNER_MATCHES = [// Breaks on the slash - e.g. "651-234-2345/332-445-1234"
'\\/+(.*)/', // Note that the bracket here is inside the capturing group, since we consider it part of the
// phone number. Will match a pattern like "(650) 223 3345 (754) 223 3321".
'(\\([^(]*)', // Breaks on a hyphen - e.g. "12345 - 332-445-1234 is my number."
// We require a space on either side of the hyphen for it to be considered a separator.
"(?:".concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["a" /* pZ */], "-|-").concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["a" /* pZ */], ")").concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["a" /* pZ */], "*(.+)"), // Various types of wide hyphens. Note we have decided not to enforce a space here, since it's
// possible that it's supposed to be used to break two numbers without spaces, and we haven't
// seen many instances of it used within a number.
"[\u2012-\u2015\uFF0D]".concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["a" /* pZ */], "*(.+)"), // Breaks on a full stop - e.g. "12345. 332-445-1234 is my number."
"\\.+".concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["a" /* pZ */], "*([^.]+)"), // Breaks on space - e.g. "3324451234 8002341234"
"".concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["a" /* pZ */], "+(").concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["b" /* PZ */], "+)")]; // Limit on the number of leading (plus) characters.

var leadLimit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__findNumbers_util__["a" /* limit */])(0, 2); // Limit on the number of consecutive punctuation characters.

var punctuationLimit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__findNumbers_util__["a" /* limit */])(0, 4);
/* The maximum number of digits allowed in a digit-separated block. As we allow all digits in a
 * single block, set high enough to accommodate the entire national number and the international
 * country code. */

var digitBlockLimit = __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* MAX_LENGTH_FOR_NSN */] + __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* MAX_LENGTH_COUNTRY_CODE */]; // Limit on the number of blocks separated by punctuation.
// Uses digitBlockLimit since some formats use spaces to separate each digit.

var blockLimit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__findNumbers_util__["a" /* limit */])(0, digitBlockLimit);
/* A punctuation sequence allowing white space. */

var punctuation = "[".concat(__WEBPACK_IMPORTED_MODULE_1__constants__["d" /* VALID_PUNCTUATION */], "]") + punctuationLimit; // A digits block without punctuation.

var digitSequence = __WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["c" /* pNd */] + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__findNumbers_util__["a" /* limit */])(1, digitBlockLimit);
/**
 * Phone number pattern allowing optional punctuation.
 * The phone number pattern used by `find()`, similar to
 * VALID_PHONE_NUMBER, but with the following differences:
 * <ul>
 *   <li>All captures are limited in order to place an upper bound to the text matched by the
 *       pattern.
 * <ul>
 *   <li>Leading punctuation / plus signs are limited.
 *   <li>Consecutive occurrences of punctuation are limited.
 *   <li>Number of digits is limited.
 * </ul>
 *   <li>No whitespace is allowed at the start or end.
 *   <li>No alpha digits (vanity numbers such as 1-800-SIX-FLAGS) are currently supported.
 * </ul>
 */

var PATTERN = '(?:' + __WEBPACK_IMPORTED_MODULE_9__findNumbers_isValidCandidate__["a" /* LEAD_CLASS */] + punctuation + ')' + leadLimit + digitSequence + '(?:' + punctuation + digitSequence + ')' + blockLimit + '(?:' + __WEBPACK_IMPORTED_MODULE_2__extension__["c" /* EXTN_PATTERNS_FOR_MATCHING */] + ')?'; // Regular expression of trailing characters that we want to remove.
// We remove all characters that are not alpha or numerical characters.
// The hash character is retained here, as it may signify
// the previous block was an extension.
//
// // Don't know what does '&&' mean here.
// const UNWANTED_END_CHAR_PATTERN = new RegExp(`[[\\P{N}&&\\P{L}]&&[^#]]+$`)
//

var UNWANTED_END_CHAR_PATTERN = new RegExp("[^".concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["d" /* _pN */]).concat(__WEBPACK_IMPORTED_MODULE_5__findNumbers_utf_8__["e" /* _pL */], "#]+$"));
var NON_DIGITS_PATTERN = /(\D+)/;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
/**
 * A stateful class that finds and extracts telephone numbers from {@linkplain CharSequence text}.
 * Instances can be created using the {@linkplain PhoneNumberUtil#findNumbers factory methods} in
 * {@link PhoneNumberUtil}.
 *
 * <p>Vanity numbers (phone numbers using alphabetic digits such as <tt>1-800-SIX-FLAGS</tt> are
 * not found.
 *
 * <p>This class is not thread-safe.
 */

var PhoneNumberMatcher =
/*#__PURE__*/
function () {
  /** The iteration tristate. */

  /** The next index to start searching at. Undefined in {@link State#DONE}. */
  // A cache for frequently used country-specific regular expressions. Set to 32 to cover ~2-3
  // countries being used for the same doc with ~10 patterns for each country. Some pages will have
  // a lot more countries in use, but typically fewer numbers for each so expanding the cache for
  // that use-case won't have a lot of benefit.

  /**
   * Creates a new instance. See the factory methods in {@link PhoneNumberUtil} on how to obtain a
   * new instance.
   *
   * @param util  the phone number util to use
   * @param text  the character sequence that we will search, null for no text
   * @param country  the country to assume for phone numbers not written in international format
   *     (with a leading plus, or with the international dialing prefix of the specified region).
   *     May be null or "ZZ" if only numbers with a leading plus should be
   *     considered.
   * @param leniency  the leniency to use when evaluating candidate phone numbers
   * @param maxTries  the maximum number of invalid numbers to try before giving up on the text.
   *     This is to cover degenerate cases where the text has a lot of false positives in it. Must
   *     be {@code >= 0}.
   */
  function PhoneNumberMatcher() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var metadata = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, PhoneNumberMatcher);

    _defineProperty(this, "state", 'NOT_READY');

    _defineProperty(this, "searchIndex", 0);

    _defineProperty(this, "regExpCache", new __WEBPACK_IMPORTED_MODULE_3__findNumbers_RegExpCache__["a" /* default */](32));

    options = _objectSpread({}, options, {
      defaultCallingCode: options.defaultCallingCode,
      defaultCountry: options.defaultCountry && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__metadata__["a" /* isSupportedCountry */])(options.defaultCountry, metadata) ? options.defaultCountry : undefined,
      leniency: options.leniency || options.extended ? 'POSSIBLE' : 'VALID',
      maxTries: options.maxTries || MAX_SAFE_INTEGER
    });

    if (!options.leniency) {
      throw new TypeError('`Leniency` not supplied');
    }

    if (options.maxTries < 0) {
      throw new TypeError('`maxTries` not supplied');
    }

    this.text = text;
    this.options = options;
    this.metadata = metadata;
    /** The degree of validation requested. */

    this.leniency = __WEBPACK_IMPORTED_MODULE_6__findNumbers_Leniency__["a" /* default */][options.leniency];

    if (!this.leniency) {
      throw new TypeError("Unknown leniency: ".concat(options.leniency, "."));
    }
    /** The maximum number of retries after matching an invalid number. */


    this.maxTries = options.maxTries;
    this.PATTERN = new RegExp(PATTERN, 'ig');
  }
  /**
   * Attempts to find the next subsequence in the searched sequence on or after {@code searchIndex}
   * that represents a phone number. Returns the next match, null if none was found.
   *
   * @param index  the search index to start searching at
   * @return  the phone number match found, null if none can be found
   */


  _createClass(PhoneNumberMatcher, [{
    key: "find",
    value: function find() // (index)
    {
      // // Reset the regular expression.
      // this.PATTERN.lastIndex = index
      var matches;

      while (this.maxTries > 0 && (matches = this.PATTERN.exec(this.text)) !== null) {
        var candidate = matches[0];
        var offset = matches.index;
        candidate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__findNumbers_parsePreCandidate__["a" /* default */])(candidate);

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__findNumbers_isValidPreCandidate__["a" /* default */])(candidate, offset, this.text)) {
          var match = // Try to come up with a valid match given the entire candidate.
          this.parseAndVerify(candidate, offset, this.text) // If that failed, try to find an "inner match" -
          // there might be a phone number within this candidate.
          || this.extractInnerMatch(candidate, offset, this.text);

          if (match) {
            if (this.options.v2) {
              var phoneNumber = new __WEBPACK_IMPORTED_MODULE_0__PhoneNumber__["a" /* default */](match.country || match.countryCallingCode, match.phone, this.metadata);

              if (match.ext) {
                phoneNumber.ext = match.ext;
              }

              return {
                startsAt: match.startsAt,
                endsAt: match.endsAt,
                number: phoneNumber
              };
            }

            return match;
          }
        }

        this.maxTries--;
      }
    }
    /**
     * Attempts to extract a match from `candidate`
     * if the whole candidate does not qualify as a match.
     */

  }, {
    key: "extractInnerMatch",
    value: function extractInnerMatch(candidate, offset, text) {
      for (var _i = 0, _INNER_MATCHES = INNER_MATCHES; _i < _INNER_MATCHES.length; _i++) {
        var innerMatchPattern = _INNER_MATCHES[_i];
        var isFirstMatch = true;
        var matches = void 0;
        var possibleInnerMatch = new RegExp(innerMatchPattern, 'g');

        while ((matches = possibleInnerMatch.exec(candidate)) !== null && this.maxTries > 0) {
          if (isFirstMatch) {
            // We should handle any group before this one too.
            var _group = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__findNumbers_util__["b" /* trimAfterFirstMatch */])(UNWANTED_END_CHAR_PATTERN, candidate.slice(0, matches.index));

            var _match = this.parseAndVerify(_group, offset, text);

            if (_match) {
              return _match;
            }

            this.maxTries--;
            isFirstMatch = false;
          }

          var group = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__findNumbers_util__["b" /* trimAfterFirstMatch */])(UNWANTED_END_CHAR_PATTERN, matches[1]); // Java code does `groupMatcher.start(1)` here,
          // but there's no way in javascript to get a group match start index,
          // therefore using the overall match start index `matches.index`.

          var match = this.parseAndVerify(group, offset + matches.index, text);

          if (match) {
            return match;
          }

          this.maxTries--;
        }
      }
    }
    /**
     * Parses a phone number from the `candidate` using `parseNumber` and
     * verifies it matches the requested `leniency`. If parsing and verification succeed,
     * a corresponding `PhoneNumberMatch` is returned, otherwise this method returns `null`.
     *
     * @param candidate  the candidate match
     * @param offset  the offset of {@code candidate} within {@link #text}
     * @return  the parsed and validated phone number match, or null
     */

  }, {
    key: "parseAndVerify",
    value: function parseAndVerify(candidate, offset, text) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__findNumbers_isValidCandidate__["b" /* default */])(candidate, offset, text, this.options.leniency)) {
        return;
      }

      var number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__parse___["f" /* default */])(candidate, {
        extended: true,
        defaultCountry: this.options.defaultCountry,
        defaultCallingCode: this.options.defaultCallingCode
      }, this.metadata);

      if (!number.possible) {
        return;
      }

      if (this.leniency(number, candidate, this.metadata, this.regExpCache)) {
        // // We used parseAndKeepRawInput to create this number,
        // // but for now we don't return the extra values parsed.
        // // TODO: stop clearing all values here and switch all users over
        // // to using rawInput() rather than the rawString() of PhoneNumberMatch.
        // number.clearCountryCodeSource()
        // number.clearRawInput()
        // number.clearPreferredDomesticCarrierCode()
        var result = {
          startsAt: offset,
          endsAt: offset + candidate.length,
          phone: number.phone
        };

        if (number.country && number.country !== '001') {
          result.country = number.country;
        } else {
          result.countryCallingCode = number.countryCallingCode;
        }

        if (number.ext) {
          result.ext = number.ext;
        }

        return result;
      }
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      if (this.state === 'NOT_READY') {
        this.lastMatch = this.find(); // (this.searchIndex)

        if (this.lastMatch) {
          // this.searchIndex = this.lastMatch.endsAt
          this.state = 'READY';
        } else {
          this.state = 'DONE';
        }
      }

      return this.state === 'READY';
    }
  }, {
    key: "next",
    value: function next() {
      // Check the state and find the next match as a side-effect if necessary.
      if (!this.hasNext()) {
        throw new Error('No next element');
      } // Don't retain that memory any longer than necessary.


      var result = this.lastMatch;
      this.lastMatch = null;
      this.state = 'NOT_READY';
      return result;
    }
  }]);

  return PhoneNumberMatcher;
}();


//# sourceMappingURL=PhoneNumberMatcher.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = parseRFC3966;
/* harmony export (immutable) */ __webpack_exports__["a"] = formatRFC3966;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isViablePhoneNumber__ = __webpack_require__(633);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // https://www.ietf.org/rfc/rfc3966.txt

/**
 * @param  {string} text - Phone URI (RFC 3966).
 * @return {object} `{ ?number, ?ext }`.
 */

function parseRFC3966(text) {
  var number;
  var ext; // Replace "tel:" with "tel=" for parsing convenience.

  text = text.replace(/^tel:/, 'tel=');

  for (var _iterator = text.split(';'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var part = _ref;

    var _part$split = part.split('='),
        _part$split2 = _slicedToArray(_part$split, 2),
        name = _part$split2[0],
        value = _part$split2[1];

    switch (name) {
      case 'tel':
        number = value;
        break;

      case 'ext':
        ext = value;
        break;

      case 'phone-context':
        // Only "country contexts" are supported.
        // "Domain contexts" are ignored.
        if (value[0] === '+') {
          number = value + number;
        }

        break;
    }
  } // If the phone number is not viable, then abort.


  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isViablePhoneNumber__["a" /* default */])(number)) {
    return {};
  }

  var result = {
    number: number
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * @param  {object} - `{ ?number, ?extension }`.
 * @return {string} Phone URI (RFC 3966).
 */

function formatRFC3966(_ref2) {
  var number = _ref2.number,
      ext = _ref2.ext;

  if (!number) {
    return '';
  }

  if (number[0] !== '+') {
    throw new Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
  }

  return "tel:".concat(number).concat(ext ? ';ext=' + ext : '');
}
//# sourceMappingURL=RFC3966.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXTN_PATTERNS_FOR_PARSING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EXTN_PATTERNS_FOR_MATCHING; });
/* harmony export (immutable) */ __webpack_exports__["b"] = extractExtension;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(426);
 // The RFC 3966 format for extensions.

var RFC3966_EXTN_PREFIX = ';ext='; // Pattern to capture digits used in an extension.
// Places a maximum length of '7' for an extension.

var CAPTURING_EXTN_DIGITS = '([' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']{1,7})';
/**
 * Regexp of all possible ways to write extensions, for use when parsing. This
 * will be run as a case-insensitive regexp match. Wide character versions are
 * also provided after each ASCII version. There are three regular expressions
 * here. The first covers RFC 3966 format, where the extension is added using
 * ';ext='. The second more generic one starts with optional white space and
 * ends with an optional full stop (.), followed by zero or more spaces/tabs
 * /commas and then the numbers themselves. The other one covers the special
 * case of American numbers where the extension is written with a hash at the
 * end, such as '- 503#'. Note that the only capturing groups should be around
 * the digits that you want to capture as part of the extension, or else parsing
 * will fail! We allow two options for representing the accented o - the
 * character itself, and one in the unicode decomposed form with the combining
 * acute accent.
 */

function create_extension_pattern(purpose) {
  // One-character symbols that can be used to indicate an extension.
  var single_extension_characters = "x\uFF58#\uFF03~\uFF5E";

  switch (purpose) {
    // For parsing, we are slightly more lenient in our interpretation than for matching. Here we
    // allow "comma" and "semicolon" as possible extension indicators. When matching, these are
    case 'parsing':
      single_extension_characters = ',;' + single_extension_characters;
  }

  return RFC3966_EXTN_PREFIX + CAPTURING_EXTN_DIGITS + '|' + "[ \xA0\\t,]*" + "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|" + // "доб."
  "\u0434\u043E\u0431|" + '[' + single_extension_characters + "]|int|anexo|\uFF49\uFF4E\uFF54)" + "[:\\.\uFF0E]?[ \xA0\\t,-]*" + CAPTURING_EXTN_DIGITS + '#?|' + '[- ]+([' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']{1,5})#';
}
/**
 * Regexp of all possible ways to write extensions, for use when parsing. This
 * will be run as a case-insensitive regexp match. Wide character versions are
 * also provided after each ASCII version. There are three regular expressions
 * here. The first covers RFC 3966 format, where the extension is added using
 * ';ext='. The second more generic one starts with optional white space and
 * ends with an optional full stop (.), followed by zero or more spaces/tabs
 * /commas and then the numbers themselves. The other one covers the special
 * case of American numbers where the extension is written with a hash at the
 * end, such as '- 503#'. Note that the only capturing groups should be around
 * the digits that you want to capture as part of the extension, or else parsing
 * will fail! We allow two options for representing the accented o - the
 * character itself, and one in the unicode decomposed form with the combining
 * acute accent.
 */


var EXTN_PATTERNS_FOR_PARSING = create_extension_pattern('parsing');
var EXTN_PATTERNS_FOR_MATCHING = create_extension_pattern('matching'); // Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.

var EXTN_PATTERN = new RegExp('(?:' + EXTN_PATTERNS_FOR_PARSING + ')$', 'i'); // Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.

function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);

  if (start < 0) {
    return {};
  } // If we find a potential extension, and the number preceding this is a viable
  // number, we assume it is an extension.


  var number_without_extension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;

  while (i < matches.length) {
    if (matches[i] != null && matches[i].length > 0) {
      return {
        number: number_without_extension,
        ext: matches[i]
      };
    }

    i++;
  }
}
//# sourceMappingURL=extension.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = parse;
/* unused harmony export extractFormattedPhoneNumber */
/* harmony export (immutable) */ __webpack_exports__["b"] = stripNationalPrefixAndCarrierCode;
/* harmony export (immutable) */ __webpack_exports__["c"] = findCountryCode;
/* harmony export (immutable) */ __webpack_exports__["e"] = stripNationalPrefixAndCarrierCodeFromCompleteNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = extractCountryCallingCode;
/* harmony export (immutable) */ __webpack_exports__["d"] = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ParseError__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isViablePhoneNumber__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extension__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parseIncompletePhoneNumber__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__getCountryCallingCode__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__getNumberType___ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isPossibleNumber___ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__IDD__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RFC3966__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PhoneNumber__ = __webpack_require__(487);
// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js












 // We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.

var MAX_INPUT_STRING_LENGTH = 250; // This consists of the plus symbol, digits, and arabic-indic digits.

var PHONE_NUMBER_START_PATTERN = new RegExp('[' + __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* PLUS_CHARS */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']'); // Regular expression of trailing characters that we want to remove.

var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']+$');
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false; // `options`:
//  {
//    country:
//    {
//      restrict - (a two-letter country code)
//                 the phone number must be in this country
//
//      default - (a two-letter country code)
//                default country to use for phone number parsing and validation
//                (if no country code could be derived from the phone number)
//    }
//  }
//
// Returns `{ country, number }`
//
// Example use cases:
//
// ```js
// parse('8 (800) 555-35-35', 'RU')
// parse('8 (800) 555-35-35', 'RU', metadata)
// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
// parse('+7 800 555 35 35')
// parse('+7 800 555 35 35', metadata)
// ```
//

function parse(text, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* default */](metadata); // Validate `defaultCountry`.

  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new __WEBPACK_IMPORTED_MODULE_2__ParseError__["a" /* default */]('INVALID_COUNTRY');
    }

    throw new Error("Unknown country: ".concat(options.defaultCountry));
  } // Parse the phone number.


  var _parseInput = parseInput(text, options.v2),
      formattedPhoneNumber = _parseInput.number,
      ext = _parseInput.ext; // If the phone number is not viable then return nothing.


  if (!formattedPhoneNumber) {
    if (options.v2) {
      throw new __WEBPACK_IMPORTED_MODULE_2__ParseError__["a" /* default */]('NOT_A_NUMBER');
    }

    return {};
  }

  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata),
      country = _parsePhoneNumber.country,
      nationalNumber = _parsePhoneNumber.nationalNumber,
      countryCallingCode = _parsePhoneNumber.countryCallingCode,
      carrierCode = _parsePhoneNumber.carrierCode;

  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new __WEBPACK_IMPORTED_MODULE_2__ParseError__["a" /* default */]('INVALID_COUNTRY');
    }

    return {};
  } // Validate national (significant) number length.


  if (!nationalNumber || nationalNumber.length < __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* MIN_LENGTH_FOR_NSN */]) {
    // Won't throw here because the regexp already demands length > 1.

    /* istanbul ignore if */
    if (options.v2) {
      throw new __WEBPACK_IMPORTED_MODULE_2__ParseError__["a" /* default */]('TOO_SHORT');
    } // Google's demo just throws an error in this case.


    return {};
  } // Validate national (significant) number length.
  //
  // A sidenote:
  //
  // They say that sometimes national (significant) numbers
  // can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
  // https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
  // Such numbers will just be discarded.
  //


  if (nationalNumber.length > __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* MAX_LENGTH_FOR_NSN */]) {
    if (options.v2) {
      throw new __WEBPACK_IMPORTED_MODULE_2__ParseError__["a" /* default */]('TOO_LONG');
    } // Google's demo just throws an error in this case.


    return {};
  }

  if (options.v2) {
    var phoneNumber = new __WEBPACK_IMPORTED_MODULE_12__PhoneNumber__["a" /* default */](countryCallingCode, nationalNumber, metadata.metadata);

    if (country) {
      phoneNumber.country = country;
    }

    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }

    if (ext) {
      phoneNumber.ext = ext;
    }

    return phoneNumber;
  } // Check if national phone number pattern matches the number.
  // National number pattern is different for each country,
  // even for those ones which are part of the "NANPA" group.


  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(nationalNumber, metadata.nationalNumberPattern()) : false;

  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  }

  return {
    country: country,
    countryCallingCode: countryCallingCode,
    carrierCode: carrierCode,
    valid: valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__isPossibleNumber___["b" /* isPossibleNumber */])(nationalNumber, countryCallingCode !== undefined, metadata) ? true : false,
    phone: nationalNumber,
    ext: ext
  };
}
/**
 * Extracts a formatted phone number from text.
 * Doesn't guarantee that the extracted phone number
 * is a valid phone number (for example, doesn't validate its length).
 * @param  {string} text
 * @param  {boolean} throwOnError — By default, it won't throw if the text is too long.
 * @return {string}
 * @example
 * // Returns "(213) 373-4253".
 * extractFormattedPhoneNumber("Call (213) 373-4253 for assistance.")
 */

function extractFormattedPhoneNumber(text, throwOnError) {
  if (!text) {
    return;
  }

  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new __WEBPACK_IMPORTED_MODULE_2__ParseError__["a" /* default */]('TOO_LONG');
    }

    return;
  } // Attempt to extract a possible number from the string passed in


  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);

  if (startsAt < 0) {
    return;
  }

  return text // Trim everything to the left of the phone number
  .slice(startsAt) // Remove trailing non-numerical characters
  .replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}
/**
 * Strips any national prefix (such as 0, 1) present in a
 * (possibly incomplete) number provided.
 * "Carrier codes" are only used  in Colombia and Brazil,
 * and only when dialing within those countries from a mobile phone to a fixed line number.
 * Sometimes it won't actually strip national prefix
 * and will instead prepend some digits to the `number`:
 * for example, when number `2345678` is passed with `VI` country selected,
 * it will return `{ number: "3402345678" }`, because `340` area code is prepended.
 * @param {string} number — National number digits.
 * @param {object} metadata — Metadata with country selected.
 * @return {object} `{ nationalNumber: string, carrierCode: string? }`.
 */

function stripNationalPrefixAndCarrierCode(number, metadata) {
  if (number && metadata.nationalPrefixForParsing()) {
    // See METADATA.md for the description of
    // `national_prefix_for_parsing` and `national_prefix_transform_rule`.
    // Attempt to parse the first digits as a national prefix.
    var prefixPattern = new RegExp('^(?:' + metadata.nationalPrefixForParsing() + ')');
    var prefixMatch = prefixPattern.exec(number);

    if (prefixMatch) {
      var nationalNumber;
      var carrierCode; // If a "capturing group" didn't match
      // then its element in `prefixMatch[]` array will be `undefined`.

      var capturedGroupsCount = prefixMatch.length - 1;

      if (metadata.nationalPrefixTransformRule() && capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount]) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule()); // Carrier code is the last captured group,
        // but only when there's more than one captured group.

        if (capturedGroupsCount > 1 && prefixMatch[capturedGroupsCount]) {
          carrierCode = prefixMatch[1];
        }
      } // If it's a simple-enough case then just
      // strip the national prefix from the number.
      else {
          // National prefix is the whole substring matched by
          // the `national_prefix_for_parsing` regexp.
          var nationalPrefix = prefixMatch[0];
          nationalNumber = number.slice(nationalPrefix.length); // Carrier code is the last captured group.

          if (capturedGroupsCount > 0) {
            carrierCode = prefixMatch[1];
          }
        } // We require that the national (significant) number remaining after
      // stripping the national prefix and carrier code be long enough
      // to be a possible length for the region. Otherwise, we don't do
      // the stripping, since the original number could be a valid number.
      // For example, in some countries (Russia, Belarus) the same digit
      // could be both a national prefix and a leading digit of a valid
      // national phone number, like `8` is the national prefix for Russia
      // and `800 555 35 35` is a valid national (significant) number.


      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(number, metadata.nationalNumberPattern()) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(nationalNumber, metadata.nationalNumberPattern())) {// Don't strip national prefix or carrier code.
      } else {
        return {
          nationalNumber: nationalNumber,
          carrierCode: carrierCode
        };
      }
    }
  }

  return {
    nationalNumber: number
  };
}
function findCountryCode(callingCode, nationalPhoneNumber, metadata) {
  /* istanbul ignore if */
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return '001';
    }
  } // Is always non-empty, because `callingCode` is always valid


  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);

  if (!possibleCountries) {
    return;
  } // If there's just one country corresponding to the country code,
  // then just return it, without further phone number digits validation.


  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }

  return _findCountryCode(possibleCountries, nationalPhoneNumber, metadata.metadata);
} // Changes `metadata` `country`.

function _findCountryCode(possibleCountries, nationalPhoneNumber, metadata) {
  metadata = new __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* default */](metadata);

  for (var _iterator = possibleCountries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var country = _ref;
    metadata.country(country); // Leading digits check would be the simplest one

    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } // Else perform full validation with all of those
    // fixed-line/mobile/etc regular expressions.
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__getNumberType___["a" /* default */])({
        phone: nationalPhoneNumber,
        country: country
      }, undefined, metadata.metadata)) {
        return country;
      }
  }
}
/**
 * @param  {string} text - Input.
 * @return {object} `{ ?number, ?ext }`.
 */


function parseInput(text, v2) {
  // Parse RFC 3966 phone number URI.
  if (text && text.indexOf('tel:') === 0) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__RFC3966__["b" /* parseRFC3966 */])(text);
  }

  var number = extractFormattedPhoneNumber(text, v2); // If the phone number is not viable, then abort.

  if (!number || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isViablePhoneNumber__["a" /* default */])(number)) {
    return {};
  } // Attempt to parse extension first, since it doesn't require region-specific
  // data and we want to have the non-normalised number here.


  var withExtensionStripped = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__extension__["b" /* extractExtension */])(number);

  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }

  return {
    number: number
  };
}
/**
 * Creates `parse()` result object.
 */


function result(country, nationalNumber, ext) {
  var result = {
    country: country,
    phone: nationalNumber
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * Parses a viable phone number.
 * @param {string} formattedPhoneNumber — Example: "(213) 373-4253".
 * @param {string} [defaultCountry]
 * @param {string} [defaultCallingCode]
 * @param {Metadata} metadata
 * @return {object} Returns `{ country: string?, countryCallingCode: string?, nationalNumber: string? }`.
 */


function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  // Extract calling code from phone number.
  var _extractCountryCallin = extractCountryCallingCode(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__parseIncompletePhoneNumber__["a" /* default */])(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata),
      countryCallingCode = _extractCountryCallin.countryCallingCode,
      number = _extractCountryCallin.number; // Choose a country by `countryCallingCode`.


  var country;

  if (countryCallingCode) {
    metadata.chooseCountryByCountryCallingCode(countryCallingCode);
  } // If `formattedPhoneNumber` is in "national" format
  // then `number` is defined and `countryCallingCode` isn't.
  else if (number && (defaultCountry || defaultCallingCode)) {
      metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);

      if (defaultCountry) {
        country = defaultCountry;
      } else {
        /* istanbul ignore if */
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            country = '001';
          }
        }
      }

      countryCallingCode = defaultCallingCode || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__getCountryCallingCode__["a" /* default */])(defaultCountry, metadata.metadata);
    } else return {};

  if (!number) {
    return {
      countryCallingCode: countryCallingCode
    };
  }

  var _stripNationalPrefixA = stripNationalPrefixAndCarrierCodeFromCompleteNumber(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__parseIncompletePhoneNumber__["a" /* default */])(number), metadata),
      nationalNumber = _stripNationalPrefixA.nationalNumber,
      carrierCode = _stripNationalPrefixA.carrierCode; // Sometimes there are several countries
  // corresponding to the same country phone code
  // (e.g. NANPA countries all having `1` country phone code).
  // Therefore, to reliably determine the exact country,
  // national (significant) number should have been parsed first.
  //
  // When `metadata.json` is generated, all "ambiguous" country phone codes
  // get their countries populated with the full set of
  // "phone number type" regular expressions.
  //


  var exactCountry = findCountryCode(countryCallingCode, nationalNumber, metadata);

  if (exactCountry) {
    country = exactCountry;
    /* istanbul ignore if */

    if (exactCountry === '001') {// Can't happen with `USE_NON_GEOGRAPHIC_COUNTRY_CODE` being `false`.
      // If `USE_NON_GEOGRAPHIC_COUNTRY_CODE` is set to `true` for some reason,
      // then remove the "istanbul ignore if".
    } else {
      metadata.country(country);
    }
  }

  return {
    country: country,
    countryCallingCode: countryCallingCode,
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
}
/**
 * Strips national prefix and carrier code from a complete phone number.
 * The difference from the non-"FromCompleteNumber" function is that
 * it won't extract national prefix if the resultant number is too short
 * to be a complete number for the selected phone numbering plan.
 * @param  {string} number — Complete phone number digits.
 * @param  {Metadata} metadata — Metadata with a phone numbering plan selected.
 * @return {object} `{ nationalNumber: string, carrierCode: string? }`.
 */


function stripNationalPrefixAndCarrierCodeFromCompleteNumber(number, metadata) {
  // Parsing national prefixes and carrier codes
  // is only required for local phone numbers
  // but some people don't understand that
  // and sometimes write international phone numbers
  // with national prefixes (or maybe even carrier codes).
  // http://ucken.blogspot.ru/2016/03/trunk-prefixes-in-skype4b.html
  // Google's original library forgives such mistakes
  // and so does this library, because it has been requested:
  // https://github.com/catamphetamine/libphonenumber-js/issues/127
  var _stripNationalPrefixA2 = stripNationalPrefixAndCarrierCode(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__parseIncompletePhoneNumber__["a" /* default */])(number), metadata),
      nationalNumber = _stripNationalPrefixA2.nationalNumber,
      carrierCode = _stripNationalPrefixA2.carrierCode; // If a national prefix has been extracted, check to see
  // if the resultant number isn't too short.


  if (nationalNumber.length !== number.length + (carrierCode ? carrierCode.length : 0)) {
    // If not using legacy generated metadata (before version `1.0.18`)
    // then it has "possible lengths", so use those to validate the number length.
    if (metadata.possibleLengths()) {
      // "We require that the NSN remaining after stripping the national prefix and
      // carrier code be long enough to be a possible length for the region.
      // Otherwise, we don't do the stripping, since the original number could be
      // a valid short number."
      // https://github.com/google/libphonenumber/blob/876268eb1ad6cdc1b7b5bef17fc5e43052702d57/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3236-L3250
      switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__getNumberType___["b" /* checkNumberLengthForType */])(nationalNumber, undefined, metadata)) {
        case 'TOO_SHORT':
        case 'INVALID_LENGTH':
          // case 'IS_POSSIBLE_LOCAL_ONLY':
          // Don't strip the national prefix.
          return {
            nationalNumber: number
          };
      }
    }
  }

  return {
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
}
/**
 * Converts a phone number digits (possibly with a `+`)
 * into a calling code and the rest phone number digits.
 * The "rest phone number digits" could include
 * a national prefix, carrier code, and national
 * (significant) number.
 * @param  {string} number — Phone number digits (possibly with a `+`).
 * @param  {string} [country] — Default country.
 * @param  {string} [callingCode] — Default calling code (some phone numbering plans are non-geographic).
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`
 * @example
 * // Returns `{ countryCallingCode: "1", number: "2133734253" }`.
 * extractCountryCallingCode('2133734253', 'US', null, metadata)
 * extractCountryCallingCode('2133734253', null, '1', metadata)
 * extractCountryCallingCode('+12133734253', null, null, metadata)
 * extractCountryCallingCode('+12133734253', 'RU', null, metadata)
 */

function extractCountryCallingCode(number, country, callingCode, metadata) {
  if (!number) {
    return {};
  } // If this is not an international phone number,
  // then either extract an "IDD" prefix, or extract a
  // country calling code from a number by autocorrecting it
  // by prepending a leading `+` in cases when it starts
  // with the country calling code.
  // https://wikitravel.org/en/International_dialling_prefix
  // https://github.com/catamphetamine/libphonenumber-js/issues/376


  if (number[0] !== '+') {
    // Convert an "out-of-country" dialing phone number
    // to a proper international phone number.
    var numberWithoutIDD = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__IDD__["b" /* stripIDDPrefix */])(number, country, callingCode, metadata); // If an IDD prefix was stripped then
    // convert the number to international one
    // for subsequent parsing.

    if (numberWithoutIDD && numberWithoutIDD !== number) {
      number = '+' + numberWithoutIDD;
    } else {
      // Check to see if the number starts with the country calling code
      // for the default country. If so, we remove the country calling code,
      // and do some checks on the validity of the number before and after.
      // https://github.com/catamphetamine/libphonenumber-js/issues/376
      if (country || callingCode) {
        var _extractCountryCallin2 = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata),
            countryCallingCode = _extractCountryCallin2.countryCallingCode,
            shorterNumber = _extractCountryCallin2.number;

        if (countryCallingCode) {
          return {
            countryCallingCode: countryCallingCode,
            number: shorterNumber
          };
        }
      }

      return {
        number: number
      };
    }
  } // Fast abortion: country codes do not begin with a '0'


  if (number[1] === '0') {
    return {};
  }

  metadata = new __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* default */](metadata); // The thing with country phone codes
  // is that they are orthogonal to each other
  // i.e. there's no such country phone code A
  // for which country phone code B exists
  // where B starts with A.
  // Therefore, while scanning digits,
  // if a valid country code is found,
  // that means that it is the country code.
  //

  var i = 2;

  while (i - 1 <= __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* MAX_LENGTH_COUNTRY_CODE */] && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);

    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(undefined, _countryCallingCode);
      return {
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }

    i++;
  }

  return {};
}
/**
 * Sometimes some people incorrectly input international phone numbers
 * without the leading `+`. This function corrects such input.
 * @param  {string} number — Phone number digits.
 * @param  {string?} country
 * @param  {string?} callingCode
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`.
 */

function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
  var countryCallingCode = country ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__getCountryCallingCode__["a" /* default */])(country, metadata) : callingCode;

  if (number.indexOf(countryCallingCode) === 0) {
    metadata = new __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* default */](metadata);
    metadata.selectNumberingPlan(country, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);

    var _stripNationalPrefixA3 = stripNationalPrefixAndCarrierCode(possibleShorterNumber, metadata),
        possibleShorterNationalNumber = _stripNationalPrefixA3.nationalNumber;

    var _stripNationalPrefixA4 = stripNationalPrefixAndCarrierCode(number, metadata),
        nationalNumber = _stripNationalPrefixA4.nationalNumber; // If the number was not valid before but is valid now,
    // or if it was too long before, we consider the number
    // with the country calling code stripped to be a better result
    // and keep that instead.
    // For example, in Germany (+49), `49` is a valid area code,
    // so if a number starts with `49`, it could be both a valid
    // national German number or an international number without
    // a leading `+`.


    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(nationalNumber, metadata.nationalNumberPattern()) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__getNumberType___["b" /* checkNumberLengthForType */])(nationalNumber, undefined, metadata) === 'TOO_LONG') {
      return {
        countryCallingCode: countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }

  return {
    number: number
  };
}
//# sourceMappingURL=parse_.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValidNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNumberType___ = __webpack_require__(456);



/**
 * Checks if a given phone number is valid.
 *
 * If the `number` is a string, it will be parsed to an object,
 * but only if it contains only valid phone number characters (including punctuation).
 * If the `number` is an object, it is used as is.
 *
 * The optional `defaultCountry` argument is the default country.
 * I.e. it does not restrict to just that country,
 * e.g. in those cases where several countries share
 * the same phone numbering rules (NANPA, Britain, etc).
 * For example, even though the number `07624 369230`
 * belongs to the Isle of Man ("IM" country code)
 * calling `isValidNumber('07624369230', 'GB', metadata)`
 * still returns `true` because the country is not restricted to `GB`,
 * it's just that `GB` is the default one for the phone numbering rules.
 * For restricting the country see `isValidNumberForRegion()`
 * though restricting a country might not be a good idea.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 *
 * Examples:
 *
 * ```js
 * isValidNumber('+78005553535', metadata)
 * isValidNumber('8005553535', 'RU', metadata)
 * isValidNumber('88005553535', 'RU', metadata)
 * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */

function isValidNumber(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata); // This is just to support `isValidNumber({})`
  // for cases when `parseNumber()` returns `{}`.

  if (!input.country) {
    return false;
  }

  metadata.selectNumberingPlan(input.country, input.countryCallingCode); // By default, countries only have type regexps when it's required for
  // distinguishing different countries having the same `countryCallingCode`.

  if (metadata.hasTypes()) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getNumberType___["a" /* default */])(input, options, metadata.metadata) !== undefined;
  } // If there are no type regexps for this country in metadata then use
  // `nationalNumberPattern` as a "better than nothing" replacement.


  var national_number = options.v2 ? input.nationalNumber : input.phone;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(national_number, metadata.nationalNumberPattern());
}
//# sourceMappingURL=validate_.js.map

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = exports.loadingIndicatorCSS = exports.IndicatorSeparator = exports.indicatorSeparatorCSS = exports.ClearIndicator = exports.clearIndicatorCSS = exports.DropdownIndicator = exports.dropdownIndicatorCSS = exports.DownChevron = exports.CrossIcon = undefined;

var _emotion = __webpack_require__(416);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(422);

__webpack_require__(801);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// ==============================
// Dropdown & Clear Icons
// ==============================

var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement('svg', _extends({
    height: size,
    width: size,
    viewBox: '0 0 20 20',
    'aria-hidden': 'true',
    focusable: 'false',
    className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = exports.CrossIcon = function CrossIcon(props) {
  return _react2.default.createElement(
    Svg,
    _extends({ size: 20 }, props),
    _react2.default.createElement('path', { d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z' })
  );
};
var DownChevron = exports.DownChevron = function DownChevron(props) {
  return _react2.default.createElement(
    Svg,
    _extends({ size: 20 }, props),
    _react2.default.createElement('path', { d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' })
  );
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused;
  return {
    color: isFocused ? _theme.colors.neutral60 : _theme.colors.neutral20,
    display: 'flex',
    padding: _theme.spacing.baseUnit * 2,
    transition: 'color 150ms',

    ':hover': {
      color: isFocused ? _theme.colors.neutral100 : _theme.colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = exports.dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = exports.DropdownIndicator = function DropdownIndicator(props) {
  var _props$children = props.children,
      children = _props$children === undefined ? _react2.default.createElement(DownChevron, null) : _props$children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('dropdownIndicator', props)), {
        'indicator': true,
        'dropdown-indicator': true
      }, className)
    }),
    children
  );
};

var clearIndicatorCSS = exports.clearIndicatorCSS = baseCSS;
var ClearIndicator = exports.ClearIndicator = function ClearIndicator(props) {
  var _props$children2 = props.children,
      children = _props$children2 === undefined ? _react2.default.createElement(CrossIcon, null) : _props$children2,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('clearIndicator', props)), {
        'indicator': true,
        'clear-indicator': true
      }, className)
    }),
    children
  );
};

// ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = exports.indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled;
  return {
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? _theme.colors.neutral10 : _theme.colors.neutral20,
    marginBottom: _theme.spacing.baseUnit * 2,
    marginTop: _theme.spacing.baseUnit * 2,
    width: 1
  };
};

var IndicatorSeparator = exports.IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement('span', _extends({}, innerProps, {
    className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('indicatorSeparator', props)), { 'indicator-separator': true }, className)
  }));
};

// ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';

var loadingIndicatorCSS = exports.loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size;
  return {
    color: isFocused ? _theme.colors.neutral60 : _theme.colors.neutral20,
    display: 'flex',
    padding: _theme.spacing.baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return _react2.default.createElement('span', {
    className: (0, _emotion.css)({
      animationDuration: '1s',
      animationDelay: delay + 'ms',
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    })
  });
};

// eslint-disable-next-line no-unused-expressions
(0, _emotion.injectGlobal)('@keyframes ', keyframesName, '{0%,80%,100%{opacity:0;}40%{opacity:1;}};');

var LoadingIndicator = exports.LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl;

  var color = isFocused ? _theme.colors.text : _theme.colors.neutral20;

  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('loadingIndicator', props)), {
        'indicator': true,
        'loading-indicator': true
      }, className)
    }),
    _react2.default.createElement(LoadingDot, { color: color, delay: 0, offset: isRtl }),
    _react2.default.createElement(LoadingDot, { color: color, delay: 160, offset: true }),
    _react2.default.createElement(LoadingDot, { color: color, delay: 320, offset: !isRtl })
  );
};
LoadingIndicator.defaultProps = { size: 4 };

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _reactDom = __webpack_require__(76);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeResolver = function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, (NodeResolver.__proto__ || Object.getPrototypeOf(NodeResolver)).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.innerRef((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(_react.Component);

exports.default = NodeResolver;

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanValue = exports.emptyString = exports.noop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.classNames = classNames;
exports.handleInputChange = handleInputChange;
exports.isDocumentElement = isDocumentElement;
exports.normalizedHeight = normalizedHeight;
exports.getScrollTop = getScrollTop;
exports.scrollTo = scrollTo;
exports.getScrollParent = getScrollParent;
exports.animatedScrollTo = animatedScrollTo;
exports.scrollIntoView = scrollIntoView;
exports.getBoundingClientObj = getBoundingClientObj;
exports.toKey = toKey;
exports.isTouchCapable = isTouchCapable;
exports.isMobileDevice = isMobileDevice;

var _raf = __webpack_require__(832);

var _raf2 = _interopRequireDefault(_raf);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// NO OP
// ==============================

var noop = exports.noop = function noop() {};
var emptyString = exports.emptyString = function emptyString() {
  return '';
};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push('' + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var cleanValue = exports.cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }

  return el.clientHeight;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}

function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      (0, _raf2.default)(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}


// ==============================
// String to Key (kebabify)
// ==============================

function toKey(str) {
  return str.replace(/\W/g, '-');
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);




var CreateTokenView = function (_a) {
    var dispatch = _a.dispatch, createingServerToken = _a.createingServerToken;
    return createingServerToken ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"], { show: true, onHide: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateServerTokenProp()); } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Header, { closeButton: true },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: 'text-primary' }, "Create server access Token")),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: 'static-modal', style: { padding: 10 }, onSubmit: function (e) {
                e.preventDefault();
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().createNewWorkSpaceToken());
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Body, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["InputGroup"], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["InputGroup"].Addon, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Tooltip"], { id: 'tokenname' },
                                    "a name for this token ",
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null, "4 characters +")) },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Token name"))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], { type: 'text', placeholder: 'A name that we can recognize this token by...', value: createingServerToken.name || '', required: true, onChange: function (e) {
                                return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateServerTokenProp('name', e.target.value));
                            } })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"].Feedback, null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["InputGroup"], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["InputGroup"].Addon, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Valid for days :")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], { type: 'number', placeholder: 'How many days this token is valid for', value: createingServerToken.validityDays || '', required: true, onChange: function (e) {
                                return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateServerTokenProp('validityDays', e.target.value));
                            } })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"].Feedback, null)),
                createingServerToken.token && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], { controlId: 'formControlsTextarea' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ControlLabel"], null, "Access Token"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], { componentClass: 'textarea', readOnly: true, value: createingServerToken.token })))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Footer, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], { bsStyle: 'info', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateServerTokenProp()); } }, createingServerToken.token ? 'Close' : 'Cancel'),
                !createingServerToken.token && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], { bsStyle: 'danger', type: 'submit' }, "Create new token")))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state) {
    var createingServerToken = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().getCurrentState(state).createingServerToken;
    return { createingServerToken: createingServerToken };
})(CreateTokenView));


/***/ }),

/***/ 621:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = format;

var _templateFormatter = __webpack_require__(624);

var _templateFormatter2 = _interopRequireDefault(_templateFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Formats `value` value preserving `caret` at the same character.
//
// `{ value, caret }` attribute is the result of `parse()` function call.
//
// Returns `{ text, caret }` where the new `caret` is the caret position
// inside `text` text corresponding to the original `caret` position inside `value`.
//
// `formatter(value)` is a function returning `{ text, template }`.
//
// `text` is the `value` value formatted using `template`.
// It may either cut off the non-filled right part of the `template`
// or it may fill the non-filled character placeholders
// in the right part of the `template` with `spacer`
// which is a space (' ') character by default.
//
// `template` is the template used to format the `value`.
// It can be either a full-length template or a partial template.
//
// `formatter` can also be a string — a `template`
// where character placeholders are denoted by 'x'es.
// In this case `formatter` function is automatically created.
//
// Example:
//
// `value` is '880',
// `caret` is `2` (before the first `0`)
//
// `formatter` is `'880' =>
//   { text: '8 (80 )', template: 'x (xxx) xxx-xx-xx' }`
//
// The result is `{ text: '8 (80 )', caret: 4 }`.
//
function format(value, caret, formatter) {
	if (typeof formatter === 'string') {
		formatter = (0, _templateFormatter2.default)(formatter);
	}

	var _ref = formatter(value) || {},
	    text = _ref.text,
	    template = _ref.template;

	if (text === undefined) {
		text = value;
	}

	if (template) {
		if (caret === undefined) {
			caret = text.length;
		} else {
			var index = 0;
			var found = false;

			var possibly_last_input_character_index = -1;

			while (index < text.length && index < template.length) {
				// Character placeholder found
				if (text[index] !== template[index]) {
					if (caret === 0) {
						found = true;
						caret = index;
						break;
					}

					possibly_last_input_character_index = index;

					caret--;
				}

				index++;
			}

			// If the caret was positioned after last input character,
			// then the text caret index is just after the last input character.
			if (!found) {
				caret = possibly_last_input_character_index + 1;
			}
		}
	}

	return { text: text, caret: caret };
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.onCut = onCut;
exports.onPaste = onPaste;
exports.onChange = onChange;
exports.onKeyDown = onKeyDown;

var _edit = __webpack_require__(719);

var _edit2 = _interopRequireDefault(_edit);

var _parse3 = __webpack_require__(557);

var _parse4 = _interopRequireDefault(_parse3);

var _format2 = __webpack_require__(622);

var _format3 = _interopRequireDefault(_format2);

var _dom = __webpack_require__(718);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onCut(event, input, _parse, _format, on_change) {
	// The actual cut hasn't happened just yet hence the timeout.
	setTimeout(function () {
		return format_input_text(input, _parse, _format, undefined, on_change);
	}, 0);
}

function onPaste(event, input, _parse, _format, on_change) {
	var selection = (0, _dom.getSelection)(input);

	// If selection is made,
	// just erase the selected text
	// prior to pasting
	if (selection) {
		erase_selection(input, selection);
	}

	format_input_text(input, _parse, _format, undefined, on_change);
}

function onChange(event, input, _parse, _format, on_change) {
	format_input_text(input, _parse, _format, undefined, on_change);
}

// Intercepts "Delete" and "Backspace" keys.
// (hitting "Delete" or "Backspace" at any caret
//  position should always result in rasing a digit)
function onKeyDown(event, input, _parse, _format, on_change) {
	var operation = (0, _dom.getOperation)(event);

	switch (operation) {
		case 'Delete':
		case 'Backspace':
			// Intercept this operation and perform it manually.
			event.preventDefault();

			var selection = (0, _dom.getSelection)(input);

			// If selection is made,
			// just erase the selected text,
			// and don't apply any more operations to it.
			if (selection) {
				erase_selection(input, selection);
				return format_input_text(input, _parse, _format, undefined, on_change);
			}

			// Else, perform the (character erasing) operation manually
			return format_input_text(input, _parse, _format, operation, on_change);

		default:
		// Will be handled when `onChange` fires.
	}
}

/**
 * Erases the selected text inside an `<input/>`.
 * @param  {DOMElement} input
 * @param  {Selection} selection
 */
function erase_selection(input, selection) {
	var text = input.value;
	text = text.slice(0, selection.start) + text.slice(selection.end);

	input.value = text;
	(0, _dom.setCaretPosition)(input, selection.start);
}

/**
 * Parses and re-formats `<input/>` textual value.
 * E.g. when a user enters something into the `<input/>`
 * that raw input must first be parsed and the re-formatted properly.
 * Is called either after some user input (e.g. entered a character, pasted something)
 * or after the user performed an `operation` (e.g. "Backspace", "Delete").
 * @param  {DOMElement} input
 * @param  {Function} parse
 * @param  {Function} format
 * @param  {string} [operation] - The operation that triggered `<input/>` textual value change. E.g. "Backspace", "Delete".
 * @param  {Function} onChange
 */
function format_input_text(input, _parse, _format, operation, on_change) {
	// Parse `<input/>` textual value.
	// Get `value` and `caret` position.
	var _parse2 = (0, _parse4.default)(input.value, (0, _dom.getCaretPosition)(input), _parse),
	    value = _parse2.value,
	    caret = _parse2.caret;

	// If a user performed an operation (e.g. "Backspace", "Delete")
	// then apply that operation and get new `value` and `caret` position.


	if (operation) {
		var operation_applied = (0, _edit2.default)(value, caret, operation);

		value = operation_applied.value;
		caret = operation_applied.caret;
	}

	// Format the `value`.
	// (and reposition the caret accordingly)
	var formatted = (0, _format3.default)(value, caret, _format);

	var text = formatted.text;
	caret = formatted.caret;

	// Set `<input/>` textual value manually
	// to prevent React from resetting the caret position
	// later inside subsequent `render()`.
	// Doesn't work for custom `inputComponent`s for some reason.
	input.value = text;
	// Position the caret properly.
	(0, _dom.setCaretPosition)(input, caret);

	// `<input/>` textual value may have changed,
	// so the parsed `value` may have changed too.
	// The `value` didn't neccessarily change
	// but it might have.
	on_change(value);
}
//# sourceMappingURL=input control.js.map

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (template) {
	var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
	var should_close_braces = arguments[2];

	if (!template) {
		return function (value) {
			return { text: value };
		};
	}

	var characters_in_template = (0, _helpers.count_occurences)(placeholder, template);

	return function (value) {
		if (!value) {
			return { text: '', template: template };
		}

		var value_character_index = 0;
		var filled_in_template = '';

		// Using `.split('')` here instead of normal `for ... of`
		// because the importing application doesn't neccessarily include an ES6 polyfill.
		// The `.split('')` approach discards "exotic" UTF-8 characters
		// (the ones consisting of four bytes)
		// but template placeholder characters don't fall into that range
		// and appending UTF-8 characters to a string in parts still works.
		for (var _iterator = template.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref = _i.value;
			}

			var character = _ref;

			if (character !== placeholder) {
				filled_in_template += character;
				continue;
			}

			filled_in_template += value[value_character_index];
			value_character_index++;

			// If the last available value character has been filled in,
			// then return the filled in template
			// (either trim the right part or retain it,
			//  if no more character placeholders in there)
			if (value_character_index === value.length) {
				// If there are more character placeholders
				// in the right part of the template
				// then simply trim it.
				if (value.length < characters_in_template) {
					break;
				}
			}
		}

		if (should_close_braces) {
			filled_in_template = (0, _closeBraces2.default)(filled_in_template, template);
		}

		return { text: filled_in_template, template: template };
	};
};

var _helpers = __webpack_require__(556);

var _closeBraces = __webpack_require__(717);

var _closeBraces2 = _interopRequireDefault(_closeBraces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=template formatter.js.map

/***/ }),

/***/ 625:
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

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DIGIT_PLACEHOLDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsYouType; });
/* unused harmony export stripNonPairedParens */
/* unused harmony export cutAndStripNonPairedParens */
/* unused harmony export closeNonPairedParens */
/* unused harmony export countOccurences */
/* unused harmony export repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhoneNumber__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse___ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format___ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IDD__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__getNumberType___ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parseDigits__ = __webpack_require__(489);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is an enhanced port of Google Android `libphonenumber`'s
// `asyoutypeformatter.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/blob/8d21a365061de2ba0675c878a710a7b24f74d2ae/javascript/i18n/phonenumbers/asyoutypeformatter.js
//
// Simplified: does not differentiate between "local-only" numbers
// and "internationally dialable" numbers.
// For example, doesn't include changes like this:
// https://github.com/googlei18n/libphonenumber/commit/865da605da12b01053c4f053310bac7c5fbb7935








 // Used in phone number format template creation.
// Could be any digit, I guess.

var DUMMY_DIGIT = '9'; // I don't know why is it exactly `15`

var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15; // Create a phone number consisting only of the digit 9 that matches the
// `number_pattern` by applying the pattern to the "longest phone number" string.

var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH); // The digits that have not been entered yet will be represented by a \u2008,
// the punctuation space.

var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)

var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER); // A set of characters that, if found in a national prefix formatting rules, are an indicator to
// us that we should separate the national prefix from the number when formatting.

var NATIONAL_PREFIX_SEPARATORS_PATTERN = /[- ]/; // Deprecated: Google has removed some formatting pattern related code from their repo.
// https://github.com/googlei18n/libphonenumber/commit/a395b4fef3caf57c4bc5f082e1152a4d2bd0ba4c
// "We no longer have numbers in formatting matching patterns, only \d."
// Because this library supports generating custom metadata
// some users may still be using old metadata so the relevant
// code seems to stay until some next major version update.

var SUPPORT_LEGACY_FORMATTING_PATTERNS = true; // A pattern that is used to match character classes in regular expressions.
// An example of a character class is "[1-4]".

var CREATE_CHARACTER_CLASS_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function () {
  return /\[([^\[\]])*\]/g;
}; // Any digit in a regular expression that actually denotes a digit. For
// example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
// (8 and 0) are standalone digits, but the rest are not.
// Two look-aheads are needed because the number following \\d could be a
// two-digit number, since the phone number can be as long as 15 digits.


var CREATE_STANDALONE_DIGIT_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function () {
  return /\d(?=[^,}][^,}])/g;
}; // A pattern that is used to determine if a `format` is eligible
// to be used by the "as you type formatter".
// It is eligible when the `format` contains groups of the dollar sign
// followed by a single digit, separated by valid phone number punctuation.
// This prevents invalid punctuation (such as the star sign in Israeli star numbers)
// getting into the output of the "as you type formatter".


var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* VALID_PUNCTUATION */] + ']*' + '(\\$\\d[' + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* VALID_PUNCTUATION */] + ']*)+' + '$'); // This is the minimum length of the leading digits of a phone number
// to guarantee the first "leading digits pattern" for a phone number format
// to be preemptive.

var MIN_LEADING_DIGITS_LENGTH = 3;
var VALID_FORMATTED_PHONE_NUMBER_PART = '[' + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* VALID_PUNCTUATION */] + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* VALID_DIGITS */] + ']+';
var VALID_FORMATTED_PHONE_NUMBER_PART_PATTERN = new RegExp('^' + VALID_FORMATTED_PHONE_NUMBER_PART + '$', 'i');
var VALID_PHONE_NUMBER = '(?:' + '[' + __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* PLUS_CHARS */] + ']' + '[' + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* VALID_PUNCTUATION */] + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* VALID_DIGITS */] + ']*' + '|' + '[' + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* VALID_PUNCTUATION */] + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* VALID_DIGITS */] + ']+' + ')';
var AFTER_PHONE_NUMBER_DIGITS_END_PATTERN = new RegExp('[^' + __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* VALID_PUNCTUATION */] + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* VALID_DIGITS */] + ']+' + '.*' + '$');
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var AsYouType =
/*#__PURE__*/
function () {
  // Not setting `options` to a constructor argument
  // not to break backwards compatibility
  // for older versions of the library.

  /**
   * @param {(string|object)?} [optionsOrDefaultCountry] - The default country used for parsing non-international phone numbers. Can also be an `options` object.
   * @param {Object} metadata
   */
  function AsYouType(optionsOrDefaultCountry, metadata) {
    _classCallCheck(this, AsYouType);

    _defineProperty(this, "options", {});

    this.metadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata); // Set `defaultCountry` and `defaultCallingCode` options.

    var defaultCountry;
    var defaultCallingCode; // Turns out `null` also has type "object". Weird.

    if (optionsOrDefaultCountry) {
      if (_typeof(optionsOrDefaultCountry) === 'object') {
        defaultCountry = optionsOrDefaultCountry.defaultCountry;
        defaultCallingCode = optionsOrDefaultCountry.defaultCallingCode;
      } else {
        defaultCountry = optionsOrDefaultCountry;
      }
    }

    if (defaultCountry && this.metadata.hasCountry(defaultCountry)) {
      this.defaultCountry = defaultCountry;
    }

    if (defaultCallingCode) {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (this.metadata.isNonGeographicCallingCode(defaultCallingCode)) {
          this.defaultCountry = '001';
        }
      }

      this.defaultCallingCode = defaultCallingCode;
    } // Reset.


    this.reset();
  }

  _createClass(AsYouType, [{
    key: "reset",
    value: function reset() {
      this.formattedOutput = '';
      this.international = false;
      this.internationalPrefix = undefined;
      this.countryCallingCode = undefined;
      this.digits = '';
      this.nationalNumberDigits = '';
      this.nationalPrefix = '';
      this.carrierCode = '';
      this.setCountry(this.defaultCountry, this.defaultCallingCode);
      return this;
    }
  }, {
    key: "resetFormat",
    value: function resetFormat() {
      this.chosenFormat = undefined;
      this.template = undefined;
      this.populatedNationalNumberTemplate = undefined;
      this.populatedNationalNumberTemplatePosition = -1;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */

  }, {
    key: "isInternational",
    value: function isInternational() {
      return this.international;
    }
    /**
     * Returns the "country calling code" part of the phone number.
     * Returns `undefined` if the number is not being input in international format.
     * Returns "country calling code" for "non-geographic" phone numbering plans too.
     * @return {string} [countryCallingCode]
     */

  }, {
    key: "getCountryCallingCode",
    value: function getCountryCallingCode() {
      return this.countryCallingCode;
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */

  }, {
    key: "getCountry",
    value: function getCountry() {
      // If no digits have been input yet,
      // then `this.country` is the `defaultCountry`.
      // Won't return the `defaultCountry` in such case.
      if (!this.digits) {
        return;
      }

      var countryCode = this.country;
      /* istanbul ignore if */

      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (this.country === '001') {
          countryCode = undefined;
        }
      }

      return countryCode;
    }
  }, {
    key: "setCountry",
    value: function setCountry(country, callingCode) {
      this.country = country;
      this.metadata.selectNumberingPlan(country, callingCode);

      if (this.metadata.hasSelectedNumberingPlan()) {
        this.initializePhoneNumberFormatsForCountry();
      } else {
        this.matchingFormats = [];
      }

      this.resetFormat();
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */

  }, {
    key: "input",
    value: function input(text) {
      var formattedDigits = this.extractFormattedDigits(text); // If the extracted phone number part
      // can possibly be a part of some valid phone number
      // then parse phone number characters from a formatted phone number.

      if (VALID_FORMATTED_PHONE_NUMBER_PART_PATTERN.test(formattedDigits)) {
        this.formattedOutput = this.getFullNumber(this.inputDigits(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__parseDigits__["b" /* default */])(formattedDigits)) || this.getNonFormattedNationalNumber());
      }

      return this.formattedOutput;
    }
    /**
     * Extracts formatted phone number digits from text (if there're any).
     * @param  {string} text
     * @return {string}
     */

  }, {
    key: "extractFormattedDigits",
    value: function extractFormattedDigits(text) {
      // Extract a formatted phone number part from text.
      var extractedNumber = extractFormattedPhoneNumber(text) || ''; // Trim a `+`.

      if (extractedNumber[0] === '+') {
        // Trim the `+`.
        extractedNumber = extractedNumber.slice('+'.length);

        if (this.digits) {// If an out of position `+` is detected
          // (or a second `+`) then just ignore it.
        } else {
          this.formattedOutput = '+';
          this.startInternationalNumber();
        }
      }

      return extractedNumber;
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber() {
      // Prepend the `+` to parsed input.
      this.international = true; // If a default country was set then reset it
      // because an explicitly international phone
      // number is being entered.

      this.setCountry();
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */

  }, {
    key: "inputDigits",
    value: function inputDigits(nextDigits) {
      // Some users input their phone number in "out-of-country"
      // dialing format instead of using the leading `+`.
      // https://github.com/catamphetamine/libphonenumber-js/issues/185
      // Detect such numbers.
      if (!this.digits) {
        var numberWithoutIDD = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__IDD__["b" /* stripIDDPrefix */])(nextDigits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);

        if (numberWithoutIDD && numberWithoutIDD !== nextDigits) {
          // If an IDD prefix was stripped then
          // convert the number to international one
          // for subsequent parsing.
          this.internationalPrefix = nextDigits.slice(0, nextDigits.length - numberWithoutIDD.length);
          nextDigits = numberWithoutIDD;
          this.startInternationalNumber();
        }
      } // Append phone number digits.


      this.digits += nextDigits; // Try to format the parsed input

      if (this.isInternational()) {
        if (this.countryCallingCode) {
          this.nationalNumberDigits += nextDigits; // `this.country` could be `undefined`, for example, when there is
          // ambiguity in a form of several different countries,
          // each corresponding to the same country phone code
          // (e.g. NANPA: USA, Canada, etc), and there's not enough digits
          // to reliably determine the country the phone number belongs to.
          // Therefore, in cases of such ambiguity, each time something is input,
          // try to determine the country (if it hasn't been determined yet).

          if (!this.country || this.isCountryCallingCodeAmbiguous()) {
            this.determineTheCountry();
          }
        } else {
          // Extract country calling code from the digits entered so far.
          // There must be some digits in order to extract anything from them.
          //
          // If one looks at country phone codes
          // then they can notice that no one country phone code
          // is ever a (leftmost) substring of another country phone code.
          // So if a valid country code is extracted so far
          // then it means that this is the country code.
          //
          // If no country phone code could be extracted so far,
          // then don't format the phone number.
          //
          if (!this.extractCountryCallingCode()) {
            // Don't format the phone number.
            return;
          } // Possibly extract a national prefix.
          // Some people incorrectly input national prefix
          // in an international phone number.
          // For example, some people write British phone numbers as `+44(0)...`.
          // Also, mobile phone numbers in Mexico are supposed to be dialled
          // internationally using a `15` national prefix.
          //
          // https://www.mexperience.com/dialing-cell-phones-in-mexico/
          //
          // "Dialing a Mexican cell phone from abroad
          // When you are calling a cell phone number in Mexico from outside Mexico,
          // it’s necessary to dial an additional “1” after Mexico’s country code
          // (which is “52”) and before the area code.
          // You also ignore the 045, and simply dial the area code and the
          // cell phone’s number.
          //
          // If you don’t add the “1”, you’ll receive a recorded announcement
          // asking you to redial using it.
          //
          // For example, if you are calling from the USA to a cell phone
          // in Mexico City, you would dial +52 – 1 – 55 – 1234 5678.
          // (Note that this is different to calling a land line in Mexico City
          // from abroad, where the number dialed would be +52 – 55 – 1234 5678)".
          //


          this.nationalNumberDigits = this.digits.slice(this.countryCallingCode.length); // this.extractNationalPrefix()
          //
          // Determine the country from country calling code and national number.

          this.determineTheCountry();
        }
      } else {
        this.nationalNumberDigits += nextDigits; // If `defaultCallingCode` is set,
        // see if the `country` could be derived.

        if (!this.country) {
          this.determineTheCountry();
        } // Some national prefixes are substrings of other national prefixes
        // (for the same country), therefore try to extract national prefix each time
        // because a longer national prefix might be available at some point in time.


        var previousNationalPrefix = this.nationalPrefix;
        this.nationalNumberDigits = this.nationalPrefix + this.nationalNumberDigits; // Re-extract national prefix.

        this.extractNationalPrefix(); // If another national prefix has been extracted.

        if (this.nationalPrefix !== previousNationalPrefix) {
          // National number has changed
          // (due to another national prefix been extracted)
          // therefore national number has changed
          // therefore reset all previous formatting data.
          // (and leading digits matching state)
          this.initializePhoneNumberFormatsForCountry();
          this.resetFormat();
        }
      }

      if (this.nationalNumberDigits) {
        // Match the available formats by the currently available leading digits.
        this.matchFormats(this.nationalNumberDigits);
      } // Format the phone number (given the next digits)


      return this.formatNationalNumberWithNextDigits(nextDigits);
    }
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function formatNationalNumberWithNextDigits(nextDigits) {
      // See if the phone number digits can be formatted as a complete phone number.
      // If not, use the results from `formatNextNationalNumberDigits()`,
      // which formats based on the chosen formatting pattern.
      // Attempting to format complete phone number first is how it's done
      // in Google's `libphonenumber`.
      var formattedNumber = this.attemptToFormatCompletePhoneNumber(); // Just because a phone number doesn't have a suitable format
      // that doesn't mean that the phone number is invalid,
      // because phone number formats only format phone numbers,
      // they don't validate them and some (rare) phone numbers
      // are meant to stay non-formatted.

      if (formattedNumber) {
        return formattedNumber;
      } // Format the next phone number digits
      // using the previously chosen phone number format.
      //
      // This is done here because if `attemptToFormatCompletePhoneNumber`
      // was placed before this call then the `template`
      // wouldn't reflect the situation correctly (and would therefore be inconsistent)
      //


      var previouslyChosenFormat = this.chosenFormat; // Choose a format from the list of matching ones.

      var newlyChosenFormat = this.chooseFormat();

      if (newlyChosenFormat) {
        if (newlyChosenFormat === previouslyChosenFormat) {
          // If could format the next (current) digit
          // using the previously chosen phone number format
          // then return the formatted number so far.
          //
          // If no new phone number format could be chosen,
          // and couldn't format the supplied national number
          // using the previously chosen phone number pattern,
          // then return `undefined`.
          //
          return this.formatNextNationalNumberDigits(nextDigits);
        } else {
          // If a more appropriate phone number format
          // has been chosen for these "leading digits",
          // then format the national phone number (so far)
          // using the newly selected format.
          //
          // Will return `undefined` if it couldn't format
          // the supplied national number
          // using the selected phone number pattern.
          //
          return this.reformatNationalNumber();
        }
      }
    }
  }, {
    key: "chooseFormat",
    value: function chooseFormat() {
      // When there are multiple available formats, the formatter uses the first
      // format where a formatting template could be created.
      for (var _iterator = this.matchingFormats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var format = _ref;

        // If this format is currently being used
        // and is still possible, then stick to it.
        if (this.chosenFormat === format) {
          break;
        }

        if (!this.createFormattingTemplate(format)) {
          continue;
        }

        this.chosenFormat = format; // With a new formatting template, the matched position
        // using the old template needs to be reset.

        this.populatedNationalNumberTemplatePosition = -1;
        break;
      }

      if (!this.chosenFormat) {
        // No format matches the national phone number entered.
        this.resetFormat();
      }

      return this.chosenFormat;
    } // Formats each digit of the national phone number (so far)
    // using the selected format.

  }, {
    key: "reformatNationalNumber",
    value: function reformatNationalNumber() {
      return this.formatNextNationalNumberDigits(this.nationalPrefix + this.nationalNumberDigits);
    }
  }, {
    key: "initializePhoneNumberFormatsForCountry",
    value: function initializePhoneNumberFormatsForCountry() {
      // Get all "eligible" phone number formats for this country
      this.matchingFormats = this.metadata.formats().filter(function (format) {
        // Compared to `libphonenumber`'s code, the two "Discard a few formats
        // that we know are not relevant based on the presence of the national prefix"
        // checks have changed: the first one has been moved to `.matchFormats()`,
        // and the second one doesn't apply to this library because it doesn't deal with
        // "incomplete" phone numbers (for example, phone numbers, entered without "area code").
        return ELIGIBLE_FORMAT_PATTERN.test(format.internationalFormat());
      });
    }
  }, {
    key: "matchFormats",
    value: function matchFormats(leadingDigits) {
      var _this = this;

      // "leading digits" pattern list starts with a
      // "leading digits" pattern fitting a maximum of 3 leading digits.
      // So, after a user inputs 3 digits of a national (significant) phone number
      // this national (significant) number can already be formatted.
      // The next "leading digits" pattern is for 4 leading digits max,
      // and the "leading digits" pattern after it is for 5 leading digits max, etc.
      // This implementation is different from Google's
      // in that it searches for a fitting format
      // even if the user has entered less than
      // `MIN_LEADING_DIGITS_LENGTH` digits of a national number.
      // Because some leading digit patterns already match for a single first digit.
      var leadingDigitsPatternIndex = leadingDigits.length - MIN_LEADING_DIGITS_LENGTH;

      if (leadingDigitsPatternIndex < 0) {
        leadingDigitsPatternIndex = 0;
      }

      this.matchingFormats = this.matchingFormats.filter(function (format) {
        // If national prefix is mandatory for this phone number format
        // and the user didn't input the national prefix
        // then this phone number format isn't suitable.
        if (!_this.isInternational() && !_this.nationalPrefix && format.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) {
          return false;
        }

        var leadingDigitsPatternsCount = format.leadingDigitsPatterns().length; // If this format is not restricted to a certain
        // leading digits pattern then it fits.

        if (leadingDigitsPatternsCount === 0) {
          return true;
        } // Start excluding any non-matching formats only when the
        // national number entered so far is at least 3 digits long,
        // otherwise format matching would give false negatives.
        // For example, when the digits entered so far are `2`
        // and the leading digits pattern is `21` –
        // it's quite obvious in this case that the format could be the one
        // but due to the absence of further digits it would give false negative.


        if (leadingDigits.length < MIN_LEADING_DIGITS_LENGTH) {
          return true;
        } // If at least `MIN_LEADING_DIGITS_LENGTH` digits of a national number are available
        // then format matching starts narrowing down the list of possible formats
        // (only previously matched formats are considered for next digits).


        leadingDigitsPatternIndex = Math.min(leadingDigitsPatternIndex, leadingDigitsPatternsCount - 1);
        var leadingDigitsPattern = format.leadingDigitsPatterns()[leadingDigitsPatternIndex]; // Brackets are required for `^` to be applied to
        // all or-ed (`|`) parts, not just the first one.

        return new RegExp("^(".concat(leadingDigitsPattern, ")")).test(leadingDigits);
      }); // If there was a phone number format chosen
      // and it no longer holds given the new leading digits then reset it.
      // The test for this `if` condition is marked as:
      // "Reset a chosen format when it no longer holds given the new leading digits".
      // To construct a valid test case for this one can find a country
      // in `PhoneNumberMetadata.xml` yielding one format for 3 `<leadingDigits>`
      // and yielding another format for 4 `<leadingDigits>` (Australia in this case).

      if (this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1) {
        this.resetFormat();
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function getSeparatorAfterNationalPrefix(format) {
      if (this.metadata.countryCallingCode() === '1') {
        return ' ';
      }

      if (format && format.nationalPrefixFormattingRule() && NATIONAL_PREFIX_SEPARATORS_PATTERN.test(format.nationalPrefixFormattingRule())) {
        return ' ';
      }

      return '';
    } // This is in accordance to how Google's `libphonenumber` does it.
    // "Check to see if there is an exact pattern match for these digits.
    // If so, we should use this instead of any other formatting template
    // whose `leadingDigitsPattern` also matches the input."

  }, {
    key: "attemptToFormatCompletePhoneNumber",
    value: function attemptToFormatCompletePhoneNumber() {
      for (var _iterator2 = this.matchingFormats, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var format = _ref2;
        var matcher = new RegExp("^(?:".concat(format.pattern(), ")$"));

        if (!matcher.test(this.nationalNumberDigits)) {
          continue;
        } // Here, national number is formatted without "national prefix
        // formatting rule", because otherwise there'd be a bug
        // when "area code" is "duplicated" during input:
        // https://github.com/catamphetamine/libphonenumber-js/issues/318


        var formattedNationalNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__format___["b" /* formatNationalNumberUsingFormat */])(this.nationalNumberDigits, format, this.isInternational(), false, // Don't prepend national prefix (it will be prepended manually).
        this.metadata); // Check if this `format` preserves all digits.
        // This is how it's done in Google's `libphonenumber`.
        // Also, it fixes the bug when "area code" is "duplicated" during input:
        // https://github.com/catamphetamine/libphonenumber-js/issues/318
        //
        // "Check that we didn't remove nor add any extra digits when we matched
        // this formatting pattern. This usually happens after we entered the last
        // digit during AYTF. Eg: In case of MX, we swallow mobile token (1) when
        // formatted but AYTF should retain all the number entered and not change
        // in order to match a format (of same leading digits and length) display
        // in that way."
        // "If it's the same (i.e entered number and format is same), then it's
        // safe to return this in formatted number as nothing is lost / added."
        // Otherwise, don't use this format.
        // https://github.com/google/libphonenumber/commit/3e7c1f04f5e7200f87fb131e6f85c6e99d60f510#diff-9149457fa9f5d608a11bb975c6ef4bc5
        // https://github.com/google/libphonenumber/commit/3ac88c7106e7dcb553bcc794b15f19185928a1c6#diff-2dcb77e833422ee304da348b905cde0b
        //

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__parseDigits__["b" /* default */])(formattedNationalNumber) !== this.nationalNumberDigits) {
          continue;
        } // Prepend national prefix (if any).


        if (this.nationalPrefix) {
          // Here, national number is formatted with "national prefix
          // formatting rule". The reason is that "national prefix
          // formatting rule" often adds parentheses, and while Google's
          // `libphonenumber` dismisses those preferring simply prepending
          // national prefix followed by a " " character, this library
          // looks if the national prefix could be formatted better.
          var formattedNationalNumberWithNationalPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__format___["b" /* formatNationalNumberUsingFormat */])(this.nationalNumberDigits, format, this.isInternational(), true, // Prepend national prefix.
          this.metadata);

          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__parseDigits__["b" /* default */])(formattedNationalNumberWithNationalPrefix) === this.nationalPrefix + this.nationalNumberDigits) {
            formattedNationalNumber = formattedNationalNumberWithNationalPrefix;
          } else {
            formattedNationalNumber = this.nationalPrefix + this.getSeparatorAfterNationalPrefix(format) + formattedNationalNumber;
          }
        } // formats national number (probably) without national prefix.
        // Formatting a national number with national prefix could result in
        // bugs when "area code" is "duplicated" during input:
        // https://github.com/catamphetamine/libphonenumber-js/issues/318
        // The "are all digits preserved" check fixes that type of bug.
        // To leave the formatter in a consistent state


        this.resetFormat();
        this.chosenFormat = format; // Set `this.template` and `this.populatedNationalNumberTemplate`.

        /* istanbul ignore else */

        if (this.createFormattingTemplate(format)) {
          // Populate `this.populatedNationalNumberTemplate` with phone number digits.
          this.reformatNationalNumber();
        } else {
          // If the formatting template couldn't be created for a format,
          // create it manually from the formatted phone number.
          // This case doesn't ever happen with the current metadata.
          this.template = this.getFullNumber(formattedNationalNumber).replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
          this.populatedNationalNumberTemplate = formattedNationalNumber;
          this.populatedNationalNumberTemplatePosition = this.populatedNationalNumberTemplate.length - 1;
        }

        return formattedNationalNumber;
      }
    }
  }, {
    key: "getInternationalPrefix",
    value: function getInternationalPrefix(options) {
      return this.internationalPrefix ? options && options.spacing === false ? this.internationalPrefix : this.internationalPrefix + ' ' : '+';
    } // Prepends `+CountryCode ` in case of an international phone number

  }, {
    key: "getFullNumber",
    value: function getFullNumber(formattedNationalNumber) {
      if (this.isInternational()) {
        var prefix = this.getInternationalPrefix();

        if (!this.countryCallingCode) {
          return "".concat(prefix).concat(this.digits);
        }

        if (!formattedNationalNumber) {
          return "".concat(prefix).concat(this.countryCallingCode);
        }

        return "".concat(prefix).concat(this.countryCallingCode, " ").concat(formattedNationalNumber);
      }

      return formattedNationalNumber;
    }
  }, {
    key: "getNonFormattedNationalNumber",
    value: function getNonFormattedNationalNumber() {
      return this.nationalPrefix + (this.nationalPrefix && this.nationalNumberDigits && this.getSeparatorAfterNationalPrefix()) + this.nationalNumberDigits;
    } // Extracts the country calling code from the beginning
    // of the entered `national_number` (so far),
    // and places the remaining input into the `national_number`.

  }, {
    key: "extractCountryCallingCode",
    value: function extractCountryCallingCode() {
      var _extractCountryCallin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse___["a" /* extractCountryCallingCode */])('+' + this.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
          countryCallingCode = _extractCountryCallin.countryCallingCode,
          number = _extractCountryCallin.number;

      if (!countryCallingCode) {
        return;
      }

      this.nationalNumberDigits = number;
      this.countryCallingCode = countryCallingCode;
      this.metadata.chooseCountryByCountryCallingCode(countryCallingCode);
      this.initializePhoneNumberFormatsForCountry();
      this.resetFormat();
      return this.metadata.hasSelectedNumberingPlan();
    }
  }, {
    key: "extractNationalPrefix",
    value: function extractNationalPrefix() {
      this.nationalPrefix = '';

      if (!this.metadata.hasSelectedNumberingPlan()) {
        return;
      } // Only strip national prefixes for non-international phone numbers
      // because national prefixes can't be present in international phone numbers.
      // While `parseNumber()` is forgiving is such cases, `AsYouType` is not.


      var _stripNationalPrefixA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse___["b" /* stripNationalPrefixAndCarrierCode */])(this.nationalNumberDigits, this.metadata),
          nationalNumber = _stripNationalPrefixA.nationalNumber,
          carrierCode = _stripNationalPrefixA.carrierCode; // Sometimes `stripNationalPrefixAndCarrierCode()` won't actually
      // strip national prefix and will instead prepend some digits to the `number`:
      // for example, when number `2345678` is passed with `VI` country selected,
      // it will return `{ number: "3402345678" }`, because `340` area code is prepended.
      // So check if the `nationalNumber` is actually at the end of `this.nationalNumberDigits`.


      if (nationalNumber) {
        var index = this.nationalNumberDigits.indexOf(nationalNumber);

        if (index < 0 || index !== this.nationalNumberDigits.length - nationalNumber.length) {
          return;
        }
      }

      if (carrierCode) {
        this.carrierCode = carrierCode;
      }

      this.nationalPrefix = this.nationalNumberDigits.slice(0, this.nationalNumberDigits.length - nationalNumber.length);
      this.nationalNumberDigits = nationalNumber;
      return this.nationalPrefix;
    } // isPossibleNumber(number) {
    // 	switch (checkNumberLengthForType(number, undefined, this.metadata)) {
    // 		case 'IS_POSSIBLE':
    // 			return true
    // 		// case 'IS_POSSIBLE_LOCAL_ONLY':
    // 		// 	return !this.isInternational()
    // 		default:
    // 			return false
    // 	}
    // }

  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function isCountryCallingCodeAmbiguous() {
      var countryCodes = this.metadata.getCountryCodesForCallingCode(this.countryCallingCode);
      return countryCodes && countryCodes.length > 1;
    }
  }, {
    key: "createFormattingTemplate",
    value: function createFormattingTemplate(format) {
      // The formatter doesn't format numbers when numberPattern contains '|', e.g.
      // (20|3)\d{4}. In those cases we quickly return.
      // (Though there's no such format in current metadata)

      /* istanbul ignore if */
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS && format.pattern().indexOf('|') >= 0) {
        return;
      } // Get formatting template for this phone number format


      var template = this.getTemplateForNumberFormatPattern(format, this.nationalPrefix); // If the national number entered is too long
      // for any phone number format, then abort.

      if (!template) {
        return;
      }

      this.template = template;
      this.populatedNationalNumberTemplate = template; // For convenience, the public `.template` property
      // contains the whole international number
      // if the phone number being input is international:
      // 'x' for the '+' sign, 'x'es for the country phone code,
      // a spacebar and then the template for the formatted national number.

      if (this.isInternational()) {
        this.template = this.getInternationalPrefix().replace(/[\d\+]/g, DIGIT_PLACEHOLDER) + repeat(DIGIT_PLACEHOLDER, this.countryCallingCode.length) + ' ' + template;
      }

      return this.template;
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */

  }, {
    key: "getTemplateForNumberFormatPattern",
    value: function getTemplateForNumberFormatPattern(format, nationalPrefix) {
      var pattern = format.pattern();
      /* istanbul ignore else */

      if (SUPPORT_LEGACY_FORMATTING_PATTERNS) {
        pattern = pattern // Replace anything in the form of [..] with \d
        .replace(CREATE_CHARACTER_CLASS_PATTERN(), '\\d') // Replace any standalone digit (not the one in `{}`) with \d
        .replace(CREATE_STANDALONE_DIGIT_PATTERN(), '\\d');
      } // Generate a dummy national number (consisting of `9`s)
      // that fits this format's `pattern`.
      //
      // This match will always succeed,
      // because the "longest dummy phone number"
      // has enough length to accomodate any possible
      // national phone number format pattern.
      //


      var digits = LONGEST_DUMMY_PHONE_NUMBER.match(pattern)[0]; // If the national number entered is too long
      // for any phone number format, then abort.

      if (this.nationalNumberDigits.length > digits.length) {
        return;
      } // Get a formatting template which can be used to efficiently format
      // a partial number where digits are added one by one.
      // Below `strictPattern` is used for the
      // regular expression (with `^` and `$`).
      // This wasn't originally in Google's `libphonenumber`
      // and I guess they don't really need it
      // because they're not using "templates" to format phone numbers
      // but I added `strictPattern` after encountering
      // South Korean phone number formatting bug.
      //
      // Non-strict regular expression bug demonstration:
      //
      // this.nationalNumberDigits : `111111111` (9 digits)
      //
      // pattern : (\d{2})(\d{3,4})(\d{4})
      // format : `$1 $2 $3`
      // digits : `9999999999` (10 digits)
      //
      // '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
      //
      // template : xx xxxx xxxx
      //
      // But the correct template in this case is `xx xxx xxxx`.
      // The template was generated incorrectly because of the
      // `{3,4}` variability in the `pattern`.
      //
      // The fix is, if `this.nationalNumberDigits` has already sufficient length
      // to satisfy the `pattern` completely then `this.nationalNumberDigits`
      // is used instead of `digits`.


      var strictPattern = new RegExp('^' + pattern + '$');
      var nationalNumberDummyDigits = this.nationalNumberDigits.replace(/\d/g, DUMMY_DIGIT); // If `this.nationalNumberDigits` has already sufficient length
      // to satisfy the `pattern` completely then use it
      // instead of `digits`.

      if (strictPattern.test(nationalNumberDummyDigits)) {
        digits = nationalNumberDummyDigits;
      }

      var numberFormat = this.getFormatFormat(format);
      var includesNationalPrefix;

      if (nationalPrefix) {
        if (format.nationalPrefixFormattingRule()) {
          var numberFormatWithNationalPrefix = numberFormat.replace(__WEBPACK_IMPORTED_MODULE_5__format___["c" /* FIRST_GROUP_PATTERN */], format.nationalPrefixFormattingRule());

          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__parseDigits__["b" /* default */])(numberFormatWithNationalPrefix) === nationalPrefix + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__parseDigits__["b" /* default */])(numberFormat)) {
            numberFormat = numberFormatWithNationalPrefix;
            includesNationalPrefix = true;
            var i = nationalPrefix.length;

            while (i > 0) {
              numberFormat = numberFormat.replace(/\d/, DIGIT_PLACEHOLDER);
              i--;
            }
          }
        }
      } // Generate formatting template for this phone number format.


      var template = digits // Format the dummy phone number according to the format.
      .replace(new RegExp(pattern), numberFormat) // Replace each dummy digit with a DIGIT_PLACEHOLDER.
      .replace(new RegExp(DUMMY_DIGIT, 'g'), DIGIT_PLACEHOLDER);

      if (nationalPrefix) {
        if (!includesNationalPrefix) {
          // Prepend national prefix to the template manually.
          template = repeat(DIGIT_PLACEHOLDER, nationalPrefix.length) + this.getSeparatorAfterNationalPrefix(format) + template;
        }
      }

      return template;
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function formatNextNationalNumberDigits(digits) {
      // Using `.split('')` to iterate through a string here
      // to avoid requiring `Symbol.iterator` polyfill.
      // `.split('')` is generally not safe for Unicode,
      // but in this particular case for `digits` it is safe.
      // for (const digit of digits)
      for (var _iterator3 = digits.split(''), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var digit = _ref3;

        // If there is room for more digits in current `template`,
        // then set the next digit in the `template`,
        // and return the formatted digits so far.
        // If more digits are entered than the current format could handle.
        if (this.populatedNationalNumberTemplate.slice(this.populatedNationalNumberTemplatePosition + 1).search(DIGIT_PLACEHOLDER_MATCHER) < 0) {
          // Reset the format.
          this.resetFormat();
          return;
        }

        this.populatedNationalNumberTemplatePosition = this.populatedNationalNumberTemplate.search(DIGIT_PLACEHOLDER_MATCHER);
        this.populatedNationalNumberTemplate = this.populatedNationalNumberTemplate.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
      } // Return the formatted phone number so far.


      return cutAndStripNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1); // The old way which was good for `input-format` but is not so good
      // for `react-phone-number-input`'s default input (`InputBasic`).
      // return closeNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
      // 	.replace(new RegExp(DIGIT_PLACEHOLDER, 'g'), ' ')
    }
  }, {
    key: "getFormatFormat",
    value: function getFormatFormat(format) {
      if (this.isInternational()) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__format___["d" /* applyInternationalSeparatorStyle */])(format.internationalFormat());
      }

      return format.format();
    } // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.

  }, {
    key: "determineTheCountry",
    value: function determineTheCountry() {
      this.country = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse___["c" /* findCountryCode */])(this.isInternational() ? this.countryCallingCode : this.defaultCallingCode, this.nationalNumberDigits, this.metadata);
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */

  }, {
    key: "getNumber",
    value: function getNumber() {
      if (this.isInternational()) {
        if (!this.countryCallingCode) {
          return;
        }
      } else {
        if (!this.country && !this.defaultCallingCode) {
          return;
        }
      }

      if (!this.nationalNumberDigits) {
        return undefined;
      }

      var countryCode = this.getCountry();
      var callingCode = this.getCountryCallingCode() || this.defaultCallingCode;
      var nationalNumber = this.nationalNumberDigits;
      var carrierCode = this.carrierCode; // When an international number without a leading `+` has been autocorrected,
      // extract country calling code, because normally it's only extracted
      // for international numbers with a leading `+`.
      // Could also just use `parsePhoneNumberFromString()` here
      // instead of hacking around this single case.

      if (!this.isInternational() && this.nationalNumberDigits === this.digits) {
        var _extractCountryCallin2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse___["d" /* extractCountryCallingCodeFromInternationalNumberWithoutPlusSign */])(this.digits, countryCode, callingCode, this.metadata.metadata),
            countryCallingCode = _extractCountryCallin2.countryCallingCode,
            number = _extractCountryCallin2.number;

        if (countryCallingCode) {
          var _stripNationalPrefixA2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse___["e" /* stripNationalPrefixAndCarrierCodeFromCompleteNumber */])(number, this.metadata),
              shorterNationalNumber = _stripNationalPrefixA2.nationalNumber,
              newCarrierCode = _stripNationalPrefixA2.carrierCode;

          nationalNumber = shorterNationalNumber;
          carrierCode = newCarrierCode;
        }
      }

      var phoneNumber = new __WEBPACK_IMPORTED_MODULE_1__PhoneNumber__["a" /* default */](countryCode || callingCode, nationalNumber, this.metadata.metadata);

      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      } // Phone number extensions are not supported by "As You Type" formatter.


      return phoneNumber;
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */

  }, {
    key: "isPossible",
    value: function isPossible() {
      var phoneNumber = this.getNumber();

      if (!phoneNumber) {
        return false;
      }

      return phoneNumber.isPossible();
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    value: function isValid() {
      var phoneNumber = this.getNumber();

      if (!phoneNumber) {
        return false;
      }

      return phoneNumber.isValid();
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */

  }, {
    key: "getNationalNumber",
    value: function getNationalNumber() {
      return this.nationalNumberDigits;
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function getNonFormattedTemplate() {
      return this.getFullNumber(this.getNonFormattedNationalNumber()).replace(/[\+\d]/g, DIGIT_PLACEHOLDER);
    }
    /**
     * Returns formatted phone number template.
     * @return {string} [template]
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      if (!this.template) {
        return this.getNonFormattedTemplate();
      }

      var index = -1;
      var i = 0;

      while (i < (this.isInternational() ? this.getInternationalPrefix({
        spacing: false
      }).length : 0) + this.digits.length) {
        index = this.template.indexOf(DIGIT_PLACEHOLDER, index + 1);
        i++;
      }

      return cutAndStripNonPairedParens(this.template, index + 1);
    }
  }]);

  return AsYouType;
}();


function stripNonPairedParens(string) {
  var dangling_braces = [];
  var i = 0;

  while (i < string.length) {
    if (string[i] === '(') {
      dangling_braces.push(i);
    } else if (string[i] === ')') {
      dangling_braces.pop();
    }

    i++;
  }

  var start = 0;
  var cleared_string = '';
  dangling_braces.push(string.length);

  for (var _i4 = 0, _dangling_braces = dangling_braces; _i4 < _dangling_braces.length; _i4++) {
    var index = _dangling_braces[_i4];
    cleared_string += string.slice(start, index);
    start = index + 1;
  }

  return cleared_string;
}
function cutAndStripNonPairedParens(string, cutBeforeIndex) {
  if (string[cutBeforeIndex] === ')') {
    cutBeforeIndex++;
  }

  return stripNonPairedParens(string.slice(0, cutBeforeIndex));
}
function closeNonPairedParens(template, cut_before) {
  var retained_template = template.slice(0, cut_before);
  var opening_braces = countOccurences('(', retained_template);
  var closing_braces = countOccurences(')', retained_template);
  var dangling_braces = opening_braces - closing_braces;

  while (dangling_braces > 0 && cut_before < template.length) {
    if (template[cut_before] === ')') {
      dangling_braces--;
    }

    cut_before++;
  }

  return template.slice(0, cut_before);
} // Counts all occurences of a symbol in a string.
// Unicode-unsafe (because using `.split()`).

function countOccurences(symbol, string) {
  var count = 0; // Using `.split('')` to iterate through a string here
  // to avoid requiring `Symbol.iterator` polyfill.
  // `.split('')` is generally not safe for Unicode,
  // but in this particular case for counting brackets it is safe.
  // for (const character of string)

  for (var _iterator4 = string.split(''), _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
    var _ref4;

    if (_isArray4) {
      if (_i5 >= _iterator4.length) break;
      _ref4 = _iterator4[_i5++];
    } else {
      _i5 = _iterator4.next();
      if (_i5.done) break;
      _ref4 = _i5.value;
    }

    var character = _ref4;

    if (character === symbol) {
      count++;
    }
  }

  return count;
} // Repeats a string (or a symbol) N times.
// http://stackoverflow.com/questions/202605/repeat-string-javascript

function repeat(string, times) {
  if (times < 1) {
    return '';
  }

  var result = '';

  while (times > 1) {
    if (times & 1) {
      result += string;
    }

    times >>= 1;
    string += string;
  }

  return result + string;
}
/**
 * Extracts formatted phone number from text (if there's any).
 * @param  {string} text
 * @return {string} [formattedPhoneNumber]
 */

function extractFormattedPhoneNumber(text) {
  // Attempt to extract a possible number from the string passed in.
  var startsAt = text.search(VALID_PHONE_NUMBER);

  if (startsAt < 0) {
    return;
  } // Trim everything to the left of the phone number.


  text = text.slice(startsAt); // Trim the `+`.

  var hasPlus;

  if (text[0] === '+') {
    hasPlus = true;
    text = text.slice('+'.length);
  } // Trim everything to the right of the phone number.


  text = text.replace(AFTER_PHONE_NUMBER_DIGITS_END_PATTERN, ''); // Re-add the previously trimmed `+`.

  if (hasPlus) {
    text = '+' + text;
  }

  return text;
}
//# sourceMappingURL=AsYouType.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findNumbers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findNumbers___ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsePhoneNumber__ = __webpack_require__(490);


function findNumbers() {
  var _normalizeArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsePhoneNumber__["b" /* normalizeArguments */])(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__findNumbers___["a" /* default */])(text, options, metadata);
}
//# sourceMappingURL=findNumbers.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _pN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pNd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _pL; });
/* harmony export (immutable) */ __webpack_exports__["g"] = isLatinLetter;
/* harmony export (immutable) */ __webpack_exports__["f"] = isInvalidPunctuationSymbol;
// Javascript doesn't support UTF-8 regular expressions.
// So mimicking them here.
// Copy-pasted from `PhoneNumberMatcher.js`.

/**
 * "\p{Z}" is any kind of whitespace or invisible separator ("Separator").
 * http://www.regular-expressions.info/unicode.html
 * "\P{Z}" is the reverse of "\p{Z}".
 * "\p{N}" is any kind of numeric character in any script ("Number").
 * "\p{Nd}" is a digit zero through nine in any script except "ideographic scripts" ("Decimal_Digit_Number").
 * "\p{Sc}" is a currency symbol ("Currency_Symbol").
 * "\p{L}" is any kind of letter from any language ("Letter").
 * "\p{Mn}" is "non-spacing mark".
 *
 * Javascript doesn't support Unicode Regular Expressions
 * so substituting it with this explicit set of characters.
 *
 * https://stackoverflow.com/questions/13210194/javascript-regex-equivalent-of-a-za-z-using-pl
 * https://github.com/danielberndt/babel-plugin-utf-8-regex/blob/master/src/transformer.js
 */
var _pZ = " \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000";
var pZ = "[".concat(_pZ, "]");
var PZ = "[^".concat(_pZ, "]");
var _pN = "0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19"; // const pN = `[${_pN}]`

var _pNd = "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19";
var pNd = "[".concat(_pNd, "]");
var _pL = "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var pL = "[".concat(_pL, "]");
var pL_regexp = new RegExp(pL);
var _pSc = "$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20B9\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6";
var pSc = "[".concat(_pSc, "]");
var pSc_regexp = new RegExp(pSc);
var _pMn = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u08FE\u0900-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1DC0-\u1DE6\u1DFC-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26";
var pMn = "[".concat(_pMn, "]");
var pMn_regexp = new RegExp(pMn);
var _InBasic_Latin = "\0-\x7F";
var _InLatin_1_Supplement = "\x80-\xFF";
var _InLatin_Extended_A = "\u0100-\u017F";
var _InLatin_Extended_Additional = "\u1E00-\u1EFF";
var _InLatin_Extended_B = "\u0180-\u024F";
var _InCombining_Diacritical_Marks = "\u0300-\u036F";
var latinLetterRegexp = new RegExp('[' + _InBasic_Latin + _InLatin_1_Supplement + _InLatin_Extended_A + _InLatin_Extended_Additional + _InLatin_Extended_B + _InCombining_Diacritical_Marks + ']');
/**
 * Helper method to determine if a character is a Latin-script letter or not.
 * For our purposes, combining marks should also return true since we assume
 * they have been added to a preceding Latin character.
 */

function isLatinLetter(letter) {
  // Combining marks are a subset of non-spacing-mark.
  if (!pL_regexp.test(letter) && !pMn_regexp.test(letter)) {
    return false;
  }

  return latinLetterRegexp.test(letter);
}
function isInvalidPunctuationSymbol(character) {
  return character === '%' || pSc_regexp.test(character);
}
//# sourceMappingURL=utf-8.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findPhoneNumbersInText;
/* harmony export (immutable) */ __webpack_exports__["b"] = getArguments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findNumbers__ = __webpack_require__(628);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function findPhoneNumbersInText(text, defaultCountry, options, metadata) {
  var args = getArguments(defaultCountry, options, metadata);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__findNumbers__["a" /* default */])(text, args.options, args.metadata);
}
function getArguments(defaultCountry, options, metadata) {
  if (metadata) {
    if (defaultCountry) {
      options = _objectSpread({}, options, {
        defaultCountry: defaultCountry
      });
    }
  } else {
    if (options) {
      metadata = options;

      if (defaultCountry) {
        if (is_object(defaultCountry)) {
          options = defaultCountry;
        } else {
          options = {
            defaultCountry: defaultCountry
          };
        }
      } else {
        options = undefined;
      }
    } else {
      metadata = defaultCountry;
      options = undefined;
    }
  }

  return {
    options: _objectSpread({}, options, {
      v2: true
    }),
    metadata: metadata
  };
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var is_object = function is_object(_) {
  return _typeof(_) === 'object';
};
//# sourceMappingURL=findPhoneNumbersInText.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatNumber;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FIRST_GROUP_PATTERN; });
/* harmony export (immutable) */ __webpack_exports__["b"] = formatNationalNumberUsingFormat;
/* harmony export (immutable) */ __webpack_exports__["d"] = applyInternationalSeparatorStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IDD__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RFC3966__ = __webpack_require__(562);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js





var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  } // Formats a phone number
  //
  // Example use cases:
  //
  // ```js
  // formatNumber('8005553535', 'RU', 'INTERNATIONAL')
  // formatNumber('8005553535', 'RU', 'INTERNATIONAL', metadata)
  // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL')
  // formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL', metadata)
  // formatNumber('+78005553535', 'NATIONAL')
  // formatNumber('+78005553535', 'NATIONAL', metadata)
  // ```
  //

};
function formatNumber(input, format, options, metadata) {
  // Apply default options.
  if (options) {
    options = _objectSpread({}, DEFAULT_OPTIONS, options);
  } else {
    options = DEFAULT_OPTIONS;
  }

  metadata = new __WEBPACK_IMPORTED_MODULE_2__metadata__["d" /* default */](metadata);

  if (input.country && input.country !== '001') {
    // Validate `input.country`.
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }

    metadata.country(input.country);
  } else if (input.countryCallingCode) {
    metadata.chooseCountryByCountryCallingCode(input.countryCallingCode);
  } else return input.phone || '';

  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // This variable should have been declared inside `case`s
  // but Babel has a bug and it says "duplicate variable declaration".

  var number;

  switch (format) {
    case 'NATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return '';
      }

      number = formatNationalNumber(nationalNumber, 'NATIONAL', metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'INTERNATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }

      number = formatNationalNumber(nationalNumber, 'INTERNATIONAL', metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'E.164':
      // `E.164` doesn't define "phone number extensions".
      return "+".concat(countryCallingCode).concat(nationalNumber);

    case 'RFC3966':
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__RFC3966__["a" /* formatRFC3966 */])({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });

    case 'IDD':
      if (!options.fromCountry) {
        return; // throw new Error('`fromCountry` option not passed for IDD-prefixed formatting.')
      }

      var IDDPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__IDD__["a" /* getIDDPrefix */])(options.fromCountry, undefined, metadata.metadata);

      if (!IDDPrefix) {
        return;
      }

      if (options.humanReadable) {
        var formattedForSameCountryCallingCode = countryCallingCode && formatIDDSameCountryCallingCodeNumber(nationalNumber, metadata.countryCallingCode(), options.fromCountry, metadata, options);

        if (formattedForSameCountryCallingCode) {
          number = formattedForSameCountryCallingCode;
        } else {
          number = "".concat(IDDPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, 'INTERNATIONAL', metadata, options));
        }

        return addExtension(number, input.ext, metadata, options.formatExtension);
      }

      return "".concat(IDDPrefix).concat(countryCallingCode).concat(nationalNumber);

    default:
      throw new Error("Unknown \"format\" argument passed to \"formatNumber()\": \"".concat(format, "\""));
  }
} // This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.

var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, useInternationalSeparator, useNationalPrefixFormattingRule, metadata) {
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalSeparator ? format.internationalFormat() : useNationalPrefixFormattingRule && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format());

  if (useInternationalSeparator) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }

  return formattedNumber;
}

function formatNationalNumber(number, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);

  if (!format) {
    return number;
  }

  return formatNationalNumberUsingFormat(number, format, formatAs === 'INTERNATIONAL', format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options.nationalPrefix === false ? false : true, metadata);
}

function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = availableFormats, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var format = _ref;

    // Validate leading digits
    if (format.leadingDigitsPatterns().length > 0) {
      // The last leading_digits_pattern is used here, as it is the most detailed
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1]; // If leading digits don't match then move on to the next phone number format

      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    } // Check that the national number matches the phone number format regular expression


    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* matchesEntirely */])(nationalNnumber, format.pattern())) {
      return format;
    }
  }
} // Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
// For some reason Google's metadata contains `<intlFormat/>`s with brackets and dashes.
// Meanwhile, there's no single opinion about using punctuation in international phone numbers.
//
// For example, Google's `<intlFormat/>` for USA is `+1 213-373-4253`.
// And here's a quote from WikiPedia's "North American Numbering Plan" page:
// https://en.wikipedia.org/wiki/North_American_Numbering_Plan
//
// "The country calling code for all countries participating in the NANP is 1.
// In international format, an NANP number should be listed as +1 301 555 01 00,
// where 301 is an area code (Maryland)."
//
// I personally prefer the international format without any punctuation.
// For example, brackets are remnants of the old age, meaning that the
// phone number part in brackets (so called "area code") can be omitted
// if dialing within the same "area".
// And hyphens were clearly introduced for splitting local numbers into memorizable groups.
// For example, remembering "5553535" is difficult but "555-35-35" is much simpler.
// Imagine a man taking a bus from home to work and seeing an ad with a phone number.
// He has a couple of seconds to memorize that number until it passes by.
// If it were spaces instead of hyphens the man wouldn't necessarily get it,
// but with hyphens instead of spaces the grouping is more explicit.
// I personally think that hyphens introduce visual clutter,
// so I prefer replacing them with spaces in international numbers.
// In the modern age all output is done on displays where spaces are clearly distinguishable
// so hyphens can be safely replaced with spaces without losing any legibility.
//


function applyInternationalSeparatorStyle(local) {
  return local.replace(new RegExp("[".concat(__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* VALID_PUNCTUATION */], "]+"), 'g'), ' ').trim();
}

function addExtension(formattedNumber, ext, metadata, formatExtension) {
  return ext ? formatExtension(formattedNumber, ext, metadata) : formattedNumber;
}

function formatIDDSameCountryCallingCodeNumber(number, toCountryCallingCode, fromCountry, toCountryMetadata, options) {
  var fromCountryMetadata = new __WEBPACK_IMPORTED_MODULE_2__metadata__["d" /* default */](toCountryMetadata.metadata);
  fromCountryMetadata.country(fromCountry); // If calling within the same country calling code.

  if (toCountryCallingCode === fromCountryMetadata.countryCallingCode()) {
    // For NANPA regions, return the national format for these regions
    // but prefix it with the country calling code.
    if (toCountryCallingCode === '1') {
      return toCountryCallingCode + ' ' + formatNationalNumber(number, 'NATIONAL', toCountryMetadata, options);
    } // If regions share a country calling code, the country calling code need
    // not be dialled. This also applies when dialling within a region, so this
    // if clause covers both these cases. Technically this is the case for
    // dialling from La Reunion to other overseas departments of France (French
    // Guiana, Martinique, Guadeloupe), but not vice versa - so we don't cover
    // this edge case for now and for those cases return the version including
    // country calling code. Details here:
    // http://www.petitfute.com/voyage/225-info-pratiques-reunion
    //


    return formatNationalNumber(number, 'NATIONAL', toCountryMetadata, options);
  }
}
//# sourceMappingURL=format_.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPossiblePhoneNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = isPossibleNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNumberType___ = __webpack_require__(456);


function isPossiblePhoneNumber(input, options, metadata) {
  /* istanbul ignore if */
  if (options === undefined) {
    options = {};
  }

  metadata = new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata);

  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error('Invalid phone number object passed');
    }

    metadata.chooseCountryByCountryCallingCode(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }

    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }

      metadata.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error('Invalid phone number object passed');
      }

      metadata.chooseCountryByCountryCallingCode(input.countryCallingCode);
    }
  }

  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, undefined, metadata);
  } else {
    // There was a bug between `1.7.35` and `1.7.37` where "possible_lengths"
    // were missing for "non-geographical" numbering plans.
    // Just assume the number is possible in such cases:
    // it's unlikely that anyone generated their custom metadata
    // in that short period of time (one day).
    // This code can be removed in some future major version update.
    if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
      // "Non-geographic entities" did't have `possibleLengths`
      // due to a bug in metadata generation process.
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, isInternational, metadata) {
  switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getNumberType___["b" /* checkNumberLengthForType */])(nationalNumber, undefined, metadata)) {
    case 'IS_POSSIBLE':
      return true;
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational

    default:
      return false;
  }
}
//# sourceMappingURL=isPossibleNumber_.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isViablePhoneNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extension__ = __webpack_require__(563);

 //  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  "Note VALID_PUNCTUATION starts with a -,
//   so must be the first in the range" (c) Google devs.
//  (wtf did they mean by saying that; probably nothing)
//

var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']{' + __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* MIN_LENGTH_FOR_NSN */] + '}'; //
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//

var VALID_PHONE_NUMBER = '[' + __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* PLUS_CHARS */] + ']{0,1}' + '(?:' + '[' + __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* VALID_PUNCTUATION */] + ']*' + '[' + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']' + '){3,}' + '[' + __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* VALID_PUNCTUATION */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* VALID_DIGITS */] + ']*'; // The combined regular expression for valid phone numbers:
//

var VALID_PHONE_NUMBER_PATTERN = new RegExp( // Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' + // Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER + // Phone number extensions
'(?:' + __WEBPACK_IMPORTED_MODULE_1__extension__["a" /* EXTN_PATTERNS_FOR_PARSING */] + ')?' + '$', 'i'); // Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//

function isViablePhoneNumber(number) {
  return number.length >= __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* MIN_LENGTH_FOR_NSN */] && VALID_PHONE_NUMBER_PATTERN.test(number);
}
//# sourceMappingURL=isViablePhoneNumber.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseIncompletePhoneNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = parsePhoneNumberCharacter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseDigits__ = __webpack_require__(489);

/**
 * Parses phone number characters from a string.
 * Drops all punctuation leaving only digits and the leading `+` sign (if any).
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * // Outputs '8800555'.
 * parseIncompletePhoneNumber('8 (800) 555')
 * // Outputs '+7800555'.
 * parseIncompletePhoneNumber('+7 800 555')
 * ```
 */

function parseIncompletePhoneNumber(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var character = _ref;
    result += parsePhoneNumberCharacter(character, result) || '';
  }

  return result;
}
/**
 * `input-format` `parse()` function.
 * https://gitlab.com/catamphetamine/input-format
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string} value - The value parsed so far.
 * @param  {object} meta - Optional custom use-case-specific metadata.
 * @return {string?} The parsed character.
 */

function parsePhoneNumberCharacter(character, value) {
  // Only allow a leading `+`.
  if (character === '+') {
    // If this `+` is not the first parsed character
    // then discard it.
    if (value) {
      return;
    }

    return '+';
  } // Allow digits.


  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseDigits__["a" /* parseDigit */])(character);
}
//# sourceMappingURL=parseIncompletePhoneNumber.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parsePhoneNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse___ = __webpack_require__(564);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function parsePhoneNumber(text, options, metadata) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse___["f" /* default */])(text, _objectSpread({}, options, {
    v2: true
  }), metadata);
}
//# sourceMappingURL=parsePhoneNumber_.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = searchNumbers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhoneNumberMatcher__ = __webpack_require__(561);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * @return ES6 `for ... of` iterator.
 */

function searchNumbers() {
  var _normalizeArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber__["b" /* normalizeArguments */])(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  var matcher = new __WEBPACK_IMPORTED_MODULE_1__PhoneNumberMatcher__["a" /* default */](text, options, metadata);
  return _defineProperty({}, Symbol.iterator, function () {
    return {
      next: function next() {
        if (matcher.hasNext()) {
          return {
            done: false,
            value: matcher.next()
          };
        }

        return {
          done: true
        };
      }
    };
  });
}
//# sourceMappingURL=searchNumbers.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_PhoneInputNativeDefaultMetadata__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_PhoneInputNativeDefaultMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modules_PhoneInputNativeDefaultMetadata__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modules_PhoneInputNativeDefaultMetadata___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_libphonenumber_RFC3966__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_libphonenumber_RFC3966___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modules_libphonenumber_RFC3966__);
/* unused harmony reexport parseRFC3966 */
/* unused harmony reexport formatRFC3966 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_libphonenumber_parsePhoneNumberDefaultMetadata__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_libphonenumber_parsePhoneNumberDefaultMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_libphonenumber_parsePhoneNumberDefaultMetadata__);
/* unused harmony reexport parsePhoneNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_libphonenumber_formatPhoneNumberDefaultMetadata__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_libphonenumber_formatPhoneNumberDefaultMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_libphonenumber_formatPhoneNumberDefaultMetadata__);
/* unused harmony reexport formatPhoneNumber */
/* unused harmony reexport formatPhoneNumberIntl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_libphonenumber_isValidPhoneNumberDefaultMetadata__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_libphonenumber_isValidPhoneNumberDefaultMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__modules_libphonenumber_isValidPhoneNumberDefaultMetadata__);
/* unused harmony reexport isValidPhoneNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_libphonenumber_isPossiblePhoneNumberDefaultMetadata__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_libphonenumber_isPossiblePhoneNumberDefaultMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__modules_libphonenumber_isPossiblePhoneNumberDefaultMetadata__);
/* unused harmony reexport isPossiblePhoneNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_libphonenumber_getCountriesDefaultMetadata__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_libphonenumber_getCountriesDefaultMetadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__modules_libphonenumber_getCountriesDefaultMetadata__);
/* unused harmony reexport getCountries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_PhoneInput__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_PhoneInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__modules_PhoneInput__);
/* unused harmony reexport PhoneInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_libphonenumber_js_min__ = __webpack_require__(744);
/* unused harmony reexport getCountryCallingCode */








// Deprecated export.
// Use `import PhoneInput from 'react-phone-number-input/core'` instead.

// Just a re-export of `getCountryCallingCode()` because people keep asking for it.
// https://github.com/catamphetamine/react-phone-number-input/issues/284



/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(403);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = __webpack_require__(661);

var _core = __webpack_require__(418);

var _InputSmart = __webpack_require__(764);

var _InputSmart2 = _interopRequireDefault(_InputSmart);

var _InputBasic = __webpack_require__(763);

var _InputBasic2 = _interopRequireDefault(_InputBasic);

var _Flag = __webpack_require__(762);

var _Flag2 = _interopRequireDefault(_Flag);

var _PropTypes = __webpack_require__(646);

var _inputControl = __webpack_require__(769);

var _countries2 = __webpack_require__(647);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// `PureComponent` is only available in React >= 15.3.0.
var PureComponent = _react2.default.PureComponent || _react2.default.Component;

var PhoneNumberInput = (0, _reactLifecyclesCompat.polyfill)(_class = (_temp = _class2 = function (_PureComponent) {
	_inherits(PhoneNumberInput, _PureComponent);

	function PhoneNumberInput(props) {
		_classCallCheck(this, PhoneNumberInput);

		var _this = _possibleConstructorReturn(this, (PhoneNumberInput.__proto__ || Object.getPrototypeOf(PhoneNumberInput)).call(this, props));

		_initialiseProps.call(_this);

		var _this$props = _this.props,
		    value = _this$props.value,
		    labels = _this$props.labels,
		    international = _this$props.international,
		    metadata = _this$props.metadata;
		var _this$props2 = _this.props,
		    country = _this$props2.country,
		    countries = _this$props2.countries,
		    countryOptions = _this$props2.countryOptions;

		// Validate `country`.

		if (country) {
			if (!_this.isCountrySupportedWithError(country)) {
				country = undefined;
			}
		}

		// Validate `countries`.
		countries = filterCountries(countries, metadata);

		// Validate `countryOptions`.
		countryOptions = filterCountryOptions(countryOptions, metadata);

		var phoneNumber = (0, _inputControl.parsePhoneNumber)(value, metadata);

		var pre_selected_country = (0, _inputControl.getPreSelectedCountry)(phoneNumber, country, countries || (0, _countries2.getCountryCodes)(labels).filter(function (_) {
			return _ === 'ZZ' || metadata.countries[_];
		}), international, metadata);

		_this.state = {
			// Workaround for `this.props` inside `getDerivedStateFromProps()`.
			props: _this.props,

			// The country selected.
			country: pre_selected_country,

			// `countries` are stored in `this.state` because they're filtered.
			// For example, a developer might theoretically pass some unsupported
			// countries as part of the `countries` property, and because of that
			// the component uses `this.state.countries` (which are filtered)
			// instead of `this.props.countries`
			// (which could potentially contain unsupported countries).
			countries: countries,

			// Generate country `<select/>` options.
			country_select_options: generateCountrySelectOptions(countries, countryOptions, _this.props),

			// `parsed_input` state property holds non-formatted user's input.
			// The reason is that there's no way of finding out
			// in which form should `value` be displayed: international or national.
			// E.g. if `value` is `+78005553535` then it could be input
			// by a user both as `8 (800) 555-35-35` and `+7 800 555 35 35`.
			// Hence storing just `value`is not sufficient for correct formatting.
			// E.g. if a user entered `8 (800) 555-35-35`
			// then value is `+78005553535` and `parsed_input` is `88005553535`
			// and if a user entered `+7 800 555 35 35`
			// then value is `+78005553535` and `parsed_input` is `+78005553535`.
			parsed_input: generateParsedInput(value, phoneNumber, _this.props),

			// `value` property is duplicated in state.
			// The reason is that `getDerivedStateFromProps()`
			// needs this `value` to compare to the new `value` property
			// to find out if `parsed_input` needs updating:
			// If the `value` property was changed externally
			// then it won't be equal to `state.value`
			// in which case `parsed_input` and `country` should be updated.
			value: value
		};
		return _this;
	}

	_createClass(PhoneNumberInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var onCountryChange = this.props.onCountryChange;
			var country = this.props.country;
			var selectedCountry = this.state.country;


			if (onCountryChange) {
				if (!country || !this.isCountrySupportedWithError(country)) {
					country = undefined;
				}
				if (selectedCountry !== country) {
					onCountryChange(selectedCountry);
				}
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			var _props = this.props,
			    onCountryChange = _props.onCountryChange,
			    onChange = _props.onChange,
			    reset = _props.reset;
			// Call `onCountryChange` when user selects another country.

			if (onCountryChange && this.state.country !== prevState.country) {
				onCountryChange(this.state.country);
			}
			// Some users requested a way to reset the component
			// (both number `<input/>` and country `<select/>`).
			// Whenever `reset` property changes both number `<input/>`
			// and country `<select/>` are reset.
			// It's not implemented as some instance `.reset()` method
			// because `ref` will likely be forwarded to `<input/>`
			// in some next major version.
			// https://github.com/catamphetamine/react-phone-number-input/issues/300
			if (reset !== prevProps.reset) {
				onChange();
				if (onCountryChange) {
					onCountryChange(this.state.country);
				}
			}
		}

		// A shorthand for not passing `metadata` as a second argument.


		// Country `<select/>` `onChange` handler.


		// Phone number `<input/>` `onKeyDown` handler.


		/**
   * `<input/>` `onChange()` handler.
   * Updates `value` property accordingly (so that they are kept in sync).
   * @param {string?} input — Either a parsed phone number or an empty string. Examples: `""`, `"+"`, `"+123"`, `"123"`.
   */


		// Toggles the `--focus` CSS class.


		// Toggles the `--focus` CSS class.


		// This `onBlur` interceptor is a workaround for `redux-form`
		// so that it gets the up-to-date `value` in its `onBlur` handler.
		// Without this fix it just gets the actual (raw) input field textual value.
		// E.g. `+7 800 555 35 35` instead of `+78005553535`.
		//
		// A developer is not supposed to pass this `onBlur` property manually.
		// Instead, `redux-form` passes `onBlur` to this component automatically
		// and this component patches that `onBlur` handler (a hacky way but works).
		//


		// When country `<select/>` is toggled.


		// Can be called externally.

	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    name = _props2.name,
			    disabled = _props2.disabled,
			    disablePhoneInput = _props2.disablePhoneInput,
			    autoComplete = _props2.autoComplete,
			    countrySelectTabIndex = _props2.countrySelectTabIndex,
			    showCountrySelect = _props2.showCountrySelect,
			    style = _props2.style,
			    className = _props2.className,
			    inputClassName = _props2.inputClassName,
			    getInputClassName = _props2.getInputClassName,
			    countrySelectAriaLabel = _props2.countrySelectAriaLabel,
			    countrySelectProperties = _props2.countrySelectProperties,
			    error = _props2.error,
			    indicateInvalid = _props2.indicateInvalid,
			    CountrySelectComponent = _props2.countrySelectComponent,
			    countrySelectProps = _props2.countrySelectProps,
			    inputStyleReset = _props2.inputStyleReset,
			    _InputComponent = _props2.inputComponent,
			    inputComponent = _props2.numberInputComponent,
			    numberInputProps = _props2.numberInputProps,
			    smartCaret = _props2.smartCaret,
			    ext = _props2.ext,
			    _ = _props2.country,
			    countries = _props2.countries,
			    countryOptions = _props2.countryOptions,
			    labels = _props2.labels,
			    flags = _props2.flags,
			    flagComponent = _props2.flagComponent,
			    flagsPath = _props2.flagsPath,
			    international = _props2.international,
			    internationalIcon = _props2.internationalIcon,
			    displayInitialValueAsLocalNumber = _props2.displayInitialValueAsLocalNumber,
			    onCountryChange = _props2.onCountryChange,
			    limitMaxLength = _props2.limitMaxLength,
			    metadata = _props2.metadata,
			    reset = _props2.reset,
			    phoneNumberInputProps = _objectWithoutProperties(_props2, ['name', 'disabled', 'disablePhoneInput', 'autoComplete', 'countrySelectTabIndex', 'showCountrySelect', 'style', 'className', 'inputClassName', 'getInputClassName', 'countrySelectAriaLabel', 'countrySelectProperties', 'error', 'indicateInvalid', 'countrySelectComponent', 'countrySelectProps', 'inputStyleReset', 'inputComponent', 'numberInputComponent', 'numberInputProps', 'smartCaret', 'ext', 'country', 'countries', 'countryOptions', 'labels', 'flags', 'flagComponent', 'flagsPath', 'international', 'internationalIcon', 'displayInitialValueAsLocalNumber', 'onCountryChange', 'limitMaxLength', 'metadata', 'reset']);

			var _state = this.state,
			    country = _state.country,
			    hidePhoneInputField = _state.hidePhoneInputField,
			    country_select_options = _state.country_select_options,
			    parsed_input = _state.parsed_input,
			    isFocused = _state.isFocused;


			var InputComponent = _InputComponent || (smartCaret ? _InputSmart2.default : _InputBasic2.default);

			// Extract `countrySelectProperties` from `this.props`
			// also removing them from `phoneNumberInputProps`.
			var _countrySelectProps = {};
			if (countrySelectProperties) {
				for (var key in countrySelectProperties) {
					if (this.props.hasOwnProperty(key)) {
						_countrySelectProps[countrySelectProperties[key]] = this.props[key];
						delete phoneNumberInputProps[key];
					}
				}
			}

			// Could use something like `aria-label={labels.phone}` on the `<InputComponent/>`,
			// however, some users may have already been using this component with one of:
			// * `<label/>` container
			// * `aria-labelledby`
			// * `id` and `<label for/>`
			// https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships
			// Maybe in some future major version update.

			return _react2.default.createElement(
				'div',
				{
					style: style,
					className: (0, _classnames2.default)('react-phone-number-input', {
						'react-phone-number-input--focus': isFocused,
						'react-phone-number-input--invalid': error && indicateInvalid
					}, className) },
				_react2.default.createElement(
					'div',
					{ className: 'react-phone-number-input__row' },
					showCountrySelect && _react2.default.createElement(CountrySelectComponent, _extends({}, _countrySelectProps, {
						ref: this.storeCountrySelectInstance,
						name: name ? name + '__country' : undefined,
						'aria-label': countrySelectAriaLabel || labels.country,
						tabIndex: countrySelectTabIndex
					}, countrySelectProps, {
						value: country,
						options: country_select_options,
						onChange: this.onCountryChange,
						onFocus: this._onFocus,
						onBlur: this._onBlur,
						disabled: disabled,
						hidePhoneInputField: this.hidePhoneInputField,
						focusPhoneInputField: this.focus,
						className: 'react-phone-number-input__country' })),
					!hidePhoneInputField && _react2.default.createElement(InputComponent, _extends({
						type: 'tel',
						autoComplete: autoComplete
					}, numberInputProps, phoneNumberInputProps, {
						ref: this.storePhoneNumberInputInstance,
						name: name,
						metadata: metadata,
						country: country,
						value: parsed_input || '',
						onChange: this.onChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onPhoneNumberKeyDown,
						disabled: disabled || disablePhoneInput,
						inputComponent: inputComponent,
						className: (0, _classnames2.default)('react-phone-number-input__input', 'react-phone-number-input__phone', {
							'react-phone-number-input__input--style': !inputStyleReset,
							'react-phone-number-input__input--disabled': disabled || disablePhoneInput,
							'react-phone-number-input__input--style--disabled': (disabled || disablePhoneInput) && !inputStyleReset,
							'react-phone-number-input__input--invalid': error && indicateInvalid,
							'react-phone-number-input__input--style--invalid': error && indicateInvalid && !inputStyleReset
						}, inputClassName, getInputClassName && getInputClassName({
							disabled: disabled || disablePhoneInput,
							invalid: error && indicateInvalid
						})) })),
					ext && !hidePhoneInputField && _react2.default.createElement(
						'label',
						{ className: 'react-phone-number-input__ext' },
						labels.ext,
						_react2.default.cloneElement(ext, {
							onChange: ext.props.onChange ? function (event) {
								return ext.props.onChange(parseExtDigits(event));
							} : undefined,
							onFocus: this._onFocus,
							onBlur: this._onBlur,
							className: (0, _classnames2.default)('react-phone-number-input__input', 'react-phone-number-input__ext-input', {
								'react-phone-number-input__input--disabled': disabled || disablePhoneInput
							}, inputClassName, getInputClassName && getInputClassName({
								disabled: disabled || disablePhoneInput
							}), ext.props.className)
						})
					)
				),
				error && indicateInvalid && _react2.default.createElement(
					'div',
					{ className: 'react-phone-number-input__error' },
					error
				)
			);
		}
	}], [{
		key: 'getDerivedStateFromProps',


		// `state` holds previous props as `props`, and also:
		// * `country` — The currently selected country, e.g. `"RU"`.
		// * `value` — The currently entered phone number (E.164), e.g. `+78005553535`.
		// * `parsed_input` — The parsed `<input/>` value, e.g. `8005553535`.
		// (and a couple of other less significant properties)
		value: function getDerivedStateFromProps(props, state) {
			var country = state.country,
			    hasUserSelectedACountry = state.hasUserSelectedACountry,
			    value = state.value,
			    _state$props = state.props,
			    old_default_country = _state$props.country,
			    old_value = _state$props.value,
			    old_reset = _state$props.reset;
			var metadata = props.metadata,
			    countries = props.countries,
			    new_default_country = props.country,
			    new_value = props.value,
			    new_reset = props.reset;


			var new_state = {
				// Emulate `prevProps` via `state.props`.
				props: props,
				// If the user has already manually selected a country
				// then don't override that already selected country
				// if the default `country` property changes.
				// That's what `hasUserSelectedACountry` flag is for.
				hasUserSelectedACountry: hasUserSelectedACountry

				// If `countries` or `labels` or `international` changed
				// then re-generate country `<select/>` options.
			};if (props.countries !== state.props.countries || props.labels !== state.props.labels || props.international !== state.props.international) {
				// Re-generate country select options.
				new_state.country_select_options = generateCountrySelectOptions(filterCountries(props.countries, metadata), filterCountryOptions(props.countryOptions, metadata), props);
			}

			// Some users requested a way to reset the component
			// (both number `<input/>` and country `<select/>`).
			// Whenever `reset` property changes both number `<input/>`
			// and country `<select/>` are reset.
			// It's not implemented as some instance `.reset()` method
			// because `ref` will likely be forwarded to `<input/>`.
			// https://github.com/catamphetamine/react-phone-number-input/issues/300
			if (new_reset !== old_reset) {
				return _extends({}, new_state, {
					parsed_input: undefined,
					value: undefined,
					country: new_default_country
				});
			}

			// If the default country changed.
			// (e.g. in case of ajax GeoIP detection after page loaded)
			// then select it but only if the user hasn't already manually
			// selected a country and no phone number has been entered so far.
			// Because if the user has already started inputting a phone number
			// then he's okay with no country being selected at all ("International")
			// and doesn't want to be disturbed, doesn't want his input to be screwed, etc.
			if (new_default_country !== old_default_country && !hasUserSelectedACountry && !value && !new_value) {
				return _extends({}, new_state, {
					country: isCountrySupportedWithError(new_default_country, metadata) ? new_default_country : old_default_country
					// `value` is `undefined`.
					// `parsed_input` is `undefined` because `value` is `undefined`.
				});
			}
			// If a new `value` is set externally.
			// (e.g. as a result of an ajax API request
			//  to get user's phone after page loaded)
			// The first part — `new_value !== old_value` —
			// is basically `props.value !== prevProps.value`
			// so it means "if value property was changed externally".
			// The second part — `new_value !== value` —
			// is for ignoring the `getDerivedStateFromProps()` call
			// which happens in `this.onChange()` right after `this.setState()`.
			// If this `getDerivedStateFromProps()` call isn't ignored
			// then the country flag would reset on each input.
			else if (new_value !== old_value && new_value !== value) {
					var phoneNumber = (0, _inputControl.parsePhoneNumber)(new_value, metadata);
					var parsedCountry = void 0;
					if (phoneNumber) {
						var _countries = filterCountries(props.countries, metadata);
						if (!_countries || _countries.indexOf(phoneNumber.country) >= 0) {
							parsedCountry = phoneNumber.country;
						}
					}
					return _extends({}, new_state, {
						parsed_input: generateParsedInput(new_value, phoneNumber, props),
						value: new_value,
						country: new_value ? parsedCountry : country
					});
				}

			// `country` didn't change.
			// `value` didn't change.
			// `parsed_input` didn't change, because `value` didn't change.
			//
			// Maybe `new_state.country_select_options` changed.
			// In any case, update `prevProps`.
			return new_state;
		}
	}]);

	return PhoneNumberInput;
}(PureComponent), _class2.propTypes = {
	/**
  * Phone number in `E.164` format.
  *
  * Example:
  *
  * `"+12223333333"`
  */
	value: _propTypes2.default.string,

	/**
  * Updates the `value` as the user inputs the phone number.
  */
	onChange: _propTypes2.default.func.isRequired,

	/**
  * Toggles the `--focus` CSS class.
  * @ignore
  */
	onFocus: _propTypes2.default.func,

	/**
  * `onBlur` is usually passed by `redux-form`.
  * @ignore
  */
	onBlur: _propTypes2.default.func,

	/**
  * `onKeyDown` handler (e.g. to handle Enter key press).
  * @ignore
  */
	onKeyDown: _propTypes2.default.func,

	/**
  * Disables both the phone number `<input/>`
  * and the country `<select/>`.
  */
	// (is `false` by default)
	disabled: _propTypes2.default.bool.isRequired,

	/**
  * Sets `autoComplete` property for phone number `<input/>`.
  *
  * Web browser's "autocomplete" feature
  * remembers the phone number being input
  * and can also autofill the `<input/>`
  * with previously remembered phone numbers.
  *
  * https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
  *
  * For example, can be used to turn it off:
  *
  * "So when should you use `autocomplete="off"`?
  *  One example is when you've implemented your own version
  *  of autocomplete for search. Another example is any form field
  *  where users will input and submit different kinds of information
  *  where it would not be useful to have the browser remember
  *  what was submitted previously".
  */
	// (is `"tel"` by default)
	autoComplete: _propTypes2.default.string.isRequired,

	/**
  * Set to `true` to show the initial `value` in
  * "national" format rather than "international".
  *
  * For example, if this flag is set to `true`
  * and the initial `value="+12133734253"` is passed
  * then the `<input/>` value will be `"(213) 373-4253"`.
  *
  * By default, this flag is set to `false`,
  * meaning that if the initial `value="+12133734253"` is passed
  * then the `<input/>` value will be `"+1 213 373 4253"`.
  *
  * The reason for such default behaviour is that
  * the newer generation grows up when there are no stationary phones
  * and therefore everyone inputs phone numbers in international format
  * in their smartphones so people gradually get more accustomed to
  * writing phone numbers in international format rather than in local format.
  * Future people won't be using "national" format, only "international".
  */
	// (is `false` by default)
	displayInitialValueAsLocalNumber: _propTypes2.default.bool.isRequired,

	/**
  * The country to be selected by default.
  * For example, can be set after a GeoIP lookup.
  *
  * Example: `"US"`.
  */
	// A two-letter country code ("ISO 3166-1 alpha-2").
	country: _propTypes2.default.string,

	/**
  * If specified, only these countries will be available for selection.
  *
  * Example:
  *
  * `["RU", "UA", "KZ"]`
  */
	countries: _propTypes2.default.arrayOf(_propTypes2.default.string),

	/**
  * Custom country `<select/>` option names.
  * Also some labels like "ext" and country `<select/>` `aria-label`.
  *
  * Example:
  *
  * `{ "ZZ": "Международный", RU: "Россия", US: "США", ... }`
  *
  * See the `locales` directory for examples.
  */
	labels: _PropTypes.labels.isRequired,

	/**
  * The base URL path for country flag icons.
  * By default it loads country flag icons from
  * `flag-icon-css` repo github pages website.
  * I imagine someone might want to download
  * those country flag icons and host them
  * on their own servers instead.
  * Warning: in future new countries can be added
  * to the country select which would result in
  * "Image not found" errors when using custom `flagsPath`
  * due to the custom-hosted flags bundle being outdated
  * and missing the new flags.
  * So if using custom `flagsPath` always check `CHANGELOG.md`
  * for new country announcements before updating this library.
  */
	flagsPath: _propTypes2.default.string.isRequired,

	/**
  * Custom country flag icon components.
  * These flags replace the default ones.
  *
  * The shape is an object where keys are country codes
  * and values are flag icon components.
  * Flag icon components receive the same properties
  * as `flagComponent` (see below).
  *
  * Example:
  *
  * `{ "RU": () => <img src="..."/> }`
  *
  * Can be used to replace the default flags
  * with custom ones for certain (or all) countries.
  *
  * Can also be used to bundle `<svg/>` flags instead of `<img/>`s:
  *
  * By default flag icons are inserted as `<img/>`s
  * with their `src` pointed to `flag-icon-css` repo github pages website.
  *
  * There might be some cases
  * (e.g. a standalone "native" app, or an "intranet" web application)
  * when including the full set of `<svg/>` country flags (3 megabytes)
  * is more appropriate than downloading them individually at runtime only if needed.
  *
  * Example:
  *
  * `// Uses <svg/> flags (3 megabytes):`
  *
  * `import flags from 'react-phone-number-input/flags'`
  *
  * `import PhoneInput from 'react-phone-number-input'`
  *
  * `<PhoneInput flags={flags} .../>`
  */
	flags: _propTypes2.default.objectOf(_propTypes2.default.elementType),

	/**
  * Country flag icon component.
  *
  * Takes properties:
  *
  * * country : string — The country code.
  * * flagsPath : string — The `flagsPath` property (see above).
  * * flags : object — The `flags` property (see above).
  */
	flagComponent: _propTypes2.default.elementType.isRequired,

	/**
  * Set to `false` to drop the "International" option from country `<select/>`.
  */
	international: _propTypes2.default.bool.isRequired,

	/**
  * Custom "International" country `<select/>` option icon.
  */
	internationalIcon: _propTypes2.default.elementType.isRequired,

	/**
  * Set to `false` to hide country `<select/>`.
  */
	// (is `true` by default)
	showCountrySelect: _propTypes2.default.bool.isRequired,

	/**
  * HTML `tabindex` attribute for country `<select/>`.
  */
	countrySelectTabIndex: _propTypes2.default.number,

	/**
  * HTML `aria-label` attribute for country `<select/>`.
  * The default is `.country` of the `labels` property
  * which is `"Country"` for the default `labels`.
  */
	countrySelectAriaLabel: _propTypes2.default.string,

	/**
  * Can be used to place some countries on top of the list of country `<select/>` options.
  *
  * * `"|"` — inserts a separator.
  * * `"..."` — means "the rest of the countries" (can be omitted).
  *
  * Example:
  *
  * `["US", "CA", "AU", "|", "..."]`
  */
	countryOptions: _propTypes2.default.arrayOf(_propTypes2.default.string),

	/**
  * Some users requested a way to reset the component:
  * both number `<input/>` and country `<select/>`.
  * Whenever `reset` property changes both number `<input/>`
  * and country `<select/>` are reset.
  * It's not implemented as some instance `.reset()` method
  * because `ref` will likely be forwarded to `<input/>`.
  */
	// https://github.com/catamphetamine/react-phone-number-input/issues/300
	reset: _propTypes2.default.any,

	/**
  * `<Phone/>` component CSS style object.
  */
	style: _propTypes2.default.object,

	/**
  * `<Phone/>` component CSS class.
  */
	className: _propTypes2.default.string,

	/**
  * Phone number `<input/>` CSS class.
  */
	inputClassName: _propTypes2.default.string,

	/**
  * By default, there's some styling applied to the `<input/>` (for historical reasons). To prevent applying that styling to the `<input/>`, pass `inputStyleReset` property to the component.
  */
	inputStyleReset: _propTypes2.default.bool,

	/**
  * Returns phone number `<input/>` CSS class string.
  * Receives an object of shape `{ disabled : boolean?, invalid : boolean? }`.
  * @ignore
  */
	getInputClassName: _propTypes2.default.func,

	/**
  * Country `<select/>` component.
  *
  * Receives properties:
  *
  * * `name : string?` — HTML `name` attribute.
  * * `value : string?` — The currently selected country code.
  * * `onChange(value : string?)` — Updates the `value`.
  * * `onFocus()` — Is used to toggle the `--focus` CSS class.
  * * `onBlur()` — Is used to toggle the `--focus` CSS class.
  * * `options : object[]` — The list of all selectable countries (including "International") each being an object of shape `{ value : string?, label : string, icon : React.Component }`.
  * * `disabled : boolean?` — HTML `disabled` attribute.
  * * `tabIndex : (number|string)?` — HTML `tabIndex` attribute.
  * * `className : string` — CSS class name.
  */
	//
	// (deprecated)
	// * `hidePhoneInputField(hide : boolean)` — Can be called to show/hide phone input field. Takes `hide : boolean` argument. E.g. `react-responsive-ui` `<Select/>` uses this to hide phone number input when country select is expanded.
	// * `focusPhoneInputField()` — Can be called to manually focus phone input field. E.g. `react-responsive-ui` `<Select/>` uses this to focus phone number input after country selection in a timeout (after the phone input field is no longer hidden).
	//
	countrySelectComponent: _propTypes2.default.elementType.isRequired,

	/**
  * Country `<select/>` arrow component. Renders a CSS triangle by default.
  */
	countrySelectArrowComponent: _propTypes2.default.elementType,

	/**
  * Country `<select/>` component props.
  */
	countrySelectProps: _propTypes2.default.object,

	/**
  * Phone number `<input/>` component.
  *
  * Receives properties:
  *
  * * `value: string` — The formatted `value`.
  * * `onChange(event: Event)` — Updates the formatted `value` from `event.target.value`.
  * * `onFocus()` — Is used to toggle the `--focus` CSS class.
  * * `onBlur(event: Event)` — Is used to toggle the `--focus` CSS class.
  * * Other properties like `type="tel"` or `autoComplete="tel"` that should be passed through to the DOM `<input/>`.
  *
  * Must also either use `React.forwardRef()` to "forward" `ref` to the `<input/>` or implement `.focus()` method.
  */
	numberInputComponent: _propTypes2.default.elementType.isRequired,

	/**
  * Phone number `<input/>` component props.
  */
	numberInputProps: _propTypes2.default.object,

	/**
  * Phone number `<input/>` component (a higher-order one).
  *
  * Receives properties:
  *
  * * `value : string` — The parsed phone number. E.g.: `""`, `"+"`, `"+123"`, `"123"`.
  * * `onChange(value? : string)` — Updates the `value`.
  * * `onFocus()` — Is used to toggle the `--focus` CSS class.
  * * `onBlur()` — Is used to toggle the `--focus` CSS class.
  * * `country : string?` — The currently selected country. `undefined` means "International" (no country selected).
  * * `metadata : object` — `libphonenumber-js` metadata.
  * * `inputComponent : elementType` — Phone number `<input/>` component. This is basically the `numberInputComponent` property renamed to `inputComponent`.
  * * All other properties should be passed through to the underlying `<input/>`.
  *
  * Must also either use `React.forwardRef()` to "forward" `ref` to the `<input/>` or implement `.focus()` method.
  *
  * @ignore
  */
	inputComponent: _propTypes2.default.elementType,

	/**
  * By default, the caret position is being "intelligently" managed
  * while a user inputs a phone number.
  * This "smart" caret behavior can be turned off
  * by passing `smartCaret={false}` property.
  * This is just an "escape hatch" for any possible caret position issues.
  */
	// Is `true` by default.
	smartCaret: _propTypes2.default.bool.isRequired,

	/**
  * Phone number extension `<input/>` element.
  *
  * Example:
  *
  *	`ext={<input value={...} onChange={...}/>}`
  */
	ext: _propTypes2.default.node,

	/**
  * If set to `true` the phone number input will get trimmed
  * if it exceeds the maximum length for the country.
  */
	limitMaxLength: _propTypes2.default.bool.isRequired,

	/**
  * An error message to show below the phone number `<input/>`. For example, `"Required"`.
  */
	error: _propTypes2.default.string,

	/**
  * The `error` is shown only when `indicateInvalid` is `true`.
  * (which is the default).
  * @deprecated
  * @ignore
  */
	indicateInvalid: _propTypes2.default.bool,

	/**
  * `libphonenumber-js` metadata.
  *
  * Can be used to pass custom `libphonenumber-js` metadata
  * to reduce the overall bundle size for those who compile "custom" metadata.
  */
	metadata: _PropTypes.metadata.isRequired,

	/**
  * Is called every time the selected country changes:
  * either programmatically or when user selects it manually from the list.
  */
	// People have been asking for a way to get the selected country.
	// @see  https://github.com/catamphetamine/react-phone-number-input/issues/128
	// For some it's just a "business requirement".
	// I guess it's about gathering as much info on the user as a website can
	// without introducing any addional fields that would complicate the form
	// therefore reducing "conversion" (that's a marketing term).
	// Assuming that the phone number's country is the user's country
	// is not 100% correct but in most cases I guess it's valid.
	onCountryChange: _propTypes2.default.func,

	/**
  * Disables only the phone number `<input/>`.
  *
  * Some users choose to implement a digital keyboard component for phone number input.
  * In such cases the phone number input field must be disabled in order for the default system keyboard to not show up on focus.
  * At the same time, country select should not be disabled in order for the user to be able to choose their country.
  */
	// (is `false` by default)
	// https://github.com/catamphetamine/react-phone-number-input/issues/215
	disablePhoneInput: _propTypes2.default.bool.isRequired
}, _class2.defaultProps = {
	/**
  * Not disabled.
  */
	disabled: false,
	disablePhoneInput: false,

	/**
  * Show `error` (if passed).
  * @deprecated
  */
	indicateInvalid: true,

	/**
  * Remember (and autofill) the value as a phone number.
  */
	autoComplete: 'tel',

	/**
  * Flag icon component.
  */
	flagComponent: _Flag2.default,

	/**
  * By default, use icons from `flag-icon-css` github repo.
  */
	flagsPath: 'https://lipis.github.io/flag-icon-css/flags/4x3/',

	/**
  * Default "International" country `<select/>` option icon (globe).
  */
	// internationalIcon: InternationalIcon,

	/**
  * Phone number `<input/>` component.
  */
	numberInputComponent: 'input',

	/**
  * Show country `<select/>`.
  */
	showCountrySelect: true,

	/**
  * Don't convert the initially passed phone number `value`
  * to a national phone number for its country.
  * The reason is that the newer generation grows up when
  * there are no stationary phones and therefore everyone inputs
  * phone numbers with a `+` in their smartphones
  * so phone numbers written in international form
  * are gradually being considered more natural than local ones.
  */
	displayInitialValueAsLocalNumber: false,

	/**
  * Set to `false` to use "basic" caret instead of the "smart" one.
  */
	smartCaret: true,

	/**
  * Whether to add the "International" option
  * to the list of countries.
  */
	international: true,

	/**
  * If set to `true` the phone number input will get trimmed
  * if it exceeds the maximum length for the country.
  */
	limitMaxLength: false
}, _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.isCountrySupportedWithError = function (country) {
		var metadata = _this2.props.metadata;

		return isCountrySupportedWithError(country, metadata);
	};

	this.onCountryChange = function (new_country) {
		var _props3 = _this2.props,
		    metadata = _props3.metadata,
		    onChange = _props3.onChange;
		var _state2 = _this2.state,
		    old_parsed_input = _state2.parsed_input,
		    old_country = _state2.country;

		// After the new `country` has been selected,
		// if the phone number `<input/>` holds any digits
		// then migrate those digits for the new `country`.

		var new_parsed_input = (0, _inputControl.migrateParsedInputForNewCountry)(old_parsed_input, old_country, new_country, metadata,
		// Convert the phone number to "national" format
		// when the user changes the selected country by hand.
		true);

		var new_value = (0, _inputControl.e164)(new_parsed_input, new_country, metadata);

		// Focus phone number `<input/>` upon country selection.
		_this2.focus();

		// If the user has already manually selected a country
		// then don't override that already selected country
		// if the default `country` property changes.
		// That's what `hasUserSelectedACountry` flag is for.

		_this2.setState({
			country: new_country,
			hasUserSelectedACountry: true,
			parsed_input: new_parsed_input,
			value: new_value
		}, function () {
			// Update the new `value` property.
			// Doing it after the `state` has been updated
			// because `onChange()` will trigger `getDerivedStateFromProps()`
			// with the new `value` which will be compared to `state.value` there.
			onChange(new_value);
		});
	};

	this.onPhoneNumberKeyDown = function (event) {
		var onKeyDown = _this2.props.onKeyDown;

		// Actually "Down arrow" key is used for showing "autocomplete" ("autofill") options.
		// (e.g. previously entered phone numbers for `autoComplete="tel"`)
		// so can't hijack "Down arrow" keypress here.
		// // Expand country `<select/>`` on "Down arrow" key press.
		// if (event.keyCode === 40) {
		// 	this.country_select.toggle()
		// }

		if (onKeyDown) {
			onKeyDown(event);
		}
	};

	this.onChange = function (_input) {
		var _props4 = _this2.props,
		    onChange = _props4.onChange,
		    international = _props4.international,
		    limitMaxLength = _props4.limitMaxLength,
		    metadata = _props4.metadata;

		var _parseInput = (0, _inputControl.parseInput)(_input, _this2.state.parsed_input, _this2.state.country, _this2.state.countries, international, limitMaxLength, metadata),
		    input = _parseInput.input,
		    country = _parseInput.country,
		    value = _parseInput.value;

		_this2.setState({
			parsed_input: input,
			value: value,
			country: country
		},
		// Update the new `value` property.
		// Doing it after the `state` has been updated
		// because `onChange()` will trigger `getDerivedStateFromProps()`
		// with the new `value` which will be compared to `state.value` there.
		function () {
			return onChange(value);
		});
	};

	this._onFocus = function () {
		return _this2.setState({ isFocused: true });
	};

	this._onBlur = function () {
		return _this2.setState({ isFocused: false });
	};

	this.onFocus = function (event) {
		var onFocus = _this2.props.onFocus;

		_this2._onFocus();
		if (onFocus) {
			onFocus(event);
		}
	};

	this.onBlur = function (event) {
		var onBlur = _this2.props.onBlur;
		var value = _this2.state.value;


		_this2._onBlur();

		if (!onBlur) {
			return;
		}

		// `event` is React's `SyntheticEvent`.
		// Its `.value` is read-only therefore cloning it.
		var _event = _extends({}, event, {
			target: _extends({}, event.target, {
				value: value
			})

			// For `redux-form` event detection.
			// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
		});_event.stopPropagation = event.stopPropagation;
		_event.preventDefault = event.preventDefault;

		return onBlur(_event);
	};

	this.hidePhoneInputField = function (hide) {
		_this2.setState({
			hidePhoneInputField: hide
		});
	};

	this.focus = function () {
		return _this2.number_input.focus();
	};

	this.storeCountrySelectInstance = function (_) {
		return _this2.country_select = _;
	};

	this.storePhoneNumberInputInstance = function (_) {
		return _this2.number_input = _;
	};
}, _temp)) || _class;

// Generates country `<select/>` options.


exports.default = PhoneNumberInput;
function generateCountrySelectOptions(countries, countryOptions, props) {
	var labels = props.labels,
	    international = props.international,
	    metadata = props.metadata;


	var CountrySelectOptionIcon = createCountrySelectOptionIconComponent(props);

	return transformCountryOptions((0, _inputControl.getCountrySelectOptions)(countries || (0, _countries2.getCountryCodes)(labels).filter(function (country) {
		return country === 'ZZ' || isCountrySupported(country, metadata);
	}), labels, international).map(function (_ref) {
		var value = _ref.value,
		    label = _ref.label;
		return {
			value: value,
			label: label,
			icon: CountrySelectOptionIcon
		};
	}), countryOptions);
}

function createCountrySelectOptionIconComponent(props) {
	var flags = props.flags,
	    flagsPath = props.flagsPath,
	    FlagComponent = props.flagComponent,
	    InternationalIcon = props.internationalIcon;


	return function (_ref2) {
		var value = _ref2.value;
		return _react2.default.createElement(
			'div',
			{
				className: (0, _classnames2.default)('react-phone-number-input__icon', {
					'react-phone-number-input__icon--international': value === undefined
				}) },
			value ? _react2.default.createElement(FlagComponent, {
				country: value,
				flags: flags,
				flagsPath: flagsPath }) : _react2.default.createElement(InternationalIcon, null)
		);
	};
}

// Can move some country `<select/>` options
// to the top of the list, for example.
// See `countryOptions` property.
function transformCountryOptions(options, transform) {
	if (!transform) {
		return options;
	}

	var optionsOnTop = [];
	var optionsOnBottom = [];
	var appendTo = optionsOnTop;

	var _loop = function _loop() {
		if (_isArray) {
			if (_i >= _iterator.length) return 'break';
			_ref3 = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) return 'break';
			_ref3 = _i.value;
		}

		var element = _ref3;

		if (element === '|') {
			appendTo.push({ divider: true });
		} else if (element === '...' || element === '…') {
			appendTo = optionsOnBottom;
		} else {
			// Find the position of the option.
			var index = options.indexOf(options.filter(function (option) {
				return option.value === element;
			})[0]);
			// Get the option.
			var option = options[index];
			// Remove the option from its default position.
			options.splice(index, 1);
			// Add the option on top.
			appendTo.push(option);
		}
	};

	for (var _iterator = transform, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref3;

		var _ret = _loop();

		if (_ret === 'break') break;
	}

	return optionsOnTop.concat(options).concat(optionsOnBottom);
}

function generateParsedInput(value, phoneNumber, props) {
	var displayInitialValueAsLocalNumber = props.displayInitialValueAsLocalNumber;

	// If the `value` (E.164 phone number)
	// belongs to the currently selected country
	// and `displayInitialValueAsLocalNumber` property is `true`
	// then convert `value` (E.164 phone number)
	// to a local phone number digits.
	// E.g. '+78005553535' -> '88005553535'.

	if (displayInitialValueAsLocalNumber && phoneNumber && phoneNumber.country) {
		return (0, _inputControl.generateNationalNumberDigits)(phoneNumber);
	}

	return value;
}

function isCountrySupported(country, metadata) {
	return metadata.countries.hasOwnProperty(country);
}

function isCountrySupportedWithError(country, metadata) {
	if (isCountrySupported(country, metadata)) {
		return true;
	} else {
		console.error('Country not found: ' + country);
		return false;
	}
}

function isCountryOptionSupportedWithError(countryOption, metadata) {
	switch (countryOption) {
		case '|':
		case '...':
		case '…':
			return true;
		default:
			return isCountrySupportedWithError(countryOption, metadata);
	}
}

function filterCountries(countries, metadata) {
	if (countries) {
		countries = countries.filter(function (country) {
			return isCountrySupportedWithError(country, metadata);
		});
		if (countries.length === 0) {
			countries = undefined;
		}
	}
	return countries;
}

function filterCountryOptions(countryOptions, metadata) {
	if (countryOptions) {
		countryOptions = countryOptions.filter(function (countryOption) {
			return isCountryOptionSupportedWithError(countryOption, metadata);
		});
		if (countryOptions.length === 0) {
			countryOptions = undefined;
		}
	}
	return countryOptions;
}

function parseExtDigits(event) {
	if (event) {
		if (typeof event === 'string') {
			event = (0, _core.parseDigits)(event);
		} else if (event.target && event.target.value) {
			event.target.value = (0, _core.parseDigits)(event.target.value);
		}
	}
	return event;
}
//# sourceMappingURL=PhoneInput.js.map

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.labels = exports.metadata = undefined;

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metadata = exports.metadata = _propTypes2.default.shape({
	country_calling_codes: _propTypes2.default.object.isRequired,
	countries: _propTypes2.default.object.isRequired
});

var labels = exports.labels = _propTypes2.default.objectOf(_propTypes2.default.string);
//# sourceMappingURL=PropTypes.js.map

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCountryCodes = getCountryCodes;
exports.getCountryCodeForFlag = getCountryCodeForFlag;
// See the table of officially assigned ISO 3166-1 alpha-2 country codes:
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Current_codes
var SKIP_COUNTRIES = exports.SKIP_COUNTRIES = [
// "001" means "Non-Geographical Entity" ("No country", "International").
'001'];

function getCountryCodes(labels) {
	// Includes all country codes (excluding "ZZ" for "International").
	//
	// From ISO 3166-1:2006(E/F):
	//
	// 8.1.3   User-assigned code elements
	//
	// If users need code elements to represent country names not included
	// in this part of ISO 3166, the series of letters AA, QM to QZ, XA
	// to XZ, and ZZ, and the series AAA to AAZ, QMA to QZZ, XAA to XZZ,
	// and ZZA to ZZZ respectively, and the series of numbers 900 to 999
	// are available. These users should inform the ISO 3166/MA of such use.
	//
	return Object.keys(labels).filter(function (key) {
		return key.length === 2 && key.toUpperCase() === key && key !== 'ZZ' && SKIP_COUNTRIES.indexOf(key) < 0;
	});
}

function getCountryCodeForFlag(country) {
	switch (country) {
		// "Ascension Island".
		// The flag is missing for it:
		// https://lipis.github.io/flag-icon-css/flags/4x3/ac.svg
		// GitHub issue:
		// https://github.com/lipis/flag-icon-css/issues/537
		// Using "SH" flag as a temporary substitute
		// because previously "AC" and "TA" were parts of "SH".
		case 'AC':
			return 'SH';

		// "Tristan da Cunha".
		// The flag is missing for it:
		// https://lipis.github.io/flag-icon-css/flags/4x3/ta.svg
		// GitHub issue:
		// https://github.com/lipis/flag-icon-css/issues/537
		// Using "SH" flag as a temporary substitute
		// because previously "AC" and "TA" were parts of "SH".
		case 'TA':
			return 'SH';

		default:
			return country;
	}
}
//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 648:
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

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = exports.css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused;
  return {
    alignItems: 'center',
    backgroundColor: isDisabled ? _theme.colors.neutral5 : isFocused ? _theme.colors.neutral0 : _theme.colors.neutral2,
    borderColor: isDisabled ? _theme.colors.neutral10 : isFocused ? _theme.colors.primary : _theme.colors.neutral20,
    borderRadius: _theme.borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? '0 0 0 1px ' + _theme.colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: _theme.spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',

    '&:hover': {
      borderColor: isFocused ? _theme.colors.primary : _theme.colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('control', props)), {
        'control': true,
        'control--is-disabled': isDisabled,
        'control--is-focused': isFocused
      }, className)
    }, innerProps),
    children
  );
};

exports.default = Control;

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupHeading = exports.groupHeadingCSS = exports.groupCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var groupCSS = exports.groupCSS = function groupCSS() {
  return {
    paddingBottom: _theme.spacing.baseUnit * 2,
    paddingTop: _theme.spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      label = props.label;

  return _react2.default.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('group', props)), { 'group': true }, className)
    },
    _react2.default.createElement(
      Heading,
      { getStyles: getStyles, cx: cx },
      label
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

var groupHeadingCSS = exports.groupHeadingCSS = function groupHeadingCSS() {
  return {
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: _theme.spacing.baseUnit * 3,
    paddingRight: _theme.spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};

var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      cleanProps = _objectWithoutProperties(props, ['className', 'cx', 'getStyles']);

  return _react2.default.createElement('div', _extends({
    className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('groupHeading', props)), { 'group-heading': true }, className)
  }, cleanProps));
};

exports.GroupHeading = GroupHeading;
exports.default = Group;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputCSS = undefined;

var _emotion = __webpack_require__(416);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactInputAutosize = __webpack_require__(833);

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var inputCSS = exports.inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled;
  return {
    margin: _theme.spacing.baseUnit / 2,
    paddingBottom: _theme.spacing.baseUnit / 2,
    paddingTop: _theme.spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: _theme.colors.text
  };
};
var inputStyle = function inputStyle(isHidden) {
  return {
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      props = _objectWithoutProperties(_ref2, ['className', 'cx', 'getStyles', 'innerRef', 'isHidden', 'isDisabled']);

  return _react2.default.createElement(
    'div',
    {
      className: (0, _emotion.css)(getStyles('input', props))
    },
    _react2.default.createElement(_reactInputAutosize2.default, _extends({
      className: cx(null, { 'input': true }, className),
      inputRef: innerRef,
      inputStyle: inputStyle(isHidden),
      disabled: isDisabled
    }, props))
  );
};

exports.default = Input;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuPortal = exports.menuPortalCSS = exports.LoadingMessage = exports.NoOptionsMessage = exports.loadingMessageCSS = exports.noOptionsMessageCSS = exports.MenuList = exports.menuListCSS = exports.Menu = exports.menuCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getMenuPlacement = getMenuPlacement;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _reactDom = __webpack_require__(76);

var _propTypes = __webpack_require__(827);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(590);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ==============================
// Menu
// ==============================

// Get Menu Placement
// ------------------------------

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition;

  var scrollParent = (0, _utils.getScrollParent)(menuEl);
  var defaultState = { placement: 'bottom', maxHeight: maxHeight };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  // $FlowFixMe function returns above if there's no offsetParent


  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = (0, _utils.getScrollTop)(scrollParent);
  var gutter = _theme.spacing.menuGutter;

  var viewSpaceAbove = containerTop - gutter;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;

  var scrollDown = menuBottom - viewHeight + scrollTop + gutter;
  var scrollUp = scrollTop + menuTop - gutter;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          (0, _utils.animatedScrollTo)(scrollParent, scrollDown, scrollDuration);
        }

        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          (0, _utils.animatedScrollTo)(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - gutter : scrollSpaceBelow - gutter;

        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight = isFixedPosition ? viewSpaceAbove - gutter - _theme.spacing.controlHeight : scrollSpaceAbove - gutter - _theme.spacing.controlHeight;
        }

        return { placement: 'top', maxHeight: _constrainedHeight };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (placement === 'bottom') {
        (0, _utils.scrollTo)(scrollParent, scrollDown);
        return { placement: 'bottom', maxHeight: maxHeight };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return { placement: 'top', maxHeight: maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          (0, _utils.animatedScrollTo)(scrollParent, scrollUp, scrollDuration);
        }

        return { placement: 'top', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - gutter : scrollSpaceAbove - gutter;
        }

        if (shouldScroll) {
          (0, _utils.animatedScrollTo)(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return { placement: 'bottom', maxHeight: maxHeight };
    default:
      throw new Error('Invalid placement provided "' + placement + '".');
  }

  // fulfil contract with flow: implicit return value of undefined
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = { bottom: 'top', top: 'bottom' };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = exports.menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement;
  return _ref3 = {}, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, 'backgroundColor', _theme.colors.neutral0), _defineProperty(_ref3, 'borderRadius', _theme.borderRadius), _defineProperty(_ref3, 'boxShadow', '0 0 0 1px ' + _theme.colors.neutral10a + ', 0 4px 11px ' + _theme.colors.neutral10a), _defineProperty(_ref3, 'marginBottom', _theme.spacing.menuGutter), _defineProperty(_ref3, 'marginTop', _theme.spacing.menuGutter), _defineProperty(_ref3, 'position', 'absolute'), _defineProperty(_ref3, 'width', '100%'), _defineProperty(_ref3, 'zIndex', 1), _ref3;
};

var Menu = exports.Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    }, _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView;
      var getPortalPlacement = _this.context.getPortalPlacement;


      if (!ref) return;

      // DO NOT scroll if position is fixed
      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;

      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition
      });

      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    }, _this.getState = function () {
      var menuPlacement = _this.props.menuPlacement;

      var placement = _this.state.placement || coercePlacement(menuPlacement);

      return _extends({}, _this.props, { placement: placement, maxHeight: _this.state.maxHeight });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cx = _props.cx,
          getStyles = _props.getStyles,
          innerProps = _props.innerProps;


      return _react2.default.createElement(
        'div',
        _extends({
          className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('menu', this.getState())), {
            'menu': true
          }, className),
          ref: this.getPlacement
        }, innerProps),
        children
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.contextTypes = {
  getPortalPlacement: _propTypes2.default.func
};
exports.default = Menu;

// ==============================
// Menu List
// ==============================

var menuListCSS = exports.menuListCSS = function menuListCSS(_ref5) {
  var maxHeight = _ref5.maxHeight;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: _theme.spacing.baseUnit,
    paddingTop: _theme.spacing.baseUnit,
    position: 'relative', // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = exports.MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;

  return _react2.default.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('menuList', props)), {
        'menu-list': true,
        'menu-list--is-multi': isMulti
      }, className),
      ref: innerRef
    },
    children
  );
};

// ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS() {
  return {
    color: _theme.colors.neutral40,
    padding: _theme.spacing.baseUnit * 2 + 'px ' + _theme.spacing.baseUnit * 3 + 'px',
    textAlign: 'center'
  };
};
var noOptionsMessageCSS = exports.noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = exports.loadingMessageCSS = noticeCSS;

var NoOptionsMessage = exports.NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('noOptionsMessage', props)), {
        'menu-notice': true,
        'menu-notice--no-options': true
      }, className)
    }, innerProps),
    children
  );
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};

var LoadingMessage = exports.LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('loadingMessage', props)), {
        'menu-notice': true,
        'menu-notice--loading': true
      }, className)
    }, innerProps),
    children
  );
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = exports.menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};

var MenuPortal = exports.MenuPortal = function (_Component2) {
  _inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _ref7;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref7 = MenuPortal.__proto__ || Object.getPrototypeOf(MenuPortal)).call.apply(_ref7, [this].concat(args))), _this2), _this2.state = { placement: null }, _this2.getPortalPlacement = function (_ref8) {
      var placement = _ref8.placement;

      var initialPlacement = coercePlacement(_this2.props.menuPlacement);

      // avoid re-renders if the placement has not changed
      if (placement !== initialPlacement) {
        _this2.setState({ placement: placement });
      }
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(MenuPortal, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    }

    // callback for occassions where the menu must "flip"

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          appendTo = _props2.appendTo,
          children = _props2.children,
          controlElement = _props2.controlElement,
          menuPlacement = _props2.menuPlacement,
          position = _props2.menuPosition,
          getStyles = _props2.getStyles;

      var isFixed = position === 'fixed';

      // bail early if required elements aren't present
      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = (0, _utils.getBoundingClientObj)(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = { offset: offset, position: position, rect: rect };

      // same wrapper element whether fixed or portalled
      var menuWrapper = _react2.default.createElement(
        'div',
        {
          className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)(getStyles('menuPortal', state))
        },
        children
      );

      return appendTo ? (0, _reactDom.createPortal)(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(_react.Component);

MenuPortal.childContextTypes = {
  getPortalPlacement: _propTypes2.default.func
};

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiValueRemove = exports.MultiValueLabel = exports.MultiValueContainer = exports.MultiValueGeneric = exports.multiValueRemoveCSS = exports.multiValueLabelCSS = exports.multiValueCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

var _indicators = __webpack_require__(588);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var multiValueCSS = exports.multiValueCSS = function multiValueCSS() {
  return {
    backgroundColor: _theme.colors.neutral10,
    borderRadius: _theme.borderRadius / 2,
    display: 'flex',
    margin: _theme.spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug
  };
};
var multiValueLabelCSS = exports.multiValueLabelCSS = function multiValueLabelCSS(_ref) {
  var cropWithEllipsis = _ref.cropWithEllipsis;
  return {
    borderRadius: _theme.borderRadius / 2,
    color: _theme.colors.text,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = exports.multiValueRemoveCSS = function multiValueRemoveCSS(_ref2) {
  var isFocused = _ref2.isFocused;
  return {
    alignItems: 'center',
    borderRadius: _theme.borderRadius / 2,
    backgroundColor: isFocused && _theme.colors.dangerLight,
    display: 'flex',
    paddingLeft: _theme.spacing.baseUnit,
    paddingRight: _theme.spacing.baseUnit,
    ':hover': {
      backgroundColor: _theme.colors.dangerLight,
      color: _theme.colors.danger
    }
  };
};

var MultiValueGeneric = exports.MultiValueGeneric = function MultiValueGeneric(_ref3) {
  var children = _ref3.children,
      innerProps = _ref3.innerProps;
  return _react2.default.createElement(
    'div',
    innerProps,
    children
  );
};

var MultiValueContainer = exports.MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = exports.MultiValueLabel = MultiValueGeneric;

var MultiValueRemove = exports.MultiValueRemove = function (_Component) {
  _inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck(this, MultiValueRemove);

    return _possibleConstructorReturn(this, (MultiValueRemove.__proto__ || Object.getPrototypeOf(MultiValueRemove)).apply(this, arguments));
  }

  _createClass(MultiValueRemove, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          innerProps = _props.innerProps;

      return _react2.default.createElement(
        'div',
        innerProps,
        children
      );
    }
  }]);

  return MultiValueRemove;
}(_react.Component);

MultiValueRemove.defaultProps = {
  children: _react2.default.createElement(_indicators.CrossIcon, { size: 14 })
};

var MultiValue = function (_Component2) {
  _inherits(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck(this, MultiValue);

    return _possibleConstructorReturn(this, (MultiValue.__proto__ || Object.getPrototypeOf(MultiValue)).apply(this, arguments));
  }

  _createClass(MultiValue, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          components = _props2.components,
          cx = _props2.cx,
          data = _props2.data,
          getStyles = _props2.getStyles,
          innerProps = _props2.innerProps,
          isDisabled = _props2.isDisabled,
          removeProps = _props2.removeProps,
          selectProps = _props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;


      var containerInnerProps = _extends({
        className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _extends({
        className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return _react2.default.createElement(
        Container,
        {
          data: data,
          innerProps: containerInnerProps,
          selectProps: selectProps
        },
        _react2.default.createElement(
          Label,
          {
            data: data,
            innerProps: labelInnerProps,
            selectProps: selectProps
          },
          children
        ),
        _react2.default.createElement(Remove, {
          data: data,
          innerProps: removeInnerProps,
          selectProps: selectProps
        })
      );
    }
  }]);

  return MultiValue;
}(_react.Component);

MultiValue.defaultProps = {
  cropWithEllipsis: true
};
exports.default = MultiValue;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionCSS = exports.optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected;
  return {
    backgroundColor: isSelected ? _theme.colors.primary : isFocused ? _theme.colors.primary25 : 'transparent',
    color: isDisabled ? _theme.colors.neutral20 : isSelected ? _theme.colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: _theme.spacing.baseUnit * 2 + 'px ' + _theme.spacing.baseUnit * 3 + 'px',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

    // provide some affordance on touch devices
    ':active': {
      backgroundColor: isSelected ? _theme.colors.primary : _theme.colors.primary50
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('option', props)), {
        'option': true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected
      }, className)
    }, innerProps),
    children
  );
};

exports.default = Option;

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholderCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placeholderCSS = exports.placeholderCSS = function placeholderCSS() {
  return {
    color: _theme.colors.neutral50,
    marginLeft: _theme.spacing.baseUnit / 2,
    marginRight: _theme.spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('placeholder', props)), {
        'placeholder': true
      }, className)
    }, innerProps),
    children
  );
};

exports.default = Placeholder;

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = exports.css = function css(_ref) {
  var isDisabled = _ref.isDisabled;
  return {
    color: isDisabled ? _theme.colors.neutral40 : _theme.colors.text,
    marginLeft: _theme.spacing.baseUnit / 2,
    marginRight: _theme.spacing.baseUnit / 2,
    maxWidth: 'calc(100% - ' + _theme.spacing.baseUnit * 2 + 'px)',
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('singleValue', props)), {
        'single-value': true,
        'single-value--is-disabled': isDisabled
      }, className)
    }, innerProps),
    children
  );
};

exports.default = SingleValue;

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndicatorsContainer = exports.indicatorsContainerCSS = exports.ValueContainer = exports.valueContainerCSS = exports.SelectContainer = exports.containerCSS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(416);

var _theme = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==============================
// Root Container
// ==============================

var containerCSS = exports.containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null, // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = exports.SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('container', props)), {
        '--is-disabled': isDisabled,
        '--is-rtl': isRtl
      }, className)
    }, innerProps),
    children
  );
};

// ==============================
// Value Container
// ==============================

var valueContainerCSS = exports.valueContainerCSS = function valueContainerCSS() {
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: _theme.spacing.baseUnit / 2 + 'px ' + _theme.spacing.baseUnit * 2 + 'px',
    WebkitOverflowScrolling: 'touch',
    position: 'relative'
  };
};

var ValueContainer = exports.ValueContainer = function (_Component) {
  _inherits(ValueContainer, _Component);

  function ValueContainer() {
    _classCallCheck(this, ValueContainer);

    return _possibleConstructorReturn(this, (ValueContainer.__proto__ || Object.getPrototypeOf(ValueContainer)).apply(this, arguments));
  }

  _createClass(ValueContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cx = _props.cx,
          isMulti = _props.isMulti,
          getStyles = _props.getStyles,
          hasValue = _props.hasValue;


      return _react2.default.createElement(
        'div',
        {
          className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('valueContainer', this.props)), {
            'value-container': true,
            'value-container--is-multi': isMulti,
            'value-container--has-value': hasValue
          }, className)
        },
        children
      );
    }
  }]);

  return ValueContainer;
}(_react.Component);

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = exports.indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = exports.IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;


  return _react2.default.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('indicatorsContainer', props)), {
        'indicators': true
      }, className)
    },
    children
  );
};

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(183);

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_phone_number_input_style_css__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_phone_number_input_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_phone_number_input_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_select_lib_Creatable__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_select_lib_Creatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_select_lib_Creatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_phone_number_input__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__ = __webpack_require__(5);
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












var UsersLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__["d" /* createLoaderView */])();
var ProjectsLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__["d" /* createLoaderView */])();
var UserRolesView = /** @class */ (function (_super) {
    __extends(UserRolesView, _super);
    function UserRolesView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRolesView.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__projects_reducer__["a" /* default */])().loadProjects());
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().loadAllUsers());
    };
    UserRolesView.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, allroles = _a.allroles, allUsersAsync = _a.allUsersAsync, projectListAsync = _a.projectListAsync, userIdUnderEdit = _a.userIdUnderEdit, rolePermissionUnderEdit = _a.rolePermissionUnderEdit, prefProps = _a.prefProps;
        var colourStyles = {
            control: function (styles) { return (__assign({}, styles, { backgroundColor: 'white', borderRadius: 0 })); },
            option: function (styles, _a) {
                var data = _a.data, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected;
                return (__assign({}, styles, { 
                    //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
                    backgroundColor: isFocused ? '#ffa50045' : 'white', color: 'black' }));
            },
        };
        var userColourStyles = {
            control: function (styles) { return (__assign({}, styles, { backgroundColor: 'white', borderRadius: 0 })); },
            option: function (styles, _a) {
                var data = _a.data, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected;
                return (__assign({}, styles, { 
                    //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
                    backgroundColor: isFocused ? '#ffa50045' : 'white', color: data.value.isVaccant ? '#bd9c05' : data.value.isAdmin ? 'red' : 'black' }));
            },
        };
        //creatable is still value:lable based and they the value need toLowerCase so we gave it so we have to do this
        var userListOptions = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"]((allUsersAsync && allUsersAsync.result) || [], function (p) { return ({
            value: __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, p, { toLowerCase: function () { return p.workspaceUser.id.toLowerCase(); } }),
            label: p.prefferedName || p.email || p.workspaceUser.id,
        }); });
        var selectedUserOption = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](userListOptions, function (o) { return o.value.workspaceUser.id == userIdUnderEdit; });
        var allRolesOptions = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](allroles || [], function (r) { return ({ value: r, label: r }); });
        var userinRoles = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"]((allUsersAsync && allUsersAsync.result) || [], function (u) {
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](u.workspaceUser.roles || [], rolePermissionUnderEdit);
        });
        var selectedRoleOption = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](allRolesOptions, function (r) { return r.label == rolePermissionUnderEdit; });
        var modifiedUsers = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"]((allUsersAsync && allUsersAsync.result) || [], function (p) { return p.isModified; });
        var emailToBeSentToList = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](modifiedUsers, function (u) { return u.inviteToJoin; });
        var newCount = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"]((allUsersAsync && allUsersAsync.result) || [], function (p) { return p.isNew; }).length;
        return allUsersAsync && projectListAsync ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](UsersLoader, { asyncResult: allUsersAsync, prompt: 'Loading users' },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ProjectsLoader, { asyncResult: projectListAsync, prompt: 'Loading repositories' }, allUsersAsync.result && projectListAsync.result && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("form", { onSubmit: function (e) {
                        e.preventDefault();
                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().saveUserRoles());
                    } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Tabs"], { defaultActiveKey: 1, id: 'userorroles', style: {
                            marginTop: 10,
                            backgroundColor: 'white',
                        } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Tab"], { eventKey: 1, title: 'Users', style: {
                                padding: 10,
                            } },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Row"], { style: {
                                    marginTop: 10,
                                } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"], { md: 6 },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"], null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"], { style: { zIndex: 10 } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"].Addon, null,
                                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-user-o', "aria-hidden": 'true' })),
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_react_select_lib_Creatable___default.a, { placeholder: 'enter user name', value: selectedUserOption, onChange: function (option) {
                                                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().selectUser(option.value.workspaceUser.id));
                                                }, options: userListOptions, getOptionLabel: function (option) { return option && option.label; }, isInvalid: !!selectedUserOption, searchable: true, clearable: false, formatCreateLabel: function (value) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null,
                                                    "Add user:",
                                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("strong", null,
                                                        " ",
                                                        value))); }, onCreateOption: function (value) {
                                                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().addNewUser(value));
                                                }, styles: userColourStyles })),
                                        newCount == 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", { className: 'text-muted' }, "To add users start typing the new user name in the box above"))),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"], null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"], null,
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"].Addon, null,
                                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-user-o', "aria-hidden": 'true' })),
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { required: true, readOnly: !(selectedUserOption && selectedUserOption.value), placeholder: 'enter user full name', value: (selectedUserOption &&
                                                    selectedUserOption.value &&
                                                    selectedUserOption.value.workspaceUser.fullName) ||
                                                    '', onChange: function (e) {
                                                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().updatefullName(e.target.value));
                                                } })))),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"], { md: 6 },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"], null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"].Addon, null,
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-envelope', "aria-hidden": 'true' })),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { readOnly: !(selectedUserOption &&
                                                selectedUserOption.value &&
                                                selectedUserOption.value.workspaceUser.isVaccant &&
                                                !selectedUserOption.value.workspaceUser.invitationEmail), placeholder: 'email address where invitation will be sent', value: (selectedUserOption &&
                                                selectedUserOption.value &&
                                                selectedUserOption.value.email) ||
                                                '', onChange: function (e) {
                                                return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().updateEmail(e.target.value));
                                            } })),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"], { style: { marginTop: 35 } },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_react_phone_number_input__["a" /* default */], { required: true, defaultCountry: 'US', readOnly: !(selectedUserOption && selectedUserOption.value), placeholder: 'contact phone number', value: (selectedUserOption &&
                                                selectedUserOption.value &&
                                                selectedUserOption.value.workspaceUser.phoneNumber) ||
                                                '', onChange: function (e) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().updatephoneNumer(e)); } })))),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Row"], null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"], { md: 6 }, selectedUserOption && selectedUserOption.value && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-center' },
                                    selectedUserOption.value.workspaceUser.lastSignedIn ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                                        "last signed in at",
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_3_moment__(selectedUserOption.value.workspaceUser.lastSignedIn)
                                            .local()
                                            .format('LLLL'))) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("strong", null, "This user has not yet signed in"),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("br", null),
                                        selectedUserOption.value.workspaceUser.invitationEmail && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'text-warning' },
                                            "The invitation to join was sent at",
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_3_moment__(selectedUserOption.value.workspaceUser.invitationEmail.sentAt)
                                                .local()
                                                .format('LLLL'))))),
                                    userIdUnderEdit != 'workspace_owner' && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Checkbox"], { style: { margin: '5px 30px' }, checked: selectedUserOption.value.inviteToJoin, disabled: selectedUserOption.value.inviteToJoin &&
                                            !!selectedUserOption.value.isModified, onChange: function () {
                                            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().reSendInvitation());
                                        } }, "Re send invitation to join this workspace")))))),
                            selectedUserOption &&
                                selectedUserOption.value &&
                                userIdUnderEdit != 'workspace_owner' &&
                                !selectedUserOption.value.workspaceUser.isVaccant && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-center' },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Checkbox"], { style: {
                                        margin: '5px 30px',
                                    }, checked: !!selectedUserOption.value.isAdmin, onChange: function () {
                                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().markAsAdmin(!selectedUserOption.value.isAdmin));
                                    } }, "This user can administer this workpace"))),
                            selectedUserOption &&
                                selectedUserOption.value &&
                                (selectedUserOption.value.isAdmin ||
                                    selectedUserOption.value.workspaceUser.id == 'workspace_owner') && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-danger text-center' },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("strong", null,
                                        selectedUserOption.value.workspaceUser.id == 'workspace_owner' && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, "Workspace owner : ")),
                                        "This user has all access to all repositories and can manage permissions")))),
                            selectedUserOption &&
                                selectedUserOption.value &&
                                selectedUserOption.value.workspaceUser.id != 'workspace_owner' && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("fieldset", { style: {} },
                                allroles.length > 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("legend", { style: {
                                        width: 'auto',
                                        borderBottom: 'none',
                                        fontSize: 'small',
                                        marginBottom: 0,
                                    }, className: 'text-muted' }, "member of")),
                                allroles.map(function (role, i) {
                                    var checked = __WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](selectedUserOption.value.workspaceUser.roles || [], role);
                                    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: i, style: { display: 'inline-block' } },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Checkbox"], { style: {
                                                margin: '5px 30px',
                                            }, checked: checked, onChange: function () {
                                                dispatch(checked
                                                    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().removeRole(role)
                                                    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().addRole(role));
                                            } }, role)));
                                }))),
                            selectedUserOption &&
                                selectedUserOption.value &&
                                selectedUserOption.value.workspaceUser.id != 'workspace_owner' && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-right' },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("hr", null),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"], { bsSize: 'xs', bsStyle: 'danger', onClick: function () {
                                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().DeleteUser(selectedUserOption.value.workspaceUser.id));
                                    } }, "remove this user")))),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Tab"], { eventKey: 2, title: 'Roles', style: {
                                padding: 10,
                            } },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"], { style: {
                                    marginTop: 10,
                                } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"], null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["InputGroup"].Addon, null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-group', "aria-hidden": 'true' })),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_select__["default"], { placeholder: 'choose role to view', value: selectedRoleOption, onChange: function (option) {
                                            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().selectRoleToView(option.label));
                                        }, options: allRolesOptions, getOptionLabel: function (option) { return option && option.label; }, searchable: true, clearable: false, styles: colourStyles })),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("small", { className: 'text-muted' },
                                    "New roles can be added in Repository permissions",
                                    ' ')),
                            rolePermissionUnderEdit && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-center' }, userinRoles.length == 0 ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-warning' }, "There are no users in this role ")) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h4", { className: 'color-orange' }, "Users in role"),
                                __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"]((allUsersAsync && allUsersAsync.result) || [], function (u) {
                                    return __WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](u.workspaceUser.roles || [], rolePermissionUnderEdit);
                                }).map(function (user, i) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: i, style: {
                                        display: 'inline-block',
                                        margin: '5px 30px',
                                    } },
                                    user.workspaceUser.id,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: 0 }, onClick: function (_) {
                                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().removeRole(rolePermissionUnderEdit));
                                        } },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Tooltip"], { id: 'roleTooltipcanDelete' }, "Remove this user ") },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-times text-danger', style: { opacity: 0.8 }, "aria-hidden": 'true' }))))); }))))))),
                    prefProps && prefProps.validUser && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'alert alert-danger' }, "Username should be valid email address")),
                    emailToBeSentToList.length > 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: {
                            backgroundColor: '#ffa50059',
                            padding: 10,
                            margin: '10px 0px',
                        } },
                        "Emails will be sent to:",
                        emailToBeSentToList.map(function (u) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Badge"], { style: { margin: 10 }, id: "e_" + u.workspaceUser.id }, u.email)); }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Checkbox"], { style: {
                                    margin: 5,
                                }, checked: prefProps && prefProps.sendMeACopy, onChange: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().toggleSendMeaCopy()); } }, "Send a copy to me")))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-center' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"], { bsStyle: 'primary', type: 'submit', bsSize: 'large', style: { marginTop: 20, minWidth: 200 }, disabled: 0 == modifiedUsers.length },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null,
                                "Save changes",
                                ' ',
                                modifiedUsers.length > 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null,
                                    " for ",
                                    modifiedUsers.length,
                                    " user(s) "))))))))))) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: 'text-danger' }, "users or projects not initialized"));
    };
    return UserRolesView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(function (state) {
    var projectListAsync = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__projects_reducer__["a" /* default */])().getCurrentState(state).projectListAsync;
    var allroles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__projects_reducer__["a" /* default */])().getAllRolesFromState_helper(state);
    return __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer__["a" /* default */])().getCurrentState(state), { projectListAsync: projectListAsync, allroles: allroles });
})(UserRolesView));


/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__ = __webpack_require__(5);
//used when a user signs up with no existing projects





var TemplatesLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__["d" /* createLoaderView */])();
var ManFolderImg = __webpack_require__(826);
var OnBoarding = function (_a) {
    var onBoardingTemplatesAsync = _a.onBoardingTemplatesAsync, dispatch = _a.dispatch;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"], { bsSize: 'lg', backdrop: 'static', show: true, onHide: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().closeProjectEditor(true)); } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Header, { closeButton: true },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Title, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Welcome to Rev"))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: function (e) {
                e.preventDefault();
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().completeOnBoarding());
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Body, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Grid"], { style: { width: '100%' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], { md: 6, smHidden: true },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Image"], { src: ManFolderImg, alt: 'man with folder', responsive: true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], { md: 6, sm: 12, className: 'mainInfo ', style: { padding: 10 } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: 'text-primary ' }, "Your are one click away from saving your files"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", null,
                                "Tell us ",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "what type of files"),
                                " you will be storing in REV, so that we can create the appropriate repositories."),
                            onBoardingTemplatesAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TemplatesLoader, { asyncResult: onBoardingTemplatesAsync, prompt: 'Loading templates...' }, onBoardingTemplatesAsync.result &&
                                onBoardingTemplatesAsync.result.map(function (cat) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: "cat_" + cat.name, style: { marginLeft: 30 } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Checkbox"], { style: { fontSize: 'large' }, checked: !!cat.selected, onChange: function () {
                                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().selectOnBoardingTemplate(!cat.selected, cat.name));
                                        } }, cat.name),
                                    cat.selected && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { marginLeft: 45 } }, cat.templates.map(function (template) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: "cat_" + cat.name + "_" + template.name },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Checkbox"], { checked: !!template.selected, onChange: function () {
                                                return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().selectOnBoardingTemplate(!template.selected, cat.name, template.name));
                                            } }, template.name))); }))))); }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text-muted', style: { marginTop: 20 } }, "Check all boxes that apply"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text-info' }, "Don't worry! You will be able to create other repositories and change fields later"))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Footer, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], { bsStyle: 'warning', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().closeProjectEditor(true)); } }, "Cancel"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"], { bsStyle: 'primary', type: 'submit' }, "START")))));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().getCurrentState(state);
})(OnBoarding));


/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projectForm__ = __webpack_require__(685);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var ATemplate = function (_a) {
    var template = _a.template, dispatch = _a.dispatch;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: 'inline-block', margin: '5px', color: 'white', position: 'relative' } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'success', bsSize: 'small', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().addProject(template)); } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { fontSize: 'larger' } }, template.name),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { style: { height: '200px' }, src: template.templateImage, responsive: true })))));
};
var TemplatesLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__["d" /* createLoaderView */])();
var ProjectsLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__["d" /* createLoaderView */])();
var ProjectSaveStatusLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__["e" /* createSaverView */])();
var ProjectEditor = function (_a) {
    var currentEditing = _a.currentEditing, templateSearchPattern = _a.templateSearchPattern, projectListAsync = _a.projectListAsync, availableIntegrationsAsync = _a.availableIntegrationsAsync, templatesAsync = _a.templatesAsync, saveProjectResultAsync = _a.saveProjectResultAsync, allroles = _a.allroles, dispatch = _a.dispatch;
    var gotNoProjects = projectListAsync && projectListAsync.result && __WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](projectListAsync.result).length == 0;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Modal"], { bsSize: 'lg', show: !!currentEditing || null != templateSearchPattern, onHide: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().closeProjectEditor(true)); } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Modal"].Header, { closeButton: true },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Modal"].Title, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'repotooltip' }, "In REV images are archived in a repository. You can create repositories to organize your images") },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, !currentEditing || !currentEditing.id
                        ? gotNoProjects
                            ? 'Create your first image repository'
                            : 'Create new repository'
                        : 'Edit repository')))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: function (e) {
                e.preventDefault();
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().saveProject());
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Modal"].Body, null, currentEditing ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__projectForm__["a" /* default */], __assign({ project: currentEditing }, { availableIntegrationsAsync: availableIntegrationsAsync, dispatch: dispatch, allroles: allroles }))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
                    textAlign: 'center',
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", null, "Choose a category, that most accurately describes the documents you want to archive -"),
                templatesAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: 250 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TemplatesLoader, { asyncResult: templatesAsync, prompt: 'Loading templates...' }, templatesAsync.result && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'imagelist-background', style: { marginBottom: '5px' } }, templatesAsync.result.map(function (t) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ATemplate, { key: t.name, template: t, dispatch: dispatch })); })))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small', validationState: 'success', style: { maxWidth: '400px', margin: 'auto', marginBottom: 5, magrinTop: 20 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'text', value: templateSearchPattern || '', placeholder: 'Narrow down your choices E.g. Invoices', onChange: function (e) {
                                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().templateSearchChanged(e.target.value));
                                } }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'searchTooltip' }, "Search for repository templates") },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-search', "aria-hidden": 'true' }))))))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Modal"].Footer, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ProjectSaveStatusLoader, { asyncResult: saveProjectResultAsync, prompt: 'saving' }, saveProjectResultAsync &&
                    saveProjectResultAsync.error &&
                    saveProjectResultAsync.error.Reason == 'mapping_conflicted' && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text-danger' },
                    "To commit this change all documents in all repositories would need to be re indexed which might take a long time.",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    "During this time search results will not be available.",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    "It is advisable to perform this task when search downtime is acceptable",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Checkbox"], { checked: currentEditing && currentEditing.reIndexAll, onChange: function (e) { }, onClick: function () {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateProjectParameter('reIndexAll', !(currentEditing && currentEditing.reIndexAll)));
                        } }, "Re Index all documents")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'warning', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().closeProjectEditor(true)); } }, "Cancel"),
                currentEditing && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'primary', type: 'submit', disabled: saveProjectResultAsync && saveProjectResultAsync.isLoading }, "Save repository"))))));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectEditor);


/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_typeahead_css_Typeahead_css__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_bootstrap_typeahead_css_Typeahead_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_bootstrap_typeahead_css_Typeahead_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projectFormField__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generated_ProjectFieldTypeModel__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_toggle_button__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_bootstrap_typeahead__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_bootstrap_typeahead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap_typeahead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_base_asyncLoader__ = __webpack_require__(5);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var IntegrationsLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_base_asyncLoader__["d" /* createLoaderView */])();
var borderRadiusStyle = { borderRadius: 0, backgroundColor: 'transparent' };
var IndexTitle = function () { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'indexesTooltip' }, "Indexes are used to search for documents in a repository") },
    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'color-orange' }, "Respository indexes"))); };
var PermissionsTitle = function () { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'color-orange' }, "Permissions"); };
/*
const _ProjectFieldList: React.SFC<WithMovabelFieldsProps & { dispatch, allroles: string[] }> = ({ fieldsHolder, fieldsToShow, dispatch, allroles }) => {

    return <div>
        {fieldsHolder && fieldsToShow.map((field, i) => {
            if (field.fieldType == ProjectFieldTypeModel.externalIntegration)
                return null;

            //not sure why Afield doesn't re-render at fierld change hack to make it render
            const theField = _.clone(field);

            return <div key={i} style={{ margin: '5px', display: 'inline-block', verticalAlign: 'top' }}>
                <AField field={theField}  {...{ dispatch, fieldsHolder, allroles}} />
            </div>
        })}
    </div>;
}

const ProjectFieldList = withMoveFields(_ProjectFieldList, { allowHide: false });
*/
var ProjectFieldList = function (_a) {
    var allFields = _a.allFields, dispatch = _a.dispatch, allroles = _a.allroles;
    var toShow = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](allFields || [], function (f) { return f.indexSortOrder || 0; }), function (f) { return f.fieldType != __WEBPACK_IMPORTED_MODULE_6__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].externalIntegration; });
    var lastIndex = toShow.length - 1;
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null, toShow.map(function (field, i) {
        //not sure why Afield doesn't re-render at fierld change hack to make it render
        var theField = __WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](field);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: i, style: { margin: '5px', display: 'inline-block', verticalAlign: 'top' } },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__projectFormField__["a" /* default */], __assign({ field: theField, isFirst: 0 == i, islast: i == lastIndex }, { dispatch: dispatch, allroles: allroles }))));
    })));
};
var ProjectForm = function (_a) {
    var dispatch = _a.dispatch, project = _a.project, availableIntegrationsAsync = _a.availableIntegrationsAsync, allroles = _a.allroles;
    var integrationStats = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](__WEBPACK_IMPORTED_MODULE_2_lodash__["keys"]((availableIntegrationsAsync && availableIntegrationsAsync.result) || {}), function (integrationName) { return ({
        integrationName: integrationName,
        active: __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](project.fields, function (field) {
            return field.fieldType == __WEBPACK_IMPORTED_MODULE_6__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].externalIntegration &&
                field.displayName == integrationName;
        }),
    }); });
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Row"], null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Col"], { sm: 4 },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: {
                        height: '300px',
                    } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Image"], { style: {
                            maxHeight: '100%',
                            margin: 'auto',
                        }, src: project.templateImage, responsive: true }))),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Col"], { sm: 8, style: { textAlign: 'left' } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], { validationState: project.name ? 'success' : 'error', style: { maxWidth: '400px', margin: 'auto' } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["InputGroup"], null,
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["InputGroup"].Addon, null,
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'projNameTooltip' }, "This is used to identify a group of documents archived in REV. Enter a name describing the documents you want to archive") },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-briefcase', "aria-hidden": 'true' }))),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], { type: 'text', placeholder: 'Repository name: E.g Miscellaneous documents, Receipts, Invoices, etc.', required: true, value: project.name, onChange: function (e) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateProjectName(e.target.value)); } }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"].Feedback, null))),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                    availableIntegrationsAsync && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](IntegrationsLoader, { asyncResult: availableIntegrationsAsync, prompt: 'loading integrations' }, availableIntegrationsAsync.result && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { marginTop: 10 } }, integrationStats.map(function (intgn) {
                        return intgn.active ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: intgn.integrationName },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'text-primary', style: { paddingRight: 2 } },
                                "Integrated with ",
                                intgn.integrationName),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { display: 'inline-block', marginBottom: 10 } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_toggle_button___default.a, { thumbIcon: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'showInttooltip' },
                                            "Enable ",
                                            intgn.integrationName,
                                            ' ') },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Image"], { src: "/plugins/" + availableIntegrationsAsync.result[intgn.integrationName].icon, style: { height: '95%', margin: 'auto' } })), activeLabel: 'ON', inactiveLabel: 'OFF', value: true, thumbStyle: borderRadiusStyle, trackStyle: borderRadiusStyle, onToggle: function (e) {
                                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().toggleIntegration(intgn.integrationName));
                                    } })),
                            __WEBPACK_IMPORTED_MODULE_2_lodash__["keys"](availableIntegrationsAsync.result[intgn.integrationName].options || {}).map(function (option) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: option, style: { display: 'inline-block', paddingLeft: 5 } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["DropdownButton"], { bsSize: 'xsmall', title: (intgn.active.integrationOptions &&
                                        intgn.active.integrationOptions[option]) ||
                                        '', id: 'dropdown-size-extra-small' }, availableIntegrationsAsync.result[intgn.integrationName].options[option].map(function (optVal) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"], { key: optVal, onClick: function () {
                                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateIntegrationOption(intgn.integrationName, option, optVal));
                                    } }, optVal)); })))); }))) : null;
                    }))))),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tabs"], { defaultActiveKey: 1, id: 'indexorpermissions', style: {
                            marginTop: 10,
                            backgroundColor: 'white',
                        } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tab"], { eventKey: 1, title: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](IndexTitle, null) },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { maxWidth: 400, margin: 'auto' } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], { bsSize: 'small', style: { textAlign: 'left', fontSize: 'smaller', margin: 10 } },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'info', onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().addField(null)); }, style: { padding: '2px' } },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'indexesTooltip' }, "Add another index field") },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, "Add another field")))),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ProjectFieldList, __assign({ allFields: project.fields }, { dispatch: dispatch, allroles: allroles })))),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tab"], { eventKey: 2, title: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](PermissionsTitle, null) },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("table", { style: { width: '100%', margin: 10 } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("thead", null, project['permissionsList'].length > 0 ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '30%', textAlign: 'center' } }, "role"),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '20%', textAlign: 'center' } }, "view"),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '20%', textAlign: 'center' } }, "edit"),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '20%', textAlign: 'center' } }, "delete"),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '10%', textAlign: 'center' } }))) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { colSpan: 3, style: { textAlign: 'center' } }, "All users have access to this repository")))),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tbody", null,
                                    project.permissionsList.map(function (p, i) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", { key: i },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '30%', textAlign: 'center' } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], { validationState: p.role ? 'success' : 'error' },
                                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["InputGroup"], null,
                                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_react_bootstrap_typeahead__["Typeahead"], { placeholder: 'enter role name', selected: p.role ? [p.role] : [], allowNew: true, newSelectionPrefix: 'new role :', onChange: function (value) {
                                                            if (value.length == 0)
                                                                return;
                                                            var newRole = value[0];
                                                            if (value[0].customOption)
                                                                newRole = value[0].label;
                                                            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateRoleName(i, newRole));
                                                        }, options: project.allroles || [] }),
                                                    p.role && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"].Feedback, null)))),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '20%', textAlign: 'center' } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Checkbox"], { checked: p.permissions.canView, onChange: function () {
                                                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updatePermission(i, 'canView', !p.permissions.canView));
                                                } })),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '20%', textAlign: 'center' } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Checkbox"], { checked: p.permissions.canEdit, onChange: function () {
                                                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updatePermission(i, 'canEdit', !p.permissions.canEdit));
                                                } })),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '30%', textAlign: 'center' } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Checkbox"], { checked: p.permissions.canDelete, onChange: function () {
                                                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updatePermission(i, 'canDelete', !p.permissions.canDelete));
                                                } })),
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { style: { width: '10%', textAlign: 'left' } },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { bsStyle: 'link', onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().removeRole(i)); } },
                                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tooltip"], { id: 'roleTooltipcanDelete' }, "Remove this role") },
                                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("i", { className: 'fa fa-times text-danger', style: { opacity: 0.8 }, "aria-hidden": 'true' })))))); }),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { colSpan: 4 },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().addnewRole()); }, bsSize: 'xs', bsStyle: 'primary', style: { margin: 5 } }, "Add role"),
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"], { onClick: function () {
                                                    //  dispatch(ensurePermissions().showUserRolesDialog(true))
                                                }, bsSize: 'xs', bsStyle: 'info', style: { margin: 5 } }, "Update user roles")))))),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Tab"], { eventKey: 3, title: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'color-orange' }, "Settings") },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { maxWidth: 400, margin: 'auto' } },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], { bsSize: 'small', style: { textAlign: 'left', margin: 10 } },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { style: { marginRight: 5 } }, "Full text OCR all images"),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { display: 'inline-block', marginBottom: 10 } },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_toggle_button___default.a, { activeLabel: 'ON', inactiveLabel: 'OFF', value: project.fullTextOcr, thumbStyle: borderRadiusStyle, trackStyle: borderRadiusStyle, onToggle: function (e) {
                                                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateProjectParameter('fullTextOcr', !project.fullTextOcr));
                                            } }))),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("hr", null),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"], { bsSize: 'small', style: { textAlign: 'left', fontSize: 'smaller', margin: 10 } },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { style: { marginRight: 5 } }, "Allow users to re-order fields"),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: { display: 'inline-block', marginBottom: 10 } },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_toggle_button___default.a, { activeLabel: 'ON', inactiveLabel: 'OFF', value: !project.noUserReorder, thumbStyle: borderRadiusStyle, trackStyle: borderRadiusStyle, onToggle: function (e) {
                                                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */])().updateProjectParameter('noUserReorder', !project.noUserReorder));
                                            } })))))))))));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectForm);


/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_select__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer__ = __webpack_require__(40);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var ProjectFieldForm = function (_a) {
    var isFirst = _a.isFirst, islast = _a.islast, dispatch = _a.dispatch, field = _a.field, 
    /*connectDragSource,*/ allroles = _a.allroles;
    var usesCustomField = !!field['usesCustomLookup'] ||
        !!(field.integrationOptions && field.integrationOptions['lookupType']);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small', style: { marginBottom: '0px' }, validationState: field.displayName ? null : 'error' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["DropdownButton"], { bsSize: 'small', componentClass: __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Button, id: 'field-dropdown-addon', title: __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */][field.fieldType], onSelect: function (e) {
                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'fieldType', e));
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].text }, " text"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].number }, "number"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].date }, "date"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].currency }, "currency"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], { eventKey: __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].user_list }, "Custom values")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'text', value: field.displayName || '', required: true, placeholder: 'Index name', onChange: function (e) {
                        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'displayName', e.target.value));
                    } }))),
        (field.fieldType === __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].user_list ||
            (usesCustomField &&
                field.integrationOptions &&
                field.integrationOptions['lookupType'] == 'user_list' &&
                __WEBPACK_IMPORTED_MODULE_3__generated_ProjectFieldTypeModel__["a" /* ProjectFieldTypeModel */].text === field.fieldType)) && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small', style: { marginBottom: '0px' }, validationState: (field.userlistValues || []).length > 0 ? null : 'error' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'text', required: true, onChange: function (e) {
                    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'userlistValues_stringified', e.target.value));
                }, value: field['userlistValues_stringified'] ||
                    JSON.stringify(field.userlistValues || []).slice(1, -1), placeholder: 'Custom values (Json array)' }))),
        usesCustomField && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'projNameLookupType' }, "This value determines the typeahead lookup for this field") },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "lookup type"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'text', placeholder: 'lookup type', value: (field.integrationOptions && field.integrationOptions['lookupType']) || '', onChange: function (e) {
                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'integrationOptions', __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"]({}, field.integrationOptions || {}, { lookupType: e.target.value })));
                    } })))),
        field.noIndexForRoles && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null, "Hide for roles"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_select__["default"], { isMulti: true, hideSelectedOptions: true, placeHolder: 'all roles', options: allroles || [], value: field.noIndexForRoles, styles: {
                        menu: function (styles) { return (__assign({}, styles, { zIndex: 10 })); },
                    }, onChange: function (selected, multiEvent) {
                        switch (multiEvent.action) {
                            case 'remove-value':
                                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'noIndexForRoles', __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](field.noIndexForRoles, function (f) { return f != multiEvent.removedValue; })));
                                break;
                            case 'select-option':
                                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'noIndexForRoles', __WEBPACK_IMPORTED_MODULE_1_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](field.noIndexForRoles, multiEvent.option))));
                                break;
                            case 'clear':
                                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'noIndexForRoles', []));
                                break;
                            default:
                                console.warn("multiselect option " + multiEvent.action + " not supported");
                                break;
                        }
                    }, isSearchable: false, isClearable: true, getOptionLabel: function (option) { return option; }, getOptionValue: function (option) { return option; } })))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], { bsSize: 'small', style: { textAlign: 'right', fontSize: 'smaller' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: 'text-muted', style: { marginRight: 5 } },
                field.required && ' required',
                field.unique && ' unique',
                field.documentRestriction && ' documentRestriction'),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["DropdownButton"], { title: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-gear', "aria-hidden": 'true' }), id: "fileddropdown_" + field.displayName, bsSize: 'xsmall', bsStyle: 'info', pullRight: true, dropup: true },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: 'checkbox', checked: !!field.required, onChange: function (_) {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'required', !field.required));
                        } }),
                    "Required"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: 'checkbox', checked: !!field.unique, onChange: function (_) {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'unique', !field.unique));
                        } }),
                    "Unique"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: 'checkbox', checked: !!usesCustomField, onChange: function (e) {
                            e.preventDefault();
                            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'usesCustomLookup', !usesCustomField));
                        } }),
                    "Uses custom lookup"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: 'checkbox', checked: !!field.noIndexForRoles, onChange: function (e) {
                            e.preventDefault();
                            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'noIndexForRoles', field.noIndexForRoles ? null : []));
                        } }),
                    "Hide Index for selected roles"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: 'checkbox', checked: !!field.documentRestriction, onChange: function (_) {
                            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().updateField(field, 'documentRestriction', !field.documentRestriction));
                        } }),
                    "Document restriction"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'link', onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().removeField(field)); }, style: { padding: '2px', marginLeft: '10px' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'indexesTooltip' }, "Remove this index") },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-times text-danger', style: { opacity: 0.8 }, "aria-hidden": 'true' }))),
            !isFirst && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'link', onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().moveUpField(field)); }, style: { padding: '2px' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'indexesMoveUp' }, "move up") },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-arrow-up', "aria-hidden": 'true' })))),
            !islast && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsStyle: 'link', onClick: function (_) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */])().moveUpField(field, true)); }, style: { padding: '2px' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Tooltip"], { id: 'indexesMoveDown' }, "move down") },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: 'fa fa-arrow-down', "aria-hidden": 'true' })))))));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectFieldForm);
//export default moveField(ProjectFieldForm, { allowHide:false});


/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(82);



var Settingfield = function (_a) {
    var dispatch = _a.dispatch, setting = _a.setting, label = _a.label, myKey = _a.myKey, autoFocus = _a.autoFocus;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormGroup"], { controlId: myKey, validationState: setting.validations && setting.validations[myKey] ? 'error' : null },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["InputGroup"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["InputGroup"].Addon, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Tooltip"], { id: 'emailaddresstooltip' }, label) },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, label))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"], { autoFocus: autoFocus, type: 'text', value: setting[myKey] || '', placeholder: "enter " + label + " ...", onChange: function (e) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */])().updateProfile(myKey, e.target.value)); } })),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["FormControl"].Feedback, null),
        setting.validations && setting.validations[myKey] && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["HelpBlock"], null, setting.validations[myKey]))));
};
/* harmony default export */ __webpack_exports__["a"] = (Settingfield);


/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createToken__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_asyncLoader__ = __webpack_require__(5);
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







var WorkspaceLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_base_asyncLoader__["d" /* createLoaderView */])();
var CustomDomain = /** @class */ (function (_super) {
    __extends(CustomDomain, _super);
    function CustomDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDomain.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().loadWorkSpaceforEdit());
    };
    CustomDomain.prototype.render = function () {
        var _a = this.props, workspaceEditAsync = _a.workspaceEditAsync, dispatch = _a.dispatch;
        return workspaceEditAsync ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](WorkspaceLoader, { asyncResult: workspaceEditAsync, prompt: 'loading workspace details' }, workspaceEditAsync.result && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: 'mainInfo text-center container', onSubmit: function (e) {
                    e.preventDefault();
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().saveWorkSpace());
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null, "Inactivity timeout"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], { type: 'number', value: workspaceEditAsync.result.workSpace.inactivityTimeoutMin || '', placeholder: 'default : 15', onChange: function (e) {
                                return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateWorkSpaceProp('inactivityTimeoutMin', e.target.value));
                            } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["InputGroup"].Addon, null, "minutes")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"].Feedback, null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["HelpBlock"], null,
                        "If inactive for these minutes, the current session will time out and the user license will be released.",
                        ' ')),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                workspaceEditAsync.result.workSpace &&
                    workspaceEditAsync.result.workSpace.openIdProviders && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Well"], null,
                    "Using Authentication Providers :",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, __WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](workspaceEditAsync.result.workSpace.openIdProviders).map(function (k) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { key: k },
                        k,
                        " : ",
                        workspaceEditAsync.result.workSpace.openIdProviders[k].authority)); })))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsSize: 'large', bsStyle: 'primary', type: 'submit' }, "Save and continue to my workspace...")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'mainInfo text-center container', style: {
                    marginTop: 10,
                    padding: 20,
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__createToken__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsSize: 'small', block: true, bsStyle: 'warning', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateServerTokenProp('validityDays', 1)); } }, "Create a server login token for my workspace...")))))) : null;
    };
    return CustomDomain;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().getCurrentState(state);
})(CustomDomain));


/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_template_parser__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_template_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modules_template_parser__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "templateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__modules_template_parser___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_template_formatter__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_template_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modules_template_formatter__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "templateFormatter", function() { return __WEBPACK_IMPORTED_MODULE_1__modules_template_formatter___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_ReactInput__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_ReactInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_ReactInput__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ReactInput", function() { return __WEBPACK_IMPORTED_MODULE_2__modules_ReactInput___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_parse_digit__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_parse_digit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_parse_digit__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "parseDigit", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_parse_digit___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_parse__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__modules_parse__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_4__modules_parse___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_format__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__modules_format__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "format", function() { return __WEBPACK_IMPORTED_MODULE_5__modules_format___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_input_control__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_input_control___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__modules_input_control__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__modules_input_control__, "onChange")) __webpack_require__.d(__webpack_exports__, "onChange", function() { return __WEBPACK_IMPORTED_MODULE_6__modules_input_control__["onChange"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__modules_input_control__, "onPaste")) __webpack_require__.d(__webpack_exports__, "onPaste", function() { return __WEBPACK_IMPORTED_MODULE_6__modules_input_control__["onPaste"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__modules_input_control__, "onCut")) __webpack_require__.d(__webpack_exports__, "onCut", function() { return __WEBPACK_IMPORTED_MODULE_6__modules_input_control__["onCut"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__modules_input_control__, "onKeyDown")) __webpack_require__.d(__webpack_exports__, "onKeyDown", function() { return __WEBPACK_IMPORTED_MODULE_6__modules_input_control__["onKeyDown"]; });














/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(724);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _parse2 = __webpack_require__(557);

var _parse3 = _interopRequireDefault(_parse2);

var _inputControl = __webpack_require__(623);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Usage:
//
// <ReactInput
// 	value={this.state.phone}
// 	onChange={phone => this.setState({ phone })}
// 	parse={character => character}
// 	format={value => ({ text: value, template: 'xxxxxxxx' })}/>
//
var ReactInput = (_temp2 = _class = function (_React$Component) {
	_inherits(ReactInput, _React$Component);

	function ReactInput() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ReactInput);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactInput.__proto__ || Object.getPrototypeOf(ReactInput)).call.apply(_ref, [this].concat(args))), _this), _this.storeInstance = function (instance) {
			_this.input = instance;
		}, _this.getInputElement = function () {
			return _this.input;
		}, _this.onChange = function (event) {
			var _this$props = _this.props,
			    parse = _this$props.parse,
			    format = _this$props.format;


			return (0, _inputControl.onChange)(event, _this.getInputElement(), parse, format, _this.props.onChange);
		}, _this.onPaste = function (event) {
			var _this$props2 = _this.props,
			    parse = _this$props2.parse,
			    format = _this$props2.format;


			return (0, _inputControl.onPaste)(event, _this.getInputElement(), parse, format, _this.props.onChange);
		}, _this.onCut = function (event) {
			var _this$props3 = _this.props,
			    parse = _this$props3.parse,
			    format = _this$props3.format;


			return (0, _inputControl.onCut)(event, _this.getInputElement(), parse, format, _this.props.onChange);
		}, _this.onBlur = function (event) {
			var _this$props4 = _this.props,
			    parse = _this$props4.parse,
			    onBlur = _this$props4.onBlur;

			// This `onBlur` interceptor is a workaround for `redux-form`,
			// so that it gets the right (parsed, not the formatted one)
			// `event.target.value` in its `onBlur` handler.

			if (onBlur) {
				var _event = _extends({}, event, {
					target: _extends({}, event.target, {
						value: (0, _parse3.default)(_this.getInputElement().value, undefined, parse).value
					})

					// For `redux-form` event detection.
					// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
				});_event.stopPropagation = event.stopPropagation;
				_event.preventDefault = event.preventDefault;

				onBlur(_event);
			}
		}, _this.onKeyDown = function (event) {
			var _this$props5 = _this.props,
			    parse = _this$props5.parse,
			    format = _this$props5.format;


			if (_this.props.onKeyDown) {
				_this.props.onKeyDown(event);
			}

			return (0, _inputControl.onKeyDown)(event, _this.getInputElement(), parse, format, _this.props.onChange);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ReactInput, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    value = _props.value,
			    parse = _props.parse,
			    format = _props.format,
			    inputComponent = _props.inputComponent,
			    rest = _objectWithoutProperties(_props, ['value', 'parse', 'format', 'inputComponent']);

			// Non-string `inputComponent`s would work in this case
			// but it would also introduce a caret reset bug:
			// the caret position would reset on each input.
			// The origins of this bug are unknown, they may be
			// somehow related to the `ref` property
			// being intercepted by React here.


			return _react2.default.createElement(inputComponent, _extends({}, rest, {
				ref: this.storeInstance,
				value: format(isEmpty(value) ? '' : value).text,
				onKeyDown: this.onKeyDown,
				onChange: this.onChange,
				onPaste: this.onPaste,
				onCut: this.onCut,
				onBlur: this.onBlur
			}));
		}

		/**
   * Returns `<input/>` DOM Element.
   * @return {DOMElement}
   */


		// This handler is a workaround for `redux-form`.

	}, {
		key: 'focus',


		/**
   * Focuses the `<input/>`.
   * Can be called manually.
   */
		value: function focus() {
			this.getInputElement().focus();
		}
	}]);

	return ReactInput;
}(_react2.default.Component), _class.propTypes = {
	// Parses a single characher of `<input/>` text.
	parse: _propTypes2.default.func.isRequired,

	// Formats `value` into `<input/>` text.
	format: _propTypes2.default.func.isRequired,

	// Renders `<input/>` by default.
	inputComponent: _propTypes2.default.elementType.isRequired,

	// `<input/>` `type` attribute.
	type: _propTypes2.default.string.isRequired,

	// Is parsed from <input/> text.
	value: _propTypes2.default.string,

	// This handler is called each time `<input/>` text is changed.
	onChange: _propTypes2.default.func.isRequired,

	// This `onBlur` interceptor is a workaround for `redux-form`,
	// so that it gets the parsed `value` in its `onBlur` handler,
	// not the formatted text.
	onBlur: _propTypes2.default.func,

	// Passthrough
	onKeyDown: _propTypes2.default.func
}, _class.defaultProps = {
	// Renders `<input/>` by default.
	inputComponent: 'input',

	// `<input/>` `type` attribute.
	type: 'text'
}, _temp2);
exports.default = ReactInput;


function isEmpty(value) {
	return value === undefined || value === null;
}
//# sourceMappingURL=ReactInput.js.map

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = close_braces;

var _helpers = __webpack_require__(556);

function close_braces(retained_template, template) {
	var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
	var empty_placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

	var cut_before = retained_template.length;

	var opening_braces = (0, _helpers.count_occurences)('(', retained_template);
	var closing_braces = (0, _helpers.count_occurences)(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		retained_template += template[cut_before].replace(placeholder, empty_placeholder);

		if (template[cut_before] === ')') {
			dangling_braces--;
		}

		cut_before++;
	}

	return retained_template;
}
//# sourceMappingURL=close braces.js.map

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getSelection = getSelection;
exports.getOperation = getOperation;
exports.getCaretPosition = getCaretPosition;
exports.setCaretPosition = setCaretPosition;
// Gets <input/> selection bounds
function getSelection(element) {
	// If no selection, return nothing
	if (element.selectionStart === element.selectionEnd) {
		return;
	}

	return { start: element.selectionStart, end: element.selectionEnd };
}

// Key codes
var Keys = exports.Keys = {
	Backspace: 8,
	Delete: 46

	// Finds out the operation to be intercepted and performed
	// based on the key down event `keyCode`.
};function getOperation(event) {
	switch (event.keyCode) {
		case Keys.Backspace:
			return 'Backspace';

		case Keys.Delete:
			return 'Delete';
	}
}

// Gets <input/> caret position
function getCaretPosition(element) {
	return element.selectionStart;
}

// Sets <input/> caret position
function setCaretPosition(element, caret_position) {
	// Sanity check
	if (caret_position === undefined) {
		return;
	}

	// Set caret position.
	// There has been an issue with caret positioning on Android devices.
	// https://github.com/catamphetamine/input-format/issues/2
	// I was revisiting this issue and looked for similar issues in other libraries.
	// For example, there's [`text-mask`](https://github.com/text-mask/text-mask) library.
	// They've had exactly the same issue when the caret seemingly refused to be repositioned programmatically.
	// The symptoms were the same: whenever the caret passed through a non-digit character of a mask (a whitespace, a bracket, a dash, etc), it looked as if it placed itself one character before its correct position.
	// https://github.com/text-mask/text-mask/issues/300
	// They seem to have found a basic fix for it: calling `input.setSelectionRange()` in a timeout rather than instantly for Android devices.
	// https://github.com/text-mask/text-mask/pull/400/files
	// I've implemented the same workaround here.
	if (isAndroid()) {
		setTimeout(function () {
			return element.setSelectionRange(caret_position, caret_position);
		}, 0);
	} else {
		element.setSelectionRange(caret_position, caret_position);
	}
}

function isAndroid() {
	// `navigator` is not defined when running mocha tests.
	if (typeof navigator !== 'undefined') {
		return ANDROID_USER_AGENT_REG_EXP.test(navigator.userAgent);
	}
}

var ANDROID_USER_AGENT_REG_EXP = /Android/i;
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = edit;
// Edits text `value` (if `operation` is passed) and repositions the `caret` if needed.
//
// Example:
//
// value - '88005553535'
// caret - 2 // starting from 0; is positioned before the first zero
// operation - 'Backspace'
//
// Returns
// {
// 	value: '8005553535'
// 	caret: 1
// }
//
// Currently supports just 'Delete' and 'Backspace' operations
//
function edit(value, caret, operation) {
	switch (operation) {
		case 'Backspace':
			// If there exists the previous character,
			// then erase it and reposition the caret.
			if (caret > 0) {
				// Remove the previous character
				value = value.slice(0, caret - 1) + value.slice(caret);
				// Position the caret where the previous (erased) character was
				caret--;
			}
			break;

		case 'Delete':
			// Remove current digit (if any)
			value = value.slice(0, caret) + value.slice(caret + 1);
			break;
	}

	return { value: value, caret: caret };
}
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (character, value) {
	return DIGITS[character];
};

// Copied from `libphonenumber-js`:
// https://github.com/catamphetamine/libphonenumber-js/blob/master/source/parse.js
//
// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
var DIGITS = exports.DIGITS = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'\uFF10': '0', // Fullwidth digit 0
	'\uFF11': '1', // Fullwidth digit 1
	'\uFF12': '2', // Fullwidth digit 2
	'\uFF13': '3', // Fullwidth digit 3
	'\uFF14': '4', // Fullwidth digit 4
	'\uFF15': '5', // Fullwidth digit 5
	'\uFF16': '6', // Fullwidth digit 6
	'\uFF17': '7', // Fullwidth digit 7
	'\uFF18': '8', // Fullwidth digit 8
	'\uFF19': '9', // Fullwidth digit 9
	'\u0660': '0', // Arabic-indic digit 0
	'\u0661': '1', // Arabic-indic digit 1
	'\u0662': '2', // Arabic-indic digit 2
	'\u0663': '3', // Arabic-indic digit 3
	'\u0664': '4', // Arabic-indic digit 4
	'\u0665': '5', // Arabic-indic digit 5
	'\u0666': '6', // Arabic-indic digit 6
	'\u0667': '7', // Arabic-indic digit 7
	'\u0668': '8', // Arabic-indic digit 8
	'\u0669': '9', // Arabic-indic digit 9
	'\u06F0': '0', // Eastern-Arabic digit 0
	'\u06F1': '1', // Eastern-Arabic digit 1
	'\u06F2': '2', // Eastern-Arabic digit 2
	'\u06F3': '3', // Eastern-Arabic digit 3
	'\u06F4': '4', // Eastern-Arabic digit 4
	'\u06F5': '5', // Eastern-Arabic digit 5
	'\u06F6': '6', // Eastern-Arabic digit 6
	'\u06F7': '7', // Eastern-Arabic digit 7
	'\u06F8': '8', // Eastern-Arabic digit 8
	'\u06F9': '9' // Eastern-Arabic digit 9
};
//# sourceMappingURL=parse digit.js.map

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (template, placeholder, parse) {
	if (typeof placeholder === 'function') {
		parse = placeholder;
		placeholder = 'x';
	}

	var max_characters = (0, _helpers.count_occurences)(placeholder, template);

	return function (character, value) {
		if (value.length < max_characters) {
			return parse(character, value);
		}
	};
};

var _helpers = __webpack_require__(556);
//# sourceMappingURL=template parser.js.map

/***/ }),

/***/ 722:
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
  var ReactPropTypesSecret = __webpack_require__(625);
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

/***/ 723:
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

var ReactPropTypesSecret = __webpack_require__(625);
var checkPropTypes = __webpack_require__(722);

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

/***/ 724:
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
  module.exports = __webpack_require__(723)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LRUCache; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://medium.com/dsinjs/implementing-lru-cache-in-javascript-94ba6755cda9
var Node = function Node(key, value) {
  var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var prev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  _classCallCheck(this, Node);

  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
};

var LRUCache =
/*#__PURE__*/
function () {
  //set default limit of 10 if limit is not passed.
  function LRUCache() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    _classCallCheck(this, LRUCache);

    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  } // Write Node to head of LinkedList
  // update cache with Node key and Node reference


  _createClass(LRUCache, [{
    key: "put",
    value: function put(key, value) {
      this.ensureLimit();

      if (!this.head) {
        this.head = this.tail = new Node(key, value);
      } else {
        var node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      } //Update the cache map


      this.cache[key] = this.head;
      this.size++;
    } // Read from cache map and make that node as new Head of LinkedList

  }, {
    key: "get",
    value: function get(key) {
      if (this.cache[key]) {
        var value = this.cache[key].value; // node removed from it's position and cache

        this.remove(key); // write node again to the head of LinkedList to make it most recently used

        this.put(key, value);
        return value;
      }

      console.log("Item not available in cache for key ".concat(key));
    }
  }, {
    key: "ensureLimit",
    value: function ensureLimit() {
      if (this.size === this.limit) {
        this.remove(this.tail.key);
      }
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var node = this.cache[key];

      if (node.prev !== null) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }

      if (node.next !== null) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }

      delete this.cache[key];
      this.size--;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.cache = {};
    } // // Invokes the callback function with every node of the chain and the index of the node.
    // forEach(fn) {
    //   let node = this.head;
    //   let counter = 0;
    //   while (node) {
    //     fn(node, counter);
    //     node = node.next;
    //     counter++;
    //   }
    // }
    // // To iterate over LRU with a 'for...of' loop
    // *[Symbol.iterator]() {
    //   let node = this.head;
    //   while (node) {
    //     yield node;
    //     node = node.next;
    //   }
    // }

  }]);

  return LRUCache;
}();


//# sourceMappingURL=LRUCache.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export containsMoreThanOneSlashInNationalNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate___ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parseDigits__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(488);



/**
 * Leniency when finding potential phone numbers in text segments
 * The levels here are ordered in increasing strictness.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * Phone numbers accepted are "possible", but not necessarily "valid".
   */
  POSSIBLE: function POSSIBLE(number, candidate, metadata) {
    return true;
  },

  /**
   * Phone numbers accepted are "possible" and "valid".
   * Numbers written in national format must have their national-prefix
   * present if it is usually written for a number of this type.
   */
  VALID: function VALID(number, candidate, metadata) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate___["a" /* default */])(number, undefined, metadata) || !containsOnlyValidXChars(number, candidate.toString(), metadata)) {
      return false;
    } // Skipped for simplicity.
    // return isNationalPrefixPresentIfRequired(number, metadata)


    return true;
  },

  /**
   * Phone numbers accepted are "valid" and
   * are grouped in a possible way for this locale. For example, a US number written as
   * "65 02 53 00 00" and "650253 0000" are not accepted at this leniency level, whereas
   * "650 253 0000", "650 2530000" or "6502530000" are.
   * Numbers with more than one '/' symbol in the national significant number
   * are also dropped at this level.
   *
   * Warning: This level might result in lower coverage especially for regions outside of
   * country code "+1". If you are not sure about which level to use,
   * email the discussion group libphonenumber-discuss@googlegroups.com.
   */
  STRICT_GROUPING: function STRICT_GROUPING(number, candidate, metadata, regExpCache) {
    var candidateString = candidate.toString();

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate___["a" /* default */])(number, undefined, metadata) || !containsOnlyValidXChars(number, candidateString, metadata) || containsMoreThanOneSlashInNationalNumber(number, candidateString) || !isNationalPrefixPresentIfRequired(number, metadata)) {
      return false;
    }

    return checkNumberGroupingIsValid(number, candidate, metadata, allNumberGroupsRemainGrouped, regExpCache);
  },

  /**
   * Phone numbers accepted are {@linkplain PhoneNumberUtil#isValidNumber(PhoneNumber) valid} and
   * are grouped in the same way that we would have formatted it, or as a single block. For
   * example, a US number written as "650 2530000" is not accepted at this leniency level, whereas
   * "650 253 0000" or "6502530000" are.
   * Numbers with more than one '/' symbol are also dropped at this level.
   * <p>
   * Warning: This level might result in lower coverage especially for regions outside of country
   * code "+1". If you are not sure about which level to use, email the discussion group
   * libphonenumber-discuss@googlegroups.com.
   */
  EXACT_GROUPING: function EXACT_GROUPING(number, candidate, metadata, regExpCache) {
    var candidateString = candidate.toString();

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate___["a" /* default */])(number, undefined, metadata) || !containsOnlyValidXChars(number, candidateString, metadata) || containsMoreThanOneSlashInNationalNumber(number, candidateString) || !isNationalPrefixPresentIfRequired(number, metadata)) {
      return false;
    }

    return checkNumberGroupingIsValid(number, candidate, metadata, allNumberGroupsAreExactlyPresent, regExpCache);
  }
});

function containsOnlyValidXChars(number, candidate, metadata) {
  // The characters 'x' and 'X' can be (1) a carrier code, in which case they always precede the
  // national significant number or (2) an extension sign, in which case they always precede the
  // extension number. We assume a carrier code is more than 1 digit, so the first case has to
  // have more than 1 consecutive 'x' or 'X', whereas the second case can only have exactly 1 'x'
  // or 'X'. We ignore the character if it appears as the last character of the string.
  for (var index = 0; index < candidate.length - 1; index++) {
    var charAtIndex = candidate.charAt(index);

    if (charAtIndex === 'x' || charAtIndex === 'X') {
      var charAtNextIndex = candidate.charAt(index + 1);

      if (charAtNextIndex === 'x' || charAtNextIndex === 'X') {
        // This is the carrier code case, in which the 'X's always precede the national
        // significant number.
        index++;

        if (util.isNumberMatch(number, candidate.substring(index)) != MatchType.NSN_MATCH) {
          return false;
        } // This is the extension sign case, in which the 'x' or 'X' should always precede the
        // extension number.

      } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parseDigits__["b" /* default */])(candidate.substring(index)) !== number.ext) {
        return false;
      }
    }
  }

  return true;
}

function isNationalPrefixPresentIfRequired(number, _metadata) {
  // First, check how we deduced the country code. If it was written in international format, then
  // the national prefix is not required.
  if (number.getCountryCodeSource() != 'FROM_DEFAULT_COUNTRY') {
    return true;
  }

  var phoneNumberRegion = util.getRegionCodeForCountryCode(number.getCountryCode());
  var metadata = util.getMetadataForRegion(phoneNumberRegion);

  if (metadata == null) {
    return true;
  } // Check if a national prefix should be present when formatting this number.


  var nationalNumber = util.getNationalSignificantNumber(number);
  var formatRule = util.chooseFormattingPatternForNumber(metadata.numberFormats(), nationalNumber); // To do this, we check that a national prefix formatting rule was present
  // and that it wasn't just the first-group symbol ($1) with punctuation.

  if (formatRule && formatRule.getNationalPrefixFormattingRule().length > 0) {
    if (formatRule.getNationalPrefixOptionalWhenFormatting()) {
      // The national-prefix is optional in these cases, so we don't need to check if it was
      // present.
      return true;
    }

    if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(formatRule.getNationalPrefixFormattingRule())) {
      // National Prefix not needed for this number.
      return true;
    } // Normalize the remainder.


    var rawInputCopy = PhoneNumberUtil.normalizeDigitsOnly(number.getRawInput()); // Check if we found a national prefix and/or carrier code at the start of the raw input, and
    // return the result.

    return util.maybeStripNationalPrefixAndCarrierCode(rawInputCopy, metadata, null);
  }

  return true;
}

function containsMoreThanOneSlashInNationalNumber(number, candidate) {
  var firstSlashInBodyIndex = candidate.indexOf('/');

  if (firstSlashInBodyIndex < 0) {
    // No slashes, this is okay.
    return false;
  } // Now look for a second one.


  var secondSlashInBodyIndex = candidate.indexOf('/', firstSlashInBodyIndex + 1);

  if (secondSlashInBodyIndex < 0) {
    // Only one slash, this is okay.
    return false;
  } // If the first slash is after the country calling code, this is permitted.


  var candidateHasCountryCode = number.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || number.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN;

  if (candidateHasCountryCode && PhoneNumberUtil.normalizeDigitsOnly(candidate.substring(0, firstSlashInBodyIndex)) === String(number.getCountryCode())) {
    // Any more slashes and this is illegal.
    return candidate.slice(secondSlashInBodyIndex + 1).indexOf('/') >= 0;
  }

  return true;
}

function checkNumberGroupingIsValid(number, candidate, metadata, checkGroups, regExpCache) {
  var normalizedCandidate = normalizeDigits(candidate, true
  /* keep non-digits */
  );
  var formattedNumberGroups = getNationalNumberGroups(metadata, number, null);

  if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
    return true;
  } // If this didn't pass, see if there are any alternate formats that match, and try them instead.


  var alternateFormats = MetadataManager.getAlternateFormatsForCountry(number.getCountryCode());
  var nationalSignificantNumber = util.getNationalSignificantNumber(number);

  if (alternateFormats) {
    for (var _iterator = alternateFormats.numberFormats(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var alternateFormat = _ref;

      if (alternateFormat.leadingDigitsPatterns().length > 0) {
        // There is only one leading digits pattern for alternate formats.
        var leadingDigitsRegExp = regExpCache.getPatternForRegExp('^' + alternateFormat.leadingDigitsPatterns()[0]);

        if (!leadingDigitsRegExp.test(nationalSignificantNumber)) {
          // Leading digits don't match; try another one.
          continue;
        }
      }

      formattedNumberGroups = getNationalNumberGroups(metadata, number, alternateFormat);

      if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
        return true;
      }
    }
  }

  return false;
}
/**
 * Helper method to get the national-number part of a number, formatted without any national
 * prefix, and return it as a set of digit blocks that would be formatted together following
 * standard formatting rules.
 */


function getNationalNumberGroups(metadata, number, formattingPattern) {
  if (formattingPattern) {
    // We format the NSN only, and split that according to the separator.
    var nationalSignificantNumber = util.getNationalSignificantNumber(number);
    return util.formatNsnUsingPattern(nationalSignificantNumber, formattingPattern, 'RFC3966', metadata).split('-');
  } // This will be in the format +CC-DG1-DG2-DGX;ext=EXT where DG1..DGX represents groups of digits.


  var rfc3966Format = formatNumber(number, 'RFC3966', metadata); // We remove the extension part from the formatted string before splitting it into different
  // groups.

  var endIndex = rfc3966Format.indexOf(';');

  if (endIndex < 0) {
    endIndex = rfc3966Format.length;
  } // The country-code will have a '-' following it.


  var startIndex = rfc3966Format.indexOf('-') + 1;
  return rfc3966Format.slice(startIndex, endIndex).split('-');
}

function allNumberGroupsAreExactlyPresent(metadata, number, normalizedCandidate, formattedNumberGroups) {
  var candidateGroups = normalizedCandidate.split(NON_DIGITS_PATTERN); // Set this to the last group, skipping it if the number has an extension.

  var candidateNumberGroupIndex = number.hasExtension() ? candidateGroups.length - 2 : candidateGroups.length - 1; // First we check if the national significant number is formatted as a block.
  // We use contains and not equals, since the national significant number may be present with
  // a prefix such as a national number prefix, or the country code itself.

  if (candidateGroups.length == 1 || candidateGroups[candidateNumberGroupIndex].contains(util.getNationalSignificantNumber(number))) {
    return true;
  } // Starting from the end, go through in reverse, excluding the first group, and check the
  // candidate and number groups are the same.


  var formattedNumberGroupIndex = formattedNumberGroups.length - 1;

  while (formattedNumberGroupIndex > 0 && candidateNumberGroupIndex >= 0) {
    if (candidateGroups[candidateNumberGroupIndex] !== formattedNumberGroups[formattedNumberGroupIndex]) {
      return false;
    }

    formattedNumberGroupIndex--;
    candidateNumberGroupIndex--;
  } // Now check the first group. There may be a national prefix at the start, so we only check
  // that the candidate group ends with the formatted number group.


  return candidateNumberGroupIndex >= 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* endsWith */])(candidateGroups[candidateNumberGroupIndex], formattedNumberGroups[0]);
}

function allNumberGroupsRemainGrouped(metadata, number, normalizedCandidate, formattedNumberGroups) {
  var fromIndex = 0;

  if (number.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
    // First skip the country code if the normalized candidate contained it.
    var countryCode = String(number.getCountryCode());
    fromIndex = normalizedCandidate.indexOf(countryCode) + countryCode.length();
  } // Check each group of consecutive digits are not broken into separate groupings in the
  // {@code normalizedCandidate} string.


  for (var i = 0; i < formattedNumberGroups.length; i++) {
    // Fails if the substring of {@code normalizedCandidate} starting from {@code fromIndex}
    // doesn't contain the consecutive digits in formattedNumberGroups[i].
    fromIndex = normalizedCandidate.indexOf(formattedNumberGroups[i], fromIndex);

    if (fromIndex < 0) {
      return false;
    } // Moves {@code fromIndex} forward.


    fromIndex += formattedNumberGroups[i].length();

    if (i == 0 && fromIndex < normalizedCandidate.length()) {
      // We are at the position right after the NDC. We get the region used for formatting
      // information based on the country code in the phone number, rather than the number itself,
      // as we do not need to distinguish between different countries with the same country
      // calling code and this is faster.
      var region = util.getRegionCodeForCountryCode(number.getCountryCode());

      if (util.getNddPrefixForRegion(region, true) != null && Character.isDigit(normalizedCandidate.charAt(fromIndex))) {
        // This means there is no formatting symbol after the NDC. In this case, we only
        // accept the number if there is no formatting symbol at all in the number, except
        // for extensions. This is only important for countries with national prefixes.
        var nationalSignificantNumber = util.getNationalSignificantNumber(number);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* startsWith */])(normalizedCandidate.slice(fromIndex - formattedNumberGroups[i].length), nationalSignificantNumber);
      }
    }
  } // The check here makes sure that we haven't mistakenly already used the extension to
  // match the last group of the subscriber number. Note the extension cannot have
  // formatting in-between digits.


  return normalizedCandidate.slice(fromIndex).contains(number.getExtension());
}
//# sourceMappingURL=Leniency.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegExpCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LRUCache__ = __webpack_require__(727);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // A cache for frequently used country-specific regular expressions. Set to 32 to cover ~2-3
// countries being used for the same doc with ~10 patterns for each country. Some pages will have
// a lot more countries in use, but typically fewer numbers for each so expanding the cache for
// that use-case won't have a lot of benefit.

var RegExpCache =
/*#__PURE__*/
function () {
  function RegExpCache(size) {
    _classCallCheck(this, RegExpCache);

    this.cache = new __WEBPACK_IMPORTED_MODULE_0__LRUCache__["a" /* default */](size);
  }

  _createClass(RegExpCache, [{
    key: "getPatternForRegExp",
    value: function getPatternForRegExp(pattern) {
      var regExp = this.cache.get(pattern);

      if (!regExp) {
        regExp = new RegExp('^' + pattern);
        this.cache.put(pattern, regExp);
      }

      return regExp;
    }
  }]);

  return RegExpCache;
}();


//# sourceMappingURL=RegExpCache.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEAD_CLASS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isValidCandidate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utf_8__ = __webpack_require__(629);
// Copy-pasted from `PhoneNumberMatcher.js`.



var OPENING_PARENS = "(\\[\uFF08\uFF3B";
var CLOSING_PARENS = ")\\]\uFF09\uFF3D";
var NON_PARENS = "[^".concat(OPENING_PARENS).concat(CLOSING_PARENS, "]");
var LEAD_CLASS = "[".concat(OPENING_PARENS).concat(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* PLUS_CHARS */], "]"); // Punctuation that may be at the start of a phone number - brackets and plus signs.

var LEAD_CLASS_LEADING = new RegExp('^' + LEAD_CLASS); // Limit on the number of pairs of brackets in a phone number.

var BRACKET_PAIR_LIMIT = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* limit */])(0, 3);
/**
 * Pattern to check that brackets match. Opening brackets should be closed within a phone number.
 * This also checks that there is something inside the brackets. Having no brackets at all is also
 * fine.
 *
 * An opening bracket at the beginning may not be closed, but subsequent ones should be.  It's
 * also possible that the leading bracket was dropped, so we shouldn't be surprised if we see a
 * closing bracket first. We limit the sets of brackets in a phone number to four.
 */

var MATCHING_BRACKETS_ENTIRE = new RegExp('^' + "(?:[" + OPENING_PARENS + "])?" + "(?:" + NON_PARENS + "+" + "[" + CLOSING_PARENS + "])?" + NON_PARENS + "+" + "(?:[" + OPENING_PARENS + "]" + NON_PARENS + "+[" + CLOSING_PARENS + "])" + BRACKET_PAIR_LIMIT + NON_PARENS + "*" + '$');
/**
 * Matches strings that look like publication pages. Example:
 * <pre>Computing Complete Answers to Queries in the Presence of Limited Access Patterns.
 * Chen Li. VLDB J. 12(3): 211-227 (2003).</pre>
 *
 * The string "211-227 (2003)" is not a telephone number.
 */

var PUB_PAGES = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;
function isValidCandidate(candidate, offset, text, leniency) {
  // Check the candidate doesn't contain any formatting
  // which would indicate that it really isn't a phone number.
  if (!MATCHING_BRACKETS_ENTIRE.test(candidate) || PUB_PAGES.test(candidate)) {
    return;
  } // If leniency is set to VALID or stricter, we also want to skip numbers that are surrounded
  // by Latin alphabetic characters, to skip cases like abc8005001234 or 8005001234def.


  if (leniency !== 'POSSIBLE') {
    // If the candidate is not at the start of the text,
    // and does not start with phone-number punctuation,
    // check the previous character.
    if (offset > 0 && !LEAD_CLASS_LEADING.test(candidate)) {
      var previousChar = text[offset - 1]; // We return null if it is a latin letter or an invalid punctuation symbol.

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utf_8__["f" /* isInvalidPunctuationSymbol */])(previousChar) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utf_8__["g" /* isLatinLetter */])(previousChar)) {
        return false;
      }
    }

    var lastCharIndex = offset + candidate.length;

    if (lastCharIndex < text.length) {
      var nextChar = text[lastCharIndex];

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utf_8__["f" /* isInvalidPunctuationSymbol */])(nextChar) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utf_8__["g" /* isLatinLetter */])(nextChar)) {
        return false;
      }
    }
  }

  return true;
}
//# sourceMappingURL=isValidCandidate.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValidPreCandidate;
// Matches strings that look like dates using "/" as a separator.
// Examples: 3/10/2011, 31/10/96 or 08/31/95.
var SLASH_SEPARATED_DATES = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/; // Matches timestamps.
// Examples: "2012-01-02 08:00".
// Note that the reg-ex does not include the
// trailing ":\d\d" -- that is covered by TIME_STAMPS_SUFFIX.

var TIME_STAMPS = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/;
var TIME_STAMPS_SUFFIX_LEADING = /^:[0-5]\d/;
function isValidPreCandidate(candidate, offset, text) {
  // Skip a match that is more likely to be a date.
  if (SLASH_SEPARATED_DATES.test(candidate)) {
    return false;
  } // Skip potential time-stamps.


  if (TIME_STAMPS.test(candidate)) {
    var followingText = text.slice(offset + candidate.length);

    if (TIME_STAMPS_SUFFIX_LEADING.test(followingText)) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=isValidPreCandidate.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parsePreCandidate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(488);
 // Regular expression of characters typically used to start a second phone number for the purposes
// of parsing. This allows us to strip off parts of the number that are actually the start of
// another number, such as for: (530) 583-6985 x302/x2303 -> the second extension here makes this
// actually two phone numbers, (530) 583-6985 x302 and (530) 583-6985 x2303. We remove the second
// extension so that the first number is parsed correctly.
//
// Matches a slash (\ or /) followed by a space followed by an `x`.
//

var SECOND_NUMBER_START_PATTERN = /[\\/] *x/;
function parsePreCandidate(candidate) {
  // Check for extra numbers at the end.
  // TODO: This is the place to start when trying to support extraction of multiple phone number
  // from split notations (+41 79 123 45 67 / 68).
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* trimAfterFirstMatch */])(SECOND_NUMBER_START_PATTERN, candidate);
}
//# sourceMappingURL=parsePreCandidate.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findNumbers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhoneNumberMatcher__ = __webpack_require__(561);

function findNumbers(text, options, metadata) {
  var matcher = new __WEBPACK_IMPORTED_MODULE_0__PhoneNumberMatcher__["a" /* default */](text, options, metadata);
  var results = [];

  while (matcher.hasNext()) {
    results.push(matcher.next());
  }

  return results;
}
//# sourceMappingURL=findNumbers_.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatIncompletePhoneNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsYouType__ = __webpack_require__(627);

/**
 * Formats a (possibly incomplete) phone number.
 * The phone number can be either in E.164 format
 * or in a form of national number digits.
 * @param {string} value - A possibly incomplete phone number. Either in E.164 format or in a form of national number digits.
 * @param {string?} country - Two-letter ("ISO 3166-1 alpha-2") country code.
 * @return {string} Formatted (possibly incomplete) phone number.
 */

function formatIncompletePhoneNumber(value, country, metadata) {
  if (!metadata) {
    metadata = country;
    country = undefined;
  }

  return new __WEBPACK_IMPORTED_MODULE_0__AsYouType__["a" /* default */](country, metadata).input(value);
}
//# sourceMappingURL=formatIncompletePhoneNumber.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCountries;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);

function getCountries(metadata) {
  return new __WEBPACK_IMPORTED_MODULE_0__metadata__["d" /* default */](metadata).getCountries();
}
//# sourceMappingURL=getCountries.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(415);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["b"]; });
// Deprecated. Import from 'metadata.js' directly instead.

//# sourceMappingURL=getCountryCallingCode.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getExampleNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhoneNumber__ = __webpack_require__(487);

function getExampleNumber(country, examples, metadata) {
  if (examples[country]) {
    return new __WEBPACK_IMPORTED_MODULE_0__PhoneNumber__["a" /* default */](country, examples[country], metadata);
  }
}
//# sourceMappingURL=getExampleNumber.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate___ = __webpack_require__(565);

/**
 * Checks if a given phone number is valid within a given region.
 * Is just an alias for `phoneNumber.isValid() && phoneNumber.country === country`.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 */

function isValidNumberForRegion(input, country, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  return input.country === country && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate___["a" /* default */])(input, options, metadata);
}
//# sourceMappingURL=isValidNumberForRegion_.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parsePhoneNumberFromString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsePhoneNumberFromString___ = __webpack_require__(740);


function parsePhoneNumberFromString() {
  var _normalizeArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber__["b" /* normalizeArguments */])(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parsePhoneNumberFromString___["a" /* default */])(text, options, metadata);
}
//# sourceMappingURL=parsePhoneNumberFromString.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parsePhoneNumberFromString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber___ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParseError__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata__ = __webpack_require__(415);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parsePhoneNumberFromString(text, options, metadata) {
  // Validate `defaultCountry`.
  if (options && options.defaultCountry && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["a" /* isSupportedCountry */])(options.defaultCountry, metadata)) {
    options = _objectSpread({}, options, {
      defaultCountry: undefined
    });
  } // Parse phone number.


  try {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parsePhoneNumber___["a" /* default */])(text, options, metadata);
  } catch (error) {
    /* istanbul ignore else */
    if (error instanceof __WEBPACK_IMPORTED_MODULE_1__ParseError__["a" /* default */]) {//
    } else {
      throw error;
    }
  }
}
//# sourceMappingURL=parsePhoneNumberFromString_.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = searchPhoneNumbersInText;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchNumbers__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__findPhoneNumbersInText__ = __webpack_require__(630);


function searchPhoneNumbersInText(text, defaultCountry, options, metadata) {
  var args = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__findPhoneNumbersInText__["b" /* getArguments */])(defaultCountry, options, metadata);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__searchNumbers__["a" /* default */])(text, args.options, args.metadata);
}
//# sourceMappingURL=searchPhoneNumbersInText.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Copy-pasted from:
// https://github.com/substack/semver-compare/blob/master/index.js
//
// Inlining this function because some users reported issues with
// importing from `semver-compare` in a browser with ES6 "native" modules.
//
// Fixes `semver-compare` not being able to compare versions with alpha/beta/etc "tags".
// https://github.com/catamphetamine/libphonenumber-js/issues/381
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  a = a.split('-');
  b = b.split('-');
  var pa = a[0].split('.');
  var pb = b[0].split('.');

  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }

  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }

  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
});
//# sourceMappingURL=semver-compare.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
/* harmony default export */ __webpack_exports__["a"] = ({"version":"1.7.53","country_calling_codes":{"1":["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],"7":["RU","KZ"],"20":["EG"],"27":["ZA"],"30":["GR"],"31":["NL"],"32":["BE"],"33":["FR"],"34":["ES"],"36":["HU"],"39":["IT","VA"],"40":["RO"],"41":["CH"],"43":["AT"],"44":["GB","GG","IM","JE"],"45":["DK"],"46":["SE"],"47":["NO","SJ"],"48":["PL"],"49":["DE"],"51":["PE"],"52":["MX"],"53":["CU"],"54":["AR"],"55":["BR"],"56":["CL"],"57":["CO"],"58":["VE"],"60":["MY"],"61":["AU","CC","CX"],"62":["ID"],"63":["PH"],"64":["NZ"],"65":["SG"],"66":["TH"],"81":["JP"],"82":["KR"],"84":["VN"],"86":["CN"],"90":["TR"],"91":["IN"],"92":["PK"],"93":["AF"],"94":["LK"],"95":["MM"],"98":["IR"],"211":["SS"],"212":["MA","EH"],"213":["DZ"],"216":["TN"],"218":["LY"],"220":["GM"],"221":["SN"],"222":["MR"],"223":["ML"],"224":["GN"],"225":["CI"],"226":["BF"],"227":["NE"],"228":["TG"],"229":["BJ"],"230":["MU"],"231":["LR"],"232":["SL"],"233":["GH"],"234":["NG"],"235":["TD"],"236":["CF"],"237":["CM"],"238":["CV"],"239":["ST"],"240":["GQ"],"241":["GA"],"242":["CG"],"243":["CD"],"244":["AO"],"245":["GW"],"246":["IO"],"247":["AC"],"248":["SC"],"249":["SD"],"250":["RW"],"251":["ET"],"252":["SO"],"253":["DJ"],"254":["KE"],"255":["TZ"],"256":["UG"],"257":["BI"],"258":["MZ"],"260":["ZM"],"261":["MG"],"262":["RE","YT"],"263":["ZW"],"264":["NA"],"265":["MW"],"266":["LS"],"267":["BW"],"268":["SZ"],"269":["KM"],"290":["SH","TA"],"291":["ER"],"297":["AW"],"298":["FO"],"299":["GL"],"350":["GI"],"351":["PT"],"352":["LU"],"353":["IE"],"354":["IS"],"355":["AL"],"356":["MT"],"357":["CY"],"358":["FI","AX"],"359":["BG"],"370":["LT"],"371":["LV"],"372":["EE"],"373":["MD"],"374":["AM"],"375":["BY"],"376":["AD"],"377":["MC"],"378":["SM"],"380":["UA"],"381":["RS"],"382":["ME"],"383":["XK"],"385":["HR"],"386":["SI"],"387":["BA"],"389":["MK"],"420":["CZ"],"421":["SK"],"423":["LI"],"500":["FK"],"501":["BZ"],"502":["GT"],"503":["SV"],"504":["HN"],"505":["NI"],"506":["CR"],"507":["PA"],"508":["PM"],"509":["HT"],"590":["GP","BL","MF"],"591":["BO"],"592":["GY"],"593":["EC"],"594":["GF"],"595":["PY"],"596":["MQ"],"597":["SR"],"598":["UY"],"599":["CW","BQ"],"670":["TL"],"672":["NF"],"673":["BN"],"674":["NR"],"675":["PG"],"676":["TO"],"677":["SB"],"678":["VU"],"679":["FJ"],"680":["PW"],"681":["WF"],"682":["CK"],"683":["NU"],"685":["WS"],"686":["KI"],"687":["NC"],"688":["TV"],"689":["PF"],"690":["TK"],"691":["FM"],"692":["MH"],"850":["KP"],"852":["HK"],"853":["MO"],"855":["KH"],"856":["LA"],"880":["BD"],"886":["TW"],"960":["MV"],"961":["LB"],"962":["JO"],"963":["SY"],"964":["IQ"],"965":["KW"],"966":["SA"],"967":["YE"],"968":["OM"],"970":["PS"],"971":["AE"],"972":["IL"],"973":["BH"],"974":["QA"],"975":["BT"],"976":["MN"],"977":["NP"],"992":["TJ"],"993":["TM"],"994":["AZ"],"995":["GE"],"996":["KG"],"998":["UZ"]},"countries":{"AC":["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],"AD":["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],"AE":["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],"AF":["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],"AG":["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([457]\\d{6})$","268$1",0,"268"],"AI":["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2457]\\d{6})$","264$1",0,"264"],"AL":["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],"AM":["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],"AO":["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],"AR":["54","00","11\\d{8}|(?:[2368]|9\\d)\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],"AS":["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"1|([267]\\d{6})$","684$1",0,"684"],"AT":["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],"AU":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"0|(183[12])",0,0,0,[["8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-7]|3[2-4]|[4-6]\\d))|91(?:[0-57-9]\\d|6[0135-9])\\d)\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:6[0-8]|[78]\\d|9[02-9]))\\d{6}",[9]],["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"AW":["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],"AX":["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],"AZ":["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365|46","1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],"BA":["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],"BB":["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","246$1",0,"246"],"BD":["880","00","1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],"BE":["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],"BF":["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],"BG":["359","00","[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],"BH":["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],"BI":["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],"BJ":["229","00","(?:[2689]\\d|51)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[25689]"]]]],"BL":["590","00","(?:590|69\\d|976)\\d{6}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"],0,0,0,0,0,0,["976[01]\\d{5}"]]],"BM":["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-8]\\d{6})$","441$1",0,"441"],"BN":["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],"BO":["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],"BQ":["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],"BR":["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],"BS":["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([3-8]\\d{6})$","242$1",0,"242"],"BT":["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],"BW":["267","00","90\\d{5}|(?:[2-6]|7\\d)\\d{6}",[7,8],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7"]]]],"BY":["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],"BZ":["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],"CA":["1","011","(?:[2-8]\\d|90)\\d{8}",[10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"],0,0,0,["600[2-9]\\d{6}"]]],"CC":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10],0,"0",0,"0|([59]\\d{7})$","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"CD":["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],"CF":["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],"CG":["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],"CH":["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],"CI":["225","00","[02-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[02-9]"]]]],"CK":["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],"CL":["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-3]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],"CM":["237","00","(?:[26]\\d\\d|88)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]]],"CN":["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"0|(1(?:[12]\\d|79)\\d\\d)",0,0,0,0,"00"],"CO":["57","00(?:4(?:[14]4|56)|[579])","(?:1\\d|3)\\d{9}|[124-8]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1 $2",["[14][2-9]|[25-8]"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],"CR":["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],"CU":["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],"CV":["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],"CW":["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],"CX":["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10],0,"0",0,"0|([59]\\d{7})$","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|235)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",[6,8,10]]],"0011"],"CY":["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],"CZ":["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],"DE":["49","00","[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],"DJ":["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],"DK":["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],"DM":["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","767$1",0,"767"],"DO":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8[024]9"],"DZ":["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],"EC":["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],"EE":["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],"EG":["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],"EH":["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],"ER":["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],"ES":["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],"ET":["251","00","(?:11|[2-59]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],"0"],"FI":["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],"FJ":["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],"FK":["500","00","[2-7]\\d{4}",[5]],"FM":["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],"FO":["298","00","(?:[2-8]\\d|90)\\d{4}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],"FR":["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],"GA":["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],0,0,"0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})","$1"],"GB":["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|(?:4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:0\\d|20)))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],"GD":["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","473$1",0,"473"],"GE":["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],"GF":["594","00","(?:[56]94|976)\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"]],"0"],"GG":["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"0|([25-9]\\d{5})$","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],"GH":["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],"GI":["350","00","[256]\\d{7}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],"GL":["299","00","(?:19|[2-689]\\d)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-689]"]]]],"GM":["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],"GN":["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],"GP":["590","00","(?:590|69\\d|976)\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"],0,0,0,0,0,0,["976[01]\\d{5}"]]],"GQ":["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],"GR":["30","00","5005000\\d{3}|(?:[2689]\\d|70)\\d{8}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]]]],"GT":["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"GU":["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"1|([3-9]\\d{6})$","671$1",0,"671"],"GW":["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],"GY":["592","001","(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],"HK":["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],"HN":["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],"HR":["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],"HT":["509","00","[2-489]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-489]"]]]],"HU":["36","00","[2357]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57-9]"],"06 $1"]],"06"],"ID":["62","00[189]","(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],"IE":["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"IL":["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],"IM":["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"0|([5-8]\\d{5})$","1624$1",0,"74576|(?:16|7[56])24"],"IN":["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],"IO":["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],"IQ":["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],"IR":["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],"IS":["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],"IT":["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],"JE":["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"0|([0-24-8]\\d{5})$","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}"],["56\\d{8}"]]],"JM":["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],"JO":["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],"JP":["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])","[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"]],"0"],"KE":["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],"KG":["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],"KH":["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"KI":["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],"KM":["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],"KN":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","869$1",0,"869"],"KP":["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],"KR":["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],"KW":["965","00","(?:18|[2569]\\d\\d)\\d{5}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[25]"]]]],"KY":["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","345$1",0,"345"],"KZ":["7","810","33622\\d{5}|(?:7\\d|80)\\d{8}",[10],0,"8",0,0,0,0,"33|7",0,"8~10"],"LA":["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],"LB":["961","00","[7-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"]]],"0"],"LC":["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"1|([2-8]\\d{6})$","758$1",0,"758"],"LI":["423","00","90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[237-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"0|(1001)"],"LK":["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],"LR":["231","00","(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3578]"],"0$1"]],"0"],"LS":["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],"LT":["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],"LU":["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],"LV":["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],"LY":["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],"MA":["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]","5(?:29|38)[89]0"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],"MC":["377","00","870\\d{5}|(?:[349]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],"MD":["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],"ME":["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],"MF":["590","00","(?:590|69\\d|976)\\d{6}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"],0,0,0,0,0,0,["976[01]\\d{5}"]]],"MG":["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"0|([24-9]\\d{6})$","20$1"],"MH":["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],"MK":["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],"ML":["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],"MM":["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],"MN":["976","001","[12]\\d{7,9}|[57-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[57-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],"MO":["853","00","(?:28|[68]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],"MP":["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","670$1",0,"670"],"MQ":["596","00","69\\d{7}|(?:59|97)6\\d{6}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"]],"0"],"MR":["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],"MS":["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"1|([34]\\d{6})$","664$1",0,"664"],"MT":["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],"MU":["230","0(?:0|[24-7]0|3[03])","(?:[2-468]|5\\d)\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["5"]]],0,0,0,0,0,0,0,"020"],"MV":["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[3467]|9[13-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],"MW":["265","00","1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],"MX":["52","0[09]","(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],"MY":["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9])|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],"MZ":["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],"NA":["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],"NC":["687","00","[2-57-9]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]]],"NE":["227","00","[0289]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]"]]]],"NF":["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],"NG":["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],"NI":["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],"NL":["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",[5,6,7,8,9,10],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],"0"],"NO":["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|5[89]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],"NP":["977","00","9\\d{9}|[1-9]\\d{7}",[8,10],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["[1-8]|9(?:[1-579]|6[2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],"NR":["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],"NU":["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],"NZ":["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["83"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[0367]|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],"OM":["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],"PA":["507","00","(?:[1-57-9]|6\\d)\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["6"]]]],"PE":["51","19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,0," Anexo "],"PF":["689","00","[48]\\d{7}|4\\d{5}",[6,8],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[48]"]]]],"PG":["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],"PH":["63","00","1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],"PK":["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],"PL":["48","00","6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],"PM":["508","00","[45]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"]],"0"],"PR":["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],"PS":["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"PT":["351","00","(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"]]]],"PW":["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],"PY":["595","00","59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}",[6,7,8,9],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"]],"0"],"QA":["974","00","[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["2[126]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]]]],"RE":["262","00","9769\\d{5}|(?:26|[68]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,"26[23]|69|[89]"],"RO":["40","00","(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],"RS":["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],"RU":["7","810","[347-9]\\d{9}",[10],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",1]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],"RW":["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],"SA":["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],"SB":["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],"SC":["248","010|0[0-2]","8000\\d{3}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],"SD":["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],"SE":["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],"SG":["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:01|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"SH":["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],"SI":["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],"SJ":["47","00","0\\d{4}|(?:[4589]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],"SK":["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],"SL":["232","00","(?:[2378]\\d|66|99)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],"SM":["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],"SN":["221","00","(?:[378]\\d{4}|93330)\\d{4}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],"SO":["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["24|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[1-35-9]|9[2-9]"]]],"0"],"SR":["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],"SS":["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],"ST":["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],"SV":["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],"SX":["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|(5\\d{6})$","721$1",0,"721"],"SY":["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],"SZ":["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],"TA":["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],"TC":["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"1|([2-479]\\d{6})$","649$1",0,"649"],"TD":["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],"TG":["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],"TH":["66","00[1-9]","1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],"TJ":["992","810","(?:00|11|[3-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"],0,1],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],0,1],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3"],0,1],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0457-9]|11"],0,1]],"8",0,0,0,0,0,0,"8~10"],"TK":["690","00","[2-47]\\d{3,6}",[4,5,6,7]],"TL":["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],"TM":["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],"TN":["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],"TO":["676","00","(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-8]"]]]],"TR":["90","00","(?:4|8\\d{5})\\d{6}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[0589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6})","$1 $2 $3",["80"],"0$1",1]],"0"],"TT":["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-46-8]\\d{6})$","868$1",0,"868"],"TV":["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],"TW":["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],"TZ":["255","00[056]","(?:[26-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],"UA":["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]","4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["[3-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],"UG":["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],"US":["1","011","[2-9]\\d{9}",[10],[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],"UY":["598","0(?:0|1[3-9]\\d)","(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[24]"]]],"0",0,0,0,0,0,0,"00"," int. "],"UZ":["998","810","55501\\d{4}|(?:[679]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],"VA":["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],"VC":["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"1|([2-7]\\d{6})$","784$1",0,"784"],"VE":["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],"VG":["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"1|([2-578]\\d{6})$","284$1",0,"284"],"VI":["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"1|([2-9]\\d{6})$","340$1",0,"340"],"VN":["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],"VU":["678","00","(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[579]"]]]],"WF":["681","00","(?:[45]0|68|72|8\\d)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[4-8]"]]]],"WS":["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],"XK":["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],"YE":["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],"YT":["262","00","80\\d{7}|(?:26|63)9\\d{6}",[9],0,"0",0,0,0,0,"269|63"],"ZA":["27","00","[1-9]\\d{8}|8\\d{4,7}",[5,6,7,8,9],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"]],"0"],"ZM":["260","00","(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],"ZW":["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},"nonGeographic":{"800":["800",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,["[1-9]\\d{7}"]]],"808":["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],"870":["870",0,"[35-7]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]\\d|7[6-8])\\d{7}"]]],"878":["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],"881":["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],"882":["882",0,"[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|[19]\\d{7}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[19]"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-3]"]]],0,0,0,0,0,0,[0,["3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}",[7,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]],"883":["883",0,"51\\d{7}(?:\\d{3})?",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["5"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["51[013]0\\d{8}|5100\\d{5}"]]],"888":["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],"979":["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}});

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parsePhoneNumber */
/* unused harmony export parsePhoneNumberFromString */
/* unused harmony export findNumbers */
/* unused harmony export searchNumbers */
/* unused harmony export findPhoneNumbersInText */
/* unused harmony export searchPhoneNumbersInText */
/* unused harmony export PhoneNumberMatcher */
/* unused harmony export AsYouType */
/* unused harmony export isSupportedCountry */
/* unused harmony export getCountries */
/* unused harmony export getCountryCallingCode */
/* unused harmony export getExtPrefix */
/* unused harmony export getExampleNumber */
/* unused harmony export formatIncompletePhoneNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata_min_json_js__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_index__ = __webpack_require__(418);
/* unused harmony reexport ParseError */
/* unused harmony reexport parseIncompletePhoneNumber */
/* unused harmony reexport parsePhoneNumberCharacter */
/* unused harmony reexport parseDigits */
/* unused harmony reexport parseRFC3966 */
/* unused harmony reexport formatRFC3966 */
// Importing from `.json.js` a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239






function call(func, _arguments) {
	var args = Array.prototype.slice.call(_arguments)
	args.push(__WEBPACK_IMPORTED_MODULE_0__metadata_min_json_js__["a" /* default */])
	return func.apply(this, args)
}

function parsePhoneNumber() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["parsePhoneNumber"], arguments)
}

function parsePhoneNumberFromString() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["parsePhoneNumberFromString"], arguments)
}

function findNumbers() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["findNumbers"], arguments)
}

function searchNumbers() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["searchNumbers"], arguments)
}

function findPhoneNumbersInText() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["findPhoneNumbersInText"], arguments)
}

function searchPhoneNumbersInText() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["searchPhoneNumbersInText"], arguments)
}

function PhoneNumberMatcher(text, options) {
	return __WEBPACK_IMPORTED_MODULE_1__core_index__["PhoneNumberMatcher"].call(this, text, options, __WEBPACK_IMPORTED_MODULE_0__metadata_min_json_js__["a" /* default */])
}
PhoneNumberMatcher.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_1__core_index__["PhoneNumberMatcher"].prototype, {})
PhoneNumberMatcher.prototype.constructor = PhoneNumberMatcher

function AsYouType(country) {
	return __WEBPACK_IMPORTED_MODULE_1__core_index__["AsYouType"].call(this, country, __WEBPACK_IMPORTED_MODULE_0__metadata_min_json_js__["a" /* default */])
}
AsYouType.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_1__core_index__["AsYouType"].prototype, {})
AsYouType.prototype.constructor = AsYouType

function isSupportedCountry() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["isSupportedCountry"], arguments)
}

function getCountries() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["getCountries"], arguments)
}

function getCountryCallingCode() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["getCountryCallingCode"], arguments)
}

function getExtPrefix(country) {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["getExtPrefix"], arguments)
}

function getExampleNumber() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["getExampleNumber"], arguments)
}

function formatIncompletePhoneNumber() {
	return call(__WEBPACK_IMPORTED_MODULE_1__core_index__["formatIncompletePhoneNumber"], arguments)
}

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = {
	"ext": "ext.",
	"country": "Country",
	"phone": "Phone",
	"AB": "Abkhazia",
	"AC": "Ascension Island",
	"AD": "Andorra",
	"AE": "United Arab Emirates",
	"AF": "Afghanistan",
	"AG": "Antigua and Barbuda",
	"AI": "Anguilla",
	"AL": "Albania",
	"AM": "Armenia",
	"AO": "Angola",
	"AQ": "Antarctica",
	"AR": "Argentina",
	"AS": "American Samoa",
	"AT": "Austria",
	"AU": "Australia",
	"AW": "Aruba",
	"AX": "Åland Islands",
	"AZ": "Azerbaijan",
	"BA": "Bosnia and Herzegovina",
	"BB": "Barbados",
	"BD": "Bangladesh",
	"BE": "Belgium",
	"BF": "Burkina Faso",
	"BG": "Bulgaria",
	"BH": "Bahrain",
	"BI": "Burundi",
	"BJ": "Benin",
	"BL": "Saint Barthélemy",
	"BM": "Bermuda",
	"BN": "Brunei Darussalam",
	"BO": "Bolivia, plurinational state of",
	"BQ": "Bonaire, Sint Eustatius and Saba",
	"BR": "Brazil",
	"BS": "Bahamas",
	"BT": "Bhutan",
	"BV": "Bouvet Island",
	"BW": "Botswana",
	"BY": "Belarus",
	"BZ": "Belize",
	"CA": "Canada",
	"CC": "Cocos (Keeling) Islands",
	"CD": "Congo, Democratic Republic of the",
	"CF": "Central African Republic",
	"CG": "Congo",
	"CH": "Switzerland",
	"CI": "Cote d'Ivoire",
	"CK": "Cook Islands",
	"CL": "Chile",
	"CM": "Cameroon",
	"CN": "China",
	"CO": "Colombia",
	"CR": "Costa Rica",
	"CU": "Cuba",
	"CV": "Cape Verde",
	"CW": "Curaçao",
	"CX": "Christmas Island",
	"CY": "Cyprus",
	"CZ": "Czech Republic",
	"DE": "Germany",
	"DJ": "Djibouti",
	"DK": "Denmark",
	"DM": "Dominica",
	"DO": "Dominican Republic",
	"DZ": "Algeria",
	"EC": "Ecuador",
	"EE": "Estonia",
	"EG": "Egypt",
	"EH": "Western Sahara",
	"ER": "Eritrea",
	"ES": "Spain",
	"ET": "Ethiopia",
	"FI": "Finland",
	"FJ": "Fiji",
	"FK": "Falkland Islands (Malvinas)",
	"FM": "Micronesia, Federated States of",
	"FO": "Faroe Islands",
	"FR": "France",
	"GA": "Gabon",
	"GB": "United Kingdom",
	"GD": "Grenada",
	"GE": "Georgia",
	"GF": "French Guiana",
	"GG": "Guernsey",
	"GH": "Ghana",
	"GI": "Gibraltar",
	"GL": "Greenland",
	"GM": "Gambia",
	"GN": "Guinea",
	"GP": "Guadeloupe",
	"GQ": "Equatorial Guinea",
	"GR": "Greece",
	"GS": "South Georgia and the South Sandwich Islands",
	"GT": "Guatemala",
	"GU": "Guam",
	"GW": "Guinea-Bissau",
	"GY": "Guyana",
	"HK": "Hong Kong",
	"HM": "Heard Island and McDonald Islands",
	"HN": "Honduras",
	"HR": "Croatia",
	"HT": "Haiti",
	"HU": "Hungary",
	"ID": "Indonesia",
	"IE": "Ireland",
	"IL": "Israel",
	"IM": "Isle of Man",
	"IN": "India",
	"IO": "British Indian Ocean Territory",
	"IQ": "Iraq",
	"IR": "Iran, Islamic Republic of",
	"IS": "Iceland",
	"IT": "Italy",
	"JE": "Jersey",
	"JM": "Jamaica",
	"JO": "Jordan",
	"JP": "Japan",
	"KE": "Kenya",
	"KG": "Kyrgyzstan",
	"KH": "Cambodia",
	"KI": "Kiribati",
	"KM": "Comoros",
	"KN": "Saint Kitts and Nevis",
	"KP": "Korea, Democratic People's republic of",
	"KR": "Korea, Republic of",
	"KW": "Kuwait",
	"KY": "Cayman Islands",
	"KZ": "Kazakhstan",
	"LA": "Lao People's Democratic Republic",
	"LB": "Lebanon",
	"LC": "Saint Lucia",
	"LI": "Liechtenstein",
	"LK": "Sri Lanka",
	"LR": "Liberia",
	"LS": "Lesotho",
	"LT": "Lithuania",
	"LU": "Luxembourg",
	"LV": "Latvia",
	"LY": "Libyan Arab Jamahiriya",
	"MA": "Morocco",
	"MC": "Monaco",
	"MD": "Moldova",
	"ME": "Montenegro",
	"MF": "Saint Martin (French Part)",
	"MG": "Madagascar",
	"MH": "Marshall Islands",
	"MK": "Macedonia, The Former Yugoslav Republic Of",
	"ML": "Mali",
	"MM": "Burma",
	"MN": "Mongolia",
	"MO": "Macao",
	"MP": "Northern Mariana Islands",
	"MQ": "Martinique",
	"MR": "Mauritania",
	"MS": "Montserrat",
	"MT": "Malta",
	"MU": "Mauritius",
	"MV": "Maldives",
	"MW": "Malawi",
	"MX": "Mexico",
	"MY": "Malaysia",
	"MZ": "Mozambique",
	"NA": "Namibia",
	"NC": "New Caledonia",
	"NE": "Niger",
	"NF": "Norfolk Island",
	"NG": "Nigeria",
	"NI": "Nicaragua",
	"NL": "Netherlands",
	"NO": "Norway",
	"NP": "Nepal",
	"NR": "Nauru",
	"NU": "Niue",
	"NZ": "New Zealand",
	"OM": "Oman",
	"OS": "South Ossetia",
	"PA": "Panama",
	"PE": "Peru",
	"PF": "French Polynesia",
	"PG": "Papua New Guinea",
	"PH": "Philippines",
	"PK": "Pakistan",
	"PL": "Poland",
	"PM": "Saint Pierre and Miquelon",
	"PN": "Pitcairn",
	"PR": "Puerto Rico",
	"PS": "Palestinian Territory, Occupied",
	"PT": "Portugal",
	"PW": "Palau",
	"PY": "Paraguay",
	"QA": "Qatar",
	"RE": "Reunion",
	"RO": "Romania",
	"RS": "Serbia",
	"RU": "Russian Federation",
	"RW": "Rwanda",
	"SA": "Saudi Arabia",
	"SB": "Solomon Islands",
	"SC": "Seychelles",
	"SD": "Sudan",
	"SE": "Sweden",
	"SG": "Singapore",
	"SH": "Saint Helena, Ascension And Tristan Da Cunha",
	"SI": "Slovenia",
	"SJ": "Svalbard and Jan Mayen",
	"SK": "Slovakia",
	"SL": "Sierra Leone",
	"SM": "San Marino",
	"SN": "Senegal",
	"SO": "Somalia",
	"SR": "Suriname",
	"SS": "South Sudan",
	"ST": "Sao Tome and Principe",
	"SV": "El Salvador",
	"SX": "Sint Maarten",
	"SY": "Syrian Arab Republic",
	"SZ": "Swaziland",
	"TA": "Tristan da Cunha",
	"TC": "Turks and Caicos Islands",
	"TD": "Chad",
	"TF": "French Southern Territories",
	"TG": "Togo",
	"TH": "Thailand",
	"TJ": "Tajikistan",
	"TK": "Tokelau",
	"TL": "Timor-Leste",
	"TM": "Turkmenistan",
	"TN": "Tunisia",
	"TO": "Tonga",
	"TR": "Turkey",
	"TT": "Trinidad and Tobago",
	"TV": "Tuvalu",
	"TW": "Taiwan, Province of China",
	"TZ": "Tanzania, United Republic Of",
	"UA": "Ukraine",
	"UG": "Uganda",
	"UM": "United States Minor Outlying Islands",
	"US": "United States",
	"UY": "Uruguay",
	"UZ": "Uzbekistan",
	"VA": "Holy See (Vatican City State)",
	"VC": "Saint Vincent and the Grenadines",
	"VE": "Venezuela",
	"VG": "Virgin Islands, British",
	"VI": "Virgin Islands, U.S.",
	"VN": "Vietnam",
	"VU": "Vanuatu",
	"WF": "Wallis and Futuna",
	"WS": "Samoa",
	"XK": "Kosovo",
	"YE": "Yemen",
	"YT": "Mayotte",
	"ZA": "South Africa",
	"ZM": "Zambia",
	"ZW": "Zimbabwe",
	"ZZ": "International"
};

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(403);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountrySelectNative = (_temp2 = _class = function (_Component) {
	_inherits(CountrySelectNative, _Component);

	function CountrySelectNative() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CountrySelectNative);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountrySelectNative.__proto__ || Object.getPrototypeOf(CountrySelectNative)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
			var onChange = _this.props.onChange;

			var value = event.target.value;
			onChange(value === 'ZZ' ? undefined : value);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(CountrySelectNative, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    value = _props.value,
			    options = _props.options,
			    onFocus = _props.onFocus,
			    onBlur = _props.onBlur,
			    disabled = _props.disabled,
			    tabIndex = _props.tabIndex,
			    className = _props.className,
			    SelectArrow = _props.selectArrowComponent;


			var selectedOption = void 0;
			for (var _iterator = options, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref2;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref2 = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref2 = _i.value;
				}

				var option = _ref2;

				if (!option.divider && option.value === value) {
					selectedOption = option;
				}
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)(className, 'react-phone-number-input__country--native') },
				selectedOption && _react2.default.createElement(selectedOption.icon, { value: value }),
				_react2.default.createElement(
					'select',
					{
						name: name,
						value: value || 'ZZ',
						onChange: this.onChange,
						onFocus: onFocus,
						onBlur: onBlur,
						disabled: disabled,
						tabIndex: tabIndex,
						'aria-label': this.props['aria-label'],
						className: 'react-phone-number-input__country-select' },
					options.map(function (_ref3) {
						var value = _ref3.value,
						    label = _ref3.label,
						    divider = _ref3.divider;
						return _react2.default.createElement(
							'option',
							{
								key: divider ? '|' : value || 'ZZ',
								value: divider ? '|' : value || 'ZZ',
								disabled: divider ? true : false,
								className: divider ? 'react-phone-number-input__country-select-divider' : undefined },
							label
						);
					})
				),
				_react2.default.createElement(SelectArrow, null)
			);
		}
	}]);

	return CountrySelectNative;
}(_react.Component), _class.propTypes = {
	// A two-letter country code.
	// E.g. "US", "RU", etc.
	value: _propTypes2.default.string,

	// Updates the `value`.
	onChange: _propTypes2.default.func.isRequired,

	// `<select/>` options.
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		value: _propTypes2.default.string,
		label: _propTypes2.default.string,
		divider: _propTypes2.default.bool
	})).isRequired,

	// HTML `name` attribute.
	name: _propTypes2.default.string,

	// HTML `disabled` attribute.
	disabled: _propTypes2.default.bool,

	// HTML `tabIndex` attribute.
	tabIndex: _propTypes2.default.number,

	// Select arrow component.
	selectArrowComponent: _propTypes2.default.elementType.isRequired,

	// Toggles the `--focus` CSS class.
	// https://github.com/catamphetamine/react-phone-number-input/issues/189
	onFocus: _propTypes2.default.func,

	// Toggles the `--focus` CSS class.
	// https://github.com/catamphetamine/react-phone-number-input/issues/189
	onBlur: _propTypes2.default.func
}, _class.defaultProps = {
	selectArrowComponent: function selectArrowComponent() {
		return _react2.default.createElement('div', { className: 'react-phone-number-input__country-select-arrow' });
	}
}, _temp2);
exports.default = CountrySelectNative;
//# sourceMappingURL=CountrySelectNative.js.map

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(403);

var _classnames2 = _interopRequireDefault(_classnames);

var _countries = __webpack_require__(647);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default country flag icon.
// `<img/>` is wrapped in a `<div/>` to prevent SVGs from exploding in size in IE 11.
// https://github.com/catamphetamine/react-phone-number-input/issues/111
var FlagComponent = function FlagComponent(_ref) {
	var country = _ref.country,
	    flags = _ref.flags,
	    flagsPath = _ref.flagsPath,
	    className = _ref.className;

	if (flags && flags[country]) {
		return flags[country]();
	}
	return _react2.default.createElement('img', {
		alt: country,
		className: 'react-phone-number-input__icon-image',
		src: '' + flagsPath + (0, _countries.getCountryCodeForFlag)(country).toLowerCase() + '.svg' });
};

FlagComponent.propTypes = {
	// The country to be selected by default.
	// Two-letter country code ("ISO 3166-1 alpha-2").
	country: _propTypes2.default.string.isRequired,

	// Country flag icon components.
	// By default flag icons are inserted as `<img/>`s
	// with their `src` pointed to `flag-icon-css` github repo.
	// There might be cases (e.g. an offline application)
	// where having a large (3 megabyte) `<svg/>` flags
	// bundle is more appropriate.
	// `import flags from 'react-phone-number-input/flags'`.
	flags: _propTypes2.default.objectOf(_propTypes2.default.elementType),

	// A base URL path for national flag SVG icons.
	// By default it uses the ones from `flag-icon-css` github repo.
	flagsPath: _propTypes2.default.string.isRequired
};

exports.default = FlagComponent;
//# sourceMappingURL=Flag.js.map

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createInput = createInput;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(418);

var _reactLifecyclesCompat = __webpack_require__(661);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// `PureComponent` is only available in React >= 15.3.0.
var PureComponent = _react2.default.PureComponent || _react2.default.Component;

function createInput(defaultMetadata) {
	/**
  * `InputBasic`'s caret is not as "smart" as the default `inputComponent`'s
  * but still works good enough. When erasing or inserting digits in the middle
  * of a phone number the caret usually jumps to the end: this is the expected
  * behaviour and it's the workaround for the [Samsung Galaxy smart caret positioning bug](https://github.com/catamphetamine/react-phone-number-input/issues/75).
  */
	var InputBasic = function (_PureComponent) {
		_inherits(InputBasic, _PureComponent);

		function InputBasic() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, InputBasic);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputBasic.__proto__ || Object.getPrototypeOf(InputBasic)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onChange = function (event) {
				var onChange = _this.props.onChange;
				var value = _this.state.value;


				var newValue = (0, _core.parseIncompletePhoneNumber)(event.target.value);

				// By default, if a value is something like `"(123)"`
				// then Backspace would only erase the rightmost brace
				// becoming something like `"(123"`
				// which would give the same `"123"` value
				// which would then be formatted back to `"(123)"`
				// and so a user wouldn't be able to erase the phone number.
				// Working around this issue with this simple hack.
				if (newValue === value) {
					if (_this.format(newValue).indexOf(event.target.value) === 0) {
						// Trim the last digit (or plus sign).
						newValue = newValue.slice(0, -1);
					}
				}

				// Prevents React from resetting the `<input/>` caret position.
				// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
				// https://github.com/facebook/react/issues/955
				_this.setState({ value: newValue }, function () {
					return onChange(newValue);
				});
			}, _this.onBlur = function (event) {
				var onBlur = _this.props.onBlur;
				var value = _this.state.value;

				if (onBlur) {
					// `event` is React's `SyntheticEvent`.
					// Its `.value` is read-only therefore cloning it.
					var _event = _extends({}, event, {
						target: _extends({}, event.target, {
							value: value
						})
						// Workaround for `redux-form` event detection.
						// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
					});_event.stopPropagation = event.stopPropagation;
					_event.preventDefault = event.preventDefault;
					return onBlur(_event);
				}
			}, _this.focus = function () {
				return _this.input.focus();
			}, _this.storeInput = function (ref) {
				return _this.input = ref;
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(InputBasic, [{
			key: 'format',
			value: function format(value) {
				var _props = this.props,
				    country = _props.country,
				    metadata = _props.metadata;

				return (0, _core.formatIncompletePhoneNumber)(value, country, metadata);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    onChange = _props2.onChange,
				    onFocus = _props2.onFocus,
				    country = _props2.country,
				    metadata = _props2.metadata,
				    Input = _props2.inputComponent,
				    rest = _objectWithoutProperties(_props2, ['onChange', 'onFocus', 'country', 'metadata', 'inputComponent']);

				// Prevents React from resetting the `<input/>` caret position.
				// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
				// https://github.com/facebook/react/issues/955


				var value = this.state.value;

				// Deprecated. Should be removed in a future major version release.
				// `type="tel"` and `autoComplete="tel"` properties are here
				// just for the "Without country select" component exported from
				// `react-phone-number-input/basic-input` subpackage.
				// These two properties will be overwritten by `<PhoneInput/>` properties
				// when not used as a "Without country select" component.

				return _react2.default.createElement(Input, _extends({
					type: 'tel',
					autoComplete: 'tel'
				}, rest, {
					ref: this.storeInput,
					value: this.format(value),
					onChange: this.onChange,
					onFocus: onFocus,
					onBlur: this.onBlur }));
			}
		}], [{
			key: 'getDerivedStateFromProps',

			// Prevents React from resetting the `<input/>` caret position.
			// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
			// https://github.com/facebook/react/issues/955
			value: function getDerivedStateFromProps(_ref2) {
				var value = _ref2.value;

				return { value: value };
			}

			// This `onBlur` interceptor is a workaround for `redux-form`'s bug
			// so that it gets the up-to-date `value` in its `onBlur` handler.
			// Without this fix it just gets the actual (raw) input field textual value.
			// E.g. `+7 800 555 35 35` instead of `+78005553535`.
			//
			// New `value` is taken from `event` in `redux-form`'s `handleBlur()`.
			// https://github.com/erikras/redux-form/blob/785edf8aac3adc84aba2ab6898a4aa8c48687750/src/ConnectedField.js#L168
			// `redux-form` shouldn't have taken the new `value` from `event`.
			//
			// A developer is not supposed to pass this `onBlur` property manually.
			// Instead, `redux-form` passes `onBlur` to this component automatically
			// and this component patches that `onBlur` handler (a hacky way but works).
			//

		}]);

		return InputBasic;
	}(PureComponent);

	InputBasic.propTypes = {
		// The parsed phone number.
		// "Parsed" not in a sense of "E.164"
		// but rather in a sense of "having only
		// digits and possibly a leading plus character".
		// Examples: `""`, `"+"`, `"+123"`, `"123"`.
		value: _propTypes2.default.string.isRequired,

		// Updates the `value`.
		onChange: _propTypes2.default.func.isRequired,

		// Toggles the `--focus` CSS class.
		// https://github.com/catamphetamine/react-phone-number-input/issues/189
		onFocus: _propTypes2.default.func,

		// `onBlur` workaround for `redux-form`'s bug.
		onBlur: _propTypes2.default.func,

		// A two-letter country code for formatting `value`
		// as a national phone number (e.g. `(800) 555 35 35`).
		// E.g. "US", "RU", etc.
		// If no `country` is passed then `value`
		// is formatted as an international phone number.
		// (e.g. `+7 800 555 35 35`)
		country: _propTypes2.default.string,

		// `libphonenumber-js` metadata.
		metadata: _propTypes2.default.object.isRequired,

		// The `<input/>` component.
		inputComponent: _propTypes2.default.elementType.isRequired
	};

	InputBasic.defaultProps = {
		metadata: defaultMetadata,
		inputComponent: 'input'
	};

	return (0, _reactLifecyclesCompat.polyfill)(InputBasic);
}

exports.default = createInput();
//# sourceMappingURL=InputBasic.js.map

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createInput = createInput;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _inputFormat = __webpack_require__(715);

var _core = __webpack_require__(418);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This input uses `input-format` library
 * for "smart" caret positioning.
 */
function createInput(defaultMetadata) {
	var _class, _temp2;

	return _temp2 = _class = function (_Component) {
		_inherits(InputSmart, _Component);

		function InputSmart() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, InputSmart);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputSmart.__proto__ || Object.getPrototypeOf(InputSmart)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
				return _this.input.focus();
			}, _this.storeInput = function (ref) {
				return _this.input = ref;
			}, _this.format = function (value) {
				var _this$props = _this.props,
				    country = _this$props.country,
				    metadata = _this$props.metadata;

				// "As you type" formatter.

				var formatter = new _core.AsYouType(country, metadata);

				// Format the number.
				var text = formatter.input(value);

				return { text: text, template: formatter.getTemplate() };
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(InputSmart, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    country = _props.country,
				    metadata = _props.metadata,
				    rest = _objectWithoutProperties(_props, ['country', 'metadata']);

				return _react2.default.createElement(_inputFormat.ReactInput, _extends({}, rest, {
					ref: this.storeInput,
					parse: _core.parsePhoneNumberCharacter,
					format: this.format }));
			}
		}]);

		return InputSmart;
	}(_react.Component), _class.defaultProps = {
		metadata: defaultMetadata
	}, _temp2;
}

exports.default = createInput();
//# sourceMappingURL=InputSmart.js.map

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = InternationalIcon;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InternationalIcon() {
	return _react2.default.createElement(
		"svg",
		{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50" },
		_react2.default.createElement("path", { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round", d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56" }),
		_react2.default.createElement("path", { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round", d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21" }),
		_react2.default.createElement("path", { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round", d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86" }),
		_react2.default.createElement("path", { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round", d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54" }),
		_react2.default.createElement("line", { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round", x1: "27.8", y1: "0.85", x2: "27.8", y2: "34.61" }),
		_react2.default.createElement("line", { stroke: "currentColor", fill: "none", strokeWidth: "1.5", strokeLinecap: "round", x1: "15.2", y1: "22.23", x2: "49.15", y2: "22.23" }),
		_react2.default.createElement("path", { stroke: "transparent", fill: "currentColor", d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z" })
	);
}
//# sourceMappingURL=InternationalIcon.js.map

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(403);

var _classnames2 = _interopRequireDefault(_classnames);

var _PhoneInput = __webpack_require__(645);

var _PhoneInput2 = _interopRequireDefault(_PhoneInput);

var _CountrySelectNative = __webpack_require__(761);

var _CountrySelectNative2 = _interopRequireDefault(_CountrySelectNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneInputNative = (_temp2 = _class = function (_Component) {
	_inherits(PhoneInputNative, _Component);

	function PhoneInputNative() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PhoneInputNative);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInputNative.__proto__ || Object.getPrototypeOf(PhoneInputNative)).call.apply(_ref, [this].concat(args))), _this), _this.storeInputRef = function (ref) {
			return _this.input = ref;
		}, _this.focus = function () {
			return _this.input.focus();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// These two country-select-related properties are
	// implemented as `defaultProps` instead of passing them
	// directly to the `<PhoneInput/>` because `<PhoneInputNative/>`
	// is the default export of this library and therefore people pass
	// `countrySelectComponent` property to this `<PhoneInputNative/>` component
	// and when they don't see any changes they might get confused.
	// https://github.com/catamphetamine/react-phone-number-input/issues/229


	_createClass(PhoneInputNative, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_PhoneInput2.default, _extends({ ref: this.storeInputRef }, this.props));
		}

		// Proxy `.focus()` method.

	}]);

	return PhoneInputNative;
}(_react.Component), _class.propTypes = {
	// (optional)
	// Replaces the default country select arrow.
	countrySelectArrowComponent: _propTypes2.default.elementType }, _class.defaultProps = {
	countrySelectComponent: _CountrySelectNative2.default,
	countrySelectProperties: COUNTRY_SELECT_PROPERTIES
}, _temp2);
exports.default = PhoneInputNative;


var COUNTRY_SELECT_PROPERTIES = {
	countrySelectArrowComponent: 'selectArrowComponent'
};
//# sourceMappingURL=PhoneInputNative.js.map

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metadataMin = __webpack_require__(432);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

var _PhoneInputNativeDefaults = __webpack_require__(768);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in legacy `/index.js` export entry.
// In some next major version this file will be removed
// and `/index.js` will be redirected to `/min/index.js`.

exports.default = (0, _PhoneInputNativeDefaults.createPhoneInput)(_metadataMin2.default);
//# sourceMappingURL=PhoneInputNativeDefaultMetadata.js.map

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createPhoneInput = createPhoneInput;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(431);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _en = __webpack_require__(760);

var _en2 = _interopRequireDefault(_en);

var _InternationalIcon = __webpack_require__(765);

var _InternationalIcon2 = _interopRequireDefault(_InternationalIcon);

var _PropTypes = __webpack_require__(646);

var _PhoneInputNative = __webpack_require__(766);

var _PhoneInputNative2 = _interopRequireDefault(_PhoneInputNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createPhoneInput(defaultMetadata) {
	var _class, _temp2;

	return _temp2 = _class = function (_Component) {
		_inherits(PhoneInputNativeDefaults, _Component);

		function PhoneInputNativeDefaults() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, PhoneInputNativeDefaults);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInputNativeDefaults.__proto__ || Object.getPrototypeOf(PhoneInputNativeDefaults)).call.apply(_ref, [this].concat(args))), _this), _this.storeInputRef = function (ref) {
				return _this.input = ref;
			}, _this.render = function () {
				return _react2.default.createElement(_PhoneInputNative2.default, _extends({ ref: _this.storeInputRef }, _this.props));
			}, _this.focus = function () {
				return _this.input.focus();
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		return PhoneInputNativeDefaults;
	}(_react.Component), _class.propTypes = {
		metadata: _PropTypes.metadata.isRequired,
		labels: _PropTypes.labels.isRequired,
		internationalIcon: _propTypes2.default.elementType.isRequired
	}, _class.defaultProps = {
		metadata: defaultMetadata,
		labels: _en2.default,
		internationalIcon: _InternationalIcon2.default
	}, _temp2;
}

exports.default = createPhoneInput();
//# sourceMappingURL=PhoneInputNativeDefaults.js.map

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPreSelectedCountry = getPreSelectedCountry;
exports.getCountrySelectOptions = getCountrySelectOptions;
exports.parsePhoneNumber = parsePhoneNumber;
exports.generateNationalNumberDigits = generateNationalNumberDigits;
exports.migrateParsedInputForNewCountry = migrateParsedInputForNewCountry;
exports.e164 = e164;
exports.trimNumber = trimNumber;
exports.getCountryForPartialE164Number = getCountryForPartialE164Number;
exports.parseInput = parseInput;
exports.get_country_from_possibly_incomplete_international_phone_number = get_country_from_possibly_incomplete_international_phone_number;
exports.compare_strings = compare_strings;
exports.strip_country_calling_code = strip_country_calling_code;
exports.get_national_significant_number_part = get_national_significant_number_part;
exports.could_number_belong_to_country = could_number_belong_to_country;

var _core = __webpack_require__(418);

/**
 * Decides which country should be pre-selected
 * when the phone number input component is first mounted.
 * @param  {object?} phoneNumber - An instance of `PhoneNumber` class.
 * @param  {string?} country - Pre-defined country (two-letter code).
 * @param  {string[]?} countries - A list of countries available.
 * @param  {boolean} includeInternationalOption - Whether "International" country option is available.
 * @param  {object} metadata - `libphonenumber-js` metadata
 * @return {string?}
 */
function getPreSelectedCountry(phoneNumber, country, countries, includeInternationalOption, metadata) {
	// If can get country from E.164 phone number
	// then it overrides the `country` passed (or not passed).
	if (phoneNumber && phoneNumber.country) {
		// `country` will be left `undefined` in case of non-detection.
		country = phoneNumber.country;
	}

	// Only pre-select a country if it's in the available `countries` list.
	if (countries && countries.indexOf(country) < 0) {
		country = undefined;
	}

	// If there will be no "International" option
	// then some `country` must be selected.
	// It will still be the wrong country though.
	// But still country `<select/>` can't be left in a broken state.
	if (!country && !includeInternationalOption && countries && countries.length > 0) {
		country = countries[0];
	}

	return country;
}

/**
 * Generates a sorted list of country `<select/>` options.
 * @param  {string[]} countries - A list of two-letter ("ISO 3166-1 alpha-2") country codes.
 * @param  {object} labels - Custom country labels. E.g. `{ RU: 'Россия', US: 'США', ... }`.
 * @param  {boolean} includeInternationalOption - Whether should include "International" option at the top of the list.
 * @return {object[]} A list of objects having shape `{ value : string, label : string }`.
 */
function getCountrySelectOptions(countries, country_names, includeInternationalOption) {
	// Generates a `<Select/>` option for each country.
	var country_select_options = countries.map(function (country) {
		return {
			value: country,
			label: country_names[country]
		};
	});

	// Sort the list of countries alphabetically.
	country_select_options.sort(function (a, b) {
		return compare_strings(a.label, b.label);
	});

	// Add the "International" option to the country list (if suitable)
	if (includeInternationalOption) {
		country_select_options.unshift({
			label: country_names.ZZ
		});
	}

	return country_select_options;
}

/**
 * Parses a E.164 phone number to an instance of `PhoneNumber` class.
 * @param {string?} value = E.164 phone number.
 * @param  {object} metadata - `libphonenumber-js` metadata
 * @example
 * parsePhoneNumber('+78005553535')
 */
function parsePhoneNumber(value, metadata) {
	return (0, _core.parsePhoneNumberFromString)(value || '', metadata);
}

/**
 * Generates national number digits for a parsed phone.
 * May prepend national prefix.
 * The phone number must be a complete and valid phone number.
 * @param  {object} phoneNumber - An instance of `PhoneNumber` class.
 * @param  {object} metadata - `libphonenumber-js` metadata
 * @return {string}
 * @example
 * getNationalNumberDigits({ country: 'RU', phone: '8005553535' })
 * // returns '88005553535'
 */
function generateNationalNumberDigits(phoneNumber) {
	return phoneNumber.formatNational().replace(/\D/g, '');
}

/**
 * Migrates parsed `<input/>` `value` for the newly selected `country`.
 * @param {string?} value - The `value` parsed from phone number `<input/>` (it's the `parsed_input` state property, not the `value` property).
 * @param {string?} previousCountry - Previously selected country.
 * @param {string?} newCountry - Newly selected country. Can't be same as previously selected country.
 * @param {object} metadata - `libphonenumber-js` metadata.
 * @param {boolean} preferNationalFormat - whether should attempt to convert from international to national number for the new country.
 * @return {string?}
 */
function migrateParsedInputForNewCountry(value, previous_country, new_country, metadata, preferNationalFormat) {
	// If `parsed_input` is empty
	// then no need to migrate anything.
	if (!value) {
		return value;
	}

	// If switching to some country.
	// (from "International" or another country)
	// If switching from "International" then `value` starts with a `+`.
	// Otherwise it may or may not start with a `+`.
	if (new_country) {
		// If the phone number was entered in international format
		// then migrate it to the newly selected country.
		// The phone number may be incomplete.
		// The phone number entered not necessarily starts with
		// the previously selected country phone prefix.
		if (value[0] === '+') {
			// If the international phone number is for the new country
			// then convert it to local if required.
			if (preferNationalFormat) {
				// // If a phone number is being input in international form
				// // and the country can already be derived from it,
				// // and if it is the new country, then format as a national number.
				// const derived_country = get_country_from_possibly_incomplete_international_phone_number(value, metadata)
				// if (derived_country === new_country)
				// {
				// 	return strip_country_calling_code(value, derived_country, metadata)
				// }

				// Actually, the two countries don't necessarily need to match:
				// the condition could be looser here, because several countries
				// might share the same international phone number format
				// (for example, "NANPA" countries like US, Canada, etc).
				// The looser condition would be just "same nternational phone number format"
				// which would mean "same country calling code" in the context of `libphonenumber-js`.
				if (value.indexOf('+' + (0, _core.getCountryCallingCode)(new_country, metadata)) === 0) {
					return strip_country_calling_code(value, new_country, metadata);
				}

				// Simply discard the previously entered international phone number,
				// because otherwise any "smart" transformation like getting the
				// "national (significant) number" part and then prepending the
				// newly selected country's "country calling code" to it
				// would just be confusing for a user without being actually useful.
				return '';

				// // Simply strip the leading `+` character
				// // therefore simply converting all digits into a "local" phone number.
				// // https://github.com/catamphetamine/react-phone-number-input/issues/287
				// return value.slice(1)
			}

			// If the international phone number already contains
			// any country calling code then trim the country calling code part.
			// (that could also be the newly selected country phone code prefix as well)
			// `value` doesn't neccessarily belong to `previous_country`.
			// (e.g. if a user enters an international number
			//  not belonging to any of the reduced `countries` list).
			value = strip_country_calling_code(value, previous_country, metadata);

			// Prepend country calling code prefix
			// for the newly selected country.
			return e164(value, new_country, metadata) || '+' + (0, _core.getCountryCallingCode)(new_country, metadata);
		}
	}
	// If switching to "International" from a country.
	else {
			// If the phone number was entered in national format.
			if (value[0] !== '+') {
				// Format the national phone number as an international one.
				// The phone number entered not necessarily even starts with
				// the previously selected country phone prefix.
				// Even if the phone number belongs to whole another country
				// it will still be parsed into some national phone number.
				return e164(value, previous_country, metadata) || '';
			}
		}

	return value;
}

/**
 * Converts phone number digits to a (possibly incomplete) E.164 phone number.
 * @param  {string?} number - A possibly incomplete phone number digits string. Can be a possibly incomplete E.164 phone number.
 * @param  {string?} country
 * @param  {[object} metadata - `libphonenumber-js` metadata.
 * @return {string?}
 */
function e164(number, country, metadata) {
	if (!number) {
		return;
	}

	// If the phone number is being input in international format.
	if (number[0] === '+') {
		// If it's just the `+` sign then return nothing.
		if (number === '+') {
			return;
		}

		// If there are any digits then the `value` is returned as is.
		return number;
	}

	// For non-international phone numbers
	// an accompanying country code is required.
	if (!country) {
		return;
	}

	var partial_national_significant_number = get_national_significant_number_part(number, country, metadata);

	if (partial_national_significant_number) {
		return '+' + (0, _core.getCountryCallingCode)(country, metadata) + partial_national_significant_number;
	}
}

/**
 * Trims phone number digits if they exceed the maximum possible length
 * for a national (significant) number for the country.
 * @param  {string} number - A possibly incomplete phone number digits string. Can be a possibly incomplete E.164 phone number.
 * @param  {string} country
 * @param  {object} metadata - `libphonenumber-js` metadata.
 * @return {string} Can be empty.
 */
function trimNumber(number, country, metadata) {
	var nationalSignificantNumberPart = get_national_significant_number_part(number, country, metadata);
	var overflowDigitsCount = nationalSignificantNumberPart.length - getMaxNumberLength(country, metadata);
	if (overflowDigitsCount > 0) {
		return number.slice(0, number.length - overflowDigitsCount);
	}
	return number;
}

function getMaxNumberLength(country, metadata) {
	// Get "possible lengths" for a phone number of the country.
	metadata = new _core.Metadata(metadata);
	metadata.country(country);
	// Return the last "possible length".
	return metadata.possibleLengths()[metadata.possibleLengths().length - 1];
}

// If the phone number being input is an international one
// then tries to derive the country from the phone number.
// (regardless of whether there's any country currently selected)
/**
 * @param {string} parsedInput - A possibly incomplete E.164 phone number.
 * @param {string?} country - Currently selected country.
 * @param {string[]?} countries - A list of available countries. If not passed then "all countries" are assumed.
 * @param {boolean} includeInternationalOption - Whether "International" country option is available.
 * @param  {object} metadata - `libphonenumber-js` metadata.
 * @return {string?}
 */
function getCountryForPartialE164Number(partialE164Number, country, countries, includeInternationalOption, metadata) {
	if (partialE164Number === '+') {
		// Don't change the currently selected country yet.
		return country;
	}

	var derived_country = get_country_from_possibly_incomplete_international_phone_number(partialE164Number, metadata);

	// If a phone number is being input in international form
	// and the country can already be derived from it,
	// then select that country.
	if (derived_country && (!countries || countries.indexOf(derived_country) >= 0)) {
		return derived_country;
	}
	// If "International" country option has not been disabled
	// and the international phone number entered doesn't correspond
	// to the currently selected country then reset the currently selected country.
	else if (country && includeInternationalOption && !could_number_belong_to_country(partialE164Number, country, metadata)) {
			return undefined;
		}

	// Don't change the currently selected country.
	return country;
}

/**
 * Parses `<input/>` value. Derives `country` from `input`. Derives an E.164 `value`.
 * @param  {string?} input — Parsed `<input/>` value. Examples: `""`, `"+"`, `"+123"`, `"123"`.
 * @param  {string?} prevInput — Previous parsed `<input/>` value. Examples: `""`, `"+"`, `"+123"`, `"123"`.
 * @param  {string?} country - Currently selected country.
 * @param  {string[]?} countries - A list of available countries. If not passed then "all countries" are assumed.
 * @param  {boolean} includeInternationalOption - Whether "International" country option is available.
 * @param  {boolean} limitMaxLength — Whether to enable limiting phone number max length.
 * @param  {object} metadata - `libphonenumber-js` metadata.
 * @return {object} An object of shape `{ input, country, value }`.
 */
function parseInput(input, prevInput, country, countries, includeInternationalOption, limitMaxLength, metadata) {
	// Trim the input to not exceed the maximum possible number length.
	if (input && country && limitMaxLength) {
		input = trimNumber(input, country, metadata);
	}

	// If this `onChange()` event was triggered
	// as a result of selecting "International" country
	// then force-prepend a `+` sign if the phone number
	// `<input/>` value isn't in international format.
	if (input && !country && input[0] !== '+') {
		input = '+' + input;
	}

	// If the previously entered phone number
	// has been entered in international format
	// and the user decides to erase it,
	// then also reset the `country`
	// because it was most likely automatically selected
	// while the user was typing in the phone number
	// in international format.
	// This fixes the issue when a user is presented
	// with a phone number input with no country selected
	// and then types in their local phone number
	// then discovers that the input's messed up
	// (a `+` has been prepended at the start of their input
	//  and a random country has been selected),
	// decides to undo it all by erasing everything
	// and then types in their local phone number again
	// resulting in a seemingly correct phone number
	// but in reality that phone number has incorrect country.
	// https://github.com/catamphetamine/react-phone-number-input/issues/273
	if (!input && prevInput && prevInput[0] === '+') {
		country = undefined;
	}
	// Also resets such "randomly" selected country
	// as soon as the user erases the number
	// digit-by-digit up to the leading `+` sign.
	if (input === '+' && prevInput && prevInput[0] === '+' && prevInput.length > '+'.length) {
		country = undefined;
	}

	// Generate the new `value` property.
	var value = void 0;
	if (input) {
		if (input[0] === '+') {
			if (input !== '+') {
				value = input;
			}
		} else {
			value = e164(input, country, metadata);
		}
	}

	// Derive the country from the phone number.
	// (regardless of whether there's any country currently selected)
	if (value) {
		country = getCountryForPartialE164Number(value, country, countries, includeInternationalOption, metadata);
	}

	return {
		input: input,
		country: country,
		value: value
	};
}

/**
 * Determines the country for a given (possibly incomplete) E.164 phone number.
 * @param  {string} number - A possibly incomplete E.164 phone number.
 * @param  {object} metadata - `libphonenumber-js` metadata.
 * @return {string?}
 */
function get_country_from_possibly_incomplete_international_phone_number(number, metadata) {
	var formatter = new _core.AsYouType(null, metadata);
	formatter.input(number);
	// `001` is a special "non-geograpical entity" code
	// in Google's `libphonenumber` library.
	if (formatter.country === '001') {
		return;
	}
	return formatter.country;
}

/**
 * Compares two strings.
 * A helper for `Array.sort()`.
 */
function compare_strings(a, b) {
	// Use `String.localeCompare` if it's available.
	// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
	// Which means everyone except IE <= 10 and Safari <= 10.
	// `localeCompare()` is available in latest Node.js versions.
	/* istanbul ignore else */
	if (String.prototype.localeCompare) {
		return a.localeCompare(b);
	}
	/* istanbul ignore next */
	return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * Strips `+${countryCallingCode}` prefix from an E.164 phone number.
 * @param {string} number - (possibly incomplete) E.164 phone number.
 * @param {string?} country - A possible country for this phone number.
 * @param {object} metadata - `libphonenumber-js` metadata.
 * @return {string}
 */
function strip_country_calling_code(number, country, metadata) {
	// Just an optimization, so that it
	// doesn't have to iterate through all country calling codes.
	if (country) {
		var country_calling_prefix = '+' + (0, _core.getCountryCallingCode)(country, metadata);

		// If `country` fits the actual `number`.
		if (number.length < country_calling_prefix.length) {
			if (country_calling_prefix.indexOf(number) === 0) {
				return '';
			}
		} else {
			if (number.indexOf(country_calling_prefix) === 0) {
				return number.slice(country_calling_prefix.length);
			}
		}
	}

	// If `country` doesn't fit the actual `number`.
	// Try all available country calling codes.
	for (var _iterator = Object.keys(metadata.country_calling_codes), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var country_calling_code = _ref;

		if (number.indexOf(country_calling_code) === '+'.length) {
			return number.slice('+'.length + country_calling_code.length);
		}
	}

	return '';
}

/**
 * Parses a partially entered national phone number digits
 * (or a partially entered E.164 international phone number)
 * and returns the national significant number part.
 * National significant number returned doesn't come with a national prefix.
 * @param {string} number - National number digits. Or possibly incomplete E.164 phone number.
 * @param {string?} country
 * @param {object} metadata - `libphonenumber-js` metadata.
 * @return {string} Can be empty.
 */
function get_national_significant_number_part(number, country, metadata) {
	// Create "as you type" formatter.
	var formatter = new _core.AsYouType(country, metadata);

	// Input partial national phone number.
	formatter.input(number);

	// Return the parsed partial national phone number.
	return formatter.getNationalNumber();
}

/**
 * Checks if a partially entered E.164 phone number could belong to a country.
 * @param  {string} number
 * @param  {string} country
 * @return {boolean}
 */
function could_number_belong_to_country(number, country, metadata) {
	var country_calling_code = (0, _core.getCountryCallingCode)(country, metadata);

	var i = 0;
	while (i + 1 < number.length && i < country_calling_code.length) {
		if (number[i + 1] !== country_calling_code[i]) {
			return false;
		}
		i++;
	}

	return true;
}
//# sourceMappingURL=input-control.js.map

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(418);

Object.defineProperty(exports, 'parseRFC3966', {
  enumerable: true,
  get: function get() {
    return _core.parseRFC3966;
  }
});
Object.defineProperty(exports, 'formatRFC3966', {
  enumerable: true,
  get: function get() {
    return _core.formatRFC3966;
  }
});
//# sourceMappingURL=RFC3966.js.map

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = formatPhoneNumber;
exports.formatPhoneNumberIntl = formatPhoneNumberIntl;

var _core = __webpack_require__(418);

/**
 * Formats a phone number.
 * Is a proxy for `libphonenumber-js`'s `.format()` function of a parsed `PhoneNumber`.
 * @param  {string} value
 * @param  {string} [format]
 * @param  {object} metadata
 * @return {string}
 */
function formatPhoneNumber(value, format, metadata) {
	if (!metadata) {
		if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
			metadata = format;
			format = 'NATIONAL';
		}
	}
	if (!value) {
		return '';
	}
	var phoneNumber = (0, _core.parsePhoneNumberFromString)(value, metadata);
	if (!phoneNumber) {
		return '';
	}
	// Deprecated.
	// Legacy `format`s.
	switch (format) {
		case 'National':
			format = 'NATIONAL';
			break;
		case 'International':
			format = 'INTERNATIONAL';
			break;
	}
	return phoneNumber.format(format);
}

function formatPhoneNumberIntl(value, metadata) {
	return formatPhoneNumber(value, 'INTERNATIONAL', metadata);
}
//# sourceMappingURL=formatPhoneNumber.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = formatPhoneNumber;
exports.formatPhoneNumberIntl = formatPhoneNumberIntl;

var _formatPhoneNumber = __webpack_require__(771);

var _formatPhoneNumber2 = _interopRequireDefault(_formatPhoneNumber);

var _metadataMin = __webpack_require__(432);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in the legacy root `/index.js` export file.
// (importing directly from `react-phone-number-input` is currently deprecated)
// In some next major version this file will be removed
// and `main` and `module` entries in `package.json` will be
// redirected to `/min/index.js` and `/min/index.commonjs.js`
// which don't import this file.

function formatPhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _formatPhoneNumber2.default.apply(this, parameters);
}

function formatPhoneNumberIntl() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _formatPhoneNumber.formatPhoneNumberIntl.apply(this, parameters);
}
//# sourceMappingURL=formatPhoneNumberDefaultMetadata.js.map

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(418);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _core.getCountries;
  }
});
//# sourceMappingURL=getCountries.js.map

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getCountries;

var _getCountries = __webpack_require__(773);

var _getCountries2 = _interopRequireDefault(_getCountries);

var _metadataMin = __webpack_require__(432);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCountries() {
	return (0, _getCountries2.default)(_metadataMin2.default);
}
//# sourceMappingURL=getCountriesDefaultMetadata.js.map

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isPossiblePhoneNumber;

var _core = __webpack_require__(418);

function isPossiblePhoneNumber(value, metadata) {
	if (!value) {
		return false;
	}
	var phoneNumber = (0, _core.parsePhoneNumberFromString)(value, metadata);
	if (!phoneNumber) {
		return false;
	}
	return phoneNumber.isPossible();
}
//# sourceMappingURL=isPossiblePhoneNumber.js.map

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isPossiblePhoneNumber;

var _isPossiblePhoneNumber = __webpack_require__(775);

var _isPossiblePhoneNumber2 = _interopRequireDefault(_isPossiblePhoneNumber);

var _metadataMin = __webpack_require__(432);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in the legacy root `/index.js` export file.
// (importing directly from `react-phone-number-input` is currently considered deprecated)
// In some next major version this file will be removed
// and `main` and `module` entries in `package.json` will be
// redirected to `/min/index.js` and `/min/index.commonjs.js`
// which don't import this file.

function isPossiblePhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _isPossiblePhoneNumber2.default.apply(this, parameters);
}
//# sourceMappingURL=isPossiblePhoneNumberDefaultMetadata.js.map

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isValidPhoneNumber;

var _core = __webpack_require__(418);

function isValidPhoneNumber(value, metadata) {
	if (!value) {
		return false;
	}
	var phoneNumber = (0, _core.parsePhoneNumberFromString)(value, metadata);
	if (!phoneNumber) {
		return false;
	}
	return phoneNumber.isValid();
}
//# sourceMappingURL=isValidPhoneNumber.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isValidPhoneNumber;

var _isValidPhoneNumber = __webpack_require__(777);

var _isValidPhoneNumber2 = _interopRequireDefault(_isValidPhoneNumber);

var _metadataMin = __webpack_require__(432);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in the legacy root `/index.js` export file.
// (importing directly from `react-phone-number-input` is currently considered deprecated)
// In some next major version this file will be removed
// and `main` and `module` entries in `package.json` will be
// redirected to `/min/index.js` and `/min/index.commonjs.js`
// which don't import this file.

function isValidPhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _isValidPhoneNumber2.default.apply(this, parameters);
}
//# sourceMappingURL=isValidPhoneNumberDefaultMetadata.js.map

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(418);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _core.parsePhoneNumberFromString;
  }
});
//# sourceMappingURL=parsePhoneNumber.js.map

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parsePhoneNumber;

var _parsePhoneNumber = __webpack_require__(779);

var _parsePhoneNumber2 = _interopRequireDefault(_parsePhoneNumber);

var _metadataMin = __webpack_require__(432);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in the legacy root `/index.js` export file.
// (importing directly from `react-phone-number-input` is currently deprecated)
// In some next major version this file will be removed
// and `main` and `module` entries in `package.json` will be
// redirected to `/min/index.js` and `/min/index.commonjs.js`
// which don't import this file.

function parsePhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _parsePhoneNumber2.default.apply(this, parameters);
}
//# sourceMappingURL=parsePhoneNumberDefaultMetadata.js.map

/***/ }),

/***/ 781:
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
  var ReactPropTypesSecret = __webpack_require__(648);
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

/***/ 782:
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

var ReactPropTypesSecret = __webpack_require__(648);
var checkPropTypes = __webpack_require__(781);

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

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreatableSelect = exports.defaultProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(784);

var _Select2 = _interopRequireDefault(_Select);

var _utils = __webpack_require__(590);

var _stateManager = __webpack_require__(799);

var _stateManager2 = _interopRequireDefault(_stateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var compareOption = function compareOption(inputValue, option) {
  var candidate = inputValue.toLowerCase();
  return option.value.toLowerCase() === candidate || option.label.toLowerCase() === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return 'Create "' + inputValue + '"';
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};

var defaultProps = exports.defaultProps = _extends({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);

var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(Creatable, _Component);

    function Creatable(props) {
      _classCallCheck(this, Creatable);

      var _this = _possibleConstructorReturn(this, (Creatable.__proto__ || Object.getPrototypeOf(Creatable)).call(this, props));

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }
        var newOption = _this.state.newOption;

        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = { action: 'create-option' };
            if (isMulti) {
              onChange([].concat(_toConsumableArray((0, _utils.cleanValue)(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }
        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    _createClass(Creatable, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;

        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, (0, _utils.cleanValue)(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }
        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray(options)) : [].concat(_toConsumableArray(options), [newOption]) : options
        });
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var props = _objectWithoutProperties(this.props, []);

        var options = this.state.options;

        return _react2.default.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(_react.Component), _class.defaultProps = defaultProps, _temp;
};

// TODO: do this in package entrypoint
exports.makeCreatableSelect = makeCreatableSelect;
exports.default = (0, _stateManager2.default)(makeCreatableSelect(_Select2.default));

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _memoizeOne = __webpack_require__(831);

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _reactFastCompare = __webpack_require__(798);

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _filters = __webpack_require__(789);

var _index = __webpack_require__(797);

var _index2 = __webpack_require__(785);

var _utils = __webpack_require__(590);

var _builtins = __webpack_require__(786);

var _index3 = __webpack_require__(787);

var _styles = __webpack_require__(800);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: (0, _utils.isTouchCapable)(),
  captureMenuScroll: !(0, _utils.isTouchCapable)(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: (0, _filters.createFilter)(),
  formatGroupLabel: _builtins.formatGroupLabel,
  getOptionLabel: _builtins.getOptionLabel,
  getOptionValue: _builtins.getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: _builtins.isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !(0, _utils.isMobileDevice)(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + ' result' + (count !== 1 ? 's' : '') + ' available';
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

var instanceId = 1;

var Select = function (_Component) {
  _inherits(Select, _Component);

  // Lifecycle
  // ------------------------------

  // Refs
  // ------------------------------

  // Misc. Instance Properties
  // ------------------------------

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value;

    _this.cacheComponents = (0, _memoizeOne2.default)(_this.cacheComponents, _reactFastCompare2.default).bind(_this);
    _this.cacheComponents(props.components);
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var selectValue = (0, _utils.cleanValue)(value);
    var menuOptions = _this.buildMenuOptions(props, selectValue);

    _this.state.menuOptions = menuOptions;
    _this.state.selectValue = selectValue;
    return _this;
  } // TODO


  _createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          options = _props.options,
          value = _props.value,
          inputValue = _props.inputValue;
      // re-cache custom components

      this.cacheComponents(nextProps.components);
      // rebuild the menu options
      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var _selectValue = (0, _utils.cleanValue)(nextProps.value);
        var _menuOptions = this.buildMenuOptions(nextProps, _selectValue);
        var _focusedValue = this.getNextFocusedValue(_selectValue);
        var _focusedOption = this.getNextFocusedOption(_menuOptions.focusable);
        this.setState({ menuOptions: _menuOptions, selectValue: _selectValue, focusedOption: _focusedOption, focusedValue: _focusedValue });
      }
      // some updates should toggle the state of the input visibility
      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          isDisabled = _props2.isDisabled,
          menuIsOpen = _props2.menuIsOpen;
      var isFocused = this.state.isFocused;


      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        (0, _utils.scrollIntoView)(this.menuListRef, this.focusedOptionRef);
      }
      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: 'onMenuOpen',

    // ==============================
    // Consumer Handlers
    // ==============================

    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: 'onMenuClose',
    value: function onMenuClose() {
      var _props3 = this.props,
          isSearchable = _props3.isSearchable,
          isMulti = _props3.isMulti;

      this.announceAriaLiveContext({
        event: 'input',
        context: { isSearchable: isSearchable, isMulti: isMulti }
      });
      this.onInputChange('', { action: 'menu-close' });
      this.props.onMenuClose();
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================

  }, {
    key: 'focusInput',
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: 'blurInput',
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers

  }, {
    key: 'openMenu',
    value: function openMenu(focusOption) {
      var _state = this.state,
          menuOptions = _state.menuOptions,
          selectValue = _state.selectValue;
      var isMulti = this.props.isMulti;

      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.inputIsHiddenAfterUpdate = false;

      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });

      this.announceAriaLiveContext({ event: 'menu' });
    }
  }, {
    key: 'focusValue',
    value: function focusValue(direction) {
      var _props4 = this.props,
          isMulti = _props4.isMulti,
          isSearchable = _props4.isSearchable;
      var _state2 = this.state,
          selectValue = _state2.selectValue,
          focusedValue = _state2.focusedValue;

      // Only multiselects support value focusing

      if (!isMulti) return;

      this.setState({
        focusedOption: null
      });

      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({ event: 'value' });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: { isSearchable: isSearchable, isMulti: isMulti }
        });
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: 'focusOption',
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _state3 = this.state,
          focusedOption = _state3.focusedOption,
          menuOptions = _state3.menuOptions;

      var options = menuOptions.focusable;

      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({ event: 'menu' });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: 'getCommonProps',


    // ==============================
    // Getters
    // ==============================

    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;

      var hasValue = this.hasValue();
      var getValue = function getValue() {
        return selectValue;
      };
      var cxPrefix = classNamePrefix;

      var cx = _utils.classNames.bind(null, cxPrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props
      };
    }
  }, {
    key: 'getNextFocusedValue',
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }
      var _state4 = this.state,
          focusedValue = _state4.focusedValue,
          lastSelectValue = _state4.selectValue;

      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }
      return null;
    }
  }, {
    key: 'getNextFocusedOption',
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;

      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }

    // ==============================
    // Helpers
    // ==============================

  }, {
    key: 'hasValue',
    value: function hasValue() {
      var selectValue = this.state.selectValue;

      return selectValue.length > 0;
    }
  }, {
    key: 'hasOptions',
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: 'countOptions',
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: 'isClearable',
    value: function isClearable() {
      var _props5 = this.props,
          isClearable = _props5.isClearable,
          isMulti = _props5.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;

      return isClearable;
    }
  }, {
    key: 'isOptionDisabled',
    value: function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: 'isOptionSelected',
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;
      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }
      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: 'filterOption',
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: 'formatOptionLabel',
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue2 = this.state.selectValue;

        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue2
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: 'formatGroupLabel',
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: 'startListeningComposition',


    // ==============================
    // Composition Handlers
    // ==============================

    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: 'stopListeningComposition',
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: 'startListeningToTouch',


    // ==============================
    // Touch Handlers
    // ==============================

    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: 'stopListeningToTouch',
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }

    // ==============================
    // Focus Handlers
    // ==============================

    // ==============================
    // Keyboard Handlers
    // ==============================

  }, {
    key: 'buildMenuOptions',


    // ==============================
    // Menu Options
    // ==============================

    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === undefined ? '' : _props$inputValue,
          options = props.options;


      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);
        var isSelected = _this3.isOptionSelected(option, selectValue);
        var label = _this3.getOptionLabel(option);
        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({ label: label, value: value, data: option }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = _this3.getElementId('option') + '-' + id;

        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            role: 'option',
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;

          var items = item.options;

          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + '-' + i);
            if (option && !option.isDisabled) acc.focusable.push(child);
            return option;
          }).filter(Boolean);
          if (children.length) {
            var groupId = _this3.getElementId('group') + '-' + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, '' + itemIndex);
          if (option) {
            acc.render.push(option);
            if (!option.isDisabled) acc.focusable.push(item);
          }
        }
        return acc;
      }, { render: [], focusable: [] });
    }

    // ==============================
    // Renderers
    // ==============================

  }, {
    key: 'constructAriaLiveMessage',
    value: function constructAriaLiveMessage() {
      var _state5 = this.state,
          ariaLiveContext = _state5.ariaLiveContext,
          selectValue = _state5.selectValue,
          focusedValue = _state5.focusedValue,
          focusedOption = _state5.focusedOption;
      var _props6 = this.props,
          options = _props6.options,
          menuIsOpen = _props6.menuIsOpen,
          inputValue = _props6.inputValue,
          screenReaderStatus = _props6.screenReaderStatus;

      // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? (0, _index2.valueFocusAriaMessage)({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : '';
      // An aria live message representing the currently focused option in the select.
      var focusedOptionMsg = focusedOption && menuIsOpen ? (0, _index2.optionFocusAriaMessage)({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : '';
      // An aria live message representing the set of focusable results and current searchterm/inputvalue.
      var resultsMsg = (0, _index2.resultsAriaMessage)({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({ count: this.countOptions() })
      });

      return focusedValueMsg + ' ' + focusedOptionMsg + ' ' + resultsMsg + ' ' + ariaLiveContext;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props7 = this.props,
          isDisabled = _props7.isDisabled,
          isSearchable = _props7.isSearchable,
          inputId = _props7.inputId,
          inputValue = _props7.inputValue,
          tabIndex = _props7.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;


      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return _react2.default.createElement(_index.DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _utils.noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          tabIndex: tabIndex,
          value: ''
        });
      }

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      var cx = this.commonProps.cx;


      return _react2.default.createElement(Input, _extends({
        autoCapitalize: 'none',
        autoComplete: 'off',
        autoCorrect: 'off',
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: 'false',
        tabIndex: tabIndex,
        type: 'text',
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: 'renderPlaceholderOrValue',
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _components = this.components,
          MultiValue = _components.MultiValue,
          MultiValueContainer = _components.MultiValueContainer,
          MultiValueLabel = _components.MultiValueLabel,
          MultiValueRemove = _components.MultiValueRemove,
          SingleValue = _components.SingleValue,
          Placeholder = _components.Placeholder;
      var commonProps = this.commonProps;
      var _props8 = this.props,
          controlShouldRenderValue = _props8.controlShouldRenderValue,
          isDisabled = _props8.isDisabled,
          isMulti = _props8.isMulti,
          inputValue = _props8.inputValue,
          placeholder = _props8.placeholder;
      var _state6 = this.state,
          selectValue = _state6.selectValue,
          focusedValue = _state6.focusedValue;


      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : _react2.default.createElement(
          Placeholder,
          _extends({}, commonProps, { key: 'placeholder', isDisabled: isDisabled }),
          placeholder
        );
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt) {
          var isFocused = opt === focusedValue;
          return _react2.default.createElement(
            MultiValue,
            _extends({}, commonProps, {
              components: {
                Container: MultiValueContainer,
                Label: MultiValueLabel,
                Remove: MultiValueRemove
              },
              isFocused: isFocused,
              isDisabled: isDisabled,
              key: _this4.getOptionValue(opt),
              removeProps: {
                onClick: function onClick() {
                  return _this4.removeValue(opt);
                },
                onTouchEnd: function onTouchEnd() {
                  return _this4.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              },
              data: opt
            }),
            _this4.formatOptionLabel(opt, 'value')
          );
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return _react2.default.createElement(
        SingleValue,
        _extends({}, commonProps, { data: singleValue, isDisabled: isDisabled }),
        this.formatOptionLabel(singleValue, 'value')
      );
    }
  }, {
    key: 'renderClearIndicator',
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _props9 = this.props,
          isDisabled = _props9.isDisabled,
          isLoading = _props9.isLoading;
      var isFocused = this.state.isFocused;


      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };

      return _react2.default.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderLoadingIndicator',
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _props10 = this.props,
          isDisabled = _props10.isDisabled,
          isLoading = _props10.isLoading;
      var isFocused = this.state.isFocused;


      if (!LoadingIndicator || !isLoading) return null;

      var innerProps = { 'aria-hidden': 'true' };
      return _react2.default.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderIndicatorSeparator',
    value: function renderIndicatorSeparator() {
      var _components2 = this.components,
          DropdownIndicator = _components2.DropdownIndicator,
          IndicatorSeparator = _components2.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;

      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;


      return _react2.default.createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderDropdownIndicator',
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;


      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };

      return _react2.default.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this5 = this;

      var _components3 = this.components,
          Group = _components3.Group,
          GroupHeading = _components3.GroupHeading,
          Menu = _components3.Menu,
          MenuList = _components3.MenuList,
          MenuPortal = _components3.MenuPortal,
          LoadingMessage = _components3.LoadingMessage,
          NoOptionsMessage = _components3.NoOptionsMessage,
          Option = _components3.Option;
      var commonProps = this.commonProps;
      var _state7 = this.state,
          focusedOption = _state7.focusedOption,
          menuOptions = _state7.menuOptions;
      var _props11 = this.props,
          captureMenuScroll = _props11.captureMenuScroll,
          inputValue = _props11.inputValue,
          isLoading = _props11.isLoading,
          loadingMessage = _props11.loadingMessage,
          minMenuHeight = _props11.minMenuHeight,
          maxMenuHeight = _props11.maxMenuHeight,
          menuIsOpen = _props11.menuIsOpen,
          menuPlacement = _props11.menuPlacement,
          menuPosition = _props11.menuPosition,
          menuPortalTarget = _props11.menuPortalTarget,
          menuShouldBlockScroll = _props11.menuShouldBlockScroll,
          menuShouldScrollIntoView = _props11.menuShouldScrollIntoView,
          noOptionsMessage = _props11.noOptionsMessage,
          onMenuScrollToTop = _props11.onMenuScrollToTop,
          onMenuScrollToBottom = _props11.onMenuScrollToBottom;


      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;

        return _react2.default.createElement(
          Option,
          _extends({}, commonProps, props, { isFocused: isFocused }),
          _this5.formatOptionLabel(props.data, 'menu')
        );
      };

      var menuUI = void 0;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutProperties(item, ['type']);

            var headingId = item.key + '-heading';

            return _react2.default.createElement(
              Group,
              _extends({}, commonProps, group, {
                Heading: GroupHeading,
                headingProps: {
                  id: headingId
                },
                label: _this5.formatGroupLabel(item.data)
              }),
              item.options.map(function (option) {
                return render(option);
              })
            );
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({ inputValue: inputValue });
        if (message === null) return null;
        menuUI = _react2.default.createElement(
          LoadingMessage,
          commonProps,
          message
        );
      } else {
        var _message = noOptionsMessage({ inputValue: inputValue });
        if (_message === null) return null;
        menuUI = _react2.default.createElement(
          NoOptionsMessage,
          commonProps,
          _message
        );
      }

      var menuElement = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Menu,
          _extends({}, commonProps, {
            innerProps: {
              onMouseDown: this.onMenuMouseDown,
              onMouseMove: this.onMenuMouseMove
            },
            isLoading: isLoading,
            minMenuHeight: minMenuHeight,
            maxMenuHeight: maxMenuHeight,
            menuPlacement: menuPlacement,
            menuPosition: menuPosition,
            menuShouldScrollIntoView: menuShouldScrollIntoView
          }),
          _react2.default.createElement(
            _index.ScrollCaptor,
            {
              isEnabled: captureMenuScroll,
              onTopArrive: onMenuScrollToTop,
              onBottomArrive: onMenuScrollToBottom
            },
            _react2.default.createElement(
              _index.ScrollBlock,
              { isEnabled: menuShouldBlockScroll },
              _react2.default.createElement(
                MenuList,
                _extends({}, commonProps, {
                  innerRef: this.getMenuListRef,
                  isLoading: isLoading,
                  maxHeight: maxMenuHeight
                }),
                menuUI
              )
            )
          )
        )
      );

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? _react2.default.createElement(
        MenuPortal,
        _extends({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition
        }),
        menuElement
      ) : menuElement;
    }
  }, {
    key: 'renderFormField',
    value: function renderFormField() {
      var _this6 = this;

      var _props12 = this.props,
          delimiter = _props12.delimiter,
          isDisabled = _props12.isDisabled,
          isMulti = _props12.isMulti,
          name = _props12.name;
      var selectValue = this.state.selectValue;


      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var _value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return _react2.default.createElement('input', { name: name, type: 'hidden', value: _value });
        } else {
          return _react2.default.createElement(
            'div',
            null,
            selectValue.map(function (opt, i) {
              return _react2.default.createElement('input', {
                key: 'i-' + i,
                name: name,
                type: 'hidden',
                value: _this6.getOptionValue(opt)
              });
            })
          );
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return _react2.default.createElement('input', { name: name, type: 'hidden', value: _value2 });
      }
    }
  }, {
    key: 'renderLiveRegion',
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return _react2.default.createElement(
        _index.A11yText,
        { 'aria-live': 'assertive' },
        _react2.default.createElement(
          'p',
          { id: 'aria-selection-event' },
          '\xA0',
          this.state.ariaLiveSelection
        ),
        _react2.default.createElement(
          'p',
          { id: 'aria-context' },
          '\xA0',
          this.constructAriaLiveMessage()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _components4 = this.components,
          Control = _components4.Control,
          IndicatorsContainer = _components4.IndicatorsContainer,
          SelectContainer = _components4.SelectContainer,
          ValueContainer = _components4.ValueContainer;
      var _props13 = this.props,
          className = _props13.className,
          id = _props13.id,
          isDisabled = _props13.isDisabled;
      var isFocused = this.state.isFocused;


      var commonProps = this.commonProps = this.getCommonProps();

      return _react2.default.createElement(
        SelectContainer,
        _extends({}, commonProps, {
          className: className,
          innerProps: {
            id: id,
            onKeyDown: this.onKeyDown
          },
          isDisabled: isDisabled,
          isFocused: isFocused
        }),
        this.renderLiveRegion(),
        _react2.default.createElement(
          Control,
          _extends({}, commonProps, {
            innerRef: this.getControlRef,
            innerProps: {
              onMouseDown: this.onControlMouseDown,
              onTouchEnd: this.onControlTouchEnd
            },
            isDisabled: isDisabled,
            isFocused: isFocused
          }),
          _react2.default.createElement(
            ValueContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderPlaceholderOrValue(),
            this.renderInput()
          ),
          _react2.default.createElement(
            IndicatorsContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderClearIndicator(),
            this.renderLoadingIndicator(),
            this.renderIndicatorSeparator(),
            this.renderDropdownIndicator()
          )
        ),
        this.renderMenu(),
        this.renderFormField()
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.defaultProps = defaultProps;

var _initialiseProps = function _initialiseProps() {
  var _this7 = this;

  this.state = {
    ariaLiveSelection: '',
    ariaLiveContext: '',
    focusedOption: null,
    focusedValue: null,
    inputIsHidden: false,
    isFocused: false,
    isComposing: false,
    menuOptions: { render: [], focusable: [] },
    selectValue: []
  };
  this.blockOptionHover = false;
  this.clearFocusValueOnUpdate = false;
  this.hasGroups = false;
  this.initialTouchX = 0;
  this.initialTouchY = 0;
  this.instancePrefix = '';
  this.openAfterFocus = false;
  this.scrollToFocusedOptionOnUpdate = false;
  this.controlRef = null;

  this.getControlRef = function (ref) {
    _this7.controlRef = ref;
  };

  this.focusedOptionRef = null;

  this.getFocusedOptionRef = function (ref) {
    _this7.focusedOptionRef = ref;
  };

  this.menuListRef = null;

  this.getMenuListRef = function (ref) {
    _this7.menuListRef = ref;
  };

  this.inputRef = null;

  this.getInputRef = function (ref) {
    _this7.inputRef = ref;
  };

  this.cacheComponents = function (components) {
    _this7.components = (0, _index3.defaultComponents)({ components: components });
  };

  this.focus = this.focusInput;
  this.blur = this.blurInput;

  this.setValue = function (newValue) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
    var option = arguments[2];
    var _props14 = _this7.props,
        closeMenuOnSelect = _props14.closeMenuOnSelect,
        isMulti = _props14.isMulti,
        onChange = _props14.onChange;

    _this7.onInputChange('', { action: 'set-value' });
    if (closeMenuOnSelect) {
      _this7.inputIsHiddenAfterUpdate = !isMulti;
      _this7.onMenuClose();
    }
    // when the select value should change, we should reset focusedValue
    _this7.clearFocusValueOnUpdate = true;
    onChange(newValue, { action: action, option: option });
  };

  this.selectOption = function (newValue) {
    var _props15 = _this7.props,
        blurInputOnSelect = _props15.blurInputOnSelect,
        isMulti = _props15.isMulti;


    if (isMulti) {
      var _selectValue3 = _this7.state.selectValue;

      if (_this7.isOptionSelected(newValue, _selectValue3)) {
        var candidate = _this7.getOptionValue(newValue);
        _this7.setValue(_selectValue3.filter(function (i) {
          return _this7.getOptionValue(i) !== candidate;
        }), 'deselect-option', newValue);
        _this7.announceAriaLiveSelection({
          event: 'deselect-option',
          context: { value: _this7.getOptionLabel(newValue) }
        });
      } else {
        _this7.setValue([].concat(_toConsumableArray(_selectValue3), [newValue]), 'select-option', newValue);
        _this7.announceAriaLiveSelection({
          event: 'select-option',
          context: { value: _this7.getOptionLabel(newValue) }
        });
      }
    } else {
      _this7.setValue(newValue, 'select-option');
      _this7.announceAriaLiveSelection({
        event: 'select-option',
        context: { value: _this7.getOptionLabel(newValue) }
      });
    }

    if (blurInputOnSelect) {
      _this7.blurInput();
    }
  };

  this.removeValue = function (removedValue) {
    var onChange = _this7.props.onChange;
    var selectValue = _this7.state.selectValue;

    var candidate = _this7.getOptionValue(removedValue);
    onChange(selectValue.filter(function (i) {
      return _this7.getOptionValue(i) !== candidate;
    }), {
      action: 'remove-value',
      removedValue: removedValue
    });
    _this7.announceAriaLiveSelection({
      event: 'remove-value',
      context: {
        value: removedValue ? _this7.getOptionLabel(removedValue) : undefined
      }
    });
    _this7.focusInput();
  };

  this.clearValue = function () {
    var _props16 = _this7.props,
        isMulti = _props16.isMulti,
        onChange = _props16.onChange;

    onChange(isMulti ? [] : null, { action: 'clear' });
  };

  this.popValue = function () {
    var onChange = _this7.props.onChange;
    var selectValue = _this7.state.selectValue;

    var lastSelectedValue = selectValue[selectValue.length - 1];
    _this7.announceAriaLiveSelection({
      event: 'pop-value',
      context: {
        value: lastSelectedValue ? _this7.getOptionLabel(lastSelectedValue) : undefined
      }
    });
    onChange(selectValue.slice(0, selectValue.length - 1), {
      action: 'pop-value',
      removedValue: lastSelectedValue
    });
  };

  this.getOptionLabel = function (data) {
    return _this7.props.getOptionLabel(data);
  };

  this.getOptionValue = function (data) {
    return _this7.props.getOptionValue(data);
  };

  this.getStyles = function (key, props) {
    var base = _styles.defaultStyles[key](props);
    base.boxSizing = 'border-box';
    var custom = _this7.props.styles[key];
    return custom ? custom(base, props) : base;
  };

  this.getElementId = function (element) {
    return _this7.instancePrefix + '-' + element;
  };

  this.getActiveDescendentId = function () {
    var menuIsOpen = _this7.props.menuIsOpen;
    var _state8 = _this7.state,
        menuOptions = _state8.menuOptions,
        focusedOption = _state8.focusedOption;


    if (!focusedOption || !menuIsOpen) return undefined;

    var index = menuOptions.focusable.indexOf(focusedOption);
    var option = menuOptions.render[index];

    return option && option.key;
  };

  this.announceAriaLiveSelection = function (_ref2) {
    var event = _ref2.event,
        context = _ref2.context;

    _this7.setState({
      ariaLiveSelection: (0, _index2.valueEventAriaMessage)(event, context)
    });
  };

  this.announceAriaLiveContext = function (_ref3) {
    var event = _ref3.event,
        context = _ref3.context;

    _this7.setState({
      ariaLiveContext: (0, _index2.instructionsAriaMessage)(event, _extends({}, context, {
        label: _this7.props['aria-label']
      }))
    });
  };

  this.onMenuMouseDown = function (event) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    _this7.focusInput();
  };

  this.onMenuMouseMove = function (event) {
    _this7.blockOptionHover = false;
  };

  this.onControlMouseDown = function (event) {
    var openMenuOnClick = _this7.props.openMenuOnClick;

    if (!_this7.state.isFocused) {
      if (openMenuOnClick) {
        _this7.openAfterFocus = true;
      }
      _this7.focusInput();
    } else if (!_this7.props.menuIsOpen) {
      _this7.openMenu('first');
    } else {
      _this7.onMenuClose();
    }
    // $FlowFixMe HTMLElement type does not have tagName property
    if (event.target.tagName !== 'INPUT') {
      event.preventDefault();
    }
  };

  this.onDropdownIndicatorMouseDown = function (event) {
    // ignore mouse events that weren't triggered by the primary button
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    if (_this7.props.isDisabled) return;
    var _props17 = _this7.props,
        isMulti = _props17.isMulti,
        menuIsOpen = _props17.menuIsOpen;

    _this7.focusInput();
    if (menuIsOpen) {
      _this7.inputIsHiddenAfterUpdate = !isMulti;
      _this7.onMenuClose();
    } else {
      _this7.openMenu('first');
    }
    event.preventDefault();
    event.stopPropagation();
  };

  this.onClearIndicatorMouseDown = function (event) {
    // ignore mouse events that weren't triggered by the primary button
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    _this7.clearValue();
    event.stopPropagation();
    _this7.openAfterFocus = false;
    setTimeout(function () {
      return _this7.focusInput();
    });
  };

  this.onScroll = function (event) {
    if (typeof _this7.props.closeMenuOnScroll === 'boolean') {
      if (event.target instanceof HTMLElement && (0, _utils.isDocumentElement)(event.target)) {
        _this7.props.onMenuClose();
      }
    } else if (typeof _this7.props.closeMenuOnScroll === 'function') {
      if (_this7.props.closeMenuOnScroll(event)) {
        _this7.props.onMenuClose();
      }
    }
  };

  this.onCompositionStart = function () {
    _this7.setState({
      isComposing: true
    });
  };

  this.onCompositionEnd = function () {
    _this7.setState({
      isComposing: false
    });
  };

  this.onTouchStart = function (_ref4) {
    var _ref4$touches = _slicedToArray(_ref4.touches, 1),
        touch = _ref4$touches[0];

    _this7.initialTouchX = touch.clientX;
    _this7.initialTouchY = touch.clientY;
    _this7.userIsDragging = false;
  };

  this.onTouchMove = function (_ref5) {
    var _ref5$touches = _slicedToArray(_ref5.touches, 1),
        touch = _ref5$touches[0];

    var deltaX = Math.abs(touch.clientX - _this7.initialTouchX);
    var deltaY = Math.abs(touch.clientY - _this7.initialTouchY);
    var moveThreshold = 5;

    _this7.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
  };

  this.onTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    // type cast the EventTarget
    var target = event.target;

    // close the menu if the user taps outside
    if (_this7.controlRef && !_this7.controlRef.contains(target) && _this7.menuListRef && !_this7.menuListRef.contains(target)) {
      _this7.blurInput();
    }

    // reset move vars
    _this7.initialTouchX = 0;
    _this7.initialTouchY = 0;
  };

  this.onControlTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onControlMouseDown(event);
  };

  this.onClearIndicatorTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onClearIndicatorMouseDown(event);
  };

  this.onDropdownIndicatorTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onDropdownIndicatorMouseDown(event);
  };

  this.handleInputChange = function (event) {
    var inputValue = event.currentTarget.value;
    _this7.inputIsHiddenAfterUpdate = false;
    _this7.onInputChange(inputValue, { action: 'input-change' });
    _this7.onMenuOpen();
  };

  this.onInputFocus = function (event) {
    var _props18 = _this7.props,
        isSearchable = _props18.isSearchable,
        isMulti = _props18.isMulti;

    if (_this7.props.onFocus) {
      _this7.props.onFocus(event);
    }
    _this7.inputIsHiddenAfterUpdate = false;
    _this7.announceAriaLiveContext({
      event: 'input',
      context: { isSearchable: isSearchable, isMulti: isMulti }
    });
    _this7.setState({
      isFocused: true
    });
    if (_this7.openAfterFocus || _this7.props.openMenuOnFocus) {
      _this7.openMenu('first');
    }
    _this7.openAfterFocus = false;
  };

  this.onInputBlur = function (event) {
    if (_this7.props.onBlur) {
      _this7.props.onBlur(event);
    }
    _this7.onInputChange('', { action: 'input-blur' });
    _this7.onMenuClose();
    _this7.setState({
      focusedValue: null,
      isFocused: false
    });
  };

  this.onOptionHover = function (focusedOption) {
    if (_this7.blockOptionHover || _this7.state.focusedOption === focusedOption) {
      return;
    }
    _this7.setState({ focusedOption: focusedOption });
  };

  this.shouldHideSelectedOptions = function () {
    var _props19 = _this7.props,
        hideSelectedOptions = _props19.hideSelectedOptions,
        isMulti = _props19.isMulti;

    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
  };

  this.onKeyDown = function (event) {
    var _props20 = _this7.props,
        isMulti = _props20.isMulti,
        backspaceRemovesValue = _props20.backspaceRemovesValue,
        escapeClearsValue = _props20.escapeClearsValue,
        inputValue = _props20.inputValue,
        isClearable = _props20.isClearable,
        isDisabled = _props20.isDisabled,
        menuIsOpen = _props20.menuIsOpen,
        onKeyDown = _props20.onKeyDown,
        tabSelectsValue = _props20.tabSelectsValue,
        openMenuOnFocus = _props20.openMenuOnFocus;
    var _state9 = _this7.state,
        isComposing = _state9.isComposing,
        focusedOption = _state9.focusedOption,
        focusedValue = _state9.focusedValue,
        selectValue = _state9.selectValue;


    if (isDisabled) return;

    if (typeof onKeyDown === 'function') {
      onKeyDown(event);
      if (event.defaultPrevented) {
        return;
      }
    }

    // Block option hover events when the user has just pressed a key
    _this7.blockOptionHover = true;
    switch (event.key) {
      case 'ArrowLeft':
        if (!isMulti || inputValue) return;
        _this7.focusValue('previous');
        break;
      case 'ArrowRight':
        if (!isMulti || inputValue) return;
        _this7.focusValue('next');
        break;
      case 'Backspace':
        if (inputValue) return;
        if (focusedValue) {
          _this7.removeValue(focusedValue);
        } else {
          if (!backspaceRemovesValue) return;
          _this7.popValue();
        }
        break;
      case 'Tab':
        if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
        // don't capture the event if the menu opens on focus and the focused
        // option is already selected; it breaks the flow of navigation
        openMenuOnFocus && _this7.isOptionSelected(focusedOption, selectValue)) {
          return;
        }
        _this7.selectOption(focusedOption);
        break;
      case 'Enter':
        if (menuIsOpen) {
          if (!focusedOption) return;
          if (isComposing) return;
          _this7.selectOption(focusedOption);
        } else {
          _this7.focusOption('first');
        }
        break;
      case 'Escape':
        if (menuIsOpen) {
          _this7.inputIsHiddenAfterUpdate = false;
          _this7.onInputChange('', { action: 'menu-close' });
          _this7.onMenuClose();
        } else if (isClearable && escapeClearsValue) {
          _this7.clearValue();
        }
        break;
      case ' ':
        // space
        if (inputValue) {
          return;
        }
        if (!menuIsOpen) {
          _this7.openMenu('first');
          break;
        }
        if (!focusedOption) return;
        _this7.selectOption(focusedOption);
        break;
      case 'ArrowUp':
        if (menuIsOpen) {
          _this7.focusOption('up');
        } else {
          _this7.openMenu('last');
        }
        break;
      case 'ArrowDown':
        if (menuIsOpen) {
          _this7.focusOption('down');
        } else {
          _this7.openMenu('first');
        }
        break;
      case 'PageUp':
        if (!menuIsOpen) return;
        _this7.focusOption('pageup');
        break;
      case 'PageDown':
        if (!menuIsOpen) return;
        _this7.focusOption('pagedown');
        break;
      case 'Home':
        if (!menuIsOpen) return;
        _this7.focusOption('first');
        break;
      case 'End':
        if (!menuIsOpen) return;
        _this7.focusOption('last');
        break;
      default:
        return;
    }
    event.preventDefault();
  };
};

exports.default = Select;

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var instructionsAriaMessage = exports.instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label;

  switch (event) {
    case 'menu':
      return 'Use Up and Down to choose options, press Backspace to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.';
    case 'input':
      return (label ? label : 'Select') + ' is focused ' + (isSearchable ? ',type to refine list' : '') + ', press Down to open the menu, ' + (isMulti ? ' press left to focus selected values' : '');
    case 'value':
      return 'Use left and right to toggle between focused values, press Enter to remove the currently focused value';
  }
};

var valueEventAriaMessage = exports.valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value;

  if (!value) return;
  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return 'option ' + value + ', deselected.';
    case 'select-option':
      return 'option ' + value + ', selected.';
  }
};

var valueFocusAriaMessage = exports.valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return 'value ' + getOptionLabel(focusedValue) + ' focused, ' + (selectValue.indexOf(focusedValue) + 1) + ' of ' + selectValue.length + '.';
};
var optionFocusAriaMessage = exports.optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return 'option ' + getOptionLabel(focusedOption) + ' focused, ' + (options.indexOf(focusedOption) + 1) + ' of ' + options.length + '.';
};
var resultsAriaMessage = exports.resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return '' + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + '.';
};

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatGroupLabel = exports.formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};

var getOptionLabel = exports.getOptionLabel = function getOptionLabel(option) {
  return option.label;
};

var getOptionValue = exports.getOptionValue = function getOptionValue(option) {
  return option.value;
};

var isOptionDisabled = exports.isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponents = exports.components = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(3);

var _containers = __webpack_require__(657);

var _indicators = __webpack_require__(588);

var _Control = __webpack_require__(649);

var _Control2 = _interopRequireDefault(_Control);

var _Group = __webpack_require__(650);

var _Group2 = _interopRequireDefault(_Group);

var _Input = __webpack_require__(651);

var _Input2 = _interopRequireDefault(_Input);

var _Menu = __webpack_require__(652);

var _Menu2 = _interopRequireDefault(_Menu);

var _MultiValue = __webpack_require__(653);

var _MultiValue2 = _interopRequireDefault(_MultiValue);

var _Option = __webpack_require__(654);

var _Option2 = _interopRequireDefault(_Option);

var _Placeholder = __webpack_require__(655);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _SingleValue = __webpack_require__(656);

var _SingleValue2 = _interopRequireDefault(_SingleValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = exports.components = {
  ClearIndicator: _indicators.ClearIndicator,
  Control: _Control2.default,
  DropdownIndicator: _indicators.DropdownIndicator,
  DownChevron: _indicators.DownChevron,
  CrossIcon: _indicators.CrossIcon,
  Group: _Group2.default,
  GroupHeading: _Group.GroupHeading,
  IndicatorsContainer: _containers.IndicatorsContainer,
  IndicatorSeparator: _indicators.IndicatorSeparator,
  Input: _Input2.default,
  LoadingIndicator: _indicators.LoadingIndicator,
  Menu: _Menu2.default,
  MenuList: _Menu.MenuList,
  MenuPortal: _Menu.MenuPortal,
  LoadingMessage: _Menu.LoadingMessage,
  NoOptionsMessage: _Menu.NoOptionsMessage,
  MultiValue: _MultiValue2.default,
  MultiValueContainer: _MultiValue.MultiValueContainer,
  MultiValueLabel: _MultiValue.MultiValueLabel,
  MultiValueRemove: _MultiValue.MultiValueRemove,
  Option: _Option2.default,
  Placeholder: _Placeholder2.default,
  SelectContainer: _containers.SelectContainer,
  SingleValue: _SingleValue2.default,
  ValueContainer: _containers.ValueContainer
};

var defaultComponents = exports.defaultComponents = function defaultComponents(props) {
  return _extends({}, components, props.components);
};

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var diacritics = [{ base: 'A', letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { base: 'AA', letters: /[\uA732]/g }, { base: 'AE', letters: /[\u00C6\u01FC\u01E2]/g }, { base: 'AO', letters: /[\uA734]/g }, { base: 'AU', letters: /[\uA736]/g }, { base: 'AV', letters: /[\uA738\uA73A]/g }, { base: 'AY', letters: /[\uA73C]/g }, { base: 'B', letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { base: 'C', letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { base: 'D', letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { base: 'DZ', letters: /[\u01F1\u01C4]/g }, { base: 'Dz', letters: /[\u01F2\u01C5]/g }, { base: 'E', letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { base: 'F', letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { base: 'G', letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { base: 'H', letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { base: 'I', letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { base: 'J', letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { base: 'K', letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { base: 'L', letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { base: 'LJ', letters: /[\u01C7]/g }, { base: 'Lj', letters: /[\u01C8]/g }, { base: 'M', letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { base: 'N', letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { base: 'NJ', letters: /[\u01CA]/g }, { base: 'Nj', letters: /[\u01CB]/g }, { base: 'O', letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { base: 'OI', letters: /[\u01A2]/g }, { base: 'OO', letters: /[\uA74E]/g }, { base: 'OU', letters: /[\u0222]/g }, { base: 'P', letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { base: 'Q', letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { base: 'R', letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { base: 'S', letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { base: 'T', letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { base: 'TZ', letters: /[\uA728]/g }, { base: 'U', letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { base: 'V', letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { base: 'VY', letters: /[\uA760]/g }, { base: 'W', letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { base: 'X', letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { base: 'Y', letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { base: 'Z', letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { base: 'a', letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { base: 'aa', letters: /[\uA733]/g }, { base: 'ae', letters: /[\u00E6\u01FD\u01E3]/g }, { base: 'ao', letters: /[\uA735]/g }, { base: 'au', letters: /[\uA737]/g }, { base: 'av', letters: /[\uA739\uA73B]/g }, { base: 'ay', letters: /[\uA73D]/g }, { base: 'b', letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { base: 'c', letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { base: 'd', letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { base: 'dz', letters: /[\u01F3\u01C6]/g }, { base: 'e', letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { base: 'f', letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { base: 'g', letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { base: 'h', letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { base: 'hv', letters: /[\u0195]/g }, { base: 'i', letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { base: 'j', letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { base: 'k', letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { base: 'l', letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { base: 'lj', letters: /[\u01C9]/g }, { base: 'm', letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { base: 'n', letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { base: 'nj', letters: /[\u01CC]/g }, { base: 'o', letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { base: 'oi', letters: /[\u01A3]/g }, { base: 'ou', letters: /[\u0223]/g }, { base: 'oo', letters: /[\uA74F]/g }, { base: 'p', letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { base: 'q', letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { base: 'r', letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { base: 's', letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { base: 't', letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { base: 'tz', letters: /[\uA729]/g }, { base: 'u', letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { base: 'v', letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { base: 'vy', letters: /[\uA761]/g }, { base: 'w', letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { base: 'x', letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { base: 'y', letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { base: 'z', letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = exports.stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < diacritics.length; i++) {
		str = str.replace(diacritics[i].letters, diacritics[i].base);
	}
	return str;
};

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _diacritics = __webpack_require__(788);

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaulStringify = function defaulStringify(option) {
  return option.label + ' ' + option.value;
};

var createFilter = exports.createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaulStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = (0, _diacritics.stripDiacritics)(input);
      candidate = (0, _diacritics.stripDiacritics)(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = __webpack_require__(416);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Assistive text to describe visual elements. Hidden for sighted users.
var A11yText = function A11yText(props) {
  return _react2.default.createElement('span', _extends({
    className: (0, _emotion.css)({
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'red',
      color: 'blue'
    })
  }, props));
};

exports.default = A11yText;

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = __webpack_require__(416);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DummyInput = function (_Component) {
  _inherits(DummyInput, _Component);

  function DummyInput() {
    _classCallCheck(this, DummyInput);

    return _possibleConstructorReturn(this, (DummyInput.__proto__ || Object.getPrototypeOf(DummyInput)).apply(this, arguments));
  }

  _createClass(DummyInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inProp = _props.in,
          out = _props.out,
          onExited = _props.onExited,
          appear = _props.appear,
          enter = _props.enter,
          exit = _props.exit,
          innerRef = _props.innerRef,
          props = _objectWithoutProperties(_props, ['in', 'out', 'onExited', 'appear', 'enter', 'exit', 'innerRef']);

      return _react2.default.createElement('input', _extends({
        ref: innerRef
      }, props, {
        className: (0, _emotion.css)({
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,

          // important! without `width` browsers won't allow focus
          width: 1,

          // remove cursor on desktop
          color: 'transparent',

          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);

  return DummyInput;
}(_react.Component);

exports.default = DummyInput;

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = __webpack_require__(416);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _NodeResolver = __webpack_require__(589);

var _NodeResolver2 = _interopRequireDefault(_NodeResolver);

var _index = __webpack_require__(795);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref

var ScrollBlock = function (_PureComponent) {
  _inherits(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollBlock.__proto__ || Object.getPrototypeOf(ScrollBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = { touchScrollTarget: null }, _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;
      _this.setState({ touchScrollTarget: ref });
    }, _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // must be in state to trigger a re-render, only runs once per instance


  // this will close the menu when a user clicks outside


  _createClass(ScrollBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isEnabled = _props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget;

      // bail early if not enabled

      if (!isEnabled) return children;

      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          onClick: this.blurSelectInput,
          className: (0, _emotion.css)({ position: 'fixed', left: 0, bottom: 0, right: 0, top: 0 })
        }),
        _react2.default.createElement(
          _NodeResolver2.default,
          { innerRef: this.getScrollTarget },
          children
        ),
        touchScrollTarget ? _react2.default.createElement(_index2.default, { touchScrollTarget: touchScrollTarget }) : null
      );
    }
  }]);

  return ScrollBlock;
}(_react.PureComponent);

exports.default = ScrollBlock;

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _NodeResolver = __webpack_require__(589);

var _NodeResolver2 = _interopRequireDefault(_NodeResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollCaptor = function (_Component) {
  _inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollCaptor.__proto__ || Object.getPrototypeOf(ScrollCaptor)).call.apply(_ref, [this].concat(args))), _this), _this.isBottom = false, _this.isTop = false, _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;

      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false;

      // reset bottom/top flags
      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }
      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      }

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }
        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }
        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      }

      // cancel scroll
      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    }, _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    }, _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    }, _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;
      _this.handleEventDelta(event, deltaY);
    }, _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollCaptor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: 'startListening',
    value: function startListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return;

      // all the if statements are to appease Flow 😢
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: 'stopListening',
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return;

      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _NodeResolver2.default,
        { innerRef: this.getScrollTarget },
        this.props.children
      );
    }
  }]);

  return ScrollCaptor;
}(_react.Component);

var ScrollCaptorSwitch = function (_Component2) {
  _inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    _classCallCheck(this, ScrollCaptorSwitch);

    return _possibleConstructorReturn(this, (ScrollCaptorSwitch.__proto__ || Object.getPrototypeOf(ScrollCaptorSwitch)).apply(this, arguments));
  }

  _createClass(ScrollCaptorSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnabled = _props.isEnabled,
          props = _objectWithoutProperties(_props, ['isEnabled']);

      return isEnabled ? _react2.default.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(_react.Component);

ScrollCaptorSwitch.defaultProps = { isEnabled: true };
exports.default = ScrollCaptorSwitch;

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_KEYS = exports.STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];

var LOCK_STYLES = exports.LOCK_STYLES = {
  boxSizing: 'border-box', // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _constants = __webpack_require__(794);

var _utils = __webpack_require__(796);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var activeScrollLocks = 0;

var ScrollLock = function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).call.apply(_ref, [this].concat(args))), _this), _this.originalStyles = {}, _this.listenerOptions = {
      capture: false,
      passive: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;

      var _props = this.props,
          accountForScrollbars = _props.accountForScrollbars,
          touchScrollTarget = _props.touchScrollTarget;

      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        _constants.STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

        Object.keys(_constants.LOCK_STYLES).forEach(function (key) {
          var val = _constants.LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = adjustedPadding + 'px';
        }
      }

      // account for touch devices
      if (target && (0, _utils.isTouchDevice)()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
        }
      }

      // increment active scroll locks
      activeScrollLocks += 1;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;

      var _props2 = this.props,
          accountForScrollbars = _props2.accountForScrollbars,
          touchScrollTarget = _props2.touchScrollTarget;

      var target = document.body;
      var targetStyle = target && target.style;

      // safely decrement active scroll locks
      activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

      // reapply original body styles, if any
      if (accountForScrollbars && activeScrollLocks < 1) {
        _constants.STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && (0, _utils.isTouchDevice)()) {
        target.removeEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(_react.Component);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};
exports.default = ScrollLock;

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventTouchMove = preventTouchMove;
exports.allowTouchMove = allowTouchMove;
exports.preventInertiaScroll = preventInertiaScroll;
exports.isTouchDevice = isTouchDevice;
function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _A11yText = __webpack_require__(790);

Object.defineProperty(exports, 'A11yText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_A11yText).default;
  }
});

var _DummyInput = __webpack_require__(791);

Object.defineProperty(exports, 'DummyInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DummyInput).default;
  }
});

var _NodeResolver = __webpack_require__(589);

Object.defineProperty(exports, 'NodeResolver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NodeResolver).default;
  }
});

var _ScrollBlock = __webpack_require__(792);

Object.defineProperty(exports, 'ScrollBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollBlock).default;
  }
});

var _ScrollCaptor = __webpack_require__(793);

Object.defineProperty(exports, 'ScrollCaptor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollCaptor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = exportedEqual;
var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }
    // end fast-deep-equal

    // Custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var manageState = function manageState(SelectComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(StateManager, _Component);

    function StateManager() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      }, _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);
        _this.setState({ value: value });
      }, _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);
        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      }, _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');
        _this.setState({ menuIsOpen: true });
      }, _this.onMenuClose = function () {
        _this.callProp('onMenuClose');
        _this.setState({ menuIsOpen: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StateManager, [{
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'getProp',
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      }
    }, {
      key: 'callProp',
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _props;

          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_props = this.props)[name].apply(_props, _toConsumableArray(args));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(SelectComponent, _extends({}, this.props, {
          ref: function ref(_ref2) {
            _this2.select = _ref2;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(_react.Component), _class.defaultProps = {
    defaultInputValue: '',
    defaultMenuIsOpen: false,
    defaultValue: null
  }, _temp2;
};

exports.default = manageState;

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mergeStyles = mergeStyles;

var _containers = __webpack_require__(657);

var _Control = __webpack_require__(649);

var _Group = __webpack_require__(650);

var _indicators = __webpack_require__(588);

var _Input = __webpack_require__(651);

var _Placeholder = __webpack_require__(655);

var _Option = __webpack_require__(654);

var _Menu = __webpack_require__(652);

var _SingleValue = __webpack_require__(656);

var _MultiValue = __webpack_require__(653);

var defaultStyles = exports.defaultStyles = {
  clearIndicator: _indicators.clearIndicatorCSS,
  container: _containers.containerCSS,
  control: _Control.css,
  dropdownIndicator: _indicators.dropdownIndicatorCSS,
  group: _Group.groupCSS,
  groupHeading: _Group.groupHeadingCSS,
  indicatorsContainer: _containers.indicatorsContainerCSS,
  indicatorSeparator: _indicators.indicatorSeparatorCSS,
  input: _Input.inputCSS,
  loadingIndicator: _indicators.loadingIndicatorCSS,
  loadingMessage: _Menu.loadingMessageCSS,
  menu: _Menu.menuCSS,
  menuList: _Menu.menuListCSS,
  menuPortal: _Menu.menuPortalCSS,
  multiValue: _MultiValue.multiValueCSS,
  multiValueLabel: _MultiValue.multiValueLabelCSS,
  multiValueRemove: _MultiValue.multiValueRemoveCSS,
  noOptionsMessage: _Menu.noOptionsMessageCSS,
  option: _Option.optionCSS,
  placeholder: _Placeholder.placeholderCSS,
  singleValue: _SingleValue.css,
  valueContainer: _containers.valueContainerCSS
};

// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _extends({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });

  return styles;
}

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0617aabf52f9b40bed764d0ebd224811.jpg";

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1067);

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(828);

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(844);

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(990);

/***/ })

});
//# sourceMappingURL=0.1e1a29935c11303191a2.js.map