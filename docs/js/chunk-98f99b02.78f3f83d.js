(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98f99b02"],{"0c17":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Force-based label placement I")]),r("svg",{staticClass:"container-border",attrs:{id:"viz"}})])},o=[],i=(r("ac6a"),r("28a5"),r("96cf"),r("1da1")),a=r("5698"),c={name:"ForceBasedLabelPlacementI",mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=1e3,r=700,n=a["u"](a["v"]),console.log(window.location),o=window.location.origin+"/json/miserables.json",t.next=7,fetch({url:o,method:"get"}).then((function(t){console.log(1),console.log(t),404===t.status&&(o=window.location.href.split("/examples/forcebasedI")[0]+"/json/miserables.json")})).catch((function(t){console.log(2),console.log(t)}));case 7:console.log("json file url: ",o),a["m"](o).then((function(t){var o={nodes:[],links:[]};t.nodes.forEach((function(t,e){o.nodes.push({node:t}),o.nodes.push({node:t}),o.links.push({source:2*e,target:2*e+1})}));var i=a["h"](o.nodes).force("charge",a["g"]().strength(-50)).force("link",a["f"](o.links).distance(0).strength(2)),c=a["h"](t.nodes).force("charge",a["g"]().strength(-3e3)).force("center",a["e"](e/2,r/2)).force("x",a["i"](e/2).strength(1)).force("y",a["j"](r/2).strength(1)).force("link",a["f"](t.links).id((function(t){return t.id})).distance(50).strength(1)).on("tick",y),s=[];function u(t,e){return t===e||s[t+"-"+e]}t.links.forEach((function(t){s[t.source.index+"-"+t.target.index]=!0,s[t.target.index+"-"+t.source.index]=!0}));var l=a["w"]("#viz").attr("width",e).attr("height",r),f=l.append("g");l.call(a["A"]().scaleExtent([.1,4]).on("zoom",(function(){f.attr("transform",a["d"].transform)})));var h=f.append("g").attr("class","links").selectAll("line").data(t.links).enter().append("line").attr("stroke","#aaa").attr("stroke-width","1px"),d=f.append("g").attr("class","nodes").selectAll("g").data(t.nodes).enter().append("circle").attr("r",5).attr("fill",(function(t){return n(t.group)}));d.on("mouseover",v).on("mouseout",m),d.call(a["c"]().on("start",L).on("drag",b).on("end",k));var p=f.append("g").attr("class","labelNodes").selectAll("text").data(o.nodes).enter().append("text").text((function(t,e){return e%2===0?"":t.node.id})).style("fill","#555").style("font-family","Arial").style("font-size",12).style("pointer-events","none");function y(){d.call(x),h.call(w),i.alphaTarget(.3).restart(),p.each((function(t,e){if(e%2===0)t.x=t.node.x,t.y=t.node.y;else{var r=this.getBBox(),n=t.x-t.node.x,o=t.y-t.node.y,i=Math.sqrt(n*n+o*o),a=r.width*(n-i)/(2*i);a=Math.max(-r.width,Math.min(0,a));var c=16;this.setAttribute("transform","translate("+a+","+c+")")}})),p.call(x)}function g(t){return isFinite(t)?t:0}function v(t){console.log(t);var e=a["w"](a["d"].target).datum().index;d.style("opacity",(function(t){return u(e,t.index)?1:.1})),p.attr("display",(function(t){return u(e,t.node.index)?"block":"none"})),h.style("opacity",(function(t){return t.source.index===e||t.target.index===e?1:.1}))}function m(){p.attr("display","block"),d.style("opacity",1),h.style("opacity",1)}function w(t){t.attr("x1",(function(t){return g(t.source.x)})).attr("y1",(function(t){return g(t.source.y)})).attr("x2",(function(t){return g(t.target.x)})).attr("y2",(function(t){return g(t.target.y)}))}function x(t){t.attr("transform",(function(t){return"translate("+g(t.x)+","+g(t.y)+")"}))}function L(t){a["d"].sourceEvent.stopPropagation(),a["d"].active||c.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}function b(t){t.fx=a["d"].x,t.fy=a["d"].y}function k(t){a["d"].active||c.alphaTarget(0),t.fx=null,t.fy=null}d.on("mouseover",v).on("mouseout",m)}));case 9:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},s=c,u=(r("f0f0"),r("2877")),l=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=l.exports},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(M){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=S(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(M){return{type:"throw",arg:M}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",y={};function g(){}function v(){}function m(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==r&&n.call(L,i)&&(w=L);var b=m.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function S(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=T(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function T(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return v.prototype=b.constructor=m,m.constructor=v,v.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(b),s(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},ac6a:function(t,e,r){for(var n=r("cadf"),o=r("0d58"),i=r("2aba"),a=r("7726"),c=r("32e9"),s=r("84f2"),u=r("2b4c"),l=u("iterator"),f=u("toStringTag"),h=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=o(d),y=0;y<p.length;y++){var g,v=p[y],m=d[v],w=a[v],x=w&&w.prototype;if(x&&(x[l]||c(x,l,h),x[f]||c(x,f,v),s[v]=h,m))for(g in n)x[g]||i(x,g,n[g],!0)}},ec37:function(t,e,r){},f0f0:function(t,e,r){"use strict";r("ec37")}}]);
//# sourceMappingURL=chunk-98f99b02.78f3f83d.js.map