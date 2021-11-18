(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+qE3":function(e,t,n){"use strict";var o,i="object"==typeof Reflect?Reflect:null,r=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};o=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function l(){l.init.call(this)}e.exports=l,e.exports.once=function(e,t){return new Promise((function(n,o){function i(n){e.removeListener(t,r),o(n)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}y(e,t,r,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&y(e,"error",t,n)}(e,i,{once:!0})}))},l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var a=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function d(e){return void 0===e._maxListeners?l.defaultMaxListeners:e._maxListeners}function f(e,t,n,o){var i,r,s,l;if(u(n),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),r=e._events),s=r[t]),void 0===s)s=r[t]=n,++e._eventsCount;else if("function"==typeof s?s=r[t]=o?[n,s]:[s,n]:o?s.unshift(n):s.push(n),(i=d(e))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,l=a,console&&console.warn&&console.warn(l)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=c.bind(o);return i.listener=n,o.wrapFn=i,i}function h(e,t,n){var o=e._events;if(void 0===o)return[];var i=o[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):b(i,i.length)}function g(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function b(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}function y(e,t,n,o){if("function"==typeof e.on)o.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(r){o.once&&e.removeEventListener(t,i),n(r)}))}}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),l.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},l.prototype.getMaxListeners=function(){return d(this)},l.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var l=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw l.context=s,l}var a=i[e];if(void 0===a)return!1;if("function"==typeof a)r(a,this,t);else{var u=a.length,d=b(a,u);for(n=0;n<u;++n)r(d[n],this,t)}return!0},l.prototype.addListener=function(e,t){return f(this,e,t,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(e,t){return f(this,e,t,!0)},l.prototype.once=function(e,t){return u(t),this.on(e,p(this,e,t)),this},l.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,p(this,e,t)),this},l.prototype.removeListener=function(e,t){var n,o,i,r,s;if(u(t),void 0===(o=this._events))return this;if(void 0===(n=o[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,r=n.length-1;r>=0;r--)if(n[r]===t||n[r].listener===t){s=n[r].listener,i=r;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(o[e]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",e,s||t)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(e){var t,n,o;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,r=Object.keys(n);for(o=0;o<r.length;++o)"removeListener"!==(i=r[o])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},l.prototype.listeners=function(e){return h(this,e,!0)},l.prototype.rawListeners=function(e){return h(this,e,!1)},l.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):g.call(e,t)},l.prototype.listenerCount=g,l.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"2UAH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DFPSlotsProvider=t.AdSlot=t.DFPManager=void 0;var o=s(n("n3sN")),i=s(n("8PQ5")),r=s(n("R4Nd"));function s(e){return e&&e.__esModule?e:{default:e}}var l=o.default;t.DFPManager=l;var a=i.default;t.AdSlot=a;var u=r.default;t.DFPSlotsProvider=u},"8PQ5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AdSlot=void 0;var o=l(n("q1tI")),i=l(n("17x9")),r=l(n("n3sN")),s=n("R4Nd");function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=0,y=function(e){function t(e){var n,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=c(t).call(this,e),(n=!r||"object"!==a(r)&&"function"!=typeof r?h(i):r).doRegisterSlot=n.doRegisterSlot.bind(h(h(n))),n.generateSlotId=n.generateSlotId.bind(h(h(n))),n.getSlotId=n.getSlotId.bind(h(h(n))),n.mapContextToAdSlotProps=n.mapContextToAdSlotProps.bind(h(h(n))),n.slotShouldRefresh=n.slotShouldRefresh.bind(h(h(n))),n.slotRenderEnded=n.slotRenderEnded.bind(h(h(n))),n.slotRegisterCallback=n.slotRegisterCallback.bind(h(h(n))),n.slotIsViewable=n.slotIsViewable.bind(h(h(n))),n.slotVisibilityChanged=n.slotVisibilityChanged.bind(h(h(n))),n.getClasses=n.getClasses.bind(h(h(n))),n.state={slotId:n.props.slotId||null,className:n.props.className||""},n.adElementRef=o.default.createRef?o.default.createRef():function(e){n.adElementRef=e},n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){void 0!==this.context&&this.context.newSlotCallback&&this.context.newSlotCallback(),this.registerSlot()}},{key:"componentWillUnmount",value:function(){this.unregisterSlot()}},{key:"getSlotId",value:function(){return this.props.slotId||this.state.slotId}},{key:"getClasses",value:function(){var e=this.state.className.split(" ");return e.push("adunitContainer"),e}},{key:"generateSlotId",value:function(){return"adSlot-".concat(b++)}},{key:"mapContextToAdSlotProps",value:function(){var e=this.context,t={};return void 0!==e.dfpNetworkId&&(t.dfpNetworkId=e.dfpNetworkId),void 0!==e.dfpAdUnit&&(t.adUnit=e.dfpAdUnit),void 0!==e.dfpSizeMapping&&(t.sizeMapping=e.dfpSizeMapping),void 0!==e.dfpTargetingArguments&&(t.targetingArguments=e.dfpTargetingArguments),t}},{key:"doRegisterSlot",value:function(){r.default.registerSlot(d({},this.mapContextToAdSlotProps(),this.props,this.state,{slotShouldRefresh:this.slotShouldRefresh})),!0===this.props.fetchNow&&r.default.load(this.getSlotId()),r.default.attachSlotRenderEnded(this.slotRenderEnded),r.default.attachSlotIsViewable(this.slotIsViewable),r.default.attachSlotVisibilityChanged(this.slotVisibilityChanged),this.slotRegisterCallback()}},{key:"registerSlot",value:function(){null===this.state.slotId?this.setState({slotId:this.generateSlotId()},this.doRegisterSlot):this.doRegisterSlot()}},{key:"unregisterSlot",value:function(){r.default.unregisterSlot(d({},this.mapContextToAdSlotProps(),this.props,this.state)),r.default.detachSlotRenderEnded(this.slotRenderEnded),r.default.detachSlotIsViewable(this.slotIsViewable),r.default.detachSlotVisibilityChanged(this.slotVisibilityChanged)}},{key:"slotRenderEnded",value:function(e){if(e.slotId===this.getSlotId()&&void 0!==this.props.onSlotRender){var t=d({},e,{adElementRef:this.adElementRef});this.props.onSlotRender(t)}}},{key:"slotRegisterCallback",value:function(){"function"==typeof this.props.onSlotRegister&&this.props.onSlotRegister({slotId:this.getSlotId(),sizes:this.props.sizes,slotCount:b,adElementRef:this.adElementRef})}},{key:"slotIsViewable",value:function(e){e.slotId===this.getSlotId()&&void 0!==this.props.onSlotIsViewable&&this.props.onSlotIsViewable(e)}},{key:"slotVisibilityChanged",value:function(e){e.slotId===this.getSlotId()&&void 0!==this.props.onSlotVisibilityChanged&&this.props.onSlotVisibilityChanged(e)}},{key:"slotShouldRefresh",value:function(){var e=!0;return void 0!==this.props.shouldRefresh&&(e=this.props.shouldRefresh(d({},this.mapContextToAdSlotProps(),this.props,{slotId:this.getSlotId()}))),e}},{key:"render",value:function(){var e=this.state.slotId,t={className:"adBox"};return null!==e&&(t.id=e),o.default.createElement("div",{className:this.getClasses().join(" ").trim()},o.default.createElement("div",u({ref:this.adElementRef},t)))}}])&&f(n.prototype,i),s&&f(n,s),t}(o.default.Component);t.AdSlot=y,g(y,"propTypes",{dfpNetworkId:i.default.string,adUnit:i.default.string,sizes:i.default.arrayOf(i.default.oneOfType([i.default.arrayOf(i.default.number),i.default.string])),renderOutOfThePage:i.default.bool,sizeMapping:i.default.arrayOf(i.default.object),fetchNow:i.default.bool,adSenseAttributes:i.default.object,targetingArguments:i.default.object,onSlotRender:i.default.func,onSlotRegister:i.default.func,onSlotIsViewable:i.default.func,onSlotVisibilityChanged:i.default.func,shouldRefresh:i.default.func,slotId:i.default.string,className:i.default.string}),g(y,"defaultProps",{fetchNow:!1}),null===s.Context?y.contextTypes={dfpNetworkId:i.default.string,dfpAdUnit:i.default.string,dfpSizeMapping:i.default.arrayOf(i.default.object),dfpTargetingArguments:i.default.object,newSlotCallback:i.default.func}:y.contextType=s.Context;var v=y;t.default=v},R4Nd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Context=void 0;var o=s(n("q1tI")),i=s(n("17x9")),r=s(n("n3sN"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=o.default.createContext?o.default.createContext({dfpNetworkId:null,dfpAdUnit:null,dfpSizeMapping:null,dfpTargetingArguments:null,newSlotCallback:null}):null;t.Context=p;var h=function(e){function t(e){var n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=u(t).call(this,e),(n=!i||"object"!==l(i)&&"function"!=typeof i?f(o):i).loadAdsIfPossible=n.loadAdsIfPossible.bind(f(f(n))),n.newSlotCallback=n.newSlotCallback.bind(f(f(n))),n.applyConfigs=n.applyConfigs.bind(f(f(n))),n.shouldReloadConfig=n.shouldReloadConfig.bind(f(f(n))),n.attachLoadCallback=n.attachLoadCallback.bind(f(f(n))),n.getContextValue=n.getContextValue.bind(f(f(n))),n.loadAlreadyCalled=!1,n.loadCallbackAttached=!1,n.shouldReloadAds=!1,n.totalSlots=0,n.contextValue={},null===p&&(n.getChildContext=function(){return n.getContextValue()}),n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.applyConfigs(),this.props.autoLoad&&!this.loadAdsIfPossible()&&this.attachLoadCallback()}},{key:"shouldComponentUpdate",value:function(e){return this.shouldReloadAds=this.shouldReloadConfig(e),e.children!==this.props.children||!(!e.autoLoad||this.props.autoLoad)||this.shouldReloadAds}},{key:"componentDidUpdate",value:function(){this.applyConfigs(),this.props.autoLoad&&(this.loadAlreadyCalled?this.shouldReloadAds&&r.default.reload():this.loadAdsIfPossible()||this.attachLoadCallback()),this.shouldReloadAds=!1}},{key:"getContextValue",value:function(){var e=this.props,t=e.dfpNetworkId,n=e.adUnit,o=e.sizeMapping,i=e.targetingArguments,r=this.contextValue,s=r.dfpNetworkId,l=r.adUnit,a=r.sizeMapping,u=r.targetingArguments;return t===s&&n===l&&o===a&&i===u||(this.contextValue={dfpNetworkId:t,dfpAdUnit:n,dfpSizeMapping:o,dfpTargetingArguments:i,newSlotCallback:this.newSlotCallback}),this.contextValue}},{key:"applyConfigs",value:function(){r.default.configurePersonalizedAds(this.props.personalizedAds),r.default.configureCookieOption(this.props.cookieOption),r.default.configureSingleRequest(this.props.singleRequest),r.default.configureDisableInitialLoad(this.props.disableInitialLoad),r.default.configureLazyLoad(!!this.props.lazyLoad,"boolean"==typeof this.props.lazyLoad?null:this.props.lazyLoad),r.default.setAdSenseAttributes(this.props.adSenseAttributes),r.default.setCollapseEmptyDivs(this.props.collapseEmptyDivs)}},{key:"attachLoadCallback",value:function(){return!1===this.loadCallbackAttached&&(r.default.on("slotRegistered",this.loadAdsIfPossible),this.loadCallbackAttached=!0,!0)}},{key:"newSlotCallback",value:function(){this.totalSlots++}},{key:"loadAdsIfPossible",value:function(){var e=!1;return Object.keys(r.default.getRegisteredSlots()).length>=this.totalSlots&&(r.default.removeListener("slotRegistered",this.loadAdsIfPossible),r.default.load(),this.loadAlreadyCalled=!0,this.loadCallbackAttached=!1,e=!0),e}},{key:"shouldReloadConfig",value:function(e){var t=e.autoReload||this.props.autoReload;if((this.props.autoLoad||e.autoLoad)&&"object"===l(t)){var n=Object.keys(t);for(var o in n){var i=n[o];if(!0===t[i]&&this.props[i]!==e[i])return!0}}return!1}},{key:"render",value:function(){var e=this.props.children;return null===p?e:o.default.createElement(p.Provider,{value:this.getContextValue()},e)}}])&&a(n.prototype,i),s&&a(n,s),t}(o.default.Component);t.default=h,c(h,"propTypes",{children:i.default.oneOfType([i.default.element,i.default.array]).isRequired,autoLoad:i.default.bool,autoReload:i.default.shape({dfpNetworkId:i.default.bool,personalizedAds:i.default.bool,cookieOption:i.default.bool,singleRequest:i.default.bool,disableInitialLoad:i.default.bool,adUnit:i.default.bool,sizeMapping:i.default.bool,adSenseAttributes:i.default.bool,targetingArguments:i.default.bool,collapseEmptyDivs:i.default.bool,lazyLoad:i.default.bool}),dfpNetworkId:i.default.string.isRequired,personalizedAds:i.default.bool,cookieOption:i.default.bool,singleRequest:i.default.bool,disableInitialLoad:i.default.bool,adUnit:i.default.string,sizeMapping:i.default.arrayOf(i.default.object),adSenseAttributes:i.default.object,targetingArguments:i.default.object,collapseEmptyDivs:i.default.oneOfType([i.default.bool,i.default.object]),adSenseAttrs:i.default.object,lazyLoad:i.default.oneOfType([i.default.bool,i.default.shape({fetchMarginPercent:i.default.number,renderMarginPercent:i.default.number,mobileScaling:i.default.number})])}),c(h,"defaultProps",{autoLoad:!0,autoReload:{dfpNetworkId:!1,personalizedAds:!1,cookieOption:!1,singleRequest:!1,disableInitialLoad:!1,adUnit:!1,sizeMapping:!1,adSenseAttributes:!1,targetingArguments:!1,collapseEmptyDivs:!1,lazyLoad:!1},personalizedAds:!0,cookieOption:!0,singleRequest:!0,disableInitialLoad:!1,collapseEmptyDivs:null,lazyLoad:!1}),null===p&&(h.childContextTypes={dfpNetworkId:i.default.string,dfpAdUnit:i.default.string,dfpSizeMapping:i.default.arrayOf(i.default.object),dfpTargetingArguments:i.default.object,newSlotCallback:i.default.func})},cq30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadGPTScript=function(){return new Promise((function(e,t){!function(e,t){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];var n=document.createElement("script");n.src="".concat(document.location.protocol,"//securepubads.g.doubleclick.net/tag/js/gpt.js"),n.async=!0,n.type="text/javascript",n.onerror=function(e){t(e)},n.onload=function(){e(window.googletag)},document.getElementsByTagName("head")[0].appendChild(n)}(e,t)}))}},n3sN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("+qE3"),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("cq30"));function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=null,u=null,d=!0,f=!1,c=!1,p=null,h=!0,g=!0,b={},y=!1,v={},m={},S=Object.assign((new o.EventEmitter).setMaxListeners(0),{singleRequestIsEnabled:function(){return d},configureSingleRequest:function(e){d=!!e},disableInitialLoadIsEnabled:function(){return f},configureDisableInitialLoad:function(e){f=!!e},configureLazyLoad:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null;null!==t&&"object"===l(t)&&(n=r({},t)),c=!!e,p=n},lazyLoadIsEnabled:function(){return c},getLazyLoadConfig:function(){return p},getAdSenseAttribute:function(e){return m[e]},configurePersonalizedAds:function(e){h=e},configureCookieOption:function(e){g=e},personalizedAdsEnabled:function(){return h},cookiesEnabled:function(){return g},setAdSenseAttribute:function(e,t){this.setAdSenseAttributes(s({},e,t))},getAdSenseAttributes:function(){return r({},m)},setAdSenseAttributes:function(e){Object.assign(m,e),!0===y&&this.getGoogletag().then((function(e){e.cmd.push((function(){var t=e.pubads();Object.keys(m).forEach((function(e){t.set(e,v[e])}))}))}))},setTargetingArguments:function(e){Object.assign(v,e),!0===y&&this.getGoogletag().then((function(e){e.cmd.push((function(){var t=e.pubads();Object.keys(v).forEach((function(e){t&&t.setTargeting(e,v[e])}))}))}))},getTargetingArguments:function(){return r({},v)},getSlotProperty:function(e,t){var n=this.getRegisteredSlots()[e],o=null;return void 0!==n&&(o=n[t]||o),o},getSlotTargetingArguments:function(e){var t=this.getSlotProperty(e,"targetingArguments");return t?r({},t):null},getSlotAdSenseAttributes:function(e){var t=this.getSlotProperty(e,"adSenseAttributes");return t?r({},t):null},init:function(){var e=this;!1===y&&(y=!0,this.getGoogletag().then((function(t){t.cmd.push((function(){var n=t.pubads();n.addEventListener("slotRenderEnded",(function(t){var n=t.slot.getSlotElementId();e.emit("slotRenderEnded",{slotId:n,event:t})})),n.addEventListener("impressionViewable",(function(t){var n=t.slot.getSlotElementId();e.emit("impressionViewable",{slotId:n,event:t})})),n.addEventListener("slotVisibilityChanged",(function(t){var n=t.slot.getSlotElementId();e.emit("slotVisibilityChanged",{slotId:n,event:t})})),n.setRequestNonPersonalizedAds(e.personalizedAdsEnabled()?0:1),n.setCookieOptions(e.cookiesEnabled()?0:1)}))})))},getGoogletag:function(){return null===u&&(u=i.loadGPTScript()),u},setCollapseEmptyDivs:function(e){this.collapseEmptyDivs=e},load:function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];a=null===a?this.doLoad.apply(this,n):a.then((function(){return e.doLoad.apply(e,n)}))},doLoad:function(){this.init();for(var e={},t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=(e=n.length>0?n.filter((function(e){return Object.prototype.hasOwnProperty.call(b,e)})):Object.keys(b)).filter((function(e){return!b[e].loading&&!b[e].gptSlot}))).forEach((function(e){b[e].loading=!0})),this.gptLoadAds(e)},gptLoadAds:function(e){var t=this;return new Promise((function(n){t.getGoogletag().then((function(o){t.configureInitialOptions(o),e.forEach((function(e){b[e].loading=!1,o.cmd.push((function(){var n,i=b[e],r="".concat(i.dfpNetworkId,"/").concat(i.adUnit);if(null!==(n=!0===i.renderOutOfThePage?o.defineOutOfPageSlot(r,e):o.defineSlot(r,i.sizes,e))){i.gptSlot=n;var s=t.getSlotTargetingArguments(e);null!==s&&Object.keys(s).forEach((function(e){i&&i.gptSlot&&i.gptSlot.setTargeting(e,s[e])}));var l=t.getSlotAdSenseAttributes(e);if(null!==l&&Object.keys(l).forEach((function(e){i.gptSlot.set(e,l[e])})),i.gptSlot.addService(o.pubads()),i.sizeMapping){var a=o.sizeMapping();i.sizeMapping.forEach((function(e){a=a.addSize(e.viewport,e.sizes)})),i.gptSlot.defineSizeMapping(a.build())}}}))})),t.configureOptions(o),o.cmd.push((function(){o.enableServices(),t.disableInitialLoadIsEnabled()||e.forEach((function(e){o.display(e)})),n()}))}))}))},configureInitialOptions:function(e){var t=this;e.cmd.push((function(){t.disableInitialLoadIsEnabled()&&e.pubads().disableInitialLoad()}))},configureOptions:function(e){var t=this;e.cmd.push((function(){var n=e.pubads();n.setRequestNonPersonalizedAds(t.personalizedAdsEnabled()?0:1),n.setCookieOptions(t.cookiesEnabled()?0:1);var o=t.getTargetingArguments();Object.keys(o).forEach((function(e){n&&n.setTargeting(e,o[e])}));var i=t.getAdSenseAttributes();if(Object.keys(i).forEach((function(e){n.set(e,i[e])})),t.lazyLoadIsEnabled()){var r=t.getLazyLoadConfig();r?n.enableLazyLoad(r):n.enableLazyLoad()}t.singleRequestIsEnabled()&&n.enableSingleRequest(),!0!==t.collapseEmptyDivs&&!1!==t.collapseEmptyDivs||n.collapseEmptyDivs(t.collapseEmptyDivs)}))},getRefreshableSlots:function(){for(var e={},t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(0===n.length){var i=Object.keys(b).map((function(e){return b[e]}));return i.reduce((function(t,n){return!0===n.slotShouldRefresh()&&(e[n.slotId]=n),e}),e)}return n.reduce((function(t,n){var o=b[n];return void 0!==o&&(e[n]=o),e}),e)},refresh:function(){null===a?this.load():this.gptRefreshAds(Object.keys(this.getRefreshableSlots.apply(this,arguments)))},gptRefreshAds:function(e){var t=this;return this.getGoogletag().then((function(n){t.configureOptions(n),n.cmd.push((function(){n.pubads().refresh(e.map((function(e){return b[e].gptSlot})))}))}))},reload:function(){var e=this;return this.destroyGPTSlots.apply(this,arguments).then((function(){return e.load()}))},destroyGPTSlots:function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return 0===n.length&&(n=Object.keys(b)),new Promise((function(t){var o=[];for(var i in n){var r=n[i],s=b[r];o.push(s)}e.getGoogletag().then((function(e){e.cmd.push((function(){if(!0===y)if(n.length>0){for(var i in o){var r=o[i];o.push(r.gptSlot),delete r.gptSlot}e.destroySlots(o)}else e.destroySlots();t(n)}))}))}))},registerSlot:function(e){var t=this,n=e.slotId,o=e.dfpNetworkId,i=e.adUnit,r=e.sizes,s=e.renderOutOfThePage,l=e.sizeMapping,u=e.adSenseAttributes,d=e.targetingArguments,f=e.slotShouldRefresh,c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object.prototype.hasOwnProperty.call(b,n)||(b[n]={slotId:n,sizes:r,renderOutOfThePage:s,dfpNetworkId:o,adUnit:i,adSenseAttributes:u,targetingArguments:d,sizeMapping:l,slotShouldRefresh:f,loading:!1},this.emit("slotRegistered",{slotId:n}),!0===c&&null!==a&&(a=a.catch().then((function(){var e=b[n];if(void 0!==e){var o=e.loading,i=e.gptSlot;!1!==o||i||t.load(n)}}))))},unregisterSlot:function(e){var t=e.slotId;this.destroyGPTSlots(t),delete b[t]},getRegisteredSlots:function(){return b},attachSlotRenderEnded:function(e){this.on("slotRenderEnded",e)},detachSlotRenderEnded:function(e){this.removeListener("slotRenderEnded",e)},attachSlotVisibilityChanged:function(e){this.on("slotVisibilityChanged",e)},detachSlotVisibilityChanged:function(e){this.removeListener("slotVisibilityChanged",e)},attachSlotIsViewable:function(e){this.on("impressionViewable",e)},detachSlotIsViewable:function(e){this.removeListener("impressionViewable",e)}});t.default=S}}]);
//# sourceMappingURL=05705d21b4537571a17158ba09a8692ed250b06d-627f35f701db3ab26487.js.map