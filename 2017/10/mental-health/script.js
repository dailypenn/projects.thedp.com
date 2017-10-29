/* modernizr 3.3.1 (Custom Build) | MIT | https://modernizr.com/download/?-cssanimations-prefixed-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?w.className.baseVal=n:w.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(x?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=l,w.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete z.style,delete z.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan","samp"];!z.style&&y.length;)p=!0,z.modElem=f(y.shift()),z.style=z.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=z.style[v],a(v,"-")&&(v=s(v)),z.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{z.style[v]=o}catch(g){}if(z.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var w=n.documentElement,x="svg"===w.nodeName.toLowerCase(),S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=E;var N=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=N;var P={elem:f("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),_.testAllProps=h;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};_.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),o(),i(g),delete _.addTest,delete _.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
/*! classie v1.0.1 | class helper functions | from bonzo https://github.com/ded/bonzo | MIT license */
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){(t(s,e)?c:a)(s,e)}var t,a,c;"classList"in document.documentElement?(t=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(t=function(s,n){return e(n).test(s.className)},a=function(s,e){t(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var o={hasClass:t,addClass:a,removeClass:c,toggleClass:n,has:t,add:a,remove:c,toggle:n};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:s.classie=o}(window);

/**
 * Adapted from codrops main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// some helper functions
	/**
	 * from https://davidwalsh.name/javascript-debounce-function
	 */
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// some vars
	var bodyEl = document.body,
		// window sizes
		winsize = { width : window.innerWidth, height : window.innerHeight },
		// support for animations
		support = { animations : Modernizr.cssanimations },
		// animationend event function
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.animations ) {
					if( ev.target != this ) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(); }
			};
			if( support.animations ) {
				el.addEventListener( animEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		};

	/**
	 * Revealer obj
	 */
	function Revealer(options) {
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * Revealer default options
	 */
	Revealer.prototype.options = {
		// total number of revealing layers (min is 1)
		nmbLayers : 1,
		// bg color for the revealing layers
		bgcolor : '#fff',
		// effect classname
		effect : 'anim--effect-1',
		// callback
		onStart : function(direction) { return false; },
		// callback
		onEnd : function(direction) { return false; }
	};

	/**
	 * build layer structure
	 * add effect class
	 * init/bind events
	 */
	Revealer.prototype._init = function() {
		// add revealer layers
		this._addLayers();
		// now we have access to the layers
		this.layers = [].slice.call(this.revealerWrapper.children);
		// init/bind events
		this._initEvents();
	};

	/**
	 * init/bind events
	 */
	Revealer.prototype._initEvents = function() {
		// window resize: recalculate window sizes
		this.debounceResize = debounce(function(ev) {
			winsize = {width: window.innerWidth, height: window.innerHeight};
		}, 10);
		window.addEventListener('resize', this.debounceResize);
	};

	/**
	 * build layer structure and append it to the body
	 * add effect class
	 */
	Revealer.prototype._addLayers = function() {
		this.revealerWrapper = document.createElement('div');
		this.revealerWrapper.className = 'revealer';
		classie.add(bodyEl, this.options.effect);
		var  strHTML = '';
		for(var i = 0; i < this.options.nmbLayers; ++i) {
			var bgcolor = typeof this.options.bgcolor === 'string' ? this.options.bgcolor : (this.options.bgcolor instanceof Array && this.options.bgcolor[i] ? this.options.bgcolor[i] : '#fff');
			strHTML += '<div style="background:' + bgcolor + '" class="revealer__layer"></div>';
		}
		this.revealerWrapper.innerHTML = strHTML;
		bodyEl.appendChild(this.revealerWrapper);
	};

	/**
	 * reveal the layers
	 * direction: right || left || top || bottom || cornertopleft || cornertopright || cornerbottomleft || cornerbottomright
	 */
	Revealer.prototype.reveal = function(direction, callbacktime, callback) {
		// if animating return
		if( this.isAnimating ) {
			return false;
		}
		this.isAnimating = true;
		// current direction
		this.direction = direction;
		// onStart callback
		this.options.onStart(this.direction);

		// set the initial position for the layers´ parent
		var widthVal, heightVal, transform;
		if( direction === 'cornertopleft' || direction === 'cornertopright' || direction === 'cornerbottomleft' || direction === 'cornerbottomright' ) {
			var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
			widthVal = heightVal = pageDiagonal + 'px';

			if( direction === 'cornertopleft' ) {
				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,' + pageDiagonal + 'px,0)';
			}
			else if( direction === 'cornertopright' ) {
				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0,' + pageDiagonal + 'px,0)';
			}
			else if( direction === 'cornerbottomleft' ) {
				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)';
			}
			else if( direction === 'cornerbottomright' ) {
				transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0,' + pageDiagonal + 'px,0)';
			}
		}
		else if( direction === 'left' || direction === 'right' ) {
			widthVal = '100vh'
			heightVal = '100vw';
			transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,' + (direction === 'left' ? 90 : -90) + 'deg) translate3d(0,100%,0)';
		}
		else if( direction === 'top' || direction === 'bottom' ) {
			widthVal = '100vw';
			heightVal = '100vh';
			transform = direction === 'top' ? 'rotate3d(0,0,1,180deg)' : 'none';
		}

		this.revealerWrapper.style.width = widthVal;
		this.revealerWrapper.style.height = heightVal;
		this.revealerWrapper.style.WebkitTransform = this.revealerWrapper.style.transform = transform;
		this.revealerWrapper.style.opacity = 1;

		// add direction and animate classes to parent
		classie.add(this.revealerWrapper, 'revealer--' + direction || 'revealer--right');
		classie.add(this.revealerWrapper, 'revealer--animate');

		// track the end of the animation for all layers
		var self = this, layerscomplete = 0;
		this.layers.forEach(function(layer) {
			onEndAnimation(layer, function() {
				++layerscomplete;
				if( layerscomplete === self.options.nmbLayers ) {
					classie.remove(self.revealerWrapper, 'revealer--' + direction || 'revealer--right');
					classie.remove(self.revealerWrapper, 'revealer--animate');

					self.revealerWrapper.style.opacity = 0;
					self.isAnimating = false;

					// callback
					self.options.onEnd(self.direction);
				}
			});
		});

		// reveal fn callback
		if( typeof callback === 'function') {
			if( this.callbacktimeout ) {
				clearTimeout(this.callbacktimeout);
			}
			this.callbacktimeout = setTimeout(callback, callbacktime);
		}
	};

	/**
	 * destroy method
	 */
	Revealer.prototype.destroy = function() {
		classie.remove(bodyEl, this.options.effect);
		window.removeEventListener('resize', this.debounceResize);
		bodyEl.removeChild(this.revealerWrapper);
	};

	window.Revealer = Revealer;

})(window);



