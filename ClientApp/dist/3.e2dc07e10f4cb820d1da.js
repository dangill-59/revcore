exports.ids = [3];
exports.modules = {

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dates_initialize__ = __webpack_require__(1747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dates_initialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dates_initialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css__ = __webpack_require__(1733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dates_lib_css_datepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__ = __webpack_require__(1779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__generated_SubscriptionStatusModel__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__update__ = __webpack_require__(1640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_base_asyncLoader__ = __webpack_require__(16);
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












var Cardlogo = __webpack_require__(1806);
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

/***/ 1173:
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

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(90);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(90);

var GetIntrinsic = __webpack_require__(1173);

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

/***/ 1493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementContextTypes = exports.injectContextTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1494);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Provider = __webpack_require__(1587);

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

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(1780)();
}


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(1625);
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

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(1173);

var has = __webpack_require__(1230);

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

/***/ 1556:
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

/***/ 1587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providerContextTypes = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1494);

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

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(1674);

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

/***/ 1596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(1595);

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(1173);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(1230);

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

/***/ 1601:
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

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};


/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(1173);

var has = __webpack_require__(1230);
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

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ 1608:
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(543)();

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

/***/ 1625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(1626);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(1737);

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

/***/ 1626:
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

/***/ 1637:
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

/***/ 1638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(1513);
var bind = __webpack_require__(90);

var implementation = __webpack_require__(1595);
var getPolyfill = __webpack_require__(1596);
var polyfill = getPolyfill();
var shim = __webpack_require__(1639);

var boundFlat = bind.call(Function.call, polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ 1639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(1513);
var getPolyfill = __webpack_require__(1596);

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

/***/ 1640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_base_asyncLoader__ = __webpack_require__(16);
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

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(1230);
var toPrimitive = __webpack_require__(1680);
var keys = __webpack_require__(1625);
var inspect = __webpack_require__(1735);

var GetIntrinsic = __webpack_require__(1173);

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

var hasSymbols = __webpack_require__(543)();

var assertRecord = __webpack_require__(1600);
var $isNaN = __webpack_require__(1604);
var $isFinite = __webpack_require__(1603);
var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(1523);
var sign = __webpack_require__(1607);
var mod = __webpack_require__(1606);
var isPrimitive = __webpack_require__(1676);
var forEach = __webpack_require__(1602);
var every = __webpack_require__(1601);
var isSamePropertyDescriptor = __webpack_require__(1677);
var isPropertyDescriptor = __webpack_require__(1605);
var parseInteger = parseInt;
var callBind = __webpack_require__(1486);
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

var ES5 = __webpack_require__(1675);

var hasRegExpMatcher = __webpack_require__(1694);

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

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(1173);

var $Array = GetIntrinsic('%Array%');

var hasSymbols = __webpack_require__(543)();

var ES2015 = __webpack_require__(1672);
var assign = __webpack_require__(1523);
var callBind = __webpack_require__(1486);

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

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(1173);

var ES2016 = __webpack_require__(1673);
var assign = __webpack_require__(1523);
var forEach = __webpack_require__(1602);
var callBind = __webpack_require__(1486);

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

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(1173);

var $Object = GetIntrinsic('%Object%');
var $TypeError = GetIntrinsic('%TypeError%');
var $String = GetIntrinsic('%String%');
var $Number = GetIntrinsic('%Number%');

var assertRecord = __webpack_require__(1600);
var isPropertyDescriptor = __webpack_require__(1605);
var $isNaN = __webpack_require__(1604);
var $isFinite = __webpack_require__(1603);

var sign = __webpack_require__(1607);
var mod = __webpack_require__(1606);

var IsCallable = __webpack_require__(1556);
var toPrimitive = __webpack_require__(1679);

var has = __webpack_require__(1230);

var callBind = __webpack_require__(1486);
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

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var every = __webpack_require__(1601);

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

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(1608);
var isCallable = __webpack_require__(1556);
var isDate = __webpack_require__(1693);
var isSymbol = __webpack_require__(1611);

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

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(1608);

var isCallable = __webpack_require__(1556);

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

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1678);


/***/ }),

/***/ 1681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(1513);
var isSymbol = __webpack_require__(1611);

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

/***/ 1682:
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(90);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 1693:
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

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(1682);
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

/***/ 1733:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 1735:
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

var inspectCustom = __webpack_require__(1736).custom;
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

/***/ 1736:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50).inspect;


/***/ }),

/***/ 1737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(1626); // eslint-disable-line global-require
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

/***/ 1747:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__(1748);


/***/ }),

/***/ 1748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(1750));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ 1749:
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

/***/ 1750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__(1803));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(1751));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ 1751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__(1804));

var _DefaultTheme = _interopRequireDefault(__webpack_require__(1749));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ 1776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1494);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(1637);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(1493);

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

/***/ 1777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1494);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(1637);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(1493);

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

/***/ 1778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Elements = __webpack_require__(1493);

var _Provider = __webpack_require__(1587);

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

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdealBankElement = exports.IbanElement = exports.PaymentRequestButtonElement = exports.PostalCodeElement = exports.CardCVCElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = undefined;

var _Provider = __webpack_require__(1587);

var _Provider2 = _interopRequireDefault(_Provider);

var _inject = __webpack_require__(1778);

var _inject2 = _interopRequireDefault(_inject);

var _Elements = __webpack_require__(1493);

var _Elements2 = _interopRequireDefault(_Elements);

var _Element = __webpack_require__(1776);

var _Element2 = _interopRequireDefault(_Element);

var _PaymentRequestButtonElement = __webpack_require__(1777);

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

/***/ 1780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(1781);

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

/***/ 1781:
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

/***/ 1799:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPrototype = __webpack_require__(1638);

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _globalCache = __webpack_require__(1681);

var _globalCache2 = _interopRequireDefault(_globalCache);

var _constants = __webpack_require__(1800);

var _getClassName = __webpack_require__(1801);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _separateStyles2 = __webpack_require__(1802);

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

/***/ 1800:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
var MAX_SPECIFICITY = 20;

exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ 1801:
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

/***/ 1802:
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

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(1799).default;


/***/ }),

