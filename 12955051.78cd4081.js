/*! For license information please see 12955051.78cd4081.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=f(r),y=n,d=s["".concat(a,".").concat(y)]||s[y]||p[y]||u;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,a=new Array(u);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<u;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},108:function(e,t,r){"use strict";e.exports=r(109)},109:function(e,t,r){"use strict";var n=r(110),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var g="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function w(){}function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var k=S.prototype=new w;k.constructor=S,n(k,j.prototype),k.isPureReactComponent=!0;var x={current:null},E={suspense:null},P={current:null},_=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:P.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var B=/\/+/g,D=[];function N(e,t,r,n){if(D.length){var o=D.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function A(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case u:case a:c=!0}}if(c)return r(n,e,""===t?"."+I(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+I(o=e[i],i);c+=A(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)c+=A(o=o.value,l=t+I(o,i++),r,n);else if("object"===o)throw r=""+e,h(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return c}function M(e,t,r){return null==e?0:A(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(B,"$&/")+"/"),M(e,q,t=N(t,u,n,o)),T(t)}function L(){var e=x.current;if(null===e)throw h(Error(321));return e}var H={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=N(null,null,t,r)),T(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,r){return L().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,r){return L().useReducer(e,t,r)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:y,unstable_SuspenseList:d,createElement:$,cloneElement:function(e,t,r){if(null==e)throw h(Error(267),e);var o=n({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=P.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)_.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:a,ref:c,props:o,_owner:i}},createFactory:function(e){var t=$.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=E.suspense;E.suspense=void 0===t?null:t;try{e()}finally{E.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:E,ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n}},V={default:H},X=V&&H||V;e.exports=X.default||X},110:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,i=a(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(i[f]=r[f]);if(n){c=n(r);for(var s=0;s<c.length;s++)u.call(r,c[s])&&(i[c[s]]=r[c[s]])}}return i}},66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),u=(r(108),r(107)),a={title:"Saga Background",hide_title:!0},c={unversionedId:"introduction/SagaBackground",id:"introduction/SagaBackground",isDocsHomePage:!1,title:"Saga Background",description:"Background on the Saga concept",source:"@site/../docs/introduction/SagaBackground.md",slug:"/introduction/SagaBackground",permalink:"/docs/introduction/SagaBackground",editUrl:"https://github.com/redux-saga/redux-saga/edit/master/docs/../docs/introduction/SagaBackground.md",version:"current",sidebar:"docs",previous:{title:"Beginner Tutorial",permalink:"/docs/introduction/BeginnerTutorial"},next:{title:"Declarative Effects",permalink:"/docs/basics/DeclarativeEffects"}},i=[{value:"External links",id:"external-links",children:[]}],l={toc:i};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"background-on-the-saga-concept"},"Background on the Saga concept"),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"WIP")),Object(u.b)("p",null,"For now, here are some useful links."),Object(u.b)("h2",{id:"external-links"},"External links"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=xDuwrtwYHu8"},"Applying the Saga Pattern (Youtube video)")," By Caitie McCaffrey"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf"},"Original paper")," By Hector Garcia-Molina & Kenneth Salem"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/jj591569.aspx"},"A Saga on Sagas")," from MSDN site")))}f.isMDXComponent=!0}}]);