!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s=function(){function t(t){var e="object"==typeof t&&"nameSpace"in t?t.nameSpace:"hc",i={nameSpace:"hc",toggleButtonAttr:"data-"+e+"-control",toggleContentAttr:"data-"+e+"-content",activeClass:"is-active",isAnimation:!0,closeOthers:!0,animationSpeed:400,cssEasing:"ease-in-out",onSlideStart:function(){},onSlideEnd:function(){}};Object.assign(this,i,t),this.toggleBodyEls=document.querySelectorAll("["+this.toggleContentAttr+"]"),this.toggleButtomEls=document.querySelectorAll("["+this.toggleButtonAttr+"]"),this.init()}return t.prototype.init=function(){this.toggleBodyEls&&this.initItems(),this.toggleButtomEls&&this.setListner()},t.prototype.initItems=function(){var t=this;this.itemsStatus={},Array.prototype.slice.call(this.toggleBodyEls).forEach(function(e){t.setItem(e)})},t.prototype.setItem=function(t){t.style.overflow="hidden",t.style.maxHeight="none";var e=t.classList.contains(this.activeClass),i=t.getAttribute(this.toggleContentAttr);this.setItemStatus(i,e),e?this.open(i,!1,!1):this.close(i,!1,!1)},t.prototype.setListner=function(){var t=this;Array.prototype.slice.call(this.toggleButtomEls).forEach(function(e){var i=e.getAttribute(t.toggleButtonAttr);i&&e.addEventListener("click",function(s){s.preventDefault(),t.toggleSlide(i,e)},!1)})},t.prototype.setItemStatus=function(t,e){this.itemsStatus[t]={isOpen:e,isAnimating:!1}},t.prototype.toggleSlide=function(t,e){void 0===e&&(e=!0),this.itemsStatus[t].isAnimating||(!1===this.itemsStatus[t].isOpen?this.open(t,e,this.isAnimation):this.close(t,e,this.isAnimation))},t.prototype.open=function(t,e,i){var s=this;if(void 0===e&&(e=!0),void 0===i&&(i=!0),t){this.itemsStatus.hasOwnProperty(t)||this.setItemStatus(t,!1),this.itemsStatus[t].isAnimating=!0,this.closeOthers&&Array.prototype.slice.call(this.toggleBodyEls).forEach(function(e,n){var o=e.getAttribute(s.toggleContentAttr);o!==t&&s.close(o,!1,i)}),!1!==e&&this.onSlideStart(!0,t);var n=document.querySelector("["+this.toggleContentAttr+"='"+t+"']"),o=this.getTargetHeight(n);n.classList.add(this.activeClass);var r=document.querySelectorAll("["+this.toggleButtonAttr+"='"+t+"']");r.length>0&&Array.prototype.slice.call(r).forEach(function(t,e){t.classList.add(s.activeClass)}),i?(n.style.overflow="hidden",n.style.transition=this.animationSpeed+"ms "+this.cssEasing,n.style.maxHeight=(o||"1000")+"px",setTimeout(function(){!1!==e&&s.onSlideEnd(!0,t),n.style.maxHeight="none",n.style.transition="",n.style.overflow="",s.itemsStatus[t].isAnimating=!1},this.animationSpeed)):(n.style.maxHeight="none",n.style.overflow="",this.itemsStatus[t].isAnimating=!1),this.itemsStatus[t].isOpen=!0}},t.prototype.close=function(t,e,i){var s=this;if(void 0===e&&(e=!0),void 0===i&&(i=!0),t){this.itemsStatus.hasOwnProperty(t)||this.setItemStatus(t,!1),this.itemsStatus[t].isAnimating=!0,!1!==e&&this.onSlideStart(!1,t);var n=document.querySelector("["+this.toggleContentAttr+"='"+t+"']");n.style.overflow="hidden",n.classList.remove(this.activeClass),n.style.maxHeight=n.clientHeight+"px",setTimeout(function(){n.style.maxHeight="0px"},5);var o=document.querySelectorAll("["+this.toggleButtonAttr+"='"+t+"']");o.length>0&&Array.prototype.slice.call(o).forEach(function(t,e){t.classList.remove(s.activeClass)}),i?(n.style.transition=this.animationSpeed+"ms "+this.cssEasing,setTimeout(function(){!1!==e&&s.onSlideEnd(!1,t),n.style.transition="",s.itemsStatus[t].isAnimating=!1},this.animationSpeed)):(this.onSlideEnd(!1,t),this.itemsStatus[t].isAnimating=!1),this.itemsStatus.hasOwnProperty(t)&&(this.itemsStatus[t].isOpen=!1)}},t.prototype.getTargetHeight=function(t){if(t){var e=t.cloneNode(!0),i=t.parentNode;e.style.maxHeight="none",e.style.opacity="0",i.appendChild(e);var s=e.clientHeight;return i.removeChild(e),s}},t}();window.HandyCollapse=s}]);