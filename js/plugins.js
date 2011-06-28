
// remap jQuery to $
(function($){
})(window.jQuery);



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};



// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};

})(jQuery);


/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);


/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.13",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;

/*
 * jQuery SmoothDivScroll 1.1
 *
 * Copyright (c) 2010 Thomas Kahn
 * Licensed under the GPL license.
 *
 * http://www.maaki.com/thomas/SmoothDivScroll/
 *
 * Depends:
 * jquery.ui.widget.js
 *
 */
(function($) {

	$.widget("thomaskahn.smoothDivScroll", {
		// Default options
		options: {
			scrollingHotSpotLeft: "div.scrollingHotSpotLeft",
			scrollingHotSpotRight: "div.scrollingHotSpotRight",
			scrollableArea: "div.scrollableArea",
			scrollWrapper: "div.scrollWrapper",
			hiddenOnStart: false,
			ajaxContentURL: "",
			countOnlyClass: "",
			scrollStep: 15,
			scrollInterval: 10,
			mouseDownSpeedBooster: 3,
			autoScroll: "",
			autoScrollDirection: "right",
			autoScrollStep: 5,
			autoScrollInterval: 10,
			visibleHotSpots: "",
			hotSpotsVisibleTime: 5,
			startAtElementId: ""
		},
		_create: function() {

			// Set variables
			var self = this, o = this.options, el = this.element;

			el.data("scrollWrapper", el.find(o.scrollWrapper));
			el.data("scrollingHotSpotRight", el.find(o.scrollingHotSpotRight));
			el.data("scrollingHotSpotLeft", el.find(o.scrollingHotSpotLeft));
			el.data("scrollableArea", el.find(o.scrollableArea));
			el.data("speedBooster", 1);
			el.data("motherElementOffset", el.offset().left);
			el.data("scrollXPos", 0);
			el.data("hotSpotWidth", el.find(o.scrollingHotSpotLeft).width());
			el.data("scrollableAreaWidth", 0);
			el.data("startingPosition", 0);
			el.data("rightScrollInterval", null);
			el.data("leftScrollInterval", null);
			el.data("autoScrollInterval", null);
			el.data("hideHotSpotBackgroundsInterval", null);
			el.data("previousScrollLeft", 0);
			el.data("pingPongDirection", "right");
			el.data("getNextElementWidth", true);
			el.data("swapAt", null);
			el.data("startAtElementHasNotPassed", true);
			el.data("swappedElement", null);
			el.data("originalElements", el.data("scrollableArea").children(o.countOnlyClass));
			el.data("visible", true);
			el.data("initialAjaxContentLoaded", false);
			el.data("enabled", true);

			// If the user wants to have visible hotspots, here is where it's taken care of
			if (o.autoScroll !== "always") {
				switch (o.visibleHotSpots) {
					case "always":
						self.showHotSpotBackgrounds();
						break;
					case "onstart":
						self.showHotSpotBackgrounds();
						el.data("hideHotSpotBackgroundsInterval", setTimeout(function() {
							self.hideHotSpotBackgrounds("slow");
						}, (o.hotSpotsVisibleTime * 1000)));
						break;
					default:
						break;
				}
			}
			/*****************************************
			SET UP EVENTS FOR SCROLLING RIGHT
			*****************************************/
			// Check the mouse X position and calculate the relative X position inside the right hotspot
			el.data("scrollingHotSpotRight").bind("mousemove", function(e) {
				var x = e.pageX - (this.offsetLeft + el.data("motherElementOffset"));
				el.data("scrollXPos", Math.round((x / el.data("hotSpotWidth")) * o.scrollStep));
				if (el.data("scrollXPos") === Infinity) {
					el.data("scrollXPos", 0);
				}
			});

			// mouseover right hotspot - scrolling
			el.data("scrollingHotSpotRight").bind("mouseover", function() {

				// Clear autoscrolling, if it should only run on start
				if ((o.autoScroll === "onstart" && el.data("autoScrollInterval") !== null)) {
					clearInterval(el.data("autoScrollInterval"));
					el.data("autoScrollInterval", null);
					self._trigger("autoScrollIntervalStopped");
				}

				// Start the scrolling interval
				el.data("rightScrollInterval", setInterval(function() {

					if (el.data("scrollXPos") > 0 && el.data("enabled")) {
						el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() + (el.data("scrollXPos") * el.data("speedBooster")));

						self._showHideHotSpots();
					}

				}, o.scrollInterval));

				// Callback
				self._trigger("mouseOverRightHotSpot");

			});

			// mouseout right hotspot
			el.data("scrollingHotSpotRight").bind("mouseout", function() {
				clearInterval(el.data("rightScrollInterval"));
				el.data("scrollXPos", 0);
			});

			// mousedown right hotspot (add scrolling speed booster)
			el.data("scrollingHotSpotRight").bind("mousedown", function() {
				el.data("speedBooster", o.mouseDownSpeedBooster);
			});

			// mouseup anywhere (stop boosting the scrolling speed)
			$("body").bind("mouseup", function() {
				el.data("speedBooster", 1);
			});

			/*****************************************
			SET UP EVENTS FOR SCROLLING LEFT
			*****************************************/
			// Check the mouse X position and calculate the relative X position inside the left hotspot
			el.data("scrollingHotSpotLeft").bind("mousemove", function(e) {
				var x = el.data("scrollingHotSpotLeft").innerWidth() - (e.pageX - el.data("motherElementOffset"));
				el.data("scrollXPos", Math.round((x / el.data("hotSpotWidth")) * o.scrollStep));
				if (el.data("scrollXPos") === Infinity) {
					el.data("scrollXPos", 0);
				}

			});

			// mouseover left hotspot
			el.data("scrollingHotSpotLeft").bind("mouseover", function() {

				// Clear autoscrolling, if it should only run on start

				if ((o.autoScroll === "onstart" && el.data("autoScrollInterval") !== null)) {
					clearInterval(el.data("autoScrollInterval"));
					el.data("autoScrollInterval", null);
					self._trigger("autoScrollIntervalStopped");
				}

				el.data("leftScrollInterval", setInterval(function() {
					if (el.data("scrollXPos") > 0 && el.data("enabled")) {
						el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() - (el.data("scrollXPos") * el.data("speedBooster")));

						self._showHideHotSpots();
					}

				}, o.scrollInterval));

				// Callback
				self._trigger("mouseOverLeftHotSpot");
			});

			// mouseout left hotspot
			el.data("scrollingHotSpotLeft").bind("mouseout", function() {
				clearInterval(el.data("leftScrollInterval"));
				el.data("scrollXPos", 0);
			});

			// mousedown left hotspot (add scrolling speed booster)
			el.data("scrollingHotSpotLeft").bind("mousedown", function() {
				el.data("speedBooster", o.mouseDownSpeedBooster);
			});

			/*****************************************
			SET UP EVENT FOR RESIZING THE BROWSER WINDOW
			*****************************************/
			$(window).bind("resize", function() {
				// If the scrollable area is not hidden on start, show/hide the hotspots
				if (!(o.hiddenOnStart)) {
					self._showHideHotSpots();
				}

				self._trigger("windowResized");
			});

			/*****************************************
			FETCHING AJAX CONTENT ON INITIALIZATION
			*****************************************/
			// If there's an ajaxContentURL in the options, 
			// fetch the content
			if (o.ajaxContentURL.length > 0) {
				self.replaceContent(o.ajaxContentURL);
			}
			else {
				self.recalculateScrollableArea();
			}

			// Should it be hidden on start?
			if (o.hiddenOnStart) {
				self.hide();
			}

			/*****************************************
			AUTOSCROLLING
			*****************************************/
			// If the user has set the option autoScroll, the scollable area will
			// start scrolling automatically. If the content is fetched using AJAX
			// the autoscroll is not started here but in recalculateScrollableArea.
			// Otherwise recalculateScrollableArea won't have the time to calculate
			// the width of the scrollable area before the autoscrolling starts.
			if ((o.autoScroll.length > 0) && !(o.hiddenOnStart) && (o.ajaxContentURL.length <= 0)) {
				self.startAutoScroll();
			}

		},
		/**********************************************************
		Hotspot functions
		**********************************************************/
		showHotSpotBackgrounds: function(fadeSpeed) {
			// Alter the CSS (SmoothDivScroll.css) if you want to customize
			// the look'n'feel of the visible hotspots
			var self = this, el = this.element;

			// Fade in the hotspot backgrounds
			if (fadeSpeed !== undefined) {
				// Before the fade-in starts, we need to make sure the opacity
				// is zero
				el.data("scrollingHotSpotLeft").css("opacity", "0.0");
				el.data("scrollingHotSpotRight").css("opacity", "0.0");

				el.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible");
				el.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible");

				// Fade in the left hotspot
				el.data("scrollingHotSpotLeft").fadeTo(fadeSpeed, 0.35);

				// Fade in the right hotspot
				el.data("scrollingHotSpotRight").fadeTo(fadeSpeed, 0.35);
			}
			// Don't fade, just show them
			else {
				// The left hotspot
				el.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible");
				el.data("scrollingHotSpotLeft").removeAttr("style");

				// The right hotspot
				el.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible");
				el.data("scrollingHotSpotRight").removeAttr("style");
			}
			self._showHideHotSpots();
		},
		hideHotSpotBackgrounds: function(fadeSpeed) {
			var el = this.element;

			// Fade out the hotspot backgrounds
			if (fadeSpeed !== undefined) {
				// Fade out the left hotspot
				el.data("scrollingHotSpotLeft").fadeTo(fadeSpeed, 0.0, function() {
					el.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible");
				});

				// Fade out the right hotspot
				el.data("scrollingHotSpotRight").fadeTo(fadeSpeed, 0.0, function() {
					el.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible");
				});
			}
			// Don't fade, just hide them
			else {
				el.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible");
				el.data("scrollingHotSpotLeft").removeAttr("style");

				el.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible");
				el.data("scrollingHotSpotRight").removeAttr("style");
			}

		},
		// Function for showing and hiding hotspots depending on the
		// offset of the scrolling
		_showHideHotSpots: function() {
			var self = this, el = this.element, o = this.options;

			// If autoscrolling is set to always, there should be no hotspots
			if (o.autoScroll !== "always") {
				// If the scrollable area is shorter than the scroll wrapper, both hotspots
				// should be hidden
				if (el.data("scrollableAreaWidth") <= (el.data("scrollWrapper").innerWidth())) {
					el.data("scrollingHotSpotLeft").hide();
					el.data("scrollingHotSpotRight").hide();
				}
				// When you can't scroll further left the left scroll hotspot should be hidden
				// and the right hotspot visible.
				else if (el.data("scrollWrapper").scrollLeft() === 0) {
					el.data("scrollingHotSpotLeft").hide();
					el.data("scrollingHotSpotRight").show();
					// Callback
					self._trigger("scrollLeftLimitReached");
					// Clear interval
					clearInterval(el.data("leftScrollInterval"));
					el.data("leftScrollInterval", null);
				}
				// When you can't scroll further right
				// the right scroll hotspot should be hidden
				// and the left hotspot visible
				else if (el.data("scrollableAreaWidth") <= (el.data("scrollWrapper").innerWidth() + el.data("scrollWrapper").scrollLeft())) {
					el.data("scrollingHotSpotLeft").show();
					el.data("scrollingHotSpotRight").hide();
					// Callback
					self._trigger("scrollRightLimitReached");
					// Clear interval
					clearInterval(el.data("rightScrollInterval"));
					el.data("rightScrollInterval", null);
				}
				// If you are somewhere in the middle of your
				// scrolling, both hotspots should be visible
				else {
					el.data("scrollingHotSpotLeft").show();
					el.data("scrollingHotSpotRight").show();
				}
			}
			else {
				el.data("scrollingHotSpotLeft").hide();
				el.data("scrollingHotSpotRight").hide();
			}
		},
		/**********************************************************
		Moving to a certain element
		**********************************************************/
		moveToElement: function(moveTo, elementNumber) {
			var self = this, el = this.element, o = this.options, tempScrollableAreaWidth = 0, foundStartAtElement = false;

			switch (moveTo) {
				case "first":
					el.data("scrollXPos", 0);
					self._trigger("movedToFirstElement");
					break;
				case "start":
					// Check to see where the start-at element is at the moment.
					// This can vary if endlessloop is used for autoscroll since it
					// swaps elements around.

					el.data("scrollableArea").children(o.countOnlyClass).each(function() {

						if ((o.startAtElementId.length > 0) && (($(this).attr("id")) === o.startAtElementId)) {
							el.data("startingPosition", tempScrollableAreaWidth);
							foundStartAtElement = true;
						}
						tempScrollableAreaWidth = tempScrollableAreaWidth + $(this).outerWidth(true);
					});

					el.data("scrollXPos", el.data("startingPosition"));
					self._trigger("movedToStartElement");
					break;
				case "last":
					el.data("scrollXPos", el.data("scrollableAreaWidth"));
					self._trigger("movedToLastElement");
					break;
				case "number":
					if (!(isNaN(elementNumber))) {
						// Get the total width of all preceding elements					
						el.data("scrollableArea").children(o.countOnlyClass).each(function(index) {
							if (index === (elementNumber - 1)) {
								el.data("scrollXPos", tempScrollableAreaWidth);
							}
							tempScrollableAreaWidth = tempScrollableAreaWidth + $(this).outerWidth(true);
						});
					}
					self._trigger("movedToElementNumber", null, { "elementNumber": elementNumber });
					break;
				default:
					break;
			}

			el.data("scrollWrapper").scrollLeft(el.data("scrollXPos"));
			self._showHideHotSpots();
		},
		/**********************************************************
		Adding or replacing content
		**********************************************************/
		addContent: function(ajaxContentURL, addWhere) {
			var self = this, el = this.element;

			$.get(ajaxContentURL, function(data) {
				// Add the loaded content first or last in the scrollable area
				if (addWhere === "first") {
					el.data("scrollableArea").children(":first").before(data);
				}
				else {
					el.data("scrollableArea").children(":last").after(data);
				}

				// Recalculate the total width of the elements inside the scrollable area
				self.recalculateScrollableArea();

				// Determine which hotspots to show
				self._showHideHotSpots();
			});
		},
		replaceContent: function(ajaxContentURL) {
			var self = this, el = this.element;

			el.data("scrollableArea").load(ajaxContentURL, function() {
				// Recalculate the total width of the elements inside the scrollable area
				self.recalculateScrollableArea();
				self.moveToElement("first");
				self._showHideHotSpots();
				el.data("startingPosition", 0);
			});
		},
		/**********************************************************
		Recalculate the scrollable area
		**********************************************************/
		recalculateScrollableArea: function() {

			var tempScrollableAreaWidth = 0, foundStartAtElement = false, o = this.options, el = this.element, self = this;

			// Add up the total width of all the items inside the scrollable area
			// and check to see if there's a specific element to start at
			el.data("scrollableArea").children(o.countOnlyClass).each(function() {
				// Check to see if the current element in the loop is the one where the scrolling should start
				if ((o.startAtElementId.length > 0) && (($(this).attr("id")) === o.startAtElementId)) {
					el.data("startingPosition", tempScrollableAreaWidth);
					foundStartAtElement = true;
				}
				tempScrollableAreaWidth = tempScrollableAreaWidth + $(this).outerWidth(true);
			});
		
			
			// If the element with the ID specified by startAtElementId
			// is not found, reset it
			if (!(foundStartAtElement)) {
				el.data("startAtElementId", "");
			}

			// Set the width of the scrollable area
			el.data("scrollableAreaWidth", tempScrollableAreaWidth);
			el.data("scrollableArea").width(el.data("scrollableAreaWidth"));

			// Move to the starting position
			el.data("scrollWrapper").scrollLeft(el.data("startingPosition"));
			el.data("scrollXPos", el.data("startingPosition"));

			// If the content of the scrollable area is fetched using AJAX
			// during initialization, it needs to be done here. After it has
			// been loaded a flag variable is set to indicate that the content
			// has been loaded already and shouldn
			if (!(el.data("initialAjaxContentLoaded"))) {
				if ((o.autoScroll.length > 0) && !(o.hiddenOnStart) && (o.ajaxContentURL.length > 0)) {
					self.startAutoScroll();
					el.data("initialAjaxContentLoaded", true);
				}
			}

		},
		/**********************************************************
		Stopping, starting and doing the autoscrolling
		**********************************************************/
		stopAutoScroll: function() {
			var self = this, el = this.element;

			clearInterval(el.data("autoScrollInterval"));
			el.data("autoScrollInterval", null);

			// Check to see which hotspots should be active
			// in the position where the scroller has stopped
			self._showHideHotSpots();

			self._trigger("autoScrollStopped");

		},
		startAutoScroll: function() {
			var self = this, el = this.element, o = this.options;

			self._showHideHotSpots();

			// Stop any running interval
			clearInterval(el.data("autoScrollInterval"));
			el.data("autoScrollInterval", null);

			// Callback
			self._trigger("autoScrollStarted");

			// Start interval
			el.data("autoScrollInterval", setInterval(function() {

				// If the scroller is not visible or
				// if the scrollable area is shorter than the scroll wrapper
				// any running autoscroll interval should stop.
				if (!(el.data("visible")) || (el.data("scrollableAreaWidth") <= (el.data("scrollWrapper").innerWidth()))) {
					// Stop any running interval
					clearInterval(el.data("autoScrollInterval"));
					el.data("autoScrollInterval", null);
				}
				else {
					// Store the old scrollLeft value to see if the scrolling has reached the end
					el.data("previousScrollLeft", el.data("scrollWrapper").scrollLeft());


					switch (o.autoScrollDirection) {
						case "right":
							el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() + o.autoScrollStep);
							if (el.data("previousScrollLeft") === el.data("scrollWrapper").scrollLeft()) {
								self._trigger("autoScrollRightLimitReached");
								clearInterval(el.data("autoScrollInterval"));
								el.data("autoScrollInterval", null);
								self._trigger("autoScrollIntervalStopped");
							}
							break;

						case "left":
							el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() - o.autoScrollStep);
							if (el.data("previousScrollLeft") === el.data("scrollWrapper").scrollLeft()) {
								self._trigger("autoScrollLeftLimitReached");
								clearInterval(el.data("autoScrollInterval"));
								el.data("autoScrollInterval", null);
								self._trigger("autoScrollIntervalStopped");
							}
							break;

						case "backandforth":
							if (el.data("pingPongDirection") === "right") {
								el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() + (o.autoScrollStep));
							}
							else {
								el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() - (o.autoScrollStep));
							}

							// If the scrollLeft hasnt't changed it means that the scrolling has reached
							// the end and the direction should be switched
							if (el.data("previousScrollLeft") === el.data("scrollWrapper").scrollLeft()) {
								if (el.data("pingPongDirection") === "right") {
									el.data("pingPongDirection", "left");
									self._trigger("autoScrollRightLimitReached");
								}
								else {
									el.data("pingPongDirection", "right");
									self._trigger("autoScrollLeftLimitReached");
								}
							}
							break;

						case "endlessloopright":
							// Get the width of the first element. When it has scrolled out of view,
							// the element swapping should be executed. A true/false variable is used
							// as a flag variable so the swapAt value doesn't have to be recalculated
							// in each loop.

							if (el.data("getNextElementWidth")) {
								if ((o.startAtElementId.length > 0) && (el.data("startAtElementHasNotPassed"))) {
									el.data("swapAt", $("#" + o.startAtElementId).outerWidth(true));
									el.data("startAtElementHasNotPassed", false);
								}
								else {
									el.data("swapAt", el.data("scrollableArea").children(":first").outerWidth(true));
								}

								el.data("getNextElementWidth", false);
							}

							// Do the autoscrolling
							el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() + o.autoScrollStep);

							// Check to see if the swap should be done
							if (el.data("swapAt") <= el.data("scrollWrapper").scrollLeft()) {
								el.data("swappedElement", el.data("scrollableArea").children(":first").detach());
								el.data("scrollableArea").append(el.data("swappedElement"));
								el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() - el.data("swappedElement").outerWidth(true));
								el.data("getNextElementWidth", true);
							}
							break;
						case "endlessloopleft":
							// Get the width of the first element. When it has scrolled out of view,
							// the element swapping should be executed. A true/false variable is used
							// as a flag variable so the swapAt value doesn't have to be recalculated
							// in each loop.

							if (el.data("getNextElementWidth")) {
								if ((o.startAtElementId.length > 0) && (el.data("startAtElementHasNotPassed"))) {
									el.data("swapAt", $("#" + o.startAtElementId).outerWidth(true));
									el.data("startAtElementHasNotPassed", false);
								}
								else {
									el.data("swapAt", el.data("scrollableArea").children(":first").outerWidth(true));
								}

								el.data("getNextElementWidth", false);
							}

							// Do the autoscrolling
							el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() - o.autoScrollStep);

							// Check to see if the swap should be done
							if (el.data("scrollWrapper").scrollLeft() === 0) {
								el.data("swappedElement", el.data("scrollableArea").children(":last").detach());
								el.data("scrollableArea").prepend(el.data("swappedElement"));
								el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft() + el.data("swappedElement").outerWidth(true));
								el.data("getNextElementWidth", true);
							}
							break;
						default:
							break;

					}
				}
			}, o.autoScrollInterval));

		},
		restoreOriginalElements: function() {
			var self = this, el = this.element;

			// Restore the original content of the scrollable area
			el.data("scrollableArea").html(el.data("originalElements"));
			self.recalculateScrollableArea();
			self.moveToElement("first");
		},
		show: function() {
			var el = this.element;
			el.data("visible", true);
			el.show();
		},
		hide: function() {
			var el = this.element;
			el.data("visible", false);
			el.hide();
		},
		enable: function() {
			var el = this.element;

			// Set enabled to true
			el.data("enabled", true);
		},
		disable: function() {
			var el = this.element;

			// Clear all running intervals
			clearInterval(el.data("autoScrollInterval"));
			clearInterval(el.data("rightScrollInterval"));
			clearInterval(el.data("leftScrollInterval"));
			clearInterval(el.data("hideHotSpotBackgroundsInterval"));

			// Set enabled to false
			el.data("enabled", false);
		},
		destroy: function() {
			var el = this.element;

			// Clear all running intervals
			clearInterval(el.data("autoScrollInterval"));
			clearInterval(el.data("rightScrollInterval"));
			clearInterval(el.data("leftScrollInterval"));
			clearInterval(el.data("hideHotSpotBackgroundsInterval"));

			// Remove all element specific events
			el.data("scrollingHotSpotRight").unbind("mouseover");
			el.data("scrollingHotSpotRight").unbind("mouseout");
			el.data("scrollingHotSpotRight").unbind("mousedown");

			el.data("scrollingHotSpotLeft").unbind("mouseover");
			el.data("scrollingHotSpotLeft").unbind("mouseout");
			el.data("scrollingHotSpotLeft").unbind("mousedown");

			// Restore the original content of the scrollable area
			el.data("scrollableArea").html(el.data("originalElements"));

			// Remove the width of the scrollable area
			el.data("scrollableArea").removeAttr("style");
			el.data("scrollingHotSpotRight").removeAttr("style");
			el.data("scrollingHotSpotLeft").removeAttr("style");

			el.data("scrollWrapper").scrollLeft(0);
			el.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible");
			el.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible");
			el.data("scrollingHotSpotRight").hide();
			el.data("scrollingHotSpotLeft").hide();

			// Call the base destroy function
			$.Widget.prototype.destroy.apply(this, arguments);

		}
	});
})(jQuery);