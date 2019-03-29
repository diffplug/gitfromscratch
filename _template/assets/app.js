/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/common/debounce.ts":
/*!************************************!*\
  !*** ./scripts/common/debounce.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n    var lastArgs, lastThis, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, trailing = true;\n    if (isObject(options)) {\n        leading = !!options.leading;\n        trailing = 'trailing' in options ? !!options.trailing : trailing;\n    }\n    function invokeFunc(time) {\n        var args = lastArgs, thisArg = lastThis;\n        lastArgs = lastThis = undefined;\n        lastInvokeTime = time;\n        result = func.apply(thisArg, args);\n        return result;\n    }\n    function leadingEdge(time) {\n        // Reset any `maxWait` timer.\n        lastInvokeTime = time;\n        // Start the timer for the trailing edge.\n        timerId = setTimeout(timerExpired, wait);\n        // Invoke the leading edge.\n        return leading ? invokeFunc(time) : result;\n    }\n    function remainingWait(time) {\n        if (lastCallTime === undefined) {\n            lastCallTime = 0;\n        }\n        var timeSinceLastCall = time - lastCallTime, timeWaiting = wait - timeSinceLastCall;\n        return timeWaiting;\n    }\n    function shouldInvoke(time) {\n        if (lastCallTime === undefined) {\n            return true;\n        }\n        var timeSinceLastCall = time - lastCallTime;\n        // Either this is the first call, activity has stopped and we're at the\n        // trailing edge, the system time has gone backwards and we're treating\n        // it as the trailing edge, or we've hit the `maxWait` limit.\n        return (timeSinceLastCall >= wait) || (timeSinceLastCall < 0);\n    }\n    function timerExpired() {\n        var time = Date.now();\n        if (shouldInvoke(time)) {\n            return trailingEdge(time);\n        }\n        // Restart the timer.\n        timerId = setTimeout(timerExpired, remainingWait(time));\n    }\n    function trailingEdge(time) {\n        timerId = undefined;\n        // Only invoke if we have `lastArgs` which means `func` has been\n        // debounced at least once.\n        if (trailing && lastArgs) {\n            return invokeFunc(time);\n        }\n        lastArgs = lastThis = undefined;\n        return result;\n    }\n    function cancel() {\n        if (timerId !== undefined) {\n            clearTimeout(timerId);\n        }\n        lastInvokeTime = 0;\n        lastArgs = lastCallTime = lastThis = timerId = undefined;\n    }\n    function flush() {\n        return timerId === undefined ? result : trailingEdge(Date.now());\n    }\n    function debounced() {\n        var time = Date.now(), isInvoking = shouldInvoke(time);\n        lastArgs = arguments;\n        lastThis = this;\n        lastCallTime = time;\n        if (isInvoking) {\n            if (timerId === undefined) {\n                return leadingEdge(lastCallTime);\n            }\n        }\n        if (timerId === undefined) {\n            timerId = setTimeout(timerExpired, wait);\n        }\n        return result;\n    }\n    debounced.cancel = cancel;\n    debounced.flush = flush;\n    return debounced;\n}\nexports.debounce = debounce;\nfunction isObject(value) {\n    var type = typeof value;\n    return value != null && (type == 'object' || type == 'function');\n}\nif (!Date.now) {\n    Date.now = function now() {\n        return new Date().getTime();\n    };\n}\n\n\n//# sourceURL=webpack:///./scripts/common/debounce.ts?");

/***/ }),

/***/ "./scripts/common/replaceCtrlIfMac.ts":
/*!********************************************!*\
  !*** ./scripts/common/replaceCtrlIfMac.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction replaceCtrlIfMacInit() {\n    if (navigator.appVersion.indexOf(\"Mac\") != -1) {\n        var $codeTags = $(\"code\");\n        $codeTags.each(function () {\n            var $this = $(this);\n            var re = /Ctrl/gi;\n            var newText = $this.text().replace(re, \"&#8984;\");\n            $this.html(newText);\n        });\n    }\n}\nexports.replaceCtrlIfMacInit = replaceCtrlIfMacInit;\n\n\n//# sourceURL=webpack:///./scripts/common/replaceCtrlIfMac.ts?");

/***/ }),

