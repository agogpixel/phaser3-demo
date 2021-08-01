/*! For license information please see 4259.bd9ff3532354f7a9bf3b.js.LICENSE.txt */
(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[4259],{54259:(t,i,s)=>{var n=s(69186),h=s(33736),r=1e-6,a=new n({initialize:function(t){this.val=new Float32Array(16),t?this.copy(t):this.identity()},clone:function(){return new a(this)},set:function(t){return this.copy(t)},setValues:function(t,i,s,n,h,r,a,e,u,o,c,l,y,x,z,f){var v=this.val;return v[0]=t,v[1]=i,v[2]=s,v[3]=n,v[4]=h,v[5]=r,v[6]=a,v[7]=e,v[8]=u,v[9]=o,v[10]=c,v[11]=l,v[12]=y,v[13]=x,v[14]=z,v[15]=f,this},copy:function(t){var i=t.val;return this.setValues(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9],i[10],i[11],i[12],i[13],i[14],i[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,i,s){var n=e.fromQuat(s).val,h=i.x,r=i.y,a=i.z;return this.setValues(n[0]*h,n[1]*h,n[2]*h,0,n[4]*r,n[5]*r,n[6]*r,0,n[8]*a,n[9]*a,n[10]*a,0,t.x,t.y,t.z,1)},xyz:function(t,i,s){this.identity();var n=this.val;return n[12]=t,n[13]=i,n[14]=s,this},scaling:function(t,i,s){this.zero();var n=this.val;return n[0]=t,n[5]=i,n[10]=s,n[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,i=t[1],s=t[2],n=t[3],h=t[6],r=t[7],a=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=i,t[6]=t[9],t[7]=t[13],t[8]=s,t[9]=h,t[11]=t[14],t[12]=n,t[13]=r,t[14]=a,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,i=t[0],s=t[1],n=t[2],h=t[3],r=t[4],a=t[5],e=t[6],u=t[7],o=t[8],c=t[9],l=t[10],y=t[11],x=t[12],z=t[13],f=t[14],v=t[15],M=i*a-s*r,p=i*e-n*r,m=i*u-h*r,V=s*e-n*a,w=s*u-h*a,d=n*u-h*e,g=o*z-c*x,q=o*f-l*x,b=o*v-y*x,A=c*f-l*z,L=c*v-y*z,R=l*v-y*f,j=M*R-p*L+m*A+V*b-w*q+d*g;return j?(j=1/j,this.setValues((a*R-e*L+u*A)*j,(n*L-s*R-h*A)*j,(z*d-f*w+v*V)*j,(l*w-c*d-y*V)*j,(e*b-r*R-u*q)*j,(i*R-n*b+h*q)*j,(f*m-x*d-v*p)*j,(o*d-l*m+y*p)*j,(r*L-a*b+u*g)*j,(s*b-i*L-h*g)*j,(x*w-z*m+v*M)*j,(c*m-o*w-y*M)*j,(a*q-r*A-e*g)*j,(i*A-s*q+n*g)*j,(z*p-x*V-f*M)*j,(o*V-c*p+l*M)*j)):this},adjoint:function(){var t=this.val,i=t[0],s=t[1],n=t[2],h=t[3],r=t[4],a=t[5],e=t[6],u=t[7],o=t[8],c=t[9],l=t[10],y=t[11],x=t[12],z=t[13],f=t[14],v=t[15];return this.setValues(a*(l*v-y*f)-c*(e*v-u*f)+z*(e*y-u*l),-(s*(l*v-y*f)-c*(n*v-h*f)+z*(n*y-h*l)),s*(e*v-u*f)-a*(n*v-h*f)+z*(n*u-h*e),-(s*(e*y-u*l)-a*(n*y-h*l)+c*(n*u-h*e)),-(r*(l*v-y*f)-o*(e*v-u*f)+x*(e*y-u*l)),i*(l*v-y*f)-o*(n*v-h*f)+x*(n*y-h*l),-(i*(e*v-u*f)-r*(n*v-h*f)+x*(n*u-h*e)),i*(e*y-u*l)-r*(n*y-h*l)+o*(n*u-h*e),r*(c*v-y*z)-o*(a*v-u*z)+x*(a*y-u*c),-(i*(c*v-y*z)-o*(s*v-h*z)+x*(s*y-h*c)),i*(a*v-u*z)-r*(s*v-h*z)+x*(s*u-h*a),-(i*(a*y-u*c)-r*(s*y-h*c)+o*(s*u-h*a)),-(r*(c*f-l*z)-o*(a*f-e*z)+x*(a*l-e*c)),i*(c*f-l*z)-o*(s*f-n*z)+x*(s*l-n*c),-(i*(a*f-e*z)-r*(s*f-n*z)+x*(s*e-n*a)),i*(a*l-e*c)-r*(s*l-n*c)+o*(s*e-n*a))},determinant:function(){var t=this.val,i=t[0],s=t[1],n=t[2],h=t[3],r=t[4],a=t[5],e=t[6],u=t[7],o=t[8],c=t[9],l=t[10],y=t[11],x=t[12],z=t[13],f=t[14],v=t[15];return(i*a-s*r)*(l*v-y*f)-(i*e-n*r)*(c*v-y*z)+(i*u-h*r)*(c*f-l*z)+(s*e-n*a)*(o*v-y*x)-(s*u-h*a)*(o*f-l*x)+(n*u-h*e)*(o*z-c*x)},multiply:function(t){var i=this.val,s=i[0],n=i[1],h=i[2],r=i[3],a=i[4],e=i[5],u=i[6],o=i[7],c=i[8],l=i[9],y=i[10],x=i[11],z=i[12],f=i[13],v=i[14],M=i[15],p=t.val,m=p[0],V=p[1],w=p[2],d=p[3];return i[0]=m*s+V*a+w*c+d*z,i[1]=m*n+V*e+w*l+d*f,i[2]=m*h+V*u+w*y+d*v,i[3]=m*r+V*o+w*x+d*M,m=p[4],V=p[5],w=p[6],d=p[7],i[4]=m*s+V*a+w*c+d*z,i[5]=m*n+V*e+w*l+d*f,i[6]=m*h+V*u+w*y+d*v,i[7]=m*r+V*o+w*x+d*M,m=p[8],V=p[9],w=p[10],d=p[11],i[8]=m*s+V*a+w*c+d*z,i[9]=m*n+V*e+w*l+d*f,i[10]=m*h+V*u+w*y+d*v,i[11]=m*r+V*o+w*x+d*M,m=p[12],V=p[13],w=p[14],d=p[15],i[12]=m*s+V*a+w*c+d*z,i[13]=m*n+V*e+w*l+d*f,i[14]=m*h+V*u+w*y+d*v,i[15]=m*r+V*o+w*x+d*M,this},multiplyLocal:function(t){var i=this.val,s=t.val;return this.setValues(i[0]*s[0]+i[1]*s[4]+i[2]*s[8]+i[3]*s[12],i[0]*s[1]+i[1]*s[5]+i[2]*s[9]+i[3]*s[13],i[0]*s[2]+i[1]*s[6]+i[2]*s[10]+i[3]*s[14],i[0]*s[3]+i[1]*s[7]+i[2]*s[11]+i[3]*s[15],i[4]*s[0]+i[5]*s[4]+i[6]*s[8]+i[7]*s[12],i[4]*s[1]+i[5]*s[5]+i[6]*s[9]+i[7]*s[13],i[4]*s[2]+i[5]*s[6]+i[6]*s[10]+i[7]*s[14],i[4]*s[3]+i[5]*s[7]+i[6]*s[11]+i[7]*s[15],i[8]*s[0]+i[9]*s[4]+i[10]*s[8]+i[11]*s[12],i[8]*s[1]+i[9]*s[5]+i[10]*s[9]+i[11]*s[13],i[8]*s[2]+i[9]*s[6]+i[10]*s[10]+i[11]*s[14],i[8]*s[3]+i[9]*s[7]+i[10]*s[11]+i[11]*s[15],i[12]*s[0]+i[13]*s[4]+i[14]*s[8]+i[15]*s[12],i[12]*s[1]+i[13]*s[5]+i[14]*s[9]+i[15]*s[13],i[12]*s[2]+i[13]*s[6]+i[14]*s[10]+i[15]*s[14],i[12]*s[3]+i[13]*s[7]+i[14]*s[11]+i[15]*s[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,i){var s=t.val,n=i.val,h=s[0],r=s[4],a=s[8],e=s[12],u=s[1],o=s[5],c=s[9],l=s[13],y=s[2],x=s[6],z=s[10],f=s[14],v=s[3],M=s[7],p=s[11],m=s[15],V=n[0],w=n[4],d=n[8],g=n[12],q=n[1],b=n[5],A=n[9],L=n[13],R=n[2],j=n[6],k=n[10],S=n[14],F=n[3],X=n[7],Y=n[11],Z=n[15];return this.setValues(h*V+r*q+a*R+e*F,u*V+o*q+c*R+l*F,y*V+x*q+z*R+f*F,v*V+M*q+p*R+m*F,h*w+r*b+a*j+e*X,u*w+o*b+c*j+l*X,y*w+x*b+z*j+f*X,v*w+M*b+p*j+m*X,h*d+r*A+a*k+e*Y,u*d+o*A+c*k+l*Y,y*d+x*A+z*k+f*Y,v*d+M*A+p*k+m*Y,h*g+r*L+a*S+e*Z,u*g+o*L+c*S+l*Z,y*g+x*L+z*S+f*Z,v*g+M*L+p*S+m*Z)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,i,s){var n=this.val;return n[12]=n[0]*t+n[4]*i+n[8]*s+n[12],n[13]=n[1]*t+n[5]*i+n[9]*s+n[13],n[14]=n[2]*t+n[6]*i+n[10]*s+n[14],n[15]=n[3]*t+n[7]*i+n[11]*s+n[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,i,s){var n=this.val;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*i,n[5]=n[5]*i,n[6]=n[6]*i,n[7]=n[7]*i,n[8]=n[8]*s,n[9]=n[9]*s,n[10]=n[10]*s,n[11]=n[11]*s,this},makeRotationAxis:function(t,i){var s=Math.cos(i),n=Math.sin(i),h=1-s,r=t.x,a=t.y,e=t.z,u=h*r,o=h*a;return this.setValues(u*r+s,u*a-n*e,u*e+n*a,0,u*a+n*e,o*a+s,o*e-n*r,0,u*e-n*a,o*e+n*r,h*e*e+s,0,0,0,0,1)},rotate:function(t,i){var s=this.val,n=i.x,h=i.y,a=i.z,e=Math.sqrt(n*n+h*h+a*a);if(Math.abs(e)<r)return this;n*=e=1/e,h*=e,a*=e;var u=Math.sin(t),o=Math.cos(t),c=1-o,l=s[0],y=s[1],x=s[2],z=s[3],f=s[4],v=s[5],M=s[6],p=s[7],m=s[8],V=s[9],w=s[10],d=s[11],g=s[12],q=s[13],b=s[14],A=s[15],L=n*n*c+o,R=h*n*c+a*u,j=a*n*c-h*u,k=n*h*c-a*u,S=h*h*c+o,F=a*h*c+n*u,X=n*a*c+h*u,Y=h*a*c-n*u,Z=a*a*c+o;return this.setValues(l*L+f*R+m*j,y*L+v*R+V*j,x*L+M*R+w*j,z*L+p*R+d*j,l*k+f*S+m*F,y*k+v*S+V*F,x*k+M*S+w*F,z*k+p*S+d*F,l*X+f*Y+m*Z,y*X+v*Y+V*Z,x*X+M*Y+w*Z,z*X+p*Y+d*Z,g,q,b,A)},rotateX:function(t){var i=this.val,s=Math.sin(t),n=Math.cos(t),h=i[4],r=i[5],a=i[6],e=i[7],u=i[8],o=i[9],c=i[10],l=i[11];return i[4]=h*n+u*s,i[5]=r*n+o*s,i[6]=a*n+c*s,i[7]=e*n+l*s,i[8]=u*n-h*s,i[9]=o*n-r*s,i[10]=c*n-a*s,i[11]=l*n-e*s,this},rotateY:function(t){var i=this.val,s=Math.sin(t),n=Math.cos(t),h=i[0],r=i[1],a=i[2],e=i[3],u=i[8],o=i[9],c=i[10],l=i[11];return i[0]=h*n-u*s,i[1]=r*n-o*s,i[2]=a*n-c*s,i[3]=e*n-l*s,i[8]=h*s+u*n,i[9]=r*s+o*n,i[10]=a*s+c*n,i[11]=e*s+l*n,this},rotateZ:function(t){var i=this.val,s=Math.sin(t),n=Math.cos(t),h=i[0],r=i[1],a=i[2],e=i[3],u=i[4],o=i[5],c=i[6],l=i[7];return i[0]=h*n+u*s,i[1]=r*n+o*s,i[2]=a*n+c*s,i[3]=e*n+l*s,i[4]=u*n-h*s,i[5]=o*n-r*s,i[6]=c*n-a*s,i[7]=l*n-e*s,this},fromRotationTranslation:function(t,i){var s=t.x,n=t.y,h=t.z,r=t.w,a=s+s,e=n+n,u=h+h,o=s*a,c=s*e,l=s*u,y=n*e,x=n*u,z=h*u,f=r*a,v=r*e,M=r*u;return this.setValues(1-(y+z),c+M,l-v,0,c-M,1-(o+z),x+f,0,l+v,x-f,1-(o+y),0,i.x,i.y,i.z,1)},fromQuat:function(t){var i=t.x,s=t.y,n=t.z,h=t.w,r=i+i,a=s+s,e=n+n,u=i*r,o=i*a,c=i*e,l=s*a,y=s*e,x=n*e,z=h*r,f=h*a,v=h*e;return this.setValues(1-(l+x),o+v,c-f,0,o-v,1-(u+x),y+z,0,c+f,y-z,1-(u+l),0,0,0,0,1)},frustum:function(t,i,s,n,h,r){var a=1/(i-t),e=1/(n-s),u=1/(h-r);return this.setValues(2*h*a,0,0,0,0,2*h*e,0,0,(i+t)*a,(n+s)*e,(r+h)*u,-1,0,0,r*h*2*u,0)},perspective:function(t,i,s,n){var h=1/Math.tan(t/2),r=1/(s-n);return this.setValues(h/i,0,0,0,0,h,0,0,0,0,(n+s)*r,-1,0,0,2*n*s*r,0)},perspectiveLH:function(t,i,s,n){return this.setValues(2*s/t,0,0,0,0,2*s/i,0,0,0,0,-n/(s-n),1,0,0,s*n/(s-n),0)},ortho:function(t,i,s,n,h,r){var a=t-i,e=s-n,u=h-r;return a=0===a?a:1/a,e=0===e?e:1/e,u=0===u?u:1/u,this.setValues(-2*a,0,0,0,0,-2*e,0,0,0,0,2*u,0,(t+i)*a,(n+s)*e,(r+h)*u,1)},lookAtRH:function(t,i,s){var n=this.val;return l.subVectors(t,i),0===l.getLengthSquared()&&(l.z=1),l.normalize(),o.crossVectors(s,l),0===o.getLengthSquared()&&(1===Math.abs(s.z)?l.x+=1e-4:l.z+=1e-4,l.normalize(),o.crossVectors(s,l)),o.normalize(),c.crossVectors(l,o),n[0]=o.x,n[1]=o.y,n[2]=o.z,n[4]=c.x,n[5]=c.y,n[6]=c.z,n[8]=l.x,n[9]=l.y,n[10]=l.z,this},lookAt:function(t,i,s){var n=t.x,h=t.y,a=t.z,e=s.x,u=s.y,o=s.z,c=i.x,l=i.y,y=i.z;if(Math.abs(n-c)<r&&Math.abs(h-l)<r&&Math.abs(a-y)<r)return this.identity();var x=n-c,z=h-l,f=a-y,v=1/Math.sqrt(x*x+z*z+f*f),M=u*(f*=v)-o*(z*=v),p=o*(x*=v)-e*f,m=e*z-u*x;(v=Math.sqrt(M*M+p*p+m*m))?(M*=v=1/v,p*=v,m*=v):(M=0,p=0,m=0);var V=z*m-f*p,w=f*M-x*m,d=x*p-z*M;return(v=Math.sqrt(V*V+w*w+d*d))?(V*=v=1/v,w*=v,d*=v):(V=0,w=0,d=0),this.setValues(M,V,x,0,p,w,z,0,m,d,f,0,-(M*n+p*h+m*a),-(V*n+w*h+d*a),-(x*n+z*h+f*a),1)},yawPitchRoll:function(t,i,s){this.zero(),e.zero(),u.zero();var n=this.val,h=e.val,r=u.val,a=Math.sin(s),o=Math.cos(s);return n[10]=1,n[15]=1,n[0]=o,n[1]=a,n[4]=-a,n[5]=o,a=Math.sin(i),o=Math.cos(i),h[0]=1,h[15]=1,h[5]=o,h[10]=o,h[9]=-a,h[6]=a,a=Math.sin(t),o=Math.cos(t),r[5]=1,r[15]=1,r[0]=o,r[2]=-a,r[8]=a,r[10]=o,this.multiplyLocal(e),this.multiplyLocal(u),this},setWorldMatrix:function(t,i,s,n,h){return this.yawPitchRoll(t.y,t.x,t.z),e.scaling(s.x,s.y,s.z),u.xyz(i.x,i.y,i.z),this.multiplyLocal(e),this.multiplyLocal(u),n&&this.multiplyLocal(n),h&&this.multiplyLocal(h),this},multiplyToMat4:function(t,i){var s=this.val,n=t.val,h=s[0],r=s[1],a=s[2],e=s[3],u=s[4],o=s[5],c=s[6],l=s[7],y=s[8],x=s[9],z=s[10],f=s[11],v=s[12],M=s[13],p=s[14],m=s[15],V=n[0],w=n[1],d=n[2],g=n[3],q=n[4],b=n[5],A=n[6],L=n[7],R=n[8],j=n[9],k=n[10],S=n[11],F=n[12],X=n[13],Y=n[14],Z=n[15];return i.setValues(V*h+w*u+d*y+g*v,w*r+w*o+d*x+g*M,d*a+w*c+d*z+g*p,g*e+w*l+d*f+g*m,q*h+b*u+A*y+L*v,q*r+b*o+A*x+L*M,q*a+b*c+A*z+L*p,q*e+b*l+A*f+L*m,R*h+j*u+k*y+S*v,R*r+j*o+k*x+S*M,R*a+j*c+k*z+S*p,R*e+j*l+k*f+S*m,F*h+X*u+Y*y+Z*v,F*r+X*o+Y*x+Z*M,F*a+X*c+Y*z+Z*p,F*e+X*l+Y*f+Z*m)},fromRotationXYTranslation:function(t,i,s){var n=i.x,h=i.y,r=i.z,a=Math.sin(t.x),e=Math.cos(t.x),u=Math.sin(t.y),o=Math.cos(t.y),c=n,l=h,y=r,x=-a,z=0-x*u,f=0-e*u,v=x*o,M=e*o;return s||(c=o*n+u*r,l=z*n+e*h+v*r,y=f*n+a*h+M*r),this.setValues(o,z,f,0,0,e,a,0,u,v,M,0,c,l,y,1)},getMaxScaleOnAxis:function(){var t=this.val,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,n))}}),e=new a,u=new a,o=new h,c=new h,l=new h;t.exports=a},33736:(t,i,s)=>{var n=new(s(69186))({initialize:function(t,i,s){this.x=0,this.y=0,this.z=0,"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=i||0,this.z=s||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new n(this.x,this.y,this.z)},addVectors:function(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this},crossVectors:function(t,i){var s=t.x,n=t.y,h=t.z,r=i.x,a=i.y,e=i.z;return this.x=n*e-h*a,this.y=h*r-s*e,this.z=s*a-n*r,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,i,s){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=i||0,this.z=s||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,i){return this.fromArray(t.val,4*i)},fromArray:function(t,i){return void 0===i&&(i=0),this.x=t[i],this.y=t[i+1],this.z=t[i+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var i=t.x-this.x,s=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(i*i+s*s+n*n)},distanceSq:function(t){var i=t.x-this.x,s=t.y-this.y,n=t.z-this.z||0;return i*i+s*s+n*n},length:function(){var t=this.x,i=this.y,s=this.z;return Math.sqrt(t*t+i*i+s*s)},lengthSq:function(){var t=this.x,i=this.y,s=this.z;return t*t+i*i+s*s},normalize:function(){var t=this.x,i=this.y,s=this.z,n=t*t+i*i+s*s;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=i*n,this.z=s*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var i=this.x,s=this.y,n=this.z,h=t.x,r=t.y,a=t.z;return this.x=s*a-n*r,this.y=n*h-i*a,this.z=i*r-s*h,this},lerp:function(t,i){void 0===i&&(i=0);var s=this.x,n=this.y,h=this.z;return this.x=s+i*(t.x-s),this.y=n+i*(t.y-n),this.z=h+i*(t.z-h),this},applyMatrix3:function(t){var i=this.x,s=this.y,n=this.z,h=t.val;return this.x=h[0]*i+h[3]*s+h[6]*n,this.y=h[1]*i+h[4]*s+h[7]*n,this.z=h[2]*i+h[5]*s+h[8]*n,this},applyMatrix4:function(t){var i=this.x,s=this.y,n=this.z,h=t.val,r=1/(h[3]*i+h[7]*s+h[11]*n+h[15]);return this.x=(h[0]*i+h[4]*s+h[8]*n+h[12])*r,this.y=(h[1]*i+h[5]*s+h[9]*n+h[13])*r,this.z=(h[2]*i+h[6]*s+h[10]*n+h[14])*r,this},transformMat3:function(t){var i=this.x,s=this.y,n=this.z,h=t.val;return this.x=i*h[0]+s*h[3]+n*h[6],this.y=i*h[1]+s*h[4]+n*h[7],this.z=i*h[2]+s*h[5]+n*h[8],this},transformMat4:function(t){var i=this.x,s=this.y,n=this.z,h=t.val;return this.x=h[0]*i+h[4]*s+h[8]*n+h[12],this.y=h[1]*i+h[5]*s+h[9]*n+h[13],this.z=h[2]*i+h[6]*s+h[10]*n+h[14],this},transformCoordinates:function(t){var i=this.x,s=this.y,n=this.z,h=t.val,r=i*h[0]+s*h[4]+n*h[8]+h[12],a=i*h[1]+s*h[5]+n*h[9]+h[13],e=i*h[2]+s*h[6]+n*h[10]+h[14],u=i*h[3]+s*h[7]+n*h[11]+h[15];return this.x=r/u,this.y=a/u,this.z=e/u,this},transformQuat:function(t){var i=this.x,s=this.y,n=this.z,h=t.x,r=t.y,a=t.z,e=t.w,u=e*i+r*n-a*s,o=e*s+a*i-h*n,c=e*n+h*s-r*i,l=-h*i-r*s-a*n;return this.x=u*e+l*-h+o*-a-c*-r,this.y=o*e+l*-r+c*-h-u*-a,this.z=c*e+l*-a+u*-r-o*-h,this},project:function(t){var i=this.x,s=this.y,n=this.z,h=t.val,r=h[0],a=h[1],e=h[2],u=h[3],o=h[4],c=h[5],l=h[6],y=h[7],x=h[8],z=h[9],f=h[10],v=h[11],M=h[12],p=h[13],m=h[14],V=1/(i*u+s*y+n*v+h[15]);return this.x=(i*r+s*o+n*x+M)*V,this.y=(i*a+s*c+n*z+p)*V,this.z=(i*e+s*l+n*f+m)*V,this},projectViewMatrix:function(t,i){return this.applyMatrix4(t).applyMatrix4(i)},unprojectViewMatrix:function(t,i){return this.applyMatrix4(t).applyMatrix4(i)},unproject:function(t,i){var s=t.x,n=t.y,h=t.z,r=t.w,a=this.x-s,e=r-this.y-1-n,u=this.z;return this.x=2*a/h-1,this.y=2*e/r-1,this.z=2*u-1,this.project(i)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});n.ZERO=new n,n.RIGHT=new n(1,0,0),n.LEFT=new n(-1,0,0),n.UP=new n(0,-1,0),n.DOWN=new n(0,1,0),n.FORWARD=new n(0,0,1),n.BACK=new n(0,0,-1),n.ONE=new n(1,1,1),t.exports=n}}]);