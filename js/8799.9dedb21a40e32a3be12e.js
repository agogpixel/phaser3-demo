/*! For license information please see 8799.9dedb21a40e32a3be12e.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[8799],{8091:(e,t,s)=>{var r=s(69186),a=s(24496),n=s(37710),i=new r({initialize:function(e,t){var s=e.sys.renderer;this.renderer=s,this.bitmapMask=t,this.maskTexture=null,this.mainTexture=null,this.dirty=!0,this.mainFramebuffer=null,this.maskFramebuffer=null,this.invertAlpha=!1,this.isStencil=!1,this.createMask(),e.sys.game.events.on(a.CONTEXT_RESTORED,this.createMask,this),s&&s.on(n.RESIZE,this.createMask,this)},createMask:function(){var e=this.renderer;if(e&&e.gl){this.mainTexture&&this.clearMask();var t=e.width,s=e.height,r=0==(t&t-1)&&0==(s&s-1),a=e.gl,n=r?a.REPEAT:a.CLAMP_TO_EDGE,i=a.LINEAR;this.mainTexture=e.createTexture2D(0,i,i,n,n,a.RGBA,null,t,s),this.maskTexture=e.createTexture2D(0,i,i,n,n,a.RGBA,null,t,s),this.mainFramebuffer=e.createFramebuffer(t,s,this.mainTexture,!0),this.maskFramebuffer=e.createFramebuffer(t,s,this.maskTexture,!0)}},clearMask:function(){var e=this.renderer;e&&e.gl&&this.mainTexture&&(e.deleteTexture(this.mainTexture),e.deleteTexture(this.maskTexture),e.deleteFramebuffer(this.mainFramebuffer),e.deleteFramebuffer(this.maskFramebuffer),this.mainTexture=null,this.maskTexture=null,this.mainFramebuffer=null,this.maskFramebuffer=null)},setBitmap:function(e){this.bitmapMask=e},preRenderWebGL:function(e,t,s){e.pipelines.BITMAPMASK_PIPELINE.beginMask(this,t,s)},postRenderWebGL:function(e,t){e.pipelines.BITMAPMASK_PIPELINE.endMask(this,t)},preRenderCanvas:function(){},postRenderCanvas:function(){},destroy:function(){this.clearMask(),this.renderer&&this.renderer.off(n.RESIZE,this.createMask,this),this.bitmapMask=null,this.prevFramebuffer=null,this.renderer=null}});e.exports=i},70611:(e,t,s)=>{var r=new(s(69186))({initialize:function(e,t){this.geometryMask=t,this.invertAlpha=!1,this.isStencil=!0,this.level=0},setShape:function(e){return this.geometryMask=e,this},setInvertAlpha:function(e){return void 0===e&&(e=!0),this.invertAlpha=e,this},preRenderWebGL:function(e,t,s){var r=e.gl;e.flush(),0===e.maskStack.length&&(r.enable(r.STENCIL_TEST),r.clear(r.STENCIL_BUFFER_BIT),e.maskCount=0),e.currentCameraMask.mask!==this&&(e.currentMask.mask=this),e.maskStack.push({mask:this,camera:s}),this.applyStencil(e,s,!0),e.maskCount++},applyStencil:function(e,t,s){var r=e.gl,a=this.geometryMask,n=e.maskCount;r.colorMask(!1,!1,!1,!1),s?(r.stencilFunc(r.EQUAL,n,255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)):(r.stencilFunc(r.EQUAL,n+1,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)),a.renderWebGL(e,a,t),e.flush(),r.colorMask(!0,!0,!0,!0),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),s?this.invertAlpha?r.stencilFunc(r.NOTEQUAL,n+1,255):r.stencilFunc(r.EQUAL,n+1,255):this.invertAlpha?r.stencilFunc(r.NOTEQUAL,n,255):r.stencilFunc(r.EQUAL,n,255)},postRenderWebGL:function(e){var t=e.gl;e.maskStack.pop(),e.maskCount--,e.flush();var s=e.currentMask;if(0===e.maskStack.length)s.mask=null,t.disable(t.STENCIL_TEST);else{var r=e.maskStack[e.maskStack.length-1];r.mask.applyStencil(e,r.camera,!1),e.currentCameraMask.mask!==r.mask?(s.mask=r.mask,s.camera=r.camera):s.mask=null}},preRenderCanvas:function(e,t,s){var r=this.geometryMask;e.currentContext.save(),r.renderCanvas(e,r,s,null,null,!0),e.currentContext.clip()},postRenderCanvas:function(e){e.currentContext.restore()},destroy:function(){this.geometryMask=null}});e.exports=r},90581:e=>{e.exports="postrender"},1944:e=>{e.exports="prerender"},2567:e=>{e.exports="render"},45864:e=>{e.exports="resize"},37710:(e,t,s)=>{e.exports={POST_RENDER:s(90581),PRE_RENDER:s(1944),RENDER:s(2567),RESIZE:s(45864)}}}]);