/***/ "./scripts/common/throttle.ts":
/*!************************************!*\
  !*** ./scripts/common/throttle.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// https://stackoverflow.com/questions/27078285/simple-throttle-in-js\n// Returns a function, that, when invoked, will only be triggered at most once\n// during a given window of time. Normally, the throttled function will run\n// as much as it can, without ever going more than once per `wait` duration;\n// but if you'd like to disable the execution on the leading edge, pass\n// `{leading: false}`. To disable execution on the trailing edge, ditto.\nfunction throttle(func, wait, options) {\n    var context, args, result;\n    var timeout = null;\n    var previous = 0;\n    if (!options)\n        options = {};\n    var later = function () {\n        previous = options.leading === false ? 0 : Date.now();\n        timeout = null;\n        result = func.apply(context, args);\n        if (!timeout)\n            context = args = null;\n    };\n    return function () {\n        var now = Date.now();\n        if (!previous && options.leading === false)\n            previous = now;\n        var remaining = wait - (now - previous);\n        context = this;\n        args = arguments;\n        if (remaining <= 0 || remaining > wait) {\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = null;\n            }\n            previous = now;\n            result = func.apply(context, args);\n            if (!timeout)\n                context = args = null;\n        }\n        else if (!timeout && options.trailing !== false) {\n            timeout = setTimeout(later, remaining);\n        }\n        return result;\n    };\n}\nexports.throttle = throttle;\n;\n\n\n//# sourceURL=webpack:///./scripts/common/throttle.ts?");

/***/ }),

