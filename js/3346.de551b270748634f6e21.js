/*! For license information please see 3346.de551b270748634f6e21.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[3346],{2543:t=>{t.exports=function(t,n,r){return Math.max(n,Math.min(r,t))}},23407:(t,n,r)=>{var o=r(80925);t.exports=function(t){return t*o.DEG_TO_RAD}},6704:t=>{t.exports=function(t,n,r){var o=r-n;return n+((t-n)%o+o)%o}},55512:t=>{t.exports=function(t,n){return void 0===n&&(n=1.70158),t*t*((n+1)*t-n)}},21341:t=>{t.exports=function(t,n){void 0===n&&(n=1.70158);var r=1.525*n;return(t*=2)<1?t*t*((r+1)*t-r)*.5:.5*((t-=2)*t*((r+1)*t+r)+2)}},5376:t=>{t.exports=function(t,n){return void 0===n&&(n=1.70158),--t*t*((n+1)*t+n)+1}},18978:(t,n,r)=>{t.exports={In:r(55512),Out:r(5376),InOut:r(21341)}},33033:t=>{t.exports=function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}},72311:t=>{t.exports=function(t){var n=!1;return t<.5?(t=1-2*t,n=!0):t=2*t-1,t<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,n?.5*(1-t):.5*t+.5}},35394:t=>{t.exports=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},47232:(t,n,r)=>{t.exports={In:r(33033),Out:r(35394),InOut:r(72311)}},81324:t=>{t.exports=function(t){return 1-Math.sqrt(1-t*t)}},16284:t=>{t.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},95348:t=>{t.exports=function(t){return Math.sqrt(1- --t*t)}},57916:(t,n,r)=>{t.exports={In:r(81324),Out:r(95348),InOut:r(16284)}},35573:t=>{t.exports=function(t){return t*t*t}},10947:t=>{t.exports=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},4086:t=>{t.exports=function(t){return--t*t*t+1}},61189:(t,n,r)=>{t.exports={In:r(35573),Out:r(4086),InOut:r(10947)}},55198:t=>{t.exports=function(t,n,r){if(void 0===n&&(n=.1),void 0===r&&(r=.1),0===t)return 0;if(1===t)return 1;var o=r/4;return n<1?n=1:o=r*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-o)*(2*Math.PI)/r)}},41014:t=>{t.exports=function(t,n,r){if(void 0===n&&(n=.1),void 0===r&&(r=.1),0===t)return 0;if(1===t)return 1;var o=r/4;return n<1?n=1:o=r*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-o)*(2*Math.PI)/r)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-o)*(2*Math.PI)/r)*.5+1}},70967:t=>{t.exports=function(t,n,r){if(void 0===n&&(n=.1),void 0===r&&(r=.1),0===t)return 0;if(1===t)return 1;var o=r/4;return n<1?n=1:o=r*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-o)*(2*Math.PI)/r)+1}},43121:(t,n,r)=>{t.exports={In:r(55198),Out:r(70967),InOut:r(41014)}},39705:t=>{t.exports=function(t){return Math.pow(2,10*(t-1))-.001}},26854:t=>{t.exports=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))}},13202:t=>{t.exports=function(t){return 1-Math.pow(2,-10*t)}},85653:(t,n,r)=>{t.exports={In:r(39705),Out:r(13202),InOut:r(26854)}},67823:t=>{t.exports=function(t){return t}},49336:(t,n,r)=>{t.exports=r(67823)},10111:t=>{t.exports=function(t){return t*t}},17596:t=>{t.exports=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},39467:t=>{t.exports=function(t){return t*(2-t)}},79696:(t,n,r)=>{t.exports={In:r(10111),Out:r(39467),InOut:r(17596)}},16880:t=>{t.exports=function(t){return t*t*t*t}},45827:t=>{t.exports=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},7953:t=>{t.exports=function(t){return 1- --t*t*t*t}},1082:(t,n,r)=>{t.exports={In:r(16880),Out:r(7953),InOut:r(45827)}},76389:t=>{t.exports=function(t){return t*t*t*t*t}},1828:t=>{t.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},21840:t=>{t.exports=function(t){return--t*t*t*t*t+1}},12073:(t,n,r)=>{t.exports={In:r(76389),Out:r(21840),InOut:r(1828)}},20771:t=>{t.exports=function(t){return 0===t?0:1===t?1:1-Math.cos(t*Math.PI/2)}},84600:t=>{t.exports=function(t){return 0===t?0:1===t?1:.5*(1-Math.cos(Math.PI*t))}},34819:t=>{t.exports=function(t){return 0===t?0:1===t?1:Math.sin(t*Math.PI/2)}},7884:(t,n,r)=>{t.exports={In:r(20771),Out:r(34819),InOut:r(84600)}},25273:t=>{t.exports=function(t,n){return void 0===n&&(n=1),t<=0?0:t>=1?1:1/n*(1+(n*t|0))}},46113:(t,n,r)=>{t.exports=r(25273)}}]);