"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6119],{"6119":function(t,i,n){n.r(i),n.d(i,{"taro_slider_core":function(){return o}});var a=n(5222),o=function(){function e(t){var i=this;(0,a.r)(this,t),this.onChange=(0,a.c)(this,"change",7),this.onChanging=(0,a.c)(this,"changing",7),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.value=0,this.activeColor="#1aad19",this.backgroundColor="#e9e9e9",this.blockSize=28,this.blockColor="#ffffff",this.showValue=!1,this.name="",this.totalWidth=0,this.touching=!1,this.ogX=0,this.touchId=null,this.percent=0,this.isWillLoadCalled=!1,this.handleTouchStart=function(t){i.touching||i.disabled||(i.touching=!0,i.touchId=t.targetTouches[0].identifier,i.totalWidth=i.sliderInsRef.clientWidth,i.ogX=t.targetTouches[0].pageX,i.ogPercent=i.percent)},this.handleTouchMove=function(t){var n=i,a=n.disabled,o=n.touching,h=n.touchId,r=n.totalWidth,l=n.max,s=n.min,u=n.ogX,c=n.ogPercent;if(o&&!a&&t.targetTouches[0].identifier===h){t.preventDefault();var d=(t.targetTouches[0].pageX-u)/r*100+c,f=s+.01*(d=Math.max(0,Math.min(d,100)))*(l-s);i.updateByStep(f),i.onChanging.emit({"detail":t.detail,"value":i.val})}},this.handleTouchEnd=function(t){var n=i,a=n.disabled;n.touching&&!a&&(i.percent!==i.ogPercent&&i.onChange.emit({"detail":t.detail,"value":i.val}),i.touching=!1,i.touchId=null,i.ogX=0,i.ogPercent=0)}}return e.prototype.function=function(t){if(this.isWillLoadCalled){var i=this.max,n=this.min;if(null!==t&&t!==this.val){var a=Math.max(n,Math.min(t,i));this.updateByStep(a)}}},e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.val},"set":function(i){return t.value=i},"configurable":!0}),this.handler.addEventListener("touchstart",this.handleTouchStart),this.handler.addEventListener("touchmove",this.handleTouchMove),this.handler.addEventListener("touchend",this.handleTouchEnd)},e.prototype.componentDidUpdate=function(){this.value=null},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0;var t=this,i=t.value,n=t.max,a=t.min;if(null!==i){var o=Math.max(a,Math.min(i,n));this.updateByStep(o)}},e.prototype.updateByStep=function(t){for(var i=this,n=i.max,a=i.min,o=i.step,h=Math.floor((n-a)/o),r=0;r<=h;r++){var l=a+o*r,s=r===h?null:a+o*(r+1);if(t===l)break;if(!s&&t>l&&(t=l),s&&t>l&&t<s){t=t-l<o/2?l:s;break}}var u=(t-a)/(n-a)*100;this.val=t,this.percent=u},e.prototype.render=function(){var t=this,i=this,n=i.showValue,o=i.backgroundColor,h=i.activeColor,r=i.blockColor,l=i.name,s=i.percent,u=i.val,c=this.blockSize,d={"backgroundColor":o},f=s>100?100:s,p={"width":f+"%","backgroundColor":h};c<12&&(c=12),c>28&&(c=28);var v={"left":f+"%","width":c+"px","height":c+"px","backgroundColor":r,"marginTop":"-"+Math.floor(c/2)+"px","marginLeft":"-"+Math.floor(c/2)+"px"};return(0,a.h)(a.H,{"class":"weui-slider-box"},(0,a.h)("div",{"class":"weui-slider"},(0,a.h)("div",{"class":"weui-slider__inner","style":d,"ref":function(i){return t.sliderInsRef=i}},(0,a.h)("div",{"style":p,"class":"weui-slider__track"}),(0,a.h)("div",{"class":"weui-slider__handler","ref":function(i){i&&(t.handler=i)},"style":v}),(0,a.h)("input",{"type":"hidden","name":l,"value":u}))),n&&(0,a.h)("div",{"class":"weui-slider-box__value"},u))},Object.defineProperty(e.prototype,"el",{"get":function(){return(0,a.g)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"value":["function"]}},"enumerable":!1,"configurable":!0}),e}()}}]);