/***/ "./scripts/common/videoPlayOnHover.ts":
/*!********************************************!*\
  !*** ./scripts/common/videoPlayOnHover.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar throttle_1 = __webpack_require__(/*! ./throttle */ \"./scripts/common/throttle.ts\");\nvar debounce_1 = __webpack_require__(/*! ./debounce */ \"./scripts/common/debounce.ts\");\nvar STATE__EDGES;\nvar STATE__ISHOVER = false;\nvar STATE__isPlaying = false;\nvar STATE__isScrubbing = false;\n/////////////////////////\n// SYNCHRONZIED VIDEOS //\n/////////////////////////\nfunction videoPlayOnHoverInit() {\n    // Assume all videos are perfectly aligned horizontally\n    var $firstVideo = $(\".video\").first();\n    if ($firstVideo.length > 0) {\n        // set state variables\n        STATE__EDGES = getVideoEdges($firstVideo);\n        window.onresize = debounce_1.debounce(function () {\n            // Reset state variables\n            STATE__EDGES = getVideoEdges($firstVideo);\n        }, 50, {});\n        // Define event handlers for all videos\n        $('.video__container').each(function () {\n            // grab all the videos and their progress indicators\n            var videos = $(this).find('.video');\n            var progress = $(this).find('.video__progress').children();\n            var setPlaying = function (isPlaying) {\n                videos.each(function () {\n                    if (!(this instanceof HTMLVideoElement)) {\n                        throw \"Expected this to be an HTMLVideoElement\";\n                    }\n                    if (isPlaying) {\n                        this.play();\n                        removeOverlay(this);\n                    }\n                    else {\n                        this.pause();\n                    }\n                });\n            };\n            // update the width of the progress elements as the video goes along\n            videos[0].addEventListener('timeupdate', function () {\n                if (!(this instanceof HTMLVideoElement)) {\n                    throw \"Expected this to be an HTMLVideoElement\";\n                }\n                if (STATE__ISHOVER) {\n                    progress.addClass('video__transition--fast');\n                }\n                if (STATE__isPlaying || STATE__isScrubbing) {\n                    var percent = Math.floor((100 / this.duration) * this.currentTime);\n                    progress.css('width', percent + '%');\n                }\n            }, false);\n            videos.each(function () {\n                // whenever a video ends, decrement the number of playing videos\n                this.addEventListener('ended', function () {\n                    videos.each(function () {\n                        if (!(this instanceof HTMLVideoElement)) {\n                            throw \"Expected this to be an HTMLVideoElement\";\n                        }\n                        this.currentTime = 0;\n                        progress.css('width', '0%');\n                        progress[0].offsetHeight; // force CSS reflow\n                        progress.removeClass('video__transition--fast');\n                        if (!STATE__isScrubbing) {\n                            this.play();\n                        }\n                    });\n                });\n                var $thisVideo = $(this);\n                // play the videos when they are hovered over, pause them when they aren't\n                $thisVideo.hover(function () {\n                    if (!STATE__isScrubbing) {\n                        setPlaying(true);\n                        STATE__ISHOVER = true;\n                        STATE__isPlaying = true;\n                    }\n                }, function () {\n                    if (!STATE__isScrubbing) {\n                        $thisVideo.off(\"mousemove\");\n                    }\n                    setPlaying(false);\n                    STATE__ISHOVER = false;\n                    STATE__isPlaying = false;\n                });\n                // On mousedown, scrub to cursor\n                $thisVideo.on(\"mousedown\", function (e) {\n                    throttle_1.throttle(setPlaying(false), 16, {});\n                    progress.removeClass('video__transition--fast');\n                    STATE__ISHOVER = false;\n                    STATE__isPlaying = false;\n                    STATE__isScrubbing = true;\n                    $thisVideo.on(\"mousemove\", throttle_1.throttle(onMouseMove, 16, {}));\n                    if (e.clientX) {\n                        scrubToCursor($thisVideo, e.clientX);\n                    }\n                });\n                $thisVideo.on(\"mouseup\", function () {\n                    setPlaying(true);\n                    STATE__ISHOVER = true;\n                    STATE__isScrubbing = false;\n                    STATE__isPlaying = true;\n                    $thisVideo.off(\"mousemove\");\n                });\n            });\n        });\n        $(document).on(\"blur\", function () {\n            cancelDragEvent();\n        });\n        $(document).on(\"mouseup\", function () {\n            cancelDragEvent();\n        });\n    }\n}\nexports.videoPlayOnHoverInit = videoPlayOnHoverInit;\nvar cancelDragEvent = function () {\n    $(\".video\").each(function () {\n        var $thisVideo = $(this);\n        $thisVideo.off(\"mousemove\");\n        STATE__isScrubbing = false;\n    });\n};\nvar getVideoEdges = function ($video) {\n    var offset = $video.offset();\n    var width = $video.width();\n    if (offset && width) {\n        var left = offset.left;\n        return {\n            left: left,\n            right: width + left,\n            width: width\n        };\n    }\n    else {\n        throw \"videoPlayOnHover: could not find video edges\";\n    }\n};\nvar scrubToCursor = function ($video, cursorPos) {\n    if (STATE__EDGES) {\n        var percentageIntoVideo = Math.floor(100 / STATE__EDGES.width * cursorPos);\n        var duration = $video[0].duration;\n        $video[0].currentTime = duration * percentageIntoVideo / 100;\n    }\n};\nvar onMouseMove = function (e) {\n    var $this = $(this);\n    if (e.clientX) {\n        scrubToCursor($this, e.clientX);\n    }\n};\nvar removeOverlay = function (video) {\n    var container = video.parentElement;\n    if (container) {\n        if (container.children.length === 3) {\n            var overlay = container.children[2];\n            if (overlay.className === \"video__overlay\") {\n                overlay.remove();\n            }\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./scripts/common/videoPlayOnHover.ts?");

