(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0671fbea"],{2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return r(t)}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||o(t)||u()}n.d(e,"a",(function(){return c}))},e534:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"update-enter"},[n("h2",[t._v("Update Enter")]),n("p",[t._v("dog")]),n("p",[t._v("cat")]),n("p",[t._v("pig")])]),n("div",{staticClass:"update-exit"},[n("h2",[t._v("Update Exit")]),n("p",[t._v("horse")]),n("p",[t._v("ox")]),n("p",[t._v("lion")]),n("p",[t._v("deer")])])])}],i=n("2909"),o=n("5698"),u={mounted:function(){var t=[3,6,9,12,15],e=o["w"](".update-enter").selectAll("p"),n=e.data(t),r=n.enter();n.text((function(t,e){return"update: "+t+" ,index: "+e}));var a=r.append("p");a.text((function(t,e){return"enter: "+t+" ,index: "+e}));var u=[3,6],c=o["w"](".update-exit").selectAll("p"),p=c.data(u),d=p.exit();p.text((function(t,e){return"update: "+t+" ,index: "+e})),d.text((function(){return"exit"}));var l=[].concat(t,[18,21]);function s(t){o["w"](".update-enter").selectAll("p").data(t).enter().append("p").text((function(t,e){return"add: "+t+" ,index: "+e}))}setTimeout((function(){s(l)}),2e3),setTimeout((function(){var t=[].concat(Object(i["a"])(l),[24,27]);s(t)}),3500)}},c=u,p=n("2877"),d=Object(p["a"])(c,r,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-0671fbea.78653c0a.js.map