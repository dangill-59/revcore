exports.ids = [3];
exports.modules = {

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dates_initialize__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dates_initialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dates_initialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__generated_SubscriptionStatusModel__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__update__ = __webpack_require__(720);
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












var Cardlogo = __webpack_require__(883);
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),

/***/ 366:
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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(29);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(29);

var GetIntrinsic = __webpack_require__(366);

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

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementContextTypes = exports.injectContextTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(567);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Provider = __webpack_require__(658);

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

/***/ 567:
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
  module.exports = __webpack_require__(864)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(863)();
}


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(704);
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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(366);

var has = __webpack_require__(391);

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

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

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
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};


/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providerContextTypes = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(567);

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

/***/ 659:
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

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(754);

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

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(674);

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(366);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(391);

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

/***/ 680:
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

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(366);

var has = __webpack_require__(391);
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

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(139)();

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

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(705);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(818);

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

/***/ 705:
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

/***/ 716:
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

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(586);
var bind = __webpack_require__(29);

var implementation = __webpack_require__(674);
var getPolyfill = __webpack_require__(675);
var polyfill = getPolyfill();
var shim = __webpack_require__(719);

var boundFlat = bind.call(Function.call, polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(586);
var getPolyfill = __webpack_require__(675);

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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(78);
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

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(391);
var toPrimitive = __webpack_require__(760);
var keys = __webpack_require__(704);
var inspect = __webpack_require__(816);

var GetIntrinsic = __webpack_require__(366);

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

var hasSymbols = __webpack_require__(139)();

var assertRecord = __webpack_require__(679);
var $isNaN = __webpack_require__(683);
var $isFinite = __webpack_require__(682);
var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(596);
var sign = __webpack_require__(686);
var mod = __webpack_require__(685);
var isPrimitive = __webpack_require__(756);
var forEach = __webpack_require__(681);
var every = __webpack_require__(680);
var isSamePropertyDescriptor = __webpack_require__(757);
var isPropertyDescriptor = __webpack_require__(684);
var parseInteger = parseInt;
var callBind = __webpack_require__(560);
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

var ES5 = __webpack_require__(755);

var hasRegExpMatcher = __webpack_require__(775);

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

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(366);

var $Array = GetIntrinsic('%Array%');

var hasSymbols = __webpack_require__(139)();

var ES2015 = __webpack_require__(752);
var assign = __webpack_require__(596);
var callBind = __webpack_require__(560);

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

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(366);

var ES2016 = __webpack_require__(753);
var assign = __webpack_require__(596);
var forEach = __webpack_require__(681);
var callBind = __webpack_require__(560);

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

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(366);

var $Object = GetIntrinsic('%Object%');
var $TypeError = GetIntrinsic('%TypeError%');
var $String = GetIntrinsic('%String%');
var $Number = GetIntrinsic('%Number%');

var assertRecord = __webpack_require__(679);
var isPropertyDescriptor = __webpack_require__(684);
var $isNaN = __webpack_require__(683);
var $isFinite = __webpack_require__(682);

var sign = __webpack_require__(686);
var mod = __webpack_require__(685);

var IsCallable = __webpack_require__(630);
var toPrimitive = __webpack_require__(759);

var has = __webpack_require__(391);

var callBind = __webpack_require__(560);
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

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var every = __webpack_require__(680);

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

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(687);
var isCallable = __webpack_require__(630);
var isDate = __webpack_require__(774);
var isSymbol = __webpack_require__(690);

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

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(687);

var isCallable = __webpack_require__(630);

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

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(758);


/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(586);
var isSymbol = __webpack_require__(690);

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

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(29);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 774:
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

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(762);
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

/***/ 814:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 816:
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

var inspectCustom = __webpack_require__(817).custom;
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

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17).inspect;


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(705); // eslint-disable-line global-require
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

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__(829);


/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(831));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ 830:
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

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__(881));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(832));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__(882));

var _DefaultTheme = _interopRequireDefault(__webpack_require__(830));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(567);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(716);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(566);

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

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(567);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(716);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(566);

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

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Elements = __webpack_require__(566);

var _Provider = __webpack_require__(658);

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

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdealBankElement = exports.IbanElement = exports.PaymentRequestButtonElement = exports.PostalCodeElement = exports.CardCVCElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = undefined;

var _Provider = __webpack_require__(658);

var _Provider2 = _interopRequireDefault(_Provider);

var _inject = __webpack_require__(860);

var _inject2 = _interopRequireDefault(_inject);

var _Elements = __webpack_require__(566);

var _Elements2 = _interopRequireDefault(_Elements);

var _Element = __webpack_require__(858);

var _Element2 = _interopRequireDefault(_Element);

var _PaymentRequestButtonElement = __webpack_require__(859);

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

/***/ 862:
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
  var ReactPropTypesSecret = __webpack_require__(659);
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

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(659);

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

/***/ 864:
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

var ReactPropTypesSecret = __webpack_require__(659);
var checkPropTypes = __webpack_require__(862);

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

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPrototype = __webpack_require__(718);

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _globalCache = __webpack_require__(761);

var _globalCache2 = _interopRequireDefault(_globalCache);

var _constants = __webpack_require__(878);

var _getClassName = __webpack_require__(879);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _separateStyles2 = __webpack_require__(880);

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

/***/ 878:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
var MAX_SPECIFICITY = 20;

exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ 879:
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

/***/ 880:
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

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(877).default;


/***/ }),

/***/ 882:
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

