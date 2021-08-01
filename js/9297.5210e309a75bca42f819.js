/*! For license information please see 9297.5210e309a75bca42f819.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[9297],{64634:e=>{"use strict";function n(e,n,i){i=i||2;var u,o,f,p,y,h,c,s=n&&n.length,g=s?n[0]*i:e.length,d=t(e,0,g,i,!0),Z=[];if(!d||d.next===d.prev)return Z;if(s&&(d=function(e,n,x,i){var u,o,f,p=[];for(u=0,o=n.length;u<o;u++)(f=t(e,n[u]*i,u<o-1?n[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),p.push(l(f));for(p.sort(v),u=0;u<p.length;u++)a(p[u],x),x=r(x,x.next);return x}(e,n,d,i)),e.length>80*i){u=f=e[0],o=p=e[1];for(var m=i;m<g;m+=i)(y=e[m])<u&&(u=y),(h=e[m+1])<o&&(o=h),y>f&&(f=y),h>p&&(p=h);c=0!==(c=Math.max(f-u,p-o))?1/c:0}return x(d,Z,i,u,o,c),Z}function t(e,n,t,r,x){var i,u;if(x===b(e,n,t,r)>0)for(i=n;i<t;i+=r)u=S(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=S(i,e[i],e[i+1],u);return u&&g(u,u.next)&&(T(u),u=u.next),u}function r(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!g(r,r.next)&&0!==s(r.prev,r,r.next))r=r.next;else{if(T(r),(r=n=r.prev)===r.next)break;t=!0}}while(t||r!==n);return n}function x(e,n,t,v,a,p,l){if(e){!l&&p&&function(e,n,t,r){var x=e;do{null===x.z&&(x.z=y(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var n,t,r,x,i,u,o,f,v=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,o=0,n=0;n<v&&(o++,r=r.nextZ);n++);for(f=v;o>0||f>0&&r;)0!==o&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,o--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,v*=2}while(u>1)}(x)}(e,v,a,p);for(var h,c,s=e;e.prev!==e.next;)if(h=e.prev,c=e.next,p?u(e,v,a,p):i(e))n.push(h.i/t),n.push(e.i/t),n.push(c.i/t),T(e),e=c.next,s=c.next;else if((e=c)===s){l?1===l?x(e=o(r(e),n,t),n,t,v,a,p,2):2===l&&f(e,n,t,v,a,p):x(r(e),n,t,v,a,p,1);break}}}function i(e){var n=e.prev,t=e,r=e.next;if(s(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(h(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&s(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function u(e,n,t,r){var x=e.prev,i=e,u=e.next;if(s(x,i,u)>=0)return!1;for(var o=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,v=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,a=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=y(o,f,n,t,r),l=y(v,a,n,t,r),c=e.prevZ,g=e.nextZ;c&&c.z>=p&&g&&g.z<=l;){if(c!==e.prev&&c!==e.next&&h(x.x,x.y,i.x,i.y,u.x,u.y,c.x,c.y)&&s(c.prev,c,c.next)>=0)return!1;if(c=c.prevZ,g!==e.prev&&g!==e.next&&h(x.x,x.y,i.x,i.y,u.x,u.y,g.x,g.y)&&s(g.prev,g,g.next)>=0)return!1;g=g.nextZ}for(;c&&c.z>=p;){if(c!==e.prev&&c!==e.next&&h(x.x,x.y,i.x,i.y,u.x,u.y,c.x,c.y)&&s(c.prev,c,c.next)>=0)return!1;c=c.prevZ}for(;g&&g.z<=l;){if(g!==e.prev&&g!==e.next&&h(x.x,x.y,i.x,i.y,u.x,u.y,g.x,g.y)&&s(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function o(e,n,t){var x=e;do{var i=x.prev,u=x.next.next;!g(i,u)&&d(i,x,x.next,u)&&M(i,u)&&M(u,i)&&(n.push(i.i/t),n.push(x.i/t),n.push(u.i/t),T(x),T(x.next),x=e=u),x=x.next}while(x!==e);return r(x)}function f(e,n,t,i,u,o){var f=e;do{for(var v=f.next.next;v!==f.prev;){if(f.i!==v.i&&c(f,v)){var a=w(f,v);return f=r(f,f.next),a=r(a,a.next),x(f,n,t,i,u,o),void x(a,n,t,i,u,o)}v=v.next}f=f.next}while(f!==e)}function v(e,n){return e.x-n.x}function a(e,n){if(n=function(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=x&&o>u){if(u=o,o===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,v=t,a=t.x,y=t.y,l=1/0;r=t;do{x>=r.x&&r.x>=a&&x!==r.x&&h(i<y?x:u,i,a,y,i<y?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),M(r,e)&&(f<l||f===l&&(r.x>t.x||r.x===t.x&&p(t,r)))&&(t=r,l=f)),r=r.next}while(r!==v);return t}(e,n)){var t=w(n,e);r(n,n.next),r(t,t.next)}}function p(e,n){return s(e.prev,e,n.prev)<0&&s(n.next,e,e.next)<0}function y(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function l(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function h(e,n,t,r,x,i,u,o){return(x-u)*(n-o)-(e-u)*(i-o)>=0&&(e-u)*(r-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(x-u)*(r-o)>=0}function c(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!function(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&d(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&(M(e,n)&&M(n,e)&&function(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}(e,n)&&(s(e.prev,e,n.prev)||s(e,n.prev,n))||g(e,n)&&s(e.prev,e,e.next)>0&&s(n.prev,n,n.next)>0)}function s(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function g(e,n){return e.x===n.x&&e.y===n.y}function d(e,n,t,r){var x=m(s(e,n,t)),i=m(s(e,n,r)),u=m(s(t,r,e)),o=m(s(t,r,n));return x!==i&&u!==o||!(0!==x||!Z(e,t,n))||!(0!==i||!Z(e,r,n))||!(0!==u||!Z(t,e,r))||!(0!==o||!Z(t,n,r))}function Z(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function M(e,n){return s(e.prev,e,e.next)<0?s(e,n,e.next)>=0&&s(e,e.prev,n)>=0:s(e,n,e.prev)<0||s(e,e.next,n)<0}function w(e,n){var t=new _(e.i,e.x,e.y),r=new _(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function S(e,n,t,r){var x=new _(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function T(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}n.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(b(e,0,i,t));if(x)for(var o=0,f=n.length;o<f;o++){var v=n[o]*t,a=o<f-1?n[o+1]*t:e.length;u-=Math.abs(b(e,v,a,t))}var p=0;for(o=0;o<r.length;o+=3){var y=r[o]*t,l=r[o+1]*t,h=r[o+2]*t;p+=Math.abs((e[y]-e[h])*(e[l+1]-e[y+1])-(e[y]-e[l])*(e[h+1]-e[y+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},n.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e.exports=n},64564:e=>{function n(e){for(var n="",t=0;t<e;++t)t>0&&(n+="\nelse "),t<e-1&&(n+="if(test == "+t+".0){}");return n}e.exports={getTintFromFloats:function(e,n,t,r){return((255&(255*r|0))<<24|(255&(255*e|0))<<16|(255&(255*n|0))<<8|255&(255*t|0))>>>0},getTintAppendFloatAlpha:function(e,n){return((255&(255*n|0))<<24|e)>>>0},getTintAppendFloatAlphaAndSwap:function(e,n){return((255&(255*n|0))<<24|(255&(0|e))<<16|(255&(e>>8|0))<<8|255&(e>>16|0))>>>0},getFloatsFromUintRGB:function(e){return[(255&(e>>16|0))/255,(255&(e>>8|0))/255,(255&(0|e))/255]},checkShaderMax:function(e,t){t&&-1!==t||(t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS));for(var r=e.createShader(e.FRAGMENT_SHADER),x=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join("\n");;){var i=x.replace(/%forloop%/gi,n(t));if(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))break;t=t/2|0}return t},parseFragmentShaderMaxTextures:function(e,n){if(!e)return"";for(var t="",r=0;r<n;r++)r>0&&(t+="\n\telse "),r<n-1&&(t+="if (outTexId < "+r+".5)"),t+="\n\t{",t+="\n\t\ttexture = texture2D(uMainSampler["+r+"], outTexCoord);",t+="\n\t}";return(e=e.replace(/%count%/gi,n.toString())).replace(/%forloop%/gi,t)}}}}]);