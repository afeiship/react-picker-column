!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types"],t):"object"==typeof exports?exports.ReactSelect=t(require("react"),require("classnames"),require("prop-types")):e.ReactSelect=t(e.react,e.classnames,e["prop-types"])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=r(i);t.default=a.default},function(t,n){t.exports=e},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,c,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6);var h=n(8),p=r(h),d=n(1),v=n(7),m=r(v),g=(c=l=function(t){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleTouchStart=function(e){t._startY=e.targetTouches[0].pageY,t.setState({initialTranslate:t.state.translate})},t.handleTouchMove=function(e){e.preventDefault(),t._offsetY=e.targetTouches[0].pageY-t._startY,t._isMoving=!0,t.setState({translate:t.translate})},t.handleTouchEnd=function(e){if(t._isMoving){var n=t.props.items;t.handleChange(n[t.activeIndex]),t.reset()}},t.handleTouchCancel=function(e){t._isMoving&&t.setState({translate:t.state.initialTranslate},t.reset)},t.handleItemClick=function(e,n){var r=t.props,i=r.itemHeight,a=r.columnHeight,o=r.value;n!==o&&t.setState({translate:a/2-i/2-e*i},function(){t.handleChange(n)})},t.handleChange=function(e){t.props.onChange(e)},t.initialState(e),t}return s(n,t),f(n,[{key:"itemStyle",get:function(){var e=this.props.itemHeight;return{height:e+"px",lineHeight:e+"px"}}},{key:"highlightStyle",get:function(){var e=this.props.itemHeight;return{height:e,marginTop:-(e/2)}}},{key:"rootStyle",get:function(){var e=this.props.columnHeight,t="translate3d(0, "+this.state.translate+"px, 0)",n=this._isMoving;return{height:e,WebkitTransform:t,transform:t,transitionDuration:n?"0ms":null}}},{key:"translate",get:function(){var e=this.state,t=e.minTranslate,n=e.maxTranslate,r=this.state.initialTranslate+this._offsetY;return r<t?r=t-Math.pow(t-r,.8):r>n&&(r=n+Math.pow(r-n,.8)),r}},{key:"activeIndex",get:function(){var e=this.props,t=e.items,n=e.itemHeight,r=e.value,i=this.state||{},a=i.translate,o=i.minTranslate,s=i.maxTranslate,l=t.indexOf(r);switch(!0){case!a:return l===-1?0:l;case a>s:return 0;case a<o:return t.length-1;default:return-Math.floor((a-s)/n)}}}]),f(n,[{key:"reset",value:function(){this._isMoving=!1,this._startY=0,this._offsetY=0,this.setState({initialTranslate:0})}},{key:"getIndex",value:function(e,t){var n=-1;return e.forEach(function(e,r){e.value===t&&(n=r)}),n}},{key:"componentWillReceiveProps",value:function(e){this._isMoving||(this.initialState(e),this.setState(this.state))}},{key:"initialState",value:function(e){var t=e.items,n=e.itemHeight,r=e.columnHeight;this.state={translate:r/2-n/2-this.activeIndex*n,minTranslate:r/2-n*t.length+n/2,maxTranslate:r/2-n/2}}},{key:"renderItems",value:function(){var t=this,n=this.props,r=n.items,i=n.value;return r.map(function(n,r){return e.createElement("div",{key:r,className:(0,m.default)("react-select-item",{"react-select-item-selected":n===i}),style:t.itemStyle,onClick:function(){return t.handleItemClick(r,n)}},n)})}},{key:"render",value:function(){var t=this.props,n=t.className,r=(t.items,t.itemHeight,t.columnHeight,i(t,["className","items","itemHeight","columnHeight"]));return e.createElement("div",u({},r,{className:(0,m.default)("react-select",n)}),e.createElement("div",{className:"react-select-scroller",style:this.rootStyle,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},this.renderItems()),e.createElement("div",{className:"react-select-highlight",style:this.highlightStyle}))}}]),n}(d.PureComponent),l.propTypes={className:p.default.string,items:p.default.array,value:p.default.any,itemHeight:p.default.number,columnHeight:p.default.number,onChange:p.default.func},l.defaultProps={itemHeight:36,columnHeight:200},c);t.default=g}).call(t,n(1))},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,'.react-select{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;position:relative;overflow:hidden;text-align:center;background:#cfd5da;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-select-scroller{transition:.3s;transition-timing-function:ease-out}.react-select-item{position:relative;padding:0 10px;white-space:nowrap;color:#707274;overflow:hidden;text-overflow:ellipsis}.react-select-item.react-select-item-selected{color:#000}.react-select-highlight{position:absolute;top:50%;left:0;width:100%;pointer-events:none}.react-select-highlight:after,.react-select-highlight:before{content:" ";position:absolute;left:0;right:auto;display:block;width:100%;height:1px;background-color:#a8abb0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.react-select-highlight:before{top:0;bottom:auto}.react-select-highlight:after{bottom:0;top:auto}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(c(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(c(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],a=i[0],o=i[1],s=i[2],l=i[3],c={css:o,media:s,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=m(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var a=y++;n=g||(g=s(t)),r=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=h.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=n[o],l=p[s.id];l.refs--,a.push(l)}if(e){var c=i(e);r(c,t)}for(var o=0;o<a.length;o++){var l=a[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-select.js.map