(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"258":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=(_interopRequireDefault(o),_interopRequireDefault(n(0))),a=n(45),u=_interopRequireDefault(n(259)),c=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(62)),f=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(271);var s=function(e){function AtGrid(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtGrid);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=AtGrid.__proto__||Object.getPrototypeOf(AtGrid)).call.apply(e,[this].concat(o))),n.handleClick=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var i=n.props,a=i.onClick,u=i.columnNum,c=e.currentTarget.dataset,f=c.item,s=c.index,p=c.row;if((0,l.default)(a)){var d=p*u+s;a.apply(void 0,[f,d,e].concat(r))}},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtGrid,o.Component),r(AtGrid,[{"key":"render","value":function render(){var e=this,t=this.props,n=t.data,r=t.mode,o=t.columnNum;if(Array.isArray(n)&&0===n.length)return null;var c=(0,u.default)(n,o),l=["at-grid__flex-item","at-grid-item","at-grid-item--"+r];return i.default.createElement(a.View,{"className":"at-grid"},c.map(function(t,n){return i.default.createElement(a.View,{"className":"at-grid__flex","key":n},t.map(function(t,r){return i.default.createElement(a.View,{"key":r,"className":l,"data-item":t,"data-index":r,"data-row":n,"onClick":e.handleClick},i.default.createElement(a.View,{"className":"at-grid-item__content"},i.default.createElement(a.View,{"className":"at-grid-item__content-inner"},i.default.createElement(a.View,{"className":"content-inner__icon"},t.image&&i.default.createElement(a.Image,{"className":"content-inner__img","src":t.image,"mode":"scaleToFill"}),t.icon&&!t.image&&i.default.createElement(f.default,{"value":t.icon,"color":t.iconColor,"size":t.iconSize})),i.default.createElement(a.Text,{"className":"content-inner__text"},t.value))))}))}))}}]),AtGrid}();t.default=s,s.defaultProps={"data":[],"columnNum":3,"mode":"square"},s.propTypes={"mode":c.default.string,"onClick":c.default.func,"columnNum":c.default.oneOf([c.default.string,c.default.number]),"data":c.default.arrayOf(c.default.shape({"icon":c.default.string,"image":c.default.string,"value":c.default.string,"iconSize":c.default.number,"iconColor":c.default.string}))}},"259":function(e,t,n){var r=n(260),o=n(261),i=n(266),a=Math.ceil,u=Math.max;e.exports=function chunk(e,t,n){t=(n?o(e,t,n):void 0===t)?1:u(i(t),0);var c=null==e?0:e.length;if(!c||t<1)return[];for(var l=0,f=0,s=Array(a(c/t));l<c;)s[f++]=r(e,l,l+=t);return s}},"260":function(e,t){e.exports=function baseSlice(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}},"261":function(e,t,n){var r=n(262),o=n(263),i=n(265),a=n(63);e.exports=function isIterateeCall(e,t,n){if(!a(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&i(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},"262":function(e,t){e.exports=function eq(e,t){return e===t||e!=e&&t!=t}},"263":function(e,t,n){var r=n(62),o=n(264);e.exports=function isArrayLike(e){return null!=e&&o(e.length)&&!r(e)}},"264":function(e,t){var n=9007199254740991;e.exports=function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},"265":function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function isIndex(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},"266":function(e,t,n){var r=n(267);e.exports=function toInteger(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},"267":function(e,t,n){var r=n(268),o=1/0,i=1.7976931348623157e308;e.exports=function toFinite(e){return e?(e=r(e))===o||e===-o?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},"268":function(e,t,n){var r=n(63),o=n(269),i=NaN,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;e.exports=function toNumber(e){if("number"==typeof e)return e;if(o(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?f(e.slice(2),n?2:8):u.test(e)?i:+e}},"269":function(e,t,n){var r=n(64),o=n(270),i="[object Symbol]";e.exports=function isSymbol(e){return"symbol"==typeof e||o(e)&&r(e)==i}},"270":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}},"271":function(e,t,n){},"273":function(e,t,n){},"34":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),a=_interopRequireDefault(n(258)),u=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(273);var c=function(e){function GridPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GridPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GridPage.__proto__||Object.getPrototypeOf(GridPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(e,t){console.log(e,t)},e.state={"data":[{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","value":"领取中心"},{"image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png","value":"找折扣"},{"image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","value":"领会员"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png","value":"新品首发"},{"image":"https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png","value":"领京豆"},{"image":"https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png","value":"手机馆"}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GridPage,o.default.Component),r(GridPage,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page"},o.default.createElement(u.default,{"title":"Grid 栅格"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"正方形案例"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(a.default,{"data":this.state.data,"onClick":this.handleClick})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"矩形案例"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(a.default,{"mode":"rect","data":this.state.data}))))))}}]),GridPage}();t.default=c},"46":function(e,t,n){e.exports=n(50)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=(_interopRequireDefault(o),_interopRequireDefault(n(0))),a=_interopRequireDefault(n(46)),u=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(48);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(u.View,{"className":"doc-header"},i.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":a.default.string}},"48":function(e,t,n){},"50":function(e,t,n){"use strict";var r=n(51);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"51":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=_interopRequireDefault(n(46)),a=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var u=function(e){function AtIcon(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtIcon),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtIcon.__proto__||Object.getPrototypeOf(AtIcon)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtIcon,o.default.Component),r(AtIcon,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.value,n=void 0===t?"":t,r={"fontSize":e.size+"px","color":e.color},i=["at-icon","at-icon-"+n];return o.default.createElement(a.Text,{"className":i,"style":r})}}]),AtIcon}();t.default=u,u.defaultProps={"color":"","size":"24","onClick":function onClick(){}},u.propTypes={"color":i.default.string,"size":i.default.oneOfType([i.default.string,i.default.number]),"onClick":i.default.func}},"53":function(e,t,n){},"61":function(e,t,n){var r=n(65).Symbol;e.exports=r},"62":function(e,t,n){var r=n(64),o=n(63),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";e.exports=function isFunction(e){if(!o(e))return!1;var t=r(e);return t==a||t==u||t==i||t==c}},"63":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"64":function(e,t,n){var r=n(61),o=n(67),i=n(68),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?u:a:c&&c in Object(e)?o(e):i(e)}},"65":function(e,t,n){var r=n(66),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},"66":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"67":function(e,t,n){var r=n(61),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},"68":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}}}]);