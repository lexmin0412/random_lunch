"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6066],{"6066":function(t,n,i){i.r(n),i.d(n,{"taro_input_core":function(){return u}});var o=i(5222);function getTrueType(t,n,i){if("search"===n&&(t="search"),i&&(t="password"),void 0===t)return"text";if(!t)throw new Error("unexpected type");return"digit"===t&&(t="number"),t}function fixControlledValue(t){return null!=t?t:""}var u=function(){function e(t){var n=this;(0,o.r)(this,t),this.onInput=(0,o.c)(this,"input",7),this.onPaste=(0,o.c)(this,"paste",7),this.onFocus=(0,o.c)(this,"focus",7),this.onBlur=(0,o.c)(this,"blur",7),this.onConfirm=(0,o.c)(this,"confirm",7),this.onChange=(0,o.c)(this,"change",7),this.onKeyDown=(0,o.c)(this,"keydown",7),this.isOnComposition=!1,this.isOnPaste=!1,this.onInputExcuted=!1,this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.nativeProps={},this.handleInput=function(t){t.stopPropagation();var i=n,o=i.type,u=i.maxlength,a=i.confirmType,s=i.password;if(!n.isOnComposition&&!n.onInputExcuted){var r=t.target.value,l=getTrueType(o,a,s);n.onInputExcuted=!0,"number"===l&&r&&u>-1&&u<=r.length&&(r=r.substring(0,u),t.target.value=r),n.value=r,n.onInput.emit({"value":r,"cursor":r.length}),n.onInputExcuted=!1}},this.handlePaste=function(t){n.isOnPaste=!0,n.onPaste.emit({"value":t.target.value})},this.handleFocus=function(t){n.onInputExcuted=!1,n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value}),n.isOnPaste&&(n.isOnPaste=!1,n.value=t.target.value,n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length}))},this.handleKeyDown=function(t){var i=t.target.value,o=t.keyCode||t.code;n.onInputExcuted=!1,t.stopPropagation(),n.onKeyDown.emit({"value":i,"cursor":i.length,"keyCode":o}),13===o&&n.onConfirm.emit({"value":i})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(n.isOnComposition=!1,n.value=t.target.value,n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})):n.isOnComposition=!0)},this.handleBeforeinput=function(t){if(t.data){var i=t.data&&/[0-9]/.test(t.data);"number"!==n.type||i||t.preventDefault(),"digit"!==n.type||i||("."!==t.data||"."===t.data&&t.target.value.indexOf(".")>-1)&&t.preventDefault()}}}return e.prototype.watchFocus=function(t,n){var i;!n&&t&&(null===(i=this.inputRef)||void 0===i||i.focus())},e.prototype.watchValue=function(t){var n=fixControlledValue(t);this.inputRef&&this.inputRef.value!==n&&(this.inputRef.value=n)},e.prototype.componentDidLoad=function(){var t,n,i,o,u,a=this;"file"===this.type?(this.fileListener=function(){a.onInput.emit()},null===(t=this.inputRef)||void 0===t||t.addEventListener("change",this.fileListener)):(null===(n=this.inputRef)||void 0===n||n.addEventListener("compositionstart",this.handleComposition),null===(i=this.inputRef)||void 0===i||i.addEventListener("compositionend",this.handleComposition),null===(o=this.inputRef)||void 0===o||o.addEventListener("beforeinput",this.handleBeforeinput),null===(u=this.inputRef)||void 0===u||u.addEventListener("textInput",this.handleBeforeinput)),Object.defineProperty(this.el,"value",{"get":function(){var t;return null===(t=a.inputRef)||void 0===t?void 0:t.value},"set":function(t){return a.value=t},"configurable":!0})},e.prototype.disconnectedCallback=function(){var t,n,i,o,u;"file"===this.type?null===(t=this.inputRef)||void 0===t||t.removeEventListener("change",this.fileListener):(null===(n=this.inputRef)||void 0===n||n.removeEventListener("compositionstart",this.handleComposition),null===(i=this.inputRef)||void 0===i||i.removeEventListener("compositionend",this.handleComposition),null===(o=this.inputRef)||void 0===o||o.removeEventListener("beforeinput",this.handleBeforeinput),null===(u=this.inputRef)||void 0===u||u.removeEventListener("textInput",this.handleBeforeinput))},e.prototype.render=function(){var t=this,n=this,i=n.value,u=n.type,a=n.password,s=n.placeholder,r=n.autoFocus,l=n.disabled,h=n.maxlength,p=n.confirmType,c=n.name,d=n.nativeProps;return(0,o.h)("input",Object.assign({"ref":function(n){t.inputRef=n},"class":"weui-input","value":fixControlledValue(i),"type":getTrueType(u,p,a),"placeholder":s,"autoFocus":r,"disabled":l,"maxlength":h,"name":c,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onChange":this.handleChange,"onKeyDown":this.handleKeyDown,"onPaste":this.handlePaste,"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition},d))},Object.defineProperty(e.prototype,"el",{"get":function(){return(0,o.g)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"autoFocus":["watchFocus"],"value":["watchValue"]}},"enumerable":!1,"configurable":!0}),e}();u.style="taro-input-core{display:block}input{display:block;overflow:hidden;height:1.4rem;text-overflow:clip;text-align:inherit;white-space:nowrap}"}}]);