/***/ 883:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvcj8wNzdiKioiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvcj9kNzQ1KioiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9HZXRJbnRyaW5zaWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9+L2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2NhbGxCaW5kLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9jb21wb25lbnRzL0VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1jYWxsYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZsYXQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzZXJ0UmVjb3JkLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5mbGF0L3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYmlsbGluZy91cGRhdGUudHN4Iiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE3LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzIiwid2VicGFjazovLy8uL34vZ2xvYmFsLWNhY2hlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9saWIvY3NzL19kYXRlcGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1pbnNwZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWluc3BlY3QvdXRpbC5pbnNwZWN0LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGF0ZXMvbGliL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9saWIvdGhlbWUvRGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGF0ZXMvbGliL3V0aWxzL3JlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRhdGVzL2xpYi91dGlscy9yZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvZGlzdC91dGlscy9zZXBhcmF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2NyZWRpdGNhcmQuanBnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2E7QUFFZDtBQUNIO0FBQ0s7QUFjUjtBQVNNO0FBQzBCO0FBUXlCO0FBQ2hEO0FBQ0k7QUFDYztBQUdwRCxJQUFNLFFBQVEsR0FBRyxtQkFBTyxDQUFDLEdBQWtCLENBQUMsQ0FBQztBQUU3QyxJQUFNLGtCQUFrQixHQUFHLGtHQUFnQixFQUFxQixDQUFDO0FBRWpFLElBQU0sY0FBYyxHQUFHLGtHQUFnQixFQUFrQixDQUFDO0FBRTFELElBQU0sZUFBZSxHQUFHLGtHQUFnQixFQUFpQixDQUFDO0FBSTFELElBQU0sU0FBUyxHQUFHLFVBQUMsRUFBb0I7UUFBbEIsc0JBQVEsRUFBRSxrQkFBTTtJQUFPLFFBQzFDLDhEQUFLLFNBQVMsRUFBQyxhQUFhO1FBQzFCLDhEQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7WUFDckMsaUZBQXdCLENBQ3BCO1FBRU4sOERBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtZQUNyQyxxREFBQyxzREFBSyxJQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsR0FBSSxDQUM5RTtRQUVOLDhEQUNFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO1lBRTFGLHFEQUFDLHdFQUFpQixPQUFHLENBQ2pCO1FBRU4sOERBQUssS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFF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O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhLEVBQUU7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFELElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxNQUFNO0FBQ04sY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDalVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7O0FDbkJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1Q0E7O0FBRUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMxRkE7O0FBRUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7Ozs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxzQjs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM5a0JBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG9DOzs7Ozs7O0FDekV0QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSwwQzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxlQUFlO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN2R0Esa0NBQWtDLG93ZSIsImZpbGUiOiIzLjM0Mjc3YzhkOTdmODZhMDUxZDM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWFjdC1kYXRlcy9pbml0aWFsaXplJztcbmltcG9ydCAncmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3MnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb2wsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEdyaWQsXG4gIEltYWdlLFxuICBJbnB1dEdyb3VwLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgUGFuZWwsXG4gIFJvdyxcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7XG4gIENhcmRDVkNFbGVtZW50LFxuICBDYXJkRXhwaXJ5RWxlbWVudCxcbiAgQ2FyZE51bWJlckVsZW1lbnQsXG4gIEVsZW1lbnRzLFxuICBQb3N0YWxDb2RlRWxlbWVudCxcbiAgU3RyaXBlUHJvdmlkZXIsXG4gIGluamVjdFN0cmlwZSxcbn0gZnJvbSAncmVhY3Qtc3RyaXBlLWVsZW1lbnRzJztcbmltcG9ydCBlbnN1cmVCaWxsaW5nLCB7IElCaWxsaW5nU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBDYXJkRWRpdE1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0NhcmRFZGl0TW9kZWwnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZXMnO1xuaW1wb3J0IHsgSUFzeW5jUmVzdWx0IH0gZnJvbSAnYmFzZS9hc3luY1N0YXRlTWlkZGxld2FyZSc7XG5pbXBvcnQgeyBJbnZvaWNlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvSW52b2ljZU1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkRldGFpbHNNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9TdWJzY3JpcHRpb25EZXRhaWxzTW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvU3Vic2NyaXB0aW9uTW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwnO1xuaW1wb3J0IFVwZGF0ZVZpZXcgZnJvbSAnLi91cGRhdGUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUxvYWRlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcbmltcG9ydCBlbnN1cmVXb3Jrc3BhY2UgZnJvbSAnLi4vd29ya3NwYWNlL3JlZHVjZXInO1xuXG5jb25zdCBDYXJkbG9nbyA9IHJlcXVpcmUoJy4vY3JlZGl0Y2FyZC5qcGcnKTtcblxuY29uc3QgU3Vic2NyaXB0aW9uTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxTdWJzY3JpcHRpb25Nb2RlbD4oKTtcblxuY29uc3QgSW52b2ljZXNMb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PEludm9pY2VNb2RlbFtdPigpO1xuXG5jb25zdCBDYXJkc1ZpZXdMb2FkZXIgPSBjcmVhdGVMb2FkZXJWaWV3PENhcmRFZGl0TW9kZWw+KCk7XG5cbnR5cGUgQ29ubmVjdGVkUHJvcHMgPSBJQmlsbGluZ1N0YXRlICYge307XG5cbmNvbnN0IF9DYXJkVmlldyA9ICh7IGRpc3BhdGNoLCBzdHJpcGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICA8c3Bhbj5DYXJkIG51bWJlcjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICA8SW1hZ2Ugc3JjPXtDYXJkbG9nb30gYWx0PSdjcmVkaXQgY2FyZHMnIHN0eWxlPXt7IGhlaWdodDogMjUsIG1hcmdpbkxlZnQ6IDI1IH19IC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICBzdHlsZT17eyBib3JkZXI6ICdzb2xpZCAxcHggI2NjYycsIHBhZGRpbmc6IDUsIHdpZHRoOiAyODEsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6IDEwIH19XG4gICAgPlxuICAgICAgPENhcmROdW1iZXJFbGVtZW50IC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTUgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPkV4cGlyYXRpb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnc29saWQgMXB4ICNjY2MnLCBwYWRkaW5nOiA1LCB3aWR0aDogMTUwIH19PlxuICAgICAgICAgIDxDYXJkRXhwaXJ5RWxlbWVudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW5MZWZ0OiAzMCB9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5TZWN1cml0eSBjb2RlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJywgcGFkZGluZzogNSwgd2lkdGg6IDEwMCB9fT5cbiAgICAgICAgICA8Q2FyZENWQ0VsZW1lbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE1IH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPlppcGNvZGU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnc29saWQgMXB4ICNjY2MnLCBwYWRkaW5nOiA1LCB3aWR0aDogMjgxLCBtYXJnaW46ICdhdXRvJyB9fT5cbiAgICAgICAgICA8UG9zdGFsQ29kZUVsZW1lbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgd2lkdGg6IDI4MSxcbiAgICAgICAgcGFkZGluZzogJzIwcHggMHB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJ1dHRvbiBic1N0eWxlPSdzdWNjZXNzJyBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2F2ZUNhcmQoc3RyaXBlKSl9PlxuICAgICAgICBTdWJtaXQgY2FyZCBpbmZvcm1hdGlvblxuICAgICAgPC9CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1tdXRlZCB0ZXh0LWxlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAqIFJFViB1c2VzIFwiU3RyaXBlXCIgZm9yIGFsbCBjcmVkaXQgY2FyZCBwcm9jZXNzaW5nIGFuZCBzdG9yYWdlLiBZb3VyIGNhcmQgaW5mb3JtYXRpb24gaXNcbiAgICAgICAgICBkaXJlY3RseSB0cmFuc2ZlcnJlZCB0byBzdHJpcGUgYW5kIGlzIG5ldmVyIHNlZW4gYnkgb3VyIHNlcnZlcnMuIFdlIGNob3NlIHN0cmlwZSBhcyBpdCBoYXNcbiAgICAgICAgICBwcm92ZW4gdG8gZXhjZWVkIGhpZ2hlc3QgbGV2ZWxzIG9mIHNlY3VyaXR5IHN0YW5kYXJkcyBpbiBvbmxpbmUgY3JlZGl0IGNhcmQgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0eycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3N0cmlwZS5jb20vZG9jcy9zZWN1cml0eS9zdHJpcGUnIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3NlY3VyaXR5L3N0cmlwZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENhcmRWaWV3ID0gaW5qZWN0U3RyaXBlKF9DYXJkVmlldyk7XG5cbnR5cGUgU3RhdGVQcm9wcyA9IHsgZm9jdXNlZERhdGVpbnB1dD86IGFueTsgZGVsZXRlcGFuZWxPcGVuPzogYm9vbGVhbiB9O1xuXG5jbGFzcyBCaWxsaW5nVmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29ubmVjdGVkUHJvcHMgJiB7IGRpc3BhdGNoIH0sIFN0YXRlUHJvcHM+IHtcbiAgc3RhdGU6IFN0YXRlUHJvcHMgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5Jbml0QmlsbGluZ1ZpZXcoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzcGF0Y2gsXG4gICAgICBzdWJzY3JpcHRpb25Bc3luYyxcbiAgICAgIGNhcmRzT25GaWxlQXN5bmMsXG4gICAgICBlbnRlcmluZ05ld0NhcmQsXG4gICAgICBzaG93aW5nVXBkYXRlVmlldyxcbiAgICAgIG5ld1JldlNlYXRDb3VudCxcbiAgICAgIGNvdXBvbixcbiAgICAgIGludkRhdGVSYW5nZSxcbiAgICAgIGludm9pY2VMaXN0QXN5bmMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtaW5mbyc7XG4gICAgaWYgKHN1YnNjcmlwdGlvbkFzeW5jICYmIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCkge1xuICAgICAgaWYgKFN1YnNjcmlwdGlvblN0YXR1c01vZGVsLnRyaWFsaW5nID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpXG4gICAgICAgIHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LXdhcm5pbmcnO1xuICAgICAgZWxzZSBpZiAoU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwudW5hdmFpbGFibGUgPT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtZGFuZ2VyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBZb3VyIHN1YnNjcmlwdGlvbiBzdGF0dXMgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxleycgJ31cbiAgICAgICAgICA8L2gzPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChTdWJzY3JpcHRpb25TdGF0dXNNb2RlbC5hY3RpdmUgIT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cylcbiAgICAgICAgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtZGFuZ2VyJztcbiAgICB9XG5cbiAgICBsZXQgcmV2UGxhbjogU3Vic2NyaXB0aW9uRGV0YWlsc01vZGVsID0gbnVsbDtcbiAgICBpZiAoc3Vic2NyaXB0aW9uQXN5bmMgJiYgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0KSB7XG4gICAgICByZXZQbGFuID0gXy5maW5kKFxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyxcbiAgICAgICAgKGRldGFpbCkgPT4gJ3JldlNlYXRzJyA9PSBkZXRhaWwuZm9yUHJvZHVjdCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFJldlNlYXRzID0gbmV3UmV2U2VhdENvdW50IHx8IChyZXZQbGFuICYmIHJldlBsYW4ucXVhbnRpdHkpO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPVxuICAgICAgKHN1YnNjcmlwdGlvbkFzeW5jICYmXG4gICAgICAgIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJlxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyAmJlxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscy5sZW5ndGggPiAwICYmXG4gICAgICAgIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5kZXRhaWxzWzBdLmludGVydmFsKSB8fFxuICAgICAgJ21vbnRoJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7c2hvd2luZ1VwZGF0ZVZpZXcgPyAoXG4gICAgICAgICAgPFVwZGF0ZVZpZXcgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkluZm8gdGV4dC1jZW50ZXIgY29udGFpbmVyJz5cbiAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYyAmJiAoXG4gICAgICAgICAgICAgIDxTdWJzY3JpcHRpb25Mb2FkZXJcbiAgICAgICAgICAgICAgICBhc3luY1Jlc3VsdD17c3Vic2NyaXB0aW9uQXN5bmN9XG4gICAgICAgICAgICAgICAgcHJvbXB0PSdsb2FkaW5nIHN1YnNjcmlwdGlvbiBkZXRhaWxzJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknPiBTdWJzY3JpcHRpb24gZGV0YWlsczwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgeydwYXN0X2R1ZScgPT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRyZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBSRVYgc3Vic2NyaXB0aW9uIGlzIGluYWN0aXZlLnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBjb250YWN0IGN1c3RvbWVyIHN1cHBvcnQgYXQgdGhpcyBsaW5rIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3NjYW5yZXYuZnJlc2hkZXNrLmNvbS9hL3RpY2tldHMvbmV3JyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwczovL3NjYW5yZXYuZnJlc2hkZXNrLmNvbS9hL3RpY2tldHMvbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBSRVYgc3Vic2NyaXB0aW9uIGlzIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzfSBhbmQgcGFpZCB0aWxseycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKC0xLCAnZGF5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KCdsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHsndHJpYWxpbmcnID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQudHJpYWxEYXlzTGVmdH0gZGF5KHMpIG9mIGZyZWUgdHJpYWwgbGVmdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TmV4dCBpbnZvaWNlIGRhdGUge21vbWVudChzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZCkuZm9ybWF0KCdsJyl9IDwvc21hbGw+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIG5leHQgaW52b2ljZSBpcyBkdWUgb257JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5jdXJyZW50UGVyaW9kRW5kKS5mb3JtYXQoJ2wnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qe3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5kZXRhaWxzICYmIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaXB0aW9uIGRldGFpbHM6IDxpPigke3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5uZXh0SW52b2ljZUFtb3VudH0ve2ludGVydmFsfSk8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU2l6ZT1cInNtYWxsXCIgYnNTdHlsZT1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5zaG93VXBkYXRlVmlldyh0cnVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5kZXRhaWxzLm1hcChzdWIgPT4gPGxpIGtleT17c3ViLnBsYW5JZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzdWIuaXNNZXRlcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17bmV3UmV2U2VhdENvdW50ID8gJ3RleHQtZGFuZ2VyJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtjdXJyZW50UmV2U2VhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3ViLnVuaXQgJiYgKCcgJyArIHN1Yi51bml0ICsgKGN1cnJlbnRSZXZTZWF0cyA9PSAxID8gJycgOiAncycpKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXsoPFRvb2x0aXAgaWQ9XCJhZGRzZWF0dG9vbHRpcFwiPkFkZCBsaWNlbnNlZCBzZWF0czwvVG9vbHRpcD4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1NpemU9XCJ4c1wiIGJzU3R5bGU9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e2N1cnJlbnRSZXZTZWF0cyA+PSAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuaW5jcmVhc2VSZXZTZWF0Q291bnQodHJ1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9eyg8VG9vbHRpcCBpZD1cInJlbW92ZXNlYXR0b29sdGlwXCI+UmVkdWNlIGxpY2Vuc2VkIHNlYXRzPC9Ub29sdGlwPil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU2l6ZT1cInhzXCIgYnNTdHlsZT1cImRhbmdlclwiIGRpc2FibGVkPXtjdXJyZW50UmV2U2VhdHMgPD0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5pbmNyZWFzZVJldlNlYXRDb3VudChmYWxzZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSwgd2lkdGg6IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhbmV3UmV2U2VhdENvdW50ICYmIDxCdXR0b24gYnNTaXplPVwieHNcIiBic1N0eWxlPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS51cGRhdGVSZXZTZWF0cygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlIHVwZGF0ZWQgc2VhdCBjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCB2YWxpZGF0aW9uU3RhdGU9XCJzdWNjZXNzXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDYwMCwgbWFyZ2luOicxMHB4IGF1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGJzU2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFkZG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGNvdXBvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFkZG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiB2YWx1ZT17Y291cG9uIHx8ICcnfSBvbkNoYW5nZT17IChlOmFueSkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLnNldENvdXBvbihlLnRhcmdldC52YWx1ZSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXshKGNvdXBvbiAmJiBjb3Vwb24ubGVuZ3RoID49IDUpfSBic1N0eWxlPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLmFwcGx5Q291cG9uKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcGx5IHRvIG15IGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TdWJzY3JpcHRpb25Mb2FkZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibWFpbkluZm8gY29udGFpbmVyIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCBhdXRvJywgcGFkZGluZzogMzAgfX0+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVwYW5lbE9wZW46ICF0aGlzLnN0YXRlLmRlbGV0ZXBhbmVsT3BlbiB9KX0gc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Ib3cgY2FuIEkgY2FuY2VsIG15IHN1YnNjcmlwdGlvbj8gPGkgc3R5bGU9e3sgbWFyZ2luZ0xlZnQ6IDIwIH19IGNsYXNzTmFtZT17YGZhIGZhLWNhcmV0LSR7ISF0aGlzLnN0YXRlLmRlbGV0ZXBhbmVsT3BlbiA/ICd1cCcgOiAnZG93bid9YH0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8UGFuZWwgaWQ9XCJjb2xsYXBzaWJsZS1wYW5lbC1kZWxldGVcIiBleHBhbmRlZD17ISF0aGlzLnN0YXRlLmRlbGV0ZXBhbmVsT3Blbn0gb25Ub2dnbGU9eygpID0+IHsgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbC5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gY2FuY2VsIHlvdXIgc3Vic2NyaXB0aW9uIDxzdHJvbmc+YXQgYW55IHRpbWU8L3N0cm9uZz4uIE9uY2UgY2FuY2VsbGVkLCB5b3VyIGNyZWRpdCBjYXJkIHdpbGwgc3RvcCBiZWluZyBjaGFyZ2VkIGFuZCBhbGwgeW91ciBmaWxlcyB3aWxsIGJlIDx1PnNlY3VyZWx5IGRlc3Ryb3llZDwvdT4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaGlzIHByb2Nlc3MgY2Fubm90IGJlIHJldmVyc2VkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbiBjYXNlIHlvdSB3YW50IHRvIHJldHJpZXZlIHlvdXIgZmlsZXMsIHBsZWFzZSBjb250YWN0IGN1c3RvbWVyIHNlcnZpY2UgPGI+QkVGT1JFPC9iPiB5b3UgY2FuY2VsIHlvdXIgc3Vic2NyaXB0aW9uLiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGEgbm9taW5hbCBoYW5kbGluZyBmZWUgb2YgJDUwICgrIG1lZGlhIGFuZCBzaGlwcGluZyBjb3N0cyksIHdlIHdpbGwgPHU+c2hpcCB5b3VyIGRhdGEgdG8geW91PC91Pi4gPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1NpemU9XCJzbWFsbFwiIGJzU3R5bGU9XCJkYW5nZXJcIiBzdHlsZT17eyBtYXJnaW46IDIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZVdvcmtzcGFjZSgpLmRlbGV0ZVdvcmtzcGFjZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbCBteSBzdWJzY3JpcHRpb24gYW5kIGRlbGV0ZSBteSB3b3Jrc3BhY2UuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWwuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9QYW5lbD5cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgIHtjYXJkc09uRmlsZUFzeW5jICYmIChcbiAgICAgICAgICA8Q2FyZHNWaWV3TG9hZGVyIGFzeW5jUmVzdWx0PXtjYXJkc09uRmlsZUFzeW5jfSBwcm9tcHQ9J2xvYWRpbmcgcGF5bWVudCBzb3VyY2VzJz5cbiAgICAgICAgICAgIHtjYXJkc09uRmlsZUFzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT0nbWFpbkluZm8nIHN0eWxlPXt7IG1hcmdpblRvcDogMjAsIHBhZGRpbmc6IDMwIH19PlxuICAgICAgICAgICAgICAgIHtjYXJkc09uRmlsZUFzeW5jLnJlc3VsdC5jdXJyZW50Q2FyZHMgJiZcbiAgICAgICAgICAgICAgICAgIGNhcmRzT25GaWxlQXN5bmMucmVzdWx0LmN1cnJlbnRDYXJkcy5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzbU9mZnNldD17M30gc209ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgbm8gcGF5bWVudCBtZXRob2RzLiBQbGVhc2UgZW50ZXIgb25lIG5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT48L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgeyFlbnRlcmluZ05ld0NhcmQgJiZcbiAgICAgICAgICAgICAgICAgIGNhcmRzT25GaWxlQXN5bmMucmVzdWx0LmN1cnJlbnRDYXJkcyAmJlxuICAgICAgICAgICAgICAgICAgY2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuY3VycmVudENhcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+Q3VycmVudCBwYXltZW50IG1ldGhvZHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJywgbWF4V2lkdGg6IDYwMCwgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuY3VycmVudENhcmRzLm1hcCgoY2FyZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NhcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCB3aWR0aDogNDAsIHBhZGRpbmdUb3A6IDExIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCBmYS0yeCB0ZXh0LXByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0JyBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmlzRXhwaXJlZCA/ICd0ZXh0LWRhbmdlcicgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+IEV4cGlyeSBPbjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkLmV4cGlyYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWNhcmQuaXNEZWZhdWx0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPSdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5tYWtlRGVmYXVsdChjYXJkLmlkKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IG1ha2UgZGVmYXVsdCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luTGVmdDogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkucmVtb3ZlQ2FyZChjYXJkLmlkKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2FybmluZyc+IHJlbW92ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxlZnQnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDQ1LCBwYWRkaW5nVG9wOiA2IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Y2FyZC5icmFuZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuaXNEZWZhdWx0ICYmIDxzcGFuPihkZWZhdWx0KTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJyBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRpbmcgaW4ge2NhcmQubGFzdDR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA2MDAsIG1hcmdpbjogJ2F1dG8nLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJzU2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5zaG93Q2FyZEZvcm0odHJ1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlciBhbm90aGVyIGNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7ZW50ZXJpbmdOZXdDYXJkICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAzNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFN0cmlwZVByb3ZpZGVyIGFwaUtleT17Y2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuc3RyaXBlUHViS2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RWxlbWVudHM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRWxlbWVudHM+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RyaXBlUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ2FyZHNWaWV3TG9hZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluSW5mbyBjb250YWluZXInIHN0eWxlPXt7IG1hcmdpbjogJzIwcHggYXV0bycsIHBhZGRpbmc6IDMwIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICB7aW52b2ljZUxpc3RBc3luYyA/IChcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5NeSBpbnZvaWNlczwvaDQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnNTaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICBic1N0eWxlPSdpbmZvJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2hvd0ludm9pY2VzKCkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVklFVyBJTlZPSUNFU1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKjxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17bW9tZW50KGludkRhdGVSYW5nZS5zdGFydCl9IC8vIG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmogb3IgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUlkPVwiaW52X3N0YXJ0X2RhdGVfaWRcIiAvLyBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlPXttb21lbnQoaW52RGF0ZVJhbmdlLmVuZCl9IC8vIG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmogb3IgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGVJZD1cImludl9lbmRfZGF0ZV9pZFwiIC8vIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF0ZXNDaGFuZ2U9eyh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2hvd0ludm9pY2VzKHsgc3RhcnQ6IHN0YXJ0RGF0ZSwgZW5kOiBlbmREYXRlIH0pKX0gLy8gUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRJbnB1dD17dGhpcy5zdGF0ZS5mb2N1c2VkRGF0ZWlucHV0fSAvLyBQcm9wVHlwZXMub25lT2YoW1NUQVJUX0RBVEUsIEVORF9EQVRFXSkgb3IgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2U9e2ZvY3VzZWRJbnB1dCA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZERhdGVpbnB1dDogZm9jdXNlZElucHV0IH0pfSAvLyBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPdXRzaWRlUmFuZ2U9e2RheSA9PiAobW9tZW50KCkuZGlmZihkYXkpIDw9IDApfVxuICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpbnZvaWNlTGlzdEFzeW5jICYmIChcbiAgICAgICAgICAgICAgPEludm9pY2VzTG9hZGVyIGFzeW5jUmVzdWx0PXtpbnZvaWNlTGlzdEFzeW5jfSBwcm9tcHQ9J2xvYWRpbmcgaW52b2ljZXMnPlxuICAgICAgICAgICAgICAgIHtpbnZvaWNlTGlzdEFzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnMTBweCAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4zNSknIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmdMZWZ0OiAxNSB9fT5EYXRlPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZ0xlZnQ6IDUsIHBhZGRpbmdUb3A6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjUlJyB9fT5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlTGlzdEFzeW5jLnJlc3VsdC5tYXAoKGludm9pY2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2ludm9pY2UubnVtYmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZ0xlZnQ6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoaW52b2ljZS5kYXRlKS5mb3JtYXQoJ0wnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd0ZXh0LWNlbnRlciAnICsgaW52b2ljZS5pbnZvaWNlUGRmID8gJycgOiAndGV4dC13YXJuaW5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLmludm9pY2VQZGYgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwIGlkPSdpbnZ0b29sdGlwJz5Eb3dubG9hZCBwcmludGFibGUgcGRmPC9Ub29sdGlwPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aW52b2ljZS5pbnZvaWNlUGRmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZmlsZS1wZGYtbycgYXJpYS1oaWRkZW49J3RydWUnPjwvaT57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLm51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ludm9pY2UubnVtYmVyfSAtIHBlbmRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2ludm9pY2UuZGVzY3JpcHRpb259PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmdMZWZ0OiA1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtpbnZvaWNlLnBhaWQgPyAnJyA6ICd0ZXh0LWRhbmdlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbnZvaWNlLnRvdGFsLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhaW52b2ljZS5lbmRpbmdCYWxhbmNlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZS5lbmRpbmdCYWxhbmNlIDwgMCA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtZGFuZ2VyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPmJhbGFuY2UgPC9zcGFuPiRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KC0xICogaW52b2ljZS5lbmRpbmdCYWxhbmNlKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ludm9pY2VzTG9hZGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwge30+KChzdGF0ZSkgPT4ge1xuICByZXR1cm4gZW5zdXJlQmlsbGluZygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG59KShCaWxsaW5nVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2luZGV4LnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHNcblx0QXRvbWljcyxcblx0U2hhcmVkQXJyYXlCdWZmZXIsXG4qL1xuXG52YXIgdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG5cbnZhciBUaHJvd1R5cGVFcnJvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcblx0PyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7IH0oKSlcblx0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoKTsgfTtcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJCAlQXJyYXklJzogQXJyYXksXG5cdCckICVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCckICVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFycmF5UHJvdG90eXBlJSc6IEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyQgJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyQgJUFycmF5UHJvdG9fa2V5cyUnOiBBcnJheS5wcm90b3R5cGUua2V5cyxcblx0JyQgJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCckICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNGdW5jdGlvbiUnOiBhc3luY0Z1bmN0aW9uLFxuXHQnJCAlQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJCAlQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJCAlQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyQgJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyQgJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCckICVEYXRlJSc6IERhdGUsXG5cdCckICVEYXRlUHJvdG90eXBlJSc6IERhdGUucHJvdG90eXBlLFxuXHQnJCAlZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyQgJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCckICVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJCAlZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJUVycm9yJSc6IEVycm9yLFxuXHQnJCAlRXJyb3JQcm90b3R5cGUlJzogRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyQgJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCckICVFdmFsRXJyb3JQcm90b3R5cGUlJzogRXZhbEVycm9yLnByb3RvdHlwZSxcblx0JyQgJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyQgJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCckICVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCckICVGdW5jdGlvblByb3RvdHlwZSUnOiBGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCckICVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCckICVHZW5lcmF0b3JQcm90b3R5cGUlJzogZ2VuZXJhdG9yRnVuY3Rpb24gPyBnZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCckICVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJCAlSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJCAlSW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJCAlaXNOYU4lJzogaXNOYU4sXG5cdCckICVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCckICVKU09OJSc6IEpTT04sXG5cdCckICVKU09OUGFyc2UlJzogSlNPTi5wYXJzZSxcblx0JyQgJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyQgJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJCAlTWF0aCUnOiBNYXRoLFxuXHQnJCAlTnVtYmVyJSc6IE51bWJlcixcblx0JyQgJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJCAlT2JqZWN0JSc6IE9iamVjdCxcblx0JyQgJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJCAlT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyQgJU9ialByb3RvX3ZhbHVlT2YlJzogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLFxuXHQnJCAlcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJCAlcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCckICVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCckICVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJCAlUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyQgJVByb21pc2VfYWxsJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UuYWxsLFxuXHQnJCAlUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCckICVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJCAlUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJCAlUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJCAlUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJCAlUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyQgJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJCAlU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJCAlU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlU3RyaW5nJSc6IFN0cmluZyxcblx0JyQgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlU3RyaW5nUHJvdG90eXBlJSc6IFN0cmluZy5wcm90b3R5cGUsXG5cdCckICVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bnRheEVycm9yJSc6IFN5bnRheEVycm9yLFxuXHQnJCAlU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCckICVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCckICVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVR5cGVFcnJvciUnOiBUeXBlRXJyb3IsXG5cdCckICVUeXBlRXJyb3JQcm90b3R5cGUlJzogVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyQgJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCckICVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJCAlVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyQgJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyQgJVVSSUVycm9yUHJvdG90eXBlJSc6IFVSSUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyQgJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCckICVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQsXG5cdCckICVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBrZXkgPSAnJCAnICsgbmFtZTtcblx0aWYgKCEoa2V5IGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW2tleV0gPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cdHJldHVybiBJTlRSSU5TSUNTW2tleV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qc1xuLy8gbW9kdWxlIGlkID0gMzY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRGdW5jdGlvbiA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uJScpO1xudmFyICRhcHBseSA9ICRGdW5jdGlvbi5hcHBseTtcbnZhciAkY2FsbCA9ICRGdW5jdGlvbi5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKCkge1xuXHRyZXR1cm4gYmluZC5hcHBseSgkY2FsbCwgYXJndW1lbnRzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmFwcGx5ID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gYmluZC5hcHBseSgkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDU2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVsZW1lbnRDb250ZXh0VHlwZXMgPSBleHBvcnRzLmluamVjdENvbnRleHRUeXBlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Qcm92aWRlciA9IHJlcXVpcmUoJy4vUHJvdmlkZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgaW5qZWN0Q29udGV4dFR5cGVzID0gZXhwb3J0cy5pbmplY3RDb250ZXh0VHlwZXMgPSB7XG4gIGdldFJlZ2lzdGVyZWRFbGVtZW50czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbnZhciBlbGVtZW50Q29udGV4dFR5cGVzID0gZXhwb3J0cy5lbGVtZW50Q29udGV4dFR5cGVzID0ge1xuICBhZGRFbGVtZW50c0xvYWRMaXN0ZW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlZ2lzdGVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHVucmVnaXN0ZXJFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxufTtcblxudmFyIEVsZW1lbnRzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEVsZW1lbnRzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFbGVtZW50cyhwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50cyk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZVJlZ2lzdGVyRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpbXBsaWVkVG9rZW5UeXBlLCBpbXBsaWVkU291cmNlVHlwZSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZ2lzdGVyZWRFbGVtZW50czogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwcmV2U3RhdGUucmVnaXN0ZXJlZEVsZW1lbnRzKSwgW19leHRlbmRzKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgICB9LCBpbXBsaWVkVG9rZW5UeXBlID8geyBpbXBsaWVkVG9rZW5UeXBlOiBpbXBsaWVkVG9rZW5UeXBlIH0gOiB7fSwgaW1wbGllZFNvdXJjZVR5cGUgPyB7IGltcGxpZWRTb3VyY2VUeXBlOiBpbXBsaWVkU291cmNlVHlwZSB9IDoge30pXSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVVbnJlZ2lzdGVyRWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZ2lzdGVyZWRFbGVtZW50czogcHJldlN0YXRlLnJlZ2lzdGVyZWRFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgIT09IGVsO1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICByZWdpc3RlcmVkRWxlbWVudHM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBFbGVtZW50cy5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZEVsZW1lbnRzTG9hZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbGVtZW50c0xvYWRMaXN0ZW5lcihmbikge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGluc3RhbmNlIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmUuXG4gICAgICAgIGlmIChfdGhpczIuX2VsZW1lbnRzKSB7XG4gICAgICAgICAgZm4oX3RoaXMyLl9lbGVtZW50cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9wcm9wcyA9IF90aGlzMi5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nXSk7XG5cbiAgICAgICAgaWYgKF90aGlzMi5jb250ZXh0LnRhZyA9PT0gJ3N5bmMnKSB7XG4gICAgICAgICAgX3RoaXMyLl9lbGVtZW50cyA9IF90aGlzMi5jb250ZXh0LnN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgICAgICBmbihfdGhpczIuX2VsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuY29udGV4dC5hZGRTdHJpcGVMb2FkTGlzdGVuZXIoZnVuY3Rpb24gKHN0cmlwZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzMi5fZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgZm4oX3RoaXMyLl9lbGVtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpczIuX2VsZW1lbnRzID0gc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpO1xuICAgICAgICAgICAgICBmbihfdGhpczIuX2VsZW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyRWxlbWVudDogdGhpcy5oYW5kbGVSZWdpc3RlckVsZW1lbnQsXG4gICAgICB1bnJlZ2lzdGVyRWxlbWVudDogdGhpcy5oYW5kbGVVbnJlZ2lzdGVyRWxlbWVudCxcbiAgICAgIGdldFJlZ2lzdGVyZWRFbGVtZW50czogZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnN0YXRlLnJlZ2lzdGVyZWRFbGVtZW50cztcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIEVsZW1lbnRzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBFbGVtZW50cztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkVsZW1lbnRzLmNoaWxkQ29udGV4dFR5cGVzID0gX2V4dGVuZHMoe30sIGluamVjdENvbnRleHRUeXBlcywgZWxlbWVudENvbnRleHRUeXBlcyk7XG5FbGVtZW50cy5jb250ZXh0VHlwZXMgPSBfUHJvdmlkZXIucHJvdmlkZXJDb250ZXh0VHlwZXM7XG5FbGVtZW50cy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRWxlbWVudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9FbGVtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgnZm9vJykgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgb3JpZ0RlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAodmFyIF8gaW4gb2JqKSB7IC8vIGpzY3M6aWdub3JlIGRpc2FsbG93VW51c2VkVmFyaWFibGVzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBvYmoueCA9PT0gb2JqO1xuXHR9IGNhdGNoIChlKSB7IC8qIHRoaXMgaXMgSUUgOC4gKi9cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IG9yaWdEZWZpbmVQcm9wZXJ0eSAmJiBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkKCk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7XG5cdH1cbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwKSB7XG5cdHZhciBwcmVkaWNhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB7fTtcblx0dmFyIHByb3BzID0ga2V5cyhtYXApO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdHByb3BzID0gY29uY2F0LmNhbGwocHJvcHMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWFwKSk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcHNbaV0sIG1hcFtwcm9wc1tpXV0sIHByZWRpY2F0ZXNbcHJvcHNbaV1dKTtcblx0fVxufTtcblxuZGVmaW5lUHJvcGVydGllcy5zdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFzdXBwb3J0c0Rlc2NyaXB0b3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuXG52YXIgJGFzc2lnbiA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKS5hc3NpZ247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICgkYXNzaWduKSB7XG5cdFx0cmV0dXJuICRhc3NpZ24odGFyZ2V0LCBzb3VyY2UpO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoaGFzKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDU5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZmxlY3RBcHBseSA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0ICE9PSBudWxsICYmIFJlZmxlY3QuYXBwbHk7XG52YXIgYmFkQXJyYXlMaWtlO1xudmFyIGlzQ2FsbGFibGVNYXJrZXI7XG5pZiAodHlwZW9mIHJlZmxlY3RBcHBseSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG5cdHRyeSB7XG5cdFx0YmFkQXJyYXlMaWtlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnbGVuZ3RoJywge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGlzQ2FsbGFibGVNYXJrZXI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aXNDYWxsYWJsZU1hcmtlciA9IHt9O1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG5cdFx0cmVmbGVjdEFwcGx5KGZ1bmN0aW9uICgpIHsgdGhyb3cgNDI7IH0sIG51bGwsIGJhZEFycmF5TGlrZSk7XG5cdH0gY2F0Y2ggKF8pIHtcblx0XHRpZiAoXyAhPT0gaXNDYWxsYWJsZU1hcmtlcikge1xuXHRcdFx0cmVmbGVjdEFwcGx5ID0gbnVsbDtcblx0XHR9XG5cdH1cbn0gZWxzZSB7XG5cdHJlZmxlY3RBcHBseSA9IG51bGw7XG59XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3NcXGIvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGdW5jdGlvbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChmblN0cik7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uVG9TdHIodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBvYmplY3RDbGFzcyA9ICdbb2JqZWN0IE9iamVjdF0nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBkZGFDbGFzcyA9ICdbb2JqZWN0IEhUTUxBbGxDb2xsZWN0aW9uXSc7IC8vIElFIDExXG52YXIgZGRhQ2xhc3MyID0gJ1tvYmplY3QgSFRNTCBkb2N1bWVudC5hbGwgY2xhc3NdJztcbnZhciBkZGFDbGFzczMgPSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nOyAvLyBJRSA5LTEwXG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmICEhU3ltYm9sLnRvU3RyaW5nVGFnOyAvLyBiZXR0ZXI6IHVzZSBgaGFzLXRvc3RyaW5ndGFnYFxuXG52YXIgaXNJRTY4ID0gISgwIGluIFssXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc3BhcnNlLWFycmF5cywgY29tbWEtc3BhY2luZ1xuXG52YXIgaXNEREEgPSBmdW5jdGlvbiBpc0RvY3VtZW50RG90QWxsKCkgeyByZXR1cm4gZmFsc2U7IH07XG5pZiAodHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0Jykge1xuXHQvLyBGaXJlZm94IDMgY2Fub25pY2FsaXplcyBEREEgdG8gdW5kZWZpbmVkIHdoZW4gaXQncyBub3QgYWNjZXNzZWQgZGlyZWN0bHlcblx0dmFyIGFsbCA9IGRvY3VtZW50LmFsbDtcblx0aWYgKHRvU3RyLmNhbGwoYWxsKSA9PT0gdG9TdHIuY2FsbChkb2N1bWVudC5hbGwpKSB7XG5cdFx0aXNEREEgPSBmdW5jdGlvbiBpc0RvY3VtZW50RG90QWxsKHZhbHVlKSB7XG5cdFx0XHQvKiBnbG9iYWxzIGRvY3VtZW50OiBmYWxzZSAqL1xuXHRcdFx0Ly8gaW4gSUUgNi04LCB0eXBlb2YgZG9jdW1lbnQuYWxsIGlzIFwib2JqZWN0XCIgYW5kIGl0J3MgdHJ1dGh5XG5cdFx0XHRpZiAoKGlzSUU2OCB8fCAhdmFsdWUpICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRzdHIgPT09IGRkYUNsYXNzXG5cdFx0XHRcdFx0XHR8fCBzdHIgPT09IGRkYUNsYXNzMlxuXHRcdFx0XHRcdFx0fHwgc3RyID09PSBkZGFDbGFzczMgLy8gb3BlcmEgMTIuMTZcblx0XHRcdFx0XHRcdHx8IHN0ciA9PT0gb2JqZWN0Q2xhc3MgLy8gSUUgNi04XG5cdFx0XHRcdFx0KSAmJiB2YWx1ZSgnJykgPT0gbnVsbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcblx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvKiovIH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVmbGVjdEFwcGx5XG5cdD8gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRcdGlmIChpc0REQSh2YWx1ZSkpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0cnkge1xuXHRcdFx0cmVmbGVjdEFwcGx5KHZhbHVlLCBudWxsLCBiYWRBcnJheUxpa2UpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmIChlICE9PSBpc0NhbGxhYmxlTWFya2VyKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdH1cblx0XHRyZXR1cm4gIWlzRVM2Q2xhc3NGbih2YWx1ZSkgJiYgdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpO1xuXHR9XG5cdDogZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRcdGlmIChpc0REQSh2YWx1ZSkpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdGlmIChzdHJDbGFzcyAhPT0gZm5DbGFzcyAmJiBzdHJDbGFzcyAhPT0gZ2VuQ2xhc3MgJiYgISgvXlxcW29iamVjdCBIVE1MLykudGVzdChzdHJDbGFzcykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTtcblx0fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvdmlkZXJDb250ZXh0VHlwZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBUT0RPKGpleikgJ3N5bmMnIGFuZCAnYXN5bmMnIGFyZSBiYWQgdGFnIG5hbWVzLlxuLy8gVE9ETyhqZXopIFdoYXQgaWYgcmVkdXggYWxzbyB1c2VzIHRoaXMuY29udGV4dC50YWc/XG52YXIgcHJvdmlkZXJDb250ZXh0VHlwZXMgPSBleHBvcnRzLnByb3ZpZGVyQ29udGV4dFR5cGVzID0ge1xuICB0YWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0cmlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGFkZFN0cmlwZUxvYWRMaXN0ZW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG52YXIgZ2V0T3JDcmVhdGVTdHJpcGUgPSBmdW5jdGlvbiBnZXRPckNyZWF0ZVN0cmlwZShhcGlLZXksIG9wdGlvbnMpIHtcbiAgLyoqXG4gICAqIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBtZWFudCB0byBiZSBhIGdlbmVyaWMgbWVtb2l6YXRpb24gc29sdXRpb24uXG4gICAqIFRoaXMgaXMgc3BlY2lmaWNhbGx5IGEgc29sdXRpb24gZm9yIGBTdHJpcGVQcm92aWRlcmBzIGJlaW5nIGluaXRpYWxpemVkXG4gICAqIGFuZCBkZXN0cm95ZWQgcmVndWxhcmx5ICh3aXRoIHRoZSBzYW1lIHNldCBvZiBwcm9wcykgd2hlbiB1c2VycyBvbmx5XG4gICAqIHVzZSBgU3RyaXBlUHJvdmlkZXJgIGZvciB0aGUgc3VidHJlZSB0aGF0IGNvbnRhaW5zIHRoZWlyIGNoZWNrb3V0IGZvcm0uXG4gICAqL1xuICB3aW5kb3cuU3RyaXBlLl9fY2FjaGVkSW5zdGFuY2VzID0gd2luZG93LlN0cmlwZS5fX2NhY2hlZEluc3RhbmNlcyB8fCB7fTtcbiAgdmFyIGNhY2hlS2V5ID0gJ2tleT0nICsgYXBpS2V5ICsgJyBvcHRpb25zPScgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcblxuICB2YXIgc3RyaXBlID0gd2luZG93LlN0cmlwZS5fX2NhY2hlZEluc3RhbmNlc1tjYWNoZUtleV0gfHwgd2luZG93LlN0cmlwZShhcGlLZXksIG9wdGlvbnMpO1xuICB3aW5kb3cuU3RyaXBlLl9fY2FjaGVkSW5zdGFuY2VzW2NhY2hlS2V5XSA9IHN0cmlwZTtcblxuICByZXR1cm4gc3RyaXBlO1xufTtcblxudmFyIGVuc3VyZVN0cmlwZVNoYXBlID0gZnVuY3Rpb24gZW5zdXJlU3RyaXBlU2hhcGUoc3RyaXBlKSB7XG4gIGlmIChzdHJpcGUgJiYgc3RyaXBlLmVsZW1lbnRzICYmIHN0cmlwZS5jcmVhdGVTb3VyY2UgJiYgc3RyaXBlLmNyZWF0ZVRva2VuKSB7XG4gICAgcmV0dXJuIHN0cmlwZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcGFzcyBhIHZhbGlkIFN0cmlwZSBvYmplY3QgdG8gU3RyaXBlUHJvdmlkZXIuIFlvdSBjYW4gb2J0YWluIGEgU3RyaXBlIG9iamVjdCBieSBjYWxsaW5nICdTdHJpcGUoLi4uKScgd2l0aCB5b3VyIHB1Ymxpc2hhYmxlIGtleS5cIik7XG4gIH1cbn07XG5cbnZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgLy8gb24gdGhlIG90aGVyIGhhbmQ6IGNoaWxkQ29udGV4dFR5cGVzIGlzICpyZXF1aXJlZCogdG8gdXNlIGNvbnRleHQuXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgaWYgKF90aGlzLnByb3BzLmFwaUtleSAmJiBfdGhpcy5wcm9wcy5zdHJpcGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIGVpdGhlciAnYXBpS2V5JyBvciAnc3RyaXBlJyB0byBTdHJpcGVQcm92aWRlciwgbm90IGJvdGguXCIpO1xuICAgIH0gZWxzZSBpZiAoX3RoaXMucHJvcHMuYXBpS2V5KSB7XG4gICAgICBpZiAoIXdpbmRvdy5TdHJpcGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGxvYWQgU3RyaXBlLmpzIChodHRwczovL2pzLnN0cmlwZS5jb20vdjMvKSBvbiB0aGlzIHBhZ2UgdG8gdXNlIHJlYWN0LXN0cmlwZS1lbGVtZW50cy4gSWYgU3RyaXBlLmpzIGlzbid0IGF2YWlsYWJsZSB5ZXQgKGl0J3MgbG9hZGluZyBhc3luY2hyb25vdXNseSwgb3IgeW91J3JlIHVzaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZyksIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RyaXBlL3JlYWN0LXN0cmlwZS1lbGVtZW50cyNhZHZhbmNlZC1pbnRlZ3JhdGlvbnNcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIF9hcGlLZXkgPSBfdGhpcyRwcm9wcy5hcGlLZXksXG4gICAgICAgICAgICBfY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIF9zdHJpcGUgPSBfdGhpcyRwcm9wcy5zdHJpcGUsXG4gICAgICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzLCBbJ2FwaUtleScsICdjaGlsZHJlbicsICdzdHJpcGUnXSk7XG5cbiAgICAgICAgX3RoaXMuX21ldGEgPSB7XG4gICAgICAgICAgdGFnOiAnc3luYycsXG4gICAgICAgICAgc3RyaXBlOiBnZXRPckNyZWF0ZVN0cmlwZShfYXBpS2V5LCBvcHRpb25zKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3RoaXMucHJvcHMuc3RyaXBlKSB7XG4gICAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSBzdHJpcGUgaW5zdGFuY2UgKGluIHRoZSBjb25zdHJ1Y3RvciksIHdlIGNhbiBiZWhhdmUgc3luY2hyb25vdXNseS5cbiAgICAgIF90aGlzLl9tZXRhID0ge1xuICAgICAgICB0YWc6ICdzeW5jJyxcbiAgICAgICAgc3RyaXBlOiBlbnN1cmVTdHJpcGVTaGFwZShfdGhpcy5wcm9wcy5zdHJpcGUpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoX3RoaXMucHJvcHMuc3RyaXBlID09PSBudWxsKSB7XG4gICAgICBfdGhpcy5fbWV0YSA9IHtcbiAgICAgICAgdGFnOiAnYXN5bmMnLFxuICAgICAgICBzdHJpcGU6IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIGVpdGhlciAnYXBpS2V5JyBvciAnc3RyaXBlJyB0byBTdHJpcGVQcm92aWRlci4gSWYgeW91J3JlIHVzaW5nICdzdHJpcGUnIGJ1dCBkb24ndCBoYXZlIGEgU3RyaXBlIGluc3RhbmNlIHlldCwgcGFzcyAnbnVsbCcgZXhwbGljaXRseS5cIik7XG4gICAgfVxuXG4gICAgX3RoaXMuX2RpZFdhcm4gPSBmYWxzZTtcbiAgICBfdGhpcy5fZGlkV2FrZVVwTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgX3RoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvLyBFdmVuIHRob3VnaCB3ZSdyZSB1c2luZyBmbG93LCBhbHNvIHVzZSBQcm9wVHlwZXMgc28gd2UgY2FuIHRha2UgYWR2YW50YWdlIG9mIGRldmVsb3BlciB3YXJuaW5ncy5cblxuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBnZXRDaGlsZENvbnRleHQgaXMgcnVuIGFmdGVyIHRoZSBjb25zdHJ1Y3Rvciwgc28gd2UgV0lMTCBoYXZlIGFjY2VzcyB0b1xuICAgIC8vIHRoZSBpbml0aWFsIHN0YXRlLlxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgY29udGV4dCBkb2Vzbid0IHVwZGF0ZSBpbiByZXNwbnNlIHRvIHN0YXRlIGNoYW5nZXMgbGlrZSB5b3VcbiAgICAvLyBtaWdodCBleHBlY3Q6IGNvbnRleHQgaXMgcHVsbGVkIGJ5IHRoZSBjaGlsZCwgbm90IHB1c2hlZCBieSB0aGUgcGFyZW50LlxuICAgIGlmICh0aGlzLl9tZXRhLnRhZyA9PT0gJ3N5bmMnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWc6ICdzeW5jJyxcbiAgICAgICAgc3RyaXBlOiB0aGlzLl9tZXRhLnN0cmlwZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFnOiAnYXN5bmMnLFxuICAgICAgICBhZGRTdHJpcGVMb2FkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0cmlwZUxvYWRMaXN0ZW5lcihmbikge1xuICAgICAgICAgIGlmIChfdGhpczIuX21ldGEuc3RyaXBlKSB7XG4gICAgICAgICAgICBmbihfdGhpczIuX21ldGEuc3RyaXBlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMyLl9saXN0ZW5lcnMucHVzaChmbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGFwaUtleUNoYW5nZWQgPSB0aGlzLnByb3BzLmFwaUtleSAmJiBuZXh0UHJvcHMuYXBpS2V5ICYmIHRoaXMucHJvcHMuYXBpS2V5ICE9PSBuZXh0UHJvcHMuYXBpS2V5O1xuXG4gICAgdmFyIHN0cmlwZUluc3RhbmNlQ2hhbmdlZCA9IHRoaXMucHJvcHMuc3RyaXBlICYmIG5leHRQcm9wcy5zdHJpcGUgJiYgdGhpcy5wcm9wcy5zdHJpcGUgIT09IG5leHRQcm9wcy5zdHJpcGU7XG4gICAgaWYgKCF0aGlzLl9kaWRXYXJuICYmIChhcGlLZXlDaGFuZ2VkIHx8IHN0cmlwZUluc3RhbmNlQ2hhbmdlZCkgJiYgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUuZXJyb3IpIHtcbiAgICAgIHRoaXMuX2RpZFdhcm4gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0cmlwZVByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgY2hhbmdpbmcgdGhlIGFwaUtleSBwYXJhbWV0ZXIuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9kaWRXYWtlVXBMaXN0ZW5lcnMgJiYgbmV4dFByb3BzLnN0cmlwZSkge1xuICAgICAgLy8gV2FrZSB1cCB0aGUgbGlzdGVuZXJzIGlmIHdlJ3ZlIGZpbmFsbHkgYmVlbiBnaXZlbiBhIFN0cmlwZVNoYXBlXG4gICAgICB0aGlzLl9kaWRXYWtlVXBMaXN0ZW5lcnMgPSB0cnVlO1xuICAgICAgdmFyIF9zdHJpcGUyID0gZW5zdXJlU3RyaXBlU2hhcGUobmV4dFByb3BzLnN0cmlwZSk7XG4gICAgICB0aGlzLl9tZXRhLnN0cmlwZSA9IF9zdHJpcGUyO1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGZuKF9zdHJpcGUyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gUHJvdmlkZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Qcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGFwaUtleTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8vIFByb3BUeXBlcy5vYmplY3QgaXMgdGhlIG9ubHkgd2F5IHdlIGNhbiBhY2NlcHQgYSBTdHJpcGUgaW5zdGFuY2VcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIHN0cmlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5Qcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IHByb3ZpZGVyQ29udGV4dFR5cGVzO1xuUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBhcGlLZXk6IHVuZGVmaW5lZCxcbiAgc3RyaXBlOiB1bmRlZmluZWQsXG4gIGNoaWxkcmVuOiBudWxsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvdmlkZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9Qcm92aWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczIwMTcnKTtcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCAoTWF0aC5wb3coMiwgNTMpIC0gMSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zLCBtYXgtc3RhdGVtZW50c1xudmFyIEZsYXR0ZW5JbnRvQXJyYXkgPSBmdW5jdGlvbiBGbGF0dGVuSW50b0FycmF5KHRhcmdldCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCkge1xuXHR2YXIgdGFyZ2V0SW5kZXggPSBzdGFydDtcblx0dmFyIHNvdXJjZUluZGV4ID0gMDtcblxuXHQvKlxuXHR2YXIgbWFwcGVyRnVuY3Rpb247XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNSkge1xuXHRcdG1hcHBlckZ1bmN0aW9uID0gYXJndW1lbnRzWzVdO1xuXHR9XG5cdCovXG5cblx0d2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG5cdFx0dmFyIFAgPSBFUy5Ub1N0cmluZyhzb3VyY2VJbmRleCk7XG5cdFx0dmFyIGV4aXN0cyA9IEVTLkhhc1Byb3BlcnR5KHNvdXJjZSwgUCk7XG5cdFx0aWYgKGV4aXN0cykge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBFUy5HZXQoc291cmNlLCBQKTtcblx0XHRcdC8qXG5cdFx0XHRpZiAodHlwZW9mIG1hcHBlckZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSA2KSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogdGhpc0FyZyBpcyByZXF1aXJlZCB3aGVuIG1hcHBlckZ1bmN0aW9uIGlzIHByb3ZpZGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudCA9IEVTLkNhbGwobWFwcGVyRnVuY3Rpb24sIGFyZ3VtZW50c1s2XSwgW2VsZW1lbnQsIHNvdXJjZUluZGV4LCBzb3VyY2VdKTtcblx0XHRcdH1cblx0XHRcdCovXG5cdFx0XHR2YXIgc2hvdWxkRmxhdHRlbiA9IGZhbHNlO1xuXHRcdFx0aWYgKGRlcHRoID4gMCkge1xuXHRcdFx0XHRzaG91bGRGbGF0dGVuID0gRVMuSXNBcnJheShlbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRGbGF0dGVuKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50TGVuID0gRVMuVG9MZW5ndGgoRVMuR2V0KGVsZW1lbnQsICdsZW5ndGgnKSk7XG5cdFx0XHRcdHRhcmdldEluZGV4ID0gRmxhdHRlbkludG9BcnJheSh0YXJnZXQsIGVsZW1lbnQsIGVsZW1lbnRMZW4sIHRhcmdldEluZGV4LCBkZXB0aCAtIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRhcmdldEluZGV4ID49IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCB0b28gbGFyZ2UnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRFUy5DcmVhdGVEYXRhUHJvcGVydHlPclRocm93KHRhcmdldCwgRVMuVG9TdHJpbmcodGFyZ2V0SW5kZXgpLCBlbGVtZW50KTtcblx0XHRcdFx0dGFyZ2V0SW5kZXggKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c291cmNlSW5kZXggKz0gMTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXRJbmRleDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxhdCgpIHtcblx0dmFyIE8gPSBFUy5Ub09iamVjdCh0aGlzKTtcblx0dmFyIHNvdXJjZUxlbiA9IEVTLlRvTGVuZ3RoKEVTLkdldChPLCAnbGVuZ3RoJykpO1xuXG5cdHZhciBkZXB0aE51bSA9IDE7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGRlcHRoTnVtID0gRVMuVG9JbnRlZ2VyKGFyZ3VtZW50c1swXSk7XG5cdH1cblxuXHR2YXIgQSA9IEVTLkFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcblx0RmxhdHRlbkludG9BcnJheShBLCBPLCBzb3VyY2VMZW4sIDAsIGRlcHRoTnVtKTtcblx0cmV0dXJuIEE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5mbGF0L2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmxhdCB8fCBpbXBsZW1lbnRhdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZsYXQvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIHByZWRpY2F0ZXMgPSB7XG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuXHQnUHJvcGVydHkgRGVzY3JpcHRvcic6IGZ1bmN0aW9uIGlzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG5cdFx0aWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhbGxvd2VkID0ge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0dldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1NldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuXHRcdHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG5cdFx0aWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2VydFJlY29yZChFUywgcmVjb3JkVHlwZSwgYXJndW1lbnROYW1lLCB2YWx1ZSkge1xuXHR2YXIgcHJlZGljYXRlID0gcHJlZGljYXRlc1tyZWNvcmRUeXBlXTtcblx0aWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCd1bmtub3duIHJlY29yZCB0eXBlOiAnICsgcmVjb3JkVHlwZSk7XG5cdH1cblx0aWYgKCFwcmVkaWNhdGUoRVMsIHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKGFyZ3VtZW50TmFtZSArICcgbXVzdCBiZSBhICcgKyByZWNvcmRUeXBlKTtcblx0fVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2VydFJlY29yZC5qc1xuLy8gbW9kdWxlIGlkID0gNjc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBldmVyeShhcnJheSwgcHJlZGljYXRlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoIXByZWRpY2F0ZShhcnJheVtpXSwgaSwgYXJyYXkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2V2ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjYWxsYmFjayhhcnJheVtpXSwgaSwgYXJyYXkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbGxiYWNrLXJldHVyblxuXHR9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvZm9yRWFjaC5qc1xuLy8gbW9kdWxlIGlkID0gNjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTihhKSB7XG5cdHJldHVybiBhICE9PSBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG5cdGlmIChFUy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgYWxsb3dlZCA9IHtcblx0XHQnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG5cdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHQnW1tHZXRdXSc6IHRydWUsXG5cdFx0J1tbU2V0XV0nOiB0cnVlLFxuXHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdCdbW1dyaXRhYmxlXV0nOiB0cnVlXG5cdH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gRGVzYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpZiAoRVMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSAmJiBFUy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQcm9wZXJ0eSBEZXNjcmlwdG9ycyBtYXkgbm90IGJlIGJvdGggYWNjZXNzb3IgYW5kIGRhdGEgZGVzY3JpcHRvcnMnKTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gNjg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc2hhbGxvd0VxdWFsID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKGEsIGIpIHtcbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuXG4gIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiW2tleV0gPT09IGFba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaGFsbG93RXF1YWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIGJvdW5kRmxhdCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBwb2x5ZmlsbCk7XG5cbmRlZmluZShib3VuZEZsYXQsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmxhdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUZsYXQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShcblx0XHRBcnJheS5wcm90b3R5cGUsXG5cdFx0eyBmbGF0OiBwb2x5ZmlsbCB9LFxuXHRcdHsgZmxhdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZsYXQgIT09IHBvbHlmaWxsOyB9IH1cblx0KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBlbnN1cmVCaWxsaW5nLCB7IFBsYW5NYXAgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBJQXN5bmNSZXN1bHQgfSBmcm9tICdiYXNlL2FzeW5jU3RhdGVNaWRkbGV3YXJlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1N1YnNjcmlwdGlvbk1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmNvbnN0IFBsYW5zTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxQbGFuTWFwPigpO1xuY29uc3QgU3Vic2NyaXB0aW9uTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxTdWJzY3JpcHRpb25Nb2RlbD4oKTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgcmVhZG9ubHkgYXZhaWxhYmxlUGxhbnNBc3luYzogSUFzeW5jUmVzdWx0PFBsYW5NYXA+O1xuICByZWFkb25seSBzdWJzY3JpcHRpb25Bc3luYzogSUFzeW5jUmVzdWx0PFN1YnNjcmlwdGlvbk1vZGVsPjtcbn07XG5cbmNsYXNzIFVwZGF0ZVN1YnNjcmlwdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9LCB7fT4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5Jbml0QmlsbGluZ1ZpZXcoKSk7XG4gICAgZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLmxvYWRQbGFucygpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBzdWJzY3JpcHRpb25Bc3luYywgYXZhaWxhYmxlUGxhbnNBc3luYyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdWJzY3JpYmVkUGxhbklkID0gbnVsbDtcbiAgICBpZiAoc3Vic2NyaXB0aW9uQXN5bmMgJiYgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0KSB7XG4gICAgICBjb25zdCByZXZQbGFuID0gXy5maW5kKFxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyxcbiAgICAgICAgKGRldGFpbCkgPT4gJ3JldlNlYXRzJyA9PSBkZXRhaWwuZm9yUHJvZHVjdCxcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXZQbGFuKSBzdWJzY3JpYmVkUGxhbklkID0gcmV2UGxhbi5wbGFuSWQ7XG4gICAgfVxuXG4gICAgbGV0IHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LWluZm8nO1xuICAgIGlmIChzdWJzY3JpcHRpb25Bc3luYyAmJiBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQpIHtcbiAgICAgIGlmICgndHJpYWxpbmcnID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpIHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LXdhcm5pbmcnO1xuICAgICAgZWxzZSBpZiAoJ2FjdGl2ZScgIT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cylcbiAgICAgICAgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtZGFuZ2VyJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5JbmZvIHRleHQtY2VudGVyIGNvbnRhaW5lcic+XG4gICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYyAmJiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvbkxvYWRlciBhc3luY1Jlc3VsdD17c3Vic2NyaXB0aW9uQXN5bmN9IHByb21wdD0nbG9hZGluZyBzdWJzY3JpcHRpb24gZGV0YWlscyc+XG4gICAgICAgICAgICB7YXZhaWxhYmxlUGxhbnNBc3luYyAmJiAoXG4gICAgICAgICAgICAgIDxQbGFuc0xvYWRlciBhc3luY1Jlc3VsdD17YXZhaWxhYmxlUGxhbnNBc3luY30gcHJvbXB0PSdsb2FkaW5nIGF2YWlsYWJsZSBwbGFucyc+XG4gICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJiBhdmFpbGFibGVQbGFuc0FzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsoYXZhaWxhYmxlUGxhbnNBc3luYy5yZXN1bHRbJ3JldlNlYXRzJ10gfHwgW10pLm1hcCgocGxhbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYW4uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXByaW1hcnknIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwbGFuLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDE5MCwgbWFyZ2luOiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy13YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogLTEwLCBwYWRkaW5nOiAnMTBweCA1cHgnLCBoZWlnaHQ6IDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz57cGxhbi5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz57cGxhbi5wcmljaW5nfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYW4uaWQgPT0gc3Vic2NyaWJlZFBsYW5JZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzID09ICd0cmlhbGluZycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC50cmlhbERheXNMZWZ0fSBkYXkocykgb2YgZnJlZSB0cmlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkudXBkYXRlUmV2U3Vic2NyaXB0aW9uKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2VlcCBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29taW5nIHNvb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCwgcGFkZGluZzogJzIwcHggM3B4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctaW5mbyB0ZXh0LWxlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBsYW4uZGlzcGxheSB8fCBbXSkubWFwKChkdGV4dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtwbGFuLmlkfV90ZXh0XyR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZHRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BsYW5zTG9hZGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N1YnNjcmlwdGlvbkxvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCB7fT4oKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgc3Vic2NyaXB0aW9uQXN5bmMsIGF2YWlsYWJsZVBsYW5zQXN5bmMgfSA9IGVuc3VyZUJpbGxpbmcoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiB7IHN1YnNjcmlwdGlvbkFzeW5jLCBhdmFpbGFibGVQbGFuc0FzeW5jIH07XG59KShVcGRhdGVTdWJzY3JpcHRpb25WaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2JpbGxpbmcvdXBkYXRlLnRzeCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNicpO1xudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFJhbmdlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVSYW5nZUVycm9yJScpO1xudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xudmFyICRBcnJheVByb3RvdHlwZSA9ICRBcnJheS5wcm90b3R5cGU7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICROdW1iZXIgPSBHZXRJbnRyaW5zaWMoJyVOdW1iZXIlJyk7XG52YXIgJFN5bWJvbCA9IEdldEludHJpbnNpYygnJVN5bWJvbCUnLCB0cnVlKTtcbnZhciAkUmVnRXhwID0gR2V0SW50cmluc2ljKCclUmVnRXhwJScpO1xudmFyICRQcm9taXNlID0gR2V0SW50cmluc2ljKCclUHJvbWlzZSUnLCB0cnVlKTtcbnZhciAkcHJldmVudEV4dGVuc2lvbnMgPSAkT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gTWF0aC5wb3coMiwgMzIpIC0gMTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gJE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JFYWNoJyk7XG52YXIgZXZlcnkgPSByZXF1aXJlKCcuL2hlbHBlcnMvZXZlcnknKTtcbnZhciBpc1NhbWVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yJyk7XG52YXIgaXNQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcm9wZXJ0eURlc2NyaXB0b3InKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9jYWxsQmluZCcpO1xudmFyICRQcm9taXNlVGhlbiA9ICRQcm9taXNlID8gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclUHJvbWlzZVByb3RvX3RoZW4lJykpIDogbnVsbDtcbnZhciBhcnJheVNsaWNlID0gY2FsbEJpbmQoJEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBiWzAxXSskL2kpO1xudmFyIGlzT2N0YWwgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciBpc0RpZ2l0ID0gY2FsbEJpbmQoJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL15bMC05XSQvKTtcbnZhciByZWdleEV4ZWMgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3ICRSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBub25XU3JlZ2V4KTtcbnZhciBpbnZhbGlkSGV4TGl0ZXJhbCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG52YXIgJGNoYXJDb2RlQXQgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5jaGFyQ29kZUF0KTtcbnZhciAkaXNFbnVtZXJhYmxlID0gY2FsbEJpbmQoJE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpO1xuXG52YXIgdG9TdHIgPSBjYWxsQmluZCgkT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciAkTnVtYmVyVmFsdWVPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnJU51bWJlclByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkQm9vbGVhblZhbHVlT2YgPSBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVCb29sZWFuUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRTdHJpbmdWYWx1ZU9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclU3RyaW5nUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICREYXRlVmFsdWVPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnJURhdGVQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJFN5bWJvbFRvU3RyaW5nID0gaGFzU3ltYm9scyAmJiBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVTeW1ib2xQcm90b3R5cGUlJykudG9TdHJpbmcpO1xuXG52YXIgJGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciAkYWJzID0gTWF0aC5hYnM7XG5cbnZhciAkT2JqZWN0Q3JlYXRlID0gJE9iamVjdC5jcmVhdGU7XG52YXIgJGdPUEQgPSAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciAkZ09QTiA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciAkZ09QUyA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyICRpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyICRzZXRQcm90byA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90bywgbm8tbmVnYXRlZC1jb25kaXRpb25cblx0W10uX19wcm90b19fICE9PSBBcnJheS5wcm90b3R5cGVcblx0XHQ/IG51bGxcblx0XHQ6IGZ1bmN0aW9uIChPLCBwcm90bykge1xuXHRcdFx0Ty5fX3Byb3RvX18gPSBwcm90bzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXHRcdFx0cmV0dXJuIE87XG5cdFx0fVxuKTtcblxudmFyIERlZmluZU93blByb3BlcnR5ID0gZnVuY3Rpb24gRGVmaW5lT3duUHJvcGVydHkoRVMsIE8sIFAsIGRlc2MpIHtcblx0aWYgKCEkZGVmaW5lUHJvcGVydHkpIHtcblx0XHRpZiAoIUVTLklzRGF0YURlc2NyaXB0b3IoZGVzYykpIHtcblx0XHRcdC8vIEVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMvc2V0dGVyc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWRlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSB8fCAhZGVzY1snW1tXcml0YWJsZV1dJ10pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBmYWxsYmFjayBmb3IgRVMzXG5cdFx0aWYgKFAgaW4gTyAmJiAkaXNFbnVtZXJhYmxlKE8sIFApICE9PSAhIWRlc2NbJ1tbRW51bWVyYWJsZV1dJ10pIHtcblx0XHRcdC8vIGEgbm9uLWVudW1lcmFibGUgZXhpc3RpbmcgcHJvcGVydHlcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBwcm9wZXJ0eSBkb2VzIG5vdCBleGlzdCBhdCBhbGwsIG9yIGV4aXN0cyBidXQgaXMgZW51bWVyYWJsZVxuXHRcdHZhciBWID0gZGVzY1snW1tWYWx1ZV1dJ107XG5cdFx0T1tQXSA9IFY7IC8vIHdpbGwgdXNlIFtbRGVmaW5lXV1cblx0XHRyZXR1cm4gRVMuU2FtZVZhbHVlKE9bUF0sIFYpO1xuXHR9XG5cdCRkZWZpbmVQcm9wZXJ0eShPLCBQLCBFUy5Gcm9tUHJvcGVydHlEZXNjcmlwdG9yKGRlc2MpKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbnZhciB3cyA9IFtcblx0J1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcblx0J1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4Jyxcblx0J1xcdTIwMjlcXHVGRUZGJ1xuXS5qb2luKCcnKTtcbnZhciB0cmltUmVnZXggPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xudmFyICRyZXBsYWNlID0gY2FsbEJpbmQoJFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gJHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihpbnNwZWN0KEYpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkTnVtYmVyKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoaXNCaW5hcnkodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNPY3RhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgOCkpO1xuXHRcdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0cmltbWVkID0gdHJpbSh2YWx1ZSk7XG5cdFx0XHRcdGlmICh0cmltbWVkICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHRyaW1tZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqICRmbG9vcigkYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9ICRmbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b29iamVjdFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLlJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsICRTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IGtleSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyKGFyZ3VtZW50KSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiAkQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjYWxsYWJsZVxuXHQvLyBJc0NhbGxhYmxlOiBFUzUuSXNDYWxsYWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxuXHRJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWFyZ3VtZW50LnByb3RvdHlwZTsgLy8gdW5mb3J0dW5hdGVseSB0aGVyZSdzIG5vIHdheSB0byB0cnVseSBjaGVjayB0aGlzIHdpdGhvdXQgdHJ5L2NhdGNoIGBuZXcgYXJndW1lbnRgXG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzZXh0ZW5zaWJsZS1vXG5cdElzRXh0ZW5zaWJsZTogJHByZXZlbnRFeHRlbnNpb25zXG5cdFx0PyBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGlzRXh0ZW5zaWJsZShvYmopO1xuXHRcdH1cblx0XHQ6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShvYmopIHsgcmV0dXJuIHRydWU7IH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNpbnRlZ2VyXG5cdElzSW50ZWdlcjogZnVuY3Rpb24gSXNJbnRlZ2VyKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ251bWJlcicgfHwgJGlzTmFOKGFyZ3VtZW50KSB8fCAhJGlzRmluaXRlKGFyZ3VtZW50KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWJzID0gJGFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuICRmbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbJFN5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuMi4yLTNcblx0XHR2YXIgTyA9IHRoaXMuVG9PYmplY3QoVik7XG5cblx0XHQvLyA3LjMuMi40XG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy45IC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG1ldGhvZFxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IGZ1bmMgYmUgR2V0VihPLCBQKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoZnVuYykuXG5cdCAqIDQuIElmIGZ1bmMgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsLCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiA1LiBJZiBJc0NhbGxhYmxlKGZ1bmMpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cdCAqIDYuIFJldHVybiBmdW5jLlxuXHQgKi9cblx0R2V0TWV0aG9kOiBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHRcdC8vIDcuMy45LjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuMlxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZSwgZ290ICcgKyBpbnNwZWN0KFApKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMgPyBDWyRTeW1ib2wuc3BlY2llc10gOiB2b2lkIDA7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZnJvbXByb3BlcnR5ZGVzY3JpcHRvclxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0dmFyIG9iaiA9IHt9O1xuXHRcdGlmICgnW1tWYWx1ZV1dJyBpbiBEZXNjKSB7XG5cdFx0XHRvYmoudmFsdWUgPSBEZXNjWydbW1ZhbHVlXV0nXTtcblx0XHR9XG5cdFx0aWYgKCdbW1dyaXRhYmxlXV0nIGluIERlc2MpIHtcblx0XHRcdG9iai53cml0YWJsZSA9IERlc2NbJ1tbV3JpdGFibGVdXSddO1xuXHRcdH1cblx0XHRpZiAoJ1tbR2V0XV0nIGluIERlc2MpIHtcblx0XHRcdG9iai5nZXQgPSBEZXNjWydbW0dldF1dJ107XG5cdFx0fVxuXHRcdGlmICgnW1tTZXRdXScgaW4gRGVzYykge1xuXHRcdFx0b2JqLnNldCA9IERlc2NbJ1tbU2V0XV0nXTtcblx0XHR9XG5cdFx0aWYgKCdbW0VudW1lcmFibGVdXScgaW4gRGVzYykge1xuXHRcdFx0b2JqLmVudW1lcmFibGUgPSBEZXNjWydbW0VudW1lcmFibGVdXSddO1xuXHRcdH1cblx0XHRpZiAoJ1tbQ29uZmlndXJhYmxlXV0nIGluIERlc2MpIHtcblx0XHRcdG9iai5jb25maWd1cmFibGUgPSBEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ107XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNvbXBsZXRlcHJvcGVydHlkZXNjcmlwdG9yXG5cdENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tWYWx1ZV1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW0dldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbU2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbRW51bWVyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbQ29uZmlndXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tDb25maWd1cmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBEZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zZXQtby1wLXYtdGhyb3dcblx0U2V0OiBmdW5jdGlvbiBTZXQoTywgUCwgViwgVGhyb3cpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShUaHJvdykgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Rocm93IG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmIChUaHJvdykge1xuXHRcdFx0T1tQXSA9IFY7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0T1tQXSA9IFY7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc293bnByb3BlcnR5XG5cdEhhc093blByb3BlcnR5OiBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBoYXMoTywgUCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc3Byb3BlcnR5XG5cdEhhc1Byb3BlcnR5OiBmdW5jdGlvbiBIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBQIGluIE87XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzY29uY2F0c3ByZWFkYWJsZVxuXHRJc0NvbmNhdFNwcmVhZGFibGU6IGZ1bmN0aW9uIElzQ29uY2F0U3ByZWFkYWJsZShPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMgJiYgdHlwZW9mICRTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dmFyIHNwcmVhZGFibGUgPSB0aGlzLkdldChPLCBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlKTtcblx0XHRcdGlmICh0eXBlb2Ygc3ByZWFkYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHNwcmVhZGFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Jc0FycmF5KE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pbnZva2Vcblx0SW52b2tlOiBmdW5jdGlvbiBJbnZva2UoTywgUCkge1xuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHZhciBhcmd1bWVudHNMaXN0ID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXHRcdHJldHVybiB0aGlzLkNhbGwoZnVuYywgTywgYXJndW1lbnRzTGlzdCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldGl0ZXJhdG9yXG5cdEdldEl0ZXJhdG9yOiBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmosIG1ldGhvZCkge1xuXHRcdHZhciBhY3R1YWxNZXRob2QgPSBtZXRob2Q7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRpZiAoIWhhc1N5bWJvbHMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdHZXRJdGVyYXRvciBkZXBlbmRzIG9uIG5hdGl2ZSBTeW1ib2wgc3VwcG9ydCB3aGVuIGBtZXRob2RgIGlzIG5vdCBwYXNzZWQnKTtcblx0XHRcdH1cblx0XHRcdGFjdHVhbE1ldGhvZCA9IHRoaXMuR2V0TWV0aG9kKG9iaiwgJFN5bWJvbC5pdGVyYXRvcik7XG5cdFx0fVxuXHRcdHZhciBpdGVyYXRvciA9IHRoaXMuQ2FsbChhY3R1YWxNZXRob2QsIG9iaik7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZXJhdG9yO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcm5leHRcblx0SXRlcmF0b3JOZXh0OiBmdW5jdGlvbiBJdGVyYXRvck5leHQoaXRlcmF0b3IsIHZhbHVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuSW52b2tlKGl0ZXJhdG9yLCAnbmV4dCcsIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gW10gOiBbdmFsdWVdKTtcblx0XHRpZiAodGhpcy5UeXBlKHJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbmV4dCBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3Jjb21wbGV0ZVxuXHRJdGVyYXRvckNvbXBsZXRlOiBmdW5jdGlvbiBJdGVyYXRvckNvbXBsZXRlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5HZXQoaXRlclJlc3VsdCwgJ2RvbmUnKSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ydmFsdWVcblx0SXRlcmF0b3JWYWx1ZTogZnVuY3Rpb24gSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJSZXN1bHQpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuR2V0KGl0ZXJSZXN1bHQsICd2YWx1ZScpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcnN0ZXBcblx0SXRlcmF0b3JTdGVwOiBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JdGVyYXRvck5leHQoaXRlcmF0b3IpO1xuXHRcdHZhciBkb25lID0gdGhpcy5JdGVyYXRvckNvbXBsZXRlKHJlc3VsdCk7XG5cdFx0cmV0dXJuIGRvbmUgPT09IHRydWUgPyBmYWxzZSA6IHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JjbG9zZVxuXHRJdGVyYXRvckNsb3NlOiBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyYXRvcikgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShjb21wbGV0aW9uKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGNvbXBsZXRpb24gaXMgbm90IGEgdGh1bmsgZm9yIGEgQ29tcGxldGlvbiBSZWNvcmQnKTtcblx0XHR9XG5cdFx0dmFyIGNvbXBsZXRpb25UaHVuayA9IGNvbXBsZXRpb247XG5cblx0XHR2YXIgaXRlcmF0b3JSZXR1cm4gPSB0aGlzLkdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuXG5cdFx0aWYgKHR5cGVvZiBpdGVyYXRvclJldHVybiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHR9XG5cblx0XHR2YXIgY29tcGxldGlvblJlY29yZDtcblx0XHR0cnkge1xuXHRcdFx0dmFyIGlubmVyUmVzdWx0ID0gdGhpcy5DYWxsKGl0ZXJhdG9yUmV0dXJuLCBpdGVyYXRvciwgW10pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIGlmIHdlIGhpdCBoZXJlLCB0aGVuIFwiZVwiIGlzIHRoZSBpbm5lclJlc3VsdCBjb21wbGV0aW9uIHRoYXQgbmVlZHMgcmUtdGhyb3dpbmdcblxuXHRcdFx0Ly8gaWYgdGhlIGNvbXBsZXRpb24gaXMgb2YgdHlwZSBcInRocm93XCIsIHRoaXMgd2lsbCB0aHJvdy5cblx0XHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRcdC8vIGlmIG5vdCwgdGhlbiByZXR1cm4gdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb25cblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTsgLy8gaWYgaW5uZXJSZXN1bHQgd29ya2VkLCB0aGVuIHRocm93IGlmIHRoZSBjb21wbGV0aW9uIGRvZXNcblx0XHRjb21wbGV0aW9uVGh1bmsgPSBudWxsOyAvLyBlbnN1cmUgaXQncyBub3QgY2FsbGVkIHR3aWNlLlxuXG5cdFx0aWYgKHRoaXMuVHlwZShpbm5lclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgLnJldHVybiBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGxldGlvblJlY29yZDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxuXHRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0OiBmdW5jdGlvbiBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHZhbHVlLCBkb25lKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShkb25lKSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShkb25lKSBpcyBub3QgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0ZG9uZTogZG9uZVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXJlZ2V4cGV4ZWNcblx0UmVnRXhwRXhlYzogZnVuY3Rpb24gUmVnRXhwRXhlYyhSLCBTKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShSKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdHZhciBleGVjID0gdGhpcy5HZXQoUiwgJ2V4ZWMnKTtcblx0XHRpZiAodGhpcy5Jc0NhbGxhYmxlKGV4ZWMpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdGhpcy5DYWxsKGV4ZWMsIFIsIFtTXSk7XG5cdFx0XHRpZiAocmVzdWx0ID09PSBudWxsIHx8IHRoaXMuVHlwZShyZXN1bHQpID09PSAnT2JqZWN0Jykge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1wiZXhlY1wiIG1ldGhvZCBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleEV4ZWMoUiwgUyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRBcnJheVNwZWNpZXNDcmVhdGU6IGZ1bmN0aW9uIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGxlbmd0aCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMCcpO1xuXHRcdH1cblx0XHR2YXIgbGVuID0gbGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aDtcblx0XHR2YXIgQztcblx0XHR2YXIgaXNBcnJheSA9IHRoaXMuSXNBcnJheShvcmlnaW5hbEFycmF5KTtcblx0XHRpZiAoaXNBcnJheSkge1xuXHRcdFx0QyA9IHRoaXMuR2V0KG9yaWdpbmFsQXJyYXksICdjb25zdHJ1Y3RvcicpO1xuXHRcdFx0Ly8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gbWFrZSBhIGNyb3NzLXJlYWxtIG5vcm1hbCBBcnJheSwgYSBzYW1lLXJlYWxtIEFycmF5XG5cdFx0XHQvLyBpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHQvLyBcdGlmIEMgaXMgYW5vdGhlciByZWFsbSdzIEFycmF5LCBDID0gdW5kZWZpbmVkXG5cdFx0XHQvLyBcdE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKEFycmF5KSkpID09PSBudWxsID9cblx0XHRcdC8vIH1cblx0XHRcdGlmICh0aGlzLlR5cGUoQykgPT09ICdPYmplY3QnICYmIGhhc1N5bWJvbHMgJiYgJFN5bWJvbC5zcGVjaWVzKSB7XG5cdFx0XHRcdEMgPSB0aGlzLkdldChDLCAkU3ltYm9sLnNwZWNpZXMpO1xuXHRcdFx0XHRpZiAoQyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdEMgPSB2b2lkIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICRBcnJheShsZW4pO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDb25zdHJ1Y3RvcihDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0MgbXVzdCBiZSBhIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQyhsZW4pOyAvLyB0aGlzLkNvbnN0cnVjdChDLCBsZW4pO1xuXHR9LFxuXG5cdENyZWF0ZURhdGFQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIG9sZERlc2MgPSAkZ09QRChPLCBQKTtcblx0XHR2YXIgZXh0ZW5zaWJsZSA9IG9sZERlc2MgfHwgdGhpcy5Jc0V4dGVuc2libGUoTyk7XG5cdFx0dmFyIGltbXV0YWJsZSA9IG9sZERlc2MgJiYgKCFvbGREZXNjLndyaXRhYmxlIHx8ICFvbGREZXNjLmNvbmZpZ3VyYWJsZSk7XG5cdFx0aWYgKGltbXV0YWJsZSB8fCAhZXh0ZW5zaWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBWLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9KTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlZGF0YXByb3BlcnR5b3J0aHJvd1xuXHRDcmVhdGVEYXRhUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIHN1Y2Nlc3MgPSB0aGlzLkNyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCd1bmFibGUgdG8gY3JlYXRlIGRhdGEgcHJvcGVydHknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3RjcmVhdGVcblx0T2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiBPYmplY3RDcmVhdGUocHJvdG8sIGludGVybmFsU2xvdHNMaXN0KSB7XG5cdFx0aWYgKHByb3RvICE9PSBudWxsICYmIHRoaXMuVHlwZShwcm90bykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogcHJvdG8gbXVzdCBiZSBudWxsIG9yIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgc2xvdHMgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogaW50ZXJuYWxTbG90c0xpc3Q7XG5cdFx0aWYgKHNsb3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2VzLWFic3RyYWN0IGRvZXMgbm90IHlldCBzdXBwb3J0IGludGVybmFsIHNsb3RzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3RvID09PSBudWxsICYmICEkT2JqZWN0Q3JlYXRlKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCduYXRpdmUgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0IGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBudWxsIG9iamVjdHMnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE9iamVjdENyZWF0ZShwcm90byk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuXHRBZHZhbmNlU3RyaW5nSW5kZXg6IGZ1bmN0aW9uIEFkdmFuY2VTdHJpbmdJbmRleChTLCBpbmRleCwgdW5pY29kZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAgYW5kIDw9IDIqKjUzJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUodW5pY29kZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHVuaWNvZGUgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKCF1bmljb2RlKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblx0XHR2YXIgbGVuZ3RoID0gUy5sZW5ndGg7XG5cdFx0aWYgKChpbmRleCArIDEpID49IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgZmlyc3QgPSAkY2hhckNvZGVBdChTLCBpbmRleCk7XG5cdFx0aWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHZhciBzZWNvbmQgPSAkY2hhckNvZGVBdChTLCBpbmRleCArIDEpO1xuXHRcdGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleCArIDI7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVtZXRob2Rwcm9wZXJ0eVxuXHRDcmVhdGVNZXRob2RQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlTWV0aG9kUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0Rlc2MgPSB7XG5cdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBmYWxzZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBWLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXHRcdHJldHVybiBEZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCBuZXdEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlZmluZXByb3BlcnR5b3J0aHJvd1xuXHREZWZpbmVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBQLCBkZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgRGVzYyA9IGlzUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIGRlc2MpID8gZGVzYyA6IHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoZGVzYyk7XG5cdFx0aWYgKCFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgaXMgbm90IGEgdmFsaWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBEZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCBEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlbGV0ZXByb3BlcnR5b3J0aHJvd1xuXHREZWxldGVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgc3VjY2VzcyA9IGRlbGV0ZSBPW1BdO1xuXHRcdGlmICghc3VjY2Vzcykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXR0ZW1wdCB0byBkZWxldGUgcHJvcGVydHkgZmFpbGVkLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VjY2Vzcztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVudW1lcmFibGVvd25uYW1lc1xuXHRFbnVtZXJhYmxlT3duTmFtZXM6IGZ1bmN0aW9uIEVudW1lcmFibGVPd25OYW1lcyhPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ga2V5cyhPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbnVtYmVyLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc051bWJlclZhbHVlOiBmdW5jdGlvbiB0aGlzTnVtYmVyVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE51bWJlclZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1ib29sZWFuLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc0Jvb2xlYW5WYWx1ZTogZnVuY3Rpb24gdGhpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnQm9vbGVhbicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJEJvb2xlYW5WYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtc3RyaW5nLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1N0cmluZ1ZhbHVlOiBmdW5jdGlvbiB0aGlzU3RyaW5nVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ1N0cmluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJFN0cmluZ1ZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1kYXRlLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1RpbWVWYWx1ZTogZnVuY3Rpb24gdGhpc1RpbWVWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiAkRGF0ZVZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0aW50ZWdyaXR5bGV2ZWxcblx0U2V0SW50ZWdyaXR5TGV2ZWw6IGZ1bmN0aW9uIFNldEludGVncml0eUxldmVsKE8sIGxldmVsKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKGxldmVsICE9PSAnc2VhbGVkJyAmJiBsZXZlbCAhPT0gJ2Zyb3plbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBgbGV2ZWxgIG11c3QgYmUgYFwic2VhbGVkXCJgIG9yIGBcImZyb3plblwiYCcpO1xuXHRcdH1cblx0XHRpZiAoISRwcmV2ZW50RXh0ZW5zaW9ucykge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignU2V0SW50ZWdyaXR5TGV2ZWwgcmVxdWlyZXMgbmF0aXZlIGBPYmplY3QucHJldmVudEV4dGVuc2lvbnNgIHN1cHBvcnQnKTtcblx0XHR9XG5cdFx0dmFyIHN0YXR1cyA9ICRwcmV2ZW50RXh0ZW5zaW9ucyhPKTtcblx0XHRpZiAoIXN0YXR1cykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoISRnT1BOKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdTZXRJbnRlZ3JpdHlMZXZlbCByZXF1aXJlcyBuYXRpdmUgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBzdXBwb3J0Jyk7XG5cdFx0fVxuXHRcdHZhciB0aGVLZXlzID0gJGdPUE4oTyk7XG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHRpZiAobGV2ZWwgPT09ICdzZWFsZWQnKSB7XG5cdFx0XHRmb3JFYWNoKHRoZUtleXMsIGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdEVTLkRlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBrLCB7IGNvbmZpZ3VyYWJsZTogZmFsc2UgfSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSAnZnJvemVuJykge1xuXHRcdFx0Zm9yRWFjaCh0aGVLZXlzLCBmdW5jdGlvbiAoaykge1xuXHRcdFx0XHR2YXIgY3VycmVudERlc2MgPSAkZ09QRChPLCBrKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50RGVzYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHR2YXIgZGVzYztcblx0XHRcdFx0XHRpZiAoRVMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRVMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudERlc2MpKSkge1xuXHRcdFx0XHRcdFx0ZGVzYyA9IHsgY29uZmlndXJhYmxlOiBmYWxzZSB9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZXNjID0geyBjb25maWd1cmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0RVMuRGVmaW5lUHJvcGVydHlPclRocm93KE8sIGssIGRlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10ZXN0aW50ZWdyaXR5bGV2ZWxcblx0VGVzdEludGVncml0eUxldmVsOiBmdW5jdGlvbiBUZXN0SW50ZWdyaXR5TGV2ZWwoTywgbGV2ZWwpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAobGV2ZWwgIT09ICdzZWFsZWQnICYmIGxldmVsICE9PSAnZnJvemVuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBsZXZlbGAgbXVzdCBiZSBgXCJzZWFsZWRcImAgb3IgYFwiZnJvemVuXCJgJyk7XG5cdFx0fVxuXHRcdHZhciBzdGF0dXMgPSB0aGlzLklzRXh0ZW5zaWJsZShPKTtcblx0XHRpZiAoc3RhdHVzKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciB0aGVLZXlzID0gJGdPUE4oTyk7XG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHRyZXR1cm4gdGhlS2V5cy5sZW5ndGggPT09IDAgfHwgZXZlcnkodGhlS2V5cywgZnVuY3Rpb24gKGspIHtcblx0XHRcdHZhciBjdXJyZW50RGVzYyA9ICRnT1BEKE8sIGspO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50RGVzYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aWYgKGN1cnJlbnREZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGV2ZWwgPT09ICdmcm96ZW4nICYmIEVTLklzRGF0YURlc2NyaXB0b3IoRVMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudERlc2MpKSAmJiBjdXJyZW50RGVzYy53cml0YWJsZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vcmRpbmFyeWhhc2luc3RhbmNlXG5cdE9yZGluYXJ5SGFzSW5zdGFuY2U6IGZ1bmN0aW9uIE9yZGluYXJ5SGFzSW5zdGFuY2UoQywgTykge1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoQykgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBQID0gdGhpcy5HZXQoQywgJ3Byb3RvdHlwZScpO1xuXHRcdGlmICh0aGlzLlR5cGUoUCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignT3JkaW5hcnlIYXNJbnN0YW5jZSBjYWxsZWQgb24gYW4gb2JqZWN0IHdpdGggYW4gaW52YWxpZCBwcm90b3R5cGUgcHJvcGVydHkuJyk7XG5cdFx0fVxuXHRcdHJldHVybiBPIGluc3RhbmNlb2YgQztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9yZGluYXJ5aGFzcHJvcGVydHlcblx0T3JkaW5hcnlIYXNQcm9wZXJ0eTogZnVuY3Rpb24gT3JkaW5hcnlIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0cmV0dXJuIFAgaW4gTztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWluc3RhbmNlb2ZvcGVyYXRvclxuXHRJbnN0YW5jZW9mT3BlcmF0b3I6IGZ1bmN0aW9uIEluc3RhbmNlb2ZPcGVyYXRvcihPLCBDKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIGluc3RPZkhhbmRsZXIgPSBoYXNTeW1ib2xzICYmICRTeW1ib2wuaGFzSW5zdGFuY2UgPyB0aGlzLkdldE1ldGhvZChDLCAkU3ltYm9sLmhhc0luc3RhbmNlKSA6IHZvaWQgMDtcblx0XHRpZiAodHlwZW9mIGluc3RPZkhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5DYWxsKGluc3RPZkhhbmRsZXIsIEMsIFtPXSkpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BDYCBpcyBub3QgQ2FsbGFibGUnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuT3JkaW5hcnlIYXNJbnN0YW5jZShDLCBPKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcHJvbWlzZVxuXHRJc1Byb21pc2U6IGZ1bmN0aW9uIElzUHJvbWlzZSh4KSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh4KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCEkUHJvbWlzZSkgeyAvLyBQcm9taXNlcyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JFByb21pc2VUaGVuKHgpOyAvLyB0aHJvd3MgaWYgbm90IGEgcHJvbWlzZVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hYnN0cmFjdC1lcXVhbGl0eS1jb21wYXJpc29uXG5cdCdBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gQWJzdHJhY3RFcXVhbGl0eUNvbXBhcmlzb24oeCwgeSkge1xuXHRcdHZhciB4VHlwZSA9IHRoaXMuVHlwZSh4KTtcblx0XHR2YXIgeVR5cGUgPSB0aGlzLlR5cGUoeSk7XG5cdFx0aWYgKHhUeXBlID09PSB5VHlwZSkge1xuXHRcdFx0cmV0dXJuIHggPT09IHk7IC8vIEVTNisgc3BlY2lmaWVkIHRoaXMgc2hvcnRjdXQgYW55d2F5cy5cblx0XHR9XG5cdFx0aWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdOdW1iZXInICYmIHlUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnU3RyaW5nJyAmJiB5VHlwZSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub051bWJlcih4KSwgeSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9OdW1iZXIoeCksIHkpO1xuXHRcdH1cblx0XHRpZiAoeVR5cGUgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKCh4VHlwZSA9PT0gJ1N0cmluZycgfHwgeFR5cGUgPT09ICdOdW1iZXInIHx8IHhUeXBlID09PSAnU3ltYm9sJykgJiYgeVR5cGUgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHgsIHRoaXMuVG9QcmltaXRpdmUoeSkpO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdPYmplY3QnICYmICh5VHlwZSA9PT0gJ1N0cmluZycgfHwgeVR5cGUgPT09ICdOdW1iZXInIHx8IHlUeXBlID09PSAnU3ltYm9sJykpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub1ByaW1pdGl2ZSh4KSwgeSk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiwgbWF4LXN0YXRlbWVudHMsIGlkLWxlbmd0aCwgbWF4LXBhcmFtc1xuXHRWYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBWYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yKE8sIFAsIGV4dGVuc2libGUsIERlc2MsIGN1cnJlbnQpIHtcblx0XHQvLyB0aGlzIHVzZXMgdGhlIEVTMjAxNysgbG9naWMsIHNpbmNlIGl0IGZpeGVzIGEgbnVtYmVyIG9mIGJ1Z3MgaW4gdGhlIEVTMjAxNSBsb2dpYy5cblx0XHR2YXIgb1R5cGUgPSB0aGlzLlR5cGUoTyk7XG5cdFx0aWYgKG9UeXBlICE9PSAnVW5kZWZpbmVkJyAmJiBvVHlwZSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBPIG11c3QgYmUgdW5kZWZpbmVkIG9yIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKGV4dGVuc2libGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBleHRlbnNpYmxlIG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmICghaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoY3VycmVudCkgIT09ICdVbmRlZmluZWQnICYmICFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBjdXJyZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGN1cnJlbnQgbXVzdCBiZSBhIFByb3BlcnR5IERlc2NyaXB0b3IsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnICYmICF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBpZiBPIGlzIG5vdCB1bmRlZmluZWQsIFAgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKGN1cnJlbnQpID09PSAnVW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKCFleHRlbnNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRcdGlmIChvVHlwZSAhPT0gJ1VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHREZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCB7XG5cdFx0XHRcdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSxcblx0XHRcdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6IERlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tWYWx1ZV1dJzogRGVzY1snW1tWYWx1ZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tXcml0YWJsZV1dJzogRGVzY1snW1tXcml0YWJsZV1dJ11cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgaXMgbm90IGFuIGFjY2Vzc29yIGRlc2NyaXB0b3InKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIERlZmluZU93blByb3BlcnR5KHRoaXMsIE8sIFAsIERlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSAmJiAhKCdbW0NvbmZpZ3VyYWJsZV1dJyBpbiBEZXNjKSAmJiAhKCdbW0VudW1lcmFibGVdXScgaW4gRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIERlc2MsIGN1cnJlbnQpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlZCBieSBFUzIwMTcsIGJ1dCBzaG91bGQgc3RpbGwgYmUgY29ycmVjdFxuXHRcdH1cblx0XHQvLyBcImlmIGV2ZXJ5IGZpZWxkIGluIERlc2MgaXMgYWJzZW50LCByZXR1cm4gdHJ1ZVwiIGNhbid0IHJlYWxseSBtYXRjaCB0aGUgYXNzZXJ0aW9uIHRoYXQgaXQncyBhIFByb3BlcnR5IERlc2NyaXB0b3Jcblx0XHRpZiAoIWN1cnJlbnRbJ1tbQ29uZmlndXJhYmxlXV0nXSkge1xuXHRcdFx0aWYgKERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJ1tbRW51bWVyYWJsZV1dJyBpbiBEZXNjICYmICFEZXNjWydbW0VudW1lcmFibGVdXSddID09PSAhIWN1cnJlbnRbJ1tbRW51bWVyYWJsZV1dJ10pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHQvLyBubyBmdXJ0aGVyIHZhbGlkYXRpb24gaXMgcmVxdWlyZWQuXG5cdFx0fSBlbHNlIGlmICh0aGlzLklzRGF0YURlc2NyaXB0b3IoY3VycmVudCkgIT09IHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihjdXJyZW50KSkge1xuXHRcdFx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0RGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0XHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiBjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBjdXJyZW50WydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRcdFx0J1tbR2V0XV0nOiB1bmRlZmluZWRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChvVHlwZSAhPT0gJ1VuZGVmaW5lZCcpIHtcblx0XHRcdFx0RGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogY3VycmVudFsnW1tDb25maWd1cmFibGVdXSddLFxuXHRcdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6IGN1cnJlbnRbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdFx0J1tbVmFsdWVdXSc6IHVuZGVmaW5lZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihjdXJyZW50KSAmJiB0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdGlmICghY3VycmVudFsnW1tDb25maWd1cmFibGVdXSddICYmICFjdXJyZW50WydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0XHRpZiAoJ1tbV3JpdGFibGVdXScgaW4gRGVzYyAmJiBEZXNjWydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoJ1tbVmFsdWVdXScgaW4gRGVzYyAmJiAhdGhpcy5TYW1lVmFsdWUoRGVzY1snW1tWYWx1ZV1dJ10sIGN1cnJlbnRbJ1tbVmFsdWVdXSddKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoY3VycmVudCkgJiYgdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10pIHtcblx0XHRcdFx0aWYgKCdbW1NldF1dJyBpbiBEZXNjICYmICF0aGlzLlNhbWVWYWx1ZShEZXNjWydbW1NldF1dJ10sIGN1cnJlbnRbJ1tbU2V0XV0nXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCdbW0dldF1dJyBpbiBEZXNjICYmICF0aGlzLlNhbWVWYWx1ZShEZXNjWydbW0dldF1dJ10sIGN1cnJlbnRbJ1tbR2V0XV0nXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBjdXJyZW50IGFuZCBEZXNjIGFyZSBub3QgYm90aCBkYXRhLCBib3RoIGFjY2Vzc29ycywgb3Igb25lIGFjY2Vzc29yIGFuZCBvbmUgZGF0YS4nKTtcblx0XHR9XG5cdFx0aWYgKG9UeXBlICE9PSAnVW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIERlZmluZU93blByb3BlcnR5KHRoaXMsIE8sIFAsIERlc2MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9yZGluYXJ5ZGVmaW5lb3ducHJvcGVydHlcblx0T3JkaW5hcnlEZWZpbmVPd25Qcm9wZXJ0eTogZnVuY3Rpb24gT3JkaW5hcnlEZWZpbmVPd25Qcm9wZXJ0eShPLCBQLCBEZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdGlmICghaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHRcdHZhciBkZXNjID0gJGdPUEQoTywgUCk7XG5cdFx0dmFyIGN1cnJlbnQgPSBkZXNjICYmIHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoZGVzYyk7XG5cdFx0dmFyIGV4dGVuc2libGUgPSB0aGlzLklzRXh0ZW5zaWJsZShPKTtcblx0XHRyZXR1cm4gdGhpcy5WYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yKE8sIFAsIGV4dGVuc2libGUsIERlc2MsIGN1cnJlbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb3JkaW5hcnlnZXRvd25wcm9wZXJ0eVxuXHRPcmRpbmFyeUdldE93blByb3BlcnR5OiBmdW5jdGlvbiBPcmRpbmFyeUdldE93blByb3BlcnR5KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IE8gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoTywgUCkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fVxuXHRcdGlmICghJGdPUEQpIHtcblx0XHRcdC8vIEVTMyBmYWxsYmFja1xuXHRcdFx0dmFyIGFycmF5TGVuZ3RoID0gdGhpcy5Jc0FycmF5KE8pICYmIFAgPT09ICdsZW5ndGgnO1xuXHRcdFx0dmFyIHJlZ2V4TGFzdEluZGV4ID0gdGhpcy5Jc1JlZ0V4cChPKSAmJiBQID09PSAnbGFzdEluZGV4Jztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogIShhcnJheUxlbmd0aCB8fCByZWdleExhc3RJbmRleCksXG5cdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6ICRpc0VudW1lcmFibGUoTywgUCksXG5cdFx0XHRcdCdbW1ZhbHVlXV0nOiBPW1BdLFxuXHRcdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoJGdPUEQoTywgUCkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXljcmVhdGVcblx0QXJyYXlDcmVhdGU6IGZ1bmN0aW9uIEFycmF5Q3JlYXRlKGxlbmd0aCkge1xuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYGxlbmd0aGAgbXVzdCBiZSBhbiBpbnRlZ2VyIE51bWJlciA+PSAwJyk7XG5cdFx0fVxuXHRcdGlmIChsZW5ndGggPiBNQVhfQVJSQVlfTEVOR1RIKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFJhbmdlRXJyb3IoJ2xlbmd0aCBpcyBncmVhdGVyIHRoYW4gKDIqKjMyIC0gMSknKTtcblx0XHR9XG5cdFx0dmFyIHByb3RvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAkQXJyYXlQcm90b3R5cGU7XG5cdFx0dmFyIEEgPSBbXTsgLy8gc3RlcHMgNSAtIDcsIGFuZCA5XG5cdFx0aWYgKHByb3RvICE9PSAkQXJyYXlQcm90b3R5cGUpIHsgLy8gc3RlcCA4XG5cdFx0XHRpZiAoISRzZXRQcm90bykge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdBcnJheUNyZWF0ZTogYSBgcHJvdG9gIGFyZ3VtZW50IHRoYXQgaXMgbm90IGBBcnJheS5wcm90b3R5cGVgIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYW4gZW52aXJvbm1lbnQgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHNldHRpbmcgdGhlIFtbUHJvdG90eXBlXV0nKTtcblx0XHRcdH1cblx0XHRcdCRzZXRQcm90byhBLCBwcm90byk7XG5cdFx0fVxuXHRcdGlmIChsZW5ndGggIT09IDApIHsgLy8gYnlwYXNzZXMgdGhlIG5lZWQgZm9yIHN0ZXAgMlxuXHRcdFx0QS5sZW5ndGggPSBsZW5ndGg7XG5cdFx0fVxuXHRcdC8qIHN0ZXAgMTAsIHRoZSBhYm92ZSBhcyBhIHNob3J0Y3V0IGZvciB0aGUgYmVsb3dcblx0XHR0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogZmFsc2UsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBmYWxzZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBsZW5ndGgsXG5cdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdH0pO1xuXHRcdCovXG5cdFx0cmV0dXJuIEE7XG5cdH0sXG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdEFycmF5U2V0TGVuZ3RoOiBmdW5jdGlvbiBBcnJheVNldExlbmd0aChBLCBEZXNjKSB7XG5cdFx0aWYgKCF0aGlzLklzQXJyYXkoQSkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBBIG11c3QgYmUgYW4gQXJyYXknKTtcblx0XHR9XG5cdFx0aWYgKCFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgbXVzdCBiZSBhIFByb3BlcnR5IERlc2NyaXB0b3InKTtcblx0XHR9XG5cdFx0aWYgKCEoJ1tbVmFsdWVdXScgaW4gRGVzYykpIHtcblx0XHRcdHJldHVybiB0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIERlc2MpO1xuXHRcdH1cblx0XHR2YXIgbmV3TGVuRGVzYyA9IGFzc2lnbih7fSwgRGVzYyk7XG5cdFx0dmFyIG5ld0xlbiA9IHRoaXMuVG9VaW50MzIoRGVzY1snW1tWYWx1ZV1dJ10pO1xuXHRcdHZhciBudW1iZXJMZW4gPSB0aGlzLlRvTnVtYmVyKERlc2NbJ1tbVmFsdWVdXSddKTtcblx0XHRpZiAobmV3TGVuICE9PSBudW1iZXJMZW4pIHtcblx0XHRcdHRocm93IG5ldyAkUmFuZ2VFcnJvcignSW52YWxpZCBhcnJheSBsZW5ndGgnKTtcblx0XHR9XG5cdFx0bmV3TGVuRGVzY1snW1tWYWx1ZV1dJ10gPSBuZXdMZW47XG5cdFx0dmFyIG9sZExlbkRlc2MgPSB0aGlzLk9yZGluYXJ5R2V0T3duUHJvcGVydHkoQSwgJ2xlbmd0aCcpO1xuXHRcdGlmICghdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKG9sZExlbkRlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYW4gYXJyYXkgaGFkIGEgbm9uLWRhdGEgZGVzY3JpcHRvciBvbiBgbGVuZ3RoYCcpO1xuXHRcdH1cblx0XHR2YXIgb2xkTGVuID0gb2xkTGVuRGVzY1snW1tWYWx1ZV1dJ107XG5cdFx0aWYgKG5ld0xlbiA+PSBvbGRMZW4pIHtcblx0XHRcdHJldHVybiB0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIG5ld0xlbkRlc2MpO1xuXHRcdH1cblx0XHRpZiAoIW9sZExlbkRlc2NbJ1tbV3JpdGFibGVdXSddKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBuZXdXcml0YWJsZTtcblx0XHRpZiAoISgnW1tXcml0YWJsZV1dJyBpbiBuZXdMZW5EZXNjKSB8fCBuZXdMZW5EZXNjWydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0bmV3V3JpdGFibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdXcml0YWJsZSA9IGZhbHNlO1xuXHRcdFx0bmV3TGVuRGVzY1snW1tXcml0YWJsZV1dJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR2YXIgc3VjY2VlZGVkID0gdGhpcy5PcmRpbmFyeURlZmluZU93blByb3BlcnR5KEEsICdsZW5ndGgnLCBuZXdMZW5EZXNjKTtcblx0XHRpZiAoIXN1Y2NlZWRlZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR3aGlsZSAobmV3TGVuIDwgb2xkTGVuKSB7XG5cdFx0XHRvbGRMZW4gLT0gMTtcblx0XHRcdHZhciBkZWxldGVTdWNjZWVkZWQgPSBkZWxldGUgQVt0aGlzLlRvU3RyaW5nKG9sZExlbildO1xuXHRcdFx0aWYgKCFkZWxldGVTdWNjZWVkZWQpIHtcblx0XHRcdFx0bmV3TGVuRGVzY1snW1tWYWx1ZV1dJ10gPSBvbGRMZW4gKyAxO1xuXHRcdFx0XHRpZiAoIW5ld1dyaXRhYmxlKSB7XG5cdFx0XHRcdFx0bmV3TGVuRGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIG5ld0xlbkRlc2MpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIW5ld1dyaXRhYmxlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5PcmRpbmFyeURlZmluZU93blByb3BlcnR5KEEsICdsZW5ndGgnLCB7ICdbW1dyaXRhYmxlXV0nOiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVodG1sXG5cdENyZWF0ZUhUTUw6IGZ1bmN0aW9uIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHRhZykgIT09ICdTdHJpbmcnIHx8IHRoaXMuVHlwZShhdHRyaWJ1dGUpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGB0YWdgIGFuZCBgYXR0cmlidXRlYCBtdXN0IGJlIHN0cmluZ3MnKTtcblx0XHR9XG5cdFx0dmFyIHN0ciA9IHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpO1xuXHRcdHZhciBTID0gdGhpcy5Ub1N0cmluZyhzdHIpO1xuXHRcdHZhciBwMSA9ICc8JyArIHRhZztcblx0XHRpZiAoYXR0cmlidXRlICE9PSAnJykge1xuXHRcdFx0dmFyIFYgPSB0aGlzLlRvU3RyaW5nKHZhbHVlKTtcblx0XHRcdHZhciBlc2NhcGVkViA9ICRyZXBsYWNlKFYsIC9cXHgyMi9nLCAnJnF1b3Q7Jyk7XG5cdFx0XHRwMSArPSAnXFx4MjAnICsgYXR0cmlidXRlICsgJ1xceDNEXFx4MjInICsgZXNjYXBlZFYgKyAnXFx4MjInO1xuXHRcdH1cblx0XHRyZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG93bnByb3BlcnR5a2V5c1xuXHRHZXRPd25Qcm9wZXJ0eUtleXM6IGZ1bmN0aW9uIEdldE93blByb3BlcnR5S2V5cyhPLCBUeXBlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKFR5cGUgPT09ICdTeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gaGFzU3ltYm9scyAmJiAkZ09QUyA/ICRnT1BTKE8pIDogW107XG5cdFx0fVxuXHRcdGlmIChUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0aWYgKCEkZ09QTikge1xuXHRcdFx0XHRyZXR1cm4ga2V5cyhPKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkZ09QTihPKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBUeXBlYCBtdXN0IGJlIGBcIlN0cmluZ1wiYCBvciBgXCJTeW1ib2xcImAnKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXN5bWJvbGRlc2NyaXB0aXZlc3RyaW5nXG5cdFN5bWJvbERlc2NyaXB0aXZlU3RyaW5nOiBmdW5jdGlvbiBTeW1ib2xEZXNjcmlwdGl2ZVN0cmluZyhzeW0pIHtcblx0XHRpZiAodGhpcy5UeXBlKHN5bSkgIT09ICdTeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHN5bWAgbXVzdCBiZSBhIFN5bWJvbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gJFN5bWJvbFRvU3RyaW5nKHN5bSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRzdWJzdGl0dXRpb25cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLCBtYXgtcGFyYW1zLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdEdldFN1YnN0aXR1dGlvbjogZnVuY3Rpb24gR2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuXHRcdGlmICh0aGlzLlR5cGUobWF0Y2hlZCkgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYG1hdGNoZWRgIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIG1hdGNoTGVuZ3RoID0gbWF0Y2hlZC5sZW5ndGg7XG5cblx0XHRpZiAodGhpcy5UeXBlKHN0cikgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHN0cmAgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHR2YXIgc3RyaW5nTGVuZ3RoID0gc3RyLmxlbmd0aDtcblxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIocG9zaXRpb24pIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IHN0cmluZ0xlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBwb3NpdGlvbmAgbXVzdCBiZSBhIG5vbm5lZ2F0aXZlIGludGVnZXIsIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGxlbmd0aCBvZiBgc3RyaW5nYCwgZ290ICcgKyBpbnNwZWN0KHBvc2l0aW9uKSk7XG5cdFx0fVxuXG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHR2YXIgaXNTdHJpbmdPckhvbGUgPSBmdW5jdGlvbiAoY2FwdHVyZSwgaW5kZXgsIGFycikgeyByZXR1cm4gRVMuVHlwZShjYXB0dXJlKSA9PT0gJ1N0cmluZycgfHwgIShpbmRleCBpbiBhcnIpOyB9O1xuXHRcdGlmICghdGhpcy5Jc0FycmF5KGNhcHR1cmVzKSB8fCAhZXZlcnkoY2FwdHVyZXMsIGlzU3RyaW5nT3JIb2xlKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBjYXB0dXJlc2AgbXVzdCBiZSBhIExpc3Qgb2YgU3RyaW5ncywgZ290ICcgKyBpbnNwZWN0KGNhcHR1cmVzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuVHlwZShyZXBsYWNlbWVudCkgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHJlcGxhY2VtZW50YCBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXG5cdFx0dmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoTGVuZ3RoO1xuXHRcdHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuXG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVwbGFjZW1lbnQubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdC8vIGlmIHRoaXMgaXMgYSAkLCBhbmQgaXQncyBub3QgdGhlIGVuZCBvZiB0aGUgcmVwbGFjZW1lbnRcblx0XHRcdHZhciBjdXJyZW50ID0gcmVwbGFjZW1lbnRbaV07XG5cdFx0XHR2YXIgaXNMYXN0ID0gKGkgKyAxKSA+PSByZXBsYWNlbWVudC5sZW5ndGg7XG5cdFx0XHR2YXIgbmV4dElzTGFzdCA9IChpICsgMikgPj0gcmVwbGFjZW1lbnQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnQgPT09ICckJyAmJiAhaXNMYXN0KSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gcmVwbGFjZW1lbnRbaSArIDFdO1xuXHRcdFx0XHRpZiAobmV4dCA9PT0gJyQnKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9ICckJztcblx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV4dCA9PT0gJyYnKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IG1hdGNoZWQ7XG5cdFx0XHRcdFx0aSArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5leHQgPT09ICdgJykge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBwb3NpdGlvbiA9PT0gMCA/ICcnIDogc3RyU2xpY2Uoc3RyLCAwLCBwb3NpdGlvbiAtIDEpO1xuXHRcdFx0XHRcdGkgKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXh0ID09PSBcIidcIikge1xuXHRcdFx0XHRcdHJlc3VsdCArPSB0YWlsUG9zID49IHN0cmluZ0xlbmd0aCA/ICcnIDogc3RyU2xpY2Uoc3RyLCB0YWlsUG9zKTtcblx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG5leHROZXh0ID0gbmV4dElzTGFzdCA/IG51bGwgOiByZXBsYWNlbWVudFtpICsgMl07XG5cdFx0XHRcdFx0aWYgKGlzRGlnaXQobmV4dCkgJiYgbmV4dCAhPT0gJzAnICYmIChuZXh0SXNMYXN0IHx8ICFpc0RpZ2l0KG5leHROZXh0KSkpIHtcblx0XHRcdFx0XHRcdC8vICQxIHRocm91Z2ggJDksIGFuZCBub3QgZm9sbG93ZWQgYnkgYSBkaWdpdFxuXHRcdFx0XHRcdFx0dmFyIG4gPSBwYXJzZUludGVnZXIobmV4dCwgMTApO1xuXHRcdFx0XHRcdFx0Ly8gaWYgKG4gPiBtLCBpbXBsLWRlZmluZWQpXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gKG4gPD0gbSAmJiB0aGlzLlR5cGUoY2FwdHVyZXNbbiAtIDFdKSA9PT0gJ1VuZGVmaW5lZCcpID8gJycgOiBjYXB0dXJlc1tuIC0gMV07XG5cdFx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpc0RpZ2l0KG5leHQpICYmIChuZXh0SXNMYXN0IHx8IGlzRGlnaXQobmV4dE5leHQpKSkge1xuXHRcdFx0XHRcdFx0Ly8gJDAwIHRocm91Z2ggJDk5XG5cdFx0XHRcdFx0XHR2YXIgbm4gPSBuZXh0ICsgbmV4dE5leHQ7XG5cdFx0XHRcdFx0XHR2YXIgbm5JID0gcGFyc2VJbnRlZ2VyKG5uLCAxMCkgLSAxO1xuXHRcdFx0XHRcdFx0Ly8gaWYgbm4gPT09ICcwMCcgb3Igbm4gPiBtLCBpbXBsLWRlZmluZWRcblx0XHRcdFx0XHRcdHJlc3VsdCArPSAobm4gPD0gbSAmJiB0aGlzLlR5cGUoY2FwdHVyZXNbbm5JXSkgPT09ICdVbmRlZmluZWQnKSA/ICcnIDogY2FwdHVyZXNbbm5JXTtcblx0XHRcdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9ICckJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRoZSBmaW5hbCAkLCBvciBlbHNlIG5vdCBhICRcblx0XHRcdFx0cmVzdWx0ICs9IHJlcGxhY2VtZW50W2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59KTtcblxuZGVsZXRlIEVTNi5DaGVja09iamVjdENvZXJjaWJsZTsgLy8gcmVuYW1lZCBpbiBFUzYgdG8gUmVxdWlyZU9iamVjdENvZXJjaWJsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDc1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJEFycmF5ID0gR2V0SW50cmluc2ljKCclQXJyYXklJyk7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG52YXIgRVMyMDE1ID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvY2FsbEJpbmQnKTtcblxudmFyICRhcnJheVB1c2ggPSBjYWxsQmluZCgkQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuXG52YXIgRVMyMDE2ID0gYXNzaWduKGFzc2lnbih7fSwgRVMyMDE1KSwge1xuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZW5vbm51bWJlclxuXHRTYW1lVmFsdWVOb25OdW1iZXI6IGZ1bmN0aW9uIFNhbWVWYWx1ZU5vbk51bWJlcih4LCB5KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgeCAhPT0gdHlwZW9mIHkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1NhbWVWYWx1ZU5vbk51bWJlciByZXF1aXJlcyB0d28gbm9uLW51bWJlciB2YWx1ZXMgb2YgdGhlIHNhbWUgdHlwZS4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuU2FtZVZhbHVlKHgsIHkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtaXRlcmFibGV0b2FycmF5bGlrZVxuXHRJdGVyYWJsZVRvQXJyYXlMaWtlOiBmdW5jdGlvbiBJdGVyYWJsZVRvQXJyYXlMaWtlKGl0ZW1zKSB7XG5cdFx0dmFyIHVzaW5nSXRlcmF0b3I7XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHVzaW5nSXRlcmF0b3IgPSB0aGlzLkdldE1ldGhvZChpdGVtcywgU3ltYm9sLml0ZXJhdG9yKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBcnJheShpdGVtcykpIHtcblx0XHRcdHVzaW5nSXRlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBpID0gLTE7XG5cdFx0XHRcdHZhciBhcnIgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWludmFsaWQtdGhpc1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGkgKz0gMTtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdGRvbmU6IGkgPj0gYXJyLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGFycltpXVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5UeXBlKGl0ZW1zKSA9PT0gJ1N0cmluZycpIHtcblx0XHRcdC8vIGZhbGxiYWNrIGZvciBzdHJpbmdzXG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdXNpbmdJdGVyYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRoaXMuR2V0SXRlcmF0b3IoaXRlbXMsIHVzaW5nSXRlcmF0b3IpO1xuXHRcdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdFx0dmFyIG5leHQgPSB0cnVlO1xuXHRcdFx0d2hpbGUgKG5leHQpIHtcblx0XHRcdFx0bmV4dCA9IHRoaXMuSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHR2YXIgbmV4dFZhbHVlID0gdGhpcy5JdGVyYXRvclZhbHVlKG5leHQpO1xuXHRcdFx0XHRcdCRhcnJheVB1c2godmFsdWVzLCBuZXh0VmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLlRvT2JqZWN0KGl0ZW1zKTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRVMyMDE2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzMjAxNi5qc1xuLy8gbW9kdWxlIGlkID0gNzUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBFUzIwMTYgPSByZXF1aXJlKCcuL2VzMjAxNicpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi9oZWxwZXJzL2ZvckVhY2gnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9jYWxsQmluZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkQXJyYXkgPSBHZXRJbnRyaW5zaWMoJyVBcnJheSUnKTtcbnZhciAkaXNFbnVtZXJhYmxlID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclT2JqZWN0UHJvdG90eXBlJScpLnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbnZhciAkcHVzaEFwcGx5ID0gY2FsbEJpbmQuYXBwbHkoR2V0SW50cmluc2ljKCclQXJyYXlQcm90b3R5cGUlJykucHVzaCk7XG52YXIgJGFycmF5UHVzaCA9IGNhbGxCaW5kKCRBcnJheS5wcm90b3R5cGUucHVzaCk7XG5cbnZhciBFUzIwMTcgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzIwMTYpLCB7XG5cdFRvSW5kZXg6IGZ1bmN0aW9uIFRvSW5kZXgodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHZhciBpbnRlZ2VySW5kZXggPSB0aGlzLlRvSW50ZWdlcih2YWx1ZSk7XG5cdFx0aWYgKGludGVnZXJJbmRleCA8IDApIHtcblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdpbmRleCBtdXN0IGJlID49IDAnKTtcblx0XHR9XG5cdFx0dmFyIGluZGV4ID0gdGhpcy5Ub0xlbmd0aChpbnRlZ2VySW5kZXgpO1xuXHRcdGlmICghdGhpcy5TYW1lVmFsdWVaZXJvKGludGVnZXJJbmRleCwgaW5kZXgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW5kZXggbXVzdCBiZSA+PSAwIGFuZCA8IDIgKiogNTMgLSAxJyk7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jc2VjLWVudW1lcmFibGVvd25wcm9wZXJ0aWVzXG5cdEVudW1lcmFibGVPd25Qcm9wZXJ0aWVzOiBmdW5jdGlvbiBFbnVtZXJhYmxlT3duUHJvcGVydGllcyhPLCBraW5kKSB7XG5cdFx0dmFyIGtleXMgPSBFUzIwMTYuRW51bWVyYWJsZU93bk5hbWVzKE8pO1xuXHRcdGlmIChraW5kID09PSAna2V5Jykge1xuXHRcdFx0cmV0dXJuIGtleXM7XG5cdFx0fVxuXHRcdGlmIChraW5kID09PSAndmFsdWUnIHx8IGtpbmQgPT09ICdrZXkrdmFsdWUnKSB7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IFtdO1xuXHRcdFx0Zm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdGlmICgkaXNFbnVtZXJhYmxlKE8sIGtleSkpIHtcblx0XHRcdFx0XHQkcHVzaEFwcGx5KHJlc3VsdHMsIFtcblx0XHRcdFx0XHRcdGtpbmQgPT09ICd2YWx1ZScgPyBPW2tleV0gOiBba2V5LCBPW2tleV1dXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBcImtpbmRcIiBpcyBub3QgXCJrZXlcIiwgXCJ2YWx1ZVwiLCBvciBcImtleSt2YWx1ZVwiOiAnICsga2luZCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3NlYy1pdGVyYWJsZXRvbGlzdFxuXHRJdGVyYWJsZVRvTGlzdDogZnVuY3Rpb24gSXRlcmFibGVUb0xpc3QoaXRlbXMsIG1ldGhvZCkge1xuXHRcdHZhciBpdGVyYXRvciA9IHRoaXMuR2V0SXRlcmF0b3IoaXRlbXMsIG1ldGhvZCk7XG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdHZhciBuZXh0ID0gdHJ1ZTtcblx0XHR3aGlsZSAobmV4dCkge1xuXHRcdFx0bmV4dCA9IHRoaXMuSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcblx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdHZhciBuZXh0VmFsdWUgPSB0aGlzLkl0ZXJhdG9yVmFsdWUobmV4dCk7XG5cdFx0XHRcdCRhcnJheVB1c2godmFsdWVzLCBuZXh0VmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG59KTtcblxuZGVsZXRlIEVTMjAxNy5FbnVtZXJhYmxlT3duTmFtZXM7IC8vIHJlcGxhY2VkIHdpdGggRW51bWVyYWJsZU93blByb3BlcnRpZXNcbmRlbGV0ZSBFUzIwMTcuSXRlcmFibGVUb0FycmF5TGlrZTsgLy8gcmVwbGFjZWQgd2l0aCBJdGVyYWJsZVRvTGlzdFxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTMjAxNztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTcuanNcbi8vIG1vZHVsZSBpZCA9IDc1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTdHJpbmcgPSBHZXRJbnRyaW5zaWMoJyVTdHJpbmclJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciBpc1Byb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvcicpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NhbGxCaW5kJyk7XG52YXIgc3RyU2xpY2UgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG5cbnZhciBpc1ByZWZpeE9mID0gZnVuY3Rpb24gaXNQcmVmaXhPZihwcmVmaXgsIHN0cmluZykge1xuXHRpZiAocHJlZml4ID09PSBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAocHJlZml4Lmxlbmd0aCA+IHN0cmluZy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHN0clNsaWNlKHN0cmluZywgMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeDtcbn07XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gJFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRyZXR1cm4gaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuMVxuXHRJc0FjY2Vzc29yRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSAmJiAhaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4yXG5cdElzRGF0YURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzRGF0YURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpICYmICFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuM1xuXHRJc0dlbmVyaWNEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSAmJiAhdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNFxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IERlc2NbJ1tbVmFsdWVdXSddLFxuXHRcdFx0XHR3cml0YWJsZTogISFEZXNjWydbW1dyaXRhYmxlXV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Z2V0OiBEZXNjWydbW0dldF1dJ10sXG5cdFx0XHRcdHNldDogRGVzY1snW1tTZXRdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdGcm9tUHJvcGVydHlEZXNjcmlwdG9yIG11c3QgYmUgY2FsbGVkIHdpdGggYSBmdWxseSBwb3B1bGF0ZWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC41XG5cdFRvUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBUb1Byb3BlcnR5RGVzY3JpcHRvcihPYmopIHtcblx0XHRpZiAodGhpcy5UeXBlKE9iaikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignVG9Qcm9wZXJ0eURlc2NyaXB0b3IgcmVxdWlyZXMgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2MgPSB7fTtcblx0XHRpZiAoaGFzKE9iaiwgJ2VudW1lcmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5lbnVtZXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdjb25maWd1cmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tDb25maWd1cmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmNvbmZpZ3VyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAndmFsdWUnKSkge1xuXHRcdFx0ZGVzY1snW1tWYWx1ZV1dJ10gPSBPYmoudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnd3JpdGFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tXcml0YWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmoud3JpdGFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2dldCcpKSB7XG5cdFx0XHR2YXIgZ2V0dGVyID0gT2JqLmdldDtcblx0XHRcdGlmICh0eXBlb2YgZ2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKGdldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tHZXRdXSddID0gZ2V0dGVyO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3NldCcpKSB7XG5cdFx0XHR2YXIgc2V0dGVyID0gT2JqLnNldDtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKHNldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ3NldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGRlc2NbJ1tbU2V0XV0nXSA9IHNldHRlcjtcblx0XHR9XG5cblx0XHRpZiAoKGhhcyhkZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhkZXNjLCAnW1tTZXRdXScpKSAmJiAoaGFzKGRlc2MsICdbW1ZhbHVlXV0nKSB8fCBoYXMoZGVzYywgJ1tbV3JpdGFibGVdXScpKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0ludmFsaWQgcHJvcGVydHkgZGVzY3JpcHRvci4gQ2Fubm90IGJvdGggc3BlY2lmeSBhY2Nlc3NvcnMgYW5kIGEgdmFsdWUgb3Igd3JpdGFibGUgYXR0cmlidXRlJyk7XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtMTEuOS4zXG5cdCdBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gQWJzdHJhY3RFcXVhbGl0eUNvbXBhcmlzb24oeCwgeSkge1xuXHRcdHZhciB4VHlwZSA9IHRoaXMuVHlwZSh4KTtcblx0XHR2YXIgeVR5cGUgPSB0aGlzLlR5cGUoeSk7XG5cdFx0aWYgKHhUeXBlID09PSB5VHlwZSkge1xuXHRcdFx0cmV0dXJuIHggPT09IHk7IC8vIEVTNisgc3BlY2lmaWVkIHRoaXMgc2hvcnRjdXQgYW55d2F5cy5cblx0XHR9XG5cdFx0aWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdOdW1iZXInICYmIHlUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnU3RyaW5nJyAmJiB5VHlwZSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub051bWJlcih4KSwgeSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9OdW1iZXIoeCksIHkpO1xuXHRcdH1cblx0XHRpZiAoeVR5cGUgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKCh4VHlwZSA9PT0gJ1N0cmluZycgfHwgeFR5cGUgPT09ICdOdW1iZXInKSAmJiB5VHlwZSA9PT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10oeCwgdGhpcy5Ub1ByaW1pdGl2ZSh5KSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ09iamVjdCcgJiYgKHlUeXBlID09PSAnU3RyaW5nJyB8fCB5VHlwZSA9PT0gJ051bWJlcicpKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9QcmltaXRpdmUoeCksIHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xMS45LjZcblx0J1N0cmljdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gU3RyaWN0RXF1YWxpdHlDb21wYXJpc29uKHgsIHkpIHtcblx0XHR2YXIgeFR5cGUgPSB0aGlzLlR5cGUoeCk7XG5cdFx0dmFyIHlUeXBlID0gdGhpcy5UeXBlKHkpO1xuXHRcdGlmICh4VHlwZSAhPT0geVR5cGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnVW5kZWZpbmVkJyB8fCB4VHlwZSA9PT0gJ051bGwnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHggPT09IHk7IC8vIHNob3J0Y3V0IGZvciBzdGVwcyA0LTdcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTExLjguNVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcblx0J0Fic3RyYWN0IFJlbGF0aW9uYWwgQ29tcGFyaXNvbic6IGZ1bmN0aW9uIEFic3RyYWN0UmVsYXRpb25hbENvbXBhcmlzb24oeCwgeSwgTGVmdEZpcnN0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShMZWZ0Rmlyc3QpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBMZWZ0Rmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0dmFyIHB4O1xuXHRcdHZhciBweTtcblx0XHRpZiAoTGVmdEZpcnN0KSB7XG5cdFx0XHRweCA9IHRoaXMuVG9QcmltaXRpdmUoeCwgJE51bWJlcik7XG5cdFx0XHRweSA9IHRoaXMuVG9QcmltaXRpdmUoeSwgJE51bWJlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB5ID0gdGhpcy5Ub1ByaW1pdGl2ZSh5LCAkTnVtYmVyKTtcblx0XHRcdHB4ID0gdGhpcy5Ub1ByaW1pdGl2ZSh4LCAkTnVtYmVyKTtcblx0XHR9XG5cdFx0dmFyIGJvdGhTdHJpbmdzID0gdGhpcy5UeXBlKHB4KSA9PT0gJ1N0cmluZycgJiYgdGhpcy5UeXBlKHB5KSA9PT0gJ1N0cmluZyc7XG5cdFx0aWYgKCFib3RoU3RyaW5ncykge1xuXHRcdFx0dmFyIG54ID0gdGhpcy5Ub051bWJlcihweCk7XG5cdFx0XHR2YXIgbnkgPSB0aGlzLlRvTnVtYmVyKHB5KTtcblx0XHRcdGlmICgkaXNOYU4obngpIHx8ICRpc05hTihueSkpIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkaXNGaW5pdGUobngpICYmICRpc0Zpbml0ZShueSkgJiYgbnggPT09IG55KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChueCA9PT0gMCAmJiBueSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnggPT09IEluZmluaXR5KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChueSA9PT0gSW5maW5pdHkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnkgPT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnggPT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBueCA8IG55OyAvLyBieSBub3csIHRoZXNlIGFyZSBib3RoIG5vbnplcm8sIGZpbml0ZSwgYW5kIG5vdCBlcXVhbFxuXHRcdH1cblx0XHRpZiAoaXNQcmVmaXhPZihweSwgcHgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChpc1ByZWZpeE9mKHB4LCBweSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gcHggPCBweTsgLy8gYm90aCBzdHJpbmdzLCBuZWl0aGVyIGEgcHJlZml4IG9mIHRoZSBvdGhlci4gc2hvcnRjdXQgZm9yIHN0ZXBzIGMtZlxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDc1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDc1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBldmVyeSA9IHJlcXVpcmUoJy4vZXZlcnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1NhbWVQcm9wZXJ0eURlc2NyaXB0b3IoRVMsIEQxLCBEMikge1xuXHR2YXIgZmllbGRzID0gW1xuXHRcdCdbW0NvbmZpZ3VyYWJsZV1dJyxcblx0XHQnW1tFbnVtZXJhYmxlXV0nLFxuXHRcdCdbW0dldF1dJyxcblx0XHQnW1tTZXRdXScsXG5cdFx0J1tbVmFsdWVdXScsXG5cdFx0J1tbV3JpdGFibGVdXSdcblx0XTtcblx0cmV0dXJuIGV2ZXJ5KGZpZWxkcywgZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0aWYgKChmaWVsZCBpbiBEMSkgIT09IChmaWVsZCBpbiBEMikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIEVTLlNhbWVWYWx1ZShEMVtmaWVsZF0sIEQyW2ZpZWxkXSk7XG5cdH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzU2FtZVByb3BlcnR5RGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cblx0cmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoYXJndW1lbnRzWzFdID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDc1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTIuOFxudmFyIEVTNWludGVybmFsU2xvdHMgPSB7XG5cdCdbW0RlZmF1bHRWYWx1ZV1dJzogZnVuY3Rpb24gKE8pIHtcblx0XHR2YXIgYWN0dWFsSGludDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFjdHVhbEhpbnQgPSBhcmd1bWVudHNbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdHVhbEhpbnQgPSB0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjFcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0LCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA3NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIGdsb2JhbEtleSA9ICdfXyBnbG9iYWwgY2FjaGUga2V5IF9fJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc1N5bWJvbChTeW1ib2woJ2ZvbycpKSAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdGdsb2JhbEtleSA9IFN5bWJvbFsnZm9yJ10oZ2xvYmFsS2V5KTtcbn1cblxudmFyIHRydWVUaHVuayA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRydWU7XG59O1xuXG52YXIgZW5zdXJlQ2FjaGUgPSBmdW5jdGlvbiBlbnN1cmVDYWNoZSgpIHtcblx0aWYgKCFnbG9iYWxbZ2xvYmFsS2V5XSkge1xuXHRcdHZhciBwcm9wZXJ0aWVzID0ge307XG5cdFx0cHJvcGVydGllc1tnbG9iYWxLZXldID0ge307XG5cdFx0dmFyIHByZWRpY2F0ZXMgPSB7fTtcblx0XHRwcmVkaWNhdGVzW2dsb2JhbEtleV0gPSB0cnVlVGh1bms7XG5cdFx0ZGVmaW5lKGdsb2JhbCwgcHJvcGVydGllcywgcHJlZGljYXRlcyk7XG5cdH1cblx0cmV0dXJuIGdsb2JhbFtnbG9iYWxLZXldO1xufTtcblxudmFyIGNhY2hlID0gZW5zdXJlQ2FjaGUoKTtcblxudmFyIGlzUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsKSB7XG5cdHJldHVybiB2YWwgPT09IG51bGwgfHwgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGdldFByaW1pdGl2ZUtleSA9IGZ1bmN0aW9uIGdldFByaW1pdGl2ZUtleSh2YWwpIHtcblx0aWYgKGlzU3ltYm9sKHZhbCkpIHtcblx0XHRyZXR1cm4gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsKTtcblx0fVxuXHRyZXR1cm4gdHlwZW9mIHZhbCArICcgfCAnICsgU3RyaW5nKHZhbCk7XG59O1xuXG52YXIgcmVxdWlyZVByaW1pdGl2ZUtleSA9IGZ1bmN0aW9uIHJlcXVpcmVQcmltaXRpdmVLZXkodmFsKSB7XG5cdGlmICghaXNQcmltaXRpdmUodmFsKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2tleSBtdXN0IG5vdCBiZSBhbiBvYmplY3QnKTtcblx0fVxufTtcblxudmFyIGdsb2JhbENhY2hlID0ge1xuXHRjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG5cdFx0ZGVsZXRlIGdsb2JhbFtnbG9iYWxLZXldO1xuXHRcdGNhY2hlID0gZW5zdXJlQ2FjaGUoKTtcblx0fSxcblxuXHQnZGVsZXRlJzogZnVuY3Rpb24gZGVsZXRlS2V5KGtleSkge1xuXHRcdHJlcXVpcmVQcmltaXRpdmVLZXkoa2V5KTtcblx0XHRkZWxldGUgY2FjaGVbZ2V0UHJpbWl0aXZlS2V5KGtleSldO1xuXHRcdHJldHVybiAhZ2xvYmFsQ2FjaGUuaGFzKGtleSk7XG5cdH0sXG5cblx0Z2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHJldHVybiBjYWNoZVtnZXRQcmltaXRpdmVLZXkoa2V5KV07XG5cdH0sXG5cblx0aGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHJldHVybiBnZXRQcmltaXRpdmVLZXkoa2V5KSBpbiBjYWNoZTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHZhciBwcmltaXRpdmVLZXkgPSBnZXRQcmltaXRpdmVLZXkoa2V5KTtcblx0XHR2YXIgcHJvcHMgPSB7fTtcblx0XHRwcm9wc1twcmltaXRpdmVLZXldID0gdmFsdWU7XG5cdFx0dmFyIHByZWRpY2F0ZXMgPSB7fTtcblx0XHRwcmVkaWNhdGVzW3ByaW1pdGl2ZUtleV0gPSB0cnVlVGh1bms7XG5cdFx0ZGVmaW5lKGNhY2hlLCBwcm9wcywgcHJlZGljYXRlcyk7XG5cdFx0cmV0dXJuIGdsb2JhbENhY2hlLmhhcyhrZXkpO1xuXHR9LFxuXG5cdHNldElmTWlzc2luZ1RoZW5HZXQ6IGZ1bmN0aW9uIHNldElmTWlzc2luZ1RoZW5HZXQoa2V5LCB2YWx1ZVRodW5rKSB7XG5cdFx0aWYgKGdsb2JhbENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXHRcdHZhciBpdGVtID0gdmFsdWVUaHVuaygpO1xuXHRcdGdsb2JhbENhY2hlLnNldChrZXksIGl0ZW0pO1xuXHRcdHJldHVybiBpdGVtO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsb2JhbC1jYWNoZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIGVtcHR5IChudWxsLWxvYWRlcilcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBNYXAucHJvdG90eXBlO1xudmFyIG1hcFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNNYXAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE1hcC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIG1hcFNpemUgPSBoYXNNYXAgJiYgbWFwU2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIG1hcFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgbWFwRm9yRWFjaCA9IGhhc01hcCAmJiBNYXAucHJvdG90eXBlLmZvckVhY2g7XG52YXIgaGFzU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBTZXQucHJvdG90eXBlO1xudmFyIHNldFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNTZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFNldC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIHNldFNpemUgPSBoYXNTZXQgJiYgc2V0U2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIHNldFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IHNldFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgc2V0Rm9yRWFjaCA9IGhhc1NldCAmJiBTZXQucHJvdG90eXBlLmZvckVhY2g7XG52YXIgYm9vbGVhblZhbHVlT2YgPSBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mO1xudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBiaWdJbnRWYWx1ZU9mID0gdHlwZW9mIEJpZ0ludCA9PT0gJ2Z1bmN0aW9uJyA/IEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZiA6IG51bGw7XG5cbnZhciBpbnNwZWN0Q3VzdG9tID0gcmVxdWlyZSgnLi91dGlsLmluc3BlY3QnKS5jdXN0b207XG52YXIgaW5zcGVjdFN5bWJvbCA9IChpbnNwZWN0Q3VzdG9tICYmIGlzU3ltYm9sKGluc3BlY3RDdXN0b20pKSA/IGluc3BlY3RDdXN0b20gOiBudWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluc3BlY3RfIChvYmosIG9wdHMsIGRlcHRoLCBzZWVuKSB7XG4gICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG5cbiAgICBpZiAoaGFzKG9wdHMsICdxdW90ZVN0eWxlJykgJiYgKG9wdHMucXVvdGVTdHlsZSAhPT0gJ3NpbmdsZScgJiYgb3B0cy5xdW90ZVN0eWxlICE9PSAnZG91YmxlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIFwicXVvdGVTdHlsZVwiIG11c3QgYmUgXCJzaW5nbGVcIiBvciBcImRvdWJsZVwiJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiBvYmogPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gaW5zcGVjdFN0cmluZyhvYmosIG9wdHMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChvYmogPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5IC8gb2JqID4gMCA/ICcwJyA6ICctMCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYmlnaW50Jykge1xuICAgICAgcmV0dXJuIFN0cmluZyhvYmopICsgJ24nO1xuICAgIH1cblxuICAgIHZhciBtYXhEZXB0aCA9IHR5cGVvZiBvcHRzLmRlcHRoID09PSAndW5kZWZpbmVkJyA/IDUgOiBvcHRzLmRlcHRoO1xuICAgIGlmICh0eXBlb2YgZGVwdGggPT09ICd1bmRlZmluZWQnKSBkZXB0aCA9IDA7XG4gICAgaWYgKGRlcHRoID49IG1heERlcHRoICYmIG1heERlcHRoID4gMCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gJ1tPYmplY3RdJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlZW4gPT09ICd1bmRlZmluZWQnKSBzZWVuID0gW107XG4gICAgZWxzZSBpZiAoaW5kZXhPZihzZWVuLCBvYmopID49IDApIHtcbiAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0ICh2YWx1ZSwgZnJvbSkge1xuICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4uc2xpY2UoKTtcbiAgICAgICAgICAgIHNlZW4ucHVzaChmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zcGVjdF8odmFsdWUsIG9wdHMsIGRlcHRoICsgMSwgc2Vlbik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lT2Yob2JqKTtcbiAgICAgICAgcmV0dXJuICdbRnVuY3Rpb24nICsgKG5hbWUgPyAnOiAnICsgbmFtZSA6ICcnKSArICddJztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKG9iaikpIHtcbiAgICAgICAgdmFyIHN5bVN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgPyBtYXJrQm94ZWQoc3ltU3RyaW5nKSA6IHN5bVN0cmluZztcbiAgICB9XG4gICAgaWYgKGlzRWxlbWVudChvYmopKSB7XG4gICAgICAgIHZhciBzID0gJzwnICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGF0dHJzID0gb2JqLmF0dHJpYnV0ZXMgfHwgW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHMgKz0gJyAnICsgYXR0cnNbaV0ubmFtZSArICc9JyArIHdyYXBRdW90ZXMocXVvdGUoYXR0cnNbaV0udmFsdWUpLCAnZG91YmxlJywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcyArPSAnPic7XG4gICAgICAgIGlmIChvYmouY2hpbGROb2RlcyAmJiBvYmouY2hpbGROb2Rlcy5sZW5ndGgpIHMgKz0gJy4uLic7XG4gICAgICAgIHMgKz0gJzwvJyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCkgKyAnPic7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGlmIChvYmoubGVuZ3RoID09PSAwKSByZXR1cm4gJ1tdJztcbiAgICAgICAgcmV0dXJuICdbICcgKyBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCkuam9pbignLCAnKSArICcgXSc7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAwKSByZXR1cm4gJ1snICsgU3RyaW5nKG9iaikgKyAnXSc7XG4gICAgICAgIHJldHVybiAneyBbJyArIFN0cmluZyhvYmopICsgJ10gJyArIHBhcnRzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGluc3BlY3RTeW1ib2wgJiYgdHlwZW9mIG9ialtpbnNwZWN0U3ltYm9sXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtpbnNwZWN0U3ltYm9sXSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmouaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5pbnNwZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzTWFwKG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIG1hcEZvckVhY2guY2FsbChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGluc3BlY3Qoa2V5LCBvYmopICsgJyA9PiAnICsgaW5zcGVjdCh2YWx1ZSwgb2JqKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbk9mKCdNYXAnLCBtYXBTaXplLmNhbGwob2JqKSwgcGFydHMpO1xuICAgIH1cbiAgICBpZiAoaXNTZXQob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgc2V0Rm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlICkge1xuICAgICAgICAgICAgcGFydHMucHVzaChpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uT2YoJ1NldCcsIHNldFNpemUuY2FsbChvYmopLCBwYXJ0cyk7XG4gICAgfVxuICAgIGlmIChpc051bWJlcihvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChOdW1iZXIob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoaXNCaWdJbnQob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoYmlnSW50VmFsdWVPZi5jYWxsKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoYm9vbGVhblZhbHVlT2YuY2FsbChvYmopKTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KFN0cmluZyhvYmopKSk7XG4gICAgfVxuICAgIGlmICghaXNEYXRlKG9iaikgJiYgIWlzUmVnRXhwKG9iaikpIHtcbiAgICAgICAgdmFyIHhzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICBpZiAoeHMubGVuZ3RoID09PSAwKSByZXR1cm4gJ3t9JztcbiAgICAgICAgcmV0dXJuICd7ICcgKyB4cy5qb2luKCcsICcpICsgJyB9JztcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhvYmopO1xufTtcblxuZnVuY3Rpb24gd3JhcFF1b3RlcyAocywgZGVmYXVsdFN0eWxlLCBvcHRzKSB7XG4gICAgdmFyIHF1b3RlQ2hhciA9IChvcHRzLnF1b3RlU3R5bGUgfHwgZGVmYXVsdFN0eWxlKSA9PT0gJ2RvdWJsZScgPyAnXCInIDogXCInXCI7XG4gICAgcmV0dXJuIHF1b3RlQ2hhciArIHMgKyBxdW90ZUNoYXI7XG59XG5cbmZ1bmN0aW9uIHF1b3RlIChzKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJzsgfVxuZnVuY3Rpb24gaXNEYXRlIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJzsgfVxuZnVuY3Rpb24gaXNSZWdFeHAgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7IH1cbmZ1bmN0aW9uIGlzRXJyb3IgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJzsgfVxuZnVuY3Rpb24gaXNTeW1ib2wgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgU3ltYm9sXSc7IH1cbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nOyB9XG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBOdW1iZXJdJzsgfVxuZnVuY3Rpb24gaXNCaWdJbnQgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQmlnSW50XSc7IH1cbmZ1bmN0aW9uIGlzQm9vbGVhbiAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7IH1cblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgfHwgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5IGluIHRoaXM7IH07XG5mdW5jdGlvbiBoYXMgKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn1cblxuZnVuY3Rpb24gdG9TdHIgKG9iaikge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIG5hbWVPZiAoZikge1xuICAgIGlmIChmLm5hbWUpIHJldHVybiBmLm5hbWU7XG4gICAgdmFyIG0gPSBTdHJpbmcoZikubWF0Y2goL15mdW5jdGlvblxccyooW1xcdyRdKykvKTtcbiAgICBpZiAobSkgcmV0dXJuIG1bMV07XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YgKHhzLCB4KSB7XG4gICAgaWYgKHhzLmluZGV4T2YpIHJldHVybiB4cy5pbmRleE9mKHgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICh4c1tpXSA9PT0geCkgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaXNNYXAgKHgpIHtcbiAgICBpZiAoIW1hcFNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgTWFwOyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTZXQgKHgpIHtcbiAgICBpZiAoIXNldFNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50ICh4KSB7XG4gICAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHggaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiB4Lm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiB0eXBlb2YgeC5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbidcbiAgICA7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3RTdHJpbmcgKHN0ciwgb3B0cykge1xuICAgIHZhciBzID0gc3RyLnJlcGxhY2UoLyhbJ1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvW1xceDAwLVxceDFmXS9nLCBsb3dieXRlKTtcbiAgICByZXR1cm4gd3JhcFF1b3RlcyhzLCAnc2luZ2xlJywgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGxvd2J5dGUgKGMpIHtcbiAgICB2YXIgbiA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgeCA9IHsgODogJ2InLCA5OiAndCcsIDEwOiAnbicsIDEyOiAnZicsIDEzOiAncicgfVtuXTtcbiAgICBpZiAoeCkgcmV0dXJuICdcXFxcJyArIHg7XG4gICAgcmV0dXJuICdcXFxceCcgKyAobiA8IDB4MTAgPyAnMCcgOiAnJykgKyBuLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gbWFya0JveGVkIChzdHIpIHtcbiAgICByZXR1cm4gJ09iamVjdCgnICsgc3RyICsgJyknO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0aW9uT2YgKHR5cGUsIHNpemUsIGVudHJpZXMpIHtcbiAgICByZXR1cm4gdHlwZSArICcgKCcgKyBzaXplICsgJykgeycgKyBlbnRyaWVzLmpvaW4oJywgJykgKyAnfSc7XG59XG5cbmZ1bmN0aW9uIGFyck9iaktleXMgKG9iaiwgaW5zcGVjdCkge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkob2JqKTtcbiAgICB2YXIgeHMgPSBbXTtcbiAgICBpZiAoaXNBcnIpIHtcbiAgICAgICAgeHMubGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHhzW2ldID0gaGFzKG9iaiwgaSkgPyBpbnNwZWN0KG9ialtpXSwgb2JqKSA6ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFoYXMob2JqLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGlzQXJyICYmIFN0cmluZyhOdW1iZXIoa2V5KSkgPT09IGtleSAmJiBrZXkgPCBvYmoubGVuZ3RoKSBjb250aW51ZTtcbiAgICAgICAgaWYgKC9bXlxcdyRdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHhzLnB1c2goaW5zcGVjdChrZXksIG9iaikgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4cy5wdXNoKGtleSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWluc3BlY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3V0aWwnKS5pbnNwZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1pbnNwZWN0L3V0aWwuaW5zcGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gODE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXNTaGltO1xuaWYgKCFPYmplY3Qua2V5cykge1xuXHQvLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuXHR2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHR2YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0dmFyIGhhc0RvbnRFbnVtQnVnID0gIWlzRW51bWVyYWJsZS5jYWxsKHsgdG9TdHJpbmc6IG51bGwgfSwgJ3RvU3RyaW5nJyk7XG5cdHZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xuXHR2YXIgZG9udEVudW1zID0gW1xuXHRcdCd0b1N0cmluZycsXG5cdFx0J3RvTG9jYWxlU3RyaW5nJyxcblx0XHQndmFsdWVPZicsXG5cdFx0J2hhc093blByb3BlcnR5Jyxcblx0XHQnaXNQcm90b3R5cGVPZicsXG5cdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0XHQnY29uc3RydWN0b3InXG5cdF07XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xuXHR9O1xuXHR2YXIgZXhjbHVkZWRLZXlzID0ge1xuXHRcdCRhcHBsaWNhdGlvbkNhY2hlOiB0cnVlLFxuXHRcdCRjb25zb2xlOiB0cnVlLFxuXHRcdCRleHRlcm5hbDogdHJ1ZSxcblx0XHQkZnJhbWU6IHRydWUsXG5cdFx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0XHQkZnJhbWVzOiB0cnVlLFxuXHRcdCRpbm5lckhlaWdodDogdHJ1ZSxcblx0XHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuY2hhbmdlOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5lcnJvcjogdHJ1ZSxcblx0XHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdFx0JG91dGVyV2lkdGg6IHRydWUsXG5cdFx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0XHQkcGFyZW50OiB0cnVlLFxuXHRcdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHRcdCRzY3JvbGxUb3A6IHRydWUsXG5cdFx0JHNjcm9sbFg6IHRydWUsXG5cdFx0JHNjcm9sbFk6IHRydWUsXG5cdFx0JHNlbGY6IHRydWUsXG5cdFx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0XHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdFx0JHdpbmRvdzogdHJ1ZVxuXHR9O1xuXHR2YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIWV4Y2x1ZGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KCkpO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdFx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdFx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0XHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdFx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdFx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhlS2V5cztcblx0fTtcbn1cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDgxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbnJlcXVpcmUoJy4vbGliL2luaXRpYWxpemUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9pbml0aWFsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA4Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuKDAsIF9yZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWVbXCJkZWZhdWx0XCJdKSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvaW5pdGlhbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gODI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgY29yZSA9IHtcbiAgd2hpdGU6ICcjZmZmJyxcbiAgZ3JheTogJyM0ODQ4NDgnLFxuICBncmF5TGlnaHQ6ICcjODI4ODhhJyxcbiAgZ3JheUxpZ2h0ZXI6ICcjY2FjY2NkJyxcbiAgZ3JheUxpZ2h0ZXN0OiAnI2YyZjJmMicsXG4gIGJvcmRlck1lZGl1bTogJyNjNGM0YzQnLFxuICBib3JkZXI6ICcjZGJkYmRiJyxcbiAgYm9yZGVyTGlnaHQ6ICcjZTRlN2U3JyxcbiAgYm9yZGVyTGlnaHRlcjogJyNlY2VlZWUnLFxuICBib3JkZXJCcmlnaHQ6ICcjZjRmNWY1JyxcbiAgcHJpbWFyeTogJyMwMGE2OTknLFxuICBwcmltYXJ5U2hhZGVfMTogJyMzM2RhY2QnLFxuICBwcmltYXJ5U2hhZGVfMjogJyM2NmUyZGEnLFxuICBwcmltYXJ5U2hhZGVfMzogJyM4MGU4ZTAnLFxuICBwcmltYXJ5U2hhZGVfNDogJyNiMmYxZWMnLFxuICBwcmltYXJ5X2Rhcms6ICcjMDA4NDg5JyxcbiAgc2Vjb25kYXJ5OiAnIzAwN2E4NycsXG4gIHllbGxvdzogJyNmZmU4YmMnLFxuICB5ZWxsb3dfZGFyazogJyNmZmNlNzEnXG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICByZWFjdERhdGVzOiB7XG4gICAgekluZGV4OiAwLFxuICAgIGJvcmRlcjoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBib3JkZXJUb3A6IDAsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJMZWZ0OiAwLFxuICAgICAgICBvdXRsaW5lRm9jdXNlZDogMCxcbiAgICAgICAgYm9yZGVyRm9jdXNlZDogMCxcbiAgICAgICAgYm9yZGVyVG9wRm9jdXNlZDogMCxcbiAgICAgICAgYm9yZGVyTGVmdEZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlckJvdHRvbUZvY3VzZWQ6IFwiMnB4IHNvbGlkIFwiLmNvbmNhdChjb3JlLnByaW1hcnlfZGFyayksXG4gICAgICAgIGJvcmRlclJpZ2h0Rm9jdXNlZDogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAwXG4gICAgICB9LFxuICAgICAgcGlja2VySW5wdXQ6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICBjb3JlOiBjb3JlLFxuICAgICAgZGlzYWJsZWQ6IGNvcmUuZ3JheUxpZ2h0ZXN0LFxuICAgICAgYmFja2dyb3VuZDogY29yZS53aGl0ZSxcbiAgICAgIGJhY2tncm91bmREYXJrOiAnI2YyZjJmMicsXG4gICAgICBiYWNrZ3JvdW5kRm9jdXNlZDogY29yZS53aGl0ZSxcbiAgICAgIGJvcmRlcjogJ3JnYigyMTksIDIxOSwgMjE5KScsXG4gICAgICB0ZXh0OiBjb3JlLmdyYXksXG4gICAgICB0ZXh0RGlzYWJsZWQ6IGNvcmUuYm9yZGVyLFxuICAgICAgdGV4dEZvY3VzZWQ6ICcjMDA3YTg3JyxcbiAgICAgIHBsYWNlaG9sZGVyVGV4dDogJyM3NTc1NzUnLFxuICAgICAgb3V0c2lkZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS53aGl0ZSxcbiAgICAgICAgY29sb3I6IGNvcmUuZ3JheSxcbiAgICAgICAgY29sb3JfYWN0aXZlOiBjb3JlLmdyYXksXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLmdyYXlcbiAgICAgIH0sXG4gICAgICBoaWdobGlnaHRlZDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUueWVsbG93LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLnllbGxvd19kYXJrLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUueWVsbG93X2RhcmssXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXksXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5ncmF5LFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS5ncmF5XG4gICAgICB9LFxuICAgICAgbWluaW11bU5pZ2h0czoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS53aGl0ZSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvcmUuYm9yZGVyTGlnaHRlcixcbiAgICAgICAgY29sb3I6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUuZ3JheUxpZ2h0ZXJcbiAgICAgIH0sXG4gICAgICBob3ZlcmVkU3Bhbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUucHJpbWFyeVNoYWRlXzQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeVNoYWRlXzMsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5U2hhZGVfNCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvcmUucHJpbWFyeVNoYWRlXzMsXG4gICAgICAgIGJvcmRlckNvbG9yX2FjdGl2ZTogY29yZS5wcmltYXJ5U2hhZGVfMyxcbiAgICAgICAgYm9yZGVyQ29sb3JfaG92ZXI6IGNvcmUucHJpbWFyeVNoYWRlXzMsXG4gICAgICAgIGNvbG9yOiBjb3JlLnNlY29uZGFyeSxcbiAgICAgICAgY29sb3JfYWN0aXZlOiBjb3JlLnNlY29uZGFyeSxcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUuc2Vjb25kYXJ5XG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRTcGFuOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZS5wcmltYXJ5U2hhZGVfMixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2FjdGl2ZTogY29yZS5wcmltYXJ5U2hhZGVfMSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLnByaW1hcnlTaGFkZV8xLFxuICAgICAgICBib3JkZXJDb2xvcjogY29yZS5wcmltYXJ5U2hhZGVfMSxcbiAgICAgICAgYm9yZGVyQ29sb3JfYWN0aXZlOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGJvcmRlckNvbG9yX2hvdmVyOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGNvbG9yOiBjb3JlLndoaXRlLFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUud2hpdGUsXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLndoaXRlXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGJvcmRlckNvbG9yX2FjdGl2ZTogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBjb2xvcjogY29yZS53aGl0ZSxcbiAgICAgICAgY29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS53aGl0ZVxuICAgICAgfSxcbiAgICAgIGJsb2NrZWRfY2FsZW5kYXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBib3JkZXJDb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBjb2xvcjogY29yZS5ncmF5TGlnaHQsXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5ncmF5TGlnaHQsXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodFxuICAgICAgfSxcbiAgICAgIGJsb2NrZWRfb3V0X29mX3JhbmdlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZS53aGl0ZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2FjdGl2ZTogY29yZS53aGl0ZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLndoaXRlLFxuICAgICAgICBib3JkZXJDb2xvcjogY29yZS5ib3JkZXJMaWdodCxcbiAgICAgICAgYm9yZGVyQ29sb3JfYWN0aXZlOiBjb3JlLmJvcmRlckxpZ2h0LFxuICAgICAgICBib3JkZXJDb2xvcl9ob3ZlcjogY29yZS5ib3JkZXJMaWdodCxcbiAgICAgICAgY29sb3I6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUuZ3JheUxpZ2h0ZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNwYWNpbmc6IHtcbiAgICAgIGRheVBpY2tlckhvcml6b250YWxQYWRkaW5nOiA5LFxuICAgICAgY2FwdGlvblBhZGRpbmdUb3A6IDIyLFxuICAgICAgY2FwdGlvblBhZGRpbmdCb3R0b206IDM3LFxuICAgICAgaW5wdXRQYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nVmVydGljYWw6IHVuZGVmaW5lZCxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1RvcDogMTEsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdCb3R0b206IDksXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdIb3Jpem9udGFsOiB1bmRlZmluZWQsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdMZWZ0OiAxMSxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1JpZ2h0OiAxMSxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1ZlcnRpY2FsX3NtYWxsOiB1bmRlZmluZWQsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdUb3Bfc21hbGw6IDcsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdCb3R0b21fc21hbGw6IDUsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdIb3Jpem9udGFsX3NtYWxsOiB1bmRlZmluZWQsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdMZWZ0X3NtYWxsOiA3LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nUmlnaHRfc21hbGw6IDdcbiAgICB9LFxuICAgIHNpemluZzoge1xuICAgICAgaW5wdXRXaWR0aDogMTMwLFxuICAgICAgaW5wdXRXaWR0aF9zbWFsbDogOTcsXG4gICAgICBhcnJvd1dpZHRoOiAyNFxuICAgIH0sXG4gICAgbm9TY3JvbGxCYXJPblZlcnRpY2FsU2Nyb2xsYWJsZTogZmFsc2UsXG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogMTQsXG4gICAgICBjYXB0aW9uU2l6ZTogMTgsXG4gICAgICBpbnB1dDoge1xuICAgICAgICBzaXplOiAxOSxcbiAgICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgICAgICBzaXplX3NtYWxsOiAxNSxcbiAgICAgICAgbGluZUhlaWdodF9zbWFsbDogJzE4cHgnLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nX3NtYWxsOiAnMC4ycHgnLFxuICAgICAgICBzdHlsZURpc2FibGVkOiAnaXRhbGljJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRhdGVzL2xpYi90aGVtZS9EZWZhdWx0VGhlbWUuanNcbi8vIG1vZHVsZSBpZCA9IDgzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lO1xuXG52YXIgX3JlYWN0V2l0aFN0eWxlc0ludGVyZmFjZUNzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3NcIikpO1xuXG52YXIgX3JlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZSgpIHtcbiAgKDAsIF9yZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWVbXCJkZWZhdWx0XCJdKShfcmVhY3RXaXRoU3R5bGVzSW50ZXJmYWNlQ3NzW1wiZGVmYXVsdFwiXSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRhdGVzL2xpYi91dGlscy9yZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUuanNcbi8vIG1vZHVsZSBpZCA9IDgzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lO1xuXG52YXIgX1RoZW1lZFN0eWxlU2hlZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldFwiKSk7XG5cbnZhciBfRGVmYXVsdFRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGhlbWUvRGVmYXVsdFRoZW1lXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZShyZWFjdFdpdGhTdHlsZXNJbnRlcmZhY2UpIHtcbiAgX1RoZW1lZFN0eWxlU2hlZXRbXCJkZWZhdWx0XCJdLnJlZ2lzdGVySW50ZXJmYWNlKHJlYWN0V2l0aFN0eWxlc0ludGVyZmFjZSk7XG5cbiAgX1RoZW1lZFN0eWxlU2hlZXRbXCJkZWZhdWx0XCJdLnJlZ2lzdGVyVGhlbWUoX0RlZmF1bHRUaGVtZVtcImRlZmF1bHRcIl0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvdXRpbHMvcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA4MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX0VsZW1lbnRzID0gcmVxdWlyZSgnLi9FbGVtZW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBfZXh0cmFjdE9wdGlvbnMgPSBmdW5jdGlvbiBfZXh0cmFjdE9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIGlkID0gcHJvcHMuaWQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvblJlYWR5ID0gcHJvcHMub25SZWFkeSxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnaWQnLCAnY2xhc3NOYW1lJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnb25CbHVyJywgJ29uUmVhZHknXSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG52YXIgY2FwaXRhbGl6ZWQgPSBmdW5jdGlvbiBjYXBpdGFsaXplZChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbnZhciBFbGVtZW50ID0gZnVuY3Rpb24gRWxlbWVudCh0eXBlKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBob2NPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoX2NsYXNzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzcyhwcm9wcywgY29udGV4dCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9jbGFzcyk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBfdGhpcy5oYW5kbGVSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIF90aGlzLl9yZWYgPSByZWY7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fZWxlbWVudCA9IG51bGw7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX2V4dHJhY3RPcHRpb25zKF90aGlzLnByb3BzKTtcbiAgICAgIC8vIFdlIGtlZXAgdHJhY2sgb2YgdGhlIGV4dHJhY3RlZCBvcHRpb25zIG9uIHRoaXMuX29wdGlvbnMgdG8gYXZvaWQgcmUtcmVuZGVyaW5nLlxuICAgICAgLy8gKFdlIHdvdWxkIHVubmVjZXNzYXJpbHkgcmUtcmVuZGVyIGlmIHdlIHdlcmUgdHJhY2tpbmcgdGhlbSB3aXRoIHN0YXRlLilcbiAgICAgIF90aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY2xhc3MucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5jb250ZXh0LmFkZEVsZW1lbnRzTG9hZExpc3RlbmVyKGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzLmNyZWF0ZSh0eXBlLCBfdGhpczIuX29wdGlvbnMpO1xuICAgICAgICBfdGhpczIuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIF90aGlzMi5fc2V0dXBFdmVudExpc3RlbmVycyhlbGVtZW50KTtcblxuICAgICAgICBlbGVtZW50Lm1vdW50KF90aGlzMi5fcmVmKTtcblxuICAgICAgICAvLyBSZWdpc3RlciBFbGVtZW50IGZvciBhdXRvbWF0aWMgdG9rZW4gLyBzb3VyY2UgY3JlYXRpb25cbiAgICAgICAgaWYgKGhvY09wdGlvbnMuaW1wbGllZFRva2VuVHlwZSB8fCBob2NPcHRpb25zLmltcGxpZWRTb3VyY2VUeXBlKSB7XG4gICAgICAgICAgX3RoaXMyLmNvbnRleHQucmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQsIGhvY09wdGlvbnMuaW1wbGllZFRva2VuVHlwZSwgaG9jT3B0aW9ucy5pbXBsaWVkU291cmNlVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY2xhc3MucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBfZXh0cmFjdE9wdGlvbnMobmV4dFByb3BzKTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggIT09IDAgJiYgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShvcHRpb25zLCB0aGlzLl9vcHRpb25zKSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfY2xhc3MucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQudW5yZWdpc3RlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9jbGFzcy5wcm90b3R5cGUuX3NldHVwRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0dXBFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgZWxlbWVudC5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vblJlYWR5KF90aGlzMy5fZWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICBfdGhpczMucHJvcHMub25DaGFuZ2UoY2hhbmdlKTtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50Lm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3Byb3BzO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzID0gX3RoaXMzLnByb3BzKS5vbkJsdXIuYXBwbHkoX3Byb3BzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50Lm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wcm9wczI7XG5cbiAgICAgICAgcmV0dXJuIChfcHJvcHMyID0gX3RoaXMzLnByb3BzKS5vbkZvY3VzLmFwcGx5KF9wcm9wczIsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHJlZjogdGhpcy5oYW5kbGVSZWZcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX2NsYXNzO1xuICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCBfY2xhc3MucHJvcFR5cGVzID0ge1xuICAgIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uUmVhZHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9LCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25CbHVyOiBub29wLFxuICAgIG9uRm9jdXM6IG5vb3AsXG4gICAgb25SZWFkeTogbm9vcFxuICB9LCBfY2xhc3MuY29udGV4dFR5cGVzID0gX0VsZW1lbnRzLmVsZW1lbnRDb250ZXh0VHlwZXMsIF9jbGFzcy5kaXNwbGF5TmFtZSA9IGNhcGl0YWxpemVkKHR5cGUpICsgJ0VsZW1lbnQnLCBfdGVtcDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9FbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4NThcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX0VsZW1lbnRzID0gcmVxdWlyZSgnLi9FbGVtZW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBfZXh0cmFjdE9wdGlvbnMgPSBmdW5jdGlvbiBfZXh0cmFjdE9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIGlkID0gcHJvcHMuaWQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25SZWFkeSA9IHByb3BzLm9uUmVhZHksXG4gICAgICBwYXltZW50UmVxdWVzdCA9IHByb3BzLnBheW1lbnRSZXF1ZXN0LFxuICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydpZCcsICdjbGFzc05hbWUnLCAnb25CbHVyJywgJ29uQ2xpY2snLCAnb25Gb2N1cycsICdvblJlYWR5JywgJ3BheW1lbnRSZXF1ZXN0J10pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxudmFyIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5fcmVmID0gcmVmO1xuICAgIH07XG5cbiAgICB2YXIgb3B0aW9ucyA9IF9leHRyYWN0T3B0aW9ucyhwcm9wcyk7XG4gICAgLy8gV2Uga2VlcCB0cmFjayBvZiB0aGUgZXh0cmFjdGVkIG9wdGlvbnMgb24gdGhpcy5fb3B0aW9ucyB0byBhdm9pZCByZS1yZW5kZXJpbmcuXG4gICAgLy8gKFdlIHdvdWxkIHVubmVjZXNzYXJpbHkgcmUtcmVuZGVyIGlmIHdlIHdlcmUgdHJhY2tpbmcgdGhlbSB3aXRoIHN0YXRlLilcbiAgICBfdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5jb250ZXh0LmFkZEVsZW1lbnRzTG9hZExpc3RlbmVyKGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgX3RoaXMyLl9lbGVtZW50ID0gZWxlbWVudHMuY3JlYXRlKCdwYXltZW50UmVxdWVzdEJ1dHRvbicsIF9leHRlbmRzKHtcbiAgICAgICAgcGF5bWVudFJlcXVlc3Q6IF90aGlzMi5wcm9wcy5wYXltZW50UmVxdWVzdFxuICAgICAgfSwgX3RoaXMyLl9vcHRpb25zKSk7XG4gICAgICBfdGhpczIuX2VsZW1lbnQub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25SZWFkeShfdGhpczIuX2VsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBfdGhpczIuX2VsZW1lbnQub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3Byb3BzO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzID0gX3RoaXMyLnByb3BzKS5vbkZvY3VzLmFwcGx5KF9wcm9wcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMyLl9lbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wcm9wczI7XG5cbiAgICAgICAgcmV0dXJuIChfcHJvcHMyID0gX3RoaXMyLnByb3BzKS5vbkNsaWNrLmFwcGx5KF9wcm9wczIsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzMi5fZWxlbWVudC5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wcm9wczM7XG5cbiAgICAgICAgcmV0dXJuIChfcHJvcHMzID0gX3RoaXMyLnByb3BzKS5vbkJsdXIuYXBwbHkoX3Byb3BzMywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMyLl9lbGVtZW50Lm1vdW50KF90aGlzMi5fcmVmKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnBheW1lbnRSZXF1ZXN0ICE9PSBuZXh0UHJvcHMucGF5bWVudFJlcXVlc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQgcHJvcCBjaGFuZ2U6IHBheW1lbnRSZXF1ZXN0IGlzIG5vdCBhIGN1c3RvbWl6YWJsZSBwcm9wZXJ0eS4nKTtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0cmFjdE9wdGlvbnMobmV4dFByb3BzKTtcbiAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoICE9PSAwICYmICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkob3B0aW9ucywgdGhpcy5fb3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5fZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LmRlc3Ryb3koKTtcbiAgfTtcblxuICBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHJlZjogdGhpcy5oYW5kbGVSZWZcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVhZHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgcGF5bWVudFJlcXVlc3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNhbk1ha2VQYXltZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2hvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBvbkJsdXI6IG5vb3AsXG4gIG9uQ2xpY2s6IG5vb3AsXG4gIG9uRm9jdXM6IG5vb3AsXG4gIG9uUmVhZHk6IG5vb3Bcbn07XG5QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQuY29udGV4dFR5cGVzID0gX0VsZW1lbnRzLmVsZW1lbnRDb250ZXh0VHlwZXM7XG5leHBvcnRzLmRlZmF1bHQgPSBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDg1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0VsZW1lbnRzID0gcmVxdWlyZSgnLi9FbGVtZW50cycpO1xuXG52YXIgX1Byb3ZpZGVyID0gcmVxdWlyZSgnLi9Qcm92aWRlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gcmVhY3QtcmVkdXggZG9lcyBhIGJ1bmNoIG9mIHN0dWZmIHdpdGggcHVyZSBjb21wb25lbnRzIC8gY2hlY2tpbmcgaWYgaXQgbmVlZHMgdG8gcmUtcmVuZGVyLlxuLy8gbm90IHN1cmUgaWYgd2UgbmVlZCB0byBkbyB0aGUgc2FtZS5cbnZhciBpbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfY29tcG9uZW50T3B0aW9ucyR3aXQgPSBjb21wb25lbnRPcHRpb25zLndpdGhSZWYsXG4gICAgICB3aXRoUmVmID0gX2NvbXBvbmVudE9wdGlvbnMkd2l0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9jb21wb25lbnRPcHRpb25zJHdpdDtcblxuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKF9jbGFzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBfY2xhc3MocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICBpZiAoIWNvbnRleHQgfHwgIWNvbnRleHQuZ2V0UmVnaXN0ZXJlZEVsZW1lbnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHRyeWluZyB0byBpbmplY3QgU3RyaXBlIGNvbnRleHQgb3V0c2lkZSBvZiBhbiBFbGVtZW50cyBjb250ZXh0LlxcblBsZWFzZSBiZSBzdXJlIHRoZSBjb21wb25lbnQgdGhhdCBjYWxscyBjcmVhdGVTb3VyY2Ugb3IgY3JlYXRlVG9rZW4gaXMgd2l0aGluIGFuIDxFbGVtZW50cz4gY29tcG9uZW50LicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgX3RoaXMuZmluZEVsZW1lbnQgPSBmdW5jdGlvbiAoZmlsdGVyQnksIHNwZWNpZmllZFR5cGUpIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gX3RoaXMuY29udGV4dC5nZXRSZWdpc3RlcmVkRWxlbWVudHMoKTtcbiAgICAgICAgdmFyIGZpbHRlcmVkRWxlbWVudHMgPSBhbGxFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZVtmaWx0ZXJCeV07XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWF0Y2hpbmdFbGVtZW50cyA9IHNwZWNpZmllZFR5cGUgPT09ICdhdXRvJyA/IGZpbHRlcmVkRWxlbWVudHMgOiBmaWx0ZXJlZEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlW2ZpbHRlckJ5XSA9PT0gc3BlY2lmaWVkVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRWxlbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoaW5nRWxlbWVudHNbMF0uZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGluZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBkaWQgbm90IHNwZWNpZnkgdGhlIHR5cGUgb2YgU291cmNlIG9yIFRva2VuIHRvIGNyZWF0ZS5cXG4gICAgICAgIFdlIGNvdWxkIG5vdCBpbmZlciB3aGljaCBFbGVtZW50IHlvdSB3YW50IHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlcXVpcmVFbGVtZW50ID0gZnVuY3Rpb24gKGZpbHRlckJ5LCBzcGVjaWZpZWRUeXBlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMuZmluZEVsZW1lbnQoZmlsdGVyQnksIHNwZWNpZmllZFR5cGUpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGRpZCBub3Qgc3BlY2lmeSB0aGUgdHlwZSBvZiBTb3VyY2Ugb3IgVG9rZW4gdG8gY3JlYXRlLlxcbiAgICAgICAgV2UgY291bGQgbm90IGluZmVyIHdoaWNoIEVsZW1lbnQgeW91IHdhbnQgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMud3JhcHBlZENyZWF0ZVRva2VuID0gZnVuY3Rpb24gKHN0cmlwZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB0b2tlblR5cGVPck9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgICAgIGlmICh0b2tlblR5cGVPck9wdGlvbnMgJiYgKHR5cGVvZiB0b2tlblR5cGVPck9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRva2VuVHlwZU9yT3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gRmlyc3QgYXJndW1lbnQgaXMgb3B0aW9uczsgaW5mZXIgdGhlIEVsZW1lbnQgYW5kIHRva2VuaXplXG4gICAgICAgICAgICB2YXIgb3B0cyA9IHRva2VuVHlwZU9yT3B0aW9ucztcblxuICAgICAgICAgICAgdmFyIHRva2VuVHlwZSA9IG9wdHMudHlwZSxcbiAgICAgICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFsndHlwZSddKTtcblxuICAgICAgICAgICAgdmFyIHNwZWNpZmllZFR5cGUgPSB0eXBlb2YgdG9rZW5UeXBlID09PSAnc3RyaW5nJyA/IHRva2VuVHlwZSA6ICdhdXRvJztcbiAgICAgICAgICAgIC8vIFNpbmNlIG9ubHkgb3B0aW9ucyB3ZXJlIHBhc3NlZCBpbiwgYSBjb3JyZXNwb25kaW5nIEVsZW1lbnQgbXVzdCBleGlzdFxuICAgICAgICAgICAgLy8gZm9yIHRoZSB0b2tlbml6YXRpb24gdG8gc3VjY2VlZCAtLSB0aHVzIHdlIGNhbGwgcmVxdWlyZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLnJlcXVpcmVFbGVtZW50KCdpbXBsaWVkVG9rZW5UeXBlJywgc3BlY2lmaWVkVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXBlLmNyZWF0ZVRva2VuKGVsZW1lbnQsIHJlc3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRva2VuVHlwZU9yT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0IGFyZ3VtZW50IGlzIHRva2VuIHR5cGU7IHRva2VuaXplIHdpdGggdG9rZW4gdHlwZSBhbmQgb3B0aW9uc1xuICAgICAgICAgICAgdmFyIF90b2tlblR5cGUgPSB0b2tlblR5cGVPck9wdGlvbnM7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXBlLmNyZWF0ZVRva2VuKF90b2tlblR5cGUsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIGJhZCB2YWx1ZSB3YXMgcGFzc2VkIGluIGZvciBvcHRpb25zLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvcHRpb25zIHBhc3NlZCB0byBjcmVhdGVUb2tlbi4gRXhwZWN0ZWQgYW4gb2JqZWN0LCBnb3QgJyArICh0eXBlb2YgdG9rZW5UeXBlT3JPcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0b2tlblR5cGVPck9wdGlvbnMpKSArICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMud3JhcHBlZENyZWF0ZVNvdXJjZSA9IGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgU291cmNlIHR5cGUgcGFzc2VkIHRvIGNyZWF0ZVNvdXJjZS4gRXhwZWN0ZWQgc3RyaW5nLCBnb3QgJyArIF90eXBlb2Yob3B0aW9ucy50eXBlKSArICcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMuZmluZEVsZW1lbnQoJ2ltcGxpZWRTb3VyY2VUeXBlJywgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIC8vIElmIGFuIEVsZW1lbnQgZXhpc3RzIGZvciB0aGUgc291cmNlIHR5cGUsIHVzZSB0aGF0IHRvIGNyZWF0ZSB0aGVcbiAgICAgICAgICAgICAgLy8gY29ycmVzcG9uZGluZyBzb3VyY2UuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIE5PVEU6IHRoaXMgcHJldmVudHMgdXNlcnMgZnJvbSBpbmRlcGVuZGVudGx5IGNyZWF0aW5nIHNvdXJjZXMgb2ZcbiAgICAgICAgICAgICAgLy8gdHlwZSBgZm9vYCBpZiBhbiBFbGVtZW50IHRoYXQgY2FuIGNyZWF0ZSBgZm9vYCBzb3VyY2VzIGV4aXN0cyBpblxuICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCA8RWxlbWVudHMgLz4gY29udGV4dC5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0cmlwZS5jcmVhdGVTb3VyY2UoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBJZiBubyBFbGVtZW50IGV4aXN0cyBmb3IgdGhlIHNvdXJjZSB0eXBlLCBkaXJlY3RseSBjcmVhdGUgYSBzb3VyY2UuXG4gICAgICAgICAgICAgIHJldHVybiBzdHJpcGUuY3JlYXRlU291cmNlKG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIGJhZCB2YWx1ZSB3YXMgcGFzc2VkIGluIGZvciBvcHRpb25zLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvcHRpb25zIHBhc3NlZCB0byBjcmVhdGVTb3VyY2UuIEV4cGVjdGVkIGFuIG9iamVjdCwgZ290ICcgKyAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSArICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgaWYgKF90aGlzLmNvbnRleHQudGFnID09PSAnc3luYycpIHtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgc3RyaXBlOiBfdGhpcy5zdHJpcGVQcm9wcyhfdGhpcy5jb250ZXh0LnN0cmlwZSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHN0cmlwZTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jbGFzcy5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5jb250ZXh0LnRhZyA9PT0gJ2FzeW5jJykge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkU3RyaXBlTG9hZExpc3RlbmVyKGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RyaXBlOiBfdGhpczIuc3RyaXBlUHJvcHMoc3RyaXBlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gJ3N5bmMnLCBpdCdzIGFscmVhZHkgc2V0IGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5nZXRXcmFwcGVkSW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICBpZiAoIXdpdGhSZWYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyBhY2Nlc3MgdGhlIHdyYXBwZWQgaW5zdGFuY2UsIHRoZSBge3dpdGhSZWY6IHRydWV9YCBvcHRpb24gbXVzdCBiZSBzZXQgd2hlbiBjYWxsaW5nIGBpbmplY3RTdHJpcGUoKWAnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5zdHJpcGVQcm9wcyA9IGZ1bmN0aW9uIHN0cmlwZVByb3BzKHN0cmlwZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdHJpcGUsIHtcbiAgICAgICAgLy8gVGhlc2UgYXJlIHRoZSBvbmx5IGZ1bmN0aW9ucyB0aGF0IHRha2UgZWxlbWVudHMuXG4gICAgICAgIGNyZWF0ZVRva2VuOiB0aGlzLndyYXBwZWRDcmVhdGVUb2tlbihzdHJpcGUpLFxuICAgICAgICBjcmVhdGVTb3VyY2U6IHRoaXMud3JhcHBlZENyZWF0ZVNvdXJjZShzdHJpcGUpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRmluZHMgYW4gRWxlbWVudCBieSB0aGUgc3BlY2lmaWVkIHR5cGUsIGlmIG9uZSBleGlzdHMuXG4gICAgLy8gVGhyb3dzIGlmIG11bHRpcGxlIEVsZW1lbnRzIG1hdGNoLlxuXG5cbiAgICAvLyBSZXF1aXJlIHRoYXQgZXhhY3RseSBvbmUgRWxlbWVudCBpcyBmb3VuZCBmb3IgdGhlIHNwZWNpZmllZCB0eXBlLlxuICAgIC8vIFRocm93cyBpZiBubyBFbGVtZW50IGlzIGZvdW5kLlxuXG5cbiAgICAvLyBXcmFwcyBjcmVhdGVUb2tlbiBpbiBvcmRlciB0byBpbmZlciB0aGUgRWxlbWVudCB0aGF0IGlzIGJlaW5nIHRva2VuaXplZC5cblxuXG4gICAgLy8gV3JhcHMgY3JlYXRlU291cmNlIGluIG9yZGVyIHRvIGluZmVyIHRoZSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgdXNlZCBmb3JcbiAgICAvLyBzb3VyY2UgY3JlYXRpb24uXG5cblxuICAgIF9jbGFzcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBzdHJpcGU6IHRoaXMuc3RhdGUuc3RyaXBlLFxuICAgICAgICByZWY6IHdpdGhSZWYgPyBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIF90aGlzMy53cmFwcGVkSW5zdGFuY2UgPSBjO1xuICAgICAgICB9IDogbnVsbFxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX2NsYXNzO1xuICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCBfY2xhc3MuY29udGV4dFR5cGVzID0gX2V4dGVuZHMoe30sIF9Qcm92aWRlci5wcm92aWRlckNvbnRleHRUeXBlcywgX0VsZW1lbnRzLmluamVjdENvbnRleHRUeXBlcyksIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdJbmplY3RTdHJpcGUoJyArIChXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JykgKyAnKScsIF90ZW1wO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaW5qZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvaW5qZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5JZGVhbEJhbmtFbGVtZW50ID0gZXhwb3J0cy5JYmFuRWxlbWVudCA9IGV4cG9ydHMuUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50ID0gZXhwb3J0cy5Qb3N0YWxDb2RlRWxlbWVudCA9IGV4cG9ydHMuQ2FyZENWQ0VsZW1lbnQgPSBleHBvcnRzLkNhcmRFeHBpcnlFbGVtZW50ID0gZXhwb3J0cy5DYXJkTnVtYmVyRWxlbWVudCA9IGV4cG9ydHMuQ2FyZEVsZW1lbnQgPSBleHBvcnRzLkVsZW1lbnRzID0gZXhwb3J0cy5pbmplY3RTdHJpcGUgPSBleHBvcnRzLlN0cmlwZVByb3ZpZGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX1Byb3ZpZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1Byb3ZpZGVyJyk7XG5cbnZhciBfUHJvdmlkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvdmlkZXIpO1xuXG52YXIgX2luamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmplY3QnKTtcblxudmFyIF9pbmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5qZWN0KTtcblxudmFyIF9FbGVtZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9FbGVtZW50cycpO1xuXG52YXIgX0VsZW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VsZW1lbnRzKTtcblxudmFyIF9FbGVtZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0VsZW1lbnQnKTtcblxudmFyIF9FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VsZW1lbnQpO1xuXG52YXIgX1BheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQnKTtcblxudmFyIF9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gRGVmaW5lIEVsZW1lbnRzLCBhbmQgcmVnaXN0ZXIgdGhlaXIgaW1wbGllZCB0b2tlbiAvIHNvdXJjZSB0eXBlcyBmb3Jcbi8vIGF1dG9tYXRpYyB0b2tlbiAvIHNvdXJjZSBjcmVhdGlvbi5cblxuLy8gQ2FyZFxudmFyIENhcmRFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnY2FyZCcsIHtcbiAgaW1wbGllZFRva2VuVHlwZTogJ2NhcmQnLFxuICBpbXBsaWVkU291cmNlVHlwZTogJ2NhcmQnXG59KTtcblxuLy8gU3BsaXQgRmllbGRzXG4vLyBOb3RlOiB3ZSBvbmx5IHJlZ2lzdGVyIHRoZSBDYXJkTnVtYmVyRWxlbWVudCBmb3Igc3BsaXQgZmllbGRzIHNvIHRoYXQgd2UgaGF2ZVxuLy8gYSB1bmlxdWUgRWxlbWVudCB0byBpbmZlciB3aGVuIGNhbGxpbmcgYHdyYXBwZWRDcmVhdGVUb2tlbmAgb3IgYHdyYXBwZWRDcmVhdGVTb3VyY2VgLlxuXG52YXIgQ2FyZE51bWJlckVsZW1lbnQgPSAoMCwgX0VsZW1lbnQyLmRlZmF1bHQpKCdjYXJkTnVtYmVyJywge1xuICBpbXBsaWVkVG9rZW5UeXBlOiAnY2FyZCcsXG4gIGltcGxpZWRTb3VyY2VUeXBlOiAnY2FyZCdcbn0pO1xudmFyIENhcmRFeHBpcnlFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnY2FyZEV4cGlyeScpO1xudmFyIENhcmRDVkNFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnY2FyZEN2YycpO1xudmFyIFBvc3RhbENvZGVFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgncG9zdGFsQ29kZScpO1xuXG4vLyBJQkFOXG52YXIgSWJhbkVsZW1lbnQgPSAoMCwgX0VsZW1lbnQyLmRlZmF1bHQpKCdpYmFuJywge1xuICBpbXBsaWVkVG9rZW5UeXBlOiAnYmFua19hY2NvdW50JyxcbiAgaW1wbGllZFNvdXJjZVR5cGU6ICdzZXBhX2RlYml0J1xufSk7XG5cbi8vIGlERUFMIEJhbmtcbnZhciBJZGVhbEJhbmtFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnaWRlYWxCYW5rJywgeyBpbXBsaWVkU291cmNlVHlwZTogJ2lkZWFsJyB9KTtcblxuZXhwb3J0cy5TdHJpcGVQcm92aWRlciA9IF9Qcm92aWRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuaW5qZWN0U3RyaXBlID0gX2luamVjdDIuZGVmYXVsdDtcbmV4cG9ydHMuRWxlbWVudHMgPSBfRWxlbWVudHMyLmRlZmF1bHQ7XG5leHBvcnRzLkNhcmRFbGVtZW50ID0gQ2FyZEVsZW1lbnQ7XG5leHBvcnRzLkNhcmROdW1iZXJFbGVtZW50ID0gQ2FyZE51bWJlckVsZW1lbnQ7XG5leHBvcnRzLkNhcmRFeHBpcnlFbGVtZW50ID0gQ2FyZEV4cGlyeUVsZW1lbnQ7XG5leHBvcnRzLkNhcmRDVkNFbGVtZW50ID0gQ2FyZENWQ0VsZW1lbnQ7XG5leHBvcnRzLlBvc3RhbENvZGVFbGVtZW50ID0gUG9zdGFsQ29kZUVsZW1lbnQ7XG5leHBvcnRzLlBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IF9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQyLmRlZmF1bHQ7XG5leHBvcnRzLkliYW5FbGVtZW50ID0gSWJhbkVsZW1lbnQ7XG5leHBvcnRzLklkZWFsQmFua0VsZW1lbnQgPSBJZGVhbEJhbmtFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDg2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDg2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FycmF5UHJvdG90eXBlID0gcmVxdWlyZSgnYXJyYXkucHJvdG90eXBlLmZsYXQnKTtcblxudmFyIF9hcnJheVByb3RvdHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheVByb3RvdHlwZSk7XG5cbnZhciBfZ2xvYmFsQ2FjaGUgPSByZXF1aXJlKCdnbG9iYWwtY2FjaGUnKTtcblxudmFyIF9nbG9iYWxDYWNoZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nbG9iYWxDYWNoZSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi91dGlscy9jb25zdGFudHMnKTtcblxudmFyIF9nZXRDbGFzc05hbWUgPSByZXF1aXJlKCcuL3V0aWxzL2dldENsYXNzTmFtZScpO1xuXG52YXIgX2dldENsYXNzTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDbGFzc05hbWUpO1xuXG52YXIgX3NlcGFyYXRlU3R5bGVzMiA9IHJlcXVpcmUoJy4vdXRpbHMvc2VwYXJhdGVTdHlsZXMnKTtcblxudmFyIF9zZXBhcmF0ZVN0eWxlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXBhcmF0ZVN0eWxlczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogRnVuY3Rpb24gcmVxdWlyZWQgYXMgcGFydCBvZiB0aGUgcmVhY3Qtd2l0aC1zdHlsZXMgaW50ZXJmYWNlLiBQYXJzZXMgdGhlIHN0eWxlcyBwcm92aWRlZCBieVxuICogcmVhY3Qtd2l0aC1zdHlsZXMgdG8gcHJvZHVjZSBjbGFzcyBuYW1lcyBiYXNlZCBvbiB0aGUgc3R5bGUgbmFtZSBhbmQgb3B0aW9uYWxseSB0aGUgbmFtZXNwYWNlIGlmXG4gKiBhdmFpbGFibGUuXG4gKlxuICogc3R5bGVzT2JqZWN0IHtPYmplY3R9IFRoZSBzdHlsZXMgb2JqZWN0IHBhc3NlZCB0byB3aXRoU3R5bGVzLlxuICpcbiAqIFJldHVybiBhbiBvYmplY3QgbWFwcGluZyBzdHlsZSBuYW1lcyB0byBjbGFzcyBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKHN0eWxlc09iamVjdCkge1xuICB2YXIgc3R5bGVzVG9DbGFzc2VzID0ge307XG4gIHZhciBzdHlsZU5hbWVzID0gT2JqZWN0LmtleXMoc3R5bGVzT2JqZWN0KTtcbiAgdmFyIHNoYXJlZFN0YXRlID0gX2dsb2JhbENhY2hlMlsnZGVmYXVsdCddLmdldChfY29uc3RhbnRzLkdMT0JBTF9DQUNIRV9LRVkpIHx8IHt9O1xuICB2YXIgX3NoYXJlZFN0YXRlJG5hbWVzcGFjID0gc2hhcmVkU3RhdGUubmFtZXNwYWNlLFxuICAgICAgbmFtZXNwYWNlID0gX3NoYXJlZFN0YXRlJG5hbWVzcGFjID09PSB1bmRlZmluZWQgPyAnJyA6IF9zaGFyZWRTdGF0ZSRuYW1lc3BhYztcblxuICBzdHlsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2dldENsYXNzTmFtZTJbJ2RlZmF1bHQnXSkobmFtZXNwYWNlLCBzdHlsZU5hbWUpO1xuICAgIHN0eWxlc1RvQ2xhc3Nlc1tzdHlsZU5hbWVdID0gY2xhc3NOYW1lO1xuICB9KTtcbiAgcmV0dXJuIHN0eWxlc1RvQ2xhc3Nlcztcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHN0eWxlcyB0byBiZSBjb25zdW1lZCBieSBhIGNvbXBvbmVudC5cbiAqXG4gKiBzdHlsZXNBcnJheSB7QXJyYXl9IEFycmF5IG9mIHRoZSBmb2xsb3dpbmc6IHZhbHVlcyByZXR1cm5lZCBieSBjcmVhdGUsIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0c1xuICogcmVwcmVzZW50aW5nIGlubGluZSBzdHlsZXMsIG9yIGFycmF5cyB0aGVyZW9mLlxuICpcbiAqIFJldHVybiBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBjbGFzc05hbWUgYW5kIHN0eWxlIHByb3BlcnRpZXMgdG8gYmUgc3ByZWFkIG9uIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiByZXNvbHZlKHN0eWxlc0FycmF5KSB7XG4gIHZhciBmbGF0dGVuZWRTdHlsZXMgPSAoMCwgX2FycmF5UHJvdG90eXBlMlsnZGVmYXVsdCddKShzdHlsZXNBcnJheSwgSW5maW5pdHkpO1xuXG4gIHZhciBfc2VwYXJhdGVTdHlsZXMgPSAoMCwgX3NlcGFyYXRlU3R5bGVzM1snZGVmYXVsdCddKShmbGF0dGVuZWRTdHlsZXMpLFxuICAgICAgY2xhc3NOYW1lcyA9IF9zZXBhcmF0ZVN0eWxlcy5jbGFzc05hbWVzLFxuICAgICAgaGFzSW5saW5lU3R5bGVzID0gX3NlcGFyYXRlU3R5bGVzLmhhc0lubGluZVN0eWxlcyxcbiAgICAgIGlubGluZVN0eWxlcyA9IF9zZXBhcmF0ZVN0eWxlcy5pbmxpbmVTdHlsZXM7XG5cbiAgdmFyIHNwZWNpZmljQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMubWFwKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgIHJldHVybiBTdHJpbmcobmFtZSkgKyAnICcgKyBTdHJpbmcobmFtZSkgKyAnXycgKyBTdHJpbmcoaW5kZXggKyAxKTtcbiAgfSk7XG4gIHZhciBjbGFzc05hbWUgPSBzcGVjaWZpY0NsYXNzTmFtZXMuam9pbignICcpO1xuXG4gIHZhciByZXN1bHQgPSB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH07XG4gIGlmIChoYXNJbmxpbmVTdHlsZXMpIHJlc3VsdC5zdHlsZSA9IGlubGluZVN0eWxlcztcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0geyBjcmVhdGU6IGNyZWF0ZSwgcmVzb2x2ZTogcmVzb2x2ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEdMT0JBTF9DQUNIRV9LRVkgPSAncmVhY3RXaXRoU3R5bGVzSW50ZXJmYWNlQ1NTJztcbnZhciBNQVhfU1BFQ0lGSUNJVFkgPSAyMDtcblxuZXhwb3J0cy5HTE9CQUxfQ0FDSEVfS0VZID0gR0xPQkFMX0NBQ0hFX0tFWTtcbmV4cG9ydHMuTUFYX1NQRUNJRklDSVRZID0gTUFYX1NQRUNJRklDSVRZO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA4Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGdldENsYXNzTmFtZTtcbi8qKlxuICogQ29uc3RydWN0IGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBuYW1lc3BhY2Uge1N0cmluZ30gVXNlZCB0byBjb25zdHJ1Y3QgdW5pcXVlIGNsYXNzIG5hbWVzLlxuICogc3R5bGVOYW1lIHtTdHJpbmd9IE5hbWUgaWRlbnRpZnlpbmcgdGhlIHNwZWNpZmljIHN0eWxlLlxuICpcbiAqIFJldHVybiB0aGUgY2xhc3MgbmFtZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKG5hbWVzcGFjZSwgc3R5bGVOYW1lKSB7XG4gIHZhciBuYW1lc3BhY2VTZWdtZW50ID0gbmFtZXNwYWNlLmxlbmd0aCA+IDAgPyBTdHJpbmcobmFtZXNwYWNlKSArICdfXycgOiAnJztcbiAgcmV0dXJuICcnICsgbmFtZXNwYWNlU2VnbWVudCArIFN0cmluZyhzdHlsZU5hbWUpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvZ2V0Q2xhc3NOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA4Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gYXJyYXkgb2Ygc3R5bGVzIGFuZCBzZXBhcmF0ZXMgdGhlbSBpbnRvIHN0eWxlcyB0aGF0XG4vLyBhcmUgaGFuZGxlZCBieSBBcGhyb2RpdGUgYW5kIGlubGluZSBzdHlsZXMuXG5mdW5jdGlvbiBzZXBhcmF0ZVN0eWxlcyhzdHlsZXNBcnJheSkge1xuICB2YXIgY2xhc3NOYW1lcyA9IFtdO1xuXG4gIC8vIFNpbmNlIGRldGVybWluaW5nIGlmIGFuIE9iamVjdCBpcyBlbXB0eSByZXF1aXJlcyBjb2xsZWN0aW5nIGFsbCBvZiBpdHNcbiAgLy8ga2V5cywgYW5kIHdlIHdhbnQgdGhlIGJlc3QgcGVyZm9ybWFuY2UgaW4gdGhpcyBjb2RlIGJlY2F1c2Ugd2UgYXJlIGluIHRoZVxuICAvLyByZW5kZXIgcGF0aCwgd2UgYXJlIGdvaW5nIHRvIGRvIGEgbGl0dGxlIGJvb2trZWVwaW5nIG91cnNlbHZlcy5cbiAgdmFyIGhhc0lubGluZVN0eWxlcyA9IGZhbHNlO1xuICB2YXIgaW5saW5lU3R5bGVzID0ge307XG5cbiAgLy8gVGhpcyBpcyBydW4gb24gcG90ZW50aWFsbHkgZXZlcnkgbm9kZSBpbiB0aGUgdHJlZSB3aGVuIHJlbmRlcmluZywgd2hlcmVcbiAgLy8gcGVyZm9ybWFuY2UgaXMgY3JpdGljYWwuIE5vcm1hbGx5IHdlIHdvdWxkIHByZWZlciB1c2luZyBgZm9yRWFjaGAsIGJ1dFxuICAvLyBvbGQtZmFzaGlvbmVkIGZvciBsb29wcyBhcmUgZmFzdGVyIHNvIHRoYXQncyB3aGF0IHdlIGhhdmUgY2hvc2VuIGhlcmUuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBsdXNwbHVzXG4gICAgdmFyIHN0eWxlID0gc3R5bGVzQXJyYXlbaV07XG5cbiAgICAvLyBJZiB0aGlzICBzdHlsZSBpcyBmYWxzeSwgd2UganVzdCB3YW50IHRvIGRpc3JlZ2FyZCBpdC4gVGhpcyBhbGxvd3MgZm9yXG4gICAgLy8gc3ludGF4IGxpa2U6XG4gICAgLy9cbiAgICAvLyAgIGNzcyhpc0ZvbyAmJiBzdHlsZXMuZm9vKVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5saW5lU3R5bGVzLCBzdHlsZSk7XG4gICAgICAgIGhhc0lubGluZVN0eWxlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzLFxuICAgIGhhc0lubGluZVN0eWxlczogaGFzSW5saW5lU3R5bGVzLFxuICAgIGlubGluZVN0eWxlczogaW5saW5lU3R5bGVzXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNlcGFyYXRlU3R5bGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvc2VwYXJhdGVTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4LmpzJykuZGVmYXVsdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHN0eWxlSW50ZXJmYWNlID0gdm9pZCAwO1xudmFyIHN0eWxlVGhlbWUgPSB2b2lkIDA7XG5cbnZhciBTVEFSVF9NQVJLID0gJ3JlYWN0LXdpdGgtc3R5bGVzLnJlc29sdmUuc3RhcnQnO1xudmFyIEVORF9NQVJLID0gJ3JlYWN0LXdpdGgtc3R5bGVzLnJlc29sdmUuZW5kJztcbnZhciBNRUFTVVJFX01BUksgPSAnXFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzQ1xcdURGQTggW3Jlc29sdmVdJztcblxuZnVuY3Rpb24gcmVnaXN0ZXJUaGVtZSh0aGVtZSkge1xuICBzdHlsZVRoZW1lID0gdGhlbWU7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJmYWNlKGludGVyZmFjZVRvUmVnaXN0ZXIpIHtcbiAgc3R5bGVJbnRlcmZhY2UgPSBpbnRlcmZhY2VUb1JlZ2lzdGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobWFrZUZyb21UaGVtZSwgY3JlYXRlV2l0aERpcmVjdGlvbikge1xuICB2YXIgc3R5bGVzID0gY3JlYXRlV2l0aERpcmVjdGlvbihtYWtlRnJvbVRoZW1lKHN0eWxlVGhlbWUpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMVFIobWFrZUZyb21UaGVtZSkge1xuICByZXR1cm4gY3JlYXRlKG1ha2VGcm9tVGhlbWUsIHN0eWxlSW50ZXJmYWNlLmNyZWF0ZUxUUiB8fCBzdHlsZUludGVyZmFjZS5jcmVhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSVEwobWFrZUZyb21UaGVtZSkge1xuICByZXR1cm4gY3JlYXRlKG1ha2VGcm9tVGhlbWUsIHN0eWxlSW50ZXJmYWNlLmNyZWF0ZVJUTCB8fCBzdHlsZUludGVyZmFjZS5jcmVhdGUpO1xufVxuXG5mdW5jdGlvbiBnZXQoKSB7XG4gIHJldHVybiBzdHlsZVRoZW1lO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm1hcmsgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBlcmZvcm1hbmNlLmNsZWFyTWFya3MoU1RBUlRfTUFSSyk7XG4gICAgcGVyZm9ybWFuY2UubWFyayhTVEFSVF9NQVJLKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdHlsZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gc3R5bGVJbnRlcmZhY2UucmVzb2x2ZShzdHlsZXMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2UubWFyayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5jbGVhck1hcmtzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcyhFTkRfTUFSSyk7XG4gICAgcGVyZm9ybWFuY2UubWFyayhFTkRfTUFSSyk7XG5cbiAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKE1FQVNVUkVfTUFSSywgU1RBUlRfTUFSSywgRU5EX01BUkspO1xuICAgIHBlcmZvcm1hbmNlLmNsZWFyTWFya3MoTUVBU1VSRV9NQVJLKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMVFIoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBzdHlsZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGlmIChzdHlsZUludGVyZmFjZS5yZXNvbHZlTFRSKSB7XG4gICAgcmV0dXJuIHN0eWxlSW50ZXJmYWNlLnJlc29sdmVMVFIoc3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSVEwoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBzdHlsZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIGlmIChzdHlsZUludGVyZmFjZS5yZXNvbHZlUlRMKSB7XG4gICAgcmV0dXJuIHN0eWxlSW50ZXJmYWNlLnJlc29sdmVSVEwoc3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBpZiAoc3R5bGVJbnRlcmZhY2UuZmx1c2gpIHtcbiAgICBzdHlsZUludGVyZmFjZS5mbHVzaCgpO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgcmVnaXN0ZXJUaGVtZTogcmVnaXN0ZXJUaGVtZSxcbiAgcmVnaXN0ZXJJbnRlcmZhY2U6IHJlZ2lzdGVySW50ZXJmYWNlLFxuICBjcmVhdGU6IGNyZWF0ZUxUUixcbiAgY3JlYXRlTFRSOiBjcmVhdGVMVFIsXG4gIGNyZWF0ZVJUTDogY3JlYXRlUlRMLFxuICBnZXQ6IGdldCxcbiAgcmVzb2x2ZTogcmVzb2x2ZUxUUixcbiAgcmVzb2x2ZUxUUjogcmVzb2x2ZUxUUixcbiAgcmVzb2x2ZVJUTDogcmVzb2x2ZVJUTCxcbiAgZmx1c2g6IGZsdXNoXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldC5qc1xuLy8gbW9kdWxlIGlkID0gODgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVNFaFVRRXhNVkZoTVhGeG9WRnhVWUZ4WVdGeFVZRlJVWEZoVVpIUmNZSFNnZ0dCMG5IUlVZSVRFaEpTa3JMeTh3RnlBek9ETXROeWd0TGlzQkNnb0tEZzBPR3hBUUd5MG1JQ1l0TFRJeUx5MHVMUzB0TWk4dUxTMHRNQzh0TFMwdkxUQXRMUzB0TFMwdExTMHRMUzB0TFM4dkxTMHRMUzB0TFMwdExmL0FBQkVJQUdNQitnTUJFUUFDRVFFREVRSC94QUFjQUFFQUFnTUJBUUVBQUFBQUFBQUFBQUFBQlFZREJBY0JBZ2oveEFCTUVBQUJBd0lEQXdVTENBY0hCQU1BQUFBQkFBSURCQkVGRWlFR0V6RUhJa0ZSWVJReVVsUnhnWkdTazdIU0ZSWWpRM09Db2RFelFtSnlvckxCTkVSVFk0UGk4QmNrd3NNbHMvSC94QUFhQVFFQUFnTUJBQUFBQUFBQUFBQUFBQUFBQVFVQ0F3UUcvOFFBT2hFQUFnRUNBd1VFQ1FNREJBTUFBQUFBQUFFQ0F4RUVFaUVGTVVGUllSTnhrYUVVSWpKU2diSEIwZkFWWXVFak0wSTBRMU55Qm9MeC85b0FEQU1CQUFJUkF4RUFQd0R1S0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBRkFWSWJiRC9BUHIvd0MxZC9vUDd2SXIvVDE3dm1mWHp6SCtDZlgvQU5xZWcvdThoNmV2ZDh3ZHMvOEFJUHIvQU8xUFFmM2VROVBYdStaOG5iVWY0QjlmL2Fub1A3dkllbnIzZk14dTI2QStvUHRQOXFuMEQ5M2tQVC8yK1ppZHlnQWYzYyswSHdwNkIrN3lKOU9YdStaaWR5akFmM1krMEh3cWYwLzkza1BUVjd2bVluY3BnSDkyUHRSOENmcDc5N3lKOU5YdW53ZVZBZUtuMm8rQlQrbnYzdkluMHhjakdlVlFlS24ybytCUDA1Kzk1RStscmtmSjVWeDRvZmFqNEUvVG43M2tUNld1UlA3SGJaQ3ZmSkdJVEhrYUhYejVyM0pGdTlGdUM1OFJoZXhTZDczTmxLdDJqYXNXcGNwdkNBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ1BsN3dBU1NBQnFTZEFQT2hLVGJzaXVWMjNkQkViR2NQUCtXMTBnOVpvTGZ4V3Axb0xpZDlQWldLcWFxRnUvVDVtaU9VeWh2OWFPM2RuK2h1c2ZTSUcvOUV4WFR4SmZETnI2S29JYkhVTXpIZzE5NDNIc0FlQmZ6TE9OV0V0ek9TdHMvRTBsZVVIYm10VjVFNHRoeGhBYTFWWHh4ZCs5cmV3blgwY1N0RlhFMHFQOXlTUnRwMEtsVDJGY2ozN1RRRGdYSHlOUDliTGllMk1NdHpiK0RPcGJPcnZsNG4xRnRIVG45WXQ4clQ3d3NvYld3c3RNMXU5TXhscyt1dUYvaVNjRTdYak14d2NPc0VIM0x2aFVoVVY0Tk5kRGtsQ1VIYVNzWkZtWWhBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRSGhRSEtHdFY4ZWVNb1loQUxVQmllMVNEV2tDbEVtcktGSkpweUJTU2pVa0N5TWpYZWhrWVhLVEpHSnlFbCs1Ry8wOVI5bXorWXJnMmo3TWU4NnNKN1RPcnFwTzRJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnSUhhemFtS2hqdTduU3U3eUlHeGQyay9xdDdmUmRhNmxSUVIyNExBMU1WS3kwUzN2ODRuRzhmMmhxS3gxNW5rdHZwRU5JMjlWbTlKN1RjcmhuT1U5NTY3RFlPamhsYW10ZWZIODdpS1dKMGhBZUVJVGNzK3krMmxUU0ZyTG1hRzRHNmNTU1BzM2NXbnM0ZGc0clpDczRiOXhXNHpabEhFSnYyWmMvdjk5NTBMRk5wWFBHV0lGZ0kxSnRuMUhEVFJxcThadGVVdlZvYUxueCtISXA4UHM2TWRhbXI1Y0NBY2JtNTFKNGs4U3FWdTd1eXlXaXNnaElRR1NubmN4MlpqaTA5WS81cjUxblRxenBTelFkbVlUaEdhdEpYUmJjRHg4U2tSeVdFblFlaDM1SHMvOEF4ZWt3RzAxV2ZaMU5KZVQvQUpLWEY0RjAxbmhxdmtUcXR5dUNBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUR3b0RsYkZmSG5qTzFRUUhJREJJcEJxeUtTVFVsV1JKcVNLU1Vha3FsRW1zOVNabUI2a3lNVGtKTDl5Ti9wNmo3Tm44eFZmdEgyWTk1MVlYMm1kWFZVZHdRQkFhT0xWVDQydDNZYm1kSTFnelhzTXgxTmhxVUJqeTFmaFUvcXlmRWdHV3I4S245V1Q0a0F5MWZoVS9xeWZFZ0dXcjhLbjlXVDRrQXkxZmhVL3F5ZkVnR1dyOEtuOVdUNGtBeTFmaFUvcXlmRWdHV3I4S245V1Q0a0F5MWZoVS9xeWZFZ0dXcjhLbjlXVDRrQXkxZmhVL3F5ZkVnTVV0VFVSdWp6N2t0ZklHSEtIZ2pNRHFDU1IwSUNYUUdqamVKc3BZSktoL2VzRjdkTGp3YTBkcEpBODZ4bkpSVjJic1BRbFhxS25IZS96eU9BWXJpTWxUSytlVTNlODM3R2pvYU9wb0dnL01xdWNuSjNaN3FqUmhScHFuRGN2eTVxcURZRUFRQkFUR0ZZSkk5b21iSUk5VGwwTjdjTDNIRHBYQmlNWlRoSjA1UnZ6TkZTdEdMeXRYSnZEc1BuamZtZFBuYndMVG1QbkZ6b1Z3VnE5Q3BHMFlXZlBRNTZrNFNWbEd4TExqTkFRQkFFQVFGNDJjeFBmUjJjZWV6UTlvNkhmODZsNnpadUw5SXAybDdTMy9BSFBQWTNEOWxPOGR6L0xFc3JJNGpWckd6Y1luTUhZNXBOeis4RHA2RnpWMVgzMG11NXAvTlA2RzZrNlgrNG44SDlQNUlTcnhXcWlObnNhTzNLU0Q1dzVWTmJIWTJpLzZrVXV0bmJ4dVdGTEM0YXI3RGZqL0FBWUJ0SE4xTTlCL05hVnRmRWNVdkIvYzJ2WjFMcitmQXNsQlZDV05zZ0ZyOUhVUWJFZWtLL3c5WlZxYXFMaVZOYWs2YzNCbXd0eHFPUDRyeW9WUW1rRUloM1FlUXd1WTRrdEJzRGNQSEcxL09ycW5zNm5sV2E5eW9xYlFtcE5SdFlzbkozdFJXVjBraGxFUWhqYUxsckhBbDdqelJjdUl0WU9KODNXdVhHWWVsUmlzdDdzNmNKaUtsWnR5M0loZHFlVVdxZ3E1b0loRHUyT3lqTXh4T2pSbXVRNGZyWFcvRDRDbk9tcFN2ZG1pdmpwd3FPTWJFdnlkN1cxVmROSXlZUkJqSTgzTVk0SE1YQU4xTGpwWU9XbkdZV25SaW5HOTJic0ppWjFtODNBdVdMNHBGVFJHYVo0YXdla25vQUhFazlTNGFkT1ZTV1dLMU95YzR3V2FSekRHT1ZhWnhJcG9tc2IwT2s1N3oyMkJEVytUVlcxUFpzVjdidjNGWFUyay93REJlSkNIbER4Rzk5K1BKdTRyZnlyZjZCUTVlYk5IcDlibVdiWWpiMnJxS3FPbGxiRzlyODEzaHBhNW9heHpyNkd4NFc0ZEs1Y1ZncWRPbTV4dWRXRnhrNmsxQ1NPb3FwTFFyVzNPMVFvSW11RFErV1FrTWFUWWFDN25HMnRoY2NPa2hkV0Z3enJTdHdSelluRUtqRy9FNTBlVkt1OEdEMUgvQUJxei9UYVBYOCtCVy9xTlhraStjblcwOGxkRktac2dramVCWmdJR1J6UmwwSk90dy8wS3V4bUhqUmtzdTVsaGhNUTYwVzN2TGN1TTZ3Z1BDZ09VTmNyNDg4Wm11UWdGeUF3dmNwQnJ5RlNTYWtwVWttcElWSmtqVWxLeUpOWjZHUmhjcE1qRTVDUy9jamY2ZW8relovTVZ3YlI5bVBlZFdFOXBuVjFVbmNFQVFFYmpmMVAyOGZ2S0Fra0FRQkFFQVFCQUVBUUJBRUFRRVpqZjFIMjdQYzVBU2FBNWx5ellwWVEwMTdONTA3L0kzbXN2MmQrZnVoY3VJYmJVVWVoMkZTU1U2MHVHbjFmMEtoaSt5bFZTeGQwVE1hMk80Rjg3U2VkdzBDMHlwU2lyc3RxRzBLRmVlU0QxN3VSOVZPeUZYSEFhcDdHaUlNRWhPZHQ4cEFJNXZHK28wU1ZHY1Zka1U5cFllcFVWT0R1MzAwSURNT0Z4ZnFXczc3TTljNERpYklFbXpib3NPbGxhNlJqSE9qYjM4Z0YyUmkxeVhIZ0FCcjVFYWVWeVMzR21wV3AwNUtNbnE5eTRzazNZVlIrTkQxby95VmI2VmlmK1A1bUhhMXZjK1lPRTBualE5YVA4bFBwV0svNC9tTzFyZTc4eXk0TkdIdFpGRS9la2N3RUVFbXd2WTIwMEZ2TXErVkt0VnF0S0dyMXQ5ZFRocnpWTzhxbWhNMVdCVFJzTWpnM0tCYzJkcUZ1cTdOeEZLRG5KS3k2bkpUeHRHcExLbTc5eEdYVmZkSFhZOVFIaEtBbThFWStHV0dSMXNrd3NDQ0RjT0FMVDZTMzBxNXdsR3RoTVJCMUZaUzAzL25FcmNSVXA0aWpKUWQ4dXBkRjZZb3dnTlRGNlRmUVN3M0lMMk9hQ05DQ1J6U0QxZzJQbVV4dGRabGRjbnVJbGUyanN6ajJ6MjBwY1JEUG8vZ0g4TG5oWjNVZTMvaDRkc2Y4QWo2cHhkZkMrenZjZVhWYzEwNGNPbS9abTJzOHV4eEcvZytmZjFPbzdLUzNpYzN3WGZnUUQ3N3JtMlBPOUZ4NVA1Nm5WdEdOcWlmTkdEYi9GKzVxR1Y0Tm52RzZaMTVuNlhIYUc1bmZkVi9oS1hhVlV1RzhwOFZWN09tMmNBWG96enAzems5d2Z1V2lqYTRXa2srbGs2Q0M4Q3dQa2FHanpGZWR4bFh0S3JhM0xROUZoYVhaMGtqaG1LVk85bWxsOE9SNy9BRm5sMzlWZjA0NVlLUEpGQlZsbW0zMU9uY2l0TmFLb204SjdXZW8wdS84QVlxcmFjdldqRXRkbXg5UnNydkt4aXpwYTB3WE83aEFhQjBabk5Ebk84dGlCNWwwN1BwS05MTnhaemJRcXVWVEp3UkJiS1lFYTJwYlRoNFlDQzV6clhzMXRyMkhTZFI3K2hkR0lyZGpETlk1OE5SN1dlVzUwb2NsRkphMjlxTDllYVAzWkZWL3FWWGt2UDdscCtuVXViTTJ5MndIY1ZYM1FKdDVIdTNOQUxjcnc1eGJiaG9SWU8xMFdOZkc5dFR5dFdkektoZzFTcVprOUM4cmdPMDRQeWtZejNUV3ZzYnh4ZlJNNnVhZWVmTzYvbWFGNkRCVXV6cExtOVNoeDFYUFVzdHlLdzZNZ0J4QnNiMlBRYmFHM1d1dTYzSEk0dEs1ZmVScXN5MVVzUFJKRm0rOUc0Vy9CN3ZRcTdhVUwwMUxrL21XT3paV200bllsU2x3RUI0VUJ6bW13K0pzTEpwNVhzM2hka2ExdWE3VzlQL09zSzNsVm01T01GZXhUcWxCUVVwdTF6ZnFNRnA0NG16dW5mdTNrWkNHZ25WdVlYRnRPQld1TmVwS1Rpb3E2TTVZZW5HS201T3pQaG1CTWNXU01rY2Fjc2U5MGhBQmJrTmlMZGY1T1V2RU5YVFhyWFduZVFzTkZ0TlAxYlBYdU1NZUgwam1Qa0U4dVdQTG0rajRaelp1bHRkUXNuVnFwcU9WYTlTRlNvdE9TazlPaGhndzZqa2UyTnM4Mlp4QUgwZGhjOXRsTXFsYUt1NHJ4RWFWR1RTVW40R3BOUlVJSkJxWjlDUWZvcjZnMlBRcFU2Ny94WGlNbEZmNVB3UHI1Qm9peU4vZGNoYkxKdW1aWS93QllrV2E0RVhhZFJxVkhiMXJ0WlZvcjd6TlVhVms4ejFkdHhwNG5ndEJBOTBVdFpJWHRKdUdSWnNvNmlRQ0w5ZnVXVUsxYWF2R0MrTEVxVktEczVQd1BaOW5hQnM0cFRXVENVbHJmMFl5aHp3QzBGMXJEaVBTb1ZlczRaOHF0M21mWlVsTExtZHo0eExaZWhwNVcwODlYTTJWd2FkSXdXRE9iWHpXMEZ3ZVBCSVlpck9MbEdLdDNreXBVNHZLNU81c3liQjBySjRxU1NxbEU4alM4QnJHNVNHZ2s4NjJuZW5pc0ZqS2ppNXFLc2pMMGVLa290dTQ1SDIycWFrZFRHajBQY0UyZzd3aVRoZmFrZFZWVWRvUUJBUnVOL1UvYngrOG9DdWJlN1dWTkhVVWRMU3d4U3lWUmthTjQ1elFDemQyMUg3NTlDbEF4NEh0ek4zVzNEc1JwZTVxaVFFd3ZhL2VReld1U0E3OVU2SHI2dENRREJCQndjcXN4b0dWUGM4WnFacW8wa1VZY1d4M0FhY3puSDk2M1J4NkZMUkNkMFdyRHNlcklJcWliRklZWVk0V0I0bGhrTDJ5Q3h1QXdqTUNMQWNkUzRXVUVsZnBkcnNhcW8rN0tYRG9lNVRkMGJKWkNKcG1kRG0ySUF2MGFlUy9FeUM0VitOdUR0M0d3RjRBekUzczBrWHRZYWs2OWlyNitNY1o1S2F1K1BJc0tHRFVvWjZqc2pCSGprdXNibU1FamdSRTdYSVpMY3dPRjdnRTJGd1ZqUnhyYzFDcXJYNGsxc0hGUWM2VHZiZ2F1d2UySXJxTjlUTTBReVF2a1pPelcwWmo1M1RyM3BGKzBIcVZpVjVWbjhwbFdhQmxleW1pdE5WOXpRTWNYak16bmdQY2I4Y3pjdlZvVk5pTGtyaXUxT0tVZEhVMWRWUzB6ZDBJekdHU09lSGwwZ1k0TzZSWUc0U3dOZWgyOXJXVDAwRlpTUk03c1lYVTBrY3BMUy9LSE5hOEVYR3JtZ25vekRqclpZRnd4Qnp5eW1NalExNWxqTG1nM0FkbGRjQTlJdW9KSmhBY2Y1U1lOOWlzVVBFUEZQRmI5bDh6Zzc4SEVybnRmRUx4OExzOUZoWnFHeTZqNnRlTmw5UzZiVFUvZHpaS1BpMWxUQXg0Nm01WTVwUDRIVzg0WFM0Ym0rL3cva282TlowbTJ0N1RYam9hZTErSU9tdzlwWXplYitvWXlPTWZXUnNtekFEUTk5SEVUMWM3cVdGWEtySjd1aDBZQ00rMGJpMUZ4VDFlNWNQcnAxTnJDS0dXYThOWGh0TERBV0cyV1JyM0EzRm1sb1lMYUVuTURwWk1zSEhkOGpHZGFkT2VhRlZ0ODlmcVJlQzBqSU1PWlVVTkxGVnl1Y2MrWndEeUE1NGNNeGFTUzBnTnk2ZEo0OFk3S05QUzEvbWJaNHVyaXF2OEFVbms4YkxwcDh6QmhHTnRwOE1xOFNmQTB0bXFIT01Gd0doclRIVEZtcmVqZHVQZTZtNm02eUxUZnc3M3A5Q1owSlR4YnB4bjdQK1hTSzFmSGs3RWhSWUcramdoRU5GSFV6U0VPcUh1Y3htVU9zWEJ1WWNCbUlEZEJ6ZGRTb2hTakYydDhUR3ZqS21Jdkp6eTIzUjErbkhtM3ZGQnM3VHN4U290RXpkQ21qa0xDMXBZeDhza2dKQUlzTklTZE9zcUZTaXJ1eGxWeDllZEdFY3p1bSs5N3JmVTgyUXE0WFJWTmJUeFpHTStnaWFRQnpZMmh4Y2JkTG55WEo0a05iZmdzTVJValJ3N3FRWEJzMTFLZGFlSjdLdTlicSt0N1gxK1JFMm5MN3h2bGtlOXpBNk44c2pvM3RFalhQR1IyWnJUbGE0QWh1bCtwZWVvYlJxMXBxbFg5YUxlNUpYZWpzdUdsN1g2RmhWd2xPbkZ6cDZOY1czK1g1Rnd3NkdlUnhqcWFTblpDV1hEbVNabkIxd01wYmtGdENUbUIvVlYvMkZLcFR0S0Z1anQ5Q3BsVm5DVjR6YjhmcVJORlVNaXcrR2QwWW1ra2sraXVHRE1aNW5DQzU4RUI3QjBuUWNTdFVjSmg0UXB3Y1ZmVGhmVzEyMzV2bDVHeVZldEtjMm0rUGhmOFJreHFvaXBSRlN1Z0V6WkN5T2FTNGE4YjU0aURnTGE4NTE3QWl3NExHbkRDVTZxdzJYMW1yNnErN1hWODlPWGdaT1dJcVFkYStpMDMvSkdiYVI0Yk5CRzNRTURiRHF1NEFmeXF1MnRVZnBOTmNyUHhhK3gxYlBoL1FtK2YyL2t0aTlDVTRRQkFmbjNiekQ5eFh6c3R6Uy9lTjhrblA5NUk4eTlIaEo1Nk1YK2FIbnNYREpWWmZPU2ZHekxuaGVlZTFvTi9DYURZSHk2MlBtWG5NUnM5WVRGeWxUWHFUVjdjcExldTUzdXZqeUw3RFkxNG5EcFQ5cUx0M3A4ZklodVdQRnM4OGRLMDgySnVkMzc3K0hvYVA0MWM3TnBXaTV2aVZlMGF0NUtDNEZhMkp3ZnV1c2lpSXV3SGVTZFdSbXBCN0NiTis4dXZGVmV5cE9YSGdjdUVwZHBWUzRIYzlvcXJkVXM4dlN5SjdoNVF3Mi9GZWZveHpWSXg2b3Zhc3NzRytoK2J3RjZnOHlkeTVLcWJKaDdIZEwzdmYvRVdqOEdoZWZ4OHIxbjBzWCtDamFpaWpjckdCdmlxalZBRXhUVzUzUTE3V2hwYWVxNGFDT3ZYcVZocytzcFU4bkZIRGo2TFU4L0JsTXBLcDhUMnl4dUxIdE4ydUdoQi93Q2RDN3BSVWxhVzQ0SVRjSGRienBtelhLa0RhT3NaYm8zekJwNVhNNlBLMzBCVlZmWjF0YWIrQmEwTm9KNlZQRTZYQk0xN1E5amc1cmhkcmdRUVFlQkJIRUtyYWFkbVdTYWF1aUgyenhqdVNqbG1CNTlza2Y3NzlHK2pqNWx1dzFMdGFpaWFzUlU3T201SDU3MVBXU2ZPU2Z6WHBkeDV6VnN2M0tEcy93QnpVVkQxc0RvMzlyNUJ2VC9FMTZyY0hYN1NyUHI5TkN5eGxISlNoMEs3c0xXYm12cG45QmtERC9xZ3grOTRQbVhWaTRacU1sMCtXcHk0U1dXdEUvUWk4MmVoQ0FGQVVRdmZOVXZmREFKb1lXbW5hM09HdEdtVnh1ZVBGdzhsbFpXVUthVTVXYjFLMTNuVWJqRzZXbTgwVFZPWkUyamwwa2lxWXlHa2duSzlyamJ0MU4vdmhiY3FjblVqdWNXYWN6VVZUbHZVa2JsV3lTT1NURFdkN05JMXpENE1icmwvbUdXMzNYZGF3aTR5aXF6NExYdk5rbEtNblFYRjZkeHIxWWF4bUlzYllOYVlXZ2RRRHlBc290dDBtK3BqSkpLcWwwTjdCTVRCZkN6NVJEdFdqYzdtMTlMWk0xdng3RnFyVTlKUHMvamMzVWFtcVhhZkN4cDdPUjFMbXpiaW9qamFhaDdjcm1CeGMrMTlEMGFEaDJGWlYzVFRqbmkzb2lLQ20xTEswdFdSRk5JenVlaUFGaUs4TmZyZk02OGVvNnRMQzNZdDBrODg3Kzc5eldyWklmOEFZazhCeHlHZ2RXc3FidG5NejVHZ3RONVJhN1FIVzZUY2krblA4cTAxcU1xeWc0YnJMNEc2bFVqU2NsTGZjaEJoZFpMU1BmM0tYR1Y0cSs2Qkl3UEdseGxaeHRZdXNPUE84aTNkcFNqVVN6YnRMV01GQ2NvWHR2MXViTkk2UEZxc0J4RjVLQ3ppTEhKS3lTMXdQTHI1SGRxeGtwWWVucHdsNVdNNDJyVC9BUFh6UG5adXRsZGlsSkJPTFRVN0pJSEc5OHdheVF0UGJ6U05lblE5S2l0Q0tvU2xIYzdNbW5KdW9sTGVqWTVJL3dDMVZYN28vd0RzY3NjZi9iaitjQ2NON1VqcWFxenRDQUlDTnh2Nm43ZVAzbEFjL3dDVmF0amd4VEJwcFhoa2JKSm5PY2VEUjlEcXBSQnJZdmliTVp4V2diUlhraG81RFBOVWhwREJaMGJ3d09OcjMzUUZ1bk1PaHBRRUJzYlU0Yjhrc3A4U2FkMU5XekJrZ0RnMko3WTJFT01qZThPdHUyNTBzRGFYdklXNHhVOUhOVk14UEM2R3BscTZKa01ja0xubk5hVmtrYjkwMTV0ZTRhOGFhYzBhZEpBdmV6WEtmaHphSm0rbUVNc01ZamtnYzF3ZTE4YlEwaHJiYzdVYVc4OWlvWkpMU1NibWQ1Y05Ibk8wbnBEdGZTT0NvNmo3R3ZMTnhkMFhjUDYxQ09YZ3JNOGtmM1JNeGtZNE9hNGtmcWhwQkpQVncwN1ZqSjl2VmpHSE5QdVYvd0FzU2wyRktUbnlhN3puUEtIUTFGSlgxRkpTaTBlTU5ZM3NiSnZBSnJBZFljNHU3SmllaFg2S0o3eWM1WDhOaXBjTW9hVUhMREhVd3g1cjJJYTJONGM2L1h4ZGZyUkVzaTlvMjRlM0NjUUZGV3kxUkxZQzhTU3VseUFUakxhNEZya24wQlF0NEd5OU0ybnhTa0dJeVNTaDhESFlkTTkvMGJDNk1ab3kwYUIvT3NEKzcwa1dsaEhXc2IrbyszWjduTEVrazBCemZiVVJ3WXZSVmN6c3NPVjJaMlZ6dWRFMlcyalFUMzBzZm9XRVlydE16NWZWZlF0S2RTYzhCS2pCTnZPdHl2cGJwMVJvTTIwaWpiaXIyUE85bGxMb0JsZHp4dVk0V3ZCdFlXeVhzZGRGRXFpZE5XZk5lWnRoczZwNlJGU2k3Skp2bHV1MTM4RFpwdHNLT0Q1T2phOHZpaGpNY2pneC93QkU3ZE5ZeHhCYmNqdnhjWDc1Ym5LRG00M1YrODR2UXNTNmJxT0wzN3JPL2h2c2ZWSHRCaDFMTFdUeDFNc3MwelhQQmMyUXQvWGMyTmh5OWY0WlFzRnVzNWNlYTBObFNoWG5rL290V1hCTlh0eGZWLzhBdzFkbDZqQzZCNW5peENad0xlZEJaeGE5eEE1eFlHQzdoYmpvZXNxTDluQzBwWFMzYnZMN0cydkN2aktpYW81WlBlMG1sOGI2ZkV3NGhqdEJXWVhOVFBrZkRLWDFFb2hBT1l5U1NTeXRGOHBhNXBNZ054NlFRcHFUaWxHcGZkWjhPSEFqRFlURXdyeXBLTys4VzJuYXowYnYzYW96MUdQME9JeFJPcUtxb282aU51VjdXR1JvY2RNMWkwRnJ4Y1hCR3V1dlVwazA5WVQwNzE1cDdqQ25TclllVGpPam03MDM0TkdIQzhkcEthTEVHUnp5dmU5b2pnTXU4YytRTmdGam1jM1FieVIraHR3V3FjMHFUZWErL2l1NzZIVEhEVnFtS3BxVlBLbGE5bFpKWHY4QVhuZmdZdVR6R0JTeFNRMURIbWxtY1MyUnJYUHlPeXRqZTF6V0F1RFRsQkRnTEFnM3RvdEVLOUNyRHNKeVNhVzV1MTArVDU5TjVPMWFGU0dLZGFucmV6MDRNc1F4U2pwNTRKb3pMSkhkN0h2eVBPNkxtakk0dHlna2NXNWdEYk4xWFduQ1VzSGg2ampDYXpOY1d0MTkxOTErbTkyT1N2UEUxb1hsSFJkRDJMRmFPbmZWeXdtWjg4c1JlSEdLWEs4dDN6bXRhY3ZmWHZ4NDNZQXQwYTFPTk9TN1ZTMWUrUzB2YXlYUmVDMXZ1TlRwMUp5ajZsdE9DNWNYMU5MR0t0cG9xV0tsdTgwMjVjR2xybVpuVXhpY0dmU0FkOEdFWDRhcm54V09wUXhkSnVTYXZLOXRiWFRTZW5LOXpkaDhMT1ZHZW1ydGI0YWtwVTQ3aDg3bzZsKyt1SE12SHVaYnRjMTJacGUzSmZtdUY5T29jVnZsRERla1JyT2NjMXRQV1Z2elUweGRkVW5UVVhhL0puczB3cUt4am1HN1NXV05pT2EwQngwT282ZUtwSzBsaU5vTExxcnJ5MVpaMDA2T0VlYlIyZm1YVmVvS0VJQWdPVWN0R0gya2dxUU8rYVluSHRhY3pmd2M3MEszMlpQU1VQaVZPMG9icEZWMkN4TVU5ZEZJNTJWbk9hOC9zbGgvcUcraGRlTXBkcFNhdHJ3T1hCMU1sVlBnUldMVjdxaWFTZDNHUjVmNUFUb1BNTER6TGZUZ29RVVZ3Tk5XYm5OeU9xY2oyRDd1QjlXNGM2VTVXL1pzSkg0dXY2b1ZSdEdybW1vTGg4eTIyZlN5d3pQaVMvS2hVNU1PbEY5WGxqQjUzdEx2NFFWb3dNYjEwYnNiSzFGbkNTdlFubno5R2JLMHU2bzZlUHBiRXkvbExRWGZpU3ZNVjVacXNuMVBUVVk1YWFYUTM2dWxaS3gwY2pXdlk0V2Mxd3VDUEl0Y1pPTHVqTnBOV1p6VGFYa3Q0eVVidTNjdlA0TmVmYzcwcTFvYlI0VlBFcksyejF2cCtCekdTTXRKYTRFT0JJSU9oQkJzUVIwRUZXcWQxZEZVMDA3TTZmeU00cTg3NmtjYnNhQkt3ZURjMmVCMkVscHQxMzYxVTdUcHBXbXU0dGRuVkcwNE0wT1dER2Q1T3lrYWViRU16L3RIalFlWnY4NVczWnRLMFhOOFRYdEdyZVNndUJWdGp6QUt1SjlROE1pWWQ0U1FUY3MxWUxBSDlhM21CWFhpYy9adFFXck9YQzVPMFRtOUVkQTVRdHBLS3Fvbnh4enRkS0hNZXh1VjR1UTRCMnBiNEpjcTNCNGVyVHFweVdoWTR1dFNuU2FUMU9VUnlGcERtNk9hUTRIcUlOeCtJVncwbXJNcDR1elRQMHpSVklsalpLM3ZYdGE4ZVJ3Qkh2WGxwUnl5YWZBOVJGNWttak1zU1R3b0RrT0k3UnpUczNieTBORHMxbU55WElCQXZZOXF2S2VIaEIzWG1VMVN0T2FzL0kzUG5qVWRPNko2ekdDVGJ0dXNQUktmWHhNdlNxblR3Sk9oeFBFcDJieU5qSE5KY0ErekFScWJnWm5YRmxwblR3OEhhVE5zS21JbXJ4WDU0bXc2YkZ0Zm9JOWVPa1d2bDUrcXh0aGZlZm45ak8rSjVMeSs1cFV1SllrOTcyc2dqelJtenZvMnR5dTQydVhBRTlPblFRZWtMT1ZQRHBKdVQxNm1NWjEyMmtscDBNa2o4WDVwRlBHTXJzNHNJaHpzcGJyOUpybzRyRkxDKzgvUDdHVjhSeVhsOXo0WlVZd1FMVTBWcjNBTEloWWpTOWkvczRvNDRYM241L1lsUEVjbCtmRXh2cU1hTHJPZ1k2OXlNeklYQWROcmgyZzhxbkxoTGFQNWkrSTRyNUdsTFJZeWFodFh1YlNNYmthQTZJTXkySXRrejhPY2Z3NmxtcDRWUWNMNmZIN0VaYTJiTll6NzdHK2MwVXNUZE1wSVpFM1J3NkhiejNMQzJGOTUrZjJNNzErWDU0Z1ZPT3RMZisyakxyV3psa1JjYkMxM09FbW1ua1RMaEgvay9QN0VYcjh2enhOemswd0NxcHBwNUtpTElIc0ZqbVlibk1TZTljYmNWaGpLMU9jWXFEdVo0ZW5LTW01STZFcTg2Z2dDQWpjYitwKzNqOTVRR3pWMEVVdHQ1RkcrMTdaMk5kYS9HMXhwd0hvUUdTbnAyUmpLeHJXTjZtZ05Ib0NBd0hDb0RHWWR6RnVpYm1QSTNJVDFsdHJFNklESlEwRVVEZDNER3lObmdzYUdOOURRZ01GUmdsTkkvZXZwNFhTRDlkMGJITzlZaTZBM0pZV3VGbk5EaDFFQWo4VmpLTVpLMGxjeWpLVVhlTHNlUXdOWUxOYTFvNmdBUGNrWVJpclJWaEtjcHU4bmMrSnFPTjdtU1BZMXo0eVRHNHRCTEM0WlNXazk2U0RiUlpHSjdWVWtjb3l5TVk4QTNBYzBPQVBYWWpqcWdNRE1JcHdITkVFSURyQndFYkFIV054Y1cxMTFRR1NlZ2llR3RmRkc0TjcwT1kwaHZSb0NOT0hRZ0kvSEt0Z2twNHN3em1kcERlbXdEamZzV3QxWUthaGZWOERZcVUzQnp0b3VKTXJZYXlzY29XQm1ycENHQzhzUjNqQjB1c0NITjg3U2Jkb0MxVm9abzZGanN2RkxEMTFtM1BSL2Y0TTRjQ3VBOW9lb1FFSnVFSUJRRmpvc2NxSE5BYkR2TW9BTGhtdnc0bTNTVlZWY0ZRaks4cFd2M0hMT2pUVDFkalliaWxXU0IzTngwMXpBRHlub0MxdkRZVksvYWZJdzdLbDd4UEJWeHpCUUFnQ2tCUUN5N0lVT3BuSTA3MXYvQUpIK25wVi9zYkRhdXMrNWZYN2VKVTdUcjZLa3U5L1F0SzlBVTRRQkFWUGxRdy9mWWZJUU9kRVd5ajdwczcrRnpsMllHZVdzdXVoeTR5R2FrK2h3cGVnUFBteGgxRTZlV09CbmZTT0RCMlpqYS9rSEh6TENjMUNMaytCblRnNXlVVnhQMGpoOUkyR0prTEJackdoamZJMFdDOHhPVGxKeWZFOUxHS2lra1VIbHBxYlFRUmRMcFMvelJzSS85Z1Zqc3lQcnlsMC9Qa2NHMHBXZ2wxT1ZVVlB2SkdSZUc5clBYY0cvMVZ2T1dXTGZJcWFjYzBrajlBYllZbTZrb3BabzdCN0EwTXVMaTduTmFOUE92T1llbXF0VlJaNkd2VTdPbTVJcG1HY3JUYkFWRk82L2hSRUVIN3J5TGVrcnVuc3gzOVNYaWNVTnBSdDY2OERicStWaW1EVHU0Wm5QNkE3SXh0KzBoeFBvQ3dqczJwZlZvemx0R25iUk01UlhWVHBaSHpQdG1rZTU3cmFDNzNGeHNPcTVWeENLakZSWEFwNXljcE9UNG5ST1N5bjdtZ3FjU2xGb3d6SzM5b011NTl1dTdzclIyZ3FzeDh1MG5HbEhlV2VCajJjSlZKSE82K3JkTkkrWityM3VMM2VWeHY2T2hXY0lLRVZGY0N0cVRjNU9UNG16VFlIVXlORDQ2ZVo3RHdjMk41QjF0b1FOZUN3bFdweGRuSkdVYUZTU3Vvc3lIWnlzOFZuOWsvOEFKUjZSUzk1ZUpQbzFYM1dSaEZ0RnVOTmp2WEp0V2IzRG9EMHNCaVArbTR0Yi9DR3J6dU5obHJTOFQwT0VubW94WlpseW5TZU9RSEE5NHZSMktFOTNpQXMwai84QTQybDBKdlZPRmdiRjE4K2dQV2VDNUYvZmwvMSt4MC83TWUvN2tqVDRGSElIaDFQVTB1VmhlSjVKYnNhV2tXdUw5cFBtSzFPdEtOclNVdGR5UnRWR0x2bzQ5V3pXd2F1a3hHV09tcUpnSTQyNWlHM2E2cExTUURmUytnMTRkT2wrOXlxd2pRaTV3V3I4akduS1ZacU1ub3ZNaU1JRk82RnhraHEzelhkbGRFSGxuRG1qUTJ1RDJMZFV6cVdqaWwxTUlLR1hWTy9RejRneVVERDJWYkoza3RtelJ0SjN6bTVoa0hHOXdMSFhXd1dNSEgrbzZkbHUxNEdVbEwxRk8vSHZNMkNnTnJzc0lucDQ5eEk1OFZRNXdmTHpIam10Sk45Y3ArNDVZMWRhVjVXYnV0VndNNmY5ejFicFczTWpNQXc5c2xPeDdxQ3JuSnpmU3h6RnJIV2NSWUMrbHJXOG9XeXROeG0wcHBkR2pHbkc4VTNGdjRrMXRKaEU1ckpYejAxVlVRRU5FTzVrc0dBTkZ3UU5iMy9IWFcrbWlqVWgyYVVaSlBqZEcycENXZHRwdGNMR3JQVEdvcGFjMGNWUytramtrRlJUaVMwMmM1U0xtL09GaWJkVitqb3lVc2s1ZG8xbWFWbmJRaHJORlpVN2NWeEp6WUI5TXlwbGhaQlV3Vkc3QkxKbmwxMkFqVVhPaDV3OUswWXBUY0ZKdE5kRFpRY1ZKcEpwOVMvcmdPb0lBZ0kzRy9xZnQ0L2VVQkpJQWdDQUlBZ0NBSUFnQ0EwOFF4T0tFWGtlQWVodkZ4OGpScXRGYkUwcUt2Ti9md045SEQxS3o5UmZZcWVLN1dTUHUySWJ0dmhHeGVmNk4vRlV1STJyT2VsUFJjK1A4RnpoOWx3anJVMWZMaC9KRDRTNG1xcHlTU1RNQ1NkU2VZL3A2VnAyYTI4VW0rdnlOdTBrbGhtbDArWjFCZW5QTkJBY3U1UXRpSEJ6cXlsYmRwdTZXSm8xQjRsN1IwZzhTUE9PemtyVWY4b25wTmw3VFRTbzFuM1A2UDZNNXdDdVk5QWVvQWdDQTJzTnFKV1BBaHVYdTVvYUJtTHI4Qmw2U3RkU2pHcXNzbGN3cUtEamVlNUY2cDZLb2lGcW45SWRRMnpRQVBLM3ZqMXFreHRGVWFtUlJ0OVNyVmFsVjFwYmpLdVFrSUFnQ0Frc0d3aDA3cjZpTWNYZGZZT3MrNWQyQndFOFRLNzBqeGYwWDVvY21LeGNhS3QvbHkrNWVZWWcxb2EwV2FCWURxQzlkQ0VZUlVZcXlSNTZVbkp0dmVmYXlNUWdDQXcxbE9KSTN4TzcxN1N3K1J3SVB2VXhrNHRORVNWMVk0MS8wdXJ1dUQxM2ZBcno5Um85U21lenFuTkZsMkIyRG1wYWsxRlJ1emxhUkdHdUx1YzdRazNBdFp0eDk1Y3VMeHNha01zTDlUcHdtRGRLZWFSMFpWaFlsQjVSOWxhcXVsaU1PN3lSc0k1enkwNW51MTBzZExOYXJEQlltblJpODE3czRNWmg1MW1zdkFnOW0rVHFyaHFvWnBkMXUyUEQzV2VTZWJxTERMMWdMb3I0K25LbTR4dmRtaWhnWndxS1VyYUY5Mnp3SjFiVEduYklJem1hNjVCSU9YV3hzZE5iYTlpcnNOV1ZLZVpxNVlZaWs2c010N0hMYXJrenIySG10amtIVzJRRCtjTlZ2SGFGRjc3b3FaYlBxcmRZd3hjbk9JazJNTFc5cGtqdCtCSldUeDlCY2ZJeFdBclBnV2JBT1NxeEQ2dVVPQStxanVBZkxJYkczWUFQS3VTdHRLK2xOZkZuWFMyY2xyTmxqMjV3T2VlbFpSMGpZMnN1TXdKeUFNWjNqUUFEcGV4KzZ1WEMxb1FxT2RTOXpweE5LVTZlU0J6L0FQNlgxLzhBayswUHdxeS9VYVBVcnYwNnIwT3g0WlJOZ2hqZ1ozc2JHc0gzUmE2cEp6YzVPVDRsekNLakZSUnNyRXlPUDR6eWExYjZpWjhXNjNicEh2YmQ1QkRYT0xnTFplaTl2TXJxbHRDa29KU3ZleFVWY0JVbE50V0xueWM0RlVVVU1rTStUV1RPeks3TnhhR3VIQVc3MGVsY09NclFxeVVvOGp0d2xHVktEakl0cTR6cVBISUQ4OUYycTlJVWpRem9SWXMySDRyU0dqanBxZ3poMGNycFFZZ3ppUzYycmoxT1hMT25WVlZ6aGJWVzFPaU1xZlpxTXI2UGdaSkszRDNDejU4UmUzcGE1N1NEWTNzUmRRbzExdVVTYjBudmNqTE50TFJUV0VrTXNBaGNPNTN3WmM3V0Q5VjE5T092VHg4cE9Lb1ZZYm1uZmZjeWRXbkxlclczV01OVnRQRkJTaW5vSktoanQ2WkhPZTJPNWFXa0VhWEhIS2VIUXBqaDVUcVpxcVc3cUhWVVlaYWJlODJhYmFxamNhU2VvTlM2b3AyRUVnTUxYdWUyenlibTUvQllTdzlSWjR3dFptU3F3ZVdVcjNRK2ROREpKQlVUR3FNMFVUbzlBeks3TzE3WEUzTnllZVU5SHFwT01iV2JNdTFwdHFUdmRFVkZWNGF4dVJsUmlqR2pnR3ZZMEMvWURaYlhHdTNkeGdhMDZTM09SdDRuam1Ienl1bE0rSk5McmMxajJ0WUxORGRCZlRoZnlrckNGS3RDTnJSTXBUcHlkN3N4L0srR0dLT0ZqcStGckM4L1J1YUhQTHkyN25rTzFObUMzVmV5bnM2K1p5ZVYzNS9RWjZWa2xkRmo1T24wVHA1WFU0cVh5aGd6UzFEZzUyVXU3MFdQN0k0OVFYTmkxVlVWbnRia2piUXlabmx2ZnFYOWNCMUJBRUJHNDM5VDl2SDd5Z0pKQUVBUUJBRUFRSHpKSUdpNUlBNnliRDBxRzBsZGtwTnV5SVd1MnBnajBhVEllcHZEMWpwNkxyZ3E3VG9RM1BNK24zM0hmUzJiWG52VmwxK3hYTVEycG5rMGJhTnY3T3J2V1A4QVFCVlZiYWxhZWtmVlhUZjRscFIyWlJockwxbjEzZUJDT0pKdVNTVHhKMUo4L1NxMXR0M1pZSkpLeVBFTWphd2YrMVUvMm8va2V1L1puK3BqOGZrViswLzlPL2g4enFLOVFlWkNBSUNxN1I3QjB0VVRJQVlaVHFYc3RaeDYzTTRIeWl4N1ZwblJqTFVzOEx0V3ZRV1gybzhuOUgrSW85ZHlaVmpEOUc2S1Vkaml4M3F1RnY0bG9lSGt0eGMwOXQ0ZVh0SnJ6L1BBMEJzQmlIK0FCMjd5TDRsajJNK1J2L1ZzSjczay9zUzJHOGwxUTRnenl4eHQ2bVhrZCtJQUg0ck9PSGx4WnkxZHUwby8yNHQ5K2krcGY5bmRsYWFpRjRtWGtJc1pYODU1OC9CbzdBQUYwUXB4aHVLTEZZK3RpWDY3MDVMZCtkNUxWZEt5VnVWN1E0ZTd5SG9VVnFOT3RITE5YUnowNnM2YnpRZGl1MW15blRFLzdyL2lINUtrcmJFNDBwZkIvZjhBZ3M2VzFPRlNQaDlpT2ZzN1VEOVFIeU9iL1VoY1V0bFlwZjRwOXpYMXNkUzJoUWZIeVo5UmJOMUI0aHJmSzRmK04xbERaR0psdlNYZS90Y2lXMGFDM052NGZjbDZIWmRqZFpIWno0STBiK1pWbGg5alU0YTFYbTZibC9KeFZ0cFRscEJXK1pQTVlBQUFBQU9BR2dDdUVrbFpGYTIyN3MrbEpBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBZU9RSDV6THRWNlVwbWhuUWdaMEI0WG9MSHlYSVRZK1M1Q2JIeVhJRDRKVWcrVUFRQkFkQzVHdjA5UjltMytZcXUyajdNZTg2c0p2WjFkVlIzQkFFQkc0MTlUOXZIN3lnSkpBRUI0NXdHcElBVU5wYnlVbTl4SDFHT1U3T01yZkkwNWo2RzNYTlBIWWVHK2ErR3Z5T21HQ3J6M1FmeDArWkYxTzJNWTd5Tjd1MDJhUDZuOEZ4Vk5zVWw3Q2I4djU4anNwN0pxUDJtbDUvbmlROVh0WFVQMGJsakhZTG4wdTAvQmNOVGF0YVhzMlhuOC9zZHRQWmRHUHRYZjUwKzVEVkZRK1EzZTV6aiswU2JlVHE4eTRLbFdWUjNtNzk1M3dwd3BxMEZidU1kbGdaaXlnQ3lBV1FHemcvOXFwL3RSL0k5V0d6UDlUSDQvSTROcC82ZC9ENW5VVjZnOHlFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUI0NUFmbTF6dFQ1VjZVcUdNeUVETWdzZVprQjRYSUR3dVFIeVNwQjRnQ0FJQWdPaGNqWDZlbyt6Yi9BREZWMjBmWmozblZoTjdPcnFxTzRJQWdNTlhTUnl0eVNzWTlsd2NyMmh6YmczQnNkTkNnTkg1dVVmaWxQN0tQOGtBK2JsSDRwVCt5ai9KQWVPMlpvanhwS2MvNk1md3FIRlBlakpTYTNNZk5taThVcHZZeC9Db3lSNURQTG14ODJhTHhTbjlqSDhLWlk4aG5selkrYk5GNHBUK3hqK0ZNc2VRenk1c2ZObWk4VXAvWXgvQ21XUElaNWMyUG16UmVLVS9zWS9oVExIa004dWJIelpvdkZLZjJNZndwbGp5R2VYTmo1czBYaWxQN0dQNFV5eDVEUExteDgyYUx4U245akg4S1pZOGhubHpaa3A4QXBZM0NSbE5BMTdUZHJteE1hNXB0YTRJRnhvVDZWS2lsd0RsSjcyU0treENBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQThjZ1B6bTdEYWk1LzdlZmovQUlNdndyMGZhUTk1ZUtLbHhseWZnUGsybzhYbjlqTDhLWjRjMTRvakxMay9BZkp0UjR2UDdHWDRVenc1cnhReXk1UHdQUGsybzhYbjlqTDhLWjRlOHZGRExMay9BZkpsUjR2UDdHWDRVenc5NWVLR1dYSitCNThtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4Qy9ja05KSXlhY3Zqa1lERzJ4ZXg3TDg0OE13RjF3WStVWEdObWpxd3FhYnVqcUtxenRDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJRC8vWlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2NyZWRpdGNhcmQuanBnXG4vLyBtb2R1bGUgaWQgPSA4ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==