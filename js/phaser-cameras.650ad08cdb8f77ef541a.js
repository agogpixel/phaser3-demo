/*! For license information please see phaser-cameras.650ad08cdb8f77ef541a.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[5816],{77146:(t,s,i)=>{var e=i(43929),n=i(39414),h=i(2543),o=i(69186),a=i(19506),r=i(49893),l=i(26088),u=i(3821),d=i(75380),c=i(17321),p=new o({Extends:e,Mixins:[a.Flip,a.Tint,a.Pipeline],initialize:function(t,s,i,n){e.call(this,t,s,i,n),this.postPipelines=[],this.pipelineData={},this.inputEnabled=!0,this.fadeEffect=new r.Fade(this),this.flashEffect=new r.Flash(this),this.shakeEffect=new r.Shake(this),this.panEffect=new r.Pan(this),this.rotateToEffect=new r.RotateTo(this),this.zoomEffect=new r.Zoom(this),this.lerp=new c(1,1),this.followOffset=new c,this.deadzone=null,this._follow=null},setDeadzone:function(t,s){if(void 0===t)this.deadzone=null;else{if(this.deadzone?(this.deadzone.width=t,this.deadzone.height=s):this.deadzone=new d(0,0,t,s),this._follow){var i=this.width/2,e=this.height/2,h=this._follow.x-this.followOffset.x,o=this._follow.y-this.followOffset.y;this.midPoint.set(h,o),this.scrollX=h-i,this.scrollY=o-e}n(this.deadzone,this.midPoint.x,this.midPoint.y)}return this},fadeIn:function(t,s,i,e,n,h){return this.fadeEffect.start(!1,t,s,i,e,!0,n,h)},fadeOut:function(t,s,i,e,n,h){return this.fadeEffect.start(!0,t,s,i,e,!0,n,h)},fadeFrom:function(t,s,i,e,n,h,o){return this.fadeEffect.start(!1,t,s,i,e,n,h,o)},fade:function(t,s,i,e,n,h,o){return this.fadeEffect.start(!0,t,s,i,e,n,h,o)},flash:function(t,s,i,e,n,h,o){return this.flashEffect.start(t,s,i,e,n,h,o)},shake:function(t,s,i,e,n){return this.shakeEffect.start(t,s,i,e,n)},pan:function(t,s,i,e,n,h,o){return this.panEffect.start(t,s,i,e,n,h,o)},rotateTo:function(t,s,i,e,n,h,o){return this.rotateToEffect.start(t,s,i,e,n,h,o)},zoomTo:function(t,s,i,e,n,h){return this.zoomEffect.start(t,s,i,e,n,h)},preRender:function(){this.renderList.length=0;var t=this.width,s=this.height,i=.5*t,e=.5*s,h=this.zoom,o=this.matrix,a=t*this.originX,r=s*this.originY,d=this._follow,c=this.deadzone,p=this.scrollX,f=this.scrollY;c&&n(c,this.midPoint.x,this.midPoint.y);var m=!1;if(d&&!this.panEffect.isRunning){var _=d.x-this.followOffset.x,g=d.y-this.followOffset.y;c?(_<c.x?p=u(p,p-(c.x-_),this.lerp.x):_>c.right&&(p=u(p,p+(_-c.right),this.lerp.x)),g<c.y?f=u(f,f-(c.y-g),this.lerp.y):g>c.bottom&&(f=u(f,f+(g-c.bottom),this.lerp.y))):(p=u(p,_-a,this.lerp.x),f=u(f,g-r,this.lerp.y)),m=!0}this.useBounds&&(p=this.clampX(p),f=this.clampY(f)),this.roundPixels&&(a=Math.round(a),r=Math.round(r),p=Math.round(p),f=Math.round(f)),this.scrollX=p,this.scrollY=f;var v=p+i,O=f+e;this.midPoint.set(v,O);var x=t/h,E=s/h,w=v-x/2,S=O-E/2;this.roundPixels&&(w=Math.round(w),S=Math.round(S)),this.worldView.setTo(w,S,x,E),o.applyITRS(this.x+a,this.y+r,this.rotation,h,h),o.translate(-a,-r),this.shakeEffect.preRender(),m&&this.emit(l.FOLLOW_UPDATE,this,d)},setLerp:function(t,s){return void 0===t&&(t=1),void 0===s&&(s=t),this.lerp.set(t,s),this},setFollowOffset:function(t,s){return void 0===t&&(t=0),void 0===s&&(s=0),this.followOffset.set(t,s),this},startFollow:function(t,s,i,e,n,o){void 0===s&&(s=!1),void 0===i&&(i=1),void 0===e&&(e=i),void 0===n&&(n=0),void 0===o&&(o=n),this._follow=t,this.roundPixels=s,i=h(i,0,1),e=h(e,0,1),this.lerp.set(i,e),this.followOffset.set(n,o);var a=this.width/2,r=this.height/2,l=t.x-n,u=t.y-o;return this.midPoint.set(l,u),this.scrollX=l-a,this.scrollY=u-r,this.useBounds&&(this.scrollX=this.clampX(this.scrollX),this.scrollY=this.clampY(this.scrollY)),this},stopFollow:function(){return this._follow=null,this},resetFX:function(){return this.rotateToEffect.reset(),this.panEffect.reset(),this.shakeEffect.reset(),this.flashEffect.reset(),this.fadeEffect.reset(),this},update:function(t,s){this.visible&&(this.rotateToEffect.update(t,s),this.panEffect.update(t,s),this.zoomEffect.update(t,s),this.shakeEffect.update(t,s),this.flashEffect.update(t,s),this.fadeEffect.update(t,s))},destroy:function(){this.resetFX(),e.prototype.destroy.call(this),this._follow=null,this.deadzone=null}});t.exports=p},8226:(t,s,i)=>{var e=i(77146),n=i(69186),h=i(25738),o=i(46236),a=i(26813),r=i(48958),l=i(12063),u=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.roundPixels=t.sys.game.config.roundPixels,this.cameras=[],this.main,this.default,t.sys.events.once(l.BOOT,this.boot,this),t.sys.events.on(l.START,this.start,this)},boot:function(){var t=this.systems;t.settings.cameras?this.fromJSON(t.settings.cameras):this.add(),this.main=this.cameras[0],this.default=new e(0,0,t.scale.width,t.scale.height).setScene(this.scene),t.game.scale.on(r.RESIZE,this.onResize,this),this.systems.events.once(l.DESTROY,this.destroy,this)},start:function(){if(!this.main){var t=this.systems;t.settings.cameras?this.fromJSON(t.settings.cameras):this.add(),this.main=this.cameras[0]}var s=this.systems.events;s.on(l.UPDATE,this.update,this),s.once(l.SHUTDOWN,this.shutdown,this)},add:function(t,s,i,n,h,o){void 0===t&&(t=0),void 0===s&&(s=0),void 0===i&&(i=this.scene.sys.scale.width),void 0===n&&(n=this.scene.sys.scale.height),void 0===h&&(h=!1),void 0===o&&(o="");var a=new e(t,s,i,n);return a.setName(o),a.setScene(this.scene),a.setRoundPixels(this.roundPixels),a.id=this.getNextID(),this.cameras.push(a),h&&(this.main=a),a},addExisting:function(t,s){return void 0===s&&(s=!1),-1===this.cameras.indexOf(t)?(t.id=this.getNextID(),t.setRoundPixels(this.roundPixels),this.cameras.push(t),s&&(this.main=t),t):null},getNextID:function(){for(var t=this.cameras,s=1,i=0;i<32;i++){for(var e=!1,n=0;n<t.length;n++){var h=t[n];h&&h.id===s&&(e=!0)}if(!e)return s;s<<=1}return 0},getTotal:function(t){void 0===t&&(t=!1);for(var s=0,i=this.cameras,e=0;e<i.length;e++){var n=i[e];(!t||t&&n.visible)&&s++}return s},fromJSON:function(t){Array.isArray(t)||(t=[t]);for(var s=this.scene.sys.scale.width,i=this.scene.sys.scale.height,e=0;e<t.length;e++){var n=t[e],o=h(n,"x",0),a=h(n,"y",0),r=h(n,"width",s),l=h(n,"height",i),u=this.add(o,a,r,l);u.name=h(n,"name",""),u.zoom=h(n,"zoom",1),u.rotation=h(n,"rotation",0),u.scrollX=h(n,"scrollX",0),u.scrollY=h(n,"scrollY",0),u.roundPixels=h(n,"roundPixels",!1),u.visible=h(n,"visible",!0);var d=h(n,"backgroundColor",!1);d&&u.setBackgroundColor(d);var c=h(n,"bounds",null);if(c){var p=h(c,"x",0),f=h(c,"y",0),m=h(c,"width",s),_=h(c,"height",i);u.setBounds(p,f,m,_)}}return this},getCamera:function(t){for(var s=this.cameras,i=0;i<s.length;i++)if(s[i].name===t)return s[i];return null},getCamerasBelowPointer:function(t){for(var s=this.cameras,i=t.x,e=t.y,n=[],h=0;h<s.length;h++){var o=s[h];o.visible&&o.inputEnabled&&a(o,i,e)&&n.unshift(o)}return n},remove:function(t,s){void 0===s&&(s=!0),Array.isArray(t)||(t=[t]);for(var i=0,e=this.cameras,n=0;n<t.length;n++){var h=e.indexOf(t[n]);-1!==h&&(s?e[h].destroy():e[h].renderList=[],e.splice(h,1),i++)}return!this.main&&e[0]&&(this.main=e[0]),i},render:function(t,s){for(var i=this.scene,e=this.cameras,n=0;n<this.cameras.length;n++){var h=e[n];if(h.visible&&h.alpha>0){h.preRender();var o=this.getVisibleChildren(s.getChildren(),h);t.render(i,o,h)}}},getVisibleChildren:function(t,s){for(var i=[],e=0;e<t.length;e++){var n=t[e];n.willRender(s)&&i.push(n)}return i},resetAll:function(){for(var t=0;t<this.cameras.length;t++)this.cameras[t].destroy();return this.cameras=[],this.main=this.add(),this.main},update:function(t,s){for(var i=0;i<this.cameras.length;i++)this.cameras[i].update(t,s)},onResize:function(t,s,i,e,n){for(var h=0;h<this.cameras.length;h++){var o=this.cameras[h];0===o._x&&0===o._y&&o._width===e&&o._height===n&&o.setSize(s.width,s.height)}},resize:function(t,s){for(var i=0;i<this.cameras.length;i++)this.cameras[i].setSize(t,s)},shutdown:function(){this.main=void 0;for(var t=0;t<this.cameras.length;t++)this.cameras[t].destroy();this.cameras=[];var s=this.systems.events;s.off(l.UPDATE,this.update,this),s.off(l.SHUTDOWN,this.shutdown,this)},destroy:function(){this.shutdown(),this.default.destroy(),this.scene.sys.events.off(l.START,this.start,this),this.scene=null,this.systems=null}});o.register("CameraManager",u,"cameras"),t.exports=u},10982:(t,s,i)=>{var e=i(2543),n=i(69186),h=i(26088),o=new n({initialize:function(t){this.camera=t,this.isRunning=!1,this.isComplete=!1,this.direction=!0,this.duration=0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(t,s,i,e,n,o,a,r){if(void 0===t&&(t=!0),void 0===s&&(s=1e3),void 0===i&&(i=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===o&&(o=!1),void 0===a&&(a=null),void 0===r&&(r=this.camera.scene),!o&&this.isRunning)return this.camera;this.isRunning=!0,this.isComplete=!1,this.duration=s,this.direction=t,this.progress=0,this.red=i,this.green=e,this.blue=n,this.alpha=t?Number.MIN_VALUE:1,this._elapsed=0,this._onUpdate=a,this._onUpdateScope=r;var l=t?h.FADE_OUT_START:h.FADE_IN_START;return this.camera.emit(l,this.camera,this,s,i,e,n),this.camera},update:function(t,s){this.isRunning&&(this._elapsed+=s,this.progress=e(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration?this.alpha=this.direction?this.progress:1-this.progress:(this.alpha=this.direction?1:0,this.effectComplete()))},postRenderCanvas:function(t){if(!this.isRunning&&!this.isComplete)return!1;var s=this.camera;return t.fillStyle="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")",t.fillRect(s.x,s.y,s.width,s.height),!0},postRenderWebGL:function(t,s){if(!this.isRunning&&!this.isComplete)return!1;var i=this.camera,e=this.red/255,n=this.green/255,h=this.blue/255;return t.drawFillRect(i.x,i.y,i.width,i.height,s(h,n,e,1),this.alpha),!0},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.isComplete=!0;var t=this.direction?h.FADE_OUT_COMPLETE:h.FADE_IN_COMPLETE;this.camera.emit(t,this.camera,this)},reset:function(){this.isRunning=!1,this.isComplete=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});t.exports=o},28980:(t,s,i)=>{var e=i(2543),n=i(69186),h=i(26088),o=new n({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(t,s,i,e,n,o,a){return void 0===t&&(t=250),void 0===s&&(s=255),void 0===i&&(i=255),void 0===e&&(e=255),void 0===n&&(n=!1),void 0===o&&(o=null),void 0===a&&(a=this.camera.scene),!n&&this.isRunning||(this.isRunning=!0,this.duration=t,this.progress=0,this.red=s,this.green=i,this.blue=e,this.alpha=1,this._elapsed=0,this._onUpdate=o,this._onUpdateScope=a,this.camera.emit(h.FLASH_START,this.camera,this,t,s,i,e)),this.camera},update:function(t,s){this.isRunning&&(this._elapsed+=s,this.progress=e(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration?this.alpha=1-this.progress:this.effectComplete())},postRenderCanvas:function(t){if(!this.isRunning)return!1;var s=this.camera;return t.fillStyle="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")",t.fillRect(s.x,s.y,s.width,s.height),!0},postRenderWebGL:function(t,s){if(!this.isRunning)return!1;var i=this.camera,e=this.red/255,n=this.green/255,h=this.blue/255;return t.drawFillRect(i.x,i.y,i.width,i.height,s(h,n,e,1),this.alpha),!0},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(h.FLASH_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});t.exports=o},66033:(t,s,i)=>{var e=i(2543),n=i(69186),h=i(45044),o=i(26088),a=i(17321),r=new n({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.source=new a,this.current=new a,this.destination=new a,this.ease,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(t,s,i,e,n,a,r){void 0===i&&(i=1e3),void 0===e&&(e=h.Linear),void 0===n&&(n=!1),void 0===a&&(a=null),void 0===r&&(r=this.camera.scene);var l=this.camera;return!n&&this.isRunning||(this.isRunning=!0,this.duration=i,this.progress=0,this.source.set(l.scrollX,l.scrollY),this.destination.set(t,s),l.getScroll(t,s,this.current),"string"==typeof e&&h.hasOwnProperty(e)?this.ease=h[e]:"function"==typeof e&&(this.ease=e),this._elapsed=0,this._onUpdate=a,this._onUpdateScope=r,this.camera.emit(o.PAN_START,this.camera,this,i,t,s)),l},update:function(t,s){if(this.isRunning){this._elapsed+=s;var i=e(this._elapsed/this.duration,0,1);this.progress=i;var n=this.camera;if(this._elapsed<this.duration){var h=this.ease(i);n.getScroll(this.destination.x,this.destination.y,this.current);var o=this.source.x+(this.current.x-this.source.x)*h,a=this.source.y+(this.current.y-this.source.y)*h;n.setScroll(o,a),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,n,i,o,a)}else n.centerOn(this.destination.x,this.destination.y),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,n,i,n.scrollX,n.scrollY),this.effectComplete()}},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(o.PAN_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.source=null,this.destination=null}});t.exports=r},9783:(t,s,i)=>{var e=i(2543),n=i(69186),h=i(26088),o=i(45044),a=new n({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.source=0,this.current=0,this.destination=0,this.ease,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope,this.clockwise=!0,this.shortestPath=!1},start:function(t,s,i,e,n,a,r){void 0===i&&(i=1e3),void 0===e&&(e=o.Linear),void 0===n&&(n=!1),void 0===a&&(a=null),void 0===r&&(r=this.camera.scene),void 0===s&&(s=!1),this.shortestPath=s;var l=t;t<0?(l=-1*t,this.clockwise=!1):this.clockwise=!0;var u=360*Math.PI/180;l-=Math.floor(l/u)*u;var d=this.camera;if(!n&&this.isRunning)return d;if(this.isRunning=!0,this.duration=i,this.progress=0,this.source=d.rotation,this.destination=l,"string"==typeof e&&o.hasOwnProperty(e)?this.ease=o[e]:"function"==typeof e&&(this.ease=e),this._elapsed=0,this._onUpdate=a,this._onUpdateScope=r,this.shortestPath){var c,p;(c=this.destination>this.source?Math.abs(this.destination-this.source):Math.abs(this.destination+u)-this.source)<(p=this.source>this.destination?Math.abs(this.source-this.destination):Math.abs(this.source+u)-this.destination)?this.clockwise=!0:c>p&&(this.clockwise=!1)}return this.camera.emit(h.ROTATE_START,this.camera,this,i,l),d},update:function(t,s){if(this.isRunning){this._elapsed+=s;var i=e(this._elapsed/this.duration,0,1);this.progress=i;var n=this.camera;if(this._elapsed<this.duration){var h=this.ease(i);this.current=n.rotation;var o,a=360*Math.PI/180,r=this.destination,l=this.current;!1===this.clockwise&&(r=this.current,l=this.destination),o=r>=l?Math.abs(r-l):Math.abs(r+a)-l;var u;u=this.clockwise?n.rotation+o*h:n.rotation-o*h,n.rotation=u,this._onUpdate&&this._onUpdate.call(this._onUpdateScope,n,i,u)}else n.rotation=this.destination,this._onUpdate&&this._onUpdate.call(this._onUpdateScope,n,i,this.destination),this.effectComplete()}},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(h.ROTATE_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.source=null,this.destination=null}});t.exports=a},68006:(t,s,i)=>{var e=i(2543),n=i(69186),h=i(26088),o=i(17321),a=new n({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.intensity=new o,this.progress=0,this._elapsed=0,this._offsetX=0,this._offsetY=0,this._onUpdate,this._onUpdateScope},start:function(t,s,i,e,n){return void 0===t&&(t=100),void 0===s&&(s=.05),void 0===i&&(i=!1),void 0===e&&(e=null),void 0===n&&(n=this.camera.scene),!i&&this.isRunning||(this.isRunning=!0,this.duration=t,this.progress=0,"number"==typeof s?this.intensity.set(s):this.intensity.set(s.x,s.y),this._elapsed=0,this._offsetX=0,this._offsetY=0,this._onUpdate=e,this._onUpdateScope=n,this.camera.emit(h.SHAKE_START,this.camera,this,t,s)),this.camera},preRender:function(){this.isRunning&&this.camera.matrix.translate(this._offsetX,this._offsetY)},update:function(t,s){if(this.isRunning)if(this._elapsed+=s,this.progress=e(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration){var i=this.intensity,n=this.camera.width,h=this.camera.height,o=this.camera.zoom;this._offsetX=(Math.random()*i.x*n*2-i.x*n)*o,this._offsetY=(Math.random()*i.y*h*2-i.y*h)*o,this.camera.roundPixels&&(this._offsetX=Math.round(this._offsetX),this._offsetY=Math.round(this._offsetY))}else this.effectComplete()},effectComplete:function(){this._offsetX=0,this._offsetY=0,this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(h.SHAKE_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._offsetX=0,this._offsetY=0,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.intensity=null}});t.exports=a},36052:(t,s,i)=>{var e=i(2543),n=i(69186),h=i(45044),o=i(26088),a=new n({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.source=1,this.destination=1,this.ease,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(t,s,i,e,n,a){void 0===s&&(s=1e3),void 0===i&&(i=h.Linear),void 0===e&&(e=!1),void 0===n&&(n=null),void 0===a&&(a=this.camera.scene);var r=this.camera;return!e&&this.isRunning||(this.isRunning=!0,this.duration=s,this.progress=0,this.source=r.zoom,this.destination=t,"string"==typeof i&&h.hasOwnProperty(i)?this.ease=h[i]:"function"==typeof i&&(this.ease=i),this._elapsed=0,this._onUpdate=n,this._onUpdateScope=a,this.camera.emit(o.ZOOM_START,this.camera,this,s,t)),r},update:function(t,s){this.isRunning&&(this._elapsed+=s,this.progress=e(this._elapsed/this.duration,0,1),this._elapsed<this.duration?(this.camera.zoom=this.source+(this.destination-this.source)*this.ease(this.progress),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress,this.camera.zoom)):(this.camera.zoom=this.destination,this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress,this.destination),this.effectComplete()))},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit(o.ZOOM_COMPLETE,this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});t.exports=a},49893:(t,s,i)=>{t.exports={Fade:i(10982),Flash:i(28980),Pan:i(66033),Shake:i(68006),RotateTo:i(9783),Zoom:i(36052)}},97451:t=>{t.exports="cameradestroy"},67998:t=>{t.exports="camerafadeincomplete"},19794:t=>{t.exports="camerafadeinstart"},70884:t=>{t.exports="camerafadeoutcomplete"},79642:t=>{t.exports="camerafadeoutstart"},56307:t=>{t.exports="cameraflashcomplete"},36063:t=>{t.exports="cameraflashstart"},96725:t=>{t.exports="followupdate"},45957:t=>{t.exports="camerapancomplete"},84011:t=>{t.exports="camerapanstart"},21180:t=>{t.exports="postrender"},54573:t=>{t.exports="prerender"},19207:t=>{t.exports="camerarotatecomplete"},51323:t=>{t.exports="camerarotatestart"},89100:t=>{t.exports="camerashakecomplete"},85444:t=>{t.exports="camerashakestart"},23984:t=>{t.exports="camerazoomcomplete"},88715:t=>{t.exports="camerazoomstart"},26088:(t,s,i)=>{t.exports={DESTROY:i(97451),FADE_IN_COMPLETE:i(67998),FADE_IN_START:i(19794),FADE_OUT_COMPLETE:i(70884),FADE_OUT_START:i(79642),FLASH_COMPLETE:i(56307),FLASH_START:i(36063),FOLLOW_UPDATE:i(96725),PAN_COMPLETE:i(45957),PAN_START:i(84011),POST_RENDER:i(21180),PRE_RENDER:i(54573),ROTATE_COMPLETE:i(19207),ROTATE_START:i(51323),SHAKE_COMPLETE:i(89100),SHAKE_START:i(85444),ZOOM_COMPLETE:i(23984),ZOOM_START:i(88715)}},79859:(t,s,i)=>{t.exports={Camera:i(77146),BaseCamera:i(43929),CameraManager:i(8226),Effects:i(49893),Events:i(26088)}},31975:(t,s,i)=>{var e=i(69186),n=i(76076),h=new e({initialize:function(t){this.camera=n(t,"camera",null),this.left=n(t,"left",null),this.right=n(t,"right",null),this.up=n(t,"up",null),this.down=n(t,"down",null),this.zoomIn=n(t,"zoomIn",null),this.zoomOut=n(t,"zoomOut",null),this.zoomSpeed=n(t,"zoomSpeed",.01),this.minZoom=n(t,"minZoom",.001),this.maxZoom=n(t,"maxZoom",1e3),this.speedX=0,this.speedY=0;var s=n(t,"speed",null);"number"==typeof s?(this.speedX=s,this.speedY=s):(this.speedX=n(t,"speed.x",0),this.speedY=n(t,"speed.y",0)),this._zoom=0,this.active=null!==this.camera},start:function(){return this.active=null!==this.camera,this},stop:function(){return this.active=!1,this},setCamera:function(t){return this.camera=t,this},update:function(t){if(this.active){void 0===t&&(t=1);var s=this.camera;this.up&&this.up.isDown?s.scrollY-=this.speedY*t|0:this.down&&this.down.isDown&&(s.scrollY+=this.speedY*t|0),this.left&&this.left.isDown?s.scrollX-=this.speedX*t|0:this.right&&this.right.isDown&&(s.scrollX+=this.speedX*t|0),this.zoomIn&&this.zoomIn.isDown?(s.zoom-=this.zoomSpeed,s.zoom<this.minZoom&&(s.zoom=this.minZoom)):this.zoomOut&&this.zoomOut.isDown&&(s.zoom+=this.zoomSpeed,s.zoom>this.maxZoom&&(s.zoom=this.maxZoom))}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});t.exports=h},92250:(t,s,i)=>{var e=i(69186),n=i(76076),h=new e({initialize:function(t){this.camera=n(t,"camera",null),this.left=n(t,"left",null),this.right=n(t,"right",null),this.up=n(t,"up",null),this.down=n(t,"down",null),this.zoomIn=n(t,"zoomIn",null),this.zoomOut=n(t,"zoomOut",null),this.zoomSpeed=n(t,"zoomSpeed",.01),this.minZoom=n(t,"minZoom",.001),this.maxZoom=n(t,"maxZoom",1e3),this.accelX=0,this.accelY=0;var s=n(t,"acceleration",null);"number"==typeof s?(this.accelX=s,this.accelY=s):(this.accelX=n(t,"acceleration.x",0),this.accelY=n(t,"acceleration.y",0)),this.dragX=0,this.dragY=0;var i=n(t,"drag",null);"number"==typeof i?(this.dragX=i,this.dragY=i):(this.dragX=n(t,"drag.x",0),this.dragY=n(t,"drag.y",0)),this.maxSpeedX=0,this.maxSpeedY=0;var e=n(t,"maxSpeed",null);"number"==typeof e?(this.maxSpeedX=e,this.maxSpeedY=e):(this.maxSpeedX=n(t,"maxSpeed.x",0),this.maxSpeedY=n(t,"maxSpeed.y",0)),this._speedX=0,this._speedY=0,this._zoom=0,this.active=null!==this.camera},start:function(){return this.active=null!==this.camera,this},stop:function(){return this.active=!1,this},setCamera:function(t){return this.camera=t,this},update:function(t){if(this.active){void 0===t&&(t=1);var s=this.camera;this._speedX>0?(this._speedX-=this.dragX*t,this._speedX<0&&(this._speedX=0)):this._speedX<0&&(this._speedX+=this.dragX*t,this._speedX>0&&(this._speedX=0)),this._speedY>0?(this._speedY-=this.dragY*t,this._speedY<0&&(this._speedY=0)):this._speedY<0&&(this._speedY+=this.dragY*t,this._speedY>0&&(this._speedY=0)),this.up&&this.up.isDown?(this._speedY+=this.accelY,this._speedY>this.maxSpeedY&&(this._speedY=this.maxSpeedY)):this.down&&this.down.isDown&&(this._speedY-=this.accelY,this._speedY<-this.maxSpeedY&&(this._speedY=-this.maxSpeedY)),this.left&&this.left.isDown?(this._speedX+=this.accelX,this._speedX>this.maxSpeedX&&(this._speedX=this.maxSpeedX)):this.right&&this.right.isDown&&(this._speedX-=this.accelX,this._speedX<-this.maxSpeedX&&(this._speedX=-this.maxSpeedX)),this.zoomIn&&this.zoomIn.isDown?this._zoom=-this.zoomSpeed:this.zoomOut&&this.zoomOut.isDown?this._zoom=this.zoomSpeed:this._zoom=0,0!==this._speedX&&(s.scrollX-=this._speedX*t|0),0!==this._speedY&&(s.scrollY-=this._speedY*t|0),0!==this._zoom&&(s.zoom+=this._zoom,s.zoom<this.minZoom?s.zoom=this.minZoom:s.zoom>this.maxZoom&&(s.zoom=this.maxZoom))}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});t.exports=h},78241:(t,s,i)=>{t.exports={FixedKeyControl:i(31975),SmoothedKeyControl:i(92250)}},75527:(t,s,i)=>{t.exports={Controls:i(78241),Scene2D:i(79859)}},39414:t=>{t.exports=function(t,s,i){return t.x=s-t.width/2,t.y=i-t.height/2,t}},3821:t=>{t.exports=function(t,s,i){return(s-t)*i+t}},45044:(t,s,i)=>{var e=i(18978),n=i(47232),h=i(57916),o=i(61189),a=i(43121),r=i(85653),l=i(49336),u=i(79696),d=i(1082),c=i(12073),p=i(7884),f=i(46113);t.exports={Power0:l,Power1:u.Out,Power2:o.Out,Power3:d.Out,Power4:c.Out,Linear:l,Quad:u.Out,Cubic:o.Out,Quart:d.Out,Quint:c.Out,Sine:p.Out,Expo:r.Out,Circ:h.Out,Elastic:a.Out,Back:e.Out,Bounce:n.Out,Stepped:f,"Quad.easeIn":u.In,"Cubic.easeIn":o.In,"Quart.easeIn":d.In,"Quint.easeIn":c.In,"Sine.easeIn":p.In,"Expo.easeIn":r.In,"Circ.easeIn":h.In,"Elastic.easeIn":a.In,"Back.easeIn":e.In,"Bounce.easeIn":n.In,"Quad.easeOut":u.Out,"Cubic.easeOut":o.Out,"Quart.easeOut":d.Out,"Quint.easeOut":c.Out,"Sine.easeOut":p.Out,"Expo.easeOut":r.Out,"Circ.easeOut":h.Out,"Elastic.easeOut":a.Out,"Back.easeOut":e.Out,"Bounce.easeOut":n.Out,"Quad.easeInOut":u.InOut,"Cubic.easeInOut":o.InOut,"Quart.easeInOut":d.InOut,"Quint.easeInOut":c.InOut,"Sine.easeInOut":p.InOut,"Expo.easeInOut":r.InOut,"Circ.easeInOut":h.InOut,"Elastic.easeInOut":a.InOut,"Back.easeInOut":e.InOut,"Bounce.easeInOut":n.InOut}},46236:t=>{var s={},i={},e={register:function(t,i,e,n){void 0===n&&(n=!1),s[t]={plugin:i,mapping:e,custom:n}},registerCustom:function(t,s,e,n){i[t]={plugin:s,mapping:e,data:n}},hasCore:function(t){return s.hasOwnProperty(t)},hasCustom:function(t){return i.hasOwnProperty(t)},getCore:function(t){return s[t]},getCustom:function(t){return i[t]},getCustomClass:function(t){return i.hasOwnProperty(t)?i[t].plugin:null},remove:function(t){s.hasOwnProperty(t)&&delete s[t]},removeCustom:function(t){i.hasOwnProperty(t)&&delete i[t]},destroyCorePlugins:function(){for(var t in s)s.hasOwnProperty(t)&&delete s[t]},destroyCustomPlugins:function(){for(var t in i)i.hasOwnProperty(t)&&delete i[t]}};t.exports=e},25376:t=>{t.exports="enterfullscreen"},11313:t=>{t.exports="fullscreenfailed"},13578:t=>{t.exports="fullscreenunsupported"},48530:t=>{t.exports="leavefullscreen"},76037:t=>{t.exports="orientationchange"},43067:t=>{t.exports="resize"},48958:(t,s,i)=>{t.exports={ENTER_FULLSCREEN:i(25376),FULLSCREEN_FAILED:i(11313),FULLSCREEN_UNSUPPORTED:i(13578),LEAVE_FULLSCREEN:i(48530),ORIENTATION_CHANGE:i(76037),RESIZE:i(43067)}}}]);