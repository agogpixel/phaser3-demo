/*! For license information please see 2772.0a44e3221f454a413279.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[2772],{81654:(r,o,e)=>{var t=e(55117);r.exports=function(r){void 0===r&&(r=1024);var o,e=[],n=255,a=255,s=0,u=0;for(o=0;o<=n;o++)e.push({r:a,g:o,b:u,color:t(a,o,u)});for(s=255,o=n;o>=0;o--)e.push({r:o,g:s,b:u,color:t(o,s,u)});for(a=0,o=0;o<=n;o++,s--)e.push({r:a,g:s,b:o,color:t(a,s,o)});for(s=0,u=255,o=0;o<=n;o++,u--,a++)e.push({r:a,g:s,b:u,color:t(a,s,u)});if(1024===r)return e;var i=[],p=0,f=1024/r;for(o=0;o<r;o++)i.push(e[Math.floor(p)]),p+=f;return i}},76503:r=>{r.exports=function(r){var o={r:r>>16&255,g:r>>8&255,b:255&r,a:255};return r>16777215&&(o.a=r>>>24),o}},60850:r=>{r.exports=function(r){var o=r.toString(16);return 1===o.length?"0"+o:o}},29782:(r,o,e)=>{var t=e(13499),n=e(84502);r.exports=function(r,o,e){var a=e,s=e,u=e;if(0!==o){var i=e<.5?e*(1+o):e+o-e*o,p=2*e-i;a=n(p,i,r+1/3),s=n(p,i,r),u=n(p,i,r-1/3)}return(new t).setGLTo(a,s,u,1)}},50432:(r,o,e)=>{var t=e(51457);r.exports=function(r,o){void 0===r&&(r=1),void 0===o&&(o=1);for(var e=[],n=0;n<=359;n++)e.push(t(n/359,r,o));return e}},65435:(r,o,e)=>{var t=e(13499);r.exports=function(r){var o=new t;r=r.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i,(function(r,o,e,t){return o+o+e+e+t+t}));var e=/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);if(e){var n=parseInt(e[1],16),a=parseInt(e[2],16),s=parseInt(e[3],16);o.setTo(n,a,s)}return o}},84502:r=>{r.exports=function(r,o,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(o-r)*e:e<.5?o:e<2/3?r+(o-r)*(2/3-e)*6:r}},57284:(r,o,e)=>{var t=e(13499),n=e(3382);r.exports=function(r){var o=n(r);return new t(o.r,o.g,o.b,o.a)}},3382:r=>{r.exports=function(r){return r>16777215?{a:r>>>24,r:r>>16&255,g:r>>8&255,b:255&r}:{a:255,r:r>>16&255,g:r>>8&255,b:255&r}}},47625:(r,o,e)=>{var t=e(3821),n=function(r,o,e,n,a,s,u,i){void 0===u&&(u=100),void 0===i&&(i=0);var p=i/u;return{r:t(r,n,p),g:t(o,a,p),b:t(e,s,p)}};r.exports={RGBWithRGB:n,ColorWithRGB:function(r,o,e,t,a,s){return void 0===a&&(a=100),void 0===s&&(s=0),n(r.r,r.g,r.b,o,e,t,a,s)},ColorWithColor:function(r,o,e,t){return void 0===e&&(e=100),void 0===t&&(t=0),n(r.r,r.g,r.b,o.r,o.g,o.b,e,t)}}},37684:(r,o,e)=>{var t=e(13499);r.exports=function(r){return new t(r.r,r.g,r.b,r.a)}},33548:(r,o,e)=>{var t=e(13499);r.exports=function(r){var o=new t,e=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(r.toLowerCase());if(e){var n=parseInt(e[1],10),a=parseInt(e[2],10),s=parseInt(e[3],10),u=void 0!==e[4]?parseFloat(e[4]):1;o.setTo(n,a,s,255*u)}return o}},92613:(r,o,e)=>{var t=e(60850);r.exports=function(r,o,e,n,a){return void 0===n&&(n=255),void 0===a&&(a="#"),"#"===a?"#"+((1<<24)+(r<<16)+(o<<8)+e).toString(16).slice(1,7):"0x"+t(n)+t(r)+t(o)+t(e)}},61039:(r,o,e)=>{var t=e(27019),n=e(13499);r.exports=function(r,o){return void 0===r&&(r=0),void 0===o&&(o=255),new n(t(r,o),t(r,o),t(r,o))}},58909:(r,o,e)=>{var t=e(65435),n=e(57284),a=e(37684),s=e(33548);r.exports=function(r){switch(typeof r){case"string":return"rgb"===r.substr(0,3).toLowerCase()?s(r):t(r);case"number":return n(r);case"object":return a(r)}}},80586:(r,o,e)=>{var t=e(13499);t.ColorSpectrum=e(81654),t.ColorToRGBA=e(76503),t.ComponentToHex=e(60850),t.GetColor=e(55117),t.GetColor32=e(29700),t.HexStringToColor=e(65435),t.HSLToColor=e(29782),t.HSVColorWheel=e(50432),t.HSVToRGB=e(51457),t.HueToComponent=e(84502),t.IntegerToColor=e(57284),t.IntegerToRGB=e(3382),t.Interpolate=e(47625),t.ObjectToColor=e(37684),t.RandomRGB=e(61039),t.RGBStringToColor=e(33548),t.RGBToHSV=e(31372),t.RGBToString=e(92613),t.ValueToColor=e(58909),r.exports=t},3821:r=>{r.exports=function(r,o,e){return(o-r)*e+r}},45733:r=>{r.exports=function(){}}}]);