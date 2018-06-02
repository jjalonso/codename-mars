!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=428)}([function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t){return!!t.get&&"function"==typeof t.get||!!t.set&&"function"==typeof t.set}function n(t,e,n){var s=n?t[e]:Object.getOwnPropertyDescriptor(t,e);return!n&&s.value&&"object"==typeof s.value&&(s=s.value),!(!s||!i(s))&&(void 0===s.enumerable&&(s.enumerable=!0),void 0===s.configurable&&(s.configurable=!0),s)}function s(t,e){var i=Object.getOwnPropertyDescriptor(t,e);return!!i&&(i.value&&"object"==typeof i.value&&(i=i.value),!1===i.configurable)}function r(t,e,i,r){for(var o in e)if(e.hasOwnProperty(o)){var h=n(e,o,i);if(!1!==h){var l=r||t;if(s(l.prototype,o)){if(a.ignoreFinals)continue;throw new Error("cannot override final property '"+o+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,o,h)}else t.prototype[o]=e[o]}}function o(t,e){if(e){Array.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++)r(t,e[i].prototype||e[i])}}function a(t){t||(t={});var e,i;if(t.initialize){if("function"!=typeof t.initialize)throw new Error("initialize must be a function");e=t.initialize,delete t.initialize}else if(t.Extends){var n=t.Extends;e=function(){n.apply(this,arguments)}}else e=function(){};t.Extends?(e.prototype=Object.create(t.Extends.prototype),e.prototype.constructor=e,i=t.Extends,delete t.Extends):e.prototype.constructor=e;var s=null;return t.Mixins&&(s=t.Mixins,delete t.Mixins),o(e,s),r(e,t,!0,i),e}a.extend=r,a.mixin=o,a.ignoreFinals=!1,t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=typeof t;return t&&"number"!==n&&"string"!==n&&t.hasOwnProperty(e)&&void 0!==t[e]?t[e]:i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(97),o=i(12),a=new n({Extends:o,initialize:function(t,e){o.call(this),this.scene=t,this.type=e,this.parentContainer=null,this.name="",this.active=!0,this.tabIndex=-1,this.data=null,this.renderFlags=15,this.cameraFilter=0,this.input=null,this.body=null,this.ignoreDestroy=!1,t.sys.queueDepthSort(),t.sys.events.once("shutdown",this.destroy,this)},setActive:function(t){return this.active=t,this},setName:function(t){return this.name=t,this},setDataEnabled:function(){return this.data||(this.data=new r(this)),this},setData:function(t,e){return this.data||(this.data=new r(this)),this.data.set(t,e),this},getData:function(t){return this.data||(this.data=new r(this)),this.data.get(t)},setInteractive:function(t,e,i){return this.scene.sys.input.enable(this,t,e,i),this},disableInteractive:function(){return this.input&&(this.input.enabled=!this.input.enabled),this},removeInteractive:function(){return this.scene.sys.input.clear(this),this.input=void 0,this},update:function(){},toJSON:function(){return s.ToJSON(this)},willRender:function(){return a.RENDER_MASK===this.renderFlags},getIndexList:function(){for(var t=this,e=this.parentContainer,i=[];e&&(i.unshift(e.getIndex(t)),t=e,e.parentContainer);)e=e.parentContainer;return i.unshift(this.scene.sys.displayList.getIndex(t)),i},destroy:function(){if(this.scene&&!this.ignoreDestroy){this.preDestroy&&this.preDestroy.call(this),this.emit("destroy",this);var t=this.scene.sys;t.displayList.remove(this),t.updateList.remove(this),this.input&&(t.input.clear(this),this.input=void 0),this.data&&(this.data.destroy(),this.data=void 0),this.body&&(this.body.destroy(),this.body=void 0),t.queueDepthSort(),this.active=!1,this.visible=!1,this.scene=void 0,this.parentContainer=void 0,this.removeAllListeners()}}});a.RENDER_MASK=15,t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(){};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.x=0,this.y=0,"object"==typeof t?(this.x=t.x||0,this.y=t.y||0):(void 0===e&&(e=t),this.x=t||0,this.y=e||0)},clone:function(){return new s(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setTo:function(t,e){return this.set(t,e)},setToPolar:function(t,e){return null==e&&(e=1),this.x=Math.cos(t)*e,this.y=Math.sin(t)*e,this},equals:function(t){return this.x===t.x&&this.y===t.y},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},distanceSq:function(t){var e=t.x-this.x,i=t.y-this.y;return e*e+i*i},length:function(){var t=this.x,e=this.y;return Math.sqrt(t*t+e*e)},lengthSq:function(){var t=this.x,e=this.y;return t*t+e*e},normalize:function(){var t=this.x,e=this.y,i=t*t+e*e;return i>0&&(i=1/Math.sqrt(i),this.x=t*i,this.y=e*i),this},normalizeRightHand:function(){var t=this.x;return this.x=-1*this.y,this.y=t,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this},transformMat3:function(t){var e=this.x,i=this.y,n=t.val;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this},transformMat4:function(t){var e=this.x,i=this.y,n=t.val;return this.x=n[0]*e+n[4]*i+n[12],this.y=n[1]*e+n[5]*i+n[13],this},reset:function(){return this.x=0,this.y=0,this}});s.ZERO=new s,t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(t&&"number"!=typeof t){if(t.hasOwnProperty(e))return t[e];if(e.indexOf(".")){for(var n=e.split("."),s=t,r=i,o=0;o<n.length;o++){if(!s.hasOwnProperty(n[o])){r=i;break}r=s[n[o]],s=s[n[o]]}return r}return i}return i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){void 0===t&&(t=0),void 0===e&&(e=t),this.x=t,this.y=e},setTo:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.x=t,this.y=e,this}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={},n={install:function(t){for(var e in i)t[e]=i[e]},register:function(t,e){i[t]=e},destroy:function(){i={}}};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.displayList,this.updateList,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.displayList=this.systems.displayList,this.updateList=this.systems.updateList,this.systems.events.once("destroy",this.destroy,this)},start:function(){this.systems.events.once("shutdown",this.shutdown,this)},existing:function(t){return(t.renderCanvas||t.renderWebGL)&&this.displayList.add(t),t.preUpdate&&this.updateList.add(t),t},shutdown:function(){this.systems.events.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null,this.displayList=null,this.updateList=null}});r.register=function(t,e){r.prototype.hasOwnProperty(t)||(r.prototype[t]=e)},s.register("GameObjectFactory",r,"add"),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(41),r=i(156),o=i(284),a=i(103),h=i(157),l=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return h(this,t)},setTo:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setSize:function(t,e){return void 0===e&&(e=t),this.width=t,this.height=e,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return void 0===t&&(t=new a),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return void 0===t&&(t=new a),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return void 0===t&&(t=new a),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return void 0===t&&(t=new a),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(5),r=function(t,e,i){var r=s(t,e,null);if(null===r)return i;if(Array.isArray(r))return n.RND.pick(r);if("object"==typeof r){if(r.hasOwnProperty("randInt"))return n.RND.integerInRange(r.randInt[0],r.randInt[1]);if(r.hasOwnProperty("randFloat"))return n.RND.realInRange(r.randFloat[0],r.randFloat[1])}else if("function"==typeof r)return r(e);return r};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){if("object"!=typeof t||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0};t.exports=i},function(t,e,i){"use strict";function n(){}function s(t,e,i){this.fn=t,this.context=e,this.once=i||!1}function r(t,e,i,n,r){if("function"!=typeof i)throw new TypeError("The listener must be a function");var o=new s(i,n||t,r),a=l?l+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],o]:t._events[a].push(o):(t._events[a]=o,t._eventsCount++),t}function o(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function a(){this._events=new n,this._eventsCount=0}var h=Object.prototype.hasOwnProperty,l="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(l=!1)),a.prototype.eventNames=function(){var t,e,i=[];if(0===this._eventsCount)return i;for(e in t=this._events)h.call(t,e)&&i.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(t)):i},a.prototype.listeners=function(t){var e=l?l+t:t,i=this._events[e];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,s=i.length,r=new Array(s);n<s;n++)r[n]=i[n].fn;return r},a.prototype.listenerCount=function(t){var e=l?l+t:t,i=this._events[e];return i?i.fn?1:i.length:0},a.prototype.emit=function(t,e,i,n,s,r){var o=l?l+t:t;if(!this._events[o])return!1;var a,h,u=this._events[o],c=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),c){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,i),!0;case 4:return u.fn.call(u.context,e,i,n),!0;case 5:return u.fn.call(u.context,e,i,n,s),!0;case 6:return u.fn.call(u.context,e,i,n,s,r),!0}for(h=1,a=new Array(c-1);h<c;h++)a[h-1]=arguments[h];u.fn.apply(u.context,a)}else{var d,f=u.length;for(h=0;h<f;h++)switch(u[h].once&&this.removeListener(t,u[h].fn,void 0,!0),c){case 1:u[h].fn.call(u[h].context);break;case 2:u[h].fn.call(u[h].context,e);break;case 3:u[h].fn.call(u[h].context,e,i);break;case 4:u[h].fn.call(u[h].context,e,i,n);break;default:if(!a)for(d=1,a=new Array(c-1);d<c;d++)a[d-1]=arguments[d];u[h].fn.apply(u[h].context,a)}}return!0},a.prototype.on=function(t,e,i){return r(this,t,e,i,!1)},a.prototype.once=function(t,e,i){return r(this,t,e,i,!0)},a.prototype.removeListener=function(t,e,i,n){var s=l?l+t:t;if(!this._events[s])return this;if(!e)return o(this,s),this;var r=this._events[s];if(r.fn)r.fn!==e||n&&!r.once||i&&r.context!==i||o(this,s);else{for(var a=0,h=[],u=r.length;a<u;a++)(r[a].fn!==e||n&&!r[a].once||i&&r[a].context!==i)&&h.push(r[a]);h.length?this._events[s]=1===h.length?h[0]:h:o(this,s)}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&o(this,e)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=l,a.EventEmitter=a,t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s={},r=new n({initialize:function(t){this.game=t,t.events.once("boot",this.boot,this)},boot:function(){this.game.events.once("destroy",this.destroy,this)},installGlobal:function(t,e){for(var i=t.game,n=t.scene,s=t.settings.map,r=0;r<e.length;r++){var o=e[r];i[o]&&(t[o]=i[o],s.hasOwnProperty(o)&&(n[s[o]]=t[o]))}},installLocal:function(t,e){for(var i=t.scene,n=t.settings.map,r=t.settings.isBooted,o=0;o<e.length;o++){var a=e[o];if(s[a]){var h=s[a],l=new h.plugin(i);t[h.mapping]=l,n.hasOwnProperty(h.mapping)&&(i[n[h.mapping]]=l),r&&l.boot()}}},remove:function(t){delete s[t]},destroy:function(){this.game=null}});r.register=function(t,e,i){s[t]={plugin:e,mapping:i}},t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.displayList,this.updateList,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.displayList=this.systems.displayList,this.updateList=this.systems.updateList,this.systems.events.once("destroy",this.destroy,this)},start:function(){this.systems.events.once("shutdown",this.shutdown,this)},shutdown:function(){this.systems.events.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null,this.displayList=null,this.updateList=null}});r.register=function(t,e){r.prototype.hasOwnProperty(t)||(r.prototype[t]=e)},s.register("GameObjectCreator",r,"make"),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Alpha:i(566),Animation:i(252),BlendMode:i(567),ComputedSize:i(568),Depth:i(569),Flip:i(570),GetBounds:i(571),Mask:i(572),MatrixStack:i(573),Origin:i(574),Pipeline:i(136),ScaleMode:i(575),ScrollFactor:i(576),Size:i(577),Texture:i(578),Tint:i(579),ToJSON:i(580),Transform:i(581),TransformMatrix:i(79),Visible:i(582)}},function(t,e){var i={};t.exports=i,function(){i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i.extend=function(t,e){var n,s;"boolean"==typeof e?(n=2,s=e):(n=1,s=!0);for(var r=n;r<arguments.length;r++){var o=arguments[r];if(o)for(var a in o)s&&o[a]&&o[a].constructor===Object?t[a]&&t[a].constructor!==Object?t[a]=o[a]:(t[a]=t[a]||{},i.extend(t[a],s,o[a])):t[a]=o[a]}return t},i.clone=function(t,e){return i.extend({},e,t)},i.keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var i in t)e.push(i);return e},i.values=function(t){var e=[];if(Object.keys){for(var i=Object.keys(t),n=0;n<i.length;n++)e.push(t[i[n]]);return e}for(var s in t)e.push(t[s]);return e},i.get=function(t,e,i,n){e=e.split(".").slice(i,n);for(var s=0;s<e.length;s+=1)t=t[e[s]];return t},i.set=function(t,e,n,s,r){var o=e.split(".").slice(s,r);return i.get(t,e,0,-1)[o[o.length-1]]=n,n},i.shuffle=function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(i.random()*(e+1)),s=t[e];t[e]=t[n],t[n]=s}return t},i.choose=function(t){return t[Math.floor(i.random()*t.length)]},i.isElement=function(t){return t instanceof HTMLElement},i.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},i.isFunction=function(t){return"function"==typeof t},i.isPlainObject=function(t){return"object"==typeof t&&t.constructor===Object},i.isString=function(t){return"[object String]"===Object.prototype.toString.call(t)},i.clamp=function(t,e,i){return t<e?e:t>i?i:t},i.sign=function(t){return t<0?-1:1},i.now=function(){if(window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return new Date-i._nowStartTime},i.random=function(e,i){return e=void 0!==e?e:0,i=void 0!==i?i:1,e+t()*(i-e)};var t=function(){return i._seed=(9301*i._seed+49297)%233280,i._seed/233280};i.colorToNumber=function(t){return t=t.replace("#",""),3==t.length&&(t=t.charAt(0)+t.charAt(0)+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)),parseInt(t,16)},i.logLevel=1,i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.nextId=function(){return i._nextId++},i.map=function(t,e){if(t.map)return t.map(e);for(var i=[],n=0;n<t.length;n+=1)i.push(e(t[n]));return i},i.topologicalSort=function(t){var i=[],n=[],s=[];for(var r in t)n[r]||s[r]||e(r,n,s,t,i);return i};var e=function(t,i,n,s,r){var o=s[t]||[];n[t]=!0;for(var a=0;a<o.length;a+=1){var h=o[a];n[h]||(i[h]||e(h,i,n,s,r))}n[t]=!1,i[t]=!0,r.push(t)};i.chain=function(){for(var t=[],e=0;e<arguments.length;e+=1){var i=arguments[e];i._chained?t.push.apply(t,i._chained):t.push(i)}var n=function(){for(var e,i=new Array(arguments.length),n=0,s=arguments.length;n<s;n++)i[n]=arguments[n];for(n=0;n<t.length;n+=1){var r=t[n].apply(e,i);void 0!==r&&(e=r)}return e};return n._chained=t,n},i.chainPathBefore=function(t,e,n){return i.set(t,e,i.chain(n,i.get(t,e)))},i.chainPathAfter=function(t,e,n){return i.set(t,e,i.chain(i.get(t,e),n))}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(341),s={PI2:2*Math.PI,TAU:.5*Math.PI,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:new n};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t,e,i,s,r,o){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=o.width),void 0===s&&(s=o.height);var a=n(r,"isNotEmpty",!1),h=n(r,"isColliding",!1),l=n(r,"hasInterestingFace",!1);t<0&&(i+=t,t=0),e<0&&(s+=e,e=0),t+i>o.width&&(i=Math.max(o.width-t,0)),e+s>o.height&&(s=Math.max(o.height-e,0));for(var u=[],c=e;c<e+s;c++)for(var d=t;d<t+i;d++){var f=o.data[c][d];if(null!==f){if(a&&-1===f.index)continue;if(h&&!f.collides)continue;if(l&&!f.hasInterestingFace)continue;u.push(f)}}return u};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(11),s=function(){var t,e,i,r,o,a,h=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof h&&(c=h,h=arguments[1]||{},l=2),u===l&&(h=this,--l);l<u;l++)if(null!=(t=arguments[l]))for(e in t)i=h[e],r=t[e],h!==r&&(c&&r&&(n(r)||(o=Array.isArray(r)))?(o?(o=!1,a=i&&Array.isArray(i)?i:[]):a=i&&n(i)?i:{},h[e]=s(c,a,r)):void 0!==r&&(h[e]=r));return h};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={LOADER_IDLE:0,LOADER_LOADING:1,LOADER_PROCESSING:2,LOADER_COMPLETE:3,LOADER_SHUTDOWN:4,LOADER_DESTROYED:5,FILE_PENDING:10,FILE_LOADING:11,FILE_LOADED:12,FILE_FAILED:13,FILE_PROCESSING:14,FILE_ERRORED:16,FILE_COMPLETE:17,FILE_DESTROYED:18,FILE_POPULATED:19};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(1),o=i(162),a=i(163),h=i(306),l=i(105),u=new n({initialize:function(t,e){this.loader=t,this.cache=r(e,"cache",!1),this.type=r(e,"type",!1),this.key=r(e,"key",!1);var i=this.key;if(t.prefix&&""!==t.prefix&&(this.key=t.prefix+i),!this.type||!this.key)throw new Error("Error calling 'Loader."+this.type+"' invalid key provided.");this.url=r(e,"url"),void 0===this.url?this.url=t.path+i+"."+r(e,"extension",""):"function"!=typeof this.url&&(this.url=t.path+this.url),this.src="",this.xhrSettings=l(r(e,"responseType",void 0)),r(e,"xhrSettings",!1)&&(this.xhrSettings=a(this.xhrSettings,r(e,"xhrSettings",{}))),this.xhrLoader=null,this.state="function"==typeof this.url?s.FILE_POPULATED:s.FILE_PENDING,this.bytesTotal=0,this.bytesLoaded=-1,this.percentComplete=-1,this.crossOrigin=void 0,this.data=void 0,this.config=r(e,"config",{}),this.multiFile,this.linkFile},setLink:function(t){this.linkFile=t,t.linkFile=this},resetXHR:function(){this.xhrLoader&&(this.xhrLoader.onload=void 0,this.xhrLoader.onerror=void 0,this.xhrLoader.onprogress=void 0)},load:function(){this.state===s.FILE_POPULATED?this.loader.nextFile(this,!0):(this.src=o(this,this.loader.baseURL),0===this.src.indexOf("data:")?console.warn("Local data URIs are not supported: "+this.key):this.xhrLoader=h(this,this.loader.xhr))},onLoad:function(t,e){var i=!(e.target&&200!==e.target.status);4===t.readyState&&t.status>=400&&t.status<=599&&(i=!1),this.resetXHR(),this.loader.nextFile(this,i)},onError:function(){this.resetXHR(),this.loader.nextFile(this,!1)},onProgress:function(t){t.lengthComputable&&(this.bytesLoaded=t.loaded,this.bytesTotal=t.total,this.percentComplete=Math.min(this.bytesLoaded/this.bytesTotal,1),this.loader.emit("fileprogress",this,this.percentComplete))},onProcess:function(){this.state=s.FILE_PROCESSING,this.onProcessComplete()},onProcessComplete:function(){this.state=s.FILE_COMPLETE,this.multiFile&&this.multiFile.onFileComplete(this),this.loader.fileProcessComplete(this)},onProcessError:function(){this.state=s.FILE_ERRORED,this.multiFile&&this.multiFile.onFileFailed(this),this.loader.fileProcessComplete(this)},hasCacheConflict:function(){return this.cache&&this.cache.exists(this.key)},addToCache:function(){this.cache&&this.cache.add(this.key,this.data),this.pendingDestroy()},pendingDestroy:function(t){void 0===t&&(t=this.data);var e=this.key,i=this.type;this.loader.emit("filecomplete",e,i,t),this.loader.emit("filecomplete_"+i+"_"+e,e,i,t),this.loader.flagForRemoval(this)},destroy:function(){this.loader=null,this.cache=null,this.xhrSettings=null,this.multiFile=null,this.linkFile=null,this.data=null}});u.createObjectURL=function(t,e,i){if("function"==typeof URL)t.src=URL.createObjectURL(e);else{var n=new FileReader;n.onload=function(){t.removeAttribute("crossOrigin"),t.src="data:"+(e.type||i)+";base64,"+n.result.split(",")[1]},n.onerror=t.onerror,n.readAsDataURL(e)}},u.revokeObjectURL=function(t){"function"==typeof URL&&URL.revokeObjectURL(t.src)},t.exports=u},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r){void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=1);var o,a=0,h=t.length;if(1===r)for(o=s;o<h;o++)t[o][e]=i+a*n,a++;else for(o=s;o>=0;o--)t[o][e]=i+a*n,a++;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n={VERSION:"3.7.1",BlendModes:i(74),ScaleModes:i(88),AUTO:0,CANVAS:1,WEBGL:2,HEADLESS:3,FOREVER:-1,NONE:4,UP:5,DOWN:6,LEFT:7,RIGHT:8};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=i(10),r=i(88),o=function(t,e,i){e.x=s(i,"x",0),e.y=s(i,"y",0),e.depth=s(i,"depth",0),e.flipX=s(i,"flipX",!1),e.flipY=s(i,"flipY",!1);var o=s(i,"scale",null);"number"==typeof o?e.setScale(o):null!==o&&(e.scaleX=s(o,"x",1),e.scaleY=s(o,"y",1));var a=s(i,"scrollFactor",null);"number"==typeof a?e.setScrollFactor(a):null!==a&&(e.scrollFactorX=s(a,"x",1),e.scrollFactorY=s(a,"y",1)),e.rotation=s(i,"rotation",0);var h=s(i,"angle",null);null!==h&&(e.angle=h),e.alpha=s(i,"alpha",1);var l=s(i,"origin",null);if("number"==typeof l)e.setOrigin(l);else if(null!==l){var u=s(l,"x",.5),c=s(l,"y",.5);e.setOrigin(u,c)}return e.scaleMode=s(i,"scaleMode",r.DEFAULT),e.blendMode=s(i,"blendMode",n.NORMAL),e.visible=s(i,"visible",!0),s(i,"add",!0)&&t.sys.displayList.add(e),e.preUpdate&&t.sys.updateList.add(e),e};t.exports=o},function(t,e,i){var n={};t.exports=n;var s=i(43),r=i(30),o=i(87),a=i(16),h=i(42),l=i(180);!function(){n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n.create=function(e){var i={id:a.nextId(),type:"body",label:"Body",gameObject:null,parts:[],plugin:{},angle:0,vertices:s.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},previousPositionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,ignoreGravity:!1,ignorePointer:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0},lineWidth:0},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},n=a.extend(i,e);return t(n,e),n},n.nextGroup=function(t){return t?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var t=function(t,e){e=e||{},n.set(t,{bounds:t.bounds||h.create(t.vertices),positionPrev:t.positionPrev||r.clone(t.position),anglePrev:t.anglePrev||t.angle,vertices:t.vertices,parts:t.parts||[t],isStatic:t.isStatic,isSleeping:t.isSleeping,parent:t.parent||t}),s.rotate(t.vertices,t.angle,t.position),l.rotate(t.axes,t.angle),h.update(t.bounds,t.vertices,t.velocity),n.set(t,{axes:e.axes||t.axes,area:e.area||t.area,mass:e.mass||t.mass,inertia:e.inertia||t.inertia});var i=t.isStatic?"#2e2b44":a.choose(["#006BA6","#0496FF","#FFBC42","#D81159","#8F2D56"]);t.render.fillStyle=t.render.fillStyle||i,t.render.strokeStyle=t.render.strokeStyle||"#000",t.render.sprite.xOffset+=-(t.bounds.min.x-t.position.x)/(t.bounds.max.x-t.bounds.min.x),t.render.sprite.yOffset+=-(t.bounds.min.y-t.position.y)/(t.bounds.max.y-t.bounds.min.y)};n.set=function(t,e){var i,s;"string"==typeof e&&(i=e,e={},e[i]=s);for(i in e)if(e.hasOwnProperty(i))switch(s=e[i],i){case"isStatic":n.setStatic(t,s);break;case"isSleeping":o.set(t,s);break;case"mass":n.setMass(t,s);break;case"density":n.setDensity(t,s);break;case"inertia":n.setInertia(t,s);break;case"vertices":n.setVertices(t,s);break;case"position":n.setPosition(t,s);break;case"angle":n.setAngle(t,s);break;case"velocity":n.setVelocity(t,s);break;case"angularVelocity":n.setAngularVelocity(t,s);break;case"parts":n.setParts(t,s);break;default:t[i]=s}},n.setStatic=function(t,e){for(var i=0;i<t.parts.length;i++){var n=t.parts[i];n.isStatic=e,e?(n._original={restitution:n.restitution,friction:n.friction,mass:n.mass,inertia:n.inertia,density:n.density,inverseMass:n.inverseMass,inverseInertia:n.inverseInertia},n.restitution=0,n.friction=1,n.mass=n.inertia=n.density=1/0,n.inverseMass=n.inverseInertia=0,n.positionPrev.x=n.position.x,n.positionPrev.y=n.position.y,n.anglePrev=n.angle,n.angularVelocity=0,n.speed=0,n.angularSpeed=0,n.motion=0):n._original&&(n.restitution=n._original.restitution,n.friction=n._original.friction,n.mass=n._original.mass,n.inertia=n._original.inertia,n.density=n._original.density,n.inverseMass=n._original.inverseMass,n.inverseInertia=n._original.inverseInertia,n._original=null)}},n.setMass=function(t,e){var i=t.inertia/(t.mass/6);t.inertia=i*(e/6),t.inverseInertia=1/t.inertia,t.mass=e,t.inverseMass=1/t.mass,t.density=t.mass/t.area},n.setDensity=function(t,e){n.setMass(t,e*t.area),t.density=e},n.setInertia=function(t,e){t.inertia=e,t.inverseInertia=1/t.inertia},n.setVertices=function(t,e){e[0].body===t?t.vertices=e:t.vertices=s.create(e,t),t.axes=l.fromVertices(t.vertices),t.area=s.area(t.vertices),n.setMass(t,t.density*t.area);var i=s.centre(t.vertices);s.translate(t.vertices,i,-1),n.setInertia(t,n._inertiaScale*s.inertia(t.vertices,t.mass)),s.translate(t.vertices,t.position),h.update(t.bounds,t.vertices,t.velocity)},n.setParts=function(t,i,r){var o;for(i=i.slice(0),t.parts.length=0,t.parts.push(t),t.parent=t,o=0;o<i.length;o++){var a=i[o];a!==t&&(a.parent=t,t.parts.push(a))}if(1!==t.parts.length){if(r=void 0===r||r){var h=[];for(o=0;o<i.length;o++)h=h.concat(i[o].vertices);s.clockwiseSort(h);var l=s.hull(h),u=s.centre(l);n.setVertices(t,l),s.translate(t.vertices,u)}var c=e(t);t.area=c.area,t.parent=t,t.position.x=c.centre.x,t.position.y=c.centre.y,t.positionPrev.x=c.centre.x,t.positionPrev.y=c.centre.y,n.setMass(t,c.mass),n.setInertia(t,c.inertia),n.setPosition(t,c.centre)}},n.setPosition=function(t,e){var i=r.sub(e,t.position);t.positionPrev.x+=i.x,t.positionPrev.y+=i.y;for(var n=0;n<t.parts.length;n++){var o=t.parts[n];o.position.x+=i.x,o.position.y+=i.y,s.translate(o.vertices,i),h.update(o.bounds,o.vertices,t.velocity)}},n.setAngle=function(t,e){var i=e-t.angle;t.anglePrev+=i;for(var n=0;n<t.parts.length;n++){var o=t.parts[n];o.angle+=i,s.rotate(o.vertices,i,t.position),l.rotate(o.axes,i),h.update(o.bounds,o.vertices,t.velocity),n>0&&r.rotateAbout(o.position,i,t.position,o.position)}},n.setVelocity=function(t,e){t.positionPrev.x=t.position.x-e.x,t.positionPrev.y=t.position.y-e.y,t.velocity.x=e.x,t.velocity.y=e.y,t.speed=r.magnitude(t.velocity)},n.setAngularVelocity=function(t,e){t.anglePrev=t.angle-e,t.angularVelocity=e,t.angularSpeed=Math.abs(t.angularVelocity)},n.translate=function(t,e){n.setPosition(t,r.add(t.position,e))},n.rotate=function(t,e,i){if(i){var s=Math.cos(e),r=Math.sin(e),o=t.position.x-i.x,a=t.position.y-i.y;n.setPosition(t,{x:i.x+(o*s-a*r),y:i.y+(o*r+a*s)}),n.setAngle(t,t.angle+e)}else n.setAngle(t,t.angle+e)},n.scale=function(t,i,r,o){o=o||t.position;for(var a=0;a<t.parts.length;a++){var u=t.parts[a];u.position.x=o.x+(u.position.x-o.x)*i,u.position.y=o.y+(u.position.y-o.y)*r,s.scale(u.vertices,i,r,o),u.axes=l.fromVertices(u.vertices),t.isStatic||(u.area=s.area(u.vertices),n.setMass(u,t.density*u.area),s.translate(u.vertices,{x:-u.position.x,y:-u.position.y}),n.setInertia(u,s.inertia(u.vertices,u.mass)),s.translate(u.vertices,{x:u.position.x,y:u.position.y})),h.update(u.bounds,u.vertices,t.velocity)}if(t.circleRadius&&(i===r?t.circleRadius*=i:t.circleRadius=null),!t.isStatic){var c=e(t);t.area=c.area,n.setMass(t,c.mass),n.setInertia(t,c.inertia)}},n.update=function(t,e,i,n){var o=Math.pow(e*i*t.timeScale,2),a=1-t.frictionAir*i*t.timeScale,u=t.position.x-t.positionPrev.x,c=t.position.y-t.positionPrev.y;t.velocity.x=u*a*n+t.force.x/t.mass*o,t.velocity.y=c*a*n+t.force.y/t.mass*o,t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.position.x+=t.velocity.x,t.position.y+=t.velocity.y,t.angularVelocity=(t.angle-t.anglePrev)*a*n+t.torque/t.inertia*o,t.anglePrev=t.angle,t.angle+=t.angularVelocity,t.speed=r.magnitude(t.velocity),t.angularSpeed=Math.abs(t.angularVelocity);for(var d=0;d<t.parts.length;d++){var f=t.parts[d];s.translate(f.vertices,t.velocity),d>0&&(f.position.x+=t.velocity.x,f.position.y+=t.velocity.y),0!==t.angularVelocity&&(s.rotate(f.vertices,t.angularVelocity,t.position),l.rotate(f.axes,t.angularVelocity),d>0&&r.rotateAbout(f.position,t.angularVelocity,t.position,f.position)),h.update(f.bounds,f.vertices,t.velocity)}},n.applyForce=function(t,e,i){t.force.x+=i.x,t.force.y+=i.y;var n={x:e.x-t.position.x,y:e.y-t.position.y};t.torque+=n.x*i.y-n.y*i.x};var e=function(t){for(var e={mass:0,area:0,inertia:0,centre:{x:0,y:0}},i=1===t.parts.length?0:1;i<t.parts.length;i++){var n=t.parts[i],s=n.mass!==1/0?n.mass:1;e.mass+=n.mass,e.area+=n.area,e.inertia+=n.inertia,e.centre=r.add(e.centre,r.mult(n.position,s))}return e.centre=r.div(e.centre,e.mass),e}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(23),s=i(128),r=[],o=!1;t.exports=function(){var t=function(t,e,i,h,l){void 0===e&&(e=1),void 0===i&&(i=1),void 0===h&&(h=n.CANVAS),void 0===l&&(l=!1);var u,c=a(h);return null===c?(c={parent:t,canvas:document.createElement("canvas"),type:h},h===n.CANVAS&&r.push(c),u=c.canvas):(c.parent=t,u=c.canvas),l&&(c.parent=u),u.width=e,u.height=i,o&&h===n.CANVAS&&s.disable(u.getContext("2d")),u},e=function(e,i,s){return t(e,i,s,n.CANVAS)},i=function(e,i,s){return t(e,i,s,n.WEBGL)},a=function(t){if(void 0===t&&(t=n.CANVAS),t===n.WEBGL)return null;for(var e=0;e<r.length;e++){var i=r[e];if(!i.parent&&i.type===t)return i}return null},h=function(t){var e=t instanceof HTMLCanvasElement;r.forEach(function(i){(e&&i.canvas===t||!e&&i.parent===t)&&(i.parent=null,i.canvas.width=1,i.canvas.height=1)})},l=function(){var t=0;return r.forEach(function(e){e.parent&&t++}),t},u=function(){return r.length-l()};return{create2D:e,create:t,createWebGL:i,disableSmoothing:function(){o=!0},enableSmoothing:function(){o=!1},first:a,free:u,pool:r,remove:h,total:l}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CSV:0,TILED_JSON:1,ARRAY_2D:2,WELTMEISTER:3}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.max(e,Math.min(i,t))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r){void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=1);var o,a=0,h=t.length;if(1===r)for(o=s;o<h;o++)t[o][e]+=i+a*n,a++;else for(o=s;o>=0;o--)t[o][e]+=i+a*n,a++;return t};t.exports=i},function(t,e){var i={};t.exports=i,function(){i.create=function(t,e){return{x:t||0,y:e||0}},i.clone=function(t){return{x:t.x,y:t.y}},i.magnitude=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},i.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y},i.rotate=function(t,e,i){var n=Math.cos(e),s=Math.sin(e);i||(i={});var r=t.x*n-t.y*s;return i.y=t.x*s+t.y*n,i.x=r,i},i.rotateAbout=function(t,e,i,n){var s=Math.cos(e),r=Math.sin(e);n||(n={});var o=i.x+((t.x-i.x)*s-(t.y-i.y)*r);return n.y=i.y+((t.x-i.x)*r+(t.y-i.y)*s),n.x=o,n},i.normalise=function(t){var e=i.magnitude(t);return 0===e?{x:0,y:0}:{x:t.x/e,y:t.y/e}},i.dot=function(t,e){return t.x*e.x+t.y*e.y},i.cross=function(t,e){return t.x*e.y-t.y*e.x},i.cross3=function(t,e,i){return(e.x-t.x)*(i.y-t.y)-(e.y-t.y)*(i.x-t.x)},i.add=function(t,e,i){return i||(i={}),i.x=t.x+e.x,i.y=t.y+e.y,i},i.sub=function(t,e,i){return i||(i={}),i.x=t.x-e.x,i.y=t.y-e.y,i},i.mult=function(t,e){return{x:t.x*e,y:t.y*e}},i.div=function(t,e){return{x:t.x/e,y:t.y/e}},i.perp=function(t,e){return e=!0===e?-1:1,{x:e*-t.y,y:e*t.x}},i.neg=function(t){return{x:-t.x,y:-t.y}},i.angle=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.y+t.height-t.height*t.originY};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x-t.width*t.originX};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x+t.width-t.width*t.originX};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.y-t.height*t.originY};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.y=e-t.height+t.height*t.originY,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x=e+t.width*t.originX,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x=e-t.width+t.width*t.originX,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.y=e+t.height*t.originY,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(2),o=i(627),a=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Mask,s.Origin,s.Pipeline,s.ScaleMode,s.ScrollFactor,s.Size,s.Texture,s.Tint,s.Transform,s.Visible,o],initialize:function(t,e,i,n,o){r.call(this,t,"Sprite"),this.anims=new s.Animation(this),this.setTexture(n,o),this.setPosition(e,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline("TextureTintPipeline")},preUpdate:function(t,e){this.anims.update(t,e)},play:function(t,e,i){return this.anims.play(t,e,i),this},toJSON:function(){return s.ToJSON(this)}});t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(t.radius>0&&e>=t.left&&e<=t.right&&i>=t.top&&i<=t.bottom){return(t.x-e)*(t.x-e)+(t.y-i)*(t.y-i)<=t.radius*t.radius}return!1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return!(t.width<=0||t.height<=0)&&(t.x<=e&&t.x+t.width>=e&&t.y<=i&&t.y+t.height>=i)};t.exports=i},function(t,e){var i={};t.exports=i,function(){i.create=function(t){var e={min:{x:0,y:0},max:{x:0,y:0}};return t&&i.update(e,t),e},i.update=function(t,e,i){t.min.x=1/0,t.max.x=-1/0,t.min.y=1/0,t.max.y=-1/0;for(var n=0;n<e.length;n++){var s=e[n];s.x>t.max.x&&(t.max.x=s.x),s.x<t.min.x&&(t.min.x=s.x),s.y>t.max.y&&(t.max.y=s.y),s.y<t.min.y&&(t.min.y=s.y)}i&&(i.x>0?t.max.x+=i.x:t.min.x+=i.x,i.y>0?t.max.y+=i.y:t.min.y+=i.y)},i.contains=function(t,e){return e.x>=t.min.x&&e.x<=t.max.x&&e.y>=t.min.y&&e.y<=t.max.y},i.overlaps=function(t,e){return t.min.x<=e.max.x&&t.max.x>=e.min.x&&t.max.y>=e.min.y&&t.min.y<=e.max.y},i.translate=function(t,e){t.min.x+=e.x,t.max.x+=e.x,t.min.y+=e.y,t.max.y+=e.y},i.shift=function(t,e){var i=t.max.x-t.min.x,n=t.max.y-t.min.y;t.min.x=e.x,t.max.x=e.x+i,t.min.y=e.y,t.max.y=e.y+n}}()},function(t,e,i){var n={};t.exports=n;var s=i(30),r=i(16);!function(){n.create=function(t,e){for(var i=[],n=0;n<t.length;n++){var s=t[n],r={x:s.x,y:s.y,index:n,body:e,isInternal:!1,contact:null};r.contact={vertex:r,normalImpulse:0,tangentImpulse:0},i.push(r)}return i},n.fromPath=function(t,e){var i=/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi,s=[];return t.replace(i,function(t,e,i){s.push({x:parseFloat(e),y:parseFloat(i)})}),n.create(s,e)},n.centre=function(t){for(var e,i,r,o=n.area(t,!0),a={x:0,y:0},h=0;h<t.length;h++)r=(h+1)%t.length,e=s.cross(t[h],t[r]),i=s.mult(s.add(t[h],t[r]),e),a=s.add(a,i);return s.div(a,6*o)},n.mean=function(t){for(var e={x:0,y:0},i=0;i<t.length;i++)e.x+=t[i].x,e.y+=t[i].y;return s.div(e,t.length)},n.area=function(t,e){for(var i=0,n=t.length-1,s=0;s<t.length;s++)i+=(t[n].x-t[s].x)*(t[n].y+t[s].y),n=s;return e?i/2:Math.abs(i)/2},n.inertia=function(t,e){for(var i,n,r=0,o=0,a=t,h=0;h<a.length;h++)n=(h+1)%a.length,i=Math.abs(s.cross(a[n],a[h])),r+=i*(s.dot(a[n],a[n])+s.dot(a[n],a[h])+s.dot(a[h],a[h])),o+=i;return e/6*(r/o)},n.translate=function(t,e,i){var n;if(i)for(n=0;n<t.length;n++)t[n].x+=e.x*i,t[n].y+=e.y*i;else for(n=0;n<t.length;n++)t[n].x+=e.x,t[n].y+=e.y;return t},n.rotate=function(t,e,i){if(0!==e){for(var n=Math.cos(e),s=Math.sin(e),r=0;r<t.length;r++){var o=t[r],a=o.x-i.x,h=o.y-i.y;o.x=i.x+(a*n-h*s),o.y=i.y+(a*s+h*n)}return t}},n.contains=function(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=t[(i+1)%t.length];if((e.x-n.x)*(s.y-n.y)+(e.y-n.y)*(n.x-s.x)>0)return!1}return!0},n.scale=function(t,e,i,r){if(1===e&&1===i)return t;r=r||n.centre(t);for(var o,a,h=0;h<t.length;h++)o=t[h],a=s.sub(o,r),t[h].x=r.x+a.x*e,t[h].y=r.y+a.y*i;return t},n.chamfer=function(t,e,i,n,o){e="number"==typeof e?[e]:e||[8],e.length||(e=[e]),i=void 0!==i?i:-1,n=n||2,o=o||14;for(var a=[],h=0;h<t.length;h++){var l=t[h-1>=0?h-1:t.length-1],u=t[h],c=t[(h+1)%t.length],d=e[h<e.length?h:e.length-1];if(0!==d){var f=s.normalise({x:u.y-l.y,y:l.x-u.x}),p=s.normalise({x:c.y-u.y,y:u.x-c.x}),v=Math.sqrt(2*Math.pow(d,2)),g=s.mult(r.clone(f),d),y=s.normalise(s.mult(s.add(f,p),.5)),m=s.sub(u,s.mult(y,v)),x=i;-1===i&&(x=1.75*Math.pow(d,.32)),x=r.clamp(x,n,o),x%2==1&&(x+=1);for(var w=Math.acos(s.dot(f,p)),b=w/x,T=0;T<x;T++)a.push(s.add(s.rotate(g,b*T),m))}else a.push(u)}return a},n.clockwiseSort=function(t){var e=n.mean(t);return t.sort(function(t,i){return s.angle(e,t)-s.angle(e,i)}),t},n.isConvex=function(t){var e,i,n,s,r=0,o=t.length;if(o<3)return null;for(e=0;e<o;e++)if(i=(e+1)%o,n=(e+2)%o,s=(t[i].x-t[e].x)*(t[n].y-t[i].y),s-=(t[i].y-t[e].y)*(t[n].x-t[i].x),s<0?r|=1:s>0&&(r|=2),3===r)return!1;return 0!==r||null},n.hull=function(t){var e,i,n=[],r=[];for(t=t.slice(0),t.sort(function(t,e){var i=t.x-e.x;return 0!==i?i:t.y-e.y}),i=0;i<t.length;i+=1){for(e=t[i];r.length>=2&&s.cross3(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}for(i=t.length-1;i>=0;i-=1){for(e=t[i];n.length>=2&&s.cross3(n[n.length-2],n[n.length-1],e)<=0;)n.pop();n.push(e)}return n.pop(),r.pop(),n.concat(r)}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={getTintFromFloats:function(t,e,i,n){return((255&(255*n|0))<<24|(255&(255*t|0))<<16|(255&(255*e|0))<<8|255&(255*i|0))>>>0},getTintAppendFloatAlpha:function(t,e){return((255&(255*e|0))<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,e){return((255&(255*e|0))<<24|(255&(0|t))<<16|(255&(t>>8|0))<<8|255&(t>>16|0))>>>0},getFloatsFromUintRGB:function(t){return[(255&(t>>16|0))/255,(255&(t>>8|0))/255,(255&(0|t))/255]},getComponentCount:function(t,e){for(var i=0,n=0;n<t.length;++n){var s=t[n];s.type===e.FLOAT?i+=s.size:i+=1}return i}}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(115),s=i(18),r=function(t,e,i,r,o){for(var a=null,h=null,l=null,u=null,c=s(t,e,i,r,null,o),d=0;d<c.length;d++){var f=c[d];f&&(f.collides?(a=n(f.x,f.y-1,!0,o),h=n(f.x,f.y+1,!0,o),l=n(f.x-1,f.y,!0,o),u=n(f.x+1,f.y,!0,o),f.faceTop=!a||!a.collides,f.faceBottom=!h||!h.collides,f.faceLeft=!l||!l.collides,f.faceRight=!u||!u.collides):f.resetFaces())}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(129),r=i(235),o=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=255),this.r=0,this.g=0,this.b=0,this.a=255,this.gl=[0,0,0,1],this._color=0,this._color32=0,this._rgba="",this.setTo(t,e,i,n)},transparent:function(){return this.red=0,this.green=0,this.blue=0,this.alpha=0,this.update()},setTo:function(t,e,i,n){return void 0===n&&(n=255),this.red=t,this.green=e,this.blue=i,this.alpha=n,this.update()},setGLTo:function(t,e,i,n){return void 0===n&&(n=1),this.redGL=t,this.greenGL=e,this.blueGL=i,this.alphaGL=n,this.update()},setFromRGB:function(t){return this.red=t.r,this.green=t.g,this.blue=t.b,t.hasOwnProperty("a")&&(this.alpha=t.a),this.update()},update:function(){return this._color=s(this.r,this.g,this.b),this._color32=r(this.r,this.g,this.b,this.a),this._rgba="rgba("+this.r+","+this.g+","+this.b+","+this.a/255+")",this},clone:function(){return new o(this.r,this.g,this.b,this.a)},color:{get:function(){return this._color}},color32:{get:function(){return this._color32}},rgba:{get:function(){return this._rgba}},redGL:{get:function(){return this.gl[0]},set:function(t){this.gl[0]=Math.min(Math.abs(t),1),this.r=Math.floor(255*this.gl[0]),this.update()}},greenGL:{get:function(){return this.gl[1]},set:function(t){this.gl[1]=Math.min(Math.abs(t),1),this.g=Math.floor(255*this.gl[1]),this.update()}},blueGL:{get:function(){return this.gl[2]},set:function(t){this.gl[2]=Math.min(Math.abs(t),1),this.b=Math.floor(255*this.gl[2]),this.update()}},alphaGL:{get:function(){return this.gl[3]},set:function(t){this.gl[3]=Math.min(Math.abs(t),1),this.a=Math.floor(255*this.gl[3]),this.update()}},red:{get:function(){return this.r},set:function(t){t=Math.floor(Math.abs(t)),this.r=Math.min(t,255),this.gl[0]=t/255,this.update()}},green:{get:function(){return this.g},set:function(t){t=Math.floor(Math.abs(t)),this.g=Math.min(t,255),this.gl[1]=t/255,this.update()}},blue:{get:function(){return this.b},set:function(t){t=Math.floor(Math.abs(t)),this.b=Math.min(t,255),this.gl[2]=t/255,this.update()}},alpha:{get:function(){return this.a},set:function(t){t=Math.floor(Math.abs(t)),this.a=Math.min(t,255),this.gl[3]=t/255,this.update()}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(5),l=i(11),u=new n({Extends:r,initialize:function(t,e,i,n,o){var u="json";if(l(e)){var c=e;e=a(c,"key"),i=a(c,"url"),n=a(c,"xhrSettings"),u=a(c,"extension",u),o=a(c,"dataKey",o)}var d={type:"json",cache:t.cacheManager.json,extension:u,responseType:"text",key:e,url:i,xhrSettings:n,config:o};r.call(this,t,d),l(i)&&(this.data=o?h(i,o):i,this.state=s.FILE_POPULATED)},onProcess:function(){if(this.state!==s.FILE_POPULATED){this.state=s.FILE_PROCESSING;var t=JSON.parse(this.xhrLoader.responseText),e=this.config;this.data="string"==typeof e?h(t,e,t):t}this.onProcessComplete()}});o.register("json",function(t,e,i,n){if(Array.isArray(t))for(var s=0;s<t.length;s++)this.addFile(new u(this,t[s]));else this.addFile(new u(this,t,e,n,i));return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t){return t*n.DEG_TO_RAD};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i-e;return e+((t-e)%n+n)%n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=!0);var s=n.baseTileWidth,r=n.tilemapLayer;return r&&(void 0===i&&(i=r.scene.cameras.main),t-=r.x+i.scrollX*(1-r.scrollFactorX),s*=r.scaleX),e?Math.floor(t/s):t/s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=!0);var s=n.baseTileHeight,r=n.tilemapLayer;return r&&(void 0===i&&(i=r.scene.cameras.main),t-=r.y+i.scrollY*(1-r.scrollFactorY),s*=r.scaleY),e?Math.floor(t/s):t/s};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n){this.loader=t,this.type=e,this.key=i,this.files=n,this.complete=!1,this.pending=n.length,this.failed=0,this.config={};for(var s=0;s<n.length;s++)n[s].multiFile=this},isReadyToProcess:function(){return 0===this.pending&&0===this.failed&&!this.complete},addToMultiFile:function(t){return this.files.push(t),t.multiFile=this,this.pending++,this.complete=!1,this},onFileComplete:function(t){-1!==this.files.indexOf(t)&&this.pending--},onFileFailed:function(t){-1!==this.files.indexOf(t)&&this.failed++}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function t(e,i,n,s,o){var l,u="png";if(h(i)){var c=i;i=a(c,"key"),n=a(c,"url"),l=a(c,"normalMap"),s=a(c,"xhrSettings"),u=a(c,"extension",u),o=a(c,"frameConfig")}Array.isArray(n)&&(l=n[1],n=n[0]);var d={type:"image",cache:e.textureManager,extension:u,responseType:"blob",key:i,url:n,xhrSettings:s,config:o};if(r.call(this,e,d),l){var f=new t(e,this.key,l,s,o);f.type="normalMap",this.setLink(f),e.addFile(f)}},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=new Image,this.data.crossOrigin=this.crossOrigin;var t=this;this.data.onload=function(){r.revokeObjectURL(t.data),t.onProcessComplete()},this.data.onerror=function(){r.revokeObjectURL(t.data),t.onProcessError()},r.createObjectURL(this.data,this.xhrLoader.response,"image/png")},addToCache:function(){var t,e=this.linkFile;e&&e.state===s.FILE_COMPLETE?(t="image"===this.type?this.cache.addImage(this.key,this.data,e.data):this.cache.addImage(e.key,e.data,this.data),this.pendingDestroy(t),e.pendingDestroy(t)):e||(t=this.cache.addImage(this.key,this.data),this.pendingDestroy(t))}});o.register("image",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(this,t[n]));else this.addFile(new l(this,t,e,i));return this}),t.exports=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=t-i,r=e-n;return Math.sqrt(s*s+r*r)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={DYNAMIC_BODY:0,STATIC_BODY:1,GROUP:2,TILEMAPLAYER:3,FACING_NONE:10,FACING_UP:11,FACING_DOWN:12,FACING_LEFT:13,FACING_RIGHT:14};t.exports=i},function(t,e,i){var n={};t.exports=n;var s=i(73),r=i(16),o=i(25);!function(){n.create=function(t){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},t)},n.setModified=function(t,e,i,s){if(t.isModified=e,i&&t.parent&&n.setModified(t.parent,e,i,s),s)for(var r=0;r<t.composites.length;r++){var o=t.composites[r];n.setModified(o,e,i,s)}},n.add=function(t,e){var i=[].concat(e);s.trigger(t,"beforeAdd",{object:e});for(var o=0;o<i.length;o++){var a=i[o];switch(a.type){case"body":if(a.parent!==a){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(t,a);break;case"constraint":n.addConstraint(t,a);break;case"composite":n.addComposite(t,a);break;case"mouseConstraint":n.addConstraint(t,a.constraint)}}return s.trigger(t,"afterAdd",{object:e}),t},n.remove=function(t,e,i){var r=[].concat(e);s.trigger(t,"beforeRemove",{object:e});for(var o=0;o<r.length;o++){var a=r[o];switch(a.type){case"body":n.removeBody(t,a,i);break;case"constraint":n.removeConstraint(t,a,i);break;case"composite":n.removeComposite(t,a,i);break;case"mouseConstraint":n.removeConstraint(t,a.constraint)}}return s.trigger(t,"afterRemove",{object:e}),t},n.addComposite=function(t,e){return t.composites.push(e),e.parent=t,n.setModified(t,!0,!0,!1),t},n.removeComposite=function(t,e,i){var s=t.composites.indexOf(e);if(-1!==s&&(n.removeCompositeAt(t,s),n.setModified(t,!0,!0,!1)),i)for(var r=0;r<t.composites.length;r++)n.removeComposite(t.composites[r],e,!0);return t},n.removeCompositeAt=function(t,e){return t.composites.splice(e,1),n.setModified(t,!0,!0,!1),t},n.addBody=function(t,e){return t.bodies.push(e),n.setModified(t,!0,!0,!1),t},n.removeBody=function(t,e,i){var s=t.bodies.indexOf(e);if(-1!==s&&(n.removeBodyAt(t,s),n.setModified(t,!0,!0,!1)),i)for(var r=0;r<t.composites.length;r++)n.removeBody(t.composites[r],e,!0);return t},n.removeBodyAt=function(t,e){return t.bodies.splice(e,1),n.setModified(t,!0,!0,!1),t},n.addConstraint=function(t,e){return t.constraints.push(e),n.setModified(t,!0,!0,!1),t},n.removeConstraint=function(t,e,i){var s=t.constraints.indexOf(e);if(-1!==s&&n.removeConstraintAt(t,s),i)for(var r=0;r<t.composites.length;r++)n.removeConstraint(t.composites[r],e,!0);return t},n.removeConstraintAt=function(t,e){return t.constraints.splice(e,1),n.setModified(t,!0,!0,!1),t},n.clear=function(t,e,i){if(i)for(var s=0;s<t.composites.length;s++)n.clear(t.composites[s],e,!0);return e?t.bodies=t.bodies.filter(function(t){return t.isStatic}):t.bodies.length=0,t.constraints.length=0,t.composites.length=0,n.setModified(t,!0,!0,!1),t},n.allBodies=function(t){for(var e=[].concat(t.bodies),i=0;i<t.composites.length;i++)e=e.concat(n.allBodies(t.composites[i]));return e},n.allConstraints=function(t){for(var e=[].concat(t.constraints),i=0;i<t.composites.length;i++)e=e.concat(n.allConstraints(t.composites[i]));return e},n.allComposites=function(t){for(var e=[].concat(t.composites),i=0;i<t.composites.length;i++)e=e.concat(n.allComposites(t.composites[i]));return e},n.get=function(t,e,i){var s,r;switch(i){case"body":s=n.allBodies(t);break;case"constraint":s=n.allConstraints(t);break;case"composite":s=n.allComposites(t).concat(t)}return s?(r=s.filter(function(t){return t.id.toString()===e.toString()}),0===r.length?null:r[0]):null},n.move=function(t,e,i){return n.remove(t,e),n.add(i,e),t},n.rebase=function(t){for(var e=n.allBodies(t).concat(n.allConstraints(t)).concat(n.allComposites(t)),i=0;i<e.length;i++)e[i].id=r.nextId();return n.setModified(t,!0,!0,!1),t},n.translate=function(t,e,i){for(var s=i?n.allBodies(t):t.bodies,r=0;r<s.length;r++)o.translate(s[r],e);return n.setModified(t,!0,!0,!1),t},n.rotate=function(t,e,i,s){for(var r=Math.cos(e),a=Math.sin(e),h=s?n.allBodies(t):t.bodies,l=0;l<h.length;l++){var u=h[l],c=u.position.x-i.x,d=u.position.y-i.y;o.setPosition(u,{x:i.x+(c*r-d*a),y:i.y+(c*a+d*r)}),o.rotate(u,e)}return n.setModified(t,!0,!0,!1),t},n.scale=function(t,e,i,s,r){for(var a=r?n.allBodies(t):t.bodies,h=0;h<a.length;h++){var l=a[h],u=l.position.x-s.x,c=l.position.y-s.y;o.setPosition(l,{x:s.x+u*e,y:s.y+c*i}),o.scale(l,e,i)}return n.setModified(t,!0,!0,!1),t},n.bounds=function(t){for(var e=Matter.Composite.allBodies(t),i=[],n=0;n<e.length;n+=1){var s=e[n];i.push(s.bounds.min,s.bounds.max)}return Matter.Bounds.create(i)}}()},function(t,e,i){var n={};t.exports=n;var s=i(43),r=i(16),o=i(25),a=i(42),h=i(30),l=i(371);!function(){n.rectangle=function(t,e,i,n,a){a=a||{};var h={label:"Rectangle Body",position:{x:t,y:e},vertices:s.fromPath("L 0 0 L "+i+" 0 L "+i+" "+n+" L 0 "+n)};if(a.chamfer){var l=a.chamfer;h.vertices=s.chamfer(h.vertices,l.radius,l.quality,l.qualityMin,l.qualityMax),delete a.chamfer}return o.create(r.extend({},h,a))},n.trapezoid=function(t,e,i,n,a,h){h=h||{},a*=.5;var l,u=(1-2*a)*i,c=i*a,d=c+u,f=d+c;l=a<.5?"L 0 0 L "+c+" "+-n+" L "+d+" "+-n+" L "+f+" 0":"L 0 0 L "+d+" "+-n+" L "+f+" 0";var p={label:"Trapezoid Body",position:{x:t,y:e},vertices:s.fromPath(l)};if(h.chamfer){var v=h.chamfer;p.vertices=s.chamfer(p.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete h.chamfer}return o.create(r.extend({},p,h))},n.circle=function(t,e,i,s,o){s=s||{};var a={label:"Circle Body",circleRadius:i};o=o||25;var h=Math.ceil(Math.max(10,Math.min(o,i)));return h%2==1&&(h+=1),n.polygon(t,e,h,i,r.extend({},a,s))},n.polygon=function(t,e,i,a,h){if(h=h||{},i<3)return n.circle(t,e,a,h);for(var l=2*Math.PI/i,u="",c=.5*l,d=0;d<i;d+=1){var f=c+d*l,p=Math.cos(f)*a,v=Math.sin(f)*a;u+="L "+p.toFixed(3)+" "+v.toFixed(3)+" "}var g={label:"Polygon Body",position:{x:t,y:e},vertices:s.fromPath(u)};if(h.chamfer){var y=h.chamfer;g.vertices=s.chamfer(g.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete h.chamfer}return o.create(r.extend({},g,h))},n.fromVertices=function(t,e,i,n,u,c,d){var f,p,v,g,y,m,x,w,b;for(n=n||{},p=[],u=void 0!==u&&u,c=void 0!==c?c:.01,d=void 0!==d?d:10,l||r.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),r.isArray(i[0])||(i=[i]),w=0;w<i.length;w+=1)if(g=i[w],(v=s.isConvex(g))||!l)g=v?s.clockwiseSort(g):s.hull(g),p.push({position:{x:t,y:e},vertices:g});else{var T=g.map(function(t){return[t.x,t.y]});l.makeCCW(T),!1!==c&&l.removeCollinearPoints(T,c);var S=l.quickDecomp(T);for(y=0;y<S.length;y++){var A=S[y],C=A.map(function(t){return{x:t[0],y:t[1]}});d>0&&s.area(C)<d||p.push({position:s.centre(C),vertices:C})}}for(y=0;y<p.length;y++)p[y]=o.create(r.extend(p[y],n));if(u){for(y=0;y<p.length;y++){var M=p[y];for(m=y+1;m<p.length;m++){var _=p[m];if(a.overlaps(M.bounds,_.bounds)){var E=M.vertices,P=_.vertices;for(x=0;x<M.vertices.length;x++)for(b=0;b<_.vertices.length;b++){var L=h.magnitudeSquared(h.sub(E[(x+1)%E.length],P[b])),k=h.magnitudeSquared(h.sub(E[x],P[(b+1)%P.length]));L<5&&k<5&&(E[x].isInternal=!0,P[b].isInternal=!0)}}}}}return p.length>1?(f=o.create(r.extend({parts:p.slice(0)},n)),o.setPosition(f,{x:t,y:e}),f):p[0]}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(287),o=new n({Mixins:[s.Alpha,s.Flip,s.Visible],initialize:function(t,e,i,n,s,r,o,a){this.layer=t,this.index=e,this.x=i,this.y=n,this.width=s,this.height=r,this.baseWidth=void 0!==o?o:s,this.baseHeight=void 0!==a?a:r,this.pixelX=0,this.pixelY=0,this.updatePixelXY(),this.properties={},this.rotation=0,this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceLeft=!1,this.faceRight=!1,this.faceTop=!1,this.faceBottom=!1,this.collisionCallback=null,this.collisionCallbackContext=this,this.tint=16777215,this.physics={}},containsPoint:function(t,e){return!(t<this.pixelX||e<this.pixelY||t>this.right||e>this.bottom)},copy:function(t){return this.index=t.index,this.alpha=t.alpha,this.properties=t.properties,this.visible=t.visible,this.setFlip(t.flipX,t.flipY),this.tint=t.tint,this.rotation=t.rotation,this.collideUp=t.collideUp,this.collideDown=t.collideDown,this.collideLeft=t.collideLeft,this.collideRight=t.collideRight,this.collisionCallback=t.collisionCallback,this.collisionCallbackContext=t.collisionCallbackContext,this},getCollisionGroup:function(){return this.tileset?this.tileset.getTileCollisionGroup(this.index):null},getTileData:function(){return this.tileset?this.tileset.getTileData(this.index):null},getLeft:function(t){var e=this.tilemapLayer;return e?e.tileToWorldX(this.x,t):this.x*this.baseWidth},getRight:function(t){var e=this.tilemapLayer;return e?this.getLeft(t)+this.width*e.scaleX:this.getLeft(t)+this.width},getTop:function(t){var e=this.tilemapLayer;return e?e.tileToWorldY(this.y,t)-(this.height-this.baseHeight)*e.scaleY:this.y*this.baseHeight-(this.height-this.baseHeight)},getBottom:function(t){var e=this.tilemapLayer;return e?this.getTop(t)+this.height*e.scaleY:this.getTop(t)+this.height},getBounds:function(t,e){return void 0===e&&(e=new r),e.x=this.getLeft(),e.y=this.getTop(),e.width=this.getRight()-e.x,e.height=this.getBottom()-e.y,e},getCenterX:function(t){return this.getLeft(t)+this.width/2},getCenterY:function(t){return this.getTop(t)+this.height/2},destroy:function(){this.collisionCallback=void 0,this.collisionCallbackContext=void 0,this.properties=void 0},intersects:function(t,e,i,n){return!(i<=this.pixelX||n<=this.pixelY||t>=this.right||e>=this.bottom)},isInteresting:function(t,e){return t&&e?this.canCollide||this.hasInterestingFace:t?this.collides:!!e&&this.hasInterestingFace},resetCollision:function(t){if(void 0===t&&(t=!0),this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,t){this.tilemapLayer&&this.tilemapLayer.calculateFacesAt(this.x,this.y)}return this},resetFaces:function(){return this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,this},setCollision:function(t,e,i,n,s){if(void 0===e&&(e=t),void 0===i&&(i=t),void 0===n&&(n=t),void 0===s&&(s=!0),this.collideLeft=t,this.collideRight=e,this.collideUp=i,this.collideDown=n,this.faceLeft=t,this.faceRight=e,this.faceTop=i,this.faceBottom=n,s){this.tilemapLayer&&this.tilemapLayer.calculateFacesAt(this.x,this.y)}return this},setCollisionCallback:function(t,e){return null===t?(this.collisionCallback=void 0,this.collisionCallbackContext=void 0):(this.collisionCallback=t,this.collisionCallbackContext=e),this},setSize:function(t,e,i,n){return void 0!==t&&(this.width=t),void 0!==e&&(this.height=e),void 0!==i&&(this.baseWidth=i),void 0!==n&&(this.baseHeight=n),this.updatePixelXY(),this},updatePixelXY:function(){return this.pixelX=this.x*this.baseWidth,this.pixelY=this.y*this.baseHeight-(this.height-this.baseHeight),this},canCollide:{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.collisionCallback}},collides:{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown}},hasInterestingFace:{get:function(){return this.faceTop||this.faceBottom||this.faceLeft||this.faceRight}},tileset:{get:function(){var t=this.tilemapLayer;return t?t.tileset:null}},tilemapLayer:{get:function(){return this.layer.tilemapLayer}},tilemap:{get:function(){var t=this.tilemapLayer;return t?t.tilemap:null}}});t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){e?t.setCollision(!0,!0,!0,!0,!1):t.resetCollision(!1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=t.length;if(e<0||e>s||e>=i||i>s||e+i>s){if(n)throw new Error("Range Error: Values outside acceptable range");return!1}return!0};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e={};for(var i in t)Array.isArray(t[i])?e[i]=t[i].slice(0):e[i]=t[i];return e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(154),r=i(9),o=i(4),a=new n({initialize:function(t){this.type=t,this.defaultDivisions=5,this.arcLengthDivisions=100,this.cacheArcLengths=[],this.needsUpdate=!0,this.active=!0,this._tmpVec2A=new o,this._tmpVec2B=new o},draw:function(t,e){return void 0===e&&(e=32),t.strokePoints(this.getPoints(e))},getBounds:function(t,e){t||(t=new r),void 0===e&&(e=16);var i=this.getLength();e>i&&(e=i/2);var n=Math.max(1,Math.round(i/e));return s(this.getSpacedPoints(n),t)},getDistancePoints:function(t){var e=this.getLength(),i=Math.max(1,e/t);return this.getSpacedPoints(i)},getEndPoint:function(t){return void 0===t&&(t=new o),this.getPointAt(1,t)},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,i=[],n=this.getPoint(0,this._tmpVec2A),s=0;i.push(0);for(var r=1;r<=t;r++)e=this.getPoint(r/t,this._tmpVec2B),s+=e.distance(n),i.push(s),n.copy(e);return this.cacheArcLengths=i,i},getPointAt:function(t,e){var i=this.getUtoTmapping(t);return this.getPoint(i,e)},getPoints:function(t){void 0===t&&(t=this.defaultDivisions);for(var e=[],i=0;i<=t;i++)e.push(this.getPoint(i/t));return e},getRandomPoint:function(t){return void 0===t&&(t=new o),this.getPoint(Math.random(),t)},getSpacedPoints:function(t){void 0===t&&(t=this.defaultDivisions);for(var e=[],i=0;i<=t;i++){var n=this.getUtoTmapping(i/t,null,t);e.push(this.getPoint(n))}return e},getStartPoint:function(t){return void 0===t&&(t=new o),this.getPointAt(0,t)},getTangent:function(t,e){void 0===e&&(e=new o);var i=t-1e-4,n=t+1e-4;return i<0&&(i=0),n>1&&(n=1),this.getPoint(i,this._tmpVec2A),this.getPoint(n,e),e.subtract(this._tmpVec2A).normalize()},getTangentAt:function(t,e){var i=this.getUtoTmapping(t);return this.getTangent(i,e)},getTFromDistance:function(t,e){return t<=0?0:this.getUtoTmapping(0,t,e)},getUtoTmapping:function(t,e,i){var n,s=this.getLengths(i),r=0,o=s.length;n=e?Math.min(e,s[o-1]):t*s[o-1];for(var a,h=0,l=o-1;h<=l;)if(r=Math.floor(h+(l-h)/2),(a=s[r]-n)<0)h=r+1;else{if(!(a>0)){l=r;break}l=r-1}if(r=l,s[r]===n)return r/(o-1);var u=s[r];return(r+(n-u)/(s[r+1]-u))/(o-1)},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()}});t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x-t.width*t.originX+.5*t.width};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.y-t.height*t.originY+.5*t.height};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.width*t.originX;return t.x=e+i-.5*t.width,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.height*t.originY;return t.y=e+i-.5*t.height,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(2),o=i(597),a=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Mask,s.Origin,s.Pipeline,s.ScaleMode,s.ScrollFactor,s.Size,s.Texture,s.Tint,s.Transform,s.Visible,o],initialize:function(t,e,i,n,s){r.call(this,t,"Image"),this.setTexture(n,s),this.setPosition(e,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline("TextureTintPipeline")}});t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=t.x3-t.x1,s=t.y3-t.y1,r=t.x2-t.x1,o=t.y2-t.y1,a=e-t.x1,h=i-t.y1,l=n*n+s*s,u=n*r+s*o,c=n*a+s*h,d=r*r+o*o,f=r*a+o*h,p=l*d-u*u,v=0===p?0:1/p,g=(d*c-u*f)*v,y=(l*f-u*c)*v;return g>=0&&y>=0&&g+y<1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(69),r=i(290),o=i(291),a=i(103),h=i(159),l=new n({initialize:function(t,e,i,n,s,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n,this.x3=s,this.y3=r},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return h(this,t)},setTo:function(t,e,i,n,s,r){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n,this.x3=s,this.y3=r,this},getLineA:function(t){return void 0===t&&(t=new a),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return void 0===t&&(t=new a),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return void 0===t&&(t=new a),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var e=0;e=this.x1<=this.x2&&this.x1<=this.x3?this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?this.x2-t:this.x3-t,this.x1-=e,this.x2-=e,this.x3-=e}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var e=0;e=this.x1>=this.x2&&this.x1>=this.x3?this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?this.x2-t:this.x3-t,this.x1-=e,this.x2-=e,this.x3-=e}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var e=0;e=this.y1<=this.y2&&this.y1<=this.y3?this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?this.y2-t:this.y3-t,this.y1-=e,this.y2-=e,this.y3-=e}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var e=0;e=this.y1>=this.y2&&this.y1>=this.y3?this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?this.y2-t:this.y3-t,this.y1-=e,this.y2-=e,this.y3-=e}}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=e||0,this.z=i||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},clone:function(){return new s(this.x,this.y,this.z)},crossVectors:function(t,e){var i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=n*a-s*o,this.y=s*r-i*a,this.z=i*o-n*r,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,e,i){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=e||0,this.z=i||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(e*e+i*i+n*n)},distanceSq:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0;return e*e+i*i+n*n},length:function(){var t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)},lengthSq:function(){var t=this.x,e=this.y,i=this.z;return t*t+e*e+i*i},normalize:function(){var t=this.x,e=this.y,i=this.z,n=t*t+e*e+i*i;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=e*n,this.z=i*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z;return this.x=i*o-n*r,this.y=n*s-e*o,this.z=e*r-i*s,this},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y,s=this.z;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this.z=s+e*(t.z-s),this},transformMat3:function(t){var e=this.x,i=this.y,n=this.z,s=t.val;return this.x=e*s[0]+i*s[3]+n*s[6],this.y=e*s[1]+i*s[4]+n*s[7],this.z=e*s[2]+i*s[5]+n*s[8],this},transformMat4:function(t){var e=this.x,i=this.y,n=this.z,s=t.val;return this.x=s[0]*e+s[4]*i+s[8]*n+s[12],this.y=s[1]*e+s[5]*i+s[9]*n+s[13],this.z=s[2]*e+s[6]*i+s[10]*n+s[14],this},transformCoordinates:function(t){var e=this.x,i=this.y,n=this.z,s=t.val,r=e*s[0]+i*s[4]+n*s[8]+s[12],o=e*s[1]+i*s[5]+n*s[9]+s[13],a=e*s[2]+i*s[6]+n*s[10]+s[14],h=e*s[3]+i*s[7]+n*s[11]+s[15];return this.x=r/h,this.y=o/h,this.z=a/h,this},transformQuat:function(t){var e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,a=t.w,h=a*e+r*n-o*i,l=a*i+o*e-s*n,u=a*n+s*i-r*e,c=-s*e-r*i-o*n;return this.x=h*a+c*-s+l*-o-u*-r,this.y=l*a+c*-r+u*-s-h*-o,this.z=u*a+c*-o+h*-r-l*-s,this},project:function(t){var e=this.x,i=this.y,n=this.z,s=t.val,r=s[0],o=s[1],a=s[2],h=s[3],l=s[4],u=s[5],c=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],y=s[12],m=s[13],x=s[14],w=s[15],b=1/(e*h+i*d+n*g+w);return this.x=(e*r+i*l+n*f+y)*b,this.y=(e*o+i*u+n*p+m)*b,this.z=(e*a+i*c+n*v+x)*b,this},unproject:function(t,e){var i=t.x,n=t.y,s=t.z,r=t.w,o=this.x-i,a=r-this.y-1-n,h=this.z;return this.x=2*o/s-1,this.y=2*a/r-1,this.z=2*h-1,this.project(e)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});t.exports=s},function(t,e,i){var n={};t.exports=n;var s=i(43),r=i(30),o=i(87),a=i(42),h=i(180),l=i(16);!function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(t){var e=t;e.bodyA&&!e.pointA&&(e.pointA={x:0,y:0}),e.bodyB&&!e.pointB&&(e.pointB={x:0,y:0});var i=e.bodyA?r.add(e.bodyA.position,e.pointA):e.pointA,n=e.bodyB?r.add(e.bodyB.position,e.pointB):e.pointB,s=r.magnitude(r.sub(i,n));e.length=void 0!==e.length?e.length:s,e.id=e.id||l.nextId(),e.label=e.label||"Constraint",e.type="constraint",e.stiffness=e.stiffness||(e.length>0?1:.7),e.damping=e.damping||0,e.angularStiffness=e.angularStiffness||0,e.angleA=e.bodyA?e.bodyA.angle:e.angleA,e.angleB=e.bodyB?e.bodyB.angle:e.angleB,e.plugin={};var o={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===e.length&&e.stiffness>.1?(o.type="pin",o.anchors=!1):e.stiffness<.9&&(o.type="spring"),e.render=l.extend(o,e.render),e},n.preSolveAll=function(t){for(var e=0;e<t.length;e+=1){var i=t[e],n=i.constraintImpulse;i.isStatic||0===n.x&&0===n.y&&0===n.angle||(i.position.x+=n.x,i.position.y+=n.y,i.angle+=n.angle)}},n.solveAll=function(t,e){for(var i=0;i<t.length;i+=1){var s=t[i],r=!s.bodyA||s.bodyA&&s.bodyA.isStatic,o=!s.bodyB||s.bodyB&&s.bodyB.isStatic;(r||o)&&n.solve(t[i],e)}for(i=0;i<t.length;i+=1)s=t[i],r=!s.bodyA||s.bodyA&&s.bodyA.isStatic,o=!s.bodyB||s.bodyB&&s.bodyB.isStatic,r||o||n.solve(t[i],e)},n.solve=function(t,e){var i=t.bodyA,s=t.bodyB,o=t.pointA,a=t.pointB;if(i||s){i&&!i.isStatic&&(r.rotate(o,i.angle-t.angleA,o),t.angleA=i.angle),s&&!s.isStatic&&(r.rotate(a,s.angle-t.angleB,a),t.angleB=s.angle);var h=o,l=a;if(i&&(h=r.add(i.position,o)),s&&(l=r.add(s.position,a)),h&&l){var u=r.sub(h,l),c=r.magnitude(u);c<n._minLength&&(c=n._minLength);var d,f,p,v,g,y=(c-t.length)/c,m=t.stiffness<1?t.stiffness*e:t.stiffness,x=r.mult(u,y*m),w=(i?i.inverseMass:0)+(s?s.inverseMass:0),b=(i?i.inverseInertia:0)+(s?s.inverseInertia:0),T=w+b;if(t.damping){var S=r.create();p=r.div(u,c),g=r.sub(s&&r.sub(s.position,s.positionPrev)||S,i&&r.sub(i.position,i.positionPrev)||S),v=r.dot(p,g)}i&&!i.isStatic&&(f=i.inverseMass/w,i.constraintImpulse.x-=x.x*f,i.constraintImpulse.y-=x.y*f,i.position.x-=x.x*f,i.position.y-=x.y*f,t.damping&&(i.positionPrev.x-=t.damping*p.x*v*f,i.positionPrev.y-=t.damping*p.y*v*f),d=r.cross(o,x)/T*n._torqueDampen*i.inverseInertia*(1-t.angularStiffness),i.constraintImpulse.angle-=d,i.angle-=d),s&&!s.isStatic&&(f=s.inverseMass/w,s.constraintImpulse.x+=x.x*f,s.constraintImpulse.y+=x.y*f,s.position.x+=x.x*f,s.position.y+=x.y*f,t.damping&&(s.positionPrev.x+=t.damping*p.x*v*f,s.positionPrev.y+=t.damping*p.y*v*f),d=r.cross(a,x)/T*n._torqueDampen*s.inverseInertia*(1-t.angularStiffness),s.constraintImpulse.angle+=d,s.angle+=d)}}},n.postSolveAll=function(t){for(var e=0;e<t.length;e++){var i=t[e],l=i.constraintImpulse;if(!(i.isStatic||0===l.x&&0===l.y&&0===l.angle)){o.set(i,!1);for(var u=0;u<i.parts.length;u++){var c=i.parts[u];s.translate(c.vertices,l),u>0&&(c.position.x+=l.x,c.position.y+=l.y),0!==l.angle&&(s.rotate(c.vertices,l.angle,i.position),h.rotate(c.axes,l.angle),u>0&&r.rotateAbout(c.position,l.angle,i.position,c.position)),a.update(c.bounds,c.vertices,i.velocity)}l.angle*=n._warming,l.x*=n._warming,l.y*=n._warming}}}}()},function(t,e,i){var n={};t.exports=n;var s=i(16);!function(){n.on=function(t,e,i){for(var n,s=e.split(" "),r=0;r<s.length;r++)n=s[r],t.events=t.events||{},t.events[n]=t.events[n]||[],t.events[n].push(i);return i},n.off=function(t,e,i){if(!e)return void(t.events={});"function"==typeof e&&(i=e,e=s.keys(t.events).join(" "));for(var n=e.split(" "),r=0;r<n.length;r++){var o=t.events[n[r]],a=[];if(i&&o)for(var h=0;h<o.length;h++)o[h]!==i&&a.push(o[h]);t.events[n[r]]=a}},n.trigger=function(t,e,i){var n,r,o,a;if(t.events){i||(i={}),n=e.split(" ");for(var h=0;h<n.length;h++)if(r=n[h],o=t.events[r]){a=s.clone(i,!1),a.name=r,a.source=t;for(var l=0;l<o.length;l++)o[l].apply(t,[a])}}}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={SKIP_CHECK:-1,NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){if(this.entries=[],Array.isArray(t))for(var e=0;e<t.length;e++)this.set(t[e])},set:function(t){return-1===this.entries.indexOf(t)&&this.entries.push(t),this},get:function(t,e){for(var i=0;i<this.entries.length;i++){var n=this.entries[i];if(n[t]===e)return n}},getArray:function(){return this.entries.slice(0)},delete:function(t){var e=this.entries.indexOf(t);return e>-1&&this.entries.splice(e,1),this},dump:function(){console.group("Set");for(var t=0;t<this.entries.length;t++){var e=this.entries[t];console.log(e)}console.groupEnd()},each:function(t,e){var i,n=this.entries.slice(),s=n.length;if(e)for(i=0;i<s&&!1!==t.call(e,n[i],i);i++);else for(i=0;i<s&&!1!==t(n[i],i);i++);return this},iterate:function(t,e){var i,n=this.entries.length;if(e)for(i=0;i<n&&!1!==t.call(e,this.entries[i],i);i++);else for(i=0;i<n&&!1!==t(this.entries[i],i);i++);return this},iterateLocal:function(t){var e,i=[];for(e=1;e<arguments.length;e++)i.push(arguments[e]);var n=this.entries.length;for(e=0;e<n;e++){var s=this.entries[e];s[t].apply(s,i)}return this},clear:function(){return this.entries.length=0,this},contains:function(t){return this.entries.indexOf(t)>-1},union:function(t){var e=new s;return t.entries.forEach(function(t){e.set(t)}),this.entries.forEach(function(t){e.set(t)}),e},intersect:function(t){var e=new s;return this.entries.forEach(function(i){t.contains(i)&&e.set(i)}),e},difference:function(t){var e=new s;return this.entries.forEach(function(i){t.contains(i)||e.set(i)}),e},size:{get:function(){return this.entries.length},set:function(t){return this.entries.length=t}}});t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.hasOwnProperty(e)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(61),s=function(t,e){var i=n(t);for(var s in e)i.hasOwnProperty(s)||(i[s]=e[s]);return i};t.exports=s},function(t,e,i){(function(e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={android:!1,chromeOS:!1,cocoonJS:!1,cocoonJSApp:!1,cordova:!1,crosswalk:!1,desktop:!1,ejecta:!1,electron:!1,iOS:!1,iOSVersion:0,iPad:!1,iPhone:!1,kindle:!1,linux:!1,macOS:!1,node:!1,nodeWebkit:!1,pixelRatio:1,webApp:!1,windows:!1,windowsPhone:!1};t.exports=function(){var t=navigator.userAgent;/Windows/.test(t)?i.windows=!0:/Mac OS/.test(t)?i.macOS=!0:/Linux/.test(t)?i.linux=!0:/Android/.test(t)?i.android=!0:/iP[ao]d|iPhone/i.test(t)?(i.iOS=!0,navigator.appVersion.match(/OS (\d+)/),i.iOSVersion=parseInt(RegExp.$1,10)):/Kindle/.test(t)||/\bKF[A-Z][A-Z]+/.test(t)||/Silk.*Mobile Safari/.test(t)?i.kindle=!0:/CrOS/.test(t)&&(i.chromeOS=!0),(/Windows Phone/i.test(t)||/IEMobile/i.test(t))&&(i.android=!1,i.iOS=!1,i.macOS=!1,i.windows=!0,i.windowsPhone=!0);var n=/Silk/.test(t);if((i.windows||i.macOS||i.linux&&!n||i.chromeOS)&&(i.desktop=!0),(i.windowsPhone||/Windows NT/i.test(t)&&/Touch/i.test(t))&&(i.desktop=!1),navigator.standalone&&(i.webApp=!0),void 0!==window.cordova&&(i.cordova=!0),e&&e.versions&&e.versions.node&&(i.node=!0),i.node&&"object"==typeof e.versions&&(i.nodeWebkit=!!e.versions["node-webkit"],i.electron=!!e.versions.electron),navigator.isCocoonJS){i.cocoonJS=!0;try{i.cocoonJSApp="undefined"!=typeof CocoonJS}catch(t){i.cocoonJSApp=!1}}return void 0!==window.ejecta&&(i.ejecta=!0),/Crosswalk/.test(t)&&(i.crosswalk=!0),i.iPhone=-1!==t.toLowerCase().indexOf("iphone"),i.iPad=-1!==t.toLowerCase().indexOf("ipad"),i.pixelRatio=window.devicePixelRatio||1,i}()}).call(e,i(1062))},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r){void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===s&&(s=0),void 0===r&&(r=0),this.matrix=new Float32Array([t,e,i,n,s,r,0,0,1]),this.decomposedMatrix={translateX:0,translateY:0,scaleX:1,scaleY:1,rotation:0}},a:{get:function(){return this.matrix[0]},set:function(t){this.matrix[0]=t}},b:{get:function(){return this.matrix[1]},set:function(t){this.matrix[1]=t}},c:{get:function(){return this.matrix[2]},set:function(t){this.matrix[2]=t}},d:{get:function(){return this.matrix[3]},set:function(t){this.matrix[3]=t}},tx:{get:function(){return this.matrix[4]},set:function(t){this.matrix[4]=t}},ty:{get:function(){return this.matrix[5]},set:function(t){this.matrix[5]=t}},rotation:{get:function(){return Math.acos(this.a/this.scaleX)*(Math.atan(-this.c/this.a)<0?-1:1)}},scaleX:{get:function(){return Math.sqrt(this.a*this.a+this.c*this.c)}},scaleY:{get:function(){return Math.sqrt(this.b*this.b+this.d*this.d)}},loadIdentity:function(){var t=this.matrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,this},translate:function(t,e){var i=this.matrix;return i[4]=i[0]*t+i[2]*e+i[4],i[5]=i[1]*t+i[3]*e+i[5],this},scale:function(t,e){var i=this.matrix;return i[0]*=t,i[1]*=t,i[2]*=e,i[3]*=e,this},rotate:function(t){var e=Math.sin(t),i=Math.cos(t),n=this.matrix,s=n[0],r=n[1],o=n[2],a=n[3];return n[0]=s*i+o*e,n[1]=r*i+a*e,n[2]=s*-e+o*i,n[3]=r*-e+a*i,this},multiply:function(t){var e=this.matrix,i=t.matrix,n=e[0],s=e[1],r=e[2],o=e[3],a=e[4],h=e[5],l=i[0],u=i[1],c=i[2],d=i[3],f=i[4],p=i[5];return e[0]=l*n+u*r,e[1]=l*s+u*o,e[2]=c*n+d*r,e[3]=c*s+d*o,e[4]=f*n+p*r+a,e[5]=f*s+p*o+h,this},transform:function(t,e,i,n,s,r){var o=this.matrix,a=o[0],h=o[1],l=o[2],u=o[3],c=o[4],d=o[5];return o[0]=t*a+e*l,o[1]=t*h+e*u,o[2]=i*a+n*l,o[3]=i*h+n*u,o[4]=s*a+r*l+c,o[5]=s*h+r*u+d,this},transformPoint:function(t,e,i){void 0===i&&(i={x:0,y:0});var n=this.matrix,s=n[0],r=n[1],o=n[2],a=n[3],h=n[4],l=n[5];return i.x=t*s+e*o+h,i.y=t*r+e*a+l,i},invert:function(){var t=this.matrix,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=e*s-i*n;return t[0]=s/a,t[1]=-i/a,t[2]=-n/a,t[3]=e/a,t[4]=(n*o-s*r)/a,t[5]=-(e*o-i*r)/a,this},setTransform:function(t,e,i,n,s,r){var o=this.matrix;return o[0]=t,o[1]=e,o[2]=i,o[3]=n,o[4]=s,o[5]=r,this},decomposeMatrix:function(){var t=this.decomposedMatrix,e=this.matrix,i=e[0],n=e[1],s=e[2],r=e[3],o=i*i,a=n*n,h=s*s,l=r*r,u=Math.sqrt(o+h),c=Math.sqrt(a+l);return t.translateX=e[4],t.translateY=e[5],t.scaleX=u,t.scaleY=c,t.rotation=Math.acos(i/u)*(Math.atan(-s/i)<0?-1:1),t},applyITRS:function(t,e,i,n,s){var r=this.matrix,o=Math.sin(i),a=Math.cos(i);return r[4]=t,r[5]=e,r[0]=a*n,r[1]=o*n,r[2]=-o*s,r[3]=a*s,this},destroy:function(){this.matrix=null,this.decomposedMatrix=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(203),s=i(0),r=i(1),o=i(5),a=i(418),h=i(75),l=i(39),u=new s({initialize:function(t,e,i){void 0!==i||Array.isArray(e)||"object"!=typeof e||(i=e,e=null),this.scene=t,this.children=new h(e),this.isParent=!0,this.classType=r(i,"classType",l),this.active=r(i,"active",!0),this.maxSize=r(i,"maxSize",-1),this.defaultKey=r(i,"defaultKey",null),this.defaultFrame=r(i,"defaultFrame",null),this.runChildUpdate=r(i,"runChildUpdate",!1),this.createCallback=r(i,"createCallback",null),this.removeCallback=r(i,"removeCallback",null),this.createMultipleCallback=r(i,"createMultipleCallback",null),i&&this.createMultiple(i)},create:function(t,e,i,n,s,r){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.defaultKey),void 0===n&&(n=this.defaultFrame),void 0===s&&(s=!0),void 0===r&&(r=!0),this.isFull())return null;var o=new this.classType(this.scene,t,e,i,n);return this.scene.sys.displayList.add(o),o.preUpdate&&this.scene.sys.updateList.add(o),o.visible=s,o.setActive(r),this.add(o),o},createMultiple:function(t){if(this.isFull())return[];if(Array.isArray(t)||(t=[t]),void 0===t[0].key)return[];for(var e=[],i=0;i<t.length;i++){var n=this.createFromConfig(t[i]);e=e.concat(n)}return e},createFromConfig:function(t){if(this.isFull())return[];this.classType=r(t,"classType",this.classType);var e=r(t,"key",void 0),i=r(t,"frame",null),s=r(t,"visible",!0),h=r(t,"active",!0),l=[];if(void 0===e)return l;Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]);for(var u=r(t,"repeat",0),c=r(t,"randomKey",!1),d=r(t,"randomFrame",!1),f=r(t,"yoyo",!1),p=r(t,"frameQuantity",1),v=r(t,"max",0),g=a(e,i,{max:v,qty:p,random:c,randomB:d,repeat:u,yoyo:f}),y=0;y<g.length;y++){var m=this.create(0,0,g[y].a,g[y].b,s,h);if(!m)break;l.push(m)}var x=o(t,"setXY.x",0),w=o(t,"setXY.y",0),b=o(t,"setXY.stepX",0),T=o(t,"setXY.stepY",0);n.SetXY(l,x,w,b,T);var S=o(t,"setRotation.value",0),A=o(t,"setRotation.step",0);n.SetRotation(l,S,A);var C=o(t,"setScale.x",1),M=o(t,"setScale.y",C),_=o(t,"setScale.stepX",0),E=o(t,"setScale.stepY",0);n.SetScale(l,C,M,_,E);var P=o(t,"setAlpha.value",1),L=o(t,"setAlpha.step",0);n.SetAlpha(l,P,L);var k=r(t,"hitArea",null),F=r(t,"hitAreaCallback",null);k&&n.SetHitArea(l,k,F);var R=r(t,"gridAlign",!1);return R&&n.GridAlign(l,R),this.createMultipleCallback&&this.createMultipleCallback.call(this,l),l},preUpdate:function(t,e){if(this.runChildUpdate&&0!==this.children.size)for(var i=this.children.entries.slice(),n=0;n<i.length;n++){var s=i[n];s.active&&s.update(t,e)}},add:function(t,e){return void 0===e&&(e=!1),this.isFull()?this:(this.children.set(t),this.createCallback&&this.createCallback.call(this,t),e&&(this.scene.sys.displayList.add(t),t.preUpdate&&this.scene.sys.updateList.add(t)),t.on("destroy",this.remove,this),this)},addMultiple:function(t,e){if(void 0===e&&(e=!1),Array.isArray(t))for(var i=0;i<t.length;i++)this.add(t[i],e);return this},remove:function(t,e,i){return void 0===e&&(e=!1),void 0===i&&(i=!1),this.children.contains(t)?(this.children.delete(t),this.removeCallback&&this.removeCallback.call(this,t),t.off("destroy",this.remove,this),i?t.destroy():e&&(t.scene.sys.displayList.remove(t),t.preUpdate&&t.scene.sys.updateList.remove(t)),this):this},clear:function(t,e){void 0===t&&(t=!1),void 0===e&&(e=!1);for(var i=this.children,n=0;n<i.size;n++){var s=i.entries[n];s.off("destroy",this.remove,this),e?s.destroy():t&&(s.scene.sys.displayList.remove(s),s.preUpdate&&s.scene.sys.updateList.remove(s))}return this.children.clear(),this},contains:function(t){return this.children.contains(t)},getChildren:function(){return this.children.entries},getLength:function(){return this.children.size},getFirst:function(t,e,i,n,s,r,o){return this.getHandler(!0,1,t,e,i,n,s,r,o)},getFirstNth:function(t,e,i,n,s,r,o,a){return this.getHandler(!0,t,e,i,n,s,r,o,a)},getLast:function(t,e,i,n,s,r,o){return this.getHandler(!1,1,t,e,i,n,s,r,o)},getLastNth:function(t,e,i,n,s,r,o,a){return this.getHandler(!1,t,e,i,n,s,r,o,a)},getHandler:function(t,e,i,n,s,r,o,a,h){void 0===i&&(i=!1),void 0===n&&(n=!1);var l,u,c=0,d=this.children.entries;if(t)for(u=0;u<d.length;u++)if(l=d[u],l.active===i){if(++c===e)break}else l=null;else for(u=d.length-1;u>=0;u--)if(l=d[u],l.active===i){if(++c===e)break}else l=null;return l?("number"==typeof s&&(l.x=s),"number"==typeof r&&(l.y=r),l):n?this.create(s,r,o,a,h):null},get:function(t,e,i,n,s){return this.getFirst(!1,!0,t,e,i,n,s)},getFirstAlive:function(t,e,i,n,s,r){return this.getFirst(!0,t,e,i,n,s,r)},getFirstDead:function(t,e,i,n,s,r){return this.getFirst(!1,t,e,i,n,s,r)},playAnimation:function(t,e){return n.PlayAnimation(this.children.entries,t,e),this},isFull:function(){return-1!==this.maxSize&&this.children.size>=this.maxSize},countActive:function(t){void 0===t&&(t=!0);for(var e=0,i=0;i<this.children.size;i++)this.children.entries[i].active===t&&e++;return e},getTotalUsed:function(){return this.countActive()},getTotalFree:function(){var t=this.getTotalUsed();return(-1===this.maxSize?999999999999:this.maxSize)-t},setDepth:function(t,e){return n.SetDepth(this.children.entries,t,e),this},kill:function(t){this.children.contains(t)&&t.setActive(!1)},killAndHide:function(t){this.children.contains(t)&&(t.setActive(!1),t.setVisible(!1))},toggleVisible:function(){return n.ToggleVisible(this.children.entries),this},destroy:function(t){if(void 0===t&&(t=!1),t)for(var e=this.children,i=0;i<e.size;i++){var n=e.entries[i];n.off("destroy",this.remove,this),n.destroy()}this.children.clear(),this.scene=void 0,this.children=void 0}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(40),r=i(264),o=i(265),a=i(146),h=new n({initialize:function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this.x=t,this.y=e,this._radius=i,this._diameter=2*i},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,e,i){return this.x=t,this.y=e,this._radius=i,this._diameter=2*i,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=2*t}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=.5*t}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}});t.exports=h},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(t.width<=0||t.height<=0)return!1;var n=(e-t.x)/t.width,s=(i-t.y)/t.height;return n*=n,s*=s,n+s<.25};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=function(t,e,i){return t=n(t,0,1),(i-e)*t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={NEVER:0,LITE:1,PASSIVE:2,ACTIVE:4,FIXED:8}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={NONE:0,A:1,B:2,BOTH:3}},function(t,e,i){var n={};t.exports=n;var s=i(73);!function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(t,e){for(var i=e*e*e,s=0;s<t.length;s++){var r=t[s],o=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var a=Math.min(r.motion,o),h=Math.max(r.motion,o);r.motion=n._minBias*a+(1-n._minBias)*h,r.sleepThreshold>0&&r.motion<n._motionSleepThreshold*i?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&n.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else n.set(r,!1)}},n.afterCollisions=function(t,e){for(var i=e*e*e,s=0;s<t.length;s++){var r=t[s];if(r.isActive){var o=r.collision,a=o.bodyA.parent,h=o.bodyB.parent;if(!(a.isSleeping&&h.isSleeping||a.isStatic||h.isStatic)&&(a.isSleeping||h.isSleeping)){var l=a.isSleeping&&!a.isStatic?a:h,u=l===a?h:a;!l.isStatic&&u.motion>n._motionWakeThreshold*i&&n.set(l,!1)}}}},n.set=function(t,e){var i=t.isSleeping;e?(t.isSleeping=!0,t.sleepCounter=t.sleepThreshold,t.positionImpulse.x=0,t.positionImpulse.y=0,t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.anglePrev=t.angle,t.speed=0,t.angularSpeed=0,t.motion=0,i||s.trigger(t,"sleepStart")):(t.isSleeping=!1,t.sleepCounter=0,i&&s.trigger(t,"sleepEnd"))}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DEFAULT:0,LINEAR:0,NEAREST:1}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={PENDING:0,INIT:1,START:2,LOADING:3,CREATING:4,RUNNING:5,PAUSED:6,SLEEPING:7,SHUTDOWN:8,DESTROYED:9};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t>=0&&t<i.width&&e>=0&&e<i.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){void 0===t&&(t={}),this.name=s(t,"name","layer"),this.x=s(t,"x",0),this.y=s(t,"y",0),this.width=s(t,"width",0),this.height=s(t,"height",0),this.tileWidth=s(t,"tileWidth",0),this.tileHeight=s(t,"tileHeight",0),this.baseTileWidth=s(t,"baseTileWidth",this.tileWidth),this.baseTileHeight=s(t,"baseTileHeight",this.tileHeight),this.widthInPixels=s(t,"widthInPixels",this.width*this.baseTileWidth),this.heightInPixels=s(t,"heightInPixels",this.height*this.baseTileHeight),this.alpha=s(t,"alpha",1),this.visible=s(t,"visible",!0),this.properties=s(t,"properties",{}),this.indexes=s(t,"indexes",[]),this.collideIndexes=s(t,"collideIndexes",[]),this.callbacks=s(t,"callbacks",[]),this.bodies=s(t,"bodies",[]),this.data=s(t,"data",[]),this.tilemapLayer=s(t,"tilemapLayer",null)}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){void 0===t&&(t={}),this.name=s(t,"name","map"),this.width=s(t,"width",0),this.height=s(t,"height",0),this.tileWidth=s(t,"tileWidth",0),this.tileHeight=s(t,"tileHeight",0),this.widthInPixels=s(t,"widthInPixels",this.width*this.tileWidth),this.heightInPixels=s(t,"heightInPixels",this.height*this.tileHeight),this.format=s(t,"format",null),this.orientation=s(t,"orientation","orthogonal"),this.version=s(t,"version","1"),this.properties=s(t,"properties",{}),this.layers=s(t,"layers",[]),this.images=s(t,"images",[]),this.objects=s(t,"objects",{}),this.collision=s(t,"collision",{}),this.tilesets=s(t,"tilesets",[]),this.imageCollections=s(t,"imageCollections",[]),this.tiles=s(t,"tiles",[])}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t&&t.hasOwnProperty(e)?t[e]:i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(816),s=function(t,e){if("string"==typeof t&&n.hasOwnProperty(t)){if(e){var i=e.slice(0);return i.unshift(0),function(e){return i[0]=e,n[t].apply(this,i)}}return n[t]}return"function"==typeof t?t:(Array.isArray(t)&&t.length,n.Power0)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={CREATED:0,INIT:1,DELAY:2,OFFSET_DELAY:3,PENDING_RENDER:4,PLAYING_FORWARD:5,PLAYING_BACKWARD:6,HOLD_DELAY:7,REPEAT_DELAY:8,COMPLETE:9,PENDING_ADD:20,PAUSED:21,LOOP_DELAY:22,ACTIVE:23,COMPLETE_DELAY:24,PENDING_REMOVE:25,REMOVED:26};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(!(e>=t.length)){for(var i=t.length-1,n=t[e],s=e;s<i;s++)t[s]=t[s+1];return t.length=i,n}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.parent=t,this.events=e,e||(this.events=t.events?t.events:t),this.list={},this.blockSet=!1,this._frozen=!1,!t.hasOwnProperty("sys")&&this.events&&this.events.once("destroy",this.destroy,this)},get:function(t){return this.list[t]},getAll:function(){var t={};for(var e in this.list)this.list.hasOwnProperty(e)&&(t[e]=this.list[e]);return t},query:function(t){var e={};for(var i in this.list)this.list.hasOwnProperty(i)&&i.match(t)&&(e[i]=this.list[i]);return e},set:function(t,e){if(this._frozen)return this;if(this.events.listenerCount("changedata")>0){this.blockSet=!1;var i=this,n=function(e){i.blockSet=!0,i.list[t]=e,i.events.emit("setdata",i.parent,t,e)};if(this.events.emit("changedata",this.parent,t,e,n),this.blockSet)return this}return this.list[t]=e,this.events.emit("setdata",this.parent,t,e),this},each:function(t,e){for(var i=[this.parent,null,void 0],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[1]=s,i[2]=this.list[s],t.apply(e,i);return this},merge:function(t,e){void 0===e&&(e=!0);for(var i in t)t.hasOwnProperty(i)&&(e||!e&&!this.has(i))&&(this.list[i]=t[i]);return this},remove:function(t){if(!this._frozen&&this.has(t)){var e=this.list[t];delete this.list[t],this.events.emit("removedata",this,t,e)}return this},pop:function(t){var e=void 0;return!this._frozen&&this.has(t)&&(e=this.list[t],delete this.list[t],this.events.emit("removedata",this,t,e)),e},has:function(t){return this.list.hasOwnProperty(t)},setFreeze:function(t){return this._frozen=t,this},reset:function(){for(var t in this.list)delete this.list[t];return this.blockSet=!1,this._frozen=!1,this},destroy:function(){this.reset(),this.events.off("changedata"),this.events.off("setdata"),this.events.off("removedata"),this.parent=null},freeze:{get:function(){return this._frozen},set:function(t){this._frozen=!!t}},count:{get:function(){var t=0;for(var e in this.list)void 0!==this.list[e]&&t++;return t}}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(78),s={chrome:!1,chromeVersion:0,edge:!1,firefox:!1,firefoxVersion:0,ie:!1,ieVersion:0,mobileSafari:!1,opera:!1,safari:!1,safariVersion:0,silk:!1,trident:!1,tridentVersion:0};t.exports=function(){var t=navigator.userAgent;return/Edge\/\d+/.test(t)?s.edge=!0:/Chrome\/(\d+)/.test(t)&&!n.windowsPhone?(s.chrome=!0,s.chromeVersion=parseInt(RegExp.$1,10)):/Firefox\D+(\d+)/.test(t)?(s.firefox=!0,s.firefoxVersion=parseInt(RegExp.$1,10)):/AppleWebKit/.test(t)&&n.iOS?s.mobileSafari=!0:/MSIE (\d+\.\d+);/.test(t)?(s.ie=!0,s.ieVersion=parseInt(RegExp.$1,10)):/Opera/.test(t)?s.opera=!0:/Safari/.test(t)&&!n.windowsPhone?s.safari=!0:/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(t)&&(s.ie=!0,s.trident=!0,s.tridentVersion=parseInt(RegExp.$1,10),s.ieVersion=parseInt(RegExp.$3,10)),/Silk/.test(t)&&(s.silk=!0),s}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(2),o=i(604),a=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Mask,s.Origin,s.Pipeline,s.ScaleMode,s.Size,s.Texture,s.Transform,s.Visible,s.ScrollFactor,o],initialize:function(t,e,i,n,s,o,a,h,l){if(r.call(this,t,"Mesh"),this.setTexture(h,l),this.setPosition(e,i),this.setSizeToFrame(),this.setOrigin(),this.initPipeline("TextureTintPipeline"),n.length!==s.length)throw new Error("Mesh Vertex count must match UV count");var u=n.length/2|0;if(o.length>0&&o.length<u)throw new Error("Mesh Color count must match Vertex count");if(a.length>0&&a.length<u)throw new Error("Mesh Alpha count must match Vertex count");var c;if(0===o.length)for(c=0;c<u;++c)o[c]=16777215;if(0===a.length)for(c=0;c<u;++c)a[c]=1;this.vertices=new Float32Array(n),this.uv=new Float32Array(s),this.colors=new Uint32Array(o),this.alphas=new Float32Array(a)}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(2),r=i(39),o=i(4),a=i(170),h=new n({Extends:s,initialize:function(t,e,i,n,h,l){s.call(this,t,"Sprite3D"),this.gameObject=new r(t,0,0,h,l),this.position=new a(e,i,n),this.size=new o(this.gameObject.width,this.gameObject.height),this.scale=new o(1,1),this.adjustScaleX=!0,this.adjustScaleY=!0,this._visible=!0},project:function(t){var e=this.position,i=this.gameObject;t.project(e,i),t.getPointSize(e,this.size,this.scale),this.scale.x<=0||this.scale.y<=0?i.setVisible(!1):(i.visible||i.setVisible(!0),this.adjustScaleX&&(i.scaleX=this.scale.x),this.adjustScaleY&&(i.scaleY=this.scale.y),i.setDepth(-1*i.z))},setVisible:function(t){return this.visible=t,this},visible:{get:function(){return this._visible},set:function(t){this._visible=t,this.gameObject.visible=t}},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},z:{get:function(){return this.position.z},set:function(t){this.position.z=t}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=i(81),r=i(40),o=i(0),a=i(15),h=i(2),l=i(9),u=i(41),c=new o({Extends:h,Mixins:[a.Depth,a.GetBounds,a.Origin,a.ScaleMode,a.Transform,a.ScrollFactor,a.Visible],initialize:function(t,e,i,s,r){void 0===s&&(s=1),void 0===r&&(r=s),h.call(this,t,"Zone"),this.setPosition(e,i),this.width=s,this.height=r,this.blendMode=n.NORMAL},displayWidth:{get:function(){return this.scaleX*this.width},set:function(t){this.scaleX=t/this.width}},displayHeight:{get:function(){return this.scaleY*this.height},set:function(t){this.scaleY=t/this.height}},setSize:function(t,e,i){return void 0===i&&(i=!0),this.width=t,this.height=e,i&&this.input&&this.input.hitArea instanceof l&&(this.input.hitArea.width=t,this.input.hitArea.height=e),this},setDisplaySize:function(t,e){return this.displayWidth=t,this.displayHeight=e,this},setCircleDropZone:function(t){return this.setDropZone(new s(0,0,t),r)},setRectangleDropZone:function(t,e){var i=-t/2,n=-e/2;return this.setDropZone(new l(i,n,t,e),u)},setDropZone:function(t,e){return void 0===t?this.setRectangleDropZone(this.width,this.height):this.input||this.setInteractive(t,e,!0),this},renderCanvas:function(){},renderWebGL:function(){}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i){void 0===i&&(i=new n);var s=t.x1,r=t.y1,o=t.x2,a=t.y2,h=e.x1,l=e.y1,u=e.x2,c=e.y2,d=(u-h)*(r-l)-(c-l)*(s-h),f=(o-s)*(r-l)-(a-r)*(s-h),p=(c-l)*(o-s)-(u-h)*(a-r);if(0===p)return!1;var v=d/p,g=f/p;return v>=0&&v<=1&&g>=0&&g<=1&&(i.x=s+v*(o-s),i.y=r+v*(a-r),!0)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(276),r=i(150),o=i(151),a=i(4),h=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n},getPoint:function(t,e){return s(this,t,e)},getPoints:function(t,e,i){return r(this,t,e,i)},getRandomPoint:function(t){return o(this,t)},setTo:function(t,e,i,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x1=t,this.y1=e,this.x2=i,this.y2=n,this},getPointA:function(t){return void 0===t&&(t=new a),t.set(this.x1,this.y1),t},getPointB:function(t){return void 0===t&&(t=new a),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}});t.exports=h},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 2*(t.width+t.height)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){return void 0===t&&(t=""),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=""),void 0===s&&(s=0),{responseType:t,async:e,user:i,password:n,timeout:s,header:void 0,headerValue:void 0,requestedWith:!1,overrideMimeType:void 0}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t>0&&0==(t&t-1)&&e>0&&0==(e&e-1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(352),r=i(39),o=new n({Extends:r,Mixins:[s.Acceleration,s.Angular,s.Bounce,s.Debug,s.Drag,s.Enable,s.Friction,s.Gravity,s.Immovable,s.Mass,s.Size,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t,e,i,n,s)}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Bounce:i(913),Collision:i(914),Force:i(915),Friction:i(916),Gravity:i(917),Mass:i(918),Static:i(922),Sensor:i(919),SetBody:i(920),Sleep:i(921),Transform:i(923),Velocity:i(924)}},function(t,e){var i={};t.exports=i,function(){i.create=function(t,e){var n=t.bodyA,s=t.bodyB,r={id:i.id(n,s),bodyA:n,bodyB:s,activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||s.isSensor,timeCreated:e,timeUpdated:e,collision:null,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(r,t,e),r},i.update=function(t,e,n){if(t.collision=e,e.collided){var s=e.supports,r=t.activeContacts,o=e.parentA,a=e.parentB;t.inverseMass=o.inverseMass+a.inverseMass,t.friction=Math.min(o.friction,a.friction),t.frictionStatic=Math.max(o.frictionStatic,a.frictionStatic),t.restitution=Math.max(o.restitution,a.restitution),t.slop=Math.max(o.slop,a.slop);for(var h=0;h<s.length;h++)r[h]=s[h].contact;var l=s.length;l<r.length&&(r.length=l),t.separation=e.depth,i.setActive(t,!0,n)}else!0===t.isActive&&i.setActive(t,!1,n)},i.setActive=function(t,e,i){e?(t.isActive=!0,t.timeUpdated=i):(t.isActive=!1,t.activeContacts.length=0)},i.id=function(t,e){return t.id<e.id?"A"+t.id+"B"+e.id:"A"+e.id+"B"+t.id}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(44),r=new n({initialize:function(t){this.name="WebGLPipeline",this.game=t.game,this.view=t.game.canvas,this.resolution=t.game.config.resolution,this.width=t.game.config.width*this.resolution,this.height=t.game.config.height*this.resolution,this.gl=t.gl,this.vertexCount=0,this.vertexCapacity=t.vertexCapacity,this.renderer=t.renderer,this.vertexData=t.vertices?t.vertices:new ArrayBuffer(t.vertexCapacity*t.vertexSize),this.vertexBuffer=this.renderer.createVertexBuffer(t.vertices?t.vertices:this.vertexData.byteLength,this.gl.STREAM_DRAW),this.program=this.renderer.createProgram(t.vertShader,t.fragShader),this.attributes=t.attributes,this.vertexSize=t.vertexSize,this.topology=t.topology,this.bytes=new Uint8Array(this.vertexData),this.vertexComponentCount=s.getComponentCount(t.attributes,this.gl),this.flushLocked=!1},addAttribute:function(t,e,i,n,s){return this.attributes.push({name:t,size:e,type:this.renderer.glFormats[i],normalized:n,offset:s}),this},shouldFlush:function(){return this.vertexCount>=this.vertexCapacity},resize:function(t,e,i){return this.width=t*i,this.height=e*i,this},bind:function(){var t=this.gl,e=this.vertexBuffer,i=this.attributes,n=this.program,s=this.renderer,r=this.vertexSize;s.setProgram(n),s.setVertexBuffer(e);for(var o=0;o<i.length;++o){var a=i[o],h=t.getAttribLocation(n,a.name);h>=0?(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,a.size,a.type,a.normalized,r,a.offset)):t.disableVertexAttribArray(h)}return this},onBind:function(){return this},onPreRender:function(){return this},onRender:function(){return this},onPostRender:function(){return this},flush:function(){if(this.flushLocked)return this;this.flushLocked=!0;var t=this.gl,e=this.vertexCount,i=this.topology,n=this.vertexSize;return 0===e?void(this.flushLocked=!1):(t.bufferSubData(t.ARRAY_BUFFER,0,this.bytes.subarray(0,e*n)),t.drawArrays(i,0,e),this.vertexCount=0,this.flushLocked=!1,this)},destroy:function(){var t=this.gl;return t.deleteProgram(this.program),t.deleteBuffer(this.vertexBuffer),delete this.program,delete this.vertexBuffer,delete this.gl,this},setFloat1:function(t,e){return this.renderer.setFloat1(this.program,t,e),this},setFloat2:function(t,e,i){return this.renderer.setFloat2(this.program,t,e,i),this},setFloat3:function(t,e,i,n){return this.renderer.setFloat3(this.program,t,e,i,n),this},setFloat4:function(t,e,i,n,s){return this.renderer.setFloat4(this.program,t,e,i,n,s),this},setInt1:function(t,e){return this.renderer.setInt1(this.program,t,e),this},setInt2:function(t,e,i){return this.renderer.setInt2(this.program,t,e,i),this},setInt3:function(t,e,i,n){return this.renderer.setInt3(this.program,t,e,i,n),this},setInt4:function(t,e,i,n,s){return this.renderer.setInt4(this.program,t,e,i,n,s),this},setMatrix2:function(t,e,i){return this.renderer.setMatrix2(this.program,t,e,i),this},setMatrix3:function(t,e,i){return this.renderer.setMatrix3(this.program,t,e,i),this},setMatrix4:function(t,e,i){return this.renderer.setMatrix4(this.program,t,e,i),this}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(19),o=i(3),a=new n({Extends:s,initialize:function(t,e,i){s.call(this),this.manager=t,this.key=e,this.isPlaying=!1,this.isPaused=!1,this.totalRate=1,this.duration=this.duration||0,this.totalDuration=this.totalDuration||0,this.config={mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0},this.currentConfig=this.config,this.config=r(this.config,i),this.markers={},this.currentMarker=null,this.pendingRemove=!1},addMarker:function(t){return!(!t||!t.name||"string"!=typeof t.name)&&(this.markers[t.name]?(console.error("addMarker "+t.name+" already exists in Sound"),!1):(t=r(!0,{name:"",start:0,duration:this.totalDuration-(t.start||0),config:{mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0}},t),this.markers[t.name]=t,!0))},updateMarker:function(t){return!(!t||!t.name||"string"!=typeof t.name)&&(this.markers[t.name]?(this.markers[t.name]=r(!0,this.markers[t.name],t),!0):(console.warn("Audio Marker: "+t.name+" missing in Sound: "+this.key),!1))},removeMarker:function(t){var e=this.markers[t];return e?(this.markers[t]=null,e):null},play:function(t,e){if(void 0===t&&(t=""),"object"==typeof t&&(e=t,t=""),"string"!=typeof t)return!1;if(t){if(!this.markers[t])return console.warn("Marker: "+t+" missing in Sound: "+this.key),!1;this.currentMarker=this.markers[t],this.currentConfig=this.currentMarker.config,this.duration=this.currentMarker.duration}else this.currentMarker=null,this.currentConfig=this.config,this.duration=this.totalDuration;return this.resetConfig(),this.currentConfig=r(this.currentConfig,e),this.isPlaying=!0,this.isPaused=!1,!0},pause:function(){return!(this.isPaused||!this.isPlaying)&&(this.isPlaying=!1,this.isPaused=!0,!0)},resume:function(){return!(!this.isPaused||this.isPlaying)&&(this.isPlaying=!0,this.isPaused=!1,!0)},stop:function(){return!(!this.isPaused&&!this.isPlaying)&&(this.isPlaying=!1,this.isPaused=!1,this.resetConfig(),!0)},applyConfig:function(){this.mute=this.currentConfig.mute,this.volume=this.currentConfig.volume,this.rate=this.currentConfig.rate,this.detune=this.currentConfig.detune,this.loop=this.currentConfig.loop},resetConfig:function(){this.currentConfig.seek=0,this.currentConfig.delay=0},update:o,calculateRate:function(){var t=this.currentConfig.detune+this.manager.detune,e=Math.pow(1.0005777895065548,t);this.totalRate=this.currentConfig.rate*this.manager.rate*e},destroy:function(){this.pendingRemove||(this.emit("destroy",this),this.pendingRemove=!0,this.manager=null,this.key="",this.removeAllListeners(),this.isPlaying=!1,this.isPaused=!1,this.config=null,this.currentConfig=null,this.markers=null,this.currentMarker=null)}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(61),r=i(12),o=i(3),a=new n({Extends:r,initialize:function(t){r.call(this),this.game=t,this.jsonCache=t.cache.json,this.sounds=[],this.mute=!1,this.volume=1,this.pauseOnBlur=!0,t.events.on("blur",function(){this.pauseOnBlur&&this.onBlur()},this),t.events.on("focus",function(){this.pauseOnBlur&&this.onFocus()},this),t.events.once("destroy",this.destroy,this),this._rate=1,this._detune=0,this.locked=this.locked||!1,this.unlocked=!1},add:o,addAudioSprite:function(t,e){void 0===e&&(e={});var i=this.add(t,e);i.spritemap=this.jsonCache.get(t).spritemap;for(var n in i.spritemap)if(i.spritemap.hasOwnProperty(n)){var r=s(e),o=i.spritemap[n];r.loop=!!o.hasOwnProperty("loop")&&o.loop,i.addMarker({name:n,start:o.start,duration:o.end-o.start,config:r})}return i},play:function(t,e){var i=this.add(t);return i.once("ended",i.destroy,i),e?e.name?(i.addMarker(e),i.play(e.name)):i.play(e):i.play()},playAudioSprite:function(t,e,i){var n=this.addAudioSprite(t);return n.once("ended",n.destroy,n),n.play(e,i)},remove:function(t){var e=this.sounds.indexOf(t);return-1!==e&&(t.destroy(),this.sounds.splice(e,1),!0)},removeByKey:function(t){for(var e=0,i=this.sounds.length-1;i>=0;i--){var n=this.sounds[i];n.key===t&&(n.destroy(),this.sounds.splice(i,1),e++)}return e},pauseAll:function(){this.forEachActiveSound(function(t){t.pause()}),this.emit("pauseall",this)},resumeAll:function(){this.forEachActiveSound(function(t){t.resume()}),this.emit("resumeall",this)},stopAll:function(){this.forEachActiveSound(function(t){t.stop()}),this.emit("stopall",this)},unlock:o,onBlur:o,onFocus:o,update:function(t,e){this.unlocked&&(this.unlocked=!1,this.locked=!1,this.emit("unlocked",this));for(var i=this.sounds.length-1;i>=0;i--)this.sounds[i].pendingRemove&&this.sounds.splice(i,1);this.sounds.forEach(function(i){i.update(t,e)})},destroy:function(){this.removeAllListeners(),this.forEachActiveSound(function(t){t.destroy()}),this.sounds.length=0,this.sounds=null,this.game=null},forEachActiveSound:function(t,e){var i=this;this.sounds.forEach(function(n,s){n.pendingRemove||t.call(e||i,n,s,i.sounds)})},setRate:function(t){return this.rate=t,this},rate:{get:function(){return this._rate},set:function(t){this._rate=t,this.forEachActiveSound(function(t){t.calculateRate()}),this.emit("rate",this,t)}},setDetune:function(t){return this.detune=t,this},detune:{get:function(){return this._detune},set:function(t){this._detune=t,this.forEachActiveSound(function(t){t.calculateRate()}),this.emit("detune",this,t)}}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(200),s=i(0),r=i(3),o=i(122),a=new s({initialize:function(t){this.parent=t,this.list=[],this.position=0,this.addCallback=r,this.removeCallback=r,this._sortKey=""},add:function(t,e){return e?n.Add(this.list,t):n.Add(this.list,t,0,this.addCallback,this)},addAt:function(t,e,i){return i?n.AddAt(this.list,t,e):n.AddAt(this.list,t,e,0,this.addCallback,this)},getAt:function(t){return this.list[t]},getIndex:function(t){return this.list.indexOf(t)},sort:function(t){return t&&(this._sortKey=t,o.inplace(this.list,this.sortHandler)),this},sortHandler:function(t,e){return t[this._sortKey]-e[this._sortKey]},getByName:function(t){return n.GetFirst(this.list,"name",t)},getRandom:function(t,e){return n.GetRandom(this.list,t,e)},getFirst:function(t,e,i,s){return n.GetFirstElement(this.list,t,e,i,s)},getAll:function(t,e,i,s){return n.GetAll(this.list,t,e,i,s)},count:function(t,e){return n.CountAllMatching(this.list,t,e)},swap:function(t,e){n.Swap(this.list,t,e)},moveTo:function(t,e){return n.MoveTo(this.list,t,e)},remove:function(t,e){return e?n.Remove(this.list,t):n.Remove(this.list,t,this.removeCallback,this)},removeAt:function(t,e){return e?n.RemoveAt(this.list,t):n.RemoveAt(this.list,t,this.removeCallback,this)},removeBetween:function(t,e,i){return i?n.RemoveBetween(this.list,t,e):n.RemoveBetween(this.list,t,e,this.removeCallback,this)},removeAll:function(t){for(var e=this.list.length;e--;)this.remove(this.list[e],t);return this},bringToTop:function(t){return n.BringToTop(this.list,t)},sendToBack:function(t){return n.SendToBack(this.list,t)},moveUp:function(t){return n.MoveUp(this.list,t),t},moveDown:function(t){return n.MoveDown(this.list,t),t},reverse:function(){return this.list.reverse(),this},shuffle:function(){return n.Shuffle(this.list),this},replace:function(t,e){return n.Replace(this.list,t,e)},exists:function(t){return this.list.indexOf(t)>-1},setAll:function(t,e,i,s){return n.SetAll(this.list,t,e,i,s),this},each:function(t,e){for(var i=[null],n=2;n<arguments.length;n++)i.push(arguments[n]);for(n=0;n<this.list.length;n++)i[0]=this.list[n],t.apply(e,i)},shutdown:function(){this.removeAll(),this.list=[]},destroy:function(){this.removeAll(),this.parent=null,this.addCallback=null,this.removeCallback=null},length:{get:function(){return this.list.length}},first:{get:function(){return this.position=0,this.list.length>0?this.list[0]:null}},last:{get:function(){return this.list.length>0?(this.position=this.list.length-1,this.list[this.position]):null}},next:{get:function(){return this.position<this.list.length?(this.position++,this.list[this.position]):null}},previous:{get:function(){return this.position>0?(this.position--,this.list[this.position]):null}}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r,o,a){(void 0===i||i<=0)&&(i=32),(void 0===n||n<=0)&&(n=32),void 0===s&&(s=0),void 0===r&&(r=0),void 0===o&&(o={}),void 0===a&&(a={}),this.name=t,this.firstgid=e,this.tileWidth=i,this.tileHeight=n,this.tileMargin=s,this.tileSpacing=r,this.tileProperties=o,this.tileData=a,this.image=null,this.rows=0,this.columns=0,this.total=0,this.texCoordinates=[]},getTileProperties:function(t){return this.containsTileIndex(t)?this.tileProperties[t-this.firstgid]:null},getTileData:function(t){return this.containsTileIndex(t)?this.tileData[t-this.firstgid]:null},getTileCollisionGroup:function(t){var e=this.getTileData(t);return e&&e.objectgroup?e.objectgroup:null},containsTileIndex:function(t){return t>=this.firstgid&&t<this.firstgid+this.total},getTileTextureCoordinates:function(t){return this.containsTileIndex(t)?this.texCoordinates[t-this.firstgid]:null},setImage:function(t){return this.image=t,this.updateTileData(this.image.source[0].width,this.image.source[0].height),this},setTileSize:function(t,e){return void 0!==t&&(this.tileWidth=t),void 0!==e&&(this.tileHeight=e),this.image&&this.updateTileData(this.image.source[0].width,this.image.source[0].height),this},setSpacing:function(t,e){return void 0!==t&&(this.tileMargin=t),void 0!==e&&(this.tileSpacing=e),this.image&&this.updateTileData(this.image.source[0].width,this.image.source[0].height),this},updateTileData:function(t,e){var i=(e-2*this.tileMargin+this.tileSpacing)/(this.tileHeight+this.tileSpacing),n=(t-2*this.tileMargin+this.tileSpacing)/(this.tileWidth+this.tileSpacing);i%1==0&&n%1==0||console.warn("Tileset "+this.name+" image tile area is not an even multiple of tile size"),i=Math.floor(i),n=Math.floor(n),this.rows=i,this.columns=n,this.total=i*n,this.texCoordinates.length=0;for(var s=this.tileMargin,r=this.tileMargin,o=0;o<this.rows;o++){for(var a=0;a<this.columns;a++)this.texCoordinates.push({x:s,y:r}),s+=this.tileWidth+this.tileSpacing;s=this.tileMargin,r+=this.tileHeight+this.tileSpacing}return this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(90),s=function(t,e,i,s){if(void 0===i&&(i=!1),n(t,e,s)){var r=s.data[e][t];return null===r?null:-1===r.index?i?r:null:r}return null};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i.baseTileWidth,s=i.tilemapLayer,r=0;return s&&(void 0===e&&(e=s.scene.cameras.main),r=s.x+e.scrollX*(1-s.scrollFactorX),n*=s.scaleX),r+t*n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i.baseTileHeight,s=i.tilemapLayer,r=0;return s&&(void 0===e&&(e=s.scene.cameras.main),r=s.y+e.scrollY*(1-s.scrollFactorY),n*=s.scaleY),r+t*n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CalculateFacesAt:i(190),CalculateFacesWithin:i(45),Copy:i(973),CreateFromTiles:i(974),CullTiles:i(975),Fill:i(976),FilterTiles:i(977),FindByIndex:i(978),FindTile:i(979),ForEachTile:i(980),GetTileAt:i(115),GetTileAtWorldXY:i(981),GetTilesWithin:i(18),GetTilesWithinShape:i(982),GetTilesWithinWorldXY:i(983),HasTileAt:i(398),HasTileAtWorldXY:i(984),IsInLayerBounds:i(90),PutTileAt:i(191),PutTileAtWorldXY:i(985),PutTilesAt:i(986),Randomize:i(987),RemoveTileAt:i(399),RemoveTileAtWorldXY:i(988),RenderDebug:i(989),ReplaceByIndex:i(400),SetCollision:i(990),SetCollisionBetween:i(991),SetCollisionByExclusion:i(992),SetCollisionByProperty:i(993),SetCollisionFromCollisionGroup:i(994),SetTileIndexCallback:i(995),SetTileLocationCallback:i(996),Shuffle:i(997),SwapByIndex:i(998),TileToWorldX:i(116),TileToWorldXY:i(999),TileToWorldY:i(117),WeightedRandomize:i(1e3),WorldToTileX:i(50),WorldToTileXY:i(1001),WorldToTileY:i(51)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n;if(t.hasOwnProperty(e)){n="function"===typeof t[e]?function(i,n,s){return t[e](i,n,s)}:function(){return t[e]}}else n="function"==typeof i?i:function(){return i};return n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(196),s=i(10),r=i(93),o=i(94),a=i(119),h=i(412),l=i(194),u=i(5),c=i(195),d=i(197),f=i(198),p=function(t,e,i){void 0===i&&(i=n);for(var p=i.targets?i.targets:l(e),v=h(e),g=a(e,"delay",i.delay),y=a(e,"duration",i.duration),m=u(e,"easeParams",i.easeParams),x=o(u(e,"ease",i.ease),m),w=a(e,"hold",i.hold),b=a(e,"repeat",i.repeat),T=a(e,"repeatDelay",i.repeatDelay),S=r(e,"yoyo",i.yoyo),A=r(e,"flipX",i.flipX),C=r(e,"flipY",i.flipY),M=[],_=0;_<v.length;_++)for(var E=v[_].key,P=v[_].value,L=0;L<p.length;L++){var k=c(E,P),F=f(p[L],E,k.getEnd,k.getStart,o(u(P,"ease",x),m),a(P,"delay",g),a(P,"duration",y),r(P,"yoyo",S),a(P,"hold",w),a(P,"repeat",b),a(P,"repeatDelay",T),r(P,"flipX",A),r(P,"flipY",C));M.push(F)}var R=new d(t,M,p);R.offset=s(e,"offset",null),R.completeDelay=s(e,"completeDelay",0),R.loop=Math.round(s(e,"loop",0)),R.loopDelay=Math.round(s(e,"loopDelay",0)),R.paused=r(e,"paused",!1),R.useFrames=r(e,"useFrames",!1);for(var O=u(e,"callbackScope",R),B=[R,null],D=d.TYPES,I=0;I<D.length;I++){var Y=D[I],z=u(e,Y,!1);if(z){var X=u(e,Y+"Scope",O),N=u(e,Y+"Params",[]);R.setCallback(Y,z,B.concat(N),X)}}return R};t.exports=p},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
//! stable.js 0.1.6, https://github.com/Two-Screen/stable
//! © 2017 Angry Bytes and contributors. MIT licensed.
!function(){function e(t,e){"function"!=typeof e&&(e=function(t,e){return String(t).localeCompare(e)});var i=t.length;if(i<=1)return t;for(var s=new Array(i),r=1;r<i;r*=2){n(t,e,r,s);var o=t;t=s,s=o}return t}var i=function(t,i){return e(t.slice(),i)};i.inplace=function(t,i){var s=e(t,i);return s!==t&&n(s,null,t.length,t),t};var n=function(t,e,i,n){var s,r,o,a,h,l=t.length,u=0,c=2*i;for(s=0;s<l;s+=c)for(r=s+i,o=r+i,r>l&&(r=l),o>l&&(o=l),a=s,h=r;;)if(a<r&&h<o)e(t[a],t[h])<=0?n[u++]=t[a++]:n[u++]=t[h++];else if(a<r)n[u++]=t[a++];else{if(!(h<o))break;n[u++]=t[h++]}};t.exports=i}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(201),s=i(421),r=function(t,e){if(void 0===e&&(e=90),!n(t))return null;if("string"!=typeof e&&(e=(e%360+360)%360),90===e||-270===e||"rotateLeft"===e)t=s(t),t.reverse();else if(-90===e||270===e||"rotateRight"===e)t.reverse(),t=s(t);else if(180===Math.abs(e)||"rotate180"===e){for(var i=0;i<t.length;i++)t[i].reverse();t.reverse()}return t};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(48),r=i(12),o=i(209),a=i(9),h=i(79),l=i(130),u=i(4),c=new n({Extends:r,initialize:function(t,e,i,n){r.call(this),this.scene,this.name="",this.x=t,this.y=e,this.width=i,this.height=n,this.roundPixels=!1,this.useBounds=!1,this._bounds=new a,this.inputEnabled=!0,this.scrollX=0,this.scrollY=0,this.zoom=1,this.rotation=0,this.matrix=new h(1,0,0,1,0,0),this.transparent=!0,this.backgroundColor=l("rgba(0,0,0,0)"),this.fadeEffect=new o.Fade(this),this.flashEffect=new o.Flash(this),this.shakeEffect=new o.Shake(this),this.disableCull=!1,this.culledObjects=[],this._follow=null,this._id=0},centerToBounds:function(){return this.useBounds&&(this.scrollX=.5*this._bounds.width-.5*this.width,this.scrollY=.5*this._bounds.height-.5*this.height),this},centerToSize:function(){return this.scrollX=.5*this.width,this.scrollY=.5*this.height,this},cull:function(t){if(this.disableCull)return t;var e=this.matrix.matrix,i=e[0],n=e[1],s=e[2],r=e[3],o=i*r-n*s;if(!o)return t;var a=e[4],h=e[5],l=this.scrollX,u=this.scrollY,c=this.width,d=this.height,f=this.culledObjects,p=t.length;o=1/o,f.length=0;for(var v=0;v<p;++v){var g=t[v];if(g.hasOwnProperty("width")&&!g.parentContainer){var y=g.width,m=g.height,x=g.x-l*g.scrollFactorX-y*g.originX,w=g.y-u*g.scrollFactorY-m*g.originY,b=x*i+w*s+a,T=x*n+w*r+h,S=(x+y)*i+(w+m)*s+a,A=(x+y)*n+(w+m)*r+h,C=c+y,M=d+m;(b>-y||T>-m||b<C||T<M||S>-y||A>-m||S<C||A<M)&&f.push(g)}else f.push(g)}return f},fadeIn:function(t,e,i,n,s,r){return this.fadeEffect.start(!1,t,e,i,n,!0,s,r)},fadeOut:function(t,e,i,n,s,r){return this.fadeEffect.start(!0,t,e,i,n,!0,s,r)},fadeFrom:function(t,e,i,n,s,r,o){return this.fadeEffect.start(!1,t,e,i,n,s,r,o)},fade:function(t,e,i,n,s,r,o){return this.fadeEffect.start(!0,t,e,i,n,s,r,o)},flash:function(t,e,i,n,s,r,o){return this.flashEffect.start(t,e,i,n,s,r,o)},shake:function(t,e,i,n,s){return this.shakeEffect.start(t,e,i,n,s)},getWorldPoint:function(t,e,i){void 0===i&&(i=new u);var n=this.matrix.matrix,s=n[0],r=n[1],o=n[2],a=n[3],h=n[4],l=n[5],c=s*a-r*o;if(!c)return i.x=t,i.y=e,i;c=1/c;var d=a*c,f=-r*c,p=-o*c,v=s*c,g=(o*l-a*h)*c,y=(r*h-s*l)*c,m=Math.cos(this.rotation),x=Math.sin(this.rotation),w=this.zoom,b=this.scrollX,T=this.scrollY,S=t+(b*m-T*x)*w,A=e+(b*x+T*m)*w;return i.x=S*d+A*p+g,i.y=S*f+A*v+y,i},ignore:function(t){var e=this._id;if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i].cameraFilter|=e;else t.cameraFilter|=e;return this},preRender:function(t,e){var i=this.width,n=this.height,s=this.zoom*t,r=this.matrix,o=i/2,a=n/2,h=this._follow;if(null!==h&&(o=h.x,a=h.y,this.scrollX=(o-.5*i)/s,this.scrollY=(a-.5*n)/s),this.useBounds){var l=this._bounds,u=Math.max(0,l.right-i),c=Math.max(0,l.bottom-n);this.scrollX<l.x?this.scrollX=l.x:this.scrollX>u&&(this.scrollX=u),this.scrollY<l.y?this.scrollY=l.y:this.scrollY>c&&(this.scrollY=c)}this.roundPixels&&(this.scrollX=Math.round(this.scrollX),this.scrollY=Math.round(this.scrollY)),r.loadIdentity(),r.scale(e,e),r.translate(this.x+o,this.y+a),r.rotate(this.rotation),r.scale(s,s),r.translate(-o,-a),this.shakeEffect.preRender()},removeBounds:function(){return this.useBounds=!1,this._bounds.setEmpty(),this},setAngle:function(t){return void 0===t&&(t=0),this.rotation=s(t),this},setBackgroundColor:function(t){return void 0===t&&(t="rgba(0,0,0,0)"),this.backgroundColor=l(t),this.transparent=0===this.backgroundColor.alpha,this},setBounds:function(t,e,i,n){return this._bounds.setTo(t,e,i,n),this.useBounds=!0,this},setName:function(t){return void 0===t&&(t=""),this.name=t,this},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setRotation:function(t){return void 0===t&&(t=0),this.rotation=t,this},setRoundPixels:function(t){return this.roundPixels=t,this},setScene:function(t){return this.scene=t,this},setScroll:function(t,e){return void 0===e&&(e=t),this.scrollX=t,this.scrollY=e,this},setSize:function(t,e){return void 0===e&&(e=t),this.width=t,this.height=e,this},setViewport:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},setZoom:function(t){return void 0===t&&(t=1),this.zoom=t,this},startFollow:function(t,e){return void 0===e&&(e=!1),this._follow=t,this.roundPixels=e,this},stopFollow:function(){return this._follow=null,this},toJSON:function(){var t={name:this.name,x:this.x,y:this.y,width:this.width,height:this.height,zoom:this.zoom,rotation:this.rotation,roundPixels:this.roundPixels,scrollX:this.scrollX,scrollY:this.scrollY,backgroundColor:this.backgroundColor.rgba};return this.useBounds&&(t.bounds={x:this._bounds.x,y:this._bounds.y,width:this._bounds.width,height:this._bounds.height}),t},resetFX:function(){return this.shakeEffect.reset(),this.flashEffect.reset(),this.fadeEffect.reset(),this},update:function(t,e){this.shakeEffect.update(t,e),this.flashEffect.update(t,e),this.fadeEffect.update(t,e)},destroy:function(){this.emit("cameradestroy",this),this.removeAllListeners(),this.resetFX(),this.matrix.destroy(),this.culledObjects=[],this.target=void 0,this._bounds=void 0,this.scene=void 0}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(167),r=i(316),o=i(317),a=i(320),h=i(75),l=i(100),u=i(4),c=i(71),d=i(170),f=new c,p=new d,v=new c,g=new c,y=new s,m=new n({initialize:function(t){this.scene=t,this.displayList=t.sys.displayList,this.updateList=t.sys.updateList,this.name="",this.direction=new c(0,0,-1),this.up=new c(0,1,0),this.position=new c,this.pixelScale=128,this.projection=new s,this.view=new s,this.combined=new s,this.invProjectionView=new s,this.near=1,this.far=100,this.ray={origin:new c,direction:new c},this.viewportWidth=0,this.viewportHeight=0,this.billboardMatrixDirty=!0,this.children=new h},setPosition:function(t,e,i){return this.position.set(t,e,i),this.update()},setScene:function(t){return this.scene=t,this},setPixelScale:function(t){return this.pixelScale=t,this.update()},add:function(t){return this.children.set(t),this.updateChildren(),t},remove:function(t){return this.displayList.remove(t.gameObject),this.updateList.remove(t.gameObject),this.children.delete(t),this},clear:function(){for(var t=this.getChildren(),e=0;e<t.length;e++)this.remove(t[e]);return this},getChildren:function(){return this.children.entries},create:function(t,e,i,n,s,r){void 0===r&&(r=!0);var o=new l(this.scene,t,e,i,n,s);return this.displayList.add(o.gameObject),this.updateList.add(o.gameObject),o.visible=r,this.children.set(o),this.updateChildren(),o},createMultiple:function(t,e,i,n){void 0===n&&(n=!0);for(var s=[],r=0;r<t;r++){var o=new l(this.scene,0,0,0,e,i);this.displayList.add(o.gameObject),this.updateList.add(o.gameObject),o.visible=n,this.children.set(o),s.push(o)}return s},createRect:function(t,e,i,n){"number"==typeof t&&(t={x:t,y:t,z:t}),"number"==typeof e&&(e={x:e,y:e,z:e});for(var s=t.x*t.y*t.z,r=this.createMultiple(s,i,n),o=0,a=.5-t.z/2;a<t.z/2;a++)for(var h=.5-t.y/2;h<t.y/2;h++)for(var l=.5-t.x/2;l<t.x/2;l++){var u=l*e.x,c=h*e.y,d=a*e.z;r[o].position.set(u,c,d),o++}return this.update(),r},randomSphere:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)r(e[i].position,t);return this.update()},randomCube:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)o(e[i].position,t);return this.update()},translateChildren:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)e[i].position.add(t);return this.update()},transformChildren:function(t,e){void 0===e&&(e=this.getChildren());for(var i=0;i<e.length;i++)e[i].position.transformMat4(t);return this.update()},setViewport:function(t,e){return this.viewportWidth=t,this.viewportHeight=e,this.update()},translate:function(t,e,i){return"object"==typeof t?(this.position.x+=t.x||0,this.position.y+=t.y||0,this.position.z+=t.z||0):(this.position.x+=t||0,this.position.y+=e||0,this.position.z+=i||0),this.update()},lookAt:function(t,e,i){var n=this.direction,s=this.up;return"object"==typeof t?n.copy(t):n.set(t,e,i),n.subtract(this.position).normalize(),f.copy(n).cross(s).normalize(),s.copy(f).cross(n).normalize(),this.update()},rotate:function(t,e){return a(this.direction,e,t),a(this.up,e,t),this.update()},rotateAround:function(t,e,i){return f.copy(t).subtract(this.position),this.translate(f),this.rotate(e,i),this.translate(f.negate()),this.update()},project:function(t,e){void 0===e&&(e=new d);var i=this.viewportWidth,n=this.viewportHeight,s=m.NEAR_RANGE,r=m.FAR_RANGE;return p.set(t.x,t.y,t.z,1),p.transformMat4(this.combined),0===p.w&&(p.w=1),p.x=p.x/p.w,p.y=p.y/p.w,p.z=p.z/p.w,e.x=i/2*p.x+(0+i/2),e.y=n/2*p.y+(0+n/2),e.z=(r-s)/2*p.z+(r+s)/2,(0===e.w||e.w)&&(e.w=1/p.w),e},unproject:function(t,e){void 0===e&&(e=new c);var i=p.set(0,0,this.viewportWidth,this.viewportHeight);return e.copy(t).unproject(i,this.invProjectionView)},getPickRay:function(t,e){var i=this.ray.origin.set(t,e,0),n=this.ray.direction.set(t,e,1),s=p.set(0,0,this.viewportWidth,this.viewportHeight),r=this.invProjectionView;return i.unproject(s,r),n.unproject(s,r),n.subtract(i).normalize(),this.ray},updateChildren:function(){for(var t=this.children.entries,e=0;e<t.length;e++)t[e].project(this);return this},update:function(){return this.updateChildren()},updateBillboardMatrix:function(){var t=v.set(this.direction).negate(),e=g.set(this.up).cross(t).normalize(),i=f.set(t).cross(e).normalize(),n=y.val;n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=0,n[4]=i.x,n[5]=i.y,n[6]=i.z,n[7]=0,n[8]=t.x,n[9]=t.y,n[10]=t.z,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this.billboardMatrixDirty=!1},getPointSize:function(t,e,i){void 0===i&&(i=new u),this.billboardMatrixDirty&&this.updateBillboardMatrix();var n=f,s=e.x/this.pixelScale/2,r=e.y/this.pixelScale/2;n.set(-s,-r,0).transformMat4(y).add(t),this.project(n,n);var o=n.x,a=n.y;n.set(s,r,0).transformMat4(y).add(t),this.project(n,n);var h=n.x,l=n.y,c=h-o,d=l-a;return i.set(c,d)},destroy:function(){this.children.clear(),this.scene=void 0,this.children=void 0},setX:function(t){return this.position.x=t,this.update()},setY:function(t){return this.position.y=t,this.update()},setZ:function(t){return this.position.z=t,this.update()},x:{get:function(){return this.position.x},set:function(t){this.position.x=t,this.update()}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t,this.update()}},z:{get:function(){return this.position.z},set:function(t){this.position.z=t,this.update()}}});m.FAR_RANGE=1,m.NEAR_RANGE=0,t.exports=m},function(t,e,i){function n(){var t=new ArrayBuffer(4),e=new Uint8Array(t),i=new Uint32Array(t);return e[0]=161,e[1]=178,e[2]=195,e[3]=212,3569595041===i[0]||2712847316!==i[0]&&null}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=i(78),r=i(98),o=i(26),a={canvas:!1,canvasBitBltShift:null,file:!1,fileSystem:!1,getUserMedia:!0,littleEndian:!1,localStorage:!1,pointerLock:!1,support32bit:!1,vibration:!1,webGL:!1,worker:!1};t.exports=function(){a.canvas=!!window.CanvasRenderingContext2D||s.cocoonJS;try{a.localStorage=!!localStorage.getItem}catch(t){a.localStorage=!1}a.file=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),a.fileSystem=!!window.requestFileSystem;var t=!1;return a.webGL=function(){if(window.WebGLRenderingContext)try{var e=o.createWebGL(this);s.cocoonJS&&(e.screencanvas=!1);var i=e.getContext("webgl")||e.getContext("experimental-webgl"),n=o.create2D(this),r=n.getContext("2d"),a=r.createImageData(1,1);return t=a.data instanceof Uint8ClampedArray,o.remove(e),o.remove(n),!!i}catch(t){return!1}return!1}(),a.worker=!!window.Worker,a.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,a.getUserMedia=a.getUserMedia&&!!navigator.getUserMedia&&!!window.URL,r.firefox&&r.firefoxVersion<21&&(a.getUserMedia=!1),!s.iOS&&(r.ie||r.firefox||r.chrome)&&(a.canvasBitBltShift=!0),(r.safari||r.mobileSafari)&&(a.canvasBitBltShift=!1),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(a.vibration=!0),"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint32Array&&(a.littleEndian=n()),a.support32bit="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof Int32Array&&null!==a.littleEndian&&t,a}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={TOP_LEFT:0,TOP_CENTER:1,TOP_RIGHT:2,LEFT_TOP:3,LEFT_CENTER:4,LEFT_BOTTOM:5,CENTER:6,RIGHT_TOP:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM_RIGHT:12};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i="";t.exports=function(){var t=function(t){for(var e=["i","webkitI","msI","mozI","oI"],i=0;i<e.length;i++){var n=e[i]+"mageSmoothingEnabled";if(n in t)return n}return null},e=function(e){return""===i&&(i=t(e)),i&&(e[i]=!0),e};return{disable:function(e){return""===i&&(i=t(e)),i&&(e[i]=!1),e},enable:e,getPrefix:t,isEnabled:function(t){return null!==i?t[i]:null}}}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t<<16|e<<8|i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(237),s=i(239),r=i(241),o=i(242),a=function(t){switch(typeof t){case"string":return"rgb"===t.substr(0,3).toLowerCase()?o(t):n(t);case"number":return s(t);case"object":return r(t)}};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=!0);var n;return e&&("string"==typeof e?n=document.getElementById(e):"object"==typeof e&&1===e.nodeType&&(n=e)),n||(n=document.body),i&&n.style&&(n.style.overflow="hidden"),n.appendChild(t),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(10),s=function(t,e){var i=n(e,"anims",null);if(null===i)return t;if("string"==typeof i)t.anims.play(i);else if("object"==typeof i){var s=t.anims,r=n(i,"key",void 0),o=n(i,"startFrame",void 0),a=n(i,"delay",0),h=n(i,"repeat",0),l=n(i,"repeatDelay",0),u=n(i,"yoyo",!1),c=n(i,"play",!1),d=n(i,"delayedPlay",0);s.delay(a),s.repeat(h),s.repeatDelay(l),s.yoyo(u),c?s.play(r,o):d>0?s.delayedPlay(d,r,o):s.load(r)}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(2),o=i(250),a=i(553),h=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Mask,s.Origin,s.Pipeline,s.ScrollFactor,s.Texture,s.Tint,s.Transform,s.Visible,a],initialize:function(t,e,i,n,s,o){void 0===s&&(s=""),r.call(this,t,"DynamicBitmapText"),this.font=n;var a=this.scene.sys.cache.bitmapFont.get(n);this.fontData=a.data,this.text="",this.fontSize=o||this.fontData.size,this.letterSpacing=0,this.setText(s),this.setTexture(a.texture,a.frame),this.setPosition(e,i),this.setOrigin(0,0),this.initPipeline("TextureTintPipeline"),this._bounds=this.getTextBounds(),this.scrollX=0,this.scrollY=0,this.cropWidth=0,this.cropHeight=0,this.displayCallback},setSize:function(t,e){return this.cropWidth=t,this.cropHeight=e,this},setDisplayCallback:function(t){return this.displayCallback=t,this},setFontSize:function(t){return this.fontSize=t,this},setText:function(t){return t||0===t||(t=""),Array.isArray(t)&&(t=t.join("\n")),t!==this.text&&(this.text=t.toString(),this.updateDisplayOrigin()),this},setScrollX:function(t){return this.scrollX=t,this},setScrollY:function(t){return this.scrollY=t,this},getTextBounds:function(t){return this._bounds=o(this,t),this._bounds},width:{get:function(){return this.getTextBounds(!1),this._bounds.global.width}},height:{get:function(){return this.getTextBounds(!1),this._bounds.global.height}},toJSON:function(){var t=s.ToJSON(this),e={font:this.font,text:this.text,fontSize:this.fontSize};return t.data=e,t}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(2),o=i(250),a=i(546),h=i(558),l=new n({Extends:r,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Mask,s.Origin,s.Pipeline,s.ScaleMode,s.ScrollFactor,s.Texture,s.Tint,s.Transform,s.Visible,h],initialize:function(t,e,i,n,s,o){void 0===s&&(s=""),r.call(this,t,"BitmapText"),this.font=n;var a=this.scene.sys.cache.bitmapFont.get(n);this.fontData=a.data,this.text="",this.fontSize=o||this.fontData.size,this.letterSpacing=0,this.setText(s),this.setTexture(a.texture,a.frame),this.setPosition(e,i),this.setOrigin(0,0),this.initPipeline("TextureTintPipeline"),this._bounds=this.getTextBounds()},setFontSize:function(t){return this.fontSize=t,this},setLetterSpacing:function(t){return void 0===t&&(t=0),this.letterSpacing=t,this},setText:function(t){return t||0===t||(t=""),Array.isArray(t)&&(t=t.join("\n")),t!==this.text&&(this.text=t.toString(),this.updateDisplayOrigin()),this},getTextBounds:function(t){return this._bounds=o(this,t),this._bounds},width:{get:function(){return this.getTextBounds(!1),this._bounds.global.width}},height:{get:function(){return this.getTextBounds(!1),this._bounds.global.height}},toJSON:function(){var t=s.ToJSON(this),e={font:this.font,text:this.text,fontSize:this.fontSize,letterSpacing:this.letterSpacing};return t.data=e,t}});l.ParseFromAtlas=a,t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(563),s=i(565),r=i(0),o=i(15),a=i(187),h=i(2),l=i(113),u=new r({Extends:h,Mixins:[o.Alpha,o.BlendMode,o.Depth,o.Mask,o.Pipeline,o.ScaleMode,o.ScrollFactor,o.Size,o.Texture,o.Transform,o.Visible,n],initialize:function(t,e,i,n,s){h.call(this,t,"Blitter"),this.setTexture(n,s),this.setPosition(e,i),this.initPipeline("TextureTintPipeline"),this.children=new l,this.renderList=[],this.dirty=!1},create:function(t,e,i,n,r){void 0===n&&(n=!0),void 0===r&&(r=this.children.length),void 0===i?i=this.frame:i instanceof a||(i=this.texture.get(i));var o=new s(this,t,e,i,n);return this.children.addAt(o,r,!1),this.dirty=!0,o},createFromCallback:function(t,e,i,n){for(var s=this.createMultiple(e,i,n),r=0;r<s.length;r++){var o=s[r];t.call(this,o,r)}return s},createMultiple:function(t,e,i){void 0===e&&(e=this.frame.name),void 0===i&&(i=!0),Array.isArray(e)||(e=[e]);var n=[],s=this;return e.forEach(function(e){for(var r=0;r<t;r++)n.push(s.create(0,0,e,i))}),n},childCanRender:function(t){return t.visible&&t.alpha>0},getRenderList:function(){return this.dirty&&(this.renderList=this.children.list.filter(this.childCanRender,this),this.dirty=!1),this.renderList},clear:function(){this.children.removeAll(),this.dirty=!0}});t.exports=u},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={defaultPipeline:null,pipeline:null,initPipeline:function(t){var e=this.scene.sys.game.renderer;return!!(e&&e.gl&&e.hasPipeline(t))&&(this.defaultPipeline=e.getPipeline(t),this.pipeline=this.defaultPipeline,!0)},setPipeline:function(t){var e=this.scene.sys.game.renderer;return!!(e&&e.gl&&e.hasPipeline(t))&&(this.pipeline=e.getPipeline(t),!0)},resetPipeline:function(){return this.pipeline=this.defaultPipeline,null!==this.pipeline},getPipelineName:function(){return this.pipeline.name}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(200),s=i(0),r=i(15),o=i(2),a=i(9),h=i(586),l=i(286),u=i(4),c=new s({Extends:o,Mixins:[r.Alpha,r.BlendMode,r.ComputedSize,r.Depth,r.ScrollFactor,r.Transform,r.Visible,h],initialize:function(t,e,i,n){o.call(this,t,"Container"),this.list=[],this.exclusive=!0,this.maxSize=-1,this.position=0,this.localTransform=new r.TransformMatrix,this.tempTransformMatrix=new r.TransformMatrix,this._displayList=t.sys.displayList,this._sortKey="",this.setPosition(e,i),this.clearAlpha(),n&&this.add(n)},originX:{get:function(){return.5}},originY:{get:function(){return.5}},displayOriginX:{get:function(){return.5*this.width}},displayOriginY:{get:function(){return.5*this.height}},setExclusive:function(t){return void 0===t&&(t=!0),this.exclusive=t,this},getBounds:function(t){if(void 0===t&&(t=new a),t.setTo(this.x,this.y,0,0),this.list.length>0)for(var e=this.list,i=new a,n=0;n<e.length;n++){var s=e[n];s.getBounds&&(s.getBounds(i),l(i,t,t))}return t},addHandler:function(t){t.on("destroy",this.remove,this),this.exclusive&&(this._displayList.remove(t),t.parentContainer&&t.parentContainer.remove(t),t.parentContainer=this)},removeHandler:function(t){t.off("destroy",this.remove,this),this.exclusive&&(t.parentContainer=null)},pointToContainer:function(t,e){if(void 0===e&&(e=new u),this.parentContainer)return this.parentContainer.pointToContainer(t,e);var i=this.tempTransformMatrix;return i.applyITRS(this.x,this.y,this.rotation,this.scaleX,this.scaleY),i.invert(),i.transformPoint(t.x,t.y,e),e},getBoundsTransformMatrix:function(){var t=this.tempTransformMatrix;if(t.applyITRS(this.x,this.y,this.rotation,this.scaleX,this.scaleY),this.parentContainer){var e=this.parentContainer.getTransformMatrix();t.multiply(e)}return t},add:function(t){return n.Add(this.list,t,this.maxSize,this.addHandler,this),this},addAt:function(t,e){return n.AddAt(this.list,t,e,this.maxSize,this.addHandler,this),this},getAt:function(t){return this.list[t]},getIndex:function(t){return this.list.indexOf(t)},sort:function(t){return t&&(this._sortKey=t,n.StableSort.inplace(this.list,this.sortHandler)),this},sortHandler:function(t,e){return t[this._sortKey]-e[this._sortKey]},getByName:function(t){return n.GetFirst(this.list,"name",t)},getRandom:function(t,e){return n.GetRandom(this.list,t,e)},getFirst:function(t,e,i,s){return n.GetFirstElement(this.list,t,e,i,s)},getAll:function(t,e,i,s){return n.GetAll(this.list,t,e,i,s)},count:function(t,e,i,s){return n.CountAllMatching(this.list,t,e,i,s)},swap:function(t,e){return n.Swap(this.list,t,e),this},moveTo:function(t,e){return n.MoveTo(this.list,t,e),this},remove:function(t,e){var i=n.Remove(this.list,t,this.removeHandler,this);if(e&&i){Array.isArray(i)||(i=[i]);for(var s=0;s<i.length;s++)i[s].destroy()}return this},removeAt:function(t,e){var i=n.RemoveAt(this.list,t,this.removeHandler,this);return e&&i&&i.destroy(),this},removeBetween:function(t,e,i){var s=n.RemoveBetween(this.list,t,e,this.removeHandler,this);if(i)for(var r=0;r<s.length;r++)s[r].destroy();return this},removeAll:function(t){var e=n.RemoveBetween(this.list,0,this.list.length,this.removeHandler,this);if(t)for(var i=0;i<e.length;i++)e[i].destroy();return this},bringToTop:function(t){return n.BringToTop(this.list,t),this},sendToBack:function(t){return n.SendToBack(this.list,t),this},moveUp:function(t){return n.MoveUp(this.list,t),this},moveDown:function(t){return n.MoveDown(this.list,t),this},reverse:function(){return this.list.reverse(),this},shuffle:function(){return n.Shuffle(this.list),this},replace:function(t,e,i){return n.Replace(this.list,t,e)&&(this.addHandler(e),this.removeHandler(t),i&&t.destroy()),this},exists:function(t){return this.list.indexOf(t)>-1},setAll:function(t,e,i,s){return n.SetAll(this.list,t,e,i,s),this},each:function(t,e){var i,n=[null],s=this.list.slice(),r=s.length;for(i=2;i<arguments.length;i++)n.push(arguments[i]);for(i=0;i<r;i++)n[0]=s[i],t.apply(e,n);return this},iterate:function(t,e){var i,n=[null];for(i=2;i<arguments.length;i++)n.push(arguments[i]);for(i=0;i<this.list.length;i++)n[0]=this.list[i],t.apply(e,n);return this},length:{get:function(){return this.list.length}},first:{get:function(){return this.position=0,this.list.length>0?this.list[0]:null}},last:{get:function(){return this.list.length>0?(this.position=this.list.length-1,this.list[this.position]):null}},next:{get:function(){return this.position<this.list.length?(this.position++,this.list[this.position]):null}},previous:{get:function(){return this.position>0?(this.position--,this.list[this.position]):null}},destroy:function(){this.removeAll(!!this.exclusive),this.localTransform.destroy(),this.tempTransformMatrix.destroy(),this.list=[],this._displayList=null,o.prototype.destroy.call(this)}});t.exports=c},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={ARC:0,BEGIN_PATH:1,CLOSE_PATH:2,FILL_RECT:3,LINE_TO:4,MOVE_TO:5,LINE_STYLE:6,FILL_STYLE:7,FILL_PATH:8,STROKE_PATH:9,FILL_TRIANGLE:10,STROKE_TRIANGLE:11,LINE_FX_TO:12,MOVE_FX_TO:13,SAVE:14,RESTORE:15,TRANSLATE:16,SCALE:17,ROTATE:18}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(124),s=i(0),r=i(138),o=i(15),a=i(269),h=i(2),l=i(5),u=i(17),c=i(590),d=new s({Extends:h,Mixins:[o.Alpha,o.BlendMode,o.Depth,o.Mask,o.Pipeline,o.Transform,o.Visible,o.ScrollFactor,c],initialize:function(t,e){var i=l(e,"x",0),n=l(e,"y",0);h.call(this,t,"Graphics"),this.setPosition(i,n),this.initPipeline("FlatTintPipeline"),this.displayOriginX=0,this.displayOriginY=0,this.commandBuffer=[],this.defaultFillColor=-1,this.defaultFillAlpha=1,this.defaultStrokeWidth=1,this.defaultStrokeColor=-1,this.defaultStrokeAlpha=1,this._lineWidth=1,this.setDefaultStyles(e)},setDefaultStyles:function(t){return l(t,"lineStyle",null)&&(this.defaultStrokeWidth=l(t,"lineStyle.width",1),this.defaultStrokeColor=l(t,"lineStyle.color",16777215),this.defaultStrokeAlpha=l(t,"lineStyle.alpha",1),this.lineStyle(this.defaultStrokeWidth,this.defaultStrokeColor,this.defaultStrokeAlpha)),l(t,"fillStyle",null)&&(this.defaultFillColor=l(t,"fillStyle.color",16777215),this.defaultFillAlpha=l(t,"fillStyle.alpha",1),this.fillStyle(this.defaultFillColor,this.defaultFillAlpha)),this},lineStyle:function(t,e,i){return void 0===i&&(i=1),this.commandBuffer.push(r.LINE_STYLE,t,e,i),this._lineWidth=t,this},fillStyle:function(t,e){return void 0===e&&(e=1),this.commandBuffer.push(r.FILL_STYLE,t,e),this},beginPath:function(){return this.commandBuffer.push(r.BEGIN_PATH),this},closePath:function(){return this.commandBuffer.push(r.CLOSE_PATH),this},fillPath:function(){return this.commandBuffer.push(r.FILL_PATH),this},strokePath:function(){return this.commandBuffer.push(r.STROKE_PATH),this},fillCircleShape:function(t){return this.fillCircle(t.x,t.y,t.radius)},strokeCircleShape:function(t){return this.strokeCircle(t.x,t.y,t.radius)},fillCircle:function(t,e,i){return this.beginPath(),this.arc(t,e,i,0,u.PI2),this.fillPath(),this},strokeCircle:function(t,e,i){return this.beginPath(),this.arc(t,e,i,0,u.PI2),this.strokePath(),this},fillRectShape:function(t){return this.fillRect(t.x,t.y,t.width,t.height)},strokeRectShape:function(t){return this.strokeRect(t.x,t.y,t.width,t.height)},fillRect:function(t,e,i,n){return this.commandBuffer.push(r.FILL_RECT,t,e,i,n),this},strokeRect:function(t,e,i,n){var s=this._lineWidth/2,r=t-s,o=t+s;return this.beginPath(),this.moveTo(t,e),this.lineTo(t,e+n),this.strokePath(),this.beginPath(),this.moveTo(t+i,e),this.lineTo(t+i,e+n),this.strokePath(),this.beginPath(),this.moveTo(r,e),this.lineTo(o+i,e),this.strokePath(),this.beginPath(),this.moveTo(r,e+n),this.lineTo(o+i,e+n),this.strokePath(),this},fillPointShape:function(t,e){return this.fillPoint(t.x,t.y,e)},fillPoint:function(t,e,i){return!i||i<1?i=1:(t-=i/2,e-=i/2),this.commandBuffer.push(r.FILL_RECT,t,e,i,i),this},fillTriangleShape:function(t){return this.fillTriangle(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},strokeTriangleShape:function(t){return this.strokeTriangle(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},fillTriangle:function(t,e,i,n,s,o){return this.commandBuffer.push(r.FILL_TRIANGLE,t,e,i,n,s,o),this},strokeTriangle:function(t,e,i,n,s,o){return this.commandBuffer.push(r.STROKE_TRIANGLE,t,e,i,n,s,o),this},strokeLineShape:function(t){return this.lineBetween(t.x1,t.y1,t.x2,t.y2)},lineBetween:function(t,e,i,n){return this.beginPath(),this.moveTo(t,e),this.lineTo(i,n),this.strokePath(),this},lineTo:function(t,e){return this.commandBuffer.push(r.LINE_TO,t,e),this},moveTo:function(t,e){return this.commandBuffer.push(r.MOVE_TO,t,e),this},lineFxTo:function(t,e,i,n){return this.commandBuffer.push(r.LINE_FX_TO,t,e,i,n,1),this},moveFxTo:function(t,e,i,n){return this.commandBuffer.push(r.MOVE_FX_TO,t,e,i,n,1),this},strokePoints:function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=t.length),this.beginPath(),this.moveTo(t[0].x,t[0].y);for(var n=1;n<i;n++)this.lineTo(t[n].x,t[n].y);return e&&this.lineTo(t[0].x,t[0].y),this.strokePath(),this},fillPoints:function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=t.length),this.beginPath(),this.moveTo(t[0].x,t[0].y);for(var n=1;n<i;n++)this.lineTo(t[n].x,t[n].y);return e&&this.lineTo(t[0].x,t[0].y),this.fillPath(),this},strokeEllipseShape:function(t,e){void 0===e&&(e=32);var i=t.getPoints(e);return this.strokePoints(i,!0)},strokeEllipse:function(t,e,i,n,s){void 0===s&&(s=32);var r=new a(t,e,i,n),o=r.getPoints(s);return this.strokePoints(o,!0)},fillEllipseShape:function(t,e){void 0===e&&(e=32);var i=t.getPoints(e);return this.fillPoints(i,!0)},fillEllipse:function(t,e,i,n,s){void 0===s&&(s=32);var r=new a(t,e,i,n),o=r.getPoints(s);return this.fillPoints(o,!0)},arc:function(t,e,i,n,s,o){return this.commandBuffer.push(r.ARC,t,e,i,n,s,o),this},slice:function(t,e,i,n,s,o){return void 0===o&&(o=!1),this.commandBuffer.push(r.BEGIN_PATH),this.commandBuffer.push(r.MOVE_TO,t,e),this.commandBuffer.push(r.ARC,t,e,i,n,s,o),this.commandBuffer.push(r.CLOSE_PATH),this},save:function(){return this.commandBuffer.push(r.SAVE),this},restore:function(){return this.commandBuffer.push(r.RESTORE),this},translate:function(t,e){return this.commandBuffer.push(r.TRANSLATE,t,e),this},scale:function(t,e){return this.commandBuffer.push(r.SCALE,t,e),this},rotate:function(t){return this.commandBuffer.push(r.ROTATE,t),this},clear:function(){return this.commandBuffer.length=0,this.defaultFillColor>-1&&this.fillStyle(this.defaultFillColor,this.defaultFillAlpha),this.defaultStrokeColor>-1&&this.lineStyle(this.defaultStrokeWidth,this.defaultStrokeColor,this.defaultStrokeAlpha),this},generateTexture:function(t,e,i){var n=this.scene.sys;void 0===e&&(e=n.game.config.width),void 0===i&&(i=n.game.config.height),d.TargetCamera.setViewport(0,0,e,i),d.TargetCamera.scrollX=this.x,d.TargetCamera.scrollY=this.y;var s,r;if("string"==typeof t)if(n.textures.exists(t)){s=n.textures.get(t);var o=s.getSourceImage();o instanceof HTMLCanvasElement&&(r=o.getContext("2d"))}else s=n.textures.createCanvas(t,e,i),r=s.getSourceImage().getContext("2d");else t instanceof HTMLCanvasElement&&(r=t.getContext("2d"));return r&&(this.renderCanvas(n.game.renderer,this,0,d.TargetCamera,null,r),n.game.renderer.gl&&s&&(s.source[0].glTexture=n.game.renderer.canvasToTexture(r.canvas,s.source[0].glTexture))),this}});d.TargetCamera=new n(0,0,0,0),t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(2),o=i(256),a=i(113),h=i(258),l=i(610),u=new n({Extends:r,Mixins:[s.Depth,s.Visible,s.Pipeline,l],initialize:function(t,e,i,n){if(r.call(this,t,"ParticleEmitterManager"),this.blendMode=-1,this.timeScale=1,this.texture=null,this.frame=null,this.frameNames=[],null===i||"object"!=typeof i&&!Array.isArray(i)||(n=i,i=null),this.setTexture(e,i),this.initPipeline("TextureTintPipeline"),this.emitters=new a(this),this.wells=new a(this),n){Array.isArray(n)||(n=[n]);for(var s=0;s<n.length;s++)this.createEmitter(n[s])}},setTexture:function(t,e){return this.texture=this.scene.sys.textures.get(t),this.setFrame(e)},setFrame:function(t){return this.frame=this.texture.get(t),this.frameNames=this.texture.getFramesFromTextureSource(this.frame.sourceIndex),this.defaultFrame=this.frame,this},setEmitterFrames:function(t,e){Array.isArray(t)||(t=[t]);var i=e.frames;i.length=0;for(var n=0;n<t.length;n++){var s=t[n];-1!==this.frameNames.indexOf(s)&&i.push(this.texture.get(s))}return i.length>0?e.defaultFrame=i[0]:e.defaultFrame=this.defaultFrame,this},addEmitter:function(t){return this.emitters.add(t)},createEmitter:function(t){return this.addEmitter(new h(this,t))},addGravityWell:function(t){return this.wells.add(t)},createGravityWell:function(t){return this.addGravityWell(new o(t))},emitParticle:function(t,e,i){for(var n=this.emitters.list,s=0;s<n.length;s++){var r=n[s];r.active&&r.emitParticle(t,e,i)}return this},emitParticleAt:function(t,e,i){return this.emitParticle(i,t,e)},pause:function(){return this.active=!1,this},resume:function(){return this.active=!0,this},getProcessors:function(){return this.wells.getAll("active",!0)},preUpdate:function(t,e){e*=this.timeScale;for(var i=this.emitters.list,n=0;n<i.length;n++){var s=i[n];s.active&&s.preUpdate(t,e)}}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(99),r=new n({Extends:s,initialize:function(t,e,i,n,r){var o=[0,0,0,0,0,0,0,0,0,0,0,0],a=[0,0,0,1,1,1,0,0,1,1,1,0],h=[16777215,16777215,16777215,16777215,16777215,16777215],l=[1,1,1,1,1,1];s.call(this,t,e,i,o,a,h,l,n,r),this.resetPosition()},topLeftX:{get:function(){return this.x+this.vertices[0]},set:function(t){this.vertices[0]=t-this.x,this.vertices[6]=t-this.x}},topLeftY:{get:function(){return this.y+this.vertices[1]},set:function(t){this.vertices[1]=t-this.y,this.vertices[7]=t-this.y}},topRightX:{get:function(){return this.x+this.vertices[10]},set:function(t){this.vertices[10]=t-this.x}},topRightY:{get:function(){return this.y+this.vertices[11]},set:function(t){this.vertices[11]=t-this.y}},bottomLeftX:{get:function(){return this.x+this.vertices[2]},set:function(t){this.vertices[2]=t-this.x}},bottomLeftY:{get:function(){return this.y+this.vertices[3]},set:function(t){this.vertices[3]=t-this.y}},bottomRightX:{get:function(){return this.x+this.vertices[4]},set:function(t){this.vertices[4]=t-this.x,this.vertices[8]=t-this.x}},bottomRightY:{get:function(){return this.y+this.vertices[5]},set:function(t){this.vertices[5]=t-this.y,this.vertices[9]=t-this.y}},topLeftAlpha:{get:function(){return this.alphas[0]},set:function(t){this.alphas[0]=t,this.alphas[3]=t}},topRightAlpha:{get:function(){return this.alphas[5]},set:function(t){this.alphas[5]=t}},bottomLeftAlpha:{get:function(){return this.alphas[1]},set:function(t){this.alphas[1]=t}},bottomRightAlpha:{get:function(){return this.alphas[2]},set:function(t){this.alphas[2]=t,this.alphas[4]=t}},topLeftColor:{get:function(){return this.colors[0]},set:function(t){this.colors[0]=t,this.colors[3]=t}},topRightColor:{get:function(){return this.colors[5]},set:function(t){this.colors[5]=t}},bottomLeftColor:{get:function(){return this.colors[1]},set:function(t){this.colors[1]=t}},bottomRightColor:{get:function(){return this.colors[2]},set:function(t){this.colors[2]=t,this.colors[4]=t}},setTopLeft:function(t,e){return this.topLeftX=t,this.topLeftY=e,this},setTopRight:function(t,e){return this.topRightX=t,this.topRightY=e,this},setBottomLeft:function(t,e){return this.bottomLeftX=t,this.bottomLeftY=e,this},setBottomRight:function(t,e){return this.bottomRightX=t,this.bottomRightY=e,this},resetPosition:function(){var t=this.x,e=this.y,i=Math.floor(this.width/2),n=Math.floor(this.height/2);return this.setTopLeft(t-i,e-n),this.setTopRight(t+i,e-n),this.setBottomLeft(t-i,e+n),this.setBottomRight(t+i,e+n),this},resetAlpha:function(){var t=this.alphas;return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t[4]=1,t[5]=1,this},resetColors:function(){var t=this.colors;return t[0]=16777215,t[1]=16777215,t[2]=16777215,t[3]=16777215,t[4]=16777215,t[5]=16777215,this},reset:function(){return this.resetPosition(),this.resetAlpha(),this.resetColors()}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(0),r=i(15),o=i(23),a=i(2),h=i(621),l=i(617),u=i(622),c=new s({Extends:a,Mixins:[r.Alpha,r.BlendMode,r.ComputedSize,r.Depth,r.Flip,r.GetBounds,r.Mask,r.MatrixStack,r.Origin,r.Pipeline,r.ScaleMode,r.ScrollFactor,r.Tint,r.Transform,r.Visible,h],initialize:function(t,e,i,s,r){if(void 0===s&&(s=32),void 0===r&&(r=32),a.call(this,t,"RenderTexture"),this.initMatrixStack(),this.renderer=t.sys.game.renderer,this.globalTint=16777215,this.globalAlpha=1,this.renderer.type===o.WEBGL){var h=this.renderer.gl;this.gl=h,this.fill=u.fill,this.clear=u.clear,this.draw=u.draw,this.drawFrame=u.drawFrame,this.texture=this.renderer.createTexture2D(0,h.NEAREST,h.NEAREST,h.CLAMP_TO_EDGE,h.CLAMP_TO_EDGE,h.RGBA,null,s,r,!1),this.framebuffer=this.renderer.createFramebuffer(s,r,this.texture,!1)}else this.renderer.type===o.CANVAS&&(this.fill=l.fill,this.clear=l.clear,this.draw=l.draw,this.drawFrame=l.drawFrame,this.canvas=n.create2D(this,s,r),this.context=this.canvas.getContext("2d"));this.setPosition(e,i),this.setSize(s,r),this.initPipeline("TextureTintPipeline")},destroy:function(){a.prototype.destroy.call(this),this.renderer.type===o.WEBGL&&(this.renderer.deleteTexture(this.texture),this.renderer.deleteFramebuffer(this.framebuffer))},setGlobalTint:function(t){return this.globalTint=t,this},setGlobalAlpha:function(t){return this.globalAlpha=t,this}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(131),s=i(26),r=i(0),o=i(15),a=i(23),h=i(2),l=i(631),u=i(5),c=i(248),d=i(637),f=i(633),p=new r({Extends:h,Mixins:[o.Alpha,o.BlendMode,o.ComputedSize,o.Depth,o.Flip,o.GetBounds,o.Mask,o.Origin,o.Pipeline,o.ScaleMode,o.ScrollFactor,o.Tint,o.Transform,o.Visible,d],initialize:function(t,e,i,n,r){void 0===e&&(e=0),void 0===i&&(i=0),h.call(this,t,"Text"),this.setPosition(e,i),this.setOrigin(0,0),this.initPipeline("TextureTintPipeline"),this.canvas=s.create(this),this.context=this.canvas.getContext("2d"),this.style=new f(this,r),this.autoRound=!0,this.splitRegExp=/(?:\r\n|\r|\n)/,this.text="",this.resolution=1,this.padding={left:0,right:0,top:0,bottom:0},this.width=1,this.height=1,this.canvasTexture=null,this.dirty=!1,this.initRTL(),r&&r.padding&&this.setPadding(r.padding),r&&r.lineSpacing&&(this._lineSpacing=r.lineSpacing),this.setText(n),t.sys.game.config.renderType===a.WEBGL&&t.sys.game.renderer.onContextRestored(function(){this.canvasTexture=null,this.dirty=!0},this)},initRTL:function(){this.style.rtl&&(this.canvas.dir="rtl",this.context.direction="rtl",this.canvas.style.display="none",n(this.canvas,this.scene.sys.canvas),this.originX=1)},runWordWrap:function(t){var e=this.style;if(e.wordWrapCallback){var i=e.wordWrapCallback.call(e.wordWrapCallbackScope,t,this);return Array.isArray(i)&&(i=i.join("\n")),i}return e.wordWrapWidth?e.wordWrapUseAdvanced?this.advancedWordWrap(t,this.context,this.style.wordWrapWidth):this.basicWordWrap(t,this.context,this.style.wordWrapWidth):t},advancedWordWrap:function(t,e,i){for(var n="",s=t.replace(/ +/gi," ").split(this.splitRegExp),r=s.length,o=0;o<r;o++){var a=s[o],h="";a=a.replace(/^ *|\s*$/gi,"");if(e.measureText(a).width<i)n+=a+"\n";else{for(var l=i,u=a.split(" "),c=0;c<u.length;c++){var d=u[c],f=d+" ",p=e.measureText(f).width;if(p>l){if(0===c){for(var v=f;v.length&&(v=v.slice(0,-1),!((p=e.measureText(v).width)<=l)););if(!v.length)throw new Error("This text's wordWrapWidth setting is less than a single character!");var g=d.substr(v.length);u[c]=g,h+=v}var y=u[c].length?c:c+1,m=u.slice(y).join(" ").replace(/[ \n]*$/gi,"");s[o+1]=m+" "+(s[o+1]||""),r=s.length;break}h+=f,l-=p}n+=h.replace(/[ \n]*$/gi,"")+"\n"}}return n=n.replace(/[\s|\n]*$/gi,"")},basicWordWrap:function(t,e,i){for(var n="",s=t.split(this.splitRegExp),r=0;r<s.length;r++){for(var o=i,a=s[r].split(" "),h=0;h<a.length;h++){var l=e.measureText(a[h]).width,u=l+e.measureText(" ").width;u>o?(h>0&&(n+="\n"),n+=a[h]+" ",o=i-l):(o-=u,n+=a[h],h<a.length-1&&(n+=" "))}r<s.length-1&&(n+="\n")}return n},getWrappedText:function(t){return void 0===t&&(t=this.text),this.style.syncFont(this.canvas,this.context),this.runWordWrap(t).split(this.splitRegExp)},setText:function(t){return t||0===t||(t=""),Array.isArray(t)&&(t=t.join("\n")),t!==this.text&&(this.text=t.toString(),this.updateText()),this},setStyle:function(t){return this.style.setStyle(t)},setFont:function(t){return this.style.setFont(t)},setFontFamily:function(t){return this.style.setFontFamily(t)},setFontSize:function(t){return this.style.setFontSize(t)},setFontStyle:function(t){return this.style.setFontStyle(t)},setFixedSize:function(t,e){return this.style.setFixedSize(t,e)},setBackgroundColor:function(t){return this.style.setBackgroundColor(t)},setFill:function(t){return this.style.setFill(t)},setColor:function(t){return this.style.setColor(t)},setStroke:function(t,e){return this.style.setStroke(t,e)},setShadow:function(t,e,i,n,s,r){return this.style.setShadow(t,e,i,n,s,r)},setShadowOffset:function(t,e){return this.style.setShadowOffset(t,e)},setShadowColor:function(t){return this.style.setShadowColor(t)},setShadowBlur:function(t){return this.style.setShadowBlur(t)},setShadowStroke:function(t){return this.style.setShadowStroke(t)},setShadowFill:function(t){return this.style.setShadowFill(t)},setWordWrapWidth:function(t,e){return this.style.setWordWrapWidth(t,e)},setWordWrapCallback:function(t,e){return this.style.setWordWrapCallback(t,e)},setAlign:function(t){return this.style.setAlign(t)},setPadding:function(t,e,i,n){if("object"==typeof t){var s=t,r=u(s,"x",null);null!==r?(t=r,i=r):(t=u(s,"left",0),i=u(s,"right",t));var o=u(s,"y",null);null!==o?(e=o,n=o):(e=u(s,"top",0),n=u(s,"bottom",e))}else void 0===t&&(t=0),void 0===e&&(e=t),void 0===i&&(i=t),void 0===n&&(n=e);return this.padding.left=t,this.padding.top=e,this.padding.right=i,this.padding.bottom=n,this.updateText()},setMaxLines:function(t){return this.style.setMaxLines(t)},updateText:function(){var t=this.canvas,e=this.context,i=this.style,n=this.resolution,s=i.metrics;i.syncFont(t,e);var r=this.text;(i.wordWrapWidth||i.wordWrapCallback)&&(r=this.runWordWrap(this.text));var o=r.split(this.splitRegExp),a=l(this,s,o),h=this.padding,u=a.width+h.left+h.right,c=a.height+h.top+h.bottom;0===i.fixedWidth&&(this.width=u),0===i.fixedHeight&&(this.height=c),this.updateDisplayOrigin(),u*=n,c*=n,u=Math.max(u,1),c=Math.max(c,1),t.width!==u||t.height!==c?(t.width=u,t.height=c,i.syncFont(t,e)):e.clearRect(0,0,u,c),e.save(),i.backgroundColor&&(e.fillStyle=i.backgroundColor,e.fillRect(0,0,u,c)),i.syncStyle(t,e),e.textBaseline="alphabetic",e.translate(h.left,h.top);for(var d,f,p=0;p<a.lines;p++)d=i.strokeThickness/2,f=i.strokeThickness/2+p*a.lineHeight+s.ascent,p>0&&(f+=a.lineSpacing*p),i.rtl?d=u-d:"right"===i.align?d+=a.width-a.lineWidths[p]:"center"===i.align&&(d+=(a.width-a.lineWidths[p])/2),this.autoRound&&(d=Math.round(d),f=Math.round(f)),i.strokeThickness&&(this.style.syncShadow(e,i.shadowStroke),e.strokeText(o[p],d,f)),i.color&&(this.style.syncShadow(e,i.shadowFill),e.fillText(o[p],d,f));return e.restore(),this.dirty=!0,this},getTextMetrics:function(){return this.style.getTextMetrics()},toJSON:function(){var t=o.ToJSON(this),e={autoRound:this.autoRound,text:this.text,style:this.style.toJSON(),resolution:this.resolution,padding:{left:this.padding.left,right:this.padding.right,top:this.padding.top,bottom:this.padding.bottom}};return t.data=e,t},preDestroy:function(){this.style.rtl&&c(this.canvas),s.remove(this.canvas)}});t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(0),r=i(15),o=i(23),a=i(2),h=i(340),l=i(642),u=new s({Extends:a,Mixins:[r.Alpha,r.BlendMode,r.Depth,r.Flip,r.GetBounds,r.Mask,r.Origin,r.Pipeline,r.ScaleMode,r.ScrollFactor,r.Size,r.Texture,r.Tint,r.Transform,r.Visible,l],initialize:function(t,e,i,s,r,l,u){var c=t.sys.game.renderer;a.call(this,t,"TileSprite"),this.tilePositionX=0,this.tilePositionY=0,this.dirty=!0,this.tileTexture=null,this.renderer=c,this.setTexture(l,u),this.setPosition(e,i),this.setSize(s,r),this.setOriginFromFrame(),this.initPipeline("TextureTintPipeline"),this.potWidth=h(this.frame.width),this.potHeight=h(this.frame.height),this.canvasPattern=null,this.canvasBuffer=n.create2D(this,this.potWidth,this.potHeight),this.canvasBufferCtx=this.canvasBuffer.getContext("2d"),this.oldFrame=null,this.updateTileTexture(),t.sys.game.config.renderType===o.WEBGL&&t.sys.game.renderer.onContextRestored(function(t){var e=t.gl;this.tileTexture=null,this.dirty=!0,this.tileTexture=t.createTexture2D(0,e.LINEAR,e.LINEAR,e.REPEAT,e.REPEAT,e.RGBA,this.canvasBuffer,this.potWidth,this.potHeight)},this)},setTilePosition:function(t,e){return void 0!==t&&(this.tilePositionX=t),void 0!==e&&(this.tilePositionY=e),this},updateTileTexture:function(){(this.dirty||this.oldFrame!==this.frame)&&(this.oldFrame=this.frame,this.canvasBufferCtx.clearRect(0,0,this.canvasBuffer.width,this.canvasBuffer.height),this.renderer.gl?(this.canvasBufferCtx.drawImage(this.frame.source.image,this.frame.cutX,this.frame.cutY,this.frame.cutWidth,this.frame.cutHeight,0,0,this.potWidth,this.potHeight),this.tileTexture=this.renderer.canvasToTexture(this.canvasBuffer,this.tileTexture)):(this.canvasBuffer.width=this.frame.cutWidth,this.canvasBuffer.height=this.frame.cutHeight,this.canvasBufferCtx.drawImage(this.frame.source.image,this.frame.cutX,this.frame.cutY,this.frame.cutWidth,this.frame.cutHeight,0,0,this.frame.cutWidth,this.frame.cutHeight),this.canvasPattern=this.canvasBufferCtx.createPattern(this.canvasBuffer,"repeat")),this.dirty=!1)},destroy:function(){this.renderer.gl&&this.renderer.deleteTexture(this.tileTexture),n.remove(this.canvasBuffer),this.canvasPattern=null,this.canvasBufferCtx=null,this.canvasBuffer=null,this.renderer=null,this.visible=!1}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i){return void 0===i&&(i=new n),i.x=t.x+t.radius*Math.cos(e),i.y=t.y+t.radius*Math.sin(e),i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){void 0===e&&(e=new n);var i=2*Math.PI*Math.random(),s=Math.random()+Math.random(),r=s>1?2-s:s,o=r*Math.cos(i),a=r*Math.sin(i);return e.x=t.x+o*t.radius,e.y=t.y+a*t.radius,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i){void 0===i&&(i=new n);var s=t.width/2,r=t.height/2;return i.x=t.x+s*Math.cos(e),i.y=t.y+r*Math.sin(e),i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(82),r=i(267),o=i(268),a=i(149),h=new n({initialize:function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n},contains:function(t,e){return s(this,t,e)},getPoint:function(t,e){return r(this,t,e)},getPoints:function(t,e,i){return o(this,t,e,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,e){return void 0===e&&(e=t),this.x=t,this.y=e,this},setSize:function(t,e){return void 0===e&&(e=t),this.width=t,this.height=e,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){void 0===e&&(e=new n);var i=Math.random()*Math.PI*2,s=Math.sqrt(Math.random());return e.x=t.x+s*Math.cos(i)*t.width/2,e.y=t.y+s*Math.sin(i)*t.height/2,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(83),s=i(6),r=function(t,e,i,r){void 0===r&&(r=[]),e||(e=n(t)/i);for(var o=t.x1,a=t.y1,h=t.x2,l=t.y2,u=0;u<e;u++){var c=u/e,d=o+(h-o)*c,f=a+(l-a)*c;r.push(new s(d,f))}return r};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){void 0===e&&(e=new n);var i=Math.random();return e.x=t.x1+i*(t.x2-t.x1),e.y=t.y1+i*(t.y2-t.y1),e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=Math.cos(n),r=Math.sin(n),o=t.x1-e,a=t.y1-i;return t.x1=o*s-a*r+e,t.y1=o*r+a*s+i,o=t.x2-e,a=t.y2-i,t.x2=o*s-a*r+e,t.y2=o*r+a*s+i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=!1,s=-1,r=t.points.length-1;++s<t.points.length;r=s){var o=t.points[s].x,a=t.points[s].y,h=t.points[r].x,l=t.points[r].y;(a<=i&&i<l||l<=i&&i<a)&&e<(h-o)*(i-a)/(l-a)+o&&(n=!n)}return n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t,e){if(void 0===e&&(e=new n),0===t.length)return e;for(var i,s,r,o=Number.MAX_VALUE,a=Number.MAX_VALUE,h=Number.MIN_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER,u=0;u<t.length;u++)i=t[u],Array.isArray(i)?(s=i[0],r=i[1]):(s=i.x,r=i.y),o=Math.min(o,s),a=Math.min(a,r),h=Math.max(h,s),l=Math.max(l,r);return e.x=o,e.y=a,e.width=h-o,e.height=l-a,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t.height?NaN:t.width/t.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(104),s=i(6),r=function(t,e,i){if(void 0===i&&(i=new s),e<=0||e>=1)return i.x=t.x,i.y=t.y,i;var r=n(t)*e;return e>.5?(r-=t.width+t.height,r<=t.width?(i.x=t.right-r,i.y=t.bottom):(i.x=t.x,i.y=t.bottom-(r-t.width))):r<=t.width?(i.x=t.x+r,i.y=t.y):(i.x=t.right,i.y=t.y+(r-t.width)),i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){return void 0===e&&(e=new n),e.x=t.x+Math.random()*t.width,e.y=t.y+Math.random()*t.height,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=!1),void 0===n&&(n=[]);for(var s,r,o,a,h,l,u=t.x3-t.x1,c=t.y3-t.y1,d=t.x2-t.x1,f=t.y2-t.y1,p=u*u+c*c,v=u*d+c*f,g=d*d+f*f,y=p*g-v*v,m=0===y?0:1/y,x=t.x1,w=t.y1,b=0;b<e.length&&(o=e[b].x-x,a=e[b].y-w,h=u*o+c*a,l=d*o+f*a,s=(g*h-v*l)*m,r=(p*l-v*h)*m,!(s>=0&&r>=0&&s+r<1&&(n.push({x:e[b].x,y:e[b].y}),i)));b++);return n};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){void 0===e&&(e=new n);var i=t.x2-t.x1,s=t.y2-t.y1,r=t.x3-t.x1,o=t.y3-t.y1,a=Math.random(),h=Math.random();return a+h>=1&&(a=1-a,h=1-h),e.x=t.x1+(i*a+r*h),e.y=t.y1+(s*a+o*h),e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=Math.cos(n),r=Math.sin(n),o=t.x1-e,a=t.y1-i;return t.x1=o*s-a*r+e,t.y1=o*r+a*s+i,o=t.x2-e,a=t.y2-i,t.x2=o*s-a*r+e,t.y2=o*r+a*s+i,o=t.x3-e,a=t.y3-i,t.x3=o*s-a*r+e,t.y3=o*r+a*s+i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:42,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,PLUS:187,COMMA:188,MINUS:189,PERIOD:190,FORWARD_SLASH:191,BACK_SLASH:220,QUOTES:222,BACKTICK:192,OPEN_BRACKET:219,CLOSED_BRACKET:221};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!!t.url&&(t.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)?t.url:e+t.url)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(19),s=i(105),r=function(t,e){var i=void 0===t?s():n({},t);if(e)for(var r in e)void 0!==e[r]&&(i[r]=e[r]);return i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=i(247),u=new n({Extends:r,initialize:function(t,e,i,n){var s="xml";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}var l={type:"xml",cache:t.cacheManager.xml,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,t,l)},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=l(this.xhrLoader.responseText),this.data?this.onProcessComplete():(console.warn("Invalid XMLFile: "+this.key),this.onProcessError())}});o.register("xml",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new u(this,t[n]));else this.addFile(new u(this,t,e,i));return this}),t.exports=u},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){var r=.5*(n-e),o=.5*(s-i),a=t*t;return(2*i-2*n+r+o)*(t*a)+(-3*i+3*n-2*r-o)*a+r*t+i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return(e-t)*i+t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.val=new Float32Array(16),t?this.copy(t):this.identity()},clone:function(){return new s(this)},set:function(t){return this.copy(t)},copy:function(t){var e=this.val,i=t.val;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this},fromArray:function(t){var e=this.val;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this},zero:function(){var t=this.val;return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=0,this},xyz:function(t,e,i){this.identity();var n=this.val;return n[12]=t,n[13]=e,n[14]=i,this},scaling:function(t,e,i){this.zero();var n=this.val;return n[0]=t,n[5]=e,n[10]=i,n[15]=1,this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},transpose:function(){var t=this.val,e=t[1],i=t[2],n=t[3],s=t[6],r=t[7],o=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=e,t[6]=t[9],t[7]=t[13],t[8]=i,t[9]=s,t[11]=t[14],t[12]=n,t[13]=r,t[14]=o,this},invert:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=t[9],c=t[10],d=t[11],f=t[12],p=t[13],v=t[14],g=t[15],y=e*o-i*r,m=e*a-n*r,x=e*h-s*r,w=i*a-n*o,b=i*h-s*o,T=n*h-s*a,S=l*p-u*f,A=l*v-c*f,C=l*g-d*f,M=u*v-c*p,_=u*g-d*p,E=c*g-d*v,P=y*E-m*_+x*M+w*C-b*A+T*S;return P?(P=1/P,t[0]=(o*E-a*_+h*M)*P,t[1]=(n*_-i*E-s*M)*P,t[2]=(p*T-v*b+g*w)*P,t[3]=(c*b-u*T-d*w)*P,t[4]=(a*C-r*E-h*A)*P,t[5]=(e*E-n*C+s*A)*P,t[6]=(v*x-f*T-g*m)*P,t[7]=(l*T-c*x+d*m)*P,t[8]=(r*_-o*C+h*S)*P,t[9]=(i*C-e*_-s*S)*P,t[10]=(f*b-p*x+g*y)*P,t[11]=(u*x-l*b-d*y)*P,t[12]=(o*A-r*M-a*S)*P,t[13]=(e*M-i*A+n*S)*P,t[14]=(p*m-f*w-v*y)*P,t[15]=(l*w-u*m+c*y)*P,this):null},adjoint:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=t[9],c=t[10],d=t[11],f=t[12],p=t[13],v=t[14],g=t[15];return t[0]=o*(c*g-d*v)-u*(a*g-h*v)+p*(a*d-h*c),t[1]=-(i*(c*g-d*v)-u*(n*g-s*v)+p*(n*d-s*c)),t[2]=i*(a*g-h*v)-o*(n*g-s*v)+p*(n*h-s*a),t[3]=-(i*(a*d-h*c)-o*(n*d-s*c)+u*(n*h-s*a)),t[4]=-(r*(c*g-d*v)-l*(a*g-h*v)+f*(a*d-h*c)),t[5]=e*(c*g-d*v)-l*(n*g-s*v)+f*(n*d-s*c),t[6]=-(e*(a*g-h*v)-r*(n*g-s*v)+f*(n*h-s*a)),t[7]=e*(a*d-h*c)-r*(n*d-s*c)+l*(n*h-s*a),t[8]=r*(u*g-d*p)-l*(o*g-h*p)+f*(o*d-h*u),t[9]=-(e*(u*g-d*p)-l*(i*g-s*p)+f*(i*d-s*u)),t[10]=e*(o*g-h*p)-r*(i*g-s*p)+f*(i*h-s*o),t[11]=-(e*(o*d-h*u)-r*(i*d-s*u)+l*(i*h-s*o)),t[12]=-(r*(u*v-c*p)-l*(o*v-a*p)+f*(o*c-a*u)),t[13]=e*(u*v-c*p)-l*(i*v-n*p)+f*(i*c-n*u),t[14]=-(e*(o*v-a*p)-r*(i*v-n*p)+f*(i*a-n*o)),t[15]=e*(o*c-a*u)-r*(i*c-n*u)+l*(i*a-n*o),this},determinant:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=t[9],c=t[10],d=t[11],f=t[12],p=t[13],v=t[14],g=t[15];return(e*o-i*r)*(c*g-d*v)-(e*a-n*r)*(u*g-d*p)+(e*h-s*r)*(u*v-c*p)+(i*a-n*o)*(l*g-d*f)-(i*h-s*o)*(l*v-c*f)+(n*h-s*a)*(l*p-u*f)},multiply:function(t){var e=this.val,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],c=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],y=e[15],m=t.val,x=m[0],w=m[1],b=m[2],T=m[3];return e[0]=x*i+w*o+b*u+T*p,e[1]=x*n+w*a+b*c+T*v,e[2]=x*s+w*h+b*d+T*g,e[3]=x*r+w*l+b*f+T*y,x=m[4],w=m[5],b=m[6],T=m[7],e[4]=x*i+w*o+b*u+T*p,e[5]=x*n+w*a+b*c+T*v,e[6]=x*s+w*h+b*d+T*g,e[7]=x*r+w*l+b*f+T*y,x=m[8],w=m[9],b=m[10],T=m[11],e[8]=x*i+w*o+b*u+T*p,e[9]=x*n+w*a+b*c+T*v,e[10]=x*s+w*h+b*d+T*g,e[11]=x*r+w*l+b*f+T*y,x=m[12],w=m[13],b=m[14],T=m[15],e[12]=x*i+w*o+b*u+T*p,e[13]=x*n+w*a+b*c+T*v,e[14]=x*s+w*h+b*d+T*g,e[15]=x*r+w*l+b*f+T*y,this},multiplyLocal:function(t){var e=[],i=this.val,n=t.val;return e[0]=i[0]*n[0]+i[1]*n[4]+i[2]*n[8]+i[3]*n[12],e[1]=i[0]*n[1]+i[1]*n[5]+i[2]*n[9]+i[3]*n[13],e[2]=i[0]*n[2]+i[1]*n[6]+i[2]*n[10]+i[3]*n[14],e[3]=i[0]*n[3]+i[1]*n[7]+i[2]*n[11]+i[3]*n[15],e[4]=i[4]*n[0]+i[5]*n[4]+i[6]*n[8]+i[7]*n[12],e[5]=i[4]*n[1]+i[5]*n[5]+i[6]*n[9]+i[7]*n[13],e[6]=i[4]*n[2]+i[5]*n[6]+i[6]*n[10]+i[7]*n[14],e[7]=i[4]*n[3]+i[5]*n[7]+i[6]*n[11]+i[7]*n[15],e[8]=i[8]*n[0]+i[9]*n[4]+i[10]*n[8]+i[11]*n[12],e[9]=i[8]*n[1]+i[9]*n[5]+i[10]*n[9]+i[11]*n[13],e[10]=i[8]*n[2]+i[9]*n[6]+i[10]*n[10]+i[11]*n[14],e[11]=i[8]*n[3]+i[9]*n[7]+i[10]*n[11]+i[11]*n[15],e[12]=i[12]*n[0]+i[13]*n[4]+i[14]*n[8]+i[15]*n[12],e[13]=i[12]*n[1]+i[13]*n[5]+i[14]*n[9]+i[15]*n[13],e[14]=i[12]*n[2]+i[13]*n[6]+i[14]*n[10]+i[15]*n[14],e[15]=i[12]*n[3]+i[13]*n[7]+i[14]*n[11]+i[15]*n[15],this.fromArray(e)},translate:function(t){var e=t.x,i=t.y,n=t.z,s=this.val;return s[12]=s[0]*e+s[4]*i+s[8]*n+s[12],s[13]=s[1]*e+s[5]*i+s[9]*n+s[13],s[14]=s[2]*e+s[6]*i+s[10]*n+s[14],s[15]=s[3]*e+s[7]*i+s[11]*n+s[15],this},scale:function(t){var e=t.x,i=t.y,n=t.z,s=this.val;return s[0]=s[0]*e,s[1]=s[1]*e,s[2]=s[2]*e,s[3]=s[3]*e,s[4]=s[4]*i,s[5]=s[5]*i,s[6]=s[6]*i,s[7]=s[7]*i,s[8]=s[8]*n,s[9]=s[9]*n,s[10]=s[10]*n,s[11]=s[11]*n,this},makeRotationAxis:function(t,e){var i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,a=t.z,h=s*r,l=s*o;return this.set(h*r+i,h*o-n*a,h*a+n*o,0,h*o+n*a,l*o+i,l*a-n*r,0,h*a-n*o,l*a+n*r,s*a*a+i,0,0,0,0,1),this},rotate:function(t,e){var i=this.val,n=e.x,s=e.y,r=e.z,o=Math.sqrt(n*n+s*s+r*r);if(Math.abs(o)<1e-6)return null;o=1/o,n*=o,s*=o,r*=o;var a=Math.sin(t),h=Math.cos(t),l=1-h,u=i[0],c=i[1],d=i[2],f=i[3],p=i[4],v=i[5],g=i[6],y=i[7],m=i[8],x=i[9],w=i[10],b=i[11],T=n*n*l+h,S=s*n*l+r*a,A=r*n*l-s*a,C=n*s*l-r*a,M=s*s*l+h,_=r*s*l+n*a,E=n*r*l+s*a,P=s*r*l-n*a,L=r*r*l+h;return i[0]=u*T+p*S+m*A,i[1]=c*T+v*S+x*A,i[2]=d*T+g*S+w*A,i[3]=f*T+y*S+b*A,i[4]=u*C+p*M+m*_,i[5]=c*C+v*M+x*_,i[6]=d*C+g*M+w*_,i[7]=f*C+y*M+b*_,i[8]=u*E+p*P+m*L,i[9]=c*E+v*P+x*L,i[10]=d*E+g*P+w*L,i[11]=f*E+y*P+b*L,this},rotateX:function(t){var e=this.val,i=Math.sin(t),n=Math.cos(t),s=e[4],r=e[5],o=e[6],a=e[7],h=e[8],l=e[9],u=e[10],c=e[11];return e[4]=s*n+h*i,e[5]=r*n+l*i,e[6]=o*n+u*i,e[7]=a*n+c*i,e[8]=h*n-s*i,e[9]=l*n-r*i,e[10]=u*n-o*i,e[11]=c*n-a*i,this},rotateY:function(t){var e=this.val,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[8],l=e[9],u=e[10],c=e[11];return e[0]=s*n-h*i,e[1]=r*n-l*i,e[2]=o*n-u*i,e[3]=a*n-c*i,e[8]=s*i+h*n,e[9]=r*i+l*n,e[10]=o*i+u*n,e[11]=a*i+c*n,this},rotateZ:function(t){var e=this.val,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[4],l=e[5],u=e[6],c=e[7];return e[0]=s*n+h*i,e[1]=r*n+l*i,e[2]=o*n+u*i,e[3]=a*n+c*i,e[4]=h*n-s*i,e[5]=l*n-r*i,e[6]=u*n-o*i,e[7]=c*n-a*i,this},fromRotationTranslation:function(t,e){var i=this.val,n=t.x,s=t.y,r=t.z,o=t.w,a=n+n,h=s+s,l=r+r,u=n*a,c=n*h,d=n*l,f=s*h,p=s*l,v=r*l,g=o*a,y=o*h,m=o*l;return i[0]=1-(f+v),i[1]=c+m,i[2]=d-y,i[3]=0,i[4]=c-m,i[5]=1-(u+v),i[6]=p+g,i[7]=0,i[8]=d+y,i[9]=p-g,i[10]=1-(u+f),i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},fromQuat:function(t){var e=this.val,i=t.x,n=t.y,s=t.z,r=t.w,o=i+i,a=n+n,h=s+s,l=i*o,u=i*a,c=i*h,d=n*a,f=n*h,p=s*h,v=r*o,g=r*a,y=r*h;return e[0]=1-(d+p),e[1]=u+y,e[2]=c-g,e[3]=0,e[4]=u-y,e[5]=1-(l+p),e[6]=f+v,e[7]=0,e[8]=c+g,e[9]=f-v,e[10]=1-(l+d),e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},frustum:function(t,e,i,n,s,r){var o=this.val,a=1/(e-t),h=1/(n-i),l=1/(s-r);return o[0]=2*s*a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*s*h,o[6]=0,o[7]=0,o[8]=(e+t)*a,o[9]=(n+i)*h,o[10]=(r+s)*l,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*s*2*l,o[15]=0,this},perspective:function(t,e,i,n){var s=this.val,r=1/Math.tan(t/2),o=1/(i-n);return s[0]=r/e,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(n+i)*o,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*n*i*o,s[15]=0,this},perspectiveLH:function(t,e,i,n){var s=this.val;return s[0]=2*i/t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*i/e,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-n/(i-n),s[11]=1,s[12]=0,s[13]=0,s[14]=i*n/(i-n),s[15]=0,this},ortho:function(t,e,i,n,s,r){var o=this.val,a=t-e,h=i-n,l=s-r;return a=0===a?a:1/a,h=0===h?h:1/h,l=0===l?l:1/l,o[0]=-2*a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2*l,o[11]=0,o[12]=(t+e)*a,o[13]=(n+i)*h,o[14]=(r+s)*l,o[15]=1,this},lookAt:function(t,e,i){var n=this.val,s=t.x,r=t.y,o=t.z,a=i.x,h=i.y,l=i.z,u=e.x,c=e.y,d=e.z;if(Math.abs(s-u)<1e-6&&Math.abs(r-c)<1e-6&&Math.abs(o-d)<1e-6)return this.identity();var f=s-u,p=r-c,v=o-d,g=1/Math.sqrt(f*f+p*p+v*v);f*=g,p*=g,v*=g;var y=h*v-l*p,m=l*f-a*v,x=a*p-h*f;g=Math.sqrt(y*y+m*m+x*x),g?(g=1/g,y*=g,m*=g,x*=g):(y=0,m=0,x=0);var w=p*x-v*m,b=v*y-f*x,T=f*m-p*y;return g=Math.sqrt(w*w+b*b+T*T),g?(g=1/g,w*=g,b*=g,T*=g):(w=0,b=0,T=0),n[0]=y,n[1]=w,n[2]=f,n[3]=0,n[4]=m,n[5]=b,n[6]=p,n[7]=0,n[8]=x,n[9]=T,n[10]=v,n[11]=0,n[12]=-(y*s+m*r+x*o),n[13]=-(w*s+b*r+T*o),n[14]=-(f*s+p*r+v*o),n[15]=1,this},yawPitchRoll:function(t,e,i){this.zero(),r.zero(),o.zero();var n=this.val,s=r.val,a=o.val,h=Math.sin(i),l=Math.cos(i);return n[10]=1,n[15]=1,n[0]=l,n[1]=h,n[4]=-h,n[5]=l,h=Math.sin(e),l=Math.cos(e),s[0]=1,s[15]=1,s[5]=l,s[10]=l,s[9]=-h,s[6]=h,h=Math.sin(t),l=Math.cos(t),a[5]=1,a[15]=1,a[0]=l,a[2]=-h,a[8]=h,a[10]=l,this.multiplyLocal(r),this.multiplyLocal(o),this},setWorldMatrix:function(t,e,i,n,s){return this.yawPitchRoll(t.y,t.x,t.z),r.scaling(i.x,i.y,i.z),o.xyz(e.x,e.y,e.z),this.multiplyLocal(r),this.multiplyLocal(o),void 0!==n&&this.multiplyLocal(n),void 0!==s&&this.multiplyLocal(s),this}}),r=new s,o=new s;t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t){return t*n.RAD_TO_DEG};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){var r=n+Math.atan2(t.y-i,t.x-e);return t.x=e+s*Math.cos(r),t.y=i+s*Math.sin(r),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0)},clone:function(){return new s(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,e,i,n){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return Math.sqrt(t*t+e*e+i*i+n*n)},lengthSq:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return t*t+e*e+i*i+n*n},normalize:function(){var t=this.x,e=this.y,i=this.z,n=this.w,s=t*t+e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s),this.x=t*s,this.y=e*s,this.z=i*s,this.w=n*s),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y,s=this.z,r=this.w;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this.z=s+e*(t.z-s),this.w=r+e*(t.w-r),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0,s=t.w-this.w||0;return Math.sqrt(e*e+i*i+n*n+s*s)},distanceSq:function(t){var e=t.x-this.x,i=t.y-this.y,n=t.z-this.z||0,s=t.w-this.w||0;return e*e+i*i+n*n+s*s},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var e=this.x,i=this.y,n=this.z,s=this.w,r=t.val;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this},transformQuat:function(t){var e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,a=t.w,h=a*e+r*n-o*i,l=a*i+o*e-s*n,u=a*n+s*i-r*e,c=-s*e-r*i-o*n;return this.x=h*a+c*-s+l*-o-u*-r,this.y=l*a+c*-r+u*-s-h*-o,this.z=u*a+c*-o+h*-r-l*-s,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});s.prototype.sub=s.prototype.subtract,s.prototype.mul=s.prototype.multiply,s.prototype.div=s.prototype.divide,s.prototype.dist=s.prototype.distance,s.prototype.distSq=s.prototype.distanceSq,s.prototype.len=s.prototype.length,s.prototype.lenSq=s.prototype.lengthSq,t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=function(t){return n(t,-Math.PI,Math.PI)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=function(t){return n(t,-180,180)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Acceleration:i(896),BodyScale:i(897),BodyType:i(898),Bounce:i(899),CheckAgainst:i(900),Collides:i(901),Debug:i(902),Friction:i(903),Gravity:i(904),Offset:i(905),SetGameObject:i(906),Velocity:i(907)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(369);n.Body=i(25),n.Composite=i(56),n.World=i(176),n.Detector=i(177),n.Grid=i(365),n.Pairs=i(366),n.Pair=i(109),n.Query=i(926),n.Resolver=i(367),n.SAT=i(178),n.Constraint=i(72),n.Common=i(16),n.Engine=i(368),n.Events=i(73),n.Sleeping=i(87),n.Plugin=i(179),n.Bodies=i(57),n.Composites=i(370),n.Axes=i(180),n.Bounds=i(42),n.Svg=i(928),n.Vector=i(30),n.Vertices=i(43),n.World.add=n.Composite.add,n.World.remove=n.Composite.remove,n.World.addComposite=n.Composite.addComposite,n.World.addBody=n.Composite.addBody,n.World.addConstraint=n.Composite.addConstraint,n.World.clear=n.Composite.clear,t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(57),s=i(25),r=i(0),o=i(108),a=i(1),h=i(76),l=i(43),u=new r({Mixins:[o.Bounce,o.Collision,o.Friction,o.Gravity,o.Mass,o.Sensor,o.Sleep,o.Static],initialize:function(t,e,i){this.tile=e,this.world=t,e.physics.matterBody&&e.physics.matterBody.destroy(),e.physics.matterBody=this;var n=a(i,"body",null),s=a(i,"addToWorld",!0);if(n)this.setBody(n,s);else{var r=e.getCollisionGroup();a(r,"objects",[]).length>0?this.setFromTileCollision(i):this.setFromTileRectangle(i)}},setFromTileRectangle:function(t){void 0===t&&(t={}),h(t,"isStatic")||(t.isStatic=!0),h(t,"addToWorld")||(t.addToWorld=!0);var e=this.tile.getBounds(),i=e.x+e.width/2,s=e.y+e.height/2,r=n.rectangle(i,s,e.width,e.height,t);return this.setBody(r,t.addToWorld),this},setFromTileCollision:function(t){void 0===t&&(t={}),h(t,"isStatic")||(t.isStatic=!0),h(t,"addToWorld")||(t.addToWorld=!0);for(var e=this.tile.tilemapLayer.scaleX,i=this.tile.tilemapLayer.scaleY,r=this.tile.getLeft(),o=this.tile.getTop(),u=this.tile.getCollisionGroup(),c=a(u,"objects",[]),d=[],f=0;f<c.length;f++){var p=c[f],v=r+p.x*e,g=o+p.y*i,y=p.width*e,m=p.height*i,x=null;if(p.rectangle)x=n.rectangle(v+y/2,g+m/2,y,m,t);else if(p.ellipse)x=n.circle(v+y/2,g+m/2,y/2,t);else if(p.polygon||p.polyline){var w=p.polygon?p.polygon:p.polyline,b=w.map(function(t){return{x:t.x*e,y:t.y*i}}),T=l.create(b);if(l.isConvex(b)){var S=l.centre(T);v+=S.x,g+=S.y}x=n.fromVertices(v,g,T,t)}x&&d.push(x)}return 1===d.length?this.setBody(d[0],t.addToWorld):d.length>1&&(t.parts=d,this.setBody(s.create(t),t.addToWorld)),this},setBody:function(t,e){return void 0===e&&(e=!0),this.body&&this.removeBody(),this.body=t,this.body.gameObject=this,e&&this.world.add(this.body),this},removeBody:function(){return this.body&&(this.world.remove(this.body),this.body.gameObject=void 0,this.body=void 0),this},destroy:function(){this.removeBody(),this.tile.physics.matterBody=void 0}});t.exports=u},function(t,e,i){var n={};t.exports=n;var s=i(56),r=(i(72),i(16));!function(){n.create=function(t){var e=s.create(),i={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-1/0,y:-1/0},max:{x:1/0,y:1/0}}};return r.extend(e,i,t)}}()},function(t,e,i){var n={};t.exports=n;var s=i(178),r=i(109),o=i(42);!function(){n.collisions=function(t,e){for(var i=[],a=e.pairs.table,h=e.metrics,l=0;l<t.length;l++){var u=t[l][0],c=t[l][1];if((!u.isStatic&&!u.isSleeping||!c.isStatic&&!c.isSleeping)&&(n.canCollide(u.collisionFilter,c.collisionFilter)&&(h.midphaseTests+=1,o.overlaps(u.bounds,c.bounds))))for(var d=u.parts.length>1?1:0;d<u.parts.length;d++)for(var f=u.parts[d],p=c.parts.length>1?1:0;p<c.parts.length;p++){var v=c.parts[p];if(f===u&&v===c||o.overlaps(f.bounds,v.bounds)){var g,y=r.id(f,v),m=a[y];g=m&&m.isActive?m.collision:null;var x=s.collides(f,v,g);h.narrowphaseTests+=1,x.reused&&(h.narrowReuseCount+=1),x.collided&&(i.push(x),h.narrowDetections+=1)}}}return i},n.canCollide=function(t,e){return t.group===e.group&&0!==t.group?t.group>0:0!=(t.mask&e.category)&&0!=(e.mask&t.category)}}()},function(t,e,i){var n={};t.exports=n;var s=i(43),r=i(30);!function(){n.collides=function(e,n,o){var a,h,l,u,c=!1;if(o){var d=e.parent,f=n.parent,p=d.speed*d.speed+d.angularSpeed*d.angularSpeed+f.speed*f.speed+f.angularSpeed*f.angularSpeed;c=o&&o.collided&&p<.2,u=o}else u={collided:!1,bodyA:e,bodyB:n};if(o&&c){var v=u.axisBody,g=v===e?n:e,y=[v.axes[o.axisNumber]];if(l=t(v.vertices,g.vertices,y),u.reused=!0,l.overlap<=0)return u.collided=!1,u}else{if(a=t(e.vertices,n.vertices,e.axes),a.overlap<=0)return u.collided=!1,u;if(h=t(n.vertices,e.vertices,n.axes),h.overlap<=0)return u.collided=!1,u;a.overlap<h.overlap?(l=a,u.axisBody=e):(l=h,u.axisBody=n),u.axisNumber=l.axisNumber}u.bodyA=e.id<n.id?e:n,u.bodyB=e.id<n.id?n:e,u.collided=!0,u.depth=l.overlap,u.parentA=u.bodyA.parent,u.parentB=u.bodyB.parent,e=u.bodyA,n=u.bodyB,r.dot(l.axis,r.sub(n.position,e.position))<0?u.normal={x:l.axis.x,y:l.axis.y}:u.normal={x:-l.axis.x,y:-l.axis.y},u.tangent=r.perp(u.normal),u.penetration=u.penetration||{},u.penetration.x=u.normal.x*u.depth,u.penetration.y=u.normal.y*u.depth;var m=i(e,n,u.normal),x=[];if(s.contains(e.vertices,m[0])&&x.push(m[0]),s.contains(e.vertices,m[1])&&x.push(m[1]),x.length<2){var w=i(n,e,r.neg(u.normal));s.contains(n.vertices,w[0])&&x.push(w[0]),x.length<2&&s.contains(n.vertices,w[1])&&x.push(w[1])}return x.length<1&&(x=[m[0]]),u.supports=x,u};var t=function(t,i,n){for(var s,o,a=r._temp[0],h=r._temp[1],l={overlap:Number.MAX_VALUE},u=0;u<n.length;u++){if(o=n[u],e(a,t,o),e(h,i,o),(s=Math.min(a.max-h.min,h.max-a.min))<=0)return l.overlap=s,l;s<l.overlap&&(l.overlap=s,l.axis=o,l.axisNumber=u)}return l},e=function(t,e,i){for(var n=r.dot(e[0],i),s=n,o=1;o<e.length;o+=1){var a=r.dot(e[o],i);a>s?s=a:a<n&&(n=a)}t.min=n,t.max=s},i=function(t,e,i){for(var n,s,o,a,h=Number.MAX_VALUE,l=r._temp[0],u=e.vertices,c=t.position,d=0;d<u.length;d++)s=u[d],l.x=s.x-c.x,l.y=s.y-c.y,(n=-r.dot(i,l))<h&&(h=n,o=s);return s=u[o.index-1>=0?o.index-1:u.length-1],l.x=s.x-c.x,l.y=s.y-c.y,h=-r.dot(i,l),a=s,s=u[(o.index+1)%u.length],l.x=s.x-c.x,l.y=s.y-c.y,n=-r.dot(i,l),n<h&&(a=s),[o,a]}}()},function(t,e,i){var n={};t.exports=n;var s=i(16);!function(){n._registry={},n.register=function(t){if(n.isPlugin(t)||s.warn("Plugin.register:",n.toString(t),"does not implement all required fields."),t.name in n._registry){var e=n._registry[t.name],i=n.versionParse(t.version).number,r=n.versionParse(e.version).number;i>r?(s.warn("Plugin.register:",n.toString(e),"was upgraded to",n.toString(t)),n._registry[t.name]=t):i<r?s.warn("Plugin.register:",n.toString(e),"can not be downgraded to",n.toString(t)):t!==e&&s.warn("Plugin.register:",n.toString(t),"is already registered to different plugin object")}else n._registry[t.name]=t;return t},n.resolve=function(t){return n._registry[n.dependencyParse(t).name]},n.toString=function(t){return"string"==typeof t?t:(t.name||"anonymous")+"@"+(t.version||t.range||"0.0.0")},n.isPlugin=function(t){return t&&t.name&&t.version&&t.install},n.isUsed=function(t,e){return t.used.indexOf(e)>-1},n.isFor=function(t,e){var i=t.for&&n.dependencyParse(t.for);return!t.for||e.name===i.name&&n.versionSatisfies(e.version,i.range)},n.use=function(t,e){if(t.uses=(t.uses||[]).concat(e||[]),0===t.uses.length)return void s.warn("Plugin.use:",n.toString(t),"does not specify any dependencies to install.");for(var i=n.dependencies(t),r=s.topologicalSort(i),o=[],a=0;a<r.length;a+=1)if(r[a]!==t.name){var h=n.resolve(r[a]);h?n.isUsed(t,h.name)||(n.isFor(h,t)||(s.warn("Plugin.use:",n.toString(h),"is for",h.for,"but installed on",n.toString(t)+"."),h._warned=!0),h.install?h.install(t):(s.warn("Plugin.use:",n.toString(h),"does not specify an install function."),h._warned=!0),h._warned?(o.push("🔶 "+n.toString(h)),delete h._warned):o.push("✅ "+n.toString(h)),t.used.push(h.name)):o.push("❌ "+r[a])}o.length>0&&!h.silent&&s.info(o.join("  "))},n.dependencies=function(t,e){var i=n.dependencyParse(t),r=i.name;if(e=e||{},!(r in e)){t=n.resolve(t)||t,e[r]=s.map(t.uses||[],function(e){n.isPlugin(e)&&n.register(e);var r=n.dependencyParse(e),o=n.resolve(e);return o&&!n.versionSatisfies(o.version,r.range)?(s.warn("Plugin.dependencies:",n.toString(o),"does not satisfy",n.toString(r),"used by",n.toString(i)+"."),o._warned=!0,t._warned=!0):o||(s.warn("Plugin.dependencies:",n.toString(e),"used by",n.toString(i),"could not be resolved."),t._warned=!0),r.name});for(var o=0;o<e[r].length;o+=1)n.dependencies(e[r][o],e);return e}},n.dependencyParse=function(t){if(s.isString(t)){return/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(t)||s.warn("Plugin.dependencyParse:",t,"is not a valid dependency string."),{name:t.split("@")[0],range:t.split("@")[1]||"*"}}return{name:t.name,range:t.range||t.version}},n.versionParse=function(t){/^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/.test(t)||s.warn("Plugin.versionParse:",t,"is not a valid version or range.");var e=t.split("-");t=e[0];var i=isNaN(Number(t[0])),n=i?t.substr(1):t,r=s.map(n.split("."),function(t){return Number(t)});return{isRange:i,version:n,range:t,operator:i?t[0]:"",parts:r,prerelease:e[1],number:1e8*r[0]+1e4*r[1]+r[2]}},n.versionSatisfies=function(t,e){e=e||"*";var i=n.versionParse(e),s=i.parts,r=n.versionParse(t),o=r.parts;if(i.isRange){if("*"===i.operator||"*"===t)return!0;if("~"===i.operator)return o[0]===s[0]&&o[1]===s[1]&&o[2]>=s[2];if("^"===i.operator)return s[0]>0?o[0]===s[0]&&r.number>=i.number:s[1]>0?o[1]===s[1]&&o[2]>=s[2]:o[2]===s[2]}return t===e||"*"===t}}()},function(t,e,i){var n={};t.exports=n;var s=i(30),r=i(16);!function(){n.fromVertices=function(t){for(var e={},i=0;i<t.length;i++){var n=(i+1)%t.length,o=s.normalise({x:t[n].y-t[i].y,y:t[i].x-t[n].x}),a=0===o.y?1/0:o.x/o.y;a=a.toFixed(3).toString(),e[a]=o}return r.values(e)},n.rotate=function(t,e){if(0!==e)for(var i=Math.cos(e),n=Math.sin(e),s=0;s<t.length;s++){var r,o=t[s];r=o.x*i-o.y*n,o.y=o.x*n+o.y*i,o.x=r}}}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(373),s=i(376),r=i(0),o=i(23),a=i(374),h=i(375),l=i(88),u=i(128),c=new r({initialize:function(t){this.game=t,this.type=o.CANVAS,this.drawCount=0,this.width=t.config.width,this.height=t.config.height,this.config={clearBeforeRender:t.config.clearBeforeRender,pixelArt:t.config.pixelArt,backgroundColor:t.config.backgroundColor,resolution:t.config.resolution,autoResize:t.config.autoResize,roundPixels:t.config.roundPixels},this.scaleMode=t.config.pixelArt?l.NEAREST:l.LINEAR,this.gameCanvas=t.canvas,this.gameContext=this.gameCanvas.getContext("2d"),this.currentContext=this.gameContext,this.drawImage=a(this.config.roundPixels),this.blitImage=n(this.config.roundPixels),this.blendModes=h(),this.currentAlpha=1,this.currentBlendMode=0,this.currentScaleMode=0,this.snapshotCallback=null,this.snapshotType=null,this.snapshotEncoder=null,this.init()},init:function(){this.resize(this.width,this.height)},resize:function(t,e){var i=this.config.resolution;this.width=t*i,this.height=e*i,this.gameCanvas.width=this.width,this.gameCanvas.height=this.height,this.config.autoResize&&(this.gameCanvas.style.width=this.width/i+"px",this.gameCanvas.style.height=this.height/i+"px"),this.scaleMode===l.NEAREST&&u.disable(this.gameContext)},onContextLost:function(){},onContextRestored:function(){},resetTransform:function(){this.currentContext.setTransform(1,0,0,1,0,0)},setBlendMode:function(t){return this.currentBlendMode!==t&&(this.currentContext.globalCompositeOperation=t,this.currentBlendMode=t),this.currentBlendMode},setAlpha:function(t){return this.currentAlpha!==t&&(this.currentContext.globalAlpha=t,this.currentAlpha=t),this.currentAlpha},preRender:function(){var t=this.gameContext,e=this.config,i=this.width,n=this.height;e.clearBeforeRender&&t.clearRect(0,0,i,n),e.transparent||(t.fillStyle=e.backgroundColor.rgba,t.fillRect(0,0,i,n)),this.drawCount=0},render:function(t,e,i,n){var s=t.sys.context,r=0!==n.x||0!==n.y||n.width!==s.canvas.width||n.height!==s.canvas.height,o=e.list,a=this.config.resolution;this.currentContext=s,n.transparent||(s.fillStyle=n.backgroundColor.rgba,s.fillRect(n.x,n.y,n.width,n.height)),1!==this.currentAlpha&&(s.globalAlpha=1,this.currentAlpha=1),0!==this.currentBlendMode&&(s.globalCompositeOperation="source-over",this.currentBlendMode=0),this.currentScaleMode=0,this.drawCount+=o.length,r&&(s.save(),s.beginPath(),s.rect(n.x*a,n.y*a,n.width*a,n.height*a),s.clip());var h=n.matrix.matrix;s.setTransform(h[0],h[1],h[2],h[3],h[4],h[5]);for(var l=0;l<o.length;l++){var u=o[l];u.mask&&u.mask.preRenderCanvas(this,u,n),u.renderCanvas(this,u,i,n),u.mask&&u.mask.postRenderCanvas(this,u,n)}s.setTransform(1,0,0,1,0,0),s.globalCompositeOperation="source-over",n.flashEffect.postRenderCanvas(s),n.fadeEffect.postRenderCanvas(s),r&&s.restore()},postRender:function(){var t=this.gameContext;t.globalAlpha=1,t.globalCompositeOperation="source-over",this.currentAlpha=1,this.currentBlendMode=0,this.snapshotCallback&&(this.snapshotCallback(s(this.gameCanvas,this.snapshotType,this.snapshotEncoder)),this.snapshotCallback=null)},snapshot:function(t,e,i){this.snapshotCallback=t,this.snapshotType=e,this.snapshotEncoder=i},destroy:function(){this.gameCanvas=null,this.gameContext=null,this.game=null}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(23),r=i(106),o=i(96),a=i(44),h=i(377),l=i(378),u=i(379),c=i(183),d=i(184),f=new n({initialize:function(t){var e=this,i=t.config,n={alpha:i.transparent,depth:!1,antialias:i.antialias,premultipliedAlpha:i.premultipliedAlpha,stencil:!0,preserveDrawingBuffer:i.preserveDrawingBuffer,failIfMajorPerformanceCaveat:i.failIfMajorPerformanceCaveat,powerPreference:i.powerPreference};this.config={clearBeforeRender:i.clearBeforeRender,pixelArt:i.pixelArt,backgroundColor:i.backgroundColor,contextCreation:n,resolution:i.resolution,autoResize:i.autoResize,roundPixels:i.roundPixels},this.game=t,this.type=s.WEBGL,this.width=t.config.width,this.height=t.config.height,this.canvas=t.canvas,this.lostContextCallbacks=[],this.restoredContextCallbacks=[],this.blendModes=[],this.nativeTextures=[],this.contextLost=!1,this.pipelines=null,this.snapshotState={callback:null,type:null,encoder:null},this.currentActiveTextureUnit=0,this.currentTextures=new Array(16),this.currentFramebuffer=null,this.currentPipeline=null,this.currentProgram=null,this.currentVertexBuffer=null,this.currentIndexBuffer=null,this.currentBlendMode=1/0,this.currentScissorEnabled=!1,this.currentScissor=new Uint32Array([0,0,this.width,this.height]),this.currentScissorIdx=0,this.scissorStack=new Uint32Array(4e3),this.canvas.addEventListener("webglcontextlost",function(t){e.contextLost=!0,t.preventDefault();for(var i=0;i<e.lostContextCallbacks.length;++i){var n=e.lostContextCallbacks[i];n[0].call(n[1],e)}},!1),this.canvas.addEventListener("webglcontextrestored",function(){e.contextLost=!1,e.init(e.config);for(var t=0;t<e.restoredContextCallbacks.length;++t){var i=e.restoredContextCallbacks[t];i[0].call(i[1],e)}},!1),this.gl=null,this.supportedExtensions=null,this.extensions={},this.glFormats=[],this.init(this.config)},init:function(t){var e=this.canvas,i=t.backgroundColor,n=e.getContext("webgl",t.contextCreation)||e.getContext("experimental-webgl",t.contextCreation);if(!n||n.isContextLost())throw this.contextLost=!0,new Error("This browser does not support WebGL. Try using the Canvas pipeline.");this.gl=n;for(var r=0;r<=16;r++)this.blendModes.push({func:[n.ONE,n.ONE_MINUS_SRC_ALPHA],equation:n.FUNC_ADD});this.blendModes[1].func=[n.ONE,n.DST_ALPHA],this.blendModes[2].func=[n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA],this.blendModes[3].func=[n.ONE,n.ONE_MINUS_SRC_COLOR],this.glFormats[0]=n.BYTE,this.glFormats[1]=n.SHORT,this.glFormats[2]=n.UNSIGNED_BYTE,this.glFormats[3]=n.UNSIGNED_SHORT,this.glFormats[4]=n.FLOAT,this.supportedExtensions=n.getSupportedExtensions(),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.disable(n.SCISSOR_TEST),n.enable(n.BLEND),n.clearColor(i.redGL,i.greenGL,i.blueGL,1);for(var o=0;o<this.currentTextures.length;++o)this.currentTextures[o]=null;return this.pipelines={},this.addPipeline("TextureTintPipeline",new d({game:this.game,renderer:this})),this.addPipeline("FlatTintPipeline",new u({game:this.game,renderer:this})),this.addPipeline("BitmapMaskPipeline",new l({game:this.game,renderer:this})),this.addPipeline("Light2D",new c({game:this.game,renderer:this})),this.setBlendMode(s.BlendModes.NORMAL),this.resize(this.width,this.height),this},resize:function(t,e){var i=this.gl,n=this.pipelines,s=this.config.resolution;this.width=Math.floor(t*s),this.height=Math.floor(e*s),this.canvas.width=this.width,this.canvas.height=this.height,this.config.autoResize&&(this.canvas.style.width=this.width/s+"px",this.canvas.style.height=this.height/s+"px"),i.viewport(0,0,this.width,this.height);for(var r in n)n[r].resize(t,e,s);return this.currentScissor.set([0,0,this.width,this.height]),this},onContextRestored:function(t,e){return this.restoredContextCallbacks.push([t,e]),this},onContextLost:function(t,e){return this.lostContextCallbacks.push([t,e]),this},hasExtension:function(t){return!!this.supportedExtensions&&this.supportedExtensions.indexOf(t)},getExtension:function(t){return this.hasExtension(t)?(t in this.extensions||(this.extensions[t]=this.gl.getExtension(t)),this.extensions[t]):null},flush:function(){this.currentPipeline&&this.currentPipeline.flush()},hasPipeline:function(t){return t in this.pipelines},getPipeline:function(t){return this.hasPipeline(t)?this.pipelines[t]:null},removePipeline:function(t){return delete this.pipelines[t],this},addPipeline:function(t,e){return this.hasPipeline(t)?console.warn("Pipeline",t," already exists."):this.pipelines[t]=e,e.name=t,this.pipelines[t].resize(this.width,this.height,this.config.resolution),e},setScissor:function(t,e,i,n){var s=this.gl,r=this.currentScissor,o=0===t&&0===e&&i===s.canvas.width&&n===s.canvas.height&&i>=0&&n>=0;return r[0]===t&&r[1]===e&&r[2]===i&&r[3]===n||this.flush(),r[0]=t,r[1]=e,r[2]=i,r[3]=n,this.currentScissorEnabled=o,o?(s.disable(s.SCISSOR_TEST),this):(s.enable(s.SCISSOR_TEST),s.scissor(t,s.drawingBufferHeight-e-n,i,n),this)},pushScissor:function(t,e,i,n){var s=this.scissorStack,r=this.currentScissorIdx,o=this.currentScissor;return s[r+0]=o[0],s[r+1]=o[1],s[r+2]=o[2],s[r+3]=o[3],this.currentScissorIdx+=4,this.setScissor(t,e,i,n),this},popScissor:function(){var t=this.scissorStack,e=this.currentScissorIdx-4,i=t[e+0],n=t[e+1],s=t[e+2],r=t[e+3];return this.currentScissorIdx=e,this.setScissor(i,n,s,r),this},setPipeline:function(t){return this.currentPipeline===t&&this.currentPipeline.vertexBuffer===this.currentVertexBuffer&&this.currentPipeline.program===this.currentProgram||(this.flush(),this.currentPipeline=t,this.currentPipeline.bind()),this.currentPipeline.onBind(),this.currentPipeline},setBlendMode:function(t){var e=this.gl,i=this.blendModes[t];return t!==s.BlendModes.SKIP_CHECK&&this.currentBlendMode!==t&&(this.flush(),e.enable(e.BLEND),e.blendEquation(i.equation),i.func.length>2?e.blendFuncSeparate(i.func[0],i.func[1],i.func[2],i.func[3]):e.blendFunc(i.func[0],i.func[1]),this.currentBlendMode=t),this},addBlendMode:function(t,e){return this.blendModes.push({func:t,equation:e})-1},updateBlendMode:function(t,e,i){return this.blendModes[t]&&(this.blendModes[t].func=e,i&&(this.blendModes[t].equation=i)),this},removeBlendMode:function(t){return t>16&&this.blendModes[t]&&this.blendModes.splice(t,1),this},setTexture2D:function(t,e){var i=this.gl;return t!==this.currentTextures[e]&&(this.flush(),this.currentActiveTextureUnit!==e&&(i.activeTexture(i.TEXTURE0+e),this.currentActiveTextureUnit=e),i.bindTexture(i.TEXTURE_2D,t),this.currentTextures[e]=t),this},setFramebuffer:function(t){var e=this.gl;return t!==this.currentFramebuffer&&(this.flush(),e.bindFramebuffer(e.FRAMEBUFFER,t),this.currentFramebuffer=t),this},setProgram:function(t){var e=this.gl;return t!==this.currentProgram&&(this.flush(),e.useProgram(t),this.currentProgram=t),this},setVertexBuffer:function(t){var e=this.gl;return t!==this.currentVertexBuffer&&(this.flush(),e.bindBuffer(e.ARRAY_BUFFER,t),this.currentVertexBuffer=t),this},setIndexBuffer:function(t){var e=this.gl;return t!==this.currentIndexBuffer&&(this.flush(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.currentIndexBuffer=t),this},createTextureFromSource:function(t,e,i,n){var o=this.gl,a=o.NEAREST,h=o.CLAMP_TO_EDGE;return e=t?t.width:e,i=t?t.height:i,r(e,i)&&(h=o.REPEAT),n===s.ScaleModes.LINEAR?a=o.LINEAR:(n===s.ScaleModes.NEAREST||this.config.pixelArt)&&(a=o.NEAREST),t||"number"!=typeof e||"number"!=typeof i?this.createTexture2D(0,a,a,h,h,o.RGBA,t):this.createTexture2D(0,a,a,h,h,o.RGBA,null,e,i)},createTexture2D:function(t,e,i,n,s,r,o,a,h,l){var u=this.gl,c=u.createTexture();return l=void 0===l||null===l||l,this.setTexture2D(c,0),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,e),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,i),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,s),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,n),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l),null===o||void 0===o?u.texImage2D(u.TEXTURE_2D,t,r,a,h,0,r,u.UNSIGNED_BYTE,null):(u.texImage2D(u.TEXTURE_2D,t,r,r,u.UNSIGNED_BYTE,o),a=o.width,h=o.height),this.setTexture2D(null,0),c.isAlphaPremultiplied=l,c.isRenderTexture=!1,c.width=a,c.height=h,this.nativeTextures.push(c),c},createFramebuffer:function(t,e,i,n){var s=this.gl,r=s.createFramebuffer(),o=0;if(this.setFramebuffer(r),n){var a=s.createRenderbuffer();s.bindRenderbuffer(s.RENDERBUFFER,a),s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,t,e),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,a)}if(i.isRenderTexture=!0,i.isAlphaPremultiplied=!1,s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,i,0),(o=s.checkFramebufferStatus(s.FRAMEBUFFER))!==s.FRAMEBUFFER_COMPLETE){var h={36054:"Incomplete Attachment",36055:"Missing Attachment",36057:"Incomplete Dimensions",36061:"Framebuffer Unsupported"};throw new Error("Framebuffer incomplete. Framebuffer status: "+h[o])}return r.renderTexture=i,this.setFramebuffer(null),r},createProgram:function(t,e){var i=this.gl,n=i.createProgram(),s=i.createShader(i.VERTEX_SHADER),r=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(s,t),i.shaderSource(r,e),i.compileShader(s),i.compileShader(r),!i.getShaderParameter(s,i.COMPILE_STATUS))throw new Error("Failed to compile Vertex Shader:\n"+i.getShaderInfoLog(s));if(!i.getShaderParameter(r,i.COMPILE_STATUS))throw new Error("Failed to compile Fragment Shader:\n"+i.getShaderInfoLog(r));if(i.attachShader(n,s),i.attachShader(n,r),i.linkProgram(n),!i.getProgramParameter(n,i.LINK_STATUS))throw new Error("Failed to link program:\n"+i.getProgramInfoLog(n));return n},createVertexBuffer:function(t,e){var i=this.gl,n=i.createBuffer();return this.setVertexBuffer(n),i.bufferData(i.ARRAY_BUFFER,t,e),this.setVertexBuffer(null),n},createIndexBuffer:function(t,e){var i=this.gl,n=i.createBuffer();return this.setIndexBuffer(n),i.bufferData(i.ELEMENT_ARRAY_BUFFER,t,e),this.setIndexBuffer(null),n},deleteTexture:function(t){var e=this.nativeTextures.indexOf(t);return-1!==e&&o(this.nativeTextures,e),this.gl.deleteTexture(t),this},deleteFramebuffer:function(t){return this.gl.deleteFramebuffer(t),this},deleteProgram:function(t){return this.gl.deleteProgram(t),this},deleteBuffer:function(t){return this.gl.deleteBuffer(t),this},preRenderCamera:function(t){var e=this.config.resolution,i=Math.floor(t.x*e),n=Math.floor(t.y*e),s=Math.floor(t.width*e),r=Math.floor(t.height*e);if(this.pushScissor(i,n,s,r),t.backgroundColor.alphaGL>0){var o=t.backgroundColor,h=this.pipelines.FlatTintPipeline;h.batchFillRect(0,0,1,1,0,t.x,t.y,t.width,t.height,a.getTintFromFloats(o.redGL,o.greenGL,o.blueGL,1),o.alphaGL,1,0,0,1,0,0,[1,0,0,1,0,0]),h.flush()}},postRenderCamera:function(t){var e=this.pipelines.FlatTintPipeline,i=t.flashEffect.postRenderWebGL(e,a.getTintFromFloats);(t.fadeEffect.postRenderWebGL(e,a.getTintFromFloats)||i)&&e.flush(),this.popScissor()},preRender:function(){if(!this.contextLost){var t=this.gl,e=this.config.backgroundColor,i=this.pipelines;t.clearColor(e.redGL,e.greenGL,e.blueGL,e.alphaGL),this.config.clearBeforeRender&&t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);for(var n in i)i[n].onPreRender()}},render:function(t,e,i,n){if(!this.contextLost){var r=e.list,o=r.length,a=this.pipelines;for(var h in a)a[h].onRender(t,n);this.preRenderCamera(n);for(var l=0;l<o;++l){var u=r[l];u.willRender()&&(u.blendMode!==this.currentBlendMode&&this.setBlendMode(u.blendMode),u.mask&&u.mask.preRenderWebGL(this,u,n),u.renderWebGL(this,u,i,n),u.mask&&u.mask.postRenderWebGL(this,u))}this.flush(),this.setBlendMode(s.BlendModes.NORMAL),this.postRenderCamera(n)}},postRender:function(){if(!this.contextLost){this.snapshotState.callback&&(this.snapshotState.callback(h(this.canvas,this.snapshotState.type,this.snapshotState.encoder)),this.snapshotState.callback=null);var t=this.pipelines;for(var e in t)t[e].onPostRender()}},snapshot:function(t,e,i){return this.snapshotState.callback=t,this.snapshotState.type=e,this.snapshotState.encoder=i,this},canvasToTexture:function(t,e){var i=this.gl;if(e)this.setTexture2D(e,0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t),e.width=t.width,e.height=t.height,this.setTexture2D(null,0);else{var n=i.CLAMP_TO_EDGE;r(t.width,t.height)&&(n=i.REPEAT),e=this.createTexture2D(0,i.NEAREST,i.NEAREST,n,n,i.RGBA,t,t.width,t.height,!0)}return e},setTextureFilter:function(t,e){var i=this.gl,n=[i.LINEAR,i.NEAREST][e];return this.setTexture2D(t,0),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,n),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,n),this.setTexture2D(null,0),this},setFloat1:function(t,e,i){return this.setProgram(t),this.gl.uniform1f(this.gl.getUniformLocation(t,e),i),this},setFloat2:function(t,e,i,n){return this.setProgram(t),this.gl.uniform2f(this.gl.getUniformLocation(t,e),i,n),this},setFloat3:function(t,e,i,n,s){return this.setProgram(t),this.gl.uniform3f(this.gl.getUniformLocation(t,e),i,n,s),this},setFloat4:function(t,e,i,n,s,r){return this.setProgram(t),this.gl.uniform4f(this.gl.getUniformLocation(t,e),i,n,s,r),this},setInt1:function(t,e,i){return this.setProgram(t),this.gl.uniform1i(this.gl.getUniformLocation(t,e),i),this},setInt2:function(t,e,i,n){return this.setProgram(t),this.gl.uniform2i(this.gl.getUniformLocation(t,e),i,n),this},setInt3:function(t,e,i,n,s){return this.setProgram(t),this.gl.uniform3i(this.gl.getUniformLocation(t,e),i,n,s),this},setInt4:function(t,e,i,n,s,r){return this.setProgram(t),this.gl.uniform4i(this.gl.getUniformLocation(t,e),i,n,s,r),this},setMatrix2:function(t,e,i,n){return this.setProgram(t),this.gl.uniformMatrix2fv(this.gl.getUniformLocation(t,e),i,n),this},setMatrix3:function(t,e,i,n){return this.setProgram(t),this.gl.uniformMatrix3fv(this.gl.getUniformLocation(t,e),i,n),this},setMatrix4:function(t,e,i,n){return this.setProgram(t),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(t,e),i,n),this},destroy:function(){for(var t in this.pipelines)this.pipelines[t].destroy(),delete this.pipelines[t];for(var e=0;e<this.nativeTextures.length;++e)this.deleteTexture(this.nativeTextures[e]),delete this.nativeTextures[e];delete this.gl,delete this.game,this.contextLost=!0,this.extensions={},this.nativeTextures.length=0}});t.exports=f},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(950),r=i(184),o=10,a=new n({Extends:r,initialize:function(t){t.fragShader=s.replace("%LIGHT_COUNT%",o.toString()),r.call(this,t)},onBind:function(){r.prototype.onBind.call(this);var t=this.renderer,e=this.program;return this.mvpUpdate(),t.setInt1(e,"uNormSampler",1),t.setFloat2(e,"uResolution",this.width,this.height),this},onRender:function(t,e){var i=t.sys.lights;if(!i)return this;if(i.culledLights.length=0,i.lights.length<=0||!i.active)return this;var n,s=this.renderer,r=this.program,a=i.cull(e),h=Math.min(a.length,o),l=e.matrix,u={x:0,y:0},c=s.height;for(n=0;n<o;++n)s.setFloat1(r,"uLights["+n+"].radius",0);if(h<=0)return this;for(s.setFloat4(r,"uCamera",e.x,e.y,e.rotation,e.zoom),s.setFloat3(r,"uAmbientLightColor",i.ambientColor.r,i.ambientColor.g,i.ambientColor.b),n=0;n<h;++n){var d=a[n],f="uLights["+n+"].";l.transformPoint(d.x,d.y,u),s.setFloat2(r,f+"position",u.x-e.scrollX*d.scrollFactorX*e.zoom,c-(u.y-e.scrollY*d.scrollFactorY*e.zoom)),s.setFloat3(r,f+"color",d.r,d.g,d.b),s.setFloat1(r,f+"intensity",d.intensity),s.setFloat1(r,f+"radius",d.radius)}return this},drawStaticTilemapLayer:function(t,e,i){var n=t.tileset.image.dataSource[0];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.drawStaticTilemapLayer.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. StaticTilemapLayer rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.drawStaticTilemapLayer(t,e,i))},drawEmitterManager:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.drawEmitterManager.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. EmitterManager rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.drawEmitterManager(t,e,i))},drawBlitter:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.drawBlitter.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. Blitter rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.drawBlitter(t,e,i))},batchSprite:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchSprite.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. Sprite rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchSprite(t,e,i))},batchMesh:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchMesh.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. Mesh rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchMesh(t,e,i))},batchBitmapText:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchBitmapText.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. BitmapText rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchBitmapText(t,e,i))},batchDynamicBitmapText:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchDynamicBitmapText.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. DynamicBitmapText rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchDynamicBitmapText(t,e,i))},batchText:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchText.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. Text rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchText(t,e,i))},batchDynamicTilemapLayer:function(t,e,i){var n=t.tileset.image.dataSource[0];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchDynamicTilemapLayer.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. DynamicTilemapLayer rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchDynamicTilemapLayer(t,e,i))},batchTileSprite:function(t,e,i){var n=t.texture.dataSource[t.frame.sourceIndex];n?(this.renderer.setPipeline(this),this.setTexture2D(n.glTexture,1),r.prototype.batchTileSprite.call(this,t,e,i)):(console.warn("Normal map texture missing for using Light2D pipeline. TileSprite rendered with default pipeline."),this.renderer.pipelines.TextureTintPipeline.batchTileSprite(t,e,i))}});a.LIGHT_COUNT=o,t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(380),r=i(951),o=i(952),a=i(44),h=i(110),l=new n({Extends:h,Mixins:[s],initialize:function(t){h.call(this,{game:t.game,renderer:t.renderer,gl:t.renderer.gl,topology:t.topology?t.topology:t.renderer.gl.TRIANGLES,vertShader:t.vertShader?t.vertShader:o,fragShader:t.fragShader?t.fragShader:r,vertexCapacity:t.vertexCapacity?t.vertexCapacity:12e3,vertexSize:t.vertexSize?t.vertexSize:2*Float32Array.BYTES_PER_ELEMENT+2*Float32Array.BYTES_PER_ELEMENT+4*Uint8Array.BYTES_PER_ELEMENT,attributes:[{name:"inPosition",size:2,type:t.renderer.gl.FLOAT,normalized:!1,offset:0},{name:"inTexCoord",size:2,type:t.renderer.gl.FLOAT,normalized:!1,offset:2*Float32Array.BYTES_PER_ELEMENT},{name:"inTint",size:4,type:t.renderer.gl.UNSIGNED_BYTE,normalized:!0,offset:4*Float32Array.BYTES_PER_ELEMENT}]}),this.vertexViewF32=new Float32Array(this.vertexData),this.vertexViewU32=new Uint32Array(this.vertexData),this.maxQuads=2e3,this.batches=[],this.mvpInit()},setTexture2D:function(t,e){if(!t)return this;var i=this.batches;0===i.length&&this.pushBatch();var n=i[i.length-1];return e>0?(n.textures[e-1]&&n.textures[e-1]!==t&&this.pushBatch(),i[i.length-1].textures[e-1]=t):(null!==n.texture&&n.texture!==t&&this.pushBatch(),i[i.length-1].texture=t),this},pushBatch:function(){var t={first:this.vertexCount,texture:null,textures:[]};this.batches.push(t)},flush:function(){if(this.flushLocked)return this;this.flushLocked=!0;var t,e,i,n=this.gl,s=this.renderer,r=this.vertexCount,o=this.topology,a=this.vertexSize,h=this.batches,l=h.length,u=0,c=null;if(0===l||0===r)return this.flushLocked=!1,this;n.bufferSubData(n.ARRAY_BUFFER,0,this.bytes.subarray(0,r*a));for(var d=0;d<h.length-1;++d){if(c=h[d],t=h[d+1],c.textures.length>0){for(e=0;e<c.textures.length;++e)(i=c.textures[e])&&s.setTexture2D(i,1+e);n.activeTexture(n.TEXTURE0)}u=t.first-c.first,null===c.texture||u<=0||(s.setTexture2D(c.texture,0),n.drawArrays(o,c.first,u))}if(c=h[h.length-1],c.textures.length>0){for(e=0;e<c.textures.length;++e)(i=c.textures[e])&&s.setTexture2D(i,1+e);n.activeTexture(n.TEXTURE0)}return u=r-c.first,c.texture&&u>0&&(s.setTexture2D(c.texture,0),n.drawArrays(o,c.first,u)),this.vertexCount=0,h.length=0,this.pushBatch(),this.flushLocked=!1,this},onBind:function(){return h.prototype.onBind.call(this),this.mvpUpdate(),0===this.batches.length&&this.pushBatch(),this},resize:function(t,e,i){return h.prototype.resize.call(this,t,e,i),this.projOrtho(0,this.width,this.height,0,-1e3,1e3),this},drawStaticTilemapLayer:function(t){if(t.vertexCount>0){var e=this.vertexBuffer,i=this.gl,n=this.renderer,s=t.tileset.image.get();n.currentPipeline&&n.currentPipeline.vertexCount>0&&n.flush(),this.vertexBuffer=t.vertexBuffer,n.setPipeline(this),n.setTexture2D(s.source.glTexture,0),i.drawArrays(this.topology,0,t.vertexCount),this.vertexBuffer=e}this.viewIdentity(),this.modelIdentity()},drawEmitterManager:function(t,e,i){var n=null;i&&(n=i.matrix),this.renderer.setPipeline(this);var s,r,o,a,h,l,u,c,d,f,p,v,g=this.renderer.config.roundPixels,y=t.emitters.list,m=y.length,x=this.vertexViewF32,w=this.vertexViewU32,b=this.renderer,T=this.maxQuads,S=e.scrollX,A=e.scrollY,C=e.matrix.matrix,M=C[0],_=C[1],E=C[2],P=C[3],L=C[4],k=C[5],F=Math.sin,R=Math.cos,O=this.vertexComponentCount,B=this.vertexCapacity,D=t.defaultFrame.source.glTexture;n&&(u=n[0],c=n[1],d=n[2],f=n[3],p=n[4],v=n[5]),this.setTexture2D(D,0);for(var I=0;I<m;++I){var Y=y[I],z=Y.alive,X=z.length,N=Math.ceil(X/T),V=0,W=S*Y.scrollFactorX,G=A*Y.scrollFactorY;if(n){var U=-W,H=-G,j=U*M+H*E+L,q=U*_+H*P+k;s=u*M+c*E,r=u*_+c*P,o=d*M+f*E,a=d*_+f*P,h=p*M+v*E+j,l=p*_+v*P+q,M=s,_=r,E=o,P=a,L=h,k=l,W=0,G=0}if(Y.visible&&0!==X){b.setBlendMode(Y.blendMode),this.vertexCount>=B&&(this.flush(),this.setTexture2D(D,0));for(var K=0;K<N;++K){for(var J=Math.min(X,T),Z=0;Z<J;++Z){var Q=z[V+Z];if(!(Q.alpha<=0)){var $=Q.frame,tt=$.uvs,et=-$.halfWidth,it=-$.halfHeight,nt=Q.color,st=et+$.width,rt=it+$.height,ot=F(Q.rotation),at=R(Q.rotation),ht=at*Q.scaleX,lt=ot*Q.scaleX,ut=-ot*Q.scaleY,ct=at*Q.scaleY,dt=Q.x-W,ft=Q.y-G,pt=ht*M+lt*E,vt=ht*_+lt*P,gt=ut*M+ct*E,yt=ut*_+ct*P,mt=dt*M+ft*E+L,xt=dt*_+ft*P+k,wt=et*pt+it*gt+mt,bt=et*vt+it*yt+xt,Tt=et*pt+rt*gt+mt,St=et*vt+rt*yt+xt,At=st*pt+rt*gt+mt,Ct=st*vt+rt*yt+xt,Mt=st*pt+it*gt+mt,_t=st*vt+it*yt+xt,Et=this.vertexCount*O;g&&(wt|=0,bt|=0,Tt|=0,St|=0,At|=0,Ct|=0,Mt|=0,_t|=0),x[Et+0]=wt,x[Et+1]=bt,x[Et+2]=tt.x0,x[Et+3]=tt.y0,w[Et+4]=nt,x[Et+5]=Tt,x[Et+6]=St,x[Et+7]=tt.x1,x[Et+8]=tt.y1,w[Et+9]=nt,x[Et+10]=At,x[Et+11]=Ct,x[Et+12]=tt.x2,x[Et+13]=tt.y2,w[Et+14]=nt,x[Et+15]=wt,x[Et+16]=bt,x[Et+17]=tt.x0,x[Et+18]=tt.y0,w[Et+19]=nt,x[Et+20]=At,x[Et+21]=Ct,x[Et+22]=tt.x2,x[Et+23]=tt.y2,w[Et+24]=nt,x[Et+25]=Mt,x[Et+26]=_t,x[Et+27]=tt.x3,x[Et+28]=tt.y3,w[Et+29]=nt,this.vertexCount+=6,this.vertexCount>=B&&(this.flush(),this.setTexture2D(D,0))}}V+=J,X-=J,this.vertexCount>=B&&(this.flush(),this.setTexture2D(D,0))}}}this.setTexture2D(D,0)},drawBlitter:function(t,e,i){var n=null;i&&(n=i.matrix),this.renderer.setPipeline(this);var s=this.renderer.config.roundPixels,r=a.getTintAppendFloatAlpha,o=this.vertexViewF32,h=this.vertexViewU32,l=t.getRenderList(),u=l.length,c=e.matrix.matrix,d=c[0],f=c[1],p=c[2],v=c[3],g=c[4],y=c[5],m=e.scrollX*t.scrollFactorX,x=e.scrollY*t.scrollFactorY,w=Math.ceil(u/this.maxQuads),b=0;if(n){var T=n[0],S=n[1],A=n[2],C=n[3],M=n[4],_=n[5],E=-m,P=-x,L=E*d+P*p+g,k=E*f+P*v+y,F=T*d+S*p,R=T*f+S*v,O=A*d+C*p,B=A*f+C*v,D=M*d+_*p+L,I=M*f+_*v+k;d=F,f=R,p=O,v=B,g=D,y=I,m=0,x=0}for(var Y=t.x-m,z=t.y-x,X=0;X<w;++X){for(var N=Math.min(u,this.maxQuads),V=0;V<N;++V){var W=l[b+V],G=W.frame,U=W.alpha,H=r(16777215,U),j=G.uvs,q=W.flipX,K=W.flipY,J=G.width*(q?-1:1),Z=G.height*(K?-1:1),Q=Y+W.x+G.x+G.width*(q?1:0),$=z+W.y+G.y+G.height*(K?1:0),tt=Q+J,et=$+Z,it=Q*d+$*p+g,nt=Q*f+$*v+y,st=tt*d+et*p+g,rt=tt*f+et*v+y;this.setTexture2D(G.texture.source[G.sourceIndex].glTexture,0);var ot=this.vertexCount*this.vertexComponentCount;s&&(it|=0,nt|=0,st|=0,rt|=0),o[ot+0]=it,o[ot+1]=nt,o[ot+2]=j.x0,o[ot+3]=j.y0,h[ot+4]=H,o[ot+5]=it,o[ot+6]=rt,o[ot+7]=j.x1,o[ot+8]=j.y1,h[ot+9]=H,o[ot+10]=st,o[ot+11]=rt,o[ot+12]=j.x2,o[ot+13]=j.y2,h[ot+14]=H,o[ot+15]=it,o[ot+16]=nt,o[ot+17]=j.x0,o[ot+18]=j.y0,h[ot+19]=H,o[ot+20]=st,o[ot+21]=rt,o[ot+22]=j.x2,o[ot+23]=j.y2,h[ot+24]=H,o[ot+25]=st,o[ot+26]=nt,o[ot+27]=j.x3,o[ot+28]=j.y3,h[ot+29]=H,this.vertexCount+=6,this.vertexCount>=this.vertexCapacity&&this.flush()}b+=N,u-=N,this.vertexCount>=this.vertexCapacity&&this.flush()}},batchSprite:function(t,e,i){var n=null;i&&(n=i.matrix),this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var s,r,o,h,l,u,c=this.renderer.config.roundPixels,d=a.getTintAppendFloatAlpha,f=this.vertexViewF32,p=this.vertexViewU32,v=e.matrix.matrix,g=t.frame,y=g.texture.source[g.sourceIndex].glTexture,m=!!y.isRenderTexture,x=t.flipX,w=t.flipY^m,b=g.uvs,T=g.width*(x?-1:1),S=g.height*(w?-1:1),A=-t.displayOriginX+g.x+g.width*(x?1:0),C=-t.displayOriginY+g.y+g.height*(w?1:0),M=(c?0|A:A)+T,_=(c?0|C:C)+S,E=t.scaleX,P=t.scaleY,L=t.rotation,k=t._alphaTL,F=t._alphaTR,R=t._alphaBL,O=t._alphaBR,B=t._tintTL,D=t._tintTR,I=t._tintBL,Y=t._tintBR,z=Math.sin(L),X=Math.cos(L),N=X*E,V=z*E,W=-z*P,G=X*P,U=t.x,H=t.y,j=v[0],q=v[1],K=v[2],J=v[3],Z=v[4],Q=v[5];if(n){var $=n[0],tt=n[1],et=n[2],it=n[3],nt=n[4],st=n[5],rt=-e.scrollX*t.scrollFactorX,ot=-e.scrollY*t.scrollFactorY,at=rt*j+ot*K+Z,ht=rt*q+ot*J+Q,lt=$*j+tt*K,ut=$*q+tt*J,ct=et*j+it*K,dt=et*q+it*J,ft=nt*j+st*K+at,pt=nt*q+st*J+ht;s=N*lt+V*ct,r=N*ut+V*dt,o=W*lt+G*ct,h=W*ut+G*dt,l=U*lt+H*ct+ft,u=U*ut+H*dt+pt}else U-=e.scrollX*t.scrollFactorX,H-=e.scrollY*t.scrollFactorY,s=N*j+V*K,r=N*q+V*J,o=W*j+G*K,h=W*q+G*J,l=U*j+H*K+Z,u=U*q+H*J+Q;var vt=A*s+C*o+l,gt=A*r+C*h+u,yt=A*s+_*o+l,mt=A*r+_*h+u,xt=M*s+_*o+l,wt=M*r+_*h+u,bt=M*s+C*o+l,Tt=M*r+C*h+u,St=d(B,k),At=d(D,F),Ct=d(I,R),Mt=d(Y,O),_t=0;c&&(vt|=0,gt|=0,yt|=0,mt|=0,xt|=0,wt|=0,bt|=0,Tt|=0),this.setTexture2D(y,0),_t=this.vertexCount*this.vertexComponentCount,f[_t+0]=vt,f[_t+1]=gt,f[_t+2]=b.x0,f[_t+3]=b.y0,p[_t+4]=St,f[_t+5]=yt,f[_t+6]=mt,f[_t+7]=b.x1,f[_t+8]=b.y1,p[_t+9]=Ct,f[_t+10]=xt,f[_t+11]=wt,f[_t+12]=b.x2,f[_t+13]=b.y2,p[_t+14]=Mt,f[_t+15]=vt,f[_t+16]=gt,f[_t+17]=b.x0,f[_t+18]=b.y0,p[_t+19]=St,f[_t+20]=xt,f[_t+21]=wt,f[_t+22]=b.x2,f[_t+23]=b.y2,p[_t+24]=Mt,f[_t+25]=bt,f[_t+26]=Tt,f[_t+27]=b.x3,f[_t+28]=b.y3,p[_t+29]=At,this.vertexCount+=6},batchMesh:function(t,e,i){var n=null;i&&(n=i.matrix);var s=t.vertices,r=s.length,o=r/2|0;this.renderer.setPipeline(this),this.vertexCount+o>this.vertexCapacity&&this.flush();var h,l,u,c,d,f,p=this.renderer.config.roundPixels,v=a.getTintAppendFloatAlpha,g=t.uv,y=t.colors,m=t.alphas,x=this.vertexViewF32,w=this.vertexViewU32,b=e.matrix.matrix,T=t.frame,S=t.texture.source[T.sourceIndex].glTexture,A=t.x,C=t.y,M=t.scaleX,_=t.scaleY,E=t.rotation,P=Math.sin(E),L=Math.cos(E),k=L*M,F=P*M,R=-P*_,O=L*_,B=A,D=C,I=b[0],Y=b[1],z=b[2],X=b[3],N=b[4],V=b[5],W=0;if(n){var G=n[0],U=n[1],H=n[2],j=n[3],q=n[4],K=n[5],J=-e.scrollX*t.scrollFactorX,Z=-e.scrollY*t.scrollFactorY,Q=J*I+Z*z+N,$=J*Y+Z*X+V,tt=G*I+U*z,et=G*Y+U*X,it=H*I+j*z,nt=H*Y+j*X,st=q*I+K*z+Q,rt=q*Y+K*X+$;h=k*tt+F*it,l=k*et+F*nt,u=R*tt+O*it,c=R*et+O*nt,d=B*tt+D*it+st,f=B*et+D*nt+rt}else B-=e.scrollX*t.scrollFactorX,D-=e.scrollY*t.scrollFactorY,h=k*I+F*z,l=k*Y+F*X,u=R*I+O*z,c=R*Y+O*X,d=B*I+D*z+N,f=B*Y+D*X+V;this.setTexture2D(S,0),W=this.vertexCount*this.vertexComponentCount;for(var ot=0,at=0;ot<r;ot+=2){var ht=s[ot+0],lt=s[ot+1],ut=ht*h+lt*u+d,ct=ht*l+lt*c+f;p&&(ut|=0,ct|=0),x[W+0]=ut,x[W+1]=ct,x[W+2]=g[ot+0],x[W+3]=g[ot+1],w[W+4]=v(y[at],m[at]),W+=5,at+=1}this.vertexCount+=o},batchBitmapText:function(t,e,i){var n=null;i&&(n=i.matrix),this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var s,r,o,h,l,u,c,d,f,p,v,g,y,m,x=this.renderer.config.roundPixels,w=t.text,b=w.length,T=a.getTintAppendFloatAlpha,S=this.vertexViewF32,A=this.vertexViewU32,C=e.matrix.matrix,M=e.width+50,_=e.height+50,E=t.frame,P=t.texture.source[E.sourceIndex],L=e.scrollX*t.scrollFactorX,k=e.scrollY*t.scrollFactorY,F=t.fontData,R=F.lineHeight,O=t.fontSize/F.size,B=F.chars,D=t.alpha,I=T(t._tintTL,D),Y=T(t._tintTR,D),z=T(t._tintBL,D),X=T(t._tintBR,D),N=t.x,V=t.y,W=E.cutX,G=E.cutY,U=P.width,H=P.height,j=P.glTexture,q=0,K=0,J=0,Z=0,Q=null,$=0,tt=0,et=0,it=0,nt=0,st=0,rt=0,ot=0,at=0,ht=0,lt=0,ut=0,ct=null,dt=0,ft=N+E.x,pt=V+E.y,vt=t.rotation,gt=t.scaleX,yt=t.scaleY,mt=t.letterSpacing,xt=Math.sin(vt),wt=Math.cos(vt),bt=wt*gt,Tt=xt*gt,St=-xt*yt,At=wt*yt,Ct=ft,Mt=pt,_t=C[0],Et=C[1],Pt=C[2],Lt=C[3],kt=C[4],Ft=C[5],Rt=0;if(n){var Ot=n[0],Bt=n[1],Dt=n[2],It=n[3],Yt=n[4],zt=n[5],Xt=-L,Nt=-k,Vt=Xt*_t+Nt*Pt+kt,Wt=Xt*Et+Nt*Lt+Ft,Gt=Ot*_t+Bt*Pt,Ut=Ot*Et+Bt*Lt,Ht=Dt*_t+It*Pt,jt=Dt*Et+It*Lt,qt=Yt*_t+zt*Pt+Vt,Kt=Yt*Et+zt*Lt+Wt;f=bt*Gt+Tt*Ht,p=bt*Ut+Tt*jt,v=St*Gt+At*Ht,g=St*Ut+At*jt,y=Ct*Gt+Mt*Ht+qt,m=Ct*Ut+Mt*jt+Kt}else Ct-=L,Mt-=k,f=bt*_t+Tt*Pt,p=bt*Et+Tt*Lt,v=St*_t+At*Pt,g=St*Et+At*Lt,y=Ct*_t+Mt*Pt+kt,m=Ct*Et+Mt*Lt+Ft;this.setTexture2D(j,0);for(var Jt=0;Jt<b;++Jt)if(10!==(Z=w.charCodeAt(Jt))){if(Q=B[Z]){if($=W+Q.x,tt=G+Q.y,et=Q.width,it=Q.height,nt=(J+Q.xOffset+q)*O,st=(Q.yOffset+K)*O,null!==ct){var Zt=Q.kerning[dt];nt+=void 0!==Zt?Zt:0}q+=Q.xAdvance+mt,J+=1,ct=Q,dt=Z,0!==et&&0!==it&&32!==Z&&(nt-=t.displayOriginX,st-=t.displayOriginY,rt=nt+et*O,ot=st+it*O,s=nt*f+st*v+y,r=nt*p+st*g+m,o=nt*f+ot*v+y,h=nt*p+ot*g+m,l=rt*f+ot*v+y,u=rt*p+ot*g+m,c=rt*f+st*v+y,d=rt*p+st*g+m,at=$/U,ht=($+et)/U,lt=tt/H,ut=(tt+it)/H,(s<-50||s>M||r<-50||r>_)&&(o<-50||o>M||h<-50||h>_)&&(l<-50||l>M||u<-50||u>_)&&(c<-50||c>M||d<-50||d>_)||(this.vertexCount+6>this.vertexCapacity&&this.flush(),Rt=this.vertexCount*this.vertexComponentCount,x&&(s|=0,r|=0,o|=0,h|=0,l|=0,u|=0,c|=0,d|=0),S[Rt+0]=s,S[Rt+1]=r,S[Rt+2]=at,S[Rt+3]=lt,A[Rt+4]=I,S[Rt+5]=o,S[Rt+6]=h,S[Rt+7]=at,S[Rt+8]=ut,A[Rt+9]=z,S[Rt+10]=l,S[Rt+11]=u,S[Rt+12]=ht,S[Rt+13]=ut,A[Rt+14]=X,S[Rt+15]=s,S[Rt+16]=r,S[Rt+17]=at,S[Rt+18]=lt,A[Rt+19]=I,S[Rt+20]=l,S[Rt+21]=u,S[Rt+22]=ht,S[Rt+23]=ut,A[Rt+24]=X,S[Rt+25]=c,S[Rt+26]=d,S[Rt+27]=ht,S[Rt+28]=lt,A[Rt+29]=Y,this.vertexCount+=6))}}else q=0,J=0,K+=R,ct=null},batchDynamicBitmapText:function(t,e,i){var n=null;i&&(n=i.matrix),this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var s,r,o,h,l,u,c,d,f,p,v,g,y,m,x,w,b,T,S,A,C=this.renderer.config.roundPixels,M=t.displayCallback,_=t.text,E=_.length,P=a.getTintAppendFloatAlpha,L=this.vertexViewF32,k=this.vertexViewU32,F=this.renderer,R=e.matrix.matrix,O=t.frame,B=t.texture.source[O.sourceIndex],D=e.scrollX*t.scrollFactorX,I=e.scrollY*t.scrollFactorY,Y=t.scrollX,z=t.scrollY,X=t.fontData,N=X.lineHeight,V=t.fontSize/X.size,W=X.chars,G=t.alpha,U=P(t._tintTL,G),H=P(t._tintTR,G),j=P(t._tintBL,G),q=P(t._tintBR,G),K=t.x,J=t.y,Z=O.cutX,Q=O.cutY,$=B.width,tt=B.height,et=B.glTexture,it=0,nt=0,st=0,rt=0,ot=null,at=0,ht=0,lt=0,ut=0,ct=0,dt=0,ft=0,pt=0,vt=0,gt=0,yt=0,mt=0,xt=null,wt=0,bt=K+O.x,Tt=J+O.y,St=t.rotation,At=t.scaleX,Ct=t.scaleY,Mt=t.letterSpacing,_t=Math.sin(St),Et=Math.cos(St),Pt=Et*At,Lt=_t*At,kt=-_t*Ct,Ft=Et*Ct,Rt=bt,Ot=Tt,Bt=R[0],Dt=R[1],It=R[2],Yt=R[3],zt=R[4],Xt=R[5],Nt=t.cropWidth>0||t.cropHeight>0,Vt=0;if(n){var Wt=n[0],Gt=n[1],Ut=n[2],Ht=n[3],jt=n[4],qt=n[5],Kt=-D,Jt=-I,Zt=Kt*Bt+Jt*It+zt,Qt=Kt*Dt+Jt*Yt+Xt,$t=Wt*Bt+Gt*It,te=Wt*Dt+Gt*Yt,ee=Ut*Bt+Ht*It,ie=Ut*Dt+Ht*Yt,ne=jt*Bt+qt*It+Zt,se=jt*Dt+qt*Yt+Qt;x=Pt*$t+Lt*ee,w=Pt*te+Lt*ie,b=kt*$t+Ft*ee,T=kt*te+Ft*ie,S=Rt*$t+Ot*ee+ne,A=Rt*te+Ot*ie+se}else Rt-=D,Ot-=I,x=Pt*Bt+Lt*It,w=Pt*Dt+Lt*Yt,b=kt*Bt+Ft*It,T=kt*Dt+Ft*Yt,S=Rt*Bt+Ot*It+zt,A=Rt*Dt+Ot*Yt+Xt;this.setTexture2D(et,0),Nt&&F.pushScissor(t.x,t.y,t.cropWidth*t.scaleX,t.cropHeight*t.scaleY);for(var re=0;re<E;++re)if(V=t.fontSize/t.fontData.size,St=0,10!==(rt=_.charCodeAt(re))){if(ot=W[rt]){if(at=Z+ot.x,ht=Q+ot.y,lt=ot.width,ut=ot.height,ct=st+ot.xOffset+it-Y,dt=ot.yOffset+nt-z,null!==xt){var oe=ot.kerning[wt];ct+=void 0!==oe?oe:0}if(it+=ot.xAdvance+Mt,st+=1,xt=ot,wt=rt,0!==lt&&0!==ut&&32!==rt){if(M){var ae=M({color:0,tint:{topLeft:U,topRight:H,bottomLeft:j,bottomRight:q},index:re,charCode:rt,x:ct,y:dt,scale:V,rotation:0,data:ot.data});ct=ae.x,dt=ae.y,V=ae.scale,St=ae.rotation,ae.color?(U=ae.color,H=ae.color,j=ae.color,q=ae.color):(U=ae.tint.topLeft,H=ae.tint.topRight,j=ae.tint.bottomLeft,q=ae.tint.bottomRight),U=P(U,G),H=P(H,G),j=P(j,G),q=P(q,G)}ct-=t.displayOriginX,dt-=t.displayOriginY,ct*=V,dt*=V,_t=Math.sin(St),Et=Math.cos(St),f=Et*V,p=_t*V,v=-_t*V,g=Et*V,y=ct,m=dt,Pt=f*x+p*b,Lt=f*w+p*T,kt=v*x+g*b,Ft=v*w+g*T,Rt=y*x+m*b+S,Ot=y*w+m*T+A,ft=lt,pt=ut,s=Rt,r=Ot,o=pt*kt+Rt,h=pt*Ft+Ot,l=ft*Pt+pt*kt+Rt,u=ft*Lt+pt*Ft+Ot,c=ft*Pt+Rt,d=ft*Lt+Ot,vt=at/$,gt=(at+lt)/$,yt=ht/tt,mt=(ht+ut)/tt,this.vertexCount+6>this.vertexCapacity&&this.flush(),Vt=this.vertexCount*this.vertexComponentCount,C&&(s|=0,r|=0,o|=0,h|=0,l|=0,u|=0,c|=0,d|=0),L[Vt+0]=s,L[Vt+1]=r,L[Vt+2]=vt,L[Vt+3]=yt,k[Vt+4]=U,L[Vt+5]=o,L[Vt+6]=h,L[Vt+7]=vt,L[Vt+8]=mt,k[Vt+9]=j,L[Vt+10]=l,L[Vt+11]=u,L[Vt+12]=gt,L[Vt+13]=mt,k[Vt+14]=q,L[Vt+15]=s,L[Vt+16]=r,L[Vt+17]=vt,L[Vt+18]=yt,k[Vt+19]=U,L[Vt+20]=l,L[Vt+21]=u,L[Vt+22]=gt,L[Vt+23]=mt,k[Vt+24]=q,L[Vt+25]=c,L[Vt+26]=d,L[Vt+27]=gt,L[Vt+28]=yt,k[Vt+29]=H,this.vertexCount+=6}}}else it=0,st=0,nt+=N,xt=null;Nt&&F.popScissor()},batchText:function(t,e,i){var n=a.getTintAppendFloatAlpha;this.batchTexture(t,t.canvasTexture,t.canvasTexture.width,t.canvasTexture.height,t.x,t.y,t.canvasTexture.width,t.canvasTexture.height,t.scaleX,t.scaleY,t.rotation,t.flipX,t.flipY,t.scrollFactorX,t.scrollFactorY,t.displayOriginX,t.displayOriginY,0,0,t.canvasTexture.width,t.canvasTexture.height,n(t._tintTL,t._alphaTL),n(t._tintTR,t._alphaTR),n(t._tintBL,t._alphaBL),n(t._tintBR,t._alphaBR),0,0,e,i)},batchDynamicTilemapLayer:function(t,e,i){for(var n=t.culledTiles,s=n.length,r=t.tileset.image.get().source.glTexture,o=t.tileset,h=t.scrollFactorX,l=t.scrollFactorY,u=t.alpha,c=t.x,d=t.y,f=t.scaleX,p=t.scaleY,v=a.getTintAppendFloatAlpha,g=0;g<s;++g){var y=n[g],m=o.getTileTextureCoordinates(y.index);if(null!==m){var x=y.width,w=y.height,b=m.x,T=m.y,S=v(y.tint,u*y.alpha);this.batchTexture(t,r,r.width,r.height,y.width/2+c+y.pixelX*f,y.height/2+d+y.pixelY*p,y.width*f,y.height*p,1,1,y.rotation,y.flipX,y.flipY,h,l,y.width/2,y.height/2,b,T,x,w,S,S,S,S,0,0,e,i)}}},batchTileSprite:function(t,e,i){var n=a.getTintAppendFloatAlpha;this.batchTexture(t,t.tileTexture,t.frame.width,t.frame.height,t.x,t.y,t.width,t.height,t.scaleX,t.scaleY,t.rotation,t.flipX,t.flipY,t.scrollFactorX,t.scrollFactorY,t.originX*t.width,t.originY*t.height,0,0,t.width,t.height,n(t._tintTL,t._alphaTL),n(t._tintTR,t._alphaTR),n(t._tintBL,t._alphaBL),n(t._tintBR,t._alphaBR),t.tilePositionX%t.frame.width/t.frame.width,t.tilePositionY%t.frame.height/t.frame.height,e,i)},batchTexture:function(t,e,i,n,s,r,o,a,h,l,u,c,d,f,p,v,g,y,m,x,w,b,T,S,A,C,M,_,E){var P=null;E&&(P=E.matrix),this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush(),d^=e.isRenderTexture?1:0;var L,k,F,R,O,B,D=this.renderer.config.roundPixels,I=this.vertexViewF32,Y=this.vertexViewU32,z=_.matrix.matrix,X=o*(c?-1:1),N=a*(d?-1:1),V=o*(c?1:0)-v,W=a*(d?1:0)-g,G=V+X,U=W+N,H=s,j=r,q=Math.sin(u),K=Math.cos(u),J=K*h,Z=q*h,Q=-q*l,$=K*l,tt=H,et=j,it=z[0],nt=z[1],st=z[2],rt=z[3],ot=z[4],at=z[5];if(P){var ht=P[0],lt=P[1],ut=P[2],ct=P[3],dt=P[4],ft=P[5],pt=-_.scrollX*f,vt=-_.scrollY*p,gt=pt*it+vt*st+ot,yt=pt*nt+vt*rt+at,mt=ht*it+lt*st,xt=ht*nt+lt*rt,wt=ut*it+ct*st,bt=ut*nt+ct*rt,Tt=dt*it+ft*st+gt,St=dt*nt+ft*rt+yt;L=J*mt+Z*wt,k=J*xt+Z*bt,F=Q*mt+$*wt,R=Q*xt+$*bt,O=tt*mt+et*wt+Tt,B=tt*xt+et*bt+St}else tt-=_.scrollX*f,et-=_.scrollY*p,L=J*it+Z*st,k=J*nt+Z*rt,F=Q*it+$*st,R=Q*nt+$*rt,O=tt*it+et*st+ot,B=tt*nt+et*rt+at;var At=V*L+W*F+O,Ct=V*k+W*R+B,Mt=V*L+U*F+O,_t=V*k+U*R+B,Et=G*L+U*F+O,Pt=G*k+U*R+B,Lt=G*L+W*F+O,kt=G*k+W*R+B,Ft=0,Rt=y/i+C,Ot=m/n+M,Bt=(y+x)/i+C,Dt=(m+w)/n+M;this.setTexture2D(e,0),Ft=this.vertexCount*this.vertexComponentCount,D&&(At|=0,Ct|=0,Mt|=0,_t|=0,Et|=0,Pt|=0,Lt|=0,kt|=0),I[Ft+0]=At,I[Ft+1]=Ct,I[Ft+2]=Rt,I[Ft+3]=Ot,Y[Ft+4]=b,I[Ft+5]=Mt,I[Ft+6]=_t,I[Ft+7]=Rt,I[Ft+8]=Dt,Y[Ft+9]=T,I[Ft+10]=Et,I[Ft+11]=Pt,I[Ft+12]=Bt,I[Ft+13]=Dt,Y[Ft+14]=S,I[Ft+15]=At,I[Ft+16]=Ct,I[Ft+17]=Rt,I[Ft+18]=Ot,Y[Ft+19]=b,I[Ft+20]=Et,I[Ft+21]=Pt,I[Ft+22]=Bt,I[Ft+23]=Dt,Y[Ft+24]=S,I[Ft+25]=Lt,I[Ft+26]=kt,I[Ft+27]=Bt,I[Ft+28]=Ot,Y[Ft+29]=A,this.vertexCount+=6},drawTexture:function(t,e,i,n,s,r,o,h,l,u,c){var d=null;c&&(d=c.matrix),this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var f=this.renderer.config.roundPixels,p=this.vertexViewF32,v=this.vertexViewU32,g=h,y=l,m=e,x=i,w=m+g,b=x+y,T=u[0],S=u[1],A=u[2],C=u[3],M=u[4],_=u[5];if(d){var E=d[0],P=d[1],L=d[2],k=d[3],F=d[4],R=d[5],O=T*E+S*L,B=T*P+S*k,D=A*E+C*L,I=A*P+C*k,Y=M*E+_*L+F,z=M*P+_*k+R;T=O,S=B,A=D,C=I,M=Y,_=z}var X=m*T+x*A+M,N=m*S+x*C+_,V=m*T+b*A+M,W=m*S+b*C+_,G=w*T+b*A+M,U=w*S+b*C+_,H=w*T+x*A+M,j=w*S+x*C+_,q=0,K=t.width,J=t.height,Z=r/K,Q=o/J,$=(r+h)/K,tt=(o+l)/J;n=a.getTintAppendFloatAlpha(n,s),this.setTexture2D(t,0),q=this.vertexCount*this.vertexComponentCount,f&&(X|=0,N|=0,V|=0,W|=0,G|=0,U|=0,H|=0,j|=0),p[q+0]=X,p[q+1]=N,p[q+2]=Z,p[q+3]=Q,v[q+4]=n,p[q+5]=V,p[q+6]=W,p[q+7]=Z,p[q+8]=tt,v[q+9]=n,p[q+10]=G,p[q+11]=U,p[q+12]=$,p[q+13]=tt,v[q+14]=n,p[q+15]=X,p[q+16]=N,p[q+17]=Z,p[q+18]=Q,v[q+19]=n,p[q+20]=G,p[q+21]=U,p[q+22]=$,p[q+23]=tt,v[q+24]=n,p[q+25]=H,p[q+26]=j,p[q+27]=$,p[q+28]=Q,v[q+29]=n,this.vertexCount+=6,this.flush()},batchGraphics:function(){}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(89),r=i(953),o=i(954),a=i(372),h=i(383),l=new n({initialize:function(t,e){this.scene=t,this.game,this.config=e,this.settings=h.create(e),this.canvas,this.context,this.anims,this.cache,this.plugins,this.registry,this.sound,this.textures,this.add,this.cameras,this.displayList,this.events,this.make,this.scenePlugin,this.updateList},init:function(t){this.settings.status=s.INIT,this.game=t,this.canvas=t.canvas,this.context=t.context;var e=t.plugins;this.plugins=e,e.installGlobal(this,a.Global),e.installLocal(this,a.CoreScene),e.installLocal(this,o(this)),e.installLocal(this,r(this)),this.events.emit("boot",this),this.settings.isBooted=!0},install:function(t){Array.isArray(t)||(t=[t]),this.plugins.installLocal(this,t)},step:function(t,e){this.events.emit("preupdate",t,e),this.events.emit("update",t,e),this.scene.update.call(this.scene,t,e),this.events.emit("postupdate",t,e)},render:function(t){var e=this.displayList;e.depthSort(),this.cameras.render(t,e),this.events.emit("render",t)},queueDepthSort:function(){this.displayList.queueDepthSort()},depthSort:function(){this.displayList.depthSort()},pause:function(){return this.settings.active&&(this.settings.status=s.PAUSED,this.settings.active=!1,this.events.emit("pause",this)),this},resume:function(){return this.settings.active||(this.settings.status=s.RUNNING,this.settings.active=!0,this.events.emit("resume",this)),this},sleep:function(){return this.settings.status=s.SLEEPING,this.settings.active=!1,this.settings.visible=!1,this.events.emit("sleep",this),this},wake:function(){var t=this.settings;return t.status=s.RUNNING,t.active=!0,t.visible=!0,this.events.emit("wake",this),t.isTransition&&this.events.emit("transitionwake",t.transitionFrom,t.transitionDuration),this},isSleeping:function(){return this.settings.status===s.SLEEPING},isActive:function(){return this.settings.status===s.RUNNING},isTransitioning:function(){return this.settings.isTransition||null!==this.scenePlugin._target},isTransitionOut:function(){return null!==this.scenePlugin._target&&this.scenePlugin._duration>0},isTransitionIn:function(){return this.settings.isTransition},isVisible:function(){return this.settings.visible},setVisible:function(t){return this.settings.visible=t,this},setActive:function(t){return t?this.resume():this.pause()},start:function(t){t&&(this.settings.data=t),this.settings.status=s.START,this.settings.active=!0,this.settings.visible=!0,this.events.emit("start",this),this.events.emit("ready",this)},resize:function(t,e){this.events.emit("resize",t,e)},shutdown:function(){this.events.off("transitioninit"),this.events.off("transitionstart"),this.events.off("transitioncomplete"),this.events.off("transitionout"),this.settings.status=s.SHUTDOWN,this.settings.active=!1,this.settings.visible=!1,this.events.emit("shutdown",this)},destroy:function(){this.settings.status=s.DESTROYED,this.settings.active=!1,this.settings.visible=!1,this.events.emit("destroy",this),this.events.removeAllListeners();for(var t=["scene","game","anims","cache","plugins","registry","sound","textures","add","camera","displayList","events","make","scenePlugin","updateList"],e=0;e<t.length;e++)this[t[e]]=null}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){if(this.entries={},this.size=0,Array.isArray(t))for(var e=0;e<t.length;e++)this.set(t[e][0],t[e][1])},set:function(t,e){return this.has(t)||(this.entries[t]=e,this.size++),this},get:function(t){if(this.has(t))return this.entries[t]},getArray:function(){var t=[],e=this.entries;for(var i in e)t.push(e[i]);return t},has:function(t){return this.entries.hasOwnProperty(t)},delete:function(t){return this.has(t)&&(delete this.entries[t],this.size--),this},clear:function(){return Object.keys(this.entries).forEach(function(t){delete this.entries[t]},this),this.size=0,this},keys:function(){return Object.keys(this.entries)},values:function(){var t=[],e=this.entries;for(var i in e)t.push(e[i]);return t},dump:function(){var t=this.entries;console.group("Map");for(var e in t)console.log(e,t[e]);console.groupEnd()},each:function(t){var e=this.entries;for(var i in e)if(!1===t(i,e[i]))break;return this},contains:function(t){var e=this.entries;for(var i in e)if(e[i]===t)return!0;return!1},merge:function(t,e){void 0===e&&(e=!1);var i=this.entries,n=t.entries;for(var s in n)i.hasOwnProperty(s)&&e?i[s]=n[s]:this.set(s,n[s]);return this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(19),r=new n({initialize:function(t,e,i,n,s,r,o){this.texture=t,this.name=e,this.source=t.source[i],this.sourceIndex=i,this.cutX,this.cutY,this.cutWidth,this.cutHeight,this.x=0,this.y=0,this.width,this.height,this.halfWidth,this.halfHeight,this.centerX,this.centerY,this.pivotX=0,this.pivotY=0,this.customPivot=!1,this.rotated=!1,this.autoRound=-1,this.customData={},this.data={cut:{x:0,y:0,w:0,h:0,r:0,b:0},trim:!1,sourceSize:{w:0,h:0},spriteSourceSize:{x:0,y:0,w:0,h:0},uvs:{x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},radius:0,drawImage:{sx:0,sy:0,sWidth:0,sHeight:0,dWidth:0,dHeight:0}},this.setSize(r,o,n,s)},setSize:function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=0),this.cutX=i,this.cutY=n,this.cutWidth=t,this.cutHeight=e,this.width=t,this.height=e,this.halfWidth=Math.floor(.5*t),this.halfHeight=Math.floor(.5*e),this.centerX=Math.floor(t/2),this.centerY=Math.floor(e/2);var s=this.data,r=s.cut;r.x=i,r.y=n,r.w=t,r.h=e,r.r=i+t,r.b=n+e,s.sourceSize.w=t,s.sourceSize.h=e,s.spriteSourceSize.w=t,s.spriteSourceSize.h=e,s.radius=.5*Math.sqrt(t*t+e*e);var o=s.drawImage;return o.sx=i,o.sy=n,o.sWidth=t,o.sHeight=e,o.dWidth=t,o.dHeight=e,this.updateUVs()},setTrim:function(t,e,i,n,s,r){var o=this.data,a=o.spriteSourceSize;return o.trim=!0,o.sourceSize.w=t,o.sourceSize.h=e,a.x=i,a.y=n,a.w=s,a.h=r,this.x=i,this.y=n,this.width=s,this.height=r,this.halfWidth=.5*s,this.halfHeight=.5*r,this.centerX=Math.floor(s/2),this.centerY=Math.floor(r/2),this.updateUVs()},updateUVs:function(){var t=this.cutX,e=this.cutY,i=this.cutWidth,n=this.cutHeight,s=this.data.drawImage;s.sWidth=i,s.sHeight=n,s.dWidth=i,s.dHeight=n;var r=this.source.width,o=this.source.height,a=this.data.uvs;return a.x0=t/r,a.y0=e/o,a.x1=t/r,a.y1=(e+n)/o,a.x2=(t+i)/r,a.y2=(e+n)/o,a.x3=(t+i)/r,a.y3=e/o,this},updateUVsInverted:function(){var t=this.source.width,e=this.source.height,i=this.data.uvs;return i.x3=(this.cutX+this.cutHeight)/t,i.y3=(this.cutY+this.cutWidth)/e,i.x2=this.cutX/t,i.y2=(this.cutY+this.cutWidth)/e,i.x1=this.cutX/t,i.y1=this.cutY/e,i.x0=(this.cutX+this.cutHeight)/t,i.y0=this.cutY/e,this},clone:function(){var t=new r(this.texture,this.name,this.sourceIndex);return t.cutX=this.cutX,t.cutY=this.cutY,t.cutWidth=this.cutWidth,t.cutHeight=this.cutHeight,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t.halfWidth=this.halfWidth,t.halfHeight=this.halfHeight,t.centerX=this.centerX,t.centerY=this.centerY,t.rotated=this.rotated,t.data=s(!0,t.data,this.data),t.updateUVs(),t},destroy:function(){this.texture=null,this.source=null},realWidth:{get:function(){return this.data.sourceSize.w}},realHeight:{get:function(){return this.data.sourceSize.h}},uvs:{get:function(){return this.data.uvs}},radius:{get:function(){return this.data.radius}},trimmed:{get:function(){return this.data.trim}},canvasData:{get:function(){return this.data.drawImage}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(187),r=i(394),o=new n({initialize:function(t,e,i,n,s){Array.isArray(i)||(i=[i]),this.manager=t,this.key=e,this.source=[],this.dataSource=[],this.frames={},this.customData={},this.firstFrame="__BASE",this.frameTotal=0;for(var o=0;o<i.length;o++)this.source.push(new r(this,i[o],n,s))},add:function(t,e,i,n,r,o){var a=new s(this,t,e,i,n,r,o);return this.frames[t]=a,1===this.frameTotal&&(this.firstFrame=t),this.frameTotal++,a},has:function(t){return this.frames[t]},get:function(t){t||(t=this.firstFrame);var e=this.frames[t];return e||(console.warn("No Texture.frame found with name "+t),e=this.frames[this.firstFrame]),e},getTextureSourceIndex:function(t){for(var e=0;e<this.source.length;e++)if(this.source[e]===t)return e;return-1},getFramesFromTextureSource:function(t){var e=[];for(var i in this.frames)if("__BASE"!==i){var n=this.frames[i];n.sourceIndex===t&&e.push(n.name)}return e},getFrameNames:function(t){void 0===t&&(t=!1);var e=Object.keys(this.frames);if(!t){var i=e.indexOf("__BASE");-1!==i&&e.splice(i,1)}return e},getSourceImage:function(t){void 0!==t&&null!==t&&1!==this.frameTotal||(t="__BASE");var e=this.frames[t];return e?e.source.image:(console.warn("No Texture.frame found with name "+t),this.frames.__BASE.source.image)},getDataSourceImage:function(t){void 0!==t&&null!==t&&1!==this.frameTotal||(t="__BASE");var e,i=this.frames[t];return i?e=i.sourceIndex:(console.warn("No Texture.frame found with name "+t),e=this.frames.__BASE.sourceIndex),this.dataSource[e].image},setDataSource:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=this.source[e];this.dataSource.push(new r(this,t[e],i.width,i.height))}},setFilter:function(t){var e;for(e=0;e<this.source.length;e++)this.source[e].setFilter(t);for(e=0;e<this.dataSource.length;e++)this.dataSource[e].setFilter(t)},destroy:function(){var t;for(t=0;t<this.source.length;t++)this.source[t].destroy();for(t=0;t<this.dataSource.length;t++)this.dataSource[t].destroy();for(var e in this.frames){this.frames[e].destroy()}this.source=[],this.dataSource=[],this.frames={},this.manager=null}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(27),s=i(92),r=i(403),o=i(397),a=function(t,e,i,a,h,l,u,c){void 0===i&&(i=32),void 0===a&&(a=32),void 0===h&&(h=10),void 0===l&&(l=10),void 0===c&&(c=!1);var d=null;if(Array.isArray(u)){d=r(void 0!==e?e:"map",n.ARRAY_2D,u,i,a,c)}else if(void 0!==e){var f=t.cache.tilemap.get(e);f?d=r(e,f.format,f.data,i,a,c):console.warn("No map data found for key "+e)}return null===d&&(d=new s({tileWidth:i,tileHeight:a,width:h,height:l})),new o(t,d)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(115),s=function(t,e,i){var s=n(t,e,!0,i),r=n(t,e-1,!0,i),o=n(t,e+1,!0,i),a=n(t-1,e,!0,i),h=n(t+1,e,!0,i),l=s&&s.collides;return l&&(s.faceTop=!0,s.faceBottom=!0,s.faceLeft=!0,s.faceRight=!0),r&&r.collides&&(l&&(s.faceTop=!1),r.faceBottom=!l),o&&o.collides&&(l&&(s.faceBottom=!1),o.faceTop=!l),a&&a.collides&&(l&&(s.faceLeft=!1),a.faceRight=!l),h&&h.collides&&(l&&(s.faceRight=!1),h.faceLeft=!l),s&&!s.collides&&s.resetFaces(),s};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(58),s=i(90),r=i(190),o=i(59),a=function(t,e,i,a,h){if(!s(e,i,h))return null;void 0===a&&(a=!0);var l=h.data[i][e],u=l&&l.collides;if(t instanceof n)null===h.data[i][e]&&(h.data[i][e]=new n(h,t.index,e,i,t.width,t.height)),h.data[i][e].copy(t);else{var c=t;null===h.data[i][e]?h.data[i][e]=new n(h,c,e,i,h.tileWidth,h.tileHeight):h.data[i][e].index=c}var d=h.data[i][e],f=-1!==h.collideIndexes.indexOf(d.index);return o(d,f),a&&u!==d.collides&&r(e,i,h),d};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=i.collideIndexes.indexOf(t);e&&-1===n?i.collideIndexes.push(t):e||-1===n||i.collideIndexes.splice(n,1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(27),s=i(91),r=i(92),o=i(58),a=function(t,e,i,a,h){for(var l=new s({tileWidth:i,tileHeight:a}),u=new r({name:t,tileWidth:i,tileHeight:a,format:n.ARRAY_2D,layers:[l]}),c=[],d=e.length,f=0,p=0;p<e.length;p++){c[p]=[];for(var v=e[p],g=0;g<v.length;g++){var y=parseInt(v[g],10);Number.isNaN(y)||-1===y?c[p][g]=h?null:new o(l,-1,g,p,i,a):c[p][g]=new o(l,y,g,p,i,a)}0===f&&(f=v.length)}return u.width=l.width=f,u.height=l.height=d,u.widthInPixels=l.widthInPixels=f*i,u.heightInPixels=l.heightInPixels=d*a,l.data=c,u};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t){var e=n(t,"targets",null);return null===e?e:("function"==typeof e&&(e=e.call()),Array.isArray(e)||(e=[e]),e)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t){return!!t.getStart&&"function"==typeof t.getStart}function n(t){return!!t.getEnd&&"function"==typeof t.getEnd}function s(t){return i(t)||n(t)}var r=function(t,e){var o,a=function(t,e,i){return i},h=function(t,e,i){return i},l=typeof e;if("number"===l)a=function(){return e};else if("string"===l){var u=e[0],c=parseFloat(e.substr(2));switch(u){case"+":a=function(t,e,i){return i+c};break;case"-":a=function(t,e,i){return i-c};break;case"*":a=function(t,e,i){return i*c};break;case"/":a=function(t,e,i){return i/c};break;default:a=function(){return parseFloat(e)}}}else"function"===l?a=e:"object"===l&&s(e)?(n(e)&&(a=e.getEnd),i(e)&&(h=e.getStart)):e.hasOwnProperty("value")&&(o=r(t,e.value));return o||(o={getEnd:a,getStart:h}),o};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={targets:null,delay:0,duration:1e3,ease:"Power0",easeParams:null,hold:0,repeat:0,repeatDelay:0,yoyo:!1,flipX:!1,flipY:!1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(14),r=i(8),o=i(95),a=new n({initialize:function(t,e,i){this.parent=t,this.parentIsTimeline=t.hasOwnProperty("isTimeline"),this.data=e,this.totalData=e.length,this.targets=i,this.totalTargets=i.length,this.useFrames=!1,this.timeScale=1,this.loop=0,this.loopDelay=0,this.loopCounter=0,this.completeDelay=0,this.countdown=0,this.offset=0,this.calculatedOffset=0,this.state=o.PENDING_ADD,this._pausedState=o.PENDING_ADD,this.paused=!1,this.elapsed=0,this.totalElapsed=0,this.duration=0,this.progress=0,this.totalDuration=0,this.totalProgress=0,this.callbacks={onComplete:null,onLoop:null,onRepeat:null,onStart:null,onUpdate:null,onYoyo:null},this.callbackScope},getValue:function(){return this.data[0].current},setTimeScale:function(t){return this.timeScale=t,this},getTimeScale:function(){return this.timeScale},isPlaying:function(){return this.state===o.ACTIVE},isPaused:function(){return this.state===o.PAUSED},hasTarget:function(t){return-1!==this.targets.indexOf(t)},updateTo:function(t,e,i){for(var n=0;n<this.totalData;n++){var s=this.data[n];if(s.key===t){s.end=e,i&&(s.start=s.current);break}}return this},restart:function(){this.state===o.REMOVED?(this.seek(0),this.parent.makeActive(this)):(this.stop(),this.play())},calcDuration:function(){for(var t=0,e=this.data,i=0;i<this.totalData;i++){var n=e[i];n.t1=n.duration+n.hold,n.yoyo&&(n.t1+=n.duration),n.t2=n.t1+n.repeatDelay,n.totalDuration=n.delay+n.t1,-1===n.repeat?n.totalDuration+=999999999999*n.t2:n.repeat>0&&(n.totalDuration+=n.t2*n.repeat),n.totalDuration>t&&(t=n.totalDuration)}this.duration=t,this.loopCounter=-1===this.loop?999999999999:this.loop,this.loopCounter>0?this.totalDuration=this.duration+this.completeDelay+(this.duration+this.loopDelay)*this.loopCounter:this.totalDuration=this.duration+this.completeDelay},init:function(){for(var t=this.data,e=this.totalTargets,i=0;i<this.totalData;i++){var n=t[i],s=n.target,r=n.gen;n.delay=r.delay(i,e,s),n.duration=r.duration(i,e,s),n.hold=r.hold(i,e,s),n.repeat=r.repeat(i,e,s),n.repeatDelay=r.repeatDelay(i,e,s)}return this.calcDuration(),this.progress=0,this.totalProgress=0,this.elapsed=0,this.totalElapsed=0,this.paused&&!this.parentIsTimeline?(this.state=o.PENDING_ADD,this._pausedState=o.INIT,!1):(this.state=o.INIT,!0)},nextState:function(){if(this.loopCounter>0){this.elapsed=0,this.progress=0,this.loopCounter--;var t=this.callbacks.onLoop;t&&(t.params[1]=this.targets,t.func.apply(t.scope,t.params)),this.resetTweenData(!0),this.loopDelay>0?(this.countdown=this.loopDelay,this.state=o.LOOP_DELAY):this.state=o.ACTIVE}else if(this.completeDelay>0)this.countdown=this.completeDelay,this.state=o.COMPLETE_DELAY;else{var e=this.callbacks.onComplete;e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)),this.state=o.PENDING_REMOVE}},pause:function(){if(this.state!==o.PAUSED)return this.paused=!0,this._pausedState=this.state,this.state=o.PAUSED,this},play:function(t){if(this.state!==o.ACTIVE){this.state!==o.PENDING_REMOVE&&this.state!==o.REMOVED||(this.init(),this.parent.makeActive(this),t=!0);var e=this.callbacks.onStart;this.parentIsTimeline?(this.resetTweenData(t),0===this.calculatedOffset?(e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)),this.state=o.ACTIVE):(this.countdown=this.calculatedOffset,this.state=o.OFFSET_DELAY)):this.paused?(this.paused=!1,this.parent.makeActive(this)):(this.resetTweenData(t),this.state=o.ACTIVE,e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)))}},resetTweenData:function(t){for(var e=this.data,i=0;i<this.totalData;i++){var n=e[i];n.progress=0,n.elapsed=0,n.repeatCounter=-1===n.repeat?999999999999:n.repeat,t?(n.start=n.getStartValue(n.target,n.key,n.start),n.end=n.getEndValue(n.target,n.key,n.end),n.current=n.start,n.state=o.PLAYING_FORWARD):n.delay>0?(n.elapsed=n.delay,n.state=o.DELAY):n.state=o.PENDING_RENDER}},resume:function(){return this.state===o.PAUSED?(this.paused=!1,this.state=this._pausedState):this.play(),this},seek:function(t){for(var e=this.data,i=0;i<this.totalData;i++){var n=this.totalDuration*t,s=e[i],r=0,o=0;n<=s.delay?(r=0,o=0):n>=s.totalDuration?(r=1,o=s.duration):n>s.delay&&n<=s.t1?(n=Math.max(0,n-s.delay),r=n/s.t1,o=s.duration*r):n>s.t1&&n<s.totalDuration&&(n-=s.delay,n-=s.t1,(n=n/s.t2%1*s.t2)>s.repeatDelay&&(r=n/s.t1,o=s.duration*r)),s.progress=r,s.elapsed=o;var a=s.ease(s.progress);s.current=s.start+(s.end-s.start)*a,s.target[s.key]=s.current}},setCallback:function(t,e,i,n){return this.callbacks[t]={func:e,scope:n,params:i},this},complete:function(t){if(void 0===t&&(t=0),t)this.countdown=t,this.state=o.COMPLETE_DELAY;else{var e=this.callbacks.onComplete;e&&(e.params[1]=this.targets,e.func.apply(e.scope,e.params)),this.state=o.PENDING_REMOVE}},stop:function(t){this.state===o.ACTIVE&&void 0!==t&&this.seek(t),this.state!==o.REMOVED&&(this.state=o.PENDING_REMOVE)},update:function(t,e){if(this.state===o.PAUSED)return!1;switch(this.useFrames&&(e=1*this.parent.timeScale),e*=this.timeScale,this.elapsed+=e,this.progress=Math.min(this.elapsed/this.duration,1),this.totalElapsed+=e,this.totalProgress=Math.min(this.totalElapsed/this.totalDuration,1),this.state){case o.ACTIVE:for(var i=!1,n=0;n<this.totalData;n++)this.updateTweenData(this,this.data[n],e)&&(i=!0);i||this.nextState();break;case o.LOOP_DELAY:this.countdown-=e,this.countdown<=0&&(this.state=o.ACTIVE);break;case o.OFFSET_DELAY:if(this.countdown-=e,this.countdown<=0){var s=this.callbacks.onStart;s&&(s.params[1]=this.targets,s.func.apply(s.scope,s.params)),this.state=o.ACTIVE}break;case o.COMPLETE_DELAY:if(this.countdown-=e,this.countdown<=0){var r=this.callbacks.onComplete;r&&r.func.apply(r.scope,r.params),this.state=o.PENDING_REMOVE}}return this.state===o.PENDING_REMOVE},setStateFromEnd:function(t,e,i){if(e.yoyo){e.elapsed=i,e.progress=i/e.duration,e.flipX&&e.target.toggleFlipX(),e.flipY&&e.target.toggleFlipY();var n=t.callbacks.onYoyo;return n&&(n.params[1]=e.target,n.func.apply(n.scope,n.params)),e.start=e.getStartValue(e.target,e.key,e.start),o.PLAYING_BACKWARD}if(e.repeatCounter>0){e.repeatCounter--,e.elapsed=i,e.progress=i/e.duration,e.flipX&&e.target.toggleFlipX(),e.flipY&&e.target.toggleFlipY();var s=t.callbacks.onRepeat;return s&&(s.params[1]=e.target,s.func.apply(s.scope,s.params)),e.start=e.getStartValue(e.target,e.key,e.start),e.end=e.getEndValue(e.target,e.key,e.start),e.repeatDelay>0?(e.elapsed=e.repeatDelay-i,e.current=e.start,e.target[e.key]=e.current,o.REPEAT_DELAY):o.PLAYING_FORWARD}return o.COMPLETE},setStateFromStart:function(t,e,i){if(e.repeatCounter>0){e.repeatCounter--,e.elapsed=i,e.progress=i/e.duration,e.flipX&&e.target.toggleFlipX(),e.flipY&&e.target.toggleFlipY();var n=t.callbacks.onRepeat;return n&&(n.params[1]=e.target,n.func.apply(n.scope,n.params)),e.end=e.getEndValue(e.target,e.key,e.start),e.repeatDelay>0?(e.elapsed=e.repeatDelay-i,e.current=e.start,e.target[e.key]=e.current,o.REPEAT_DELAY):o.PLAYING_FORWARD}return o.COMPLETE},updateTweenData:function(t,e,i){switch(e.state){case o.PLAYING_FORWARD:case o.PLAYING_BACKWARD:if(!e.target){e.state=o.COMPLETE;break}var n=e.elapsed,s=e.duration,r=0;n+=i,n>s&&(r=n-s,n=s);var a,h=e.state===o.PLAYING_FORWARD,l=n/s;a=h?e.ease(l):e.ease(1-l),e.current=e.start+(e.end-e.start)*a,e.target[e.key]=e.current,e.elapsed=n,e.progress=l;var u=t.callbacks.onUpdate;u&&(u.params[1]=e.target,u.func.apply(u.scope,u.params)),1===l&&(h?e.hold>0?(e.elapsed=e.hold-r,e.state=o.HOLD_DELAY):e.state=this.setStateFromEnd(t,e,r):e.state=this.setStateFromStart(t,e,r));break;case o.DELAY:e.elapsed-=i,e.elapsed<=0&&(e.elapsed=Math.abs(e.elapsed),e.state=o.PENDING_RENDER);break;case o.REPEAT_DELAY:e.elapsed-=i,e.elapsed<=0&&(e.elapsed=Math.abs(e.elapsed),e.state=o.PLAYING_FORWARD);break;case o.HOLD_DELAY:e.elapsed-=i,e.elapsed<=0&&(e.state=this.setStateFromEnd(t,e,Math.abs(e.elapsed)));break;case o.PENDING_RENDER:e.target?(e.start=e.getStartValue(e.target,e.key,e.target[e.key]),e.end=e.getEndValue(e.target,e.key,e.start),e.current=e.start,e.target[e.key]=e.start,e.state=o.PLAYING_FORWARD):e.state=o.COMPLETE}return e.state!==o.COMPLETE}});a.TYPES=["onComplete","onLoop","onRepeat","onStart","onUpdate","onYoyo"],r.register("tween",function(t){return this.scene.sys.tweens.add(t)}),s.register("tween",function(t){return this.scene.sys.tweens.create(t)}),t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r,o,a,h,l,u,c,d){return{target:t,key:e,getEndValue:i,getStartValue:n,ease:s,duration:0,totalDuration:0,delay:0,yoyo:a,hold:0,repeat:0,repeatDelay:0,flipX:c,flipY:d,progress:0,elapsed:0,repeatCounter:0,start:0,current:0,end:0,t1:0,t2:0,gen:{delay:r,duration:o,hold:h,repeat:l,repeatDelay:u},state:0}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=t.length);var n=e+Math.floor(Math.random()*i);return void 0===t[n]?null:t[n]};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Matrix:i(1053),Add:i(1026),AddAt:i(1027),BringToTop:i(1028),CountAllMatching:i(1029),Each:i(1030),EachInRange:i(1031),FindClosestInSorted:i(416),GetAll:i(1032),GetFirst:i(1033),GetRandom:i(199),MoveDown:i(1034),MoveTo:i(1035),MoveUp:i(1036),NumberArray:i(1037),NumberArrayStep:i(1038),QuickSelect:i(417),Range:i(418),Remove:i(1039),RemoveAt:i(1040),RemoveBetween:i(1041),RemoveRandomElement:i(1042),Replace:i(1043),RotateLeft:i(419),RotateRight:i(420),SafeRange:i(60),SendToBack:i(1044),SetAll:i(1045),Shuffle:i(121),SpliceOne:i(96),StableSort:i(122),Swap:i(1046)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){if(!Array.isArray(t)||t.length<2||!Array.isArray(t[0]))return!1;for(var e=t[0].length,i=1;i<t.length;i++)if(t[i].length!==e)return!1;return!0};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=0),void 0===i&&(i=" "),void 0===n&&(n=3),t=t.toString();var s=0;if(e+1>=t.length)switch(n){case 1:t=new Array(e+1-t.length).join(i)+t;break;case 3:var r=Math.ceil((s=e-t.length)/2),o=s-r;t=new Array(o+1).join(i)+t+new Array(r+1).join(i);break;default:t+=new Array(e+1-t.length).join(i)}return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Angle:i(432),Call:i(433),GetFirst:i(434),GetLast:i(435),GridAlign:i(436),IncAlpha:i(437),IncX:i(438),IncXY:i(439),IncY:i(440),PlaceOnCircle:i(441),PlaceOnEllipse:i(442),PlaceOnLine:i(443),PlaceOnRectangle:i(444),PlaceOnTriangle:i(445),PlayAnimation:i(446),PropertyValueInc:i(29),PropertyValueSet:i(22),RandomCircle:i(447),RandomEllipse:i(448),RandomLine:i(449),RandomRectangle:i(450),RandomTriangle:i(451),Rotate:i(452),RotateAround:i(453),RotateAroundDistance:i(454),ScaleX:i(455),ScaleXY:i(456),ScaleY:i(457),SetAlpha:i(458),SetBlendMode:i(459),SetDepth:i(460),SetHitArea:i(461),SetOrigin:i(462),SetRotation:i(463),SetScale:i(464),SetScaleX:i(465),SetScaleY:i(466),SetTint:i(467),SetVisible:i(468),SetX:i(469),SetXY:i(470),SetY:i(471),ShiftPosition:i(472),Shuffle:i(473),SmootherStep:i(475),SmoothStep:i(474),Spread:i(476),ToggleVisible:i(477),WrapInRectangle:i(478)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(0),r=i(416),o=i(205),a=i(5),h=new s({initialize:function(t,e,i){this.manager=t,this.key=e,this.type="frame",this.frames=this.getFrames(t.textureManager,a(i,"frames",[]),a(i,"defaultTextureKey",null)),this.frameRate=a(i,"frameRate",null),this.duration=a(i,"duration",null),null===this.duration&&null===this.frameRate?(this.frameRate=24,this.duration=this.frameRate/this.frames.length*1e3):this.duration&&null===this.frameRate?this.frameRate=this.frames.length/(this.duration/1e3):this.duration=this.frames.length/this.frameRate*1e3,this.msPerFrame=1e3/this.frameRate,this.skipMissedFrames=a(i,"skipMissedFrames",!0),this.delay=a(i,"delay",0),this.repeat=a(i,"repeat",0),this.repeatDelay=a(i,"repeatDelay",0),this.yoyo=a(i,"yoyo",!1),this.showOnStart=a(i,"showOnStart",!1),this.hideOnComplete=a(i,"hideOnComplete",!1),this.paused=!1,this.manager.on("pauseall",this.pause,this),this.manager.on("resumeall",this.resume,this)},addFrame:function(t){return this.addFrameAt(this.frames.length,t)},addFrameAt:function(t,e){var i=this.getFrames(this.manager.textureManager,e);if(i.length>0){if(0===t)this.frames=i.concat(this.frames);else if(t===this.frames.length)this.frames=this.frames.concat(i);else{var n=this.frames.slice(0,t),s=this.frames.slice(t);this.frames=n.concat(i,s)}this.updateFrameSequence()}return this},checkFrame:function(t){return t>=0&&t<this.frames.length},completeAnimation:function(t){this.hideOnComplete&&(t.parent.visible=!1),t.stop()},getFirstTick:function(t,e){void 0===e&&(e=!0),t.accumulator=0,t.nextTick=t.msPerFrame+t.currentFrame.duration,e&&(t.nextTick+=t._delay)},getFrameAt:function(t){return this.frames[t]},getFrames:function(t,e,i){var n,s,r,h,l=[],u=1;if("string"==typeof e){h=e;var c=t.get(h),d=c.getFrameNames();e=[],d.forEach(function(t,i){e.push({key:h,frame:i})})}if(!Array.isArray(e)||0===e.length)return l;for(r=0;r<e.length;r++){var f=e[r],p=a(f,"key",i);if(p){var v=a(f,"frame",0),g=t.getFrame(p,v);s=new o(p,v,u,g),s.duration=a(f,"duration",0),s.isFirst=!n,n&&(n.nextFrame=s,s.prevFrame=n),l.push(s),n=s,u++}}if(l.length>0){s.isLast=!0,s.nextFrame=l[0],l[0].prevFrame=s;var y=1/(l.length-1);for(r=0;r<l.length;r++)l[r].progress=r*y}return l},getNextTick:function(t){t.accumulator-=t.nextTick,t.nextTick=t.msPerFrame+t.currentFrame.duration},load:function(t,e){e>=this.frames.length&&(e=0),t.currentAnim!==this&&(t.currentAnim=this,t.frameRate=this.frameRate,t.duration=this.duration,t.msPerFrame=this.msPerFrame,t.skipMissedFrames=this.skipMissedFrames,t._timeScale=1,t._delay=this.delay,t._repeat=this.repeat,t._repeatDelay=this.repeatDelay,t._yoyo=this.yoyo),t.updateFrame(this.frames[e])},getFrameByProgress:function(t){return t=n(t,0,1),r(t,this.frames,"progress")},nextFrame:function(t){var e=t.currentFrame;e.isLast?t.yoyo?(t.forward=!1,t.updateFrame(e.prevFrame),this.getNextTick(t)):t.repeatCounter>0?this.repeatAnimation(t):this.completeAnimation(t):(t.updateFrame(e.nextFrame),this.getNextTick(t))},previousFrame:function(t){var e=t.currentFrame;e.isFirst?t.repeatCounter>0?this.repeatAnimation(t):this.completeAnimation(t):(t.updateFrame(e.prevFrame),this.getNextTick(t))},removeFrame:function(t){var e=this.frames.indexOf(t);return-1!==e&&this.removeFrameAt(e),this},removeFrameAt:function(t){return this.frames.splice(t,1),this.updateFrameSequence(),this},repeatAnimation:function(t){if(2===t._pendingStop)return this.completeAnimation(t);t._repeatDelay>0&&!1===t.pendingRepeat?(t.pendingRepeat=!0,t.accumulator-=t.nextTick,t.nextTick+=t._repeatDelay):(t.repeatCounter--,t.forward=!0,t.updateFrame(t.currentFrame.nextFrame),t.isPlaying&&(this.getNextTick(t),t.pendingRepeat=!1,t.parent.emit("animationrepeat",this,t.currentFrame,t.repeatCounter)))},setFrame:function(t){t.forward?this.nextFrame(t):this.previousFrame(t)},toJSON:function(){var t={key:this.key,type:this.type,frames:[],frameRate:this.frameRate,duration:this.duration,skipMissedFrames:this.skipMissedFrames,delay:this.delay,repeat:this.repeat,repeatDelay:this.repeatDelay,yoyo:this.yoyo,showOnStart:this.showOnStart,hideOnComplete:this.hideOnComplete};return this.frames.forEach(function(e){t.frames.push(e.toJSON())}),t},updateFrameSequence:function(){for(var t=this.frames.length,e=1/(t-1),i=0;i<t;i++){var n=this.frames[i];n.index=i+1,n.isFirst=!1,n.isLast=!1,n.progress=i*e,0===i?(n.isFirst=!0,n.isLast=1===t,n.prevFrame=this.frames[t-1],n.nextFrame=this.frames[i+1]):i===t-1?(n.isLast=!0,n.prevFrame=this.frames[t-2],n.nextFrame=this.frames[0]):t>1&&(n.prevFrame=this.frames[i-1],n.nextFrame=this.frames[i+1])}return this},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this},destroy:function(){this.manager.off("pauseall",this.pause,this),this.manager.off("resumeall",this.resume,this),this.manager.remove(this.key);for(var t=0;t<this.frames.length;t++)this.frames[t].destroy();this.frames=[],this.manager=null}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n){this.textureKey=t,this.textureFrame=e,this.index=i,this.frame=n,this.isFirst=!1,this.isLast=!1,this.prevFrame=null,this.nextFrame=null,this.duration=0,this.progress=0},toJSON:function(){return{key:this.textureKey,frame:this.textureFrame,duration:this.duration}},destroy:function(){this.frame=void 0}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(204),s=i(0),r=i(186),o=i(12),a=i(5),h=i(202),l=new s({Extends:o,initialize:function(t){o.call(this),this.game=t,this.textureManager=null,this.globalTimeScale=1,this.anims=new r,this.paused=!1,this.name="AnimationManager",t.events.once("boot",this.boot,this)},boot:function(){this.textureManager=this.game.textures,this.game.events.once("destroy",this.destroy,this)},add:function(t,e){return this.anims.has(t)?void console.warn("Animation with key",t,"already exists"):(e.key=t,this.anims.set(t,e),this.emit("add",t,e),this)},create:function(t){var e=t.key;if(!e||this.anims.has(e))return void console.warn("Invalid Animation Key, or Key already in use: "+e);var i=new n(this,e,t);return this.anims.set(e,i),this.emit("add",e,i),i},fromJSON:function(t,e){void 0===e&&(e=!1),e&&this.anims.clear(),"string"==typeof t&&(t=JSON.parse(t));var i=[];if(t.hasOwnProperty("anims")&&Array.isArray(t.anims)){for(var n=0;n<t.anims.length;n++)i.push(this.create(t.anims[n]));t.hasOwnProperty("globalTimeScale")&&(this.globalTimeScale=t.globalTimeScale)}else t.hasOwnProperty("key")&&"frame"===t.type&&i.push(this.create(t));return i},generateFrameNames:function(t,e){var i=a(e,"prefix",""),n=a(e,"start",0),s=a(e,"end",0),r=a(e,"suffix",""),o=a(e,"zeroPad",0),l=a(e,"outputArray",[]),u=a(e,"frames",!1),c=this.textureManager.get(t);if(!c)return l;var d=n<s?1:-1;s+=d;var f,p;if(Array.isArray(u))for(f=0;f<u.length;f++)p=i+h(u[f],o,"0",1)+r,c.has(p)&&l.push({key:t,frame:p});else for(f=n;f!==s;f+=d)p=i+h(f,o,"0",1)+r,c.has(p)&&l.push({key:t,frame:p});return l},generateFrameNumbers:function(t,e){var i=a(e,"start",0),n=a(e,"end",-1),s=a(e,"first",!1),r=a(e,"outputArray",[]),o=a(e,"frames",!1),h=this.textureManager.get(t);if(!h)return r;s&&h.has(s)&&r.push({key:t,frame:s});var l;if(Array.isArray(o))for(l=0;l<o.length;l++)h.has(o[l])&&r.push({key:t,frame:o[l]});else for(-1===n&&(n=h.frameTotal),l=i;l<=n;l++)h.has(l)&&r.push({key:t,frame:l});return r},get:function(t){return this.anims.get(t)},load:function(t,e,i){var n=this.get(e);return n&&n.load(t,i),t},pauseAll:function(){return this.paused||(this.paused=!0,this.emit("pauseall")),this},play:function(t,e){if(Array.isArray(e)||(e=[e]),this.get(t)){for(var i=0;i<e.length;i++)e[i].anims.play(t);return this}},remove:function(t){var e=this.get(t);return e&&(this.emit("remove",t,e),this.anims.delete(t)),e},resumeAll:function(){return this.paused&&(this.paused=!1,this.emit("resumeall")),this},staggerPlay:function(t,e,i){if(void 0===i&&(i=0),Array.isArray(e)||(e=[e]),this.get(t)){for(var n=0;n<e.length;n++)e[n].anims.delayedPlay(i*n,t);return this}},toJSON:function(t){if(void 0!==t&&""!==t)return this.anims.get(t).toJSON();var e={anims:[],globalTimeScale:this.globalTimeScale};return this.anims.each(function(t,i){e.anims.push(i.toJSON())}),e},destroy:function(){this.anims.clear(),this.textureManager=null,this.game=null}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(186),r=i(12),o=new n({initialize:function(){this.entries=new s,this.events=new r},add:function(t,e){return this.entries.set(t,e),this.events.emit("add",this,t,e),this},has:function(t){return this.entries.has(t)},exists:function(t){return this.entries.has(t)},get:function(t){return this.entries.get(t)},remove:function(t){var e=this.get(t);return e&&(this.entries.delete(t),this.events.emit("remove",this,t,e.data)),this},destroy:function(){this.entries.clear(),this.events.removeAllListeners(),this.entries=null,this.events=null}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(207),s=i(0),r=new s({initialize:function(t){this.game=t,this.binary=new n,this.bitmapFont=new n,this.json=new n,this.physics=new n,this.shader=new n,this.audio=new n,this.text=new n,this.obj=new n,this.tilemap=new n,this.xml=new n,this.custom={},this.game.events.once("destroy",this.destroy,this)},addCustom:function(t){return this.custom.hasOwnProperty(t)||(this.custom[t]=new n),this.custom[t]},destroy:function(){for(var t=["binary","bitmapFont","json","physics","shader","audio","text","obj","tilemap","xml"],e=0;e<t.length;e++)this[t[e]].destroy(),this[t[e]]=null;for(var i in this.custom)this.custom[i].destroy();this.custom=null,this.game=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Fade:i(488),Flash:i(489),Shake:i(490)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(5),r=new n({initialize:function(t){this.camera=s(t,"camera",null),this.left=s(t,"left",null),this.right=s(t,"right",null),this.up=s(t,"up",null),this.down=s(t,"down",null),this.zoomIn=s(t,"zoomIn",null),this.zoomOut=s(t,"zoomOut",null),this.zoomSpeed=s(t,"zoomSpeed",.01),this.speedX=0,this.speedY=0;var e=s(t,"speed",null);"number"==typeof e?(this.speedX=e,this.speedY=e):(this.speedX=s(t,"speed.x",0),this.speedY=s(t,"speed.y",0)),this._zoom=0,this.active=null!==this.camera},start:function(){return this.active=null!==this.camera,this},stop:function(){return this.active=!1,this},setCamera:function(t){return this.camera=t,this},update:function(t){if(this.active){void 0===t&&(t=1);var e=this.camera;this.up&&this.up.isDown?e.scrollY-=this.speedY*t|0:this.down&&this.down.isDown&&(e.scrollY+=this.speedY*t|0),this.left&&this.left.isDown?e.scrollX-=this.speedX*t|0:this.right&&this.right.isDown&&(e.scrollX+=this.speedX*t|0),this.zoomIn&&this.zoomIn.isDown?(e.zoom-=this.zoomSpeed,e.zoom<.1&&(e.zoom=.1)):this.zoomOut&&this.zoomOut.isDown&&(e.zoom+=this.zoomSpeed)}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(5),r=new n({initialize:function(t){this.camera=s(t,"camera",null),this.left=s(t,"left",null),this.right=s(t,"right",null),this.up=s(t,"up",null),this.down=s(t,"down",null),this.zoomIn=s(t,"zoomIn",null),this.zoomOut=s(t,"zoomOut",null),this.zoomSpeed=s(t,"zoomSpeed",.01),this.accelX=0,this.accelY=0;var e=s(t,"acceleration",null);"number"==typeof e?(this.accelX=e,this.accelY=e):(this.accelX=s(t,"acceleration.x",0),this.accelY=s(t,"acceleration.y",0)),this.dragX=0,this.dragY=0;var i=s(t,"drag",null);"number"==typeof i?(this.dragX=i,this.dragY=i):(this.dragX=s(t,"drag.x",0),this.dragY=s(t,"drag.y",0)),this.maxSpeedX=0,this.maxSpeedY=0;var n=s(t,"maxSpeed",null);"number"==typeof n?(this.maxSpeedX=n,this.maxSpeedY=n):(this.maxSpeedX=s(t,"maxSpeed.x",0),this.maxSpeedY=s(t,"maxSpeed.y",0)),this._speedX=0,this._speedY=0,this._zoom=0,this.active=null!==this.camera},start:function(){return this.active=null!==this.camera,this},stop:function(){return this.active=!1,this},setCamera:function(t){return this.camera=t,this},update:function(t){if(this.active){void 0===t&&(t=1);var e=this.camera;this._speedX>0?(this._speedX-=this.dragX*t,this._speedX<0&&(this._speedX=0)):this._speedX<0&&(this._speedX+=this.dragX*t,this._speedX>0&&(this._speedX=0)),this._speedY>0?(this._speedY-=this.dragY*t,this._speedY<0&&(this._speedY=0)):this._speedY<0&&(this._speedY+=this.dragY*t,this._speedY>0&&(this._speedY=0)),this.up&&this.up.isDown?(this._speedY+=this.accelY,this._speedY>this.maxSpeedY&&(this._speedY=this.maxSpeedY)):this.down&&this.down.isDown&&(this._speedY-=this.accelY,this._speedY<-this.maxSpeedY&&(this._speedY=-this.maxSpeedY)),this.left&&this.left.isDown?(this._speedX+=this.accelX,this._speedX>this.maxSpeedX&&(this._speedX=this.maxSpeedX)):this.right&&this.right.isDown&&(this._speedX-=this.accelX,this._speedX<-this.maxSpeedX&&(this._speedX=-this.maxSpeedX)),this.zoomIn&&this.zoomIn.isDown?this._zoom=-this.zoomSpeed:this.zoomOut&&this.zoomOut.isDown?this._zoom=this.zoomSpeed:this._zoom=0,0!==this._speedX&&(e.scrollX-=this._speedX*t|0),0!==this._speedY&&(e.scrollY-=this._speedY*t|0),0!==this._zoom&&(e.zoom+=this._zoom,e.zoom<.1&&(e.zoom=.1))}},destroy:function(){this.camera=null,this.left=null,this.right=null,this.up=null,this.down=null,this.zoomIn=null,this.zoomOut=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(125),s=i(0),r=i(71),o=new r,a=new s({Extends:n,initialize:function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),n.call(this,t),this.viewportWidth=e,this.viewportHeight=i,this._zoom=1,this.near=0,this.update()},setToOrtho:function(t,e,i){void 0===e&&(e=this.viewportWidth),void 0===i&&(i=this.viewportHeight);var n=this.zoom;return this.up.set(0,t?-1:1,0),this.direction.set(0,0,t?1:-1),this.position.set(n*e/2,n*i/2,0),this.viewportWidth=e,this.viewportHeight=i,this.update()},update:function(){var t=this.viewportWidth,e=this.viewportHeight,i=Math.abs(this.near),n=Math.abs(this.far),s=this.zoom;return 0===t||0===e?this:(this.projection.ortho(s*-t/2,s*t/2,s*-e/2,s*e/2,i,n),o.copy(this.position).add(this.direction),this.view.lookAt(this.position,o,this.up),this.combined.copy(this.projection).multiply(this.view),this.invProjectionView.copy(this.combined).invert(),this.billboardMatrixDirty=!0,this.updateChildren(),this)},zoom:{get:function(){return this._zoom},set:function(t){this._zoom=t,this.update()}}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(125),s=i(0),r=i(71),o=new r,a=new s({Extends:n,initialize:function(t,e,i,s){void 0===e&&(e=80),void 0===i&&(i=0),void 0===s&&(s=0),n.call(this,t),this.viewportWidth=i,this.viewportHeight=s,this.fieldOfView=e*Math.PI/180,this.update()},setFOV:function(t){return this.fieldOfView=t*Math.PI/180,this},update:function(){var t=this.viewportWidth/this.viewportHeight;return this.projection.perspective(this.fieldOfView,t,Math.abs(this.near),Math.abs(this.far)),o.copy(this.position).add(this.direction),this.view.lookAt(this.position,o,this.up),this.combined.copy(this.projection).multiply(this.view),this.invProjectionView.copy(this.combined).invert(),this.billboardMatrixDirty=!0,this.updateChildren(),this}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(215),s=i(26),r=i(5),o=function(t){var e=r(t,"data",[]),i=r(t,"canvas",null),o=r(t,"palette",n),a=r(t,"pixelWidth",1),h=r(t,"pixelHeight",a),l=r(t,"resizeCanvas",!0),u=r(t,"clearCanvas",!0),c=r(t,"preRender",null),d=r(t,"postRender",null),f=Math.floor(Math.abs(e[0].length*a)),p=Math.floor(Math.abs(e.length*h));i||(i=s.create2D(this,f,p),l=!1,u=!1),l&&(i.width=f,i.height=p);var v=i.getContext("2d");u&&v.clearRect(0,0,f,p),c&&c(i,v);for(var g=0;g<e.length;g++)for(var y=e[g],m=0;m<y.length;m++){var x=y[m];"."!==x&&" "!==x&&(v.fillStyle=o[x],v.fillRect(m*a,g*h,a,h))}return d&&d(i,v),i};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#9D9D9D",2:"#FFF",3:"#BE2633",4:"#E06F8B",5:"#493C2B",6:"#A46422",7:"#EB8931",8:"#F7E26B",9:"#2F484E",A:"#44891A",B:"#A3CE27",C:"#1B2632",D:"#005784",E:"#31A2F2",F:"#B2DCEF"}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(338),r=i(62),o=i(4),a=new n({Extends:r,initialize:function(t,e,i,n){r.call(this,"CubicBezierCurve"),Array.isArray(t)&&(n=new o(t[6],t[7]),i=new o(t[4],t[5]),e=new o(t[2],t[3]),t=new o(t[0],t[1])),this.p0=t,this.p1=e,this.p2=i,this.p3=n},getStartPoint:function(t){return void 0===t&&(t=new o),t.copy(this.p0)},getResolution:function(t){return t},getPoint:function(t,e){void 0===e&&(e=new o);var i=this.p0,n=this.p1,r=this.p2,a=this.p3;return e.set(s(t,i.x,n.x,r.x,a.x),s(t,i.y,n.y,r.y,a.y))},draw:function(t,e){void 0===e&&(e=32);var i=this.getPoints(e);t.beginPath(),t.moveTo(this.p0.x,this.p0.y);for(var n=1;n<i.length;n++)t.lineTo(i[n].x,i[n].y);return t.strokePath(),t},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y]}}});a.fromJSON=function(t){var e=t.points,i=new o(e[0],e[1]),n=new o(e[2],e[3]),s=new o(e[4],e[5]),r=new o(e[6],e[7]);return new a(i,n,s,r)},t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(62),r=i(48),o=i(5),a=i(168),h=i(4),l=new n({Extends:s,initialize:function(t,e,i,n,a,l,u,c){if("object"==typeof t){var d=t;t=o(d,"x",0),e=o(d,"y",0),i=o(d,"xRadius",0),n=o(d,"yRadius",i),a=o(d,"startAngle",0),l=o(d,"endAngle",360),u=o(d,"clockwise",!1),c=o(d,"rotation",0)}else void 0===n&&(n=i),void 0===a&&(a=0),void 0===l&&(l=360),void 0===u&&(u=!1),void 0===c&&(c=0);s.call(this,"EllipseCurve"),this.p0=new h(t,e),this._xRadius=i,this._yRadius=n,this._startAngle=r(a),this._endAngle=r(l),this._clockwise=u,this._rotation=r(c)},getStartPoint:function(t){return void 0===t&&(t=new h),this.getPoint(0,t)},getResolution:function(t){return 2*t},getPoint:function(t,e){void 0===e&&(e=new h);for(var i=2*Math.PI,n=this._endAngle-this._startAngle,s=Math.abs(n)<Number.EPSILON;n<0;)n+=i;for(;n>i;)n-=i;n<Number.EPSILON&&(n=s?0:i),this._clockwise&&!s&&(n===i?n=-i:n-=i);var r=this._startAngle+t*n,o=this.p0.x+this._xRadius*Math.cos(r),a=this.p0.y+this._yRadius*Math.sin(r);if(0!==this._rotation){var l=Math.cos(this._rotation),u=Math.sin(this._rotation),c=o-this.p0.x,d=a-this.p0.y;o=c*l-d*u+this.p0.x,a=c*u+d*l+this.p0.y}return e.set(o,a)},setXRadius:function(t){return this.xRadius=t,this},setYRadius:function(t){return this.yRadius=t,this},setWidth:function(t){return this.xRadius=2*t,this},setHeight:function(t){return this.yRadius=2*t,this},setStartAngle:function(t){return this.startAngle=t,this},setEndAngle:function(t){return this.endAngle=t,this},setClockwise:function(t){return this.clockwise=t,this},setRotation:function(t){return this.rotation=t,this},x:{get:function(){return this.p0.x},set:function(t){this.p0.x=t}},y:{get:function(){return this.p0.y},set:function(t){this.p0.y=t}},xRadius:{get:function(){return this._xRadius},set:function(t){this._xRadius=t}},yRadius:{get:function(){return this._yRadius},set:function(t){this._yRadius=t}},startAngle:{get:function(){return a(this._startAngle)},set:function(t){this._startAngle=r(t)}},endAngle:{get:function(){return a(this._endAngle)},set:function(t){this._endAngle=r(t)}},clockwise:{get:function(){return this._clockwise},set:function(t){this._clockwise=t}},rotation:{get:function(){return this._rotation},set:function(t){this._rotation=r(t)}},toJSON:function(){return{type:this.type,x:this.p0.x,y:this.p0.y,xRadius:this._xRadius,yRadius:this._yRadius,startAngle:a(this._startAngle),endAngle:a(this._endAngle),clockwise:this._clockwise,rotation:a(this._rotation)}}});l.fromJSON=function(t){return new l(t)},t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(62),r=i(154),o=i(9),a=i(4),h=new a,l=new n({Extends:s,initialize:function(t,e){s.call(this,"LineCurve"),Array.isArray(t)&&(e=new a(t[2],t[3]),t=new a(t[0],t[1])),this.p0=t,this.p1=e},getBounds:function(t){return void 0===t&&(t=new o),r([this.p0,this.p1],t)},getStartPoint:function(t){return void 0===t&&(t=new a),t.copy(this.p0)},getResolution:function(t){return void 0===t&&(t=1),t},getPoint:function(t,e){return void 0===e&&(e=new a),1===t?e.copy(this.p1):(e.copy(this.p1).subtract(this.p0).scale(t).add(this.p0),e)},getPointAt:function(t,e){return this.getPoint(t,e)},getTangent:function(){return h.copy(this.p1).subtract(this.p0).normalize()},draw:function(t){return t.lineBetween(this.p0.x,this.p0.y,this.p1.x,this.p1.y),t},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y]}}});l.fromJSON=function(t){var e=t.points,i=new a(e[0],e[1]),n=new a(e[2],e[3]);return new l(i,n)},t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(62),r=i(339),o=i(4),a=new n({Extends:s,initialize:function(t,e,i){s.call(this,"QuadraticBezier"),Array.isArray(t)&&(i=new o(t[4],t[5]),e=new o(t[2],t[3]),t=new o(t[0],t[1])),this.p0=t,this.p1=e,this.p2=i},getStartPoint:function(t){return void 0===t&&(t=new o),t.copy(this.p0)},getResolution:function(t){return t},getPoint:function(t,e){void 0===e&&(e=new o);var i=this.p0,n=this.p1,s=this.p2;return e.set(r(t,i.x,n.x,s.x),r(t,i.y,n.y,s.y))},draw:function(t,e){void 0===e&&(e=32);var i=this.getPoints(e);t.beginPath(),t.moveTo(this.p0.x,this.p0.y);for(var n=1;n<i.length;n++)t.lineTo(i[n].x,i[n].y);return t.strokePath(),t},toJSON:function(){return{type:this.type,points:[this.p0.x,this.p0.y,this.p1.x,this.p1.y,this.p2.x,this.p2.y]}}});a.fromJSON=function(t){var e=t.points,i=new o(e[0],e[1]),n=new o(e[2],e[3]),s=new o(e[4],e[5]);return new a(i,n,s)},t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(165),s=i(0),r=i(62),o=i(4),a=new s({Extends:r,initialize:function(t){void 0===t&&(t=[]),r.call(this,"SplineCurve"),this.points=[],this.addPoints(t)},addPoints:function(t){for(var e=0;e<t.length;e++){var i=new o;"number"==typeof t[e]?(i.x=t[e],i.y=t[e+1],e++):Array.isArray(t[e])?(i.x=t[e][0],i.y=t[e][1]):(i.x=t[e].x,i.y=t[e].y),this.points.push(i)}return this},addPoint:function(t,e){var i=new o(t,e);return this.points.push(i),i},getStartPoint:function(t){return void 0===t&&(t=new o),t.copy(this.points[0])},getResolution:function(t){return t*this.points.length},getPoint:function(t,e){void 0===e&&(e=new o);var i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,h=i[0===r?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],c=i[r>i.length-3?i.length-1:r+2];return e.set(n(a,h.x,l.x,u.x,c.x),n(a,h.y,l.y,u.y,c.y))},toJSON:function(){for(var t=[],e=0;e<this.points.length;e++)t.push(this.points[e].x),t.push(this.points[e].y);return{type:this.type,points:t}}});a.fromJSON=function(t){return new a(t.points)},t.exports=a},function(t,e,i){function n(){var t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",e="AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",i=new Image;return i.onload=function(){var n=new Image;n.onload=function(){var t=r.create(n,6,1),e=t.getContext("2d");if(e.globalCompositeOperation="multiply",e.drawImage(i,0,0),e.drawImage(n,2,0),!e.getImageData(2,0,1,1))return!1;var s=e.getImageData(2,0,1,1).data;r.remove(n),o.supportNewBlendModes=255===s[0]&&0===s[1]&&0===s[2]},n.src=t+"/wCKxvRF"+e},i.src=t+"AP804Oa6"+e,!1}function s(){var t=r.create(this,2,1),e=t.getContext("2d");e.fillStyle="rgba(10, 20, 30, 0.5)",e.fillRect(0,0,1,1);var i=e.getImageData(0,0,1,1);if(null===i)return!1;e.putImageData(i,1,0);var n=e.getImageData(1,0,1,1);return n.data[0]===i.data[0]&&n.data[1]===i.data[1]&&n.data[2]===i.data[2]&&n.data[3]===i.data[3]}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var r=i(26),o={supportInverseAlpha:!1,supportNewBlendModes:!1};t.exports=function(){return void 0!==document&&(o.supportNewBlendModes=n(),o.supportInverseAlpha=s()),o}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(63),r=i(35),o=i(65),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(32),r=i(35),o=i(36),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(33),r=i(35),o=i(37),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(232),s=i(63),r=i(64),o=function(t,e,i,o){return void 0===i&&(i=0),void 0===o&&(o=0),n(t,s(e)+i,r(e)+o),t};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(64),s=i(32),r=i(66),o=i(36),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(127),s=[];s[n.BOTTOM_CENTER]=i(222),s[n.BOTTOM_LEFT]=i(223),s[n.BOTTOM_RIGHT]=i(224),s[n.CENTER]=i(225),s[n.LEFT_CENTER]=i(226),s[n.RIGHT_CENTER]=i(228),s[n.TOP_CENTER]=i(229),s[n.TOP_LEFT]=i(230),s[n.TOP_RIGHT]=i(231);var r=function(t,e,i,n,r){return s[i](t,e,n,r)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(64),s=i(33),r=i(66),o=i(37),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(63),s=i(34),r=i(65),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)+i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(32),s=i(34),r=i(36),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)-i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(33),s=i(34),r=i(37),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)+i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(65),s=i(66),r=function(t,e,i){return n(t,e),s(t,i)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setCrisp:function(t){return["optimizeSpeed","crisp-edges","-moz-crisp-edges","-webkit-optimize-contrast","optimize-contrast","pixelated"].forEach(function(e){t.style["image-rendering"]=e}),t.style.msInterpolationMode="nearest-neighbor",t},setBicubic:function(t){return t.style["image-rendering"]="auto",t.style.msInterpolationMode="bicubic",t}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=t.toString(16);return 1===e.length?"0"+e:e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){return n<<24|t<<16|e<<8|i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(129),s=function(t,e,i){void 0===e&&(e=1),void 0===i&&(i=1);var s=Math.floor(6*t),r=6*t-s,o=Math.floor(i*(1-e)*255),a=Math.floor(i*(1-r*e)*255),h=Math.floor(i*(1-(1-r)*e)*255);i=Math.floor(i*=255);var l={r:i,g:i,b:i,color:0},u=s%6;return 0===u?(l.g=h,l.b=o):1===u?(l.r=a,l.b=o):2===u?(l.r=o,l.b=h):3===u?(l.r=o,l.g=a):4===u?(l.r=h,l.g=o):5===u&&(l.g=o,l.b=a),l.color=n(l.r,l.g,l.b),l};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46),s=function(t){var e=new n;t=t.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n});var i=/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(i){var s=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16);e.setTo(s,r,o)}return e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46),s=i(240),r=function(t){var e=s(t);return new n(e.r,e.g,e.b,e.a)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t>16777215?{a:t>>>24,r:t>>16&255,g:t>>8&255,b:255&t}:{a:255,r:t>>16&255,g:t>>8&255,b:255&t}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46),s=function(t){return new n(t.r,t.g,t.b,t.a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46),s=function(t){var e=new n,i=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(t.toLowerCase());if(i){var s=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10),a=void 0!==i[4]?parseFloat(i[4]):1;e.setTo(s,r,o,255*a)}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46);n.ColorToRGBA=i(533),n.ComponentToHex=i(234),n.GetColor=i(129),n.GetColor32=i(235),n.HexStringToColor=i(237),n.HSLToColor=i(534),n.HSVColorWheel=i(535),n.HSVToRGB=i(236),n.HueToComponent=i(238),n.IntegerToColor=i(239),n.IntegerToRGB=i(240),n.Interpolate=i(536),n.ObjectToColor=i(241),n.RandomRGB=i(539),n.RGBStringToColor=i(242),n.RGBToHSV=i(537),n.RGBToString=i(538),n.ValueToColor=i(130),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){var i=t.sys.game.renderer;if(this.bitmapMask=e,this.maskTexture=null,this.mainTexture=null,this.dirty=!0,this.mainFramebuffer=null,this.maskFramebuffer=null,this.invertAlpha=!1,i&&i.gl){var n=i.width,s=i.height,r=0==(n&n-1)&&0==(s&s-1),o=i.gl,a=r?o.REPEAT:o.CLAMP_TO_EDGE,h=o.LINEAR;this.mainTexture=i.createTexture2D(0,h,h,a,a,o.RGBA,null,n,s),this.maskTexture=i.createTexture2D(0,h,h,a,a,o.RGBA,null,n,s),this.mainFramebuffer=i.createFramebuffer(n,s,this.mainTexture,!1),this.maskFramebuffer=i.createFramebuffer(n,s,this.maskTexture,!1),i.onContextRestored(function(t){var e=t.width,i=t.height,n=0==(e&e-1)&&0==(i&i-1),s=t.gl,r=n?s.REPEAT:s.CLAMP_TO_EDGE,o=s.LINEAR;this.mainTexture=t.createTexture2D(0,o,o,r,r,s.RGBA,null,e,i),this.maskTexture=t.createTexture2D(0,o,o,r,r,s.RGBA,null,e,i),this.mainFramebuffer=t.createFramebuffer(e,i,this.mainTexture,!1),this.maskFramebuffer=t.createFramebuffer(e,i,this.maskTexture,!1)},this)}},setBitmap:function(t){this.bitmapMask=t},preRenderWebGL:function(t,e,i){t.pipelines.BitmapMaskPipeline.beginMask(this,e,i)},postRenderWebGL:function(t){t.pipelines.BitmapMaskPipeline.endMask(this)},preRenderCanvas:function(){},postRenderCanvas:function(){},destroy:function(){this.bitmapMask=null,this.mainTexture=null,this.maskTexture=null,this.mainFramebuffer=null,this.maskFramebuffer=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.geometryMask=e},setShape:function(t){this.geometryMask=t},preRenderWebGL:function(t,e,i){var n=t.gl,s=this.geometryMask;t.flush(),n.enable(n.STENCIL_TEST),n.clear(n.STENCIL_BUFFER_BIT),n.colorMask(!1,!1,!1,!1),n.stencilFunc(n.NOTEQUAL,1,1),n.stencilOp(n.REPLACE,n.REPLACE,n.REPLACE),s.renderWebGL(t,s,0,i),t.flush(),n.colorMask(!0,!0,!0,!0),n.stencilFunc(n.EQUAL,1,1),n.stencilOp(n.INVERT,n.INVERT,n.INVERT)},postRenderWebGL:function(t){var e=t.gl;t.flush(),e.disable(e.STENCIL_TEST)},preRenderCanvas:function(t,e,i){var n=this.geometryMask;t.currentContext.save(),n.renderCanvas(t,n,0,i,void 0,null,!0),t.currentContext.clip()},postRenderCanvas:function(t){t.currentContext.restore()},destroy:function(){this.geometryMask=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(78),s=function(t){if("complete"===document.readyState||"interactive"===document.readyState)return void t();var e=function(){document.removeEventListener("deviceready",e,!0),document.removeEventListener("DOMContentLoaded",e,!0),window.removeEventListener("load",e,!0),t()};document.body?n.cordova&&!n.cocoonJS?document.addEventListener("deviceready",e,!1):(document.addEventListener("DOMContentLoaded",e,!0),window.addEventListener("load",e,!0)):window.setTimeout(e,20)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e="";try{if(window.DOMParser){var i=new DOMParser;e=i.parseFromString(t,"text/xml")}else e=new ActiveXObject("Microsoft.XMLDOM"),e.loadXML(t)}catch(t){e=null}return e&&e.documentElement&&!e.getElementsByTagName("parsererror").length?e:null};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){t.parentNode&&t.parentNode.removeChild(t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(3),r=new n({initialize:function(){this.isRunning=!1,this.callback=s,this.tick=0,this.isSetTimeOut=!1,this.timeOutID=null,this.lastTime=0;var t=this;this.step=function e(i){t.lastTime=t.tick,t.tick=i,t.callback(i),t.timeOutID=window.requestAnimationFrame(e)},this.stepTimeout=function e(){var i=Date.now(),n=Math.max(16+t.lastTime-i,0);t.lastTime=t.tick,t.tick=i,t.callback(i),t.timeOutID=window.setTimeout(e,n)}},start:function(t,e){this.isRunning||(this.callback=t,this.isSetTimeOut=e,this.isRunning=!0,this.timeOutID=e?window.setTimeout(this.stepTimeout,0):window.requestAnimationFrame(this.step))},stop:function(){this.isRunning=!1,this.isSetTimeOut?clearTimeout(this.timeOutID):window.cancelAnimationFrame(this.timeOutID)},destroy:function(){this.stop(),this.callback=s}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=t.text,n=i.length,s=Number.MAX_VALUE,r=Number.MAX_VALUE,o=0,a=0,h=t.fontData.chars,l=t.fontData.lineHeight,u=t.letterSpacing,c=0,d=0,f=0,p=0,v=null,g=0,y=0,m=0,x=0,w=null,b=0,T=0;T<n;++T)if(10!==(p=i.charCodeAt(T))){if(v=h[p]){if(g=v.width,y=v.height,m=f+v.xOffset+c,x=v.yOffset+d,null!==w){var S=v.kerning[b];m+=void 0!==S?S:0}s>m&&(s=m),r>x&&(r=x);var A=m+g-s,C=x+y-r;o<A&&(o=A),a<C&&(a=C),c+=v.xAdvance+u,f+=1,w=v,b=p}}else c=0,f=0,d+=l,w=null;var M=t.fontSize/t.fontData.size,_=M*t.scaleX,E=M*t.scaleY,P={local:{x:s*M,y:r*M,width:o*M,height:a*M},global:{x:t.x+s*_,y:t.y+r*E,width:o*_,height:a*E}};return e&&(P.local.x=Math.round(P.local.x),P.local.y=Math.round(P.local.y),P.local.width=Math.round(P.local.width),P.local.height=Math.round(P.local.height),P.global.x=Math.round(P.global.x),P.global.y=Math.round(P.global.y),P.global.width=Math.round(P.global.width),P.global.height=Math.round(P.global.height)),P};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t,e){return parseInt(t.getAttribute(e),10)}var n=function(t,e,n,s){void 0===e&&(e=0),void 0===n&&(n=0);var r={},o=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0];r.font=o.getAttribute("face"),r.size=i(o,"size"),r.lineHeight=i(a,"lineHeight")+n,r.chars={};var h=t.getElementsByTagName("char"),l=void 0!==s&&s.trimmed;if(l)var u=s.height,c=s.width;for(var d=0;d<h.length;d++){var f=h[d],p=i(f,"id"),v=i(f,"x"),g=i(f,"y"),y=i(f,"width"),m=i(f,"height");l&&(v<c&&(c=v),g<u&&(u=g)),r.chars[p]={x:v,y:g,width:y,height:m,centerX:Math.floor(y/2),centerY:Math.floor(m/2),xOffset:i(f,"xoffset"),yOffset:i(f,"yoffset"),xAdvance:i(f,"xadvance")+e,data:{},kerning:{}}}if(l&&0!==u&&0!==c)for(var x in r.chars){var w=r.chars[x];w.x-=s.x,w.y-=s.y}var b=t.getElementsByTagName("kerning");for(d=0;d<b.length;d++){var T=b[d],S=i(T,"first"),A=i(T,"second"),C=i(T,"amount");r.chars[A].kerning[S]=C}return r};t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.parent=t,this.animationManager=t.scene.sys.anims,this.animationManager.once("remove",this.remove,this),this.isPlaying=!1,this.currentAnim=null,this.currentFrame=null,this._timeScale=1,this.frameRate=0,this.duration=0,this.msPerFrame=0,this.skipMissedFrames=!0,this._delay=0,this._repeat=0,this._repeatDelay=0,this._yoyo=!1,this.forward=!0,this.accumulator=0,this.nextTick=0,this.repeatCounter=0,this.pendingRepeat=!1,this._paused=!1,this._wasPlaying=!1,this._pendingStop=0,this._pendingStopValue},setDelay:function(t){return void 0===t&&(t=0),this._delay=t,this.parent},getDelay:function(){return this._delay},delayedPlay:function(t,e,i){return this.play(e,!0,i),this.nextTick+=t,this.parent},getCurrentKey:function(){if(this.currentAnim)return this.currentAnim.key},load:function(t,e){return void 0===e&&(e=0),this.isPlaying&&this.stop(),this.animationManager.load(this,t,e),this.parent},pause:function(t){return this._paused||(this._paused=!0,this._wasPlaying=this.isPlaying,this.isPlaying=!1),void 0!==t&&this.updateFrame(t),this.parent},resume:function(t){return this._paused&&(this._paused=!1,this.isPlaying=this._wasPlaying),void 0!==t&&this.updateFrame(t),this.parent},isPaused:{get:function(){return this._paused}},play:function(t,e,i){if(void 0===e&&(e=!1),void 0===i&&(i=0),e&&this.isPlaying&&this.currentAnim.key===t)return this.parent;this.load(t,i);var n=this.currentAnim,s=this.parent;return this.repeatCounter=-1===this._repeat?Number.MAX_VALUE:this._repeat,n.getFirstTick(this),this.forward=!0,this.isPlaying=!0,this.pendingRepeat=!1,n.showOnStart&&(s.visible=!0),s.emit("animationstart",this.currentAnim,this.currentFrame),s},getProgress:function(){var t=this.currentFrame.progress;return this.forward||(t=1-t),t},setProgress:function(t){return this.forward||(t=1-t),this.setCurrentFrame(this.currentAnim.getFrameByProgress(t)),this.parent},remove:function(t){void 0===t&&(t=this.currentAnim),this.isPlaying&&t.key===this.currentAnim.key&&(this.stop(),this.setCurrentFrame(this.currentAnim.frames[0]))},getRepeat:function(){return this._repeat},setRepeat:function(t){return this._repeat=t,this.repeatCounter=0,this.parent},getRepeatDelay:function(){return this._repeatDelay},setRepeatDelay:function(t){return this._repeatDelay=t,this.parent},restart:function(t){return void 0===t&&(t=!1),this.currentAnim.getFirstTick(this,t),this.forward=!0,this.isPlaying=!0,this.pendingRepeat=!1,this._paused=!1,this.updateFrame(this.currentAnim.frames[0]),this.parent},stop:function(){this._pendingStop=0,this.isPlaying=!1;var t=this.parent;return t.emit("animationcomplete",this.currentAnim,this.currentFrame),t},stopAfterDelay:function(t){return this._pendingStop=1,this._pendingStopValue=t,this.parent},stopOnRepeat:function(){return this._pendingStop=2,this.parent},stopOnFrame:function(t){return this._pendingStop=3,this._pendingStopValue=t,this.parent},setTimeScale:function(t){return void 0===t&&(t=1),this._timeScale=t,this.parent},getTimeScale:function(){return this._timeScale},getTotalFrames:function(){return this.currentAnim.frames.length},update:function(t,e){if(this.currentAnim&&this.isPlaying&&!this.currentAnim.paused){if(this.accumulator+=e*this._timeScale,1===this._pendingStop&&(this._pendingStopValue-=e,this._pendingStopValue<=0))return this.currentAnim.completeAnimation(this);this.accumulator>=this.nextTick&&this.currentAnim.setFrame(this)}},setCurrentFrame:function(t){var e=this.parent;return this.currentFrame=t,e.texture=t.frame.texture,e.frame=t.frame,e.setSizeToFrame(),t.frame.customPivot?e.setOrigin(t.frame.pivotX,t.frame.pivotY):e.updateDisplayOrigin(),e},updateFrame:function(t){var e=this.setCurrentFrame(t);if(this.isPlaying){t.setAlpha&&(e.alpha=t.alpha);var i=this.currentAnim;e.emit("animationupdate",i,t),3===this._pendingStop&&this._pendingStopValue===t&&this.currentAnim.completeAnimation(this)}},setYoyo:function(t){return void 0===t&&(t=!1),this._yoyo=t,this.parent},getYoyo:function(){return this._yoyo},destroy:function(){this.animationManager.off("remove",this.remove,this),this.animationManager=null,this.parent=null,this.currentAnim=null,this.currentFrame=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(138),s=i(2),r=function(t,e,i,r,o,a,h){if(!(s.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&r._id)){var l=r.scrollX*e.scrollFactorX,u=r.scrollY*e.scrollFactorY,c=e.x,d=e.y,f=e.scaleX,p=e.scaleY,v=e.rotation,g=e.commandBuffer,y=a||t.currentContext,m=1,x=1,w=0,b=0,T=1,S=0,A=0,C=0;if(t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,y.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,y.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode),y.save(),o){var M=o.matrix;y.transform(M[0],M[1],M[2],M[3],M[4],M[5])}y.translate(c-l,d-u),y.rotate(v),y.scale(f,p),y.fillStyle="#fff",y.globalAlpha=e.alpha;for(var _=0,E=g.length;_<E;++_){switch(g[_]){case n.ARC:y.arc(g[_+1],g[_+2],g[_+3],g[_+4],g[_+5],g[_+6]),_+=6;break;case n.LINE_STYLE:T=g[_+1],w=g[_+2],m=g[_+3],S=(16711680&w)>>>16,A=(65280&w)>>>8,C=255&w,y.strokeStyle="rgba("+S+","+A+","+C+","+m+")",y.lineWidth=T,_+=3;break;case n.FILL_STYLE:b=g[_+1],x=g[_+2],S=(16711680&b)>>>16,A=(65280&b)>>>8,C=255&b,y.fillStyle="rgba("+S+","+A+","+C+","+x+")",_+=2;break;case n.BEGIN_PATH:y.beginPath();break;case n.CLOSE_PATH:y.closePath();break;case n.FILL_PATH:h||y.fill();break;case n.STROKE_PATH:h||y.stroke();break;case n.FILL_RECT:h?y.rect(g[_+1],g[_+2],g[_+3],g[_+4]):y.fillRect(g[_+1],g[_+2],g[_+3],g[_+4]),_+=4;break;case n.FILL_TRIANGLE:y.beginPath(),y.moveTo(g[_+1],g[_+2]),y.lineTo(g[_+3],g[_+4]),y.lineTo(g[_+5],g[_+6]),y.closePath(),h||y.fill(),_+=6;break;case n.STROKE_TRIANGLE:y.beginPath(),y.moveTo(g[_+1],g[_+2]),y.lineTo(g[_+3],g[_+4]),y.lineTo(g[_+5],g[_+6]),y.closePath(),h||y.stroke(),_+=6;break;case n.LINE_TO:y.lineTo(g[_+1],g[_+2]),_+=2;break;case n.MOVE_TO:y.moveTo(g[_+1],g[_+2]),_+=2;break;case n.LINE_FX_TO:y.lineTo(g[_+1],g[_+2]),_+=5;break;case n.MOVE_FX_TO:y.moveTo(g[_+1],g[_+2]),_+=5;break;case n.SAVE:y.save();break;case n.RESTORE:y.restore();break;case n.TRANSLATE:y.translate(g[_+1],g[_+2]),_+=2;break;case n.SCALE:y.scale(g[_+1],g[_+2]),_+=2;break;case n.ROTATE:y.rotate(g[_+1]),_+=1}}y.restore()}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(44),r=new n({initialize:function(t,e,i,n,s,r,o){this.x=t,this.y=e,this.radius=i,this.r=n,this.g=s,this.b=r,this.intensity=o,this.scrollFactorX=1,this.scrollFactorY=1},set:function(t,e,i,n,s,r,o){return this.x=t,this.y=e,this.radius=i,this.r=n,this.g=s,this.b=r,this.intensity=o,this.scrollFactorX=1,this.scrollFactorY=1,this},setScrollFactor:function(t,e){return void 0===t&&(t=1),void 0===e&&(e=t),this.scrollFactorX=t,this.scrollFactorY=e,this},setColor:function(t){var e=s.getFloatsFromUintRGB(t);return this.r=e[0],this.g=e[1],this.b=e[2],this},setIntensity:function(t){return this.intensity=t,this},setPosition:function(t,e){return this.x=t,this.y=e,this},setRadius:function(t){return this.radius=t,this}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(254),r=i(183),o=i(44),a=new n({initialize:function(){this.lightPool=[],this.lights=[],this.culledLights=[],this.ambientColor={r:.1,g:.1,b:.1},this.active=!1},enable:function(){return this.active=!0,this},disable:function(){return this.active=!1,this},cull:function(t){var e=this.lights,i=this.culledLights,n=e.length,s=t.x+t.width/2,o=t.y+t.height/2,a=(t.width+t.height)/2,h={x:0,y:0},l=t.matrix,u=this.systems.game.config.height;i.length=0;for(var c=0;c<n&&i.length<r.LIGHT_COUNT;++c){var d=e[c];l.transformPoint(d.x,d.y,h);var f=s-(h.x-t.scrollX*d.scrollFactorX*t.zoom),p=o-(u-(h.y-t.scrollY*d.scrollFactorY*t.zoom));Math.sqrt(f*f+p*p)<d.radius+a&&i.push(e[c])}return i},forEachLight:function(t){if(t){for(var e=this.lights,i=e.length,n=0;n<i;++n)t(e[n]);return this}},setAmbientColor:function(t){var e=o.getFloatsFromUintRGB(t);return this.ambientColor.r=e[0],this.ambientColor.g=e[1],this.ambientColor.b=e[2],this},getMaxVisibleLights:function(){return 10},getLightCount:function(){return this.lights.length},addLight:function(t,e,i,n,r){var a=null,h=null;return t=void 0===t?0:t,e=void 0===e?0:e,n=void 0===n?16777215:n,i=void 0===i?100:i,r=void 0===r?1:r,a=o.getFloatsFromUintRGB(n),h=null,this.lightPool.length>0?(h=this.lightPool.pop(),h.set(t,e,i,a[0],a[1],a[2],r)):h=new s(t,e,i,a[0],a[1],a[2],r),this.lights.push(h),h},removeLight:function(t){var e=this.lights.indexOf(t);return e>=0&&(this.lightPool.push(t),this.lights.splice(e,1)),this},shutdown:function(){for(;this.lights.length>0;)this.lightPool.push(this.lights.pop());this.ambientColor={r:.1,g:.1,b:.1},this.culledLights.length=0,this.lights.length=0},destroy:function(){this.shutdown()}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t,e,i,n,r){if("object"==typeof t){var o=t;t=s(o,"x",0),e=s(o,"y",0),i=s(o,"power",0),n=s(o,"epsilon",100),r=s(o,"gravity",50)}else void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=100),void 0===r&&(r=50);this.x=t,this.y=e,this.active=!0,this._gravity=r,this._power=0,this._epsilon=0,this.power=i,this.epsilon=n},update:function(t,e){var i=this.x-t.x,n=this.y-t.y,s=i*i+n*n;if(0!==s){var r=Math.sqrt(s);s<this._epsilon&&(s=this._epsilon);var o=this._power*e/(s*r)*100;t.velocityX+=i*o,t.velocityY+=n*o}},epsilon:{get:function(){return Math.sqrt(this._epsilon)},set:function(t){this._epsilon=t*t}},power:{get:function(){return this._power/this._gravity},set:function(t){this._power=t*this._gravity}},gravity:{get:function(){return this._gravity},set:function(t){var e=this.power;this._gravity=t,this.power=e}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(48),r=i(54),o=new n({initialize:function(t){this.emitter=t,this.frame=null,this.index=0,this.x=0,this.y=0,this.velocityX=0,this.velocityY=0,this.accelerationX=0,this.accelerationY=0,this.maxVelocityX=1e4,this.maxVelocityY=1e4,this.bounce=0,this.scaleX=1,this.scaleY=1,this.alpha=1,this.angle=0,this.rotation=0,this.tint=4294967295,this.color=4294967295,this.life=1e3,this.lifeCurrent=1e3,this.delayCurrent=0,this.lifeT=0,this.data={tint:{min:16777215,max:16777215,current:16777215},alpha:{min:1,max:1},rotate:{min:0,max:0},scaleX:{min:1,max:1},scaleY:{min:1,max:1}}},isAlive:function(){return this.lifeCurrent>0},fire:function(t,e){var i=this.emitter;this.frame=i.getFrame(),i.emitZone&&i.emitZone.getPoint(this),void 0===t?(i.follow&&(this.x+=i.follow.x+i.followOffset.x),this.x+=i.x.onEmit(this,"x")):this.x+=t,void 0===e?(i.follow&&(this.y+=i.follow.y+i.followOffset.y),this.y+=i.y.onEmit(this,"y")):this.y+=e,this.life=i.lifespan.onEmit(this,"lifespan"),this.lifeCurrent=this.life,this.lifeT=0;var n=i.speedX.onEmit(this,"speedX"),o=i.speedY?i.speedY.onEmit(this,"speedY"):n;if(i.radial){var a=s(i.angle.onEmit(this,"angle"));this.velocityX=Math.cos(a)*Math.abs(n),this.velocityY=Math.sin(a)*Math.abs(o)}else if(i.moveTo){var h=i.moveToX.onEmit(this,"moveToX"),l=i.moveToY?i.moveToY.onEmit(this,"moveToY"):h,u=Math.atan2(l-this.y,h-this.x),c=r(this.x,this.y,h,l)/(this.life/1e3);this.velocityX=Math.cos(u)*c,this.velocityY=Math.sin(u)*c}else this.velocityX=n,this.velocityY=o;i.acceleration&&(this.accelerationX=i.accelerationX.onEmit(this,"accelerationX"),this.accelerationY=i.accelerationY.onEmit(this,"accelerationY")),this.maxVelocityX=i.maxVelocityX.onEmit(this,"maxVelocityX"),this.maxVelocityY=i.maxVelocityY.onEmit(this,"maxVelocityY"),this.delayCurrent=i.delay.onEmit(this,"delay"),this.scaleX=i.scaleX.onEmit(this,"scaleX"),this.scaleY=i.scaleY?i.scaleY.onEmit(this,"scaleY"):this.scaleX,this.angle=i.rotate.onEmit(this,"rotate"),this.rotation=s(this.angle),this.bounce=i.bounce.onEmit(this,"bounce"),this.alpha=i.alpha.onEmit(this,"alpha"),this.tint=i.tint.onEmit(this,"tint"),this.color=16777215&this.tint|(255*this.alpha|0)<<24,this.index=i.alive.length},computeVelocity:function(t,e,i,n){var s=this.velocityX,r=this.velocityY,o=this.accelerationX,a=this.accelerationY,h=this.maxVelocityX,l=this.maxVelocityY;s+=t.gravityX*i,r+=t.gravityY*i,o&&(s+=o*i),a&&(r+=a*i),s>h?s=h:s<-h&&(s=-h),r>l?r=l:r<-l&&(r=-l),this.velocityX=s,this.velocityY=r;for(var u=0;u<n.length;u++)n[u].update(this,e,i)},checkBounds:function(t){var e=t.bounds,i=-this.bounce;this.x<e.x&&t.collideLeft?(this.x=e.x,this.velocityX*=i):this.x>e.right&&t.collideRight&&(this.x=e.right,this.velocityX*=i),this.y<e.y&&t.collideTop?(this.y=e.y,this.velocityY*=i):this.y>e.bottom&&t.collideBottom&&(this.y=e.bottom,this.velocityY*=i)},update:function(t,e,i){if(this.delayCurrent>0)return this.delayCurrent-=t,!1;var n=this.emitter,r=1-this.lifeCurrent/this.life;return this.lifeT=r,this.computeVelocity(n,t,e,i),this.x+=this.velocityX*e,this.y+=this.velocityY*e,n.bounds&&this.checkBounds(n),n.deathZone&&n.deathZone.willKill(this)?(this.lifeCurrent=0,!0):(this.scaleX=n.scaleX.onUpdate(this,"scaleX",r,this.scaleX),n.scaleY?this.scaleY=n.scaleY.onUpdate(this,"scaleY",r,this.scaleY):this.scaleY=this.scaleX,this.angle=n.rotate.onUpdate(this,"rotate",r,this.angle),this.rotation=s(this.angle),this.alpha=n.alpha.onUpdate(this,"alpha",r,this.alpha),this.tint=n.tint.onUpdate(this,"tint",r,this.tint),this.color=16777215&this.tint|(255*this.alpha|0)<<24,this.lifeCurrent-=t,this.lifeCurrent<=0)}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=i(0),r=i(15),o=i(259),a=i(260),h=i(606),l=i(1),u=i(199),c=i(422),d=i(76),f=i(257),p=i(261),v=i(9),g=i(122),y=i(4),m=i(49),x=new s({Mixins:[r.BlendMode,r.Mask,r.ScrollFactor,r.Visible],initialize:function(t,e){this.manager=t,this.texture=t.texture,this.frames=[t.defaultFrame],this.defaultFrame=t.defaultFrame,this.configFastMap=["active","blendMode","collideBottom","collideLeft","collideRight","collideTop","deathCallback","deathCallbackScope","emitCallback","emitCallbackScope","follow","frequency","gravityX","gravityY","maxParticles","name","on","particleBringToTop","particleClass","radial","timeScale","trackVisible","visible"],this.configOpMap=["accelerationX","accelerationY","angle","alpha","bounce","delay","lifespan","maxVelocityX","maxVelocityY","moveToX","moveToY","quantity","rotate","scaleX","scaleY","speedX","speedY","tint","x","y"],this.name="",this.particleClass=f,this.x=new h(e,"x",0),this.y=new h(e,"y",0),this.radial=!0,this.gravityX=0,this.gravityY=0,this.acceleration=!1,this.accelerationX=new h(e,"accelerationX",0,!0),this.accelerationY=new h(e,"accelerationY",0,!0),this.maxVelocityX=new h(e,"maxVelocityX",1e4,!0),this.maxVelocityY=new h(e,"maxVelocityY",1e4,!0),this.speedX=new h(e,"speedX",0,!0),this.speedY=new h(e,"speedY",0,!0),this.moveTo=!1,this.moveToX=new h(e,"moveToX",0,!0),this.moveToY=new h(e,"moveToY",0,!0),this.bounce=new h(e,"bounce",0,!0),this.scaleX=new h(e,"scaleX",1),this.scaleY=new h(e,"scaleY",1),this.tint=new h(e,"tint",4294967295),this.alpha=new h(e,"alpha",1),this.lifespan=new h(e,"lifespan",1e3),this.angle=new h(e,"angle",{min:0,max:360}),this.rotate=new h(e,"rotate",0),this.emitCallback=null,this.emitCallbackScope=null,this.deathCallback=null,this.deathCallbackScope=null,this.maxParticles=0,this.quantity=new h(e,"quantity",1,!0),this.delay=new h(e,"delay",0,!0),this.frequency=0,this.on=!0,this.particleBringToTop=!0,this.timeScale=1,this.emitZone=null,this.deathZone=null,this.bounds=null,this.collideLeft=!0,this.collideRight=!0,this.collideTop=!0,this.collideBottom=!0,this.active=!0,this.visible=!0,this.blendMode=n.NORMAL,this.follow=null,this.followOffset=new y,this.trackVisible=!1,this.currentFrame=0,this.randomFrame=!0,this.frameQuantity=1,this.dead=[],this.alive=[],this._counter=0,this._frameCounter=0,e&&this.fromJSON(e)},fromJSON:function(t){if(!t)return this;var e=0,i="";for(e=0;e<this.configFastMap.length;e++)i=this.configFastMap[e],d(t,i)&&(this[i]=l(t,i));for(e=0;e<this.configOpMap.length;e++)i=this.configOpMap[e],d(t,i)&&this[i].loadConfig(t);if(this.acceleration=0!==this.accelerationX.propertyValue||0!==this.accelerationY.propertyValue,this.moveTo=0!==this.moveToX.propertyValue||0!==this.moveToY.propertyValue,d(t,"speed")&&(this.speedX.loadConfig(t,"speed"),this.speedY=null),(c(t,["speedX","speedY"])||this.moveTo)&&(this.radial=!1),d(t,"scale")&&(this.scaleX.loadConfig(t,"scale"),this.scaleY=null),d(t,"callbackScope")){var n=l(t,"callbackScope",null);this.emitCallbackScope=n,this.deathCallbackScope=n}return d(t,"emitZone")&&this.setEmitZone(t.emitZone),d(t,"deathZone")&&this.setDeathZone(t.deathZone),d(t,"bounds")&&this.setBounds(t.bounds),d(t,"followOffset")&&this.followOffset.setFromObject(l(t,"followOffset",0)),d(t,"frame")&&this.setFrame(t.frame),this},toJSON:function(t){void 0===t&&(t={});var e=0,i="";for(e=0;e<this.configFastMap.length;e++)i=this.configFastMap[e],t[i]=this[i];for(e=0;e<this.configOpMap.length;e++)i=this.configOpMap[e],this[i]&&(t[i]=this[i].toJSON());return this.speedY||(delete t.speedX,t.speed=this.speedX.toJSON()),this.scaleY||(delete t.scaleX,t.scale=this.scaleX.toJSON()),t},startFollow:function(t,e,i,n){return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=!1),this.follow=t,this.followOffset.set(e,i),this.trackVisible=n,this},stopFollow:function(){return this.follow=null,this.followOffset.set(0,0),this.trackVisible=!1,this},getFrame:function(){if(1===this.frames.length)return this.defaultFrame;if(this.randomFrame)return u(this.frames);var t=this.frames[this.currentFrame];return this._frameCounter++,this._frameCounter===this.frameQuantity&&(this._frameCounter=0,this.currentFrame=m(this.currentFrame+1,0,this._frameLength)),t},setFrame:function(t,e,i){void 0===e&&(e=!0),void 0===i&&(i=1),this.randomFrame=e,this.frameQuantity=i,this.currentFrame=0,this._frameCounter=0;var n=typeof t;if(Array.isArray(t)||"string"===n||"number"===n)this.manager.setEmitterFrames(t,this);else if("object"===n){var s=t;t=l(s,"frames",null),t&&this.manager.setEmitterFrames(t,this);var r=l(s,"cycle",!1);this.randomFrame=!r,this.frameQuantity=l(s,"quantity",i)}return this._frameLength=this.frames.length,1===this._frameLength&&(this.frameQuantity=1,this.randomFrame=!1),this},setRadial:function(t){return void 0===t&&(t=!0),this.radial=t,this},setPosition:function(t,e){return this.x.onChange(t),this.y.onChange(e),this},setBounds:function(t,e,i,n){if("object"==typeof t){var s=t;t=s.x,e=s.y,i=d(s,"w")?s.w:s.width,n=d(s,"h")?s.h:s.height}return this.bounds?this.bounds.setTo(t,e,i,n):this.bounds=new v(t,e,i,n),this},setSpeedX:function(t){return this.speedX.onChange(t),this.radial=!1,this},setSpeedY:function(t){return this.speedY&&(this.speedY.onChange(t),this.radial=!1),this},setSpeed:function(t){return this.speedX.onChange(t),this.speedY=null,this.radial=!0,this},setScaleX:function(t){return this.scaleX.onChange(t),this},setScaleY:function(t){return this.scaleY.onChange(t),this},setScale:function(t){return this.scaleX.onChange(t),this.scaleY=null,this},setGravityX:function(t){return this.gravityX=t,this},setGravityY:function(t){return this.gravityY=t,this},setGravity:function(t,e){return this.gravityX=t,this.gravityY=e,this},setAlpha:function(t){return this.alpha.onChange(t),this},setEmitterAngle:function(t){return this.angle.onChange(t),this},setAngle:function(t){return this.angle.onChange(t),this},setLifespan:function(t){return this.lifespan.onChange(t),this},setQuantity:function(t){return this.quantity.onChange(t),this},setFrequency:function(t,e){return this.frequency=t,this._counter=0,e&&this.quantity.onChange(e),this},setEmitZone:function(t){if(void 0===t)this.emitZone=null;else{var e=l(t,"type","random"),i=l(t,"source",null);switch(e){case"random":this.emitZone=new p(i);break;case"edge":var n=l(t,"quantity",1),s=l(t,"stepRate",0),r=l(t,"yoyo",!1),o=l(t,"seamless",!0);this.emitZone=new a(i,n,s,r,o)}}return this},setDeathZone:function(t){if(void 0===t)this.deathZone=null;else{var e=l(t,"type","onEnter"),i=l(t,"source",null);if(i&&"function"==typeof i.contains){var n="onEnter"===e;this.deathZone=new o(i,n)}}return this},reserve:function(t){for(var e=this.dead,i=0;i<t;i++)e.push(new this.particleClass(this));return this},getAliveParticleCount:function(){return this.alive.length},getDeadParticleCount:function(){return this.dead.length},getParticleCount:function(){return this.getAliveParticleCount()+this.getDeadParticleCount()},atLimit:function(){return this.maxParticles>0&&this.getParticleCount()===this.maxParticles},onParticleEmit:function(t,e){return void 0===t?(this.emitCallback=null,this.emitCallbackScope=null):"function"==typeof t&&(this.emitCallback=t,e&&(this.emitCallbackScope=e)),this},onParticleDeath:function(t,e){return void 0===t?(this.deathCallback=null,this.deathCallbackScope=null):"function"==typeof t&&(this.deathCallback=t,e&&(this.deathCallbackScope=e)),this},killAll:function(){for(var t=this.dead,e=this.alive;e.length>0;)t.push(e.pop());return this},forEachAlive:function(t,e){for(var i=this.alive,n=i.length,s=0;s<n;++s)t.call(e,i[s],this);return this},forEachDead:function(t,e){for(var i=this.dead,n=i.length,s=0;s<n;++s)t.call(e,i[s],this);return this},start:function(){return this.on=!0,this._counter=0,this},pause:function(){return this.active=!1,this},resume:function(){return this.active=!0,this},depthSort:function(){return g.inplace(this.alive,this.depthSortCallback),this},flow:function(t,e){return void 0===e&&(e=1),this.frequency=t,this.quantity.onChange(e),this.start()},explode:function(t,e,i){return this.frequency=-1,this.emitParticle(t,e,i)},emitParticleAt:function(t,e,i){return this.emitParticle(i,t,e)},emitParticle:function(t,e,i){if(!this.atLimit()){void 0===t&&(t=this.quantity.onEmit());for(var n=this.dead,s=0;s<t;s++){var r;if(r=n.length>0?n.pop():new this.particleClass(this),r.fire(e,i),this.particleBringToTop?this.alive.push(r):this.alive.unshift(r),this.emitCallback&&this.emitCallback.call(this.emitCallbackScope,r,this),this.atLimit())break}return r}},preUpdate:function(t,e){e*=this.timeScale;var i=e/1e3;this.trackVisible&&(this.visible=this.follow.visible);for(var n=this.manager.getProcessors(),s=this.alive,r=s.length,o=0;o<r;o++){var a=s[o];if(a.update(e,i,n)){var h=s[r-1];s[r-1]=a,s[o]=h,o-=1,r-=1}}var l=s.length-r;if(l>0){var u=s.splice(s.length-l,l),c=this.deathCallback,d=this.deathCallbackScope;if(c)for(var f=0;f<u.length;f++)c.call(d,u[f]);this.dead.concat(u),g.inplace(s,this.indexSortCallback)}this.on&&(0===this.frequency?this.emitParticle():this.frequency>0&&(this._counter-=e,this._counter<=0&&(this.emitParticle(),this._counter=this.frequency-Math.abs(this._counter))))},depthSortCallback:function(t,e){return t.y-e.y},indexSortCallback:function(t,e){return t.index-e.index}});t.exports=x},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.source=t,this.killOnEnter=e},willKill:function(t){var e=this.source.contains(t.x,t.y);return e&&this.killOnEnter||!e&&!this.killOnEnter}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s){void 0===n&&(n=!1),void 0===s&&(s=!0),this.source=t,this.points=[],this.quantity=e,this.stepRate=i,this.yoyo=n,this.counter=-1,this.seamless=s,this._length=0,this._direction=0,this.updateSource()},updateSource:function(){if(this.points=this.source.getPoints(this.quantity,this.stepRate),this.seamless){var t=this.points[0],e=this.points[this.points.length-1];t.x===e.x&&t.y===e.y&&this.points.pop()}var i=this._length;return this._length=this.points.length,this._length<i&&this.counter>this._length&&(this.counter=this._length-1),this},changeSource:function(t){return this.source=t,this.updateSource()},getPoint:function(t){0===this._direction?++this.counter>=this._length&&(this.yoyo?(this._direction=1,this.counter=this._length-1):this.counter=0):-1===--this.counter&&(this.yoyo?(this._direction=0,this.counter=0):this.counter=this._length-1);var e=this.points[this.counter];e&&(t.x=e.x,t.y=e.y)}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(4),r=new n({initialize:function(t){this.source=t,this._tempVec=new s},getPoint:function(t){var e=this._tempVec;this.source.getRandomPoint(e),t.x=e.x,t.y=e.y}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(48),r=i(93),o=i(5),a=i(39),h=i(95),l=i(4),u=new n({Extends:a,initialize:function(t,e,i,n,s,r){a.call(this,t,i,n,s,r),this.path=e,this.rotateToPath=!1,this.pathRotationVerticalAdjust=!1,this.pathRotationOffset=0,this.pathOffset=new l(i,n),this.pathVector=new l,this.pathTween,this.pathConfig=null,this._prevDirection=h.PLAYING_FORWARD},setPath:function(t,e){void 0===e&&(e=this.pathConfig);var i=this.pathTween;return i&&i.isPlaying()&&i.stop(),this.path=t,e&&this.startFollow(e),this},setRotateToPath:function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=!1),this.rotateToPath=t,this.pathRotationOffset=e,this.pathRotationVerticalAdjust=i,this},isFollowing:function(){var t=this.pathTween;return t&&t.isPlaying()},startFollow:function(t,e){void 0===t&&(t={}),void 0===e&&(e=0);var i=this.pathTween;i&&i.isPlaying()&&i.stop(),"number"==typeof t&&(t={duration:t}),t.from=0,t.to=1;var n=r(t,"positionOnPath",!1);if(this.rotateToPath=r(t,"rotateToPath",!1),this.pathRotationOffset=o(t,"rotationOffset",0),this.pathRotationVerticalAdjust=r(t,"verticalAdjust",!1),this.pathTween=this.scene.sys.tweens.addCounter(t),this.path.getStartPoint(this.pathOffset),n&&(this.x=this.pathOffset.x,this.y=this.pathOffset.y),this.pathOffset.x=this.x-this.pathOffset.x,this.pathOffset.y=this.y-this.pathOffset.y,this._prevDirection=h.PLAYING_FORWARD,this.rotateToPath){var a=this.path.getPoint(.1);this.rotation=Math.atan2(a.y-this.y,a.x-this.x)+s(this.pathRotationOffset)}return this.pathConfig=t,this},pauseFollow:function(){var t=this.pathTween;return t&&t.isPlaying()&&t.pause(),this},resumeFollow:function(){var t=this.pathTween;return t&&t.isPaused()&&t.resume(),this},stopFollow:function(){var t=this.pathTween;return t&&t.isPlaying()&&t.stop(),this},preUpdate:function(t,e){this.anims.update(t,e);var i=this.pathTween;if(i){var n=i.data[0];if(n.state!==h.PLAYING_FORWARD&&n.state!==h.PLAYING_BACKWARD)return;var r=this.pathVector;this.path.getPoint(i.getValue(),r),r.add(this.pathOffset);var o=this.x,a=this.y;this.setPosition(r.x,r.y);var l=this.x-o,u=this.y-a;if(0===l&&0===u)return;if(n.state!==this._prevDirection)return void(this._prevDirection=n.state);this.rotateToPath&&(this.rotation=Math.atan2(u,l)+s(this.pathRotationOffset),this.pathRotationVerticalAdjust&&(this.flipY=0!==this.rotation&&n.state===h.PLAYING_BACKWARD))}}});t.exports=u},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.PI*t.radius*2};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(145),s=i(84),r=i(17),o=i(6),a=function(t,e,i){void 0===i&&(i=new o);var a=s(e,0,r.PI2);return n(t,a,i)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(263),s=i(145),r=i(84),o=i(17),a=function(t,e,i,a){void 0===a&&(a=[]),e||(e=n(t)/i);for(var h=0;h<e;h++){var l=r(h/e,0,o.PI2);a.push(s(t,l))}return a};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=t.width/2,i=t.height/2,n=Math.pow(e-i,2)/Math.pow(e+i,2);return Math.PI*(e+i)*(1+3*n/(10+Math.sqrt(4-3*n)))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(147),s=i(84),r=i(17),o=i(6),a=function(t,e,i){void 0===i&&(i=new o);var a=s(e,0,r.PI2);return n(t,a,i)};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(266),s=i(147),r=i(84),o=i(17),a=function(t,e,i,a){void 0===a&&(a=[]),e||(e=n(t)/i);for(var h=0;h<e;h++){var l=r(h/e,0,o.PI2);a.push(s(t,l))}return a};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(148);n.Area=i(656),n.Circumference=i(266),n.CircumferencePoint=i(147),n.Clone=i(657),n.Contains=i(82),n.ContainsPoint=i(658),n.ContainsRect=i(659),n.CopyFrom=i(660),n.Equals=i(661),n.GetBounds=i(662),n.GetPoint=i(267),n.GetPoints=i(268),n.Offset=i(663),n.OffsetPoint=i(664),n.Random=i(149),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Circle:i(655),Ellipse:i(269),Intersects:i(274),Line:i(692),Point:i(706),Polygon:i(711),Rectangle:i(287),Triangle:i(749)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(40),s=i(6),r=new s,o=function(t,e,i){if(void 0===i&&(i=r),n(e,t.x1,t.y1))return i.x=t.x1,i.y=t.y1,!0;if(n(e,t.x2,t.y2))return i.x=t.x2,i.y=t.y2,!0;var s=t.x2-t.x1,o=t.y2-t.y1,a=e.x-t.x1,h=e.y-t.y1,l=s*s+o*o,u=s,c=o;if(l>0){var d=(a*s+h*o)/l;u*=d,c*=d}return i.x=t.x1+u,i.y=t.y1+c,u*u+c*c<=l&&u*s+c*o>=0&&n(e,i.x,i.y)};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return(t.x-e.x1)*(e.y2-e.y1)==(e.x2-e.x1)*(t.y-e.y1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!(t.width<=0||t.height<=0||e.width<=0||e.height<=0)&&!(t.right<e.x||t.bottom<e.y||t.x>e.right||t.y>e.bottom)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CircleToCircle:i(665),CircleToRectangle:i(666),GetRectangleIntersection:i(667),LineToCircle:i(271),LineToLine:i(102),LineToRectangle:i(668),PointToLine:i(272),PointToLineSegment:i(669),RectangleToRectangle:i(273),RectangleToTriangle:i(670),RectangleToValues:i(671),TriangleToCircle:i(672),TriangleToLine:i(673),TriangleToTriangle:i(674)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=1),void 0===i&&(i=[]);var n=Math.round(t.x1),s=Math.round(t.y1),r=Math.round(t.x2),o=Math.round(t.y2),a=Math.abs(r-n),h=Math.abs(o-s),l=n<r?1:-1,u=s<o?1:-1,c=a-h;i.push({x:n,y:s});for(var d=1;n!==r||s!==o;){var f=c<<1;f>-h&&(c-=h,n+=l),f<a&&(c+=a,s+=u),d%e==0&&i.push({x:n,y:s}),d++}return i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i){return void 0===i&&(i=new n),i.x=t.x1+(t.x2-t.x1)*e,i.y=t.y1+(t.y2-t.y1)*e,i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(49),r=i(68),o=function(t){var e=r(t)-n.TAU;return s(e,-Math.PI,Math.PI)};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x*t.x+t.y*t.y};t.exports=i},function(t,e,i){"use strict";function n(t,e,i){i=i||2;var n=e&&e.length,r=n?e[0]*i:t.length,a=s(t,0,r,i,!0),h=[];if(!a)return h;var l,u,d,f,p,v,g;if(n&&(a=c(t,e,a,i)),t.length>80*i){l=d=t[0],u=f=t[1];for(var y=i;y<r;y+=i)p=t[y],v=t[y+1],p<l&&(l=p),v<u&&(u=v),p>d&&(d=p),v>f&&(f=v);g=Math.max(d-l,f-u)}return o(a,h,i,l,u,g),h}function s(t,e,i,n,s){var r,o;if(s===k(t,e,i,n)>0)for(r=e;r<i;r+=n)o=E(r,t[r],t[r+1],o);else for(r=i-n;r>=e;r-=n)o=E(r,t[r],t[r+1],o);return o&&T(o,o.next)&&(P(o),o=o.next),o}function r(t,e){if(!t)return t;e||(e=t);var i,n=t;do{if(i=!1,n.steiner||!T(n,n.next)&&0!==b(n.prev,n,n.next))n=n.next;else{if(P(n),(n=e=n.prev)===n.next)return null;i=!0}}while(i||n!==e);return e}function o(t,e,i,n,s,c,d){if(t){!d&&c&&v(t,n,s,c);for(var f,p,g=t;t.prev!==t.next;)if(f=t.prev,p=t.next,c?h(t,n,s,c):a(t))e.push(f.i/i),e.push(t.i/i),e.push(p.i/i),P(t),t=p.next,g=p.next;else if((t=p)===g){d?1===d?(t=l(t,e,i),o(t,e,i,n,s,c,2)):2===d&&u(t,e,i,n,s,c):o(r(t),e,i,n,s,c,1);break}}}function a(t){var e=t.prev,i=t,n=t.next;if(b(e,i,n)>=0)return!1;for(var s=t.next.next;s!==t.prev;){if(x(e.x,e.y,i.x,i.y,n.x,n.y,s.x,s.y)&&b(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function h(t,e,i,n){var s=t.prev,r=t,o=t.next;if(b(s,r,o)>=0)return!1;for(var a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,h=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,c=y(a,h,e,i,n),d=y(l,u,e,i,n),f=t.nextZ;f&&f.z<=d;){if(f!==t.prev&&f!==t.next&&x(s.x,s.y,r.x,r.y,o.x,o.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(f=t.prevZ;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&x(s.x,s.y,r.x,r.y,o.x,o.y,f.x,f.y)&&b(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}function l(t,e,i){var n=t;do{var s=n.prev,r=n.next.next;!T(s,r)&&S(s,n,n.next,r)&&C(s,r)&&C(r,s)&&(e.push(s.i/i),e.push(n.i/i),e.push(r.i/i),P(n),P(n.next),n=t=r),n=n.next}while(n!==t);return n}function u(t,e,i,n,s,a){var h=t;do{for(var l=h.next.next;l!==h.prev;){if(h.i!==l.i&&w(h,l)){var u=_(h,l);return h=r(h,h.next),u=r(u,u.next),o(h,e,i,n,s,a),void o(u,e,i,n,s,a)}l=l.next}h=h.next}while(h!==t)}function c(t,e,i,n){var o,a,h,l,u,c=[];for(o=0,a=e.length;o<a;o++)h=e[o]*n,l=o<a-1?e[o+1]*n:t.length,u=s(t,h,l,n,!1),u===u.next&&(u.steiner=!0),c.push(m(u));for(c.sort(d),o=0;o<c.length;o++)f(c[o],i),i=r(i,i.next);return i}function d(t,e){return t.x-e.x}function f(t,e){if(e=p(t,e)){var i=_(e,t);r(i,i.next)}}function p(t,e){var i,n=e,s=t.x,r=t.y,o=-1/0;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var a=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=s&&a>o){if(o=a,a===s){if(r===n.y)return n;if(r===n.next.y)return n.next}i=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!i)return null;if(s===o)return i.prev;var h,l=i,u=i.x,c=i.y,d=1/0;for(n=i.next;n!==l;)s>=n.x&&n.x>=u&&s!==n.x&&x(r<c?s:o,r,u,c,r<c?o:s,r,n.x,n.y)&&((h=Math.abs(r-n.y)/(s-n.x))<d||h===d&&n.x>i.x)&&C(n,t)&&(i=n,d=h),n=n.next;return i}function v(t,e,i,n){var s=t;do{null===s.z&&(s.z=y(s.x,s.y,e,i,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,g(s)}function g(t){var e,i,n,s,r,o,a,h,l=1;do{for(i=t,t=null,r=null,o=0;i;){for(o++,n=i,a=0,e=0;e<l&&(a++,n=n.nextZ);e++);for(h=l;a>0||h>0&&n;)0!==a&&(0===h||!n||i.z<=n.z)?(s=i,i=i.nextZ,a--):(s=n,n=n.nextZ,h--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=n}r.nextZ=null,l*=2}while(o>1);return t}function y(t,e,i,n,s){return t=32767*(t-i)/s,e=32767*(e-n)/s,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function m(t){var e=t,i=t;do{e.x<i.x&&(i=e),e=e.next}while(e!==t);return i}function x(t,e,i,n,s,r,o,a){return(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(n-a)-(i-o)*(e-a)>=0&&(i-o)*(r-a)-(s-o)*(n-a)>=0}function w(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!A(t,e)&&C(t,e)&&C(e,t)&&M(t,e)}function b(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function S(t,e,i,n){return!!(T(t,e)&&T(i,n)||T(t,n)&&T(i,e))||b(t,e,i)>0!=b(t,e,n)>0&&b(i,n,t)>0!=b(i,n,e)>0}function A(t,e){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&S(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}function C(t,e){return b(t.prev,t,t.next)<0?b(t,e,t.next)>=0&&b(t,t.prev,e)>=0:b(t,e,t.prev)<0||b(t,t.next,e)<0}function M(t,e){var i=t,n=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{i.y>r!=i.next.y>r&&i.next.y!==i.y&&s<(i.next.x-i.x)*(r-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==t);return n}function _(t,e){var i=new L(t.i,t.x,t.y),n=new L(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,i.next=s,s.prev=i,n.next=i,i.prev=n,r.next=n,n.prev=r,n}function E(t,e,i,n){var s=new L(t,e,i);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function P(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function L(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k(t,e,i,n){for(var s=0,r=e,o=i-n;r<i;r+=n)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=n,n.deviation=function(t,e,i,n){var s=e&&e.length,r=s?e[0]*i:t.length,o=Math.abs(k(t,0,r,i));if(s)for(var a=0,h=e.length;a<h;a++){var l=e[a]*i,u=a<h-1?e[a+1]*i:t.length;o-=Math.abs(k(t,l,u,i))}var c=0;for(a=0;a<n.length;a+=3){var d=n[a]*i,f=n[a+1]*i,p=n[a+2]*i;c+=Math.abs((t[d]-t[p])*(t[f+1]-t[d+1])-(t[d]-t[f])*(t[p+1]-t[d+1]))}return 0===o&&0===c?0:Math.abs((c-o)/o)},n.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},n=0,s=0;s<t.length;s++){for(var r=0;r<t[s].length;r++)for(var o=0;o<e;o++)i.vertices.push(t[s][r][o]);s>0&&(n+=t[s-1].length,i.holes.push(n))}return i}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(153),r=new n({initialize:function(t){this.area=0,this.points=[],t&&this.setTo(t)},contains:function(t,e){return s(this,t,e)},setTo:function(t){if(this.area=0,this.points=[],!Array.isArray(t))return this;for(var e,i=Number.MAX_VALUE,n=0;n<t.length;n++)e={x:0,y:0},"number"==typeof t[n]?(e.x=t[n],e.y=t[n+1],n++):Array.isArray(t[n])?(e.x=t[n][0],e.y=t[n][1]):(e.x=t[n].x,e.y=t[n].y),this.points.push(e),e.y<i&&(i=e.y);return this.calculateArea(i),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t,e,i=0,n=0;n<this.points.length-1;n++)t=this.points[n],e=this.points[n+1],i+=(e.x-t.x)*(t.y+e.y);return t=this.points[0],e=this.points[this.points.length-1],i+=(t.x-e.x)*(e.y+t.y),this.area=.5*-i,this.area}});t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x=e-t.width/2,t.y=i-t.height/2,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=[]),e.push({x:t.x,y:t.y}),e.push({x:t.right,y:t.y}),e.push({x:t.right,y:t.bottom}),e.push({x:t.x,y:t.bottom}),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(156),s=i(104),r=function(t,e,i,r){void 0===r&&(r=[]),e||(e=s(t)/i);for(var o=0;o<e;o++){var a=o/e;r.push(n(t,a))}return r};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(104),s=i(6),r=function(t,e,i,r){if(void 0===r&&(r=[]),!e&&!i)return r;e?i=Math.round(n(t)/e):e=n(t)/i;for(var o=t.x,a=t.y,h=0,l=0;l<i;l++)switch(r.push(new s(o,a)),h){case 0:o+=e,o>=t.right&&(h=1,a+=o-t.right,o=t.right);break;case 1:a+=e,a>=t.bottom&&(h=2,o-=a-t.bottom,a=t.bottom);break;case 2:o-=e,o<=t.left&&(h=3,a-=t.left-o,o=t.left);break;case 3:a-=e,a<=t.top&&(h=0,a=t.top)}return r};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t,e,i){void 0===i&&(i=new n);var s=Math.min(t.x,e.x),r=Math.min(t.y,e.y),o=Math.max(t.right,e.right)-s,a=Math.max(t.bottom,e.bottom)-r;return i.setTo(s,r,o,a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9);n.Area=i(712),n.Ceil=i(713),n.CeilAll=i(714),n.CenterOn=i(282),n.Clone=i(715),n.Contains=i(41),n.ContainsPoint=i(716),n.ContainsRect=i(717),n.CopyFrom=i(718),n.Decompose=i(283),n.Equals=i(719),n.FitInside=i(720),n.FitOutside=i(721),n.Floor=i(722),n.FloorAll=i(723),n.FromPoints=i(154),n.GetAspectRatio=i(155),n.GetCenter=i(724),n.GetPoint=i(156),n.GetPoints=i(284),n.GetSize=i(725),n.Inflate=i(726),n.MarchingAnts=i(285),n.MergePoints=i(727),n.MergeRect=i(728),n.MergeXY=i(729),n.Offset=i(730),n.OffsetPoint=i(731),n.Overlaps=i(732),n.Perimeter=i(104),n.PerimeterPoint=i(733),n.Random=i(157),n.Scale=i(734),n.Union=i(286),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){return void 0===e&&(e=new n),e.x=(t.x1+t.x2+t.x3)/3,e.y=(t.y1+t.y2+t.y3)/3,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=[]),e.push({x:t.x1,y:t.y1}),e.push({x:t.x2,y:t.y2}),e.push({x:t.x3,y:t.y3}),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=i(83),r=function(t,e,i){void 0===i&&(i=new n);var r=t.getLineA(),o=t.getLineB(),a=t.getLineC();if(e<=0||e>=1)return i.x=r.x1,i.y=r.y1,i;var h=s(r),l=s(o),u=s(a),c=h+l+u,d=c*e,f=0;return d<h?(f=d/h,i.x=r.x1+(r.x2-r.x1)*f,i.y=r.y1+(r.y2-r.y1)*f):d>h+l?(d-=h+l,f=d/u,i.x=a.x1+(a.x2-a.x1)*f,i.y=a.y1+(a.y2-a.y1)*f):(d-=h,f=d/l,i.x=o.x1+(o.x2-o.x1)*f,i.y=o.y1+(o.y2-o.y1)*f),i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(83),s=i(6),r=function(t,e,i,r){void 0===r&&(r=[]);var o=t.getLineA(),a=t.getLineB(),h=t.getLineC(),l=n(o),u=n(a),c=n(h),d=l+u+c;e||(e=d/i);for(var f=0;f<e;f++){var p=d*(f/e),v=0,g=new s;p<l?(v=p/l,g.x=o.x1+(o.x2-o.x1)*v,g.y=o.y1+(o.y2-o.y1)*v):p>l+u?(p-=l+u,v=p/c,g.x=h.x1+(h.x2-h.x1)*v,g.y=h.y1+(h.y2-h.y1)*v):(p-=l,v=p/u,g.x=a.x1+(a.x2-a.x1)*v,g.y=a.y1+(a.y2-a.y1)*v),r.push(g)}return r};t.exports=r},function(t,e,i){function n(t,e,i,n){var s=t-i,r=e-n,o=s*s+r*r;return Math.sqrt(o)}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=i(6),r=function(t,e){void 0===e&&(e=new s);var i=t.x1,r=t.y1,o=t.x2,a=t.y2,h=t.x3,l=t.y3,u=n(h,l,o,a),c=n(i,r,h,l),d=n(o,a,i,r),f=u+c+d;return e.x=(i*u+o*c+h*d)/f,e.y=(r*u+a*c+l*d)/f,e};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x1+=e,t.y1+=i,t.x2+=e,t.y2+=i,t.x3+=e,t.y3+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return{gameObject:t,enabled:!0,draggable:!1,dropZone:!1,target:null,camera:null,hitArea:e,hitAreaCallback:i,localX:0,localY:0,dragState:0,dragStartX:0,dragStartY:0,dragX:0,dragY:0}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(300),o=i(301),a=i(304),h=i(296),l=i(9),u=i(305),c=i(79),d=i(324),f=new n({initialize:function(t,e){this.game=t,this.canvas,this.config=e,this.enabled=!0,this.events=new s,this.queue=[],this.keyboard=new o(this),this.mouse=new a(this),this.touch=new u(this),this.gamepad=new r(this),this.activePointer=new h(this,0),this.scale={x:1,y:1},this.globalTopOnly=!0,this.ignoreEvents=!1,this.bounds=new l,this._tempPoint={x:0,y:0},this._tempHitTest=[],this._tempMatrix=new c,t.events.once("boot",this.boot,this)},boot:function(){this.canvas=this.game.canvas,this.updateBounds(),this.keyboard.boot(),this.mouse.boot(),this.touch.boot(),this.gamepad.boot(),this.game.events.once("destroy",this.destroy,this)},updateBounds:function(){var t=this.bounds,e=this.canvas.getBoundingClientRect();t.x=e.left+window.pageXOffset-document.documentElement.clientLeft,t.y=e.top+window.pageYOffset-document.documentElement.clientTop,t.width=e.width,t.height=e.height},resize:function(){this.updateBounds();var t=this.game.config.width,e=this.game.config.height,i=this.bounds.width,n=this.bounds.height;this.scale.x=t/i,this.scale.y=e/n},update:function(t){this.keyboard.update(),this.gamepad.update(),this.ignoreEvents=!1;var e=this.queue.length,i=this.activePointer;if(i.reset(),this.enabled&&0!==e){this.updateBounds(),this.scale.x=this.game.config.width/this.bounds.width,this.scale.y=this.game.config.height/this.bounds.height;for(var n=this.queue.splice(0,e),s=0;s<e;s++){var r=n[s];switch(r.type){case"mousemove":i.move(r,t);break;case"mousedown":i.down(r,t);break;case"mouseup":i.up(r,t);break;case"touchmove":i.touchmove(r,t);break;case"touchstart":i.touchstart(r,t);break;case"touchend":i.touchend(r,t);break;case"pointerlockchange":this.events.emit("pointerlockchange",r,this.mouse.locked)}}}},hitTest:function(t,e,i,n,s){void 0===s&&(s=this._tempHitTest);var r=this._tempPoint,o=n.width,a=n.height;if(s.length=0,!(t>=n.x&&e>=n.y&&t<=n.x+o&&e<=n.y+a))return s;n.getWorldPoint(t,e,r);for(var h=n.cull(i),l={x:0,y:0},u=this.game.config.resolution,c=this._tempMatrix,f=0;f<h.length;f++){var p=h[f];if(p.input&&p.input.enabled&&p.willRender()){var v=r.x*u+n.scrollX*p.scrollFactorX-n.scrollX,g=r.y*u+n.scrollY*p.scrollFactorY-n.scrollY;p.parentContainer?(p.getWorldTransformMatrix(c),d(v,g,c.tx,c.ty,c.rotation,c.scaleX,c.scaleY,l)):d(v,g,p.x,p.y,p.rotation,p.scaleX,p.scaleY,l),this.pointWithinHitArea(p,l.x,l.y)&&s.push(p)}}return s},pointWithinHitArea:function(t,e,i){var n=t.input;return e+=t.displayOriginX,i+=t.displayOriginY,!!n.hitAreaCallback(n.hitArea,e,i,t)&&(n.localX=e,n.localY=i,!0)},pointWithinInteractiveObject:function(t,e,i){return!!t.hitArea&&(e+=t.gameObject.displayOriginX,i+=t.gameObject.displayOriginY,t.localX=e,t.localY=i,t.hitAreaCallback(t.hitArea,e,i,t))},transformX:function(t){return(t-this.bounds.left)*this.scale.x},transformY:function(t){return(t-this.bounds.top)*this.scale.y},getOffsetX:function(){return this.bounds.left},getOffsetY:function(){return this.bounds.top},getScaleX:function(){return this.game.config.width/this.bounds.width},getScaleY:function(){return this.game.config.height/this.bounds.height},destroy:function(){this.events.removeAllListeners(),this.keyboard.destroy(),this.mouse.destroy(),this.touch.destroy(),this.gamepad.destroy(),this.activePointer.destroy(),this.queue=[],this.game=null}});t.exports=f},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(4),r=new n({initialize:function(t,e){this.manager=t,this.id=e,this.event,this.camera=null,this.buttons=0,this.position=new s,this.downX=0,this.downY=0,this.downTime=0,this.upX=0,this.upY=0,this.upTime=0,this.primaryDown=!1,this.dragState=0,this.isDown=!1,this.dirty=!1,this.justDown=!1,this.justUp=!1,this.justMoved=!1,this.wasTouch=!1,this.movementX=0,this.movementY=0},positionToCamera:function(t,e){return t.getWorldPoint(this.x,this.y,e)},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},reset:function(){this.dirty=!1,this.justDown=!1,this.justUp=!1,this.justMoved=!1,this.movementX=0,this.movementY=0},touchmove:function(t){this.event=t,this.x=this.manager.transformX(t.changedTouches[0].pageX),this.y=this.manager.transformY(t.changedTouches[0].pageY),this.justMoved=!0,this.dirty=!0,this.wasTouch=!0},move:function(t){t.buttons&&(this.buttons=t.buttons),this.event=t,this.x=this.manager.transformX(t.pageX),this.y=this.manager.transformY(t.pageY),this.manager.mouse.locked&&(this.movementX+=t.movementX||t.mozMovementX||t.webkitMovementX||0,this.movementY+=t.movementY||t.mozMovementY||t.webkitMovementY||0),this.justMoved=!0,this.dirty=!0,this.wasTouch=!1},down:function(t,e){t.buttons&&(this.buttons=t.buttons),this.event=t,this.x=this.manager.transformX(t.pageX),this.y=this.manager.transformY(t.pageY),0===t.button&&(this.primaryDown=!0,this.downX=this.x,this.downY=this.y,this.downTime=e),this.justDown=!0,this.isDown=!0,this.dirty=!0,this.wasTouch=!1},touchstart:function(t,e){this.buttons=1,this.event=t,this.x=this.manager.transformX(t.changedTouches[0].pageX),this.y=this.manager.transformY(t.changedTouches[0].pageY),this.primaryDown=!0,this.downX=this.x,this.downY=this.y,this.downTime=e,this.justDown=!0,this.isDown=!0,this.dirty=!0,this.wasTouch=!0},up:function(t,e){t.buttons&&(this.buttons=t.buttons),this.event=t,this.x=this.manager.transformX(t.pageX),this.y=this.manager.transformY(t.pageY),0===t.button&&(this.primaryDown=!1,this.upX=this.x,this.upY=this.y,this.upTime=e),this.justUp=!0,this.isDown=!1,this.dirty=!0,this.wasTouch=!1},touchend:function(t,e){this.buttons=0,this.event=t,this.x=this.manager.transformX(t.changedTouches[0].pageX),this.y=this.manager.transformY(t.changedTouches[0].pageY),this.primaryDown=!1,this.upX=this.x,this.upY=this.y,this.upTime=e,this.justUp=!0,this.isDown=!1,this.dirty=!0,this.wasTouch=!0},noButtonDown:function(){return 0===this.buttons},leftButtonDown:function(){return 1&this.buttons},rightButtonDown:function(){return 2&this.buttons},middleButtonDown:function(){return 4&this.buttons},backButtonDown:function(){return 8&this.buttons},forwardButtonDown:function(){return 16&this.buttons},destroy:function(){this.camera=null,this.manager=null,this.position=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.pad=t,this.events=t.events,this.index=e,this.value=0,this.threshold=.1},update:function(t){this.value=t},getValue:function(){return Math.abs(this.value)<this.threshold?0:this.value}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e){this.pad=t,this.events=t.manager,this.index=e,this.value=0,this.threshold=1,this.pressed=!1},update:function(t){this.value=t.value,this.value>=this.threshold?this.pressed||(this.pressed=!0,this.events.emit("down",this.pad,this,this.value,t)):this.pressed&&(this.pressed=!1,this.events.emit("up",this.pad,this,this.value,t))}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(297),s=i(298),r=i(0),o=new r({initialize:function(t,e,i){this.manager=t,this.id=e,this.index=i,this.connected=!0,this.timestamp=0,this.buttons=[],this.axes=[]},update:function(t){this.timestamp=t.timestamp,this.connected=t.connected;var e,i=this.axes,r=this.buttons;for(e=0;e<t.buttons.length;e++){var o=t.buttons[e];void 0===r[e]&&(r[e]=new s(this,e)),r[e].update(o)}for(e=0;e<t.axes.length;e++){var a=t.axes[e];void 0===i[e]?i[e]=new n(this,e):i[e].update(a)}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(299),o=new n({Extends:s,initialize:function(t){s.call(this),this.manager=t,this.enabled=!1,this.target,this.handler,this.gamepads=[],this.queue=[]},boot:function(){var t=this.manager.config;this.enabled=t.inputGamepad&&this.manager.game.device.input.gamepads,this.target=window,this.enabled&&this.startListeners()},startListeners:function(){var t=this.queue,e=function(e){e.defaultPrevented||t.push(e)};this.handler=e;var i=this.target;i.addEventListener("gamepadconnected",e,!1),i.addEventListener("gamepaddisconnected",e,!1),i.addEventListener("gamepadbuttondown",e,!1),i.addEventListener("gamepadbuttonup",e,!1),i.addEventListener("gamepadaxismove",e,!1)},stopListeners:function(){var t=this.target,e=this.handler;t.removeEventListener("gamepadconnected",e),t.removeEventListener("gamepaddisconnected",e),t.removeEventListener("gamepadbuttondown",e),t.removeEventListener("gamepadbuttonup",e),t.removeEventListener("gamepadaxismove",e)},disconnectAll:function(){for(var t=0;t<this.gamepads.length;t++)this.gamepads.connected=!1},addPad:function(t){var e=new r(this,t.id,t.index);return this.gamepads[t.index]=e,e},removePad:function(){},refreshPads:function(t){if(t)for(var e=0;e<t.length;e++){var i=t[e];i&&(void 0===this.gamepads[i.index]&&this.addPad(i),this.gamepads[i.index].update(i))}else this.disconnectAll()},getAll:function(){for(var t=[],e=0;e<this.gamepads.length;e++)this.gamepads[e]&&t.push(this.gamepads[e]);return t},getPad:function(t){for(var e=0;e<this.gamepads.length;e++)if(this.gamepads[e].index===t)return this.gamepads[e]},update:function(){if(this.enabled){this.refreshPads(navigator.getGamepads());var t=this.queue.length;if(0!==t)for(var e=this.queue.splice(0,t),i=0;i<t;i++){var n,s=e[i];switch(s.type){case"gamepadconnected":n=this.getPad(s.gamepad.index),this.emit("connected",n,s);break;case"gamepaddisconnected":n=this.getPad(s.gamepad.index),this.emit("disconnected",n,s)}}}},destroy:function(){this.stopListeners(),this.disconnectAll(),this.gamepads=[]},total:{get:function(){return this.gamepads.length}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(303),o=i(161),a=i(302),h=i(764),l=i(765),u=i(766),c=new n({Extends:s,initialize:function(t){s.call(this),this.manager=t,this.enabled=!1,this.target,this.keys=[],this.combos=[],this.captures=[],this.queue=[],this.handler},boot:function(){var t=this.manager.config;this.enabled=t.inputKeyboard,this.target=t.inputKeyboardEventTarget,this.enabled&&this.startListeners()},startListeners:function(){var t=this.queue,e=this.captures,i=function(i){i.defaultPrevented||(t.push(i),e[i.keyCode]&&i.preventDefault())};this.handler=i,this.target.addEventListener("keydown",i,!1),this.target.addEventListener("keyup",i,!1)},stopListeners:function(){this.target.removeEventListener("keydown",this.handler),this.target.removeEventListener("keyup",this.handler)},createCursorKeys:function(){return this.addKeys({up:o.UP,down:o.DOWN,left:o.LEFT,right:o.RIGHT,space:o.SPACE,shift:o.SHIFT})},addKeys:function(t){var e={};for(var i in t)e[i]=this.addKey(t[i]);return e},addKey:function(t){var e=this.keys;return e[t]||(e[t]=new r(t),this.captures[t]=!0),e[t]},removeKey:function(t){this.keys[t]&&(this.keys[t]=void 0,this.captures[t]=!1)},addKeyCapture:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++)this.captures[t[e]]=!0},removeKeyCapture:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++)this.captures[t[e]]=!1},createCombo:function(t,e){return new a(this,t,e)},update:function(){var t=this.queue.length;if(this.enabled&&0!==t)for(var e=this.queue.splice(0,t),i=this.keys,n=0;n<t;n++){var s=e[n],r=s.keyCode;"keydown"===s.type?(!h[r]||void 0!==i[r]&&!1!==i[r].isDown||(this.emit(s.type,s),this.emit("keydown_"+h[r],s)),i[r]&&l(i[r],s)):(this.emit(s.type,s),this.emit("keyup_"+h[r],s),i[r]&&u(i[r],s))}},shutdown:function(){this.removeAllListeners()},destroy:function(){this.stopListeners(),this.removeAllListeners(),this.keys=[],this.combos=[],this.captures=[],this.queue=[],this.handler=void 0,this.manager=null}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=i(758),o=i(759),a=new n({initialize:function(t,e,i){if(void 0===i&&(i={}),e.length<2)return!1;this.manager=t,this.enabled=!0,this.keyCodes=[];for(var n=0;n<e.length;n++){var a=e[n];"string"==typeof a?this.keyCodes.push(a.toUpperCase().charCodeAt(0)):"number"==typeof a?this.keyCodes.push(a):a.hasOwnProperty("keyCode")&&this.keyCodes.push(a.keyCode)}this.current=this.keyCodes[0],this.index=0,this.size=this.keyCodes.length,this.timeLastMatched=0,this.matched=!1,this.timeMatched=0,this.resetOnWrongKey=s(i,"resetOnWrongKey",!0),this.maxKeyDelay=s(i,"maxKeyDelay",0),this.resetOnMatch=s(i,"resetOnMatch",!1),this.deleteOnMatch=s(i,"deleteOnMatch",!1);var h=this,l=function(t){if(!h.matched&&h.enabled){r(t,h)&&(h.manager.emit("keycombomatch",h,t),h.resetOnMatch?o(h):h.deleteOnMatch&&h.destroy())}};this.onKeyDown=l,this.manager.on("keydown",l)},progress:{get:function(){return this.index/this.size}},destroy:function(){this.enabled=!1,this.keyCodes=[],this.manager.off("keydown",this.onKeyDown),this.manager=void 0}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.keyCode=t,this.originalEvent=void 0,this.preventDefault=!0,this.enabled=!0,this.isDown=!1,this.isUp=!0,this.altKey=!1,this.ctrlKey=!1,this.shiftKey=!1,this.location=0,this.timeDown=0,this.duration=0,this.timeUp=0,this.repeats=0,this._justDown=!1,this._justUp=!1},reset:function(){return this.preventDefault=!0,this.enabled=!0,this.isDown=!1,this.isUp=!0,this.altKey=!1,this.ctrlKey=!1,this.shiftKey=!1,this.timeDown=0,this.duration=0,this.timeUp=0,this.repeats=0,this._justDown=!1,this._justUp=!1,this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(126),r=new n({initialize:function(t){this.manager=t,this.capture=!0,this.enabled=!1,this.target,this.handler,this.locked=!1},boot:function(){var t=this.manager.config;this.enabled=t.inputMouse,this.target=t.inputMouseEventTarget,this.capture=t.inputMouseCapture,this.target||(this.target=this.manager.game.canvas),t.disableContextMenu&&this.disableContextMenu(),this.enabled&&this.startListeners()},disableContextMenu:function(){return document.body.addEventListener("contextmenu",function(t){return t.preventDefault(),!1}),this},requestPointerLock:function(){if(s.pointerLock){var t=this.target;t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock,t.requestPointerLock()}},pointerLockChange:function(t){var e=this.target;this.locked=document.pointerLockElement===e||document.mozPointerLockElement===e||document.webkitPointerLockElement===e,this.manager.queue.push(t)},releasePointerLock:function(){s.pointerLock&&(document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock())},startListeners:function(){var t,e=this.manager.queue,i=this.target,n={passive:!0},r={passive:!1};this.capture?(t=function(t){t.defaultPrevented||(e.push(t),t.preventDefault())},i.addEventListener("mousemove",t,r),i.addEventListener("mousedown",t,r),i.addEventListener("mouseup",t,r)):(t=function(t){t.defaultPrevented||e.push(t)},i.addEventListener("mousemove",t,n),i.addEventListener("mousedown",t,n),i.addEventListener("mouseup",t,n)),this.handler=t,s.pointerLock&&(this.pointerLockChange=this.pointerLockChange.bind(this),document.addEventListener("pointerlockchange",this.pointerLockChange,!0),document.addEventListener("mozpointerlockchange",this.pointerLockChange,!0),document.addEventListener("webkitpointerlockchange",this.pointerLockChange,!0))},stopListeners:function(){var t=this.target;t.removeEventListener("mousemove",this.handler),t.removeEventListener("mousedown",this.handler),t.removeEventListener("mouseup",this.handler),s.pointerLock&&(document.removeEventListener("pointerlockchange",this.pointerLockChange,!0),document.removeEventListener("mozpointerlockchange",this.pointerLockChange,!0),document.removeEventListener("webkitpointerlockchange",this.pointerLockChange,!0))},destroy:function(){this.stopListeners(),this.manager=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.manager=t,this.capture=!0,this.enabled=!1,this.target,this.handler},boot:function(){var t=this.manager.config;this.enabled=t.inputTouch,this.target=t.inputTouchEventTarget,this.capture=t.inputTouchCapture,this.target||(this.target=this.manager.game.canvas),this.enabled&&this.startListeners()},startListeners:function(){var t,e=this.manager.queue,i=this.target,n={passive:!0},s={passive:!1};this.capture?(t=function(t){t.defaultPrevented||(e.push(t),t.preventDefault())},i.addEventListener("touchstart",t,s),i.addEventListener("touchmove",t,s),i.addEventListener("touchend",t,s)):(t=function(t){t.defaultPrevented||e.push(t)},i.addEventListener("touchstart",t,n),i.addEventListener("touchmove",t,n),i.addEventListener("touchend",t,n)),this.handler=t},stopListeners:function(){var t=this.target;t.removeEventListener("touchstart",this.handler),t.removeEventListener("touchmove",this.handler),t.removeEventListener("touchend",this.handler)},destroy:function(){this.stopListeners(),this.manager=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(163),s=function(t,e){var i=n(e,t.xhrSettings),s=new XMLHttpRequest;return s.open("GET",t.src,i.async,i.user,i.password),s.responseType=t.xhrSettings.responseType,s.timeout=i.timeout,i.header&&i.headerValue&&s.setRequestHeader(i.header,i.headerValue),i.requestedWith&&s.setRequestHeader("X-Requested-With",i.requestedWith),i.overrideMimeType&&s.overrideMimeType(i.overrideMimeType),s.onload=t.onLoad.bind(t,s),s.onerror=t.onError.bind(t),s.onprogress=t.onProgress.bind(t),s.send(),s};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(23),r=i(21),o=i(7),a=i(1),h=i(308),l=i(11),u=new n({Extends:r,initialize:function(t,e,i,n,s){if(l(e)){var o=e;e=a(o,"key"),n=a(o,"xhrSettings"),s=a(o,"context",s)}var h={type:"audio",cache:t.cacheManager.audio,extension:i.type,responseType:"arraybuffer",key:e,url:i.url,xhrSettings:n,config:{context:s}};r.call(this,t,h)},onProcess:function(){this.state=s.FILE_PROCESSING;var t=this;this.config.context.decodeAudioData(this.xhrLoader.response,function(e){t.data=e,t.onProcessComplete()},function(e){console.error("Error decoding audio: "+this.key+" - ",e.message),t.onProcessError()}),this.config.context=null}});u.create=function(t,e,i,n,s){var r=t.systems.game,o=r.config.audio,c=r.device.audio;l(e)&&(i=a(e,"url",[]),n=a(e,"config",{}));var d=u.getAudioURL(r,i);return d?!c.webAudio||o&&o.disableWebAudio?new h(t,e,d,n):new u(t,e,d,s,r.sound.context):null},u.getAudioURL=function(t,e){Array.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++){var n=a(e[i],"url",e[i]);if(0===n.indexOf("blob:")||0===n.indexOf("data:"))return n;var s=n.match(/\.([a-zA-Z0-9]+)($|\?)/);if(s=a(e[i],"type",s?s[1]:"").toLowerCase(),t.device.audio[s])return{url:n,type:s}}return null},o.register("audio",function(t,e,i,n){var s=this.systems.game,r=s.config.audio,o=s.device.audio;if(r&&r.noAudio||!o.webAudio&&!o.audioData)return this;var a;if(Array.isArray(t))for(var h=0;h<t.length;h++)(a=u.create(this,t[h]))&&this.addFile(a);else(a=u.create(this,t,e,i,n))&&this.addFile(a);return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(21),r=i(1),o=i(162),a=i(11),h=new n({Extends:s,initialize:function(t,e,i,n){if(a(e)){var o=e;e=r(o,"key"),n=r(o,"config",n)}var h={type:"audio",cache:t.cacheManager.audio,extension:i.type,key:e,url:i.url,config:n};s.call(this,t,h),this.locked="ontouchstart"in window,this.loaded=!1,this.filesLoaded=0,this.filesTotal=0},onLoad:function(){this.loaded||(this.loaded=!0,this.loader.nextFile(this,!0))},onError:function(){for(var t=0;t<this.data.length;t++){var e=this.data[t];e.oncanplaythrough=null,e.onerror=null}this.loader.nextFile(this,!1)},onProgress:function(t){var e=t.target;e.oncanplaythrough=null,e.onerror=null,this.filesLoaded++,this.percentComplete=Math.min(this.filesLoaded/this.filesTotal,1),this.loader.emit("fileprogress",this,this.percentComplete),this.filesLoaded===this.filesTotal&&this.onLoad()},load:function(){this.data=[];var t=this.config&&this.config.instances||1;this.filesTotal=t,this.filesLoaded=0,this.percentComplete=0;for(var e=0;e<t;e++){var i=new Audio;i.dataset.name=this.key+("0"+e).slice(-2),i.dataset.used="false",this.locked?i.dataset.locked="true":(i.dataset.locked="false",i.preload="auto",i.oncanplaythrough=this.onProgress.bind(this),i.onerror=this.onError.bind(this)),this.data.push(i)}for(e=0;e<this.data.length;e++)i=this.data[e],i.src=o(this,this.loader.baseURL),this.locked||i.load();this.locked&&setTimeout(this.onLoad.bind(this))}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n){var s="txt";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}var l={type:"text",cache:t.cacheManager.text,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,t,l)},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.responseText,this.onProcessComplete()}});o.register("text",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(this,t[n]));else this.addFile(new l(this,t,e,i));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(312),s=function(t,e){return n(t)/n(e)/n(t-e)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){if(0===t)return 1;for(var e=t;--t;)e*=t;return e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.random()*(e-t)+t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.val=new Float32Array(9),t?this.copy(t):this.identity()},clone:function(){return new s(this)},set:function(t){return this.copy(t)},copy:function(t){var e=this.val,i=t.val;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this},fromMat4:function(t){var e=t.val,i=this.val;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],this},fromArray:function(t){var e=this.val;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,e=t[1],i=t[2],n=t[5];return t[1]=t[3],t[2]=t[6],t[3]=e,t[5]=t[7],t[6]=i,t[7]=n,this},invert:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8],u=l*r-o*h,c=-l*s+o*a,d=h*s-r*a,f=e*u+i*c+n*d;return f?(f=1/f,t[0]=u*f,t[1]=(-l*i+n*h)*f,t[2]=(o*i-n*r)*f,t[3]=c*f,t[4]=(l*e-n*a)*f,t[5]=(-o*e+n*s)*f,t[6]=d*f,t[7]=(-h*e+i*a)*f,t[8]=(r*e-i*s)*f,this):null},adjoint:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8];return t[0]=r*l-o*h,t[1]=n*h-i*l,t[2]=i*o-n*r,t[3]=o*a-s*l,t[4]=e*l-n*a,t[5]=n*s-e*o,t[6]=s*h-r*a,t[7]=i*a-e*h,t[8]=e*r-i*s,this},determinant:function(){var t=this.val,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],a=t[6],h=t[7],l=t[8];return e*(l*r-o*h)+i*(-l*s+o*a)+n*(h*s-r*a)},multiply:function(t){var e=this.val,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],c=t.val,d=c[0],f=c[1],p=c[2],v=c[3],g=c[4],y=c[5],m=c[6],x=c[7],w=c[8];return e[0]=d*i+f*r+p*h,e[1]=d*n+f*o+p*l,e[2]=d*s+f*a+p*u,e[3]=v*i+g*r+y*h,e[4]=v*n+g*o+y*l,e[5]=v*s+g*a+y*u,e[6]=m*i+x*r+w*h,e[7]=m*n+x*o+w*l,e[8]=m*s+x*a+w*u,this},translate:function(t){var e=this.val,i=t.x,n=t.y;return e[6]=i*e[0]+n*e[3]+e[6],e[7]=i*e[1]+n*e[4]+e[7],e[8]=i*e[2]+n*e[5]+e[8],this},rotate:function(t){var e=this.val,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],h=Math.sin(t),l=Math.cos(t);return e[0]=l*i+h*r,e[1]=l*n+h*o,e[2]=l*s+h*a,e[3]=l*r-h*i,e[4]=l*o-h*n,e[5]=l*a-h*s,this},scale:function(t){var e=this.val,i=t.x,n=t.y;return e[0]=i*e[0],e[1]=i*e[1],e[2]=i*e[2],e[3]=n*e[3],e[4]=n*e[4],e[5]=n*e[5],this},fromQuat:function(t){var e=t.x,i=t.y,n=t.z,s=t.w,r=e+e,o=i+i,a=n+n,h=e*r,l=e*o,u=e*a,c=i*o,d=i*a,f=n*a,p=s*r,v=s*o,g=s*a,y=this.val;return y[0]=1-(c+f),y[3]=l+g,y[6]=u-v,y[1]=l-g,y[4]=1-(h+f),y[7]=d+p,y[2]=u+v,y[5]=d-p,y[8]=1-(h+c),this},normalFromMat4:function(t){var e=t.val,i=this.val,n=e[0],s=e[1],r=e[2],o=e[3],a=e[4],h=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],v=e[12],g=e[13],y=e[14],m=e[15],x=n*h-s*a,w=n*l-r*a,b=n*u-o*a,T=s*l-r*h,S=s*u-o*h,A=r*u-o*l,C=c*g-d*v,M=c*y-f*v,_=c*m-p*v,E=d*y-f*g,P=d*m-p*g,L=f*m-p*y,k=x*L-w*P+b*E+T*_-S*M+A*C;return k?(k=1/k,i[0]=(h*L-l*P+u*E)*k,i[1]=(l*_-a*L-u*M)*k,i[2]=(a*P-h*_+u*C)*k,i[3]=(r*P-s*L-o*E)*k,i[4]=(n*L-r*_+o*M)*k,i[5]=(s*_-n*P-o*C)*k,i[6]=(g*A-y*S+m*T)*k,i[7]=(y*b-v*A-m*w)*k,i[8]=(v*S-g*b+m*x)*k,this):null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(71),r=i(314),o=new Int8Array([1,2,0]),a=new Float32Array([0,0,0]),h=new s(1,0,0),l=new s(0,1,0),u=new s,c=new r,d=new n({initialize:function(t,e,i,n){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this},set:function(t,e,i,n){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=e||0,this.z=i||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return Math.sqrt(t*t+e*e+i*i+n*n)},lengthSq:function(){var t=this.x,e=this.y,i=this.z,n=this.w;return t*t+e*e+i*i+n*n},normalize:function(){var t=this.x,e=this.y,i=this.z,n=this.w,s=t*t+e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s),this.x=t*s,this.y=e*s,this.z=i*s,this.w=n*s),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,e){void 0===e&&(e=0);var i=this.x,n=this.y,s=this.z,r=this.w;return this.x=i+e*(t.x-i),this.y=n+e*(t.y-n),this.z=s+e*(t.z-s),this.w=r+e*(t.w-r),this},rotationTo:function(t,e){var i=t.x*e.x+t.y*e.y+t.z*e.z;return i<-.999999?(u.copy(h).cross(t).length()<1e-6&&u.copy(l).cross(t),u.normalize(),this.setAxisAngle(u,Math.PI)):i>.999999?(this.x=0,this.y=0,this.z=0,this.w=1,this):(u.copy(t).cross(e),this.x=u.x,this.y=u.y,this.z=u.z,this.w=1+i,this.normalize())},setAxes:function(t,e,i){var n=c.val;return n[0]=e.x,n[3]=e.y,n[6]=e.z,n[1]=i.x,n[4]=i.y,n[7]=i.z,n[2]=-t.x,n[5]=-t.y,n[8]=-t.z,this.fromMat3(c).normalize()},identity:function(){return this.x=0,this.y=0,this.z=0,this.w=1,this},setAxisAngle:function(t,e){e*=.5;var i=Math.sin(e);return this.x=i*t.x,this.y=i*t.y,this.z=i*t.z,this.w=Math.cos(e),this},multiply:function(t){var e=this.x,i=this.y,n=this.z,s=this.w,r=t.x,o=t.y,a=t.z,h=t.w;return this.x=e*h+s*r+i*a-n*o,this.y=i*h+s*o+n*r-e*a,this.z=n*h+s*a+e*o-i*r,this.w=s*h-e*r-i*o-n*a,this},slerp:function(t,e){var i=this.x,n=this.y,s=this.z,r=this.w,o=t.x,a=t.y,h=t.z,l=t.w,u=i*o+n*a+s*h+r*l;u<0&&(u=-u,o=-o,a=-a,h=-h,l=-l);var c=1-e,d=e;if(1-u>1e-6){var f=Math.acos(u),p=Math.sin(f);c=Math.sin((1-e)*f)/p,d=Math.sin(e*f)/p}return this.x=c*i+d*o,this.y=c*n+d*a,this.z=c*s+d*h,this.w=c*r+d*l,this},invert:function(){var t=this.x,e=this.y,i=this.z,n=this.w,s=t*t+e*e+i*i+n*n,r=s?1/s:0;return this.x=-t*r,this.y=-e*r,this.z=-i*r,this.w=n*r,this},conjugate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},rotateX:function(t){t*=.5;var e=this.x,i=this.y,n=this.z,s=this.w,r=Math.sin(t),o=Math.cos(t);return this.x=e*o+s*r,this.y=i*o+n*r,this.z=n*o-i*r,this.w=s*o-e*r,this},rotateY:function(t){t*=.5;var e=this.x,i=this.y,n=this.z,s=this.w,r=Math.sin(t),o=Math.cos(t);return this.x=e*o-n*r,this.y=i*o+s*r,this.z=n*o+e*r,this.w=s*o-i*r,this},rotateZ:function(t){t*=.5;var e=this.x,i=this.y,n=this.z,s=this.w,r=Math.sin(t),o=Math.cos(t);return this.x=e*o+i*r,this.y=i*o-e*r,this.z=n*o+s*r,this.w=s*o-n*r,this},calculateW:function(){var t=this.x,e=this.y,i=this.z;return this.w=-Math.sqrt(Math.abs(1-t*t-e*e-i*i)),this},fromMat3:function(t){var e,i=t.val,n=i[0]+i[4]+i[8];if(n>0)e=Math.sqrt(n+1),this.w=.5*e,e=.5/e,this.x=(i[7]-i[5])*e,this.y=(i[2]-i[6])*e,this.z=(i[3]-i[1])*e;else{var s=0;i[4]>i[0]&&(s=1),i[8]>i[3*s+s]&&(s=2);var r=o[s],h=o[r];e=Math.sqrt(i[3*s+s]-i[3*r+r]-i[3*h+h]+1),a[s]=.5*e,e=.5/e,a[r]=(i[3*r+s]+i[3*s+r])*e,a[h]=(i[3*h+s]+i[3*s+h])*e,this.x=a[0],this.y=a[1],this.z=a[2],this.w=(i[3*h+r]-i[3*r+h])*e}return this}});t.exports=d},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);var i=2*Math.random()*Math.PI,n=2*Math.random()-1,s=Math.sqrt(1-n*n)*e;return t.x=Math.cos(i)*s,t.y=Math.sin(i)*s,t.z=n*e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1),t.x=(2*Math.random()-1)*e,t.y=(2*Math.random()-1)*e,t.z=(2*Math.random()-1)*e,t.w=(2*Math.random()-1)*e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.x,n=t.y;return t.x=i*Math.cos(e)-n*Math.sin(e),t.y=i*Math.sin(e)+n*Math.cos(e),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=Math.cos(n),r=Math.sin(n),o=t.x-e,a=t.y-i;return t.x=o*s-a*r+e,t.y=o*r+a*s+i,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(71),s=i(167),r=i(315),o=new s,a=new r,h=new n,l=function(t,e,i){return a.setAxisAngle(e,i),o.fromRotationTranslation(a,h.set(0,0,0)),t.transformMat4(o)};t.exports=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t>0?Math.ceil(t):Math.floor(t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return(t=Math.max(0,Math.min(1,(t-e)/(i-e))))*t*(3-2*t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return(t=Math.max(0,Math.min(1,(t-e)/(i-e))))*t*t*(t*(6*t-15)+10)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=function(t,e,i,s,r,o,a,h){void 0===h&&(h=new n);var l=Math.sin(-r),u=Math.cos(-r),c=u*o,d=-l*o,f=l*a,p=u*a,v=c*p-d*f,g=p/v,y=-d/v,m=-f/v,x=c/v,w=(f*s-p*i)/v,b=-(c*s-d*i)/v;return h.x=t*g+e*m+w,h.y=t*y+e*x+b,h};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t%=2*Math.PI,t>=0?t:t+2*Math.PI};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(817),Out:i(819),InOut:i(818)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(820),Out:i(822),InOut:i(821)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(823),Out:i(825),InOut:i(824)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(826),Out:i(828),InOut:i(827)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(829),Out:i(831),InOut:i(830)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(832),Out:i(834),InOut:i(833)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=i(836)},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(837),Out:i(839),InOut:i(838)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(840),Out:i(842),InOut:i(841)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(843),Out:i(845),InOut:i(844)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={In:i(846),Out:i(848),InOut:i(847)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=i(849)},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t,e){var i=1-t;return i*i*i*e}function n(t,e){var i=1-t;return 3*i*i*t*e}function s(t,e){return 3*(1-t)*t*t*e}function r(t,e){return t*t*t*e}var o=function(t,e,o,a,h){return i(t,e)+n(t,o)+s(t,a)+r(t,h)};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
function i(t,e){var i=1-t;return i*i*e}function n(t,e){return 2*(1-t)*t*e}function s(t,e){return t*t*e}var r=function(t,e,r,o){return i(t,e)+n(t,r)+s(t,o)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=Math.log(t)/.6931471805599453;return 1<<Math.ceil(e)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t){this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],t&&this.init(t)},rnd:function(){var t=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|t,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var e,i=this.n;t=t.toString();for(var n=0;n<t.length;n++)i+=t.charCodeAt(n),e=.02519603282416938*i,i=e>>>0,e-=i,e*=i,i=e>>>0,e-=i,i+=4294967296*e;return this.n=i,2.3283064365386963e-10*(i>>>0)},init:function(t){"string"==typeof t?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,t)for(var e=0;e<t.length&&null!=t[e];e++){var i=t[e];this.s0-=this.hash(i),this.s0+=~~(this.s0<0),this.s1-=this.hash(i),this.s1+=~~(this.s1<0),this.s2-=this.hash(i),this.s2+=~~(this.s2<0)}},integer:function(){return 4294967296*this.rnd()},frac:function(){return this.rnd()+1.1102230246251565e-16*(2097152*this.rnd()|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(t,e){return Math.floor(this.realInRange(0,e-t+1)+t)},between:function(t,e){return Math.floor(this.realInRange(0,e-t+1)+t)},realInRange:function(t,e){return this.frac()*(e-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",e="";for(e=t="";t++<36;e+=~t%5|3*t&4?(15^t?8^this.frac()*(20^t?16:4):4).toString(16):"-");return e},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-1)+.5)]},timestamp:function(t,e){return this.realInRange(t||9466848e5,e||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return"string"==typeof t&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var e=t.length-1,i=e;i>0;i--){var n=Math.floor(this.frac()*(e+1)),s=t[n];t[n]=t[i],t[i]=s}return t}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(352),r=i(67),o=new n({Extends:r,Mixins:[s.Acceleration,s.Angular,s.Bounce,s.Debug,s.Drag,s.Enable,s.Friction,s.Gravity,s.Immovable,s.Mass,s.Size,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t,e,i,n,s)}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(40),s=i(0),r=i(55),o=i(168),a=i(9),h=i(41),l=i(79),u=i(4),c=new s({initialize:function(t,e){var i=e.width?e.width:64,n=e.height?e.height:64;this.world=t,this.gameObject=e,this.transform={x:e.x,y:e.y,rotation:e.angle,scaleX:e.scaleX,scaleY:e.scaleY,displayOriginX:e.displayOriginX,displayOriginY:e.displayOriginY},this.debugShowBody=t.defaults.debugShowBody,this.debugShowVelocity=t.defaults.debugShowVelocity,this.debugBodyColor=t.defaults.bodyDebugColor,this.enable=!0,this.isCircle=!1,this.radius=0,this.offset=new u,this.position=new u(e.x,e.y),this.prev=new u(e.x,e.y),this.allowRotation=!0,this.rotation=e.angle,this.preRotation=e.angle,this.width=i,this.height=n,this.sourceWidth=i,this.sourceHeight=n,e.frame&&(this.sourceWidth=e.frame.realWidth,this.sourceHeight=e.frame.realHeight),this.halfWidth=Math.abs(i/2),this.halfHeight=Math.abs(n/2),this.center=new u(e.x+this.halfWidth,e.y+this.halfHeight),this.velocity=new u,this.newVelocity=new u,this.deltaMax=new u,this.acceleration=new u,this.allowDrag=!0,this.drag=new u,this.allowGravity=!0,this.gravity=new u,this.bounce=new u,this.worldBounce=null,this.onWorldBounds=!1,this.onCollide=!1,this.onOverlap=!1,this.maxVelocity=new u(1e4,1e4),this.friction=new u(1,0),this.angularVelocity=0,this.angularAcceleration=0,this.angularDrag=0,this.maxAngular=1e3,this.mass=1,this.angle=0,this.speed=0,this.facing=r.FACING_NONE,this.immovable=!1,this.moves=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.overlapR=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={none:!0,up:!1,down:!1,left:!1,right:!1},this.dirty=!1,this.syncBounds=!1,this.isMoving=!1,this.stopVelocityOnCollide=!0,this.physicsType=r.DYNAMIC_BODY,this._reset=!0,this._sx=e.scaleX,this._sy=e.scaleY,this._dx=0,this._dy=0,this._bounds=new a,this._tempMatrix=new l},updateBounds:function(){var t=this.gameObject,e=this.transform;if(t.parentContainer){var i=t.getWorldTransformMatrix(this._tempMatrix);e.x=i.tx,e.y=i.ty,e.rotation=o(i.rotation),e.scaleX=i.scaleX,e.scaleY=i.scaleY}else e.x=t.x,e.y=t.y,e.rotation=t.angle,e.scaleX=t.scaleX,e.scaleY=t.scaleY;if(this.syncBounds){var n=t.getBounds(this._bounds);n.width===this.width&&n.height===this.height||(this.width=n.width,this.height=n.height,this._reset=!0)}else{var s=Math.abs(e.scaleX),r=Math.abs(e.scaleY);s===this._sx&&r===this._sy||(this.width=this.sourceWidth*s,this.height=this.sourceHeight*r,this._sx=s,this._sy=r,this._reset=!0)}this._reset&&(this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.updateCenter())},updateCenter:function(){this.center.set(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},update:function(t){this.dirty=!0,this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.blocked.none=!0,this.blocked.up=!1,this.blocked.down=!1,this.blocked.left=!1,this.blocked.right=!1,this.overlapR=0,this.overlapX=0,this.overlapY=0,this.embedded=!1,this.updateBounds();var e=this.transform;this.position.x=e.x+e.scaleX*(this.offset.x-e.displayOriginX),this.position.y=e.y+e.scaleY*(this.offset.y-e.displayOriginY),this.updateCenter(),this.rotation=e.rotation,this.preRotation=this.rotation,this._reset&&(this.prev.x=this.position.x,this.prev.y=this.position.y),this.moves&&(this.world.updateMotion(this),this.newVelocity.set(this.velocity.x*t,this.velocity.y*t),this.position.x+=this.newVelocity.x,this.position.y+=this.newVelocity.y,this.updateCenter(),this.position.x===this.prev.x&&this.position.y===this.prev.y||(this.angle=Math.atan2(this.velocity.y,this.velocity.x)),this.speed=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y),this.collideWorldBounds&&this.checkWorldBounds()&&this.onWorldBounds&&this.world.emit("worldbounds",this,this.blocked.up,this.blocked.down,this.blocked.left,this.blocked.right)),this._dx=this.deltaX(),this._dy=this.deltaY(),this._reset=!1},postUpdate:function(){this.enable&&this.dirty&&(this.dirty=!1,this._dx=this.deltaX(),this._dy=this.deltaY(),this._dx<0?this.facing=r.FACING_LEFT:this._dx>0&&(this.facing=r.FACING_RIGHT),this._dy<0?this.facing=r.FACING_UP:this._dy>0&&(this.facing=r.FACING_DOWN),this.moves&&(0!==this.deltaMax.x&&0!==this._dx&&(this._dx<0&&this._dx<-this.deltaMax.x?this._dx=-this.deltaMax.x:this._dx>0&&this._dx>this.deltaMax.x&&(this._dx=this.deltaMax.x)),0!==this.deltaMax.y&&0!==this._dy&&(this._dy<0&&this._dy<-this.deltaMax.y?this._dy=-this.deltaMax.y:this._dy>0&&this._dy>this.deltaMax.y&&(this._dy=this.deltaMax.y)),this.gameObject.x+=this._dx,this.gameObject.y+=this._dy,this._reset=!0),this.updateCenter(),this.allowRotation&&(this.gameObject.angle+=this.deltaZ()),this.prev.x=this.position.x,this.prev.y=this.position.y)},checkWorldBounds:function(){var t=this.position,e=this.world.bounds,i=this.world.checkCollision,n=this.worldBounce?-this.worldBounce.x:-this.bounce.x,s=this.worldBounce?-this.worldBounce.y:-this.bounce.y;return t.x<e.x&&i.left?(t.x=e.x,this.velocity.x*=n,this.blocked.left=!0,this.blocked.none=!1):this.right>e.right&&i.right&&(t.x=e.right-this.width,this.velocity.x*=n,this.blocked.right=!0,this.blocked.none=!1),t.y<e.y&&i.up?(t.y=e.y,this.velocity.y*=s,this.blocked.up=!0,this.blocked.none=!1):this.bottom>e.bottom&&i.down&&(t.y=e.bottom-this.height,this.velocity.y*=s,this.blocked.down=!0,this.blocked.none=!1),!this.blocked.none},setOffset:function(t,e){return void 0===e&&(e=t),this.offset.set(t,e),this},setSize:function(t,e,i){void 0===i&&(i=!0);var n=this.gameObject;if(this.sourceWidth=t,this.sourceHeight=e,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.updateCenter(),i&&n.getCenter){var s=n.displayWidth/2,r=n.displayHeight/2;this.offset.set(s-this.halfWidth,r-this.halfHeight)}return this.isCircle=!1,this.radius=0,this},setCircle:function(t,e,i){return void 0===e&&(e=this.offset.x),void 0===i&&(i=this.offset.y),t>0?(this.isCircle=!0,this.radius=t,this.sourceWidth=2*t,this.sourceHeight=2*t,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.set(e,i),this.updateCenter()):this.isCircle=!1,this},reset:function(t,e){this.stop();var i=this.gameObject;i.setPosition(t,e),i.getTopLeft(this.position),this.prev.copy(this.position),this.rotation=i.angle,this.preRotation=i.angle,this.updateBounds(),this.updateCenter()},stop:function(){return this.velocity.set(0),this.acceleration.set(0),this.speed=0,this.angularVelocity=0,this.angularAcceleration=0,this},getBounds:function(t){return t.x=this.x,t.y=this.y,t.right=this.right,t.bottom=this.bottom,t},hitTest:function(t,e){return this.isCircle?n(this,t,e):h(this,t,e)},onFloor:function(){return this.blocked.down},onCeiling:function(){return this.blocked.up},onWall:function(){return this.blocked.left||this.blocked.right},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.position.x-this.prev.x},deltaY:function(){return this.position.y-this.prev.y},deltaZ:function(){return this.rotation-this.preRotation},destroy:function(){this.enable=!1,this.world.pendingDestroy.set(this)},drawDebug:function(t){var e=this.position,i=e.x+this.halfWidth,n=e.y+this.halfHeight;this.debugShowBody&&(t.lineStyle(1,this.debugBodyColor),this.isCircle?t.strokeCircle(i,n,this.width/2):t.strokeRect(e.x,e.y,this.width,this.height)),this.debugShowVelocity&&(t.lineStyle(1,this.world.defaults.velocityDebugColor,1),t.lineBetween(i,n,i+this.velocity.x/2,n+this.velocity.y/2))},willDrawDebug:function(){return this.debugShowBody||this.debugShowVelocity},setCollideWorldBounds:function(t){return this.collideWorldBounds=t,this},setVelocity:function(t,e){return this.velocity.set(t,e),this},setVelocityX:function(t){return this.velocity.x=t,this},setVelocityY:function(t){return this.velocity.y=t,this},setBounce:function(t,e){return this.bounce.set(t,e),this},setBounceX:function(t){return this.bounce.x=t,this},setBounceY:function(t){return this.bounce.y=t,this},setAcceleration:function(t,e){return this.acceleration.set(t,e),this},setAccelerationX:function(t){return this.acceleration.x=t,this},setAccelerationY:function(t){return this.acceleration.y=t,this},setDrag:function(t,e){return this.drag.set(t,e),this},setDragX:function(t){return this.drag.x=t,this},setDragY:function(t){return this.drag.y=t,this},setGravity:function(t,e){return this.gravity.set(t,e),this},setGravityX:function(t){return this.gravity.x=t,this},setGravityY:function(t){return this.gravity.y=t,this},setFriction:function(t,e){return this.friction.set(t,e),this},setFrictionX:function(t){return this.friction.x=t,this},setFrictionY:function(t){return this.friction.y=t,this},setAngularVelocity:function(t){return this.angularVelocity=t,this},setAngularAcceleration:function(t){return this.angularAcceleration=t,this},setAngularDrag:function(t){return this.angularDrag=t,this},setMass:function(t){return this.mass=t,this},setImmovable:function(t){return this.immovable=t,this},x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},left:{get:function(){return this.position.x}},right:{get:function(){return this.position.x+this.width}},top:{get:function(){return this.position.y}},bottom:{get:function(){return this.position.y+this.height}}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r,o){this.world=t,this.name="",this.active=!0,this.overlapOnly=e,this.object1=i,this.object2=n,this.collideCallback=s,this.processCallback=r,this.callbackContext=o},setName:function(t){return this.name=t,this},update:function(){this.world.collideObjects(this.object1,this.object2,this.collideCallback,this.processCallback,this.callbackContext,this.overlapOnly)},destroy:function(){this.world.removeCollider(this),this.active=!1,this.world=null,this.object1=null,this.object2=null,this.collideCallback=null,this.processCallback=null,this.callbackContext=null}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(342),s=i(107),r=i(0),o=i(55),a=i(348),h=i(350),l=new r({initialize:function(t){this.world=t,this.scene=t.scene,this.sys=t.scene.sys},collider:function(t,e,i,n,s){return this.world.addCollider(t,e,i,n,s)},overlap:function(t,e,i,n,s){return this.world.addOverlap(t,e,i,n,s)},existing:function(t,e){var i=e?o.STATIC_BODY:o.DYNAMIC_BODY;return this.world.enableBody(t,i),t},staticImage:function(t,e,i,s){var r=new n(this.scene,t,e,i,s);return this.sys.displayList.add(r),this.world.enableBody(r,o.STATIC_BODY),r},image:function(t,e,i,s){var r=new n(this.scene,t,e,i,s);return this.sys.displayList.add(r),this.world.enableBody(r,o.DYNAMIC_BODY),r},staticSprite:function(t,e,i,n){var r=new s(this.scene,t,e,i,n);return this.sys.displayList.add(r),this.sys.updateList.add(r),this.world.enableBody(r,o.STATIC_BODY),r},sprite:function(t,e,i,n){var r=new s(this.scene,t,e,i,n);return this.sys.displayList.add(r),this.sys.updateList.add(r),this.world.enableBody(r,o.DYNAMIC_BODY),r},staticGroup:function(t,e){return this.sys.updateList.add(new h(this.world,this.world.scene,t,e))},group:function(t,e){return this.sys.updateList.add(new a(this.world,this.world.scene,t,e))},destroy:function(){this.world=null,this.scene=null,this.sys=null}});t.exports=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=0,r=t.deltaAbsX()+e.deltaAbsX()+n;return 0===t.deltaX()&&0===e.deltaX()?(t.embedded=!0,e.embedded=!0):t.deltaX()>e.deltaX()?(s=t.right-e.x,s>r&&!i||!1===t.checkCollision.right||!1===e.checkCollision.left?s=0:(t.touching.none=!1,t.touching.right=!0,e.touching.none=!1,e.touching.left=!0)):t.deltaX()<e.deltaX()&&(s=t.x-e.width-e.x,-s>r&&!i||!1===t.checkCollision.left||!1===e.checkCollision.right?s=0:(t.touching.none=!1,t.touching.left=!0,e.touching.none=!1,e.touching.right=!0)),t.overlapX=s,e.overlapX=s,s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=0,r=t.deltaAbsY()+e.deltaAbsY()+n;return 0===t.deltaY()&&0===e.deltaY()?(t.embedded=!0,e.embedded=!0):t.deltaY()>e.deltaY()?(s=t.bottom-e.y,s>r&&!i||!1===t.checkCollision.down||!1===e.checkCollision.up?s=0:(t.touching.none=!1,t.touching.down=!0,e.touching.none=!1,e.touching.up=!0)):t.deltaY()<e.deltaY()&&(s=t.y-e.bottom,-s>r&&!i||!1===t.checkCollision.up||!1===e.checkCollision.down?s=0:(t.touching.none=!1,t.touching.up=!0,e.touching.none=!1,e.touching.down=!0)),t.overlapY=s,e.overlapY=s,s};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(107),s=i(0),r=i(55),o=i(1),a=i(80),h=new s({Extends:a,initialize:function(t,e,i,s){void 0!==s||Array.isArray(i)||"object"!=typeof i?void 0===s&&(s={}):(s=i,i=null),this.world=t,s.createCallback=this.createCallbackHandler,s.removeCallback=this.removeCallbackHandler,s.classType=o(s,"classType",n),this.physicsType=r.DYNAMIC_BODY,this.defaults={setCollideWorldBounds:o(s,"collideWorldBounds",!1),setAccelerationX:o(s,"accelerationX",0),setAccelerationY:o(s,"accelerationY",0),setBounceX:o(s,"bounceX",0),setBounceY:o(s,"bounceY",0),setDragX:o(s,"dragX",0),setDragY:o(s,"dragY",0),setGravityX:o(s,"gravityX",0),setGravityY:o(s,"gravityY",0),setFrictionX:o(s,"frictionX",0),setFrictionY:o(s,"frictionY",0),setVelocityX:o(s,"velocityX",0),setVelocityY:o(s,"velocityY",0),setAngularVelocity:o(s,"angularVelocity",0),setAngularAcceleration:o(s,"angularAcceleration",0),setAngularDrag:o(s,"angularDrag",0),setMass:o(s,"mass",1),setImmovable:o(s,"immovable",!1)},a.call(this,e,i,s)},createCallbackHandler:function(t){t.body||this.world.enableBody(t,r.DYNAMIC_BODY);var e=t.body;for(var i in this.defaults)e[i](this.defaults[i])},removeCallbackHandler:function(t){t.body&&this.world.disableBody(t)},setVelocity:function(t,e,i){void 0===i&&(i=0);for(var n=this.getChildren(),s=0;s<n.length;s++)n[s].body.velocity.set(t+s*i,e+s*i);return this},setVelocityX:function(t,e){void 0===e&&(e=0);for(var i=this.getChildren(),n=0;n<i.length;n++)i[n].body.velocity.x=t+n*e;return this},setVelocityY:function(t,e){void 0===e&&(e=0);for(var i=this.getChildren(),n=0;n<i.length;n++)i[n].body.velocity.y=t+n*e;return this}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(40),s=i(0),r=i(55),o=i(41),a=i(4),h=new s({initialize:function(t,e){this.world=t,this.gameObject=e,this.debugShowBody=t.defaults.debugShowStaticBody,this.debugBodyColor=t.defaults.staticBodyDebugColor,this.enable=!0,this.isCircle=!1,this.radius=0,this.offset=new a,this.position=new a(e.x-e.displayOriginX,e.y-e.displayOriginY),this.width=e.displayWidth,this.height=e.displayHeight,this.halfWidth=Math.abs(this.width/2),this.halfHeight=Math.abs(this.height/2),this.center=new a(e.x+this.halfWidth,e.y+this.halfHeight),this.velocity=a.ZERO,this.allowGravity=!1,this.gravity=a.ZERO,this.bounce=a.ZERO,this.onWorldBounds=!1,this.onCollide=!1,this.onOverlap=!1,this.mass=1,this.immovable=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.overlapR=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={none:!0,up:!1,down:!1,left:!1,right:!1},this.physicsType=r.STATIC_BODY},setGameObject:function(t,e){return t&&t!==this.gameObject&&(this.gameObject.body=null,t.body=this,this.gameObject=t),e&&this.updateFromGameObject(),this},updateFromGameObject:function(){this.world.staticTree.remove(this);var t=this.gameObject;return t.getTopLeft(this.position),this.width=t.displayWidth,this.height=t.displayHeight,this.halfWidth=Math.abs(this.width/2),this.halfHeight=Math.abs(this.height/2),this.center.set(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this.world.staticTree.insert(this),this},setOffset:function(t,e){return void 0===e&&(e=t),this.world.staticTree.remove(this),this.position.x-=this.offset.x,this.position.y-=this.offset.y,this.offset.set(t,e),this.position.x+=this.offset.x,this.position.y+=this.offset.y,this.updateCenter(),this.world.staticTree.insert(this),this},setSize:function(t,e,i,n){return void 0===i&&(i=this.offset.x),void 0===n&&(n=this.offset.y),this.world.staticTree.remove(this),this.width=t,this.height=e,this.halfWidth=Math.floor(t/2),this.halfHeight=Math.floor(e/2),this.offset.set(i,n),this.updateCenter(),this.isCircle=!1,this.radius=0,this.world.staticTree.insert(this),this},setCircle:function(t,e,i){return void 0===e&&(e=this.offset.x),void 0===i&&(i=this.offset.y),t>0?(this.world.staticTree.remove(this),this.isCircle=!0,this.radius=t,this.width=2*t,this.height=2*t,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.set(e,i),this.updateCenter(),this.world.staticTree.insert(this)):this.isCircle=!1,this},updateCenter:function(){this.center.set(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},reset:function(t,e){var i=this.gameObject;void 0===t&&(t=i.x),void 0===e&&(e=i.y),this.world.staticTree.remove(this),i.getTopLeft(this.position),this.updateCenter(),this.world.staticTree.insert(this)},stop:function(){return this},getBounds:function(t){return t.x=this.x,t.y=this.y,t.right=this.right,t.bottom=this.bottom,t},hitTest:function(t,e){return this.isCircle?n(this,t,e):o(this,t,e)},deltaAbsX:function(){return 0},deltaAbsY:function(){return 0},deltaX:function(){return 0},deltaY:function(){return 0},deltaZ:function(){return 0},destroy:function(){this.enable=!1,this.world.pendingDestroy.set(this)},drawDebug:function(t){var e=this.position;this.debugShowBody&&(t.lineStyle(1,this.debugBodyColor,1),t.strokeRect(e.x,e.y,this.width,this.height))},willDrawDebug:function(){return this.debugShowBody},setMass:function(t){return t<=0&&(t=.1),this.mass=t,this},x:{get:function(){return this.position.x},set:function(t){this.world.staticTree.remove(this),this.position.x=t,this.world.staticTree.insert(this)}},y:{get:function(){return this.position.y},set:function(t){this.world.staticTree.remove(this),this.position.y=t,this.world.staticTree.insert(this)}},left:{get:function(){return this.position.x}},right:{get:function(){return this.position.x+this.width}},top:{get:function(){return this.position.y}},bottom:{get:function(){return this.position.y+this.height}}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(107),s=i(0),r=i(55),o=i(80),a=new s({Extends:o,initialize:function(t,e,i,s){void 0!==s||Array.isArray(i)||"object"!=typeof i?void 0===s&&(s={}):(s=i,i=null),this.world=t,s.createCallback=this.createCallbackHandler,s.removeCallback=this.removeCallbackHandler,s.createMultipleCallback=this.createMultipleCallbackHandler,s.classType=n,this.physicsType=r.STATIC_BODY,o.call(this,e,i,s)},createCallbackHandler:function(t){t.body||this.world.enableBody(t,r.STATIC_BODY)},removeCallbackHandler:function(t){t.body&&this.world.disableBody(t)},createMultipleCallbackHandler:function(){this.refresh()},refresh:function(){for(var t=this.children.entries,e=0;e<t.length;e++)t[e].body.reset();return this}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(343),s=i(28),r=i(0),o=i(344),a=i(55),h=i(54),l=i(12),u=i(346),c=i(347),d=i(5),f=i(391),p=i(883),v=i(9),g=i(392),y=i(886),m=i(868),x=i(869),w=i(75),b=i(349),T=i(353),S=i(4),A=i(49),C=new r({Extends:l,initialize:function(t,e){l.call(this),this.scene=t,this.bodies=new w,this.staticBodies=new w,this.pendingDestroy=new w,this.colliders=new f,this.gravity=new S(d(e,"gravity.x",0),d(e,"gravity.y",0)),this.bounds=new v(d(e,"x",0),d(e,"y",0),d(e,"width",t.sys.game.config.width),d(e,"height",t.sys.game.config.height)),this.checkCollision={up:d(e,"checkCollision.up",!0),down:d(e,"checkCollision.down",!0),left:d(e,"checkCollision.left",!0),right:d(e,"checkCollision.right",!0)},this.OVERLAP_BIAS=d(e,"overlapBias",4),this.TILE_BIAS=d(e,"tileBias",16),this.forceX=d(e,"forceX",!1),this.isPaused=d(e,"isPaused",!1),this._total=0,this.drawDebug=d(e,"debug",!1),this.debugGraphic,this.defaults={debugShowBody:d(e,"debugShowBody",!0),debugShowStaticBody:d(e,"debugShowStaticBody",!0),debugShowVelocity:d(e,"debugShowVelocity",!0),bodyDebugColor:d(e,"debugBodyColor",16711935),staticBodyDebugColor:d(e,"debugStaticBodyColor",255),velocityDebugColor:d(e,"debugVelocityColor",65280)},this.maxEntries=d(e,"maxEntries",16),this.tree=new g(this.maxEntries),this.staticTree=new g(this.maxEntries),this.treeMinMax={minX:0,minY:0,maxX:0,maxY:0},this.drawDebug&&this.createDebugGraphic()},enable:function(t,e){void 0===e&&(e=a.DYNAMIC_BODY);var i=1;if(Array.isArray(t))for(i=t.length;i--;)t[i].hasOwnProperty("children")?this.enable(t[i].children.entries,e):this.enableBody(t[i],e);else t.hasOwnProperty("children")?this.enable(t.children.entries,e):this.enableBody(t,e)},enableBody:function(t,e){return null===t.body&&(e===a.DYNAMIC_BODY?(t.body=new n(this,t),this.bodies.set(t.body)):e===a.STATIC_BODY&&(t.body=new b(this,t),this.staticBodies.set(t.body),this.staticTree.insert(t.body))),t},remove:function(t){this.disableBody(t)},disable:function(t){var e=1;if(Array.isArray(t))for(e=t.length;e--;)t[e].hasOwnProperty("children")?this.disable(t[e].children.entries):this.disableGameObjectBody(t[e]);else t.hasOwnProperty("children")?this.disable(t.children.entries):this.disableGameObjectBody(t)},disableGameObjectBody:function(t){return t.body&&(t.body.physicsType===a.DYNAMIC_BODY?this.bodies.delete(t.body):t.body.physicsType===a.STATIC_BODY&&(this.staticBodies.delete(t.body),this.staticTree.remove(t.body)),t.body.enable=!1),t},disableBody:function(t){t.physicsType===a.DYNAMIC_BODY?(this.tree.remove(t),this.bodies.delete(t)):t.physicsType===a.STATIC_BODY&&(this.staticBodies.delete(t),this.staticTree.remove(t)),t.enable=!1},createDebugGraphic:function(){var t=this.scene.sys.add.graphics({x:0,y:0});return t.setDepth(Number.MAX_VALUE),this.debugGraphic=t,this.drawDebug=!0,t},setBounds:function(t,e,i,n,s,r,o,a){return this.bounds.setTo(t,e,i,n),void 0!==s&&this.setBoundsCollision(s,r,o,a),this},setBoundsCollision:function(t,e,i,n){return void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===i&&(i=!0),void 0===n&&(n=!0),this.checkCollision.left=t,this.checkCollision.right=e,this.checkCollision.up=i,this.checkCollision.down=n,this},pause:function(){return this.isPaused=!0,this.emit("pause"),this},resume:function(){return this.isPaused=!1,this.emit("resume"),this},addCollider:function(t,e,i,n,s){void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i);var r=new o(this,!1,t,e,i,n,s);return this.colliders.add(r),r},addOverlap:function(t,e,i,n,s){void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i);var r=new o(this,!0,t,e,i,n,s);return this.colliders.add(r),r},removeCollider:function(t){return this.colliders.remove(t),this},update:function(t,e){if(!this.isPaused&&0!==this.bodies.size){e/=1e3,this.delta=e;var i,n,s=this.bodies.entries,r=s.length;for(i=0;i<r;i++)n=s[i],n.enable&&n.update(e);this.tree.clear(),this.tree.load(s);var o=this.colliders.update();for(i=0;i<o.length;i++){var a=o[i];a.active&&a.update()}}},postUpdate:function(){var t,e,i=this.bodies,n=this.staticBodies,s=this.pendingDestroy,r=i.entries,o=r.length;for(t=0;t<o;t++)e=r[t],e.enable&&e.postUpdate();if(this.drawDebug){var h=this.debugGraphic;for(h.clear(),t=0;t<o;t++)e=r[t],e.willDrawDebug()&&e.drawDebug(h);for(r=n.entries,o=r.length,t=0;t<o;t++)e=r[t],e.willDrawDebug()&&e.drawDebug(h)}if(s.size>0){var l=this.tree,u=this.staticTree;for(r=s.entries,o=r.length,t=0;t<o;t++)e=r[t],e.physicsType===a.DYNAMIC_BODY?(l.remove(e),i.delete(e)):e.physicsType===a.STATIC_BODY&&(u.remove(e),n.delete(e)),e.world=void 0,e.gameObject=void 0;s.clear()}},updateMotion:function(t){if(t.allowRotation){var e=this.computeVelocity(0,t,t.angularVelocity,t.angularAcceleration,t.angularDrag,t.maxAngular)-t.angularVelocity;t.angularVelocity+=e,t.rotation+=t.angularVelocity*this.delta}t.velocity.x=this.computeVelocity(1,t,t.velocity.x,t.acceleration.x,t.drag.x,t.maxVelocity.x),t.velocity.y=this.computeVelocity(2,t,t.velocity.y,t.acceleration.y,t.drag.y,t.maxVelocity.y)},computeVelocity:function(t,e,i,n,s,r){return void 0===r&&(r=1e4),1===t&&e.allowGravity?i+=(this.gravity.x+e.gravity.x)*this.delta:2===t&&e.allowGravity&&(i+=(this.gravity.y+e.gravity.y)*this.delta),n?i+=n*this.delta:s&&e.allowDrag&&(s*=this.delta,i-s>0?i-=s:i+s<0?i+=s:i=0),i>r?i=r:i<-r&&(i=-r),i},separate:function(t,e,i,n,s){if(!t.enable||!e.enable||t.checkCollision.none||e.checkCollision.none||!this.intersects(t,e))return!1;if(i&&!1===i.call(n,t.gameObject,e.gameObject))return!1;if(t.isCircle&&e.isCircle)return this.separateCircle(t,e,s);if(t.isCircle!==e.isCircle){var r=t.isCircle?e:t,o=t.isCircle?t:e,a={x:r.x,y:r.y,right:r.right,bottom:r.bottom},h=o.center;if((h.y<a.y||h.y>a.bottom)&&(h.x<a.x||h.x>a.right))return this.separateCircle(t,e,s)}var l=!1,u=!1;this.forceX||Math.abs(this.gravity.y+t.gravity.y)<Math.abs(this.gravity.x+t.gravity.x)?(l=m(t,e,s,this.OVERLAP_BIAS),this.intersects(t,e)&&(u=x(t,e,s,this.OVERLAP_BIAS))):(u=x(t,e,s,this.OVERLAP_BIAS),this.intersects(t,e)&&(l=m(t,e,s,this.OVERLAP_BIAS)));var c=l||u;return c&&(s&&(t.onOverlap||e.onOverlap)?this.emit("overlap",t.gameObject,e.gameObject,t,e):(t.onCollide||e.onCollide)&&this.emit("collide",t.gameObject,e.gameObject,t,e)),c},separateCircle:function(t,e,i,n){u(t,e,!1,n),c(t,e,!1,n);var s=e.center.x-t.center.x,r=e.center.y-t.center.y,o=Math.atan2(r,s),a=0;if(t.isCircle!==e.isCircle){var l={x:e.isCircle?t.position.x:e.position.x,y:e.isCircle?t.position.y:e.position.y,right:e.isCircle?t.right:e.right,bottom:e.isCircle?t.bottom:e.bottom},d={x:t.isCircle?t.center.x:e.center.x,y:t.isCircle?t.center.y:e.center.y,radius:t.isCircle?t.halfWidth:e.halfWidth};d.y<l.y?d.x<l.x?a=h(d.x,d.y,l.x,l.y)-d.radius:d.x>l.right&&(a=h(d.x,d.y,l.right,l.y)-d.radius):d.y>l.bottom&&(d.x<l.x?a=h(d.x,d.y,l.x,l.bottom)-d.radius:d.x>l.right&&(a=h(d.x,d.y,l.right,l.bottom)-d.radius)),a*=-1}else a=t.halfWidth+e.halfWidth-h(t.center.x,t.center.y,e.center.x,e.center.y);if(i||0===a||t.immovable&&e.immovable||t.customSeparateX||e.customSeparateX)return 0!==a&&(t.onOverlap||e.onOverlap)&&this.emit("overlap",t.gameObject,e.gameObject,t,e),0!==a;var f=t.velocity.x,p=t.velocity.y,v=t.mass,g=e.velocity.x,y=e.velocity.y,m=e.mass,x={x:f*Math.cos(o)+p*Math.sin(o),y:f*Math.sin(o)-p*Math.cos(o)},w={x:g*Math.cos(o)+y*Math.sin(o),y:g*Math.sin(o)-y*Math.cos(o)},b=((v-m)*x.x+2*m*w.x)/(v+m),T=(2*v*x.x+(m-v)*w.x)/(v+m);return t.immovable||(t.velocity.x=(b*Math.cos(o)-x.y*Math.sin(o))*t.bounce.x,t.velocity.y=(x.y*Math.cos(o)+b*Math.sin(o))*t.bounce.y,f=t.velocity.x,p=t.velocity.y),e.immovable||(e.velocity.x=(T*Math.cos(o)-w.y*Math.sin(o))*e.bounce.x,e.velocity.y=(w.y*Math.cos(o)+T*Math.sin(o))*e.bounce.y,g=e.velocity.x,y=e.velocity.y),Math.abs(o)<Math.PI/2?f>0&&!t.immovable&&g>f?t.velocity.x*=-1:g<0&&!e.immovable&&f<g?e.velocity.x*=-1:p>0&&!t.immovable&&y>p?t.velocity.y*=-1:y<0&&!e.immovable&&p<y&&(e.velocity.y*=-1):Math.abs(o)>Math.PI/2&&(f<0&&!t.immovable&&g<f?t.velocity.x*=-1:g>0&&!e.immovable&&f>g?e.velocity.x*=-1:p<0&&!t.immovable&&y<p?t.velocity.y*=-1:y>0&&!e.immovable&&f>y&&(e.velocity.y*=-1)),t.immovable||(t.x+=t.velocity.x*this.delta-a*Math.cos(o),t.y+=t.velocity.y*this.delta-a*Math.sin(o)),e.immovable||(e.x+=e.velocity.x*this.delta+a*Math.cos(o),e.y+=e.velocity.y*this.delta+a*Math.sin(o)),(t.onCollide||e.onCollide)&&this.emit("collide",t.gameObject,e.gameObject,t,e),!0},intersects:function(t,e){return t!==e&&(t.isCircle?e.isCircle?h(t.center.x,t.center.y,e.center.x,e.center.y)<=t.halfWidth+e.halfWidth:this.circleBodyIntersects(t,e):e.isCircle?this.circleBodyIntersects(e,t):!(t.right<=e.position.x)&&(!(t.bottom<=e.position.y)&&(!(t.position.x>=e.right)&&!(t.position.y>=e.bottom))))},circleBodyIntersects:function(t,e){var i=s(t.center.x,e.left,e.right),n=s(t.center.y,e.top,e.bottom);return(t.center.x-i)*(t.center.x-i)+(t.center.y-n)*(t.center.y-n)<=t.halfWidth*t.halfWidth},overlap:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.collideObjects(t,e,i,n,s,!0)},collide:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.collideObjects(t,e,i,n,s,!1)},collideObjects:function(t,e,i,n,s,r){var o;t=t.isParent&&void 0===t.physicsType?t.children.entries:t,e=e.isParent&&void 0===e.physicsType?e.children.entries:e;var a=Array.isArray(t),h=Array.isArray(e);if(this._total=0,a||h)if(!a&&h)for(o=0;o<e.length;o++)this.collideHandler(t,e[o],i,n,s,r);else if(a&&!h)for(o=0;o<t.length;o++)this.collideHandler(t[o],e,i,n,s,r);else for(o=0;o<t.length;o++)for(var l=0;l<e.length;l++)this.collideHandler(t[o],e[l],i,n,s,r);else this.collideHandler(t,e,i,n,s,r);return this._total>0},collideHandler:function(t,e,i,n,s,r){if(void 0===e&&t.isParent)return this.collideGroupVsGroup(t,t,i,n,s,r);if(!t||!e)return!1;if(t.body){if(e.body)return this.collideSpriteVsSprite(t,e,i,n,s,r);if(e.isParent)return this.collideSpriteVsGroup(t,e,i,n,s,r);if(e.isTilemap)return this.collideSpriteVsTilemapLayer(t,e,i,n,s,r)}else if(t.isParent){if(e.body)return this.collideSpriteVsGroup(e,t,i,n,s,r);if(e.isParent)return this.collideGroupVsGroup(t,e,i,n,s,r);if(e.isTilemap)return this.collideGroupVsTilemapLayer(t,e,i,n,s,r)}else if(t.isTilemap){if(e.body)return this.collideSpriteVsTilemapLayer(e,t,i,n,s,r);if(e.isParent)return this.collideGroupVsTilemapLayer(e,t,i,n,s,r)}},collideSpriteVsSprite:function(t,e,i,n,s,r){return!(!t.body||!e.body)&&(this.separate(t.body,e.body,n,s,r)&&(i&&i.call(s,t,e),this._total++),!0)},collideSpriteVsGroup:function(t,e,i,n,s,r){var o=t.body;if(0!==e.length&&o){var h=this.treeMinMax;h.minX=o.left,h.minY=o.top,h.maxX=o.right,h.maxY=o.bottom;var l=e.physicsType===a.DYNAMIC_BODY?this.tree.search(h):this.staticTree.search(h);if(0!==l.length)for(var u=e.getChildren(),c=0;c<u.length;c++){var d=u[c].body;d&&o!==d&&-1!==l.indexOf(d)&&(this.separate(o,d,n,s,r)&&(i&&i.call(s,o.gameObject,d.gameObject),this._total++))}}},collideGroupVsTilemapLayer:function(t,e,i,n,s,r){var o=t.getChildren();if(0===o.length)return!1;for(var a=!1,h=0;h<o.length;h++)o[h].body&&this.collideSpriteVsTilemapLayer(o[h],e,i,n,s,r)&&(a=!0);return a},collideSpriteVsTilemapLayer:function(t,e,i,n,s,r){var o=t.body;if(!o.enable)return!1;var a=o.position.x,h=o.position.y,l=o.width,u=o.height,c=e.layer;if(c.tileWidth>c.baseTileWidth){var d=(c.tileWidth-c.baseTileWidth)*e.scaleX;a-=d,l+=d}if(c.tileHeight>c.baseTileHeight){u+=(c.tileHeight-c.baseTileHeight)*e.scaleY}var f=e.getTilesWithinWorldXY(a,h,l,u);if(0===f.length)return!1;for(var v,g={left:0,right:0,top:0,bottom:0},m=0;m<f.length;m++)v=f[m],g.left=e.tileToWorldX(v.x),g.top=e.tileToWorldY(v.y),v.baseHeight!==v.height&&(g.top-=(v.height-v.baseHeight)*e.scaleY),g.right=g.left+v.width*e.scaleX,g.bottom=g.top+v.height*e.scaleY,T(g,o)&&(!n||n.call(s,t,v))&&p(v,t)&&(r||y(m,o,v,g,e,this.TILE_BIAS))&&(this._total++,i&&i.call(s,t,v),r&&o.onOverlap?t.emit("overlap",o.gameObject,v,o,null):o.onCollide&&t.emit("collide",o.gameObject,v,o,null))},collideGroupVsGroup:function(t,e,i,n,s,r){if(0!==t.length&&0!==e.length)for(var o=t.getChildren(),a=0;a<o.length;a++)this.collideSpriteVsGroup(o[a],e,i,n,s,r)},wrap:function(t,e){t.body?this.wrapObject(t,e):t.getChildren?this.wrapArray(t.getChildren(),e):Array.isArray(t)?this.wrapArray(t,e):this.wrapObject(t,e)},wrapArray:function(t,e){if(0!==t.length)for(var i=0,n=t.length;i<n;i++)this.wrapObject(t[i],e)},wrapObject:function(t,e){void 0===e&&(e=0),t.x=A(t.x,this.bounds.left-e,this.bounds.right+e),t.y=A(t.y,this.bounds.top-e,this.bounds.bottom+e)},shutdown:function(){this.tree.clear(),this.staticTree.clear(),this.bodies.clear(),this.staticBodies.clear(),this.colliders.destroy(),this.removeAllListeners()},destroy:function(){this.shutdown(),this.scene=null}});t.exports=C},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Acceleration:i(870),Angular:i(871),Bounce:i(872),Debug:i(873),Drag:i(874),Enable:i(875),Friction:i(876),Gravity:i(877),Immovable:i(878),Mass:i(879),Size:i(880),Velocity:i(881)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!(e.right<=t.left||e.bottom<=t.top||e.position.x>=t.right||e.position.y>=t.bottom)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(85),r=i(890),o=i(86),a=i(895),h=new n({initialize:function(t,e,i,n,r){void 0===n&&(n=16),void 0===r&&(r=n),this.world=t,this.gameObject=null,this.enabled=!0,this.parent,this.id=t.getNextID(),this.name="",this.size={x:n,y:r},this.offset={x:0,y:0},this.pos={x:e,y:i},this.last={x:e,y:i},this.vel={x:0,y:0},this.accel={x:0,y:0},this.friction={x:0,y:0},this.maxVel={x:t.defaults.maxVelocityX,y:t.defaults.maxVelocityY},this.standing=!1,this.gravityFactor=t.defaults.gravityFactor,this.bounciness=t.defaults.bounciness,this.minBounceVelocity=t.defaults.minBounceVelocity,this.accelGround=0,this.accelAir=0,this.jumpSpeed=0,this.type=o.NONE,this.checkAgainst=o.NONE,this.collides=s.NEVER,this.debugShowBody=t.defaults.debugShowBody,this.debugShowVelocity=t.defaults.debugShowVelocity,this.debugBodyColor=t.defaults.bodyDebugColor,this.updateCallback,this.slopeStanding={min:.767944870877505,max:2.3736477827122884}},reset:function(t,e){this.pos={x:t,y:e},this.last={x:t,y:e},this.vel={x:0,y:0},this.accel={x:0,y:0},this.friction={x:0,y:0},this.maxVel={x:100,y:100},this.standing=!1,this.gravityFactor=1,this.bounciness=0,this.minBounceVelocity=40,this.accelGround=0,this.accelAir=0,this.jumpSpeed=0,this.type=o.NONE,this.checkAgainst=o.NONE,this.collides=s.NEVER},update:function(t){var e=this.pos;this.last.x=e.x,this.last.y=e.y,this.vel.y+=this.world.gravity*t*this.gravityFactor,this.vel.x=r(t,this.vel.x,this.accel.x,this.friction.x,this.maxVel.x),this.vel.y=r(t,this.vel.y,this.accel.y,this.friction.y,this.maxVel.y);var i=this.vel.x*t,n=this.vel.y*t,s=this.world.collisionMap.trace(e.x,e.y,i,n,this.size.x,this.size.y);this.handleMovementTrace(s)&&a(this,s);var o=this.gameObject;o&&(o.x=e.x-this.offset.x+o.displayOriginX*o.scaleX,o.y=e.y-this.offset.y+o.displayOriginY*o.scaleY),this.updateCallback&&this.updateCallback(this)},drawDebug:function(t){var e=this.pos;if(this.debugShowBody&&(t.lineStyle(1,this.debugBodyColor,1),t.strokeRect(e.x,e.y,this.size.x,this.size.y)),this.debugShowVelocity){var i=e.x+this.size.x/2,n=e.y+this.size.y/2;t.lineStyle(1,this.world.defaults.velocityDebugColor,1),t.lineBetween(i,n,i+this.vel.x,n+this.vel.y)}},willDrawDebug:function(){return this.debugShowBody||this.debugShowVelocity},skipHash:function(){return!this.enabled||0===this.type&&0===this.checkAgainst&&0===this.collides},touches:function(t){return!(this.pos.x>=t.pos.x+t.size.x||this.pos.x+this.size.x<=t.pos.x||this.pos.y>=t.pos.y+t.size.y||this.pos.y+this.size.y<=t.pos.y)},resetSize:function(t,e,i,n){return this.pos.x=t,this.pos.y=e,this.size.x=i,this.size.y=n,this},toJSON:function(){return{name:this.name,size:{x:this.size.x,y:this.size.y},pos:{x:this.pos.x,y:this.pos.y},vel:{x:this.vel.x,y:this.vel.y},accel:{x:this.accel.x,y:this.accel.y},friction:{x:this.friction.x,y:this.friction.y},maxVel:{x:this.maxVel.x,y:this.maxVel.y},gravityFactor:this.gravityFactor,bounciness:this.bounciness,minBounceVelocity:this.minBounceVelocity,type:this.type,checkAgainst:this.checkAgainst,collides:this.collides}},fromJSON:function(){},check:function(){},collideWith:function(t,e){this.parent&&this.parent._collideCallback&&this.parent._collideCallback.call(this.parent._callbackScope,this,t,e)},handleMovementTrace:function(){return!0},destroy:function(){this.world.remove(this),this.enabled=!1,this.world=null,this.gameObject=null,this.parent=null}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(889),r=new n({initialize:function(t,e){void 0===t&&(t=32),this.tilesize=t,this.data=Array.isArray(e)?e:[],this.width=Array.isArray(e)?e[0].length:0,this.height=Array.isArray(e)?e.length:0,this.lastSlope=55,this.tiledef=s},trace:function(t,e,i,n,s,r){var o={collision:{x:!1,y:!1,slope:!1},pos:{x:t+i,y:e+n},tile:{x:0,y:0}};if(!this.data)return o;var a=Math.ceil(Math.max(Math.abs(i),Math.abs(n))/this.tilesize);if(a>1)for(var h=i/a,l=n/a,u=0;u<a&&(h||l)&&(this.step(o,t,e,h,l,s,r,i,n,u),t=o.pos.x,e=o.pos.y,o.collision.x&&(h=0,i=0),o.collision.y&&(l=0,n=0),!o.collision.slope);u++);else this.step(o,t,e,i,n,s,r,i,n,0);return o},step:function(t,e,i,n,s,r,o,a,h,l){var u,c,d=0,f=this.tilesize,p=this.width,v=this.height;if(n){var g=n>0?r:0,y=n<0?f:0,m=Math.max(Math.floor(i/f),0),x=Math.min(Math.ceil((i+o)/f),v);u=Math.floor((t.pos.x+g)/f);var w=Math.floor((e+g)/f);if((l>0||u===w||w<0||w>=p)&&(w=-1),u>=0&&u<p)for(c=m;c<x&&!(-1!==w&&(d=this.data[c][w])>1&&d<=this.lastSlope&&this.checkDef(t,d,e,i,a,h,r,o,w,c));c++)if(1===(d=this.data[c][u])||d>this.lastSlope||d>1&&this.checkDef(t,d,e,i,a,h,r,o,u,c)){if(d>1&&d<=this.lastSlope&&t.collision.slope)break;t.collision.x=!0,t.tile.x=d,t.pos.x=u*f-g+y,e=t.pos.x,a=0;break}}if(s){var b=s>0?o:0,T=s<0?f:0,S=Math.max(Math.floor(t.pos.x/f),0),A=Math.min(Math.ceil((t.pos.x+r)/f),p);c=Math.floor((t.pos.y+b)/f);var C=Math.floor((i+b)/f);if((l>0||c===C||C<0||C>=v)&&(C=-1),c>=0&&c<v)for(u=S;u<A&&!(-1!==C&&(d=this.data[C][u])>1&&d<=this.lastSlope&&this.checkDef(t,d,e,i,a,h,r,o,u,C));u++)if(1===(d=this.data[c][u])||d>this.lastSlope||d>1&&this.checkDef(t,d,e,i,a,h,r,o,u,c)){if(d>1&&d<=this.lastSlope&&t.collision.slope)break;t.collision.y=!0,t.tile.y=d,t.pos.y=c*f-b+T;break}}},checkDef:function(t,e,i,n,s,r,o,a,h,l){var u=this.tiledef[e];if(!u)return!1;var c=this.tilesize,d=(h+u[0])*c,f=(l+u[1])*c,p=(u[2]-u[0])*c,v=(u[3]-u[1])*c,g=u[4],y=i+s+(v<0?o:0)-d,m=n+r+(p>0?a:0)-f;if(p*m-v*y>0){if(s*-v+r*p<0)return g;var x=Math.sqrt(p*p+v*v),w=v/x,b=-p/x,T=y*w+m*b,S=w*T,A=b*T;return S*S+A*A>=s*s+r*r?g||p*(m-r)-v*(y-s)<.5:(t.pos.x=i+s-S,t.pos.y=n+r-A,t.collision.slope={x:p,y:v,nx:w,ny:b},!0)}return!1}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(357),r=i(358),o=i(359),a=new n({initialize:function(t){this.world=t,this.sys=t.scene.sys},body:function(t,e,i,n){return new s(this.world,t,e,i,n)},existing:function(t){var e=t.x-t.frame.centerX,i=t.y-t.frame.centerY,n=t.width,s=t.height;return t.body=this.world.create(e,i,n,s),t.body.parent=t,t.body.gameObject=t,t},image:function(t,e,i,n){var s=new r(this.world,t,e,i,n);return this.sys.displayList.add(s),s},sprite:function(t,e,i,n){var s=new o(this.world,t,e,i,n);return this.sys.displayList.add(s),this.sys.updateList.add(s),s},destroy:function(){this.world=null,this.sys=null}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(173),r=new n({Mixins:[s.Acceleration,s.BodyScale,s.BodyType,s.Bounce,s.CheckAgainst,s.Collides,s.Debug,s.Friction,s.Gravity,s.Offset,s.SetGameObject,s.Velocity],initialize:function(t,e,i,n,s){this.body=t.create(e,i,n,s),this.body.parent=this,this.size=this.body.size,this.offset=this.body.offset,this.vel=this.body.vel,this.accel=this.body.accel,this.friction=this.body.friction,this.maxVel=this.body.maxVel}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(173),r=i(67),o=new n({Extends:r,Mixins:[s.Acceleration,s.BodyScale,s.BodyType,s.Bounce,s.CheckAgainst,s.Collides,s.Debug,s.Friction,s.Gravity,s.Offset,s.SetGameObject,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t.scene,e,i,n,s),this.body=t.create(e-this.frame.centerX,i-this.frame.centerY,this.width,this.height),this.body.parent=this,this.body.gameObject=this,this.size=this.body.size,this.offset=this.body.offset,this.vel=this.body.vel,this.accel=this.body.accel,this.friction=this.body.friction,this.maxVel=this.body.maxVel}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(173),r=i(39),o=new n({Extends:r,Mixins:[s.Acceleration,s.BodyScale,s.BodyType,s.Bounce,s.CheckAgainst,s.Collides,s.Debug,s.Friction,s.Gravity,s.Offset,s.SetGameObject,s.Velocity],initialize:function(t,e,i,n,s){r.call(this,t.scene,e,i,n,s),this.body=t.create(e-this.frame.centerX,i-this.frame.centerY,this.width,this.height),this.body.parent=this,this.body.gameObject=this,this.size=this.body.size,this.offset=this.body.offset,this.vel=this.body.vel,this.accel=this.body.accel,this.friction=this.body.friction,this.maxVel=this.body.maxVel}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(354),s=i(0),r=i(85),o=i(355),a=i(12),h=i(1),l=i(76),u=i(75),c=i(894),d=i(27),f=i(86),p=new s({Extends:a,initialize:function(t,e){a.call(this),this.scene=t,this.bodies=new u,this.gravity=h(e,"gravity",0),this.cellSize=h(e,"cellSize",64),this.collisionMap=new o,this.timeScale=h(e,"timeScale",1),this.maxStep=h(e,"maxStep",.05),this.enabled=!0,this.drawDebug=h(e,"debug",!1),this.debugGraphic;var i=h(e,"maxVelocity",100);if(this.defaults={debugShowBody:h(e,"debugShowBody",!0),debugShowVelocity:h(e,"debugShowVelocity",!0),bodyDebugColor:h(e,"debugBodyColor",16711935),velocityDebugColor:h(e,"debugVelocityColor",65280),maxVelocityX:h(e,"maxVelocityX",i),maxVelocityY:h(e,"maxVelocityY",i),minBounceVelocity:h(e,"minBounceVelocity",40),gravityFactor:h(e,"gravityFactor",1),bounciness:h(e,"bounciness",0)},this.walls={left:null,right:null,top:null,bottom:null},this.delta=0,this._lastId=0,h(e,"setBounds",!1)){var n=e.setBounds;if("boolean"==typeof n)this.setBounds();else{var s=h(n,"x",0),r=h(n,"y",0),l=h(n,"width",t.sys.game.config.width),c=h(n,"height",t.sys.game.config.height),d=h(n,"thickness",64),f=h(n,"left",!0),p=h(n,"right",!0),v=h(n,"top",!0),g=h(n,"bottom",!0);this.setBounds(s,r,l,c,d,f,p,v,g)}}this.drawDebug&&this.createDebugGraphic()},setCollisionMap:function(t,e){if("string"==typeof t){var i=this.scene.cache.tilemap.get(t);if(!i||i.format!==d.WELTMEISTER)return console.warn("The specified key does not correspond to a Weltmeister tilemap: "+t),null;for(var n,s=i.data.layer,r=0;r<s.length;r++)if("collision"===s[r].name){n=s[r];break}void 0===e&&(e=n.tilesize),this.collisionMap=new o(e,n.data)}else Array.isArray(t)?this.collisionMap=new o(e,t):console.warn("Invalid Weltmeister collision map data: "+t);return this.collisionMap},setCollisionMapFromTilemapLayer:function(t,e){void 0===e&&(e={});for(var i=h(e,"slopeProperty",null),n=h(e,"slopeMap",null),s=h(e,"defaultCollidingSlope",null),r=h(e,"defaultNonCollidingSlope",0),a=t.layer,u=a.baseTileWidth,c=[],d=0;d<a.height;d++){c[d]=[];for(var f=0;f<a.width;f++){var p=a.data[d][f];p&&p.collides?null!==i&&l(p.properties,i)?c[d][f]=parseInt(p.properties[i],10):null!==n&&l(n,p.index)?c[d][f]=n[p.index]:c[d][f]=null!==s?s:p.index:c[d][f]=r}}return this.collisionMap=new o(u,c),this.collisionMap},setBounds:function(t,e,i,n,s,r,o,a,h){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.scene.sys.game.config.width),void 0===n&&(n=this.scene.sys.game.config.height),void 0===s&&(s=64),void 0===r&&(r=!0),void 0===o&&(o=!0),void 0===a&&(a=!0),void 0===h&&(h=!0),this.updateWall(r,"left",t-s,e,s,n),this.updateWall(o,"right",t+i,e,s,n),this.updateWall(a,"top",t,e-s,i,s),this.updateWall(h,"bottom",t,e+n,i,s),this},updateWall:function(t,e,i,n,s,o){var a=this.walls[e];t?a?a.resetSize(i,n,s,o):(this.walls[e]=this.create(i,n,s,o),this.walls[e].name=e,this.walls[e].gravityFactor=0,this.walls[e].collides=r.FIXED):(a&&this.bodies.remove(a),this.walls[e]=null)},createDebugGraphic:function(){var t=this.scene.sys.add.graphics({x:0,y:0});return t.setDepth(Number.MAX_VALUE),this.debugGraphic=t,this.drawDebug=!0,t},getNextID:function(){return this._lastId++},create:function(t,e,i,s){var r=new n(this,t,e,i,s);return this.bodies.set(r),r},remove:function(t){this.bodies.delete(t)},pause:function(){return this.enabled=!1,this.emit("pause"),this},resume:function(){return this.enabled=!0,this.emit("resume"),this},update:function(t,e){if(this.enabled&&0!==this.bodies.size){var i=Math.min(e/1e3,this.maxStep)*this.timeScale;this.delta=i;var n,s,r=this.bodies.entries,o=r.length,a={},h=this.cellSize;for(n=0;n<o;n++)s=r[n],s.enabled&&s.update(i);for(n=0;n<o;n++)(s=r[n])&&!s.skipHash()&&this.checkHash(s,a,h);if(this.drawDebug){var l=this.debugGraphic;for(l.clear(),n=0;n<o;n++)(s=r[n])&&s.willDrawDebug()&&s.drawDebug(l)}}},checkHash:function(t,e,i){for(var n={},s=Math.floor(t.pos.x/i),r=Math.floor(t.pos.y/i),o=Math.floor((t.pos.x+t.size.x)/i)+1,a=Math.floor((t.pos.y+t.size.y)/i)+1,h=s;h<o;h++)for(var l=r;l<a;l++)if(e[h])if(e[h][l]){for(var u=e[h][l],c=0;c<u.length;c++)t.touches(u[c])&&!n[u[c].id]&&(n[u[c].id]=!0,this.checkBodies(t,u[c]));u.push(t)}else e[h][l]=[t];else e[h]={},e[h][l]=[t]},checkBodies:function(t,e){t.collides===r.FIXED&&e.collides===r.FIXED||(t.checkAgainst&e.type&&t.check(e),e.checkAgainst&t.type&&e.check(t),t.collides&&e.collides&&t.collides+e.collides>r.ACTIVE&&c(this,t,e))},setCollidesNever:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.NEVER;return this},setLite:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.LITE;return this},setPassive:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.PASSIVE;return this},setActive:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.ACTIVE;return this},setFixed:function(t){for(var e=0;e<t.length;e++)t[e].collides=r.FIXED;return this},setTypeNone:function(t){for(var e=0;e<t.length;e++)t[e].type=f.NONE;return this},setTypeA:function(t){for(var e=0;e<t.length;e++)t[e].type=f.A;return this},setTypeB:function(t){for(var e=0;e<t.length;e++)t[e].type=f.B;return this},setAvsB:function(t){for(var e=0;e<t.length;e++)t[e].type=f.A,t[e].checkAgainst=f.B;return this},setBvsA:function(t){for(var e=0;e<t.length;e++)t[e].type=f.B,t[e].checkAgainst=f.A;return this},setCheckAgainstNone:function(t){for(var e=0;e<t.length;e++)t[e].checkAgainst=f.NONE;return this},setCheckAgainstA:function(t){for(var e=0;e<t.length;e++)t[e].checkAgainst=f.A;return this},setCheckAgainstB:function(t){for(var e=0;e<t.length;e++)t[e].checkAgainst=f.B;return this},shutdown:function(){this.removeAllListeners()},destroy:function(){this.removeAllListeners(),this.scene=null,this.bodies.clear(),this.bodies=null,this.collisionMap=null}});t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(57),s=i(0),r=i(370),o=i(72),a=i(910),h=i(362),l=i(363),u=i(175),c=i(912),d=new s({initialize:function(t){this.world=t,this.scene=t.scene,this.sys=t.scene.sys},rectangle:function(t,e,i,s,r){var o=n.rectangle(t,e,i,s,r);return this.world.add(o),o},trapezoid:function(t,e,i,s,r,o){var a=n.trapezoid(t,e,i,s,r,o);return this.world.add(a),a},circle:function(t,e,i,s,r){var o=n.circle(t,e,i,s,r);return this.world.add(o),o},polygon:function(t,e,i,s,r){var o=n.polygon(t,e,i,s,r);return this.world.add(o),o},fromVertices:function(t,e,i,s,r,o,a){var h=n.fromVertices(t,e,i,s,r,o,a);return this.world.add(h),h},imageStack:function(t,e,i,n,s,o,a,l,u){void 0===a&&(a=0),void 0===l&&(l=0),void 0===u&&(u={});var c=this.world,d=this.sys.displayList;u.addToWorld=!1;var f=r.stack(i,n,s,o,a,l,function(i,n){var s=new h(c,i,n,t,e,u);return d.add(s),s.body});return c.add(f),f},stack:function(t,e,i,n,s,o,a){var h=r.stack(t,e,i,n,s,o,a);return this.world.add(h),h},pyramid:function(t,e,i,n,s,o,a){var h=r.pyramid(t,e,i,n,s,o,a);return this.world.add(h),h},chain:function(t,e,i,n,s,o){return r.chain(t,e,i,n,s,o)},mesh:function(t,e,i,n,s){return r.mesh(t,e,i,n,s)},newtonsCradle:function(t,e,i,n,s){var o=r.newtonsCradle(t,e,i,n,s);return this.world.add(o),o},car:function(t,e,i,n,s){var o=r.car(t,e,i,n,s);return this.world.add(o),o},softBody:function(t,e,i,n,s,o,a,h,l,u){var c=r.softBody(t,e,i,n,s,o,a,h,l,u);return this.world.add(c),c},joint:function(t,e,i,n,s){return this.constraint(t,e,i,n,s)},spring:function(t,e,i,n,s){return this.constraint(t,e,i,n,s)},constraint:function(t,e,i,n,s){void 0===n&&(n=1),void 0===s&&(s={}),s.bodyA="body"===t.type?t:t.body,s.bodyB="body"===e.type?e:e.body,s.length=i,s.stiffness=n;var r=o.create(s);return this.world.add(r),r},worldConstraint:function(t,e,i,n){void 0===i&&(i=1),void 0===n&&(n={}),n.bodyB="body"===t.type?t:t.body,n.length=e,n.stiffness=i;var s=o.create(n);return this.world.add(s),s},mouseSpring:function(t){return this.pointerConstraint(t)},pointerConstraint:function(t){void 0===t&&(t={}),t.hasOwnProperty("render")||(t.render={visible:!1});var e=new c(this.scene,this.world,t);return this.world.add(e.constraint),e},image:function(t,e,i,n,s){var r=new h(this.world,t,e,i,n,s);return this.sys.displayList.add(r),r},tileBody:function(t,e){return new u(this.world,t,e)},sprite:function(t,e,i,n,s){var r=new l(this.world,t,e,i,n,s);return this.sys.displayList.add(r),this.sys.updateList.add(r),r},gameObject:function(t,e){return a(this.world,t,e)},destroy:function(){this.world=null,this.scene=null,this.sys=null}});t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(108),r=i(2),o=i(1),a=i(67),h=i(136),l=i(4),u=new n({Extends:a,Mixins:[s.Bounce,s.Collision,s.Force,s.Friction,s.Gravity,s.Mass,s.Sensor,s.SetBody,s.Sleep,s.Static,s.Transform,s.Velocity,h],initialize:function(t,e,i,n,s,a){r.call(this,t.scene,"Image"),this.setTexture(n,s),this.setSizeToFrame(),this.setOrigin(),this.world=t,this._tempVec2=new l(e,i);var h=o(a,"shape",null);h?this.setBody(h,a):this.setRectangle(this.width,this.height,a),this.setPosition(e,i),this.initPipeline("TextureTintPipeline")}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(252),s=i(0),r=i(108),o=i(2),a=i(1),h=i(136),l=i(39),u=i(4),c=new s({Extends:l,Mixins:[r.Bounce,r.Collision,r.Force,r.Friction,r.Gravity,r.Mass,r.Sensor,r.SetBody,r.Sleep,r.Static,r.Transform,r.Velocity,h],initialize:function(t,e,i,s,r,h){o.call(this,t.scene,"Image"),this.anims=new n(this),this.setTexture(s,r),this.setSizeToFrame(),this.setOrigin(),this.world=t,this._tempVec2=new u(e,i);var l=a(h,"shape",null);l?this.setBody(l,h):this.setRectangle(this.width,this.height,h),this.setPosition(e,i),this.initPipeline("TextureTintPipeline")}});t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(57),s=i(0),r=i(16),o=i(56),a=i(368),h=i(12),l=i(1),u=i(5),c=i(25),d=i(73),f=i(175),p=i(176),v=i(30),g=new s({Extends:h,initialize:function(t,e){h.call(this),this.scene=t,this.engine=a.create(e),this.localWorld=this.engine.world;var i=u(e,"gravity",null);if(i&&this.setGravity(i.x,i.y,i.scale),this.walls={left:null,right:null,top:null,bottom:null},l(e,"setBounds",!1)){var n=e.setBounds;if("boolean"==typeof n)this.setBounds();else{var s=l(n,"x",0),r=l(n,"y",0),o=l(n,"width",t.sys.game.config.width),c=l(n,"height",t.sys.game.config.height),d=l(n,"thickness",64),f=l(n,"left",!0),p=l(n,"right",!0),v=l(n,"top",!0),g=l(n,"bottom",!0);this.setBounds(s,r,o,c,d,f,p,v,g)}}this.enabled=u(e,"enabled",!0),this.correction=u(e,"correction",1),this.getDelta=u(e,"getDelta",this.update60Hz),this.autoUpdate=u(e,"autoUpdate",!0),this.drawDebug=u(e,"debug",!1),this.debugGraphic,this.defaults={debugShowBody:u(e,"debugShowBody",!0),debugShowStaticBody:u(e,"debugShowStaticBody",!0),debugShowVelocity:u(e,"debugShowVelocity",!0),bodyDebugColor:u(e,"debugBodyColor",16711935),staticBodyDebugColor:u(e,"debugBodyColor",255),velocityDebugColor:u(e,"debugVelocityColor",65280),debugShowJoint:u(e,"debugShowJoint",!0),jointDebugColor:u(e,"debugJointColor",0)},this.drawDebug&&this.createDebugGraphic(),this.setEventsProxy()},setEventsProxy:function(){var t=this,e=this.engine;d.on(e,"beforeUpdate",function(e){t.emit("beforeupdate",e)}),d.on(e,"afterUpdate",function(e){t.emit("afterupdate",e)}),d.on(e,"collisionStart",function(e){var i,n,s=e.pairs;s.length>0&&(i=s[0].bodyA,n=s[0].bodyB),t.emit("collisionstart",e,i,n)}),d.on(e,"collisionActive",function(e){var i,n,s=e.pairs;s.length>0&&(i=s[0].bodyA,n=s[0].bodyB),t.emit("collisionactive",e,i,n)}),d.on(e,"collisionEnd",function(e){var i,n,s=e.pairs;s.length>0&&(i=s[0].bodyA,n=s[0].bodyB),t.emit("collisionend",e,i,n)})},setBounds:function(t,e,i,n,s,r,o,a,h){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.scene.sys.game.config.width),void 0===n&&(n=this.scene.sys.game.config.height),void 0===s&&(s=128),void 0===r&&(r=!0),void 0===o&&(o=!0),void 0===a&&(a=!0),void 0===h&&(h=!0),this.updateWall(r,"left",t-s,e,s,n),this.updateWall(o,"right",t+i,e,s,n),this.updateWall(a,"top",t,e-s,i,s),this.updateWall(h,"bottom",t,e+n,i,s),this},updateWall:function(t,e,i,n,s,r){var o=this.walls[e];t?(o&&p.remove(this.localWorld,o),i+=s/2,n+=r/2,this.walls[e]=this.create(i,n,s,r,{isStatic:!0,friction:0,frictionStatic:0})):(o&&p.remove(this.localWorld,o),this.walls[e]=null)},createDebugGraphic:function(){var t=this.scene.sys.add.graphics({x:0,y:0});return t.setDepth(Number.MAX_VALUE),this.debugGraphic=t,this.drawDebug=!0,t},disableGravity:function(){return this.localWorld.gravity.x=0,this.localWorld.gravity.y=0,this.localWorld.gravity.scale=0,this},setGravity:function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=1),this.localWorld.gravity.x=t,this.localWorld.gravity.y=e,void 0!==i&&(this.localWorld.gravity.scale=i),this},create:function(t,e,i,s,r){var o=n.rectangle(t,e,i,s,r);return p.add(this.localWorld,o),o},add:function(t){return p.add(this.localWorld,t),this},remove:function(t,e){var i=t.body?t.body:t;return o.removeBody(this.localWorld,i,e),this},removeConstraint:function(t,e){return o.remove(this.localWorld,t,e),this},convertTilemapLayer:function(t,e){var i=t.layer,n=t.getTilesWithin(0,0,i.width,i.height,{isColliding:!0});return this.convertTiles(n,e),this},convertTiles:function(t,e){if(0===t.length)return this;for(var i=0;i<t.length;i++)new f(this,t[i],e);return this},nextGroup:function(t){return c.nextGroup(t)},nextCategory:function(){return c.nextCategory()},pause:function(){return this.enabled=!1,this.emit("pause"),this},resume:function(){return this.enabled=!0,this.emit("resume"),this},update:function(t,e){this.enabled&&this.autoUpdate&&a.update(this.engine,this.getDelta(t,e),this.correction)},step:function(t,e){a.update(this.engine,t,e)},update60Hz:function(){return 1e3/60},update30Hz:function(){return 1e3/30},postUpdate:function(){if(this.drawDebug){var t=this.debugGraphic,e=o.allBodies(this.localWorld);t.clear(),t.lineStyle(1,this.defaults.bodyDebugColor),t.beginPath();var i,n;for(i=0;i<e.length;i++){if(!e[i].render.visible)return;for(n=0;n<e[i].parts.length;n++){var s=e[i].parts[n],a=s.vertices;t.moveTo(a[0].x,a[0].y);for(var h=1;h<a.length;h++)t.lineTo(a[h].x,a[h].y);t.lineTo(a[0].x,a[0].y),t.strokePath()}}if(t.closePath(),this.defaults.debugShowJoint){t.lineStyle(2,this.defaults.jointDebugColor);var l=o.allConstraints(this.localWorld);for(i=0;i<l.length;i++){var u=l[i];if(u.render.visible&&u.pointA&&u.pointB){u.render.lineWidth&&t.lineStyle(u.render.lineWidth,r.colorToNumber(u.render.strokeStyle));var c,d,f=u.bodyA,p=u.bodyB;if(c=f?v.add(f.position,u.pointA):u.pointA,"pin"===u.render.type)t.beginPath(),t.arc(c.x,c.y,3,0,2*Math.PI),t.closePath();else{if(d=p?v.add(p.position,u.pointB):u.pointB,t.beginPath(),t.moveTo(c.x,c.y),"spring"===u.render.type){var g,y=v.sub(d,c),m=v.perp(v.normalise(y)),x=Math.ceil(r.clamp(u.length/5,12,20));for(n=1;n<x;n+=1)g=n%2==0?1:-1,t.lineTo(c.x+y.x*(n/x)+m.x*g*4,c.y+y.y*(n/x)+m.y*g*4)}t.lineTo(d.x,d.y)}u.render.lineWidth&&t.strokePath(),u.render.anchors&&(t.fillStyle(r.colorToNumber(u.render.strokeStyle)),t.beginPath(),t.arc(c.x,c.y,6,0,2*Math.PI),t.arc(d.x,d.y,6,0,2*Math.PI),t.closePath(),t.fillPath())}}}}},fromPath:function(t,e){void 0===e&&(e=[]);var i=/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi;return t.replace(i,function(t,i,n){e.push({x:parseFloat(i),y:parseFloat(n)})}),e},shutdown:function(){d.off(this.engine),this.removeAllListeners(),p.clear(this.localWorld,!1),a.clear(this.engine)},destroy:function(){this.shutdown()}});t.exports=g},function(t,e,i){var n={};t.exports=n;var s=i(109),r=i(177),o=i(16);!function(){n.create=function(t){var e={controller:n,detector:r.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(e,t)},n.update=function(i,n,s,r){var o,d,f,p,v,g=s.world,y=i.buckets,m=!1,x=s.metrics;for(x.broadphaseTests=0,o=0;o<n.length;o++){var w=n[o];if((!w.isSleeping||r)&&!(w.bounds.max.x<g.bounds.min.x||w.bounds.min.x>g.bounds.max.x||w.bounds.max.y<g.bounds.min.y||w.bounds.min.y>g.bounds.max.y)){var b=e(i,w);if(!w.region||b.id!==w.region.id||r){x.broadphaseTests+=1,w.region&&!r||(w.region=b);var T=t(b,w.region);for(d=T.startCol;d<=T.endCol;d++)for(f=T.startRow;f<=T.endRow;f++){v=a(d,f),p=y[v];var S=d>=b.startCol&&d<=b.endCol&&f>=b.startRow&&f<=b.endRow,A=d>=w.region.startCol&&d<=w.region.endCol&&f>=w.region.startRow&&f<=w.region.endRow;!S&&A&&A&&p&&u(i,p,w),(w.region===b||S&&!A||r)&&(p||(p=h(y,v)),l(i,p,w))}w.region=b,m=!0}}}m&&(i.pairsList=c(i))},n.clear=function(t){t.buckets={},t.pairs={},t.pairsList=[]};var t=function(t,e){var n=Math.min(t.startCol,e.startCol),s=Math.max(t.endCol,e.endCol),r=Math.min(t.startRow,e.startRow),o=Math.max(t.endRow,e.endRow);return i(n,s,r,o)},e=function(t,e){var n=e.bounds,s=Math.floor(n.min.x/t.bucketWidth),r=Math.floor(n.max.x/t.bucketWidth),o=Math.floor(n.min.y/t.bucketHeight),a=Math.floor(n.max.y/t.bucketHeight);return i(s,r,o,a)},i=function(t,e,i,n){return{id:t+","+e+","+i+","+n,startCol:t,endCol:e,startRow:i,endRow:n}},a=function(t,e){return"C"+t+"R"+e},h=function(t,e){return t[e]=[]},l=function(t,e,i){for(var n=0;n<e.length;n++){var r=e[n];if(!(i.id===r.id||i.isStatic&&r.isStatic)){var o=s.id(i,r),a=t.pairs[o];a?a[2]+=1:t.pairs[o]=[i,r,1]}}e.push(i)},u=function(t,e,i){e.splice(e.indexOf(i),1);for(var n=0;n<e.length;n++){var r=e[n],o=s.id(i,r),a=t.pairs[o];a&&(a[2]-=1)}},c=function(t){var e,i,n=[];e=o.keys(t.pairs);for(var s=0;s<e.length;s++)i=t.pairs[e[s]],i[2]>0?n.push(i):delete t.pairs[e[s]];return n}}()},function(t,e,i){var n={};t.exports=n;var s=i(109),r=i(16);!function(){n.create=function(t){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},t)},n.update=function(t,e,i){var n,r,o,a,h=t.list,l=t.table,u=t.collisionStart,c=t.collisionEnd,d=t.collisionActive;for(u.length=0,c.length=0,d.length=0,a=0;a<h.length;a++)h[a].confirmedActive=!1;for(a=0;a<e.length;a++)n=e[a],n.collided&&(r=s.id(n.bodyA,n.bodyB),o=l[r],o?(o.isActive?d.push(o):u.push(o),s.update(o,n,i),o.confirmedActive=!0):(o=s.create(n,i),l[r]=o,u.push(o),h.push(o)));for(a=0;a<h.length;a++)o=h[a],o.confirmedActive||(s.setActive(o,!1,i),c.push(o))},n.removeOld=function(t,e){var i,n,s,r,o=t.list,a=t.table,h=[];for(r=0;r<o.length;r++)i=o[r],n=i.collision,n.bodyA.isSleeping||n.bodyB.isSleeping?i.timeUpdated=e:e-i.timeUpdated>1e3&&h.push(r);for(r=0;r<h.length;r++)s=h[r]-r,i=o[s],delete a[i.id],o.splice(s,1)},n.clear=function(t){return t.table={},t.list.length=0,t.collisionStart.length=0,t.collisionActive.length=0,t.collisionEnd.length=0,t}}()},function(t,e,i){var n={};t.exports=n;var s=i(43),r=i(30),o=i(16),a=i(42);!function(){n._restingThresh=4,n._restingThreshTangent=6,n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n.preSolvePosition=function(t){var e,i,n;for(e=0;e<t.length;e++)i=t[e],i.isActive&&(n=i.activeContacts.length,i.collision.parentA.totalContacts+=n,i.collision.parentB.totalContacts+=n)},n.solvePosition=function(t,e,i){var s,r,o,a,h,l,u,c,d,f,p,v,g,y,m,x,w=i*n._positionDampen;for(s=0;s<e.length;s++){var b=e[s];b.previousPositionImpulse.x=b.positionImpulse.x,b.previousPositionImpulse.y=b.positionImpulse.y}for(s=0;s<t.length;s++)a=t[s],a.isActive&&!a.isSensor&&(h=a.collision,l=h.parentA,u=h.parentB,c=h.normal,p=l.previousPositionImpulse,v=u.previousPositionImpulse,f=h.penetration,y=v.x-p.x+f.x,m=v.y-p.y+f.y,r=c.x,o=c.y,d=r*y+o*m,a.separation=d,x=(d-a.slop)*w,(l.isStatic||u.isStatic)&&(x*=2),l.isStatic||l.isSleeping||(g=x/l.totalContacts,l.positionImpulse.x+=r*g,l.positionImpulse.y+=o*g),u.isStatic||u.isSleeping||(g=x/u.totalContacts,u.positionImpulse.x-=r*g,u.positionImpulse.y-=o*g))},n.postSolvePosition=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.totalContacts=0,0!==i.positionImpulse.x||0!==i.positionImpulse.y){for(var o=0;o<i.parts.length;o++){var h=i.parts[o];s.translate(h.vertices,i.positionImpulse),a.update(h.bounds,h.vertices,i.velocity),h.position.x+=i.positionImpulse.x,h.position.y+=i.positionImpulse.y}i.positionPrev.x+=i.positionImpulse.x,i.positionPrev.y+=i.positionImpulse.y,r.dot(i.positionImpulse,i.velocity)<0?(i.positionImpulse.x=0,i.positionImpulse.y=0):(i.positionImpulse.x*=n._positionWarming,i.positionImpulse.y*=n._positionWarming)}}},n.preSolveVelocity=function(t){var e,i,n,s,o,a,h,l,u,c,d,f,p,v,g=r._temp[0],y=r._temp[1];for(e=0;e<t.length;e++)if(n=t[e],n.isActive&&!n.isSensor)for(s=n.activeContacts,o=n.collision,a=o.parentA,h=o.parentB,l=o.normal,u=o.tangent,i=0;i<s.length;i++)c=s[i],d=c.vertex,f=c.normalImpulse,p=c.tangentImpulse,0===f&&0===p||(g.x=l.x*f+u.x*p,g.y=l.y*f+u.y*p,a.isStatic||a.isSleeping||(v=r.sub(d,a.position,y),a.positionPrev.x+=g.x*a.inverseMass,a.positionPrev.y+=g.y*a.inverseMass,a.anglePrev+=r.cross(v,g)*a.inverseInertia),h.isStatic||h.isSleeping||(v=r.sub(d,h.position,y),h.positionPrev.x-=g.x*h.inverseMass,h.positionPrev.y-=g.y*h.inverseMass,h.anglePrev-=r.cross(v,g)*h.inverseInertia))},n.solveVelocity=function(t,e){for(var i=e*e,s=r._temp[0],a=r._temp[1],h=r._temp[2],l=r._temp[3],u=r._temp[4],c=r._temp[5],d=0;d<t.length;d++){var f=t[d];if(f.isActive&&!f.isSensor){var p=f.collision,v=p.parentA,g=p.parentB,y=p.normal,m=p.tangent,x=f.activeContacts,w=1/x.length;v.velocity.x=v.position.x-v.positionPrev.x,v.velocity.y=v.position.y-v.positionPrev.y,g.velocity.x=g.position.x-g.positionPrev.x,g.velocity.y=g.position.y-g.positionPrev.y,v.angularVelocity=v.angle-v.anglePrev,g.angularVelocity=g.angle-g.anglePrev;for(var b=0;b<x.length;b++){var T=x[b],S=T.vertex,A=r.sub(S,v.position,a),C=r.sub(S,g.position,h),M=r.add(v.velocity,r.mult(r.perp(A),v.angularVelocity),l),_=r.add(g.velocity,r.mult(r.perp(C),g.angularVelocity),u),E=r.sub(M,_,c),P=r.dot(y,E),L=r.dot(m,E),k=Math.abs(L),F=o.sign(L),R=(1+f.restitution)*P,O=o.clamp(f.separation+P,0,1)*n._frictionNormalMultiplier,B=L,D=1/0;k>f.friction*f.frictionStatic*O*i&&(D=k,B=o.clamp(f.friction*F*i,-D,D));var I=r.cross(A,y),Y=r.cross(C,y),z=w/(v.inverseMass+g.inverseMass+v.inverseInertia*I*I+g.inverseInertia*Y*Y);if(R*=z,B*=z,P<0&&P*P>n._restingThresh*i)T.normalImpulse=0;else{var X=T.normalImpulse;T.normalImpulse=Math.min(T.normalImpulse+R,0),R=T.normalImpulse-X}if(L*L>n._restingThreshTangent*i)T.tangentImpulse=0;else{var N=T.tangentImpulse;T.tangentImpulse=o.clamp(T.tangentImpulse+B,-D,D),B=T.tangentImpulse-N}s.x=y.x*R+m.x*B,s.y=y.y*R+m.y*B,v.isStatic||v.isSleeping||(v.positionPrev.x+=s.x*v.inverseMass,v.positionPrev.y+=s.y*v.inverseMass,v.anglePrev+=r.cross(A,s)*v.inverseInertia),g.isStatic||g.isSleeping||(g.positionPrev.x-=s.x*g.inverseMass,g.positionPrev.y-=s.y*g.inverseMass,g.anglePrev-=r.cross(C,s)*g.inverseInertia)}}}}}()},function(t,e,i){var n={};t.exports=n;var s=i(176),r=i(87),o=i(367),a=i(366),h=i(927),l=i(365),u=i(73),c=i(56),d=i(72),f=i(16),p=i(25);!function(){n.create=function(t,e){e=f.isElement(t)?e:t,t=f.isElement(t)?t:null,e=e||{},(t||e.render)&&f.warn("Engine.create: engine.render is deprecated (see docs)");var i={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:l}},n=f.extend(i,e);return n.world=e.world||s.create(n.world),n.pairs=a.create(),n.broadphase=n.broadphase.controller.create(n.broadphase),n.metrics=n.metrics||{extended:!1},n.metrics=h.create(n.metrics),n},n.update=function(n,s,l){s=s||1e3/60,l=l||1;var f,p=n.world,v=n.timing,g=n.broadphase,y=[];v.timestamp+=s*v.timeScale;var m={timestamp:v.timestamp};u.trigger(n,"beforeUpdate",m);var x=c.allBodies(p),w=c.allConstraints(p);for(h.reset(n.metrics),n.enableSleeping&&r.update(x,v.timeScale),e(x,p.gravity),i(x,s,v.timeScale,l,p.bounds),d.preSolveAll(x),f=0;f<n.constraintIterations;f++)d.solveAll(w,v.timeScale);d.postSolveAll(x),g.controller?(p.isModified&&g.controller.clear(g),g.controller.update(g,x,n,p.isModified),y=g.pairsList):y=x,p.isModified&&c.setModified(p,!1,!1,!0);var b=g.detector(y,n),T=n.pairs,S=v.timestamp;for(a.update(T,b,S),a.removeOld(T,S),n.enableSleeping&&r.afterCollisions(T.list,v.timeScale),T.collisionStart.length>0&&u.trigger(n,"collisionStart",{pairs:T.collisionStart}),o.preSolvePosition(T.list),f=0;f<n.positionIterations;f++)o.solvePosition(T.list,x,v.timeScale);for(o.postSolvePosition(x),d.preSolveAll(x),f=0;f<n.constraintIterations;f++)d.solveAll(w,v.timeScale);for(d.postSolveAll(x),o.preSolveVelocity(T.list),f=0;f<n.velocityIterations;f++)o.solveVelocity(T.list,v.timeScale);return T.collisionActive.length>0&&u.trigger(n,"collisionActive",{pairs:T.collisionActive}),T.collisionEnd.length>0&&u.trigger(n,"collisionEnd",{pairs:T.collisionEnd}),h.update(n.metrics,n),t(x),u.trigger(n,"afterUpdate",m),n},n.merge=function(t,e){if(f.extend(t,e),e.world){t.world=e.world,n.clear(t);for(var i=c.allBodies(t.world),s=0;s<i.length;s++){var o=i[s];r.set(o,!1),o.id=f.nextId()}}},n.clear=function(t){var e=t.world;a.clear(t.pairs);var i=t.broadphase;if(i.controller){var n=c.allBodies(e);i.controller.clear(i),i.controller.update(i,n,t,!0)}};var t=function(t){for(var e=0;e<t.length;e++){var i=t[e];i.force.x=0,i.force.y=0,i.torque=0}},e=function(t,e){var i=void 0!==e.scale?e.scale:.001;if((0!==e.x||0!==e.y)&&0!==i)for(var n=0;n<t.length;n++){var s=t[n];s.ignoreGravity||s.isStatic||s.isSleeping||(s.force.y+=s.mass*e.y*i,s.force.x+=s.mass*e.x*i)}},i=function(t,e,i,n,s){for(var r=0;r<t.length;r++){var o=t[r];o.isStatic||o.isSleeping||p.update(o,e,i,n)}}}()},function(t,e,i){var n={};t.exports=n;var s=i(179),r=i(16);!function(){n.name="matter-js",n.version="0.13.1",n.uses=[],n.used=[],n.use=function(){s.use(n,Array.prototype.slice.call(arguments))},n.before=function(t,e){return t=t.replace(/^Matter./,""),r.chainPathBefore(n,t,e)},n.after=function(t,e){return t=t.replace(/^Matter./,""),r.chainPathAfter(n,t,e)}}()},function(t,e,i){var n={};t.exports=n;var s=i(56),r=i(72),o=i(16),a=i(25),h=i(57);!function(){n.stack=function(t,e,i,n,r,o,h){for(var l,u=s.create({label:"Stack"}),c=t,d=e,f=0,p=0;p<n;p++){for(var v=0,g=0;g<i;g++){var y=h(c,d,g,p,l,f);if(y){var m=y.bounds.max.y-y.bounds.min.y,x=y.bounds.max.x-y.bounds.min.x;m>v&&(v=m),a.translate(y,{x:.5*x,y:.5*m}),c=y.bounds.max.x+r,s.addBody(u,y),l=y,f+=1}else c+=r}d+=v+o,c=t}return u},n.chain=function(t,e,i,n,a,h){for(var l=t.bodies,u=1;u<l.length;u++){var c=l[u-1],d=l[u],f=c.bounds.max.y-c.bounds.min.y,p=c.bounds.max.x-c.bounds.min.x,v=d.bounds.max.y-d.bounds.min.y,g=d.bounds.max.x-d.bounds.min.x,y={bodyA:c,pointA:{x:p*e,y:f*i},bodyB:d,pointB:{x:g*n,y:v*a}},m=o.extend(y,h);s.addConstraint(t,r.create(m))}return t.label+=" Chain",t},n.mesh=function(t,e,i,n,a){var h,l,u,c,d,f=t.bodies;for(h=0;h<i;h++){for(l=1;l<e;l++)u=f[l-1+h*e],c=f[l+h*e],s.addConstraint(t,r.create(o.extend({bodyA:u,bodyB:c},a)));if(h>0)for(l=0;l<e;l++)u=f[l+(h-1)*e],c=f[l+h*e],s.addConstraint(t,r.create(o.extend({bodyA:u,bodyB:c},a))),n&&l>0&&(d=f[l-1+(h-1)*e],s.addConstraint(t,r.create(o.extend({bodyA:d,bodyB:c},a)))),n&&l<e-1&&(d=f[l+1+(h-1)*e],s.addConstraint(t,r.create(o.extend({bodyA:d,bodyB:c},a))))}return t.label+=" Mesh",t},n.pyramid=function(t,e,i,s,r,o,h){return n.stack(t,e,i,s,r,o,function(e,n,o,l,u,c){var d=Math.min(s,Math.ceil(i/2)),f=u?u.bounds.max.x-u.bounds.min.x:0;if(!(l>d)){l=d-l;var p=l,v=i-1-l;if(!(o<p||o>v)){1===c&&a.translate(u,{x:(o+(i%2==1?1:-1))*f,y:0});return h(t+(u?o*f:0)+o*r,n,o,l,u,c)}}})},n.newtonsCradle=function(t,e,i,n,o){for(var a=s.create({label:"Newtons Cradle"}),l=0;l<i;l++){var u=h.circle(t+l*(1.9*n),e+o,n,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),c=r.create({pointA:{x:t+l*(1.9*n),y:e},bodyB:u});s.addBody(a,u),s.addConstraint(a,c)}return a},n.car=function(t,e,i,n,o){var l=a.nextGroup(!0),u=.5*-i+20,c=.5*i-20,d=s.create({label:"Car"}),f=h.rectangle(t,e,i,n,{collisionFilter:{group:l},chamfer:{radius:.5*n},density:2e-4}),p=h.circle(t+u,e+0,o,{collisionFilter:{group:l},friction:.8}),v=h.circle(t+c,e+0,o,{collisionFilter:{group:l},friction:.8}),g=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:p,stiffness:1,length:0}),y=r.create({bodyB:f,pointB:{x:c,y:0},bodyA:v,stiffness:1,length:0});return s.addBody(d,f),s.addBody(d,p),s.addBody(d,v),s.addConstraint(d,g),s.addConstraint(d,y),d},n.softBody=function(t,e,i,s,r,a,l,u,c,d){c=o.extend({inertia:1/0},c),d=o.extend({stiffness:.2,render:{type:"line",anchors:!1}},d);var f=n.stack(t,e,i,s,r,a,function(t,e){return h.circle(t,e,u,c)});return n.mesh(f,i,s,l,d),f.label="Soft Body",f}}()},function(t,e){function i(t,e,i){i=i||0;var n,s,r,o,a,h,l,u=[0,0];return n=t[1][1]-t[0][1],s=t[0][0]-t[1][0],r=n*t[0][0]+s*t[0][1],o=e[1][1]-e[0][1],a=e[0][0]-e[1][0],h=o*e[0][0]+a*e[0][1],l=n*a-o*s,M(l,0,i)||(u[0]=(a*r-s*h)/l,u[1]=(n*h-o*r)/l),u}function n(t,e,i,n){var s=e[0]-t[0],r=e[1]-t[1],o=n[0]-i[0],a=n[1]-i[1];if(o*r-a*s==0)return!1;var h=(s*(i[1]-t[1])+r*(t[0]-i[0]))/(o*r-a*s),l=(o*(t[1]-i[1])+a*(i[0]-t[0]))/(a*s-o*r);return h>=0&&h<=1&&l>=0&&l<=1}function s(t,e,i){return(e[0]-t[0])*(i[1]-t[1])-(i[0]-t[0])*(e[1]-t[1])}function r(t,e,i){return s(t,e,i)>0}function o(t,e,i){return s(t,e,i)>=0}function a(t,e,i){return s(t,e,i)<0}function h(t,e,i){return s(t,e,i)<=0}function l(t,e,i,n){if(n){var r=_,o=E;r[0]=e[0]-t[0],r[1]=e[1]-t[1],o[0]=i[0]-e[0],o[1]=i[1]-e[1];var a=r[0]*o[0]+r[1]*o[1],h=Math.sqrt(r[0]*r[0]+r[1]*r[1]),l=Math.sqrt(o[0]*o[0]+o[1]*o[1]);return Math.acos(a/(h*l))<n}return 0===s(t,e,i)}function u(t,e){var i=e[0]-t[0],n=e[1]-t[1];return i*i+n*n}function c(t,e){var i=t.length;return t[e<0?e%i+i:e%i]}function d(t){t.length=0}function f(t,e,i,n){for(var s=i;s<n;s++)t.push(e[s])}function p(t){for(var e=0,i=t,n=1;n<t.length;++n)(i[n][1]<i[e][1]||i[n][1]===i[e][1]&&i[n][0]>i[e][0])&&(e=n);r(c(t,e-1),c(t,e),c(t,e+1))||v(t)}function v(t){for(var e=[],i=t.length,n=0;n!==i;n++)e.push(t.pop());for(var n=0;n!==i;n++)t[n]=e[n]}function g(t,e){return a(c(t,e-1),c(t,e),c(t,e+1))}function y(t,e,n){var s,r,a=P,l=L;if(o(c(t,e+1),c(t,e),c(t,n))&&h(c(t,e-1),c(t,e),c(t,n)))return!1;r=u(c(t,e),c(t,n));for(var d=0;d!==t.length;++d)if((d+1)%t.length!==e&&d!==e&&o(c(t,e),c(t,n),c(t,d+1))&&h(c(t,e),c(t,n),c(t,d))&&(a[0]=c(t,e),a[1]=c(t,n),l[0]=c(t,d),l[1]=c(t,d+1),s=i(a,l),u(c(t,e),s)<r))return!1;return!0}function m(t,e,i,n){var s=n||[];if(d(s),e<i)for(var r=e;r<=i;r++)s.push(t[r]);else{for(var r=0;r<=i;r++)s.push(t[r]);for(var r=e;r<t.length;r++)s.push(t[r])}return s}function x(t){for(var e=[],i=[],n=[],s=[],r=Number.MAX_VALUE,o=0;o<t.length;++o)if(g(t,o))for(var a=0;a<t.length;++a)if(y(t,o,a)){i=x(m(t,o,a,s)),n=x(m(t,a,o,s));for(var h=0;h<n.length;h++)i.push(n[h]);i.length<r&&(e=i,r=i.length,e.push([c(t,o),c(t,a)]))}return e}function w(t){var e=x(t);return e.length>0?b(t,e):[t]}function b(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var i=[t],n=0;n<e.length;n++)for(var s=e[n],r=0;r<i.length;r++){var o=i[r],a=b(o,s);if(a){i.splice(r,1),i.push(a[0],a[1]);break}}return i}var s=e,n=t.indexOf(s[0]),r=t.indexOf(s[1]);return-1!==n&&-1!==r&&[m(t,n,r),m(t,r,n)]}function T(t){var e,i=t;for(e=0;e<i.length-1;e++)for(var s=0;s<e-1;s++)if(n(i[e],i[e+1],i[s],i[s+1]))return!1;for(e=1;e<i.length-2;e++)if(n(i[0],i[i.length-1],i[e],i[e+1]))return!1;return!0}function S(t,e,i,n,s){s=s||0;var r=e[1]-t[1],o=t[0]-e[0],a=r*t[0]+o*t[1],h=n[1]-i[1],l=i[0]-n[0],u=h*i[0]+l*i[1],c=r*l-h*o;return M(c,0,s)?[0,0]:[(l*a-o*u)/c,(r*u-h*a)/c]}function A(t,e,i,n,s,l,d){l=l||100,d=d||0,s=s||25,e=void 0!==e?e:[],i=i||[],n=n||[];var p=[0,0],v=[0,0],y=[0,0],m=0,x=0,w=0,b=0,T=0,C=0,M=0,_=[],E=[],P=t,L=t;if(L.length<3)return e;if(++d>l)return console.warn("quickDecomp: max level ("+l+") reached."),e;for(var k=0;k<t.length;++k)if(g(P,k)){i.push(P[k]),m=x=Number.MAX_VALUE;for(var F=0;F<t.length;++F)r(c(P,k-1),c(P,k),c(P,F))&&h(c(P,k-1),c(P,k),c(P,F-1))&&(y=S(c(P,k-1),c(P,k),c(P,F),c(P,F-1)),a(c(P,k+1),c(P,k),y)&&(w=u(P[k],y))<x&&(x=w,v=y,C=F)),r(c(P,k+1),c(P,k),c(P,F+1))&&h(c(P,k+1),c(P,k),c(P,F))&&(y=S(c(P,k+1),c(P,k),c(P,F),c(P,F+1)),r(c(P,k-1),c(P,k),y)&&(w=u(P[k],y))<m&&(m=w,p=y,T=F));if(C===(T+1)%t.length)y[0]=(v[0]+p[0])/2,y[1]=(v[1]+p[1])/2,n.push(y),k<T?(f(_,P,k,T+1),_.push(y),E.push(y),0!==C&&f(E,P,C,P.length),f(E,P,0,k+1)):(0!==k&&f(_,P,k,P.length),f(_,P,0,T+1),_.push(y),E.push(y),f(E,P,C,k+1));else{if(C>T&&(T+=t.length),b=Number.MAX_VALUE,T<C)return e;for(var F=C;F<=T;++F)o(c(P,k-1),c(P,k),c(P,F))&&h(c(P,k+1),c(P,k),c(P,F))&&(w=u(c(P,k),c(P,F)))<b&&(b=w,M=F%t.length);k<M?(f(_,P,k,M+1),0!==M&&f(E,P,M,L.length),f(E,P,0,k+1)):(0!==k&&f(_,P,k,L.length),f(_,P,0,M+1),f(E,P,M,k+1))}return _.length<E.length?(A(_,e,i,n,s,l,d),A(E,e,i,n,s,l,d)):(A(E,e,i,n,s,l,d),A(_,e,i,n,s,l,d)),e}return e.push(t),e}function C(t,e){for(var i=0,n=t.length-1;t.length>3&&n>=0;--n)l(c(t,n-1),c(t,n),c(t,n+1),e)&&(t.splice(n%t.length,1),i++);return i}function M(t,e,i){return i=i||0,Math.abs(t-e)<i}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={decomp:w,quickDecomp:A,isSimple:T,removeCollinearPoints:C,makeCCW:p};var _=[],E=[],P=[],L=[]},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={Global:["anims","cache","registry","sound","textures"],CoreScene:["EventEmitter","CameraManager","GameObjectCreator","GameObjectFactory","ScenePlugin","DisplayList","UpdateList"],DefaultScene:["CameraManager3D","Clock","DataManagerPlugin","InputPlugin","Loader","TweenManager","LightsPlugin"]};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=!1,n=function(t,e,n){var s=this.currentContext,r=n.canvasData;i&&(t|=0,e|=0),s.drawImage(n.source.image,r.sx,r.sy,r.sWidth,r.sHeight,t,e,r.dWidth,r.dHeight)};t.exports=function(t){return i=t,n}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=!1,n=function(t,e,n){var s=this.currentContext,r=t.frame,o=r.canvasData;this.currentBlendMode!==t.blendMode&&(this.currentBlendMode=t.blendMode,s.globalCompositeOperation=this.blendModes[t.blendMode]),this.currentAlpha!==t.alpha&&(this.currentAlpha=t.alpha,s.globalAlpha=t.alpha),this.currentScaleMode!==t.scaleMode&&(this.currentScaleMode=t.scaleMode);var a=r.x,h=r.y,l=1,u=1;t.flipX?(l=-1,a-=o.dWidth-t.displayOriginX):a-=t.displayOriginX,t.flipY?(u=-1,h-=o.dHeight-t.displayOriginY):h-=t.displayOriginY;var c=t.x-e.scrollX*t.scrollFactorX,d=t.y-e.scrollY*t.scrollFactorY;if(i&&(c|=0,d|=0,a|=0,h|=0),s.save(),n){var f=n.matrix;s.transform(f[0],f[1],f[2],f[3],f[4],f[5])}s.translate(c,d),s.rotate(t.rotation),s.scale(t.scaleX,t.scaleY),s.scale(l,u),s.drawImage(r.source.image,o.sx,o.sy,o.sWidth,o.sHeight,a,h,o.dWidth,o.dHeight),s.restore()};t.exports=function(t){return i=t,n}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s=i(221),r=function(){var t=[],e=s.supportNewBlendModes;return t[n.NORMAL]="source-over",t[n.ADD]="lighter",t[n.MULTIPLY]=e?"multiply":"source-over",t[n.SCREEN]=e?"screen":"source-over",t[n.OVERLAY]=e?"overlay":"source-over",t[n.DARKEN]=e?"darken":"source-over",t[n.LIGHTEN]=e?"lighten":"source-over",t[n.COLOR_DODGE]=e?"color-dodge":"source-over",t[n.COLOR_BURN]=e?"color-burn":"source-over",t[n.HARD_LIGHT]=e?"hard-light":"source-over",t[n.SOFT_LIGHT]=e?"soft-light":"source-over",t[n.DIFFERENCE]=e?"difference":"source-over",t[n.EXCLUSION]=e?"exclusion":"source-over",t[n.HUE]=e?"hue":"source-over",t[n.SATURATION]=e?"saturation":"source-over",t[n.COLOR]=e?"color":"source-over",t[n.LUMINOSITY]=e?"luminosity":"source-over",t};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e="image/png"),void 0===i&&(i=.92);var n=t.toDataURL(e,i),s=new Image;return s.src=n,s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){e||(e="image/png"),i||(i=.92);var n=t.getContext("experimental-webgl"),s=new Uint8Array(n.drawingBufferWidth*n.drawingBufferHeight*4);n.readPixels(0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.RGBA,n.UNSIGNED_BYTE,s);var r,o=document.createElement("canvas"),a=o.getContext("2d");o.width=n.drawingBufferWidth,o.height=n.drawingBufferHeight,r=a.getImageData(0,0,o.width,o.height);for(var h=r.data,l=0;l<o.height;l+=1)for(var u=0;u<o.width;u+=1){var c=4*((o.height-l)*o.width+u),d=4*(l*o.width+u);h[d+0]=s[c+0],h[d+1]=s[c+1],h[d+2]=s[c+2],h[d+3]=s[c+3]}a.putImageData(r,0,0);var f=o.toDataURL(e,i),p=new Image;return p.src=f,p};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(946),r=i(947),o=i(110),a=new n({Extends:o,initialize:function(t){o.call(this,{game:t.game,renderer:t.renderer,gl:t.renderer.gl,topology:t.topology?t.topology:t.renderer.gl.TRIANGLES,vertShader:t.vertShader?t.vertShader:r,fragShader:t.fragShader?t.fragShader:s,vertexCapacity:t.vertexCapacity?t.vertexCapacity:3,vertexSize:t.vertexSize?t.vertexSize:2*Float32Array.BYTES_PER_ELEMENT,vertices:new Float32Array([-1,1,-1,-7,7,1]).buffer,attributes:[{name:"inPosition",size:2,type:t.renderer.gl.FLOAT,normalized:!1,offset:0}]}),this.vertexViewF32=new Float32Array(this.vertexData),this.maxQuads=1,this.resolutionDirty=!0},onBind:function(){o.prototype.onBind.call(this);var t=this.renderer,e=this.program;return this.resolutionDirty&&(t.setFloat2(e,"uResolution",this.width,this.height),t.setInt1(e,"uMainSampler",0),t.setInt1(e,"uMaskSampler",1),this.resolutionDirty=!1),this},resize:function(t,e,i){return o.prototype.resize.call(this,t,e,i),this.resolutionDirty=!0,this},beginMask:function(t,e,i){var n=t.bitmapMask,s=this.renderer,r=this.gl,o=n.visible;n&&r&&(s.setFramebuffer(t.maskFramebuffer),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),n.visible=!0,n.renderWebGL(s,n,0,i),n.visible=o,s.flush(),s.setFramebuffer(t.mainFramebuffer),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT))},endMask:function(t){var e=t.bitmapMask,i=this.renderer,n=this.gl;e&&(i.setFramebuffer(null),i.setPipeline(this),i.setTexture2D(t.maskTexture,1),i.setTexture2D(t.mainTexture,0),i.setInt1(this.program,"uInvertMaskAlpha",t.invertAlpha),n.drawArrays(this.topology,0,3))}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(138),r=i(280),o=i(380),a=i(948),h=i(949),l=i(44),u=i(110),c=function(t,e,i,n,s){this.x=t,this.y=e,this.width=i,this.rgb=n,this.alpha=s},d=function(t,e,i,n,s){this.points=[],this.pointsLength=1,this.points[0]=new c(t,e,i,n,s)},f=new Float32Array([1,0,0,1,0,0]),p=new Float32Array(6e3),v=0,g=[],y=new n({Extends:u,Mixins:[o],initialize:function(t){u.call(this,{game:t.game,renderer:t.renderer,gl:t.renderer.gl,topology:t.topology?t.topology:t.renderer.gl.TRIANGLES,vertShader:t.vertShader?t.vertShader:h,fragShader:t.fragShader?t.fragShader:a,vertexCapacity:t.vertexCapcity?t.vertexCapacity:12e3,vertexSize:t.vertexSize?t.vertexSize:2*Float32Array.BYTES_PER_ELEMENT+4*Uint8Array.BYTES_PER_ELEMENT,attributes:[{name:"inPosition",size:2,type:t.renderer.gl.FLOAT,normalized:!1,offset:0},{name:"inTint",size:4,type:t.renderer.gl.UNSIGNED_BYTE,normalized:!0,offset:2*Float32Array.BYTES_PER_ELEMENT}]}),this.vertexViewF32=new Float32Array(this.vertexData),this.vertexViewU32=new Uint32Array(this.vertexData),this.tempTriangle=[{x:0,y:0,width:0,rgb:16777215,alpha:1},{x:0,y:0,width:0,rgb:16777215,alpha:1},{x:0,y:0,width:0,rgb:16777215,alpha:1},{x:0,y:0,width:0,rgb:16777215,alpha:1}],this.polygonCache=[],this.mvpInit()},onBind:function(){return u.prototype.onBind.call(this),this.mvpUpdate(),this},resize:function(t,e,i){return u.prototype.resize.call(this,t,e,i),this.projOrtho(0,this.width,this.height,0,-1e3,1e3),this},batchFillRect:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y,m){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var x=this.vertexViewF32,w=this.vertexViewU32,b=this.vertexCount*this.vertexComponentCount,T=r+a,S=o+h,A=m[0],C=m[1],M=m[2],_=m[3],E=m[4],P=m[5],L=d*A+f*M,k=d*C+f*_,F=p*A+v*M,R=p*C+v*_,O=g*A+y*M+E,B=g*C+y*_+P,D=r*L+o*F+O,I=r*k+o*R+B,Y=r*L+S*F+O,z=r*k+S*R+B,X=T*L+S*F+O,N=T*k+S*R+B,V=T*L+o*F+O,W=T*k+o*R+B,G=l.getTintAppendFloatAlphaAndSwap(u,c);x[b+0]=D,x[b+1]=I,w[b+2]=G,x[b+3]=Y,x[b+4]=z,w[b+5]=G,x[b+6]=X,x[b+7]=N,w[b+8]=G,x[b+9]=D,x[b+10]=I,w[b+11]=G,x[b+12]=X,x[b+13]=N,w[b+14]=G,x[b+15]=V,x[b+16]=W,w[b+17]=G,this.vertexCount+=6},batchFillTriangle:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y,m,x,w){this.renderer.setPipeline(this),this.vertexCount+3>this.vertexCapacity&&this.flush();var b=this.vertexViewF32,T=this.vertexViewU32,S=this.vertexCount*this.vertexComponentCount,A=w[0],C=w[1],M=w[2],_=w[3],E=w[4],P=w[5],L=p*A+v*M,k=p*C+v*_,F=g*A+y*M,R=g*C+y*_,O=m*A+x*M+E,B=m*C+x*_+P,D=r*L+o*F+O,I=r*k+o*R+B,Y=a*L+h*F+O,z=a*k+h*R+B,X=u*L+c*F+O,N=u*k+c*R+B,V=l.getTintAppendFloatAlphaAndSwap(d,f);b[S+0]=D,b[S+1]=I,T[S+2]=V,b[S+3]=Y,b[S+4]=z,T[S+5]=V,b[S+6]=X,b[S+7]=N,T[S+8]=V,this.vertexCount+=3},batchStrokeTriangle:function(t,e,i,n,s,r,o,a,h,l,u,c,d,f,p,v,g,y,m,x,w){var b=this.tempTriangle;b[0].x=r,b[0].y=o,b[0].width=c,b[0].rgb=d,b[0].alpha=f,b[1].x=a,b[1].y=h,b[1].width=c,b[1].rgb=d,b[1].alpha=f,b[2].x=l,b[2].y=u,b[2].width=c,b[2].rgb=d,b[2].alpha=f,b[3].x=r,b[3].y=o,b[3].width=c,b[3].rgb=d,b[3].alpha=f,this.batchStrokePath(t,e,i,n,s,b,c,d,f,p,v,g,y,m,x,!1,w)},batchFillPath:function(t,e,i,n,s,o,a,h,u,c,d,f,p,v,g){this.renderer.setPipeline(this);for(var y,m,x,w,b,T,S,A,C,M,_,E,P,L,k,F,R,O=o.length,B=this.polygonCache,D=this.vertexViewF32,I=this.vertexViewU32,Y=0,z=g[0],X=g[1],N=g[2],V=g[3],W=g[4],G=g[5],U=u*z+c*N,H=u*X+c*V,j=d*z+f*N,q=d*X+f*V,K=p*z+v*N+W,J=p*X+v*V+G,Z=l.getTintAppendFloatAlphaAndSwap(a,h),Q=0;Q<O;++Q)m=o[Q],B.push(m.x,m.y);y=r(B),O=y.length;for(var $=0;$<O;$+=3)x=2*y[$+0],w=2*y[$+1],b=2*y[$+2],this.vertexCount+3>this.vertexCapacity&&this.flush(),Y=this.vertexCount*this.vertexComponentCount,T=B[x+0],S=B[x+1],A=B[w+0],C=B[w+1],M=B[b+0],_=B[b+1],E=T*U+S*j+K,P=T*H+S*q+J,L=A*U+C*j+K,k=A*H+C*q+J,F=M*U+_*j+K,R=M*H+_*q+J,D[Y+0]=E,D[Y+1]=P,I[Y+2]=Z,D[Y+3]=L,D[Y+4]=k,I[Y+5]=Z,D[Y+6]=F,D[Y+7]=R,I[Y+8]=Z,this.vertexCount+=3;B.length=0},batchStrokePath:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y){this.renderer.setPipeline(this);for(var m,x,w,b,T,S,A=r.length,C=this.polygonCache,M=this.vertexViewF32,_=this.vertexViewU32,E=l.getTintAppendFloatAlphaAndSwap,P=0;P+1<A;P+=1)m=r[P],x=r[P+1],S=this.batchLine(t,e,i,n,s,m.x,m.y,x.x,x.y,m.width/2,x.width/2,m.rgb,x.rgb,h,u,c,d,f,p,v,y),C.push(S);for(var L=1,k=C.length;L<k;++L)this.vertexCount+6>this.vertexCapacity&&this.flush(),w=C[L-1]||C[k-1],b=C[L],T=this.vertexCount*this.vertexComponentCount,M[T+0]=w[6],M[T+1]=w[7],_[T+2]=E(w[8],h),M[T+3]=w[0],M[T+4]=w[1],_[T+5]=E(w[2],h),M[T+6]=b[9],M[T+7]=b[10],_[T+8]=E(b[11],h),M[T+9]=w[0],M[T+10]=w[1],_[T+11]=E(w[2],h),M[T+12]=w[6],M[T+13]=w[7],_[T+14]=E(w[8],h),M[T+15]=b[3],M[T+16]=b[4],_[T+17]=E(b[5],h),this.vertexCount+=6;C.length=0},batchLine:function(t,e,i,n,s,r,o,a,h,u,c,d,f,p,v,g,y,m,x,w,b){this.renderer.setPipeline(this),this.vertexCount+6>this.vertexCapacity&&this.flush();var T=b[0],S=b[1],A=b[2],C=b[3],M=b[4],_=b[5],E=v*T+g*A,P=v*S+g*C,L=y*T+m*A,k=y*S+m*C,F=x*T+w*A+M,R=x*S+w*C+_,O=this.vertexViewF32,B=this.vertexViewU32,D=a-r,I=h-o,Y=Math.sqrt(D*D+I*I),z=u*(h-o)/Y,X=u*(r-a)/Y,N=c*(h-o)/Y,V=c*(r-a)/Y,W=a-N,G=h-V,U=r-z,H=o-X,j=a+N,q=h+V,K=r+z,J=o+X,Z=W*E+G*L+F,Q=W*P+G*k+R,$=U*E+H*L+F,tt=U*P+H*k+R,et=j*E+q*L+F,it=j*P+q*k+R,nt=K*E+J*L+F,st=K*P+J*k+R,rt=l.getTintAppendFloatAlphaAndSwap,ot=rt(d,p),at=rt(f,p),ht=this.vertexCount*this.vertexComponentCount;return O[ht+0]=Z,O[ht+1]=Q,B[ht+2]=at,O[ht+3]=$,O[ht+4]=tt,B[ht+5]=ot,O[ht+6]=et,O[ht+7]=it,B[ht+8]=at,O[ht+9]=$,O[ht+10]=tt,B[ht+11]=ot,O[ht+12]=nt,O[ht+13]=st,B[ht+14]=ot,O[ht+15]=et,O[ht+16]=it,B[ht+17]=at,this.vertexCount+=6,[Z,Q,f,$,tt,d,et,it,f,nt,st,d]},batchGraphics:function(t,e,i){if(!(t.commandBuffer.length<=0)){var n=null;i&&(n=i.matrix),this.renderer.setPipeline(this);var r,o,a,h,l,u,y=e.scrollX*t.scrollFactorX,m=e.scrollY*t.scrollFactorY,x=t.x,w=t.y,b=t.scaleX,T=t.scaleY,S=t.rotation,A=t.commandBuffer,C=t.alpha,M=1,_=1,E=0,P=0,L=1,k=e.matrix.matrix,F=null,R=0,O=0,B=0,D=0,I=0,Y=0,z=0,X=0,N=0,V=0,W=null,G=Math.sin,U=Math.cos,H=2*Math.PI,j=G(S),q=U(S),K=q*b,J=j*b,Z=-j*T,Q=q*T,$=x,tt=w,et=k[0],it=k[1],nt=k[2],st=k[3],rt=k[4],ot=k[5];if(n){var at=n[0],ht=n[1],lt=n[2],ut=n[3],ct=n[4],dt=n[5],ft=-y,pt=-m,vt=ft*et+pt*nt+rt,gt=ft*it+pt*st+ot,yt=at*et+ht*nt,mt=at*it+ht*st,xt=lt*et+ut*nt,wt=lt*it+ut*st,bt=ct*et+dt*nt+vt,Tt=ct*it+dt*st+gt;r=K*yt+J*xt,o=K*mt+J*wt,a=Z*yt+Q*xt,h=Z*mt+Q*wt,l=$*yt+tt*xt+bt,u=$*mt+tt*wt+Tt}else $-=y,tt-=m,r=K*et+J*nt,o=K*it+J*st,a=Z*et+Q*nt,h=Z*it+Q*st,l=$*et+tt*nt+rt,u=$*it+tt*st+ot;var St,At;g.length=0;for(var Ct=0,Mt=A.length;Ct<Mt;++Ct)switch(st=A[Ct]){case s.ARC:for(R=0,I=A[Ct+1],Y=A[Ct+2],z=A[Ct+3],X=A[Ct+4],N=A[Ct+5],V=A[Ct+6],null===F&&(F=new d(I+U(X)*z,Y+G(X)*z,L,E,M*C),g.push(F),R+=.01),N-=X,V?N<-H?N=-H:N>0&&(N=N%H-H):N>H?N=H:N<0&&(N=H+N%H);R<1;)D=N*R+X,O=I+U(D)*z,B=Y+G(D)*z,F.points.push(new c(O,B,L,E,M*C)),R+=.01;D=N+X,O=I+U(D)*z,B=Y+G(D)*z,F.points.push(new c(O,B,L,E,M*C)),Ct+=6;break;case s.LINE_STYLE:L=A[Ct+1],E=A[Ct+2],M=A[Ct+3],Ct+=3;break;case s.FILL_STYLE:P=A[Ct+1],_=A[Ct+2],Ct+=2;break;case s.BEGIN_PATH:g.length=0,F=null;break;case s.CLOSE_PATH:F&&F.points.length&&F.points.push(F.points[0]);break;case s.FILL_PATH:for(St=0,At=g.length;St<At;++St)this.batchFillPath(x,w,b,T,S,g[St].points,P,_*C,r,o,a,h,l,u,f);break;case s.STROKE_PATH:for(St=0,At=g.length;St<At;++St)W=g[St],this.batchStrokePath(x,w,b,T,S,W.points,L,E,M*C,r,o,a,h,l,u,W===this._lastPath,f);break;case s.FILL_RECT:this.batchFillRect(x,w,b,T,S,A[Ct+1],A[Ct+2],A[Ct+3],A[Ct+4],P,_*C,r,o,a,h,l,u,f),Ct+=4;break;case s.FILL_TRIANGLE:this.batchFillTriangle(x,w,b,T,S,A[Ct+1],A[Ct+2],A[Ct+3],A[Ct+4],A[Ct+5],A[Ct+6],P,_*C,r,o,a,h,l,u,f),Ct+=6;break;case s.STROKE_TRIANGLE:this.batchStrokeTriangle(x,w,b,T,S,A[Ct+1],A[Ct+2],A[Ct+3],A[Ct+4],A[Ct+5],A[Ct+6],L,E,M*C,r,o,a,h,l,u,f),Ct+=6;break;case s.LINE_TO:null!==F?F.points.push(new c(A[Ct+1],A[Ct+2],L,E,M*C)):(F=new d(A[Ct+1],A[Ct+2],L,E,M*C),g.push(F)),Ct+=2;break;case s.MOVE_TO:F=new d(A[Ct+1],A[Ct+2],L,E,M*C),g.push(F),Ct+=2;break;case s.LINE_FX_TO:null!==F?F.points.push(new c(A[Ct+1],A[Ct+2],A[Ct+3],A[Ct+4],A[Ct+5]*C)):(F=new d(A[Ct+1],A[Ct+2],A[Ct+3],A[Ct+4],A[Ct+5]*C),g.push(F)),Ct+=5;break;case s.MOVE_FX_TO:F=new d(A[Ct+1],A[Ct+2],A[Ct+3],A[Ct+4],A[Ct+5]*C),g.push(F),Ct+=5;break;case s.SAVE:p[v+0]=f[0],p[v+1]=f[1],p[v+2]=f[2],p[v+3]=f[3],p[v+4]=f[4],p[v+5]=f[5],v+=6;break;case s.RESTORE:v-=6,f[0]=p[v+0],f[1]=p[v+1],f[2]=p[v+2],f[3]=p[v+3],f[4]=p[v+4],f[5]=p[v+5];break;case s.TRANSLATE:I=A[Ct+1],Y=A[Ct+2],f[4]=f[0]*I+f[2]*Y+f[4],f[5]=f[1]*I+f[3]*Y+f[5],Ct+=2;break;case s.SCALE:I=A[Ct+1],Y=A[Ct+2],f[0]*=I,f[1]*=I,f[2]*=Y,f[3]*=Y,Ct+=2;break;case s.ROTATE:Y=A[Ct+1],I=G(Y),Y=U(Y),K=f[0],J=f[1],Z=f[2],Q=f[3],f[0]=Y*K+I*Z,f[1]=Y*J+I*Q,f[2]=-I*K+Y*Z,f[3]=-I*J+Y*Q,Ct+=1;break;default:console.error("Phaser: Invalid Graphics Command ID "+st)}}},drawStaticTilemapLayer:function(){},drawEmitterManager:function(){},drawBlitter:function(){},batchSprite:function(){},batchMesh:function(){},batchBitmapText:function(){},batchDynamicBitmapText:function(){},batchText:function(){},batchDynamicTilemapLayer:function(){},batchTileSprite:function(){}});t.exports=y},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={modelMatrixDirty:!1,viewMatrixDirty:!1,projectionMatrixDirty:!1,modelMatrix:null,viewMatrix:null,projectionMatrix:null,mvpInit:function(){return this.modelMatrixDirty=!0,this.viewMatrixDirty=!0,this.projectionMatrixDirty=!0,this.modelMatrix=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.viewMatrix=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.projectionMatrix=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this},mvpUpdate:function(){var t=this.program;return this.modelMatrixDirty&&(this.renderer.setMatrix4(t,"uModelMatrix",!1,this.modelMatrix),this.modelMatrixDirty=!1),this.viewMatrixDirty&&(this.renderer.setMatrix4(t,"uViewMatrix",!1,this.viewMatrix),this.viewMatrixDirty=!1),this.projectionMatrixDirty&&(this.renderer.setMatrix4(t,"uProjectionMatrix",!1,this.projectionMatrix),this.projectionMatrixDirty=!1),this},modelIdentity:function(){var t=this.modelMatrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this.modelMatrixDirty=!0,this},modelScale:function(t,e,i){var n=this.modelMatrix;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*e,n[5]=n[5]*e,n[6]=n[6]*e,n[7]=n[7]*e,n[8]=n[8]*i,n[9]=n[9]*i,n[10]=n[10]*i,n[11]=n[11]*i,this.modelMatrixDirty=!0,this},modelTranslate:function(t,e,i){var n=this.modelMatrix;return n[12]=n[0]*t+n[4]*e+n[8]*i+n[12],n[13]=n[1]*t+n[5]*e+n[9]*i+n[13],n[14]=n[2]*t+n[6]*e+n[10]*i+n[14],n[15]=n[3]*t+n[7]*e+n[11]*i+n[15],this.modelMatrixDirty=!0,this},modelRotateX:function(t){var e=this.modelMatrix,i=Math.sin(t),n=Math.cos(t),s=e[4],r=e[5],o=e[6],a=e[7],h=e[8],l=e[9],u=e[10],c=e[11];return e[4]=s*n+h*i,e[5]=r*n+l*i,e[6]=o*n+u*i,e[7]=a*n+c*i,e[8]=h*n-s*i,e[9]=l*n-r*i,e[10]=u*n-o*i,e[11]=c*n-a*i,this.modelMatrixDirty=!0,this},modelRotateY:function(t){var e=this.modelMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[8],l=e[9],u=e[10],c=e[11];return e[0]=s*n-h*i,e[1]=r*n-l*i,e[2]=o*n-u*i,e[3]=a*n-c*i,e[8]=s*i+h*n,e[9]=r*i+l*n,e[10]=o*i+u*n,e[11]=a*i+c*n,this.modelMatrixDirty=!0,this},modelRotateZ:function(t){var e=this.modelMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[4],l=e[5],u=e[6],c=e[7];return e[0]=s*n+h*i,e[1]=r*n+l*i,e[2]=o*n+u*i,e[3]=a*n+c*i,e[4]=h*n-s*i,e[5]=l*n-r*i,e[6]=u*n-o*i,e[7]=c*n-a*i,this.modelMatrixDirty=!0,this},viewIdentity:function(){var t=this.viewMatrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this.viewMatrixDirty=!0,this},viewScale:function(t,e,i){var n=this.viewMatrix;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*e,n[5]=n[5]*e,n[6]=n[6]*e,n[7]=n[7]*e,n[8]=n[8]*i,n[9]=n[9]*i,n[10]=n[10]*i,n[11]=n[11]*i,this.viewMatrixDirty=!0,this},viewTranslate:function(t,e,i){var n=this.viewMatrix;return n[12]=n[0]*t+n[4]*e+n[8]*i+n[12],n[13]=n[1]*t+n[5]*e+n[9]*i+n[13],n[14]=n[2]*t+n[6]*e+n[10]*i+n[14],n[15]=n[3]*t+n[7]*e+n[11]*i+n[15],this.viewMatrixDirty=!0,this},viewRotateX:function(t){var e=this.viewMatrix,i=Math.sin(t),n=Math.cos(t),s=e[4],r=e[5],o=e[6],a=e[7],h=e[8],l=e[9],u=e[10],c=e[11];return e[4]=s*n+h*i,e[5]=r*n+l*i,e[6]=o*n+u*i,e[7]=a*n+c*i,e[8]=h*n-s*i,e[9]=l*n-r*i,e[10]=u*n-o*i,e[11]=c*n-a*i,this.viewMatrixDirty=!0,this},viewRotateY:function(t){var e=this.viewMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[8],l=e[9],u=e[10],c=e[11];return e[0]=s*n-h*i,e[1]=r*n-l*i,e[2]=o*n-u*i,e[3]=a*n-c*i,e[8]=s*i+h*n,e[9]=r*i+l*n,e[10]=o*i+u*n,e[11]=a*i+c*n,this.viewMatrixDirty=!0,this},viewRotateZ:function(t){var e=this.viewMatrix,i=Math.sin(t),n=Math.cos(t),s=e[0],r=e[1],o=e[2],a=e[3],h=e[4],l=e[5],u=e[6],c=e[7];return e[0]=s*n+h*i,e[1]=r*n+l*i,e[2]=o*n+u*i,e[3]=a*n+c*i,e[4]=h*n-s*i,e[5]=l*n-r*i,e[6]=u*n-o*i,e[7]=c*n-a*i,this.viewMatrixDirty=!0,this},viewLoad2D:function(t){var e=this.viewMatrix;return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=0,e[4]=t[2],e[5]=t[3],e[6]=0,e[7]=0,e[8]=t[4],e[9]=t[5],e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this.viewMatrixDirty=!0,this},viewLoad:function(t){var e=this.viewMatrix;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this.viewMatrixDirty=!0,this},projIdentity:function(){var t=this.projectionMatrix;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this.projectionMatrixDirty=!0,this},projOrtho:function(t,e,i,n,s,r){var o=this.projectionMatrix,a=1/(t-e),h=1/(i-n),l=1/(s-r);return o[0]=-2*a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2*l,o[11]=0,o[12]=(t+e)*a,o[13]=(n+i)*h,o[14]=(r+s)*l,o[15]=1,this.projectionMatrixDirty=!0,this},projPersp:function(t,e,i,n){var s=this.projectionMatrix,r=1/Math.tan(t/2),o=1/(i-n);return s[0]=r/e,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=(n+i)*o,s[11]=-1,s[12]=0,s[13]=0,s[14]=2*n*i*o,s[15]=0,this.projectionMatrixDirty=!0,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(185),r=new n({initialize:function(t){this.sys=new s(this,t),this.game,this.anims,this.cache,this.registry,this.sound,this.textures,this.events,this.cameras,this.cameras3d,this.add,this.make,this.scene,this.children,this.lights,this.data,this.input,this.load,this.time,this.tweens,this.physics,this.impact,this.matter},update:function(){}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(89),r=i(5),o=i(3),a=i(381),h=i(185),l=new n({initialize:function(t,e){if(this.game=t,this.keys={},this.scenes=[],this._pending=[],this._start=[],this._queue=[],this._data={},this.isProcessing=!1,this.isBooted=!1,e){Array.isArray(e)||(e=[e]);for(var i=0;i<e.length;i++)this._pending.push({key:"default",scene:e[i],autoStart:0===i,data:{}})}t.events.once("ready",this.bootQueue,this)},bootQueue:function(){if(!this.isBooted){var t,e,i,n;for(t=0;t<this._pending.length;t++){e=this._pending[t],i=e.key,n=e.scene;var s;n instanceof a?s=this.createSceneFromInstance(i,n):"object"==typeof n?s=this.createSceneFromObject(i,n):"function"==typeof n&&(s=this.createSceneFromFunction(i,n)),i=s.sys.settings.key,this.keys[i]=s,this.scenes.push(s),this._data[i]&&(s.sys.settings.data=this._data[i].data,this._data[i].autoStart&&(e.autoStart=!0)),(e.autoStart||s.sys.settings.active)&&this._start.push(i)}for(this._pending.length=0,this._data={},this.isBooted=!0,t=0;t<this._start.length;t++)e=this._start[t],this.start(e);this._start.length=0}},processQueue:function(){var t=this._pending.length,e=this._queue.length;if(0!==t||0!==e){var i,n;if(t){for(i=0;i<t;i++)n=this._pending[i],this.add(n.key,n.scene,n.autoStart,n.data);for(i=0;i<this._start.length;i++)n=this._start[i],this.start(n);return this._start.length=0,void(this._pending.length=0)}for(i=0;i<this._queue.length;i++)n=this._queue[i],this[n.op](n.keyA,n.keyB);this._queue.length=0}},add:function(t,e,i,n){if(void 0===i&&(i=!1),void 0===n&&(n={}),this.isProcessing||!this.isBooted)return this._pending.push({key:t,scene:e,autoStart:i,data:n}),this.isBooted||(this._data[t]={data:n}),null;t=this.getKey(t,e);var s;return e instanceof a?s=this.createSceneFromInstance(t,e):"object"==typeof e?(e.key=t,s=this.createSceneFromObject(t,e)):"function"==typeof e&&(s=this.createSceneFromFunction(t,e)),s.sys.settings.data=n,t=s.sys.settings.key,this.keys[t]=s,this.scenes.push(s),(i||s.sys.settings.active)&&(this._pending.length?this._start.push(t):this.start(t)),s},remove:function(t){if(this.isProcessing)this._queue.push({op:"remove",keyA:t,keyB:null});else{var e=this.getScene(t);if(!e||e.sys.isTransitioning())return this;var i=this.scenes.indexOf(e),n=e.sys.settings.key;i>-1&&(delete this.keys[n],this.scenes.splice(i,1),this._start.indexOf(n)>-1&&(i=this._start.indexOf(n),this._start.splice(i,1)),e.sys.destroy())}return this},bootScene:function(t){var e=t.sys,i=e.settings;t.init&&(t.init.call(t,i.data),i.isTransition&&e.events.emit("transitioninit",i.transitionFrom,i.transitionDuration));var n;e.load&&(n=e.load,n.reset()),n&&t.preload?(t.preload.call(t),0===n.list.size?this.create(t):(i.status=s.LOADING,n.once("complete",this.loadComplete,this),n.start())):this.create(t)},loadComplete:function(t){var e=t.scene;this.game.sound.onBlurPausedSounds&&this.game.sound.unlock(),this.create(e)},payloadComplete:function(t){this.bootScene(t.scene)},update:function(t,e){this.processQueue(),this.isProcessing=!0;for(var i=this.scenes.length-1;i>=0;i--){var n=this.scenes[i].sys;n.settings.status===s.RUNNING&&n.step(t,e)}},resize:function(t,e){for(var i=0;i<this.scenes.length;i++){this.scenes[i].sys.resize(t,e)}},render:function(t){for(var e=0;e<this.scenes.length;e++){var i=this.scenes[e].sys;i.settings.visible&&i.settings.status>=s.LOADING&&i.settings.status<s.SLEEPING&&i.render(t)}this.isProcessing=!1},create:function(t){var e=t.sys,i=e.settings;t.create&&(t.sys.settings.status=s.CREATING,t.create.call(t,t.sys.settings.data),i.isTransition&&e.events.emit("transitionstart",i.transitionFrom,i.transitionDuration)),i.status=s.RUNNING},createSceneFromFunction:function(t,e){var i=new e;if(i instanceof a){var n=i.sys.settings.key;if(""!==n&&(t=n),this.keys.hasOwnProperty(t))throw new Error("Cannot add a Scene with duplicate key: "+t);return this.createSceneFromInstance(t,i)}return i.sys=new h(i),i.sys.settings.key=t,i.sys.init(this.game),i.update||(i.update=o),i},createSceneFromInstance:function(t,e){var i=e.sys.settings.key;return""!==i?t=i:e.sys.settings.key=t,e.sys.init(this.game),e},createSceneFromObject:function(t,e){var i=new a(e),n=i.sys.settings.key;""!==n?t=n:i.sys.settings.key=t,i.sys.init(this.game);for(var s=["init","preload","create","update","render"],h=0;h<s.length;h++){var l=r(e,s[h],null);"update"!==s[h]||l||(l=o),l&&(i[s[h]]=l)}if(e.hasOwnProperty("extend"))for(var u in e.extend){var c=e.extend[u];"data"===u&&i.hasOwnProperty("data")&&"object"==typeof c?i.data.merge(c):"sys"!==u&&(i[u]=c)}return i},getKey:function(t,e){if(t||(t="default"),"function"==typeof e)return t;if(e instanceof a?t=e.sys.settings.key:"object"==typeof e&&e.hasOwnProperty("key")&&(t=e.key),this.keys.hasOwnProperty(t))throw new Error("Cannot add a Scene with duplicate key: "+t);return t},getScene:function(t){if("string"==typeof t){if(this.keys[t])return this.keys[t]}else for(var e=0;e<this.scenes.length;e++)if(t===this.scenes[e])return t;return null},isActive:function(t){var e=this.getScene(t);return e?e.sys.isActive():null},isVisible:function(t){var e=this.getScene(t);return e?e.sys.isVisible():null},isSleeping:function(t){var e=this.getScene(t);return e?e.sys.isSleeping():null},pause:function(t){var e=this.getScene(t);return e&&e.sys.pause(),this},resume:function(t){var e=this.getScene(t);return e&&e.sys.resume(),this},sleep:function(t){var e=this.getScene(t);return e&&!e.sys.isTransitioning()&&e.sys.sleep(),this},wake:function(t){var e=this.getScene(t);return e&&e.sys.wake(),this},start:function(t,e){if(!this.isBooted)return this._data[t]={autoStart:!0,data:e},this;var i=this.getScene(t);if(i){i.sys.start(e);var n;if(i.sys.load&&(n=i.sys.load),n&&i.sys.settings.hasOwnProperty("pack")&&(n.reset(),n.addPack({payload:i.sys.settings.pack})))return i.sys.settings.status=s.LOADING,n.once("complete",this.payloadComplete,this),n.start(),this;this.bootScene(i)}return this},stop:function(t){var e=this.getScene(t);return e&&!e.sys.isTransitioning()&&e.sys.shutdown(),this},switch:function(t,e){var i=this.getScene(t),n=this.getScene(e);return i&&n&&i!==n&&(this.sleep(t),this.isSleeping(e)?this.wake(e):this.start(e)),this},getAt:function(t){return this.scenes[t]},getIndex:function(t){var e=this.getScene(t);return this.scenes.indexOf(e)},bringToTop:function(t){if(this.isProcessing)this._queue.push({op:"bringToTop",keyA:t,keyB:null});else{var e=this.getIndex(t);if(-1!==e&&e<this.scenes.length){var i=this.getScene(t);this.scenes.splice(e,1),this.scenes.push(i)}}return this},sendToBack:function(t){if(this.isProcessing)this._queue.push({op:"sendToBack",keyA:t,keyB:null});else{var e=this.getIndex(t);if(-1!==e&&e>0){var i=this.getScene(t);this.scenes.splice(e,1),this.scenes.unshift(i)}}return this},moveDown:function(t){if(this.isProcessing)this._queue.push({op:"moveDown",keyA:t,keyB:null});else{var e=this.getIndex(t);if(e>0){var i=e-1,n=this.getScene(t),s=this.getAt(i);this.scenes[e]=s,this.scenes[i]=n}}return this},moveUp:function(t){if(this.isProcessing)this._queue.push({op:"moveUp",keyA:t,keyB:null});else{var e=this.getIndex(t);if(e<this.scenes.length-1){var i=e+1,n=this.getScene(t),s=this.getAt(i);this.scenes[e]=s,this.scenes[i]=n}}return this},moveAbove:function(t,e){if(t===e)return this;if(this.isProcessing)this._queue.push({op:"moveAbove",keyA:t,keyB:e});else{var i=this.getIndex(t),n=this.getIndex(e);if(-1!==i&&-1!==n){var s=this.getAt(n);this.scenes.splice(n,1),this.scenes.splice(i+1,0,s)}}return this},moveBelow:function(t,e){if(t===e)return this;if(this.isProcessing)this._queue.push({op:"moveBelow",keyA:t,keyB:e});else{var i=this.getIndex(t),n=this.getIndex(e);if(-1!==i&&-1!==n){var s=this.getAt(n);this.scenes.splice(n,1),0===i?this.scenes.unshift(s):this.scenes.splice(i,0,s)}}return this},queueOp:function(t,e,i){return this._queue.push({op:t,keyA:e,keyB:i}),this},swapPosition:function(t,e){if(t===e)return this;if(this.isProcessing)this._queue.push({op:"swapPosition",keyA:t,keyB:e});else{var i=this.getIndex(t),n=this.getIndex(e);if(i!==n&&-1!==i&&-1!==n){var s=this.getAt(i);this.scenes[i]=this.scenes[n],this.scenes[n]=s}}return this},dump:function(){for(var t=[],e=["pending","init","start","loading","creating","running","paused","sleeping","shutdown","destroyed"],i=0;i<this.scenes.length;i++){var n=this.scenes[i].sys,r=!n.settings.visible||n.settings.status!==s.RUNNING&&n.settings.status!==s.PAUSED?"[-] ":"[*] ";r+=n.settings.key+" ("+e[n.settings.status]+")",t.push(r)}console.log(t.join("\n"))},destroy:function(){for(var t=this.scenes.length-1;t>=0;t--){this.scenes[t].sys.destroy()}this.update=o,this.scenes=[],this._pending=[],this._start=[],this._queue=[],this.game=null}});t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(89),s=i(5),r=i(77),o=i(955),a={create:function(t){return"string"==typeof t?t={key:t}:void 0===t&&(t={}),{status:n.PENDING,key:s(t,"key",""),active:s(t,"active",!1),visible:s(t,"visible",!0),isBooted:!1,isTransition:!1,transitionFrom:null,transitionDuration:0,transitionAllowInput:!0,data:{},pack:s(t,"pack",!1),cameras:s(t,"cameras",null),map:s(t,"map",r(o,s(t,"mapAdd",{}))),physics:s(t,"physics",{}),loader:s(t,"loader",{}),plugins:s(t,"plugins",!1)}}};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(386),s=i(388),r=i(390),o={create:function(t){var e=t.config.audio,i=t.device.audio;return e&&e.noAudio||!i.webAudio&&!i.audioData?new s(t):!i.webAudio||e&&e.disableWebAudio?new n(t):new r(t)}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(111),s=i(0),r=new s({Extends:n,initialize:function(t,e,i){if(void 0===i&&(i={}),this.tags=t.game.cache.audio.get(e),!this.tags)return void console.warn("Audio cache entry missing: "+e);this.audio=null,this.startTime=0,this.previousTime=0,this.duration=this.tags[0].duration,this.totalDuration=this.tags[0].duration,n.call(this,t,e,i)},play:function(t,e){return!this.manager.isLocked(this,"play",[t,e])&&(!!n.prototype.play.call(this,t,e)&&(!!this.pickAndPlayAudioTag()&&(this.emit("play",this),!0)))},pause:function(){return!this.manager.isLocked(this,"pause")&&(!(this.startTime>0)&&(!!n.prototype.pause.call(this)&&(this.currentConfig.seek=this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0),this.stopAndReleaseAudioTag(),this.emit("pause",this),!0)))},resume:function(){return!this.manager.isLocked(this,"resume")&&(!(this.startTime>0)&&(!!n.prototype.resume.call(this)&&(!!this.pickAndPlayAudioTag()&&(this.emit("resume",this),!0))))},stop:function(){return!this.manager.isLocked(this,"stop")&&(!!n.prototype.stop.call(this)&&(this.stopAndReleaseAudioTag(),this.emit("stop",this),!0))},pickAndPlayAudioTag:function(){if(!this.pickAudioTag())return this.reset(),!1;var t=this.currentConfig.seek,e=this.currentConfig.delay,i=(this.currentMarker?this.currentMarker.start:0)+t;return this.previousTime=i,this.audio.currentTime=i,this.applyConfig(),0===e?(this.startTime=0,this.audio.paused&&this.playCatchPromise()):(this.startTime=window.performance.now()+1e3*e,this.audio.paused||this.audio.pause()),this.resetConfig(),!0},pickAudioTag:function(){if(this.audio)return!0;for(var t=0;t<this.tags.length;t++){var e=this.tags[t];if("false"===e.dataset.used)return e.dataset.used="true",this.audio=e,!0}if(!this.manager.override)return!1;var i=[];this.manager.forEachActiveSound(function(t){t.key===this.key&&t.audio&&i.push(t)},this),i.sort(function(t,e){return t.loop===e.loop?e.seek/e.duration-t.seek/t.duration:t.loop?1:-1});var n=i[0];return this.audio=n.audio,n.reset(),n.audio=null,n.startTime=0,n.previousTime=0,!0},playCatchPromise:function(){var t=this.audio.play();t&&t.catch(function(t){console.warn(t)})},stopAndReleaseAudioTag:function(){this.audio.pause(),this.audio.dataset.used="false",this.audio=null,this.startTime=0,this.previousTime=0},reset:function(){n.prototype.stop.call(this)},onBlur:function(){this.isPlaying=!1,this.isPaused=!0,this.currentConfig.seek=this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0),this.currentConfig.delay=Math.max(0,(this.startTime-window.performance.now())/1e3),this.stopAndReleaseAudioTag()},onFocus:function(){this.isPlaying=!0,this.isPaused=!1,this.pickAndPlayAudioTag()},update:function(t,e){if(this.isPlaying){if(this.startTime>0)return void(this.startTime<t-this.manager.audioPlayDelay&&(this.audio.currentTime+=Math.max(0,t-this.startTime)/1e3,this.startTime=0,this.previousTime=this.audio.currentTime,this.playCatchPromise()));var i=this.currentMarker?this.currentMarker.start:0,n=i+this.duration,s=this.audio.currentTime;if(this.currentConfig.loop)s>=n-this.manager.loopEndOffset?(this.audio.currentTime=i+Math.max(0,s-n),s=this.audio.currentTime):s<i&&(this.audio.currentTime+=i,s=this.audio.currentTime),s<this.previousTime&&this.emit("looped",this);else if(s>=n)return this.reset(),this.stopAndReleaseAudioTag(),void this.emit("ended",this);this.previousTime=s}},destroy:function(){n.prototype.destroy.call(this),this.tags=null,this.audio&&this.stopAndReleaseAudioTag()},updateMute:function(){this.audio&&(this.audio.muted=this.currentConfig.mute||this.manager.mute)},updateVolume:function(){this.audio&&(this.audio.volume=this.currentConfig.volume*this.manager.volume)},calculateRate:function(){n.prototype.calculateRate.call(this),this.audio&&(this.audio.playbackRate=this.totalRate)},mute:{get:function(){return this.currentConfig.mute},set:function(t){this.currentConfig.mute=t,this.manager.isLocked(this,"mute",t)||this.emit("mute",this,t)}},setMute:function(t){return this.mute=t,this},volume:{get:function(){return this.currentConfig.volume},set:function(t){this.currentConfig.volume=t,this.manager.isLocked(this,"volume",t)||this.emit("volume",this,t)}},setVolume:function(t){return this.volume=t,this},rate:{get:function(){return this.currentConfig.rate},set:function(t){this.currentConfig.rate=t,this.manager.isLocked(this,"rate",t)||(this.calculateRate(),this.emit("rate",this,t))}},setRate:function(t){return this.rate=t,this},detune:{get:function(){return this.currentConfig.detune},set:function(t){this.currentConfig.detune=t,this.manager.isLocked(this,"detune",t)||(this.calculateRate(),this.emit("detune",this,t))}},setDetune:function(t){return this.detune=t,this},seek:{get:function(){return this.isPlaying?this.audio.currentTime-(this.currentMarker?this.currentMarker.start:0):this.isPaused?this.currentConfig.seek:0},set:function(t){this.manager.isLocked(this,"seek",t)||this.startTime>0||(this.isPlaying||this.isPaused)&&(t=Math.min(Math.max(0,t),this.duration),this.isPlaying?(this.previousTime=t,this.audio.currentTime=t):this.isPaused&&(this.currentConfig.seek=t),this.emit("seek",this,t))}},setSeek:function(t){return this.seek=t,this},loop:{get:function(){return this.currentConfig.loop},set:function(t){this.currentConfig.loop=t,this.manager.isLocked(this,"loop",t)||(this.audio&&(this.audio.loop=t),this.emit("loop",this,t))}},setLoop:function(t){return this.loop=t,this}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(112),s=i(0),r=i(385),o=new s({Extends:n,initialize:function(t){this.override=!0,this.audioPlayDelay=.1,this.loopEndOffset=.05,this.onBlurPausedSounds=[],this.locked="ontouchstart"in window,this.lockedActionsQueue=this.locked?[]:null,this._mute=!1,this._volume=1,n.call(this,t)},add:function(t,e){var i=new r(this,t,e);return this.sounds.push(i),i},unlock:function(){this.locked=!1;var t=this;if(this.game.cache.audio.entries.each(function(e,i){for(var n=0;n<i.length;n++)if("true"===i[n].dataset.locked)return t.locked=!0,!1;return!0}),this.locked){var e=!1,i=function(){e=!0},n=function(){if(e)return void(e=!1);document.body.removeEventListener("touchmove",i),document.body.removeEventListener("touchend",n);var s=[];if(t.game.cache.audio.entries.each(function(t,e){for(var i=0;i<e.length;i++){var n=e[i];"true"===n.dataset.locked&&s.push(n)}return!0}),0!==s.length){var r=s[s.length-1];r.oncanplaythrough=function(){r.oncanplaythrough=null,s.forEach(function(t){t.dataset.locked="false"}),t.unlocked=!0},s.forEach(function(t){t.load()})}};this.once("unlocked",function(){for(this.forEachActiveSound(function(t){null===t.currentMarker&&0===t.duration&&(t.duration=t.tags[0].duration),t.totalDuration=t.tags[0].duration});this.lockedActionsQueue.length;){var t=this.lockedActionsQueue.shift();t.sound[t.prop].apply?t.sound[t.prop].apply(t.sound,t.value||[]):t.sound[t.prop]=t.value}},this),document.body.addEventListener("touchmove",i,!1),document.body.addEventListener("touchend",n,!1)}},onBlur:function(){this.forEachActiveSound(function(t){t.isPlaying&&(this.onBlurPausedSounds.push(t),t.onBlur())})},onFocus:function(){this.onBlurPausedSounds.forEach(function(t){t.onFocus()}),this.onBlurPausedSounds.length=0},destroy:function(){n.prototype.destroy.call(this),this.onBlurPausedSounds.length=0,this.onBlurPausedSounds=null},isLocked:function(t,e,i){return"true"===t.tags[0].dataset.locked&&(this.lockedActionsQueue.push({sound:t,prop:e,value:i}),!0)},setMute:function(t){return this.mute=t,this},mute:{get:function(){return this._mute},set:function(t){this._mute=t,this.forEachActiveSound(function(t){t.updateMute()}),this.emit("mute",this,t)}},setVolume:function(t){return this.volume=t,this},volume:{get:function(){return this._volume},set:function(t){this._volume=t,this.forEachActiveSound(function(t){t.updateVolume()}),this.emit("volume",this,t)}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(111),s=i(0),r=i(12),o=i(19),a=new s({Extends:r,initialize:function(t,e,i){void 0===i&&(i={}),r.call(this),this.manager=t,this.key=e,this.isPlaying=!1,this.isPaused=!1,this.totalRate=1,this.duration=0,this.totalDuration=0,this.config=o({mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0},i),this.currentConfig=this.config,this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.seek=0,this.loop=!1,this.markers={},this.currentMarker=null,this.pendingRemove=!1},addMarker:function(t){return!1},updateMarker:function(t){return!1},removeMarker:function(t){return null},play:function(t,e){return!1},pause:function(){return!1},resume:function(){return!1},stop:function(){return!1},destroy:function(){this.manager.remove(this),n.prototype.destroy.call(this)}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(112),s=i(0),r=i(12),o=i(387),a=i(3),h=new s({Extends:r,initialize:function(t){r.call(this),this.game=t,this.sounds=[],this.mute=!1,this.volume=1,this.rate=1,this.detune=0,this.pauseOnBlur=!0,this.locked=!1},add:function(t,e){var i=new o(this,t,e);return this.sounds.push(i),i},addAudioSprite:function(t,e){var i=this.add(t,e);return i.spritemap={},i},play:function(t,e){return!1},playAudioSprite:function(t,e,i){return!1},remove:function(t){return n.prototype.remove.call(this,t)},removeByKey:function(t){return n.prototype.removeByKey.call(this,t)},pauseAll:a,resumeAll:a,stopAll:a,update:a,setRate:a,setDetune:a,setMute:a,setVolume:a,forEachActiveSound:function(t,e){n.prototype.forEachActiveSound.call(this,t,e)},destroy:function(){n.prototype.destroy.call(this)}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(111),s=i(0),r=new s({Extends:n,initialize:function(t,e,i){if(void 0===i&&(i={}),this.audioBuffer=t.game.cache.audio.get(e),!this.audioBuffer)return void console.warn("Audio cache entry missing: "+e);this.source=null,this.loopSource=null,this.muteNode=t.context.createGain(),this.volumeNode=t.context.createGain(),this.playTime=0,this.startTime=0,this.loopTime=0,this.rateUpdates=[],this.hasEnded=!1,this.hasLooped=!1,this.muteNode.connect(this.volumeNode),this.volumeNode.connect(t.destination),this.duration=this.audioBuffer.duration,this.totalDuration=this.audioBuffer.duration,n.call(this,t,e,i)},play:function(t,e){return!!n.prototype.play.call(this,t,e)&&(this.stopAndRemoveBufferSource(),this.createAndStartBufferSource(),this.emit("play",this),!0)},pause:function(){return!(this.manager.context.currentTime<this.startTime)&&(!!n.prototype.pause.call(this)&&(this.currentConfig.seek=this.getCurrentTime(),this.stopAndRemoveBufferSource(),this.emit("pause",this),!0))},resume:function(){return!(this.manager.context.currentTime<this.startTime)&&(!!n.prototype.resume.call(this)&&(this.createAndStartBufferSource(),this.emit("resume",this),!0))},stop:function(){return!!n.prototype.stop.call(this)&&(this.stopAndRemoveBufferSource(),this.emit("stop",this),!0)},createAndStartBufferSource:function(){var t=this.currentConfig.seek,e=this.currentConfig.delay,i=this.manager.context.currentTime+e,n=(this.currentMarker?this.currentMarker.start:0)+t,s=this.duration-t;this.playTime=i-t,this.startTime=i,this.source=this.createBufferSource(),this.applyConfig(),this.source.start(Math.max(0,i),Math.max(0,n),Math.max(0,s)),this.resetConfig()},createAndStartLoopBufferSource:function(){var t=this.getLoopTime(),e=this.currentMarker?this.currentMarker.start:0,i=this.duration;this.loopTime=t,this.loopSource=this.createBufferSource(),this.loopSource.playbackRate.setValueAtTime(this.totalRate,0),this.loopSource.start(Math.max(0,t),Math.max(0,e),Math.max(0,i))},createBufferSource:function(){var t=this,e=this.manager.context.createBufferSource();return e.buffer=this.audioBuffer,e.connect(this.muteNode),e.onended=function(e){e.target===t.source&&(t.currentConfig.loop?t.hasLooped=!0:t.hasEnded=!0)},e},stopAndRemoveBufferSource:function(){this.source&&(this.source.stop(),this.source.disconnect(),this.source=null),this.playTime=0,this.startTime=0,this.stopAndRemoveLoopBufferSource()},stopAndRemoveLoopBufferSource:function(){this.loopSource&&(this.loopSource.stop(),this.loopSource.disconnect(),this.loopSource=null),this.loopTime=0},applyConfig:function(){this.rateUpdates.length=0,this.rateUpdates.push({time:0,rate:1}),n.prototype.applyConfig.call(this)},update:function(t,e){this.hasEnded?(this.hasEnded=!1,n.prototype.stop.call(this),this.stopAndRemoveBufferSource(),this.emit("ended",this)):this.hasLooped&&(this.hasLooped=!1,this.source=this.loopSource,this.loopSource=null,this.playTime=this.startTime=this.loopTime,this.rateUpdates.length=0,this.rateUpdates.push({time:0,rate:this.totalRate}),this.createAndStartLoopBufferSource(),this.emit("looped",this))},destroy:function(){n.prototype.destroy.call(this),this.audioBuffer=null,this.stopAndRemoveBufferSource(),this.muteNode.disconnect(),this.muteNode=null,this.volumeNode.disconnect(),this.volumeNode=null,this.rateUpdates.length=0,this.rateUpdates=null},calculateRate:function(){n.prototype.calculateRate.call(this);var t=this.manager.context.currentTime;this.source&&"number"==typeof this.totalRate&&this.source.playbackRate.setValueAtTime(this.totalRate,t),this.isPlaying&&(this.rateUpdates.push({time:Math.max(this.startTime,t)-this.playTime,rate:this.totalRate}),this.loopSource&&(this.stopAndRemoveLoopBufferSource(),this.createAndStartLoopBufferSource()))},getCurrentTime:function(){for(var t=0,e=0;e<this.rateUpdates.length;e++){var i=0;i=e<this.rateUpdates.length-1?this.rateUpdates[e+1].time:this.manager.context.currentTime-this.playTime,t+=(i-this.rateUpdates[e].time)*this.rateUpdates[e].rate}return t},getLoopTime:function(){for(var t=0,e=0;e<this.rateUpdates.length-1;e++)t+=(this.rateUpdates[e+1].time-this.rateUpdates[e].time)*this.rateUpdates[e].rate;var i=this.rateUpdates[this.rateUpdates.length-1];return this.playTime+i.time+(this.duration-t)/i.rate},rate:{get:function(){return this.currentConfig.rate},set:function(t){this.currentConfig.rate=t,this.calculateRate(),this.emit("rate",this,t)}},setRate:function(t){return this.rate=t,this},detune:{get:function(){return this.currentConfig.detune},set:function(t){this.currentConfig.detune=t,this.calculateRate(),this.emit("detune",this,t)}},setDetune:function(t){return this.detune=t,this},mute:{get:function(){return 0===this.muteNode.gain.value},set:function(t){this.currentConfig.mute=t,this.muteNode.gain.setValueAtTime(t?0:1,0),this.emit("mute",this,t)}},setMute:function(t){return this.mute=t,this},volume:{get:function(){return this.volumeNode.gain.value},set:function(t){this.currentConfig.volume=t,this.volumeNode.gain.setValueAtTime(t,0),this.emit("volume",this,t)}},setVolume:function(t){return this.volume=t,this},seek:{get:function(){return this.isPlaying?this.manager.context.currentTime<this.startTime?this.startTime-this.playTime:this.getCurrentTime():this.isPaused?this.currentConfig.seek:0},set:function(t){this.manager.context.currentTime<this.startTime||(this.isPlaying||this.isPaused)&&(t=Math.min(Math.max(0,t),this.duration),this.currentConfig.seek=t,this.isPlaying&&(this.stopAndRemoveBufferSource(),this.createAndStartBufferSource()),this.emit("seek",this,t))}},setSeek:function(t){return this.seek=t,this},loop:{get:function(){return this.currentConfig.loop},set:function(t){this.currentConfig.loop=t,this.isPlaying&&(this.stopAndRemoveLoopBufferSource(),t&&this.createAndStartLoopBufferSource()),this.emit("loop",this,t)}},setLoop:function(t){return this.loop=t,this}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(112),s=i(0),r=i(389),o=new s({Extends:n,initialize:function(t){this.context=this.createAudioContext(t),this.masterMuteNode=this.context.createGain(),this.masterVolumeNode=this.context.createGain(),this.masterMuteNode.connect(this.masterVolumeNode),this.masterVolumeNode.connect(this.context.destination),this.destination=this.masterMuteNode,this.locked="suspended"===this.context.state&&("ontouchstart"in window||"onclick"in window),n.call(this,t),this.locked&&this.unlock()},createAudioContext:function(t){var e=t.config.audio;return e&&e.context?(e.context.resume(),e.context):new AudioContext},add:function(t,e){var i=new r(this,t,e);return this.sounds.push(i),i},unlock:function(){var t=this,e=function(){t.context.resume().then(function(){document.body.removeEventListener("touchstart",e),document.body.removeEventListener("touchend",e),document.body.removeEventListener("click",e),t.unlocked=!0})};document.body.addEventListener("touchstart",e,!1),document.body.addEventListener("touchend",e,!1),document.body.addEventListener("click",e,!1)},onBlur:function(){this.context.suspend()},onFocus:function(){this.context.resume()},destroy:function(){if(this.destination=null,this.masterVolumeNode.disconnect(),this.masterVolumeNode=null,this.masterMuteNode.disconnect(),this.masterMuteNode=null,this.game.config.audio&&this.game.config.audio.context)this.context.suspend();else{var t=this;this.context.close().then(function(){t.context=null})}n.prototype.destroy.call(this)},setMute:function(t){return this.mute=t,this},mute:{get:function(){return 0===this.masterMuteNode.gain.value},set:function(t){this.masterMuteNode.gain.setValueAtTime(t?0:1,0),this.emit("mute",this,t)}},setVolume:function(t){return this.volume=t,this},volume:{get:function(){return this.masterVolumeNode.gain.value},set:function(t){this.masterVolumeNode.gain.setValueAtTime(t,0),this.emit("volume",this,t)}}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(){this._pending=[],this._active=[],this._destroy=[],this._toProcess=0},add:function(t){return this._pending.push(t),this._toProcess++,this},remove:function(t){return this._destroy.push(t),this._toProcess++,this},update:function(){if(0===this._toProcess)return this._active;var t,e,i=this._destroy,n=this._active;for(t=0;t<i.length;t++){e=i[t];var s=n.indexOf(e);-1!==s&&n.splice(s,1)}for(i.length=0,i=this._pending,t=0;t<i.length;t++)e=i[t],this._active.push(e);return i.length=0,this._toProcess=0,this._active},getActive:function(){return this._active},destroy:function(){this._pending=[],this._active=[],this._destroy=[]}});t.exports=s},function(t,e,i){function n(t){var e=[".left",".top",".right",".bottom"];if(!(this instanceof n))return new n(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()}function s(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function r(t,e){o(t,0,t.children.length,e,t)}function o(t,e,i,n,s){s||(s=g(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(var r,o=e;o<i;o++)r=t.children[o],a(s,t.leaf?n(r):r);return s}function a(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function h(t,e){return t.minX-e.minX}function l(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function f(t,e){var i=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function v(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function y(t,e,i,n,s){for(var r,o=[e,i];o.length;)i=o.pop(),e=o.pop(),i-e<=n||(r=e+Math.ceil((i-e)/n/2)*n,m(t,r,e,i,s),o.push(e,r,r,i))}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var m=i(417);n.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],n=this.toBBox;if(!v(t,e))return i;for(var s,r,o,a,h=[];e;){for(s=0,r=e.children.length;s<r;s++)o=e.children[s],a=e.leaf?n(o):o,v(t,a)&&(e.leaf?i.push(o):p(t,a)?this._all(o,i):h.push(o));e=h.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!v(t,e))return!1;for(var n,s,r,o,a=[];e;){for(n=0,s=e.children.length;n<s;n++)if(r=e.children[n],o=e.leaf?i(r):r,v(t,o)){if(e.leaf||p(t,o))return!0;a.push(r)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var s=this.data;this.data=n,n=s}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=g([]),this},remove:function(t,e){if(!t)return this;for(var i,n,r,o,a=this.data,h=this.toBBox(t),l=[],u=[];a||l.length;){if(a||(a=l.pop(),n=l[l.length-1],i=u.pop(),o=!0),a.leaf&&-1!==(r=s(t,a.children,e)))return a.children.splice(r,1),l.push(a),this._condense(l),this;o||a.leaf||!p(a,h)?n?(i++,a=n.children[i],o=!1):a=null:(l.push(a),u.push(i),i=0,n=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:h,compareMinY:l,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,n){var s,o=i-e+1,a=this._maxEntries;if(o<=a)return s=g(t.slice(e,i+1)),r(s,this.toBBox),s;n||(n=Math.ceil(Math.log(o)/Math.log(a)),a=Math.ceil(o/Math.pow(a,n-1))),s=g([]),s.leaf=!1,s.height=n;var h,l,u,c,d=Math.ceil(o/a),f=d*Math.ceil(Math.sqrt(a));for(y(t,e,i,f,this.compareMinX),h=e;h<=i;h+=f)for(u=Math.min(h+f-1,i),y(t,h,u,d,this.compareMinY),l=h;l<=u;l+=d)c=Math.min(l+d-1,u),s.children.push(this._build(t,l,c,n-1));return r(s,this.toBBox),s},_chooseSubtree:function(t,e,i,n){for(var s,r,o,a,h,l,c,f;;){if(n.push(e),e.leaf||n.length-1===i)break;for(c=f=1/0,s=0,r=e.children.length;s<r;s++)o=e.children[s],h=u(o),l=d(t,o)-h,l<f?(f=l,c=h<c?h:c,a=o):l===f&&h<c&&(c=h,a=o);e=a||e.children[0]}return e},_insert:function(t,e,i){var n=this.toBBox,s=i?t:n(t),r=[],o=this._chooseSubtree(s,this.data,e,r);for(o.children.push(t),a(o,s);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(s,r,e)},_split:function(t,e){var i=t[e],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);var o=this._chooseSplitIndex(i,s,n),a=g(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,r(i,this.toBBox),r(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)},_splitRoot:function(t,e){this.data=g([t,e]),this.data.height=t.height+1,this.data.leaf=!1,r(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var n,s,r,a,h,l,c,d;for(l=c=1/0,n=e;n<=i-e;n++)s=o(t,0,n,this.toBBox),r=o(t,n,i,this.toBBox),a=f(s,r),h=u(s)+u(r),a<l?(l=a,d=n,c=h<c?h:c):a===l&&h<c&&(c=h,d=n);return d},_chooseSplitAxis:function(t,e,i){var n=t.leaf?this.compareMinX:h,s=t.leaf?this.compareMinY:l;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,s)&&t.children.sort(n)},_allDistMargin:function(t,e,i,n){t.children.sort(n);var s,r,h=this.toBBox,l=o(t,0,e,h),u=o(t,i-e,i,h),d=c(l)+c(u);for(s=e;s<i-e;s++)r=t.children[s],a(l,t.leaf?h(r):r),d+=c(l);for(s=i-e-1;s>=e;s--)r=t.children[s],a(u,t.leaf?h(r):r),d+=c(u);return d},_adjustParentBBoxes:function(t,e,i){for(var n=i;n>=0;n--)a(e[n],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(e=t[i-1].children,e.splice(e.indexOf(t[i]),1)):this.clear():r(t[i],this.toBBox)},compareMinX:function(t,e){return t.left-e.left},compareMinY:function(t,e){return t.top-e.top},toBBox:function(t){return{minX:t.left,minY:t.top,maxX:t.right,maxY:t.bottom}}},t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(960),r=i(0),o=i(46),a=i(23),h=i(12),l=i(214),u=i(5),c=i(395),d=i(188),f=new r({Extends:h,initialize:function(t){h.call(this),this.game=t,this.name="TextureManager",this.list={},this._tempCanvas=n.create2D(this,1,1),this._tempContext=this._tempCanvas.getContext("2d"),this._pending=0,t.events.once("boot",this.boot,this)},boot:function(){this._pending=2,this.on("onload",this.updatePending,this),this.on("onerror",this.updatePending,this),this.addBase64("__DEFAULT",this.game.config.defaultImage),this.addBase64("__MISSING",this.game.config.missingImage),this.game.events.once("destroy",this.destroy,this)},updatePending:function(){0===--this._pending&&(this.off("onload"),this.off("onerror"),this.game.events.emit("ready"))},checkKey:function(t){return!this.exists(t)||(console.error("Texture key already in use: "+t),!1)},remove:function(t){if("string"==typeof t){if(!this.exists(t))return console.warn("No texture found matching key: "+t),this;t=this.get(t)}return this.list.hasOwnProperty(t.key)&&(delete this.list[t.key],t.destroy(),this.emit("removetexture",t.key)),this},addBase64:function(t,e){if(this.checkKey(t)){var i=this,n=new Image;n.onerror=function(){i.emit("onerror",t)},n.onload=function(){var e=i.create(t,n);c.Image(e,0),i.emit("addtexture",t,e),i.emit("onload",t,e)},n.src=e}},addImage:function(t,e,i){var n=null;return this.checkKey(t)&&(n=this.create(t,e),c.Image(n,0),i&&n.setDataSource(i),this.emit("addtexture",t,n)),n},generate:function(t,e){if(this.checkKey(t)){var i=n.create(this,1,1);return e.canvas=i,l(e),this.addCanvas(t,i)}return null},createCanvas:function(t,e,i){if(void 0===e&&(e=256),void 0===i&&(i=256),this.checkKey(t)){var s=n.create(this,e,i,a.CANVAS,!0);return this.addCanvas(t,s)}return null},addCanvas:function(t,e){var i=null;return this.checkKey(t)&&(i=new s(this,t,e,e.width,e.height),this.list[t]=i,this.emit("addtexture",t,i)),i},addAtlas:function(t,e,i,n){return Array.isArray(i.textures)||Array.isArray(i.frames)?this.addAtlasJSONArray(t,e,i,n):this.addAtlasJSONHash(t,e,i,n)},addAtlasJSONArray:function(t,e,i,n){var s=null;if(this.checkKey(t)){if(s=this.create(t,e),Array.isArray(i))for(var r=1===i.length,o=0;o<s.source.length;o++){var a=r?i[0]:i[o];c.JSONArray(s,o,a)}else c.JSONArray(s,0,i);n&&s.setDataSource(n),this.emit("addtexture",t,s)}return s},addAtlasJSONHash:function(t,e,i,n){var s=null;if(this.checkKey(t)){if(s=this.create(t,e),Array.isArray(i))for(var r=0;r<i.length;r++)c.JSONHash(s,r,i[r]);else c.JSONHash(s,0,i);n&&s.setDataSource(n),this.emit("addtexture",t,s)}return s},addAtlasXML:function(t,e,i,n){var s=null;return this.checkKey(t)&&(s=this.create(t,e),c.AtlasXML(s,0,i),n&&s.setDataSource(n),this.emit("addtexture",t,s)),s},addUnityAtlas:function(t,e,i,n){var s=null;return this.checkKey(t)&&(s=this.create(t,e),c.UnityYAML(s,0,i),n&&s.setDataSource(n),this.emit("addtexture",t,s)),s},addSpriteSheet:function(t,e,i){var n=null;if(this.checkKey(t)){n=this.create(t,e);var s=n.source[0].width,r=n.source[0].height;c.SpriteSheet(n,0,0,0,s,r,i),this.emit("addtexture",t,n)}return n},addSpriteSheetFromAtlas:function(t,e){if(!this.checkKey(t))return null;var i=u(e,"atlas",null),n=u(e,"frame",null);if(i&&n){var s=this.get(i),r=s.get(n);if(r){var o=this.create(t,r.source.image);return r.trimmed?c.SpriteSheetFromAtlas(o,r,e):c.SpriteSheet(o,0,r.cutX,r.cutY,r.cutWidth,r.cutHeight,e),this.emit("addtexture",t,o),o}}},create:function(t,e,i,n){var s=null;return this.checkKey(t)&&(s=new d(this,t,e,i,n),this.list[t]=s),s},exists:function(t){return this.list.hasOwnProperty(t)},get:function(t){return void 0===t&&(t="__DEFAULT"),this.list[t]?this.list[t]:this.list.__MISSING},cloneFrame:function(t,e){if(this.list[t])return this.list[t].get(e).clone()},getFrame:function(t,e){if(this.list[t])return this.list[t].get(e)},getTextureKeys:function(){var t=[];for(var e in this.list)"__DEFAULT"!==e&&"__MISSING"!==e&&t.push(e);return t},getPixel:function(t,e,i,n){var s=this.getFrame(i,n);if(s){var r=s.source.image;if(t>=0&&t<=r.width&&e>=0&&e<=r.height){t+=s.cutX,e+=s.cutY;var a=this._tempContext;a.clearRect(0,0,1,1),a.drawImage(r,t,e,1,1,0,0,1,1);var h=a.getImageData(0,0,1,1);return new o(h.data[0],h.data[1],h.data[2],h.data[3])}}return null},setTexture:function(t,e,i){return this.list[e]&&(t.texture=this.list[e],t.frame=t.texture.get(i)),t},each:function(t,e){for(var i=[null],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[0]=this.list[s],t.apply(e,i)},destroy:function(){for(var t in this.list)this.list[t].destroy();this.list={},this.game=null,n.remove(this._tempCanvas)}});t.exports=f},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=i(0),r=i(106),o=i(88),a=new s({initialize:function(t,e,i,n){var s=t.manager.game;this.renderer=s.renderer,this.texture=t,this.image=e,this.compressionAlgorithm=null,this.resolution=1,this.width=i||e.naturalWidth||e.width||0,this.height=n||e.naturalHeight||e.height||0,this.scaleMode=o.DEFAULT,this.isCanvas=e instanceof HTMLCanvasElement,this.isPowerOf2=r(this.width,this.height),this.glTexture=null,this.init(s)},init:function(t){this.renderer.gl&&(this.isCanvas?this.glTexture=this.renderer.canvasToTexture(this.image):this.glTexture=this.renderer.createTextureFromSource(this.image,this.width,this.height,this.scaleMode)),t.config.pixelArt&&this.setFilter(1)},setFilter:function(t){this.renderer.gl&&this.renderer.setTextureFilter(this.glTexture,t)},update:function(){this.renderer.gl&&this.isCanvas&&this.renderer.canvasToTexture(this.image,this.glTexture)},destroy:function(){this.glTexture&&this.renderer.deleteTexture(this.glTexture),this.isCanvas&&n.remove(this.image),this.renderer=null,this.texture=null,this.image=null}});t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={AtlasXML:i(963),Canvas:i(964),Image:i(965),JSONArray:i(966),JSONHash:i(967),SpriteSheet:i(968),SpriteSheetFromAtlas:i(969),UnityYAML:i(970)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s,r,o){(void 0===i||i<=0)&&(i=32),(void 0===n||n<=0)&&(n=32),void 0===s&&(s=0),void 0===r&&(r=0),this.name=t,this.firstgid=0|e,this.imageWidth=0|i,this.imageHeight=0|n,this.imageMargin=0|s,this.imageSpacing=0|r,this.properties=o||{},this.images=[],this.total=0},containsImageIndex:function(t){return t>=this.firstgid&&t<this.firstgid+this.total},addImage:function(t,e){return this.images.push({gid:t,image:e}),this.total++,this}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(48),r=i(401),o=i(19),a=i(27),h=i(91),l=i(318),u=i(409),c=i(58),d=i(118),f=i(114),p=new n({initialize:function(t,e){this.scene=t,this.tileWidth=e.tileWidth,this.tileHeight=e.tileHeight,this.width=e.width,this.height=e.height,this.orientation=e.orientation,this.format=e.format,this.version=e.version,this.properties=e.properties,this.widthInPixels=e.widthInPixels,this.heightInPixels=e.heightInPixels,this.imageCollections=e.imageCollections,this.images=e.images,this.layers=e.layers,this.tilesets=e.tilesets,this.objects=e.objects,this.currentLayerIndex=0},addTilesetImage:function(t,e,i,n,s,r,o){if(void 0===t)return null;if(void 0!==e&&null!==e||(e=t),!this.scene.sys.textures.exists(e))return console.warn('Invalid image key given for tileset: "'+e+'"'),null;var h=this.scene.sys.textures.get(e),l=this.getTilesetIndex(t);if(null===l&&this.format===a.TILED_JSON)return console.warn('No data found in the JSON tilemap from Tiled matching the tileset name: "'+t+'"'),null;if(this.tilesets[l])return this.tilesets[l].setTileSize(i,n),this.tilesets[l].setSpacing(s,r),this.tilesets[l].setImage(h),this.tilesets[l];void 0===i&&(i=this.tileWidth),void 0===n&&(n=this.tileHeight),void 0===s&&(s=0),void 0===r&&(r=0),void 0===o&&(o=0);var u=new f(t,o,i,n,s,r);return u.setImage(h),this.tilesets.push(u),u},convertLayerToStatic:function(t){if(null===(t=this.getLayer(t)))return null;var e=t.tilemapLayer;if(!(e&&e instanceof r))return null;var i=new u(e.scene,e.tilemap,e.layerIndex,e.tileset,e.x,e.y);return this.scene.sys.displayList.add(i),e.destroy(),i},copy:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),this._isStaticCall(a,"copy")?this:(null!==a&&d.Copy(t,e,i,n,s,r,o,a),this)},createBlankDynamicLayer:function(t,e,i,n,s,o,a,l){if(void 0===a&&(a=e.tileWidth),void 0===l&&(l=e.tileHeight),void 0===s&&(s=this.width),void 0===o&&(o=this.height),void 0===i&&(i=0),void 0===n&&(n=0),null!==this.getLayerIndex(t))return console.warn("Cannot create blank layer: layer with matching name already exists "+t),null;for(var u,d=new h({name:t,tileWidth:a,tileHeight:l,width:s,height:o}),f=0;f<o;f++){u=[];for(var p=0;p<s;p++)u.push(new c(d,-1,p,f,a,l,this.tileWidth,this.tileHeight));d.data.push(u)}this.layers.push(d),this.currentLayerIndex=this.layers.length-1;var v=new r(this.scene,this,this.currentLayerIndex,e,i,n);return this.scene.sys.displayList.add(v),v},createDynamicLayer:function(t,e,i,n){var s=this.getLayerIndex(t);if(null===s)return console.warn("Cannot create tilemap layer, invalid layer ID given: "+t),null;var o=this.layers[s];if(o.tilemapLayer)return console.warn("Cannot create dynamic tilemap layer since a static or dynamic tilemap layer exists for layer ID:"+t),null;this.currentLayerIndex=s,o.tileWidth===e.tileWidth&&o.tileHeight===e.tileHeight||this.setLayerTileSize(e.tileWidth,e.tileHeight,s),void 0===i&&this.layers[s].x&&(i=this.layers[s].x),void 0===n&&this.layers[s].y&&(n=this.layers[s].y);var a=new r(this.scene,this,s,e,i,n);return this.scene.sys.displayList.add(a),a},createFromObjects:function(t,e,i,n){void 0===i&&(i={}),void 0===n&&(n=this.scene);var r=this.getObjectLayer(t);if(!r)return void console.warn("Cannot create from object. Invalid objectgroup name given: "+t);for(var a=r.objects,h=[],u=0;u<a.length;u++){var c=!1,d=a[u];if((void 0!==d.gid&&"number"==typeof e&&d.gid===e||void 0!==d.id&&"number"==typeof e&&d.id===e||void 0!==d.name&&"string"==typeof e&&d.name===e)&&(c=!0),c){var f=o({},i,d.properties);f.x=d.x,f.y=d.y;var p=this.scene.make.sprite(f);p.name=d.name,d.width&&(p.displayWidth=d.width),d.height&&(p.displayHeight=d.height);var v={x:p.originX*p.displayWidth,y:(p.originY-1)*p.displayHeight};if(d.rotation){var g=s(d.rotation);l(v,g),p.rotation=g}p.x+=v.x,p.y+=v.y,void 0===d.flippedHorizontal&&void 0===d.flippedVertical||p.setFlip(d.flippedHorizontal,d.flippedVertical),d.visible||(p.visible=!1),h.push(p)}}return h},createFromTiles:function(t,e,i,n,s,r){return r=this.getLayer(r),null===r?null:d.CreateFromTiles(t,e,i,n,s,r)},createStaticLayer:function(t,e,i,n){var s=this.getLayerIndex(t);if(null===s)return console.warn("Cannot create tilemap layer, invalid layer ID given: "+t),null;var r=this.layers[s];if(r.tilemapLayer)return console.warn("Cannot create static tilemap layer since a static or dynamic tilemap layer exists for layer ID:"+t),null;this.currentLayerIndex=s,r.tileWidth===e.tileWidth&&r.tileHeight===e.tileHeight||this.setLayerTileSize(e.tileWidth,e.tileHeight,s),void 0===i&&this.layers[s].x&&(i=this.layers[s].x),void 0===n&&this.layers[s].y&&(n=this.layers[s].y);var o=new u(this.scene,this,s,e,i,n);return this.scene.sys.displayList.add(o),o},destroy:function(){this.removeAllLayers(),this.tilesets.length=0,this.objects.length=0,this.scene=void 0},fill:function(t,e,i,n,s,r,o){return o=this.getLayer(o),this._isStaticCall(o,"fill")?this:(null!==o&&d.Fill(t,e,i,n,s,r,o),this)},filterObjects:function(t,e,i){if("string"==typeof t){var n=t;if(!(t=this.getObjectLayer(t)))return console.warn("No object layer found with the name: "+n),null}return t.objects.filter(e,i)},filterTiles:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),null===a?null:d.FilterTiles(t,e,i,n,s,r,o,a)},findByIndex:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.FindByIndex(t,e,i,n)},findObject:function(t,e,i){if("string"==typeof t){var n=t;if(!(t=this.getObjectLayer(t)))return console.warn("No object layer found with the name: "+n),null}return t.objects.find(e,i)||null},findTile:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),null===a?null:d.FindTile(t,e,i,n,s,r,o,a)},forEachTile:function(t,e,i,n,s,r,o,a){return a=this.getLayer(a),null!==a&&d.ForEachTile(t,e,i,n,s,r,o,a),this},getImageIndex:function(t){return this.getIndex(this.images,t)},getIndex:function(t,e){for(var i=0;i<t.length;i++)if(t[i].name===e)return i;return null},getLayer:function(t){var e=this.getLayerIndex(t);return null!==e?this.layers[e]:null},getObjectLayer:function(t){var e=this.getIndex(this.objects,t);return null!==e?this.objects[e]:null},getLayerIndex:function(t){return void 0===t?this.currentLayerIndex:"string"==typeof t?this.getLayerIndexByName(t):"number"==typeof t&&t<this.layers.length?t:t instanceof u||t instanceof r?t.layerIndex:null},getLayerIndexByName:function(t){return this.getIndex(this.layers,t)},getTileAt:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.GetTileAt(t,e,i,n)},getTileAtWorldXY:function(t,e,i,n,s){return s=this.getLayer(s),null===s?null:d.GetTileAtWorldXY(t,e,i,n,s)},getTilesWithin:function(t,e,i,n,s,r){return r=this.getLayer(r),null===r?null:d.GetTilesWithin(t,e,i,n,s,r)},getTilesWithinShape:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.GetTilesWithinShape(t,e,i,n)},getTilesWithinWorldXY:function(t,e,i,n,s,r,o){return o=this.getLayer(o),null===o?null:d.GetTilesWithinWorldXY(t,e,i,n,s,r,o)},getTilesetIndex:function(t){return this.getIndex(this.tilesets,t)},hasTileAt:function(t,e,i){return i=this.getLayer(i),null===i?null:d.HasTileAt(t,e,i)},hasTileAtWorldXY:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.HasTileAtWorldXY(t,e,i,n)},layer:{get:function(){return this.layers[this.currentLayerIndex]},set:function(t){this.setLayer(t)}},putTileAt:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"putTileAt")?null:null===s?null:d.PutTileAt(t,e,i,n,s)},putTileAtWorldXY:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"putTileAtWorldXY")?null:null===r?null:d.PutTileAtWorldXY(t,e,i,n,s,r)},putTilesAt:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"putTilesAt")?this:(null!==s&&d.PutTilesAt(t,e,i,n,s),this)},randomize:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"randomize")?this:(null!==r&&d.Randomize(t,e,i,n,s,r),this)},calculateFacesAt:function(t,e,i){return null===(i=this.getLayer(i))?this:(d.CalculateFacesAt(t,e,i),this)},calculateFacesWithin:function(t,e,i,n,s){return null===(s=this.getLayer(s))?this:(d.CalculateFacesWithin(t,e,i,n,s),this)},removeAllLayers:function(){for(var t=0;t<this.layers.length;t++)this.layers[t].tilemapLayer&&this.layers[t].tilemapLayer.destroy();return this.layers.length=0,this.currentLayerIndex=0,this},removeTileAt:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"removeTileAt")?null:null===s?null:d.RemoveTileAt(t,e,i,n,s)},removeTileAtWorldXY:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"removeTileAtWorldXY")?null:null===r?null:d.RemoveTileAtWorldXY(t,e,i,n,s,r)},renderDebug:function(t,e,i){return null===(i=this.getLayer(i))?this:(d.RenderDebug(t,e,i),this)},replaceByIndex:function(t,e,i,n,s,r,o){return o=this.getLayer(o),this._isStaticCall(o,"replaceByIndex")?this:(null!==o&&d.ReplaceByIndex(t,e,i,n,s,r,o),this)},setCollision:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetCollision(t,e,i,n),this)},setCollisionBetween:function(t,e,i,n,s){return null===(s=this.getLayer(s))?this:(d.SetCollisionBetween(t,e,i,n,s),this)},setCollisionByProperty:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetCollisionByProperty(t,e,i,n),this)},setCollisionByExclusion:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetCollisionByExclusion(t,e,i,n),this)},setCollisionFromCollisionGroup:function(t,e,i){return null===(i=this.getLayer(i))?this:(d.SetCollisionFromCollisionGroup(t,e,i),this)},setTileIndexCallback:function(t,e,i,n){return null===(n=this.getLayer(n))?this:(d.SetTileIndexCallback(t,e,i,n),this)},setTileLocationCallback:function(t,e,i,n,s,r,o){return null===(o=this.getLayer(o))?this:(d.SetTileLocationCallback(t,e,i,n,s,r,o),this)},setLayer:function(t){var e=this.getLayerIndex(t);return null!==e&&(this.currentLayerIndex=e),this},setBaseTileSize:function(t,e){this.tileWidth=t,this.tileHeight=e,this.widthInPixels=this.width*t,this.heightInPixels=this.height*e;for(var i=0;i<this.layers.length;i++){this.layers[i].baseWidth=t,this.layers[i].baseHeight=e;for(var n=this.layers[i].data,s=this.layers[i].width,r=this.layers[i].height,o=0;o<r;++o)for(var a=0;a<s;++a){var h=n[o][a];null!==h&&h.setSize(void 0,void 0,t,e)}}return this},setLayerTileSize:function(t,e,i){if(null===(i=this.getLayer(i)))return this;i.tileWidth=t,i.tileHeight=e;for(var n=i.data,s=i.width,r=i.height,o=0;o<r;++o)for(var a=0;a<s;++a){var h=n[o][a];null!==h&&h.setSize(t,e)}return this},shuffle:function(t,e,i,n,s){return s=this.getLayer(s),this._isStaticCall(s,"shuffle")?this:(null!==s&&d.Shuffle(t,e,i,n,s),this)},swapByIndex:function(t,e,i,n,s,r,o){return o=this.getLayer(o),this._isStaticCall(o,"swapByIndex")?this:(null!==o&&d.SwapByIndex(t,e,i,n,s,r,o),this)},tileToWorldX:function(t,e,i){return i=this.getLayer(i),null===i?null:d.TileToWorldX(t,e,i)},tileToWorldY:function(t,e,i){return i=this.getLayer(i),null===i?null:d.TileToWorldY(t,e,i)},tileToWorldXY:function(t,e,i,n,s){return s=this.getLayer(s),null===s?null:d.TileToWorldXY(t,e,i,n,s)},weightedRandomize:function(t,e,i,n,s,r){return r=this.getLayer(r),this._isStaticCall(r,"weightedRandomize")?this:(null!==r&&d.WeightedRandomize(t,e,i,n,s,r),this)},worldToTileX:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.WorldToTileX(t,e,i,n)},worldToTileY:function(t,e,i,n){return n=this.getLayer(n),null===n?null:d.WorldToTileY(t,e,i,n)},worldToTileXY:function(t,e,i,n,s,r){return r=this.getLayer(r),null===r?null:d.WorldToTileXY(t,e,i,n,s,r)},_isStaticCall:function(t,e){return t.tilemapLayer instanceof u&&(console.warn(e+": You cannot change the tiles in a static tilemap layer"),!0)}});t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(90),s=function(t,e,i){if(n(t,e,i)){var s=i.data[e][t];return null!==s&&s.index>-1}return!1};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(58),s=i(90),r=i(190),o=function(t,e,i,o,a){if(void 0===i&&(i=!1),void 0===o&&(o=!0),!s(t,e,a))return null;var h=a.data[e][t];return null===h?null:(a.data[e][t]=i?null:new n(a,-1,t,e,h.width,h.height),o&&h&&h.collides&&r(t,e,a),h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o,a){for(var h=n(i,s,r,o,null,a),l=0;l<h.length;l++)h[l]&&h[l].index===t&&(h[l].index=e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(1003),o=i(2),a=i(118),h=new n({Extends:o,Mixins:[s.Alpha,s.BlendMode,s.ComputedSize,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.Transform,s.Visible,s.ScrollFactor,r],initialize:function(t,e,i,n,s,r){o.call(this,t,"DynamicTilemapLayer"),this.isTilemap=!0,this.tilemap=e,this.layerIndex=i,this.layer=e.layers[i],this.layer.tilemapLayer=this,this.tileset=n,this.culledTiles=[],this.setAlpha(this.layer.alpha),this.setPosition(s,r),this.setOrigin(),this.setSize(this.layer.tileWidth*this.layer.width,this.layer.tileHeight*this.layer.height),this.initPipeline("TextureTintPipeline")},calculateFacesAt:function(t,e){return a.CalculateFacesAt(t,e,this.layer),this},calculateFacesWithin:function(t,e,i,n){return a.CalculateFacesWithin(t,e,i,n,this.layer),this},createFromTiles:function(t,e,i,n,s){return a.CreateFromTiles(t,e,i,n,s,this.layer)},cull:function(t){return a.CullTiles(this.layer,t,this.culledTiles)},copy:function(t,e,i,n,s,r,o){return a.Copy(t,e,i,n,s,r,o,this.layer),this},destroy:function(){this.layer.tilemapLayer===this&&(this.layer.tilemapLayer=void 0),this.tilemap=void 0,this.layer=void 0,this.tileset=void 0,this.culledTiles.length=0,o.prototype.destroy.call(this)},fill:function(t,e,i,n,s,r){return a.Fill(t,e,i,n,s,r,this.layer),this},filterTiles:function(t,e,i,n,s,r,o){return a.FilterTiles(t,e,i,n,s,r,o,this.layer)},findByIndex:function(t,e,i){return a.FindByIndex(t,e,i,this.layer)},findTile:function(t,e,i,n,s,r,o){return a.FindTile(t,e,i,n,s,r,o,this.layer)},forEachTile:function(t,e,i,n,s,r,o){return a.ForEachTile(t,e,i,n,s,r,o,this.layer),this},getTileAt:function(t,e,i){return a.GetTileAt(t,e,i,this.layer)},getTileAtWorldXY:function(t,e,i,n){return a.GetTileAtWorldXY(t,e,i,n,this.layer)},getTilesWithin:function(t,e,i,n,s){return a.GetTilesWithin(t,e,i,n,s,this.layer)},getTilesWithinShape:function(t,e,i){return a.GetTilesWithinShape(t,e,i,this.layer)},getTilesWithinWorldXY:function(t,e,i,n,s,r){return a.GetTilesWithinWorldXY(t,e,i,n,s,r,this.layer)},hasTileAt:function(t,e){return a.HasTileAt(t,e,this.layer)},hasTileAtWorldXY:function(t,e,i){return a.HasTileAtWorldXY(t,e,i,this.layer)},putTileAt:function(t,e,i,n){return a.PutTileAt(t,e,i,n,this.layer)},putTileAtWorldXY:function(t,e,i,n,s){return a.PutTileAtWorldXY(t,e,i,n,s,this.layer)},putTilesAt:function(t,e,i,n){return a.PutTilesAt(t,e,i,n,this.layer),this},randomize:function(t,e,i,n,s){return a.Randomize(t,e,i,n,s,this.layer),this},removeTileAt:function(t,e,i,n){return a.RemoveTileAt(t,e,i,n,this.layer)},removeTileAtWorldXY:function(t,e,i,n,s){return a.RemoveTileAtWorldXY(t,e,i,n,s,this.layer)},renderDebug:function(t,e){return a.RenderDebug(t,e,this.layer),this},replaceByIndex:function(t,e,i,n,s,r){return a.ReplaceByIndex(t,e,i,n,s,r,this.layer),this},setCollision:function(t,e,i){return a.SetCollision(t,e,i,this.layer),this},setCollisionBetween:function(t,e,i,n){return a.SetCollisionBetween(t,e,i,n,this.layer),this},setCollisionByProperty:function(t,e,i){return a.SetCollisionByProperty(t,e,i,this.layer),this},setCollisionByExclusion:function(t,e,i){return a.SetCollisionByExclusion(t,e,i,this.layer),this},setCollisionFromCollisionGroup:function(t,e){return a.SetCollisionFromCollisionGroup(t,e,this.layer),this},setTileIndexCallback:function(t,e,i){return a.SetTileIndexCallback(t,e,i,this.layer),this},setTileLocationCallback:function(t,e,i,n,s,r){return a.SetTileLocationCallback(t,e,i,n,s,r,this.layer),this},shuffle:function(t,e,i,n){return a.Shuffle(t,e,i,n,this.layer),this},swapByIndex:function(t,e,i,n,s,r){return a.SwapByIndex(t,e,i,n,s,r,this.layer),this},tileToWorldX:function(t,e){return a.TileToWorldX(t,e,this.layer)},tileToWorldY:function(t,e){return a.TileToWorldY(t,e,this.layer)},tileToWorldXY:function(t,e,i,n){return a.TileToWorldXY(t,e,i,n,this.layer)},weightedRandomize:function(t,e,i,n,s){return a.WeightedRandomize(t,e,i,n,s,this.layer),this},worldToTileX:function(t,e,i){return a.WorldToTileX(t,e,i,this.layer)},worldToTileY:function(t,e,i){return a.WorldToTileY(t,e,i,this.layer)},worldToTileXY:function(t,e,i,n,s){return a.WorldToTileXY(t,e,i,n,s,this.layer)}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){void 0===t&&(t={}),this.name=s(t,"name","object layer"),this.opacity=s(t,"opacity",1),this.properties=s(t,"properties",{}),this.propertyTypes=s(t,"propertytypes",{}),this.type=s(t,"type","objectgroup"),this.visible=s(t,"visible",!0),this.objects=s(t,"objects",[])}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(27),s=i(193),r=i(404),o=i(407),a=i(405),h=function(t,e,i,h,l,u){var c;switch(e){case n.ARRAY_2D:c=s(t,i,h,l,u);break;case n.CSV:c=r(t,i,h,l,u);break;case n.TILED_JSON:c=o(t,i,u);break;case n.WELTMEISTER:c=a(t,i,u);break;default:console.warn("Unrecognized tilemap data format: "+e),c=null}return c};t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(27),s=i(193),r=function(t,e,i,r,o){var a=e.trim().split("\n").map(function(t){return t.split(",")}),h=s(t,a,i,r,o);return h.format=n.CSV,h};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(27),s=i(92),r=i(1006),o=i(1007),a=function(t,e,i){if(0===e.layer.length)return console.warn("No layers found in the Weltmeister map: "+t),null;for(var a=0,h=0,l=0;l<e.layer.length;l++)e.layer[l].width>a&&(a=e.layer[l].width),e.layer[l].height>h&&(h=e.layer[l].height);var u=new s({width:a,height:h,name:t,tileWidth:e.layer[0].tilesize,tileHeight:e.layer[0].tilesize,format:n.WELTMEISTER});return u.layers=r(e,i),u.tilesets=o(e),u};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=Boolean(2147483648&t),i=Boolean(1073741824&t),n=Boolean(536870912&t);t&=536870911;var s=0,r=!1;return e&&i&&n?(s=Math.PI/2,r=!0):e&&i&&!n?(s=Math.PI,r=!1):e&&!i&&n?(s=Math.PI/2,r=!1):!e||i||n?!e&&i&&n?(s=3*Math.PI/2,r=!1):e||!i||n?e||i||!n?e||i||n||(s=0,r=!1):(s=3*Math.PI/2,r=!0):(s=Math.PI,r=!0):(s=0,r=!0),{gid:t,flippedHorizontal:e,flippedVertical:i,flippedAntiDiagonal:n,rotation:s,flipped:r}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(27),s=i(92),r=i(1014),o=i(1012),a=i(1015),h=i(1013),l=i(1011),u=i(1009),c=function(t,e,i){if("orthogonal"!==e.orientation)return console.warn("Only orthogonal map types are supported in this version of Phaser"),null;var c=new s({width:e.width,height:e.height,name:t,tileWidth:e.tilewidth,tileHeight:e.tileheight,orientation:e.orientation,format:n.TILED_JSON,version:e.version,properties:e.properties});c.layers=r(e,i),c.images=o(e);var d=a(e);return c.tilesets=d.tilesets,c.imageCollections=d.imageCollections,c.objects=h(e),c.tiles=l(c),u(c),c};t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1016),s=i(406),r=function(t){return{x:t.x,y:t.y}},o=["id","name","type","rotation","properties","visible","x","y","width","height"],a=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0);var a=n(t,o);if(a.x+=e,a.y+=i,t.gid){var h=s(t.gid);a.gid=h.gid,a.flippedHorizontal=h.flippedHorizontal,a.flippedVertical=h.flippedVertical,a.flippedAntiDiagonal=h.flippedAntiDiagonal}else t.polyline?a.polyline=t.polyline.map(r):t.polygon?a.polygon=t.polygon.map(r):t.ellipse?(a.ellipse=t.ellipse,a.width=t.width,a.height=t.height):t.text?(a.width=t.width,a.height=t.height,a.text=t.text):(a.rectangle=!0,a.width=t.width,a.height=t.height);return a};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(15),r=i(23),o=i(2),a=i(1018),h=i(118),l=i(44),u=new n({Extends:o,Mixins:[s.Alpha,s.BlendMode,s.ComputedSize,s.Depth,s.Flip,s.GetBounds,s.Origin,s.Pipeline,s.ScaleMode,s.Transform,s.Visible,s.ScrollFactor,a],initialize:function(t,e,i,n,s,a){o.call(this,t,"StaticTilemapLayer"),this.isTilemap=!0,this.tilemap=e,this.layerIndex=i,this.layer=e.layers[i],this.layer.tilemapLayer=this,this.tileset=n,this.culledTiles=[],this.vertexBuffer=null,this.renderer=t.sys.game.renderer,this.bufferData=null,this.vertexViewF32=null,this.vertexViewU32=null,this.dirty=!0,this.vertexCount=0,this.setAlpha(this.layer.alpha),this.setPosition(s,a),this.setOrigin(),this.setSize(this.layer.tileWidth*this.layer.width,this.layer.tileHeight*this.layer.height),this.initPipeline("TextureTintPipeline"),t.sys.game.config.renderType===r.WEBGL&&t.sys.game.renderer.onContextRestored(function(){this.dirty=!0,this.vertexBuffer=null},this)},upload:function(t){var e,i,n,s,r=this.tileset,o=this.layer.width,a=this.layer.height,h=r.image.source[0].width,u=r.image.source[0].height,c=this.layer.data,d=this.renderer;if(d.gl){var f=d.pipelines.TextureTintPipeline;if(this.dirty){var p=d.gl,v=this.vertexBuffer,g=this.bufferData,y=0,m=0,x=o*a*f.vertexSize*6;null===g&&(g=new ArrayBuffer(x),this.bufferData=g,this.vertexViewF32=new Float32Array(g),this.vertexViewU32=new Uint32Array(g));var w=this.vertexViewF32,b=this.vertexViewU32;for(i=0;i<a;++i)for(n=0;n<o;++n)if(null!==(e=c[i][n])&&-1!==e.index){var T=e.pixelX,S=e.pixelY,A=T+e.width,C=S+e.height;if(null!==(s=r.getTileTextureCoordinates(e.index))){var M=s.x/h,_=s.y/u,E=(s.x+e.width)/h,P=(s.y+e.height)/u,L=T,k=S,F=T,R=C,O=A,B=C,D=A,I=S,Y=l.getTintAppendFloatAlpha(16777215,this.alpha*e.alpha);w[y+0]=L,w[y+1]=k,w[y+2]=M,w[y+3]=_,b[y+4]=Y,w[y+5]=F,w[y+6]=R,w[y+7]=M,w[y+8]=P,b[y+9]=Y,w[y+10]=O,w[y+11]=B,w[y+12]=E,w[y+13]=P,b[y+14]=Y,w[y+15]=L,w[y+16]=k,w[y+17]=M,w[y+18]=_,b[y+19]=Y,w[y+20]=O,w[y+21]=B,w[y+22]=E,w[y+23]=P,b[y+24]=Y,w[y+25]=D,w[y+26]=I,w[y+27]=E,w[y+28]=_,b[y+29]=Y,y+=30,m+=6}}this.vertexCount=m,this.dirty=!1,null===v?(v=d.createVertexBuffer(g,p.STATIC_DRAW),this.vertexBuffer=v):(d.setVertexBuffer(v),p.bufferSubData(p.ARRAY_BUFFER,0,g))}f.modelIdentity(),f.modelTranslate(this.x-t.scrollX*this.scrollFactorX,this.y-t.scrollY*this.scrollFactorY,0),f.modelScale(this.scaleX,this.scaleY,1),f.viewLoad2D(t.matrix.matrix)}return this},calculateFacesAt:function(t,e){return h.CalculateFacesAt(t,e,this.layer),this},calculateFacesWithin:function(t,e,i,n){return h.CalculateFacesWithin(t,e,i,n,this.layer),this},createFromTiles:function(t,e,i,n,s){return h.CreateFromTiles(t,e,i,n,s,this.layer)},cull:function(t){return h.CullTiles(this.layer,t,this.culledTiles)},destroy:function(){this.layer.tilemapLayer===this&&(this.layer.tilemapLayer=void 0),this.tilemap=void 0,this.layer=void 0,this.tileset=void 0,o.prototype.destroy.call(this)},findByIndex:function(t,e,i){return h.FindByIndex(t,e,i,this.layer)},findTile:function(t,e,i,n,s,r,o){return h.FindTile(t,e,i,n,s,r,o,this.layer)},filterTiles:function(t,e,i,n,s,r,o){return h.FilterTiles(t,e,i,n,s,r,o,this.layer)},forEachTile:function(t,e,i,n,s,r,o){return h.ForEachTile(t,e,i,n,s,r,o,this.layer),this},getTileAt:function(t,e,i){return h.GetTileAt(t,e,i,this.layer)},getTileAtWorldXY:function(t,e,i,n){return h.GetTileAtWorldXY(t,e,i,n,this.layer)},getTilesWithin:function(t,e,i,n,s){return h.GetTilesWithin(t,e,i,n,s,this.layer)},getTilesWithinWorldXY:function(t,e,i,n,s,r){return h.GetTilesWithinWorldXY(t,e,i,n,s,r,this.layer)},getTilesWithinShape:function(t,e,i){return h.GetTilesWithinShape(t,e,i,this.layer)},hasTileAt:function(t,e){return h.HasTileAt(t,e,this.layer)},hasTileAtWorldXY:function(t,e,i){return h.HasTileAtWorldXY(t,e,i,this.layer)},renderDebug:function(t,e){return h.RenderDebug(t,e,this.layer),this},setCollision:function(t,e,i){return h.SetCollision(t,e,i,this.layer),this},setCollisionBetween:function(t,e,i,n){return h.SetCollisionBetween(t,e,i,n,this.layer),this},setCollisionByProperty:function(t,e,i){return h.SetCollisionByProperty(t,e,i,this.layer),this},setCollisionByExclusion:function(t,e,i){return h.SetCollisionByExclusion(t,e,i,this.layer),this},setTileIndexCallback:function(t,e,i){return h.SetTileIndexCallback(t,e,i,this.layer),this},setCollisionFromCollisionGroup:function(t,e){return h.SetCollisionFromCollisionGroup(t,e,this.layer),this},setTileLocationCallback:function(t,e,i,n,s,r){return h.SetTileLocationCallback(t,e,i,n,s,r,this.layer),this},tileToWorldX:function(t,e){return h.TileToWorldX(t,e,this.layer)},tileToWorldY:function(t,e){return h.TileToWorldY(t,e,this.layer)},tileToWorldXY:function(t,e,i,n){return h.TileToWorldXY(t,e,i,n,this.layer)},worldToTileX:function(t,e,i){return h.WorldToTileX(t,e,i,this.layer)},worldToTileY:function(t,e,i){return h.WorldToTileY(t,e,i,this.layer)},worldToTileXY:function(t,e,i,n,s){return h.WorldToTileXY(t,e,i,n,s,this.layer)}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(1),r=new n({initialize:function(t){this.delay=0,this.repeat=0,this.repeatCount=0,this.loop=!1,this.callback,this.callbackScope,this.args,this.timeScale=1,this.startAt=0,this.elapsed=0,this.paused=!1,this.hasDispatched=!1,this.reset(t)},reset:function(t){return this.delay=s(t,"delay",0),this.repeat=s(t,"repeat",0),this.loop=s(t,"loop",!1),this.callback=s(t,"callback",void 0),this.callbackScope=s(t,"callbackScope",this.callback),this.args=s(t,"args",[]),this.timeScale=s(t,"timeScale",1),this.startAt=s(t,"startAt",0),this.paused=s(t,"paused",!1),this.elapsed=this.startAt,this.hasDispatched=!1,this.repeatCount=-1===this.repeat||this.loop?999999999999:this.repeat,this},getProgress:function(){return this.elapsed/this.delay},getOverallProgress:function(){if(this.repeat>0){var t=this.delay+this.delay*this.repeat;return(this.elapsed+this.delay*(this.repeat-this.repeatCount))/t}return this.getProgress()},getRepeatCount:function(){return this.repeatCount},getElapsed:function(){return this.elapsed},getElapsedSeconds:function(){return.001*this.elapsed},remove:function(t){void 0===t&&(t=!1),this.elapsed=this.delay,this.hasDispatched=!t,this.repeatCount=0},destroy:function(){this.callback=void 0,this.callbackScope=void 0,this.args=[]}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(120),o=i(95),a=new n({Extends:s,initialize:function(t){s.call(this),this.manager=t,this.isTimeline=!0,this.data=[],this.totalData=0,this.useFrames=!1,this.timeScale=1,this.loop=0,this.loopDelay=0,this.loopCounter=0,this.completeDelay=0,this.countdown=0,this.state=o.PENDING_ADD,this._pausedState=o.PENDING_ADD,this.paused=!1,this.elapsed=0,this.totalElapsed=0,this.duration=0,this.progress=0,this.totalDuration=0,this.totalProgress=0,this.callbacks={onComplete:null,onLoop:null,onStart:null,onUpdate:null,onYoyo:null},this.callbackScope},setTimeScale:function(t){return this.timeScale=t,this},getTimeScale:function(){return this.timeScale},isPlaying:function(){return this.state===o.ACTIVE},add:function(t){return this.queue(r(this,t))},queue:function(t){return this.isPlaying()||(t.parent=this,t.parentIsTimeline=!0,this.data.push(t),this.totalData=this.data.length),this},hasOffset:function(t){return null!==t.offset},isOffsetAbsolute:function(t){return"number"==typeof t},isOffsetRelative:function(t){if("string"==typeof t){var e=t[0];if("-"===e||"+"===e)return!0}return!1},getRelativeOffset:function(t,e){var i=t[0],n=parseFloat(t.substr(2)),s=e;switch(i){case"+":s+=n;break;case"-":s-=n}return Math.max(0,s)},calcDuration:function(){for(var t=0,e=0,i=0,n=0;n<this.totalData;n++){var s=this.data[n];s.init(),this.hasOffset(s)?this.isOffsetAbsolute(s.offset)?(s.calculatedOffset=s.offset,0===s.offset&&(i=0)):this.isOffsetRelative(s.offset)&&(s.calculatedOffset=this.getRelativeOffset(s.offset,t)):s.calculatedOffset=i,t=s.totalDuration+s.calculatedOffset,e+=s.totalDuration,i+=s.totalDuration}this.duration=e,this.loopCounter=-1===this.loop?999999999999:this.loop,this.loopCounter>0?this.totalDuration=this.duration+this.completeDelay+(this.duration+this.loopDelay)*this.loopCounter:this.totalDuration=this.duration+this.completeDelay},init:function(){return this.calcDuration(),this.progress=0,this.totalProgress=0,!this.paused||(this.state=o.PAUSED,!1)},resetTweens:function(t){for(var e=0;e<this.totalData;e++){this.data[e].play(t)}},setCallback:function(t,e,i,n){return-1!==a.TYPES.indexOf(t)&&(this.callbacks[t]={func:e,scope:n,params:i}),this},makeActive:function(t){return this.manager.makeActive(t)},play:function(){if(this.state!==o.ACTIVE){if(this.paused)return this.paused=!1,void this.manager.makeActive(this);this.resetTweens(!1),this.state=o.ACTIVE;var t=this.callbacks.onStart;t&&t.func.apply(t.scope,t.params),this.emit("start",this)}},nextState:function(){if(this.loopCounter>0){this.elapsed=0,this.progress=0,this.loopCounter--;var t=this.callbacks.onLoop;t&&t.func.apply(t.scope,t.params),this.emit("loop",this,this.loopCounter),this.resetTweens(!0),this.loopDelay>0?(this.countdown=this.loopDelay,this.state=o.LOOP_DELAY):this.state=o.ACTIVE}else if(this.completeDelay>0)this.countdown=this.completeDelay,this.state=o.COMPLETE_DELAY;else{var e=this.callbacks.onComplete;e&&e.func.apply(e.scope,e.params),this.emit("complete",this),this.state=o.PENDING_REMOVE}},update:function(t,e){if(this.state!==o.PAUSED){var i=e;switch(this.useFrames&&(e=1*this.manager.timeScale),e*=this.timeScale,this.elapsed+=e,this.progress=Math.min(this.elapsed/this.duration,1),this.totalElapsed+=e,this.totalProgress=Math.min(this.totalElapsed/this.totalDuration,1),this.state){case o.ACTIVE:for(var n=this.totalData,s=0;s<this.totalData;s++){this.data[s].update(t,i)&&n--}var r=this.callbacks.onUpdate;r&&r.func.apply(r.scope,r.params),this.emit("update",this),0===n&&this.nextState();break;case o.LOOP_DELAY:this.countdown-=e,this.countdown<=0&&(this.state=o.ACTIVE);break;case o.COMPLETE_DELAY:if(this.countdown-=e,this.countdown<=0){var a=this.callbacks.onComplete;a&&a.func.apply(a.scope,a.params),this.emit("complete",this),this.state=o.PENDING_REMOVE}}return this.state===o.PENDING_REMOVE}},stop:function(){this.state=o.PENDING_REMOVE},pause:function(){if(this.state!==o.PAUSED)return this.paused=!0,this._pausedState=this.state,this.state=o.PAUSED,this.emit("pause",this),this},resume:function(){return this.state===o.PAUSED&&(this.paused=!1,this.state=this._pausedState),this.emit("resume",this),this},hasTarget:function(t){for(var e=0;e<this.data.length;e++)if(this.data[e].hasTarget(t))return!0;return!1},destroy:function(){for(var t=0;t<this.data.length;t++)this.data[t].stop()}});a.TYPES=["onStart","onUpdate","onLoop","onComplete","onYoyo"],t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1025),s=function(t){var e,i=[];if(t.hasOwnProperty("props"))for(e in t.props)"_"!==e.substr(0,1)&&i.push({key:e,value:t.props[e]});else for(e in t)-1===n.indexOf(e)&&"_"!==e.substr(0,1)&&i.push({key:e,value:t[e]});return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t){var e=n(t,"tweens",null);return null===e?[]:("function"==typeof e&&(e=e.call()),Array.isArray(e)||(e=[e]),e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(196),s=i(10),r=i(93),o=i(94),a=i(119),h=i(5),l=i(195),u=i(197),c=i(198),d=function(t,e,i){void 0===i&&(i=n);var d=h(e,"from",0),f=h(e,"to",1),p=[{value:d}],v=a(e,"delay",i.delay),g=a(e,"duration",i.duration),y=h(e,"easeParams",i.easeParams),m=o(h(e,"ease",i.ease),y),x=a(e,"hold",i.hold),w=a(e,"repeat",i.repeat),b=a(e,"repeatDelay",i.repeatDelay),T=r(e,"yoyo",i.yoyo),S=[],A=l("value",f),C=c(p[0],"value",A.getEnd,A.getStart,m,v,g,T,x,w,b,!1,!1);C.start=d,C.current=d,C.to=f,S.push(C);var M=new u(t,S,p);M.offset=s(e,"offset",null),M.completeDelay=s(e,"completeDelay",0),M.loop=Math.round(s(e,"loop",0)),M.loopDelay=Math.round(s(e,"loopDelay",0)),M.paused=r(e,"paused",!1),M.useFrames=r(e,"useFrames",!1);for(var _=h(e,"callbackScope",M),E=[M,null],P=u.TYPES,L=0;L<P.length;L++){var k=P[L],F=h(e,k,!1);if(F){var R=h(e,k+"Scope",_),O=h(e,k+"Params",[]);M.setCallback(k,F,E.concat(O),R)}}return M};t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(61),s=i(196),r=i(10),o=i(93),a=i(94),h=i(119),l=i(194),u=i(413),c=i(5),d=i(411),f=i(120),p=function(t,e){var i=new d(t),p=u(e);if(0===p.length)return i.paused=!0,i;var v=n(s);v.targets=l(e);var g=r(e,"totalDuration",0);v.duration=g>0?Math.floor(g/p.length):h(e,"duration",v.duration),v.delay=h(e,"delay",v.delay),v.easeParams=c(e,"easeParams",v.easeParams),v.ease=a(c(e,"ease",v.ease),v.easeParams),v.hold=h(e,"hold",v.hold),v.repeat=h(e,"repeat",v.repeat),v.repeatDelay=h(e,"repeatDelay",v.repeatDelay),v.yoyo=o(e,"yoyo",v.yoyo),v.flipX=o(e,"flipX",v.flipX),v.flipY=o(e,"flipY",v.flipY);for(var y=0;y<p.length;y++)i.queue(f(i,p[y],v));i.completeDelay=r(e,"completeDelay",0),i.loop=Math.round(r(e,"loop",0)),i.loopDelay=Math.round(r(e,"loopDelay",0)),i.paused=o(e,"paused",!1),i.useFrames=o(e,"useFrames",!1);var m=c(e,"callbackScope",i),x=[i],w=c(e,"onStart",!1);if(w){var b=c(e,"onStartScope",m),T=c(e,"onStartParams",[]);i.setCallback("onStart",w,x.concat(T),b)}var S=c(e,"onUpdate",!1);if(S){var A=c(e,"onUpdateScope",m),C=c(e,"onUpdateParams",[]);i.setCallback("onUpdate",S,x.concat(C),A)}var M=c(e,"onLoop",!1);if(M){var _=c(e,"onLoopScope",m),E=c(e,"onLoopParams",[]);i.setCallback("onLoop",M,x.concat(E),_)}var P=c(e,"onYoyo",!1);if(P){var L=c(e,"onYoyoScope",m),k=c(e,"onYoyoParams",[]);i.setCallback("onYoyo",P,x.concat(null,k),L)}var F=c(e,"onComplete",!1);if(F){var R=c(e,"onCompleteScope",m),O=c(e,"onCompleteParams",[]);i.setCallback("onComplete",F,x.concat(O),R)}return i};t.exports=p},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(!e.length)return NaN;if(1===e.length)return e[0];var n,s,r=1;if(i){if(t<e[0][i])return e[0];for(;e[r][i]<t;)r++}else for(;e[r]<t;)r++;return r>e.length&&(r=e.length),i?(n=e[r-1][i],s=e[r][i],s-t<=t-n?e[r]:e[r-1]):(n=e[r-1],s=e[r],s-t<=t-n?s:n)};t.exports=i},function(t,e){function i(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function n(t,e){return t<e?-1:t>e?1:0}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=function(t,e,r,o,a){for(r=r||0,o=o||t.length-1,a=a||n;o>r;){if(o-r>600){var h=o-r+1,l=e-r+1,u=Math.log(h),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(h-c)/h)*(l-h/2<0?-1:1),f=Math.max(r,Math.floor(e-l*c/h+d)),p=Math.min(o,Math.floor(e+(h-l)*c/h+d));s(t,e,f,p,a)}var v=t[e],g=r,y=o;for(i(t,r,e),a(t[o],v)>0&&i(t,r,o);g<y;){for(i(t,g,y),g++,y--;a(t[g],v)<0;)g++;for(;a(t[y],v)>0;)y--}0===a(t[r],v)?i(t,r,y):(y++,i(t,y,o)),y<=e&&(r=y+1),e<=y&&(o=y-1)}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=i(121),r=function(t,e,i){for(var n=[],s=0;s<t.length;s++)for(var r=0;r<e.length;r++)for(var o=0;o<i;o++)n.push({a:t[s],b:e[r]});return n},o=function(t,e,i){var o=n(i,"max",0),a=n(i,"qty",1),h=n(i,"random",!1),l=n(i,"randomB",!1),u=n(i,"repeat",0),c=n(i,"yoyo",!1),d=[];if(l&&s(e),-1===u)if(0===o)u=0;else{var f=t.length*e.length*a;c&&(f*=2),u=Math.ceil(o/f)}for(var p=0;p<=u;p++){var v=r(t,e,a);h&&s(v),d=d.concat(v),c&&(v.reverse(),d=d.concat(v))}return o&&d.splice(o),d};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);for(var i=null,n=0;n<e;n++)i=t.shift(),t.push(i);return i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);for(var i=null,n=0;n<e;n++)i=t.pop(),t.unshift(i);return i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=t.length,i=t[0].length,n=new Array(i),s=0;s<i;s++){n[s]=new Array(e);for(var r=e-1;r>-1;r--)n[s][r]=t[r][s]}return n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<e.length;i++)if(t.hasOwnProperty(e[i]))return!0;return!1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t&&t[0].toUpperCase()+t.slice(1)};t.exports=i},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";i(429),i(430),i(431)},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(t){function e(){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"IntroScene"))}return r(e,t),o(e,[{key:"preload",value:function(){this.load.image("background","assets/intro/bg.png")}},{key:"create",value:function(){this.add.image(100,100,"background")}}]),e}(Phaser.Scene);e.default=a},function(t,e,i){(function(e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
i(938);var n=i(23),s=i(19),r={Actions:i(203),Animation:i(479),Cache:i(486),Cameras:i(493),Class:i(0),Create:i(496),Curves:i(502),Data:i(506),Display:i(540),DOM:i(542),EventEmitter:i(543),Game:i(483),GameObjects:i(599),Geom:i(270),Input:i(756),Loader:i(790),Math:i(856),Physics:i(909),Renderer:i(942),Scene:i(381),Scenes:i(957),Sound:i(958),Structs:i(959),Textures:i(962),Tilemaps:i(1005),Time:i(1021),Tweens:i(1024),Utils:i(1054)};r=s(!1,r,n),t.exports=r,e.Phaser=r}).call(e,i(424))},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i(425);var s=i(427),r=n(s),o=i(426),a=n(o);console.log(a.default);var h={type:r.default.AUTO,width:800,height:600,scene:a.default};new r.default.Game(h)},function(t,e,i){t.exports=i.p+"assets/bg.png"},function(t,e,i){t.exports=i.p+"assets/mountain-far.png"},function(t,e,i){t.exports=i.p+"assets/mountains.png"},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"angle",e,i,s,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n];e.call(i,s)}return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=i;n<t.length;n++){var s=t[n],r=!0;for(var o in e)s[o]!==e[o]&&(r=!1);if(r)return s}return null};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=0);for(var n=i;n<t.length;n++){var s=t[n],r=!0;for(var o in e)s[o]!==e[o]&&(r=!1);if(r)return s}return null};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(227),s=i(127),r=i(1),o=i(3),a=i(101),h=new a({sys:{queueDepthSort:o,events:{once:o}}},0,0,1,1),l=function(t,e){void 0===e&&(e={});var i=r(e,"width",-1),o=r(e,"height",-1),a=r(e,"cellWidth",1),l=r(e,"cellHeight",a),u=r(e,"position",s.TOP_LEFT),c=r(e,"x",0),d=r(e,"y",0),f=0,p=0,v=i*a,g=o*l;h.setPosition(c,d),h.setSize(a,l);for(var y=0;y<t.length;y++)if(n(t[y],h,u),-1===i)p+=l,h.y+=l,p===g&&(p=0,h.x+=a,h.y=d);else if(-1===o)f+=a,h.x+=a,f===v&&(f=0,h.x=c,h.y+=l);else if(f+=a,h.x+=a,f===v&&(f=0,p+=l,h.x=c,h.y+=l,p===g))break;return t};t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"alpha",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"x",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r,o,a){return void 0!==i&&null!==i||(i=e),n(t,"x",e,s,o,a),n(t,"y",i,r,o,a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"y",e,i,s,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=6.28);for(var s=i,r=(n-i)/t.length,o=0;o<t.length;o++)t[o].x=e.x+e.radius*Math.cos(s),t[o].y=e.y+e.radius*Math.sin(s),s+=r;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=6.28);for(var s=i,r=(n-i)/t.length,o=e.width/2,a=e.height/2,h=0;h<t.length;h++)t[h].x=e.x+o*Math.cos(s),t[h].y=e.y+a*Math.sin(s),s+=r;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(150),s=function(t,e){for(var i=n(e,t.length),s=0;s<t.length;s++){var r=t[s],o=i[s];r.x=o.x,r.y=o.y}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(285),s=i(419),r=i(420),o=function(t,e,i){void 0===i&&(i=0);var o=n(e,!1,t.length);i>0?s(o,i):i<0&&r(o,Math.abs(i));for(var a=0;a<t.length;a++)t[a].x=o[a].x,t[a].y=o[a].y;return t};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(275),s=function(t,e,i){var s=n({x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2},i),r=n({x1:e.x2,y1:e.y2,x2:e.x3,y2:e.y3},i),o=n({x1:e.x3,y1:e.y3,x2:e.x1,y2:e.y1},i);s.pop(),r.pop(),o.pop(),s=s.concat(r,o);for(var a=s.length/t.length,h=0,l=0;l<t.length;l++){var u=t[l],c=s[Math.floor(h)];u.x=c.x,u.y=c.y,h+=a}return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].anims.play(e,i);return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(146),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(149),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(151),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(157),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(159),s=function(t,e){for(var i=0;i<t.length;i++)n(e,t[i]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"rotation",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(169),s=i(54),r=function(t,e,i){for(var r=e.x,o=e.y,a=0;a<t.length;a++){var h=t[a];n(h,r,o,i,Math.max(1,s(h.x,h.y,r,o)))}return t};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(169),s=function(t,e,i,s){var r=e.x,o=e.y;if(0===s)return t;for(var a=0;a<t.length;a++)n(t[a],r,o,i,s);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"scaleX",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r,o,a){return void 0!==i&&null!==i||(i=e),n(t,"scaleX",e,s,o,a),n(t,"scaleY",i,r,o,a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(29),s=function(t,e,i,s,r){return n(t,"scaleY",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"alpha",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s){return n(t,"blendMode",e,0,i,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"depth",e,i,s,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){for(var n=0;n<t.length;n++)t[n].setInteractive(e,i);return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r,o,a){return void 0!==i&&null!==i||(i=e),n(t,"originX",e,s,o,a),n(t,"originY",i,r,o,a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"rotation",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r,o,a){return void 0!==i&&null!==i||(i=e),n(t,"scaleX",e,s,o,a),n(t,"scaleY",i,r,o,a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"scaleX",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"scaleY",e,i,s,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){for(var r=0;r<t.length;r++)t[r].setTint(e,i,n,s);return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s){return n(t,"visible",e,0,i,s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"x",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r,o,a){return void 0!==i&&null!==i||(i=e),n(t,"x",e,s,o,a),n(t,"y",i,r,o,a)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(22),s=function(t,e,i,s,r){return n(t,"y",e,i,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(4),s=function(t,e,i,s,r){void 0===s&&(s=0),void 0===r&&(r=new n);var o,a;if(t.length>1){var h,l,u,c;if(0===s){var d=t.length-1;for(o=t[d].x,a=t[d].y,h=d-1;h>=0;h--)c=t[h],l=c.x,u=c.y,c.x=o,c.y=a,o=l,a=u;t[d].x=e,t[d].y=i}else{for(o=t[0].x,a=t[0].y,h=1;h<t.length;h++)c=t[h],l=c.x,u=c.y,c.x=o,c.y=a,o=l,a=u;t[0].x=e,t[0].y=i}}else o=t[0].x,a=t[0].y,t[0].x=e,t[0].y=i;return r.x=o,r.y=a,r};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(121),s=function(t){return n(t)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(322),s=function(t,e,i,s,r){void 0===r&&(r=!1);var o,a=Math.abs(s-i)/t.length;if(r)for(o=0;o<t.length;o++)t[o][e]+=n(o*a,i,s);else for(o=0;o<t.length;o++)t[o][e]=n(o*a,i,s);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(323),s=function(t,e,i,s,r){void 0===r&&(r=!1);var o,a=Math.abs(s-i)/t.length;if(r)for(o=0;o<t.length;o++)t[o][e]+=n(o*a,i,s);else for(o=0;o<t.length;o++)t[o][e]=n(o*a,i,s);return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){void 0===s&&(s=!1);var r,o=Math.abs(n-i)/t.length;if(s)for(r=0;r<t.length;r++)t[r][e]+=r*o;else for(r=0;r<t.length;r++)t[r][e]=r*o;return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=0;e<t.length;e++)t[e].visible=!t[e].visible;return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       samme <samme.npm@gmail.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(49),s=function(t,e,i){void 0===i&&(i=0);for(var s=0;s<t.length;s++){var r=t[s];r.x=n(r.x,e.left-i,e.right+i),r.y=n(r.y,e.top-i,e.bottom+i)}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Animation:i(204),AnimationFrame:i(205),AnimationManager:i(206)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(23),r=i(5),o=i(17),a=i(3),h=i(372),l=i(130),u=new n({initialize:function(t){void 0===t&&(t={});var e=["#ff0000","#ffff00","#00ff00","#00ffff","#000000"];this.width=r(t,"width",1024),this.height=r(t,"height",768),this.zoom=r(t,"zoom",1),this.resolution=r(t,"resolution",1),this.renderType=r(t,"type",s.AUTO),this.parent=r(t,"parent",null),this.canvas=r(t,"canvas",null),this.canvasStyle=r(t,"canvasStyle",null),this.sceneConfig=r(t,"scene",null),this.seed=r(t,"seed",[(Date.now()*Math.random()).toString()]),o.RND.init(this.seed),this.gameTitle=r(t,"title",""),this.gameURL=r(t,"url","https://phaser.io"),this.gameVersion=r(t,"version",""),this.inputKeyboard=r(t,"input.keyboard",!0),this.inputKeyboardEventTarget=r(t,"input.keyboard.target",window),this.inputMouse=r(t,"input.mouse",!0),this.inputMouseEventTarget=r(t,"input.mouse.target",null),this.inputMouseCapture=r(t,"input.mouse.capture",!0),this.inputTouch=r(t,"input.touch",!0),this.inputTouchEventTarget=r(t,"input.touch.target",null),this.inputTouchCapture=r(t,"input.touch.capture",!0),this.inputGamepad=r(t,"input.gamepad",!1),this.disableContextMenu=r(t,"disableContextMenu",!1),this.audio=r(t,"audio"),this.hideBanner=!1===r(t,"banner",null),this.hidePhaser=r(t,"banner.hidePhaser",!1),this.bannerTextColor=r(t,"banner.text","#ffffff"),this.bannerBackgroundColor=r(t,"banner.background",e),""===this.gameTitle&&this.hidePhaser&&(this.hideBanner=!0),this.fps=r(t,"fps",null);var i=r(t,"render",t);this.antialias=r(i,"antialias",!0),this.pixelArt=r(i,"pixelArt",!1),this.autoResize=r(i,"autoResize",!1),this.roundPixels=r(i,"roundPixels",!1),this.transparent=r(i,"transparent",!1),this.clearBeforeRender=r(i,"clearBeforeRender",!0),this.premultipliedAlpha=r(i,"premultipliedAlpha",!0),this.preserveDrawingBuffer=r(i,"preserveDrawingBuffer",!1),this.failIfMajorPerformanceCaveat=r(i,"failIfMajorPerformanceCaveat",!1),this.powerPreference=r(i,"powerPreference","default");var n=r(t,"backgroundColor",0);this.backgroundColor=l(n),0===n&&this.transparent&&(this.backgroundColor.alpha=0),this.preBoot=r(t,"callbacks.preBoot",a),this.postBoot=r(t,"callbacks.postBoot",a),this.physics=r(t,"physics",{}),this.defaultPhysicsSystem=r(this.physics,"default",!1),this.loaderBaseURL=r(t,"loader.baseURL",""),this.loaderPath=r(t,"loader.path",""),this.loaderMaxParallelDownloads=r(t,"loader.maxParallelDownloads",32),this.loaderCrossOrigin=r(t,"loader.crossOrigin",void 0),this.loaderResponseType=r(t,"loader.responseType",""),this.loaderAsync=r(t,"loader.async",!0),this.loaderUser=r(t,"loader.user",""),this.loaderPassword=r(t,"loader.password",""),this.loaderTimeout=r(t,"loader.timeout",0),this.defaultPlugins=r(t,"plugins",h.DefaultScene);var u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAg";this.defaultImage=r(t,"images.default",u+"AQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg=="),this.missingImage=r(t,"images.missing",u+"CAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==")}});t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(233),s=i(26),r=i(23),o=i(126),a=function(t){var e=t.config;if(e.renderType!==r.HEADLESS)if(e.renderType===r.CANVAS||e.renderType!==r.CANVAS&&!o.webGL){if(!o.canvas)throw new Error("Cannot create Canvas or WebGL context, aborting.");e.renderType=r.CANVAS}else e.renderType=r.WEBGL;if(e.pixelArt&&s.disableSmoothing(),e.canvas?t.canvas=e.canvas:t.canvas=s.create(t,e.width,e.height,e.renderType),e.canvasStyle&&(t.canvas.style=e.canvasStyle),e.pixelArt&&n.setCrisp(t.canvas),1!==e.zoom&&(t.canvas.style.width=(e.width*e.zoom).toString()+"px",t.canvas.style.height=(e.height*e.zoom).toString()+"px"),e.renderType!==r.HEADLESS){var a,h;a=i(181),h=i(182),e.renderType===r.WEBGL?(t.renderer=new h(t),t.context=null):(t.renderer=new a(t),t.context=t.renderer.gameContext)}};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(23),s=function(t){var e=t.config;if(!e.hideBanner){var i="WebGL";e.renderType===n.CANVAS?i="Canvas":e.renderType===n.HEADLESS&&(i="Headless");var s,r=e.audio,o=t.device.audio;if(s=!o.webAudio||r&&r.disableWebAudio?r&&r.noAudio||!o.webAudio&&!o.audioData?"No Audio":"HTML5 Audio":"Web Audio",t.device.browser.ie)window.console&&console.log("Phaser v"+n.VERSION+" / https://phaser.io");else{var a="",h=[a];if(Array.isArray(e.bannerBackgroundColor)){var l;e.bannerBackgroundColor.forEach(function(t){a=a.concat("%c "),h.push("background: "+t),l=t}),h[h.length-1]="color: "+e.bannerTextColor+"; background: "+l}else a=a.concat("%c "),h.push("color: "+e.bannerTextColor+"; background: "+e.bannerBackgroundColor);h.push("background: #fff"),e.gameTitle&&(a=a.concat(e.gameTitle),e.gameVersion&&(a=a.concat(" v"+e.gameVersion)),e.hidePhaser||(a=a.concat(" / "))),e.hidePhaser||(a=a.concat("Phaser v"+n.VERSION+" ("+i+" | "+s+")")),a=a.concat(" %c "+e.gameURL),h[0]=a,console.log.apply(console,h)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(131),s=i(206),r=i(208),o=i(26),a=i(0),h=i(480),l=i(481),u=i(97),c=i(482),d=i(511),f=i(246),p=i(12),v=i(295),g=i(3),y=i(13),m=i(382),x=i(384),w=i(393),b=i(484),T=i(485),S=new a({initialize:function(t){this.config=new h(t),this.renderer=null,this.canvas=null,this.context=null,this.isBooted=!1,this.isRunning=!1,this.events=new p,this.anims=new s(this),this.textures=new w(this),this.cache=new r(this),this.registry=new u(this),this.input=new v(this,this.config),this.scene=new m(this,this.config.sceneConfig),this.device=d,this.sound=x.create(this),this.loop=new b(this,this.config.fps),this.plugins=new y(this,this.config),this.onStepCallback=g,this.pendingDestroy=!1,this.removeCanvas=!1,f(this.boot.bind(this))},boot:function(){this.isBooted=!0,this.config.preBoot(this),l(this),c(this),n(this.canvas,this.config.parent),this.events.emit("boot"),this.events.once("ready",this.start,this)},start:function(){this.isRunning=!0,this.config.postBoot(this),this.renderer?this.loop.start(this.step.bind(this)):this.loop.start(this.headlessStep.bind(this)),T(this.events),this.events.on("hidden",this.onHidden,this),this.events.on("visible",this.onVisible,this),this.events.on("blur",this.onBlur,this),this.events.on("focus",this.onFocus,this)},step:function(t,e){if(this.pendingDestroy)return this.runDestroy();this.input.update(t,e),this.sound.update(t,e),this.onStepCallback(),this.scene.update(t,e);var i=this.renderer;i.preRender(),this.events.emit("prerender",i),this.scene.render(i),i.postRender(),this.events.emit("postrender",i)},headlessStep:function(t,e){this.input.update(t,e),this.sound.update(t,e),this.onStepCallback(),this.scene.update(t,e),this.events.emit("prerender"),this.events.emit("postrender")},onHidden:function(){this.loop.pause(),this.events.emit("pause")},onVisible:function(){this.loop.resume(),this.events.emit("resume")},onBlur:function(){this.loop.blur()},onFocus:function(){this.loop.focus()},resize:function(t,e){this.config.width=t,this.config.height=e,this.renderer.resize(t,e),this.input.resize(),this.scene.resize(t,e),this.events.emit("resize",t,e)},destroy:function(t){this.pendingDestroy=!0,this.removeCanvas=t},runDestroy:function(){this.events.emit("destroy"),this.events.removeAllListeners(),this.scene.destroy(),this.renderer&&this.renderer.destroy(),this.onStepCallback=null,this.removeCanvas&&this.canvas&&(o.remove(this.canvas),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)),this.loop.destroy(),this.pendingDestroy=!1}});t.exports=S},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(5),r=i(3),o=i(249),a=new n({initialize:function(t,e){this.game=t,this.raf=new o,this.started=!1,this.running=!1,this.minFps=s(e,"min",5),this.targetFps=s(e,"target",60),this._min=1e3/this.minFps,this._target=1e3/this.targetFps,this.actualFps=this.targetFps,this.nextFpsUpdate=0,this.framesThisSecond=0,this.callback=r,this.forceSetTimeOut=s(e,"forceSetTimeOut",!1),this.time=0,this.startTime=0,this.lastTime=0,this.frame=0,this.inFocus=!0,this._pauseTime=0,this._coolDown=0,this.delta=0,this.deltaIndex=0,this.deltaHistory=[],this.deltaSmoothingMax=s(e,"deltaHistory",10),this.panicMax=s(e,"panicMax",120),this.rawDelta=0},blur:function(){this.inFocus=!1},focus:function(){this.inFocus=!0,this.resetDelta()},pause:function(){this._pauseTime=window.performance.now()},resume:function(){this.resetDelta(),this.startTime+=this.time-this._pauseTime},resetDelta:function(){var t=window.performance.now();this.time=t,this.lastTime=t,this.nextFpsUpdate=t+1e3,this.framesThisSecond=0,this.frame=0;for(var e=0;e<this.deltaSmoothingMax;e++)this.deltaHistory[e]=Math.min(this._target,this.deltaHistory[e]);this.delta=0,this.deltaIndex=0,this._coolDown=this.panicMax},start:function(t){if(this.started)return this;this.started=!0,this.running=!0;for(var e=0;e<this.deltaSmoothingMax;e++)this.deltaHistory[e]=this._target;this.resetDelta(),this.startTime=window.performance.now(),this.callback=t,this.raf.start(this.step.bind(this),this.forceSetTimeOut)},step:function(t){this.frame++,this.rawDelta=t-this.lastTime;var e=this.deltaIndex,i=this.deltaHistory,n=this.deltaSmoothingMax,s=t-this.lastTime;(this._coolDown>0||!this.inFocus)&&(this._coolDown--,s=Math.min(s,this._target)),s>this._min&&(s=i[e],s=Math.min(s,this._min)),i[e]=s,++this.deltaIndex>n&&(this.deltaIndex=0);for(var r=0,o=0;o<n;o++)r+=i[o];r/=n,this.delta=r,this.time+=this.rawDelta,t>this.nextFpsUpdate&&(this.actualFps=.25*this.framesThisSecond+.75*this.actualFps,this.nextFpsUpdate=t+1e3,this.framesThisSecond=0),this.framesThisSecond++;var a=r/this._target;this.callback(t,r,a),this.lastTime=t},tick:function(){this.step(window.performance.now())},sleep:function(){this.running&&(this.raf.stop(),this.running=!1)},wake:function(t){this.running?this.sleep():t&&(this.startTime+=-this.lastTime+(this.lastTime=window.performance.now())),this.raf.start(this.step.bind(this),this.useRAF),this.running=!0,this.step(window.performance.now())},stop:function(){return this.running=!1,this.started=!1,this.raf.stop(),this},destroy:function(){this.stop(),this.callback=r,this.raf=null,this.game=null}});t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e;if(void 0!==document.hidden)e="visibilitychange";else{["webkit","moz","ms"].forEach(function(t){void 0!==document[t+"Hidden"]&&(document.hidden=function(){return document[t+"Hidden"]},e=t+"visibilitychange")})}var i=function(e){document.hidden||"pause"===e.type?t.emit("hidden"):t.emit("visible")};e&&document.addEventListener(e,i,!1),window.onblur=function(){t.emit("blur")},window.onfocus=function(){t.emit("focus")}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BaseCache:i(207),CacheManager:i(208)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(124),s=i(0),r=i(1),o=i(13),a=i(41),h=new s({initialize:function(t){this.scene=t,this.systems=t.sys,this.currentCameraId=1,this.cameras=[],this.cameraPool=[],this.main,this.baseScale=1,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){var t=this.systems;t.settings.cameras?this.fromJSON(t.settings.cameras):this.add(),this.main=this.cameras[0],this.systems.events.once("destroy",this.destroy,this)},start:function(){this.main||this.boot();var t=this.systems.events;t.on("update",this.update,this),t.once("shutdown",this.shutdown,this)},add:function(t,e,i,s,r,o){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.scene.sys.game.config.width),void 0===s&&(s=this.scene.sys.game.config.height),void 0===r&&(r=!1),void 0===o&&(o="");var a=null;return this.cameraPool.length>0?(a=this.cameraPool.pop(),a.setViewport(t,e,i,s)):a=new n(t,e,i,s),a.setName(o),a.setScene(this.scene),this.cameras.push(a),r&&(this.main=a),a._id=this.currentCameraId,this.currentCameraId=this.currentCameraId<<1,a},addExisting:function(t){var e=this.cameras.indexOf(t),i=this.cameraPool.indexOf(t);return e<0&&i>=0?(this.cameras.push(t),this.cameraPool.slice(i,1),t):null},fromJSON:function(t){Array.isArray(t)||(t=[t]);for(var e=this.scene.sys.game.config.width,i=this.scene.sys.game.config.height,n=0;n<t.length;n++){var s=t[n],o=r(s,"x",0),a=r(s,"y",0),h=r(s,"width",e),l=r(s,"height",i),u=this.add(o,a,h,l);u.name=r(s,"name",""),u.zoom=r(s,"zoom",1),u.rotation=r(s,"rotation",0),u.scrollX=r(s,"scrollX",0),u.scrollY=r(s,"scrollY",0),u.roundPixels=r(s,"roundPixels",!1);var c=r(s,"backgroundColor",!1);c&&u.setBackgroundColor(c);var d=r(s,"bounds",null);if(d){var f=r(d,"x",0),p=r(d,"y",0),v=r(d,"width",e),g=r(d,"height",i);u.setBounds(f,p,v,g)}}return this},getCamera:function(t){for(var e=0;e<this.cameras.length;e++)if(this.cameras[e].name===t)return this.cameras[e];return null},getCameraBelowPointer:function(t){for(var e=this.cameras,i=e.length-1;i>=0;i--){var n=e[i];if(n.inputEnabled&&a(n,t.x,t.y))return n}},remove:function(t){var e=this.cameras.indexOf(t);e>=0&&this.cameras.length>1&&(this.cameraPool.push(this.cameras[e]),this.cameras.splice(e,1),this.main===t&&(this.main=this.cameras[0]))},render:function(t,e,i){for(var n=this.cameras,s=this.baseScale,r=0,o=n.length;r<o;++r){var a=n[r];a.preRender(s,t.config.resolution),t.render(this.scene,e,i,a)}},resetAll:function(){for(;this.cameras.length>0;)this.cameraPool.push(this.cameras.pop());return this.main=this.add(),this.main},update:function(t,e){for(var i=0,n=this.cameras.length;i<n;++i)this.cameras[i].update(t,e)},resize:function(t,e){for(var i=0,n=this.cameras.length;i<n;++i)this.cameras[i].setSize(t,e)},shutdown:function(){this.main=void 0;for(var t=0;t<this.cameras.length;t++)this.cameras[t].destroy();for(t=0;t<this.cameraPool.length;t++)this.cameraPool[t].destroy();this.cameras=[],this.cameraPool=[];var e=this.systems.events;e.off("update",this.update,this),e.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});o.register("CameraManager",h,"cameras"),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(0),r=new s({initialize:function(t){this.camera=t,this.isRunning=!1,this.isComplete=!1,this.direction=!0,this.duration=0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(t,e,i,n,s,r,o,a){if(void 0===t&&(t=!0),void 0===e&&(e=1e3),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r=!1),void 0===o&&(o=null),void 0===a&&(a=this.camera.scene),!r&&this.isRunning)return this.camera;this.isRunning=!0,this.isComplete=!1,this.duration=e,this.direction=t,this.progress=0,this.red=i,this.green=n,this.blue=s,this.alpha=t?Number.MIN_VALUE:1,this._elapsed=0,this._onUpdate=o,this._onUpdateScope=a;var h=t?"camerafadeoutstart":"camerafadeinstart";return this.camera.emit(h,this.camera,this,e,i,n,s),this.camera},update:function(t,e){this.isRunning&&(this._elapsed+=e,this.progress=n(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration?this.alpha=this.direction?this.progress:1-this.progress:this.effectComplete())},postRenderCanvas:function(t){if(!this.isRunning&&!this.isComplete)return!1;var e=this.camera;return t.fillStyle="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")",t.fillRect(e.x,e.y,e.width,e.height),!0},postRenderWebGL:function(t,e){if(!this.isRunning&&!this.isComplete)return!1;var i=this.camera,n=this.red/255,s=this.blue/255,r=this.green/255;return t.batchFillRect(0,0,1,1,0,i.x,i.y,i.width,i.height,e(n,r,s,1),this.alpha,1,0,0,1,0,0,[1,0,0,1,0,0]),!0},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.isComplete=!0;var t=this.direction?"camerafadeoutcomplete":"camerafadeincomplete";this.camera.emit(t,this.camera,this)},reset:function(){this.isRunning=!1,this.isComplete=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(0),r=new s({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.red=0,this.green=0,this.blue=0,this.alpha=0,this.progress=0,this._elapsed=0,this._onUpdate,this._onUpdateScope},start:function(t,e,i,n,s,r,o){return void 0===t&&(t=250),void 0===e&&(e=255),void 0===i&&(i=255),void 0===n&&(n=255),void 0===s&&(s=!1),void 0===r&&(r=null),void 0===o&&(o=this.camera.scene),!s&&this.isRunning?this.camera:(this.isRunning=!0,this.duration=t,this.progress=0,this.red=e,this.green=i,this.blue=n,this.alpha=1,this._elapsed=0,this._onUpdate=r,this._onUpdateScope=o,this.camera.emit("cameraflashstart",this.camera,this,t,e,i,n),this.camera)},update:function(t,e){this.isRunning&&(this._elapsed+=e,this.progress=n(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration?this.alpha=1-this.progress:this.effectComplete())},postRenderCanvas:function(t){if(!this.isRunning)return!1;var e=this.camera;return t.fillStyle="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")",t.fillRect(e.x,e.y,e.width,e.height),!0},postRenderWebGL:function(t,e){if(!this.isRunning)return!1;var i=this.camera,n=this.red/255,s=this.blue/255,r=this.green/255;return t.batchFillRect(0,0,1,1,0,i.x,i.y,i.width,i.height,e(n,r,s,1),this.alpha,1,0,0,1,0,0,[1,0,0,1,0,0]),!0},effectComplete:function(){this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit("cameraflashcomplete",this.camera,this)},reset:function(){this.isRunning=!1,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(0),r=i(4),o=new s({initialize:function(t){this.camera=t,this.isRunning=!1,this.duration=0,this.intensity=new r,this.progress=0,this._elapsed=0,this._offsetX=0,this._offsetY=0,this._onUpdate,this._onUpdateScope},start:function(t,e,i,n,s){return void 0===t&&(t=100),void 0===e&&(e=.05),void 0===i&&(i=!1),void 0===n&&(n=null),void 0===s&&(s=this.camera.scene),!i&&this.isRunning?this.camera:(this.isRunning=!0,this.duration=t,this.progress=0,"number"==typeof e?this.intensity.set(e):this.intensity.set(e.x,e.y),this._elapsed=0,this._offsetX=0,this._offsetY=0,this._onUpdate=n,this._onUpdateScope=s,this.camera.emit("camerashakestart",this.camera,this,t,e),this.camera)},preRender:function(){this.isRunning&&this.camera.matrix.translate(this._offsetX,this._offsetY)},update:function(t,e){if(this.isRunning)if(this._elapsed+=e,this.progress=n(this._elapsed/this.duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.camera,this.progress),this._elapsed<this.duration){var i=this.intensity,s=this.camera.width,r=this.camera.height,o=this.camera.zoom;this._offsetX=(Math.random()*i.x*s*2-i.x*s)*o,this._offsetY=(Math.random()*i.y*r*2-i.y*r)*o,this.camera.roundPixels&&(this._offsetX|=0,this._offsetY|=0)}else this.effectComplete()},effectComplete:function(){this._offsetX=0,this._offsetY=0,this._onUpdate=null,this._onUpdateScope=null,this.isRunning=!1,this.camera.emit("camerashakecomplete",this.camera,this)},reset:function(){this.isRunning=!1,this._offsetX=0,this._offsetY=0,this._onUpdate=null,this._onUpdateScope=null},destroy:function(){this.reset(),this.camera=null,this.intensity=null}});t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Camera:i(124),CameraManager:i(487),Effects:i(209)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Fixed:i(210),FixedKeyControl:i(210),Smoothed:i(211),SmoothedKeyControl:i(211)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Controls:i(492),Scene2D:i(491),Sprite3D:i(495)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(212),r=i(213),o=i(13),a=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.cameras=[],t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},start:function(){var t=this.systems.events;t.on("update",this.update,this),t.once("shutdown",this.shutdown,this)},add:function(t,e,i){return this.addPerspectiveCamera(t,e,i)},addOrthographicCamera:function(t,e){var i=this.scene.sys.game.config;void 0===t&&(t=i.width),void 0===e&&(e=i.height);var n=new s(this.scene,t,e);return this.cameras.push(n),n},addPerspectiveCamera:function(t,e,i){var n=this.scene.sys.game.config;void 0===t&&(t=80),void 0===e&&(e=n.width),void 0===i&&(i=n.height);var s=new r(this.scene,t,e,i);return this.cameras.push(s),s},getCamera:function(t){for(var e=0;e<this.cameras.length;e++)if(this.cameras[e].name===t)return this.cameras[e];return null},removeCamera:function(t){var e=this.cameras.indexOf(t);-1!==e&&this.cameras.splice(e,1)},removeAll:function(){for(;this.cameras.length>0;){this.cameras.pop().destroy()}return this.main},update:function(t,e){for(var i=0,n=this.cameras.length;i<n;++i)this.cameras[i].update(t,e)},shutdown:function(){var t=this.systems.events;t.off("update",this.update,this),t.off("shutdown",this.shutdown,this),this.removeAll()},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});o.register("CameraManager3D",a,"cameras3d"),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Camera:i(125),CameraManager:i(494),OrthographicCamera:i(212),PerspectiveCamera:i(213)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GenerateTexture:i(214),Palettes:i(501)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#fff",2:"#8b4131",3:"#7bbdc5",4:"#8b41ac",5:"#6aac41",6:"#3931a4",7:"#d5de73",8:"#945a20",9:"#5a4100",A:"#bd736a",B:"#525252",C:"#838383",D:"#acee8b",E:"#7b73de",F:"#acacac"}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#2234d1",2:"#0c7e45",3:"#44aacc",4:"#8a3622",5:"#5c2e78",6:"#aa5c3d",7:"#b5b5b5",8:"#5e606e",9:"#4c81fb",A:"#6cd947",B:"#7be2f9",C:"#eb8a60",D:"#e23d69",E:"#ffd93f",F:"#fff"}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#f5f4eb"}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#fff"}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={ARNE16:i(215),C64:i(497),CGA:i(498),JMP:i(499),MSX:i(500)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Path:i(504),CubicBezier:i(216),Curve:i(62),Ellipse:i(217),Line:i(218),QuadraticBezier:i(219),Spline:i(220)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(4),r=new n({initialize:function(t,e){this.active=!1,this.p0=new s(t,e)},getPoint:function(t,e){return void 0===e&&(e=new s),e.copy(this.p0)},getPointAt:function(t,e){return this.getPoint(t,e)},getResolution:function(){return 1},getLength:function(){return 0},toJSON:function(){return{type:"MoveTo",points:[this.p0.x,this.p0.y]}}});t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(216),r=i(217),o=i(8),a=i(218),h=i(503),l=i(219),u=i(9),c=i(220),d=i(4),f=new n({initialize:function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.name="",this.curves=[],this.cacheLengths=[],this.autoClose=!1,this.startPoint=new d,this._tmpVec2A=new d,this._tmpVec2B=new d,"object"==typeof t?this.fromJSON(t):this.startPoint.set(t,e)},add:function(t){return this.curves.push(t),this},circleTo:function(t,e,i){return void 0===e&&(e=!1),this.ellipseTo(t,t,0,360,e,i)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);return t.equals(e)||this.curves.push(new a(e,t)),this},cubicBezierTo:function(t,e,i,n,r,o){var a,h,l,u=this.getEndPoint();return t instanceof d?(a=t,h=e,l=i):(a=new d(i,n),h=new d(r,o),l=new d(t,e)),this.add(new s(u,a,h,l))},quadraticBezierTo:function(t,e,i,n){var s,r,o=this.getEndPoint();return t instanceof d?(s=t,r=e):(s=new d(i,n),r=new d(t,e)),this.add(new l(o,s,r))},draw:function(t,e){for(var i=0;i<this.curves.length;i++){var n=this.curves[i];n.active&&n.draw(t,e)}return t},ellipseTo:function(t,e,i,n,s,o){var a=new r(0,0,t,e,i,n,s,o),h=this.getEndPoint(this._tmpVec2A),l=a.getStartPoint(this._tmpVec2B);return h.subtract(l),a.x=h.x,a.y=h.y,this.add(a)},fromJSON:function(t){this.curves=[],this.cacheLengths=[],this.startPoint.set(t.x,t.y),this.autoClose=t.autoClose;for(var e=0;e<t.curves.length;e++){var i=t.curves[e];switch(i.type){case"LineCurve":this.add(a.fromJSON(i));break;case"EllipseCurve":this.add(r.fromJSON(i));break;case"SplineCurve":this.add(c.fromJSON(i));break;case"CubicBezierCurve":this.add(s.fromJSON(i));break;case"QuadraticBezierCurve":this.add(l.fromJSON(i))}}return this},getBounds:function(t,e){void 0===t&&(t=new u),void 0===e&&(e=16),t.x=Number.MAX_VALUE,t.y=Number.MAX_VALUE;for(var i=new u,n=Number.MIN_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,r=0;r<this.curves.length;r++){var o=this.curves[r];o.active&&(o.getBounds(i,e),t.x=Math.min(t.x,i.x),t.y=Math.min(t.y,i.y),n=Math.max(n,i.right),s=Math.max(s,i.bottom))}return t.right=n,t.bottom=s,t},getCurveLengths:function(){if(this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,i=0;i<this.curves.length;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t},getEndPoint:function(t){return void 0===t&&(t=new d),this.curves.length>0?this.curves[this.curves.length-1].getPoint(1,t):t.copy(this.startPoint),t},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},getPoint:function(t,e){void 0===e&&(e=new d);for(var i=t*this.getLength(),n=this.getCurveLengths(),s=0;s<n.length;){if(n[s]>=i){var r=n[s]-i,o=this.curves[s],a=o.getLength(),h=0===a?0:1-r/a;return o.getPointAt(h,e)}s++}return null},getPoints:function(t){void 0===t&&(t=12);for(var e,i=[],n=0;n<this.curves.length;n++){var s=this.curves[n];if(s.active)for(var r=s.getResolution(t),o=s.getPoints(r),a=0;a<o.length;a++){var h=o[a];e&&e.equals(h)||(i.push(h),e=h)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i},getRandomPoint:function(t){return void 0===t&&(t=new d),this.getPoint(Math.random(),t)},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e},getStartPoint:function(t){return void 0===t&&(t=new d),t.copy(this.startPoint)},lineTo:function(t,e){t instanceof d?this._tmpVec2B.copy(t):this._tmpVec2B.set(t,e);var i=this.getEndPoint(this._tmpVec2A);return this.add(new a([i.x,i.y,this._tmpVec2B.x,this._tmpVec2B.y]))},splineTo:function(t){return t.unshift(this.getEndPoint()),this.add(new c(t))},moveTo:function(t,e){return this.add(new h(t,e))},toJSON:function(){for(var t=[],e=0;e<this.curves.length;e++)t.push(this.curves[e].toJSON());return{type:"Path",x:this.startPoint.x,y:this.startPoint.y,autoClose:this.autoClose,curves:t}},updateArcLengths:function(){this.cacheLengths=[],this.getCurveLengths()},destroy:function(){this.curves.length=0,this.cacheLengths.length=0,this.startPoint=void 0}});o.register("path",function(t,e){return new f(t,e)}),t.exports=f},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(97),r=i(13),o=new n({Extends:s,initialize:function(t){s.call(this,t,t.sys.events),this.scene=t,this.systems=t.sys,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.events=this.systems.events,this.events.once("destroy",this.destroy,this)},start:function(){this.events.once("shutdown",this.shutdown,this)},shutdown:function(){this.systems.events.off("shutdown",this.shutdown,this)},destroy:function(){s.prototype.destroy.call(this),this.events.off("start",this.start,this),this.scene=null,this.systems=null}});r.register("DataManagerPlugin",o,"data"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DataManager:i(97),DataManagerPlugin:i(505)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(98),s={audioData:!1,dolby:!1,m4a:!1,mp3:!1,ogg:!1,opus:!1,wav:!1,webAudio:!1,webm:!1};t.exports=function(){s.audioData=!!window.Audio,s.webAudio=!(!window.AudioContext&&!window.webkitAudioContext);var t=document.createElement("audio"),e=!!t.canPlayType;try{if(e&&(t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(s.ogg=!0),(t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||t.canPlayType("audio/opus;").replace(/^no$/,""))&&(s.opus=!0),t.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(s.mp3=!0),t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(s.wav=!0),(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;").replace(/^no$/,""))&&(s.m4a=!0),t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(s.webm=!0),""!==t.canPlayType('audio/mp4;codecs="ec-3"')))if(n.edge)s.dolby=!0;else if(n.safari&&n.safariVersion>=9&&/Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)){var i=parseInt(RegExp.$1,10),r=parseInt(RegExp.$2,10);(10===i&&r>=11||i>10)&&(s.dolby=!0)}}catch(t){}return s}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={available:!1,cancel:"",keyboard:!1,request:""};t.exports=function(){var t,e=["requestFullscreen","requestFullScreen","webkitRequestFullscreen","webkitRequestFullScreen","msRequestFullscreen","msRequestFullScreen","mozRequestFullScreen","mozRequestFullscreen"],n=document.createElement("div");for(t=0;t<e.length;t++)if(n[e[t]]){i.available=!0,i.request=e[t];break}var s=["cancelFullScreen","exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","msCancelFullScreen","msExitFullscreen","mozCancelFullScreen","mozExitFullscreen"];if(i.available)for(t=0;t<s.length;t++)if(document[s[t]]){i.cancel=s[t];break}return window.Element&&Element.ALLOW_KEYBOARD_INPUT&&(i.keyboard=!0),i}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(78),s=i(98),r={gamepads:!1,mspointer:!1,touch:!1,wheelEvent:null};t.exports=function(){return("ontouchstart"in document.documentElement||navigator.maxTouchPoints&&navigator.maxTouchPoints>=1)&&(r.touch=!0),(navigator.msPointerEnabled||navigator.pointerEnabled)&&(r.mspointer=!0),navigator.getGamepads&&(r.gamepads=!0),n.cocoonJS||("onwheel"in window||s.ie&&"WheelEvent"in window?r.wheelEvent="wheel":"onmousewheel"in window?r.wheelEvent="mousewheel":s.firefox&&"MouseScrollEvent"in window&&(r.wheelEvent="DOMMouseScroll")),r}()},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={h264Video:!1,hlsVideo:!1,mp4Video:!1,oggVideo:!1,vp9Video:!1,webmVideo:!1};t.exports=function(){var t=document.createElement("video"),e=!!t.canPlayType;try{e&&(t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")&&(i.oggVideo=!0),t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")&&(i.h264Video=!0,i.mp4Video=!0),t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")&&(i.webmVideo=!0),t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"")&&(i.vp9Video=!0),t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")&&(i.hlsVideo=!0))}catch(t){}return i}()},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={os:i(78),browser:i(98),features:i(126),input:i(509),audio:i(507),video:i(510),fullscreen:i(508),canvasFeatures:i(221)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BottomCenter:i(222),BottomLeft:i(223),BottomRight:i(224),Center:i(225),LeftCenter:i(226),QuickSet:i(227),RightCenter:i(228),TopCenter:i(229),TopLeft:i(230),TopRight:i(231)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(127),s=i(19),r={In:i(512),To:i(526)};r=s(!1,r,n),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(63),r=i(65),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,s(e)+i),o(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(32),r=i(36),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,s(e)-i),o(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(33),r=i(37),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,s(e)+i),o(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(32),r=i(35),o=i(37),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(64),s=i(32),r=i(66),o=i(37),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)-i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(32),s=i(34),r=i(37),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)-i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(31),s=i(33),r=i(35),o=i(36),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(64),s=i(33),r=i(66),o=i(36),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,s(e)+i),r(t,n(e)+a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(33),s=i(34),r=i(36),o=i(38),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),r(t,n(e)+i),o(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(63),s=i(34),r=i(35),o=i(65),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,n(e)+i),r(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(32),s=i(34),r=i(35),o=i(36),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,n(e)-i),r(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(33),s=i(34),r=i(35),o=i(37),a=function(t,e,i,a){return void 0===i&&(i=0),void 0===a&&(a=0),o(t,n(e)+i),r(t,s(e)-a),t};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BottomCenter:i(514),BottomLeft:i(515),BottomRight:i(516),LeftBottom:i(517),LeftCenter:i(518),LeftTop:i(519),RightBottom:i(520),RightCenter:i(521),RightTop:i(522),TopCenter:i(523),TopLeft:i(524),TopRight:i(525)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.width*t.originX};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.height*t.originY};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CenterOn:i(232),GetBottom:i(31),GetCenterX:i(63),GetCenterY:i(64),GetLeft:i(32),GetOffsetX:i(527),GetOffsetY:i(528),GetRight:i(33),GetTop:i(34),SetBottom:i(35),SetCenterX:i(65),SetCenterY:i(66),SetLeft:i(36),SetRight:i(37),SetTop:i(38)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e="none"),t.style.msTouchAction=e,t.style["ms-touch-action"]=e,t.style["touch-action"]=e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e="none"),["-webkit-","-khtml-","-moz-","-ms-",""].forEach(function(i){t.style[i+"user-select"]=e}),t.style["-webkit-touch-callout"]=e,t.style["-webkit-tap-highlight-color"]="rgba(0, 0, 0, 0)",t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Interpolation:i(233),Pool:i(26),Smoothing:i(128),TouchAction:i(530),UserSelect:i(531)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e={r:t>>16&255,g:t>>8&255,b:255&t,a:255};return t>16777215&&(e.a=t>>>24),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(46),s=i(238),r=function(t,e,i){var r=i,o=i,a=i;if(0!==e){var h=i<.5?i*(1+e):i+e-i*e,l=2*i-h;r=s(l,h,t+1/3),o=s(l,h,t),a=s(l,h,t-1/3)}return(new n).setGLTo(r,o,a,1)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(236),s=function(t,e){void 0===t&&(t=1),void 0===e&&(e=1);for(var i=[],s=0;s<=359;s++)i.push(n(s/359,t,e));return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(166),s=function(t,e,i,s,r,o,a,h){void 0===a&&(a=100),void 0===h&&(h=0);var l=h/a;return{r:n(t,s,l),g:n(e,r,l),b:n(i,o,l)}},r=function(t,e,i,n){return void 0===i&&(i=100),void 0===n&&(n=0),s(t.r,t.g,t.b,e.r,e.g,e.b,i,n)},o=function(t,e,i,n,r,o){return void 0===r&&(r=100),void 0===o&&(o=0),s(t.r,t.g,t.b,e,i,n,r,o)};t.exports={RGBWithRGB:s,ColorWithRGB:o,ColorWithColor:r}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){t/=255,e/=255,i/=255;var n=Math.min(t,e,i),s=Math.max(t,e,i),r=s-n,o=0,a=0===s?0:r/s,h=s;return s!==n&&(s===t?o=(e-i)/r+(e<i?6:0):s===e?o=(i-t)/r+2:s===i&&(o=(t-e)/r+4),o/=6),{h:o,s:a,v:h}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(234),s=function(t,e,i,s,r){return void 0===s&&(s=255),void 0===r&&(r="#"),"#"===r?"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1):"0x"+n(s)+n(t)+n(e)+n(i)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(311),s=i(46),r=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=255),new s(n(t,e),n(t,e),n(t,e))};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Align:i(513),Bounds:i(529),Canvas:i(532),Color:i(243),Masks:i(541)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BitmapMask:i(244),GeometryMask:i(245)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={AddToDOM:i(131),DOMContentLoaded:i(246),ParseXML:i(247),RemoveFromDOM:i(248),RequestAnimationFrame:i(249)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(12),r=i(13),o=new n({Extends:s,initialize:function(){s.call(this)},shutdown:function(){this.removeAllListeners()},destroy:function(){this.removeAllListeners()}});r.register("EventEmitter",o,"events"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(113),r=i(13),o=i(122),a=new n({Extends:s,initialize:function(t){s.call(this,t),this.sortChildrenFlag=!1,this.scene=t,this.systems=t.sys,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},start:function(){this.systems.events.once("shutdown",this.shutdown,this)},queueDepthSort:function(){this.sortChildrenFlag=!0},depthSort:function(){this.sortChildrenFlag&&(o.inplace(this.list,this.sortByDepth),this.sortChildrenFlag=!1)},sortByDepth:function(t,e){return t._depth-e._depth},sortGameObjects:function(t){return void 0===t&&(t=this.list),this.scene.sys.depthSort(),t.sort(this.sortIndexHandler.bind(this))},getTopGameObject:function(t){return this.sortGameObjects(t),t[t.length-1]},shutdown:function(){this.removeAll(),this.systems.events.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});r.register("DisplayList",a,"displayList"),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this._list=[],this._pendingInsertion=[],this._pendingRemoval=[],t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},start:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.once("shutdown",this.shutdown,this)},add:function(t){return-1===this._list.indexOf(t)&&-1===this._pendingInsertion.indexOf(t)&&this._pendingInsertion.push(t),t},preUpdate:function(){var t=this._pendingRemoval.length,e=this._pendingInsertion.length;if(0!==t||0!==e){var i,n;for(i=0;i<t;i++){n=this._pendingRemoval[i];var s=this._list.indexOf(n);s>-1&&this._list.splice(s,1)}this._list=this._list.concat(this._pendingInsertion.splice(0)),this._pendingRemoval.length=0,this._pendingInsertion.length=0}},update:function(t,e){for(var i=0;i<this._list.length;i++){var n=this._list[i];n.active&&n.preUpdate.call(n,t,e)}},remove:function(t){var e=this._list.indexOf(t);return-1!==e&&this._list.splice(e,1),t},removeAll:function(){for(var t=this._list.length;t--;)this.remove(this._list[t]);return this},shutdown:function(){this.removeAll(),this._list.length=0,this._pendingRemoval.length=0,this._pendingInsertion.length=0;var t=this.systems.events;t.off("preupdate",this.preUpdate,this),t.off("update",this.update,this),t.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});s.register("UpdateList",r,"updateList"),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(251),s=function(t,e,i,s,r,o,a){var h=t.sys.textures.getFrame(i,s),l=t.sys.cache.xml.get(r);if(h&&l){var u=n(l,o,a,h);return t.sys.cache.bitmapFont.add(e,{data:u,texture:i,frame:s}),!0}return!1};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=function(t,e){var i=e.width,s=e.height,r=Math.floor(i/2),o=Math.floor(s/2),a=n(e,"chars","");if(""!==a){var h=n(e,"image",""),l=n(e,"offset.x",0),u=n(e,"offset.y",0),c=n(e,"spacing.x",0),d=n(e,"spacing.y",0),f=n(e,"charsPerRow",null);null===f&&(f=t.sys.textures.getFrame(h).width/i)>a.length&&(f=a.length);for(var p=l,v=u,g={retroFont:!0,font:h,size:i,lineHeight:s,chars:{}},y=0,m=0;m<a.length;m++){var x=a.charCodeAt(m);g.chars[x]={x:p,y:v,width:i,height:s,centerX:r,centerY:o,xOffset:0,yOffset:0,xAdvance:i,data:{},kerning:{}},y++,y===f?(y=0,p=l,v+=s+d):p+=i+c}return{data:g,frame:null,texture:h}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(549),s=i(19),r={Parse:i(547)};r=s(!1,r,n),t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={TEXT_SET1:" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",TEXT_SET2:" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",TEXT_SET3:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",TEXT_SET4:"ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",TEXT_SET5:"ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",TEXT_SET6:"ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",TEXT_SET7:"AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",TEXT_SET8:"0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",TEXT_SET9:"ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",TEXT_SET10:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",TEXT_SET11:"ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789"};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){var o=e.text,a=o.length;if(!(n.RENDER_MASK!==e.renderFlags||0===a||e.cameraFilter>0&&e.cameraFilter&s._id)){var h=e.frame,l=e.displayCallback,u=s.scrollX*e.scrollFactorX,c=s.scrollY*e.scrollFactorY,d=e.fontData.chars,f=e.fontData.lineHeight,p=0,v=0,g=0,y=0,m=null,x=0,w=0,b=0,T=0,S=0,A=0,C=null,M=0,_=t.currentContext,E=e.frame.source.image,P=h.cutX,L=h.cutY,k=0,F=e.fontSize/e.fontData.size;if(t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,_.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,_.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode),_.save(),void 0!==r){var R=r.matrix;_.transform(R[0],R[1],R[2],R[3],R[4],R[5])}_.translate(e.x,e.y),_.rotate(e.rotation),_.translate(-e.displayOriginX,-e.displayOriginY),_.scale(e.scaleX,e.scaleY),e.cropWidth>0&&e.cropHeight>0&&(_.save(),_.beginPath(),_.rect(0,0,e.cropWidth,e.cropHeight),_.clip());for(var O=t.config.roundPixels,B=0;B<a;++B)if(F=e.fontSize/e.fontData.size,k=0,10!==(y=o.charCodeAt(B))){if(m=d[y]){if(x=P+m.x,w=L+m.y,b=m.width,T=m.height,S=g+m.xOffset+p-e.scrollX,A=m.yOffset+v-e.scrollY,null!==C){var D=m.kerning[M];S+=void 0!==D?D:0}if(l){var I=l({tint:{topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},index:B,charCode:y,x:S,y:A,scale:F,rotation:0,data:m.data});S=I.x,A=I.y,F=I.scale,k=I.rotation}S*=F,A*=F,S-=u,A-=c,O&&(S|=0,A|=0),_.save(),_.translate(S,A),_.rotate(k),_.scale(F,F),_.drawImage(E,x,w,b,T,0,0,b,T),_.restore(),p+=m.xAdvance,g+=1,C=m,M=y}}else p=0,g=0,v+=f,C=null;e.cropWidth>0&&e.cropHeight>0&&_.restore(),_.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(133),s=i(24),r=i(14),o=i(10);r.register("dynamicBitmapText",function(t,e){var i=o(t,"font",""),r=o(t,"text",""),a=o(t,"size",!1),h=o(t,"align","left"),l=new n(this.scene,0,0,i,r,a,h);return void 0!==e&&(t.add=e),s(this.scene,l,t),l})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(133);i(8).register("dynamicBitmapText",function(t,e,i,s,r){return this.displayList.add(new n(this.scene,t,e,i,s,r))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(554),s=i(550),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){var o=e.text,a=o.length;n.RENDER_MASK!==e.renderFlags||0===a||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchDynamicBitmapText(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){var o=e.text,a=o.length;if(!(n.RENDER_MASK!==e.renderFlags||0===a||e.cameraFilter>0&&e.cameraFilter&s._id)){var h=e.frame,l=e.fontData.chars,u=e.fontData.lineHeight,c=e.letterSpacing,d=0,f=0,p=0,v=0,g=null,y=0,m=0,x=0,w=0,b=0,T=0,S=null,A=0,C=t.currentContext,M=e.frame.source.image,_=h.cutX,E=h.cutY,P=e.fontSize/e.fontData.size;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,C.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,C.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode);var L=t.config.roundPixels,k=e.x-s.scrollX*e.scrollFactorX+e.frame.x,F=e.y-s.scrollY*e.scrollFactorY+e.frame.y;if(L&&(k|=0,F|=0),C.save(),void 0!==r){var R=r.matrix;C.transform(R[0],R[1],R[2],R[3],R[4],R[5])}C.translate(k,F),C.rotate(e.rotation),C.translate(-e.displayOriginX,-e.displayOriginY),C.scale(e.scaleX,e.scaleY);for(var O=0;O<a;++O)if(10!==(v=o.charCodeAt(O))){if(g=l[v]){if(y=_+g.x,m=E+g.y,x=g.width,w=g.height,b=p+g.xOffset+d,T=g.yOffset+f,null!==S){var B=g.kerning[A];b+=void 0!==B?B:0}b*=P,T*=P,d+=g.xAdvance+c,p+=1,S=g,A=v,0!==x&&0!==w&&32!==v&&(L&&(b|=0,T|=0),C.save(),C.translate(b,T),C.scale(P,P),C.drawImage(M,y,m,x,w,0,0,x,w),C.restore())}}else d=0,p=0,f+=u,S=null;C.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(134),s=i(24),r=i(14),o=i(10),a=i(5);r.register("bitmapText",function(t,e){var i=a(t,"font",""),r=o(t,"text",""),h=o(t,"size",!1),l=new n(this.scene,0,0,i,r,h);return void 0!==e&&(t.add=e),s(this.scene,l,t),l})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(134);i(8).register("bitmapText",function(t,e,i,s,r){return this.displayList.add(new n(this.scene,t,e,i,s,r))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(559),s=i(555),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){var o=e.text,a=o.length;n.RENDER_MASK!==e.renderFlags||0===a||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchBitmapText(this,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var o=e.getRenderList();t.setBlendMode(e.blendMode);var a=t.gameContext,h=e.x-s.scrollX*e.scrollFactorX,l=e.y-s.scrollY*e.scrollFactorY;if(a.save(),void 0!==r){var u=r.matrix;a.transform(u[0],u[1],u[2],u[3],u[4],u[5])}for(var c=0;c<o.length;c++){var d=o[c],f=d.flipX||d.flipY,p=d.frame,v=p.canvasData,g=p.x,y=p.y,m=1,x=1;f?(d.flipX&&(m=-1,g-=v.dWidth),d.flipY&&(x=-1,y-=v.dHeight),a.save(),a.translate(d.x+h,d.y+l),a.scale(m,x),a.drawImage(p.source.image,v.sx,v.sy,v.sWidth,v.sHeight,g,y,v.dWidth,v.dHeight),a.restore()):t.blitImage(g+d.x+h,y+d.y+l,d.frame)}a.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(135),s=i(24),r=i(14),o=i(10);r.register("blitter",function(t,e){var i=o(t,"key",null),r=o(t,"frame",null),a=new n(this.scene,0,0,i,r);return void 0!==e&&(t.add=e),s(this.scene,a,t),a})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(135);i(8).register("blitter",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(564),s=i(560),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.drawBlitter(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=new n({initialize:function(t,e,i,n,s){this.parent=t,this.x=e,this.y=i,this.frame=n,this.data={},this._visible=s,this._alpha=1,this.flipX=!1,this.flipY=!1},setFrame:function(t){return t=void 0===t?this.parent.frame:this.parent.texture.get(t),this},resetFlip:function(){return this.flipX=!1,this.flipY=!1,this},reset:function(t,e,i){return this.x=t,this.y=e,this.frame=i,this},setFlipX:function(t){return this.flipX=t,this},setFlipY:function(t){return this.flipY=t,this},setFlip:function(t,e){return this.flipX=t,this.flipY=e,this},setVisible:function(t){return this.visible=t,this},setAlpha:function(t){return this.alpha=t,this},destroy:function(){this.parent.dirty=!0,this.parent.children.remove(this),this.parent=void 0,this.frame=void 0,this.data=void 0},visible:{get:function(){return this._visible},set:function(t){this._visible=t,this.parent.dirty=!0}},alpha:{get:function(){return this._alpha},set:function(t){this._alpha=t,this.parent.dirty=!0}}});t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s={_alpha:1,_alphaTL:1,_alphaTR:1,_alphaBL:1,_alphaBR:1,clearAlpha:function(){return this.setAlpha(1)},setAlpha:function(t,e,i,s){return void 0===t&&(t=1),void 0===e?this.alpha=t:(this._alphaTL=n(t,0,1),this._alphaTR=n(e,0,1),this._alphaBL=n(i,0,1),this._alphaBR=n(s,0,1)),this},alpha:{get:function(){return this._alpha},set:function(t){var e=n(t,0,1);this._alpha=e,this._alphaTL=e,this._alphaTR=e,this._alphaBL=e,this._alphaBR=e,0===e?this.renderFlags&=-3:this.renderFlags|=2}},alphaTopLeft:{get:function(){return this._alphaTL},set:function(t){var e=n(t,0,1);this._alphaTL=e,0!==e&&(this.renderFlags|=2)}},alphaTopRight:{get:function(){return this._alphaTR},set:function(t){var e=n(t,0,1);this._alphaTR=e,0!==e&&(this.renderFlags|=2)}},alphaBottomLeft:{get:function(){return this._alphaBL},set:function(t){var e=n(t,0,1);this._alphaBL=e,0!==e&&(this.renderFlags|=2)}},alphaBottomRight:{get:function(){return this._alphaBR},set:function(t){var e=n(t,0,1);this._alphaBR=e,0!==e&&(this.renderFlags|=2)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(74),s={_blendMode:n.NORMAL,blendMode:{get:function(){return this._blendMode},set:function(t){"string"==typeof t&&(t=n[t]),(t|=0)>=0&&(this._blendMode=t)}},setBlendMode:function(t){return this.blendMode=t,this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={width:0,height:0,displayWidth:{get:function(){return this.scaleX*this.width},set:function(t){this.scaleX=t/this.width}},displayHeight:{get:function(){return this.scaleY*this.height},set:function(t){this.scaleY=t/this.height}},setSize:function(t,e){return this.width=t,this.height=e,this},setDisplaySize:function(t,e){return this.displayWidth=t,this.displayHeight=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={_depth:0,depth:{get:function(){return this._depth},set:function(t){this.scene.sys.queueDepthSort(),this._depth=t}},setDepth:function(t){return void 0===t&&(t=0),this.depth=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={flipX:!1,flipY:!1,toggleFlipX:function(){return this.flipX=!this.flipX,this},toggleFlipY:function(){return this.flipY=!this.flipY,this},setFlipX:function(t){return this.flipX=t,this},setFlipY:function(t){return this.flipY=t,this},setFlip:function(t,e){return this.flipX=t,this.flipY=e,this},resetFlip:function(){return this.flipX=!1,this.flipY=!1,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=i(319),r=i(4),o={getCenter:function(t){return void 0===t&&(t=new r),t.x=this.x-this.displayWidth*this.originX+this.displayWidth/2,t.y=this.y-this.displayHeight*this.originY+this.displayHeight/2,t},getTopLeft:function(t,e){if(t||(t=new r),void 0===e&&(e=!1),t.x=this.x-this.displayWidth*this.originX,t.y=this.y-this.displayHeight*this.originY,0!==this.rotation&&s(t,this.x,this.y,this.rotation),e&&this.parentContainer){this.parentContainer.getBoundsTransformMatrix().transformPoint(t.x,t.y,t)}return t},getTopRight:function(t,e){if(t||(t=new r),void 0===e&&(e=!1),t.x=this.x-this.displayWidth*this.originX+this.displayWidth,t.y=this.y-this.displayHeight*this.originY,0!==this.rotation&&s(t,this.x,this.y,this.rotation),e&&this.parentContainer){this.parentContainer.getBoundsTransformMatrix().transformPoint(t.x,t.y,t)}return t},getBottomLeft:function(t,e){if(t||(t=new r),void 0===e&&(e=!1),t.x=this.x-this.displayWidth*this.originX,t.y=this.y-this.displayHeight*this.originY+this.displayHeight,0!==this.rotation&&s(t,this.x,this.y,this.rotation),e&&this.parentContainer){this.parentContainer.getBoundsTransformMatrix().transformPoint(t.x,t.y,t)}return t},getBottomRight:function(t,e){if(t||(t=new r),void 0===e&&(e=!1),t.x=this.x-this.displayWidth*this.originX+this.displayWidth,t.y=this.y-this.displayHeight*this.originY+this.displayHeight,0!==this.rotation&&s(t,this.x,this.y,this.rotation),e&&this.parentContainer){this.parentContainer.getBoundsTransformMatrix().transformPoint(t.x,t.y,t)}return t},getBounds:function(t){void 0===t&&(t=new n);var e,i,s,r,o,a,h,l;if(this.parentContainer){var u=this.parentContainer.getBoundsTransformMatrix();this.getTopLeft(t),u.transformPoint(t.x,t.y,t),e=t.x,i=t.y,this.getTopRight(t),u.transformPoint(t.x,t.y,t),s=t.x,r=t.y,this.getBottomLeft(t),u.transformPoint(t.x,t.y,t),o=t.x,a=t.y,this.getBottomRight(t),u.transformPoint(t.x,t.y,t),h=t.x,l=t.y}else this.getTopLeft(t),e=t.x,i=t.y,this.getTopRight(t),s=t.x,r=t.y,this.getBottomLeft(t),o=t.x,a=t.y,this.getBottomRight(t),h=t.x,l=t.y;return t.x=Math.min(e,s,o,h),t.y=Math.min(i,r,a,l),t.width=Math.max(e,s,o,h)-t.x,t.height=Math.max(i,r,a,l)-t.y,t}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(244),s=i(245),r={mask:null,setMask:function(t){return this.mask=t,this},clearMask:function(t){return void 0===t&&(t=!1),t&&this.mask.destroy(),this.mask=null,this},createBitmapMask:function(t){return void 0===t&&this.texture&&(t=this),new n(this.scene,t)},createGeometryMask:function(t){return void 0===t&&"Graphics"===this.type&&(t=this),new s(this.scene,t)}};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={matrixStack:null,currentMatrix:null,currentMatrixIndex:0,initMatrixStack:function(){return this.matrixStack=new Float32Array(6e3),this.currentMatrix=new Float32Array([1,0,0,1,0,0]),this.currentMatrixIndex=0,this},save:function(){if(this.currentMatrixIndex>=this.matrixStack.length)return this;var t=this.matrixStack,e=this.currentMatrix,i=this.currentMatrixIndex;return this.currentMatrixIndex+=6,t[i+0]=e[0],t[i+1]=e[1],t[i+2]=e[2],t[i+3]=e[3],t[i+4]=e[4],t[i+5]=e[5],this},restore:function(){if(this.currentMatrixIndex<=0)return this;this.currentMatrixIndex-=6;var t=this.matrixStack,e=this.currentMatrix,i=this.currentMatrixIndex;return e[0]=t[i+0],e[1]=t[i+1],e[2]=t[i+2],e[3]=t[i+3],e[4]=t[i+4],e[5]=t[i+5],this},loadIdentity:function(){return this.setTransform(1,0,0,1,0,0),this},transform:function(t,e,i,n,s,r){var o=this.currentMatrix,a=o[0],h=o[1],l=o[2],u=o[3],c=o[4],d=o[5];return o[0]=a*t+l*e,o[1]=h*t+u*e,o[2]=a*i+l*n,o[3]=h*i+u*n,o[4]=a*s+l*r+c,o[5]=h*s+u*r+d,this},setTransform:function(t,e,i,n,s,r){var o=this.currentMatrix;return o[0]=t,o[1]=e,o[2]=i,o[3]=n,o[4]=s,o[5]=r,this},translate:function(t,e){var i=this.currentMatrix,n=i[0],s=i[1],r=i[2],o=i[3],a=i[4],h=i[5];return i[4]=n*t+r*e+a,i[5]=s*t+o*e+h,this},scale:function(t,e){var i=this.currentMatrix,n=i[0],s=i[1],r=i[2],o=i[3];return i[0]=n*t,i[1]=s*t,i[2]=r*e,i[3]=o*e,this},rotate:function(t){var e=this.currentMatrix,i=e[0],n=e[1],s=e[2],r=e[3],o=Math.sin(t),a=Math.cos(t);return e[0]=i*a+s*o,e[1]=n*a+r*o,e[2]=i*-o+s*a,e[3]=n*-o+r*a,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={_originComponent:!0,originX:.5,originY:.5,_displayOriginX:0,_displayOriginY:0,displayOriginX:{get:function(){return this._displayOriginX},set:function(t){this._displayOriginX=t,this.originX=t/this.width}},displayOriginY:{get:function(){return this._displayOriginY},set:function(t){this._displayOriginY=t,this.originY=t/this.height}},setOrigin:function(t,e){return void 0===t&&(t=.5),void 0===e&&(e=t),this.originX=t,this.originY=e,this.updateDisplayOrigin()},setOriginFromFrame:function(){return this.frame&&this.frame.customPivot?(this.originX=this.frame.pivotX,this.originY=this.frame.pivotY,this.updateDisplayOrigin()):this.setOrigin()},setDisplayOrigin:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.displayOriginX=t,this.displayOriginY=e,this},updateDisplayOrigin:function(){return this._displayOriginX=Math.round(this.originX*this.width),this._displayOriginY=Math.round(this.originY*this.height),this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(88),s={_scaleMode:n.DEFAULT,scaleMode:{get:function(){return this._scaleMode},set:function(t){t!==n.LINEAR&&t!==n.NEAREST||(this._scaleMode=t)}},setScaleMode:function(t){return this.scaleMode=t,this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={scrollFactorX:1,scrollFactorY:1,setScrollFactor:function(t,e){return void 0===e&&(e=t),this.scrollFactorX=t,this.scrollFactorY=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={_sizeComponent:!0,width:0,height:0,displayWidth:{get:function(){return this.scaleX*this.frame.realWidth},set:function(t){this.scaleX=t/this.frame.realWidth}},displayHeight:{get:function(){return this.scaleY*this.frame.realHeight},set:function(t){this.scaleY=t/this.frame.realHeight}},setSizeToFrame:function(t){return void 0===t&&(t=this.frame),this.width=t.realWidth,this.height=t.realHeight,this},setSize:function(t,e){return this.width=t,this.height=e,this},setDisplaySize:function(t,e){return this.displayWidth=t,this.displayHeight=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={texture:null,frame:null,setTexture:function(t,e){return this.texture=this.scene.sys.textures.get(t),this.setFrame(e)},setFrame:function(t,e,i){return void 0===e&&(e=!0),void 0===i&&(i=!0),this.frame=this.texture.get(t),this.frame.cutWidth&&this.frame.cutHeight?this.renderFlags|=8:this.renderFlags&=-9,this._sizeComponent&&e&&this.setSizeToFrame(),this._originComponent&&i&&(this.frame.customPivot?this.setOrigin(this.frame.pivotX,this.frame.pivotY):this.updateDisplayOrigin()),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t>>16)+(65280&t)+((255&t)<<16)},n={_tintTL:16777215,_tintTR:16777215,_tintBL:16777215,_tintBR:16777215,clearTint:function(){return this.setTint(16777215),this},setTint:function(t,e,n,s){return void 0===t&&(t=16777215),void 0===e&&(e=t,n=t,s=t),this._tintTL=i(t),this._tintTR=i(e),this._tintBL=i(n),this._tintBR=i(s),this},tintTopLeft:{get:function(){return this._tintTL},set:function(t){this._tintTL=i(t)}},tintTopRight:{get:function(){return this._tintTR},set:function(t){this._tintTR=i(t)}},tintBottomLeft:{get:function(){return this._tintBL},set:function(t){this._tintBL=i(t)}},tintBottomRight:{get:function(){return this._tintBR},set:function(t){this._tintBR=i(t)}},tint:{set:function(t){this.setTint(t,t,t,t)}}};t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e={name:t.name,type:t.type,x:t.x,y:t.y,depth:t.depth,scale:{x:t.scaleX,y:t.scaleY},origin:{x:t.originX,y:t.originY},flipX:t.flipX,flipY:t.flipY,rotation:t.rotation,alpha:t.alpha,visible:t.visible,scaleMode:t.scaleMode,blendMode:t.blendMode,textureKey:"",frameKey:"",data:{}};return t.texture&&(e.textureKey=t.texture.key,e.frameKey=t.frame.name),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(79),r=i(171),o=i(172),a={_scaleX:1,_scaleY:1,_rotation:0,x:0,y:0,z:0,w:0,scaleX:{get:function(){return this._scaleX},set:function(t){this._scaleX=t,0===this._scaleX?this.renderFlags&=-5:this.renderFlags|=4}},scaleY:{get:function(){return this._scaleY},set:function(t){this._scaleY=t,0===this._scaleY?this.renderFlags&=-5:this.renderFlags|=4}},angle:{get:function(){return o(this._rotation*n.RAD_TO_DEG)},set:function(t){this.rotation=o(t)*n.DEG_TO_RAD}},rotation:{get:function(){return this._rotation},set:function(t){this._rotation=r(t)}},setPosition:function(t,e,i,n){return void 0===t&&(t=0),void 0===e&&(e=t),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.z=i,this.w=n,this},setRotation:function(t){return void 0===t&&(t=0),this.rotation=t,this},setAngle:function(t){return void 0===t&&(t=0),this.angle=t,this},setScale:function(t,e){return void 0===t&&(t=1),void 0===e&&(e=t),this.scaleX=t,this.scaleY=e,this},setX:function(t){return void 0===t&&(t=0),this.x=t,this},setY:function(t){return void 0===t&&(t=0),this.y=t,this},setZ:function(t){return void 0===t&&(t=0),this.z=t,this},setW:function(t){return void 0===t&&(t=0),this.w=t,this},getLocalTransformMatrix:function(t){return void 0===t&&(t=new s),t.applyITRS(this.x,this.y,this._rotation,this._scaleX,this._scaleY)},getWorldTransformMatrix:function(t){void 0===t&&(t=new s);var e=this.parentContainer;if(!e)return this.getLocalTransformMatrix(t);for(var i=[];e;)i.unshift(e),e=e.parentContainer;t.loadIdentity();for(var n=i.length,r=0;r<n;++r)e=i[r],t.translate(e.x,e.y),t.rotate(e.rotation),t.scale(e.scaleX,e.scaleY);return t.translate(this.x,this.y),t.rotate(this._rotation),t.scale(this._scaleX,this._scaleY),t}};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={_visible:!0,visible:{get:function(){return this._visible},set:function(t){t?(this._visible=!0,this.renderFlags|=1):(this._visible=!1,this.renderFlags&=-2)}},setVisible:function(t){return this.visible=t,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var o=e.list,a=e.localTransform;void 0===r?a.applyITRS(e.x,e.y,e.rotation,e.scaleX,e.scaleY):(a.loadIdentity(),a.multiply(r),a.translate(e.x,e.y),a.rotate(e.rotation),a.scale(e.scaleX,e.scaleY));for(var h=e._alpha,l=e.scrollFactorX,u=e.scrollFactorY,c=0;c<o.length;++c){var d=o[c],f=d._alpha,p=d.scrollFactorX,v=d.scrollFactorY;d.setScrollFactor(p*l,v*u),d.setAlpha(f*h),d.renderCanvas(t,d,i,s,a),d.setAlpha(f),d.setScrollFactor(p,v)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(137),r=i(14),o=i(10);r.register("container",function(t,e){var i=o(t,"x",0),r=o(t,"y",0),a=new s(this.scene,i,r);return void 0!==e&&(t.add=e),n(this.scene,a,t),a})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(137);i(8).register("container",function(t,e,i){return this.displayList.add(new n(this.scene,t,e,i))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(587),s=i(583),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var o=e.list,a=e.localTransform;void 0===r?a.applyITRS(e.x,e.y,e.rotation,e.scaleX,e.scaleY):(a.loadIdentity(),a.multiply(r),a.translate(e.x,e.y),a.rotate(e.rotation),a.scale(e.scaleX,e.scaleY));for(var h=e._alpha,l=e.scrollFactorX,u=e.scrollFactorY,c=0;c<o.length;++c){var d=o[c],f=d._alpha,p=d.scrollFactorX,v=d.scrollFactorY;d.setScrollFactor(p*l,v*u),d.setAlpha(f*h),d.renderWebGL(t,d,i,s,a),d.setAlpha(f),d.setScrollFactor(p,v)}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(139);n.register("graphics",function(t,e){void 0!==e&&(t.add=e);var i=new s(this.scene,t);return t.add&&this.scene.sys.displayList.add(i),i})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(139);i(8).register("graphics",function(t){return this.displayList.add(new n(this.scene,t))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(591),s=i(253),s=i(253),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchGraphics(this,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(80);n.register("group",function(t){return new s(this.scene,null,t)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(80);i(8).register("group",function(t,e){return"object"==typeof t&&void 0===e&&(e=t,t=[]),this.updateList.add(new n(this.scene,t,e))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||t.drawImage(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(14),r=i(10),o=i(67);s.register("image",function(t,e){var i=r(t,"key",null),s=r(t,"frame",null),a=new o(this.scene,0,0,i,s);return void 0!==e&&(t.add=e),n(this.scene,a,t),a})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(67);i(8).register("image",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(598),s=i(594),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchSprite(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n={DisplayList:i(544),GameObjectCreator:i(14),GameObjectFactory:i(8),UpdateList:i(545),Components:i(15),BuildGameObject:i(24),BuildGameObjectAnimation:i(132),GameObject:i(2),BitmapText:i(134),Blitter:i(135),Container:i(137),DynamicBitmapText:i(133),Graphics:i(139),Group:i(80),Image:i(67),Particles:i(612),PathFollower:i(262),RenderTexture:i(142),RetroFont:i(548),Sprite3D:i(100),Sprite:i(39),Text:i(143),TileSprite:i(144),Zone:i(101),Factories:{Blitter:i(562),Container:i(585),DynamicBitmapText:i(552),Graphics:i(589),Group:i(593),Image:i(596),Particles:i(609),PathFollower:i(614),RenderTexture:i(620),Sprite3D:i(630),Sprite:i(626),StaticBitmapText:i(557),Text:i(636),TileSprite:i(641),Zone:i(645)},Creators:{Blitter:i(561),Container:i(584),DynamicBitmapText:i(551),Graphics:i(588),Group:i(592),Image:i(595),Particles:i(608),RenderTexture:i(619),Sprite3D:i(629),Sprite:i(625),StaticBitmapText:i(556),Text:i(635),TileSprite:i(640),Zone:i(644)}};n.Mesh=i(99),n.Quad=i(141),n.Factories.Mesh=i(603),n.Factories.Quad=i(616),n.Creators.Mesh=i(602),n.Creators.Quad=i(615),n.Light=i(254),i(255),i(600),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(255),r=i(13),o=new n({Extends:s,initialize:function(t){this.scene=t,this.systems=t.sys,t.sys.settings.isBooted||t.sys.events.once("boot",this.boot,this),s.call(this)},boot:function(){var t=this.systems.events;t.on("shutdown",this.shutdown,this),t.on("destroy",this.destroy,this)},destroy:function(){this.shutdown(),this.scene=void 0,this.systems=void 0}});r.register("LightsPlugin",o,"lights"),t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(){};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(14),r=i(10),o=i(5),a=i(99);s.register("mesh",function(t,e){var i=r(t,"key",null),s=r(t,"frame",null),h=o(t,"vertices",[]),l=o(t,"colors",[]),u=o(t,"alphas",[]),c=o(t,"uv",[]),d=new a(this.scene,0,0,h,c,l,u,i,s);return void 0!==e&&(t.add=e),n(this.scene,d,t),d})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(99);i(8).register("mesh",function(t,e,i,s,r,o,a,h){return this.displayList.add(new n(this.scene,t,e,i,s,r,o,a,h))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(605),s=i(601),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchMesh(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(313),r=i(94),o=i(1),a=i(49),h=new n({initialize:function(t,e,i,n){void 0===n&&(n=!1),this.propertyKey=e,this.propertyValue=i,this.defaultValue=i,this.steps=0,this.counter=0,this.start=0,this.end=0,this.ease,this.emitOnly=n,this.onEmit=this.defaultEmit,this.onUpdate=this.defaultUpdate,this.loadConfig(t)},loadConfig:function(t,e){void 0===t&&(t={}),e&&(this.propertyKey=e),this.propertyValue=o(t,this.propertyKey,this.defaultValue),this.setMethods(),this.emitOnly&&(this.onUpdate=this.defaultUpdate)},toJSON:function(){return this.propertyValue},onChange:function(t){return this.propertyValue=t,this.setMethods()},setMethods:function(){var t=this.propertyValue,e=typeof t;if("number"===e)this.onEmit=this.staticValueEmit,this.onUpdate=this.staticValueUpdate;else if(Array.isArray(t))this.onEmit=this.randomStaticValueEmit;else if("function"===e)this.emitOnly?this.onEmit=t:this.onUpdate=t;else if("object"===e&&(this.has(t,"random")||this.hasBoth(t,"start","end")||this.hasBoth(t,"min","max"))){this.start=this.has(t,"start")?t.start:t.min,this.end=this.has(t,"end")?t.end:t.max;var i=this.hasBoth(t,"min","max")||this.has(t,"random");if(i){var n=t.random;Array.isArray(n)&&(this.start=n[0],this.end=n[1]),this.onEmit=this.randomRangedValueEmit}if(this.has(t,"steps"))this.steps=t.steps,this.counter=this.start,this.onEmit=this.steppedEmit;else{var s=this.has(t,"ease")?t.ease:"Linear";this.ease=r(s),i||(this.onEmit=this.easedValueEmit),this.onUpdate=this.easeValueUpdate}}else"object"===e&&this.hasEither(t,"onEmit","onUpdate")&&(this.has(t,"onEmit")&&(this.onEmit=t.onEmit),this.has(t,"onUpdate")&&(this.onUpdate=t.onUpdate));return this},has:function(t,e){return t.hasOwnProperty(e)},hasBoth:function(t,e,i){return t.hasOwnProperty(e)&&t.hasOwnProperty(i)},hasEither:function(t,e,i){return t.hasOwnProperty(e)||t.hasOwnProperty(i)},defaultEmit:function(t,e,i){return i},defaultUpdate:function(t,e,i,n){return n},staticValueEmit:function(){return this.propertyValue},staticValueUpdate:function(){return this.propertyValue},randomStaticValueEmit:function(){var t=Math.floor(Math.random()*this.propertyValue.length);return this.propertyValue[t]},randomRangedValueEmit:function(t,e){var i=s(this.start,this.end);return t&&t.data[e]&&(t.data[e].min=i),i},steppedEmit:function(){var t=this.counter,e=this.counter+(this.end-this.start)/this.steps;return this.counter=a(e,this.start,this.end),t},easedValueEmit:function(t,e){if(t&&t.data[e]){var i=t.data[e];i.min=this.start,i.max=this.end}return this.start},easeValueUpdate:function(t,e,i){var n=t.data[e];return(n.max-n.min)*this.ease(i)+n.min}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){var o=e.emitters.list;if(!(0===o.length||n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var a=t.currentContext;if(a.save(),void 0!==r){var h=r.matrix;a.transform(h[0],h[1],h[2],h[3],h[4],h[5])}for(var l=0;l<o.length;l++){var u=o[l],c=u.alive,d=c.length;if(u.visible&&0!==d){var f=a.globalAlpha,p=s.scrollX*u.scrollFactorX,v=s.scrollY*u.scrollFactorY;t.currentBlendMode!==u.blendMode&&(t.currentBlendMode=u.blendMode,a.globalCompositeOperation=t.blendModes[u.blendMode]);for(var g=t.config.roundPixels,y=0;y<d;++y){var m=c[y],x=(m.color>>24&255)/255;if(!(x<=0)){var w=m.frame,b=w.width,T=w.height,S=.5*b,A=.5*T,C=w.canvasData,M=-S,_=-A,E=m.x-p,P=m.y-v;g&&(E|=0,P|=0),a.globalAlpha=x,a.save(),a.translate(E,P),a.rotate(m.rotation),a.scale(m.scaleX,m.scaleY),a.drawImage(w.source.image,C.sx,C.sy,C.sWidth,C.sHeight,M,_,C.dWidth,C.dHeight),a.restore()}}a.globalAlpha=f}}a.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(10),r=i(1),o=i(140);n.register("particles",function(t,e){var i=s(t,"key",null),n=s(t,"frame",null),a=r(t,"emitters",null),h=new o(this.scene,i,n,a);return void 0!==e&&(t.add=e),r(t,"add",!1)&&this.displayList.add(h),this.updateList.add(h),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(140);n.register("particles",function(t,e,i){var n=new s(this.scene,t,e,i);return this.displayList.add(n),this.updateList.add(n),n})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(611),s=i(607),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){0===e.emitters.length||n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.drawEmitterManager(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GravityWell:i(256),Particle:i(257),ParticleEmitter:i(258),ParticleEmitterManager:i(140),Zones:i(613)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DeathZone:i(259),EdgeZone:i(260),RandomZone:i(261)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(262);n.register("follower",function(t,e,i,n,r){var o=new s(this.scene,t,e,i,n,r);return this.displayList.add(o),this.updateList.add(o),o})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(14),r=i(10),o=i(141);s.register("quad",function(t,e){var i=r(t,"x",0),s=r(t,"y",0),a=r(t,"key",null),h=r(t,"frame",null),l=new o(this.scene,i,s,a,h);return void 0!==e&&(t.add=e),n(this.scene,l,t),l})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(141);i(8).register("quad",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e){var i={fill:function(t){var e=255&(t>>16|0),i=255&(t>>8|0),n=255&(0|t);return this.context.fillStyle="rgb("+e+","+i+","+n+")",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this},clear:function(){return this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.restore(),this},draw:function(t,e,i,n){var s=this.currentMatrix;return this.context.globalAlpha=this.globalAlpha,this.context.setTransform(s[0],s[1],s[2],s[3],s[4],s[5]),this.context.drawImage(t.source[e.sourceIndex].image,e.cutX,e.cutY,e.cutWidth,e.cutHeight,i,n,e.cutWidth,e.cutWidth),this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var o=t.currentContext;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,o.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,o.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode);var a=0,h=0,l=1,u=1;if(e.flipX?(l=-1,a-=e.canvas.width-e.displayOriginX):a-=e.displayOriginX,e.flipY?(u=-1,h-=e.canvas.height-e.displayOriginY):h-=e.displayOriginY,o.save(),void 0!==r){var c=r.matrix;o.transform(c[0],c[1],c[2],c[3],c[4],c[5])}o.translate(e.x-s.scrollX*e.scrollFactorX,e.y-s.scrollY*e.scrollFactorY),o.rotate(e.rotation),o.scale(e.scaleX,e.scaleY),o.scale(l,u),o.drawImage(e.canvas,a,h),o.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(14),r=i(10),o=i(142);s.register("renderTexture",function(t,e){var i=r(t,"x",0),s=r(t,"y",0),a=r(t,"width",32),h=r(t,"height",32),l=new o(this.scene,i,s,a,h);return void 0!==e&&(t.add=e),n(this.scene,l,t),l})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(142);n.register("renderTexture",function(t,e,i,n){return this.displayList.add(new s(this.scene,t,e,i,n))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(623),s=i(618),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e){var i={fill:function(t){var e=255&(t>>16|0),i=255&(t>>8|0),n=255&(0|t);this.renderer.setFramebuffer(this.framebuffer);var s=this.gl;return s.clearColor(e/255,i/255,n/255,1),s.clear(s.COLOR_BUFFER_BIT),this.renderer.setFramebuffer(null),this},clear:function(){this.renderer.setFramebuffer(this.framebuffer);var t=this.gl;return t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),this.renderer.setFramebuffer(null),this},draw:function(t,e,i,n){var s=t.source[e.sourceIndex].glTexture,r=(this.globalTint>>16)+(65280&this.globalTint)+((255&this.globalTint)<<16);return this.renderer.setFramebuffer(this.framebuffer),this.renderer.pipelines.TextureTintPipeline.projOrtho(0,this.renderer.pipelines.TextureTintPipeline.width,0,this.renderer.pipelines.TextureTintPipeline.height,-1e3,1e3),this.renderer.pipelines.TextureTintPipeline.drawTexture(s,i,n,r,this.globalAlpha,e.cutX,e.cutY,e.cutWidth,e.cutHeight,this.currentMatrix,null,this),this.renderer.setFramebuffer(null),this.renderer.pipelines.TextureTintPipeline.projOrtho(0,this.renderer.pipelines.TextureTintPipeline.width,this.renderer.pipelines.TextureTintPipeline.height,0,-1e3,1e3),this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=i(44),r=function(t,e,i,r,o){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&r._id||this.pipeline.batchTexture(e,e.texture,e.texture.width,e.texture.height,e.x,e.y,e.width,e.height,e.scaleX,e.scaleY,e.rotation,e.flipX,!e.flipY,e.scrollFactorX,e.scrollFactorY,e.displayOriginX,e.displayOriginY,0,0,e.texture.width,e.texture.height,s.getTintAppendFloatAlpha(e.tintTopLeft,e.alphaTopLeft),s.getTintAppendFloatAlpha(e.tintTopRight,e.alphaTopRight),s.getTintAppendFloatAlpha(e.tintBottomLeft,e.alphaBottomLeft),s.getTintAppendFloatAlpha(e.tintBottomRight,e.alphaBottomRight),0,0,r,o)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||t.drawImage(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(132),r=i(14),o=i(10),a=i(39);r.register("sprite",function(t,e){var i=o(t,"key",null),r=o(t,"frame",null),h=new a(this.scene,0,0,i,r);return void 0!==e&&(t.add=e),n(this.scene,h,t),s(h,t),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(39);n.register("sprite",function(t,e,i,n){var r=new s(this.scene,t,e,i,n);return this.displayList.add(r),this.updateList.add(r),r})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(628),s=i(624),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||this.pipeline.batchSprite(e,s,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(132),r=i(14),o=i(10),a=i(100);r.register("sprite3D",function(t,e){var i=o(t,"key",null),r=o(t,"frame",null),h=new a(this.scene,0,0,i,r);return void 0!==e&&(t.add=e),n(this.scene,h,t),s(h,t),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(100);i(8).register("sprite3D",function(t,e,i,s,r){var o=new n(this.scene,t,e,i,s,r);return this.displayList.add(o.gameObject),this.updateList.add(o.gameObject),o})},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=t.canvas,s=t.context,r=t.style,o=[],a=0,h=i.length;r.maxLines>0&&r.maxLines<i.length&&(h=r.maxLines),r.syncFont(n,s);for(var l=0;l<h;l++){var u=r.strokeThickness;u+=s.measureText(i[l]).width,r.wordWrap&&(u-=s.measureText(" ").width),o[l]=Math.ceil(u),a=Math.max(a,o[l])}var c=e.fontSize+r.strokeThickness,d=c*h,f=t._lineSpacing||0;return f<0&&Math.abs(f)>c&&(f=-c),0!==f&&(d+=f>0?f*i.length:f*(i.length-1)),{width:a,height:d,lines:h,lineWidths:o,lineSpacing:f,lineHeight:c}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(26),s=function(t){var e=n.create(this),i=e.getContext("2d");t.syncFont(e,i);var s=Math.ceil(i.measureText(t.testString).width*t.baselineX),r=s,o=2*r;r=r*t.baselineY|0,e.width=s,e.height=o,i.fillStyle="#f00",i.fillRect(0,0,s,o),i.font=t._font,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(t.testString,0,r);var a={ascent:0,descent:0,fontSize:0};if(!i.getImageData(0,0,s,o))return a.ascent=r,a.descent=r+6,a.fontSize=a.ascent+a.descent,n.remove(e),a;var h,l,u=i.getImageData(0,0,s,o).data,c=u.length,d=4*s,f=0,p=!1;for(h=0;h<r;h++){for(l=0;l<d;l+=4)if(255!==u[f+l]){p=!0;break}if(p)break;f+=d}for(a.ascent=r-h,f=c-d,p=!1,h=o;h>r;h--){for(l=0;l<d;l+=4)if(255!==u[f+l]){p=!0;break}if(p)break;f-=d}return a.descent=h-r,a.fontSize=a.ascent+a.descent,n.remove(e),a};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(10),r=i(5),o=i(632),a={fontFamily:["fontFamily","Courier"],fontSize:["fontSize","16px"],fontStyle:["fontStyle",""],backgroundColor:["backgroundColor",null],color:["color","#fff"],stroke:["stroke","#fff"],strokeThickness:["strokeThickness",0],shadowOffsetX:["shadow.offsetX",0],shadowOffsetY:["shadow.offsetY",0],shadowColor:["shadow.color","#000"],shadowBlur:["shadow.blur",0],shadowStroke:["shadow.stroke",!1],shadowFill:["shadow.fill",!1],align:["align","left"],maxLines:["maxLines",0],fixedWidth:["fixedWidth",0],fixedHeight:["fixedHeight",0],rtl:["rtl",!1],testString:["testString","|MÃ‰qgy"],baselineX:["baselineX",1.2],baselineY:["baselineY",1.4],wordWrapWidth:["wordWrap.width",null],wordWrapCallback:["wordWrap.callback",null],wordWrapCallbackScope:["wordWrap.callbackScope",null],wordWrapUseAdvanced:["wordWrap.useAdvancedWrap",!1]},h=new n({initialize:function(t,e){this.parent=t,this.fontFamily,this.fontSize,this.fontStyle,this.backgroundColor,this.color,this.stroke,this.strokeThickness,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor,this.shadowBlur,this.shadowStroke,this.shadowFill,this.align,this.maxLines,this.fixedWidth,this.fixedHeight,this.rtl,this.testString,this.baselineX,this.baselineY,this._font,this.setStyle(e,!1);var i=r(e,"metrics",!1);this.metrics=i?{ascent:r(i,"ascent",0),descent:r(i,"descent",0),fontSize:r(i,"fontSize",0)}:o(this)},setStyle:function(t,e){void 0===e&&(e=!0),t&&t.hasOwnProperty("fontSize")&&"number"==typeof t.fontSize&&(t.fontSize=t.fontSize.toString()+"px");for(var i in a)this[i]="wordWrapCallback"===i||"wordWrapCallbackScope"===i?r(t,a[i][0],a[i][1]):s(t,a[i][0],a[i][1]);var n=r(t,"font",null);this._font=null===n?[this.fontStyle,this.fontSize,this.fontFamily].join(" "):n;var o=r(t,"fill",null);return null!==o&&(this.color=o),e?this.update(!0):this.parent},syncFont:function(t,e){e.font=this._font},syncStyle:function(t,e){e.textBaseline="alphabetic",e.fillStyle=this.color,e.strokeStyle=this.stroke,e.lineWidth=this.strokeThickness,e.lineCap="round",e.lineJoin="round"},syncShadow:function(t,e){e?(t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY,t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur):(t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowColor=0,t.shadowBlur=0)},update:function(t){return t&&(this._font=[this.fontStyle,this.fontSize,this.fontFamily].join(" "),this.metrics=o(this)),this.parent.updateText()},setFont:function(t){return"string"==typeof t?(this.fontFamily=t,this.fontSize="",this.fontStyle=""):(this.fontFamily=r(t,"fontFamily","Courier"),this.fontSize=r(t,"fontSize","16px"),this.fontStyle=r(t,"fontStyle","")),this.update(!0)},setFontFamily:function(t){return this.fontFamily=t,this.update(!0)},setFontStyle:function(t){return this.fontStyle=t,this.update(!0)},setFontSize:function(t){return"number"==typeof t&&(t=t.toString()+"px"),this.fontSize=t,this.update(!0)},setTestString:function(t){return this.testString=t,this.update(!0)},setFixedSize:function(t,e){return this.fixedWidth=t,this.fixedHeight=e,t&&(this.parent.width=t),e&&(this.parent.height=e),this.update(!1)},setBackgroundColor:function(t){return this.backgroundColor=t,this.update(!1)},setFill:function(t){return this.color=t,this.update(!1)},setColor:function(t){return this.color=t,this.update(!1)},setStroke:function(t,e){return void 0===t?this.strokeThickness=0:(void 0===e&&(e=this.strokeThickness),this.stroke=t,this.strokeThickness=e),this.update(!0)},setShadow:function(t,e,i,n,s,r){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i="#000"),void 0===n&&(n=0),void 0===s&&(s=!1),void 0===r&&(r=!0),this.shadowOffsetX=t,this.shadowOffsetY=e,this.shadowColor=i,this.shadowBlur=n,this.shadowStroke=s,this.shadowFill=r,this.update(!1)},setShadowOffset:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.shadowOffsetX=t,this.shadowOffsetY=e,this.update(!1)},setShadowColor:function(t){return void 0===t&&(t="#000"),this.shadowColor=t,this.update(!1)},setShadowBlur:function(t){return void 0===t&&(t=0),this.shadowBlur=t,this.update(!1)},setShadowStroke:function(t){return this.shadowStroke=t,this.update(!1)},setShadowFill:function(t){return this.shadowFill=t,this.update(!1)},setWordWrapWidth:function(t,e){return void 0===e&&(e=!1),this.wordWrapWidth=t,this.wordWrapUseAdvanced=e,this.update(!1)},setWordWrapCallback:function(t,e){return void 0===e&&(e=null),this.wordWrapCallback=t,this.wordWrapCallbackScope=e,this.update(!1)},setAlign:function(t){return void 0===t&&(t="left"),this.align=t,this.update(!1)},setMaxLines:function(t){return void 0===t&&(t=0),this.maxLines=t,this.update(!1)},getTextMetrics:function(){var t=this.metrics;return{ascent:t.ascent,descent:t.descent,fontSize:t.fontSize}},toJSON:function(){var t={};for(var e in a)t[e]=this[e];return t.metrics=this.getTextMetrics(),t},destroy:function(){this.parent=void 0}});t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||""===e.text)){var o=t.currentContext;t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,o.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,o.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode);var a=e.canvas;if(o.save(),void 0!==r){var h=r.matrix;o.transform(h[0],h[1],h[2],h[3],h[4],h[5])}var l=e.x-s.scrollX*e.scrollFactorX,u=e.y-s.scrollY*e.scrollFactorY;t.config.roundPixels&&(l|=0,u|=0),o.translate(l,u),o.rotate(e.rotation),o.scale(e.scaleX,e.scaleY),o.translate(a.width*(e.flipX?1:0),a.height*(e.flipY?1:0)),o.scale(e.flipX?-1:1,e.flipY?-1:1),o.drawImage(a,0,0,a.width,a.height,-e.displayOriginX,-e.displayOriginY,a.width,a.height),o.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(14),r=i(10),o=i(143);s.register("text",function(t,e){var i=r(t,"text",""),s=r(t,"style",null),a=r(t,"padding",null);null!==a&&(s.padding=a);var h=new o(this.scene,0,0,i,s);return void 0!==e&&(t.add=e),n(this.scene,h,t),h.autoRound=r(t,"autoRound",!0),h.resolution=r(t,"resolution",1),h})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(143);i(8).register("text",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(638),s=i(634),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||""===e.text||(e.dirty&&(e.canvasTexture=t.canvasToTexture(e.canvas,e.canvasTexture),e.dirty=!1),this.pipeline.batchText(this,s,r))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){var o=t.currentContext,a=e.frame;e.updateTileTexture(),t.currentBlendMode!==e.blendMode&&(t.currentBlendMode=e.blendMode,o.globalCompositeOperation=t.blendModes[e.blendMode]),t.currentAlpha!==e.alpha&&(t.currentAlpha=e.alpha,o.globalAlpha=e.alpha),t.currentScaleMode!==e.scaleMode&&(t.currentScaleMode=e.scaleMode);var h=a.x-e.originX*e.width,l=a.y-e.originY*e.height,u=e.x-s.scrollX*e.scrollFactorX,c=e.y-s.scrollY*e.scrollFactorY,d=1,f=1;if(e.flipX&&(d=-1,h+=e.width),e.flipY&&(f=-1,l+=e.height),t.config.roundPixels&&(h|=0,l|=0,u|=0,c|=0),o.save(),void 0!==r){var p=r.matrix;o.transform(p[0],p[1],p[2],p[3],p[4],p[5])}o.translate(h,l),o.translate(u,c),o.scale(d,f),o.translate(e.originX*e.width,e.originY*e.height),o.rotate(d*f*e.rotation),o.scale(this.scaleX,this.scaleY),o.translate(-e.originX*e.width,-e.originY*e.height),o.translate(-this.tilePositionX,-this.tilePositionY),o.fillStyle=e.canvasPattern,o.fillRect(this.tilePositionX,this.tilePositionY,e.width,e.height),o.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(24),s=i(14),r=i(10),o=i(144);s.register("tileSprite",function(t,e){var i=r(t,"x",0),s=r(t,"y",0),a=r(t,"width",512),h=r(t,"height",512),l=r(t,"key",""),u=r(t,"frame",""),c=new o(this.scene,i,s,a,h,l,u);return void 0!==e&&(t.add=e),n(this.scene,c,t),c})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(144);i(8).register("tileSprite",function(t,e,i,s,r,o){return this.displayList.add(new n(this.scene,t,e,i,s,r,o))})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(643),s=i(639),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s,r){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||(e.updateTileTexture(),this.pipeline.batchTileSprite(this,s,r))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(10),r=i(101);n.register("zone",function(t){var e=s(t,"x",0),i=s(t,"y",0),n=s(t,"width",1),o=s(t,"height",n);return new r(this.scene,e,i,n,o)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(101);i(8).register("zone",function(t,e,i,s){return this.displayList.add(new n(this.scene,t,e,i,s))})},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(81),s=function(t){return new n(t.x,t.y,t.radius)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(40),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(40),s=function(t,e){return n(t,e.x,e.y)&&n(t,e.right,e.y)&&n(t,e.x,e.bottom)&&n(t,e.right,e.bottom)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y,t.radius)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y&&t.radius===e.radius};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t,e){return void 0===e&&(e=new n),e.x=t.left,e.y=t.top,e.width=t.diameter,e.height=t.diameter,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x+=e,t.y+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x+=e.x,t.y+=e.y,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(81);n.Area=i(646),n.Circumference=i(263),n.CircumferencePoint=i(145),n.Clone=i(647),n.Contains=i(40),n.ContainsPoint=i(648),n.ContainsRect=i(649),n.CopyFrom=i(650),n.Equals=i(651),n.GetBounds=i(652),n.GetPoint=i(264),n.GetPoints=i(265),n.Offset=i(653),n.OffsetPoint=i(654),n.Random=i(146),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(148),s=function(t){return new n(t.x,t.y,t.width,t.height)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(82),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(82),s=function(t,e){return n(t,e.x,e.y)&&n(t,e.right,e.y)&&n(t,e.x,e.bottom)&&n(t,e.right,e.bottom)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y,t.width,t.height)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t,e){return void 0===e&&(e=new n),e.x=t.left,e.y=t.top,e.width=t.width,e.height=t.height,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x+=e,t.y+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x+=e.x,t.y+=e.y,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(54),s=function(t,e){return n(t.x,t.y,e.x,e.y)<=t.radius+e.radius};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=e.width/2,n=e.height/2,s=Math.abs(t.x-e.x-i),r=Math.abs(t.y-e.y-n),o=i+t.radius,a=n+t.radius;if(s>o||r>a)return!1;if(s<=i||r<=n)return!0;var h=s-i,l=r-n;return h*h+l*l<=t.radius*t.radius};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=i(273),r=function(t,e,i){return void 0===i&&(i=new n),s(t,e)&&(i.x=Math.max(t.x,e.x),i.y=Math.max(t.y,e.y),i.width=Math.min(t.right,e.right)-i.x,i.height=Math.min(t.bottom,e.bottom)-i.y),i};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.x1,n=t.y1,s=t.x2,r=t.y2,o=e.x,a=e.y,h=e.right,l=e.bottom,u=0;if(i>=o&&i<=h&&n>=a&&n<=l||s>=o&&s<=h&&r>=a&&r<=l)return!0;if(i<o&&s>=o){if((u=n+(r-n)*(o-i)/(s-i))>a&&u<=l)return!0}else if(i>h&&s<=h&&(u=n+(r-n)*(h-i)/(s-i))>=a&&u<=l)return!0;if(n<a&&r>=a){if((u=i+(s-i)*(a-n)/(r-n))>=o&&u<=h)return!0}else if(n>l&&r<=l&&(u=i+(s-i)*(l-n)/(r-n))>=o&&u<=h)return!0;return!1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(272),s=function(t,e){if(!n(t,e))return!1;var i=Math.min(e.x1,e.x2),s=Math.max(e.x1,e.x2),r=Math.min(e.y1,e.y2),o=Math.max(e.y1,e.y2);return t.x>=i&&t.x<=s&&t.y>=r&&t.y<=o};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(102),s=i(41),r=i(158),o=i(283),a=function(t,e){if(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)return!1;var i=e.getLineA(),a=e.getLineB(),h=e.getLineC();if(s(t,i.x1,i.y1)||s(t,i.x2,i.y2))return!0;if(s(t,a.x1,a.y1)||s(t,a.x2,a.y2))return!0;if(s(t,h.x1,h.y1)||s(t,h.x2,h.y2))return!0;var l=t.getLineA(),u=t.getLineB(),c=t.getLineC(),d=t.getLineD();if(n(i,l)||n(i,u)||n(i,c)||n(i,d))return!0;if(n(a,l)||n(a,u)||n(a,c)||n(a,d))return!0;if(n(h,l)||n(h,u)||n(h,c)||n(h,d))return!0;var f=o(t);return r(e,f,!0).length>0};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r){return void 0===r&&(r=0),!(e>t.right+r||i<t.left-r||n>t.bottom+r||s<t.top-r)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(271),s=i(69),r=function(t,e){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)&&(!!s(t,e.x,e.y)||(!!n(t.getLineA(),e)||(!!n(t.getLineB(),e)||!!n(t.getLineC(),e))))};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(69),s=i(102),r=function(t,e){return!(!n(t,e.getPointA())&&!n(t,e.getPointB()))||(!!s(t.getLineA(),e)||(!!s(t.getLineB(),e)||!!s(t.getLineC(),e)))};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(158),s=i(289),r=i(102),o=function(t,e){if(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)return!1;var i=t.getLineA(),o=t.getLineB(),a=t.getLineC(),h=e.getLineA(),l=e.getLineB(),u=e.getLineC();if(r(i,h)||r(i,l)||r(i,u))return!0;if(r(o,h)||r(o,l)||r(o,u))return!0;if(r(a,h)||r(a,l)||r(a,u))return!0;var c=s(t),d=n(e,c,!0);return d.length>0||(c=s(e),d=n(t,c,!0),d.length>0)};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=e-(t.x1+t.x2)/2,s=i-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=s,t.x2+=n,t.y2+=s,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(103),s=function(t){return new n(t.x1,t.y1,t.x2,t.y2)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x1,t.y1,t.x2,t.y2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x1===e.x1&&t.y1===e.y1&&t.x2===e.x2&&t.y2===e.y2};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){return void 0===e&&(e=new n),e.x=(t.x1+t.x2)/2,e.y=(t.y1+t.y2)/2,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(68),r=i(6),o=function(t,e){void 0===e&&(e=new r);var i=s(t)-n.TAU;return e.x=Math.cos(i),e.y=Math.sin(i),e};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.abs(t.y1-t.y2)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(68),r=function(t){return Math.cos(s(t)-n.TAU)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(68),r=function(t){return Math.sin(s(t)-n.TAU)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x1+=e,t.y1+=i,t.x2+=e,t.y2+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return-(t.x2-t.x1)/(t.y2-t.y1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(68),s=i(277),r=function(t,e){return 2*s(e)-Math.PI-n(t)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(152),s=function(t,e){var i=(t.x1+t.x2)/2,s=(t.y1+t.y2)/2;return n(t,i,s,e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(152),s=function(t,e,i){return n(t,e.x,e.y,i)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){return t.x1=e,t.y1=i,t.x2=e+Math.cos(n)*s,t.y2=i+Math.sin(n)*s,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t.y2-t.y1)/(t.x2-t.x1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.abs(t.x1-t.x2)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(103);n.Angle=i(68),n.BresenhamPoints=i(275),n.CenterOn=i(675),n.Clone=i(676),n.CopyFrom=i(677),n.Equals=i(678),n.GetMidPoint=i(679),n.GetNormal=i(680),n.GetPoint=i(276),n.GetPoints=i(150),n.Height=i(681),n.Length=i(83),n.NormalAngle=i(277),n.NormalX=i(682),n.NormalY=i(683),n.Offset=i(684),n.PerpSlope=i(685),n.Random=i(151),n.ReflectAngle=i(686),n.Rotate=i(687),n.RotateAroundPoint=i(688),n.RotateAroundXY=i(152),n.SetToAngle=i(689),n.Slope=i(690),n.Width=i(691),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t){return new n(t.x,t.y)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){if(void 0===e&&(e=new n),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var i=t.length;if(i<1)throw new Error("GetCentroid points array must not be empty");if(1===i)e.x=t[0].x,e.y=t[0].y;else{for(var s=0;s<i;s++)e.x+=t[s].x,e.y+=t[s].y;e.x/=i,e.y/=i}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t,e){void 0===e&&(e=new n);for(var i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=0;a<t.length;a++){var h=t[a];h.x>i&&(i=h.x),h.x<s&&(s=h.x),h.y>r&&(r=h.y),h.y<o&&(o=h.y)}return e.x=s,e.y=o,e.width=i-s,e.height=r-o,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i,s){return void 0===i&&(i=0),void 0===s&&(s=new n),s.x=t.x+(e.x-t.x)*i,s.y=t.y+(e.y-t.y)*i,s};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.setTo(t.y,t.x)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){return void 0===e&&(e=new n),e.setTo(-t.x,-t.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=i(279),r=function(t,e,i){void 0===i&&(i=new n);var r=t.x*e.x+t.y*e.y,o=r/s(e);return 0!==o&&(i.x=o*e.x,i.y=o*e.y),i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e,i){void 0===i&&(i=new n);var s=t.x*e.x+t.y*e.y;return 0!==s&&(i.x=s*e.x,i.y=s*e.y),i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(278),s=function(t,e){if(0!==t.x||0!==t.y){var i=n(t);t.x/=i,t.y/=i}return t.x*=e,t.y*=e,t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6);n.Ceil=i(693),n.Clone=i(694),n.CopyFrom=i(695),n.Equals=i(696),n.Floor=i(697),n.GetCentroid=i(698),n.GetMagnitude=i(278),n.GetMagnitudeSq=i(279),n.GetRectangleFromPoints=i(699),n.Interpolate=i(700),n.Invert=i(701),n.Negative=i(702),n.Project=i(703),n.ProjectUnit=i(704),n.SetMagnitude=i(705),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(281),s=function(t){return new n(t.points)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(153),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t,e){void 0===e&&(e=new n);for(var i,s=1/0,r=1/0,o=-s,a=-r,h=0;h<t.points.length;h++)i=t.points[h],s=Math.min(s,i.x),r=Math.min(r,i.y),o=Math.max(o,i.x),a=Math.max(a,i.y);return e.x=s,e.y=r,e.width=o-s,e.height=a-r,e};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=[]);for(var i=0;i<t.points.length;i++)e.push(t.points[i].x),e.push(t.points[i].y);return e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(281);n.Clone=i(707),n.Contains=i(153),n.ContainsPoint=i(708),n.GetAABB=i(709),n.GetNumberArray=i(710),t.exports=n},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.width*t.height};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(9),s=function(t){return new n(t.x,t.y,t.width,t.height)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(41),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return!(e.width*e.height>t.width*t.height)&&(e.x>t.x&&e.x<t.right&&e.right>t.x&&e.right<t.right&&e.y>t.y&&e.y<t.bottom&&e.bottom>t.y&&e.bottom<t.bottom)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x,t.y,t.width,t.height)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(155),s=function(t,e){var i=n(t);return i<n(e)?t.setSize(e.height*i,e.height):t.setSize(e.width,e.width/i),t.setPosition(e.centerX-t.width/2,e.centerY-t.height/2)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(155),s=function(t,e){var i=n(t);return i>n(e)?t.setSize(e.height*i,e.height):t.setSize(e.width,e.width/i),t.setPosition(e.centerX-t.width/2,e.centerY-t.height/2)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){return void 0===e&&(e=new n),e.x=t.centerX,e.y=t.centerY,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=function(t,e){return void 0===e&&(e=new n),e.x=t.width,e.y=t.height,e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(282),s=function(t,e,i){var s=t.centerX,r=t.centerY;return t.setSize(t.width+2*e,t.height+2*i),n(t,s,r)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=t.x,n=t.right,s=t.y,r=t.bottom,o=0;o<e.length;o++)i=Math.min(i,e[o].x),n=Math.max(n,e[o].x),s=Math.min(s,e[o].y),r=Math.max(r,e[o].y);return t.x=i,t.y=s,t.width=n-i,t.height=r-s,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=Math.min(t.x,e.x),n=Math.max(t.right,e.right);t.x=i,t.width=n-i;var s=Math.min(t.y,e.y),r=Math.max(t.bottom,e.bottom);return t.y=s,t.height=r-s,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=Math.min(t.x,e),s=Math.max(t.right,e);t.x=n,t.width=s-n;var r=Math.min(t.y,i),o=Math.max(t.bottom,i);return t.y=r,t.height=o-r,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return t.x+=e,t.y+=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x+=e.x,t.y+=e.y,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x<e.right&&t.right>e.x&&t.y<e.bottom&&t.bottom>e.y};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(6),s=i(48),r=function(t,e,i){void 0===i&&(i=new n),e=s(e);var r=Math.sin(e),o=Math.cos(e),a=o>0?t.width/2:t.width/-2,h=r>0?t.height/2:t.height/-2;return Math.abs(a*r)<Math.abs(h*o)?h=a*r/o:a=h*o/r,i.x=a+t.centerX,i.y=h+t.centerY,i};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=e),t.width*=e,t.height*=i,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=t.x1,i=t.y1,n=t.x2,s=t.y2,r=t.x3,o=t.y3;return Math.abs(((r-e)*(s-i)-(n-e)*(o-i))/2)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(70),s=function(t,e,i){var s=i*(Math.sqrt(3)/2);return new n(t,e,t+i/2,e+s,t-i/2,e+s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(280),s=i(70),r=function(t,e,i,r,o){void 0===e&&(e=null),void 0===i&&(i=1),void 0===r&&(r=1),void 0===o&&(o=[]);for(var a,h,l,u,c,d,f,p,v,g=n(t,e),y=0;y<g.length;y+=3)a=g[y],h=g[y+1],l=g[y+2],u=t[2*a]*i,c=t[2*a+1]*r,d=t[2*h]*i,f=t[2*h+1]*r,p=t[2*l]*i,v=t[2*l+1]*r,o.push(new s(u,c,d,f,p,v));return o};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(70),s=function(t,e,i,s){return void 0===s&&(s=i),new n(t,e,t,e-s,t+i,e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(288),s=i(293),r=function(t,e,i,r){void 0===r&&(r=n);var o=r(t),a=e-o.x,h=i-o.y;return s(t,a,h)};t.exports=r},function(t,e,i){function n(t,e,i,n){return t*n-e*i}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=i(4),r=function(t,e){void 0===e&&(e=new s);var i=t.x3,r=t.y3,o=t.x1-i,a=t.y1-r,h=t.x2-i,l=t.y2-r,u=2*n(o,a,h,l),c=n(a,o*o+a*a,l,h*h+l*l),d=n(o,o*o+a*a,h,h*h+l*l);return e.x=i-c/u,e.y=r+d/u,e};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(81),s=function(t,e){void 0===e&&(e=new n);var i,s,r=t.x1,o=t.y1,a=t.x2,h=t.y2,l=t.x3,u=t.y3,c=a-r,d=h-o,f=l-r,p=u-o,v=c*(r+a)+d*(o+h),g=f*(r+l)+p*(o+u),y=2*(c*(u-h)-d*(l-a));if(Math.abs(y)<1e-6){var m=Math.min(r,a,l),x=Math.min(o,h,u);i=.5*(Math.max(r,a,l)-m),s=.5*(Math.max(o,h,u)-x),e.x=m+i,e.y=x+s,e.radius=Math.sqrt(i*i+s*s)}else e.x=(p*v-d*g)/y,e.y=(c*g-f*v)/y,i=e.x-r,s=e.y-o,e.radius=Math.sqrt(i*i+s*s);return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(70),s=function(t){return new n(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(69),s=function(t,e){return n(t,e.x,e.y)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.x1===e.x1&&t.y1===e.y1&&t.x2===e.x2&&t.y2===e.y2&&t.x3===e.x3&&t.y3===e.y3};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(83),s=function(t){var e=t.getLineA(),i=t.getLineB(),s=t.getLineC();return n(e)+n(i)+n(s)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(160),s=i(292),r=function(t,e){var i=s(t);return n(t,i.x,i.y,e)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(160),s=function(t,e,i){return n(t,e.x,e.y,i)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(70);n.Area=i(735),n.BuildEquilateral=i(736),n.BuildFromPolygon=i(737),n.BuildRight=i(738),n.CenterOn=i(739),n.Centroid=i(288),n.CircumCenter=i(740),n.CircumCircle=i(741),n.Clone=i(742),n.Contains=i(69),n.ContainsArray=i(158),n.ContainsPoint=i(743),n.CopyFrom=i(744),n.Decompose=i(289),n.Equals=i(745),n.GetPoint=i(290),n.GetPoints=i(291),n.InCenter=i(292),n.Perimeter=i(746),n.Offset=i(293),n.Random=i(159),n.Rotate=i(747),n.RotateAroundPoint=i(748),n.RotateAroundXY=i(160),t.exports=n},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(81),s=i(40),r=i(0),o=i(54),a=i(148),h=i(82),l=i(12),u=i(294),c=i(13),d=i(9),f=i(41),p=i(70),v=i(69),g=new r({Extends:l,initialize:function(t){l.call(this),this.scene=t,this.systems=t.sys,this.settings=t.sys.settings,this.manager=t.sys.game.input,this.enabled=!0,this.displayList,this.cameras,this.keyboard=this.manager.keyboard,this.mouse=this.manager.mouse,this.gamepad=this.manager.gamepad,this.topOnly=!0,this.pollRate=-1,this._pollTimer=0,this.dragDistanceThreshold=0,this.dragTimeThreshold=0,this._temp=[],this._tempZones=[],this._list=[],this._pendingInsertion=[],this._pendingRemoval=[],this._draggable=[],this._drag={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this._over={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},this._validTypes=["onDown","onUp","onOver","onOut","onMove","onDragStart","onDrag","onDragEnd","onDragEnter","onDragLeave","onDragOver","onDrop"],t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.cameras=this.systems.cameras,this.displayList=this.systems.displayList,this.systems.events.once("destroy",this.destroy,this)},start:function(){var t=this.systems.events;t.on("transitionstart",this.transitionIn,this),t.on("transitionout",this.transitionOut,this),t.on("transitioncomplete",this.transitionComplete,this),t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.once("shutdown",this.shutdown,this),this.enabled=!0},preUpdate:function(){var t=this._pendingRemoval,e=this._pendingInsertion,i=t.length,n=e.length;if(0!==i||0!==n){for(var s=this._list,r=0;r<i;r++){var o=t[r],a=s.indexOf(o);a>-1&&(s.splice(a,1),this.clear(o))}t.length=0,this._list=s.concat(e.splice(0))}},clear:function(t){var e=t.input;e.gameObject=void 0,e.target=void 0,e.hitArea=void 0,e.hitAreaCallback=void 0,e.callbackContext=void 0,t.input=null;var i=this._draggable.indexOf(t);return i>-1&&this._draggable.splice(i,1),i=this._drag[0].indexOf(t),i>-1&&this._drag[0].splice(i,1),i=this._over[0].indexOf(t),i>-1&&this._over[0].splice(i,1),t},disable:function(t){t.input.enabled=!1},enable:function(t,e,i,n){return void 0===n&&(n=!1),t.input?t.input.enabled=!0:this.setHitArea(t,e,i),t.input&&(t.input.dropZone=n),this},hitTestPointer:function(t){var e=this.cameras.getCameraBelowPointer(t);if(e){t.camera=e;for(var i=this.manager.hitTest(t.x,t.y,this._list,e),n=0;n<i.length;n++){var s=i[n];s.input.dropZone&&this._tempZones.push(s)}return i}return[]},processDownEvents:function(t){var e=this._temp;this.emit("pointerdown",t,e);for(var i=0,n=0;n<e.length;n++){var s=e[n];s.input&&(i++,s.emit("pointerdown",t,s.input.localX,s.input.localY,t.camera),this.emit("gameobjectdown",t,s))}return i},processDragEvents:function(t,e){if(0===this._draggable.length)return 0;var i,n,s,r,a=this._temp;if(0===t.dragState&&t.primaryDown&&t.justDown&&a.length>0?t.dragState=1:t.dragState>0&&!t.primaryDown&&t.justUp&&(t.dragState=5),1===t.dragState){var h=[];for(i=0;i<a.length;i++)n=a[i],n.input.draggable&&h.push(n);if(0===h.length)return t.dragState=0,0;h.length>1&&(this.sortGameObjects(h),this.topOnly&&h.splice(1)),this._drag[t.id]=h,0===this.dragDistanceThreshold&&0===this.dragTimeThreshold?t.dragState=3:t.dragState=2}if(2===t.dragState&&(this.dragDistanceThreshold>0&&o(t.x,t.y,t.downX,t.downY)>=this.dragDistanceThreshold&&(t.dragState=3),this.dragTimeThreshold>0&&e>=t.downTime+this.dragTimeThreshold&&(t.dragState=3)),3===t.dragState){for(s=this._drag[t.id],i=0;i<s.length;i++)n=s[i],r=n.input,r.dragState=2,r.dragX=t.x-n.x,r.dragY=t.y-n.y,r.dragStartX=n.x,r.dragStartY=n.y,n.emit("dragstart",t,r.dragX,r.dragY),this.emit("dragstart",t,n);return t.dragState=4,s.length}if(4===t.dragState&&t.justMoved){var l=this._tempZones;for(s=this._drag[t.id],i=0;i<s.length;i++){if(n=s[i],r=n.input,r.target){var u=l.indexOf(r.target);0===u?(n.emit("dragover",t,r.target),this.emit("dragover",t,n,r.target)):u>0?(n.emit("dragleave",t,r.target),this.emit("dragleave",t,n,r.target),r.target=l[0],n.emit("dragenter",t,r.target),this.emit("dragenter",t,n,r.target)):(n.emit("dragleave",t,r.target),this.emit("dragleave",t,n,r.target),l[0]?(r.target=l[0],n.emit("dragenter",t,r.target),this.emit("dragenter",t,n,r.target)):r.target=null)}else!r.target&&l[0]&&(r.target=l[0],n.emit("dragenter",t,r.target),this.emit("dragenter",t,n,r.target));var c=t.x-n.input.dragX,d=t.y-n.input.dragY;n.emit("drag",t,c,d),this.emit("drag",t,n,c,d)}return s.length}if(5===t.dragState){for(s=this._drag[t.id],i=0;i<s.length;i++){n=s[i],r=n.input,r.dragState=0,r.dragX=r.localX-n.displayOriginX,r.dragY=r.localY-n.displayOriginY;var f=!1;r.target&&(n.emit("drop",t,r.target),this.emit("drop",t,n,r.target),r.target=null,f=!0),n.emit("dragend",t,r.dragX,r.dragY,f),this.emit("dragend",t,n,f)}t.dragState=0,s.splice(0)}return 0},processMoveEvents:function(t){var e=this._temp;this.emit("pointermove",t,e);for(var i=0,n=0;n<e.length;n++){var s=e[n];if(s.input&&(i++,s.emit("pointermove",t,s.input.localX,s.input.localY),this.emit("gameobjectmove",t,s),this.topOnly))break}return i},processOverOutEvents:function(t){var e,i,n=this._temp,s=[],r=[],o=[],a=this._over[t.id],h=this._drag[t.id];for(e=0;e<a.length;e++)i=a[e],-1===n.indexOf(i)&&-1===h.indexOf(i)?s.push(i):o.push(i);for(e=0;e<n.length;e++)i=n[e],-1===a.indexOf(i)&&r.push(i);var l=s.length,u=0;if(l>0)for(this.sortGameObjects(s),this.emit("pointerout",t,s),e=0;e<l;e++)i=s[e],i.input&&(this.emit("gameobjectout",t,i),i.emit("pointerout",t),u++);if((l=r.length)>0)for(this.sortGameObjects(r),this.emit("pointerover",t,r),e=0;e<l;e++)i=r[e],i.input&&(this.emit("gameobjectover",t,i),i.emit("pointerover",t,i.input.localX,i.input.localY),u++);return a=o.concat(r),this._over[t.id]=this.sortGameObjects(a),u},processUpEvents:function(t){var e=this._temp;this.emit("pointerup",t,e);for(var i=0;i<e.length;i++){var n=e[i];n.input&&(n.emit("pointerup",t,n.input.localX,n.input.localY),this.emit("gameobjectup",t,n))}return e.length},queueForInsertion:function(t){return-1===this._pendingInsertion.indexOf(t)&&-1===this._list.indexOf(t)&&this._pendingInsertion.push(t),this},queueForRemoval:function(t){return this._pendingRemoval.push(t),this},setDraggable:function(t,e){void 0===e&&(e=!0),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=t[i];n.input.draggable=e;var s=this._draggable.indexOf(n);e&&-1===s?this._draggable.push(n):!e&&s>-1&&this._draggable.splice(s,1)}return this},setHitArea:function(t,e,i){if(void 0===e)return this.setHitAreaFromTexture(t);Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var s=t[n];s.input=u(s,e,i),this.queueForInsertion(s)}return this},setHitAreaCircle:function(t,e,i,r,o){void 0===o&&(o=s);var a=new n(e,i,r);return this.setHitArea(t,a,o)},setHitAreaEllipse:function(t,e,i,n,s,r){void 0===r&&(r=h);var o=new a(e,i,n,s);return this.setHitArea(t,o,r)},setHitAreaFromTexture:function(t,e){void 0===e&&(e=f),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=t[i];if("Container"!==n.type){var s=n.frame,r=0,o=0;s?(r=s.realWidth,o=s.realHeight):n.width&&(r=n.width,o=n.height),0!==r&&0!==o&&(n.input=u(n,new d(0,0,r,o),e),this.queueForInsertion(n))}else console.warn("Container.setInteractive() must specify a Shape")}return this},setHitAreaRectangle:function(t,e,i,n,s,r){void 0===r&&(r=f);var o=new d(e,i,n,s);return this.setHitArea(t,o,r)},setHitAreaTriangle:function(t,e,i,n,s,r,o,a){void 0===a&&(a=v);var h=new p(e,i,n,s,r,o);return this.setHitArea(t,h,a)},setPollAlways:function(){return this.pollRate=0,this._pollTimer=0,this},setPollOnMove:function(){return this.pollRate=-1,this._pollTimer=0,this},setPollRate:function(t){return this.pollRate=t,this._pollTimer=0,this},setGlobalTopOnly:function(t){return this.manager.globalTopOnly=t,this},setTopOnly:function(t){return this.topOnly=t,this},sortGameObjects:function(t){return t.length<2?t:(this.scene.sys.depthSort(),t.sort(this.sortHandlerGO.bind(this)))},sortHandlerGO:function(t,e){if(!t.parentContainer&&!e.parentContainer)return this.displayList.getIndex(e)-this.displayList.getIndex(t);if(t.parentContainer===e.parentContainer)return e.parentContainer.getIndex(e)-t.parentContainer.getIndex(t);for(var i=t.getIndexList(),n=e.getIndexList(),s=Math.min(i.length,n.length),r=0;r<s;r++){var o=i[r],a=n[r];if(o!==a)return a-o}return 0},stopPropagation:function(){return this.manager.globalTopOnly&&(this.manager.ignoreEvents=!0),this},update:function(t,e){var i=this.manager;if(!(!this.enabled||i.globalTopOnly&&i.ignoreEvents)){var n=i.activePointer,s=n.dirty||0===this.pollRate;if(this.pollRate>-1&&(this._pollTimer-=e,this._pollTimer<0&&(s=!0,this._pollTimer=this.pollRate)),s){this._tempZones=[],this._temp=this.hitTestPointer(n),this.sortGameObjects(this._temp),this.sortGameObjects(this._tempZones),this.topOnly&&(this._temp.length&&this._temp.splice(1),this._tempZones.length&&this._tempZones.splice(1));var r=this.processDragEvents(n,t);n.wasTouch||(r+=this.processOverOutEvents(n)),n.justDown&&(r+=this.processDownEvents(n)),n.justUp&&(r+=this.processUpEvents(n)),n.justMoved&&(r+=this.processMoveEvents(n)),r>0&&i.globalTopOnly&&(i.ignoreEvents=!0)}}},transitionIn:function(){this.enabled=this.settings.transitionAllowInput},transitionComplete:function(){this.settings.transitionAllowInput||(this.enabled=!0)},transitionOut:function(){this.enabled=this.settings.transitionAllowInput},shutdown:function(){this._temp.length=0,this._list.length=0,this._draggable.length=0,this._pendingRemoval.length=0,this._pendingInsertion.length=0;for(var t=0;t<10;t++)this._drag[t]=[],this._over[t]=[];this.removeAllListeners();var e=this.systems.events;e.off("transitionstart",this.transitionIn,this),e.off("transitionout",this.transitionOut,this),e.off("transitioncomplete",this.transitionComplete,this),e.off("preupdate",this.preUpdate,this),e.off("update",this.update,this),e.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.cameras=null,this.manager=null,this.events=null,this.keyboard=null,this.mouse=null,this.gamepad=null},activePointer:{get:function(){return this.manager.activePointer}},x:{get:function(){return this.manager.activePointer.x}},y:{get:function(){return this.manager.activePointer.y}}});c.register("InputPlugin",g,"input"),t.exports=g},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={UP:12,DOWN:13,LEFT:14,RIGHT:15,SELECT:8,START:9,B:0,A:1,Y:2,X:3,LEFT_SHOULDER:4,RIGHT_SHOULDER:5}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={UP:12,DOWN:13,LEFT:14,RIGHT:15,SHARE:8,OPTIONS:9,PS:16,TOUCHBAR:17,X:0,CIRCLE:1,SQUARE:2,TRIANGLE:3,L1:4,R1:5,L2:6,R2:7,L3:10,R3:11,LEFT_STICK_H:0,LEFT_STICK_V:1,RIGHT_STICK_H:2,RIGHT_STICK_V:3}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={UP:12,DOWN:13,LEFT:14,RIGHT:15,MENU:16,A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,LS:10,RS:11,LEFT_STICK_H:0,LEFT_STICK_V:1,RIGHT_STICK_H:2,RIGHT_STICK_V:3}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={DUALSHOCK_4:i(752),SNES_USB:i(751),XBOX_360:i(753)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Axis:i(297),Button:i(298),Gamepad:i(299),GamepadManager:i(300),Configs:i(754)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CreateInteractiveObject:i(294),Gamepad:i(755),InputManager:i(295),InputPlugin:i(750),Keyboard:i(760),Mouse:i(768),Pointer:i(296),Touch:i(769)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return e.timeLastMatched=t.timeStamp,++e.index===e.size||(e.current=e.keyCodes[e.index],!1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(757),s=function(t,e){if(e.matched)return!0;var i=!1,s=!1;if(t.keyCode===e.current)if(e.index>0&&e.maxKeyDelay>0){var r=e.timeLastMatched+e.maxKeyDelay;t.timeStamp<=r&&(s=!0,i=n(t,e))}else s=!0,i=n(t,e);return!s&&e.resetOnWrongKey&&(e.index=0,e.current=e.keyCodes[0]),i&&(e.timeLastMatched=t.timeStamp,e.matched=!0,e.timeMatched=t.timeStamp),i};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.current=t.keyCodes[0],t.index=0,t.timeLastMatched=0,t.matched=!1,t.timeMatched=0,t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={KeyboardManager:i(301),Key:i(303),KeyCodes:i(161),KeyCombo:i(302),JustDown:i(762),JustUp:i(763),DownDuration:i(761),UpDuration:i(767)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=50),t.isDown&&t.duration<e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return!!t._justDown&&(t._justDown=!1,!0)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return!!t._justUp&&(t._justUp=!1,!0)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(161),s={};for(var r in n)s[n[r]]=r;t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(t.originalEvent=e,t.preventDefault&&e.preventDefault(),t.enabled)return t.altKey=e.altKey,t.ctrlKey=e.ctrlKey,t.shiftKey=e.shiftKey,t.location=e.location,!1===t.isDown&&(t.isDown=!0,t.isUp=!1,t.timeDown=e.timeStamp,t.duration=0,t._justDown=!0,t._justUp=!1),t.repeats++,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(t.originalEvent=e,t.preventDefault&&e.preventDefault(),t.enabled)return t.isDown=!1,t.isUp=!0,t.timeUp=e.timeStamp,t.duration=t.timeUp-t.timeDown,t.repeats=0,t._justDown=!1,t._justUp=!0,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=50),t.isUp&&t.duration<e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={MouseManager:i(304)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={TouchManager:i(305)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(75),o=i(12),a=i(7),h=i(1),l=i(13),u=i(105),c=new n({Extends:o,initialize:function(t){o.call(this);var e=t.sys.game.config,i=t.sys.settings.loader;this.scene=t,this.systems=t.sys,this.cacheManager=t.sys.cache,this.textureManager=t.sys.textures,a.install(this),this.prefix="",this.path="",this.baseURL="",this.setBaseURL(h(i,"baseURL",e.loaderBaseURL)),this.setPath(h(i,"path",e.loaderPath)),this.setPrefix(h(i,"prefix",e.loaderPrefix)),this.maxParallelDownloads=h(i,"maxParallelDownloads",e.loaderMaxParallelDownloads),this.xhr=u(h(i,"responseType",e.loaderResponseType),h(i,"async",e.loaderAsync),h(i,"user",e.loaderUser),h(i,"password",e.loaderPassword),h(i,"timeout",e.loaderTimeout)),this.crossOrigin=h(i,"crossOrigin",e.loaderCrossOrigin),this.totalToLoad=0,this.progress=0,this.list=new r,this.inflight=new r,this.queue=new r,this._deleteQueue=new r,this.totalFailed=0,this.totalComplete=0,this.state=s.LOADER_IDLE,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.pluginStart,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},pluginStart:function(){this.systems.events.once("shutdown",this.shutdown,this)},setBaseURL:function(t){return void 0===t&&(t=""),""!==t&&"/"!==t.substr(-1)&&(t=t.concat("/")),this.baseURL=t,this},setPath:function(t){return void 0===t&&(t=""),""!==t&&"/"!==t.substr(-1)&&(t=t.concat("/")),this.path=t,this},setPrefix:function(t){return void 0===t&&(t=""),this.prefix=t,this},setCORS:function(t){return this.crossOrigin=t,this},addFile:function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];this.keyExists(i)||(this.list.set(i),this.emit("addfile",i.key,i.type,this,i),this.isLoading()&&(this.totalToLoad++,this.updateProgress()))}},keyExists:function(t){var e=t.hasCacheConflict();return e||this.list.iterate(function(i){if(i.type===t.type&&i.key===t.key)return e=!0,!1}),!e&&this.isLoading()&&(this.inflight.iterate(function(i){if(i.type===t.type&&i.key===t.key)return e=!0,!1}),this.queue.iterate(function(i){if(i.type===t.type&&i.key===t.key)return e=!0,!1})),e},addPack:function(t,e){e&&t.hasOwnProperty(e)&&(t={packKey:t[e]});var i=0,n=this.baseURL,s=this.path,r=this.prefix;for(var o in t){var a=t[o],l=h(a,"baseURL",n),u=h(a,"path",s),c=h(a,"prefix",r),d=h(a,"files",null),f=h(a,"defaultType","void");if(Array.isArray(d)){this.setBaseURL(l),this.setPath(u),this.setPrefix(c);for(var p=0;p<d.length;p++){var v=d[p],g=v.hasOwnProperty("type")?v.type:f;this[g]&&(this[g](v),i++)}}}return this.setBaseURL(n),this.setPath(s),this.setPrefix(r),i>0},isLoading:function(){return this.state===s.LOADER_LOADING||this.state===s.LOADER_PROCESSING},isReady:function(){return this.state===s.LOADER_IDLE||this.state===s.LOADER_COMPLETE},start:function(){this.isReady()&&(this.progress=0,this.totalFailed=0,this.totalComplete=0,this.totalToLoad=this.list.size,this.emit("start",this),0===this.list.size?this.loadComplete():(this.state=s.LOADER_LOADING,this.inflight.clear(),this.queue.clear(),this.updateProgress(),this.checkLoadQueue()))},updateProgress:function(){this.progress=1-(this.list.size+this.inflight.size)/this.totalToLoad,this.emit("progress",this.progress)},checkLoadQueue:function(){this.list.each(function(t){if((t.state===s.FILE_POPULATED||t.state===s.FILE_PENDING&&this.inflight.size<this.maxParallelDownloads)&&(this.inflight.set(t),this.list.delete(t),t.crossOrigin||(t.crossOrigin=this.crossOrigin),t.load()),this.inflight.size===this.maxParallelDownloads)return!1},this)},nextFile:function(t,e){this.inflight.delete(t),this.updateProgress(),e?(this.totalComplete++,this.queue.set(t),this.emit("load",t),t.onProcess()):(this.totalFailed++,this._deleteQueue.set(t),this.emit("loaderror",t)),this.list.size>0&&this.checkLoadQueue()},fileProcessComplete:function(t){t.state===s.FILE_ERRORED?t.multiFile&&t.multiFile.onFileFailed(t):t.state===s.FILE_COMPLETE&&(t.multiFile?t.multiFile.isReadyToProcess()&&t.multiFile.addToCache():t.addToCache()),this.queue.delete(t),0===this.list.size&&0===this.inflight.size&&0===this.queue.size?this.loadComplete():this.checkLoadQueue()},loadComplete:function(){this.emit("loadcomplete",this),this.list.clear(),this.inflight.clear(),this.queue.clear(),this.progress=1,this.state=s.LOADER_COMPLETE,this._deleteQueue.iterateLocal("destroy"),this._deleteQueue.clear(),this.emit("complete",this,this.totalComplete,this.totalFailed)},flagForRemoval:function(t){this._deleteQueue.set(t)},saveJSON:function(t,e){return this.save(JSON.stringify(t),e)},save:function(t,e,i){void 0===e&&(e="file.json"),void 0===i&&(i="application/json");var n=new Blob([t],{type:i}),s=URL.createObjectURL(n),r=document.createElement("a");return r.download=e,r.textContent="Download "+e,r.href=s,r.click(),this},reset:function(){this.list.clear(),this.inflight.clear(),this.queue.clear();var t=this.systems.game.config,e=this.systems.settings.loader;this.setBaseURL(h(e,"baseURL",t.loaderBaseURL)),this.setPath(h(e,"path",t.loaderPath)),this.setPrefix(h(e,"prefix",t.loaderPrefix)),this.state=s.LOADER_IDLE},shutdown:function(){this.reset(),this.state=s.LOADER_SHUTDOWN,this.systems.events.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.state=s.LOADER_DESTROYED,this.systems.events.off("start",this.pluginStart,this),this.list=null,this.inflight=null,this.queue=null,this.scene=null,this.systems=null,this.textureManager=null,this.cacheManager=null}});l.register("Loader",c,"load"),t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(47),o=new n({Extends:r,initialize:function(t,e,i,n,s){r.call(this,t,e,i,n,s),this.type="animationJSON"},onProcess:function(){this.loader.once("loadcomplete",this.onLoadComplete,this),r.prototype.onProcess.call(this)},onLoadComplete:function(){this.loader.systems.anims.fromJSON(this.data),this.pendingDestroy()}});s.register("animation",function(t,e,i,n){if(Array.isArray(t))for(var s=0;s<t.length;s++)this.addFile(new o(this,t[s]));else this.addFile(new o(this,t,e,n,i));return this}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(1),o=i(53),a=i(11),h=i(47),l=i(52),u=new n({Extends:l,initialize:function(t,e,i,n,s,u){var c,d;if(a(e)){var f=e;e=r(f,"key"),c=new o(t,{key:e,url:r(f,"textureURL"),extension:r(f,"textureExtension","png"),normalMap:r(f,"normalMap"),xhrSettings:r(f,"textureXhrSettings")}),d=new h(t,{key:e,url:r(f,"atlasURL"),extension:r(f,"atlasExtension","json"),xhrSettings:r(f,"atlasXhrSettings")})}else c=new o(t,e,i,s),d=new h(t,e,n,u);c.linkFile?l.call(this,t,"atlasjson",e,[c,d,c.linkFile]):l.call(this,t,"atlasjson",e,[c,d])},addToCache:function(){if(this.isReadyToProcess()){var t=this.files[0],e=this.files[1],i=this.files[2]?this.files[2].data:null;this.loader.textureManager.addAtlas(t.key,t.data,e.data,i),e.addToCache(),this.complete=!0}}});s.register("atlas",function(t,e,i,n,s){var r;if(Array.isArray(t))for(var o=0;o<t.length;o++)r=new u(this,t[o]),this.addFile(r.files);else r=new u(this,t,e,i,n,s),this.addFile(r.files);return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(1),o=i(53),a=i(11),h=i(52),l=i(164),u=new n({Extends:h,initialize:function(t,e,i,n,s,u){var c,d;if(a(e)){var f=e;e=r(f,"key"),c=new o(t,{key:e,url:r(f,"textureURL"),extension:r(f,"textureExtension","png"),normalMap:r(f,"normalMap"),xhrSettings:r(f,"textureXhrSettings")}),d=new l(t,{key:e,url:r(f,"atlasURL"),extension:r(f,"atlasExtension","xml"),xhrSettings:r(f,"atlasXhrSettings")})}else c=new o(t,e,i,s),d=new l(t,e,n,u);c.linkFile?h.call(this,t,"atlasxml",e,[c,d,c.linkFile]):h.call(this,t,"atlasxml",e,[c,d])},addToCache:function(){if(this.isReadyToProcess()){var t=this.files[0],e=this.files[1],i=this.files[2]?this.files[2].data:null;this.loader.textureManager.addAtlasXML(t.key,t.data,e.data,i),e.addToCache(),this.complete=!0}}});s.register("atlasXML",function(t,e,i,n,s){var r;if(Array.isArray(t))for(var o=0;o<t.length;o++)r=new u(this,t[o]),this.addFile(r.files);else r=new u(this,t,e,i,n,s),this.addFile(r.files);return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(307),s=i(0),r=i(7),o=i(1),a=i(11),h=i(47),l=i(52),u=new s({Extends:l,initialize:function(t,e,i,s,r,u,c){if(a(e)){var d=e;e=o(d,"key"),i=o(d,"jsonURL"),s=o(d,"audioURL"),r=o(d,"audioConfig"),u=o(d,"audioXhrSettings"),c=o(d,"jsonXhrSettings")}var f;if(s){var p=n.create(t,e,s,r,u);p&&(f=new h(t,e,i,c),l.call(this,t,"audiosprite",e,[p,f]),this.config.resourceLoad=!1)}else f=new h(t,e,i,c),l.call(this,t,"audiosprite",e,[f]),this.config.resourceLoad=!0,this.config.audioConfig=r,this.config.audioXhrSettings=u},onFileComplete:function(t){if(-1!==this.files.indexOf(t)&&(this.pending--,this.config.resourceLoad&&"json"===t.type&&t.data.hasOwnProperty("resources"))){var e=t.data.resources,i=o(this.config,"audioConfig"),s=o(this.config,"audioXhrSettings"),r=n.create(this.loader,t.key,e,i,s);r&&(this.addToMultiFile(r),this.loader.addFile(r))}},addToCache:function(){if(this.isReadyToProcess()){var t=this.files[0],e=this.files[1];t.addToCache(),e.addToCache(),this.complete=!0}}});r.register("audioSprite",function(t,e,i,n,s,r){var o=this.systems.game,a=o.config.audio,h=o.device.audio;if(a&&a.noAudio||!h.webAudio&&!h.audioData)return this;var l;if(Array.isArray(t))for(var c=0;c<t.length;c++)l=new u(this,t[c]),l.files&&this.addFile(l.files);else l=new u(this,t,e,i,n,s,r),l.files&&this.addFile(l.files);return this})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n,s){var o="bin";if(h(e)){var l=e;e=a(l,"key"),i=a(l,"url"),n=a(l,"xhrSettings"),o=a(l,"extension",o),s=a(l,"dataType",s)}var u={type:"binary",cache:t.cacheManager.binary,extension:o,responseType:"arraybuffer",key:e,url:i,xhrSettings:n,config:{dataType:s}};r.call(this,t,u)},onProcess:function(){this.state=s.FILE_PROCESSING;var t=this.config.dataType;this.data=t?new t(this.xhrLoader.response):this.xhrLoader.response,this.onProcessComplete()}});o.register("binary",function(t,e,i,n){if(Array.isArray(t))for(var s=0;s<t.length;s++)this.addFile(new l(this,t[s]));else this.addFile(new l(this,t,e,n,i));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(1),o=i(53),a=i(11),h=i(52),l=i(251),u=i(164),c=new n({Extends:h,initialize:function(t,e,i,n,s,l){var c,d;if(a(e)){var f=e;e=r(f,"key"),c=new o(t,{key:e,url:r(f,"textureURL"),extension:r(f,"textureExtension","png"),normalMap:r(f,"normalMap"),xhrSettings:r(f,"textureXhrSettings")}),d=new u(t,{key:e,url:r(f,"fontDataURL"),extension:r(f,"fontDataExtension","xml"),xhrSettings:r(f,"fontDataXhrSettings")})}else c=new o(t,e,i,s),d=new u(t,e,n,l);c.linkFile?h.call(this,t,"bitmapfont",e,[c,d,c.linkFile]):h.call(this,t,"bitmapfont",e,[c,d])},addToCache:function(){if(this.isReadyToProcess()){var t=this.files[0],e=this.files[1];t.addToCache(),e.addToCache(),this.loader.cacheManager.bitmapFont.add(t.key,{data:l(e.data),texture:t.key,frame:null}),this.complete=!0}}});s.register("bitmapFont",function(t,e,i,n,s){var r;if(Array.isArray(t))for(var o=0;o<t.length;o++)r=new c(this,t[o]),this.addFile(r.files);else r=new c(this,t,e,i,n,s),this.addFile(r.files);return this}),t.exports=c},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n){var s="glsl";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}var l={type:"glsl",cache:t.cacheManager.shader,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,t,l)},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.responseText,this.onProcessComplete()}});o.register("glsl",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(this,t[n]));else this.addFile(new l(this,t,e,i));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n,s,o){void 0===n&&(n=512),void 0===s&&(s=512);var l="html";if(h(e)){var u=e;e=a(u,"key"),i=a(u,"url"),o=a(u,"xhrSettings"),l=a(u,"extension",l),n=a(u,"width",n),s=a(u,"height",s)}var c={type:"html",cache:t.textureManager,extension:l,responseType:"text",key:e,url:i,xhrSettings:o,config:{width:n,height:s}};r.call(this,t,c)},onProcess:function(){this.state=s.FILE_PROCESSING;var t=this.config.width,e=this.config.height,i=[];i.push('<svg width="'+t+'px" height="'+e+'px" viewBox="0 0 '+t+" "+e+'" xmlns="http://www.w3.org/2000/svg">'),i.push('<foreignObject width="100%" height="100%">'),i.push('<body xmlns="http://www.w3.org/1999/xhtml">'),i.push(this.xhrLoader.responseText),i.push("</body>"),i.push("</foreignObject>"),i.push("</svg>");var n=[i.join("\n")],o=this;try{var a=new window.Blob(n,{type:"image/svg+xml;charset=utf-8"})}catch(t){return o.state=s.FILE_ERRORED,void o.onProcessComplete()}this.data=new Image,this.data.crossOrigin=this.crossOrigin,this.data.onload=function(){r.revokeObjectURL(o.data),o.onProcessComplete()},this.data.onerror=function(){r.revokeObjectURL(o.data),o.onProcessError()},r.createObjectURL(this.data,a,"image/svg+xml")},addToCache:function(){var t=this.cache.addImage(this.key,this.data);this.pendingDestroy(t)}});o.register("html",function(t,e,i,n,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)this.addFile(new l(this,t[r]));else this.addFile(new l(this,t,e,i,n,s));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(1),o=i(53),a=i(11),h=i(47),l=i(52),u=new n({Extends:l,initialize:function(t,e,i,n,s,o,u){if(a(e)){var c=e;e=r(c,"key"),i=r(c,"url"),o=r(c,"xhrSettings"),n=r(c,"path"),s=r(c,"baseURL"),u=r(c,"textureXhrSettings")}var d=new h(t,e,i,o);l.call(this,t,"multiatlas",e,[d]),this.config.path=n,this.config.baseURL=s,this.config.textureXhrSettings=u},onFileComplete:function(t){if(-1!==this.files.indexOf(t)&&(this.pending--,"json"===t.type&&t.data.hasOwnProperty("textures"))){var e=t.data.textures,i=this.config,n=this.loader,s=n.baseURL,a=n.path,h=n.prefix,l=r(i,"baseURL",s),u=r(i,"path",a),c=r(i,"prefix",h),d=r(i,"textureXhrSettings");n.setBaseURL(l),n.setPath(u),n.setPrefix(c);for(var f=0;f<e.length;f++){var p=e[f].image,v="_MA_"+p,g=new o(n,v,p,d);if(this.addToMultiFile(g),n.addFile(g),e[f].normalMap){var y=new o(n,v,e[f].normalMap,d);y.type="normalMap",g.setLink(y),this.addToMultiFile(y),n.addFile(y)}}n.setBaseURL(s),n.setPath(a),n.setPrefix(h)}},addToCache:function(){if(this.isReadyToProcess()){var t=this.files[0];t.addToCache();for(var e=[],i=[],n=[],s=1;s<this.files.length;s++){var r=this.files[s];if("normalMap"!==r.type)for(var o=r.key.substr(4),a=r.data,h=0;h<t.data.textures.length;h++){var l=t.data.textures[h];if(l.image===o){i.push(a),e.push(l),r.linkFile&&n.push(r.linkFile.data);break}}}for(0===n.length&&(n=void 0),this.loader.textureManager.addAtlasJSONArray(this.key,i,e,n),this.complete=!0,s=0;s<this.files.length;s++)this.files[s].pendingDestroy()}}});s.register("multiatlas",function(t,e,i,n,s){var r;if(Array.isArray(t))for(var o=0;o<t.length;o++)r=new u(this,t[o]),this.addFile(r.files);else r=new u(this,t,e,i,n,s),this.addFile(r.files);return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(7),o=i(47),a=new n({Extends:o,initialize:function(t,e,i,n,s){o.call(this,t,e,i,n,s),this.type="packfile"},onProcess:function(){this.state!==s.FILE_POPULATED&&(this.state=s.FILE_PROCESSING,this.data=JSON.parse(this.xhrLoader.responseText)),this.loader.addPack(this.data,this.config),this.onProcessComplete()}});r.register("pack",function(t,e,i,n){if(Array.isArray(t))for(var s=0;s<t.length;s++)this.addFile(new a(this,t[s]));else this.addFile(new a(this,t,e,n,i));return this}),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=i(13),u=new n({Extends:r,initialize:function(t,e,i,n){var s="js";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}"function"==typeof i&&(window[e]=i,window[e].register(l));var u={type:"script",cache:!1,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,u)},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=document.createElement("script"),this.data.language="javascript",this.data.type="text/javascript",this.data.defer=!1,this.data.text=this.xhrLoader.responseText,document.head.appendChild(this.data),window[this.key].register(l),this.onProcessComplete()}});o.register("plugin",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new u(this,t[n]));else this.addFile(new u(this,t,e,i));return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n){var s="svg";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}var l={type:"svg",cache:t.textureManager,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,t,l)},onProcess:function(){this.state=s.FILE_PROCESSING;var t=[this.xhrLoader.responseText];try{var e=new window.Blob(t,{type:"image/svg+xml;charset=utf-8"})}catch(t){return void this.onProcessError()}this.data=new Image,this.data.crossOrigin=this.crossOrigin;var i=this,n=!1;this.data.onload=function(){n||r.revokeObjectURL(i.data),i.onProcessComplete()},this.data.onerror=function(){n?i.onProcessError():(n=!0,r.revokeObjectURL(i.data),i.data.src="data:image/svg+xml,"+encodeURIComponent(t.join("")))},r.createObjectURL(this.data,e,"image/svg+xml")},addToCache:function(){var t=this.cache.addImage(this.key,this.data);this.pendingDestroy(t)}});o.register("svg",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(this,t[n]));else this.addFile(new l(this,t,e,i));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=new n({Extends:r,initialize:function(t,e,i,n){var s="js";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}var l={type:"script",cache:!1,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,l)},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=document.createElement("script"),this.data.language="javascript",this.data.type="text/javascript",this.data.defer=!1,this.data.text=this.xhrLoader.responseText,document.head.appendChild(this.data),this.onProcessComplete()}});o.register("script",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new l(this,t[n]));else this.addFile(new l(this,t,e,i));return this}),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(53),o=new n({Extends:r,initialize:function(t,e,i,n,s){r.call(this,t,e,i,s,n),this.type="spritesheet"},addToCache:function(){var t=this.cache.addSpriteSheet(this.key,this.data,this.config);this.pendingDestroy(t)}});s.register("spritesheet",function(t,e,i,n){if(Array.isArray(t))for(var s=0;s<t.length;s++)this.addFile(new o(this,t[s]));else this.addFile(new o(this,t,e,i,n));return this}),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(20),r=i(21),o=i(7),a=i(1),h=i(11),l=i(27),u=new n({Extends:r,initialize:function(t,e,i,n){var s="csv";if(h(e)){var o=e;e=a(o,"key"),i=a(o,"url"),n=a(o,"xhrSettings"),s=a(o,"extension",s)}var u={type:"tilemapCSV",cache:t.cacheManager.tilemap,extension:s,responseType:"text",key:e,url:i,xhrSettings:n};r.call(this,t,u),this.tilemapFormat=l.CSV},onProcess:function(){this.state=s.FILE_PROCESSING,this.data=this.xhrLoader.responseText,this.onProcessComplete()},addToCache:function(){var t={format:this.tilemapFormat,data:this.data};this.cache.add(this.key,t),this.pendingDestroy(t)}});o.register("tilemapCSV",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new u(this,t[n]));else this.addFile(new u(this,t,e,i));return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(47),o=i(27),a=new n({Extends:r,initialize:function(t,e,i,n){r.call(this,t,e,i,n),this.type="tilemapJSON",this.cache=t.cacheManager.tilemap},addToCache:function(){var t={format:o.WELTMEISTER,data:this.data};this.cache.add(this.key,t),this.pendingDestroy(t)}});s.register("tilemapImpact",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new a(this,t[n]));else this.addFile(new a(this,t,e,i));return this}),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(47),o=i(27),a=new n({Extends:r,initialize:function(t,e,i,n){r.call(this,t,e,i,n),this.type="tilemapJSON",this.cache=t.cacheManager.tilemap},addToCache:function(){var t={format:o.TILED_JSON,data:this.data};this.cache.add(this.key,t),this.pendingDestroy(t)}});s.register("tilemapTiledJSON",function(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)this.addFile(new a(this,t[n]));else this.addFile(new a(this,t,e,i));return this}),t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(7),r=i(1),o=i(53),a=i(11),h=i(52),l=i(309),u=new n({Extends:h,initialize:function(t,e,i,n,s,u){var c,d;if(a(e)){var f=e;c=new o(t,{key:e,url:r(f,"textureURL"),extension:r(f,"textureExtension","png"),normalMap:r(f,"normalMap"),xhrSettings:r(f,"textureXhrSettings")}),d=new l(t,{key:e,url:r(f,"atlasURL"),extension:r(f,"atlasExtension","txt"),xhrSettings:r(f,"atlasXhrSettings")})}else c=new o(t,e,i,s),d=new l(t,e,n,u);c.linkFile?h.call(this,t,"unityatlas",e,[c,d,c.linkFile]):h.call(this,t,"unityatlas",e,[c,d])},addToCache:function(){if(0===this.failed&&!this.complete){var t=this.files[0],e=this.files[1],i=this.files[2]?this.files[2].data:null;this.loader.textureManager.addUnityAtlas(t.key,t.data,e.data,i),e.addToCache(),this.complete=!0}}});s.register("unityAtlas",function(t,e,i,n,s){var r;if(Array.isArray(t))for(var o=0;o<t.length;o++)r=new u(this,t[o]),this.addFile(r.files);else r=new u(this,t,e,i,n,s),this.addFile(r.files);return this}),t.exports=u},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={AnimationJSONFile:i(771),AtlasJSONFile:i(772),AtlasXMLFile:i(773),AudioFile:i(307),AudioSpriteFile:i(774),BinaryFile:i(775),BitmapFontFile:i(776),GLSLFile:i(777),HTML5AudioFile:i(308),HTMLFile:i(778),ImageFile:i(53),JSONFile:i(47),MultiAtlasFile:i(779),PackFile:i(780),PluginFile:i(781),ScriptFile:i(783),SpriteSheetFile:i(784),SVGFile:i(782),TextFile:i(309),TilemapCSVFile:i(785),TilemapImpactFile:i(786),TilemapJSONFile:i(787),UnityAtlasFile:i(788),XMLFile:i(164)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(20),s=i(19),r={FileTypes:i(789),File:i(21),FileTypesManager:i(7),GetURL:i(162),LoaderPlugin:i(770),MergeXHRSettings:i(163),MultiFile:i(52),XHRLoader:i(306),XHRSettings:i(105)};r=s(!1,r,n),t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=0,i=0;i<t.length;i++)e+=+t[i];return e/t.length};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=10);var n=Math.pow(i,-e);return Math.ceil(t*n)/n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.abs(t-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=10);var n=Math.pow(i,-e);return Math.floor(t*n)/n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t/e/1e3};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t==parseFloat(t)?!(t%2):void 0};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t===parseFloat(t)?!(t%2):void 0};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.min(t+e,i)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.max(t-e,i)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===i&&(i=e+1);var s=(t-e)/(i-e);return s>1?void 0!==n?(s=(n-t)/(n-i))<0&&(s=0):s=1:s<0&&(s=0),s};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1);var i=2*Math.random()*Math.PI;return t.x=Math.cos(i)*e,t.y=Math.sin(i)*e,t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=10);var n=Math.pow(i,-e);return Math.round(t*n)/n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=1),void 0===i&&(i=1),void 0===n&&(n=1),n*=Math.PI/t;for(var s=[],r=[],o=0;o<t;o++)i-=e*n,e+=i*n,s[o]=i,r[o]=e;return{sin:r,cos:s,length:t}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return Math.abs(t-e)<=i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){return Math.atan2(n-e,i-t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return Math.atan2(e.x-t.x,e.y-t.y)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){return Math.atan2(i-t,n-e)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(325),s=function(t){return n(t+Math.PI)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=function(t,e,i){return void 0===i&&(i=.05),t===e?t:(Math.abs(e-t)<=i||Math.abs(e-t)>=n.PI2-i?t=e:(Math.abs(e-t)>Math.PI&&(e<t?e+=n.PI2:e-=n.PI2),e>t?t+=i:e<t&&(t-=i)),t)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=e-t;return 0===i?0:i-360*Math.floor((i- -180)/360)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Between:i(805),BetweenY:i(808),BetweenPoints:i(806),BetweenPointsY:i(807),Reverse:i(809),RotateTo:i(810),ShortestBetween:i(811),Normalize:i(325),Wrap:i(171),WrapDegrees:i(172)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){return void 0===s&&(s=2),Math.sqrt(Math.pow(i-t,s)+Math.pow(n-e,s))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=t-i,r=e-n;return s*s+r*r};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Between:i(54),Power:i(813),Squared:i(814)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(326),s=i(327),r=i(328),o=i(329),a=i(330),h=i(331),l=i(332),u=i(333),c=i(334),d=i(335),f=i(336),p=i(337);t.exports={Power0:l,Power1:u.Out,Power2:o.Out,Power3:c.Out,Power4:d.Out,Linear:l,Quad:u.Out,Cubic:o.Out,Quart:c.Out,Quint:d.Out,Sine:f.Out,Expo:h.Out,Circ:r.Out,Elastic:a.Out,Back:n.Out,Bounce:s.Out,Stepped:p,"Quad.easeIn":u.In,"Cubic.easeIn":o.In,"Quart.easeIn":c.In,"Quint.easeIn":d.In,"Sine.easeIn":f.In,"Expo.easeIn":h.In,"Circ.easeIn":r.In,"Elastic.easeIn":a.In,"Back.easeIn":n.In,"Bounce.easeIn":s.In,"Quad.easeOut":u.Out,"Cubic.easeOut":o.Out,"Quart.easeOut":c.Out,"Quint.easeOut":d.Out,"Sine.easeOut":f.Out,"Expo.easeOut":h.Out,"Circ.easeOut":r.Out,"Elastic.easeOut":a.Out,"Back.easeOut":n.Out,"Bounce.easeOut":s.Out,"Quad.easeInOut":u.InOut,"Cubic.easeInOut":o.InOut,"Quart.easeInOut":c.InOut,"Quint.easeInOut":d.InOut,"Sine.easeInOut":f.InOut,"Expo.easeInOut":h.InOut,"Circ.easeInOut":r.InOut,"Elastic.easeInOut":a.InOut,"Back.easeInOut":n.InOut,"Bounce.easeInOut":s.InOut}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1.70158),t*t*((e+1)*t-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){void 0===e&&(e=1.70158);var i=1.525*e;return(t*=2)<1?t*t*((i+1)*t-i)*.5:.5*((t-=2)*t*((i+1)*t+i)+2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1.70158),--t*t*((e+1)*t+e)+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){var e=!1;return t<.5?(t=1-2*t,e=!0):t=2*t-1,t<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 1-Math.sqrt(1-t*t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.sqrt(1- --t*t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return--t*t*t+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(void 0===e&&(e=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var n=i/4;return e<1?e=1:n=i*Math.asin(1/e)/(2*Math.PI),-e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/i)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(void 0===e&&(e=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var n=i/4;return e<1?e=1:n=i*Math.asin(1/e)/(2*Math.PI),(t*=2)<1?e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/i)*-.5:e*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/i)*.5+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(void 0===e&&(e=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var n=i/4;return e<1?e=1:n=i*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/i)+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return Math.pow(2,10*(t-1))-.001};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 1-Math.pow(2,-10*t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Back:i(326),Bounce:i(327),Circular:i(328),Cubic:i(329),Elastic:i(330),Expo:i(331),Linear:i(332),Quadratic:i(333),Quartic:i(334),Quintic:i(335),Sine:i(336),Stepped:i(337)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*(2-t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 1- --t*t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t*t*t*t*t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return--t*t*t*t*t+1};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t?0:1===t?1:1-Math.cos(t*Math.PI/2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t?0:1===t?1:.5*(1-Math.cos(Math.PI*t))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return 0===t?0:1===t?1:Math.sin(t*Math.PI/2)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1),t<=0?0:t>=1?1:1/e*(1+(e*t|0))};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1e-4),Math.ceil(t-e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=1e-4),Math.abs(t-e)<i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return void 0===e&&(e=1e-4),Math.floor(t+e)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=1e-4),t>e-i};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=1e-4),t<e+i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Ceil:i(850),Equal:i(851),Floor:i(852),GreaterThan:i(853),LessThan:i(854)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(17),s=i(19),r={Angle:i(812),Distance:i(815),Easing:i(835),Fuzzy:i(855),Interpolation:i(860),Pow2:i(862),Snap:i(866),RandomDataGenerator:i(341),Average:i(791),Bernstein:i(310),Between:i(311),CatmullRom:i(165),CeilTo:i(792),Clamp:i(28),DegToRad:i(48),Difference:i(793),Factorial:i(312),FloatBetween:i(313),FloorTo:i(794),FromPercent:i(84),GetSpeed:i(795),IsEven:i(796),IsEvenStrict:i(797),Linear:i(166),MaxAdd:i(798),MinSub:i(799),Percent:i(800),RadToDeg:i(168),RandomXY:i(801),RandomXYZ:i(316),RandomXYZW:i(317),Rotate:i(318),RotateAround:i(319),RotateAroundDistance:i(169),RoundAwayFromZero:i(321),RoundTo:i(802),SinCosTableGenerator:i(803),SmootherStep:i(323),SmoothStep:i(322),TransformXY:i(324),Within:i(804),Wrap:i(49),Vector2:i(4),Vector3:i(71),Vector4:i(170),Matrix3:i(314),Matrix4:i(167),Quaternion:i(315),RotateVec3:i(320)};r=s(!1,r,n),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(310),s=function(t,e){for(var i=0,s=t.length-1,r=0;r<=s;r++)i+=Math.pow(1-e,s-r)*Math.pow(e,r)*t[r]*n(s,r);return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(165),s=function(t,e){var i=t.length-1,s=i*e,r=Math.floor(s);return t[0]===t[i]?(e<0&&(r=Math.floor(s=i*(1+e))),n(s-r,t[(r-1+i)%i],t[r],t[(r+1)%i],t[(r+2)%i])):e<0?t[0]-(n(-s,t[0],t[0],t[1],t[1])-t[0]):e>1?t[i]-(n(s-i,t[i],t[i],t[i-1],t[i-1])-t[i]):n(s-r,t[r?r-1:0],t[r],t[i<r+1?i:r+1],t[i<r+2?i:r+2])};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(166),s=function(t,e){var i=t.length-1,s=i*e,r=Math.floor(s);return e<0?n(t[0],t[1],s):e>1?n(t[i],t[i-1],i-s):n(t[r],t[r+1>i?i:r+1],s-r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Bezier:i(857),CatmullRom:i(858),CubicBezier:i(338),Linear:i(859),QuadraticBezier:i(339)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t>0&&0==(t&t-1)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GetNext:i(340),IsSize:i(106),IsValue:i(861)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=0),0===e?t:(t-=i,t=e*Math.ceil(t/e),i+t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=0),0===e?t:(t-=i,t=e*Math.floor(t/e),i+t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){return void 0===i&&(i=0),0===e?t:(t-=i,t=e*Math.round(t/e),i+t)};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Ceil:i(863),Floor:i(864),To:i(865)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(48),r=i(54),o=i(345),a=i(1),h=i(77),l=i(13),u=i(4),c=i(351),d=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.config=this.getConfig(),this.world,this.add,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.world=new c(this.scene,this.config),this.add=new o(this.world),this.systems.events.once("destroy",this.destroy,this)},start:function(){this.world||(this.world=new c(this.scene,this.config),this.add=new o(this.world));var t=this.systems.events;t.on("update",this.world.update,this.world),t.on("postupdate",this.world.postUpdate,this.world),t.once("shutdown",this.shutdown,this)},getConfig:function(){var t=this.systems.game.config.physics,e=this.systems.settings.physics;return h(a(e,"arcade",{}),a(t,"arcade",{}))},overlap:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.world.collideObjects(t,e,i,n,s,!0)},collide:function(t,e,i,n,s){return void 0===i&&(i=null),void 0===n&&(n=null),void 0===s&&(s=i),this.world.collideObjects(t,e,i,n,s,!1)},pause:function(){return this.world.pause()},resume:function(){return this.world.resume()},accelerateTo:function(t,e,i,n,s,r){void 0===n&&(n=60);var o=Math.atan2(i-t.y,e-t.x);return t.body.acceleration.setToPolar(o,n),void 0!==s&&void 0!==r&&t.body.maxVelocity.set(s,r),o},accelerateToObject:function(t,e,i,n,s){return this.accelerateTo(t,e.x,e.y,i,n,s)},closest:function(t){for(var e=this.tree.all(),i=Number.MAX_VALUE,n=null,s=t.x,o=t.y,a=e.length-1;a>=0;a--){var h=e[a],l=r(s,o,h.x,h.y);l<i&&(n=h,i=l)}return n},furthest:function(t){for(var e=this.tree.all(),i=-1,n=null,s=t.x,o=t.y,a=e.length-1;a>=0;a--){var h=e[a],l=r(s,o,h.x,h.y);l>i&&(n=h,i=l)}return n},moveTo:function(t,e,i,n,s){void 0===n&&(n=60),void 0===s&&(s=0);var o=Math.atan2(i-t.y,e-t.x);return s>0&&(n=r(t.x,t.y,e,i)/(s/1e3)),t.body.velocity.setToPolar(o,n),o},moveToObject:function(t,e,i,n){return this.moveTo(t,e.x,e.y,i,n)},velocityFromAngle:function(t,e,i){return void 0===e&&(e=60),void 0===i&&(i=new u),i.setToPolar(s(t),e)},velocityFromRotation:function(t,e,i){return void 0===e&&(e=60),void 0===i&&(i=new u),i.setToPolar(t,e)},shutdown:function(){var t=this.systems.events;t.off("update",this.world.update,this.world),t.off("postupdate",this.world.postUpdate,this.world),t.off("shutdown",this.shutdown,this),this.add.destroy(),this.world.destroy(),this.add=null,this.world=null},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});l.register("ArcadePhysics",d,"arcadePhysics"),t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(346),s=function(t,e,i,s){var r=n(t,e,i,s);if(i||0===r||t.immovable&&e.immovable||t.customSeparateX||e.customSeparateX)return 0!==r||t.embedded&&e.embedded;var o=t.velocity.x,a=e.velocity.x;if(t.immovable||e.immovable)t.immovable?(e.x+=r,e.velocity.x=o-a*e.bounce.x,t.moves&&(e.y+=(t.y-t.prev.y)*t.friction.y)):(t.x-=r,t.velocity.x=a-o*t.bounce.x,e.moves&&(t.y+=(e.y-e.prev.y)*e.friction.y));else{r*=.5,t.x-=r,e.x+=r;var h=Math.sqrt(a*a*e.mass/t.mass)*(a>0?1:-1),l=Math.sqrt(o*o*t.mass/e.mass)*(o>0?1:-1),u=.5*(h+l);h-=u,l-=u,t.velocity.x=u+h*t.bounce.x,e.velocity.x=u+l*e.bounce.x}return!0};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(347),s=function(t,e,i,s){var r=n(t,e,i,s);if(i||0===r||t.immovable&&e.immovable||t.customSeparateY||e.customSeparateY)return 0!==r||t.embedded&&e.embedded;var o=t.velocity.y,a=e.velocity.y;if(t.immovable||e.immovable)t.immovable?(e.y+=r,e.velocity.y=o-a*e.bounce.y,t.moves&&(e.x+=(t.x-t.prev.x)*t.friction.x)):(t.y-=r,t.velocity.y=a-o*t.bounce.y,e.moves&&(t.x+=(e.x-e.prev.x)*e.friction.x));else{r*=.5,t.y-=r,e.y+=r;var h=Math.sqrt(a*a*e.mass/t.mass)*(a>0?1:-1),l=Math.sqrt(o*o*t.mass/e.mass)*(o>0?1:-1),u=.5*(h+l);h-=u,l-=u,t.velocity.y=u+h*t.bounce.y,e.velocity.y=u+l*e.bounce.y}return!0};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setAcceleration:function(t,e){return this.body.acceleration.set(t,e),this},setAccelerationX:function(t){return this.body.acceleration.x=t,this},setAccelerationY:function(t){return this.body.acceleration.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setAngularVelocity:function(t){return this.body.angularVelocity=t,this},setAngularAcceleration:function(t){return this.body.angularAcceleration=t,this},setAngularDrag:function(t){return this.body.angularDrag=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBounce:function(t,e){return this.body.bounce.set(t,e),this},setBounceX:function(t){return this.body.bounce.x=t,this},setBounceY:function(t){return this.body.bounce.y=t,this},setCollideWorldBounds:function(t){return this.body.collideWorldBounds=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setDebug:function(t,e,i){return this.debugShowBody=t,this.debugShowVelocity=e,this.debugBodyColor=i,this},setDebugBodyColor:function(t){return this.body.debugBodyColor=t,this},debugShowBody:{get:function(){return this.body.debugShowBody},set:function(t){this.body.debugShowBody=t}},debugShowVelocity:{get:function(){return this.body.debugShowVelocity},set:function(t){this.body.debugShowVelocity=t}},debugBodyColor:{get:function(){return this.body.debugBodyColor},set:function(t){this.body.debugBodyColor=t}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setDrag:function(t,e){return this.body.drag.set(t,e),this},setDragX:function(t){return this.body.drag.x=t,this},setDragY:function(t){return this.body.drag.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={enableBody:function(t,e,i,n,s){return t&&this.body.reset(e,i),n&&(this.body.gameObject.active=!0),s&&(this.body.gameObject.visible=!0),this.body.enable=!0,this},disableBody:function(t,e){return void 0===t&&(t=!1),void 0===e&&(e=!1),this.body.stop(),this.body.enable=!1,t&&(this.body.gameObject.active=!1),e&&(this.body.gameObject.visible=!1),this},refreshBody:function(){return this.body.updateFromGameObject(),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setFriction:function(t,e){return this.body.friction.set(t,e),this},setFrictionX:function(t){return this.body.friction.x=t,this},setFrictionY:function(t){return this.body.friction.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setGravity:function(t,e){return this.body.gravity.set(t,e),this},setGravityX:function(t){return this.body.gravity.x=t,this},setGravityY:function(t){return this.body.gravity.y=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setImmovable:function(t){return void 0===t&&(t=!0),this.body.immovable=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setMass:function(t){return this.body.mass=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setOffset:function(t,e){return this.body.setOffset(t,e),this},setSize:function(t,e,i){return this.body.setSize(t,e,i),this},setCircle:function(t,e,i){return this.body.setCircle(t,e,i),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setVelocity:function(t,e){return this.body.velocity.set(t,e),this},setVelocityX:function(t){return this.body.velocity.x=t,this},setVelocityY:function(t){return this.body.velocity.y=t,this},setMaxVelocity:function(t,e){return this.body.maxVelocity.set(t,e),this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(55),s=i(19),r={ArcadePhysics:i(867),Body:i(343),Collider:i(344),Factory:i(345),Group:i(348),Image:i(342),Sprite:i(107),StaticBody:i(349),StaticGroup:i(350),World:i(351)};r=s(!1,r,n),t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.collisionCallback?!t.collisionCallback.call(t.collisionCallbackContext,e,t):!t.layer.callbacks[t.index]||!t.layer.callbacks[t.index].callback.call(t.layer.callbacks[t.index].callbackContext,e,t)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){e<0?t.blocked.left=!0:e>0&&(t.blocked.right=!0),t.position.x-=e,0===t.bounce.x?t.velocity.x=0:t.velocity.x=-t.velocity.x*t.bounce.x};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){e<0?t.blocked.up=!0:e>0&&(t.blocked.down=!0),t.position.y-=e,0===t.bounce.y?t.velocity.y=0:t.velocity.y=-t.velocity.y*t.bounce.y};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(887),s=i(888),r=i(353),o=function(t,e,i,o,a,h){var l=o.left,u=o.top,c=o.right,d=o.bottom,f=i.faceLeft||i.faceRight,p=i.faceTop||i.faceBottom;if(!f&&!p)return!1;var v=0,g=0,y=0,m=1;if(e.deltaAbsX()>e.deltaAbsY()?y=-1:e.deltaAbsX()<e.deltaAbsY()&&(m=-1),0!==e.deltaX()&&0!==e.deltaY()&&f&&p&&(y=Math.min(Math.abs(e.position.x-c),Math.abs(e.right-l)),m=Math.min(Math.abs(e.position.y-d),Math.abs(e.bottom-u))),y<m){if(f&&0!==(v=n(e,i,l,c,h))&&!r(o,e))return!0;p&&(g=s(e,i,u,d,h))}else{if(p&&0!==(g=s(e,i,u,d,h))&&!r(o,e))return!0;f&&(v=n(e,i,l,c,h))}return 0!==v||0!==g};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(884),s=function(t,e,i,s,r){var o=0;return t.deltaX()<0&&!t.blocked.left&&e.collideRight&&t.checkCollision.left?e.faceRight&&t.x<s&&(o=t.x-s)<-r&&(o=0):t.deltaX()>0&&!t.blocked.right&&e.collideLeft&&t.checkCollision.right&&e.faceLeft&&t.right>i&&(o=t.right-i)>r&&(o=0),0!==o&&(t.customSeparateX?t.overlapX=o:n(t,o)),o};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(885),s=function(t,e,i,s,r){var o=0;return t.deltaY()<0&&!t.blocked.up&&e.collideDown&&t.checkCollision.up?e.faceBottom&&t.y<s&&(o=t.y-s)<-r&&(o=0):t.deltaY()>0&&!t.blocked.down&&e.collideUp&&t.checkCollision.down&&e.faceTop&&t.bottom>i&&(o=t.bottom-i)>r&&(o=0),0!==o&&(t.customSeparateY?t.overlapY=o:n(t,o)),o};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=.5,n=1/3,s=2/3;t.exports={2:[0,1,1,0,!0],3:[0,1,1,i,!0],4:[0,i,1,0,!0],5:[0,1,1,s,!0],6:[0,s,1,n,!0],7:[0,n,1,0,!0],8:[i,1,0,0,!0],9:[1,0,i,1,!0],10:[i,1,1,0,!0],11:[0,0,i,1,!0],12:[0,0,1,0,!1],13:[1,1,0,0,!0],14:[1,i,0,0,!0],15:[1,1,0,i,!0],16:[1,n,0,0,!0],17:[1,s,0,n,!0],18:[1,1,0,s,!0],19:[1,1,i,0,!0],20:[i,0,0,1,!0],21:[0,1,i,0,!0],22:[i,0,1,1,!0],23:[1,1,0,1,!1],24:[0,0,1,1,!0],25:[0,0,1,i,!0],26:[0,i,1,1,!0],27:[0,0,1,n,!0],28:[0,n,1,s,!0],29:[0,s,1,1,!0],30:[n,1,0,0,!0],31:[1,0,s,1,!0],32:[s,1,1,0,!0],33:[0,0,n,1,!0],34:[1,0,1,1,!1],35:[1,0,0,1,!0],36:[1,i,0,1,!0],37:[1,0,0,i,!0],38:[1,s,0,1,!0],39:[1,n,0,s,!0],40:[1,0,0,n,!0],41:[s,1,n,0,!0],42:[s,0,n,1,!0],43:[n,1,s,0,!0],44:[n,0,s,1,!0],45:[0,1,0,0,!1],52:[1,1,s,0,!0],53:[n,0,0,1,!0],54:[0,1,n,0,!0],55:[s,0,1,1,!0]}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=function(t,e,i,s,r){if(i)return n(e+i*t,-r,r);if(s){var o=s*t;return e-o>0?e-o:e+o<0?e+o:0}return n(e,-r,r)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(356),r=i(1),o=i(77),a=i(13),h=i(360),l=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.config=this.getConfig(),this.world,this.add,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.world=new h(this.scene,this.config),this.add=new s(this.world),this.systems.events.once("destroy",this.destroy,this)},start:function(){this.world||(this.world=new h(this.scene,this.config),this.add=new s(this.world));var t=this.systems.events;t.on("update",this.world.update,this.world),t.once("shutdown",this.shutdown,this)},getConfig:function(){var t=this.systems.game.config.physics,e=this.systems.settings.physics;return o(r(e,"impact",{}),r(t,"impact",{}))},pause:function(){return this.world.pause()},resume:function(){return this.world.resume()},shutdown:function(){var t=this.systems.events;t.off("update",this.world.update,this.world),t.off("shutdown",this.shutdown,this),this.add.destroy(),this.world.destroy(),this.add=null,this.world=null},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});a.register("ImpactPhysics",l,"impactPhysics"),t.exports=l},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s=e.pos.x+e.size.x-i.pos.x;if(n){var r=e===n?i:e;n.vel.x=-n.vel.x*n.bounciness+r.vel.x;var o=t.collisionMap.trace(n.pos.x,n.pos.y,n===e?-s:s,0,n.size.x,n.size.y);n.pos.x=o.pos.x}else{var a=(e.vel.x-i.vel.x)/2;e.vel.x=-a,i.vel.x=a;var h=t.collisionMap.trace(e.pos.x,e.pos.y,-s/2,0,e.size.x,e.size.y);e.pos.x=Math.floor(h.pos.x);var l=t.collisionMap.trace(i.pos.x,i.pos.y,s/2,0,i.size.x,i.size.y);i.pos.x=Math.ceil(l.pos.x)}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){var s,r,o=e.pos.y+e.size.y-i.pos.y;if(n){var a=e===n?i:e;n.vel.y=-n.vel.y*n.bounciness+a.vel.y,s=0,n===e&&Math.abs(n.vel.y-a.vel.y)<n.minBounceVelocity&&(n.standing=!0,s=a.vel.x*t.delta);var h=t.collisionMap.trace(n.pos.x,n.pos.y,s,n===e?-o:o,n.size.x,n.size.y);n.pos.y=h.pos.y,n.pos.x=h.pos.x}else if(t.gravity&&(i.standing||e.vel.y>0))r=t.collisionMap.trace(e.pos.x,e.pos.y,0,-(e.pos.y+e.size.y-i.pos.y),e.size.x,e.size.y),e.pos.y=r.pos.y,e.bounciness>0&&e.vel.y>e.minBounceVelocity?e.vel.y*=-e.bounciness:(e.standing=!0,e.vel.y=0);else{var l=(e.vel.y-i.vel.y)/2;e.vel.y=-l,i.vel.y=l,s=i.vel.x*t.delta,r=t.collisionMap.trace(e.pos.x,e.pos.y,s,-o/2,e.size.x,e.size.y),e.pos.y=r.pos.y;var u=t.collisionMap.trace(i.pos.x,i.pos.y,0,o/2,i.size.x,i.size.y);i.pos.y=u.pos.y}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(85),s=i(892),r=i(893),o=function(t,e,i){var o=null;e.collides===n.LITE||i.collides===n.FIXED?o=e:i.collides!==n.LITE&&e.collides!==n.FIXED||(o=i),e.last.x+e.size.x>i.last.x&&e.last.x<i.last.x+i.size.x?(e.last.y<i.last.y?r(t,e,i,o):r(t,i,e,o),e.collideWith(i,"y"),i.collideWith(e,"y"),t.emit("collide",e,i,"y")):e.last.y+e.size.y>i.last.y&&e.last.y<i.last.y+i.size.y&&(e.last.x<i.last.x?s(t,e,i,o):s(t,i,e,o),e.collideWith(i,"x"),i.collideWith(e,"x"),t.emit("collide",e,i,"x"))};t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){if(t.standing=!1,e.collision.y&&(t.bounciness>0&&Math.abs(t.vel.y)>t.minBounceVelocity?t.vel.y*=-t.bounciness:(t.vel.y>0&&(t.standing=!0),t.vel.y=0)),e.collision.x&&(t.bounciness>0&&Math.abs(t.vel.x)>t.minBounceVelocity?t.vel.x*=-t.bounciness:t.vel.x=0),e.collision.slope){var i=e.collision.slope;if(t.bounciness>0){var n=t.vel.x*i.nx+t.vel.y*i.ny;t.vel.x=(t.vel.x-i.nx*n*2)*t.bounciness,t.vel.y=(t.vel.y-i.ny*n*2)*t.bounciness}else{var s=i.x*i.x+i.y*i.y,r=(t.vel.x*i.x+t.vel.y*i.y)/s;t.vel.x=i.x*r,t.vel.y=i.y*r;var o=Math.atan2(i.x,i.y);o>t.slopeStanding.min&&o<t.slopeStanding.max&&(t.standing=!0)}}t.pos.x=e.pos.x,t.pos.y=e.pos.y};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setAccelerationX:function(t){return this.accel.x=t,this},setAccelerationY:function(t){return this.accel.y=t,this},setAcceleration:function(t,e){return this.accel.x=t,this.accel.y=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBodySize:function(t,e){return void 0===e&&(e=t),this.body.size.x=Math.round(t),this.body.size.y=Math.round(e),this},setBodyScale:function(t,e){void 0===e&&(e=t);var i=this.body.gameObject;return i?(i.setScale(t,e),this.setBodySize(i.width*i.scaleX,i.height*i.scaleY)):this.setBodySize(this.body.size.x*t,this.body.size.y*e)}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(86),s={getBodyType:function(){return this.body.type},setTypeNone:function(){return this.body.type=n.NONE,this},setTypeA:function(){return this.body.type=n.A,this},setTypeB:function(){return this.body.type=n.B,this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBounce:function(t){return this.body.bounciness=t,this},setMinBounceVelocity:function(t){return this.body.minBounceVelocity=t,this},bounce:{get:function(){return this.body.bounciness},set:function(t){this.body.bounciness=t}}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(86),s={setAvsB:function(){return this.setTypeA(),this.setCheckAgainstB()},setBvsA:function(){return this.setTypeB(),this.setCheckAgainstA()},setCheckAgainstNone:function(){return this.body.checkAgainst=n.NONE,this},setCheckAgainstA:function(){return this.body.checkAgainst=n.A,this},setCheckAgainstB:function(){return this.body.checkAgainst=n.B,this},checkAgainst:{get:function(){return this.body.checkAgainst},set:function(t){this.body.checkAgainst=t}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(85),s={_collideCallback:null,_callbackScope:null,setCollideCallback:function(t,e){return this._collideCallback=t,e&&(this._callbackScope=e),this},setCollidesNever:function(){return this.body.collides=n.NEVER,this},setLiteCollision:function(){return this.body.collides=n.LITE,this},setPassiveCollision:function(){return this.body.collides=n.PASSIVE,this},setActiveCollision:function(){return this.body.collides=n.ACTIVE,this},setFixedCollision:function(){return this.body.collides=n.FIXED,this},collides:{get:function(){return this.body.collides},set:function(t){this.body.collides=t}}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setDebug:function(t,e,i){return this.debugShowBody=t,this.debugShowVelocity=e,this.debugBodyColor=i,this},setDebugBodyColor:function(t){return this.body.debugBodyColor=t,this},debugShowBody:{get:function(){return this.body.debugShowBody},set:function(t){this.body.debugShowBody=t}},debugShowVelocity:{get:function(){return this.body.debugShowVelocity},set:function(t){this.body.debugShowVelocity=t}},debugBodyColor:{get:function(){return this.body.debugBodyColor},set:function(t){this.body.debugBodyColor=t}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setFrictionX:function(t){return this.friction.x=t,this},setFrictionY:function(t){return this.friction.y=t,this},setFriction:function(t,e){return this.friction.x=t,this.friction.y=e,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setGravity:function(t){return this.body.gravityFactor=t,this},gravity:{get:function(){return this.body.gravityFactor},set:function(t){this.body.gravityFactor=t}}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setOffset:function(t,e,i,n){return this.body.offset.x=t,this.body.offset.y=e,i&&this.setBodySize(i,n),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setGameObject:function(t,e){return void 0===e&&(e=!0),t?(this.body.gameObject=t,e&&this.syncGameObject()):this.body.gameObject=null,this},syncGameObject:function(){var t=this.body.gameObject;return t&&this.setBodySize(t.width*t.scaleX,t.height*t.scaleY),this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setVelocityX:function(t){return this.vel.x=t,this},setVelocityY:function(t){return this.vel.y=t,this},setVelocity:function(t,e){return void 0===e&&(e=t),this.vel.x=t,this.vel.y=e,this},setMaxVelocity:function(t,e){return void 0===e&&(e=t),this.maxVel.x=t,this.maxVel.y=e,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Body:i(354),COLLIDES:i(85),CollisionMap:i(355),Factory:i(356),Image:i(358),ImpactBody:i(357),ImpactPhysics:i(891),Sprite:i(359),TYPE:i(86),World:i(360)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Arcade:i(882),Impact:i(908),Matter:i(925)}},function(t,e,i){function n(t){return!!t.get&&"function"==typeof t.get||!!t.set&&"function"==typeof t.set}/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var s=i(108),r=i(1),o=i(4),a=function(t,e,i){void 0===i&&(i={});var a=e.x,h=e.y;e.body={position:{x:a,y:h}},[s.Bounce,s.Collision,s.Force,s.Friction,s.Gravity,s.Mass,s.Sensor,s.SetBody,s.Sleep,s.Static,s.Transform,s.Velocity].forEach(function(t){for(var i in t)n(t[i])?Object.defineProperty(e,i,{get:t[i].get,set:t[i].set}):Object.defineProperty(e,i,{value:t[i]})}),e.world=t,e._tempVec2=new o(a,h);var l=r(i,"shape",null);return l||(l="rectangle"),e.setBody(l,i),e};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(361),r=i(1),o=i(5),a=i(929),h=i(369),l=i(930),u=i(77),c=i(179),d=i(13),f=i(364),p=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.config=this.getConfig(),this.world,this.add,o(this.config,"plugins.attractors",!1)&&(c.register(a),c.use(h,a)),o(this.config,"plugins.wrap",!1)&&(c.register(l),c.use(h,l)),t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.world=new f(this.scene,this.config),this.add=new s(this.world),this.systems.events.once("destroy",this.destroy,this)},start:function(){this.world||(this.world=new f(this.scene,this.config),this.add=new s(this.world));var t=this.systems.events;t.on("update",this.world.update,this.world),t.on("postupdate",this.world.postUpdate,this.world),t.once("shutdown",this.shutdown,this)},getConfig:function(){var t=this.systems.game.config.physics,e=this.systems.settings.physics;return u(r(e,"matter",{}),r(t,"matter",{}))},enableAttractorPlugin:function(){return c.register(a),c.use(h,a),this},enableWrapPlugin:function(){return c.register(l),c.use(h,l),this},pause:function(){return this.world.pause()},resume:function(){return this.world.resume()},set60Hz:function(){return this.world.getDelta=this.world.update60Hz,this.world.autoUpdate=!0,this},set30Hz:function(){return this.world.getDelta=this.world.update30Hz,this.world.autoUpdate=!0,this},step:function(t,e){this.world.step(t,e)},shutdown:function(){var t=this.systems.events;t.off("update",this.world.update,this.world),t.off("postupdate",this.world.postUpdate,this.world),t.off("shutdown",this.shutdown,this),this.add.destroy(),this.world.destroy(),this.add=null,this.world=null},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});d.register("MatterPhysics",p,"matterPhysics"),t.exports=p},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(42),s=i(0),r=i(56),o=i(72),a=i(177),h=i(1),l=i(77),u=i(87),c=i(4),d=i(43),f=new s({initialize:function(t,e,i){void 0===i&&(i={});var n={label:"Pointer Constraint",pointA:{x:0,y:0},pointB:{x:0,y:0},damping:0,length:.01,stiffness:.1,angularStiffness:1,collisionFilter:{category:1,mask:4294967295,group:0}};this.scene=t,this.world=e;var s=h(i,"camera",null);s?(this.camera=s,delete i.camera):this.camera=t.sys.cameras.main,this.pointer=null,this.active=!0,this.position=new c,this.constraint=o.create(l(i,n)),this.world.on("beforeupdate",this.update,this),t.sys.input.on("pointerdown",this.onDown,this),t.sys.input.on("pointerup",this.onUp,this)},onDown:function(t){this.pointer=t},onUp:function(){this.pointer=null},getBodyPart:function(t,e){for(var i=this.constraint,n=t.parts.length>1?1:0,s=n;s<t.parts.length;s++){var r=t.parts[s];if(d.contains(r.vertices,e))return i.bodyB=t,i.pointA.x=e.x,i.pointA.y=e.y,i.pointB.x=e.x-t.position.x,i.pointB.y=e.y-t.position.y,i.angleB=t.angle,u.set(t,!1),!0}return!1},update:function(){if(this.active){var t=this.pointer,e=this.constraint;if(t){var i=this.position;if(this.camera.getWorldPoint(t.x,t.y,i),e.bodyB)u.set(e.bodyB,!1),e.pointA.x=i.x,e.pointA.y=i.y;else for(var s=r.allBodies(this.world.localWorld),o=0;o<s.length;o++){var h=s[o];if(!h.ignorePointer&&n.contains(h.bounds,i)&&a.canCollide(h.collisionFilter,e.collisionFilter)&&this.getBodyPart(h,i))break}}else e.bodyB&&(e.bodyB=null)}},destroy:function(){this.world.removeConstraint(this.constraint),this.constraint=null,this.world.off("beforeupdate",this.update),this.scene.sys.input.off("pointerdown",this.onDown,this),this.scene.sys.input.off("pointerup",this.onUp,this)}});t.exports=f},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setBounce:function(t){return this.body.restitution=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setCollisionCategory:function(t){return this.body.collisionFilter.category=t,this},setCollisionGroup:function(t){return this.body.collisionFilter.group=t,this},setCollidesWith:function(t){var e=0;if(Array.isArray(t))for(var i=0;i<t.length;i++)e|=t[i];else e=t;return this.body.collisionFilter.mask=e,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s={applyForce:function(t){return this._tempVec2.set(this.body.position.x,this.body.position.y),n.applyForce(this.body,this._tempVec2,t),this},applyForceFrom:function(t,e){return n.applyForce(this.body,t,e),this},thrust:function(t){var e=this.body.angle;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this},thrustLeft:function(t){var e=this.body.angle-Math.PI/2;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this},thrustRight:function(t){var e=this.body.angle+Math.PI/2;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this},thrustBack:function(t){var e=this.body.angle-Math.PI;return this._tempVec2.set(t*Math.cos(e),t*Math.sin(e)),n.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y},this._tempVec2),this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setFriction:function(t,e,i){return this.body.friction=t,void 0!==e&&(this.body.frictionAir=e),void 0!==i&&(this.body.frictionStatic=i),this},setFrictionAir:function(t){return this.body.frictionAir=t,this},setFrictionStatic:function(t){return this.body.frictionStatic=t,this}};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setIgnoreGravity:function(t){return this.body.ignoreGravity=t,this}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s={setMass:function(t){return n.setMass(this.body,t),this},setDensity:function(t){return n.setDensity(this.body,t),this}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={setSensor:function(t){return this.body.isSensor=t,this},isSensor:function(){return this.body.isSensor}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(57),s=i(25),r=i(1),o={setRectangle:function(t,e,i){return this.setBody({type:"rectangle",width:t,height:e},i)},setCircle:function(t,e){return this.setBody({type:"circle",radius:t},e)},setPolygon:function(t,e,i){return this.setBody({type:"polygon",sides:e,radius:t},i)},setTrapezoid:function(t,e,i,n){return this.setBody({type:"trapezoid",width:t,height:e,slope:i},n)},setExistingBody:function(t,e){void 0===e&&(e=!0),this.body&&this.world.remove(this.body),this.body=t,this.body.gameObject=this;var i=this;return t.destroy=function(){i.world.remove(i.body),i.body.gameObject=null},e&&this.world.add(t),this._originComponent&&this.setOrigin(t.render.sprite.xOffset,t.render.sprite.yOffset),this},setBody:function(t,e){if(!t)return this;var i;"string"==typeof t&&(t={type:t});var o=r(t,"type","rectangle"),a=r(t,"x",this._tempVec2.x),h=r(t,"y",this._tempVec2.y),l=r(t,"width",this.width),u=r(t,"height",this.height);switch(o){case"rectangle":i=n.rectangle(a,h,l,u,e);break;case"circle":var c=r(t,"radius",Math.max(l,u)/2),d=r(t,"maxSides",25);i=n.circle(a,h,c,e,d);break;case"trapezoid":var f=r(t,"slope",.5);i=n.trapezoid(a,h,l,u,f,e);break;case"polygon":var p=r(t,"sides",5),v=r(t,"radius",Math.max(l,u)/2);i=n.polygon(a,h,p,v,e);break;case"fromVertices":case"fromVerts":var g=r(t,"verts",[]);if(this.body)s.setVertices(this.body,g),i=this.body;else{var y=r(t,"flagInternal",!1),m=r(t,"removeCollinear",.01),x=r(t,"minimumArea",10);i=n.fromVertices(a,h,g,e,y,m,x)}}return this.setExistingBody(i,t.addToWorld),this}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(73),s={setSleepThreshold:function(t){return void 0===t&&(t=60),this.body.sleepThreshold=t,this},setSleepEvents:function(t,e){return this.setSleepStartEvent(t),this.setSleepEndEvent(e),this},setSleepStartEvent:function(t){if(t){var e=this.world;n.on(this.body,"sleepStart",function(t){e.emit("sleepstart",t,this)})}else n.off(this.body,"sleepStart");return this},setSleepEndEvent:function(t){if(t){var e=this.world;n.on(this.body,"sleepEnd",function(t){e.emit("sleepend",t,this)})}else n.off(this.body,"sleepEnd");return this}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s={setStatic:function(t){return n.setStatic(this.body,t),this},isStatic:function(){return this.body.isStatic}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s=i(17),r=i(171),o=i(172),a={x:{get:function(){return this.body.position.x},set:function(t){this._tempVec2.set(t,this.y),n.setPosition(this.body,this._tempVec2)}},y:{get:function(){return this.body.position.y},set:function(t){this._tempVec2.set(this.x,t),n.setPosition(this.body,this._tempVec2)}},scaleX:{get:function(){return this._scaleX},set:function(t){this._scaleX=t,0===this._scaleX?this.renderFlags&=-5:this.renderFlags|=4,n.scale(this.body,t,this._scaleY)}},scaleY:{get:function(){return this._scaleY},set:function(t){this._scaleY=t,0===this._scaleY?this.renderFlags&=-5:this.renderFlags|=4,n.scale(this.body,this._scaleX,t)}},angle:{get:function(){return o(this.body.angle*s.RAD_TO_DEG)},set:function(t){this.rotation=o(t)*s.DEG_TO_RAD}},rotation:{get:function(){return this.body.angle},set:function(t){this._rotation=r(t),n.setAngle(this.body,this._rotation)}},setPosition:function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this._tempVec2.set(t,e),n.setPosition(this.body,this._tempVec2),this},setRotation:function(t){return void 0===t&&(t=0),this._rotation=r(t),n.setAngle(this.body,t),this},setFixedRotation:function(){return n.setInertia(this.body,1/0),this},setAngle:function(t){return void 0===t&&(t=0),this.angle=t,n.setAngle(this.body,this.rotation),this},setScale:function(t,e,i){return void 0===t&&(t=1),void 0===e&&(e=t),this._scaleX=t,this._scaleY=e,n.scale(this.body,t,e,i),this}};t.exports=a},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(25),s={setAngularVelocity:function(t){return n.setAngularVelocity(this.body,t),this},setVelocityX:function(t){return this._tempVec2.set(t,this.body.velocity.y),n.setVelocity(this.body,this._tempVec2),this},setVelocityY:function(t){return this._tempVec2.set(this.body.velocity.x,t),n.setVelocity(this.body,this._tempVec2),this},setVelocity:function(t,e){return this._tempVec2.set(t,e),n.setVelocity(this.body,this._tempVec2),this}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Factory:i(361),Image:i(362),Matter:i(174),MatterPhysics:i(911),PolyDecomp:i(371),Sprite:i(363),TileBody:i(175),World:i(364)}},function(t,e,i){var n={};t.exports=n;var s=i(30),r=i(178),o=i(42),a=i(57),h=i(43);!function(){n.ray=function(t,e,i,n){n=n||1e-100;for(var h=s.angle(e,i),l=s.magnitude(s.sub(e,i)),u=.5*(i.x+e.x),c=.5*(i.y+e.y),d=a.rectangle(u,c,l,n,{angle:h}),f=[],p=0;p<t.length;p++){var v=t[p];if(o.overlaps(v.bounds,d.bounds))for(var g=1===v.parts.length?0:1;g<v.parts.length;g++){var y=v.parts[g];if(o.overlaps(y.bounds,d.bounds)){var m=r.collides(y,d);if(m.collided){m.body=m.bodyA=m.bodyB=v,f.push(m);break}}}}return f},n.region=function(t,e,i){for(var n=[],s=0;s<t.length;s++){var r=t[s],a=o.overlaps(r.bounds,e);(a&&!i||!a&&i)&&n.push(r)}return n},n.point=function(t,e){for(var i=[],n=0;n<t.length;n++){var s=t[n];if(o.contains(s.bounds,e))for(var r=1===s.parts.length?0:1;r<s.parts.length;r++){var a=s.parts[r];if(o.contains(a.bounds,e)&&h.contains(a.vertices,e)){i.push(s);break}}}return i}}()},function(t,e,i){var n={};t.exports=n;var s=i(56),r=i(16);!function(){n.create=function(t){var e={extended:!1,narrowDetections:0,narrowphaseTests:0,narrowReuse:0,narrowReuseCount:0,midphaseTests:0,broadphaseTests:0,narrowEff:1e-4,midEff:1e-4,broadEff:1e-4,collisions:0,buckets:0,bodies:0,pairs:0};return r.extend(e,!1,t)},n.reset=function(t){t.extended&&(t.narrowDetections=0,t.narrowphaseTests=0,t.narrowReuse=0,t.narrowReuseCount=0,t.midphaseTests=0,t.broadphaseTests=0,t.narrowEff=0,t.midEff=0,t.broadEff=0,t.collisions=0,t.buckets=0,t.pairs=0,t.bodies=0)},n.update=function(t,e){if(t.extended){var i=e.world,n=s.allBodies(i);t.collisions=t.narrowDetections,t.pairs=e.pairs.list.length,t.bodies=n.length,t.midEff=(t.narrowDetections/(t.midphaseTests||1)).toFixed(2),t.narrowEff=(t.narrowDetections/(t.narrowphaseTests||1)).toFixed(2),t.broadEff=(1-t.broadphaseTests/(n.length||1)).toFixed(2),t.narrowReuse=(t.narrowReuseCount/(t.narrowphaseTests||1)).toFixed(2)}}}()},function(t,e,i){var n={};t.exports=n;i(42);!function(){n.pathToVertices=function(e,i){var n,s,r,o,a,h,l,u,c,d,f,p,v=[],g=0,y=0,m=0;i=i||15;var x=function(t,e,i){var n=i%2==1&&i>1;if(!c||t!=c.x||e!=c.y){c&&n?(f=c.x,p=c.y):(f=0,p=0);var s={x:f+t,y:p+e};!n&&c||(c=s),v.push(s),y=f+t,m=p+e}},w=function(t){var e=t.pathSegTypeAsLetter.toUpperCase();if("Z"!==e){switch(e){case"M":case"L":case"T":case"C":case"S":case"Q":y=t.x,m=t.y;break;case"H":y=t.x;break;case"V":m=t.y}x(y,m,t.pathSegType)}};for(t(e),r=e.getTotalLength(),h=[],n=0;n<e.pathSegList.numberOfItems;n+=1)h.push(e.pathSegList.getItem(n));for(l=h.concat();g<r;){if(d=e.getPathSegAtLength(g),(a=h[d])!=u){for(;l.length&&l[0]!=a;)w(l.shift());u=a}switch(a.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":o=e.getPointAtLength(g),x(o.x,o.y,0)}g+=i}for(n=0,s=l.length;n<s;++n)w(l[n]);return v};var t=function(t){for(var e,i,n,s,r,o,a=t.pathSegList,h=0,l=0,u=a.numberOfItems,c=0;c<u;++c){var d=a.getItem(c),f=d.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in d&&(h=d.x),"y"in d&&(l=d.y);else switch("x1"in d&&(n=h+d.x1),"x2"in d&&(r=h+d.x2),"y1"in d&&(s=l+d.y1),"y2"in d&&(o=l+d.y2),"x"in d&&(h+=d.x),"y"in d&&(l+=d.y),f){case"m":a.replaceItem(t.createSVGPathSegMovetoAbs(h,l),c);break;case"l":a.replaceItem(t.createSVGPathSegLinetoAbs(h,l),c);break;case"h":a.replaceItem(t.createSVGPathSegLinetoHorizontalAbs(h),c);break;case"v":a.replaceItem(t.createSVGPathSegLinetoVerticalAbs(l),c);break;case"c":a.replaceItem(t.createSVGPathSegCurvetoCubicAbs(h,l,n,s,r,o),c);break;case"s":a.replaceItem(t.createSVGPathSegCurvetoCubicSmoothAbs(h,l,r,o),c);break;case"q":a.replaceItem(t.createSVGPathSegCurvetoQuadraticAbs(h,l,n,s),c);break;case"t":a.replaceItem(t.createSVGPathSegCurvetoQuadraticSmoothAbs(h,l),c);break;case"a":a.replaceItem(t.createSVGPathSegArcAbs(h,l,d.r1,d.r2,d.angle,d.largeArcFlag,d.sweepFlag),c);break;case"z":case"Z":h=e,l=i}"M"!=f&&"m"!=f||(e=h,i=l)}}}()},function(t,e,i){var n=i(174),s={name:"matter-attractors",version:"0.1.7",for:"matter-js@^0.13.1",silent:!0,install:function(t){t.after("Body.create",function(){s.Body.init(this)}),t.before("Engine.update",function(t){s.Engine.update(t)})},Body:{init:function(t){t.plugin.attractors=t.plugin.attractors||[]}},Engine:{update:function(t){for(var e=t.world,i=n.Composite.allBodies(e),s=0;s<i.length;s+=1){var r=i[s],o=r.plugin.attractors;if(o&&o.length>0)for(var a=s+1;a<i.length;a+=1)for(var h=i[a],l=0;l<o.length;l+=1){var u=o[l],c=u;n.Common.isFunction(u)&&(c=u(r,h)),c&&n.Body.applyForce(h,h.position,c)}}}},Attractors:{gravityConstant:.001,gravity:function(t,e){var i=n.Vector.sub(e.position,t.position),r=n.Vector.magnitudeSquared(i)||1e-4,o=n.Vector.normalise(i),a=-s.Attractors.gravityConstant*(t.mass*e.mass/r),h=n.Vector.mult(o,a);n.Body.applyForce(t,t.position,n.Vector.neg(h)),n.Body.applyForce(e,e.position,h)}}};t.exports=s},function(t,e,i){var n=i(174),s={name:"matter-wrap",version:"0.1.4",for:"matter-js@^0.13.1",silent:!0,install:function(t){t.after("Engine.update",function(){s.Engine.update(this)})},Engine:{update:function(t){for(var e=t.world,i=n.Composite.allBodies(e),r=n.Composite.allComposites(e),o=0;o<i.length;o+=1){var a=i[o];a.plugin.wrap&&s.Body.wrap(a,a.plugin.wrap)}for(o=0;o<r.length;o+=1){var h=r[o];h.plugin.wrap&&s.Composite.wrap(h,h.plugin.wrap)}}},Bounds:{wrap:function(t,e){var i=null,n=null;if(void 0!==e.min.x&&void 0!==e.max.x&&(t.min.x>e.max.x?i=e.min.x-t.max.x:t.max.x<e.min.x&&(i=e.max.x-t.min.x)),void 0!==e.min.y&&void 0!==e.max.y&&(t.min.y>e.max.y?n=e.min.y-t.max.y:t.max.y<e.min.y&&(n=e.max.y-t.min.y)),null!==i||null!==n)return{x:i||0,y:n||0}}},Body:{wrap:function(t,e){var i=s.Bounds.wrap(t.bounds,e);return i&&n.Body.translate(t,i),i}},Composite:{bounds:function(t){for(var e=n.Composite.allBodies(t),i=[],s=0;s<e.length;s+=1){var r=e[s];i.push(r.bounds.min,r.bounds.max)}return n.Bounds.create(i)},wrap:function(t,e){var i=s.Bounds.wrap(s.Composite.bounds(t),e);return i&&n.Composite.translate(t,i),i}}};t.exports=s},function(t,e){Array.prototype.forEach||(Array.prototype.forEach=function(t){"use strict";if(void 0===this||null===this)throw new TypeError;var e=Object(this),i=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var n=arguments.length>=2?arguments[1]:void 0,s=0;s<i;s++)s in e&&t.call(n,e[s],s,e)})},function(t,e){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)})},function(t,e){!function(t,e,i){"use strict";function n(t){t&&(t.setTargetAtTime||(t.setTargetAtTime=t.setTargetValueAtTime))}window.hasOwnProperty("webkitAudioContext")&&!window.hasOwnProperty("AudioContext")&&(window.AudioContext=webkitAudioContext,AudioContext.prototype.hasOwnProperty("createGain")||(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),AudioContext.prototype.hasOwnProperty("createDelay")||(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode),AudioContext.prototype.hasOwnProperty("createScriptProcessor")||(AudioContext.prototype.createScriptProcessor=AudioContext.prototype.createJavaScriptNode),AudioContext.prototype.hasOwnProperty("createPeriodicWave")||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable),AudioContext.prototype.internal_createGain=AudioContext.prototype.createGain,AudioContext.prototype.createGain=function(){var t=this.internal_createGain();return n(t.gain),t},AudioContext.prototype.internal_createDelay=AudioContext.prototype.createDelay,AudioContext.prototype.createDelay=function(t){var e=t?this.internal_createDelay(t):this.internal_createDelay();return n(e.delayTime),e},AudioContext.prototype.internal_createBufferSource=AudioContext.prototype.createBufferSource,AudioContext.prototype.createBufferSource=function(){var t=this.internal_createBufferSource();return t.start?(t.internal_start=t.start,t.start=function(e,i,n){void 0!==n?t.internal_start(e||0,i,n):t.internal_start(e||0,i||0)}):t.start=function(t,e,i){e||i?this.noteGrainOn(t||0,e,i):this.noteOn(t||0)},t.stop?(t.internal_stop=t.stop,t.stop=function(e){t.internal_stop(e||0)}):t.stop=function(t){this.noteOff(t||0)},n(t.playbackRate),t},AudioContext.prototype.internal_createDynamicsCompressor=AudioContext.prototype.createDynamicsCompressor,AudioContext.prototype.createDynamicsCompressor=function(){var t=this.internal_createDynamicsCompressor();return n(t.threshold),n(t.knee),n(t.ratio),n(t.reduction),n(t.attack),n(t.release),t},AudioContext.prototype.internal_createBiquadFilter=AudioContext.prototype.createBiquadFilter,AudioContext.prototype.createBiquadFilter=function(){var t=this.internal_createBiquadFilter();return n(t.frequency),n(t.detune),n(t.Q),n(t.gain),t},AudioContext.prototype.hasOwnProperty("createOscillator")&&(AudioContext.prototype.internal_createOscillator=AudioContext.prototype.createOscillator,AudioContext.prototype.createOscillator=function(){var t=this.internal_createOscillator();return t.start?(t.internal_start=t.start,t.start=function(e){t.internal_start(e||0)}):t.start=function(t){this.noteOn(t||0)},t.stop?(t.internal_stop=t.stop,t.stop=function(e){t.internal_stop(e||0)}):t.stop=function(t){this.noteOff(t||0)},t.setPeriodicWave||(t.setPeriodicWave=t.setWaveTable),n(t.frequency),n(t.detune),t})),window.hasOwnProperty("webkitOfflineAudioContext")&&!window.hasOwnProperty("OfflineAudioContext")&&(window.OfflineAudioContext=webkitOfflineAudioContext)}(window)},function(t,e){Function.prototype.bind||(Function.prototype.bind=function(){var t=Array.prototype.slice;return function(e){function i(){var r=s.concat(t.call(arguments));n.apply(this instanceof i?this:e,r)}var n=this,s=t.call(arguments,1);if("function"!=typeof n)throw new TypeError;return i.prototype=function t(e){if(e&&(t.prototype=e),!(this instanceof t))return new t}(n.prototype),i}}())},function(t,e){Math.trunc||(Math.trunc=function(t){return t<0?Math.ceil(t):Math.floor(t)})},function(t,e){if("function"!=typeof window.Uint32Array&&"object"!=typeof window.Uint32Array){var i=function(t){var e=new Array;window[t]=function(t){if("number"==typeof t){Array.call(this,t),this.length=t;for(var e=0;e<this.length;e++)this[e]=0}else{Array.call(this,t.length),this.length=t.length;for(var e=0;e<this.length;e++)this[e]=t[e]}},window[t].prototype=e,window[t].constructor=window[t]};i("Float32Array"),i("Uint32Array"),i("Uint16Array"),i("Int16Array"),i("ArrayBuffer")}},function(t,e){window.console||(window.console={},window.console.log=window.console.assert=function(){},window.console.warn=window.console.assert=function(){})},function(t,e,i){i(931),i(932),i(933),i(937),i(934),i(935),i(939),i(940),i(936)},function(t,e){!function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-t}}}()},function(t,e,i){(function(t){if(Date.now&&Date.prototype.getTime||(Date.now=function(){return(new Date).getTime()}),!t.performance||!t.performance.now){var e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return Date.now()-e}}for(var i=Date.now(),n=["ms","moz","webkit","o"],s=0;s<n.length&&!t.requestAnimationFrame;++s)t.requestAnimationFrame=t[n[s]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[n[s]+"CancelAnimationFrame"]||t[n[s]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var e=Date.now(),n=16+i-e;return n<0&&(n=0),i=e,setTimeout(function(){i=Date.now(),t(performance.now())},n)}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){clearTimeout(t)})}).call(e,i(424))},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BlitImage:i(373),CanvasRenderer:i(181),DrawImage:i(374),GetBlendModes:i(375)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Canvas:i(941),Snapshot:i(943),WebGL:i(944)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Canvas:i(376),WebGL:i(377)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Utils:i(44),WebGLPipeline:i(110),WebGLRenderer:i(182),Pipelines:i(945),BYTE:0,SHORT:1,UNSIGNED_BYTE:2,UNSIGNED_SHORT:3,FLOAT:4}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={BitmapMaskPipeline:i(378),FlatTintPipeline:i(379),ForwardDiffuseLightPipeline:i(183),TextureTintPipeline:i(184)}},function(t,e){t.exports=["#define SHADER_NAME PHASER_BITMAP_MASK_FS","","precision mediump float;","","uniform vec2 uResolution;","uniform sampler2D uMainSampler;","uniform sampler2D uMaskSampler;","uniform bool uInvertMaskAlpha;","","void main()","{","    vec2 uv = gl_FragCoord.xy / uResolution;","    vec4 mainColor = texture2D(uMainSampler, uv);","    vec4 maskColor = texture2D(uMaskSampler, uv);","    float alpha = mainColor.a;","","    if (!uInvertMaskAlpha)","    {","        alpha *= (maskColor.a);","    }","    else","    {","        alpha *= (1.0 - maskColor.a);","    }","","    gl_FragColor = vec4(mainColor.rgb * alpha, alpha);","}",""].join("\n")},function(t,e){t.exports=["#define SHADER_NAME PHASER_BITMAP_MASK_VS","","precision mediump float;","","attribute vec2 inPosition;","","void main()","{","    gl_Position = vec4(inPosition, 0.0, 1.0);","}",""].join("\n")},function(t,e){t.exports=["#define SHADER_NAME PHASER_FLAT_TINT_FS","","precision mediump float;","","varying vec4 outTint;","","void main() {","    gl_FragColor = vec4(outTint.rgb * outTint.a, outTint.a);","}",""].join("\n")},function(t,e){t.exports=["#define SHADER_NAME PHASER_FLAT_TINT_VS","","precision mediump float;","","uniform mat4 uProjectionMatrix;","uniform mat4 uViewMatrix;","uniform mat4 uModelMatrix;","","attribute vec2 inPosition;","attribute vec4 inTint;","","varying vec4 outTint;","","void main () {","    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(inPosition, 1.0, 1.0);","    outTint = inTint;","}",""].join("\n")},function(t,e){t.exports=["#define SHADER_NAME PHASER_FORWARD_DIFFUSE_FS","","precision mediump float;","","struct Light","{","    vec2 position;","    vec3 color;","    float intensity;","    float radius;","};","","const int kMaxLights = %LIGHT_COUNT%;","","uniform vec4 uCamera; /* x, y, rotation, zoom */","uniform vec2 uResolution;","uniform sampler2D uMainSampler;","uniform sampler2D uNormSampler;","uniform vec3 uAmbientLightColor;","uniform Light uLights[kMaxLights];","","varying vec2 outTexCoord;","varying vec4 outTint;","","void main()","{","    vec3 finalColor = vec3(0.0, 0.0, 0.0);","    vec4 color = texture2D(uMainSampler, outTexCoord) * vec4(outTint.rgb * outTint.a, outTint.a);","    vec3 normalMap = texture2D(uNormSampler, outTexCoord).rgb;","    vec3 normal = normalize(vec3(normalMap * 2.0 - 1.0));","    vec2 res = vec2(min(uResolution.x, uResolution.y)) * uCamera.w;","","    for (int index = 0; index < kMaxLights; ++index)","    {","        Light light = uLights[index];","        vec3 lightDir = vec3((light.position.xy / res) - (gl_FragCoord.xy / res), 0.1);","        vec3 lightNormal = normalize(lightDir);","        float distToSurf = length(lightDir) * uCamera.w;","        float diffuseFactor = max(dot(normal, lightNormal), 0.0);","        float radius = (light.radius / res.x * uCamera.w) * uCamera.w;","        float attenuation = clamp(1.0 - distToSurf * distToSurf / (radius * radius), 0.0, 1.0);","        vec3 diffuse = light.color * diffuseFactor;","        finalColor += (attenuation * diffuse) * light.intensity;","    }","","    vec4 colorOutput = vec4(uAmbientLightColor + finalColor, 1.0);","    gl_FragColor = color * vec4(colorOutput.rgb * colorOutput.a, colorOutput.a);","","}",""].join("\n")},function(t,e){t.exports=["#define SHADER_NAME PHASER_TEXTURE_TINT_FS","","precision mediump float;","","uniform sampler2D uMainSampler;","","varying vec2 outTexCoord;","varying vec4 outTint;","","void main()","{","    vec4 texel = texture2D(uMainSampler, outTexCoord);","    texel *= vec4(outTint.rgb * outTint.a, outTint.a);","    gl_FragColor = texel;","}",""].join("\n")},function(t,e){t.exports=["#define SHADER_NAME PHASER_TEXTURE_TINT_VS","","precision mediump float;","","uniform mat4 uProjectionMatrix;","uniform mat4 uViewMatrix;","uniform mat4 uModelMatrix;","","attribute vec2 inPosition;","attribute vec2 inTexCoord;","attribute vec4 inTint;","","varying vec2 outTexCoord;","varying vec4 outTint;","","void main ()","{","    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(inPosition, 1.0, 1.0);","    outTexCoord = inTexCoord;","    outTint = inTint;","}","",""].join("\n")},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=i(423),r=function(t){var e=t.game.config.defaultPhysicsSystem,i=n(t.settings,"physics",!1);if(e||i){var r=[];if(e&&r.push(s(e+"Physics")),i)for(var o in i)o=s(o.concat("Physics")),-1===r.indexOf(o)&&r.push(o);return r}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t){var e=t.game.config.defaultPlugins,i=n(t.settings,"plugins",!1);return Array.isArray(i)?i:e||[]};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={game:"game",anims:"anims",cache:"cache",registry:"registry",sound:"sound",textures:"textures",events:"events",cameras:"cameras",cameras3d:"cameras3d",add:"add",make:"make",scenePlugin:"scene",displayList:"children",lights:"lights",data:"data",input:"input",load:"load",time:"time",tweens:"tweens",arcadePhysics:"physics",impactPhysics:"impact",matterPhysics:"matter"};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(28),s=i(0),r=i(89),o=i(1),a=i(13),h=new s({initialize:function(t){this.scene=t,this.systems=t.sys,this.settings=t.sys.settings,this.key=t.sys.settings.key,this.manager=t.sys.game.scene,this.transitionProgress=0,this._elapsed=0,this._target=null,this._duration=0,this._onUpdate,this._onUpdateScope,this._willSleep=!1,this._willRemove=!1,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.pluginStart,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},pluginStart:function(){this._target=null,this.systems.events.once("shutdown",this.shutdown,this)},start:function(t,e){return void 0===t&&(t=this.key),this.settings.status!==r.RUNNING?(this.manager.queueOp("stop",this.key),this.manager.queueOp("start",t,e)):(this.manager.stop(this.key),this.manager.start(t,e)),this},restart:function(t){var e=this.key;return this.settings.status!==r.RUNNING?(this.manager.queueOp("stop",e),this.manager.queueOp("start",e,t)):(this.manager.stop(e),this.manager.start(e,t)),this},transition:function(t){void 0===t&&(t={});var e=o(t,"target",!1),i=this.manager.getScene(e);if(!e||!this.checkValidTransition(i))return!1;var n=o(t,"duration",1e3);this._elapsed=0,this._target=i,this._duration=n,this._willSleep=o(t,"sleep",!1),this._willRemove=o(t,"remove",!1);var s=o(t,"onUpdate",null);s&&(this._onUpdate=s,this._onUpdateScope=o(t,"onUpdateScope",this.scene));var r=o(t,"allowInput",!1);this.settings.transitionAllowInput=r;var a=i.sys.settings;return a.isTransition=!0,a.transitionFrom=this.scene,a.transitionDuration=n,a.transitionAllowInput=r,o(t,"moveAbove",!1)?this.manager.moveAbove(this.key,e):o(t,"moveBelow",!1)&&this.manager.moveBelow(this.key,e),i.sys.isSleeping()?i.sys.wake():this.manager.start(e,o(t,"data")),this.systems.events.emit("transitionout",i,n),this.systems.events.on("update",this.step,this),!0},checkValidTransition:function(t){return!(!t||t.sys.isActive()||t.sys.isTransitioning()||t===this.scene||this.systems.isTransitioning())},step:function(t,e){this._elapsed+=e,this.transitionProgress=n(this._elapsed/this._duration,0,1),this._onUpdate&&this._onUpdate.call(this._onUpdateScope,this.transitionProgress),this._elapsed>=this._duration&&this.transitionComplete()},transitionComplete:function(){var t=this._target.sys,e=this._target.sys.settings;this.systems.events.off("update",this.step,this),t.events.emit("transitioncomplete",this.scene),e.isTransition=!1,e.transitionFrom=null,this._duration=0,this._target=null,this._onUpdate=null,this._onUpdateScope=null,this._willRemove?this.manager.remove(this.key):this._willSleep?this.systems.sleep():this.manager.stop(this.key)},add:function(t,e,i){return this.manager.add(t,e,i),this},launch:function(t,e){return t&&t!==this.key&&(this.settings.status!==r.RUNNING?this.manager.queueOp("start",t,e):this.manager.start(t,e)),this},pause:function(t){return void 0===t&&(t=this.key),this.manager.pause(t),this},resume:function(t){return void 0===t&&(t=this.key),this.manager.resume(t),this},sleep:function(t){return void 0===t&&(t=this.key),this.manager.sleep(t),this},wake:function(t){return void 0===t&&(t=this.key),this.manager.wake(t),this},switch:function(t){return t!==this.key&&(this.settings.status!==r.RUNNING?this.manager.queueOp("switch",this.key,t):this.manager.switch(this.key,t)),this},stop:function(t){return void 0===t&&(t=this.key),this.manager.stop(t),this},setActive:function(t,e){void 0===e&&(e=this.key);var i=this.manager.getScene(e);return i&&i.sys.setActive(t),this},setVisible:function(t,e){void 0===e&&(e=this.key);var i=this.manager.getScene(e);return i&&i.sys.setVisible(t),this},isSleeping:function(t){return void 0===t&&(t=this.key),this.manager.isSleeping(t)},isActive:function(t){return void 0===t&&(t=this.key),this.manager.isActive(t)},isVisible:function(t){return void 0===t&&(t=this.key),this.manager.isVisible(t)},swapPosition:function(t,e){return void 0===e&&(e=this.key),t!==e&&this.manager.swapPosition(t,e),this},moveAbove:function(t,e){return void 0===e&&(e=this.key),t!==e&&this.manager.moveAbove(t,e),this},moveBelow:function(t,e){return void 0===e&&(e=this.key),t!==e&&this.manager.moveBelow(t,e),this},remove:function(t){return void 0===t&&(t=this.key),this.manager.remove(t),this},moveUp:function(t){return void 0===t&&(t=this.key),this.manager.moveUp(t),this},moveDown:function(t){return void 0===t&&(t=this.key),this.manager.moveDown(t),this},bringToTop:function(t){return void 0===t&&(t=this.key),this.manager.bringToTop(t),this},sendToBack:function(t){return void 0===t&&(t=this.key),this.manager.sendToBack(t),this},get:function(t){return this.manager.getScene(t)},getIndex:function(t){return void 0===t&&(t=this.key),this.manager.getIndex(t)},shutdown:function(){var t=this.systems.events;t.off("shutdown",this.shutdown,this),t.off("postupdate",this.step,this),t.off("transitionout")},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null,this.settings=null,this.manager=null}});a.register("ScenePlugin",h,"scenePlugin"),t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(89),s=i(19),r={SceneManager:i(382),ScenePlugin:i(956),Settings:i(383),Systems:i(185)};r=s(!1,r,n),t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={SoundManagerCreator:i(384),BaseSound:i(111),BaseSoundManager:i(112),WebAudioSound:i(389),WebAudioSoundManager:i(390),HTML5AudioSound:i(385),HTML5AudioSoundManager:i(386),NoAudioSound:i(387),NoAudioSoundManager:i(388)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={List:i(113),Map:i(186),ProcessQueue:i(391),RTree:i(392),Set:i(75)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(106),r=i(188),o=new n({Extends:r,initialize:function(t,e,i,n,s){r.call(this,t,e,i,n,s),this.add("__BASE",0,0,0,n,s),this._source=this.frames.__BASE.source,this.canvas=this._source.image,this.context=this.canvas.getContext("2d"),this.width=n,this.height=s},refresh:function(){return this._source.update(),this},getCanvas:function(){return this.canvas},getContext:function(){return this.context},clear:function(){return this.context.clearRect(0,0,this.width,this.height),this},setSize:function(t,e){return void 0===e&&(e=t),t===this.width&&e===this.height||(this.canvas.width=t,this.canvas.height=e,this._source.width=t,this._source.height=e,this._source.isPowerOf2=s(t,e),this.frames.__BASE.setSize(t,e,0,0),this.refresh()),this}});t.exports=o},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i={LINEAR:0,NEAREST:1};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(19),s=i(961),r={FilterMode:s,Frame:i(187),Parsers:i(395),Texture:i(188),TextureManager:i(393),TextureSource:i(394)};r=n(!1,r,s),t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(!i.getElementsByTagName("TextureAtlas"))return void console.warn("Invalid Texture Atlas XML given");var n=t.source[e];t.add("__BASE",e,0,0,n.width,n.height);for(var s,r=i.getElementsByTagName("SubTexture"),o=0;o<r.length;o++){var a=r[o].attributes,h=a.name.value,l=parseInt(a.x.value,10),u=parseInt(a.y.value,10),c=parseInt(a.width.value,10),d=parseInt(a.height.value,10);if(s=t.add(h,e,l,u,c,d),a.frameX){var f=Math.abs(parseInt(a.frameX.value,10)),p=Math.abs(parseInt(a.frameY.value,10)),v=parseInt(a.frameWidth.value,10),g=parseInt(a.frameHeight.value,10);s.setTrim(c,d,f,p,v,g)}}return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.source[e];return t.add("__BASE",e,0,0,i.width,i.height),t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.source[e];return t.add("__BASE",e,0,0,i.width,i.height),t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(61),s=function(t,e,i){if(!i.frames&&!i.textures)return void console.warn("Invalid Texture Atlas JSON Array");var s=t.source[e];t.add("__BASE",e,0,0,s.width,s.height);for(var r,o=Array.isArray(i.textures)?i.textures[e].frames:i.frames,a=0;a<o.length;a++){var h=o[a];r=t.add(h.filename,e,h.frame.x,h.frame.y,h.frame.w,h.frame.h),h.trimmed&&r.setTrim(h.sourceSize.w,h.sourceSize.h,h.spriteSourceSize.x,h.spriteSourceSize.y,h.spriteSourceSize.w,h.spriteSourceSize.h),h.rotated&&(r.rotated=!0,r.updateUVsInverted()),h.anchor&&(r.customPivot=!0,r.pivotX=h.anchor.x,r.pivotY=h.anchor.y),r.customData=n(h)}for(var l in i)"frames"!==l&&(Array.isArray(i[l])?t.customData[l]=i[l].slice(0):t.customData[l]=i[l]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(61),s=function(t,e,i){if(!i.frames)return void console.warn("Invalid Texture Atlas JSON Hash given, missing 'frames' Object");var s=t.source[e];t.add("__BASE",e,0,0,s.width,s.height);var r,o=i.frames;for(var a in o){var h=o[a];r=t.add(a,e,h.frame.x,h.frame.y,h.frame.w,h.frame.h),h.trimmed&&r.setTrim(h.sourceSize.w,h.sourceSize.h,h.spriteSourceSize.x,h.spriteSourceSize.y,h.spriteSourceSize.w,h.spriteSourceSize.h),h.rotated&&(r.rotated=!0,r.updateUVsInverted()),r.customData=n(h)}for(var l in i)"frames"!==l&&(Array.isArray(i[l])?t.customData[l]=i[l].slice(0):t.customData[l]=i[l]);return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t,e,i,s,r,o,a){var h=n(a,"frameWidth",null),l=n(a,"frameHeight",h);if(null===h)throw new Error("TextureManager.SpriteSheet: Invalid frameWidth given.");var u=t.source[e];t.add("__BASE",e,0,0,u.width,u.height);var c=n(a,"startFrame",0),d=n(a,"endFrame",-1),f=n(a,"margin",0),p=n(a,"spacing",0),v=Math.floor((r-f+p)/(h+p)),g=Math.floor((o-f+p)/(l+p)),y=v*g;(c>y||c<-y)&&(c=0),c<0&&(c=y+c),-1!==d&&(y=c+(d+1));for(var m=f,x=f,w=0,b=0,T=0;T<y;T++){w=0,b=0;var S=m+h,A=x+l;S>r&&(w=S-r),A>o&&(b=A-o),t.add(T,e,i+m,s+x,h-w,l-b),m+=h+p,m+h>r&&(m=f,x+=l+p)}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t,e,i){var s=n(i,"frameWidth",null),r=n(i,"frameHeight",s);if(!s)throw new Error("TextureManager.SpriteSheetFromAtlas: Invalid frameWidth given.");var o=n(i,"startFrame",0),a=n(i,"endFrame",-1),h=n(i,"margin",0),l=n(i,"spacing",0),u=e.cutX,c=e.cutY,d=e.cutWidth,f=e.cutHeight,p=e.realWidth,v=e.realHeight,g=Math.floor((p-h+l)/(s+l)),y=Math.floor((v-h+l)/(r+l)),m=g*y,x=e.x,w=s-x,b=s-(p-d-x),T=e.y,S=r-T,A=r-(v-f-T);(o>m||o<-m)&&(o=0),o<0&&(o=m+o),-1!==a&&(m=o+(a+1));for(var C,M=h,_=h,E=0,P=e.sourceIndex,L=0;L<y;L++){for(var k=0===L,F=L===y-1,R=0;R<g;R++){var O=0===R,B=R===g-1;if(C=t.add(E,P,u+M,c+_,s,r),O||k||B||F){var D=O?x:0,I=k?T:0,Y=s,z=r;O?Y=w:B&&(Y=b),k?z=S:F&&(z=A),C.cutWidth=Y,C.cutHeight=z,C.setTrim(s,r,D,I,Y,z)}M+=l,M+=O?w:B||s,E++}M=h,_+=l,_+=k?S:F?A:r}return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=0,n=function(t,e,n,s){var r=i-s.y-s.height;t.add(n,e,s.x,r,s.width,s.height)},s=function(t,e,s){var r=t.source[e];t.add("__BASE",e,0,0,r.width,r.height),i=r.height;for(var o=s.split("\n"),a=/^[ ]*(- )*(\w+)+[: ]+(.*)/,h="",l="",u={x:0,y:0,width:0,height:0},c=0;c<o.length;c++){var d=o[c].match(a);if(d){var f="- "===d[1],p=d[2],v=d[3];if(f&&(l!==h&&(n(t,e,l,u),h=l),u={x:0,y:0,width:0,height:0}),"name"!==p)switch(p){case"x":case"y":case"width":case"height":u[p]=parseInt(v,10)}else l=v}}return l!==h&&n(t,e,l,u),t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(14),s=i(189);n.register("tilemap",function(t){var e=void 0!==t?t:{};return s(this.scene,e.key,e.tileWidth,e.tileHeight,e.width,e.height,e.data,e.insertNull)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(8),s=i(189);n.register("tilemap",function(t,e,i,n,r,o,a){return null===t&&(t=void 0),null===e&&(e=void 0),null===i&&(i=void 0),null===n&&(n=void 0),null===r&&(r=void 0),s(this.scene,t,e,i,n,r,o,a)})},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=i(45),r=function(t,e,i,r,o,a,h,l){t<0&&(t=0),e<0&&(e=0),void 0===h&&(h=!0);for(var u=n(t,e,i,r,null,l),c=o-t,d=a-e,f=0;f<u.length;f++){var p=u[f].x+c,v=u[f].y+d;p>=0&&p<l.width&&v>=0&&v<l.height&&l.data[v][p]&&l.data[v][p].copy(u[f])}h&&s(o-1,a-1,i+2,r+2,l)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(116),s=i(117),r=i(18),o=i(400),a=function(t,e,i,a,h,l){void 0===i&&(i={}),Array.isArray(t)||(t=[t]);var u=l.tilemapLayer;void 0===a&&(a=u.scene),void 0===h&&(h=a.cameras.main);var c,d=r(0,0,l.width,l.height,null,l),f=[];for(c=0;c<d.length;c++){var p=d[c];if(-1!==t.indexOf(p.index)){i.x=n(p.x,h,l),i.y=s(p.y,h,l);var v=a.make.sprite(i);f.push(v)}}if("number"==typeof e)for(c=0;c<t.length;c++)o(t[c],e,0,0,l.width,l.height,l);else if(Array.isArray(e))for(c=0;c<t.length;c++)o(t[c],e[c],0,0,l.width,l.height,l);return f};t.exports=a},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){void 0===i&&(i=[]),i.length=0;var n=e.zoom,s=e.width/2,r=e.height/2;e.matrix.loadIdentity(),e.matrix.translate(e.x+s,e.y+r),e.matrix.rotate(e.rotation),e.matrix.scale(n,n),e.matrix.translate(-s,-r),e.matrix.invert();for(var o=t.tilemapLayer,a=t.tileWidth,h=t.tileHeight,l=e.scrollX*o.scrollFactorX-a,u=e.scrollY*o.scrollFactorY-h,c=l+(e.width+2*a),d=u+(e.height+2*h),f=t.data,p=t.width,v=t.height,g=e.matrix.matrix,y=g[0],m=g[1],x=g[2],w=g[3],b=g[4],T=g[5],S=l*y+u*x+b,A=l*m+u*w+T,C=c*y+d*x+b,M=c*m+d*w+T,_=0;_<v;++_)for(var E=0;E<p;++E){var P=f[_][E];if(null!==P&&-1!==P.index){var L=P.pixelX*y+P.pixelY*x+b,k=P.pixelX*m+P.pixelY*w+T;P.visible&&L>=S&&k>=A&&L+a<=C&&k+h<=M&&i.push(P)}}return i};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=i(45),r=i(59),o=function(t,e,i,o,a,h,l){void 0===h&&(h=!0);for(var u=-1!==l.collideIndexes.indexOf(t),c=n(e,i,o,a,null,l),d=0;d<c.length;d++)c[d].index=t,r(c[d],u);h&&s(e-1,i-1,o+2,a+2,l)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o,a,h){return n(i,s,r,o,a,h).filter(t,e)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){void 0===e&&(e=0),void 0===i&&(i=!1);var s,r,o,a=0;if(i){for(r=n.height-1;r>=0;r--)for(s=n.width-1;s>=0;s--)if((o=n.data[r][s])&&o.index===t){if(a===e)return o;a+=1}}else for(r=0;r<n.height;r++)for(s=0;s<n.width;s++)if((o=n.data[r][s])&&o.index===t){if(a===e)return o;a+=1}return null};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o,a,h){return n(i,s,r,o,a,h).find(t,e)||null};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o,a,h){n(i,s,r,o,a,h).forEach(t,e)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(115),s=i(50),r=i(51),o=function(t,e,i,o,a){var h=s(t,!0,o,a),l=r(e,!0,o,a);return n(h,l,i,a)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(270),s=i(18),r=i(274),o=i(3),a=i(116),h=i(117),l=i(50),u=i(51),c=function(t,e){return r.RectangleToTriangle(e,t)},d=function(t,e,i,d){if(void 0===t)return[];var f=o;t instanceof n.Circle?f=r.CircleToRectangle:t instanceof n.Rectangle?f=r.RectangleToRectangle:t instanceof n.Triangle?f=c:t instanceof n.Line&&(f=r.LineToRectangle);var p=l(t.left,!0,i,d),v=u(t.top,!0,i,d),g=Math.ceil(l(t.right,!1,i,d)),y=Math.ceil(u(t.bottom,!1,i,d)),m=Math.max(g-p,1),x=Math.max(y-v,1),w=s(p,v,m,x,e,d),b=d.tileWidth,T=d.tileHeight;d.tilemapLayer&&(b*=d.tilemapLayer.scaleX,T*=d.tilemapLayer.scaleY);for(var S=[],A=new n.Rectangle(0,0,b,T),C=0;C<w.length;C++){var M=w[C];A.x=a(M.x,i,d),A.y=h(M.y,i,d),f(t,A)&&S.push(M)}return S};t.exports=d},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=i(50),r=i(51),o=function(t,e,i,o,a,h,l){var u=s(t,!0,h,l),c=r(e,!0,h,l),d=Math.ceil(s(t+i,!1,h,l)),f=Math.ceil(r(e+o,!1,h,l));return n(u,c,d-u,f-c,a,l)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(398),s=i(50),r=i(51),o=function(t,e,i,o){var a=s(t,!0,i,o),h=r(e,!0,i,o);return n(a,h,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(191),s=i(50),r=i(51),o=function(t,e,i,o,a,h){var l=s(e,!0,a,h),u=r(i,!0,a,h);return n(t,l,u,o,h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(45),s=i(191),r=function(t,e,i,r,o){if(!Array.isArray(t))return null;void 0===r&&(r=!0),Array.isArray(t[0])||(t=[t]);for(var a=t.length,h=t[0].length,l=0;l<a;l++)for(var u=0;u<h;u++){var c=t[l][u];s(c,e+u,i+l,!1,o)}r&&n(e-1,i-1,h+2,a+2,o)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=i(199),r=function(t,e,i,r,o,a){var h,l=n(t,e,i,r,null,a);if(void 0===o)for(o=[],h=0;h<l.length;h++)-1===o.indexOf(l[h].index)&&o.push(l[h].index);for(h=0;h<l.length;h++)l[h].index=s(o)};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(399),s=i(50),r=i(51),o=function(t,e,i,o,a,h){var l=s(t,!0,a,h),u=r(e,!0,a,h);return n(l,u,i,o,h)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=i(243),r=function(t,e,i){void 0===e&&(e={});for(var r=void 0!==e.tileColor?e.tileColor:new s(105,210,231,150),o=void 0!==e.collidingTileColor?e.collidingTileColor:new s(243,134,48,200),a=void 0!==e.faceColor?e.faceColor:new s(40,39,37,150),h=n(0,0,i.width,i.height,null,i),l=0;l<h.length;l++){var u=h[l],c=u.width,d=u.height,f=u.pixelX,p=u.pixelY,v=u.collides?o:r;null!==v&&(t.fillStyle(v.color,v.alpha/255),t.fillRect(f,p,c,d)),f+=1,p+=1,c-=2,d-=2,null!==a&&(t.lineStyle(1,a.color,a.alpha/255),u.faceTop&&t.lineBetween(f,p,f+c,p),u.faceRight&&t.lineBetween(f+c,p,f+c,p+d),u.faceBottom&&t.lineBetween(f,p+d,f+c,p+d),u.faceLeft&&t.lineBetween(f,p,f,p+d))}};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(59),s=i(45),r=i(192),o=function(t,e,i,o){void 0===e&&(e=!0),void 0===i&&(i=!0),Array.isArray(t)||(t=[t]);for(var a=0;a<t.length;a++)r(t[a],e,o);for(var h=0;h<o.height;h++)for(var l=0;l<o.width;l++){var u=o.data[h][l];u&&-1!==t.indexOf(u.index)&&n(u,e)}i&&s(0,0,o.width,o.height,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(59),s=i(45),r=i(192),o=function(t,e,i,o,a){if(void 0===i&&(i=!0),void 0===o&&(o=!0),!(t>e)){for(var h=t;h<=e;h++)r(h,i,a);for(var l=0;l<a.height;l++)for(var u=0;u<a.width;u++){var c=a.data[l][u];c&&c.index>=t&&c.index<=e&&n(c,i)}o&&s(0,0,a.width,a.height,a)}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(59),s=i(45),r=i(192),o=function(t,e,i,o){void 0===e&&(e=!0),void 0===i&&(i=!0),Array.isArray(t)||(t=[t]);for(var a=0;a<o.height;a++)for(var h=0;h<o.width;h++){var l=o.data[a][h];l&&-1===t.indexOf(l.index)&&(n(l,e),r(l.index,e,o))}i&&s(0,0,o.width,o.height,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(59),s=i(45),r=i(76),o=function(t,e,i,o){void 0===e&&(e=!0),void 0===i&&(i=!0);for(var a=0;a<o.height;a++)for(var h=0;h<o.width;h++){var l=o.data[a][h];if(l)for(var u in t)if(r(l.properties,u)){var c=t[u];Array.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)l.properties[u]===c[d]&&n(l,e)}}i&&s(0,0,o.width,o.height,o)};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(59),s=i(45),r=function(t,e,i){void 0===t&&(t=!0),void 0===e&&(e=!0);for(var r=0;r<i.height;r++)for(var o=0;o<i.width;o++){var a=i.data[r][o];if(a){var h=a.getCollisionGroup();h&&h.objects&&h.objects.length>0&&n(a,t)}}e&&s(0,0,i.width,i.height,i)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){if("number"==typeof t)n.callbacks[t]=null!==e?{callback:e,callbackContext:i}:void 0;else for(var s=0,r=t.length;s<r;s++)n.callbacks[t[s]]=null!==e?{callback:e,callbackContext:i}:void 0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o,a){for(var h=n(t,e,i,s,null,a),l=0;l<h.length;l++)h[l].setCollisionCallback(r,o)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=i(121),r=function(t,e,i,r,o){var a=n(t,e,i,r,null,o),h=a.map(function(t){return t.index});s(h);for(var l=0;l<a.length;l++)a[l].index=h[l]};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o,a){for(var h=n(i,s,r,o,null,a),l=0;l<h.length;l++)h[l]&&(h[l].index===t?h[l].index=e:h[l].index===e&&(h[l].index=t))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(116),s=i(117),r=i(4),o=function(t,e,i,o,a){return void 0===i&&(i=new r(0,0)),i.x=n(t,o,a),i.y=s(e,o,a),i};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(18),s=function(t,e,i,s,r,o){if(void 0!==r){var a,h=n(t,e,i,s,null,o),l=0;for(a=0;a<r.length;a++)l+=r[a].weight;if(!(l<=0))for(a=0;a<h.length;a++){for(var u=Math.random()*l,c=0,d=-1,f=0;f<r.length;f++)if(c+=r[f].weight,u<=c){var p=r[f].index;d=Array.isArray(p)?p[Math.floor(Math.random()*p.length)]:p;break}h[a].index=d}}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(50),s=i(51),r=i(4),o=function(t,e,i,o,a,h){return void 0===o&&(o=new r(0,0)),o.x=n(t,i,a,h),o.y=s(e,i,a,h),o};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){e.cull(s);var r=e.culledTiles,o=r.length,a=e.tileset.image.getSourceImage(),h=this.tileset,l=e.x-s.scrollX*e.scrollFactorX,u=e.y-s.scrollY*e.scrollFactorY,c=t.gameContext;c.save(),c.translate(l,u),c.rotate(e.rotation),c.scale(e.scaleX,e.scaleY),c.scale(e.flipX?-1:1,e.flipY?-1:1);for(var d=0;d<o;++d){var f=r[d],p=h.getTileTextureCoordinates(f.index);if(null!==p){var v=f.width/2,g=f.height/2;c.save(),c.translate(f.pixelX+v,f.pixelY+g),0!==f.rotation&&c.rotate(f.rotation),(f.flipX||f.flipY)&&c.scale(f.flipX?-1:1,f.flipY?-1:1),c.globalAlpha=e.alpha*f.alpha,c.drawImage(a,p.x,p.y,f.width,f.height,-v,-g,f.width,f.height),c.restore()}}c.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(1004),s=i(1002),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||(e.cull(s),this.pipeline.batchDynamicTilemapLayer(e,s))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Components:i(118),Parsers:i(1008),Formats:i(27),ImageCollection:i(396),ParseToTilemap:i(189),Tile:i(58),Tilemap:i(397),TilemapCreator:i(971),TilemapFactory:i(972),Tileset:i(114),LayerData:i(91),MapData:i(92),ObjectLayer:i(402),DynamicTilemapLayer:i(401),StaticTilemapLayer:i(409)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(91),s=i(58),r=function(t,e){for(var i=[],r=0;r<t.layer.length;r++){for(var o=t.layer[r],a=new n({name:o.name,width:o.width,height:o.height,tileWidth:o.tilesize,tileHeight:o.tilesize,visible:1===o.visible}),h=[],l=[],u=0;u<o.data.length;u++){for(var c=0;c<o.data[u].length;c++){var d,f=o.data[u][c]-1;d=f>-1?new s(a,f,c,u,o.tilesize,o.tilesize):e?null:new s(a,-1,c,u,o.tilesize,o.tilesize),h.push(d)}l.push(h),h=[]}a.data=l,i.push(a)}return i};t.exports=r},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(114),s=function(t){for(var e=[],i=[],s=0;s<t.layer.length;s++){var r=t.layer[s],o=r.tilesetName;""!==o&&-1===i.indexOf(o)&&(i.push(o),e.push(new n(o,0,r.tilesize,r.tilesize,0,0)))}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Parse:i(403),Parse2DArray:i(193),ParseCSV:i(404),Impact:i(405),Tiled:i(407)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(19),s=function(t){for(var e,i,s,r,o,a=0;a<t.layers.length;a++){e=t.layers[a],r=null;for(var h=0;h<e.data.length;h++){o=e.data[h];for(var l=0;l<o.length;l++)null===(i=o[l])||i.index<0||(s=t.tiles[i.index][2],r=t.tilesets[s],i.width=r.tileWidth,i.height=r.tileHeight,r.tileProperties&&r.tileProperties[i.index-r.firstgid]&&(i.properties=n(i.properties,r.tileProperties[i.index-r.firstgid])))}}};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=window.atob(t),i=e.length,n=new Array(i/4),s=0;s<i;s+=4)n[s/4]=(e.charCodeAt(s)|e.charCodeAt(s+1)<<8|e.charCodeAt(s+2)<<16|e.charCodeAt(s+3)<<24)>>>0;return n};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=[],i=0;i<t.tilesets.length;i++)for(var n=t.tilesets[i],s=n.tileMargin,r=n.tileMargin,o=0,a=0,h=0,l=n.firstgid;l<n.firstgid+n.total&&(e[l]=[s,r,i],s+=n.tileWidth+n.tileSpacing,++o!==n.total)&&(++a!==n.columns||(s=n.tileMargin,r+=n.tileHeight+n.tileSpacing,a=0,++h!==n.rows));l++);return e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=function(t){for(var e=[],i=0;i<t.layers.length;i++)if("imagelayer"===t.layers[i].type){var s=t.layers[i];e.push({name:s.name,image:s.image,x:n(s,"offsetx",0)+s.x,y:n(s,"offsety",0)+s.y,alpha:s.opacity,visible:s.visible,properties:n(s,"properties",{})})}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1),s=i(408),r=i(402),o=function(t){for(var e=[],i=0;i<t.layers.length;i++)if("objectgroup"===t.layers[i].type){for(var o=t.layers[i],a=n(o,"offsetx",0),h=n(o,"offsety",0),l=[],u=0;u<o.objects.length;u++){var c=s(o.objects[u],a,h);l.push(c)}var d=new r(o);d.objects=l,e.push(d)}return e};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(1010),s=i(1),r=i(91),o=i(406),a=i(58),h=function(t,e){for(var i=[],h=0;h<t.layers.length;h++)if("tilelayer"===t.layers[h].type){var l=t.layers[h];if(l.compression)console.warn("TilemapParser.parseTiledJSON - Layer compression is unsupported, skipping layer '"+l.name+"'");else{l.encoding&&"base64"===l.encoding&&(l.data=n(l.data),delete l.encoding);for(var u=new r({name:l.name,x:s(l,"offsetx",0)+l.x,y:s(l,"offsety",0)+l.y,width:l.width,height:l.height,tileWidth:t.tilewidth,tileHeight:t.tileheight,alpha:l.opacity,visible:l.visible,properties:s(l,"properties",{})}),c=0,d=[],f=[],p=0,v=l.data.length;p<v;p++){var g=o(l.data[p]);if(g.gid>0){var y=new a(u,g.gid,c,f.length,t.tilewidth,t.tileheight);y.rotation=g.rotation,y.flipX=g.flipped,d.push(y)}else{var m=e?null:new a(u,-1,c,f.length,t.tilewidth,t.tileheight);d.push(m)}c++,c===l.width&&(f.push(d),c=0,d=[])}u.data=f,i.push(u)}}return i};t.exports=h},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(114),s=i(396),r=i(408),o=function(t){for(var e,i=[],o=[],a=null,h=0;h<t.tilesets.length;h++){var l=t.tilesets[h];if(l.source)console.warn("Phaser can't load external tilesets. Use the Embed Tileset button and then export the map again.");else if(l.image){var u=new n(l.name,l.firstgid,l.tilewidth,l.tileheight,l.margin,l.spacing);if(l.tileproperties&&(u.tileProperties=l.tileproperties),l.tiles){u.tileData=l.tiles;for(e in u.tileData){var c=u.tileData[e].objectgroup;if(c&&c.objects){var d=c.objects.map(function(t){return r(t)});u.tileData[e].objectgroup.objects=d}}}u.updateTileData(l.imagewidth,l.imageheight),i.push(u)}else{var f=new s(l.name,l.firstgid,l.tilewidth,l.tileheight,l.margin,l.spacing,l.properties);for(e in l.tiles){var p=l.tiles[e].image,v=l.firstgid+parseInt(e,10);f.addImage(v,p)}o.push(f)}a&&(a.lastgid=l.firstgid-1),a=l}return{tilesets:i,imageCollections:o}};t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(76),s=function(t,e){for(var i={},s=0;s<e.length;s++){var r=e[s];n(t,r)&&(i[r]=t[r])}return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){if(!(n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id)){e.cull(s);var r=e.culledTiles,o=this.tileset,a=t.gameContext,h=r.length,l=o.image.getSourceImage(),u=e.x-s.scrollX*e.scrollFactorX,c=e.y-s.scrollY*e.scrollFactorY;a.save(),a.translate(u,c),a.rotate(e.rotation),a.scale(e.scaleX,e.scaleY),a.scale(e.flipX?-1:1,e.flipY?-1:1),a.globalAlpha=e.alpha;for(var d=0;d<h;++d){var f=r[d],p=o.getTileTextureCoordinates(f.index);null!==p&&a.drawImage(l,p.x,p.y,f.width,f.height,f.pixelX,f.pixelY,f.width,f.height)}a.restore()}};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(3),s=i(3);n=i(1019),s=i(1017),t.exports={renderWebGL:n,renderCanvas:s}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(2),s=function(t,e,i,s){n.RENDER_MASK!==e.renderFlags||e.cameraFilter>0&&e.cameraFilter&s._id||(e.upload(s),this.pipeline.drawStaticTilemapLayer(e,s))};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(13),r=i(410),o=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.now=Date.now(),this.timeScale=1,this.paused=!1,this._active=[],this._pendingInsertion=[],this._pendingRemoval=[],t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},start:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.once("shutdown",this.shutdown,this)},addEvent:function(t){var e=new r(t);return this._pendingInsertion.push(e),e},delayedCall:function(t,e,i,n){return this.addEvent({delay:t,callback:e,args:i,callbackScope:n})},clearPendingEvents:function(){return this._pendingInsertion=[],this},removeAllEvents:function(){return this._pendingRemoval=this._pendingRemoval.concat(this._active),this},preUpdate:function(){var t=this._pendingRemoval.length,e=this._pendingInsertion.length;if(0!==t||0!==e){var i,n;for(i=0;i<t;i++){n=this._pendingRemoval[i];var s=this._active.indexOf(n);s>-1&&this._active.splice(s,1),n.destroy()}for(i=0;i<e;i++)n=this._pendingInsertion[i],this._active.push(n);this._pendingRemoval.length=0,this._pendingInsertion.length=0}},update:function(t,e){if(this.now=t,!this.paused){e*=this.timeScale;for(var i=0;i<this._active.length;i++){var n=this._active[i];if(!n.paused&&(n.elapsed+=e*n.timeScale,n.elapsed>=n.delay)){var s=n.elapsed-n.delay;n.elapsed=n.delay,!n.hasDispatched&&n.callback&&(n.hasDispatched=!0,n.callback.apply(n.callbackScope,n.args)),n.repeatCount>0?(n.repeatCount--,n.elapsed=s,n.hasDispatched=!1):this._pendingRemoval.push(n)}}}},shutdown:function(){var t;for(t=0;t<this._pendingInsertion.length;t++)this._pendingInsertion[t].destroy();for(t=0;t<this._active.length;t++)this._active[t].destroy();for(t=0;t<this._pendingRemoval.length;t++)this._pendingRemoval[t].destroy();this._active.length=0,this._pendingRemoval.length=0,this._pendingInsertion.length=0;var e=this.systems.events;e.off("preupdate",this.preUpdate,this),e.off("update",this.update,this),e.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});s.register("Clock",o,"time"),t.exports=o},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Clock:i(1020),TimerEvent:i(410)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(0),s=i(414),r=i(13),o=i(415),a=i(95),h=i(120),l=new n({initialize:function(t){this.scene=t,this.systems=t.sys,this.timeScale=1,this._add=[],this._pending=[],this._active=[],this._destroy=[],this._toProcess=0,t.sys.events.once("boot",this.boot,this),t.sys.events.on("start",this.start,this)},boot:function(){this.systems.events.once("destroy",this.destroy,this)},start:function(){var t=this.systems.events;t.on("preupdate",this.preUpdate,this),t.on("update",this.update,this),t.once("shutdown",this.shutdown,this),this.timeScale=1},createTimeline:function(t){return o(this,t)},timeline:function(t){var e=o(this,t);return e.paused||(this._add.push(e),this._toProcess++),e},create:function(t){return h(this,t)},add:function(t){var e=h(this,t);return this._add.push(e),this._toProcess++,e},existing:function(t){return this._add.push(t),this._toProcess++,this},addCounter:function(t){var e=s(this,t);return this._add.push(e),this._toProcess++,e},preUpdate:function(){if(0!==this._toProcess){var t,e,i=this._destroy,n=this._active;for(t=0;t<i.length;t++){e=i[t];var s=n.indexOf(e);-1!==s&&(e.state=a.REMOVED,n.splice(s,1))}for(i.length=0,i=this._add,t=0;t<i.length;t++)e=i[t],e.state===a.PENDING_ADD&&(e.init()?(e.play(),this._active.push(e)):this._pending.push(e));i.length=0,this._toProcess=0}},update:function(t,e){var i,n=this._active;e*=this.timeScale;for(var s=0;s<n.length;s++)i=n[s],i.update(t,e)&&(this._destroy.push(i),this._toProcess++)},makeActive:function(t){if(-1===this._add.indexOf(t)&&-1===this._active.indexOf(t)){var e=this._pending.indexOf(t);return-1!==e&&this._pending.splice(e,1),this._add.push(t),t.state=a.PENDING_ADD,this._toProcess++,this}},each:function(t,e){for(var i=[null],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[0]=this.list[s],t.apply(e,i)},getAllTweens:function(){for(var t=this._active,e=[],i=0;i<t.length;i++)e.push(t[i]);return e},getGlobalTimeScale:function(){return this.timeScale},getTweensOf:function(t){var e,i,n=this._active,s=[];if(Array.isArray(t))for(i=0;i<n.length;i++){e=n[i];for(;0<t.length;i++)e.hasTarget(t[0])&&s.push(e)}else for(i=0;i<n.length;i++)e=n[i],e.hasTarget(t)&&s.push(e);return s},isTweening:function(t){for(var e,i=this._active,n=0;n<i.length;n++)if(e=i[n],e.hasTarget(t)&&e.isPlaying())return!0;return!1},killAll:function(){for(var t=this.getAllTweens(),e=0;e<t.length;e++)t[e].stop();return this},killTweensOf:function(t){for(var e=this.getTweensOf(t),i=0;i<e.length;i++)e[i].stop();return this},pauseAll:function(){for(var t=this._active,e=0;e<t.length;e++)t[e].pause();return this},resumeAll:function(){for(var t=this._active,e=0;e<t.length;e++)t[e].resume();return this},setGlobalTimeScale:function(t){return this.timeScale=t,this},shutdown:function(){this.killAll(),this._add=[],this._pending=[],this._active=[],this._destroy=[],this._toProcess=0;var t=this.systems.events;t.off("preupdate",this.preUpdate,this),t.off("update",this.update,this),t.off("shutdown",this.shutdown,this)},destroy:function(){this.shutdown(),this.scene.sys.events.off("start",this.start,this),this.scene=null,this.systems=null}});r.register("TweenManager",l,"tweens"),t.exports=l},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={GetBoolean:i(93),GetEaseFunction:i(94),GetNewValue:i(119),GetProps:i(412),GetTargets:i(194),GetTweens:i(413),GetValueOp:i(195),NumberTweenBuilder:i(414),TimelineBuilder:i(415),TweenBuilder:i(120)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(95),s=i(19),r={Builders:i(1023),TweenManager:i(1022),Tween:i(197),TweenData:i(198),Timeline:i(411)};r=s(!1,r,n),t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports=["callbackScope","completeDelay","delay","duration","ease","easeParams","flipX","flipY","hold","loop","loopDelay","offset","onComplete","onCompleteParams","onCompleteScope","onLoop","onLoopParams","onLoopScope","onRepeat","onRepeatParams","onRepeatScope","onStart","onStartParams","onStartScope","onUpdate","onUpdateParams","onUpdateScope","onYoyo","onYoyoParams","onYoyoScope","paused","props","repeat","repeatDelay","targets","useFrames","yoyo"]},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s){if(void 0===s&&(s=t),i>0){var r=i-t.length;if(r<=0)return null}if(!Array.isArray(e))return-1===t.indexOf(e)?(t.push(e),n&&n.call(s,e),e):null;for(var o=e.length-1;o>=0;)-1!==t.indexOf(e[o])&&e.pop(),o--;if(0===(o=e.length))return null;i>0&&o>r&&(e.splice(r),o=r);for(var a=0;a<o;a++){var h=e[a];t.push(h),n&&n.call(s,h)}return e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n,s,r){if(void 0===i&&(i=0),void 0===r&&(r=t),n>0){var o=n-t.length;if(o<=0)return null}if(!Array.isArray(e))return-1===t.indexOf(e)?(t.splice(i,0,e),s&&s.call(r,e),e):null;for(var a=e.length-1;a>=0;)-1!==t.indexOf(e[a])&&e.pop(),a--;if(0===(a=e.length))return null;n>0&&a>o&&(e.splice(o),a=o);for(var h=a;h>0;h--){var l=e[h];t.splice(i,0,l),s&&s.call(r,l)}return e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.indexOf(e);return-1!==i&&i<t.length-2&&(t.splice(i,1),t.push(e)),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i,s,r){void 0===s&&(s=0),void 0===r&&(r=t.length);var o=0;if(n(t,s,r))for(var a=s;a<r;a++){var h=t[a];h[e]===i&&o++}return o};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n,s=[null];for(n=2;n<arguments.length;n++)s.push(arguments[n]);for(n=0;n<t.length;n++)s[0]=t[n],e.apply(i,s);return t};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i,s,r){if(void 0===s&&(s=0),void 0===r&&(r=t.length),n(t,s,r)){var o,a=[null];for(o=5;o<arguments.length;o++)a.push(arguments[o]);for(o=s;o<r;o++)a[0]=t[o],e.apply(i,a)}return t};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i,s,r){void 0===s&&(s=0),void 0===r&&(r=t.length);var o=[];if(n(t,s,r))for(var a=s;a<r;a++){var h=t[a];(!e||e&&void 0===i&&h.hasOwnProperty(e)||e&&void 0!==i&&h[e]===i)&&o.push(h)}return o};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i,s,r){if(void 0===s&&(s=0),void 0===r&&(r=t.length),n(t,s,r))for(var o=s;o<r;o++){var a=t[o];if(!e||e&&void 0===i&&a.hasOwnProperty(e)||e&&void 0!==i&&a[e]===i)return a}return null};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.indexOf(e);if(i>0){var n=t[i-1],s=t.indexOf(n);t[i]=n,t[s]=e}return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=t.indexOf(e);if(-1===n||i<0||i>=t.length)throw new Error("Supplied index out of bounds");return n!==i&&(t.splice(n,1),t.splice(i,0,e)),e};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.indexOf(e);if(-1!==i&&i<t.length-2){var n=t[i+1],s=t.indexOf(n);t[i]=n,t[s]=e}return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i,n){for(var s=[],r=t;r<=e;r++)if(i||n){var o=i?i+r.toString():r.toString();n&&(o=o.concat(n)),s.push(o)}else s.push(r);return s};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(321),s=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=null),void 0===i&&(i=1),null===e&&(e=t,t=0);for(var s=[],r=Math.max(n((e-t)/(i||1)),0),o=0;o<r;o++)s.push(t),t+=i;return s};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(96),s=function(t,e,i,s){void 0===s&&(s=t);var r;if(!Array.isArray(e))return r=t.indexOf(e),-1!==r?(n(t,r),i&&i.call(s,e),e):null;for(var o=e.length-1;o>=0;){var a=e[o];r=t.indexOf(a),-1!==r?(n(t,r),i&&i.call(s,a)):e.pop(),o--}return e};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(96),s=function(t,e,i,s){if(void 0===s&&(s=t),e<0||e>t.length-1)throw new Error("Index out of bounds");var r=n(t,e);return i&&i.call(s,r),r};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i,s,r){if(void 0===e&&(e=0),void 0===i&&(i=t.length),void 0===r&&(r=t),n(t,e,i)){var o=i-e,a=t.splice(e,o);if(s)for(var h=0;h<a.length;h++){var l=a[h];s.call(r,l)}return a}return[]};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(96),s=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=t.length);var s=e+Math.floor(Math.random()*i);return n(t,s)};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){var n=t.indexOf(e),s=t.indexOf(i);return-1!==n&&-1===s&&(t[n]=i,!0)};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){var i=t.indexOf(e);return-1!==i&&i>0&&(t.splice(i,1),t.unshift(e)),e};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(60),s=function(t,e,i,s,r){if(void 0===s&&(s=0),void 0===r&&(r=t.length),n(t,s,r))for(var o=s;o<r;o++){var a=t[o];a.hasOwnProperty(e)&&(a[e]=i)}return t};t.exports=s},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e,i){if(e!==i){var n=t.indexOf(e),s=t.indexOf(i);if(n<0||s<0)throw new Error("Supplied items must be elements of the same array");return t[n]=i,t[s]=e,t}};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(202),s=i(201),r=function(t){var e="";if(!s(t))return e;for(var i=0;i<t.length;i++){for(var r=0;r<t[i].length;r++){var o=t[i][r].toString();e+="undefined"!==o?n(o,2):"?",r<t[i].length-1&&(e+=" |")}if(i<t.length-1){e+="\n";for(var a=0;a<t[i].length;a++)e+="---",a<t[i].length-1&&(e+="+");e+="\n"}}return e};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){for(var e=0;e<t.length;e++)t[e].reverse();return t};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.reverse()};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(123),s=function(t){return n(t,180)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(123),s=function(t){return n(t,90)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(123),s=function(t){return n(t,-90)};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={CheckMatrix:i(201),MatrixToString:i(1047),ReverseColumns:i(1048),ReverseRows:i(1049),Rotate180:i(1050),RotateLeft:i(1051),RotateMatrix:i(123),RotateRight:i(1052),TransposeMatrix:i(421)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Array:i(200),Objects:i(1058),String:i(1061)}},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(5),s=i(28),r=function(t,e,i,r,o){void 0===o&&(o=i);var a=n(t,e,o);return s(a,i,r)};t.exports=r},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){for(var i=0;i<e.length;i++)if(!t.hasOwnProperty(e[i]))return!1;return!0};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var n=i(61),s=function(t,e){var i=n(t);for(var s in e)i.hasOwnProperty(s)&&(i[s]=e[s]);return i};t.exports=s},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Clone:i(61),Extend:i(19),GetAdvancedValue:i(10),GetFastValue:i(1),GetMinMaxValue:i(1055),GetValue:i(5),HasAll:i(1056),HasAny:i(422),HasValue:i(76),IsPlainObject:i(11),Merge:i(77),MergeRight:i(1057)}},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t,e){return t.replace(/%([0-9]+)/g,function(t,i){return e[Number(i)-1]})};t.exports=i},function(t,e){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
var i=function(t){return t.split("").reverse().join("")};t.exports=i},function(t,e,i){/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */
t.exports={Format:i(1059),Pad:i(202),Reverse:i(1060),UppercaseFirst:i(423)}},function(t,e){function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function s(t){if(u===setTimeout)return setTimeout(t,0);if((u===i||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function r(t){if(c===clearTimeout)return clearTimeout(t);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function o(){v&&f&&(v=!1,f.length?p=f.concat(p):g=-1,p.length&&a())}function a(){if(!v){var t=s(o);v=!0;for(var e=p.length;e;){for(f=p,p=[];++g<e;)f&&f[g].run();g=-1,e=p.length}f=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function l(){}var u,c,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:i}catch(t){u=i}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(t){c=n}}();var f,p=[],v=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new h(t,e)),1!==p.length||v||s(a)},h.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}}]);
//# sourceMappingURL=main.bundle.js.map