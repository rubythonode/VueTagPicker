!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTagPicker=e():t.VueTagPicker=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=25)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(21)("wks"),o=n(22),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(10),o=n(19);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3),o=n(37),i=n(52),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(21)("keys"),o=n(22);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(38),o=n(8);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(9),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";var r=n(41),o=n(35),i=n(47),u=n(2),s=n(5),a=n(6),c=n(39),f=n(20),l=n(44),p=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,g,h,y,m){c(n,e,g);var x,_,b,O=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",C="values"==h,k=!1,T=t.prototype,j=T[p]||T["@@iterator"]||h&&T[h],E=j||O(h),S=h?C?O("entries"):E:void 0,P="Array"==e?T.entries||j:j;if(P&&(b=l(P.call(new t)))!==Object.prototype&&(f(b,w,!0),r||s(b,p)||u(b,p,v)),C&&j&&"values"!==j.name&&(k=!0,E=function(){return j.call(this)}),r&&!m||!d&&!k&&T[p]||u(T,p,E),a[e]=E,a[w]=v,h)if(x={values:C?E:O("values"),keys:y?E:O("keys"),entries:S},m)for(_ in x)_ in T||i(T,_,x[_]);else o(o.P+o.F*(d||k),e,x);return x}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(10).f,o=n(5),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){function r(t){o||n(58)}var o=!1,i=n(59)(n(24),n(60),r,"data-v-da19e8ae",null);i.options.__file="C:\\sandbox\\vuetagpicker\\src\\components\\TagPicker.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TagPicker.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){"use strict";function r(t,e){return t.indexOf(e)>-1}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=n.n(o),u=n(26),s=n(27);e.default={name:"tag-picker",props:{allowDuplicates:{type:Boolean,default:!1},seperator:{type:String,default:"|"},addOnKeys:{type:Array,default:function(){return[u.a,u.b,u.c]}},removeOnKeys:{type:Array,default:function(){return[u.d]}},tagsList:{default:function(){return[]}},tagColour:{type:String,default:"#3498db"},tagTextColour:{type:String,default:"white"},fieldName:{type:String,default:"vue-tag-picker"},borderColor:{type:String,default:"#cecece"}},data:function(){return{field:"",editing:{mode:!1,original:""},tags:[]}},methods:{setFocus:function(){var t=this.$el.getElementsByTagName("input");t.length>0&&t[0].focus()},removeTag:function(t,e){var n=this.tags.slice(0,e),r=this.tags.slice(e+1);this.tags=n.concat(r)},lostFocus:function(){""!==this.field.trim()&&this.addTag()},updateTag:function(){this.tags[this.editing.original]=this.field,this.editing.mode=!1,this.field="",this.removeAllEditingClasses()},showDuplicateError:function(){var t=this.tags.indexOf(this.field),e=this.$el.getElementsByClassName("tagger-tag")[t];n.i(s.a)(this.$el.getElementsByClassName("tagger-tag"),"shake"),setTimeout(function(){return n.i(s.b)(e,"shake")},1e3)},addTag:function(){return this.editing.mode?void this.updateTag():!this.allowDuplicates&&r(this.tags,this.field)?void this.showDuplicateError():(this.field.trim()&&(this.tags.push(this.field),this.$emit("added",this.field)),void(this.field=""))},fieldUpdate:function(t){if(r(this.addOnKeys,t.keyCode))this.addTag();else{if(!r(this.removeOnKeys,t.keyCode)||0!==this.field.length)return!0;this.tags.pop()}},removeAllEditingClasses:function(){var t=this.$el.getElementsByClassName("tagger-tag"),e=!0,r=!1,o=void 0;try{for(var u,a=i()(t);!(e=(u=a.next()).done);e=!0){var c=u.value;n.i(s.c)(c,"editing")}}catch(t){r=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(r)throw o}}},setEdit:function(t){var e=this.$el.getElementsByClassName("tagger-tag")[t];this.editing={mode:!0,original:t},this.removeAllEditingClasses(),this.field=this.tags[t],e&&n.i(s.b)(e.parentElement,"editing")}},mounted:function(){this.tags=Array.isArray(this.tagsList)?this.tagsList:this.tagsList.split(this.seperator)},watch:{tags:function(t){this.$emit("changed",this.tags)}}}},function(t,e,n){t.exports={TagPicker:n(23),install:function(e){e.component("tag-picker",t.exports.TagPicker)}}},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"c",function(){return u});var r=13,o=9,i=8,u=188},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return i});var r=function(t,e){t&&(t.className||(t.className=""),-1===t.className.indexOf(e)&&(t.className+=" "+e))},o=function(t,e){var n=t.className.split(" "),r=[];n.forEach(function(t,e){-1===r.indexOf(t)&&r.push(t)});var o=r.indexOf(e);t.className=n=r.slice(0,o).concat(r.slice(o+1)).join(" ")},i=function(t,e){if(t){t.className||(t.className="");t.className.split(" ").indexOf(e)>-1?o(t,e):r(t,e)}}},function(t,e,n){t.exports={default:n(29),__esModule:!0}},function(t,e,n){n(57),n(56),t.exports=n(54)},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(13),o=n(50),i=n(49);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=o(a.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(14),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(30);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(0),o=n(7),i=n(34),u=n(2),s=function(t,e,n){var a,c,f,l=t&s.F,p=t&s.G,d=t&s.S,v=t&s.P,g=t&s.B,h=t&s.W,y=p?o:o[e]||(o[e]={}),m=y.prototype,x=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(c=!l&&x&&void 0!==x[a])&&a in y||(f=c?x[a]:n[a],y[a]=p&&"function"!=typeof x[a]?n[a]:g&&c?i(f,r):h&&x[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((y.virtual||(y.virtual={}))[a]=f,t&s.R&&m&&!m[a]&&u(m,a,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){t.exports=n(0).document&&document.documentElement},function(t,e,n){t.exports=!n(4)&&!n(17)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(14);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(42),o=n(19),i=n(20),u={};n(2)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=!0},function(t,e,n){var r=n(3),o=n(43),i=n(16),u=n(11)("IE_PROTO"),s=function(){},a=function(){var t,e=n(15)("iframe"),r=i.length;for(e.style.display="none",n(36).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(10),o=n(3),i=n(46);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,a=0;s>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(5),o=n(51),i=n(11)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(5),o=n(13),i=n(32)(!1),u=n(11)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(45),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){t.exports=n(2)},function(t,e,n){var r=n(12),o=n(8);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a),i<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(12),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(12),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(8);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(33),o=n(1)("iterator"),i=n(6);t.exports=n(7).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(3),o=n(53);t.exports=n(7).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";var r=n(31),o=n(40),i=n(6),u=n(13);t.exports=n(18)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){"use strict";var r=n(48)(!0);n(18)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(55);for(var r=n(0),o=n(2),i=n(6),u=n(1)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var c=s[a],f=r[c],l=f&&f.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e){},function(t,e){t.exports=function(t,e,n,r,o){var i,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,u=t.default);var a="function"==typeof u?u.options:u;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},a._ssrRegister=c):n&&(c=n),c){var f=a.functional,l=f?a.render:a.beforeCreate;f?a.render=function(t,e){return c.call(e),l(t,e)}:a.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:u,options:a}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tagpicker"},[n("ul",{staticClass:"tagger-main",style:{borderColor:t.borderColor},on:{click:t.setFocus}},[t._l(t.tags,function(e,r){return n("li",{key:e,staticClass:"tagger-tag noselect",style:{backgroundColor:t.tagColour,color:t.tagTextColour}},[n("span",{on:{dblclick:function(e){t.setEdit(r)}}},[t._v(t._s(e))]),t._v(" "),n("span",{staticClass:"tagger-remove clickable",on:{click:function(n){t.removeTag(e,r)}}},[t._v("\n        ✖\n      ")])])}),t._v(" "),n("li",{staticClass:"tagger-new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.field,expression:"field"}],style:{borderColor:t.tagColour},attrs:{type:"text",id:t.fieldName},domProps:{value:t.field},on:{keydown:t.fieldUpdate,blur:t.lostFocus,input:function(e){e.target.composing||(t.field=e.target.value)}}})])],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0}])});