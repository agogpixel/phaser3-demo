/*! For license information please see phaser-structs.c2e5997f061fd81967a3.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[3117],{26729:t=>{"use strict";var n=Object.prototype.hasOwnProperty,e="~";function i(){}function r(t,n,e){this.fn=t,this.context=n,this.once=e||!1}function s(t,n,i,s,o){if("function"!=typeof i)throw new TypeError("The listener must be a function");var h=new r(i,s||t,o),a=e?e+n:n;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],h]:t._events[a].push(h):(t._events[a]=h,t._eventsCount++),t}function o(t,n){0==--t._eventsCount?t._events=new i:delete t._events[n]}function h(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(e=!1)),h.prototype.eventNames=function(){var t,i,r=[];if(0===this._eventsCount)return r;for(i in t=this._events)n.call(t,i)&&r.push(e?i.slice(1):i);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},h.prototype.listeners=function(t){var n=e?e+t:t,i=this._events[n];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o},h.prototype.listenerCount=function(t){var n=e?e+t:t,i=this._events[n];return i?i.fn?1:i.length:0},h.prototype.emit=function(t,n,i,r,s,o){var h=e?e+t:t;if(!this._events[h])return!1;var a,l,u=this._events[h],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,n),!0;case 3:return u.fn.call(u.context,n,i),!0;case 4:return u.fn.call(u.context,n,i,r),!0;case 5:return u.fn.call(u.context,n,i,r,s),!0;case 6:return u.fn.call(u.context,n,i,r,s,o),!0}for(l=1,a=new Array(f-1);l<f;l++)a[l-1]=arguments[l];u.fn.apply(u.context,a)}else{var c,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,n);break;case 3:u[l].fn.call(u[l].context,n,i);break;case 4:u[l].fn.call(u[l].context,n,i,r);break;default:if(!a)for(c=1,a=new Array(f-1);c<f;c++)a[c-1]=arguments[c];u[l].fn.apply(u[l].context,a)}}return!0},h.prototype.on=function(t,n,e){return s(this,t,n,e,!1)},h.prototype.once=function(t,n,e){return s(this,t,n,e,!0)},h.prototype.removeListener=function(t,n,i,r){var s=e?e+t:t;if(!this._events[s])return this;if(!n)return o(this,s),this;var h=this._events[s];if(h.fn)h.fn!==n||r&&!h.once||i&&h.context!==i||o(this,s);else{for(var a=0,l=[],u=h.length;a<u;a++)(h[a].fn!==n||r&&!h[a].once||i&&h[a].context!==i)&&l.push(h[a]);l.length?this._events[s]=1===l.length?l[0]:l:o(this,s)}return this},h.prototype.removeAllListeners=function(t){var n;return t?(n=e?e+t:t,this._events[n]&&o(this,n)):(this._events=new i,this._eventsCount=0),this},h.prototype.off=h.prototype.removeListener,h.prototype.addListener=h.prototype.on,h.prefixed=e,h.EventEmitter=h,t.exports=h},2543:t=>{t.exports=function(t,n,e){return Math.max(n,Math.min(e,t))}},40496:t=>{t.exports=function(t){return t>0?Math.ceil(t):Math.floor(t)}},99e3:t=>{t.exports=function(t,n,e,i){return void 0===e&&(e=0),0===n?t:(t-=e,t=n*Math.floor(t/n),i?(e+t)/n:e+t)}},49469:(t,n,e)=>{var i=e(47205),r=e(69186),s=e(45733),o=e(46414),h=new r({initialize:function(t){this.parent=t,this.list=[],this.position=0,this.addCallback=s,this.removeCallback=s,this._sortKey=""},add:function(t,n){return n?i.Add(this.list,t):i.Add(this.list,t,0,this.addCallback,this)},addAt:function(t,n,e){return e?i.AddAt(this.list,t,n):i.AddAt(this.list,t,n,0,this.addCallback,this)},getAt:function(t){return this.list[t]},getIndex:function(t){return this.list.indexOf(t)},sort:function(t,n){return t?(void 0===n&&(n=function(n,e){return n[t]-e[t]}),o(this.list,n),this):this},getByName:function(t){return i.GetFirst(this.list,"name",t)},getRandom:function(t,n){return i.GetRandom(this.list,t,n)},getFirst:function(t,n,e,r){return i.GetFirst(this.list,t,n,e,r)},getAll:function(t,n,e,r){return i.GetAll(this.list,t,n,e,r)},count:function(t,n){return i.CountAllMatching(this.list,t,n)},swap:function(t,n){i.Swap(this.list,t,n)},moveTo:function(t,n){return i.MoveTo(this.list,t,n)},moveAbove:function(t,n){return i.MoveAbove(this.list,t,n)},moveBelow:function(t,n){return i.MoveBelow(this.list,t,n)},remove:function(t,n){return n?i.Remove(this.list,t):i.Remove(this.list,t,this.removeCallback,this)},removeAt:function(t,n){return n?i.RemoveAt(this.list,t):i.RemoveAt(this.list,t,this.removeCallback,this)},removeBetween:function(t,n,e){return e?i.RemoveBetween(this.list,t,n):i.RemoveBetween(this.list,t,n,this.removeCallback,this)},removeAll:function(t){for(var n=this.list.length;n--;)this.remove(this.list[n],t);return this},bringToTop:function(t){return i.BringToTop(this.list,t)},sendToBack:function(t){return i.SendToBack(this.list,t)},moveUp:function(t){return i.MoveUp(this.list,t),t},moveDown:function(t){return i.MoveDown(this.list,t),t},reverse:function(){return this.list.reverse(),this},shuffle:function(){return i.Shuffle(this.list),this},replace:function(t,n){return i.Replace(this.list,t,n)},exists:function(t){return this.list.indexOf(t)>-1},setAll:function(t,n,e,r){return i.SetAll(this.list,t,n,e,r),this},each:function(t,n){for(var e=[null],i=2;i<arguments.length;i++)e.push(arguments[i]);for(i=0;i<this.list.length;i++)e[0]=this.list[i],t.apply(n,e)},shutdown:function(){this.removeAll(),this.list=[]},destroy:function(){this.removeAll(),this.parent=null,this.addCallback=null,this.removeCallback=null},length:{get:function(){return this.list.length}},first:{get:function(){return this.position=0,this.list.length>0?this.list[0]:null}},last:{get:function(){return this.list.length>0?(this.position=this.list.length-1,this.list[this.position]):null}},next:{get:function(){return this.position<this.list.length?(this.position++,this.list[this.position]):null}},previous:{get:function(){return this.position>0?(this.position--,this.list[this.position]):null}}});t.exports=h},21342:(t,n,e)=>{var i=new(e(69186))({initialize:function(t){if(this.entries={},this.size=0,Array.isArray(t))for(var n=0;n<t.length;n++)this.set(t[n][0],t[n][1])},set:function(t,n){return this.has(t)||this.size++,this.entries[t]=n,this},get:function(t){if(this.has(t))return this.entries[t]},getArray:function(){var t=[],n=this.entries;for(var e in n)t.push(n[e]);return t},has:function(t){return this.entries.hasOwnProperty(t)},delete:function(t){return this.has(t)&&(delete this.entries[t],this.size--),this},clear:function(){return Object.keys(this.entries).forEach((function(t){delete this.entries[t]}),this),this.size=0,this},keys:function(){return Object.keys(this.entries)},values:function(){var t=[],n=this.entries;for(var e in n)t.push(n[e]);return t},dump:function(){var t=this.entries;for(var n in console.group("Map"),t)console.log(n,t[n]);console.groupEnd()},each:function(t){var n=this.entries;for(var e in n)if(!1===t(e,n[e]))break;return this},contains:function(t){var n=this.entries;for(var e in n)if(n[e]===t)return!0;return!1},merge:function(t,n){void 0===n&&(n=!1);var e=this.entries,i=t.entries;for(var r in i)e.hasOwnProperty(r)&&n?e[r]=i[r]:this.set(r,i[r]);return this}});t.exports=i},16632:(t,n,e)=>{var i=e(48885);function r(t){if(!(this instanceof r))return new r(t,[".left",".top",".right",".bottom"]);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()}function s(t,n,e){if(!e)return n.indexOf(t);for(var i=0;i<n.length;i++)if(e(t,n[i]))return i;return-1}function o(t,n){h(t,0,t.children.length,n,t)}function h(t,n,e,i,r){r||(r=v(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var s,o=n;o<e;o++)s=t.children[o],a(r,t.leaf?i(s):s);return r}function a(t,n){return t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY),t}function l(t,n){return t.minX-n.minX}function u(t,n){return t.minY-n.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function m(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function v(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(t,n,e,r,s){for(var o,h=[n,e];h.length;)(e=h.pop())-(n=h.pop())<=r||(o=n+Math.ceil((e-n)/r/2)*r,i(t,o,n,e,s),h.push(n,o,o,e))}r.prototype={all:function(){return this._all(this.data,[])},search:function(t){var n=this.data,e=[],i=this.toBBox;if(!m(t,n))return e;for(var r,s,o,h,a=[];n;){for(r=0,s=n.children.length;r<s;r++)o=n.children[r],m(t,h=n.leaf?i(o):o)&&(n.leaf?e.push(o):p(t,h)?this._all(o,e):a.push(o));n=a.pop()}return e},collides:function(t){var n=this.data,e=this.toBBox;if(!m(t,n))return!1;for(var i,r,s,o,h=[];n;){for(i=0,r=n.children.length;i<r;i++)if(s=n.children[i],m(t,o=n.leaf?e(s):s)){if(n.leaf||p(t,o))return!0;h.push(s)}n=h.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=v([]),this},remove:function(t,n){if(!t)return this;for(var e,i,r,o,h=this.data,a=this.toBBox(t),l=[],u=[];h||l.length;){if(h||(h=l.pop(),i=l[l.length-1],e=u.pop(),o=!0),h.leaf&&-1!==(r=s(t,h.children,n)))return h.children.splice(r,1),l.push(h),this._condense(l),this;o||h.leaf||!p(h,a)?i?(e++,h=i.children[e],o=!1):h=null:(l.push(h),u.push(e),e=0,i=h,h=h.children[0])}return this},toBBox:function(t){return t},compareMinX:l,compareMinY:u,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,n){for(var e=[];t;)t.leaf?n.push.apply(n,t.children):e.push.apply(e,t.children),t=e.pop();return n},_build:function(t,n,e,i){var r,s=e-n+1,h=this._maxEntries;if(s<=h)return o(r=v(t.slice(n,e+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/Math.pow(h,i-1))),(r=v([])).leaf=!1,r.height=i;var a,l,u,f,c=Math.ceil(s/h),p=c*Math.ceil(Math.sqrt(h));for(d(t,n,e,p,this.compareMinX),a=n;a<=e;a+=p)for(d(t,a,u=Math.min(a+p-1,e),c,this.compareMinY),l=a;l<=u;l+=c)f=Math.min(l+c-1,u),r.children.push(this._build(t,l,f,i-1));return o(r,this.toBBox),r},_chooseSubtree:function(t,n,e,i){for(var r,s,o,h,a,l,u,c,p,m;i.push(n),!n.leaf&&i.length-1!==e;){for(u=c=1/0,r=0,s=n.children.length;r<s;r++)a=f(o=n.children[r]),p=t,m=o,(l=(Math.max(m.maxX,p.maxX)-Math.min(m.minX,p.minX))*(Math.max(m.maxY,p.maxY)-Math.min(m.minY,p.minY))-a)<c?(c=l,u=a<u?a:u,h=o):l===c&&a<u&&(u=a,h=o);n=h||n.children[0]}return n},_insert:function(t,n,e){var i=this.toBBox,r=e?t:i(t),s=[],o=this._chooseSubtree(r,this.data,n,s);for(o.children.push(t),a(o,r);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(r,s,n)},_split:function(t,n){var e=t[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);var s=this._chooseSplitIndex(e,r,i),h=v(e.children.splice(s,e.children.length-s));h.height=e.height,h.leaf=e.leaf,o(e,this.toBBox),o(h,this.toBBox),n?t[n-1].children.push(h):this._splitRoot(e,h)},_splitRoot:function(t,n){this.data=v([t,n]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(t,n,e){var i,r,s,o,a,l,u,c,p,m,v,d,x,g;for(l=u=1/0,i=n;i<=e-n;i++)p=r=h(t,0,i,this.toBBox),m=s=h(t,i,e,this.toBBox),void 0,void 0,void 0,void 0,v=Math.max(p.minX,m.minX),d=Math.max(p.minY,m.minY),x=Math.min(p.maxX,m.maxX),g=Math.min(p.maxY,m.maxY),o=Math.max(0,x-v)*Math.max(0,g-d),a=f(r)+f(s),o<l?(l=o,c=i,u=a<u?a:u):o===l&&a<u&&(u=a,c=i);return c},_chooseSplitAxis:function(t,n,e){var i=t.leaf?this.compareMinX:l,r=t.leaf?this.compareMinY:u;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)},_allDistMargin:function(t,n,e,i){t.children.sort(i);var r,s,o=this.toBBox,l=h(t,0,n,o),u=h(t,e-n,e,o),f=c(l)+c(u);for(r=n;r<e-n;r++)s=t.children[r],a(l,t.leaf?o(s):s),f+=c(l);for(r=e-n-1;r>=n;r--)s=t.children[r],a(u,t.leaf?o(s):s),f+=c(u);return f},_adjustParentBBoxes:function(t,n,e){for(var i=e;i>=0;i--)a(n[i],t)},_condense:function(t){for(var n,e=t.length-1;e>=0;e--)0===t[e].children.length?e>0?(n=t[e-1].children).splice(n.indexOf(t[e]),1):this.clear():o(t[e],this.toBBox)},compareMinX:function(t,n){return t.left-n.left},compareMinY:function(t,n){return t.top-n.top},toBBox:function(t){return{minX:t.left,minY:t.top,maxX:t.right,maxY:t.bottom}}},t.exports=r},21466:(t,n,e)=>{t.exports={Events:e(71311),List:e(49469),Map:e(21342),ProcessQueue:e(48547),RTree:e(16632),Set:e(96609),Size:e(54762)}},45733:t=>{t.exports=function(){}},81712:t=>{t.exports=function(t,n,e){if(!n.length)return NaN;if(1===n.length)return n[0];var i,r,s=1;if(e){if(t<n[0][e])return n[0];for(;n[s][e]<t;)s++}else for(;n[s]<t;)s++;return s>n.length&&(s=n.length),e?(i=n[s-1][e],(r=n[s][e])-t<=t-i?n[s]:n[s-1]):(i=n[s-1],(r=n[s])-t<=t-i?r:i)}},63083:(t,n,e)=>{var i=e(28088);t.exports=function(t,n,e,r){var s;if(void 0===r&&(r=t),!Array.isArray(n))return-1!==(s=t.indexOf(n))?(i(t,s),e&&e.call(r,n),n):null;for(var o=n.length-1,h=[];o>=0;){var a=n[o];-1!==(s=t.indexOf(a))&&(i(t,s),h.push(a),e&&e.call(r,a)),o--}return h}},34383:t=>{t.exports=function(t,n){void 0===n&&(n=1);for(var e=null,i=0;i<n;i++)e=t.shift(),t.push(e);return e}},8405:t=>{t.exports=function(t,n){void 0===n&&(n=1);for(var e=null,i=0;i<n;i++)e=t.pop(),t.unshift(e);return e}},80675:t=>{t.exports=function(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),i=t[n];t[n]=t[e],t[e]=i}return t}},16068:t=>{t.exports=function(t){var n=/\D/g;return t.sort((function(t,e){return parseInt(t.replace(n,""),10)-parseInt(e.replace(n,""),10)})),t}},28088:t=>{t.exports=function(t,n){if(!(n>=t.length)){for(var e=t.length-1,i=t[n],r=n;r<e;r++)t[r]=t[r+1];return t.length=e,i}}},76076:t=>{t.exports=function(t,n,e){if(t&&"number"!=typeof t){if(t.hasOwnProperty(n))return t[n];if(-1!==n.indexOf(".")){for(var i=n.split("."),r=t,s=e,o=0;o<i.length;o++){if(!r.hasOwnProperty(i[o])){s=e;break}s=r[i[o]],r=r[i[o]]}return s}return e}return e}}}]);