/***/ 1804:
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
  if (false) {
    performance.clearMarks(START_MARK);
    performance.mark(START_MARK);
  }

  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if (false) {
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

/***/ 1806:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9jb21wb25lbnRzL1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZsYXQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzZXJ0UmVjb3JkLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5mbGF0L3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYmlsbGluZy91cGRhdGUudHN4Iiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE3LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzIiwid2VicGFjazovLy8uL34vZ2xvYmFsLWNhY2hlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9saWIvY3NzL19kYXRlcGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1pbnNwZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWluc3BlY3QvdXRpbC5pbnNwZWN0LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGF0ZXMvbGliL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kYXRlcy9saWIvdGhlbWUvRGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGF0ZXMvbGliL3V0aWxzL3JlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRhdGVzL2xpYi91dGlscy9yZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvZGlzdC91dGlscy9zZXBhcmF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2NyZWRpdGNhcmQuanBnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2E7QUFFZDtBQUNIO0FBQ0s7QUFjUjtBQVNNO0FBQzBCO0FBUXlCO0FBQ2hEO0FBQ0k7QUFDYztBQUdwRCxJQUFNLFFBQVEsR0FBRyxtQkFBTyxDQUFDLElBQWtCLENBQUMsQ0FBQztBQUU3QyxJQUFNLGtCQUFrQixHQUFHLGtHQUFnQixFQUFxQixDQUFDO0FBRWpFLElBQU0sY0FBYyxHQUFHLGtHQUFnQixFQUFrQixD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Q0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7OztBQy9LQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxVQUFVO0FBQ2hELHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCLFVBQVU7QUFDbkMsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxFQUFFO0FBQzdCLCtCQUErQix5QkFBeUI7QUFDeEQ7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhLEVBQUU7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFELElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxNQUFNO0FBQ04sY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtB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Ozs7QUNyMkNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUMvREE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpQ0FBaUM7QUFDakMsa0NBQWtDOztBQUVsQzs7Ozs7Ozs7O0FDdEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdCQUFnQjtBQUNoQixFQUFFO0FBQ0Y7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsNkRBQTZELFVBQVU7QUFDdkU7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDalVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7O0FDbkJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1Q0E7O0FBRUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMxRkE7O0FBRUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7Ozs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxzQjs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBaUQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7OztBQ3JMQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWUsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLDBCOzs7Ozs7OztBQzlKQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZSw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qzs7Ozs7Ozs7QUMvSUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFROztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0QsY0FBYztBQUM3RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRyw4REFBOEQ7QUFDakU7O0FBRUEseUI7Ozs7Ozs7O0FDN01BOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDREQUE0RCw2QkFBNkI7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixvQzs7Ozs7OztBQ3pFdEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0EsMEM7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDZkE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLGVBQWU7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkdBLGtDQUFrQyxvd2UiLCJmaWxlIjoiMy5lMmRjMDdlMTBmNGNiODIwZDFkYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgJ3JlYWN0LWRhdGVzL2xpYi9jc3MvX2RhdGVwaWNrZXIuY3NzJztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29sLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBHcmlkLFxuICBJbWFnZSxcbiAgSW5wdXRHcm91cCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFBhbmVsLFxuICBSb3csXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQge1xuICBDYXJkQ1ZDRWxlbWVudCxcbiAgQ2FyZEV4cGlyeUVsZW1lbnQsXG4gIENhcmROdW1iZXJFbGVtZW50LFxuICBFbGVtZW50cyxcbiAgUG9zdGFsQ29kZUVsZW1lbnQsXG4gIFN0cmlwZVByb3ZpZGVyLFxuICBpbmplY3RTdHJpcGUsXG59IGZyb20gJ3JlYWN0LXN0cmlwZS1lbGVtZW50cyc7XG5pbXBvcnQgZW5zdXJlQmlsbGluZywgeyBJQmlsbGluZ1N0YXRlIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgQ2FyZEVkaXRNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9DYXJkRWRpdE1vZGVsJztcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGVzJztcbmltcG9ydCB7IElBc3luY1Jlc3VsdCB9IGZyb20gJ2Jhc2UvYXN5bmNTdGF0ZU1pZGRsZXdhcmUnO1xuaW1wb3J0IHsgSW52b2ljZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0ludm9pY2VNb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25EZXRhaWxzTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvU3Vic2NyaXB0aW9uRGV0YWlsc01vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1N1YnNjcmlwdGlvbk1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvblN0YXR1c01vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1N1YnNjcmlwdGlvblN0YXR1c01vZGVsJztcbmltcG9ydCBVcGRhdGVWaWV3IGZyb20gJy4vdXBkYXRlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5pbXBvcnQgZW5zdXJlV29ya3NwYWNlIGZyb20gJy4uL3dvcmtzcGFjZS9yZWR1Y2VyJztcblxuY29uc3QgQ2FyZGxvZ28gPSByZXF1aXJlKCcuL2NyZWRpdGNhcmQuanBnJyk7XG5cbmNvbnN0IFN1YnNjcmlwdGlvbkxvYWRlciA9IGNyZWF0ZUxvYWRlclZpZXc8U3Vic2NyaXB0aW9uTW9kZWw+KCk7XG5cbmNvbnN0IEludm9pY2VzTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxJbnZvaWNlTW9kZWxbXT4oKTtcblxuY29uc3QgQ2FyZHNWaWV3TG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxDYXJkRWRpdE1vZGVsPigpO1xuXG50eXBlIENvbm5lY3RlZFByb3BzID0gSUJpbGxpbmdTdGF0ZSAmIHt9O1xuXG5jb25zdCBfQ2FyZFZpZXcgPSAoeyBkaXNwYXRjaCwgc3RyaXBlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgPHNwYW4+Q2FyZCBudW1iZXI8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgPEltYWdlIHNyYz17Q2FyZGxvZ299IGFsdD0nY3JlZGl0IGNhcmRzJyBzdHlsZT17eyBoZWlnaHQ6IDI1LCBtYXJnaW5MZWZ0OiAyNSB9fSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnc29saWQgMXB4ICNjY2MnLCBwYWRkaW5nOiA1LCB3aWR0aDogMjgxLCBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wOiAxMCB9fVxuICAgID5cbiAgICAgIDxDYXJkTnVtYmVyRWxlbWVudCAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE1IH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5FeHBpcmF0aW9uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJywgcGFkZGluZzogNSwgd2lkdGg6IDE1MCB9fT5cbiAgICAgICAgICA8Q2FyZEV4cGlyeUVsZW1lbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luTGVmdDogMzAgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+U2VjdXJpdHkgY29kZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICdzb2xpZCAxcHggI2NjYycsIHBhZGRpbmc6IDUsIHdpZHRoOiAxMDAgfX0+XG4gICAgICAgICAgPENhcmRDVkNFbGVtZW50IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSB9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5aaXBjb2RlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJywgcGFkZGluZzogNSwgd2lkdGg6IDI4MSwgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgPFBvc3RhbENvZGVFbGVtZW50IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J3RleHQtY2VudGVyJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIHdpZHRoOiAyODEsXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDBweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCdXR0b24gYnNTdHlsZT0nc3VjY2VzcycgYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLnNhdmVDYXJkKHN0cmlwZSkpfT5cbiAgICAgICAgU3VibWl0IGNhcmQgaW5mb3JtYXRpb25cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtbXV0ZWQgdGV4dC1sZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICA8c21hbGw+XG4gICAgICAgICAgKiBSRVYgdXNlcyBcIlN0cmlwZVwiIGZvciBhbGwgY3JlZGl0IGNhcmQgcHJvY2Vzc2luZyBhbmQgc3RvcmFnZS4gWW91ciBjYXJkIGluZm9ybWF0aW9uIGlzXG4gICAgICAgICAgZGlyZWN0bHkgdHJhbnNmZXJyZWQgdG8gc3RyaXBlIGFuZCBpcyBuZXZlciBzZWVuIGJ5IG91ciBzZXJ2ZXJzLiBXZSBjaG9zZSBzdHJpcGUgYXMgaXQgaGFzXG4gICAgICAgICAgcHJvdmVuIHRvIGV4Y2VlZCBoaWdoZXN0IGxldmVscyBvZiBzZWN1cml0eSBzdGFuZGFyZHMgaW4gb25saW5lIGNyZWRpdCBjYXJkIHRyYW5zYWN0aW9ucy5cbiAgICAgICAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdHsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc2VjdXJpdHkvc3RyaXBlJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zZWN1cml0eS9zdHJpcGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDYXJkVmlldyA9IGluamVjdFN0cmlwZShfQ2FyZFZpZXcpO1xuXG50eXBlIFN0YXRlUHJvcHMgPSB7IGZvY3VzZWREYXRlaW5wdXQ/OiBhbnk7IGRlbGV0ZXBhbmVsT3Blbj86IGJvb2xlYW4gfTtcblxuY2xhc3MgQmlsbGluZ1ZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9LCBTdGF0ZVByb3BzPiB7XG4gIHN0YXRlOiBTdGF0ZVByb3BzID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuSW5pdEJpbGxpbmdWaWV3KCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgc3Vic2NyaXB0aW9uQXN5bmMsXG4gICAgICBjYXJkc09uRmlsZUFzeW5jLFxuICAgICAgZW50ZXJpbmdOZXdDYXJkLFxuICAgICAgc2hvd2luZ1VwZGF0ZVZpZXcsXG4gICAgICBuZXdSZXZTZWF0Q291bnQsXG4gICAgICBjb3Vwb24sXG4gICAgICBpbnZEYXRlUmFuZ2UsXG4gICAgICBpbnZvaWNlTGlzdEFzeW5jLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LWluZm8nO1xuICAgIGlmIChzdWJzY3JpcHRpb25Bc3luYyAmJiBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQpIHtcbiAgICAgIGlmIChTdWJzY3JpcHRpb25TdGF0dXNNb2RlbC50cmlhbGluZyA9PSBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzKVxuICAgICAgICBzdWJzY3JpcHRpb25NZXNzYWdlc3R5bGUgPSAndGV4dC13YXJuaW5nJztcbiAgICAgIGVsc2UgaWYgKFN1YnNjcmlwdGlvblN0YXR1c01vZGVsLnVuYXZhaWxhYmxlID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgWW91ciBzdWJzY3JpcHRpb24gc3RhdHVzIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZXsnICd9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoU3Vic2NyaXB0aW9uU3RhdHVzTW9kZWwuYWN0aXZlICE9IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpXG4gICAgICAgIHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LWRhbmdlcic7XG4gICAgfVxuXG4gICAgbGV0IHJldlBsYW46IFN1YnNjcmlwdGlvbkRldGFpbHNNb2RlbCA9IG51bGw7XG4gICAgaWYgKHN1YnNjcmlwdGlvbkFzeW5jICYmIHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCkge1xuICAgICAgcmV2UGxhbiA9IF8uZmluZChcbiAgICAgICAgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LmRldGFpbHMsXG4gICAgICAgIChkZXRhaWwpID0+ICdyZXZTZWF0cycgPT0gZGV0YWlsLmZvclByb2R1Y3QsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRSZXZTZWF0cyA9IG5ld1JldlNlYXRDb3VudCB8fCAocmV2UGxhbiAmJiByZXZQbGFuLnF1YW50aXR5KTtcblxuICAgIGNvbnN0IGludGVydmFsID1cbiAgICAgIChzdWJzY3JpcHRpb25Bc3luYyAmJlxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQgJiZcbiAgICAgICAgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LmRldGFpbHMgJiZcbiAgICAgICAgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LmRldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlsc1swXS5pbnRlcnZhbCkgfHxcbiAgICAgICdtb250aCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3Nob3dpbmdVcGRhdGVWaWV3ID8gKFxuICAgICAgICAgIDxVcGRhdGVWaWV3IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5JbmZvIHRleHQtY2VudGVyIGNvbnRhaW5lcic+XG4gICAgICAgICAgICB7c3Vic2NyaXB0aW9uQXN5bmMgJiYgKFxuICAgICAgICAgICAgICA8U3Vic2NyaXB0aW9uTG9hZGVyXG4gICAgICAgICAgICAgICAgYXN5bmNSZXN1bHQ9e3N1YnNjcmlwdGlvbkFzeW5jfVxuICAgICAgICAgICAgICAgIHByb21wdD0nbG9hZGluZyBzdWJzY3JpcHRpb24gZGV0YWlscydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz4gU3Vic2NyaXB0aW9uIGRldGFpbHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgIHsncGFzdF9kdWUnID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50cmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdWJzY3JpcHRpb25NZXNzYWdlc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgUkVWIHN1YnNjcmlwdGlvbiBpcyBpbmFjdGl2ZS57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY29udGFjdCBjdXN0b21lciBzdXBwb3J0IGF0IHRoaXMgbGluayA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9zY2FucmV2LmZyZXNoZGVzay5jb20vYS90aWNrZXRzL25ldycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9zY2FucmV2LmZyZXNoZGVzay5jb20vYS90aWNrZXRzL25ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgUkVWIHN1YnNjcmlwdGlvbiBpcyB7c3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1c30gYW5kIHBhaWQgdGlsbHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LmN1cnJlbnRQZXJpb2RFbmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCgtMSwgJ2RheScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdCgnbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7J3RyaWFsaW5nJyA9PSBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57c3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnRyaWFsRGF5c0xlZnR9IGRheShzKSBvZiBmcmVlIHRyaWFsIGxlZnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LmN1cnJlbnRQZXJpb2RFbmQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy88c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk5leHQgaW52b2ljZSBkYXRlIHttb21lbnQoc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LmN1cnJlbnRQZXJpb2RFbmQpLmZvcm1hdCgnbCcpfSA8L3NtYWxsPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBuZXh0IGludm9pY2UgaXMgZHVlIG9ueycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuY3VycmVudFBlcmlvZEVuZCkuZm9ybWF0KCdsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKntzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyAmJiA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbiBkZXRhaWxzOiA8aT4oJHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQubmV4dEludm9pY2VBbW91bnR9L3tpbnRlcnZhbH0pPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1NpemU9XCJzbWFsbFwiIGJzU3R5bGU9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2hvd1VwZGF0ZVZpZXcodHJ1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIHN1YnNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscy5tYXAoc3ViID0+IDxsaSBrZXk9e3N1Yi5wbGFuSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc3ViLmlzTWV0ZXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9e25ld1JldlNlYXRDb3VudCA/ICd0ZXh0LWRhbmdlcicgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7Y3VycmVudFJldlNlYXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXN1Yi51bml0ICYmICgnICcgKyBzdWIudW5pdCArIChjdXJyZW50UmV2U2VhdHMgPT0gMSA/ICcnIDogJ3MnKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17KDxUb29sdGlwIGlkPVwiYWRkc2VhdHRvb2x0aXBcIj5BZGQgbGljZW5zZWQgc2VhdHM8L1Rvb2x0aXA+KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTaXplPVwieHNcIiBic1N0eWxlPVwicHJpbWFyeVwiIGRpc2FibGVkPXtjdXJyZW50UmV2U2VhdHMgPj0gMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLmluY3JlYXNlUmV2U2VhdENvdW50KHRydWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUsIHdpZHRoOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXsoPFRvb2x0aXAgaWQ9XCJyZW1vdmVzZWF0dG9vbHRpcFwiPlJlZHVjZSBsaWNlbnNlZCBzZWF0czwvVG9vbHRpcD4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1NpemU9XCJ4c1wiIGJzU3R5bGU9XCJkYW5nZXJcIiBkaXNhYmxlZD17Y3VycmVudFJldlNlYXRzIDw9IDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuaW5jcmVhc2VSZXZTZWF0Q291bnQoZmFsc2UpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUsIHdpZHRoOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIW5ld1JldlNlYXRDb3VudCAmJiA8QnV0dG9uIGJzU2l6ZT1cInhzXCIgYnNTdHlsZT1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkudXBkYXRlUmV2U2VhdHMoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZSB1cGRhdGVkIHNlYXQgY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgdmFsaWRhdGlvblN0YXRlPVwic3VjY2Vzc1wiIHN0eWxlPXt7IG1heFdpZHRoOiA2MDAsIG1hcmdpbjonMTBweCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBic1NpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BZGRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBjb3Vwb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BZGRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2NvdXBvbiB8fCAnJ30gb25DaGFuZ2U9eyAoZTphbnkpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5zZXRDb3Vwb24oZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IShjb3Vwb24gJiYgY291cG9uLmxlbmd0aCA+PSA1KX0gYnNTdHlsZT1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5hcHBseUNvdXBvbigpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBseSB0byBteSBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD4qL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3Vic2NyaXB0aW9uTG9hZGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cIm1haW5JbmZvIGNvbnRhaW5lciB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbjogJzIwcHggYXV0bycsIHBhZGRpbmc6IDMwIH19PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVsZXRlcGFuZWxPcGVuOiAhdGhpcy5zdGF0ZS5kZWxldGVwYW5lbE9wZW4gfSl9IHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+SG93IGNhbiBJIGNhbmNlbCBteSBzdWJzY3JpcHRpb24/IDxpIHN0eWxlPXt7IG1hcmdpbmdMZWZ0OiAyMCB9fSBjbGFzc05hbWU9e2BmYSBmYS1jYXJldC0keyEhdGhpcy5zdGF0ZS5kZWxldGVwYW5lbE9wZW4gPyAndXAnIDogJ2Rvd24nfWB9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPFBhbmVsIGlkPVwiY29sbGFwc2libGUtcGFuZWwtZGVsZXRlXCIgZXhwYW5kZWQ9eyEhdGhpcy5zdGF0ZS5kZWxldGVwYW5lbE9wZW59IG9uVG9nZ2xlPXsoKSA9PiB7IH19PlxuICAgICAgICAgICAgICAgICAgICA8UGFuZWwuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGNhbmNlbCB5b3VyIHN1YnNjcmlwdGlvbiA8c3Ryb25nPmF0IGFueSB0aW1lPC9zdHJvbmc+LiBPbmNlIGNhbmNlbGxlZCwgeW91ciBjcmVkaXQgY2FyZCB3aWxsIHN0b3AgYmVpbmcgY2hhcmdlZCBhbmQgYWxsIHlvdXIgZmlsZXMgd2lsbCBiZSA8dT5zZWN1cmVseSBkZXN0cm95ZWQ8L3U+LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VGhpcyBwcm9jZXNzIGNhbm5vdCBiZSByZXZlcnNlZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW4gY2FzZSB5b3Ugd2FudCB0byByZXRyaWV2ZSB5b3VyIGZpbGVzLCBwbGVhc2UgY29udGFjdCBjdXN0b21lciBzZXJ2aWNlIDxiPkJFRk9SRTwvYj4geW91IGNhbmNlbCB5b3VyIHN1YnNjcmlwdGlvbi4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBhIG5vbWluYWwgaGFuZGxpbmcgZmVlIG9mICQ1MCAoKyBtZWRpYSBhbmQgc2hpcHBpbmcgY29zdHMpLCB3ZSB3aWxsIDx1PnNoaXAgeW91ciBkYXRhIHRvIHlvdTwvdT4uIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTaXplPVwic21hbGxcIiBic1N0eWxlPVwiZGFuZ2VyXCIgc3R5bGU9e3sgbWFyZ2luOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVXb3Jrc3BhY2UoKS5kZWxldGVXb3Jrc3BhY2UoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWwgbXkgc3Vic2NyaXB0aW9uIGFuZCBkZWxldGUgbXkgd29ya3NwYWNlLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj4qL31cblxuICAgICAgICB7Y2FyZHNPbkZpbGVBc3luYyAmJiAoXG4gICAgICAgICAgPENhcmRzVmlld0xvYWRlciBhc3luY1Jlc3VsdD17Y2FyZHNPbkZpbGVBc3luY30gcHJvbXB0PSdsb2FkaW5nIHBheW1lbnQgc291cmNlcyc+XG4gICAgICAgICAgICB7Y2FyZHNPbkZpbGVBc3luYy5yZXN1bHQgJiYgKFxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9J21haW5JbmZvJyBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBwYWRkaW5nOiAzMCB9fT5cbiAgICAgICAgICAgICAgICB7Y2FyZHNPbkZpbGVBc3luYy5yZXN1bHQuY3VycmVudENhcmRzICYmXG4gICAgICAgICAgICAgICAgICBjYXJkc09uRmlsZUFzeW5jLnJlc3VsdC5jdXJyZW50Q2FyZHMubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc21PZmZzZXQ9ezN9IHNtPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIG5vIHBheW1lbnQgbWV0aG9kcy4gUGxlYXNlIGVudGVyIG9uZSBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+PC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHshZW50ZXJpbmdOZXdDYXJkICYmXG4gICAgICAgICAgICAgICAgICBjYXJkc09uRmlsZUFzeW5jLnJlc3VsdC5jdXJyZW50Q2FyZHMgJiZcbiAgICAgICAgICAgICAgICAgIGNhcmRzT25GaWxlQXN5bmMucmVzdWx0LmN1cnJlbnRDYXJkcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknPkN1cnJlbnQgcGF5bWVudCBtZXRob2RzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScsIG1heFdpZHRoOiA2MDAsIG1hcmdpbjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcmRzT25GaWxlQXN5bmMucmVzdWx0LmN1cnJlbnRDYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggI2NjYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6IDQwLCBwYWRkaW5nVG9wOiAxMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQgZmEtMnggdGV4dC1wcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCcgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5pc0V4cGlyZWQgPyAndGV4dC1kYW5nZXInIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPiBFeHBpcnkgT246PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZC5leHBpcmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFjYXJkLmlzRGVmYXVsdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0nZGVmYXVsdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkubWFrZURlZmF1bHQoY2FyZC5pZCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBtYWtlIGRlZmF1bHQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPSdsaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAsIG1hcmdpbkxlZnQ6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLnJlbW92ZUNhcmQoY2FyZC5pZCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdhcm5pbmcnPiByZW1vdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZWZ0JyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA0NSwgcGFkZGluZ1RvcDogNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2NhcmQuYnJhbmR9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmlzRGVmYXVsdCAmJiA8c3Bhbj4oZGVmYXVsdCk8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1tdXRlZCcgc3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kaW5nIGluIHtjYXJkLmxhc3Q0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogNjAwLCBtYXJnaW46ICdhdXRvJywgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPSdzdWNjZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkuc2hvd0NhcmRGb3JtKHRydWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXIgYW5vdGhlciBjYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge2VudGVyaW5nTmV3Q2FyZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMzUgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxTdHJpcGVQcm92aWRlciBhcGlLZXk9e2NhcmRzT25GaWxlQXN5bmMucmVzdWx0LnN0cmlwZVB1YktleX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEVsZW1lbnRzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRWaWV3IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0VsZW1lbnRzPlxuICAgICAgICAgICAgICAgICAgICA8L1N0cmlwZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NhcmRzVmlld0xvYWRlcj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkluZm8gY29udGFpbmVyJyBzdHlsZT17eyBtYXJnaW46ICcyMHB4IGF1dG8nLCBwYWRkaW5nOiAzMCB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAge2ludm9pY2VMaXN0QXN5bmMgPyAoXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+TXkgaW52b2ljZXM8L2g0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJzU2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgYnNTdHlsZT0naW5mbydcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLnNob3dJbnZvaWNlcygpKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZJRVcgSU5WT0lDRVNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyo8RGF0ZVJhbmdlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU9e21vbWVudChpbnZEYXRlUmFuZ2Uuc3RhcnQpfSAvLyBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqIG9yIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVJZD1cImludl9zdGFydF9kYXRlX2lkXCIgLy8gUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17bW9tZW50KGludkRhdGVSYW5nZS5lbmQpfSAvLyBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqIG9yIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlSWQ9XCJpbnZfZW5kX2RhdGVfaWRcIiAvLyBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRhdGVzQ2hhbmdlPXsoeyBzdGFydERhdGUsIGVuZERhdGUgfSkgPT4gZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLnNob3dJbnZvaWNlcyh7IHN0YXJ0OiBzdGFydERhdGUsIGVuZDogZW5kRGF0ZSB9KSl9IC8vIFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkSW5wdXQ9e3RoaXMuc3RhdGUuZm9jdXNlZERhdGVpbnB1dH0gLy8gUHJvcFR5cGVzLm9uZU9mKFtTVEFSVF9EQVRFLCBFTkRfREFURV0pIG9yIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzQ2hhbmdlPXtmb2N1c2VkSW5wdXQgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWREYXRlaW5wdXQ6IGZvY3VzZWRJbnB1dCB9KX0gLy8gUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlPXtkYXkgPT4gKG1vbWVudCgpLmRpZmYoZGF5KSA8PSAwKX1cbiAgICAgICAgICAgICAgICAgICAgLz4qL31cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aW52b2ljZUxpc3RBc3luYyAmJiAoXG4gICAgICAgICAgICAgIDxJbnZvaWNlc0xvYWRlciBhc3luY1Jlc3VsdD17aW52b2ljZUxpc3RBc3luY30gcHJvbXB0PSdsb2FkaW5nIGludm9pY2VzJz5cbiAgICAgICAgICAgICAgICB7aW52b2ljZUxpc3RBc3luYy5yZXN1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJzEwcHggMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMzUpJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nTGVmdDogMTUgfX0+RGF0ZTwvdGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmdMZWZ0OiA1LCBwYWRkaW5nVG9wOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzI1JScgfX0+QW1vdW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZUxpc3RBc3luYy5yZXN1bHQubWFwKChpbnZvaWNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbnZvaWNlLm51bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmdMZWZ0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGludm9pY2UuZGF0ZSkuZm9ybWF0KCdMJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBwYWRkaW5nOiAnMTBweCAwcHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsndGV4dC1jZW50ZXIgJyArIGludm9pY2UuaW52b2ljZVBkZiA/ICcnIDogJ3RleHQtd2FybmluZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZS5pbnZvaWNlUGRmID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0naW52dG9vbHRpcCc+RG93bmxvYWQgcHJpbnRhYmxlIHBkZjwvVG9vbHRpcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ludm9pY2UuaW52b2ljZVBkZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtcGRmLW8nIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZS5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbnZvaWNlLm51bWJlcn0gLSBwZW5kaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntpbnZvaWNlLmRlc2NyaXB0aW9ufTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nTGVmdDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17aW52b2ljZS5wYWlkID8gJycgOiAndGV4dC1kYW5nZXInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW52b2ljZS50b3RhbC50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIWludm9pY2UuZW5kaW5nQmFsYW5jZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2UuZW5kaW5nQmFsYW5jZSA8IDAgPyAndGV4dC1zdWNjZXNzJyA6ICd0ZXh0LWRhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5iYWxhbmNlIDwvc3Bhbj4kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygtMSAqIGludm9pY2UuZW5kaW5nQmFsYW5jZSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JbnZvaWNlc0xvYWRlcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PENvbm5lY3RlZFByb3BzLCB7IGRpc3BhdGNoIH0sIHt9Pigoc3RhdGUpID0+IHtcbiAgcmV0dXJuIGVuc3VyZUJpbGxpbmcoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xufSkoQmlsbGluZ1ZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYmlsbGluZy9pbmRleC50c3giLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHNcblx0QXRvbWljcyxcblx0U2hhcmVkQXJyYXlCdWZmZXIsXG4qL1xuXG52YXIgdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG5cbnZhciBUaHJvd1R5cGVFcnJvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcblx0PyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7IH0oKSlcblx0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoKTsgfTtcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJCAlQXJyYXklJzogQXJyYXksXG5cdCckICVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCckICVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFycmF5UHJvdG90eXBlJSc6IEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyQgJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyQgJUFycmF5UHJvdG9fa2V5cyUnOiBBcnJheS5wcm90b3R5cGUua2V5cyxcblx0JyQgJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCckICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNGdW5jdGlvbiUnOiBhc3luY0Z1bmN0aW9uLFxuXHQnJCAlQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJCAlQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJCAlQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyQgJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyQgJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCckICVEYXRlJSc6IERhdGUsXG5cdCckICVEYXRlUHJvdG90eXBlJSc6IERhdGUucHJvdG90eXBlLFxuXHQnJCAlZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyQgJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCckICVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJCAlZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJUVycm9yJSc6IEVycm9yLFxuXHQnJCAlRXJyb3JQcm90b3R5cGUlJzogRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyQgJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCckICVFdmFsRXJyb3JQcm90b3R5cGUlJzogRXZhbEVycm9yLnByb3RvdHlwZSxcblx0JyQgJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyQgJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCckICVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCckICVGdW5jdGlvblByb3RvdHlwZSUnOiBGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCckICVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCckICVHZW5lcmF0b3JQcm90b3R5cGUlJzogZ2VuZXJhdG9yRnVuY3Rpb24gPyBnZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCckICVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJCAlSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJCAlSW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJCAlaXNOYU4lJzogaXNOYU4sXG5cdCckICVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCckICVKU09OJSc6IEpTT04sXG5cdCckICVKU09OUGFyc2UlJzogSlNPTi5wYXJzZSxcblx0JyQgJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyQgJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJCAlTWF0aCUnOiBNYXRoLFxuXHQnJCAlTnVtYmVyJSc6IE51bWJlcixcblx0JyQgJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJCAlT2JqZWN0JSc6IE9iamVjdCxcblx0JyQgJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJCAlT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyQgJU9ialByb3RvX3ZhbHVlT2YlJzogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLFxuXHQnJCAlcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJCAlcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCckICVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCckICVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJCAlUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyQgJVByb21pc2VfYWxsJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UuYWxsLFxuXHQnJCAlUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCckICVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJCAlUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJCAlUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJCAlUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJCAlUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyQgJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJCAlU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJCAlU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlU3RyaW5nJSc6IFN0cmluZyxcblx0JyQgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlU3RyaW5nUHJvdG90eXBlJSc6IFN0cmluZy5wcm90b3R5cGUsXG5cdCckICVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bnRheEVycm9yJSc6IFN5bnRheEVycm9yLFxuXHQnJCAlU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCckICVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCckICVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVR5cGVFcnJvciUnOiBUeXBlRXJyb3IsXG5cdCckICVUeXBlRXJyb3JQcm90b3R5cGUlJzogVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyQgJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCckICVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJCAlVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyQgJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyQgJVVSSUVycm9yUHJvdG90eXBlJSc6IFVSSUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyQgJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCckICVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQsXG5cdCckICVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBrZXkgPSAnJCAnICsgbmFtZTtcblx0aWYgKCEoa2V5IGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW2tleV0gPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cdHJldHVybiBJTlRSSU5TSUNTW2tleV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qc1xuLy8gbW9kdWxlIGlkID0gMTE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJEZ1bmN0aW9uID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24lJyk7XG52YXIgJGFwcGx5ID0gJEZ1bmN0aW9uLmFwcGx5O1xudmFyICRjYWxsID0gJEZ1bmN0aW9uLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJpbmQoKSB7XG5cdHJldHVybiBiaW5kLmFwcGx5KCRjYWxsLCBhcmd1bWVudHMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBmdW5jdGlvbiBhcHBseUJpbmQoKSB7XG5cdHJldHVybiBiaW5kLmFwcGx5KCRhcHBseSwgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9jYWxsQmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVsZW1lbnRDb250ZXh0VHlwZXMgPSBleHBvcnRzLmluamVjdENvbnRleHRUeXBlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Qcm92aWRlciA9IHJlcXVpcmUoJy4vUHJvdmlkZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgaW5qZWN0Q29udGV4dFR5cGVzID0gZXhwb3J0cy5pbmplY3RDb250ZXh0VHlwZXMgPSB7XG4gIGdldFJlZ2lzdGVyZWRFbGVtZW50czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbnZhciBlbGVtZW50Q29udGV4dFR5cGVzID0gZXhwb3J0cy5lbGVtZW50Q29udGV4dFR5cGVzID0ge1xuICBhZGRFbGVtZW50c0xvYWRMaXN0ZW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlZ2lzdGVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHVucmVnaXN0ZXJFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxufTtcblxudmFyIEVsZW1lbnRzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEVsZW1lbnRzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFbGVtZW50cyhwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50cyk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZVJlZ2lzdGVyRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpbXBsaWVkVG9rZW5UeXBlLCBpbXBsaWVkU291cmNlVHlwZSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZ2lzdGVyZWRFbGVtZW50czogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwcmV2U3RhdGUucmVnaXN0ZXJlZEVsZW1lbnRzKSwgW19leHRlbmRzKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgICB9LCBpbXBsaWVkVG9rZW5UeXBlID8geyBpbXBsaWVkVG9rZW5UeXBlOiBpbXBsaWVkVG9rZW5UeXBlIH0gOiB7fSwgaW1wbGllZFNvdXJjZVR5cGUgPyB7IGltcGxpZWRTb3VyY2VUeXBlOiBpbXBsaWVkU291cmNlVHlwZSB9IDoge30pXSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVVbnJlZ2lzdGVyRWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZ2lzdGVyZWRFbGVtZW50czogcHJldlN0YXRlLnJlZ2lzdGVyZWRFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgIT09IGVsO1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICByZWdpc3RlcmVkRWxlbWVudHM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBFbGVtZW50cy5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZEVsZW1lbnRzTG9hZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbGVtZW50c0xvYWRMaXN0ZW5lcihmbikge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGluc3RhbmNlIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmUuXG4gICAgICAgIGlmIChfdGhpczIuX2VsZW1lbnRzKSB7XG4gICAgICAgICAgZm4oX3RoaXMyLl9lbGVtZW50cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9wcm9wcyA9IF90aGlzMi5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nXSk7XG5cbiAgICAgICAgaWYgKF90aGlzMi5jb250ZXh0LnRhZyA9PT0gJ3N5bmMnKSB7XG4gICAgICAgICAgX3RoaXMyLl9lbGVtZW50cyA9IF90aGlzMi5jb250ZXh0LnN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgICAgICBmbihfdGhpczIuX2VsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuY29udGV4dC5hZGRTdHJpcGVMb2FkTGlzdGVuZXIoZnVuY3Rpb24gKHN0cmlwZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzMi5fZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgZm4oX3RoaXMyLl9lbGVtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpczIuX2VsZW1lbnRzID0gc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpO1xuICAgICAgICAgICAgICBmbihfdGhpczIuX2VsZW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyRWxlbWVudDogdGhpcy5oYW5kbGVSZWdpc3RlckVsZW1lbnQsXG4gICAgICB1bnJlZ2lzdGVyRWxlbWVudDogdGhpcy5oYW5kbGVVbnJlZ2lzdGVyRWxlbWVudCxcbiAgICAgIGdldFJlZ2lzdGVyZWRFbGVtZW50czogZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnN0YXRlLnJlZ2lzdGVyZWRFbGVtZW50cztcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIEVsZW1lbnRzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBFbGVtZW50cztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkVsZW1lbnRzLmNoaWxkQ29udGV4dFR5cGVzID0gX2V4dGVuZHMoe30sIGluamVjdENvbnRleHRUeXBlcywgZWxlbWVudENvbnRleHRUeXBlcyk7XG5FbGVtZW50cy5jb250ZXh0VHlwZXMgPSBfUHJvdmlkZXIucHJvdmlkZXJDb250ZXh0VHlwZXM7XG5FbGVtZW50cy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRWxlbWVudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvY29tcG9uZW50cy9FbGVtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL34vcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmosICd4JywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IG9iaiB9KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yICh2YXIgXyBpbiBvYmopIHsgLy8ganNjczppZ25vcmUgZGlzYWxsb3dVbnVzZWRWYXJpYWJsZXNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuXG52YXIgJGFzc2lnbiA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKS5hc3NpZ247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICgkYXNzaWduKSB7XG5cdFx0cmV0dXJuICRhc3NpZ24odGFyZ2V0LCBzb3VyY2UpO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoaGFzKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE1MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWZsZWN0QXBwbHkgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdCAhPT0gbnVsbCAmJiBSZWZsZWN0LmFwcGx5O1xudmFyIGJhZEFycmF5TGlrZTtcbnZhciBpc0NhbGxhYmxlTWFya2VyO1xuaWYgKHR5cGVvZiByZWZsZWN0QXBwbHkgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHR0cnkge1xuXHRcdGJhZEFycmF5TGlrZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2xlbmd0aCcsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBpc0NhbGxhYmxlTWFya2VyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlzQ2FsbGFibGVNYXJrZXIgPSB7fTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuXHRcdHJlZmxlY3RBcHBseShmdW5jdGlvbiAoKSB7IHRocm93IDQyOyB9LCBudWxsLCBiYWRBcnJheUxpa2UpO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0aWYgKF8gIT09IGlzQ2FsbGFibGVNYXJrZXIpIHtcblx0XHRcdHJlZmxlY3RBcHBseSA9IG51bGw7XG5cdFx0fVxuXHR9XG59IGVsc2Uge1xuXHRyZWZsZWN0QXBwbHkgPSBudWxsO1xufVxuXG52YXIgY29uc3RydWN0b3JSZWdleCA9IC9eXFxzKmNsYXNzXFxiLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRnVuY3Rpb24odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3QoZm5TdHIpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBub3QgYSBmdW5jdGlvblxuXHR9XG59O1xuXG52YXIgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvblRvU3RyKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgb2JqZWN0Q2xhc3MgPSAnW29iamVjdCBPYmplY3RdJztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgZGRhQ2xhc3MgPSAnW29iamVjdCBIVE1MQWxsQ29sbGVjdGlvbl0nOyAvLyBJRSAxMVxudmFyIGRkYUNsYXNzMiA9ICdbb2JqZWN0IEhUTUwgZG9jdW1lbnQuYWxsIGNsYXNzXSc7XG52YXIgZGRhQ2xhc3MzID0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJzsgLy8gSUUgOS0xMFxudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIVN5bWJvbC50b1N0cmluZ1RhZzsgLy8gYmV0dGVyOiB1c2UgYGhhcy10b3N0cmluZ3RhZ2BcblxudmFyIGlzSUU2OCA9ICEoMCBpbiBbLF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNwYXJzZS1hcnJheXMsIGNvbW1hLXNwYWNpbmdcblxudmFyIGlzRERBID0gZnVuY3Rpb24gaXNEb2N1bWVudERvdEFsbCgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcpIHtcblx0Ly8gRmlyZWZveCAzIGNhbm9uaWNhbGl6ZXMgRERBIHRvIHVuZGVmaW5lZCB3aGVuIGl0J3Mgbm90IGFjY2Vzc2VkIGRpcmVjdGx5XG5cdHZhciBhbGwgPSBkb2N1bWVudC5hbGw7XG5cdGlmICh0b1N0ci5jYWxsKGFsbCkgPT09IHRvU3RyLmNhbGwoZG9jdW1lbnQuYWxsKSkge1xuXHRcdGlzRERBID0gZnVuY3Rpb24gaXNEb2N1bWVudERvdEFsbCh2YWx1ZSkge1xuXHRcdFx0LyogZ2xvYmFscyBkb2N1bWVudDogZmFsc2UgKi9cblx0XHRcdC8vIGluIElFIDYtOCwgdHlwZW9mIGRvY3VtZW50LmFsbCBpcyBcIm9iamVjdFwiIGFuZCBpdCdzIHRydXRoeVxuXHRcdFx0aWYgKChpc0lFNjggfHwgIXZhbHVlKSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0c3RyID09PSBkZGFDbGFzc1xuXHRcdFx0XHRcdFx0fHwgc3RyID09PSBkZGFDbGFzczJcblx0XHRcdFx0XHRcdHx8IHN0ciA9PT0gZGRhQ2xhc3MzIC8vIG9wZXJhIDEyLjE2XG5cdFx0XHRcdFx0XHR8fCBzdHIgPT09IG9iamVjdENsYXNzIC8vIElFIDYtOFxuXHRcdFx0XHRcdCkgJiYgdmFsdWUoJycpID09IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLyoqLyB9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmxlY3RBcHBseVxuXHQ/IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0XHRpZiAoaXNEREEodmFsdWUpKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dHJ5IHtcblx0XHRcdHJlZmxlY3RBcHBseSh2YWx1ZSwgbnVsbCwgYmFkQXJyYXlMaWtlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRpZiAoZSAhPT0gaXNDYWxsYWJsZU1hcmtlcikgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR9XG5cdFx0cmV0dXJuICFpc0VTNkNsYXNzRm4odmFsdWUpICYmIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTtcblx0fVxuXHQ6IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0XHRpZiAoaXNEREEodmFsdWUpKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR2YXIgc3RyQ2xhc3MgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0XHRpZiAoc3RyQ2xhc3MgIT09IGZuQ2xhc3MgJiYgc3RyQ2xhc3MgIT09IGdlbkNsYXNzICYmICEoL15cXFtvYmplY3QgSFRNTC8pLnRlc3Qoc3RyQ2xhc3MpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7XG5cdH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtY2FsbGFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wcm92aWRlckNvbnRleHRUeXBlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIFRPRE8oamV6KSAnc3luYycgYW5kICdhc3luYycgYXJlIGJhZCB0YWcgbmFtZXMuXG4vLyBUT0RPKGpleikgV2hhdCBpZiByZWR1eCBhbHNvIHVzZXMgdGhpcy5jb250ZXh0LnRhZz9cbnZhciBwcm92aWRlckNvbnRleHRUeXBlcyA9IGV4cG9ydHMucHJvdmlkZXJDb250ZXh0VHlwZXMgPSB7XG4gIHRhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RyaXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgYWRkU3RyaXBlTG9hZExpc3RlbmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbnZhciBnZXRPckNyZWF0ZVN0cmlwZSA9IGZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RyaXBlKGFwaUtleSwgb3B0aW9ucykge1xuICAvKipcbiAgICogTm90ZSB0aGF0IHRoaXMgaXMgbm90IG1lYW50IHRvIGJlIGEgZ2VuZXJpYyBtZW1vaXphdGlvbiBzb2x1dGlvbi5cbiAgICogVGhpcyBpcyBzcGVjaWZpY2FsbHkgYSBzb2x1dGlvbiBmb3IgYFN0cmlwZVByb3ZpZGVyYHMgYmVpbmcgaW5pdGlhbGl6ZWRcbiAgICogYW5kIGRlc3Ryb3llZCByZWd1bGFybHkgKHdpdGggdGhlIHNhbWUgc2V0IG9mIHByb3BzKSB3aGVuIHVzZXJzIG9ubHlcbiAgICogdXNlIGBTdHJpcGVQcm92aWRlcmAgZm9yIHRoZSBzdWJ0cmVlIHRoYXQgY29udGFpbnMgdGhlaXIgY2hlY2tvdXQgZm9ybS5cbiAgICovXG4gIHdpbmRvdy5TdHJpcGUuX19jYWNoZWRJbnN0YW5jZXMgPSB3aW5kb3cuU3RyaXBlLl9fY2FjaGVkSW5zdGFuY2VzIHx8IHt9O1xuICB2YXIgY2FjaGVLZXkgPSAna2V5PScgKyBhcGlLZXkgKyAnIG9wdGlvbnM9JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuXG4gIHZhciBzdHJpcGUgPSB3aW5kb3cuU3RyaXBlLl9fY2FjaGVkSW5zdGFuY2VzW2NhY2hlS2V5XSB8fCB3aW5kb3cuU3RyaXBlKGFwaUtleSwgb3B0aW9ucyk7XG4gIHdpbmRvdy5TdHJpcGUuX19jYWNoZWRJbnN0YW5jZXNbY2FjaGVLZXldID0gc3RyaXBlO1xuXG4gIHJldHVybiBzdHJpcGU7XG59O1xuXG52YXIgZW5zdXJlU3RyaXBlU2hhcGUgPSBmdW5jdGlvbiBlbnN1cmVTdHJpcGVTaGFwZShzdHJpcGUpIHtcbiAgaWYgKHN0cmlwZSAmJiBzdHJpcGUuZWxlbWVudHMgJiYgc3RyaXBlLmNyZWF0ZVNvdXJjZSAmJiBzdHJpcGUuY3JlYXRlVG9rZW4pIHtcbiAgICByZXR1cm4gc3RyaXBlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIGEgdmFsaWQgU3RyaXBlIG9iamVjdCB0byBTdHJpcGVQcm92aWRlci4gWW91IGNhbiBvYnRhaW4gYSBTdHJpcGUgb2JqZWN0IGJ5IGNhbGxpbmcgJ1N0cmlwZSguLi4pJyB3aXRoIHlvdXIgcHVibGlzaGFibGUga2V5LlwiKTtcbiAgfVxufTtcblxudmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAvLyBvbiB0aGUgb3RoZXIgaGFuZDogY2hpbGRDb250ZXh0VHlwZXMgaXMgKnJlcXVpcmVkKiB0byB1c2UgY29udGV4dC5cbiAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBpZiAoX3RoaXMucHJvcHMuYXBpS2V5ICYmIF90aGlzLnByb3BzLnN0cmlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHBhc3MgZWl0aGVyICdhcGlLZXknIG9yICdzdHJpcGUnIHRvIFN0cmlwZVByb3ZpZGVyLCBub3QgYm90aC5cIik7XG4gICAgfSBlbHNlIGlmIChfdGhpcy5wcm9wcy5hcGlLZXkpIHtcbiAgICAgIGlmICghd2luZG93LlN0cmlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgbG9hZCBTdHJpcGUuanMgKGh0dHBzOi8vanMuc3RyaXBlLmNvbS92My8pIG9uIHRoaXMgcGFnZSB0byB1c2UgcmVhY3Qtc3RyaXBlLWVsZW1lbnRzLiBJZiBTdHJpcGUuanMgaXNuJ3QgYXZhaWxhYmxlIHlldCAoaXQncyBsb2FkaW5nIGFzeW5jaHJvbm91c2x5LCBvciB5b3UncmUgdXNpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nKSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHJpcGUvcmVhY3Qtc3RyaXBlLWVsZW1lbnRzI2FkdmFuY2VkLWludGVncmF0aW9uc1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgX2FwaUtleSA9IF90aGlzJHByb3BzLmFwaUtleSxcbiAgICAgICAgICAgIF9jaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgX3N0cmlwZSA9IF90aGlzJHByb3BzLnN0cmlwZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMsIFsnYXBpS2V5JywgJ2NoaWxkcmVuJywgJ3N0cmlwZSddKTtcblxuICAgICAgICBfdGhpcy5fbWV0YSA9IHtcbiAgICAgICAgICB0YWc6ICdzeW5jJyxcbiAgICAgICAgICBzdHJpcGU6IGdldE9yQ3JlYXRlU3RyaXBlKF9hcGlLZXksIG9wdGlvbnMpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfdGhpcy5wcm9wcy5zdHJpcGUpIHtcbiAgICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhIHN0cmlwZSBpbnN0YW5jZSAoaW4gdGhlIGNvbnN0cnVjdG9yKSwgd2UgY2FuIGJlaGF2ZSBzeW5jaHJvbm91c2x5LlxuICAgICAgX3RoaXMuX21ldGEgPSB7XG4gICAgICAgIHRhZzogJ3N5bmMnLFxuICAgICAgICBzdHJpcGU6IGVuc3VyZVN0cmlwZVNoYXBlKF90aGlzLnByb3BzLnN0cmlwZSlcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfdGhpcy5wcm9wcy5zdHJpcGUgPT09IG51bGwpIHtcbiAgICAgIF90aGlzLl9tZXRhID0ge1xuICAgICAgICB0YWc6ICdhc3luYycsXG4gICAgICAgIHN0cmlwZTogbnVsbFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHBhc3MgZWl0aGVyICdhcGlLZXknIG9yICdzdHJpcGUnIHRvIFN0cmlwZVByb3ZpZGVyLiBJZiB5b3UncmUgdXNpbmcgJ3N0cmlwZScgYnV0IGRvbid0IGhhdmUgYSBTdHJpcGUgaW5zdGFuY2UgeWV0LCBwYXNzICdudWxsJyBleHBsaWNpdGx5LlwiKTtcbiAgICB9XG5cbiAgICBfdGhpcy5fZGlkV2FybiA9IGZhbHNlO1xuICAgIF90aGlzLl9kaWRXYWtlVXBMaXN0ZW5lcnMgPSBmYWxzZTtcbiAgICBfdGhpcy5fbGlzdGVuZXJzID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8vIEV2ZW4gdGhvdWdoIHdlJ3JlIHVzaW5nIGZsb3csIGFsc28gdXNlIFByb3BUeXBlcyBzbyB3ZSBjYW4gdGFrZSBhZHZhbnRhZ2Ugb2YgZGV2ZWxvcGVyIHdhcm5pbmdzLlxuXG5cbiAgUHJvdmlkZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIC8vIGdldENoaWxkQ29udGV4dCBpcyBydW4gYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBzbyB3ZSBXSUxMIGhhdmUgYWNjZXNzIHRvXG4gICAgLy8gdGhlIGluaXRpYWwgc3RhdGUuXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBjb250ZXh0IGRvZXNuJ3QgdXBkYXRlIGluIHJlc3Buc2UgdG8gc3RhdGUgY2hhbmdlcyBsaWtlIHlvdVxuICAgIC8vIG1pZ2h0IGV4cGVjdDogY29udGV4dCBpcyBwdWxsZWQgYnkgdGhlIGNoaWxkLCBub3QgcHVzaGVkIGJ5IHRoZSBwYXJlbnQuXG4gICAgaWYgKHRoaXMuX21ldGEudGFnID09PSAnc3luYycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhZzogJ3N5bmMnLFxuICAgICAgICBzdHJpcGU6IHRoaXMuX21ldGEuc3RyaXBlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWc6ICdhc3luYycsXG4gICAgICAgIGFkZFN0cmlwZUxvYWRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkU3RyaXBlTG9hZExpc3RlbmVyKGZuKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5fbWV0YS5zdHJpcGUpIHtcbiAgICAgICAgICAgIGZuKF90aGlzMi5fbWV0YS5zdHJpcGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczIuX2xpc3RlbmVycy5wdXNoKGZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgYXBpS2V5Q2hhbmdlZCA9IHRoaXMucHJvcHMuYXBpS2V5ICYmIG5leHRQcm9wcy5hcGlLZXkgJiYgdGhpcy5wcm9wcy5hcGlLZXkgIT09IG5leHRQcm9wcy5hcGlLZXk7XG5cbiAgICB2YXIgc3RyaXBlSW5zdGFuY2VDaGFuZ2VkID0gdGhpcy5wcm9wcy5zdHJpcGUgJiYgbmV4dFByb3BzLnN0cmlwZSAmJiB0aGlzLnByb3BzLnN0cmlwZSAhPT0gbmV4dFByb3BzLnN0cmlwZTtcbiAgICBpZiAoIXRoaXMuX2RpZFdhcm4gJiYgKGFwaUtleUNoYW5nZWQgfHwgc3RyaXBlSW5zdGFuY2VDaGFuZ2VkKSAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5lcnJvcikge1xuICAgICAgdGhpcy5fZGlkV2FybiA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignU3RyaXBlUHJvdmlkZXIgZG9lcyBub3Qgc3VwcG9ydCBjaGFuZ2luZyB0aGUgYXBpS2V5IHBhcmFtZXRlci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2RpZFdha2VVcExpc3RlbmVycyAmJiBuZXh0UHJvcHMuc3RyaXBlKSB7XG4gICAgICAvLyBXYWtlIHVwIHRoZSBsaXN0ZW5lcnMgaWYgd2UndmUgZmluYWxseSBiZWVuIGdpdmVuIGEgU3RyaXBlU2hhcGVcbiAgICAgIHRoaXMuX2RpZFdha2VVcExpc3RlbmVycyA9IHRydWU7XG4gICAgICB2YXIgX3N0cmlwZTIgPSBlbnN1cmVTdHJpcGVTaGFwZShuZXh0UHJvcHMuc3RyaXBlKTtcbiAgICAgIHRoaXMuX21ldGEuc3RyaXBlID0gX3N0cmlwZTI7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oX3N0cmlwZTIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBQcm92aWRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgYXBpS2V5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLy8gUHJvcFR5cGVzLm9iamVjdCBpcyB0aGUgb25seSB3YXkgd2UgY2FuIGFjY2VwdCBhIFN0cmlwZSBpbnN0YW5jZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgc3RyaXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzID0gcHJvdmlkZXJDb250ZXh0VHlwZXM7XG5Qcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFwaUtleTogdW5kZWZpbmVkLFxuICBzdHJpcGU6IHVuZGVmaW5lZCxcbiAgY2hpbGRyZW46IG51bGxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBQcm92aWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9jb21wb25lbnRzL1Byb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVTID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvZXMyMDE3Jyk7XG5cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgKE1hdGgucG93KDIsIDUzKSAtIDEpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtcywgbWF4LXN0YXRlbWVudHNcbnZhciBGbGF0dGVuSW50b0FycmF5ID0gZnVuY3Rpb24gRmxhdHRlbkludG9BcnJheSh0YXJnZXQsIHNvdXJjZSwgc291cmNlTGVuLCBzdGFydCwgZGVwdGgpIHtcblx0dmFyIHRhcmdldEluZGV4ID0gc3RhcnQ7XG5cdHZhciBzb3VyY2VJbmRleCA9IDA7XG5cblx0Lypcblx0dmFyIG1hcHBlckZ1bmN0aW9uO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDUpIHtcblx0XHRtYXBwZXJGdW5jdGlvbiA9IGFyZ3VtZW50c1s1XTtcblx0fVxuXHQqL1xuXG5cdHdoaWxlIChzb3VyY2VJbmRleCA8IHNvdXJjZUxlbikge1xuXHRcdHZhciBQID0gRVMuVG9TdHJpbmcoc291cmNlSW5kZXgpO1xuXHRcdHZhciBleGlzdHMgPSBFUy5IYXNQcm9wZXJ0eShzb3VyY2UsIFApO1xuXHRcdGlmIChleGlzdHMpIHtcblx0XHRcdHZhciBlbGVtZW50ID0gRVMuR2V0KHNvdXJjZSwgUCk7XG5cdFx0XHQvKlxuXHRcdFx0aWYgKHR5cGVvZiBtYXBwZXJGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gNikge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHRoaXNBcmcgaXMgcmVxdWlyZWQgd2hlbiBtYXBwZXJGdW5jdGlvbiBpcyBwcm92aWRlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW1lbnQgPSBFUy5DYWxsKG1hcHBlckZ1bmN0aW9uLCBhcmd1bWVudHNbNl0sIFtlbGVtZW50LCBzb3VyY2VJbmRleCwgc291cmNlXSk7XG5cdFx0XHR9XG5cdFx0XHQqL1xuXHRcdFx0dmFyIHNob3VsZEZsYXR0ZW4gPSBmYWxzZTtcblx0XHRcdGlmIChkZXB0aCA+IDApIHtcblx0XHRcdFx0c2hvdWxkRmxhdHRlbiA9IEVTLklzQXJyYXkoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hvdWxkRmxhdHRlbikge1xuXHRcdFx0XHR2YXIgZWxlbWVudExlbiA9IEVTLlRvTGVuZ3RoKEVTLkdldChlbGVtZW50LCAnbGVuZ3RoJykpO1xuXHRcdFx0XHR0YXJnZXRJbmRleCA9IEZsYXR0ZW5JbnRvQXJyYXkodGFyZ2V0LCBlbGVtZW50LCBlbGVtZW50TGVuLCB0YXJnZXRJbmRleCwgZGVwdGggLSAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0YXJnZXRJbmRleCA+PSBNQVhfU0FGRV9JTlRFR0VSKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggdG9vIGxhcmdlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0RVMuQ3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyh0YXJnZXQsIEVTLlRvU3RyaW5nKHRhcmdldEluZGV4KSwgZWxlbWVudCk7XG5cdFx0XHRcdHRhcmdldEluZGV4ICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNvdXJjZUluZGV4ICs9IDE7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0SW5kZXg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsYXQoKSB7XG5cdHZhciBPID0gRVMuVG9PYmplY3QodGhpcyk7XG5cdHZhciBzb3VyY2VMZW4gPSBFUy5Ub0xlbmd0aChFUy5HZXQoTywgJ2xlbmd0aCcpKTtcblxuXHR2YXIgZGVwdGhOdW0gPSAxO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRkZXB0aE51bSA9IEVTLlRvSW50ZWdlcihhcmd1bWVudHNbMF0pO1xuXHR9XG5cblx0dmFyIEEgPSBFUy5BcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG5cdEZsYXR0ZW5JbnRvQXJyYXkoQSwgTywgc291cmNlTGVuLCAwLCBkZXB0aE51bSk7XG5cdHJldHVybiBBO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTU5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mbGF0IHx8IGltcGxlbWVudGF0aW9uO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmxhdC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTU5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIHByZWRpY2F0ZXMgPSB7XG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuXHQnUHJvcGVydHkgRGVzY3JpcHRvcic6IGZ1bmN0aW9uIGlzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG5cdFx0aWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhbGxvd2VkID0ge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0dldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1NldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuXHRcdHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG5cdFx0aWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2VydFJlY29yZChFUywgcmVjb3JkVHlwZSwgYXJndW1lbnROYW1lLCB2YWx1ZSkge1xuXHR2YXIgcHJlZGljYXRlID0gcHJlZGljYXRlc1tyZWNvcmRUeXBlXTtcblx0aWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCd1bmtub3duIHJlY29yZCB0eXBlOiAnICsgcmVjb3JkVHlwZSk7XG5cdH1cblx0aWYgKCFwcmVkaWNhdGUoRVMsIHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKGFyZ3VtZW50TmFtZSArICcgbXVzdCBiZSBhICcgKyByZWNvcmRUeXBlKTtcblx0fVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2VydFJlY29yZC5qc1xuLy8gbW9kdWxlIGlkID0gMTYwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXZlcnkoYXJyYXksIHByZWRpY2F0ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKCFwcmVkaWNhdGUoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9ldmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTYwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNhbGxiYWNrKGFycmF5W2ldLCBpLCBhcnJheSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FsbGJhY2stcmV0dXJuXG5cdH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9mb3JFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4oYSkge1xuXHRyZXR1cm4gYSAhPT0gYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qc1xuLy8gbW9kdWxlIGlkID0gMTYwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gSXNQcm9wZXJ0eURlc2NyaXB0b3IoRVMsIERlc2MpIHtcblx0aWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHZhciBhbGxvd2VkID0ge1xuXHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogdHJ1ZSxcblx0XHQnW1tFbnVtZXJhYmxlXV0nOiB0cnVlLFxuXHRcdCdbW0dldF1dJzogdHJ1ZSxcblx0XHQnW1tTZXRdXSc6IHRydWUsXG5cdFx0J1tbVmFsdWVdXSc6IHRydWUsXG5cdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBEZXNjKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRpZiAoaGFzKERlc2MsIGtleSkgJiYgIWFsbG93ZWRba2V5XSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmIChFUy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpICYmIEVTLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Byb3BlcnR5IERlc2NyaXB0b3JzIG1heSBub3QgYmUgYm90aCBhY2Nlc3NvciBhbmQgZGF0YSBkZXNjcmlwdG9ycycpO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJvcGVydHlEZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gMTYwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2lnbihudW1iZXIpIHtcblx0cmV0dXJuIG51bWJlciA+PSAwID8gMSA6IC0xO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE2MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcblxudmFyIG9yaWdLZXlzID0gT2JqZWN0LmtleXM7XG52YXIga2V5c1NoaW0gPSBvcmlnS2V5cyA/IGZ1bmN0aW9uIGtleXMobykgeyByZXR1cm4gb3JpZ0tleXMobyk7IH0gOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0dmFyIGFyZ3MgPSBPYmplY3Qua2V5cyhhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGFyZ3MgJiYgYXJncy5sZW5ndGggPT09IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE2MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc2hhbGxvd0VxdWFsID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKGEsIGIpIHtcbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuXG4gIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiW2tleV0gPT09IGFba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaGFsbG93RXF1YWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXN0cmlwZS1lbGVtZW50cy9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBib3VuZEZsYXQgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgcG9seWZpbGwpO1xuXG5kZWZpbmUoYm91bmRGbGF0LCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZsYXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZsYXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltRmxhdCgpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKFxuXHRcdEFycmF5LnByb3RvdHlwZSxcblx0XHR7IGZsYXQ6IHBvbHlmaWxsIH0sXG5cdFx0eyBmbGF0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuZmxhdCAhPT0gcG9seWZpbGw7IH0gfVxuXHQpO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5mbGF0L3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE2Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBlbnN1cmVCaWxsaW5nLCB7IFBsYW5NYXAgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBJQXN5bmNSZXN1bHQgfSBmcm9tICdiYXNlL2FzeW5jU3RhdGVNaWRkbGV3YXJlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1N1YnNjcmlwdGlvbk1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmNvbnN0IFBsYW5zTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxQbGFuTWFwPigpO1xuY29uc3QgU3Vic2NyaXB0aW9uTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxTdWJzY3JpcHRpb25Nb2RlbD4oKTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgcmVhZG9ubHkgYXZhaWxhYmxlUGxhbnNBc3luYzogSUFzeW5jUmVzdWx0PFBsYW5NYXA+O1xuICByZWFkb25seSBzdWJzY3JpcHRpb25Bc3luYzogSUFzeW5jUmVzdWx0PFN1YnNjcmlwdGlvbk1vZGVsPjtcbn07XG5cbmNsYXNzIFVwZGF0ZVN1YnNjcmlwdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbm5lY3RlZFByb3BzICYgeyBkaXNwYXRjaCB9LCB7fT4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGVuc3VyZUJpbGxpbmcoKS5Jbml0QmlsbGluZ1ZpZXcoKSk7XG4gICAgZGlzcGF0Y2goZW5zdXJlQmlsbGluZygpLmxvYWRQbGFucygpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBzdWJzY3JpcHRpb25Bc3luYywgYXZhaWxhYmxlUGxhbnNBc3luYyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdWJzY3JpYmVkUGxhbklkID0gbnVsbDtcbiAgICBpZiAoc3Vic2NyaXB0aW9uQXN5bmMgJiYgc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0KSB7XG4gICAgICBjb25zdCByZXZQbGFuID0gXy5maW5kKFxuICAgICAgICBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuZGV0YWlscyxcbiAgICAgICAgKGRldGFpbCkgPT4gJ3JldlNlYXRzJyA9PSBkZXRhaWwuZm9yUHJvZHVjdCxcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXZQbGFuKSBzdWJzY3JpYmVkUGxhbklkID0gcmV2UGxhbi5wbGFuSWQ7XG4gICAgfVxuXG4gICAgbGV0IHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LWluZm8nO1xuICAgIGlmIChzdWJzY3JpcHRpb25Bc3luYyAmJiBzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQpIHtcbiAgICAgIGlmICgndHJpYWxpbmcnID09IHN1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC5zdGF0dXMpIHN1YnNjcmlwdGlvbk1lc3NhZ2VzdHlsZSA9ICd0ZXh0LXdhcm5pbmcnO1xuICAgICAgZWxzZSBpZiAoJ2FjdGl2ZScgIT0gc3Vic2NyaXB0aW9uQXN5bmMucmVzdWx0LnN0YXR1cylcbiAgICAgICAgc3Vic2NyaXB0aW9uTWVzc2FnZXN0eWxlID0gJ3RleHQtZGFuZ2VyJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5JbmZvIHRleHQtY2VudGVyIGNvbnRhaW5lcic+XG4gICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYyAmJiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvbkxvYWRlciBhc3luY1Jlc3VsdD17c3Vic2NyaXB0aW9uQXN5bmN9IHByb21wdD0nbG9hZGluZyBzdWJzY3JpcHRpb24gZGV0YWlscyc+XG4gICAgICAgICAgICB7YXZhaWxhYmxlUGxhbnNBc3luYyAmJiAoXG4gICAgICAgICAgICAgIDxQbGFuc0xvYWRlciBhc3luY1Jlc3VsdD17YXZhaWxhYmxlUGxhbnNBc3luY30gcHJvbXB0PSdsb2FkaW5nIGF2YWlsYWJsZSBwbGFucyc+XG4gICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdCAmJiBhdmFpbGFibGVQbGFuc0FzeW5jLnJlc3VsdCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsoYXZhaWxhYmxlUGxhbnNBc3luYy5yZXN1bHRbJ3JldlNlYXRzJ10gfHwgW10pLm1hcCgocGxhbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYW4uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXByaW1hcnknIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwbGFuLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDE5MCwgbWFyZ2luOiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy13YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogLTEwLCBwYWRkaW5nOiAnMTBweCA1cHgnLCBoZWlnaHQ6IDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz57cGxhbi5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz57cGxhbi5wcmljaW5nfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYW4uaWQgPT0gc3Vic2NyaWJlZFBsYW5JZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHRpb25Bc3luYy5yZXN1bHQuc3RhdHVzID09ICd0cmlhbGluZycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnNjcmlwdGlvbkFzeW5jLnJlc3VsdC50cmlhbERheXNMZWZ0fSBkYXkocykgb2YgZnJlZSB0cmlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVCaWxsaW5nKCkudXBkYXRlUmV2U3Vic2NyaXB0aW9uKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2VlcCBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1NpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9J3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29taW5nIHNvb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCwgcGFkZGluZzogJzIwcHggM3B4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctaW5mbyB0ZXh0LWxlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBsYW4uZGlzcGxheSB8fCBbXSkubWFwKChkdGV4dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgJHtwbGFuLmlkfV90ZXh0XyR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZHRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BsYW5zTG9hZGVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N1YnNjcmlwdGlvbkxvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCB7fT4oKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgc3Vic2NyaXB0aW9uQXN5bmMsIGF2YWlsYWJsZVBsYW5zQXN5bmMgfSA9IGVuc3VyZUJpbGxpbmcoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiB7IHN1YnNjcmlwdGlvbkFzeW5jLCBhdmFpbGFibGVQbGFuc0FzeW5jIH07XG59KShVcGRhdGVTdWJzY3JpcHRpb25WaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2JpbGxpbmcvdXBkYXRlLnRzeCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNicpO1xudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFJhbmdlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVSYW5nZUVycm9yJScpO1xudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xudmFyICRBcnJheVByb3RvdHlwZSA9ICRBcnJheS5wcm90b3R5cGU7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICROdW1iZXIgPSBHZXRJbnRyaW5zaWMoJyVOdW1iZXIlJyk7XG52YXIgJFN5bWJvbCA9IEdldEludHJpbnNpYygnJVN5bWJvbCUnLCB0cnVlKTtcbnZhciAkUmVnRXhwID0gR2V0SW50cmluc2ljKCclUmVnRXhwJScpO1xudmFyICRQcm9taXNlID0gR2V0SW50cmluc2ljKCclUHJvbWlzZSUnLCB0cnVlKTtcbnZhciAkcHJldmVudEV4dGVuc2lvbnMgPSAkT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gTWF0aC5wb3coMiwgMzIpIC0gMTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gJE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4vaGVscGVycy9mb3JFYWNoJyk7XG52YXIgZXZlcnkgPSByZXF1aXJlKCcuL2hlbHBlcnMvZXZlcnknKTtcbnZhciBpc1NhbWVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yJyk7XG52YXIgaXNQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcm9wZXJ0eURlc2NyaXB0b3InKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9jYWxsQmluZCcpO1xudmFyICRQcm9taXNlVGhlbiA9ICRQcm9taXNlID8gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclUHJvbWlzZVByb3RvX3RoZW4lJykpIDogbnVsbDtcbnZhciBhcnJheVNsaWNlID0gY2FsbEJpbmQoJEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBiWzAxXSskL2kpO1xudmFyIGlzT2N0YWwgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciBpc0RpZ2l0ID0gY2FsbEJpbmQoJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL15bMC05XSQvKTtcbnZhciByZWdleEV4ZWMgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3ICRSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBub25XU3JlZ2V4KTtcbnZhciBpbnZhbGlkSGV4TGl0ZXJhbCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSBjYWxsQmluZCgkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG52YXIgJGNoYXJDb2RlQXQgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5jaGFyQ29kZUF0KTtcbnZhciAkaXNFbnVtZXJhYmxlID0gY2FsbEJpbmQoJE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpO1xuXG52YXIgdG9TdHIgPSBjYWxsQmluZCgkT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciAkTnVtYmVyVmFsdWVPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnJU51bWJlclByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkQm9vbGVhblZhbHVlT2YgPSBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVCb29sZWFuUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRTdHJpbmdWYWx1ZU9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCclU3RyaW5nUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICREYXRlVmFsdWVPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnJURhdGVQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJFN5bWJvbFRvU3RyaW5nID0gaGFzU3ltYm9scyAmJiBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVTeW1ib2xQcm90b3R5cGUlJykudG9TdHJpbmcpO1xuXG52YXIgJGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciAkYWJzID0gTWF0aC5hYnM7XG5cbnZhciAkT2JqZWN0Q3JlYXRlID0gJE9iamVjdC5jcmVhdGU7XG52YXIgJGdPUEQgPSAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciAkZ09QTiA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciAkZ09QUyA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyICRpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyICRzZXRQcm90byA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90bywgbm8tbmVnYXRlZC1jb25kaXRpb25cblx0W10uX19wcm90b19fICE9PSBBcnJheS5wcm90b3R5cGVcblx0XHQ/IG51bGxcblx0XHQ6IGZ1bmN0aW9uIChPLCBwcm90bykge1xuXHRcdFx0Ty5fX3Byb3RvX18gPSBwcm90bzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXHRcdFx0cmV0dXJuIE87XG5cdFx0fVxuKTtcblxudmFyIERlZmluZU93blByb3BlcnR5ID0gZnVuY3Rpb24gRGVmaW5lT3duUHJvcGVydHkoRVMsIE8sIFAsIGRlc2MpIHtcblx0aWYgKCEkZGVmaW5lUHJvcGVydHkpIHtcblx0XHRpZiAoIUVTLklzRGF0YURlc2NyaXB0b3IoZGVzYykpIHtcblx0XHRcdC8vIEVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMvc2V0dGVyc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWRlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSB8fCAhZGVzY1snW1tXcml0YWJsZV1dJ10pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBmYWxsYmFjayBmb3IgRVMzXG5cdFx0aWYgKFAgaW4gTyAmJiAkaXNFbnVtZXJhYmxlKE8sIFApICE9PSAhIWRlc2NbJ1tbRW51bWVyYWJsZV1dJ10pIHtcblx0XHRcdC8vIGEgbm9uLWVudW1lcmFibGUgZXhpc3RpbmcgcHJvcGVydHlcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBwcm9wZXJ0eSBkb2VzIG5vdCBleGlzdCBhdCBhbGwsIG9yIGV4aXN0cyBidXQgaXMgZW51bWVyYWJsZVxuXHRcdHZhciBWID0gZGVzY1snW1tWYWx1ZV1dJ107XG5cdFx0T1tQXSA9IFY7IC8vIHdpbGwgdXNlIFtbRGVmaW5lXV1cblx0XHRyZXR1cm4gRVMuU2FtZVZhbHVlKE9bUF0sIFYpO1xuXHR9XG5cdCRkZWZpbmVQcm9wZXJ0eShPLCBQLCBFUy5Gcm9tUHJvcGVydHlEZXNjcmlwdG9yKGRlc2MpKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbnZhciB3cyA9IFtcblx0J1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcblx0J1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4Jyxcblx0J1xcdTIwMjlcXHVGRUZGJ1xuXS5qb2luKCcnKTtcbnZhciB0cmltUmVnZXggPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xudmFyICRyZXBsYWNlID0gY2FsbEJpbmQoJFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gJHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihpbnNwZWN0KEYpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkTnVtYmVyKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoaXNCaW5hcnkodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNPY3RhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgOCkpO1xuXHRcdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0cmltbWVkID0gdHJpbSh2YWx1ZSk7XG5cdFx0XHRcdGlmICh0cmltbWVkICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHRyaW1tZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqICRmbG9vcigkYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9ICRmbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b29iamVjdFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLlJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsICRTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IGtleSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyKGFyZ3VtZW50KSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiAkQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjYWxsYWJsZVxuXHQvLyBJc0NhbGxhYmxlOiBFUzUuSXNDYWxsYWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxuXHRJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWFyZ3VtZW50LnByb3RvdHlwZTsgLy8gdW5mb3J0dW5hdGVseSB0aGVyZSdzIG5vIHdheSB0byB0cnVseSBjaGVjayB0aGlzIHdpdGhvdXQgdHJ5L2NhdGNoIGBuZXcgYXJndW1lbnRgXG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzZXh0ZW5zaWJsZS1vXG5cdElzRXh0ZW5zaWJsZTogJHByZXZlbnRFeHRlbnNpb25zXG5cdFx0PyBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGlzRXh0ZW5zaWJsZShvYmopO1xuXHRcdH1cblx0XHQ6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShvYmopIHsgcmV0dXJuIHRydWU7IH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNpbnRlZ2VyXG5cdElzSW50ZWdlcjogZnVuY3Rpb24gSXNJbnRlZ2VyKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ251bWJlcicgfHwgJGlzTmFOKGFyZ3VtZW50KSB8fCAhJGlzRmluaXRlKGFyZ3VtZW50KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWJzID0gJGFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuICRmbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbJFN5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuMi4yLTNcblx0XHR2YXIgTyA9IHRoaXMuVG9PYmplY3QoVik7XG5cblx0XHQvLyA3LjMuMi40XG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy45IC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG1ldGhvZFxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IGZ1bmMgYmUgR2V0VihPLCBQKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoZnVuYykuXG5cdCAqIDQuIElmIGZ1bmMgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsLCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiA1LiBJZiBJc0NhbGxhYmxlKGZ1bmMpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cdCAqIDYuIFJldHVybiBmdW5jLlxuXHQgKi9cblx0R2V0TWV0aG9kOiBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHRcdC8vIDcuMy45LjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuMlxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZSwgZ290ICcgKyBpbnNwZWN0KFApKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMgPyBDWyRTeW1ib2wuc3BlY2llc10gOiB2b2lkIDA7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZnJvbXByb3BlcnR5ZGVzY3JpcHRvclxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0dmFyIG9iaiA9IHt9O1xuXHRcdGlmICgnW1tWYWx1ZV1dJyBpbiBEZXNjKSB7XG5cdFx0XHRvYmoudmFsdWUgPSBEZXNjWydbW1ZhbHVlXV0nXTtcblx0XHR9XG5cdFx0aWYgKCdbW1dyaXRhYmxlXV0nIGluIERlc2MpIHtcblx0XHRcdG9iai53cml0YWJsZSA9IERlc2NbJ1tbV3JpdGFibGVdXSddO1xuXHRcdH1cblx0XHRpZiAoJ1tbR2V0XV0nIGluIERlc2MpIHtcblx0XHRcdG9iai5nZXQgPSBEZXNjWydbW0dldF1dJ107XG5cdFx0fVxuXHRcdGlmICgnW1tTZXRdXScgaW4gRGVzYykge1xuXHRcdFx0b2JqLnNldCA9IERlc2NbJ1tbU2V0XV0nXTtcblx0XHR9XG5cdFx0aWYgKCdbW0VudW1lcmFibGVdXScgaW4gRGVzYykge1xuXHRcdFx0b2JqLmVudW1lcmFibGUgPSBEZXNjWydbW0VudW1lcmFibGVdXSddO1xuXHRcdH1cblx0XHRpZiAoJ1tbQ29uZmlndXJhYmxlXV0nIGluIERlc2MpIHtcblx0XHRcdG9iai5jb25maWd1cmFibGUgPSBEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ107XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNvbXBsZXRlcHJvcGVydHlkZXNjcmlwdG9yXG5cdENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tWYWx1ZV1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW0dldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbU2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbRW51bWVyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbQ29uZmlndXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tDb25maWd1cmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBEZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zZXQtby1wLXYtdGhyb3dcblx0U2V0OiBmdW5jdGlvbiBTZXQoTywgUCwgViwgVGhyb3cpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShUaHJvdykgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Rocm93IG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmIChUaHJvdykge1xuXHRcdFx0T1tQXSA9IFY7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0T1tQXSA9IFY7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc293bnByb3BlcnR5XG5cdEhhc093blByb3BlcnR5OiBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBoYXMoTywgUCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc3Byb3BlcnR5XG5cdEhhc1Byb3BlcnR5OiBmdW5jdGlvbiBIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBQIGluIE87XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzY29uY2F0c3ByZWFkYWJsZVxuXHRJc0NvbmNhdFNwcmVhZGFibGU6IGZ1bmN0aW9uIElzQ29uY2F0U3ByZWFkYWJsZShPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMgJiYgdHlwZW9mICRTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dmFyIHNwcmVhZGFibGUgPSB0aGlzLkdldChPLCBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlKTtcblx0XHRcdGlmICh0eXBlb2Ygc3ByZWFkYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHNwcmVhZGFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Jc0FycmF5KE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pbnZva2Vcblx0SW52b2tlOiBmdW5jdGlvbiBJbnZva2UoTywgUCkge1xuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHZhciBhcmd1bWVudHNMaXN0ID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXHRcdHJldHVybiB0aGlzLkNhbGwoZnVuYywgTywgYXJndW1lbnRzTGlzdCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldGl0ZXJhdG9yXG5cdEdldEl0ZXJhdG9yOiBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmosIG1ldGhvZCkge1xuXHRcdHZhciBhY3R1YWxNZXRob2QgPSBtZXRob2Q7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRpZiAoIWhhc1N5bWJvbHMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdHZXRJdGVyYXRvciBkZXBlbmRzIG9uIG5hdGl2ZSBTeW1ib2wgc3VwcG9ydCB3aGVuIGBtZXRob2RgIGlzIG5vdCBwYXNzZWQnKTtcblx0XHRcdH1cblx0XHRcdGFjdHVhbE1ldGhvZCA9IHRoaXMuR2V0TWV0aG9kKG9iaiwgJFN5bWJvbC5pdGVyYXRvcik7XG5cdFx0fVxuXHRcdHZhciBpdGVyYXRvciA9IHRoaXMuQ2FsbChhY3R1YWxNZXRob2QsIG9iaik7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZXJhdG9yO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcm5leHRcblx0SXRlcmF0b3JOZXh0OiBmdW5jdGlvbiBJdGVyYXRvck5leHQoaXRlcmF0b3IsIHZhbHVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuSW52b2tlKGl0ZXJhdG9yLCAnbmV4dCcsIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gW10gOiBbdmFsdWVdKTtcblx0XHRpZiAodGhpcy5UeXBlKHJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbmV4dCBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3Jjb21wbGV0ZVxuXHRJdGVyYXRvckNvbXBsZXRlOiBmdW5jdGlvbiBJdGVyYXRvckNvbXBsZXRlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5HZXQoaXRlclJlc3VsdCwgJ2RvbmUnKSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ydmFsdWVcblx0SXRlcmF0b3JWYWx1ZTogZnVuY3Rpb24gSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJSZXN1bHQpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuR2V0KGl0ZXJSZXN1bHQsICd2YWx1ZScpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcnN0ZXBcblx0SXRlcmF0b3JTdGVwOiBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JdGVyYXRvck5leHQoaXRlcmF0b3IpO1xuXHRcdHZhciBkb25lID0gdGhpcy5JdGVyYXRvckNvbXBsZXRlKHJlc3VsdCk7XG5cdFx0cmV0dXJuIGRvbmUgPT09IHRydWUgPyBmYWxzZSA6IHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JjbG9zZVxuXHRJdGVyYXRvckNsb3NlOiBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyYXRvcikgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShjb21wbGV0aW9uKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGNvbXBsZXRpb24gaXMgbm90IGEgdGh1bmsgZm9yIGEgQ29tcGxldGlvbiBSZWNvcmQnKTtcblx0XHR9XG5cdFx0dmFyIGNvbXBsZXRpb25UaHVuayA9IGNvbXBsZXRpb247XG5cblx0XHR2YXIgaXRlcmF0b3JSZXR1cm4gPSB0aGlzLkdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuXG5cdFx0aWYgKHR5cGVvZiBpdGVyYXRvclJldHVybiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHR9XG5cblx0XHR2YXIgY29tcGxldGlvblJlY29yZDtcblx0XHR0cnkge1xuXHRcdFx0dmFyIGlubmVyUmVzdWx0ID0gdGhpcy5DYWxsKGl0ZXJhdG9yUmV0dXJuLCBpdGVyYXRvciwgW10pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIGlmIHdlIGhpdCBoZXJlLCB0aGVuIFwiZVwiIGlzIHRoZSBpbm5lclJlc3VsdCBjb21wbGV0aW9uIHRoYXQgbmVlZHMgcmUtdGhyb3dpbmdcblxuXHRcdFx0Ly8gaWYgdGhlIGNvbXBsZXRpb24gaXMgb2YgdHlwZSBcInRocm93XCIsIHRoaXMgd2lsbCB0aHJvdy5cblx0XHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRcdC8vIGlmIG5vdCwgdGhlbiByZXR1cm4gdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb25cblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTsgLy8gaWYgaW5uZXJSZXN1bHQgd29ya2VkLCB0aGVuIHRocm93IGlmIHRoZSBjb21wbGV0aW9uIGRvZXNcblx0XHRjb21wbGV0aW9uVGh1bmsgPSBudWxsOyAvLyBlbnN1cmUgaXQncyBub3QgY2FsbGVkIHR3aWNlLlxuXG5cdFx0aWYgKHRoaXMuVHlwZShpbm5lclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgLnJldHVybiBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGxldGlvblJlY29yZDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxuXHRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0OiBmdW5jdGlvbiBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHZhbHVlLCBkb25lKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShkb25lKSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShkb25lKSBpcyBub3QgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0ZG9uZTogZG9uZVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXJlZ2V4cGV4ZWNcblx0UmVnRXhwRXhlYzogZnVuY3Rpb24gUmVnRXhwRXhlYyhSLCBTKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShSKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdHZhciBleGVjID0gdGhpcy5HZXQoUiwgJ2V4ZWMnKTtcblx0XHRpZiAodGhpcy5Jc0NhbGxhYmxlKGV4ZWMpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdGhpcy5DYWxsKGV4ZWMsIFIsIFtTXSk7XG5cdFx0XHRpZiAocmVzdWx0ID09PSBudWxsIHx8IHRoaXMuVHlwZShyZXN1bHQpID09PSAnT2JqZWN0Jykge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1wiZXhlY1wiIG1ldGhvZCBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleEV4ZWMoUiwgUyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRBcnJheVNwZWNpZXNDcmVhdGU6IGZ1bmN0aW9uIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGxlbmd0aCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMCcpO1xuXHRcdH1cblx0XHR2YXIgbGVuID0gbGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aDtcblx0XHR2YXIgQztcblx0XHR2YXIgaXNBcnJheSA9IHRoaXMuSXNBcnJheShvcmlnaW5hbEFycmF5KTtcblx0XHRpZiAoaXNBcnJheSkge1xuXHRcdFx0QyA9IHRoaXMuR2V0KG9yaWdpbmFsQXJyYXksICdjb25zdHJ1Y3RvcicpO1xuXHRcdFx0Ly8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gbWFrZSBhIGNyb3NzLXJlYWxtIG5vcm1hbCBBcnJheSwgYSBzYW1lLXJlYWxtIEFycmF5XG5cdFx0XHQvLyBpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHQvLyBcdGlmIEMgaXMgYW5vdGhlciByZWFsbSdzIEFycmF5LCBDID0gdW5kZWZpbmVkXG5cdFx0XHQvLyBcdE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKEFycmF5KSkpID09PSBudWxsID9cblx0XHRcdC8vIH1cblx0XHRcdGlmICh0aGlzLlR5cGUoQykgPT09ICdPYmplY3QnICYmIGhhc1N5bWJvbHMgJiYgJFN5bWJvbC5zcGVjaWVzKSB7XG5cdFx0XHRcdEMgPSB0aGlzLkdldChDLCAkU3ltYm9sLnNwZWNpZXMpO1xuXHRcdFx0XHRpZiAoQyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdEMgPSB2b2lkIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICRBcnJheShsZW4pO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDb25zdHJ1Y3RvcihDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0MgbXVzdCBiZSBhIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQyhsZW4pOyAvLyB0aGlzLkNvbnN0cnVjdChDLCBsZW4pO1xuXHR9LFxuXG5cdENyZWF0ZURhdGFQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIG9sZERlc2MgPSAkZ09QRChPLCBQKTtcblx0XHR2YXIgZXh0ZW5zaWJsZSA9IG9sZERlc2MgfHwgdGhpcy5Jc0V4dGVuc2libGUoTyk7XG5cdFx0dmFyIGltbXV0YWJsZSA9IG9sZERlc2MgJiYgKCFvbGREZXNjLndyaXRhYmxlIHx8ICFvbGREZXNjLmNvbmZpZ3VyYWJsZSk7XG5cdFx0aWYgKGltbXV0YWJsZSB8fCAhZXh0ZW5zaWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBWLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9KTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlZGF0YXByb3BlcnR5b3J0aHJvd1xuXHRDcmVhdGVEYXRhUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIHN1Y2Nlc3MgPSB0aGlzLkNyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCd1bmFibGUgdG8gY3JlYXRlIGRhdGEgcHJvcGVydHknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3RjcmVhdGVcblx0T2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiBPYmplY3RDcmVhdGUocHJvdG8sIGludGVybmFsU2xvdHNMaXN0KSB7XG5cdFx0aWYgKHByb3RvICE9PSBudWxsICYmIHRoaXMuVHlwZShwcm90bykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogcHJvdG8gbXVzdCBiZSBudWxsIG9yIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgc2xvdHMgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogaW50ZXJuYWxTbG90c0xpc3Q7XG5cdFx0aWYgKHNsb3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2VzLWFic3RyYWN0IGRvZXMgbm90IHlldCBzdXBwb3J0IGludGVybmFsIHNsb3RzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3RvID09PSBudWxsICYmICEkT2JqZWN0Q3JlYXRlKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCduYXRpdmUgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0IGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBudWxsIG9iamVjdHMnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE9iamVjdENyZWF0ZShwcm90byk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuXHRBZHZhbmNlU3RyaW5nSW5kZXg6IGZ1bmN0aW9uIEFkdmFuY2VTdHJpbmdJbmRleChTLCBpbmRleCwgdW5pY29kZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAgYW5kIDw9IDIqKjUzJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUodW5pY29kZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHVuaWNvZGUgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKCF1bmljb2RlKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblx0XHR2YXIgbGVuZ3RoID0gUy5sZW5ndGg7XG5cdFx0aWYgKChpbmRleCArIDEpID49IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgZmlyc3QgPSAkY2hhckNvZGVBdChTLCBpbmRleCk7XG5cdFx0aWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHZhciBzZWNvbmQgPSAkY2hhckNvZGVBdChTLCBpbmRleCArIDEpO1xuXHRcdGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleCArIDI7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVtZXRob2Rwcm9wZXJ0eVxuXHRDcmVhdGVNZXRob2RQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlTWV0aG9kUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0Rlc2MgPSB7XG5cdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBmYWxzZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBWLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXHRcdHJldHVybiBEZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCBuZXdEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlZmluZXByb3BlcnR5b3J0aHJvd1xuXHREZWZpbmVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBQLCBkZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgRGVzYyA9IGlzUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIGRlc2MpID8gZGVzYyA6IHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoZGVzYyk7XG5cdFx0aWYgKCFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgaXMgbm90IGEgdmFsaWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBEZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCBEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlbGV0ZXByb3BlcnR5b3J0aHJvd1xuXHREZWxldGVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgc3VjY2VzcyA9IGRlbGV0ZSBPW1BdO1xuXHRcdGlmICghc3VjY2Vzcykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXR0ZW1wdCB0byBkZWxldGUgcHJvcGVydHkgZmFpbGVkLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VjY2Vzcztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVudW1lcmFibGVvd25uYW1lc1xuXHRFbnVtZXJhYmxlT3duTmFtZXM6IGZ1bmN0aW9uIEVudW1lcmFibGVPd25OYW1lcyhPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ga2V5cyhPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbnVtYmVyLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc051bWJlclZhbHVlOiBmdW5jdGlvbiB0aGlzTnVtYmVyVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE51bWJlclZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1ib29sZWFuLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc0Jvb2xlYW5WYWx1ZTogZnVuY3Rpb24gdGhpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnQm9vbGVhbicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJEJvb2xlYW5WYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtc3RyaW5nLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1N0cmluZ1ZhbHVlOiBmdW5jdGlvbiB0aGlzU3RyaW5nVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ1N0cmluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJFN0cmluZ1ZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1kYXRlLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1RpbWVWYWx1ZTogZnVuY3Rpb24gdGhpc1RpbWVWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiAkRGF0ZVZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0aW50ZWdyaXR5bGV2ZWxcblx0U2V0SW50ZWdyaXR5TGV2ZWw6IGZ1bmN0aW9uIFNldEludGVncml0eUxldmVsKE8sIGxldmVsKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKGxldmVsICE9PSAnc2VhbGVkJyAmJiBsZXZlbCAhPT0gJ2Zyb3plbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBgbGV2ZWxgIG11c3QgYmUgYFwic2VhbGVkXCJgIG9yIGBcImZyb3plblwiYCcpO1xuXHRcdH1cblx0XHRpZiAoISRwcmV2ZW50RXh0ZW5zaW9ucykge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignU2V0SW50ZWdyaXR5TGV2ZWwgcmVxdWlyZXMgbmF0aXZlIGBPYmplY3QucHJldmVudEV4dGVuc2lvbnNgIHN1cHBvcnQnKTtcblx0XHR9XG5cdFx0dmFyIHN0YXR1cyA9ICRwcmV2ZW50RXh0ZW5zaW9ucyhPKTtcblx0XHRpZiAoIXN0YXR1cykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoISRnT1BOKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdTZXRJbnRlZ3JpdHlMZXZlbCByZXF1aXJlcyBuYXRpdmUgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBzdXBwb3J0Jyk7XG5cdFx0fVxuXHRcdHZhciB0aGVLZXlzID0gJGdPUE4oTyk7XG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHRpZiAobGV2ZWwgPT09ICdzZWFsZWQnKSB7XG5cdFx0XHRmb3JFYWNoKHRoZUtleXMsIGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdEVTLkRlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBrLCB7IGNvbmZpZ3VyYWJsZTogZmFsc2UgfSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSAnZnJvemVuJykge1xuXHRcdFx0Zm9yRWFjaCh0aGVLZXlzLCBmdW5jdGlvbiAoaykge1xuXHRcdFx0XHR2YXIgY3VycmVudERlc2MgPSAkZ09QRChPLCBrKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50RGVzYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHR2YXIgZGVzYztcblx0XHRcdFx0XHRpZiAoRVMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRVMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudERlc2MpKSkge1xuXHRcdFx0XHRcdFx0ZGVzYyA9IHsgY29uZmlndXJhYmxlOiBmYWxzZSB9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZXNjID0geyBjb25maWd1cmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0RVMuRGVmaW5lUHJvcGVydHlPclRocm93KE8sIGssIGRlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10ZXN0aW50ZWdyaXR5bGV2ZWxcblx0VGVzdEludGVncml0eUxldmVsOiBmdW5jdGlvbiBUZXN0SW50ZWdyaXR5TGV2ZWwoTywgbGV2ZWwpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAobGV2ZWwgIT09ICdzZWFsZWQnICYmIGxldmVsICE9PSAnZnJvemVuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBsZXZlbGAgbXVzdCBiZSBgXCJzZWFsZWRcImAgb3IgYFwiZnJvemVuXCJgJyk7XG5cdFx0fVxuXHRcdHZhciBzdGF0dXMgPSB0aGlzLklzRXh0ZW5zaWJsZShPKTtcblx0XHRpZiAoc3RhdHVzKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciB0aGVLZXlzID0gJGdPUE4oTyk7XG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHRyZXR1cm4gdGhlS2V5cy5sZW5ndGggPT09IDAgfHwgZXZlcnkodGhlS2V5cywgZnVuY3Rpb24gKGspIHtcblx0XHRcdHZhciBjdXJyZW50RGVzYyA9ICRnT1BEKE8sIGspO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50RGVzYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aWYgKGN1cnJlbnREZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGV2ZWwgPT09ICdmcm96ZW4nICYmIEVTLklzRGF0YURlc2NyaXB0b3IoRVMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudERlc2MpKSAmJiBjdXJyZW50RGVzYy53cml0YWJsZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vcmRpbmFyeWhhc2luc3RhbmNlXG5cdE9yZGluYXJ5SGFzSW5zdGFuY2U6IGZ1bmN0aW9uIE9yZGluYXJ5SGFzSW5zdGFuY2UoQywgTykge1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoQykgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBQID0gdGhpcy5HZXQoQywgJ3Byb3RvdHlwZScpO1xuXHRcdGlmICh0aGlzLlR5cGUoUCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignT3JkaW5hcnlIYXNJbnN0YW5jZSBjYWxsZWQgb24gYW4gb2JqZWN0IHdpdGggYW4gaW52YWxpZCBwcm90b3R5cGUgcHJvcGVydHkuJyk7XG5cdFx0fVxuXHRcdHJldHVybiBPIGluc3RhbmNlb2YgQztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9yZGluYXJ5aGFzcHJvcGVydHlcblx0T3JkaW5hcnlIYXNQcm9wZXJ0eTogZnVuY3Rpb24gT3JkaW5hcnlIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0cmV0dXJuIFAgaW4gTztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWluc3RhbmNlb2ZvcGVyYXRvclxuXHRJbnN0YW5jZW9mT3BlcmF0b3I6IGZ1bmN0aW9uIEluc3RhbmNlb2ZPcGVyYXRvcihPLCBDKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIGluc3RPZkhhbmRsZXIgPSBoYXNTeW1ib2xzICYmICRTeW1ib2wuaGFzSW5zdGFuY2UgPyB0aGlzLkdldE1ldGhvZChDLCAkU3ltYm9sLmhhc0luc3RhbmNlKSA6IHZvaWQgMDtcblx0XHRpZiAodHlwZW9mIGluc3RPZkhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5DYWxsKGluc3RPZkhhbmRsZXIsIEMsIFtPXSkpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BDYCBpcyBub3QgQ2FsbGFibGUnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuT3JkaW5hcnlIYXNJbnN0YW5jZShDLCBPKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcHJvbWlzZVxuXHRJc1Byb21pc2U6IGZ1bmN0aW9uIElzUHJvbWlzZSh4KSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh4KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCEkUHJvbWlzZSkgeyAvLyBQcm9taXNlcyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JFByb21pc2VUaGVuKHgpOyAvLyB0aHJvd3MgaWYgbm90IGEgcHJvbWlzZVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hYnN0cmFjdC1lcXVhbGl0eS1jb21wYXJpc29uXG5cdCdBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gQWJzdHJhY3RFcXVhbGl0eUNvbXBhcmlzb24oeCwgeSkge1xuXHRcdHZhciB4VHlwZSA9IHRoaXMuVHlwZSh4KTtcblx0XHR2YXIgeVR5cGUgPSB0aGlzLlR5cGUoeSk7XG5cdFx0aWYgKHhUeXBlID09PSB5VHlwZSkge1xuXHRcdFx0cmV0dXJuIHggPT09IHk7IC8vIEVTNisgc3BlY2lmaWVkIHRoaXMgc2hvcnRjdXQgYW55d2F5cy5cblx0XHR9XG5cdFx0aWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdOdW1iZXInICYmIHlUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnU3RyaW5nJyAmJiB5VHlwZSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub051bWJlcih4KSwgeSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9OdW1iZXIoeCksIHkpO1xuXHRcdH1cblx0XHRpZiAoeVR5cGUgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKCh4VHlwZSA9PT0gJ1N0cmluZycgfHwgeFR5cGUgPT09ICdOdW1iZXInIHx8IHhUeXBlID09PSAnU3ltYm9sJykgJiYgeVR5cGUgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHgsIHRoaXMuVG9QcmltaXRpdmUoeSkpO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdPYmplY3QnICYmICh5VHlwZSA9PT0gJ1N0cmluZycgfHwgeVR5cGUgPT09ICdOdW1iZXInIHx8IHlUeXBlID09PSAnU3ltYm9sJykpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub1ByaW1pdGl2ZSh4KSwgeSk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiwgbWF4LXN0YXRlbWVudHMsIGlkLWxlbmd0aCwgbWF4LXBhcmFtc1xuXHRWYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBWYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yKE8sIFAsIGV4dGVuc2libGUsIERlc2MsIGN1cnJlbnQpIHtcblx0XHQvLyB0aGlzIHVzZXMgdGhlIEVTMjAxNysgbG9naWMsIHNpbmNlIGl0IGZpeGVzIGEgbnVtYmVyIG9mIGJ1Z3MgaW4gdGhlIEVTMjAxNSBsb2dpYy5cblx0XHR2YXIgb1R5cGUgPSB0aGlzLlR5cGUoTyk7XG5cdFx0aWYgKG9UeXBlICE9PSAnVW5kZWZpbmVkJyAmJiBvVHlwZSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBPIG11c3QgYmUgdW5kZWZpbmVkIG9yIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKGV4dGVuc2libGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBleHRlbnNpYmxlIG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmICghaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoY3VycmVudCkgIT09ICdVbmRlZmluZWQnICYmICFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBjdXJyZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGN1cnJlbnQgbXVzdCBiZSBhIFByb3BlcnR5IERlc2NyaXB0b3IsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnICYmICF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBpZiBPIGlzIG5vdCB1bmRlZmluZWQsIFAgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKGN1cnJlbnQpID09PSAnVW5kZWZpbmVkJykge1xuXHRcdFx0aWYgKCFleHRlbnNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRcdGlmIChvVHlwZSAhPT0gJ1VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHREZWZpbmVPd25Qcm9wZXJ0eSh0aGlzLCBPLCBQLCB7XG5cdFx0XHRcdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSxcblx0XHRcdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6IERlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tWYWx1ZV1dJzogRGVzY1snW1tWYWx1ZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tXcml0YWJsZV1dJzogRGVzY1snW1tXcml0YWJsZV1dJ11cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgaXMgbm90IGFuIGFjY2Vzc29yIGRlc2NyaXB0b3InKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIERlZmluZU93blByb3BlcnR5KHRoaXMsIE8sIFAsIERlc2MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSAmJiAhKCdbW0NvbmZpZ3VyYWJsZV1dJyBpbiBEZXNjKSAmJiAhKCdbW0VudW1lcmFibGVdXScgaW4gRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIERlc2MsIGN1cnJlbnQpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlZCBieSBFUzIwMTcsIGJ1dCBzaG91bGQgc3RpbGwgYmUgY29ycmVjdFxuXHRcdH1cblx0XHQvLyBcImlmIGV2ZXJ5IGZpZWxkIGluIERlc2MgaXMgYWJzZW50LCByZXR1cm4gdHJ1ZVwiIGNhbid0IHJlYWxseSBtYXRjaCB0aGUgYXNzZXJ0aW9uIHRoYXQgaXQncyBhIFByb3BlcnR5IERlc2NyaXB0b3Jcblx0XHRpZiAoIWN1cnJlbnRbJ1tbQ29uZmlndXJhYmxlXV0nXSkge1xuXHRcdFx0aWYgKERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJ1tbRW51bWVyYWJsZV1dJyBpbiBEZXNjICYmICFEZXNjWydbW0VudW1lcmFibGVdXSddID09PSAhIWN1cnJlbnRbJ1tbRW51bWVyYWJsZV1dJ10pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHQvLyBubyBmdXJ0aGVyIHZhbGlkYXRpb24gaXMgcmVxdWlyZWQuXG5cdFx0fSBlbHNlIGlmICh0aGlzLklzRGF0YURlc2NyaXB0b3IoY3VycmVudCkgIT09IHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihjdXJyZW50KSkge1xuXHRcdFx0XHRpZiAob1R5cGUgIT09ICdVbmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0RGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0XHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiBjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10sXG5cdFx0XHRcdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBjdXJyZW50WydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRcdFx0J1tbR2V0XV0nOiB1bmRlZmluZWRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChvVHlwZSAhPT0gJ1VuZGVmaW5lZCcpIHtcblx0XHRcdFx0RGVmaW5lT3duUHJvcGVydHkodGhpcywgTywgUCwge1xuXHRcdFx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogY3VycmVudFsnW1tDb25maWd1cmFibGVdXSddLFxuXHRcdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6IGN1cnJlbnRbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdFx0J1tbVmFsdWVdXSc6IHVuZGVmaW5lZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihjdXJyZW50KSAmJiB0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdGlmICghY3VycmVudFsnW1tDb25maWd1cmFibGVdXSddICYmICFjdXJyZW50WydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0XHRpZiAoJ1tbV3JpdGFibGVdXScgaW4gRGVzYyAmJiBEZXNjWydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoJ1tbVmFsdWVdXScgaW4gRGVzYyAmJiAhdGhpcy5TYW1lVmFsdWUoRGVzY1snW1tWYWx1ZV1dJ10sIGN1cnJlbnRbJ1tbVmFsdWVdXSddKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoY3VycmVudCkgJiYgdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFjdXJyZW50WydbW0NvbmZpZ3VyYWJsZV1dJ10pIHtcblx0XHRcdFx0aWYgKCdbW1NldF1dJyBpbiBEZXNjICYmICF0aGlzLlNhbWVWYWx1ZShEZXNjWydbW1NldF1dJ10sIGN1cnJlbnRbJ1tbU2V0XV0nXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCdbW0dldF1dJyBpbiBEZXNjICYmICF0aGlzLlNhbWVWYWx1ZShEZXNjWydbW0dldF1dJ10sIGN1cnJlbnRbJ1tbR2V0XV0nXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBjdXJyZW50IGFuZCBEZXNjIGFyZSBub3QgYm90aCBkYXRhLCBib3RoIGFjY2Vzc29ycywgb3Igb25lIGFjY2Vzc29yIGFuZCBvbmUgZGF0YS4nKTtcblx0XHR9XG5cdFx0aWYgKG9UeXBlICE9PSAnVW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIERlZmluZU93blByb3BlcnR5KHRoaXMsIE8sIFAsIERlc2MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9yZGluYXJ5ZGVmaW5lb3ducHJvcGVydHlcblx0T3JkaW5hcnlEZWZpbmVPd25Qcm9wZXJ0eTogZnVuY3Rpb24gT3JkaW5hcnlEZWZpbmVPd25Qcm9wZXJ0eShPLCBQLCBEZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdGlmICghaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHRcdHZhciBkZXNjID0gJGdPUEQoTywgUCk7XG5cdFx0dmFyIGN1cnJlbnQgPSBkZXNjICYmIHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoZGVzYyk7XG5cdFx0dmFyIGV4dGVuc2libGUgPSB0aGlzLklzRXh0ZW5zaWJsZShPKTtcblx0XHRyZXR1cm4gdGhpcy5WYWxpZGF0ZUFuZEFwcGx5UHJvcGVydHlEZXNjcmlwdG9yKE8sIFAsIGV4dGVuc2libGUsIERlc2MsIGN1cnJlbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb3JkaW5hcnlnZXRvd25wcm9wZXJ0eVxuXHRPcmRpbmFyeUdldE93blByb3BlcnR5OiBmdW5jdGlvbiBPcmRpbmFyeUdldE93blByb3BlcnR5KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IE8gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoTywgUCkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fVxuXHRcdGlmICghJGdPUEQpIHtcblx0XHRcdC8vIEVTMyBmYWxsYmFja1xuXHRcdFx0dmFyIGFycmF5TGVuZ3RoID0gdGhpcy5Jc0FycmF5KE8pICYmIFAgPT09ICdsZW5ndGgnO1xuXHRcdFx0dmFyIHJlZ2V4TGFzdEluZGV4ID0gdGhpcy5Jc1JlZ0V4cChPKSAmJiBQID09PSAnbGFzdEluZGV4Jztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogIShhcnJheUxlbmd0aCB8fCByZWdleExhc3RJbmRleCksXG5cdFx0XHRcdCdbW0VudW1lcmFibGVdXSc6ICRpc0VudW1lcmFibGUoTywgUCksXG5cdFx0XHRcdCdbW1ZhbHVlXV0nOiBPW1BdLFxuXHRcdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuVG9Qcm9wZXJ0eURlc2NyaXB0b3IoJGdPUEQoTywgUCkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXljcmVhdGVcblx0QXJyYXlDcmVhdGU6IGZ1bmN0aW9uIEFycmF5Q3JlYXRlKGxlbmd0aCkge1xuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYGxlbmd0aGAgbXVzdCBiZSBhbiBpbnRlZ2VyIE51bWJlciA+PSAwJyk7XG5cdFx0fVxuXHRcdGlmIChsZW5ndGggPiBNQVhfQVJSQVlfTEVOR1RIKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFJhbmdlRXJyb3IoJ2xlbmd0aCBpcyBncmVhdGVyIHRoYW4gKDIqKjMyIC0gMSknKTtcblx0XHR9XG5cdFx0dmFyIHByb3RvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiAkQXJyYXlQcm90b3R5cGU7XG5cdFx0dmFyIEEgPSBbXTsgLy8gc3RlcHMgNSAtIDcsIGFuZCA5XG5cdFx0aWYgKHByb3RvICE9PSAkQXJyYXlQcm90b3R5cGUpIHsgLy8gc3RlcCA4XG5cdFx0XHRpZiAoISRzZXRQcm90bykge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdBcnJheUNyZWF0ZTogYSBgcHJvdG9gIGFyZ3VtZW50IHRoYXQgaXMgbm90IGBBcnJheS5wcm90b3R5cGVgIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYW4gZW52aXJvbm1lbnQgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHNldHRpbmcgdGhlIFtbUHJvdG90eXBlXV0nKTtcblx0XHRcdH1cblx0XHRcdCRzZXRQcm90byhBLCBwcm90byk7XG5cdFx0fVxuXHRcdGlmIChsZW5ndGggIT09IDApIHsgLy8gYnlwYXNzZXMgdGhlIG5lZWQgZm9yIHN0ZXAgMlxuXHRcdFx0QS5sZW5ndGggPSBsZW5ndGg7XG5cdFx0fVxuXHRcdC8qIHN0ZXAgMTAsIHRoZSBhYm92ZSBhcyBhIHNob3J0Y3V0IGZvciB0aGUgYmVsb3dcblx0XHR0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogZmFsc2UsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiBmYWxzZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiBsZW5ndGgsXG5cdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdH0pO1xuXHRcdCovXG5cdFx0cmV0dXJuIEE7XG5cdH0sXG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdEFycmF5U2V0TGVuZ3RoOiBmdW5jdGlvbiBBcnJheVNldExlbmd0aChBLCBEZXNjKSB7XG5cdFx0aWYgKCF0aGlzLklzQXJyYXkoQSkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBBIG11c3QgYmUgYW4gQXJyYXknKTtcblx0XHR9XG5cdFx0aWYgKCFpc1Byb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IERlc2MgbXVzdCBiZSBhIFByb3BlcnR5IERlc2NyaXB0b3InKTtcblx0XHR9XG5cdFx0aWYgKCEoJ1tbVmFsdWVdXScgaW4gRGVzYykpIHtcblx0XHRcdHJldHVybiB0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIERlc2MpO1xuXHRcdH1cblx0XHR2YXIgbmV3TGVuRGVzYyA9IGFzc2lnbih7fSwgRGVzYyk7XG5cdFx0dmFyIG5ld0xlbiA9IHRoaXMuVG9VaW50MzIoRGVzY1snW1tWYWx1ZV1dJ10pO1xuXHRcdHZhciBudW1iZXJMZW4gPSB0aGlzLlRvTnVtYmVyKERlc2NbJ1tbVmFsdWVdXSddKTtcblx0XHRpZiAobmV3TGVuICE9PSBudW1iZXJMZW4pIHtcblx0XHRcdHRocm93IG5ldyAkUmFuZ2VFcnJvcignSW52YWxpZCBhcnJheSBsZW5ndGgnKTtcblx0XHR9XG5cdFx0bmV3TGVuRGVzY1snW1tWYWx1ZV1dJ10gPSBuZXdMZW47XG5cdFx0dmFyIG9sZExlbkRlc2MgPSB0aGlzLk9yZGluYXJ5R2V0T3duUHJvcGVydHkoQSwgJ2xlbmd0aCcpO1xuXHRcdGlmICghdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKG9sZExlbkRlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYW4gYXJyYXkgaGFkIGEgbm9uLWRhdGEgZGVzY3JpcHRvciBvbiBgbGVuZ3RoYCcpO1xuXHRcdH1cblx0XHR2YXIgb2xkTGVuID0gb2xkTGVuRGVzY1snW1tWYWx1ZV1dJ107XG5cdFx0aWYgKG5ld0xlbiA+PSBvbGRMZW4pIHtcblx0XHRcdHJldHVybiB0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIG5ld0xlbkRlc2MpO1xuXHRcdH1cblx0XHRpZiAoIW9sZExlbkRlc2NbJ1tbV3JpdGFibGVdXSddKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBuZXdXcml0YWJsZTtcblx0XHRpZiAoISgnW1tXcml0YWJsZV1dJyBpbiBuZXdMZW5EZXNjKSB8fCBuZXdMZW5EZXNjWydbW1dyaXRhYmxlXV0nXSkge1xuXHRcdFx0bmV3V3JpdGFibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdXcml0YWJsZSA9IGZhbHNlO1xuXHRcdFx0bmV3TGVuRGVzY1snW1tXcml0YWJsZV1dJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR2YXIgc3VjY2VlZGVkID0gdGhpcy5PcmRpbmFyeURlZmluZU93blByb3BlcnR5KEEsICdsZW5ndGgnLCBuZXdMZW5EZXNjKTtcblx0XHRpZiAoIXN1Y2NlZWRlZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR3aGlsZSAobmV3TGVuIDwgb2xkTGVuKSB7XG5cdFx0XHRvbGRMZW4gLT0gMTtcblx0XHRcdHZhciBkZWxldGVTdWNjZWVkZWQgPSBkZWxldGUgQVt0aGlzLlRvU3RyaW5nKG9sZExlbildO1xuXHRcdFx0aWYgKCFkZWxldGVTdWNjZWVkZWQpIHtcblx0XHRcdFx0bmV3TGVuRGVzY1snW1tWYWx1ZV1dJ10gPSBvbGRMZW4gKyAxO1xuXHRcdFx0XHRpZiAoIW5ld1dyaXRhYmxlKSB7XG5cdFx0XHRcdFx0bmV3TGVuRGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLk9yZGluYXJ5RGVmaW5lT3duUHJvcGVydHkoQSwgJ2xlbmd0aCcsIG5ld0xlbkRlc2MpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIW5ld1dyaXRhYmxlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5PcmRpbmFyeURlZmluZU93blByb3BlcnR5KEEsICdsZW5ndGgnLCB7ICdbW1dyaXRhYmxlXV0nOiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVodG1sXG5cdENyZWF0ZUhUTUw6IGZ1bmN0aW9uIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHRhZykgIT09ICdTdHJpbmcnIHx8IHRoaXMuVHlwZShhdHRyaWJ1dGUpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGB0YWdgIGFuZCBgYXR0cmlidXRlYCBtdXN0IGJlIHN0cmluZ3MnKTtcblx0XHR9XG5cdFx0dmFyIHN0ciA9IHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpO1xuXHRcdHZhciBTID0gdGhpcy5Ub1N0cmluZyhzdHIpO1xuXHRcdHZhciBwMSA9ICc8JyArIHRhZztcblx0XHRpZiAoYXR0cmlidXRlICE9PSAnJykge1xuXHRcdFx0dmFyIFYgPSB0aGlzLlRvU3RyaW5nKHZhbHVlKTtcblx0XHRcdHZhciBlc2NhcGVkViA9ICRyZXBsYWNlKFYsIC9cXHgyMi9nLCAnJnF1b3Q7Jyk7XG5cdFx0XHRwMSArPSAnXFx4MjAnICsgYXR0cmlidXRlICsgJ1xceDNEXFx4MjInICsgZXNjYXBlZFYgKyAnXFx4MjInO1xuXHRcdH1cblx0XHRyZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG93bnByb3BlcnR5a2V5c1xuXHRHZXRPd25Qcm9wZXJ0eUtleXM6IGZ1bmN0aW9uIEdldE93blByb3BlcnR5S2V5cyhPLCBUeXBlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKFR5cGUgPT09ICdTeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gaGFzU3ltYm9scyAmJiAkZ09QUyA/ICRnT1BTKE8pIDogW107XG5cdFx0fVxuXHRcdGlmIChUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0aWYgKCEkZ09QTikge1xuXHRcdFx0XHRyZXR1cm4ga2V5cyhPKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkZ09QTihPKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBUeXBlYCBtdXN0IGJlIGBcIlN0cmluZ1wiYCBvciBgXCJTeW1ib2xcImAnKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXN5bWJvbGRlc2NyaXB0aXZlc3RyaW5nXG5cdFN5bWJvbERlc2NyaXB0aXZlU3RyaW5nOiBmdW5jdGlvbiBTeW1ib2xEZXNjcmlwdGl2ZVN0cmluZyhzeW0pIHtcblx0XHRpZiAodGhpcy5UeXBlKHN5bSkgIT09ICdTeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHN5bWAgbXVzdCBiZSBhIFN5bWJvbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gJFN5bWJvbFRvU3RyaW5nKHN5bSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRzdWJzdGl0dXRpb25cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLCBtYXgtcGFyYW1zLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdEdldFN1YnN0aXR1dGlvbjogZnVuY3Rpb24gR2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuXHRcdGlmICh0aGlzLlR5cGUobWF0Y2hlZCkgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYG1hdGNoZWRgIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIG1hdGNoTGVuZ3RoID0gbWF0Y2hlZC5sZW5ndGg7XG5cblx0XHRpZiAodGhpcy5UeXBlKHN0cikgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHN0cmAgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHR2YXIgc3RyaW5nTGVuZ3RoID0gc3RyLmxlbmd0aDtcblxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIocG9zaXRpb24pIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IHN0cmluZ0xlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBwb3NpdGlvbmAgbXVzdCBiZSBhIG5vbm5lZ2F0aXZlIGludGVnZXIsIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGxlbmd0aCBvZiBgc3RyaW5nYCwgZ290ICcgKyBpbnNwZWN0KHBvc2l0aW9uKSk7XG5cdFx0fVxuXG5cdFx0dmFyIEVTID0gdGhpcztcblx0XHR2YXIgaXNTdHJpbmdPckhvbGUgPSBmdW5jdGlvbiAoY2FwdHVyZSwgaW5kZXgsIGFycikgeyByZXR1cm4gRVMuVHlwZShjYXB0dXJlKSA9PT0gJ1N0cmluZycgfHwgIShpbmRleCBpbiBhcnIpOyB9O1xuXHRcdGlmICghdGhpcy5Jc0FycmF5KGNhcHR1cmVzKSB8fCAhZXZlcnkoY2FwdHVyZXMsIGlzU3RyaW5nT3JIb2xlKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGBjYXB0dXJlc2AgbXVzdCBiZSBhIExpc3Qgb2YgU3RyaW5ncywgZ290ICcgKyBpbnNwZWN0KGNhcHR1cmVzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuVHlwZShyZXBsYWNlbWVudCkgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogYHJlcGxhY2VtZW50YCBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXG5cdFx0dmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoTGVuZ3RoO1xuXHRcdHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuXG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVwbGFjZW1lbnQubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdC8vIGlmIHRoaXMgaXMgYSAkLCBhbmQgaXQncyBub3QgdGhlIGVuZCBvZiB0aGUgcmVwbGFjZW1lbnRcblx0XHRcdHZhciBjdXJyZW50ID0gcmVwbGFjZW1lbnRbaV07XG5cdFx0XHR2YXIgaXNMYXN0ID0gKGkgKyAxKSA+PSByZXBsYWNlbWVudC5sZW5ndGg7XG5cdFx0XHR2YXIgbmV4dElzTGFzdCA9IChpICsgMikgPj0gcmVwbGFjZW1lbnQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnQgPT09ICckJyAmJiAhaXNMYXN0KSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gcmVwbGFjZW1lbnRbaSArIDFdO1xuXHRcdFx0XHRpZiAobmV4dCA9PT0gJyQnKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9ICckJztcblx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV4dCA9PT0gJyYnKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IG1hdGNoZWQ7XG5cdFx0XHRcdFx0aSArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5leHQgPT09ICdgJykge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBwb3NpdGlvbiA9PT0gMCA/ICcnIDogc3RyU2xpY2Uoc3RyLCAwLCBwb3NpdGlvbiAtIDEpO1xuXHRcdFx0XHRcdGkgKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXh0ID09PSBcIidcIikge1xuXHRcdFx0XHRcdHJlc3VsdCArPSB0YWlsUG9zID49IHN0cmluZ0xlbmd0aCA/ICcnIDogc3RyU2xpY2Uoc3RyLCB0YWlsUG9zKTtcblx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG5leHROZXh0ID0gbmV4dElzTGFzdCA/IG51bGwgOiByZXBsYWNlbWVudFtpICsgMl07XG5cdFx0XHRcdFx0aWYgKGlzRGlnaXQobmV4dCkgJiYgbmV4dCAhPT0gJzAnICYmIChuZXh0SXNMYXN0IHx8ICFpc0RpZ2l0KG5leHROZXh0KSkpIHtcblx0XHRcdFx0XHRcdC8vICQxIHRocm91Z2ggJDksIGFuZCBub3QgZm9sbG93ZWQgYnkgYSBkaWdpdFxuXHRcdFx0XHRcdFx0dmFyIG4gPSBwYXJzZUludGVnZXIobmV4dCwgMTApO1xuXHRcdFx0XHRcdFx0Ly8gaWYgKG4gPiBtLCBpbXBsLWRlZmluZWQpXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gKG4gPD0gbSAmJiB0aGlzLlR5cGUoY2FwdHVyZXNbbiAtIDFdKSA9PT0gJ1VuZGVmaW5lZCcpID8gJycgOiBjYXB0dXJlc1tuIC0gMV07XG5cdFx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpc0RpZ2l0KG5leHQpICYmIChuZXh0SXNMYXN0IHx8IGlzRGlnaXQobmV4dE5leHQpKSkge1xuXHRcdFx0XHRcdFx0Ly8gJDAwIHRocm91Z2ggJDk5XG5cdFx0XHRcdFx0XHR2YXIgbm4gPSBuZXh0ICsgbmV4dE5leHQ7XG5cdFx0XHRcdFx0XHR2YXIgbm5JID0gcGFyc2VJbnRlZ2VyKG5uLCAxMCkgLSAxO1xuXHRcdFx0XHRcdFx0Ly8gaWYgbm4gPT09ICcwMCcgb3Igbm4gPiBtLCBpbXBsLWRlZmluZWRcblx0XHRcdFx0XHRcdHJlc3VsdCArPSAobm4gPD0gbSAmJiB0aGlzLlR5cGUoY2FwdHVyZXNbbm5JXSkgPT09ICdVbmRlZmluZWQnKSA/ICcnIDogY2FwdHVyZXNbbm5JXTtcblx0XHRcdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9ICckJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRoZSBmaW5hbCAkLCBvciBlbHNlIG5vdCBhICRcblx0XHRcdFx0cmVzdWx0ICs9IHJlcGxhY2VtZW50W2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59KTtcblxuZGVsZXRlIEVTNi5DaGVja09iamVjdENvZXJjaWJsZTsgLy8gcmVuYW1lZCBpbiBFUzYgdG8gUmVxdWlyZU9iamVjdENvZXJjaWJsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDE2NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIEVTMjAxNSA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2lnbicpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NhbGxCaW5kJyk7XG5cbnZhciAkYXJyYXlQdXNoID0gY2FsbEJpbmQoJEFycmF5LnByb3RvdHlwZS5wdXNoKTtcblxudmFyIEVTMjAxNiA9IGFzc2lnbihhc3NpZ24oe30sIEVTMjAxNSksIHtcblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWVub25udW1iZXJcblx0U2FtZVZhbHVlTm9uTnVtYmVyOiBmdW5jdGlvbiBTYW1lVmFsdWVOb25OdW1iZXIoeCwgeSkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHggIT09IHR5cGVvZiB5KSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTYW1lVmFsdWVOb25OdW1iZXIgcmVxdWlyZXMgdHdvIG5vbi1udW1iZXIgdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLlNhbWVWYWx1ZSh4LCB5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWl0ZXJhYmxldG9hcnJheWxpa2Vcblx0SXRlcmFibGVUb0FycmF5TGlrZTogZnVuY3Rpb24gSXRlcmFibGVUb0FycmF5TGlrZShpdGVtcykge1xuXHRcdHZhciB1c2luZ0l0ZXJhdG9yO1xuXHRcdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0XHR1c2luZ0l0ZXJhdG9yID0gdGhpcy5HZXRNZXRob2QoaXRlbXMsIFN5bWJvbC5pdGVyYXRvcik7XG5cdFx0fSBlbHNlIGlmICh0aGlzLklzQXJyYXkoaXRlbXMpKSB7XG5cdFx0XHR1c2luZ0l0ZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgaSA9IC0xO1xuXHRcdFx0XHR2YXIgYXJyID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbnZhbGlkLXRoaXNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRkb25lOiBpID49IGFyci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBhcnJbaV1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuVHlwZShpdGVtcykgPT09ICdTdHJpbmcnKSB7XG5cdFx0XHQvLyBmYWxsYmFjayBmb3Igc3RyaW5nc1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHVzaW5nSXRlcmF0b3IgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR2YXIgaXRlcmF0b3IgPSB0aGlzLkdldEl0ZXJhdG9yKGl0ZW1zLCB1c2luZ0l0ZXJhdG9yKTtcblx0XHRcdHZhciB2YWx1ZXMgPSBbXTtcblx0XHRcdHZhciBuZXh0ID0gdHJ1ZTtcblx0XHRcdHdoaWxlIChuZXh0KSB7XG5cdFx0XHRcdG5leHQgPSB0aGlzLkl0ZXJhdG9yU3RlcChpdGVyYXRvcik7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0dmFyIG5leHRWYWx1ZSA9IHRoaXMuSXRlcmF0b3JWYWx1ZShuZXh0KTtcblx0XHRcdFx0XHQkYXJyYXlQdXNoKHZhbHVlcywgbmV4dFZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5Ub09iamVjdChpdGVtcyk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTMjAxNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTYuanNcbi8vIG1vZHVsZSBpZCA9IDE2NzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyIEVTMjAxNiA9IHJlcXVpcmUoJy4vZXMyMDE2Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2lnbicpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuL2hlbHBlcnMvZm9yRWFjaCcpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NhbGxCaW5kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xudmFyICRpc0VudW1lcmFibGUgPSBjYWxsQmluZChHZXRJbnRyaW5zaWMoJyVPYmplY3RQcm90b3R5cGUlJykucHJvcGVydHlJc0VudW1lcmFibGUpO1xudmFyICRwdXNoQXBwbHkgPSBjYWxsQmluZC5hcHBseShHZXRJbnRyaW5zaWMoJyVBcnJheVByb3RvdHlwZSUnKS5wdXNoKTtcbnZhciAkYXJyYXlQdXNoID0gY2FsbEJpbmQoJEFycmF5LnByb3RvdHlwZS5wdXNoKTtcblxudmFyIEVTMjAxNyA9IGFzc2lnbihhc3NpZ24oe30sIEVTMjAxNiksIHtcblx0VG9JbmRleDogZnVuY3Rpb24gVG9JbmRleCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0dmFyIGludGVnZXJJbmRleCA9IHRoaXMuVG9JbnRlZ2VyKHZhbHVlKTtcblx0XHRpZiAoaW50ZWdlckluZGV4IDwgMCkge1xuXHRcdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2luZGV4IG11c3QgYmUgPj0gMCcpO1xuXHRcdH1cblx0XHR2YXIgaW5kZXggPSB0aGlzLlRvTGVuZ3RoKGludGVnZXJJbmRleCk7XG5cdFx0aWYgKCF0aGlzLlNhbWVWYWx1ZVplcm8oaW50ZWdlckluZGV4LCBpbmRleCkpIHtcblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdpbmRleCBtdXN0IGJlID49IDAgYW5kIDwgMiAqKiA1MyAtIDEnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNzZWMtZW51bWVyYWJsZW93bnByb3BlcnRpZXNcblx0RW51bWVyYWJsZU93blByb3BlcnRpZXM6IGZ1bmN0aW9uIEVudW1lcmFibGVPd25Qcm9wZXJ0aWVzKE8sIGtpbmQpIHtcblx0XHR2YXIga2V5cyA9IEVTMjAxNi5FbnVtZXJhYmxlT3duTmFtZXMoTyk7XG5cdFx0aWYgKGtpbmQgPT09ICdrZXknKSB7XG5cdFx0XHRyZXR1cm4ga2V5cztcblx0XHR9XG5cdFx0aWYgKGtpbmQgPT09ICd2YWx1ZScgfHwga2luZCA9PT0gJ2tleSt2YWx1ZScpIHtcblx0XHRcdHZhciByZXN1bHRzID0gW107XG5cdFx0XHRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0aWYgKCRpc0VudW1lcmFibGUoTywga2V5KSkge1xuXHRcdFx0XHRcdCRwdXNoQXBwbHkocmVzdWx0cywgW1xuXHRcdFx0XHRcdFx0a2luZCA9PT0gJ3ZhbHVlJyA/IE9ba2V5XSA6IFtrZXksIE9ba2V5XV1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFwia2luZFwiIGlzIG5vdCBcImtleVwiLCBcInZhbHVlXCIsIG9yIFwia2V5K3ZhbHVlXCI6ICcgKyBraW5kKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jc2VjLWl0ZXJhYmxldG9saXN0XG5cdEl0ZXJhYmxlVG9MaXN0OiBmdW5jdGlvbiBJdGVyYWJsZVRvTGlzdChpdGVtcywgbWV0aG9kKSB7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5HZXRJdGVyYXRvcihpdGVtcywgbWV0aG9kKTtcblx0XHR2YXIgdmFsdWVzID0gW107XG5cdFx0dmFyIG5leHQgPSB0cnVlO1xuXHRcdHdoaWxlIChuZXh0KSB7XG5cdFx0XHRuZXh0ID0gdGhpcy5JdGVyYXRvclN0ZXAoaXRlcmF0b3IpO1xuXHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0dmFyIG5leHRWYWx1ZSA9IHRoaXMuSXRlcmF0b3JWYWx1ZShuZXh0KTtcblx0XHRcdFx0JGFycmF5UHVzaCh2YWx1ZXMsIG5leHRWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZXM7XG5cdH1cbn0pO1xuXG5kZWxldGUgRVMyMDE3LkVudW1lcmFibGVPd25OYW1lczsgLy8gcmVwbGFjZWQgd2l0aCBFbnVtZXJhYmxlT3duUHJvcGVydGllc1xuZGVsZXRlIEVTMjAxNy5JdGVyYWJsZVRvQXJyYXlMaWtlOyAvLyByZXBsYWNlZCB3aXRoIEl0ZXJhYmxlVG9MaXN0XG5cbm1vZHVsZS5leHBvcnRzID0gRVMyMDE3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzMjAxNy5qc1xuLy8gbW9kdWxlIGlkID0gMTY3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTdHJpbmcgPSBHZXRJbnRyaW5zaWMoJyVTdHJpbmclJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciBpc1Byb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1Byb3BlcnR5RGVzY3JpcHRvcicpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2NhbGxCaW5kJyk7XG52YXIgc3RyU2xpY2UgPSBjYWxsQmluZCgkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG5cbnZhciBpc1ByZWZpeE9mID0gZnVuY3Rpb24gaXNQcmVmaXhPZihwcmVmaXgsIHN0cmluZykge1xuXHRpZiAocHJlZml4ID09PSBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAocHJlZml4Lmxlbmd0aCA+IHN0cmluZy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHN0clNsaWNlKHN0cmluZywgMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeDtcbn07XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gJFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRyZXR1cm4gaXNQcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgRGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuMVxuXHRJc0FjY2Vzc29yRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSAmJiAhaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4yXG5cdElzRGF0YURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzRGF0YURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpICYmICFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuM1xuXHRJc0dlbmVyaWNEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSAmJiAhdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNFxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IERlc2NbJ1tbVmFsdWVdXSddLFxuXHRcdFx0XHR3cml0YWJsZTogISFEZXNjWydbW1dyaXRhYmxlXV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Z2V0OiBEZXNjWydbW0dldF1dJ10sXG5cdFx0XHRcdHNldDogRGVzY1snW1tTZXRdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdGcm9tUHJvcGVydHlEZXNjcmlwdG9yIG11c3QgYmUgY2FsbGVkIHdpdGggYSBmdWxseSBwb3B1bGF0ZWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC41XG5cdFRvUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBUb1Byb3BlcnR5RGVzY3JpcHRvcihPYmopIHtcblx0XHRpZiAodGhpcy5UeXBlKE9iaikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignVG9Qcm9wZXJ0eURlc2NyaXB0b3IgcmVxdWlyZXMgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2MgPSB7fTtcblx0XHRpZiAoaGFzKE9iaiwgJ2VudW1lcmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5lbnVtZXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdjb25maWd1cmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tDb25maWd1cmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmNvbmZpZ3VyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAndmFsdWUnKSkge1xuXHRcdFx0ZGVzY1snW1tWYWx1ZV1dJ10gPSBPYmoudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnd3JpdGFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tXcml0YWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmoud3JpdGFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2dldCcpKSB7XG5cdFx0XHR2YXIgZ2V0dGVyID0gT2JqLmdldDtcblx0XHRcdGlmICh0eXBlb2YgZ2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKGdldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tHZXRdXSddID0gZ2V0dGVyO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3NldCcpKSB7XG5cdFx0XHR2YXIgc2V0dGVyID0gT2JqLnNldDtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKHNldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ3NldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGRlc2NbJ1tbU2V0XV0nXSA9IHNldHRlcjtcblx0XHR9XG5cblx0XHRpZiAoKGhhcyhkZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhkZXNjLCAnW1tTZXRdXScpKSAmJiAoaGFzKGRlc2MsICdbW1ZhbHVlXV0nKSB8fCBoYXMoZGVzYywgJ1tbV3JpdGFibGVdXScpKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0ludmFsaWQgcHJvcGVydHkgZGVzY3JpcHRvci4gQ2Fubm90IGJvdGggc3BlY2lmeSBhY2Nlc3NvcnMgYW5kIGEgdmFsdWUgb3Igd3JpdGFibGUgYXR0cmlidXRlJyk7XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtMTEuOS4zXG5cdCdBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gQWJzdHJhY3RFcXVhbGl0eUNvbXBhcmlzb24oeCwgeSkge1xuXHRcdHZhciB4VHlwZSA9IHRoaXMuVHlwZSh4KTtcblx0XHR2YXIgeVR5cGUgPSB0aGlzLlR5cGUoeSk7XG5cdFx0aWYgKHhUeXBlID09PSB5VHlwZSkge1xuXHRcdFx0cmV0dXJuIHggPT09IHk7IC8vIEVTNisgc3BlY2lmaWVkIHRoaXMgc2hvcnRjdXQgYW55d2F5cy5cblx0XHR9XG5cdFx0aWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoeFR5cGUgPT09ICdOdW1iZXInICYmIHlUeXBlID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnU3RyaW5nJyAmJiB5VHlwZSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10odGhpcy5Ub051bWJlcih4KSwgeSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9OdW1iZXIoeCksIHkpO1xuXHRcdH1cblx0XHRpZiAoeVR5cGUgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ0Fic3RyYWN0IEVxdWFsaXR5IENvbXBhcmlzb24nXSh4LCB0aGlzLlRvTnVtYmVyKHkpKTtcblx0XHR9XG5cdFx0aWYgKCh4VHlwZSA9PT0gJ1N0cmluZycgfHwgeFR5cGUgPT09ICdOdW1iZXInKSAmJiB5VHlwZSA9PT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiB0aGlzWydBYnN0cmFjdCBFcXVhbGl0eSBDb21wYXJpc29uJ10oeCwgdGhpcy5Ub1ByaW1pdGl2ZSh5KSk7XG5cdFx0fVxuXHRcdGlmICh4VHlwZSA9PT0gJ09iamVjdCcgJiYgKHlUeXBlID09PSAnU3RyaW5nJyB8fCB5VHlwZSA9PT0gJ051bWJlcicpKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snQWJzdHJhY3QgRXF1YWxpdHkgQ29tcGFyaXNvbiddKHRoaXMuVG9QcmltaXRpdmUoeCksIHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xMS45LjZcblx0J1N0cmljdCBFcXVhbGl0eSBDb21wYXJpc29uJzogZnVuY3Rpb24gU3RyaWN0RXF1YWxpdHlDb21wYXJpc29uKHgsIHkpIHtcblx0XHR2YXIgeFR5cGUgPSB0aGlzLlR5cGUoeCk7XG5cdFx0dmFyIHlUeXBlID0gdGhpcy5UeXBlKHkpO1xuXHRcdGlmICh4VHlwZSAhPT0geVR5cGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHhUeXBlID09PSAnVW5kZWZpbmVkJyB8fCB4VHlwZSA9PT0gJ051bGwnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHggPT09IHk7IC8vIHNob3J0Y3V0IGZvciBzdGVwcyA0LTdcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTExLjguNVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcblx0J0Fic3RyYWN0IFJlbGF0aW9uYWwgQ29tcGFyaXNvbic6IGZ1bmN0aW9uIEFic3RyYWN0UmVsYXRpb25hbENvbXBhcmlzb24oeCwgeSwgTGVmdEZpcnN0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShMZWZ0Rmlyc3QpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBMZWZ0Rmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0dmFyIHB4O1xuXHRcdHZhciBweTtcblx0XHRpZiAoTGVmdEZpcnN0KSB7XG5cdFx0XHRweCA9IHRoaXMuVG9QcmltaXRpdmUoeCwgJE51bWJlcik7XG5cdFx0XHRweSA9IHRoaXMuVG9QcmltaXRpdmUoeSwgJE51bWJlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB5ID0gdGhpcy5Ub1ByaW1pdGl2ZSh5LCAkTnVtYmVyKTtcblx0XHRcdHB4ID0gdGhpcy5Ub1ByaW1pdGl2ZSh4LCAkTnVtYmVyKTtcblx0XHR9XG5cdFx0dmFyIGJvdGhTdHJpbmdzID0gdGhpcy5UeXBlKHB4KSA9PT0gJ1N0cmluZycgJiYgdGhpcy5UeXBlKHB5KSA9PT0gJ1N0cmluZyc7XG5cdFx0aWYgKCFib3RoU3RyaW5ncykge1xuXHRcdFx0dmFyIG54ID0gdGhpcy5Ub051bWJlcihweCk7XG5cdFx0XHR2YXIgbnkgPSB0aGlzLlRvTnVtYmVyKHB5KTtcblx0XHRcdGlmICgkaXNOYU4obngpIHx8ICRpc05hTihueSkpIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkaXNGaW5pdGUobngpICYmICRpc0Zpbml0ZShueSkgJiYgbnggPT09IG55KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChueCA9PT0gMCAmJiBueSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnggPT09IEluZmluaXR5KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChueSA9PT0gSW5maW5pdHkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnkgPT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnggPT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBueCA8IG55OyAvLyBieSBub3csIHRoZXNlIGFyZSBib3RoIG5vbnplcm8sIGZpbml0ZSwgYW5kIG5vdCBlcXVhbFxuXHRcdH1cblx0XHRpZiAoaXNQcmVmaXhPZihweSwgcHgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChpc1ByZWZpeE9mKHB4LCBweSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gcHggPCBweTsgLy8gYm90aCBzdHJpbmdzLCBuZWl0aGVyIGEgcHJlZml4IG9mIHRoZSBvdGhlci4gc2hvcnRjdXQgZm9yIHN0ZXBzIGMtZlxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDE2NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV2ZXJ5ID0gcmVxdWlyZSgnLi9ldmVyeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU2FtZVByb3BlcnR5RGVzY3JpcHRvcihFUywgRDEsIEQyKSB7XG5cdHZhciBmaWVsZHMgPSBbXG5cdFx0J1tbQ29uZmlndXJhYmxlXV0nLFxuXHRcdCdbW0VudW1lcmFibGVdXScsXG5cdFx0J1tbR2V0XV0nLFxuXHRcdCdbW1NldF1dJyxcblx0XHQnW1tWYWx1ZV1dJyxcblx0XHQnW1tXcml0YWJsZV1dJ1xuXHRdO1xuXHRyZXR1cm4gZXZlcnkoZmllbGRzLCBmdW5jdGlvbiAoZmllbGQpIHtcblx0XHRpZiAoKGZpZWxkIGluIEQxKSAhPT0gKGZpZWxkIGluIEQyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRVMuU2FtZVZhbHVlKEQxW2ZpZWxkXSwgRDJbZmllbGRdKTtcblx0fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNTYW1lUHJvcGVydHlEZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cblx0cmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoYXJndW1lbnRzWzFdID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDE2Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEyLjhcbnZhciBFUzVpbnRlcm5hbFNsb3RzID0ge1xuXHQnW1tEZWZhdWx0VmFsdWVdXSc6IGZ1bmN0aW9uIChPKSB7XG5cdFx0dmFyIGFjdHVhbEhpbnQ7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhY3R1YWxIaW50ID0gYXJndW1lbnRzWzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhY3R1YWxIaW50ID0gdG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyO1xuXHRcdH1cblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOS4xXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0KSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0cmV0dXJuIEVTNWludGVybmFsU2xvdHNbJ1tbRGVmYXVsdFZhbHVlXV0nXShpbnB1dCwgYXJndW1lbnRzWzFdKTtcblx0fVxuXHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gMTY3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIGdsb2JhbEtleSA9ICdfXyBnbG9iYWwgY2FjaGUga2V5IF9fJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc1N5bWJvbChTeW1ib2woJ2ZvbycpKSAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdGdsb2JhbEtleSA9IFN5bWJvbFsnZm9yJ10oZ2xvYmFsS2V5KTtcbn1cblxudmFyIHRydWVUaHVuayA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRydWU7XG59O1xuXG52YXIgZW5zdXJlQ2FjaGUgPSBmdW5jdGlvbiBlbnN1cmVDYWNoZSgpIHtcblx0aWYgKCFnbG9iYWxbZ2xvYmFsS2V5XSkge1xuXHRcdHZhciBwcm9wZXJ0aWVzID0ge307XG5cdFx0cHJvcGVydGllc1tnbG9iYWxLZXldID0ge307XG5cdFx0dmFyIHByZWRpY2F0ZXMgPSB7fTtcblx0XHRwcmVkaWNhdGVzW2dsb2JhbEtleV0gPSB0cnVlVGh1bms7XG5cdFx0ZGVmaW5lKGdsb2JhbCwgcHJvcGVydGllcywgcHJlZGljYXRlcyk7XG5cdH1cblx0cmV0dXJuIGdsb2JhbFtnbG9iYWxLZXldO1xufTtcblxudmFyIGNhY2hlID0gZW5zdXJlQ2FjaGUoKTtcblxudmFyIGlzUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsKSB7XG5cdHJldHVybiB2YWwgPT09IG51bGwgfHwgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGdldFByaW1pdGl2ZUtleSA9IGZ1bmN0aW9uIGdldFByaW1pdGl2ZUtleSh2YWwpIHtcblx0aWYgKGlzU3ltYm9sKHZhbCkpIHtcblx0XHRyZXR1cm4gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsKTtcblx0fVxuXHRyZXR1cm4gdHlwZW9mIHZhbCArICcgfCAnICsgU3RyaW5nKHZhbCk7XG59O1xuXG52YXIgcmVxdWlyZVByaW1pdGl2ZUtleSA9IGZ1bmN0aW9uIHJlcXVpcmVQcmltaXRpdmVLZXkodmFsKSB7XG5cdGlmICghaXNQcmltaXRpdmUodmFsKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2tleSBtdXN0IG5vdCBiZSBhbiBvYmplY3QnKTtcblx0fVxufTtcblxudmFyIGdsb2JhbENhY2hlID0ge1xuXHRjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG5cdFx0ZGVsZXRlIGdsb2JhbFtnbG9iYWxLZXldO1xuXHRcdGNhY2hlID0gZW5zdXJlQ2FjaGUoKTtcblx0fSxcblxuXHQnZGVsZXRlJzogZnVuY3Rpb24gZGVsZXRlS2V5KGtleSkge1xuXHRcdHJlcXVpcmVQcmltaXRpdmVLZXkoa2V5KTtcblx0XHRkZWxldGUgY2FjaGVbZ2V0UHJpbWl0aXZlS2V5KGtleSldO1xuXHRcdHJldHVybiAhZ2xvYmFsQ2FjaGUuaGFzKGtleSk7XG5cdH0sXG5cblx0Z2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHJldHVybiBjYWNoZVtnZXRQcmltaXRpdmVLZXkoa2V5KV07XG5cdH0sXG5cblx0aGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHJldHVybiBnZXRQcmltaXRpdmVLZXkoa2V5KSBpbiBjYWNoZTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdFx0cmVxdWlyZVByaW1pdGl2ZUtleShrZXkpO1xuXHRcdHZhciBwcmltaXRpdmVLZXkgPSBnZXRQcmltaXRpdmVLZXkoa2V5KTtcblx0XHR2YXIgcHJvcHMgPSB7fTtcblx0XHRwcm9wc1twcmltaXRpdmVLZXldID0gdmFsdWU7XG5cdFx0dmFyIHByZWRpY2F0ZXMgPSB7fTtcblx0XHRwcmVkaWNhdGVzW3ByaW1pdGl2ZUtleV0gPSB0cnVlVGh1bms7XG5cdFx0ZGVmaW5lKGNhY2hlLCBwcm9wcywgcHJlZGljYXRlcyk7XG5cdFx0cmV0dXJuIGdsb2JhbENhY2hlLmhhcyhrZXkpO1xuXHR9LFxuXG5cdHNldElmTWlzc2luZ1RoZW5HZXQ6IGZ1bmN0aW9uIHNldElmTWlzc2luZ1RoZW5HZXQoa2V5LCB2YWx1ZVRodW5rKSB7XG5cdFx0aWYgKGdsb2JhbENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXHRcdHZhciBpdGVtID0gdmFsdWVUaHVuaygpO1xuXHRcdGdsb2JhbENhY2hlLnNldChrZXksIGl0ZW0pO1xuXHRcdHJldHVybiBpdGVtO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsb2JhbC1jYWNoZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTY4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTY4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTY5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBlbXB0eSAobnVsbC1sb2FkZXIpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRhdGVzL2xpYi9jc3MvX2RhdGVwaWNrZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBoYXNNYXAgPSB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIE1hcC5wcm90b3R5cGU7XG52YXIgbWFwU2l6ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIGhhc01hcCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTWFwLnByb3RvdHlwZSwgJ3NpemUnKSA6IG51bGw7XG52YXIgbWFwU2l6ZSA9IGhhc01hcCAmJiBtYXBTaXplRGVzY3JpcHRvciAmJiB0eXBlb2YgbWFwU2l6ZURlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nID8gbWFwU2l6ZURlc2NyaXB0b3IuZ2V0IDogbnVsbDtcbnZhciBtYXBGb3JFYWNoID0gaGFzTWFwICYmIE1hcC5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIFNldC5wcm90b3R5cGU7XG52YXIgc2V0U2l6ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIGhhc1NldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU2V0LnByb3RvdHlwZSwgJ3NpemUnKSA6IG51bGw7XG52YXIgc2V0U2l6ZSA9IGhhc1NldCAmJiBzZXRTaXplRGVzY3JpcHRvciAmJiB0eXBlb2Ygc2V0U2l6ZURlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nID8gc2V0U2l6ZURlc2NyaXB0b3IuZ2V0IDogbnVsbDtcbnZhciBzZXRGb3JFYWNoID0gaGFzU2V0ICYmIFNldC5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBib29sZWFuVmFsdWVPZiA9IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2Y7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGJpZ0ludFZhbHVlT2YgPSB0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nID8gQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mIDogbnVsbDtcblxudmFyIGluc3BlY3RDdXN0b20gPSByZXF1aXJlKCcuL3V0aWwuaW5zcGVjdCcpLmN1c3RvbTtcbnZhciBpbnNwZWN0U3ltYm9sID0gKGluc3BlY3RDdXN0b20gJiYgaXNTeW1ib2woaW5zcGVjdEN1c3RvbSkpID8gaW5zcGVjdEN1c3RvbSA6IG51bGw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5zcGVjdF8gKG9iaiwgb3B0cywgZGVwdGgsIHNlZW4pIHtcbiAgICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuICAgIGlmIChoYXMob3B0cywgJ3F1b3RlU3R5bGUnKSAmJiAob3B0cy5xdW90ZVN0eWxlICE9PSAnc2luZ2xlJyAmJiBvcHRzLnF1b3RlU3R5bGUgIT09ICdkb3VibGUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJxdW90ZVN0eWxlXCIgbXVzdCBiZSBcInNpbmdsZVwiIG9yIFwiZG91YmxlXCInKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIG9iaiA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnNwZWN0U3RyaW5nKG9iaiwgb3B0cyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKG9iaiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gSW5maW5pdHkgLyBvYmogPiAwID8gJzAnIDogJy0wJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdiaWdpbnQnKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKG9iaikgKyAnbic7XG4gICAgfVxuXG4gICAgdmFyIG1heERlcHRoID0gdHlwZW9mIG9wdHMuZGVwdGggPT09ICd1bmRlZmluZWQnID8gNSA6IG9wdHMuZGVwdGg7XG4gICAgaWYgKHR5cGVvZiBkZXB0aCA9PT0gJ3VuZGVmaW5lZCcpIGRlcHRoID0gMDtcbiAgICBpZiAoZGVwdGggPj0gbWF4RGVwdGggJiYgbWF4RGVwdGggPiAwICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiAnW09iamVjdF0nO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VlbiA9PT0gJ3VuZGVmaW5lZCcpIHNlZW4gPSBbXTtcbiAgICBlbHNlIGlmIChpbmRleE9mKHNlZW4sIG9iaikgPj0gMCkge1xuICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3QgKHZhbHVlLCBmcm9tKSB7XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBzZWVuID0gc2Vlbi5zbGljZSgpO1xuICAgICAgICAgICAgc2Vlbi5wdXNoKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0Xyh2YWx1ZSwgb3B0cywgZGVwdGggKyAxLCBzZWVuKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVPZihvYmopO1xuICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbicgKyAobmFtZSA/ICc6ICcgKyBuYW1lIDogJycpICsgJ10nO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wob2JqKSkge1xuICAgICAgICB2YXIgc3ltU3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyA/IG1hcmtCb3hlZChzeW1TdHJpbmcpIDogc3ltU3RyaW5nO1xuICAgIH1cbiAgICBpZiAoaXNFbGVtZW50KG9iaikpIHtcbiAgICAgICAgdmFyIHMgPSAnPCcgKyBTdHJpbmcob2JqLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgYXR0cnMgPSBvYmouYXR0cmlidXRlcyB8fCBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcyArPSAnICcgKyBhdHRyc1tpXS5uYW1lICsgJz0nICsgd3JhcFF1b3RlcyhxdW90ZShhdHRyc1tpXS52YWx1ZSksICdkb3VibGUnLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBzICs9ICc+JztcbiAgICAgICAgaWYgKG9iai5jaGlsZE5vZGVzICYmIG9iai5jaGlsZE5vZGVzLmxlbmd0aCkgcyArPSAnLi4uJztcbiAgICAgICAgcyArPSAnPC8nICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKSArICc+JztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKG9iai5sZW5ndGggPT09IDApIHJldHVybiAnW10nO1xuICAgICAgICByZXR1cm4gJ1sgJyArIGFyck9iaktleXMob2JqLCBpbnNwZWN0KS5qb2luKCcsICcpICsgJyBdJztcbiAgICB9XG4gICAgaWYgKGlzRXJyb3Iob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHJldHVybiAnWycgKyBTdHJpbmcob2JqKSArICddJztcbiAgICAgICAgcmV0dXJuICd7IFsnICsgU3RyaW5nKG9iaikgKyAnXSAnICsgcGFydHMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaW5zcGVjdFN5bWJvbCAmJiB0eXBlb2Ygb2JqW2luc3BlY3RTeW1ib2xdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2luc3BlY3RTeW1ib2xdKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iai5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmluc3BlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNNYXAob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgbWFwRm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5zcGVjdChrZXksIG9iaikgKyAnID0+ICcgKyBpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uT2YoJ01hcCcsIG1hcFNpemUuY2FsbChvYmopLCBwYXJ0cyk7XG4gICAgfVxuICAgIGlmIChpc1NldChvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBzZXRGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUgKSB7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignU2V0Jywgc2V0U2l6ZS5jYWxsKG9iaiksIHBhcnRzKTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KE51bWJlcihvYmopKSk7XG4gICAgfVxuICAgIGlmIChpc0JpZ0ludChvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChiaWdJbnRWYWx1ZU9mLmNhbGwob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChib29sZWFuVmFsdWVPZi5jYWxsKG9iaikpO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoU3RyaW5nKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKCFpc0RhdGUob2JqKSAmJiAhaXNSZWdFeHAob2JqKSkge1xuICAgICAgICB2YXIgeHMgPSBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCk7XG4gICAgICAgIGlmICh4cy5sZW5ndGggPT09IDApIHJldHVybiAne30nO1xuICAgICAgICByZXR1cm4gJ3sgJyArIHhzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKG9iaik7XG59O1xuXG5mdW5jdGlvbiB3cmFwUXVvdGVzIChzLCBkZWZhdWx0U3R5bGUsIG9wdHMpIHtcbiAgICB2YXIgcXVvdGVDaGFyID0gKG9wdHMucXVvdGVTdHlsZSB8fCBkZWZhdWx0U3R5bGUpID09PSAnZG91YmxlJyA/ICdcIicgOiBcIidcIjtcbiAgICByZXR1cm4gcXVvdGVDaGFyICsgcyArIHF1b3RlQ2hhcjtcbn1cblxuZnVuY3Rpb24gcXVvdGUgKHMpIHtcbiAgICByZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBBcnJheV0nOyB9XG5mdW5jdGlvbiBpc0RhdGUgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nOyB9XG5mdW5jdGlvbiBpc1JlZ0V4cCAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBSZWdFeHBdJzsgfVxuZnVuY3Rpb24gaXNFcnJvciAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBFcnJvcl0nOyB9XG5mdW5jdGlvbiBpc1N5bWJvbCAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBTeW1ib2xdJzsgfVxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7IH1cbmZ1bmN0aW9uIGlzTnVtYmVyIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nOyB9XG5mdW5jdGlvbiBpc0JpZ0ludCAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBCaWdJbnRdJzsgfVxuZnVuY3Rpb24gaXNCb29sZWFuIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJzsgfVxuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgaW4gdGhpczsgfTtcbmZ1bmN0aW9uIGhhcyAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufVxuXG5mdW5jdGlvbiB0b1N0ciAob2JqKSB7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gbmFtZU9mIChmKSB7XG4gICAgaWYgKGYubmFtZSkgcmV0dXJuIGYubmFtZTtcbiAgICB2YXIgbSA9IFN0cmluZyhmKS5tYXRjaCgvXmZ1bmN0aW9uXFxzKihbXFx3JF0rKS8pO1xuICAgIGlmIChtKSByZXR1cm4gbVsxXTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZiAoeHMsIHgpIHtcbiAgICBpZiAoeHMuaW5kZXhPZikgcmV0dXJuIHhzLmluZGV4T2YoeCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBpc01hcCAoeCkge1xuICAgIGlmICghbWFwU2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIG1hcFNpemUuY2FsbCh4KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFNpemUuY2FsbCh4KTtcbiAgICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBNYXA7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1NldCAoeCkge1xuICAgIGlmICghc2V0U2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHNldFNpemUuY2FsbCh4KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1hcFNpemUuY2FsbCh4KTtcbiAgICAgICAgfSBjYXRjaCAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBTZXQ7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQgKHgpIHtcbiAgICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgeCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHgubm9kZU5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHR5cGVvZiB4LmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgIDtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFN0cmluZyAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIHMgPSBzdHIucmVwbGFjZSgvKFsnXFxcXF0pL2csICdcXFxcJDEnKS5yZXBsYWNlKC9bXFx4MDAtXFx4MWZdL2csIGxvd2J5dGUpO1xuICAgIHJldHVybiB3cmFwUXVvdGVzKHMsICdzaW5nbGUnLCBvcHRzKTtcbn1cblxuZnVuY3Rpb24gbG93Ynl0ZSAoYykge1xuICAgIHZhciBuID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB4ID0geyA4OiAnYicsIDk6ICd0JywgMTA6ICduJywgMTI6ICdmJywgMTM6ICdyJyB9W25dO1xuICAgIGlmICh4KSByZXR1cm4gJ1xcXFwnICsgeDtcbiAgICByZXR1cm4gJ1xcXFx4JyArIChuIDwgMHgxMCA/ICcwJyA6ICcnKSArIG4udG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBtYXJrQm94ZWQgKHN0cikge1xuICAgIHJldHVybiAnT2JqZWN0KCcgKyBzdHIgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3Rpb25PZiAodHlwZSwgc2l6ZSwgZW50cmllcykge1xuICAgIHJldHVybiB0eXBlICsgJyAoJyArIHNpemUgKyAnKSB7JyArIGVudHJpZXMuam9pbignLCAnKSArICd9Jztcbn1cblxuZnVuY3Rpb24gYXJyT2JqS2V5cyAob2JqLCBpbnNwZWN0KSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShvYmopO1xuICAgIHZhciB4cyA9IFtdO1xuICAgIGlmIChpc0Fycikge1xuICAgICAgICB4cy5sZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHNbaV0gPSBoYXMob2JqLCBpKSA/IGluc3BlY3Qob2JqW2ldLCBvYmopIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIWhhcyhvYmosIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoaXNBcnIgJiYgU3RyaW5nKE51bWJlcihrZXkpKSA9PT0ga2V5ICYmIGtleSA8IG9iai5sZW5ndGgpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoL1teXFx3JF0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgeHMucHVzaChpbnNwZWN0KGtleSwgb2JqKSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhzLnB1c2goa2V5ICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4cztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtaW5zcGVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTczNVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3V0aWwnKS5pbnNwZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1pbnNwZWN0L3V0aWwuaW5zcGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTczNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxucmVxdWlyZSgnLi9saWIvaW5pdGlhbGl6ZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRhdGVzL2luaXRpYWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDE3NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuKDAsIF9yZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWVbXCJkZWZhdWx0XCJdKSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvaW5pdGlhbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTc0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGNvcmUgPSB7XG4gIHdoaXRlOiAnI2ZmZicsXG4gIGdyYXk6ICcjNDg0ODQ4JyxcbiAgZ3JheUxpZ2h0OiAnIzgyODg4YScsXG4gIGdyYXlMaWdodGVyOiAnI2NhY2NjZCcsXG4gIGdyYXlMaWdodGVzdDogJyNmMmYyZjInLFxuICBib3JkZXJNZWRpdW06ICcjYzRjNGM0JyxcbiAgYm9yZGVyOiAnI2RiZGJkYicsXG4gIGJvcmRlckxpZ2h0OiAnI2U0ZTdlNycsXG4gIGJvcmRlckxpZ2h0ZXI6ICcjZWNlZWVlJyxcbiAgYm9yZGVyQnJpZ2h0OiAnI2Y0ZjVmNScsXG4gIHByaW1hcnk6ICcjMDBhNjk5JyxcbiAgcHJpbWFyeVNoYWRlXzE6ICcjMzNkYWNkJyxcbiAgcHJpbWFyeVNoYWRlXzI6ICcjNjZlMmRhJyxcbiAgcHJpbWFyeVNoYWRlXzM6ICcjODBlOGUwJyxcbiAgcHJpbWFyeVNoYWRlXzQ6ICcjYjJmMWVjJyxcbiAgcHJpbWFyeV9kYXJrOiAnIzAwODQ4OScsXG4gIHNlY29uZGFyeTogJyMwMDdhODcnLFxuICB5ZWxsb3c6ICcjZmZlOGJjJyxcbiAgeWVsbG93X2Rhcms6ICcjZmZjZTcxJ1xufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmVhY3REYXRlczoge1xuICAgIHpJbmRleDogMCxcbiAgICBib3JkZXI6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm9yZGVyVG9wOiAwLFxuICAgICAgICBib3JkZXJSaWdodDogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgYm9yZGVyTGVmdDogMCxcbiAgICAgICAgb3V0bGluZUZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlckZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlclRvcEZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlckxlZnRGb2N1c2VkOiAwLFxuICAgICAgICBib3JkZXJCb3R0b21Gb2N1c2VkOiBcIjJweCBzb2xpZCBcIi5jb25jYXQoY29yZS5wcmltYXJ5X2RhcmspLFxuICAgICAgICBib3JkZXJSaWdodEZvY3VzZWQ6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgfSxcbiAgICAgIHBpY2tlcklucHV0OiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgY29yZTogY29yZSxcbiAgICAgIGRpc2FibGVkOiBjb3JlLmdyYXlMaWdodGVzdCxcbiAgICAgIGJhY2tncm91bmQ6IGNvcmUud2hpdGUsXG4gICAgICBiYWNrZ3JvdW5kRGFyazogJyNmMmYyZjInLFxuICAgICAgYmFja2dyb3VuZEZvY3VzZWQ6IGNvcmUud2hpdGUsXG4gICAgICBib3JkZXI6ICdyZ2IoMjE5LCAyMTksIDIxOSknLFxuICAgICAgdGV4dDogY29yZS5ncmF5LFxuICAgICAgdGV4dERpc2FibGVkOiBjb3JlLmJvcmRlcixcbiAgICAgIHRleHRGb2N1c2VkOiAnIzAwN2E4NycsXG4gICAgICBwbGFjZWhvbGRlclRleHQ6ICcjNzU3NTc1JyxcbiAgICAgIG91dHNpZGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUud2hpdGUsXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXksXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5ncmF5LFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS5ncmF5XG4gICAgICB9LFxuICAgICAgaGlnaGxpZ2h0ZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLnllbGxvdyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2FjdGl2ZTogY29yZS55ZWxsb3dfZGFyayxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLnllbGxvd19kYXJrLFxuICAgICAgICBjb2xvcjogY29yZS5ncmF5LFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheSxcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUuZ3JheVxuICAgICAgfSxcbiAgICAgIG1pbmltdW1OaWdodHM6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUud2hpdGUsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb3JlLmJvcmRlckxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyXG4gICAgICB9LFxuICAgICAgaG92ZXJlZFNwYW46IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3JlLnByaW1hcnlTaGFkZV80LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLnByaW1hcnlTaGFkZV8zLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfaG92ZXI6IGNvcmUucHJpbWFyeVNoYWRlXzQsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb3JlLnByaW1hcnlTaGFkZV8zLFxuICAgICAgICBib3JkZXJDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeVNoYWRlXzMsXG4gICAgICAgIGJvcmRlckNvbG9yX2hvdmVyOiBjb3JlLnByaW1hcnlTaGFkZV8zLFxuICAgICAgICBjb2xvcjogY29yZS5zZWNvbmRhcnksXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS5zZWNvbmRhcnksXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLnNlY29uZGFyeVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkU3Bhbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUucHJpbWFyeVNoYWRlXzIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeVNoYWRlXzEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5U2hhZGVfMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvcmUucHJpbWFyeVNoYWRlXzEsXG4gICAgICAgIGJvcmRlckNvbG9yX2FjdGl2ZTogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBjb2xvcjogY29yZS53aGl0ZSxcbiAgICAgICAgY29sb3JfYWN0aXZlOiBjb3JlLndoaXRlLFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS53aGl0ZVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfYWN0aXZlOiBjb3JlLnByaW1hcnksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcjogY29yZS5wcmltYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcl9hY3RpdmU6IGNvcmUucHJpbWFyeSxcbiAgICAgICAgYm9yZGVyQ29sb3JfaG92ZXI6IGNvcmUucHJpbWFyeSxcbiAgICAgICAgY29sb3I6IGNvcmUud2hpdGUsXG4gICAgICAgIGNvbG9yX2FjdGl2ZTogY29yZS53aGl0ZSxcbiAgICAgICAgY29sb3JfaG92ZXI6IGNvcmUud2hpdGVcbiAgICAgIH0sXG4gICAgICBibG9ja2VkX2NhbGVuZGFyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2FjdGl2ZTogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgYm9yZGVyQ29sb3JfYWN0aXZlOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBib3JkZXJDb2xvcl9ob3ZlcjogY29yZS5ncmF5TGlnaHRlcixcbiAgICAgICAgY29sb3I6IGNvcmUuZ3JheUxpZ2h0LFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0LFxuICAgICAgICBjb2xvcl9ob3ZlcjogY29yZS5ncmF5TGlnaHRcbiAgICAgIH0sXG4gICAgICBibG9ja2VkX291dF9vZl9yYW5nZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9hY3RpdmU6IGNvcmUud2hpdGUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl9ob3ZlcjogY29yZS53aGl0ZSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvcmUuYm9yZGVyTGlnaHQsXG4gICAgICAgIGJvcmRlckNvbG9yX2FjdGl2ZTogY29yZS5ib3JkZXJMaWdodCxcbiAgICAgICAgYm9yZGVyQ29sb3JfaG92ZXI6IGNvcmUuYm9yZGVyTGlnaHQsXG4gICAgICAgIGNvbG9yOiBjb3JlLmdyYXlMaWdodGVyLFxuICAgICAgICBjb2xvcl9hY3RpdmU6IGNvcmUuZ3JheUxpZ2h0ZXIsXG4gICAgICAgIGNvbG9yX2hvdmVyOiBjb3JlLmdyYXlMaWdodGVyXG4gICAgICB9XG4gICAgfSxcbiAgICBzcGFjaW5nOiB7XG4gICAgICBkYXlQaWNrZXJIb3Jpem9udGFsUGFkZGluZzogOSxcbiAgICAgIGNhcHRpb25QYWRkaW5nVG9wOiAyMixcbiAgICAgIGNhcHRpb25QYWRkaW5nQm90dG9tOiAzNyxcbiAgICAgIGlucHV0UGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1ZlcnRpY2FsOiB1bmRlZmluZWQsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdUb3A6IDExLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nQm90dG9tOiA5LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nSG9yaXpvbnRhbDogdW5kZWZpbmVkLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nTGVmdDogMTEsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdSaWdodDogMTEsXG4gICAgICBkaXNwbGF5VGV4dFBhZGRpbmdWZXJ0aWNhbF9zbWFsbDogdW5kZWZpbmVkLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nVG9wX3NtYWxsOiA3LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nQm90dG9tX3NtYWxsOiA1LFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nSG9yaXpvbnRhbF9zbWFsbDogdW5kZWZpbmVkLFxuICAgICAgZGlzcGxheVRleHRQYWRkaW5nTGVmdF9zbWFsbDogNyxcbiAgICAgIGRpc3BsYXlUZXh0UGFkZGluZ1JpZ2h0X3NtYWxsOiA3XG4gICAgfSxcbiAgICBzaXppbmc6IHtcbiAgICAgIGlucHV0V2lkdGg6IDEzMCxcbiAgICAgIGlucHV0V2lkdGhfc21hbGw6IDk3LFxuICAgICAgYXJyb3dXaWR0aDogMjRcbiAgICB9LFxuICAgIG5vU2Nyb2xsQmFyT25WZXJ0aWNhbFNjcm9sbGFibGU6IGZhbHNlLFxuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IDE0LFxuICAgICAgY2FwdGlvblNpemU6IDE4LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgc2l6ZTogMTksXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgICAgc2l6ZV9zbWFsbDogMTUsXG4gICAgICAgIGxpbmVIZWlnaHRfc21hbGw6ICcxOHB4JyxcbiAgICAgICAgbGV0dGVyU3BhY2luZ19zbWFsbDogJzAuMnB4JyxcbiAgICAgICAgc3R5bGVEaXNhYmxlZDogJ2l0YWxpYydcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvdGhlbWUvRGVmYXVsdFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWdpc3RlckNTU0ludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWU7XG5cbnZhciBfcmVhY3RXaXRoU3R5bGVzSW50ZXJmYWNlQ3NzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzc1wiKSk7XG5cbnZhciBfcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdpc3RlckludGVyZmFjZVdpdGhEZWZhdWx0VGhlbWVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDU1NJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lKCkge1xuICAoMCwgX3JlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZVtcImRlZmF1bHRcIl0pKF9yZWFjdFdpdGhTdHlsZXNJbnRlcmZhY2VDc3NbXCJkZWZhdWx0XCJdKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZGF0ZXMvbGliL3V0aWxzL3JlZ2lzdGVyQ1NTSW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTc1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lO1xuXG52YXIgX1RoZW1lZFN0eWxlU2hlZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC13aXRoLXN0eWxlcy9saWIvVGhlbWVkU3R5bGVTaGVldFwiKSk7XG5cbnZhciBfRGVmYXVsdFRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGhlbWUvRGVmYXVsdFRoZW1lXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJmYWNlV2l0aERlZmF1bHRUaGVtZShyZWFjdFdpdGhTdHlsZXNJbnRlcmZhY2UpIHtcbiAgX1RoZW1lZFN0eWxlU2hlZXRbXCJkZWZhdWx0XCJdLnJlZ2lzdGVySW50ZXJmYWNlKHJlYWN0V2l0aFN0eWxlc0ludGVyZmFjZSk7XG5cbiAgX1RoZW1lZFN0eWxlU2hlZXRbXCJkZWZhdWx0XCJdLnJlZ2lzdGVyVGhlbWUoX0RlZmF1bHRUaGVtZVtcImRlZmF1bHRcIl0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kYXRlcy9saWIvdXRpbHMvcmVnaXN0ZXJJbnRlcmZhY2VXaXRoRGVmYXVsdFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9FbGVtZW50cyA9IHJlcXVpcmUoJy4vRWxlbWVudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX2V4dHJhY3RPcHRpb25zID0gZnVuY3Rpb24gX2V4dHJhY3RPcHRpb25zKHByb3BzKSB7XG4gIHZhciBpZCA9IHByb3BzLmlkLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25SZWFkeSA9IHByb3BzLm9uUmVhZHksXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2lkJywgJ2NsYXNzTmFtZScsICdvbkNoYW5nZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvblJlYWR5J10pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxudmFyIGNhcGl0YWxpemVkID0gZnVuY3Rpb24gY2FwaXRhbGl6ZWQoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG52YXIgRWxlbWVudCA9IGZ1bmN0aW9uIEVsZW1lbnQodHlwZSkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgaG9jT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKF9jbGFzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBfY2xhc3MocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgX3RoaXMuaGFuZGxlUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICBfdGhpcy5fcmVmID0gcmVmO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX2VsZW1lbnQgPSBudWxsO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF9leHRyYWN0T3B0aW9ucyhfdGhpcy5wcm9wcyk7XG4gICAgICAvLyBXZSBrZWVwIHRyYWNrIG9mIHRoZSBleHRyYWN0ZWQgb3B0aW9ucyBvbiB0aGlzLl9vcHRpb25zIHRvIGF2b2lkIHJlLXJlbmRlcmluZy5cbiAgICAgIC8vIChXZSB3b3VsZCB1bm5lY2Vzc2FyaWx5IHJlLXJlbmRlciBpZiB3ZSB3ZXJlIHRyYWNraW5nIHRoZW0gd2l0aCBzdGF0ZS4pXG4gICAgICBfdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuY29udGV4dC5hZGRFbGVtZW50c0xvYWRMaXN0ZW5lcihmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50cy5jcmVhdGUodHlwZSwgX3RoaXMyLl9vcHRpb25zKTtcbiAgICAgICAgX3RoaXMyLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBfdGhpczIuX3NldHVwRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCk7XG5cbiAgICAgICAgZWxlbWVudC5tb3VudChfdGhpczIuX3JlZik7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgRWxlbWVudCBmb3IgYXV0b21hdGljIHRva2VuIC8gc291cmNlIGNyZWF0aW9uXG4gICAgICAgIGlmIChob2NPcHRpb25zLmltcGxpZWRUb2tlblR5cGUgfHwgaG9jT3B0aW9ucy5pbXBsaWVkU291cmNlVHlwZSkge1xuICAgICAgICAgIF90aGlzMi5jb250ZXh0LnJlZ2lzdGVyRWxlbWVudChlbGVtZW50LCBob2NPcHRpb25zLmltcGxpZWRUb2tlblR5cGUsIGhvY09wdGlvbnMuaW1wbGllZFNvdXJjZVR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvcHRpb25zID0gX2V4dHJhY3RPcHRpb25zKG5leHRQcm9wcyk7XG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoICE9PSAwICYmICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkob3B0aW9ucywgdGhpcy5fb3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnVucmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfY2xhc3MucHJvdG90eXBlLl9zZXR1cEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldHVwRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnQub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25SZWFkeShfdGhpczMuX2VsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uQ2hhbmdlKGNoYW5nZSk7XG4gICAgICB9KTtcblxuICAgICAgZWxlbWVudC5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgICByZXR1cm4gKF9wcm9wcyA9IF90aGlzMy5wcm9wcykub25CbHVyLmFwcGx5KF9wcm9wcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcHJvcHMyO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzMiA9IF90aGlzMy5wcm9wcykub25Gb2N1cy5hcHBseShfcHJvcHMyLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jbGFzcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICByZWY6IHRoaXMuaGFuZGxlUmVmXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9jbGFzcztcbiAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvblJlYWR5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgfSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uQmx1cjogbm9vcCxcbiAgICBvbkZvY3VzOiBub29wLFxuICAgIG9uUmVhZHk6IG5vb3BcbiAgfSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IF9FbGVtZW50cy5lbGVtZW50Q29udGV4dFR5cGVzLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBjYXBpdGFsaXplZCh0eXBlKSArICdFbGVtZW50JywgX3RlbXA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTc3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfRWxlbWVudHMgPSByZXF1aXJlKCcuL0VsZW1lbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIF9leHRyYWN0T3B0aW9ucyA9IGZ1bmN0aW9uIF9leHRyYWN0T3B0aW9ucyhwcm9wcykge1xuICB2YXIgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgICBvblJlYWR5ID0gcHJvcHMub25SZWFkeSxcbiAgICAgIHBheW1lbnRSZXF1ZXN0ID0gcHJvcHMucGF5bWVudFJlcXVlc3QsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2lkJywgJ2NsYXNzTmFtZScsICdvbkJsdXInLCAnb25DbGljaycsICdvbkZvY3VzJywgJ29uUmVhZHknLCAncGF5bWVudFJlcXVlc3QnXSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG52YXIgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50KHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZVJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLl9yZWYgPSByZWY7XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dHJhY3RPcHRpb25zKHByb3BzKTtcbiAgICAvLyBXZSBrZWVwIHRyYWNrIG9mIHRoZSBleHRyYWN0ZWQgb3B0aW9ucyBvbiB0aGlzLl9vcHRpb25zIHRvIGF2b2lkIHJlLXJlbmRlcmluZy5cbiAgICAvLyAoV2Ugd291bGQgdW5uZWNlc3NhcmlseSByZS1yZW5kZXIgaWYgd2Ugd2VyZSB0cmFja2luZyB0aGVtIHdpdGggc3RhdGUuKVxuICAgIF90aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNvbnRleHQuYWRkRWxlbWVudHNMb2FkTGlzdGVuZXIoZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgICBfdGhpczIuX2VsZW1lbnQgPSBlbGVtZW50cy5jcmVhdGUoJ3BheW1lbnRSZXF1ZXN0QnV0dG9uJywgX2V4dGVuZHMoe1xuICAgICAgICBwYXltZW50UmVxdWVzdDogX3RoaXMyLnByb3BzLnBheW1lbnRSZXF1ZXN0XG4gICAgICB9LCBfdGhpczIuX29wdGlvbnMpKTtcbiAgICAgIF90aGlzMi5fZWxlbWVudC5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KF90aGlzMi5fZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzMi5fZWxlbWVudC5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChfcHJvcHMgPSBfdGhpczIucHJvcHMpLm9uRm9jdXMuYXBwbHkoX3Byb3BzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBfdGhpczIuX2VsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3Byb3BzMjtcblxuICAgICAgICByZXR1cm4gKF9wcm9wczIgPSBfdGhpczIucHJvcHMpLm9uQ2xpY2suYXBwbHkoX3Byb3BzMiwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMyLl9lbGVtZW50Lm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3Byb3BzMztcblxuICAgICAgICByZXR1cm4gKF9wcm9wczMgPSBfdGhpczIucHJvcHMpLm9uQmx1ci5hcHBseShfcHJvcHMzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBfdGhpczIuX2VsZW1lbnQubW91bnQoX3RoaXMyLl9yZWYpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGF5bWVudFJlcXVlc3QgIT09IG5leHRQcm9wcy5wYXltZW50UmVxdWVzdCkge1xuICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBwcm9wIGNoYW5nZTogcGF5bWVudFJlcXVlc3QgaXMgbm90IGEgY3VzdG9taXphYmxlIHByb3BlcnR5LicpO1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IF9leHRyYWN0T3B0aW9ucyhuZXh0UHJvcHMpO1xuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggIT09IDAgJiYgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShvcHRpb25zLCB0aGlzLl9vcHRpb25zKSkge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLl9lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2VsZW1lbnQuZGVzdHJveSgpO1xuICB9O1xuXG4gIFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBQYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQucHJvcFR5cGVzID0ge1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25SZWFkeTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBwYXltZW50UmVxdWVzdDogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY2FuTWFrZVBheW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIG9uQmx1cjogbm9vcCxcbiAgb25DbGljazogbm9vcCxcbiAgb25Gb2N1czogbm9vcCxcbiAgb25SZWFkeTogbm9vcFxufTtcblBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5jb250ZXh0VHlwZXMgPSBfRWxlbWVudHMuZWxlbWVudENvbnRleHRUeXBlcztcbmV4cG9ydHMuZGVmYXVsdCA9IFBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9jb21wb25lbnRzL1BheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTc3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0VsZW1lbnRzID0gcmVxdWlyZSgnLi9FbGVtZW50cycpO1xuXG52YXIgX1Byb3ZpZGVyID0gcmVxdWlyZSgnLi9Qcm92aWRlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gcmVhY3QtcmVkdXggZG9lcyBhIGJ1bmNoIG9mIHN0dWZmIHdpdGggcHVyZSBjb21wb25lbnRzIC8gY2hlY2tpbmcgaWYgaXQgbmVlZHMgdG8gcmUtcmVuZGVyLlxuLy8gbm90IHN1cmUgaWYgd2UgbmVlZCB0byBkbyB0aGUgc2FtZS5cbnZhciBpbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfY29tcG9uZW50T3B0aW9ucyR3aXQgPSBjb21wb25lbnRPcHRpb25zLndpdGhSZWYsXG4gICAgICB3aXRoUmVmID0gX2NvbXBvbmVudE9wdGlvbnMkd2l0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9jb21wb25lbnRPcHRpb25zJHdpdDtcblxuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKF9jbGFzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBfY2xhc3MocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICBpZiAoIWNvbnRleHQgfHwgIWNvbnRleHQuZ2V0UmVnaXN0ZXJlZEVsZW1lbnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHRyeWluZyB0byBpbmplY3QgU3RyaXBlIGNvbnRleHQgb3V0c2lkZSBvZiBhbiBFbGVtZW50cyBjb250ZXh0LlxcblBsZWFzZSBiZSBzdXJlIHRoZSBjb21wb25lbnQgdGhhdCBjYWxscyBjcmVhdGVTb3VyY2Ugb3IgY3JlYXRlVG9rZW4gaXMgd2l0aGluIGFuIDxFbGVtZW50cz4gY29tcG9uZW50LicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgX3RoaXMuZmluZEVsZW1lbnQgPSBmdW5jdGlvbiAoZmlsdGVyQnksIHNwZWNpZmllZFR5cGUpIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gX3RoaXMuY29udGV4dC5nZXRSZWdpc3RlcmVkRWxlbWVudHMoKTtcbiAgICAgICAgdmFyIGZpbHRlcmVkRWxlbWVudHMgPSBhbGxFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZVtmaWx0ZXJCeV07XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWF0Y2hpbmdFbGVtZW50cyA9IHNwZWNpZmllZFR5cGUgPT09ICdhdXRvJyA/IGZpbHRlcmVkRWxlbWVudHMgOiBmaWx0ZXJlZEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlW2ZpbHRlckJ5XSA9PT0gc3BlY2lmaWVkVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRWxlbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoaW5nRWxlbWVudHNbMF0uZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGluZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBkaWQgbm90IHNwZWNpZnkgdGhlIHR5cGUgb2YgU291cmNlIG9yIFRva2VuIHRvIGNyZWF0ZS5cXG4gICAgICAgIFdlIGNvdWxkIG5vdCBpbmZlciB3aGljaCBFbGVtZW50IHlvdSB3YW50IHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlcXVpcmVFbGVtZW50ID0gZnVuY3Rpb24gKGZpbHRlckJ5LCBzcGVjaWZpZWRUeXBlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMuZmluZEVsZW1lbnQoZmlsdGVyQnksIHNwZWNpZmllZFR5cGUpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGRpZCBub3Qgc3BlY2lmeSB0aGUgdHlwZSBvZiBTb3VyY2Ugb3IgVG9rZW4gdG8gY3JlYXRlLlxcbiAgICAgICAgV2UgY291bGQgbm90IGluZmVyIHdoaWNoIEVsZW1lbnQgeW91IHdhbnQgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMud3JhcHBlZENyZWF0ZVRva2VuID0gZnVuY3Rpb24gKHN0cmlwZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB0b2tlblR5cGVPck9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgICAgIGlmICh0b2tlblR5cGVPck9wdGlvbnMgJiYgKHR5cGVvZiB0b2tlblR5cGVPck9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRva2VuVHlwZU9yT3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gRmlyc3QgYXJndW1lbnQgaXMgb3B0aW9uczsgaW5mZXIgdGhlIEVsZW1lbnQgYW5kIHRva2VuaXplXG4gICAgICAgICAgICB2YXIgb3B0cyA9IHRva2VuVHlwZU9yT3B0aW9ucztcblxuICAgICAgICAgICAgdmFyIHRva2VuVHlwZSA9IG9wdHMudHlwZSxcbiAgICAgICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFsndHlwZSddKTtcblxuICAgICAgICAgICAgdmFyIHNwZWNpZmllZFR5cGUgPSB0eXBlb2YgdG9rZW5UeXBlID09PSAnc3RyaW5nJyA/IHRva2VuVHlwZSA6ICdhdXRvJztcbiAgICAgICAgICAgIC8vIFNpbmNlIG9ubHkgb3B0aW9ucyB3ZXJlIHBhc3NlZCBpbiwgYSBjb3JyZXNwb25kaW5nIEVsZW1lbnQgbXVzdCBleGlzdFxuICAgICAgICAgICAgLy8gZm9yIHRoZSB0b2tlbml6YXRpb24gdG8gc3VjY2VlZCAtLSB0aHVzIHdlIGNhbGwgcmVxdWlyZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLnJlcXVpcmVFbGVtZW50KCdpbXBsaWVkVG9rZW5UeXBlJywgc3BlY2lmaWVkVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXBlLmNyZWF0ZVRva2VuKGVsZW1lbnQsIHJlc3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRva2VuVHlwZU9yT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0IGFyZ3VtZW50IGlzIHRva2VuIHR5cGU7IHRva2VuaXplIHdpdGggdG9rZW4gdHlwZSBhbmQgb3B0aW9uc1xuICAgICAgICAgICAgdmFyIF90b2tlblR5cGUgPSB0b2tlblR5cGVPck9wdGlvbnM7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXBlLmNyZWF0ZVRva2VuKF90b2tlblR5cGUsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIGJhZCB2YWx1ZSB3YXMgcGFzc2VkIGluIGZvciBvcHRpb25zLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvcHRpb25zIHBhc3NlZCB0byBjcmVhdGVUb2tlbi4gRXhwZWN0ZWQgYW4gb2JqZWN0LCBnb3QgJyArICh0eXBlb2YgdG9rZW5UeXBlT3JPcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0b2tlblR5cGVPck9wdGlvbnMpKSArICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMud3JhcHBlZENyZWF0ZVNvdXJjZSA9IGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgU291cmNlIHR5cGUgcGFzc2VkIHRvIGNyZWF0ZVNvdXJjZS4gRXhwZWN0ZWQgc3RyaW5nLCBnb3QgJyArIF90eXBlb2Yob3B0aW9ucy50eXBlKSArICcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMuZmluZEVsZW1lbnQoJ2ltcGxpZWRTb3VyY2VUeXBlJywgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIC8vIElmIGFuIEVsZW1lbnQgZXhpc3RzIGZvciB0aGUgc291cmNlIHR5cGUsIHVzZSB0aGF0IHRvIGNyZWF0ZSB0aGVcbiAgICAgICAgICAgICAgLy8gY29ycmVzcG9uZGluZyBzb3VyY2UuXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIE5PVEU6IHRoaXMgcHJldmVudHMgdXNlcnMgZnJvbSBpbmRlcGVuZGVudGx5IGNyZWF0aW5nIHNvdXJjZXMgb2ZcbiAgICAgICAgICAgICAgLy8gdHlwZSBgZm9vYCBpZiBhbiBFbGVtZW50IHRoYXQgY2FuIGNyZWF0ZSBgZm9vYCBzb3VyY2VzIGV4aXN0cyBpblxuICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCA8RWxlbWVudHMgLz4gY29udGV4dC5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0cmlwZS5jcmVhdGVTb3VyY2UoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBJZiBubyBFbGVtZW50IGV4aXN0cyBmb3IgdGhlIHNvdXJjZSB0eXBlLCBkaXJlY3RseSBjcmVhdGUgYSBzb3VyY2UuXG4gICAgICAgICAgICAgIHJldHVybiBzdHJpcGUuY3JlYXRlU291cmNlKG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIGJhZCB2YWx1ZSB3YXMgcGFzc2VkIGluIGZvciBvcHRpb25zLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvcHRpb25zIHBhc3NlZCB0byBjcmVhdGVTb3VyY2UuIEV4cGVjdGVkIGFuIG9iamVjdCwgZ290ICcgKyAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSArICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgaWYgKF90aGlzLmNvbnRleHQudGFnID09PSAnc3luYycpIHtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgc3RyaXBlOiBfdGhpcy5zdHJpcGVQcm9wcyhfdGhpcy5jb250ZXh0LnN0cmlwZSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHN0cmlwZTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jbGFzcy5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5jb250ZXh0LnRhZyA9PT0gJ2FzeW5jJykge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkU3RyaXBlTG9hZExpc3RlbmVyKGZ1bmN0aW9uIChzdHJpcGUpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RyaXBlOiBfdGhpczIuc3RyaXBlUHJvcHMoc3RyaXBlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gJ3N5bmMnLCBpdCdzIGFscmVhZHkgc2V0IGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5nZXRXcmFwcGVkSW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICBpZiAoIXdpdGhSZWYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyBhY2Nlc3MgdGhlIHdyYXBwZWQgaW5zdGFuY2UsIHRoZSBge3dpdGhSZWY6IHRydWV9YCBvcHRpb24gbXVzdCBiZSBzZXQgd2hlbiBjYWxsaW5nIGBpbmplY3RTdHJpcGUoKWAnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgX2NsYXNzLnByb3RvdHlwZS5zdHJpcGVQcm9wcyA9IGZ1bmN0aW9uIHN0cmlwZVByb3BzKHN0cmlwZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdHJpcGUsIHtcbiAgICAgICAgLy8gVGhlc2UgYXJlIHRoZSBvbmx5IGZ1bmN0aW9ucyB0aGF0IHRha2UgZWxlbWVudHMuXG4gICAgICAgIGNyZWF0ZVRva2VuOiB0aGlzLndyYXBwZWRDcmVhdGVUb2tlbihzdHJpcGUpLFxuICAgICAgICBjcmVhdGVTb3VyY2U6IHRoaXMud3JhcHBlZENyZWF0ZVNvdXJjZShzdHJpcGUpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRmluZHMgYW4gRWxlbWVudCBieSB0aGUgc3BlY2lmaWVkIHR5cGUsIGlmIG9uZSBleGlzdHMuXG4gICAgLy8gVGhyb3dzIGlmIG11bHRpcGxlIEVsZW1lbnRzIG1hdGNoLlxuXG5cbiAgICAvLyBSZXF1aXJlIHRoYXQgZXhhY3RseSBvbmUgRWxlbWVudCBpcyBmb3VuZCBmb3IgdGhlIHNwZWNpZmllZCB0eXBlLlxuICAgIC8vIFRocm93cyBpZiBubyBFbGVtZW50IGlzIGZvdW5kLlxuXG5cbiAgICAvLyBXcmFwcyBjcmVhdGVUb2tlbiBpbiBvcmRlciB0byBpbmZlciB0aGUgRWxlbWVudCB0aGF0IGlzIGJlaW5nIHRva2VuaXplZC5cblxuXG4gICAgLy8gV3JhcHMgY3JlYXRlU291cmNlIGluIG9yZGVyIHRvIGluZmVyIHRoZSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgdXNlZCBmb3JcbiAgICAvLyBzb3VyY2UgY3JlYXRpb24uXG5cblxuICAgIF9jbGFzcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBzdHJpcGU6IHRoaXMuc3RhdGUuc3RyaXBlLFxuICAgICAgICByZWY6IHdpdGhSZWYgPyBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIF90aGlzMy53cmFwcGVkSW5zdGFuY2UgPSBjO1xuICAgICAgICB9IDogbnVsbFxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX2NsYXNzO1xuICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCBfY2xhc3MuY29udGV4dFR5cGVzID0gX2V4dGVuZHMoe30sIF9Qcm92aWRlci5wcm92aWRlckNvbnRleHRUeXBlcywgX0VsZW1lbnRzLmluamVjdENvbnRleHRUeXBlcyksIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdJbmplY3RTdHJpcGUoJyArIChXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JykgKyAnKScsIF90ZW1wO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaW5qZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvbGliL2NvbXBvbmVudHMvaW5qZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSWRlYWxCYW5rRWxlbWVudCA9IGV4cG9ydHMuSWJhbkVsZW1lbnQgPSBleHBvcnRzLlBheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCA9IGV4cG9ydHMuUG9zdGFsQ29kZUVsZW1lbnQgPSBleHBvcnRzLkNhcmRDVkNFbGVtZW50ID0gZXhwb3J0cy5DYXJkRXhwaXJ5RWxlbWVudCA9IGV4cG9ydHMuQ2FyZE51bWJlckVsZW1lbnQgPSBleHBvcnRzLkNhcmRFbGVtZW50ID0gZXhwb3J0cy5FbGVtZW50cyA9IGV4cG9ydHMuaW5qZWN0U3RyaXBlID0gZXhwb3J0cy5TdHJpcGVQcm92aWRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Qcm92aWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Qcm92aWRlcicpO1xuXG52YXIgX1Byb3ZpZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb3ZpZGVyKTtcblxudmFyIF9pbmplY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5qZWN0Jyk7XG5cbnZhciBfaW5qZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luamVjdCk7XG5cbnZhciBfRWxlbWVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRWxlbWVudHMnKTtcblxudmFyIF9FbGVtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbGVtZW50cyk7XG5cbnZhciBfRWxlbWVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9FbGVtZW50Jyk7XG5cbnZhciBfRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbGVtZW50KTtcblxudmFyIF9QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50Jyk7XG5cbnZhciBfUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BheW1lbnRSZXF1ZXN0QnV0dG9uRWxlbWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIERlZmluZSBFbGVtZW50cywgYW5kIHJlZ2lzdGVyIHRoZWlyIGltcGxpZWQgdG9rZW4gLyBzb3VyY2UgdHlwZXMgZm9yXG4vLyBhdXRvbWF0aWMgdG9rZW4gLyBzb3VyY2UgY3JlYXRpb24uXG5cbi8vIENhcmRcbnZhciBDYXJkRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2NhcmQnLCB7XG4gIGltcGxpZWRUb2tlblR5cGU6ICdjYXJkJyxcbiAgaW1wbGllZFNvdXJjZVR5cGU6ICdjYXJkJ1xufSk7XG5cbi8vIFNwbGl0IEZpZWxkc1xuLy8gTm90ZTogd2Ugb25seSByZWdpc3RlciB0aGUgQ2FyZE51bWJlckVsZW1lbnQgZm9yIHNwbGl0IGZpZWxkcyBzbyB0aGF0IHdlIGhhdmVcbi8vIGEgdW5pcXVlIEVsZW1lbnQgdG8gaW5mZXIgd2hlbiBjYWxsaW5nIGB3cmFwcGVkQ3JlYXRlVG9rZW5gIG9yIGB3cmFwcGVkQ3JlYXRlU291cmNlYC5cblxudmFyIENhcmROdW1iZXJFbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnY2FyZE51bWJlcicsIHtcbiAgaW1wbGllZFRva2VuVHlwZTogJ2NhcmQnLFxuICBpbXBsaWVkU291cmNlVHlwZTogJ2NhcmQnXG59KTtcbnZhciBDYXJkRXhwaXJ5RWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2NhcmRFeHBpcnknKTtcbnZhciBDYXJkQ1ZDRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2NhcmRDdmMnKTtcbnZhciBQb3N0YWxDb2RlRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ3Bvc3RhbENvZGUnKTtcblxuLy8gSUJBTlxudmFyIEliYW5FbGVtZW50ID0gKDAsIF9FbGVtZW50Mi5kZWZhdWx0KSgnaWJhbicsIHtcbiAgaW1wbGllZFRva2VuVHlwZTogJ2JhbmtfYWNjb3VudCcsXG4gIGltcGxpZWRTb3VyY2VUeXBlOiAnc2VwYV9kZWJpdCdcbn0pO1xuXG4vLyBpREVBTCBCYW5rXG52YXIgSWRlYWxCYW5rRWxlbWVudCA9ICgwLCBfRWxlbWVudDIuZGVmYXVsdCkoJ2lkZWFsQmFuaycsIHsgaW1wbGllZFNvdXJjZVR5cGU6ICdpZGVhbCcgfSk7XG5cbmV4cG9ydHMuU3RyaXBlUHJvdmlkZXIgPSBfUHJvdmlkZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmluamVjdFN0cmlwZSA9IF9pbmplY3QyLmRlZmF1bHQ7XG5leHBvcnRzLkVsZW1lbnRzID0gX0VsZW1lbnRzMi5kZWZhdWx0O1xuZXhwb3J0cy5DYXJkRWxlbWVudCA9IENhcmRFbGVtZW50O1xuZXhwb3J0cy5DYXJkTnVtYmVyRWxlbWVudCA9IENhcmROdW1iZXJFbGVtZW50O1xuZXhwb3J0cy5DYXJkRXhwaXJ5RWxlbWVudCA9IENhcmRFeHBpcnlFbGVtZW50O1xuZXhwb3J0cy5DYXJkQ1ZDRWxlbWVudCA9IENhcmRDVkNFbGVtZW50O1xuZXhwb3J0cy5Qb3N0YWxDb2RlRWxlbWVudCA9IFBvc3RhbENvZGVFbGVtZW50O1xuZXhwb3J0cy5QYXltZW50UmVxdWVzdEJ1dHRvbkVsZW1lbnQgPSBfUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50Mi5kZWZhdWx0O1xuZXhwb3J0cy5JYmFuRWxlbWVudCA9IEliYW5FbGVtZW50O1xuZXhwb3J0cy5JZGVhbEJhbmtFbGVtZW50ID0gSWRlYWxCYW5rRWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc3RyaXBlLWVsZW1lbnRzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTc3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMTc4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zdHJpcGUtZWxlbWVudHMvfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMTc4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FycmF5UHJvdG90eXBlID0gcmVxdWlyZSgnYXJyYXkucHJvdG90eXBlLmZsYXQnKTtcblxudmFyIF9hcnJheVByb3RvdHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheVByb3RvdHlwZSk7XG5cbnZhciBfZ2xvYmFsQ2FjaGUgPSByZXF1aXJlKCdnbG9iYWwtY2FjaGUnKTtcblxudmFyIF9nbG9iYWxDYWNoZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nbG9iYWxDYWNoZSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi91dGlscy9jb25zdGFudHMnKTtcblxudmFyIF9nZXRDbGFzc05hbWUgPSByZXF1aXJlKCcuL3V0aWxzL2dldENsYXNzTmFtZScpO1xuXG52YXIgX2dldENsYXNzTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDbGFzc05hbWUpO1xuXG52YXIgX3NlcGFyYXRlU3R5bGVzMiA9IHJlcXVpcmUoJy4vdXRpbHMvc2VwYXJhdGVTdHlsZXMnKTtcblxudmFyIF9zZXBhcmF0ZVN0eWxlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXBhcmF0ZVN0eWxlczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogRnVuY3Rpb24gcmVxdWlyZWQgYXMgcGFydCBvZiB0aGUgcmVhY3Qtd2l0aC1zdHlsZXMgaW50ZXJmYWNlLiBQYXJzZXMgdGhlIHN0eWxlcyBwcm92aWRlZCBieVxuICogcmVhY3Qtd2l0aC1zdHlsZXMgdG8gcHJvZHVjZSBjbGFzcyBuYW1lcyBiYXNlZCBvbiB0aGUgc3R5bGUgbmFtZSBhbmQgb3B0aW9uYWxseSB0aGUgbmFtZXNwYWNlIGlmXG4gKiBhdmFpbGFibGUuXG4gKlxuICogc3R5bGVzT2JqZWN0IHtPYmplY3R9IFRoZSBzdHlsZXMgb2JqZWN0IHBhc3NlZCB0byB3aXRoU3R5bGVzLlxuICpcbiAqIFJldHVybiBhbiBvYmplY3QgbWFwcGluZyBzdHlsZSBuYW1lcyB0byBjbGFzcyBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKHN0eWxlc09iamVjdCkge1xuICB2YXIgc3R5bGVzVG9DbGFzc2VzID0ge307XG4gIHZhciBzdHlsZU5hbWVzID0gT2JqZWN0LmtleXMoc3R5bGVzT2JqZWN0KTtcbiAgdmFyIHNoYXJlZFN0YXRlID0gX2dsb2JhbENhY2hlMlsnZGVmYXVsdCddLmdldChfY29uc3RhbnRzLkdMT0JBTF9DQUNIRV9LRVkpIHx8IHt9O1xuICB2YXIgX3NoYXJlZFN0YXRlJG5hbWVzcGFjID0gc2hhcmVkU3RhdGUubmFtZXNwYWNlLFxuICAgICAgbmFtZXNwYWNlID0gX3NoYXJlZFN0YXRlJG5hbWVzcGFjID09PSB1bmRlZmluZWQgPyAnJyA6IF9zaGFyZWRTdGF0ZSRuYW1lc3BhYztcblxuICBzdHlsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2dldENsYXNzTmFtZTJbJ2RlZmF1bHQnXSkobmFtZXNwYWNlLCBzdHlsZU5hbWUpO1xuICAgIHN0eWxlc1RvQ2xhc3Nlc1tzdHlsZU5hbWVdID0gY2xhc3NOYW1lO1xuICB9KTtcbiAgcmV0dXJuIHN0eWxlc1RvQ2xhc3Nlcztcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHN0eWxlcyB0byBiZSBjb25zdW1lZCBieSBhIGNvbXBvbmVudC5cbiAqXG4gKiBzdHlsZXNBcnJheSB7QXJyYXl9IEFycmF5IG9mIHRoZSBmb2xsb3dpbmc6IHZhbHVlcyByZXR1cm5lZCBieSBjcmVhdGUsIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0c1xuICogcmVwcmVzZW50aW5nIGlubGluZSBzdHlsZXMsIG9yIGFycmF5cyB0aGVyZW9mLlxuICpcbiAqIFJldHVybiBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBjbGFzc05hbWUgYW5kIHN0eWxlIHByb3BlcnRpZXMgdG8gYmUgc3ByZWFkIG9uIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiByZXNvbHZlKHN0eWxlc0FycmF5KSB7XG4gIHZhciBmbGF0dGVuZWRTdHlsZXMgPSAoMCwgX2FycmF5UHJvdG90eXBlMlsnZGVmYXVsdCddKShzdHlsZXNBcnJheSwgSW5maW5pdHkpO1xuXG4gIHZhciBfc2VwYXJhdGVTdHlsZXMgPSAoMCwgX3NlcGFyYXRlU3R5bGVzM1snZGVmYXVsdCddKShmbGF0dGVuZWRTdHlsZXMpLFxuICAgICAgY2xhc3NOYW1lcyA9IF9zZXBhcmF0ZVN0eWxlcy5jbGFzc05hbWVzLFxuICAgICAgaGFzSW5saW5lU3R5bGVzID0gX3NlcGFyYXRlU3R5bGVzLmhhc0lubGluZVN0eWxlcyxcbiAgICAgIGlubGluZVN0eWxlcyA9IF9zZXBhcmF0ZVN0eWxlcy5pbmxpbmVTdHlsZXM7XG5cbiAgdmFyIHNwZWNpZmljQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMubWFwKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgIHJldHVybiBTdHJpbmcobmFtZSkgKyAnICcgKyBTdHJpbmcobmFtZSkgKyAnXycgKyBTdHJpbmcoaW5kZXggKyAxKTtcbiAgfSk7XG4gIHZhciBjbGFzc05hbWUgPSBzcGVjaWZpY0NsYXNzTmFtZXMuam9pbignICcpO1xuXG4gIHZhciByZXN1bHQgPSB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH07XG4gIGlmIChoYXNJbmxpbmVTdHlsZXMpIHJlc3VsdC5zdHlsZSA9IGlubGluZVN0eWxlcztcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0geyBjcmVhdGU6IGNyZWF0ZSwgcmVzb2x2ZTogcmVzb2x2ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBHTE9CQUxfQ0FDSEVfS0VZID0gJ3JlYWN0V2l0aFN0eWxlc0ludGVyZmFjZUNTUyc7XG52YXIgTUFYX1NQRUNJRklDSVRZID0gMjA7XG5cbmV4cG9ydHMuR0xPQkFMX0NBQ0hFX0tFWSA9IEdMT0JBTF9DQUNIRV9LRVk7XG5leHBvcnRzLk1BWF9TUEVDSUZJQ0lUWSA9IE1BWF9TUEVDSUZJQ0lUWTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9kaXN0L3V0aWxzL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTgwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZ2V0Q2xhc3NOYW1lO1xuLyoqXG4gKiBDb25zdHJ1Y3QgYSBjbGFzcyBuYW1lLlxuICpcbiAqIG5hbWVzcGFjZSB7U3RyaW5nfSBVc2VkIHRvIGNvbnN0cnVjdCB1bmlxdWUgY2xhc3MgbmFtZXMuXG4gKiBzdHlsZU5hbWUge1N0cmluZ30gTmFtZSBpZGVudGlmeWluZyB0aGUgc3BlY2lmaWMgc3R5bGUuXG4gKlxuICogUmV0dXJuIHRoZSBjbGFzcyBuYW1lLlxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUobmFtZXNwYWNlLCBzdHlsZU5hbWUpIHtcbiAgdmFyIG5hbWVzcGFjZVNlZ21lbnQgPSBuYW1lc3BhY2UubGVuZ3RoID4gMCA/IFN0cmluZyhuYW1lc3BhY2UpICsgJ19fJyA6ICcnO1xuICByZXR1cm4gJycgKyBuYW1lc3BhY2VTZWdtZW50ICsgU3RyaW5nKHN0eWxlTmFtZSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXdpdGgtc3R5bGVzLWludGVyZmFjZS1jc3MvZGlzdC91dGlscy9nZXRDbGFzc05hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE4MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gYXJyYXkgb2Ygc3R5bGVzIGFuZCBzZXBhcmF0ZXMgdGhlbSBpbnRvIHN0eWxlcyB0aGF0XG4vLyBhcmUgaGFuZGxlZCBieSBBcGhyb2RpdGUgYW5kIGlubGluZSBzdHlsZXMuXG5mdW5jdGlvbiBzZXBhcmF0ZVN0eWxlcyhzdHlsZXNBcnJheSkge1xuICB2YXIgY2xhc3NOYW1lcyA9IFtdO1xuXG4gIC8vIFNpbmNlIGRldGVybWluaW5nIGlmIGFuIE9iamVjdCBpcyBlbXB0eSByZXF1aXJlcyBjb2xsZWN0aW5nIGFsbCBvZiBpdHNcbiAgLy8ga2V5cywgYW5kIHdlIHdhbnQgdGhlIGJlc3QgcGVyZm9ybWFuY2UgaW4gdGhpcyBjb2RlIGJlY2F1c2Ugd2UgYXJlIGluIHRoZVxuICAvLyByZW5kZXIgcGF0aCwgd2UgYXJlIGdvaW5nIHRvIGRvIGEgbGl0dGxlIGJvb2trZWVwaW5nIG91cnNlbHZlcy5cbiAgdmFyIGhhc0lubGluZVN0eWxlcyA9IGZhbHNlO1xuICB2YXIgaW5saW5lU3R5bGVzID0ge307XG5cbiAgLy8gVGhpcyBpcyBydW4gb24gcG90ZW50aWFsbHkgZXZlcnkgbm9kZSBpbiB0aGUgdHJlZSB3aGVuIHJlbmRlcmluZywgd2hlcmVcbiAgLy8gcGVyZm9ybWFuY2UgaXMgY3JpdGljYWwuIE5vcm1hbGx5IHdlIHdvdWxkIHByZWZlciB1c2luZyBgZm9yRWFjaGAsIGJ1dFxuICAvLyBvbGQtZmFzaGlvbmVkIGZvciBsb29wcyBhcmUgZmFzdGVyIHNvIHRoYXQncyB3aGF0IHdlIGhhdmUgY2hvc2VuIGhlcmUuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBsdXNwbHVzXG4gICAgdmFyIHN0eWxlID0gc3R5bGVzQXJyYXlbaV07XG5cbiAgICAvLyBJZiB0aGlzICBzdHlsZSBpcyBmYWxzeSwgd2UganVzdCB3YW50IHRvIGRpc3JlZ2FyZCBpdC4gVGhpcyBhbGxvd3MgZm9yXG4gICAgLy8gc3ludGF4IGxpa2U6XG4gICAgLy9cbiAgICAvLyAgIGNzcyhpc0ZvbyAmJiBzdHlsZXMuZm9vKVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5saW5lU3R5bGVzLCBzdHlsZSk7XG4gICAgICAgIGhhc0lubGluZVN0eWxlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzLFxuICAgIGhhc0lubGluZVN0eWxlczogaGFzSW5saW5lU3R5bGVzLFxuICAgIGlubGluZVN0eWxlczogaW5saW5lU3R5bGVzXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNlcGFyYXRlU3R5bGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC13aXRoLXN0eWxlcy1pbnRlcmZhY2UtY3NzL2Rpc3QvdXRpbHMvc2VwYXJhdGVTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleC5qcycpLmRlZmF1bHQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtd2l0aC1zdHlsZXMtaW50ZXJmYWNlLWNzcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTgwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3R5bGVJbnRlcmZhY2UgPSB2b2lkIDA7XG52YXIgc3R5bGVUaGVtZSA9IHZvaWQgMDtcblxudmFyIFNUQVJUX01BUksgPSAncmVhY3Qtd2l0aC1zdHlsZXMucmVzb2x2ZS5zdGFydCc7XG52YXIgRU5EX01BUksgPSAncmVhY3Qtd2l0aC1zdHlsZXMucmVzb2x2ZS5lbmQnO1xudmFyIE1FQVNVUkVfTUFSSyA9ICdcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNDXFx1REZBOCBbcmVzb2x2ZV0nO1xuXG5mdW5jdGlvbiByZWdpc3RlclRoZW1lKHRoZW1lKSB7XG4gIHN0eWxlVGhlbWUgPSB0aGVtZTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmZhY2UoaW50ZXJmYWNlVG9SZWdpc3Rlcikge1xuICBzdHlsZUludGVyZmFjZSA9IGludGVyZmFjZVRvUmVnaXN0ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShtYWtlRnJvbVRoZW1lLCBjcmVhdGVXaXRoRGlyZWN0aW9uKSB7XG4gIHZhciBzdHlsZXMgPSBjcmVhdGVXaXRoRGlyZWN0aW9uKG1ha2VGcm9tVGhlbWUoc3R5bGVUaGVtZSkpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxUUihtYWtlRnJvbVRoZW1lKSB7XG4gIHJldHVybiBjcmVhdGUobWFrZUZyb21UaGVtZSwgc3R5bGVJbnRlcmZhY2UuY3JlYXRlTFRSIHx8IHN0eWxlSW50ZXJmYWNlLmNyZWF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJUTChtYWtlRnJvbVRoZW1lKSB7XG4gIHJldHVybiBjcmVhdGUobWFrZUZyb21UaGVtZSwgc3R5bGVJbnRlcmZhY2UuY3JlYXRlUlRMIHx8IHN0eWxlSW50ZXJmYWNlLmNyZWF0ZSk7XG59XG5cbmZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIHN0eWxlVGhlbWU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2UubWFyayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5jbGVhck1hcmtzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcyhTVEFSVF9NQVJLKTtcbiAgICBwZXJmb3JtYW5jZS5tYXJrKFNUQVJUX01BUkspO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0eWxlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBzdHlsZUludGVyZmFjZS5yZXNvbHZlKHN0eWxlcyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5tYXJrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLmNsZWFyTWFya3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwZXJmb3JtYW5jZS5jbGVhck1hcmtzKEVORF9NQVJLKTtcbiAgICBwZXJmb3JtYW5jZS5tYXJrKEVORF9NQVJLKTtcblxuICAgIHBlcmZvcm1hbmNlLm1lYXN1cmUoTUVBU1VSRV9NQVJLLCBTVEFSVF9NQVJLLCBFTkRfTUFSSyk7XG4gICAgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcyhNRUFTVVJFX01BUkspO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxUUigpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHN0eWxlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgaWYgKHN0eWxlSW50ZXJmYWNlLnJlc29sdmVMVFIpIHtcbiAgICByZXR1cm4gc3R5bGVJbnRlcmZhY2UucmVzb2x2ZUxUUihzdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmUoc3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJUTCgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHN0eWxlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgaWYgKHN0eWxlSW50ZXJmYWNlLnJlc29sdmVSVEwpIHtcbiAgICByZXR1cm4gc3R5bGVJbnRlcmZhY2UucmVzb2x2ZVJUTChzdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmUoc3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGlmIChzdHlsZUludGVyZmFjZS5mbHVzaCkge1xuICAgIHN0eWxlSW50ZXJmYWNlLmZsdXNoKCk7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICByZWdpc3RlclRoZW1lOiByZWdpc3RlclRoZW1lLFxuICByZWdpc3RlckludGVyZmFjZTogcmVnaXN0ZXJJbnRlcmZhY2UsXG4gIGNyZWF0ZTogY3JlYXRlTFRSLFxuICBjcmVhdGVMVFI6IGNyZWF0ZUxUUixcbiAgY3JlYXRlUlRMOiBjcmVhdGVSVEwsXG4gIGdldDogZ2V0LFxuICByZXNvbHZlOiByZXNvbHZlTFRSLFxuICByZXNvbHZlTFRSOiByZXNvbHZlTFRSLFxuICByZXNvbHZlUlRMOiByZXNvbHZlUlRMLFxuICBmbHVzaDogZmx1c2hcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXdpdGgtc3R5bGVzL2xpYi9UaGVtZWRTdHlsZVNoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVNFaFVRRXhNVkZoTVhGeG9WRnhVWUZ4WVdGeFVZRlJVWEZoVVpIUmNZSFNnZ0dCMG5IUlVZSVRFaEpTa3JMeTh3RnlBek9ETXROeWd0TGlzQkNnb0tEZzBPR3hBUUd5MG1JQ1l0TFRJeUx5MHVMUzB0TWk4dUxTMHRNQzh0TFMwdkxUQXRMUzB0TFMwdExTMHRMUzB0TFM4dkxTMHRMUzB0TFMwdExmL0FBQkVJQUdNQitnTUJFUUFDRVFFREVRSC94QUFjQUFFQUFnTUJBUUVBQUFBQUFBQUFBQUFBQlFZREJBY0JBZ2oveEFCTUVBQUJBd0lEQXdVTENBY0hCQU1BQUFBQkFBSURCQkVGRWlFR0V6RUhJa0ZSWVJReVVsUnhnWkdTazdIU0ZSWWpRM09Db2RFelFtSnlvckxCTkVSVFk0UGk4QmNrd3NNbHMvSC94QUFhQVFFQUFnTUJBQUFBQUFBQUFBQUFBQUFBQVFVQ0F3UUcvOFFBT2hFQUFnRUNBd1VFQ1FNREJBTUFBQUFBQUFFQ0F4RUVFaUVGTVVGUllSTnhrYUVVSWpKU2diSEIwZkFWWXVFak0wSTBRMU55Qm9MeC85b0FEQU1CQUFJUkF4RUFQd0R1S0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBRkFWSWJiRC9BUHIvd0MxZC9vUDd2SXIvVDE3dm1mWHp6SCtDZlgvQU5xZWcvdThoNmV2ZDh3ZHMvOEFJUHIvQU8xUFFmM2VROVBYdStaOG5iVWY0QjlmL2Fub1A3dkllbnIzZk14dTI2QStvUHRQOXFuMEQ5M2tQVC8yK1ppZHlnQWYzYyswSHdwNkIrN3lKOU9YdStaaWR5akFmM1krMEh3cWYwLzkza1BUVjd2bVluY3BnSDkyUHRSOENmcDc5N3lKOU5YdW53ZVZBZUtuMm8rQlQrbnYzdkluMHhjakdlVlFlS24ybytCUDA1Kzk1RStscmtmSjVWeDRvZmFqNEUvVG43M2tUNld1UlA3SGJaQ3ZmSkdJVEhrYUhYejVyM0pGdTlGdUM1OFJoZXhTZDczTmxLdDJqYXNXcGNwdkNBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ1BsN3dBU1NBQnFTZEFQT2hLVGJzaXVWMjNkQkViR2NQUCtXMTBnOVpvTGZ4V3Axb0xpZDlQWldLcWFxRnUvVDVtaU9VeWh2OWFPM2RuK2h1c2ZTSUcvOUV4WFR4SmZETnI2S29JYkhVTXpIZzE5NDNIc0FlQmZ6TE9OV0V0ek9TdHMvRTBsZVVIYm10VjVFNHRoeGhBYTFWWHh4ZCs5cmV3blgwY1N0RlhFMHFQOXlTUnRwMEtsVDJGY2ozN1RRRGdYSHlOUDliTGllMk1NdHpiK0RPcGJPcnZsNG4xRnRIVG45WXQ4clQ3d3NvYld3c3RNMXU5TXhscyt1dUYvaVNjRTdYak14d2NPc0VIM0x2aFVoVVY0Tk5kRGtsQ1VIYVNzWkZtWWhBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRSGhRSEtHdFY4ZWVNb1loQUxVQmllMVNEV2tDbEVtcktGSkpweUJTU2pVa0N5TWpYZWhrWVhLVEpHSnlFbCs1Ry8wOVI5bXorWXJnMmo3TWU4NnNKN1RPcnFwTzRJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnSUhhemFtS2hqdTduU3U3eUlHeGQyay9xdDdmUmRhNmxSUVIyNExBMU1WS3kwUzN2ODRuRzhmMmhxS3gxNW5rdHZwRU5JMjlWbTlKN1RjcmhuT1U5NTY3RFlPamhsYW10ZWZIODdpS1dKMGhBZUVJVGNzK3krMmxUU0ZyTG1hRzRHNmNTU1BzM2NXbnM0ZGc0clpDczRiOXhXNHpabEhFSnYyWmMvdjk5NTBMRk5wWFBHV0lGZ0kxSnRuMUhEVFJxcThadGVVdlZvYUxueCtISXA4UHM2TWRhbXI1Y0NBY2JtNTFKNGs4U3FWdTd1eXlXaXNnaElRR1NubmN4MlpqaTA5WS81cjUxblRxenBTelFkbVlUaEdhdEpYUmJjRHg4U2tSeVdFblFlaDM1SHMvOEF4ZWt3RzAxV2ZaMU5KZVQvQUpLWEY0RjAxbmhxdmtUcXR5dUNBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUR3b0RsYkZmSG5qTzFRUUhJREJJcEJxeUtTVFVsV1JKcVNLU1Vha3FsRW1zOVNabUI2a3lNVGtKTDl5Ti9wNmo3Tm44eFZmdEgyWTk1MVlYMm1kWFZVZHdRQkFhT0xWVDQydDNZYm1kSTFnelhzTXgxTmhxVUJqeTFmaFUvcXlmRWdHV3I4S245V1Q0a0F5MWZoVS9xeWZFZ0dXcjhLbjlXVDRrQXkxZmhVL3F5ZkVnR1dyOEtuOVdUNGtBeTFmaFUvcXlmRWdHV3I4S245V1Q0a0F5MWZoVS9xeWZFZ0dXcjhLbjlXVDRrQXkxZmhVL3F5ZkVnTVV0VFVSdWp6N2t0ZklHSEtIZ2pNRHFDU1IwSUNYUUdqamVKc3BZSktoL2VzRjdkTGp3YTBkcEpBODZ4bkpSVjJic1BRbFhxS25IZS96eU9BWXJpTWxUSytlVTNlODM3R2pvYU9wb0dnL01xdWNuSjNaN3FqUmhScHFuRGN2eTVxcURZRUFRQkFUR0ZZSkk5b21iSUk5VGwwTjdjTDNIRHBYQmlNWlRoSjA1UnZ6TkZTdEdMeXRYSnZEc1BuamZtZFBuYndMVG1QbkZ6b1Z3VnE5Q3BHMFlXZlBRNTZrNFNWbEd4TExqTkFRQkFFQVFGNDJjeFBmUjJjZWV6UTlvNkhmODZsNnpadUw5SXAybDdTMy9BSFBQWTNEOWxPOGR6L0xFc3JJNGpWckd6Y1luTUhZNXBOeis4RHA2RnpWMVgzMG11NXAvTlA2RzZrNlgrNG44SDlQNUlTcnhXcWlObnNhTzNLU0Q1dzVWTmJIWTJpLzZrVXV0bmJ4dVdGTEM0YXI3RGZqL0FBWUJ0SE4xTTlCL05hVnRmRWNVdkIvYzJ2WjFMcitmQXNsQlZDV05zZ0ZyOUhVUWJFZWtLL3c5WlZxYXFMaVZOYWs2YzNCbXd0eHFPUDRyeW9WUW1rRUloM1FlUXd1WTRrdEJzRGNQSEcxL09ycW5zNm5sV2E5eW9xYlFtcE5SdFlzbkozdFJXVjBraGxFUWhqYUxsckhBbDdqelJjdUl0WU9KODNXdVhHWWVsUmlzdDdzNmNKaUtsWnR5M0loZHFlVVdxZ3E1b0loRHUyT3lqTXh4T2pSbXVRNGZyWFcvRDRDbk9tcFN2ZG1pdmpwd3FPTWJFdnlkN1cxVmROSXlZUkJqSTgzTVk0SE1YQU4xTGpwWU9XbkdZV25SaW5HOTJic0ppWjFtODNBdVdMNHBGVFJHYVo0YXdla25vQUhFazlTNGFkT1ZTV1dLMU95YzR3V2FSekRHT1ZhWnhJcG9tc2IwT2s1N3oyMkJEVytUVlcxUFpzVjdidjNGWFUyay93REJlSkNIbER4Rzk5K1BKdTRyZnlyZjZCUTVlYk5IcDlibVdiWWpiMnJxS3FPbGxiRzlyODEzaHBhNW9heHpyNkd4NFc0ZEs1Y1ZncWRPbTV4dWRXRnhrNmsxQ1NPb3FwTFFyVzNPMVFvSW11RFErV1FrTWFUWWFDN25HMnRoY2NPa2hkV0Z3enJTdHdSelluRUtqRy9FNTBlVkt1OEdEMUgvQUJxei9UYVBYOCtCVy9xTlhraStjblcwOGxkRktac2dramVCWmdJR1J6UmwwSk90dy8wS3V4bUhqUmtzdTVsaGhNUTYwVzN2TGN1TTZ3Z1BDZ09VTmNyNDg4Wm11UWdGeUF3dmNwQnJ5RlNTYWtwVWttcElWSmtqVWxLeUpOWjZHUmhjcE1qRTVDUy9jamY2ZW8relovTVZ3YlI5bVBlZFdFOXBuVjFVbmNFQVFFYmpmMVAyOGZ2S0Fra0FRQkFFQVFCQUVBUUJBRUFRRVpqZjFIMjdQYzVBU2FBNWx5ellwWVEwMTdONTA3L0kzbXN2MmQrZnVoY3VJYmJVVWVoMkZTU1U2MHVHbjFmMEtoaSt5bFZTeGQwVE1hMk80Rjg3U2VkdzBDMHlwU2lyc3RxRzBLRmVlU0QxN3VSOVZPeUZYSEFhcDdHaUlNRWhPZHQ4cEFJNXZHK28wU1ZHY1Zka1U5cFllcFVWT0R1MzAwSURNT0Z4ZnFXczc3TTljNERpYklFbXpib3NPbGxhNlJqSE9qYjM4Z0YyUmkxeVhIZ0FCcjVFYWVWeVMzR21wV3AwNUtNbnE5eTRzazNZVlIrTkQxby95VmI2VmlmK1A1bUhhMXZjK1lPRTBualE5YVA4bFBwV0svNC9tTzFyZTc4eXk0TkdIdFpGRS9la2N3RUVFbXd2WTIwMEZ2TXErVkt0VnF0S0dyMXQ5ZFRocnpWTzhxbWhNMVdCVFJzTWpnM0tCYzJkcUZ1cTdOeEZLRG5KS3k2bkpUeHRHcExLbTc5eEdYVmZkSFhZOVFIaEtBbThFWStHV0dSMXNrd3NDQ0RjT0FMVDZTMzBxNXdsR3RoTVJCMUZaUzAzL25FcmNSVXA0aWpKUWQ4dXBkRjZZb3dnTlRGNlRmUVN3M0lMMk9hQ05DQ1J6U0QxZzJQbVV4dGRabGRjbnVJbGUyanN6ajJ6MjBwY1JEUG8vZ0g4TG5oWjNVZTMvaDRkc2Y4QWo2cHhkZkMrenZjZVhWYzEwNGNPbS9abTJzOHV4eEcvZytmZjFPbzdLUzNpYzN3WGZnUUQ3N3JtMlBPOUZ4NVA1Nm5WdEdOcWlmTkdEYi9GKzVxR1Y0Tm52RzZaMTVuNlhIYUc1bmZkVi9oS1hhVlV1RzhwOFZWN09tMmNBWG96enAzems5d2Z1V2lqYTRXa2srbGs2Q0M4Q3dQa2FHanpGZWR4bFh0S3JhM0xROUZoYVhaMGtqaG1LVk85bWxsOE9SNy9BRm5sMzlWZjA0NVlLUEpGQlZsbW0zMU9uY2l0TmFLb204SjdXZW8wdS84QVlxcmFjdldqRXRkbXg5UnNydkt4aXpwYTB3WE83aEFhQjBabk5Ebk84dGlCNWwwN1BwS05MTnhaemJRcXVWVEp3UkJiS1lFYTJwYlRoNFlDQzV6clhzMXRyMkhTZFI3K2hkR0lyZGpETlk1OE5SN1dlVzUwb2NsRkphMjlxTDllYVAzWkZWL3FWWGt2UDdscCtuVXViTTJ5MndIY1ZYM1FKdDVIdTNOQUxjcnc1eGJiaG9SWU8xMFdOZkc5dFR5dFdkektoZzFTcVprOUM4cmdPMDRQeWtZejNUV3ZzYnh4ZlJNNnVhZWVmTzYvbWFGNkRCVXV6cExtOVNoeDFYUFVzdHlLdzZNZ0J4QnNiMlBRYmFHM1d1dTYzSEk0dEs1ZmVScXN5MVVzUFJKRm0rOUc0Vy9CN3ZRcTdhVUwwMUxrL21XT3paV200bllsU2x3RUI0VUJ6bW13K0pzTEpwNVhzM2hka2ExdWE3VzlQL09zSzNsVm01T01GZXhUcWxCUVVwdTF6ZnFNRnA0NG16dW5mdTNrWkNHZ25WdVlYRnRPQld1TmVwS1Rpb3E2TTVZZW5HS201T3pQaG1CTWNXU01rY2Fjc2U5MGhBQmJrTmlMZGY1T1V2RU5YVFhyWFduZVFzTkZ0TlAxYlBYdU1NZUgwam1Qa0U4dVdQTG0rajRaelp1bHRkUXNuVnFwcU9WYTlTRlNvdE9TazlPaGhndzZqa2UyTnM4Mlp4QUgwZGhjOXRsTXFsYUt1NHJ4RWFWR1RTVW40R3BOUlVJSkJxWjlDUWZvcjZnMlBRcFU2Ny94WGlNbEZmNVB3UHI1Qm9peU4vZGNoYkxKdW1aWS93QllrV2E0RVhhZFJxVkhiMXJ0WlZvcjd6TlVhVms4ejFkdHhwNG5ndEJBOTBVdFpJWHRKdUdSWnNvNmlRQ0w5ZnVXVUsxYWF2R0MrTEVxVktEczVQd1BaOW5hQnM0cFRXVENVbHJmMFl5aHp3QzBGMXJEaVBTb1ZlczRaOHF0M21mWlVsTExtZHo0eExaZWhwNVcwODlYTTJWd2FkSXdXRE9iWHpXMEZ3ZVBCSVlpck9MbEdLdDNreXBVNHZLNU81c3liQjBySjRxU1NxbEU4alM4QnJHNVNHZ2s4NjJuZW5pc0ZqS2ppNXFLc2pMMGVLa290dTQ1SDIycWFrZFRHajBQY0UyZzd3aVRoZmFrZFZWVWRvUUJBUnVOL1UvYngrOG9DdWJlN1dWTkhVVWRMU3d4U3lWUmthTjQ1elFDemQyMUg3NTlDbEF4NEh0ek4zVzNEc1JwZTVxaVFFd3ZhL2VReld1U0E3OVU2SHI2dENRREJCQndjcXN4b0dWUGM4WnFacW8wa1VZY1d4M0FhY3puSDk2M1J4NkZMUkNkMFdyRHNlcklJcWliRklZWVk0V0I0bGhrTDJ5Q3h1QXdqTUNMQWNkUzRXVUVsZnBkcnNhcW8rN0tYRG9lNVRkMGJKWkNKcG1kRG0ySUF2MGFlUy9FeUM0VitOdUR0M0d3RjRBekUzczBrWHRZYWs2OWlyNitNY1o1S2F1K1BJc0tHRFVvWjZqc2pCSGprdXNibU1FamdSRTdYSVpMY3dPRjdnRTJGd1ZqUnhyYzFDcXJYNGsxc0hGUWM2VHZiZ2F1d2UySXJxTjlUTTBReVF2a1pPelcwWmo1M1RyM3BGKzBIcVZpVjVWbjhwbFdhQmxleW1pdE5WOXpRTWNYak16bmdQY2I4Y3pjdlZvVk5pTGtyaXUxT0tVZEhVMWRWUzB6ZDBJekdHU09lSGwwZ1k0TzZSWUc0U3dOZWgyOXJXVDAwRlpTUk03c1lYVTBrY3BMUy9LSE5hOEVYR3JtZ25vekRqclpZRnd4Qnp5eW1NalExNWxqTG1nM0FkbGRjQTlJdW9KSmhBY2Y1U1lOOWlzVVBFUEZQRmI5bDh6Zzc4SEVybnRmRUx4OExzOUZoWnFHeTZqNnRlTmw5UzZiVFUvZHpaS1BpMWxUQXg0Nm01WTVwUDRIVzg0WFM0Ym0rL3cva282TlowbTJ0N1RYam9hZTErSU9tdzlwWXplYitvWXlPTWZXUnNtekFEUTk5SEVUMWM3cVdGWEtySjd1aDBZQ00rMGJpMUZ4VDFlNWNQcnAxTnJDS0dXYThOWGh0TERBV0cyV1JyM0EzRm1sb1lMYUVuTURwWk1zSEhkOGpHZGFkT2VhRlZ0ODlmcVJlQzBqSU1PWlVVTkxGVnl1Y2MrWndEeUE1NGNNeGFTUzBnTnk2ZEo0OFk3S05QUzEvbWJaNHVyaXF2OEFVbms4YkxwcDh6QmhHTnRwOE1xOFNmQTB0bXFIT01Gd0doclRIVEZtcmVqZHVQZTZtNm02eUxUZnc3M3A5Q1owSlR4YnB4bjdQK1hTSzFmSGs3RWhSWUcramdoRU5GSFV6U0VPcUh1Y3htVU9zWEJ1WWNCbUlEZEJ6ZGRTb2hTakYydDhUR3ZqS21Jdkp6eTIzUjErbkhtM3ZGQnM3VHN4U290RXpkQ21qa0xDMXBZeDhza2dKQUlzTklTZE9zcUZTaXJ1eGxWeDllZEdFY3p1bSs5N3JmVTgyUXE0WFJWTmJUeFpHTStnaWFRQnpZMmh4Y2JkTG55WEo0a05iZmdzTVJValJ3N3FRWEJzMTFLZGFlSjdLdTlicSt0N1gxK1JFMm5MN3h2bGtlOXpBNk44c2pvM3RFalhQR1IyWnJUbGE0QWh1bCtwZWVvYlJxMXBxbFg5YUxlNUpYZWpzdUdsN1g2RmhWd2xPbkZ6cDZOY1czK1g1Rnd3NkdlUnhqcWFTblpDV1hEbVNabkIxd01wYmtGdENUbUIvVlYvMkZLcFR0S0Z1anQ5Q3BsVm5DVjR6YjhmcVJORlVNaXcrR2QwWW1ra2sraXVHRE1aNW5DQzU4RUI3QjBuUWNTdFVjSmg0UXB3Y1ZmVGhmVzEyMzV2bDVHeVZldEtjMm0rUGhmOFJreHFvaXBSRlN1Z0V6WkN5T2FTNGE4YjU0aURnTGE4NTE3QWl3NExHbkRDVTZxdzJYMW1yNnErN1hWODlPWGdaT1dJcVFkYStpMDMvSkdiYVI0Yk5CRzNRTURiRHF1NEFmeXF1MnRVZnBOTmNyUHhhK3gxYlBoL1FtK2YyL2t0aTlDVTRRQkFmbjNiekQ5eFh6c3R6Uy9lTjhrblA5NUk4eTlIaEo1Nk1YK2FIbnNYREpWWmZPU2ZHekxuaGVlZTFvTi9DYURZSHk2MlBtWG5NUnM5WVRGeWxUWHFUVjdjcExldTUzdXZqeUw3RFkxNG5EcFQ5cUx0M3A4ZklodVdQRnM4OGRLMDgySnVkMzc3K0hvYVA0MWM3TnBXaTV2aVZlMGF0NUtDNEZhMkp3ZnV1c2lpSXV3SGVTZFdSbXBCN0NiTis4dXZGVmV5cE9YSGdjdUVwZHBWUzRIYzlvcXJkVXM4dlN5SjdoNVF3Mi9GZWZveHpWSXg2b3Zhc3NzRytoK2J3RjZnOHlkeTVLcWJKaDdIZEwzdmYvRVdqOEdoZWZ4OHIxbjBzWCtDamFpaWpjckdCdmlxalZBRXhUVzUzUTE3V2hwYWVxNGFDT3ZYcVZocytzcFU4bkZIRGo2TFU4L0JsTXBLcDhUMnl4dUxIdE4ydUdoQi93Q2RDN3BSVWxhVzQ0SVRjSGRienBtelhLa0RhT3NaYm8zekJwNVhNNlBLMzBCVlZmWjF0YWIrQmEwTm9KNlZQRTZYQk0xN1E5amc1cmhkcmdRUVFlQkJIRUtyYWFkbVdTYWF1aUgyenhqdVNqbG1CNTlza2Y3NzlHK2pqNWx1dzFMdGFpaWFzUlU3T201SDU3MVBXU2ZPU2Z6WHBkeDV6VnN2M0tEcy93QnpVVkQxc0RvMzlyNUJ2VC9FMTZyY0hYN1NyUHI5TkN5eGxISlNoMEs3c0xXYm12cG45QmtERC9xZ3grOTRQbVhWaTRacU1sMCtXcHk0U1dXdEUvUWk4MmVoQ0FGQVVRdmZOVXZmREFKb1lXbW5hM09HdEdtVnh1ZVBGdzhsbFpXVUthVTVXYjFLMTNuVWJqRzZXbTgwVFZPWkUyamwwa2lxWXlHa2duSzlyamJ0MU4vdmhiY3FjblVqdWNXYWN6VVZUbHZVa2JsV3lTT1NURFdkN05JMXpENE1icmwvbUdXMzNYZGF3aTR5aXF6NExYdk5rbEtNblFYRjZkeHIxWWF4bUlzYllOYVlXZ2RRRHlBc290dDBtK3BqSkpLcWwwTjdCTVRCZkN6NVJEdFdqYzdtMTlMWk0xdng3RnFyVTlKUHMvamMzVWFtcVhhZkN4cDdPUjFMbXpiaW9qamFhaDdjcm1CeGMrMTlEMGFEaDJGWlYzVFRqbmkzb2lLQ20xTEswdFdSRk5JenVlaUFGaUs4TmZyZk02OGVvNnRMQzNZdDBrODg3Kzc5eldyWklmOEFZazhCeHlHZ2RXc3FidG5NejVHZ3RONVJhN1FIVzZUY2krblA4cTAxcU1xeWc0YnJMNEc2bFVqU2NsTGZjaEJoZFpMU1BmM0tYR1Y0cSs2Qkl3UEdseGxaeHRZdXNPUE84aTNkcFNqVVN6YnRMV01GQ2NvWHR2MXViTkk2UEZxc0J4RjVLQ3ppTEhKS3lTMXdQTHI1SGRxeGtwWWVucHdsNVdNNDJyVC9BUFh6UG5adXRsZGlsSkJPTFRVN0pJSEc5OHdheVF0UGJ6U05lblE5S2l0Q0tvU2xIYzdNbW5KdW9sTGVqWTVJL3dDMVZYN28vd0RzY3NjZi9iaitjQ2NON1VqcWFxenRDQUlDTnh2Nm43ZVAzbEFjL3dDVmF0amd4VEJwcFhoa2JKSm5PY2VEUjlEcXBSQnJZdmliTVp4V2diUlhraG81RFBOVWhwREJaMGJ3d09OcjMzUUZ1bk1PaHBRRUJzYlU0Yjhrc3A4U2FkMU5XekJrZ0RnMko3WTJFT01qZThPdHUyNTBzRGFYdklXNHhVOUhOVk14UEM2R3BscTZKa01ja0xubk5hVmtrYjkwMTV0ZTRhOGFhYzBhZEpBdmV6WEtmaHphSm0rbUVNc01ZamtnYzF3ZTE4YlEwaHJiYzdVYVc4OWlvWkpMU1NibWQ1Y05Ibk8wbnBEdGZTT0NvNmo3R3ZMTnhkMFhjUDYxQ09YZ3JNOGtmM1JNeGtZNE9hNGtmcWhwQkpQVncwN1ZqSjl2VmpHSE5QdVYvd0FzU2wyRktUbnlhN3puUEtIUTFGSlgxRkpTaTBlTU5ZM3NiSnZBSnJBZFljNHU3SmllaFg2S0o3eWM1WDhOaXBjTW9hVUhMREhVd3g1cjJJYTJONGM2L1h4ZGZyUkVzaTlvMjRlM0NjUUZGV3kxUkxZQzhTU3VseUFUakxhNEZya24wQlF0NEd5OU0ybnhTa0dJeVNTaDhESFlkTTkvMGJDNk1ab3kwYUIvT3NEKzcwa1dsaEhXc2IrbyszWjduTEVrazBCemZiVVJ3WXZSVmN6c3NPVjJaMlZ6dWRFMlcyalFUMzBzZm9XRVlydE16NWZWZlF0S2RTYzhCS2pCTnZPdHl2cGJwMVJvTTIwaWpiaXIyUE85bGxMb0JsZHp4dVk0V3ZCdFlXeVhzZGRGRXFpZE5XZk5lWnRoczZwNlJGU2k3Skp2bHV1MTM4RFpwdHNLT0Q1T2phOHZpaGpNY2pneC93QkU3ZE5ZeHhCYmNqdnhjWDc1Ym5LRG00M1YrODR2UXNTNmJxT0wzN3JPL2h2c2ZWSHRCaDFMTFdUeDFNc3MwelhQQmMyUXQvWGMyTmh5OWY0WlFzRnVzNWNlYTBObFNoWG5rL290V1hCTlh0eGZWLzhBdzFkbDZqQzZCNW5peENad0xlZEJaeGE5eEE1eFlHQzdoYmpvZXNxTDluQzBwWFMzYnZMN0cydkN2aktpYW81WlBlMG1sOGI2ZkV3NGhqdEJXWVhOVFBrZkRLWDFFb2hBT1l5U1NTeXRGOHBhNXBNZ054NlFRcHFUaWxHcGZkWjhPSEFqRFlURXdyeXBLTys4VzJuYXowYnYzYW96MUdQME9JeFJPcUtxb282aU51VjdXR1JvY2RNMWkwRnJ4Y1hCR3V1dlVwazA5WVQwNzE1cDdqQ25TclllVGpPam03MDM0TkdIQzhkcEthTEVHUnp5dmU5b2pnTXU4YytRTmdGam1jM1FieVIraHR3V3FjMHFUZWErL2l1NzZIVEhEVnFtS3BxVlBLbGE5bFpKWHY4QVhuZmdZdVR6R0JTeFNRMURIbWxtY1MyUnJYUHlPeXRqZTF6V0F1RFRsQkRnTEFnM3RvdEVLOUNyRHNKeVNhVzV1MTArVDU5TjVPMWFGU0dLZGFucmV6MDRNc1F4U2pwNTRKb3pMSkhkN0h2eVBPNkxtakk0dHlna2NXNWdEYk4xWFduQ1VzSGg2ampDYXpOY1d0MTkxOTErbTkyT1N2UEUxb1hsSFJkRDJMRmFPbmZWeXdtWjg4c1JlSEdLWEs4dDN6bXRhY3ZmWHZ4NDNZQXQwYTFPTk9TN1ZTMWUrUzB2YXlYUmVDMXZ1TlRwMUp5ajZsdE9DNWNYMU5MR0t0cG9xV0tsdTgwMjVjR2xybVpuVXhpY0dmU0FkOEdFWDRhcm54V09wUXhkSnVTYXZLOXRiWFRTZW5LOXpkaDhMT1ZHZW1ydGI0YWtwVTQ3aDg3bzZsKyt1SE12SHVaYnRjMTJacGUzSmZtdUY5T29jVnZsRERla1JyT2NjMXRQV1Z2elUweGRkVW5UVVhhL0puczB3cUt4am1HN1NXV05pT2EwQngwT282ZUtwSzBsaU5vTExxcnJ5MVpaMDA2T0VlYlIyZm1YVmVvS0VJQWdPVWN0R0gya2dxUU8rYVluSHRhY3pmd2M3MEszMlpQU1VQaVZPMG9icEZWMkN4TVU5ZEZJNTJWbk9hOC9zbGgvcUcraGRlTXBkcFNhdHJ3T1hCMU1sVlBnUldMVjdxaWFTZDNHUjVmNUFUb1BNTER6TGZUZ29RVVZ3Tk5XYm5OeU9xY2oyRDd1QjlXNGM2VTVXL1pzSkg0dXY2b1ZSdEdybW1vTGg4eTIyZlN5d3pQaVMvS2hVNU1PbEY5WGxqQjUzdEx2NFFWb3dNYjEwYnNiSzFGbkNTdlFubno5R2JLMHU2bzZlUHBiRXkvbExRWGZpU3ZNVjVacXNuMVBUVVk1YWFYUTM2dWxaS3gwY2pXdlk0V2Mxd3VDUEl0Y1pPTHVqTnBOV1p6VGFYa3Q0eVVidTNjdlA0TmVmYzcwcTFvYlI0VlBFcksyejF2cCtCekdTTXRKYTRFT0JJSU9oQkJzUVIwRUZXcWQxZEZVMDA3TTZmeU00cTg3NmtjYnNhQkt3ZURjMmVCMkVscHQxMzYxVTdUcHBXbXU0dGRuVkcwNE0wT1dER2Q1T3lrYWViRU16L3RIalFlWnY4NVczWnRLMFhOOFRYdEdyZVNndUJWdGp6QUt1SjlROE1pWWQ0U1FUY3MxWUxBSDlhM21CWFhpYy9adFFXck9YQzVPMFRtOUVkQTVRdHBLS3Fvbnh4enRkS0hNZXh1VjR1UTRCMnBiNEpjcTNCNGVyVHFweVdoWTR1dFNuU2FUMU9VUnlGcERtNk9hUTRIcUlOeCtJVncwbXJNcDR1elRQMHpSVklsalpLM3ZYdGE4ZVJ3Qkh2WGxwUnl5YWZBOVJGNWttak1zU1R3b0RrT0k3UnpUczNieTBORHMxbU55WElCQXZZOXF2S2VIaEIzWG1VMVN0T2FzL0kzUG5qVWRPNko2ekdDVGJ0dXNQUktmWHhNdlNxblR3Sk9oeFBFcDJieU5qSE5KY0ErekFScWJnWm5YRmxwblR3OEhhVE5zS21JbXJ4WDU0bXc2YkZ0Zm9JOWVPa1d2bDUrcXh0aGZlZm45ak8rSjVMeSs1cFV1SllrOTcyc2dqelJtenZvMnR5dTQydVhBRTlPblFRZWtMT1ZQRHBKdVQxNm1NWjEyMmtscDBNa2o4WDVwRlBHTXJzNHNJaHpzcGJyOUpybzRyRkxDKzgvUDdHVjhSeVhsOXo0WlVZd1FMVTBWcjNBTEloWWpTOWkvczRvNDRYM241L1lsUEVjbCtmRXh2cU1hTHJPZ1k2OXlNeklYQWROcmgyZzhxbkxoTGFQNWkrSTRyNUdsTFJZeWFodFh1YlNNYmthQTZJTXkySXRrejhPY2Z3NmxtcDRWUWNMNmZIN0VaYTJiTll6NzdHK2MwVXNUZE1wSVpFM1J3NkhiejNMQzJGOTUrZjJNNzErWDU0Z1ZPT3RMZisyakxyV3psa1JjYkMxM09FbW1ua1RMaEgvay9QN0VYcjh2enhOemswd0NxcHBwNUtpTElIc0ZqbVlibk1TZTljYmNWaGpLMU9jWXFEdVo0ZW5LTW01STZFcTg2Z2dDQWpjYitwKzNqOTVRR3pWMEVVdHQ1RkcrMTdaMk5kYS9HMXhwd0hvUUdTbnAyUmpLeHJXTjZtZ05Ib0NBd0hDb0RHWWR6RnVpYm1QSTNJVDFsdHJFNklESlEwRVVEZDNER3lObmdzYUdOOURRZ01GUmdsTkkvZXZwNFhTRDlkMGJITzlZaTZBM0pZV3VGbk5EaDFFQWo4VmpLTVpLMGxjeWpLVVhlTHNlUXdOWUxOYTFvNmdBUGNrWVJpclJWaEtjcHU4bmMrSnFPTjdtU1BZMXo0eVRHNHRCTEM0WlNXazk2U0RiUlpHSjdWVWtjb3l5TVk4QTNBYzBPQVBYWWpqcWdNRE1JcHdITkVFSURyQndFYkFIV054Y1cxMTFRR1NlZ2llR3RmRkc0TjcwT1kwaHZSb0NOT0hRZ0kvSEt0Z2twNHN3em1kcERlbXdEamZzV3QxWUthaGZWOERZcVUzQnp0b3VKTXJZYXlzY29XQm1ycENHQzhzUjNqQjB1c0NITjg3U2Jkb0MxVm9abzZGanN2RkxEMTFtM1BSL2Y0TTRjQ3VBOW9lb1FFSnVFSUJRRmpvc2NxSE5BYkR2TW9BTGhtdnc0bTNTVlZWY0ZRaks4cFd2M0hMT2pUVDFkalliaWxXU0IzTngwMXpBRHlub0MxdkRZVksvYWZJdzdLbDd4UEJWeHpCUUFnQ2tCUUN5N0lVT3BuSTA3MXYvQUpIK25wVi9zYkRhdXMrNWZYN2VKVTdUcjZLa3U5L1F0SzlBVTRRQkFWUGxRdy9mWWZJUU9kRVd5ajdwczcrRnpsMllHZVdzdXVoeTR5R2FrK2h3cGVnUFBteGgxRTZlV09CbmZTT0RCMlpqYS9rSEh6TENjMUNMaytCblRnNXlVVnhQMGpoOUkyR0prTEJackdoamZJMFdDOHhPVGxKeWZFOUxHS2lra1VIbHBxYlFRUmRMcFMvelJzSS85Z1Zqc3lQcnlsMC9Qa2NHMHBXZ2wxT1ZVVlB2SkdSZUc5clBYY0cvMVZ2T1dXTGZJcWFjYzBrajlBYllZbTZrb3BabzdCN0EwTXVMaTduTmFOUE92T1llbXF0VlJaNkd2VTdPbTVJcG1HY3JUYkFWRk82L2hSRUVIN3J5TGVrcnVuc3gzOVNYaWNVTnBSdDY2OERicStWaW1EVHU0Wm5QNkE3SXh0KzBoeFBvQ3dqczJwZlZvemx0R25iUk01UlhWVHBaSHpQdG1rZTU3cmFDNzNGeHNPcTVWeENLakZSWEFwNXljcE9UNG5ST1N5bjdtZ3FjU2xGb3d6SzM5b011NTl1dTdzclIyZ3FzeDh1MG5HbEhlV2VCajJjSlZKSE82K3JkTkkrWityM3VMM2VWeHY2T2hXY0lLRVZGY0N0cVRjNU9UNG16VFlIVXlORDQ2ZVo3RHdjMk41QjF0b1FOZUN3bFdweGRuSkdVYUZTU3Vvc3lIWnlzOFZuOWsvOEFKUjZSUzk1ZUpQbzFYM1dSaEZ0RnVOTmp2WEp0V2IzRG9EMHNCaVArbTR0Yi9DR3J6dU5obHJTOFQwT0VubW94WlpseW5TZU9RSEE5NHZSMktFOTNpQXMwai84QTQybDBKdlZPRmdiRjE4K2dQV2VDNUYvZmwvMSt4MC83TWUvN2tqVDRGSElIaDFQVTB1VmhlSjVKYnNhV2tXdUw5cFBtSzFPdEtOclNVdGR5UnRWR0x2bzQ5V3pXd2F1a3hHV09tcUpnSTQyNWlHM2E2cExTUURmUytnMTRkT2wrOXlxd2pRaTV3V3I4akduS1ZacU1ub3ZNaU1JRk82RnhraHEzelhkbGRFSGxuRG1qUTJ1RDJMZFV6cVdqaWwxTUlLR1hWTy9RejRneVVERDJWYkoza3RtelJ0SjN6bTVoa0hHOXdMSFhXd1dNSEgrbzZkbHUxNEdVbEwxRk8vSHZNMkNnTnJzc0lucDQ5eEk1OFZRNXdmTHpIam10Sk45Y3ArNDVZMWRhVjVXYnV0VndNNmY5ejFicFczTWpNQXc5c2xPeDdxQ3JuSnpmU3h6RnJIV2NSWUMrbHJXOG9XeXROeG0wcHBkR2pHbkc4VTNGdjRrMXRKaEU1ckpYejAxVlVRRU5FTzVrc0dBTkZ3UU5iMy9IWFcrbWlqVWgyYVVaSlBqZEcycENXZHRwdGNMR3JQVEdvcGFjMGNWUytramtrRlJUaVMwMmM1U0xtL09GaWJkVitqb3lVc2s1ZG8xbWFWbmJRaHJORlpVN2NWeEp6WUI5TXlwbGhaQlV3Vkc3QkxKbmwxMkFqVVhPaDV3OUswWXBUY0ZKdE5kRFpRY1ZKcEpwOVMvcmdPb0lBZ0kzRy9xZnQ0L2VVQkpJQWdDQUlBZ0NBSUFnQ0EwOFF4T0tFWGtlQWVodkZ4OGpScXRGYkUwcUt2Ti9md045SEQxS3o5UmZZcWVLN1dTUHUySWJ0dmhHeGVmNk4vRlV1STJyT2VsUFJjK1A4RnpoOWx3anJVMWZMaC9KRDRTNG1xcHlTU1RNQ1NkU2VZL3A2VnAyYTI4VW0rdnlOdTBrbGhtbDArWjFCZW5QTkJBY3U1UXRpSEJ6cXlsYmRwdTZXSm8xQjRsN1IwZzhTUE9PemtyVWY4b25wTmw3VFRTbzFuM1A2UDZNNXdDdVk5QWVvQWdDQTJzTnFKV1BBaHVYdTVvYUJtTHI4Qmw2U3RkU2pHcXNzbGN3cUtEamVlNUY2cDZLb2lGcW45SWRRMnpRQVBLM3ZqMXFreHRGVWFtUlJ0OVNyVmFsVjFwYmpLdVFrSUFnQ0Frc0d3aDA3cjZpTWNYZGZZT3MrNWQyQndFOFRLNzBqeGYwWDVvY21LeGNhS3QvbHkrNWVZWWcxb2EwV2FCWURxQzlkQ0VZUlVZcXlSNTZVbkp0dmVmYXlNUWdDQXcxbE9KSTN4TzcxN1N3K1J3SVB2VXhrNHRORVNWMVk0MS8wdXJ1dUQxM2ZBcno5Um85U21lenFuTkZsMkIyRG1wYWsxRlJ1emxhUkdHdUx1YzdRazNBdFp0eDk1Y3VMeHNha01zTDlUcHdtRGRLZWFSMFpWaFlsQjVSOWxhcXVsaU1PN3lSc0k1enkwNW51MTBzZExOYXJEQlltblJpODE3czRNWmg1MW1zdkFnOW0rVHFyaHFvWnBkMXUyUEQzV2VTZWJxTERMMWdMb3I0K25LbTR4dmRtaWhnWndxS1VyYUY5Mnp3SjFiVEduYklJem1hNjVCSU9YV3hzZE5iYTlpcnNOV1ZLZVpxNVlZaWs2c010N0hMYXJrenIySG10amtIVzJRRCtjTlZ2SGFGRjc3b3FaYlBxcmRZd3hjbk9JazJNTFc5cGtqdCtCSldUeDlCY2ZJeFdBclBnV2JBT1NxeEQ2dVVPQStxanVBZkxJYkczWUFQS3VTdHRLK2xOZkZuWFMyY2xyTmxqMjV3T2VlbFpSMGpZMnN1TXdKeUFNWjNqUUFEcGV4KzZ1WEMxb1FxT2RTOXpweE5LVTZlU0J6L0FQNlgxLzhBayswUHdxeS9VYVBVcnYwNnIwT3g0WlJOZ2hqZ1ozc2JHc0gzUmE2cEp6YzVPVDRsekNLakZSUnNyRXlPUDR6eWExYjZpWjhXNjNicEh2YmQ1QkRYT0xnTFplaTl2TXJxbHRDa29KU3ZleFVWY0JVbE50V0xueWM0RlVVVU1rTStUV1RPeks3TnhhR3VIQVc3MGVsY09NclFxeVVvOGp0d2xHVktEakl0cTR6cVBISUQ4OUYycTlJVWpRem9SWXMySDRyU0dqanBxZ3poMGNycFFZZ3ppUzYycmoxT1hMT25WVlZ6aGJWVzFPaU1xZlpxTXI2UGdaSkszRDNDejU4UmUzcGE1N1NEWTNzUmRRbzExdVVTYjBudmNqTE50TFJUV0VrTXNBaGNPNTN3WmM3V0Q5VjE5T092VHg4cE9Lb1ZZYm1uZmZjeWRXbkxlclczV01OVnRQRkJTaW5vSktoanQ2WkhPZTJPNWFXa0VhWEhIS2VIUXBqaDVUcVpxcVc3cUhWVVlaYWJlODJhYmFxamNhU2VvTlM2b3AyRUVnTUxYdWUyenlibTUvQllTdzlSWjR3dFptU3F3ZVdVcjNRK2ROREpKQlVUR3FNMFVUbzlBeks3TzE3WEUzTnllZVU5SHFwT01iV2JNdTFwdHFUdmRFVkZWNGF4dVJsUmlqR2pnR3ZZMEMvWURaYlhHdTNkeGdhMDZTM09SdDRuam1Ienl1bE0rSk5McmMxajJ0WUxORGRCZlRoZnlrckNGS3RDTnJSTXBUcHlkN3N4L0srR0dLT0ZqcStGckM4L1J1YUhQTHkyN25rTzFObUMzVmV5bnM2K1p5ZVYzNS9RWjZWa2xkRmo1T24wVHA1WFU0cVh5aGd6UzFEZzUyVXU3MFdQN0k0OVFYTmkxVlVWbnRia2piUXlabmx2ZnFYOWNCMUJBRUJHNDM5VDl2SDd5Z0pKQUVBUUJBRUFRSHpKSUdpNUlBNnliRDBxRzBsZGtwTnV5SVd1MnBnajBhVEllcHZEMWpwNkxyZ3E3VG9RM1BNK24zM0hmUzJiWG52VmwxK3hYTVEycG5rMGJhTnY3T3J2V1A4QVFCVlZiYWxhZWtmVlhUZjRscFIyWlJockwxbjEzZUJDT0pKdVNTVHhKMUo4L1NxMXR0M1pZSkpLeVBFTWphd2YrMVUvMm8va2V1L1puK3BqOGZrViswLzlPL2g4enFLOVFlWkNBSUNxN1I3QjB0VVRJQVlaVHFYc3RaeDYzTTRIeWl4N1ZwblJqTFVzOEx0V3ZRV1gybzhuOUgrSW85ZHlaVmpEOUc2S1Vkaml4M3F1RnY0bG9lSGt0eGMwOXQ0ZVh0SnJ6L1BBMEJzQmlIK0FCMjd5TDRsajJNK1J2L1ZzSjczay9zUzJHOGwxUTRnenl4eHQ2bVhrZCtJQUg0ck9PSGx4WnkxZHUwby8yNHQ5K2krcGY5bmRsYWFpRjRtWGtJc1pYODU1OC9CbzdBQUYwUXB4aHVLTEZZK3RpWDY3MDVMZCtkNUxWZEt5VnVWN1E0ZTd5SG9VVnFOT3RITE5YUnowNnM2YnpRZGl1MW15blRFLzdyL2lINUtrcmJFNDBwZkIvZjhBZ3M2VzFPRlNQaDlpT2ZzN1VEOVFIeU9iL1VoY1V0bFlwZjRwOXpYMXNkUzJoUWZIeVo5UmJOMUI0aHJmSzRmK04xbERaR0psdlNYZS90Y2lXMGFDM052NGZjbDZIWmRqZFpIWno0STBiK1pWbGg5alU0YTFYbTZibC9KeFZ0cFRscEJXK1pQTVlBQUFBQU9BR2dDdUVrbFpGYTIyN3MrbEpBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBZU9RSDV6THRWNlVwbWhuUWdaMEI0WG9MSHlYSVRZK1M1Q2JIeVhJRDRKVWcrVUFRQkFkQzVHdjA5UjltMytZcXUyajdNZTg2c0p2WjFkVlIzQkFFQkc0MTlUOXZIN3lnSkpBRUI0NXdHcElBVU5wYnlVbTl4SDFHT1U3T01yZkkwNWo2RzNYTlBIWWVHK2ErR3Z5T21HQ3J6M1FmeDArWkYxTzJNWTd5Tjd1MDJhUDZuOEZ4Vk5zVWw3Q2I4djU4anNwN0pxUDJtbDUvbmlROVh0WFVQMGJsakhZTG4wdTAvQmNOVGF0YVhzMlhuOC9zZHRQWmRHUHRYZjUwKzVEVkZRK1EzZTV6aiswU2JlVHE4eTRLbFdWUjNtNzk1M3dwd3BxMEZidU1kbGdaaXlnQ3lBV1FHemcvOXFwL3RSL0k5V0d6UDlUSDQvSTROcC82ZC9ENW5VVjZnOHlFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUFRQkFFQVFCQUVBUUJBRUI0NUFmbTF6dFQ1VjZVcUdNeUVETWdzZVprQjRYSUR3dVFIeVNwQjRnQ0FJQWdPaGNqWDZlbyt6Yi9BREZWMjBmWmozblZoTjdPcnFxTzRJQWdNTlhTUnl0eVNzWTlsd2NyMmh6YmczQnNkTkNnTkg1dVVmaWxQN0tQOGtBK2JsSDRwVCt5ai9KQWVPMlpvanhwS2MvNk1md3FIRlBlakpTYTNNZk5taThVcHZZeC9Db3lSNURQTG14ODJhTHhTbjlqSDhLWlk4aG5selkrYk5GNHBUK3hqK0ZNc2VRenk1c2ZObWk4VXAvWXgvQ21XUElaNWMyUG16UmVLVS9zWS9oVExIa004dWJIelpvdkZLZjJNZndwbGp5R2VYTmo1czBYaWxQN0dQNFV5eDVEUExteDgyYUx4U245akg4S1pZOGhubHpaa3A4QXBZM0NSbE5BMTdUZHJteE1hNXB0YTRJRnhvVDZWS2lsd0RsSjcyU0treENBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQThjZ1B6bTdEYWk1LzdlZmovQUlNdndyMGZhUTk1ZUtLbHhseWZnUGsybzhYbjlqTDhLWjRjMTRvakxMay9BZkp0UjR2UDdHWDRVenc1cnhReXk1UHdQUGsybzhYbjlqTDhLWjRlOHZGRExMay9BZkpsUjR2UDdHWDRVenc5NWVLR1dYSitCNThtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4QjhtVCtMeit4bCtGTzBoN3k4VU1zdVQ4Qy9ja05KSXlhY3Zqa1lERzJ4ZXg3TDg0OE13RjF3WStVWEdObWpxd3FhYnVqcUtxenRDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJQWdDQUlBZ0NBSUFnQ0FJRC8vWlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9iaWxsaW5nL2NyZWRpdGNhcmQuanBnXG4vLyBtb2R1bGUgaWQgPSAxODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=