/*! For license information please see 9976.4f89384e555d579c4b68.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[9976],{82153:(t,e,n)=>{var i,o=n(89771),s={chrome:!1,chromeVersion:0,edge:!1,firefox:!1,firefoxVersion:0,ie:!1,ieVersion:0,mobileSafari:!1,opera:!1,safari:!1,safariVersion:0,silk:!1,trident:!1,tridentVersion:0};t.exports=(i=navigator.userAgent,/Edge\/\d+/.test(i)?s.edge=!0:/Chrome\/(\d+)/.test(i)&&!o.windowsPhone?(s.chrome=!0,s.chromeVersion=parseInt(RegExp.$1,10)):/Firefox\D+(\d+)/.test(i)?(s.firefox=!0,s.firefoxVersion=parseInt(RegExp.$1,10)):/AppleWebKit/.test(i)&&o.iOS?s.mobileSafari=!0:/MSIE (\d+\.\d+);/.test(i)?(s.ie=!0,s.ieVersion=parseInt(RegExp.$1,10)):/Opera/.test(i)?s.opera=!0:/Safari/.test(i)&&!o.windowsPhone?s.safari=!0:/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(i)&&(s.ie=!0,s.trident=!0,s.tridentVersion=parseInt(RegExp.$1,10),s.ieVersion=parseInt(RegExp.$3,10)),/Silk/.test(i)&&(s.silk=!0),s)},61052:(t,e,n)=>{var i=n(89771),o=n(82153),s=n(55579),a={canvas:!1,canvasBitBltShift:null,file:!1,fileSystem:!1,getUserMedia:!0,littleEndian:!1,localStorage:!1,pointerLock:!1,support32bit:!1,vibration:!1,webGL:!1,worker:!1};t.exports=function(){if("function"==typeof importScripts)return a;a.canvas=!!window.CanvasRenderingContext2D;try{a.localStorage=!!localStorage.getItem}catch(t){a.localStorage=!1}a.file=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),a.fileSystem=!!window.requestFileSystem;var t,e,n,r=!1;return a.webGL=function(){if(window.WebGLRenderingContext)try{var t=s.createWebGL(this),e=t.getContext("webgl")||t.getContext("experimental-webgl"),n=s.create2D(this),i=n.getContext("2d").createImageData(1,1);return r=i.data instanceof Uint8ClampedArray,s.remove(t),s.remove(n),!!e}catch(t){return!1}return!1}(),a.worker=!!window.Worker,a.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,a.getUserMedia=a.getUserMedia&&!!navigator.getUserMedia&&!!window.URL,o.firefox&&o.firefoxVersion<21&&(a.getUserMedia=!1),!i.iOS&&(o.ie||o.firefox||o.chrome)&&(a.canvasBitBltShift=!0),(o.safari||o.mobileSafari)&&(a.canvasBitBltShift=!1),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(a.vibration=!0),"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint32Array&&(a.littleEndian=(t=new ArrayBuffer(4),e=new Uint8Array(t),n=new Uint32Array(t),e[0]=161,e[1]=178,e[2]=195,e[3]=212,3569595041===n[0]||2712847316!==n[0]&&null)),a.support32bit="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof Int32Array&&null!==a.littleEndian&&r,a}()},89771:t=>{var e={android:!1,chromeOS:!1,cordova:!1,crosswalk:!1,desktop:!1,ejecta:!1,electron:!1,iOS:!1,iOSVersion:0,iPad:!1,iPhone:!1,kindle:!1,linux:!1,macOS:!1,node:!1,nodeWebkit:!1,pixelRatio:1,webApp:!1,windows:!1,windowsPhone:!1};t.exports=function(){if("function"==typeof importScripts)return e;var t=navigator.userAgent;/Windows/.test(t)?e.windows=!0:/Mac OS/.test(t)&&!/like Mac OS/.test(t)?navigator.maxTouchPoints&&navigator.maxTouchPoints>2?(e.iOS=!0,e.iPad=!0,navigator.appVersion.match(/Version\/(\d+)/),e.iOSVersion=parseInt(RegExp.$1,10)):e.macOS=!0:/Android/.test(t)?e.android=!0:/Linux/.test(t)?e.linux=!0:/iP[ao]d|iPhone/i.test(t)?(e.iOS=!0,navigator.appVersion.match(/OS (\d+)/),e.iOSVersion=parseInt(RegExp.$1,10),e.iPhone=-1!==t.toLowerCase().indexOf("iphone"),e.iPad=-1!==t.toLowerCase().indexOf("ipad")):/Kindle/.test(t)||/\bKF[A-Z][A-Z]+/.test(t)||/Silk.*Mobile Safari/.test(t)?e.kindle=!0:/CrOS/.test(t)&&(e.chromeOS=!0),(/Windows Phone/i.test(t)||/IEMobile/i.test(t))&&(e.android=!1,e.iOS=!1,e.macOS=!1,e.windows=!0,e.windowsPhone=!0);var n=/Silk/.test(t);return(e.windows||e.macOS||e.linux&&!n||e.chromeOS)&&(e.desktop=!0),(e.windowsPhone||/Windows NT/i.test(t)&&/Touch/i.test(t))&&(e.desktop=!1),navigator.standalone&&(e.webApp=!0),"function"!=typeof importScripts&&(void 0!==window.cordova&&(e.cordova=!0),void 0!==window.ejecta&&(e.ejecta=!0)),"undefined"!=typeof process&&process.versions&&process.versions.node&&(e.node=!0),e.node&&"object"==typeof process.versions&&(e.nodeWebkit=!!process.versions["node-webkit"],e.electron=!!process.versions.electron),/Crosswalk/.test(t)&&(e.crosswalk=!0),e.pixelRatio=window.devicePixelRatio||1,e}()},79976:(t,e,n)=>{var i=n(69186),o=n(24293),s=n(26729),a=n(65210),r=n(24496),h=n(8397),u=n(35749),d=n(86042),c=n(32426),l=n(9329),p=n(37423),v=new i({initialize:function(t,e){this.game=t,this.scaleManager,this.canvas,this.config=e,this.enabled=!0,this.events=new s,this.isOver=!0,this.defaultCursor="",this.keyboard=e.inputKeyboard?new h(this):null,this.mouse=e.inputMouse?new u(this):null,this.touch=e.inputTouch?new c(this):null,this.pointers=[],this.pointersTotal=e.inputActivePointers,e.inputTouch&&1===this.pointersTotal&&(this.pointersTotal=2);for(var n=0;n<=this.pointersTotal;n++){var i=new d(this,n);i.smoothFactor=e.inputSmoothFactor,this.pointers.push(i)}this.mousePointer=e.inputMouse?this.pointers[0]:null,this.activePointer=this.pointers[0],this.globalTopOnly=!0,this.time=0,this._tempPoint={x:0,y:0},this._tempHitTest=[],this._tempMatrix=new l,this._tempMatrix2=new l,this._tempSkip=!1,this.mousePointerContainer=[this.mousePointer],t.events.once(r.BOOT,this.boot,this)},boot:function(){this.canvas=this.game.canvas,this.scaleManager=this.game.scale,this.events.emit(a.MANAGER_BOOT),this.game.events.on(r.PRE_RENDER,this.preRender,this),this.game.events.once(r.DESTROY,this.destroy,this)},setCanvasOver:function(t){this.isOver=!0,this.events.emit(a.GAME_OVER,t)},setCanvasOut:function(t){this.isOver=!1,this.events.emit(a.GAME_OUT,t)},preRender:function(){var t=this.game.loop.now,e=this.game.loop.delta,n=this.game.scene.getScenes(!0,!0);this.time=t,this.events.emit(a.MANAGER_UPDATE);for(var i=0;i<n.length;i++){var o=n[i];if(o.sys.input&&o.sys.input.updatePoll(t,e)&&this.globalTopOnly)return}},setDefaultCursor:function(t){this.defaultCursor=t,this.canvas.style.cursor!==t&&(this.canvas.style.cursor=t)},setCursor:function(t){t.cursor&&(this.canvas.style.cursor=t.cursor)},resetCursor:function(t){t.cursor&&this.canvas&&(this.canvas.style.cursor=this.defaultCursor)},addPointer:function(t){void 0===t&&(t=1);var e=[];this.pointersTotal+t>10&&(t=10-this.pointersTotal);for(var n=0;n<t;n++){var i=this.pointers.length,o=new d(this,i);o.smoothFactor=this.config.inputSmoothFactor,this.pointers.push(o),this.pointersTotal++,e.push(o)}return e},updateInputPlugins:function(t,e){var n=this.game.scene.getScenes(!0,!0);this._tempSkip=!1;for(var i=0;i<n.length;i++){var o=n[i];if(o.sys.input&&(o.sys.input.update(t,e)&&this.globalTopOnly||this._tempSkip))return}},onTouchStart:function(t){for(var e=this.pointers,n=[],i=0;i<t.changedTouches.length;i++)for(var s=t.changedTouches[i],a=1;a<this.pointersTotal;a++){var r=e[a];if(!r.active){r.touchstart(s,t),this.activePointer=r,n.push(r);break}}this.updateInputPlugins(o.TOUCH_START,n)},onTouchMove:function(t){for(var e=this.pointers,n=[],i=0;i<t.changedTouches.length;i++)for(var s=t.changedTouches[i],a=1;a<this.pointersTotal;a++){var r=e[a];if(r.active&&r.identifier===s.identifier){r.touchmove(s,t),this.activePointer=r,n.push(r);break}}this.updateInputPlugins(o.TOUCH_MOVE,n)},onTouchEnd:function(t){for(var e=this.pointers,n=[],i=0;i<t.changedTouches.length;i++)for(var s=t.changedTouches[i],a=1;a<this.pointersTotal;a++){var r=e[a];if(r.active&&r.identifier===s.identifier){r.touchend(s,t),n.push(r);break}}this.updateInputPlugins(o.TOUCH_END,n)},onTouchCancel:function(t){for(var e=this.pointers,n=[],i=0;i<t.changedTouches.length;i++)for(var s=t.changedTouches[i],a=1;a<this.pointersTotal;a++){var r=e[a];if(r.active&&r.identifier===s.identifier){r.touchcancel(s,t),n.push(r);break}}this.updateInputPlugins(o.TOUCH_CANCEL,n)},onMouseDown:function(t){var e=this.mousePointer;e.down(t),e.updateMotion(),this.activePointer=e,this.updateInputPlugins(o.MOUSE_DOWN,this.mousePointerContainer)},onMouseMove:function(t){var e=this.mousePointer;e.move(t),e.updateMotion(),this.activePointer=e,this.updateInputPlugins(o.MOUSE_MOVE,this.mousePointerContainer)},onMouseUp:function(t){var e=this.mousePointer;e.up(t),e.updateMotion(),this.activePointer=e,this.updateInputPlugins(o.MOUSE_UP,this.mousePointerContainer)},onMouseWheel:function(t){var e=this.mousePointer;e.wheel(t),this.activePointer=e,this.updateInputPlugins(o.MOUSE_WHEEL,this.mousePointerContainer)},onPointerLockChange:function(t){var e=this.mouse.locked;this.mousePointer.locked=e,this.events.emit(a.POINTERLOCK_CHANGE,t,e)},inputCandidate:function(t,e){var n=t.input;if(!n||!n.enabled||!n.alwaysEnabled&&!t.willRender(e))return!1;var i=!0,o=t.parentContainer;if(o)do{if(!o.willRender(e)){i=!1;break}o=o.parentContainer}while(o);return i},hitTest:function(t,e,n,i){void 0===i&&(i=this._tempHitTest);var o=this._tempPoint,s=n.scrollX,a=n.scrollY;i.length=0;var r=t.x,h=t.y;n.getWorldPoint(r,h,o),t.worldX=o.x,t.worldY=o.y;for(var u={x:0,y:0},d=this._tempMatrix,c=this._tempMatrix2,l=0;l<e.length;l++){var v=e[l];if(this.inputCandidate(v,n)){var m=o.x+s*v.scrollFactorX-s,f=o.y+a*v.scrollFactorY-a;v.parentContainer?(v.getWorldTransformMatrix(d,c),d.applyInverse(m,f,u)):p(m,f,v.x,v.y,v.rotation,v.scaleX,v.scaleY,u),this.pointWithinHitArea(v,u.x,u.y)&&i.push(v)}}return i},pointWithinHitArea:function(t,e,n){e+=t.displayOriginX,n+=t.displayOriginY;var i=t.input;return!(!i||!i.hitAreaCallback(i.hitArea,e,n,t)||(i.localX=e,i.localY=n,0))},pointWithinInteractiveObject:function(t,e,n){return!!t.hitArea&&(e+=t.gameObject.displayOriginX,n+=t.gameObject.displayOriginY,t.localX=e,t.localY=n,t.hitAreaCallback(t.hitArea,e,n,t))},transformPointer:function(t,e,n,i){var o=t.position,s=t.prevPosition;s.x=o.x,s.y=o.y;var a=this.scaleManager.transformX(e),r=this.scaleManager.transformY(n),h=t.smoothFactor;i&&0!==h?(o.x=a*h+s.x*(1-h),o.y=r*h+s.y*(1-h)):(o.x=a,o.y=r)},destroy:function(){this.events.removeAllListeners(),this.game.events.off(r.PRE_RENDER),this.keyboard&&this.keyboard.destroy(),this.mouse&&this.mouse.destroy(),this.touch&&this.touch.destroy();for(var t=0;t<this.pointers.length;t++)this.pointers[t].destroy();this.pointers=[],this._tempHitTest=[],this._tempMatrix.destroy(),this.canvas=null,this.game=null}});t.exports=v},86042:(t,e,n)=>{var i=n(53517),o=n(69186),s=n(76914),a=n(97026),r=n(38153),h=n(17321),u=n(89771),d=new o({initialize:function(t,e){this.manager=t,this.id=e,this.event,this.downElement,this.upElement,this.camera=null,this.button=0,this.buttons=0,this.position=new h,this.prevPosition=new h,this.midPoint=new h(-1,-1),this.velocity=new h,this.angle=0,this.distance=0,this.smoothFactor=0,this.motionFactor=.2,this.worldX=0,this.worldY=0,this.moveTime=0,this.downX=0,this.downY=0,this.downTime=0,this.upX=0,this.upY=0,this.upTime=0,this.primaryDown=!1,this.isDown=!1,this.wasTouch=!1,this.wasCanceled=!1,this.movementX=0,this.movementY=0,this.identifier=0,this.pointerId=null,this.active=0===e,this.locked=!1,this.deltaX=0,this.deltaY=0,this.deltaZ=0},updateWorldPoint:function(t){var e=t.getWorldPoint(this.x,this.y);return this.worldX=e.x,this.worldY=e.y,this},positionToCamera:function(t,e){return t.getWorldPoint(this.x,this.y,e)},updateMotion:function(){var t=this.position.x,e=this.position.y,n=this.midPoint.x,o=this.midPoint.y;if(t!==n||e!==o){var s=r(this.motionFactor,n,t),h=r(this.motionFactor,o,e);a(s,t,.1)&&(s=t),a(h,e,.1)&&(h=e),this.midPoint.set(s,h);var u=t-s,d=e-h;this.velocity.set(u,d),this.angle=i(s,h,t,e),this.distance=Math.sqrt(u*u+d*d)}},up:function(t){"buttons"in t&&(this.buttons=t.buttons),this.event=t,this.button=t.button,this.upElement=t.target,this.manager.transformPointer(this,t.pageX,t.pageY,!1),0===t.button&&(this.primaryDown=!1,this.upX=this.x,this.upY=this.y),0===this.buttons&&(this.isDown=!1,this.upTime=t.timeStamp,this.wasTouch=!1)},down:function(t){"buttons"in t&&(this.buttons=t.buttons),this.event=t,this.button=t.button,this.downElement=t.target,this.manager.transformPointer(this,t.pageX,t.pageY,!1),0===t.button&&(this.primaryDown=!0,this.downX=this.x,this.downY=this.y),u.macOS&&t.ctrlKey&&(this.buttons=2,this.primaryDown=!1),this.isDown||(this.isDown=!0,this.downTime=t.timeStamp),this.wasTouch=!1},move:function(t){"buttons"in t&&(this.buttons=t.buttons),this.event=t,this.manager.transformPointer(this,t.pageX,t.pageY,!0),this.locked&&(this.movementX=t.movementX||t.mozMovementX||t.webkitMovementX||0,this.movementY=t.movementY||t.mozMovementY||t.webkitMovementY||0),this.moveTime=t.timeStamp,this.wasTouch=!1},wheel:function(t){"buttons"in t&&(this.buttons=t.buttons),this.event=t,this.manager.transformPointer(this,t.pageX,t.pageY,!1),this.deltaX=t.deltaX,this.deltaY=t.deltaY,this.deltaZ=t.deltaZ,this.wasTouch=!1},touchstart:function(t,e){t.pointerId&&(this.pointerId=t.pointerId),this.identifier=t.identifier,this.target=t.target,this.active=!0,this.buttons=1,this.event=e,this.downElement=t.target,this.manager.transformPointer(this,t.pageX,t.pageY,!1),this.primaryDown=!0,this.downX=this.x,this.downY=this.y,this.downTime=e.timeStamp,this.isDown=!0,this.wasTouch=!0,this.wasCanceled=!1,this.updateMotion()},touchmove:function(t,e){this.event=e,this.manager.transformPointer(this,t.pageX,t.pageY,!0),this.moveTime=e.timeStamp,this.wasTouch=!0,this.updateMotion()},touchend:function(t,e){this.buttons=0,this.event=e,this.upElement=t.target,this.manager.transformPointer(this,t.pageX,t.pageY,!1),this.primaryDown=!1,this.upX=this.x,this.upY=this.y,this.upTime=e.timeStamp,this.isDown=!1,this.wasTouch=!0,this.wasCanceled=!1,this.active=!1,this.updateMotion()},touchcancel:function(t,e){this.buttons=0,this.event=e,this.upElement=t.target,this.manager.transformPointer(this,t.pageX,t.pageY,!1),this.primaryDown=!1,this.upX=this.x,this.upY=this.y,this.upTime=e.timeStamp,this.isDown=!1,this.wasTouch=!0,this.wasCanceled=!0,this.active=!1},noButtonDown:function(){return 0===this.buttons},leftButtonDown:function(){return!!(1&this.buttons)},rightButtonDown:function(){return!!(2&this.buttons)},middleButtonDown:function(){return!!(4&this.buttons)},backButtonDown:function(){return!!(8&this.buttons)},forwardButtonDown:function(){return!!(16&this.buttons)},leftButtonReleased:function(){return 0===this.button&&!this.isDown},rightButtonReleased:function(){return 2===this.button&&!this.isDown},middleButtonReleased:function(){return 1===this.button&&!this.isDown},backButtonReleased:function(){return 3===this.button&&!this.isDown},forwardButtonReleased:function(){return 4===this.button&&!this.isDown},getDistance:function(){return this.isDown?s(this.downX,this.downY,this.x,this.y):s(this.downX,this.downY,this.upX,this.upY)},getDistanceX:function(){return this.isDown?Math.abs(this.downX-this.x):Math.abs(this.downX-this.upX)},getDistanceY:function(){return this.isDown?Math.abs(this.downY-this.y):Math.abs(this.downY-this.upY)},getDuration:function(){return this.isDown?this.manager.time-this.downTime:this.upTime-this.downTime},getAngle:function(){return this.isDown?i(this.downX,this.downY,this.x,this.y):i(this.downX,this.downY,this.upX,this.upY)},getInterpolatedPosition:function(t,e){void 0===t&&(t=10),void 0===e&&(e=[]);for(var n=this.prevPosition.x,i=this.prevPosition.y,o=this.position.x,s=this.position.y,a=0;a<t;a++){var h=1/t*a;e[a]={x:r(h,n,o),y:r(h,i,s)}}return e},destroy:function(){this.camera=null,this.manager=null,this.position=null},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},time:{get:function(){return this.event?this.event.timeStamp:0}}});t.exports=d},24293:t=>{t.exports={MOUSE_DOWN:0,MOUSE_MOVE:1,MOUSE_UP:2,TOUCH_START:3,TOUCH_MOVE:4,TOUCH_END:5,POINTER_LOCK_CHANGE:6,TOUCH_CANCEL:7,MOUSE_WHEEL:8}},8397:(t,e,n)=>{var i=n(63083),o=n(69186),s=n(24496),a=n(65210),r=n(29413),h=n(45733),u=new o({initialize:function(t){this.manager=t,this.queue=[],this.preventDefault=!0,this.captures=[],this.enabled=!1,this.target,this.onKeyDown=h,this.onKeyUp=h,t.events.once(a.MANAGER_BOOT,this.boot,this)},boot:function(){var t=this.manager.config;this.enabled=t.inputKeyboard,this.target=t.inputKeyboardEventTarget,this.addCapture(t.inputKeyboardCapture),!this.target&&window&&(this.target=window),this.enabled&&this.target&&this.startListeners(),this.manager.game.events.on(s.POST_STEP,this.postUpdate,this)},startListeners:function(){var t=this;this.onKeyDown=function(e){if(!e.defaultPrevented&&t.enabled&&t.manager){t.queue.push(e),t.manager.events.emit(a.MANAGER_PROCESS);var n=e.altKey||e.ctrlKey||e.shiftKey||e.metaKey;t.preventDefault&&!n&&t.captures.indexOf(e.keyCode)>-1&&e.preventDefault()}},this.onKeyUp=function(e){if(!e.defaultPrevented&&t.enabled&&t.manager){t.queue.push(e),t.manager.events.emit(a.MANAGER_PROCESS);var n=e.altKey||e.ctrlKey||e.shiftKey||e.metaKey;t.preventDefault&&!n&&t.captures.indexOf(e.keyCode)>-1&&e.preventDefault()}};var e=this.target;e&&(e.addEventListener("keydown",this.onKeyDown,!1),e.addEventListener("keyup",this.onKeyUp,!1),this.enabled=!0)},stopListeners:function(){var t=this.target;t.removeEventListener("keydown",this.onKeyDown,!1),t.removeEventListener("keyup",this.onKeyUp,!1),this.enabled=!1},postUpdate:function(){this.queue=[]},addCapture:function(t){"string"==typeof t&&(t=t.split(",")),Array.isArray(t)||(t=[t]);for(var e=this.captures,n=0;n<t.length;n++){var i=t[n];"string"==typeof i&&(i=r[i.trim().toUpperCase()]),-1===e.indexOf(i)&&e.push(i)}this.preventDefault=e.length>0},removeCapture:function(t){"string"==typeof t&&(t=t.split(",")),Array.isArray(t)||(t=[t]);for(var e=this.captures,n=0;n<t.length;n++){var o=t[n];"string"==typeof o&&(o=r[o.toUpperCase()]),i(e,o)}this.preventDefault=e.length>0},clearCaptures:function(){this.captures=[],this.preventDefault=!1},destroy:function(){this.stopListeners(),this.clearCaptures(),this.queue=[],this.manager.game.events.off(s.POST_RENDER,this.postUpdate,this),this.target=null,this.enabled=!1,this.manager=null}});t.exports=u},29413:t=>{t.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:42,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ADD:107,NUMPAD_SUBTRACT:109,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,PLUS:187,COMMA:188,MINUS:189,PERIOD:190,FORWARD_SLASH:191,BACK_SLASH:220,QUOTES:222,BACKTICK:192,OPEN_BRACKET:219,CLOSED_BRACKET:221,SEMICOLON_FIREFOX:59,COLON:58,COMMA_FIREFOX_WINDOWS:60,COMMA_FIREFOX:62,BRACKET_RIGHT_FIREFOX:174,BRACKET_LEFT_FIREFOX:175}},35749:(t,e,n)=>{var i=n(69186),o=n(61052),s=n(65210),a=n(45733),r=new i({initialize:function(t){this.manager=t,this.preventDefaultDown=!0,this.preventDefaultUp=!0,this.preventDefaultMove=!0,this.preventDefaultWheel=!1,this.enabled=!1,this.target,this.locked=!1,this.onMouseMove=a,this.onMouseDown=a,this.onMouseUp=a,this.onMouseDownWindow=a,this.onMouseUpWindow=a,this.onMouseOver=a,this.onMouseOut=a,this.onMouseWheel=a,this.pointerLockChange=a,this.isTop=!0,t.events.once(s.MANAGER_BOOT,this.boot,this)},boot:function(){var t=this.manager.config;this.enabled=t.inputMouse,this.target=t.inputMouseEventTarget,this.passive=t.inputMousePassive,this.preventDefaultDown=t.inputMousePreventDefaultDown,this.preventDefaultUp=t.inputMousePreventDefaultUp,this.preventDefaultMove=t.inputMousePreventDefaultMove,this.preventDefaultWheel=t.inputMousePreventDefaultWheel,this.target?"string"==typeof this.target&&(this.target=document.getElementById(this.target)):this.target=this.manager.game.canvas,t.disableContextMenu&&this.disableContextMenu(),this.enabled&&this.target&&this.startListeners()},disableContextMenu:function(){return document.body.addEventListener("contextmenu",(function(t){return t.preventDefault(),!1})),this},requestPointerLock:function(){if(o.pointerLock){var t=this.target;t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock,t.requestPointerLock()}},releasePointerLock:function(){o.pointerLock&&(document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock())},startListeners:function(){var t=this.target;if(t){var e=this,n=this.manager,i=n.canvas,s=window&&window.focus&&n.game.config.autoFocus;this.onMouseMove=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&(n.onMouseMove(t),e.preventDefaultMove&&t.preventDefault())},this.onMouseDown=function(t){s&&window.focus(),!t.defaultPrevented&&e.enabled&&n&&n.enabled&&(n.onMouseDown(t),e.preventDefaultDown&&t.target===i&&t.preventDefault())},this.onMouseDownWindow=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&t.target!==i&&n.onMouseDown(t)},this.onMouseUp=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&(n.onMouseUp(t),e.preventDefaultUp&&t.target===i&&t.preventDefault())},this.onMouseUpWindow=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&t.target!==i&&n.onMouseUp(t)},this.onMouseOver=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&n.setCanvasOver(t)},this.onMouseOut=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&n.setCanvasOut(t)},this.onMouseWheel=function(t){!t.defaultPrevented&&e.enabled&&n&&n.enabled&&n.onMouseWheel(t),e.preventDefaultWheel&&t.target===i&&t.preventDefault()};var a={passive:!0};if(t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("mouseover",this.onMouseOver,a),t.addEventListener("mouseout",this.onMouseOut,a),this.preventDefaultWheel?t.addEventListener("wheel",this.onMouseWheel,{passive:!1}):t.addEventListener("wheel",this.onMouseWheel,a),window&&n.game.config.inputWindowEvents)try{window.top.addEventListener("mousedown",this.onMouseDownWindow,a),window.top.addEventListener("mouseup",this.onMouseUpWindow,a)}catch(t){window.addEventListener("mousedown",this.onMouseDownWindow,a),window.addEventListener("mouseup",this.onMouseUpWindow,a),this.isTop=!1}o.pointerLock&&(this.pointerLockChange=function(t){var i=e.target;e.locked=document.pointerLockElement===i||document.mozPointerLockElement===i||document.webkitPointerLockElement===i,n.onPointerLockChange(t)},document.addEventListener("pointerlockchange",this.pointerLockChange,!0),document.addEventListener("mozpointerlockchange",this.pointerLockChange,!0),document.addEventListener("webkitpointerlockchange",this.pointerLockChange,!0)),this.enabled=!0}},stopListeners:function(){var t=this.target;t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("mousedown",this.onMouseDown),t.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("mouseover",this.onMouseOver),t.removeEventListener("mouseout",this.onMouseOut),window&&((t=this.isTop?window.top:window).removeEventListener("mousedown",this.onMouseDownWindow),t.removeEventListener("mouseup",this.onMouseUpWindow)),o.pointerLock&&(document.removeEventListener("pointerlockchange",this.pointerLockChange,!0),document.removeEventListener("mozpointerlockchange",this.pointerLockChange,!0),document.removeEventListener("webkitpointerlockchange",this.pointerLockChange,!0))},destroy:function(){this.stopListeners(),this.target=null,this.enabled=!1,this.manager=null}});t.exports=r},32426:(t,e,n)=>{var i=n(69186),o=n(65210),s=n(45733),a=new i({initialize:function(t){this.manager=t,this.capture=!0,this.enabled=!1,this.target,this.onTouchStart=s,this.onTouchStartWindow=s,this.onTouchMove=s,this.onTouchEnd=s,this.onTouchEndWindow=s,this.onTouchCancel=s,this.onTouchCancelWindow=s,this.onTouchOver=s,this.onTouchOut=s,t.events.once(o.MANAGER_BOOT,this.boot,this)},boot:function(){var t=this.manager.config;this.enabled=t.inputTouch,this.target=t.inputTouchEventTarget,this.capture=t.inputTouchCapture,this.target||(this.target=this.manager.game.canvas),t.disableContextMenu&&this.disableContextMenu(),this.enabled&&this.target&&this.startListeners()},disableContextMenu:function(){return document.body.addEventListener("contextmenu",(function(t){return t.preventDefault(),!1})),this},startListeners:function(){var t=this,e=this.manager.canvas,n=window&&window.focus&&this.manager.game.config.autoFocus;this.onTouchStart=function(i){n&&window.focus(),!i.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&(t.manager.onTouchStart(i),t.capture&&i.cancelable&&i.target===e&&i.preventDefault())},this.onTouchStartWindow=function(n){!n.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&n.target!==e&&t.manager.onTouchStart(n)},this.onTouchMove=function(e){!e.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&(t.manager.onTouchMove(e),t.capture&&e.cancelable&&e.preventDefault())},this.onTouchEnd=function(n){!n.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&(t.manager.onTouchEnd(n),t.capture&&n.cancelable&&n.target===e&&n.preventDefault())},this.onTouchEndWindow=function(n){!n.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&n.target!==e&&t.manager.onTouchEnd(n)},this.onTouchCancel=function(e){!e.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&(t.manager.onTouchCancel(e),t.capture&&e.preventDefault())},this.onTouchCancelWindow=function(e){!e.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&t.manager.onTouchCancel(e)},this.onTouchOver=function(e){!e.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&t.manager.setCanvasOver(e)},this.onTouchOut=function(e){!e.defaultPrevented&&t.enabled&&t.manager&&t.manager.enabled&&t.manager.setCanvasOut(e)};var i=this.target;if(i){var o={passive:!0},s={passive:!1};i.addEventListener("touchstart",this.onTouchStart,this.capture?s:o),i.addEventListener("touchmove",this.onTouchMove,this.capture?s:o),i.addEventListener("touchend",this.onTouchEnd,this.capture?s:o),i.addEventListener("touchcancel",this.onTouchCancel,this.capture?s:o),i.addEventListener("touchover",this.onTouchOver,this.capture?s:o),i.addEventListener("touchout",this.onTouchOut,this.capture?s:o),window&&this.manager.game.config.inputWindowEvents&&(window.addEventListener("touchstart",this.onTouchStartWindow,s),window.addEventListener("touchend",this.onTouchEndWindow,s),window.addEventListener("touchcancel",this.onTouchCancelWindow,s)),this.enabled=!0}},stopListeners:function(){var t=this.target;t.removeEventListener("touchstart",this.onTouchStart),t.removeEventListener("touchmove",this.onTouchMove),t.removeEventListener("touchend",this.onTouchEnd),t.removeEventListener("touchcancel",this.onTouchCancel),t.removeEventListener("touchover",this.onTouchOver),t.removeEventListener("touchout",this.onTouchOut),window&&(window.removeEventListener("touchstart",this.onTouchStartWindow),window.removeEventListener("touchend",this.onTouchEndWindow))},destroy:function(){this.stopListeners(),this.target=null,this.enabled=!1,this.manager=null}});t.exports=a},37423:(t,e,n)=>{var i=n(17321);t.exports=function(t,e,n,o,s,a,r,h){void 0===h&&(h=new i);var u=Math.sin(s),d=Math.cos(s),c=d*a,l=u*a,p=-u*r,v=d*r,m=1/(c*v+p*-l);return h.x=v*m*t+-p*m*e+(o*p-n*v)*m,h.y=c*m*e+-l*m*t+(-o*c+n*l)*m,h}}}]);