/*! For license information please see 5859.6daf4a03c9a7f85e35fd.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[5859],{97451:e=>{e.exports="cameradestroy"},67998:e=>{e.exports="camerafadeincomplete"},19794:e=>{e.exports="camerafadeinstart"},70884:e=>{e.exports="camerafadeoutcomplete"},79642:e=>{e.exports="camerafadeoutstart"},56307:e=>{e.exports="cameraflashcomplete"},36063:e=>{e.exports="cameraflashstart"},96725:e=>{e.exports="followupdate"},45957:e=>{e.exports="camerapancomplete"},84011:e=>{e.exports="camerapanstart"},21180:e=>{e.exports="postrender"},54573:e=>{e.exports="prerender"},19207:e=>{e.exports="camerarotatecomplete"},51323:e=>{e.exports="camerarotatestart"},89100:e=>{e.exports="camerashakecomplete"},85444:e=>{e.exports="camerashakestart"},23984:e=>{e.exports="camerazoomcomplete"},88715:e=>{e.exports="camerazoomstart"},26088:(e,t,r)=>{e.exports={DESTROY:r(97451),FADE_IN_COMPLETE:r(67998),FADE_IN_START:r(19794),FADE_OUT_COMPLETE:r(70884),FADE_OUT_START:r(79642),FLASH_COMPLETE:r(56307),FLASH_START:r(36063),FOLLOW_UPDATE:r(96725),PAN_COMPLETE:r(45957),PAN_START:r(84011),POST_RENDER:r(21180),PRE_RENDER:r(54573),ROTATE_COMPLETE:r(19207),ROTATE_START:r(51323),SHAKE_COMPLETE:r(89100),SHAKE_START:r(85444),ZOOM_COMPLETE:r(23984),ZOOM_START:r(88715)}},55579:(e,t,r)=>{var a,i,s,n=r(11318),o=r(83468),u=[],h=!1;e.exports=(s=function(){var e=0;return u.forEach((function(t){t.parent&&e++})),e},{create2D:function(e,t,r){return a(e,t,r,n.CANVAS)},create:a=function(e,t,r,a,s){var f;void 0===t&&(t=1),void 0===r&&(r=1),void 0===a&&(a=n.CANVAS),void 0===s&&(s=!1);var l=i(a);return null===l?(l={parent:e,canvas:document.createElement("canvas"),type:a},a===n.CANVAS&&u.push(l),f=l.canvas):(l.parent=e,f=l.canvas),s&&(l.parent=f),f.width=t,f.height=r,h&&a===n.CANVAS&&o.disable(f.getContext("2d")),f},createWebGL:function(e,t,r){return a(e,t,r,n.WEBGL)},disableSmoothing:function(){h=!0},enableSmoothing:function(){h=!1},first:i=function(e){if(void 0===e&&(e=n.CANVAS),e===n.WEBGL)return null;for(var t=0;t<u.length;t++){var r=u[t];if(!r.parent&&r.type===e)return r}return null},free:function(){return u.length-s()},pool:u,remove:function(e){var t=e instanceof HTMLCanvasElement;u.forEach((function(r){(t&&r.canvas===e||!t&&r.parent===e)&&(r.parent=null,r.canvas.width=1,r.canvas.height=1)}))},total:s})},83468:e=>{var t,r="";e.exports={disable:function(e){return""===r&&(r=t(e)),r&&(e[r]=!1),e},enable:function(e){return""===r&&(r=t(e)),r&&(e[r]=!0),e},getPrefix:t=function(e){for(var t=["i","webkitI","msI","mozI","oI"],r=0;r<t.length;r++){var a=t[r]+"mageSmoothingEnabled";if(a in e)return a}return null},isEnabled:function(e){return null!==r?e[r]:null}}},50666:(e,t,r)=>{var a=r(69186),i=r(37710),s=new a({initialize:function(e,t,r,a,i,s,n){void 0===a&&(a=1),void 0===i&&(i=0),void 0===s&&(s=!0),void 0===n&&(n=!1),this.renderer=e,this.framebuffer=null,this.texture=null,this.width=0,this.height=0,this.scale=a,this.minFilter=i,this.autoClear=s,this.autoResize=!1,this.resize(t,r),n&&this.setAutoResize(!0)},setAutoResize:function(e){return e&&!this.autoResize?(this.renderer.on(i.RESIZE,this.resize,this),this.autoResize=!0):!e&&this.autoResize&&(this.renderer.off(i.RESIZE,this.resize,this),this.autoResize=!1),this},resize:function(e,t){var r=e*this.scale,a=t*this.scale;if(r!==this.width||a!==this.height){var i=this.renderer;i.deleteFramebuffer(this.framebuffer),i.deleteTexture(this.texture),e*=this.scale,t*=this.scale,(e=Math.round(e))<=0&&(e=1),(t=Math.round(t))<=0&&(t=1),this.texture=i.createTextureFromSource(null,e,t,this.minFilter),this.framebuffer=i.createFramebuffer(e,t,this.texture,!1),this.width=e,this.height=t}return this},bind:function(e,t,r){if(void 0===e&&(e=!1),e&&this.renderer.flush(),t&&r&&this.resize(t,r),this.renderer.pushFramebuffer(this.framebuffer,!1,!1,!1),e&&this.adjustViewport(),this.autoClear){var a=this.renderer.gl;a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT)}},adjustViewport:function(){var e=this.renderer.gl;e.viewport(0,0,this.width,this.height),e.disable(e.SCISSOR_TEST)},clear:function(){var e=this.renderer,t=e.gl;e.pushFramebuffer(this.framebuffer),t.disable(t.SCISSOR_TEST),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),e.popFramebuffer(),e.resetScissor()},unbind:function(e){void 0===e&&(e=!1);var t=this.renderer;return e&&t.flush(),t.popFramebuffer()},destroy:function(){var e=this.renderer;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),e.off(i.RESIZE,this.resize,this),this.renderer=null,this.framebuffer=null,this.texture=null}});e.exports=s},63083:(e,t,r)=>{var a=r(28088);e.exports=function(e,t,r,i){var s;if(void 0===i&&(i=e),!Array.isArray(t))return-1!==(s=e.indexOf(t))?(a(e,s),r&&r.call(i,t),t):null;for(var n=t.length-1,o=[];n>=0;){var u=t[n];-1!==(s=e.indexOf(u))&&(a(e,s),o.push(u),r&&r.call(i,u)),n--}return o}}}]);