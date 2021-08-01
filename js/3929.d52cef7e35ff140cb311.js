/*! For license information please see 3929.d52cef7e35ff140cb311.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[3929],{43929:(t,i,s)=>{var e=s(69186),r=s(19506),n=s(23407),h=s(26729),o=s(26088),a=s(75380),u=s(9329),c=s(58909),l=s(17321),d=new e({Extends:h,Mixins:[r.Alpha,r.Visible],initialize:function(t,i,s,e){void 0===t&&(t=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===e&&(e=0),h.call(this),this.scene,this.sceneManager,this.scaleManager,this.cameraManager,this.id=0,this.name="",this.roundPixels=!1,this.useBounds=!1,this.worldView=new a,this.dirty=!0,this._x=t,this._y=i,this._width=s,this._height=e,this._bounds=new a,this._scrollX=0,this._scrollY=0,this._zoomX=1,this._zoomY=1,this._rotation=0,this.matrix=new u,this.transparent=!0,this.backgroundColor=c("rgba(0,0,0,0)"),this.disableCull=!1,this.culledObjects=[],this.midPoint=new l(s/2,e/2),this.originX=.5,this.originY=.5,this._customViewport=!1,this.mask=null,this._maskCamera=null,this.renderList=[]},addToRenderList:function(t){this.renderList.push(t)},setOrigin:function(t,i){return void 0===t&&(t=.5),void 0===i&&(i=t),this.originX=t,this.originY=i,this},getScroll:function(t,i,s){void 0===s&&(s=new l);var e=.5*this.width,r=.5*this.height;return s.x=t-e,s.y=i-r,this.useBounds&&(s.x=this.clampX(s.x),s.y=this.clampY(s.y)),s},centerOnX:function(t){var i=.5*this.width;return this.midPoint.x=t,this.scrollX=t-i,this.useBounds&&(this.scrollX=this.clampX(this.scrollX)),this},centerOnY:function(t){var i=.5*this.height;return this.midPoint.y=t,this.scrollY=t-i,this.useBounds&&(this.scrollY=this.clampY(this.scrollY)),this},centerOn:function(t,i){return this.centerOnX(t),this.centerOnY(i),this},centerToBounds:function(){if(this.useBounds){var t=this._bounds,i=.5*this.width,s=.5*this.height;this.midPoint.set(t.centerX,t.centerY),this.scrollX=t.centerX-i,this.scrollY=t.centerY-s}return this},centerToSize:function(){return this.scrollX=.5*this.width,this.scrollY=.5*this.height,this},cull:function(t){if(this.disableCull)return t;var i=this.matrix.matrix,s=i[0],e=i[1],r=i[2],n=i[3],h=s*n-e*r;if(!h)return t;var o=i[4],a=i[5],u=this.scrollX,c=this.scrollY,l=this.width,d=this.height,g=this.y,m=g+d,f=this.x,p=f+l,_=this.culledObjects,v=t.length;h=1/h,_.length=0;for(var w=0;w<v;++w){var y=t[w];if(y.hasOwnProperty("width")&&!y.parentContainer){var x=y.width,Y=y.height,X=y.x-u*y.scrollFactorX-x*y.originX,b=y.y-c*y.scrollFactorY-Y*y.originY;(X+x)*s+(b+Y)*r+o>f&&X*s+b*r+o<p&&(X+x)*e+(b+Y)*n+a>g&&X*e+b*n+a<m&&_.push(y)}else _.push(y)}return _},getWorldPoint:function(t,i,s){void 0===s&&(s=new l);var e=this.matrix.matrix,r=e[0],n=e[1],h=e[2],o=e[3],a=e[4],u=e[5],c=r*o-n*h;if(!c)return s.x=t,s.y=i,s;var d=o*(c=1/c),g=-n*c,m=-h*c,f=r*c,p=(h*u-o*a)*c,_=(n*a-r*u)*c,v=Math.cos(this.rotation),w=Math.sin(this.rotation),y=this.zoomX,x=this.zoomY,Y=this.scrollX,X=this.scrollY,b=t+(Y*v-X*w)*y,z=i+(Y*w+X*v)*x;return s.x=b*d+z*m+p,s.y=b*g+z*f+_,s},ignore:function(t){var i=this.id;Array.isArray(t)||(t=[t]);for(var s=0;s<t.length;s++){var e=t[s];Array.isArray(e)?this.ignore(e):e.isParent?this.ignore(e.getChildren()):e.cameraFilter|=i}return this},preRender:function(){this.renderList.length=0;var t=this.width,i=this.height,s=.5*t,e=.5*i,r=this.zoomX,n=this.zoomY,h=this.matrix,o=t*this.originX,a=i*this.originY,u=this.scrollX,c=this.scrollY;this.useBounds&&(u=this.clampX(u),c=this.clampY(c)),this.roundPixels&&(o=Math.round(o),a=Math.round(a)),this.scrollX=u,this.scrollY=c;var l=u+s,d=c+e;this.midPoint.set(l,d);var g=t/r,m=i/n;this.worldView.setTo(l-g/2,d-m/2,g,m),h.applyITRS(this.x+o,this.y+a,this.rotation,r,n),h.translate(-o,-a)},clampX:function(t){var i=this._bounds,s=this.displayWidth,e=i.x+(s-this.width)/2,r=Math.max(e,e+i.width-s);return t<e?t=e:t>r&&(t=r),t},clampY:function(t){var i=this._bounds,s=this.displayHeight,e=i.y+(s-this.height)/2,r=Math.max(e,e+i.height-s);return t<e?t=e:t>r&&(t=r),t},removeBounds:function(){return this.useBounds=!1,this.dirty=!0,this._bounds.setEmpty(),this},setAngle:function(t){return void 0===t&&(t=0),this.rotation=n(t),this},setBackgroundColor:function(t){return void 0===t&&(t="rgba(0,0,0,0)"),this.backgroundColor=c(t),this.transparent=0===this.backgroundColor.alpha,this},setBounds:function(t,i,s,e,r){return void 0===r&&(r=!1),this._bounds.setTo(t,i,s,e),this.dirty=!0,this.useBounds=!0,r?this.centerToBounds():(this.scrollX=this.clampX(this.scrollX),this.scrollY=this.clampY(this.scrollY)),this},getBounds:function(t){void 0===t&&(t=new a);var i=this._bounds;return t.setTo(i.x,i.y,i.width,i.height),t},setName:function(t){return void 0===t&&(t=""),this.name=t,this},setPosition:function(t,i){return void 0===i&&(i=t),this.x=t,this.y=i,this},setRotation:function(t){return void 0===t&&(t=0),this.rotation=t,this},setRoundPixels:function(t){return this.roundPixels=t,this},setScene:function(t){this.scene&&this._customViewport&&this.sceneManager.customViewports--,this.scene=t;var i=t.sys;return this.sceneManager=i.game.scene,this.scaleManager=i.scale,this.cameraManager=i.cameras,this.updateSystem(),this},setScroll:function(t,i){return void 0===i&&(i=t),this.scrollX=t,this.scrollY=i,this},setSize:function(t,i){return void 0===i&&(i=t),this.width=t,this.height=i,this},setViewport:function(t,i,s,e){return this.x=t,this.y=i,this.width=s,this.height=e,this},setZoom:function(t,i){return void 0===t&&(t=1),void 0===i&&(i=t),0===t&&(t=.001),0===i&&(i=.001),this.zoomX=t,this.zoomY=i,this},setMask:function(t,i){return void 0===i&&(i=!0),this.mask=t,this._maskCamera=i?this.cameraManager.default:this,this},clearMask:function(t){return void 0===t&&(t=!1),t&&this.mask&&this.mask.destroy(),this.mask=null,this},toJSON:function(){var t={name:this.name,x:this.x,y:this.y,width:this.width,height:this.height,zoom:this.zoom,rotation:this.rotation,roundPixels:this.roundPixels,scrollX:this.scrollX,scrollY:this.scrollY,backgroundColor:this.backgroundColor.rgba};return this.useBounds&&(t.bounds={x:this._bounds.x,y:this._bounds.y,width:this._bounds.width,height:this._bounds.height}),t},update:function(){},updateSystem:function(){if(this.scaleManager){var t=0!==this._x||0!==this._y||this.scaleManager.width!==this._width||this.scaleManager.height!==this._height,i=this.sceneManager;t&&!this._customViewport?i.customViewports++:!t&&this._customViewport&&i.customViewports--,this.dirty=!0,this._customViewport=t}},destroy:function(){this.emit(o.DESTROY,this),this.removeAllListeners(),this.matrix.destroy(),this.culledObjects=[],this._customViewport&&this.sceneManager.customViewports--,this.renderList=[],this._bounds=null,this.scene=null,this.scaleManager=null,this.sceneManager=null,this.cameraManager=null},x:{get:function(){return this._x},set:function(t){this._x=t,this.updateSystem()}},y:{get:function(){return this._y},set:function(t){this._y=t,this.updateSystem()}},width:{get:function(){return this._width},set:function(t){this._width=t,this.updateSystem()}},height:{get:function(){return this._height},set:function(t){this._height=t,this.updateSystem()}},scrollX:{get:function(){return this._scrollX},set:function(t){this._scrollX=t,this.dirty=!0}},scrollY:{get:function(){return this._scrollY},set:function(t){this._scrollY=t,this.dirty=!0}},zoom:{get:function(){return(this._zoomX+this._zoomY)/2},set:function(t){this._zoomX=t,this._zoomY=t,this.dirty=!0}},zoomX:{get:function(){return this._zoomX},set:function(t){this._zoomX=t,this.dirty=!0}},zoomY:{get:function(){return this._zoomY},set:function(t){this._zoomY=t,this.dirty=!0}},rotation:{get:function(){return this._rotation},set:function(t){this._rotation=t,this.dirty=!0}},centerX:{get:function(){return this.x+.5*this.width}},centerY:{get:function(){return this.y+.5*this.height}},displayWidth:{get:function(){return this.width/this.zoomX}},displayHeight:{get:function(){return this.height/this.zoomY}}});t.exports=d},65435:(t,i,s)=>{var e=s(13499);t.exports=function(t){var i=new e;t=t.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,i,s,e){return i+i+s+s+e+e}));var s=/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(s){var r=parseInt(s[1],16),n=parseInt(s[2],16),h=parseInt(s[3],16);i.setTo(r,n,h)}return i}},57284:(t,i,s)=>{var e=s(13499),r=s(3382);t.exports=function(t){var i=r(t);return new e(i.r,i.g,i.b,i.a)}},3382:t=>{t.exports=function(t){return t>16777215?{a:t>>>24,r:t>>16&255,g:t>>8&255,b:255&t}:{a:255,r:t>>16&255,g:t>>8&255,b:255&t}}},37684:(t,i,s)=>{var e=s(13499);t.exports=function(t){return new e(t.r,t.g,t.b,t.a)}},33548:(t,i,s)=>{var e=s(13499);t.exports=function(t){var i=new e,s=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(t.toLowerCase());if(s){var r=parseInt(s[1],10),n=parseInt(s[2],10),h=parseInt(s[3],10),o=void 0!==s[4]?parseFloat(s[4]):1;i.setTo(r,n,h,255*o)}return i}},58909:(t,i,s)=>{var e=s(65435),r=s(57284),n=s(37684),h=s(33548);t.exports=function(t){switch(typeof t){case"string":return"rgb"===t.substr(0,3).toLowerCase()?h(t):e(t);case"number":return r(t);case"object":return n(t)}}}}]);