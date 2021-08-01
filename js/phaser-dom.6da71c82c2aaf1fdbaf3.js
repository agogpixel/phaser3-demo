/*! For license information please see phaser-dom.6da71c82c2aaf1fdbaf3.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[4611,4300],{89771:e=>{var t={android:!1,chromeOS:!1,cordova:!1,crosswalk:!1,desktop:!1,ejecta:!1,electron:!1,iOS:!1,iOSVersion:0,iPad:!1,iPhone:!1,kindle:!1,linux:!1,macOS:!1,node:!1,nodeWebkit:!1,pixelRatio:1,webApp:!1,windows:!1,windowsPhone:!1};e.exports=function(){if("function"==typeof importScripts)return t;var e=navigator.userAgent;/Windows/.test(e)?t.windows=!0:/Mac OS/.test(e)&&!/like Mac OS/.test(e)?navigator.maxTouchPoints&&navigator.maxTouchPoints>2?(t.iOS=!0,t.iPad=!0,navigator.appVersion.match(/Version\/(\d+)/),t.iOSVersion=parseInt(RegExp.$1,10)):t.macOS=!0:/Android/.test(e)?t.android=!0:/Linux/.test(e)?t.linux=!0:/iP[ao]d|iPhone/i.test(e)?(t.iOS=!0,navigator.appVersion.match(/OS (\d+)/),t.iOSVersion=parseInt(RegExp.$1,10),t.iPhone=-1!==e.toLowerCase().indexOf("iphone"),t.iPad=-1!==e.toLowerCase().indexOf("ipad")):/Kindle/.test(e)||/\bKF[A-Z][A-Z]+/.test(e)||/Silk.*Mobile Safari/.test(e)?t.kindle=!0:/CrOS/.test(e)&&(t.chromeOS=!0),(/Windows Phone/i.test(e)||/IEMobile/i.test(e))&&(t.android=!1,t.iOS=!1,t.macOS=!1,t.windows=!0,t.windowsPhone=!0);var i=/Silk/.test(e);return(t.windows||t.macOS||t.linux&&!i||t.chromeOS)&&(t.desktop=!0),(t.windowsPhone||/Windows NT/i.test(e)&&/Touch/i.test(e))&&(t.desktop=!1),navigator.standalone&&(t.webApp=!0),"function"!=typeof importScripts&&(void 0!==window.cordova&&(t.cordova=!0),void 0!==window.ejecta&&(t.ejecta=!0)),"undefined"!=typeof process&&process.versions&&process.versions.node&&(t.node=!0),t.node&&"object"==typeof process.versions&&(t.nodeWebkit=!!process.versions["node-webkit"],t.electron=!!process.versions.electron),/Crosswalk/.test(e)&&(t.crosswalk=!0),t.pixelRatio=window.devicePixelRatio||1,t}()},21778:e=>{e.exports=function(e,t){var i;if(t)"string"==typeof t?i=document.getElementById(t):"object"==typeof t&&1===t.nodeType&&(i=t);else if(e.parentElement||null===t)return e;return i||(i=document.body),i.appendChild(e),e}},8277:(e,t,i)=>{var n=i(89771);e.exports=function(e){if("complete"!==document.readyState&&"interactive"!==document.readyState){var t=function(){document.removeEventListener("deviceready",t,!0),document.removeEventListener("DOMContentLoaded",t,!0),window.removeEventListener("load",t,!0),e()};document.body?n.cordova?document.addEventListener("deviceready",t,!1):(document.addEventListener("DOMContentLoaded",t,!0),window.addEventListener("load",t,!0)):window.setTimeout(t,20)}else e()}},57886:e=>{e.exports=function(e){if(!e)return window.innerHeight;var t=Math.abs(window.orientation),i={w:0,h:0},n=document.createElement("div");return n.setAttribute("style","position: fixed; height: 100vh; width: 0; top: 0"),document.documentElement.appendChild(n),i.w=90===t?n.offsetHeight:window.innerWidth,i.h=90===t?window.innerWidth:n.offsetHeight,document.documentElement.removeChild(n),n=null,90!==Math.abs(window.orientation)?i.h:i.w}},84846:(e,t,i)=>{var n=i(24790);e.exports=function(e,t){var i=window.screen,o=!!i&&(i.orientation||i.mozOrientation||i.msOrientation);return o&&"string"==typeof o.type?o.type:"string"==typeof o?o:"number"==typeof window.orientation?0===window.orientation||180===window.orientation?n.ORIENTATION.PORTRAIT:n.ORIENTATION.LANDSCAPE:window.matchMedia?window.matchMedia("(orientation: portrait)").matches?n.ORIENTATION.PORTRAIT:window.matchMedia("(orientation: landscape)").matches?n.ORIENTATION.LANDSCAPE:void 0:t>e?n.ORIENTATION.PORTRAIT:n.ORIENTATION.LANDSCAPE}},44095:e=>{e.exports=function(e){var t;return""!==e&&("string"==typeof e?t=document.getElementById(e):e&&1===e.nodeType&&(t=e)),t||(t=document.body),t}},3726:e=>{e.exports=function(e){var t="";try{window.DOMParser?t=(new DOMParser).parseFromString(e,"text/xml"):(t=new ActiveXObject("Microsoft.XMLDOM")).loadXML(e)}catch(e){t=null}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length?t:null}},20662:e=>{e.exports=function(e){e.parentNode&&e.parentNode.removeChild(e)}},948:(e,t,i)=>{var n=i(69186),o=i(45733),r=new n({initialize:function(){this.isRunning=!1,this.callback=o,this.tick=0,this.isSetTimeOut=!1,this.timeOutID=null,this.lastTime=0,this.target=0;var e=this;this.step=function t(){var i=window.performance.now();e.lastTime=e.tick,e.tick=i,e.callback(i),e.timeOutID=window.requestAnimationFrame(t)},this.stepTimeout=function t(){var i=Date.now(),n=Math.min(Math.max(2*e.target+e.tick-i,0),e.target);e.lastTime=e.tick,e.tick=i,e.callback(i),e.timeOutID=window.setTimeout(t,n)}},start:function(e,t,i){this.isRunning||(this.callback=e,this.isSetTimeOut=t,this.target=i,this.isRunning=!0,this.timeOutID=t?window.setTimeout(this.stepTimeout,0):window.requestAnimationFrame(this.step))},stop:function(){this.isRunning=!1,this.isSetTimeOut?clearTimeout(this.timeOutID):window.cancelAnimationFrame(this.timeOutID)},destroy:function(){this.stop(),this.callback=o}});e.exports=r},69488:(e,t,i)=>{var n={AddToDOM:i(21778),DOMContentLoaded:i(8277),GetInnerHeight:i(57886),GetScreenOrientation:i(84846),GetTarget:i(44095),ParseXML:i(3726),RemoveFromDOM:i(20662),RequestAnimationFrame:i(948)};e.exports=n},80756:e=>{e.exports={NO_CENTER:0,CENTER_BOTH:1,CENTER_HORIZONTALLY:2,CENTER_VERTICALLY:3}},90726:e=>{e.exports={LANDSCAPE:"landscape-primary",PORTRAIT:"portrait-primary"}},43620:e=>{e.exports={NONE:0,WIDTH_CONTROLS_HEIGHT:1,HEIGHT_CONTROLS_WIDTH:2,FIT:3,ENVELOP:4,RESIZE:5}},31926:e=>{e.exports={NO_ZOOM:1,ZOOM_2X:2,ZOOM_4X:4,MAX_ZOOM:-1}},24790:(e,t,i)=>{var n={CENTER:i(80756),ORIENTATION:i(90726),SCALE_MODE:i(43620),ZOOM:i(31926)};e.exports=n},69186:e=>{function t(e,t,i){var n=i?e[t]:Object.getOwnPropertyDescriptor(e,t);return!i&&n.value&&"object"==typeof n.value&&(n=n.value),!(!n||!function(e){return!!e.get&&"function"==typeof e.get||!!e.set&&"function"==typeof e.set}(n))&&(void 0===n.enumerable&&(n.enumerable=!0),void 0===n.configurable&&(n.configurable=!0),n)}function i(e,t){var i=Object.getOwnPropertyDescriptor(e,t);return!!i&&(i.value&&"object"==typeof i.value&&(i=i.value),!1===i.configurable)}function n(e,n,o,a){for(var s in n)if(n.hasOwnProperty(s)){var d=t(n,s,o);if(!1!==d){if(i((a||e).prototype,s)){if(r.ignoreFinals)continue;throw new Error("cannot override final property '"+s+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(e.prototype,s,d)}else e.prototype[s]=n[s]}}function o(e,t){if(t){Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++)n(e,t[i].prototype||t[i])}}function r(e){var t,i;if(e||(e={}),e.initialize){if("function"!=typeof e.initialize)throw new Error("initialize must be a function");t=e.initialize,delete e.initialize}else if(e.Extends){var r=e.Extends;t=function(){r.apply(this,arguments)}}else t=function(){};e.Extends?(t.prototype=Object.create(e.Extends.prototype),t.prototype.constructor=t,i=e.Extends,delete e.Extends):t.prototype.constructor=t;var a=null;return e.Mixins&&(a=e.Mixins,delete e.Mixins),o(t,a),n(t,e,!0,i),t}r.extend=n,r.mixin=o,r.ignoreFinals=!1,e.exports=r},45733:e=>{e.exports=function(){}}}]);