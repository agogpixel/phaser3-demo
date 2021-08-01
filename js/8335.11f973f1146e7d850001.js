/*! For license information please see 8335.11f973f1146e7d850001.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[8335],{75795:t=>{t.exports=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0}},4244:(t,e,r)=>{var n=r(38459);t.exports=function(t){return new n(t.x,t.y,t.radius)}},31072:(t,e,r)=>{var n=r(57133);t.exports=function(t,e){return n(t,e.x,e.y)}},54851:(t,e,r)=>{var n=r(57133);t.exports=function(t,e){return n(t,e.x,e.y)&&n(t,e.right,e.y)&&n(t,e.x,e.bottom)&&n(t,e.right,e.bottom)}},44600:t=>{t.exports=function(t,e){return e.setTo(t.x,t.y,t.radius)}},40980:t=>{t.exports=function(t,e){return t.x===e.x&&t.y===e.y&&t.radius===e.radius}},70162:(t,e,r)=>{var n=r(75380);t.exports=function(t,e){return void 0===e&&(e=new n),e.x=t.left,e.y=t.top,e.width=t.diameter,e.height=t.diameter,e}},53652:t=>{t.exports=function(t,e,r){return t.x+=e,t.y+=r,t}},52460:t=>{t.exports=function(t,e){return t.x+=e.x,t.y+=e.y,t}},58056:(t,e,r)=>{var n=r(38459);n.Area=r(75795),n.Circumference=r(61458),n.CircumferencePoint=r(14741),n.Clone=r(4244),n.Contains=r(57133),n.ContainsPoint=r(31072),n.ContainsRect=r(54851),n.CopyFrom=r(44600),n.Equals=r(40980),n.GetBounds=r(70162),n.GetPoint=r(834),n.GetPoints=r(9007),n.Offset=r(53652),n.OffsetPoint=r(52460),n.Random=r(87764),t.exports=n},60908:t=>{t.exports=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI}},46681:(t,e,r)=>{var n=r(81385);t.exports=function(t){return new n(t.x,t.y,t.width,t.height)}},6500:(t,e,r)=>{var n=r(87016);t.exports=function(t,e){return n(t,e.x,e.y)}},73643:(t,e,r)=>{var n=r(87016);t.exports=function(t,e){return n(t,e.x,e.y)&&n(t,e.right,e.y)&&n(t,e.x,e.bottom)&&n(t,e.right,e.bottom)}},58816:t=>{t.exports=function(t,e){return e.setTo(t.x,t.y,t.width,t.height)}},96722:t=>{t.exports=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}},42390:(t,e,r)=>{var n=r(75380);t.exports=function(t,e){return void 0===e&&(e=new n),e.x=t.left,e.y=t.top,e.width=t.width,e.height=t.height,e}},41352:t=>{t.exports=function(t,e,r){return t.x+=e,t.y+=r,t}},8646:t=>{t.exports=function(t,e){return t.x+=e.x,t.y+=e.y,t}},81528:(t,e,r)=>{var n=r(81385);n.Area=r(60908),n.Circumference=r(65027),n.CircumferencePoint=r(97883),n.Clone=r(46681),n.Contains=r(87016),n.ContainsPoint=r(6500),n.ContainsRect=r(73643),n.CopyFrom=r(58816),n.Equals=r(96722),n.GetBounds=r(42390),n.GetPoint=r(38255),n.GetPoints=r(97911),n.Offset=r(41352),n.OffsetPoint=r(8646),n.Random=r(49620),t.exports=n},67449:(t,e,r)=>{var n=r(30097),i=r(72646),o={Circle:r(58056),Ellipse:r(81528),Intersects:r(33408),Line:r(77201),Mesh:r(61859),Point:r(36937),Polygon:r(10413),Rectangle:r(43550),Triangle:r(9379)};o=i(!1,o,n),t.exports=o},19357:(t,e,r)=>{var n=r(76914);t.exports=function(t,e){return n(t.x,t.y,e.x,e.y)<=t.radius+e.radius}},15375:(t,e,r)=>{var n=r(47978),i=r(19357);t.exports=function(t,e,r){if(void 0===r&&(r=[]),i(t,e)){var o,s,a,x,h=t.x,u=t.y,y=t.radius,f=e.x,c=e.y,v=e.radius;if(u===c)0==(a=(s=-2*c)*s-4*(o=1)*(f*f+(x=(v*v-y*y-f*f+h*h)/(2*(h-f)))*x-2*f*x+c*c-v*v))?r.push(new n(x,-s/(2*o))):a>0&&(r.push(new n(x,(-s+Math.sqrt(a))/(2*o))),r.push(new n(x,(-s-Math.sqrt(a))/(2*o))));else{var p=(h-f)/(u-c),l=(v*v-y*y-f*f+h*h-c*c+u*u)/(2*(u-c));0==(a=(s=2*u*p-2*l*p-2*h)*s-4*(o=p*p+1)*(h*h+u*u+l*l-y*y-2*u*l))?(x=-s/(2*o),r.push(new n(x,l-x*p))):a>0&&(x=(-s+Math.sqrt(a))/(2*o),r.push(new n(x,l-x*p)),x=(-s-Math.sqrt(a))/(2*o),r.push(new n(x,l-x*p)))}}return r}},65971:(t,e,r)=>{var n=r(3351),i=r(10882);t.exports=function(t,e,r){if(void 0===r&&(r=[]),i(t,e)){var o=e.getLineA(),s=e.getLineB(),a=e.getLineC(),x=e.getLineD();n(o,t,r),n(s,t,r),n(a,t,r),n(x,t,r)}return r}},3351:(t,e,r)=>{var n=r(47978),i=r(58595);t.exports=function(t,e,r){if(void 0===r&&(r=[]),i(t,e)){var o,s,a=t.x1,x=t.y1,h=t.x2,u=t.y2,y=e.x,f=e.y,c=e.radius,v=h-a,p=u-x,l=a-y,g=x-f,d=v*v+p*p,w=2*(v*l+p*g),m=w*w-4*d*(l*l+g*g-c*c);if(0===m){var M=-w/(2*d);o=a+M*v,s=x+M*p,M>=0&&M<=1&&r.push(new n(o,s))}else if(m>0){var C=(-w-Math.sqrt(m))/(2*d);o=a+C*v,s=x+C*p,C>=0&&C<=1&&r.push(new n(o,s));var b=(-w+Math.sqrt(m))/(2*d);o=a+b*v,s=x+b*p,b>=0&&b<=1&&r.push(new n(o,s))}}return r}},12694:(t,e,r)=>{var n=r(33736);t.exports=function(t,e,r){var i=t.x1,o=t.y1,s=t.x2,a=t.y2,x=e.x1,h=e.y1,u=s-i,y=a-o,f=e.x2-x,c=e.y2-h;if(0===u||0==c*u-f*y)return!1;var v=(u*(h-o)+y*(i-x))/(f*y-c*u),p=(x+f*v-i)/u;return p<0||v<0||v>1?null:(void 0===r&&(r=new n),r.set(i+u*p,o+y*p,p))}},27449:(t,e,r)=>{var n=r(33736),i=r(12694),o=new(r(97501)),s=new n;t.exports=function(t,e,r){void 0===r&&(r=new n);var a=!1;r.set(),s.set();for(var x=e[0],h=1;h<e.length;h++){var u=e[h];o.setTo(x.x,x.y,u.x,u.y),x=u,i(t,o,s)&&(!a||s.z<r.z)&&(r.copy(s),a=!0)}return a?r:null}},43608:(t,e,r)=>{var n=r(33736),i=r(37254),o=r(27449),s=new n;t.exports=function(t,e,r){void 0===r&&(r=new i),Array.isArray(e)||(e=[e]);var n=!1;r.set(),s.set();for(var a=0;a<e.length;a++)o(t,e[a].points,s)&&(!n||s.z<r.z)&&(r.set(s.x,s.y,s.z,a),n=!0);return n?r:null}},46894:(t,e,r)=>{var n=r(47978),i=r(70972),o=r(63352);t.exports=function(t,e,r){if(void 0===r&&(r=[]),o(t,e))for(var s=e.getLineA(),a=e.getLineB(),x=e.getLineC(),h=e.getLineD(),u=[new n,new n,new n,new n],y=[i(s,t,u[0]),i(a,t,u[1]),i(x,t,u[2]),i(h,t,u[3])],f=0;f<4;f++)y[f]&&r.push(u[f]);return r}},99783:(t,e,r)=>{var n=r(37254),i=r(43608),o=new(r(97501));function s(t,e,r,s,a){var x=Math.cos(t),h=Math.sin(t);o.setTo(e,r,e+x,r+h);var u=i(o,s);u&&a.push(new n(u.x,u.y,t,u.w))}function a(t,e){return t.z-e.z}t.exports=function(t,e,r){Array.isArray(r)||(r=[r]);for(var n=[],i=[],o=0;o<r.length;o++)for(var x=r[o].points,h=0;h<x.length;h++){var u=Math.atan2(x[h].y-e,x[h].x-t);-1===i.indexOf(u)&&(s(u,t,e,r,n),s(u-1e-5,t,e,r,n),s(u+1e-5,t,e,r,n),i.push(u))}return n.sort(a)}},89758:(t,e,r)=>{var n=r(75380),i=r(12402);t.exports=function(t,e,r){return void 0===r&&(r=new n),i(t,e)&&(r.x=Math.max(t.x,e.x),r.y=Math.max(t.y,e.y),r.width=Math.min(t.right,e.right)-r.x,r.height=Math.min(t.bottom,e.bottom)-r.y),r}},5574:(t,e,r)=>{var n=r(46894),i=r(12402);t.exports=function(t,e,r){if(void 0===r&&(r=[]),i(t,e)){var o=t.getLineA(),s=t.getLineB(),a=t.getLineC(),x=t.getLineD();n(o,e,r),n(s,e,r),n(a,e,r),n(x,e,r)}return r}},32346:(t,e,r)=>{var n=r(55299),i=r(46894);t.exports=function(t,e,r){if(void 0===r&&(r=[]),n(t,e)){var o=e.getLineA(),s=e.getLineB(),a=e.getLineC();i(o,t,r),i(s,t,r),i(a,t,r)}return r}},17634:(t,e,r)=>{var n=r(3351),i=r(77678);t.exports=function(t,e,r){if(void 0===r&&(r=[]),i(t,e)){var o=t.getLineA(),s=t.getLineB(),a=t.getLineC();n(o,e,r),n(s,e,r),n(a,e,r)}return r}},82217:(t,e,r)=>{var n=r(47978),i=r(70416),o=r(70972);t.exports=function(t,e,r){if(void 0===r&&(r=[]),i(t,e))for(var s=t.getLineA(),a=t.getLineB(),x=t.getLineC(),h=[new n,new n,new n],u=[o(s,e,h[0]),o(a,e,h[1]),o(x,e,h[2])],y=0;y<3;y++)u[y]&&r.push(h[y]);return r}},62331:(t,e,r)=>{var n=r(99460),i=r(82217);t.exports=function(t,e,r){if(void 0===r&&(r=[]),n(t,e)){var o=e.getLineA(),s=e.getLineB(),a=e.getLineC();i(t,o,r),i(t,s,r),i(t,a,r)}return r}},58595:(t,e,r)=>{var n=r(57133),i=new(r(47978));t.exports=function(t,e,r){if(void 0===r&&(r=i),n(e,t.x1,t.y1))return r.x=t.x1,r.y=t.y1,!0;if(n(e,t.x2,t.y2))return r.x=t.x2,r.y=t.y2,!0;var o=t.x2-t.x1,s=t.y2-t.y1,a=e.x-t.x1,x=e.y-t.y1,h=o*o+s*s,u=o,y=s;if(h>0){var f=(a*o+x*s)/h;u*=f,y*=f}return r.x=t.x1+u,r.y=t.y1+y,u*u+y*y<=h&&u*o+y*s>=0&&n(e,r.x,r.y)}},70972:(t,e,r)=>{var n=r(47978);t.exports=function(t,e,r){void 0===r&&(r=new n);var i=t.x1,o=t.y1,s=t.x2,a=t.y2,x=e.x1,h=e.y1,u=e.x2,y=e.y2,f=(y-h)*(s-i)-(u-x)*(a-o);if(0===f)return!1;var c=((u-x)*(o-h)-(y-h)*(i-x))/f,v=((s-i)*(o-h)-(a-o)*(i-x))/f;return c>=0&&c<=1&&v>=0&&v<=1&&(r.x=i+c*(s-i),r.y=o+c*(a-o),!0)}},63352:t=>{t.exports=function(t,e){var r=t.x1,n=t.y1,i=t.x2,o=t.y2,s=e.x,a=e.y,x=e.right,h=e.bottom,u=0;if(r>=s&&r<=x&&n>=a&&n<=h||i>=s&&i<=x&&o>=a&&o<=h)return!0;if(r<s&&i>=s){if((u=n+(o-n)*(s-r)/(i-r))>a&&u<=h)return!0}else if(r>x&&i<=x&&(u=n+(o-n)*(x-r)/(i-r))>=a&&u<=h)return!0;if(n<a&&o>=a){if((u=r+(i-r)*(a-n)/(o-n))>=s&&u<=x)return!0}else if(n>h&&o<=h&&(u=r+(i-r)*(h-n)/(o-n))>=s&&u<=x)return!0;return!1}},90424:t=>{t.exports=function(t,e,r){void 0===r&&(r=1);var n=e.x1,i=e.y1,o=e.x2,s=e.y2,a=t.x,x=t.y,h=(o-n)*(o-n)+(s-i)*(s-i);if(0===h)return!1;var u=((a-n)*(o-n)+(x-i)*(s-i))/h;if(u<0)return Math.sqrt((n-a)*(n-a)+(i-x)*(i-x))<=r;if(u>=0&&u<=1){var y=((i-x)*(o-n)-(n-a)*(s-i))/h;return Math.abs(y)*Math.sqrt(h)<=r}return Math.sqrt((o-a)*(o-a)+(s-x)*(s-x))<=r}},19169:(t,e,r)=>{var n=r(90424);t.exports=function(t,e){if(!n(t,e))return!1;var r=Math.min(e.x1,e.x2),i=Math.max(e.x1,e.x2),o=Math.min(e.y1,e.y2),s=Math.max(e.y1,e.y2);return t.x>=r&&t.x<=i&&t.y>=o&&t.y<=s}},12402:t=>{t.exports=function(t,e){return!(t.width<=0||t.height<=0||e.width<=0||e.height<=0||t.right<e.x||t.bottom<e.y||t.x>e.right||t.y>e.bottom)}},55299:(t,e,r)=>{var n=r(70972),i=r(26813),o=r(60509),s=r(53998);t.exports=function(t,e){if(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)return!1;var r=e.getLineA(),a=e.getLineB(),x=e.getLineC();if(i(t,r.x1,r.y1)||i(t,r.x2,r.y2))return!0;if(i(t,a.x1,a.y1)||i(t,a.x2,a.y2))return!0;if(i(t,x.x1,x.y1)||i(t,x.x2,x.y2))return!0;var h=t.getLineA(),u=t.getLineB(),y=t.getLineC(),f=t.getLineD();if(n(r,h)||n(r,u)||n(r,y)||n(r,f))return!0;if(n(a,h)||n(a,u)||n(a,y)||n(a,f))return!0;if(n(x,h)||n(x,u)||n(x,y)||n(x,f))return!0;var c=s(t);return o(e,c,!0).length>0}},54123:t=>{t.exports=function(t,e,r,n,i,o){return void 0===o&&(o=0),!(e>t.right+o||r<t.left-o||n>t.bottom+o||i<t.top-o)}},77678:(t,e,r)=>{var n=r(58595),i=r(90547);t.exports=function(t,e){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top||!i(t,e.x,e.y)&&!n(t.getLineA(),e)&&!n(t.getLineB(),e)&&!n(t.getLineC(),e))}},70416:(t,e,r)=>{var n=r(70972);t.exports=function(t,e){return!!(t.contains(e.x1,e.y1)||t.contains(e.x2,e.y2)||n(t.getLineA(),e)||n(t.getLineB(),e)||n(t.getLineC(),e))}},99460:(t,e,r)=>{var n=r(60509),i=r(48300),o=r(70972);t.exports=function(t,e){if(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)return!1;var r=t.getLineA(),s=t.getLineB(),a=t.getLineC(),x=e.getLineA(),h=e.getLineB(),u=e.getLineC();if(o(r,x)||o(r,h)||o(r,u))return!0;if(o(s,x)||o(s,h)||o(s,u))return!0;if(o(a,x)||o(a,h)||o(a,u))return!0;var y=i(t),f=n(e,y,!0);return f.length>0||(y=i(e),(f=n(t,y,!0)).length>0)}},33408:(t,e,r)=>{t.exports={CircleToCircle:r(19357),CircleToRectangle:r(10882),GetCircleToCircle:r(15375),GetCircleToRectangle:r(65971),GetLineToCircle:r(3351),GetLineToLine:r(12694),GetLineToPoints:r(27449),GetLineToPolygon:r(43608),GetLineToRectangle:r(46894),GetRaysFromPointToPolygon:r(99783),GetRectangleIntersection:r(89758),GetRectangleToRectangle:r(5574),GetRectangleToTriangle:r(32346),GetTriangleToCircle:r(17634),GetTriangleToLine:r(82217),GetTriangleToTriangle:r(62331),LineToCircle:r(58595),LineToLine:r(70972),LineToRectangle:r(63352),PointToLine:r(90424),PointToLineSegment:r(19169),RectangleToRectangle:r(12402),RectangleToTriangle:r(55299),RectangleToValues:r(54123),TriangleToCircle:r(77678),TriangleToLine:r(70416),TriangleToTriangle:r(99460)}},52256:t=>{t.exports=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)}},75981:t=>{t.exports=function(t,e,r){var n=e-(t.x1+t.x2)/2,i=r-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=i,t.x2+=n,t.y2+=i,t}},92451:(t,e,r)=>{var n=r(97501);t.exports=function(t){return new n(t.x1,t.y1,t.x2,t.y2)}},14715:t=>{t.exports=function(t,e){return e.setTo(t.x1,t.y1,t.x2,t.y2)}},53250:t=>{t.exports=function(t,e){return t.x1===e.x1&&t.y1===e.y1&&t.x2===e.x2&&t.y2===e.y2}},92593:(t,e,r)=>{var n=r(47064);t.exports=function(t,e,r){void 0===r&&(r=e);var i=n(t),o=t.x2-t.x1,s=t.y2-t.y1;return e&&(t.x1=t.x1-o/i*e,t.y1=t.y1-s/i*e),r&&(t.x2=t.x2+o/i*r,t.y2=t.y2+s/i*r),t}},25511:(t,e,r)=>{var n=r(21274),i=r(17232),o=r(47978);t.exports=function(t,e,r,s,a){void 0===s&&(s=0),void 0===a&&(a=[]);var x,h,u=[],y=t.x1,f=t.y1,c=t.x2-y,v=t.y2-f,p=i(e,a),l=r-1;for(x=0;x<l;x++)h=p(x/l),u.push(new o(y+c*h,f+v*h));if(h=p(1),u.push(new o(y+c*h,f+v*h)),s>0){var g=u[0],d=[g];for(x=1;x<u.length-1;x++){var w=u[x];n(g,w)>=s&&(d.push(w),g=w)}var m=u[u.length-1];return n(g,m)<s&&d.pop(),d.push(m),d}return u}},27797:(t,e,r)=>{var n=r(47978);t.exports=function(t,e){return void 0===e&&(e=new n),e.x=(t.x1+t.x2)/2,e.y=(t.y1+t.y2)/2,e}},24052:(t,e,r)=>{var n=r(47978);t.exports=function(t,e,r){void 0===r&&(r=new n);var i=t.x1,o=t.y1,s=t.x2,a=t.y2,x=(s-i)*(s-i)+(a-o)*(a-o);if(0===x)return r;var h=((e.x-i)*(s-i)+(e.y-o)*(a-o))/x;return r.x=i+h*(s-i),r.y=o+h*(a-o),r}},87047:(t,e,r)=>{var n=r(80925),i=r(52256),o=r(47978);t.exports=function(t,e){void 0===e&&(e=new o);var r=i(t)-n.TAU;return e.x=Math.cos(r),e.y=Math.sin(r),e}},65603:t=>{t.exports=function(t,e){var r=t.x1,n=t.y1,i=t.x2,o=t.y2,s=(i-r)*(i-r)+(o-n)*(o-n);if(0===s)return!1;var a=((n-e.y)*(i-r)-(r-e.x)*(o-n))/s;return Math.abs(a)*Math.sqrt(s)}},42204:t=>{t.exports=function(t){return Math.abs(t.y1-t.y2)}},24364:(t,e,r)=>{var n=r(80925),i=r(6704),o=r(52256);t.exports=function(t){var e=o(t)-n.TAU;return i(e,-Math.PI,Math.PI)}},36618:(t,e,r)=>{var n=r(80925),i=r(52256);t.exports=function(t){return Math.cos(i(t)-n.TAU)}},82233:(t,e,r)=>{var n=r(80925),i=r(52256);t.exports=function(t){return Math.sin(i(t)-n.TAU)}},8462:t=>{t.exports=function(t,e,r){return t.x1+=e,t.y1+=r,t.x2+=e,t.y2+=r,t}},22278:t=>{t.exports=function(t){return-(t.x2-t.x1)/(t.y2-t.y1)}},43531:(t,e,r)=>{var n=r(52256),i=r(24364);t.exports=function(t,e){return 2*i(e)-Math.PI-n(t)}},44394:(t,e,r)=>{var n=r(19972);t.exports=function(t,e){var r=(t.x1+t.x2)/2,i=(t.y1+t.y2)/2;return n(t,r,i,e)}},14608:(t,e,r)=>{var n=r(19972);t.exports=function(t,e,r){return n(t,e.x,e.y,r)}},19972:t=>{t.exports=function(t,e,r,n){var i=Math.cos(n),o=Math.sin(n),s=t.x1-e,a=t.y1-r;return t.x1=s*i-a*o+e,t.y1=s*o+a*i+r,s=t.x2-e,a=t.y2-r,t.x2=s*i-a*o+e,t.y2=s*o+a*i+r,t}},81115:t=>{t.exports=function(t,e,r,n,i){return t.x1=e,t.y1=r,t.x2=e+Math.cos(n)*i,t.y2=r+Math.sin(n)*i,t}},34566:t=>{t.exports=function(t){return(t.y2-t.y1)/(t.x2-t.x1)}},55103:t=>{t.exports=function(t){return Math.abs(t.x1-t.x2)}},77201:(t,e,r)=>{var n=r(97501);n.Angle=r(52256),n.BresenhamPoints=r(62579),n.CenterOn=r(75981),n.Clone=r(92451),n.CopyFrom=r(14715),n.Equals=r(53250),n.Extend=r(92593),n.GetEasedPoints=r(25511),n.GetMidPoint=r(27797),n.GetNearestPoint=r(24052),n.GetNormal=r(87047),n.GetPoint=r(64610),n.GetPoints=r(26299),n.GetShortestDistance=r(65603),n.Height=r(42204),n.Length=r(47064),n.NormalAngle=r(24364),n.NormalX=r(36618),n.NormalY=r(82233),n.Offset=r(8462),n.PerpSlope=r(22278),n.Random=r(57747),n.ReflectAngle=r(43531),n.Rotate=r(44394),n.RotateAroundPoint=r(14608),n.RotateAroundXY=r(19972),n.SetToAngle=r(81115),n.Slope=r(34566),n.Width=r(55103),t.exports=n},69295:(t,e,r)=>{var n=r(45934),i=r(25738),o=r(54259),s=r(33736),a=r(45978),x=new s,h=new s,u=new o;t.exports=function(t){var e=i(t,"mesh"),r=i(t,"texture",null),o=i(t,"frame"),s=i(t,"width",1),y=i(t,"height",s),f=i(t,"widthSegments",1),c=i(t,"heightSegments",f),v=i(t,"x",0),p=i(t,"y",0),l=i(t,"z",0),g=i(t,"rotateX",0),d=i(t,"rotateY",0),w=i(t,"rotateZ",0),m=i(t,"zIsUp",!0),M=i(t,"isOrtho",!!e&&e.dirtyCache[11]),C=i(t,"colors",[16777215]),b=i(t,"alphas",[1]),L=i(t,"tile",!1),T=i(t,"flipY",!1),z=i(t,"width",null),A={faces:[],verts:[]};if(x.set(v,p,l),h.set(g,d,w),u.fromRotationXYTranslation(h,x,m),!r&&e)r=e.texture;else{if(!e||"string"!=typeof r)return A;r=e.scene.sys.textures.get(r)}var P=r.get(o);!z&&M&&r&&e&&(s=P.width/e.height,y=P.height/e.height);var G,I,R=s/2,N=y/2,q=Math.floor(f),F=Math.floor(c),E=q+1,S=F+1,O=s/q,B=y/F,V=[],Y=[],k=0,_=1,U=0,X=1;P&&(k=P.u0,_=P.u1,T?(U=P.v1,X=P.v0):(U=P.v0,X=P.v1));var j=_-k,D=X-U;for(I=0;I<S;I++){var H=I*B-N;for(G=0;G<E;G++){var Q=G*O-R;Y.push(Q,-H);var W=k+j*(G/q),Z=U+D*(I/F);V.push(W,Z)}}Array.isArray(C)||(C=[C]),Array.isArray(b)||(b=[b]);var J=0,K=0;for(I=0;I<F;I++)for(G=0;G<q;G++){var $=2*(G+E*I),tt=2*(G+E*(I+1)),et=2*(G+1+E*(I+1)),rt=2*(G+1+E*I),nt=C[K],it=b[J],ot=new a(Y[$],Y[$+1],0,V[$],V[$+1],nt,it).transformMat4(u),st=new a(Y[tt],Y[tt+1],0,V[tt],V[tt+1],nt,it).transformMat4(u),at=new a(Y[rt],Y[rt+1],0,V[rt],V[rt+1],nt,it).transformMat4(u),xt=new a(Y[tt],Y[tt+1],0,V[tt],V[tt+1],nt,it).transformMat4(u),ht=new a(Y[et],Y[et+1],0,V[et],V[et+1],nt,it).transformMat4(u),ut=new a(Y[rt],Y[rt+1],0,V[rt],V[rt+1],nt,it).transformMat4(u);L&&(ot.setUVs(k,X),st.setUVs(k,U),at.setUVs(_,X),xt.setUVs(k,U),ht.setUVs(_,U),ut.setUVs(_,X)),++K===C.length&&(K=0),++J===b.length&&(J=0),A.verts.push(ot,st,at,xt,ht,ut),A.faces.push(new n(ot,st,at),new n(xt,ht,ut))}return e&&(e.faces=e.faces.concat(A.faces),e.vertices=e.vertices.concat(A.verts)),A}},11669:t=>{var e=!0,r="untitled",n="",i="";function o(t){return 0===t.models.length&&t.models.push({faces:[],name:r,textureCoords:[],vertexNormals:[],vertices:[]}),n="",t.models[t.models.length-1]}function s(t,e){var i=t.length>=2?t[1]:r;e.models.push({faces:[],name:i,textureCoords:[],vertexNormals:[],vertices:[]}),n=""}function a(t){2===t.length&&(n=t[1])}function x(t,e){var r=t.length,n=r>=2?parseFloat(t[1]):0,i=r>=3?parseFloat(t[2]):0,s=r>=4?parseFloat(t[3]):0;o(e).vertices.push({x:n,y:i,z:s})}function h(t,r){var n=t.length,i=n>=2?parseFloat(t[1]):0,s=n>=3?parseFloat(t[2]):0,a=n>=4?parseFloat(t[3]):0;isNaN(i)&&(i=0),isNaN(s)&&(s=0),isNaN(a)&&(a=0),e&&(s=1-s),o(r).textureCoords.push({u:i,v:s,w:a})}function u(t,e){var r=t.length,n=r>=2?parseFloat(t[1]):0,i=r>=3?parseFloat(t[2]):0,s=r>=4?parseFloat(t[3]):0;o(e).vertexNormals.push({x:n,y:i,z:s})}function y(t,e){var r=t.length-1;if(!(r<3)){for(var s={group:n,material:i,vertices:[]},a=0;a<r;a++){var x=t[a+1].split("/"),h=x.length;if(!(h<1||h>3)){var u=0,y=0,f=0;u=parseInt(x[0],10),h>1&&""!==x[1]&&(y=parseInt(x[1],10)),h>2&&(f=parseInt(x[2],10)),0!==u&&(u<0&&(u=o(e).vertices.length+1+u),y-=1,u-=1,f-=1,s.vertices.push({textureCoordsIndex:y,vertexIndex:u,vertexNormalIndex:f}))}}o(e).faces.push(s)}}function f(t,e){t.length>=2&&e.materialLibraries.push(t[1])}function c(t){t.length>=2&&(i=t[1])}t.exports=function(t,r){void 0===r&&(r=!0),e=r;var o,v,p={materials:{},materialLibraries:[],models:[]};n="",i="";for(var l=t.split("\n"),g=0;g<l.length;g++){var d=(o=l[g],v=void 0,v=o.indexOf("#"),v>-1?o.substring(0,v):o).replace(/\s\s+/g," ").trim().split(" ");switch(d[0].toLowerCase()){case"o":s(d,p);break;case"g":a(d);break;case"v":x(d,p);break;case"vt":h(d,p);break;case"vn":u(d,p);break;case"f":y(d,p);break;case"mtllib":f(d,p);break;case"usemtl":c(d)}}return p}},91252:(t,e,r)=>{var n=r(55117);t.exports=function(t){for(var e={},r=t.split("\n"),i="",o=0;o<r.length;o++){var s=r[o].trim();if(0!==s.indexOf("#")&&""!==s){var a=s.replace(/\s\s+/g," ").trim().split(" ");switch(a[0].toLowerCase()){case"newmtl":i=a[1];break;case"kd":var x=Math.floor(255*a[1]),h=a.length>=2?Math.floor(255*a[2]):x,u=a.length>=3?Math.floor(255*a[3]):x;e[i]=n(x,h,u)}}}return e}},56624:t=>{t.exports=function(t,e,r,n){var i,o;if(void 0===r&&void 0===n){var s=t.getInCenter();i=s.x,o=s.y}var a=Math.cos(e),x=Math.sin(e),h=t.vertex1,u=t.vertex2,y=t.vertex3,f=h.x-i,c=h.y-o;h.set(f*a-c*x+i,f*x+c*a+o),f=u.x-i,c=u.y-o,u.set(f*a-c*x+i,f*x+c*a+o),f=y.x-i,c=y.y-o,y.set(f*a-c*x+i,f*x+c*a+o)}},61859:(t,e,r)=>{var n={Face:r(45934),GenerateGridVerts:r(69295),GenerateObjVerts:r(69750),GenerateVerts:r(27092),ParseObj:r(11669),ParseObjMaterial:r(91252),RotateFace:r(56624),Vertex:r(45978)};t.exports=n},42233:t=>{t.exports=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))}},42762:(t,e,r)=>{var n=r(47978);t.exports=function(t){return new n(t.x,t.y)}},72180:t=>{t.exports=function(t,e){return e.setTo(t.x,t.y)}},81848:t=>{t.exports=function(t,e){return t.x===e.x&&t.y===e.y}},93898:t=>{t.exports=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))}},90385:(t,e,r)=>{var n=r(47978);t.exports=function(t,e){if(void 0===e&&(e=new n),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var r=t.length;if(r<1)throw new Error("GetCentroid points array must not be empty");if(1===r)e.x=t[0].x,e.y=t[0].y;else{for(var i=0;i<r;i++)e.x+=t[i].x,e.y+=t[i].y;e.x/=r,e.y/=r}return e}},72202:t=>{t.exports=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)}},96458:t=>{t.exports=function(t){return t.x*t.x+t.y*t.y}},59235:(t,e,r)=>{var n=r(75380);t.exports=function(t,e){void 0===e&&(e=new n);for(var r=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=0;a<t.length;a++){var x=t[a];x.x>r&&(r=x.x),x.x<i&&(i=x.x),x.y>o&&(o=x.y),x.y<s&&(s=x.y)}return e.x=i,e.y=s,e.width=r-i,e.height=o-s,e}},14967:(t,e,r)=>{var n=r(47978);t.exports=function(t,e,r,i){return void 0===r&&(r=0),void 0===i&&(i=new n),i.x=t.x+(e.x-t.x)*r,i.y=t.y+(e.y-t.y)*r,i}},94552:t=>{t.exports=function(t){return t.setTo(t.y,t.x)}},78544:(t,e,r)=>{var n=r(47978);t.exports=function(t,e){return void 0===e&&(e=new n),e.setTo(-t.x,-t.y)}},2707:(t,e,r)=>{var n=r(47978),i=r(96458);t.exports=function(t,e,r){void 0===r&&(r=new n);var o=(t.x*e.x+t.y*e.y)/i(e);return 0!==o&&(r.x=o*e.x,r.y=o*e.y),r}},61384:(t,e,r)=>{var n=r(47978);t.exports=function(t,e,r){void 0===r&&(r=new n);var i=t.x*e.x+t.y*e.y;return 0!==i&&(r.x=i*e.x,r.y=i*e.y),r}},92055:(t,e,r)=>{var n=r(72202);t.exports=function(t,e){if(0!==t.x||0!==t.y){var r=n(t);t.x/=r,t.y/=r}return t.x*=e,t.y*=e,t}},36937:(t,e,r)=>{var n=r(47978);n.Ceil=r(42233),n.Clone=r(42762),n.CopyFrom=r(72180),n.Equals=r(81848),n.Floor=r(93898),n.GetCentroid=r(90385),n.GetMagnitude=r(72202),n.GetMagnitudeSq=r(96458),n.GetRectangleFromPoints=r(59235),n.Interpolate=r(14967),n.Invert=r(94552),n.Negative=r(78544),n.Project=r(2707),n.ProjectUnit=r(61384),n.SetMagnitude=r(92055),t.exports=n},50637:(t,e,r)=>{var n=r(77816);t.exports=function(t){return new n(t.points)}},89273:(t,e,r)=>{var n=r(57997);t.exports=function(t,e){return n(t,e.x,e.y)}},18801:t=>{t.exports=function(t,e){void 0===e&&(e=[]);for(var r=0;r<t.points.length;r++)e.push(t.points[r].x),e.push(t.points[r].y);return e}},90510:t=>{t.exports=function(t){return t.points.reverse(),t}},86934:t=>{function e(t,e,r){var n=e.x,i=e.y,o=r.x-n,s=r.y-i;if(0!==o||0!==s){var a=((t.x-n)*o+(t.y-i)*s)/(o*o+s*s);a>1?(n=r.x,i=r.y):a>0&&(n+=o*a,i+=s*a)}return(o=t.x-n)*o+(s=t.y-i)*s}function r(t,n,i,o,s){for(var a,x=o,h=n+1;h<i;h++){var u=e(t[h],t[n],t[i]);u>x&&(a=h,x=u)}x>o&&(a-n>1&&r(t,n,a,o,s),s.push(t[a]),i-a>1&&r(t,a,i,o,s))}function n(t,e){var n=t.length-1,i=[t[0]];return r(t,0,n,e,i),i.push(t[n]),i}t.exports=function(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1);var i=t.points;if(i.length>2){var o=e*e;r||(i=function(t,e){for(var r,n,i,o,s,a=t[0],x=[a],h=1,u=t.length;h<u;h++)i=a,void 0,void 0,(o=(n=r=t[h]).x-i.x)*o+(s=n.y-i.y)*s>e&&(x.push(r),a=r);return a!==r&&x.push(r),x}(i,o)),t.setTo(n(i,o))}return t}},58891:t=>{t.exports=function(t,e,r){for(var n=t.points,i=0;i<n.length;i++)n[i].x+=e,n[i].y+=r;return t}},10413:(t,e,r)=>{var n=r(77816);n.Clone=r(50637),n.Contains=r(57997),n.ContainsPoint=r(89273),n.Earcut=r(64634),n.GetAABB=r(92594),n.GetNumberArray=r(18801),n.GetPoints=r(12061),n.Perimeter=r(13410),n.Reverse=r(90510),n.Simplify=r(86934),n.Smooth=r(63037),n.Translate=r(58891),t.exports=n},89258:t=>{t.exports=function(t){return t.width*t.height}},99158:t=>{t.exports=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t}},39023:t=>{t.exports=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t}},39414:t=>{t.exports=function(t,e,r){return t.x=e-t.width/2,t.y=r-t.height/2,t}},68392:(t,e,r)=>{var n=r(75380);t.exports=function(t){return new n(t.x,t.y,t.width,t.height)}},83613:(t,e,r)=>{var n=r(26813);t.exports=function(t,e){return n(t,e.x,e.y)}},44909:t=>{t.exports=function(t,e){return!(e.width*e.height>t.width*t.height)&&e.x>t.x&&e.x<t.right&&e.right>t.x&&e.right<t.right&&e.y>t.y&&e.y<t.bottom&&e.bottom>t.y&&e.bottom<t.bottom}},90997:t=>{t.exports=function(t,e){return e.setTo(t.x,t.y,t.width,t.height)}},53998:t=>{t.exports=function(t,e){return void 0===e&&(e=[]),e.push({x:t.x,y:t.y}),e.push({x:t.right,y:t.y}),e.push({x:t.right,y:t.bottom}),e.push({x:t.x,y:t.bottom}),e}},97139:t=>{t.exports=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}},18965:(t,e,r)=>{var n=r(28169);t.exports=function(t,e){var r=n(t);return r<n(e)?t.setSize(e.height*r,e.height):t.setSize(e.width,e.width/r),t.setPosition(e.centerX-t.width/2,e.centerY-t.height/2)}},41290:(t,e,r)=>{var n=r(28169);t.exports=function(t,e){var r=n(t);return r>n(e)?t.setSize(e.height*r,e.height):t.setSize(e.width,e.width/r),t.setPosition(e.centerX-t.width/2,e.centerY-t.height/2)}},45880:t=>{t.exports=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t}},46665:t=>{t.exports=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t}},79803:(t,e,r)=>{var n=r(75380),i=r(80925);t.exports=function(t,e){if(void 0===e&&(e=new n),0===t.length)return e;for(var r,o,s,a=Number.MAX_VALUE,x=Number.MAX_VALUE,h=i.MIN_SAFE_INTEGER,u=i.MIN_SAFE_INTEGER,y=0;y<t.length;y++)r=t[y],Array.isArray(r)?(o=r[0],s=r[1]):(o=r.x,s=r.y),a=Math.min(a,o),x=Math.min(x,s),h=Math.max(h,o),u=Math.max(u,s);return e.x=a,e.y=x,e.width=h-a,e.height=u-x,e}},68096:(t,e,r)=>{var n=r(75380);t.exports=function(t,e,r,i,o){return void 0===o&&(o=new n),o.setTo(Math.min(t,r),Math.min(e,i),Math.abs(t-r),Math.abs(e-i))}},28169:t=>{t.exports=function(t){return 0===t.height?NaN:t.width/t.height}},99095:(t,e,r)=>{var n=r(47978);t.exports=function(t,e){return void 0===e&&(e=new n),e.x=t.centerX,e.y=t.centerY,e}},8392:(t,e,r)=>{var n=r(47978);t.exports=function(t,e){return void 0===e&&(e=new n),e.x=t.width,e.y=t.height,e}},66243:(t,e,r)=>{var n=r(39414);t.exports=function(t,e,r){var i=t.centerX,o=t.centerY;return t.setSize(t.width+2*e,t.height+2*r),n(t,i,o)}},97554:(t,e,r)=>{var n=r(75380),i=r(12402);t.exports=function(t,e,r){return void 0===r&&(r=new n),i(t,e)?(r.x=Math.max(t.x,e.x),r.y=Math.max(t.y,e.y),r.width=Math.min(t.right,e.right)-r.x,r.height=Math.min(t.bottom,e.bottom)-r.y):r.setEmpty(),r}},14272:t=>{t.exports=function(t,e){for(var r=t.x,n=t.right,i=t.y,o=t.bottom,s=0;s<e.length;s++)r=Math.min(r,e[s].x),n=Math.max(n,e[s].x),i=Math.min(i,e[s].y),o=Math.max(o,e[s].y);return t.x=r,t.y=i,t.width=n-r,t.height=o-i,t}},76017:t=>{t.exports=function(t,e){var r=Math.min(t.x,e.x),n=Math.max(t.right,e.right);t.x=r,t.width=n-r;var i=Math.min(t.y,e.y),o=Math.max(t.bottom,e.bottom);return t.y=i,t.height=o-i,t}},44082:t=>{t.exports=function(t,e,r){var n=Math.min(t.x,e),i=Math.max(t.right,e);t.x=n,t.width=i-n;var o=Math.min(t.y,r),s=Math.max(t.bottom,r);return t.y=o,t.height=s-o,t}},78367:t=>{t.exports=function(t,e,r){return t.x+=e,t.y+=r,t}},51878:t=>{t.exports=function(t,e){return t.x+=e.x,t.y+=e.y,t}},1415:t=>{t.exports=function(t,e){return t.x<e.right&&t.right>e.x&&t.y<e.bottom&&t.bottom>e.y}},1352:(t,e,r)=>{var n=r(47978),i=r(23407);t.exports=function(t,e,r){void 0===r&&(r=new n),e=i(e);var o=Math.sin(e),s=Math.cos(e),a=s>0?t.width/2:t.width/-2,x=o>0?t.height/2:t.height/-2;return Math.abs(a*o)<Math.abs(x*s)?x=a*o/s:a=x*s/o,r.x=a+t.centerX,r.y=x+t.centerY,r}},32058:(t,e,r)=>{var n=r(27019),i=r(44909),o=r(47978);t.exports=function(t,e,r){if(void 0===r&&(r=new o),i(t,e))switch(n(0,3)){case 0:r.x=t.x+Math.random()*(e.right-t.x),r.y=t.y+Math.random()*(e.top-t.y);break;case 1:r.x=e.x+Math.random()*(t.right-e.x),r.y=e.bottom+Math.random()*(t.bottom-e.bottom);break;case 2:r.x=t.x+Math.random()*(e.x-t.x),r.y=e.y+Math.random()*(t.bottom-e.y);break;case 3:r.x=e.right+Math.random()*(t.right-e.right),r.y=t.y+Math.random()*(e.bottom-t.y)}return r}},54156:t=>{t.exports=function(t,e){return t.width===e.width&&t.height===e.height}},8569:t=>{t.exports=function(t,e,r){return void 0===r&&(r=e),t.width*=e,t.height*=r,t}},43550:(t,e,r)=>{var n=r(75380);n.Area=r(89258),n.Ceil=r(99158),n.CeilAll=r(39023),n.CenterOn=r(39414),n.Clone=r(68392),n.Contains=r(26813),n.ContainsPoint=r(83613),n.ContainsRect=r(44909),n.CopyFrom=r(90997),n.Decompose=r(53998),n.Equals=r(97139),n.FitInside=r(18965),n.FitOutside=r(41290),n.Floor=r(45880),n.FloorAll=r(46665),n.FromPoints=r(79803),n.FromXY=r(68096),n.GetAspectRatio=r(28169),n.GetCenter=r(99095),n.GetPoint=r(85715),n.GetPoints=r(53292),n.GetSize=r(8392),n.Inflate=r(66243),n.Intersection=r(97554),n.MarchingAnts=r(16178),n.MergePoints=r(14272),n.MergeRect=r(76017),n.MergeXY=r(44082),n.Offset=r(78367),n.OffsetPoint=r(51878),n.Overlaps=r(1415),n.Perimeter=r(93080),n.PerimeterPoint=r(1352),n.Random=r(61852),n.RandomOutside=r(32058),n.SameDimensions=r(54156),n.Scale=r(8569),n.Union=r(20822),t.exports=n},49227:t=>{t.exports=function(t){var e=t.x1,r=t.y1,n=t.x2,i=t.y2,o=t.x3,s=t.y3;return Math.abs(((o-e)*(i-r)-(n-e)*(s-r))/2)}},24456:(t,e,r)=>{var n=r(82671);t.exports=function(t,e,r){var i=r*(Math.sqrt(3)/2);return new n(t,e,t+r/2,e+i,t-r/2,e+i)}},66364:(t,e,r)=>{var n=r(64634),i=r(82671);t.exports=function(t,e,r,o,s){void 0===e&&(e=null),void 0===r&&(r=1),void 0===o&&(o=1),void 0===s&&(s=[]);for(var a,x,h,u,y,f,c,v,p,l=n(t,e),g=0;g<l.length;g+=3)a=l[g],x=l[g+1],h=l[g+2],u=t[2*a]*r,y=t[2*a+1]*o,f=t[2*x]*r,c=t[2*x+1]*o,v=t[2*h]*r,p=t[2*h+1]*o,s.push(new i(u,y,f,c,v,p));return s}},98702:(t,e,r)=>{var n=r(82671);t.exports=function(t,e,r,i){return void 0===i&&(i=r),new n(t,e,t,e-i,t+r,e)}},14625:(t,e,r)=>{var n=r(53472),i=r(14870);t.exports=function(t,e,r,o){void 0===o&&(o=n);var s=o(t),a=e-s.x,x=r-s.y;return i(t,a,x)}},53472:(t,e,r)=>{var n=r(47978);t.exports=function(t,e){return void 0===e&&(e=new n),e.x=(t.x1+t.x2+t.x3)/3,e.y=(t.y1+t.y2+t.y3)/3,e}},41976:(t,e,r)=>{var n=r(17321);function i(t,e,r,n){return t*n-e*r}t.exports=function(t,e){void 0===e&&(e=new n);var r=t.x3,o=t.y3,s=t.x1-r,a=t.y1-o,x=t.x2-r,h=t.y2-o,u=2*i(s,a,x,h),y=i(a,s*s+a*a,h,x*x+h*h),f=i(s,s*s+a*a,x,x*x+h*h);return e.x=r-y/u,e.y=o+f/u,e}},57371:(t,e,r)=>{var n=r(38459);t.exports=function(t,e){void 0===e&&(e=new n);var r,i,o=t.x1,s=t.y1,a=t.x2,x=t.y2,h=t.x3,u=t.y3,y=a-o,f=x-s,c=h-o,v=u-s,p=y*(o+a)+f*(s+x),l=c*(o+h)+v*(s+u),g=2*(y*(u-x)-f*(h-a));if(Math.abs(g)<1e-6){var d=Math.min(o,a,h),w=Math.min(s,x,u);r=.5*(Math.max(o,a,h)-d),i=.5*(Math.max(s,x,u)-w),e.x=d+r,e.y=w+i,e.radius=Math.sqrt(r*r+i*i)}else e.x=(v*p-f*l)/g,e.y=(y*l-c*p)/g,r=e.x-o,i=e.y-s,e.radius=Math.sqrt(r*r+i*i);return e}},74131:(t,e,r)=>{var n=r(82671);t.exports=function(t){return new n(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)}},60509:t=>{t.exports=function(t,e,r,n){void 0===r&&(r=!1),void 0===n&&(n=[]);for(var i,o,s,a,x,h,u=t.x3-t.x1,y=t.y3-t.y1,f=t.x2-t.x1,c=t.y2-t.y1,v=u*u+y*y,p=u*f+y*c,l=f*f+c*c,g=v*l-p*p,d=0===g?0:1/g,w=t.x1,m=t.y1,M=0;M<e.length&&(o=(v*(h=f*(s=e[M].x-w)+c*(a=e[M].y-m))-p*(x=u*s+y*a))*d,!((i=(l*x-p*h)*d)>=0&&o>=0&&i+o<1&&(n.push({x:e[M].x,y:e[M].y}),r)));M++);return n}},40861:(t,e,r)=>{var n=r(90547);t.exports=function(t,e){return n(t,e.x,e.y)}},70442:t=>{t.exports=function(t,e){return e.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)}},48300:t=>{t.exports=function(t,e){return void 0===e&&(e=[]),e.push({x:t.x1,y:t.y1}),e.push({x:t.x2,y:t.y2}),e.push({x:t.x3,y:t.y3}),e}},12390:t=>{t.exports=function(t,e){return t.x1===e.x1&&t.y1===e.y1&&t.x2===e.x2&&t.y2===e.y2&&t.x3===e.x3&&t.y3===e.y3}},10096:(t,e,r)=>{var n=r(47978);function i(t,e,r,n){var i=t-r,o=e-n,s=i*i+o*o;return Math.sqrt(s)}t.exports=function(t,e){void 0===e&&(e=new n);var r=t.x1,o=t.y1,s=t.x2,a=t.y2,x=t.x3,h=t.y3,u=i(x,h,s,a),y=i(r,o,x,h),f=i(s,a,r,o),c=u+y+f;return e.x=(r*u+s*y+x*f)/c,e.y=(o*u+a*y+h*f)/c,e}},14870:t=>{t.exports=function(t,e,r){return t.x1+=e,t.y1+=r,t.x2+=e,t.y2+=r,t.x3+=e,t.y3+=r,t}},60600:(t,e,r)=>{var n=r(47064);t.exports=function(t){var e=t.getLineA(),r=t.getLineB(),i=t.getLineC();return n(e)+n(r)+n(i)}},79708:(t,e,r)=>{var n=r(20729),i=r(10096);t.exports=function(t,e){var r=i(t);return n(t,r.x,r.y,e)}},31929:(t,e,r)=>{var n=r(20729);t.exports=function(t,e,r){return n(t,e.x,e.y,r)}},20729:t=>{t.exports=function(t,e,r,n){var i=Math.cos(n),o=Math.sin(n),s=t.x1-e,a=t.y1-r;return t.x1=s*i-a*o+e,t.y1=s*o+a*i+r,s=t.x2-e,a=t.y2-r,t.x2=s*i-a*o+e,t.y2=s*o+a*i+r,s=t.x3-e,a=t.y3-r,t.x3=s*i-a*o+e,t.y3=s*o+a*i+r,t}},9379:(t,e,r)=>{var n=r(82671);n.Area=r(49227),n.BuildEquilateral=r(24456),n.BuildFromPolygon=r(66364),n.BuildRight=r(98702),n.CenterOn=r(14625),n.Centroid=r(53472),n.CircumCenter=r(41976),n.CircumCircle=r(57371),n.Clone=r(74131),n.Contains=r(90547),n.ContainsArray=r(60509),n.ContainsPoint=r(40861),n.CopyFrom=r(70442),n.Decompose=r(48300),n.Equals=r(12390),n.GetPoint=r(93488),n.GetPoints=r(10471),n.InCenter=r(10096),n.Perimeter=r(60600),n.Offset=r(14870),n.Random=r(86407),n.Rotate=r(79708),n.RotateAroundPoint=r(31929),n.RotateAroundXY=r(20729),t.exports=n},27019:t=>{t.exports=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}},53023:(t,e,r)=>{var n=r(2543);t.exports=function(t,e,r){return(r-e)*(t=n(t,0,1))+e}},37254:(t,e,r)=>{var n=new(r(69186))({initialize:function(t,e,r,n){this.x=0,this.y=0,this.z=0,this.w=0,"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=r||0,this.w=n||0)},clone:function(){return new n(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,e,r,n){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=r||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,e=this.y,r=this.z,n=this.w;return Math.sqrt(t*t+e*e+r*r+n*n)},lengthSq:function(){var t=this.x,e=this.y,r=this.z,n=this.w;return t*t+e*e+r*r+n*n},normalize:function(){var t=this.x,e=this.y,r=this.z,n=this.w,i=t*t+e*e+r*r+n*n;return i>0&&(i=1/Math.sqrt(i),this.x=t*i,this.y=e*i,this.z=r*i,this.w=n*i),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,e){void 0===e&&(e=0);var r=this.x,n=this.y,i=this.z,o=this.w;return this.x=r+e*(t.x-r),this.y=n+e*(t.y-n),this.z=i+e*(t.z-i),this.w=o+e*(t.w-o),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var e=t.x-this.x,r=t.y-this.y,n=t.z-this.z||0,i=t.w-this.w||0;return Math.sqrt(e*e+r*r+n*n+i*i)},distanceSq:function(t){var e=t.x-this.x,r=t.y-this.y,n=t.z-this.z||0,i=t.w-this.w||0;return e*e+r*r+n*n+i*i},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var e=this.x,r=this.y,n=this.z,i=this.w,o=t.val;return this.x=o[0]*e+o[4]*r+o[8]*n+o[12]*i,this.y=o[1]*e+o[5]*r+o[9]*n+o[13]*i,this.z=o[2]*e+o[6]*r+o[10]*n+o[14]*i,this.w=o[3]*e+o[7]*r+o[11]*n+o[15]*i,this},transformQuat:function(t){var e=this.x,r=this.y,n=this.z,i=t.x,o=t.y,s=t.z,a=t.w,x=a*e+o*n-s*r,h=a*r+s*e-i*n,u=a*n+i*r-o*e,y=-i*e-o*r-s*n;return this.x=x*a+y*-i+h*-s-u*-o,this.y=h*a+y*-o+u*-i-x*-s,this.z=u*a+y*-s+x*-o-h*-i,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});n.prototype.sub=n.prototype.subtract,n.prototype.mul=n.prototype.multiply,n.prototype.div=n.prototype.divide,n.prototype.dist=n.prototype.distance,n.prototype.distSq=n.prototype.distanceSq,n.prototype.len=n.prototype.length,n.prototype.lenSq=n.prototype.lengthSq,t.exports=n},76914:t=>{t.exports=function(t,e,r,n){var i=t-r,o=e-n;return Math.sqrt(i*i+o*o)}},21274:t=>{t.exports=function(t,e){var r=t.x-e.x,n=t.y-e.y;return Math.sqrt(r*r+n*n)}}}]);