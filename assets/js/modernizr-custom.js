/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-canvas-canvaswinding-checked-cssall-cssanimations-csscalc-csschunit-csscolumns-cssexunit-cssfilters-cssgradients-cssinvalid-cssmask-csspseudoanimations-cssremunit-cssscrollbar-csstransforms-cssvalid-cssvmaxunit-cssvminunit-cubicbezierrange-displaytable-ellipsis-emoji-flexbox-flexboxlegacy-flexboxtweener-fontface-fullscreen-generatedcontent-geolocation-hiddenscroll-hsla-htmlimports-ie8compat-inputtypes-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-overflowscrolling-preserve3d-rgba-shapes-siblinggeneral-supports-svg-target-textshadow-todataurljpeg_todataurlpng_todataurlwebp-userdata-video-webgl-wrapflow-printshiv-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),T.push((i?"":"no-")+s.join("-"))}}function o(e){var t=z.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?z.className.baseVal=t:z.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return e-1===t||e===t||e+1===t}function l(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){if("object"==typeof e)for(var n in e)A(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function f(){var e=t.body;return e||(e=a(E?"svg":"body"),e.fake=!0),e}function p(e,n,r,i){var o,s,d,l,c="modernizr",u=a("div"),p=f();if(parseInt(r,10))for(;r--;)d=a("div"),d.id=i?i[r]:c+(r+1),u.appendChild(d);return o=a("style"),o.type="text/css",o.id="s"+c,(p.fake?p:u).appendChild(o),p.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),u.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=z.style.overflow,z.style.overflow="hidden",z.appendChild(p)),s=n(u,e),p.fake?(p.parentNode.removeChild(p),z.style.overflow=l,z.offsetHeight):u.parentNode.removeChild(u),!!s}function h(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?h(i,n||t):i);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(g(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+g(t[i])+":"+r+")");return o=o.join(" or "),p("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==l(e,null,"position")})}return n}function y(e,t,i,o){function d(){u&&(delete O.style,delete O.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=v(e,i);if(!r(l,"undefined"))return l}for(var u,f,p,h,m,g=["modernizr","tspan","samp"];!O.style&&g.length;)u=!0,O.modElem=a(g.shift()),O.style=O.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],m=O.style[h],s(h,"-")&&(h=c(h)),O.style[h]!==n){if(o||r(i,"undefined"))return d(),"pfx"==t?h:!0;try{O.style[h]=i}catch(y){}if(O.style[h]!=m)return d(),"pfx"==t?h:!0}return d(),!1}function x(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+M.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?y(s,t,i,o):(s=(e+" "+D.join(a+" ")+a).split(" "),m(s,t,n))}function b(e,t,r){return x(e,n,n,t,r)}var T=[],w=[],C={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",S||k),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}});var z=t.documentElement;Modernizr.addTest("cssall","all"in z.style);var E="svg"===z.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=S.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),S.elements=n+" "+e,l(t)}function o(e){var t=C[e[T]];return t||(t={},w++,e[T]=w,C[w]=t),t}function a(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||x.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),d=s.length;d>a;a++)i.createElement(s[a]);return i}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function l(e){e||(e=t);var r=o(e);return!S.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||d(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(z+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function f(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+z+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function h(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),s=e.namespaces,d=e.parentWindow;return!E||e.printShived?e:("undefined"==typeof s[z]&&s.add(z),d.attachEvent("onbeforeprint",function(){t();for(var o,a,s,d=e.styleSheets,l=[],u=d.length,p=Array(u);u--;)p[u]=d[u];for(;s=p.pop();)if(!s.disabled&&k.test(s.media)){try{o=s.imports,a=o.length}catch(h){a=0}for(u=0;a>u;u++)p.push(o[u]);try{l.push(s.cssText)}catch(h){}}l=f(l.reverse().join("")),i=c(e),r=n(e,l)}),d.attachEvent("onafterprint",function(){p(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m,g,v="3.7.3",y=e.html5||{},x=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,T="_html5shiv",w=0,C={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){m=!0,g=!0}}();var S={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:g,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:i};e.html5=S,l(t);var k=/^$|\b(?:all|print)\b/,z="html5shiv",E=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();S.type+=" print",S.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=S)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("userdata",!!a("div").addBehavior),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var _=a("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===_.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===_.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===_.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=a("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,i=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=a("a"),n=a("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),z.appendChild(t),i=n.getBoundingClientRect(),z.removeChild(t),i=i.width&&i.width<4)}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var t=e.devicePixelRatio||1,n=12*t,r=a("canvas"),i=r.getContext("2d");return i.fillStyle="#f00",i.textBaseline="top",i.font="32px Arial",i.fillText("🐨",0,0),0!==i.getImageData(n,n,1,1).data[0]});var j=a("input"),N="search tel url email datetime date month week time datetime-local number range color".split(" "),P={};Modernizr.inputtypes=function(e){for(var r,i,o,a=e.length,s="1)",d=0;a>d;d++)j.setAttribute("type",r=e[d]),o="text"!==j.type&&"style"in j,o&&(j.value=s,j.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&j.style.WebkitAppearance!==n?(z.appendChild(j),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(j,null).WebkitAppearance&&0!==j.offsetHeight,z.removeChild(j)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?j.checkValidity&&j.checkValidity()===!1:j.value!=s)),P[e[d]]=!!o;return P}(N);var R=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=R,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+R.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=a("a");return e.style.cssText=R.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=R.length-1;o>i;i++)e=0===i?"to ":"",r+=t+R[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1});var W={elem:a("modernizr")};Modernizr._q.push(function(){delete W.elem}),Modernizr.addTest("csschunit",function(){var e,t=W.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=W.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e}),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",s(e.backgroundColor,"rgba")||s(e.backgroundColor,"hsla")});var A;!function(){var e={}.hasOwnProperty;A=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=u}),u("htmlimports","import"in a("link"));var L=C.testStyles=p;Modernizr.addTest("hiddenscroll",function(){return L("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("checked",function(){return L("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),L("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var B=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();B?Modernizr.addTest("fontface",!1):L('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),L('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),Modernizr.addTest("cssinvalid",function(){return L("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),L("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),L("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),L("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+R.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return L("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),Modernizr.addTest("cssvalid",function(){return L("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=a("input");return e.appendChild(t),t.clientWidth>10})}),L("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.min(o,a),10),c=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvminunit",d(s,c)||d(s,c-i))},3);var $=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return p("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=$,Modernizr.addTest("mediaqueries",$("only all")),L("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.max(o,a),10),c=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",d(s,c)||d(s,c-i))},3);var O={style:W.elem.style};Modernizr._q.unshift(function(){delete O.style});var F="Moz O ms Webkit",M=C._config.usePrefixes?F.split(" "):[];C._cssomPrefixes=M;var I=function(t){var r,i=R.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=R[a],d=s.toUpperCase()+"_"+r;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=I;var D=C._config.usePrefixes?F.toLowerCase().split(" "):[];C._domPrefixes=D;var q=C.testProp=function(e,t,r){return y([e],n,t,r)};Modernizr.addTest("textshadow",q("textShadow","1px 1px")),C.testAllProps=x;var U=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?I(e):(-1!=e.indexOf("-")&&(e=c(e)),t?x(e,t,n):x(e,"pfx"))};Modernizr.addTest("fullscreen",!(!U("exitFullscreen",t,!1)&&!U("cancelFullScreen",t,!1))),Modernizr.addTest("backgroundblendmode",U("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!U("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var e=U("wrapFlow");if(!e||E)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=a("div"),i=a("div"),o=a("span");i.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",r.appendChild(i),r.appendChild(o),z.appendChild(r);var s=o.offsetLeft;return z.removeChild(r),i=o=r=n,150==s}),C.testAllProps=b,Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("backdropfilter",b("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return b("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",b("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",b("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderimage",b("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",b("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",b("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return b("filter","blur(2px)");var e=a("a");return e.style.cssText=R.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",b("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",b("flexAlign","end",!0)),Modernizr.addTest("cssmask",b("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",b("overflowScrolling","touch",!0)),Modernizr.addTest("shapes",b("shapeOutside","content-box",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),i(),o(T),delete C.addTest,delete C.addAsyncTest;for(var V=0;V<Modernizr._q.length;V++)Modernizr._q[V]();e.Modernizr=Modernizr}(window,document);