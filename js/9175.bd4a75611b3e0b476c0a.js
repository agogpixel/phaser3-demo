/*! For license information please see 9175.bd4a75611b3e0b476c0a.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[9175],{79175:(t,i,h)=>{var s=h(69186),e=h(2543),r=h(72646),u=new s({initialize:function(t,i,h,s,e,r,u){this.texture=t,this.name=i,this.source=t.source[h],this.sourceIndex=h,this.glTexture=this.source.glTexture,this.cutX,this.cutY,this.cutWidth,this.cutHeight,this.x=0,this.y=0,this.width,this.height,this.halfWidth,this.halfHeight,this.centerX,this.centerY,this.pivotX=0,this.pivotY=0,this.customPivot=!1,this.rotated=!1,this.autoRound=-1,this.customData={},this.u0=0,this.v0=0,this.u1=0,this.v1=0,this.data={cut:{x:0,y:0,w:0,h:0,r:0,b:0},trim:!1,sourceSize:{w:0,h:0},spriteSourceSize:{x:0,y:0,w:0,h:0,r:0,b:0},radius:0,drawImage:{x:0,y:0,width:0,height:0}},this.setSize(r,u,s,e)},setSize:function(t,i,h,s){void 0===h&&(h=0),void 0===s&&(s=0),this.cutX=h,this.cutY=s,this.cutWidth=t,this.cutHeight=i,this.width=t,this.height=i,this.halfWidth=Math.floor(.5*t),this.halfHeight=Math.floor(.5*i),this.centerX=Math.floor(t/2),this.centerY=Math.floor(i/2);var e=this.data,r=e.cut;r.x=h,r.y=s,r.w=t,r.h=i,r.r=h+t,r.b=s+i,e.sourceSize.w=t,e.sourceSize.h=i,e.spriteSourceSize.w=t,e.spriteSourceSize.h=i,e.radius=.5*Math.sqrt(t*t+i*i);var u=e.drawImage;return u.x=h,u.y=s,u.width=t,u.height=i,this.updateUVs()},setTrim:function(t,i,h,s,e,r){var u=this.data,a=u.spriteSourceSize;return u.trim=!0,u.sourceSize.w=t,u.sourceSize.h=i,a.x=h,a.y=s,a.w=e,a.h=r,a.r=h+e,a.b=s+r,this.x=h,this.y=s,this.width=e,this.height=r,this.halfWidth=.5*e,this.halfHeight=.5*r,this.centerX=Math.floor(e/2),this.centerY=Math.floor(r/2),this.updateUVs()},setCropUVs:function(t,i,h,s,r,u,a){var c=this.cutX,n=this.cutY,o=this.cutWidth,d=this.cutHeight,g=this.realWidth,l=this.realHeight,f=c+(i=e(i,0,g)),w=n+(h=e(h,0,l)),x=s=e(s,0,g-i),v=r=e(r,0,l-h),m=this.data;if(m.trim){var p=m.spriteSourceSize,S=i+(s=e(s,0,o-i)),y=h+(r=e(r,0,d-h));if(p.r<i||p.b<h||p.x>S||p.y>y)f=0,w=0,x=0,v=0;else{var z=Math.max(p.x,i),M=Math.max(p.y,h),X=Math.min(p.r,S)-z,Y=Math.min(p.b,y)-M;x=X,v=Y,f=u?c+(o-(z-p.x)-X):c+(z-p.x),w=a?n+(d-(M-p.y)-Y):n+(M-p.y),i=z,h=M,s=X,r=Y}}else u&&(f=c+(o-i-s)),a&&(w=n+(d-h-r));var H=this.source.width,W=this.source.height;return t.u0=Math.max(0,f/H),t.v0=Math.max(0,w/W),t.u1=Math.min(1,(f+x)/H),t.v1=Math.min(1,(w+v)/W),t.x=i,t.y=h,t.cx=f,t.cy=w,t.cw=x,t.ch=v,t.width=s,t.height=r,t.flipX=u,t.flipY=a,t},updateCropUVs:function(t,i,h){return this.setCropUVs(t,t.x,t.y,t.width,t.height,i,h)},setUVs:function(t,i,h,s,e,r){var u=this.data.drawImage;return u.width=t,u.height=i,this.u0=h,this.v0=s,this.u1=e,this.v1=r,this},updateUVs:function(){var t=this.cutX,i=this.cutY,h=this.cutWidth,s=this.cutHeight,e=this.data.drawImage;e.width=h,e.height=s;var r=this.source.width,u=this.source.height;return this.u0=t/r,this.v0=i/u,this.u1=(t+h)/r,this.v1=(i+s)/u,this},updateUVsInverted:function(){var t=this.source.width,i=this.source.height;return this.u0=(this.cutX+this.cutHeight)/t,this.v0=this.cutY/i,this.u1=this.cutX/t,this.v1=(this.cutY+this.cutWidth)/i,this},clone:function(){var t=new u(this.texture,this.name,this.sourceIndex);return t.cutX=this.cutX,t.cutY=this.cutY,t.cutWidth=this.cutWidth,t.cutHeight=this.cutHeight,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t.halfWidth=this.halfWidth,t.halfHeight=this.halfHeight,t.centerX=this.centerX,t.centerY=this.centerY,t.rotated=this.rotated,t.data=r(!0,t.data,this.data),t.updateUVs(),t},destroy:function(){this.source=null,this.texture=null,this.glTexture=null,this.customData=null,this.data=null},realWidth:{get:function(){return this.data.sourceSize.w}},realHeight:{get:function(){return this.data.sourceSize.h}},radius:{get:function(){return this.data.radius}},trimmed:{get:function(){return this.data.trim}},canvasData:{get:function(){return this.data.drawImage}}});t.exports=u}}]);