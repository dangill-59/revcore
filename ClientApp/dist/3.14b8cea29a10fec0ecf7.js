exports.ids = [3];
exports.modules = {

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dates_initialize__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dates_initialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dates_initialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducer__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__generated_SubscriptionStatusModel__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__update__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__ = __webpack_require__(4);
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












var Cardlogo = __webpack_require__(686);
var SubscriptionLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__["d" /* createLoaderView */])();
var InvoicesLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__["d" /* createLoaderView */])();
var CardsViewLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__["d" /* createLoaderView */])();
var _CardView = function (_a) {
    var dispatch = _a.dispatch, stripe = _a.stripe;
    return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-center' },
        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { display: 'inline-block' } },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, "Card number")),
        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { display: 'inline-block' } },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Image"], { src: Cardlogo, alt: 'credit cards', style: { height: 25, marginLeft: 25 } })),
        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { border: 'solid 1px #ccc', padding: 5, width: 281, margin: 'auto', marginTop: 10 } },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["CardNumberElement"], null)),
        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { marginTop: 15 } },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { display: 'inline-block' } },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, "Expiration")),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { border: 'solid 1px #ccc', padding: 5, width: 150 } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["CardExpiryElement"], null))),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { display: 'inline-block', marginLeft: 30 } },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, "Security code")),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { border: 'solid 1px #ccc', padding: 5, width: 100 } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["CardCVCElement"], null))),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { marginTop: 15 } },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, "Zipcode")),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { border: 'solid 1px #ccc', padding: 5, width: 281, margin: 'auto' } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["PostalCodeElement"], null)))),
        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-center', style: {
                margin: 'auto',
                width: 281,
                padding: '20px 0px',
            } },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'success', block: true, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().saveCard(stripe)); } }, "Submit card information"),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-muted text-left', style: { marginTop: 20 } },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("small", null,
                    "* REV uses \"Stripe\" for all credit card processing and storage. Your card information is directly transferred to stripe and is never seen by our servers. We chose stripe as it has proven to exceed highest levels of security standards in online credit card transactions. For more information visit",
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("a", { href: 'https://stripe.com/docs/security/stripe', target: '_blank' }, "https://stripe.com/docs/security/stripe"))))));
};
var CardView = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["injectStripe"])(_CardView);
var BillingView = /** @class */ (function (_super) {
    __extends(BillingView, _super);
    function BillingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    BillingView.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().InitBillingView());
    };
    BillingView.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, subscriptionAsync = _a.subscriptionAsync, cardsOnFileAsync = _a.cardsOnFileAsync, enteringNewCard = _a.enteringNewCard, showingUpdateView = _a.showingUpdateView, newRevSeatCount = _a.newRevSeatCount, coupon = _a.coupon, invDateRange = _a.invDateRange, invoiceListAsync = _a.invoiceListAsync;
        var subscriptionMessagestyle = 'text-info';
        if (subscriptionAsync && subscriptionAsync.result) {
            if (__WEBPACK_IMPORTED_MODULE_8__generated_SubscriptionStatusModel__["a" /* SubscriptionStatusModel */].trialing == subscriptionAsync.result.status)
                subscriptionMessagestyle = 'text-warning';
            else if (__WEBPACK_IMPORTED_MODULE_8__generated_SubscriptionStatusModel__["a" /* SubscriptionStatusModel */].unavailable == subscriptionAsync.result.status) {
                return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h3", { className: 'text-danger text-center' },
                    ' ',
                    "Your subscription status is currently unavailable",
                    ' '));
            }
            else if (__WEBPACK_IMPORTED_MODULE_8__generated_SubscriptionStatusModel__["a" /* SubscriptionStatusModel */].active != subscriptionAsync.result.status)
                subscriptionMessagestyle = 'text-danger';
        }
        var revPlan = null;
        if (subscriptionAsync && subscriptionAsync.result) {
            revPlan = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](subscriptionAsync.result.details, function (detail) { return 'revSeats' == detail.forProduct; });
        }
        var currentRevSeats = newRevSeatCount || (revPlan && revPlan.quantity);
        var interval = (subscriptionAsync &&
            subscriptionAsync.result &&
            subscriptionAsync.result.details &&
            subscriptionAsync.result.details.length > 0 &&
            subscriptionAsync.result.details[0].interval) ||
            'month';
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null,
            showingUpdateView ? (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__update__["a" /* default */], null)) : (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'mainInfo text-center container' }, subscriptionAsync && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](SubscriptionLoader, { asyncResult: subscriptionAsync, prompt: 'loading subscription details' }, subscriptionAsync.result && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", { className: 'text-primary' }, " Subscription details"),
                'past_due' == subscriptionAsync.result.status ? (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { textAlign: 'centre', display: 'inline-block' } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("p", null,
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", { className: subscriptionMessagestyle },
                            "Your REV subscription is inactive.",
                            ' '),
                        "Please contact customer support at this link ",
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("br", null),
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("i", null,
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("a", { href: 'https://scanrev.freshdesk.com/a/tickets/new', target: '_blank' }, "https://scanrev.freshdesk.com/a/tickets/new"),
                            ' ')))) : (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { textAlign: 'left', display: 'inline-block' } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", null,
                        "Your REV subscription is ",
                        subscriptionAsync.result.status,
                        " and paid till",
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_4_moment__(subscriptionAsync.result.currentPeriodEnd)
                            .add(-1, 'day')
                            .format('l')))),
                'trialing' == subscriptionAsync.result.status && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("p", null,
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", null,
                        subscriptionAsync.result.trialDaysLeft,
                        " day(s) of free trial left"))),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null, subscriptionAsync.result.currentPeriodEnd && (
                //<small className="text-muted">Next invoice date {moment(subscriptionAsync.result.currentPeriodEnd).format('l')} </small>}
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", null,
                    "Your next invoice is due on",
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_4_moment__(subscriptionAsync.result.currentPeriodEnd).format('l')))))))))),
            cardsOnFileAsync && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](CardsViewLoader, { asyncResult: cardsOnFileAsync, prompt: 'loading payment sources' }, cardsOnFileAsync.result && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Grid"], { className: 'mainInfo', style: { marginTop: 20, padding: 30 } },
                cardsOnFileAsync.result.currentCards &&
                    cardsOnFileAsync.result.currentCards.length == 0 && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Row"], null,
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"], { smOffset: 3, sm: 8 },
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", { className: 'text-primary' }, "You have no payment methods. Please enter one now")),
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"], { sm: 2 }))),
                !enteringNewCard &&
                    cardsOnFileAsync.result.currentCards &&
                    cardsOnFileAsync.result.currentCards.length > 0 && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-center' },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", { className: 'text-primary' }, "Current payment methods"),
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("ul", { style: { listStyle: 'none', maxWidth: 600, margin: 'auto' } }, cardsOnFileAsync.result.currentCards.map(function (card) { return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { key: card.id, style: {
                            border: 'solid 1px #ccc',
                            padding: 10,
                            marginBottom: 23,
                        } },
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { float: 'left', width: 40, paddingTop: 11 } },
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("i", { className: 'fa fa-credit-card fa-2x text-primary', "aria-hidden": 'true' })),
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-right', style: { float: 'right' } },
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: card.isExpired ? 'text-danger' : '' },
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: 'text-muted' }, " Expiry On:"),
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, card.expiration)),
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { fontSize: 'small' } },
                                !card.isDefault && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'default', bsSize: 'xs', style: { padding: 0 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().makeDefault(card.id)); } },
                                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, " make default "))),
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsStyle: 'link', style: { padding: 0, marginLeft: 10 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().removeCard(card.id)); } },
                                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: 'text-warning' }, " remove")))),
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-left', style: { marginLeft: 45, paddingTop: 6 } },
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null,
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("strong", null, card.brand),
                                card.isDefault && __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null, "(default)")),
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-muted', style: { fontSize: 'smaller' } },
                                "ending in ",
                                card.last4)),
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { clear: 'both' } }))); })),
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { maxWidth: 600, margin: 'auto', textAlign: 'right' } },
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsSize: 'sm', bsStyle: 'success', onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().showCardForm(true)); } }, "Enter another card")))),
                enteringNewCard && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { style: { marginTop: 35 } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["StripeProvider"], { apiKey: cardsOnFileAsync.result.stripePubKey },
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__["Elements"], null,
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](CardView, { dispatch: dispatch }))))))))),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'mainInfo container', style: { margin: '20px auto', padding: 30 } },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: 'text-center' }, invoiceListAsync ? (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h4", { className: 'text-primary' }, "My invoices")) : (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"], { bsSize: 'small', bsStyle: 'info', style: { margin: 10 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().showInvoices()); } }, "VIEW INVOICES"))),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null, invoiceListAsync && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](InvoicesLoader, { asyncResult: invoiceListAsync, prompt: 'loading invoices' }, invoiceListAsync.result && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("table", { style: { width: '100%', margin: '10px 0px' } },
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("thead", { style: { borderBottom: '1px solid rgba(204, 204, 204, 0.35)' } },
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("tr", null,
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("th", { style: { width: '25%', paddingLeft: 15 } }, "Date"),
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("th", { style: { width: '50%', paddingLeft: 5, paddingTop: 10 } }, "Invoice number"),
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("th", { style: { width: '25%' } }, "Amount"))),
                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("tbody", null, invoiceListAsync.result.map(function (invoice) { return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("tr", { key: invoice.number },
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("td", { style: { width: '25%', paddingLeft: 10 } }, __WEBPACK_IMPORTED_MODULE_4_moment__(invoice.date).format('L')),
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("td", { style: { width: '50%', padding: '10px 0px' }, className:  true ? '' : 'text-warning' },
                            invoice.invoicePdf ? (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["OverlayTrigger"], { placement: 'bottom', overlay: __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Tooltip"], { id: 'invtooltip' }, "Download printable pdf") },
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("a", { href: invoice.invoicePdf },
                                    ' ',
                                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("i", { className: 'fa fa-file-pdf-o', "aria-hidden": 'true' }),
                                    ' ',
                                    invoice.number))) : (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", null,
                                invoice.number,
                                " - pending")),
                            invoice.description && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("p", null,
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("small", null, invoice.description)))),
                        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("td", { style: { width: '25%', paddingLeft: 5 } },
                            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("strong", { className: invoice.paid ? '' : 'text-danger' },
                                "$",
                                invoice.total.toFixed(2)),
                            !!invoice.endingBalance && (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("p", { className: invoice.endingBalance < 0 ? 'text-success' : 'text-danger' },
                                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("small", null,
                                    __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: 'text-muted' }, "balance "),
                                    "$",
                                    (-1 * invoice.endingBalance).toFixed(2))))))); }))))))))));
    };
    return BillingView;
}(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer__["a" /* default */])().getCurrentState(state);
})(BillingView));


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined; // eslint-disable-line no-shadow-restricted-names

var ThrowTypeError = Object.getOwnPropertyDescriptor
	? (function () { return Object.getOwnPropertyDescriptor(arguments, 'callee').get; }())
	: function () { throw new TypeError(); };

var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'$ %Array%': Array,
	'$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'$ %ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'$ %ArrayPrototype%': Array.prototype,
	'$ %ArrayProto_entries%': Array.prototype.entries,
	'$ %ArrayProto_forEach%': Array.prototype.forEach,
	'$ %ArrayProto_keys%': Array.prototype.keys,
	'$ %ArrayProto_values%': Array.prototype.values,
	'$ %AsyncFromSyncIteratorPrototype%': undefined,
	'$ %AsyncFunction%': asyncFunction,
	'$ %AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'$ %AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'$ %AsyncGeneratorFunction%': asyncGenFunction,
	'$ %AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'$ %AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'$ %Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'$ %Boolean%': Boolean,
	'$ %BooleanPrototype%': Boolean.prototype,
	'$ %DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'$ %Date%': Date,
	'$ %DatePrototype%': Date.prototype,
	'$ %decodeURI%': decodeURI,
	'$ %decodeURIComponent%': decodeURIComponent,
	'$ %encodeURI%': encodeURI,
	'$ %encodeURIComponent%': encodeURIComponent,
	'$ %Error%': Error,
	'$ %ErrorPrototype%': Error.prototype,
	'$ %eval%': eval, // eslint-disable-line no-eval
	'$ %EvalError%': EvalError,
	'$ %EvalErrorPrototype%': EvalError.prototype,
	'$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'$ %Function%': Function,
	'$ %FunctionPrototype%': Function.prototype,
	'$ %Generator%': generator ? getProto(generator()) : undefined,
	'$ %GeneratorFunction%': generatorFunction,
	'$ %GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'$ %isFinite%': isFinite,
	'$ %isNaN%': isNaN,
	'$ %IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'$ %JSON%': JSON,
	'$ %JSONParse%': JSON.parse,
	'$ %Map%': typeof Map === 'undefined' ? undefined : Map,
	'$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'$ %MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'$ %Math%': Math,
	'$ %Number%': Number,
	'$ %NumberPrototype%': Number.prototype,
	'$ %Object%': Object,
	'$ %ObjectPrototype%': Object.prototype,
	'$ %ObjProto_toString%': Object.prototype.toString,
	'$ %ObjProto_valueOf%': Object.prototype.valueOf,
	'$ %parseFloat%': parseFloat,
	'$ %parseInt%': parseInt,
	'$ %Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'$ %Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'$ %Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'$ %Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'$ %RangeError%': RangeError,
	'$ %RangeErrorPrototype%': RangeError.prototype,
	'$ %ReferenceError%': ReferenceError,
	'$ %ReferenceErrorPrototype%': ReferenceError.prototype,
	'$ %Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'$ %RegExp%': RegExp,
	'$ %RegExpPrototype%': RegExp.prototype,
	'$ %Set%': typeof Set === 'undefined' ? undefined : Set,
	'$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'$ %SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'$ %String%': String,
	'$ %StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'$ %StringPrototype%': String.prototype,
	'$ %Symbol%': hasSymbols ? Symbol : undefined,
	'$ %SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'$ %SyntaxError%': SyntaxError,
	'$ %SyntaxErrorPrototype%': SyntaxError.prototype,
	'$ %ThrowTypeError%': ThrowTypeError,
	'$ %TypedArray%': TypedArray,
	'$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'$ %TypeError%': TypeError,
	'$ %TypeErrorPrototype%': TypeError.prototype,
	'$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'$ %URIError%': URIError,
	'$ %URIErrorPrototype%': URIError.prototype,
	'$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var key = '$ ' + name;
	if (!(key in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
		throw new TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}
	return INTRINSICS[key];
};


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(383);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(383);

var GetIntrinsic = __webpack_require__(327);

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(579);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementContextTypes = exports.injectContextTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(391);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Provider = __webpack_require__(479);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var injectContextTypes = exports.injectContextTypes = {
  getRegisteredElements: _propTypes2.default.func.isRequired
};

var elementContextTypes = exports.elementContextTypes = {
  addElementsLoadListener: _propTypes2.default.func.isRequired,
  registerElement: _propTypes2.default.func.isRequired,
  unregisterElement: _propTypes2.default.func.isRequired
};

var Elements = function (_React$Component) {
  _inherits(Elements, _React$Component);

  function Elements(props, context) {
    _classCallCheck(this, Elements);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleRegisterElement = function (element, impliedTokenType, impliedSourceType) {
      _this.setState(function (prevState) {
        return {
          registeredElements: [].concat(_toConsumableArray(prevState.registeredElements), [_extends({
            element: element
          }, impliedTokenType ? { impliedTokenType: impliedTokenType } : {}, impliedSourceType ? { impliedSourceType: impliedSourceType } : {})])
        };
      });
    };

    _this.handleUnregisterElement = function (el) {
      _this.setState(function (prevState) {
        return {
          registeredElements: prevState.registeredElements.filter(function (_ref) {
            var element = _ref.element;
            return element !== el;
          })
        };
      });
    };

    _this.state = {
      registeredElements: []
    };
    return _this;
  }

  Elements.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    return {
      addElementsLoadListener: function addElementsLoadListener(fn) {
        // Return the existing elements instance if we already have one.
        if (_this2._elements) {
          fn(_this2._elements);
          return;
        }

        var _props = _this2.props,
            children = _props.children,
            options = _objectWithoutProperties(_props, ['children']);

        if (_this2.context.tag === 'sync') {
          _this2._elements = _this2.context.stripe.elements(options);
          fn(_this2._elements);
        } else {
          _this2.context.addStripeLoadListener(function (stripe) {
            if (_this2._elements) {
              fn(_this2._elements);
            } else {
              _this2._elements = stripe.elements(options);
              fn(_this2._elements);
            }
          });
        }
      },
      registerElement: this.handleRegisterElement,
      unregisterElement: this.handleUnregisterElement,
      getRegisteredElements: function getRegisteredElements() {
        return _this2.state.registeredElements;
      }
    };
  };

  Elements.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return Elements;
}(_react2.default.Component);

Elements.childContextTypes = _extends({}, injectContextTypes, elementContextTypes);
Elements.contextTypes = _Provider.providerContextTypes;
Elements.defaultProps = {
  children: null
};
exports.default = Elements;

/***/ }),

/***/ 391:
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
  module.exports = __webpack_require__(667)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(666)();
}


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(522);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(327);

var has = __webpack_require__(351);

var $assign = GetIntrinsic('%Object%').assign;

module.exports = function assign(target, source) {
	if ($assign) {
		return $assign(target, source);
	}

	// eslint-disable-next-line no-restricted-syntax
	for (var key in source) {
		if (has(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(581);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (typeof value === 'function' && !value.prototype) { return true; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providerContextTypes = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(391);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO(jez) 'sync' and 'async' are bad tag names.
// TODO(jez) What if redux also uses this.context.tag?
var providerContextTypes = exports.providerContextTypes = {
  tag: _propTypes2.default.string.isRequired,
  stripe: _propTypes2.default.object,
  addStripeLoadListener: _propTypes2.default.func
};

var getOrCreateStripe = function getOrCreateStripe(apiKey, options) {
  /**
   * Note that this is not meant to be a generic memoization solution.
   * This is specifically a solution for `StripeProvider`s being initialized
   * and destroyed regularly (with the same set of props) when users only
   * use `StripeProvider` for the subtree that contains their checkout form.
   */
  window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
  var cacheKey = 'key=' + apiKey + ' options=' + JSON.stringify(options);

  var stripe = window.Stripe.__cachedInstances[cacheKey] || window.Stripe(apiKey, options);
  window.Stripe.__cachedInstances[cacheKey] = stripe;

  return stripe;
};

var ensureStripeShape = function ensureStripeShape(stripe) {
  if (stripe && stripe.elements && stripe.createSource && stripe.createToken) {
    return stripe;
  } else {
    throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.");
  }
};

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  // on the other hand: childContextTypes is *required* to use context.
  function Provider(props) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    if (_this.props.apiKey && _this.props.stripe) {
      throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider, not both.");
    } else if (_this.props.apiKey) {
      if (!window.Stripe) {
        throw new Error("Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements. If Stripe.js isn't available yet (it's loading asynchronously, or you're using server-side rendering), see https://github.com/stripe/react-stripe-elements#advanced-integrations");
      } else {
        var _this$props = _this.props,
            _apiKey = _this$props.apiKey,
            _children = _this$props.children,
            _stripe = _this$props.stripe,
            options = _objectWithoutProperties(_this$props, ['apiKey', 'children', 'stripe']);

        _this._meta = {
          tag: 'sync',
          stripe: getOrCreateStripe(_apiKey, options)
        };
      }
    } else if (_this.props.stripe) {
      // If we already have a stripe instance (in the constructor), we can behave synchronously.
      _this._meta = {
        tag: 'sync',
        stripe: ensureStripeShape(_this.props.stripe)
      };
    } else if (_this.props.stripe === null) {
      _this._meta = {
        tag: 'async',
        stripe: null
      };
    } else {
      throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider. If you're using 'stripe' but don't have a Stripe instance yet, pass 'null' explicitly.");
    }

    _this._didWarn = false;
    _this._didWakeUpListeners = false;
    _this._listeners = [];
    return _this;
  }
  // Even though we're using flow, also use PropTypes so we can take advantage of developer warnings.


  Provider.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    // getChildContext is run after the constructor, so we WILL have access to
    // the initial state.
    //
    // However, context doesn't update in respnse to state changes like you
    // might expect: context is pulled by the child, not pushed by the parent.
    if (this._meta.tag === 'sync') {
      return {
        tag: 'sync',
        stripe: this._meta.stripe
      };
    } else {
      return {
        tag: 'async',
        addStripeLoadListener: function addStripeLoadListener(fn) {
          if (_this2._meta.stripe) {
            fn(_this2._meta.stripe);
          } else {
            _this2._listeners.push(fn);
          }
        }
      };
    }
  };

  Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var apiKeyChanged = this.props.apiKey && nextProps.apiKey && this.props.apiKey !== nextProps.apiKey;

    var stripeInstanceChanged = this.props.stripe && nextProps.stripe && this.props.stripe !== nextProps.stripe;
    if (!this._didWarn && (apiKeyChanged || stripeInstanceChanged) && window.console && window.console.error) {
      this._didWarn = true;
      // eslint-disable-next-line no-console
      console.error('StripeProvider does not support changing the apiKey parameter.');
      return;
    }

    if (!this._didWakeUpListeners && nextProps.stripe) {
      // Wake up the listeners if we've finally been given a StripeShape
      this._didWakeUpListeners = true;
      var _stripe2 = ensureStripeShape(nextProps.stripe);
      this._meta.stripe = _stripe2;
      this._listeners.forEach(function (fn) {
        fn(_stripe2);
      });
    }
  };

  Provider.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return Provider;
}(_react2.default.Component);

Provider.propTypes = {
  apiKey: _propTypes2.default.string,
  // PropTypes.object is the only way we can accept a Stripe instance
  // eslint-disable-next-line react/forbid-prop-types
  stripe: _propTypes2.default.object,
  children: _propTypes2.default.node
};
Provider.childContextTypes = providerContextTypes;
Provider.defaultProps = {
  apiKey: undefined,
  stripe: undefined,
  children: null
};
exports.default = Provider;

/***/ }),

/***/ 480:
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

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(572);

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || (Math.pow(2, 53) - 1);

// eslint-disable-next-line max-params, max-statements
var FlattenIntoArray = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var targetIndex = start;
	var sourceIndex = 0;

	/*
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}
	*/

	while (sourceIndex < sourceLen) {
		var P = ES.ToString(sourceIndex);
		var exists = ES.HasProperty(source, P);
		if (exists) {
			var element = ES.Get(source, P);
			/*
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = ES.Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			*/
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = ES.IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = ES.ToLength(ES.Get(element, 'length'));
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new TypeError('index too large');
				}
				ES.CreateDataPropertyOrThrow(target, ES.ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};

module.exports = function flat() {
	var O = ES.ToObject(this);
	var sourceLen = ES.ToLength(ES.Get(O, 'length'));

	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ES.ToInteger(arguments[0]);
	}

	var A = ES.ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	return A;
};


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(495);

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(327);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(351);

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(ES, Desc) {
		if (ES.Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(ES, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(ES, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function every(array, predicate) {
	for (var i = 0; i < array.length; i += 1) {
		if (!predicate(array[i], i, array)) {
			return false;
		}
	}
	return true;
};


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(327);

var has = __webpack_require__(351);
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

    for (var key in Desc) { // eslint-disable-line
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ 508:
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(421)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(523);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(621);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shallowEqual = function shallowEqual(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  return keysA.length === keysB.length && keysA.every(function (key) {
    return b.hasOwnProperty(key) && b[key] === a[key];
  });
};

exports.default = shallowEqual;

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(410);
var bind = __webpack_require__(383);

var implementation = __webpack_require__(495);
var getPolyfill = __webpack_require__(496);
var polyfill = getPolyfill();
var shim = __webpack_require__(537);

var boundFlat = bind.call(Function.call, polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(410);
var getPolyfill = __webpack_require__(496);

module.exports = function shimFlat() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ flat: polyfill },
		{ flat: function () { return Array.prototype.flat !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_base_asyncLoader__ = __webpack_require__(4);
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






var PlansLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_base_asyncLoader__["d" /* createLoaderView */])();
var SubscriptionLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_base_asyncLoader__["d" /* createLoaderView */])();
var UpdateSubscriptionView = /** @class */ (function (_super) {
    __extends(UpdateSubscriptionView, _super);
    function UpdateSubscriptionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateSubscriptionView.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().InitBillingView());
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().loadPlans());
    };
    UpdateSubscriptionView.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, subscriptionAsync = _a.subscriptionAsync, availablePlansAsync = _a.availablePlansAsync;
        var subscribedPlanId = null;
        if (subscriptionAsync && subscriptionAsync.result) {
            var revPlan = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](subscriptionAsync.result.details, function (detail) { return 'revSeats' == detail.forProduct; });
            if (revPlan)
                subscribedPlanId = revPlan.planId;
        }
        var subscriptionMessagestyle = 'text-info';
        if (subscriptionAsync && subscriptionAsync.result) {
            if ('trialing' == subscriptionAsync.result.status)
                subscriptionMessagestyle = 'text-warning';
            else if ('active' != subscriptionAsync.result.status)
                subscriptionMessagestyle = 'text-danger';
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'mainInfo text-center container' }, subscriptionAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SubscriptionLoader, { asyncResult: subscriptionAsync, prompt: 'loading subscription details' }, availablePlansAsync && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](PlansLoader, { asyncResult: availablePlansAsync, prompt: 'loading available plans' }, subscriptionAsync.result && availablePlansAsync.result && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, (availablePlansAsync.result['revSeats'] || []).map(function (plan) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: plan.id, style: {
                    display: 'inline-block',
                    width: 300,
                    margin: 10,
                    border: 'solid 1px #ccc',
                    verticalAlign: 'top',
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'bg-primary', style: { paddingBottom: 20 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Image"], { src: plan.image, responsive: true, style: { maxWidth: 190, margin: 'auto' } })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'bg-warning', style: { marginTop: -10, padding: '10px 5px', height: 100 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: 'text-primary' }, plan.description),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", { className: 'text-muted' }, plan.pricing)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { margin: 10 } }, plan.id == subscribedPlanId ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    subscriptionAsync.result.status == 'trialing' && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: 'text-muted' },
                            subscriptionAsync.result.trialDaysLeft,
                            " day(s) of free trial left"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsSize: 'large', bsStyle: 'default', style: { padding: 10 }, onClick: function () { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().updateRevSubscription()); } }, "Keep current"))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], { bsSize: 'large', bsStyle: 'warning', style: { padding: 10 }, disabled: true }, "Coming soon")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { marginTop: 10, padding: '20px 3px' }, className: 'bg-info text-left' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, (plan.display || []).map(function (dtext, i) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { key: plan.id + "_text_" + i },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, dtext))); }))))); }))))))))));
    };
    return UpdateSubscriptionView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
    var _a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */])().getCurrentState(state), subscriptionAsync = _a.subscriptionAsync, availablePlansAsync = _a.availablePlansAsync;
    return { subscriptionAsync: subscriptionAsync, availablePlansAsync: availablePlansAsync };
})(UpdateSubscriptionView));


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(351);
var toPrimitive = __webpack_require__(578);
var keys = __webpack_require__(522);
var inspect = __webpack_require__(619);

var GetIntrinsic = __webpack_require__(327);

var $TypeError = GetIntrinsic('%TypeError%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $Array = GetIntrinsic('%Array%');
var $ArrayPrototype = $Array.prototype;
var $String = GetIntrinsic('%String%');
var $Object = GetIntrinsic('%Object%');
var $Number = GetIntrinsic('%Number%');
var $Symbol = GetIntrinsic('%Symbol%', true);
var $RegExp = GetIntrinsic('%RegExp%');
var $Promise = GetIntrinsic('%Promise%', true);
var $preventExtensions = $Object.preventExtensions;

var hasSymbols = __webpack_require__(421)();

var assertRecord = __webpack_require__(500);
var $isNaN = __webpack_require__(504);
var $isFinite = __webpack_require__(503);
var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(420);
var sign = __webpack_require__(507);
var mod = __webpack_require__(506);
var isPrimitive = __webpack_require__(574);
var forEach = __webpack_require__(502);
var every = __webpack_require__(501);
var isSamePropertyDescriptor = __webpack_require__(575);
var isPropertyDescriptor = __webpack_require__(505);
var parseInteger = parseInt;
var callBind = __webpack_require__(382);
var $PromiseThen = $Promise ? callBind(GetIntrinsic('%PromiseProto_then%')) : null;
var arraySlice = callBind($Array.prototype.slice);
var strSlice = callBind($String.prototype.slice);
var isBinary = callBind($RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = callBind($RegExp.prototype.test, /^0o[0-7]+$/i);
var isDigit = callBind($RegExp.prototype.test, /^[0-9]$/);
var regexExec = callBind($RegExp.prototype.exec);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = callBind($RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = callBind($RegExp.prototype.test, invalidHexLiteral);
var $charCodeAt = callBind($String.prototype.charCodeAt);
var $isEnumerable = callBind($Object.prototype.propertyIsEnumerable);

var toStr = callBind($Object.prototype.toString);

var $NumberValueOf = callBind(GetIntrinsic('%NumberPrototype%').valueOf);
var $BooleanValueOf = callBind(GetIntrinsic('%BooleanPrototype%').valueOf);
var $StringValueOf = callBind(GetIntrinsic('%StringPrototype%').valueOf);
var $DateValueOf = callBind(GetIntrinsic('%DatePrototype%').valueOf);
var $SymbolToString = hasSymbols && callBind(GetIntrinsic('%SymbolPrototype%').toString);

var $floor = Math.floor;
var $abs = Math.abs;

var $ObjectCreate = $Object.create;
var $gOPD = $Object.getOwnPropertyDescriptor;
var $gOPN = $Object.getOwnPropertyNames;
var $gOPS = $Object.getOwnPropertySymbols;
var $isExtensible = $Object.isExtensible;
var $defineProperty = $Object.defineProperty;
var $setProto = Object.setPrototypeOf || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== Array.prototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto
			return O;
		}
);

var DefineOwnProperty = function DefineOwnProperty(ES, O, P, desc) {
	if (!$defineProperty) {
		if (!ES.IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		O[P] = V; // will use [[Define]]
		return ES.SameValue(O[P], V);
	}
	$defineProperty(O, P, ES.FromPropertyDescriptor(desc));
	return true;
};

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBind($String.prototype.replace);
var trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ES5 = __webpack_require__(573);

var hasRegExpMatcher = __webpack_require__(595);

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new $TypeError(inspect(F) + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// https://ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, $Number);
		if (typeof value === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return $Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * $floor($abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = $floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a string');
		}
		return $String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return $Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, $String);
		return typeof key === 'symbol' ? key : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr(argument) !== '[object String]') {
			throw new $TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: $Array.isArray || function IsArray(argument) {
		return toStr(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: $preventExtensions
		? function IsExtensible(obj) {
			if (isPrimitive(obj)) {
				return false;
			}
			return $isExtensible(obj);
		}
		: function isExtensible(obj) { return true; }, // eslint-disable-line no-unused-vars

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = $abs(argument);
		return $floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[$Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return void 0;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new $TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new $TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && $Symbol.species ? C[$Symbol.species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new $TypeError('no constructor found');
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor
	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		var obj = {};
		if ('[[Value]]' in Desc) {
			obj.value = Desc['[[Value]]'];
		}
		if ('[[Writable]]' in Desc) {
			obj.writable = Desc['[[Writable]]'];
		}
		if ('[[Get]]' in Desc) {
			obj.get = Desc['[[Get]]'];
		}
		if ('[[Set]]' in Desc) {
			obj.set = Desc['[[Set]]'];
		}
		if ('[[Enumerable]]' in Desc) {
			obj.enumerable = Desc['[[Enumerable]]'];
		}
		if ('[[Configurable]]' in Desc) {
			obj.configurable = Desc['[[Configurable]]'];
		}
		return obj;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
	CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
			if (!has(Desc, '[[Value]]')) {
				Desc['[[Value]]'] = void 0;
			}
			if (!has(Desc, '[[Writable]]')) {
				Desc['[[Writable]]'] = false;
			}
		} else {
			if (!has(Desc, '[[Get]]')) {
				Desc['[[Get]]'] = void 0;
			}
			if (!has(Desc, '[[Set]]')) {
				Desc['[[Set]]'] = void 0;
			}
		}
		if (!has(Desc, '[[Enumerable]]')) {
			Desc['[[Enumerable]]'] = false;
		}
		if (!has(Desc, '[[Configurable]]')) {
			Desc['[[Configurable]]'] = false;
		}
		return Desc;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
	Set: function Set(O, P, V, Throw) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		if (this.Type(Throw) !== 'Boolean') {
			throw new $TypeError('Throw must be a Boolean');
		}
		if (Throw) {
			O[P] = V;
			return true;
		} else {
			try {
				O[P] = V;
			} catch (e) {
				return false;
			}
		}
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
	HasOwnProperty: function HasOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		return has(O, P);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty
	HasProperty: function HasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		return P in O;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
	IsConcatSpreadable: function IsConcatSpreadable(O) {
		if (this.Type(O) !== 'Object') {
			return false;
		}
		if (hasSymbols && typeof $Symbol.isConcatSpreadable === 'symbol') {
			var spreadable = this.Get(O, Symbol.isConcatSpreadable);
			if (typeof spreadable !== 'undefined') {
				return this.ToBoolean(spreadable);
			}
		}
		return this.IsArray(O);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-invoke
	Invoke: function Invoke(O, P) {
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		var argumentsList = arraySlice(arguments, 2);
		var func = this.GetV(O, P);
		return this.Call(func, O, argumentsList);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-getiterator
	GetIterator: function GetIterator(obj, method) {
		var actualMethod = method;
		if (arguments.length < 2) {
			if (!hasSymbols) {
				throw new SyntaxError('GetIterator depends on native Symbol support when `method` is not passed');
			}
			actualMethod = this.GetMethod(obj, $Symbol.iterator);
		}
		var iterator = this.Call(actualMethod, obj);
		if (this.Type(iterator) !== 'Object') {
			throw new $TypeError('iterator must return an object');
		}

		return iterator;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext
	IteratorNext: function IteratorNext(iterator, value) {
		var result = this.Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
		if (this.Type(result) !== 'Object') {
			throw new $TypeError('iterator next must return an object');
		}
		return result;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
	IteratorComplete: function IteratorComplete(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.ToBoolean(this.Get(iterResult, 'done'));
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
	IteratorValue: function IteratorValue(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.Get(iterResult, 'value');
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
	IteratorStep: function IteratorStep(iterator) {
		var result = this.IteratorNext(iterator);
		var done = this.IteratorComplete(result);
		return done === true ? false : result;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
	IteratorClose: function IteratorClose(iterator, completion) {
		if (this.Type(iterator) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterator) is not Object');
		}
		if (!this.IsCallable(completion)) {
			throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
		}
		var completionThunk = completion;

		var iteratorReturn = this.GetMethod(iterator, 'return');

		if (typeof iteratorReturn === 'undefined') {
			return completionThunk();
		}

		var completionRecord;
		try {
			var innerResult = this.Call(iteratorReturn, iterator, []);
		} catch (e) {
			// if we hit here, then "e" is the innerResult completion that needs re-throwing

			// if the completion is of type "throw", this will throw.
			completionRecord = completionThunk();
			completionThunk = null; // ensure it's not called twice.

			// if not, then return the innerResult completion
			throw e;
		}
		completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
		completionThunk = null; // ensure it's not called twice.

		if (this.Type(innerResult) !== 'Object') {
			throw new $TypeError('iterator .return must return an object');
		}

		return completionRecord;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
	CreateIterResultObject: function CreateIterResultObject(value, done) {
		if (this.Type(done) !== 'Boolean') {
			throw new $TypeError('Assertion failed: Type(done) is not Boolean');
		}
		return {
			value: value,
			done: done
		};
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec
	RegExpExec: function RegExpExec(R, S) {
		if (this.Type(R) !== 'Object') {
			throw new $TypeError('R must be an Object');
		}
		if (this.Type(S) !== 'String') {
			throw new $TypeError('S must be a String');
		}
		var exec = this.Get(R, 'exec');
		if (this.IsCallable(exec)) {
			var result = this.Call(exec, R, [S]);
			if (result === null || this.Type(result) === 'Object') {
				return result;
			}
			throw new $TypeError('"exec" method must return `null` or an Object');
		}
		return regexExec(R, S);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
	ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new $TypeError('Assertion failed: length must be an integer >= 0');
		}
		var len = length === 0 ? 0 : length;
		var C;
		var isArray = this.IsArray(originalArray);
		if (isArray) {
			C = this.Get(originalArray, 'constructor');
			// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
			// if (this.IsConstructor(C)) {
			// 	if C is another realm's Array, C = undefined
			// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
			// }
			if (this.Type(C) === 'Object' && hasSymbols && $Symbol.species) {
				C = this.Get(C, $Symbol.species);
				if (C === null) {
					C = void 0;
				}
			}
		}
		if (typeof C === 'undefined') {
			return $Array(len);
		}
		if (!this.IsConstructor(C)) {
			throw new $TypeError('C must be a constructor');
		}
		return new C(len); // this.Construct(C, len);
	},

	CreateDataProperty: function CreateDataProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var oldDesc = $gOPD(O, P);
		var extensible = oldDesc || this.IsExtensible(O);
		var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
		if (immutable || !extensible) {
			return false;
		}
		return DefineOwnProperty(this, O, P, {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		});
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
	CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var success = this.CreateDataProperty(O, P, V);
		if (!success) {
			throw new $TypeError('unable to create data property');
		}
		return success;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate
	ObjectCreate: function ObjectCreate(proto, internalSlotsList) {
		if (proto !== null && this.Type(proto) !== 'Object') {
			throw new $TypeError('Assertion failed: proto must be null or an object');
		}
		var slots = arguments.length < 2 ? [] : internalSlotsList;
		if (slots.length > 0) {
			throw new $SyntaxError('es-abstract does not yet support internal slots');
		}

		if (proto === null && !$ObjectCreate) {
			throw new $SyntaxError('native Object.create support is required to create null objects');
		}

		return $ObjectCreate(proto);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
	AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
		if (this.Type(S) !== 'String') {
			throw new $TypeError('S must be a String');
		}
		if (!this.IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
			throw new $TypeError('Assertion failed: length must be an integer >= 0 and <= 2**53');
		}
		if (this.Type(unicode) !== 'Boolean') {
			throw new $TypeError('Assertion failed: unicode must be a Boolean');
		}
		if (!unicode) {
			return index + 1;
		}
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty
	CreateMethodProperty: function CreateMethodProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		var newDesc = {
			'[[Configurable]]': true,
			'[[Enumerable]]': false,
			'[[Value]]': V,
			'[[Writable]]': true
		};
		return DefineOwnProperty(this, O, P, newDesc);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow
	DefinePropertyOrThrow: function DefinePropertyOrThrow(O, P, desc) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		var Desc = isPropertyDescriptor(this, desc) ? desc : this.ToPropertyDescriptor(desc);
		if (!isPropertyDescriptor(this, Desc)) {
			throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
		}

		return DefineOwnProperty(this, O, P, Desc);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow
	DeletePropertyOrThrow: function DeletePropertyOrThrow(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		var success = delete O[P];
		if (!success) {
			throw new TypeError('Attempt to delete property failed.');
		}
		return success;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-enumerableownnames
	EnumerableOwnNames: function EnumerableOwnNames(O) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		return keys(O);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object
	thisNumberValue: function thisNumberValue(value) {
		if (this.Type(value) === 'Number') {
			return value;
		}

		return $NumberValueOf(value);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object
	thisBooleanValue: function thisBooleanValue(value) {
		if (this.Type(value) === 'Boolean') {
			return value;
		}

		return $BooleanValueOf(value);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object
	thisStringValue: function thisStringValue(value) {
		if (this.Type(value) === 'String') {
			return value;
		}

		return $StringValueOf(value);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object
	thisTimeValue: function thisTimeValue(value) {
		return $DateValueOf(value);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-setintegritylevel
	SetIntegrityLevel: function SetIntegrityLevel(O, level) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (level !== 'sealed' && level !== 'frozen') {
			throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
		}
		if (!$preventExtensions) {
			throw new $SyntaxError('SetIntegrityLevel requires native `Object.preventExtensions` support');
		}
		var status = $preventExtensions(O);
		if (!status) {
			return false;
		}
		if (!$gOPN) {
			throw new $SyntaxError('SetIntegrityLevel requires native `Object.getOwnPropertyNames` support');
		}
		var theKeys = $gOPN(O);
		var ES = this;
		if (level === 'sealed') {
			forEach(theKeys, function (k) {
				ES.DefinePropertyOrThrow(O, k, { configurable: false });
			});
		} else if (level === 'frozen') {
			forEach(theKeys, function (k) {
				var currentDesc = $gOPD(O, k);
				if (typeof currentDesc !== 'undefined') {
					var desc;
					if (ES.IsAccessorDescriptor(ES.ToPropertyDescriptor(currentDesc))) {
						desc = { configurable: false };
					} else {
						desc = { configurable: false, writable: false };
					}
					ES.DefinePropertyOrThrow(O, k, desc);
				}
			});
		}
		return true;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-testintegritylevel
	TestIntegrityLevel: function TestIntegrityLevel(O, level) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (level !== 'sealed' && level !== 'frozen') {
			throw new $TypeError('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
		}
		var status = this.IsExtensible(O);
		if (status) {
			return false;
		}
		var theKeys = $gOPN(O);
		var ES = this;
		return theKeys.length === 0 || every(theKeys, function (k) {
			var currentDesc = $gOPD(O, k);
			if (typeof currentDesc !== 'undefined') {
				if (currentDesc.configurable) {
					return false;
				}
				if (level === 'frozen' && ES.IsDataDescriptor(ES.ToPropertyDescriptor(currentDesc)) && currentDesc.writable) {
					return false;
				}
			}
			return true;
		});
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance
	OrdinaryHasInstance: function OrdinaryHasInstance(C, O) {
		if (this.IsCallable(C) === false) {
			return false;
		}
		if (this.Type(O) !== 'Object') {
			return false;
		}
		var P = this.Get(C, 'prototype');
		if (this.Type(P) !== 'Object') {
			throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
		}
		return O instanceof C;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasproperty
	OrdinaryHasProperty: function OrdinaryHasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: P must be a Property Key');
		}
		return P in O;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator
	InstanceofOperator: function InstanceofOperator(O, C) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		var instOfHandler = hasSymbols && $Symbol.hasInstance ? this.GetMethod(C, $Symbol.hasInstance) : void 0;
		if (typeof instOfHandler !== 'undefined') {
			return this.ToBoolean(this.Call(instOfHandler, C, [O]));
		}
		if (!this.IsCallable(C)) {
			throw new $TypeError('`C` is not Callable');
		}
		return this.OrdinaryHasInstance(C, O);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-ispromise
	IsPromise: function IsPromise(x) {
		if (this.Type(x) !== 'Object') {
			return false;
		}
		if (!$Promise) { // Promises are not supported
			return false;
		}
		try {
			$PromiseThen(x); // throws if not a promise
		} catch (e) {
			return false;
		}
		return true;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison
	'Abstract Equality Comparison': function AbstractEqualityComparison(x, y) {
		var xType = this.Type(x);
		var yType = this.Type(y);
		if (xType === yType) {
			return x === y; // ES6+ specified this shortcut anyways.
		}
		if (x == null && y == null) {
			return true;
		}
		if (xType === 'Number' && yType === 'String') {
			return this['Abstract Equality Comparison'](x, this.ToNumber(y));
		}
		if (xType === 'String' && yType === 'Number') {
			return this['Abstract Equality Comparison'](this.ToNumber(x), y);
		}
		if (xType === 'Boolean') {
			return this['Abstract Equality Comparison'](this.ToNumber(x), y);
		}
		if (yType === 'Boolean') {
			return this['Abstract Equality Comparison'](x, this.ToNumber(y));
		}
		if ((xType === 'String' || xType === 'Number' || xType === 'Symbol') && yType === 'Object') {
			return this['Abstract Equality Comparison'](x, this.ToPrimitive(y));
		}
		if (xType === 'Object' && (yType === 'String' || yType === 'Number' || yType === 'Symbol')) {
			return this['Abstract Equality Comparison'](this.ToPrimitive(x), y);
		}
		return false;
	},

	// eslint-disable-next-line max-lines-per-function, max-statements, id-length, max-params
	ValidateAndApplyPropertyDescriptor: function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
		// this uses the ES2017+ logic, since it fixes a number of bugs in the ES2015 logic.
		var oType = this.Type(O);
		if (oType !== 'Undefined' && oType !== 'Object') {
			throw new $TypeError('Assertion failed: O must be undefined or an Object');
		}
		if (this.Type(extensible) !== 'Boolean') {
			throw new $TypeError('Assertion failed: extensible must be a Boolean');
		}
		if (!isPropertyDescriptor(this, Desc)) {
			throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
		}
		if (this.Type(current) !== 'Undefined' && !isPropertyDescriptor(this, current)) {
			throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
		}
		if (oType !== 'Undefined' && !this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: if O is not undefined, P must be a Property Key');
		}
		if (this.Type(current) === 'Undefined') {
			if (!extensible) {
				return false;
			}
			if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
				if (oType !== 'Undefined') {
					DefineOwnProperty(this, O, P, {
						'[[Configurable]]': Desc['[[Configurable]]'],
						'[[Enumerable]]': Desc['[[Enumerable]]'],
						'[[Value]]': Desc['[[Value]]'],
						'[[Writable]]': Desc['[[Writable]]']
					});
				}
			} else {
				if (!this.IsAccessorDescriptor(Desc)) {
					throw new $TypeError('Assertion failed: Desc is not an accessor descriptor');
				}
				if (oType !== 'Undefined') {
					return DefineOwnProperty(this, O, P, Desc);
				}
			}
			return true;
		}
		if (this.IsGenericDescriptor(Desc) && !('[[Configurable]]' in Desc) && !('[[Enumerable]]' in Desc)) {
			return true;
		}
		if (isSamePropertyDescriptor(this, Desc, current)) {
			return true; // removed by ES2017, but should still be correct
		}
		// "if every field in Desc is absent, return true" can't really match the assertion that it's a Property Descriptor
		if (!current['[[Configurable]]']) {
			if (Desc['[[Configurable]]']) {
				return false;
			}
			if ('[[Enumerable]]' in Desc && !Desc['[[Enumerable]]'] === !!current['[[Enumerable]]']) {
				return false;
			}
		}
		if (this.IsGenericDescriptor(Desc)) {
			// no further validation is required.
		} else if (this.IsDataDescriptor(current) !== this.IsDataDescriptor(Desc)) {
			if (!current['[[Configurable]]']) {
				return false;
			}
			if (this.IsDataDescriptor(current)) {
				if (oType !== 'Undefined') {
					DefineOwnProperty(this, O, P, {
						'[[Configurable]]': current['[[Configurable]]'],
						'[[Enumerable]]': current['[[Enumerable]]'],
						'[[Get]]': undefined
					});
				}
			} else if (oType !== 'Undefined') {
				DefineOwnProperty(this, O, P, {
					'[[Configurable]]': current['[[Configurable]]'],
					'[[Enumerable]]': current['[[Enumerable]]'],
					'[[Value]]': undefined
				});
			}
		} else if (this.IsDataDescriptor(current) && this.IsDataDescriptor(Desc)) {
			if (!current['[[Configurable]]'] && !current['[[Writable]]']) {
				if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
					return false;
				}
				if ('[[Value]]' in Desc && !this.SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
					return false;
				}
				return true;
			}
		} else if (this.IsAccessorDescriptor(current) && this.IsAccessorDescriptor(Desc)) {
			if (!current['[[Configurable]]']) {
				if ('[[Set]]' in Desc && !this.SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
					return false;
				}
				if ('[[Get]]' in Desc && !this.SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
					return false;
				}
				return true;
			}
		} else {
			throw new $TypeError('Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.');
		}
		if (oType !== 'Undefined') {
			return DefineOwnProperty(this, O, P, Desc);
		}
		return true;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarydefineownproperty
	OrdinaryDefineOwnProperty: function OrdinaryDefineOwnProperty(O, P, Desc) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: P must be a Property Key');
		}
		if (!isPropertyDescriptor(this, Desc)) {
			throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
		}
		var desc = $gOPD(O, P);
		var current = desc && this.ToPropertyDescriptor(desc);
		var extensible = this.IsExtensible(O);
		return this.ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty
	OrdinaryGetOwnProperty: function OrdinaryGetOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: P must be a Property Key');
		}
		if (!has(O, P)) {
			return void 0;
		}
		if (!$gOPD) {
			// ES3 fallback
			var arrayLength = this.IsArray(O) && P === 'length';
			var regexLastIndex = this.IsRegExp(O) && P === 'lastIndex';
			return {
				'[[Configurable]]': !(arrayLength || regexLastIndex),
				'[[Enumerable]]': $isEnumerable(O, P),
				'[[Value]]': O[P],
				'[[Writable]]': true
			};
		}
		return this.ToPropertyDescriptor($gOPD(O, P));
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate
	ArrayCreate: function ArrayCreate(length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
		}
		if (length > MAX_ARRAY_LENGTH) {
			throw new $RangeError('length is greater than (2**32 - 1)');
		}
		var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
		var A = []; // steps 5 - 7, and 9
		if (proto !== $ArrayPrototype) { // step 8
			if (!$setProto) {
				throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
			}
			$setProto(A, proto);
		}
		if (length !== 0) { // bypasses the need for step 2
			A.length = length;
		}
		/* step 10, the above as a shortcut for the below
		this.OrdinaryDefineOwnProperty(A, 'length', {
			'[[Configurable]]': false,
			'[[Enumerable]]': false,
			'[[Value]]': length,
			'[[Writable]]': true
		});
		*/
		return A;
	},

	// eslint-disable-next-line max-statements, max-lines-per-function
	ArraySetLength: function ArraySetLength(A, Desc) {
		if (!this.IsArray(A)) {
			throw new $TypeError('Assertion failed: A must be an Array');
		}
		if (!isPropertyDescriptor(this, Desc)) {
			throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
		}
		if (!('[[Value]]' in Desc)) {
			return this.OrdinaryDefineOwnProperty(A, 'length', Desc);
		}
		var newLenDesc = assign({}, Desc);
		var newLen = this.ToUint32(Desc['[[Value]]']);
		var numberLen = this.ToNumber(Desc['[[Value]]']);
		if (newLen !== numberLen) {
			throw new $RangeError('Invalid array length');
		}
		newLenDesc['[[Value]]'] = newLen;
		var oldLenDesc = this.OrdinaryGetOwnProperty(A, 'length');
		if (!this.IsDataDescriptor(oldLenDesc)) {
			throw new $TypeError('Assertion failed: an array had a non-data descriptor on `length`');
		}
		var oldLen = oldLenDesc['[[Value]]'];
		if (newLen >= oldLen) {
			return this.OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
		}
		if (!oldLenDesc['[[Writable]]']) {
			return false;
		}
		var newWritable;
		if (!('[[Writable]]' in newLenDesc) || newLenDesc['[[Writable]]']) {
			newWritable = true;
		} else {
			newWritable = false;
			newLenDesc['[[Writable]]'] = true;
		}
		var succeeded = this.OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
		if (!succeeded) {
			return false;
		}
		while (newLen < oldLen) {
			oldLen -= 1;
			var deleteSucceeded = delete A[this.ToString(oldLen)];
			if (!deleteSucceeded) {
				newLenDesc['[[Value]]'] = oldLen + 1;
				if (!newWritable) {
					newLenDesc['[[Writable]]'] = false;
					this.OrdinaryDefineOwnProperty(A, 'length', newLenDesc);
					return false;
				}
			}
		}
		if (!newWritable) {
			return this.OrdinaryDefineOwnProperty(A, 'length', { '[[Writable]]': false });
		}
		return true;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-createhtml
	CreateHTML: function CreateHTML(string, tag, attribute, value) {
		if (this.Type(tag) !== 'String' || this.Type(attribute) !== 'String') {
			throw new $TypeError('Assertion failed: `tag` and `attribute` must be strings');
		}
		var str = this.RequireObjectCoercible(string);
		var S = this.ToString(str);
		var p1 = '<' + tag;
		if (attribute !== '') {
			var V = this.ToString(value);
			var escapedV = $replace(V, /\x22/g, '&quot;');
			p1 += '\x20' + attribute + '\x3D\x22' + escapedV + '\x22';
		}
		return p1 + '>' + S + '</' + tag + '>';
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-getownpropertykeys
	GetOwnPropertyKeys: function GetOwnPropertyKeys(O, Type) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (Type === 'Symbol') {
			return hasSymbols && $gOPS ? $gOPS(O) : [];
		}
		if (Type === 'String') {
			if (!$gOPN) {
				return keys(O);
			}
			return $gOPN(O);
		}
		throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-symboldescriptivestring
	SymbolDescriptiveString: function SymbolDescriptiveString(sym) {
		if (this.Type(sym) !== 'Symbol') {
			throw new $TypeError('Assertion failed: `sym` must be a Symbol');
		}
		return $SymbolToString(sym);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-getsubstitution
	// eslint-disable-next-line max-statements, max-params, max-lines-per-function
	GetSubstitution: function GetSubstitution(matched, str, position, captures, replacement) {
		if (this.Type(matched) !== 'String') {
			throw new $TypeError('Assertion failed: `matched` must be a String');
		}
		var matchLength = matched.length;

		if (this.Type(str) !== 'String') {
			throw new $TypeError('Assertion failed: `str` must be a String');
		}
		var stringLength = str.length;

		if (!this.IsInteger(position) || position < 0 || position > stringLength) {
			throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
		}

		var ES = this;
		var isStringOrHole = function (capture, index, arr) { return ES.Type(capture) === 'String' || !(index in arr); };
		if (!this.IsArray(captures) || !every(captures, isStringOrHole)) {
			throw new $TypeError('Assertion failed: `captures` must be a List of Strings, got ' + inspect(captures));
		}

		if (this.Type(replacement) !== 'String') {
			throw new $TypeError('Assertion failed: `replacement` must be a String');
		}

		var tailPos = position + matchLength;
		var m = captures.length;

		var result = '';
		for (var i = 0; i < replacement.length; i += 1) {
			// if this is a $, and it's not the end of the replacement
			var current = replacement[i];
			var isLast = (i + 1) >= replacement.length;
			var nextIsLast = (i + 2) >= replacement.length;
			if (current === '$' && !isLast) {
				var next = replacement[i + 1];
				if (next === '$') {
					result += '$';
					i += 1;
				} else if (next === '&') {
					result += matched;
					i += 1;
				} else if (next === '`') {
					result += position === 0 ? '' : strSlice(str, 0, position - 1);
					i += 1;
				} else if (next === "'") {
					result += tailPos >= stringLength ? '' : strSlice(str, tailPos);
					i += 1;
				} else {
					var nextNext = nextIsLast ? null : replacement[i + 2];
					if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
						// $1 through $9, and not followed by a digit
						var n = parseInteger(next, 10);
						// if (n > m, impl-defined)
						result += (n <= m && this.Type(captures[n - 1]) === 'Undefined') ? '' : captures[n - 1];
						i += 1;
					} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
						// $00 through $99
						var nn = next + nextNext;
						var nnI = parseInteger(nn, 10) - 1;
						// if nn === '00' or nn > m, impl-defined
						result += (nn <= m && this.Type(captures[nnI]) === 'Undefined') ? '' : captures[nnI];
						i += 2;
					} else {
						result += '$';
					}
				}
			} else {
				// the final $, or else not a $
				result += replacement[i];
			}
		}
		return result;
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(327);

var $Array = GetIntrinsic('%Array%');

var hasSymbols = __webpack_require__(421)();

var ES2015 = __webpack_require__(570);
var assign = __webpack_require__(420);
var callBind = __webpack_require__(382);

var $arrayPush = callBind($Array.prototype.push);

var ES2016 = assign(assign({}, ES2015), {
	// https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluenonnumber
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || typeof x !== typeof y) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	},

	// https://www.ecma-international.org/ecma-262/7.0/#sec-iterabletoarraylike
	IterableToArrayLike: function IterableToArrayLike(items) {
		var usingIterator;
		if (hasSymbols) {
			usingIterator = this.GetMethod(items, Symbol.iterator);
		} else if (this.IsArray(items)) {
			usingIterator = function () {
				var i = -1;
				var arr = this; // eslint-disable-line no-invalid-this
				return {
					next: function () {
						i += 1;
						return {
							done: i >= arr.length,
							value: arr[i]
						};
					}
				};
			};
		} else if (this.Type(items) === 'String') {
			// fallback for strings
		}
		if (typeof usingIterator !== 'undefined') {
			var iterator = this.GetIterator(items, usingIterator);
			var values = [];
			var next = true;
			while (next) {
				next = this.IteratorStep(iterator);
				if (next) {
					var nextValue = this.IteratorValue(next);
					$arrayPush(values, nextValue);
				}
			}
			return values;
		}

		return this.ToObject(items);
	}
});

module.exports = ES2016;


/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(327);

var ES2016 = __webpack_require__(571);
var assign = __webpack_require__(420);
var forEach = __webpack_require__(502);
var callBind = __webpack_require__(382);

var $TypeError = GetIntrinsic('%TypeError%');
var $Array = GetIntrinsic('%Array%');
var $isEnumerable = callBind(GetIntrinsic('%ObjectPrototype%').propertyIsEnumerable);
var $pushApply = callBind.apply(GetIntrinsic('%ArrayPrototype%').push);
var $arrayPush = callBind($Array.prototype.push);

var ES2017 = assign(assign({}, ES2016), {
	ToIndex: function ToIndex(value) {
		if (typeof value === 'undefined') {
			return 0;
		}
		var integerIndex = this.ToInteger(value);
		if (integerIndex < 0) {
			throw new RangeError('index must be >= 0');
		}
		var index = this.ToLength(integerIndex);
		if (!this.SameValueZero(integerIndex, index)) {
			throw new RangeError('index must be >= 0 and < 2 ** 53 - 1');
		}
		return index;
	},

	// https://www.ecma-international.org/ecma-262/8.0/#sec-enumerableownproperties
	EnumerableOwnProperties: function EnumerableOwnProperties(O, kind) {
		var keys = ES2016.EnumerableOwnNames(O);
		if (kind === 'key') {
			return keys;
		}
		if (kind === 'value' || kind === 'key+value') {
			var results = [];
			forEach(keys, function (key) {
				if ($isEnumerable(O, key)) {
					$pushApply(results, [
						kind === 'value' ? O[key] : [key, O[key]]
					]);
				}
			});
			return results;
		}
		throw new $TypeError('Assertion failed: "kind" is not "key", "value", or "key+value": ' + kind);
	},

	// https://www.ecma-international.org/ecma-262/8.0/#sec-iterabletolist
	IterableToList: function IterableToList(items, method) {
		var iterator = this.GetIterator(items, method);
		var values = [];
		var next = true;
		while (next) {
			next = this.IteratorStep(iterator);
			if (next) {
				var nextValue = this.IteratorValue(next);
				$arrayPush(values, nextValue);
			}
		}
		return values;
	}
});

delete ES2017.EnumerableOwnNames; // replaced with EnumerableOwnProperties
delete ES2017.IterableToArrayLike; // replaced with IterableToList

module.exports = ES2017;


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(327);

var $Object = GetIntrinsic('%Object%');
var $TypeError = GetIntrinsic('%TypeError%');
var $String = GetIntrinsic('%String%');
var $Number = GetIntrinsic('%Number%');

var assertRecord = __webpack_require__(500);
var isPropertyDescriptor = __webpack_require__(505);
var $isNaN = __webpack_require__(504);
var $isFinite = __webpack_require__(503);

var sign = __webpack_require__(507);
var mod = __webpack_require__(506);

var IsCallable = __webpack_require__(455);
var toPrimitive = __webpack_require__(577);

var has = __webpack_require__(351);

var callBind = __webpack_require__(382);
var strSlice = callBind($String.prototype.slice);

var isPrefixOf = function isPrefixOf(prefix, string) {
	if (prefix === string) {
		return true;
	}
	if (prefix.length > string.length) {
		return false;
	}
	return strSlice(string, 0, prefix.length) === prefix;
};

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return !!value;
	},
	ToNumber: function ToNumber(value) {
		return +value; // eslint-disable-line no-implicit-coercion
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return $String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return $Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new $TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// https://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
		return isPropertyDescriptor(this, Desc);
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.1
	IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
			return false;
		}

		return true;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.2
	IsDataDescriptor: function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
			return false;
		}

		return true;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.3
	IsGenericDescriptor: function IsGenericDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
			return true;
		}

		return false;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.4
	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (this.IsDataDescriptor(Desc)) {
			return {
				value: Desc['[[Value]]'],
				writable: !!Desc['[[Writable]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else if (this.IsAccessorDescriptor(Desc)) {
			return {
				get: Desc['[[Get]]'],
				set: Desc['[[Set]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else {
			throw new $TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
		}
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5
	ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
		if (this.Type(Obj) !== 'Object') {
			throw new $TypeError('ToPropertyDescriptor requires an object');
		}

		var desc = {};
		if (has(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
		}
		if (has(Obj, 'configurable')) {
			desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
		}
		if (has(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (has(Obj, 'writable')) {
			desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
		}
		if (has(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
				throw new TypeError('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (has(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
				throw new $TypeError('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}

		if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
			throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	},

	// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
	'Abstract Equality Comparison': function AbstractEqualityComparison(x, y) {
		var xType = this.Type(x);
		var yType = this.Type(y);
		if (xType === yType) {
			return x === y; // ES6+ specified this shortcut anyways.
		}
		if (x == null && y == null) {
			return true;
		}
		if (xType === 'Number' && yType === 'String') {
			return this['Abstract Equality Comparison'](x, this.ToNumber(y));
		}
		if (xType === 'String' && yType === 'Number') {
			return this['Abstract Equality Comparison'](this.ToNumber(x), y);
		}
		if (xType === 'Boolean') {
			return this['Abstract Equality Comparison'](this.ToNumber(x), y);
		}
		if (yType === 'Boolean') {
			return this['Abstract Equality Comparison'](x, this.ToNumber(y));
		}
		if ((xType === 'String' || xType === 'Number') && yType === 'Object') {
			return this['Abstract Equality Comparison'](x, this.ToPrimitive(y));
		}
		if (xType === 'Object' && (yType === 'String' || yType === 'Number')) {
			return this['Abstract Equality Comparison'](this.ToPrimitive(x), y);
		}
		return false;
	},

	// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6
	'Strict Equality Comparison': function StrictEqualityComparison(x, y) {
		var xType = this.Type(x);
		var yType = this.Type(y);
		if (xType !== yType) {
			return false;
		}
		if (xType === 'Undefined' || xType === 'Null') {
			return true;
		}
		return x === y; // shortcut for steps 4-7
	},

	// https://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5
	// eslint-disable-next-line max-statements
	'Abstract Relational Comparison': function AbstractRelationalComparison(x, y, LeftFirst) {
		if (this.Type(LeftFirst) !== 'Boolean') {
			throw new $TypeError('Assertion failed: LeftFirst argument must be a Boolean');
		}
		var px;
		var py;
		if (LeftFirst) {
			px = this.ToPrimitive(x, $Number);
			py = this.ToPrimitive(y, $Number);
		} else {
			py = this.ToPrimitive(y, $Number);
			px = this.ToPrimitive(x, $Number);
		}
		var bothStrings = this.Type(px) === 'String' && this.Type(py) === 'String';
		if (!bothStrings) {
			var nx = this.ToNumber(px);
			var ny = this.ToNumber(py);
			if ($isNaN(nx) || $isNaN(ny)) {
				return undefined;
			}
			if ($isFinite(nx) && $isFinite(ny) && nx === ny) {
				return false;
			}
			if (nx === 0 && ny === 0) {
				return false;
			}
			if (nx === Infinity) {
				return false;
			}
			if (ny === Infinity) {
				return true;
			}
			if (ny === -Infinity) {
				return false;
			}
			if (nx === -Infinity) {
				return true;
			}
			return nx < ny; // by now, these are both nonzero, finite, and not equal
		}
		if (isPrefixOf(py, px)) {
			return false;
		}
		if (isPrefixOf(px, py)) {
			return true;
		}
		return px < py; // both strings, neither a prefix of the other. shortcut for steps c-f
	}
};

module.exports = ES5;


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var every = __webpack_require__(501);

module.exports = function isSamePropertyDescriptor(ES, D1, D2) {
	var fields = [
		'[[Configurable]]',
		'[[Enumerable]]',
		'[[Get]]',
		'[[Set]]',
		'[[Value]]',
		'[[Writable]]'
	];
	return every(fields, function (field) {
		if ((field in D1) !== (field in D2)) {
			return false;
		}
		return ES.SameValue(D1[field], D2[field]);
	});
};


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(508);
var isCallable = __webpack_require__(455);
var isDate = __webpack_require__(594);
var isSymbol = __webpack_require__(511);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(508);

var isCallable = __webpack_require__(455);

// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
var ES5internalSlots = {
	'[[DefaultValue]]': function (O) {
		var actualHint;
		if (arguments.length > 1) {
			actualHint = arguments[1];
		} else {
			actualHint = toStr.call(O) === '[object Date]' ? String : Number;
		}

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// http://ecma-international.org/ecma-262/5.1/#sec-9.1
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	if (arguments.length > 1) {
		return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
	}
	return ES5internalSlots['[[DefaultValue]]'](input);
};


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(576);


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(410);
var isSymbol = __webpack_require__(511);

var globalKey = '__ global cache key __';
/* istanbul ignore else */
// eslint-disable-next-line no-restricted-properties
if (typeof Symbol === 'function' && isSymbol(Symbol('foo')) && typeof Symbol['for'] === 'function') {
	// eslint-disable-next-line no-restricted-properties
	globalKey = Symbol['for'](globalKey);
}

var trueThunk = function () {
	return true;
};

var ensureCache = function ensureCache() {
	if (!global[globalKey]) {
		var properties = {};
		properties[globalKey] = {};
		var predicates = {};
		predicates[globalKey] = trueThunk;
		define(global, properties, predicates);
	}
	return global[globalKey];
};

var cache = ensureCache();

var isPrimitive = function isPrimitive(val) {
	return val === null || (typeof val !== 'object' && typeof val !== 'function');
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	clear: function clear() {
		delete global[globalKey];
		cache = ensureCache();
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var primitiveKey = getPrimitiveKey(key);
		var props = {};
		props[primitiveKey] = value;
		var predicates = {};
		predicates[primitiveKey] = trueThunk;
		define(cache, props, predicates);
		return globalCache.has(key);
	},

	setIfMissingThenGet: function setIfMissingThenGet(key, valueThunk) {
		if (globalCache.has(key)) {
			return globalCache.get(key);
		}
		var item = valueThunk();
		globalCache.set(key, item);
		return item;
	}
};

module.exports = globalCache;


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(383);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(582);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),

/***/ 617:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(620).custom;
var inspectSymbol = (inspectCustom && isSymbol(inspectCustom)) ? inspectCustom : null;

module.exports = function inspect_ (obj, opts, depth, seen) {
    if (!opts) opts = {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
      if (obj === 0) {
        return Infinity / obj > 0 ? '0' : '-0';
      }
      return String(obj);
    }
    if (typeof obj === 'bigint') {
      return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return '[Object]';
    }

    if (typeof seen === 'undefined') seen = [];
    else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect (value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) s += '...';
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return '[]';
        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) return '[' + String(obj) + ']';
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object') {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var parts = [];
        mapForEach.call(obj, function (value, key) {
            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), parts);
    }
    if (isSet(obj)) {
        var parts = [];
        setForEach.call(obj, function (value ) {
            parts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), parts);
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var xs = arrObjKeys(obj, inspect);
        if (xs.length === 0) return '{}';
        return '{ ' + xs.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes (s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote (s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray (obj) { return toStr(obj) === '[object Array]'; }
function isDate (obj) { return toStr(obj) === '[object Date]'; }
function isRegExp (obj) { return toStr(obj) === '[object RegExp]'; }
function isError (obj) { return toStr(obj) === '[object Error]'; }
function isSymbol (obj) { return toStr(obj) === '[object Symbol]'; }
function isString (obj) { return toStr(obj) === '[object String]'; }
function isNumber (obj) { return toStr(obj) === '[object Number]'; }
function isBigInt (obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean (obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has (obj, key) {
    return hasOwn.call(obj, key);
}

function toStr (obj) {
    return objectToString.call(obj);
}

function nameOf (f) {
    if (f.name) return f.name;
    var m = String(f).match(/^function\s*([\w$]+)/);
    if (m) return m[1];
}

function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
}

function isMap (x) {
    if (!mapSize) {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet (x) {
    if (!setSize) {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement (x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string'
        && typeof x.getAttribute === 'function'
    ;
}

function inspectString (str, opts) {
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte (c) {
    var n = c.charCodeAt(0);
    var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
    if (x) return '\\' + x;
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed (str) {
    return 'Object(' + str + ')';
}

function collectionOf (type, size, entries) {
    return type + ' (' + size + ') {' + entries.join(', ') + '}';
}

function arrObjKeys (obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) {
        if (!has(obj, key)) continue;
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
        if (/[^\w$]/.test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17).inspect;


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(523); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__(632);


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(634));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var core = {
  white: '#fff',
  gray: '#484848',
  grayLight: '#82888a',
  grayLighter: '#cacccd',
  grayLightest: '#f2f2f2',
  borderMedium: '#c4c4c4',
  border: '#dbdbdb',
  borderLight: '#e4e7e7',
  borderLighter: '#eceeee',
  borderBright: '#f4f5f5',
  primary: '#00a699',
  primaryShade_1: '#33dacd',
  primaryShade_2: '#66e2da',
  primaryShade_3: '#80e8e0',
  primaryShade_4: '#b2f1ec',
  primary_dark: '#008489',
  secondary: '#007a87',
  yellow: '#ffe8bc',
  yellow_dark: '#ffce71'
};
var _default = {
  reactDates: {
    zIndex: 0,
    border: {
      input: {
        border: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: '2px solid transparent',
        borderLeft: 0,
        outlineFocused: 0,
        borderFocused: 0,
        borderTopFocused: 0,
        borderLeftFocused: 0,
        borderBottomFocused: "2px solid ".concat(core.primary_dark),
        borderRightFocused: 0,
        borderRadius: 0
      },
      pickerInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2
      }
    },
    color: {
      core: core,
      disabled: core.grayLightest,
      background: core.white,
      backgroundDark: '#f2f2f2',
      backgroundFocused: core.white,
      border: 'rgb(219, 219, 219)',
      text: core.gray,
      textDisabled: core.border,
      textFocused: '#007a87',
      placeholderText: '#757575',
      outside: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      highlighted: {
        backgroundColor: core.yellow,
        backgroundColor_active: core.yellow_dark,
        backgroundColor_hover: core.yellow_dark,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      minimumNights: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLighter,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      },
      hoveredSpan: {
        backgroundColor: core.primaryShade_4,
        backgroundColor_active: core.primaryShade_3,
        backgroundColor_hover: core.primaryShade_4,
        borderColor: core.primaryShade_3,
        borderColor_active: core.primaryShade_3,
        borderColor_hover: core.primaryShade_3,
        color: core.secondary,
        color_active: core.secondary,
        color_hover: core.secondary
      },
      selectedSpan: {
        backgroundColor: core.primaryShade_2,
        backgroundColor_active: core.primaryShade_1,
        backgroundColor_hover: core.primaryShade_1,
        borderColor: core.primaryShade_1,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      selected: {
        backgroundColor: core.primary,
        backgroundColor_active: core.primary,
        backgroundColor_hover: core.primary,
        borderColor: core.primary,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      blocked_calendar: {
        backgroundColor: core.grayLighter,
        backgroundColor_active: core.grayLighter,
        backgroundColor_hover: core.grayLighter,
        borderColor: core.grayLighter,
        borderColor_active: core.grayLighter,
        borderColor_hover: core.grayLighter,
        color: core.grayLight,
        color_active: core.grayLight,
        color_hover: core.grayLight
      },
      blocked_out_of_range: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLight,
        borderColor_active: core.borderLight,
        borderColor_hover: core.borderLight,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      }
    },
    spacing: {
      dayPickerHorizontalPadding: 9,
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      displayTextPaddingVertical: undefined,
      displayTextPaddingTop: 11,
      displayTextPaddingBottom: 9,
      displayTextPaddingHorizontal: undefined,
      displayTextPaddingLeft: 11,
      displayTextPaddingRight: 11,
      displayTextPaddingVertical_small: undefined,
      displayTextPaddingTop_small: 7,
      displayTextPaddingBottom_small: 5,
      displayTextPaddingHorizontal_small: undefined,
      displayTextPaddingLeft_small: 7,
      displayTextPaddingRight_small: 7
    },
    sizing: {
      inputWidth: 130,
      inputWidth_small: 97,
      arrowWidth: 24
    },
    noScrollBarOnVerticalScrollable: false,
    font: {
      size: 14,
      captionSize: 18,
      input: {
        size: 19,
        lineHeight: '24px',
        size_small: 15,
        lineHeight_small: '18px',
        letterSpacing_small: '0.2px',
        styleDisabled: 'italic'
      }
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__(684));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(635));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__(685));

var _DefaultTheme = _interopRequireDefault(__webpack_require__(633));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(391);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(534);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(390);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var _extractOptions = function _extractOptions(props) {
  var id = props.id,
      className = props.className,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onReady = props.onReady,
      options = _objectWithoutProperties(props, ['id', 'className', 'onChange', 'onFocus', 'onBlur', 'onReady']);

  return options;
};

var capitalized = function capitalized(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var Element = function Element(type) {
  var _class, _temp;

  var hocOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _temp = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props, context) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.handleRef = function (ref) {
        _this._ref = ref;
      };

      _this._element = null;

      var options = _extractOptions(_this.props);
      // We keep track of the extracted options on this._options to avoid re-rendering.
      // (We would unnecessarily re-render if we were tracking them with state.)
      _this._options = options;
      return _this;
    }

    _class.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.context.addElementsLoadListener(function (elements) {
        var element = elements.create(type, _this2._options);
        _this2._element = element;

        _this2._setupEventListeners(element);

        element.mount(_this2._ref);

        // Register Element for automatic token / source creation
        if (hocOptions.impliedTokenType || hocOptions.impliedSourceType) {
          _this2.context.registerElement(element, hocOptions.impliedTokenType, hocOptions.impliedSourceType);
        }
      });
    };

    _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var options = _extractOptions(nextProps);
      if (Object.keys(options).length !== 0 && !(0, _shallowEqual2.default)(options, this._options)) {
        this._options = options;
        if (this._element) {
          this._element.update(options);
        }
      }
    };

    _class.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this._element) {
        var element = this._element;
        element.destroy();
        this.context.unregisterElement(element);
      }
    };

    _class.prototype._setupEventListeners = function _setupEventListeners(element) {
      var _this3 = this;

      element.on('ready', function () {
        _this3.props.onReady(_this3._element);
      });

      element.on('change', function (change) {
        _this3.props.onChange(change);
      });

      element.on('blur', function () {
        var _props;

        return (_props = _this3.props).onBlur.apply(_props, arguments);
      });
      element.on('focus', function () {
        var _props2;

        return (_props2 = _this3.props).onFocus.apply(_props2, arguments);
      });
    };

    _class.prototype.render = function render() {
      return _react2.default.createElement('div', {
        id: this.props.id,
        className: this.props.className,
        ref: this.handleRef
      });
    };

    return _class;
  }(_react2.default.Component), _class.propTypes = {
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onReady: _propTypes2.default.func
  }, _class.defaultProps = {
    id: undefined,
    className: undefined,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onReady: noop
  }, _class.contextTypes = _Elements.elementContextTypes, _class.displayName = capitalized(type) + 'Element', _temp;
};

exports.default = Element;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(391);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(534);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(390);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var _extractOptions = function _extractOptions(props) {
  var id = props.id,
      className = props.className,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onReady = props.onReady,
      paymentRequest = props.paymentRequest,
      options = _objectWithoutProperties(props, ['id', 'className', 'onBlur', 'onClick', 'onFocus', 'onReady', 'paymentRequest']);

  return options;
};

var PaymentRequestButtonElement = function (_React$Component) {
  _inherits(PaymentRequestButtonElement, _React$Component);

  function PaymentRequestButtonElement(props, context) {
    _classCallCheck(this, PaymentRequestButtonElement);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleRef = function (ref) {
      _this._ref = ref;
    };

    var options = _extractOptions(props);
    // We keep track of the extracted options on this._options to avoid re-rendering.
    // (We would unnecessarily re-render if we were tracking them with state.)
    _this._options = options;
    return _this;
  }

  PaymentRequestButtonElement.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.context.addElementsLoadListener(function (elements) {
      _this2._element = elements.create('paymentRequestButton', _extends({
        paymentRequest: _this2.props.paymentRequest
      }, _this2._options));
      _this2._element.on('ready', function () {
        _this2.props.onReady(_this2._element);
      });
      _this2._element.on('focus', function () {
        var _props;

        return (_props = _this2.props).onFocus.apply(_props, arguments);
      });
      _this2._element.on('click', function () {
        var _props2;

        return (_props2 = _this2.props).onClick.apply(_props2, arguments);
      });
      _this2._element.on('blur', function () {
        var _props3;

        return (_props3 = _this2.props).onBlur.apply(_props3, arguments);
      });
      _this2._element.mount(_this2._ref);
    });
  };

  PaymentRequestButtonElement.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.paymentRequest !== nextProps.paymentRequest) {
      console.warn('Unsupported prop change: paymentRequest is not a customizable property.');
    }
    var options = _extractOptions(nextProps);
    if (Object.keys(options).length !== 0 && !(0, _shallowEqual2.default)(options, this._options)) {
      this._options = options;
      this._element.update(options);
    }
  };

  PaymentRequestButtonElement.prototype.componentWillUnmount = function componentWillUnmount() {
    this._element.destroy();
  };

  PaymentRequestButtonElement.prototype.render = function render() {
    return _react2.default.createElement('div', {
      id: this.props.id,
      className: this.props.className,
      ref: this.handleRef
    });
  };

  return PaymentRequestButtonElement;
}(_react2.default.Component);

PaymentRequestButtonElement.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  paymentRequest: _propTypes2.default.shape({
    canMakePayment: _propTypes2.default.func.isRequired,
    on: _propTypes2.default.func.isRequired,
    show: _propTypes2.default.func.isRequired
  }).isRequired
};
PaymentRequestButtonElement.defaultProps = {
  id: undefined,
  className: undefined,
  onBlur: noop,
  onClick: noop,
  onFocus: noop,
  onReady: noop
};
PaymentRequestButtonElement.contextTypes = _Elements.elementContextTypes;
exports.default = PaymentRequestButtonElement;

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Elements = __webpack_require__(390);

var _Provider = __webpack_require__(479);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// react-redux does a bunch of stuff with pure components / checking if it needs to re-render.
// not sure if we need to do the same.
var inject = function inject(WrappedComponent) {
  var _class, _temp;

  var componentOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _componentOptions$wit = componentOptions.withRef,
      withRef = _componentOptions$wit === undefined ? false : _componentOptions$wit;


  return _temp = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props, context) {
      _classCallCheck(this, _class);

      if (!context || !context.getRegisteredElements) {
        throw new Error('It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.');
      }

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.findElement = function (filterBy, specifiedType) {
        var allElements = _this.context.getRegisteredElements();
        var filteredElements = allElements.filter(function (e) {
          return e[filterBy];
        });
        var matchingElements = specifiedType === 'auto' ? filteredElements : filteredElements.filter(function (e) {
          return e[filterBy] === specifiedType;
        });

        if (matchingElements.length === 1) {
          return matchingElements[0].element;
        } else if (matchingElements.length > 1) {
          throw new Error('You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.');
        } else {
          return null;
        }
      };

      _this.requireElement = function (filterBy, specifiedType) {
        var element = _this.findElement(filterBy, specifiedType);
        if (element) {
          return element;
        } else {
          throw new Error('You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.');
        }
      };

      _this.wrappedCreateToken = function (stripe) {
        return function () {
          var tokenTypeOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (tokenTypeOrOptions && (typeof tokenTypeOrOptions === 'undefined' ? 'undefined' : _typeof(tokenTypeOrOptions)) === 'object') {
            // First argument is options; infer the Element and tokenize
            var opts = tokenTypeOrOptions;

            var tokenType = opts.type,
                rest = _objectWithoutProperties(opts, ['type']);

            var specifiedType = typeof tokenType === 'string' ? tokenType : 'auto';
            // Since only options were passed in, a corresponding Element must exist
            // for the tokenization to succeed -- thus we call requireElement.
            var element = _this.requireElement('impliedTokenType', specifiedType);
            return stripe.createToken(element, rest);
          } else if (typeof tokenTypeOrOptions === 'string') {
            // First argument is token type; tokenize with token type and options
            var _tokenType = tokenTypeOrOptions;
            return stripe.createToken(_tokenType, options);
          } else {
            // If a bad value was passed in for options, throw an error.
            throw new Error('Invalid options passed to createToken. Expected an object, got ' + (typeof tokenTypeOrOptions === 'undefined' ? 'undefined' : _typeof(tokenTypeOrOptions)) + '.');
          }
        };
      };

      _this.wrappedCreateSource = function (stripe) {
        return function () {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            if (typeof options.type !== 'string') {
              throw new Error('Invalid Source type passed to createSource. Expected string, got ' + _typeof(options.type) + '.');
            }

            var element = _this.findElement('impliedSourceType', options.type);
            if (element) {
              // If an Element exists for the source type, use that to create the
              // corresponding source.
              //
              // NOTE: this prevents users from independently creating sources of
              // type `foo` if an Element that can create `foo` sources exists in
              // the current <Elements /> context.
              return stripe.createSource(element, options);
            } else {
              // If no Element exists for the source type, directly create a source.
              return stripe.createSource(options);
            }
          } else {
            // If a bad value was passed in for options, throw an error.
            throw new Error('Invalid options passed to createSource. Expected an object, got ' + (typeof options === 'undefined' ? 'undefined' : _typeof(options)) + '.');
          }
        };
      };

      if (_this.context.tag === 'sync') {
        _this.state = {
          stripe: _this.stripeProps(_this.context.stripe)
        };
      } else {
        _this.state = {
          stripe: null
        };
      }
      return _this;
    }

    _class.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;

      if (this.context.tag === 'async') {
        this.context.addStripeLoadListener(function (stripe) {
          _this2.setState({
            stripe: _this2.stripeProps(stripe)
          });
        });
      } else {
        // when 'sync', it's already set in the constructor.
      }
    };

    _class.prototype.getWrappedInstance = function getWrappedInstance() {
      if (!withRef) {
        throw new Error('To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`');
      }
      return this.wrappedInstance;
    };

    _class.prototype.stripeProps = function stripeProps(stripe) {
      return _extends({}, stripe, {
        // These are the only functions that take elements.
        createToken: this.wrappedCreateToken(stripe),
        createSource: this.wrappedCreateSource(stripe)
      });
    };

    // Finds an Element by the specified type, if one exists.
    // Throws if multiple Elements match.


    // Require that exactly one Element is found for the specified type.
    // Throws if no Element is found.


    // Wraps createToken in order to infer the Element that is being tokenized.


    // Wraps createSource in order to infer the Element that is being used for
    // source creation.


    _class.prototype.render = function render() {
      var _this3 = this;

      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
        stripe: this.state.stripe,
        ref: withRef ? function (c) {
          _this3.wrappedInstance = c;
        } : null
      }));
    };

    return _class;
  }(_react2.default.Component), _class.contextTypes = _extends({}, _Provider.providerContextTypes, _Elements.injectContextTypes), _class.displayName = 'InjectStripe(' + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ')', _temp;
};

exports.default = inject;

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdealBankElement = exports.IbanElement = exports.PaymentRequestButtonElement = exports.PostalCodeElement = exports.CardCVCElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = undefined;

var _Provider = __webpack_require__(479);

var _Provider2 = _interopRequireDefault(_Provider);

var _inject = __webpack_require__(663);

var _inject2 = _interopRequireDefault(_inject);

var _Elements = __webpack_require__(390);

var _Elements2 = _interopRequireDefault(_Elements);

var _Element = __webpack_require__(661);

var _Element2 = _interopRequireDefault(_Element);

var _PaymentRequestButtonElement = __webpack_require__(662);

var _PaymentRequestButtonElement2 = _interopRequireDefault(_PaymentRequestButtonElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define Elements, and register their implied token / source types for
// automatic token / source creation.

// Card
var CardElement = (0, _Element2.default)('card', {
  impliedTokenType: 'card',
  impliedSourceType: 'card'
});

// Split Fields
// Note: we only register the CardNumberElement for split fields so that we have
// a unique Element to infer when calling `wrappedCreateToken` or `wrappedCreateSource`.

var CardNumberElement = (0, _Element2.default)('cardNumber', {
  impliedTokenType: 'card',
  impliedSourceType: 'card'
});
var CardExpiryElement = (0, _Element2.default)('cardExpiry');
var CardCVCElement = (0, _Element2.default)('cardCvc');
var PostalCodeElement = (0, _Element2.default)('postalCode');

// IBAN
var IbanElement = (0, _Element2.default)('iban', {
  impliedTokenType: 'bank_account',
  impliedSourceType: 'sepa_debit'
});

// iDEAL Bank
var IdealBankElement = (0, _Element2.default)('idealBank', { impliedSourceType: 'ideal' });

exports.StripeProvider = _Provider2.default;
exports.injectStripe = _inject2.default;
exports.Elements = _Elements2.default;
exports.CardElement = CardElement;
exports.CardNumberElement = CardNumberElement;
exports.CardExpiryElement = CardExpiryElement;
exports.CardCVCElement = CardCVCElement;
exports.PostalCodeElement = PostalCodeElement;
exports.PaymentRequestButtonElement = _PaymentRequestButtonElement2.default;
exports.IbanElement = IbanElement;
exports.IdealBankElement = IdealBankElement;

/***/ }),

/***/ 665:
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
  var ReactPropTypesSecret = __webpack_require__(480);
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

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(480);

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

/***/ 667:
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

var ReactPropTypesSecret = __webpack_require__(480);
var checkPropTypes = __webpack_require__(665);

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

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPrototype = __webpack_require__(536);

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _globalCache = __webpack_require__(580);

var _globalCache2 = _interopRequireDefault(_globalCache);

var _constants = __webpack_require__(681);

var _getClassName = __webpack_require__(682);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _separateStyles2 = __webpack_require__(683);

var _separateStyles3 = _interopRequireDefault(_separateStyles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Function required as part of the react-with-styles interface. Parses the styles provided by
 * react-with-styles to produce class names based on the style name and optionally the namespace if
 * available.
 *
 * stylesObject {Object} The styles object passed to withStyles.
 *
 * Return an object mapping style names to class names.
 */
function create(stylesObject) {
  var stylesToClasses = {};
  var styleNames = Object.keys(stylesObject);
  var sharedState = _globalCache2['default'].get(_constants.GLOBAL_CACHE_KEY) || {};
  var _sharedState$namespac = sharedState.namespace,
      namespace = _sharedState$namespac === undefined ? '' : _sharedState$namespac;

  styleNames.forEach(function (styleName) {
    var className = (0, _getClassName2['default'])(namespace, styleName);
    stylesToClasses[styleName] = className;
  });
  return stylesToClasses;
}

/**
 * Process styles to be consumed by a component.
 *
 * stylesArray {Array} Array of the following: values returned by create, plain JavaScript objects
 * representing inline styles, or arrays thereof.
 *
 * Return an object with optional className and style properties to be spread on a component.
 */
function resolve(stylesArray) {
  var flattenedStyles = (0, _arrayPrototype2['default'])(stylesArray, Infinity);

  var _separateStyles = (0, _separateStyles3['default'])(flattenedStyles),
      classNames = _separateStyles.classNames,
      hasInlineStyles = _separateStyles.hasInlineStyles,
      inlineStyles = _separateStyles.inlineStyles;

  var specificClassNames = classNames.map(function (name, index) {
    return String(name) + ' ' + String(name) + '_' + String(index + 1);
  });
  var className = specificClassNames.join(' ');

  var result = { className: className };
  if (hasInlineStyles) result.style = inlineStyles;
  return result;
}

exports['default'] = { create: create, resolve: resolve };

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
var MAX_SPECIFICITY = 20;

exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getClassName;
/**
 * Construct a class name.
 *
 * namespace {String} Used to construct unique class names.
 * styleName {String} Name identifying the specific style.
 *
 * Return the class name.
 */
function getClassName(namespace, styleName) {
  var namespaceSegment = namespace.length > 0 ? String(namespace) + '__' : '';
  return '' + namespaceSegment + String(styleName);
}

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This function takes an array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var classNames = [];

  // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.
  var hasInlineStyles = false;
  var inlineStyles = {};

  // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.
  for (var i = 0; i < stylesArray.length; i++) {
    // eslint-disable-line no-plusplus
    var style = stylesArray[i];

    // If this  style is falsy, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)
    if (style) {
      if (typeof style === 'string') {
        classNames.push(style);
      } else {
        Object.assign(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    classNames: classNames,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}

exports['default'] = separateStyles;

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(680).default;


/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styleInterface = void 0;
var styleTheme = void 0;

var START_MARK = 'react-with-styles.resolve.start';
var END_MARK = 'react-with-styles.resolve.end';
var MEASURE_MARK = '\uD83D\uDC69\u200D\uD83C\uDFA8 [resolve]';

function registerTheme(theme) {
  styleTheme = theme;
}

function registerInterface(interfaceToRegister) {
  styleInterface = interfaceToRegister;
}

function create(makeFromTheme, createWithDirection) {
  var styles = createWithDirection(makeFromTheme(styleTheme));
  return function () {
    return styles;
  };
}

function createLTR(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createLTR || styleInterface.create);
}

function createRTL(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createRTL || styleInterface.create);
}

function get() {
  return styleTheme;
}

function resolve() {
  if (process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(START_MARK);
    performance.mark(START_MARK);
  }

  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if (process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(END_MARK);
    performance.mark(END_MARK);

    performance.measure(MEASURE_MARK, START_MARK, END_MARK);
    performance.clearMarks(MEASURE_MARK);
  }

  return result;
}

function resolveLTR() {
  for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  if (styleInterface.resolveLTR) {
    return styleInterface.resolveLTR(styles);
  }

  return resolve(styles);
}

function resolveRTL() {
  for (var _len3 = arguments.length, styles = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  if (styleInterface.resolveRTL) {
    return styleInterface.resolveRTL(styles);
  }

  return resolve(styles);
}

function flush() {
  if (styleInterface.flush) {
    styleInterface.flush();
  }
}

exports['default'] = {
  registerTheme: registerTheme,
  registerInterface: registerInterface,
  create: createLTR,
  createLTR: createLTR,
  createRTL: createRTL,
  get: get,
  resolve: resolveLTR,
  resolveLTR: resolveLTR,
  resolveRTL: resolveRTL,
  flush: flush
};

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvcj8wNzdiKioiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvcj9kNzQ1KioiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9HZXRJbnRyaW5zaWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9+L2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2NhbGxCaW5kLmpzIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vaGFzLXN5bWJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1jYWxsYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZsYXQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzZXJ0UmVjb3JkLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5mbGF0L3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYmlsbGluZy91cGRhdGUudHN4Iiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE3LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsb2JhbC1jYWNoZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9saWIvY3NzL19kYXRlcGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1pbnNwZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWluc3BlY3QvdXRpbC5pbnNwZWN0LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGF0ZXMvbGliL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9saWIvdGhlbWUvRGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGF0ZXMvbGliL3V0aWxzL3JlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRhdGVzL2xpYi91dGlscy9yZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvZGlzdC91dGlscy9zZXBhcmF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2NyZWRpdGNhcmQuanBnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2E7QUFFZDtBQUNIO0FBQ0s7QUFjUjtBQVNNO0FBQzBCO0FBUXlCO0FBQ2hEO0FBQ0k7QUFDYztBQUdwRCxJQUFNLFFBQVEsR0FBRyxtQkFBTyxDQUFDLEdBQWtCLENBQUMsQ0FBQztBQUU3QyxJQUFNLGtCQUFrQixHQUFHLGtHQUFnQixFQUFxQixDQUFDO0FBRWpFLElBQU0sY0FBYyxHQUFHLGtHQUFnQixFQUFrQixDQUFDO0FBRTFELElBQU0sZUFBZSxHQUFHLGtHQUFnQixFQUFpQixDQUFDO0FBSTFELElBQU0sU0FBUyxHQUFHLFVBQUMsRUFBb0I7UUFBbEIsc0JBQVEsRUFBRSxrQkFBTTtJQUFPLFFBQzFDLDhEQUFLLFNBQVMsRUFBQyxhQUFhO1FBQzFCLDhEQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7WUFDckMsaUZBQXdCLENBQ3BCO1FBRU4sOERBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtZQUNyQyxxREFBQyxzREFBSyxJQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsR0FBSSxDQUM5RTtRQUVOLDhEQUNFLEtBQUssRUFBRSxFQUFFLE1B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TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7O0FDWEE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRCxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsTUFBTTtBQUNOLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx3QkFBd0I7QUFDL0U7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELHlEQUF5RDtBQUNoSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDOztBQUVoQzs7Ozs7Ozs7O0FDcjJDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDL0RBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUNBQWlDO0FBQ2pDLGtDQUFrQzs7QUFFbEM7Ozs7Ozs7OztBQ3RFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxnQkFBZ0I7QUFDaEIsRUFBRTtBQUNGO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQywyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLDZEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ2pVQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6SEE7QUFDQTs7Ozs7Ozs7O0FDREE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLHdEOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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OWExMGZlYzBlY2Y3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWFjdC1kYXRlcy9pbml0aWFsaXplJztcbmltcG9ydCAncmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3MnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb2wsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEdyaWQsXG4gIEltYWdlLFxuICBJbnB1dEdyb3VwLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgUGFuZWwsXG4gIFJvdyxcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7XG4gIENhcmRDVkNFbGVtZW50LFxuICBDYXJkRXhwaXJ5RWxlbWVudCxcbiAgQ2FyZE51bWJlckVsZW1lbnQsXG4gIEVsZW1lbnRzLFxuICBQb3N0YWxDb2RlRWxlbWVudCxcbiAgU3RyaXBlUHJvdmlkZXIsXG4gIGluamVjdFN0cmlwZSxcbn0gZnJvbSAncmVhY3Qtc3RyaXBlLWVsZW1lbnRzJztcbmltcG9ydCBlbnN1cmVCaWxsaW5nLCB7IElCaWxsaW5nU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBDYXJkRWRpdE1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0NhcmRFZGl0TW9kZWwnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZXMnO1xuaW1wb3J0IHsgSUFzeW5jUmVzdWx0IH0gZnJvbSAnYmFzZS9hc3luY1N0YXRlTWlkZGxld2FyZSc7XG5pbXBvcnQgeyBJbnZvaWNlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvSW52b2ljZU1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkRldGFpbHNNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9TdWJzY3JpcHRpb25EZXRhaWxzTW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvU3Vic2NyaXB0aW9uTW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwnO1xuaW1wb3J0IFVwZGF0ZVZpZXcgZnJvbSAnLi91cGRhdGUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUxvYWRlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcbmltcG9ydCBlbnN1cmVXb3Jrc3BhY2UgZnJvbSAnLi4vd29ya3NwYWNlL3JlZHVjZXInO1xuXG5jb25zdCBDYXJkbG9nbyA9IHJlcXVpcmUoJy4vY3JlZGl0Y2FyZC5qcGcnKTtcblxuY29uc3QgU3Vic2NyaXB0aW9uTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxTdWJzY3JpcHRpb25Nb2RlbD4oKTtcblxuY29uc3QgSW52b2ljZXNMb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PEludm9pY2VNb2RlbFtdPigpO1xuXG5jb25zdCBDYXJkc1ZpZXdMb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PENhcmRFZGl0TW9kZWw+KCk7XG5cbnR5cGUgQ29ubmVjdGVkUHJvcHMgPSBJQmlsbGluZ1N0YXRlICYge307XG5cbmNvbnN0IF9DYXJkVmlldyA9ICh7IGRpc3BhdGNoLCBzdHJpcGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICA8c3Bhbj5DYXJkIG51bWJlcjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICA8SW1hZ2Ugc3JjPXtDYXJkbG9nb30gYWx0PSdjcmVkaXQgY2FyZHMnIHN0eWxlPXt7IGhlaWdodDogMjUsIG1hcmdpbkxlZnQ6IDI1IH19IC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICBzdHlsZT17eyBib3JkZXI6ICdzb2xpZCAxcHggI2NjYycsIHBhZGRpbmc6IDUsIHdpZHRoOiAyODEsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6IDEwIH19XG4gICAgPlxuICAgICAgPENhcmROdW1iZXJFbGVtZW50IC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTUgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPkV4cGlyYXRpb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnc29saWQgMXB4ICNjY2MnLCBwYWRkaW5nOiA1LCB3aWR0aDogMTUwIH19PlxuICAgICAgICAgIDxDYXJkRXhwaXJ5RWxlbWVudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW5MZWZ0OiAzMCB9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5TZWN1cml0eSBjb2RlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJywgcGFkZGluZzogNSwgd2lkdGg6IDEwMCB9fT5cbiAgICAgICAgICA8Q2FyZENWQ0VsZW1lbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE1IH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPlppcGNvZGU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnc29saWQgMXB4ICNjY2MnLCBwYWRkaW5nOiA1LCB3aWR0aDogMjgxLCBtYXJnaW46ICdhdXRvJyB9fT5cbiAgICAgICAgICA8UG9zdGFsQ29kZUVsZW1lbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgd2lkdGg6IDI4MSxcbiAgICAgICAgcGFkZGluZzogJzIwcHggMHB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJ1dHRvbiBic1N0eWxlPSdzdWNjZXNzJyBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2F2ZUNhcmQoc3RyaXBlKSl9PlxuICAgICAgICBTdWJtaXQgY2FyZCBpbmZvcm1hdGlvblxuICAgICAgPC9CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1tdXRlZCB0ZXh0LWxlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAqIFJFViB1c2VzIFwiU3RyaXBlXCIgZm9yIGFsbCBjcmVkaXQgY2FyZCBwcm9jZXNzaW5nIGFuZCBzdG9yYWdlLiBZb3VyIGNhcmQgaW5mb3JtYXRpb24gaXNcbiAgICAgICAgICBkaXJlY3RseSB0cmFuc2ZlcnJlZCB0byBzdHJpcGUgYW5kIGlzIG5ldmVyIHNlZW4gYnkgb3VyIHNlcnZlcnMuIFdlIGNob3NlIHN0cmlwZSBhcyBpdCBoYXNcbiAgICAgICAgICBwcm92ZW4gdG8gZXhjZWVkIGhpZ2hlc3QgbGV2ZWxzIG9mIHNlY3VyaXR5IHN0YW5kYXJkcyBpbiBvbmxpbmUgY3JlZGl0IGNhcmQgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0eycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3N0cmlwZS5jb20vZG9jcy9zZWN1cml0eS9zdHJpcGUnIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3NlY3VyaXR5L3N0cmlwZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENhcmRWaWV3ID0gaW5qZWN0U3RyaXBlKF9DYXJkVmlldyk7XG5cbnR5cGUgU3RhdGVQcm9wcyA9IHsgZm9jdXNlZERhdGVpbnB1dD86IGFueTsgZGVsZXRlcGFuZWxPcGVuPzogYm9vbGVhbiB9O1xuXG5jbGFzcyBCaWxsaW5nVmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29ubmVjdGVkUHJvcHMgJiB7IGRpc3BhdGNoIH0sIFN0YXRlUHJvcHM+IHtcbiAgc3RhdGU6IFN0YXRlUHJvcHMgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5Jbml0QmlsbGluZ1ZpZXcoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzcGF0Y2gsXG4gICAgICBzdWJzY3JpcHRpb25Bc3luYyxcbiAgICAgIGNhcmRzT25GaWxlQXN5bmMsXG4gICAgICBlbnRlcmluZ05ld0NhcmQsXG4gICAgICBzaG93aW5nVXBkYXRlVmlldyxcbiAgICAgIG5ld1JldlNlYXRDb3VudCxcbiAgICAgIGNvdXBvbixcbiAgICAgIGludkRhdGVSYW5nZSxcbiAgICAgIGludm9pY2VMaXN0QXN5bmMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtaW5mbyc7XG4gICAgaWYgKHN1YnNjcmlwdGlvbkFzeW5jICYmIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCkge1xuICAgICAgaWYgKFN1YnNjcmlwdGlvblN0YXR1c01vZGVsLnRyaWFsaW5nID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpXG4gICAgICAgIHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LXdhcm5pbmcnO1xuICAgICAgZWxzZSBpZiAoU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwudW5hdmFpbGFibGUgPT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtZGFuZ2VyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBZb3VyIHN1YnNjcmlwdGlvbiBzdGF0dXMgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxleycgJ31cbiAgICAgICAgICA8L2gzPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChTdWJzY3JpcHRpb25TdGF0dXNNb2RlbC5hY3RpdmUgIT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cylcbiAgICAgICAgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtZGFuZ2VyJztcbiAgICB9XG5cbiAgICBsZXQgcmV2UGxhbjogU3Vic2NyaXB0aW9uRGV0YWlsc01vZGVsID0gbnVsbDtcbiAgICBpZiAoc3Vic2NyaXB0aW9uQXN5bmMgJiYgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0KSB7XG4gICAgICByZXZQbGFuID0gXy5maW5kKFxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyxcbiAgICAgICAgKGRldGFpbCkgPT4gJ3JldlNlYXRzJyA9PSBkZXRhaWwuZm9yUHJvZHVjdCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFJldlNlYXRzID0gbmV3UmV2U2VhdENvdW50IHx8IChyZXZQbGFuICYmIHJldlBsYW4ucXVhbnRpdHkpO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPVxuICAgICAgKHN1YnNjcmlwdGlvbkFzeW5jICYmXG4gICAgICAgIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJlxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyAmJlxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscy5sZW5ndGggPiAwICYmXG4gICAgICAgIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5kZXRhaWxzWzBdLmludGVydmFsKSB8fFxuICAgICAgJ21vbnRoJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7c2hvd2luZ1VwZGF0ZVZpZXcgPyAoXG4gICAgICAgICAgPFVwZGF0ZVZpZXcgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkluZm8gdGV4dC1jZW50ZXIgY29udGFpbmVyJz5cbiAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYyAmJiAoXG4gICAgICAgICAgICAgIDxTdWJzY3JpcHRpb25Mb2FkZXJcbiAgICAgICAgICAgICAgICBhc3luY1Jlc3VsdD17c3Vic2NyaXB0aW9uQXN5bmN9XG4gICAgICAgICAgICAgICAgcHJvbXB0PSdsb2FkaW5nIHN1YnNjcmlwdGlvbiBkZXRhaWxzJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknPiBTdWJzY3JpcHRpb24gZGV0YWlsczwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgeydwYXN0X2R1ZScgPT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRyZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBSRVYgc3Vic2NyaXB0aW9uIGlzIGluYWN0aXZlLnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBjb250YWN0IGN1c3RvbWVyIHN1cHBvcnQgYXQgdGhpcyBsaW5rIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3NjYW5yZXYuZnJlc2hkZXNrLmNvbS9hL3RpY2tldHMvbmV3JyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwczovL3NjYW5yZXYuZnJlc2hkZXNrLmNvbS9hL3RpY2tldHMvbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBSRVYgc3Vic2NyaXB0aW9uIGlzIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzfSBhbmQgcGFpZCB0aWxseycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKC0xLCAnZGF5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KCdsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHsndHJpYWxpbmcnID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQudHJpYWxEYXlzTGVmdH0gZGF5KHMpIG9mIGZyZWUgdHJpYWwgbGVmdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TmV4dCBpbnZvaWNlIGRhdGUge21vbWVudChzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZCkuZm9ybWF0KCdsJyl9IDwvc21hbGw+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIG5leHQgaW52b2ljZSBpcyBkdWUgb257JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5jdXJyZW50UGVyaW9kRW5kKS5mb3JtYXQoJ2wnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qe3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5kZXRhaWxzICYmIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uIGRldGFpbHM6IDxpPigke3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5uZXh0SW52b2ljZUFtb3VudH0ve2ludGVydmFsfSk8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU2l6ZT1cInNtYWxsXCIgYnNTdHlsZT1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5zaG93VXBkYXRlVmlldyh0cnVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5kZXRhaWxzLm1hcChzdWIgPT4gPGxpIGtleT17c3ViLnBsYW5JZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzdWIuaXNNZXRlcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17bmV3UmV2U2VhdENvdW50ID8gJ3RleHQtZGFuZ2VyJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtjdXJyZW50UmV2U2VhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3ViLnVuaXQgJiYgKCcgJyArIHN1Yi51bml0ICsgKGN1cnJlbnRSZXZTZWF0cyA9PSAxID8gJycgOiAncycpKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXsoPFRvb2x0aXAgaWQ9XCJhZGRzZWF0dG9vbHRpcFwiPkFkZCBsaWNlbnNlZCBzZWF0czwvVG9vbHRpcD4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1NpemU9XCJ4c1wiIGJzU3R5bGU9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e2N1cnJlbnRSZXZTZWF0cyA+PSAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuaW5jcmVhc2VSZXZTZWF0Q291bnQodHJ1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9eyg8VG9vbHRpcCBpZD1cInJlbW92ZXNlYXR0b29sdGlwXCI+UmVkdWNlIGxpY2Vuc2VkIHNlYXRzPC9Ub29sdGlwPil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU2l6ZT1cInhzXCIgYnNTdHlsZT1cImRhbmdlclwiIGRpc2FibGVkPXtjdXJyZW50UmV2U2VhdHMgPD0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5pbmNyZWFzZVJldlNlYXRDb3VudChmYWxzZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhbmV3UmV2U2VhdENvdW50ICYmIDxCdXR0b24gYnNTaXplPVwieHNcIiBic1N0eWxlPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS51cGRhdGVSZXZTZWF0cygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlIHVwZGF0ZWQgc2VhdCBjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCB2YWxpZGF0aW9uU3RhdGU9XCJzdWNjZXNzXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDYwMCwgbWFyZ2luOicxMHB4IGF1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGJzU2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFkZG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGNvdXBvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFkZG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiB2YWx1ZT17Y291cG9uIHx8ICcnfSBvbkNoYW5nZT17IChlOmFueSkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLnNldENvdXBvbihlLnRhcmdldC52YWx1ZSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXshKGNvdXBvbiAmJiBjb3Vwb24ubGVuZ3RoID49IDUpfSBic1N0eWxlPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLmFwcGx5Q291cG9uKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcGx5IHRvIG15IGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TdWJzY3JpcHRpb25Mb2FkZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibWFpbkluZm8gY29udGFpbmVyIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCBhdXRvJywgcGFkZGluZzogMzAgfX0+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVwYW5lbE9wZW46ICF0aGlzLnN0YXRlLmRlbGV0ZXBhbmVsT3BlbiB9KX0gc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Ib3cgY2FuIEkgY2FuY2VsIG15IHN1YnNjcmlwdGlvbj8gPGkgc3R5bGU9e3sgbWFyZ2luZ0xlZnQ6IDIwIH19IGNsYXNzTmFtZT17YGZhIGZhLWNhcmV0LSR7ISF0aGlzLnN0YXRlLmRlbGV0ZXBhbmVsT3BlbiA/ICd1cCcgOiAnZG93bid9YH0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8UGFuZWwgaWQ9XCJjb2xsYXBzaWJsZS1wYW5lbC1kZWxldGVcIiBleHBhbmRlZD17ISF0aGlzLnN0YXRlLmRlbGV0ZXBhbmVsT3Blbn0gb25Ub2dnbGU9eygpID0+IHsgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbC5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gY2FuY2VsIHlvdXIgc3Vic2NyaXB0aW9uIDxzdHJvbmc+YXQgYW55IHRpbWU8L3N0cm9uZz4uIE9uY2UgY2FuY2VsbGVkLCB5b3VyIGNyZWRpdCBjYXJkIHdpbGwgc3RvcCBiZWluZyBjaGFyZ2VkIGFuZCBhbGwgeW91ciBmaWxlcyB3aWxsIGJlIDx1PnNlY3VyZWx5IGRlc3Ryb3llZDwvdT4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaGlzIHByb2Nlc3MgY2Fubm90IGJlIHJldmVyc2VkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbiBjYXNlIHlvdSB3YW50IHRvIHJldHJpZXZlIHlvdXIgZmlsZXMsIHBsZWFzZSBjb250YWN0IGN1c3RvbWVyIHNlcnZpY2UgPGI+QkVGT1JFPC9iPiB5b3UgY2FuY2VsIHlvdXIgc3Vic2NyaXB0aW9uLiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGEgbm9taW5hbCBoYW5kbGluZyBmZWUgb2YgJDUwICgrIG1lZGlhIGFuZCBzaGlwcGluZyBjb3N0cyksIHdlIHdpbGwgPHU+c2hpcCB5b3VyIGRhdGEgdG8geW91PC91Pi4gPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1NpemU9XCJzbWFsbFwiIGJzU3R5bGU9XCJkYW5nZXJcIiBzdHlsZT17eyBtYXJnaW46IDIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZVdvcmtzcGFjZSgpLmRlbGV0ZVdvcmtzcGFjZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbCBteSBzdWJzY3JpcHRpb24gYW5kIGRlbGV0ZSBteSB3b3Jrc3BhY2UuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWwuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9QYW5lbD5cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgIHtjYXJkc09uRmlsZUFzeW5jICYmIChcbiAgICAgICAgICA8Q2FyZHNWaWV3TG9hZGVyIGFzeW5jUmVzdWx0PXtjYXJkc09uRmlsZUFzeW5jfSBwcm9tcHQ9J2xvYWRpbmcgcGF5bWVudCBzb3VyY2VzJz5cbiAgICAgICAgICAgIHtjYXJkc09uRmlsZUFzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT0nbWFpbkluZm8nIHN0eWxlPXt7IG1hcmdpblRvcDogMjAsIHBhZGRpbmc6IDMwIH19PlxuICAgICAgICAgICAgICAgIHtjYXJkc09uRmlsZUFzeW5jLnJlc3VsdC5jdXJyZW50Q2FyZHMgJiZcbiAgICAgICAgICAgICAgICAgIGNhcmRzT25GaWxlQXN5bmMucmVzdWx0LmN1cnJlbnRDYXJkcy5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzbU9mZnNldD17M30gc209ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgbm8gcGF5bWVudCBtZXRob2RzLiBQbGVhc2UgZW50ZXIgb25lIG5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT48L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgeyFlbnRlcmluZ05ld0NhcmQgJiZcbiAgICAgICAgICAgICAgICAgIGNhcmRzT25GaWxlQXN5bmMucmVzdWx0LmN1cnJlbnRDYXJkcyAmJlxuICAgICAgICAgICAgICAgICAgY2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuY3VycmVudENhcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+Q3VycmVudCBwYXltZW50IG1ldGhvZHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJywgbWF4V2lkdGg6IDYwMCwgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuY3VycmVudENhcmRzLm1hcCgoY2FyZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NhcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCB3aWR0aDogNDAsIHBhZGRpbmdUb3A6IDExIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCBmYS0yeCB0ZXh0LXByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0JyBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmlzRXhwaXJlZCA/ICd0ZXh0LWRhbmdlcicgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+IEV4cGlyeSBPbjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkLmV4cGlyYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWNhcmQuaXNEZWZhdWx0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPSdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5tYWtlRGVmYXVsdChjYXJkLmlkKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IG1ha2UgZGVmYXVsdCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luTGVmdDogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkucmVtb3ZlQ2FyZChjYXJkLmlkKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2FybmluZyc+IHJlbW92ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxlZnQnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDQ1LCBwYWRkaW5nVG9wOiA2IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Y2FyZC5icmFuZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuaXNEZWZhdWx0ICYmIDxzcGFuPihkZWZhdWx0KTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJyBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRpbmcgaW4ge2NhcmQubGFzdDR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA2MDAsIG1hcmdpbjogJ2F1dG8nLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJzU2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5zaG93Q2FyZEZvcm0odHJ1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlciBhbm90aGVyIGNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7ZW50ZXJpbmdOZXdDYXJkICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAzNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFN0cmlwZVByb3ZpZGVyIGFwaUtleT17Y2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuc3RyaXBlUHViS2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RWxlbWVudHM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRWxlbWVudHM+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RyaXBlUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ2FyZHNWaWV3TG9hZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluSW5mbyBjb250YWluZXInIHN0eWxlPXt7IG1hcmdpbjogJzIwcHggYXV0bycsIHBhZGRpbmc6IDMwIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICB7aW52b2ljZUxpc3RBc3luYyA/IChcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5NeSBpbnZvaWNlczwvaDQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnNTaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICBic1N0eWxlPSdpbmZvJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2hvd0ludm9pY2VzKCkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVklFVyBJTlZPSUNFU1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKjxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17bW9tZW50KGludkRhdGVSYW5nZS5zdGFydCl9IC8vIG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmogb3IgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUlkPVwiaW52X3N0YXJ0X2RhdGVfaWRcIiAvLyBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlPXttb21lbnQoaW52RGF0ZVJhbmdlLmVuZCl9IC8vIG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmogb3IgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGVJZD1cImludl9lbmRfZGF0ZV9pZFwiIC8vIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF0ZXNDaGFuZ2U9eyh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2hvd0ludm9pY2VzKHsgc3RhcnQ6IHN0YXJ0RGF0ZSwgZW5kOiBlbmREYXRlIH0pKX0gLy8gUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRJbnB1dD17dGhpcy5zdGF0ZS5mb2N1c2VkRGF0ZWlucHV0fSAvLyBQcm9wVHlwZXMub25lT2YoW1NUQVJUX0RBVEUsIEVORF9EQVRFXSkgb3IgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2U9e2ZvY3VzZWRJbnB1dCA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZERhdGVpbnB1dDogZm9jdXNlZElucHV0IH0pfSAvLyBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPdXRzaWRlUmFuZ2U9e2RheSA9PiAobW9tZW50KCkuZGlmZihkYXkpIDw9IDApfVxuICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpbnZvaWNlTGlzdEFzeW5jICYmIChcbiAgICAgICAgICAgICAgPEludm9pY2VzTG9hZGVyIGFzeW5jUmVzdWx0PXtpbnZvaWNlTGlzdEFzeW5jfSBwcm9tcHQ9J2xvYWRpbmcgaW52b2ljZXMnPlxuICAgICAgICAgICAgICAgIHtpbnZvaWNlTGlzdEFzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnMTBweCAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4zNSknIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmdMZWZ0OiAxNSB9fT5EYXRlPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZ0xlZnQ6IDUsIHBhZGRpbmdUb3A6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjUlJyB9fT5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlTGlzdEFzeW5jLnJlc3VsdC5tYXAoKGludm9pY2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2ludm9pY2UubnVtYmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZ0xlZnQ6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoaW52b2ljZS5kYXRlKS5mb3JtYXQoJ0wnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd0ZXh0LWNlbnRlciAnICsgaW52b2ljZS5pbnZvaWNlUGRmID8gJycgOiAndGV4dC13YXJuaW5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLmludm9pY2VQZGYgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdpbnZ0b29sdGlwJz5Eb3dubG9hZCBwcmludGFibGUgcGRmPC9Ub29sdGlwPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aW52b2ljZS5pbnZvaWNlUGRmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZmlsZS1wZGYtbycgYXJpYS1oaWRkZW49J3RydWUnPjwvaT57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLm51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ludm9pY2UubnVtYmVyfSAtIHBlbmRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2ludm9pY2UuZGVzY3JpcHRpb259PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmdMZWZ0OiA1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtpbnZvaWNlLnBhaWQgPyAnJyA6ICd0ZXh0LWRhbmdlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbnZvaWNlLnRvdGFsLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhaW52b2ljZS5lbmRpbmdCYWxhbmNlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZS5lbmRpbmdCYWxhbmNlIDwgMCA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtZGFuZ2VyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPmJhbGFuY2UgPC9zcGFuPiRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KC0xICogaW52b2ljZS5lbmRpbmdCYWxhbmNlKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ludm9pY2VzTG9hZGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwge30+KChzdGF0ZSkgPT4ge1xuICByZXR1cm4gZW5zdXJlQmlsbGluZygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG59KShCaWxsaW5nVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2luZGV4LnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHNcblx0QXRvbWljcyxcblx0U2hhcmVkQXJyYXlCdWZmZXIsXG4qL1xuXG52YXIgdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG5cbnZhciBUaHJvd1R5cGVFcnJvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcblx0PyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7IH0oKSlcblx0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoKTsgfTtcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJCAlQXJyYXklJzogQXJyYXksXG5cdCckICVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCckICVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFycmF5UHJvdG90eXBlJSc6IEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyQgJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyQgJUFycmF5UHJvdG9fa2V5cyUnOiBBcnJheS5wcm90b3R5cGUua2V5cyxcblx0JyQgJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCckICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNGdW5jdGlvbiUnOiBhc3luY0Z1bmN0aW9uLFxuXHQnJCAlQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJCAlQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJCAlQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyQgJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyQgJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCckICVEYXRlJSc6IERhdGUsXG5cdCckICVEYXRlUHJvdG90eXBlJSc6IERhdGUucHJvdG90eXBlLFxuXHQnJCAlZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyQgJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCckICVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJCAlZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJUVycm9yJSc6IEVycm9yLFxuXHQnJCAlRXJyb3JQcm90b3R5cGUlJzogRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyQgJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCckICVFdmFsRXJyb3JQcm90b3R5cGUlJzogRXZhbEVycm9yLnByb3RvdHlwZSxcblx0JyQgJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyQgJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCckICVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCckICVGdW5jdGlvblByb3RvdHlwZSUnOiBGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCckICVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCckICVHZW5lcmF0b3JQcm90b3R5cGUlJzogZ2VuZXJhdG9yRnVuY3Rpb24gPyBnZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCckICVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJCAlSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJCAlSW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJCAlaXNOYU4lJzogaXNOYU4sXG5cdCckICVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCckICVKU09OJSc6IEpTT04sXG5cdCckICVKU09OUGFyc2UlJzogSlNPTi5wYXJzZSxcblx0JyQgJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyQgJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJCAlTWF0aCUnOiBNYXRoLFxuXHQnJCAlTnVtYmVyJSc6IE51bWJlcixcblx0JyQgJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJCAlT2JqZWN0JSc6IE9iamVjdCxcblx0JyQgJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJCAlT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyQgJU9ialByb3RvX3ZhbHVlT2YlJzogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLFxuXHQnJCAlcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJCAlcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCckICVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCckICVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJCAlUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyQgJVByb21pc2VfYWxsJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UuYWxsLFxuXHQnJCAlUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCckICVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJCAlUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJCAlUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJCAlUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJCAlUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyQgJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJCAlU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJCAlU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlU3RyaW5nJSc6IFN0cmluZyxcblx0JyQgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlU3RyaW5nUHJvdG90eXBlJSc6IFN0cmluZy5wcm90b3R5cGUsXG5cdCckICVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bnRheEVycm9yJSc6IFN5bnRheEVycm9yLFxuXHQnJCAlU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCckICVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCckICVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVR5cGVFcnJvciUnOiBUeXBlRXJyb3IsXG5cdCckICVUeXBlRXJyb3JQcm90b3R5cGUlJzogVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyQgJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCckICVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJCAlVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyQgJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyQgJVVSSUVycm9yUHJvdG90eXBlJSc6IFVSSUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyQgJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCckICVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQsXG5cdCckICVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBrZXkgPSAnJCAnICsgbmFtZTtcblx0aWYgKCEoa2V5IGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW2tleV0gPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cdHJldHVybiBJTlRSSU5TSUNTW2tleV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qc1xuLy8gbW9kdWxlIGlkID0gMzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRGdW5jdGlvbiA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uJScpO1xudmFyICRhcHBseSA9ICRGdW5jdGlvbi5hcHBseTtcbnZhciAkY2FsbCA9ICRGdW5jdGlvbi5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKCkge1xuXHRyZXR1cm4gYmluZC5hcHBseSgkY2FsbCwgYXJndW1lbnRzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmFwcGx5ID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gYmluZC5hcHBseSgkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDM4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lbGVtZW50Q29udGV4dFR5cGVzID0gZXhwb3J0cy5pbmplY3RDb250ZXh0VHlwZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfUHJvdmlkZXIgPSByZXF1aXJlKCcuL1Byb3ZpZGVyJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGluamVjdENvbnRleHRUeXBlcyA9IGV4cG9ydHMuaW5qZWN0Q29udGV4dFR5cGVzID0ge1xuICBnZXRSZWdpc3RlcmVkRWxlbWVudHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG52YXIgZWxlbWVudENvbnRleHRUeXBlcyA9IGV4cG9ydHMuZWxlbWVudENvbnRleHRUeXBlcyA9IHtcbiAgYWRkRWxlbWVudHNMb2FkTGlzdGVuZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICByZWdpc3RlckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB1bnJlZ2lzdGVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbnZhciBFbGVtZW50cyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhFbGVtZW50cywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRWxlbWVudHMocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWxlbWVudHMpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVSZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW1wbGllZFRva2VuVHlwZSwgaW1wbGllZFNvdXJjZVR5cGUpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWdpc3RlcmVkRWxlbWVudHM6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocHJldlN0YXRlLnJlZ2lzdGVyZWRFbGVtZW50cyksIFtfZXh0ZW5kcyh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICAgICAgfSwgaW1wbGllZFRva2VuVHlwZSA/IHsgaW1wbGllZFRva2VuVHlwZTogaW1wbGllZFRva2VuVHlwZSB9IDoge30sIGltcGxpZWRTb3VyY2VUeXBlID8geyBpbXBsaWVkU291cmNlVHlwZTogaW1wbGllZFNvdXJjZVR5cGUgfSA6IHt9KV0pXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVW5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWdpc3RlcmVkRWxlbWVudHM6IHByZXZTdGF0ZS5yZWdpc3RlcmVkRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICE9PSBlbDtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgcmVnaXN0ZXJlZEVsZW1lbnRzOiBbXVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgRWxlbWVudHMucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRFbGVtZW50c0xvYWRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRWxlbWVudHNMb2FkTGlzdGVuZXIoZm4pIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBleGlzdGluZyBlbGVtZW50cyBpbnN0YW5jZSBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lLlxuICAgICAgICBpZiAoX3RoaXMyLl9lbGVtZW50cykge1xuICAgICAgICAgIGZuKF90aGlzMi5fZWxlbWVudHMpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJ10pO1xuXG4gICAgICAgIGlmIChfdGhpczIuY29udGV4dC50YWcgPT09ICdzeW5jJykge1xuICAgICAgICAgIF90aGlzMi5fZWxlbWVudHMgPSBfdGhpczIuY29udGV4dC5zdHJpcGUuZWxlbWVudHMob3B0aW9ucyk7XG4gICAgICAgICAgZm4oX3RoaXMyLl9lbGVtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmNvbnRleHQuYWRkU3RyaXBlTG9hZExpc3RlbmVyKGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczIuX2VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGZuKF90aGlzMi5fZWxlbWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3RoaXMyLl9lbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgZm4oX3RoaXMyLl9lbGVtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWdpc3RlckVsZW1lbnQ6IHRoaXMuaGFuZGxlUmVnaXN0ZXJFbGVtZW50LFxuICAgICAgdW5yZWdpc3RlckVsZW1lbnQ6IHRoaXMuaGFuZGxlVW5yZWdpc3RlckVsZW1lbnQsXG4gICAgICBnZXRSZWdpc3RlcmVkRWxlbWVudHM6IGZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5zdGF0ZS5yZWdpc3RlcmVkRWxlbWVudHM7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBFbGVtZW50cy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gRWxlbWVudHM7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5FbGVtZW50cy5jaGlsZENvbnRleHRUeXBlcyA9IF9leHRlbmRzKHt9LCBpbmplY3RDb250ZXh0VHlwZXMsIGVsZW1lbnRDb250ZXh0VHlwZXMpO1xuRWxlbWVudHMuY29udGV4dFR5cGVzID0gX1Byb3ZpZGVyLnByb3ZpZGVyQ29udGV4dFR5cGVzO1xuRWxlbWVudHMuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVsZW1lbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDM5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL34vcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woJ2ZvbycpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIG9yaWdEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKHZhciBfIGluIG9iaikgeyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd1VudXNlZFZhcmlhYmxlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBvcmlnRGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyICRhc3NpZ24gPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QlJykuYXNzaWduO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZiAoJGFzc2lnbikge1xuXHRcdHJldHVybiAkYXNzaWduKHRhcmdldCwgc291cmNlKTtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcyhzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3JpZ1N5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgaGFzU3ltYm9sU2hhbSA9IHJlcXVpcmUoJy4vc2hhbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNOYXRpdmVTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2woJ2ZvbycpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2woJ2JhcicpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRyZXR1cm4gaGFzU3ltYm9sU2hhbSgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMtc3ltYm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3NcXGIvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGdW5jdGlvbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChmblN0cik7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uVG9TdHIodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvdmlkZXJDb250ZXh0VHlwZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBUT0RPKGpleikgJ3N5bmMnIGFuZCAnYXN5bmMnIGFyZSBiYWQgdGFnIG5hbWVzLlxuLy8gVE9ETyhqZXopIFdoYXQgaWYgcmVkdXggYWxzbyB1c2VzIHRoaXMuY29udGV4dC50YWc/XG52YXIgcHJvdmlkZXJDb250ZXh0VHlwZXMgPSBleHBvcnRzLnByb3ZpZGVyQ29udGV4dFR5cGVzID0ge1xuICB0YWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0cmlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGFkZFN0cmlwZUxvYWRMaXN0ZW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG52YXIgZ2V0T3JDcmVhdGVTdHJpcGUgPSBmdW5jdGlvbiBnZXRPckNyZWF0ZVN0cmlwZShhcGlLZXksIG9wdGlvbnMpIHtcbiAgLyoqXG4gICAqIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBtZWFudCB0byBiZSBhIGdlbmVyaWMgbWVtb2l6YXRpb24gc29sdXRpb24uXG4gICAqIFRoaXMgaXMgc3BlY2lmaWNhbGx5IGEgc29sdXRpb24gZm9yIGBTdHJpcGVQcm92aWRlcmBzIGJlaW5nIGluaXRpYWxpemVkXG4gICAqIGFuZCBkZXN0cm95ZWQgcmVndWxhcmx5ICh3aXRoIHRoZSBzYW1lIHNldCBvZiBwcm9wcykgd2hlbiB1c2VycyBvbmx5XG4gICAqIHVzZSBgU3RyaXBlUHJvdmlkZXJgIGZvciB0aGUgc3VidHJlZSB0aGF0IGNvbnRhaW5zIHRoZWlyIGNoZWNrb3V0IGZvcm0uXG4gICAqL1xuICB3aW5kb3cuU3RyaXBlLl9fY2FjaGVkSW5zdGFuY2VzID0gd2luZG93LlN0cmlwZS5fX2NhY2hlZEluc3RhbmNlcyB8fCB7fTtcbiAgdmFyIGNhY2hlS2V5ID0gJ2tleT0nICsgYXBpS2V5ICsgJyBvcHRpb25zPScgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcblxuICB2YXIgc3RyaXBlID0gd2luZG93LlN0cmlwZS5fX2NhY2hlZEluc3RhbmNlc1tjYWNoZUtleV0gfHwgd2luZG93LlN0cmlwZShhcGlLZXksIG9wdGlvbnMpO1xuICB3aW5kb3cuU3RyaXBlLl9fY2FjaGVkSW5zdGFuY2VzW2NhY2hlS2V5XSA9IHN0cmlwZTtcblxuICByZXR1cm4gc3RyaXBlO1xufTtcblxudmFyIGVuc3VyZVN0cmlwZVNoYXBlID0gZnVuY3Rpb24gZW5zdXJlU3RyaXBlU2hhcGUoc3RyaXBlKSB7XG4gIGlmIChzdHJpcGUgJiYgc3RyaXBlLmVsZW1lbnRzICYmIHN0cmlwZS5jcmVhdGVTb3VyY2UgJiYgc3RyaXBlLmNyZWF0ZVRva2VuKSB7XG4gICAgcmV0dXJuIHN0cmlwZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcGFzcyBhIHZhbGlkIFN0cmlwZSBvYmplY3QgdG8gU3RyaXBlUHJvdmlkZXIuIFlvdSBjYW4gb2J0YWluIGEgU3RyaXBlIG9iamVjdCBieSBjYWxsaW5nICdTdHJpcGUoLi4uKScgd2l0aCB5b3VyIHB1Ymxpc2hhYmxlIGtleS5cIik7XG4gIH1cbn07XG5cbnZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgLy8gb24gdGhlIG90aGVyIGhhbmQ6IGNoaWxkQ29udGV4dFR5cGVzIGlzICpyZXF1aXJlZCogdG8gdXNlIGNvbnRleHQuXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgaWYgKF90aGlzLnByb3BzLmFwaUtleSAmJiBfdGhpcy5wcm9wcy5zdHJpcGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIGVpdGhlciAnYXBpS2V5JyBvciAnc3RyaXBlJyB0byBTdHJpcGVQcm92aWRlciwgbm90IGJvdGguXCIpO1xuICAgIH0gZWxzZSBpZiAoX3RoaXMucHJvcHMuYXBpS2V5KSB7XG4gICAgICBpZiAoIXdpbmRvdy5TdHJpcGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGxvYWQgU3RyaXBlLmpzIChodHRwczovL2pzLnN0cmlwZS5jb20vdjMvKSBvbiB0aGlzIHBhZ2UgdG8gdXNlIHJlYWN0LXN0cmlwZS1lbGVtZW50cy4gSWYgU3RyaXBlLmpzIGlzbid0IGF2YWlsYWJsZSB5ZXQgKGl0J3MgbG9hZGluZyBhc3luY2hyb25vdXNseSwgb3IgeW91J3JlIHVzaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZyksIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RyaXBlL3JlYWN0LXN0cmlwZS1lbGVtZW50cyNhZHZhbmNlZC1pbnRlZ3JhdGlvbnNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIF9hcGlLZXkgPSBfdGhpcyRwcm9wcy5hcGlLZXksXG4gICAgICAgICAgICBfY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIF9zdHJpcGUgPSBfdGhpcyRwcm9wcy5zdHJpcGUsXG4gICAgICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzLCBbJ2FwaUtleScsICdjaGlsZHJlbicsICdzdHJpcGUnXSk7XG5cbiAgICAgICAgX3RoaXMuX21ldGEgPSB7XG4gICAgICAgICAgdGFnOiAnc3luYycsXG4gICAgICAgICAgc3RyaXBlOiBnZXRPckNyZWF0ZVN0cmlwZShfYXBpS2V5LCBvcHRpb25zKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3RoaXMucHJvcHMuc3RyaXBlKSB7XG4gICAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSBzdHJpcGUgaW5zdGFuY2UgKGluIHRoZSBjb25zdHJ1Y3RvciksIHdlIGNhbiBiZWhhdmUgc3luY2hyb25vdXNseS5cbiAgICAgIF90aGlzLl9tZXRhID0ge1xuICAgICAgICB0YWc6ICdzeW5jJyxcbiAgICAgICAgc3RyaXBlOiBlbnN1cmVTdHJpcGVTaGFwZShfdGhpcy5wcm9wcy5zdHJpcGUpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoX3RoaXMucHJvcHMuc3RyaXBlID09PSBudWxsKSB7XG4gICAgICBfdGhpcy5fbWV0YSA9IHtcbiAgICAgICAgdGFnOiAnYXN5bmMnLFxuICAgICAgICBzdHJpcGU6IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIGVpdGhlciAnYXBpS2V5JyBvciAnc3RyaXBlJyB0byBTdHJpcGVQcm92aWRlci4gSWYgeW91J3JlIHVzaW5nICdzdHJpcGUnIGJ1dCBkb24ndCBoYXZlIGEgU3RyaXBlIGluc3RhbmNlIHlldCwgcGFzcyAnbnVsbCcgZXhwbGljaXRseS5cIik7XG4gICAgfVxuXG4gICAgX3RoaXMuX2RpZFdhcm4gPSBmYWxzZTtcbiAgICBfdGhpcy5fZGlkV2FrZVVwTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgX3RoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvLyBFdmVuIHRob3VnaCB3ZSdyZSB1c2luZyBmbG93LCBhbHNvIHVzZSBQcm9wVHlwZXMgc28gd2UgY2FuIHRha2UgYWR2YW50YWdlIG9mIGRldmVsb3BlciB3YXJuaW5ncy5cblxuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBnZXRDaGlsZENvbnRleHQgaXMgcnVuIGFmdGVyIHRoZSBjb25zdHJ1Y3Rvciwgc28gd2UgV0lMTCBoYXZlIGFjY2VzcyB0b1xuICAgIC8vIHRoZSBpbml0aWFsIHN0YXRlLlxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgY29udGV4dCBkb2Vzbid0IHVwZGF0ZSBpbiByZXNwbnNlIHRvIHN0YXRlIGNoYW5nZXMgbGlrZSB5b3VcbiAgICAvLyBtaWdodCBleHBlY3Q6IGNvbnRleHQgaXMgcHVsbGVkIGJ5IHRoZSBjaGlsZCwgbm90IHB1c2hlZCBieSB0aGUgcGFyZW50LlxuICAgIGlmICh0aGlzLl9tZXRhLnRhZyA9PT0gJ3N5bmMnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWc6ICdzeW5jJyxcbiAgICAgICAgc3RyaXBlOiB0aGlzLl9tZXRhLnN0cmlwZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFnOiAnYXN5bmMnLFxuICAgICAgICBhZGRTdHJpcGVMb2FkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0cmlwZUxvYWRMaXN0ZW5lcihmbikge1xuICAgICAgICAgIGlmIChfdGhpczIuX21ldGEuc3RyaXBlKSB7XG4gICAgICAgICAgICBmbihfdGhpczIuX21ldGEuc3RyaXBlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMyLl9saXN0ZW5lcnMucHVzaChmbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGFwaUtleUNoYW5nZWQgPSB0aGlzLnByb3BzLmFwaUtleSAmJiBuZXh0UHJvcHMuYXBpS2V5ICYmIHRoaXMucHJvcHMuYXBpS2V5ICE9PSBuZXh0UHJvcHMuYXBpS2V5O1xuXG4gICAgdmFyIHN0cmlwZUluc3RhbmNlQ2hhbmdlZCA9IHRoaXMucHJvcHMuc3RyaXBlICYmIG5leHRQcm9wcy5zdHJpcGUgJiYgdGhpcy5wcm9wcy5zdHJpcGUgIT09IG5leHRQcm9wcy5zdHJpcGU7XG4gICAgaWYgKCF0aGlzLl9kaWRXYXJuICYmIChhcGlLZXlDaGFuZ2VkIHx8IHN0cmlwZUluc3RhbmNlQ2hhbmdlZCkgJiYgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUuZXJyb3IpIHtcbiAgICAgIHRoaXMuX2RpZFdhcm4gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0cmlwZVByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgY2hhbmdpbmcgdGhlIGFwaUtleSBwYXJhbWV0ZXIuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9kaWRXYWtlVXBMaXN0ZW5lcnMgJiYgbmV4dFByb3BzLnN0cmlwZSkge1xuICAgICAgLy8gV2FrZSB1cCB0aGUgbGlzdGVuZXJzIGlmIHdlJ3ZlIGZpbmFsbHkgYmVlbiBnaXZlbiBhIFN0cmlwZVNoYXBlXG4gICAgICB0aGlzLl9kaWRXYWtlVXBMaXN0ZW5lcnMgPSB0cnVlO1xuICAgICAgdmFyIF9zdHJpcGUyID0gZW5zdXJlU3RyaXBlU2hhcGUobmV4dFByb3BzLnN0cmlwZSk7XG4gICAgICB0aGlzLl9tZXRhLnN0cmlwZSA9IF9zdHJpcGUyO1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGZuKF9zdHJpcGUyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gUHJvdmlkZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Qcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGFwaUtleTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8vIFByb3BUeXBlcy5vYmplY3QgaXMgdGhlIG9ubHkgd2F5IHdlIGNhbiBhY2NlcHQgYSBTdHJpcGUgaW5zdGFuY2VcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIHN0cmlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5Qcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IHByb3ZpZGVyQ29udGV4dFR5cGVzO1xuUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBhcGlLZXk6IHVuZGVmaW5lZCxcbiAgc3RyaXBlOiB1bmRlZmluZWQsXG4gIGNoaWxkcmVuOiBudWxsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvdmlkZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9Qcm92aWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczIwMTcnKTtcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCAoTWF0aC5wb3coMiwgNTMpIC0gMSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zLCBtYXgtc3RhdGVtZW50c1xudmFyIEZsYXR0ZW5JbnRvQXJyYXkgPSBmdW5jdGlvbiBGbGF0dGVuSW50b0FycmF5KHRhcmdldCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCkge1xuXHR2YXIgdGFyZ2V0SW5kZXggPSBzdGFydDtcblx0dmFyIHNvdXJjZUluZGV4ID0gMDtcblxuXHQvKlxuXHR2YXIgbWFwcGVyRnVuY3Rpb247XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNSkge1xuXHRcdG1hcHBlckZ1bmN0aW9uID0gYXJndW1lbnRzWzVdO1xuXHR9XG5cdCovXG5cblx0d2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG5cdFx0dmFyIFAgPSBFUy5Ub1N0cmluZyhzb3VyY2VJbmRleCk7XG5cdFx0dmFyIGV4aXN0cyA9IEVTLkhhc1Byb3BlcnR5KHNvdXJjZSwgUCk7XG5cdFx0aWYgKGV4aXN0cykge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBFUy5HZXQoc291cmNlLCBQKTtcblx0XHRcdC8qXG5cdFx0XHRpZiAodHlwZW9mIG1hcHBlckZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSA2KSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogdGhpc0FyZyBpcyByZXF1aXJlZCB3aGVuIG1hcHBlckZ1bmN0aW9uIGlzIHByb3ZpZGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudCA9IEVTLkNhbGwobWFwcGVyRnVuY3Rpb24sIGFyZ3VtZW50c1s2XSwgW2VsZW1lbnQsIHNvdXJjZUluZGV4LCBzb3VyY2VdKTtcblx0XHRcdH1cblx0XHRcdCovXG5cdFx0XHR2YXIgc2hvdWxkRmxhdHRlbiA9IGZhbHNlO1xuXHRcdFx0aWYgKGRlcHRoID4gMCkge1xuXHRcdFx0XHRzaG91bGRGbGF0dGVuID0gRVMuSXNBcnJheShlbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRGbGF0dGVuKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50TGVuID0gRVMuVG9MZW5ndGgoRVMuR2V0KGVsZW1lbnQsICdsZW5ndGgnKSk7XG5cdFx0XHRcdHRhcmdldEluZGV4ID0gRmxhdHRlbkludG9BcnJheSh0YXJnZXQsIGVsZW1lbnQsIGVsZW1lbnRMZW4sIHRhcmdldEluZGV4LCBkZXB0aCAtIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRhcmdldEluZGV4ID49IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCB0b28gbGFyZ2UnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRFUy5DcmVhdGVEYXRhUHJvcGVydHlPclRocm93KHRhcmdldCwgRVMuVG9TdHJpbmcodGFyZ2V0SW5kZXgpLCBlbGVtZW50KTtcblx0XHRcdFx0dGFyZ2V0SW5kZXggKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c291cmNlSW5kZXggKz0gMTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXRJbmRleDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxhdCgpIHtcblx0dmFyIE8gPSBFUy5Ub09iamVjdCh0aGlzKTtcblx0dmFyIHNvdXJjZUxlbiA9IEVTLlRvTGVuZ3RoKEVTLkdldChPLCAnbGVuZ3RoJykpO1xuXG5cdHZhciBkZXB0aE51bSA9IDE7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGRlcHRoTnVtID0gRVMuVG9JbnRlZ2VyKGFyZ3VtZW50c1swXSk7XG5cdH1cblxuXHR2YXIgQSA9IEVTLkFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcblx0RmxhdHRlbkludG9BcnJheShBLCBPLCBzb3VyY2VMZW4sIDAsIGRlcHRoTnVtKTtcblx0cmV0dXJuIEE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5mbGF0L2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmxhdCB8fCBpbXBsZW1lbnRhdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZsYXQvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIHByZWRpY2F0ZXMgPSB7XG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuXHQnUHJvcGVydHkgRGVzY3JpcHRvcic6IGZ1bmN0aW9uIGlzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG5cdFx0aWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhbGxvd2VkID0ge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0dldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1NldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuXHRcdHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG5cdFx0aWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2VydFJlY29yZChFUywgcmVjb3JkVHlwZSwgYXJndW1lbnROYW1lLCB2YWx1ZSkge1xuXHR2YXIgcHJlZGljYXRlID0gcHJlZGljYXRlc1tyZWNvcmRUeXBlXTtcblx0aWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCd1bmtub3duIHJlY29yZCB0eXBlOiAnICsgcmVjb3JkVHlwZSk7XG5cdH1cblx0aWYgKCFwcmVkaWNhdGUoRVMsIHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKGFyZ3VtZW50TmFtZSArICcgbXVzdCBiZSBhICcgKyByZWNvcmRUeXBlKTtcblx0fVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2VydFJlY29yZC5qc1xuLy8gbW9kdWxlIGlkID0gNTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBldmVyeShhcnJheSwgcHJlZGljYXRlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoIXByZWRpY2F0ZShhcnJheVtpXSwgaSwgYXJyYXkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2V2ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjYWxsYmFjayhhcnJheVtpXSwgaSwgYXJyYXkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbGxiYWNrLXJldHVyblxuXHR9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvZm9yRWFjaC5qc1xuLy8gbW9kdWxlIGlkID0gNTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTihhKSB7XG5cdHJldHVybiBhICE9PSBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG5cdGlmIChFUy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgYWxsb3dlZCA9IHtcblx0XHQnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG5cdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHQnW1tHZXRdXSc6IHRydWUsXG5cdFx0J1tbU2V0XV0nOiB0cnVlLFxuXHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdCdbW1dyaXRhYmxlXV0nOiB0cnVlXG5cdH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gRGVzYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpZiAoRVMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSAmJiBFUy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQcm9wZXJ0eSBEZXNjcmlwdG9ycyBtYXkgbm90IGJlIGJvdGggYWNjZXNzb3IgYW5kIGRhdGEgZGVzY3JpcHRvcnMnKTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gNTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc2hhbGxvd0VxdWFsID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKGEsIGIpIHtcbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuXG4gIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiW2tleV0gPT09IGFba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaGFsbG93RXF1YWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIGJvdW5kRmxhdCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBwb2x5ZmlsbCk7XG5cbmRlZmluZShib3VuZEZsYXQsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmxhdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUZsYXQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShcblx0XHRBcnJheS5wcm90b3R5cGUsXG5cdFx0eyBmbGF0OiBwb2x5ZmlsbCB9LFxuXHRcdHsgZmxhdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZsYXQgIT09IHBvbHlmaWxsOyB9IH1cblx0KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSA1Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBlbnN1cmVCaWxsaW5nLCB7IFBsYW5NYXAgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBJQXN5bmNSZXN1bHQgfSBmcm9tICdiYXNlL2FzeW5jU3RhdGVNaWRkbGV3YXJlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1N1YnNjcmlwdGlvbk1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmNvbnN0IFBsYW5zTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxQbGFuTWFwPigpO1xuY29uc3QgU3Vic2NyaXB0aW9uTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxTdWJzY3JpcHRpb25Nb2RlbD4oKTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgcmVhZG9ubHkgYXZhaWxhYmxlUGxhbnNBc3luYzogSUFzeW5jUmVzdWx0PFBsYW5NYXA+O1xuICByZWFkb25seSBzdWJzY3JpcHRpb25Bc3luYzogSUFzeW5jUmVzdWx0PFN1YnNjcmlwdGlvbk1vZGVsPjtcbn07XG5cbmNsYXNzIFVwZGF0ZVN1YnNjcmlwdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9LCB7fT4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5Jbml0QmlsbGluZ1ZpZXcoKSk7XG4gICAgZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLmxvYWRQbGFucygpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBzdWJzY3JpcHRpb25Bc3luYywgYXZhaWxhYmxlUGxhbnNBc3luYyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdWJzY3JpYmVkUGxhbklkID0gbnVsbDtcbiAgICBpZiAoc3Vic2NyaXB0aW9uQXN5bmMgJiYgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0KSB7XG4gICAgICBjb25zdCByZXZQbGFuID0gXy5maW5kKFxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyxcbiAgICAgICAgKGRldGFpbCkgPT4gJ3JldlNlYXRzJyA9PSBkZXRhaWwuZm9yUHJvZHVjdCxcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXZQbGFuKSBzdWJzY3JpYmVkUGxhbklkID0gcmV2UGxhbi5wbGFuSWQ7XG4gICAgfVxuXG4gICAgbGV0IHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LWluZm8nO1xuICAgIGlmIChzdWJzY3JpcHRpb25Bc3luYyAmJiBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQpIHtcbiAgICAgIGlmICgndHJpYWxpbmcnID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpIHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LXdhcm5pbmcnO1xuICAgICAgZWxzZSBpZiAoJ2FjdGl2ZScgIT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cylcbiAgICAgICAgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtZGFuZ2VyJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5JbmZvIHRleHQtY2VudGVyIGNvbnRhaW5lcic+XG4gICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYyAmJiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvbkxvYWRlciBhc3luY1Jlc3VsdD17c3Vic2NyaXB0aW9uQXN5bmN9IHByb21wdD0nbG9hZGluZyBzdWJzY3JpcHRpb24gZGV0YWlscyc+XG4gICAgICAgICAgICB7YXZhaWxhYmxlUGxhbnNBc3luYyAmJiAoXG4gICAgICAgICAgICAgIDxQbGFuc0xvYWRlciBhc3luY1Jlc3VsdD17YXZhaWxhYmxlUGxhbnNBc3luY30gcHJvbXB0PSdsb2FkaW5nIGF2YWlsYWJsZSBwbGFucyc+XG4gICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJiBhdmFpbGFibGVQbGFuc0FzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsoYXZhaWxhYmxlUGxhbnNBc3luYy5yZXN1bHRbJ3JldlNlYXRzJ10gfHwgW10pLm1hcCgocGxhbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYW4uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXByaW1hcnknIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwbGFuLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDE5MCwgbWFyZ2luOiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy13YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogLTEwLCBwYWRkaW5nOiAnMTBweCA1cHgnLCBoZWlnaHQ6IDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz57cGxhbi5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz57cGxhbi5wcmljaW5nfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYW4uaWQgPT0gc3Vic2NyaWJlZFBsYW5JZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzID09ICd0cmlhbGluZycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC50cmlhbERheXNMZWZ0fSBkYXkocykgb2YgZnJlZSB0cmlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkudXBkYXRlUmV2U3Vic2NyaXB0aW9uKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2VlcCBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29taW5nIHNvb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCwgcGFkZGluZzogJzIwcHggM3B4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctaW5mbyB0ZXh0LWxlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBsYW4uZGlzcGxheSB8fCBbXSkubWFwKChkdGV4dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtwbGFuLmlkfV90ZXh0XyR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZHRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BsYW5zTG9hZGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N1YnNjcmlwdGlvbkxvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCB7fT4oKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgc3Vic2NyaXB0aW9uQXN5bmMsIGF2YWlsYWJsZVBsYW5zQXN5bmMgfSA9IGVuc3VyZUJpbGxpbmcoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiB7IHN1YnNjcmlwdGlvbkFzeW5jLCBhdmFpbGFibGVQbGFuc0FzeW5jIH07XG59KShVcGRhdGVTdWJzY3JpcHRpb25WaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2JpbGxpbmcvdXBkYXRlLnRzeCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNicpO1xudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFJhbmdlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVSYW5nZUVycm9yJScpO1xudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xudmFyICRBcnJheVByb3RvdHlwZSA9ICRBcnJheS5wcm90b3R5cGU7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICROdW1iZXIgPSBHZXRJbnRyaW5zaWMoJyVOdW1iZXIlJyk7XG52YXIgJFN5bWJvbCA9IEdldEludHJpbnNpYygnJVN5bWJvbCUnLCB0cnVlKTtcbnZhciAkUmVnRXhwID0gR2V0SW50cmluc2ljKCclUmVnRXhwJScpO1xudmFyICRQcm9taXNlID0gR2V0SW50cmluc2ljKCclUHJvbWlzZSUnLCB0cnVlKTtcbnZhciAkcHJldmVudEV4dGVuc2lvbnMgPSAkT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gTWF0aC5wb3coMiwgMzIpIC0gMTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gJE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JFYWNoJyk7XG52YXIgZXZlcnkgPSByZXF1aXJlKCcuL2hlbHBlcnMvZXZlcnknKTtcbnZhciBpc1NhbWVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yJyk7XG52YXIgaXNQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcm9wZXJ0eURlc2NyaXB0b3InKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9jYWxsQmluZCcpO1xudmFyICRQcm9taXNlVGhlbiA9ICRQcm9taXNlID8gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclUHJvbWlzZVByb3RvX3RoZW4lJykpIDogbnVsbDtcbnZhciBhcnJheVNsaWNlID0gY2FsbEJpbmQoJEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBiWzAxXSskL2kpO1xudmFyIGlzT2N0YWwgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciBpc0RpZ2l0ID0gY2FsbEJpbmQoJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL15bMC05XSQvKTtcbnZhciByZWdleEV4ZWMgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3ICRSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBub25XU3JlZ2V4KTtcbnZhciBpbnZhbGlkSGV4TGl0ZXJhbCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG52YXIgJGNoYXJDb2RlQXQgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5jaGFyQ29kZUF0KTtcbnZhciAkaXNFbnVtZXJhYmxlID0gY2FsbEJpbmQoJE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpO1xuXG52YXIgdG9TdHIgPSBjYWxsQmluZCgkT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciAkTnVtYmVyVmFsdWVPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnJU51bWJlclByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkQm9vbGVhblZhbHVlT2YgPSBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVCb29sZWFuUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRTdHJpbmdWYWx1ZU9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclU3RyaW5nUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICREYXRlVmFsdWVPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnJURhdGVQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJFN5bWJvbFRvU3RyaW5nID0gaGFzU3ltYm9scyAmJiBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVTeW1ib2xQcm90b3R5cGUlJykudG9TdHJpbmcpO1xuXG52YXIgJGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciAkYWJzID0gTWF0aC5hYnM7XG5cbnZhciAkT2JqZWN0Q3JlYXRlID0gJE9iamVjdC5jcmVhdGU7XG52YXIgJGdPUEQgPSAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciAkZ09QTiA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciAkZ09QUyA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyICRpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyICRzZXRQcm90byA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90bywgbm8tbmVnYXRlZC1jb25kaXRpb25cblx0W10uX19wcm90b19fICE9PSBBcnJheS5wcm90b3R5cGVcblx0XHQ/IG51bGxcblx0XHQ6IGZ1bmN0aW9uIChPLCBwcm90bykge1xuXHRcdFx0Ty5fX3Byb3RvX18gPSBwcm90bzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXHRcdFx0cmV0dXJuIE87XG5cdFx0fVxuKTtcblxudmFyIERlZmluZU93blByb3BlcnR5ID0gZnVuY3Rpb24gRGVmaW5lT3duUHJvcGVydHkoRVMsIE8sIFAsIGRlc2MpIHtcblx0aWYgKCEkZGVmaW5lUHJvcGVydHkpIHtcblx0XHRpZiAoIUVTLklzRGF0YURlc2NyaXB0b3IoZGVzYykpIHtcblx0XHRcdC8vIEVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMvc2V0dGVyc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWRlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSB8fCAhZGVzY1snW1tXcml0YWJsZV1dJ10pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBmYWxsYmFjayBmb3IgRVMzXG5cdFx0aWYgKFAgaW4gTyAmJiAkaXNFbnVtZXJhYmxlKE8sIFApICE9PSAhIWRlc2NbJ1tbRW51bWVyYWJsZV1dJ10pIHtcblx0XHRcdC8vIGEgbm9uLWVudW1lcmFibGUgZXhpc3RpbmcgcHJvcGVydHlcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBwcm9wZXJ0eSBkb2VzIG5vdCBleGlzdCBhdCBhbGwsIG9yIGV4aXN0cyBidXQgaXMgZW51bWVyYWJsZVxuXHRcdHZhciBWID0gZGVzY1snW1tWYWx1ZV1dJ107XG5cdFx0T1tQXSA9IFY7IC8vIHdpbGwgdXNlIFtbRGVmaW5lXV1cblx0XHRyZXR1cm4gRVMuU2FtZVZhbHVlKE9bUF0sIFYpO1xuXHR9XG5cdCRkZWZpbmVQcm9wZXJ0eShPLCBQLCBFUy5Gcm9tUHJvcGVydHlEZXNjcmlwdG9yKGRlc2MpKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbnZhciB3cyA9IFtcblx0J1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcblx0J1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4Jyxcblx0J1xcdTIwMjlcXHVGRUZGJ1xuXS5qb2luKCcnKTtcbnZhciB0cmltUmVnZXggPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xudmFyICRyZXBsYWNlID0gY2FsbEJpbmQoJFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gJHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihpbnNwZWN0KEYpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkTnVtYmVyKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoaXNCaW5hcnkodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNPY3RhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgOCkpO1xuXHRcdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0cmltbWVkID0gdHJpbSh2YWx1ZSk7XG5cdFx0XHRcdGlmICh0cmltbWVkICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHRyaW1tZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqICRmbG9vcigkYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9ICRmbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b29iamVjdFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLlJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsICRTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IGtleSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyKGFyZ3VtZW50KSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiAkQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjYWxsYWJsZVxuXHQvLyBJc0NhbGxhYmxlOiBFUzUuSXNDYWxsYWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxuXHRJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWFyZ3VtZW50LnByb3RvdHlwZTsgLy8gdW5mb3J0dW5hdGVseSB0aGVyZSdzIG5vIHdheSB0byB0cnVseSBjaGVjayB0aGlzIHdpdGhvdXQgdHJ5L2NhdGNoIGBuZXcgYXJndW1lbnRgXG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzZXh0ZW5zaWJsZS1vXG5cdElzRXh0ZW5zaWJsZTogJHByZXZlbnRFeHRlbnNpb25zXG5cdFx0PyBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGlzRXh0ZW5zaWJsZShvYmopO1xuXHRcdH1cblx0XHQ6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShvYmopIHsgcmV0dXJuIHRydWU7IH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNpbnRlZ2VyXG5cdElzSW50ZWdlcjogZnVuY3Rpb24gSXNJbnRlZ2VyKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ251bWJlcicgfHwgJGlzTmFOKGFyZ3VtZW50KSB8fCAhJGlzRmluaXRlKGFyZ3VtZW50KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWJzID0gJGFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuICRmbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbJFN5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuMi4yLTNcblx0XHR2YXIgTyA9IHRoaXMuVG9PYmplY3QoVik7XG5cblx0XHQvLyA3LjMuMi40XG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy45IC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG1ldGhvZFxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IGZ1bmMgYmUgR2V0VihPLCBQKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoZnVuYykuXG5cdCAqIDQuIElmIGZ1bmMgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsLCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiA1LiBJZiBJc0NhbGxhYmxlKGZ1bmMpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cdCAqIDYuIFJldHVybiBmdW5jLlxuXHQgKi9cblx0R2V0TWV0aG9kOiBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHRcdC8vIDcuMy45LjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuMlxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZSwgZ290ICcgKyBpbnNwZWN0KFApKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMgPyBDWyRTeW1ib2wuc3BlY2llc10gOiB2b2lkIDA7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZnJvbXByb3BlcnR5ZGVzY3JpcHRvclxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0dmFyIG9iaiA9IHt9O1xuXHRcdGlmICgnW1tWYWx1ZV1dJyBpbiBEZXNjKSB7XG5cdFx0XHRvYmoudmFsdWUgPSBEZXNjWydbW1ZhbHVlXV0nXTtcblx0XHR9XG5cdFx0aWYgKCdbW1dyaXRhYmxlXV0nIGluIERlc2MpIHtcblx0XHRcdG9iai53cml0YWJsZSA9IERlc2NbJ1tbV3JpdGFibGVdXSddO1xuXHRcdH1cblx0XHRpZiAoJ1tbR2V0XV0nIGluIERlc2MpIHtcblx0XHRcdG9iai5nZXQgPSBEZXNjWydbW0dldF1dJ107XG5cdFx0fVxuXHRcdGlmICgnW1tTZXRdXScgaW4gRGVzYykge1xuXHRcdFx0b2JqLnNldCA9IERlc2NbJ1tbU2V0XV0nXTtcblx0XHR9XG5cdFx0aWYgKCdbW0VudW1lcmFibGVdXScgaW4gRGVzYykge1xuXHRcdFx0b2JqLmVudW1lcmFibGUgPSBEZXNjWydbW0VudW1lcmFibGVdXSddO1xuXHRcdH1cblx0XHRpZiAoJ1tbQ29uZmlndXJhYmxlXV0nIGluIERlc2MpIHtcblx0XHRcdG9iai5jb25maWd1cmFibGUgPSBEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ107XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNvbXBsZXRlcHJvcGVydHlkZXNjcmlwdG9yXG5cdENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tWYWx1ZV1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW0dldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbU2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbRW51bWVyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbQ29uZmlndXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tDb25maWd1cmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBEZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zZXQtby1wLXYtdGhyb3dcblx0U2V0OiBmdW5jdGlvbiBTZXQoTywgUCwgViwgVGhyb3cpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShUaHJvdykgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Rocm93IG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmIChUaHJvdykge1xuXHRcdFx0T1tQXSA9IFY7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0T1tQXSA9IFY7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc293bnByb3BlcnR5XG5cdEhhc093blByb3BlcnR5OiBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBoYXMoTywgUCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc3Byb3BlcnR5XG5cdEhhc1Byb3BlcnR5OiBmdW5jdGlvbiBIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBQIGluIE87XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzY29uY2F0c3ByZWFkYWJsZVxuXHRJc0NvbmNhdFNwcmVhZGFibGU6IGZ1bmN0aW9uIElzQ29uY2F0U3ByZWFkYWJsZShPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMgJiYgdHlwZW9mICRTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dmFyIHNwcmVhZGFibGUgPSB0aGlzLkdldChPLCBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlKTtcblx0XHRcdGlmICh0eXBlb2Ygc3ByZWFkYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHNwcmVhZGFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Jc0FycmF5KE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pbnZva2Vcblx0SW52b2tlOiBmdW5jdGlvbiBJbnZva2UoTywgUCkge1xuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHZhciBhcmd1bWVudHNMaXN0ID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXHRcdHJldHVybiB0aGlzLkNhbGwoZnVuYywgTywgYXJndW1lbnRzTGlzdCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldGl0ZXJhdG9yXG5cdEdldEl0ZXJhdG9yOiBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmosIG1ldGhvZCkge1xuXHRcdHZhciBhY3R1YWxNZXRob2QgPSBtZXRob2Q7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRpZiAoIWhhc1N5bWJvbHMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdHZXRJdGVyYXRvciBkZXBlbmRzIG9uIG5hdGl2ZSBTeW1ib2wgc3VwcG9ydCB3aGVuIGBtZXRob2RgIGlzIG5vdCBwYXNzZWQnKTtcblx0XHRcdH1cblx0XHRcdGFjdHVhbE1ldGhvZCA9IHRoaXMuR2V0TWV0aG9kKG9iaiwgJFN5bWJvbC5pdGVyYXRvcik7XG5cdFx0fVxuXHRcdHZhciBpdGVyYXRvciA9IHRoaXMuQ2FsbChhY3R1YWxNZXRob2QsIG9iaik7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZXJhdG9yO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcm5leHRcblx0SXRlcmF0b3JOZXh0OiBmdW5jdGlvbiBJdGVyYXRvck5leHQoaXRlcmF0b3IsIHZhbHVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuSW52b2tlKGl0ZXJhdG9yLCAnbmV4dCcsIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gW10gOiBbdmFsdWVdKTtcblx0XHRpZiAodGhpcy5UeXBlKHJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbmV4dCBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3Jjb21wbGV0ZVxuXHRJdGVyYXRvckNvbXBsZXRlOiBmdW5jdGlvbiBJdGVyYXRvckNvbXBsZXRlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5HZXQoaXRlclJlc3VsdCwgJ2RvbmUnKSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ydmFsdWVcblx0SXRlcmF0b3JWYWx1ZTogZnVuY3Rpb24gSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJSZXN1bHQpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuR2V0KGl0ZXJSZXN1bHQsICd2YWx1ZScpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcnN0ZXBcblx0SXRlcmF0b3JTdGVwOiBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JdGVyYXRvck5leHQoaXRlcmF0b3IpO1xuXHRcdHZhciBkb25lID0gdGhpcy5JdGVyYXRvckNvbXBsZXRlKHJlc3VsdCk7XG5cdFx0cmV0dXJuIGRvbmUgPT09IHRydWUgPyBmYWxzZSA6IHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JjbG9zZVxuXHRJdGVyYXRvckNsb3NlOiBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyYXRvcikgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShjb21wbGV0aW9uKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGNvbXBsZXRpb24gaXMgbm90IGEgdGh1bmsgZm9yIGEgQ29tcGxldGlvbiBSZWNvcmQnKTtcblx0XHR9XG5cdFx0dmFyIGNvbXBsZXRpb25UaHVuayA9IGNvbXBsZXRpb247XG5cblx0XHR2YXIgaXRlcmF0b3JSZXR1cm4gPSB0aGlzLkdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuXG5cdFx0aWYgKHR5cGVvZiBpdGVyYXRvclJldHVybiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHR9XG5cblx0XHR2YXIgY29tcGxldGlvblJlY29yZDtcblx0XHR0cnkge1xuXHRcdFx0dmFyIGlubmVyUmVzdWx0ID0gdGhpcy5DYWxsKGl0ZXJhdG9yUmV0dXJuLCBpdGVyYXRvciwgW10pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIGlmIHdlIGhpdCBoZXJlLCB0aGVuIFwiZVwiIGlzIHRoZSBpbm5lclJlc3VsdCBjb21wbGV0aW9uIHRoYXQgbmVlZHMgcmUtdGhyb3dpbmdcblxuXHRcdFx0Ly8gaWYgdGhlIGNvbXBsZXRpb24gaXMgb2YgdHlwZSBcInRocm93XCIsIHRoaXMgd2lsbCB0aHJvdy5cblx0XHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRcdC8vIGlmIG5vdCwgdGhlbiByZXR1cm4gdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb25cblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTsgLy8gaWYgaW5uZXJSZXN1bHQgd29ya2VkLCB0aGVuIHRocm93IGlmIHRoZSBjb21wbGV0aW9uIGRvZXNcblx0XHRjb21wbGV0aW9uVGh1bmsgPSBudWxsOyAvLyBlbnN1cmUgaXQncyBub3QgY2FsbGVkIHR3aWNlLlxuXG5cdFx0aWYgKHRoaXMuVHlwZShpbm5lclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgLnJldHVybiBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGxldGlvblJlY29yZDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxuXHRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0OiBmdW5jdGlvbiBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHZhbHVlLCBkb25lKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShkb25lKSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShkb25lKSBpcyBub3QgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0ZG9uZTogZG9uZVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXJlZ2V4cGV4ZWNcblx0UmVnRXhwRXhlYzogZnVuY3Rpb24gUmVnRXhwRXhlYyhSLCBTKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShSKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdHZhciBleGVjID0gdGhpcy5HZXQoUiwgJ2V4ZWMnKTtcblx0XHRpZiAodGhpcy5Jc0NhbGxhYmxlKGV4ZWMpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdGhpcy5DYWxsKGV4ZWMsIFIsIFtTXSk7XG5cdFx0XHRpZiAocmVzdWx0ID09PSBudWxsIHx8IHRoaXMuVHlwZShyZXN1bHQpID09PSAnT2JqZWN0Jykge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1wiZXhlY1wiIG1ldGhvZCBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleEV4ZWMoUiwgUyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRBcnJheVNwZWNpZXNDcmVhdGU6IGZ1bmN0aW9uIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGxlbmd0aCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMCcpO1xuXHRcdH1cblx0XHR2YXIgbGVuID0gbGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aDtcblx0XHR2YXIgQztcblx0XHR2YXIgaXNBcnJheSA9IHRoaXMuSXNBcnJheShvcmlnaW5hbEFycmF5KTtcblx0XHRpZiAoaXNBcnJheSkge1xuXHRcdFx0QyA9IHRoaXMuR2V0KG9yaWdpbmFsQXJyYXksICdjb25zdHJ1Y3RvcicpO1xuXHRcdFx0Ly8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gbWFrZSBhIGNyb3NzLXJlYWxtIG5vcm1hbCBBcnJheSwgYSBzYW1lLXJlYWxtIEFycmF5XG5cdFx0XHQvLyBpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHQvLyBcdGlmIEMgaXMgYW5vdGhlciByZWFsbSdzIEFycmF5LCBDID0gdW5kZWZpbmVkXG5cdFx0XHQvLyBcdE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKEFycmF5KSkpID09PSBudWxsID9cblx0XHRcdC8vIH1cblx0XHRcdGlmICh0aGlzLlR5cGUoQykgPT09ICdPYmplY3QnICYmIGhhc1N5bWJvbHMgJiYgJFN5bWJvbC5zcGVjaWVzKSB7XG5cdFx0XHRcdEMgPSB0aGlzLkdldChDLCAkU3ltYm9sLnNwZWNpZXMpO1xuXHRcdFx0XHRpZiAoQyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdEMgPSB2b2lkIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICRBcnJheShsZW4pO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDb25zdHJ1Y3RvcihDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0MgbXVzdCBiZSBhIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQyhsZW4pOyAvLyB0aGlzLkNvbnN0cnVjdChDLCBsZW4pO1xuXHR9LFxuXG5cdENyZWF0ZURhdGFQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIG9sZERlc2MgPSAkZ09QRChPLCBQKTtcblx0XHR2YXIgZXh0ZW5zaWJsZSA9IG9sZERlc2MgfHwgdGhpcy5Jc0V4dGVuc2libGUoTyk7XG5cdFx0dmFyIGltbXV0YWJsZSA9IG9sZERlc2MgJiYgKCFvbGREZXNjLndyaXRhYmxlIHx8ICFvbGREZXNjLmNvbmZpZ3VyYWJsZSk7XG5cdFx0aWYgKGltbXV0YWJsZSB8fCAhZXh0ZW5zaWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBWLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9KTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlZGF0YXByb3BlcnR5b3J0aHJvd1xuXHRDcmVhdGVEYXRhUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIHN1Y2Nlc3MgPSB0aGlzLkNyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCd1bmFibGUgdG8gY3JlYXRlIGRhdGEgcHJvcGVydHknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3RjcmVhdGVcblx0T2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiBPYmplY3RDcmVhdGUocHJvdG8sIGludGVybmFsU2xvdHNMaXN0KSB7XG5cdFx0aWYgKHByb3RvICE9PSBudWxsICYmIHRoaXMuVHlwZShwcm90bykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogcHJvdG8gbXVzdCBiZSBudWxsIG9yIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgc2xvdHMgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogaW50ZXJuYWxTbG90c0xpc3Q7XG5cdFx0aWYgKHNsb3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2VzLWFic3RyYWN0IGRvZXMgbm90IHlldCBzdXBwb3J0IGludGVybmFsIHNsb3RzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3RvID09PSBudWxsICYmICEkT2JqZWN0Q3JlYXRlKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCduYXRpdmUgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0IGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBudWxsIG9iamVjdHMnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE9iamVjdENyZWF0ZShwcm90byk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuXHRBZHZhbmNlU3RyaW5nSW5kZXg6IGZ1bmN0aW9uIEFkdmFuY2VTdHJpbmdJbmRleChTLCBpbmRleCwgdW5pY29kZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAgYW5kIDw9IDIqKjUzJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUodW5pY29kZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHVuaWNvZGUgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKCF1bmljb2RlKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblx0XHR2YXIgbGVuZ3RoID0gUy5sZW5ndGg7XG5cdFx0aWYgKChpbmRleCArIDEpID49IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgZmlyc3QgPSAkY2hhckNvZGVBdChTLCBpbmRleCk7XG5cdFx0aWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHZhciBzZWNvbmQgPSAkY2hhckNvZGVBdChTLCBpbmRleCArIDEpO1xuXHRcdGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleCArIDI7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVtZXRob2Rwcm9wZXJ0eVxuXHRDcmVhdGVNZXRob2RQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlTWV0aG9kUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0Rlc2MgPSB7XG5cdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBmYWxzZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBWLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXHRcdHJldHVybiBEZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCBuZXdEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlZmluZXByb3BlcnR5b3J0aHJvd1xuXHREZWZpbmVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBQLCBkZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgRGVzYyA9IGlzUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIGRlc2MpID8gZGVzYyA6IHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoZGVzYyk7XG5cdFx0aWYgKCFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgaXMgbm90IGEgdmFsaWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBEZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCBEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlbGV0ZXByb3BlcnR5b3J0aHJvd1xuXHREZWxldGVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgc3VjY2VzcyA9IGRlbGV0ZSBPW1BdO1xuXHRcdGlmICghc3VjY2Vzcykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXR0ZW1wdCB0byBkZWxldGUgcHJvcGVydHkgZmFpbGVkLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VjY2Vzcztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVudW1lcmFibGVvd25uYW1lc1xuXHRFbnVtZXJhYmxlT3duTmFtZXM6IGZ1bmN0aW9uIEVudW1lcmFibGVPd25OYW1lcyhPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ga2V5cyhPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbnVtYmVyLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc051bWJlclZhbHVlOiBmdW5jdGlvbiB0aGlzTnVtYmVyVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE51bWJlclZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1ib29sZWFuLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc0Jvb2xlYW5WYWx1ZTogZnVuY3Rpb24gdGhpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnQm9vbGVhbicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJEJvb2xlYW5WYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtc3RyaW5nLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1N0cmluZ1ZhbHVlOiBmdW5jdGlvbiB0aGlzU3RyaW5nVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ1N0cmluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJFN0cmluZ1ZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1kYXRlLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1RpbWVWYWx1ZTogZnVuY3Rpb24gdGhpc1RpbWVWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiAkRGF0ZVZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0aW50ZWdyaXR5bGV2ZWxcblx0U2V0SW50ZWdyaXR5TGV2ZWw6IGZ1bmN0aW9uIFNldEludGVncml0eUxldmVsKE8sIGxldmVsKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKGxldmVsICE9PSAnc2VhbGVkJyAmJiBsZXZlbCAhPT0gJ2Zyb3plbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBgbGV2ZWxgIG11c3QgYmUgYFwic2VhbGVkXCJgIG9yIGBcImZyb3plblwiYCcpO1xuXHRcdH1cblx0XHRpZiAoISRwcmV2ZW50RXh0ZW5zaW9ucykge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignU2V0SW50ZWdyaXR5TGV2ZWwgcmVxdWlyZXMgbmF0aXZlIGBPYmplY3QucHJldmVudEV4dGVuc2lvbnNgIHN1cHBvcnQnKTtcblx0XHR9XG5cdFx0dmFyIHN0YXR1cyA9ICRwcmV2ZW50RXh0ZW5zaW9ucyhPKTtcblx0XHRpZiAoIXN0YXR1cykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoISRnT1BOKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdTZXRJbnRlZ3JpdHlMZXZlbCByZXF1aXJlcyBuYXRpdmUgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBzdXBwb3J0Jyk7XG5cdFx0fVxuXHRcdHZhciB0aGVLZXlzID0gJGdPUE4oTyk7XG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHRpZiAobGV2ZWwgPT09ICdzZWFsZWQnKSB7XG5cdFx0XHRmb3JFYWNoKHRoZUtleXMsIGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdEVTLkRlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBrLCB7IGNvbmZpZ3VyYWJsZTogZmFsc2UgfSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSAnZnJvemVuJykge1xuXHRcdFx0Zm9yRWFjaCh0aGVLZXlzLCBmdW5jdGlvbiAoaykge1xuXHRcdFx0XHR2YXIgY3VycmVudERlc2MgPSAkZ09QRChPLCBrKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50RGVzYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHR2YXIgZGVzYztcblx0XHRcdFx0XHRpZiAoRVMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRVMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudERlc2MpKSkge1xuXHRcdFx0XHRcdFx0ZGVzYyA9IHsgY29uZmlndXJhYmxlOiBmYWxzZSB9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZXNjID0geyBjb25maWd1cmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0RVMuRGVmaW5lUHJvcGVydHlPclRocm93KE8sIGssIGRlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10ZXN0aW50ZWdyaXR5bGV2ZWxcblx0VGVzdEludGVncml0eUxldmVsOiBmdW5jdGlvbiBUZXN0SW50ZWdyaXR5TGV2ZWwoTywgbGV2ZWwpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAobGV2ZWwgIT09ICdzZWFsZWQnICYmIGxldmVsICE9PSAnZnJvemVuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBsZXZlbGAgbXVzdCBiZSBgXCJzZWFsZWRcImAgb3IgYFwiZnJvemVuXCJgJyk7XG5cdFx0fVxuXHRcdHZhciBzdGF0dXMgPSB0aGlzLklzRXh0ZW5zaWJsZShPKTtcblx0XHRpZiAoc3RhdHVzKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciB0aGVLZXlzID0gJGdPUE4oTyk7XG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHRyZXR1cm4gdGhlS2V5cy5sZW5ndGggPT09IDAgfHwgZXZlcnkodGhlS2V5cywgZnVuY3Rpb24gKGspIHtcblx0XHRcdHZhciBjdXJyZW50RGVzYyA9ICRnT1BEKE8sIGspO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50RGVzYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aWYgKGN1cnJlbnREZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGV2ZWwgPT09ICdmcm96ZW4nICYmIEVTLklzRGF0YURlc2NyaXB0b3IoRVMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudERlc2MpKSAmJiBjdXJyZW50RGVzYy53cml0YWJsZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vcmRpbmFyeWhhc2luc3RhbmNlXG5cdE9yZGluYXJ5SGFzSW5zdGFuY2U6IGZ1bmN0aW9uIE9yZGluYXJ5SGFzSW5zdGFuY2UoQywgTykge1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoQykgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBQID0gdGhpcy5HZXQoQywgJ3Byb3RvdHlwZScpO1xuXHRcdGlmICh0aGlzLlR5cGUoUCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignT3JkaW5hcnlIYXNJbnN0YW5jZSBjYWxsZWQgb24gYW4gb2JqZWN0IHdpdGggYW4gaW52YWxpZCBwcm90b3R5cGUgcHJvcGVydHkuJyk7XG5cdFx0fVxuXHRcdHJldHVybiBPIGluc3RhbmNlb2YgQztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9yZGluYXJ5aGFzcHJvcGVydHlcblx0T3JkaW5hcnlIYXNQcm9wZXJ0eTogZnVuY3Rpb24gT3JkaW5hcnlIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0cmV0dXJuIFAgaW4gTztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWluc3RhbmNlb2ZvcGVyYXRvclxuXHRJbnN0YW5jZW9mT3BlcmF0b3I6IGZ1bmN0aW9uIEluc3RhbmNlb2ZPcGVyYXRvcihPLCBDKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIGluc3RPZkhhbmRsZXIgPSBoYXNTeW1ib2xzICYmICRTeW1ib2wuaGFzSW5zdGFuY2UgPyB0aGlzLkdldE1ldGhvZChDLCAkU3ltYm9sLmhhc0luc3RhbmNlKSA6IHZvaWQgMDtcblx0XHRpZiAodHlwZW9mIGluc3RPZkhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5DYWxsKGluc3RPZkhhbmRsZXIsIEMsIFtPXSkpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BDYCBpcyBub3QgQ2FsbGFibGUnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuT3JkaW5hcnlIYXNJbnN0YW5jZShDLCBPKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcHJvbWlzZVxuXHRJc1Byb21pc2U6IGZ1bmN0aW9uIElzUHJvbWlzZSh4KSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh4KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCEkUHJvbWlzZSkgeyAvLyBQcm9taXNlcyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JFByb21pc2VUaGVuKHgpOyAvLyB0aHJvd3MgaWYgbm90IGEgcHJvbWlzZVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hYnN0cmFjdC1lcXVhbGl0eS1jb21wYXJpc29uXG5cdCdBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gQWJzdHJhY3RFcXVhbGl0eUNvbXBhcmlzb24oeCwgeSkge1xuXHRcdHZhciB4VHlwZSA9IHRoaXMuVHlwZSh4KTtcblx0XHR2YXIgeVR5cGUgPSB0aGlzLlR5cGUoeSk7XG5cdFx0aWYgKHhUeXBlID09PSB5VHlwZSkge1xuXHRcdFx0cmV0dXJuIHggPT09IHk7IC8vIEVTNisgc3BlY2lmaWVkIHRoaXMgc2hvcnRjdXQgYW55d2F5cy5cblx0XHR9XG5cdFx0aWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdOdW1iZXInICYmIHlUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnU3RyaW5nJyAmJiB5VHlwZSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub051bWJlcih4KSwgeSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9OdW1iZXIoeCksIHkpO1xuXHRcdH1cblx0XHRpZiAoeVR5cGUgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKCh4VHlwZSA9PT0gJ1N0cmluZycgfHwgeFR5cGUgPT09ICdOdW1iZXInIHx8IHhUeXBlID09PSAnU3ltYm9sJykgJiYgeVR5cGUgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHgsIHRoaXMuVG9QcmltaXRpdmUoeSkpO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdPYmplY3QnICYmICh5VHlwZSA9PT0gJ1N0cmluZycgfHwgeVR5cGUgPT09ICdOdW1iZXInIHx8IHlUeXBlID09PSAnU3ltYm9sJykpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub1ByaW1pdGl2ZSh4KSwgeSk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiwgbWF4LXN0YXRlbWVudHMsIGlkLWxlbmd0aCwgbWF4LXBhcmFtc1xuXHRWYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBWYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yKE8sIFAsIGV4dGVuc2libGUsIERlc2MsIGN1cnJlbnQpIHtcblx0XHQvLyB0aGlzIHVzZXMgdGhlIEVTMjAxNysgbG9naWMsIHNpbmNlIGl0IGZpeGVzIGEgbnVtYmVyIG9mIGJ1Z3MgaW4gdGhlIEVTMjAxNSBsb2dpYy5cblx0XHR2YXIgb1R5cGUgPSB0aGlzLlR5cGUoTyk7XG5cdFx0aWYgKG9UeXBlICE9PSAnVW5kZWZpbmVkJyAmJiBvVHlwZSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBPIG11c3QgYmUgdW5kZWZpbmVkIG9yIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKGV4dGVuc2libGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBleHRlbnNpYmxlIG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmICghaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoY3VycmVudCkgIT09ICdVbmRlZmluZWQnICYmICFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBjdXJyZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGN1cnJlbnQgbXVzdCBiZSBhIFByb3BlcnR5IERlc2NyaXB0b3IsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnICYmICF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBpZiBPIGlzIG5vdCB1bmRlZmluZWQsIFAgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKGN1cnJlbnQpID09PSAnVW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKCFleHRlbnNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRcdGlmIChvVHlwZSAhPT0gJ1VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHREZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCB7XG5cdFx0XHRcdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSxcblx0XHRcdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6IERlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tWYWx1ZV1dJzogRGVzY1snW1tWYWx1ZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tXcml0YWJsZV1dJzogRGVzY1snW1tXcml0YWJsZV1dJ11cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgaXMgbm90IGFuIGFjY2Vzc29yIGRlc2NyaXB0b3InKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIERlZmluZU93blByb3BlcnR5KHRoaXMsIE8sIFAsIERlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSAmJiAhKCdbW0NvbmZpZ3VyYWJsZV1dJyBpbiBEZXNjKSAmJiAhKCdbW0VudW1lcmFibGVdXScgaW4gRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIERlc2MsIGN1cnJlbnQpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlZCBieSBFUzIwMTcsIGJ1dCBzaG91bGQgc3RpbGwgYmUgY29ycmVjdFxuXHRcdH1cblx0XHQvLyBcImlmIGV2ZXJ5IGZpZWxkIGluIERlc2MgaXMgYWJzZW50LCByZXR1cm4gdHJ1ZVwiIGNhbid0IHJlYWxseSBtYXRjaCB0aGUgYXNzZXJ0aW9uIHRoYXQgaXQncyBhIFByb3BlcnR5IERlc2NyaXB0b3Jcblx0XHRpZiAoIWN1cnJlbnRbJ1tbQ29uZmlndXJhYmxlXV0nXSkge1xuXHRcdFx0aWYgKERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJ1tbRW51bWVyYWJsZV1dJyBpbiBEZXNjICYmICFEZXNjWydbW0VudW1lcmFibGVdXSddID09PSAhIWN1cnJlbnRbJ1tbRW51bWVyYWJsZV1dJ10pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHQvLyBubyBmdXJ0aGVyIHZhbGlkYXRpb24gaXMgcmVxdWlyZWQuXG5cdFx0fSBlbHNlIGlmICh0aGlzLklzRGF0YURlc2NyaXB0b3IoY3VycmVudCkgIT09IHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihjdXJyZW50KSkge1xuXHRcdFx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0RGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0XHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiBjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBjdXJyZW50WydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRcdFx0J1tbR2V0XV0nOiB1bmRlZmluZWRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChvVHlwZSAhPT0gJ1VuZGVmaW5lZCcpIHtcblx0XHRcdFx0RGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogY3VycmVudFsnW1tDb25maWd1cmFibGVdXSddLFxuXHRcdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6IGN1cnJlbnRbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdFx0J1tbVmFsdWVdXSc6IHVuZGVmaW5lZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihjdXJyZW50KSAmJiB0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdGlmICghY3VycmVudFsnW1tDb25maWd1cmFibGVdXSddICYmICFjdXJyZW50WydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0XHRpZiAoJ1tbV3JpdGFibGVdXScgaW4gRGVzYyAmJiBEZXNjWydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoJ1tbVmFsdWVdXScgaW4gRGVzYyAmJiAhdGhpcy5TYW1lVmFsdWUoRGVzY1snW1tWYWx1ZV1dJ10sIGN1cnJlbnRbJ1tbVmFsdWVdXSddKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoY3VycmVudCkgJiYgdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10pIHtcblx0XHRcdFx0aWYgKCdbW1NldF1dJyBpbiBEZXNjICYmICF0aGlzLlNhbWVWYWx1ZShEZXNjWydbW1NldF1dJ10sIGN1cnJlbnRbJ1tbU2V0XV0nXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCdbW0dldF1dJyBpbiBEZXNjICYmICF0aGlzLlNhbWVWYWx1ZShEZXNjWydbW0dldF1dJ10sIGN1cnJlbnRbJ1tbR2V0XV0nXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBjdXJyZW50IGFuZCBEZXNjIGFyZSBub3QgYm90aCBkYXRhLCBib3RoIGFjY2Vzc29ycywgb3Igb25lIGFjY2Vzc29yIGFuZCBvbmUgZGF0YS4nKTtcblx0XHR9XG5cdFx0aWYgKG9UeXBlICE9PSAnVW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIERlZmluZU93blByb3BlcnR5KHRoaXMsIE8sIFAsIERlc2MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9yZGluYXJ5ZGVmaW5lb3ducHJvcGVydHlcblx0T3JkaW5hcnlEZWZpbmVPd25Qcm9wZXJ0eTogZnVuY3Rpb24gT3JkaW5hcnlEZWZpbmVPd25Qcm9wZXJ0eShPLCBQLCBEZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdGlmICghaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHRcdHZhciBkZXNjID0gJGdPUEQoTywgUCk7XG5cdFx0dmFyIGN1cnJlbnQgPSBkZXNjICYmIHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoZGVzYyk7XG5cdFx0dmFyIGV4dGVuc2libGUgPSB0aGlzLklzRXh0ZW5zaWJsZShPKTtcblx0XHRyZXR1cm4gdGhpcy5WYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yKE8sIFAsIGV4dGVuc2libGUsIERlc2MsIGN1cnJlbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb3JkaW5hcnlnZXRvd25wcm9wZXJ0eVxuXHRPcmRpbmFyeUdldE93blByb3BlcnR5OiBmdW5jdGlvbiBPcmRpbmFyeUdldE93blByb3BlcnR5KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IE8gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoTywgUCkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fVxuXHRcdGlmICghJGdPUEQpIHtcblx0XHRcdC8vIEVTMyBmYWxsYmFja1xuXHRcdFx0dmFyIGFycmF5TGVuZ3RoID0gdGhpcy5Jc0FycmF5KE8pICYmIFAgPT09ICdsZW5ndGgnO1xuXHRcdFx0dmFyIHJlZ2V4TGFzdEluZGV4ID0gdGhpcy5Jc1JlZ0V4cChPKSAmJiBQID09PSAnbGFzdEluZGV4Jztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogIShhcnJheUxlbmd0aCB8fCByZWdleExhc3RJbmRleCksXG5cdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6ICRpc0VudW1lcmFibGUoTywgUCksXG5cdFx0XHRcdCdbW1ZhbHVlXV0nOiBPW1BdLFxuXHRcdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoJGdPUEQoTywgUCkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXljcmVhdGVcblx0QXJyYXlDcmVhdGU6IGZ1bmN0aW9uIEFycmF5Q3JlYXRlKGxlbmd0aCkge1xuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYGxlbmd0aGAgbXVzdCBiZSBhbiBpbnRlZ2VyIE51bWJlciA+PSAwJyk7XG5cdFx0fVxuXHRcdGlmIChsZW5ndGggPiBNQVhfQVJSQVlfTEVOR1RIKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFJhbmdlRXJyb3IoJ2xlbmd0aCBpcyBncmVhdGVyIHRoYW4gKDIqKjMyIC0gMSknKTtcblx0XHR9XG5cdFx0dmFyIHByb3RvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAkQXJyYXlQcm90b3R5cGU7XG5cdFx0dmFyIEEgPSBbXTsgLy8gc3RlcHMgNSAtIDcsIGFuZCA5XG5cdFx0aWYgKHByb3RvICE9PSAkQXJyYXlQcm90b3R5cGUpIHsgLy8gc3RlcCA4XG5cdFx0XHRpZiAoISRzZXRQcm90bykge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdBcnJheUNyZWF0ZTogYSBgcHJvdG9gIGFyZ3VtZW50IHRoYXQgaXMgbm90IGBBcnJheS5wcm90b3R5cGVgIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYW4gZW52aXJvbm1lbnQgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHNldHRpbmcgdGhlIFtbUHJvdG90eXBlXV0nKTtcblx0XHRcdH1cblx0XHRcdCRzZXRQcm90byhBLCBwcm90byk7XG5cdFx0fVxuXHRcdGlmIChsZW5ndGggIT09IDApIHsgLy8gYnlwYXNzZXMgdGhlIG5lZWQgZm9yIHN0ZXAgMlxuXHRcdFx0QS5sZW5ndGggPSBsZW5ndGg7XG5cdFx0fVxuXHRcdC8qIHN0ZXAgMTAsIHRoZSBhYm92ZSBhcyBhIHNob3J0Y3V0IGZvciB0aGUgYmVsb3dcblx0XHR0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogZmFsc2UsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBmYWxzZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBsZW5ndGgsXG5cdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdH0pO1xuXHRcdCovXG5cdFx0cmV0dXJuIEE7XG5cdH0sXG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdEFycmF5U2V0TGVuZ3RoOiBmdW5jdGlvbiBBcnJheVNldExlbmd0aChBLCBEZXNjKSB7XG5cdFx0aWYgKCF0aGlzLklzQXJyYXkoQSkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBBIG11c3QgYmUgYW4gQXJyYXknKTtcblx0XHR9XG5cdFx0aWYgKCFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgbXVzdCBiZSBhIFByb3BlcnR5IERlc2NyaXB0b3InKTtcblx0XHR9XG5cdFx0aWYgKCEoJ1tbVmFsdWVdXScgaW4gRGVzYykpIHtcblx0XHRcdHJldHVybiB0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIERlc2MpO1xuXHRcdH1cblx0XHR2YXIgbmV3TGVuRGVzYyA9IGFzc2lnbih7fSwgRGVzYyk7XG5cdFx0dmFyIG5ld0xlbiA9IHRoaXMuVG9VaW50MzIoRGVzY1snW1tWYWx1ZV1dJ10pO1xuXHRcdHZhciBudW1iZXJMZW4gPSB0aGlzLlRvTnVtYmVyKERlc2NbJ1tbVmFsdWVdXSddKTtcblx0XHRpZiAobmV3TGVuICE9PSBudW1iZXJMZW4pIHtcblx0XHRcdHRocm93IG5ldyAkUmFuZ2VFcnJvcignSW52YWxpZCBhcnJheSBsZW5ndGgnKTtcblx0XHR9XG5cdFx0bmV3TGVuRGVzY1snW1tWYWx1ZV1dJ10gPSBuZXdMZW47XG5cdFx0dmFyIG9sZExlbkRlc2MgPSB0aGlzLk9yZGluYXJ5R2V0T3duUHJvcGVydHkoQSwgJ2xlbmd0aCcpO1xuXHRcdGlmICghdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKG9sZExlbkRlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYW4gYXJyYXkgaGFkIGEgbm9uLWRhdGEgZGVzY3JpcHRvciBvbiBgbGVuZ3RoYCcpO1xuXHRcdH1cblx0XHR2YXIgb2xkTGVuID0gb2xkTGVuRGVzY1snW1tWYWx1ZV1dJ107XG5cdFx0aWYgKG5ld0xlbiA+PSBvbGRMZW4pIHtcblx0XHRcdHJldHVybiB0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIG5ld0xlbkRlc2MpO1xuXHRcdH1cblx0XHRpZiAoIW9sZExlbkRlc2NbJ1tbV3JpdGFibGVdXSddKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBuZXdXcml0YWJsZTtcblx0XHRpZiAoISgnW1tXcml0YWJsZV1dJyBpbiBuZXdMZW5EZXNjKSB8fCBuZXdMZW5EZXNjWydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0bmV3V3JpdGFibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdXcml0YWJsZSA9IGZhbHNlO1xuXHRcdFx0bmV3TGVuRGVzY1snW1tXcml0YWJsZV1dJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR2YXIgc3VjY2VlZGVkID0gdGhpcy5PcmRpbmFyeURlZmluZU93blByb3BlcnR5KEEsICdsZW5ndGgnLCBuZXdMZW5EZXNjKTtcblx0XHRpZiAoIXN1Y2NlZWRlZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR3aGlsZSAobmV3TGVuIDwgb2xkTGVuKSB7XG5cdFx0XHRvbGRMZW4gLT0gMTtcblx0XHRcdHZhciBkZWxldGVTdWNjZWVkZWQgPSBkZWxldGUgQVt0aGlzLlRvU3RyaW5nKG9sZExlbildO1xuXHRcdFx0aWYgKCFkZWxldGVTdWNjZWVkZWQpIHtcblx0XHRcdFx0bmV3TGVuRGVzY1snW1tWYWx1ZV1dJ10gPSBvbGRMZW4gKyAxO1xuXHRcdFx0XHRpZiAoIW5ld1dyaXRhYmxlKSB7XG5cdFx0XHRcdFx0bmV3TGVuRGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIG5ld0xlbkRlc2MpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIW5ld1dyaXRhYmxlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5PcmRpbmFyeURlZmluZU93blByb3BlcnR5KEEsICdsZW5ndGgnLCB7ICdbW1dyaXRhYmxlXV0nOiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVodG1sXG5cdENyZWF0ZUhUTUw6IGZ1bmN0aW9uIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHRhZykgIT09ICdTdHJpbmcnIHx8IHRoaXMuVHlwZShhdHRyaWJ1dGUpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGB0YWdgIGFuZCBgYXR0cmlidXRlYCBtdXN0IGJlIHN0cmluZ3MnKTtcblx0XHR9XG5cdFx0dmFyIHN0ciA9IHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpO1xuXHRcdHZhciBTID0gdGhpcy5Ub1N0cmluZyhzdHIpO1xuXHRcdHZhciBwMSA9ICc8JyArIHRhZztcblx0XHRpZiAoYXR0cmlidXRlICE9PSAnJykge1xuXHRcdFx0dmFyIFYgPSB0aGlzLlRvU3RyaW5nKHZhbHVlKTtcblx0XHRcdHZhciBlc2NhcGVkViA9ICRyZXBsYWNlKFYsIC9cXHgyMi9nLCAnJnF1b3Q7Jyk7XG5cdFx0XHRwMSArPSAnXFx4MjAnICsgYXR0cmlidXRlICsgJ1xceDNEXFx4MjInICsgZXNjYXBlZFYgKyAnXFx4MjInO1xuXHRcdH1cblx0XHRyZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG93bnByb3BlcnR5a2V5c1xuXHRHZXRPd25Qcm9wZXJ0eUtleXM6IGZ1bmN0aW9uIEdldE93blByb3BlcnR5S2V5cyhPLCBUeXBlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKFR5cGUgPT09ICdTeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gaGFzU3ltYm9scyAmJiAkZ09QUyA/ICRnT1BTKE8pIDogW107XG5cdFx0fVxuXHRcdGlmIChUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0aWYgKCEkZ09QTikge1xuXHRcdFx0XHRyZXR1cm4ga2V5cyhPKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkZ09QTihPKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBUeXBlYCBtdXN0IGJlIGBcIlN0cmluZ1wiYCBvciBgXCJTeW1ib2xcImAnKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXN5bWJvbGRlc2NyaXB0aXZlc3RyaW5nXG5cdFN5bWJvbERlc2NyaXB0aXZlU3RyaW5nOiBmdW5jdGlvbiBTeW1ib2xEZXNjcmlwdGl2ZVN0cmluZyhzeW0pIHtcblx0XHRpZiAodGhpcy5UeXBlKHN5bSkgIT09ICdTeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHN5bWAgbXVzdCBiZSBhIFN5bWJvbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gJFN5bWJvbFRvU3RyaW5nKHN5bSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRzdWJzdGl0dXRpb25cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLCBtYXgtcGFyYW1zLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdEdldFN1YnN0aXR1dGlvbjogZnVuY3Rpb24gR2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuXHRcdGlmICh0aGlzLlR5cGUobWF0Y2hlZCkgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYG1hdGNoZWRgIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIG1hdGNoTGVuZ3RoID0gbWF0Y2hlZC5sZW5ndGg7XG5cblx0XHRpZiAodGhpcy5UeXBlKHN0cikgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHN0cmAgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHR2YXIgc3RyaW5nTGVuZ3RoID0gc3RyLmxlbmd0aDtcblxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIocG9zaXRpb24pIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IHN0cmluZ0xlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBwb3NpdGlvbmAgbXVzdCBiZSBhIG5vbm5lZ2F0aXZlIGludGVnZXIsIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGxlbmd0aCBvZiBgc3RyaW5nYCwgZ290ICcgKyBpbnNwZWN0KHBvc2l0aW9uKSk7XG5cdFx0fVxuXG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHR2YXIgaXNTdHJpbmdPckhvbGUgPSBmdW5jdGlvbiAoY2FwdHVyZSwgaW5kZXgsIGFycikgeyByZXR1cm4gRVMuVHlwZShjYXB0dXJlKSA9PT0gJ1N0cmluZycgfHwgIShpbmRleCBpbiBhcnIpOyB9O1xuXHRcdGlmICghdGhpcy5Jc0FycmF5KGNhcHR1cmVzKSB8fCAhZXZlcnkoY2FwdHVyZXMsIGlzU3RyaW5nT3JIb2xlKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBjYXB0dXJlc2AgbXVzdCBiZSBhIExpc3Qgb2YgU3RyaW5ncywgZ290ICcgKyBpbnNwZWN0KGNhcHR1cmVzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuVHlwZShyZXBsYWNlbWVudCkgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHJlcGxhY2VtZW50YCBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXG5cdFx0dmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoTGVuZ3RoO1xuXHRcdHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuXG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVwbGFjZW1lbnQubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdC8vIGlmIHRoaXMgaXMgYSAkLCBhbmQgaXQncyBub3QgdGhlIGVuZCBvZiB0aGUgcmVwbGFjZW1lbnRcblx0XHRcdHZhciBjdXJyZW50ID0gcmVwbGFjZW1lbnRbaV07XG5cdFx0XHR2YXIgaXNMYXN0ID0gKGkgKyAxKSA+PSByZXBsYWNlbWVudC5sZW5ndGg7XG5cdFx0XHR2YXIgbmV4dElzTGFzdCA9IChpICsgMikgPj0gcmVwbGFjZW1lbnQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnQgPT09ICckJyAmJiAhaXNMYXN0KSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gcmVwbGFjZW1lbnRbaSArIDFdO1xuXHRcdFx0XHRpZiAobmV4dCA9PT0gJyQnKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9ICckJztcblx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV4dCA9PT0gJyYnKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IG1hdGNoZWQ7XG5cdFx0XHRcdFx0aSArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5leHQgPT09ICdgJykge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBwb3NpdGlvbiA9PT0gMCA/ICcnIDogc3RyU2xpY2Uoc3RyLCAwLCBwb3NpdGlvbiAtIDEpO1xuXHRcdFx0XHRcdGkgKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXh0ID09PSBcIidcIikge1xuXHRcdFx0XHRcdHJlc3VsdCArPSB0YWlsUG9zID49IHN0cmluZ0xlbmd0aCA/ICcnIDogc3RyU2xpY2Uoc3RyLCB0YWlsUG9zKTtcblx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG5leHROZXh0ID0gbmV4dElzTGFzdCA/IG51bGwgOiByZXBsYWNlbWVudFtpICsgMl07XG5cdFx0XHRcdFx0aWYgKGlzRGlnaXQobmV4dCkgJiYgbmV4dCAhPT0gJzAnICYmIChuZXh0SXNMYXN0IHx8ICFpc0RpZ2l0KG5leHROZXh0KSkpIHtcblx0XHRcdFx0XHRcdC8vICQxIHRocm91Z2ggJDksIGFuZCBub3QgZm9sbG93ZWQgYnkgYSBkaWdpdFxuXHRcdFx0XHRcdFx0dmFyIG4gPSBwYXJzZUludGVnZXIobmV4dCwgMTApO1xuXHRcdFx0XHRcdFx0Ly8gaWYgKG4gPiBtLCBpbXBsLWRlZmluZWQpXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gKG4gPD0gbSAmJiB0aGlzLlR5cGUoY2FwdHVyZXNbbiAtIDFdKSA9PT0gJ1VuZGVmaW5lZCcpID8gJycgOiBjYXB0dXJlc1tuIC0gMV07XG5cdFx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpc0RpZ2l0KG5leHQpICYmIChuZXh0SXNMYXN0IHx8IGlzRGlnaXQobmV4dE5leHQpKSkge1xuXHRcdFx0XHRcdFx0Ly8gJDAwIHRocm91Z2ggJDk5XG5cdFx0XHRcdFx0XHR2YXIgbm4gPSBuZXh0ICsgbmV4dE5leHQ7XG5cdFx0XHRcdFx0XHR2YXIgbm5JID0gcGFyc2VJbnRlZ2VyKG5uLCAxMCkgLSAxO1xuXHRcdFx0XHRcdFx0Ly8gaWYgbm4gPT09ICcwMCcgb3Igbm4gPiBtLCBpbXBsLWRlZmluZWRcblx0XHRcdFx0XHRcdHJlc3VsdCArPSAobm4gPD0gbSAmJiB0aGlzLlR5cGUoY2FwdHVyZXNbbm5JXSkgPT09ICdVbmRlZmluZWQnKSA/ICcnIDogY2FwdHVyZXNbbm5JXTtcblx0XHRcdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9ICckJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRoZSBmaW5hbCAkLCBvciBlbHNlIG5vdCBhICRcblx0XHRcdFx0cmVzdWx0ICs9IHJlcGxhY2VtZW50W2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59KTtcblxuZGVsZXRlIEVTNi5DaGVja09iamVjdENvZXJjaWJsZTsgLy8gcmVuYW1lZCBpbiBFUzYgdG8gUmVxdWlyZU9iamVjdENvZXJjaWJsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDU3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJEFycmF5ID0gR2V0SW50cmluc2ljKCclQXJyYXklJyk7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG52YXIgRVMyMDE1ID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvY2FsbEJpbmQnKTtcblxudmFyICRhcnJheVB1c2ggPSBjYWxsQmluZCgkQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuXG52YXIgRVMyMDE2ID0gYXNzaWduKGFzc2lnbih7fSwgRVMyMDE1KSwge1xuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZW5vbm51bWJlclxuXHRTYW1lVmFsdWVOb25OdW1iZXI6IGZ1bmN0aW9uIFNhbWVWYWx1ZU5vbk51bWJlcih4LCB5KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgeCAhPT0gdHlwZW9mIHkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1NhbWVWYWx1ZU5vbk51bWJlciByZXF1aXJlcyB0d28gbm9uLW51bWJlciB2YWx1ZXMgb2YgdGhlIHNhbWUgdHlwZS4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuU2FtZVZhbHVlKHgsIHkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtaXRlcmFibGV0b2FycmF5bGlrZVxuXHRJdGVyYWJsZVRvQXJyYXlMaWtlOiBmdW5jdGlvbiBJdGVyYWJsZVRvQXJyYXlMaWtlKGl0ZW1zKSB7XG5cdFx0dmFyIHVzaW5nSXRlcmF0b3I7XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHVzaW5nSXRlcmF0b3IgPSB0aGlzLkdldE1ldGhvZChpdGVtcywgU3ltYm9sLml0ZXJhdG9yKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBcnJheShpdGVtcykpIHtcblx0XHRcdHVzaW5nSXRlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBpID0gLTE7XG5cdFx0XHRcdHZhciBhcnIgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWludmFsaWQtdGhpc1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGkgKz0gMTtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdGRvbmU6IGkgPj0gYXJyLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGFycltpXVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5UeXBlKGl0ZW1zKSA9PT0gJ1N0cmluZycpIHtcblx0XHRcdC8vIGZhbGxiYWNrIGZvciBzdHJpbmdzXG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdXNpbmdJdGVyYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRoaXMuR2V0SXRlcmF0b3IoaXRlbXMsIHVzaW5nSXRlcmF0b3IpO1xuXHRcdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdFx0dmFyIG5leHQgPSB0cnVlO1xuXHRcdFx0d2hpbGUgKG5leHQpIHtcblx0XHRcdFx0bmV4dCA9IHRoaXMuSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHR2YXIgbmV4dFZhbHVlID0gdGhpcy5JdGVyYXRvclZhbHVlKG5leHQpO1xuXHRcdFx0XHRcdCRhcnJheVB1c2godmFsdWVzLCBuZXh0VmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLlRvT2JqZWN0KGl0ZW1zKTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRVMyMDE2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzMjAxNi5qc1xuLy8gbW9kdWxlIGlkID0gNTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBFUzIwMTYgPSByZXF1aXJlKCcuL2VzMjAxNicpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi9oZWxwZXJzL2ZvckVhY2gnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9jYWxsQmluZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkQXJyYXkgPSBHZXRJbnRyaW5zaWMoJyVBcnJheSUnKTtcbnZhciAkaXNFbnVtZXJhYmxlID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclT2JqZWN0UHJvdG90eXBlJScpLnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbnZhciAkcHVzaEFwcGx5ID0gY2FsbEJpbmQuYXBwbHkoR2V0SW50cmluc2ljKCclQXJyYXlQcm90b3R5cGUlJykucHVzaCk7XG52YXIgJGFycmF5UHVzaCA9IGNhbGxCaW5kKCRBcnJheS5wcm90b3R5cGUucHVzaCk7XG5cbnZhciBFUzIwMTcgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzIwMTYpLCB7XG5cdFRvSW5kZXg6IGZ1bmN0aW9uIFRvSW5kZXgodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHZhciBpbnRlZ2VySW5kZXggPSB0aGlzLlRvSW50ZWdlcih2YWx1ZSk7XG5cdFx0aWYgKGludGVnZXJJbmRleCA8IDApIHtcblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdpbmRleCBtdXN0IGJlID49IDAnKTtcblx0XHR9XG5cdFx0dmFyIGluZGV4ID0gdGhpcy5Ub0xlbmd0aChpbnRlZ2VySW5kZXgpO1xuXHRcdGlmICghdGhpcy5TYW1lVmFsdWVaZXJvKGludGVnZXJJbmRleCwgaW5kZXgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggbXVzdCBiZSA+PSAwIGFuZCA8IDIgKiogNTMgLSAxJyk7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jc2VjLWVudW1lcmFibGVvd25wcm9wZXJ0aWVzXG5cdEVudW1lcmFibGVPd25Qcm9wZXJ0aWVzOiBmdW5jdGlvbiBFbnVtZXJhYmxlT3duUHJvcGVydGllcyhPLCBraW5kKSB7XG5cdFx0dmFyIGtleXMgPSBFUzIwMTYuRW51bWVyYWJsZU93bk5hbWVzKE8pO1xuXHRcdGlmIChraW5kID09PSAna2V5Jykge1xuXHRcdFx0cmV0dXJuIGtleXM7XG5cdFx0fVxuXHRcdGlmIChraW5kID09PSAndmFsdWUnIHx8IGtpbmQgPT09ICdrZXkrdmFsdWUnKSB7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IFtdO1xuXHRcdFx0Zm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdGlmICgkaXNFbnVtZXJhYmxlKE8sIGtleSkpIHtcblx0XHRcdFx0XHQkcHVzaEFwcGx5KHJlc3VsdHMsIFtcblx0XHRcdFx0XHRcdGtpbmQgPT09ICd2YWx1ZScgPyBPW2tleV0gOiBba2V5LCBPW2tleV1dXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBcImtpbmRcIiBpcyBub3QgXCJrZXlcIiwgXCJ2YWx1ZVwiLCBvciBcImtleSt2YWx1ZVwiOiAnICsga2luZCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3NlYy1pdGVyYWJsZXRvbGlzdFxuXHRJdGVyYWJsZVRvTGlzdDogZnVuY3Rpb24gSXRlcmFibGVUb0xpc3QoaXRlbXMsIG1ldGhvZCkge1xuXHRcdHZhciBpdGVyYXRvciA9IHRoaXMuR2V0SXRlcmF0b3IoaXRlbXMsIG1ldGhvZCk7XG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdHZhciBuZXh0ID0gdHJ1ZTtcblx0XHR3aGlsZSAobmV4dCkge1xuXHRcdFx0bmV4dCA9IHRoaXMuSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcblx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdHZhciBuZXh0VmFsdWUgPSB0aGlzLkl0ZXJhdG9yVmFsdWUobmV4dCk7XG5cdFx0XHRcdCRhcnJheVB1c2godmFsdWVzLCBuZXh0VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG59KTtcblxuZGVsZXRlIEVTMjAxNy5FbnVtZXJhYmxlT3duTmFtZXM7IC8vIHJlcGxhY2VkIHdpdGggRW51bWVyYWJsZU93blByb3BlcnRpZXNcbmRlbGV0ZSBFUzIwMTcuSXRlcmFibGVUb0FycmF5TGlrZTsgLy8gcmVwbGFjZWQgd2l0aCBJdGVyYWJsZVRvTGlzdFxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTMjAxNztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTcuanNcbi8vIG1vZHVsZSBpZCA9IDU3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTdHJpbmcgPSBHZXRJbnRyaW5zaWMoJyVTdHJpbmclJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciBpc1Byb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvcicpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NhbGxCaW5kJyk7XG52YXIgc3RyU2xpY2UgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG5cbnZhciBpc1ByZWZpeE9mID0gZnVuY3Rpb24gaXNQcmVmaXhPZihwcmVmaXgsIHN0cmluZykge1xuXHRpZiAocHJlZml4ID09PSBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAocHJlZml4Lmxlbmd0aCA+IHN0cmluZy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHN0clNsaWNlKHN0cmluZywgMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeDtcbn07XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gJFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRyZXR1cm4gaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuMVxuXHRJc0FjY2Vzc29yRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSAmJiAhaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4yXG5cdElzRGF0YURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzRGF0YURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpICYmICFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuM1xuXHRJc0dlbmVyaWNEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSAmJiAhdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNFxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IERlc2NbJ1tbVmFsdWVdXSddLFxuXHRcdFx0XHR3cml0YWJsZTogISFEZXNjWydbW1dyaXRhYmxlXV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Z2V0OiBEZXNjWydbW0dldF1dJ10sXG5cdFx0XHRcdHNldDogRGVzY1snW1tTZXRdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdGcm9tUHJvcGVydHlEZXNjcmlwdG9yIG11c3QgYmUgY2FsbGVkIHdpdGggYSBmdWxseSBwb3B1bGF0ZWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC41XG5cdFRvUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBUb1Byb3BlcnR5RGVzY3JpcHRvcihPYmopIHtcblx0XHRpZiAodGhpcy5UeXBlKE9iaikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignVG9Qcm9wZXJ0eURlc2NyaXB0b3IgcmVxdWlyZXMgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2MgPSB7fTtcblx0XHRpZiAoaGFzKE9iaiwgJ2VudW1lcmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5lbnVtZXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdjb25maWd1cmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tDb25maWd1cmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmNvbmZpZ3VyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAndmFsdWUnKSkge1xuXHRcdFx0ZGVzY1snW1tWYWx1ZV1dJ10gPSBPYmoudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnd3JpdGFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tXcml0YWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmoud3JpdGFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2dldCcpKSB7XG5cdFx0XHR2YXIgZ2V0dGVyID0gT2JqLmdldDtcblx0XHRcdGlmICh0eXBlb2YgZ2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKGdldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tHZXRdXSddID0gZ2V0dGVyO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3NldCcpKSB7XG5cdFx0XHR2YXIgc2V0dGVyID0gT2JqLnNldDtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKHNldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ3NldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGRlc2NbJ1tbU2V0XV0nXSA9IHNldHRlcjtcblx0XHR9XG5cblx0XHRpZiAoKGhhcyhkZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhkZXNjLCAnW1tTZXRdXScpKSAmJiAoaGFzKGRlc2MsICdbW1ZhbHVlXV0nKSB8fCBoYXMoZGVzYywgJ1tbV3JpdGFibGVdXScpKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0ludmFsaWQgcHJvcGVydHkgZGVzY3JpcHRvci4gQ2Fubm90IGJvdGggc3BlY2lmeSBhY2Nlc3NvcnMgYW5kIGEgdmFsdWUgb3Igd3JpdGFibGUgYXR0cmlidXRlJyk7XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtMTEuOS4zXG5cdCdBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gQWJzdHJhY3RFcXVhbGl0eUNvbXBhcmlzb24oeCwgeSkge1xuXHRcdHZhciB4VHlwZSA9IHRoaXMuVHlwZSh4KTtcblx0XHR2YXIgeVR5cGUgPSB0aGlzLlR5cGUoeSk7XG5cdFx0aWYgKHhUeXBlID09PSB5VHlwZSkge1xuXHRcdFx0cmV0dXJuIHggPT09IHk7IC8vIEVTNisgc3BlY2lmaWVkIHRoaXMgc2hvcnRjdXQgYW55d2F5cy5cblx0XHR9XG5cdFx0aWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdOdW1iZXInICYmIHlUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnU3RyaW5nJyAmJiB5VHlwZSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub051bWJlcih4KSwgeSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9OdW1iZXIoeCksIHkpO1xuXHRcdH1cblx0XHRpZiAoeVR5cGUgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKCh4VHlwZSA9PT0gJ1N0cmluZycgfHwgeFR5cGUgPT09ICdOdW1iZXInKSAmJiB5VHlwZSA9PT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10oeCwgdGhpcy5Ub1ByaW1pdGl2ZSh5KSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ09iamVjdCcgJiYgKHlUeXBlID09PSAnU3RyaW5nJyB8fCB5VHlwZSA9PT0gJ051bWJlcicpKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9QcmltaXRpdmUoeCksIHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xMS45LjZcblx0J1N0cmljdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gU3RyaWN0RXF1YWxpdHlDb21wYXJpc29uKHgsIHkpIHtcblx0XHR2YXIgeFR5cGUgPSB0aGlzLlR5cGUoeCk7XG5cdFx0dmFyIHlUeXBlID0gdGhpcy5UeXBlKHkpO1xuXHRcdGlmICh4VHlwZSAhPT0geVR5cGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnVW5kZWZpbmVkJyB8fCB4VHlwZSA9PT0gJ051bGwnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHggPT09IHk7IC8vIHNob3J0Y3V0IGZvciBzdGVwcyA0LTdcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTExLjguNVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcblx0J0Fic3RyYWN0IFJlbGF0aW9uYWwgQ29tcGFyaXNvbic6IGZ1bmN0aW9uIEFic3RyYWN0UmVsYXRpb25hbENvbXBhcmlzb24oeCwgeSwgTGVmdEZpcnN0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShMZWZ0Rmlyc3QpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBMZWZ0Rmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0dmFyIHB4O1xuXHRcdHZhciBweTtcblx0XHRpZiAoTGVmdEZpcnN0KSB7XG5cdFx0XHRweCA9IHRoaXMuVG9QcmltaXRpdmUoeCwgJE51bWJlcik7XG5cdFx0XHRweSA9IHRoaXMuVG9QcmltaXRpdmUoeSwgJE51bWJlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB5ID0gdGhpcy5Ub1ByaW1pdGl2ZSh5LCAkTnVtYmVyKTtcblx0XHRcdHB4ID0gdGhpcy5Ub1ByaW1pdGl2ZSh4LCAkTnVtYmVyKTtcblx0XHR9XG5cdFx0dmFyIGJvdGhTdHJpbmdzID0gdGhpcy5UeXBlKHB4KSA9PT0gJ1N0cmluZycgJiYgdGhpcy5UeXBlKHB5KSA9PT0gJ1N0cmluZyc7XG5cdFx0aWYgKCFib3RoU3RyaW5ncykge1xuXHRcdFx0dmFyIG54ID0gdGhpcy5Ub051bWJlcihweCk7XG5cdFx0XHR2YXIgbnkgPSB0aGlzLlRvTnVtYmVyKHB5KTtcblx0XHRcdGlmICgkaXNOYU4obngpIHx8ICRpc05hTihueSkpIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkaXNGaW5pdGUobngpICYmICRpc0Zpbml0ZShueSkgJiYgbnggPT09IG55KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChueCA9PT0gMCAmJiBueSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnggPT09IEluZmluaXR5KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChueSA9PT0gSW5maW5pdHkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnkgPT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnggPT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBueCA8IG55OyAvLyBieSBub3csIHRoZXNlIGFyZSBib3RoIG5vbnplcm8sIGZpbml0ZSwgYW5kIG5vdCBlcXVhbFxuXHRcdH1cblx0XHRpZiAoaXNQcmVmaXhPZihweSwgcHgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChpc1ByZWZpeE9mKHB4LCBweSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gcHggPCBweTsgLy8gYm90aCBzdHJpbmdzLCBuZWl0aGVyIGEgcHJlZml4IG9mIHRoZSBvdGhlci4gc2hvcnRjdXQgZm9yIHN0ZXBzIGMtZlxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDU3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBldmVyeSA9IHJlcXVpcmUoJy4vZXZlcnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1NhbWVQcm9wZXJ0eURlc2NyaXB0b3IoRVMsIEQxLCBEMikge1xuXHR2YXIgZmllbGRzID0gW1xuXHRcdCdbW0NvbmZpZ3VyYWJsZV1dJyxcblx0XHQnW1tFbnVtZXJhYmxlXV0nLFxuXHRcdCdbW0dldF1dJyxcblx0XHQnW1tTZXRdXScsXG5cdFx0J1tbVmFsdWVdXScsXG5cdFx0J1tbV3JpdGFibGVdXSdcblx0XTtcblx0cmV0dXJuIGV2ZXJ5KGZpZWxkcywgZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0aWYgKChmaWVsZCBpbiBEMSkgIT09IChmaWVsZCBpbiBEMikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIEVTLlNhbWVWYWx1ZShEMVtmaWVsZF0sIEQyW2ZpZWxkXSk7XG5cdH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzU2FtZVByb3BlcnR5RGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cblx0cmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoYXJndW1lbnRzWzFdID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDU3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTIuOFxudmFyIEVTNWludGVybmFsU2xvdHMgPSB7XG5cdCdbW0RlZmF1bHRWYWx1ZV1dJzogZnVuY3Rpb24gKE8pIHtcblx0XHR2YXIgYWN0dWFsSGludDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFjdHVhbEhpbnQgPSBhcmd1bWVudHNbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdHVhbEhpbnQgPSB0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjFcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0LCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLWludmFsaWQtdGhpczogMSAqL1xuXG52YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxudmFyIGNvbmNhdHR5ID0gZnVuY3Rpb24gY29uY2F0dHkoYSwgYikge1xuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJbaV0gPSBhW2ldO1xuICAgIH1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGIubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYXJyW2ogKyBhLmxlbmd0aF0gPSBiW2pdO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG59O1xuXG52YXIgc2xpY3kgPSBmdW5jdGlvbiBzbGljeShhcnJMaWtlLCBvZmZzZXQpIHtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yICh2YXIgaSA9IG9mZnNldCB8fCAwLCBqID0gMDsgaSA8IGFyckxpa2UubGVuZ3RoOyBpICs9IDEsIGogKz0gMSkge1xuICAgICAgICBhcnJbal0gPSBhcnJMaWtlW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufTtcblxudmFyIGpvaW55ID0gZnVuY3Rpb24gKGFyciwgam9pbmVyKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBhcnJbaV07XG4gICAgICAgIGlmIChpICsgMSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0ciArPSBqb2luZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuYXBwbHkodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljeShhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBjb25jYXR0eShhcmdzLCBhcmd1bWVudHMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICBjb25jYXR0eShhcmdzLCBhcmd1bWVudHMpXG4gICAgICAgICk7XG5cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gbWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3NbaV0gPSAnJCcgKyBpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBqb2lueShib3VuZEFyZ3MsICcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG52YXIgZ2xvYmFsS2V5ID0gJ19fIGdsb2JhbCBjYWNoZSBrZXkgX18nO1xuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGlzU3ltYm9sKFN5bWJvbCgnZm9vJykpICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcblx0Z2xvYmFsS2V5ID0gU3ltYm9sWydmb3InXShnbG9iYWxLZXkpO1xufVxuXG52YXIgdHJ1ZVRodW5rID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBlbnN1cmVDYWNoZSA9IGZ1bmN0aW9uIGVuc3VyZUNhY2hlKCkge1xuXHRpZiAoIWdsb2JhbFtnbG9iYWxLZXldKSB7XG5cdFx0dmFyIHByb3BlcnRpZXMgPSB7fTtcblx0XHRwcm9wZXJ0aWVzW2dsb2JhbEtleV0gPSB7fTtcblx0XHR2YXIgcHJlZGljYXRlcyA9IHt9O1xuXHRcdHByZWRpY2F0ZXNbZ2xvYmFsS2V5XSA9IHRydWVUaHVuaztcblx0XHRkZWZpbmUoZ2xvYmFsLCBwcm9wZXJ0aWVzLCBwcmVkaWNhdGVzKTtcblx0fVxuXHRyZXR1cm4gZ2xvYmFsW2dsb2JhbEtleV07XG59O1xuXG52YXIgY2FjaGUgPSBlbnN1cmVDYWNoZSgpO1xuXG52YXIgaXNQcmltaXRpdmUgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWwpIHtcblx0cmV0dXJuIHZhbCA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG52YXIgZ2V0UHJpbWl0aXZlS2V5ID0gZnVuY3Rpb24gZ2V0UHJpbWl0aXZlS2V5KHZhbCkge1xuXHRpZiAoaXNTeW1ib2wodmFsKSkge1xuXHRcdHJldHVybiBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwpO1xuXHR9XG5cdHJldHVybiB0eXBlb2YgdmFsICsgJyB8ICcgKyBTdHJpbmcodmFsKTtcbn07XG5cbnZhciByZXF1aXJlUHJpbWl0aXZlS2V5ID0gZnVuY3Rpb24gcmVxdWlyZVByaW1pdGl2ZUtleSh2YWwpIHtcblx0aWYgKCFpc1ByaW1pdGl2ZSh2YWwpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigna2V5IG11c3Qgbm90IGJlIGFuIG9iamVjdCcpO1xuXHR9XG59O1xuXG52YXIgZ2xvYmFsQ2FjaGUgPSB7XG5cdGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcblx0XHRkZWxldGUgZ2xvYmFsW2dsb2JhbEtleV07XG5cdFx0Y2FjaGUgPSBlbnN1cmVDYWNoZSgpO1xuXHR9LFxuXG5cdCdkZWxldGUnOiBmdW5jdGlvbiBkZWxldGVLZXkoa2V5KSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdGRlbGV0ZSBjYWNoZVtnZXRQcmltaXRpdmVLZXkoa2V5KV07XG5cdFx0cmV0dXJuICFnbG9iYWxDYWNoZS5oYXMoa2V5KTtcblx0fSxcblxuXHRnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcblx0XHRyZXF1aXJlUHJpbWl0aXZlS2V5KGtleSk7XG5cdFx0cmV0dXJuIGNhY2hlW2dldFByaW1pdGl2ZUtleShrZXkpXTtcblx0fSxcblxuXHRoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcblx0XHRyZXF1aXJlUHJpbWl0aXZlS2V5KGtleSk7XG5cdFx0cmV0dXJuIGdldFByaW1pdGl2ZUtleShrZXkpIGluIGNhY2hlO1xuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0XHRyZXF1aXJlUHJpbWl0aXZlS2V5KGtleSk7XG5cdFx0dmFyIHByaW1pdGl2ZUtleSA9IGdldFByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHZhciBwcm9wcyA9IHt9O1xuXHRcdHByb3BzW3ByaW1pdGl2ZUtleV0gPSB2YWx1ZTtcblx0XHR2YXIgcHJlZGljYXRlcyA9IHt9O1xuXHRcdHByZWRpY2F0ZXNbcHJpbWl0aXZlS2V5XSA9IHRydWVUaHVuaztcblx0XHRkZWZpbmUoY2FjaGUsIHByb3BzLCBwcmVkaWNhdGVzKTtcblx0XHRyZXR1cm4gZ2xvYmFsQ2FjaGUuaGFzKGtleSk7XG5cdH0sXG5cblx0c2V0SWZNaXNzaW5nVGhlbkdldDogZnVuY3Rpb24gc2V0SWZNaXNzaW5nVGhlbkdldChrZXksIHZhbHVlVGh1bmspIHtcblx0XHRpZiAoZ2xvYmFsQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiBnbG9iYWxDYWNoZS5nZXQoa2V5KTtcblx0XHR9XG5cdFx0dmFyIGl0ZW0gPSB2YWx1ZVRodW5rKCk7XG5cdFx0Z2xvYmFsQ2FjaGUuc2V0KGtleSwgaXRlbSk7XG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xvYmFsLWNhY2hlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE3XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvc2hhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBlbXB0eSAobnVsbC1sb2FkZXIpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRhdGVzL2xpYi9jc3MvX2RhdGVwaWNrZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGhhc01hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgTWFwLnByb3RvdHlwZTtcbnZhciBtYXBTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzTWFwID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihNYXAucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBtYXBTaXplID0gaGFzTWFwICYmIG1hcFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBtYXBTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBtYXBTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIG1hcEZvckVhY2ggPSBoYXNNYXAgJiYgTWFwLnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgJiYgU2V0LnByb3RvdHlwZTtcbnZhciBzZXRTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzU2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihTZXQucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBzZXRTaXplID0gaGFzU2V0ICYmIHNldFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBzZXRTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBzZXRTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIHNldEZvckVhY2ggPSBoYXNTZXQgJiYgU2V0LnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGJvb2xlYW5WYWx1ZU9mID0gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZjtcbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgYmlnSW50VmFsdWVPZiA9IHR5cGVvZiBCaWdJbnQgPT09ICdmdW5jdGlvbicgPyBCaWdJbnQucHJvdG90eXBlLnZhbHVlT2YgOiBudWxsO1xuXG52YXIgaW5zcGVjdEN1c3RvbSA9IHJlcXVpcmUoJy4vdXRpbC5pbnNwZWN0JykuY3VzdG9tO1xudmFyIGluc3BlY3RTeW1ib2wgPSAoaW5zcGVjdEN1c3RvbSAmJiBpc1N5bWJvbChpbnNwZWN0Q3VzdG9tKSkgPyBpbnNwZWN0Q3VzdG9tIDogbnVsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnNwZWN0XyAob2JqLCBvcHRzLCBkZXB0aCwgc2Vlbikge1xuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG4gICAgaWYgKGhhcyhvcHRzLCAncXVvdGVTdHlsZScpICYmIChvcHRzLnF1b3RlU3R5bGUgIT09ICdzaW5nbGUnICYmIG9wdHMucXVvdGVTdHlsZSAhPT0gJ2RvdWJsZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcInF1b3RlU3R5bGVcIiBtdXN0IGJlIFwic2luZ2xlXCIgb3IgXCJkb3VibGVcIicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgfVxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gb2JqID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcob2JqLCBvcHRzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAob2JqID09PSAwKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eSAvIG9iaiA+IDAgPyAnMCcgOiAnLTAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFN0cmluZyhvYmopO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHJldHVybiBTdHJpbmcob2JqKSArICduJztcbiAgICB9XG5cbiAgICB2YXIgbWF4RGVwdGggPSB0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogb3B0cy5kZXB0aDtcbiAgICBpZiAodHlwZW9mIGRlcHRoID09PSAndW5kZWZpbmVkJykgZGVwdGggPSAwO1xuICAgIGlmIChkZXB0aCA+PSBtYXhEZXB0aCAmJiBtYXhEZXB0aCA+IDAgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuICdbT2JqZWN0XSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWVuID09PSAndW5kZWZpbmVkJykgc2VlbiA9IFtdO1xuICAgIGVsc2UgaWYgKGluZGV4T2Yoc2Vlbiwgb2JqKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdCAodmFsdWUsIGZyb20pIHtcbiAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgIHNlZW4gPSBzZWVuLnNsaWNlKCk7XG4gICAgICAgICAgICBzZWVuLnB1c2goZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBvcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZU9mKG9iaik7XG4gICAgICAgIHJldHVybiAnW0Z1bmN0aW9uJyArIChuYW1lID8gJzogJyArIG5hbWUgOiAnJykgKyAnXSc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChvYmopKSB7XG4gICAgICAgIHZhciBzeW1TdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnID8gbWFya0JveGVkKHN5bVN0cmluZykgOiBzeW1TdHJpbmc7XG4gICAgfVxuICAgIGlmIChpc0VsZW1lbnQob2JqKSkge1xuICAgICAgICB2YXIgcyA9ICc8JyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBhdHRycyA9IG9iai5hdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzICs9ICcgJyArIGF0dHJzW2ldLm5hbWUgKyAnPScgKyB3cmFwUXVvdGVzKHF1b3RlKGF0dHJzW2ldLnZhbHVlKSwgJ2RvdWJsZScsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gJz4nO1xuICAgICAgICBpZiAob2JqLmNoaWxkTm9kZXMgJiYgb2JqLmNoaWxkTm9kZXMubGVuZ3RoKSBzICs9ICcuLi4nO1xuICAgICAgICBzICs9ICc8LycgKyBTdHJpbmcob2JqLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpICsgJz4nO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAob2JqLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdbXSc7XG4gICAgICAgIHJldHVybiAnWyAnICsgYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpLmpvaW4oJywgJykgKyAnIF0nO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcihvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdbJyArIFN0cmluZyhvYmopICsgJ10nO1xuICAgICAgICByZXR1cm4gJ3sgWycgKyBTdHJpbmcob2JqKSArICddICcgKyBwYXJ0cy5qb2luKCcsICcpICsgJyB9JztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpbnNwZWN0U3ltYm9sICYmIHR5cGVvZiBvYmpbaW5zcGVjdFN5bWJvbF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbaW5zcGVjdFN5bWJvbF0oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqLmluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaW5zcGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc01hcChvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBtYXBGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgcGFydHMucHVzaChpbnNwZWN0KGtleSwgb2JqKSArICcgPT4gJyArIGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignTWFwJywgbWFwU2l6ZS5jYWxsKG9iaiksIHBhcnRzKTtcbiAgICB9XG4gICAgaWYgKGlzU2V0KG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIHNldEZvckVhY2guY2FsbChvYmosIGZ1bmN0aW9uICh2YWx1ZSApIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5zcGVjdCh2YWx1ZSwgb2JqKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbk9mKCdTZXQnLCBzZXRTaXplLmNhbGwob2JqKSwgcGFydHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoTnVtYmVyKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKGlzQmlnSW50KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KGJpZ0ludFZhbHVlT2YuY2FsbChvYmopKSk7XG4gICAgfVxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGJvb2xlYW5WYWx1ZU9mLmNhbGwob2JqKSk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChTdHJpbmcob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoIWlzRGF0ZShvYmopICYmICFpc1JlZ0V4cChvYmopKSB7XG4gICAgICAgIHZhciB4cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgaWYgKHhzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICd7fSc7XG4gICAgICAgIHJldHVybiAneyAnICsgeHMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcob2JqKTtcbn07XG5cbmZ1bmN0aW9uIHdyYXBRdW90ZXMgKHMsIGRlZmF1bHRTdHlsZSwgb3B0cykge1xuICAgIHZhciBxdW90ZUNoYXIgPSAob3B0cy5xdW90ZVN0eWxlIHx8IGRlZmF1bHRTdHlsZSkgPT09ICdkb3VibGUnID8gJ1wiJyA6IFwiJ1wiO1xuICAgIHJldHVybiBxdW90ZUNoYXIgKyBzICsgcXVvdGVDaGFyO1xufVxuXG5mdW5jdGlvbiBxdW90ZSAocykge1xuICAgIHJldHVybiBTdHJpbmcocykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7IH1cbmZ1bmN0aW9uIGlzRGF0ZSAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBEYXRlXSc7IH1cbmZ1bmN0aW9uIGlzUmVnRXhwIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nOyB9XG5mdW5jdGlvbiBpc0Vycm9yIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEVycm9yXSc7IH1cbmZ1bmN0aW9uIGlzU3ltYm9sIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFN5bWJvbF0nOyB9XG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBTdHJpbmddJzsgfVxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7IH1cbmZ1bmN0aW9uIGlzQmlnSW50IChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEJpZ0ludF0nOyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4gKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nOyB9XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5IHx8IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSBpbiB0aGlzOyB9O1xuZnVuY3Rpb24gaGFzIChvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIGtleSk7XG59XG5cbmZ1bmN0aW9uIHRvU3RyIChvYmopIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBuYW1lT2YgKGYpIHtcbiAgICBpZiAoZi5uYW1lKSByZXR1cm4gZi5uYW1lO1xuICAgIHZhciBtID0gU3RyaW5nKGYpLm1hdGNoKC9eZnVuY3Rpb25cXHMqKFtcXHckXSspLyk7XG4gICAgaWYgKG0pIHJldHVybiBtWzFdO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mICh4cywgeCkge1xuICAgIGlmICh4cy5pbmRleE9mKSByZXR1cm4geHMuaW5kZXhPZih4KTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoeHNbaV0gPT09IHgpIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGlzTWFwICh4KSB7XG4gICAgaWYgKCFtYXBTaXplKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgbWFwU2l6ZS5jYWxsKHgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0U2l6ZS5jYWxsKHgpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIE1hcDsgLy8gY29yZS1qcyB3b3JrYXJvdW5kLCBwcmUtdjIuNS4wXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzU2V0ICh4KSB7XG4gICAgaWYgKCFzZXRTaXplKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgc2V0U2l6ZS5jYWxsKHgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWFwU2l6ZS5jYWxsKHgpO1xuICAgICAgICB9IGNhdGNoIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFNldDsgLy8gY29yZS1qcyB3b3JrYXJvdW5kLCBwcmUtdjIuNS4wXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudCAoeCkge1xuICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB4IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgeC5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgdHlwZW9mIHguZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nXG4gICAgO1xufVxuXG5mdW5jdGlvbiBpbnNwZWN0U3RyaW5nIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgcyA9IHN0ci5yZXBsYWNlKC8oWydcXFxcXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1tcXHgwMC1cXHgxZl0vZywgbG93Ynl0ZSk7XG4gICAgcmV0dXJuIHdyYXBRdW90ZXMocywgJ3NpbmdsZScsIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBsb3dieXRlIChjKSB7XG4gICAgdmFyIG4gPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIHggPSB7IDg6ICdiJywgOTogJ3QnLCAxMDogJ24nLCAxMjogJ2YnLCAxMzogJ3InIH1bbl07XG4gICAgaWYgKHgpIHJldHVybiAnXFxcXCcgKyB4O1xuICAgIHJldHVybiAnXFxcXHgnICsgKG4gPCAweDEwID8gJzAnIDogJycpICsgbi50b1N0cmluZygxNik7XG59XG5cbmZ1bmN0aW9uIG1hcmtCb3hlZCAoc3RyKSB7XG4gICAgcmV0dXJuICdPYmplY3QoJyArIHN0ciArICcpJztcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mICh0eXBlLCBzaXplLCBlbnRyaWVzKSB7XG4gICAgcmV0dXJuIHR5cGUgKyAnICgnICsgc2l6ZSArICcpIHsnICsgZW50cmllcy5qb2luKCcsICcpICsgJ30nO1xufVxuXG5mdW5jdGlvbiBhcnJPYmpLZXlzIChvYmosIGluc3BlY3QpIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KG9iaik7XG4gICAgdmFyIHhzID0gW107XG4gICAgaWYgKGlzQXJyKSB7XG4gICAgICAgIHhzLmxlbmd0aCA9IG9iai5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4c1tpXSA9IGhhcyhvYmosIGkpID8gaW5zcGVjdChvYmpbaV0sIG9iaikgOiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmICghaGFzKG9iaiwga2V5KSkgY29udGludWU7XG4gICAgICAgIGlmIChpc0FyciAmJiBTdHJpbmcoTnVtYmVyKGtleSkpID09PSBrZXkgJiYga2V5IDwgb2JqLmxlbmd0aCkgY29udGludWU7XG4gICAgICAgIGlmICgvW15cXHckXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICB4cy5wdXNoKGluc3BlY3Qoa2V5LCBvYmopICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeHMucHVzaChrZXkgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHhzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1pbnNwZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCd1dGlsJykuaW5zcGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtaW5zcGVjdC91dGlsLmluc3BlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDYyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5yZXF1aXJlKCcuL2xpYi9pbml0aWFsaXplJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3JlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbigwLCBfcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lW1wiZGVmYXVsdFwiXSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZGF0ZXMvbGliL2luaXRpYWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDYzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGNvcmUgPSB7XG4gIHdoaXRlOiAnI2ZmZicsXG4gIGdyYXk6ICcjNDg0ODQ4JyxcbiAgZ3JheUxpZ2h0OiAnIzgyODg4YScsXG4gIGdyYXlMaWdodGVyOiAnI2NhY2NjZCcsXG4gIGdyYXlMaWdodGVzdDogJyNmMmYyZjInLFxuICBib3JkZXJNZWRpdW06ICcjYzRjNGM0JyxcbiAgYm9yZGVyOiAnI2RiZGJkYicsXG4gIGJvcmRlckxpZ2h0OiAnI2U0ZTdlNycsXG4gIGJvcmRlckxpZ2h0ZXI6ICcjZWNlZWVlJyxcbiAgYm9yZGVyQnJpZ2h0OiAnI2Y0ZjVmNScsXG4gIHByaW1hcnk6ICcjMDBhNjk5JyxcbiAgcHJpbWFyeVNoYWRlXzE6ICcjMzNkYWNkJyxcbiAgcHJpbWFyeVNoYWRlXzI6ICcjNjZlMmRhJyxcbiAgcHJpbWFyeVNoYWRlXzM6ICcjODBlOGUwJyxcbiAgcHJpbWFyeVNoYWRlXzQ6ICcjYjJmMWVjJyxcbiAgcHJpbWFyeV9kYXJrOiAnIzAwODQ4OScsXG4gIHNlY29uZGFyeTogJyMwMDdhODcnLFxuICB5ZWxsb3c6ICcjZmZlOGJjJyxcbiAgeWVsbG93X2Rhcms6ICcjZmZjZTcxJ1xufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmVhY3REYXRlczoge1xuICAgIHpJbmRleDogMCxcbiAgICBib3JkZXI6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyVG9wOiAwLFxuICAgICAgICBib3JkZXJSaWdodDogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgYm9yZGVyTGVmdDogMCxcbiAgICAgICAgb3V0bGluZUZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlckZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlclRvcEZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlckxlZnRGb2N1c2VkOiAwLFxuICAgICAgICBib3JkZXJCb3R0b21Gb2N1c2VkOiBcIjJweCBzb2xpZCBcIi5jb25jYXQoY29yZS5wcmltYXJ5X2RhcmspLFxuICAgICAgICBib3JkZXJSaWdodEZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgfSxcbiAgICAgIHBpY2tlcklucHV0OiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgY29yZTogY29yZSxcbiAgICAgIGRpc2FibGVkOiBjb3JlLmdyYXlMaWdodGVzdCxcbiAgICAgIGJhY2tncm91bmQ6IGNvcmUud2hpdGUsXG4gICAgICBiYWNrZ3JvdW5kRGFyazogJyNmMmYyZjInLFxuICAgICAgYmFja2dyb3VuZEZvY3VzZWQ6IGNvcmUud2hpdGUsXG4gICAgICBib3JkZXI6ICdyZ2IoMjE5LCAyMTksIDIxOSknLFxuICAgICAgdGV4dDogY29yZS5ncmF5LFxuICAgICAgdGV4dERpc2FibGVkOiBjb3JlLmJvcmRlcixcbiAgICAgIHRleHRGb2N1c2VkOiAnIzAwN2E4NycsXG4gICAgICBwbGFjZWhvbGRlclRleHQ6ICcjNzU3NTc1JyxcbiAgICAgIG91dHNpZGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUud2hpdGUsXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXksXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5ncmF5LFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS5ncmF5XG4gICAgICB9LFxuICAgICAgaGlnaGxpZ2h0ZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLnllbGxvdyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2FjdGl2ZTogY29yZS55ZWxsb3dfZGFyayxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLnllbGxvd19kYXJrLFxuICAgICAgICBjb2xvcjogY29yZS5ncmF5LFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheSxcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUuZ3JheVxuICAgICAgfSxcbiAgICAgIG1pbmltdW1OaWdodHM6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUud2hpdGUsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb3JlLmJvcmRlckxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyXG4gICAgICB9LFxuICAgICAgaG92ZXJlZFNwYW46IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLnByaW1hcnlTaGFkZV80LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLnByaW1hcnlTaGFkZV8zLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUucHJpbWFyeVNoYWRlXzQsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb3JlLnByaW1hcnlTaGFkZV8zLFxuICAgICAgICBib3JkZXJDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeVNoYWRlXzMsXG4gICAgICAgIGJvcmRlckNvbG9yX2hvdmVyOiBjb3JlLnByaW1hcnlTaGFkZV8zLFxuICAgICAgICBjb2xvcjogY29yZS5zZWNvbmRhcnksXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5zZWNvbmRhcnksXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLnNlY29uZGFyeVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkU3Bhbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUucHJpbWFyeVNoYWRlXzIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeVNoYWRlXzEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5U2hhZGVfMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvcmUucHJpbWFyeVNoYWRlXzEsXG4gICAgICAgIGJvcmRlckNvbG9yX2FjdGl2ZTogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBjb2xvcjogY29yZS53aGl0ZSxcbiAgICAgICAgY29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS53aGl0ZVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeSxcbiAgICAgICAgYm9yZGVyQ29sb3JfaG92ZXI6IGNvcmUucHJpbWFyeSxcbiAgICAgICAgY29sb3I6IGNvcmUud2hpdGUsXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS53aGl0ZSxcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUud2hpdGVcbiAgICAgIH0sXG4gICAgICBibG9ja2VkX2NhbGVuZGFyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2FjdGl2ZTogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgYm9yZGVyQ29sb3JfYWN0aXZlOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBib3JkZXJDb2xvcl9ob3ZlcjogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgY29sb3I6IGNvcmUuZ3JheUxpZ2h0LFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0LFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS5ncmF5TGlnaHRcbiAgICAgIH0sXG4gICAgICBibG9ja2VkX291dF9vZl9yYW5nZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS53aGl0ZSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvcmUuYm9yZGVyTGlnaHQsXG4gICAgICAgIGJvcmRlckNvbG9yX2FjdGl2ZTogY29yZS5ib3JkZXJMaWdodCxcbiAgICAgICAgYm9yZGVyQ29sb3JfaG92ZXI6IGNvcmUuYm9yZGVyTGlnaHQsXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyXG4gICAgICB9XG4gICAgfSxcbiAgICBzcGFjaW5nOiB7XG4gICAgICBkYXlQaWNrZXJIb3Jpem9udGFsUGFkZGluZzogOSxcbiAgICAgIGNhcHRpb25QYWRkaW5nVG9wOiAyMixcbiAgICAgIGNhcHRpb25QYWRkaW5nQm90dG9tOiAzNyxcbiAgICAgIGlucHV0UGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1ZlcnRpY2FsOiB1bmRlZmluZWQsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdUb3A6IDExLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nQm90dG9tOiA5LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nSG9yaXpvbnRhbDogdW5kZWZpbmVkLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nTGVmdDogMTEsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdSaWdodDogMTEsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdWZXJ0aWNhbF9zbWFsbDogdW5kZWZpbmVkLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nVG9wX3NtYWxsOiA3LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nQm90dG9tX3NtYWxsOiA1LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nSG9yaXpvbnRhbF9zbWFsbDogdW5kZWZpbmVkLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nTGVmdF9zbWFsbDogNyxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1JpZ2h0X3NtYWxsOiA3XG4gICAgfSxcbiAgICBzaXppbmc6IHtcbiAgICAgIGlucHV0V2lkdGg6IDEzMCxcbiAgICAgIGlucHV0V2lkdGhfc21hbGw6IDk3LFxuICAgICAgYXJyb3dXaWR0aDogMjRcbiAgICB9LFxuICAgIG5vU2Nyb2xsQmFyT25WZXJ0aWNhbFNjcm9sbGFibGU6IGZhbHNlLFxuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IDE0LFxuICAgICAgY2FwdGlvblNpemU6IDE4LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgc2l6ZTogMTksXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgICAgc2l6ZV9zbWFsbDogMTUsXG4gICAgICAgIGxpbmVIZWlnaHRfc21hbGw6ICcxOHB4JyxcbiAgICAgICAgbGV0dGVyU3BhY2luZ19zbWFsbDogJzAuMnB4JyxcbiAgICAgICAgc3R5bGVEaXNhYmxlZDogJ2l0YWxpYydcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvdGhlbWUvRGVmYXVsdFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZTtcblxudmFyIF9yZWFjdFdpdGhTdHlsZXNJbnRlcmZhY2VDc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzXCIpKTtcblxudmFyIF9yZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUoKSB7XG4gICgwLCBfcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lW1wiZGVmYXVsdFwiXSkoX3JlYWN0V2l0aFN0eWxlc0ludGVyZmFjZUNzc1tcImRlZmF1bHRcIl0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvdXRpbHMvcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZTtcblxudmFyIF9UaGVtZWRTdHlsZVNoZWV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtd2l0aC1zdHlsZXMvbGliL1RoZW1lZFN0eWxlU2hlZXRcIikpO1xuXG52YXIgX0RlZmF1bHRUaGVtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RoZW1lL0RlZmF1bHRUaGVtZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUocmVhY3RXaXRoU3R5bGVzSW50ZXJmYWNlKSB7XG4gIF9UaGVtZWRTdHlsZVNoZWV0W1wiZGVmYXVsdFwiXS5yZWdpc3RlckludGVyZmFjZShyZWFjdFdpdGhTdHlsZXNJbnRlcmZhY2UpO1xuXG4gIF9UaGVtZWRTdHlsZVNoZWV0W1wiZGVmYXVsdFwiXS5yZWdpc3RlclRoZW1lKF9EZWZhdWx0VGhlbWVbXCJkZWZhdWx0XCJdKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZGF0ZXMvbGliL3V0aWxzL3JlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZS5qc1xuLy8gbW9kdWxlIGlkID0gNjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9FbGVtZW50cyA9IHJlcXVpcmUoJy4vRWxlbWVudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX2V4dHJhY3RPcHRpb25zID0gZnVuY3Rpb24gX2V4dHJhY3RPcHRpb25zKHByb3BzKSB7XG4gIHZhciBpZCA9IHByb3BzLmlkLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25SZWFkeSA9IHByb3BzLm9uUmVhZHksXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2lkJywgJ2NsYXNzTmFtZScsICdvbkNoYW5nZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvblJlYWR5J10pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxudmFyIGNhcGl0YWxpemVkID0gZnVuY3Rpb24gY2FwaXRhbGl6ZWQoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG52YXIgRWxlbWVudCA9IGZ1bmN0aW9uIEVsZW1lbnQodHlwZSkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgaG9jT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKF9jbGFzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBfY2xhc3MocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgX3RoaXMuaGFuZGxlUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICBfdGhpcy5fcmVmID0gcmVmO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF9leHRyYWN0T3B0aW9ucyhfdGhpcy5wcm9wcyk7XG4gICAgICAvLyBXZSBrZWVwIHRyYWNrIG9mIHRoZSBleHRyYWN0ZWQgb3B0aW9ucyBvbiB0aGlzLl9vcHRpb25zIHRvIGF2b2lkIHJlLXJlbmRlcmluZy5cbiAgICAgIC8vIChXZSB3b3VsZCB1bm5lY2Vzc2FyaWx5IHJlLXJlbmRlciBpZiB3ZSB3ZXJlIHRyYWNraW5nIHRoZW0gd2l0aCBzdGF0ZS4pXG4gICAgICBfdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuY29udGV4dC5hZGRFbGVtZW50c0xvYWRMaXN0ZW5lcihmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50cy5jcmVhdGUodHlwZSwgX3RoaXMyLl9vcHRpb25zKTtcbiAgICAgICAgX3RoaXMyLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBfdGhpczIuX3NldHVwRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCk7XG5cbiAgICAgICAgZWxlbWVudC5tb3VudChfdGhpczIuX3JlZik7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgRWxlbWVudCBmb3IgYXV0b21hdGljIHRva2VuIC8gc291cmNlIGNyZWF0aW9uXG4gICAgICAgIGlmIChob2NPcHRpb25zLmltcGxpZWRUb2tlblR5cGUgfHwgaG9jT3B0aW9ucy5pbXBsaWVkU291cmNlVHlwZSkge1xuICAgICAgICAgIF90aGlzMi5jb250ZXh0LnJlZ2lzdGVyRWxlbWVudChlbGVtZW50LCBob2NPcHRpb25zLmltcGxpZWRUb2tlblR5cGUsIGhvY09wdGlvbnMuaW1wbGllZFNvdXJjZVR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvcHRpb25zID0gX2V4dHJhY3RPcHRpb25zKG5leHRQcm9wcyk7XG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoICE9PSAwICYmICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkob3B0aW9ucywgdGhpcy5fb3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnVucmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfY2xhc3MucHJvdG90eXBlLl9zZXR1cEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldHVwRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnQub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25SZWFkeShfdGhpczMuX2VsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uQ2hhbmdlKGNoYW5nZSk7XG4gICAgICB9KTtcblxuICAgICAgZWxlbWVudC5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgICByZXR1cm4gKF9wcm9wcyA9IF90aGlzMy5wcm9wcykub25CbHVyLmFwcGx5KF9wcm9wcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcHJvcHMyO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzMiA9IF90aGlzMy5wcm9wcykub25Gb2N1cy5hcHBseShfcHJvcHMyLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jbGFzcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICByZWY6IHRoaXMuaGFuZGxlUmVmXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9jbGFzcztcbiAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvblJlYWR5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgfSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uQmx1cjogbm9vcCxcbiAgICBvbkZvY3VzOiBub29wLFxuICAgIG9uUmVhZHk6IG5vb3BcbiAgfSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IF9FbGVtZW50cy5lbGVtZW50Q29udGV4dFR5cGVzLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBjYXBpdGFsaXplZCh0eXBlKSArICdFbGVtZW50JywgX3RlbXA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9FbGVtZW50cyA9IHJlcXVpcmUoJy4vRWxlbWVudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX2V4dHJhY3RPcHRpb25zID0gZnVuY3Rpb24gX2V4dHJhY3RPcHRpb25zKHByb3BzKSB7XG4gIHZhciBpZCA9IHByb3BzLmlkLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uUmVhZHkgPSBwcm9wcy5vblJlYWR5LFxuICAgICAgcGF5bWVudFJlcXVlc3QgPSBwcm9wcy5wYXltZW50UmVxdWVzdCxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnaWQnLCAnY2xhc3NOYW1lJywgJ29uQmx1cicsICdvbkNsaWNrJywgJ29uRm9jdXMnLCAnb25SZWFkeScsICdwYXltZW50UmVxdWVzdCddKTtcblxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbnZhciBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuX3JlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0cmFjdE9wdGlvbnMocHJvcHMpO1xuICAgIC8vIFdlIGtlZXAgdHJhY2sgb2YgdGhlIGV4dHJhY3RlZCBvcHRpb25zIG9uIHRoaXMuX29wdGlvbnMgdG8gYXZvaWQgcmUtcmVuZGVyaW5nLlxuICAgIC8vIChXZSB3b3VsZCB1bm5lY2Vzc2FyaWx5IHJlLXJlbmRlciBpZiB3ZSB3ZXJlIHRyYWNraW5nIHRoZW0gd2l0aCBzdGF0ZS4pXG4gICAgX3RoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY29udGV4dC5hZGRFbGVtZW50c0xvYWRMaXN0ZW5lcihmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICAgIF90aGlzMi5fZWxlbWVudCA9IGVsZW1lbnRzLmNyZWF0ZSgncGF5bWVudFJlcXVlc3RCdXR0b24nLCBfZXh0ZW5kcyh7XG4gICAgICAgIHBheW1lbnRSZXF1ZXN0OiBfdGhpczIucHJvcHMucGF5bWVudFJlcXVlc3RcbiAgICAgIH0sIF90aGlzMi5fb3B0aW9ucykpO1xuICAgICAgX3RoaXMyLl9lbGVtZW50Lm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uUmVhZHkoX3RoaXMyLl9lbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMyLl9lbGVtZW50Lm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgICByZXR1cm4gKF9wcm9wcyA9IF90aGlzMi5wcm9wcykub25Gb2N1cy5hcHBseShfcHJvcHMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzMi5fZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcHJvcHMyO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzMiA9IF90aGlzMi5wcm9wcykub25DbGljay5hcHBseShfcHJvcHMyLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBfdGhpczIuX2VsZW1lbnQub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcHJvcHMzO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzMyA9IF90aGlzMi5wcm9wcykub25CbHVyLmFwcGx5KF9wcm9wczMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzMi5fZWxlbWVudC5tb3VudChfdGhpczIuX3JlZik7XG4gICAgfSk7XG4gIH07XG5cbiAgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXltZW50UmVxdWVzdCAhPT0gbmV4dFByb3BzLnBheW1lbnRSZXF1ZXN0KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIHByb3AgY2hhbmdlOiBwYXltZW50UmVxdWVzdCBpcyBub3QgYSBjdXN0b21pemFibGUgcHJvcGVydHkuJyk7XG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gX2V4dHJhY3RPcHRpb25zKG5leHRQcm9wcyk7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCAhPT0gMCAmJiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKG9wdGlvbnMsIHRoaXMuX29wdGlvbnMpKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuX2VsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5kZXN0cm95KCk7XG4gIH07XG5cbiAgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICByZWY6IHRoaXMuaGFuZGxlUmVmXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlYWR5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHBheW1lbnRSZXF1ZXN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjYW5NYWtlUGF5bWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQuZGVmYXVsdFByb3BzID0ge1xuICBpZDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgb25CbHVyOiBub29wLFxuICBvbkNsaWNrOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvblJlYWR5OiBub29wXG59O1xuUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LmNvbnRleHRUeXBlcyA9IF9FbGVtZW50cy5lbGVtZW50Q29udGV4dFR5cGVzO1xuZXhwb3J0cy5kZWZhdWx0ID0gUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9FbGVtZW50cyA9IHJlcXVpcmUoJy4vRWxlbWVudHMnKTtcblxudmFyIF9Qcm92aWRlciA9IHJlcXVpcmUoJy4vUHJvdmlkZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIHJlYWN0LXJlZHV4IGRvZXMgYSBidW5jaCBvZiBzdHVmZiB3aXRoIHB1cmUgY29tcG9uZW50cyAvIGNoZWNraW5nIGlmIGl0IG5lZWRzIHRvIHJlLXJlbmRlci5cbi8vIG5vdCBzdXJlIGlmIHdlIG5lZWQgdG8gZG8gdGhlIHNhbWUuXG52YXIgaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgdmFyIGNvbXBvbmVudE9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX2NvbXBvbmVudE9wdGlvbnMkd2l0ID0gY29tcG9uZW50T3B0aW9ucy53aXRoUmVmLFxuICAgICAgd2l0aFJlZiA9IF9jb21wb25lbnRPcHRpb25zJHdpdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfY29tcG9uZW50T3B0aW9ucyR3aXQ7XG5cblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhfY2xhc3MsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgaWYgKCFjb250ZXh0IHx8ICFjb250ZXh0LmdldFJlZ2lzdGVyZWRFbGVtZW50cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0IGxvb2tzIGxpa2UgeW91IGFyZSB0cnlpbmcgdG8gaW5qZWN0IFN0cmlwZSBjb250ZXh0IG91dHNpZGUgb2YgYW4gRWxlbWVudHMgY29udGV4dC5cXG5QbGVhc2UgYmUgc3VyZSB0aGUgY29tcG9uZW50IHRoYXQgY2FsbHMgY3JlYXRlU291cmNlIG9yIGNyZWF0ZVRva2VuIGlzIHdpdGhpbiBhbiA8RWxlbWVudHM+IGNvbXBvbmVudC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICAgIF90aGlzLmZpbmRFbGVtZW50ID0gZnVuY3Rpb24gKGZpbHRlckJ5LCBzcGVjaWZpZWRUeXBlKSB7XG4gICAgICAgIHZhciBhbGxFbGVtZW50cyA9IF90aGlzLmNvbnRleHQuZ2V0UmVnaXN0ZXJlZEVsZW1lbnRzKCk7XG4gICAgICAgIHZhciBmaWx0ZXJlZEVsZW1lbnRzID0gYWxsRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGVbZmlsdGVyQnldO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1hdGNoaW5nRWxlbWVudHMgPSBzcGVjaWZpZWRUeXBlID09PSAnYXV0bycgPyBmaWx0ZXJlZEVsZW1lbnRzIDogZmlsdGVyZWRFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZVtmaWx0ZXJCeV0gPT09IHNwZWNpZmllZFR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0VsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaGluZ0VsZW1lbnRzWzBdLmVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hpbmdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgZGlkIG5vdCBzcGVjaWZ5IHRoZSB0eXBlIG9mIFNvdXJjZSBvciBUb2tlbiB0byBjcmVhdGUuXFxuICAgICAgICBXZSBjb3VsZCBub3QgaW5mZXIgd2hpY2ggRWxlbWVudCB5b3Ugd2FudCB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZXF1aXJlRWxlbWVudCA9IGZ1bmN0aW9uIChmaWx0ZXJCeSwgc3BlY2lmaWVkVHlwZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmZpbmRFbGVtZW50KGZpbHRlckJ5LCBzcGVjaWZpZWRUeXBlKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBkaWQgbm90IHNwZWNpZnkgdGhlIHR5cGUgb2YgU291cmNlIG9yIFRva2VuIHRvIGNyZWF0ZS5cXG4gICAgICAgIFdlIGNvdWxkIG5vdCBpbmZlciB3aGljaCBFbGVtZW50IHlvdSB3YW50IHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLndyYXBwZWRDcmVhdGVUb2tlbiA9IGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdG9rZW5UeXBlT3JPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgICBpZiAodG9rZW5UeXBlT3JPcHRpb25zICYmICh0eXBlb2YgdG9rZW5UeXBlT3JPcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0b2tlblR5cGVPck9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0IGFyZ3VtZW50IGlzIG9wdGlvbnM7IGluZmVyIHRoZSBFbGVtZW50IGFuZCB0b2tlbml6ZVxuICAgICAgICAgICAgdmFyIG9wdHMgPSB0b2tlblR5cGVPck9wdGlvbnM7XG5cbiAgICAgICAgICAgIHZhciB0b2tlblR5cGUgPSBvcHRzLnR5cGUsXG4gICAgICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBbJ3R5cGUnXSk7XG5cbiAgICAgICAgICAgIHZhciBzcGVjaWZpZWRUeXBlID0gdHlwZW9mIHRva2VuVHlwZSA9PT0gJ3N0cmluZycgPyB0b2tlblR5cGUgOiAnYXV0byc7XG4gICAgICAgICAgICAvLyBTaW5jZSBvbmx5IG9wdGlvbnMgd2VyZSBwYXNzZWQgaW4sIGEgY29ycmVzcG9uZGluZyBFbGVtZW50IG11c3QgZXhpc3RcbiAgICAgICAgICAgIC8vIGZvciB0aGUgdG9rZW5pemF0aW9uIHRvIHN1Y2NlZWQgLS0gdGh1cyB3ZSBjYWxsIHJlcXVpcmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5yZXF1aXJlRWxlbWVudCgnaW1wbGllZFRva2VuVHlwZScsIHNwZWNpZmllZFR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmlwZS5jcmVhdGVUb2tlbihlbGVtZW50LCByZXN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0b2tlblR5cGVPck9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBhcmd1bWVudCBpcyB0b2tlbiB0eXBlOyB0b2tlbml6ZSB3aXRoIHRva2VuIHR5cGUgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIHZhciBfdG9rZW5UeXBlID0gdG9rZW5UeXBlT3JPcHRpb25zO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmlwZS5jcmVhdGVUb2tlbihfdG9rZW5UeXBlLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgYSBiYWQgdmFsdWUgd2FzIHBhc3NlZCBpbiBmb3Igb3B0aW9ucywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3B0aW9ucyBwYXNzZWQgdG8gY3JlYXRlVG9rZW4uIEV4cGVjdGVkIGFuIG9iamVjdCwgZ290ICcgKyAodHlwZW9mIHRva2VuVHlwZU9yT3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodG9rZW5UeXBlT3JPcHRpb25zKSkgKyAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLndyYXBwZWRDcmVhdGVTb3VyY2UgPSBmdW5jdGlvbiAoc3RyaXBlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMgJiYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFNvdXJjZSB0eXBlIHBhc3NlZCB0byBjcmVhdGVTb3VyY2UuIEV4cGVjdGVkIHN0cmluZywgZ290ICcgKyBfdHlwZW9mKG9wdGlvbnMudHlwZSkgKyAnLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmZpbmRFbGVtZW50KCdpbXBsaWVkU291cmNlVHlwZScsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAvLyBJZiBhbiBFbGVtZW50IGV4aXN0cyBmb3IgdGhlIHNvdXJjZSB0eXBlLCB1c2UgdGhhdCB0byBjcmVhdGUgdGhlXG4gICAgICAgICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgc291cmNlLlxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBOT1RFOiB0aGlzIHByZXZlbnRzIHVzZXJzIGZyb20gaW5kZXBlbmRlbnRseSBjcmVhdGluZyBzb3VyY2VzIG9mXG4gICAgICAgICAgICAgIC8vIHR5cGUgYGZvb2AgaWYgYW4gRWxlbWVudCB0aGF0IGNhbiBjcmVhdGUgYGZvb2Agc291cmNlcyBleGlzdHMgaW5cbiAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgPEVsZW1lbnRzIC8+IGNvbnRleHQuXG4gICAgICAgICAgICAgIHJldHVybiBzdHJpcGUuY3JlYXRlU291cmNlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gSWYgbm8gRWxlbWVudCBleGlzdHMgZm9yIHRoZSBzb3VyY2UgdHlwZSwgZGlyZWN0bHkgY3JlYXRlIGEgc291cmNlLlxuICAgICAgICAgICAgICByZXR1cm4gc3RyaXBlLmNyZWF0ZVNvdXJjZShvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgYSBiYWQgdmFsdWUgd2FzIHBhc3NlZCBpbiBmb3Igb3B0aW9ucywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3B0aW9ucyBwYXNzZWQgdG8gY3JlYXRlU291cmNlLiBFeHBlY3RlZCBhbiBvYmplY3QsIGdvdCAnICsgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgKyAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChfdGhpcy5jb250ZXh0LnRhZyA9PT0gJ3N5bmMnKSB7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHN0cmlwZTogX3RoaXMuc3RyaXBlUHJvcHMoX3RoaXMuY29udGV4dC5zdHJpcGUpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzdHJpcGU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY2xhc3MucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuY29udGV4dC50YWcgPT09ICdhc3luYycpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZFN0cmlwZUxvYWRMaXN0ZW5lcihmdW5jdGlvbiAoc3RyaXBlKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0cmlwZTogX3RoaXMyLnN0cmlwZVByb3BzKHN0cmlwZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuICdzeW5jJywgaXQncyBhbHJlYWR5IHNldCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB9XG4gICAgfTtcblxuICAgIF9jbGFzcy5wcm90b3R5cGUuZ2V0V3JhcHBlZEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgaWYgKCF3aXRoUmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB0aGUgYHt3aXRoUmVmOiB0cnVlfWAgb3B0aW9uIG11c3QgYmUgc2V0IHdoZW4gY2FsbGluZyBgaW5qZWN0U3RyaXBlKClgJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2U7XG4gICAgfTtcblxuICAgIF9jbGFzcy5wcm90b3R5cGUuc3RyaXBlUHJvcHMgPSBmdW5jdGlvbiBzdHJpcGVQcm9wcyhzdHJpcGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RyaXBlLCB7XG4gICAgICAgIC8vIFRoZXNlIGFyZSB0aGUgb25seSBmdW5jdGlvbnMgdGhhdCB0YWtlIGVsZW1lbnRzLlxuICAgICAgICBjcmVhdGVUb2tlbjogdGhpcy53cmFwcGVkQ3JlYXRlVG9rZW4oc3RyaXBlKSxcbiAgICAgICAgY3JlYXRlU291cmNlOiB0aGlzLndyYXBwZWRDcmVhdGVTb3VyY2Uoc3RyaXBlKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEZpbmRzIGFuIEVsZW1lbnQgYnkgdGhlIHNwZWNpZmllZCB0eXBlLCBpZiBvbmUgZXhpc3RzLlxuICAgIC8vIFRocm93cyBpZiBtdWx0aXBsZSBFbGVtZW50cyBtYXRjaC5cblxuXG4gICAgLy8gUmVxdWlyZSB0aGF0IGV4YWN0bHkgb25lIEVsZW1lbnQgaXMgZm91bmQgZm9yIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAgICAvLyBUaHJvd3MgaWYgbm8gRWxlbWVudCBpcyBmb3VuZC5cblxuXG4gICAgLy8gV3JhcHMgY3JlYXRlVG9rZW4gaW4gb3JkZXIgdG8gaW5mZXIgdGhlIEVsZW1lbnQgdGhhdCBpcyBiZWluZyB0b2tlbml6ZWQuXG5cblxuICAgIC8vIFdyYXBzIGNyZWF0ZVNvdXJjZSBpbiBvcmRlciB0byBpbmZlciB0aGUgRWxlbWVudCB0aGF0IGlzIGJlaW5nIHVzZWQgZm9yXG4gICAgLy8gc291cmNlIGNyZWF0aW9uLlxuXG5cbiAgICBfY2xhc3MucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgc3RyaXBlOiB0aGlzLnN0YXRlLnN0cmlwZSxcbiAgICAgICAgcmVmOiB3aXRoUmVmID8gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICBfdGhpczMud3JhcHBlZEluc3RhbmNlID0gYztcbiAgICAgICAgfSA6IG51bGxcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9jbGFzcztcbiAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IF9leHRlbmRzKHt9LCBfUHJvdmlkZXIucHJvdmlkZXJDb250ZXh0VHlwZXMsIF9FbGVtZW50cy5pbmplY3RDb250ZXh0VHlwZXMpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSAnSW5qZWN0U3RyaXBlKCcgKyAoV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCcpICsgJyknLCBfdGVtcDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGluamVjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9jb21wb25lbnRzL2luamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSWRlYWxCYW5rRWxlbWVudCA9IGV4cG9ydHMuSWJhbkVsZW1lbnQgPSBleHBvcnRzLlBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IGV4cG9ydHMuUG9zdGFsQ29kZUVsZW1lbnQgPSBleHBvcnRzLkNhcmRDVkNFbGVtZW50ID0gZXhwb3J0cy5DYXJkRXhwaXJ5RWxlbWVudCA9IGV4cG9ydHMuQ2FyZE51bWJlckVsZW1lbnQgPSBleHBvcnRzLkNhcmRFbGVtZW50ID0gZXhwb3J0cy5FbGVtZW50cyA9IGV4cG9ydHMuaW5qZWN0U3RyaXBlID0gZXhwb3J0cy5TdHJpcGVQcm92aWRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Qcm92aWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Qcm92aWRlcicpO1xuXG52YXIgX1Byb3ZpZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb3ZpZGVyKTtcblxudmFyIF9pbmplY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5qZWN0Jyk7XG5cbnZhciBfaW5qZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luamVjdCk7XG5cbnZhciBfRWxlbWVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRWxlbWVudHMnKTtcblxudmFyIF9FbGVtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbGVtZW50cyk7XG5cbnZhciBfRWxlbWVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9FbGVtZW50Jyk7XG5cbnZhciBfRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbGVtZW50KTtcblxudmFyIF9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50Jyk7XG5cbnZhciBfUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIERlZmluZSBFbGVtZW50cywgYW5kIHJlZ2lzdGVyIHRoZWlyIGltcGxpZWQgdG9rZW4gLyBzb3VyY2UgdHlwZXMgZm9yXG4vLyBhdXRvbWF0aWMgdG9rZW4gLyBzb3VyY2UgY3JlYXRpb24uXG5cbi8vIENhcmRcbnZhciBDYXJkRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2NhcmQnLCB7XG4gIGltcGxpZWRUb2tlblR5cGU6ICdjYXJkJyxcbiAgaW1wbGllZFNvdXJjZVR5cGU6ICdjYXJkJ1xufSk7XG5cbi8vIFNwbGl0IEZpZWxkc1xuLy8gTm90ZTogd2Ugb25seSByZWdpc3RlciB0aGUgQ2FyZE51bWJlckVsZW1lbnQgZm9yIHNwbGl0IGZpZWxkcyBzbyB0aGF0IHdlIGhhdmVcbi8vIGEgdW5pcXVlIEVsZW1lbnQgdG8gaW5mZXIgd2hlbiBjYWxsaW5nIGB3cmFwcGVkQ3JlYXRlVG9rZW5gIG9yIGB3cmFwcGVkQ3JlYXRlU291cmNlYC5cblxudmFyIENhcmROdW1iZXJFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnY2FyZE51bWJlcicsIHtcbiAgaW1wbGllZFRva2VuVHlwZTogJ2NhcmQnLFxuICBpbXBsaWVkU291cmNlVHlwZTogJ2NhcmQnXG59KTtcbnZhciBDYXJkRXhwaXJ5RWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2NhcmRFeHBpcnknKTtcbnZhciBDYXJkQ1ZDRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2NhcmRDdmMnKTtcbnZhciBQb3N0YWxDb2RlRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ3Bvc3RhbENvZGUnKTtcblxuLy8gSUJBTlxudmFyIEliYW5FbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnaWJhbicsIHtcbiAgaW1wbGllZFRva2VuVHlwZTogJ2JhbmtfYWNjb3VudCcsXG4gIGltcGxpZWRTb3VyY2VUeXBlOiAnc2VwYV9kZWJpdCdcbn0pO1xuXG4vLyBpREVBTCBCYW5rXG52YXIgSWRlYWxCYW5rRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2lkZWFsQmFuaycsIHsgaW1wbGllZFNvdXJjZVR5cGU6ICdpZGVhbCcgfSk7XG5cbmV4cG9ydHMuU3RyaXBlUHJvdmlkZXIgPSBfUHJvdmlkZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmluamVjdFN0cmlwZSA9IF9pbmplY3QyLmRlZmF1bHQ7XG5leHBvcnRzLkVsZW1lbnRzID0gX0VsZW1lbnRzMi5kZWZhdWx0O1xuZXhwb3J0cy5DYXJkRWxlbWVudCA9IENhcmRFbGVtZW50O1xuZXhwb3J0cy5DYXJkTnVtYmVyRWxlbWVudCA9IENhcmROdW1iZXJFbGVtZW50O1xuZXhwb3J0cy5DYXJkRXhwaXJ5RWxlbWVudCA9IENhcmRFeHBpcnlFbGVtZW50O1xuZXhwb3J0cy5DYXJkQ1ZDRWxlbWVudCA9IENhcmRDVkNFbGVtZW50O1xuZXhwb3J0cy5Qb3N0YWxDb2RlRWxlbWVudCA9IFBvc3RhbENvZGVFbGVtZW50O1xuZXhwb3J0cy5QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQgPSBfUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50Mi5kZWZhdWx0O1xuZXhwb3J0cy5JYmFuRWxlbWVudCA9IEliYW5FbGVtZW50O1xuZXhwb3J0cy5JZGVhbEJhbmtFbGVtZW50ID0gSWRlYWxCYW5rRWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL34vcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA2Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hcnJheVByb3RvdHlwZSA9IHJlcXVpcmUoJ2FycmF5LnByb3RvdHlwZS5mbGF0Jyk7XG5cbnZhciBfYXJyYXlQcm90b3R5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlQcm90b3R5cGUpO1xuXG52YXIgX2dsb2JhbENhY2hlID0gcmVxdWlyZSgnZ2xvYmFsLWNhY2hlJyk7XG5cbnZhciBfZ2xvYmFsQ2FjaGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2xvYmFsQ2FjaGUpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY29uc3RhbnRzJyk7XG5cbnZhciBfZ2V0Q2xhc3NOYW1lID0gcmVxdWlyZSgnLi91dGlscy9nZXRDbGFzc05hbWUnKTtcblxudmFyIF9nZXRDbGFzc05hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Q2xhc3NOYW1lKTtcblxudmFyIF9zZXBhcmF0ZVN0eWxlczIgPSByZXF1aXJlKCcuL3V0aWxzL3NlcGFyYXRlU3R5bGVzJyk7XG5cbnZhciBfc2VwYXJhdGVTdHlsZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VwYXJhdGVTdHlsZXMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIEZ1bmN0aW9uIHJlcXVpcmVkIGFzIHBhcnQgb2YgdGhlIHJlYWN0LXdpdGgtc3R5bGVzIGludGVyZmFjZS4gUGFyc2VzIHRoZSBzdHlsZXMgcHJvdmlkZWQgYnlcbiAqIHJlYWN0LXdpdGgtc3R5bGVzIHRvIHByb2R1Y2UgY2xhc3MgbmFtZXMgYmFzZWQgb24gdGhlIHN0eWxlIG5hbWUgYW5kIG9wdGlvbmFsbHkgdGhlIG5hbWVzcGFjZSBpZlxuICogYXZhaWxhYmxlLlxuICpcbiAqIHN0eWxlc09iamVjdCB7T2JqZWN0fSBUaGUgc3R5bGVzIG9iamVjdCBwYXNzZWQgdG8gd2l0aFN0eWxlcy5cbiAqXG4gKiBSZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcgc3R5bGUgbmFtZXMgdG8gY2xhc3MgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShzdHlsZXNPYmplY3QpIHtcbiAgdmFyIHN0eWxlc1RvQ2xhc3NlcyA9IHt9O1xuICB2YXIgc3R5bGVOYW1lcyA9IE9iamVjdC5rZXlzKHN0eWxlc09iamVjdCk7XG4gIHZhciBzaGFyZWRTdGF0ZSA9IF9nbG9iYWxDYWNoZTJbJ2RlZmF1bHQnXS5nZXQoX2NvbnN0YW50cy5HTE9CQUxfQ0FDSEVfS0VZKSB8fCB7fTtcbiAgdmFyIF9zaGFyZWRTdGF0ZSRuYW1lc3BhYyA9IHNoYXJlZFN0YXRlLm5hbWVzcGFjZSxcbiAgICAgIG5hbWVzcGFjZSA9IF9zaGFyZWRTdGF0ZSRuYW1lc3BhYyA9PT0gdW5kZWZpbmVkID8gJycgOiBfc2hhcmVkU3RhdGUkbmFtZXNwYWM7XG5cbiAgc3R5bGVOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9nZXRDbGFzc05hbWUyWydkZWZhdWx0J10pKG5hbWVzcGFjZSwgc3R5bGVOYW1lKTtcbiAgICBzdHlsZXNUb0NsYXNzZXNbc3R5bGVOYW1lXSA9IGNsYXNzTmFtZTtcbiAgfSk7XG4gIHJldHVybiBzdHlsZXNUb0NsYXNzZXM7XG59XG5cbi8qKlxuICogUHJvY2VzcyBzdHlsZXMgdG8gYmUgY29uc3VtZWQgYnkgYSBjb21wb25lbnQuXG4gKlxuICogc3R5bGVzQXJyYXkge0FycmF5fSBBcnJheSBvZiB0aGUgZm9sbG93aW5nOiB2YWx1ZXMgcmV0dXJuZWQgYnkgY3JlYXRlLCBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHNcbiAqIHJlcHJlc2VudGluZyBpbmxpbmUgc3R5bGVzLCBvciBhcnJheXMgdGhlcmVvZi5cbiAqXG4gKiBSZXR1cm4gYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgY2xhc3NOYW1lIGFuZCBzdHlsZSBwcm9wZXJ0aWVzIHRvIGJlIHNwcmVhZCBvbiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZShzdHlsZXNBcnJheSkge1xuICB2YXIgZmxhdHRlbmVkU3R5bGVzID0gKDAsIF9hcnJheVByb3RvdHlwZTJbJ2RlZmF1bHQnXSkoc3R5bGVzQXJyYXksIEluZmluaXR5KTtcblxuICB2YXIgX3NlcGFyYXRlU3R5bGVzID0gKDAsIF9zZXBhcmF0ZVN0eWxlczNbJ2RlZmF1bHQnXSkoZmxhdHRlbmVkU3R5bGVzKSxcbiAgICAgIGNsYXNzTmFtZXMgPSBfc2VwYXJhdGVTdHlsZXMuY2xhc3NOYW1lcyxcbiAgICAgIGhhc0lubGluZVN0eWxlcyA9IF9zZXBhcmF0ZVN0eWxlcy5oYXNJbmxpbmVTdHlsZXMsXG4gICAgICBpbmxpbmVTdHlsZXMgPSBfc2VwYXJhdGVTdHlsZXMuaW5saW5lU3R5bGVzO1xuXG4gIHZhciBzcGVjaWZpY0NsYXNzTmFtZXMgPSBjbGFzc05hbWVzLm1hcChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gU3RyaW5nKG5hbWUpICsgJyAnICsgU3RyaW5nKG5hbWUpICsgJ18nICsgU3RyaW5nKGluZGV4ICsgMSk7XG4gIH0pO1xuICB2YXIgY2xhc3NOYW1lID0gc3BlY2lmaWNDbGFzc05hbWVzLmpvaW4oJyAnKTtcblxuICB2YXIgcmVzdWx0ID0geyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9O1xuICBpZiAoaGFzSW5saW5lU3R5bGVzKSByZXN1bHQuc3R5bGUgPSBpbmxpbmVTdHlsZXM7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHsgY3JlYXRlOiBjcmVhdGUsIHJlc29sdmU6IHJlc29sdmUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBHTE9CQUxfQ0FDSEVfS0VZID0gJ3JlYWN0V2l0aFN0eWxlc0ludGVyZmFjZUNTUyc7XG52YXIgTUFYX1NQRUNJRklDSVRZID0gMjA7XG5cbmV4cG9ydHMuR0xPQkFMX0NBQ0hFX0tFWSA9IEdMT0JBTF9DQUNIRV9LRVk7XG5leHBvcnRzLk1BWF9TUEVDSUZJQ0lUWSA9IE1BWF9TUEVDSUZJQ0lUWTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRDbGFzc05hbWU7XG4vKipcbiAqIENvbnN0cnVjdCBhIGNsYXNzIG5hbWUuXG4gKlxuICogbmFtZXNwYWNlIHtTdHJpbmd9IFVzZWQgdG8gY29uc3RydWN0IHVuaXF1ZSBjbGFzcyBuYW1lcy5cbiAqIHN0eWxlTmFtZSB7U3RyaW5nfSBOYW1lIGlkZW50aWZ5aW5nIHRoZSBzcGVjaWZpYyBzdHlsZS5cbiAqXG4gKiBSZXR1cm4gdGhlIGNsYXNzIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShuYW1lc3BhY2UsIHN0eWxlTmFtZSkge1xuICB2YXIgbmFtZXNwYWNlU2VnbWVudCA9IG5hbWVzcGFjZS5sZW5ndGggPiAwID8gU3RyaW5nKG5hbWVzcGFjZSkgKyAnX18nIDogJyc7XG4gIHJldHVybiAnJyArIG5hbWVzcGFjZVNlZ21lbnQgKyBTdHJpbmcoc3R5bGVOYW1lKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL2dldENsYXNzTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gNjgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIGFycmF5IG9mIHN0eWxlcyBhbmQgc2VwYXJhdGVzIHRoZW0gaW50byBzdHlsZXMgdGhhdFxuLy8gYXJlIGhhbmRsZWQgYnkgQXBocm9kaXRlIGFuZCBpbmxpbmUgc3R5bGVzLlxuZnVuY3Rpb24gc2VwYXJhdGVTdHlsZXMoc3R5bGVzQXJyYXkpIHtcbiAgdmFyIGNsYXNzTmFtZXMgPSBbXTtcblxuICAvLyBTaW5jZSBkZXRlcm1pbmluZyBpZiBhbiBPYmplY3QgaXMgZW1wdHkgcmVxdWlyZXMgY29sbGVjdGluZyBhbGwgb2YgaXRzXG4gIC8vIGtleXMsIGFuZCB3ZSB3YW50IHRoZSBiZXN0IHBlcmZvcm1hbmNlIGluIHRoaXMgY29kZSBiZWNhdXNlIHdlIGFyZSBpbiB0aGVcbiAgLy8gcmVuZGVyIHBhdGgsIHdlIGFyZSBnb2luZyB0byBkbyBhIGxpdHRsZSBib29ra2VlcGluZyBvdXJzZWx2ZXMuXG4gIHZhciBoYXNJbmxpbmVTdHlsZXMgPSBmYWxzZTtcbiAgdmFyIGlubGluZVN0eWxlcyA9IHt9O1xuXG4gIC8vIFRoaXMgaXMgcnVuIG9uIHBvdGVudGlhbGx5IGV2ZXJ5IG5vZGUgaW4gdGhlIHRyZWUgd2hlbiByZW5kZXJpbmcsIHdoZXJlXG4gIC8vIHBlcmZvcm1hbmNlIGlzIGNyaXRpY2FsLiBOb3JtYWxseSB3ZSB3b3VsZCBwcmVmZXIgdXNpbmcgYGZvckVhY2hgLCBidXRcbiAgLy8gb2xkLWZhc2hpb25lZCBmb3IgbG9vcHMgYXJlIGZhc3RlciBzbyB0aGF0J3Mgd2hhdCB3ZSBoYXZlIGNob3NlbiBoZXJlLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wbHVzcGx1c1xuICAgIHZhciBzdHlsZSA9IHN0eWxlc0FycmF5W2ldO1xuXG4gICAgLy8gSWYgdGhpcyAgc3R5bGUgaXMgZmFsc3ksIHdlIGp1c3Qgd2FudCB0byBkaXNyZWdhcmQgaXQuIFRoaXMgYWxsb3dzIGZvclxuICAgIC8vIHN5bnRheCBsaWtlOlxuICAgIC8vXG4gICAgLy8gICBjc3MoaXNGb28gJiYgc3R5bGVzLmZvbylcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGlubGluZVN0eWxlcywgc3R5bGUpO1xuICAgICAgICBoYXNJbmxpbmVTdHlsZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lczogY2xhc3NOYW1lcyxcbiAgICBoYXNJbmxpbmVTdHlsZXM6IGhhc0lubGluZVN0eWxlcyxcbiAgICBpbmxpbmVTdHlsZXM6IGlubGluZVN0eWxlc1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBzZXBhcmF0ZVN0eWxlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL3NlcGFyYXRlU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleC5qcycpLmRlZmF1bHQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdHlsZUludGVyZmFjZSA9IHZvaWQgMDtcbnZhciBzdHlsZVRoZW1lID0gdm9pZCAwO1xuXG52YXIgU1RBUlRfTUFSSyA9ICdyZWFjdC13aXRoLXN0eWxlcy5yZXNvbHZlLnN0YXJ0JztcbnZhciBFTkRfTUFSSyA9ICdyZWFjdC13aXRoLXN0eWxlcy5yZXNvbHZlLmVuZCc7XG52YXIgTUVBU1VSRV9NQVJLID0gJ1xcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0NcXHVERkE4IFtyZXNvbHZlXSc7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVGhlbWUodGhlbWUpIHtcbiAgc3R5bGVUaGVtZSA9IHRoZW1lO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckludGVyZmFjZShpbnRlcmZhY2VUb1JlZ2lzdGVyKSB7XG4gIHN0eWxlSW50ZXJmYWNlID0gaW50ZXJmYWNlVG9SZWdpc3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKG1ha2VGcm9tVGhlbWUsIGNyZWF0ZVdpdGhEaXJlY3Rpb24pIHtcbiAgdmFyIHN0eWxlcyA9IGNyZWF0ZVdpdGhEaXJlY3Rpb24obWFrZUZyb21UaGVtZShzdHlsZVRoZW1lKSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTFRSKG1ha2VGcm9tVGhlbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZShtYWtlRnJvbVRoZW1lLCBzdHlsZUludGVyZmFjZS5jcmVhdGVMVFIgfHwgc3R5bGVJbnRlcmZhY2UuY3JlYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUlRMKG1ha2VGcm9tVGhlbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZShtYWtlRnJvbVRoZW1lLCBzdHlsZUludGVyZmFjZS5jcmVhdGVSVEwgfHwgc3R5bGVJbnRlcmZhY2UuY3JlYXRlKTtcbn1cblxuZnVuY3Rpb24gZ2V0KCkge1xuICByZXR1cm4gc3R5bGVUaGVtZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZSgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5tYXJrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLmNsZWFyTWFya3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwZXJmb3JtYW5jZS5jbGVhck1hcmtzKFNUQVJUX01BUkspO1xuICAgIHBlcmZvcm1hbmNlLm1hcmsoU1RBUlRfTUFSSyk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3R5bGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHN0eWxlSW50ZXJmYWNlLnJlc29sdmUoc3R5bGVzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm1hcmsgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBlcmZvcm1hbmNlLmNsZWFyTWFya3MoRU5EX01BUkspO1xuICAgIHBlcmZvcm1hbmNlLm1hcmsoRU5EX01BUkspO1xuXG4gICAgcGVyZm9ybWFuY2UubWVhc3VyZShNRUFTVVJFX01BUkssIFNUQVJUX01BUkssIEVORF9NQVJLKTtcbiAgICBwZXJmb3JtYW5jZS5jbGVhck1hcmtzKE1FQVNVUkVfTUFSSyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTFRSKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgc3R5bGVzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICBpZiAoc3R5bGVJbnRlcmZhY2UucmVzb2x2ZUxUUikge1xuICAgIHJldHVybiBzdHlsZUludGVyZmFjZS5yZXNvbHZlTFRSKHN0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZShzdHlsZXMpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUlRMKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgc3R5bGVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBpZiAoc3R5bGVJbnRlcmZhY2UucmVzb2x2ZVJUTCkge1xuICAgIHJldHVybiBzdHlsZUludGVyZmFjZS5yZXNvbHZlUlRMKHN0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZShzdHlsZXMpO1xufVxuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgaWYgKHN0eWxlSW50ZXJmYWNlLmZsdXNoKSB7XG4gICAgc3R5bGVJbnRlcmZhY2UuZmx1c2goKTtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIHJlZ2lzdGVyVGhlbWU6IHJlZ2lzdGVyVGhlbWUsXG4gIHJlZ2lzdGVySW50ZXJmYWNlOiByZWdpc3RlckludGVyZmFjZSxcbiAgY3JlYXRlOiBjcmVhdGVMVFIsXG4gIGNyZWF0ZUxUUjogY3JlYXRlTFRSLFxuICBjcmVhdGVSVEw6IGNyZWF0ZVJUTCxcbiAgZ2V0OiBnZXQsXG4gIHJlc29sdmU6IHJlc29sdmVMVFIsXG4gIHJlc29sdmVMVFI6IHJlc29sdmVMVFIsXG4gIHJlc29sdmVSVEw6IHJlc29sdmVSVEwsXG4gIGZsdXNoOiBmbHVzaFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMvbGliL1RoZW1lZFN0eWxlU2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDY4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1TRWhVUUV4TVZGaE1YRnhvVkZ4VVlGeFlXRnhVWUZSVVhGaFVaSFJjWUhTZ2dHQjBuSFJVWUlURWhKU2tyTHk4d0Z5QXpPRE10TnlndExpc0JDZ29LRGcwT0d4QVFHeTBtSUNZdExUSXlMeTB1TFMwdE1pOHVMUzB0TUM4dExTMHZMVEF0TFMwdExTMHRMUzB0TFMwdExTOHZMUzB0TFMwdExTMHRMZi9BQUJFSUFHTUIrZ01CRVFBQ0VRRURFUUgveEFBY0FBRUFBZ01CQVFFQUFBQUFBQUFBQUFBQUJRWURCQWNCQWdqL3hBQk1FQUFCQXdJREF3VUxDQWNIQkFNQUFBQUJBQUlEQkJFRkVpRUdFekVISWtGUllSUXlVbFJ4Z1pHU2s3SFNGUllqUTNPQ29kRXpRbUp5b3JMQk5FUlRZNFBpOEJja3dzTWxzL0gveEFBYUFRRUFBZ01CQUFBQUFBQUFBQUFBQUFBQUFRVUNBd1FHLzhRQU9oRUFBZ0VDQXdVRUNRTURCQU1BQUFBQUFBRUNBeEVFRWlFRk1VRlJZUk54a2FFVUlqSlNnYkhCMGZBVll1RWpNMEkwUTFOeUJvTHgvOW9BREFNQkFBSVJBeEVBUHdEdUtBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUZBVkliYkQvQVByL3dDMWQvb1A3dklyL1QxN3ZtZlh6ekgrQ2ZYL0FOcWVnL3U4aDZldmQ4d2RzLzhBSVByL0FPMVBRZjNlUTlQWHUrWjhuYlVmNEI5Zi9hbm9QN3ZJZW5yM2ZNeHUyNkErb1B0UDlxbjBEOTNrUFQvMitaaWR5Z0FmM2MrMEh3cDZCKzd5SjlPWHUrWmlkeWpBZjNZKzBId3FmMC85M2tQVFY3dm1ZbmNwZ0g5MlB0UjhDZnA3OTd5SjlOWHVud2VWQWVLbjJvK0JUK252M3ZJbjB4Y2pHZVZRZUtuMm8rQlAwNSs5NUUrbHJrZko1Vng0b2ZhajRFL1RuNzNrVDZXdVJQN0hiWkN2ZkpHSVRIa2FIWHo1cjNKRnU5RnVDNThSaGV4U2Q3M05sS3QyamFzV3BjcHZDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdQbDd3QVNTQUJxU2RBUE9oS1Ric2l1VjIzZEJFYkdjUFArVzEwZzlab0xmeFdwMW9MaWQ5UFpXS3FhcUZ1L1Q1bWlPVXlodjlhTzNkbitodXNmU0lHLzlFeFhUeEpmRE5yNktvSWJIVU16SGcxOTQzSHNBZUJmekxPTldFdHpPU3RzL0UwbGVVSGJtdFY1RTR0aHhoQWExVlh4eGQrOXJld25YMGNTdEZYRTBxUDl5U1J0cDBLbFQyRmNqMzdUUURnWEh5TlA5YkxpZTJNTXR6YitET3BiT3J2bDRuMUZ0SFRuOVl0OHJUN3dzb2JXd3N0TTF1OU14bHMrdXVGL2lTY0U3WGpNeHdjT3NFSDNMdmhVaFVWNE5OZERrbENVSGFTc1pGbVloQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUhoUUhLR3RWOGVlTW9ZaEFMVUJpZTFTRFdrQ2xFbXJLRkpKcHlCU1NqVWtDeU1qWGVoa1lYS1RKR0p5RWwrNUcvMDlSOW16K1lyZzJqN01lODZzSjdUT3JxcE80SUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0lIYXphbUtoanU3blN1N3lJR3hkMmsvcXQ3ZlJkYTZsUlFSMjRMQTFNVkt5MFMzdjg0bkc4ZjJocUt4MTVua3R2cEVOSTI5Vm05SjdUY3Jobk9VOTU2N0RZT2pobGFtdGVmSDg3aUtXSjBoQWVFSVRjcyt5KzJsVFNGckxtYUc0RzZjU1NQczNjV25zNGRnNHJaQ3M0Yjl4VzR6WmxIRUp2MlpjL3Y5OTUwTEZOcFhQR1dJRmdJMUp0bjFIRFRScXE4WnRlVXZWb2FMbngrSElwOFBzNk1kYW1yNWNDQWNibTUxSjRrOFNxVnU3dXl5V2lzZ2hJUUdTbm5jeDJaamkwOVkvNXI1MW5UcXpwU3pRZG1ZVGhHYXRKWFJiY0R4OFNrUnlXRW5RZWgzNUhzLzhBeGVrd0cwMVdmWjFOSmVUL0FKS1hGNEYwMW5ocXZrVHF0eXVDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlEd29EbGJGZkhuak8xUVFISURCSXBCcXlLU1RVbFdSSnFTS1NVYWtxbEVtczlTWm1CNmt5TVRrSkw5eU4vcDZqN05uOHhWZnRIMlk5NTFZWDJtZFhWVWR3UUJBYU9MVlQ0MnQzWWJtZEkxZ3pYc014MU5ocVVCankxZmhVL3F5ZkVnR1dyOEtuOVdUNGtBeTFmaFUvcXlmRWdHV3I4S245V1Q0a0F5MWZoVS9xeWZFZ0dXcjhLbjlXVDRrQXkxZmhVL3F5ZkVnR1dyOEtuOVdUNGtBeTFmaFUvcXlmRWdHV3I4S245V1Q0a0F5MWZoVS9xeWZFZ01VdFRVUnVqejdrdGZJR0hLSGdqTURxQ1NSMElDWFFHamplSnNwWUpLaC9lc0Y3ZExqd2EwZHBKQTg2eG5KUlYyYnNQUWxYcUtuSGUvenlPQVlyaU1sVEsrZVUzZTgzN0dqb2FPcG9HZy9NcXVjbkozWjdxalJoUnBxbkRjdnk1cXFEWUVBUUJBVEdGWUpJOW9tYklJOVRsME43Y0wzSERwWEJpTVpUaEowNVJ2ek5GU3RHTHl0WEp2RHNQbmpmbWRQbmJ3TFRtUG5Gem9Wd1ZxOUNwRzBZV2ZQUTU2azRTVmxHeExMak5BUUJBRUFRRjQyY3hQZlIyY2VlelE5bzZIZjg2bDZ6WnVMOUlwMmw3UzMvQUhQUFkzRDlsTzhkei9MRXNySTRqVnJHemNZbk1IWTVwTnorOERwNkZ6VjFYMzBtdTVwL05QNkc2azZYKzRuOEg5UDVJU3J4V3FpTm5zYU8zS1NENXc1Vk5iSFkyaS82a1V1dG5ieHVXRkxDNGFyN0Rmai9BQVlCdEhOMU05Qi9OYVZ0ZkVjVXZCL2MydloxTHIrZkFzbEJWQ1dOc2dGcjlIVVFiRWVrSy93OVpWcWFxTGlWTmFrNmMzQm13dHhxT1A0cnlvVlFta0VJaDNRZVF3dVk0a3RCc0RjUEhHMS9PcnFuczZubFdhOXlvcWJRbXBOUnRZc25KM3RSV1Ywa2hsRVFoamFMbHJIQWw3anpSY3VJdFlPSjgzV3VYR1llbFJpc3Q3czZjSmlLbFp0eTNJaGRxZVVXcWdxNW9JaER1Mk95ak14eE9qUm11UTRmclhXL0Q0Q25PbXBTdmRtaXZqcHdxT01iRXZ5ZDdXMVZkTkl5WVJCakk4M01ZNEhNWEFOMUxqcFlPV25HWVduUmluRzkyYnNKaVoxbTgzQXVXTDRwRlRSR2FaNGF3ZWtub0FIRWs5UzRhZE9WU1dXSzFPeWM0d1dhUnpER09WYVp4SXBvbXNiME9rNTd6MjJCRFcrVFZXMVBac1Y3YnYzRlhVMmsvd0RCZUpDSGxEeEc5OStQSnU0cmZ5cmY2QlE1ZWJOSHA5Ym1XYllqYjJycUtxT2xsYkc5cjgxM2hwYTVvYXh6cjZHeDRXNGRLNWNWZ3FkT201eHVkV0Z4azZrMUNTT29xcExRclczTzFRb0ltdURRK1dRa01hVFlhQzduRzJ0aGNjT2toZFdGd3pyU3R3UnpZbkVLakcvRTUwZVZLdThHRDFIL0FCcXovVGFQWDgrQlcvcU5Ya2krY25XMDhsZEZLWnNna2plQlpnSUdSelJsMEpPdHcvMEt1eG1IalJrc3U1bGhoTVE2MFczdkxjdU02d2dQQ2dPVU5jcjQ4OFptdVFnRnlBd3ZjcEJyeUZTU2FrcFVrbXBJVkpralVsS3lKTlo2R1JoY3BNakU1Q1MvY2pmNmVvK3paL01Wd2JSOW1QZWRXRTlwblYxVW5jRUFRRWJqZjFQMjhmdktBa2tBUUJBRUFRQkFFQVFCQUVBUUVaamYxSDI3UGM1QVNhQTVseXpZcFlRMDE3TjUwNy9JM21zdjJkK2Z1aGN1SWJiVVVlaDJGU1NVNjB1R24xZjBLaGkreWxWU3hkMFRNYTJPNEY4N1NlZHcwQzB5cFNpcnN0cUcwS0ZlZVNEMTd1UjlWT3lGWEhBYXA3R2lJTUVoT2R0OHBBSTV2RytvMFNWR2NWZGtVOXBZZXBVVk9EdTMwMElETU9GeGZxV3M3N005YzREaWJJRW16Ym9zT2xsYTZSakhPamIzOGdGMlJpMXlYSGdBQnI1RWFlVnlTM0dtcFdwMDVLTW5xOXk0c2szWVZSK05EMW8veVZiNlZpZitQNW1IYTF2YytZT0UwbmpROWFQOGxQcFdLLzQvbU8xcmU3OHl5NE5HSHRaRkUvZWtjd0VFRW13dlkyMDBGdk1xK1ZLdFZxdEtHcjF0OWRUaHJ6Vk84cW1oTTFXQlRSc01qZzNLQmMyZHFGdXE3TnhGS0RuSkt5Nm5KVHh0R3BMS203OXhHWFZmZEhYWTlRSGhLQW04RVkrR1dHUjFza3dzQ0NEY09BTFQ2UzMwcTV3bEd0aE1SQjFGWlMwMy9uRXJjUlVwNGlqSlFkOHVwZEY2WW93Z05URjZUZlFTdzNJTDJPYUNOQ0NSelNEMWcyUG1VeHRkWmxkY251SWxlMmpzemoyejIwcGNSRFBvL2dIOExuaFozVWUzL2g0ZHNmOEFqNnB4ZGZDK3p2Y2VYVmMxMDRjT20vWm0yczh1eHhHL2crZmYxT283S1MzaWMzd1hmZ1FENzdybTJQTzlGeDVQNTZuVnRHTnFpZk5HRGIvRis1cUdWNE5udkc2WjE1bjZYSGFHNW5mZFYvaEtYYVZVdUc4cDhWVjdPbTJjQVhvenpwM3prOXdmdVdpamE0V2trK2xrNkNDOEN3UGthR2p6RmVkeGxYdEtyYTNMUTlGaGFYWjBramhtS1ZPOW1sbDhPUjcvQUZubDM5VmYwNDVZS1BKRkJWbG1tMzFPbmNpdE5hS29tOEo3V2VvMHUvOEFZcXJhY3ZXakV0ZG14OVJzcnZLeGl6cGEwd1hPN2hBYUIwWm5ORG5POHRpQjVsMDdQcEtOTE54WnpiUXF1VlRKd1JCYktZRWEycGJUaDRZQ0M1enJYczF0cjJIU2RSNytoZEdJcmRqRE5ZNThOUjdXZVc1MG9jbEZKYTI5cUw5ZWFQM1pGVi9xVlhrdlA3bHArblV1Yk0yeTJ3SGNWWDNRSnQ1SHUzTkFMY3J3NXhiYmhvUllPMTBXTmZHOXRUeXRXZHpLaGcxU3FaazlDOHJnTzA0UHlrWXozVFd2c2J4eGZSTTZ1YWVlZk82L21hRjZEQlV1enBMbTlTaHgxWFBVc3R5S3c2TWdCeEJzYjJQUWJhRzNXdXU2M0hJNHRLNWZlUnFzeTFVc1BSSkZtKzlHNFcvQjd2UXE3YVVMMDFMay9tV096WldtNG5ZbFNsd0VCNFVCem1tdytKc0xKcDVYczNoZGthMXVhN1c5UC9Pc0szbFZtNU9NRmV4VHFsQlFVcHUxemZxTUZwNDRtenVuZnUza1pDR2duVnVZWEZ0T0JXdU5lcEtUaW9xNk01WWVuR0ttNU96UGhtQk1jV1NNa2NhY3NlOTBoQUJia05pTGRmNU9VdkVOWFRYclhXbmVRc05GdE5QMWJQWHVNTWVIMGptUGtFOHVXUExtK2o0WnpadWx0ZFFzblZxcHFPVmE5U0ZTb3RPU2s5T2hoZ3c2amtlMk5zODJaeEFIMGRoYzl0bE1xbGFLdTRyeEVhVkdUU1VuNEdwTlJVSUpCcVo5Q1Fmb3I2ZzJQUXBVNjcveFhpTWxGZjVQd1ByNUJvaXlOL2RjaGJMSnVtWlkvd0JZa1dhNEVYYWRScVZIYjFydFpWb3I3ek5VYVZrOHoxZHR4cDRuZ3RCQTkwVXRaSVh0SnVHUlpzbzZpUUNMOWZ1V1VLMWFhdkdDK0xFcVZLRHM1UHdQWjluYUJzNHBUV1RDVWxyZjBZeWh6d0MwRjFyRGlQU29WZXM0WjhxdDNtZlpVbExMbWR6NHhMWmVocDVXMDg5WE0yVndhZEl3V0RPYlh6VzBGd2VQQklZaXJPTGxHS3Qza3lwVTR2SzVPNXN5YkIwcko0cVNTcWxFOGpTOEJyRzVTR2drODYybmVuaXNGaktqaTVxS3NqTDBlS2tvdHU0NUgyMnFha2RUR2owUGNFMmc3d2lUaGZha2RWVlVkb1FCQVJ1Ti9VL2J4KzhvQ3ViZTdXVk5IVVVkTFN3eFN5VlJrYU40NXpRQ3pkMjFINzU5Q2xBeDRIdHpOM1czRHNScGU1cWlRRXd2YS9lUXpXdVNBNzlVNkhyNnRDUURCQkJ3Y3FzeG9HVlBjOFpxWnFvMGtVWWNXeDNBYWN6bkg5NjNSeDZGTFJDZDBXckRzZXJJSXFpYkZJWVlZNFdCNGxoa0wyeUN4dUF3ak1DTEFjZFM0V1VFbGZwZHJzYXFvKzdLWERvZTVUZDBiSlpDSnBtZERtMklBdjBhZVMvRXlDNFYrTnVEdDNHd0Y0QXpFM3Mwa1h0WWFrNjlpcjYrTWNaNUthdStQSXNLR0RVb1o2anNqQkhqa3VzYm1NRWpnUkU3WElaTGN3T0Y3Z0UyRndWalJ4cmMxQ3FyWDRrMXNIRlFjNlR2YmdhdXdlMklycU45VE0wUXlRdmtaT3pXMFpqNTNUcjNwRiswSHFWaVY1Vm44cGxXYUJsZXltaXROVjl6UU1jWGpNem5nUGNiOGN6Y3ZWb1ZOaUxrcml1MU9LVWRIVTFkVlMwemQwSXpHR1NPZUhsMGdZNE82UllHNFN3TmVoMjlyV1QwMEZaU1JNN3NZWFUwa2NwTFMvS0hOYThFWEdybWdub3pEanJaWUZ3eEJ6eXltTWpRMTVsakxtZzNBZGxkY0E5SXVvSkpoQWNmNVNZTjlpc1VQRVBGUEZiOWw4emc3OEhFcm50ZkVMeDhMczlGaFpxR3k2ajZ0ZU5sOVM2YlRVL2R6WktQaTFsVEF4NDZtNVk1cFA0SFc4NFhTNGJtKy93L2tvNk5aMG0ydDdUWGpvYWUxK0lPbXc5cFl6ZWIrb1l5T01mV1JzbXpBRFE5OUhFVDFjN3FXRlhLcko3dWgwWUNNKzBiaTFGeFQxZTVjUHJwMU5yQ0tHV2E4TlhodExEQVdHMldScjNBM0ZtbG9ZTGFFbk1EcFpNc0hIZDhqR2RhZE9lYUZWdDg5ZnFSZUMwaklNT1pVVU5MRlZ5dWNjK1p3RHlBNTRjTXhhU1MwZ055NmRKNDhZN0tOUFMxL21iWjR1cmlxdjhBVW5rOGJMcHA4ekJoR050cDhNcThTZkEwdG1xSE9NRndHaHJUSFRGbXJlamR1UGU2bTZtNnlMVGZ3NzNwOUNaMEpUeGJweG43UCtYU0sxZkhrN0VoUllHK2pnaEVORkhVelNFT3FIdWN4bVVPc1hCdVljQm1JRGRCemRkU29oU2pGMnQ4VEd2akttSXZKenkyM1IxK25IbTN2RkJzN1RzeFNvdEV6ZENtamtMQzFwWXg4c2tnSkFJc05JU2RPc3FGU2lydXhsVng5ZWRHRWN6dW0rOTdyZlU4MlFxNFhSVk5iVHhaR00rZ2lhUUJ6WTJoeGNiZExueVhKNGtOYmZnc01SVWpSdzdxUVhCczExS2RhZUo3S3U5YnErdDdYMStSRTJuTDd4dmxrZTl6QTZOOHNqbzN0RWpYUEdSMlpyVGxhNEFodWwrcGVlb2JScTFwcWxYOWFMZTVKWGVqc3VHbDdYNkZoVndsT25GenA2TmNXMytYNUZ3dzZHZVJ4anFhU25aQ1dYRG1TWm5CMXdNcGJrRnRDVG1CL1ZWLzJGS3BUdEtGdWp0OUNwbFZuQ1Y0emI4ZnFSTkZVTWl3K0dkMFlta2trK2l1R0RNWjVuQ0M1OEVCN0IwblFjU3RVY0poNFFwd2NWZlRoZlcxMjM1dmw1R3lWZXRLYzJtK1BoZjhSa3hxb2lwUkZTdWdFelpDeU9hUzRhOGI1NGlEZ0xhODUxN0FpdzRMR25EQ1U2cXcyWDFtcjZxKzdYVjg5T1hnWk9XSXFRZGEraTAzL0pHYmFSNGJOQkczUU1EYkRxdTRBZnlxdTJ0VWZwTk5jclB4YSt4MWJQaC9RbStmMi9rdGk5Q1U0UUJBZm4zYnpEOXhYenN0elMvZU44a25QOTVJOHk5SGhKNTZNWCthSG5zWERKVlpmT1NmR3pMbmhlZWUxb04vQ2FEWUh5NjJQbVhuTVJzOVlURnlsVFhxVFY3Y3BMZXU1M3V2anlMN0RZMTRuRHBUOXFMdDNwOGZJaHVXUEZzODhkSzA4Mkp1ZDM3NytIb2FQNDFjN05wV2k1dmlWZTBhdDVLQzRGYTJKd2Z1dXNpaUl1d0hlU2RXUm1wQjdDYk4rOHV2RlZleXBPWEhnY3VFcGRwVlM0SGM5b3FyZFVzOHZTeUo3aDVRdzIvRmVmb3h6Vkl4Nm92YXNzc0craCtid0Y2Zzh5ZHk1S3FiSmg3SGRMM3ZmL0VXajhHaGVmeDhyMW4wc1grQ2phaWlqY3JHQnZpcWpWQUV4VFc1M1ExN1docGFlcTRhQ092WHFWaHMrc3BVOG5GSERqNkxVOC9CbE1wS3A4VDJ5eHVMSHROMnVHaEIvd0NkQzdwUlVsYVc0NElUY0hkYnpwbXpYS2tEYU9zWmJvM3pCcDVYTTZQSzMwQlZWZloxdGFiK0JhME5vSjZWUEU2WEJNMTdROWpnNXJoZHJnUVFRZUJCSEVLcmFhZG1XU2FhdWlIMnp4anVTamxtQjU5c2tmNzc5RytqajVsdXcxTHRhaWlhc1JVN09tNUg1NzFQV1NmT1NmelhwZHg1elZzdjNLRHMvd0J6VVZEMXNEbzM5cjVCdlQvRTE2cmNIWDdTclByOU5DeXhsSEpTaDBLN3NMV2JtdnBuOUJrREQvcWd4Kzk0UG1YVmk0WnFNbDArV3B5NFNXV3RFL1FpODJlaENBRkFVUXZmTlV2ZkRBSm9ZV21uYTNPR3RHbVZ4dWVQRnc4bGxaV1VLYVU1V2IxSzEzblViakc2V204MFRWT1pFMmpsMGtpcVl5R2tnbks5cmpidDFOL3ZoYmNxY25VanVjV2FjelVWVGx2VWtibFd5U09TVERXZDdOSTF6RDRNYnJsL21HVzMzWGRhd2k0eWlxejRMWHZOa2xLTW5RWEY2ZHhyMVlheG1Jc2JZTmFZV2dkUUR5QXNvdHQwbStwakpKS3FsME43Qk1UQmZDejVSRHRXamM3bTE5TFpNMXZ4N0ZxclU5SlBzL2pjM1VhbXFYYWZDeHA3T1IxTG16YmlvamphYWg3Y3JtQnhjKzE5RDBhRGgyRlpWM1RUam5pM29pS0NtMUxLMHRXUkZOSXp1ZWlBRmlLOE5mcmZNNjhlbzZ0TEMzWXQwazg4Nys3OXpXclpJZjhBWWs4Qnh5R2dkV3NxYnRuTXo1R2d0TjVSYTdRSFc2VGNpK25QOHEwMXFNcXlnNGJyTDRHNmxValNjbExmY2hCaGRaTFNQZjNLWEdWNHErNkJJd1BHbHhsWnh0WXVzT1BPOGkzZHBTalVTemJ0TFdNRkNjb1h0djF1Yk5JNlBGcXNCeEY1S0N6aUxISkt5UzF3UExyNUhkcXhrcFllbnB3bDVXTTQyclQvQVBYelBuWnV0bGRpbEpCT0xUVTdKSUhHOTh3YXlRdFBielNOZW5ROUtpdENLb1NsSGM3TW1uSnVvbExlalk1SS93QzFWWDdvL3dEc2NzY2YvYmorY0NjTjdVanFhcXp0Q0FJQ054djZuN2VQM2xBYy93Q1ZhdGpneFRCcHBYaGtiSkpuT2NlRFI5RHFwUkJyWXZpYk1aeFdnYlJYa2hvNURQTlVocERCWjBid3dPTnIzM1FGdW5NT2hwUUVCc2JVNGI4a3NwOFNhZDFOV3pCa2dEZzJKN1kyRU9NamU4T3R1MjUwc0RhWHZJVzR4VTlITlZNeFBDNkdwbHE2SmtNY2tMbm5OYVZra2I5MDE1dGU0YThhYWMwYWRKQXZlelhLZmh6YUptK21FTXNNWWprZ2Mxd2UxOGJRMGhyYmM3VWFXODlpb1pKTFNTYm1kNWNOSG5PMG5wRHRmU09DbzZqN0d2TE54ZDBYY1A2MUNPWGdyTThrZjNSTXhrWTRPYTRrZnFocEJKUFZ3MDdWako5dlZqR0hOUHVWL3dBc1NsMkZLVG55YTd6blBLSFExRkpYMUZKU2kwZU1OWTNzYkp2QUpyQWRZYzR1N0ppZWhYNktKN3ljNVg4TmlwY01vYVVITERIVXd4NXIySWEyTjRjNi9YeGRmclJFc2k5bzI0ZTNDY1FGRld5MVJMWUM4U1N1bHlBVGpMYTRGcmtuMEJRdDRHeTlNMm54U2tHSXlTU2g4REhZZE05LzBiQzZNWm95MGFCL09zRCs3MGtXbGhIV3NiK28rM1o3bkxFa2swQnpmYlVSd1l2UlZjenNzT1YyWjJWenVkRTJXMmpRVDMwc2ZvV0VZcnRNejVmVmZRdEtkU2M4QktqQk52T3R5dnBicDFSb00yMGlqYmlyMlBPOWxsTG9CbGR6eHVZNFd2QnRZV3lYc2RkRkVxaWROV2ZOZVp0aHM2cDZSRlNpN0pKdmx1dTEzOERacHRzS09ENU9qYTh2aWhqTWNqZ3gvd0JFN2ROWXh4QmJjanZ4Y1g3NWJuS0RtNDNWKzg0dlFzUzZicU9MMzdyTy9odnNmVkh0QmgxTExXVHgxTXNzMHpYUEJjMlF0L1hjMk5oeTlmNFpRc0Z1czVjZWEwTmxTaFhuay9vdFdYQk5YdHhmVi84QXcxZGw2akM2QjVuaXhDWndMZWRCWnhhOXhBNXhZR0M3aGJqb2VzcUw5bkMwcFhTM2J2TDdHMnZDdmpLaWFvNVpQZTBtbDhiNmZFdzRoanRCV1lYTlRQa2ZES1gxRW9oQU9ZeVNTU3l0RjhwYTVwTWdOeDZRUXBxVGlsR3BmZFo4T0hBakRZVEV3cnlwS08rOFcybmF6MGJ2M2FvejFHUDBPSXhST3FLcW9vNmlOdVY3V0dSb2NkTTFpMEZyeGNYQkd1dXZVcGswOVlUMDcxNXA3akNuU3JZZVRqT2ptNzAzNE5HSEM4ZHBLYUxFR1J6eXZlOW9qZ011OGMrUU5nRmptYzNRYnlSK2h0d1dxYzBxVGVhKy9pdTc2SFRIRFZxbUtwcVZQS2xhOWxaSlh2OEFYbmZnWXVUekdCU3hTUTFESG1sbWNTMlJyWFB5T3l0amUxeldBdURUbEJEZ0xBZzN0b3RFSzlDckRzSnlTYVc1dTEwK1Q1OU41TzFhRlNHS2RhbnJlejA0TXNReFNqcDU0Sm96TEpIZDdIdnlQTzZMbWpJNHR5Z2tjVzVnRGJOMVhXbkNVc0hoNmpqQ2F6TmNXdDE5MTkxK205Mk9TdlBFMW9YbEhSZEQyTEZhT25mVnl3bVo4OHNSZUhHS1hLOHQzem10YWN2Zlh2eDQzWUF0MGExT05PUzdWUzFlK1MwdmF5WFJlQzF2dU5UcDFKeWo2bHRPQzVjWDFOTEdLdHBvcVdLbHU4MDI1Y0dscm1ablV4aWNHZlNBZDhHRVg0YXJueFdPcFF4ZEp1U2F2Szl0YlhUU2VuSzl6ZGg4TE9WR2VtcnRiNGFrcFU0N2g4N282bCsrdUhNdkh1WmJ0YzEyWnBlM0pmbXVGOU9vY1Z2bEREZWtSck9jYzF0UFdWdnpVMHhkZFVuVFVYYS9KbnMwd3FLeGptRzdTV1dOaU9hMEJ4ME9vNmVLcEswbGlOb0xMcXJyeTFaWjAwNk9FZWJSMmZtWFZlb0tFSUFnT1VjdEdIMmtncVFPK2FZbkh0YWN6ZndjNzBLMzJaUFNVUGlWTzBvYnBGVjJDeE1VOWRGSTUyVm5PYTgvc2xoL3FHK2hkZU1wZHBTYXRyd09YQjFNbFZQZ1JXTFY3cWlhU2QzR1I1ZjVBVG9QTUxEekxmVGdvUVVWd05OV2JuTnlPcWNqMkQ3dUI5VzRjNlU1Vy9ac0pINHV2Nm9WUnRHcm1tb0xoOHkyMmZTeXd6UGlTL0toVTVNT2xGOVhsakI1M3RMdjRRVm93TWIxMGJzYksxRm5DU3ZRbm56OUdiSzB1Nm82ZVBwYkV5L2xMUVhmaVN2TVY1WnFzbjFQVFVZNWFhWFEzNnVsWkt4MGNqV3ZZNFdjMXd1Q1BJdGNaT0x1ak5wTldaelRhWGt0NHlVYnUzY3ZQNE5lZmM3MHExb2JSNFZQRXJLMnoxdnArQnpHU010SmE0RU9CSUlPaEJCc1FSMEVGV3FkMWRGVTAwN002ZnlNNHE4NzZrY2JzYUJLd2VEYzJlQjJFbHB0MTM2MVU3VHBwV211NHRkblZHMDRNME9XREdkNU95a2FlYkVNei90SGpRZVp2ODVXM1p0SzBYTjhUWHRHcmVTZ3VCVnRqekFLdUo5UThNaVlkNFNRVGNzMVlMQUg5YTNtQlhYaWMvWnRRV3JPWEM1TzBUbTlFZEE1UXRwS0txb254eHp0ZEtITWV4dVY0dVE0QjJwYjRKY3EzQjRlclRxcHlXaFk0dXRTblNhVDFPVVJ5RnBEbTZPYVE0SHFJTngrSVZ3MG1yTXA0dXpUUDB6UlZJbGpaSzN2WHRhOGVSd0JIdlhscFJ5eWFmQTlSRjVrbWpNc1NUd29Ea09JN1J6VHMzYnkwTkRzMW1OeVhJQkF2WTlxdktlSGhCM1htVTFTdE9hcy9JM1BualVkTzZKNnpHQ1RidHVzUFJLZlh4TXZTcW5Ud0pPaHhQRXAyYnlOakhOSmNBK3pBUnFiZ1puWEZscG5UdzhIYVROc0ttSW1yeFg1NG13NmJGdGZvSTllT2tXdmw1K3F4dGhmZWZuOWpPK0o1THkrNXBVdUpZazk3MnNnanpSbXp2bzJ0eXU0MnVYQUU5T25RUWVrTE9WUERwSnVUMTZtTVoxMjJrbHAwTWtqOFg1cEZQR01yczRzSWh6c3BicjlKcm80ckZMQys4L1A3R1Y4UnlYbDl6NFpVWXdRTFUwVnIzQUxJaFlqUzlpL3M0bzQ0WDNuNS9ZbFBFY2wrZkV4dnFNYUxyT2dZNjl5TXpJWEFkTnJoMmc4cW5MaExhUDVpK0k0cjVHbExSWXlhaHRYdWJTTWJrYUE2SU15Mkl0a3o4T2NmdzZsbXA0VlFjTDZmSDdFWmEyYk5Zejc3RytjMFVzVGRNcElaRTNSdzZIYnozTEMyRjk1K2YyTTcxK1g1NGdWT090TGYrMmpMcld6bGtSY2JDMTNPRW1tbmtUTGhIL2svUDdFWHI4dnp4TnprMHdDcXBwcDVLaUxJSHNGam1ZYm5NU2U5Y2JjVmhqSzFPY1lxRHVaNGVuS01tNUk2RXE4NmdnQ0FqY2IrcCszajk1UUd6VjBFVXR0NUZHKzE3WjJOZGEvRzF4cHdIb1FHU25wMlJqS3hyV042bWdOSG9DQXdIQ29ER1lkekZ1aWJtUEkzSVQxbHRyRTZJREpRMEVVRGQzREd5Tm5nc2FHTjlEUWdNRlJnbE5JL2V2cDRYU0Q5ZDBiSE85WWk2QTNKWVd1Rm5ORGgxRUFqOFZqS01aSzBsY3lqS1VYZUxzZVF3TllMTmExbzZnQVBja1lSaXJSVmhLY3B1OG5jK0pxT043bVNQWTF6NHlURzR0QkxDNFpTV2s5NlNEYlJaR0o3VlVrY295eU1ZOEEzQWMwT0FQWFlqanFnTURNSXB3SE5FRUlEckJ3RWJBSFdOeGNXMTExUUdTZWdpZUd0ZkZHNE43ME9ZMGh2Um9DTk9IUWdJL0hLdGdrcDRzd3ptZHBEZW13RGpmc1d0MVlLYWhmVjhEWXFVM0J6dG91Sk1yWWF5c2NvV0JtcnBDR0M4c1IzakIwdXNDSE44N1NiZG9DMVZvWm82RmpzdkZMRDExbTNQUi9mNE00Y0N1QTlvZW9RRUp1RUlCUUZqb3NjcUhOQWJEdk1vQUxobXZ3NG0zU1ZWVmNGUWpLOHBXdjNITE9qVFQxZGpZYmlsV1NCM054MDF6QUR5bm9DMXZEWVZLL2FmSXc3S2w3eFBCVnh6QlFBZ0NrQlFDeTdJVU9wbkkwNzF2L0FKSCtucFYvc2JEYXVzKzVmWDdlSlU3VHI2S2t1OS9RdEs5QVU0UUJBVlBsUXcvZllmSVFPZEVXeWo3cHM3K0Z6bDJZR2VXc3V1aHk0eUdhaytod3BlZ1BQbXhoMUU2ZVdPQm5mU09EQjJaamEva0hIekxDYzFDTGsrQm5UZzV5VVZ4UDBqaDlJMkdKa0xCWnJHaGpmSTBXQzh4T1RsSnlmRTlMR0tpa2tVSGxwcWJRUVJkTHBTL3pSc0kvOWdWanN5UHJ5bDAvUGtjRzBwV2dsMU9WVVZQdkpHUmVHOXJQWGNHLzFWdk9XV0xmSXFhY2Mwa2o5QWJZWW02a29wWm83QjdBME11TGk3bk5hTlBPdk9ZZW1xdFZSWjZHdlU3T201SXBtR2NyVGJBVkZPNi9oUkVFSDdyeUxla3J1bnN4MzlTWGljVU5wUnQ2NjhEYnErVmltRFR1NFpuUDZBN0l4dCswaHhQb0N3anMycGZWb3psdEduYlJNNVJYVlRwWkh6UHRta2U1N3JhQzczRnhzT3E1VnhDS2pGUlhBcDV5Y3BPVDRuUk9TeW43bWdxY1NsRm93ekszOW9NdTU5dXU3c3JSMmdxc3g4dTBuR2xIZVdlQmoyY0pWSkhPNityZE5JK1orcjN1TDNlVnh2Nk9oV2NJS0VWRmNDdHFUYzVPVDRtelRZSFV5TkQ0NmVaN0R3YzJONUIxdG9RTmVDd2xXcHhkbkpHVWFGU1N1b3N5SFp5czhWbjlrLzhBSlI2UlM5NWVKUG8xWDNXUmhGdEZ1Tk5qdlhKdFdiM0RvRDBzQmlQK200dGIvQ0dyenVOaGxyUzhUME9Fbm1veFpabHluU2VPUUhBOTR2UjJLRTkzaUFzMGovOEE0MmwwSnZWT0ZnYkYxOCtnUFdlQzVGL2ZsLzEreDAvN01lLzdralQ0RkhJSGgxUFUwdVZoZUo1SmJzYVdrV3VMOXBQbUsxT3RLTnJTVXRkeVJ0VkdMdm80OVd6V3dhdWt4R1dPbXFKZ0k0MjVpRzNhNnBMU1FEZlMrZzE0ZE9sKzl5cXdqUWk1d1dyOGpHbktWWnFNbm92TWlNSUZPNkZ4a2hxM3pYZGxkRUhsbkRtalEydUQyTGRVenFXamlsMU1JS0dYVk8vUXo0Z3lVREQyVmJKM2t0bXpSdEozem01aGtIRzl3TEhYV3dXTUhIK282ZGx1MTRHVWxMMUZPL0h2TTJDZ05yc3NJbnA0OXhJNThWUTV3Zkx6SGptdEpOOWNwKzQ1WTFkYVY1V2J1dFZ3TTZmOXoxYnBXM01qTUF3OXNsT3g3cUNybkp6ZlN4ekZySFdjUllDK2xyVzhvV3l0TnhtMHBwZEdqR25HOFUzRnY0azF0SmhFNXJKWHowMVZVUUVORU81a3NHQU5Gd1FOYjMvSFhXK21palVoMmFVWkpQamRHMnBDV2R0cHRjTEdyUFRHb3BhYzBjVlMra2pra0ZSVGlTMDJjNVNMbS9PRmliZFYram95VXNrNWRvMW1hVm5iUWhyTkZaVTdjVnhKellCOU15cGxoWkJVd1ZHN0JMSm5sMTJBalVYT2g1dzlLMFlwVGNGSnROZERaUWNWSnBKcDlTL3JnT29JQWdJM0cvcWZ0NC9lVUJKSUFnQ0FJQWdDQUlBZ0NBMDhReE9LRVhrZUFlaHZGeDhqUnF0RmJFMHFLdk4vZndOOUhEMUt6OVJmWXFlSzdXU1B1MklidHZoR3hlZjZOL0ZVdUkyck9lbFBSYytQOEZ6aDlsd2pyVTFmTGgvSkQ0UzRtcXB5U1NUTUNTZFNlWS9wNlZwMmEyOFVtK3Z5TnUwa2xobWwwK1oxQmVuUE5CQWN1NVF0aUhCenF5bGJkcHU2V0pvMUI0bDdSMGc4U1BPT3prclVmOG9ucE5sN1RUU28xbjNQNlA2TTV3Q3VZOUFlb0FnQ0Eyc05xSldQQWh1WHU1b2FCbUxyOEJsNlN0ZFNqR3Fzc2xjd3FLRGplZTVGNnA2S29pRnFuOUlkUTJ6UUFQSzN2ajFxa3h0RlVhbVJSdDlTclZhbFYxcGJqS3VRa0lBZ0NBa3NHd2gwN3I2aU1jWGRmWU9zKzVkMkJ3RThUSzcwanhmMFg1b2NtS3hjYUt0L2x5KzVlWVlnMW9hMFdhQllEcUM5ZENFWVJVWXF5UjU2VW5KdHZlZmF5TVFnQ0F3MWxPSkkzeE83MTdTdytSd0lQdlV4azR0TkVTVjFZNDEvMHVydXVEMTNmQXJ6OVJvOVNtZXpxbk5GbDJCMkRtcGFrMUZSdXpsYVJHR3VMdWM3UWszQXRadHg5NWN1THhzYWtNc0w5VHB3bURkS2VhUjBaVmhZbEI1UjlsYXF1bGlNTzd5UnNJNXp5MDVudTEwc2RMTmFyREJZbW5SaTgxN3M0TVpoNTFtc3ZBZzltK1Rxcmhxb1pwZDF1MlBEM1dlU2VicUxETDFnTG9yNCtuS200eHZkbWloZ1p3cUtVcmFGOTJ6d0oxYlRHbmJJSXptYTY1QklPWFd4c2ROYmE5aXJzTldWS2VacTVZWWlrNnNNdDdITGFya3pyMkhtdGprSFcyUUQrY05WdkhhRkY3N29xWmJQcXJkWXd4Y25PSWsyTUxXOXBranQrQkpXVHg5QmNmSXhXQXJQZ1diQU9TcXhENnVVT0ErcWp1QWZMSWJHM1lBUEt1U3R0SytsTmZGblhTMmNsck5sajI1d09lZWxaUjBqWTJzdU13SnlBTVozalFBRHBleCs2dVhDMW9RcU9kUzl6cHhOS1U2ZVNCei9BUDZYMS84QWsrMFB3cXkvVWFQVXJ2MDZyME94NFpSTmdoamdaM3NiR3NIM1JhNnBKemM1T1Q0bHpDS2pGUlJzckV5T1A0enlhMWI2aVo4VzYzYnBIdmJkNUJEWE9MZ0xaZWk5dk1ycWx0Q2tvSlN2ZXhVVmNCVWxOdFdMbnljNEZVVVVNa00rVFdUT3pLN054YUd1SEFXNzBlbGNPTXJRcXlVbzhqdHdsR1ZLRGpJdHE0enFQSElEODlGMnE5SVVqUXpvUllzMkg0clNHampwcWd6aDBjcnBRWWd6aVM2MnJqMU9YTE9uVlZWemhiVlcxT2lNcWZacU1yNlBnWkpLM0QzQ3o1OFJlM3BhNTdTRFkzc1JkUW8xMXVVU2IwbnZjakxOdExSVFdFa01zQWhjTzUzd1pjN1dEOVYxOU9PdlR4OHBPS29WWWJtbmZmY3lkV25MZXJXM1dNTlZ0UEZCU2lub0pLaGp0NlpIT2UyTzVhV2tFYVhISEtlSFFwamg1VHFacXFXN3FIVlVZWmFiZTgyYWJhcWpjYVNlb05TNm9wMkVFZ01MWHVlMnp5Ym01L0JZU3c5Ulo0d3RabVNxd2VXVXIzUStkTkRKSkJVVEdxTTBVVG85QXpLN08xN1hFM055ZWVVOUhxcE9NYldiTXUxcHRxVHZkRVZGVjRheHVSbFJpakdqZ0d2WTBDL1lEWmJYR3UzZHhnYTA2UzNPUnQ0bmptSHp5dWxNK0pOTHJjMWoydFlMTkRkQmZUaGZ5a3JDRkt0Q05yUk1wVHB5ZDdzeC9LK0dHS09GanErRnJDOC9SdWFIUEx5Mjdua08xTm1DM1ZleW5zNitaeWVWMzUvUVo2VmtsZEZqNU9uMFRwNVhVNHFYeWhnelMxRGc1MlV1NzBXUDdJNDlRWE5pMVZVVm50YmtqYlF5Wm5sdmZxWDljQjFCQUVCRzQzOVQ5dkg3eWdKSkFFQVFCQUVBUUh6SklHaTVJQTZ5YkQwcUcwbGRrcE51eUlXdTJwZ2owYVRJZXB2RDFqcDZMcmdxN1RvUTNQTStuMzNIZlMyYlhudlZsMSt4WE1RMnBuazBiYU52N09ydldQOEFRQlZWYmFsYWVrZlZYVGY0bHBSMlpSaHJMMW4xM2VCQ09KSnVTU1R4SjFKOC9TcTF0dDNaWUpKS3lQRU1qYXdmKzFVLzJvL2tldS9abitwajhma1YrMC85Ty9oOHpxSzlRZVpDQUlDcTdSN0IwdFVUSUFZWlRxWHN0Wng2M000SHlpeDdWcG5SakxVczhMdFd2UVdYMm84bjlIK0lvOWR5WlZqRDlHNktVZGppeDNxdUZ2NGxvZUhrdHhjMDl0NGVYdEpyei9QQTBCc0JpSCtBQjI3eUw0bGoyTStSdi9Wc0o3M2svc1MyRzhsMVE0Z3p5eHh0Nm1Ya2QrSUFINHJPT0hseFp5MWR1MG8vMjR0OStpK3BmOW5kbGFhaUY0bVhrSXNaWDg1NTgvQm83QUFGMFFweGh1S0xGWSt0aVg2NzA1TGQrZDVMVmRLeVZ1VjdRNGU3eUhvVVZxTk90SExOWFJ6MDZzNmJ6UWRpdTFteW5URS83ci9pSDVLa3JiRTQwcGZCL2Y4QWdzNlcxT0ZTUGg5aU9mczdVRDlRSHlPYi9VaGNVdGxZcGY0cDl6WDFzZFMyaFFmSHlaOVJiTjFCNGhyZks0ZitOMWxEWkdKbHZTWGUvdGNpVzBhQzNOdjRmY2w2SFpkamRaSFp6NEkwYitaVmxoOWpVNGExWG02YmwvSnhWdHBUbHBCVytaUE1ZQUFBQUFPQUdnQ3VFa2xaRmEyMjdzK2xKQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQWVPUUg1ekx0VjZVcG1oblFnWjBCNFhvTEh5WElUWStTNUNiSHlYSUQ0SlVnK1VBUUJBZEM1R3YwOVI5bTMrWXF1Mmo3TWU4NnNKdloxZFZSM0JBRUJHNDE5VDl2SDd5Z0pKQUVCNDV3R3BJQVVOcGJ5VW05eEgxR09VN09NcmZJMDVqNkczWE5QSFllRythK0d2eU9tR0NyejNRZngwK1pGMU8yTVk3eU43dTAyYVA2bjhGeFZOc1VsN0NiOHY1OGpzcDdKcVAybWw1L25pUTlYdFhVUDBibGpIWUxuMHUwL0JjTlRhdGFYczJYbjgvc2R0UFpkR1B0WGY1MCs1RFZGUStRM2U1emorMFNiZVRxOHk0S2xXVlIzbTc5NTN3cHdwcTBGYnVNZGxnWml5Z0N5QVdRR3pnLzlxcC90Ui9JOVdHelA5VEg0L0k0TnAvNmQvRDVuVVY2Zzh5RUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVCNDVBZm0xenRUNVY2VXFHTXlFRE1nc2Vaa0I0WElEd3VRSHlTcEI0Z0NBSUFnT2hjalg2ZW8remIvQURGVjIwZlpqM25WaE43T3JxcU80SUFnTU5YU1J5dHlTc1k5bHdjcjJoemJnM0JzZE5DZ05INXVVZmlsUDdLUDhrQStibEg0cFQreWovSkFlTzJab2p4cEtjLzZNZndxSEZQZWpKU2EzTWZObWk4VXB2WXgvQ295UjVEUExteDgyYUx4U245akg4S1pZOGhubHpZK2JORjRwVCt4aitGTXNlUXp5NXNmTm1pOFVwL1l4L0NtV1BJWjVjMlBtelJlS1Uvc1kvaFRMSGtNOHViSHpab3ZGS2YyTWZ3cGxqeUdlWE5qNXMwWGlsUDdHUDRVeXg1RFBMbXg4MmFMeFNuOWpIOEtaWThobmx6WmtwOEFwWTNDUmxOQTE3VGRybXhNYTVwdGE0SUZ4b1Q2VktpbHdEbEo3MlNLa3hDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0E4Y2dQem03RGFpNS83ZWZqL0FJTXZ3cjBmYVE5NWVLS2x4bHlmZ1BrMm84WG45akw4S1o0YzE0b2pMTGsvQWZKdFI0dlA3R1g0VXp3NXJ4UXl5NVB3UFBrMm84WG45akw4S1o0ZTh2RkRMTGsvQWZKbFI0dlA3R1g0VXp3OTVlS0dXWEorQjU4bVQrTHoreGwrRk8waDd5OFVNc3VUOEI4bVQrTHoreGwrRk8waDd5OFVNc3VUOEI4bVQrTHoreGwrRk8waDd5OFVNc3VUOEI4bVQrTHoreGwrRk8waDd5OFVNc3VUOEI4bVQrTHoreGwrRk8waDd5OFVNc3VUOEI4bVQrTHoreGwrRk8waDd5OFVNc3VUOEMvY2tOSkl5YWN2amtZREcyeGV4N0w4NDhNd0Yxd1krVVhHTm1qcXdxYWJ1anFLcXp0Q0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUQvL1pcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYmlsbGluZy9jcmVkaXRjYXJkLmpwZ1xuLy8gbW9kdWxlIGlkID0gNjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=