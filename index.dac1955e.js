!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("ke5Oc",(function(e,t){"use strict";var n=o("c4C4W"),r=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=r(i.prototype.request,o);return n.extend(s,i.prototype,o),n.extend(s,o),s.create=function(n){return e(a(t,n))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var n,r=o("lGmLA"),i=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var h=s("Date"),d=s("File"),v=s("Blob"),m=s("FileList");function y(e){return"[object Function]"===i.call(e)}var g=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,k=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:p,isUndefined:c,isDate:h,isFile:d,isBlob:v,isFunction:y,isStream:function(e){return f(e)&&y(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)b(arguments[r],n);return t},extend:function(e,t,n){return b(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,a={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=r[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:k,isFileList:m}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("9jbh3",(function(e,t){"use strict";var n=o("c4C4W"),r=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[a,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(u),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var p=t;r.length;){var h=r.shift(),d=r.shift();try{p=h(p)}catch(e){d(e);break}}try{o=a(p)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),o.register("6d5Pb",(function(e,t){"use strict";var n=o("c4C4W");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var n=o("c4C4W");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("k04r0",(function(e,t){"use strict";var n=o("c4C4W"),r=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var n=o("c4C4W"),r=o("c74ni");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var n=o("6qd2L"),r=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,p={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(f=o("btSY7")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||p.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){p.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){p.headers[e]=r.merge(c)})),e.exports=p})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("5TB86",(function(e,t){"use strict";var n=o("c4C4W");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,a,s,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var n=o("3aNd6").Buffer,r=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,a){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+a);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var s,u=a?a+"."+i:i;if(n&&!a&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(a,o(n))}(e),t}})),o.register("3aNd6",(function(n,r){e(n.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(n.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),f=o("l5bVx"),p=o("2MbLg"),h=o("5d11t"),d=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=g,a=50;var m=2147483647;function y(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,g.prototype),t}function g(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return b(e,t,n)}function b(e,n,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!g.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|I(e,t),r=y(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,n);if(ArrayBuffer.isView(e))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return _(t.buffer,t.byteOffset,t.byteLength)}return x(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)));if(oe(e,ArrayBuffer)||e&&oe(e.buffer,ArrayBuffer))return _(e,n,r);if("undefined"!=typeof SharedArrayBuffer&&(oe(e,SharedArrayBuffer)||e&&oe(e.buffer,SharedArrayBuffer)))return _(e,n,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return g.from(i,n,r);var o=function(e){if(g.isBuffer(e)){var t=0|E(e.length),n=y(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?y(0):x(e);if("Buffer"===e.type&&Array.isArray(e.data))return x(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return g.from(e[Symbol.toPrimitive]("string"),n,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)))}function w(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function k(e){return w(e),y(e<0?0:0|E(e))}function x(e){for(var t=e.length<0?0:0|E(e.length),n=y(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function _(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,g.prototype),r}function E(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function I(e,n){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||oe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":t(f)(e)));var r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var o=!1;;)switch(n){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ne(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return re(e).length;default:if(o)return i?-1:ne(e).length;n=(""+n).toLowerCase(),o=!0}}function T(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,n);case"utf8":case"utf-8":return D(this,t,n);case"ascii":return U(this,t,n);case"latin1":case"binary":return j(this,t,n);case"base64":return M(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function S(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function O(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ae(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=g.from(t,r)),g.isBuffer(t))return 0===t.length?-1:A(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):A(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function A(e,t,n,r,i){var o,a=1,s=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=n;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var f=!0,p=0;p<u;p++)if(c(e,o+p)!==c(t,p)){f=!1;break}if(f)return o}return-1}function N(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o,a=t.length;for(r>a/2&&(r=a/2),o=0;o<r;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[n+o]=s}return o}function R(e,t,n,r){return ie(ne(t,e.length-n),e,n,r)}function C(e,t,n,r){return ie(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function L(e,t,n,r){return ie(re(t),e,n,r)}function P(e,t,n,r){return ie(function(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function M(e,t,n){return 0===t&&n===e.length?h.fromByteArray(e):h.fromByteArray(e.slice(t,n))}function D(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=n){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&o)<<6|63&u)>127&&(a=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&o)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(a=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(a=f)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|1023&a),r.push(a),i+=s}return function(e){var t=e.length;if(t<=B)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=B));return n}(r)}g.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),g.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}}),g.poolSize=8192,g.from=function(e,t,n){return b(e,t,n)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array),g.alloc=function(e,t,n){return function(e,t,n){return w(e),e<=0?y(e):void 0!==t?"string"==typeof n?y(e).fill(t,n):y(e).fill(t):y(e)}(e,t,n)},g.allocUnsafe=function(e){return k(e)},g.allocUnsafeSlow=function(e){return k(e)},g.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==g.prototype},g.compare=function(e,t){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(e)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return g.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=g.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(oe(o,Uint8Array))i+o.length>r.length?(g.isBuffer(o)||(o=g.from(o)),o.copy(r,i)):Uint8Array.prototype.set.call(r,o,i);else{if(!g.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i)}i+=o.length}return r},g.byteLength=I,g.prototype._isBuffer=!0,g.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)S(this,t,t+1);return this},g.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)S(this,t,t+3),S(this,t+1,t+2);return this},g.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)S(this,t,t+7),S(this,t+1,t+6),S(this,t+2,t+5),S(this,t+3,t+4);return this},g.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):T.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===g.compare(this,e)},g.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(g.prototype[v]=g.prototype.inspect),g.prototype.compare=function(e,n,r,i,o){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),!g.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":t(f)(e)));if(void 0===n&&(n=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),n<0||r>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&n>=r)return 0;if(i>=o)return-1;if(n>=r)return 1;if(this===e)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(r>>>=0)-(n>>>=0),u=Math.min(a,s),c=this.slice(i,o),l=e.slice(n,r),p=0;p<u;++p)if(c[p]!==l[p]){a=c[p],s=l[p];break}return a<s?-1:s<a?1:0},g.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},g.prototype.indexOf=function(e,t,n){return O(this,e,t,n,!0)},g.prototype.lastIndexOf=function(e,t,n){return O(this,e,t,n,!1)},g.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return N(this,e,t,n);case"utf8":case"utf-8":return R(this,e,t,n);case"ascii":case"latin1":case"binary":return C(this,e,t,n);case"base64":return L(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var B=4096;function U(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function j(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function F(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=se[e[o]];return i}function z(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function H(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function W(e,t,n,r,i,o){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function V(e,t,n,r,i){Q(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function q(e,t,n,r,i){Q(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function G(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function J(e,t,n,r,i){return t=+t,n>>>=0,i||G(e,0,n,4),d.write(e,t,n,r,23,4),n+4}function K(e,t,n,r,i){return t=+t,n>>>=0,i||G(e,0,n,8),d.write(e,t,n,r,52,8),n+8}g.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,g.prototype),r},g.prototype.readUintLE=g.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||H(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},g.prototype.readUintBE=g.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||H(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},g.prototype.readUint8=g.prototype.readUInt8=function(e,t){return e>>>=0,t||H(e,1,this.length),this[e]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,t){return e>>>=0,t||H(e,2,this.length),this[e]|this[e+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,t){return e>>>=0,t||H(e,2,this.length),this[e]<<8|this[e+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,t){return e>>>=0,t||H(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,t){return e>>>=0,t||H(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},g.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+n*Math.pow(2,24);return BigInt(r)+(BigInt(i)<<BigInt(32))})),g.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),g.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||H(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},g.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||H(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},g.prototype.readInt8=function(e,t){return e>>>=0,t||H(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},g.prototype.readInt16LE=function(e,t){e>>>=0,t||H(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},g.prototype.readInt16BE=function(e,t){e>>>=0,t||H(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},g.prototype.readInt32LE=function(e,t){return e>>>=0,t||H(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},g.prototype.readInt32BE=function(e,t){return e>>>=0,t||H(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},g.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),g.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n)})),g.prototype.readFloatLE=function(e,t){return e>>>=0,t||H(e,4,this.length),d.read(this,e,!0,23,4)},g.prototype.readFloatBE=function(e,t){return e>>>=0,t||H(e,4,this.length),d.read(this,e,!1,23,4)},g.prototype.readDoubleLE=function(e,t){return e>>>=0,t||H(e,8,this.length),d.read(this,e,!0,52,8)},g.prototype.readDoubleBE=function(e,t){return e>>>=0,t||H(e,8,this.length),d.read(this,e,!1,52,8)},g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||W(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||W(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},g.prototype.writeUint8=g.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,1,255,0),this[t]=255&e,t+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);W(this,e,t,n,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},g.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);W(this,e,t,n,i-1,-i)}var o=n-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},g.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},g.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},g.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeFloatLE=function(e,t,n){return J(this,e,t,!0,n)},g.prototype.writeFloatBE=function(e,t,n){return J(this,e,t,!1,n)},g.prototype.writeDoubleLE=function(e,t,n){return K(this,e,t,!0,n)},g.prototype.writeDoubleBE=function(e,t,n){return K(this,e,t,!1,n)},g.prototype.copy=function(e,t,n,r){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},g.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!g.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=g.isBuffer(e)?e:g.from(e,r),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this};var Y={};function X(e,n,r){Y[e]=function(r){t(l)(o,r);var i=t(p)(o);function o(){var r;return t(u)(this,o),r=i.call(this),Object.defineProperty(t(s)(r),"message",{value:n.apply(t(s)(r),arguments),writable:!0,configurable:!0}),r.name="".concat(r.name," [").concat(e,"]"),r.stack,delete r.name,r}return t(c)(o,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),o}(r)}function $(e){for(var t="",n=e.length,r="-"===e[0]?1:0;n>=r+4;n-=3)t="_".concat(e.slice(n-3,n)).concat(t);return"".concat(e.slice(0,n)).concat(t)}function Q(e,n,r,i,o,a){if(e>r||e<n){var s,u="bigint"===(void 0===n?"undefined":t(f)(n))?"n":"";throw s=a>3?0===n||n===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(n).concat(u," and <= ").concat(r).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,n){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||ee(t,e.length-(n+1))}(i,o,a)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,n){if(Math.floor(e)!==e)throw Z(e,n),new Y.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(e,n){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===n?"undefined":t(f)(n))}),TypeError),X("ERR_OUT_OF_RANGE",(function(e,n,r){var i='The value of "'.concat(e,'" is out of range.'),o=r;return Number.isInteger(r)&&Math.abs(r)>Math.pow(2,32)?o=$(String(r)):"bigint"===(void 0===r?"undefined":t(f)(r))&&(o=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(o=$(o)),o+="n"),i+=" It must be ".concat(n,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function ne(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function re(e){return h.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,n,r){var i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,o=r.default(e);if(t){var a=r.default(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i.default(this,n)}};var n=a(o("aTHs7")),r=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=f(e),i=r[0],o=r[1],u=new s(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=a[e.charCodeAt(n)]<<18|a[e.charCodeAt(n+1)]<<12|a[e.charCodeAt(n+2)]<<6|a[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(n)]<<2|a[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(n)]<<10|a[e.charCodeAt(n+1)]<<4|a[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],a=16383,s=0,u=n-r;s<u;s+=a)i.push(p(e,s,s+a>u?u:s+a));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function p(e,t,n){for(var r,i,a=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,f=n?i-1:0,p=n?-1:1,h=e[t+f];for(f+=p,o=h&(1<<-l)-1,h>>=-l,l+=s;l>0;o=256*o+e[t+f],f+=p,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+e[t+f],f+=p,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,r),o-=c}return(h?-1:1)*a*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:o-1,d=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+f>=1?p/u:p*Math.pow(2,1-f))*u>=2&&(a++,u/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(t*u-1)*Math.pow(2,i),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;e[n+h]=255&s,h+=d,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+h]=255&a,h+=d,a/=256,c-=8);e[n+h-d]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var n=o("c4C4W"),r=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),f=o("5TB86"),p=o("dW1zJ"),h=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var d,v=e.data,m=e.headers,y=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}n.isFormData(v)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+k)}var x=s(e.baseURL,e.url);function _(){if(b){var n="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:n,config:e,request:b};r((function(e){t(e),g()}),(function(e){o(e),g()}),i),b=null}}if(b.open(e.method.toUpperCase(),a(x,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=_:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(_)},b.onabort=function(){b&&(o(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){o(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new f(t,n.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},n.isStandardBrowserEnv()){var E=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in b&&n.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){b&&(o(!e||e&&e.type?new p:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),v||(v=null);var I=h(x);I&&-1===["http","https","file"].indexOf(I)?o(new f("Unsupported protocol "+I+":",f.ERR_BAD_REQUEST,e)):b.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var n=o("5TB86");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("jFG8L",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var n=o("7xjuH"),r=o("ftRZn");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var n=o("c4C4W"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var n=o("5TB86");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function a(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("9SeBc",(function(e,n){var r=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,n){s[e]=function(i){return(void 0===i?"undefined":t(r)(i))===e||"a"+(n<1?"n ":" ")+e}}));var u={};s.transitional=function(e,t,n){function r(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,o){if(!1===e)throw new a(r(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var n=o("dW1zJ");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.dac1955e.js","i3NJ7":"search.1369644a.svg","2Y7o2":"cat.76a6211e.svg","5UbS1":"index.ef2b7f1e.css"}'));var a=o("hKHmD");function s(){var e;return e={loader:document.querySelector(".loader"),preloader:document.querySelector(".preloader"),moviesGallery:document.querySelector(".movies-gallery__list"),header:document.querySelector(".header"),headerContainer:document.querySelector(".header-container"),library:document.querySelector('[data-name="library"]'),home:document.querySelector('[data-name="Home"]'),searchForm:document.querySelector(".search-form"),headerBtnList:document.querySelector(".header-btn-list"),logoLink:document.querySelector(".logo-link"),modal:document.querySelector(".modal"),logoIcon:document.querySelector(".logo-icon"),closeModalBtn:document.querySelector(".modal-btn"),watchedBtn:document.querySelector(".modal-btn__addwatch"),queueBtn:document.querySelector(".modal-btn__accent")},t(a)(e,"queueBtn",document.querySelector(".modal-btn__addqueue")),t(a)(e,"logoIcon",document.querySelector(".logo-icon")),t(a)(e,"authForm",document.querySelector(".auth-form")),t(a)(e,"authBackdrop",document.querySelector(".auth-backdrop")),t(a)(e,"trendingBtn",document.querySelector(".trending-btn")),t(a)(e,"tvBtn",document.querySelector(".tv-btn")),t(a)(e,"topRatedBtn",document.querySelector(".top-rated-btn")),t(a)(e,"upcomingBtn",document.querySelector(".upcoming-btn")),t(a)(e,"btnFilter",document.querySelector(".filter-btn")),t(a)(e,"yearFilter",document.querySelector("#yearFilter")),t(a)(e,"genreFilter",document.querySelector("#genreFilter")),t(a)(e,"filterInput",document.querySelectorAll(".filter-input")),t(a)(e,"backToTopBtn",document.querySelector(".back-to-top-btn")),t(a)(e,"emptyCard",document.querySelector(".empty-card")),t(a)(e,"moviesGalleryContainer",document.querySelector(".movies-gallery")),e}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l.default(e,t,n[t])}))}return e};var c,l=(c=o("hKHmD"))&&c.__esModule?c:{default:c};var f=function(e,n){var r=e.original_name,i=e.original_title,o=e.poster_path,a=e.genre_ids,s=e.vote_average,c=e.release_date,l=function(e,t){if(!e||!e.length)return"";var n=[];return e.forEach((function(e){var r=t[e];r&&n.push(r)})),n.length>2?"".concat(n[0],", ").concat(n[1],", Other"):2===n.length?"".concat(n[0],", ").concat(n[1]):n[0]}(a,n);return"\n    <li class='movies-gallery__item' data-movie='".concat(JSON.stringify(t(u)({},e,{genres:l})),"'>\n      <div class='movies-gallery__img'>\n        <img\n          src='").concat(o?"https://image.tmdb.org/t/p/w500".concat(o):"images/no-poster-available.jpeg","'\n          alt='").concat(i||r,"'\n          loading='lazy'\n          width='395'\n        />\n      </div>\n      <div class='movies-gallery__text'>\n        <p class='movies-gallery__title'>").concat(i||r,"</p>\n        <p class='movies-gallery__genre ellipsis'>\n          ").concat(l," | ").concat((null==c?void 0:c.split("-")[0])||"2077","\n        </p>\n        <span class='movies-gallery__rating'>").concat(s,"</span>\n      </div>\n    </li>\n  ")},p=function(e,t){var n=e.original_name,r=e.original_title,i=e.poster_path,o=e.genres,a=e.popularity,s=e.vote_average,u=e.vote_count,c=e.overview;return'\n    <div class="modal-contaner">\n      <button class="modal-close" type="button">\n        <svg class="modal-btn__icon" width="30" height="30">\n            <use href="images/modal-close.svg"></use>\n        </svg>\n      </button>\n      <img class="modal-img" src="'.concat(i?"https://image.tmdb.org/t/p/w500".concat(i):"images/no-poster-available.jpeg",'" alt="').concat(r||n,'" />\n        <div class="modal-block__text">\n            <h2 class="modal-title">').concat(r||n,'</h2>\n            <ul class="modal-list__key">\n                <li class="modal-info">').concat(s," / ").concat(u,'</li>\n                <li class="modal-info">').concat(a,'</li>\n                <li class="modal-info">').concat(r,'</li>\n                <li class="modal-info">').concat(o,'</li>\n            </ul>\n            <ul class="modal-list__library">\n                <li class="modal-info__library">').concat(s," / ").concat(u,'</li>\n                <li class="modal-info__library">').concat(a,'</li>\n                <li class="modal-info__library">').concat(r,'</li>\n                <li class="modal-info__library">').concat(o,'</li>\n            </ul>\n            <h3 class="modal-text__title">About</h3>\n            <p>').concat(c,'</p>\n            <div class="modal-block__btn">\n                <button class="modal-btn__addwatch" type="button">add to watched</button>\n                <button class="modal-btn__accent" type="button">').concat(t?"remove from queue":"add to queue","</button>\n            </div>\n        </div>\n    </div>\n  ")},h=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)||void 0}catch(e){console.error("Get state error: ",e)}},d=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e)}},v="28318b77967fcb148715c1c7fa524b54",m="movies-in-queue",y=s(),g=y.modal,b=y.moviesGallery;y.backdropREF;function w(e){var t=document.createElement("button");return t.classList.add("modal-btn__accent"),t.innerHTML=e,t}var k=function(e){document.querySelector(".modal-btn__accent").remove(),document.querySelector(".modal-block__btn").append(w("remove from queue")),document.querySelector(".modal-btn__accent").addEventListener("click",(function(){return x(e)}));var t=h(m);t||(t=[]),t.push(e),d(m,t)},x=function(e){document.querySelector(".modal-btn__accent").remove(),document.querySelector(".modal-block__btn").append(w("add to queue")),document.querySelector(".modal-btn__accent").addEventListener("click",(function(){return k(e)}));var t=h(m);d(m,t.filter((function(t){return t.id!==e.id})))},_=function(e){"Escape"===e.code&&(g.classList.add("is-hidden"),window.removeEventListener("keydown",_))},E=function(){g.classList.add("is-hidden"),window.removeEventListener("keydown",_),document.querySelector(".modal-close").removeEventListener("click",E)};b.addEventListener("click",(function(e){var t=e.target.closest(".movies-gallery__item");if(t){var n,r,i=JSON.parse(t.getAttribute("data-movie")),o=(n=i.id,!!(r=h(m))&&Boolean(r.find((function(e){return e.id===n}))));g.classList.remove("is-hidden"),g.innerHTML=p(i,o);var a=document.querySelector(".modal-btn__accent"),s=document.querySelector(".modal-close");window.addEventListener("keydown",_),s.addEventListener("click",E),a.addEventListener("click",(function(){o?x(i):k(i)}))}}));var I={};function T(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(I,"__esModule",{value:!0}),I.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){T(o,r,i,a,s,"next",e)}function s(e){T(o,r,i,a,s,"throw",e)}a(void 0)}))}};var S={},O=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(e,t,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=I(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(A([])));k&&k!==n&&r.call(k,o)&&(b=k);var x=g.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return y.prototype=g,u(x,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(E.prototype),u(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(x),u(x,s,"Generator"),u(x,o,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(S);try{regeneratorRuntime=O}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=O:Function("r","regeneratorRuntime = r")(O)}var A;A=o("ke5Oc");var N="https://api.themoviedb.org/3/search/movie",R="https://api.themoviedb.org/3/trending/all/day",C="https://api.themoviedb.org/3/trending/tv/day",L="https://api.themoviedb.org/3/movie/top_rated",P="https://api.themoviedb.org/3/movie/upcoming",M="https://api.themoviedb.org/3/discover/movie",D="https://api.themoviedb.org/3/genre";function B(e){return U.apply(this,arguments)}function U(){return(U=t(I)(t(S).mark((function e(n){var r;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(R,"?api_key=").concat(v,"&page=").concat(n));case 3:return r=e.sent.data,console.log(r),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function j(e,t){return F.apply(this,arguments)}function F(){return(F=t(I)(t(S).mark((function e(n,r){var i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(N,"?api_key=").concat(v,"&language=en-US&include_adult=false"),{params:{query:n.length?n:null,page:r}});case 3:return i=e.sent.data,console.log(i),e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function z(){return H.apply(this,arguments)}function H(){return(H=t(I)(t(S).mark((function e(){var n;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(D,"/movie/list?api_key=").concat(v,"&language=en-US"));case 3:return n=e.sent.data,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(e){return V.apply(this,arguments)}function V(){return(V=t(I)(t(S).mark((function e(n){var r;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(C,"?api_key=").concat(v,"&language=en-US&").concat(n));case 3:return r=e.sent.data,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e){return G.apply(this,arguments)}function G(){return(G=t(I)(t(S).mark((function e(n){var r;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(L,"?api_key=").concat(v,"&language=en-US&").concat(n));case 3:return r=e.sent.data,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(e){return K.apply(this,arguments)}function K(){return(K=t(I)(t(S).mark((function e(n){var r;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(P,"?api_key=").concat(v,"&language=en-US&page=").concat(n));case 3:return r=e.sent.data,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Y(e,t){return X.apply(this,arguments)}function X(){return(X=t(I)(t(S).mark((function e(n,r){var i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(A).get("".concat(M,"?api_key=").concat(v,"&with_genres=28&primary_release_year=").concat(r,"&language=en-US"));case 3:return i=e.sent.data,e.abrupt("return",i);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var $=s(),Q=$.preloader;$.loader;document.body.onload=function(){setTimeout((function(){Q.classList.contains("done")||Q.classList.add("done")}),1e3)};var Z=s(),ee=Z.moviesGallery,te=Z.trendingBtn;function ne(){return re.apply(this,arguments)}function re(){return(re=t(I)(t(S).mark((function e(){var n;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:return n=e.sent.genres,e.abrupt("return",n.reduce((function(e,t){var n=t.id,r=t.name;return e[n]=r,e}),{}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=t(I)(t(S).mark((function e(n){var r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te.classList.add("btn-tab-active"),e.prev=1,e.next=4,B(n);case 4:return r=e.sent.results,e.next=7,ne();case 7:i=e.sent,o="",r.forEach((function(e){o+=f(e,i)})),ee.innerHTML=o,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}ie(1);var ae=o("8MBJY"),se=o("a2hTj"),ue=(a=o("hKHmD"),{});Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=function(e){return ce.default(e)||le.default(e)||pe.default(e)||fe.default()};var ce=he(o("kMC0W")),le=he(o("7AJDX")),fe=he(o("8CtQK")),pe=he(o("auk6i"));function he(e){return e&&e.__esModule?e:{default:e}}ae=o("8MBJY"),se=o("a2hTj");var de={};Object.defineProperty(de,"__esModule",{value:!0}),de.default=function(e,t){return ve.default(e)||me.default(e,t)||ge.default(e,t)||ye.default()};var ve=be(o("8slrw")),me=be(o("7AJDX")),ye=be(o("ifqQW")),ge=be(o("auk6i"));function be(e){return e&&e.__esModule?e:{default:e}}var we=o("ds8z5"),ke=(ae=o("8MBJY"),se=o("a2hTj"),o("eYQtU")),xe={};Object.defineProperty(xe,"__esModule",{value:!0}),xe.default=function(e){return Oe(e)};var _e=Se(o("ge8co")),Ee=Se(o("cZGw3")),Ie=Se(o("fVNic")),Te=Se(o("gD1JV"));function Se(e){return e&&e.__esModule?e:{default:e}}function Oe(e){var t="function"==typeof Map?new Map:void 0;return Oe=function(e){if(null===e||!Ee.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _e.default(e,arguments,Ie.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Te.default(n,e)},Oe(e)}var Ae=o("2MbLg"),Ne=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Re={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,f=(3&o)<<4|s>>4,p=(15&s)<<2|c>>6,h=63&c;u||(h=64,a||(p=64)),r.push(n[l],n[f],n[p],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ne(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ce=function(e){return function(e){var t=Ne(e);return Re.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Le=function(e){try{return Re.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pe=function(){"use strict";function e(){var n=this;t(ae)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(se)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var De=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e,i,o){var a;return t(ae)(this,r),(a=n.call(this,i)).code=e,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(t(we)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(we)(a),Be.prototype.create),a}return r}(t(xe)(Error)),Be=function(){"use strict";function e(n,r,i){t(ae)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(se)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?Ue(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new De(o,u,i);return c}}]),e}();function Ue(e,t){return e.replace(je,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var je=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ze(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(He(l)&&He(f)){if(!ze(l,f))return!1}else if(l!==f)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var p=!0,h=!1,d=void 0;try{for(var v,m=r[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){h=!0,d=e}finally{try{p||null==m.return||m.return()}finally{if(h)throw d}}return!0}function He(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(e,r){var i=t(de)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(e)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function Ve(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(de)(e.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function qe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge=function(){"use strict";function e(n,r){var i=this;t(ae)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(se)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Je),void 0===r.error&&(r.error=Je),void 0===r.complete&&(r.complete=Je);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Je(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(e){return e&&e._delegate?e._delegate:e}var Ye=function(){"use strict";function e(n,r,i){t(ae)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(se)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Xe="[DEFAULT]",$e=function(){"use strict";function e(n,r){t(ae)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(se)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Pe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Xe})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=t(de)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(ue)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(ue)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=t(de)(c.value,2),p=f[0],h=f[1],d=this.normalizeInstanceIdentifier(p);i===d&&h.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Xe?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return this.component?this.component.multipleInstances?e:Xe:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ze,et=function(){"use strict";function e(n){t(ae)(this,e),this.name=n,this.providers=new Map}return t(se)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new $e(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),tt=(ae=o("8MBJY"),se=o("a2hTj"),a=o("hKHmD"),[]);(Ze=Qe||(Qe={}))[Ze.DEBUG=0]="DEBUG",Ze[Ze.VERBOSE=1]="VERBOSE",Ze[Ze.INFO=2]="INFO",Ze[Ze.WARN=3]="WARN",Ze[Ze.ERROR=4]="ERROR",Ze[Ze.SILENT=5]="SILENT";var nt,rt={debug:Qe.DEBUG,verbose:Qe.VERBOSE,info:Qe.INFO,warn:Qe.WARN,error:Qe.ERROR,silent:Qe.SILENT},it=Qe.INFO,ot=(nt={},t(a)(nt,Qe.DEBUG,"log"),t(a)(nt,Qe.VERBOSE,"log"),t(a)(nt,Qe.INFO,"info"),t(a)(nt,Qe.WARN,"warn"),t(a)(nt,Qe.ERROR,"error"),nt),at=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=ot[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(t(ue)(i)))}},st=function(){"use strict";function e(n){t(ae)(this,e),this.name=n,this._logLevel=it,this._logHandler=at,this._userLogHandler=null,tt.push(this)}return t(se)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Qe))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?rt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Qe.DEBUG].concat(t(ue)(n))),this._logHandler.apply(this,[this,Qe.DEBUG].concat(t(ue)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Qe.VERBOSE].concat(t(ue)(n))),this._logHandler.apply(this,[this,Qe.VERBOSE].concat(t(ue)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Qe.INFO].concat(t(ue)(n))),this._logHandler.apply(this,[this,Qe.INFO].concat(t(ue)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Qe.WARN].concat(t(ue)(n))),this._logHandler.apply(this,[this,Qe.WARN].concat(t(ue)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Qe.ERROR].concat(t(ue)(n))),this._logHandler.apply(this,[this,Qe.ERROR].concat(t(ue)(n)))}}]),e}();var ut,ct;var lt=new WeakMap,ft=new WeakMap,pt=new WeakMap,ht=new WeakMap,dt=new WeakMap;var vt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ft.get(e);if("objectStoreNames"===t)return e.objectStoreNames||pt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function mt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ct||(ct=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(bt(this),n),gt(lt.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return gt(e.apply(bt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=e).call.apply(a,[bt(this),n].concat(t(ue)(i)));return pt.set(s,n.sort?n.sort():[n]),gt(s)}}function yt(e){return"function"==typeof e?mt(e):(e instanceof IDBTransaction&&function(e){if(!ft.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));ft.set(e,t)}}(e),t=e,(ut||(ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,vt):e);var t}function gt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(gt(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&lt.set(e,t)})).catch((function(){})),dt.set(n,t),n;var t,n;if(ht.has(e))return ht.get(e);var r=yt(e);return r!==e&&(ht.set(e,r),dt.set(r,e)),r}var bt=function(e){return dt.get(e)};function wt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=gt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(gt(s.result),e.oldVersion,e.newVersion,gt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var kt=["get","getKey","getAll","getAllKeys","count"],xt=["put","add","delete","clear"],_t=new Map;function Et(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(_t.get(n))return _t.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=xt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||kt.includes(r))){var a,s=(a=t(I)(t(S).mark((function e(n){var a,s,u,c,l,f,p=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=p.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=p[u];return l=this.transaction(n,o?"readwrite":"readonly"),f=l.store,i&&(f=f.index(s.shift())),e.next=7,Promise.all([(c=f)[r].apply(c,t(ue)(s)),o&&l.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)});return _t.set(n,s),s}}}vt=function(e){return t(u)({},e,{get:function(t,n,r){return Et(t,n)||e.get(t,n,r)},has:function(t,n){return!!Et(t,n)||e.has(t,n)}})}(vt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var It=function(){"use strict";function e(n){t(ae)(this,e),this.container=n}return t(se)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Tt,St,Ot="@firebase/app",At="0.7.31",Nt=new st("@firebase/app"),Rt="[DEFAULT]",Ct=(Tt={},t(a)(Tt,Ot,"fire-core"),t(a)(Tt,"@firebase/app-compat","fire-core-compat"),t(a)(Tt,"@firebase/analytics","fire-analytics"),t(a)(Tt,"@firebase/analytics-compat","fire-analytics-compat"),t(a)(Tt,"@firebase/app-check","fire-app-check"),t(a)(Tt,"@firebase/app-check-compat","fire-app-check-compat"),t(a)(Tt,"@firebase/auth","fire-auth"),t(a)(Tt,"@firebase/auth-compat","fire-auth-compat"),t(a)(Tt,"@firebase/database","fire-rtdb"),t(a)(Tt,"@firebase/database-compat","fire-rtdb-compat"),t(a)(Tt,"@firebase/functions","fire-fn"),t(a)(Tt,"@firebase/functions-compat","fire-fn-compat"),t(a)(Tt,"@firebase/installations","fire-iid"),t(a)(Tt,"@firebase/installations-compat","fire-iid-compat"),t(a)(Tt,"@firebase/messaging","fire-fcm"),t(a)(Tt,"@firebase/messaging-compat","fire-fcm-compat"),t(a)(Tt,"@firebase/performance","fire-perf"),t(a)(Tt,"@firebase/performance-compat","fire-perf-compat"),t(a)(Tt,"@firebase/remote-config","fire-rc"),t(a)(Tt,"@firebase/remote-config-compat","fire-rc-compat"),t(a)(Tt,"@firebase/storage","fire-gcs"),t(a)(Tt,"@firebase/storage-compat","fire-gcs-compat"),t(a)(Tt,"@firebase/firestore","fire-fst"),t(a)(Tt,"@firebase/firestore-compat","fire-fst-compat"),t(a)(Tt,"fire-js","fire-js"),t(a)(Tt,"firebase","fire-js-all"),Tt),Lt=new Map,Pt=new Map;function Mt(e,t){try{e.container.addComponent(t)}catch(n){Nt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Dt(e){var t=e.name;if(Pt.has(t))return Nt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Pt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=Lt.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){Mt(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function Bt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ut=(St={},t(a)(St,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(a)(St,"bad-app-name","Illegal App name: '{$appName}"),t(a)(St,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(a)(St,"app-deleted","Firebase App named '{$appName}' already deleted"),t(a)(St,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(a)(St,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(a)(St,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(a)(St,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(a)(St,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(a)(St,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),St),jt=new Be("app","Firebase",Ut),Ft=function(){"use strict";function e(n,r,i){var o=this;t(ae)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ye("app",(function(){return o}),"PUBLIC"))}return t(se)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}]),e}(),zt="9.9.3";function Ht(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=Lt.get(e);if(!t)throw jt.create("no-app",{appName:e});return t}function Wt(e,t,n){var r,i=null!==(r=Ct[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Nt.warn(s.join(" "))}Dt(new Ye("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vt="firebase-heartbeat-store",qt=null;function Gt(){return qt||(qt=wt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Vt)}}).catch((function(e){throw jt.create("idb-open",{originalErrorMessage:e.message})}))),qt}function Jt(e){return Kt.apply(this,arguments)}function Kt(){return(Kt=t(I)(t(S).mark((function e(n){var r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Gt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Vt).objectStore(Vt).get($t(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof De?Nt.warn(e.t0.message):(o=jt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),Nt.warn(o.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Yt(e,t){return Xt.apply(this,arguments)}function Xt(){return(Xt=t(I)(t(S).mark((function e(n,r){var i,o,a,s,u;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Gt();case 4:return o=e.sent,a=o.transaction(Vt,"readwrite"),s=a.objectStore(Vt),e.next=9,s.put(r,$t(n));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof De?Nt.warn(e.t0.message):(u=jt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),Nt.warn(u.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function $t(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt=function(){"use strict";function e(n){var r=this;t(ae)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new nn(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(se)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r,i,o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=Zt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r,i,o,a,s;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=Zt(),i=en(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=Ce(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function Zt(){return(new Date).toISOString().substring(0,10)}function en(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),rn(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),rn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var tn,nn=function(){"use strict";function e(n){t(ae)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(se)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Jt(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return o=t.sent,t.abrupt("return",Yt(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o;return t(S).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",Yt(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t(ue)(o.heartbeats).concat(t(ue)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function rn(e){return Ce(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn="",Dt(new Ye("platform-logger",(function(e){return new It(e)}),"PRIVATE")),Dt(new Ye("heartbeat",(function(e){return new Qt(e)}),"PRIVATE")),Wt(Ot,At,tn),Wt(Ot,At,"esm2017"),Wt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wt("firebase","9.9.3","app");we=o("ds8z5"),ae=o("8MBJY"),se=o("a2hTj"),a=o("hKHmD");var on={};Object.defineProperty(on,"__esModule",{value:!0}),on.default=function(e,t,n){return sn(e,t,n)};var an=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function sn(e,t,n){return(sn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=an.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var un=o("fVNic");ke=o("eYQtU"),Ae=o("2MbLg");function cn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ln(){return t(a)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var fn=ln,pn=new Be("auth","Firebase",ln()),hn=new st("@firebase/auth");function dn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;hn.logLevel<=Qe.ERROR&&(o=hn).error.apply(o,["Auth (".concat(zt,"): ").concat(e)].concat(t(ue)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw gn.apply(void 0,[e].concat(t(ue)(r)))}function mn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return gn.apply(void 0,[e].concat(t(ue)(r)))}function yn(e,n,r){var i=Object.assign(Object.assign({},fn()),t(a)({},n,r));return new Be("auth","Firebase",i).create(n,{appName:e.name})}function gn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=r[0],u=t(ue)(r.slice(1));return u[0]&&(u[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(t(ue)(u)))}return(o=pn).create.apply(o,[e].concat(t(ue)(r)))}function bn(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!e)throw gn.apply(void 0,[n].concat(t(ue)(i)))}function wn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw dn(t),new Error(t)}function kn(e,t){e||wn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn=new Map;function _n(e){kn(e instanceof Function,"Expected a class definition");var t=xn.get(e);return t?(kn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e,t){var n=Bt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ze(n.getOptions(),null!=t?t:{}))return r;vn(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Tn(){return"http:"===Sn()||"https:"===Sn()}function Sn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Tn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var An=function(){"use strict";function e(n,r){t(ae)(this,e),this.shortDelay=n,this.longDelay=r,kn(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(se)(e,[{key:"get",value:function(){return On()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){kn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn,Cn=function(){"use strict";function e(){t(ae)(this,e)}return t(se)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Ln=(Rn={},t(a)(Rn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(a)(Rn,"MISSING_CUSTOM_TOKEN","internal-error"),t(a)(Rn,"INVALID_IDENTIFIER","invalid-email"),t(a)(Rn,"MISSING_CONTINUE_URI","internal-error"),t(a)(Rn,"INVALID_PASSWORD","wrong-password"),t(a)(Rn,"MISSING_PASSWORD","internal-error"),t(a)(Rn,"EMAIL_EXISTS","email-already-in-use"),t(a)(Rn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(a)(Rn,"INVALID_IDP_RESPONSE","invalid-credential"),t(a)(Rn,"INVALID_PENDING_TOKEN","invalid-credential"),t(a)(Rn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(a)(Rn,"MISSING_REQ_TYPE","internal-error"),t(a)(Rn,"EMAIL_NOT_FOUND","user-not-found"),t(a)(Rn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(a)(Rn,"EXPIRED_OOB_CODE","expired-action-code"),t(a)(Rn,"INVALID_OOB_CODE","invalid-action-code"),t(a)(Rn,"MISSING_OOB_CODE","internal-error"),t(a)(Rn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(a)(Rn,"INVALID_ID_TOKEN","invalid-user-token"),t(a)(Rn,"TOKEN_EXPIRED","user-token-expired"),t(a)(Rn,"USER_NOT_FOUND","user-token-expired"),t(a)(Rn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(a)(Rn,"INVALID_CODE","invalid-verification-code"),t(a)(Rn,"INVALID_SESSION_INFO","invalid-verification-id"),t(a)(Rn,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(a)(Rn,"MISSING_SESSION_INFO","missing-verification-id"),t(a)(Rn,"SESSION_EXPIRED","code-expired"),t(a)(Rn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(a)(Rn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(a)(Rn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(a)(Rn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(a)(Rn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(a)(Rn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(a)(Rn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(a)(Rn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(a)(Rn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(a)(Rn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(a)(Rn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Rn),Pn=new An(3e4,6e4);function Mn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Dn(e,t,n,r){return Bn.apply(this,arguments)}function Bn(){return Bn=t(I)(t(S).mark((function e(n,r,i,o){var a,s=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>4&&void 0!==s[4]?s[4]:{},e.abrupt("return",Un(n,a,t(I)(t(S).mark((function e(){var a,s,u,c;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),u=We(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Cn.fetch()(Hn(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Bn.apply(this,arguments)}function Un(e,t,n){return jn.apply(this,arguments)}function jn(){return(jn=t(I)(t(S).mark((function e(n,r,i){var o,a,s,u,c,l,f,p,h;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},Ln),r),e.prev=2,a=new Wn(n),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw Vn(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(de)(c.split(" : "),2),f=l[0],p=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw Vn(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw Vn(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw Vn(n,"user-disabled",u);case 29:if(h=o[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw yn(n,h,p);case 34:vn(n,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof De)){e.next=41;break}throw e.t0;case 41:vn(n,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Fn(e,t,n,r){return zn.apply(this,arguments)}function zn(){return zn=t(I)(t(S).mark((function e(n,r,i,o){var a,s,u=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Dn(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&vn(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),zn.apply(this,arguments)}function Hn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Nn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Wn=function(){"use strict";function e(n){var r=this;t(ae)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(mn(n.auth,"network-request-failed"))}),Pn.get())}))}return t(se)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Vn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=mn(e,t,r);return i.customData._tokenResponse=n,i}function qn(e,t){return Gn.apply(this,arguments)}function Gn(){return(Gn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Dn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Jn(e,t){return Kn.apply(this,arguments)}function Kn(){return(Kn=t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Dn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return Xn=t(I)(t(S).mark((function e(n){var r,i,o,a,s,u,c=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=Ke(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,bn((a=Qn(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:Yn($n(a.auth_time)),issuedAtTime:Yn($n(a.iat)),expirationTime:Yn($n(a.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Xn.apply(this,arguments)}function $n(e){return 1e3*Number(e)}function Qn(e){var n,r=t(de)(e.split("."),3),i=r[0],o=r[1],a=r[2];if(void 0===i||void 0===o||void 0===a)return dn("JWT malformed, contained fewer than 3 sections"),null;try{var s=Le(o);return s?JSON.parse(s):(dn("Failed to decode base64 JWT payload"),null)}catch(e){return dn("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function Zn(e,t){return er.apply(this,arguments)}function er(){return er=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){var i=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof De&&tr(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),er.apply(this,arguments)}function tr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr=function(){"use strict";function e(n){t(ae)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(se)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(r=t.t0)||void 0===r?void 0:r.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),n,null,[[1,6]])})))()}}]),e}(),rr=function(){"use strict";function e(n,r){t(ae)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(se)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){return or.apply(this,arguments)}function or(){return(or=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n){var r,i,o,a,s,u,c,l,f,p,h;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,Zn(n,Jn(i,{idToken:o}));case 7:bn(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ur(s.providerUserInfo):[],c=sr(n.providerData,u),l=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),p=!!l&&f,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new rr(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(n,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ar(){return(ar=t(I)(t(S).mark((function e(n){var r;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Ke(n),e.next=3,ir(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function sr(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(ue)(r).concat(t(ue)(n))}function ur(e){return e.map((function(e){var t=e.providerId,n=cn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function cr(e,t){return lr.apply(this,arguments)}function lr(){return(lr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){var i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Un(n,{},t(I)(t(S).mark((function e(){var i,o,a,s,u,c;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=We({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,u=Hn(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Cn.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr=function(){"use strict";function e(){t(ae)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(se)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){bn(e.idToken,"internal-error"),bn(void 0!==e.idToken,"internal-error"),bn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,bn(n=Qn(t),"internal-error"),bn(void 0!==n.exp,"internal-error"),bn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(I)(t(S).mark((function i(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(bn(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(I)(t(S).mark((function i(){var o,a,s,u;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,cr(e,n);case 2:o=t.sent,a=o.accessToken,s=o.refreshToken,u=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return wn("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(bn("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(bn("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(bn("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e,t){bn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var hr=function(){"use strict";function e(n){t(ae)(this,e);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=cn(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?t(ue)(a.providerData):[],this.metadata=new rr(a.createdAt||void 0,a.lastLoginAt||void 0)}return t(se)(e,[{key:"getIdToken",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Zn(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(bn(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Xn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ar.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(bn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){bn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(I)(t(S).mark((function i(){var o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),o=!0),!n){t.next=5;break}return t.next=5,ir(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,Zn(e,qn(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,p=null!==(i=n.email)&&void 0!==i?i:void 0,h=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,d=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,w=n.emailVerified,k=n.isAnonymous,x=n.providerData,_=n.stsTokenManager;bn(b&&_,t,"internal-error");var E=fr.fromJSON(this.name,_);bn("string"==typeof b,t,"internal-error"),pr(f,t.name),pr(p,t.name),bn("boolean"==typeof w,t,"internal-error"),bn("boolean"==typeof k,t,"internal-error"),pr(h,t.name),pr(d,t.name),pr(v,t.name),pr(m,t.name),pr(y,t.name),pr(g,t.name);var I=new e({uid:b,auth:t,email:p,emailVerified:w,displayName:f,isAnonymous:k,photoURL:d,phoneNumber:h,tenantId:v,stsTokenManager:E,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(I)(t(S).mark((function o(){var a,s;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new fr).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),t.next=5,ir(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),o)})))()}}]),e}(),dr=function(){"use strict";function e(){t(ae)(this,e),this.type="NONE",this.storage={}}return t(se)(e,[{key:"_isAvailable",value:function(){return t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(I)(t(S).mark((function i(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr.type="NONE";var vr=dr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var yr=function(){"use strict";function e(n,r,i){t(ae)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=mr(this.userKey,a.apiKey,s),this.fullPersistenceKey=mr("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(se)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?hr._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(I)(t(S).mark((function o(){var a,s,u,c,l,f,p,h,d,v,m,y,g;return t(S).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new e(_n(vr),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var e=t(I)(t(S).mark((function e(n){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:a=o.sent.filter((function(e){return e})),s=a[0]||_n(vr),u=mr(i,n.config.apiKey,n.name),c=null,l=!0,f=!1,p=void 0,o.prev=9,h=r[Symbol.iterator]();case 11:if(l=(d=h.next()).done){o.next=29;break}return v=d.value,o.prev=13,o.next=16,v._get(u);case 16:if(!(m=o.sent)){o.next=22;break}return y=hr._fromJSON(n,m),v!==s&&(c=y),s=v,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:l=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),f=!0,p=o.t1;case 35:o.prev=35,o.prev=36,l||null==h.return||h.return();case 38:if(o.prev=38,!f){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(g=a.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&g.length){o.next=46;break}return o.abrupt("return",new e(s,n,i));case 46:if(s=g[0],!c){o.next=50;break}return o.next=50,s._set(u,c.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var e=t(I)(t(S).mark((function e(n){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(s,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(br(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Er(t))return"Blackberry";if(Ir(t))return"Webos";if(wr(t))return"Safari";if((t.includes("chrome/")||kr(t))&&!t.includes("edge/"))return"Chrome";if(_r(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/firefox\//i.test(e)}function wr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/crios\//i.test(e)}function xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/iemobile/i.test(e)}function _r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/android/i.test(e)}function Er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/blackberry/i.test(e)}function Ir(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/webos/i.test(e)}function Tr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Sr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return Tr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Or(){return((e=Me()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Ar(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me();return Tr(e)||_r(e)||Ir(e)||Er(e)||/windows phone/i.test(e)||xr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=gr(Me());break;case"Worker":t="".concat(gr(Me()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(zt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rr=function(){"use strict";function e(n){t(ae)(this,e),this.auth=n,this.queue=[]}return t(se)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o,a,s,u,c,l,f,p,h,d,v,m,y;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:o=[],t.prev=4,a=!0,s=!1,u=void 0,t.prev=6,c=n.queue[Symbol.iterator]();case 8:if(a=(l=c.next()).done){t.next=16;break}return f=l.value,t.next=12,f(e);case 12:f.onAbort&&o.push(f.onAbort);case 13:a=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,u=t.t0;case 22:t.prev=22,t.prev=23,a||null==c.return||c.return();case 25:if(t.prev=25,!s){t.next=28;break}throw u;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),o.reverse(),p=!0,h=!1,d=void 0,t.prev=36,v=o[Symbol.iterator]();!(p=(m=v.next()).done);p=!0){y=m.value;try{y()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),h=!0,d=t.t2;case 44:t.prev=44,t.prev=45,p||null==v.return||v.return();case 47:if(t.prev=47,!h){t.next=50;break}throw d;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),Cr=function(){"use strict";function e(n,r,i){t(ae)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pr(this),this.idTokenSubscription=new Pr(this),this.beforeStateQueue=new Rr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(se)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=_n(n));var r=this;return this._initializationPromise=this.queue(t(I)(t(S).mark((function i(){var o,a;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,yr.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o,a,s,u,c,l;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=t.sent,a=o,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==a?void 0:a._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(a=l.user,s=!0);case 15:if(a){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(a);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!a){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return bn(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(a));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,ir(e);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(i=t.t0)||void 0===i?void 0:i.code)){t.next=10;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 10:return t.abrupt("return",n.directlySetCurrentUser(e));case 11:case"end":return t.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(I)(t(S).mark((function n(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?Ke(e):null)&&bn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(I)(t(S).mark((function i(){return t(S).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&bn(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(I)(t(S).mark((function n(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(I)(t(S).mark((function n(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(_n(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Be("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(I)(t(S).mark((function i(){var o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=t.sent,t.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return bn(i=e&&_n(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,yr.create(n,[_n(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o;return t(S).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return bn(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&(n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh()),n.currentUser=e,!e){t.next=7;break}return t.next=5,n.assertedPersistence.setCurrentUser(e);case 5:t.next=9;break;case 7:return t.next=9,n.assertedPersistence.removeCurrentUser();case 9:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return bn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r,i,o;return t(S).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(a)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e){return Ke(e)}var Pr=function(){"use strict";function e(n){var r,i,o=this;t(ae)(this,e),this.auth=n,this.observer=null,this.addObserver=(i=new Ge((function(e){return o.observer=e}),r)).subscribe.bind(i)}return t(se)(e,[{key:"next",get:function(){return bn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mr=function(){"use strict";function e(n,r){t(ae)(this,e),this.providerId=n,this.signInMethod=r}return t(se)(e,[{key:"toJSON",value:function(){return wn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return wn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return wn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return wn("not implemented")}}]),e}();function Dr(e,t){return Br.apply(this,arguments)}function Br(){return(Br=t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Dn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ur(e,t){return jr.apply(this,arguments)}function jr(){return(jr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fn(n,"POST","/v1/accounts:signInWithPassword",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fr(e,t){return zr.apply(this,arguments)}function zr(){return(zr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fn(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hr(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fn(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(ae)(this,r),(a=n.call(this,"password",o))._email=e,a._password=i,a._tenantId=s,a}return t(se)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ur(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",Fr(e,{email:n._email,oobCode:n._password}));case 5:vn(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(I)(t(S).mark((function i(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Dr(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",Hr(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:vn(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Mr);function qr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fn(n,"POST","/v1/accounts:signInWithIdp",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jr=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){var e;return t(ae)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(se)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return qr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,qr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,qr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=We(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=cn(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(Mr);function Kr(e,t){return Yr.apply(this,arguments)}function Yr(){return(Yr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Dn(n,"POST","/v1/accounts:sendVerificationCode",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xr(){return(Xr=t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fn(n,"POST","/v1/accounts:signInWithPhoneNumber",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $r(){return($r=t(I)(t(S).mark((function e(n,r){var i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fn(n,"POST","/v1/accounts:signInWithPhoneNumber",Mn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Vn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qr=t(a)({},"USER_NOT_FOUND","user-not-found");function Zr(){return(Zr=t(I)(t(S).mark((function e(n,r){var i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Fn(n,"POST","/v1/accounts:signInWithPhoneNumber",Mn(n,i),Qr));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e){var i;return t(ae)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(se)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Xr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return $r.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Zr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(Mr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(){"use strict";function e(n){var r,i,o,a,s,u;t(ae)(this,e);var c=Ve(qe(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);bn(l&&f&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=f,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(se)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=Ve(qe(e)).link,n=t?Ve(qe(t)).deep_link_id:null,r=Ve(qe(e)).deep_link_id;return(r?Ve(qe(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ni=function(){"use strict";function e(){t(ae)(this,e),this.providerId=e.PROVIDER_ID}return t(se)(e,null,[{key:"credential",value:function(e,t){return Vr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=ti.parseLink(t);return bn(n,"argument-error"),Vr._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ni.PROVIDER_ID="password",ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ri=function(){"use strict";function e(n){t(ae)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(se)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),ii=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){var e;return t(ae)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(se)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(ue)(this.scopes)}}]),r}(ri),oi=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){return t(ae)(this,r),n.call(this,"facebook.com")}return t(se)(r,null,[{key:"credential",value:function(e){return Jr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ii);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi.FACEBOOK_SIGN_IN_METHOD="facebook.com",oi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){var e;return t(ae)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(se)(r,null,[{key:"credential",value:function(e,t){return Jr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(ii);ai.GOOGLE_SIGN_IN_METHOD="google.com",ai.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var si=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){return t(ae)(this,r),n.call(this,"github.com")}return t(se)(r,null,[{key:"credential",value:function(e){return Jr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ii);si.GITHUB_SIGN_IN_METHOD="github.com",si.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ui=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){return t(ae)(this,r),n.call(this,"twitter.com")}return t(se)(r,null,[{key:"credential",value:function(e,t){return Jr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(ii);function ci(e,t){return li.apply(this,arguments)}function li(){return(li=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fn(n,"POST","/v1/accounts:signUp",Mn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui.TWITTER_SIGN_IN_METHOD="twitter.com",ui.PROVIDER_ID="twitter.com";var fi=function(){"use strict";function e(n){t(ae)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(se)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(I)(t(S).mark((function a(){var s,u,c;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,hr._fromIdTokenResponse(n,i,o);case 2:return s=t.sent,u=pi(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return t(I)(t(S).mark((function o(){var a;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=pi(i),t.abrupt("return",new e({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),o)})))()}}]),e}();function pi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e,i,o,a){var s,u;return t(ae)(this,r),(s=n.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(t(we)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return t(se)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(De);function di(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw hi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e,t){return mi.apply(this,arguments)}function mi(){return mi=t(I)(t(S).mark((function e(n,r){var i,o,a=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=Zn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",fi._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),e)}))),mi.apply(this,arguments)}function yi(e,t){return gi.apply(this,arguments)}function gi(){return gi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){var i,o,a,s,u,c,l,f=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,s="reauthenticate",e.prev=4,e.next=7,Zn(n,di(a,s,r,n),i);case 7:return bn((u=e.sent).idToken,a,"internal-error"),bn(c=Qn(u.idToken),a,"internal-error"),l=c.sub,bn(n.uid===l,a,"user-mismatch"),e.abrupt("return",fi._forOperation(n,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&vn(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),gi.apply(this,arguments)}function bi(e,t){return wi.apply(this,arguments)}function wi(){return wi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n,r){var i,o,a,s,u=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],o="signIn",e.next=4,di(n,o,r);case 4:return a=e.sent,e.next=7,fi._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),wi.apply(this,arguments)}function ki(e,t){return xi.apply(this,arguments)}function xi(){return(xi=t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bi(Lr(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _i(e,t,n){return Ei.apply(this,arguments)}function Ei(){return(Ei=t(I)(t(S).mark((function e(n,r,i){var o,a,s;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Lr(n),e.next=3,ci(o,{returnSecureToken:!0,email:r,password:i});case 3:return a=e.sent,e.next=6,fi._fromIdTokenResponse(o,"signIn",a);case 6:return s=e.sent,e.next=9,o._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ii(e,t,n){return ki(Ke(e),ni.credential(t,n))}function Ti(e,t,n,r){return Ke(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Si(e,t){return Dn(e,"POST","/v2/accounts/mfaEnrollment:start",Mn(e,t))}new WeakMap;var Oi="__sak",Ai=function(){"use strict";function e(n,r){t(ae)(this,e),this.storageRetriever=n,this.type=r}return t(se)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Oi,"1"),this.storage.removeItem(Oi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ni=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){var e,i;return t(ae)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(wr(i=Me())||Tr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Ar(),e._shouldAllowMigration=!0,e}return t(se)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Or()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,o=this;return t(I)(t(S).mark((function a(){return t(S).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(on)(t(un)(r.prototype),"_set",i).call(o,e,n);case 2:o.localCache[e]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(I)(t(S).mark((function o(){var a;return t(S).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(on)(t(un)(r.prototype),"_get",n).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(I)(t(S).mark((function o(){return t(S).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(on)(t(un)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(Ai);Ni.type="LOCAL";var Ri=Ni,Ci=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(){return t(ae)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(se)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Ai);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci.type="SESSION";var Li=Ci;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){return Promise.all(e.map((n=t(I)(t(S).mark((function e(n){var r;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi=function(){"use strict";function e(n){t(ae)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(se)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o,a,s,u,c,l,f;return t(S).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=e).data,a=o.eventId,s=o.eventType,u=o.data,null==(c=n.handlersMap[s])?void 0:c.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:a,eventType:s}),l=Array.from(c).map(function(){var e=t(I)(t(S).mark((function e(n){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,u));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,Pi(l);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Di(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi.receivers=[];var Bi=function(){"use strict";function e(n){t(ae)(this,e),this.target=n,this.handlers=new Set}return t(se)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(I)(t(S).mark((function o(){var a,s,u;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,o){var c=Di("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);u={messageChannel:a,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(u),a.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[a.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),o)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ji(){return void 0!==Ui().WorkerGlobalScope&&"function"==typeof Ui().importScripts}function Fi(){return zi.apply(this,arguments)}function zi(){return(zi=t(I)(t(S).mark((function e(){var n;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hi="firebaseLocalStorageDb",Wi="firebaseLocalStorage",Vi="fbase_key",qi=function(){"use strict";function e(n){t(ae)(this,e),this.request=n}return t(se)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Gi(e,t){return e.transaction([Wi],t?"readwrite":"readonly").objectStore(Wi)}function Ji(){var e=indexedDB.deleteDatabase(Hi);return new qi(e).toPromise()}function Ki(){var e=indexedDB.open(Hi,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Wi,{keyPath:Vi})}catch(e){r(e)}})),e.addEventListener("success",t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Wi)){t.next=12;break}return i.close(),t.next=5,Ji();case 5:return t.t0=n,t.next=8,Ki();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Yi(e,t,n){return Xi.apply(this,arguments)}function Xi(){return(Xi=t(I)(t(S).mark((function e(n,r,i){var o,s;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Gi(n,!0).put((o={},t(a)(o,Vi,r),t(a)(o,"value",i),o)),e.abrupt("return",new qi(s).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $i(e,t){return Qi.apply(this,arguments)}function Qi(){return(Qi=t(I)(t(S).mark((function e(n,r){var i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Gi(n,!1).get(r),e.next=3,new qi(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zi(e,t){var n=Gi(e,!0).delete(t);return new qi(n).toPromise()}var eo=function(){"use strict";function e(){t(ae)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(se)(e,[{key:"_openDb",value:function(){var e=this;return t(I)(t(S).mark((function n(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ki();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return o=t.sent,t.next=8,e(o);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(I)(t(S).mark((function n(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",ji()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(I)(t(S).mark((function n(){return t(S).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=Mi._getInstance(ji()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(I)(t(S).mark((function n(r,i){var o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(I)(t(S).mark((function e(n,r){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r,i,o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Fi();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Bi(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(I)(t(S).mark((function e(){var n;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ki();case 5:return n=e.sent,e.next=8,Yi(n,Oi,"1");case 8:return e.next=10,Zi(n,Oi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(I)(t(S).mark((function i(){return t(S).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(I)(t(S).mark((function i(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Yi(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return $i(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(I)(t(S).mark((function r(){return t(S).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(I)(t(S).mark((function r(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Zi(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r,i,o,a,s,u,c,l,f,p,h,d,v,m,y,g,b;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Gi(e,!1).getAll();return new qi(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)f=l.value,p=f.fbase_key,h=f.value,o.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(h)&&(e.notifyListeners(p,h),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,a||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(d=!0,v=!1,m=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(d=(g=y.next()).done);d=!0)b=g.value,e.localCache[b]&&!o.has(b)&&(e.notifyListeners(b,null),i.push(b));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,m=t.t1;case 35:t.prev=35,t.prev=36,d||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw m;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(I)(t(S).mark((function n(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();eo.type="LOCAL";var to=eo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t){return Dn(e,"POST","/v2/accounts/mfaSignIn:start",Mn(e,t))}function ro(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=mn("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function io(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
io("rcb"),new An(3e4,6e4);var oo="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e,t,n){return so.apply(this,arguments)}function so(){return(so=t(I)(t(S).mark((function e(n,r,i){var o,a,s,u,c,l,f,p;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,bn("string"==typeof a,n,"argument-error"),bn(i.type===oo,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return bn("enroll"===u.type,n,"internal-error"),e.next=15,Si(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return bn("signin"===u.type,n,"internal-error"),bn(l=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,no(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:a}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Kr(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uo=function(){"use strict";function e(n){t(ae)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Lr(n)}return t(se)(e,[{key:"verifyPhoneNumber",value:function(e,t){return ao(this.auth,e,Ke(t))}}],[{key:"credential",value:function(e,t){return ei._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?ei._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function co(e,t){return t?_n(t):(bn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo.PROVIDER_ID="phone",uo.PHONE_SIGN_IN_METHOD="phone";var lo=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e){var i;return t(ae)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(se)(r,[{key:"_getIdTokenResponse",value:function(e){return qr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return qr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return qr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Mr);function fo(e){return bi(e.auth,new lo(e),e.bypassAuthState)}function po(e){var t=e.auth,n=e.user;return bn(n,t,"internal-error"),yi(n,new lo(e),e.bypassAuthState)}function ho(e){return vo.apply(this,arguments)}function vo(){return(vo=t(I)(t(S).mark((function e(n){var r,i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,bn(i=n.user,r,"internal-error"),e.abrupt("return",vi(i,new lo(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mo=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(ae)(this,e),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(se)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(I)(t(S).mark((function e(r,i){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o,a,s,u,c,l;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fo;case"linkViaPopup":case"linkViaRedirect":return ho;case"reauthViaPopup":case"reauthViaRedirect":return po;default:vn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),yo=new An(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var go=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e,i,o,a,s){var u;return t(ae)(this,r),(u=n.call(this,e,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(we)(u),u}return t(se)(r,[{key:"executeNotNull",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return bn(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return kn(1===e.filter.length,"Popup operations only handle one event"),r=Di(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(mn(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(mn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(mn(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,yo.get())};t()}}]),r}(mo);go.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bo=new Map,wo=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(ae)(this,r),(o=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return t(se)(r,[{key:"execute",value:function(){var e=this,n=this;return t(I)(t(S).mark((function i(){var o,a;return t(S).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=bo.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ko(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(on)(t(un)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:bo.set(n.auth._key(),o);case 21:return n.bypassAuthState||bo.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,o=function(){return t(on)(t(un)(r.prototype),"onAuthEvent",n)};return t(I)(t(S).mark((function n(){var r;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(mo);function ko(e,t){return xo.apply(this,arguments)}function xo(){return(xo=t(I)(t(S).mark((function e(n,r){var i,o,a;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Io(r),o=Eo(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _o(e,t){bo.set(e._key(),t)}function Eo(e){return _n(e._redirectPersistence)}function Io(e){return mr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e,t){return So.apply(this,arguments)}function So(){return So=t(I)(t(S).mark((function e(n,r){var i,o,a,s,u,c=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o=Lr(n),a=co(o,r),s=new wo(o,a,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,o._persistUserIfCurrent(u.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),So.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oo=function(){"use strict";function e(n){t(ae)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(se)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return No(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!No(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(mn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Ao(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function No(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Ro(e){return Co.apply(this,arguments)}function Co(){return Co=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(I)(t(S).mark((function e(n){var r,i=arguments;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Dn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),Co.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Po=/^https?/;function Mo(){return(Mo=t(I)(t(S).mark((function e(n){var r,i,o,a,s,u,c;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ro(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Do(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:vn(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Do(e){var t=In(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Po.test(r))return!1;if(Lo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bo=new An(3e4,6e4);function Uo(){var e=Ui().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(ue)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var jo=null;function Fo(e){return jo=jo||function(e){return new Promise((function(t,n){var r,i,o;function a(){Uo(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Uo(),n(mn(e,"network-request-failed"))},timeout:Bo.get()})}if(null===(i=null===(r=Ui().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ui().gapi)||void 0===o?void 0:o.load)){var s=io("iframefcb");return Ui()[s]=function(){gapi.load?a():n(mn(e,"network-request-failed"))},ro("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw jo=null,e}))}(e),jo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zo=new An(5e3,15e3),Ho={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vo(e){var t=e.config;bn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Nn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:zt},i=Wo.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(We(r).slice(1))}function qo(e){return Go.apply(this,arguments)}function Go(){return Go=t(I)(t(S).mark((function e(n){var r,i;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fo(n);case 2:return r=e.sent,bn(i=Ui().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Vo(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ho,dontclear:!0},(function(e){return new Promise((r=t(I)(t(S).mark((function r(i,o){var a,s,u;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){Ui().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=mn(n,"network-request-failed"),s=Ui().setTimeout((function(){o(a)}),zo.get()),e.ping(u).then(u,(function(){o(a)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Go.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ko="_blank",Yo="http://localhost",Xo=function(){"use strict";function e(n){t(ae)(this,e),this.window=n,this.associatedEvent=null}return t(se)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function $o(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Jo),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Me().toLowerCase();r&&(u=kr(l)?Ko:r),br(l)&&(n=n||Yo,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,n){var r=t(de)(n,2),i=r[0],o=r[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(Sr(l)&&"_self"!==u)return Qo(n||"",u),new Xo(null);var p=window.open(n||"",u,f);bn(p,e,"popup-blocked");try{p.focus()}catch(e){}return new Xo(p)}function Qo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zo="__/auth/handler",ea="emulator/auth/handler";function ta(e,n,r,i,o,a){bn(e.config.authDomain,e,"auth-domain-config-required"),bn(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:zt,eventId:o};if(n instanceof ri){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",Fe(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,p=Object.entries(a||{})[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=t(de)(f.value,2),d=h[0],v=h[1];s[d]=v}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}}if(n instanceof ii){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var y,g,b=s,w=!0,k=!1,x=void 0;try{for(var _,E=Object.keys(b)[Symbol.iterator]();!(w=(_=E.next()).done);w=!0){var I=_.value;void 0===b[I]&&delete b[I]}}catch(e){k=!0,x=e}finally{try{w||null==E.return||E.return()}finally{if(k)throw x}}return"".concat((y=e,g=y.config,g.emulator?Nn(g,ea):"https://".concat(g.authDomain,"/").concat(Zo)),"?").concat(We(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var na="webStorageSupport",ra=function(){"use strict";function e(){t(ae)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Li,this._completeRedirectFn=To,this._overrideRedirectResult=_o}return t(se)(e,[{key:"_openPopup",value:function(e,n,r,i){var o=this;return t(I)(t(S).mark((function a(){var s,u;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return kn(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=ta(e,n,r,In(),i),t.abrupt("return",$o(e,u,Di()));case 4:case"end":return t.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var o=this;return t(I)(t(S).mark((function a(){return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o._originValidation(e);case 2:return a=ta(e,n,r,In(),i),Ui().location.href=a,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(kn(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i,o;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qo(e);case 2:return i=t.sent,o=new Oo(e),i.register("authEvent",(function(t){return bn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:o},n.iframes[e._key()]=i,t.abrupt("return",o);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(na,{type:na},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),vn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Mo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Ar()||wr()||Tr()}}]),e}(),ia=ra,oa=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e){var i;return t(ae)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(se)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Dn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Mn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Dn(e,"POST","/v2/accounts/mfaSignIn:finalize",Mn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(n){t(ae)(this,e),this.factorId=n}return t(se)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return wn("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(ae)(this,e)}return t(se)(e,null,[{key:"assertion",value:function(e){return oa._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var aa,sa="@firebase/auth",ua="0.20.5",ca=function(){"use strict";function e(n){t(ae)(this,e),this.auth=n,this.internalListeners=new Map}return t(se)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(I)(t(S).mark((function r(){var i;return t(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){bn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();aa="Browser",Dt(new Ye("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){bn(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),bn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:aa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nr(aa)},i=new Cr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Dt(new Ye("auth-internal",(function(e){var t=Lr(e.getProvider("auth").getImmediate());return new ca(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(sa,ua,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(aa)),Wt(sa,ua,"esm2017");ae=o("8MBJY"),o("ge8co"),se=o("a2hTj"),un=o("fVNic"),ke=o("eYQtU");var la=o("jmhxu"),fa=o("l5bVx"),pa=(Ae=o("2MbLg"),function(){"use strict";function e(n){t(ae)(this,e),this.uid=n}return t(se)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}());pa.UNAUTHENTICATED=new pa(null),pa.GOOGLE_CREDENTIALS=new pa("google-credentials-uid"),pa.FIRST_PARTY=new pa("first-party-uid"),pa.MOCK_USER=new pa("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ha="9.9.2",da=new st("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(da.logLevel<=Qe.DEBUG){var o,a=r.map(ya);(o=da).debug.apply(o,["Firestore (".concat(ha,"): ").concat(e)].concat(t(ue)(a)))}}function ma(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(da.logLevel<=Qe.ERROR){var o,a=r.map(ya);(o=da).error.apply(o,["Firestore (".concat(ha,"): ").concat(e)].concat(t(ue)(a)))}}function ya(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(ha,") INTERNAL ASSERTION FAILED: ")+e;throw ma(t),new Error(t)}function ba(e,t){e||ga()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wa="invalid-argument",ka="failed-precondition",xa=function(e){"use strict";t(ke)(r,e);var n=t(Ae)(r);function r(e,i){var o;return t(ae)(this,r),(o=n.call(this,e,i)).code=e,o.message=i,o.toString=function(){return"".concat(o.name,": [code=").concat(o.code,"]: ").concat(o.message)},t(la)(o)}return r}(De),_a=function e(n,r){"use strict";t(ae)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Ea=function(){"use strict";function e(){t(ae)(this,e)}return t(se)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(pa.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),Ia=function(){"use strict";function e(n){var r=this;t(ae)(this,e),this.auth=null,n.onInit((function(e){r.auth=e}))}return t(se)(e,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(ba("string"==typeof t.accessToken),new _a(t.accessToken,new pa(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),Ta=function e(n,r,i){"use strict";t(ae)(this,e),this.type="FirstParty",this.user=pa.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);var o=n.auth.getAuthHeaderValueForFirstParty([]);o&&this.headers.set("Authorization",o),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)},Sa=function(){"use strict";function e(n,r,i){t(ae)(this,e),this.t=n,this.i=r,this.o=i}return t(se)(e,[{key:"getToken",value:function(){return Promise.resolve(new Ta(this.t,this.i,this.o))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(pa.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),Oa=function e(n){"use strict";t(ae)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Aa=function(){"use strict";function e(n){var r=this;t(ae)(this,e),this.u=n,this.appCheck=null,n.onInit((function(e){r.appCheck=e}))}return t(se)(e,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(ba("string"==typeof e.token),new Oa(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),Na=function(){"use strict";function e(n,r){t(ae)(this,e),this.projectId=n,this.database=r||"(default)"}return t(se)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ra,Ca;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(Ca=Ra||(Ra={}))[Ca.OK=0]="OK",Ca[Ca.CANCELLED=1]="CANCELLED",Ca[Ca.UNKNOWN=2]="UNKNOWN",Ca[Ca.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ca[Ca.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ca[Ca.NOT_FOUND=5]="NOT_FOUND",Ca[Ca.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ca[Ca.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ca[Ca.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ca[Ca.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ca[Ca.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ca[Ca.ABORTED=10]="ABORTED",Ca[Ca.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ca[Ca.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ca[Ca.INTERNAL=13]="INTERNAL",Ca[Ca.UNAVAILABLE=14]="UNAVAILABLE",Ca[Ca.DATA_LOSS=15]="DATA_LOSS";function La(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pa=function(){"use strict";function e(n,r,i,o,a){t(ae)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=o?o:e.EMPTY,this.right=null!=a?a:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(se)(e,[{key:"copy",value:function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw ga();if(this.right.isRed())throw ga();var e=this.left.check();if(e!==this.right.check())throw ga();return e+(this.isRed()?0:1)}}]),e}();Pa.EMPTY=null,Pa.RED=!0,Pa.BLACK=!1,Pa.EMPTY=new(function(){"use strict";function e(){t(ae)(this,e),this.size=0}return t(se)(e,[{key:"key",get:function(){throw ga()}},{key:"value",get:function(){throw ga()}},{key:"color",get:function(){throw ga()}},{key:"left",get:function(){throw ga()}},{key:"right",get:function(){throw ga()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Pa(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ma=Symbol.iterator,Da=function(){"use strict";function e(n){t(ae)(this,e),this.binaryString=n}return t(se)(e,[{key:Ma,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return La(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();Da.EMPTY_BYTE_STRING=new Da("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ba=new Map;var Ua=function(){"use strict";function e(n){var r;if(t(ae)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new xa(wa,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new xa(wa,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new xa(wa,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return t(se)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),ja=function(){"use strict";function e(n,r,i){t(ae)(this,e),this._authCredentials=r,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1,n instanceof Na?this._databaseId=n:(this._app=n,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xa(wa,'"projectId" not provided in firebase.initializeApp.');return new Na(e.options.projectId)}(n))}return t(se)(e,[{key:"app",get:function(){if(!this._app)throw new xa(ka,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new xa(ka,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ea;switch(e.type){case"gapi":var t=e.client;return ba(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Sa(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new xa(wa,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Ba.get(e))&&(va("ComponentProvider","Removing Datastore"),Ba.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new RegExp("[~\\*/\\[\\]]");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fa="".concat(zt,"_lite"),ha=Fa,Dt(new Ye("firestore/lite",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=new ja(r,new Ia(e.getProvider("auth-internal")),new Aa(e.getProvider("app-check-internal")));return n&&i._setSettings(n),i}),"PUBLIC")),Wt("firestore-lite","3.4.14",""),Wt("firestore-lite","3.4.14","esm2017");var za=s(),Ha=(za.header,za.headerContainer,za.home,za.logoLink,za.logoIcon,za.library,za.authBackdrop),Wa=document.querySelector(".auth-form"),Va=Wa.elements.signIn,qa=Wa.elements.register,Ga=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:Rt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw jt.create("bad-app-name",{appName:String(i)});var o=Lt.get(i);if(o){if(ze(e,o.options)&&ze(r,o.config))return o;throw jt.create("duplicate-app",{appName:i})}var a=new et(i),s=!0,u=!1,c=void 0;try{for(var l,f=Pt.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var p=l.value;a.addComponent(p)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var h=new Ft(e,r,a);return Lt.set(i,h),h}({apiKey:"AIzaSyCGHvQeYYSLBpUvEQhdSHM15NJqrdM7sp4",authDomain:"filmoteka-ad008.firebaseapp.com",databaseURL:"https://filmoteka-ad008-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-ad008",storageBucket:"filmoteka-ad008.appspot.com",messagingSenderId:"1010745339163",appId:"1:1010745339163:web:e809231364ec491c2bf7be"}),Ja=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht();Bt(e,"firestore/lite").getImmediate()}(Ga),
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht(),t=Bt(e,"auth");return t.isInitialized()?t.getImmediate():En(e,{popupRedirectResolver:ia,persistence:[to,Ri,Li]})}(Ga));function Ka(){return(Ka=t(I)(t(S).mark((function e(n){var r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=Wa.elements.mail.value,i=Wa.elements.password.value,console.log(r),e.prev=4,e.next=7,Ii(Ja,r,i);case 7:o=e.sent,Ha.classList.add("auth-form-hidden"),document.body.classList.toggle("body-overflow"),console.log(o.user),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function Ya(){return(Ya=t(I)(t(S).mark((function e(n){var r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=Wa.elements.mail.value,i=Wa.elements.password.value,console.log(r),console.log(i),e.prev=5,e.next=8,_i(Ja,r,i);case 8:o=e.sent,console.log(o.user),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function Xa(){return $a.apply(this,arguments)}function $a(){return($a=t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ti(Ja,(function(e){if(e)return console.log("user",e),e.uid;Ha.classList.remove("auth-form-hidden"),document.body.classList.toggle("body-overflow"),console.log("no user")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Va.addEventListener("click",(function(e){return Ka.apply(this,arguments)})),qa.addEventListener("click",(function(e){return Ya.apply(this,arguments)}));var Qa;Qa=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("i3NJ7");var Za,es,ts={};Za=void 0!==n?n:"undefined"!=typeof window?window:ts,es=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",o="Info",a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,p=function(s,l,p,d){if(!u("body"))return!1;t||h.Notify.init({});var v=c(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof d&&!Array.isArray(d)){var m={};"object"==typeof p?m=p:"object"==typeof d&&(m=d),t=c(!0,t,m)}var y,g,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(y=l,(g=e.document.createElement("div")).innerHTML=y,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(a.wrapID)||e.document.createElement("div");if(w.id=a.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var k=e.document.getElementById(a.overlayID)||e.document.createElement("div");k.id=a.overlayID,k.style.width="100%",k.style.height="100%",k.style.position="fixed",k.style.zIndex=t.zindex-1,k.style.left=0,k.style.top=0,k.style.right=0,k.style.bottom=0,k.style.background=b.backOverlayColor||t.backOverlayColor,k.className=t.cssAnimation?"nx-with-animation":"",k.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(a.overlayID)||e.document.body.appendChild(k)}e.document.getElementById(a.wrapID)||e.document.body.appendChild(w);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=b.textColor,x.style.background=b.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof p&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var E="";s===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===o&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=E+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var I=e.document.getElementById(a.wrapID);I.insertBefore(x,I.firstChild)}else e.document.getElementById(a.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var S,O,A=function(){T.classList.add("nx-remove");var t=e.document.getElementById(a.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},N=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(a.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(O)};if(t.closeButton&&"function"!=typeof p&&e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof p||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof p&&p(),A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof p){var R=function(){S=setTimeout((function(){A()}),t.timeout),O=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(O)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&f>0)for(var C=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),L=0;L<C.length;L++){var P=C[L];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,v)},h={Notify:{init:function(n){t=c(!0,a,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){p(n,e,t,r)},failure:function(e,t,n){p(r,e,t,n)},warning:function(e,t,n){p(i,e,t,n)},info:function(e,t,n){p(o,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:h.Notify}):{Notify:h.Notify}},"function"==typeof define&&define.amd?define([],(function(){return es(Za)})):"object"==typeof ts?ts=es(Za):Za.Notiflix=es(Za);var ns={width:"480px",position:"center-top",distance:"160px",useIcon:!1,backOverlay:!1,showOnlyTheLastOne:!0,clickToClose:!0,fontFamily:"Roboto",fontSize:"16px",cssAnimationDuration:800,timeout:2e3,failure:{background:"rgb(255, 107, 8, 0.7)",textColor:"#FFFFFF"}},rs=s().moviesGallery,is={},os=(fa=o("l5bVx"),/^\s+|\s+$/g),as=/^[-+]0x[0-9a-f]+$/i,ss=/^0b[01]+$/i,us=/^0o[0-7]+$/i,cs=parseInt,ls="object"==typeof n&&n&&n.Object===Object&&n,fs="object"==typeof self&&self&&self.Object===Object&&self,ps=ls||fs||Function("return this")(),hs=Object.prototype.toString,ds=Math.max,vs=Math.min,ms=function(){return ps.Date.now()};function ys(e){var n=void 0===e?"undefined":t(fa)(e);return!!e&&("object"==n||"function"==n)}function gs(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(fa)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==hs.call(e)}(e))return NaN;if(ys(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=ys(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(os,"");var r=ss.test(e);return r||us.test(e)?cs(e.slice(2),r?2:8):as.test(e)?NaN:+e}function bs(){s().searchForm.addEventListener("input",is(ws,300))}function ws(e){return ks.apply(this,arguments)}function ks(){return(ks=t(I)(t(S).mark((function e(n){var r,i,o,a,s,u;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(r=n.target.value.trim())){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,j(r);case 6:return i=e.sent,o=i.results,a=i.total_results,e.next=11,ne();case 11:if(s=e.sent,0!==a){e.next=15;break}return ts.Notify.failure("Search result was not successful. Enter the correct movie name!",ns),e.abrupt("return");case 15:u="",o.forEach((function(e){u+=f(e,s)})),rs.innerHTML=u,e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[3,20]])})))).apply(this,arguments)}is=function(e,t,n){var r,i,o,a,s,u,c=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function d(e){return c=e,s=setTimeout(m,t),l?h(e):a}function v(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-c>=o}function m(){var e=ms();if(v(e))return y(e);s=setTimeout(m,function(e){var n=t-(e-u);return f?vs(n,o-(e-c)):n}(e))}function y(e){return s=void 0,p&&r?h(e):(r=i=void 0,a)}function g(){var e=ms(),n=v(e);if(r=arguments,i=this,u=e,n){if(void 0===s)return d(u);if(f)return s=setTimeout(m,t),h(u)}return void 0===s&&(s=setTimeout(m,t)),a}return t=gs(t)||0,ys(n)&&(l=!!n.leading,o=(f="maxWait"in n)?ds(gs(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=i=s=void 0},g.flush=function(){return void 0===s?a:y(ms())},g};var xs=s(),_s=xs.header,Es=xs.headerContainer,Is=xs.home,Ts=xs.logoLink,Ss=xs.logoIcon,Os=xs.library,As=(xs.authBackdrop,xs.moviesGalleryContainer),Ns=xs.emptyCard,Rs=xs.btnFilter;function Cs(e){console.log(e.currentTarget.elements.search.value)}function Ls(){var e=s(),n=e.searchForm,r=e.headerBtnList;r&&r.remove(),n||Es.insertAdjacentHTML("beforeend",'\n    <form class="search-form" data-id = "search-form">\n    <label class="search-form__field">\n    <input class="search-form__input" type="text" name="search" placeholder = \'Movie search\' />\n    </label>\n    <img\n        class="search-icon"\n        src="'.concat(t(Qa),'"\n        width="12"\n        height="12"\n        alt="logo icon"\n      />'))}function Ps(){Os.classList.remove("current"),Is.classList.add("current"),_s.classList.add("home-header-bg"),_s.classList.remove("library-header-bg"),Ls(),s().searchForm.addEventListener("input",Cs)}function Ms(){var e=document.querySelector(".lodo-title");window.innerWidth<768&&e&&e.remove(),e||window.innerWidth>=768&&Ts.insertAdjacentHTML("beforeend",'<p class = "lodo-title"  data-id="logo-item" >Filmoteka</p>')}function Ds(){Ts.removeEventListener("mouseover",Us),Ts.removeEventListener("mouseout",js)}function Bs(){Ts.removeEventListener("touchstart",Fs),Ts.removeEventListener("touchend",zs)}function Us(){Ts.classList.add("logo-link-hover"),Ss.classList.add("logo-link-hover")}function js(){Ts.classList.remove("logo-link-hover"),Ss.classList.remove("logo-link-hover")}function Fs(){Ts.classList.add("logo-link-active"),Ss.classList.add("logo-link-active")}function zs(){Ts.classList.remove("logo-link-active"),Ss.classList.remove("logo-link-active")}Ls(),Ms(),bs(),Os.addEventListener("click",(function(e){e.preventDefault(),Xa(),Os.classList.add("current"),Is.classList.remove("current"),_s.classList.remove("home-header-bg"),_s.classList.add("library-header-bg"),Rs.classList.add("visually-hidden"),function(){var e=s().searchForm,t=s().headerBtnList;e&&e.remove();if(t)return;Es.insertAdjacentHTML("beforeend",'<div class="header-btn-list">\n  <button class=\'header-btn\' type="button" data-name="Watched">Watched</button>\n  <button class=\'header-btn\' type="button" data-name="queue">queue</button>\n</div>')}(),Ts.addEventListener("mouseover",Us),Ts.addEventListener("mouseout",js),Ts.addEventListener("touchstart",Fs),Ts.addEventListener("touchend",zs)})),Is.addEventListener("click",(function(e){if(e.preventDefault(),As.classList.remove("visually-hidden"),Ns.innerHTML="",Is.classList.contains("current"))return;Ps(),Ds(),Bs(),ie(1),bs()})),Ts.addEventListener("click",(function(e){if(e.preventDefault(),Is.classList.contains("current"))return;Ps(),Ds(),Bs(),ie(1),bs(),Ts.classList.remove("logo-link-hover"),Ss.classList.remove("logo-link-hover")})),window.addEventListener("resize",is(Ms,250));var Hs;Hs=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("2Y7o2");var Ws=s();Ws.library.addEventListener("click",(function(e){Ws.moviesGallery.innerHTML="",Ws.moviesGalleryContainer.classList.add("visually-hidden"),null===localStorage.getItem(e)&&Ws.emptyCard.insertAdjacentHTML("beforeend",'\n<section class="empty-template">\n  <div class="container">\n    <div class="empty-template__item">\n      <img\n        class="empty-template__img"\n        src="'.concat(t(Hs),'"\n        alt="cat crying"\n      />\n      <p class="empty-template__title">\n        Oops!<br />\n        List don`t have movies\n      </p>\n      \x3c!-- <p class="empty-template__text">\n        visit home <a class="empty-template__link" href="#">page</a>\n      </p> --\x3e\n    </div>\n  </div>\n</section>'))}));var Vs=s(),qs=Vs.trendingBtn,Gs=Vs.tvBtn,Js=Vs.topRatedBtn,Ks=Vs.upcomingBtn,Ys=Vs.moviesGallery,Xs=(Vs.searchForm,Vs.yearFilter),$s=Vs.genreFilter,Qs=Vs.filterInput;!function(){var e=(new Date).getFullYear(),t=[];Xs.insertAdjacentHTML("beforeend",'<option value="">Choose year</option>');for(var n=e;n>1950;n--)t.push('<option value="'.concat(n,'">').concat(n,"</option>"));Xs.insertAdjacentHTML("beforeend",t)}();var Zs="",eu="";function tu(){return(tu=t(I)(t(S).mark((function e(){var n,r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Gs.classList.add("btn-tab-active"),qs.classList.remove("btn-tab-active"),Ks.classList.remove("btn-tab-active"),Js.classList.remove("btn-tab-active"),e.prev=4,e.next=7,W();case 7:return n=e.sent,r=n.results,n.total_results,e.next=12,ne();case 12:i=e.sent,o="",r.forEach((function(e){o+=f(e,i)})),Ys.innerHTML=o,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function nu(){return(nu=t(I)(t(S).mark((function e(){var n,r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Js.classList.add("btn-tab-active"),qs.classList.remove("btn-tab-active"),Ks.classList.remove("btn-tab-active"),Gs.classList.remove("btn-tab-active"),e.prev=4,e.next=7,q();case 7:return n=e.sent,r=n.results,n.total_results,e.next=12,ne();case 12:i=e.sent,o="",r.forEach((function(e){o+=f(e,i)})),Ys.innerHTML=o,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function ru(){return(ru=t(I)(t(S).mark((function e(){var n,r,i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ks.classList.add("btn-tab-active"),qs.classList.remove("btn-tab-active"),Js.classList.remove("btn-tab-active"),Gs.classList.remove("btn-tab-active"),e.prev=4,e.next=7,J();case 7:return n=e.sent,r=n.results,n.total_results,e.next=12,ne();case 12:i=e.sent,o="",r.forEach((function(e){o+=f(e,i)})),Ys.innerHTML=o,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function iu(){return(iu=t(I)(t(S).mark((function e(){return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:qs.classList.add("btn-tab-active"),Ks.classList.remove("btn-tab-active"),Js.classList.remove("btn-tab-active"),Gs.classList.remove("btn-tab-active"),ie(1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ou(){return(ou=t(I)(t(S).mark((function e(n,r){var i,o;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(n,r);case 3:i=e.sent,o=i.results,i.total_results,console.log(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}qs.addEventListener("click",(function(){return iu.apply(this,arguments)})),Gs.addEventListener("click",(function(){return tu.apply(this,arguments)})),Js.addEventListener("click",(function(){return nu.apply(this,arguments)})),Ks.addEventListener("click",(function(){return ru.apply(this,arguments)})),Qs.forEach((function(e){e.addEventListener("change",(function(e){eu=Xs.value,Zs=$s.value,console.log(Zs),console.log(eu),function(e,t){ou.apply(this,arguments)}(Xs.value)}))}));document.querySelector(".footer__link"),document.querySelector(".backdrop-team"),document.querySelector(".modal-team__close-btn");var au=s(),su=au.authForm,uu=au.authBackdrop;console.log(su),uu.classList.add("auth-form-hidden");var cu={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */!function(e,t){cu=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,r,i,o,a=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])a.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var r=n(2),i=n(17),o=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):o(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){"use strict";var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){var i,o;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(o=t.length,i=n;n>=0&&i<o;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){"use strict";var r=n(29),i=n(30),o=n(5),a={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=o(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=a},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var r=n(13),i=n(7),o=n(0),a=n(1),s=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(e,t){this._options=o({},c,t),this._currentPage=0,this._view=new s(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),o=this._getEdge(e);return t.leftPageNumber=o.left,t.rightPageNumber=o.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(o/2),(n=(t=Math.max(e-r,1))+o-1)>i&&(t=Math.max(i-o+1,1),n=i)):(t=(a-1)*o+1,n=a*o,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){a(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),e.exports=l},function(e,t,n){"use strict";var r=n(0),i=n(14),o=n(4),a=n(16),s=n(2),u=n(5),c=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(e){r(e.prototype,f.prototype)},f.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},f.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},f.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},f.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},f.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},f.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},f.prototype.on=function(e,t,n){var r=this;o(e)?(e=e.split(l),c(e,(function(e){r._bindEvent(e,t,n)}))):a(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},f.prototype.once=function(e,t,n){var r=this;if(a(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},f.prototype._spliceMatches=function(e,t){var n,r=0;if(s(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},f.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,o=t===r.context,a=i&&o;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(e,t){var n=this,r=u(t),i=n._matchHandler(t);e=e.split(l),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},f.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},f.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):o(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):u(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},f.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):a(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},f.prototype.fire=function(e){this.invoke.apply(this,arguments)},f.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(e){return this.getListenerLength(e)>0},f.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=f},function(e,t,n){"use strict";var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var r=n(3),i=n(7),o=n(21),a=n(22),s=n(24),u=n(25),c=n(0),l=n(4),f=n(28),p=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],v=["prev","next"],m=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},h,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!f(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(d,(function(e){this._buttons[e]=p.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(d,(function(e){var t="disabled"+p.capitalizeFirstLetter(e);this._buttons[t]=p.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(v,(function(e){var t=e+"More";this._buttons[t]=p.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=p.createElementByTemplate(this._template.currentPage,{page:n}):(t=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||u(t,this._firstItemClassName),n!==i||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();a(t,"click",(function(t){var n,r,i=o(t);s(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!p.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],p.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var r=n(4),i=n(3),o=n(23);function a(e,t,n,r){function a(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,a):"attachEvent"in e&&e.attachEvent("on"+t,a),function(e,t,n,r){var a=o(e,t),s=!1;i(a,(function(e){return e.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(e,t,n,a)}e.exports=function(e,t,n,o){r(t)?i(t.split(/\s+/g),(function(t){a(e,t,n,o)})):i(t,(function(t,r){a(e,r,t,n)}))}},function(e,t,n){"use strict";var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var r=n(3),i=n(8),o=n(26),a=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),s=e.classList,u=[];s?r(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,u)<0&&u.push(e)})),a(e,u))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var r=n(8),i=n(3),o=n(2),a=n(4),s=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,h=/^["']\w+["']$/,d=/"|'/g,v=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],o=0,a=0;return i(t,(function(e,i){0===e.indexOf("if")?o+=1:"/if"===e?o-=1:o||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(a,i)),a=i+1)})),r.push(t.slice(a)),{exps:n,sourcesInsideIf:r}}(e,t),o=!1,a="";return i(r.exps,(function(e,t){return(o=w(e,n))&&(a=k(r.sourcesInsideIf[t],n)),!o})),a},each:function(e,t,n){var r=w(e,n),a=o(r)?"@index":"@key",u={},c="";return i(r,(function(e,r){u[a]=r,u["@this"]=e,s(n,u),c+=k(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),o=e[i+1],a=w(e.slice(0,i),n),u={};return u[o]=a,k(t,s(n,u))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],o=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(o,r)),o=r+n[0].length,n=t.exec(e);return i.push(e.slice(o)),i};function g(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:h.test(e)?r=e.replace(d,""):c.test(e)?r=g((n=e.split(l))[0],t)[g(n[1],t)]:f.test(e)?r=g((n=e.split(p))[0],t)[n[1]]:v.test(e)&&(r=parseFloat(e)),r}function b(e,t,n){for(var r,i,o,s,u=m[e],c=1,l=2,f=t[l];c&&a(f);)0===f.indexOf(e)?c+=1:0===f.indexOf("/"+e)&&(c-=1,r=l),f=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(i=0,o=r,(s=t.splice(i+1,o-i)).pop(),s),n),t}function w(e,t){var n=g(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(g(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function k(e,t){for(var n,r,i,o=1,s=e[o];a(s);)r=(n=s.split(" "))[0],m[r]?(i=b(r,e.splice(o,e.length-o),t),e=e.concat(i)):e[o]=w(n,t),s=e[o+=2];return e.join("")}e.exports=function(e,t){return k(y(e,u),t)}},function(e,t,n){"use strict";var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(e){return(new Date).getTime()-e>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}));var lu=document.getElementById("tui-pagination-container"),fu=new(t(cu))(lu,{totalItems:0,itemsPerPage:10,visiblePages:5,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}),pu=fu.getCurrentPage();console.log(pu);var hu=s().moviesGallery;function du(e){return vu.apply(this,arguments)}function vu(){return(vu=t(I)(t(S).mark((function e(n){var r,i,o,a;return t(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(n);case 3:if(r=e.sent.total_pages,console.log(r),0!==r.length){e.next=8;break}return lu.classList.add("is-hidden"),e.abrupt("return");case 8:return fu.reset(r),e.next=11,B(n);case 11:return i=e.sent.results,e.next=14,ne();case 14:o=e.sent,a="",i.forEach((function(e){a+=f(e,o)})),hu.innerHTML=a,lu.classList.remove("is-hidden"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}du(pu);fu.on("afterMove",(function(e){var t=e.page;console.log(t);du(t)}))}();
//# sourceMappingURL=index.dac1955e.js.map