/***/ }),

/***/ "./scripts/common/withinPageTOC.ts":
/*!*****************************************!*\
  !*** ./scripts/common/withinPageTOC.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/////////////////////\n// WITHIN-PAGE TOC //\n/////////////////////\nfunction tocInit() {\n    // disable browser default hash functionality\n    var hash = window.location.hash;\n    if (hash) {\n        setTimeout(function () {\n            window.scrollTo(0, 0);\n        }, 1);\n    }\n    var ANIMATE_TIME_MS = 500;\n    var FLASH_DELAY_HARD_SCROLL = 250;\n    var SECTION_HEADER_OFFSET = 55;\n    var flash = function (toFlash) {\n        toFlash.fadeOut(200).fadeIn(200);\n    };\n    var smoothScroll = function (section) {\n        // set the hash url to the new section\n        // setting the hash will trigger a scroll, so we use\n        // the history API, which avoids a scroll\n        history.replaceState({}, '', '#' + section.attr('id'));\n        // then we scroll to the target\n        var offset = section.offset();\n        if (offset != undefined) {\n            var target = offset.top - SECTION_HEADER_OFFSET;\n            $('html, body').animate({\n                'scrollTop': target\n            }, ANIMATE_TIME_MS, 'swing').promise().done(function () {\n                // and when we get there we trigger a flash\n                flash(section);\n            });\n        }\n    };\n    if (hash) {\n        // navigate to the appropriate point once the window has finished loading\n        var $section_1 = $(hash);\n        if ($section_1) {\n            window.onload = function () {\n                var offset = $section_1.offset();\n                if (offset != undefined) {\n                    smoothScroll($section_1);\n                    // flash the target section upon arrival\n                    setTimeout(function () {\n                        flash($(window.location.hash));\n                    }, FLASH_DELAY_HARD_SCROLL);\n                }\n            };\n        }\n    }\n    // clicking links generates scroll\n    $('.toc__link').on('click', function (event) {\n        event.preventDefault();\n        var sectionId = $(this).attr('href');\n        if (sectionId) {\n            smoothScroll($(sectionId));\n        }\n    });\n    // clicking link icon adds anchor to URL and scrolls\n    $('.docs__heading-container .docs__svg').on('click', function (event) {\n        var $heading = $(this).prev();\n        var hTag = $heading.prop(\"tagName\");\n        event.preventDefault();\n        if (hTag == \"H2\" || hTag == \"H3\") {\n            smoothScroll($(this).parent().parent());\n        }\n    });\n    // link icon only appears on hover state, or hover class for proper iOS functionality\n    $('.docs__heading-container').on('touchend', function () {\n        $(this).toggleClass('hover');\n    });\n}\nexports.tocInit = tocInit;\n\n\n//# sourceURL=webpack:///./scripts/common/withinPageTOC.ts?");

/***/ }),

/***/ "./scripts/index.ts":
/*!**************************!*\
  !*** ./scripts/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar withinPageTOC_1 = __webpack_require__(/*! ./common/withinPageTOC */ \"./scripts/common/withinPageTOC.ts\");\nvar videoPlayOnHover_1 = __webpack_require__(/*! ./common/videoPlayOnHover */ \"./scripts/common/videoPlayOnHover.ts\");\nvar replaceCtrlIfMac_1 = __webpack_require__(/*! ./common/replaceCtrlIfMac */ \"./scripts/common/replaceCtrlIfMac.ts\");\ndocument.addEventListener(\"DOMContentLoaded\", withinPageTOC_1.tocInit);\ndocument.addEventListener(\"DOMContentLoaded\", videoPlayOnHover_1.videoPlayOnHoverInit);\ndocument.addEventListener(\"DOMContentLoaded\", replaceCtrlIfMac_1.replaceCtrlIfMacInit);\n\n\n//# sourceURL=webpack:///./scripts/index.ts?");

/***/ })

/******/ });