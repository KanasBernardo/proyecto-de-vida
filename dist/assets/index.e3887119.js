var Nt=(g,p)=>()=>(p||g((p={exports:{}}).exports,p),p.exports);var Wt=Nt((dt,Z)=>{const Dt=function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))O(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&O(w)}).observe(document,{childList:!0,subtree:!0});function F(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerpolicy&&(b.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?b.credentials="include":f.crossorigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function O(f){if(f.ep)return;f.ep=!0;const b=F(f);fetch(f.href,b)}};Dt();/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/(function(g,p){typeof dt=="object"&&typeof Z!="undefined"?Z.exports=p():typeof define=="function"&&define.amd?define(p):(g=g||self,g.ScrollReveal=p())})(globalThis,function(){var g={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function p(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function F(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var O={success:F,failure:p};/*! @license is-dom-node v1.0.4

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/function f(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/function b(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||f(t[0]))}/*! @license Tealight v0.3.6

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/function w(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(f);if(f(t))return[t];if(b(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}function P(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function a(t,e){if(P(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,o){return e(i,o,t)});throw new TypeError("Expected either an array or object literal.")}function R(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(o){return i+=`
 \u2014 `+o}),console.log(i,"color: #ea654b;")}}function J(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),o=e();try{a(w("[data-sr-id]"),function(n){var s=parseInt(n.getAttribute("data-sr-id"));r.active.push(s)})}catch(n){throw n}a(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),a(r.stale,function(n){return delete t.store.elements[n]}),a(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),a(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),a(o.stale,function(n){var s=t.store.containers[n].node;s.removeEventListener("scroll",t.delegate),s.removeEventListener("resize",t.delegate),delete t.store.containers[n]}),a(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),a(i.stale,function(n){return delete t.store.sequences[n]})}/*! @license Rematrix v0.3.0

		Copyright 2018 Julian Lloyd.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
	*/function z(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=j();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function j(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function lt(t,e){for(var r=z(t),i=z(e),o=[],n=0;n<4;n++)for(var s=[r[n],r[n+4],r[n+8],r[n+12]],l=0;l<4;l++){var m=l*4,c=[i[m],i[m+1],i[m+2],i[m+3]],v=s[0]*c[0]+s[1]*c[1]+s[2]*c[2]+s[3]*c[3];o[n+m]=v}return o}function vt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return z(r)}}return j()}function ht(t){var e=Math.PI/180*t,r=j();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function pt(t){var e=Math.PI/180*t,r=j();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function yt(t){var e=Math.PI/180*t,r=j();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function Q(t,e){var r=j();return r[0]=t,r[5]=typeof e=="number"?e:t,r}function gt(t){var e=j();return e[12]=t,e}function bt(t){var e=j();return e[13]=t,e}var _=function(){var t={},e=document.documentElement.style;function r(i,o){if(o===void 0&&(o=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof o[i]=="string")return t[i]=i;if(typeof o["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function mt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,o={},n=t.node.getAttribute("style")||"",s=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=s?s.map(function(T){return T.trim()}).join("; ")+";":"",o.generated=s.some(function(T){return T.match(/visibility\s?:\s?visible/i)})?o.computed:s.concat(["visibility: visible"]).map(function(T){return T.trim()}).join("; ")+";";var l=parseFloat(e.opacity),m=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),c={computed:l!==m?"opacity: "+l+";":"",generated:l!==m?"opacity: "+m+";":""},v=[];if(parseFloat(i.distance)){var u=i.origin==="top"||i.origin==="bottom"?"Y":"X",y=i.distance;(i.origin==="top"||i.origin==="left")&&(y=/^-/.test(y)?y.substr(1):"-"+y);var k=y.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=k[0],S=k[1];switch(S){case"em":y=parseInt(e.fontSize)*E;break;case"px":y=E;break;case"%":y=u==="Y"?t.node.getBoundingClientRect().height*E/100:t.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}u==="Y"?v.push(bt(y)):v.push(gt(y))}i.rotate.x&&v.push(ht(i.rotate.x)),i.rotate.y&&v.push(pt(i.rotate.y)),i.rotate.z&&v.push(yt(i.rotate.z)),i.scale!==1&&(i.scale===0?v.push(Q(2e-4)):v.push(Q(i.scale)));var h={};if(v.length){h.property=_("transform"),h.computed={raw:e[h.property],matrix:vt(e[h.property])},v.unshift(h.computed.matrix);var Mt=v.reduce(lt);h.generated={initial:h.property+": matrix3d("+Mt.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var d={};if(c.generated||h.generated.initial){d.property=_("transition"),d.computed=e[d.property],d.fragments=[];var ct=i.delay,N=i.duration,D=i.easing;c.generated&&d.fragments.push({delayed:"opacity "+N/1e3+"s "+D+" "+ct/1e3+"s",instant:"opacity "+N/1e3+"s "+D+" 0s"}),h.generated.initial&&d.fragments.push({delayed:h.property+" "+N/1e3+"s "+D+" "+ct/1e3+"s",instant:h.property+" "+N/1e3+"s "+D+" 0s"});var At=d.computed&&!d.computed.match(/all 0s|none 0s/);At&&d.fragments.unshift({delayed:d.computed,instant:d.computed});var ut=d.fragments.reduce(function(T,C,ft){return T.delayed+=ft===0?C.delayed:", "+C.delayed,T.instant+=ft===0?C.instant:", "+C.instant,T},{delayed:"",instant:""});d.generated={delayed:d.property+": "+ut.delayed+";",instant:d.property+": "+ut.instant+";"}}else d.generated={delayed:"",instant:""};return{inline:o,opacity:c,position:r,transform:h,transition:d}}function $(t,e){e.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(t.style[o.trim()]=n.join(":"))})}function U(t){var e=this,r;try{a(w(t),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=e.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),$(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[o]}})}catch(i){return R.call(this,"Clean failed.",i.message)}if(r)try{J.call(this)}catch(i){return R.call(this,"Clean failed.",i.message)}}function wt(){var t=this;a(this.store.elements,function(e){$(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),a(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function I(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(P(t))return a(e,function(i){a(i,function(o,n){P(o)?((!t[n]||!P(t[n]))&&(t[n]={}),I(t[n],o)):t[n]=o})}),t;throw new TypeError("Target must be an object literal.")}function M(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var W=function(){var t=0;return function(){return t++}}();function tt(){var t=this;J.call(this),a(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),$(e.node,r.filter(function(i){return i!==""}).join(" "))}),a(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function q(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,o=t.visible&&!t.revealed,n=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||o)return Et.call(this,t,i);if(e.reset||n)return Tt.call(this,t)}function Et(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,$(t.node,r.filter(function(i){return i!==""}).join(" ")),et.call(this,t,e)}function Tt(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,$(t.node,e.filter(function(r){return r!==""}).join(" ")),et.call(this,t)}function et(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,o=t.revealed?t.config.beforeReveal:t.config.beforeReset,n=t.revealed?t.config.afterReveal:t.config.afterReset,s=0;t.callbackTimer&&(s=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),o(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&U.call(r,t.node)},i-s)}}function rt(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return q.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var o=new it(r,"visible",this.store),n=new it(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var s=r.members[o.body[0]],l=this.store.elements[s];if(l)return A.call(this,r,o.body[0],-1,e),A.call(this,r,o.body[0],1,e),q.call(this,l,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return A.call(this,r,i,-1,e),q.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return A.call(this,r,i,1,e),q.call(this,t,{reveal:!0,pristine:e})}}function Ot(t){var e=Math.abs(t);if(!isNaN(e))this.id=W(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function it(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],a(t.members,function(o,n){var s=r.elements[o];s&&s[e]&&i.body.push(n)}),this.body.length&&a(t.members,function(o,n){var s=r.elements[o];s&&!s[e]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function A(t,e,r,i){var o=this,n=["head",null,"foot"][1+r],s=t.members[e+r],l=this.store.elements[s];t.blocked[n]=!0,setTimeout(function(){t.blocked[n]=!1,l&&rt.call(o,l,i)},t.interval)}function nt(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var o=[],n,s=e.interval||g.interval;try{s&&(n=new Ot(s));var l=w(t);if(!l.length)throw new Error("Invalid reveal target.");var m=l.reduce(function(c,v){var u={},y=v.getAttribute("data-sr-id");y?(I(u,i.store.elements[y]),$(u.node,u.styles.inline.computed)):(u.id=W(),u.node=v,u.seen=!1,u.revealed=!1,u.visible=!1);var k=I({},u.config||i.defaults,e);if(!k.mobile&&M()||!k.desktop&&!M())return y&&U.call(i,u),c;var E=w(k.container)[0];if(!E)throw new Error("Invalid container.");if(!E.contains(v))return c;var S;return S=jt(E,o,i.store.containers),S===null&&(S=W(),o.push({id:S,node:E})),u.config=k,u.containerId=S,u.styles=mt(u),n&&(u.sequence={id:n.id,index:n.members.length},n.members.push(u.id)),c.push(u),c},[]);a(m,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return R.call(this,"Reveal failed.",c.message)}a(o,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(tt.bind(this),0))}function jt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return a(e,function(o){a(o,function(n){i===null&&n.node===t&&(i=n.id)})}),i}function Lt(){var t=this;a(this.store.history,function(e){nt.call(t,e.target,e.options,!0)}),tt.call(this)}var Rt=function(t){return(t>0)-(t<0)||+t},ot=Math.sign||Rt;/*! @license miniraf v1.0.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/var st=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return st(e)},0)}}(),xt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||st;function at(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,o=0,n=0,s=t.node;do isNaN(s.offsetTop)||(o+=s.offsetTop),isNaN(s.offsetLeft)||(n+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function kt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function St(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(!!e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,o={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},n={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||t.styles.position==="fixed"}}function $t(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),xt(function(){var i=t.type==="init"||t.type==="resize";a(r.store.containers,function(o){i&&(o.geometry=at.call(r,o,!0));var n=kt.call(r,o);o.scroll&&(o.direction={x:ot(n.left-o.scroll.left),y:ot(n.top-o.scroll.top)}),o.scroll=n}),a(e,function(o){(i||o.geometry===void 0)&&(o.geometry=at.call(r,o)),o.visible=St.call(r,o)}),a(e,function(o){o.sequence?rt.call(r,o):q.call(r,o)}),r.pristine=!1})}function It(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function qt(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var Pt="4.0.9",Y,X,H,V,B,L,G,K;function x(t){t===void 0&&(t={});var e=typeof this=="undefined"||Object.getPrototypeOf(this)!==x.prototype;if(e)return new x(t);if(!x.isSupported())return R.call(this,"Instantiation failed.","This browser is not supported."),O.failure();var r;try{r=L?I({},L,t):I({},g,t)}catch(o){return R.call(this,"Invalid configuration.",o.message),O.failure()}try{var i=w(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return R.call(this,o.message),O.failure()}return L=r,!L.mobile&&M()||!L.desktop&&!M()?(R.call(this,"This device is disabled.","desktop: "+L.desktop,"mobile: "+L.mobile),O.failure()):(O.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Y=Y||$t.bind(this),X=X||wt.bind(this),H=H||nt.bind(this),V=V||U.bind(this),B=B||Lt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Y}}),Object.defineProperty(this,"destroy",{get:function(){return X}}),Object.defineProperty(this,"reveal",{get:function(){return H}}),Object.defineProperty(this,"clean",{get:function(){return V}}),Object.defineProperty(this,"sync",{get:function(){return B}}),Object.defineProperty(this,"defaults",{get:function(){return L}}),Object.defineProperty(this,"version",{get:function(){return Pt}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),K||(K=this))}return x.isSupported=function(){return It()&&qt()},Object.defineProperty(x,"debug",{get:function(){return G||!1},set:function(t){return G=typeof t=="boolean"?t:G}}),x(),x});const Ct=document.querySelector("#bmore"),Ft=document.querySelector("#bmenu"),zt=document.querySelector(".links"),Ut=document.querySelector(".more .menu");Ft.addEventListener("click",g=>{g.preventDefault(),zt.classList.toggle("show")});Ct.addEventListener("click",g=>{g.preventDefault(),Ut.classList.toggle("show")});window.sr=ScrollReveal();sr.reveal(".navegacion",{duration:3e3,origin:"botton",distance:"-100px"});sr.reveal(".cuadro",{duration:3e3,origin:"botton",distance:"-100px"});sr.reveal(".info",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".infoV",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".table",{duration:3e3,origin:"top",distance:"-200px"});sr.reveal(".infoV",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".infoAU",{duration:3e3,origin:"top",distance:"-30px"});sr.reveal(".contImg",{duration:3e3,origin:"top",distance:"-150px"});sr.reveal(".containerTi",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".contImgL",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".infoL",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".contImgN",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".infoNA",{duration:3e3,origin:"top",distance:"-400px"});sr.reveal(".infoSU",{duration:3e3,origin:"top",distance:"-400px"})});export default Wt();
