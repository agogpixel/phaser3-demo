/*! For license information please see phaser-events.4aa5403ab26c606d5706.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[2060,4300],{26729:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new o(r,i||e,s),u=n?n+t:t;return e._events[u]?e._events[u].fn?e._events[u]=[e._events[u],c]:e._events[u].push(c):(e._events[u]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),c.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},c.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},c.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,t,r,o,i,s){var c=n?n+e:e;if(!this._events[c])return!1;var u,a,f=this._events[c],p=arguments.length;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,!0),p){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,t),!0;case 3:return f.fn.call(f.context,t,r),!0;case 4:return f.fn.call(f.context,t,r,o),!0;case 5:return f.fn.call(f.context,t,r,o,i),!0;case 6:return f.fn.call(f.context,t,r,o,i,s),!0}for(a=1,u=new Array(p-1);a<p;a++)u[a-1]=arguments[a];f.fn.apply(f.context,u)}else{var l,v=f.length;for(a=0;a<v;a++)switch(f[a].once&&this.removeListener(e,f[a].fn,void 0,!0),p){case 1:f[a].fn.call(f[a].context);break;case 2:f[a].fn.call(f[a].context,t);break;case 3:f[a].fn.call(f[a].context,t,r);break;case 4:f[a].fn.call(f[a].context,t,r,o);break;default:if(!u)for(l=1,u=new Array(p-1);l<p;l++)u[l-1]=arguments[l];f[a].fn.apply(f[a].context,u)}}return!0},c.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==t||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var u=0,a=[],f=c.length;u<f;u++)(c[u].fn!==t||o&&!c[u].once||r&&c[u].context!==r)&&a.push(c[u]);a.length?this._events[i]=1===a.length?a[0]:a:s(this,i)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&s(this,t)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,e.exports=c},9675:(e,t,n)=>{var r=n(69186),o=n(26729),i=n(46236),s=new r({Extends:o,initialize:function(){o.call(this)},shutdown:function(){this.removeAllListeners()},destroy:function(){this.removeAllListeners()}});i.register("EventEmitter",s,"events"),e.exports=s},85817:(e,t,n)=>{e.exports={EventEmitter:n(9675)}},46236:e=>{var t={},n={},r={register:function(e,n,r,o){void 0===o&&(o=!1),t[e]={plugin:n,mapping:r,custom:o}},registerCustom:function(e,t,r,o){n[e]={plugin:t,mapping:r,data:o}},hasCore:function(e){return t.hasOwnProperty(e)},hasCustom:function(e){return n.hasOwnProperty(e)},getCore:function(e){return t[e]},getCustom:function(e){return n[e]},getCustomClass:function(e){return n.hasOwnProperty(e)?n[e].plugin:null},remove:function(e){t.hasOwnProperty(e)&&delete t[e]},removeCustom:function(e){n.hasOwnProperty(e)&&delete n[e]},destroyCorePlugins:function(){for(var e in t)t.hasOwnProperty(e)&&delete t[e]},destroyCustomPlugins:function(){for(var e in n)n.hasOwnProperty(e)&&delete n[e]}};e.exports=r},69186:e=>{function t(e,t,n){var r=n?e[t]:Object.getOwnPropertyDescriptor(e,t);return!n&&r.value&&"object"==typeof r.value&&(r=r.value),!(!r||!function(e){return!!e.get&&"function"==typeof e.get||!!e.set&&"function"==typeof e.set}(r))&&(void 0===r.enumerable&&(r.enumerable=!0),void 0===r.configurable&&(r.configurable=!0),r)}function n(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!!n&&(n.value&&"object"==typeof n.value&&(n=n.value),!1===n.configurable)}function r(e,r,o,s){for(var c in r)if(r.hasOwnProperty(c)){var u=t(r,c,o);if(!1!==u){if(n((s||e).prototype,c)){if(i.ignoreFinals)continue;throw new Error("cannot override final property '"+c+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(e.prototype,c,u)}else e.prototype[c]=r[c]}}function o(e,t){if(t){Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++)r(e,t[n].prototype||t[n])}}function i(e){var t,n;if(e||(e={}),e.initialize){if("function"!=typeof e.initialize)throw new Error("initialize must be a function");t=e.initialize,delete e.initialize}else if(e.Extends){var i=e.Extends;t=function(){i.apply(this,arguments)}}else t=function(){};e.Extends?(t.prototype=Object.create(e.Extends.prototype),t.prototype.constructor=t,n=e.Extends,delete e.Extends):t.prototype.constructor=t;var s=null;return e.Mixins&&(s=e.Mixins,delete e.Mixins),o(t,s),r(t,e,!0,n),t}i.extend=r,i.mixin=o,i.ignoreFinals=!1,e.exports=i}}]);