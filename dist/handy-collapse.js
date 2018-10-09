var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var HandyCollapse=function(){function HandyCollapse(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HandyCollapse);_extends(this,{nameSpace:"hc",toggleButtonAttr:"data-"+(options.nameSpace||"hc")+"-control",toggleContentAttr:"data-"+(options.nameSpace||"hc")+"-content",activeClass:"is-active",isAimation:true,closeOthers:true,animatinSpeed:400,cssEasing:"ease-in-out",onSlideStart:function onSlideStart(){return false;},onSlideEnd:function onSlideEnd(){return false;}},options);this.toggleBodyEls=document.querySelectorAll("["+this.toggleContentAttr+"]");this.toggleButtomEls=document.querySelectorAll("["+this.toggleButtonAttr+"]");this.itemsStatus={};this.init();}_createClass(HandyCollapse,[{key:"init",value:function init(){if(this.toggleBodyEls){this.setItem();}if(this.toggleButtomEls){this.setListner();}}},{key:"setItem",value:function setItem(){var _this=this;this.itemsStatus={};Array.prototype.slice.call(this.toggleBodyEls).forEach(function(contentEl){contentEl.style.overflow="hidden";contentEl.style.maxHeight="none";var isOpen=contentEl.classList.contains(_this.activeClass);var id=contentEl.getAttribute(_this.toggleContentAttr);_this.setItemStetus(id,isOpen);if(!isOpen){_this.close(id,false,false);}else{_this.open(id,false,false);}});}},{key:"setListner",value:function setListner(){var _this2=this;Array.prototype.slice.call(this.toggleButtomEls).forEach(function(buttonEl,index){var id=buttonEl.getAttribute(_this2.toggleButtonAttr);if(id){buttonEl.addEventListener("click",function(e){e.preventDefault();_this2.toggleSlide(id,buttonEl);},false);}});}},{key:"setItemStetus",value:function setItemStetus(id,isOpen){this.itemsStatus[id]={isOpen:isOpen};}},{key:"toggleSlide",value:function toggleSlide(id){var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(this.itemsStatus[id].isOpen===false){this.open(id,isRunCallback,this.isAimation);}else{this.close(id,isRunCallback,this.isAimation);}}},{key:"open",value:function open(id){var _this3=this;var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var isAimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!id)return;if(this.closeOthers){Array.prototype.slice.call(this.toggleBodyEls).forEach(function(contentEl,index){var closeId=contentEl.getAttribute(_this3.toggleContentAttr);if(closeId!==id)_this3.close(closeId,false,isAimation);});}if(isRunCallback!==false)this.onSlideStart(true,id);var toggleBody=document.querySelector("["+this.toggleContentAttr+"='"+id+"']");var clientHeight=this.getTargetHeight(toggleBody);toggleBody.classList.add(this.activeClass);var toggleButton=document.querySelectorAll("["+this.toggleButtonAttr+"='"+id+"']");if(toggleButton.length>0){Array.prototype.slice.call(toggleButton).forEach(function(button,index){button.classList.add(_this3.activeClass);});}if(isAimation){toggleBody.style.overflow="hidden";toggleBody.style.transition=this.animatinSpeed+"ms "+this.cssEasing;toggleBody.style.maxHeight=(clientHeight||"1000")+"px";setTimeout(function(){if(isRunCallback!==false)_this3.onSlideEnd(true,id);toggleBody.style.maxHeight="none";toggleBody.style.transition="";toggleBody.style.overflow="";},this.animatinSpeed);}else{toggleBody.style.maxHeight="none";toggleBody.style.overflow="";}if(this.itemsStatus.hasOwnProperty(id)){this.itemsStatus[id].isOpen=true;}}},{key:"close",value:function close(id){var _this4=this;var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var isAimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!id)return;if(isRunCallback!==false)this.onSlideStart(false,id);var toggleBody=document.querySelector("["+this.toggleContentAttr+"='"+id+"']");toggleBody.style.overflow="hidden";toggleBody.classList.remove(this.activeClass);toggleBody.style.maxHeight=toggleBody.clientHeight+"px";setTimeout(function(){toggleBody.style.maxHeight="0px";},1);var toggleButton=document.querySelectorAll("["+this.toggleButtonAttr+"='"+id+"']");if(toggleButton.length>0){Array.prototype.slice.call(toggleButton).forEach(function(button,index){button.classList.remove(_this4.activeClass);});}if(isAimation){toggleBody.style.transition=this.animatinSpeed+"ms "+this.cssEasing;setTimeout(function(){if(isRunCallback!==false)_this4.onSlideEnd(false,id);toggleBody.style.transition="";},this.animatinSpeed);}else{this.onSlideEnd(false,id);}if(this.itemsStatus.hasOwnProperty(id)){this.itemsStatus[id].isOpen=false;}}},{key:"getTargetHeight",value:function getTargetHeight(targetEl){if(!targetEl)return;var cloneEl=targetEl.cloneNode(true);var parentEl=targetEl.parentNode;cloneEl.style.maxHeight="none";cloneEl.style.opacity="0";parentEl.appendChild(cloneEl);var clientHeight=cloneEl.clientHeight;parentEl.removeChild(cloneEl);return clientHeight;}}]);return HandyCollapse;}();if((typeof module==="undefined"?"undefined":_typeof(module))==="object"){module.exports=HandyCollapse;}
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var HandyCollapse=function(){function HandyCollapse(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HandyCollapse);_extends(this,{nameSpace:"hc",toggleButtonAttr:"data-"+(options.nameSpace||"hc")+"-control",toggleContentAttr:"data-"+(options.nameSpace||"hc")+"-content",activeClass:"is-active",isAimation:true,closeOthers:true,animatinSpeed:400,cssEasing:"ease-in-out",onSlideStart:function onSlideStart(){return false;},onSlideEnd:function onSlideEnd(){return false;}},options);this.toggleBodyEls=document.querySelectorAll("["+this.toggleContentAttr+"]");this.toggleButtomEls=document.querySelectorAll("["+this.toggleButtonAttr+"]");this.itemsStatus={};this.init();}_createClass(HandyCollapse,[{key:"init",value:function init(){if(this.toggleBodyEls){this.setItem();}if(this.toggleButtomEls){this.setListner();}}},{key:"setItem",value:function setItem(){var _this=this;this.itemsStatus={};Array.prototype.slice.call(this.toggleBodyEls).forEach(function(contentEl){contentEl.style.overflow="hidden";contentEl.style.maxHeight="none";var isOpen=contentEl.classList.contains(_this.activeClass);var id=contentEl.getAttribute(_this.toggleContentAttr);_this.setItemStetus(id,isOpen);if(!isOpen){_this.close(id,false,false);}else{_this.open(id,false,false);}});}},{key:"setListner",value:function setListner(){var _this2=this;Array.prototype.slice.call(this.toggleButtomEls).forEach(function(buttonEl,index){var id=buttonEl.getAttribute(_this2.toggleButtonAttr);if(id){buttonEl.addEventListener("click",function(e){e.preventDefault();_this2.toggleSlide(id,buttonEl);},false);}});}},{key:"setItemStetus",value:function setItemStetus(id,isOpen){this.itemsStatus[id]={isOpen:isOpen};}},{key:"toggleSlide",value:function toggleSlide(id){var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(this.itemsStatus[id].isOpen===false){this.open(id,isRunCallback,this.isAimation);}else{this.close(id,isRunCallback,this.isAimation);}}},{key:"open",value:function open(id){var _this3=this;var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var isAimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!id)return;if(this.closeOthers){Array.prototype.slice.call(this.toggleBodyEls).forEach(function(contentEl,index){var closeId=contentEl.getAttribute(_this3.toggleContentAttr);if(closeId!==id)_this3.close(closeId,false,isAimation);});}if(isRunCallback!==false)this.onSlideStart(true,id);var toggleBody=document.querySelector("["+this.toggleContentAttr+"='"+id+"']");var clientHeight=this.getTargetHeight(toggleBody);toggleBody.classList.add(this.activeClass);var toggleButton=document.querySelectorAll("["+this.toggleButtonAttr+"='"+id+"']");if(toggleButton.length>0){Array.prototype.slice.call(toggleButton).forEach(function(button,index){button.classList.add(_this3.activeClass);});}if(isAimation){toggleBody.style.overflow="hidden";toggleBody.style.transition=this.animatinSpeed+"ms "+this.cssEasing;toggleBody.style.maxHeight=(clientHeight||"1000")+"px";setTimeout(function(){if(isRunCallback!==false)_this3.onSlideEnd(true,id);toggleBody.style.maxHeight="none";toggleBody.style.transition="";toggleBody.style.overflow="";},this.animatinSpeed);}else{toggleBody.style.maxHeight="none";toggleBody.style.overflow="";}if(this.itemsStatus.hasOwnProperty(id)){this.itemsStatus[id].isOpen=true;}}},{key:"close",value:function close(id){var _this4=this;var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var isAimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!id)return;if(isRunCallback!==false)this.onSlideStart(false,id);var toggleBody=document.querySelector("["+this.toggleContentAttr+"='"+id+"']");toggleBody.style.overflow="hidden";toggleBody.classList.remove(this.activeClass);toggleBody.style.maxHeight=toggleBody.clientHeight+"px";setTimeout(function(){toggleBody.style.maxHeight="0px";},1);var toggleButton=document.querySelectorAll("["+this.toggleButtonAttr+"='"+id+"']");if(toggleButton.length>0){Array.prototype.slice.call(toggleButton).forEach(function(button,index){button.classList.remove(_this4.activeClass);});}if(isAimation){toggleBody.style.transition=this.animatinSpeed+"ms "+this.cssEasing;setTimeout(function(){if(isRunCallback!==false)_this4.onSlideEnd(false,id);toggleBody.style.transition="";},this.animatinSpeed);}else{this.onSlideEnd(false,id);}if(this.itemsStatus.hasOwnProperty(id)){this.itemsStatus[id].isOpen=false;}}},{key:"getTargetHeight",value:function getTargetHeight(targetEl){if(!targetEl)return;var cloneEl=targetEl.cloneNode(true);var parentEl=targetEl.parentNode;cloneEl.style.maxHeight="none";cloneEl.style.opacity="0";parentEl.appendChild(cloneEl);var clientHeight=cloneEl.clientHeight;parentEl.removeChild(cloneEl);return clientHeight;}}]);return HandyCollapse;}();if((typeof module==="undefined"?"undefined":_typeof(module))==="object"){module.exports=HandyCollapse;}
