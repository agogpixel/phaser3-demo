/*! For license information please see 2875.2fc95aafd1f8a98aeffa.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[2875],{93912:(t,e,i)=>{var s=i(69186),n=i(26729),o=i(21577),r=i(72646),u=i(45733),a=new s({Extends:n,initialize:function(t,e,i){n.call(this),this.manager=t,this.key=e,this.isPlaying=!1,this.isPaused=!1,this.totalRate=1,this.duration=this.duration||0,this.totalDuration=this.totalDuration||0,this.config={mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0,pan:0},this.currentConfig=this.config,this.config=r(this.config,i),this.markers={},this.currentMarker=null,this.pendingRemove=!1},addMarker:function(t){return!(!t||!t.name||"string"!=typeof t.name||(this.markers[t.name]?(console.error("addMarker "+t.name+" already exists in Sound"),1):(t=r(!0,{name:"",start:0,duration:this.totalDuration-(t.start||0),config:{mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0,pan:0}},t),this.markers[t.name]=t,0)))},updateMarker:function(t){return!(!t||!t.name||"string"!=typeof t.name||(this.markers[t.name]?(this.markers[t.name]=r(!0,this.markers[t.name],t),0):(console.warn("Audio Marker: "+t.name+" missing in Sound: "+this.key),1)))},removeMarker:function(t){var e=this.markers[t];return e?(this.markers[t]=null,e):null},play:function(t,e){if(void 0===t&&(t=""),"object"==typeof t&&(e=t,t=""),"string"!=typeof t)return!1;if(t){if(!this.markers[t])return console.warn("Marker: "+t+" missing in Sound: "+this.key),!1;this.currentMarker=this.markers[t],this.currentConfig=this.currentMarker.config,this.duration=this.currentMarker.duration}else this.currentMarker=null,this.currentConfig=this.config,this.duration=this.totalDuration;return this.resetConfig(),this.currentConfig=r(this.currentConfig,e),this.isPlaying=!0,this.isPaused=!1,!0},pause:function(){return!(this.isPaused||!this.isPlaying||(this.isPlaying=!1,this.isPaused=!0,0))},resume:function(){return!(!this.isPaused||this.isPlaying||(this.isPlaying=!0,this.isPaused=!1,0))},stop:function(){return!(!this.isPaused&&!this.isPlaying||(this.isPlaying=!1,this.isPaused=!1,this.resetConfig(),0))},applyConfig:function(){this.mute=this.currentConfig.mute,this.volume=this.currentConfig.volume,this.rate=this.currentConfig.rate,this.detune=this.currentConfig.detune,this.loop=this.currentConfig.loop,this.pan=this.currentConfig.pan},resetConfig:function(){this.currentConfig.seek=0,this.currentConfig.delay=0},update:u,calculateRate:function(){var t=this.currentConfig.detune+this.manager.detune,e=Math.pow(1.0005777895065548,t);this.totalRate=this.currentConfig.rate*this.manager.rate*e},destroy:function(){this.pendingRemove||(this.emit(o.DESTROY,this),this.pendingRemove=!0,this.manager=null,this.key="",this.removeAllListeners(),this.isPlaying=!1,this.isPaused=!1,this.config=null,this.currentConfig=null,this.markers=null,this.currentMarker=null)}});t.exports=a},84768:(t,e,i)=>{var s=i(69186),n=i(98409),o=i(26729),r=i(21577),u=i(24496),a=i(45733),h=i(14999),c=i(39161),d=new s({Extends:o,initialize:function(t){o.call(this),this.game=t,this.jsonCache=t.cache.json,this.sounds=[],this.mute=!1,this.volume=1,this.pauseOnBlur=!0,this._rate=1,this._detune=0,this.locked=this.locked||!1,this.unlocked=!1,t.events.on(u.BLUR,this.onGameBlur,this),t.events.on(u.FOCUS,this.onGameFocus,this),t.events.on(u.PRE_STEP,this.update,this),t.events.once(u.DESTROY,this.destroy,this)},add:a,addAudioSprite:function(t,e){void 0===e&&(e={});var i=this.add(t,e);for(var s in i.spritemap=this.jsonCache.get(t).spritemap,i.spritemap)if(i.spritemap.hasOwnProperty(s)){var o=n(e),r=i.spritemap[s];o.loop=!!r.hasOwnProperty("loop")&&r.loop,i.addMarker({name:s,start:r.start,duration:r.end-r.start,config:o})}return i},get:function(t){return c(this.sounds,"key",t)},getAll:function(t){return h(this.sounds,"key",t)},play:function(t,e){var i=this.add(t);return i.once(r.COMPLETE,i.destroy,i),e?e.name?(i.addMarker(e),i.play(e.name)):i.play(e):i.play()},playAudioSprite:function(t,e,i){var s=this.addAudioSprite(t);return s.once(r.COMPLETE,s.destroy,s),s.play(e,i)},remove:function(t){var e=this.sounds.indexOf(t);return-1!==e&&(t.destroy(),this.sounds.splice(e,1),!0)},removeAll:function(){this.sounds.forEach((function(t){t.destroy()})),this.sounds.length=0},removeByKey:function(t){for(var e=0,i=this.sounds.length-1;i>=0;i--){var s=this.sounds[i];s.key===t&&(s.destroy(),this.sounds.splice(i,1),e++)}return e},pauseAll:function(){this.forEachActiveSound((function(t){t.pause()})),this.emit(r.PAUSE_ALL,this)},resumeAll:function(){this.forEachActiveSound((function(t){t.resume()})),this.emit(r.RESUME_ALL,this)},stopAll:function(){this.forEachActiveSound((function(t){t.stop()})),this.emit(r.STOP_ALL,this)},stopByKey:function(t){var e=0;return this.getAll(t).forEach((function(t){t.stop()&&e++})),e},unlock:a,onBlur:a,onFocus:a,onGameBlur:function(){this.pauseOnBlur&&this.onBlur()},onGameFocus:function(){this.pauseOnBlur&&this.onFocus()},update:function(t,e){this.unlocked&&(this.unlocked=!1,this.locked=!1,this.emit(r.UNLOCKED,this));for(var i=this.sounds.length-1;i>=0;i--)this.sounds[i].pendingRemove&&this.sounds.splice(i,1);this.sounds.forEach((function(i){i.update(t,e)}))},destroy:function(){this.game.events.off(u.BLUR,this.onGameBlur,this),this.game.events.off(u.FOCUS,this.onGameFocus,this),this.game.events.off(u.PRE_STEP,this.update,this),this.removeAllListeners(),this.removeAll(),this.sounds.length=0,this.sounds=null,this.game=null},forEachActiveSound:function(t,e){var i=this;this.sounds.forEach((function(s,n){s&&!s.pendingRemove&&t.call(e||i,s,n,i.sounds)}))},setRate:function(t){return this.rate=t,this},rate:{get:function(){return this._rate},set:function(t){this._rate=t,this.forEachActiveSound((function(t){t.calculateRate()})),this.emit(r.GLOBAL_RATE,this,t)}},setDetune:function(t){return this.detune=t,this},detune:{get:function(){return this._detune},set:function(t){this._detune=t,this.forEachActiveSound((function(t){t.calculateRate()})),this.emit(r.GLOBAL_DETUNE,this,t)}}});t.exports=d},72875:(t,e,i)=>{var s=i(13273),n=i(35384),o=i(36083),r={create:function(t){var e=t.config.audio,i=t.device.audio;return e.noAudio||!i.webAudio&&!i.audioData?new n(t):i.webAudio&&!e.disableWebAudio?new o(t):new s(t)}};t.exports=r},8081:(t,e,i)=>{var s=i(93912),n=i(69186),o=i(21577),r=i(2543),u=new n({Extends:s,initialize:function(t,e,i){if(void 0===i&&(i={}),this.tags=t.game.cache.audio.get(e),!this.tags)throw new Error('There is no audio asset with key "'+e+'" in the audio cache');this.audio=null,this.startTime=0,this.previousTime=0,this.duration=this.tags[0].duration,this.totalDuration=this.tags[0].duration,s.call(this,t,e,i)},play:function(t,e){return!(this.manager.isLocked(this,"play",[t,e])||!s.prototype.play.call(this,t,e)||!this.pickAndPlayAudioTag()||(this.emit(o.PLAY,this),0))},pause:function(){return!(this.manager.isLocked(this,"pause")||this.startTime>0||!s.prototype.pause.call(this)||(this.currentConfig.seek=this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0),this.stopAndReleaseAudioTag(),this.emit(o.PAUSE,this),0))},resume:function(){return!(this.manager.isLocked(this,"resume")||this.startTime>0||!s.prototype.resume.call(this)||!this.pickAndPlayAudioTag()||(this.emit(o.RESUME,this),0))},stop:function(){return!this.manager.isLocked(this,"stop")&&!!s.prototype.stop.call(this)&&(this.stopAndReleaseAudioTag(),this.emit(o.STOP,this),!0)},pickAndPlayAudioTag:function(){if(!this.pickAudioTag())return this.reset(),!1;var t=this.currentConfig.seek,e=this.currentConfig.delay,i=(this.currentMarker?this.currentMarker.start:0)+t;return this.previousTime=i,this.audio.currentTime=i,this.applyConfig(),0===e?(this.startTime=0,this.audio.paused&&this.playCatchPromise()):(this.startTime=window.performance.now()+1e3*e,this.audio.paused||this.audio.pause()),this.resetConfig(),!0},pickAudioTag:function(){if(this.audio)return!0;for(var t=0;t<this.tags.length;t++){var e=this.tags[t];if("false"===e.dataset.used)return e.dataset.used="true",this.audio=e,!0}if(!this.manager.override)return!1;var i=[];this.manager.forEachActiveSound((function(t){t.key===this.key&&t.audio&&i.push(t)}),this),i.sort((function(t,e){return t.loop===e.loop?e.seek/e.duration-t.seek/t.duration:t.loop?1:-1}));var s=i[0];return this.audio=s.audio,s.reset(),s.audio=null,s.startTime=0,s.previousTime=0,!0},playCatchPromise:function(){var t=this.audio.play();t&&t.catch((function(t){console.warn(t)}))},stopAndReleaseAudioTag:function(){this.startTime=0,this.previousTime=0,this.audio&&(this.audio.pause(),this.audio.dataset.used="false",this.audio=null)},reset:function(){s.prototype.stop.call(this)},onBlur:function(){this.isPlaying=!1,this.isPaused=!0,this.currentConfig.seek=this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0),this.currentConfig.delay=Math.max(0,(this.startTime-window.performance.now())/1e3),this.stopAndReleaseAudioTag()},onFocus:function(){this.isPlaying=!0,this.isPaused=!1,this.pickAndPlayAudioTag()},update:function(t){if(this.isPlaying)if(this.startTime>0)this.startTime<t-this.manager.audioPlayDelay&&(this.audio.currentTime+=Math.max(0,t-this.startTime)/1e3,this.startTime=0,this.previousTime=this.audio.currentTime,this.playCatchPromise());else{var e=this.currentMarker?this.currentMarker.start:0,i=e+this.duration,s=this.audio.currentTime;if(this.currentConfig.loop)s>=i-this.manager.loopEndOffset?(this.audio.currentTime=e+Math.max(0,s-i),s=this.audio.currentTime):s<e&&(this.audio.currentTime+=e,s=this.audio.currentTime),s<this.previousTime&&this.emit(o.LOOPED,this);else if(s>=i)return this.reset(),this.stopAndReleaseAudioTag(),void this.emit(o.COMPLETE,this);this.previousTime=s}},destroy:function(){s.prototype.destroy.call(this),this.tags=null,this.audio&&this.stopAndReleaseAudioTag()},updateMute:function(){this.audio&&(this.audio.muted=this.currentConfig.mute||this.manager.mute)},updateVolume:function(){this.audio&&(this.audio.volume=r(this.currentConfig.volume*this.manager.volume,0,1))},calculateRate:function(){s.prototype.calculateRate.call(this),this.audio&&(this.audio.playbackRate=this.totalRate)},mute:{get:function(){return this.currentConfig.mute},set:function(t){this.currentConfig.mute=t,this.manager.isLocked(this,"mute",t)||(this.updateMute(),this.emit(o.MUTE,this,t))}},setMute:function(t){return this.mute=t,this},volume:{get:function(){return this.currentConfig.volume},set:function(t){this.currentConfig.volume=t,this.manager.isLocked(this,"volume",t)||(this.updateVolume(),this.emit(o.VOLUME,this,t))}},setVolume:function(t){return this.volume=t,this},rate:{get:function(){return this.currentConfig.rate},set:function(t){this.currentConfig.rate=t,this.manager.isLocked(this,o.RATE,t)||(this.calculateRate(),this.emit(o.RATE,this,t))}},setRate:function(t){return this.rate=t,this},detune:{get:function(){return this.currentConfig.detune},set:function(t){this.currentConfig.detune=t,this.manager.isLocked(this,o.DETUNE,t)||(this.calculateRate(),this.emit(o.DETUNE,this,t))}},setDetune:function(t){return this.detune=t,this},seek:{get:function(){return this.isPlaying?this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0):this.isPaused?this.currentConfig.seek:0},set:function(t){this.manager.isLocked(this,"seek",t)||this.startTime>0||(this.isPlaying||this.isPaused)&&(t=Math.min(Math.max(0,t),this.duration),this.isPlaying?(this.previousTime=t,this.audio.currentTime=t):this.isPaused&&(this.currentConfig.seek=t),this.emit(o.SEEK,this,t))}},setSeek:function(t){return this.seek=t,this},loop:{get:function(){return this.currentConfig.loop},set:function(t){this.currentConfig.loop=t,this.manager.isLocked(this,"loop",t)||(this.audio&&(this.audio.loop=t),this.emit(o.LOOP,this,t))}},setLoop:function(t){return this.loop=t,this},pan:{get:function(){return this.currentConfig.pan},set:function(t){this.currentConfig.pan=t,this.emit(o.PAN,this,t)}},setPan:function(t){return this.pan=t,this}});t.exports=u},13273:(t,e,i)=>{var s=i(84768),n=i(69186),o=i(21577),r=i(8081),u=new n({Extends:s,initialize:function(t){this.override=!0,this.audioPlayDelay=.1,this.loopEndOffset=.05,this.onBlurPausedSounds=[],this.locked="ontouchstart"in window,this.lockedActionsQueue=this.locked?[]:null,this._mute=!1,this._volume=1,s.call(this,t)},add:function(t,e){var i=new r(this,t,e);return this.sounds.push(i),i},unlock:function(){this.locked=!1;var t=this;if(this.game.cache.audio.entries.each((function(e,i){for(var s=0;s<i.length;s++)if("true"===i[s].dataset.locked)return t.locked=!0,!1;return!0})),this.locked){var e=!1,i=function(){e=!0},s=function(){if(e)e=!1;else{document.body.removeEventListener("touchmove",i),document.body.removeEventListener("touchend",s);var n=[];if(t.game.cache.audio.entries.each((function(t,e){for(var i=0;i<e.length;i++){var s=e[i];"true"===s.dataset.locked&&n.push(s)}return!0})),0!==n.length){var o=n[n.length-1];o.oncanplaythrough=function(){o.oncanplaythrough=null,n.forEach((function(t){t.dataset.locked="false"})),t.unlocked=!0},n.forEach((function(t){t.load()}))}}};this.once(o.UNLOCKED,(function(){for(this.forEachActiveSound((function(t){null===t.currentMarker&&0===t.duration&&(t.duration=t.tags[0].duration),t.totalDuration=t.tags[0].duration}));this.lockedActionsQueue.length;){var t=this.lockedActionsQueue.shift();t.sound[t.prop].apply?t.sound[t.prop].apply(t.sound,t.value||[]):t.sound[t.prop]=t.value}}),this),document.body.addEventListener("touchmove",i,!1),document.body.addEventListener("touchend",s,!1)}},onBlur:function(){this.forEachActiveSound((function(t){t.isPlaying&&(this.onBlurPausedSounds.push(t),t.onBlur())}))},onFocus:function(){this.onBlurPausedSounds.forEach((function(t){t.onFocus()})),this.onBlurPausedSounds.length=0},destroy:function(){s.prototype.destroy.call(this),this.onBlurPausedSounds.length=0,this.onBlurPausedSounds=null},isLocked:function(t,e,i){return"true"===t.tags[0].dataset.locked&&(this.lockedActionsQueue.push({sound:t,prop:e,value:i}),!0)},setMute:function(t){return this.mute=t,this},mute:{get:function(){return this._mute},set:function(t){this._mute=t,this.forEachActiveSound((function(t){t.updateMute()})),this.emit(o.GLOBAL_MUTE,this,t)}},setVolume:function(t){return this.volume=t,this},volume:{get:function(){return this._volume},set:function(t){this._volume=t,this.forEachActiveSound((function(t){t.updateVolume()})),this.emit(o.GLOBAL_VOLUME,this,t)}}});t.exports=u},56925:(t,e,i)=>{var s=i(93912),n=i(69186),o=i(26729),r=i(72646),u=function(){return!1},a=function(){return this},h=new n({Extends:o,initialize:function(t,e,i){void 0===i&&(i={}),o.call(this),this.manager=t,this.key=e,this.isPlaying=!1,this.isPaused=!1,this.totalRate=1,this.duration=0,this.totalDuration=0,this.config=r({mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0,pan:0},i),this.currentConfig=this.config,this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.seek=0,this.loop=!1,this.pan=0,this.markers={},this.currentMarker=null,this.pendingRemove=!1},addMarker:u,updateMarker:u,removeMarker:function(){return null},play:u,pause:u,resume:u,stop:u,destroy:function(){s.prototype.destroy.call(this)},setMute:a,setVolume:a,setRate:a,setDetune:a,setSeek:a,setLoop:a,setPan:a});t.exports=h},35384:(t,e,i)=>{var s=i(84768),n=i(69186),o=i(26729),r=i(56925),u=i(45733),a=new n({Extends:o,initialize:function(t){o.call(this),this.game=t,this.sounds=[],this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.pauseOnBlur=!0,this.locked=!1},add:function(t,e){var i=new r(this,t,e);return this.sounds.push(i),i},addAudioSprite:function(t,e){var i=this.add(t,e);return i.spritemap={},i},play:function(t,e){return!1},playAudioSprite:function(t,e,i){return!1},remove:function(t){return s.prototype.remove.call(this,t)},removeByKey:function(t){return s.prototype.removeByKey.call(this,t)},pauseAll:u,resumeAll:u,stopAll:u,update:u,setRate:u,setDetune:u,setMute:u,setVolume:u,forEachActiveSound:function(t,e){s.prototype.forEachActiveSound.call(this,t,e)},destroy:function(){s.prototype.destroy.call(this)}});t.exports=a},34630:(t,e,i)=>{var s=i(93912),n=i(69186),o=i(21577),r=new n({Extends:s,initialize:function(t,e,i){if(void 0===i&&(i={}),this.audioBuffer=t.game.cache.audio.get(e),!this.audioBuffer)throw new Error('Audio key "'+e+'" missing from cache');this.source=null,this.loopSource=null,this.muteNode=t.context.createGain(),this.volumeNode=t.context.createGain(),this.pannerNode=null,this.playTime=0,this.startTime=0,this.loopTime=0,this.rateUpdates=[],this.hasEnded=!1,this.hasLooped=!1,this.muteNode.connect(this.volumeNode),t.context.createStereoPanner?(this.pannerNode=t.context.createStereoPanner(),this.volumeNode.connect(this.pannerNode),this.pannerNode.connect(t.destination)):this.volumeNode.connect(t.destination),this.duration=this.audioBuffer.duration,this.totalDuration=this.audioBuffer.duration,s.call(this,t,e,i)},play:function(t,e){return!!s.prototype.play.call(this,t,e)&&(this.stopAndRemoveBufferSource(),this.createAndStartBufferSource(),this.emit(o.PLAY,this),!0)},pause:function(){return!(this.manager.context.currentTime<this.startTime||!s.prototype.pause.call(this)||(this.currentConfig.seek=this.getCurrentTime(),this.stopAndRemoveBufferSource(),this.emit(o.PAUSE,this),0))},resume:function(){return!(this.manager.context.currentTime<this.startTime||!s.prototype.resume.call(this)||(this.createAndStartBufferSource(),this.emit(o.RESUME,this),0))},stop:function(){return!!s.prototype.stop.call(this)&&(this.stopAndRemoveBufferSource(),this.emit(o.STOP,this),!0)},createAndStartBufferSource:function(){var t=this.currentConfig.seek,e=this.currentConfig.delay,i=this.manager.context.currentTime+e,s=(this.currentMarker?this.currentMarker.start:0)+t,n=this.duration-t;this.playTime=i-t,this.startTime=i,this.source=this.createBufferSource(),this.applyConfig(),this.source.start(Math.max(0,i),Math.max(0,s),Math.max(0,n)),this.resetConfig()},createAndStartLoopBufferSource:function(){var t=this.getLoopTime(),e=this.currentMarker?this.currentMarker.start:0,i=this.duration;this.loopTime=t,this.loopSource=this.createBufferSource(),this.loopSource.playbackRate.setValueAtTime(this.totalRate,0),this.loopSource.start(Math.max(0,t),Math.max(0,e),Math.max(0,i))},createBufferSource:function(){var t=this,e=this.manager.context.createBufferSource();return e.buffer=this.audioBuffer,e.connect(this.muteNode),e.onended=function(e){e.target===t.source&&(t.currentConfig.loop?t.hasLooped=!0:t.hasEnded=!0)},e},stopAndRemoveBufferSource:function(){this.source&&(this.source.stop(),this.source.disconnect(),this.source=null),this.playTime=0,this.startTime=0,this.stopAndRemoveLoopBufferSource()},stopAndRemoveLoopBufferSource:function(){this.loopSource&&(this.loopSource.stop(),this.loopSource.disconnect(),this.loopSource=null),this.loopTime=0},applyConfig:function(){this.rateUpdates.length=0,this.rateUpdates.push({time:0,rate:1}),s.prototype.applyConfig.call(this)},update:function(){this.hasEnded?(this.hasEnded=!1,s.prototype.stop.call(this),this.stopAndRemoveBufferSource(),this.emit(o.COMPLETE,this)):this.hasLooped&&(this.hasLooped=!1,this.source=this.loopSource,this.loopSource=null,this.playTime=this.startTime=this.loopTime,this.rateUpdates.length=0,this.rateUpdates.push({time:0,rate:this.totalRate}),this.createAndStartLoopBufferSource(),this.emit(o.LOOPED,this))},destroy:function(){s.prototype.destroy.call(this),this.audioBuffer=null,this.stopAndRemoveBufferSource(),this.muteNode.disconnect(),this.muteNode=null,this.volumeNode.disconnect(),this.volumeNode=null,this.pannerNode&&(this.pannerNode.disconnect(),this.pannerNode=null),this.rateUpdates.length=0,this.rateUpdates=null},calculateRate:function(){s.prototype.calculateRate.call(this);var t=this.manager.context.currentTime;this.source&&"number"==typeof this.totalRate&&this.source.playbackRate.setValueAtTime(this.totalRate,t),this.isPlaying&&(this.rateUpdates.push({time:Math.max(this.startTime,t)-this.playTime,rate:this.totalRate}),this.loopSource&&(this.stopAndRemoveLoopBufferSource(),this.createAndStartLoopBufferSource()))},getCurrentTime:function(){for(var t=0,e=0;e<this.rateUpdates.length;e++)t+=((e<this.rateUpdates.length-1?this.rateUpdates[e+1].time:this.manager.context.currentTime-this.playTime)-this.rateUpdates[e].time)*this.rateUpdates[e].rate;return t},getLoopTime:function(){for(var t=0,e=0;e<this.rateUpdates.length-1;e++)t+=(this.rateUpdates[e+1].time-this.rateUpdates[e].time)*this.rateUpdates[e].rate;var i=this.rateUpdates[this.rateUpdates.length-1];return this.playTime+i.time+(this.duration-t)/i.rate},rate:{get:function(){return this.currentConfig.rate},set:function(t){this.currentConfig.rate=t,this.calculateRate(),this.emit(o.RATE,this,t)}},setRate:function(t){return this.rate=t,this},detune:{get:function(){return this.currentConfig.detune},set:function(t){this.currentConfig.detune=t,this.calculateRate(),this.emit(o.DETUNE,this,t)}},setDetune:function(t){return this.detune=t,this},mute:{get:function(){return 0===this.muteNode.gain.value},set:function(t){this.currentConfig.mute=t,this.muteNode.gain.setValueAtTime(t?0:1,0),this.emit(o.MUTE,this,t)}},setMute:function(t){return this.mute=t,this},volume:{get:function(){return this.volumeNode.gain.value},set:function(t){this.currentConfig.volume=t,this.volumeNode.gain.setValueAtTime(t,0),this.emit(o.VOLUME,this,t)}},setVolume:function(t){return this.volume=t,this},seek:{get:function(){return this.isPlaying?this.manager.context.currentTime<this.startTime?this.startTime-this.playTime:this.getCurrentTime():this.isPaused?this.currentConfig.seek:0},set:function(t){this.manager.context.currentTime<this.startTime||(this.isPlaying||this.isPaused)&&(t=Math.min(Math.max(0,t),this.duration),this.currentConfig.seek=t,this.isPlaying&&(this.stopAndRemoveBufferSource(),this.createAndStartBufferSource()),this.emit(o.SEEK,this,t))}},setSeek:function(t){return this.seek=t,this},loop:{get:function(){return this.currentConfig.loop},set:function(t){this.currentConfig.loop=t,this.isPlaying&&(this.stopAndRemoveLoopBufferSource(),t&&this.createAndStartLoopBufferSource()),this.emit(o.LOOP,this,t)}},setLoop:function(t){return this.loop=t,this},pan:{get:function(){return this.pannerNode?this.pannerNode.pan.value:0},set:function(t){this.currentConfig.pan=t,this.pannerNode&&this.pannerNode.pan.setValueAtTime(t,this.manager.context.currentTime),this.emit(o.PAN,this,t)}},setPan:function(t){return this.pan=t,this}});t.exports=r},36083:(t,e,i)=>{var s=i(39118),n=i(84768),o=i(69186),r=i(21577),u=i(24496),a=i(34630),h=new o({Extends:n,initialize:function(t){this.context=this.createAudioContext(t),this.masterMuteNode=this.context.createGain(),this.masterVolumeNode=this.context.createGain(),this.masterMuteNode.connect(this.masterVolumeNode),this.masterVolumeNode.connect(this.context.destination),this.destination=this.masterMuteNode,this.locked="suspended"===this.context.state&&("ontouchstart"in window||"onclick"in window),n.call(this,t),this.locked&&t.isBooted?this.unlock():t.events.once(u.BOOT,this.unlock,this)},createAudioContext:function(t){var e=t.config.audio;return e.context?(e.context.resume(),e.context):window.hasOwnProperty("AudioContext")?new AudioContext:window.hasOwnProperty("webkitAudioContext")?new window.webkitAudioContext:void 0},setAudioContext:function(t){return this.context&&this.context.close(),this.masterMuteNode&&this.masterMuteNode.disconnect(),this.masterVolumeNode&&this.masterVolumeNode.disconnect(),this.context=t,this.masterMuteNode=t.createGain(),this.masterVolumeNode=t.createGain(),this.masterMuteNode.connect(this.masterVolumeNode),this.masterVolumeNode.connect(t.destination),this.destination=this.masterMuteNode,this},add:function(t,e){var i=new a(this,t,e);return this.sounds.push(i),i},decodeAudio:function(t,e){var i;i=Array.isArray(t)?t:[{key:t,data:e}];for(var n=this.game.cache.audio,o=i.length,u=0;u<i.length;u++){var a=i[u],h=a.key,c=a.data;"string"==typeof c&&(c=s(c));var d=function(t,e){n.add(t,e),this.emit(r.DECODED,t),0==--o&&this.emit(r.DECODED_ALL)}.bind(this,h),l=function(t,e){console.error("Error decoding audio: "+t+" - ",e?e.message:""),0==--o&&this.emit(r.DECODED_ALL)}.bind(this,h);this.context.decodeAudioData(c,d,l)}},unlock:function(){var t=this,e=document.body,i=function i(){if(t.context&&e){var s=e.removeEventListener;t.context.resume().then((function(){s("touchstart",i),s("touchend",i),s("click",i),s("keydown",i),t.unlocked=!0}),(function(){s("touchstart",i),s("touchend",i),s("click",i),s("keydown",i)}))}};e&&(e.addEventListener("touchstart",i,!1),e.addEventListener("touchend",i,!1),e.addEventListener("click",i,!1),e.addEventListener("keydown",i,!1))},onBlur:function(){this.locked||this.context.suspend()},onFocus:function(){var t=this.context;"suspended"!==t.state&&"interrupted"!==t.state||this.locked||t.resume()},update:function(t,e){n.prototype.update.call(this,t,e);var i=this.context;i&&"interrupted"===i.state&&i.resume()},destroy:function(){if(this.destination=null,this.masterVolumeNode.disconnect(),this.masterVolumeNode=null,this.masterMuteNode.disconnect(),this.masterMuteNode=null,this.game.config.audio.context)this.context.suspend();else{var t=this;this.context.close().then((function(){t.context=null}))}n.prototype.destroy.call(this)},setMute:function(t){return this.mute=t,this},mute:{get:function(){return 0===this.masterMuteNode.gain.value},set:function(t){this.masterMuteNode.gain.setValueAtTime(t?0:1,0),this.emit(r.GLOBAL_MUTE,this,t)}},setVolume:function(t){return this.volume=t,this},volume:{get:function(){return this.masterVolumeNode.gain.value},set:function(t){this.masterVolumeNode.gain.setValueAtTime(t,0),this.emit(r.GLOBAL_VOLUME,this,t)}}});t.exports=h},14999:(t,e,i)=>{var s=i(30968);t.exports=function(t,e,i,n,o){void 0===n&&(n=0),void 0===o&&(o=t.length);var r=[];if(s(t,n,o))for(var u=n;u<o;u++){var a=t[u];(!e||e&&void 0===i&&a.hasOwnProperty(e)||e&&void 0!==i&&a[e]===i)&&r.push(a)}return r}},39161:(t,e,i)=>{var s=i(30968);t.exports=function(t,e,i,n,o){if(void 0===n&&(n=0),void 0===o&&(o=t.length),s(t,n,o))for(var r=n;r<o;r++){var u=t[r];if(!e||e&&void 0===i&&u.hasOwnProperty(e)||e&&void 0!==i&&u[e]===i)return u}return null}},30968:t=>{t.exports=function(t,e,i,s){var n=t.length;if(e<0||e>n||e>=i||i>n||e+i>n){if(s)throw new Error("Range Error: Values outside acceptable range");return!1}return!0}},39118:t=>{for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(256),s=0;s<e.length;s++)i[e.charCodeAt(s)]=s;t.exports=function(t){var e,s,n,o,r=(t=t.substr(t.indexOf(",")+1)).length,u=.75*r,a=0;"="===t[r-1]&&(u--,"="===t[r-2]&&u--);for(var h=new ArrayBuffer(u),c=new Uint8Array(h),d=0;d<r;d+=4)e=i[t.charCodeAt(d)],s=i[t.charCodeAt(d+1)],n=i[t.charCodeAt(d+2)],o=i[t.charCodeAt(d+3)],c[a++]=e<<2|s>>4,c[a++]=(15&s)<<4|n>>2,c[a++]=(3&n)<<6|63&o;return h}}}]);