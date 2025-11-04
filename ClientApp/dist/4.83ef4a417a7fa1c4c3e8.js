exports.ids = [4];
exports.modules = {

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listPages__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rnd__ = __webpack_require__(1775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_rnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(16);
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

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
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
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(1205)();
}


/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(0)):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-toggle-button"]=t(require("react")):e["react-toggle-button"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(12)},function(e,t,n){e.exports=n(17)()},function(e,t){"use strict";function n(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(t,n){t.exports=e},function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(t,n(9))},function(e,t,n){(function(t){for(var r=n(19),a="undefined"==typeof window?t:window,o=["moz","webkit"],i="AnimationFrame",l=a["request"+i],u=a["cancel"+i]||a["cancelRequest"+i],s=0;!l&&s<o.length;s++)l=a[o[s]+"Request"+i],u=a[o[s]+"Cancel"+i]||a[o[s]+"CancelRequest"+i];if(!l||!u){var c=0,f=0,p=[],d=1e3/60;l=function(e){if(0===p.length){var t=r(),n=Math.max(0,d-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t,n,a,o,i,l){var u=-o*(t-a),s=-i*n,c=u+s,f=n+c*e,p=t+f*e;return Math.abs(f)<l&&Math.abs(p-a)<l?(r[0]=a,r[1]=0,r):(r[0]=p,r[1]=f,r)}t.__esModule=!0,t.default=n;var r=[0,0];e.exports=t.default},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){h&&d&&(h=!1,d.length?y=d.concat(y):m=-1,y.length&&l())}function l(){if(!h){var e=a(i);h=!0;for(var t=y.length;t;){for(d=y,y=[];++m<t;)d&&d[m].run();m=-1,t=y.length}d=null,h=!1,o(e)}}function u(e,t){this.fun=e,this.array=t}function s(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,y=[],h=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new u(e,t)),1!==y.length||h||a(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t){"use strict";function n(e){var t=e;if(l[t])return l[t];t=t.replace("#",""),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=t.match(/.{2}/g),r={r:parseInt(n[0],16),g:parseInt(n[1],16),b:parseInt(n[2],16)};return l[t]=r,r}function r(e){var t=e.indexOf("rgb")!=-1,n=e.indexOf("rgba")!=-1,r=e.match(/\d+/g);if(t&&!n)return{r:parseInt(r[0]),g:parseInt(r[1]),b:parseInt(r[2])};if(t&&n){var a="0"==r[3]?"0."+r[4]:r[3];return{r:parseInt(r[0]),g:parseInt(r[1]),b:parseInt(r[2]),a:parseFloat(a)}}return null}function a(e,t,n){var r=e.toString(16),a=t.toString(16),o=n.toString(16);return r=r.length<2?"0"+r:r,a=a.length<2?"0"+a:a,o=o.length<2?"0"+o:o,"#"+r+a+o}function o(e,t,n,r,a){var o=n-t,i=a-r,l=(e-t)/o;return r+l*i}function i(e,t,n,a,i,l){var u=void 0===a?0:a,s=void 0===i?1:i,c=r(t),f=r(n),p=Math.floor(o(e,u,s,c.r,f.r)),d=Math.floor(o(e,u,s,c.g,f.g)),y=Math.floor(o(e,u,s,c.b,f.b)),h=!1,m=null;return c.a&&f.a&&(h=!0,m=o(e,u,s,c.a,f.a)),m?"rgb("+p+","+d+","+y+","+m+")":"rgb("+p+","+d+","+y+")"}Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRGB=n,t.rgbToObj=r,t.rgbToHex=a,t.mapValueInRange=o,t.interpolateColor=i;var l={}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(13),o=r(a);e.exports=o.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),c=r(s),f=n(24),p=n(1),d=r(p),y=n(14),h=n(11),m={active:{base:"rgb(1,124,66)",hover:"rgb(1,124,66)"},inactive:{base:"rgb(65,66,68)",hover:"rgb(65,66,68)"},activeThumb:{base:"rgb(250,250,250)",hover:"rgb(250,250,250)"},inactiveThumb:{base:"rgb(250,250,250)",hover:"rgb(250,250,250)"}},v={},b=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isHover:!1},n}return i(t,e),u(t,[{key:"onMouseOver",value:function(){this.setState({isHover:!0})}},{key:"onMouseOut",value:function(){this.setState({isHover:!1})}},{key:"_convertToRgb",value:function(e,t){if(e.indexOf("#")!=-1){var n=(0,h.hexToRGB)(e);return"rgb("+n.r+", "+n.g+", "+n.b+")"}return e.indexOf("rgb")==-1?t:e}},{key:"checkAllColors",value:function(e){var t=this;return Object.keys(e).forEach(function(n){t.checkColors(e,n)}),e}},{key:"checkColors",value:function(e,t){e[t]?e[t].hover?(e[t].base=this._convertToRgb(e[t].base,m[t].base),e[t].hover=this._convertToRgb(e[t].hover,m[t].hover)):e[t].base?(e[t].base=this._convertToRgb(e[t].base,m[t].base),e[t].hover=e[t].base):(console.warn('Color prop should have a "base" style and a "hover" style!'),e[t]=m[t]):e[t]=m[t]}},{key:"interpolateColorWithHover",value:function(e,t,n){var r=this.props.colors;return this.checkColors(r,t),this.checkColors(r,n),this.state.isHover?{backgroundColor:(0,h.interpolateColor)(e,r[t].hover,r[n].hover,0,400)}:{backgroundColor:(0,h.interpolateColor)(e,r[t].base,r[n].base,0,400)}}},{key:"makeStyle",value:function(e,t){return this.state.isHover?l({},e,t):e}},{key:"handleClick",value:function(e){e.target!==this._input&&(e.preventDefault(),this._input.focus(),this._input.click())}},{key:"render",value:function(){var e=this,t=this.props,n=t.internalSpringSetting,r=t.internalHoverSpringSetting,a=t.value,o=t.thumbAnimateRange,i=(t.isHover,t.containerStyle),u=t.trackStyle,s=t.animateTrackStyleToggle,p=t.animateTrackStyleHover,d=t.thumbStyleHover,h=t.trackStyleHover,m=t.activeLabelStyle,v=t.activeLabelStyleHover,b=t.activeLabel,g=t.inactiveLabelStyle,S=t.inactiveLabelStyleHover,T=t.inactiveLabel,O=t.thumbStyle,k=t.animateThumbStyleHover,w=t.animateThumbStyleToggle,I=t.thumbIcon,P=t.onClick,j=t.onToggle,_=t.passThroughInputProps,x=n,M=r;return c.default.createElement(f.Motion,{style:{opacity:(0,f.spring)(a?1:0,x),left:(0,f.spring)(a?10*o[1]:10*o[0],x),colorNumber:(0,f.spring)(a?0:400,x),toggleNumber:(0,f.spring)(a?400:0,x),hoverNumber:(0,f.spring)(this.state.isHover?400:0,M)}},function(t){var n=t.opacity,r=t.left,o=t.colorNumber,f=t.hoverNumber,x=t.toggleNumber;return c.default.createElement("div",{style:l({},e.makeStyle(l({},y.reactToggle,i))),onMouseOver:e.onMouseOver.bind(e),onMouseOut:e.onMouseOut.bind(e),onClick:e.handleClick.bind(e)},c.default.createElement("div",{style:l({},e.makeStyle(l({},y.reactToggleTrack,u,e.interpolateColorWithHover(o,"active","inactive"),s(x/400)),l({},h,p(f/400))))},c.default.createElement("div",{style:l({},e.makeStyle(l({},y.reactToggleOn,m),v),{opacity:n})},b),c.default.createElement("div",{style:l({},e.makeStyle(l({},y.reactToggleOff,g),S),{opacity:1-n})},T)),c.default.createElement("div",{style:y.reactThumbCenteringContainer},c.default.createElement("div",{style:l({},e.makeStyle(l({},y.reactToggleThumb,O,e.interpolateColorWithHover(o,"activeThumb","inactiveThumb"),w(x/400)),l({},d,k(f/400))),{position:"relative",left:Math.round(r/10)})},I)),c.default.createElement("input",l({ref:function(t){e._input=t},type:"checkbox",style:y.reactToggleScreenReaderOnly,onClick:function(e){P&&P(e),j(a)},value:a},_)))})}}]),t}(s.Component);b.defaultProps={value:!1,onToggle:function(){},colors:m,passThroughInputProps:{},activeLabel:"ON",containerStyle:v,activeLabelStyle:v,activeLabelStyleHover:v,inactiveLabel:"OFF",inactiveLabelStyle:v,inactiveLabelStyleHover:v,thumbStyle:v,thumbStyleHover:v,animateThumbStyleHover:function(){return{}},animateThumbStyleToggle:function(){return{}},trackStyle:v,trackStyleHover:v,animateTrackStyleHover:function(){return{}},animateTrackStyleToggle:function(){return{}},thumbAnimateRange:[1,33],internalSpringSetting:{stiffness:180,damping:22},internalHoverSpringSetting:{stiffness:180,damping:20}},b.displayName="Toggle",t.default=b,b.propTypes={value:d.default.bool.isRequired,onToggle:d.default.func.isRequired,passThroughInputProps:d.default.object,onClick:d.default.func,colors:d.default.object,activeLabel:d.default.oneOfType([d.default.string,d.default.object]),containerStyle:d.default.object,activeLabelStyle:d.default.object,activeLabelStyleHover:d.default.object,activeThumbStyle:d.default.object,activeThumbStyleHover:d.default.object,inactiveLabel:d.default.oneOfType([d.default.string,d.default.object]),inactiveLabelStyle:d.default.object,inactiveLabelStyleHover:d.default.object,thumbStyle:d.default.object,thumbStyleHover:d.default.object,trackStyle:d.default.object,trackStyleHover:d.default.object,animateThumbStyleHover:d.default.func,animateTrackStyleHover:d.default.func,animateTrackStyleToggle:d.default.func,animateThumbStyleToggle:d.default.func,internalSpringSetting:d.default.object,internalHoverSpringSetting:d.default.object,thumbIcon:d.default.oneOfType([d.default.string,d.default.object]),thumbAnimateRange:d.default.array}},function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(t.reactToggle=n({display:"flex",width:52,alignItems:"center",justifyContent:"flex-start",position:"relative",cursor:"pointer",backgroundColor:"transparent",border:0,padding:0,WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)"},"WebkitTapHighlightColor","transparent"),{fontSize:11,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Helvetica Neue', Helvetica, sans-serif"});t.reactToggleScreenReaderOnly={border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1},t.reactToggleTrack={width:"52px",height:"20px",padding:0,borderRadius:"26px",display:"flex",alignItems:"center",justifyContent:"center"},t.reactToggleOn=r({},a,{position:"relative",color:"#FAFAFA",marginTop:"auto",marginBottom:"auto",lineHeight:0,opacity:0,width:26,height:20,left:4}),t.reactToggleOff=r({},a,{position:"relative",color:"rgba(255,255,255,0.6)",bottom:"0px",marginTop:"auto",marginBottom:"auto",paddingRight:5,lineHeight:0,width:26,height:20}),t.reactToggleThumb={width:"18px",height:"18px",display:"flex",alignSelf:"center",boxShadow:"0 0 0 1px rgba(0,0,0,0.3)",borderRadius:"50%",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box"},t.reactThumbCenteringContainer={position:"absolute",height:"100%",top:0,left:0,display:"flex",flex:1,alignSelf:"stretch",alignItems:"center",justifyContent:"flex-start"}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r,o,i,l,u){if(a(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,l,u],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var a=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(15),a=n(16),o=n(18);e.exports=function(){function e(e,t,n,r,i,l){l!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){(function(t){(function(){var n,r,a,o,i,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n(),l=1e9*t.uptime(),i=o-l):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(t,n(9))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),s=r(u),c=n(2),f=r(c),p=n(8),d=r(p),y=n(4),h=r(y),m=n(5),v=r(m),b=n(7),g=r(b),S=n(3),T=r(S),O=n(1),k=r(O),w=1e3/60,I=function(e){function t(n){var r=this;a(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=r.state,a=n.currentStyle,o=n.currentVelocity,l=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,a=i({},a),o=i({},o),l=i({},l),u=i({},u)),a[s]=c,o[s]=0,l[s]=c,u[s]=0)}t&&r.setState({currentStyle:a,currentVelocity:o,lastIdealStyle:l,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){r.animationID=v.default(function(e){var t=r.props.style;if(g.default(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||h.default(),a=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>10*w&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var o=(r.accumulatedTime-Math.floor(r.accumulatedTime/w)*w)/w,i=Math.floor(r.accumulatedTime/w),l={},u={},s={},c={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var p=t[f];if("number"==typeof p)s[f]=p,c[f]=0,l[f]=p,u[f]=0;else{for(var y=r.state.lastIdealStyle[f],m=r.state.lastIdealVelocity[f],v=0;v<i;v++){var b=d.default(w/1e3,y,m,p.val,p.stiffness,p.damping,p.precision);y=b[0],m=b[1]}var S=d.default(w/1e3,y,m,p.val,p.stiffness,p.damping,p.precision),T=S[0],O=S[1];s[f]=y+(T-y)*o,c[f]=m+(O-m)*o,l[f]=y,u[f]=m}}r.animationID=null,r.accumulatedTime-=i*w,r.setState({currentStyle:s,currentVelocity:c,lastIdealStyle:l,lastIdealVelocity:u}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return o(t,e),l(t,null,[{key:"propTypes",value:{defaultStyle:k.default.objectOf(k.default.number),style:k.default.objectOf(k.default.oneOfType([k.default.number,k.default.object])).isRequired,children:k.default.func.isRequired,onRest:k.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||f.default(n),a=s.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=h.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=h.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(v.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&T.default.Children.only(e)},t}(T.default.Component);t.default=I,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){for(var r=0;r<e.length;r++)if(!S.default(e[r],t[r],n[r]))return!1;return!0}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(6),c=r(s),f=n(2),p=r(f),d=n(8),y=r(d),h=n(4),m=r(h),v=n(5),b=r(v),g=n(7),S=r(g),T=n(3),O=r(T),k=n(1),w=r(k),I=1e3/60,P=function(e){function t(n){var r=this;a(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=r.state,n=t.currentStyles,a=t.currentVelocities,o=t.lastIdealStyles,i=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,u=!0,n[s]=l({},n[s]),a[s]=l({},a[s]),o[s]=l({},o[s]),i[s]=l({},i[s])),n[s][p]=d,a[s][p]=0,o[s][p]=d,i[s][p]=0)}}u&&r.setState({currentStyles:n,currentVelocities:a,lastIdealStyles:o,lastIdealVelocities:i})},this.startAnimationIfNecessary=function(){r.animationID=b.default(function(e){var t=r.props.styles(r.state.lastIdealStyles);if(i(r.state.currentStyles,t,r.state.currentVelocities))return r.animationID=null,void(r.accumulatedTime=0);var n=e||m.default(),a=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>10*I&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var o=(r.accumulatedTime-Math.floor(r.accumulatedTime/I)*I)/I,l=Math.floor(r.accumulatedTime/I),u=[],s=[],c=[],f=[],p=0;p<t.length;p++){var d=t[p],h={},v={},b={},g={};for(var S in d)if(Object.prototype.hasOwnProperty.call(d,S)){var T=d[S];if("number"==typeof T)h[S]=T,v[S]=0,b[S]=T,g[S]=0;else{for(var O=r.state.lastIdealStyles[p][S],k=r.state.lastIdealVelocities[p][S],w=0;w<l;w++){var P=y.default(I/1e3,O,k,T.val,T.stiffness,T.damping,T.precision);O=P[0],k=P[1]}var j=y.default(I/1e3,O,k,T.val,T.stiffness,T.damping,T.precision),_=j[0],x=j[1];h[S]=O+(_-O)*o,v[S]=k+(x-k)*o,b[S]=O,g[S]=k}}c[p]=h,f[p]=v,u[p]=b,s[p]=g}r.animationID=null,r.accumulatedTime-=l*I,r.setState({currentStyles:c,currentVelocities:f,lastIdealStyles:u,lastIdealVelocities:s}),r.unreadPropStyles=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return o(t,e),u(t,null,[{key:"propTypes",value:{defaultStyles:w.default.arrayOf(w.default.objectOf(w.default.number)),styles:w.default.func.isRequired,children:w.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(p.default),a=r.map(function(e){return c.default(e)});return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=m.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=m.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&O.default.Children.only(e)},t}(O.default.Component);t.default=P,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function l(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(var a=0;a<r.length;a++)if(!w.default(e[a],t[a].style,n[a]))return!1;return!0}function u(e,t,n,r,a,o,i,l,u){for(var s=b.default(r,a,function(e,r){var a=t(r);return null==a?(n({key:r.key,data:r.data}),null):w.default(o[e],a,i[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}}),c=[],f=[],d=[],y=[],h=0;h<s.length;h++){for(var m=s[h],v=null,g=0;g<r.length;g++)if(r[g].key===m.key){v=g;break}if(null==v){var S=e(m);c[h]=S,d[h]=S;var T=p.default(m.style);f[h]=T,y[h]=T}else c[h]=o[v],d[h]=l[v],f[h]=i[v],y[h]=u[v]}return[s,c,f,d,y]}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(6),p=r(f),d=n(2),y=r(d),h=n(8),m=r(h),v=n(23),b=r(v),g=n(4),S=r(g),T=n(5),O=r(T),k=n(7),w=r(k),I=n(3),P=r(I),j=n(1),_=r(j),x=1e3/60,M=function(e){function t(n){var r=this;a(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=u(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,e,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),n=t[0],a=t[1],o=t[2],i=t[3],l=t[4],c=0;c<e.length;c++){var f=e[c].style,p=!1;for(var d in f)if(Object.prototype.hasOwnProperty.call(f,d)){var y=f[d];"number"==typeof y&&(p||(p=!0,a[c]=s({},a[c]),o[c]=s({},o[c]),i[c]=s({},i[c]),l[c]=s({},l[c]),n[c]={key:n[c].key,data:n[c].data,style:s({},n[c].style)}),a[c][d]=y,o[c][d]=0,i[c][d]=y,l[c][d]=0,n[c].style[d]=y)}}r.setState({currentStyles:a,currentVelocities:o,mergedPropsStyles:n,lastIdealStyles:i,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){r.unmounting||(r.animationID=O.default(function(e){if(!r.unmounting){var t=r.props.styles,n="function"==typeof t?t(i(r.state.mergedPropsStyles,r.unreadPropStyles,r.state.lastIdealStyles)):t;if(l(r.state.currentStyles,n,r.state.currentVelocities,r.state.mergedPropsStyles))return r.animationID=null,void(r.accumulatedTime=0);var a=e||S.default(),o=a-r.prevTime;if(r.prevTime=a,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*x&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var s=(r.accumulatedTime-Math.floor(r.accumulatedTime/x)*x)/x,c=Math.floor(r.accumulatedTime/x),f=u(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,n,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),p=f[0],d=f[1],y=f[2],h=f[3],v=f[4],b=0;b<p.length;b++){var g=p[b].style,T={},O={},k={},w={};for(var I in g)if(Object.prototype.hasOwnProperty.call(g,I)){var P=g[I];if("number"==typeof P)T[I]=P,O[I]=0,k[I]=P,w[I]=0;else{for(var j=h[b][I],_=v[b][I],M=0;M<c;M++){var R=m.default(x/1e3,j,_,P.val,P.stiffness,P.damping,P.precision);j=R[0],_=R[1]}var C=m.default(x/1e3,j,_,P.val,P.stiffness,P.damping,P.precision),D=C[0],H=C[1];T[I]=j+(D-j)*s,O[I]=_+(H-_)*s,k[I]=j,w[I]=_}}h[b]=k,v[b]=w,d[b]=T,y[b]=O}r.animationID=null,r.accumulatedTime-=c*x,r.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:h,lastIdealVelocities:v,mergedPropsStyles:p}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return o(t,e),c(t,null,[{key:"propTypes",value:{defaultStyles:_.default.arrayOf(_.default.shape({key:_.default.string.isRequired,data:_.default.any,style:_.default.objectOf(_.default.number).isRequired})),styles:_.default.oneOfType([_.default.func,_.default.arrayOf(_.default.shape({key:_.default.string.isRequired,data:_.default.any,style:_.default.objectOf(_.default.oneOfType([_.default.number,_.default.object])).isRequired}))]).isRequired,children:_.default.func.isRequired,willEnter:_.default.func,willLeave:_.default.func,didLeave:_.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return y.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,o=e.didLeave,i="function"==typeof n?n(t):n,l=void 0;l=null==t?i:t.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var s=null==t?i.map(function(e){return y.default(e.style)}):t.map(function(e){return y.default(e.style)}),c=null==t?i.map(function(e){return p.default(e.style)}):t.map(function(e){return p.default(e.style)}),f=u(r,a,o,l,i,s,c,s,c),d=f[0],h=f[1],m=f[2],v=f[3],b=f[4];return{currentStyles:h,currentVelocities:m,lastIdealStyles:v,lastIdealVelocities:b,mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=S.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;"function"==typeof t?this.unreadPropStyles=t(i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):this.unreadPropStyles=t,null==this.animationID&&(this.prevTime=S.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(O.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&P.default.Children.only(t)},t}(P.default.Component);t.default=M,e.exports=t.default},function(e,t){"use strict";function n(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;for(var o={},a=0;a<t.length;a++)o[t[a].key]=a;for(var i=[],a=0;a<t.length;a++)i[a]=t[a];for(var a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(o,e[a].key)){var l=n(a,e[a]);null!=l&&i.push(l)}return i.sort(function(e,n){var a=o[e.key],i=o[n.key],l=r[e.key],u=r[n.key];if(null!=a&&null!=i)return o[e.key]-o[n.key];if(null!=l&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<o[c]&&u>r[c])return-1;if(a>o[c]&&u<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<o[c]&&l>r[c])return 1;if(i>o[c]&&l<r[c])return-1}}return-1})}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(20);t.Motion=r(a);var o=n(21);t.StaggeredMotion=r(o);var i=n(22);t.TransitionMotion=r(i);var l=n(26);t.spring=r(l);var u=n(10);t.presets=r(u);var s=n(2);t.stripStyle=r(s);var c=n(25);
t.reorderKeys=r(c)},function(e,t,n){"use strict";function r(){}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return o({},u,t,{val:e})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=a;var i=n(10),l=r(i),u=o({},l.default.noWobble,{precision:.01});e.exports=t.default}])});

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnnoTools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_baseReducer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_asyncLoader__ = __webpack_require__(16);
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

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_rangeslider_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(1219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducerHelper__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_base_asyncLoader__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainNav_reducer__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__annotations_annoMenu__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__annotations_overlay__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attachMenu__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deleteMenu__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchView_ocrMenu__ = __webpack_require__(1222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generated_PageImageTypeModel__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scanMenu__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__scannerSelectMenu__ = __webpack_require__(1221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lightBox_clientOnly__ = __webpack_require__(1223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__annotations_reducer__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__printApp_reducer__ = __webpack_require__(75);
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

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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

if (false) {
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

module.exports = invariant;

/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(89);
var invariant = __webpack_require__(1202);

module.exports = function() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
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
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 1209:
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

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_reducer__ = __webpack_require__(88);





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

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_asyncLoader__ = __webpack_require__(16);
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

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(25);
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

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(19);
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

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropTargetCreator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize__ = __webpack_require__(1233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filesize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_filesize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducerHelper__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load__ = __webpack_require__(1466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lazy_load___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_lazy_load__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generated_PageImageTypeModel__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__printApp_reducer__ = __webpack_require__(75);
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

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workspace_reducer__ = __webpack_require__(32);




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

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainNav_reducer__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toggle_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toggle_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(19);
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

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_reducer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchView_reducer__ = __webpack_require__(534);





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

/***/ 1223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});


/***/ }),

/***/ 1232:
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

/***/ 1233:
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

/***/ 1242:
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

/***/ 1431:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1471);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(21);

var _eventlistener = __webpack_require__(1232);

var _lodash = __webpack_require__(1209);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(1242);

var _lodash4 = _interopRequireDefault(_lodash3);

var _parentScroll = __webpack_require__(1469);

var _parentScroll2 = _interopRequireDefault(_parentScroll);

var _inViewport = __webpack_require__(1468);

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

/***/ 1467:
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

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewport;

var _getElementPosition = __webpack_require__(1467);

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

/***/ 1469:
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

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(1472);

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

/***/ 1471:
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
  module.exports = __webpack_require__(1470)();
}


/***/ }),

/***/ 1472:
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

/***/ 1476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1149);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(1479);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = __webpack_require__(1478);

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

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rangeslider = __webpack_require__(1476);

var _Rangeslider2 = _interopRequireDefault(_Rangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Rangeslider2.default;

/***/ }),

/***/ 1478:
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

/***/ 1479:
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

/***/ 1739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

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

/***/ 1752:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(21), __webpack_require__(0)) :
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

/***/ 1775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(0);
var reactDom = __webpack_require__(21);
var Draggable = _interopDefault(__webpack_require__(1752));
var Resizable = _interopDefault(__webpack_require__(1739));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9jYXJ0cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2luZGV4LmpzPzEzMTcqKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvZ2dsZS1idXR0b24vbGliL2luZGV4LmpzPzc2YTcqKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzPzQyOTgqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9pbmRleC50c3g/MTQwMyoiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanM/NDU5OSoqIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanM/MzM2OCoqIiwid2VicGFjazovLy8uL34vbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzPzNiZGMqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL2Fubm9NZW51LnRzeD9hNzE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9vdmVybGF5LnRzeD85MTY1KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvYXR0YWNoTWVudS50c3g/NWZkYSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2RlbGV0ZU1lbnUudHN4P2EwMjcqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9wYWdlLnRzeD8xYWZhKiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbk1lbnUudHN4PzRkOTYqIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FubmVyU2VsZWN0TWVudS50c3g/ZDBhZSoiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2VhcmNoVmlldy9vY3JNZW51LnRzeD9kODE3KiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvbGlnaHRCb3guY2xpZW50T25seS50c3g/Mzg5ZioiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudGxpc3RlbmVyL2V2ZW50bGlzdGVuZXIuanM/ZTcwNSoiLCJ3ZWJwYWNrOi8vLy4vfi9maWxlc2l6ZS9saWIvZmlsZXNpemUuanM/YWUzMyoiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanM/ZTFjZSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzPzczMGEqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi9MYXp5TG9hZC5qcz9hZThmKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvZ2V0RWxlbWVudFBvc2l0aW9uLmpzPzFkMTcqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9pblZpZXdwb3J0LmpzPzVmNGMqIiwid2VicGFjazovLy8uL34vcmVhY3QtbGF6eS1sb2FkL2xpYi91dGlscy9wYXJlbnRTY3JvbGwuanM/OWI0ZioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcz84OTJhKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvaW5kZXguanM/NThjNSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcz8wNjE5KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9SYW5nZXNsaWRlci5qcz84YmFjKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5qcz8yNmQ4KiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi91dGlscy5qcz80MjdmKiIsIndlYnBhY2s6Ly8vLi9+L3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmpzPzIzMmIqIiwid2VicGFjazovLy8uL34vcmUtcmVzaXphYmxlL2xpYi9pbmRleC5lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kcmFnZ2FibGUvZGlzdC9yZWFjdC1kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ybmQvbGliL2luZGV4LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0g7QUFFb0Q7QUFDSjtBQUdwQztBQUNaO0FBRVU7QUFDYztBQUVwRCxJQUFNLFdBQVcsR0FBRyxpR0FBZ0IsRUFBb0IsQ0FBQztBQUt6RCxJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRLEVBQUUsT0FBTztJQUNqQixNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLEdBQUcsRUFBRSxHQUFHO0lBQ1IsSUFBSSxFQUFFLEdBQUc7SUFDVCxVQUFVLEVBQUUsS0FBSztJQUNqQixNQUFNLEVBQUUsR0FBRztDQUNaLENBQUM7QUFFRjtJQUF1Qiw0QkFBa0M7SUFBekQ7O0lBbUZBLENBQUM7SUFsRkMsb0NBQWlCLEdBQWpCO1FBQ1Usa0NBQVEsQ0FBZ0I7UUFDaEMsUUFBUSxDQUFDLGdGQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ1EsbUJBQW9ELEVBQWxELHNCQUFRLEVBQUUsNEJBQVcsRUFBRSw4QkFBWSxDQUFnQjtRQUUzRCxJQUFNLGlCQUFpQixHQUFHLDhDQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7O0FBRTlGO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUM5TUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQzVOQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxz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UUFBUTtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsQ0FBQzs7Ozs7Ozs7O0FDdjZCRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQWlFO0FBQ3pGO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTtBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQSx5QkFBeUIsK0JBQStCO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Qzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1DQUFtQzs7QUFFMUQ7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNDQUFzQzs7QUFFdEM7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RztBQUNIO0FBQ0E7QUFDQTs7QUFFQSx3RkFBd0YsbUJBQW1CLElBQUk7QUFDL0csa0NBQWtDO0FBQ2xDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4Qyw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjQuODNlZjRhNDE3YTdmYTFjNGMzZTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEJhZGdlLCBCdXR0b24sIE1vZGFsLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgZW5zdXJlQ2FydHMsIHsgSUNhcnRzU3RhdGUsIElMaXN0U2NhbmJhdGNoZXNTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCBQYWdlTGlzdFZpZXcgZnJvbSAnLi4vbGlzdFBhZ2VzJztcbmltcG9ydCBSbmQgZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IFNjYW5CYXRjaE1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1NjYW5CYXRjaE1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3IH0gZnJvbSAnYmFzZS9hc3luY0xvYWRlcic7XG5cbmNvbnN0IENhcnRzTG9hZGVyID0gY3JlYXRlTG9hZGVyVmlldzxTY2FuQmF0Y2hNb2RlbFtdPigpO1xuXG50eXBlIENvbm5lY3RlZFByb3BzID0gSUNhcnRzU3RhdGUgJiB7fTtcbnR5cGUgVmlld1Byb3BzID0gQ29ubmVjdGVkUHJvcHMgJiB7IGRpc3BhdGNoIH07XG5cbmNvbnN0IHN0YXRpY1N0eWxlID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgYm9yZGVyOiAnc29saWQgYmxhY2sgMXB4JyxcbiAgdG9wOiAyMzgsXG4gIGxlZnQ6IDQwMCxcbiAgYmFja2dyb3VuZDogJ3JlZCcsXG4gIHpJbmRleDogMTAwLFxufTtcblxuY2xhc3MgQ2FydFZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFZpZXdQcm9wcywge30+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLmluaXRpYWxpemVDYXJ0cygpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBjYXJ0VmlzaWJsZSwgY2FydFBvc2l0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2FydFBvc2l0aW9udG9Vc2UgPSBfLmFzc2lnbih7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCB4OiA0MDAsIHk6IDIzOCB9LCBjYXJ0UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIGNhcnRWaXNpYmxlID8gKFxuICAgICAgPFJuZFxuICAgICAgICBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnXG4gICAgICAgIHNpemU9e3sgaGVpZ2h0OiBjYXJ0UG9zaXRpb250b1VzZS5oZWlnaHQsIHdpZHRoOiBjYXJ0UG9zaXRpb250b1VzZS53aWR0aCB9fVxuICAgICAgICBwb3NpdGlvbj17eyB4OiBjYXJ0UG9zaXRpb250b1VzZS54LCB5OiBjYXJ0UG9zaXRpb250b1VzZS55IH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgekluZGV4OiAxMDAsXG4gICAgICAgIH19XG4gICAgICAgIG1pbldpZHRoPXs0MDB9XG4gICAgICAgIG1pbkhlaWdodD17MTUwfVxuICAgICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPScuY2FydERyYWdIYW5kbGUnXG4gICAgICAgIG9uRHJhZ1N0b3A9eyhlLCB1aSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUNhcnRzKCkudXBkYXRlQ2FydExvY2F0aW9uKHVpLngsIHVpLnkpKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25SZXNpemVTdG9wPXsoZSwgZGlyLCByZWYsIGRlbHRhLCBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUNhcnRzKCkudXBkYXRlQ2FydFNpemUocmVmLm9mZnNldEhlaWdodCwgcmVmLm9mZnNldFdpZHRoKSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbW9kYWwtdGl0bGUnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4ODIzNTI5NDExNzY0NzA3KScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2NhcnR0b29sdGlwJz5EcmFnIGhlcmUgdG8gcmUtcG9zaXRpb24gY2FydDwvVG9vbHRpcD59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FydERyYWdIYW5kbGUnIHN0eWxlPXt7IGN1cnNvcjogJ21vdmUnIH19PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYXJyb3dzJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPiBJbWFnZSBjYXJ0XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwdWxsLXJpZ2h0J1xuICAgICAgICAgICAgICBic1N0eWxlPSdsaW5rJ1xuICAgICAgICAgICAgICBic1NpemU9J3NtJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW5Ub3A6IC0yLCBtYXJnaW5SaWdodDogMyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnN1cmVDYXJ0cygpLnNob3dDYXJ0KGZhbHNlKSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdGltZXMgdGV4dC1kYW5nZXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIHRvcDogMjUgfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIDxQYWdlTGlzdFZpZXdcbiAgICAgICAgICAgICAgICBsaXN0b2ZQYWdlc0hlbHBlcj17ZW5zdXJlQ2FydHMoKS5wYWdlc0xpc3R9XG4gICAgICAgICAgICAgICAgLypsb2FkUGFnZXNDYWxsYmFjaz17cCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC50aGVuKHBhZ2VzVG9BZGQ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZUNhcnRzKCkuYWRkUGFnZXMocGFnZXNUb0FkZCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Ki9cblxuICAgICAgICAgICAgICAgIC8vVG9vbEJ1dHRvbnM9e1BhZ2VMaXN0VG9vbHN9XG4gICAgICAgICAgICAgICAgaGFzSW5maW5pdGVTY3JvbGw9e3RydWV9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFRodW1ic0hlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgIGltYWdlTGlzdFN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIHRvcDogMjUsXG4gICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SbmQ+XG4gICAgKSA6IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCB7fT4oKHN0YXRlKSA9PiB7XG4gIHJldHVybiBlbnN1cmVDYXJ0cygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG59KShDYXJ0Vmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9jYXJ0cy9pbmRleC50c3giLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicmVhY3RcIl0sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcInJlYWN0LXRvZ2dsZS1idXR0b25cIl09dChyZXF1aXJlKFwicmVhY3RcIikpOmVbXCJyZWFjdC10b2dnbGUtYnV0dG9uXCJdPXQoZS5SZWFjdCl9KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBhPW5bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwoYS5leHBvcnRzLGEsYS5leHBvcnRzLHQpLGEubG9hZGVkPSEwLGEuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxMil9LGZ1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxNykoKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3ZhciB0PXt9O2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1cIm51bWJlclwiPT10eXBlb2YgZVtuXT9lW25dOmVbbl0udmFsKTtyZXR1cm4gdH10Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PW4sZS5leHBvcnRzPXQuZGVmYXVsdH0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXsoZnVuY3Rpb24oKXt2YXIgbixyLGE7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdz9lLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9OlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZudWxsIT09dCYmdC5ocnRpbWU/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybihuKCktYSkvMWU2fSxyPXQuaHJ0aW1lLG49ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gZT1yKCksMWU5KmVbMF0rZVsxXX0sYT1uKCkpOkRhdGUubm93PyhlLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKS1hfSxhPURhdGUubm93KCkpOihlLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKS1hfSxhPShuZXcgRGF0ZSkuZ2V0VGltZSgpKX0pLmNhbGwodGhpcyl9KS5jYWxsKHQsbig5KSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24odCl7Zm9yKHZhciByPW4oMTkpLGE9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz90OndpbmRvdyxvPVtcIm1velwiLFwid2Via2l0XCJdLGk9XCJBbmltYXRpb25GcmFtZVwiLGw9YVtcInJlcXVlc3RcIitpXSx1PWFbXCJjYW5jZWxcIitpXXx8YVtcImNhbmNlbFJlcXVlc3RcIitpXSxzPTA7IWwmJnM8by5sZW5ndGg7cysrKWw9YVtvW3NdK1wiUmVxdWVzdFwiK2ldLHU9YVtvW3NdK1wiQ2FuY2VsXCIraV18fGFbb1tzXStcIkNhbmNlbFJlcXVlc3RcIitpXTtpZighbHx8IXUpe3ZhciBjPTAsZj0wLHA9W10sZD0xZTMvNjA7bD1mdW5jdGlvbihlKXtpZigwPT09cC5sZW5ndGgpe3ZhciB0PXIoKSxuPU1hdGgubWF4KDAsZC0odC1jKSk7Yz1uK3Qsc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPXAuc2xpY2UoMCk7cC5sZW5ndGg9MDtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKylpZighZVt0XS5jYW5jZWxsZWQpdHJ5e2VbdF0uY2FsbGJhY2soYyl9Y2F0Y2goZSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9LDApfX0sTWF0aC5yb3VuZChuKSl9cmV0dXJuIHAucHVzaCh7aGFuZGxlOisrZixjYWxsYmFjazplLGNhbmNlbGxlZDohMX0pLGZ9LHU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxwLmxlbmd0aDt0KyspcFt0XS5oYW5kbGU9PT1lJiYocFt0XS5jYW5jZWxsZWQ9ITApfX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGwuY2FsbChhLGUpfSxlLmV4cG9ydHMuY2FuY2VsPWZ1bmN0aW9uKCl7dS5hcHBseShhLGFyZ3VtZW50cyl9LGUuZXhwb3J0cy5wb2x5ZmlsbD1mdW5jdGlvbihlKXtlfHwoZT1hKSxlLnJlcXVlc3RBbmltYXRpb25GcmFtZT1sLGUuY2FuY2VsQW5pbWF0aW9uRnJhbWU9dX19KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmKHRbbl09MCk7cmV0dXJuIHR9dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD1uLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7Zm9yKHZhciByIGluIHQpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQscikpe2lmKDAhPT1uW3JdKXJldHVybiExO3ZhciBhPVwibnVtYmVyXCI9PXR5cGVvZiB0W3JdP3Rbcl06dFtyXS52YWw7aWYoZVtyXSE9PWEpcmV0dXJuITF9cmV0dXJuITB9dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD1uLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbixhLG8saSxsKXt2YXIgdT0tbyoodC1hKSxzPS1pKm4sYz11K3MsZj1uK2MqZSxwPXQrZiplO3JldHVybiBNYXRoLmFicyhmKTxsJiZNYXRoLmFicyhwLWEpPGw/KHJbMF09YSxyWzFdPTAscik6KHJbMF09cCxyWzFdPWYscil9dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD1uO3ZhciByPVswLDBdO2UuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBhKGUpe2lmKGM9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KGUsMCk7aWYoKGM9PT1ufHwhYykmJnNldFRpbWVvdXQpcmV0dXJuIGM9c2V0VGltZW91dCxzZXRUaW1lb3V0KGUsMCk7dHJ5e3JldHVybiBjKGUsMCl9Y2F0Y2godCl7dHJ5e3JldHVybiBjLmNhbGwobnVsbCxlLDApfWNhdGNoKHQpe3JldHVybiBjLmNhbGwodGhpcyxlLDApfX19ZnVuY3Rpb24gbyhlKXtpZihmPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQoZSk7aWYoKGY9PT1yfHwhZikmJmNsZWFyVGltZW91dClyZXR1cm4gZj1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KGUpO3RyeXtyZXR1cm4gZihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBmLmNhbGwodGhpcyxlKX19fWZ1bmN0aW9uIGkoKXtoJiZkJiYoaD0hMSxkLmxlbmd0aD95PWQuY29uY2F0KHkpOm09LTEseS5sZW5ndGgmJmwoKSl9ZnVuY3Rpb24gbCgpe2lmKCFoKXt2YXIgZT1hKGkpO2g9ITA7Zm9yKHZhciB0PXkubGVuZ3RoO3Q7KXtmb3IoZD15LHk9W107KyttPHQ7KWQmJmRbbV0ucnVuKCk7bT0tMSx0PXkubGVuZ3RofWQ9bnVsbCxoPSExLG8oZSl9fWZ1bmN0aW9uIHUoZSx0KXt0aGlzLmZ1bj1lLHRoaXMuYXJyYXk9dH1mdW5jdGlvbiBzKCl7fXZhciBjLGYscD1lLmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e2M9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2goZSl7Yz1ufXRyeXtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6cn1jYXRjaChlKXtmPXJ9fSgpO3ZhciBkLHk9W10saD0hMSxtPS0xO3AubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTt5LnB1c2gobmV3IHUoZSx0KSksMSE9PXkubGVuZ3RofHxofHxhKGwpfSx1LnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxwLnRpdGxlPVwiYnJvd3NlclwiLHAuYnJvd3Nlcj0hMCxwLmVudj17fSxwLmFyZ3Y9W10scC52ZXJzaW9uPVwiXCIscC52ZXJzaW9ucz17fSxwLm9uPXMscC5hZGRMaXN0ZW5lcj1zLHAub25jZT1zLHAub2ZmPXMscC5yZW1vdmVMaXN0ZW5lcj1zLHAucmVtb3ZlQWxsTGlzdGVuZXJzPXMscC5lbWl0PXMscC5wcmVwZW5kTGlzdGVuZXI9cyxwLnByZXBlbmRPbmNlTGlzdGVuZXI9cyxwLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm5bXX0scC5iaW5kaW5nPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxwLmNoZGlyPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0scC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXtub1dvYmJsZTp7c3RpZmZuZXNzOjE3MCxkYW1waW5nOjI2fSxnZW50bGU6e3N0aWZmbmVzczoxMjAsZGFtcGluZzoxNH0sd29iYmx5OntzdGlmZm5lc3M6MTgwLGRhbXBpbmc6MTJ9LHN0aWZmOntzdGlmZm5lc3M6MjEwLGRhbXBpbmc6MjB9fSxlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9ZTtpZihsW3RdKXJldHVybiBsW3RdO3Q9dC5yZXBsYWNlKFwiI1wiLFwiXCIpLDM9PT10Lmxlbmd0aCYmKHQ9dFswXSt0WzBdK3RbMV0rdFsxXSt0WzJdK3RbMl0pO3ZhciBuPXQubWF0Y2goLy57Mn0vZykscj17cjpwYXJzZUludChuWzBdLDE2KSxnOnBhcnNlSW50KG5bMV0sMTYpLGI6cGFyc2VJbnQoblsyXSwxNil9O3JldHVybiBsW3RdPXIscn1mdW5jdGlvbiByKGUpe3ZhciB0PWUuaW5kZXhPZihcInJnYlwiKSE9LTEsbj1lLmluZGV4T2YoXCJyZ2JhXCIpIT0tMSxyPWUubWF0Y2goL1xcZCsvZyk7aWYodCYmIW4pcmV0dXJue3I6cGFyc2VJbnQoclswXSksZzpwYXJzZUludChyWzFdKSxiOnBhcnNlSW50KHJbMl0pfTtpZih0JiZuKXt2YXIgYT1cIjBcIj09clszXT9cIjAuXCIrcls0XTpyWzNdO3JldHVybntyOnBhcnNlSW50KHJbMF0pLGc6cGFyc2VJbnQoclsxXSksYjpwYXJzZUludChyWzJdKSxhOnBhcnNlRmxvYXQoYSl9fXJldHVybiBudWxsfWZ1bmN0aW9uIGEoZSx0LG4pe3ZhciByPWUudG9TdHJpbmcoMTYpLGE9dC50b1N0cmluZygxNiksbz1uLnRvU3RyaW5nKDE2KTtyZXR1cm4gcj1yLmxlbmd0aDwyP1wiMFwiK3I6cixhPWEubGVuZ3RoPDI/XCIwXCIrYTphLG89by5sZW5ndGg8Mj9cIjBcIitvOm8sXCIjXCIrcithK299ZnVuY3Rpb24gbyhlLHQsbixyLGEpe3ZhciBvPW4tdCxpPWEtcixsPShlLXQpL287cmV0dXJuIHIrbCppfWZ1bmN0aW9uIGkoZSx0LG4sYSxpLGwpe3ZhciB1PXZvaWQgMD09PWE/MDphLHM9dm9pZCAwPT09aT8xOmksYz1yKHQpLGY9cihuKSxwPU1hdGguZmxvb3IobyhlLHUscyxjLnIsZi5yKSksZD1NYXRoLmZsb29yKG8oZSx1LHMsYy5nLGYuZykpLHk9TWF0aC5mbG9vcihvKGUsdSxzLGMuYixmLmIpKSxoPSExLG09bnVsbDtyZXR1cm4gYy5hJiZmLmEmJihoPSEwLG09byhlLHUscyxjLmEsZi5hKSksbT9cInJnYihcIitwK1wiLFwiK2QrXCIsXCIreStcIixcIittK1wiKVwiOlwicmdiKFwiK3ArXCIsXCIrZCtcIixcIit5K1wiKVwifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuaGV4VG9SR0I9bix0LnJnYlRvT2JqPXIsdC5yZ2JUb0hleD1hLHQubWFwVmFsdWVJblJhbmdlPW8sdC5pbnRlcnBvbGF0ZUNvbG9yPWk7dmFyIGw9e319LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgYT1uKDEzKSxvPXIoYSk7ZS5leHBvcnRzPW8uZGVmYXVsdH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBpKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGw9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0sdT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLHM9bigzKSxjPXIocyksZj1uKDI0KSxwPW4oMSksZD1yKHApLHk9bigxNCksaD1uKDExKSxtPXthY3RpdmU6e2Jhc2U6XCJyZ2IoMSwxMjQsNjYpXCIsaG92ZXI6XCJyZ2IoMSwxMjQsNjYpXCJ9LGluYWN0aXZlOntiYXNlOlwicmdiKDY1LDY2LDY4KVwiLGhvdmVyOlwicmdiKDY1LDY2LDY4KVwifSxhY3RpdmVUaHVtYjp7YmFzZTpcInJnYigyNTAsMjUwLDI1MClcIixob3ZlcjpcInJnYigyNTAsMjUwLDI1MClcIn0saW5hY3RpdmVUaHVtYjp7YmFzZTpcInJnYigyNTAsMjUwLDI1MClcIixob3ZlcjpcInJnYigyNTAsMjUwLDI1MClcIn19LHY9e30sYj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe2EodGhpcyx0KTt2YXIgbj1vKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG4uc3RhdGU9e2lzSG92ZXI6ITF9LG59cmV0dXJuIGkodCxlKSx1KHQsW3trZXk6XCJvbk1vdXNlT3ZlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZSh7aXNIb3ZlcjohMH0pfX0se2tleTpcIm9uTW91c2VPdXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUoe2lzSG92ZXI6ITF9KX19LHtrZXk6XCJfY29udmVydFRvUmdiXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihlLmluZGV4T2YoXCIjXCIpIT0tMSl7dmFyIG49KDAsaC5oZXhUb1JHQikoZSk7cmV0dXJuXCJyZ2IoXCIrbi5yK1wiLCBcIituLmcrXCIsIFwiK24uYitcIilcIn1yZXR1cm4gZS5pbmRleE9mKFwicmdiXCIpPT0tMT90OmV9fSx7a2V5OlwiY2hlY2tBbGxDb2xvcnNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3QuY2hlY2tDb2xvcnMoZSxuKX0pLGV9fSx7a2V5OlwiY2hlY2tDb2xvcnNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2VbdF0/ZVt0XS5ob3Zlcj8oZVt0XS5iYXNlPXRoaXMuX2NvbnZlcnRUb1JnYihlW3RdLmJhc2UsbVt0XS5iYXNlKSxlW3RdLmhvdmVyPXRoaXMuX2NvbnZlcnRUb1JnYihlW3RdLmhvdmVyLG1bdF0uaG92ZXIpKTplW3RdLmJhc2U/KGVbdF0uYmFzZT10aGlzLl9jb252ZXJ0VG9SZ2IoZVt0XS5iYXNlLG1bdF0uYmFzZSksZVt0XS5ob3Zlcj1lW3RdLmJhc2UpOihjb25zb2xlLndhcm4oJ0NvbG9yIHByb3Agc2hvdWxkIGhhdmUgYSBcImJhc2VcIiBzdHlsZSBhbmQgYSBcImhvdmVyXCIgc3R5bGUhJyksZVt0XT1tW3RdKTplW3RdPW1bdF19fSx7a2V5OlwiaW50ZXJwb2xhdGVDb2xvcldpdGhIb3ZlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLnByb3BzLmNvbG9ycztyZXR1cm4gdGhpcy5jaGVja0NvbG9ycyhyLHQpLHRoaXMuY2hlY2tDb2xvcnMocixuKSx0aGlzLnN0YXRlLmlzSG92ZXI/e2JhY2tncm91bmRDb2xvcjooMCxoLmludGVycG9sYXRlQ29sb3IpKGUsclt0XS5ob3ZlcixyW25dLmhvdmVyLDAsNDAwKX06e2JhY2tncm91bmRDb2xvcjooMCxoLmludGVycG9sYXRlQ29sb3IpKGUsclt0XS5iYXNlLHJbbl0uYmFzZSwwLDQwMCl9fX0se2tleTpcIm1ha2VTdHlsZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuc3RhdGUuaXNIb3Zlcj9sKHt9LGUsdCk6ZX19LHtrZXk6XCJoYW5kbGVDbGlja1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2UudGFyZ2V0IT09dGhpcy5faW5wdXQmJihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5faW5wdXQuZm9jdXMoKSx0aGlzLl9pbnB1dC5jbGljaygpKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLnByb3BzLG49dC5pbnRlcm5hbFNwcmluZ1NldHRpbmcscj10LmludGVybmFsSG92ZXJTcHJpbmdTZXR0aW5nLGE9dC52YWx1ZSxvPXQudGh1bWJBbmltYXRlUmFuZ2UsaT0odC5pc0hvdmVyLHQuY29udGFpbmVyU3R5bGUpLHU9dC50cmFja1N0eWxlLHM9dC5hbmltYXRlVHJhY2tTdHlsZVRvZ2dsZSxwPXQuYW5pbWF0ZVRyYWNrU3R5bGVIb3ZlcixkPXQudGh1bWJTdHlsZUhvdmVyLGg9dC50cmFja1N0eWxlSG92ZXIsbT10LmFjdGl2ZUxhYmVsU3R5bGUsdj10LmFjdGl2ZUxhYmVsU3R5bGVIb3ZlcixiPXQuYWN0aXZlTGFiZWwsZz10LmluYWN0aXZlTGFiZWxTdHlsZSxTPXQuaW5hY3RpdmVMYWJlbFN0eWxlSG92ZXIsVD10LmluYWN0aXZlTGFiZWwsTz10LnRodW1iU3R5bGUsaz10LmFuaW1hdGVUaHVtYlN0eWxlSG92ZXIsdz10LmFuaW1hdGVUaHVtYlN0eWxlVG9nZ2xlLEk9dC50aHVtYkljb24sUD10Lm9uQ2xpY2ssaj10Lm9uVG9nZ2xlLF89dC5wYXNzVGhyb3VnaElucHV0UHJvcHMseD1uLE09cjtyZXR1cm4gYy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZi5Nb3Rpb24se3N0eWxlOntvcGFjaXR5OigwLGYuc3ByaW5nKShhPzE6MCx4KSxsZWZ0OigwLGYuc3ByaW5nKShhPzEwKm9bMV06MTAqb1swXSx4KSxjb2xvck51bWJlcjooMCxmLnNwcmluZykoYT8wOjQwMCx4KSx0b2dnbGVOdW1iZXI6KDAsZi5zcHJpbmcpKGE/NDAwOjAseCksaG92ZXJOdW1iZXI6KDAsZi5zcHJpbmcpKHRoaXMuc3RhdGUuaXNIb3Zlcj80MDA6MCxNKX19LGZ1bmN0aW9uKHQpe3ZhciBuPXQub3BhY2l0eSxyPXQubGVmdCxvPXQuY29sb3JOdW1iZXIsZj10LmhvdmVyTnVtYmVyLHg9dC50b2dnbGVOdW1iZXI7cmV0dXJuIGMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOmwoe30sZS5tYWtlU3R5bGUobCh7fSx5LnJlYWN0VG9nZ2xlLGkpKSksb25Nb3VzZU92ZXI6ZS5vbk1vdXNlT3Zlci5iaW5kKGUpLG9uTW91c2VPdXQ6ZS5vbk1vdXNlT3V0LmJpbmQoZSksb25DbGljazplLmhhbmRsZUNsaWNrLmJpbmQoZSl9LGMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOmwoe30sZS5tYWtlU3R5bGUobCh7fSx5LnJlYWN0VG9nZ2xlVHJhY2ssdSxlLmludGVycG9sYXRlQ29sb3JXaXRoSG92ZXIobyxcImFjdGl2ZVwiLFwiaW5hY3RpdmVcIikscyh4LzQwMCkpLGwoe30saCxwKGYvNDAwKSkpKX0sYy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6bCh7fSxlLm1ha2VTdHlsZShsKHt9LHkucmVhY3RUb2dnbGVPbixtKSx2KSx7b3BhY2l0eTpufSl9LGIpLGMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOmwoe30sZS5tYWtlU3R5bGUobCh7fSx5LnJlYWN0VG9nZ2xlT2ZmLGcpLFMpLHtvcGFjaXR5OjEtbn0pfSxUKSksYy5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6eS5yZWFjdFRodW1iQ2VudGVyaW5nQ29udGFpbmVyfSxjLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpsKHt9LGUubWFrZVN0eWxlKGwoe30seS5yZWFjdFRvZ2dsZVRodW1iLE8sZS5pbnRlcnBvbGF0ZUNvbG9yV2l0aEhvdmVyKG8sXCJhY3RpdmVUaHVtYlwiLFwiaW5hY3RpdmVUaHVtYlwiKSx3KHgvNDAwKSksbCh7fSxkLGsoZi80MDApKSkse3Bvc2l0aW9uOlwicmVsYXRpdmVcIixsZWZ0Ok1hdGgucm91bmQoci8xMCl9KX0sSSkpLGMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIixsKHtyZWY6ZnVuY3Rpb24odCl7ZS5faW5wdXQ9dH0sdHlwZTpcImNoZWNrYm94XCIsc3R5bGU6eS5yZWFjdFRvZ2dsZVNjcmVlblJlYWRlck9ubHksb25DbGljazpmdW5jdGlvbihlKXtQJiZQKGUpLGooYSl9LHZhbHVlOmF9LF8pKSl9KX19XSksdH0ocy5Db21wb25lbnQpO2IuZGVmYXVsdFByb3BzPXt2YWx1ZTohMSxvblRvZ2dsZTpmdW5jdGlvbigpe30sY29sb3JzOm0scGFzc1Rocm91Z2hJbnB1dFByb3BzOnt9LGFjdGl2ZUxhYmVsOlwiT05cIixjb250YWluZXJTdHlsZTp2LGFjdGl2ZUxhYmVsU3R5bGU6dixhY3RpdmVMYWJlbFN0eWxlSG92ZXI6dixpbmFjdGl2ZUxhYmVsOlwiT0ZGXCIsaW5hY3RpdmVMYWJlbFN0eWxlOnYsaW5hY3RpdmVMYWJlbFN0eWxlSG92ZXI6dix0aHVtYlN0eWxlOnYsdGh1bWJTdHlsZUhvdmVyOnYsYW5pbWF0ZVRodW1iU3R5bGVIb3ZlcjpmdW5jdGlvbigpe3JldHVybnt9fSxhbmltYXRlVGh1bWJTdHlsZVRvZ2dsZTpmdW5jdGlvbigpe3JldHVybnt9fSx0cmFja1N0eWxlOnYsdHJhY2tTdHlsZUhvdmVyOnYsYW5pbWF0ZVRyYWNrU3R5bGVIb3ZlcjpmdW5jdGlvbigpe3JldHVybnt9fSxhbmltYXRlVHJhY2tTdHlsZVRvZ2dsZTpmdW5jdGlvbigpe3JldHVybnt9fSx0aHVtYkFuaW1hdGVSYW5nZTpbMSwzM10saW50ZXJuYWxTcHJpbmdTZXR0aW5nOntzdGlmZm5lc3M6MTgwLGRhbXBpbmc6MjJ9LGludGVybmFsSG92ZXJTcHJpbmdTZXR0aW5nOntzdGlmZm5lc3M6MTgwLGRhbXBpbmc6MjB9fSxiLmRpc3BsYXlOYW1lPVwiVG9nZ2xlXCIsdC5kZWZhdWx0PWIsYi5wcm9wVHlwZXM9e3ZhbHVlOmQuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsb25Ub2dnbGU6ZC5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxwYXNzVGhyb3VnaElucHV0UHJvcHM6ZC5kZWZhdWx0Lm9iamVjdCxvbkNsaWNrOmQuZGVmYXVsdC5mdW5jLGNvbG9yczpkLmRlZmF1bHQub2JqZWN0LGFjdGl2ZUxhYmVsOmQuZGVmYXVsdC5vbmVPZlR5cGUoW2QuZGVmYXVsdC5zdHJpbmcsZC5kZWZhdWx0Lm9iamVjdF0pLGNvbnRhaW5lclN0eWxlOmQuZGVmYXVsdC5vYmplY3QsYWN0aXZlTGFiZWxTdHlsZTpkLmRlZmF1bHQub2JqZWN0LGFjdGl2ZUxhYmVsU3R5bGVIb3ZlcjpkLmRlZmF1bHQub2JqZWN0LGFjdGl2ZVRodW1iU3R5bGU6ZC5kZWZhdWx0Lm9iamVjdCxhY3RpdmVUaHVtYlN0eWxlSG92ZXI6ZC5kZWZhdWx0Lm9iamVjdCxpbmFjdGl2ZUxhYmVsOmQuZGVmYXVsdC5vbmVPZlR5cGUoW2QuZGVmYXVsdC5zdHJpbmcsZC5kZWZhdWx0Lm9iamVjdF0pLGluYWN0aXZlTGFiZWxTdHlsZTpkLmRlZmF1bHQub2JqZWN0LGluYWN0aXZlTGFiZWxTdHlsZUhvdmVyOmQuZGVmYXVsdC5vYmplY3QsdGh1bWJTdHlsZTpkLmRlZmF1bHQub2JqZWN0LHRodW1iU3R5bGVIb3ZlcjpkLmRlZmF1bHQub2JqZWN0LHRyYWNrU3R5bGU6ZC5kZWZhdWx0Lm9iamVjdCx0cmFja1N0eWxlSG92ZXI6ZC5kZWZhdWx0Lm9iamVjdCxhbmltYXRlVGh1bWJTdHlsZUhvdmVyOmQuZGVmYXVsdC5mdW5jLGFuaW1hdGVUcmFja1N0eWxlSG92ZXI6ZC5kZWZhdWx0LmZ1bmMsYW5pbWF0ZVRyYWNrU3R5bGVUb2dnbGU6ZC5kZWZhdWx0LmZ1bmMsYW5pbWF0ZVRodW1iU3R5bGVUb2dnbGU6ZC5kZWZhdWx0LmZ1bmMsaW50ZXJuYWxTcHJpbmdTZXR0aW5nOmQuZGVmYXVsdC5vYmplY3QsaW50ZXJuYWxIb3ZlclNwcmluZ1NldHRpbmc6ZC5kZWZhdWx0Lm9iamVjdCx0aHVtYkljb246ZC5kZWZhdWx0Lm9uZU9mVHlwZShbZC5kZWZhdWx0LnN0cmluZyxkLmRlZmF1bHQub2JqZWN0XSksdGh1bWJBbmltYXRlUmFuZ2U6ZC5kZWZhdWx0LmFycmF5fX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJihlW3JdPW5bcl0pfXJldHVybiBlfSxhPSh0LnJlYWN0VG9nZ2xlPW4oe2Rpc3BsYXk6XCJmbGV4XCIsd2lkdGg6NTIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1zdGFydFwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixjdXJzb3I6XCJwb2ludGVyXCIsYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIixib3JkZXI6MCxwYWRkaW5nOjAsV2Via2l0VG91Y2hDYWxsb3V0Olwibm9uZVwiLFdlYmtpdFVzZXJTZWxlY3Q6XCJub25lXCIsS2h0bWxVc2VyU2VsZWN0Olwibm9uZVwiLE1velVzZXJTZWxlY3Q6XCJub25lXCIsbXNVc2VyU2VsZWN0Olwibm9uZVwiLHVzZXJTZWxlY3Q6XCJub25lXCIsV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9LFwiV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3JcIixcInRyYW5zcGFyZW50XCIpLHtmb250U2l6ZToxMSxkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGZvbnRGYW1pbHk6XCInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcIn0pO3QucmVhY3RUb2dnbGVTY3JlZW5SZWFkZXJPbmx5PXtib3JkZXI6MCxjbGlwOlwicmVjdCgwIDAgMCAwKVwiLGhlaWdodDoxLG1hcmdpbjotMSxvdmVyZmxvdzpcImhpZGRlblwiLHBhZGRpbmc6MCxwb3NpdGlvbjpcImFic29sdXRlXCIsd2lkdGg6MX0sdC5yZWFjdFRvZ2dsZVRyYWNrPXt3aWR0aDpcIjUycHhcIixoZWlnaHQ6XCIyMHB4XCIscGFkZGluZzowLGJvcmRlclJhZGl1czpcIjI2cHhcIixkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifSx0LnJlYWN0VG9nZ2xlT249cih7fSxhLHtwb3NpdGlvbjpcInJlbGF0aXZlXCIsY29sb3I6XCIjRkFGQUZBXCIsbWFyZ2luVG9wOlwiYXV0b1wiLG1hcmdpbkJvdHRvbTpcImF1dG9cIixsaW5lSGVpZ2h0OjAsb3BhY2l0eTowLHdpZHRoOjI2LGhlaWdodDoyMCxsZWZ0OjR9KSx0LnJlYWN0VG9nZ2xlT2ZmPXIoe30sYSx7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGNvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjYpXCIsYm90dG9tOlwiMHB4XCIsbWFyZ2luVG9wOlwiYXV0b1wiLG1hcmdpbkJvdHRvbTpcImF1dG9cIixwYWRkaW5nUmlnaHQ6NSxsaW5lSGVpZ2h0OjAsd2lkdGg6MjYsaGVpZ2h0OjIwfSksdC5yZWFjdFRvZ2dsZVRodW1iPXt3aWR0aDpcIjE4cHhcIixoZWlnaHQ6XCIxOHB4XCIsZGlzcGxheTpcImZsZXhcIixhbGlnblNlbGY6XCJjZW50ZXJcIixib3hTaGFkb3c6XCIwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjMpXCIsYm9yZGVyUmFkaXVzOlwiNTAlXCIsV2Via2l0Qm94U2l6aW5nOlwiYm9yZGVyLWJveFwiLE1vekJveFNpemluZzpcImJvcmRlci1ib3hcIixib3hTaXppbmc6XCJib3JkZXItYm94XCJ9LHQucmVhY3RUaHVtYkNlbnRlcmluZ0NvbnRhaW5lcj17cG9zaXRpb246XCJhYnNvbHV0ZVwiLGhlaWdodDpcIjEwMCVcIix0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImZsZXhcIixmbGV4OjEsYWxpZ25TZWxmOlwic3RyZXRjaFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIn19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZX19dmFyIHI9ZnVuY3Rpb24oKXt9O3IudGhhdFJldHVybnM9bixyLnRoYXRSZXR1cm5zRmFsc2U9bighMSksci50aGF0UmV0dXJuc1RydWU9bighMCksci50aGF0UmV0dXJuc051bGw9bihudWxsKSxyLnRoYXRSZXR1cm5zVGhpcz1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxyLnRoYXRSZXR1cm5zQXJndW1lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQsbixyLG8saSxsLHUpe2lmKGEodCksIWUpe3ZhciBzO2lmKHZvaWQgMD09PXQpcz1uZXcgRXJyb3IoXCJNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwiKTtlbHNle3ZhciBjPVtuLHIsbyxpLGwsdV0sZj0wO3M9bmV3IEVycm9yKHQucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBjW2YrK119KSkscy5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifXRocm93IHMuZnJhbWVzVG9Qb3A9MSxzfX12YXIgYT1mdW5jdGlvbihlKXt9O2UuZXhwb3J0cz1yfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxNSksYT1uKDE2KSxvPW4oMTgpO2UuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4scixpLGwpe2whPT1vJiZhKCExLFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlc1wiKX1mdW5jdGlvbiB0KCl7cmV0dXJuIGV9ZS5pc1JlcXVpcmVkPWU7dmFyIG49e2FycmF5OmUsYm9vbDplLGZ1bmM6ZSxudW1iZXI6ZSxvYmplY3Q6ZSxzdHJpbmc6ZSxzeW1ib2w6ZSxhbnk6ZSxhcnJheU9mOnQsZWxlbWVudDplLGluc3RhbmNlT2Y6dCxub2RlOmUsb2JqZWN0T2Y6dCxvbmVPZjp0LG9uZU9mVHlwZTp0LHNoYXBlOnQsZXhhY3Q6dH07cmV0dXJuIG4uY2hlY2tQcm9wVHlwZXM9cixuLlByb3BUeXBlcz1uLG59fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIjtlLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXsoZnVuY3Rpb24oKXt2YXIgbixyLGEsbyxpLGw7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdz9lLmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9OlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZudWxsIT09dCYmdC5ocnRpbWU/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybihuKCktaSkvMWU2fSxyPXQuaHJ0aW1lLG49ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gZT1yKCksMWU5KmVbMF0rZVsxXX0sbz1uKCksbD0xZTkqdC51cHRpbWUoKSxpPW8tbCk6RGF0ZS5ub3c/KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpLWF9LGE9RGF0ZS5ub3coKSk6KGUuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpLWF9LGE9KG5ldyBEYXRlKS5nZXRUaW1lKCkpfSkuY2FsbCh0aGlzKX0pLmNhbGwodCxuKDkpKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX10Ll9fZXNNb2R1bGU9ITA7dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0sbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLHU9big2KSxzPXIodSksYz1uKDIpLGY9cihjKSxwPW4oOCksZD1yKHApLHk9big0KSxoPXIoeSksbT1uKDUpLHY9cihtKSxiPW4oNyksZz1yKGIpLFM9bigzKSxUPXIoUyksTz1uKDEpLGs9cihPKSx3PTFlMy82MCxJPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobil7dmFyIHI9dGhpczthKHRoaXMsdCksZS5jYWxsKHRoaXMsbiksdGhpcy53YXNBbmltYXRpbmc9ITEsdGhpcy5hbmltYXRpb25JRD1udWxsLHRoaXMucHJldlRpbWU9MCx0aGlzLmFjY3VtdWxhdGVkVGltZT0wLHRoaXMudW5yZWFkUHJvcFN0eWxlPW51bGwsdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZT1mdW5jdGlvbihlKXt2YXIgdD0hMSxuPXIuc3RhdGUsYT1uLmN1cnJlbnRTdHlsZSxvPW4uY3VycmVudFZlbG9jaXR5LGw9bi5sYXN0SWRlYWxTdHlsZSx1PW4ubGFzdElkZWFsVmVsb2NpdHk7Zm9yKHZhciBzIGluIGUpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscykpe3ZhciBjPWVbc107XCJudW1iZXJcIj09dHlwZW9mIGMmJih0fHwodD0hMCxhPWkoe30sYSksbz1pKHt9LG8pLGw9aSh7fSxsKSx1PWkoe30sdSkpLGFbc109YyxvW3NdPTAsbFtzXT1jLHVbc109MCl9dCYmci5zZXRTdGF0ZSh7Y3VycmVudFN0eWxlOmEsY3VycmVudFZlbG9jaXR5Om8sbGFzdElkZWFsU3R5bGU6bCxsYXN0SWRlYWxWZWxvY2l0eTp1fSl9LHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeT1mdW5jdGlvbigpe3IuYW5pbWF0aW9uSUQ9di5kZWZhdWx0KGZ1bmN0aW9uKGUpe3ZhciB0PXIucHJvcHMuc3R5bGU7aWYoZy5kZWZhdWx0KHIuc3RhdGUuY3VycmVudFN0eWxlLHQsci5zdGF0ZS5jdXJyZW50VmVsb2NpdHkpKXJldHVybiByLndhc0FuaW1hdGluZyYmci5wcm9wcy5vblJlc3QmJnIucHJvcHMub25SZXN0KCksci5hbmltYXRpb25JRD1udWxsLHIud2FzQW5pbWF0aW5nPSExLHZvaWQoci5hY2N1bXVsYXRlZFRpbWU9MCk7ci53YXNBbmltYXRpbmc9ITA7dmFyIG49ZXx8aC5kZWZhdWx0KCksYT1uLXIucHJldlRpbWU7aWYoci5wcmV2VGltZT1uLHIuYWNjdW11bGF0ZWRUaW1lPXIuYWNjdW11bGF0ZWRUaW1lK2Esci5hY2N1bXVsYXRlZFRpbWU+MTAqdyYmKHIuYWNjdW11bGF0ZWRUaW1lPTApLDA9PT1yLmFjY3VtdWxhdGVkVGltZSlyZXR1cm4gci5hbmltYXRpb25JRD1udWxsLHZvaWQgci5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7dmFyIG89KHIuYWNjdW11bGF0ZWRUaW1lLU1hdGguZmxvb3Ioci5hY2N1bXVsYXRlZFRpbWUvdykqdykvdyxpPU1hdGguZmxvb3Ioci5hY2N1bXVsYXRlZFRpbWUvdyksbD17fSx1PXt9LHM9e30sYz17fTtmb3IodmFyIGYgaW4gdClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxmKSl7dmFyIHA9dFtmXTtpZihcIm51bWJlclwiPT10eXBlb2YgcClzW2ZdPXAsY1tmXT0wLGxbZl09cCx1W2ZdPTA7ZWxzZXtmb3IodmFyIHk9ci5zdGF0ZS5sYXN0SWRlYWxTdHlsZVtmXSxtPXIuc3RhdGUubGFzdElkZWFsVmVsb2NpdHlbZl0sdj0wO3Y8aTt2Kyspe3ZhciBiPWQuZGVmYXVsdCh3LzFlMyx5LG0scC52YWwscC5zdGlmZm5lc3MscC5kYW1waW5nLHAucHJlY2lzaW9uKTt5PWJbMF0sbT1iWzFdfXZhciBTPWQuZGVmYXVsdCh3LzFlMyx5LG0scC52YWwscC5zdGlmZm5lc3MscC5kYW1waW5nLHAucHJlY2lzaW9uKSxUPVNbMF0sTz1TWzFdO3NbZl09eSsoVC15KSpvLGNbZl09bSsoTy1tKSpvLGxbZl09eSx1W2ZdPW19fXIuYW5pbWF0aW9uSUQ9bnVsbCxyLmFjY3VtdWxhdGVkVGltZS09aSp3LHIuc2V0U3RhdGUoe2N1cnJlbnRTdHlsZTpzLGN1cnJlbnRWZWxvY2l0eTpjLGxhc3RJZGVhbFN0eWxlOmwsbGFzdElkZWFsVmVsb2NpdHk6dX0pLHIudW5yZWFkUHJvcFN0eWxlPW51bGwsci5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCl9KX0sdGhpcy5zdGF0ZT10aGlzLmRlZmF1bHRTdGF0ZSgpfXJldHVybiBvKHQsZSksbCh0LG51bGwsW3trZXk6XCJwcm9wVHlwZXNcIix2YWx1ZTp7ZGVmYXVsdFN0eWxlOmsuZGVmYXVsdC5vYmplY3RPZihrLmRlZmF1bHQubnVtYmVyKSxzdHlsZTprLmRlZmF1bHQub2JqZWN0T2Yoay5kZWZhdWx0Lm9uZU9mVHlwZShbay5kZWZhdWx0Lm51bWJlcixrLmRlZmF1bHQub2JqZWN0XSkpLmlzUmVxdWlyZWQsY2hpbGRyZW46ay5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxvblJlc3Q6ay5kZWZhdWx0LmZ1bmN9LGVudW1lcmFibGU6ITB9XSksdC5wcm90b3R5cGUuZGVmYXVsdFN0YXRlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuZGVmYXVsdFN0eWxlLG49ZS5zdHlsZSxyPXR8fGYuZGVmYXVsdChuKSxhPXMuZGVmYXVsdChyKTtyZXR1cm57Y3VycmVudFN0eWxlOnIsY3VycmVudFZlbG9jaXR5OmEsbGFzdElkZWFsU3R5bGU6cixsYXN0SWRlYWxWZWxvY2l0eTphfX0sdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnByZXZUaW1lPWguZGVmYXVsdCgpLHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzPWZ1bmN0aW9uKGUpe251bGwhPXRoaXMudW5yZWFkUHJvcFN0eWxlJiZ0aGlzLmNsZWFyVW5yZWFkUHJvcFN0eWxlKHRoaXMudW5yZWFkUHJvcFN0eWxlKSx0aGlzLnVucmVhZFByb3BTdHlsZT1lLnN0eWxlLG51bGw9PXRoaXMuYW5pbWF0aW9uSUQmJih0aGlzLnByZXZUaW1lPWguZGVmYXVsdCgpLHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpKX0sdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtudWxsIT10aGlzLmFuaW1hdGlvbklEJiYodi5kZWZhdWx0LmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKSx0aGlzLmFuaW1hdGlvbklEPW51bGwpfSx0LnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUuY3VycmVudFN0eWxlKTtyZXR1cm4gZSYmVC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoZSl9LHR9KFQuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1JLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBhKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9ZnVuY3Rpb24gaShlLHQsbil7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspaWYoIVMuZGVmYXVsdChlW3JdLHRbcl0sbltyXSkpcmV0dXJuITE7cmV0dXJuITB9dC5fX2VzTW9kdWxlPSEwO3ZhciBsPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9LHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLHImJmUodCxyKSx0fX0oKSxzPW4oNiksYz1yKHMpLGY9bigyKSxwPXIoZiksZD1uKDgpLHk9cihkKSxoPW4oNCksbT1yKGgpLHY9big1KSxiPXIodiksZz1uKDcpLFM9cihnKSxUPW4oMyksTz1yKFQpLGs9bigxKSx3PXIoayksST0xZTMvNjAsUD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KG4pe3ZhciByPXRoaXM7YSh0aGlzLHQpLGUuY2FsbCh0aGlzLG4pLHRoaXMuYW5pbWF0aW9uSUQ9bnVsbCx0aGlzLnByZXZUaW1lPTAsdGhpcy5hY2N1bXVsYXRlZFRpbWU9MCx0aGlzLnVucmVhZFByb3BTdHlsZXM9bnVsbCx0aGlzLmNsZWFyVW5yZWFkUHJvcFN0eWxlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1yLnN0YXRlLG49dC5jdXJyZW50U3R5bGVzLGE9dC5jdXJyZW50VmVsb2NpdGllcyxvPXQubGFzdElkZWFsU3R5bGVzLGk9dC5sYXN0SWRlYWxWZWxvY2l0aWVzLHU9ITEscz0wO3M8ZS5sZW5ndGg7cysrKXt2YXIgYz1lW3NdLGY9ITE7Zm9yKHZhciBwIGluIGMpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMscCkpe3ZhciBkPWNbcF07XCJudW1iZXJcIj09dHlwZW9mIGQmJihmfHwoZj0hMCx1PSEwLG5bc109bCh7fSxuW3NdKSxhW3NdPWwoe30sYVtzXSksb1tzXT1sKHt9LG9bc10pLGlbc109bCh7fSxpW3NdKSksbltzXVtwXT1kLGFbc11bcF09MCxvW3NdW3BdPWQsaVtzXVtwXT0wKX19dSYmci5zZXRTdGF0ZSh7Y3VycmVudFN0eWxlczpuLGN1cnJlbnRWZWxvY2l0aWVzOmEsbGFzdElkZWFsU3R5bGVzOm8sbGFzdElkZWFsVmVsb2NpdGllczppfSl9LHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeT1mdW5jdGlvbigpe3IuYW5pbWF0aW9uSUQ9Yi5kZWZhdWx0KGZ1bmN0aW9uKGUpe3ZhciB0PXIucHJvcHMuc3R5bGVzKHIuc3RhdGUubGFzdElkZWFsU3R5bGVzKTtpZihpKHIuc3RhdGUuY3VycmVudFN0eWxlcyx0LHIuc3RhdGUuY3VycmVudFZlbG9jaXRpZXMpKXJldHVybiByLmFuaW1hdGlvbklEPW51bGwsdm9pZChyLmFjY3VtdWxhdGVkVGltZT0wKTt2YXIgbj1lfHxtLmRlZmF1bHQoKSxhPW4tci5wcmV2VGltZTtpZihyLnByZXZUaW1lPW4sci5hY2N1bXVsYXRlZFRpbWU9ci5hY2N1bXVsYXRlZFRpbWUrYSxyLmFjY3VtdWxhdGVkVGltZT4xMCpJJiYoci5hY2N1bXVsYXRlZFRpbWU9MCksMD09PXIuYWNjdW11bGF0ZWRUaW1lKXJldHVybiByLmFuaW1hdGlvbklEPW51bGwsdm9pZCByLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtmb3IodmFyIG89KHIuYWNjdW11bGF0ZWRUaW1lLU1hdGguZmxvb3Ioci5hY2N1bXVsYXRlZFRpbWUvSSkqSSkvSSxsPU1hdGguZmxvb3Ioci5hY2N1bXVsYXRlZFRpbWUvSSksdT1bXSxzPVtdLGM9W10sZj1bXSxwPTA7cDx0Lmxlbmd0aDtwKyspe3ZhciBkPXRbcF0saD17fSx2PXt9LGI9e30sZz17fTtmb3IodmFyIFMgaW4gZClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZCxTKSl7dmFyIFQ9ZFtTXTtpZihcIm51bWJlclwiPT10eXBlb2YgVCloW1NdPVQsdltTXT0wLGJbU109VCxnW1NdPTA7ZWxzZXtmb3IodmFyIE89ci5zdGF0ZS5sYXN0SWRlYWxTdHlsZXNbcF1bU10saz1yLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXNbcF1bU10sdz0wO3c8bDt3Kyspe3ZhciBQPXkuZGVmYXVsdChJLzFlMyxPLGssVC52YWwsVC5zdGlmZm5lc3MsVC5kYW1waW5nLFQucHJlY2lzaW9uKTtPPVBbMF0saz1QWzFdfXZhciBqPXkuZGVmYXVsdChJLzFlMyxPLGssVC52YWwsVC5zdGlmZm5lc3MsVC5kYW1waW5nLFQucHJlY2lzaW9uKSxfPWpbMF0seD1qWzFdO2hbU109TysoXy1PKSpvLHZbU109aysoeC1rKSpvLGJbU109TyxnW1NdPWt9fWNbcF09aCxmW3BdPXYsdVtwXT1iLHNbcF09Z31yLmFuaW1hdGlvbklEPW51bGwsci5hY2N1bXVsYXRlZFRpbWUtPWwqSSxyLnNldFN0YXRlKHtjdXJyZW50U3R5bGVzOmMsY3VycmVudFZlbG9jaXRpZXM6ZixsYXN0SWRlYWxTdHlsZXM6dSxsYXN0SWRlYWxWZWxvY2l0aWVzOnN9KSxyLnVucmVhZFByb3BTdHlsZXM9bnVsbCxyLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKX0pfSx0aGlzLnN0YXRlPXRoaXMuZGVmYXVsdFN0YXRlKCl9cmV0dXJuIG8odCxlKSx1KHQsbnVsbCxbe2tleTpcInByb3BUeXBlc1wiLHZhbHVlOntkZWZhdWx0U3R5bGVzOncuZGVmYXVsdC5hcnJheU9mKHcuZGVmYXVsdC5vYmplY3RPZih3LmRlZmF1bHQubnVtYmVyKSksc3R5bGVzOncuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsY2hpbGRyZW46dy5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZH0sZW51bWVyYWJsZTohMH1dKSx0LnByb3RvdHlwZS5kZWZhdWx0U3RhdGU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS5kZWZhdWx0U3R5bGVzLG49ZS5zdHlsZXMscj10fHxuKCkubWFwKHAuZGVmYXVsdCksYT1yLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gYy5kZWZhdWx0KGUpfSk7cmV0dXJue2N1cnJlbnRTdHlsZXM6cixjdXJyZW50VmVsb2NpdGllczphLGxhc3RJZGVhbFN0eWxlczpyLGxhc3RJZGVhbFZlbG9jaXRpZXM6YX19LHQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dGhpcy5wcmV2VGltZT1tLmRlZmF1bHQoKSx0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKX0sdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcz1mdW5jdGlvbihlKXtudWxsIT10aGlzLnVucmVhZFByb3BTdHlsZXMmJnRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGVzKSx0aGlzLnVucmVhZFByb3BTdHlsZXM9ZS5zdHlsZXModGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMpLG51bGw9PXRoaXMuYW5pbWF0aW9uSUQmJih0aGlzLnByZXZUaW1lPW0uZGVmYXVsdCgpLHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpKX0sdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtudWxsIT10aGlzLmFuaW1hdGlvbklEJiYoYi5kZWZhdWx0LmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKSx0aGlzLmFuaW1hdGlvbklEPW51bGwpfSx0LnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcyk7cmV0dXJuIGUmJk8uZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGUpfSx0fShPLmRlZmF1bHQuQ29tcG9uZW50KTt0LmRlZmF1bHQ9UCxlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gYShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbyhlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfWZ1bmN0aW9uIGkoZSx0LG4pe3ZhciByPXQ7cmV0dXJuIG51bGw9PXI/ZS5tYXAoZnVuY3Rpb24oZSx0KXtyZXR1cm57a2V5OmUua2V5LGRhdGE6ZS5kYXRhLHN0eWxlOm5bdF19fSk6ZS5tYXAoZnVuY3Rpb24oZSx0KXtmb3IodmFyIGE9MDthPHIubGVuZ3RoO2ErKylpZihyW2FdLmtleT09PWUua2V5KXJldHVybntrZXk6clthXS5rZXksZGF0YTpyW2FdLmRhdGEsc3R5bGU6blt0XX07cmV0dXJue2tleTplLmtleSxkYXRhOmUuZGF0YSxzdHlsZTpuW3RdfX0pfWZ1bmN0aW9uIGwoZSx0LG4scil7aWYoci5sZW5ndGghPT10Lmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIGE9MDthPHIubGVuZ3RoO2ErKylpZihyW2FdLmtleSE9PXRbYV0ua2V5KXJldHVybiExO2Zvcih2YXIgYT0wO2E8ci5sZW5ndGg7YSsrKWlmKCF3LmRlZmF1bHQoZVthXSx0W2FdLnN0eWxlLG5bYV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIHUoZSx0LG4scixhLG8saSxsLHUpe2Zvcih2YXIgcz1iLmRlZmF1bHQocixhLGZ1bmN0aW9uKGUscil7dmFyIGE9dChyKTtyZXR1cm4gbnVsbD09YT8obih7a2V5OnIua2V5LGRhdGE6ci5kYXRhfSksbnVsbCk6dy5kZWZhdWx0KG9bZV0sYSxpW2VdKT8obih7a2V5OnIua2V5LGRhdGE6ci5kYXRhfSksbnVsbCk6e2tleTpyLmtleSxkYXRhOnIuZGF0YSxzdHlsZTphfX0pLGM9W10sZj1bXSxkPVtdLHk9W10saD0wO2g8cy5sZW5ndGg7aCsrKXtmb3IodmFyIG09c1toXSx2PW51bGwsZz0wO2c8ci5sZW5ndGg7ZysrKWlmKHJbZ10ua2V5PT09bS5rZXkpe3Y9ZzticmVha31pZihudWxsPT12KXt2YXIgUz1lKG0pO2NbaF09UyxkW2hdPVM7dmFyIFQ9cC5kZWZhdWx0KG0uc3R5bGUpO2ZbaF09VCx5W2hdPVR9ZWxzZSBjW2hdPW9bdl0sZFtoXT1sW3ZdLGZbaF09aVt2XSx5W2hdPXVbdl19cmV0dXJuW3MsYyxmLGQseV19dC5fX2VzTW9kdWxlPSEwO3ZhciBzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9LGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLHImJmUodCxyKSx0fX0oKSxmPW4oNikscD1yKGYpLGQ9bigyKSx5PXIoZCksaD1uKDgpLG09cihoKSx2PW4oMjMpLGI9cih2KSxnPW4oNCksUz1yKGcpLFQ9big1KSxPPXIoVCksaz1uKDcpLHc9cihrKSxJPW4oMyksUD1yKEkpLGo9bigxKSxfPXIoaikseD0xZTMvNjAsTT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KG4pe3ZhciByPXRoaXM7YSh0aGlzLHQpLGUuY2FsbCh0aGlzLG4pLHRoaXMudW5tb3VudGluZz0hMSx0aGlzLmFuaW1hdGlvbklEPW51bGwsdGhpcy5wcmV2VGltZT0wLHRoaXMuYWNjdW11bGF0ZWRUaW1lPTAsdGhpcy51bnJlYWRQcm9wU3R5bGVzPW51bGwsdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9dShyLnByb3BzLndpbGxFbnRlcixyLnByb3BzLndpbGxMZWF2ZSxyLnByb3BzLmRpZExlYXZlLHIuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsZSxyLnN0YXRlLmN1cnJlbnRTdHlsZXMsci5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcyxyLnN0YXRlLmxhc3RJZGVhbFN0eWxlcyxyLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXMpLG49dFswXSxhPXRbMV0sbz10WzJdLGk9dFszXSxsPXRbNF0sYz0wO2M8ZS5sZW5ndGg7YysrKXt2YXIgZj1lW2NdLnN0eWxlLHA9ITE7Zm9yKHZhciBkIGluIGYpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGYsZCkpe3ZhciB5PWZbZF07XCJudW1iZXJcIj09dHlwZW9mIHkmJihwfHwocD0hMCxhW2NdPXMoe30sYVtjXSksb1tjXT1zKHt9LG9bY10pLGlbY109cyh7fSxpW2NdKSxsW2NdPXMoe30sbFtjXSksbltjXT17a2V5Om5bY10ua2V5LGRhdGE6bltjXS5kYXRhLHN0eWxlOnMoe30sbltjXS5zdHlsZSl9KSxhW2NdW2RdPXksb1tjXVtkXT0wLGlbY11bZF09eSxsW2NdW2RdPTAsbltjXS5zdHlsZVtkXT15KX19ci5zZXRTdGF0ZSh7Y3VycmVudFN0eWxlczphLGN1cnJlbnRWZWxvY2l0aWVzOm8sbWVyZ2VkUHJvcHNTdHlsZXM6bixsYXN0SWRlYWxTdHlsZXM6aSxsYXN0SWRlYWxWZWxvY2l0aWVzOmx9KX0sdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5PWZ1bmN0aW9uKCl7ci51bm1vdW50aW5nfHwoci5hbmltYXRpb25JRD1PLmRlZmF1bHQoZnVuY3Rpb24oZSl7aWYoIXIudW5tb3VudGluZyl7dmFyIHQ9ci5wcm9wcy5zdHlsZXMsbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoaShyLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLHIudW5yZWFkUHJvcFN0eWxlcyxyLnN0YXRlLmxhc3RJZGVhbFN0eWxlcykpOnQ7aWYobChyLnN0YXRlLmN1cnJlbnRTdHlsZXMsbixyLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzLHIuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMpKXJldHVybiByLmFuaW1hdGlvbklEPW51bGwsdm9pZChyLmFjY3VtdWxhdGVkVGltZT0wKTt2YXIgYT1lfHxTLmRlZmF1bHQoKSxvPWEtci5wcmV2VGltZTtpZihyLnByZXZUaW1lPWEsci5hY2N1bXVsYXRlZFRpbWU9ci5hY2N1bXVsYXRlZFRpbWUrbyxyLmFjY3VtdWxhdGVkVGltZT4xMCp4JiYoci5hY2N1bXVsYXRlZFRpbWU9MCksMD09PXIuYWNjdW11bGF0ZWRUaW1lKXJldHVybiByLmFuaW1hdGlvbklEPW51bGwsdm9pZCByLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtmb3IodmFyIHM9KHIuYWNjdW11bGF0ZWRUaW1lLU1hdGguZmxvb3Ioci5hY2N1bXVsYXRlZFRpbWUveCkqeCkveCxjPU1hdGguZmxvb3Ioci5hY2N1bXVsYXRlZFRpbWUveCksZj11KHIucHJvcHMud2lsbEVudGVyLHIucHJvcHMud2lsbExlYXZlLHIucHJvcHMuZGlkTGVhdmUsci5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcyxuLHIuc3RhdGUuY3VycmVudFN0eWxlcyxyLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzLHIuc3RhdGUubGFzdElkZWFsU3R5bGVzLHIuc3RhdGUubGFzdElkZWFsVmVsb2NpdGllcykscD1mWzBdLGQ9ZlsxXSx5PWZbMl0saD1mWzNdLHY9Zls0XSxiPTA7YjxwLmxlbmd0aDtiKyspe3ZhciBnPXBbYl0uc3R5bGUsVD17fSxPPXt9LGs9e30sdz17fTtmb3IodmFyIEkgaW4gZylpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZyxJKSl7dmFyIFA9Z1tJXTtpZihcIm51bWJlclwiPT10eXBlb2YgUClUW0ldPVAsT1tJXT0wLGtbSV09UCx3W0ldPTA7ZWxzZXtmb3IodmFyIGo9aFtiXVtJXSxfPXZbYl1bSV0sTT0wO008YztNKyspe3ZhciBSPW0uZGVmYXVsdCh4LzFlMyxqLF8sUC52YWwsUC5zdGlmZm5lc3MsUC5kYW1waW5nLFAucHJlY2lzaW9uKTtqPVJbMF0sXz1SWzFdfXZhciBDPW0uZGVmYXVsdCh4LzFlMyxqLF8sUC52YWwsUC5zdGlmZm5lc3MsUC5kYW1waW5nLFAucHJlY2lzaW9uKSxEPUNbMF0sSD1DWzFdO1RbSV09aisoRC1qKSpzLE9bSV09XysoSC1fKSpzLGtbSV09aix3W0ldPV99fWhbYl09ayx2W2JdPXcsZFtiXT1ULHlbYl09T31yLmFuaW1hdGlvbklEPW51bGwsci5hY2N1bXVsYXRlZFRpbWUtPWMqeCxyLnNldFN0YXRlKHtjdXJyZW50U3R5bGVzOmQsY3VycmVudFZlbG9jaXRpZXM6eSxsYXN0SWRlYWxTdHlsZXM6aCxsYXN0SWRlYWxWZWxvY2l0aWVzOnYsbWVyZ2VkUHJvcHNTdHlsZXM6cH0pLHIudW5yZWFkUHJvcFN0eWxlcz1udWxsLHIuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpfX0pKX0sdGhpcy5zdGF0ZT10aGlzLmRlZmF1bHRTdGF0ZSgpfXJldHVybiBvKHQsZSksYyh0LG51bGwsW3trZXk6XCJwcm9wVHlwZXNcIix2YWx1ZTp7ZGVmYXVsdFN0eWxlczpfLmRlZmF1bHQuYXJyYXlPZihfLmRlZmF1bHQuc2hhcGUoe2tleTpfLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsZGF0YTpfLmRlZmF1bHQuYW55LHN0eWxlOl8uZGVmYXVsdC5vYmplY3RPZihfLmRlZmF1bHQubnVtYmVyKS5pc1JlcXVpcmVkfSkpLHN0eWxlczpfLmRlZmF1bHQub25lT2ZUeXBlKFtfLmRlZmF1bHQuZnVuYyxfLmRlZmF1bHQuYXJyYXlPZihfLmRlZmF1bHQuc2hhcGUoe2tleTpfLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsZGF0YTpfLmRlZmF1bHQuYW55LHN0eWxlOl8uZGVmYXVsdC5vYmplY3RPZihfLmRlZmF1bHQub25lT2ZUeXBlKFtfLmRlZmF1bHQubnVtYmVyLF8uZGVmYXVsdC5vYmplY3RdKSkuaXNSZXF1aXJlZH0pKV0pLmlzUmVxdWlyZWQsY2hpbGRyZW46Xy5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCx3aWxsRW50ZXI6Xy5kZWZhdWx0LmZ1bmMsd2lsbExlYXZlOl8uZGVmYXVsdC5mdW5jLGRpZExlYXZlOl8uZGVmYXVsdC5mdW5jfSxlbnVtZXJhYmxlOiEwfSx7a2V5OlwiZGVmYXVsdFByb3BzXCIsdmFsdWU6e3dpbGxFbnRlcjpmdW5jdGlvbihlKXtyZXR1cm4geS5kZWZhdWx0KGUuc3R5bGUpfSx3aWxsTGVhdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sZGlkTGVhdmU6ZnVuY3Rpb24oKXt9fSxlbnVtZXJhYmxlOiEwfV0pLHQucHJvdG90eXBlLmRlZmF1bHRTdGF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLmRlZmF1bHRTdHlsZXMsbj1lLnN0eWxlcyxyPWUud2lsbEVudGVyLGE9ZS53aWxsTGVhdmUsbz1lLmRpZExlYXZlLGk9XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQpOm4sbD12b2lkIDA7bD1udWxsPT10P2k6dC5tYXAoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxpLmxlbmd0aDt0KyspaWYoaVt0XS5rZXk9PT1lLmtleSlyZXR1cm4gaVt0XTtyZXR1cm4gZX0pO3ZhciBzPW51bGw9PXQ/aS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHkuZGVmYXVsdChlLnN0eWxlKX0pOnQubWFwKGZ1bmN0aW9uKGUpe3JldHVybiB5LmRlZmF1bHQoZS5zdHlsZSl9KSxjPW51bGw9PXQ/aS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHAuZGVmYXVsdChlLnN0eWxlKX0pOnQubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBwLmRlZmF1bHQoZS5zdHlsZSl9KSxmPXUocixhLG8sbCxpLHMsYyxzLGMpLGQ9ZlswXSxoPWZbMV0sbT1mWzJdLHY9ZlszXSxiPWZbNF07cmV0dXJue2N1cnJlbnRTdHlsZXM6aCxjdXJyZW50VmVsb2NpdGllczptLGxhc3RJZGVhbFN0eWxlczp2LGxhc3RJZGVhbFZlbG9jaXRpZXM6YixtZXJnZWRQcm9wc1N0eWxlczpkfX0sdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnByZXZUaW1lPVMuZGVmYXVsdCgpLHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzPWZ1bmN0aW9uKGUpe3RoaXMudW5yZWFkUHJvcFN0eWxlcyYmdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSh0aGlzLnVucmVhZFByb3BTdHlsZXMpO3ZhciB0PWUuc3R5bGVzO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dGhpcy51bnJlYWRQcm9wU3R5bGVzPXQoaSh0aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLHRoaXMudW5yZWFkUHJvcFN0eWxlcyx0aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcykpOnRoaXMudW5yZWFkUHJvcFN0eWxlcz10LG51bGw9PXRoaXMuYW5pbWF0aW9uSUQmJih0aGlzLnByZXZUaW1lPVMuZGVmYXVsdCgpLHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpKX0sdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnVubW91bnRpbmc9ITAsbnVsbCE9dGhpcy5hbmltYXRpb25JRCYmKE8uZGVmYXVsdC5jYW5jZWwodGhpcy5hbmltYXRpb25JRCksdGhpcy5hbmltYXRpb25JRD1udWxsKX0sdC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9aSh0aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLHRoaXMudW5yZWFkUHJvcFN0eWxlcyx0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpLHQ9dGhpcy5wcm9wcy5jaGlsZHJlbihlKTtyZXR1cm4gdCYmUC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkodCl9LHR9KFAuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1NLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7Zm9yKHZhciByPXt9LGE9MDthPGUubGVuZ3RoO2ErKylyW2VbYV0ua2V5XT1hO2Zvcih2YXIgbz17fSxhPTA7YTx0Lmxlbmd0aDthKyspb1t0W2FdLmtleV09YTtmb3IodmFyIGk9W10sYT0wO2E8dC5sZW5ndGg7YSsrKWlbYV09dFthXTtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKylpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sZVthXS5rZXkpKXt2YXIgbD1uKGEsZVthXSk7bnVsbCE9bCYmaS5wdXNoKGwpfXJldHVybiBpLnNvcnQoZnVuY3Rpb24oZSxuKXt2YXIgYT1vW2Uua2V5XSxpPW9bbi5rZXldLGw9cltlLmtleV0sdT1yW24ua2V5XTtpZihudWxsIT1hJiZudWxsIT1pKXJldHVybiBvW2Uua2V5XS1vW24ua2V5XTtpZihudWxsIT1sJiZudWxsIT11KXJldHVybiByW2Uua2V5XS1yW24ua2V5XTtpZihudWxsIT1hKXtmb3IodmFyIHM9MDtzPHQubGVuZ3RoO3MrKyl7dmFyIGM9dFtzXS5rZXk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsYykpe2lmKGE8b1tjXSYmdT5yW2NdKXJldHVybi0xO2lmKGE+b1tjXSYmdTxyW2NdKXJldHVybiAxfX1yZXR1cm4gMX1mb3IodmFyIHM9MDtzPHQubGVuZ3RoO3MrKyl7dmFyIGM9dFtzXS5rZXk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsYykpe2lmKGk8b1tjXSYmbD5yW2NdKXJldHVybiAxO2lmKGk+b1tjXSYmbDxyW2NdKXJldHVybi0xfX1yZXR1cm4tMX0pfXQuX19lc01vZHVsZT0hMCx0LmRlZmF1bHQ9bixlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2UuZGVmYXVsdDplfXQuX19lc01vZHVsZT0hMDt2YXIgYT1uKDIwKTt0Lk1vdGlvbj1yKGEpO3ZhciBvPW4oMjEpO3QuU3RhZ2dlcmVkTW90aW9uPXIobyk7dmFyIGk9bigyMik7dC5UcmFuc2l0aW9uTW90aW9uPXIoaSk7dmFyIGw9bigyNik7dC5zcHJpbmc9cihsKTt2YXIgdT1uKDEwKTt0LnByZXNldHM9cih1KTt2YXIgcz1uKDIpO3Quc3RyaXBTdHlsZT1yKHMpO3ZhciBjPW4oMjUpO1xudC5yZW9yZGVyS2V5cz1yKGMpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe310Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXIsZS5leHBvcnRzPXQuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIGEoZSx0KXtyZXR1cm4gbyh7fSx1LHQse3ZhbDplfSl9dC5fX2VzTW9kdWxlPSEwO3ZhciBvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9O3QuZGVmYXVsdD1hO3ZhciBpPW4oMTApLGw9cihpKSx1PW8oe30sbC5kZWZhdWx0Lm5vV29iYmxlLHtwcmVjaXNpb246LjAxfSk7ZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC10b2dnbGUtYnV0dG9uL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGhhbmRsZUFjdGlvbiwgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5pbXBvcnQgeyBBbm5vRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0Fubm9EYXRhTW9kZWwnO1xuaW1wb3J0IHsgSUFzeW5jUmVzdWx0IH0gZnJvbSAnYmFzZS9hc3luY1N0YXRlTWlkZGxld2FyZSc7XG5pbXBvcnQgUmVkdWNlckJhc2UgZnJvbSAnYmFzZS9iYXNlUmVkdWNlcic7XG5pbXBvcnQgeyBjaGVja0ZldGNoRXJyb3IgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcblxuZXhwb3J0IGVudW0gQW5ub1Rvb2xzIHtcbiAgYW5ub3RhdGUgPSAxLFxuICBoaWdobGlnaHQsXG4gIHJlZGFjdCxcbiAgY2xlYXIsXG4gIHNob3dPcmlnaW5hbCxcbiAgcm90YXRlUmlnaHQsXG4gIHJvdGF0ZUxlZnQsXG59XG5cbnR5cGUgQW5ub1RleHRQb3NQcm9wcyA9IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfTtcbnR5cGUgQW5ub1RleHRQcm9wcyA9IHsgdGV4dDogc3RyaW5nOyBwb3NpdGlvbjogQW5ub1RleHRQb3NQcm9wcyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIElBbm5vdGF0ZVN0YXRlIHtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRUb29sOiBBbm5vVG9vbHM7XG4gIHJlYWRvbmx5IGFubm9EYXRhQXN5bmM6IElBc3luY1Jlc3VsdDxBbm5vRGF0YU1vZGVsPjtcblxuICByZWFkb25seSBhbm5vVGV4dDogQW5ub1RleHRQcm9wcztcblxuICAvL1RoZSBwYWdlIGZvciB3aGloYyB3ZSBhcmUgZG9pbmcgYW5ub3RhdGlvbnNcbiAgcmVhZG9ubHkgYW5ub1BhZ2VJZDogc3RyaW5nO1xufVxuXG50eXBlIG15QWN0aW9ucyA9IHtcbiAgc2VsZWN0VG9vbDogKHZhbHVlPzogQW5ub1Rvb2xzKSA9PiBBbm5vVG9vbHM7XG4gIHVwZGF0ZUFubm9EYXRhOiAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gUHJvbWlzZUxpa2U8QW5ub0RhdGFNb2RlbD47XG5cbiAgc2V0QW5ub1RleHQ6ICh2YWx1ZT86IEFubm9UZXh0UHJvcHMpID0+IEFubm9UZXh0UHJvcHM7XG59O1xuXG5jbGFzcyBhbm5vdGF0ZVJlZHVjZXIgZXh0ZW5kcyBSZWR1Y2VyQmFzZTxJQW5ub3RhdGVTdGF0ZSwgbXlBY3Rpb25zPiB7XG4gIGNyZWF0ZUFjdGlvbkxpc3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdFRvb2w6ICh2YWx1ZT86IEFubm9Ub29scykgPT4gdmFsdWUsXG4gICAgICBzZXRBbm5vVGV4dDogKHZhbHVlPzogQW5ub1RleHRQcm9wcykgPT4gdmFsdWUsXG4gICAgICB1cGRhdGVBbm5vRGF0YTogW1xuICAgICAgICAocGFnZUlkOiBzdHJpbmcsIHZhbHVlOiBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPikgPT4gdmFsdWUsXG4gICAgICAgIChwYWdlSWQ6IHN0cmluZywgdmFsdWU6IFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+KSA9PiAoe1xuICAgICAgICAgIEFzeW5jOiB0cnVlLFxuICAgICAgICAgIGFubm9QYWdlSWQ6IHBhZ2VJZCxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICByZWR1Y2VycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRUb29sOiBoYW5kbGVBY3Rpb24oXG4gICAgICAgIHRoaXMuX215QWN0aW9ucy5zZWxlY3RUb29sLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG5cbiAgICAgIGFubm9EYXRhQXN5bmM6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbCxcbiAgICAgICksXG5cbiAgICAgIGFubm9QYWdlSWQ6IGhhbmRsZUFjdGlvbihcbiAgICAgICAgdGhpcy5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhLFxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgYW5ub1BhZ2VJZCB9ID0gYWN0aW9uLm1ldGE7XG4gICAgICAgICAgcmV0dXJuIGFubm9QYWdlSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIG51bGwsXG4gICAgICApLFxuXG4gICAgICBhbm5vVGV4dDogaGFuZGxlQWN0aW9uKFxuICAgICAgICB0aGlzLl9teUFjdGlvbnMuc2V0QW5ub1RleHQsXG4gICAgICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBudWxsLFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tJZlVuTW91bnRlZChwYWdlSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IF9taW5lID0gdGhpcztcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgLy9pZiB0aGUgbGFzdCBwYWdlIHRoYXQgd2UgbW91bnRlZCBhbm4gdmlldyBpcyBkaXNtb3VudGVkIHVuc2VsZWN0IHRoZSB0b29sXG4gICAgICAvL3RoaXMgaXMgbmVlZGVkXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhbm5vUGFnZUlkIH0gPSBfbWluZS5nZXRDdXJyZW50U3RhdGUoZ2V0U3RhdGUoKSk7XG4gICAgICAgIGlmIChhbm5vUGFnZUlkID09IHBhZ2VJZCkgZGlzcGF0Y2goX21pbmUuc2VsZWN0VG9vbChudWxsKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0VG9vbCh2YWx1ZT86IEFubm9Ub29scykge1xuICAgIGNvbnN0IF9taW5lID0gdGhpcztcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChudWxsKSk7XG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNlbGVjdFRvb2wodmFsdWUpKTtcbiAgICB9O1xuICB9XG5cbiAgcm90YXRlSW1hZ2UocGFnZUlkOiBzdHJpbmcsIGxlZnQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vbmVlZCB0byBydW4gYSByZW5kZXIgcGFzcyBmaXJzdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVQID0gZmV0Y2goYC9hcGkvYW5ub3RhdGlvbnMvcm90YXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VJZCl9P2xlZnQ9JHtsZWZ0fWApXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjaGVja0ZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKF9taW5lLnNlbGVjdFRvb2wobnVsbCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnVwZGF0ZUFubm9EYXRhKHBhZ2VJZCwgc2F2ZVApKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH07XG4gIH1cblxuICBsb2FkQW5ub3RhdGlvbnMocGFnZUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzYXZlUCA9IGZldGNoKGAvYXBpL2Fubm90YXRpb25zL2Fubm90YXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VJZCl9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY2hlY2tGZXRjaEVycm9yKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2VMaWtlPEFubm9EYXRhTW9kZWw+KTtcblxuICAgIHJldHVybiB0aGlzLl9teUFjdGlvbnMudXBkYXRlQW5ub0RhdGEocGFnZUlkLCBzYXZlUCk7XG4gIH1cblxuICB1cGRhdGVBbm5vVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYW5ub1RleHQgfSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKGdldFN0YXRlKCkpO1xuICAgICAgaWYgKCFhbm5vVGV4dCkgcmV0dXJuO1xuXG4gICAgICByZXR1cm4gZGlzcGF0Y2goX21pbmUuX215QWN0aW9ucy5zZXRBbm5vVGV4dChfLmFzc2lnbih7fSwgYW5ub1RleHQsIHsgdGV4dCB9KSkpO1xuICAgIH07XG4gIH1cblxuICBpbml0QW5ub1RleHQocG9zaXRpb246IEFubm9UZXh0UG9zUHJvcHMpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNldEFubm9UZXh0KHsgdGV4dDogJycsIHBvc2l0aW9uIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgc2F2ZUFubm90YXRpb25zKHBhZ2VJZDogc3RyaW5nLCBkYXRhVXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBfbWluZSA9IHRoaXM7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIC8vQmVmb3JlIHdlIHNhdmUgdGhlIGNhbnZhcyBjbGVhciBhbnkgYW5ub1RleHQgYm94XG4gICAgICBkaXNwYXRjaChfbWluZS5fbXlBY3Rpb25zLnNldEFubm9UZXh0KG51bGwpKTtcblxuICAgICAgY29uc3QgYW5ub01vZGVsOiBBbm5vRGF0YU1vZGVsID0ge1xuICAgICAgICBkYXRhVXJsLFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2F2ZVAgPSBmZXRjaChgL2FwaS9hbm5vdGF0aW9ucy9hbm5vdGF0ZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYWdlSWQpfWAsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhbm5vTW9kZWwpLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjaGVja0ZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlTGlrZTxBbm5vRGF0YU1vZGVsPik7XG5cbiAgICAgIGRpc3BhdGNoKF9taW5lLl9teUFjdGlvbnMudXBkYXRlQW5ub0RhdGEocGFnZUlkLCBzYXZlUCkpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gYW5ub3RhdGVSZWR1Y2VyLmdldEluc3RhbmNlKGFubm90YXRlUmVkdWNlciwgJ2Fubm90YXRpb25zJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9hbm5vdGF0aW9ucy9yZWR1Y2VyLnRzIiwiLy8gVG8gaW5jbHVkZSB0aGUgZGVmYXVsdCBzdHlsZXNcbmltcG9ydCAncmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzcyc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgQVBhZ2UsIHsgRG5EUHJvcHMsIERyb3BUYXJnZXRDcmVhdG9yLCBJZHJvcFRhcmdldFByb3BzIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hlY2tib3gsXG4gIERyb3Bkb3duQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgTWVudUl0ZW0sXG4gIE1vZGFsLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IERSQUdUWVBFX1BBR0UsIElMaXN0UGFnZXNTdGF0ZSwgcGFnZU5hdiB9IGZyb20gJy4vcmVkdWNlckhlbHBlcic7XG5pbXBvcnQgeyBjcmVhdGVMb2FkZXJWaWV3LCBjcmVhdGVTYXZlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcbmltcG9ydCBlbnN1cmVNYWluTmF2LCB7IElOYXZNZW51U3RhdGUgfSBmcm9tICcuLi9tYWluTmF2L3JlZHVjZXInO1xuXG5pbXBvcnQgQW5ub01lbnUgZnJvbSAnLi4vYW5ub3RhdGlvbnMvYW5ub01lbnUnO1xuaW1wb3J0IEFubm9PdmVybGF5VmlldyBmcm9tICcuLi9hbm5vdGF0aW9ucy9vdmVybGF5JztcbmltcG9ydCBBdHRhY2hNZW51IGZyb20gJy4vYXR0YWNoTWVudSc7XG5pbXBvcnQgQ29weVBhc3RlTWVudSBmcm9tICcuL2NvcHlQYXN0ZU1lbnUnO1xuaW1wb3J0IERlbGV0ZU1lbnUgZnJvbSAnLi9kZWxldGVNZW51JztcbmltcG9ydCBPY3JNZW51IGZyb20gJy4uL3NlYXJjaFZpZXcvb2NyTWVudSc7XG5pbXBvcnQgeyBQYWdlSG9sZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUhvbGRlck1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VJbWFnZU1vZGVsJztcbmltcG9ydCB7IFBhZ2VJbWFnZVR5cGVNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VUeXBlTW9kZWwnO1xuaW1wb3J0IFNjYW5NZW51IGZyb20gJy4vc2Nhbk1lbnUnO1xuaW1wb3J0IFNjYW5uZXJTZWxlY3RNZW51IGZyb20gJy4vc2Nhbm5lclNlbGVjdE1lbnUnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1yYW5nZXNsaWRlcic7XG5pbXBvcnQgX1BhZ2VMaWdodEJveCBmcm9tICcuL2xpZ2h0Qm94LmNsaWVudE9ubHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVBbm5vdGF0aW9ucyBmcm9tICcuLi9hbm5vdGF0aW9ucy9yZWR1Y2VyJztcbmltcG9ydCBlbnN1cmVQcmludEFwcCBmcm9tICcuLi9wcmludEFwcC9yZWR1Y2VyJztcblxuY29uc3QgVXBsb2FkU3RhdHVzVmlldyA9IGNyZWF0ZVNhdmVyVmlldzxib29sZWFuPigpO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0gSWRyb3BUYXJnZXRQcm9wcyAmIHtcbiAgLy9yZWFjdCBlbGVtZW50IHRvIHNob3cgb24gdGhlIGFjdGl2ZSBwYWdlXG4gIEFjdGl2ZVBhZ2VUb29sQmFyPzogYW55O1xuXG4gIC8vcmVhY3QgZWxlbWVudCB0byBzaG93IGFzIGxpc3QgdG9vbCBiYXJcbiAgVG9vbEJ1dHRvbnM/OiBhbnk7XG5cbiAgLy9pZiB0cnVlIHdlIGZpeCBOQVYgYnV0dG9uIG9uIFRPUFxuICBoYXNJbmZpbml0ZVNjcm9sbD86IGJvb2xlYW47XG5cbiAgLy9UaGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFjdWFsbCBkaXYgd2l0aCBpbWFnZXNcbiAgaW1hZ2VMaXN0U3R5bGU/OiBhbnk7XG5cbiAgLy9UaGlicyBoZWlnaHQgaWYgdGhleSBoYXZlIG5vdCBiZWVuIHJlc3Bvc2l0aW9uZWRcbiAgZGVmYXVsdFRodW1ic0hlaWdodD86IG51bWJlcjtcblxuICAvL2FuIG92ZXJsYXkgdGhhdCBpcyBkcmF3biBvbiB0byBvZiB0aGUgcGFnZVxuICBQYWdlT3ZlcmxheVZpZXc/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3AgPSBJTGlzdFBhZ2VzU3RhdGUgJiB7XG4gIHBhZ2VzQXJyYXk6IFBhZ2VJbWFnZU1vZGVsW107XG4gIGFubm9Ub29sU2VsZWN0ZWQ6IGJvb2xlYW47XG59O1xuXG5jb25zdCBBbm5vT0NSTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QW5ub01lbnUgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuY29uc3QgUGFnZUxpZ2h0Qm94ID0gX1BhZ2VMaWdodEJveCBhcyBhbnk7XG5cbmNsYXNzIExpc3RQYWdlc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tcG9uZW50UHJvcHMgJiBDb25uZWN0ZWRQcm9wICYgRG5EUHJvcHMsIHt9PiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyKSB7XG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuYWRkQWxsb3dlZCgpKSB7XG4gICAgICAgIGNvbnN0IFRoZU1lbnUgPSAoKSA9PiAoXG4gICAgICAgICAgPEF0dGFjaE1lbnUgb25GaWxlQXR0YWNoZWQ9eygpID0+IHRoaXMuX2ZpbGVJbnB1dFJlZiAmJiB0aGlzLl9maWxlSW5wdXRSZWYuY2xpY2soKX0gLz5cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5hZGRNZW51KCdtYWluJywgJ2F0dGFjaCcsIFRoZU1lbnUpKTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGBkZXRlY3RlZCBuYXZpZ2F0b3IucGxhdGZvcm0gOiAke25hdmlnYXRvci5wbGF0Zm9ybX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdlbXB0eSBuYXZpZ2F0b3I6IGNhbm5vdCBkZXRlY3QgcGxhdGZvcm0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtID09ICdXaW4zMicpIHtcbiAgICAgICAgICBjb25zdCBUaGVTY2FuTWVudSA9ICgpID0+IChcbiAgICAgICAgICAgIDxTY2FuTWVudSBvblNjYW49eygpID0+IGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNjYW5QYWdlcygpKX0gLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ21haW4nLCAnc2NhbicsIFRoZVNjYW5NZW51KSk7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ3NldHRpbmdzJywgJ3NlbGVjdFNjYW5uZXInLCBTY2FubmVyU2VsZWN0TWVudSkpO1xuXG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBlbnN1cmVNYWluTmF2KCkuYWRkTWVudSgnZGlzdHJpYnVlRXh0cmEnLCAnUmUtUHJvY2VzcycsICgpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmZpeE5vbndlYlBhZ2UoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJyBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCc+PC9pPiBSZS1yZW5kZXIgaW1hZ2VzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ2Rpc3RyaWJ1ZUV4dHJhJywgJ2NvcHlQYXN0ZScsICgpID0+IDxDb3B5UGFzdGVNZW51IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0vPikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIuZGVsZXRlQWxsb3dlZCgpKSB7XG4gICAgICAgIGNvbnN0IE15RGVsZXRlTWVudSA9ICgpID0+IDxEZWxldGVNZW51IGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn0gLz47XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmFkZE1lbnUoJ21haW4nLCAnZGVsZXRlJywgTXlEZWxldGVNZW51KSk7XG4gICAgICB9XG5cbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBlbnN1cmVQcmludEFwcCgpLnNldFByaW50YWJsZSh7XG4gICAgICAgICAgcGFnZXNHZXR0ZXI6IGxpc3RvZlBhZ2VzSGVscGVyLmdldFRvUHJpbnRQYWdlcy5iaW5kKGxpc3RvZlBhZ2VzSGVscGVyKSxcbiAgICAgICAgICBleHRyYU1lbnU6IDxBbm5vT0NSTWVudSAvPixcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlcikge1xuICAgICAgaWYgKGxpc3RvZlBhZ2VzSGVscGVyLmFkZEFsbG93ZWQoKSkge1xuICAgICAgICBkaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnbWFpbicsICdhdHRhY2gnKSk7XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0gPT0gJ1dpbjMyJykge1xuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdtYWluJywgJ3NjYW4nKSk7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlTWFpbk5hdigpLmRlbGV0ZU1lbnUoJ3NldHRpbmdzJywgJ3NlbGVjdFNjYW5uZXInKSk7XG4gICAgICAgICAgLy9kaXNwYXRjaChlbnN1cmVNYWluTmF2KCkuZGVsZXRlTWVudSgnZGlzdHJpYnVlRXh0cmEnLCAnY29weVBhc3RlJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlci5kZWxldGVBbGxvd2VkKCkpIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS5kZWxldGVNZW51KCdtYWluJywgJ2RlbGV0ZScpKTtcblxuICAgICAgZGlzcGF0Y2goZW5zdXJlUHJpbnRBcHAoKS5zZXRQcmludGFibGUobnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGFjdGl2ZVBhZ2UsIHBhZ2VzQXJyYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldkFjdGl2ZVBhZ2UgPSBwcmV2UHJvcHMuYWN0aXZlUGFnZTtcblxuICAgIGlmIChwYWdlc0FycmF5ICYmIHBhZ2VzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy93ZSBhbHdheXMgd2FudCBhIGFjdGl2ZSBwYWdlXG4gICAgICBpZiAoIWFjdGl2ZVBhZ2UgfHwgIV8uZmluZChwYWdlc0FycmF5LCAocCkgPT4gcC5pZCA9PSBhY3RpdmVQYWdlLmlkKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBhY3RpdmUgcGFnZSB0byB0b3AgaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgeyBsaXN0b2ZQYWdlc0hlbHBlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShwYWdlc0FycmF5WzBdLmlkKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZVBhZ2UgfHwgYWN0aXZlUGFnZS5pZCA9PSAocHJldkFjdGl2ZVBhZ2UgfHwge30pLmlkKSByZXR1cm47XG5cbiAgICAvL2FjdGl2ZSBwYWdlIGhhcyBjaGFuZ2VkIGxldHMgbWFrZSBzdXJlIGl0J3MgdmlzaWJsZVxuXG4gICAgaWYgKCF0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlLmlkXSkge1xuICAgICAgY29uc29sZS53YXJuKCdhY3RpdmUgcGFnZSBpZCBpcyBub3QgaW4gX3BhZ2VSZWZzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldEhlaWdodCB9ID0gdGhpcy5fcGFnZVJlZnNbYWN0aXZlUGFnZS5pZF07XG5cbiAgICAvL2FjY291bnRpbmcgZm9yIG1hcmdpbnMgLiB0aGUgbWFnaWMgbnVtYmVyIHdlIGZvdW5kIGJ5IHRyaWFsIGFuZCBlcnJvciAsIHdlIHdpbGwgaGF2ZSB0byBjaGFuZ2UgaWYgd2UgY2hhbmdlIG1hcmdpbnMgYW5kIHN0dWZmXG4gICAgY29uc3QgTUFHSUNNQVJHSU5OVU1CRVIgPSAyMDsgLy8yMztcbiAgICBjb25zdCBwYWdlQm90dG9tUG9zaXRpb24gPSBvZmZzZXRUb3AgKyBvZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB7IHNjcm9sbFRvcCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IHRoaXMuX3BhZ2VsaXN0UmVmO1xuICAgIGNvbnN0IHZpc2libGVCb3R0b21Qb3NpdGlvbiA9IHNjcm9sbFRvcCArIGNsaWVudEhlaWdodDtcblxuICAgIGxldCBuZXdTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cbiAgICBjb25zdCB2aWV3SGFzTm9uTGltaXRlZEhlaWdodCA9IHNjcm9sbEhlaWdodCA9PSBjbGllbnRIZWlnaHQ7XG5cbiAgICAvL2NoZWNrIGlmIGFjdGl2ZVBhZ2UgYm90dG9tIGlzIHZpc2libGVcbiAgICBpZiAodmlld0hhc05vbkxpbWl0ZWRIZWlnaHQpIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IG9mZnNldFRvcCAtIE1BR0lDTUFSR0lOTlVNQkVSO1xuICAgIH0gZWxzZSBpZiAocGFnZUJvdHRvbVBvc2l0aW9uID4gdmlzaWJsZUJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICBuZXdTY3JvbGxUb3AgPSBwYWdlQm90dG9tUG9zaXRpb24gLSBjbGllbnRIZWlnaHQgLSBNQUdJQ01BUkdJTk5VTUJFUjtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGlmIGFjdGl2ZVBhZ2UgVG9wIGlzIHZpc2libGUsIG92ZXJyaWRlIHNjcm9sbCB0byBtYWtlIGJvdHRvbSB2aXNpYmxlXG4gICAgaWYgKG9mZnNldFRvcCA8IG5ld1Njcm9sbFRvcCAtIE1BR0lDTUFSR0lOTlVNQkVSKSBuZXdTY3JvbGxUb3AgPSBvZmZzZXRUb3AgLSBNQUdJQ01BUkdJTk5VTUJFUjtcblxuICAgIC8vbGV0IG5ld1Njcm9sbFRvcCA9IHRoaXMuUGFnZWxpc3RSZWYuc2Nyb2xsVG9wKygoYmFja3dvcmQ/LTE6MSkqICh0aGlzLnByb3BzLnNsaWRlclZhbHVlICsgMTQpKTtcbiAgICBpZiAobmV3U2Nyb2xsVG9wIDwgMCkge1xuICAgICAgbmV3U2Nyb2xsVG9wID0gMDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXZpZXdIYXNOb25MaW1pdGVkSGVpZ2h0ICYmXG4gICAgICBuZXdTY3JvbGxUb3AgPiB0aGlzLl9wYWdlbGlzdFJlZi5zY3JvbGxIZWlnaHQgLSB0aGlzLl9wYWdlbGlzdFJlZi5jbGllbnRIZWlnaHRcbiAgICApIHtcbiAgICAgIG5ld1Njcm9sbFRvcCA9IHRoaXMuX3BhZ2VsaXN0UmVmLnNjcm9sbEhlaWdodCAtIHRoaXMuX3BhZ2VsaXN0UmVmLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodmlld0hhc05vbkxpbWl0ZWRIZWlnaHQpIHtcbiAgICAgIHdpbmRvdyAmJiB3aW5kb3cuc2Nyb2xsVG8gJiYgd2luZG93LnNjcm9sbFRvKDAsIG5ld1Njcm9sbFRvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdTY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkgcmV0dXJuO1xuICAgICAgdGhpcy5fcGFnZWxpc3RSZWYuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIGxldCBzY3JvbGxTdGVwID0gKG5ld1Njcm9sbFRvcCAtIHNjcm9sbFRvcCkgLyAxMDtcbiAgICAgICAgY29uc3QgYmFja3dvcmQgPSBzY3JvbGxTdGVwIDwgMDtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBkb1N0ZXAoKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zID0gbWUuX3BhZ2VsaXN0UmVmLnNjcm9sbFRvcCArIHNjcm9sbFN0ZXA7XG5cbiAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoKGJhY2t3b3JkICYmIG5ld1BvcyA8PSBuZXdTY3JvbGxUb3ApIHx8ICghYmFja3dvcmQgJiYgbmV3UG9zID49IG5ld1Njcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBuZXdTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLl9wYWdlbGlzdFJlZi5zY3JvbGxUb3AgPSBuZXdQb3M7XG5cbiAgICAgICAgICAgIGlmICghZG9uZSlcbiAgICAgICAgICAgICAgICBfLmRlbGF5KGRvU3RlcCwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb1N0ZXAoKTtcbiAgICAgICAgKi9cbiAgfVxuXG4gIHByaXZhdGUgX3BhZ2VsaXN0UmVmPzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBfcGFnZVJlZnM6IHsgW2tleTogc3RyaW5nXTogSFRNTERpdkVsZW1lbnQgfSA9IHt9O1xuXG4gIHByaXZhdGUgb25TY3JvbGxlZCgpIHtcbiAgICBpZiAoIXRoaXMuX3BhZ2VsaXN0UmVmKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHBhZ2VzQXJyYXksIGFjdGl2ZVBhZ2UsIGxpc3RvZlBhZ2VzSGVscGVyLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIShwYWdlc0FycmF5ICYmIHBhZ2VzQXJyYXkubGVuZ3RoID4gMCkpIHJldHVybjtcblxuICAgIGNvbnN0IGFjdGl2ZVBhZ2VJZCA9IGFjdGl2ZVBhZ2UgPyBhY3RpdmVQYWdlLmlkIDogcGFnZXNBcnJheVswXS5pZDtcbiAgICBpZiAoIWFjdGl2ZVBhZ2VJZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5fcGFnZWxpc3RSZWY7XG4gICAgY29uc3QgdmlzaWJsZUJvdHRvbVBvc2l0aW9uID0gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlSWRdKSByZXR1cm47XG5cbiAgICBjb25zdCB7IG9mZnNldFRvcCwgb2Zmc2V0SGVpZ2h0IH0gPSB0aGlzLl9wYWdlUmVmc1thY3RpdmVQYWdlSWRdO1xuICAgIGNvbnN0IHBhZ2VCb3R0b21Qb3NpdGlvbiA9IG9mZnNldFRvcCArIG9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHZpc2liaXR5U2hpbSA9IG9mZnNldEhlaWdodCAqIDAuMztcblxuICAgIC8vY2hlY2sgaWYgdGhlIGFjdGl2ZSBwYWdlIGlzIG5vdCB2aXNpYmxlXG4gICAgaWYgKFxuICAgICAgb2Zmc2V0VG9wICsgdmlzaWJpdHlTaGltID4gdmlzaWJsZUJvdHRvbVBvc2l0aW9uIHx8XG4gICAgICBwYWdlQm90dG9tUG9zaXRpb24gLSB2aXNpYml0eVNoaW0gPCBzY3JvbGxUb3BcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVBhZ2UgPSBfLmZpbmQoXG4gICAgICAgIF8ua2V5cyh0aGlzLl9wYWdlUmVmcyksXG4gICAgICAgIChpZCkgPT4gdGhpcy5fcGFnZVJlZnNbaWRdICYmIHRoaXMuX3BhZ2VSZWZzW2lkXS5vZmZzZXRUb3AgPj0gc2Nyb2xsVG9wLFxuICAgICAgKTtcblxuICAgICAgaWYgKG5ld0FjdGl2ZVBhZ2UpIHtcbiAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuc2V0QWN0aXZlUGFnZShuZXdBY3RpdmVQYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25vIGFjdGl2ZSBwYWdlIGZvdW5kIGF0IHNjcm9sbCBsb2NhdGlvbicsIHNjcm9sbFRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblNjcm9sbGVkZGVib3VuY2VkID0gXy5kZWJvdW5jZSh0aGlzLm9uU2Nyb2xsZWQsIDEwMDApO1xuICBwcml2YXRlIF9maWxlSW5wdXRSZWYgPSBudWxsO1xuXG4gIHByaXZhdGUgX2ZpbGVSZW5kZXJJZCA9IDA7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VzQXJyYXksXG4gICAgICBwYWdlRHJvcFRhcmdldCxcbiAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLFxuICAgICAgdGh1bWJzSGVpZ2h0LFxuICAgICAgZGVmYXVsdFRodW1ic0hlaWdodCxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBBY3RpdmVQYWdlVG9vbEJhcixcbiAgICAgIHNlbGVjdGVkUGFnZXMsXG4gICAgICBpbWFnZUxpc3RTdHlsZSxcbiAgICAgIFRvb2xCdXR0b25zLFxuICAgICAgaGFzSW5maW5pdGVTY3JvbGwsXG4gICAgICBsaWdodEJveFZpc2libGUsXG4gICAgICBQYWdlT3ZlcmxheVZpZXcsXG4gICAgICBjb3JyZWN0ZWREaW1lbnRpb25zLFxuICAgICAgYW5ub1Rvb2xTZWxlY3RlZCxcbiAgICAgIGRpc3BhdGNoLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGxpc3Rwcm9tcHQgPSAnJztcblxuICAgIGlmIChwYWdlc0FycmF5Lmxlbmd0aCA+IDApXG4gICAgICBsaXN0cHJvbXB0ID0gJ1Nob3dpbmcgJyArIHBhZ2VzQXJyYXkubGVuZ3RoICsgJyBpbWFnZScgKyAocGFnZXNBcnJheS5sZW5ndGggPiAxID8gJ3MnIDogJycpO1xuXG4gICAgdGhpcy5fcGFnZVJlZnMgPSB7fTtcblxuICAgIGNvbnN0IGZpeGVkTmF2U3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiA1LFxuICAgICAgaGVpZ2h0OiA1NixcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiA2MixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiZGQyZTRlNicsXG4gICAgICB6SW5kZXg6IDUsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH07XG5cbiAgICBjb25zdCBuYXZTdHlsZSA9IHsgdGV4dEFsaWduOiAnbGVmdCcgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAge1BhZ2VMaWdodEJveCAmJiBsaWdodEJveFZpc2libGUgJiYgKFxuICAgICAgICAgIDxQYWdlTGlnaHRCb3ggbGlzdG9mUGFnZXNIZWxwZXI9e2xpc3RvZlBhZ2VzSGVscGVyfSBwYWdlc0FycmF5PXtwYWdlc0FycmF5IHx8IFtdfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIGlucHV0UmVmPXsocmVmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9maWxlSW5wdXRSZWYgPSByZWY7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgaWQ9e2BteWlucHV0ZmlsZV8ke3RoaXMuX2ZpbGVSZW5kZXJJZCsrfWB9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAwLCB3aWR0aDogMCwgb3BhY2l0eTogMCwgZGlzcGxheTogJ2NvbnRlbnRzJyB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvL2NvbnN0IGZpbGVzID0gWy4uLmUubmF0aXZlRXZlbnQudGFyZ2V0LmZpbGVzXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHRlc3RpbmcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxlJywgZS5uYXRpdmVFdmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuYWRkUGFnZXMoZS5uYXRpdmVFdmVudC50YXJnZXQuZmlsZXMpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCdcbiAgICAgICAgICBzdHlsZT17aGFzSW5maW5pdGVTY3JvbGwgPyAoeyAuLi5maXhlZE5hdlN0eWxlLCAuLi5uYXZTdHlsZSB9IGFzIGFueSkgOiBuYXZTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5IHdpdGhQb3B1cEJnJz5cbiAgICAgICAgICAgIHtsaXN0cHJvbXB0fVxuXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0naW5jdG9vbHRpcCc+Y2hhbmdlIGltYWdlIHNpemU8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaC1wbHVzJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaC1taW51cycgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlkPSdzbGlkZXJEcm9wRG93bidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAsIGhlaWdodDogNSB9fVxuICAgICAgICAgICAgICAgIG1pbj17NjB9XG4gICAgICAgICAgICAgICAgbWF4PXsxNTAwfVxuICAgICAgICAgICAgICAgIHN0ZXA9ezEwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aHVtYnNIZWlnaHQgfHwgZGVmYXVsdFRodW1ic0hlaWdodCB8fCAxMDB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci56b29tVG8oZSkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7VG9vbEJ1dHRvbnMgJiYgPFRvb2xCdXR0b25zIC8+fVxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBmbG9hdDogJ3JpZ2h0JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6IDQ2IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSdwcmV2dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICBTY3JvbGwgdG8gcHJldmlvdXMgcGFnZVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIFNob3J0Y3V0OiA8a2JkPmFsdCt1PC9rYmQ+IE9SIDxrYmQ+cGFnZXVwPC9rYmQ+XG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnLCBtYXJnaW5MZWZ0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnNldEFjdGl2ZVBhZ2UocGFnZU5hdi5wcmV2KSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFja3dhcmQnIHN0eWxlPXt7IGZvbnRTaXplOiAneC1sYXJnZScgfX0+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PSdib3R0b20nXG4gICAgICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPSduZXh0dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICBTY3JvbGwgdG8gbmV4dCBwYWdlXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgU2hvcnRjdXQ6IDxrYmQ+YWx0K2Q8L2tiZD4gT1IgPGtiZD5wYWdlZG93bjwva2JkPlxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJzU3R5bGU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JywgbWFyZ2luTGVmdDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zZXRBY3RpdmVQYWdlKHBhZ2VOYXYubmV4dCkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZvcndhcmQnIHN0eWxlPXt7IGZvbnRTaXplOiAneC1sYXJnZScgfX0+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzBweCcgfX0+Jm5ic3A7PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtwYWdlRHJvcFRhcmdldChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ltYWdlbGlzdC1iYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgb25TY3JvbGw9eygpID0+IHRoaXMub25TY3JvbGxlZGRlYm91bmNlZCgpfVxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiAodGhpcy5fcGFnZWxpc3RSZWYgPSByZWYpfVxuICAgICAgICAgICAgc3R5bGU9e2hhc0luZmluaXRlU2Nyb2xsID8geyAuLi5pbWFnZUxpc3RTdHlsZSwgbWFyZ2luVG9wOiA1NiB9IDogaW1hZ2VMaXN0U3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIC8qLCBoZWlnaHQ6ICcxMDAlJyovIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICB7cGFnZXNBcnJheS5sZW5ndGggPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaXN0b2ZQYWdlc0hlbHBlci5hZGRBbGxvd2VkKCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcCBpbWFnZXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9SeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0naW5mbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fZmlsZUlucHV0UmVmICYmIHRoaXMuX2ZpbGVJbnB1dFJlZi5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm93c2UgdG8gZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5ObyBpbWFnZXMgZm91bmQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBwYWdlc0FycmF5Lm1hcCgoZWRpdGFibGVQYWdlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd0Fub1Rvb2xzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm9Ub29sU2VsZWN0ZWQgJiYgYWN0aXZlUGFnZSAmJiBhY3RpdmVQYWdlLmlkID09IGVkaXRhYmxlUGFnZS5pZDtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4gKHRoaXMuX3BhZ2VSZWZzW2VkaXRhYmxlUGFnZS5pZF0gPSByZWYpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZURyb3BUYXJnZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBUGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RlZERpbWVudGlvbnM9e2NvcnJlY3RlZERpbWVudGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VPdmVybGF5Vmlldz17c2hvd0Fub1Rvb2xzID8gQW5ub092ZXJsYXlWaWV3IDogUGFnZU92ZXJsYXlWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNpcmVkSGVpZ2h0PXt0aHVtYnNIZWlnaHQgfHwgZGVmYXVsdFRodW1ic0hlaWdodCB8fCAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyPXtsaXN0b2ZQYWdlc0hlbHBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmVkaXRhYmxlUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVQYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UuaWQgPT0gZWRpdGFibGVQYWdlLmlkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhQWN0aXZlUGFnZVRvb2xCYXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlUGFnZVRvb2xCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZWRpdGFibGVQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbm9Ub29scyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17PFRvb2x0aXAgaWQ9J2Fubm9kb25lJz5Bbm5vdGF0aW9ucyBjb21wbGV0ZWQ8L1Rvb2x0aXA+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT17J2xpbmsnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW5Ub3A6IC01IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChudWxsKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hlY2sgY29sb3Itb3JhbmdlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISEoc2VsZWN0ZWRQYWdlcyAmJiBzZWxlY3RlZFBhZ2VzW2VkaXRhYmxlUGFnZS5pZF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319IC8vbmVlZCBvbmNoYW5nZWQgZm9yIHdhcm5pbmdzIHRvIGJlIGhhcHB5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLnRvZ2dsZVBhZ2VTZWxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlUGFnZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9J2xpZ2h0bm94dG9vbHRpcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPXsnbGluayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCwgbWFyZ2luVG9wOiAtNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5zaG93TGlnaHRCb3goZWRpdGFibGVQYWdlLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXdpbmRvdy1tYXhpbWl6ZSBjb2xvci1vcmFuZ2UnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT0nbGluaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BhZ2VDb252ZXJ0ZWRNZW51RHJvcERvd24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxpIGNsYXNzTmFtZT0nZmEgZmEtY29nJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHBhZ2Vkcm9wZG93bi0ke2VkaXRhYmxlUGFnZS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRhYmxlUGFnZS5vcmlnaW5hbElkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT0nMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RvZlBhZ2VzSGVscGVyLmRvd25sb2FkT3JpZ2luYWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlUGFnZS5vcmlnaW5hbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jbG91ZC1kb3dubG9hZCcgLz4gRG93bmxvYWQgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWRpdGFibGVQYWdlLnBhZ2VUeXBlID09IFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChsaXN0b2ZQYWdlc0hlbHBlci5maXhOb253ZWJQYWdlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXJlZnJlc2gnIC8+IFJlLXJlbmRlciBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZCB7bW9tZW50KGVkaXRhYmxlUGFnZS5jcmVhdGVkKS5mb3JtYXQoJ2xsbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2NyTWVudSBwYWdlSWQ9e2VkaXRhYmxlUGFnZS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wLCB7IGRpc3BhdGNoIH0sIENvbXBvbmVudFByb3BzPigoc3RhdGUsIG93bnByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGlzdG9mUGFnZXNIZWxwZXIgfSA9IG93bnByb3BzO1xuICBjb25zdCBwYWdlc1N0YXRlID0gbGlzdG9mUGFnZXNIZWxwZXIgJiYgbGlzdG9mUGFnZXNIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSk7XG4gIGNvbnN0IHsgYWN0aXZlRG9jIH0gPVxuICAgIGxpc3RvZlBhZ2VzSGVscGVyLm15RG9jc0hlbHBlciAmJiBsaXN0b2ZQYWdlc0hlbHBlci5teURvY3NIZWxwZXIuZ2V0bXlTdGF0ZShzdGF0ZSk7XG5cbiAgY29uc3QgeyBzZWxlY3RlZFRvb2wgfSA9IGVuc3VyZUFubm90YXRpb25zKCkuZ2V0Q3VycmVudFN0YXRlKHN0YXRlKTtcblxuICByZXR1cm4gXy5hc3NpZ24oXG4gICAge1xuICAgICAgcGFnZXNBcnJheTogKGFjdGl2ZURvYyAmJiBhY3RpdmVEb2MucGFnZXMpIHx8IFtdLFxuICAgICAgYW5ub1Rvb2xTZWxlY3RlZDogISFzZWxlY3RlZFRvb2wsXG4gICAgfSxcbiAgICBwYWdlc1N0YXRlLFxuICApO1xufSkoRHJvcFRhcmdldENyZWF0b3IoTGlzdFBhZ2VzVmlldykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGlzdFBhZ2VzL2luZGV4LnRzeCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIGZ1bmN0aW9uIHNoaW0oKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMTIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBlbnN1cmVBbm5vdGF0aW9ucywgeyBBbm5vVG9vbHMgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGVuc3VyZVByb2plY3RzIGZyb20gJy4uL3Byb2plY3RzL3JlZHVjZXInO1xuXG50eXBlIENvbm5lY3RlZFByb3BzID0ge1xuICBzZWxlY3RlZFRvb2w6IEFubm9Ub29scztcbiAgYW5ub3RhdGlvbnNBbGxvd2VkOiBib29sZWFuO1xufTtcblxuY29uc3QgdGhlVG9vbHMgPSBbXG4gIHsgdG9vbDogQW5ub1Rvb2xzLmFubm90YXRlLCBpY29uOiAnZmEtY29tbWVudCcsIHRleHQ6ICdBbm5vdGF0ZScgfSxcbiAgeyB0b29sOiBBbm5vVG9vbHMuaGlnaGxpZ2h0LCBpY29uOiAnZmEtZWRpdCcsIHRleHQ6ICdIaWdobGlnaHQnIH0sXG4gIHsgdG9vbDogQW5ub1Rvb2xzLnJlZGFjdCwgaWNvbjogJ2ZhLW1pbnVzLXNxdWFyZScsIHRleHQ6ICdSZWRhY3QnIH0sXG4gIHsgdG9vbDogQW5ub1Rvb2xzLmNsZWFyLCBpY29uOiAnZmEtc3F1YXJlJywgdGV4dDogJ2NsZWFyJyB9LFxuICB7IHRvb2w6IEFubm9Ub29scy5zaG93T3JpZ2luYWwsIGljb246ICdmYS1leWUnLCB0ZXh0OiAnU2hvdyBvcmlnaW5hbCcgfSxcbl07XG5cbmNvbnN0IEFubm9NZW51OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Q29ubmVjdGVkUHJvcHMgJiB7IGRpc3BhdGNoIH0+ID0gKHtcbiAgc2VsZWN0ZWRUb29sLFxuICBhbm5vdGF0aW9uc0FsbG93ZWQsXG4gIGRpc3BhdGNoLFxufSkgPT4ge1xuICBpZiAoIWFubm90YXRpb25zQWxsb3dlZCkgcmV0dXJuIDxkaXY+PC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cblxuICAgICAge3RoZVRvb2xzLm1hcCgodG9vbCkgPT4ge1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICEhc2VsZWN0ZWRUb29sICYmIHNlbGVjdGVkVG9vbCAhPSB0b29sLnRvb2w7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgIGtleT17YHRvb2xfJHt0b29sLnRvb2x9YH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIGVuc3VyZUFubm90YXRpb25zKCkuc2VsZWN0VG9vbChzZWxlY3RlZFRvb2wgIT0gdG9vbC50b29sID8gdG9vbC50b29sIDogbnVsbCksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGlzYWJsZWQgPyAndGV4dC1tdXRlZCcgOiAndGV4dC1zdWNjZXNzJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgJHt0b29sLmljb259YH0+PC9pPiB7dG9vbC50ZXh0fVxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUb29sID09IHRvb2wudG9vbCAmJiA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZWNrIGNvbG9yLW9yYW5nZSc+PC9pPn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG5cbiAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG5cbiAgICAgIDxNZW51SXRlbVxuICAgICAgICBkaXNhYmxlZD17ISFzZWxlY3RlZFRvb2x9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS5zZWxlY3RUb29sKEFubm9Ub29scy5yb3RhdGVMZWZ0KSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZFRvb2wgPyAndGV4dC1tdXRlZCcgOiAndGV4dC1zdWNjZXNzJ31cbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11bmRvJz48L2k+IFJvdGF0ZSBsZWZ0XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgIDxNZW51SXRlbVxuICAgICAgICBkaXNhYmxlZD17ISFzZWxlY3RlZFRvb2x9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS5zZWxlY3RUb29sKEFubm9Ub29scy5yb3RhdGVSaWdodCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWRUb29sID8gJ3RleHQtbXV0ZWQnIDogJ3RleHQtc3VjY2Vzcyd9XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICdsYXJnZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdW5kbyBmYS1mbGlwLWhvcml6b250YWwnPjwvaT4gUm90YXRlIHJpZ2h0XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwge30+KChzdGF0ZSkgPT4ge1xuICBjb25zdCB7IHNlbGVjdGVkUHJvamVjdCB9ID0gZW5zdXJlUHJvamVjdHMoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIGxldCBhbm5vdGF0aW9uc0FsbG93ZWQgPSAhIXNlbGVjdGVkUHJvamVjdDtcblxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdC5wZXJtaXNzaW9ucyAmJiBzZWxlY3RlZFByb2plY3QucGVybWlzc2lvbnNbJ3NlbGYnXSkge1xuICAgIGFubm90YXRpb25zQWxsb3dlZCA9IHNlbGVjdGVkUHJvamVjdC5wZXJtaXNzaW9uc1snc2VsZiddLmNhbkVkaXQ7XG4gIH1cblxuICBjb25zdCB7IHNlbGVjdGVkVG9vbCB9ID0gZW5zdXJlQW5ub3RhdGlvbnMoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuICByZXR1cm4geyBzZWxlY3RlZFRvb2wsIGFubm90YXRpb25zQWxsb3dlZCB9O1xufSkoQW5ub01lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYW5ub3RhdGlvbnMvYW5ub01lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IGVuc3VyZUFubm90YXRpb25zLCB7IEFubm9Ub29scywgSUFubm90YXRlU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgeyBBbm5vRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL0Fubm9EYXRhTW9kZWwnO1xuaW1wb3J0IHsgUGFnZUltYWdlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUltYWdlTW9kZWwnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUxvYWRlclZpZXcgfSBmcm9tICdiYXNlL2FzeW5jTG9hZGVyJztcblxuY29uc3QgQW5ub0xvYWRlciA9IGNyZWF0ZUxvYWRlclZpZXc8QW5ub0RhdGFNb2RlbD4oKTtcblxudHlwZSBDb21wb25lbnRQcm9wcyA9IFBhZ2VJbWFnZU1vZGVsICYge1xuICBzY2FsZTogbnVtYmVyO1xuICBvbkFubm90YXRpb25zRG9uZT86ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3BzID0gSUFubm90YXRlU3RhdGUgJiB7fTtcblxudHlwZSBEUG9pbnRzID0geyBYOiBudW1iZXI7IFk6IG51bWJlciB9O1xuXG50eXBlIERDb29yZGluYXRlcyA9IHtcbiAgc3RhcnRQb2ludDogRFBvaW50cztcbiAgY3VycmVudD86IERQb2ludHM7XG4gIGxhc3REcmF3UG9pbnQ/OiBEUG9pbnRzO1xufTtcblxudHlwZSBTdGF0ZVByb3BzID0ge1xuICBjYW52YXM/OiBhbnk7XG4gIGNvbnRleHQ/OiBhbnk7XG4gIGRpbWVudGlvbnM/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGNvb3JkaW5hdGVzPzogRENvb3JkaW5hdGVzO1xuICBkcmF3aW5nPzogYm9vbGVhbjtcbiAgbGFzdFg/OiBudW1iZXI7XG4gIGxhc3RZPzogbnVtYmVyO1xufTtcblxudHlwZSBWaWV3UHJvcHMgPSBDb25uZWN0ZWRQcm9wcyAmIENvbXBvbmVudFByb3BzICYgeyBkaXNwYXRjaCB9O1xuXG5jbGFzcyBBbm5vbnRhdGlvbk92ZXJsYXlWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFZpZXdQcm9wcywgU3RhdGVQcm9wcz4ge1xuICBDYW52YXNSZWY6IGFueSA9IG51bGw7XG4gIGhhc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGFzQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHN0YXRlOiBTdGF0ZVByb3BzID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpZDogcGFnZUlkLCBkaXNwYXRjaCwgc2VsZWN0ZWRUb29sIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2FudmFzOiBhbnkgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLkNhbnZhc1JlZik7XG5cbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIGNvbnRleHQsXG4gICAgICBkaW1lbnRpb25zOiB7IHc6IGNhbnZhcy53aWR0aCwgaDogY2FudmFzLmhlaWdodCB9LFxuICAgIH0pO1xuXG4gICAgc3dpdGNoIChzZWxlY3RlZFRvb2wpIHtcbiAgICAgIGNhc2UgQW5ub1Rvb2xzLnJvdGF0ZVJpZ2h0OlxuICAgICAgY2FzZSBBbm5vVG9vbHMucm90YXRlTGVmdDpcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS5yb3RhdGVJbWFnZShwYWdlSWQsIEFubm9Ub29scy5yb3RhdGVMZWZ0ID09IHNlbGVjdGVkVG9vbCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkubG9hZEFubm90YXRpb25zKHBhZ2VJZCkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBfYW5ub3RhaW9uZWRMb2FkZWQgPSBmYWxzZTtcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyBhbm5vRGF0YUFzeW5jIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vY29uc3QgeyBhbm5vRGF0YUFzeW5jOiBwcmV2QW5ub0RhdGFBc3luYyB9ID0gcHJldlByb3BzO1xuXG4gICAgY29uc3QgeyBjb250ZXh0LCBkaW1lbnRpb25zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKFxuICAgICAgIXRoaXMuX2Fubm90YWlvbmVkTG9hZGVkICYmXG4gICAgICBhbm5vRGF0YUFzeW5jICYmXG4gICAgICBhbm5vRGF0YUFzeW5jLnJlc3VsdCAmJlxuICAgICAgYW5ub0RhdGFBc3luYy5yZXN1bHQuZGF0YVVybFxuICAgICkge1xuICAgICAgY29uc3QgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcywgMCwgMCwgZGltZW50aW9ucy53LCBkaW1lbnRpb25zLmgpO1xuICAgICAgfTtcblxuICAgICAgaW1hZ2VPYmouc3JjID0gYW5ub0RhdGFBc3luYy5yZXN1bHQuZGF0YVVybDtcblxuICAgICAgdGhpcy5fYW5ub3RhaW9uZWRMb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgaWQ6IHBhZ2VJZCwgZGlzcGF0Y2gsIG9uQW5ub3RhdGlvbnNEb25lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCAmJiBvbkFubm90YXRpb25zRG9uZSkgb25Bbm5vdGF0aW9uc0RvbmUoKTtcblxuICAgIGRpc3BhdGNoKGVuc3VyZUFubm90YXRpb25zKCkuY2hlY2tJZlVuTW91bnRlZChwYWdlSWQpKTtcbiAgfVxuXG4gIHN0YXRpYyBpc01vYmlsZSgpIHtcbiAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlT25Nb3VzZURvd24oZSkge1xuICAgIGlmICghdGhpcy5hbm5vQWN0aXZlKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnN0YXRlLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnN0YXRlLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgaWYgKEFubm9udGF0aW9uT3ZlcmxheVZpZXcuaXNNb2JpbGUoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgICAgc3RhcnRQb2ludDoge1xuICAgICAgICAgICAgWDogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgICAgWTogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3AsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICBzdGFydFBvaW50OiB7XG4gICAgICAgICAgICBYOiBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICBZOiBlLmNsaWVudFkgLSByZWN0LnRvcCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmF3aW5nOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlT25Nb3VzZU1vdmUoZSkge1xuICAgIGlmICghdGhpcy5hbm5vQWN0aXZlKCkpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHsgZHJhd2luZywgbGFzdFgsIGxhc3RZLCBjYW52YXMsIGNvb3JkaW5hdGVzLCBkaW1lbnRpb25zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGRyYXdpbmcpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgY3VycmVudFg7XG4gICAgICBsZXQgY3VycmVudFk7XG5cbiAgICAgIGlmIChBbm5vbnRhdGlvbk92ZXJsYXlWaWV3LmlzTW9iaWxlKCkpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuY3VycmVudCA9IHtcbiAgICAgICAgICBYOiBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQsXG4gICAgICAgICAgWTogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3AsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZGluYXRlcy5jdXJyZW50ID0ge1xuICAgICAgICAgIFg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgICBZOiBlLmNsaWVudFkgLSByZWN0LnRvcCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NhbGUgPSBkaW1lbnRpb25zLmggLyBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICB0aGlzLmRyYXcoY29vcmRpbmF0ZXMsIHNjYWxlKTtcbiAgICB9XG4gIH1cblxuICBhbm5vQWN0aXZlKCkge1xuICAgIGNvbnN0IHsgYW5ub0RhdGFBc3luYywgc2VsZWN0ZWRUb29sLCBhbm5vVGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzZWxlY3RlZFRvb2wgPT0gQW5ub1Rvb2xzLnNob3dPcmlnaW5hbCB8fCAoYW5ub0RhdGFBc3luYyAmJiBhbm5vRGF0YUFzeW5jLmlzTG9hZGluZykpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAvKlxuICAgICAgICBpZiAoISFhbm5vVGV4dClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgKi9cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaGFuZGxlb25Nb3VzZVVwKGUpIHtcbiAgICBpZiAoIXRoaXMuYW5ub0FjdGl2ZSgpKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcywgZGltZW50aW9ucywgY2FudmFzLCBjb250ZXh0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBzdGFydFBvaW50LCBjdXJyZW50LCBsYXN0RHJhd1BvaW50IH0gPSBjb29yZGluYXRlcztcblxuICAgIGNvbnN0IHsgc2VsZWN0ZWRUb29sLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzdGFydFBvaW50ICYmIGN1cnJlbnQpIHtcbiAgICAgIGlmIChBbm5vVG9vbHMuYW5ub3RhdGUgPT0gc2VsZWN0ZWRUb29sKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gZGltZW50aW9ucy5oIC8gY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgICAgICBpZiAobGFzdERyYXdQb2ludCkge1xuICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KFxuICAgICAgICAgICAgKHN0YXJ0UG9pbnQuWCAtIDIpICogc2NhbGUsXG4gICAgICAgICAgICAoc3RhcnRQb2ludC5ZIC0gMikgKiBzY2FsZSxcbiAgICAgICAgICAgIChsYXN0RHJhd1BvaW50LlggLSBzdGFydFBvaW50LlggKyA0KSAqIHNjYWxlLFxuICAgICAgICAgICAgKGxhc3REcmF3UG9pbnQuWSAtIHN0YXJ0UG9pbnQuWSArIDQpICogc2NhbGUsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIGVuc3VyZUFubm90YXRpb25zKCkuaW5pdEFubm9UZXh0KHtcbiAgICAgICAgICAgIGxlZnQ6IHN0YXJ0UG9pbnQuWCAqIHNjYWxlLFxuICAgICAgICAgICAgdG9wOiBzdGFydFBvaW50LlkgKiBzY2FsZSxcbiAgICAgICAgICAgIHdpZHRoOiAoY3VycmVudC5YIC0gc3RhcnRQb2ludC5YKSAqIHNjYWxlLFxuICAgICAgICAgICAgaGVpZ2h0OiAoY3VycmVudC5ZIC0gc3RhcnRQb2ludC5ZKSAqIHNjYWxlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlQ2FudmFzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdpbmc6IGZhbHNlIH0pO1xuICB9XG5cbiAgZHJhdyhjb29yZGluYXRlczogRENvb3JkaW5hdGVzLCBzY2FsZTogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgbGFzdERyYXdQb2ludCwgY3VycmVudCB9ID0gY29vcmRpbmF0ZXM7XG5cbiAgICBpZiAoIXRoaXMuaGFzRHJhd2luZykge1xuICAgICAgaWYgKGN1cnJlbnQuWCAtIHN0YXJ0UG9pbnQuWCA8IDEwICYmIGN1cnJlbnQuWSAtIHN0YXJ0UG9pbnQuWSA8IDEwKSB7XG4gICAgICAgIC8vYmFyZWx5IGFueSBtb3VzZSBtb3ZlIG1heSBiZSB0aGUgcGVyc29uIGRvZXMgYWN0dWFsbHkgd2FudCB0byBkcmF3XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGFzdERyYXdQb2ludCkge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoXG4gICAgICAgIChzdGFydFBvaW50LlggLSAyKSAqIHNjYWxlLFxuICAgICAgICAoc3RhcnRQb2ludC5ZIC0gMikgKiBzY2FsZSxcbiAgICAgICAgKGxhc3REcmF3UG9pbnQuWCAtIHN0YXJ0UG9pbnQuWCArIDQpICogc2NhbGUsXG4gICAgICAgIChsYXN0RHJhd1BvaW50LlkgLSBzdGFydFBvaW50LlkgKyA0KSAqIHNjYWxlLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNlbGVjdGVkVG9vbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUb29sKSB7XG4gICAgICBjYXNlIEFubm9Ub29scy5jbGVhcjpcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoXG4gICAgICAgICAgc3RhcnRQb2ludC5YICogc2NhbGUsXG4gICAgICAgICAgc3RhcnRQb2ludC5ZICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWCAtIHN0YXJ0UG9pbnQuWCkgKiBzY2FsZSxcbiAgICAgICAgICAoY3VycmVudC5ZIC0gc3RhcnRQb2ludC5ZKSAqIHNjYWxlLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBBbm5vVG9vbHMuYW5ub3RhdGU6XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNCknO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QoXG4gICAgICAgICAgc3RhcnRQb2ludC5YICogc2NhbGUsXG4gICAgICAgICAgc3RhcnRQb2ludC5ZICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWCAtIHN0YXJ0UG9pbnQuWCkgKiBzY2FsZSxcbiAgICAgICAgICAoY3VycmVudC5ZIC0gc3RhcnRQb2ludC5ZKSAqIHNjYWxlLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBBbm5vVG9vbHMucmVkYWN0OlxuICAgICAgY2FzZSBBbm5vVG9vbHMuaGlnaGxpZ2h0OlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAwO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9XG4gICAgICAgICAgc2VsZWN0ZWRUb29sID09IEFubm9Ub29scy5yZWRhY3QgPyAncmdiYSgwLCAwLCAwLCAxLjApJyA6ICdyZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1KSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgc3RhcnRQb2ludC5YICogc2NhbGUsXG4gICAgICAgICAgc3RhcnRQb2ludC5ZICogc2NhbGUsXG4gICAgICAgICAgKGN1cnJlbnQuWCAtIHN0YXJ0UG9pbnQuWCkgKiBzY2FsZSxcbiAgICAgICAgICAoY3VycmVudC5ZIC0gc3RhcnRQb2ludC5ZKSAqIHNjYWxlLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLmhhc0RyYXdpbmcgPSB0cnVlO1xuICAgIGNvb3JkaW5hdGVzLmxhc3REcmF3UG9pbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb29yZGluYXRlczogY29vcmRpbmF0ZXMgfSk7XG4gIH1cblxuICBoYW5kbGVUZXh0RW50ZXIoKSB7XG4gICAgY29uc3QgeyBhbm5vVGV4dCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0ZXh0ID0gYW5ub1RleHQgJiYgYW5ub1RleHQudGV4dDtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBmb250U2l6ZVB4ID0gMjA7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDEuMCknO1xuICAgIGNvbnRleHQuZm9udCA9IGAke2ZvbnRTaXplUHh9cHggQ2FsaWJyaWA7XG5cbiAgICBjb25zdCBtYXhXaWR0aCA9IGFubm9UZXh0LnBvc2l0aW9uLndpZHRoIC0gNDtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gZm9udFNpemVQeCArIDQ7XG4gICAgY29uc3QgeCA9IGFubm9UZXh0LnBvc2l0aW9uLmxlZnQgKyAyO1xuICAgIGxldCB5ID0gYW5ub1RleHQucG9zaXRpb24udG9wICsgZm9udFNpemVQeDtcblxuICAgIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnICcpO1xuICAgIGxldCBsaW5lID0gJyc7XG5cbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdvcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnICc7XG4gICAgICB2YXIgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdExpbmUpO1xuICAgICAgdmFyIHRlc3RXaWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICBpZiAodGVzdFdpZHRoID4gbWF4V2lkdGggJiYgbiA+IDApIHtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICAgICAgbGluZSA9IHdvcmRzW25dICsgJyAnO1xuICAgICAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lID0gdGVzdExpbmU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG5cbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDA7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMCwgMC40NSknO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICBhbm5vVGV4dC5wb3NpdGlvbi5sZWZ0LFxuICAgICAgYW5ub1RleHQucG9zaXRpb24udG9wLFxuICAgICAgYW5ub1RleHQucG9zaXRpb24ud2lkdGgsXG4gICAgICBhbm5vVGV4dC5wb3NpdGlvbi5oZWlnaHQsXG4gICAgKTtcblxuICAgIHRoaXMuc2F2ZUNhbnZhcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlQ2FudmFzKCkge1xuICAgIGNvbnN0IHsgaWQ6IHBhZ2VJZCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRoaXMuQ2FudmFzUmVmKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYW52YXMgUmVmIGlzIGVtcHR5Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuQ2FudmFzUmVmLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS5zYXZlQW5ub3RhdGlvbnMocGFnZUlkLCBkYXRhKSk7XG5cbiAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpc3BsYXlTdHlsZTogYW55ID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzBweCcsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBjdXJzb3I6ICdjcm9zc2hhaXInLFxuICAgIH07XG5cbiAgICBjb25zdCB7IGFubm9EYXRhQXN5bmMsIHNlbGVjdGVkVG9vbCwgYW5ub1RleHQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLypcbiAgICAgICAgaWYgKCFhbm5vVGV4dCkge1xuICAgICAgICAgICAgZGlzcGxheVN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInXG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgIGNvbnN0IGNhbnZhc1N0eWxlID1cbiAgICAgIEFubm9Ub29scy5zaG93T3JpZ2luYWwgPT0gc2VsZWN0ZWRUb29sXG4gICAgICAgID8geyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgLi4uZGlzcGxheVN0eWxlIH1cbiAgICAgICAgOiBkaXNwbGF5U3R5bGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7YW5ub0RhdGFBc3luYyAmJiBhbm5vRGF0YUFzeW5jLnJlc3VsdCAmJiBhbm5vRGF0YUFzeW5jLnJlc3VsdC5pbWFnZURhdGFVcmwgJiYgKFxuICAgICAgICAgIDxpbWcgc3JjPXthbm5vRGF0YUFzeW5jLnJlc3VsdC5pbWFnZURhdGFVcmx9IHN0eWxlPXtkaXNwbGF5U3R5bGV9IGNsYXNzTmFtZT0nYW5ub0ltZycgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHN0eWxlPXtjYW52YXNTdHlsZX1cbiAgICAgICAgICBjbGFzc05hbWU9J2Fubm9PdmVybGF5J1xuICAgICAgICAgIHJlZj17KHJlZikgPT4gKHRoaXMuQ2FudmFzUmVmID0gcmVmKX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVPbk1vdXNlRG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVPbk1vdXNlRG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRsZU9uTW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlT25Nb3VzZU1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlb25Nb3VzZVVwLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVvbk1vdXNlVXAuYmluZCh0aGlzKX1cbiAgICAgICAgPjwvY2FudmFzPlxuICAgICAgICB7YW5ub1RleHQgJiYgKFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGNvbG9yOiAnYmxhY2snLCAuLi5hbm5vVGV4dC5wb3NpdGlvbiB9fVxuICAgICAgICAgICAgdmFsdWU9e2Fubm9UZXh0LnRleHQgfHwgJyd9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goZW5zdXJlQW5ub3RhdGlvbnMoKS51cGRhdGVBbm5vVGV4dChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMyAmJiBlLnNoaWZ0S2V5ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dEVudGVyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2Fubm9EYXRhQXN5bmMgJiYgKFxuICAgICAgICAgIDxBbm5vTG9hZGVyIGFzeW5jUmVzdWx0PXthbm5vRGF0YUFzeW5jfSBwcm9tcHQ9J2xvYWRpbmcgYW5ub3RhdGlvbnMnPlxuICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPC9Bbm5vTG9hZGVyPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcHMsIHsgZGlzcGF0Y2ggfSwgQ29tcG9uZW50UHJvcHM+KChzdGF0ZSwgb3ducHJvcHMpID0+IHtcbiAgY29uc3QgYW5ub1N0YXRlID0gZW5zdXJlQW5ub3RhdGlvbnMoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiBhbm5vU3RhdGU7XG59KShBbm5vbnRhdGlvbk92ZXJsYXlWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2Fubm90YXRpb25zL292ZXJsYXkudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBOYXZJdGVtLCBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbnR5cGUgVmlld1Byb3BzID0geyBvbkZpbGVBdHRhY2hlZDogKCkgPT4gdm9pZCB9O1xuXG5jb25zdCBBdHRhY2hNZW51OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8Vmlld1Byb3BzPiA9ICh7IG9uRmlsZUF0dGFjaGVkIH0pID0+IHtcbiAgbGV0IGF0dGFjaEljb24gPSAnZmEgZmEtZmlsZS1pbWFnZS1vIGZhLTJ4JztcbiAgbGV0IGF0dGFjaFByb21wdCA9ICdBdHRhY2ggaW1hZ2VzJztcblxuICBpZiAoIW5hdmlnYXRvciB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gIT0gJ1dpbjMyJykge1xuICAgIGF0dGFjaEljb24gPSAnZmEgZmEtY2FtZXJhIGZhLTJ4JztcbiAgfVxuXG4gIGxldCBmaWxlSW5wdXQgPSBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkl0ZW1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25GaWxlQXR0YWNoZWQgJiYgb25GaWxlQXR0YWNoZWQoKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0nQXR0YWNoTWVudXRvb2x0aXAnPnthdHRhY2hQcm9tcHR9PC9Ub29sdGlwPn1cbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXthdHRhY2hJY29ufSBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgPC9OYXZJdGVtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0YWNoTWVudTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9hdHRhY2hNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgSUxpc3RQYWdlc1N0YXRlLCBMaXN0UGFnZXNIZWxwZXIgfSBmcm9tICcuL3JlZHVjZXJIZWxwZXInO1xuaW1wb3J0IHsgTmF2SXRlbSwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBQYWdlSG9sZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUhvbGRlck1vZGVsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSB7XG4gIGxpc3RvZlBhZ2VzSGVscGVyOiBMaXN0UGFnZXNIZWxwZXI8UGFnZUhvbGRlck1vZGVsPjtcbn07XG5cbnR5cGUgVmlld1Byb3BzID0gQ29tcG9uZW50UHJvcHMgJiBJTGlzdFBhZ2VzU3RhdGUgJiB7IGRpc3BhdGNoIH07XG5cbmNvbnN0IERlbGV0ZU1lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxWaWV3UHJvcHM+ID0gKHtcbiAgZGlzcGF0Y2gsXG4gIHNlbGVjdGVkUGFnZXMsXG4gIGxpc3RvZlBhZ2VzSGVscGVyLFxufSkgPT4ge1xuICAvL1RoZXJlIGlzIGF0IGxlYXN0IG9uZSBzZWxlY3RlZCBwYWdlXG4gIGNvbnN0IGVuYWJsZWQgPVxuICAgIGxpc3RvZlBhZ2VzSGVscGVyICYmIHNlbGVjdGVkUGFnZXMgJiYgXy5maW5kKF8ua2V5cyhzZWxlY3RlZFBhZ2VzKSwgKHApID0+ICEhc2VsZWN0ZWRQYWdlc1twXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2SXRlbVxuICAgICAgZGlzYWJsZWQ9eyFlbmFibGVkfVxuICAgICAgb25DbGljaz17KCkgPT4gbGlzdG9mUGFnZXNIZWxwZXIgJiYgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuZGVsZXRlUGFnZXMoKSl9XG4gICAgPlxuICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICBvdmVybGF5PXs8VG9vbHRpcCBpZD0nZGVsZXRlbWVudXRvb2x0aXAnPkRlbGV0ZSBJbWFnZXM8L1Rvb2x0aXA+fVxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzIGZhLTJ4JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgPC9OYXZJdGVtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlLCBvd25wcm9wcykgPT4ge1xuICByZXR1cm4gb3ducHJvcHMubGlzdG9mUGFnZXNIZWxwZXIgPyBvd25wcm9wcy5saXN0b2ZQYWdlc0hlbHBlci5nZXRteVN0YXRlKHN0YXRlKSA6IHt9O1xufSkoRGVsZXRlTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvZGVsZXRlTWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBmaWxlc2l6ZSBmcm9tICdmaWxlc2l6ZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtcbiAgQ29ycmVjdGVkRGltZW50aW9uUHJvcHMsXG4gIERSQUdUWVBFX1BBR0UsXG4gIElMaXN0UGFnZXNTdGF0ZSxcbiAgTGlzdFBhZ2VzSGVscGVyLFxufSBmcm9tICcuL3JlZHVjZXJIZWxwZXInO1xuaW1wb3J0IHsgRHJhZ1NvdXJjZSwgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eS1sb2FkJztcbmltcG9ydCB7IE5hdGl2ZVR5cGVzIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuaW1wb3J0IHsgUGFnZUhvbGRlck1vZGVsIH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL1BhZ2VIb2xkZXJNb2RlbCc7XG5pbXBvcnQgeyBQYWdlSW1hZ2VNb2RlbCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9QYWdlSW1hZ2VNb2RlbCc7XG5pbXBvcnQgeyBQYWdlSW1hZ2VUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvUGFnZUltYWdlVHlwZU1vZGVsJztcbmltcG9ydCBlbnN1cmVQcmludEFwcCBmcm9tICcuLi9wcmludEFwcC9yZWR1Y2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJZHJvcFRhcmdldFByb3BzIHtcbiAgbGlzdG9mUGFnZXNIZWxwZXI6IExpc3RQYWdlc0hlbHBlcjxQYWdlSG9sZGVyTW9kZWw+O1xufVxuXG5leHBvcnQgdHlwZSBEbkRQcm9wcyA9IHtcbiAgZGlzcGF0Y2g7XG4gIHBhZ2VEcm9wVGFyZ2V0OiAoYW55KSA9PiBhbnk7XG4gIC8vaXNEcmFnT3Zlck1lOiBib29sZWFuLFxuICBpc092ZXJDdXJyZW50OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IERyb3BUYXJnZXRDcmVhdG9yID0gRHJvcFRhcmdldChcbiAgW0RSQUdUWVBFX1BBR0UsIE5hdGl2ZVR5cGVzLkZJTEVdLFxuICB7XG4gICAgZHJvcChwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KSB7XG4gICAgICBjb25zdCBoYXNEcm9wcGVkT25DaGlsZCA9IG1vbml0b3IuZGlkRHJvcCgpO1xuICAgICAgaWYgKGhhc0Ryb3BwZWRPbkNoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHlwZSA9IG1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBtb25pdG9yLmdldEl0ZW0oKTtcblxuICAgICAgdmFyIG15UHJvcHMgPSBwcm9wcyBhcyB7IGRpc3BhdGNoIH0gJiBJZHJvcFRhcmdldFByb3BzO1xuICAgICAgY29uc3QgeyBkaXNwYXRjaCwgbGlzdG9mUGFnZXNIZWxwZXIgfSA9IG15UHJvcHM7XG5cbiAgICAgIC8vaWYgKHBhZ2VzQXJyYXkgKVxuXG4gICAgICBpZiAobGlzdG9mUGFnZXNIZWxwZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdsaXN0b2ZQYWdlc0hlbHBlciBub3Qgc2V0IGZvciBwYWdlIGRyb3AgdGFyZ2V0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgTmF0aXZlVHlwZXMuRklMRSAvKidfX05BVElWRV9GSUxFX18nKi86XG4gICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuYWRkUGFnZXMoaXRlbS5maWxlcywgcHJvcHMgJiYgcHJvcHMub3JkZXJOdW1iZXIpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBEUkFHVFlQRV9QQUdFOlxuICAgICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLm9uRXhpc3RpbmdQYWdlZERyb3BwZWQxKGl0ZW0sIHByb3BzICYmIHByb3BzLmlkKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9LFxuICB9LFxuXG4gIChjb25uZWN0ZXIsIG1vbml0b3IpID0+ICh7XG4gICAgcGFnZURyb3BUYXJnZXQ6IGNvbm5lY3Rlci5kcm9wVGFyZ2V0KCksXG4gICAgLy9pc0RyYWdPdmVyTWU6IG1vbml0b3IuaXNPdmVyKCksXG4gICAgaXNPdmVyQ3VycmVudDogbW9uaXRvci5pc092ZXIoeyBzaGFsbG93OiB0cnVlIH0pLFxuICB9KSxcbik7XG5cbnR5cGUgU3RhdGVQcm9wcyA9IHtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIHBvbGxBdHRlbXB0cz86IG51bWJlcjtcbn07XG5cbnR5cGUgVmlld1Byb3BzID0gUGFnZUltYWdlTW9kZWwgJlxuICBEbkRQcm9wcyAmXG4gIElkcm9wVGFyZ2V0UHJvcHMgJiB7IFBhZ2VPdmVybGF5Vmlldz86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PiB9ICYge1xuICAgIGNvbm5lY3REcmFnU291cmNlOiAoYW55KSA9PiBhbnk7XG4gICAgaXNEcmFnZ2luZzogYm9vbGVhbjtcbiAgfSAmIHsgZGVzaXJlZEhlaWdodDogbnVtYmVyOyBjb3JyZWN0ZWREaW1lbnRpb25zOiBDb3JyZWN0ZWREaW1lbnRpb25Qcm9wcyB9O1xuXG5jbGFzcyBMYXp5TG9hZGVkSW1hZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFZpZXdQcm9wcywgU3RhdGVQcm9wcz4ge1xuICBzdGF0ZTogU3RhdGVQcm9wcyA9IHtcbiAgICBwb2xsQXR0ZW1wdHM6IDAsXG4gIH07XG4gIF9pbWdSZWY6IGFueSA9IG51bGw7XG5cbiAgX2NoZWNrUHJvY2Vzc2luZzogYW55ID0gbnVsbDtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fY2hlY2tQcm9jZXNzaW5nKSBjbGVhclRpbWVvdXQodGhpcy5fY2hlY2tQcm9jZXNzaW5nKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBwYWdlVHlwZSwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkLCBvcmlnaW5hbElkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGFnZVR5cGU6IHByZXZQYWdlVHlwZSB9ID0gcHJldlByb3BzO1xuXG4gICAgLy9pZiAodGhpcy5fY2hlY2tQcm9jZXNzaW5nKVxuICAgIC8vICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tQcm9jZXNzaW5nKTtcblxuICAgIGlmIChwYWdlVHlwZSAhPSBwcmV2UGFnZVR5cGUpIHtcbiAgICAgIGlmICghcGFnZVR5cGUgfHwgUGFnZUltYWdlVHlwZU1vZGVsLm5vbndlYiA9PSBwYWdlVHlwZSkge1xuICAgICAgICAvL2ltYWdlIGlzIGRvbmUgcHJvY2Vzc2luZ1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9sbEF0dGVtcHRzOiAwIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3B0aW1pemVkIGZvciBmYXN0IGluLXByb2Nlc3MgYmFja2VuZDogcG9sbCBmcmVxdWVudGx5IGZvciBmaXJzdCAxMHMsIHRoZW4gYmFjayBvZmZcbiAgICAgICAgY29uc3QgYXR0ZW1wdHMgPSB0aGlzLnN0YXRlLnBvbGxBdHRlbXB0cyB8fCAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGF0dGVtcHRzIDwgNSA/IDEwMDAgOiBNYXRoLm1pbigzMDAwICogTWF0aC5wb3coMS41LCBhdHRlbXB0cyAtIDUpLCAxNTAwMCk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tQcm9jZXNzaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIucHJvY2Vzc1BhZ2UoaWQpKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9sbEF0dGVtcHRzOiBhdHRlbXB0cyArIDEgfSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBwYWdlVHlwZSwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkLCBvcmlnaW5hbElkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYWdlVHlwZSB8fCBQYWdlSW1hZ2VUeXBlTW9kZWwubm9ud2ViID09IHBhZ2VUeXBlKSB7XG4gICAgICAvL2ltYWdlIGlzIGRvbmUgcHJvY2Vzc2luZ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGFydCB3aXRoIGluaXRpYWwgZGVsYXkgb2YgMSBzZWNvbmQgZm9yIGZhc3QgYmFja2VuZFxuICAgICAgdGhpcy5fY2hlY2tQcm9jZXNzaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnByb2Nlc3NQYWdlKGlkKSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb2xsQXR0ZW1wdHM6IDEgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ltYWdlUHJvcHMoKSB7XG4gICAgaWYgKCF0aGlzLl9pbWdSZWYpIHtcbiAgICAgIGNvbnNvbGUud2FybignaW1hZ2UgcmVmIGlzIG51bGwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRpc3BhdGNoLCBsaXN0b2ZQYWdlc0hlbHBlciwgaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCwgaGVpZ2h0OiBkaXNwbGF5SGVpZ2h0IH0gPSB0aGlzLl9pbWdSZWY7XG5cbiAgICBpZiAod2lkdGggIT0gbmF0dXJhbFdpZHRoIHx8IGhlaWdodCAhPSBuYXR1cmFsSGVpZ2h0KSB7XG4gICAgICBjb25zb2xlLmxvZygnY29ycmVjdGluZyBpbWFnZSBkaW1lbnRpb25zJywgaWQpO1xuICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIuYWRkQ29ycmVjdGVkRGltZW50aW9ucyhpZCwgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0KSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY2FsZTogZGlzcGxheUhlaWdodCAvIG5hdHVyYWxIZWlnaHQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25JbWFnZUxvYWRGYWlsZWQoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgbGlzdG9mUGFnZXNIZWxwZXIsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLmhhbmRsZUZhaWxlZEltYWdlTG9hZChpZCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VUeXBlLFxuICAgICAgZGVzaXJlZEhlaWdodCxcbiAgICAgIHBhdGgsXG4gICAgICBzaXplLFxuICAgICAgY3JlYXRlZCxcbiAgICAgIG9yaWdpbmFsUGFnZU5hbWUsXG4gICAgICBpZCxcbiAgICAgIFBhZ2VPdmVybGF5VmlldyxcbiAgICAgIG9yaWdpbmFsSWQsXG4gICAgICBsaXN0b2ZQYWdlc0hlbHBlcixcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgb2ZmTGluZVByb2Nlc3NpbmdPbmx5LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHdhaXRUZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyNjY2MnLFxuICAgICAgLy9mb250U2l6ZTogJ2xhcmdlJyxcbiAgICAgIC8vbWFyZ2luVG9wOiAxMFxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIH07XG5cbiAgICBjb25zdCB3YWl0QmdTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogZGVzaXJlZEhlaWdodCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBjb2xvcjogJyM5OTknLFxuICAgICAgYm9yZGVyOiAnMnB4IGRhc2hlZCAjZGVlMmU2JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCB3YWl0RmlsZUluZm9TdHlsZSA9IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0gYXMgYW55O1xuXG4gICAgY29uc3QgcHJvY2Vzc2luZ092ZXJsYXlTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgcGFkZGluZzogJzEycHggMTZweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpJyxcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZGVlMmU2JyxcbiAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig0cHgpJyxcbiAgICB9IGFzIGFueTtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6ICc2cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U5ZWNlZicsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcbiAgICB9IGFzIGFueTtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwZDZlZmQgMCUsICMwZGNhZjAgMTAwJSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIGFuaW1hdGlvbjogJ3Byb2dyZXNzLWFuaW1hdGlvbiAycyBlYXNlLWluLW91dCBpbmZpbml0ZScsXG4gICAgICB3aWR0aDogJzYwJScsXG4gICAgfSBhcyBhbnk7XG5cbiAgICBjb25zdCBzdGF0dXNUZXh0U3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgY29sb3I6ICcjNDk1MDU3JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9IGFzIGFueTtcblxuICAgIGNvbnN0IGV4dCA9IGlkLnN1YnN0cihpZC5sYXN0SW5kZXhPZignLicpICsgMSk7XG5cbiAgICAvLyBIZWxwZXIgY29tcG9uZW50IGZvciBwcm9jZXNzaW5nIHN0YXR1cyBvdmVybGF5XG4gICAgY29uc3QgUHJvY2Vzc2luZ1N0YXR1c092ZXJsYXkgPSAoeyBzdGF0dXMsIGljb24gfTogeyBzdGF0dXM6IHN0cmluZzsgaWNvbjogc3RyaW5nIH0pID0+IChcbiAgICAgIDw+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3MtYW5pbWF0aW9uIHtcbiAgICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAgICAgICAgICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXtwcm9jZXNzaW5nT3ZlcmxheVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtwcm9ncmVzc0JhckNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Byb2dyZXNzQmFyU3R5bGV9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0YXR1c1RleHRTdHlsZX0+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgJHtpY29ufSBmYS1zcGluYH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19PjwvaT5cbiAgICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzZjNzU3ZCcgfX0+XG4gICAgICAgICAgICAgIFRoaXMgdXN1YWxseSB0YWtlcyA1LTEwIHNlY29uZHNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuXG4gICAgLy93aGVuIHBhZ2V0eXBlIGlzIG51bGwgaXQgbWVuYXMgaXQncyByZWFkeSBmb3Igd2ViIGRpc3BsYXlcbiAgICBpZiAoXG4gICAgICAhcGFnZVR5cGUgfHxcbiAgICAgIChQYWdlSW1hZ2VUeXBlTW9kZWwucHJvY2Vzc2luZyAhPSBwYWdlVHlwZSAmJlxuICAgICAgICBleHQgJiZcbiAgICAgICAgXy5pbmNsdWRlcyhbJ3BuZycsICdqcGcnLCAnanBlZyddLCBleHQudG9Mb3dlckNhc2UoKSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4gKHRoaXMuX2ltZ1JlZiA9IHJlZil9XG4gICAgICAgICAgICBvbkxvYWQ9eyhlKSA9PiB0aGlzLmNoZWNrSW1hZ2VQcm9wcygpfVxuICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHRoaXMub25JbWFnZUxvYWRGYWlsZWQoKX1cbiAgICAgICAgICAgIHNyYz17cGF0aH1cbiAgICAgICAgICAgIGFsdD0nZG9jdW1lbnQgaW1hZ2UnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2RvY1BhZ2VJbWFnZSdcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogZGVzaXJlZEhlaWdodCB9fVxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7UGFnZU92ZXJsYXlWaWV3ICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgICAgPFBhZ2VPdmVybGF5Vmlld1xuICAgICAgICAgICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBvbkFubm90YXRpb25zRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobGlzdG9mUGFnZXNIZWxwZXIucmVsb2FkQWN0aXZlRG9jUGFnZXMoW2lkXSkpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyEhcGFnZVR5cGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDUsIGJvdHRvbTogNSwgLi4ud2FpdFRleHRTdHlsZSB9fT5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgYW5hbHl6aW5nIDxpIGNsYXNzTmFtZT0nZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLWZ3Jz48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBDaGVja09mZmxpbmVQcm9jZXNzaW5nID0gKHsgY2hpbGRyZW4gfSkgPT5cbiAgICAgIG9mZkxpbmVQcm9jZXNzaW5nT25seSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAvL2hlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nOiAnMnJlbScsXG4gICAgICAgICAgICBmb250U2l6ZTogJ3NtYWxsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzgxODE4MScsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHA+VGhpcyB7ZXh0fSBkb2N1bWVudCBzaXplIGV4Y2VlZHMgdGhlIGxpbWl0IGZvciByZWFsIHRpbWUgcHJvY2Vzc2luZzwvcD5cbiAgICAgICAgICA8cD5JdCBpcyBiZWluZyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkgLi4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD57Y2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG5cbiAgICBjb25zdCBmaWxlSWNvID0gZXh0ICYmIGV4dC50b0xvd2VyQ2FzZSgpID09ICdwZGYnID8gJ2ZhLWZpbGUtcGRmLW8nIDogJ2ZhLWZpbGUtaW1hZ2Utbyc7XG4gICAgY29uc3QgRmlsZUluZm9WaWV3ID0gKCkgPT4gKFxuICAgICAgPGRpdiBzdHlsZT17d2FpdEZpbGVJbmZvU3R5bGV9PlxuICAgICAgICA8aSBjbGFzc05hbWU9eydmYSAnICsgZmlsZUljb30gc3R5bGU9e3sgZm9udFNpemU6IGRlc2lyZWRIZWlnaHQgLyAzLCBtYXJnaW46ICcxMHB4JyB9fT48L2k+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge29yaWdpbmFsUGFnZU5hbWUgJiYgPGk+IFwie29yaWdpbmFsUGFnZU5hbWV9XCIgPC9pPn1cbiAgICAgICAgICB7ISFzaXplICYmIDxzdHJvbmc+IHtmaWxlc2l6ZShzaXplKX0gPC9zdHJvbmc+fVxuICAgICAgICAgIHtjcmVhdGVkICYmIDxpIHN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGwnIH19PmNyZWF0ZWQge21vbWVudChjcmVhdGVkKS5mb3JtYXQoJ2xsbCcpfTwvaT59XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBic1N0eWxlPSdsaW5rJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW5zdXJlUHJpbnRBcHAoKS5kb3dubG9hZE9yaWdpbmFscyhbb3JpZ2luYWxJZCB8fCBpZF0pKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJyBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1kb3dubG9hZCc+PC9pPiBEb3dubG9hZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHN3aXRjaCAocGFnZVR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZUltYWdlVHlwZU1vZGVsLnVucHJvY2Vzc2VkOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRCZ1N0eWxlfT5cbiAgICAgICAgICAgIDxGaWxlSW5mb1ZpZXcgLz5cbiAgICAgICAgICAgIDxDaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgICAgICA8UHJvY2Vzc2luZ1N0YXR1c092ZXJsYXlcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJBbmFseXppbmcgZG9jdW1lbnQuLi5cIlxuICAgICAgICAgICAgICAgIGljb249XCJmYS1zZWFyY2hcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFBhZ2VJbWFnZVR5cGVNb2RlbC5pZGVudGlmeWluZzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YWl0QmdTdHlsZX0+XG4gICAgICAgICAgICA8RmlsZUluZm9WaWV3IC8+XG4gICAgICAgICAgICA8Q2hlY2tPZmZsaW5lUHJvY2Vzc2luZz5cbiAgICAgICAgICAgICAgPFByb2Nlc3NpbmdTdGF0dXNPdmVybGF5XG4gICAgICAgICAgICAgICAgc3RhdHVzPVwiSWRlbnRpZnlpbmcgZG9jdW1lbnQgdHlwZS4uLlwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImZhLWZpbGUtdGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgUGFnZUltYWdlVHlwZU1vZGVsLnByb2Nlc3Npbmc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17d2FpdEJnU3R5bGV9PlxuICAgICAgICAgICAgPEZpbGVJbmZvVmlldyAvPlxuICAgICAgICAgICAgPENoZWNrT2ZmbGluZVByb2Nlc3Npbmc+XG4gICAgICAgICAgICAgIDxQcm9jZXNzaW5nU3RhdHVzT3ZlcmxheVxuICAgICAgICAgICAgICAgIHN0YXR1cz1cIkNvbnZlcnRpbmcgdG8gaW1hZ2VzLi4uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZmEtaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DaGVja09mZmxpbmVQcm9jZXNzaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFBhZ2VJbWFnZVR5cGVNb2RlbC5ub253ZWI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhaXRCZ1N0eWxlfT5cbiAgICAgICAgICAgIDxGaWxlSW5mb1ZpZXcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgUGFnZVZpZXc6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxWaWV3UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkaXNwYXRjaCxcbiAgICBwYWdlVHlwZSxcbiAgICBpZCxcbiAgICBkZXNpcmVkSGVpZ2h0LFxuICAgIHBhdGgsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGNvcnJlY3RlZERpbWVudGlvbnMsXG4gICAgcGFnZURyb3BUYXJnZXQsXG4gICAgaXNPdmVyQ3VycmVudCxcbiAgICBjb25uZWN0RHJhZ1NvdXJjZSxcbiAgICBpc0RyYWdnaW5nLFxuICB9ID0gcHJvcHM7XG5cbiAgbGV0IGNvcnJlY3RlZFdpZHRoID0gd2lkdGg7XG4gIGxldCBjb3JyZWN0ZWRoZWlnaHQgPSBoZWlnaHQ7XG4gIGlmIChcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zICYmXG4gICAgY29ycmVjdGVkRGltZW50aW9uc1tpZF0gJiZcbiAgICBjb3JyZWN0ZWREaW1lbnRpb25zW2lkXS53aWR0aCAmJlxuICAgIGNvcnJlY3RlZERpbWVudGlvbnNbaWRdLmhlaWdodFxuICApIHtcbiAgICBjb3JyZWN0ZWRXaWR0aCA9IGNvcnJlY3RlZERpbWVudGlvbnNbaWRdLndpZHRoO1xuICAgIGNvcnJlY3RlZGhlaWdodCA9IGNvcnJlY3RlZERpbWVudGlvbnNbaWRdLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGRlc2lyZWRXaWR0aCA9XG4gICAgZGVzaXJlZEhlaWdodCAqIChjb3JyZWN0ZWRXaWR0aCAmJiBjb3JyZWN0ZWRoZWlnaHQgPyBjb3JyZWN0ZWRXaWR0aCAvIGNvcnJlY3RlZGhlaWdodCA6IDAuNzcyKTtcblxuICByZXR1cm4gcGFnZURyb3BUYXJnZXQoXG4gICAgY29ubmVjdERyYWdTb3VyY2UoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0ncmV2UGFnZSdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNPdmVyQ3VycmVudCA/ICcjNjkzYjIyYTEnIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC41IDogMSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPExhenlMb2FkIGhlaWdodD17ZGVzaXJlZEhlaWdodH0gd2lkdGg9e2Rlc2lyZWRXaWR0aH0gb2Zmc2V0VmVydGljYWw9ezEwMDB9PlxuICAgICAgICAgIDxMYXp5TG9hZGVkSW1hZ2Ugey4uLnByb3BzfSAvPlxuICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgPC9kaXY+LFxuICAgICksXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnU291cmNlKFxuICBEUkFHVFlQRV9QQUdFLFxuICB7XG4gICAgYmVnaW5EcmFnKHByb3BzOiBQYWdlSW1hZ2VNb2RlbCkge1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgIGNhbkRyYWcocHJvcHMsIG1vbml0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgKi9cblxuICAgIGVuZERyYWcocHJvcHMsIG1vbml0b3IpIHtcbiAgICAgIGlmIChtb25pdG9yLmRpZERyb3AoKSkge1xuICAgICAgICBjb25zdCBkcm9wcGVkUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG5cbiAgICAgICAgaWYgKGRyb3BwZWRSZXN1bHQgJiYgZHJvcHBlZFJlc3VsdC5tb3ZlZFRvTGlzdCkge1xuICAgICAgICAgIHZhciBteVByb3BzID0gcHJvcHMgYXMgeyBkaXNwYXRjaCB9ICYgSWRyb3BUYXJnZXRQcm9wcyAmIFBhZ2VJbWFnZU1vZGVsO1xuICAgICAgICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGxpc3RvZlBhZ2VzSGVscGVyLCBpZCB9ID0gbXlQcm9wcztcblxuICAgICAgICAgIGlmIChsaXN0b2ZQYWdlc0hlbHBlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaXN0b2ZQYWdlc0hlbHBlciBub3Qgc2V0IGZvciBwYWdlIGRyb3Agc291cmNlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKGxpc3RvZlBhZ2VzSGVscGVyLnBhZ2VNb3ZlZChpZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgKGNvbm5lY3RlciwgbW9uaXRvcikgPT4gKHtcbiAgICBjb25uZWN0RHJhZ1NvdXJjZTogY29ubmVjdGVyLmRyYWdTb3VyY2UoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgfSksXG4pKERyb3BUYXJnZXRDcmVhdG9yKFBhZ2VWaWV3KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvcGFnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkl0ZW0sIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBlbnN1cmVXb3Jrc3BhY2UgZnJvbSAnLi4vd29ya3NwYWNlL3JlZHVjZXInO1xuXG50eXBlIENvbXBvbmVudFByb3BzID0ge1xuICBvblNjYW46ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIENvbm5lY3RlZFByb3AgPSB7IGNyZWF0aW9uT2JqZWN0OiBhbnkgfTtcblxuY29uc3QgU2Nhbk1lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxDb21wb25lbnRQcm9wcyAmIENvbm5lY3RlZFByb3A+ID0gKHtcbiAgb25TY2FuLFxuICBjcmVhdGlvbk9iamVjdCxcbn0pID0+IHtcbiAgY29uc3QgaGFzUmV2UHJpbnRlZERhdGEgPSAhIShcbiAgICBjcmVhdGlvbk9iamVjdCAmJlxuICAgIGNyZWF0aW9uT2JqZWN0LmluaXRjb250ZXh0ID09ICdwcmludHRvcmV2JyAmJlxuICAgIGNyZWF0aW9uT2JqZWN0LmRhdGFcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZJdGVtXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uU2NhbiAmJiBvblNjYW4oKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgIHBsYWNlbWVudD0nYm90dG9tJ1xuICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICA8VG9vbHRpcCBpZD0nc2Nhbk1lbnV0b29sdGlwJz5cbiAgICAgICAgICAgIHtoYXNSZXZQcmludGVkRGF0YSA/ICdJbXBvcnQgcHJpbnRlZCBpbWFnZXMnIDogJ1NjYW4gaW1hZ2VzJ31cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2hhc1JldlByaW50ZWREYXRhID8gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1wcmludCBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhIGZhLWNpcmNsZS1vLW5vdGNoIGZhLTN4IGZhLXNwaW4nXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IC03LFxuICAgICAgICAgICAgICAgIHRvcDogLTE4LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2NjYycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWVyYXNlciBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICl9XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgIDwvTmF2SXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8Q29ubmVjdGVkUHJvcCwgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlLCBvd25wcm9wcykgPT4ge1xuICBjb25zdCB7IGNyZWF0aW9uT2JqZWN0IH0gPSBlbnN1cmVXb3Jrc3BhY2UoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiB7IGNyZWF0aW9uT2JqZWN0IH07XG59KShTY2FuTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvc2Nhbk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgZW5zdXJlTWFpbk5hdiwgeyBJTmF2TWVudVN0YXRlIH0gZnJvbSAnLi4vbWFpbk5hdi9yZWR1Y2VyJztcblxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICdyZWFjdC10b2dnbGUtYnV0dG9uJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbnR5cGUgVmlld1Byb3BzID0gSU5hdk1lbnVTdGF0ZSAmIHsgZGlzcGF0Y2ggfTtcblxuY29uc3QgYm9yZGVyUmFkaXVzU3R5bGUgPSB7IGJvcmRlclJhZGl1czogMiB9O1xuY29uc3QgdG9vbHRpcCA9IDxUb29sdGlwIGlkPSd0b29sdGlwJz5TZWxlY3Qgc2Nhbm5lciBiZWZvcmUgc2Nhbm5pbmc8L1Rvb2x0aXA+O1xuY29uc3QgbGFiZWwgPSAoXG4gIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9J2JvdHRvbScgb3ZlcmxheT17dG9vbHRpcH0+XG4gICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1lcmFzZXInIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nIH19IC8+XG4gIDwvT3ZlcmxheVRyaWdnZXI+XG4pO1xuXG5jb25zdCBNb3ZlYWJsZVNldHRpbmc6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxWaWV3UHJvcHM+ID0gKHsgZGlzcGF0Y2gsIHNlbGVjdGFibGVTZXR0aW5ncyB9KSA9PiAoXG4gIDxsaT5cbiAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIHBhZGRpbmdSaWdodDogJzVweCcgfX0+XG4gICAgICA8VG9nZ2xlQnV0dG9uXG4gICAgICAgIHRodW1iSWNvbj17bGFiZWx9XG4gICAgICAgIGFjdGl2ZUxhYmVsPSdPTidcbiAgICAgICAgaW5hY3RpdmVMYWJlbD0nT0ZGJ1xuICAgICAgICBjb2xvcnM9e3tcbiAgICAgICAgICBhY3RpdmVUaHVtYjoge1xuICAgICAgICAgICAgYmFzZTogJyNmMzcwMjknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5hY3RpdmVUaHVtYjoge1xuICAgICAgICAgICAgYmFzZTogJyNmMzcwMjknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXshIXNlbGVjdGFibGVTZXR0aW5nc1snc2VsZWN0U2Nhbm5lciddfVxuICAgICAgICB0aHVtYlN0eWxlPXtib3JkZXJSYWRpdXNTdHlsZX1cbiAgICAgICAgdHJhY2tTdHlsZT17Ym9yZGVyUmFkaXVzU3R5bGV9XG4gICAgICAgIG9uVG9nZ2xlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAvL3JlbWViZXIgdG8gYWRkIHRvIG1haW5uYXYvcmVkdWNlci50ID1zIDpzZXR0aW5nc1RvUGVyc2lzdCBpZiB5b3Ugd2FudCBzZXR0aW5nIHRvIHBlcnNpc3RcblxuICAgICAgICAgIGRpc3BhdGNoKGVuc3VyZU1haW5OYXYoKS51cGRhdGVTZXR0aW5nKCdzZWxlY3RTY2FubmVyJywgIXZhbHVlKSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxzcGFuPlNlbGVjdCBzY2FubmVyPC9zcGFuPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHtcbiAgcmV0dXJuIGVuc3VyZU1haW5OYXYoKS5nZXRDdXJyZW50U3RhdGUoc3RhdGUpIHx8IHt9O1xufSkoTW92ZWFibGVTZXR0aW5nKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xpc3RQYWdlcy9zY2FubmVyU2VsZWN0TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZW5zdXJlUHJvamVjdHMgZnJvbSAnLi4vcHJvamVjdHMvcmVkdWNlcic7XG5pbXBvcnQgZW5zdXJlU2VhcmNoIGZyb20gJy4uL3NlYXJjaFZpZXcvcmVkdWNlcic7XG5cbnR5cGUgQ29tcG9uZW50UHJvcHMgPSB7XG4gIHBhZ2VJZDogc3RyaW5nO1xufTtcblxudHlwZSBDb25uZWN0ZWRQcm9wcyA9IHtcbiAgcmVhZG9ubHkgc2hvd09jclRleHRmb3JQYWdlSWQ6IHN0cmluZztcbiAgcmVhZG9ubHkgT0NSRW5hYmxlZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IE9DUk1lbnU6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxDb25uZWN0ZWRQcm9wcyAmIENvbXBvbmVudFByb3BzICYgeyBkaXNwYXRjaCB9PiA9ICh7XG4gIHNob3dPY3JUZXh0Zm9yUGFnZUlkLFxuICBPQ1JFbmFibGVkLFxuICBwYWdlSWQsXG4gIGRpc3BhdGNoLFxufSkgPT4ge1xuICBpZiAoIU9DUkVuYWJsZWQpIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+Jm5ic3A7PC9SZWFjdC5GcmFnbWVudD47XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuXG4gICAgICA8TWVudUl0ZW1cbiAgICAgICAga2V5PSdvY3JfZGF0YSdcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChlbnN1cmVTZWFyY2goKS5Ub2dnbGVPY3JUZXh0KHBhZ2VJZCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fSovfVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBTaG93IE9DUiBEYXRhXG4gICAgICAgICAge3Nob3dPY3JUZXh0Zm9yUGFnZUlkID09IHBhZ2VJZCAmJiA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZWNrIGNvbG9yLW9yYW5nZSc+PC9pPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9NZW51SXRlbT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxDb25uZWN0ZWRQcm9wcywgeyBkaXNwYXRjaCB9LCBDb21wb25lbnRQcm9wcz4oKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRQcm9qZWN0IH0gPSBlbnN1cmVQcm9qZWN0cygpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG4gIGNvbnN0IHsgc2hvd09jclRleHRmb3JQYWdlSWQgfSA9IGVuc3VyZVNlYXJjaCgpLmdldEN1cnJlbnRTdGF0ZShzdGF0ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBPQ1JFbmFibGVkOiAhIShzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LmZ1bGxUZXh0T2NyKSxcbiAgICBzaG93T2NyVGV4dGZvclBhZ2VJZCxcbiAgfTtcbn0pKE9DUk1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2VhcmNoVmlldy9vY3JNZW51LnRzeCIsImV4cG9ydCBkZWZhdWx0IHt9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXIvZGlzdC9lbnRyeS5qcyEuL3JlYWN0V2ViVXRpbHMvYmFzZS9uby1sb2FkZXIuanMhLi9DbGllbnRBcHAvY29tcG9uZW50cy9saXN0UGFnZXMvbGlnaHRCb3guY2xpZW50T25seS50c3giLCIoZnVuY3Rpb24ocm9vdCxmYWN0b3J5KXtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LmV2ZW50TGlzdGVuZXIgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiB3cmFwKHN0YW5kYXJkLCBmYWxsYmFjaykge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoZWwsIGV2dE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG5cdFx0XHRpZiAoZWxbc3RhbmRhcmRdKSB7XG5cdFx0XHRcdGVsW3N0YW5kYXJkXShldnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGVsW2ZhbGxiYWNrXSkge1xuXHRcdFx0XHRlbFtmYWxsYmFja10oJ29uJyArIGV2dE5hbWUsIGxpc3RlbmVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuICAgIHJldHVybiB7XG5cdFx0YWRkOiB3cmFwKCdhZGRFdmVudExpc3RlbmVyJywgJ2F0dGFjaEV2ZW50JyksXG5cdFx0cmVtb3ZlOiB3cmFwKCdyZW1vdmVFdmVudExpc3RlbmVyJywgJ2RldGFjaEV2ZW50Jylcblx0fTtcbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXZlbnRsaXN0ZW5lci9ldmVudGxpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIGZpbGVzaXplXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIEphc29uIE11bGxpZ2FuIDxqYXNvbi5tdWxsaWdhbkBhdm9pZHdvcmsuY29tPlxuICogQGxpY2Vuc2UgQlNELTMtQ2xhdXNlXG4gKiBAdmVyc2lvbiA2LjQuMFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5maWxlc2l6ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuXHR2YXIgYiA9IC9eKGJ8QikkLyxcblx0ICAgIHN5bWJvbCA9IHtcblx0ICBpZWM6IHtcblx0ICAgIGJpdHM6IFtcImJcIiwgXCJLaWJcIiwgXCJNaWJcIiwgXCJHaWJcIiwgXCJUaWJcIiwgXCJQaWJcIiwgXCJFaWJcIiwgXCJaaWJcIiwgXCJZaWJcIl0sXG5cdCAgICBieXRlczogW1wiQlwiLCBcIktpQlwiLCBcIk1pQlwiLCBcIkdpQlwiLCBcIlRpQlwiLCBcIlBpQlwiLCBcIkVpQlwiLCBcIlppQlwiLCBcIllpQlwiXVxuXHQgIH0sXG5cdCAgamVkZWM6IHtcblx0ICAgIGJpdHM6IFtcImJcIiwgXCJLYlwiLCBcIk1iXCIsIFwiR2JcIiwgXCJUYlwiLCBcIlBiXCIsIFwiRWJcIiwgXCJaYlwiLCBcIlliXCJdLFxuXHQgICAgYnl0ZXM6IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCIsIFwiRUJcIiwgXCJaQlwiLCBcIllCXCJdXG5cdCAgfVxuXHR9LFxuXHQgICAgZnVsbGZvcm0gPSB7XG5cdCAgaWVjOiBbXCJcIiwgXCJraWJpXCIsIFwibWViaVwiLCBcImdpYmlcIiwgXCJ0ZWJpXCIsIFwicGViaVwiLCBcImV4YmlcIiwgXCJ6ZWJpXCIsIFwieW9iaVwiXSxcblx0ICBqZWRlYzogW1wiXCIsIFwia2lsb1wiLCBcIm1lZ2FcIiwgXCJnaWdhXCIsIFwidGVyYVwiLCBcInBldGFcIiwgXCJleGFcIiwgXCJ6ZXR0YVwiLCBcInlvdHRhXCJdXG5cdH0sXG5cdCAgICByb3VuZGluZ0Z1bmNzID0ge1xuXHQgIGZsb29yOiBNYXRoLmZsb29yLFxuXHQgIGNlaWw6IE1hdGguY2VpbFxuXHR9O1xuXHQvKipcblx0ICogZmlsZXNpemVcblx0ICpcblx0ICogQG1ldGhvZCBmaWxlc2l6ZVxuXHQgKiBAcGFyYW0gIHtNaXhlZH0gICBhcmcgICAgICAgIFN0cmluZywgSW50IG9yIEZsb2F0IHRvIHRyYW5zZm9ybVxuXHQgKiBAcGFyYW0gIHtPYmplY3R9ICBkZXNjcmlwdG9yIFtPcHRpb25hbF0gRmxhZ3Ncblx0ICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICBSZWFkYWJsZSBmaWxlIHNpemUgU3RyaW5nXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIGZpbGVzaXplKGFyZykge1xuXHQgIHZhciBkZXNjcmlwdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblx0ICB2YXIgcmVzdWx0ID0gW10sXG5cdCAgICAgIHZhbCA9IDAsXG5cdCAgICAgIGUsXG5cdCAgICAgIGJhc2UsXG5cdCAgICAgIGJpdHMsXG5cdCAgICAgIGNlaWwsXG5cdCAgICAgIGZ1bGwsXG5cdCAgICAgIGZ1bGxmb3Jtcyxcblx0ICAgICAgbG9jYWxlLFxuXHQgICAgICBsb2NhbGVPcHRpb25zLFxuXHQgICAgICBuZWcsXG5cdCAgICAgIG51bSxcblx0ICAgICAgb3V0cHV0LFxuXHQgICAgICBwYWQsXG5cdCAgICAgIHJvdW5kLFxuXHQgICAgICB1LFxuXHQgICAgICB1bml4LFxuXHQgICAgICBzZXBhcmF0b3IsXG5cdCAgICAgIHNwYWNlcixcblx0ICAgICAgc3RhbmRhcmQsXG5cdCAgICAgIHN5bWJvbHMsXG5cdCAgICAgIHJvdW5kaW5nRnVuYyxcblx0ICAgICAgcHJlY2lzaW9uO1xuXG5cdCAgaWYgKGlzTmFOKGFyZykpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIG51bWJlclwiKTtcblx0ICB9XG5cblx0ICBiaXRzID0gZGVzY3JpcHRvci5iaXRzID09PSB0cnVlO1xuXHQgIHVuaXggPSBkZXNjcmlwdG9yLnVuaXggPT09IHRydWU7XG5cdCAgcGFkID0gZGVzY3JpcHRvci5wYWQgPT09IHRydWU7XG5cdCAgYmFzZSA9IGRlc2NyaXB0b3IuYmFzZSB8fCAyO1xuXHQgIHJvdW5kID0gZGVzY3JpcHRvci5yb3VuZCAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5yb3VuZCA6IHVuaXggPyAxIDogMjtcblx0ICBsb2NhbGUgPSBkZXNjcmlwdG9yLmxvY2FsZSAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5sb2NhbGUgOiBcIlwiO1xuXHQgIGxvY2FsZU9wdGlvbnMgPSBkZXNjcmlwdG9yLmxvY2FsZU9wdGlvbnMgfHwge307XG5cdCAgc2VwYXJhdG9yID0gZGVzY3JpcHRvci5zZXBhcmF0b3IgIT09IHZvaWQgMCA/IGRlc2NyaXB0b3Iuc2VwYXJhdG9yIDogXCJcIjtcblx0ICBzcGFjZXIgPSBkZXNjcmlwdG9yLnNwYWNlciAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5zcGFjZXIgOiB1bml4ID8gXCJcIiA6IFwiIFwiO1xuXHQgIHN5bWJvbHMgPSBkZXNjcmlwdG9yLnN5bWJvbHMgfHwge307XG5cdCAgc3RhbmRhcmQgPSBiYXNlID09PSAyID8gZGVzY3JpcHRvci5zdGFuZGFyZCB8fCBcImplZGVjXCIgOiBcImplZGVjXCI7XG5cdCAgb3V0cHV0ID0gZGVzY3JpcHRvci5vdXRwdXQgfHwgXCJzdHJpbmdcIjtcblx0ICBmdWxsID0gZGVzY3JpcHRvci5mdWxsZm9ybSA9PT0gdHJ1ZTtcblx0ICBmdWxsZm9ybXMgPSBkZXNjcmlwdG9yLmZ1bGxmb3JtcyBpbnN0YW5jZW9mIEFycmF5ID8gZGVzY3JpcHRvci5mdWxsZm9ybXMgOiBbXTtcblx0ICBlID0gZGVzY3JpcHRvci5leHBvbmVudCAhPT0gdm9pZCAwID8gZGVzY3JpcHRvci5leHBvbmVudCA6IC0xO1xuXHQgIHJvdW5kaW5nRnVuYyA9IHJvdW5kaW5nRnVuY3NbZGVzY3JpcHRvci5yb3VuZGluZ01ldGhvZF0gfHwgTWF0aC5yb3VuZDtcblx0ICBudW0gPSBOdW1iZXIoYXJnKTtcblx0ICBuZWcgPSBudW0gPCAwO1xuXHQgIGNlaWwgPSBiYXNlID4gMiA/IDEwMDAgOiAxMDI0O1xuXHQgIHByZWNpc2lvbiA9IGlzTmFOKGRlc2NyaXB0b3IucHJlY2lzaW9uKSA9PT0gZmFsc2UgPyBwYXJzZUludChkZXNjcmlwdG9yLnByZWNpc2lvbiwgMTApIDogMDsgLy8gRmxpcHBpbmcgYSBuZWdhdGl2ZSBudW1iZXIgdG8gZGV0ZXJtaW5lIHRoZSBzaXplXG5cblx0ICBpZiAobmVnKSB7XG5cdCAgICBudW0gPSAtbnVtO1xuXHQgIH0gLy8gRGV0ZXJtaW5pbmcgdGhlIGV4cG9uZW50XG5cblxuXHQgIGlmIChlID09PSAtMSB8fCBpc05hTihlKSkge1xuXHQgICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cobnVtKSAvIE1hdGgubG9nKGNlaWwpKTtcblxuXHQgICAgaWYgKGUgPCAwKSB7XG5cdCAgICAgIGUgPSAwO1xuXHQgICAgfVxuXHQgIH0gLy8gRXhjZWVkaW5nIHN1cHBvcnRlZCBsZW5ndGgsIHRpbWUgdG8gcmVkdWNlICYgbXVsdGlwbHlcblxuXG5cdCAgaWYgKGUgPiA4KSB7XG5cdCAgICBpZiAocHJlY2lzaW9uID4gMCkge1xuXHQgICAgICBwcmVjaXNpb24gKz0gOCAtIGU7XG5cdCAgICB9XG5cblx0ICAgIGUgPSA4O1xuXHQgIH1cblxuXHQgIGlmIChvdXRwdXQgPT09IFwiZXhwb25lbnRcIikge1xuXHQgICAgcmV0dXJuIGU7XG5cdCAgfSAvLyBaZXJvIGlzIG5vdyBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIGJ5dGVzIGRpdmlkZSBieSAxXG5cblxuXHQgIGlmIChudW0gPT09IDApIHtcblx0ICAgIHJlc3VsdFswXSA9IDA7XG5cdCAgICB1ID0gcmVzdWx0WzFdID0gdW5peCA/IFwiXCIgOiBzeW1ib2xbc3RhbmRhcmRdW2JpdHMgPyBcImJpdHNcIiA6IFwiYnl0ZXNcIl1bZV07XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhbCA9IG51bSAvIChiYXNlID09PSAyID8gTWF0aC5wb3coMiwgZSAqIDEwKSA6IE1hdGgucG93KDEwMDAsIGUpKTtcblxuXHQgICAgaWYgKGJpdHMpIHtcblx0ICAgICAgdmFsID0gdmFsICogODtcblxuXHQgICAgICBpZiAodmFsID49IGNlaWwgJiYgZSA8IDgpIHtcblx0ICAgICAgICB2YWwgPSB2YWwgLyBjZWlsO1xuXHQgICAgICAgIGUrKztcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcCA9IE1hdGgucG93KDEwLCBlID4gMCA/IHJvdW5kIDogMCk7XG5cdCAgICByZXN1bHRbMF0gPSByb3VuZGluZ0Z1bmModmFsICogcCkgLyBwO1xuXG5cdCAgICBpZiAocmVzdWx0WzBdID09PSBjZWlsICYmIGUgPCA4ICYmIGRlc2NyaXB0b3IuZXhwb25lbnQgPT09IHZvaWQgMCkge1xuXHQgICAgICByZXN1bHRbMF0gPSAxO1xuXHQgICAgICBlKys7XG5cdCAgICB9XG5cblx0ICAgIHUgPSByZXN1bHRbMV0gPSBiYXNlID09PSAxMCAmJiBlID09PSAxID8gYml0cyA/IFwia2JcIiA6IFwia0JcIiA6IHN5bWJvbFtzdGFuZGFyZF1bYml0cyA/IFwiYml0c1wiIDogXCJieXRlc1wiXVtlXTtcblxuXHQgICAgaWYgKHVuaXgpIHtcblx0ICAgICAgcmVzdWx0WzFdID0gc3RhbmRhcmQgPT09IFwiamVkZWNcIiA/IHJlc3VsdFsxXS5jaGFyQXQoMCkgOiBlID4gMCA/IHJlc3VsdFsxXS5yZXBsYWNlKC9CJC8sIFwiXCIpIDogcmVzdWx0WzFdO1xuXG5cdCAgICAgIGlmIChiLnRlc3QocmVzdWx0WzFdKSkge1xuXHQgICAgICAgIHJlc3VsdFswXSA9IE1hdGguZmxvb3IocmVzdWx0WzBdKTtcblx0ICAgICAgICByZXN1bHRbMV0gPSBcIlwiO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSAvLyBEZWNvcmF0aW5nIGEgJ2RpZmYnXG5cblxuXHQgIGlmIChuZWcpIHtcblx0ICAgIHJlc3VsdFswXSA9IC1yZXN1bHRbMF07XG5cdCAgfSAvLyBTZXR0aW5nIG9wdGlvbmFsIHByZWNpc2lvblxuXG5cblx0ICBpZiAocHJlY2lzaW9uID4gMCkge1xuXHQgICAgcmVzdWx0WzBdID0gcmVzdWx0WzBdLnRvUHJlY2lzaW9uKHByZWNpc2lvbik7XG5cdCAgfSAvLyBBcHBseWluZyBjdXN0b20gc3ltYm9sXG5cblxuXHQgIHJlc3VsdFsxXSA9IHN5bWJvbHNbcmVzdWx0WzFdXSB8fCByZXN1bHRbMV07XG5cblx0ICBpZiAobG9jYWxlID09PSB0cnVlKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9Mb2NhbGVTdHJpbmcoKTtcblx0ICB9IGVsc2UgaWYgKGxvY2FsZS5sZW5ndGggPiAwKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBsb2NhbGVPcHRpb25zKTtcblx0ICB9IGVsc2UgaWYgKHNlcGFyYXRvci5sZW5ndGggPiAwKSB7XG5cdCAgICByZXN1bHRbMF0gPSByZXN1bHRbMF0udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBzZXBhcmF0b3IpO1xuXHQgIH1cblxuXHQgIGlmIChwYWQgJiYgTnVtYmVyLmlzSW50ZWdlcihyZXN1bHRbMF0pID09PSBmYWxzZSAmJiByb3VuZCA+IDApIHtcblx0ICAgIHZhciB4ID0gc2VwYXJhdG9yIHx8IFwiLlwiLFxuXHQgICAgICAgIHRtcCA9IHJlc3VsdFswXS50b1N0cmluZygpLnNwbGl0KHgpLFxuXHQgICAgICAgIHMgPSB0bXBbMV0gfHwgXCJcIixcblx0ICAgICAgICBsID0gcy5sZW5ndGgsXG5cdCAgICAgICAgbiA9IHJvdW5kIC0gbDtcblx0ICAgIHJlc3VsdFswXSA9IFwiXCIuY29uY2F0KHRtcFswXSkuY29uY2F0KHgpLmNvbmNhdChzLnBhZEVuZChsICsgbiwgXCIwXCIpKTtcblx0ICB9XG5cblx0ICBpZiAoZnVsbCkge1xuXHQgICAgcmVzdWx0WzFdID0gZnVsbGZvcm1zW2VdID8gZnVsbGZvcm1zW2VdIDogZnVsbGZvcm1bc3RhbmRhcmRdW2VdICsgKGJpdHMgPyBcImJpdFwiIDogXCJieXRlXCIpICsgKHJlc3VsdFswXSA9PT0gMSA/IFwiXCIgOiBcInNcIik7XG5cdCAgfSAvLyBSZXR1cm5pbmcgQXJyYXksIE9iamVjdCwgb3IgU3RyaW5nIChkZWZhdWx0KVxuXG5cblx0ICByZXR1cm4gb3V0cHV0ID09PSBcImFycmF5XCIgPyByZXN1bHQgOiBvdXRwdXQgPT09IFwib2JqZWN0XCIgPyB7XG5cdCAgICB2YWx1ZTogcmVzdWx0WzBdLFxuXHQgICAgc3ltYm9sOiByZXN1bHRbMV0sXG5cdCAgICBleHBvbmVudDogZSxcblx0ICAgIHVuaXQ6IHVcblx0ICB9IDogcmVzdWx0LmpvaW4oc3BhY2VyKTtcblx0fSAvLyBQYXJ0aWFsIGFwcGxpY2F0aW9uIGZvciBmdW5jdGlvbmFsIHByb2dyYW1taW5nXG5cblxuXHRmaWxlc2l6ZS5wYXJ0aWFsID0gZnVuY3Rpb24gKG9wdCkge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG5cdCAgICByZXR1cm4gZmlsZXNpemUoYXJnLCBvcHQpO1xuXHQgIH07XG5cdH07XG5cblx0cmV0dXJuIGZpbGVzaXplO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGVzaXplL2xpYi9maWxlc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC50aHJvdHRsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLy8gZW1wdHkgKG51bGwtbG9hZGVyKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9ldmVudGxpc3RlbmVyID0gcmVxdWlyZSgnZXZlbnRsaXN0ZW5lcicpO1xuXG52YXIgX2xvZGFzaCA9IHJlcXVpcmUoJ2xvZGFzaC5kZWJvdW5jZScpO1xuXG52YXIgX2xvZGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2gpO1xuXG52YXIgX2xvZGFzaDMgPSByZXF1aXJlKCdsb2Rhc2gudGhyb3R0bGUnKTtcblxudmFyIF9sb2Rhc2g0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoMyk7XG5cbnZhciBfcGFyZW50U2Nyb2xsID0gcmVxdWlyZSgnLi91dGlscy9wYXJlbnRTY3JvbGwnKTtcblxudmFyIF9wYXJlbnRTY3JvbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyZW50U2Nyb2xsKTtcblxudmFyIF9pblZpZXdwb3J0ID0gcmVxdWlyZSgnLi91dGlscy9pblZpZXdwb3J0Jyk7XG5cbnZhciBfaW5WaWV3cG9ydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pblZpZXdwb3J0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTGF6eUxvYWQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGF6eUxvYWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExhenlMb2FkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhenlMb2FkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMYXp5TG9hZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExhenlMb2FkKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMubGF6eUxvYWRIYW5kbGVyID0gX3RoaXMubGF6eUxvYWRIYW5kbGVyLmJpbmQoX3RoaXMpO1xuXG4gICAgaWYgKHByb3BzLnRocm90dGxlID4gMCkge1xuICAgICAgaWYgKHByb3BzLmRlYm91bmNlKSB7XG4gICAgICAgIF90aGlzLmxhenlMb2FkSGFuZGxlciA9ICgwLCBfbG9kYXNoMi5kZWZhdWx0KShfdGhpcy5sYXp5TG9hZEhhbmRsZXIsIHByb3BzLnRocm90dGxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmxhenlMb2FkSGFuZGxlciA9ICgwLCBfbG9kYXNoNC5kZWZhdWx0KShfdGhpcy5sYXp5TG9hZEhhbmRsZXIsIHByb3BzLnRocm90dGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgdmlzaWJsZTogZmFsc2UgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGF6eUxvYWQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX21vdW50ZWQgPSB0cnVlO1xuICAgICAgdmFyIGV2ZW50Tm9kZSA9IHRoaXMuZ2V0RXZlbnROb2RlKCk7XG5cbiAgICAgIHRoaXMubGF6eUxvYWRIYW5kbGVyKCk7XG5cbiAgICAgIGlmICh0aGlzLmxhenlMb2FkSGFuZGxlci5mbHVzaCkge1xuICAgICAgICB0aGlzLmxhenlMb2FkSGFuZGxlci5mbHVzaCgpO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIuYWRkKSh3aW5kb3csICdyZXNpemUnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIuYWRkKShldmVudE5vZGUsICdzY3JvbGwnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmxhenlMb2FkSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShfbmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIHJldHVybiBuZXh0U3RhdGUudmlzaWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fbW91bnRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMubGF6eUxvYWRIYW5kbGVyLmNhbmNlbCkge1xuICAgICAgICB0aGlzLmxhenlMb2FkSGFuZGxlci5jYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXRhY2hMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRFdmVudE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFdmVudE5vZGUoKSB7XG4gICAgICByZXR1cm4gKDAsIF9wYXJlbnRTY3JvbGwyLmRlZmF1bHQpKCgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvZmZzZXQgPSBfcHJvcHMub2Zmc2V0LFxuICAgICAgICAgIG9mZnNldFZlcnRpY2FsID0gX3Byb3BzLm9mZnNldFZlcnRpY2FsLFxuICAgICAgICAgIG9mZnNldEhvcml6b250YWwgPSBfcHJvcHMub2Zmc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgICBvZmZzZXRUb3AgPSBfcHJvcHMub2Zmc2V0VG9wLFxuICAgICAgICAgIG9mZnNldEJvdHRvbSA9IF9wcm9wcy5vZmZzZXRCb3R0b20sXG4gICAgICAgICAgb2Zmc2V0TGVmdCA9IF9wcm9wcy5vZmZzZXRMZWZ0LFxuICAgICAgICAgIG9mZnNldFJpZ2h0ID0gX3Byb3BzLm9mZnNldFJpZ2h0LFxuICAgICAgICAgIHRocmVzaG9sZCA9IF9wcm9wcy50aHJlc2hvbGQ7XG5cblxuICAgICAgdmFyIF9vZmZzZXRBbGwgPSB0aHJlc2hvbGQgfHwgb2Zmc2V0O1xuICAgICAgdmFyIF9vZmZzZXRWZXJ0aWNhbCA9IG9mZnNldFZlcnRpY2FsIHx8IF9vZmZzZXRBbGw7XG4gICAgICB2YXIgX29mZnNldEhvcml6b250YWwgPSBvZmZzZXRIb3Jpem9udGFsIHx8IF9vZmZzZXRBbGw7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogb2Zmc2V0VG9wIHx8IF9vZmZzZXRWZXJ0aWNhbCxcbiAgICAgICAgYm90dG9tOiBvZmZzZXRCb3R0b20gfHwgX29mZnNldFZlcnRpY2FsLFxuICAgICAgICBsZWZ0OiBvZmZzZXRMZWZ0IHx8IF9vZmZzZXRIb3Jpem9udGFsLFxuICAgICAgICByaWdodDogb2Zmc2V0UmlnaHQgfHwgX29mZnNldEhvcml6b250YWxcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGF6eUxvYWRIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGF6eUxvYWRIYW5kbGVyKCkge1xuICAgICAgaWYgKCF0aGlzLl9tb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldE9mZnNldCgpO1xuICAgICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcbiAgICAgIHZhciBldmVudE5vZGUgPSB0aGlzLmdldEV2ZW50Tm9kZSgpO1xuXG4gICAgICBpZiAoKDAsIF9pblZpZXdwb3J0Mi5kZWZhdWx0KShub2RlLCBldmVudE5vZGUsIG9mZnNldCkpIHtcbiAgICAgICAgdmFyIG9uQ29udGVudFZpc2libGUgPSB0aGlzLnByb3BzLm9uQ29udGVudFZpc2libGU7XG5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG9uQ29udGVudFZpc2libGUpIHtcbiAgICAgICAgICAgIG9uQ29udGVudFZpc2libGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRldGFjaExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBldmVudE5vZGUgPSB0aGlzLmdldEV2ZW50Tm9kZSgpO1xuXG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIucmVtb3ZlKSh3aW5kb3csICdyZXNpemUnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgICAoMCwgX2V2ZW50bGlzdGVuZXIucmVtb3ZlKShldmVudE5vZGUsICdzY3JvbGwnLCB0aGlzLmxhenlMb2FkSGFuZGxlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBoZWlnaHQgPSBfcHJvcHMyLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9wcm9wczIud2lkdGg7XG4gICAgICB2YXIgdmlzaWJsZSA9IHRoaXMuc3RhdGUudmlzaWJsZTtcblxuXG4gICAgICB2YXIgZWxTdHlsZXMgPSB7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfTtcbiAgICAgIHZhciBlbENsYXNzZXMgPSAnTGF6eUxvYWQnICsgKHZpc2libGUgPyAnIGlzLXZpc2libGUnIDogJycpICsgKGNsYXNzTmFtZSA/ICcgJyArIGNsYXNzTmFtZSA6ICcnKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuZWxlbWVudFR5cGUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbENsYXNzZXMsXG4gICAgICAgIHN0eWxlOiBlbFN0eWxlc1xuICAgICAgfSwgdmlzaWJsZSAmJiBfcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMYXp5TG9hZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExhenlMb2FkO1xuXG5cbkxhenlMb2FkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBkZWJvdW5jZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBlbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBvZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRCb3R0b206IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvZmZzZXRIb3Jpem9udGFsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0TGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9mZnNldFJpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0VG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb2Zmc2V0VmVydGljYWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0aHJlc2hvbGQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0aHJvdHRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIG9uQ29udGVudFZpc2libGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuTGF6eUxvYWQuZGVmYXVsdFByb3BzID0ge1xuICBlbGVtZW50VHlwZTogJ2RpdicsXG4gIGRlYm91bmNlOiB0cnVlLFxuICBvZmZzZXQ6IDAsXG4gIG9mZnNldEJvdHRvbTogMCxcbiAgb2Zmc2V0SG9yaXpvbnRhbDogMCxcbiAgb2Zmc2V0TGVmdDogMCxcbiAgb2Zmc2V0UmlnaHQ6IDAsXG4gIG9mZnNldFRvcDogMCxcbiAgb2Zmc2V0VmVydGljYWw6IDAsXG4gIHRocm90dGxlOiAyNTBcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvTGF6eUxvYWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RWxlbWVudFBvc2l0aW9uO1xuLypcbiogRmluZHMgZWxlbWVudCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB3aG9sZSBkb2N1bWVudCxcbiogcmF0aGVyIHRoYW4gdG8gdGhlIHZpZXdwb3J0IGFzIGl0IGlzIHRoZSBjYXNlIHdpdGggLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLlxuKi9cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvZ2V0RWxlbWVudFBvc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpblZpZXdwb3J0O1xuXG52YXIgX2dldEVsZW1lbnRQb3NpdGlvbiA9IHJlcXVpcmUoJy4vZ2V0RWxlbWVudFBvc2l0aW9uJyk7XG5cbnZhciBfZ2V0RWxlbWVudFBvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEVsZW1lbnRQb3NpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xufTtcblxuZnVuY3Rpb24gaW5WaWV3cG9ydChlbGVtZW50LCBjb250YWluZXIsIGN1c3RvbU9mZnNldCkge1xuICBpZiAoaXNIaWRkZW4oZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdG9wID0gdm9pZCAwO1xuICB2YXIgYm90dG9tID0gdm9pZCAwO1xuICB2YXIgbGVmdCA9IHZvaWQgMDtcbiAgdmFyIHJpZ2h0ID0gdm9pZCAwO1xuXG4gIGlmICh0eXBlb2YgY29udGFpbmVyID09PSAndW5kZWZpbmVkJyB8fCBjb250YWluZXIgPT09IHdpbmRvdykge1xuICAgIHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGJvdHRvbSA9IHRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICByaWdodCA9IGxlZnQgKyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY29udGFpbmVyUG9zaXRpb24gPSAoMCwgX2dldEVsZW1lbnRQb3NpdGlvbjIuZGVmYXVsdCkoY29udGFpbmVyKTtcblxuICAgIHRvcCA9IGNvbnRhaW5lclBvc2l0aW9uLnRvcDtcbiAgICBsZWZ0ID0gY29udGFpbmVyUG9zaXRpb24ubGVmdDtcbiAgICBib3R0b20gPSB0b3AgKyBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHJpZ2h0ID0gbGVmdCArIGNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHZhciBlbGVtZW50UG9zaXRpb24gPSAoMCwgX2dldEVsZW1lbnRQb3NpdGlvbjIuZGVmYXVsdCkoZWxlbWVudCk7XG5cbiAgcmV0dXJuIHRvcCA8PSBlbGVtZW50UG9zaXRpb24udG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBjdXN0b21PZmZzZXQudG9wICYmIGJvdHRvbSA+PSBlbGVtZW50UG9zaXRpb24udG9wIC0gY3VzdG9tT2Zmc2V0LmJvdHRvbSAmJiBsZWZ0IDw9IGVsZW1lbnRQb3NpdGlvbi5sZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aCArIGN1c3RvbU9mZnNldC5sZWZ0ICYmIHJpZ2h0ID49IGVsZW1lbnRQb3NpdGlvbi5sZWZ0IC0gY3VzdG9tT2Zmc2V0LnJpZ2h0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvbGliL3V0aWxzL2luVmlld3BvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdHlsZSA9IGZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQsIHByb3ApIHtcbiAgcmV0dXJuIHR5cGVvZiBnZXRDb21wdXRlZFN0eWxlICE9PSAndW5kZWZpbmVkJyA/IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSA6IGVsZW1lbnQuc3R5bGVbcHJvcF07XG59O1xuXG52YXIgb3ZlcmZsb3cgPSBmdW5jdGlvbiBvdmVyZmxvdyhlbGVtZW50KSB7XG4gIHJldHVybiBzdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cnKSArIHN0eWxlKGVsZW1lbnQsICdvdmVyZmxvdy15JykgKyBzdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cteCcpO1xufTtcblxudmFyIHNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uIHNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgdmFyIHBhcmVudCA9IGVsZW1lbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgcGFyZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICgvKHNjcm9sbHxhdXRvKS8udGVzdChvdmVyZmxvdyhwYXJlbnQpKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3c7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzY3JvbGxQYXJlbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9saWIvdXRpbHMvcGFyZW50U2Nyb2xsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1sYXp5LWxvYWQvfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0NzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWxhenktbG9hZC9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwgPSByZXF1aXJlKCdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnKTtcblxudmFyIF9yZXNpemVPYnNlcnZlclBvbHlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qIGVzbGludCBuby1kZWJ1Z2dlcjogXCJ3YXJuXCIgKi9cblxuXG4vKipcbiAqIFByZWRlZmluZWQgY29uc3RhbnRzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgY29uc3RhbnRzID0ge1xuICBvcmllbnRhdGlvbjoge1xuICAgIGhvcml6b250YWw6IHtcbiAgICAgIGRpbWVuc2lvbjogJ3dpZHRoJyxcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGNvb3JkaW5hdGU6ICd4J1xuICAgIH0sXG4gICAgdmVydGljYWw6IHtcbiAgICAgIGRpbWVuc2lvbjogJ2hlaWdodCcsXG4gICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogJ2JvdHRvbScsXG4gICAgICBjb29yZGluYXRlOiAneSdcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTbGlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTbGlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTbGlkZXIpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVGb3JtYXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBmb3JtYXQgPSBfdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIHJldHVybiBmb3JtYXQgPyBmb3JtYXQodmFsdWUpIDogdmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuc2xpZGVyKSB7XG4gICAgICAgIC8vIGZvciBzaGFsbG93IHJlbmRlcmluZ1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3JpZW50YXRpb24gPSBfdGhpcy5wcm9wcy5vcmllbnRhdGlvbjtcblxuICAgICAgdmFyIGRpbWVuc2lvbiA9ICgwLCBfdXRpbHMuY2FwaXRhbGl6ZSkoY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5kaW1lbnNpb24pO1xuICAgICAgdmFyIHNsaWRlclBvcyA9IF90aGlzLnNsaWRlclsnb2Zmc2V0JyArIGRpbWVuc2lvbl07XG4gICAgICB2YXIgaGFuZGxlUG9zID0gX3RoaXMuaGFuZGxlWydvZmZzZXQnICsgZGltZW5zaW9uXTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaW1pdDogc2xpZGVyUG9zIC0gaGFuZGxlUG9zLFxuICAgICAgICBncmFiOiBoYW5kbGVQb3MgLyAyXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlU3RhcnQgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZVN0YXJ0O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5oYW5kbGVFbmQpO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25DaGFuZ2VTdGFydCAmJiBvbkNoYW5nZVN0YXJ0KGUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZURyYWcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgdmFyIF9lJHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9lJHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NMaXN0ID0gX2UkdGFyZ2V0LmNsYXNzTGlzdCxcbiAgICAgICAgICBkYXRhc2V0ID0gX2UkdGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICAgIGlmICghb25DaGFuZ2UgfHwgY2xhc3NOYW1lID09PSAncmFuZ2VzbGlkZXJfX2xhYmVscycpIHJldHVybjtcblxuICAgICAgdmFyIHZhbHVlID0gX3RoaXMucG9zaXRpb24oZSk7XG5cbiAgICAgIGlmIChjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnRhaW5zKCdyYW5nZXNsaWRlcl9fbGFiZWwtaXRlbScpICYmIGRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KGRhdGFzZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSh2YWx1ZSwgZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DaGFuZ2VDb21wbGV0ZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlQ29tcGxldGU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkNoYW5nZUNvbXBsZXRlICYmIG9uQ2hhbmdlQ29tcGxldGUoZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLmhhbmRsZURyYWcpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLmhhbmRsZUVuZCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wcy5tYXgsXG4gICAgICAgICAgc3RlcCA9IF90aGlzJHByb3BzLnN0ZXAsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZTtcblxuICAgICAgdmFyIHNsaWRlclZhbHVlID0gdm9pZCAwO1xuXG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBzbGlkZXJWYWx1ZSA9IHZhbHVlICsgc3RlcCA+IG1heCA/IG1heCA6IHZhbHVlICsgc3RlcDtcbiAgICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShzbGlkZXJWYWx1ZSwgZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgc2xpZGVyVmFsdWUgPSB2YWx1ZSAtIHN0ZXAgPCBtaW4gPyBtaW4gOiB2YWx1ZSAtIHN0ZXA7XG4gICAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2Uoc2xpZGVyVmFsdWUsIGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGxpbWl0ID0gX3RoaXMuc3RhdGUubGltaXQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMyLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczIubWF4O1xuXG4gICAgICB2YXIgZGlmZk1heE1pbiA9IG1heCAtIG1pbjtcbiAgICAgIHZhciBkaWZmVmFsTWluID0gdmFsdWUgLSBtaW47XG4gICAgICB2YXIgcGVyY2VudGFnZSA9IGRpZmZWYWxNaW4gLyBkaWZmTWF4TWluO1xuICAgICAgdmFyIHBvcyA9IE1hdGgucm91bmQocGVyY2VudGFnZSAqIGxpbWl0KTtcblxuICAgICAgcmV0dXJuIHBvcztcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VmFsdWVGcm9tUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgbGltaXQgPSBfdGhpcy5zdGF0ZS5saW1pdDtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IF90aGlzJHByb3BzMy5vcmllbnRhdGlvbixcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzMy5tYXgsXG4gICAgICAgICAgc3RlcCA9IF90aGlzJHByb3BzMy5zdGVwO1xuXG4gICAgICB2YXIgcGVyY2VudGFnZSA9ICgwLCBfdXRpbHMuY2xhbXApKHBvcywgMCwgbGltaXQpIC8gKGxpbWl0IHx8IDEpO1xuICAgICAgdmFyIGJhc2VWYWwgPSBzdGVwICogTWF0aC5yb3VuZChwZXJjZW50YWdlICogKG1heCAtIG1pbikgLyBzdGVwKTtcbiAgICAgIHZhciB2YWx1ZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBiYXNlVmFsICsgbWluIDogbWF4IC0gYmFzZVZhbDtcblxuICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY2xhbXApKHZhbHVlLCBtaW4sIG1heCk7XG4gICAgfTtcblxuICAgIF90aGlzLnBvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBncmFiID0gX3RoaXMuc3RhdGUuZ3JhYjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IF90aGlzJHByb3BzNC5vcmllbnRhdGlvbixcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHM0LnJldmVyc2U7XG5cblxuICAgICAgdmFyIG5vZGUgPSBfdGhpcy5zbGlkZXI7XG4gICAgICB2YXIgY29vcmRpbmF0ZVN0eWxlID0gY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5jb29yZGluYXRlO1xuICAgICAgdmFyIGRpcmVjdGlvblN0eWxlID0gcmV2ZXJzZSA/IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0ucmV2ZXJzZURpcmVjdGlvbiA6IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uZGlyZWN0aW9uO1xuICAgICAgdmFyIGNsaWVudENvb3JkaW5hdGVTdHlsZSA9ICdjbGllbnQnICsgKDAsIF91dGlscy5jYXBpdGFsaXplKShjb29yZGluYXRlU3R5bGUpO1xuICAgICAgdmFyIGNvb3JkaW5hdGUgPSAhZS50b3VjaGVzID8gZVtjbGllbnRDb29yZGluYXRlU3R5bGVdIDogZS50b3VjaGVzWzBdW2NsaWVudENvb3JkaW5hdGVTdHlsZV07XG4gICAgICB2YXIgZGlyZWN0aW9uID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaXJlY3Rpb25TdHlsZV07XG4gICAgICB2YXIgcG9zID0gcmV2ZXJzZSA/IGRpcmVjdGlvbiAtIGNvb3JkaW5hdGUgLSBncmFiIDogY29vcmRpbmF0ZSAtIGRpcmVjdGlvbiAtIGdyYWI7XG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUZyb21Qb3NpdGlvbihwb3MpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLmNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgbGltaXQgPSBfdGhpcyRzdGF0ZS5saW1pdCxcbiAgICAgICAgICBncmFiID0gX3RoaXMkc3RhdGUuZ3JhYjtcbiAgICAgIHZhciBvcmllbnRhdGlvbiA9IF90aGlzLnByb3BzLm9yaWVudGF0aW9uO1xuXG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUZyb21Qb3NpdGlvbihwb3MpO1xuICAgICAgdmFyIHBvc2l0aW9uID0gX3RoaXMuZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWUpO1xuICAgICAgdmFyIGhhbmRsZVBvcyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBwb3NpdGlvbiArIGdyYWIgOiBwb3NpdGlvbjtcbiAgICAgIHZhciBmaWxsUG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGhhbmRsZVBvcyA6IGxpbWl0IC0gaGFuZGxlUG9zO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxsOiBmaWxsUG9zLFxuICAgICAgICBoYW5kbGU6IGhhbmRsZVBvcyxcbiAgICAgICAgbGFiZWw6IGhhbmRsZVBvc1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTGFiZWxzID0gZnVuY3Rpb24gKGxhYmVscykge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndWwnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoc2wpIHtcbiAgICAgICAgICAgIF90aGlzLmxhYmVscyA9IHNsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdyYW5nZXNsaWRlcl9fbGFiZWxzJylcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBsaW1pdDogMCxcbiAgICAgIGdyYWI6IDBcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbGlkZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaGFuZGxlVXBkYXRlKCk7XG4gICAgICB2YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgX3Jlc2l6ZU9ic2VydmVyUG9seWZpbGwyLmRlZmF1bHQodGhpcy5oYW5kbGVVcGRhdGUpO1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNsaWRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IGxhYmVsL3Rvb2x0aXAgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IC0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtGb3JtYXR0ZWQgTnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgc2xpZGVyIHN0YXRlIG9uIGNoYW5nZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gbW91c2Vtb3ZlL21vdXNldXAgZXZlbnRzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGRyYWcvbW91c2Vtb3ZlIGV2ZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBtb3VzZW1vdmUvbW91c2V1cCBldmVudHNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBrZXkgZXZlbnRzIG9uIHRoZSBzbGlkZXIgaGFuZGxlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBvc2l0aW9uIG9mIHNsaWRlciBiYXNlZCBvbiBpdHMgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIC0gQ3VycmVudCB2YWx1ZSBvZiBzbGlkZXJcbiAgICAgKiBAcmV0dXJuIHtwb3NpdGlvbn0gcG9zIC0gQ2FsY3VsYXRlZCBwb3NpdGlvbiBvZiBzbGlkZXIgYmFzZWQgb24gdmFsdWVcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIHBvc2l0aW9uIG9mIHNsaWRlciB0byBzbGlkZXIgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHBvcyAtIEN1cnJlbnQgcG9zaXRpb24vY29vcmRpbmF0ZXMgb2Ygc2xpZGVyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB2YWx1ZSAtIFNsaWRlciB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcG9zaXRpb24gb2Ygc2xpZGVyIGJhc2VkIG9uIHZhbHVlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7bnVtYmVyfSB2YWx1ZSAtIFNsaWRlciB2YWx1ZVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBHcmFiIGNvb3JkaW5hdGVzIG9mIHNsaWRlclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcG9zIC0gUG9zaXRpb24gb2JqZWN0XG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIFNsaWRlciBmaWxsL2hhbmRsZSBjb29yZGluYXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgb3JpZW50YXRpb24gPSBfcHJvcHMub3JpZW50YXRpb24sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICB0b29sdGlwID0gX3Byb3BzLnRvb2x0aXAsXG4gICAgICAgICAgcmV2ZXJzZSA9IF9wcm9wcy5yZXZlcnNlLFxuICAgICAgICAgIGxhYmVscyA9IF9wcm9wcy5sYWJlbHMsXG4gICAgICAgICAgbWluID0gX3Byb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfcHJvcHMubWF4LFxuICAgICAgICAgIGhhbmRsZUxhYmVsID0gX3Byb3BzLmhhbmRsZUxhYmVsO1xuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuc3RhdGUuYWN0aXZlO1xuXG4gICAgICB2YXIgZGltZW5zaW9uID0gY29uc3RhbnRzLm9yaWVudGF0aW9uW29yaWVudGF0aW9uXS5kaW1lbnNpb247XG4gICAgICB2YXIgZGlyZWN0aW9uID0gcmV2ZXJzZSA/IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0ucmV2ZXJzZURpcmVjdGlvbiA6IGNvbnN0YW50cy5vcmllbnRhdGlvbltvcmllbnRhdGlvbl0uZGlyZWN0aW9uO1xuICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgY29vcmRzID0gdGhpcy5jb29yZGluYXRlcyhwb3NpdGlvbik7XG4gICAgICB2YXIgZmlsbFN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBkaW1lbnNpb24sIGNvb3Jkcy5maWxsICsgJ3B4Jyk7XG4gICAgICB2YXIgaGFuZGxlU3R5bGUgPSBfZGVmaW5lUHJvcGVydHkoe30sIGRpcmVjdGlvbiwgY29vcmRzLmhhbmRsZSArICdweCcpO1xuICAgICAgdmFyIHNob3dUb29sdGlwID0gdG9vbHRpcCAmJiBhY3RpdmU7XG5cbiAgICAgIHZhciBsYWJlbEl0ZW1zID0gW107XG4gICAgICB2YXIgbGFiZWxLZXlzID0gT2JqZWN0LmtleXMobGFiZWxzKTtcblxuICAgICAgaWYgKGxhYmVsS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxhYmVsS2V5cyA9IGxhYmVsS2V5cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyBhIC0gYiA6IGIgLSBhO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBsYWJlbEtleXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBsYWJlbFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkZyb21WYWx1ZShrZXkpO1xuICAgICAgICAgICAgdmFyIGxhYmVsQ29vcmRzID0gdGhpcy5jb29yZGluYXRlcyhsYWJlbFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHZhciBsYWJlbFN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIGxhYmVsQ29vcmRzLmxhYmVsICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgIGxhYmVsSXRlbXMucHVzaChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgncmFuZ2VzbGlkZXJfX2xhYmVsLWl0ZW0nKSxcbiAgICAgICAgICAgICAgICAnZGF0YS12YWx1ZSc6IGtleSxcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVEcmFnLFxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVTdGFydCxcbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgICAgICAgICBzdHlsZTogbGFiZWxTdHlsZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYmVsc1trZXldXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihzKSB7XG4gICAgICAgICAgICBfdGhpczIuc2xpZGVyID0gcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgncmFuZ2VzbGlkZXInLCAncmFuZ2VzbGlkZXItJyArIG9yaWVudGF0aW9uLCB7ICdyYW5nZXNsaWRlci1yZXZlcnNlJzogcmV2ZXJzZSB9LCBjbGFzc05hbWUpLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZURyYWcsXG4gICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVFbmQsXG4gICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBtaW4sXG4gICAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBtYXgsXG4gICAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB2YWx1ZSxcbiAgICAgICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19maWxsJywgc3R5bGU6IGZpbGxTdHlsZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoc2gpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLmhhbmRsZSA9IHNoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19oYW5kbGUnLFxuICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlU3RhcnQsXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVEcmFnLFxuICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVFbmQsXG4gICAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgIHN0eWxlOiBoYW5kbGVTdHlsZSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93VG9vbHRpcCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnRvb2x0aXAgPSBzdDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncmFuZ2VzbGlkZXJfX2hhbmRsZS10b29sdGlwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRm9ybWF0KHZhbHVlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3Jhbmdlc2xpZGVyX19oYW5kbGUtbGFiZWwnIH0sXG4gICAgICAgICAgICBoYW5kbGVMYWJlbFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgbGFiZWxzID8gdGhpcy5yZW5kZXJMYWJlbHMobGFiZWxJdGVtcykgOiBudWxsXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTbGlkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TbGlkZXIucHJvcFR5cGVzID0ge1xuICBtaW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtYXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzdGVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvcmllbnRhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvb2x0aXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcmV2ZXJzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsYWJlbHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBoYW5kbGVMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZvcm1hdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZVN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlQ29tcGxldGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxMDAsXG4gIHN0ZXA6IDEsXG4gIHZhbHVlOiAwLFxuICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICB0b29sdGlwOiB0cnVlLFxuICByZXZlcnNlOiBmYWxzZSxcbiAgbGFiZWxzOiB7fSxcbiAgaGFuZGxlTGFiZWw6ICcnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2xpZGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvUmFuZ2VzbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9SYW5nZXNsaWRlciA9IHJlcXVpcmUoJy4vUmFuZ2VzbGlkZXInKTtcblxudmFyIF9SYW5nZXNsaWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SYW5nZXNsaWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYW5nZXNsaWRlcjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5leHBvcnRzLmNsYW1wID0gY2xhbXA7XG4vKipcbiAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIHN0cmluZ1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gLSBTdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gLSBTdHJpbmcgd2l0aCBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWRcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSk7XG59XG5cbi8qKlxuICogQ2xhbXAgcG9zaXRpb24gYmV0d2VlbiBhIHJhbmdlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IC0gVmFsdWUgdG8gYmUgY2xhbXBlZFxuICogQHBhcmFtICB7bnVtYmVyfSAtIE1pbmltdW0gdmFsdWUgaW4gcmFuZ2VcbiAqIEBwYXJhbSAge251bWJlcn0gLSBNYXhpbXVtIHZhbHVlIGluIHJhbmdlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ2xhbXBlZCB2YWx1ZVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbC5SZXNpemVPYnNlcnZlciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxyXG4gICAgICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBUaGVzZSBpbXBsZW1lbnRhdGlvbnMgYXJlIG5vdCBtZWFudCB0byBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIFJlc2l6ZU9ic2VydmVyXHJcbiAgICAgKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gICAgICovXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jLCB2YWxpZC1qc2RvYyAqL1xyXG4gICAgdmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIGluZGV4IGluIHByb3ZpZGVkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGtleS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhcnJcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SW5kZXgoYXJyLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnlbMF0gPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzFdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX19baW5kZXhdWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZW50cmllcywga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBbY3R4PW51bGxdXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4ID09PSB2b2lkIDApIHsgY3R4ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBlbnRyeVsxXSwgZW50cnlbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgfSkoKTtcblxuICAgIC8qKlxyXG4gICAgICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAgICAgKi9cclxuICAgIHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA9PT0gZG9jdW1lbnQ7XG5cbiAgICAvLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gICAgdmFyIGdsb2JhbCQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgICAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxuICAgIH0pKCk7XG5cbiAgICAvKipcclxuICAgICAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAgICAgKiBmaXJzdCBvbmUgaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICAgICAqL1xyXG4gICAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvLyBJdCdzIHJlcXVpcmVkIHRvIHVzZSBhIGJvdW5kZWQgZnVuY3Rpb24gYmVjYXVzZSBJRSBzb21ldGltZXMgdGhyb3dzXHJcbiAgICAgICAgICAgIC8vIGFuIFwiSW52YWxpZCBjYWxsaW5nIG9iamVjdFwiIGVycm9yIGlmIHJBRiBpcyBpbnZva2VkIHdpdGhvdXQgdGhlIGdsb2JhbFxyXG4gICAgICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQoZ2xvYmFsJDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG4gICAgfSkoKTtcblxuICAgIC8vIERlZmluZXMgbWluaW11bSB0aW1lb3V0IGJlZm9yZSBhZGRpbmcgYSB0cmFpbGluZyBjYWxsLlxyXG4gICAgdmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGVuc3VyZXMgdGhhdCBwcm92aWRlZCBjYWxsYmFjayB3aWxsIGJlXHJcbiAgICAgKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBkZWxheSBwZXJpb2QuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgICAgICB2YXIgbGVhZGluZ0NhbGwgPSBmYWxzZSwgdHJhaWxpbmdDYWxsID0gZmFsc2UsIGxhc3RDYWxsVGltZSA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICAgICAqIHRoZSBcInByb3h5XCIgd2FzIGNhbGxlZCBkdXJpbmcgY3VycmVudCByZXF1ZXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVBlbmRpbmcoKSB7XHJcbiAgICAgICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgcHJveHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICAgICAqIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGRlbGVnYXRpbmcgaXQgdG8gdGhlXHJcbiAgICAgICAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMShyZXNvbHZlUGVuZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNjaGVkdWxlcyBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHByb3h5KCkge1xyXG4gICAgICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWplY3QgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGNhbGxzLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzbyB0aGVyZSBpcyBhIGNoYW5jZSB0aGF0IHdlIG1pZ2h0IG1pc3Mgb25lIGlmIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm94eTtcclxuICAgIH1cblxuICAgIC8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgdmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcclxuICAgIC8vIEEgbGlzdCBvZiBzdWJzdHJpbmdzIG9mIENTUyBwcm9wZXJ0aWVzIHVzZWQgdG8gZmluZCB0cmFuc2l0aW9uIGV2ZW50cyB0aGF0XHJcbiAgICAvLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxuICAgIHZhciB0cmFuc2l0aW9uS2V5cyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdzaXplJywgJ3dlaWdodCddO1xyXG4gICAgLy8gQ2hlY2sgaWYgTXV0YXRpb25PYnNlcnZlciBpcyBhdmFpbGFibGUuXHJcbiAgICB2YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuICAgIC8qKlxyXG4gICAgICogU2luZ2xldG9uIGNvbnRyb2xsZXIgY2xhc3Mgd2hpY2ggaGFuZGxlcyB1cGRhdGVzIG9mIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlcy5cclxuICAgICAqL1xyXG4gICAgdmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtNdXRhdGlvbk9ic2VydmVyfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZlclNQST59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmRfID0gdGhpcy5vblRyYW5zaXRpb25FbmRfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgYWRkZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdF8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSByZW1vdmVkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2JzZXJ2ZXIgaWYgaXQncyBwcmVzZW50IGluIHJlZ2lzdHJ5LlxyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdF8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICAgICAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAvLyBDb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYXMgdGhlcmUgbWlnaHRcclxuICAgICAgICAgICAgLy8gYmUgZnV0dXJlIG9uZXMgY2F1c2VkIGJ5IENTUyB0cmFuc2l0aW9ucy5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgZXZlcnkgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdCBhbmQgbm90aWZpZXMgdGhlbSBvZiBxdWV1ZWRcclxuICAgICAgICAgKiBlbnRyaWVzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIENvbGxlY3Qgb2JzZXJ2ZXJzIHRoYXQgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlT2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfLmZpbHRlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBEZWxpdmVyIG5vdGlmaWNhdGlvbnMgaW4gYSBzZXBhcmF0ZSBjeWNsZSBpbiBvcmRlciB0byBhdm9pZCBhbnlcclxuICAgICAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgICAgICAvLyBSZXNpemVPYnNlcnZlciBhcmUgdHJhY2tpbmcgdGhlIHNhbWUgZWxlbWVudCBhbmQgdGhlIGNhbGxiYWNrIG9mIG9uZVxyXG4gICAgICAgICAgICAvLyBvZiB0aGVtIGNoYW5nZXMgY29udGVudCBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCB0YXJnZXQuIFNvbWV0aW1lc1xyXG4gICAgICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgIGFjdGl2ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuYnJvYWRjYXN0QWN0aXZlKCk7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlT2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWFsaXplcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN1YnNjcmlwdGlvbiB0byB0aGUgXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaXMgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yXHJcbiAgICAgICAgICAgIC8vIGRlbGF5ZWQgdHJhbnNpdGlvbnMuIFRoaXMgd2F5IGl0J3MgcG9zc2libGUgdG8gY2FwdHVyZSBhdCBsZWFzdCB0aGVcclxuICAgICAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8ub2JzZXJ2ZShkb2N1bWVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IHJlbW92ZWQuXHJcbiAgICAgICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0aW9uc09ic2VydmVyXykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbkV2ZW50fSBldmVudFxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kXyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgX2IgPSBfYS5wcm9wZXJ0eU5hbWUsIHByb3BlcnR5TmFtZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iO1xyXG4gICAgICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhfnByb3BlcnR5TmFtZS5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaXNSZWZsb3dQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VfKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZV87XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIncyBpbnN0YW5jZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcclxuICAgIH0oKSk7XG5cbiAgICAvKipcclxuICAgICAqIERlZmluZXMgbm9uLXdyaXRhYmxlL2VudW1lcmFibGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0IG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZC5cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRhcmdldCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHZhciBkZWZpbmVDb25maWd1cmFibGUgPSAoZnVuY3Rpb24gKHRhcmdldCwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJvcHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wc1trZXldLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9KTtcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICB2YXIgZ2V0V2luZG93T2YgPSAoZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIE5vZGUsIHdoaWNoIG1lYW5zIHRoYXQgaXRcclxuICAgICAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGdsb2JhbCBvYmplY3QuXHJcbiAgICAgICAgdmFyIG93bmVyR2xvYmFsID0gdGFyZ2V0ICYmIHRhcmdldC5vd25lckRvY3VtZW50ICYmIHRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAgICAgLy8gcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAgICByZXR1cm4gb3duZXJHbG9iYWwgfHwgZ2xvYmFsJDE7XHJcbiAgICB9KTtcblxuICAgIC8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIGVtcHR5UmVjdCA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBwcm92aWRlZCBzdHJpbmcgdG8gYSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0cyBib3JkZXJzIHNpemUgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICAgICAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwb3NpdGlvbnMgLSBCb3JkZXJzIHBvc2l0aW9ucyAodG9wLCByaWdodCwgLi4uKVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpemUgKyB0b0Zsb2F0KHZhbHVlKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFkZGluZ3Moc3R5bGVzKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICAgICAgdmFyIHBhZGRpbmdzID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwb3NpdGlvbnNfMSA9IHBvc2l0aW9uczsgX2kgPCBwb3NpdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ3BhZGRpbmctJyArIHBvc2l0aW9uXTtcclxuICAgICAgICAgICAgcGFkZGluZ3NbcG9zaXRpb25dID0gdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYWRkaW5ncztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBTVkcgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gICAgICogICAgICB0byBiZSBjYWxjdWxhdGVkLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgYmJveCA9IHRhcmdldC5nZXRCQm94KCk7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGZvciB3aGljaCB0byBjYWxjdWxhdGUgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAgICAgLy8gdXNlZCBleGNsdXNpdmVseSBhcyB0aGV5IHByb3ZpZGUgcm91bmRlZCB2YWx1ZXMuXHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gdGFyZ2V0LmNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcclxuICAgICAgICAvLyB0aGFuIDAuNSB3aWxsIGJlIGRpc2NhcmRlZCBhcyB3ZWxsLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXHJcbiAgICAgICAgLy8gdGhvc2UgY2FzZXMgYW5kIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBlcmZvcm0gYSBwcmVjaXNlIGFuZCBwZXJmb3JtYW5jZVxyXG4gICAgICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cclxuICAgICAgICBpZiAoIWNsaWVudFdpZHRoICYmICFjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IGdldFdpbmRvd09mKHRhcmdldCkuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xyXG4gICAgICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICAgICAgdmFyIGhvcml6UGFkID0gcGFkZGluZ3MubGVmdCArIHBhZGRpbmdzLnJpZ2h0O1xyXG4gICAgICAgIHZhciB2ZXJ0UGFkID0gcGFkZGluZ3MudG9wICsgcGFkZGluZ3MuYm90dG9tO1xyXG4gICAgICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgICAgIC8vIG9ubHkgZGltZW5zaW9ucyBhdmFpbGFibGUgdG8gSlMgdGhhdCBjb250YWluIG5vbi1yb3VuZGVkIHZhbHVlcy4gSXQgY291bGRcclxuICAgICAgICAvLyBiZSBwb3NzaWJsZSB0byB1dGlsaXplIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaWYgb25seSBpdCdzIGRhdGEgd2Fzbid0XHJcbiAgICAgICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoc3R5bGVzLndpZHRoKSwgaGVpZ2h0ID0gdG9GbG9hdChzdHlsZXMuaGVpZ2h0KTtcclxuICAgICAgICAvLyBXaWR0aCAmIGhlaWdodCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHdoZW4gdGhlICdib3JkZXItYm94JyBib3hcclxuICAgICAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgICAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcbiAgICAgICAgICAgIC8vIEZvbGxvd2luZyBjb25kaXRpb25zIGFyZSByZXF1aXJlZCB0byBoYW5kbGUgSW50ZXJuZXQgRXhwbG9yZXIgd2hpY2hcclxuICAgICAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBXZSBjYW4gc2F5IHRoYXQgaWYgQ1NTIGRpbWVuc2lvbnMgKyBwYWRkaW5ncyBhcmUgZXF1YWwgdG8gdGhlIFwiY2xpZW50XCJcclxuICAgICAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpICE9PSBjbGllbnRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgIT09IGNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgICAgIC8vIGNsaWVudFtXaWR0aC9IZWlnaHRdIHByb3BlcnRpZXMgcmVwcmVzZW50IHZpZXdwb3J0IGFyZWEgb2YgdGhlIHdpbmRvdy5cclxuICAgICAgICAvLyBCZXNpZGVzLCBpdCdzIGFzIHdlbGwgbm90IG5lY2Vzc2FyeSBhcyB0aGUgPGh0bWw+IGl0c2VsZiBuZWl0aGVyIGhhc1xyXG4gICAgICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgICAgICBpZiAoIWlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgLy8gSW4gc29tZSBicm93c2VycyAob25seSBpbiBGaXJlZm94LCBhY3R1YWxseSkgQ1NTIHdpZHRoICYgaGVpZ2h0XHJcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgICAgIC8vIGJhcnMgYXJlIHRoZSBvbmx5IGRpZmZlcmVuY2UgYmV0d2VlbiByb3VuZGVkIGRpbWVuc2lvbnMgKyBwYWRkaW5nc1xyXG4gICAgICAgICAgICAvLyBhbmQgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLCB0aG91Z2ggdGhhdCBpcyBub3QgYWx3YXlzIHRydWUgaW4gQ2hyb21lLlxyXG4gICAgICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGhvcml6U2Nyb2xsYmFyID0gTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAtIGNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgLy8gQ2hyb21lIGhhcyBhIHJhdGhlciB3ZWlyZCByb3VuZGluZyBvZiBcImNsaWVudFwiIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxyXG4gICAgICAgICAgICAvLyAzMTRweC4gQW5kIGl0IGRvZXNuJ3QgaGFwcGVuIGFsbCB0aGUgdGltZS4gU28ganVzdCBpZ25vcmUgdGhpcyBkZWx0YVxyXG4gICAgICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSB2ZXJ0U2Nyb2xsYmFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhob3JpelNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQocGFkZGluZ3MubGVmdCwgcGFkZGluZ3MudG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHZhciBpc1NWR0dyYXBoaWNzRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU29tZSBicm93c2VycywgbmFtZWx5IElFIGFuZCBFZGdlLCBkb24ndCBoYXZlIHRoZSBTVkdHcmFwaGljc0VsZW1lbnRcclxuICAgICAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0dyYXBoaWNzRWxlbWVudDsgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXHJcbiAgICAgICAgLy8gU1ZHRWxlbWVudCBhbmQgdGhhdCBpdCBoYXMgdGhlIFwiZ2V0QkJveFwiIG1ldGhvZC5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRhcmdldC5nZXRCQm94ID09PSAnZnVuY3Rpb24nKTsgfTtcclxuICAgIH0pKCk7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYSBkb2N1bWVudCBlbGVtZW50ICg8aHRtbD4pLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPT09IGdldFdpbmRvd09mKHRhcmdldCkuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGFuIGFwcHJvcHJpYXRlIGNvbnRlbnQgcmVjdGFuZ2xlIGZvciBwcm92aWRlZCBodG1sIG9yIHN2ZyBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTVkdHcmFwaGljc0VsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyByZWN0YW5nbGUgd2l0aCBhbiBpbnRlcmZhY2Ugb2YgdGhlIERPTVJlY3RSZWFkT25seS5cclxuICAgICAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIE9iamVjdCB3aXRoIHJlY3RhbmdsZSdzIHgveSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlYWRPbmx5UmVjdChfYSkge1xyXG4gICAgICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgICAgICAvLyBJZiBET01SZWN0UmVhZE9ubHkgaXMgYXZhaWxhYmxlIHVzZSBpdCBhcyBhIHByb3RvdHlwZSBmb3IgdGhlIHJlY3RhbmdsZS5cclxuICAgICAgICB2YXIgQ29uc3RyID0gdHlwZW9mIERPTVJlY3RSZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcgPyBET01SZWN0UmVhZE9ubHkgOiBPYmplY3Q7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgICAgIC8vIFJlY3RhbmdsZSdzIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUuXHJcbiAgICAgICAgZGVmaW5lQ29uZmlndXJhYmxlKHJlY3QsIHtcclxuICAgICAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgICAgICByaWdodDogeCArIHdpZHRoLFxyXG4gICAgICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgICAgIGxlZnQ6IHhcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBSZWN0YW5nbGUncyB3aWR0aC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICAgICAqIHByb3ZpZGVkIERPTSBlbGVtZW50IGFuZCBmb3Iga2VlcGluZyB0cmFjayBvZiBpdCdzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIHZhciBSZXNpemVPYnNlcnZhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge0RPTVJlY3RJbml0fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgY29udGVudCByZWN0YW5nbGUgYW5kIHRlbGxzIHdoZXRoZXIgaXQncyB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllc1xyXG4gICAgICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZ2V0Q29udGVudFJlY3QodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVjdC53aWR0aCAhPT0gdGhpcy5icm9hZGNhc3RXaWR0aCB8fFxyXG4gICAgICAgICAgICAgICAgcmVjdC5oZWlnaHQgIT09IHRoaXMuYnJvYWRjYXN0SGVpZ2h0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgJ2Jyb2FkY2FzdFdpZHRoJyBhbmQgJ2Jyb2FkY2FzdEhlaWdodCcgcHJvcGVydGllcyB3aXRoIGEgZGF0YVxyXG4gICAgICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH0gTGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmNvbnRlbnRSZWN0XztcclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xyXG4gICAgfSgpKTtcblxuICAgIHZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0aGF0IGlzIGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgICAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gRGF0YSBvZiB0aGUgZWxlbWVudCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0LCByZWN0SW5pdCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFJlY3QgPSBjcmVhdGVSZWFkT25seVJlY3QocmVjdEluaXQpO1xyXG4gICAgICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgICAgICAvLyBhbmQgYXJlIGFsc28gbm90IGVudW1lcmFibGUgaW4gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgICAgICAvLyBwcml2YXRlIFdlYWtNYXAgc3RvcmFnZSB3aGljaCBtYXkgY2F1c2UgbWVtb3J5IGxlYWtzIGluIGJyb3dzZXJzIHRoYXRcclxuICAgICAgICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgY29sbGVjdGlvbnMuXHJcbiAgICAgICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xyXG4gICAgfSgpKTtcblxuICAgIHZhciBSZXNpemVPYnNlcnZlclNQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZFxyXG4gICAgICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBDb250cm9sbGVyIGluc3RhbmNlIHdoaWNoXHJcbiAgICAgICAgICogICAgICBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHVwZGF0ZXMgb2Ygb2JzZXJ2ZXIuXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICAgICAqICAgICAgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb2xsZWN0aW9uIG9mIHJlc2l6ZSBvYnNlcnZhdGlvbnMgdGhhdCBoYXZlIGRldGVjdGVkIGNoYW5nZXMgaW4gZGltZW5zaW9uc1xyXG4gICAgICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGUge01hcDxFbGVtZW50LCBSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18gPSBuZXcgTWFwU2hpbSgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2YXRpb25zLnNldCh0YXJnZXQsIG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5hZGRPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVmcmVzaCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2xsZWN0cyBvYnNlcnZhdGlvbiBpbnN0YW5jZXMgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiB3aGljaCBoYXMgY2hhbmdlZFxyXG4gICAgICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmF0aW9uLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZXMgaW5pdGlhbCBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgbGlzdCBvZiBSZXNpemVPYnNlcnZlckVudHJ5XHJcbiAgICAgICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmJyb2FkY2FzdEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBvYnNlcnZlciBkb2Vzbid0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgUmVzaXplT2JzZXJ2ZXJFbnRyeSBpbnN0YW5jZSBmb3IgZXZlcnkgYWN0aXZlIG9ic2VydmF0aW9uLlxyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5tYXAoZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja18uY2FsbChjdHgsIGVudHJpZXMsIGN0eCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmNsZWFyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgd2hldGhlciBvYnNlcnZlciBoYXMgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxuICAgIH0oKSk7XG5cbiAgICAvLyBSZWdpc3RyeSBvZiBpbnRlcm5hbCBvYnNlcnZlcnMuIElmIFdlYWtNYXAgaXMgbm90IGF2YWlsYWJsZSB1c2UgY3VycmVudCBzaGltXHJcbiAgICAvLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbiAgICAvLyBjYW4ndCBiZSBmdWxseSBwb2x5ZmlsbGVkIGFueXdheS5cclxuICAgIHZhciBvYnNlcnZlcnMgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgV2Vha01hcCgpIDogbmV3IE1hcFNoaW0oKTtcclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogZXhwb3Npbmcgb25seSB0aG9zZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHNwZWMuXHJcbiAgICAgKi9cclxuICAgIHZhciBSZXNpemVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuXHJcbiAgICAgICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgdGhpcyk7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zZXQodGhpcywgb2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9KCkpO1xyXG4gICAgLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgW1xyXG4gICAgICAgICdvYnNlcnZlJyxcclxuICAgICAgICAndW5vYnNlcnZlJyxcclxuICAgICAgICAnZGlzY29ubmVjdCdcclxuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIChfYSA9IG9ic2VydmVycy5nZXQodGhpcykpW21ldGhvZF0uYXBwbHkoX2EsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xuXG4gICAgdmFyIGluZGV4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfSkoKTtcblxuICAgIHJldHVybiBpbmRleDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJhc2U6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgTXNVc2VyU2VsZWN0OiAnbm9uZSdcbiAgfSxcbiAgdG9wOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICB0b3A6ICctNXB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBjdXJzb3I6ICdyb3ctcmVzaXplJ1xuICB9LFxuICByaWdodDoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICByaWdodDogJy01cHgnLFxuICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgYm90dG9tOiAnLTVweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgY3Vyc29yOiAncm93LXJlc2l6ZSdcbiAgfSxcbiAgbGVmdDoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBsZWZ0OiAnLTVweCcsXG4gICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAnLTEwcHgnLFxuICAgIHRvcDogJy0xMHB4JyxcbiAgICBjdXJzb3I6ICduZS1yZXNpemUnXG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogJy0xMHB4JyxcbiAgICBib3R0b206ICctMTBweCcsXG4gICAgY3Vyc29yOiAnc2UtcmVzaXplJ1xuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnLTEwcHgnLFxuICAgIGJvdHRvbTogJy0xMHB4JyxcbiAgICBjdXJzb3I6ICdzdy1yZXNpemUnXG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICctMTBweCcsXG4gICAgdG9wOiAnLTEwcHgnLFxuICAgIGN1cnNvcjogJ253LXJlc2l6ZSdcbiAgfVxufTtcblxudmFyIFJlc2l6ZXIgPSAoZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMuYmFzZSwgc3R5bGVzW3Byb3BzLmRpcmVjdGlvbl0sIHByb3BzLnJlcGxhY2VTdHlsZXMgfHwge30pLFxuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgcHJvcHMub25SZXNpemVTdGFydChlLCBwcm9wcy5kaXJlY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgcHJvcHMub25SZXNpemVTdGFydChlLCBwcm9wcy5kaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHMuY2hpbGRyZW5cbiAgKTtcbn0pO1xuXG52YXIgdXNlclNlbGVjdE5vbmUgPSB7XG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgTW96VXNlclNlbGVjdDogJ25vbmUnLFxuICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXG4gIE1zVXNlclNlbGVjdDogJ25vbmUnXG59O1xuXG52YXIgdXNlclNlbGVjdEF1dG8gPSB7XG4gIHVzZXJTZWxlY3Q6ICdhdXRvJyxcbiAgTW96VXNlclNlbGVjdDogJ2F1dG8nLFxuICBXZWJraXRVc2VyU2VsZWN0OiAnYXV0bycsXG4gIE1zVXNlclNlbGVjdDogJ2F1dG8nXG59O1xuXG52YXIgY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChuLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obiwgbWF4KSwgbWluKTtcbn07XG52YXIgc25hcCA9IGZ1bmN0aW9uIHNuYXAobiwgc2l6ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZChuIC8gc2l6ZSkgKiBzaXplO1xufTtcblxudmFyIGZpbmRDbG9zZXN0U25hcCA9IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U25hcChuLCBzbmFwQXJyYXkpIHtcbiAgcmV0dXJuIHNuYXBBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoY3VyciAtIG4pIDwgTWF0aC5hYnMocHJldiAtIG4pID8gY3VyciA6IHByZXY7XG4gIH0pO1xufTtcblxudmFyIGVuZHNXaXRoID0gZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzZWFyY2hTdHIpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIHNlYXJjaFN0ci5sZW5ndGgsIHNlYXJjaFN0ci5sZW5ndGgpID09PSBzZWFyY2hTdHI7XG59O1xuXG52YXIgZ2V0U3RyaW5nU2l6ZSA9IGZ1bmN0aW9uIGdldFN0cmluZ1NpemUobikge1xuICBpZiAobi50b1N0cmluZygpID09PSAnYXV0bycpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICdweCcpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAnJScpKSByZXR1cm4gbi50b1N0cmluZygpO1xuICBpZiAoZW5kc1dpdGgobi50b1N0cmluZygpLCAndmgnKSkgcmV0dXJuIG4udG9TdHJpbmcoKTtcbiAgaWYgKGVuZHNXaXRoKG4udG9TdHJpbmcoKSwgJ3Z3JykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICd2bWF4JykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIGlmIChlbmRzV2l0aChuLnRvU3RyaW5nKCksICd2bWluJykpIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIHJldHVybiBuICsgJ3B4Jztcbn07XG5cbnZhciBkZWZpbmVkUHJvcHMgPSBbJ3N0eWxlJywgJ2NsYXNzTmFtZScsICdncmlkJywgJ3NuYXAnLCAnYm91bmRzJywgJ3NpemUnLCAnZGVmYXVsdFNpemUnLCAnbWluV2lkdGgnLCAnbWluSGVpZ2h0JywgJ21heFdpZHRoJywgJ21heEhlaWdodCcsICdsb2NrQXNwZWN0UmF0aW8nLCAnbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCcsICdsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCcsICdlbmFibGUnLCAnaGFuZGxlU3R5bGVzJywgJ2hhbmRsZUNsYXNzZXMnLCAnaGFuZGxlV3JhcHBlclN0eWxlJywgJ2hhbmRsZVdyYXBwZXJDbGFzcycsICdjaGlsZHJlbicsICdvblJlc2l6ZVN0YXJ0JywgJ29uUmVzaXplJywgJ29uUmVzaXplU3RvcCcsICdoYW5kbGVDb21wb25lbnQnLCAnc2NhbGUnLCAncmVzaXplUmF0aW8nXTtcblxudmFyIGJhc2VDbGFzc05hbWUgPSAnX19yZXNpemFibGVfYmFzZV9fJztcblxudmFyIFJlc2l6YWJsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFJlc2l6YWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVzaXphYmxlKHByb3BzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzaXphYmxlKTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlc2l6YWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlc2l6YWJsZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNSZXNpemluZzogZmFsc2UsXG4gICAgICByZXNpemVDdXJzb3I6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiB0eXBlb2YgKF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUud2lkdGgpID09PSAndW5kZWZpbmVkJyA/ICdhdXRvJyA6IF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHR5cGVvZiAoX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS5oZWlnaHQpID09PSAndW5kZWZpbmVkJyA/ICdhdXRvJyA6IF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUuaGVpZ2h0LFxuICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVFeHRlbmRzUHJvcHMocHJvcHMpO1xuICAgIF90aGlzLm9uUmVzaXplU3RhcnQgPSBfdGhpcy5vblJlc2l6ZVN0YXJ0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uTW91c2VNb3ZlID0gX3RoaXMub25Nb3VzZU1vdmUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLm9uTW91c2VVcCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfdGhpcy5vbk1vdXNlVXApO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF90aGlzLm9uTW91c2VVcCk7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJlc2l6YWJsZSwgW3tcbiAgICBrZXk6ICd1cGRhdGVFeHRlbmRzUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVFeHRlbmRzUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMuZXh0ZW5kc1Byb3BzID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgaWYgKGRlZmluZWRQcm9wcy5pbmRleE9mKGtleSkgIT09IC0xKSByZXR1cm4gYWNjO1xuICAgICAgICBhY2Nba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UGFyZW50U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcmVudFNpemUoKSB7XG4gICAgICB2YXIgYmFzZSA9IHRoaXMuYmFzZTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICAvLyBJTkZPOiBUbyBjYWxjdWxhdGUgcGFyZW50IHdpZHRoIHdpdGggZmxleCBsYXlvdXRcbiAgICAgIHZhciB3cmFwQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIHdyYXAgPSB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXA7XG4gICAgICB2YXIgbWluV2lkdGggPSBiYXNlLnN0eWxlLm1pbldpZHRoO1xuICAgICAgaWYgKHdyYXAgIT09ICd3cmFwJykge1xuICAgICAgICB3cmFwQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgICAgICAgLy8gSEFDSzogVXNlIHJlbGF0aXZlIHRvIGdldCBwYXJlbnQgcGFkZGluZyBzaXplXG4gICAgICB9XG4gICAgICBiYXNlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIGJhc2Uuc3R5bGUubWluV2lkdGggPSAnMTAwJSc7XG4gICAgICB2YXIgc2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IGJhc2Uub2Zmc2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogYmFzZS5vZmZzZXRIZWlnaHRcbiAgICAgIH07XG4gICAgICBiYXNlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGlmICh3cmFwQ2hhbmdlZCkgdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwID0gd3JhcDtcbiAgICAgIGJhc2Uuc3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoIHx8IHNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfHwgc2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCwgMCknO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgZWxlbWVudC5zdHlsZS5mbGV4ID0gJzAnO1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGJhc2VDbGFzc05hbWU7XG4gICAgICB9XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuICAgICAgdGhpcy51cGRhdGVFeHRlbmRzUHJvcHMobmV4dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5iYXNlO1xuXG4gICAgICAgIGlmICghYmFzZSB8fCAhcGFyZW50KSByZXR1cm47XG4gICAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKGJhc2UgaW5zdGFuY2VvZiBOb2RlKSkgcmV0dXJuO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoYmFzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsY3VsYXRlTmV3U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZU5ld1NpemUobmV3U2l6ZSwga2luZCkge1xuICAgICAgdmFyIHByb3BzU2l6ZSA9IHRoaXMucHJvcHNTaXplICYmIHRoaXMucHJvcHNTaXplW2tpbmRdO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2luZF0gPT09ICdhdXRvJyAmJiB0aGlzLnN0YXRlLm9yaWdpbmFsW2tpbmRdID09PSBuZXdTaXplICYmICh0eXBlb2YgcHJvcHNTaXplID09PSAndW5kZWZpbmVkJyB8fCBwcm9wc1NpemUgPT09ICdhdXRvJykgPyAnYXV0bycgOiBuZXdTaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uUmVzaXplU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KGV2ZW50LCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBjbGllbnRYID0gMDtcbiAgICAgIHZhciBjbGllbnRZID0gMDtcbiAgICAgIGlmIChldmVudC5uYXRpdmVFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY2xpZW50WCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgIGNsaWVudFkgPSBldmVudC5uYXRpdmVFdmVudC5jbGllbnRZO1xuXG4gICAgICAgIC8vIFdoZW4gdXNlciBjbGljayB3aXRoIHJpZ2h0IGJ1dHRvbiB0aGUgcmVzaXplIGlzIHN0dWNrIGluIHJlc2l6aW5nIG1vZGVcbiAgICAgICAgLy8gdW50aWwgdXNlcnMgY2xpY2tzIGFnYWluLCBkb250IGNvbnRpbnVlIGlmIHJpZ2h0IGNsaWNrIGlzIHVzZWQuXG4gICAgICAgIC8vIEhBQ0s6IE1vdXNlRXZlbnQgZG9lcyBub3QgaGF2ZSBgd2hpY2hgIGZyb20gZmxvdy1iaW4gdjAuNjguXG4gICAgICAgIGlmIChldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5uYXRpdmVFdmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgY2xpZW50WCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRml4ICMxNjhcbiAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNpemUud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2l6ZS53aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5wcm9wcy5zaXplLndpZHRoIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgIHg6IGNsaWVudFgsXG4gICAgICAgICAgeTogY2xpZW50WSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBpc1Jlc2l6aW5nOiB0cnVlLFxuICAgICAgICByZXNpemVDdXJzb3I6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzUmVzaXppbmcpIHJldHVybjtcbiAgICAgIHZhciBjbGllbnRYID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIHZhciBjbGllbnRZID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF9zdGF0ZS5kaXJlY3Rpb24sXG4gICAgICAgICAgb3JpZ2luYWwgPSBfc3RhdGUub3JpZ2luYWwsXG4gICAgICAgICAgd2lkdGggPSBfc3RhdGUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3N0YXRlLmhlaWdodDtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbyA9IF9wcm9wcy5sb2NrQXNwZWN0UmF0aW8sXG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQgPSBfcHJvcHMubG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQsXG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCA9IF9wcm9wcy5sb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuXG4gICAgICB2YXIgc2NhbGUgPSB0aGlzLnByb3BzLnNjYWxlIHx8IDE7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWF4V2lkdGggPSBfcHJvcHMyLm1heFdpZHRoLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wczIubWF4SGVpZ2h0LFxuICAgICAgICAgIG1pbldpZHRoID0gX3Byb3BzMi5taW5XaWR0aCxcbiAgICAgICAgICBtaW5IZWlnaHQgPSBfcHJvcHMyLm1pbkhlaWdodDtcblxuICAgICAgdmFyIHJlc2l6ZVJhdGlvID0gdGhpcy5wcm9wcy5yZXNpemVSYXRpbyB8fCAxO1xuXG4gICAgICAvLyBUT0RPOiByZWZhY3RvclxuICAgICAgdmFyIHBhcmVudFNpemUgPSB0aGlzLmdldFBhcmVudFNpemUoKTtcbiAgICAgIGlmIChtYXhXaWR0aCAmJiB0eXBlb2YgbWF4V2lkdGggPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKG1heFdpZHRoLCAnJScpKSB7XG4gICAgICAgIHZhciBfcmF0aW8gPSBOdW1iZXIobWF4V2lkdGgucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1heFdpZHRoID0gcGFyZW50U2l6ZS53aWR0aCAqIF9yYXRpbztcbiAgICAgIH1cbiAgICAgIGlmIChtYXhIZWlnaHQgJiYgdHlwZW9mIG1heEhlaWdodCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgobWF4SGVpZ2h0LCAnJScpKSB7XG4gICAgICAgIHZhciBfcmF0aW8yID0gTnVtYmVyKG1heEhlaWdodC5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGFyZW50U2l6ZS5oZWlnaHQgKiBfcmF0aW8yO1xuICAgICAgfVxuICAgICAgaWYgKG1pbldpZHRoICYmIHR5cGVvZiBtaW5XaWR0aCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgobWluV2lkdGgsICclJykpIHtcbiAgICAgICAgdmFyIF9yYXRpbzMgPSBOdW1iZXIobWluV2lkdGgucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1pbldpZHRoID0gcGFyZW50U2l6ZS53aWR0aCAqIF9yYXRpbzM7XG4gICAgICB9XG4gICAgICBpZiAobWluSGVpZ2h0ICYmIHR5cGVvZiBtaW5IZWlnaHQgPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKG1pbkhlaWdodCwgJyUnKSkge1xuICAgICAgICB2YXIgX3JhdGlvNCA9IE51bWJlcihtaW5IZWlnaHQucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgIG1pbkhlaWdodCA9IHBhcmVudFNpemUuaGVpZ2h0ICogX3JhdGlvNDtcbiAgICAgIH1cbiAgICAgIG1heFdpZHRoID0gdHlwZW9mIG1heFdpZHRoID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtYXhXaWR0aCk7XG4gICAgICBtYXhIZWlnaHQgPSB0eXBlb2YgbWF4SGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtYXhIZWlnaHQpO1xuICAgICAgbWluV2lkdGggPSB0eXBlb2YgbWluV2lkdGggPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1pbldpZHRoKTtcbiAgICAgIG1pbkhlaWdodCA9IHR5cGVvZiBtaW5IZWlnaHQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1pbkhlaWdodCk7XG5cbiAgICAgIHZhciByYXRpbyA9IHR5cGVvZiBsb2NrQXNwZWN0UmF0aW8gPT09ICdudW1iZXInID8gbG9ja0FzcGVjdFJhdGlvIDogb3JpZ2luYWwud2lkdGggLyBvcmlnaW5hbC5oZWlnaHQ7XG4gICAgICB2YXIgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aDtcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQ7XG4gICAgICBpZiAoL3JpZ2h0L2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGggKyAoY2xpZW50WCAtIG9yaWdpbmFsLngpICogcmVzaXplUmF0aW8gLyBzY2FsZTtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykgbmV3SGVpZ2h0ID0gKG5ld1dpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKC9sZWZ0L2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGggLSAoY2xpZW50WCAtIG9yaWdpbmFsLngpICogcmVzaXplUmF0aW8gLyBzY2FsZTtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykgbmV3SGVpZ2h0ID0gKG5ld1dpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKC9ib3R0b20vaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0ICsgKGNsaWVudFkgLSBvcmlnaW5hbC55KSAqIHJlc2l6ZVJhdGlvIC8gc2NhbGU7XG4gICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIG5ld1dpZHRoID0gKG5ld0hlaWdodCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0KSAqIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgIH1cbiAgICAgIGlmICgvdG9wL2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodCAtIChjbGllbnRZIC0gb3JpZ2luYWwueSkgKiByZXNpemVSYXRpbyAvIHNjYWxlO1xuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSBuZXdXaWR0aCA9IChuZXdIZWlnaHQgLSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCkgKiByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHBhcmVudExlZnQgPSBwYXJlbnRSZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHBhcmVudFRvcCA9IHBhcmVudFJlY3QudG9wO1xuXG4gICAgICAgICAgdmFyIF9yZXNpemFibGUkZ2V0Qm91bmRpbiA9IHRoaXMucmVzaXphYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICBfbGVmdCA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbi5sZWZ0LFxuICAgICAgICAgICAgICBfdG9wID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluLnRvcDtcblxuICAgICAgICAgIHZhciBib3VuZFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoICsgKHBhcmVudExlZnQgLSBfbGVmdCk7XG4gICAgICAgICAgdmFyIGJvdW5kSGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCArIChwYXJlbnRUb3AgLSBfdG9wKTtcbiAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgYm91bmRXaWR0aCA/IG1heFdpZHRoIDogYm91bmRXaWR0aDtcbiAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgYm91bmRIZWlnaHQgPyBtYXhIZWlnaHQgOiBib3VuZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIF9yZXNpemFibGUkZ2V0Qm91bmRpbjIgPSB0aGlzLnJlc2l6YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgX2xlZnQyID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluMi5sZWZ0LFxuICAgICAgICAgICAgICBfdG9wMiA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbjIudG9wO1xuXG4gICAgICAgICAgdmFyIF9ib3VuZFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBfbGVmdDI7XG4gICAgICAgICAgdmFyIF9ib3VuZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIF90b3AyO1xuICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBfYm91bmRXaWR0aCA/IG1heFdpZHRoIDogX2JvdW5kV2lkdGg7XG4gICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IF9ib3VuZEhlaWdodCA/IG1heEhlaWdodCA6IF9ib3VuZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJvdW5kcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5wcm9wcy5ib3VuZHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0O1xuICAgICAgICB2YXIgdGFyZ2V0VG9wID0gdGFyZ2V0UmVjdC50b3A7XG5cbiAgICAgICAgdmFyIF9yZXNpemFibGUkZ2V0Qm91bmRpbjMgPSB0aGlzLnJlc2l6YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIF9sZWZ0MyA9IF9yZXNpemFibGUkZ2V0Qm91bmRpbjMubGVmdCxcbiAgICAgICAgICAgIF90b3AzID0gX3Jlc2l6YWJsZSRnZXRCb3VuZGluMy50b3A7XG5cbiAgICAgICAgaWYgKCEodGhpcy5wcm9wcy5ib3VuZHMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgICAgdmFyIF9ib3VuZFdpZHRoMiA9IHRoaXMucHJvcHMuYm91bmRzLm9mZnNldFdpZHRoICsgKHRhcmdldExlZnQgLSBfbGVmdDMpO1xuICAgICAgICB2YXIgX2JvdW5kSGVpZ2h0MiA9IHRoaXMucHJvcHMuYm91bmRzLm9mZnNldEhlaWdodCArICh0YXJnZXRUb3AgLSBfdG9wMyk7XG4gICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBfYm91bmRXaWR0aDIgPyBtYXhXaWR0aCA6IF9ib3VuZFdpZHRoMjtcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IF9ib3VuZEhlaWdodDIgPyBtYXhIZWlnaHQgOiBfYm91bmRIZWlnaHQyO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29tcHV0ZWRNaW5XaWR0aCA9IHR5cGVvZiBtaW5XaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyAxMCA6IG1pbldpZHRoO1xuICAgICAgdmFyIGNvbXB1dGVkTWF4V2lkdGggPSB0eXBlb2YgbWF4V2lkdGggPT09ICd1bmRlZmluZWQnIHx8IG1heFdpZHRoIDwgMCA/IG5ld1dpZHRoIDogbWF4V2lkdGg7XG4gICAgICB2YXIgY29tcHV0ZWRNaW5IZWlnaHQgPSB0eXBlb2YgbWluSGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IDEwIDogbWluSGVpZ2h0O1xuICAgICAgdmFyIGNvbXB1dGVkTWF4SGVpZ2h0ID0gdHlwZW9mIG1heEhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgfHwgbWF4SGVpZ2h0IDwgMCA/IG5ld0hlaWdodCA6IG1heEhlaWdodDtcblxuICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICB2YXIgZXh0cmFNaW5XaWR0aCA9IChjb21wdXRlZE1pbkhlaWdodCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0KSAqIHJhdGlvICsgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgICAgdmFyIGV4dHJhTWF4V2lkdGggPSAoY29tcHV0ZWRNYXhIZWlnaHQgLSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCkgKiByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICAgIHZhciBleHRyYU1pbkhlaWdodCA9IChjb21wdXRlZE1pbldpZHRoIC0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCkgLyByYXRpbyArIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0O1xuICAgICAgICB2YXIgZXh0cmFNYXhIZWlnaHQgPSAoY29tcHV0ZWRNYXhXaWR0aCAtIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgpIC8gcmF0aW8gKyBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDtcbiAgICAgICAgdmFyIGxvY2tlZE1pbldpZHRoID0gTWF0aC5tYXgoY29tcHV0ZWRNaW5XaWR0aCwgZXh0cmFNaW5XaWR0aCk7XG4gICAgICAgIHZhciBsb2NrZWRNYXhXaWR0aCA9IE1hdGgubWluKGNvbXB1dGVkTWF4V2lkdGgsIGV4dHJhTWF4V2lkdGgpO1xuICAgICAgICB2YXIgbG9ja2VkTWluSGVpZ2h0ID0gTWF0aC5tYXgoY29tcHV0ZWRNaW5IZWlnaHQsIGV4dHJhTWluSGVpZ2h0KTtcbiAgICAgICAgdmFyIGxvY2tlZE1heEhlaWdodCA9IE1hdGgubWluKGNvbXB1dGVkTWF4SGVpZ2h0LCBleHRyYU1heEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gY2xhbXAobmV3V2lkdGgsIGxvY2tlZE1pbldpZHRoLCBsb2NrZWRNYXhXaWR0aCk7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgbG9ja2VkTWluSGVpZ2h0LCBsb2NrZWRNYXhIZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3V2lkdGggPSBjbGFtcChuZXdXaWR0aCwgY29tcHV0ZWRNaW5XaWR0aCwgY29tcHV0ZWRNYXhXaWR0aCk7XG4gICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgY29tcHV0ZWRNaW5IZWlnaHQsIGNvbXB1dGVkTWF4SGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmdyaWQpIHtcbiAgICAgICAgbmV3V2lkdGggPSBzbmFwKG5ld1dpZHRoLCB0aGlzLnByb3BzLmdyaWRbMF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuZ3JpZCkge1xuICAgICAgICBuZXdIZWlnaHQgPSBzbmFwKG5ld0hlaWdodCwgdGhpcy5wcm9wcy5ncmlkWzFdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuc25hcCAmJiB0aGlzLnByb3BzLnNuYXAueCkge1xuICAgICAgICBuZXdXaWR0aCA9IGZpbmRDbG9zZXN0U25hcChuZXdXaWR0aCwgdGhpcy5wcm9wcy5zbmFwLngpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuc25hcCAmJiB0aGlzLnByb3BzLnNuYXAueSkge1xuICAgICAgICBuZXdIZWlnaHQgPSBmaW5kQ2xvc2VzdFNuYXAobmV3SGVpZ2h0LCB0aGlzLnByb3BzLnNuYXAueSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWx0YSA9IHtcbiAgICAgICAgd2lkdGg6IG5ld1dpZHRoIC0gb3JpZ2luYWwud2lkdGgsXG4gICAgICAgIGhlaWdodDogbmV3SGVpZ2h0IC0gb3JpZ2luYWwuaGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBpZiAod2lkdGggJiYgdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aCh3aWR0aCwgJyUnKSkge1xuICAgICAgICB2YXIgcGVyY2VudCA9IG5ld1dpZHRoIC8gcGFyZW50U2l6ZS53aWR0aCAqIDEwMDtcbiAgICAgICAgbmV3V2lkdGggPSBwZXJjZW50ICsgJyUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVpZ2h0ICYmIHR5cGVvZiBoZWlnaHQgPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKGhlaWdodCwgJyUnKSkge1xuICAgICAgICB2YXIgX3BlcmNlbnQgPSBuZXdIZWlnaHQgLyBwYXJlbnRTaXplLmhlaWdodCAqIDEwMDtcbiAgICAgICAgbmV3SGVpZ2h0ID0gX3BlcmNlbnQgKyAnJSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWR0aDogdGhpcy5jYWxjdWxhdGVOZXdTaXplKG5ld1dpZHRoLCAnd2lkdGgnKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbGN1bGF0ZU5ld1NpemUobmV3SGVpZ2h0LCAnaGVpZ2h0JylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplKGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlLCBkZWx0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNSZXNpemluZyA9IF9zdGF0ZTIuaXNSZXNpemluZyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfc3RhdGUyLmRpcmVjdGlvbixcbiAgICAgICAgICBvcmlnaW5hbCA9IF9zdGF0ZTIub3JpZ2luYWw7XG5cbiAgICAgIGlmICghaXNSZXNpemluZykgcmV0dXJuO1xuICAgICAgdmFyIGRlbHRhID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoIC0gb3JpZ2luYWwud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCAtIG9yaWdpbmFsLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RvcCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RvcChldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSwgZGVsdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMucHJvcHMuc2l6ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZXNpemluZzogZmFsc2UsIHJlc2l6ZUN1cnNvcjogJ2F1dG8nIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTaXplKHNpemUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJSZXNpemVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVzaXplcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZW5hYmxlID0gX3Byb3BzMy5lbmFibGUsXG4gICAgICAgICAgaGFuZGxlU3R5bGVzID0gX3Byb3BzMy5oYW5kbGVTdHlsZXMsXG4gICAgICAgICAgaGFuZGxlQ2xhc3NlcyA9IF9wcm9wczMuaGFuZGxlQ2xhc3NlcyxcbiAgICAgICAgICBoYW5kbGVXcmFwcGVyU3R5bGUgPSBfcHJvcHMzLmhhbmRsZVdyYXBwZXJTdHlsZSxcbiAgICAgICAgICBoYW5kbGVXcmFwcGVyQ2xhc3MgPSBfcHJvcHMzLmhhbmRsZVdyYXBwZXJDbGFzcyxcbiAgICAgICAgICBoYW5kbGVDb21wb25lbnQgPSBfcHJvcHMzLmhhbmRsZUNvbXBvbmVudDtcblxuICAgICAgaWYgKCFlbmFibGUpIHJldHVybiBudWxsO1xuICAgICAgdmFyIHJlc2l6ZXJzID0gT2JqZWN0LmtleXMoZW5hYmxlKS5tYXAoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICBpZiAoZW5hYmxlW2Rpcl0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBSZXNpemVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGRpcixcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXIsXG4gICAgICAgICAgICAgIG9uUmVzaXplU3RhcnQ6IF90aGlzMi5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICAgICAgICByZXBsYWNlU3R5bGVzOiBoYW5kbGVTdHlsZXMgJiYgaGFuZGxlU3R5bGVzW2Rpcl0sXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogaGFuZGxlQ2xhc3NlcyAmJiBoYW5kbGVDbGFzc2VzW2Rpcl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVDb21wb25lbnQgJiYgaGFuZGxlQ29tcG9uZW50W2Rpcl0gPyBSZWFjdC5jcmVhdGVFbGVtZW50KGhhbmRsZUNvbXBvbmVudFtkaXJdKSA6IG51bGxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgICAvLyAjOTMgV3JhcCB0aGUgcmVzaXplIGJveCBpbiBzcGFuICh3aWxsIG5vdCBicmVhayAxMDAlIHdpZHRoL2hlaWdodClcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBoYW5kbGVXcmFwcGVyQ2xhc3MsIHN0eWxlOiBoYW5kbGVXcmFwcGVyU3R5bGUgfSxcbiAgICAgICAgcmVzaXplcnNcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciB1c2VyU2VsZWN0ID0gdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nID8gdXNlclNlbGVjdE5vbmUgOiB1c2VyU2VsZWN0QXV0bztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5yZXNpemFibGUgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgfSwgdXNlclNlbGVjdCwgdGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zaXplU3R5bGUsIHtcbiAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLnByb3BzLm1heEhlaWdodCxcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnByb3BzLm1pbldpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICB9LCB0aGlzLmV4dGVuZHNQcm9wcyksXG4gICAgICAgIHRoaXMuc3RhdGUuaXNSZXNpemluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICAgICAgY3Vyc29yOiAnJyArICh0aGlzLnN0YXRlLnJlc2l6ZUN1cnNvciB8fCAnYXV0bycpLFxuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB6SW5kZXg6ICc5OTk5JyxcbiAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICByaWdodDogJzAnXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdGhpcy5yZW5kZXJSZXNpemVyKClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGFyZW50Tm9kZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNpemFibGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwcm9wc1NpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2l6ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRTaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Jhc2UnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIGlmICghcGFyZW50KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgbiA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKGJhc2VDbGFzc05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICB2YXIgd2lkdGggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIG9yZ1dpZHRoID0gdGhpcy5yZXNpemFibGUub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBvcmdIZWlnaHQgPSB0aGlzLnJlc2l6YWJsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIC8vIEhBQ0s6IFNldCBwb3NpdGlvbiBgcmVsYXRpdmVgIHRvIGdldCBwYXJlbnQgc2l6ZS5cbiAgICAgICAgLy8gICAgICAgVGhpcyBpcyBiZWNhdXNlIHdoZW4gcmUtcmVzaXphYmxlIHNldCBgYWJzb2x1dGVgLCBJIGNhbiBub3QgZ2V0IGJhc2Ugd2lkdGggY29ycmVjdGx5LlxuICAgICAgICB2YXIgb3JnUG9zaXRpb24gPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbjtcbiAgICAgICAgaWYgKG9yZ1Bvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIElORk86IFVzZSBvcmlnaW5hbCB3aWR0aCBvciBoZWlnaHQgaWYgc2V0IGF1dG8uXG4gICAgICAgIHdpZHRoID0gdGhpcy5yZXNpemFibGUuc3R5bGUud2lkdGggIT09ICdhdXRvJyA/IHRoaXMucmVzaXphYmxlLm9mZnNldFdpZHRoIDogb3JnV2lkdGg7XG4gICAgICAgIGhlaWdodCA9IHRoaXMucmVzaXphYmxlLnN0eWxlLmhlaWdodCAhPT0gJ2F1dG8nID8gdGhpcy5yZXNpemFibGUub2Zmc2V0SGVpZ2h0IDogb3JnSGVpZ2h0O1xuICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uID0gb3JnUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZVN0eWxlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZTtcblxuICAgICAgdmFyIGdldFNpemUgPSBmdW5jdGlvbiBnZXRTaXplKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzNC5zdGF0ZVtrZXldID09PSAndW5kZWZpbmVkJyB8fCBfdGhpczQuc3RhdGVba2V5XSA9PT0gJ2F1dG8nKSByZXR1cm4gJ2F1dG8nO1xuICAgICAgICBpZiAoX3RoaXM0LnByb3BzU2l6ZSAmJiBfdGhpczQucHJvcHNTaXplW2tleV0gJiYgZW5kc1dpdGgoX3RoaXM0LnByb3BzU2l6ZVtrZXldLnRvU3RyaW5nKCksICclJykpIHtcbiAgICAgICAgICBpZiAoZW5kc1dpdGgoX3RoaXM0LnN0YXRlW2tleV0udG9TdHJpbmcoKSwgJyUnKSkgcmV0dXJuIF90aGlzNC5zdGF0ZVtrZXldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdmFyIHBhcmVudFNpemUgPSBfdGhpczQuZ2V0UGFyZW50U2l6ZSgpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IE51bWJlcihfdGhpczQuc3RhdGVba2V5XS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgICB2YXIgcGVyY2VudCA9IHZhbHVlIC8gcGFyZW50U2l6ZVtrZXldICogMTAwO1xuICAgICAgICAgIHJldHVybiBwZXJjZW50ICsgJyUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdTaXplKF90aGlzNC5zdGF0ZVtrZXldKTtcbiAgICAgIH07XG4gICAgICB2YXIgd2lkdGggPSBzaXplICYmIHR5cGVvZiBzaXplLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nID8gZ2V0U3RyaW5nU2l6ZShzaXplLndpZHRoKSA6IGdldFNpemUoJ3dpZHRoJyk7XG4gICAgICB2YXIgaGVpZ2h0ID0gc2l6ZSAmJiB0eXBlb2Ygc2l6ZS5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnN0YXRlLmlzUmVzaXppbmcgPyBnZXRTdHJpbmdTaXplKHNpemUuaGVpZ2h0KSA6IGdldFNpemUoJ2hlaWdodCcpO1xuICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmVzaXphYmxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZXNpemFibGUuZGVmYXVsdFByb3BzID0ge1xuICBvblJlc2l6ZVN0YXJ0OiBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KCkge30sXG4gIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZSgpIHt9LFxuICBvblJlc2l6ZVN0b3A6IGZ1bmN0aW9uIG9uUmVzaXplU3RvcCgpIHt9LFxuICBlbmFibGU6IHtcbiAgICB0b3A6IHRydWUsXG4gICAgcmlnaHQ6IHRydWUsXG4gICAgYm90dG9tOiB0cnVlLFxuICAgIGxlZnQ6IHRydWUsXG4gICAgdG9wUmlnaHQ6IHRydWUsXG4gICAgYm90dG9tUmlnaHQ6IHRydWUsXG4gICAgYm90dG9tTGVmdDogdHJ1ZSxcbiAgICB0b3BMZWZ0OiB0cnVlXG4gIH0sXG4gIHN0eWxlOiB7fSxcbiAgZ3JpZDogWzEsIDFdLFxuICBsb2NrQXNwZWN0UmF0aW86IGZhbHNlLFxuICBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoOiAwLFxuICBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDogMCxcbiAgc2NhbGU6IDEsXG4gIHJlc2l6ZVJhdGlvOiAxXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc2l6YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZS1yZXNpemFibGUvbGliL2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gMTczOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgncmVhY3QtZG9tJyksIHJlcXVpcmUoJ3JlYWN0JykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsncmVhY3QtZG9tJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcblx0KGdsb2JhbC5SZWFjdERyYWdnYWJsZSA9IGZhY3RvcnkoZ2xvYmFsLlJlYWN0RE9NLGdsb2JhbC5SZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKFJlYWN0RE9NLFJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuXHRSZWFjdERPTSA9IFJlYWN0RE9NICYmIFJlYWN0RE9NLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBSZWFjdERPTVsnZGVmYXVsdCddIDogUmVhY3RET007XG5cdFJlYWN0ID0gUmVhY3QgJiYgUmVhY3QuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFJlYWN0WydkZWZhdWx0J10gOiBSZWFjdDtcblxuXHRmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdFx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKlxuXHQgKiBcblx0ICovXG5cblx0ZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBhcmc7XG5cdCAgfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuXHQgKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuXHQgKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuXHQgKi9cblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG5cdCAgcmV0dXJuIGFyZztcblx0fTtcblxuXHR2YXIgZW1wdHlGdW5jdGlvbl8xID0gZW1wdHlGdW5jdGlvbjtcblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG5cdCAqXG5cdCAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG5cdCAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuXHQgKiBleHBlY3RpbmcuXG5cdCAqXG5cdCAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG5cdCAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cblx0ICovXG5cblx0dmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuXHR7XG5cdCAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuXHQgIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cblx0ICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgdmFyIGVycm9yO1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcblx0ICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcblx0ICAgICAgfSkpO1xuXHQgICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuXHQgICAgfVxuXG5cdCAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG5cdCAgICB0aHJvdyBlcnJvcjtcblx0ICB9XG5cdH1cblxuXHR2YXIgaW52YXJpYW50XzEgPSBpbnZhcmlhbnQ7XG5cblx0LyoqXG5cdCAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cblx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuXHQgKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuXHQgKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cblx0ICovXG5cblx0dmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uXzE7XG5cblx0e1xuXHQgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG5cdCAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICB9XG5cblx0ICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICB9KTtcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cblx0ICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG5cdCAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdCAgICB9IGNhdGNoICh4KSB7fVxuXHQgIH07XG5cblx0ICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcblx0ICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuXHQgICAgfVxuXG5cdCAgICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG5cdCAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdHZhciB3YXJuaW5nXzEgPSB3YXJuaW5nO1xuXG5cdC8qXG5cdG9iamVjdC1hc3NpZ25cblx0KGMpIFNpbmRyZSBTb3JodXNcblx0QGxpY2Vuc2UgTUlUXG5cdCovXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cdHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblx0ZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdFx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gT2JqZWN0KHZhbCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QyID0ge307XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHZhciBvYmplY3RBc3NpZ24gPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0XHR2YXIgZnJvbTtcblx0XHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHRcdHZhciBzeW1ib2xzO1xuXG5cdFx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cdHtcblx0ICB2YXIgaW52YXJpYW50JDEgPSBpbnZhcmlhbnRfMTtcblx0ICB2YXIgd2FybmluZyQxID0gd2FybmluZ18xO1xuXHQgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCQxID0gUmVhY3RQcm9wVHlwZXNTZWNyZXRfMTtcblx0ICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuXHQgKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcblx0ICB7XG5cdCAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG5cdCAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuXHQgICAgICAgIHZhciBlcnJvcjtcblx0ICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuXHQgICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cblx0ICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuXHQgICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuXHQgICAgICAgICAgaW52YXJpYW50JDEodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuXHQgICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0JDEpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG5cdCAgICAgICAgICBlcnJvciA9IGV4O1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3YXJuaW5nJDEoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG5cdCAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcblx0ICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuXHQgICAgICAgICAgLy8gc2FtZSBlcnJvci5cblx0ICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cblx0ICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG5cdCAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0dmFyIGNoZWNrUHJvcFR5cGVzXzEgPSBjaGVja1Byb3BUeXBlcztcblxuXHR2YXIgZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuXHQgIC8qIGdsb2JhbCBTeW1ib2wgKi9cblx0ICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG5cdCAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cblx0ICAvKipcblx0ICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG5cdCAgICpcblx0ICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcblx0ICAgKlxuXHQgICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG5cdCAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG5cdCAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuXHQgICAqICAgICAgIC4uLlxuXHQgICAqICAgICB9XG5cdCAgICpcblx0ICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcblx0ICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG5cdCAgICovXG5cdCAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG5cdCAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuXHQgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8qKlxuXHQgICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG5cdCAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcblx0ICAgKlxuXHQgICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcblx0ICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgIHByb3BUeXBlczoge1xuXHQgICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cblx0ICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuXHQgICAqXG5cdCAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuXHQgICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcblx0ICAgKlxuXHQgICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuXHQgICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcblx0ICAgKiAgICAgfSxcblx0ICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqXG5cdCAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuXHQgICAqXG5cdCAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG5cdCAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG5cdCAgICpcblx0ICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG5cdCAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuXHQgICAqXG5cdCAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgcHJvcFR5cGVzOiB7XG5cdCAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG5cdCAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcblx0ICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG5cdCAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcblx0ICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuXHQgICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcblx0ICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgKiAgICAgICAgICApO1xuXHQgICAqICAgICAgICB9XG5cdCAgICogICAgICB9XG5cdCAgICogICAgfSxcblx0ICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cblx0ICAgKiAgfSk7XG5cdCAgICpcblx0ICAgKiBAaW50ZXJuYWxcblx0ICAgKi9cblxuXHQgIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cblx0ICAvLyBJbXBvcnRhbnQhXG5cdCAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuXHQgIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcblx0ICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcblx0ICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG5cdCAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcblx0ICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuXHQgICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG5cdCAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcblx0ICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG5cdCAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG5cdCAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG5cdCAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcblx0ICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG5cdCAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuXHQgICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG5cdCAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuXHQgICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuXHQgICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG5cdCAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcblx0ICB9O1xuXG5cdCAgLyoqXG5cdCAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuXHQgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuXHQgICAqL1xuXHQgIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cblx0ICBmdW5jdGlvbiBpcyh4LCB5KSB7XG5cdCAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG5cdCAgICBpZiAoeCA9PT0geSkge1xuXHQgICAgICAvLyBTdGVwcyAxLTUsIDctMTBcblx0ICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcblx0ICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cblx0ICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cblx0ICAvKipcblx0ICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG5cdCAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcblx0ICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG5cdCAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuXHQgICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cblx0ICAgKi9cblx0ICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcblx0ICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdCAgICB0aGlzLnN0YWNrID0gJyc7XG5cdCAgfVxuXHQgIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cblx0ICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG5cdCAgICB7XG5cdCAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuXHQgICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG5cdCAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcblx0ICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG5cdCAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpIHtcblx0ICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuXHQgICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG5cdCAgICAgICAgICBpbnZhcmlhbnRfMShcblx0ICAgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcblx0ICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG5cdCAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuXHQgICAgICAgICAgKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG5cdCAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG5cdCAgICAgICAgICBpZiAoXG5cdCAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcblx0ICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuXHQgICAgICAgICAgKSB7XG5cdCAgICAgICAgICAgIHdhcm5pbmdfMShcblx0ICAgICAgICAgICAgICBmYWxzZSxcblx0ICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG5cdCAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcblx0ICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuXHQgICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuXHQgICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuXHQgICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcblx0ICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG5cdCAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuXHQgICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG5cdCAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcblx0ICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG5cdCAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG5cdCAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG5cdCAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG5cdCAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuXHQgICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25fMS50aGF0UmV0dXJuc051bGwpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKTtcblx0ICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcblx0ICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuXHQgICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuXHQgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuXHQgICAgICB3YXJuaW5nXzEoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKTtcblx0ICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25fMS50aGF0UmV0dXJuc051bGw7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuXHQgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuXHQgICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpO1xuXHQgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG5cdCAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcblx0ICAgICAgd2FybmluZ18xKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpO1xuXHQgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zTnVsbDtcblx0ICAgIH1cblxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgd2FybmluZ18xKFxuXHQgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuXHQgICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG5cdCAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG5cdCAgICAgICAgICBpXG5cdCAgICAgICAgKTtcblx0ICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zTnVsbDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuXHQgICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSkgPT0gbnVsbCkge1xuXHQgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcblx0ICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblx0ICAgICAgICBpZiAoIWNoZWNrZXIpIHtcblx0ICAgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldF8xKTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cblx0ICAgICAgLy8gcHJvcHMuXG5cdCAgICAgIHZhciBhbGxLZXlzID0gb2JqZWN0QXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXHQgICAgICAgIGlmICghY2hlY2tlcikge1xuXHQgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuXHQgICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG5cdCAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG5cdCAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuXHQgICAgICAgICAgKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSk7XG5cdCAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcblx0ICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuXHQgICAgICBjYXNlICdudW1iZXInOlxuXHQgICAgICBjYXNlICdzdHJpbmcnOlxuXHQgICAgICBjYXNlICd1bmRlZmluZWQnOlxuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcblx0ICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcblx0ICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuXHQgICAgICAgICAgdmFyIHN0ZXA7XG5cdCAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcblx0ICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcblx0ICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG5cdCAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXG5cdCAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuXHQgICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblxuXHQgICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuXHQgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuXHQgIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcblx0ICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdhcnJheSc7XG5cdCAgICB9XG5cdCAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cblx0ICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG5cdCAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuXHQgICAgICByZXR1cm4gJ29iamVjdCc7XG5cdCAgICB9XG5cdCAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdzeW1ib2wnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BUeXBlO1xuXHQgIH1cblxuXHQgIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cblx0ICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cblx0ICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcblx0ICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuXHQgICAgfVxuXHQgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0ICAgICAgICByZXR1cm4gJ2RhdGUnO1xuXHQgICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHQgICAgICAgIHJldHVybiAncmVnZXhwJztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BUeXBlO1xuXHQgIH1cblxuXHQgIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cblx0ICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuXHQgIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuXHQgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG5cdCAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgY2FzZSAnYXJyYXknOlxuXHQgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG5cdCAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuXHQgICAgICBjYXNlICdkYXRlJzpcblx0ICAgICAgY2FzZSAncmVnZXhwJzpcblx0ICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG5cdCAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgcmV0dXJuIHR5cGU7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cblx0ICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG5cdCAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcblx0ICAgICAgcmV0dXJuIEFOT05ZTU9VUztcblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcblx0ICB9XG5cblx0ICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzXzE7XG5cdCAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cblx0ICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG5cdH07XG5cblx0dmFyIHByb3BUeXBlcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblxuXHR7XG5cdCAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG5cdCAgICBTeW1ib2wuZm9yICYmXG5cdCAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG5cdCAgICAweGVhYzc7XG5cblx0ICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0ICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuXHQgICAgICBvYmplY3QgIT09IG51bGwgJiZcblx0ICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cdCAgfTtcblxuXHQgIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuXHQgIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2Rcblx0ICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG5cdCAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5V2l0aFR5cGVDaGVja2Vycyhpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG5cdH1cblx0fSk7XG5cblx0dmFyIGNsYXNzbmFtZXMgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5cdC8qIVxuXHQgIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuXHQgIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdCAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuXHQqL1xuXHQvKiBnbG9iYWwgZGVmaW5lICovXG5cblx0KGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRcdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0XHR9XG5cblx0XHRpZiAoJ29iamVjdCcgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB1bmRlZmluZWQuYW1kID09PSAnb2JqZWN0JyAmJiB1bmRlZmluZWQuYW1kKSB7XG5cdFx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0XHR1bmRlZmluZWQoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdFx0fVxuXHR9KCkpO1xuXHR9KTtcblxuXHQvLyBAY3JlZGl0cyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yb2dvemhuaWtvZmYvYTQzY2ZlZDI3YzQxZTRlNjhjZGNcblx0ZnVuY3Rpb24gZmluZEluQXJyYXkoYXJyYXkgLyo6IEFycmF5PGFueT4gfCBUb3VjaExpc3QqLywgY2FsbGJhY2sgLyo6IEZ1bmN0aW9uKi8pIC8qOiBhbnkqLyB7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICBpZiAoY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIFthcnJheVtpXSwgaSwgYXJyYXldKSkgcmV0dXJuIGFycmF5W2ldO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYyAvKjogYW55Ki8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblxuXHRmdW5jdGlvbiBpc051bShudW0gLyo6IGFueSovKSAvKjogYm9vbGVhbiovIHtcblx0ICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bSk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbnQoYSAvKjogc3RyaW5nKi8pIC8qOiBudW1iZXIqLyB7XG5cdCAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRvbnRTZXRNZShwcm9wcyAvKjogT2JqZWN0Ki8sIHByb3BOYW1lIC8qOiBzdHJpbmcqLywgY29tcG9uZW50TmFtZSAvKjogc3RyaW5nKi8pIHtcblx0ICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG5cdCAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgJyArIHByb3BOYW1lICsgJyBwYXNzZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnIC0gZG8gbm90IHNldCB0aGlzLCBzZXQgaXQgb24gdGhlIGNoaWxkLicpO1xuXHQgIH1cblx0fVxuXG5cdHZhciBwcmVmaXhlcyA9IFsnTW96JywgJ1dlYmtpdCcsICdPJywgJ21zJ107XG5cdGZ1bmN0aW9uIGdldFByZWZpeCgpIC8qOiBzdHJpbmcqLyB7XG5cdCAgdmFyIHByb3AgLyo6IHN0cmluZyovID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuXHQgIC8vIENoZWNraW5nIHNwZWNpZmljYWxseSBmb3IgJ3dpbmRvdy5kb2N1bWVudCcgaXMgZm9yIHBzZXVkby1icm93c2VyIHNlcnZlci1zaWRlXG5cdCAgLy8gZW52aXJvbm1lbnRzIHRoYXQgZGVmaW5lICd3aW5kb3cnIGFzIHRoZSBnbG9iYWwgY29udGV4dC5cblx0ICAvLyBFLmcuIFJlYWN0LXJhaWxzIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtcmFpbHMvcHVsbC84NClcblx0ICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcblxuXHQgIHZhciBzdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cblx0ICBpZiAocHJvcCBpbiBzdHlsZSkgcmV0dXJuICcnO1xuXG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKGJyb3dzZXJQcmVmaXhUb0tleShwcm9wLCBwcmVmaXhlc1tpXSkgaW4gc3R5bGUpIHJldHVybiBwcmVmaXhlc1tpXTtcblx0ICB9XG5cblx0ICByZXR1cm4gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBicm93c2VyUHJlZml4VG9LZXkocHJvcCAvKjogc3RyaW5nKi8sIHByZWZpeCAvKjogc3RyaW5nKi8pIC8qOiBzdHJpbmcqLyB7XG5cdCAgcmV0dXJuIHByZWZpeCA/ICcnICsgcHJlZml4ICsga2ViYWJUb1RpdGxlQ2FzZShwcm9wKSA6IHByb3A7XG5cdH1cblxuXHRmdW5jdGlvbiBrZWJhYlRvVGl0bGVDYXNlKHN0ciAvKjogc3RyaW5nKi8pIC8qOiBzdHJpbmcqLyB7XG5cdCAgdmFyIG91dCA9ICcnO1xuXHQgIHZhciBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKHNob3VsZENhcGl0YWxpemUpIHtcblx0ICAgICAgb3V0ICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuXHQgICAgICBzaG91bGRDYXBpdGFsaXplID0gZmFsc2U7XG5cdCAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJy0nKSB7XG5cdCAgICAgIHNob3VsZENhcGl0YWxpemUgPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgb3V0ICs9IHN0cltpXTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIG91dDtcblx0fVxuXG5cdC8vIERlZmF1bHQgZXhwb3J0IGlzIHRoZSBwcmVmaXggaXRzZWxmLCBsaWtlICdNb3onLCAnV2Via2l0JywgZXRjXG5cdC8vIE5vdGUgdGhhdCB5b3UgbWF5IGhhdmUgdG8gcmUtdGVzdCBmb3IgY2VydGFpbiB0aGluZ3M7IGZvciBpbnN0YW5jZSwgQ2hyb21lIDUwXG5cdC8vIGNhbiBoYW5kbGUgdW5wcmVmaXhlZCBgdHJhbnNmb3JtYCwgYnV0IG5vdCB1bnByZWZpeGVkIGB1c2VyLXNlbGVjdGBcblx0dmFyIGJyb3dzZXJQcmVmaXggPSBnZXRQcmVmaXgoKTtcblxuXHR2YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG5cdCAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcblx0ICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuXHQgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdCAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHQgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblx0ICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuXHQgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuXHQgIH07XG5cdH0oKTtcblxuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG5cdCAgaWYgKGtleSBpbiBvYmopIHtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuXHQgICAgICB2YWx1ZTogdmFsdWUsXG5cdCAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgICAgd3JpdGFibGU6IHRydWVcblx0ICAgIH0pO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBvYmpba2V5XSA9IHZhbHVlO1xuXHQgIH1cblxuXHQgIHJldHVybiBvYmo7XG5cdH07XG5cblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdCAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cblx0ICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcblx0ICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHRhcmdldDtcblx0fTtcblxuXHR2YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcblx0ICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcblx0ICB9XG5cblx0ICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcblx0ICAgIGNvbnN0cnVjdG9yOiB7XG5cdCAgICAgIHZhbHVlOiBzdWJDbGFzcyxcblx0ICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG5cdCAgICAgIHdyaXRhYmxlOiB0cnVlLFxuXHQgICAgICBjb25maWd1cmFibGU6IHRydWVcblx0ICAgIH1cblx0ICB9KTtcblx0ICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG5cdH07XG5cblx0dmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuXHQgIGlmICghc2VsZikge1xuXHQgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuXHQgIH1cblxuXHQgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuXHR9O1xuXG5cdHZhciBzbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG5cdCAgICB2YXIgX2FyciA9IFtdO1xuXHQgICAgdmFyIF9uID0gdHJ1ZTtcblx0ICAgIHZhciBfZCA9IGZhbHNlO1xuXHQgICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG5cdCAgICB0cnkge1xuXHQgICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG5cdCAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuXHQgICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgIF9kID0gdHJ1ZTtcblx0ICAgICAgX2UgPSBlcnI7XG5cdCAgICB9IGZpbmFsbHkge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG5cdCAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gX2Fycjtcblx0ICB9XG5cblx0ICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuXHQgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHQgICAgICByZXR1cm4gYXJyO1xuXHQgICAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcblx0ICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuXHQgICAgfVxuXHQgIH07XG5cdH0oKTtcblxuXHQvKjo6IGltcG9ydCB0eXBlIHtDb250cm9sUG9zaXRpb24sIFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdHlwZXMnOyovXG5cblxuXHR2YXIgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9ICcnO1xuXHRmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWwgLyo6IE5vZGUqLywgc2VsZWN0b3IgLyo6IHN0cmluZyovKSAvKjogYm9vbGVhbiovIHtcblx0ICBpZiAoIW1hdGNoZXNTZWxlY3RvckZ1bmMpIHtcblx0ICAgIG1hdGNoZXNTZWxlY3RvckZ1bmMgPSBmaW5kSW5BcnJheShbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21vek1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvcicsICdvTWF0Y2hlc1NlbGVjdG9yJ10sIGZ1bmN0aW9uIChtZXRob2QpIHtcblx0ICAgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgICAgICByZXR1cm4gaXNGdW5jdGlvbihlbFttZXRob2RdKTtcblx0ICAgIH0pO1xuXHQgIH1cblxuXHQgIC8vIE1pZ2h0IG5vdCBiZSBmb3VuZCBlbnRpcmVseSAobm90IGFuIEVsZW1lbnQ/KSAtIGluIHRoYXQgY2FzZSwgYmFpbFxuXHQgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcblx0ICBpZiAoIWlzRnVuY3Rpb24oZWxbbWF0Y2hlc1NlbGVjdG9yRnVuY10pKSByZXR1cm4gZmFsc2U7XG5cblx0ICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cdCAgcmV0dXJuIGVsW21hdGNoZXNTZWxlY3RvckZ1bmNdKHNlbGVjdG9yKTtcblx0fVxuXG5cdC8vIFdvcmtzIHVwIHRoZSB0cmVlIHRvIHRoZSBkcmFnZ2FibGUgaXRzZWxmIGF0dGVtcHRpbmcgdG8gbWF0Y2ggc2VsZWN0b3IuXG5cdGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlbCAvKjogTm9kZSovLCBzZWxlY3RvciAvKjogc3RyaW5nKi8sIGJhc2VOb2RlIC8qOiBOb2RlKi8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHZhciBub2RlID0gZWw7XG5cdCAgZG8ge1xuXHQgICAgaWYgKG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHJldHVybiB0cnVlO1xuXHQgICAgaWYgKG5vZGUgPT09IGJhc2VOb2RlKSByZXR1cm4gZmFsc2U7XG5cdCAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHQgIH0gd2hpbGUgKG5vZGUpO1xuXG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkRXZlbnQoZWwgLyo6ID9Ob2RlKi8sIGV2ZW50IC8qOiBzdHJpbmcqLywgaGFuZGxlciAvKjogRnVuY3Rpb24qLykgLyo6IHZvaWQqLyB7XG5cdCAgaWYgKCFlbCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcblx0ICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG5cdCAgfSBlbHNlIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdCAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgICAgZWxbJ29uJyArIGV2ZW50XSA9IGhhbmRsZXI7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWwgLyo6ID9Ob2RlKi8sIGV2ZW50IC8qOiBzdHJpbmcqLywgaGFuZGxlciAvKjogRnVuY3Rpb24qLykgLyo6IHZvaWQqLyB7XG5cdCAgaWYgKCFlbCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcblx0ICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG5cdCAgfSBlbHNlIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG5cdCAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXHQgICAgZWxbJ29uJyArIGV2ZW50XSA9IG51bGw7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gb3V0ZXJIZWlnaHQobm9kZSAvKjogSFRNTEVsZW1lbnQqLykgLyo6IG51bWJlciovIHtcblx0ICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcblx0ICAvLyBvZmZzZXRUb3Agd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cblx0ICB2YXIgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG5cdCAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuXHQgIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG5cdCAgcmV0dXJuIGhlaWdodDtcblx0fVxuXG5cdGZ1bmN0aW9uIG91dGVyV2lkdGgobm9kZSAvKjogSFRNTEVsZW1lbnQqLykgLyo6IG51bWJlciovIHtcblx0ICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcblx0ICAvLyBvZmZzZXRMZWZ0IHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG5cdCAgdmFyIHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcblx0ICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHQgIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCk7XG5cdCAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cdCAgcmV0dXJuIHdpZHRoO1xuXHR9XG5cdGZ1bmN0aW9uIGlubmVySGVpZ2h0KG5vZGUgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBudW1iZXIqLyB7XG5cdCAgdmFyIGhlaWdodCA9IG5vZGUuY2xpZW50SGVpZ2h0O1xuXHQgIHZhciBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdCAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApO1xuXHQgIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcblx0ICByZXR1cm4gaGVpZ2h0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5uZXJXaWR0aChub2RlIC8qOiBIVE1MRWxlbWVudCovKSAvKjogbnVtYmVyKi8ge1xuXHQgIHZhciB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG5cdCAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICB3aWR0aCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nTGVmdCk7XG5cdCAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0KTtcblx0ICByZXR1cm4gd2lkdGg7XG5cdH1cblxuXHQvLyBHZXQgZnJvbSBvZmZzZXRQYXJlbnRcblx0ZnVuY3Rpb24gb2Zmc2V0WFlGcm9tUGFyZW50KGV2dCAvKjoge2NsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyfSovLCBvZmZzZXRQYXJlbnQgLyo6IEhUTUxFbGVtZW50Ki8pIC8qOiBDb250cm9sUG9zaXRpb24qLyB7XG5cdCAgdmFyIGlzQm9keSA9IG9mZnNldFBhcmVudCA9PT0gb2Zmc2V0UGFyZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcblx0ICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGlzQm9keSA/IHsgbGVmdDogMCwgdG9wOiAwIH0gOiBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0ICB2YXIgeCA9IGV2dC5jbGllbnRYICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQgLSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQ7XG5cdCAgdmFyIHkgPSBldnQuY2xpZW50WSArIG9mZnNldFBhcmVudC5zY3JvbGxUb3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcDtcblxuXHQgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNTU1RyYW5zZm9ybShjb250cm9sUG9zIC8qOiBDb250cm9sUG9zaXRpb24qLywgcG9zaXRpb25PZmZzZXQgLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi8pIC8qOiBPYmplY3QqLyB7XG5cdCAgdmFyIHRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb24oY29udHJvbFBvcywgcG9zaXRpb25PZmZzZXQsICdweCcpO1xuXHQgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgYnJvd3NlclByZWZpeFRvS2V5KCd0cmFuc2Zvcm0nLCBicm93c2VyUHJlZml4KSwgdHJhbnNsYXRpb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlU1ZHVHJhbnNmb3JtKGNvbnRyb2xQb3MgLyo6IENvbnRyb2xQb3NpdGlvbiovLCBwb3NpdGlvbk9mZnNldCAvKjogUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24qLykgLyo6IHN0cmluZyovIHtcblx0ICB2YXIgdHJhbnNsYXRpb24gPSBnZXRUcmFuc2xhdGlvbihjb250cm9sUG9zLCBwb3NpdGlvbk9mZnNldCwgJycpO1xuXHQgIHJldHVybiB0cmFuc2xhdGlvbjtcblx0fVxuXHRmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihfcmVmMiwgcG9zaXRpb25PZmZzZXQgLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi8sIHVuaXRTdWZmaXggLyo6IHN0cmluZyovKSAvKjogc3RyaW5nKi8ge1xuXHQgIHZhciB4ID0gX3JlZjIueCxcblx0ICAgICAgeSA9IF9yZWYyLnk7XG5cblx0ICB2YXIgdHJhbnNsYXRpb24gPSAndHJhbnNsYXRlKCcgKyB4ICsgdW5pdFN1ZmZpeCArICcsJyArIHkgKyB1bml0U3VmZml4ICsgJyknO1xuXHQgIGlmIChwb3NpdGlvbk9mZnNldCkge1xuXHQgICAgdmFyIGRlZmF1bHRYID0gJycgKyAodHlwZW9mIHBvc2l0aW9uT2Zmc2V0LnggPT09ICdzdHJpbmcnID8gcG9zaXRpb25PZmZzZXQueCA6IHBvc2l0aW9uT2Zmc2V0LnggKyB1bml0U3VmZml4KTtcblx0ICAgIHZhciBkZWZhdWx0WSA9ICcnICsgKHR5cGVvZiBwb3NpdGlvbk9mZnNldC55ID09PSAnc3RyaW5nJyA/IHBvc2l0aW9uT2Zmc2V0LnkgOiBwb3NpdGlvbk9mZnNldC55ICsgdW5pdFN1ZmZpeCk7XG5cdCAgICB0cmFuc2xhdGlvbiA9ICd0cmFuc2xhdGUoJyArIGRlZmF1bHRYICsgJywgJyArIGRlZmF1bHRZICsgJyknICsgdHJhbnNsYXRpb247XG5cdCAgfVxuXHQgIHJldHVybiB0cmFuc2xhdGlvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRvdWNoKGUgLyo6IE1vdXNlVG91Y2hFdmVudCovLCBpZGVudGlmaWVyIC8qOiBudW1iZXIqLykgLyo6ID97Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9Ki8ge1xuXHQgIHJldHVybiBlLnRhcmdldFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS50YXJnZXRUb3VjaGVzLCBmdW5jdGlvbiAodCkge1xuXHQgICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcjtcblx0ICB9KSB8fCBlLmNoYW5nZWRUb3VjaGVzICYmIGZpbmRJbkFycmF5KGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0KSB7XG5cdCAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gdC5pZGVudGlmaWVyO1xuXHQgIH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VG91Y2hJZGVudGlmaWVyKGUgLyo6IE1vdXNlVG91Y2hFdmVudCovKSAvKjogP251bWJlciovIHtcblx0ICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlc1swXSkgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuXHQgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHJldHVybiBlLmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XG5cdH1cblxuXHQvLyBVc2VyLXNlbGVjdCBIYWNrczpcblx0Ly9cblx0Ly8gVXNlZnVsIGZvciBwcmV2ZW50aW5nIGJsdWUgaGlnaGxpZ2h0cyBhbGwgb3ZlciBldmVyeXRoaW5nIHdoZW4gZHJhZ2dpbmcuXG5cblx0Ly8gTm90ZSB3ZSdyZSBwYXNzaW5nIGBkb2N1bWVudGAgYi9jIHdlIGNvdWxkIGJlIGlmcmFtZWRcblx0ZnVuY3Rpb24gYWRkVXNlclNlbGVjdFN0eWxlcyhkb2MgLyo6ID9Eb2N1bWVudCovKSB7XG5cdCAgaWYgKCFkb2MpIHJldHVybjtcblx0ICB2YXIgc3R5bGVFbCA9IGRvYy5nZXRFbGVtZW50QnlJZCgncmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsJyk7XG5cdCAgaWYgKCFzdHlsZUVsKSB7XG5cdCAgICBzdHlsZUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xuXHQgICAgc3R5bGVFbC5pZCA9ICdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnO1xuXHQgICAgc3R5bGVFbC5pbm5lckhUTUwgPSAnLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6LW1vei1zZWxlY3Rpb24ge2FsbDogaW5oZXJpdDt9XFxuJztcblx0ICAgIHN0eWxlRWwuaW5uZXJIVE1MICs9ICcucmVhY3QtZHJhZ2dhYmxlLXRyYW5zcGFyZW50LXNlbGVjdGlvbiAqOjpzZWxlY3Rpb24ge2FsbDogaW5oZXJpdDt9XFxuJztcblx0ICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuXHQgIH1cblx0ICBpZiAoZG9jLmJvZHkpIGFkZENsYXNzTmFtZShkb2MuYm9keSwgJ3JlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24nKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoZG9jIC8qOiA/RG9jdW1lbnQqLykge1xuXHQgIHRyeSB7XG5cdCAgICBpZiAoZG9jICYmIGRvYy5ib2R5KSByZW1vdmVDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XG5cdCAgICAvLyAkRmxvd0lnbm9yZTogSUVcblx0ICAgIGlmIChkb2Muc2VsZWN0aW9uKSB7XG5cdCAgICAgIC8vICRGbG93SWdub3JlOiBJRVxuXHQgICAgICBkb2Muc2VsZWN0aW9uLmVtcHR5KCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7IC8vIHJlbW92ZSBzZWxlY3Rpb24gY2F1c2VkIGJ5IHNjcm9sbFxuXHQgICAgfVxuXHQgIH0gY2F0Y2ggKGUpIHtcblx0ICAgIC8vIHByb2JhYmx5IElFXG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gc3R5bGVIYWNrcygpIC8qOiBPYmplY3QqLyB7XG5cdCAgdmFyIGNoaWxkU3R5bGUgLyo6IE9iamVjdCovID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuXHQgIC8vIFdvcmthcm91bmQgSUUgcG9pbnRlciBldmVudHM7IHNlZSAjNTFcblx0ICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzUxI2lzc3VlY29tbWVudC0xMDM0ODgyNzhcblx0ICByZXR1cm4gX2V4dGVuZHMoe1xuXHQgICAgdG91Y2hBY3Rpb246ICdub25lJ1xuXHQgIH0sIGNoaWxkU3R5bGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGVsIC8qOiBIVE1MRWxlbWVudCovLCBjbGFzc05hbWUgLyo6IHN0cmluZyovKSB7XG5cdCAgaWYgKGVsLmNsYXNzTGlzdCkge1xuXHQgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpZiAoIWVsLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKD8hXFxcXFMpJykpKSB7XG5cdCAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ2xhc3NOYW1lKGVsIC8qOiBIVE1MRWxlbWVudCovLCBjbGFzc05hbWUgLyo6IHN0cmluZyovKSB7XG5cdCAgaWYgKGVsLmNsYXNzTGlzdCkge1xuXHQgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKD8hXFxcXFMpJywgJ2cnKSwgJycpO1xuXHQgIH1cblx0fVxuXG5cdC8qOjogaW1wb3J0IHR5cGUgRHJhZ2dhYmxlIGZyb20gJy4uL0RyYWdnYWJsZSc7Ki9cblx0Lyo6OiBpbXBvcnQgdHlwZSB7Qm91bmRzLCBDb250cm9sUG9zaXRpb24sIERyYWdnYWJsZURhdGEsIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi90eXBlcyc7Ki9cblx0Lyo6OiBpbXBvcnQgdHlwZSBEcmFnZ2FibGVDb3JlIGZyb20gJy4uL0RyYWdnYWJsZUNvcmUnOyovXG5cblxuXHRmdW5jdGlvbiBnZXRCb3VuZFBvc2l0aW9uKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlKi8sIHggLyo6IG51bWJlciovLCB5IC8qOiBudW1iZXIqLykgLyo6IFtudW1iZXIsIG51bWJlcl0qLyB7XG5cdCAgLy8gSWYgbm8gYm91bmRzLCBzaG9ydC1jaXJjdWl0IGFuZCBtb3ZlIG9uXG5cdCAgaWYgKCFkcmFnZ2FibGUucHJvcHMuYm91bmRzKSByZXR1cm4gW3gsIHldO1xuXG5cdCAgLy8gQ2xvbmUgbmV3IGJvdW5kc1xuXHQgIHZhciBib3VuZHMgPSBkcmFnZ2FibGUucHJvcHMuYm91bmRzO1xuXG5cdCAgYm91bmRzID0gdHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycgPyBib3VuZHMgOiBjbG9uZUJvdW5kcyhib3VuZHMpO1xuXHQgIHZhciBub2RlID0gZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcblxuXHQgIGlmICh0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJykge1xuXHQgICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG5cblx0ICAgIHZhciBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdCAgICB2YXIgYm91bmROb2RlID0gdm9pZCAwO1xuXHQgICAgaWYgKGJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcblx0ICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgYm91bmROb2RlID0gb3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvdW5kcyk7XG5cdCAgICB9XG5cdCAgICBpZiAoIShib3VuZE5vZGUgaW5zdGFuY2VvZiBvd25lcldpbmRvdy5IVE1MRWxlbWVudCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3VuZHMgc2VsZWN0b3IgXCInICsgYm91bmRzICsgJ1wiIGNvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQuJyk7XG5cdCAgICB9XG5cdCAgICB2YXIgbm9kZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0ICAgIHZhciBib3VuZE5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUoYm91bmROb2RlKTtcblx0ICAgIC8vIENvbXB1dGUgYm91bmRzLiBUaGlzIGlzIGEgcGFpbiB3aXRoIHBhZGRpbmcgYW5kIG9mZnNldHMgYnV0IHRoaXMgZ2V0cyBpdCBleGFjdGx5IHJpZ2h0LlxuXHQgICAgYm91bmRzID0ge1xuXHQgICAgICBsZWZ0OiAtbm9kZS5vZmZzZXRMZWZ0ICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdMZWZ0KSArIGludChub2RlU3R5bGUubWFyZ2luTGVmdCksXG5cdCAgICAgIHRvcDogLW5vZGUub2Zmc2V0VG9wICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdUb3ApICsgaW50KG5vZGVTdHlsZS5tYXJnaW5Ub3ApLFxuXHQgICAgICByaWdodDogaW5uZXJXaWR0aChib3VuZE5vZGUpIC0gb3V0ZXJXaWR0aChub2RlKSAtIG5vZGUub2Zmc2V0TGVmdCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nUmlnaHQpIC0gaW50KG5vZGVTdHlsZS5tYXJnaW5SaWdodCksXG5cdCAgICAgIGJvdHRvbTogaW5uZXJIZWlnaHQoYm91bmROb2RlKSAtIG91dGVySGVpZ2h0KG5vZGUpIC0gbm9kZS5vZmZzZXRUb3AgKyBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ0JvdHRvbSkgLSBpbnQobm9kZVN0eWxlLm1hcmdpbkJvdHRvbSlcblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgLy8gS2VlcCB4IGFuZCB5IGJlbG93IHJpZ2h0IGFuZCBib3R0b20gbGltaXRzLi4uXG5cdCAgaWYgKGlzTnVtKGJvdW5kcy5yaWdodCkpIHggPSBNYXRoLm1pbih4LCBib3VuZHMucmlnaHQpO1xuXHQgIGlmIChpc051bShib3VuZHMuYm90dG9tKSkgeSA9IE1hdGgubWluKHksIGJvdW5kcy5ib3R0b20pO1xuXG5cdCAgLy8gQnV0IGFib3ZlIGxlZnQgYW5kIHRvcCBsaW1pdHMuXG5cdCAgaWYgKGlzTnVtKGJvdW5kcy5sZWZ0KSkgeCA9IE1hdGgubWF4KHgsIGJvdW5kcy5sZWZ0KTtcblx0ICBpZiAoaXNOdW0oYm91bmRzLnRvcCkpIHkgPSBNYXRoLm1heCh5LCBib3VuZHMudG9wKTtcblxuXHQgIHJldHVybiBbeCwgeV07XG5cdH1cblxuXHRmdW5jdGlvbiBzbmFwVG9HcmlkKGdyaWQgLyo6IFtudW1iZXIsIG51bWJlcl0qLywgcGVuZGluZ1ggLyo6IG51bWJlciovLCBwZW5kaW5nWSAvKjogbnVtYmVyKi8pIC8qOiBbbnVtYmVyLCBudW1iZXJdKi8ge1xuXHQgIHZhciB4ID0gTWF0aC5yb3VuZChwZW5kaW5nWCAvIGdyaWRbMF0pICogZ3JpZFswXTtcblx0ICB2YXIgeSA9IE1hdGgucm91bmQocGVuZGluZ1kgLyBncmlkWzFdKSAqIGdyaWRbMV07XG5cdCAgcmV0dXJuIFt4LCB5XTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbkRyYWdYKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlKi8pIC8qOiBib29sZWFuKi8ge1xuXHQgIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneCc7XG5cdH1cblxuXHRmdW5jdGlvbiBjYW5EcmFnWShkcmFnZ2FibGUgLyo6IERyYWdnYWJsZSovKSAvKjogYm9vbGVhbiovIHtcblx0ICByZXR1cm4gZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICdib3RoJyB8fCBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ3knO1xuXHR9XG5cblx0Ly8gR2V0IHt4LCB5fSBwb3NpdGlvbnMgZnJvbSBldmVudC5cblx0ZnVuY3Rpb24gZ2V0Q29udHJvbFBvc2l0aW9uKGUgLyo6IE1vdXNlVG91Y2hFdmVudCovLCB0b3VjaElkZW50aWZpZXIgLyo6ID9udW1iZXIqLywgZHJhZ2dhYmxlQ29yZSAvKjogRHJhZ2dhYmxlQ29yZSovKSAvKjogP0NvbnRyb2xQb3NpdGlvbiovIHtcblx0ICB2YXIgdG91Y2hPYmogPSB0eXBlb2YgdG91Y2hJZGVudGlmaWVyID09PSAnbnVtYmVyJyA/IGdldFRvdWNoKGUsIHRvdWNoSWRlbnRpZmllcikgOiBudWxsO1xuXHQgIGlmICh0eXBlb2YgdG91Y2hJZGVudGlmaWVyID09PSAnbnVtYmVyJyAmJiAhdG91Y2hPYmopIHJldHVybiBudWxsOyAvLyBub3QgdGhlIHJpZ2h0IHRvdWNoXG5cdCAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGVDb3JlKTtcblx0ICAvLyBVc2VyIGNhbiBwcm92aWRlIGFuIG9mZnNldFBhcmVudCBpZiBkZXNpcmVkLlxuXHQgIHZhciBvZmZzZXRQYXJlbnQgPSBkcmFnZ2FibGVDb3JlLnByb3BzLm9mZnNldFBhcmVudCB8fCBub2RlLm9mZnNldFBhcmVudCB8fCBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcblx0ICByZXR1cm4gb2Zmc2V0WFlGcm9tUGFyZW50KHRvdWNoT2JqIHx8IGUsIG9mZnNldFBhcmVudCk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYW4gZGF0YSBvYmplY3QgZXhwb3NlZCBieSA8RHJhZ2dhYmxlQ29yZT4ncyBldmVudHNcblx0ZnVuY3Rpb24gY3JlYXRlQ29yZURhdGEoZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGVDb3JlKi8sIHggLyo6IG51bWJlciovLCB5IC8qOiBudW1iZXIqLykgLyo6IERyYWdnYWJsZURhdGEqLyB7XG5cdCAgdmFyIHN0YXRlID0gZHJhZ2dhYmxlLnN0YXRlO1xuXHQgIHZhciBpc1N0YXJ0ID0gIWlzTnVtKHN0YXRlLmxhc3RYKTtcblx0ICB2YXIgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cblx0ICBpZiAoaXNTdGFydCkge1xuXHQgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgbW92ZSwgdXNlIHRoZSB4IGFuZCB5IGFzIGxhc3QgY29vcmRzLlxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgbm9kZTogbm9kZSxcblx0ICAgICAgZGVsdGFYOiAwLCBkZWx0YVk6IDAsXG5cdCAgICAgIGxhc3RYOiB4LCBsYXN0WTogeSxcblx0ICAgICAgeDogeCwgeTogeVxuXHQgICAgfTtcblx0ICB9IGVsc2Uge1xuXHQgICAgLy8gT3RoZXJ3aXNlIGNhbGN1bGF0ZSBwcm9wZXIgdmFsdWVzLlxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgbm9kZTogbm9kZSxcblx0ICAgICAgZGVsdGFYOiB4IC0gc3RhdGUubGFzdFgsIGRlbHRhWTogeSAtIHN0YXRlLmxhc3RZLFxuXHQgICAgICBsYXN0WDogc3RhdGUubGFzdFgsIGxhc3RZOiBzdGF0ZS5sYXN0WSxcblx0ICAgICAgeDogeCwgeTogeVxuXHQgICAgfTtcblx0ICB9XG5cdH1cblxuXHQvLyBDcmVhdGUgYW4gZGF0YSBleHBvc2VkIGJ5IDxEcmFnZ2FibGU+J3MgZXZlbnRzXG5cdGZ1bmN0aW9uIGNyZWF0ZURyYWdnYWJsZURhdGEoZHJhZ2dhYmxlIC8qOiBEcmFnZ2FibGUqLywgY29yZURhdGEgLyo6IERyYWdnYWJsZURhdGEqLykgLyo6IERyYWdnYWJsZURhdGEqLyB7XG5cdCAgdmFyIHNjYWxlID0gZHJhZ2dhYmxlLnByb3BzLnNjYWxlO1xuXHQgIHJldHVybiB7XG5cdCAgICBub2RlOiBjb3JlRGF0YS5ub2RlLFxuXHQgICAgeDogZHJhZ2dhYmxlLnN0YXRlLnggKyBjb3JlRGF0YS5kZWx0YVggLyBzY2FsZSxcblx0ICAgIHk6IGRyYWdnYWJsZS5zdGF0ZS55ICsgY29yZURhdGEuZGVsdGFZIC8gc2NhbGUsXG5cdCAgICBkZWx0YVg6IGNvcmVEYXRhLmRlbHRhWCAvIHNjYWxlLFxuXHQgICAgZGVsdGFZOiBjb3JlRGF0YS5kZWx0YVkgLyBzY2FsZSxcblx0ICAgIGxhc3RYOiBkcmFnZ2FibGUuc3RhdGUueCxcblx0ICAgIGxhc3RZOiBkcmFnZ2FibGUuc3RhdGUueVxuXHQgIH07XG5cdH1cblxuXHQvLyBBIGxvdCBmYXN0ZXIgdGhhbiBzdHJpbmdpZnkvcGFyc2Vcblx0ZnVuY3Rpb24gY2xvbmVCb3VuZHMoYm91bmRzIC8qOiBCb3VuZHMqLykgLyo6IEJvdW5kcyovIHtcblx0ICByZXR1cm4ge1xuXHQgICAgbGVmdDogYm91bmRzLmxlZnQsXG5cdCAgICB0b3A6IGJvdW5kcy50b3AsXG5cdCAgICByaWdodDogYm91bmRzLnJpZ2h0LFxuXHQgICAgYm90dG9tOiBib3VuZHMuYm90dG9tXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpbmRET01Ob2RlKGRyYWdnYWJsZSAvKjogRHJhZ2dhYmxlIHwgRHJhZ2dhYmxlQ29yZSovKSAvKjogSFRNTEVsZW1lbnQqLyB7XG5cdCAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpO1xuXHQgIGlmICghbm9kZSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT46IFVubW91bnRlZCBkdXJpbmcgZXZlbnQhJyk7XG5cdCAgfVxuXHQgIC8vICRGbG93SWdub3JlIHdlIGNhbid0IGFzc2VydCBvbiBIVE1MRWxlbWVudCBkdWUgdG8gdGVzdHMuLi4gRklYTUVcblx0ICByZXR1cm4gbm9kZTtcblx0fVxuXG5cdC8qZXNsaW50IG5vLWNvbnNvbGU6MCovXG5cdGZ1bmN0aW9uIGxvZygpIHtcblx0fVxuXG5cdC8qOjogaW1wb3J0IHR5cGUge0V2ZW50SGFuZGxlciwgTW91c2VUb3VjaEV2ZW50fSBmcm9tICcuL3V0aWxzL3R5cGVzJzsqL1xuXG5cblx0Ly8gU2ltcGxlIGFic3RyYWN0aW9uIGZvciBkcmFnZ2luZyBldmVudHMgbmFtZXMuXG5cdC8qOjogaW1wb3J0IHR5cGUge0VsZW1lbnQgYXMgUmVhY3RFbGVtZW50fSBmcm9tICdyZWFjdCc7Ki9cblx0dmFyIGV2ZW50c0ZvciA9IHtcblx0ICB0b3VjaDoge1xuXHQgICAgc3RhcnQ6ICd0b3VjaHN0YXJ0Jyxcblx0ICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuXHQgICAgc3RvcDogJ3RvdWNoZW5kJ1xuXHQgIH0sXG5cdCAgbW91c2U6IHtcblx0ICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcblx0ICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuXHQgICAgc3RvcDogJ21vdXNldXAnXG5cdCAgfVxuXHR9O1xuXG5cdC8vIERlZmF1bHQgdG8gbW91c2UgZXZlbnRzLlxuXHR2YXIgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlO1xuXG5cdC8qOjogdHlwZSBEcmFnZ2FibGVDb3JlU3RhdGUgPSB7XG5cdCAgZHJhZ2dpbmc6IGJvb2xlYW4sXG5cdCAgbGFzdFg6IG51bWJlcixcblx0ICBsYXN0WTogbnVtYmVyLFxuXHQgIHRvdWNoSWRlbnRpZmllcjogP251bWJlclxuXHR9OyovXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlQm91bmRzID0ge1xuXHQgIGxlZnQ6IG51bWJlcixcblx0ICByaWdodDogbnVtYmVyLFxuXHQgIHRvcDogbnVtYmVyLFxuXHQgIGJvdHRvbTogbnVtYmVyLFxuXHR9OyovXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlRGF0YSA9IHtcblx0ICBub2RlOiBIVE1MRWxlbWVudCxcblx0ICB4OiBudW1iZXIsIHk6IG51bWJlcixcblx0ICBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXIsXG5cdCAgbGFzdFg6IG51bWJlciwgbGFzdFk6IG51bWJlcixcblx0fTsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB2b2lkOyovXG5cdC8qOjogZXhwb3J0IHR5cGUgQ29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlciwgeTogbnVtYmVyfTsqL1xuXHQvKjo6IGV4cG9ydCB0eXBlIFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlcnxzdHJpbmcsIHk6IG51bWJlcnxzdHJpbmd9OyovXG5cblxuXHQvL1xuXHQvLyBEZWZpbmUgPERyYWdnYWJsZUNvcmU+LlxuXHQvL1xuXHQvLyA8RHJhZ2dhYmxlQ29yZT4gaXMgZm9yIGFkdmFuY2VkIHVzYWdlIG9mIDxEcmFnZ2FibGU+LiBJdCBtYWludGFpbnMgbWluaW1hbCBpbnRlcm5hbCBzdGF0ZSBzbyBpdCBjYW5cblx0Ly8gd29yayB3ZWxsIHdpdGggbGlicmFyaWVzIHRoYXQgcmVxdWlyZSBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgZWxlbWVudC5cblx0Ly9cblxuXHQvKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZUNvcmVQcm9wcyA9IHtcblx0ICBhbGxvd0FueUNsaWNrOiBib29sZWFuLFxuXHQgIGNhbmNlbDogc3RyaW5nLFxuXHQgIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ8YW55Pixcblx0ICBkaXNhYmxlZDogYm9vbGVhbixcblx0ICBlbmFibGVVc2VyU2VsZWN0SGFjazogYm9vbGVhbixcblx0ICBvZmZzZXRQYXJlbnQ6IEhUTUxFbGVtZW50LFxuXHQgIGdyaWQ6IFtudW1iZXIsIG51bWJlcl0sXG5cdCAgaGFuZGxlOiBzdHJpbmcsXG5cdCAgb25TdGFydDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuXHQgIG9uRHJhZzogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuXHQgIG9uU3RvcDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuXHQgIG9uTW91c2VEb3duOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCxcblx0fTsqL1xuXG5cdHZhciBEcmFnZ2FibGVDb3JlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0ICBpbmhlcml0cyhEcmFnZ2FibGVDb3JlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQgIGZ1bmN0aW9uIERyYWdnYWJsZUNvcmUoKSB7XG5cdCAgICB2YXIgX3JlZjtcblxuXHQgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuXHQgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ2dhYmxlQ29yZSk7XG5cblx0ICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IERyYWdnYWJsZUNvcmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnZ2FibGVDb3JlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG5cdCAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblx0ICAgICAgLy8gVXNlZCB3aGlsZSBkcmFnZ2luZyB0byBkZXRlcm1pbmUgZGVsdGFzLlxuXHQgICAgICBsYXN0WDogTmFOLCBsYXN0WTogTmFOLFxuXHQgICAgICB0b3VjaElkZW50aWZpZXI6IG51bGxcblx0ICAgIH0sIF90aGlzLmhhbmRsZURyYWdTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gYXR0YWNoIGV2ZW50IGhhbmRsZXJzIG9uIHRvcCBvZiB0aGlzIG9uZS5cblx0ICAgICAgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZSk7XG5cblx0ICAgICAgLy8gT25seSBhY2NlcHQgbGVmdC1jbGlja3MuXG5cdCAgICAgIGlmICghX3RoaXMucHJvcHMuYWxsb3dBbnlDbGljayAmJiB0eXBlb2YgZS5idXR0b24gPT09ICdudW1iZXInICYmIGUuYnV0dG9uICE9PSAwKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgLy8gR2V0IG5vZGVzLiBCZSBzdXJlIHRvIGdyYWIgcmVsYXRpdmUgZG9jdW1lbnQgKGNvdWxkIGJlIGlmcmFtZWQpXG5cdCAgICAgIHZhciB0aGlzTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblx0ICAgICAgaWYgKCF0aGlzTm9kZSB8fCAhdGhpc05vZGUub3duZXJEb2N1bWVudCB8fCAhdGhpc05vZGUub3duZXJEb2N1bWVudC5ib2R5KSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT4gbm90IG1vdW50ZWQgb24gRHJhZ1N0YXJ0IScpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpc05vZGUub3duZXJEb2N1bWVudDtcblxuXHQgICAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXG5cblx0ICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkIHx8ICEoZS50YXJnZXQgaW5zdGFuY2VvZiBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lk5vZGUpIHx8IF90aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCBfdGhpcy5wcm9wcy5oYW5kbGUsIHRoaXNOb2RlKSB8fCBfdGhpcy5wcm9wcy5jYW5jZWwgJiYgbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCBfdGhpcy5wcm9wcy5jYW5jZWwsIHRoaXNOb2RlKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFNldCB0b3VjaCBpZGVudGlmaWVyIGluIGNvbXBvbmVudCBzdGF0ZSBpZiB0aGlzIGlzIGEgdG91Y2ggZXZlbnQuIFRoaXMgYWxsb3dzIHVzIHRvXG5cdCAgICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxuXHQgICAgICAvLyB0b3VjaHBvaW50IHdhcyBzZXQgdG8gdGhpcyBlbGVtZW50LlxuXHQgICAgICB2YXIgdG91Y2hJZGVudGlmaWVyID0gZ2V0VG91Y2hJZGVudGlmaWVyKGUpO1xuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoSWRlbnRpZmllcjogdG91Y2hJZGVudGlmaWVyIH0pO1xuXG5cdCAgICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cblx0ICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIHRvdWNoSWRlbnRpZmllciwgX3RoaXMpO1xuXHQgICAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuOyAvLyBub3QgcG9zc2libGUgYnV0IHNhdGlzZmllcyBmbG93XG5cdCAgICAgIHZhciB4ID0gcG9zaXRpb24ueCxcblx0ICAgICAgICAgIHkgPSBwb3NpdGlvbi55O1xuXG5cdCAgICAgIC8vIENyZWF0ZSBhbiBldmVudCBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgcGFyZW50cyBuZWVkIHRvIG1ha2UgYSBkZWNpc2lvbiBoZXJlLlxuXG5cdCAgICAgIHZhciBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YShfdGhpcywgeCwgeSk7XG5cblx0ICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCBjYW5jZWwuXG5cdCAgICAgIGxvZygnY2FsbGluZycsIF90aGlzLnByb3BzLm9uU3RhcnQpO1xuXHQgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gX3RoaXMucHJvcHMub25TdGFydChlLCBjb3JlRXZlbnQpO1xuXHQgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdCAgICAgIC8vIEFkZCBhIHN0eWxlIHRvIHRoZSBib2R5IHRvIGRpc2FibGUgdXNlci1zZWxlY3QuIFRoaXMgcHJldmVudHMgdGV4dCBmcm9tXG5cdCAgICAgIC8vIGJlaW5nIHNlbGVjdGVkIGFsbCBvdmVyIHRoZSBwYWdlLlxuXHQgICAgICBpZiAoX3RoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIGFkZFVzZXJTZWxlY3RTdHlsZXMob3duZXJEb2N1bWVudCk7XG5cblx0ICAgICAgLy8gSW5pdGlhdGUgZHJhZ2dpbmcuIFNldCB0aGUgY3VycmVudCB4IGFuZCB5IGFzIG9mZnNldHNcblx0ICAgICAgLy8gc28gd2Uga25vdyBob3cgbXVjaCB3ZSd2ZSBtb3ZlZCBkdXJpbmcgdGhlIGRyYWcuIFRoaXMgYWxsb3dzIHVzXG5cdCAgICAgIC8vIHRvIGRyYWcgZWxlbWVudHMgYXJvdW5kIGV2ZW4gaWYgdGhleSBoYXZlIGJlZW4gbW92ZWQsIHdpdGhvdXQgaXNzdWUuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcblxuXHQgICAgICAgIGxhc3RYOiB4LFxuXHQgICAgICAgIGxhc3RZOiB5XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIC8vIEFkZCBldmVudHMgdG8gdGhlIGRvY3VtZW50IGRpcmVjdGx5IHNvIHdlIGNhdGNoIHdoZW4gdGhlIHVzZXIncyBtb3VzZS90b3VjaCBtb3ZlcyBvdXRzaWRlIG9mXG5cdCAgICAgIC8vIHRoaXMgZWxlbWVudC4gV2UgdXNlIGRpZmZlcmVudCBldmVudHMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgZGV0ZWN0ZWQgdGhhdCB0aGlzXG5cdCAgICAgIC8vIGlzIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UuXG5cdCAgICAgIGFkZEV2ZW50KG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCBfdGhpcy5oYW5kbGVEcmFnKTtcblx0ICAgICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIF90aGlzLmhhbmRsZURyYWdTdG9wKTtcblx0ICAgIH0sIF90aGlzLmhhbmRsZURyYWcgPSBmdW5jdGlvbiAoZSkge1xuXG5cdCAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIG1vYmlsZSBkZXZpY2VzLCBsaWtlIGlwYWQvaXBob25lLlxuXHQgICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdCAgICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cblx0ICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIF90aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgX3RoaXMpO1xuXHQgICAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuO1xuXHQgICAgICB2YXIgeCA9IHBvc2l0aW9uLngsXG5cdCAgICAgICAgICB5ID0gcG9zaXRpb24ueTtcblxuXHQgICAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxuXG5cdCAgICAgIGlmIChBcnJheS5pc0FycmF5KF90aGlzLnByb3BzLmdyaWQpKSB7XG5cdCAgICAgICAgdmFyIF9kZWx0YVggPSB4IC0gX3RoaXMuc3RhdGUubGFzdFgsXG5cdCAgICAgICAgICAgIF9kZWx0YVkgPSB5IC0gX3RoaXMuc3RhdGUubGFzdFk7XG5cblx0ICAgICAgICB2YXIgX3NuYXBUb0dyaWQgPSBzbmFwVG9HcmlkKF90aGlzLnByb3BzLmdyaWQsIF9kZWx0YVgsIF9kZWx0YVkpO1xuXG5cdCAgICAgICAgdmFyIF9zbmFwVG9HcmlkMiA9IHNsaWNlZFRvQXJyYXkoX3NuYXBUb0dyaWQsIDIpO1xuXG5cdCAgICAgICAgX2RlbHRhWCA9IF9zbmFwVG9HcmlkMlswXTtcblx0ICAgICAgICBfZGVsdGFZID0gX3NuYXBUb0dyaWQyWzFdO1xuXG5cdCAgICAgICAgaWYgKCFfZGVsdGFYICYmICFfZGVsdGFZKSByZXR1cm47IC8vIHNraXAgdXNlbGVzcyBkcmFnXG5cdCAgICAgICAgeCA9IF90aGlzLnN0YXRlLmxhc3RYICsgX2RlbHRhWCwgeSA9IF90aGlzLnN0YXRlLmxhc3RZICsgX2RlbHRhWTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YShfdGhpcywgeCwgeSk7XG5cblx0ICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cblx0ICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuXHQgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAvLyAkRmxvd0lnbm9yZVxuXHQgICAgICAgICAgX3RoaXMuaGFuZGxlRHJhZ1N0b3AobmV3IE1vdXNlRXZlbnQoJ21vdXNldXAnKSk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAvLyBPbGQgYnJvd3NlcnNcblx0ICAgICAgICAgIHZhciBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJykgLyo6IGFueSovKSAvKjogTW91c2VUb3VjaEV2ZW50Ki8pO1xuXHQgICAgICAgICAgLy8gSSBzZWUgd2h5IHRoaXMgaW5zYW5pdHkgd2FzIGRlcHJlY2F0ZWRcblx0ICAgICAgICAgIC8vICRGbG93SWdub3JlXG5cdCAgICAgICAgICBldmVudC5pbml0TW91c2VFdmVudCgnbW91c2V1cCcsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHQgICAgICAgICAgX3RoaXMuaGFuZGxlRHJhZ1N0b3AoZXZlbnQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgbGFzdFg6IHgsXG5cdCAgICAgICAgbGFzdFk6IHlcblx0ICAgICAgfSk7XG5cdCAgICB9LCBfdGhpcy5oYW5kbGVEcmFnU3RvcCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGlmICghX3RoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybjtcblxuXHQgICAgICB2YXIgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgX3RoaXMuc3RhdGUudG91Y2hJZGVudGlmaWVyLCBfdGhpcyk7XG5cdCAgICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSByZXR1cm47XG5cdCAgICAgIHZhciB4ID0gcG9zaXRpb24ueCxcblx0ICAgICAgICAgIHkgPSBwb3NpdGlvbi55O1xuXG5cdCAgICAgIHZhciBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YShfdGhpcywgeCwgeSk7XG5cblx0ICAgICAgdmFyIHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHQgICAgICBpZiAodGhpc05vZGUpIHtcblx0ICAgICAgICAvLyBSZW1vdmUgdXNlci1zZWxlY3QgaGFja1xuXHQgICAgICAgIGlmIChfdGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyh0aGlzTm9kZS5vd25lckRvY3VtZW50KTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFJlc2V0IHRoZSBlbC5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblx0ICAgICAgICBsYXN0WDogTmFOLFxuXHQgICAgICAgIGxhc3RZOiBOYU5cblx0ICAgICAgfSk7XG5cblx0ICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyXG5cdCAgICAgIF90aGlzLnByb3BzLm9uU3RvcChlLCBjb3JlRXZlbnQpO1xuXG5cdCAgICAgIGlmICh0aGlzTm9kZSkge1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KHRoaXNOb2RlLm93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCBfdGhpcy5oYW5kbGVEcmFnKTtcblx0ICAgICAgICByZW1vdmVFdmVudCh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgX3RoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuXHQgICAgICB9XG5cdCAgICB9LCBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTsgLy8gb24gdG91Y2hzY3JlZW4gbGFwdG9wcyB3ZSBjb3VsZCBzd2l0Y2ggYmFjayB0byBtb3VzZVxuXG5cdCAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSk7XG5cdCAgICB9LCBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7XG5cblx0ICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuXHQgICAgfSwgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG5cdCAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuXHQgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuXHQgICAgfSwgX3RoaXMub25Ub3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuXHQgICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IudG91Y2g7XG5cblx0ICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuXHQgICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcblx0ICB9XG5cblx0ICBjcmVhdGVDbGFzcyhEcmFnZ2FibGVDb3JlLCBbe1xuXHQgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHQgICAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxuXHQgICAgICAvLyBzb21lIGJyb3dzZXIgcXVpcmsgY2F1c2VkIGEgdG91Y2ggZXZlbnQgdG8gZmlyZSBkdXJpbmcgYSBtb3VzZSBtb3ZlLCBvciB2aWNlIHZlcnNhLlxuXHQgICAgICB2YXIgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXNOb2RlKSB7XG5cdCAgICAgICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzTm9kZS5vd25lckRvY3VtZW50O1xuXG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG5cdCAgICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuXHQgICAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcblx0ICAgICAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyhvd25lckRvY3VtZW50KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBTYW1lIGFzIG9uTW91c2VEb3duIChzdGFydCBkcmFnKSwgYnV0IG5vdyBjb25zaWRlciB0aGlzIGEgdG91Y2ggZGV2aWNlLlxuXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxuXHQgICAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxuXHQgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcblx0ICAgICAgICBzdHlsZTogc3R5bGVIYWNrcyh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlKSxcblxuXHQgICAgICAgIC8vIE5vdGU6IG1vdXNlTW92ZSBoYW5kbGVyIGlzIGF0dGFjaGVkIHRvIGRvY3VtZW50IHNvIGl0IHdpbGwgc3RpbGwgZnVuY3Rpb25cblx0ICAgICAgICAvLyB3aGVuIHRoZSB1c2VyIGRyYWdzIHF1aWNrbHkgYW5kIGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuXHQgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuXHQgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQsXG5cdCAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcblx0ICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uVG91Y2hFbmRcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHQgIHJldHVybiBEcmFnZ2FibGVDb3JlO1xuXHR9KFJlYWN0LkNvbXBvbmVudCk7XG5cblx0RHJhZ2dhYmxlQ29yZS5kaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGVDb3JlJztcblx0RHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMgPSB7XG5cdCAgLyoqXG5cdCAgICogYGFsbG93QW55Q2xpY2tgIGFsbG93cyBkcmFnZ2luZyB1c2luZyBhbnkgbW91c2UgYnV0dG9uLlxuXHQgICAqIEJ5IGRlZmF1bHQsIHdlIG9ubHkgYWNjZXB0IHRoZSBsZWZ0IGJ1dHRvbi5cblx0ICAgKlxuXHQgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXG5cdCAgICovXG5cdCAgYWxsb3dBbnlDbGljazogcHJvcFR5cGVzLmJvb2wsXG5cblx0ICAvKipcblx0ICAgKiBgZGlzYWJsZWRgLCBpZiB0cnVlLCBzdG9wcyB0aGUgPERyYWdnYWJsZT4gZnJvbSBkcmFnZ2luZy4gQWxsIGhhbmRsZXJzLFxuXHQgICAqIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgb25Nb3VzZURvd25gLCB3aWxsIG5vdCBmaXJlLlxuXHQgICAqL1xuXHQgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcblxuXHQgIC8qKlxuXHQgICAqIEJ5IGRlZmF1bHQsIHdlIGFkZCAndXNlci1zZWxlY3Q6bm9uZScgYXR0cmlidXRlcyB0byB0aGUgZG9jdW1lbnQgYm9keVxuXHQgICAqIHRvIHByZXZlbnQgdWdseSB0ZXh0IHNlbGVjdGlvbiBkdXJpbmcgZHJhZy4gSWYgdGhpcyBpcyBjYXVzaW5nIHByb2JsZW1zXG5cdCAgICogZm9yIHlvdXIgYXBwLCBzZXQgdGhpcyB0byBgZmFsc2VgLlxuXHQgICAqL1xuXHQgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBwcm9wVHlwZXMuYm9vbCxcblxuXHQgIC8qKlxuXHQgICAqIGBvZmZzZXRQYXJlbnRgLCBpZiBzZXQsIHVzZXMgdGhlIHBhc3NlZCBET00gbm9kZSB0byBjb21wdXRlIGRyYWcgb2Zmc2V0c1xuXHQgICAqIGluc3RlYWQgb2YgdXNpbmcgdGhlIHBhcmVudCBub2RlLlxuXHQgICAqL1xuXHQgIG9mZnNldFBhcmVudDogZnVuY3Rpb24gb2Zmc2V0UGFyZW50KHByb3BzIC8qOiBEcmFnZ2FibGVDb3JlUHJvcHMqLywgcHJvcE5hbWUgLyo6ICRLZXlzPERyYWdnYWJsZUNvcmVQcm9wcz4qLykge1xuXHQgICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGVcXCdzIG9mZnNldFBhcmVudCBtdXN0IGJlIGEgRE9NIE5vZGUuJyk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8qKlxuXHQgICAqIGBncmlkYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCBkcmFnZ2luZyBzaG91bGQgc25hcCB0by5cblx0ICAgKi9cblx0ICBncmlkOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMubnVtYmVyKSxcblxuXHQgIC8qKlxuXHQgICAqIGBzY2FsZWAgc3BlY2lmaWVzIHRoZSBzY2FsZSBvZiB0aGUgYXJlYSB5b3UgYXJlIGRyYWdnaW5nIGluc2lkZSBvZi4gSXQgYWxsb3dzXG5cdCAgICogdGhlIGRyYWcgZGVsdGFzIHRvIHNjYWxlIGNvcnJlY3RseSB3aXRoIGhvdyBmYXIgem9vbWVkIGluL291dCB5b3UgYXJlLlxuXHQgICAqL1xuXHQgIHNjYWxlOiBwcm9wVHlwZXMubnVtYmVyLFxuXG5cdCAgLyoqXG5cdCAgICogYGhhbmRsZWAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCBhcyB0aGUgaGFuZGxlIHRoYXQgaW5pdGlhdGVzIGRyYWcuXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgcmV0dXJuIChcblx0ICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmhhbmRsZVwiPlxuXHQgICAqICAgICAgICAgICAgICA8ZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVcIj5DbGljayBtZSB0byBkcmFnPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXMgc29tZSBvdGhlciBjb250ZW50PC9kaXY+XG5cdCAgICogICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICk7XG5cdCAgICogICAgICAgfVxuXHQgICAqICAgfSk7XG5cdCAgICogYGBgXG5cdCAgICovXG5cdCAgaGFuZGxlOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG5cdCAgLyoqXG5cdCAgICogYGNhbmNlbGAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCB0byBwcmV2ZW50IGRyYWcgaW5pdGlhbGl6YXRpb24uXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgICByZXR1cm4oXG5cdCAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGNhbmNlbD1cIi5jYW5jZWxcIj5cblx0ICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5Zb3UgY2FuJ3QgZHJhZyBmcm9tIGhlcmU8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXY+RHJhZ2dpbmcgaGVyZSB3b3JrcyBmaW5lPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICAgKTtcblx0ICAgKiAgICAgICB9XG5cdCAgICogICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBjYW5jZWw6IHByb3BUeXBlcy5zdHJpbmcsXG5cblx0ICAvKipcblx0ICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdGFydHMuXG5cdCAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IHByb3BUeXBlcy5mdW5jLFxuXG5cdCAgLyoqXG5cdCAgICogQ2FsbGVkIHdoaWxlIGRyYWdnaW5nLlxuXHQgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cblx0ICAgKi9cblx0ICBvbkRyYWc6IHByb3BUeXBlcy5mdW5jLFxuXG5cdCAgLyoqXG5cdCAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RvcHMuXG5cdCAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCB0aGUgZHJhZyB3aWxsIHJlbWFpbiBhY3RpdmUuXG5cdCAgICovXG5cdCAgb25TdG9wOiBwcm9wVHlwZXMuZnVuYyxcblxuXHQgIC8qKlxuXHQgICAqIEEgd29ya2Fyb3VuZCBvcHRpb24gd2hpY2ggY2FuIGJlIHBhc3NlZCBpZiBvbk1vdXNlRG93biBuZWVkcyB0byBiZSBhY2Nlc3NlZCxcblx0ICAgKiBzaW5jZSBpdCdsbCBhbHdheXMgYmUgYmxvY2tlZCAoYXMgdGhlcmUgaXMgaW50ZXJuYWwgdXNlIG9mIG9uTW91c2VEb3duKVxuXHQgICAqL1xuXHQgIG9uTW91c2VEb3duOiBwcm9wVHlwZXMuZnVuYyxcblxuXHQgIC8qKlxuXHQgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cblx0ICAgKi9cblx0ICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcblx0ICBzdHlsZTogZG9udFNldE1lLFxuXHQgIHRyYW5zZm9ybTogZG9udFNldE1lXG5cdH07XG5cdERyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzID0ge1xuXHQgIGFsbG93QW55Q2xpY2s6IGZhbHNlLCAvLyBieSBkZWZhdWx0IG9ubHkgYWNjZXB0IGxlZnQgY2xpY2tcblx0ICBjYW5jZWw6IG51bGwsXG5cdCAgZGlzYWJsZWQ6IGZhbHNlLFxuXHQgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiB0cnVlLFxuXHQgIG9mZnNldFBhcmVudDogbnVsbCxcblx0ICBoYW5kbGU6IG51bGwsXG5cdCAgZ3JpZDogbnVsbCxcblx0ICB0cmFuc2Zvcm06IG51bGwsXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHt9LFxuXHQgIG9uRHJhZzogZnVuY3Rpb24gb25EcmFnKCkge30sXG5cdCAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7fSxcblx0ICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oKSB7fVxuXHR9O1xuXG5cdC8qOjogaW1wb3J0IHR5cGUge0RyYWdnYWJsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi91dGlscy90eXBlcyc7Ki9cblx0Lyo6OiBpbXBvcnQgdHlwZSB7RWxlbWVudCBhcyBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0JzsqL1xuXHQvKjo6IHR5cGUgRHJhZ2dhYmxlU3RhdGUgPSB7XG5cdCAgZHJhZ2dpbmc6IGJvb2xlYW4sXG5cdCAgZHJhZ2dlZDogYm9vbGVhbixcblx0ICB4OiBudW1iZXIsIHk6IG51bWJlcixcblx0ICBzbGFja1g6IG51bWJlciwgc2xhY2tZOiBudW1iZXIsXG5cdCAgaXNFbGVtZW50U1ZHOiBib29sZWFuXG5cdH07Ki9cblxuXG5cdC8vXG5cdC8vIERlZmluZSA8RHJhZ2dhYmxlPlxuXHQvL1xuXG5cdC8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG5cdCAgLi4uJEV4YWN0PERyYWdnYWJsZUNvcmVQcm9wcz4sXG5cdCAgYXhpczogJ2JvdGgnIHwgJ3gnIHwgJ3knIHwgJ25vbmUnLFxuXHQgIGJvdW5kczogRHJhZ2dhYmxlQm91bmRzIHwgc3RyaW5nIHwgZmFsc2UsXG5cdCAgZGVmYXVsdENsYXNzTmFtZTogc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBzdHJpbmcsXG5cdCAgZGVmYXVsdFBvc2l0aW9uOiBDb250cm9sUG9zaXRpb24sXG5cdCAgcG9zaXRpb25PZmZzZXQ6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uLFxuXHQgIHBvc2l0aW9uOiBDb250cm9sUG9zaXRpb24sXG5cdCAgc2NhbGU6IG51bWJlclxuXHR9OyovXG5cblx0dmFyIERyYWdnYWJsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgaW5oZXJpdHMoRHJhZ2dhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQgIGZ1bmN0aW9uIERyYWdnYWJsZShwcm9wcyAvKjogRHJhZ2dhYmxlUHJvcHMqLykge1xuXHQgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ2dhYmxlKTtcblxuXHQgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJhZ2dhYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJhZ2dhYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdCAgICBfdGhpcy5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uIChlLCBjb3JlRGF0YSkge1xuXG5cdCAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblx0ICAgICAgdmFyIHNob3VsZFN0YXJ0ID0gX3RoaXMucHJvcHMub25TdGFydChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKF90aGlzLCBjb3JlRGF0YSkpO1xuXHQgICAgICAvLyBLaWxscyBzdGFydCBldmVudCBvbiBjb3JlIGFzIHdlbGwsIHNvIG1vdmUgaGFuZGxlcnMgYXJlIG5ldmVyIGJvdW5kLlxuXHQgICAgICBpZiAoc2hvdWxkU3RhcnQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUoeyBkcmFnZ2luZzogdHJ1ZSwgZHJhZ2dlZDogdHJ1ZSB9KTtcblx0ICAgIH07XG5cblx0ICAgIF90aGlzLm9uRHJhZyA9IGZ1bmN0aW9uIChlLCBjb3JlRGF0YSkge1xuXHQgICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgdmFyIHVpRGF0YSA9IGNyZWF0ZURyYWdnYWJsZURhdGEoX3RoaXMsIGNvcmVEYXRhKTtcblxuXHQgICAgICB2YXIgbmV3U3RhdGUgLyo6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4qLyA9IHtcblx0ICAgICAgICB4OiB1aURhdGEueCxcblx0ICAgICAgICB5OiB1aURhdGEueVxuXHQgICAgICB9O1xuXG5cdCAgICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kcy5cblx0ICAgICAgaWYgKF90aGlzLnByb3BzLmJvdW5kcykge1xuXHQgICAgICAgIC8vIFNhdmUgb3JpZ2luYWwgeCBhbmQgeS5cblx0ICAgICAgICB2YXIgX3ggPSBuZXdTdGF0ZS54LFxuXHQgICAgICAgICAgICBfeSA9IG5ld1N0YXRlLnk7XG5cblx0ICAgICAgICAvLyBBZGQgc2xhY2sgdG8gdGhlIHZhbHVlcyB1c2VkIHRvIGNhbGN1bGF0ZSBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGlmXG5cdCAgICAgICAgLy8gd2Ugc3RhcnQgcmVtb3Zpbmcgc2xhY2ssIHRoZSBlbGVtZW50IHdvbid0IHJlYWN0IHRvIGl0IHJpZ2h0IGF3YXkgdW50aWwgaXQncyBiZWVuXG5cdCAgICAgICAgLy8gY29tcGxldGVseSByZW1vdmVkLlxuXG5cdCAgICAgICAgbmV3U3RhdGUueCArPSBfdGhpcy5zdGF0ZS5zbGFja1g7XG5cdCAgICAgICAgbmV3U3RhdGUueSArPSBfdGhpcy5zdGF0ZS5zbGFja1k7XG5cblx0ICAgICAgICAvLyBHZXQgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBjZWlsL2Zsb29yIHRoZSB4IGFuZCB5IHdpdGhpbiB0aGUgYm91bmRhcmllcy5cblxuXHQgICAgICAgIHZhciBfZ2V0Qm91bmRQb3NpdGlvbiA9IGdldEJvdW5kUG9zaXRpb24oX3RoaXMsIG5ld1N0YXRlLngsIG5ld1N0YXRlLnkpLFxuXHQgICAgICAgICAgICBfZ2V0Qm91bmRQb3NpdGlvbjIgPSBzbGljZWRUb0FycmF5KF9nZXRCb3VuZFBvc2l0aW9uLCAyKSxcblx0ICAgICAgICAgICAgbmV3U3RhdGVYID0gX2dldEJvdW5kUG9zaXRpb24yWzBdLFxuXHQgICAgICAgICAgICBuZXdTdGF0ZVkgPSBfZ2V0Qm91bmRQb3NpdGlvbjJbMV07XG5cblx0ICAgICAgICBuZXdTdGF0ZS54ID0gbmV3U3RhdGVYO1xuXHQgICAgICAgIG5ld1N0YXRlLnkgPSBuZXdTdGF0ZVk7XG5cblx0ICAgICAgICAvLyBSZWNhbGN1bGF0ZSBzbGFjayBieSBub3RpbmcgaG93IG11Y2ggd2FzIHNoYXZlZCBieSB0aGUgYm91bmRQb3NpdGlvbiBoYW5kbGVyLlxuXHQgICAgICAgIG5ld1N0YXRlLnNsYWNrWCA9IF90aGlzLnN0YXRlLnNsYWNrWCArIChfeCAtIG5ld1N0YXRlLngpO1xuXHQgICAgICAgIG5ld1N0YXRlLnNsYWNrWSA9IF90aGlzLnN0YXRlLnNsYWNrWSArIChfeSAtIG5ld1N0YXRlLnkpO1xuXG5cdCAgICAgICAgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxuXHQgICAgICAgIHVpRGF0YS54ID0gbmV3U3RhdGUueDtcblx0ICAgICAgICB1aURhdGEueSA9IG5ld1N0YXRlLnk7XG5cdCAgICAgICAgdWlEYXRhLmRlbHRhWCA9IG5ld1N0YXRlLnggLSBfdGhpcy5zdGF0ZS54O1xuXHQgICAgICAgIHVpRGF0YS5kZWx0YVkgPSBuZXdTdGF0ZS55IC0gX3RoaXMuc3RhdGUueTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblx0ICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uRHJhZyhlLCB1aURhdGEpO1xuXHQgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIF90aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0ICAgIH07XG5cblx0ICAgIF90aGlzLm9uRHJhZ1N0b3AgPSBmdW5jdGlvbiAoZSwgY29yZURhdGEpIHtcblx0ICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG5cdCAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblx0ICAgICAgdmFyIHNob3VsZFN0b3AgPSBfdGhpcy5wcm9wcy5vblN0b3AoZSwgY3JlYXRlRHJhZ2dhYmxlRGF0YShfdGhpcywgY29yZURhdGEpKTtcblx0ICAgICAgaWYgKHNob3VsZFN0b3AgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cblx0ICAgICAgdmFyIG5ld1N0YXRlIC8qOiAkU2hhcGU8RHJhZ2dhYmxlU3RhdGU+Ki8gPSB7XG5cdCAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuXHQgICAgICAgIHNsYWNrWDogMCxcblx0ICAgICAgICBzbGFja1k6IDBcblx0ICAgICAgfTtcblxuXHQgICAgICAvLyBJZiB0aGlzIGlzIGEgY29udHJvbGxlZCBjb21wb25lbnQsIHRoZSByZXN1bHQgb2YgdGhpcyBvcGVyYXRpb24gd2lsbCBiZSB0b1xuXHQgICAgICAvLyByZXZlcnQgYmFjayB0byB0aGUgb2xkIHBvc2l0aW9uLiBXZSBleHBlY3QgYSBoYW5kbGVyIG9uIGBvbkRyYWdTdG9wYCwgYXQgdGhlIGxlYXN0LlxuXHQgICAgICB2YXIgY29udHJvbGxlZCA9IEJvb2xlYW4oX3RoaXMucHJvcHMucG9zaXRpb24pO1xuXHQgICAgICBpZiAoY29udHJvbGxlZCkge1xuXHQgICAgICAgIHZhciBfdGhpcyRwcm9wcyRwb3NpdGlvbiA9IF90aGlzLnByb3BzLnBvc2l0aW9uLFxuXHQgICAgICAgICAgICBfeDIgPSBfdGhpcyRwcm9wcyRwb3NpdGlvbi54LFxuXHQgICAgICAgICAgICBfeTIgPSBfdGhpcyRwcm9wcyRwb3NpdGlvbi55O1xuXG5cdCAgICAgICAgbmV3U3RhdGUueCA9IF94Mjtcblx0ICAgICAgICBuZXdTdGF0ZS55ID0gX3kyO1xuXHQgICAgICB9XG5cblx0ICAgICAgX3RoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHQgICAgfTtcblxuXHQgICAgX3RoaXMuc3RhdGUgPSB7XG5cdCAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBjdXJyZW50bHkgZHJhZ2dpbmcuXG5cdCAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblxuXHQgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGJlZW4gZHJhZ2dlZCBiZWZvcmUuXG5cdCAgICAgIGRyYWdnZWQ6IGZhbHNlLFxuXG5cdCAgICAgIC8vIEN1cnJlbnQgdHJhbnNmb3JtIHggYW5kIHkuXG5cdCAgICAgIHg6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueCA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi54LFxuXHQgICAgICB5OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnkgOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueSxcblxuXHQgICAgICAvLyBVc2VkIGZvciBjb21wZW5zYXRpbmcgZm9yIG91dC1vZi1ib3VuZHMgZHJhZ3Ncblx0ICAgICAgc2xhY2tYOiAwLCBzbGFja1k6IDAsXG5cblx0ICAgICAgLy8gQ2FuIG9ubHkgZGV0ZXJtaW5lIGlmIFNWRyBhZnRlciBtb3VudGluZ1xuXHQgICAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXG5cdCAgICB9O1xuXG5cdCAgICBpZiAocHJvcHMucG9zaXRpb24gJiYgIShwcm9wcy5vbkRyYWcgfHwgcHJvcHMub25TdG9wKSkge1xuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHQgICAgICBjb25zb2xlLndhcm4oJ0EgYHBvc2l0aW9uYCB3YXMgYXBwbGllZCB0byB0aGlzIDxEcmFnZ2FibGU+LCB3aXRob3V0IGRyYWcgaGFuZGxlcnMuIFRoaXMgd2lsbCBtYWtlIHRoaXMgJyArICdjb21wb25lbnQgZWZmZWN0aXZlbHkgdW5kcmFnZ2FibGUuIFBsZWFzZSBhdHRhY2ggYG9uRHJhZ2Agb3IgYG9uU3RvcGAgaGFuZGxlcnMgc28geW91IGNhbiBhZGp1c3QgdGhlICcgKyAnYHBvc2l0aW9uYCBvZiB0aGlzIGVsZW1lbnQuJyk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gX3RoaXM7XG5cdCAgfVxuXG5cdCAgY3JlYXRlQ2xhc3MoRHJhZ2dhYmxlLCBbe1xuXHQgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHQgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGVsZW1lbnQgcGFzc2VkIGlzIGFuIGluc3RhbmNlb2YgU1ZHRWxlbWVudFxuXHQgICAgICBpZiAodHlwZW9mIHdpbmRvdy5TVkdFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KSB7XG5cdCAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWxlbWVudFNWRzogdHJ1ZSB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzIC8qOiBPYmplY3QqLykge1xuXHQgICAgICAvLyBTZXQgeC95IGlmIHBvc2l0aW9uIGhhcyBjaGFuZ2VkXG5cdCAgICAgIGlmIChuZXh0UHJvcHMucG9zaXRpb24gJiYgKCF0aGlzLnByb3BzLnBvc2l0aW9uIHx8IG5leHRQcm9wcy5wb3NpdGlvbi54ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnggfHwgbmV4dFByb3BzLnBvc2l0aW9uLnkgIT09IHRoaXMucHJvcHMucG9zaXRpb24ueSkpIHtcblx0ICAgICAgICB0aGlzLnNldFN0YXRlKHsgeDogbmV4dFByb3BzLnBvc2l0aW9uLngsIHk6IG5leHRQcm9wcy5wb3NpdGlvbi55IH0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHQgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dpbmc6IGZhbHNlIH0pOyAvLyBwcmV2ZW50cyBpbnZhcmlhbnQgaWYgdW5tb3VudGVkIHdoaWxlIGRyYWdnaW5nXG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSAvKjogUmVhY3RFbGVtZW50PGFueT4qLyB7XG5cdCAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuXHQgICAgICB2YXIgc3R5bGUgPSB7fSxcblx0ICAgICAgICAgIHN2Z1RyYW5zZm9ybSA9IG51bGw7XG5cblx0ICAgICAgLy8gSWYgdGhpcyBpcyBjb250cm9sbGVkLCB3ZSBkb24ndCB3YW50IHRvIG1vdmUgaXQgLSB1bmxlc3MgaXQncyBkcmFnZ2luZy5cblx0ICAgICAgdmFyIGNvbnRyb2xsZWQgPSBCb29sZWFuKHRoaXMucHJvcHMucG9zaXRpb24pO1xuXHQgICAgICB2YXIgZHJhZ2dhYmxlID0gIWNvbnRyb2xsZWQgfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZztcblxuXHQgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnByb3BzLnBvc2l0aW9uIHx8IHRoaXMucHJvcHMuZGVmYXVsdFBvc2l0aW9uO1xuXHQgICAgICB2YXIgdHJhbnNmb3JtT3B0cyA9IHtcblx0ICAgICAgICAvLyBTZXQgbGVmdCBpZiBob3Jpem9udGFsIGRyYWcgaXMgZW5hYmxlZFxuXHQgICAgICAgIHg6IGNhbkRyYWdYKHRoaXMpICYmIGRyYWdnYWJsZSA/IHRoaXMuc3RhdGUueCA6IHBvc2l0aW9uLngsXG5cblx0ICAgICAgICAvLyBTZXQgdG9wIGlmIHZlcnRpY2FsIGRyYWcgaXMgZW5hYmxlZFxuXHQgICAgICAgIHk6IGNhbkRyYWdZKHRoaXMpICYmIGRyYWdnYWJsZSA/IHRoaXMuc3RhdGUueSA6IHBvc2l0aW9uLnlcblx0ICAgICAgfTtcblxuXHQgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgd2FzIFNWRywgd2UgdXNlIHRoZSBgdHJhbnNmb3JtYCBhdHRyaWJ1dGUuXG5cdCAgICAgIGlmICh0aGlzLnN0YXRlLmlzRWxlbWVudFNWRykge1xuXHQgICAgICAgIHN2Z1RyYW5zZm9ybSA9IGNyZWF0ZVNWR1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzLCB0aGlzLnByb3BzLnBvc2l0aW9uT2Zmc2V0KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvLyBBZGQgYSBDU1MgdHJhbnNmb3JtIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kLiBUaGlzIGFsbG93cyB1cyB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZFxuXHQgICAgICAgIC8vIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgd2hldGhlciBvciBub3QgaXQgaXMgcmVsYXRpdmVseSBvciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuXG5cdCAgICAgICAgLy8gSWYgdGhlIGl0ZW0geW91IGFyZSBkcmFnZ2luZyBhbHJlYWR5IGhhcyBhIHRyYW5zZm9ybSBzZXQsIHdyYXAgaXQgaW4gYSA8c3Bhbj4gc28gPERyYWdnYWJsZT5cblx0ICAgICAgICAvLyBoYXMgYSBjbGVhbiBzbGF0ZS5cblx0ICAgICAgICBzdHlsZSA9IGNyZWF0ZUNTU1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzLCB0aGlzLnByb3BzLnBvc2l0aW9uT2Zmc2V0KTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHQgICAgICAgICAgZGVmYXVsdENsYXNzTmFtZSA9IF9wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lLFxuXHQgICAgICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nID0gX3Byb3BzLmRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyxcblx0ICAgICAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkID0gX3Byb3BzLmRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkO1xuXG5cblx0ICAgICAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuXHQgICAgICAvLyBNYXJrIHdpdGggY2xhc3Mgd2hpbGUgZHJhZ2dpbmdcblx0ICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoY2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lIHx8ICcnLCBkZWZhdWx0Q2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZywgdGhpcy5zdGF0ZS5kcmFnZ2luZyksIGRlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCwgdGhpcy5zdGF0ZS5kcmFnZ2VkKSwgX2NsYXNzTmFtZXMpKTtcblxuXHQgICAgICAvLyBSZXVzZSB0aGUgY2hpbGQgcHJvdmlkZWRcblx0ICAgICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0Yylcblx0ICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgRHJhZ2dhYmxlQ29yZSxcblx0ICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBvblN0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LCBvbkRyYWc6IHRoaXMub25EcmFnLCBvblN0b3A6IHRoaXMub25EcmFnU3RvcCB9KSxcblx0ICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcblx0ICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHQgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjaGlsZHJlbi5wcm9wcy5zdHlsZSwgc3R5bGUpLFxuXHQgICAgICAgICAgdHJhbnNmb3JtOiBzdmdUcmFuc2Zvcm1cblx0ICAgICAgICB9KVxuXHQgICAgICApO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0ICByZXR1cm4gRHJhZ2dhYmxlO1xuXHR9KFJlYWN0LkNvbXBvbmVudCk7XG5cblx0RHJhZ2dhYmxlLmRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZSc7XG5cdERyYWdnYWJsZS5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgRHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMsIHtcblxuXHQgIC8qKlxuXHQgICAqIGBheGlzYCBkZXRlcm1pbmVzIHdoaWNoIGF4aXMgdGhlIGRyYWdnYWJsZSBjYW4gbW92ZS5cblx0ICAgKlxuXHQgICAqICBOb3RlIHRoYXQgYWxsIGNhbGxiYWNrcyB3aWxsIHN0aWxsIHJldHVybiBkYXRhIGFzIG5vcm1hbC4gVGhpcyBvbmx5XG5cdCAgICogIGNvbnRyb2xzIGZsdXNoaW5nIHRvIHRoZSBET00uXG5cdCAgICpcblx0ICAgKiAnYm90aCcgYWxsb3dzIG1vdmVtZW50IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS5cblx0ICAgKiAneCcgbGltaXRzIG1vdmVtZW50IHRvIGhvcml6b250YWwgYXhpcy5cblx0ICAgKiAneScgbGltaXRzIG1vdmVtZW50IHRvIHZlcnRpY2FsIGF4aXMuXG5cdCAgICogJ25vbmUnIGxpbWl0cyBhbGwgbW92ZW1lbnQuXG5cdCAgICpcblx0ICAgKiBEZWZhdWx0cyB0byAnYm90aCcuXG5cdCAgICovXG5cdCAgYXhpczogcHJvcFR5cGVzLm9uZU9mKFsnYm90aCcsICd4JywgJ3knLCAnbm9uZSddKSxcblxuXHQgIC8qKlxuXHQgICAqIGBib3VuZHNgIGRldGVybWluZXMgdGhlIHJhbmdlIG9mIG1vdmVtZW50IGF2YWlsYWJsZSB0byB0aGUgZWxlbWVudC5cblx0ICAgKiBBdmFpbGFibGUgdmFsdWVzIGFyZTpcblx0ICAgKlxuXHQgICAqICdwYXJlbnQnIHJlc3RyaWN0cyBtb3ZlbWVudCB3aXRoaW4gdGhlIERyYWdnYWJsZSdzIHBhcmVudCBub2RlLlxuXHQgICAqXG5cdCAgICogQWx0ZXJuYXRpdmVseSwgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMsIGFsbCBvZiB3aGljaCBhcmUgb3B0aW9uYWw6XG5cdCAgICpcblx0ICAgKiB7bGVmdDogTEVGVF9CT1VORCwgcmlnaHQ6IFJJR0hUX0JPVU5ELCBib3R0b206IEJPVFRPTV9CT1VORCwgdG9wOiBUT1BfQk9VTkR9XG5cdCAgICpcblx0ICAgKiBBbGwgdmFsdWVzIGFyZSBpbiBweC5cblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICByZXR1cm4gKFxuXHQgICAqICAgICAgICAgICAgPERyYWdnYWJsZSBib3VuZHM9e3tyaWdodDogMzAwLCBib3R0b206IDMwMH19PlxuXHQgICAqICAgICAgICAgICAgICA8ZGl2PkNvbnRlbnQ8L2Rpdj5cblx0ICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG5cdCAgICogICAgICAgICApO1xuXHQgICAqICAgICAgIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqIGBgYFxuXHQgICAqL1xuXHQgIGJvdW5kczogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnNoYXBlKHtcblx0ICAgIGxlZnQ6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICByaWdodDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIHRvcDogcHJvcFR5cGVzLm51bWJlcixcblx0ICAgIGJvdHRvbTogcHJvcFR5cGVzLm51bWJlclxuXHQgIH0pLCBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub25lT2YoW2ZhbHNlXSldKSxcblxuXHQgIGRlZmF1bHRDbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG5cdCAgLyoqXG5cdCAgICogYGRlZmF1bHRQb3NpdGlvbmAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgdGhlIGRyYWdnZWQgaXRlbSBzaG91bGQgc3RhcnQgYXRcblx0ICAgKlxuXHQgICAqIEV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiBgYGBqc3hcblx0ICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICogICAgICAgICAgICAgIHJldHVybiAoXG5cdCAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGRlZmF1bHRQb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICAgICAgKTtcblx0ICAgKiAgICAgICAgICB9XG5cdCAgICogICAgICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBkZWZhdWx0UG9zaXRpb246IHByb3BUeXBlcy5zaGFwZSh7XG5cdCAgICB4OiBwcm9wVHlwZXMubnVtYmVyLFxuXHQgICAgeTogcHJvcFR5cGVzLm51bWJlclxuXHQgIH0pLFxuXHQgIHBvc2l0aW9uT2Zmc2V0OiBwcm9wVHlwZXMuc2hhcGUoe1xuXHQgICAgeDogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZ10pLFxuXHQgICAgeTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZ10pXG5cdCAgfSksXG5cblx0ICAvKipcblx0ICAgKiBgcG9zaXRpb25gLCBpZiBwcmVzZW50LCBkZWZpbmVzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LlxuXHQgICAqXG5cdCAgICogIFRoaXMgaXMgc2ltaWxhciB0byBob3cgZm9ybSBlbGVtZW50cyBpbiBSZWFjdCB3b3JrIC0gaWYgbm8gYHBvc2l0aW9uYCBpcyBzdXBwbGllZCwgdGhlIGNvbXBvbmVudFxuXHQgICAqICBpcyB1bmNvbnRyb2xsZWQuXG5cdCAgICpcblx0ICAgKiBFeGFtcGxlOlxuXHQgICAqXG5cdCAgICogYGBganN4XG5cdCAgICogICAgICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHQgICAqICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAqICAgICAgICAgICAgICByZXR1cm4gKFxuXHQgICAqICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBwb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG5cdCAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cblx0ICAgKiAgICAgICAgICAgICAgKTtcblx0ICAgKiAgICAgICAgICB9XG5cdCAgICogICAgICB9KTtcblx0ICAgKiBgYGBcblx0ICAgKi9cblx0ICBwb3NpdGlvbjogcHJvcFR5cGVzLnNoYXBlKHtcblx0ICAgIHg6IHByb3BUeXBlcy5udW1iZXIsXG5cdCAgICB5OiBwcm9wVHlwZXMubnVtYmVyXG5cdCAgfSksXG5cblx0ICAvKipcblx0ICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG5cdCAgICovXG5cdCAgY2xhc3NOYW1lOiBkb250U2V0TWUsXG5cdCAgc3R5bGU6IGRvbnRTZXRNZSxcblx0ICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxuXHR9KTtcblx0RHJhZ2dhYmxlLmRlZmF1bHRQcm9wcyA9IF9leHRlbmRzKHt9LCBEcmFnZ2FibGVDb3JlLmRlZmF1bHRQcm9wcywge1xuXHQgIGF4aXM6ICdib3RoJyxcblx0ICBib3VuZHM6IGZhbHNlLFxuXHQgIGRlZmF1bHRDbGFzc05hbWU6ICdyZWFjdC1kcmFnZ2FibGUnLFxuXHQgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZycsXG5cdCAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6ICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dlZCcsXG5cdCAgZGVmYXVsdFBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcblx0ICBwb3NpdGlvbjogbnVsbCxcblx0ICBzY2FsZTogMVxuXHR9KTtcblxuXHQvLyBQcmV2aW91cyB2ZXJzaW9ucyBvZiB0aGlzIGxpYiBleHBvcnRlZCA8RHJhZ2dhYmxlPiBhcyB0aGUgcm9vdCBleHBvcnQuIEFzIHRvIG5vdCBicmVha1xuXHQvLyB0aGVtLCBvciBUeXBlU2NyaXB0LCB3ZSBleHBvcnQgKmJvdGgqIGFzIHRoZSByb290IGFuZCBhcyAnZGVmYXVsdCcuXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvcHVsbC8yNTRcblx0Ly8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9pc3N1ZXMvMjY2XG5cdERyYWdnYWJsZS5kZWZhdWx0ID0gRHJhZ2dhYmxlO1xuXHREcmFnZ2FibGUuRHJhZ2dhYmxlQ29yZSA9IERyYWdnYWJsZUNvcmU7XG5cblx0cmV0dXJuIERyYWdnYWJsZTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LWRyYWdnYWJsZS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kcmFnZ2FibGUvZGlzdC9yZWFjdC1kcmFnZ2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3NTJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciByZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIERyYWdnYWJsZSA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdyZWFjdC1kcmFnZ2FibGUnKSk7XG52YXIgUmVzaXphYmxlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3JlLXJlc2l6YWJsZScpKTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgcmVzaXphYmxlU3R5bGUgPSB7XG4gIHdpZHRoOiAnYXV0bycsXG4gIGhlaWdodDogJ2F1dG8nLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogMCxcbiAgbGVmdDogMFxufTtcblxudmFyIFJuZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFJuZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm5kKHByb3BzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUm5kKTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJuZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJuZCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgejogcHJvcHMueixcbiAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICBib3VuZHM6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuICAgICAgbWF4V2lkdGg6IHByb3BzLm1heFdpZHRoLFxuICAgICAgbWF4SGVpZ2h0OiBwcm9wcy5tYXhIZWlnaHQsXG4gICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5vblJlc2l6ZVN0YXJ0ID0gX3RoaXMub25SZXNpemVTdGFydC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vblJlc2l6ZSA9IF90aGlzLm9uUmVzaXplLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uUmVzaXplU3RvcCA9IF90aGlzLm9uUmVzaXplU3RvcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdTdGFydCA9IF90aGlzLm9uRHJhZ1N0YXJ0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZyA9IF90aGlzLm9uRHJhZy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdTdG9wID0gX3RoaXMub25EcmFnU3RvcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5nZXRNYXhTaXplc0Zyb21Qcm9wcyA9IF90aGlzLmdldE1heFNpemVzRnJvbVByb3BzLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJuZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnogIT09IG5leHRQcm9wcy56KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB6OiBuZXh0UHJvcHMueiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRQYXJlbnRQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcmVudFNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXJlbnRTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzaXphYmxlLmdldFBhcmVudFNpemUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNYXhTaXplc0Zyb21Qcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1heFNpemVzRnJvbVByb3BzKCkge1xuICAgICAgdmFyIG1heFdpZHRoID0gdHlwZW9mIHRoaXMucHJvcHMubWF4V2lkdGggPT09ICd1bmRlZmluZWQnID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiB0aGlzLnByb3BzLm1heFdpZHRoO1xuICAgICAgdmFyIG1heEhlaWdodCA9IHR5cGVvZiB0aGlzLnByb3BzLm1heEhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IHRoaXMucHJvcHMubWF4SGVpZ2h0O1xuICAgICAgcmV0dXJuIHsgbWF4V2lkdGg6IG1heFdpZHRoLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlbGZFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZkVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIHJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFBhcmVudFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGFyZW50UG9zaXRpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0U2VsZkVsZW1lbnQoKTtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoIXBhcmVudCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBpZiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNb3VudGVkOiB0cnVlIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNb3VudGVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZ1N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnU3RhcnQoZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnU3RhcnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdTdGFydChlLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5wcm9wcy5ib3VuZHMpIHJldHVybjtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnJlc2l6YWJsZSAmJiB0aGlzLnJlc2l6YWJsZS5wYXJlbnROb2RlO1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50JyA/IHBhcmVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wcm9wcy5ib3VuZHMpO1xuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQ7XG4gICAgICB2YXIgdGFyZ2V0VG9wID0gdGFyZ2V0UmVjdC50b3A7XG4gICAgICB2YXIgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBwYXJlbnRMZWZ0ID0gcGFyZW50UmVjdC5sZWZ0O1xuICAgICAgdmFyIHBhcmVudFRvcCA9IHBhcmVudFJlY3QudG9wO1xuICAgICAgdmFyIGxlZnQgPSB0YXJnZXRMZWZ0IC0gcGFyZW50TGVmdDtcbiAgICAgIHZhciB0b3AgPSB0YXJnZXRUb3AgLSBwYXJlbnRUb3A7XG4gICAgICBpZiAoIXRoaXMucmVzaXphYmxlKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYm91bmRzOiB7XG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgcmlnaHQ6IGxlZnQgKyAodGFyZ2V0Lm9mZnNldFdpZHRoIC0gdGhpcy5yZXNpemFibGUuc2l6ZS53aWR0aCksXG4gICAgICAgICAgYm90dG9tOiB0aGlzLnByb3BzLl9mcmVlQm90dG9tQm91bmRzIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICA/IDIxNDc0ODM2NDcgOiB0b3AgKyAodGFyZ2V0Lm9mZnNldEhlaWdodCAtIHRoaXMucmVzaXphYmxlLnNpemUuaGVpZ2h0KSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZyhlLCBkYXRhKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWcoZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnU3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ1N0b3AoZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnU3RvcCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0b3AoZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemVTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoZSwgZGlyLCByZWZUb0VsZW1lbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3JpZ2luYWw6IHsgeDogdGhpcy5kcmFnZ2FibGUuc3RhdGUueCwgeTogdGhpcy5kcmFnZ2FibGUuc3RhdGUueSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcykge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5yZXNpemFibGUgJiYgdGhpcy5yZXNpemFibGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50JyA/IHBhcmVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wcm9wcy5ib3VuZHMpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMuZ2V0U2VsZkVsZW1lbnQoKTtcbiAgICAgICAgaWYgKHNlbGYgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIF9nZXRNYXhTaXplc0Zyb21Qcm9wcyA9IHRoaXMuZ2V0TWF4U2l6ZXNGcm9tUHJvcHMoKSxcbiAgICAgICAgICAgICAgX21heFdpZHRoID0gX2dldE1heFNpemVzRnJvbVByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgICBfbWF4SGVpZ2h0ID0gX2dldE1heFNpemVzRnJvbVByb3BzLm1heEhlaWdodDtcblxuICAgICAgICAgIHZhciBwYXJlbnRTaXplID0gdGhpcy5nZXRQYXJlbnRTaXplKCk7XG4gICAgICAgICAgaWYgKF9tYXhXaWR0aCAmJiB0eXBlb2YgX21heFdpZHRoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKF9tYXhXaWR0aC5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgICAgICAgIHZhciByYXRpbyA9IE51bWJlcihfbWF4V2lkdGgucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgICAgICAgIF9tYXhXaWR0aCA9IHBhcmVudFNpemUud2lkdGggKiByYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heFdpZHRoLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICAgIF9tYXhXaWR0aCA9IE51bWJlcihfbWF4V2lkdGgucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX21heEhlaWdodCAmJiB0eXBlb2YgX21heEhlaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChfbWF4SGVpZ2h0LmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgICAgICAgdmFyIF9yYXRpbyA9IE51bWJlcihfbWF4SGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgICBfbWF4SGVpZ2h0ID0gcGFyZW50U2l6ZS53aWR0aCAqIF9yYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX21heEhlaWdodC5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICAgICAgICBfbWF4SGVpZ2h0ID0gTnVtYmVyKF9tYXhIZWlnaHQucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2VsZlJlY3QgPSBzZWxmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciBzZWxmTGVmdCA9IHNlbGZSZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHNlbGZUb3AgPSBzZWxmUmVjdC50b3A7XG4gICAgICAgICAgdmFyIHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQ7XG4gICAgICAgICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldFJlY3QudG9wO1xuICAgICAgICAgIGlmICgvbGVmdC9pLnRlc3QoZGlyKSAmJiB0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgdmFyIG1heCA9IHNlbGZMZWZ0IC0gdGFyZ2V0TGVmdCArIHRoaXMucmVzaXphYmxlLnNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF4V2lkdGg6IG1heCA+IE51bWJlcihfbWF4V2lkdGgpID8gX21heFdpZHRoIDogbWF4IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL3JpZ2h0L2kudGVzdChkaXIpKSB7XG4gICAgICAgICAgICB2YXIgX21heCA9IHRhcmdldC5vZmZzZXRXaWR0aCArICh0YXJnZXRMZWZ0IC0gc2VsZkxlZnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1heFdpZHRoOiBfbWF4ID4gTnVtYmVyKF9tYXhXaWR0aCkgPyBfbWF4V2lkdGggOiBfbWF4IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL3RvcC9pLnRlc3QoZGlyKSAmJiB0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgdmFyIF9tYXgyID0gc2VsZlRvcCAtIHRhcmdldFRvcCArIHRoaXMucmVzaXphYmxlLnNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1heEhlaWdodDogX21heDIgPiBOdW1iZXIoX21heEhlaWdodCkgPyBfbWF4SGVpZ2h0IDogX21heDJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL2JvdHRvbS9pLnRlc3QoZGlyKSkge1xuICAgICAgICAgICAgdmFyIF9tYXgzID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArICh0YXJnZXRUb3AgLSBzZWxmVG9wKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF9tYXgzID4gTnVtYmVyKF9tYXhIZWlnaHQpID8gX21heEhlaWdodCA6IF9tYXgzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgIG1heEhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNpemVTdGFydChlLCBkaXIsIHJlZlRvRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlc2l6ZShlLCBkaXJlY3Rpb24sIHJlZlRvUmVzaXphYmxlRWxlbWVudCwgZGVsdGEpIHtcbiAgICAgIHZhciB4ID0gdm9pZCAwO1xuICAgICAgdmFyIHkgPSB2b2lkIDA7XG4gICAgICBpZiAoL2xlZnQvaS50ZXN0KGRpcmVjdGlvbikpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhdGUub3JpZ2luYWwueCAtIGRlbHRhLndpZHRoO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZS5zZXRTdGF0ZSh7IHg6IHggfSk7XG4gICAgICB9XG4gICAgICBpZiAoL3RvcC9pLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICB5ID0gdGhpcy5zdGF0ZS5vcmlnaW5hbC55IC0gZGVsdGEuaGVpZ2h0O1xuICAgICAgICB0aGlzLmRyYWdnYWJsZS5zZXRTdGF0ZSh7IHk6IHkgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplKGUsIGRpcmVjdGlvbiwgcmVmVG9SZXNpemFibGVFbGVtZW50LCBkZWx0YSwge1xuICAgICAgICAgIHg6IHggfHwgdGhpcy5kcmFnZ2FibGUuc3RhdGUueCxcbiAgICAgICAgICB5OiB5IHx8IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25SZXNpemVTdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVTdG9wKGUsIGRpcmVjdGlvbiwgcmVmVG9SZXNpemFibGVFbGVtZW50LCBkZWx0YSkge1xuICAgICAgdmFyIF9nZXRNYXhTaXplc0Zyb21Qcm9wczIgPSB0aGlzLmdldE1heFNpemVzRnJvbVByb3BzKCksXG4gICAgICAgICAgbWF4V2lkdGggPSBfZ2V0TWF4U2l6ZXNGcm9tUHJvcHMyLm1heFdpZHRoLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9nZXRNYXhTaXplc0Zyb21Qcm9wczIubWF4SGVpZ2h0O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWF4V2lkdGg6IG1heFdpZHRoLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RvcCkge1xuICAgICAgICB2YXIgX3Bvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IHRoaXMuZHJhZ2dhYmxlLnN0YXRlLngsXG4gICAgICAgICAgeTogdGhpcy5kcmFnZ2FibGUuc3RhdGUueVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RvcChlLCBkaXJlY3Rpb24sIHJlZlRvUmVzaXphYmxlRWxlbWVudCwgZGVsdGEsIF9wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNpemUoc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLnJlc2l6YWJsZSkgcmV0dXJuO1xuICAgICAgdGhpcy5yZXNpemFibGUudXBkYXRlU2l6ZSh7IHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0IH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnNldFN0YXRlKHBvc2l0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVaSW5kZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVaSW5kZXgoeikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHo6IHogfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjdXJzb3JTdHlsZSA9IHRoaXMucHJvcHMuZGlzYWJsZURyYWdnaW5nIHx8IHRoaXMucHJvcHMuZHJhZ0hhbmRsZUNsYXNzTmFtZSA/IHsgY3Vyc29yOiAnbm9ybWFsJyB9IDogeyBjdXJzb3I6ICdtb3ZlJyB9O1xuICAgICAgdmFyIGlubmVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgcmVzaXphYmxlU3R5bGUsIHtcbiAgICAgICAgekluZGV4OiB0aGlzLnN0YXRlLnpcbiAgICAgIH0sIGN1cnNvclN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcbiAgICAgIC8vIEhBQ0s6IFdhaXQgZm9yIHNldHRpbmcgcmVsYXRpdmUgdG8gcGFyZW50IGVsZW1lbnQuXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNNb3VudGVkKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCk7XG4gICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5fZnJlZUJvdHRvbUJvdW5kcyA/IDIxNDc0ODM2NDcgOiB0aGlzLnN0YXRlLm1heEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIERyYWdnYWJsZSxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICAgIF90aGlzMi5kcmFnZ2FibGUgPSBjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlOiB0aGlzLnByb3BzLmRyYWdIYW5kbGVDbGFzc05hbWUsXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uOiB0aGlzLnByb3BzLmRlZmF1bHQsXG4gICAgICAgICAgb25TdGFydDogdGhpcy5vbkRyYWdTdGFydCxcbiAgICAgICAgICBvbkRyYWc6IHRoaXMub25EcmFnLFxuICAgICAgICAgIG9uU3RvcDogdGhpcy5vbkRyYWdTdG9wLFxuICAgICAgICAgIGF4aXM6IHRoaXMucHJvcHMuZHJhZ0F4aXMsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZURyYWdnaW5nLFxuICAgICAgICAgIGdyaWQ6IHRoaXMucHJvcHMuZHJhZ0dyaWQsXG4gICAgICAgICAgYm91bmRzOiB0aGlzLnByb3BzLmJvdW5kcyA/IHRoaXMuc3RhdGUuYm91bmRzIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnByb3BzLnBvc2l0aW9uLFxuICAgICAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiB0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrLFxuICAgICAgICAgIGNhbmNlbDogdGhpcy5wcm9wcy5jYW5jZWxcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBSZXNpemFibGUsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuZXh0ZW5kc1Byb3BzLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgICBfdGhpczIucmVzaXphYmxlID0gYztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0U2l6ZTogdGhpcy5wcm9wcy5kZWZhdWx0LFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy5zaXplLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLnByb3BzLmVuYWJsZVJlc2l6aW5nLFxuICAgICAgICAgICAgb25SZXNpemVTdGFydDogdGhpcy5vblJlc2l6ZVN0YXJ0LFxuICAgICAgICAgICAgb25SZXNpemU6IHRoaXMub25SZXNpemUsXG4gICAgICAgICAgICBvblJlc2l6ZVN0b3A6IHRoaXMub25SZXNpemVTdG9wLFxuICAgICAgICAgICAgc3R5bGU6IGlubmVyU3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5wcm9wcy5taW5XaWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQsXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5zdGF0ZS5tYXhXaWR0aCxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgICAgICAgZ3JpZDogdGhpcy5wcm9wcy5yZXNpemVHcmlkLFxuICAgICAgICAgICAgaGFuZGxlV3JhcHBlckNsYXNzOiB0aGlzLnByb3BzLnJlc2l6ZUhhbmRsZVdyYXBwZXJDbGFzcyxcbiAgICAgICAgICAgIGhhbmRsZVdyYXBwZXJTdHlsZTogdGhpcy5wcm9wcy5yZXNpemVIYW5kbGVXcmFwcGVyU3R5bGUsXG4gICAgICAgICAgICBsb2NrQXNwZWN0UmF0aW86IHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDogdGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ6IHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQsXG4gICAgICAgICAgICBoYW5kbGVTdHlsZXM6IHRoaXMucHJvcHMucmVzaXplSGFuZGxlU3R5bGVzLFxuICAgICAgICAgICAgaGFuZGxlQ2xhc3NlczogdGhpcy5wcm9wcy5yZXNpemVIYW5kbGVDbGFzc2VzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUm5kO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SbmQuZGVmYXVsdFByb3BzID0ge1xuICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gIG1heEhlaWdodDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gIG9uUmVzaXplU3RhcnQ6IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoKSB7fSxcbiAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge30sXG4gIG9uUmVzaXplU3RvcDogZnVuY3Rpb24gb25SZXNpemVTdG9wKCkge30sXG4gIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydCgpIHt9LFxuICBvbkRyYWc6IGZ1bmN0aW9uIG9uRHJhZygpIHt9LFxuICBvbkRyYWdTdG9wOiBmdW5jdGlvbiBvbkRyYWdTdG9wKCkge31cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJuZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzNS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ybmQvbGliL2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gMTc3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9