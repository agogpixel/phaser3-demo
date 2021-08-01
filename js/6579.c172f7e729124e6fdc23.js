/*! For license information please see 6579.c172f7e729124e6fdc23.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[6579],{56579:(t,e,i)=>{var n=i(69186),s=i(21342),r=i(25738),a=i(90316),h=i(95018),u=new n({initialize:function(t){this.parent=t,this.animationManager=t.scene.sys.anims,this.animationManager.on(a.REMOVE_ANIMATION,this.globalRemove,this),this.textureManager=this.animationManager.textureManager,this.anims=null,this.isPlaying=!1,this.hasStarted=!1,this.currentAnim=null,this.currentFrame=null,this.nextAnim=null,this.nextAnimsQueue=[],this.timeScale=1,this.frameRate=0,this.duration=0,this.msPerFrame=0,this.skipMissedFrames=!0,this.delay=0,this.repeat=0,this.repeatDelay=0,this.yoyo=!1,this.showOnStart=!1,this.hideOnComplete=!1,this.forward=!0,this.inReverse=!1,this.accumulator=0,this.nextTick=0,this.delayCounter=0,this.repeatCounter=0,this.pendingRepeat=!1,this._paused=!1,this._wasPlaying=!1,this._pendingStop=0,this._pendingStopValue},chain:function(t){var e=this.parent;if(void 0===t)return this.nextAnimsQueue.length=0,this.nextAnim=null,e;Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=t[i];null===this.nextAnim?this.nextAnim=n:this.nextAnimsQueue.push(n)}return this.parent},getName:function(){return this.currentAnim?this.currentAnim.key:""},getFrameName:function(){return this.currentFrame?this.currentFrame.textureFrame:""},load:function(t){this.isPlaying&&this.stop();var e=this.animationManager,i="string"==typeof t?t:r(t,"key",null),n=this.exists(i)?this.get(i):e.get(i);if(n){this.currentAnim=n;var s=n.getTotalFrames(),a=r(t,"frameRate",n.frameRate),h=r(t,"duration",n.duration);n.calculateDuration(this,s,h,a),this.delay=r(t,"delay",n.delay),this.repeat=r(t,"repeat",n.repeat),this.repeatDelay=r(t,"repeatDelay",n.repeatDelay),this.yoyo=r(t,"yoyo",n.yoyo),this.showOnStart=r(t,"showOnStart",n.showOnStart),this.hideOnComplete=r(t,"hideOnComplete",n.hideOnComplete),this.skipMissedFrames=r(t,"skipMissedFrames",n.skipMissedFrames),this.timeScale=r(t,"timeScale",this.timeScale);var u=r(t,"startFrame",0);u>n.getTotalFrames()&&(u=0);var o=n.frames[u];0!==u||this.forward||(o=n.getLastFrame()),this.currentFrame=o}else console.warn("Missing animation: "+i);return this.parent},pause:function(t){return this._paused||(this._paused=!0,this._wasPlaying=this.isPlaying,this.isPlaying=!1),void 0!==t&&this.setCurrentFrame(t),this.parent},resume:function(t){return this._paused&&(this._paused=!1,this.isPlaying=this._wasPlaying),void 0!==t&&this.setCurrentFrame(t),this.parent},playAfterDelay:function(t,e){if(this.isPlaying){var i=this.nextAnim,n=this.nextAnimsQueue;i&&n.unshift(i),this.nextAnim=t,this._pendingStop=1,this._pendingStopValue=e}else this.delayCounter=e,this.play(t,!0);return this.parent},playAfterRepeat:function(t,e){if(void 0===e&&(e=1),this.isPlaying){var i=this.nextAnim,n=this.nextAnimsQueue;i&&n.unshift(i),-1!==this.repeatCounter&&e>this.repeatCounter&&(e=this.repeatCounter),this.nextAnim=t,this._pendingStop=2,this._pendingStopValue=e}else this.play(t);return this.parent},play:function(t,e){void 0===e&&(e=!1);var i=this.currentAnim,n=this.parent,s="string"==typeof t?t:t.key;if(e&&this.isPlaying&&i.key===s)return n;if(i&&this.isPlaying){var r=this.animationManager.getMix(i.key,t);if(r>0)return this.playAfterDelay(t,r)}return this.forward=!0,this.inReverse=!1,this._paused=!1,this._wasPlaying=!0,this.startAnimation(t)},playReverse:function(t,e){void 0===e&&(e=!1);var i="string"==typeof t?t:t.key;return e&&this.isPlaying&&this.currentAnim.key===i?this.parent:(this.forward=!1,this.inReverse=!0,this._paused=!1,this._wasPlaying=!0,this.startAnimation(t))},startAnimation:function(t){this.load(t);var e=this.currentAnim,i=this.parent;return e?(this.repeatCounter=-1===this.repeat?Number.MAX_VALUE:this.repeat,e.getFirstTick(this),this.isPlaying=!0,this.pendingRepeat=!1,this.hasStarted=!1,this._pendingStop=0,this._pendingStopValue=0,this._paused=!1,this.delayCounter+=this.delay,0===this.delayCounter&&this.handleStart(),i):i},handleStart:function(){this.showOnStart&&this.parent.setVisible(!0),this.setCurrentFrame(this.currentFrame),this.hasStarted=!0,this.emitEvents(a.ANIMATION_START)},handleRepeat:function(){this.pendingRepeat=!1,this.emitEvents(a.ANIMATION_REPEAT)},handleStop:function(){this._pendingStop=0,this.isPlaying=!1,this.emitEvents(a.ANIMATION_STOP)},handleComplete:function(){this._pendingStop=0,this.isPlaying=!1,this.hideOnComplete&&this.parent.setVisible(!1),this.emitEvents(a.ANIMATION_COMPLETE,a.ANIMATION_COMPLETE_KEY)},emitEvents:function(t,e){var i=this.currentAnim,n=this.currentFrame,s=this.parent,r=n.textureFrame;s.emit(t,i,n,s,r),e&&s.emit(e+i.key,i,n,s,r)},reverse:function(){return this.isPlaying&&(this.inReverse=!this.inReverse,this.forward=!this.forward),this.parent},getProgress:function(){var t=this.currentFrame;if(!t)return 0;var e=t.progress;return this.inReverse&&(e*=-1),e},setProgress:function(t){return this.forward||(t=1-t),this.setCurrentFrame(this.currentAnim.getFrameByProgress(t)),this.parent},setRepeat:function(t){return this.repeatCounter=-1===t?Number.MAX_VALUE:t,this.parent},globalRemove:function(t,e){void 0===e&&(e=this.currentAnim),this.isPlaying&&e.key===this.currentAnim.key&&(this.stop(),this.setCurrentFrame(this.currentAnim.frames[0]))},restart:function(t,e){void 0===t&&(t=!1),void 0===e&&(e=!1);var i=this.currentAnim,n=this.parent;return i?(e&&(this.repeatCounter=-1===this.repeat?Number.MAX_VALUE:this.repeat),i.getFirstTick(this),this.emitEvents(a.ANIMATION_RESTART),this.isPlaying=!0,this.pendingRepeat=!1,this.hasStarted=!t,this._pendingStop=0,this._pendingStopValue=0,this._paused=!1,this.setCurrentFrame(i.frames[0]),this.parent):n},complete:function(){if(this._pendingStop=0,this.isPlaying=!1,this.currentAnim&&this.handleComplete(),this.nextAnim){var t=this.nextAnim;this.nextAnim=this.nextAnimsQueue.length>0?this.nextAnimsQueue.shift():null,this.play(t)}return this.parent},stop:function(){if(this._pendingStop=0,this.isPlaying=!1,this.currentAnim&&this.handleStop(),this.nextAnim){var t=this.nextAnim;this.nextAnim=this.nextAnimsQueue.shift(),this.play(t)}return this.parent},stopAfterDelay:function(t){return this._pendingStop=1,this._pendingStopValue=t,this.parent},stopAfterRepeat:function(t){return void 0===t&&(t=1),-1!==this.repeatCounter&&t>this.repeatCounter&&(t=this.repeatCounter),this._pendingStop=2,this._pendingStopValue=t,this.parent},stopOnFrame:function(t){return this._pendingStop=3,this._pendingStopValue=t,this.parent},getTotalFrames:function(){return this.currentAnim?this.currentAnim.getTotalFrames():0},update:function(t,e){var i=this.currentAnim;if(this.isPlaying&&i&&!i.paused){if(this.accumulator+=e*this.timeScale,1===this._pendingStop&&(this._pendingStopValue-=e,this._pendingStopValue<=0))return this.stop();if(this.hasStarted){if(this.accumulator>=this.nextTick&&(this.forward?i.nextFrame(this):i.previousFrame(this),this.isPlaying&&0===this._pendingStop&&this.skipMissedFrames&&this.accumulator>this.nextTick)){var n=0;do{this.forward?i.nextFrame(this):i.previousFrame(this),n++}while(this.isPlaying&&this.accumulator>this.nextTick&&n<60)}}else this.accumulator>=this.delayCounter&&(this.accumulator-=this.delayCounter,this.handleStart())}},setCurrentFrame:function(t){var e=this.parent;return this.currentFrame=t,e.texture=t.frame.texture,e.frame=t.frame,e.isCropped&&e.frame.updateCropUVs(e._crop,e.flipX,e.flipY),t.setAlpha&&(e.alpha=t.alpha),e.setSizeToFrame(),e._originComponent&&(t.frame.customPivot?e.setOrigin(t.frame.pivotX,t.frame.pivotY):e.updateDisplayOrigin()),this.isPlaying&&this.hasStarted&&(this.emitEvents(a.ANIMATION_UPDATE),3===this._pendingStop&&this._pendingStopValue===t&&this.stop()),e},nextFrame:function(){return this.currentAnim&&this.currentAnim.nextFrame(this),this.parent},previousFrame:function(){return this.currentAnim&&this.currentAnim.previousFrame(this),this.parent},get:function(t){return this.anims?this.anims.get(t):null},exists:function(t){return!!this.anims&&this.anims.has(t)},create:function(t){var e=t.key,i=!1;return e&&((i=this.get(e))||(i=new h(this,e,t),this.anims||(this.anims=new s),this.anims.set(e,i))),i},generateFrameNames:function(t,e){return this.animationManager.generateFrameNames(t,e)},generateFrameNumbers:function(t,e){return this.animationManager.generateFrameNumbers(t,e)},remove:function(t){var e=this.get(t);return e&&(this.currentAnim===e&&this.stop(),this.anims.delete(t)),e},destroy:function(){this.animationManager.off(a.REMOVE_ANIMATION,this.globalRemove,this),this.anims&&this.anims.clear(),this.animationManager=null,this.parent=null,this.nextAnim=null,this.nextAnimsQueue.length=0,this.currentAnim=null,this.currentFrame=null},isPaused:{get:function(){return this._paused}}});t.exports=u}}]);