!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function(){},o={},i=[],s=[];function a(e,t){var n,a,l,c,u=s;for(c=arguments.length;c-- >2;)i.push(arguments[c]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((a=i.pop())&&void 0!==a.pop)for(c=a.length;c--;)i.push(a[c]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&n?u[u.length-1]+=a:u===s?u=[a]:u.push(a),n=l;var p=new r;return p.nodeName=e,p.children=u,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(p),p}function l(e,t){for(var n in t)e[n]=t[n];return e}function c(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==f.push(e)&&(o.debounceRendering||u)(v)}function v(){for(var e;e=f.pop();)e._dirty&&M(e)}function h(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function g(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)c(n,null),c(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===p.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,m,s):e.removeEventListener(t,m,s),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var a=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function m(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var _=[],S=0,C=!1,x=!1;function w(){for(var e;e=_.shift();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function T(e,t,n,r,o,i){S++||(C=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var s=k(e,t,n,r,i);return o&&s.parentNode!==o&&o.appendChild(s),--S||(x=!1,i||w()),s}function k(e,t,n,r,o){var i=e,s=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0))),i.__preactattr_=!0,i;var a,l,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){var o=e&&e._component,i=o,s=e,a=o&&e._componentConstructor===t.nodeName,l=a,c=g(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!r||o._component)?(j(o,c,3,n,r),e=o.base):(i&&!a&&(A(i),e=s=null),o=E(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,s=null),j(o,c,1,n,r),e=o.base,s&&e!==s&&(s._component=null,O(s,!1)));return e}(e,t,n,r);if(C="svg"===c||"foreignObject"!==c&&C,c=String(c),(!e||!h(e,c))&&(a=c,(l=C?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0)}var u=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,v=d.length;v--;)p[d[v].name]=d[v].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&function(e,t,n,r,o){var i,s,a,l,c,u=e.childNodes,p=[],f={},d=0,v=0,g=u.length,b=0,m=t?t.length:0;if(0!==g)for(var _=0;_<g;_++){var S=u[_],C=S.__preactattr_,x=m&&C?S._component?S._component.__key:C.key:null;null!=x?(d++,f[x]=S):(C||(void 0!==S.splitText?!o||S.nodeValue.trim():o))&&(p[b++]=S)}if(0!==m)for(var _=0;_<m;_++){l=t[_],c=null;var x=l.key;if(null!=x)d&&void 0!==f[x]&&(c=f[x],f[x]=void 0,d--);else if(v<b)for(i=v;i<b;i++)if(void 0!==p[i]&&(w=s=p[i],V=o,"string"==typeof(T=l)||"number"==typeof T?void 0!==w.splitText:"string"==typeof T.nodeName?!w._componentConstructor&&h(w,T.nodeName):V||w._componentConstructor===T.nodeName)){c=s,p[i]=void 0,i===b-1&&b--,i===v&&v++;break}c=k(c,l,n,r),a=u[_],c&&c!==e&&c!==a&&(null==a?e.appendChild(c):c===a.nextSibling?y(a):e.insertBefore(c,a))}var w,T,V;if(d)for(var _ in f)void 0!==f[_]&&O(f[_],!1);for(;v<=b;)void 0!==(c=p[b--])&&O(c,!1)}(i,f,n,r,x||null!=p.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||b(e,r,n[r],n[r]=void 0,C);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||b(e,r,n[r],n[r]=t[r],C)}(i,t.attributes,p),C=s,i}function O(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&c(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||y(e),V(e))}function V(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}var N=[];function E(e,t,n){var r,o=N.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),L.call(r,t,n)):((r=new L(t,n)).constructor=e,r.render=P);o--;)if(N[o].constructor===e)return r.nextBase=N[o].nextBase,N.splice(o,1),r;return r}function P(e,t,n){return this.constructor(e,n)}function j(e,t,n,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?d(e):M(e,1,i)),c(e.__ref,e))}function M(e,t,n,r){if(!e._disable){var i,s,a,c=e.props,u=e.state,p=e.context,f=e.prevProps||c,d=e.prevState||u,v=e.prevContext||p,h=e.base,y=e.nextBase,b=h||y,m=e._component,C=!1,x=v;if(e.constructor.getDerivedStateFromProps&&(u=l(l({},u),e.constructor.getDerivedStateFromProps(c,u)),e.state=u),h&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,u,p)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(c,u,p),e.props=c,e.state=u,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){i=e.render(c,u,p),e.getChildContext&&(p=l(l({},p),e.getChildContext())),h&&e.getSnapshotBeforeUpdate&&(x=e.getSnapshotBeforeUpdate(f,d));var k,V,N=i&&i.nodeName;if("function"==typeof N){var P=g(i);(s=m)&&s.constructor===N&&P.key==s.__key?j(s,P,1,p,!1):(k=s,e._component=s=E(N,P,p),s.nextBase=s.nextBase||y,s._parentComponent=e,j(s,P,0,p,!1),M(s,1,n,!0)),V=s.base}else a=b,(k=m)&&(a=e._component=null),(b||1===t)&&(a&&(a._component=null),V=T(a,i,p,n||!h,b&&b.parentNode,!0));if(b&&V!==b&&s!==m){var L=b.parentNode;L&&V!==L&&(L.replaceChild(V,b),k||(b._component=null,O(b,!1)))}if(k&&A(k),e.base=V,V&&!r){for(var B=e,D=e;D=D._parentComponent;)(B=D).base=V;V._component=B,V._componentConstructor=B.constructor}}for(!h||n?_.push(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,d,x),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);S||r||w()}}function A(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?A(n):t&&(null!=t.__preactattr_&&c(t.__preactattr_.ref,null),e.nextBase=t,y(t),N.push(e),V(t)),c(e.__ref,null)}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function B(e,t,n){return T(n,e,{},!1,t,!1)}l(L.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),M(this,2)},render:function(){}});n(0);var D=0,R=document.head.appendChild(document.createElement("style")).sheet;function I(e,t){var n="p"+D++,r=t+n;return e.forEach(function(e){if(/^@/.test(e)){var t=e.indexOf("{")+1;e=e.slice(0,t)+r+e.slice(t)}else e=r+e;R.insertRule(e,R.cssRules.length)}),n}function U(e,t){return t+"{"+e+"}"}function F(e,t){var n=[""];for(var r in t=t||0,e){var o=e[r];r=r.replace(/[A-Z]/g,"-$&").toLowerCase(),o.sub||Array.isArray(o)?(o=Array.isArray(o)?o:[o]).forEach(function(e){return n[0]+=r+":"+e+";"}):(r=r.replace(/&/g,""),n.push(U(F(o,!/^@/.test(r)).join(""),r)))}return t||(n[0]=U(n[0],"")),n}var z=function(e,t){var n={};return(t=t||{}).returnObject?{style:r,css:o}:r;function r(t){return function(n){return function(r,i){i=(r=r||{}).children||i;var s="function"==typeof n?n(r):n;return r.class=[o(s),r.class].filter(Boolean).join(" "),e(t,r,i)}}}function o(e){var t=F(e),r=t.join("");return n[r]||(n[r]=I(t,"."))}};const W={default:{default:"rgb(0,0,0)",reverse:"rgb(255,255,255)",border:"rgb(230,230,230)",lightGrey:"rgba(0, 0, 0, 0.1)",grey:"rgb(78,79,79)",darkGrey:"rgba(0,0,0,0.5)",primary:"rgb(9,132,227)",lightPrimary:"rgba(9, 132, 227, 0.15)",secondary:"rgb(255,188,0)",tertiary:"rgb(98,113,122)",quart:"rgb(194,40,57)",color1:"#81ecec",color2:"#ff7675",color3:"#fdcb6e",color4:"#74b9ff"},dark:{default:"rgb(200,200,200)",reverse:"rgb(18,45,66)",border:"rgb(60,99,130)",lightGrey:"rgba(255, 255, 255, 0.1)",grey:"rgb(150,150,150)",darkGrey:"rgba(255, 255, 255, 0.5)",primary:"rgb(14,211,185)",lightPrimary:"rgba(14, 211, 185, 0.5)",secondary:"rgb(255,188,0)",tertiary:"rgb(166,190,204)",quart:"rgb(194,40,57)",color1:"#81ecec",color2:"#ff7675",color3:"#fdcb6e",color4:"#74b9ff"}};var G=function(e){window.postMessage(JSON.stringify(e))},H="SEND_INITIAL_DATA",Y="NAVIGATE_TO_BIBLE_VERSE_DETAIL",X="NAVIGATE_TO_VERSE_NOTES",q="TOGGLE_SELECTED_VERSE",$=z(a),J=$("svg")(function(e){e.settings.fontSizeScale;return{}}),Z=$("div")(function(e){e.settings.theme;return{position:"relative",display:"inline-block",transform:"translateY(5px)",marginRight:"10px"}}),K=$("div")(function(e){var t=e.settings.theme;return{background:W[t].primary,position:"absolute",width:"15px",height:"15px",borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"arial",fontSize:"13px",fontWeight:"bold",color:"white",bottom:"0",right:"0px"}}),Q=function(e){var t=e.count,n=e.settings,r=e.onClick;return a(Z,{settings:n},a(J,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",settings:n,onClick:r},a("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a("polyline",{points:"14 2 14 8 20 8"}),a("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),a("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),a("polyline",{points:"10 9 9 9 8 9"})),a(K,{settings:n},t))};function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=z(a),ae=function(e,t){return"".concat(e+.1*t*e,"px")},le=se("span")(function(e){var t=e.settings.fontSizeScale;return{fontSize:ae(20,t),lineHeight:ae(34,t)}}),ce=se("span")(function(e){var t=e.settings.fontSizeScale;return{fontSize:ae(14,t)}}),ue=se("span")(function(e){var t,n,r=e.isFocused,o=e.isSelected,i=e.highlightedColor,s=e.settings.theme,a="transparent";return i&&!o&&(a="".concat((t=W[s][i],n=50,t=t.replace("#",""),"rgba("+parseInt(t.substring(0,2),16)+","+parseInt(t.substring(2,4),16)+","+parseInt(t.substring(4,6),16)+","+n/100+")"))),r&&(a="rgba(0,0,0,0.1)"),{fontFamily:"Literata Book",transition:"background 0.3s ease",background:a,"-webkit-touch-callout":"none",padding:"4px",borderBottom:o?"2px dashed rgb(52,73,94)":"none","-moz-user-select":"none","-ms-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none"}}),pe=se("span")(function(e){return{display:e.settings.textDisplay}}),fe=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return r=this,o=(e=ne(t)).call.apply(e,[this].concat(s)),n=!o||"object"!==ee(o)&&"function"!=typeof o?re(r):o,ie(re(n),"state",{focused:!1}),ie(re(n),"disableOnClick",!1),ie(re(n),"navigateToBibleVerseDetail",function(){var e=n.props.isSelectedMode;n.disableOnClick||(e?n.toggleSelectVerse():G({type:Y,payload:n.props.verse.Verset}))}),ie(re(n),"navigateToVerseNotes",function(){var e=n.props.verse,t=e.Livre,r=e.Chapitre,o=e.Verset;G({type:X,payload:"".concat(t,"-").concat(r,"-").concat(o)})}),ie(re(n),"toggleSelectVerse",function(){var e=n.props.verse,t=e.Livre,r=e.Chapitre,o=e.Verset;n.disableOnClick=!0,G({type:q,payload:"".concat(t,"-").concat(r,"-").concat(o)})}),ie(re(n),"onTouchStart",function(e){n.setState({isFocused:!0}),n.startX=e.touches[0].clientX,n.startY=e.touches[0].clientY,n.buttonPressTimer=setTimeout(n.toggleSelectVerse,500)}),ie(re(n),"onTouchEnd",function(){n.setState({isFocused:!1}),setTimeout(function(){n.disableOnClick=!1},200),clearTimeout(n.buttonPressTimer)}),ie(re(n),"onTouchMove",function(e){(Math.abs(e.touches[0].clientX-n.startX)>10||Math.abs(e.touches[0].clientY-n.startY)>10)&&n.buttonPressTimer&&clearTimeout(n.buttonPressTimer)}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,L),n=t,(r=[{key:"render",value:function(e,t){var n=e.verse,r=e.isSelected,o=e.highlightedColor,i=e.notesCount,s=e.settings,l=t.isFocused;return a(pe,{settings:s,id:"verset-".concat(n.Verset)},a(ue,{settings:s,isFocused:l,isSelected:r,highlightedColor:o,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchMove:this.onTouchMove},a(ce,{settings:s},n.Verset," "),i&&a(Q,{settings:s,onClick:this.navigateToVerseNotes,count:i}),a(le,{settings:s,onClick:this.navigateToBibleVerseDetail},n.Texte)))}}])&&te(n.prototype,r),o&&te(n,o),t}();function de(e){return(de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=z(a)("div")(function(e){var t=e.settings,n=t.alignContent,r=t.theme,o=e.isReadOnly;return{maxWidth:"320px",width:"100%",margin:"0 auto",textAlign:n,background:W[r].reverse,color:W[r].default,pointerEvents:o?"none":"auto"}}),_e=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return r=this,o=(e=he(t)).call.apply(e,[this].concat(s)),n=!o||"object"!==de(o)&&"function"!=typeof o?ge(r):o,be(ge(n),"state",{verses:[],selectedVerses:{},highlightedVerses:{},notedVerses:{},settings:{},verseToScroll:null,isReadOnly:!1}),be(ge(n),"getNotedVerses",function(e,t){var n={};if(e.length){var r=e[0],o=r.Livre,i=r.Chapitre;Object.keys(t).map(function(e){var t=e.split("/")[0],r=parseInt(t.split("-")[0]),s=parseInt(t.split("-")[1]),a=t.split("-")[2];r===o&&s===i&&(n[a]?n[a]=n[a]+1:n[a]=1)})}return n}),be(ge(n),"receiveDataFromApp",function(){var e=ge(n);document.addEventListener("message",function(t){var r=JSON.parse(t.data);switch(r.type){case H:var o=r.verses,i=r.selectedVerses,s=r.highlightedVerses,a=r.notedVerses,l=r.settings,c=r.verseToScroll,u=r.isReadOnly;e.setState({verses:o,selectedVerses:i,highlightedVerses:s,notedVerses:n.getNotedVerses(o,a),settings:l,verseToScroll:c,isReadOnly:u})}})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,L),n=t,(r=[{key:"componentDidMount",value:function(){this.receiveDataFromApp()}},{key:"componentDidUpdate",value:function(e,t){var n=this;t&&t.settings.theme!==this.state.settings.theme&&(document.body.style.backgroundColor=W[this.state.settings.theme].reverse),t&&t.verseToScroll!==this.state.verseToScroll&&setTimeout(function(){document.querySelector("#verset-".concat(n.state.verseToScroll)).scrollIntoView()},200)}},{key:"render",value:function(e,t){return t.verses.length?a(me,{settings:t.settings,isReadOnly:t.isReadOnly},t.verses.map(function(e){var n=e.Livre,r=e.Chapitre,o=e.Verset,i=!!t.selectedVerses["".concat(n,"-").concat(r,"-").concat(o)],s=!!Object.keys(t.selectedVerses).length,l=!!t.highlightedVerses["".concat(n,"-").concat(r,"-").concat(o)]&&t.highlightedVerses["".concat(n,"-").concat(r,"-").concat(o)].color,c=t.notedVerses["".concat(o)];return a(fe,{verse:e,settings:t.settings,isSelected:i,isSelectedMode:s,highlightedColor:l,notesCount:c})})):null}}])&&ve(n.prototype,r),o&&ve(n,o),t}();B(a(_e,{verses:void 0,settings:void 0,verseToScroll:void 0,selectedVerses:void 0}),document.getElementById("app"))}]);