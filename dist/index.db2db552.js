function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"3EsVB":"index.db2db552.js","hm5VY":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;f=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!v.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,F=p&&O.bind(j,j),L=(E=p?function(e){return e&&F(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),$=E("".slice);w=function(e){return $(L(e),8,-1)};var x=Object,M=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):x(e)}:x;var P,T;T=function(e){return null==e};var H=TypeError;P=function(e){if(T(e))throw H("Can't call method on "+e);return e},_=function(e){return k(P(e))};var I,q,N,A={},C={},R="object"==typeof document&&document.all,D=(N={all:R,IS_HTMLDDA:void 0===R&&void 0!==R}).all;C=N.IS_HTMLDDA?function(e){return"function"==typeof e||e===D}:function(e){return"function"==typeof e};var z=N.all;A=N.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:C(e)||e===z}:function(e){return"object"==typeof e?null!==e:C(e)};var W,U={},G=function(e){return C(e)?e:void 0};W=function(e,t){return arguments.length<2?G(c[e]):c[e]&&c[e][t]};var B={};B=E({}.isPrototypeOf);var V,Y,J,X={};X=W("navigator","userAgent")||"";var Q,K,Z=c.process,ee=c.Deno,te=Z&&Z.versions||ee&&ee.version,ne=te&&te.v8;ne&&(K=(Q=ne.split("."))[0]>0&&Q[0]<4?1:+(Q[0]+Q[1])),!K&&X&&(!(Q=X.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=X.match(/Chrome\/(\d+)/))&&(K=+Q[1]),J=K,Y=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&J&&J<41})),V=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var re=Object;U=V?function(e){return"symbol"==typeof e}:function(e){var t=W("Symbol");return C(t)&&B(t.prototype,re(e))};var ie,oe,ae,se=String;ae=function(e){try{return se(e)}catch(e){return"Object"}};var ce=TypeError;oe=function(e){if(C(e))return e;throw ce(ae(e)+" is not a function")},ie=function(e,t){var n=e[t];return T(n)?void 0:oe(n)};var ue,le=TypeError;ue=function(e,t){var n,r;if("string"===t&&C(n=e.toString)&&!A(r=f(n,e)))return r;if(C(n=e.valueOf)&&!A(r=f(n,e)))return r;if("string"!==t&&C(n=e.toString)&&!A(r=f(n,e)))return r;throw le("Can't convert object to primitive value")};var de;var pe,fe={},he=Object.defineProperty;pe=function(e,t){try{he(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var ge=c["__core-js_shared__"]||pe("__core-js_shared__",{});fe=ge,(de=function(e,t){return fe[e]||(fe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",source:"https://github.com/zloirock/core-js"});var ve,me={},ye=Object;ve=function(e){return ye(P(e))};var be=E({}.hasOwnProperty);me=Object.hasOwn||function(e,t){return be(ve(e),t)};var _e,we=0,ke=Math.random(),Ee=E(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ee(++we+ke,36)};var Se=de("wks"),Oe=c.Symbol,je=Oe&&Oe.for,Fe=V?Oe:Oe&&Oe.withoutSetter||_e,Le=TypeError,$e=function(e){if(!me(Se,e)||!Y&&"string"!=typeof Se[e]){var t="Symbol."+e;Y&&me(Oe,e)?Se[e]=Oe[e]:Se[e]=V&&je?je(t):Fe(t)}return Se[e]}("toPrimitive");q=function(e,t){if(!A(e)||U(e))return e;var n,r=ie(e,$e);if(r){if(void 0===t&&(t="default"),n=f(r,e,t),!A(n)||U(n))return n;throw Le("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},I=function(e){var t=q(e,"string");return U(t)?t:t+""};var xe,Me,Pe=c.document,Te=A(Pe)&&A(Pe.createElement);Me=function(e){return Te?Pe.createElement(e):{}},xe=!l&&!d((function(){return 7!=Object.defineProperty(Me("div"),"a",{get:function(){return 7}}).a}));var He,Ie,qe=Object.getOwnPropertyDescriptor,Ne=s=l?qe:function(e,t){if(e=_(e),t=I(t),xe)try{return qe(e,t)}catch(e){}if(me(e,t))return b(!f(h,e,t),e[t])},Ae={};Ie=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ce,Re=String,De=TypeError;Ce=function(e){if(A(e))return e;throw De(Re(e)+" is not an object")};var ze=TypeError,We=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor;He=l?Ie?function(e,t,n){if(Ce(e),t=I(t),Ce(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ue(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return We(e,t,n)}:We:function(e,t,n){if(Ce(e),t=I(t),Ce(n),xe)try{return We(e,t,n)}catch(e){}if("get"in n||"set"in n)throw ze("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ae=l?function(e,t,n){return He(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,Be,Ve=Function.prototype,Ye=l&&Object.getOwnPropertyDescriptor,Je=me(Ve,"name"),Xe={EXISTS:Je,PROPER:Je&&"something"===function(){}.name,CONFIGURABLE:Je&&(!l||l&&Ye(Ve,"name").configurable)}.CONFIGURABLE,Qe={},Ke=E(Function.toString);C(fe.inspectSource)||(fe.inspectSource=function(e){return Ke(e)}),Qe=fe.inspectSource;var Ze,et,tt=c.WeakMap;et=C(tt)&&/native code/.test(String(tt));var nt,rt=de("keys");nt=function(e){return rt[e]||(rt[e]=_e(e))};var it={};it={};var ot,at,st,ct=c.TypeError,ut=c.WeakMap;if(et||fe.state){var lt=fe.state||(fe.state=new ut),dt=E(lt.get),pt=E(lt.has),ft=E(lt.set);ot=function(e,t){if(pt(lt,e))throw ct("Object already initialized");return t.facade=e,ft(lt,e,t),t},at=function(e){return dt(lt,e)||{}},st=function(e){return pt(lt,e)}}else{var ht=nt("state");it[ht]=!0,ot=function(e,t){if(me(e,ht))throw ct("Object already initialized");return t.facade=e,Ae(e,ht,t),t},at=function(e){return me(e,ht)?e[ht]:{}},st=function(e){return me(e,ht)}}var gt=(Ze={set:ot,get:at,has:st,enforce:function(e){return st(e)?at(e):ot(e,{})},getterFor:function(e){return function(t){var n;if(!A(t)||(n=at(t)).type!==e)throw ct("Incompatible receiver, "+e+" required");return n}}}).enforce,vt=Ze.get,mt=Object.defineProperty,yt=l&&!d((function(){return 8!==mt((function(){}),"length",{value:8}).length})),bt=String(String).split("String"),_t=Be=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!me(e,"name")||Xe&&e.name!==t)&&(l?mt(e,"name",{value:t,configurable:!0}):e.name=t),yt&&n&&me(n,"arity")&&e.length!==n.arity&&mt(e,"length",{value:n.arity});try{n&&me(n,"constructor")&&n.constructor?l&&mt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=gt(e);return me(r,"source")||(r.source=bt.join("string"==typeof t?t:"")),e};Function.prototype.toString=_t((function(){return C(this)&&vt(this).source||Qe(this)}),"toString"),Ge=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(C(n)&&Be(n,o,r),r.global)i?e[t]=n:pe(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:He(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var wt,kt,Et,St,Ot,jt={},Ft={},Lt=Math.ceil,$t=Math.floor;Ft=Math.trunc||function(e){var t=+e;return(t>0?$t:Lt)(t)},Ot=function(e){var t=+e;return t!=t||0===t?0:Ft(t)};var xt=Math.max,Mt=Math.min;St=function(e,t){var n=Ot(e);return n<0?xt(n+t,0):Mt(n,t)};var Pt,Tt,Ht=Math.min;Tt=function(e){return e>0?Ht(Ot(e),9007199254740991):0},Pt=function(e){return Tt(e.length)};var It=function(e){return function(t,n,r){var i,o=_(t),a=Pt(o),s=St(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},qt={includes:It(!0),indexOf:It(!1)}.indexOf,Nt=E([].push);Et=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!me(it,n)&&me(r,n)&&Nt(o,n);for(;t.length>i;)me(r,n=t[i++])&&(~qt(o,n)||Nt(o,n));return o};var At,Ct=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");kt=Object.getOwnPropertyNames||function(e){return Et(e,Ct)},At=Object.getOwnPropertySymbols;var Rt=E([].concat);jt=W("Reflect","ownKeys")||function(e){var t=kt(Ce(e));return At?Rt(t,At(e)):t},wt=function(e,t,n){for(var r=jt(t),i=He,o=s,a=0;a<r.length;a++){var c=r[a];me(e,c)||n&&me(n,c)||i(e,c,o(t,c))}};var Dt={},zt=/#|\.prototype\./,Wt=function(e,t){var n=Gt[Ut(e)];return n==Vt||n!=Bt&&(C(t)?d(t):!!t)},Ut=Wt.normalize=function(e){return String(e).replace(zt,".").toLowerCase()},Gt=Wt.data={},Bt=Wt.NATIVE="N",Vt=Wt.POLYFILL="P";Dt=Wt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||pe(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=Ne(n,r))&&a.value:n[r],!Dt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;wt(o,i)}(e.sham||i&&i.sham)&&Ae(o,"sham",!0),Ge(n,r,o,e)}};var Yt,Jt={},Xt=Function.prototype,Qt=Xt.apply,Kt=Xt.call;Jt="object"==typeof Reflect&&Reflect.apply||(p?Kt.bind(Qt):function(){return Kt.apply(Qt,arguments)});var Zt,en=E(E.bind);Zt=function(e,t){return oe(e),void 0===t?e:p?en(e,t):function(){return e.apply(t,arguments)}};var tn={};tn=W("document","documentElement");var nn={};nn=E([].slice);var rn,on=TypeError;rn=function(e,t){if(e<t)throw on("Not enough arguments");return e};var an;an=/(?:ipad|iphone|ipod).*applewebkit/i.test(X);var sn;sn="process"==w(c.process);var cn,un,ln,dn,pn=c.setImmediate,fn=c.clearImmediate,hn=c.process,gn=c.Dispatch,vn=c.Function,mn=c.MessageChannel,yn=c.String,bn=0,_n={};try{cn=c.location}catch(e){}var wn=function(e){if(me(_n,e)){var t=_n[e];delete _n[e],t()}},kn=function(e){return function(){wn(e)}},En=function(e){wn(e.data)},Sn=function(e){c.postMessage(yn(e),cn.protocol+"//"+cn.host)};pn&&fn||(pn=function(e){rn(arguments.length,1);var t=C(e)?e:vn(e),n=nn(arguments,1);return _n[++bn]=function(){Jt(t,void 0,n)},un(bn),bn},fn=function(e){delete _n[e]},sn?un=function(e){hn.nextTick(kn(e))}:gn&&gn.now?un=function(e){gn.now(kn(e))}:mn&&!an?(dn=(ln=new mn).port2,ln.port1.onmessage=En,un=Zt(dn.postMessage,dn)):c.addEventListener&&C(c.postMessage)&&!c.importScripts&&cn&&"file:"!==cn.protocol&&!d(Sn)?(un=Sn,c.addEventListener("message",En,!1)):un="onreadystatechange"in Me("script")?function(e){tn.appendChild(Me("script")).onreadystatechange=function(){tn.removeChild(this),wn(e)}}:function(e){setTimeout(kn(e),0)});var On=(Yt={set:pn,clear:fn}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==On},{clearImmediate:On});var jn=Yt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==jn},{setImmediate:jn});var Fn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return x()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Fn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Fn:Function("r","regeneratorRuntime = r")(Fn)}const Ln=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},$n={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},xn=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Mn=function(e=$n.search.page){$n.search.page=e;const t=(e-1)*$n.search.resultsPerPage,n=e*$n.search.resultsPerPage;return $n.search.results.slice(t,n)},Pn=function(){localStorage.setItem("bookmarks",JSON.stringify($n.bookmarks))},Tn=function(e){$n.bookmarks.push(e),e.id===$n.recipe.id&&($n.recipe.bookmarked=!0),Pn()};!function(){const e=localStorage.getItem("bookmarks");e&&($n.bookmarks=JSON.parse(e))}();function Hn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var In,qn,Nn,An;In=new URL(o("kyEFX").resolve("hm5VY"),import.meta.url).toString();class Cn{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n        <div class="spinner">\n          <svg>\n            <use href="${n(In)}#icon-loader"></use>\n          </svg>\n        </div> \n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n              <div>\n                <svg>\n                  <use href="${n(In)}#icon-alert-triangle"></use>\n                </svg>\n              </div>\n              <p>${e}</p>\n            </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n              <div>\n                <svg>\n                  <use href="${n(In)}#icon-smile"></use>\n                </svg>\n              </div>\n              <p>${e}</p>\n            </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}constructor(){Hn(this,"_data",void 0)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Nn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},An=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(Nn(this.denominator)){var e=An(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Nn(this.numerator)&&(e=An(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},qn=Fraction;var Rn=new class extends Cn{addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.updateTo;r>0&&e(r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${n(In)}#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${n(In)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n            <svg>\n              <use href="${n(In)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings"  data-update-to="${this._data.servings+1}">\n            <svg>\n              <use href="${n(In)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n         <svg>\n           <use href="${n(In)}#icon-user"></use>\n         </svg>\n      </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${n(In)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </ul>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${this._data.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="src/img/icons.svg#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="${n(In)}#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">${e.quantity?new qn(e.quantity).toString():""}</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n    </div>\n  </li>\n  `}constructor(...e){super(...e),Hn(this,"_parentElement",document.querySelector(".recipe")),Hn(this,"_errorMessage","Could not find the recipe. Please try another one. "),Hn(this,"_message","Start by searching for a recipe or an ingredient. Have fun!")}};var Dn=new class{getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}constructor(){Hn(this,"_parentElement",document.querySelector(".search"))}};var zn=new class extends Cn{_generateMarkup(){const e=window.location.hash.slice(1);return`\n        <li class="preview">\n            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n              <figure class="preview__fig">\n                <img src="${this._data.image}" alt="Test" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p>\n                <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                  <svg>\n                    <use href="${n(In)}#icon-user"></use>\n                  </svg>\n                </div>\n\n              </div>\n              \n            </a>\n        </li>\n    `}constructor(...e){super(...e),Hn(this,"_parentElement","")}};var Wn=new class extends Cn{_generateMarkup(){return this._data.map((e=>zn.render(e,!1))).join("")}constructor(...e){super(...e),Hn(this,"_parentElement",document.querySelector(".results")),Hn(this,"_errorMessage","No recipes found! Please try again :)"),Hn(this,"_message","Start by searching for a recipe or an ingredient. Have fun!")}};var Un=new class extends Cn{addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return console.log(t),1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(In)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(In)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n        </button>\n      `:e<t?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n                <use href="${n(In)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(In)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n        </button>\n      `:""}constructor(...e){super(...e),Hn(this,"_parentElement",document.querySelector(".pagination"))}};var Gn=new class extends Cn{addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>zn.render(e,!1))).join("")}constructor(...e){super(...e),Hn(this,"_parentElement",document.querySelector(".bookmarks__list")),Hn(this,"_errorMessage","No bookmarks yet. Find a nice recipe and bookmark it :)")}};var Bn=new class extends Cn{toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}constructor(){super(),Hn(this,"_parentElement",document.querySelector(".upload")),Hn(this,"_message","Recipe was uploaded successFully :)"),Hn(this,"_window",document.querySelector(".add-recipe-window")),Hn(this,"_overlay",document.querySelector(".overlay")),Hn(this,"_btnOpen",document.querySelector(".nav__btn--add-recipe")),Hn(this,"_btnClose",document.querySelector(".btn--close-modal")),this._addHandlerShowWindow(),this._addHandlerHideWindow()}};const Vn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Rn.renderSpinner(),Wn.update(Mn()),Gn.update($n.bookmarks),await async function(e){try{const t=await Ln(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=8a381e66-bc62-42c6-bc1e-5956ec891321`);$n.recipe=xn(t),$n.bookmarks.some((t=>t.id===e))?$n.recipe.bookmarked=!0:$n.recipe.bookmarked=!1,console.log($n.recipe)}catch(e){throw console.error(`${e} 💔`),e}}(e),Rn.render($n.recipe)}catch(e){console.log(e),Rn.renderError()}},Yn=async function(){try{Wn.renderSpinner();const e=Dn.getQuery();if(!e)return;await async function(e){try{$n.search.query=e;const t=await Ln(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=8a381e66-bc62-42c6-bc1e-5956ec891321`);console.log(t),$n.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),$n.search.page=1}catch(e){throw e}}(e),Wn.render(Mn()),Un.render($n.search)}catch(e){throw console.log(e),e}},Jn=function(e){Wn.render(Mn(e)),Un.render($n.search)},Xn=function(e){!function(e){$n.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/$n.recipe.servings})),$n.recipe.servings=e}(e),Rn.update($n.recipe)},Qn=function(){$n.recipe.bookmarked?function(e){const t=$n.bookmarks.findIndex((t=>t.id===e));$n.bookmarks.splice(t,1),e===$n.recipe.id&&($n.recipe.bookmarked=!1),Pn()}($n.recipe.id):Tn($n.recipe),Rn.update($n.recipe),Gn.render($n.bookmarks)},Kn=function(){Gn.render($n.bookmarks)},Zn=async function(e){try{Bn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format. Please check again.");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Ln("https://forkify-api.herokuapp.com/api/v2/recipes/?key=8a381e66-bc62-42c6-bc1e-5956ec891321",n);$n.recipe=xn(r),Tn($n.recipe)}catch(e){throw e}}(e),console.log($n.recipe),Rn.render($n.recipe),Bn.renderMessage(),Gn.render($n.bookmarks),window.history.pushState(null,"",`#${$n.recipe.id}`),setTimeout((function(){Bn.toggleWindow()}),2500)}catch(e){console.error(e),Bn.renderError(e.message)}};Gn.addHandlerRender(Kn),Rn.addHandlerRender(Vn),Rn.addHandlerUpdateServings(Xn),Rn.addHandlerAddBookmark(Qn),Dn.addHandlerSearch(Yn),Un.addHandlerClick(Jn),Bn.addHandlerUpload(Zn);
//# sourceMappingURL=index.db2db552.js.map
