/*! For license information please see 3499.99fcc9d05c9e9d084480.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[3499],{13499:(t,i,h)=>{var s=h(69186),n=h(55117),r=h(29700),o=h(51457),e=h(31372),a=new s({initialize:function(t,i,h,s){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===s&&(s=255),this.r=0,this.g=0,this.b=0,this.a=255,this._h=0,this._s=0,this._v=0,this._locked=!1,this.gl=[0,0,0,1],this._color=0,this._color32=0,this._rgba="",this.setTo(t,i,h,s)},transparent:function(){return this._locked=!0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this._locked=!1,this.update(!0)},setTo:function(t,i,h,s,n){return void 0===s&&(s=255),void 0===n&&(n=!0),this._locked=!0,this.red=t,this.green=i,this.blue=h,this.alpha=s,this._locked=!1,this.update(n)},setGLTo:function(t,i,h,s){return void 0===s&&(s=1),this._locked=!0,this.redGL=t,this.greenGL=i,this.blueGL=h,this.alphaGL=s,this._locked=!1,this.update(!0)},setFromRGB:function(t){return this._locked=!0,this.red=t.r,this.green=t.g,this.blue=t.b,t.hasOwnProperty("a")&&(this.alpha=t.a),this._locked=!1,this.update(!0)},setFromHSV:function(t,i,h){return o(t,i,h,this)},update:function(t){if(void 0===t&&(t=!1),this._locked)return this;var i=this.r,h=this.g,s=this.b,o=this.a;return this._color=n(i,h,s),this._color32=r(i,h,s,o),this._rgba="rgba("+i+","+h+","+s+","+o/255+")",t&&e(i,h,s,this),this},updateHSV:function(){var t=this.r,i=this.g,h=this.b;return e(t,i,h,this),this},clone:function(){return new a(this.r,this.g,this.b,this.a)},gray:function(t){return this.setTo(t,t,t)},random:function(t,i){void 0===t&&(t=0),void 0===i&&(i=255);var h=Math.floor(t+Math.random()*(i-t)),s=Math.floor(t+Math.random()*(i-t)),n=Math.floor(t+Math.random()*(i-t));return this.setTo(h,s,n)},randomGray:function(t,i){void 0===t&&(t=0),void 0===i&&(i=255);var h=Math.floor(t+Math.random()*(i-t));return this.setTo(h,h,h)},saturate:function(t){return this.s+=t/100,this},desaturate:function(t){return this.s-=t/100,this},lighten:function(t){return this.v+=t/100,this},darken:function(t){return this.v-=t/100,this},brighten:function(t){var i=this.r,h=this.g,s=this.b;return i=Math.max(0,Math.min(255,i-Math.round(-t/100*255))),h=Math.max(0,Math.min(255,h-Math.round(-t/100*255))),s=Math.max(0,Math.min(255,s-Math.round(-t/100*255))),this.setTo(i,h,s)},color:{get:function(){return this._color}},color32:{get:function(){return this._color32}},rgba:{get:function(){return this._rgba}},redGL:{get:function(){return this.gl[0]},set:function(t){this.gl[0]=Math.min(Math.abs(t),1),this.r=Math.floor(255*this.gl[0]),this.update(!0)}},greenGL:{get:function(){return this.gl[1]},set:function(t){this.gl[1]=Math.min(Math.abs(t),1),this.g=Math.floor(255*this.gl[1]),this.update(!0)}},blueGL:{get:function(){return this.gl[2]},set:function(t){this.gl[2]=Math.min(Math.abs(t),1),this.b=Math.floor(255*this.gl[2]),this.update(!0)}},alphaGL:{get:function(){return this.gl[3]},set:function(t){this.gl[3]=Math.min(Math.abs(t),1),this.a=Math.floor(255*this.gl[3]),this.update()}},red:{get:function(){return this.r},set:function(t){t=Math.floor(Math.abs(t)),this.r=Math.min(t,255),this.gl[0]=t/255,this.update(!0)}},green:{get:function(){return this.g},set:function(t){t=Math.floor(Math.abs(t)),this.g=Math.min(t,255),this.gl[1]=t/255,this.update(!0)}},blue:{get:function(){return this.b},set:function(t){t=Math.floor(Math.abs(t)),this.b=Math.min(t,255),this.gl[2]=t/255,this.update(!0)}},alpha:{get:function(){return this.a},set:function(t){t=Math.floor(Math.abs(t)),this.a=Math.min(t,255),this.gl[3]=t/255,this.update()}},h:{get:function(){return this._h},set:function(t){this._h=t,o(t,this._s,this._v,this)}},s:{get:function(){return this._s},set:function(t){this._s=t,o(this._h,t,this._v,this)}},v:{get:function(){return this._v},set:function(t){this._v=t,o(this._h,this._s,t,this)}}});t.exports=a},55117:t=>{t.exports=function(t,i,h){return t<<16|i<<8|h}},29700:t=>{t.exports=function(t,i,h,s){return s<<24|t<<16|i<<8|h}},51457:(t,i,h)=>{var s=h(55117);function n(t,i,h,s){var n=(t+6*i)%6,r=Math.min(n,4-n,1);return Math.round(255*(s-s*h*Math.max(0,r)))}t.exports=function(t,i,h,r){void 0===i&&(i=1),void 0===h&&(h=1);var o=n(5,t,i,h),e=n(3,t,i,h),a=n(1,t,i,h);return r?r.setTo?r.setTo(o,e,a,r.alpha,!1):(r.r=o,r.g=e,r.b=a,r.color=s(o,e,a),r):{r:o,g:e,b:a,color:s(o,e,a)}}},31372:t=>{t.exports=function(t,i,h,s){void 0===s&&(s={h:0,s:0,v:0}),t/=255,i/=255,h/=255;var n=Math.min(t,i,h),r=Math.max(t,i,h),o=r-n,e=0,a=0===r?0:o/r,u=r;return r!==n&&(r===t?e=(i-h)/o+(i<h?6:0):r===i?e=(h-t)/o+2:r===h&&(e=(t-i)/o+4),e/=6),s.hasOwnProperty("_h")?(s._h=e,s._s=a,s._v=u):(s.h=e,s.s=a,s.v=u),s}}}]);