$(document).ready(function() {

  var pages = [].slice.call(document.querySelectorAll('.pages > .page'))
  var currentPage = 0
  var revealerOpts = {
    // the layers are the elements that move from the sides
    nmbLayers : 3,
    // bg color of each layer
    bgcolor : ['#36454f', '#708090', '#36454f'],
    // effect classname
    effect : 'anim--effect-3',
    onStart : function(direction) {
      // next page gets class page--animate-[direction]
      var nextPage;
      switch (direction) {
        case "cornertopleft":
          nextPage = currentPage === 0 ? pages[1] : pages[0];
          break;
        case "cornertopright":
          nextPage = pages[2];
          break;
        case "cornerbottomleft":
          nextPage = pages[3];
          break;
        case "cornerbottomright":
          nextPage = currentPage === 0 ? pages[4] : pages[0];
          break;
        default:
          nextPage = pages[0];
      }
      classie.add(nextPage, 'page--animate-' + direction);
    },
    onEnd : function(direction) {
      // remove class page--animate-[direction] from next page
      // var nextPage = pages[0];
      // nextPage.className = 'page';
    }
  };

  revealer = new Revealer(revealerOpts);

  // reveal function
  function reveal(direction) {
    var callbackTime = 750,
      callbackFn = function() {
        classie.remove(pages[currentPage], 'page--current');
        switch (direction) {
          case "cornertopleft":
            currentPage = currentPage === 0 ? 1 : 0;
            break;
          case "cornertopright":
            currentPage = currentPage === 0 ? 2 : 0;
            break;
          case "cornerbottomleft":
            currentPage = currentPage === 0 ? 3 : 0;
            break;
          case "cornerbottomright":
            currentPage = currentPage === 0 ? 4 : 0;
            break;
          default:
            currentPage = 0;
        }
        classie.add(pages[currentPage], 'page--current');
      };

    revealer.reveal(direction, callbackTime, callbackFn);
  }

  document.querySelector('a.nav-arrow.top-left').addEventListener('click', function() { reveal('cornertopleft'); });
  document.querySelector('a.home-arrow.top-left').addEventListener('click', function() { reveal('cornertopleft'); });
  document.querySelector('a.nav-arrow.top-right').addEventListener('click', function() { reveal('cornertopright'); });
  document.querySelector('a.home-arrow.top-right').addEventListener('click', function() { reveal('cornertopright'); });
  document.querySelector('a.nav-arrow.bottom-left').addEventListener('click', function() { reveal('cornerbottomleft'); });
  document.querySelector('a.home-arrow.bottom-left').addEventListener('click', function() { reveal('cornerbottomleft'); });
  document.querySelector('a.nav-arrow.bottom-right').addEventListener('click', function() { reveal('cornerbottomright'); });
  document.querySelector('a.home-arrow.bottom-right').addEventListener('click', function() { reveal('cornerbottomright'); });
});
