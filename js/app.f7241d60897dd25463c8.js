"use strict";(self.webpackChunk_agogpixel_phaser3_demo=self.webpackChunk_agogpixel_phaser3_demo||[]).push([[2143],{60705:(e,t,a)=>{a.r(t),a.d(t,{app:()=>n});var i=a(70655),r=function(e){function t(){return e.call(this,t.key)||this}return(0,i.ZT)(t,e),t.prototype.init=function(){this.input.keyboard.enabled=!1},t.prototype.create=function(){var e=this;this.cameras.main.setAlpha(0),this.events.once(Phaser.Scenes.Events.TRANSITION_START,(function(t,a){e.tweens.add({targets:e.cameras.main,alpha:1,duration:a,delay:1e3,onComplete:function(){return e.input.keyboard.enabled=!0}})}));var t=this.make.tilemap({key:"mapA",insertNull:!0}),a=t.addTilesetImage("roguelikeCity_transparent"),i=t.createLayer("Tile Layer 1",a).setScale(4);t.createLayer("Tile Layer 2",a).setScale(4);var r=t.tileWidth/2*4,s=t.tileHeight/2*4,n=new Phaser.Math.Vector2;i.tileToWorldXY(7,9,n),this.add.image(n.x+r,n.y+s+s/2,"lightpost","right").setScale(4).setOrigin(.2,1).setDepth(9),i.tileToWorldXY(23,9,n),this.add.image(n.x+r,n.y+s+s/2,"lightpost","right").setScale(4).setOrigin(.2,1).setDepth(9),i.tileToWorldXY(15,15,n),this.add.image(n.x+r,n.y+s-s/2,"lightpost","left").setScale(4).setOrigin(.8,1).setDepth(15),this.add.particles("blue").createEmitter({x:{min:0,max:i.displayWidth},y:0,lifespan:1e3,speedY:1500,scaleY:{min:1,max:4},scaleX:.01,quantity:1,blendMode:"SCREEN"});var l=this.add.graphics();l.depth=1e3,l.fillStyle(0,.75),l.fillRect(0,0,i.displayWidth,i.displayHeight);var o=this.input.keyboard.createCursorKeys();this.controls=new Phaser.Cameras.Controls.FixedKeyControl({camera:this.cameras.main,left:o.left,right:o.right,up:o.up,down:o.down,speed:.5,zoomIn:this.input.keyboard.addKey("MINUS"),zoomOut:this.input.keyboard.addKey("PLUS"),maxZoom:3,minZoom:.5}),this.cameras.main.setBounds(0,0,i.displayWidth,i.displayHeight)},t.prototype.update=function(e,t){this.controls.update(t)},t.key="Main",t}(Phaser.Scene),s=function(e){function t(){return e.call(this,t.key)||this}return(0,i.ZT)(t,e),t.prototype.preload=function(){this.load.image("roguelikeCity_transparent","assets/roguelikeCity_transparent.png"),this.load.tilemapTiledJSON("mapA","assets/mapA.json"),this.load.image("blue","assets/blue.png")},t.prototype.create=function(){this.createLightpostTexture(),this.scene.transition({target:r.key,duration:1500,sleep:!1,allowInput:!1,onUpdate:function(e){var t=document.getElementById("splashContainer").style;t.opacity=(1-e).toString(),1===e&&(t.display="none",t.opacity="1")}})},t.prototype.createLightpostTexture=function(){var e=this.make.tilemap({tileWidth:16,tileHeight:16,width:2,height:3}),t=e.addTilesetImage("roguelikeCity_transparent","roguelikeCity_transparent",16,16,0,1),a=e.createBlankLayer("layer",t);this.children.remove(a);var i=this.make.renderTexture({x:0,y:0,width:2*a.width,height:a.height},!1);a.putTileAt(593,0,0),a.putTileAt(630,0,1),a.putTileAt(667,0,2),a.putTileAt(594,1,0),a.putTileAt(631,1,1),a.putTileAt(668,1,2);var r=i.draw(a).saveTexture("lightpost");r.add("left",0,0,0,16,48),r.add("right",0,16,0,16,48)},t.key="Preload",t}(Phaser.Scene);function n(){new Phaser.Game({title:"agogpixel/phaser3-demo",version:"0.0.0",type:Phaser.AUTO,parent:"body",pixelArt:!0,dom:{createContainer:!0},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:"100%",height:"100%"},plugins:{global:[]},scene:[s,r]})}}}]);