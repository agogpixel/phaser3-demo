/*! For license information please see 2941.aacfb9aa9aabff30c407.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[2941],{92941:(t,e,s)=>{var i=s(69186),r=s(82461),n=new i({initialize:function(t,e){this.parent=t,this.events=e,e||(this.events=t.events?t.events:t),this.list={},this.values={},this._frozen=!1,!t.hasOwnProperty("sys")&&this.events&&this.events.once(r.DESTROY,this.destroy,this)},get:function(t){var e=this.list;if(Array.isArray(t)){for(var s=[],i=0;i<t.length;i++)s.push(e[t[i]]);return s}return e[t]},getAll:function(){var t={};for(var e in this.list)this.list.hasOwnProperty(e)&&(t[e]=this.list[e]);return t},query:function(t){var e={};for(var s in this.list)this.list.hasOwnProperty(s)&&s.match(t)&&(e[s]=this.list[s]);return e},set:function(t,e){if(this._frozen)return this;if("string"==typeof t)return this.setValue(t,e);for(var s in t)this.setValue(s,t[s]);return this},inc:function(t,e){if(this._frozen)return this;void 0===e&&(e=1);var s=this.get(t);return void 0===s&&(s=0),this.set(t,s+e),this},toggle:function(t){return this._frozen||this.set(t,!this.get(t)),this},setValue:function(t,e){if(this._frozen)return this;if(this.has(t))this.values[t]=e;else{var s=this,i=this.list,n=this.events,h=this.parent;Object.defineProperty(this.values,t,{enumerable:!0,configurable:!0,get:function(){return i[t]},set:function(e){if(!s._frozen){var o=i[t];i[t]=e,n.emit(r.CHANGE_DATA,h,t,e,o),n.emit(r.CHANGE_DATA_KEY+t,h,e,o)}}}),i[t]=e,n.emit(r.SET_DATA,h,t,e)}return this},each:function(t,e){for(var s=[this.parent,null,void 0],i=1;i<arguments.length;i++)s.push(arguments[i]);for(var r in this.list)s[1]=r,s[2]=this.list[r],t.apply(e,s);return this},merge:function(t,e){for(var s in void 0===e&&(e=!0),t)t.hasOwnProperty(s)&&(e||!e&&!this.has(s))&&this.setValue(s,t[s]);return this},remove:function(t){if(this._frozen)return this;if(!Array.isArray(t))return this.removeValue(t);for(var e=0;e<t.length;e++)this.removeValue(t[e]);return this},removeValue:function(t){if(this.has(t)){var e=this.list[t];delete this.list[t],delete this.values[t],this.events.emit(r.REMOVE_DATA,this.parent,t,e)}return this},pop:function(t){var e=void 0;return!this._frozen&&this.has(t)&&(e=this.list[t],delete this.list[t],delete this.values[t],this.events.emit(r.REMOVE_DATA,this.parent,t,e)),e},has:function(t){return this.list.hasOwnProperty(t)},setFreeze:function(t){return this._frozen=t,this},reset:function(){for(var t in this.list)delete this.list[t],delete this.values[t];return this._frozen=!1,this},destroy:function(){this.reset(),this.events.off(r.CHANGE_DATA),this.events.off(r.SET_DATA),this.events.off(r.REMOVE_DATA),this.parent=null},freeze:{get:function(){return this._frozen},set:function(t){this._frozen=!!t}},count:{get:function(){var t=0;for(var e in this.list)void 0!==this.list[e]&&t++;return t}}});t.exports=n},13378:t=>{t.exports="changedata"},23922:t=>{t.exports="changedata-"},99928:t=>{t.exports="destroy"},74393:t=>{t.exports="removedata"},1582:t=>{t.exports="setdata"},82461:(t,e,s)=>{t.exports={CHANGE_DATA:s(13378),CHANGE_DATA_KEY:s(23922),DESTROY:s(99928),REMOVE_DATA:s(74393),SET_DATA:s(1582)}}}]);